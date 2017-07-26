import {FlashTarget, MbedTarget, FlashAlgos} from "dapjs-targets";
import {Device, CoreNames, ISANames, CortexReg} from "dapjs";
import {assembleBlock} from "thumb-assembler";
import HID from "webhid";

import {PlatformSelector} from "./device_selector";
import HTMLLogger from "./logger";

class DAPTest {
    public target: FlashTarget;
    
    private readonly selector: PlatformSelector;
    private device: USBDevice;
    private hid: HID;
    private dapDevice: Device;
    private deviceCode: string;

    private readonly chooseButton: HTMLButtonElement;
    private readonly connectButton: HTMLButtonElement;
    private registerTestButton: HTMLButtonElement;
    private memoryTestButton: HTMLButtonElement;
    private codeTestButton: HTMLButtonElement;

    private logger: HTMLLogger;

    constructor(logger: HTMLLogger) {
        this.selector = new PlatformSelector("platform-chooser", "platform-detected");
        
        this.chooseButton = document.getElementById("choose") as HTMLButtonElement;
        this.connectButton = document.getElementById("connect") as HTMLButtonElement;

        this.chooseButton.onclick = this.choose;
        this.connectButton.onclick = this.connect;

        this.logger = logger;
    }

    /**
     * Define `choose` as ES6 arrow function so that `this` is bound to the instance of DAPDemo, rather than bound to
     * the source of the click event.
     */
    private choose = async () => {
        this.device = await navigator.usb.requestDevice({ filters: [{vendorId: 0x0d28}]});
        this.deviceCode = this.device.serialNumber.slice(0, 4);

        const info = await this.selector.lookupDevice(this.deviceCode);

        this.selector.show(info);
        this.selector.enable();

        this.chooseButton.disabled = true;
        this.connectButton.disabled = false;
    }

    /**
     * Define `connect` as ES6 arrow function so that `this` is bound to the instance of DAPDemo, rather than bound to
     * the source of the click event.
     */
    private connect = async () => {
        this.hid = new HID(this.device);

        // open hid device
        await this.hid.open();

        this.dapDevice = new Device(this.hid);
        this.target = new MbedTarget(this.dapDevice, FlashAlgos.get(this.deviceCode));

        await this.target.init();
        await this.target.halt();

        const [imp, isa, type] = await this.target.readCoreType();
        this.log(`Connected to an ARM ${CoreNames.get(type)} (${ISANames.get(isa)})`);

        this.selector.disable();
        this.connectButton.disabled = true;

        const elements = Array.from(document.querySelectorAll(".when-connected"));

        for (const elem of elements) {
            (elem as HTMLButtonElement).disabled = false;
        }

        let tests = [
            {
                name: 'reg-test',
                func: this.registerTest,
            },
            {
                name: 'mem-test',
                func: this.memoryTest,
            },
            {
                name: 'code-test',
                func: this.codeTest,
            },
            {
                name: 'sw-bkpt-test',
                func: this.swBreakpointTest,
            },
            {
                name: 'hw-bkpt-test',
                func: this.hwBreakpointTest,
            },
        ];

        let pass = 0;
        let fail = 0;
        let skip = 0;
        let error = 0;

        for (const test of tests) {
            if (this.deviceCode == '9900' && test.name == 'hw-bkpt-test') {
                this.log('[skip] hw-bkpt-test is not applicable on the NRF51');
                skip++;
                continue;
            }

            try {
                console.log(this.target);
                const result = await test.func();

                if (result) {
                    this.log(`[pass] ${test.name}`);
                    pass++;
                } else {
                    this.log(`[fail] ${test.name}`);
                    fail++;
                }
            } catch (e) {
                this.log(`[error] ${test.name}: ${e}`);
                error++;
                return;
            }
        }

        this.log(`${pass} tests passed out of ${pass+fail}`);
    }

    private registerTest = async () => {
        await this.target.halt();

        for (let i = 0; i < 15; i++) {
            await this.target.writeCoreRegister(i, i * 4);
        }

        for (let i = 0; i < 15; i++) {
            const value = await this.target.readCoreRegister(i);

            if (value !== i * 4) {
                this.log(`Incorrect value read from register r${i}. ${value} read instead of ${i * 4}`);
                return false;
            }
        }

        return true;
    }

    private memoryTest = async () => {
        await this.target.halt();

        const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        await this.target.memory.writeBlock(0x20000000, data);
        const read = await this.target.memory.readBlock(0x20000000, data.length, 0x400);
        const read32 = new Uint32Array(read.buffer);

        if (read32.length !== data.length) {
            this.log(`Incorrect data read back. Should have had length ${data.length}, instead got ${read32.length}.`);
            return false;
        }

        for (let i = 0; i < data.length; i++) {
            if (read32[i] !== data[i]) {
                this.log(`Incorrect data read back in position ${i}. Expected ${data[i]}, got ${read32[i]}`);
                return false;
            }
        }

        return true;
    }

    private codeTest = async () => {
        const code = [
            {
                name: "basic",
                code: [
                    "mov r0, #14",
                    "bkpt #1"
                ],
                sp: 0,
                result: {
                    r0: 14,
                    r1: undefined
                }
            },
            {
                name: "loop",
                code: [
                    "mov r0, #10",
                    "mov r1, #0",
                    "loop:",
                    "   sub r0, #1",
                    "   add r1, #2",
                    "   cmp r0, #0",
                    "   bne loop",
                    "bkpt #1"
                ],
                sp: 0,
                result: {
                    r0: 0,
                    r1: 20
                }
            }
        ];
    
        for (const c of code) {
            // print an assembly listing
            console.debug(`Running example: ${c.name}`);

            for (const line of c.code) {
                console.debug(line);
            }
            
            const machine = assembleBlock(c.code);
            console.debug(`Assembles to: ${machine}`);

            // run!
            const wordBuffer = new Uint32Array(machine.buffer);
            const words = Array.from(wordBuffer);
            const r0 = await this.target.runCode(words, 0x20000000, 0x20000000, 0, c.sp, true, 0, 0, 0);
            const r1 = await this.target.readCoreRegister(CortexReg.R1);

            // get the cause of the bkpt
            const pc = await this.target.readCoreRegister(CortexReg.PC);
            const reg = await this.target.memory.read32(pc);
            console.log(`bkpt (at ${pc.toString(16)}) val: ${reg.toString(16)}??`);

            if (r0 !== c.result.r0) {
                this.log(`error running example ${c.name}. r0=${r0} returned, r0=${c.result.r0} expected.`);
                return false;
            } else if (!isNaN(c.result.r1) && r1 !== c.result.r1) {
                this.log(`error running example ${c.name}. r1=${r1} returned, r1=${c.result.r1} expected.`);
                return false;
            }
        }

        return true;
    }

    private swBreakpointTest = async () => {
        const code = [
            'bkpt #1',
            'bkpt #2',
            'bkpt #3',
            'bkpt #4',
        ];

        const machine = assembleBlock(code);
        const wordBuffer = new Uint32Array(machine.buffer);
        const words = Array.from(wordBuffer);
        const r0 = await this.target.runCode(words, 0x20000000, 0x20000000, 0, 0, true, 0, 0, 0);
        
        // check each breakpoint
        for (let i = 0; i < 4; i++) {
            let pc = await this.target.readCoreRegister(CortexReg.PC);
            let code = await this.target.memory.read32(pc);

            let bkpt_no = code;
            
            if (pc % 4 == 2) {
                bkpt_no >>= 16;
            }

            bkpt_no &= 0xff;

            if (bkpt_no !== i + 1) {
                this.log(`Incorrect bkpt number returned. (${bkpt_no}, expected ${i+1}`);
                return false;
            }

            console.log(`[${pc.toString(16)}]: ${code.toString(16)}`);
            await this.target.memory.write16(pc, /* nop */ 0x3801);

            if (i < 3) {
                await this.target.resume();
                await this.target.waitForHalt();
            }
        }

        return true;
    }

    /**
     * Note: THIS TEST DOES NOT WORK ON THE NRF51 - IT HAS NO RAM REGIONS < 0x20000000
     */
    private hwBreakpointTest = async () => {
        const code = Array(100).fill("nop");
        code.push('bkpt #3');
        const programAddress = 0x1fff0000;
        const breakAddress = 0x1fff000c;
        const machine = assembleBlock(code);
        const machineArray = Array.from(new Uint32Array(machine.buffer));

        await this.target.debug.setBreakpoint(breakAddress);
        await this.target.runCode(machineArray, programAddress, programAddress, 0, 0, true);
        await this.target.waitForHalt();

        const pc = await this.target.readCoreRegister(CortexReg.PC);
        
        if (pc !== breakAddress) {
            this.log(`Unexpected PC after breakpoint: ${pc.toString(16)}, when ${breakAddress.toString(16)} expected.`);
            return false;
        }

        return true;
    }

    private log(s: string) {
        this.logger.log(s);
    }

    private clearLog() {
        this.logger.clear();
    }
}

window.onload = () => {
    const logger = new HTMLLogger('#trace');
    const demo = new DAPTest(logger);
}
