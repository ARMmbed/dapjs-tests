import { DAP, CoreNames, ISANames, CortexReg, FlashTarget, FlashTargets } from "dapjs";
import { assembleBlock } from "thumb-assembler";
import HID from "webhid";

import { PlatformSelector } from "./device_selector";
import HTMLLogger from "./logger";
import { code } from "./green_bin";

class DAPTest {
    public target: FlashTarget;

    private readonly selector: PlatformSelector;
    private device: USBDevice;
    private hid: HID;
    private dapDevice: DAP;
    private deviceCode: string;

    private readonly chooseButton: HTMLButtonElement;
    private readonly connectButton: HTMLButtonElement;

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
     * Make sure `this` is bound lexically for all of the click event handlers.
     */
    private choose = async () => {
        this.device = await navigator.usb.requestDevice({ filters: [{ vendorId: 0x0d28 }] });
        this.deviceCode = this.device.serialNumber.slice(0, 4);

        const info = await this.selector.lookupDevice(this.deviceCode);

        this.selector.show(info);
        this.selector.enable();

        this.chooseButton.disabled = true;
        this.connectButton.disabled = false;
    }

    private connect = async () => {
        this.hid = new HID(this.device);

        // open hid device
        await this.hid.open();

        this.dapDevice = new DAP(this.hid);

        this.target = new FlashTarget(this.dapDevice, FlashTargets.get(this.deviceCode));

        console.log("initing.");
        await this.target.init();
        console.log("halting");
        await this.target.halt();
        console.log("halted");

        const [imp, isa, type] = await this.target.readCoreType();
        this.log(`Connected to an ARM ${CoreNames.get(type)} (${ISANames.get(isa)})`);

        this.selector.disable();
        this.connectButton.disabled = true;

        let tests = [
            { name: 'reg-test', func: this.registerTest },
            { name: 'mem-test', func: this.memoryTest },
            { name: 'code-test', func: this.codeTest },
            { name: 'sw-bkpt-test', func: this.swBreakpointTest },
            { name: 'hw-bkpt-test', func: this.hwBreakpointTest },
            { name: 'flash-init-test', func: this.flashInitTest },
            { name: 'flash-erase-test', func: this.flashEraseTest },
            { name: 'flash-test', func: this.flashTest },
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

        this.log(`${pass} tests passed out of ${pass + fail}`);
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

        let data: number[] = [];
        for (let i = 0; i < 256; i++) {
            data.push(Math.floor(Math.random() * (2 ^ 32)));
        }

        const dataArray = new Uint32Array(data);

        await this.target.memory.writeBlock(0x20000000, dataArray);
        const read = await this.target.memory.readBlock(0x20000000, data.length, 0x400);
        const read32 = new Uint32Array(read.buffer);

        if (read32.length !== dataArray.length) {
            this.log(`Incorrect data read back. Should have had length ${dataArray.length}, instead got ${read32.length}.`);
            return false;
        }

        for (let i = 0; i < dataArray.length; i++) {
            if (read32[i] !== dataArray[i]) {
                this.log(`Incorrect data read back in position ${i}. Expected ${dataArray[i]}, got ${read32[i]}`);
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
                lr: 0,
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
                lr: 0,
                result: {
                    r0: 0,
                    r1: 20
                }
            },
            {
                name: "return",
                code: [
                    "mov r0, #10",
                    "mov r1, r0",
                    "loop:",
                    "add r0, r0, r1",
                    "sub r1, r1, #1",
                    "cmp r1, #0",
                    "bgt loop",
                    // "nop", // pc := lr
                    "bx r14",
                    "bkpt #2",
                    "nop",
                    "nop",
                    "bkpt #1"
                ],
                lr: 0x20000011,
                sp: 0,
                result: {
                    r0: 65,
                    r1: undefined
                }
            }
        ];

        for (const c of code) {
            // print an assembly listing
            const machine = assembleBlock(c.code);
            console.log(machine);

            const r0 = await this.target.runCode(machine, 0x20000000, 0x20000000, c.lr, c.sp, true, 0, 0, 0);
            const r1 = await this.target.readCoreRegister(CortexReg.R1);

            console.log(r0, r1);

            let pc = await this.target.readCoreRegister(CortexReg.PC);
            let code = await this.target.memory.read16(pc);

            const bkpt_no = this.getSoftwareBreakpointReason(code);

            if (bkpt_no !== 1) {
                this.log(`error running example bkpt_no=${bkpt_no}, 1 expected.`);
                return false;
            } else if (r0 !== c.result.r0) {
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

        const r0 = await this.target.runCode(wordBuffer, 0x20000000, 0x20000000, 0, 0, true, 0, 0, 0);

        // check each breakpoint
        for (let i = 0; i < 4; i++) {
            let pc = await this.target.readCoreRegister(CortexReg.PC);
            let code = await this.target.memory.read16(pc);

            const bkpt_no = this.getSoftwareBreakpointReason(code);
            if (bkpt_no !== i + 1) {
                this.log(`Incorrect bkpt number returned. (${bkpt_no}, expected ${i + 1}`);
                return false;
            }

            await this.target.memory.write16(pc, /* nop */ 0x3801);

            if (i < 3) {
                await this.target.resume();
                await this.target.waitForHalt();
            }
        }

        return true;
    }

    private getSoftwareBreakpointReason = (code: number) => {
        if ((code & 0xbe00) !== 0xbe00) {
            // this isn't a bkpt instruction :/
            console.warn("SW breakpoint reason tested for non-bkpt instruction.");
        }

        return code & 0xff;
    }

    /**
     * Note: THIS TEST DOES NOT WORK ON THE NRF51 - IT HAS NO RAM REGIONS < 0x20000000
     */
    private hwBreakpointTest = async () => {
        const code = Array(100).fill("nop");

        // make sure we stop at some point if the HW breakpoint doesn't work.
        code.push('bkpt #3');

        const programAddress = 0x1fff0000;
        const breakAddress = 0x1fff000c;
        const machine = assembleBlock(code);
        const machineArray = new Uint32Array(machine.buffer);

        await this.target.debug.setBreakpoint(breakAddress);
        await this.target.runCode(machineArray, programAddress, programAddress, 0, 0, true);
        await this.target.waitForHalt();

        const pc = await this.target.readCoreRegister(CortexReg.PC);

        if (pc !== breakAddress) {
            this.log(`Unexpected PC after breakpoint: ${pc.toString(16)}, when ${breakAddress.toString(16)} expected.`);

            // find out whether this was a bkpt
            const inst = await this.target.memory.read16(pc);
            if (this.getSoftwareBreakpointReason(inst) == 3) {
                this.log("The hardware breakpoint was probably not set: the software breakpoint was probably hit instead.");
            }

            return false;
        }

        return true;
    }

    private flashInitTest = async () => {
        const code = await this.target.flashInit();

        if (code !== 0) {
            this.log(`[flash-init] non-zero return code: ${code}`);
            return false;
        }

        return true;
    }

    private flashEraseTest = async () => {
        const code = await this.target.eraseChip();

        if (code !== 0) {
            this.log(`[flash-erase] non-zero return code: ${code}`);
            return false;
        }

        return true;
    }

    private flashTest = async () => {
        await this.target.flash(code);
        console.debug("[target] flashed!");

        const data = await this.target.memory.readBlock(0x0, 0x1000, 0x100);
        const data32 = new Uint32Array(data.buffer);

        data32.forEach(x => {
            console.log(x.toString(16));
        });

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

    (window as any).demo = demo;
}
