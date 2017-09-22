/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.readUInt32LE = function (b, idx) {
    return (b[idx] |
        (b[idx + 1] << 8) |
        (b[idx + 2] << 16) |
        (b[idx + 3] << 24)) >>> 0;
};
exports.bufferConcat = function (bufs) {
    var len = 0;
    for (var _i = 0, bufs_1 = bufs; _i < bufs_1.length; _i++) {
        var b = bufs_1[_i];
        len += b.length;
    }
    var r = new Uint8Array(len);
    len = 0;
    for (var _a = 0, bufs_2 = bufs; _a < bufs_2.length; _a++) {
        var b = bufs_2[_a];
        r.set(b, len);
        len += b.length;
    }
    return r;
};
exports.delay = function (t) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve) {
                setTimeout(resolve, t);
            })];
    });
}); };
exports.addInt32 = function (arr, val) {
    if (!arr) {
        arr = [];
    }
    arr.push(val & 0xff, (val >> 8) & 0xff, (val >> 16) & 0xff, (val >> 24) & 0xff);
    return arr;
};
exports.hex = function (v) {
    return "0x" + v.toString(16);
};
exports.rid = function (v) {
    var m = [
        "DP_0x0",
        "DP_0x4",
        "DP_0x8",
        "DP_0xC",
        "AP_0x0",
        "AP_0x4",
        "AP_0x8",
        "AP_0xC",
    ];
    return m[v] || "?";
};
exports.bank = function (addr) {
    var APBANKSEL = 0x000000f0;
    return (addr & APBANKSEL) | (addr & 0xff000000);
};
exports.apReg = function (r, mode) {
    var v = r | mode | 1 /* AP_ACC */;
    return (4 + ((v & 0x0c) >> 2));
};
exports.bufToUint32Array = function (buf) {
    exports.assert((buf.length & 3) === 0);
    var r = [];
    if (!buf.length) {
        return r;
    }
    r[buf.length / 4 - 1] = 0;
    for (var i = 0; i < r.length; ++i) {
        r[i] = exports.readUInt32LE(buf, i << 2);
    }
    return r;
};
exports.assert = function (cond) {
    if (!cond) {
        throw new Error("assertion failed");
    }
};
exports.regRequest = function (regId, isWrite) {
    if (isWrite === void 0) { isWrite = false; }
    var request = !isWrite ? 2 /* READ */ : 0 /* WRITE */;
    if (regId < 4) {
        request |= 0 /* DP_ACC */;
    }
    else {
        request |= 1 /* AP_ACC */;
    }
    request |= (regId & 3) << 2;
    return request;
};
exports.hexBytes = function (bytes) {
    var chk = 0;
    var r = ":";
    bytes.forEach(function (b) { return chk += b; });
    bytes.push((-chk) & 0xff);
    bytes.forEach(function (b) { return r += ("0" + b.toString(16)).slice(-2); });
    return r.toUpperCase();
};
exports.hex2bin = function (hexstr) {
    var array = new Uint8Array(hexstr.length / 2);
    for (var i = 0; i < hexstr.length / 2; i++) {
        array[i] = parseInt(hexstr.substr(2 * i, 2), 16);
    }
    return array;
};
//# sourceMappingURL=util.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var debug_1 = __webpack_require__(4);
var util_1 = __webpack_require__(0);
var memory_1 = __webpack_require__(6);
var DEFAULT_RUNCODE_TIMEOUT = 10000 /* ms */;
exports.CPUID_IMPLEMENTER_MASK = 0xff000000;
exports.CPUID_IMPLEMENTER_POS = 24;
exports.CPUID_VARIANT_MASK = 0x00f00000;
exports.CPUID_VARIANT_POS = 20;
exports.CPUID_ARCHITECTURE_MASK = 0x000f0000;
exports.CPUID_ARCHITECTURE_POS = 16;
exports.CPUID_PARTNO_MASK = 0x0000fff0;
exports.CPUID_PARTNO_POS = 4;
exports.CPUID_REVISION_MASK = 0x0000000f;
exports.CPUID_REVISION_POS = 0;
exports.ISANames = new Map();
exports.ISANames.set(12 /* ARMv6M */, "ARMv6M");
exports.ISANames.set(15 /* ARMv7M */, "ARMv7M");
exports.CoreNames = new Map();
exports.CoreNames.set(3104 /* CortexM0 */, "Cortex-M0");
exports.CoreNames.set(3105 /* CortexM1 */, "Cortex-M1");
exports.CoreNames.set(3107 /* CortexM3 */, "Cortex-M3");
exports.CoreNames.set(3108 /* CortexM4 */, "Cortex-M4");
exports.CoreNames.set(3168 /* CortexM0p */, "Cortex-M0+");
/**
 * Abstraction of an ARM Cortex M CPU from a programmer's perspective. Provides functionality
 * for setting breakpoints, reading general-purpose registers, reading from memory and stopping
 * and starting the CPU.
 */
var CortexM = (function () {
    function CortexM(device) {
        this.dev = device;
        this.memory = new memory_1.Memory(device);
        this.debug = new debug_1.Debug(this);
    }
    /**
     * Initialise the debug access port on the device, and read the device type.
     */
    CortexM.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dev.init()];
                    case 1:
                        _a.sent();
                        // FIXME: don't run this if security is enabled on the K64F
                        return [4 /*yield*/, this.debug.setupFpb()];
                    case 2:
                        // FIXME: don't run this if security is enabled on the K64F
                        _a.sent();
                        return [4 /*yield*/, this.readCoreType()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Read the current state of the CPU.
     *
     * @returns A member of the `CoreState` enum corresponding to the current status of the CPU.
     */
    CortexM.prototype.getState = function () {
        return __awaiter(this, void 0, void 0, function () {
            var dhcsr, newDHCSR;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.memory.read32(3758157296 /* DHCSR */)];
                    case 1:
                        dhcsr = _a.sent();
                        if (!(dhcsr & 33554432 /* S_RESET_ST */)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.memory.read32(3758157296 /* DHCSR */)];
                    case 2:
                        newDHCSR = _a.sent();
                        if (newDHCSR & 33554432 /* S_RESET_ST */ && !(newDHCSR & 16777216 /* S_RETIRE_ST */)) {
                            return [2 /*return*/, 0 /* TARGET_RESET */];
                        }
                        _a.label = 3;
                    case 3:
                        if (dhcsr & 524288 /* S_LOCKUP */) {
                            return [2 /*return*/, 1 /* TARGET_LOCKUP */];
                        }
                        else if (dhcsr & 262144 /* S_SLEEP */) {
                            return [2 /*return*/, 2 /* TARGET_SLEEPING */];
                        }
                        else if (dhcsr & 131072 /* S_HALT */) {
                            return [2 /*return*/, 3 /* TARGET_HALTED */];
                        }
                        else {
                            return [2 /*return*/, 4 /* TARGET_RUNNING */];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Read the CPUID register from the CPU, and interpret its meaning in terms of implementer,
     * architecture and core type.
     */
    CortexM.prototype.readCoreType = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cpuid, implementer, arch, coreType;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.memory.read32(3758157056 /* CPUID */)];
                    case 1:
                        cpuid = _a.sent();
                        implementer = ((cpuid & exports.CPUID_IMPLEMENTER_MASK) >> exports.CPUID_IMPLEMENTER_POS);
                        arch = ((cpuid & exports.CPUID_ARCHITECTURE_MASK) >> exports.CPUID_ARCHITECTURE_POS);
                        coreType = ((cpuid & exports.CPUID_PARTNO_MASK) >> exports.CPUID_PARTNO_POS);
                        console.debug("Found an ARM " + exports.CoreNames.get(coreType));
                        return [2 /*return*/, [implementer, arch, coreType]];
                }
            });
        });
    };
    /**
     * Read a core register from the CPU (e.g. r0...r15, pc, sp, lr, s0...)
     *
     * @param no Member of the `CortexReg` enum - an ARM Cortex CPU general-purpose register.
     */
    CortexM.prototype.readCoreRegister = function (no) {
        return __awaiter(this, void 0, void 0, function () {
            var v;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.memory.write32(3758157300 /* DCRSR */, no)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.memory.read32(3758157296 /* DHCSR */)];
                    case 2:
                        v = _a.sent();
                        util_1.assert(v & 65536 /* S_REGRDY */);
                        return [4 /*yield*/, this.memory.read32(3758157304 /* DCRDR */)];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Write a 32-bit word to the specified CPU general-purpose register.
     *
     * @param no Member of the `CortexReg` enum - an ARM Cortex CPU general-purpose register.
     * @param val Value to be written.
     */
    CortexM.prototype.writeCoreRegister = function (no, val) {
        return __awaiter(this, void 0, void 0, function () {
            var v;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.memory.write32(3758157304 /* DCRDR */, val)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.memory.write32(3758157300 /* DCRSR */, no | 65536 /* DCRSR_REGWnR */)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.memory.read32(3758157296 /* DHCSR */)];
                    case 3:
                        v = _a.sent();
                        util_1.assert(v & 65536 /* S_REGRDY */);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Halt the CPU core.
     */
    CortexM.prototype.halt = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.memory.write32(3758157296 /* DHCSR */, -1604386816 /* DBGKEY */ | 1 /* C_DEBUGEN */ | 2 /* C_HALT */)];
            });
        });
    };
    /**
     * Resume the CPU core.
     */
    CortexM.prototype.resume = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.isHalted()];
                    case 1:
                        if (!_a.sent()) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.memory.write32(3758157104 /* DFSR */, 4 /* DFSR_DWTTRAP */ | 2 /* DFSR_BKPT */ | 1 /* DFSR_HALTED */)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.debug.enable()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Find out whether the CPU is halted.
     */
    CortexM.prototype.isHalted = function () {
        return __awaiter(this, void 0, void 0, function () {
            var s;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.status()];
                    case 1:
                        s = _a.sent();
                        return [2 /*return*/, s.isHalted];
                }
            });
        });
    };
    /**
     * Read the current status of the CPU.
     *
     * @returns Object containing the contents of the `DHCSR` register, the `DFSR` register, and a boolean value
     * stating the current halted state of the CPU.
     */
    CortexM.prototype.status = function () {
        return __awaiter(this, void 0, void 0, function () {
            var dhcsr, dfsr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.memory.read32(3758157296 /* DHCSR */)];
                    case 1:
                        dhcsr = _a.sent();
                        return [4 /*yield*/, this.memory.read32(3758157104 /* DFSR */)];
                    case 2:
                        dfsr = _a.sent();
                        return [2 /*return*/, {
                                dfsr: dfsr,
                                dhscr: dhcsr,
                                isHalted: !!(dhcsr & 131072 /* S_HALT */),
                            }];
                }
            });
        });
    };
    /**
     * Reset the CPU core. This currently does a software reset - it is also technically possible to perform a 'hard'
     * reset using the reset pin from the debugger.
     */
    CortexM.prototype.reset = function (halt) {
        if (halt === void 0) { halt = false; }
        return __awaiter(this, void 0, void 0, function () {
            var demcr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!halt) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.halt()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.memory.read32(3758157308 /* DEMCR */)];
                    case 2:
                        demcr = _a.sent();
                        return [4 /*yield*/, this.memory.write32(3758157308 /* DEMCR */, demcr | 1 /* DEMCR_VC_CORERESET */)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.softwareReset()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.waitForHalt()];
                    case 5:
                        _a.sent();
                        // Unset the VC_CORERESET bit
                        return [4 /*yield*/, this.memory.write32(3758157308 /* DEMCR */, demcr)];
                    case 6:
                        // Unset the VC_CORERESET bit
                        _a.sent();
                        return [3 /*break*/, 9];
                    case 7: return [4 /*yield*/, this.softwareReset()];
                    case 8:
                        _a.sent();
                        _a.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Run specified machine code natively on the device. Assumes usual C calling conventions
     * - returns the value of r0 once the program has terminated. The program _must_ terminate
     * in order for this function to return. This can be achieved by placing a `bkpt`
     * instruction at the end of the function.
     *
     * **FIXME**: currently causes a hard fault when the core is resumed after successfully uploading
     * the blob to memory and setting core registers.
     *
     * @param code array containing the machine code (32-bit words).
     * @param address memory address at which to place the code.
     * @param pc initial value of the program counter.
     * @param lr initial value of the link register.
     * @param sp initial value of the stack pointer.
     * @param upload should we upload the code before running it.
     * @param args set registers r0...rn before running code
     *
     * @returns A promise for the value of r0 on completion of the function call.
     */
    CortexM.prototype.runCode = function (code, address, pc, lr, sp, upload) {
        var args = [];
        for (var _i = 6; _i < arguments.length; _i++) {
            args[_i - 6] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // Halt the core
                    return [4 /*yield*/, this.halt()];
                    case 1:
                        // Halt the core
                        _a.sent();
                        // Point the program counter to the start of the program
                        return [4 /*yield*/, this.writeCoreRegister(15 /* PC */, pc)];
                    case 2:
                        // Point the program counter to the start of the program
                        _a.sent();
                        return [4 /*yield*/, this.writeCoreRegister(14 /* LR */, lr)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.writeCoreRegister(13 /* SP */, sp)];
                    case 4:
                        _a.sent();
                        i = 0;
                        _a.label = 5;
                    case 5:
                        if (!(i < args.length)) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.writeCoreRegister(i, args[i])];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7:
                        i++;
                        return [3 /*break*/, 5];
                    case 8:
                        if (!upload) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.memory.writeBlock(address, code)];
                    case 9:
                        _a.sent();
                        _a.label = 10;
                    case 10: 
                    // Run the program and wait for halt
                    return [4 /*yield*/, this.resume()];
                    case 11:
                        // Run the program and wait for halt
                        _a.sent();
                        return [4 /*yield*/, this.waitForHalt(DEFAULT_RUNCODE_TIMEOUT)];
                    case 12:
                        _a.sent(); // timeout after 10s
                        return [4 /*yield*/, this.readCoreRegister(0 /* R0 */)];
                    case 13: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Spin until the chip has halted.
     */
    CortexM.prototype.waitForHalt = function (timeout) {
        if (timeout === void 0) { timeout = 0; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var running, _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    running = true;
                                    if (timeout > 0) {
                                        setTimeout(function () {
                                            reject("waitForHalt timed out.");
                                            running = false;
                                        }, timeout);
                                    }
                                    _b.label = 1;
                                case 1:
                                    _a = running;
                                    if (!_a) return [3 /*break*/, 3];
                                    return [4 /*yield*/, this.isHalted()];
                                case 2:
                                    _a = !(_b.sent());
                                    _b.label = 3;
                                case 3:
                                    if (!_a) return [3 /*break*/, 4];
                                    return [3 /*break*/, 1];
                                case 4:
                                    if (running) {
                                        resolve();
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    CortexM.prototype.softwareReset = function () {
        return __awaiter(this, void 0, void 0, function () {
            var dhcsr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.memory.write32(3758157068 /* NVIC_AIRCR */, 100270080 /* NVIC_AIRCR_VECTKEY */ | 4 /* NVIC_AIRCR_SYSRESETREQ */)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.memory.read32(3758157296 /* DHCSR */)];
                    case 2:
                        dhcsr = _a.sent();
                        _a.label = 3;
                    case 3:
                        if (!((dhcsr & 33554432 /* S_RESET_ST */) !== 0)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.memory.read32(3758157296 /* DHCSR */)];
                    case 4:
                        dhcsr = _a.sent();
                        return [3 /*break*/, 3];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return CortexM;
}());
exports.CortexM = CortexM;
//# sourceMappingURL=cortex_m.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var dapjs_1 = __webpack_require__(3);
var thumb_assembler_1 = __webpack_require__(13);
var webhid_1 = __webpack_require__(14);
var device_selector_1 = __webpack_require__(15);
var logger_1 = __webpack_require__(16);
var green_bin_1 = __webpack_require__(17);
var DAPTest = (function () {
    function DAPTest(logger) {
        var _this = this;
        /**
         * Make sure `this` is bound lexically for all of the click event handlers.
         */
        this.choose = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, info;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, navigator.usb.requestDevice({ filters: [{ vendorId: 0x0d28 }] })];
                    case 1:
                        _a.device = _b.sent();
                        this.deviceCode = this.device.serialNumber.slice(0, 4);
                        return [4 /*yield*/, this.selector.lookupDevice(this.deviceCode)];
                    case 2:
                        info = _b.sent();
                        this.selector.show(info);
                        this.selector.enable();
                        this.chooseButton.disabled = true;
                        this.connectButton.disabled = false;
                        return [2 /*return*/];
                }
            });
        }); };
        this.connect = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, imp, isa, type, tests, pass, fail, skip, error, _i, tests_1, test, result, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.hid = new webhid_1.default(this.device);
                        // open hid device
                        return [4 /*yield*/, this.hid.open()];
                    case 1:
                        // open hid device
                        _b.sent();
                        this.dapDevice = new dapjs_1.DAP(this.hid);
                        this.target = new dapjs_1.FlashTarget(this.dapDevice, dapjs_1.FlashTargets.get(this.deviceCode));
                        console.log("initing.");
                        return [4 /*yield*/, this.target.init()];
                    case 2:
                        _b.sent();
                        console.log("halting");
                        return [4 /*yield*/, this.target.halt()];
                    case 3:
                        _b.sent();
                        console.log("halted");
                        return [4 /*yield*/, this.target.readCoreType()];
                    case 4:
                        _a = _b.sent(), imp = _a[0], isa = _a[1], type = _a[2];
                        this.log("Connected to an ARM " + dapjs_1.CoreNames.get(type) + " (" + dapjs_1.ISANames.get(isa) + ")");
                        this.selector.disable();
                        this.connectButton.disabled = true;
                        tests = [
                            { name: 'reg-test', func: this.registerTest },
                            { name: 'mem-test', func: this.memoryTest },
                            { name: 'code-test', func: this.codeTest },
                            { name: 'sw-bkpt-test', func: this.swBreakpointTest },
                            { name: 'hw-bkpt-test', func: this.hwBreakpointTest },
                            { name: 'flash-init-test', func: this.flashInitTest },
                            { name: 'flash-erase-test', func: this.flashEraseTest },
                            { name: 'flash-test', func: this.flashTest },
                        ];
                        pass = 0;
                        fail = 0;
                        skip = 0;
                        error = 0;
                        _i = 0, tests_1 = tests;
                        _b.label = 5;
                    case 5:
                        if (!(_i < tests_1.length)) return [3 /*break*/, 10];
                        test = tests_1[_i];
                        if (this.deviceCode == '9900' && test.name == 'hw-bkpt-test') {
                            this.log('[skip] hw-bkpt-test is not applicable on the NRF51');
                            skip++;
                            return [3 /*break*/, 9];
                        }
                        _b.label = 6;
                    case 6:
                        _b.trys.push([6, 8, , 9]);
                        return [4 /*yield*/, test.func()];
                    case 7:
                        result = _b.sent();
                        if (result) {
                            this.log("[pass] " + test.name);
                            pass++;
                        }
                        else {
                            this.log("[fail] " + test.name);
                            fail++;
                        }
                        return [3 /*break*/, 9];
                    case 8:
                        e_1 = _b.sent();
                        this.log("[error] " + test.name + ": " + e_1);
                        error++;
                        return [2 /*return*/];
                    case 9:
                        _i++;
                        return [3 /*break*/, 5];
                    case 10:
                        this.log(pass + " tests passed out of " + (pass + fail));
                        return [2 /*return*/];
                }
            });
        }); };
        this.registerTest = function () { return __awaiter(_this, void 0, void 0, function () {
            var i, i, value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.target.halt()];
                    case 1:
                        _a.sent();
                        i = 0;
                        _a.label = 2;
                    case 2:
                        if (!(i < 15)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.target.writeCoreRegister(i, i * 4)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 2];
                    case 5:
                        i = 0;
                        _a.label = 6;
                    case 6:
                        if (!(i < 15)) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.target.readCoreRegister(i)];
                    case 7:
                        value = _a.sent();
                        if (value !== i * 4) {
                            this.log("Incorrect value read from register r" + i + ". " + value + " read instead of " + i * 4);
                            return [2 /*return*/, false];
                        }
                        _a.label = 8;
                    case 8:
                        i++;
                        return [3 /*break*/, 6];
                    case 9: return [2 /*return*/, true];
                }
            });
        }); };
        this.memoryTest = function () { return __awaiter(_this, void 0, void 0, function () {
            var data, i, dataArray, read, read32, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.target.halt()];
                    case 1:
                        _a.sent();
                        data = [];
                        for (i = 0; i < 256; i++) {
                            data.push(Math.floor(Math.random() * (2 ^ 32)));
                        }
                        dataArray = new Uint32Array(data);
                        return [4 /*yield*/, this.target.memory.writeBlock(0x20000000, dataArray)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.target.memory.readBlock(0x20000000, data.length, 0x400)];
                    case 3:
                        read = _a.sent();
                        read32 = new Uint32Array(read.buffer);
                        if (read32.length !== dataArray.length) {
                            this.log("Incorrect data read back. Should have had length " + dataArray.length + ", instead got " + read32.length + ".");
                            return [2 /*return*/, false];
                        }
                        for (i = 0; i < dataArray.length; i++) {
                            if (read32[i] !== dataArray[i]) {
                                this.log("Incorrect data read back in position " + i + ". Expected " + dataArray[i] + ", got " + read32[i]);
                                return [2 /*return*/, false];
                            }
                        }
                        return [2 /*return*/, true];
                }
            });
        }); };
        this.codeTest = function () { return __awaiter(_this, void 0, void 0, function () {
            var code, _i, code_1, c, machine, r0, r1, pc, code_2, bkpt_no;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        code = [
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
                        _i = 0, code_1 = code;
                        _a.label = 1;
                    case 1:
                        if (!(_i < code_1.length)) return [3 /*break*/, 7];
                        c = code_1[_i];
                        machine = thumb_assembler_1.assembleBlock(c.code);
                        console.log(machine);
                        return [4 /*yield*/, this.target.runCode(machine, 0x20000000, 0x20000000, c.lr, c.sp, true, 0, 0, 0)];
                    case 2:
                        r0 = _a.sent();
                        return [4 /*yield*/, this.target.readCoreRegister(1 /* R1 */)];
                    case 3:
                        r1 = _a.sent();
                        console.log(r0, r1);
                        return [4 /*yield*/, this.target.readCoreRegister(15 /* PC */)];
                    case 4:
                        pc = _a.sent();
                        return [4 /*yield*/, this.target.memory.read16(pc)];
                    case 5:
                        code_2 = _a.sent();
                        bkpt_no = this.getSoftwareBreakpointReason(code_2);
                        if (bkpt_no !== 1) {
                            this.log("error running example bkpt_no=" + bkpt_no + ", 1 expected.");
                            return [2 /*return*/, false];
                        }
                        else if (r0 !== c.result.r0) {
                            this.log("error running example " + c.name + ". r0=" + r0 + " returned, r0=" + c.result.r0 + " expected.");
                            return [2 /*return*/, false];
                        }
                        else if (!isNaN(c.result.r1) && r1 !== c.result.r1) {
                            this.log("error running example " + c.name + ". r1=" + r1 + " returned, r1=" + c.result.r1 + " expected.");
                            return [2 /*return*/, false];
                        }
                        _a.label = 6;
                    case 6:
                        _i++;
                        return [3 /*break*/, 1];
                    case 7: return [2 /*return*/, true];
                }
            });
        }); };
        this.swBreakpointTest = function () { return __awaiter(_this, void 0, void 0, function () {
            var code, machine, wordBuffer, r0, i, pc, code_3, bkpt_no;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        code = [
                            'bkpt #1',
                            'bkpt #2',
                            'bkpt #3',
                            'bkpt #4',
                        ];
                        machine = thumb_assembler_1.assembleBlock(code);
                        wordBuffer = new Uint32Array(machine.buffer);
                        return [4 /*yield*/, this.target.runCode(wordBuffer, 0x20000000, 0x20000000, 0, 0, true, 0, 0, 0)];
                    case 1:
                        r0 = _a.sent();
                        i = 0;
                        _a.label = 2;
                    case 2:
                        if (!(i < 4)) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.target.readCoreRegister(15 /* PC */)];
                    case 3:
                        pc = _a.sent();
                        return [4 /*yield*/, this.target.memory.read16(pc)];
                    case 4:
                        code_3 = _a.sent();
                        bkpt_no = this.getSoftwareBreakpointReason(code_3);
                        if (bkpt_no !== i + 1) {
                            this.log("Incorrect bkpt number returned. (" + bkpt_no + ", expected " + (i + 1));
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, this.target.memory.write16(pc, /* nop */ 0x3801)];
                    case 5:
                        _a.sent();
                        if (!(i < 3)) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.target.resume()];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.target.waitForHalt()];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8:
                        i++;
                        return [3 /*break*/, 2];
                    case 9: return [2 /*return*/, true];
                }
            });
        }); };
        this.getSoftwareBreakpointReason = function (code) {
            if ((code & 0xbe00) !== 0xbe00) {
                // this isn't a bkpt instruction :/
                console.warn("SW breakpoint reason tested for non-bkpt instruction.");
            }
            return code & 0xff;
        };
        /**
         * Note: THIS TEST DOES NOT WORK ON THE NRF51 - IT HAS NO RAM REGIONS < 0x20000000
         */
        this.hwBreakpointTest = function () { return __awaiter(_this, void 0, void 0, function () {
            var code, programAddress, breakAddress, machine, machineArray, pc, inst;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        code = Array(100).fill("nop");
                        // make sure we stop at some point if the HW breakpoint doesn't work.
                        code.push('bkpt #3');
                        programAddress = 0x1fff0000;
                        breakAddress = 0x1fff000c;
                        machine = thumb_assembler_1.assembleBlock(code);
                        machineArray = new Uint32Array(machine.buffer);
                        return [4 /*yield*/, this.target.debug.setBreakpoint(breakAddress)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.target.runCode(machineArray, programAddress, programAddress, 0, 0, true)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.target.waitForHalt()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.target.readCoreRegister(15 /* PC */)];
                    case 4:
                        pc = _a.sent();
                        if (!(pc !== breakAddress)) return [3 /*break*/, 6];
                        this.log("Unexpected PC after breakpoint: " + pc.toString(16) + ", when " + breakAddress.toString(16) + " expected.");
                        return [4 /*yield*/, this.target.memory.read16(pc)];
                    case 5:
                        inst = _a.sent();
                        if (this.getSoftwareBreakpointReason(inst) == 3) {
                            this.log("The hardware breakpoint was probably not set: the software breakpoint was probably hit instead.");
                        }
                        return [2 /*return*/, false];
                    case 6: return [2 /*return*/, true];
                }
            });
        }); };
        this.flashInitTest = function () { return __awaiter(_this, void 0, void 0, function () {
            var code;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.target.flashInit()];
                    case 1:
                        code = _a.sent();
                        if (code !== 0) {
                            this.log("[flash-init] non-zero return code: " + code);
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/, true];
                }
            });
        }); };
        this.flashEraseTest = function () { return __awaiter(_this, void 0, void 0, function () {
            var code;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.target.eraseChip()];
                    case 1:
                        code = _a.sent();
                        if (code !== 0) {
                            this.log("[flash-erase] non-zero return code: " + code);
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/, true];
                }
            });
        }); };
        this.flashTest = function () { return __awaiter(_this, void 0, void 0, function () {
            var data, data32;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.target.flash(green_bin_1.code)];
                    case 1:
                        _a.sent();
                        console.debug("[target] flashed!");
                        return [4 /*yield*/, this.target.memory.readBlock(0x0, 0x1000, 0x100)];
                    case 2:
                        data = _a.sent();
                        data32 = new Uint32Array(data.buffer);
                        data32.forEach(function (x) {
                            console.log(x.toString(16));
                        });
                        return [2 /*return*/, true];
                }
            });
        }); };
        this.selector = new device_selector_1.PlatformSelector("platform-chooser", "platform-detected");
        this.chooseButton = document.getElementById("choose");
        this.connectButton = document.getElementById("connect");
        this.chooseButton.onclick = this.choose;
        this.connectButton.onclick = this.connect;
        this.logger = logger;
    }
    DAPTest.prototype.log = function (s) {
        this.logger.log(s);
    };
    DAPTest.prototype.clearLog = function () {
        this.logger.clear();
    };
    return DAPTest;
}());
window.onload = function () {
    var logger = new logger_1.default('#trace');
    var demo = new DAPTest(logger);
    window.demo = demo;
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var cortex_m_1 = __webpack_require__(1);
exports.CortexM = cortex_m_1.CortexM;
exports.CoreNames = cortex_m_1.CoreNames;
exports.ISANames = cortex_m_1.ISANames;
var dap_1 = __webpack_require__(7);
exports.DAP = dap_1.DAP;
var FlashTarget_1 = __webpack_require__(9);
exports.FlashTargets = FlashTarget_1.FlashTargets;
exports.FlashTarget = FlashTarget_1.FlashTarget;
var FlashProgram_1 = __webpack_require__(12);
exports.FlashProgram = FlashProgram_1.FlashProgram;
//# sourceMappingURL=main.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var breakpoint_1 = __webpack_require__(5);
var Debug = (function () {
    function Debug(core) {
        this.core = core;
        this.enabled = false;
        this.availableHWBreakpoints = [];
        this.breakpoints = new Map();
    }
    /**
     * Set up (and disable) the Flash Patch & Breakpoint unit. It will be enabled when
     * the first breakpoint is set.
     *
     * Also reads the number of available hardware breakpoints.
     */
    Debug.prototype.setupFpb = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fpcr, nbCode, nbLit, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.core.memory.read32(3758104576 /* FP_CTRL */)];
                    case 1:
                        fpcr = _a.sent();
                        nbCode = ((fpcr >> 8) & 0x70) | ((fpcr >> 4) & 0xf);
                        nbLit = (fpcr >> 7) & 0xf;
                        this.totalHWBreakpoints = nbCode;
                        console.debug(nbCode + " hardware breakpoints, " + nbLit + " literal comparators");
                        return [4 /*yield*/, this.setFpbEnabled(false)];
                    case 2:
                        _a.sent();
                        i = 0;
                        _a.label = 3;
                    case 3:
                        if (!(i < nbCode)) return [3 /*break*/, 6];
                        this.availableHWBreakpoints.push(3758104584 /* FP_COMP0 */ + (4 * i));
                        return [4 /*yield*/, this.core.memory.write32(3758104584 /* FP_COMP0 */ + (i * 4), 0)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        i++;
                        return [3 /*break*/, 3];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Enable or disable the Flash Patch and Breakpoint unit (FPB).
     *
     * @param enabled
     */
    Debug.prototype.setFpbEnabled = function (enabled) {
        if (enabled === void 0) { enabled = true; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.enabled = enabled;
                        return [4 /*yield*/, this.core.memory.write32(3758104576 /* FP_CTRL */, 2 /* FP_CTRL_KEY */ | (enabled ? 1 : 0))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Enable debugging on the target CPU
     */
    Debug.prototype.enable = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.core.memory.write32(3758157296 /* DHCSR */, -1604386816 /* DBGKEY */ | 1 /* C_DEBUGEN */)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Set breakpoints at specified memory addresses.
     *
     * @param addrs An array of memory addresses at which to set breakpoints.
     */
    Debug.prototype.setBreakpoint = function (addr) {
        return __awaiter(this, void 0, void 0, function () {
            var breakpoint, bkpt, regAddr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.breakpoints.has(addr)) {
                            breakpoint = this.breakpoints.get(addr);
                            if (typeof breakpoint !== "number") {
                                // already enabled
                                console.warn("Breakpoint at " + addr.toString(16) + " already enabled.");
                                return [2 /*return*/];
                            }
                        }
                        if (!(addr < 0x20000000)) return [3 /*break*/, 5];
                        if (!(this.availableHWBreakpoints.length > 0)) return [3 /*break*/, 3];
                        if (!!this.enabled) return [3 /*break*/, 2];
                        console.log("enabling fpb");
                        return [4 /*yield*/, this.setFpbEnabled(true)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        regAddr = this.availableHWBreakpoints.pop();
                        console.log("using regAddr=" + regAddr.toString(16));
                        bkpt = new breakpoint_1.HWBreakpoint(regAddr, this.core, addr);
                        return [3 /*break*/, 4];
                    case 3:
                        bkpt = new breakpoint_1.SWBreakpoint(this.core, addr);
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        bkpt = new breakpoint_1.SWBreakpoint(this.core, addr);
                        _a.label = 6;
                    case 6: return [4 /*yield*/, bkpt.set()];
                    case 7:
                        _a.sent();
                        this.breakpoints.set(addr, bkpt);
                        return [2 /*return*/];
                }
            });
        });
    };
    Debug.prototype.deleteBreakpoint = function (addr) {
        return __awaiter(this, void 0, void 0, function () {
            var bkpt;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.breakpoints.has(addr)) return [3 /*break*/, 3];
                        bkpt = this.breakpoints.get(addr);
                        if (!(typeof bkpt !== "number")) return [3 /*break*/, 2];
                        return [4 /*yield*/, bkpt.clear()];
                    case 1:
                        _a.sent();
                        if (bkpt instanceof breakpoint_1.HWBreakpoint) {
                            // return the register address to the pool
                            this.availableHWBreakpoints.push(bkpt.regAddr);
                        }
                        _a.label = 2;
                    case 2:
                        this.breakpoints.delete(addr);
                        return [3 /*break*/, 4];
                    case 3:
                        console.warn("Breakpoint at " + addr.toString(16) + " does not exist.");
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Step the processor forward by one instruction.
     */
    Debug.prototype.step = function () {
        return __awaiter(this, void 0, void 0, function () {
            var dhcsr, interruptsMasked;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.core.memory.read32(3758157296 /* DHCSR */)];
                    case 1:
                        dhcsr = _a.sent();
                        if (!(dhcsr & (4 /* C_STEP */ | 2 /* C_HALT */))) {
                            console.error("Target is not halted.");
                            return [2 /*return*/];
                        }
                        interruptsMasked = (8 /* C_MASKINTS */ & dhcsr) !== 0;
                        if (!!interruptsMasked) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.core.memory.write32(3758157296 /* DHCSR */, -1604386816 /* DBGKEY */ |
                                1 /* C_DEBUGEN */ |
                                2 /* C_HALT */ |
                                8 /* C_MASKINTS */)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [4 /*yield*/, this.core.memory.write32(3758157296 /* DHCSR */, -1604386816 /* DBGKEY */ |
                            1 /* C_DEBUGEN */ |
                            8 /* C_MASKINTS */ |
                            4 /* C_STEP */)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.core.waitForHalt()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.core.memory.write32(3758157296 /* DHCSR */, -1604386816 /* DBGKEY */ |
                                1 /* C_DEBUGEN */ |
                                2 /* C_HALT */)];
                    case 6:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Debug;
}());
exports.Debug = Debug;
//# sourceMappingURL=debug.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var HWBreakpoint = (function () {
    function HWBreakpoint(regAddr, parent, addr) {
        this.regAddr = regAddr;
        this.parent = parent;
        this.addr = addr;
    }
    HWBreakpoint.prototype.set = function () {
        return __awaiter(this, void 0, void 0, function () {
            var bpMatch;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        bpMatch = ((this.addr & 0x2) ? 2 : 1) << 30;
                        return [4 /*yield*/, this.parent.memory.write32(this.regAddr, this.addr & 0x1ffffffc | bpMatch | 1)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HWBreakpoint.prototype.clear = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    /* clear hardware breakpoint */
                    return [4 /*yield*/, this.parent.memory.write32(this.regAddr, 0)];
                    case 1:
                        /* clear hardware breakpoint */
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return HWBreakpoint;
}());
exports.HWBreakpoint = HWBreakpoint;
var SWBreakpoint = (function () {
    function SWBreakpoint(parent, addr) {
        this.parent = parent;
        this.addr = addr;
    }
    SWBreakpoint.prototype.set = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // read the instruction from the CPU... pleeeeease be in thumb mode
                        _a = this;
                        return [4 /*yield*/, this.parent.memory.read16(this.addr)];
                    case 1:
                        // read the instruction from the CPU... pleeeeease be in thumb mode
                        _a.instruction = _b.sent();
                        return [4 /*yield*/, this.parent.memory.write16(this.addr, SWBreakpoint.BKPT_INSTRUCTION)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SWBreakpoint.prototype.clear = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    /* clear hardware breakpoint */
                    return [4 /*yield*/, this.parent.memory.write16(this.addr, this.instruction)];
                    case 1:
                        /* clear hardware breakpoint */
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SWBreakpoint.BKPT_INSTRUCTION = 0xbe00;
    return SWBreakpoint;
}());
exports.SWBreakpoint = SWBreakpoint;
//# sourceMappingURL=breakpoint.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(0);
var Memory = (function () {
    function Memory(dev) {
        this.dev = dev;
    }
    /**
     * Write a 32-bit word to the specified (word-aligned) memory address.
     *
     * @param addr Memory address to write to
     * @param data Data to write (values above 2**32 will be truncated)
     */
    Memory.prototype.write32 = function (addr, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dev.writeAp(0 /* CSW */, 587202640 /* CSW_VALUE */ | 2 /* CSW_SIZE32 */)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.dev.writeAp(4 /* TAR */, addr)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.dev.writeAp(12 /* DRW */, data)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Write a 16-bit word to the specified (half word-aligned) memory address.
     *
     * @param addr Memory address to write to
     * @param data Data to write (values above 2**16 will be truncated)
     */
    Memory.prototype.write16 = function (addr, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dev.writeAp(0 /* CSW */, 587202640 /* CSW_VALUE */ | 1 /* CSW_SIZE16 */)];
                    case 1:
                        _a.sent();
                        data = data << ((addr & 0x02) << 3);
                        return [4 /*yield*/, this.dev.writeAp(4 /* TAR */, addr)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.dev.writeAp(12 /* DRW */, data)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Read a 32-bit word from the specified (word-aligned) memory address.
     *
     * @param addr Memory address to read from.
     */
    Memory.prototype.read32 = function (addr) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dev.writeAp(0 /* CSW */, 587202640 /* CSW_VALUE */ | 2 /* CSW_SIZE32 */)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.dev.writeAp(4 /* TAR */, addr)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 8]);
                        return [4 /*yield*/, this.dev.readAp(12 /* DRW */)];
                    case 4: return [2 /*return*/, _a.sent()];
                    case 5:
                        e_1 = _a.sent();
                        // transfer wait, try again.
                        return [4 /*yield*/, util_1.delay(100)];
                    case 6:
                        // transfer wait, try again.
                        _a.sent();
                        return [4 /*yield*/, this.read32(addr)];
                    case 7: return [2 /*return*/, _a.sent()];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Read a 16-bit word from the specified (half word-aligned) memory address.
     *
     * @param addr Memory address to read from.
     */
    Memory.prototype.read16 = function (addr) {
        return __awaiter(this, void 0, void 0, function () {
            var val, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dev.writeAp(0 /* CSW */, 587202640 /* CSW_VALUE */ | 1 /* CSW_SIZE16 */)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.dev.writeAp(4 /* TAR */, addr)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 8]);
                        return [4 /*yield*/, this.dev.readAp(12 /* DRW */)];
                    case 4:
                        val = _a.sent();
                        return [3 /*break*/, 8];
                    case 5:
                        e_2 = _a.sent();
                        // transfer wait, try again.
                        return [4 /*yield*/, util_1.delay(100)];
                    case 6:
                        // transfer wait, try again.
                        _a.sent();
                        return [4 /*yield*/, this.read16(addr)];
                    case 7:
                        val = _a.sent();
                        return [3 /*break*/, 8];
                    case 8:
                        val = (val >> ((addr & 0x02) << 3) & 0xffff);
                        return [2 /*return*/, val];
                }
            });
        });
    };
    /**
     * Reads a block of memory from the specified memory address.
     *
     * @param addr Address to read from
     * @param words Number of words to read
     * @param pageSize Memory page size
     */
    Memory.prototype.readBlock = function (addr, words, pageSize) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var funs, bufs, end, ptr, _loop_1, _i, funs_1, f, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        funs = [function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                return [2 /*return*/, Promise.resolve()];
                            }); }); }];
                        bufs = [];
                        end = addr + words * 4;
                        ptr = addr;
                        _loop_1 = function () {
                            var nextptr = ptr + pageSize;
                            if (ptr === addr) {
                                nextptr &= ~(pageSize - 1);
                            }
                            var len = Math.min(nextptr - ptr, end - ptr);
                            var ptr0 = ptr;
                            util_1.assert((len & 3) === 0);
                            funs.push(function () { return __awaiter(_this, void 0, void 0, function () {
                                var _a, _b;
                                return __generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0:
                                            _b = (_a = bufs).push;
                                            return [4 /*yield*/, this.readBlockCore(ptr0, len >> 2)];
                                        case 1:
                                            _b.apply(_a, [_c.sent()]);
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                            ptr = nextptr;
                        };
                        while (ptr < end) {
                            _loop_1();
                        }
                        _i = 0, funs_1 = funs;
                        _a.label = 1;
                    case 1:
                        if (!(_i < funs_1.length)) return [3 /*break*/, 4];
                        f = funs_1[_i];
                        return [4 /*yield*/, f()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [4 /*yield*/, util_1.bufferConcat(bufs)];
                    case 5:
                        result = _a.sent();
                        return [2 /*return*/, result.slice(0, words * 4)];
                }
            });
        });
    };
    /**
     * Write a block of memory to the specified memory address.
     *
     * @param addr Memory address to write to.
     * @param words Array of 32-bit words to write to memory.
     */
    Memory.prototype.writeBlock = function (addr, words) {
        return __awaiter(this, void 0, void 0, function () {
            var blSz, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (words.length === 0) {
                            return [2 /*return*/];
                        }
                        if (!(1 > 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.writeBlockCore(addr, words)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                    case 2:
                        blSz = 10;
                        i = 0;
                        _a.label = 3;
                    case 3:
                        if (!(i < Math.ceil(words.length / blSz))) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.writeBlockCore(addr + i * blSz * 4, words.slice(i * blSz, i * blSz + blSz))];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        i++;
                        return [3 /*break*/, 3];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Memory.prototype.readBlockCore = function (addr, words) {
        return __awaiter(this, void 0, void 0, function () {
            var lastSize, blocks, i, b;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dev.writeAp(0 /* CSW */, 587202640 /* CSW_VALUE */ | 2 /* CSW_SIZE32 */)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.dev.writeAp(4 /* TAR */, addr)];
                    case 2:
                        _a.sent();
                        lastSize = words % 15;
                        if (lastSize === 0) {
                            lastSize = 15;
                        }
                        blocks = [];
                        i = 0;
                        _a.label = 3;
                    case 3:
                        if (!(i < Math.ceil(words / 15))) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.dev.readRegRepeat(util_1.apReg(12 /* DRW */, 2 /* READ */), i === blocks.length - 1 ? lastSize : 15)];
                    case 4:
                        b = _a.sent();
                        blocks.push(b);
                        _a.label = 5;
                    case 5:
                        i++;
                        return [3 /*break*/, 3];
                    case 6: return [2 /*return*/, util_1.bufferConcat(blocks)];
                }
            });
        });
    };
    Memory.prototype.writeBlockCore = function (addr, words) {
        return __awaiter(this, void 0, void 0, function () {
            var blSz, reg, i, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 7, , 12]);
                        return [4 /*yield*/, this.dev.writeAp(0 /* CSW */, 587202640 /* CSW_VALUE */ | 2 /* CSW_SIZE32 */)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.dev.writeAp(4 /* TAR */, addr)];
                    case 2:
                        _a.sent();
                        blSz = 12;
                        reg = util_1.apReg(12 /* DRW */, 0 /* WRITE */);
                        i = 0;
                        _a.label = 3;
                    case 3:
                        if (!(i < Math.ceil(words.length / blSz))) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.dev.writeRegRepeat(reg, words.slice(i * blSz, i * blSz + blSz))];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        i++;
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 12];
                    case 7:
                        e_3 = _a.sent();
                        if (!e_3.dapWait) return [3 /*break*/, 10];
                        console.debug("transfer wait, write block");
                        return [4 /*yield*/, util_1.delay(100)];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, this.writeBlockCore(addr, words)];
                    case 9: return [2 /*return*/, _a.sent()];
                    case 10: throw e_3;
                    case 11: return [3 /*break*/, 12];
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    return Memory;
}());
exports.Memory = Memory;
//# sourceMappingURL=memory.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var cmsis_dap_1 = __webpack_require__(8);
var util_1 = __webpack_require__(0);
var DAP = (function () {
    function DAP(device) {
        this.device = device;
        this.dap = new cmsis_dap_1.CMSISDAP(device);
    }
    DAP.prototype.reconnect = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dap.disconnect()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, util_1.delay(100)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.init()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DAP.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var n, m, v;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dap.connect()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.readDp(0 /* IDCODE */)];
                    case 2:
                        n = _a.sent();
                        this.idcode = n;
                        return [4 /*yield*/, this.writeReg(0 /* DP_0x0 */, 1 << 2)];
                    case 3:
                        _a.sent(); // clear sticky error
                        return [4 /*yield*/, this.writeDp(2 /* SELECT */, 0)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.writeDp(1 /* CTRL_STAT */, 1073741824 /* CSYSPWRUPREQ */ | 268435456 /* CDBGPWRUPREQ */)];
                    case 5:
                        _a.sent();
                        m = 536870912 /* CDBGPWRUPACK */ | 2147483648 /* CSYSPWRUPACK */;
                        return [4 /*yield*/, this.readDp(1 /* CTRL_STAT */)];
                    case 6:
                        v = _a.sent();
                        _a.label = 7;
                    case 7:
                        if (!((v & m) !== m)) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.readDp(1 /* CTRL_STAT */)];
                    case 8:
                        v = _a.sent();
                        return [3 /*break*/, 7];
                    case 9: return [4 /*yield*/, this.writeDp(1 /* CTRL_STAT */, (1073741824 /* CSYSPWRUPREQ */ |
                            268435456 /* CDBGPWRUPREQ */ |
                            0 /* TRNNORMAL */ |
                            3840 /* MASKLANE */))];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, this.writeDp(2 /* SELECT */, 0)];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, this.readAp(252 /* IDR */)];
                    case 12:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DAP.prototype.writeReg = function (regId, val) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.regOp(regId, val)];
            });
        });
    };
    DAP.prototype.readReg = function (regId) {
        return __awaiter(this, void 0, void 0, function () {
            var buf, v;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.regOp(regId, null)];
                    case 1:
                        buf = _a.sent();
                        v = util_1.readUInt32LE(buf, 3);
                        return [2 /*return*/, v];
                }
            });
        });
    };
    DAP.prototype.readDp = function (addr) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.readReg(addr)];
            });
        });
    };
    DAP.prototype.readAp = function (addr) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.writeDp(2 /* SELECT */, util_1.bank(addr))];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.readReg(util_1.apReg(addr, 2 /* READ */))];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DAP.prototype.writeDp = function (addr, data) {
        if (addr === 2 /* SELECT */) {
            if (data === this.dpSelect) {
                return Promise.resolve();
            }
            this.dpSelect = data;
        }
        return this.writeReg(addr, data);
    };
    DAP.prototype.writeAp = function (addr, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.writeDp(2 /* SELECT */, util_1.bank(addr))];
                    case 1:
                        _a.sent();
                        if (addr === 0 /* CSW */) {
                            if (data === this.csw) {
                                return [2 /*return*/, Promise.resolve()];
                            }
                            this.csw = data;
                        }
                        return [4 /*yield*/, this.writeReg(util_1.apReg(addr, 0 /* WRITE */), data)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DAP.prototype.close = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.device.close()];
            });
        });
    };
    DAP.prototype.readRegRepeat = function (regId, cnt) {
        return __awaiter(this, void 0, void 0, function () {
            var request, sendargs, i, buf;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        util_1.assert(cnt <= 15);
                        request = util_1.regRequest(regId);
                        sendargs = [0, cnt];
                        for (i = 0; i < cnt; ++i) {
                            sendargs.push(request);
                        }
                        return [4 /*yield*/, this.dap.cmdNums(5 /* DAP_TRANSFER */, sendargs)];
                    case 1:
                        buf = _a.sent();
                        if (buf[1] !== cnt) {
                            throw new Error(("(many) Bad #trans " + buf[1]));
                        }
                        else if (buf[2] !== 1) {
                            throw new Error(("(many) Bad transfer status " + buf[2]));
                        }
                        return [2 /*return*/, buf.slice(3, 3 + cnt * 4)];
                }
            });
        });
    };
    DAP.prototype.writeRegRepeat = function (regId, data) {
        return __awaiter(this, void 0, void 0, function () {
            var request, sendargs, buf;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        util_1.assert(data.length <= 15);
                        request = util_1.regRequest(regId, true);
                        sendargs = [0, data.length];
                        data.forEach(function (d) {
                            sendargs.push(request);
                            util_1.addInt32(sendargs, d);
                        });
                        return [4 /*yield*/, this.dap.cmdNums(5 /* DAP_TRANSFER */, sendargs)];
                    case 1:
                        buf = _a.sent();
                        if (buf[2] !== 1) {
                            throw new Error(("(many-wr) Bad transfer status " + buf[2]));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DAP.prototype.regOp = function (regId, val) {
        return __awaiter(this, void 0, void 0, function () {
            var request, sendargs, buf;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        request = util_1.regRequest(regId, val !== null);
                        sendargs = [0, 1, request];
                        if (val !== null) {
                            util_1.addInt32(sendargs, val);
                        }
                        return [4 /*yield*/, this.dap.cmdNums(5 /* DAP_TRANSFER */, sendargs)];
                    case 1:
                        buf = _a.sent();
                        if (buf[1] !== 1) {
                            console.error("Make sure you have initialised the DAP connection.");
                            throw new Error(("Bad #trans " + buf[1]));
                        }
                        else if (buf[2] !== 1) {
                            if (buf[2] === 2) {
                                throw new Error(("Transfer wait"));
                            }
                            throw new Error(("Bad transfer status " + buf[2]));
                        }
                        return [2 /*return*/, buf];
                }
            });
        });
    };
    return DAP;
}());
exports.DAP = DAP;
//# sourceMappingURL=dap.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(0);
var CMSISDAP = (function () {
    function CMSISDAP(hid) {
        this.maxSent = 1;
        this.hid = hid;
    }
    CMSISDAP.prototype.resetTarget = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.cmdNums(10 /* DAP_RESET_TARGET */, [])];
            });
        });
    };
    CMSISDAP.prototype.disconnect = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.cmdNums(3 /* DAP_DISCONNECT */, [])];
            });
        });
    };
    CMSISDAP.prototype.cmdNums = function (op, data) {
        return __awaiter(this, void 0, void 0, function () {
            var buf;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data.unshift(op);
                        return [4 /*yield*/, this.send(data)];
                    case 1:
                        buf = _a.sent();
                        if (buf[0] !== op) {
                            throw new Error("Bad response for " + op + " -> " + buf[0]);
                        }
                        switch (op) {
                            case 2 /* DAP_CONNECT */:
                            case 0 /* DAP_INFO */:
                            case 5 /* DAP_TRANSFER */:
                                break;
                            default:
                                if (buf[1] !== 0) {
                                    throw new Error("Bad status for " + op + " -> " + buf[1]);
                                }
                        }
                        return [2 /*return*/, buf];
                }
            });
        });
    };
    CMSISDAP.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var v, buf;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Connecting...");
                        return [4 /*yield*/, this.info(254 /* PACKET_COUNT */)];
                    case 1:
                        v = _a.sent();
                        if (v) {
                            this.maxSent = v;
                        }
                        else {
                            throw new Error("DAP_INFO returned invalid packet count.");
                        }
                        return [4 /*yield*/, this.cmdNums(17 /* DAP_SWJ_CLOCK */, util_1.addInt32(null, 1000000))];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.cmdNums(2 /* DAP_CONNECT */, [0])];
                    case 3:
                        buf = _a.sent();
                        if (buf[1] !== 1) {
                            throw new Error("SWD mode not enabled.");
                        }
                        return [4 /*yield*/, this.cmdNums(17 /* DAP_SWJ_CLOCK */, util_1.addInt32(null, 1000000))];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.cmdNums(4 /* DAP_TRANSFER_CONFIGURE */, [0, 0x50, 0, 0, 0])];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.cmdNums(19 /* DAP_SWD_CONFIGURE */, [0])];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.jtagToSwd()];
                    case 7:
                        _a.sent();
                        console.log("Connected");
                        return [2 /*return*/];
                }
            });
        });
    };
    CMSISDAP.prototype.jtagToSwd = function () {
        return __awaiter(this, void 0, void 0, function () {
            var arrs, _i, arrs_1, arr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        arrs = [
                            [56, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff],
                            [16, 0x9e, 0xe7],
                            [56, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff],
                            [8, 0x00],
                        ];
                        _i = 0, arrs_1 = arrs;
                        _a.label = 1;
                    case 1:
                        if (!(_i < arrs_1.length)) return [3 /*break*/, 4];
                        arr = arrs_1[_i];
                        return [4 /*yield*/, this.swjSequence(arr)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CMSISDAP.prototype.swjSequence = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.cmdNums(18 /* DAP_SWJ_SEQUENCE */, data)];
            });
        });
    };
    CMSISDAP.prototype.info = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var buf;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cmdNums(0 /* DAP_INFO */, [id])];
                    case 1:
                        buf = _a.sent();
                        if (buf[1] === 0) {
                            return [2 /*return*/, null];
                        }
                        switch (id) {
                            case 240 /* CAPABILITIES */:
                            case 254 /* PACKET_COUNT */:
                            case 255 /* PACKET_SIZE */:
                                if (buf[1] === 1) {
                                    return [2 /*return*/, buf[2]];
                                }
                                else if (buf[1] === 2) {
                                    return [2 /*return*/, buf[3] << 8 | buf[2]];
                                }
                        }
                        return [2 /*return*/, buf.slice(2, buf[1] + 2 - 1)]; // .toString("utf8")
                }
            });
        });
    };
    CMSISDAP.prototype.send = function (command) {
        return __awaiter(this, void 0, void 0, function () {
            var array, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        array = Uint8Array.from(command);
                        return [4 /*yield*/, this.hid.write(array.buffer)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.hid.read()];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, new Uint8Array(response.buffer)];
                }
            });
        });
    };
    return CMSISDAP;
}());
exports.CMSISDAP = CMSISDAP;
//# sourceMappingURL=cmsis_dap.js.map

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var cortex_m_1 = __webpack_require__(1);
var K64F_1 = __webpack_require__(10);
var NRF51_1 = __webpack_require__(11);
var analyzer = new Uint32Array([
    0x2180468c, 0x2600b5f0, 0x4f2c2501, 0x447f4c2c, 0x1c2b0049, 0x425b4033, 0x40230872, 0x085a4053,
    0x425b402b, 0x40534023, 0x402b085a, 0x4023425b, 0x085a4053, 0x425b402b, 0x40534023, 0x402b085a,
    0x4023425b, 0x085a4053, 0x425b402b, 0x40534023, 0x402b085a, 0x4023425b, 0x085a4053, 0x425b402b,
    0x40534023, 0xc7083601, 0xd1d2428e, 0x2b004663, 0x4663d01f, 0x46b4009e, 0x24ff2701, 0x44844d11,
    0x1c3a447d, 0x88418803, 0x4351409a, 0xd0122a00, 0x22011856, 0x780b4252, 0x40533101, 0x009b4023,
    0x0a12595b, 0x42b1405a, 0x43d2d1f5, 0x4560c004, 0x2000d1e7, 0x2200bdf0, 0x46c0e7f8, 0x000000b6,
    0xedb88320, 0x00000044,
]);
var FlashTarget = (function (_super) {
    __extends(FlashTarget, _super);
    function FlashTarget(device, platform) {
        var _this = _super.call(this, device) || this;
        _this.platform = platform;
        _this.inited = false;
        return _this;
    }
    /**
     * Initialise the flash driver on the chip. Must be called before any of the other
     * flash-related methods.
     */
    FlashTarget.prototype.flashInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.inited) {
                            return [2 /*return*/];
                        }
                        // reset and halt
                        return [4 /*yield*/, this.reset(true)];
                    case 1:
                        // reset and halt
                        _a.sent();
                        // make sure we're in Thumb mode.
                        return [4 /*yield*/, this.writeCoreRegister(16 /* XPSR */, 1 << 24)];
                    case 2:
                        // make sure we're in Thumb mode.
                        _a.sent();
                        return [4 /*yield*/, this.writeCoreRegister(9 /* R9 */, this.platform.flashAlgo.staticBase)];
                    case 3:
                        _a.sent();
                        if (!this.platform.flashAlgo.analyzerSupported) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.memory.writeBlock(this.platform.flashAlgo.analyzerAddress, analyzer)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [4 /*yield*/, this.runCode(this.platform.flashAlgo.instructions, this.platform.flashAlgo.loadAddress, this.platform.flashAlgo.pcInit, this.platform.flashAlgo.loadAddress + 1, this.platform.flashAlgo.stackPointer, true, 0, 0, 0, 0)];
                    case 6:
                        result = _a.sent();
                        this.inited = true;
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * Erase _all_ data stored in flash on the chip.
     */
    FlashTarget.prototype.eraseChip = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.inited) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.flashInit()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.runCode(this.platform.flashAlgo.instructions, this.platform.flashAlgo.loadAddress, this.platform.flashAlgo.pcEraseAll, this.platform.flashAlgo.loadAddress + 1, this.platform.flashAlgo.stackPointer, false, 0, 0, 0)];
                    case 3:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * Upload a program to flash memory on the chip.
     * TODO: add a callback to provide progress data
     *
     * @param data Array of 32-bit integers to write to flash.
     */
    FlashTarget.prototype.flash = function (data, address, progressCb) {
        return __awaiter(this, void 0, void 0, function () {
            var pageSizeWords, bufferAddress, flashStart, ptr, wordPtr, pageData, flashAddress;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.inited) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.flashInit()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.halt()];
                    case 3:
                        _a.sent();
                        pageSizeWords = this.platform.flashAlgo.pageSize / 4;
                        bufferAddress = this.platform.flashAlgo.pageBuffers[0];
                        flashStart = address || this.platform.flashAlgo.flashStart;
                        ptr = 0;
                        _a.label = 4;
                    case 4:
                        if (!(ptr < data.byteLength)) return [3 /*break*/, 7];
                        wordPtr = ptr / 4;
                        pageData = data.slice(wordPtr, wordPtr + pageSizeWords);
                        flashAddress = flashStart + ptr;
                        this.platform.overrideSecurityBits(flashAddress, pageData);
                        return [4 /*yield*/, this.memory.writeBlock(bufferAddress, pageData)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.runCode(this.platform.flashAlgo.instructions, this.platform.flashAlgo.loadAddress, this.platform.flashAlgo.pcProgramPage, // pc
                            this.platform.flashAlgo.loadAddress + 1, // lr
                            this.platform.flashAlgo.stackPointer, // sp
                            /* upload? */
                            ptr === 0, 
                            /* args */
                            flashAddress, this.platform.flashAlgo.pageSize, bufferAddress)];
                    case 6:
                        _a.sent();
                        if (progressCb) {
                            progressCb(ptr / data.byteLength);
                        }
                        ptr += pageData.byteLength;
                        return [3 /*break*/, 4];
                    case 7:
                        if (progressCb) {
                            progressCb(1.0);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    FlashTarget.prototype.program = function (program, progressCb) {
        return __awaiter(this, void 0, void 0, function () {
            var totalBytes, cumulativeBytes, startTime, _loop_1, this_1, _i, _a, section, endTime, elapsedTime, transferRate;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.flashInit()];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.eraseChip()];
                    case 2:
                        _b.sent();
                        totalBytes = program.totalByteLength();
                        cumulativeBytes = 0;
                        startTime = Date.now();
                        _loop_1 = function (section) {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this_1.flash(section.data, section.address, function (progress) {
                                            var sectionBytes = section.data.byteLength * progress;
                                            progressCb((cumulativeBytes + sectionBytes) / totalBytes);
                                        })];
                                    case 1:
                                        _a.sent();
                                        cumulativeBytes += section.data.byteLength;
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _i = 0, _a = program.sections;
                        _b.label = 3;
                    case 3:
                        if (!(_i < _a.length)) return [3 /*break*/, 6];
                        section = _a[_i];
                        return [5 /*yield**/, _loop_1(section)];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 3];
                    case 6:
                        endTime = Date.now();
                        elapsedTime = endTime - startTime;
                        transferRate = totalBytes / elapsedTime;
                        console.debug("Transfered " + totalBytes + " bytes at " + transferRate + " kB/s");
                        return [4 /*yield*/, this.flashUnInit()];
                    case 7:
                        _b.sent();
                        progressCb(1.0);
                        return [2 /*return*/];
                }
            });
        });
    };
    FlashTarget.prototype.flashUnInit = function () {
        this.inited = false;
    };
    return FlashTarget;
}(cortex_m_1.CortexM));
exports.FlashTarget = FlashTarget;
exports.FlashTargets = new Map();
exports.FlashTargets.set("0240", new K64F_1.K64F());
exports.FlashTargets.set("9900", new NRF51_1.NRF51());
//# sourceMappingURL=FlashTarget.js.map

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var K64F_FLASH_ALGO = {
    analyzerAddress: 0x1ffff000,
    analyzerSupported: true,
    flashSize: 0x100000,
    flashStart: 0x0,
    // Flash algorithm as a hex string
    instructions: new Uint32Array([
        0xE00ABE00, 0x062D780D, 0x24084068, 0xD3000040, 0x1E644058, 0x1C49D1FA, 0x2A001E52, 0x4770D1F2,
        0x4604b570, 0x4616460d, 0x5020f24c, 0x81c84932, 0x1028f64d, 0x460881c8, 0xf0208800, 0x80080001,
        0x4448482e, 0xf8dcf000, 0x2001b108, 0x2000bd70, 0x4601e7fc, 0x47702000, 0x4929b510, 0x44484827,
        0xf8b8f000, 0xb92c4604, 0x48242100, 0xf0004448, 0x4604f9a9, 0xf837f000, 0xbd104620, 0x4604b570,
        0x4448481e, 0x46214b1e, 0xf00068c2, 0x4605f85d, 0x481ab93d, 0x23004448, 0x68c24621, 0xf946f000,
        0xf0004605, 0x4628f820, 0xb5febd70, 0x460c4605, 0x46234616, 0x46294632, 0x44484810, 0xf8f8f000,
        0xb9674607, 0x22012000, 0x2000e9cd, 0x46224633, 0x90024629, 0x44484809, 0xf984f000, 0xf0004607,
        0x4638f802, 0x4807bdfe, 0xf4206840, 0xf5000070, 0x49040070, 0x47706048, 0x40052000, 0x00000004,
        0x6b65666b, 0x4001f000, 0x4a0e2070, 0x20807010, 0xbf007010, 0x7800480b, 0x280009c0, 0x4809d0fa,
        0xf0017801, 0xb1080020, 0x47702067, 0x0010f001, 0x2068b108, 0xf001e7f9, 0xb1080001, 0xe7f42069,
        0xe7f22000, 0x40020000, 0x4df0e92d, 0x460d4604, 0x469a4690, 0xf0004650, 0x4606f891, 0x4630b116,
        0x8df0e8bd, 0x46422310, 0x46204629, 0xf86cf000, 0xb10e4606, 0xe7f34630, 0x0008eb05, 0x68e01e47,
        0xf1f0fbb7, 0x7011fb00, 0x68e0b140, 0xf0f0fbb7, 0x0b01f100, 0xfb0068e0, 0x1e47f00b, 0x480be011,
        0x68004478, 0x20096005, 0x71c84909, 0xffacf7ff, 0x69a04606, 0x69a0b108, 0xb1064780, 0x68e0e003,
        0x42bd4405, 0xbf00d9eb, 0xe7c94630, 0x000002ec, 0x40020000, 0x4604b570, 0x4628460d, 0xf84ef000,
        0xb10e4606, 0xbd704630, 0x2004b90c, 0x2044e7fb, 0x71c84902, 0xff88f7ff, 0x0000e7f5, 0x40020000,
        0xb9094601, 0x47702004, 0x6cc04826, 0x6003f3c0, 0x447b4b25, 0x0010f833, 0xb90a0302, 0xe7f22064,
        0x60082000, 0x2002604a, 0x02c06088, 0x200060c8, 0x61486108, 0xbf006188, 0x4602e7e5, 0x2004b90a,
        0x61914770, 0xe7fb2000, 0x4604b530, 0x2004b90c, 0x1e58bd30, 0xb9104008, 0x40101e58, 0x2065b108,
        0x6820e7f6, 0xd8054288, 0x0500e9d4, 0x188d4428, 0xd20142a8, 0xe7eb2066, 0xe7e92000, 0x480b4601,
        0xd0014281, 0x4770206b, 0xe7fc2000, 0xb90b4603, 0x47702004, 0xd801290f, 0xd0012a04, 0xe7f82004,
        0xe7f62000, 0x40048000, 0x0000025a, 0x6b65666b, 0x41f0e92d, 0x46884607, 0x461d4614, 0x2004b914,
        0x81f0e8bd, 0x462a2308, 0x46384641, 0xffbcf7ff, 0xb10e4606, 0xe7f34630, 0x4812e01f, 0x68004478,
        0x8000f8c0, 0x490fcc01, 0x390c4479, 0x60486809, 0x490ccc01, 0x39184479, 0x60886809, 0x490a2007,
        0xf7ff71c8, 0x4606ff01, 0xb10869b8, 0x478069b8, 0xe004b106, 0x0808f108, 0x2d003d08, 0xbf00d1dd,
        0xe7cd4630, 0x000001b0, 0x40020000, 0x4dffe92d, 0x4682b082, 0x2310460c, 0x46504621, 0xf7ff9a04,
        0x4683ff83, 0x0f00f1bb, 0x4658d003, 0xe8bdb006, 0xe9da8df0, 0xfbb00101, 0x4260f7f1, 0x40084279,
        0x42a54245, 0x443dd100, 0xe0229e04, 0x0804eba5, 0xd90045b0, 0xea4f46b0, 0x90011018, 0x4478480f,
        0x60046800, 0x490e2001, 0x980171c8, 0x72c80a00, 0x72889801, 0x72489805, 0xfeb6f7ff, 0xf1bb4683,
        0xd0010f00, 0xe7d14658, 0x0608eba6, 0x443d4444, 0x2e00bf00, 0x2000d1da, 0x0000e7c8, 0x0000010e,
        0x40020000, 0x4604b570, 0xb90c460d, 0xbd702004, 0x49032040, 0x460871c8, 0xf7ff7185, 0xe7f6fe95,
        0x40020000, 0x4dffe92d, 0x4617460c, 0xe9dd461d, 0xf8ddb80c, 0xb91da038, 0xb0042004, 0x8df0e8bd,
        0x463a2304, 0x98004621, 0xff1ef7ff, 0xb10e4606, 0xe7f24630, 0x4814e022, 0x68004478, 0x20026004,
        0x71c84912, 0xf8804608, 0x490fb00b, 0x39144479, 0x68096828, 0xf7ff6088, 0x4606fe67, 0xf1b8b15e,
        0xd0010f00, 0x4000f8c8, 0x0f00f1ba, 0x2000d002, 0x0000f8ca, 0x1f3fe004, 0x1d241d2d, 0xd1da2f00,
        0x4630bf00, 0x0000e7c9, 0x00000074, 0x40020000, 0x00000000, 0x00080000, 0x00100000, 0x00200000,
        0x00400000, 0x00800000, 0x01000000, 0x01000000, 0x40020004, 0x00000000,
    ]),
    loadAddress: 0x20000000,
    pageBuffers: [0x20003000, 0x20004000],
    pageSize: 0x1000,
    // Relative function addresses
    pcEraseAll: 0x20000059,
    pcEraseSector: 0x2000007D,
    pcInit: 0x20000021,
    // pcUnInit: 0x49,
    pcProgramPage: 0x200000AB,
    stackPointer: 0x20001000,
    staticBase: 0x20000000 + 0x20 + 0x474,
};
var K64F = (function () {
    function K64F() {
        this.flashAlgo = K64F_FLASH_ALGO;
    }
    K64F.prototype.overrideSecurityBits = function (address, data) {
        var u8data = new Uint8Array(data.buffer);
        // Kinetis security values and addresses
        var SECURITY_START = 0x400;
        var SECURITY_SIZE = 16;
        var FPROT_ADDR = 0x408;
        var FPROT_ADDR_END = 0x40c;
        var FPROT_SIZE = 4;
        var FSEC_ADDR = 0x40c;
        var FSEC_VAL = 0xFE;
        var FOPT_ADDR = 0x40d;
        var FOPT_VAL = 0xFF;
        var FEPROT_ADDR = 0x40e;
        var FEPROT_VAL = 0xFF;
        var FDPROT_ADDR = 0x40f;
        var FDPROT_VAL = 0xFF;
        if (address <= SECURITY_START && address + u8data.byteLength > SECURITY_START + SECURITY_SIZE) {
            for (var i = FPROT_ADDR; i < FPROT_ADDR_END; i++) {
                if (u8data[i - address] !== 0xff) {
                    u8data[i - address] = 0xff;
                    console.debug("FCF[" + (i - FPROT_ADDR) + "] at addr " + i + " changed to " + u8data[i - address]);
                }
            }
            if (u8data[FSEC_ADDR - address] !== FSEC_VAL) {
                u8data[FSEC_ADDR - address] = FSEC_VAL;
                console.debug("FSEC at addr " + FSEC_ADDR + " changed to " + FSEC_VAL);
            }
            if (u8data[FOPT_ADDR - address] === 0x00) {
                console.debug("FOPT set to restricted value 0x00");
            }
            if (u8data[FEPROT_ADDR - address] !== FEPROT_VAL) {
                u8data[FEPROT_ADDR - address] = FEPROT_VAL;
                console.debug("FEPROT at addr " + FEPROT_ADDR + " changed to " + FEPROT_VAL);
            }
            if (u8data[FDPROT_ADDR - address] !== FDPROT_VAL) {
                u8data[FDPROT_ADDR - address] = FDPROT_VAL;
                console.debug("FDPROT at addr " + FDPROT_ADDR + " changed to " + FDPROT_VAL);
            }
        }
    };
    return K64F;
}());
exports.K64F = K64F;
//# sourceMappingURL=K64F.js.map

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NRF51_FLASH_ALGO = {
    analyzerAddress: 0x20003000,
    analyzerSupported: true,
    beginData: 0x20002000,
    flashSize: 0x40000,
    flashStart: 0x0,
    instructions: new Uint32Array([
        0xE00ABE00, 0x062D780D, 0x24084068, 0xD3000040, 0x1E644058, 0x1C49D1FA, 0x2A001E52, 0x4770D1F2,
        0x47702000, 0x47702000, 0x4c26b570, 0x60602002, 0x60e02001, 0x68284d24, 0xd00207c0, 0x60602000,
        0xf000bd70, 0xe7f6f82c, 0x4c1eb570, 0x60612102, 0x4288491e, 0x2001d302, 0xe0006160, 0x4d1a60a0,
        0xf81df000, 0x07c06828, 0x2000d0fa, 0xbd706060, 0x4605b5f8, 0x4813088e, 0x46142101, 0x4f126041,
        0xc501cc01, 0x07c06838, 0x1e76d006, 0x480dd1f8, 0x60412100, 0xbdf84608, 0xf801f000, 0x480ce7f2,
        0x06006840, 0xd00b0e00, 0x6849490a, 0xd0072900, 0x4a0a4909, 0xd00007c3, 0x1d09600a, 0xd1f90840,
        0x00004770, 0x4001e500, 0x4001e400, 0x10001000, 0x40010400, 0x40010500, 0x40010600, 0x6e524635,
        0x00000000,
    ]),
    loadAddress: 0x20000000,
    minProgramLength: 4,
    pageBuffers: [0x20002000, 0x20002400],
    pageSize: 0x400,
    pcEraseAll: 0x20000029,
    pcEraseSector: 0x20000049,
    pcInit: 0x20000021,
    pcProgramPage: 0x20000071,
    stackPointer: 0x20001000,
    staticBase: 0x20000170,
};
var NRF51 = (function () {
    function NRF51() {
        this.flashAlgo = NRF51_FLASH_ALGO;
    }
    NRF51.prototype.overrideSecurityBits = function (address, data) {
        /* empty */
    };
    return NRF51;
}());
exports.NRF51 = NRF51;
//# sourceMappingURL=NRF51.js.map

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(0);
var FlashSection = (function () {
    function FlashSection(address, data) {
        this.address = address;
        this.data = data;
        /* empty */
    }
    FlashSection.prototype.toString = function () {
        return this.data.byteLength + " bytes @ " + this.address.toString(16);
    };
    return FlashSection;
}());
exports.FlashSection = FlashSection;
var FlashProgram = (function () {
    function FlashProgram(sections) {
        this.sections = sections;
    }
    FlashProgram.fromIntelHex = function (hex) {
        var lines = hex.split(/\n/);
        var upperAddr = 0;
        var startAddr = 0;
        var current = null;
        var chunks = [];
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            if (line.substr(0, 1) !== ":") {
                throw new Error("Invaild line in hex file: " + (i + 1));
            }
            else {
                var length_1 = parseInt(line.substr(1, 2), 16);
                var addr = upperAddr + parseInt(line.substr(3, 4), 16);
                var fieldType = parseInt(line.substr(7, 2), 16);
                var data = line.substr(9, length_1 * 2);
                if (fieldType === 0x00) {
                    if (current && addr !== startAddr + (current.length / 2)) {
                        // non-contiguous
                        var sectionData = util_1.hex2bin(current);
                        chunks.push(new FlashSection(startAddr, new Uint32Array(sectionData.buffer)));
                        current = "";
                        startAddr = addr;
                    }
                    else if (!current) {
                        startAddr = addr;
                        current = "";
                    }
                    current += data;
                }
                else if (fieldType === 0x01) {
                    // EOF
                    break;
                }
                else if (fieldType === 0x02) {
                    // extended segment address record
                    upperAddr = parseInt(data, 16) << 4;
                }
                else if (fieldType === 0x04) {
                    // extended linear address record
                    upperAddr = parseInt(data, 16) << 16;
                }
            }
        }
        return new FlashProgram(chunks);
    };
    FlashProgram.fromBinary = function (addr, bin) {
        return new FlashProgram([new FlashSection(addr, bin)]);
    };
    FlashProgram.prototype.totalByteLength = function () {
        return this.sections.map(function (s) { return s.data.byteLength; }).reduce(function (x, y) { return x + y; });
    };
    FlashProgram.prototype.toString = function () {
        return this.sections.toString();
    };
    return FlashProgram;
}());
exports.FlashProgram = FlashProgram;
//# sourceMappingURL=FlashProgram.js.map

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright 2014 Gordon Williams (gw@pur3.co.uk)
 *
 * This Source Code is subject to the terms of the Mozilla Public
 * License, v2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * ------------------------------------------------------------------
 * Automatically run an assembler on inline assembler statements
 * ------------------------------------------------------------------
 */
Object.defineProperty(exports, "__esModule", { value: true });
/*  Thumb reference :
    http://ece.uwaterloo.ca/~ece222/ARM/ARM7-TDMI-manual-pt3.pdf

    ARM reference
    https://web.eecs.umich.edu/~prabal/teaching/eecs373-f11/readings/ARMv7-M_ARM.pdf
*/
// list of registers (for push/pop type commands)
var rlistLr = function (value) {
    var regs = value.split(",");
    var vals = {
        r0: 1,
        r1: 2,
        r2: 4,
        r3: 8,
        r4: 16,
        r5: 32,
        r6: 64,
        r7: 128,
        lr: 256,
    };
    var bits = 0;
    for (var _i = 0, regs_1 = regs; _i < regs_1.length; _i++) {
        var r = regs_1[_i];
        r = r.trim();
        if (!(r in vals)) {
            throw new Error("Unknown register name " + reg);
        }
        bits |= vals[r];
    }
    return bits;
};
var reg = function (regOffset) {
    return function (r) {
        var vals = {
            r0: 0,
            r1: 1,
            r2: 2,
            r3: 3,
            r4: 4,
            r5: 5,
            r6: 6,
            r7: 7,
        };
        if (!(r in vals)) {
            throw new Error("Unknown register name " + reg);
        }
        return vals[r] << regOffset;
    };
};
var reg4 = function (regOffset) {
    // 4 bit register
    return function (r) {
        var vals = {
            r0: 0,
            r1: 1,
            r2: 2,
            r3: 3,
            r4: 4,
            r5: 5,
            r6: 6,
            r7: 7,
            r8: 8,
            r9: 9,
            r10: 10,
            r11: 11,
            r12: 12,
            r13: 13,
            r14: 14,
            r15: 15,
            lr: 14,
            pc: 15,
        };
        if (!(r in vals)) {
            throw new Error("Unknown register name " + r);
        }
        return vals[r] << regOffset;
    };
};
var regOrImmediate = function (regOffset, immediateBit) {
    return function (r) {
        var regVal = parseInt(r, null);
        if (regVal >= 0 && regVal < 8) {
            return ((regVal & 7) << regOffset) | (1 << immediateBit);
        }
        var vals = {
            r0: 0,
            r1: 1,
            r2: 2,
            r3: 3,
            r4: 4,
            r5: 5,
            r6: 6,
            r7: 7,
        };
        if (!(r in vals)) {
            throw new Error("Unknown register name, or immediate out of range 0..7 " + r);
        }
        return vals[r] << regOffset;
    };
};
var regBaseOffset = function (baseOffset, offsetOffset) {
    return function (value) {
        var parms = value.split(",");
        return reg(baseOffset)(parms[0]) | reg(offsetOffset)(parms[0]);
    };
};
var thumb2ImmediateT3 = function (value) {
    if (value[0] !== "#") {
        throw new Error("Expecting '#' before number");
    }
    var v = parseInt(value.substr(1), null);
    if (v >= 0 && v < 65536) {
        // https://web.eecs.umich.edu/~prabal/teaching/eecs373-f11/readings/ARMv7-M_ARM.pdf page 347
        var imm4 = void 0;
        var i = void 0;
        var imm3 = void 0;
        var imm8 = void 0; // what the...?
        imm4 = (v >> 12) & 15;
        i = (v >> 11) & 1;
        imm3 = (v >> 8) & 7;
        imm8 = v & 255;
        return (i << 26) | (imm4 << 16) | (imm3 << 12) | imm8;
    }
    throw new Error("Invalid number '" + value + "' - must be between 0 and 65535");
};
var convertInt = function (offset, bits, shift, signed) {
    return function (value, labels) {
        var maxValue = ((1 << bits) - 1) << shift;
        var minValue = 0;
        if (signed) {
            minValue = -(1 << (bits - 1));
            maxValue += minValue;
        }
        var binValue;
        if (value[0] === "#") {
            binValue = parseInt(value.substr(1), null);
        }
        else {
            var addValue = 0;
            var maths = value.indexOf("+");
            if (maths >= 0) {
                addValue = parseInt(value.substr(maths), null);
                value = value.substr(0, maths);
            }
            if (value in labels) {
                binValue = labels[value] + addValue - labels.PC;
            }
            else {
                throw new Error("Unknown label '" + value + "'");
            }
        }
        // console.log("VALUE----------- "+binValue+" PC "+labels["PC"]+" L "+labels[value]);
        if (binValue >= minValue && binValue <= maxValue && (binValue & ((1 << shift) - 1)) === 0) {
            return ((binValue >> shift) & ((1 << bits) - 1)) << offset;
        }
        var msg = "Invalid number '" + value + "' (" + binValue + ") - must be between 0 and " + maxValue;
        if (shift !== 0) {
            msg += " and a multiple of " + (1 << shift);
        }
        throw msg;
    };
};
var uint = function (offset, bits, shift) {
    return convertInt(offset, bits, shift, false);
};
var sint = function (offset, bits, shift) {
    return convertInt(offset, bits, shift, true);
};
// special 23-bit address (bottom bit ignored) split into two halves
var blAddr = function () {
    var normal = sint(0, 22, 1); // un-split address
    return function (value, labels) {
        var v = normal(value, labels);
        return (((v >> 11) & 0x7ff) << 16) | (v & 0x7ff);
    };
};
var ops = {
    // Format 1: move shifted register
    lsl: [
        {
            base: "00000-----___---",
            regex: /(r[0-7]),(r[0-7]),(#[0-9]+)$/,
            args: [reg(0), reg(3), uint(6, 5, 0)],
        },
        {
            base: "0100000010___---",
            regex: /(r[0-7]),(r[0-7])$/,
            args: [reg(0), reg(3)],
        },
    ],
    lsr: [
        {
            base: "00001-----___---",
            regex: /(r[0-7]),(r[0-7]),(#[0-9]+)$/,
            args: [reg(0), reg(3), uint(6, 5, 0)],
        },
        {
            base: "0100000011___---",
            regex: /(r[0-7]),(r[0-7])$/,
            args: [reg(0), reg(3)],
        },
    ],
    asr: [
        {
            base: "00010-----___---",
            regex: /(r[0-7]),(r[0-7]),(#[0-9]+)$/,
            args: [reg(0), reg(3), uint(6, 5, 0)],
        },
        {
            base: "0100000100___---",
            regex: /(r[0-7]),(r[0-7])$/,
            args: [reg(0), reg(3)],
        },
    ],
    // 5.2 Format 2: add/subtract
    // 00011
    // 5.3 Format 3: move/compare/add/subtract immediate
    cmp: [
        // move/compare/subtract immediate
        {
            base: "00101---________",
            regex: /(r[0-7]),(#[0-9]+)$/,
            args: [reg(8), uint(0, 8, 0)],
        },
        {
            base: "0100001010___---",
            regex: /(r[0-7]),(r[0-7])$/,
            args: [reg(0), reg(3)],
        },
    ],
    // 5.4 Format 4: ALU operations
    and: [
        {
            base: "0100000000___---",
            regex: /(r[0-7]),(r[0-7])$/,
            args: [reg(0), reg(3)],
        },
    ],
    eor: [
        {
            base: "0100000001___---",
            regex: /(r[0-7]),(r[0-7])$/,
            args: [reg(0), reg(3)],
        },
    ],
    // lsl is above
    // lsr is above
    // asr is above
    adc: [
        {
            base: "0100000101___---",
            regex: /(r[0-7]),(r[0-7])$/,
            args: [reg(0), reg(3)],
        },
    ],
    sbc: [
        {
            base: "0100000110___---",
            regex: /(r[0-7]),(r[0-7])$/,
            args: [reg(0), reg(3)],
        },
    ],
    ror: [
        {
            base: "0100000111___---",
            regex: /(r[0-7]),(r[0-7])$/,
            args: [reg(0), reg(3)],
        },
    ],
    tst: [
        {
            base: "0100001000___---",
            regex: /(r[0-7]),(r[0-7])$/,
            args: [reg(0), reg(3)],
        },
    ],
    neg: [
        {
            base: "0100001001___---",
            regex: /(r[0-7]),(r[0-7])$/,
            args: [reg(0), reg(3)],
        },
    ],
    // cmp is above
    cmn: [
        {
            base: "0100001011___---",
            regex: /(r[0-7]),(r[0-7])$/,
            args: [reg(0), reg(3)],
        },
    ],
    orr: [
        {
            base: "0100001100___---",
            regex: /(r[0-7]),(r[0-7])$/,
            args: [reg(0), reg(3)],
        },
    ],
    mul: [
        {
            base: "0100001101___---",
            regex: /(r[0-7]),(r[0-7])$/,
            args: [reg(0), reg(3)],
        },
    ],
    bic: [
        {
            base: "0100001110___---",
            regex: /(r[0-7]),(r[0-7])$/,
            args: [reg(0), reg(3)],
        },
    ],
    mvn: [
        {
            base: "0100001111___---",
            regex: /(r[0-7]),(r[0-7])$/,
            args: [reg(0), reg(3)],
        },
    ],
    // 5.5 Format 5: Hi register operations/branch exchange
    // 5.6 Format 6: PC-relative load
    //  done (below)
    // 5.7 Format 7: load/store with register offset
    //  done (below)
    // 5.8 Format 8: load/store sign-extended byte/halfword
    // 5.9 Format 9: load/store with immediate offset
    //  done (below)
    // 5.10 Format 10: load/store halfword
    // 5.11 Format 11: SP-relative load/store
    // 5.12 Format 12: load address
    // done (below)
    // 5.13 Format 13: add offset to Stack Pointer
    // 5.14 Format 14: push/pop registers
    //  done (below)
    // 5.16 Format 16: conditional branch
    beq: [{ base: "11010000________", regex: /^(.*)$/, args: [sint(0, 8, 1)] }],
    bne: [{ base: "11010001________", regex: /^(.*)$/, args: [sint(0, 8, 1)] }],
    bcs: [{ base: "11010010________", regex: /^(.*)$/, args: [sint(0, 8, 1)] }],
    bcc: [{ base: "11010011________", regex: /^(.*)$/, args: [sint(0, 8, 1)] }],
    bmi: [{ base: "11010100________", regex: /^(.*)$/, args: [sint(0, 8, 1)] }],
    bpl: [{ base: "11010101________", regex: /^(.*)$/, args: [sint(0, 8, 1)] }],
    bvs: [{ base: "11010110________", regex: /^(.*)$/, args: [sint(0, 8, 1)] }],
    bvc: [{ base: "11010111________", regex: /^(.*)$/, args: [sint(0, 8, 1)] }],
    bhi: [{ base: "11011000________", regex: /^(.*)$/, args: [sint(0, 8, 1)] }],
    bls: [{ base: "11011001________", regex: /^(.*)$/, args: [sint(0, 8, 1)] }],
    bge: [{ base: "11011010________", regex: /^(.*)$/, args: [sint(0, 8, 1)] }],
    blt: [{ base: "11011011________", regex: /^(.*)$/, args: [sint(0, 8, 1)] }],
    bgt: [{ base: "11011100________", regex: /^(.*)$/, args: [sint(0, 8, 1)] }],
    ble: [{ base: "11011101________", regex: /^(.*)$/, args: [sint(0, 8, 1)] }],
    // 5.17 Format 17: software interrupt
    // 5.18 Format 18: unconditional branch
    b: [{ base: "11100___________", regex: /^(.*)$/, args: [sint(0, 11, 1)] }],
    // 5.19 Format 19: long branch with link
    bl: [
        {
            base: "11110___________11111___________",
            regex: /^(.*)$/,
            args: [blAddr()],
        },
    ],
    bx: [{ base: "010001110----000", regex: /(lr|r[0-9]+)$/, args: [reg4(3)] }],
    // ....
    adr: [
        {
            base: "10100---________",
            regex: /^(r[0-7]),([a-zA-Z_][0-9a-zA-Z_]*)$/,
            args: [reg(8), uint(0, 8, 2)],
        },
        {
            base: "10100---________",
            regex: /^(r[0-7]),([a-zA-Z_][0-9a-zA-Z_]*\+[0-9]+)$/,
            args: [reg(8), uint(0, 8, 2)],
        },
    ],
    push: [{ base: "1011010-________", regex: /^{(.*)}$/, args: [rlistLr] }],
    pop: [{ base: "1011110-________", regex: /^{(.*)}$/, args: [rlistLr] }],
    add: [
        {
            base: "00110---________",
            regex: /(r[0-7]),(#[0-9]+)$/,
            args: [reg(8), uint(0, 8, 0)],
        },
        {
            base: "10100---________",
            regex: /^(r[0-7]),pc,(#[0-9]+)$/,
            args: [reg(8), uint(0, 8, 2)],
        },
        {
            base: "10101---________",
            regex: /^(r[0-7]),sp,(#[0-9]+)$/,
            args: [reg(8), uint(0, 8, 2)],
        },
        {
            base: "101100000_______",
            regex: /^sp,(#[0-9]+)$/,
            args: [uint(0, 7, 2)],
        },
        {
            base: "00011-0___---___",
            regex: /^(r[0-7]),(r[0-7]),([^,]+)$/,
            args: [reg(0), reg(3), regOrImmediate(6, 10)],
        },
    ],
    adds: [
        {
            base: "00011-0___---___",
            regex: /^(r[0-7]),(r[0-7]),([^,]+)$/,
            args: [reg(0), reg(3), regOrImmediate(6, 10)],
        },
    ],
    "adc.w": [
        {
            base: "111010110100----________--------",
            regex: /^(r[0-7]),(r[0-7]),(r[0-7])$/,
            args: [reg(16), reg(8), reg(0)],
        },
    ],
    "add.w": [
        {
            base: "11110001--------________--------",
            regex: /^(r[0-7]),(r[0-7]),(#[0-9]+)$/,
            args: [reg(16), reg(8), uint(0, 8, 0)],
        },
    ],
    sub: [
        {
            base: "00111---________",
            regex: /(r[0-7]),(#[0-9]+)$/,
            args: [reg(8), uint(0, 8, 0)],
        },
        /*{ base:"10100---________", regex : /^([^,]+),pc,(#[0-9]+)$/,args:[reg(8),uint(0,8,2)] },*/
        {
            base: "101100001_______",
            regex: /^sp,(#[0-9]+)$/,
            args: [uint(0, 7, 2)],
        },
        {
            base: "00011-1___---___",
            regex: /^([^,]+),([^,]+),([^,]+)$/,
            args: [reg(0), reg(3), regOrImmediate(6, 10)],
        },
    ],
    str: [
        {
            base: "0101000---___---",
            regex: /(r[0-7]),\[(r[0-7]),(r[0-7])\]$/,
            args: [reg(0), reg(3), reg(6)],
        },
        {
            base: "10010---________",
            regex: /(r[0-7]),\[sp,(#[0-9]+)\]$/,
            args: [reg(8), uint(0, 8, 2)],
        },
        {
            base: "0110000000___---",
            regex: /(r[0-7]),\[(r[0-7])\]$/,
            args: [reg(0), reg(3)],
        },
        {
            base: "0110000---___---",
            regex: /(r[0-7]),\[(r[0-7]),(#[0-9]+)\]$/,
            args: [reg(0), reg(3), uint(6, 5, 2)],
        },
    ],
    strb: [
        {
            base: "0101010---___---",
            regex: /(r[0-7]),\[(r[0-7]),(r[0-7])\]$/,
            args: [reg(0), reg(3), reg(6)],
        },
        {
            base: "0111000---___---",
            regex: /(r[0-7]),\[(r[0-7]),(#[0-9]+)\]$/,
            args: [reg(0), reg(3), uint(6, 5, 2)],
        },
    ],
    ldr: [
        {
            base: "01001---________",
            regex: /(r[0-7]),\[pc,(#[0-9]+)\]$/,
            args: [reg(8), uint(0, 8, 2)],
        },
        {
            base: "10011---________",
            regex: /(r[0-7]),\[sp,(#[0-9]+)\]$/,
            args: [reg(8), uint(0, 8, 2)],
        },
        {
            base: "01001---________",
            regex: /(r[0-7]),([a-zA-Z_][0-9a-zA-Z_]*)$/,
            args: [reg(8), uint(0, 8, 2)],
        },
        {
            base: "01001---________",
            regex: /(r[0-7]),([a-zA-Z_][0-9a-zA-Z_]*\+[0-9]+)$/,
            args: [reg(8), uint(0, 8, 2)],
        },
        {
            base: "0101100---___---",
            regex: /(r[0-7]),\[(r[0-7]),(r[0-7])\]$/,
            args: [reg(0), reg(3), reg(6)],
        },
        {
            base: "0110100000___---",
            regex: /(r[0-7]),\[(r[0-7])\]$/,
            args: [reg(0), reg(3)],
        },
        {
            base: "0110100---___---",
            regex: /(r[0-7]),\[(r[0-7]),(#[0-9]+)\]$/,
            args: [reg(0), reg(3), uint(6, 5, 2)],
        },
    ],
    ldrb: [
        {
            base: "0101110---___---",
            regex: /(r[0-7]),\[(r[0-7]),(r[0-7])\]$/,
            args: [reg(0), reg(3), reg(6)],
        },
        {
            base: "0110100---___---",
            regex: /(r[0-7]),\[(r[0-7]),(#[0-9]+)\]$/,
            args: [reg(0), reg(3), uint(6, 5, 2)],
        },
    ],
    mov: [
        {
            base: "00100---________",
            regex: /(r[0-7]),(#[0-9]+)$/,
            args: [reg(8), uint(0, 8, 0)],
        },
        {
            base: "0001110000---___",
            regex: /(r[0-7]),(r[0-7])$/,
            args: [reg(0), reg(3)],
        },
        { base: "0100011010---101", regex: /sp,(r[0-7])$/, args: [reg(3)] },
    ],
    movs: [
        {
            base: "00100---________",
            regex: /(r[0-7]),(#[0-9]+)$/,
            args: [reg(8), uint(0, 8, 0)],
        },
    ],
    movw: [
        {
            base: "11110-100100----0___----________",
            regex: /(r[0-7]),(#[0-9]+)$/,
            args: [reg4(8), thumb2ImmediateT3],
        },
    ],
    ".word": [
        {
            base: "--------------------------------",
            regex: /0x([0-9A-Fa-f]+)$/,
            args: [
                function (v) {
                    var vi = parseInt(v, 16);
                    return (vi >> 16) | (vi << 16);
                },
            ],
        },
        {
            base: "--------------------------------",
            regex: /([0-9]+)$/,
            args: [
                function (v) {
                    var vi = parseInt(v, null);
                    return (vi >> 16) | (vi << 16);
                },
            ],
        },
    ],
    nop: [{ base: "0100011011000000", regex: new RegExp(""), args: [] }],
    cpsie: [{ base: "1011011001100010", regex: /i/, args: [] }],
    cpsid: [{ base: "1011011001110010", regex: /i/, args: [] }],
    wfe: [{ base: "1011111100100000", regex: /i/, args: [] }],
    wfi: [{ base: "1011111100110000", regex: /i/, args: [] }],
    // for this, uint needs to work without a hash
    //    "swi"    :[{ base:"11011111--------", regex : /([0-9]+)$/, args:[uint(0,8,0)] }],
    // Format 17: software interrupt
    bkpt: [{ base: "10111110--------", regex: /(#[0-9]+)$/, args: [uint(0, 8, 0)] }],
};
var getOpCode = function (binary) {
    var base = "";
    for (var i = 0; i < binary.length; i++) {
        var b = binary[i];
        if ("-_".indexOf(b) >= 0) {
            base += "0";
        }
        else {
            base += b;
        }
    }
    var opCode = parseInt(base, 2);
    if (opCode < 0) {
        opCode = opCode + 2147483648.0;
    }
    return opCode;
};
var assembleInternal = function (asmLines, wordCallback, labels) {
    var addr = 0;
    var newLabels = {};
    asmLines.forEach(function (line) {
        // setup labels
        if (labels !== undefined) {
            labels.PC = addr + 4;
        }
        // handle line
        line = line.trim();
        if (line === "") {
            return;
        }
        if (line.substr(-1) === ":") {
            // it's a label
            var labelName = line.substr(0, line.length - 1);
            if (newLabels[labelName] !== undefined) {
                throw new Error("Label '" + labelName + "' was already defined");
            }
            newLabels[labelName] = addr;
            return;
        }
        // parse instruction
        var firstArgEnd = line.indexOf("\t");
        if (firstArgEnd < 0) {
            firstArgEnd = line.indexOf(" ");
        }
        if (firstArgEnd < 0) {
            firstArgEnd = line.length;
        }
        var opName = line.substr(0, firstArgEnd);
        var args = line.substr(firstArgEnd).replace(/[ \t]/g, "").trim();
        if (!(opName in ops)) {
            throw new Error("Unknown Op '" + opName + "' in '" + line + "'");
        }
        // search ops
        var found = false;
        for (var _i = 0, _a = ops[opName]; _i < _a.length; _i++) {
            var op = _a[_i];
            var m = args.match(op.regex);
            if (m) {
                found = true;
                // work out the base opcode
                var opCode = getOpCode(op.base);
                if (labels !== undefined) {
                    // If we're properly generating code, parse each argument.
                    // Otherwise we're just working out the size in bytes of each line
                    // and we can skip this
                    for (var i = 0; i < op.args.length; i++) {
                        // console.log(i,m[(i|0)+1]);
                        var argFunction = op.args[i];
                        var bits = argFunction(m[(i | 0) + 1], labels);
                        // console.log("  ",bits)
                        opCode |= bits;
                    }
                }
                if (op.base.length > 16) {
                    wordCallback(opCode >>> 16);
                    wordCallback(opCode & 0xffff);
                    addr += 4;
                }
                else {
                    wordCallback(opCode);
                    addr += 2;
                }
                break;
            }
        }
        // now parse args
        if (!found) {
            throw new Error("Unknown arg style '" + args + "' in '" + line + "'");
        }
    });
    return newLabels;
};
var assemble = function (asmLines, wordCallback) {
    var labels = assembleInternal(asmLines, function () {
        /* empty */
    }, undefined);
    assembleInternal(asmLines, wordCallback, labels);
};
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
exports.assembleBlock = function (asmLines) {
    var machineCode = [];
    try {
        assemble(asmLines, function (word) {
            machineCode.push(word);
        });
    }
    catch (err) {
        console.error("Assembler failed: " + err);
        return undefined;
    }
    if (machineCode.length % 2 == 1) {
        machineCode.push(0);
    }
    var u16 = new Uint16Array(machineCode);
    return new Uint32Array(u16.buffer);
};
//# sourceMappingURL=assembler.js.map

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
function bufferExtend(source, length) {
    var sarr = new Uint8Array(source);
    var dest = new ArrayBuffer(length);
    var darr = new Uint8Array(dest);
    for (var i = 0; i < Math.min(source.byteLength, length); i++) {
        darr[i] = sarr[i];
    }
    return dest;
}
var HID = (function () {
    function HID(device) {
        this.device = device;
    }
    HID.prototype.open = function () {
        return __awaiter(this, void 0, void 0, function () {
            var hids, _i, _a, endpoint;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.device.open()];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.device.selectConfiguration(1)];
                    case 2:
                        _b.sent();
                        hids = this.device.configuration.interfaces.filter(function (intf) { return intf.alternates[0].interfaceClass == 0x03; });
                        if (hids.length == 0) {
                            throw 'No HID interfaces found.';
                        }
                        this.interfaces = hids;
                        if (this.interfaces.length == 1) {
                            this.interface = this.interfaces[0];
                        }
                        return [4 /*yield*/, this.device.claimInterface(this.interface.interfaceNumber)];
                    case 3:
                        _b.sent();
                        this.endpoints = this.interface.alternates[0].endpoints;
                        this.ep_in = null;
                        this.ep_out = null;
                        for (_i = 0, _a = this.endpoints; _i < _a.length; _i++) {
                            endpoint = _a[_i];
                            if (endpoint.direction == 'in') {
                                this.ep_in = endpoint;
                            }
                            else {
                                this.ep_out = endpoint;
                            }
                        }
                        if (this.ep_in == null || this.ep_out == null) {
                            console.log('Unable to find an in and an out endpoint.');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HID.prototype.close = function () {
        return this.device.close();
    };
    HID.prototype.write = function (data) {
        var report_size = this.ep_out.packetSize;
        var buffer = bufferExtend(data, report_size);
        return this.device.transferOut(this.ep_out.endpointNumber, buffer);
    };
    HID.prototype.read = function () {
        var report_size = this.ep_in.packetSize;
        return this.device.transferIn(this.ep_in.endpointNumber, report_size)
            .then(function (res) { return res.data; });
    };
    return HID;
}());
exports.default = HID;
//# sourceMappingURL=hid.js.map

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var PlatformSelector = (function () {
    function PlatformSelector(id, devices) {
        var elem = document.getElementById(id);
        this.deviceElement = document.getElementById(devices);
        if (elem.nodeName === "SELECT") {
            this.element = elem;
        }
        else {
            console.log(elem.nodeName);
            throw new Error("select element must be chosen");
        }
        this.deviceCache = new Map();
    }
    PlatformSelector.prototype.show = function (platform) {
        this.deviceElement.innerHTML =
            "<option value='" + platform.productCode + "' id='" + platform.productCode + "'>" + platform.name + "</option>";
        this.element.value = platform.productCode;
    };
    PlatformSelector.prototype.enable = function () {
        this.element.disabled = false;
    };
    PlatformSelector.prototype.disable = function () {
        this.element.disabled = true;
    };
    PlatformSelector.prototype.lookupDevice = function (code) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var xhr;
            return __generator(this, function (_a) {
                if (this.deviceCache.has(code)) {
                    return [2 /*return*/, this.deviceCache.get(code)];
                }
                xhr = new XMLHttpRequest();
                xhr.open("get", "https://developer.mbed.org/api/v3/platforms/" + code, true);
                xhr.responseType = "json";
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        xhr.onload = function (e) {
                            var device = {
                                name: xhr.response.name,
                                productCode: xhr.response.productcode,
                            };
                            _this.deviceCache.set(code, device);
                            resolve(device);
                        };
                        xhr.send();
                    })];
            });
        });
    };
    return PlatformSelector;
}());
exports.PlatformSelector = PlatformSelector;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HTMLLogger = (function () {
    function HTMLLogger(selector) {
        this.element = document.querySelector(selector);
    }
    HTMLLogger.prototype.log = function (data) {
        this.element.innerHTML = this.element.innerHTML + data + "\n";
    };
    HTMLLogger.prototype.clear = function () {
        this.element.innerHTML = "";
    };
    return HTMLLogger;
}());
exports.default = HTMLLogger;


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
const code = new Uint32Array([
    0x20030000, 0x00000000, 0x00003A61, 0x00000601, 0x000005F9, 0x000005F9, 0x000005F9, 0x00000000, // 0
    0x00000000, 0x00000000, 0x00000000, 0x000004F1, 0x000005F9, 0x00000000, 0x00000587, 0x00000597, // 20
    0x00000611, 0x00000615, 0x00000619, 0x0000061D, 0x00000621, 0x00000625, 0x00000629, 0x0000062D, // 40
    0x00000631, 0x00000635, 0x00000639, 0x0000063D, 0x00000641, 0x00000645, 0x00000649, 0x0000064D, // 60
    0x00000651, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, // 80
    0x00000655, 0x00000659, 0x0000065D, 0x00000661, 0x00000665, 0x00000669, 0x0000066D, 0x00000671, // a0
    0x00000675, 0x00000679, 0x0000067D, 0x00000681, 0x00000685, 0x00000689, 0x0000068D, 0x000005F9, // c0
    0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, // e0
    0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, // 100
    0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, // 120
    0x000005F9, 0x00000691, 0x00000695, 0x00000699, 0x0000069D, 0x000006A1, 0x000005F9, 0x000005F9, // 140
    0x000005F9, 0x000005F9, 0x000006A5, 0x000006A9, 0x000006AD, 0x000006B1, 0x000006B5, 0x000006B9, // 160
    0x000006BD, 0x000006C1, 0x000006C5, 0x000042AD, 0x000042C5, 0x000042DD, 0x000005F9, 0x000005F9, // 180
    0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, // 1a0
    0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, // 1c0
    0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, // 1e0
    0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, // 200
    0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, // 220
    0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, // 240
    0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, // 260
    0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, // 280
    0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, // 2a0
    0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, // 2c0
    0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, // 2e0
    0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, // 300
    0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, // 320
    0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, // 340
    0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, // 360
    0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, // 380
    0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, // 3a0
    0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, // 3c0
    0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0xFFFFFFFF, // 3e0
    0xFFFFFFFF, 0xFFFFFFFF, 0xFFFFFFFF, 0xFFFFFFFE, 0x4C05B510, 0xB9337823, 0xB1134B04, 0xF3AF4804, // 400
    0x23018000, 0xBD107023, 0x20000A80, 0x00000000, 0x0000B1EC, 0xB1434B0C, 0x490D480C, 0xF3AFB510, 
    0x480C8000, 0xB9236803, 0x480ABD10, 0xB9336803, 0x4B094770, 0xD0F72B00, 0x4010E8BD, 0x4B064718, 
    0xD0F52B00, 0xBF004718, 0x00000000, 0x0000B1EC, 0x20000A84, 0x20000A74, 0x00000000, 0x2B004B15, 
    0x4B13BF08, 0xF5A3469D, 0x21003A80, 0x460F468B, 0x4A144813, 0xF0051A12, 0x4B0FFD1D, 0xD0002B00, 
    0x4B0E4798, 0xD0002B00, 0x20004798, 0x00042100, 0x480D000D, 0xD0022800, 0xF001480C, 0xF005FBE4, 
    0x0020F929, 0xF0010029, 0xF001FCA5, 0xBF00FBD9, 0x00080000, 0x20030000, 0x00000000, 0x00001E25, 
    0x20000A80, 0x20002DF8, 0x00001C87, 0x00000000, 0x8009F3EF, 0xF8116981, 0xBBB91C02, 0xE890B501, 
    0x47E0100F, 0x5000E8BD, 0x0003E88C, 0xE8934B26, 0x42910006, 0x4770BF08, 0xF01EB941, 0xD1100F10, 
    0x68084922, 0x0001F020, 0xE00A6008, 0x0FF0E92C, 0x0F10F01E, 0xED2CBF08, 0xF8C18A10, 0xF881C038, 
    0xF002E022, 0x4B18FF51, 0x0006E893, 0xF892601A, 0x6B901022, 0x0EFFF061, 0x0F10F01E, 0xECB0BF08, 
    0xE8B08A10, 0xF3800FF0, 0x47708809, 0x4A10B510, 0x42996813, 0xF852D806, 0xC80F4021, 0xF3EF47A0, 
    0x60208409, 0xB510BD10, 0xFCA6F002, 0x4010E8BD, 0x8C09F3EF, 0xB510E7BA, 0xFD3AF002, 0x4010E8BD, 
    0x8C09F3EF, 0x0000E7B2, 0x2000002C, 0xE000EF34, 0x0000A318, 0x4809B672, 0x60014909, 0x47804809, 
    0x4A0A4909, 0x429A4B0A, 0xF851BFBE, 0xF8420B04, 0xE7F80B04, 0x4807B662, 0x00004780, 0xE000ED08, 
    0x00000000, 0x00003A75, 0x0000B218, 0x20000000, 0x20000A78, 0x0000047D, 0xBFFEF7FF, 0x47004835, 
    0x47004835, 0x47004835, 0x47004835, 0x47004835, 0x47004835, 0x47004835, 0x47004835, 0x47004835, 
    0x47004835, 0x47004835, 0x47004835, 0x47004835, 0x47004835, 0x47004835, 0x47004835, 0x47004835, 
    0x47004835, 0x47004835, 0x47004835, 0x47004835, 0x47004835, 0x47004835, 0x47004835, 0x47004835, 
    0x47004835, 0x47004835, 0x47004835, 0x47004835, 0x47004835, 0x47004835, 0x47004835, 0x47004835, 
    0x47004835, 0x47004835, 0x47004835, 0x47004835, 0x47004835, 0x47004835, 0x47004835, 0x47004835, 
    0x47004835, 0x47004835, 0x47004835, 0x47004834, 0x47004833, 0x47004832, 0x47004831, 0x47004830, 
    0x47004830, 0x47004830, 0x47004830, 0x47004830, 0x47004830, 0x00003A61, 0x00000601, 0x000004F1, 
    0x00000587, 0x00000597, 0x000041ED, 0x000041F9, 0x00004205, 0x00004211, 0x0000421D, 0x00004229, 
    0x00004235, 0x00004241, 0x0000424D, 0x00004259, 0x00004265, 0x00004271, 0x0000427D, 0x00004289, 
    0x00004295, 0x000042A1, 0x000005F9, 0x00004365, 0x00004379, 0x000040A1, 0x000040D5, 0x00004419, 
    0x00004455, 0x000005F9, 0x000047C9, 0x000005F9, 0x000047E5, 0x000005F9, 0x00004801, 0x000005F9, 
    0x0000481D, 0x000005F9, 0x00004109, 0x00004839, 0x000005F9, 0x00004855, 0x000005F9, 0x0000438D, 
    0x000042F5, 0x00004491, 0x000005F9, 0x000005F9, 0x000005F9, 0x000005F9, 0x00000000, 0x00000000, 
    0x01FFF001, 0xDB2B2A10, 0x0F07F010, 0xF810D008, 0x3A013B01, 0xD02D428B, 0x0F07F010, 0xD1F6B342, 
    0xEA41B4F0, 0xEA412101, 0xF0224101, 0xF07F0407, 0x23000700, 0x5602E8F0, 0xEA853C08, 0xEA860501, 
    0xFA850601, 0xFAA3F547, 0xFA86F587, 0xFAA5F647, 0xB98EF687, 0xBCF0D1EE, 0x01FFF001, 0x0207F002, 
    0xF810B132, 0x3A013B01, 0x0301EA83, 0xD1F8B113, 0x47702000, 0x47703801, 0xBF062D00, 0x38034635, 
    0xF0153807, 0xD1070F01, 0xF4153001, 0xBF027F80, 0xF4153001, 0x30013FC0, 0x3801BCF0, 0xBF004770, 
    0xEA414684, 0xF0130300, 0xD16D0303, 0xD3413A40, 0x3B04F851, 0x3B04F840, 0x3B04F851, 0x3B04F840, 
    0x3B04F851, 0x3B04F840, 0x3B04F851, 0x3B04F840, 0x3B04F851, 0x3B04F840, 0x3B04F851, 0x3B04F840, 
    0x3B04F851, 0x3B04F840, 0x3B04F851, 0x3B04F840, 0x3B04F851, 0x3B04F840, 0x3B04F851, 0x3B04F840, 
    0x3B04F851, 0x3B04F840, 0x3B04F851, 0x3B04F840, 0x3B04F851, 0x3B04F840, 0x3B04F851, 0x3B04F840, 
    0x3B04F851, 0x3B04F840, 0x3B04F851, 0x3B04F840, 0xD2BD3A40, 0xD3113230, 0x3B04F851, 0x3B04F840, 
    0x3B04F851, 0x3B04F840, 0x3B04F851, 0x3B04F840, 0x3B04F851, 0x3B04F840, 0xD2ED3A10, 0xD305320C, 
    0x3B04F851, 0x3B04F840, 0xD2F93A04, 0xD0083204, 0xBF1C07D2, 0x3B01F811, 0x3B01F800, 0x880BD301, 
    0x46608003, 0xBF004770, 0xD3132A08, 0xD08D078B, 0x0303F010, 0xF1C3D08A, 0x1AD20304, 0xBF1C07DB, 
    0x3B01F811, 0x3B01F800, 0xF831D380, 0xF8203B02, 0xE77B3B02, 0xD3D93A04, 0xF8113A01, 0xF8003B01, 
    0xD2F93B01, 0x7003780B, 0x7043784B, 0x7083788B, 0x47704660, 0x00000000, 0x00000000, 0x00000000, 
    0xF000F890, 0x4502E96D, 0x0107F020, 0x0C00F06F, 0x0407F010, 0xF020F891, 0x8049F040, 0x0400F04F, 
    0x0007F06F, 0x2300E9D1, 0xF040F891, 0x0008F100, 0xF24CFA82, 0xF28CFAA4, 0xF34CFA83, 0xF38CFAA2, 
    0xE9D1BB4B, 0xFA822302, 0xF100F24C, 0xFAA40008, 0xFA83F28C, 0xFAA2F34C, 0xB9E3F38C, 0x2304E9D1, 
    0xF24CFA82, 0x0008F100, 0xF28CFAA4, 0xF34CFA83, 0xF38CFAA2, 0xE9D1B97B, 0xF1012306, 0xFA820120, 
    0xF100F24C, 0xFAA40008, 0xFA83F28C, 0xFAA2F34C, 0x2B00F38C, 0x2A00D0C6, 0x3004BF04, 0xBA12461A, 
    0xF282FAB2, 0x4502E8FD, 0x00D2EB00, 0xE9D14770, 0xF0042300, 0xF1C40503, 0xEA4F0000, 0xF01405C5, 
    0xF8910F04, 0xFA0CF040, 0xEA62F505, 0xBF1C0205, 0x0305EA63, 0xF04F4662, 0xE7A90400, 0x4100F081, 
    0xBF00E002, 0x4300F083, 0xEA4FB530, 0xEA4F0441, 0xEA940543, 0xBF080F05, 0x0F02EA90, 0xEA54BF1F, 
    0xEA550C00, 0xEA7F0C02, 0xEA7F5C64, 0xF0005C65, 0xEA4F80E2, 0xEBD45454, 0xBFB85555, 0xDD0C426D, 
    0xEA80442C, 0xEA810202, 0xEA820303, 0xEA830000, 0xEA800101, 0xEA810202, 0x2D360303, 0xBD30BF88, 
    0x4F00F011, 0x3101EA4F, 0x1C80F44F, 0x3111EA4C, 0x4240D002, 0x0141EB61, 0x4F00F013, 0x3303EA4F, 
    0x3313EA4C, 0x4252D002, 0x0343EB63, 0x0F05EA94, 0x80A7F000, 0x0401F1A4, 0x0E20F1D5, 0xFA02DB0D, 
    0xFA22FC0E, 0x1880F205, 0x0100F141, 0xF20EFA03, 0xFA431880, 0x4159F305, 0xF1A5E00E, 0xF10E0520, 
    0x2A010E20, 0xFC0EFA03, 0xF04CBF28, 0xFA430C02, 0x18C0F305, 0x71E3EB51, 0x4500F001, 0xF04FD507, 
    0xF1DC0E00, 0xEB7E0C00, 0xEB6E0000, 0xF5B10101, 0xD31B1F80, 0x1F00F5B1, 0x0849D30C, 0x0030EA5F, 
    0x0C3CEA4F, 0x0401F104, 0x5244EA4F, 0x0F80F512, 0x809AF080, 0x4F00F1BC, 0xEA5FBF08, 0xF1500C50, 
    0xEB410000, 0xEA415104, 0xBD300105, 0x0C4CEA5F, 0xEB414140, 0xF4110101, 0xF1A41F80, 0xD1E90401, 
    0x0F00F091, 0x4601BF04, 0xFAB12000, 0xBF08F381, 0xF1A33320, 0xF1B3030B, 0xDA0C0220, 0xDD08320C, 
    0x0C14F102, 0x020CF1C2, 0xF00CFA01, 0xF102FA21, 0xF102E00C, 0xBFD80214, 0x0C20F1C2, 0xF102FA01, 
    0xFC0CFA20, 0xEA41BFDC, 0x4090010C, 0xBFA21AE4, 0x5104EB01, 0xBD304329, 0x0404EA6F, 0xDA1C3C1F, 
    0xDC0E340C, 0x0414F104, 0x0220F1C4, 0xF004FA20, 0xF302FA01, 0x0003EA40, 0xF304FA21, 0x0103EA45, 
    0xF1C4BD30, 0xF1C4040C, 0xFA200220, 0xFA01F002, 0xEA40F304, 0x46290003, 0xFA21BD30, 0x4629F004, 
    0xF094BD30, 0xF4830F00, 0xBF061380, 0x1180F481, 0x3D013401, 0xEA7FE74E, 0xBF185C64, 0x5C65EA7F, 
    0xEA94D029, 0xBF080F05, 0x0F02EA90, 0xEA54D005, 0xBF040C00, 0x46104619, 0xEA91BD30, 0xBF1E0F03, 
    0x20002100, 0xEA5FBD30, 0xD1055C54, 0x41490040, 0xF041BF28, 0xBD304100, 0x0480F514, 0xF501BF3C, 
    0xBD301180, 0x4500F001, 0x41FEF045, 0x0170F441, 0x0000F04F, 0xEA7FBD30, 0xBF1A5C64, 0x46104619, 
    0x5C65EA7F, 0x460BBF1C, 0xEA504602, 0xBF063401, 0x3503EA52, 0x0F03EA91, 0x2100F441, 0xBF00BD30, 
    0x0F00F090, 0x2100BF04, 0xB5304770, 0x6480F44F, 0x0432F104, 0x0500F04F, 0x0100F04F, 0xBF00E750, 
    0x0F00F090, 0x2100BF04, 0xB5304770, 0x6480F44F, 0x0432F104, 0x4500F010, 0x4240BF48, 0x0100F04F, 
    0xBF00E73E, 0xEA4F0042, 0xEA4F01E2, 0xEA4F0131, 0xBF1F7002, 0x437FF012, 0x4F7FF093, 0x5160F081, 
    0xF0924770, 0xBF140F00, 0x4F7FF093, 0xB5304770, 0x7460F44F, 0x4500F001, 0x4100F021, 0xBF00E720, 
    0x0201EA50, 0x4770BF08, 0xF04FB530, 0xE00A0500, 0x0201EA50, 0x4770BF08, 0xF011B530, 0xD5024500, 
    0xEB614240, 0xF44F0141, 0xF1046480, 0xEA5F0432, 0xF43F5C91, 0xF04FAEDC, 0xEA5F0203, 0xBF180CDC, 
    0xEA5F3203, 0xBF180CDC, 0xEB023203, 0xF1C202DC, 0xFA000320, 0xFA20FC03, 0xFA01F002, 0xEA40FE03, 
    0xFA21000E, 0x4414F102, 0xBF00E6C1, 0xF04FB570, 0xF44C0CFF, 0xEA1C6CE0, 0xBF1D5411, 0x5513EA1C, 
    0x0F0CEA94, 0x0F0CEA95, 0xF8DEF000, 0xEA81442C, 0xEA210603, 0xEA23514C, 0xEA50534C, 0xBF183501, 
    0x3503EA52, 0x1180F441, 0x1380F443, 0xFBA0D038, 0xF04FCE02, 0xFBE10500, 0xF006E502, 0xFBE04200, 
    0xF04FE503, 0xFBE10600, 0xF09C5603, 0xBF180F00, 0x0E01F04E, 0x04FFF1A4, 0x7F00F5B6, 0x7440F564, 
    0xEA5FD204, 0x416D0E4E, 0x0606EB46, 0x21C6EA42, 0x5155EA41, 0x20C5EA4F, 0x505EEA40, 0x2ECEEA4F, 
    0x0CFDF1B4, 0xF5BCBF88, 0xD81E6FE0, 0x4F00F1BE, 0xEA5FBF08, 0xF1500E50, 0xEB410000, 0xBD705104, 
    0x4600F006, 0x0101EA46, 0x0002EA40, 0x0103EA81, 0x045CEBB4, 0xEBD4BFC2, 0xEA41050C, 0xBD705104, 
    0x1180F441, 0x0E00F04F, 0xF3003C01, 0xF11480AB, 0xBFDE0F36, 0xF0012000, 0xBD704100, 0x0400F1C4, 
    0xDA353C20, 0xDC1B340C, 0x0414F104, 0x0520F1C4, 0xF305FA00, 0xF004FA20, 0xF205FA01, 0x0002EA40, 
    0x4200F001, 0x4100F021, 0x70D3EB10, 0xF604FA21, 0x0106EB42, 0x0E43EA5E, 0xEA20BF08, 0xBD7070D3, 
    0x040CF1C4, 0x0520F1C4, 0xF304FA00, 0xF005FA20, 0xF204FA01, 0x0002EA40, 0x4100F001, 0x70D3EB10, 
    0x0100F141, 0x0E43EA5E, 0xEA20BF08, 0xBD7070D3, 0x0520F1C4, 0xF205FA00, 0x0E02EA4E, 0xF304FA20, 
    0xF205FA01, 0x0302EA43, 0xF004FA21, 0x4100F001, 0xF204FA21, 0x0002EA20, 0x70D3EB00, 0x0E43EA5E, 
    0xEA20BF08, 0xBD7070D3, 0x0F00F094, 0xF001D10F, 0x00404600, 0x0101EB41, 0x1F80F411, 0x3C01BF08, 
    0xEA41D0F7, 0xF0950106, 0xBF180F00, 0xF0034770, 0x00524600, 0x0303EB43, 0x1F80F413, 0x3D01BF08, 
    0xEA43D0F7, 0x47700306, 0x0F0CEA94, 0x5513EA0C, 0xEA95BF18, 0xD00C0F0C, 0x0641EA50, 0xEA52BF18, 
    0xD1D10643, 0x0103EA81, 0x4100F001, 0x0000F04F, 0xEA50BD70, 0xBF060641, 0x46194610, 0x0643EA52, 
    0xEA94D019, 0xD1020F0C, 0x3601EA50, 0xEA95D113, 0xD1050F0C, 0x3603EA52, 0x4610BF1C, 0xD10A4619, 
    0x0103EA81, 0x4100F001, 0x41FEF041, 0x0170F441, 0x0000F04F, 0xF041BD70, 0xF44141FE, 0xBD700178, 
    0xF04FB570, 0xF44C0CFF, 0xEA1C6CE0, 0xBF1D5411, 0x5513EA1C, 0x0F0CEA94, 0x0F0CEA95, 0xF8A7F000, 
    0x0405EBA4, 0x0E03EA81, 0x3503EA52, 0x3101EA4F, 0x8088F000, 0x3303EA4F, 0x5580F04F, 0x1313EA45, 
    0x6312EA43, 0x2202EA4F, 0x1511EA45, 0x6510EA45, 0x2600EA4F, 0x4100F00E, 0xBF08429D, 0xF1444296, 
    0xF50404FD, 0xD2027440, 0xEA4F085B, 0x1AB60232, 0x0503EB65, 0xEA4F085B, 0xF44F0232, 0xF44F1080, 
    0xEBB62C00, 0xEB750E02, 0xBF220E03, 0x46751AB6, 0x000CEA40, 0xEA4F085B, 0xEBB60232, 0xEB750E02, 
    0xBF220E03, 0x46751AB6, 0x005CEA40, 0xEA4F085B, 0xEBB60232, 0xEB750E02, 0xBF220E03, 0x46751AB6, 
    0x009CEA40, 0xEA4F085B, 0xEBB60232, 0xEB750E02, 0xBF220E03, 0x46751AB6, 0x00DCEA40, 0x0E06EA55, 
    0xEA4FD018, 0xEA451505, 0xEA4F7516, 0xEA4F1606, 0xEA4303C3, 0xEA4F7352, 0xEA5F02C2, 0xD1C01C1C, 
    0x1F80F411, 0xEA41D10B, 0xF04F0100, 0xF04F0000, 0xE7B64C00, 0x1F80F411, 0x4301BF04, 0xF1B42000, 
    0xBF880CFD, 0x6FE0F5BC, 0xAEAFF63F, 0x0C03EBB5, 0xEBB6BF04, 0xEA5F0C02, 0xF1500C50, 0xEB410000, 
    0xBD705104, 0x4E00F00E, 0x3111EA4E, 0x045CEB14, 0xEBD4BFC2, 0xEA41050C, 0xBD705104, 0x1180F441, 
    0x0E00F04F, 0xE6903C01, 0x0E06EA45, 0xEA0CE68D, 0xEA945513, 0xBF080F0C, 0x0F0CEA95, 0xAF3BF43F, 
    0x0F0CEA94, 0xEA50D10A, 0xF47F3401, 0xEA95AF34, 0xF47F0F0C, 0x4610AF25, 0xE72C4619, 0x0F0CEA95, 
    0xEA52D106, 0xF43F3503, 0x4610AEFD, 0xE7224619, 0x0641EA50, 0xEA52BF18, 0xF47F0643, 0xEA50AEC5, 
    0xF47F0441, 0xEA52AF0D, 0xF47F0543, 0xE712AEEB, 0x3CFFF04F, 0xBF00E006, 0x0C01F04F, 0xBF00E002, 
    0x0C01F04F, 0xCD04F84D, 0x0C41EA4F, 0x5C6CEA7F, 0x0C43EA4F, 0xEA7FBF18, 0xD01B5C6C, 0xEA50B001, 
    0xBF0C0C41, 0x0C43EA52, 0x0F03EA91, 0xEA90BF02, 0x20000F02, 0xF1104770, 0xEA910F00, 0xBF580F03, 
    0xBF084299, 0xBF2C4290, 0xEA6F17D8, 0xF04070E3, 0x47700001, 0x0C41EA4F, 0x5C6CEA7F, 0xEA50D102, 
    0xD1073C01, 0x0C43EA4F, 0x5C6CEA7F, 0xEA52D1D6, 0xD0D33C03, 0x0B04F85D, 0xBF004770, 0x46104684, 
    0x468C4662, 0x46634619, 0xBF00E000, 0xF7FFB501, 0x2800FFB7, 0xF110BF48, 0xBD010F00, 0xED08F84D, 
    0xFFF4F7FF, 0x2001BF0C, 0xF85D2000, 0xBF00FB08, 0xED08F84D, 0xFFEAF7FF, 0x2001BF34, 0xF85D2000, 
    0xBF00FB08, 0xED08F84D, 0xFFE0F7FF, 0x2001BF94, 0xF85D2000, 0xBF00FB08, 0xED08F84D, 0xFFCEF7FF, 
    0x2001BF94, 0xF85D2000, 0xBF00FB08, 0xED08F84D, 0xFFC4F7FF, 0x2001BF34, 0xF85D2000, 0xBF00FB08, 
    0x0C41EA4F, 0x5C6CEA7F, 0xEA50D102, 0xD10A3C01, 0x0C43EA4F, 0x5C6CEA7F, 0xEA52D102, 0xD1023C03, 
    0x0000F04F, 0xF04F4770, 0x47700001, 0x0241EA4F, 0x1200F512, 0xD511D215, 0x7378F46F, 0x5262EBB3, 
    0xEA4FD912, 0xF04323C1, 0xEA434300, 0xF0115350, 0xFA234F00, 0xBF18F002, 0x47704240, 0x0000F04F, 
    0xEA504770, 0xD1053001, 0x4000F011, 0xF06FBF08, 0x47704000, 0x0000F04F, 0xBF004770, 0xB94AB953, 
    0xBF082900, 0xBF1C2800, 0x31FFF04F, 0x30FFF04F, 0xB97AF000, 0x0C08F1AD, 0xCE04E96D, 0xF806F000, 
    0xE004F8DD, 0x2302E9DD, 0x4770B004, 0x47F0E92D, 0x460D468C, 0x9E084604, 0xD1512B00, 0x4617428A, 
    0xFAB2D96D, 0xF1BEFE82, 0xD00B0F00, 0x0C20F1CE, 0xF50EFA01, 0xFC0CFA20, 0xF70EFA02, 0x0C05EA4C, 
    0xF40EFA00, 0x4A17EA4F, 0xFBBC0C25, 0xFA1FF8FA, 0xFB0AF987, 0xEA45CC18, 0xFB08450C, 0x42ABF309, 
    0x19EDD90A, 0x32FFF108, 0x8123F080, 0xF24042AB, 0xF1A88120, 0x443D0802, 0xB2A41AED, 0xF0FAFBB5, 
    0x5510FB0A, 0x4405EA44, 0xF909FB00, 0xD90945A1, 0xF10019E4, 0xF08033FF, 0x45A1810A, 0x8107F240, 
    0x443C3802, 0x0409EBA4, 0x4008EA40, 0x2E002100, 0xFA24D061, 0x2300F40E, 0x60736034, 0x87F0E8BD, 
    0xD907428B, 0xD0542E00, 0xE8862100, 0x46080021, 0x87F0E8BD, 0xF183FAB3, 0xF0402900, 0x42AB808E, 
    0x4282D302, 0x80FAF200, 0xEB651A84, 0x20010503, 0x2E0046AC, 0xE886D03F, 0xE8BD1010, 0xB91287F0, 
    0xFBB72701, 0xFAB7F7F2, 0xF1BEFE87, 0xD1340F00, 0x0C3A1BEB, 0xFC87FA1F, 0xFBB32101, 0x0C25F8F2, 
    0x3318FB02, 0x4503EA45, 0xF308FB0C, 0xD90742AB, 0xF10819ED, 0xD20230FF, 0xF20042AB, 0x468080D1, 
    0xB2A31AED, 0xF0F2FBB5, 0x5510FB02, 0x4405EA43, 0xFC00FB0C, 0xD90745A4, 0xF10019E4, 0xD20233FF, 
    0xF20045A4, 0x461880B8, 0x040CEBA4, 0x4008EA40, 0x4631E79D, 0xE8BD4630, 0xF1CE87F0, 0xFA050420, 
    0xFA07F30E, 0xFA20F70E, 0x0C3AF804, 0xF404FA25, 0x0803EA48, 0xF1F2FBB4, 0x4518EA4F, 0x4411FB02, 
    0xFC87FA1F, 0x4504EA45, 0xF30CFB01, 0xFA0042AB, 0xD909F40E, 0xF10119ED, 0xF08030FF, 0x42AB808A, 
    0x8087F240, 0x443D3902, 0xFA1F1AEB, 0xFBB3F588, 0xFB02F0F2, 0xEA453310, 0xFB004503, 0x42ABF30C, 
    0x19EDD907, 0x38FFF100, 0x42ABD26F, 0x3802D96D, 0x1AEB443D, 0x4101EA40, 0xF1C1E78F, 0xFA220720, 
    0x408BF807, 0xF401FA05, 0x0303EA48, 0xFE07FA20, 0x4C13EA4F, 0xEA4E40FD, 0xFBB50E04, 0xEA4FF9FC, 
    0xFB0C441E, 0xFA1F5519, 0xEA44F883, 0xFB094505, 0x42ACF408, 0xF201FA02, 0xFA01FA00, 0x18EDD908, 
    0x30FFF109, 0x42ACD243, 0xF1A9D941, 0x441D0902, 0xFA1F1B2D, 0xFBB5FE8E, 0xFB0CF0FC, 0xEA4E5510, 
    0xFB004405, 0x45A0F808, 0x18E4D907, 0x35FFF100, 0x45A0D229, 0x3802D927, 0xEA40441C, 0xEBA44009, 
    0xFBA00408, 0x454C8902, 0x464D46C6, 0xD012D315, 0xEBBAB156, 0xEB64030E, 0xFA040405, 0x40CBF707, 
    0x40CC431F, 0x60746037, 0xE8BD2100, 0x461887F0, 0x4690E6F8, 0x45C2E6E0, 0xEBB8D2EA, 0xEB690E02, 
    0x38010503, 0x4628E7E4, 0x4640E7D7, 0x4681E791, 0x4601E7BE, 0x3802E778, 0xE745443C, 0xE7084608, 
    0x0802F1A8, 0xE72B443D, 0xBF004770, 0xAC02B507, 0xF8442300, 0xF2443D04, 0x4620011A, 0xF853F000, 
    0x46204D06, 0xFAB0F003, 0xF180FAB0, 0x46200949, 0xFA88F003, 0xF0004628, 0xE7F2FB09, 0x3E4CCCCD, 
    0x00004770, 0x4A074806, 0x23004907, 0x3038F880, 0x3058F880, 0x3078F880, 0x3098F880, 0xBACEF000, 
    0x20000AA0, 0x20000000, 0x000016C1, 0x460EB570, 0x46154604, 0xFA34F003, 0xD0093601, 0x21004620, 
    0xFA3AF003, 0x46204629, 0x4070E8BD, 0xBA31F003, 0x2202BD70, 0xBFEAF7FF, 0x460EB570, 0x46154604, 
    0xFA1EF003, 0xD00D3601, 0x46204629, 0xFA4AF003, 0x21014620, 0xFA20F003, 0x21004620, 0x4070E8BD, 
    0xBA17F003, 0x2200BD70, 0xBFE6F7FF, 0x4604B510, 0xD10D3001, 0x429CBD10, 0x4620D109, 0xF0036889, 
    0x4620FA6F, 0xE8BD2100, 0xF0034010, 0x310CBAA3, 0x1C5A680B, 0x4802D1EF, 0x4010E8BD, 0xB94EF000, 
    0x0000A201, 0xB5084288, 0x1C43D008, 0x3101D006, 0x4804D006, 0xF942F000, 0x31FFF04F, 0xBD084608, 
    0xE7FB4601, 0x0000A1D0, 0x1C5A680B, 0x4618D101, 0x42834770, 0x6848D101, 0x310C4770, 0x0000E7F4, 
    0xB5101C42, 0xD0074604, 0xFFEEF7FF, 0x46041C43, 0x4802D102, 0xF922F000, 0xBD104620, 0x0000A1E1, 
    0xB5D06803, 0x685B6844, 0x6702E9D4, 0x22004798, 0xEA4242B0, 0x463B0200, 0x3200D202, 0x0301F147, 
    0x2302E9C4, 0xE92DBDD0, 0x46064370, 0xFFE8F7FF, 0x685A6873, 0xE9D3B1DA, 0xE9D24502, 0x42A90100, 
    0x42A0BF08, 0xEBB0D311, 0xEB610804, 0xF1B90905, 0xBF080F00, 0x4FE0F1B8, 0x1B00D209, 0x6833689A, 
    0x691B4410, 0x4370E8BD, 0x20004718, 0xF04FE7F6, 0xE7F340E0, 0xB5706803, 0x460468DB, 0x68634798, 
    0xB1A3685B, 0xF7FF4620, 0x6865FFBB, 0xE9D5686E, 0xE9D60102, 0x42992300, 0x4290BF08, 0x68F3D307, 
    0x682B606B, 0xD0EA2B00, 0x479868B0, 0x4620E7E7, 0x4070E8BD, 0xBFB7F7FF, 0xF7FF4801, 0xBF00BFDB, 
    0x0000A214, 0xBFECF003, 0xBB62F004, 0xBC96F003, 0xBA56F003, 0x4604B570, 0x4616460D, 0xF864F000, 
    0x462A4633, 0x48034621, 0xF84AF000, 0x4070E8BD, 0xB802F000, 0x0000A230, 0xF000B507, 0xF241F855, 
    0xA8010116, 0xFF2FF7FF, 0xA8012101, 0xF96AF003, 0xF0002096, 0xA801F9F9, 0xF0032100, 0x2096F963, 
    0xF9F2F000, 0x0000E7F0, 0x460DB570, 0x4604B0A0, 0xF83AF000, 0x4622462B, 0x46682180, 0xFE74F006, 
    0xDC031E05, 0xF85CF000, 0xBD70B020, 0x681B4B0A, 0xF241B933, 0xF2410210, 0x48080111, 0xFF8CF002, 
    0x24004E06, 0x1004F81D, 0x34014630, 0xF854F003, 0xD1F742A5, 0xBF00E7E6, 0x2000128C, 0x20002D14, 
    0xB507B40F, 0xF851A904, 0x91010B04, 0xFFCCF7FF, 0xF85DB003, 0xB004EB04, 0xF3EF4770, 0x43C08010, 
    0x0001F000, 0x00004770, 0xF7FFB538, 0x4605FFF6, 0x4C0EB672, 0xB9236823, 0x0301F080, 0xB2DB4A0C, 
    0x68237013, 0xD1043301, 0x490A2245, 0xF7FF480A, 0x6823FF81, 0xB125B12B, 0x49062249, 0xF7FF4807, 
    0x6823FF79, 0x60233301, 0xBF00BD38, 0x20000B74, 0x20000B70, 0x0000A261, 0x0000A284, 0x0000A2AA, 
    0x4C0AB510, 0xB1836823, 0xFFC7F7FF, 0x225AB120, 0x48084907, 0xFF5EF7FF, 0x3B016823, 0x68236023, 
    0x4B05B91B, 0xB903781B, 0xBD10B662, 0x20000B74, 0x0000A261, 0x0000A2AA, 0x20000B70, 0xB513B40F, 
    0x781A4B08, 0x2401B94A, 0x9804A905, 0x9101701C, 0xFF6AF7FF, 0xF0004620, 0xB002F923, 0x4010E8BD, 
    0x4770B004, 0x20000B78, 0x4B09B508, 0xB96B681B, 0x0111F241, 0xF2414807, 0xF0020210, 0xF44FFEFD, 
    0x48045116, 0x4008E8BD, 0xBF74F002, 0xBF00BD08, 0x2000128C, 0x20002D14, 0xB5102802, 0x2000DC01, 
    0x1EC3BD10, 0xF8524A0B, 0x21000023, 0x1023F842, 0xF003B930, 0x2309F995, 0xF04F6003, 0xBD1030FF, 
    0x695B6803, 0x1E044798, 0xF003DAE9, 0x4264F989, 0xE7F26004, 0x20000B7C, 0xB5F82802, 0x4614460D, 
    0x4B13DC0E, 0xB90B681B, 0xFFBEF7FF, 0x192F4E11, 0xD01042BD, 0x1B01F815, 0xF0024630, 0xE7F7FF8D, 
    0x4B0D3803, 0x0020F853, 0xF003B938, 0x2309F969, 0xF04F6003, 0x462034FF, 0x6803BDF8, 0x479868DB, 
    0xDAF81E04, 0xF95CF003, 0x60034263, 0xBF00E7F3, 0x2000128C, 0x20002D14, 0x20000B7C, 0xB5102802, 
    0xDC0B460C, 0x681B4B10, 0xF7FFB90B, 0x480FFF8D, 0xFF3CF002, 0x24017020, 0xBD104620, 0x4B0C3803, 
    0x0020F853, 0xF003B930, 0x2309F93B, 0xF04F6003, 0xE7F134FF, 0x689B6803, 0x1E044798, 0xF003DAEC, 
    0x4263F92F, 0xE7E76003, 0x2000128C, 0x20002D14, 0x20000B7C, 0xB5102802, 0x3803DD16, 0xF8534B0B, 
    0xB92C4020, 0xF91CF003, 0x60032309, 0xBD104620, 0x46206823, 0x479869DB, 0xDAF71E04, 0xF910F003, 
    0x60044264, 0xE7F12400, 0xE7EF2401, 0x20000B7C, 0xB5102802, 0xF003DC06, 0x231DF903, 0xF04F6003, 
    0xBD1030FF, 0x4B0A3803, 0x0020F853, 0xF003B918, 0x2309F8F7, 0x6803E7F2, 0x4798691B, 0xDA041E04, 
    0xF8EEF003, 0x60044264, 0x4620E7E9, 0xBF00BD10, 0x20000B7C, 0xB5082802, 0xF44FDC04, 0x604B5300, 
    0xBD082000, 0xF8DCF003, 0x60032309, 0x30FFF04F, 0x0000BD08, 0x68134A0C, 0x4418B510, 0x8108F3EF, 
    0xD3054288, 0x220C4B09, 0xF04F601A, 0xBD1030FF, 0x680C4907, 0x4907B124, 0x44216809, 0xD2F14288, 
    0x46186010, 0xBF00BD10, 0x20000004, 0x20002DF4, 0x20000C7C, 0x20000C80, 0xB5084C07, 0x46056823, 
    0xF0036898, 0x6823F9DF, 0xF00368D8, 0xB10DF9DB, 0xFE32F7FF, 0xBF00E7FE, 0x200000CC, 0x47702001, 
    0xF7FFB508, 0x2001FFE9, 0xB5084770, 0xF8E6F000, 0xB508BD08, 0xF8EAF000, 0xB570BD08, 0xF0024605, 
    0xF44FFF09, 0xFB95747A, 0x2C00F4F4, 0xDD024606, 0xFE63F7FF, 0xF002B928, 0x1B80FEFD, 0xD3FA42A8, 
    0x4620BD70, 0xF815F000, 0x0000E7F5, 0x0A10EE07, 0x7A04EDDF, 0x7A27EE67, 0x7AE7EEFD, 0x0A90EE17, 
    0xBFDBF7FF, 0x49742400, 0x737AF44F, 0xF7FF4358, 0xF000BFD4, 0x0000B8D3, 0xB5384815, 0x60034B15, 
    0x241C250B, 0x60454B14, 0x608360C4, 0xF870F001, 0x60184B12, 0x4B134812, 0xE88060C4, 0x4B120028, 
    0xF0016083, 0x4B11F865, 0x48116018, 0x60C44B11, 0x0028E880, 0x60834B10, 0xF85AF001, 0x60184B0F, 
    0xFCE8F003, 0x46082100, 0x4038E8BD, 0xB862F000, 0x20002CBC, 0x0000A2E6, 0x20002C84, 0x20002C80, 
    0x20002C70, 0x0000A2F6, 0x20002CA0, 0x20001C48, 0x20002CF0, 0x0000A303, 0x20002C54, 0x20002C50, 
    0x480B4A0A, 0x5300F1C2, 0x3340F503, 0x6F80F5B3, 0xBF284619, 0x6180F44F, 0x60011A5B, 0x18984905, 
    0x49056008, 0x4B05600B, 0x4770601A, 0x20002DF8, 0x20000C84, 0x20000C88, 0x20000C7C, 0x20000C80, 
    0x00004770, 0x480E4A0D, 0x4B0EB508, 0xF44F6113, 0x61535380, 0x60D32348, 0x60934B0B, 0x61932318, 
    0x4B0A2100, 0xF0016013, 0xB910FD2B, 0xF7FF4808, 0xE8BDFE15, 0xF0004008, 0xBF00BA2B, 0x20002CCC, 
    0x00001CF9, 0x20001C50, 0x20001C00, 0x0000A2BE, 0x0000A2CA, 0xF7FFB508, 0xE8BDFFD3, 0xF7FF4008, 
    0x0000BC35, 0xF7FFB538, 0x4A0AFFAB, 0x6893480A, 0xF5031F19, 0x1AC3747F, 0x5F04F851, 0x42A1505D, 
    0x6090D1FA, 0xFE0AF001, 0xF9B8F000, 0x4038E8BD, 0xBFB8F7FF, 0xE000ED00, 0x1FFF0000, 0xF04F4B02, 
    0x681831FF, 0xBFF0F000, 0x20001C48, 0x68184B01, 0xB808F001, 0x20001C48, 0xBF4CF002, 0x4C02B508, 
    0x47986823, 0xBF00E7FC, 0x20000008, 0x4601B508, 0x2013B110, 0xFC42F001, 0xBD082000, 0x4604B510, 
    0xF831F000, 0x8305F3EF, 0xF3EFB92B, 0xB9138310, 0x8311F3EF, 0xF06FB13B, 0x20000105, 0xF816F000, 
    0x0005F06F, 0x4620BD10, 0xC004F8DF, 0xBD10DF00, 0x00001E8D, 0x47704770, 0x47704770, 0x47704770, 
    0x47704770, 0x47704770, 0x47704770, 0x47704770, 0x47704770, 0x47704770, 0x47704770, 0x47704770, 
    0x47704770, 0x47704770, 0x47704770, 0x47704770, 0x47704770, 0x47704770, 0x47704770, 0x47704770, 
    0x47704770, 0x47704770, 0x47704770, 0x47704770, 0x47704770, 0x47704770, 0x47704770, 0x47704770, 
    0x00004770, 0x4866B570, 0x29017A01, 0xD1034604, 0xFFC8F7FF, 0xBD702000, 0xF04FB131, 0xF7FF30FF, 
    0xF04FFFBF, 0xBD7030FF, 0x22A84D5E, 0xF0033008, 0x6D6BFFB1, 0xD8022B47, 0x000AF06F, 0x68EAE7EF, 
    0xD0EA2A00, 0x2B008A2B, 0x6AEED0E7, 0x305CF8A4, 0x68AB6B29, 0x46306662, 0xF00064A3, 0xB108F98F, 
    0x6088F8C4, 0x69A9696E, 0xF0004630, 0x2800F987, 0x8087F000, 0x69EE67E6, 0x46306A29, 0xF97EF000, 
    0xF0002800, 0xF8C48082, 0x6A6E6080, 0x46306AA9, 0xF974F000, 0xD07D2800, 0x6084F8C4, 0xB1466B6E, 
    0x68B268F3, 0x46306831, 0xF9E1F000, 0xF8C4B108, 0x6BAE608C, 0x68F3B146, 0x683168B2, 0xF0004630, 
    0xB108F9D6, 0x6090F8C4, 0xB1466BEE, 0x68B268F3, 0x46306831, 0xF9CBF000, 0xF8C4B108, 0x6C2E6094, 
    0x68F3B146, 0x683168B2, 0xF0004630, 0xB108F9C0, 0x6098F8C4, 0xB1466C6E, 0x68B268F3, 0x46306831, 
    0xF9B5F000, 0xF8C4B108, 0x6CAE609C, 0x68F3B146, 0x683168B2, 0xF0004630, 0xB108F9AA, 0x60A0F8C4, 
    0xB1466CEE, 0x68B268F3, 0x46306831, 0xF99FF000, 0xF8C4B108, 0x6D2D60A4, 0x68EBB145, 0x682968AA, 
    0xF0004628, 0xB108F994, 0x50A8F8C4, 0x23FF4A16, 0x3022F882, 0x3022F892, 0xF06368D1, 0x43DB03FF, 
    0xF383FAB3, 0x0320F1C3, 0x2102F3C1, 0xBF98428B, 0x21FE1C4B, 0xF303FA01, 0x77D3B2DB, 0x72232301, 
    0xF8D4E746, 0x67E33088, 0xF8D4E775, 0xF8C43088, 0xE77A3080, 0x3088F8D4, 0x3084F8C4, 0xBF00E77E, 
    0x20000010, 0x0000A154, 0xE000ED00, 0x4C03B510, 0xF7FF7A20, 0x7A20FEF8, 0xBF00BD10, 0x20000010, 
    0x4C27B538, 0x2B017A23, 0xF06FD006, 0xF7FF0006, 0xF04FFEE7, 0xBD3830FF, 0x4D226B23, 0x6DAAB94B, 
    0x46194821, 0xF9F2F001, 0xB9106320, 0x30FFF04F, 0x6E6BE7ED, 0x6D23B14B, 0x6DEAB93B, 0x4619481B, 
    0xF9E4F001, 0x28006520, 0x4819D0F0, 0xF83DF001, 0xD0EB2800, 0xF96AF001, 0x07DB682B, 0x2302BF4C, 
    0xF3832303, 0x4B138814, 0x60E3681B, 0xFF2AF000, 0x61A02800, 0x4A10DB0C, 0x21FF1813, 0x1300F883, 
    0x23011141, 0x001FF000, 0xF000FA03, 0x0021F842, 0xFF32F000, 0x72232302, 0xFEA7F7FF, 0xBD382000, 
    0x20000010, 0x0000A154, 0x0000397D, 0x00003931, 0x20000034, 0x200000C0, 0xE000E100, 0xF7FFB508, 
    0xF3EFFE90, 0xB92B8305, 0x8310F3EF, 0xF3EFB913, 0xB1338311, 0x0005F06F, 0xFE82F7FF, 0x0005F06F, 
    0xF8DFBD08, 0xF3EFC028, 0xF0138314, 0xD10A0F02, 0x0F04F013, 0x8308F3EF, 0x3B20BF0C, 0xF0233B68, 
    0xF3830307, 0xDF008809, 0xBF00BD08, 0x00001F45, 0xF3EFB508, 0xB92B8305, 0x8310F3EF, 0xF3EFB913, 
    0xB1338311, 0x30FFF04F, 0xFE5DF7FF, 0x30FFF04F, 0xF3EFBD08, 0x07DB8314, 0xE8BDD403, 0xF7FF4008, 
    0xF8DFBF55, 0xDF00C008, 0xBF00BD08, 0x000020ED, 0xF7FFB508, 0xF3EFFE49, 0xB92B8305, 0x8310F3EF, 
    0xF3EFB913, 0xB1338311, 0x0005F06F, 0xFE38F7FF, 0x0005F06F, 0xF7FFBD08, 0x2802FFCB, 0x4B0DD005, 
    0xB113681B, 0xB103685B, 0xF8DF4798, 0xF3EFC02C, 0xF0138314, 0xD10A0F02, 0x0F04F013, 0x8308F3EF, 
    0x3B20BF0C, 0xF0233B68, 0xF3830307, 0xDF008809, 0xBF00BD08, 0x20002D00, 0x00002101, 0x460CB538, 
    0xB1304603, 0x0201EA40, 0x0207F012, 0x2917D101, 0x4618D806, 0x46212200, 0xFDFCF7FF, 0xBD382000, 
    0x0408F1A1, 0x60192510, 0x18256045, 0x50226085, 0x220160C2, 0xFDEEF7FF, 0xBD382001, 0xB118B5F8, 
    0xF032B111, 0xD0040303, 0xF7FF2300, 0x2000FDE4, 0x310FBDF8, 0x0107F021, 0x0308F100, 0xF8D3681E, 
    0x1AF4E004, 0x0503F02E, 0x42A11B64, 0x6834D904, 0x2C004633, 0xE7E7D1F2, 0x440C6844, 0xEA426044, 
    0xF1BE0701, 0xD1070F00, 0xF103605F, 0x46230408, 0xFDC1F7FF, 0xBDF84620, 0x515E195C, 0x601C6067, 
    0xE7F43408, 0xB100B538, 0x2200B921, 0xFDB4F7FF, 0xBD382000, 0x0508F1A1, 0x0308F100, 0x42AB2200, 
    0x685CD10C, 0x0503F024, 0x1B646844, 0xB95A6044, 0x2201605A, 0xFDA0F7FF, 0xBD382001, 0x461A681C, 
    0xD0E22C00, 0xE7EA4623, 0x6013681B, 0xE92DE7F1, 0x460C41F0, 0x461D4617, 0xB3004606, 0xB302B1C1, 
    0xF04FB30B, 0xFB020E00, 0x6031F801, 0xE004F8C0, 0x0E08EB03, 0x617360F3, 0xF8C060B2, 0xF7FFE010, 
    0x462BFD7C, 0xD1063C01, 0x0707EBA8, 0x240151EC, 0xE8BD4620, 0x19DA81F0, 0x4613601A, 0x4604E7F2, 
    0x4614E7F6, 0x461CE7F4, 0xB538E7F2, 0xB9284604, 0xF7FF4601, 0x4625FD63, 0xBD384628, 0x68021D03, 
    0x1F00E853, 0xD802428A, 0x8F2FF3BF, 0x1C48E004, 0x0500E843, 0xE7F3B105, 0x428B6823, 0xF104D911, 
    0xE8530314, 0xB9155F00, 0x8F2FF3BF, 0x682AE004, 0x2100E843, 0xE7F4B101, 0x46204629, 0xFD3EF7FF, 
    0x2500E7DA, 0xB538E7F8, 0x68C3B128, 0xD802428B, 0x42996903, 0xF06FD307, 0xF7FF0203, 0xF06FFD30, 
    0x46200403, 0x1D03BD38, 0x2F00E853, 0xF3BFB912, 0xE0048F2F, 0xE8431E54, 0xB1054500, 0xB19AE7F4, 
    0x0314F100, 0x600A681A, 0x8F5FF3BF, 0x2F00E853, 0x4294680C, 0xE843D1F6, 0xB1051500, 0x2400E7F2, 
    0xF7FF4622, 0xE7DCFD0C, 0x0402F06F, 0x6B03E7F8, 0xB1E3B530, 0x240078CD, 0x42AA78DA, 0x461AD30F, 
    0x608C604A, 0x6091B18A, 0x6061B1A4, 0xE8503028, 0x1C5A3F00, 0x2100E840, 0xE7F8B101, 0x685ABD30, 
    0x2A00461C, 0x4613D0EC, 0x62C1E7E6, 0x604BE7EC, 0x62C1608B, 0xE7E96301, 0x688A684B, 0x609AB123, 
    0xB11A688A, 0x47706053, 0xE7F962C2, 0x47706303, 0x4FF7E92D, 0xB1004680, 0xF06FB941, 0x20000103, 
    0xFCF1F7FF, 0xB0032000, 0x8FF0E8BD, 0xF0213103, 0xF1030303, 0x9301090C, 0xF189FAB9, 0xF380FAB0, 
    0x2B1F440B, 0xFB09DDE9, 0xB1F2FA00, 0xF8D26894, 0x6916B000, 0xB13C6950, 0xD10207A3, 0x2B3368D3, 
    0xF06FD805, 0xE7DA0108, 0x2B0068D3, 0xB13ED1F9, 0x0503F016, 0x4582D101, 0xF06FD961, 0xE7CE0109, 
    0xD1FA2800, 0x4605B11C, 0x4693E019, 0x4B2E4616, 0x00A8F8D3, 0xF7FFB148, 0x4604FF28, 0xF06FB960, 
    0xF7FF0104, 0x4620FCB0, 0x2201E7BD, 0xF8D32134, 0xF7FF0088, 0xE7F0FE93, 0xD13E2E00, 0x4F222501, 
    0x46512200, 0x0084F8D7, 0xFE88F7FF, 0xB9904606, 0x0104F06F, 0xFC97F7FF, 0xD0A32D00, 0x50A8F8D7, 
    0xB11D4621, 0xF7FF4628, 0xE79BFF2E, 0x0088F8D7, 0xFEA8F7FF, 0x4652E796, 0xF0032100, 0xF045FC5B, 
    0x23080002, 0x23017023, 0x70639A01, 0x70A02300, 0x626260A3, 0x62E362A3, 0x464A6323, 0xF8C44633, 
    0x4641B004, 0x000CF104, 0xFEB1F7FF, 0x4A074B06, 0x4620679A, 0xFC69F7FF, 0x2001E7B5, 0x2C00E7E1, 
    0x4628D0A5, 0xBF00E7DD, 0x20000010, 0x00002769, 0x41F0E92D, 0x4690460E, 0x4604461D, 0x7803B118, 
    0xD1002B08, 0x4620B941, 0x0103F06F, 0xFC4BF7FF, 0x0003F06F, 0x81F0E8BD, 0xB93B7843, 0x0102F06F, 
    0xFC41F7FF, 0x0002F06F, 0x81F0E8BD, 0xB3036883, 0x2B83785B, 0xF7FFD11D, 0x4620FC3D, 0xFD85F000, 
    0x46052201, 0xF0002100, 0x4628FEEF, 0xFE0AF000, 0x6A624605, 0x46316880, 0xF8B2F7FE, 0xB10B68EB, 
    0x8000F883, 0x462068A9, 0xFC29F7FF, 0xE8BD2000, 0xF10481F0, 0xF7FF000C, 0x4607FE88, 0x6A62B1A8, 
    0x300C4631, 0xF89CF7FE, 0x703B2307, 0x23012500, 0x46204639, 0x70BD707B, 0x8003F887, 0xFED7F7FF, 
    0x46204631, 0xFC06F7FF, 0xB1B5E7E0, 0x4631462A, 0xF7FF4620, 0x4B0BFBFC, 0x69D94620, 0xFD32F000, 
    0x20934629, 0xFFEAF000, 0x8309F3EF, 0x0001F06F, 0xF8C3609E, 0xE8BD800C, 0x463181F0, 0xF7FF4620, 
    0xE79FFBEA, 0x20000010, 0x7843B5F8, 0x2B004604, 0x7886D07A, 0xD03E2E00, 0x786B68C5, 0xD0732B00, 
    0x26004601, 0xF1054628, 0xF7FF070C, 0x7066FEC5, 0x46384621, 0xFE67F7FF, 0x2B0068AB, 0x785BD064, 
    0xD1612B93, 0xF7FF4638, 0x4604FE30, 0xD05B2800, 0xF0004628, 0x4632FD0A, 0x46074631, 0xFE74F000, 
    0xF0004638, 0x6A6AFD8F, 0x46076881, 0x000CF104, 0xF836F7FE, 0x70232307, 0x70632301, 0x68FB70A6, 
    0x462170E3, 0xF7FF4628, 0x68B9FE72, 0xE8BD4628, 0xF7FF40F8, 0x6885BB9F, 0xB3AB786B, 0xB34B68AB, 
    0x2B83785B, 0x6841D126, 0xF7FF4628, 0x4628FB93, 0xFCDBF000, 0x46314632, 0xF0004607, 0x4638FE45, 
    0xFD60F000, 0x6A6A4606, 0xF1046880, 0xF7FE010C, 0x68F3F807, 0x78E2B10B, 0x68B1701A, 0xF7FF4628, 
    0x2300FB7E, 0x46217063, 0x000CF105, 0x40F8E8BD, 0xBE09F7FF, 0x46286861, 0xFB6CF7FF, 0x46284621, 
    0x40F8E8BD, 0xBE33F7FF, 0xB510BDF8, 0x0328F100, 0x2F00E853, 0xF3BFB912, 0xE0048F2F, 0xE8431E51, 
    0xB1041400, 0xB90AE7F4, 0xBD102000, 0x23016AC0, 0xD0F92800, 0xE8D21C82, 0xE8C21F4F, 0xB1043F44, 
    0xF011E7F9, 0xD0010FFF, 0xE7F16880, 0x0000BD10, 0x41F0E92D, 0x4617460D, 0x46044698, 0x7803B118, 
    0xD1002B08, 0x4620B941, 0x0103F06F, 0xFB2BF7FF, 0x0003F06F, 0x81F0E8BD, 0xB93B7843, 0x0102F06F, 
    0xFB21F7FF, 0x0002F06F, 0x81F0E8BD, 0xFFBDF7FF, 0xB1E84606, 0x46204601, 0xFE0EF7FF, 0xF1066A62, 
    0x4628010C, 0xFF9CF7FD, 0x78F3B10F, 0x4629703B, 0x25004620, 0x070CF104, 0xFB11F7FF, 0x46317075, 
    0xF7FF4638, 0x68A3FDA0, 0x2000BB03, 0x81F0E8BD, 0x0F00F1B8, 0x4642D015, 0x46204629, 0xFAFDF7FF, 
    0x46204B20, 0xF00069D9, 0x4641FC2D, 0xF0002083, 0xF3EFFEE5, 0xF06F8309, 0x609D0001, 0xE8BD60DF, 
    0x462981F0, 0xF7FF4620, 0xE7BBFAEB, 0x2B93785B, 0x4638D1DB, 0xFD49F7FF, 0x28004606, 0x4620D0D5, 
    0xFC23F000, 0x46074629, 0xF0002201, 0x4638FD8D, 0xFCA8F000, 0x68816A62, 0xF1064607, 0xF7FD000C, 
    0x2307FF4F, 0x23017033, 0x70B57073, 0x70F368FB, 0x46204631, 0xFD8BF7FF, 0x462068B9, 0xFABAF7FF, 
    0xBF00E7B3, 0x20000010, 0x4606B570, 0x4614460D, 0xFAAAF7FF, 0x8305F3EF, 0xF3EFB92B, 0xB9138310, 
    0x8311F3EF, 0xF06FB133, 0x20000105, 0xFA9BF7FF, 0xBD702000, 0x46294630, 0xF8DF4622, 0xF3EFC028, 
    0xF0138314, 0xD10A0F02, 0x0F04F013, 0x8308F3EF, 0x3B20BF0C, 0xF0233B68, 0xF3830307, 0xDF008809, 
    0xBF00BD70, 0x00002531, 0x41F0E92D, 0x460F4604, 0x461D4690, 0xFA7AF7FF, 0x8305F3EF, 0xF3EFB933, 
    0xB91B8310, 0x8311F3EF, 0xD03C2B00, 0x7823B124, 0xD1012B08, 0xB145B107, 0xF06F4620, 0xF7FF0103, 
    0xF06FFA62, 0xE8BD0003, 0x786381F0, 0xF06FB943, 0x46200102, 0xFA57F7FF, 0x0002F06F, 0x81F0E8BD, 
    0x000CF104, 0xFCC1F7FF, 0xB1B84606, 0x46396A62, 0xF7FD300C, 0x2307FED5, 0x23017033, 0x46307073, 
    0xF88670B5, 0x60778003, 0xF00060B4, 0x4620FA59, 0xF7FF4639, 0x4628FA3E, 0x81F0E8BD, 0x46204639, 
    0xFA39F7FF, 0x4620E7D8, 0x46424639, 0xF8DF462B, 0xDF00C008, 0x81F0E8BD, 0x00002671, 0x4604B5F8, 
    0x4617460D, 0xF7FF461E, 0xF3EFFA27, 0xB92B8305, 0x8310F3EF, 0xF3EFB913, 0xB3A38311, 0x7823B124, 
    0xD1012B08, 0xB13EB105, 0xF06F4620, 0xF7FF0103, 0xF06FFA0A, 0xBDF80003, 0xB93B7863, 0x0102F06F, 
    0xF7FF4620, 0xF06FFA00, 0xBDF80002, 0xF7FF4620, 0x4606FE9C, 0xF100B190, 0x6A62010C, 0xF7FD4628, 
    0xB10FFE7F, 0x703B78F3, 0x46204629, 0xF9F7F7FF, 0x60F44630, 0xFA04F000, 0xBDF82000, 0x46204629, 
    0xF9EEF7FF, 0x4620E7DF, 0x463A4629, 0xF8DF4633, 0xDF00C008, 0xBF00BDF8, 0x000028B1, 0x2800B570, 
    0x6884D03A, 0x0060E890, 0xF014B164, 0xD1020303, 0x2A1B68C2, 0xF06FD81F, 0x20000108, 0xF9B7F7FF, 
    0xBD702000, 0x2B0068C3, 0x4B15D1F5, 0x009CF8D3, 0x2201B930, 0xF8D3211C, 0xF7FF0088, 0xE001FB9F, 
    0xFC23F7FF, 0xB9284604, 0x0104F06F, 0xF99FF7FF, 0xBD704620, 0x22042301, 0x70A37022, 0x23002201, 
    0x70E67062, 0x60A36065, 0x612360E3, 0x76236163, 0xF7FF4620, 0xE7EBF98E, 0x46064605, 0xBF00E7D5, 
    0x20000010, 0xB5704B30, 0x460469DD, 0xB935460E, 0x0107F06F, 0xF97BF7FF, 0x30FFF04F, 0xB110BD70, 
    0x2B047803, 0x4620D007, 0x0103F06F, 0xF96FF7FF, 0x0003F06F, 0x7843BD70, 0xF06FB933, 0xF7FF0102, 
    0xF06FF966, 0xBD700002, 0xB9697E01, 0x60C56AEB, 0x61016143, 0x6118B103, 0x62EC2101, 0x76214620, 
    0xF95BF7FF, 0xBD702000, 0x07DA78C3, 0x68C2D50B, 0xD1084295, 0xD10229FF, 0x010FF06F, 0x3101E7DF, 
    0x7601B2C9, 0xB1DEE7EC, 0xD50A079B, 0xF99568E0, 0xF9903020, 0x429A2020, 0xF880DA03, 0xF0003020, 
    0x4631FAAF, 0xF7FF4620, 0x4629F936, 0xF0004620, 0x4631FA79, 0xF0002053, 0xF06FFD31, 0xBD700001, 
    0xF7FF4620, 0xE7BCF92B, 0x20000010, 0x4B33B538, 0x460469DD, 0xF06FB935, 0xF7FF0107, 0xF04FF918, 
    0xBD3830FF, 0x7803B110, 0xD0072B04, 0xF06F4620, 0xF7FF0103, 0xF06FF90C, 0xBD380003, 0xB9337843, 
    0x0102F06F, 0xF903F7FF, 0x0002F06F, 0x68C3BD38, 0xD002429D, 0x010DF06F, 0x7E01E7F4, 0xF06FB911, 
    0xE7EF010E, 0xB2C93901, 0xF7FF7601, 0x7E23F8F9, 0x6963BB3B, 0x6922B10B, 0x6922611A, 0x6153B31A, 
    0x079B78E3, 0xF995D505, 0x6AEB2021, 0xF885B9EB, 0x68A32020, 0x4620B193, 0xFA37F000, 0x46052200, 
    0xF0004611, 0x6AEBFBA1, 0x21016163, 0x60E52300, 0x46206123, 0x762162EC, 0xF8CFF7FF, 0xF0002000, 
    0x2000FB65, 0x62EBBD38, 0x6899E7DA, 0xF991B121, 0x428A1020, 0x460ABFB8, 0xE7D7695B, 0x20000010, 
    0x41F0E92D, 0x26004604, 0xB90C2701, 0x81F0E8BD, 0xF8D478E3, 0x071B8014, 0x7626D518, 0x46202100, 
    0xF8AEF7FF, 0xB18B68A3, 0xF0004620, 0x2200F9FE, 0x46114605, 0xFB68F000, 0x60E56AEB, 0x61266163, 
    0x62EC2101, 0x76274620, 0xF897F7FF, 0xE7DC4644, 0x4604B510, 0xF88CF7FF, 0x8305F3EF, 0xF3EFB92B, 
    0xB9138310, 0x8311F3EF, 0xF06FB133, 0x20000105, 0xF87DF7FF, 0xBD102000, 0xF8DF4620, 0xF3EFC028, 
    0xF0138314, 0xD10A0F02, 0x0F04F013, 0x8308F3EF, 0x3B20BF0C, 0xF0233B68, 0xF3830307, 0xDF008809, 
    0xBF00BD10, 0x00002B7D, 0x4604B538, 0xF7FF460D, 0xF3EFF861, 0xB92B8305, 0x8310F3EF, 0xF3EFB913, 
    0xB13B8311, 0xF06F4620, 0xF7FF0105, 0xF06FF850, 0xBD380005, 0x46294620, 0xC004F8DF, 0xBD38DF00, 
    0x00002C05, 0x4604B510, 0xF849F7FF, 0x8305F3EF, 0xF3EFB92B, 0xB9138310, 0x8311F3EF, 0x4620B13B, 
    0x0105F06F, 0xF833F7FF, 0x0005F06F, 0x4620BD10, 0xC004F8DF, 0xBD10DF00, 0x00002CCD, 0xE8D0B510, 
    0x1C5A3F5F, 0xD8004291, 0xE8C02200, 0xB1042F54, 0xB298E7F5, 0x0000BD10, 0x4C20B570, 0x055EF104, 
    0x0662F104, 0x105CF8B4, 0x3F5FE8D5, 0xF3BFB913, 0xE0048F2F, 0xE8C51E5A, 0xB1002F50, 0xB29BE7F4, 
    0x4630B33B, 0xFFDAF7FF, 0xF8536E63, 0xB3000020, 0x3B017803, 0xD8E52B06, 0xF852A201, 0xBF00F023, 
    0x00002F3D, 0x00002EE5, 0x00002F43, 0x00002EE5, 0x00002F47, 0x00002F4B, 0x00002F4F, 0x47986EA3, 
    0x6EE3E7D0, 0x6F23E7FB, 0x6F63E7F9, 0x6FA3E7F7, 0x2000E7F5, 0x4070E8BD, 0xBA78F000, 0x20000010, 
    0x4C16B570, 0xF8B44605, 0xF104105C, 0xE8D2025E, 0x42993F5F, 0xF3BFD802, 0xE0048F2F, 0xE8C21C58, 
    0xB1060F56, 0xB29BE7F3, 0xD9104299, 0x0060F104, 0xFF94F7FF, 0xF8436E63, 0x7A635020, 0x4B08B923, 
    0x5280F04F, 0xBD70605A, 0x72E32301, 0x4629BD70, 0xE8BD2002, 0xF0004070, 0xBF00BCE5, 0x20000010, 
    0xE000ED00, 0x4A094B08, 0x685268DB, 0xF3F2FBB3, 0x3B014A07, 0x23006053, 0x4B066093, 0xF88322FF, 
    0xF04F2023, 0x477030FF, 0x20000010, 0x0000A154, 0xE000E010, 0xE000ED00, 0x22074B01, 0x4770601A, 
    0xE000E010, 0x681B4B01, 0xBF004770, 0xE000E010, 0x4C1DB538, 0xFFF6F7FF, 0x2304E9D4, 0xF1433201, 
    0xE9C40300, 0x6DA32304, 0x4798B103, 0xF964F000, 0xF0002000, 0x6CA3FA0B, 0x6C22B12B, 0x428A6A21, 
    0x6421D002, 0xBD386463, 0xB10B6C63, 0x64633B01, 0x2B006C63, 0x7A23D1F7, 0xD1F42B02, 0x2D006AE5, 
    0xF995D0F1, 0xF9921020, 0x42993020, 0x4628D1EB, 0xF8BCF000, 0xF0006C20, 0x4628F8D5, 0xF9D6F000, 
    0x6CA36425, 0xBF00E7DE, 0x20000010, 0x4B03B510, 0x462069DC, 0xFF2EF7FE, 0xBD104620, 0x20000010, 
    0xF7FEB508, 0xF8DFFF2C, 0xDF00C010, 0x31FFF04F, 0xF7FE2000, 0xE7FEFF1B, 0x00003765, 0x0F02F012, 
    0xF002B510, 0xD1220201, 0x0328F100, 0xE853B182, 0xEA000F00, 0x428A0201, 0xF3BFD003, 0x20008F2F, 
    0xEA20E005, 0xE8430201, 0xB1042400, 0xBD10E7EF, 0x0F00E853, 0xD1034208, 0x8F2FF3BF, 0xE0052000, 
    0x0201EA20, 0x2400E843, 0xE7F1B104, 0x6A80BD10, 0x0300EA01, 0x4299B11A, 0x2000BF18, 0x2B00BD10, 
    0x2000BF08, 0x0000BD10, 0x2300B510, 0x78837043, 0x4604079A, 0xF013D508, 0x6B010F10, 0xD00F4B0E, 
    0x008CF8D3, 0xF98FF7FF, 0x07DB78A3, 0x4B0AD512, 0x0090F8D3, 0xB1384621, 0x4010E8BD, 0xB983F7FF, 
    0xF7FF6FD8, 0xE7EFF8FF, 0x0088F8D3, 0x4010E8BD, 0xB8F8F7FF, 0xBF00BD10, 0x20000010, 0x4604B510, 
    0x7803B110, 0xD0052B01, 0x21004620, 0xFEB1F7FE, 0xBD102000, 0x2B007843, 0x6841D0F6, 0xFEA9F7FE, 
    0xBD106860, 0xB161B510, 0x2020F991, 0xB11B6883, 0x4020F993, 0xDA054294, 0x608B60C8, 0xB1036081, 
    0xBD1060D9, 0x689B4618, 0x6883E7F1, 0x689AB12B, 0xB1026082, 0x220060D0, 0x461860DA, 0xB1104770, 
    0x2B017803, 0x4770D000, 0xE7F868C0, 0xB13368C3, 0x609A6882, 0xB1026882, 0x230060D3, 0x477060C3, 
    0x4601B510, 0x78234604, 0xD0072B01, 0xF7FF4608, 0x4620FFED, 0x4010E8BD, 0xBFC4F7FF, 0x2C0068E4, 
    0xBD10D1F1, 0x46012301, 0x48017043, 0xBFBAF7FF, 0x20000034, 0xB5301C4B, 0xD10F4A14, 0x21006B93, 
    0xF04FB93B, 0x61C434FF, 0x61036141, 0x6108B121, 0x4619BD30, 0xE7F3691B, 0xBD306390, 0x24006B53, 
    0x69DDB113, 0xD20A42A9, 0x614461C1, 0xB1546103, 0xB11B6120, 0x615869DA, 0x61D91A51, 0x461CBD30, 
    0x691B1B49, 0x6350E7EC, 0xBF00E7F3, 0x20000010, 0x69C4B510, 0x1C636942, 0xB91AD110, 0x6B9B4B10, 
    0xD11B4298, 0xB1036903, 0x6942615A, 0x6113B11A, 0x61432300, 0x4A0ABD10, 0xBD106393, 0x4B08B91A, 
    0x42986B5B, 0x6903D10A, 0x69D9B11B, 0x4421615A, 0x694261D9, 0xD1EA2A00, 0x63534A01, 0xBF00BD10, 
    0x20000010, 0x3022F890, 0xF0136B80, 0xBF0C0F10, 0x30203060, 0x00004770, 0x4D2EB538, 0x2C006B6C, 
    0x69E3D057, 0x61E33B01, 0xD1522B00, 0x2B537863, 0xD808D037, 0xD02B2B33, 0xD02C2B43, 0xD1072B13, 
    0xFDF2F7FE, 0x2B73E004, 0xD817D037, 0xD02E2B63, 0xF7FF4620, 0x6801FFD7, 0xF7FE4620, 0x4620FDDE, 
    0xFF54F7FF, 0xF7FF4620, 0x6924FF6D, 0x69E3B124, 0xD0DB2B00, 0x61632300, 0xBD38636C, 0xD0222B83, 
    0xD1E52B93, 0xF7FF4620, 0xF7FEFF3A, 0xE7DFFDE1, 0xFDC7F7FE, 0x4620E7DC, 0xFF31F7FF, 0xFDC6F7FE, 
    0x4620E7D6, 0xFF2BF7FF, 0xFDC6F7FE, 0x4620E7D0, 0xFF25F7FF, 0xFDC5F7FE, 0x4620E7CA, 0xFF1FF7FF, 
    0xFDC0F7FE, 0x4620E7C4, 0xFF19F7FF, 0xFDC6F7FE, 0xBD38E7BE, 0x20000010, 0x2301B510, 0x70434A09, 
    0x1020F990, 0x32246AD3, 0xF993B11B, 0x428C4020, 0x60C2DC05, 0x60906083, 0x60D8B103, 0x461ABD10, 
    0xE7F1689B, 0x20000010, 0x681B4B04, 0x691BB12B, 0x4A03B11B, 0x6C506A12, 0x47704718, 0x20002D00, 
    0x20000010, 0x69D94B07, 0x6B0BB151, 0x42936B8A, 0x681AD203, 0x429A4B04, 0x2001D002, 0xBAB2F000, 
    0xBF004770, 0x20000010, 0xE25A2EA5, 0x2302B510, 0x4B057043, 0x62184604, 0xFFE4F7FF, 0xE8BD4620, 
    0xF7FE4010, 0xBF00BD5B, 0x20000010, 0x4B15B510, 0x7A1A4604, 0xB9A869D9, 0x6ADC2A02, 0xB1F9D120, 
    0xF994B1F4, 0xF9912020, 0x429A3020, 0x4620DD18, 0xFEBCF7FF, 0xF7FF4608, 0x4620FF9F, 0x4010E8BD, 
    0xBFD4F7FF, 0xD1062A02, 0xF990B129, 0xF9912020, 0x429A3020, 0x4620DCEE, 0x4010E8BD, 0xBEC2F7FF, 
    0xBF00BD10, 0x20000010, 0x4604B570, 0x4615460E, 0xFD23F7FE, 0xF7FF4620, 0x6006FF15, 0xF7FF4620, 
    0x4620FEE7, 0xE8BDB11D, 0xF7FF4070, 0xE8BDBFBF, 0xF7FF4070, 0xB538BEA7, 0x2B337843, 0xD1134604, 
    0x2023F890, 0xF7FF6A41, 0x4605FDE9, 0x4601B160, 0x46202200, 0xFFD8F7FF, 0xF894462A, 0x6A601023, 
    0x4038E8BD, 0xBCFEF7FE, 0x0000BD38, 0x4FF0E92D, 0x4682B085, 0x93029103, 0xF06FB938, 0xF7FE0103, 
    0x2000FCE5, 0xE8BDB005, 0x2A008FF0, 0x6894D039, 0x0510F102, 0xB144CDE0, 0xD10207A3, 0x2B4768D3, 
    0xF06FD806, 0x20000108, 0x68D3E7E9, 0xD1F82B00, 0x0768B13D, 0x2E00D102, 0x80CEF040, 0x010AF06F, 
    0xB12FE7F1, 0x2B371E7B, 0xF06FD903, 0xE7EA010B, 0xB11E2718, 0xD1F10771, 0xD9EF2E47, 0xF8D26853, 
    0x93018000, 0x4B5FB9D4, 0x0090F8D3, 0xF7FEB178, 0x4604FF3C, 0xF06FBBA0, 0xF7FE0104, 0x4620FCA7, 
    0x4690E7C0, 0x46162718, 0x92014615, 0x2201E7EB, 0xF8D32148, 0xF7FE0088, 0xE7EAFEA1, 0x0B00F04F, 
    0xF8DFBB2D, 0x2E009140, 0x4A4FD17E, 0x008CF8D9, 0x28006D56, 0xF7FED078, 0x4605FF18, 0xF06FB998, 
    0x20000104, 0xFC82F7FE, 0x0F00F1BB, 0xF8D9D099, 0x46215090, 0xD0712D00, 0xF7FE4628, 0xE790FF34, 
    0x0B01F04F, 0xF04BE7DC, 0xF04B0B10, 0xF89D0B02, 0x70E33004, 0x60A32300, 0x612360E3, 0x61A36163, 
    0xF88461E3, 0x62633023, 0x62E362A3, 0x0340F1A6, 0x442B2201, 0x70627022, 0x63A3B27F, 0x4B3322FD, 
    0xB002F884, 0x8004F8C4, 0x7020F884, 0x7021F884, 0x2022F884, 0x63666325, 0xA03CF8C4, 0x4B2A602B, 
    0x075B681B, 0x3504D543, 0xF1A608B6, 0x462A0311, 0x31CCF04F, 0xD1362B00, 0x4680F106, 0xEB053E11, 
    0xF1050586, 0x22000334, 0x2B04F845, 0xD1FB429D, 0x4A204B1F, 0x0408E885, 0x7380F04F, 0x9B0360AB, 
    0x3C14F845, 0x46204B17, 0xF7FE669A, 0x4B1AFC21, 0xB1F3681B, 0xB1E3689B, 0x46209902, 0x64604798, 
    0xF7FF4620, 0xE76AFEC3, 0x4631462A, 0x007CF8D9, 0xFE14F7FE, 0x28004605, 0xE780D197, 0x0088F8D9, 
    0xFE40F7FE, 0xF842E71D, 0x3B011B04, 0x6BA5E7C2, 0x9B02E7C7, 0xE7E36463, 0xF47F2F00, 0x2718AF33, 
    0xBF00E738, 0x20000010, 0x0000A154, 0xE25A2EA5, 0x000030A1, 0x000034D7, 0x20002D00, 0x4D10B5F8, 
    0x460769EC, 0xB1CC460E, 0x2B027A2B, 0x4620D004, 0xFD5CF7FF, 0xBDF82000, 0xB1806AE8, 0xF7FE4620, 
    0x4631FBDB, 0x70674620, 0xFD74F7FF, 0x0024F105, 0xFD3BF7FF, 0xFE6AF7FF, 0xBDF82001, 0xBDF84620, 
    0x20000010, 0x4D1BB538, 0x2C0069EC, 0x6AE0D030, 0xFB16F7FF, 0xB13069A0, 0x46112200, 0xFE94F7FF, 
    0xF7FE69A0, 0x7A2BFBB8, 0xD1212B02, 0xB1FB6AEB, 0x8309F3EF, 0x63A34810, 0xFD17F7FF, 0xFE46F7FF, 
    0x61EB2300, 0x07DB78E3, 0x69A3D501, 0x4620B13B, 0xFCBAF7FF, 0xE8BD4620, 0xF7FE4038, 0x2204BBA1, 
    0x60E37062, 0x60A36BEB, 0x60DCB103, 0xE7F163EC, 0xBF00BD38, 0x20000010, 0x20000034, 0x4607B5F8, 
    0x4615460E, 0xF7FE461C, 0xF3EFFB82, 0xB92B8305, 0x8310F3EF, 0xF3EFB913, 0xB1338311, 0x0105F06F, 
    0xF7FE2000, 0x2000FB73, 0x4638BDF8, 0x462A4631, 0xF8DF4623, 0xF3EFC028, 0xF0148414, 0xD10A0F02, 
    0x0F04F014, 0x8408F3EF, 0x3C20BF0C, 0xF0243C68, 0xF3840407, 0xDF008809, 0xBF00BDF8, 0x0000350D, 
    0xF7FF2300, 0x0000BFCB, 0x4603B508, 0x8205F3EF, 0xF3EFB92A, 0xB9128210, 0x8211F3EF, 0x4618B12A, 
    0xF7FE2100, 0x2000FB46, 0xF8DFBD08, 0xDF00C008, 0xBF00BD08, 0x0000317D, 0xF3EFB508, 0xB92B8305, 
    0x8310F3EF, 0xF3EFB913, 0xB1238311, 0xF7FE2000, 0x2000FB31, 0xF8DFBD08, 0xDF00C008, 0xBF00BD08, 
    0x0000308D, 0x6CD34A0C, 0x2400B530, 0x691DB113, 0xD20A42A9, 0x60846101, 0xB11B60C3, 0x6098691D, 
    0x61191A69, 0x60E0B12C, 0x461CBD30, 0x68DB1B49, 0x64D0E7EC, 0xBF00BD30, 0x20000010, 0x4D13B570, 
    0xB3046CEC, 0x3B016923, 0x26016123, 0xB9D36923, 0xB10B68E3, 0x609A68A2, 0x230064EB, 0xF104461A, 
    0x6D680118, 0xF890F7FF, 0x4621B118, 0xF0002003, 0x78E3F839, 0xD1072B01, 0x46206961, 0xFFC2F7FF, 
    0x2C006CEC, 0xBD70D1E2, 0xE7F97066, 0x20000010, 0xB5134B0F, 0x6E586E1A, 0x21084C0E, 0xF844F7FF, 
    0xB1906560, 0x65A34B0C, 0x33FFF04F, 0x46692200, 0xF7FF6D60, 0x2800F8C3, 0xE89DD1F6, 0xF7FE0003, 
    0x9801FAD4, 0x47989B00, 0xB002E7EE, 0xBF00BD10, 0x0000A154, 0x20000010, 0x000038DD, 0xF7FEB508, 
    0xE7FCFA7D, 0x4605B508, 0xF7FF460C, 0x1E6BFF75, 0x2B044602, 0xE8DFD824, 0x0D03F003, 0x001E1913, 
    0xF7FF4620, 0x4622FF51, 0x21014603, 0xF7FE480F, 0xE7FEF835, 0x21024623, 0xF7FE480D, 0xE7F8F82F, 
    0x21034623, 0xF7FE480B, 0xE7F2F829, 0x480A2104, 0xF824F7FE, 0x2105E7ED, 0xF7FE4808, 0xE7E8F81F, 
    0x48074629, 0xF81AF7FE, 0xBF00E7E3, 0x0000A37C, 0x0000A3CD, 0x0000A423, 0x0000A488, 0x0000A4E3, 
    0x0000A543, 0x4B0FB510, 0xF04F4C0F, 0x601A7292, 0x0014F104, 0xFAA0F000, 0x4A0D4B0C, 0x2100601A, 
    0x0208F104, 0xF0004608, 0x2200FB09, 0x20024611, 0xFA20F000, 0x000CF104, 0xF8E6F000, 0x4A064B05, 
    0xBD10601A, 0x40048044, 0x0000A6A0, 0x20002D04, 0x02FAF080, 0x200000C0, 0x07270E00, 0xBFD2F7FF, 
    0x2104B507, 0x0001EB0D, 0xFE53F7FD, 0xF85DB003, 0x0000FB04, 0xF8D24A08, 0xF4433088, 0xF8C20370, 
    0x4B063088, 0x5220F24C, 0xF64D81DA, 0x81DA1228, 0x72E9F44F, 0x4770801A, 0xE000ED00, 0x40052000, 
    0x799B4B07, 0xBF4B07DB, 0x4B074B06, 0x68184A07, 0x7818BF41, 0x0342F3C0, 0x40D86810, 0xBF004770, 
    0x40064000, 0x40064008, 0x200000C8, 0x200000C4, 0x4B0EB508, 0xF003781B, 0x2B010303, 0xD304D00E, 
    0x480B2B02, 0x2000BF18, 0x4B0ABD08, 0xB9606818, 0x4A0A4B09, 0x480A21D4, 0xF914F001, 0x68184B09, 
    0x4B09B918, 0x21D94A05, 0xBD08E7F5, 0x4006400C, 0x02DC6C00, 0x20002D04, 0x0000A6C7, 0x0000A749, 
    0x0000A6D3, 0x20002D08, 0x0000A731, 0xF7FFB508, 0xB1D8FFCF, 0x4B104A0F, 0x781B320B, 0x1C0BF812, 
    0xF3C37812, 0xF01103C2, 0xFA200F30, 0xF002F003, 0xD0000203, 0x2A02B10A, 0x2B06D108, 0x2B07D003, 
    0x0940D005, 0x2314BD08, 0xF0F3FBB0, 0x230CBD08, 0xBF00E7FA, 0x40064001, 0x40064000, 0x4B08B508, 
    0x061B781B, 0x4B07D509, 0xB9386818, 0x4A074B06, 0xF2404807, 0xF0011165, 0x2000F8C5, 0xBF00BD08, 
    0x40065000, 0x20002D04, 0x0000A6C7, 0x0000A760, 0x0000A6D3, 0x4B0FB508, 0xF3C3681B, 0x2B024381, 
    0x2B03D009, 0xB983D013, 0xFFD8F7FF, 0x4F00F5B0, 0x2000BF18, 0x4B08BD08, 0xB9506818, 0x4A084B07, 
    0xF2404808, 0xF0011179, 0x2000F89D, 0xF44FBD08, 0xBD08707A, 0x40047000, 0x20002D08, 0x0000A731, 
    0x0000A777, 0x0000A6D3, 0x68424B0B, 0x490B601A, 0x680A7803, 0xF422041B, 0xF4033240, 0x43133340, 
    0x4907600B, 0x680A7843, 0xF403049B, 0xF4222340, 0x43132240, 0x4770600B, 0x40048044, 0x40048004, 
    0x40047000, 0x4B10B508, 0x0799781B, 0x2000D501, 0x4B0EBD08, 0x0692799A, 0x799BD4F9, 0xD41006DB, 
    0xFF64F7FF, 0xD0F22800, 0x78D34A08, 0xF3C378D2, 0x005B1341, 0x13D2EB03, 0xF8324A05, 0x43583013, 
    0x4B04BD08, 0xE7ED6818, 0x40064001, 0x40064000, 0x0000A7D6, 0x200000C8, 0x78184B03, 0x0002F010, 
    0xF7FFD001, 0x4770BEFD, 0x40064000, 0x4B0EB508, 0xF0107998, 0xD0160040, 0xFF0AF7FF, 0x4B0BB930, 
    0x480C4A0B, 0x217EF240, 0xF82CF001, 0x781B4B0A, 0x031FF003, 0xFBB03301, 0x4B08F0F3, 0xF003781B, 
    0x3318031F, 0xBD084358, 0x40064000, 0x0000A73E, 0x0000A78D, 0x0000A6D3, 0x40064004, 0x40064005, 
    0x681B4B07, 0x4301F3C3, 0xD0022B01, 0xF7FFD203, 0xF7FFBF99, 0x2B03BFCB, 0xBF184802, 0x47702000, 
    0x40048004, 0x02DC6C00, 0x799B4B08, 0x0381F3C3, 0xD0092B02, 0xD0032B03, 0xD1032B01, 0xBEB0F7FF, 
    0xBFB4F7FF, 0xBF7EF7FF, 0xBEC2F7FF, 0x40064000, 0x4B0AB510, 0x06DB799B, 0xF7FFD406, 0x4604FEE7, 
    0x2400B92C, 0xBD104620, 0x681C4B05, 0xF7FFE7F8, 0xEBB4FFDB, 0xD8F40FD0, 0xBF00E7F4, 0x40064000, 
    0x200000C8, 0x2813B508, 0xE8DFD848, 0x0D0DF000, 0x47241D16, 0x47332F2B, 0x3F3B3747, 0x47474743, 
    0xF44F0A49, 0xBD08707A, 0xFFBEF7FF, 0x681B4B1D, 0x33010F1B, 0xF0F3FBB0, 0xF7FFBD08, 0x4B19FFB5, 
    0xF3C3681B, 0xE7F46303, 0xFFAEF7FF, 0x681B4B15, 0x5303F3C3, 0xF7FFE7ED, 0x4B12FFA7, 0xF3C3681B, 
    0xE7E64303, 0x4008E8BD, 0xBF8AF7FF, 0x4008E8BD, 0xBEE0F7FF, 0x4008E8BD, 0xBEC0F7FF, 0x4008E8BD, 
    0xBFA6F7FF, 0x4008E8BD, 0xBF46F7FF, 0x4008E8BD, 0xBF18F7FF, 0x4008E8BD, 0xBF48F7FF, 0xBD082000, 
    0xBD084801, 0x40048044, 0x02DC6C00, 0x490FB510, 0x780B780A, 0x0403F000, 0x03FCF003, 0xF0024323, 
    0x700B0203, 0x4B0AB938, 0x075C781B, 0x390CD503, 0x079B798B, 0x4282D5FC, 0xF240D003, 0x3B0153DD, 
    0x2000D101, 0xBF00BD10, 0xBF00E7F9, 0x4006400C, 0x40064001, 0x4B1FB5F0, 0x79B44E1F, 0x781D79B7, 
    0x0542F3C5, 0xF3C44295, 0xB2FF0481, 0xD0094D1B, 0xD42107FF, 0x0052781E, 0x020EF002, 0x06D0F006, 
    0x701A4332, 0xF001782B, 0xF0030201, 0x431303FE, 0x4B11702B, 0xF000781A, 0xF0020503, 0x432A02FC, 
    0x701A2C01, 0x0782D001, 0x799AD504, 0x0201F002, 0xD1FA428A, 0xBDF02000, 0xD0022C01, 0x07B77836, 
    0x782ED5D8, 0xF0064F04, 0x702E06FE, 0x07F679BE, 0xE7CFD4FC, 0x40064008, 0x40064000, 0x40064001, 
    0xB930B510, 0x4A104B0F, 0xF44F4810, 0xF0007152, 0x7843FF09, 0x4C0F4A0E, 0x031FF003, 0x78217013, 
    0xF0017883, 0xF00301E0, 0x430B031F, 0x78137023, 0x0140F043, 0x430B7803, 0x3A047013, 0x065B7993, 
    0xBD10D5FC, 0x0000A6C0, 0x0000A79F, 0x0000A6D3, 0x40064004, 0x40064005, 0xF6496803, 0x42930297, 
    0xD927B530, 0x428B4914, 0x2101BF94, 0x4A132102, 0x78137904, 0xF0034D12, 0x432303F0, 0x78137013, 
    0xF0037984, 0x4323035F, 0x79437013, 0xEA43782C, 0xF0031301, 0xF004033C, 0x430B01C3, 0x7943702B, 
    0x7813B13B, 0xD5040619, 0x5280F5A2, 0x079B7993, 0xBD30D5FC, 0xE7DA2100, 0x007A1200, 0x40065000, 
    0x40064001, 0xB931B510, 0x4A174B16, 0xF2404817, 0xF00051BE, 0x4A16FEA7, 0xF0037813, 0x701303FD, 
    0x781A4B14, 0x023BF002, 0x0280F042, 0x799A701A, 0x021CF002, 0xD1FA2A08, 0x78224C0F, 0x02BFF002, 
    0x4A0C7022, 0x06987993, 0x4608D4FC, 0xFF78F7FF, 0x4A087823, 0x0340F043, 0x79937023, 0xD5FC069B, 
    0xBD102000, 0x0000A6C0, 0x0000A7B0, 0x0000A6D3, 0x40064001, 0x40064000, 0x40064005, 0x460DB538, 
    0xB9324614, 0x4A0D4B0C, 0xF240480D, 0xF000615D, 0xF7FFFE69, 0x4621FEEB, 0xF7FF4628, 0x4B09FFB3, 
    0xF002781A, 0x701A023F, 0xF3C2799A, 0x2A030281, 0x2000D1FA, 0xBF00BD38, 0x0000A6C0, 0x0000A7C1, 
    0x0000A6D3, 0x40064000, 0x2B006803, 0x4B02BFB4, 0x681B4B02, 0xBF004718, 0x200011EC, 0x200011F0, 
    0x4B07B508, 0xB9316819, 0x4A074B06, 0xF2404807, 0xF0006157, 0x4806FE37, 0x4008E8BD, 0xBFE4F7FF, 
    0x200011E0, 0x0000A84A, 0x0000A87A, 0x0000A7ED, 0x4002C000, 0x4B07B508, 0xB9316859, 0x4A074B06, 
    0xF2404807, 0xF000615F, 0x4806FE1D, 0x4008E8BD, 0xBFCAF7FF, 0x200011E0, 0x0000A85A, 0x0000A890, 
    0x0000A7ED, 0x4002D000, 0x4B07B508, 0xB9316899, 0x4A074B06, 0xF2404807, 0xF0006167, 0x4806FE03, 
    0x4008E8BD, 0xBFB0F7FF, 0x200011E0, 0x0000A86A, 0x0000A8A6, 0x0000A7ED, 0x400AC000, 0x4605B570, 
    0x4B27B930, 0x48284A27, 0x313AF240, 0xFDEAF000, 0x7C016882, 0x68C377D1, 0xB9336804, 0x6841B12C, 
    0x46A42201, 0x4070E8BD, 0xEB024760, 0xF2411241, 0xF241001C, 0x58510118, 0xF0025A12, 0x2A000280, 
    0x0103EBA1, 0x2201BF14, 0xEA4F2200, 0xD0141151, 0x7C6BB2C9, 0x4299B25B, 0x7CEBD117, 0x42987D28, 
    0x7CEBD11B, 0xB249B25B, 0x7CE97469, 0xB2491AC9, 0xB1A474E9, 0x46286869, 0xB109E7D3, 0xE7E73901, 
    0x39017D29, 0x01FFF001, 0x7C6BE7E3, 0x1ACBB25B, 0x7D28D5E9, 0xF380FA43, 0x2300E7E5, 0xBD70E7E3, 
    0x0000A8BC, 0x0000A94E, 0x0000A8F1, 0x68184B01, 0xBFA4F7FF, 0x200011F4, 0x68584B01, 0xBF9EF7FF, 
    0x200011F4, 0x68984B01, 0xBF98F7FF, 0x200011F4, 0x68D84B01, 0xBF92F7FF, 0x200011F4, 0x69184B01, 
    0xBF8CF7FF, 0x200011F4, 0x69584B01, 0xBF86F7FF, 0x200011F4, 0x69984B01, 0xBF80F7FF, 0x200011F4, 
    0x69D84B01, 0xBF7AF7FF, 0x200011F4, 0x6A184B01, 0xBF74F7FF, 0x200011F4, 0x6A584B01, 0xBF6EF7FF, 
    0x200011F4, 0x6A984B01, 0xBF68F7FF, 0x200011F4, 0x6AD84B01, 0xBF62F7FF, 0x200011F4, 0x6B184B01, 
    0xBF5CF7FF, 0x200011F4, 0x6B584B01, 0xBF56F7FF, 0x200011F4, 0x6B984B01, 0xBF50F7FF, 0x200011F4, 
    0x6BD84B01, 0xBF4AF7FF, 0x200011F4, 0x4A034B02, 0x6811681B, 0x47184802, 0x20001240, 0x20001234, 
    0x400C0000, 0x4A034B02, 0x6811681B, 0x47184802, 0x2000123C, 0x20001234, 0x400C0000, 0x4A034B02, 
    0x6811681B, 0x47184802, 0x20001238, 0x20001234, 0x400C0000, 0x68194B08, 0xB931B510, 0x4A084B07, 
    0xF2404808, 0xF000511F, 0x4B07FD0D, 0x681B4807, 0x4010E8BD, 0xBF004718, 0x20001244, 0x0000A95D, 
    0x0000A9F1, 0x0000A991, 0x20001248, 0x40024000, 0x78C2B510, 0x460306D2, 0xD402460C, 0x06927882, 
    0x4A06D507, 0x68124621, 0x47904618, 0x8F4FF3BF, 0x4B03BD10, 0x4798681B, 0xBF00E7F8, 0x20001258, 
    0x2000125C, 0x48034B02, 0xF7FF6819, 0xBF00BFE1, 0x2000124C, 0x40066000, 0x48034B02, 0xF7FF6859, 
    0xBF00BFD7, 0x2000124C, 0x40067000, 0x48034B02, 0xF7FF6899, 0xBF00BFCD, 0x2000124C, 0x400E6000, 
    0x4B05B508, 0xD0054298, 0x4A054B04, 0x21484805, 0xFCB8F000, 0xBD082000, 0x40037000, 0x0000AA07, 
    0x0000AA88, 0x0000AA2C, 0x4604B538, 0xB929460D, 0x4A0E4B0D, 0x214F480E, 0xFCA4F000, 0xFFE0F7FF, 
    0x68134A0C, 0x0300F443, 0x68236013, 0x0302F023, 0x782B6023, 0x6823B123, 0x0301F023, 0xBD386023, 
    0xF0436823, 0xE7F90301, 0x0000A6C0, 0x0000AA98, 0x0000AA2C, 0x4004803C, 0x68194B08, 0xB931B510, 
    0x4A084B07, 0xF2404808, 0xF000411A, 0x4B07FC7B, 0x681B4807, 0x4010E8BD, 0xBF004718, 0x20002D0C, 
    0x0000AAB3, 0x0000AB46, 0x0000AAEA, 0x20001264, 0x4002F000, 0x68594B08, 0xB931B510, 0x4A084B07, 
    0xF44F4808, 0xF0006184, 0x4B07FC5D, 0x681B4807, 0x4010E8BD, 0xBF004718, 0x20002D0C, 0x0000AAA1, 
    0x0000AB5F, 0x0000AAEA, 0x20001260, 0x4002F000, 0x68194B08, 0xB931B510, 0x4A084B07, 0xF44F4808, 
    0xF00061A9, 0x4B07FC3F, 0x681B4807, 0x4010E8BD, 0xBF004718, 0x20001268, 0x0000AB78, 0x0000AC0B, 
    0x0000ABAE, 0x2000126C, 0x400B1000, 0x69134A05, 0x0304F023, 0xF3BF6113, 0xBF308F4F, 0x8F6FF3BF, 
    0x47702000, 0xE000ED00, 0xBFF0F7FF, 0xB5084A08, 0xF8522300, 0x42811023, 0x3301D008, 0xD1F82B06, 
    0x4A054B04, 0x21A94805, 0xFC0CF000, 0xBD084618, 0x0000AD6C, 0x0000AC21, 0x0000AD27, 0x0000ACCA, 
    0x4604B5F8, 0xB929460E, 0x4A534B52, 0x485321D4, 0xFBF8F000, 0xB91B680B, 0x4A4F4B51, 0xE7F621D5, 
    0x42884950, 0xF501D01D, 0x42885180, 0xF501D019, 0x42885180, 0xF501D017, 0x42885180, 0xF501D013, 
    0x428821FA, 0xF501D00F, 0x42885180, 0xF04FBF14, 0x210131FF, 0x428179B0, 0x4B43DA07, 0x21D74A3E, 
    0x2108E7D5, 0x2101E7F6, 0x79F0E7F4, 0xDA034281, 0x4A394B3E, 0xE7CA21D8, 0xFBB2011D, 0xB2ADF5F5, 
    0xBF082D00, 0x01692501, 0xFBB20052, 0x1A7FF7F3, 0x4439B2BF, 0xF2F1FBB2, 0xBF344293, 0x1A9A1AD2, 
    0xFBB32164, 0xEB03F3F1, 0x429A0343, 0x4620D84F, 0xFF8CF7FF, 0xF8534B2E, 0x0C0B1020, 0x4380F103, 
    0x238EF503, 0x6818B289, 0x408A2201, 0x601A4302, 0xF00378E3, 0x70E303F3, 0xF0037823, 0xEA4303E0, 
    0xB2DB2315, 0x7023B2ED, 0x7AA37065, 0x071FF007, 0x03E0F003, 0x72A7431F, 0x793278A3, 0x03ECF003, 
    0xF043B112, 0x43130310, 0x797370A3, 0x015B7822, 0x02DFF002, 0x0320F003, 0x70234313, 0x74E379B3, 
    0x756379F3, 0xF0437C23, 0x74230388, 0xF0437C63, 0x746303C0, 0x7A3278E3, 0xB10AB2DB, 0x0308F043, 
    0xB10A7A72, 0x0304F043, 0x200070E3, 0xF240BDF8, 0xBDF830F5, 0x0000A6C0, 0x0000AD38, 0x0000ACCA, 
    0x0000AC3B, 0x4006A000, 0x0000AC50, 0x0000AC8D, 0x0000AD84, 0xB930B508, 0x4A0A4B09, 0xF240480A, 
    0xF000115D, 0xF44FFB3F, 0x600333E1, 0x23002201, 0x71C27183, 0x71437103, 0x72437203, 0xBF00BD08, 
    0x0000A6C0, 0x0000AD42, 0x0000ACCA, 0xB931B538, 0x4A1F4B1E, 0xF44F481F, 0xF00071B7, 0x010BFB23, 
    0xF3F3FBB2, 0x2B00B29B, 0x2301BF08, 0x0052015D, 0xF4F1FBB2, 0xB2A41B64, 0xFBB24425, 0x4291F2F5, 
    0x1A52BF34, 0x25641A8A, 0xF1F5FBB1, 0x0141EB01, 0xD218428A, 0x78C278C1, 0x02F3F002, 0x780270C2, 
    0x02E0F002, 0x2213EA42, 0xB2DBB2D2, 0x70437002, 0xF0047A83, 0xF003041F, 0xB2C903E0, 0x7284431C, 
    0x200070C1, 0xF240BD38, 0xBD3830F5, 0x0000AC43, 0x0000AD58, 0x0000ACCA, 0x79417902, 0x7C807B03, 
    0xEA43041B, 0x43132301, 0x6000EA43, 0xB5104770, 0xF0037943, 0xEA43033F, 0xB2DB2311, 0x0E0B7143, 
    0xF0117483, 0xBF1C0F17, 0x79C37903, 0x460C070B, 0x7903D505, 0x7C4379C3, 0x0340F043, 0xF7FF7443, 
    0x4204FFDB, 0x30EEF240, 0x2000BF08, 0x0000BD10, 0x4A034B02, 0x6811681B, 0x47184802, 0x20001288, 
    0x20001270, 0x4006A000, 0xBFF2F7FF, 0x4A034B02, 0x6851681B, 0x47184802, 0x20001288, 0x20001270, 
    0x4006B000, 0xBFF2F7FF, 0x4A034B02, 0x6891681B, 0x47184802, 0x20001288, 0x20001270, 0x4006C000, 
    0xBFF2F7FF, 0x4A034B02, 0x68D1681B, 0x47184802, 0x20001288, 0x20001270, 0x4006D000, 0xBFF2F7FF, 
    0x4A034B02, 0x6911681B, 0x47184802, 0x20001288, 0x20001270, 0x400EA000, 0xBFF2F7FF, 0x4A034B02, 
    0x6951681B, 0x47184802, 0x20001288, 0x20001270, 0x400EB000, 0xBFF2F7FF, 0x41FFE92D, 0x4604460F, 
    0x46384934, 0xF7FC4616, 0x4933FFAB, 0x46304605, 0xFFA6F7FC, 0x46284601, 0xFF84F7FC, 0x30016020, 
    0x2237D104, 0x482E492D, 0xF814F7FD, 0xF7FFA801, 0xF44FFF01, 0x93015316, 0x4A2A2300, 0x300CF88D, 
    0x300DF88D, 0x4D286823, 0xF8555CD0, 0xF7FF8023, 0xA901FA69, 0x46404602, 0xFE32F7FF, 0x4638491D, 
    0xFF44F7FC, 0x4630491C, 0xFF40F7FC, 0xD00A1C7A, 0xF8556823, 0x78D32023, 0x0308F043, 0x210270D3, 
    0xF0004638, 0x1C73F9E7, 0x6823D00A, 0x2023F855, 0xF04378D3, 0x70D30304, 0x46302102, 0xF9DAF000, 
    0xB93B6823, 0x48124B11, 0x601A2201, 0x22BC4621, 0xFF96F7FB, 0xF8842301, 0x21003078, 0x71212302, 
    0x22307163, 0x000CF104, 0xFAD4F001, 0xE8BDB004, 0xBF0081F0, 0x0000A610, 0x0000A580, 0x0000AD9C, 
    0x0000ADF3, 0x0000AE28, 0x0000AE10, 0x2000128C, 0x20002D14, 0x4A08B538, 0xF8526803, 0x4A074023, 
    0x460D5CD0, 0xFA0EF7FF, 0x46024629, 0xE8BD4620, 0xF7FF4038, 0xBF00BEAB, 0x0000AE10, 0x0000AE28, 
    0x6803B570, 0x46064D08, 0x0023F855, 0xFEE4F7FF, 0x46040703, 0x6833D505, 0xF8552108, 0xF7FF0023, 
    0xF004FEE6, 0xBD700020, 0x0000AE10, 0x4604B510, 0xF7FF4620, 0x2800FFE5, 0x6822D0FA, 0xF8534B02, 
    0x79D83022, 0xBF00BD10, 0x0000AE10, 0x6803B570, 0x46064D08, 0x0023F855, 0xFEBEF7FF, 0x46040703, 
    0x6833D505, 0xF8552108, 0xF7FF0023, 0xF004FEC0, 0xBD700080, 0x0000AE10, 0x4605B538, 0x4628460C, 
    0xFFE4F7FF, 0xD0FA2800, 0x4B03682A, 0x3022F853, 0x71DCB2E4, 0xBF00BD38, 0x0000AE10, 0x68134A1F, 
    0x2B00B513, 0x2101D138, 0x60114C1D, 0x4620A902, 0x3D04F801, 0xFCC8F7FF, 0xF7FF2002, 0x4B19F9A3, 
    0xF0F3FBB0, 0x33FFF04F, 0xF8C43801, 0xF8C40100, 0xF8D43110, 0x4A143118, 0x0304F043, 0x3118F8C4, 
    0x3108F8D4, 0x0301F043, 0x3108F8C4, 0x3118F8D4, 0x0301F043, 0x3118F8C4, 0x0120F8C4, 0x3138F8D4, 
    0x0304F043, 0x3138F8C4, 0x689B4B08, 0x210CF8C3, 0xF44F4B07, 0x605A2200, 0xBD10B002, 0x20001290, 
    0x40037000, 0x000F4240, 0x00001899, 0xE000ED00, 0xE000E100, 0x4B05B508, 0xB90B681B, 0xFFAEF7FF, 
    0xF8D34B03, 0x43C00114, 0xBF00BD08, 0x20001290, 0x40037000, 0xF8D24A03, 0xF0233138, 0xF8C20302, 
    0x47703138, 0x40037000, 0x22014B02, 0x213CF8C3, 0xBF004770, 0x40037000, 0x4604B510, 0xFFDAF7FF, 
    0x28001A20, 0x4B14DC05, 0x2200F44F, 0x2104F8C3, 0x4B12BD10, 0x2138F8D3, 0x0201F022, 0x2138F8C3, 
    0x2128F8D3, 0x0201F022, 0x2128F8C3, 0x0130F8C3, 0x2138F8D3, 0x0202F042, 0x2138F8C3, 0x2138F8D3, 
    0x0201F042, 0x2138F8C3, 0x2128F8D3, 0x0201F042, 0x2128F8C3, 0xBF00BD10, 0xE000E100, 0x40037000, 
    0x460B1C4A, 0xD0036001, 0x46182101, 0xB868F000, 0x68004770, 0xB89EF000, 0x6803B538, 0x46053301, 
    0xD104460C, 0x490C2231, 0xF7FC480C, 0x682BFE93, 0xB2D94A0B, 0xF852131B, 0xB1143023, 0xD0072C01, 
    0x695ABD38, 0x408C2401, 0x0404EA22, 0xBD38615C, 0x408C695A, 0xE7F94314, 0x0000AE5C, 0x0000AE44, 
    0x0000AE30, 0x6803B538, 0x46043301, 0xD104460D, 0x490A2242, 0xF7FC480A, 0x6822FE6D, 0xB2D14B09, 
    0xF0151312, 0xF8530FFF, 0xF04F2022, 0xFA030301, 0xBF0CF301, 0x60536093, 0xBF00BD38, 0x0000AE5C, 
    0x0000AE44, 0x0000AE30, 0x33016803, 0x4604B510, 0x224BD104, 0x48084907, 0xFE4CF7FC, 0x4A076823, 
    0xB2DB1319, 0x2021F852, 0x40D86910, 0x0001F000, 0xBF00BD10, 0x0000AE5C, 0x0000AE44, 0x0000AE30, 
    0x1C43B5F0, 0x4607B087, 0xD104460C, 0x4915221A, 0xF7FC4815, 0x4E15FE2F, 0xAD01CE0F, 0x6833C50F, 
    0x1338602B, 0xEB03AB06, 0x22010380, 0x1C14F853, 0xF1030C0B, 0xF5034380, 0xB289238E, 0x408A681D, 
    0x601A432A, 0xB2FF4B0A, 0x2020F853, 0x3027F852, 0xF4230224, 0xF40463E0, 0x431C64E0, 0x4027F842, 
    0xBDF0B007, 0x0000AEA5, 0x0000AE49, 0x0000A1BC, 0x0000AEEC, 0x1C43B538, 0x460D4604, 0x2224D104, 
    0x48124911, 0xFDF6F7FC, 0x4B111322, 0xF853B2E4, 0x2D012022, 0x3024F852, 0xD304D00A, 0xD00E2D02, 
    0x3024F842, 0xF023BD38, 0xF0237380, 0xE7F70303, 0x7380F023, 0x0301F023, 0x0302F043, 0xF023E7F0, 
    0xF0437380, 0xE7EB0303, 0x0000AEA5, 0x0000AE49, 0x0000AEEC, 0x232A4802, 0xF7FF7003, 0xBF00BBE5, 
    0x4007E000, 0x4C0AB500, 0x46056826, 0x461CB085, 0xB15268F0, 0x92024B07, 0x000AE88D, 0x462B4622, 
    0xF0004905, 0xF003F9E7, 0x4B04FD4F, 0xE7F2461A, 0x200000CC, 0x0000AF00, 0x0000AF10, 0x0000AF0C, 
    0xFB02B510, 0xF7FCF101, 0x4604FD9D, 0xF850B1D8, 0xF0222C04, 0x3A040203, 0xD8182A24, 0xD9142A13, 
    0x2A1B2300, 0x60436003, 0x2A24D916, 0x60C36083, 0xF100BF11, 0x61030210, 0xF1006143, 0x23000218, 
    0x60536013, 0x46206093, 0x4602BD10, 0x2100E7F7, 0xF890F001, 0xBD104620, 0x0208F100, 0xBF00E7EF, 
    0x68184B01, 0xBF004770, 0x200000CC, 0xB159B570, 0x460C4605, 0x6B83B110, 0xD03C2B00, 0x07D86E63, 
    0xF9B4D505, 0xB92B300C, 0x46302600, 0x89A3BD70, 0xD53C0599, 0x46284621, 0xF84AF000, 0x46066AE3, 
    0x69E1B133, 0x47984628, 0xBFB82800, 0x36FFF04F, 0x061A89A3, 0x6B21D422, 0xF104B141, 0x42990340, 
    0x4628D002, 0xFD42F7FC, 0x63232300, 0xB1216C61, 0xF7FC4628, 0x2300FD3B, 0xF0006463, 0x6E63F95F, 
    0x07DB2200, 0xD50E81A2, 0xF0006DA0, 0xF000FC9B, 0x4630F95B, 0xF000BD70, 0xE7BFF925, 0x46286921, 
    0xFD24F7FC, 0x6DA0E7D7, 0xFC90F000, 0x6DA0E7EC, 0xFC8AF000, 0x300CF9B4, 0xD1BB2B00, 0xF0166E66, 
    0xD1B10601, 0xF0006DA0, 0x4630FC81, 0xBF00BD70, 0x300CF9B1, 0xE92DB29A, 0x460D41F0, 0x46800711, 
    0x686AD43A, 0x6300F443, 0x81AB2A00, 0x6AACDD6F, 0xD0492C00, 0xB29B2200, 0x6000F8D8, 0x2000F8C8, 
    0x5280F413, 0x6D2AD067, 0xD505075F, 0x6B2B6869, 0xB10B1A52, 0x1AD26BEB, 0x69E92300, 0x47A04640, 
    0xD03C1C44, 0x300CF9B5, 0x602A692A, 0x6300F423, 0x81AB2200, 0x606A04DB, 0x6B29D447, 0x6000F8C8, 
    0xF105B311, 0x42990340, 0x4640D002, 0xFCCEF7FC, 0x63282000, 0x81F0E8BD, 0xB1AE692E, 0x602E682C, 
    0xBF0C0791, 0x2300696B, 0x60AB1BA4, 0x4623E00A, 0x6A6F4632, 0x464069E9, 0x280047B8, 0x0400EBA4, 
    0xDD044406, 0xDCF22C00, 0xE8BD2000, 0x89AB81F0, 0x0340F043, 0xF04F81AB, 0xE8BD30FF, 0xF8D881F0, 
    0x2C1D4000, 0x4B19D8F3, 0x43DB40E3, 0x0301F013, 0xF9B5D1ED, 0x606B200C, 0x6300F422, 0x81AB6929, 
    0x602904DA, 0x2C00D5B9, 0x6528D1B7, 0x6BEAE7B5, 0xDC8C2A00, 0x2301E7D8, 0x464069E9, 0x1C4347A0, 
    0xD0024602, 0x6AAC89AB, 0xF8D8E78E, 0x2B003000, 0x2B1DD0F8, 0x2B16D001, 0xF8C8D102, 0xE7C36000, 
    0xF04389AB, 0x81AB0340, 0x81F0E8BD, 0x20400001, 0x460DB538, 0xB1084604, 0xB1BB6B83, 0x000CF9B5, 
    0x6E6BB188, 0xD40107DB, 0xD5170581, 0x46294620, 0xFF4EF7FF, 0x07DA6E6B, 0xD4024604, 0x059B89AB, 
    0x4620D507, 0x4604BD38, 0xBD384620, 0xF84AF000, 0x6DA8E7E4, 0xFBBAF000, 0xBD384620, 0xF0006DA8, 
    0xE7E3FBB3, 0x4B05B120, 0x68184601, 0xBFD0F7FF, 0x49044B03, 0xF0006818, 0xBF00BB43, 0x200000CC, 
    0x0000AF40, 0x00004FD1, 0xF0004901, 0xBF00BB39, 0x00004DCD, 0x2300B510, 0x81814604, 0x600381C2, 
    0x60836043, 0x61036643, 0x61836143, 0x22084619, 0xF000305C, 0x4807FF2F, 0x4A084907, 0x62204B08, 
    0x626161E4, 0x62E362A2, 0x0058F104, 0x4010E8BD, 0xBB76F000, 0x000062E1, 0x00006305, 0x00006341, 
    0x00006361, 0x4604B510, 0xF0004812, 0x6BA2FB6D, 0xF504B9D2, 0x4810733B, 0x32E8F8C4, 0xF8C42103, 
    0x63E022E0, 0x12E4F8C4, 0x21046860, 0xFFC2F7FF, 0x21092201, 0xF7FF68A0, 0x2202FFBD, 0x68E02112, 
    0xFFB8F7FF, 0x63A32301, 0xE8BD4802, 0xF0004010, 0xBF00BB4D, 0x20002DDC, 0x00005049, 0xF0004801, 
    0xBF00BB43, 0x20002DE0, 0xF0004801, 0xBF00BB3F, 0x20002DE0, 0xB510B40E, 0xAB05B083, 0xF8534C06, 
    0x93012B04, 0x68204601, 0xFBAAF002, 0xE8BDB003, 0xB0034010, 0xBF004770, 0x200000CC, 0x4F24B5F8, 
    0x4606460C, 0xFDA1F7FC, 0x685D68BB, 0x617EF5C4, 0xF025310F, 0x44290503, 0x617FF421, 0x010FF021, 
    0x5480F5A1, 0x5F80F5B4, 0x2100DB07, 0xF0014630, 0x68BBF8A5, 0x4298442B, 0x4630D004, 0xFD89F7FC, 
    0xBDF82000, 0x46304261, 0xF898F001, 0xD00D3001, 0x68BA4B10, 0x1B2D6819, 0x0501F045, 0x1B094630, 
    0x60196055, 0xFD75F7FC, 0xBDF82001, 0x46302100, 0xF884F001, 0x1A8368BA, 0xDDDE2B0F, 0x49054C06, 
    0xF0436824, 0x1B000301, 0x60086053, 0xBF00E7D5, 0x20000664, 0x20001294, 0x20000A6C, 0xD0442900, 
    0x41F0E92D, 0x4680460D, 0xFD4FF7FC, 0x7C04F855, 0xF0274969, 0xF1A50301, 0x18E20408, 0x6850688E, 
    0xF02042B2, 0xD05E0003, 0x605007FE, 0xF855D40B, 0x1BE47C08, 0x0E08F101, 0x457568A5, 0xD06D443B, 
    0x60EF68E7, 0x181560BD, 0x07ED686D, 0xF043D53E, 0x60620201, 0xF5B350E3, 0xD2177F00, 0x1C5808DB, 
    0x684D109A, 0x7030F851, 0x230160A7, 0xEB014093, 0x432B02C0, 0x60E23A08, 0xF841604B, 0x60FC4030, 
    0xE8BD4640, 0xF7FC41F0, 0x4770BD14, 0x2A040A5A, 0x099AD852, 0x0739F102, 0xF10200FF, 0x19C80538, 
    0x380859CA, 0xD04F4290, 0xF0216851, 0x428B0103, 0x6892D232, 0xD1F74290, 0x60A068C3, 0x609C60E3, 
    0x464060C4, 0x41F0E8BD, 0xBCF3F7FC, 0x4F3B6895, 0x440342BD, 0x68D0D040, 0xF04360E8, 0x60850201, 
    0x50E36062, 0x07FFE7B7, 0xD4074403, 0x2C08F855, 0x44131AA4, 0x68E268A0, 0x609060C2, 0x68124A30, 
    0x0001F043, 0x60604293, 0xD3B9608C, 0x46404B2D, 0xF7FF6819, 0xE7B3FF23, 0xE7CD4610, 0x68491811, 
    0xD44407C9, 0x68D26891, 0x440360CA, 0x0001F043, 0x60606091, 0xE7A350E3, 0xD8162A14, 0x075CF102, 
    0xF10200FF, 0xE7AA055B, 0x230110AA, 0x4093684D, 0x604B432B, 0xE7B04603, 0x0201F043, 0x610C614C, 
    0x60A560E5, 0x50E36062, 0x2A54E78A, 0x0B1AD806, 0x076FF102, 0xF10200FF, 0xE790056E, 0x7FAAF5B2, 
    0x0BDAD806, 0x0778F102, 0xF10200FF, 0xE7860577, 0x5054F240, 0xD8064282, 0xF1020C9A, 0x00FF077D, 
    0x057CF102, 0xF44FE77B, 0x257E777E, 0xF043E777, 0x60610101, 0xE7636013, 0x20000664, 0x2000066C, 
    0x20000A70, 0x200012C4, 0x460BB538, 0x46054C07, 0x46184611, 0x60232300, 0xFC1CF7FC, 0xD0001C43, 
    0x6823BD38, 0xD0FB2B00, 0xBD38602B, 0x20002DF4, 0x2B006893, 0xE92DD073, 0x898B4FF0, 0x460CB083, 
    0x90000719, 0xD5264616, 0xB3226922, 0x0002F013, 0xD02C6835, 0x0900F04F, 0x46C84FB0, 0x45B846B2, 
    0x464A4643, 0x463BBF28, 0xF1B89800, 0xD0500F00, 0x6A6669E1, 0x280047B0, 0xF8DADD58, 0x1A1B3008, 
    0xEBA84481, 0xF8CA0800, 0x2B003008, 0x2000D1E7, 0xE8BDB003, 0x46218FF0, 0xF0039800, 0x2800F971, 
    0x8133F040, 0x683589A3, 0x0002F013, 0xF013D1D2, 0xD1450901, 0x9601464F, 0x059AB337, 0x8008F8D4, 
    0x8083F140, 0x46C34547, 0x80ABF0C0, 0x6F90F413, 0x80ACF040, 0x46BA6820, 0x4649465A, 0xFCC6F000, 
    0x682368A2, 0x0208EBA2, 0x60A2445B, 0x9A016023, 0xEBA36893, 0x44D1030A, 0x070AEBA7, 0x2B006093, 
    0x89A3D0C5, 0xD1D82F00, 0x9000F8D5, 0x3508686F, 0xF8D5E7D2, 0xF8D59000, 0x35088004, 0x2000E79F, 
    0x46214770, 0xF7FF9800, 0xB370FD83, 0x300CF9B4, 0x0340F043, 0x30FFF04F, 0xB00381A3, 0x8FF0E8BD, 
    0x46334681, 0x46A8464E, 0x464D469A, 0xB380B34E, 0x69236820, 0x45B16962, 0xBF2846CB, 0x429846B3, 
    0xD904465F, 0x441368A3, 0xF300459B, 0x459380A6, 0x4613DB4B, 0x69E16A67, 0x462A9800, 0x1E0747B8, 
    0xEBB9DDD4, 0xD0CC0907, 0xF8DA2001, 0x1BDB3008, 0x1BF6443D, 0x3008F8CA, 0xF43F2B00, 0x2E00AF78, 
    0xF108D1D5, 0xE9130308, 0x46980060, 0x2E003308, 0x4632D0F9, 0x4628210A, 0xF922F7FB, 0xF0002800, 
    0x300180A1, 0x0905EBA0, 0x6820E7C2, 0x42986923, 0x6963D802, 0xD25D429F, 0xBF2845B8, 0x464246B8, 
    0xF0004649, 0x68A3FC43, 0xEBA36822, 0x44420308, 0x602260A3, 0x46C2B10B, 0x4621E779, 0xF7FF9800, 
    0x2800FD17, 0x46C2D192, 0x465AE771, 0xF0004629, 0x68A2FC2D, 0xEBA26823, 0x445B020B, 0x602360A2, 
    0x6820E7AF, 0x46BA46B8, 0xE75546BB, 0x68206962, 0xEB026921, 0xEBA00842, 0xEB080A01, 0xF10A78D8, 
    0xEA4F0001, 0x44380868, 0x46424540, 0x4680BF84, 0x055B4642, 0x4611D544, 0xF7FC9800, 0x4683F953, 
    0xD0552800, 0x69214652, 0xF91AF7FB, 0xF42389A3, 0xF0436390, 0x81A30380, 0x000AEB0B, 0x030AEBA8, 
    0xB010F8C4, 0x8014F8C4, 0x60A36020, 0x46BA46B8, 0xE72146BB, 0x4100F06F, 0xBF2842B9, 0x464A4639, 
    0xF1F3FB91, 0x6A669800, 0xF301FB03, 0x47B069E1, 0x0A00F1B0, 0xAF1BF73F, 0x461AE738, 0x93014629, 
    0xFBD4F000, 0x9B016822, 0x441A9800, 0x46216022, 0xFCAEF7FF, 0x28009B01, 0xAF28F47F, 0xE750461F, 
    0xF7FC9800, 0x4683F911, 0xD1C52800, 0x69219D00, 0xF7FC4628, 0xF9B4F90B, 0x220C300C, 0x0380F023, 
    0xE715602A, 0x0901F106, 0xF04FE722, 0xE6BF30FF, 0x230C9A00, 0xF9B46013, 0xE709300C, 0x7FFFFC00, 
    0x43F8E92D, 0x7738F510, 0x4688D01F, 0xF04F4606, 0x687D0900, 0x3D0168BC, 0x89A3D411, 0xF1052B01, 
    0xD90835FF, 0x300EF9B4, 0x46213301, 0xD0024630, 0xEA4947C0, 0x1C6B0900, 0x0468F104, 0x683FD1ED, 
    0xD1E62F00, 0xE8BD4648, 0x46B983F8, 0xE8BD4648, 0xBF0083F8, 0x4E0FB570, 0x1B764D0F, 0xBF1810B6, 
    0xD0052400, 0xF8553401, 0x47983B04, 0xD1F942A6, 0x4D0B4E0A, 0xF0051B76, 0x10B6FD59, 0x2400BF18, 
    0x3401D006, 0x3B04F855, 0x42A64798, 0xBD70D1F9, 0xBF00BD70, 0x0000B20C, 0x0000B20C, 0x0000B214, 
    0x0000B20C, 0x4A054B04, 0x6B5B681B, 0xBF082B00, 0xF8934613, 0x47700128, 0x200000CC, 0x200004F8, 
    0xBF004770, 0xBF004770, 0xBF004770, 0xBF004770, 0x460CB570, 0x100EF9B1, 0xB0902900, 0x461E4615, 
    0xAA01DB14, 0xFE00F7FF, 0xDB0F2800, 0xF4029A02, 0xF5A24270, 0xFAB25200, 0x0952F282, 0x6380F44F, 
    0x6000F44F, 0x602B6032, 0xBD70B010, 0x230089A2, 0x0080F012, 0xD0046033, 0x46182240, 0xB010602A, 
    0xF44FBD70, 0x602B6380, 0xBD70B010, 0x0792898A, 0xD506460B, 0x0243F101, 0x601A2101, 0x6159611A, 
    0xB5F04770, 0xAB01B083, 0x460C466A, 0xF7FF4606, 0x9900FFBF, 0x46304605, 0xF844F7FC, 0x300CF9B4, 
    0x9A01B1D8, 0x99004F15, 0xF04363F7, 0x81A30380, 0x61206020, 0xB91A6161, 0x81A3432B, 0xBDF0B003, 
    0xF9B44630, 0xF004100E, 0xB1A0F81D, 0xF02389A3, 0xF0430303, 0xB21B0301, 0x059AE7EE, 0xF023D4EE, 
    0xF1040303, 0xF0430243, 0x21010302, 0x602281A3, 0x61616122, 0xF9B4E7E2, 0xE7DD300C, 0x00005049, 
    0x4FF0E92D, 0x060BF101, 0xB0832E16, 0xF2404605, 0xF036809E, 0xF1000607, 0x42B180BD, 0x80BAF200, 
    0xF9F3F7FC, 0x7FFCF5B6, 0x8293F0C0, 0xF0000A73, 0x2B0480B8, 0x8179F200, 0xF10309B3, 0xF1030039, 
    0x00C30E38, 0x443B4FBF, 0x0108F1A3, 0x42A1685C, 0xE00CD106, 0xF2802A00, 0x68E480AA, 0xD00642A1, 
    0xF0236863, 0x1B9A0303, 0xDDF32A0F, 0x693C4670, 0xE2E4F8DF, 0xF0004574, 0x686381AB, 0x0303F023, 
    0x2A0F1B9A, 0x8190F300, 0xF8C72A00, 0xF8C7E014, 0xF280E010, 0xF5B3809D, 0xF0807F00, 0x08DB8161, 
    0x0C01F103, 0x687A1099, 0x803CF857, 0x8008F8C4, 0x408B2301, 0x01CCEB07, 0x39084313, 0x607B60E1, 
    0x403CF847, 0x400CF8C8, 0x24011082, 0x429C4094, 0x808BF200, 0xD106421C, 0x0003F020, 0x421C0064, 
    0x0004F100, 0xEB07D0FA, 0x46CC09C0, 0xF8DC4680, 0x459C300C, 0xE16DD107, 0xF2802A00, 0x68DB817B, 
    0xF000459C, 0x68598167, 0x0103F021, 0x2A0F1B8A, 0xF8D3DDF2, 0xF8D3C00C, 0x93008008, 0x4628199C, 
    0x0601F046, 0x0501F042, 0xF8C8605E, 0xF8CCC00C, 0x617C8008, 0xF8C4613C, 0xF8C4E00C, 0x6065E008, 
    0xF7FC505A, 0x9B00F966, 0x0408F103, 0x2910E01E, 0xF7FCD820, 0x2610F95A, 0x20022318, 0x443B4F79, 
    0x0208F1A3, 0x4294685C, 0x813DF000, 0x68E16863, 0xF02368A6, 0x44230303, 0x685A4628, 0xF04260F1, 
    0x608E0201, 0xF7FC605A, 0x3408F944, 0xB0034620, 0x8FF0E8BD, 0x230C2400, 0x602B4620, 0xE8BDB003, 
    0x20408FF0, 0x7300F44F, 0x0E3FF04F, 0x4423E74A, 0x685A68E1, 0xF04268A6, 0x60F10201, 0x608E4628, 
    0xF7FC605A, 0x3408F926, 0xB0034620, 0x8FF0E8BD, 0x46284423, 0xF042685A, 0x605A0201, 0xF919F7FC, 
    0x46203408, 0xE8BDB003, 0x68BC8FF0, 0xF0236863, 0x45B00803, 0xEBA8D304, 0x2B0F0306, 0x8085F300, 
    0x9158F8DF, 0xF8D94B50, 0x681B2000, 0x44333201, 0x0A08EB04, 0x8155F000, 0x5380F503, 0xF423330F, 
    0xF02B6B7F, 0x46590B0F, 0xF0004628, 0x1C41FC07, 0xF0004602, 0x458280FC, 0x80F7F200, 0x68194B43, 
    0x60194459, 0x814DF000, 0x0000F8D9, 0xBF1B3001, 0x0A0AEBA2, 0xF8C94451, 0x60192000, 0x0107F012, 
    0x8115F000, 0x0008F1C1, 0x5180F5C1, 0x31084402, 0x090BEB02, 0x090BF3C9, 0x0909EBA1, 0x46284649, 
    0x92009301, 0xFBDAF000, 0xE89D1C43, 0xF000000C, 0x1A808143, 0xF0404448, 0x68190001, 0x444960BA, 
    0x605042BC, 0xD0176019, 0x0F0FF1B8, 0x80FBF240, 0xF1A86860, 0xF022020C, 0xEB040207, 0xF0000E02, 
    0xF04F0001, 0x43100C05, 0x60602A0F, 0xC004F8CE, 0xC008F8CE, 0x8117F200, 0x68BC4B1D, 0x4291681A, 
    0x6019BF88, 0x681A4B1B, 0x68624291, 0x6019BF88, 0x0203F022, 0xEBA24296, 0xD8010306, 0xDC042B0F, 
    0xF7FC4628, 0x2400F886, 0x19A2E740, 0x0301F043, 0x0601F046, 0x46286066, 0x605360BA, 0xF879F7FC, 
    0x46203408, 0xE8BDB003, 0x2B148FF0, 0x2B54D971, 0x80A3F200, 0xF1030B33, 0xF103006F, 0x00C30E6E, 
    0xBF00E680, 0x20000664, 0x200012C4, 0x20001294, 0x200012BC, 0x200012C0, 0x2000066C, 0x20000A6C, 
    0x2A040A5A, 0x2A14D95B, 0x80AEF200, 0x015CF102, 0x325B00C9, 0x0C01EB07, 0xF1AC5879, 0x458C0C08, 
    0x8088F000, 0xF022684A, 0x42930203, 0x6889D273, 0xD1F7458C, 0x200CF8DC, 0x60E2687B, 0xC008F8C4, 
    0xF8CC6094, 0xE68F400C, 0xF04619A1, 0xF0420C01, 0xF8C40601, 0x4628C004, 0x61396179, 0xE00CF8C1, 
    0xE008F8C1, 0x50E2604E, 0xF823F7FC, 0xE6DD3408, 0xE679687B, 0x0801F108, 0x0F03F018, 0x0C08F10C, 
    0xAE85F47F, 0x68DCE02D, 0xBF0842A3, 0xF43F3002, 0xE6BBAE3E, 0x461C4419, 0x68DB684A, 0x6F08F854, 
    0x0201F042, 0x4628604A, 0x609E60F3, 0xF801F7FC, 0xF103E6BC, 0xF103005C, 0x00C30E5B, 0x099AE612, 
    0x0139F102, 0x323800C9, 0x42BCE7A4, 0x68BCD054, 0xF0226862, 0xE75D0203, 0x3908F859, 0xF0404599, 
    0xF0108086, 0xF1000F03, 0xD1F530FF, 0xEA23687B, 0x607B0304, 0x429C0064, 0xAEC7F63F, 0xF43F2C00, 
    0x421CAEC4, 0xF47F4640, 0x0064AE3E, 0xF100421C, 0xD0FA0004, 0x468CE637, 0xF5B3E78C, 0xD8157FAA, 
    0xF1030BF3, 0xF1030078, 0x00C30E77, 0xF44FE5DA, 0xE6ED5180, 0x1092687B, 0xFA012101, 0x4313F202, 
    0x4662607B, 0x2301E779, 0xE7296053, 0x5254F240, 0xD8224293, 0xF1030CB3, 0xF103007D, 0x00C30E7C, 
    0xF103E5C0, 0xE6AE0B10, 0xD8292A54, 0xF1020B1A, 0x00C9016F, 0xE74D326E, 0x68194B20, 0x60194459, 
    0xF3CAE6B2, 0x2800000B, 0xAEAEF47F, 0x030BEB08, 0xF04368BA, 0x60530301, 0x207FE6EE, 0x737EF44F, 
    0x0E7EF04F, 0xF104E59E, 0x46280108, 0xF7FB9300, 0x9B00FD8D, 0xE6DF6819, 0xF04F2001, 0xE6BC0900, 
    0x7FAAF5B2, 0x0BDAD805, 0x0178F102, 0x327700C9, 0xF240E720, 0x428A5154, 0x0C9AD805, 0x017DF102, 
    0x327C00C9, 0xF44FE716, 0x227E717E, 0x687BE712, 0x08F0E780, 0x0308F106, 0xBF00E600, 0x20001294, 
    0xB149B082, 0xB16BB15A, 0x600B7813, 0x1C107812, 0x2001BF18, 0x4770B002, 0x2A00A901, 0x4610D1F3, 
    0x4770B002, 0x0001F06F, 0xBF00E7F4, 0xB5F04288, 0x188BD90D, 0xD20A4298, 0x2A001884, 0x4622D051, 
    0x4D01F813, 0x4D01F802, 0xD1F94299, 0x2A0FBDF0, 0xEA41D948, 0x079B0300, 0xF100D146, 0xF1010410, 
    0x46150310, 0x6C10F853, 0x6C10F844, 0x6C0CF853, 0x6C0CF844, 0x6C08F853, 0x6C08F844, 0xF8533D10, 
    0xF8446C04, 0x2D0F6C04, 0x0310F103, 0x0410F104, 0xF1A2D8E8, 0xF0230310, 0xF002030F, 0x33100E0F, 
    0x0F03F1BE, 0x44034419, 0x1F1ED921, 0x4674460D, 0xF8553C04, 0xF8467B04, 0x2C037F04, 0xF1AED8F8, 
    0xF0240404, 0x34040403, 0x44234421, 0x0203F002, 0x3B01B162, 0xF811440A, 0xF8034B01, 0x428A4F01, 
    0xBDF0D1F9, 0xE7F34603, 0xE7F24603, 0x4672BDF0, 0xBF00E7EE, 0x0786B470, 0x1E54D046, 0xD0412A00, 
    0x4603B2CA, 0xF114E002, 0xD33B34FF, 0x2B01F803, 0xD1F8079D, 0xD92E2C03, 0xEA45B2CD, 0x2C0F2505, 
    0x4505EA45, 0xF103D919, 0x46260210, 0x2E0F3E10, 0x5C10F842, 0x5C0CF842, 0x5C08F842, 0x5C04F842, 
    0x0210F102, 0xF1A4D8F2, 0xF0220210, 0xF004020F, 0x3210040F, 0x44132C03, 0x461ED90D, 0x3A044622, 
    0xF8462A03, 0xD8FA5B04, 0xF0221F22, 0x32040203, 0xF0044413, 0xB12C0403, 0x441CB2C9, 0x1B01F803, 
    0xD1FB429C, 0x4770BC70, 0x46034614, 0xBF00E7C2, 0xF0002900, 0xE92D8095, 0x460D4FF0, 0xB0834616, 
    0xF1064680, 0xF7FB070B, 0xF855FE80, 0x2F16EC04, 0x0403F02E, 0x0908F1A5, 0x2210D83C, 0x42BE4617, 
    0x4294D83D, 0x4BC4DA43, 0xEB096899, 0x42880004, 0x80B4F000, 0xF0236843, 0x44010101, 0x07C96849, 
    0xF01ED54C, 0xF0000F01, 0x4631809B, 0xF7FB4640, 0x4606FC69, 0xD03A2800, 0x3C04F855, 0x0301F023, 
    0xF1A0444B, 0x429A0208, 0x8121F000, 0x2A241F22, 0x8107F200, 0xF2002A13, 0x460380DB, 0x6811462A, 
    0x68516019, 0x68926059, 0x4629609A, 0xF7FB4640, 0xE01CFC4D, 0x0707F027, 0x463A2F00, 0x2600DABF, 
    0x4630230C, 0x3000F8C8, 0xE8BDB003, 0x462E8FF0, 0x2B0F1BE3, 0xF8D9D81E, 0xF0033004, 0x43230301, 
    0xF8C9444C, 0x68633004, 0x0301F043, 0x46406063, 0xFE1FF7FB, 0xB0034630, 0x8FF0E8BD, 0x0303F023, 
    0x429118E1, 0x68C3DB1F, 0x462E6882, 0x460C60D3, 0xE7DD609A, 0x2004F8D9, 0x0107EB09, 0x0201F002, 
    0xF043444C, 0x43170301, 0x7004F8C9, 0x6863604B, 0x0301F043, 0x60633108, 0xF7FB4640, 0xE7D6FC07, 
    0xF7FB4611, 0xF01EBBFF, 0xD18E0F01, 0x1C08F855, 0x0A01EBA9, 0x1004F8DA, 0x0103F021, 0x4423440B, 
    0xDB254293, 0x688168C2, 0x60CA4656, 0xF8DA6091, 0xF856100C, 0x1F220F08, 0x60C12A24, 0xF2006088, 
    0x2A138094, 0x6829D96F, 0x1008F8CA, 0xF8CA6869, 0x2A1B100C, 0x80A2F200, 0xF10A3508, 0xE0630210, 
    0x3C08F855, 0x0A03EBA9, 0x1004F8DA, 0x0103F021, 0x42931863, 0xAF59F6FF, 0xE7D84656, 0xF0216841, 
    0x44A30B03, 0x0010F107, 0xDA564583, 0x0F01F01E, 0xAF4BF47F, 0x1C08F855, 0x0A01EBA9, 0x1004F8DA, 
    0x0103F021, 0x4558448B, 0x4656DCE2, 0x100CF8DA, 0x0F08F856, 0x2A241F22, 0x608860C1, 0x808FF200, 
    0xF2402A13, 0x6829808A, 0x1008F8CA, 0xF8CA6869, 0x2A1B100C, 0x808AF200, 0xF10A3508, 0x68290210, 
    0x68696011, 0x68A96051, 0xEB0A6091, 0xEBAB0107, 0xF0420207, 0x60990201, 0xF8DA604A, 0xF0033004, 
    0x431F0301, 0xF8CA4640, 0xF7FB7004, 0xE751FD72, 0x6003682B, 0x6043686B, 0xD82D2A1B, 0x0308F100, 
    0x0208F105, 0x4632E71B, 0x60116829, 0x60516869, 0x609168A9, 0x46D1461C, 0xEB09E72A, 0xEBAB0107, 
    0xF04B0B07, 0x60990201, 0xF855604A, 0xF0033C04, 0x431F0301, 0xF8454640, 0xF7FB7C04, 0x462EFD4A, 
    0x4629E728, 0xFE02F7FF, 0x4629E6FF, 0x461C4630, 0xF7FF46D1, 0xE70BFDFB, 0x608368AB, 0x60C368EB, 
    0xD0172A24, 0x0310F100, 0x0210F105, 0xF850E6E7, 0xF0233C04, 0x441C0303, 0xE6F9462E, 0xF8CA68A9, 
    0x68E91010, 0x1014F8CA, 0xD00C2A24, 0xF10A3510, 0xE7B90218, 0x6103692B, 0x6143696B, 0x0218F105, 
    0x0318F100, 0x692AE6CB, 0x2018F8CA, 0xF8CA696A, 0x3518201C, 0x0220F10A, 0x4632E7A6, 0x4629E77F, 
    0x93014630, 0xFDC2F7FF, 0xE77E9B01, 0xF8CA68A9, 0x68E91010, 0x1014F8CA, 0xD0032A24, 0xF10A3510, 
    0xE76C0218, 0xF8CA692A, 0x696A2018, 0x201CF8CA, 0xF10A3518, 0xE7620220, 0x20000664, 0x4C07B538, 
    0x46052300, 0x60234608, 0xFCA4F7FB, 0xD0001C43, 0x6823BD38, 0xD0FB2B00, 0xBD38602B, 0x20002DF4, 
    0x460CB510, 0x100EF9B1, 0xFDFCF003, 0xDB032800, 0x44036D23, 0xBD106523, 0xF42389A3, 0x81A35380, 
    0xBF00BD10, 0x41F0E92D, 0xF9B14616, 0x461F200C, 0x460C05D3, 0xD5074605, 0x23022200, 0x100EF9B1, 
    0xFAD0F003, 0x200CF9B4, 0x100EF9B4, 0x5280F422, 0x463B81A2, 0x46284632, 0x41F0E8BD, 0xB9DAF002, 
    0x460CB510, 0x100EF9B1, 0xFABCF003, 0x1C4289A3, 0xF423BF0E, 0xF4435380, 0x65205380, 0xBD1081A3, 
    0x100EF9B1, 0xBA48F002, 0x4FF0E92D, 0x460CB0C5, 0x4692910B, 0x900C930F, 0xFA96F003, 0x93186803, 
    0xF7FA4618, 0x89A3FAFD, 0x06199017, 0x6923D503, 0xF0012B00, 0xED9F801B, 0xED8D7B94, 0x23007B14, 
    0x09D0F10D, 0x93299313, 0x93169328, 0x93099319, 0x909CF8CD, 0xF89A46C8, 0x46543000, 0x2B25B1E3, 
    0xE019D102, 0xD0032B25, 0x3F01F814, 0xD1F92B00, 0x050AEBA4, 0x9B28B185, 0xF8C89A29, 0x3301A000, 
    0x2B07442A, 0x5004F8C8, 0x93289229, 0xF108DC7F, 0x9B090808, 0x9309442B, 0x2B007823, 0x2300D07F, 
    0xF88D461A, 0x4619307F, 0x469B930D, 0x30FFF04F, 0x900A7863, 0x0A01F104, 0x0A01F10A, 0x0020F1A3, 
    0xF2002858, 0xE8DF83D3, 0x023FF010, 0x03D103D1, 0x03D10247, 0x03D103D1, 0x03D103D1, 0x024C03D1, 
    0x03D1020A, 0x0273005D, 0x028E03D1, 0x03C103C1, 0x03C103C1, 0x03C103C1, 0x03C103C1, 0x03D103C1, 
    0x03D103D1, 0x03D103D1, 0x03D103D1, 0x03D103D1, 0x033F03D1, 0x03D1035F, 0x03D1035F, 0x03D103D1, 
    0x03AA03D1, 0x03D103D1, 0x03D103AF, 0x03D103D1, 0x03D103D1, 0x03D10261, 0x032603D1, 0x03D103D1, 
    0x03D103D1, 0x03D103D1, 0x03D103D1, 0x03D103D1, 0x02E302CE, 0x035F035F, 0x0293035F, 0x03D102E3, 
    0x029803D1, 0x02A503D1, 0x02BC01D3, 0x03D1020F, 0x03D101E8, 0x03D1007E, 0x021403D1, 0x930F980D, 
    0x900D4240, 0x0B04F04B, 0x3000F89A, 0xAA27E794, 0x980C990B, 0xFD5AF003, 0x46C8B940, 0x9B29E779, 
    0x980CB123, 0xAA27990B, 0xFD50F003, 0x899B9B0B, 0x0F40F013, 0xBF189B09, 0x33FFF04F, 0x98099309, 
    0xE8BDB045, 0xF01B8FF0, 0x93110F20, 0x81E5F040, 0xF01B9A0F, 0x46130F10, 0x8588F040, 0x0F40F01B, 
    0x8584F000, 0x32048814, 0x23012500, 0x2700920F, 0x707FF88D, 0x1C4A990A, 0x826DF000, 0x0280F02B, 
    0xEA549207, 0xF0400205, 0x2900826C, 0x8451F040, 0xF0402B00, 0xF01B850B, 0x930E0301, 0x861AF000, 
    0x2330AE44, 0x3D41F806, 0x9A0E9B0A, 0xBFB84293, 0x93084613, 0x93122300, 0x9B08B117, 0x93083301, 
    0xF0139B07, 0x93100302, 0x9B08D002, 0x93083302, 0xF0139B07, 0xF0400584, 0x9B0D8320, 0xEBA39A08, 
    0xF1BB0B02, 0xF3400F00, 0xF1BB8318, 0x9C290F10, 0xDD309A28, 0x46214643, 0x271046A8, 0x9D0B9C0C, 
    0xBF00E00D, 0x8000F3AF, 0x00000000, 0x00000000, 0x0B10F1AB, 0x0F10F1BB, 0x0308F103, 0x3201DD18, 
    0x922848B7, 0x2A073110, 0xE8839129, 0xDDEF0081, 0x4629AA27, 0xF0034620, 0x2800FCC9, 0xAF76F47F, 
    0x0B10F1AB, 0x0F10F1BB, 0x9A289929, 0xDCE6464B, 0x460C4645, 0x32014698, 0x92284BA9, 0x2A07445C, 
    0xE8889429, 0xF3000808, 0xF89D84A6, 0xF108707F, 0xB1770808, 0x33019B28, 0xF10D3401, 0x2201017F, 
    0x94292B07, 0xE8889328, 0xF3000006, 0xF10883F4, 0x9B100808, 0x9B28B16B, 0x34023301, 0x2202A920, 
    0x94292B07, 0xE8889328, 0xF3000006, 0xF10883D9, 0x2D800808, 0x8322F000, 0x9A0E9B0A, 0x2F001A9F, 
    0x2F10DD36, 0x4D8F9B28, 0x4642DD27, 0x46B04621, 0x0B10F04F, 0x9C0C462E, 0xE0049D0B, 0x2F103F10, 
    0x0208F102, 0x3301DD15, 0x2B073110, 0x93289129, 0x0840E882, 0xAA27DDF2, 0x46204629, 0xFC66F003, 
    0xF47F2800, 0x3F10AF13, 0x99292F10, 0x464A9B28, 0x4635DCE9, 0x4646460C, 0x33014690, 0x2B07443C, 
    0x93289429, 0x00A0E888, 0x838FF300, 0x0808F108, 0x05DF9B07, 0x8273F100, 0x990E9B28, 0x6000F8C8, 
    0x440C3301, 0x94292B07, 0x1004F8C8, 0xF3009328, 0xF108835B, 0x9B070808, 0xD53A075B, 0x9A089B0D, 
    0x2D001A9D, 0x2D10DD35, 0xDD209B28, 0x9F0C2610, 0xB02CF8DD, 0x3D10E004, 0xF1082D10, 0xDD160808, 
    0x4A5F3301, 0x34109328, 0x94292B07, 0x0044E888, 0xAA27DDF1, 0x46384659, 0xFC18F003, 0xF47F2800, 
    0x3D10AEC5, 0x9C292D10, 0x46C89B28, 0x3301DCE8, 0x93284A53, 0x2B07442C, 0xE8889429, 0xDD080024, 
    0x990BAA27, 0xF003980C, 0x2800FC01, 0xAEAEF47F, 0x9B099C29, 0x99089A0D, 0xBFAC428A, 0x185B189B, 
    0x2C009309, 0x831BF040, 0x93282300, 0xE5F246C8, 0xF01B9311, 0xF0400320, 0xF01B81DE, 0xF0400210, 
    0xF01B842D, 0xF0000340, 0x990F8429, 0x460A4613, 0x880C3204, 0x2500920F, 0x9A0FE6A9, 0x68169311, 
    0xF88D2400, 0x1D15407F, 0xF0002E00, 0x9A0A86B8, 0xF0001C53, 0x4621861A, 0xF7F94630, 0x2800FFC1, 
    0x870BF000, 0x930E1B83, 0x950F940A, 0xB01CF8CD, 0x73E3EA23, 0x94129308, 0x707FF89D, 0xF89AE6AC, 
    0x22013000, 0xE5E7212B, 0x0B20F04B, 0x3000F89A, 0x9311E5E2, 0xF0402A00, 0x4B2387AC, 0xF01B9316, 
    0xF0400F20, 0x9A0F8112, 0x0F10F01B, 0xF0404613, 0xF01B83E0, 0xF0000F40, 0x330483DC, 0x930F8814, 
    0xF01B2500, 0xF0000F01, 0xEA54810D, 0xF0000305, 0x23308109, 0x2044F89D, 0x3080F88D, 0x2081F88D, 
    0x0B02F04B, 0xE6522302, 0x3000F89A, 0xF47F2900, 0x2201ADB3, 0xE5AF2120, 0x0B01F04B, 0x3000F89A, 
    0x9C0FE5AA, 0x930D6823, 0x28004618, 0xF1034623, 0xF6FF0304, 0x930FAE03, 0x3000F89A, 0xBF00E59C, 
    0x0000AF98, 0x0000AFA8, 0x0000AF78, 0x0B10F04B, 0x0F20F01B, 0xF43F9311, 0x9D0FAE1B, 0xF0253507, 
    0xF1030307, 0xE9D30208, 0x920F4500, 0xE61E2301, 0x3000F89A, 0xF10A2B2A, 0xF0000401, 0xF1A3873D, 
    0x28090030, 0xF20046A2, 0x23008694, 0xF81A461C, 0xEB043B01, 0xEB000484, 0xF1A30444, 0x28090030, 
    0x940AD9F5, 0xF04BE56A, 0xF89A0B80, 0xE5633000, 0x0B40F04B, 0x3000F89A, 0xF89AE55E, 0x2B6C3000, 
    0xF89ABF03, 0xF04B3001, 0xF10A0B20, 0xF04B0A01, 0xE5510B10, 0xF0402A00, 0xF01B8720, 0xF0400F20, 
    0xF01B850A, 0xF0400F10, 0xF01B84BD, 0xF0000F40, 0x9A0F84B9, 0x32046813, 0xF8BD920F, 0x801A2024, 
    0x990FE509, 0x680C4BB9, 0x22309316, 0x31042378, 0x3081F88D, 0xF04B9311, 0x910F0B02, 0xF88D2500, 
    0x23022080, 0x990FE5C3, 0x680A9311, 0x20A8F88D, 0x460A2300, 0xF88D461F, 0x3204307F, 0x93082301, 
    0xB01CF8CD, 0x9712970A, 0x930E920F, 0xE5D7AE2A, 0x2A009311, 0x8700F040, 0x0F20F01B, 0xF01BD15D, 
    0xF0400F10, 0xF01B8335, 0xF0000F40, 0x990F8331, 0x4000F9B1, 0x17E53104, 0x462B4622, 0x2A00910F, 
    0x0300F173, 0x990ADB58, 0x707FF89D, 0xF04F1C4A, 0xF47F0301, 0xEA54AD93, 0xF0000205, 0xF8CD81EC, 
    0x2B01B01C, 0x8283F000, 0xF0402B02, 0x98168213, 0x0923464E, 0x010FF004, 0x7305EA43, 0x461C092A, 
    0x5C434615, 0x3D01F806, 0x0305EA54, 0xEBA9D1F1, 0x930E0306, 0x9311E588, 0xF0402A00, 0x4B8486B9, 
    0xF01B9316, 0xF43F0F20, 0x9D0FAEEE, 0xF0253507, 0xF1030307, 0xF01B0208, 0x920F0F01, 0x4500E9D3, 
    0xAEF3F47F, 0xE5522302, 0x2A009311, 0x869CF040, 0x0B10F04B, 0x0F20F01B, 0x9D0FD0A1, 0xF0253507, 
    0xE9D50507, 0x2A002300, 0x0108F105, 0xF173461D, 0x910F0300, 0xDAA64614, 0x4264272D, 0x0545EB65, 
    0x707FF88D, 0xE5352301, 0x2A009311, 0x8678F040, 0xF01B9D0F, 0xF1050F08, 0xF0000507, 0xF02583E9, 
    0xED930307, 0xED8D7B00, 0xF1037B14, 0x920F0208, 0x1214E9DD, 0x4300F022, 0x931B911A, 0x451AE9DD, 
    0x32FFF04F, 0x46294620, 0xF7FA4B5A, 0x2800FBE9, 0x834FF040, 0x32FFF04F, 0x46204B56, 0xF7FA4629, 
    0x2800FBC1, 0x8345F040, 0x23002200, 0x0114E9DD, 0xFBAEF7FA, 0xF0402800, 0xF89D8536, 0x4E4E707F, 
    0xF02B4B4E, 0x90070080, 0x22039811, 0x92082100, 0x2847910A, 0x461EBFD8, 0x9112920E, 0xF04BE50C, 
    0xF89A0B08, 0xE4473000, 0x0B10F04B, 0xF01B9311, 0xF43F0320, 0x9D0FAE22, 0xF0253507, 0xF1030307, 
    0xE9D30208, 0x920F4500, 0xE4D02300, 0x0030F1A3, 0x461C2300, 0x3B01F81A, 0x0484EB04, 0x0444EB00, 
    0x0030F1A3, 0xD9F52809, 0xE427940D, 0x2A009311, 0x85F7F040, 0x2A009A11, 0xAC91F43F, 0x21012300, 
    0x9108461F, 0x20A8F88D, 0xB01CF8CD, 0x307FF88D, 0x9312930A, 0xAE2A910E, 0x9C29E4D2, 0x9B11E529, 
    0xF3402B65, 0x220080A9, 0xE9DD2300, 0xF7FA0114, 0x2800FB45, 0x8152F000, 0x4A219B28, 0x2000F8C8, 
    0x34013301, 0x2B072201, 0x93289429, 0x2004F8C8, 0x8370F300, 0x0808F108, 0x9A139B21, 0x42939C29, 
    0x9B07DB03, 0xF57F07DD, 0x9B28AD76, 0x9A189917, 0x2000F8C8, 0x440C3301, 0xF8C82B07, 0x94291004, 
    0xF3009328, 0xF10883A4, 0x9B130808, 0x2E001E5E, 0xAD61F77F, 0x9B282E10, 0xF3404D0A, 0x462281EF, 
    0xF8DD2710, 0x9C0BB030, 0xBF00E014, 0x0000AF78, 0x0000AF64, 0x7FEFFFFF, 0x0000AF58, 0x0000AF54, 
    0x0000AF94, 0x0000AFA8, 0x0808F108, 0x2E103E10, 0x81D3F340, 0x32103301, 0x92292B07, 0xE8889328, 
    0xDDF100A0, 0x4621AA27, 0xF0034658, 0x2800F96F, 0xAC1CF47F, 0x9B289A29, 0xE7E746C8, 0x9A089B0D, 
    0x2F001A9F, 0xACD8F77F, 0x9B282F10, 0xDD274DB7, 0x46214642, 0xF04F46B0, 0x462E0B10, 0x9D0B9C0C, 
    0x3F10E004, 0xF1022F10, 0xDD150208, 0x31103301, 0x91292B07, 0xE8829328, 0xDDF20840, 0x4629AA27, 
    0xF0034620, 0x2800F943, 0xABF0F47F, 0x2F103F10, 0x9B289929, 0xDCE9464A, 0x460C4635, 0x46904646, 
    0x443C3301, 0x94292B07, 0xE8889328, 0xF30000A0, 0xF1088234, 0xE49F0808, 0x9F289B13, 0xF3402B01, 
    0x37018200, 0x23013401, 0x94292F07, 0xF8C89728, 0xF8C86000, 0xF3003004, 0xF1088205, 0x9A170808, 
    0xF8C89B18, 0x37013000, 0x2F074414, 0x97289429, 0x2004F8C8, 0x8202F300, 0x0808F108, 0x22002300, 
    0x0114E9DD, 0xFA7AF7FA, 0x28009B13, 0x8101F040, 0x37013B01, 0x441C3601, 0x97282F07, 0xF8C89429, 
    0xF8C86000, 0xF3003004, 0xF1088128, 0x9A190808, 0x2004F8C8, 0x44143701, 0x2F07AB23, 0x97289429, 
    0x3000F8C8, 0xACA5F77F, 0x990BAA27, 0xF003980C, 0x2800F8DD, 0xAB8AF47F, 0x46C89C29, 0xAA27E49B, 
    0x980C990B, 0xF8D2F003, 0xF43F2800, 0xF7FFACDD, 0xF8DDBB7D, 0x2B01B01C, 0x8135F000, 0xD1252B02, 
    0xB01CF8CD, 0x25002400, 0xAA27E611, 0x980C990B, 0xF8BCF003, 0xF47F2800, 0x9C29AB69, 0xE46746C8, 
    0x990BAA27, 0xF003980C, 0x2800F8B1, 0xAB5EF47F, 0x46C89C29, 0xAA27E41D, 0x980C990B, 0xF8A6F003, 
    0xF47F2800, 0x9C29AB53, 0xE40246C8, 0xB01CF8CD, 0x25002400, 0xE0004649, 0x08E24631, 0x7245EA42, 
    0xF00408E8, 0x46050307, 0x33304614, 0x0205EA54, 0x3C01F801, 0x36FFF101, 0x9A07D1EE, 0xF57F07D2, 
    0x2B30ADE6, 0xADE3F43F, 0x23303902, 0x3C01F806, 0x0301EBA9, 0x460E930E, 0xBB66F7FF, 0x29009921, 
    0x8232F340, 0x9A139B12, 0xBFA84293, 0x2B004613, 0xDD0D461F, 0xF8C89B28, 0x33016000, 0x2B07443C, 
    0xF8C89429, 0x93287004, 0x8324F300, 0x0808F108, 0x2F009B12, 0x1BDBBFA8, 0x461F2B00, 0x80D7F340, 
    0x9B282F10, 0xF3404D31, 0x464281F1, 0x46B04621, 0x0B10F04F, 0x9C0C462E, 0xE0049D0B, 0x3F103208, 
    0xF3402F10, 0x330181DF, 0x2B073110, 0x93289129, 0x0840E882, 0xAA27DDF2, 0x46204629, 0xF836F003, 
    0xF47F2800, 0x9929AAE3, 0x464A9B28, 0x2D00E7E7, 0x2C0ABF08, 0x8095F0C0, 0x4620464E, 0x220A4629, 
    0xF7FA2300, 0x3230FA0B, 0x2D01F806, 0x46294620, 0x220A2300, 0xFA02F7FA, 0x460D4604, 0x0305EA54, 
    0xEBA9D1EB, 0x930E0306, 0xBAFEF7FF, 0x930E9B0A, 0xF7FF464E, 0xAA27BAF9, 0x980C990B, 0xF806F003, 
    0xF47F2800, 0xF89DAAB3, 0x9C29707F, 0xF7FF46C8, 0x1E5EBB50, 0xF77F2E00, 0x2E10AF0A, 0xDD234D03, 
    0xF04F4622, 0x9C0C0B10, 0xBF00E007, 0x0000AFA8, 0x2E103E10, 0x0808F108, 0x3701DD15, 0x2F073210, 
    0x97289229, 0x0820E888, 0xAA27DDF2, 0x4620990B, 0xFFDCF002, 0xF47F2800, 0x3E10AA89, 0x9A292E10, 
    0x46C89F28, 0x4614DCE9, 0x44343701, 0x94292F07, 0xE8889728, 0xF77F0060, 0xAA27AED8, 0x980C990B, 
    0xFFC4F002, 0xF47F2800, 0x9C29AA71, 0x46C89F28, 0x681CE6CD, 0x930F3304, 0xE4222500, 0x460A990F, 
    0x680C3204, 0x2500920F, 0xBA81F7FF, 0x681C3204, 0x2301920F, 0xF7FF2500, 0x4614BA7A, 0x44343301, 
    0x94292B07, 0xE8889328, 0xF77F0060, 0xE6BBAB62, 0x68149A0F, 0x33044613, 0x930F17E5, 0x462B4622, 
    0xF8DDE4CD, 0xF8CDB01C, 0xAE44B01C, 0x23013430, 0x4D41F806, 0xF7FF930E, 0xAA27BA77, 0x980C990B, 
    0xFF84F002, 0xF47F2800, 0x9C29AA31, 0x9A2146C8, 0x429A9B13, 0x9B07DB44, 0xD44107D9, 0x98129B13, 
    0x1A1D1A9A, 0xBFA84295, 0x2D004615, 0x9928DD0E, 0x5004F8C8, 0x44063101, 0x2907442C, 0x6000F8C8, 
    0x91289429, 0x823DF300, 0x0808F108, 0xBFAC2D00, 0x46161B56, 0xF77F2E00, 0x2E10AB1E, 0x4DB19B28, 
    0x4622DDAC, 0xF8DD2710, 0x9C0BB030, 0xF108E004, 0x3E100808, 0xDDA02E10, 0x32103301, 0x92292B07, 
    0xE8889328, 0xDDF200A0, 0x4621AA27, 0xF0024658, 0x2800FF3D, 0xA9EAF47F, 0x9B289A29, 0xE7E846C8, 
    0x98179B28, 0xF8C89918, 0x33011000, 0x2B074404, 0xF8C89429, 0x93280004, 0x81F7F300, 0x0808F108, 
    0x9B07E7AC, 0xF53F07DA, 0x3701ADFC, 0x23013401, 0x94292F07, 0xF8C89728, 0xF8C86000, 0xF77F3004, 
    0xE74AAE24, 0x990BAA27, 0xF002980C, 0x2800FF0F, 0xA9BCF47F, 0x9F289C29, 0xE5F046C8, 0x990BAA27, 
    0xF002980C, 0x2800FF03, 0xA9B0F47F, 0x9F289C29, 0xE5F346C8, 0xF7FF464E, 0xAA27B9E7, 0x980C990B, 
    0xFEF4F002, 0xF47F2800, 0x9C29A9A1, 0xF7FF46C8, 0xE9DDBA63, 0x46020114, 0xF7FA460B, 0x2800F891, 
    0x829BF040, 0x33019B0A, 0xF0239B11, 0xF0000720, 0x2F4781D5, 0x8123F000, 0xF44B9B15, 0x2B007280, 
    0xF2C09207, 0xED9D81F3, 0xED8D7B14, 0x23007B1C, 0x9B119310, 0xF0002B66, 0x2B4681C4, 0x80F1F000, 
    0xBF0A2F45, 0x9D0A9B0A, 0xA8251C5D, 0xAA21A922, 0x90042302, 0x93009202, 0xE9DD9501, 0x9103231C, 
    0xF001980C, 0x9B11FB81, 0x46062B67, 0x81D7F040, 0x0F01F01B, 0x8250F000, 0x22001974, 0xE9DD2300, 
    0xF7FA011C, 0x2800F81B, 0x8162F040, 0x42A39B25, 0x2130D206, 0x92251C5A, 0x9B257019, 0xD8F9429C, 
    0x2F471B9B, 0xF0009313, 0x9B1180F2, 0xF3402B65, 0x9B1181C5, 0x9B212B66, 0xF0009312, 0x9B1381C2, 
    0x46199A12, 0xF3004291, 0xF01B8193, 0xF0400F01, 0xEA228225, 0x930873E2, 0x920E2367, 0x9B109311, 
    0xF0402B00, 0x930A80CD, 0x707FF89D, 0xB964F7FF, 0x0507F025, 0x7B00ED95, 0x0308F105, 0x7B14ED8D, 
    0xE415930F, 0x460C4635, 0x46904646, 0x443C3301, 0x94292B07, 0xE8889328, 0xF73F00A0, 0xF108AECE, 
    0xE6D40808, 0x68139A0F, 0x920F3204, 0x601A9A09, 0xB851F7FF, 0x990BAA27, 0xF002980C, 0x2800FE47, 
    0xA8F4F47F, 0xE48746C8, 0x4A279B28, 0x2000F8C8, 0x34013301, 0x2B072201, 0x93289429, 0x2004F8C8, 
    0xF108DC53, 0xB9290808, 0xB91B9B13, 0x07D89B07, 0xA9F1F57F, 0x98179B28, 0xF8C89A18, 0x33012000, 
    0x44224602, 0x92292B07, 0x0004F8C8, 0xF3009328, 0xF1088197, 0x29000808, 0x816FF2C0, 0xF8C89913, 
    0x33016000, 0x2B07188C, 0x93289429, 0x1004F8C8, 0xA9CFF77F, 0x9A0FE528, 0x68139909, 0x460817CD, 
    0x46293204, 0xE9C3920F, 0xF7FF0100, 0xAA27B804, 0x980C990B, 0xFDFAF002, 0xF47F2800, 0x9C29A8A7, 
    0xE45246C8, 0x0000AFA8, 0x0000AF94, 0x980C2140, 0xFA68F7FA, 0x60109A0B, 0x28006110, 0x81F8F000, 
    0x23409A0B, 0xF7FE6153, 0xAA27BFD6, 0x980C990B, 0xFDDCF002, 0xF47F2800, 0x9921A889, 0x46C89C29, 
    0x9C0AE7A1, 0xA8259401, 0xAA21A922, 0x90042303, 0x93009202, 0xE9DD9103, 0x980C231C, 0xFA94F001, 
    0x46064625, 0x2B469B11, 0x0405EB06, 0xAF15F47F, 0x2B307833, 0x817DF000, 0x442C9D21, 0x9B0AE70D, 
    0xBF082B00, 0x930A2301, 0x4630E6D6, 0xF7F9940A, 0x950FFA97, 0xF8CD900E, 0x4603B01C, 0xB9E8F7FF, 
    0x2300272D, 0x707FF88D, 0xF7FF930A, 0x9B21B896, 0x461A9312, 0xDB043303, 0x46199B0A, 0xF6BF4291, 
    0x9B11AF0E, 0x93113B02, 0x3044F89D, 0x308CF88D, 0x3B019B12, 0x93212B00, 0x9B12BFBD, 0x0301F1C3, 
    0x222B222D, 0xF88D2B09, 0xF340208D, 0xF10D811D, 0x4620049B, 0xE0004DA9, 0xFB854610, 0x17D91203, 
    0x01A2EBC1, 0x0281EB01, 0x0242EBA3, 0x29093230, 0x2C01F800, 0xF100460B, 0xDCED32FF, 0x38023330, 
    0x4284B2D9, 0x1C01F802, 0x816FF240, 0x008EF10D, 0xE0014613, 0x1B01F813, 0x1B01F800, 0xD1F942A3, 
    0x1A9B3301, 0x028EF10D, 0xAA234413, 0x9A131A9B, 0x2A019319, 0x930E4413, 0x812AF340, 0x9A179B0E, 
    0x930E4413, 0x73E3EA23, 0x23009308, 0xE6C69312, 0xE6A54623, 0x990BAA27, 0xF002980C, 0x2800FD37, 
    0xAFE4F47E, 0x46C89C29, 0xAA27E4D2, 0x980C990B, 0xFD2CF002, 0xF47E2800, 0x9A21AFD9, 0x46C89C29, 
    0xAA27E5AC, 0x980C990B, 0xFD20F002, 0xF47E2800, 0x9A21AFCD, 0x9C299B13, 0x46C81A9A, 0x9B0AE5B6, 
    0x2B069612, 0x2306BF28, 0x4637960A, 0x950F9308, 0xB01CF8CD, 0x4E72930E, 0xBFFEF7FE, 0x930A2306, 
    0x9D0AE62A, 0xA8259501, 0xAA21A922, 0x90042303, 0x93009202, 0xE9DD9103, 0x980C231C, 0xF9C4F001, 
    0x19444606, 0x272DE734, 0x707FF88D, 0xBAC7F7FF, 0x9B139A17, 0x9A124413, 0x2A00930E, 0x80B7F340, 
    0x73E3EA23, 0x23679308, 0xE6689311, 0x1214E9DD, 0x4300F102, 0x232D931D, 0x9310911C, 0x9B11E609, 
    0xF47F2B47, 0xF01BAE29, 0xF47F0F01, 0x9B25AF0B, 0xEBA32F47, 0x93130306, 0xAF29F43F, 0x93129B21, 
    0x2B00E732, 0x80AEF340, 0x2A009A0A, 0xF01BD16B, 0xD1680F01, 0x930E9308, 0x9B0AE641, 0x930E9308, 
    0x950F900A, 0xB01CF8CD, 0xF89D9012, 0xF7FE707F, 0x2000BFA3, 0xF7FE900A, 0x424FBEE1, 0x4D413110, 
    0x2410DA2B, 0xB030F8DD, 0xF108E004, 0x3F100808, 0xDD222F10, 0x32103301, 0x92292B07, 0xF8C89328, 
    0xF8C85000, 0xDDF04004, 0x990BAA27, 0xF0024658, 0x2800FC8D, 0xAF3AF47E, 0x9B289A29, 0xE7E646C8, 
    0x990BAA27, 0xF002980C, 0x2800FC81, 0xAF2EF47E, 0x9A299921, 0x46C89B28, 0x3301E65D, 0x2B07443A, 
    0x00A0E888, 0x93289229, 0x0808F108, 0xAE56F77F, 0x990BAA27, 0xF002980C, 0x2800FC69, 0xAF16F47E, 
    0x9B289A29, 0xE64946C8, 0x22303330, 0x308FF88D, 0x208EF88D, 0xE708AB24, 0xE5C19B25, 0x9A179B12, 
    0x930E4413, 0x9B12E76C, 0x44139A17, 0x441A9A0A, 0x73E2EA22, 0x9308920E, 0x9B15E5D1, 0x2B004E12, 
    0x272DBFB6, 0x707FF89D, 0x707FF88D, 0xF7FF4B0F, 0x2200BA18, 0xE9DD2300, 0xF7F9011C, 0x2800FDAF, 
    0xAE7AF47F, 0x0501F1C5, 0x442C9521, 0x9B12E585, 0xF1C39A0E, 0x441A0301, 0xE7D24613, 0x66666667, 
    0x0000AF8C, 0x0000AFA8, 0x0000AF60, 0x0000AF5C, 0x0301F01B, 0xF47F9312, 0x9B0EAED1, 0x73E3EA23, 
    0xE59C9308, 0xB9139B0A, 0x0F01F01B, 0x9B17D002, 0xE7BB3301, 0xE74D2301, 0xF89A9D0F, 0x68283001, 
    0x70E0EA40, 0x4628900A, 0x46A23004, 0xF7FE900F, 0xF88DBE33, 0xF7FF107F, 0xF88DB850, 0xF7FF107F, 
    0xF88DB8DC, 0xF7FF107F, 0xF10DBA05, 0xE69C038E, 0x230C9A0C, 0xF04F6013, 0x930933FF, 0xBE9FF7FE, 
    0x107FF88D, 0xB984F7FF, 0x107FF88D, 0xB960F7FF, 0x107FF88D, 0xB943F7FF, 0x107FF88D, 0xB8FCF7FF, 
    0x4FF8E92D, 0x049C6E4B, 0xD52F4693, 0x68126893, 0x460EB353, 0xF1024607, 0xE9190908, 0xEA5F0420, 
    0xD017089A, 0x24003D04, 0x45A0E001, 0x4632D010, 0x1F04F855, 0xF0014638, 0x1C43FFF1, 0x0401F104, 
    0x2300D1F3, 0x3008F8CB, 0x3004F8CB, 0x8FF8E8BD, 0x3008F8DB, 0x0A03F02A, 0x030AEBA3, 0x3008F8CB, 
    0x0908F109, 0xD1D82B00, 0xE7EA2000, 0xFDB0F7FD, 0xF8CB2300, 0xF8CB3008, 0xE8BD3004, 0xBF008FF8, 
    0x4FF0E92D, 0x461DB0AD, 0x4690468B, 0x90069307, 0x6B83B118, 0xF0002B00, 0xF8DB80F3, 0xF9BB3064, 
    0x07DF000C, 0xD402B281, 0xF140058E, 0x048C80FC, 0xF8DBD40A, 0xF4403064, 0xF4235100, 0xF8AB5300, 
    0xF8CB100C, 0xB2893064, 0xF1400708, 0xF8DB80B3, 0x2B003010, 0x80AEF000, 0x031AF001, 0xF0002B0A, 
    0x230080B5, 0x0970F10D, 0x9311930B, 0x93039310, 0x903CF8CD, 0xF8CD46CA, 0xF898B010, 0x46443000, 
    0x2B25B1FB, 0xE01CD102, 0xD0032B25, 0x3F01F814, 0xD1F92B00, 0x0508EBA4, 0x9B10B19D, 0xF8CA9A11, 
    0x33018000, 0x2B07442A, 0x5004F8CA, 0x93109211, 0x2A00DD7A, 0x84B0F040, 0x92109B03, 0x46CA442B, 
    0x78239303, 0xF0002B00, 0x200083E0, 0x0300F04F, 0x3037F88D, 0x0801F104, 0x46057862, 0x46034606, 
    0x34FFF04F, 0x0801F108, 0x0120F1A2, 0xF2002958, 0xE8DF82DE, 0x0221F011, 0x02DC02DC, 0x02DC0229, 
    0x02DC02DC, 0x02DC02DC, 0x028902DC, 0x02DC0295, 0x02BD00A2, 0x019F02DC, 0x01A401A4, 0x01A401A4, 
    0x01A401A4, 0x01A401A4, 0x02DC01A4, 0x02DC02DC, 0x02DC02DC, 0x02DC02DC, 0x02DC02DC, 0x01B202DC, 
    0x02DC02DC, 0x02DC02DC, 0x02DC02DC, 0x02DC02DC, 0x02DC02DC, 0x02DC0197, 0x02DC02DC, 0x02DC02DC, 
    0x02DC019B, 0x025302DC, 0x02DC02DC, 0x02DC02DC, 0x02DC02DC, 0x02DC02DC, 0x02DC02DC, 0x021B025A, 
    0x02DC02DC, 0x026E02DC, 0x02DC021B, 0x027302DC, 0x01F502DC, 0x02090182, 0x02DC02D7, 0x02DC029A, 
    0x02DC00A7, 0x022E02DC, 0x0A08F10A, 0x442B9B03, 0xE7869303, 0x98064659, 0xFE72F000, 0xF8BBBB18, 
    0xF001100C, 0x2B0A031A, 0xAF4BF47F, 0x300EF9BB, 0xF6FF2B00, 0xF8DBAF46, 0x07DB3064, 0x058FD405, 
    0xF8DBD403, 0xF7FD0058, 0x462BFE91, 0x46594642, 0xF0009806, 0x9003FD4D, 0xB02D9803, 0x8FF0E8BD, 
    0xFB10F7FD, 0xF8DBE709, 0x07D93064, 0xF8BBD404, 0x059A300C, 0x84AAF140, 0x33FFF04F, 0x98039303, 
    0xE8BDB02D, 0xF8DB8FF0, 0xF7FD0058, 0xF9BBFE6D, 0xB281000C, 0x4276E6FB, 0xF0439207, 0xF8980304, 
    0xE74F2000, 0x069E9608, 0x8450F100, 0x06DD9907, 0xF100460A, 0x065883EF, 0x83ECF140, 0x3104880E, 
    0x22012700, 0xF04F9107, 0xF88D0100, 0x25001037, 0xF0001C61, 0xF0238116, 0x91020180, 0x0107EA56, 
    0x8114F040, 0xF0402C00, 0x2A00835C, 0x83B7F040, 0x0301F013, 0xF0009305, 0xF10D8457, 0x23300BB0, 
    0x3D41F80B, 0x42A39B05, 0x4623BFB8, 0xB10D9301, 0x93013301, 0xF0139B02, 0x93090302, 0x9B01D002, 
    0x93013302, 0xF0139B02, 0x930A0384, 0x8217F040, 0x9A019B08, 0x2D001A9D, 0x8211F340, 0xF3402D10, 
    0x9B108490, 0x4EC49A11, 0x271046D6, 0x461946A2, 0xE0079C06, 0x0C02F101, 0x0E08F10E, 0x3D104601, 
    0xDD112D10, 0x32101C48, 0x92112807, 0x00C0E88E, 0xDDEF9010, 0xF0402A00, 0x3D1081E4, 0x46112D10, 
    0x0C01F04F, 0xDCED46CE, 0x46614654, 0x442A46F2, 0x92112907, 0x6000F8CA, 0x5004F8CA, 0xF3009110, 
    0xF89D82EC, 0xF10A5037, 0x1C480A08, 0xF0402D00, 0x9B0981DE, 0xF0002B00, 0x320281F8, 0x2302A90E, 
    0x92112807, 0xE88A9010, 0xF340000A, 0x2A0081EA, 0x838CF040, 0x2B809B0A, 0x0001F04F, 0x46CA4611, 
    0x81E7F040, 0x9D019B08, 0x2E001B5E, 0x81E1F340, 0x4D9A2E10, 0x8450F340, 0x271046D4, 0x9C0646A2, 
    0xF101E007, 0xF10C0E02, 0x46010C08, 0x2E103E10, 0x1C48DD11, 0x28073210, 0xE88C9211, 0x901000A0, 
    0x2A00DDEF, 0x829DF040, 0x2E103E10, 0x0E01F04F, 0x46CC4611, 0x4654DCED, 0x443246E2, 0x0F07F1BE, 
    0xE88A9211, 0xF8CD0060, 0xF300E040, 0xF10A8369, 0xF10E0A08, 0x46710001, 0x9608E1AB, 0x0220F013, 
    0x838CF040, 0x0110F013, 0x831AF040, 0x0240F013, 0x8316F000, 0x460A9807, 0x31044601, 0x91078806, 
    0xE7202700, 0xF0439608, 0xE7E70310, 0xF0439608, 0xE7080310, 0x0380F043, 0x2000F898, 0xF1A2E652, 
    0x26000130, 0x2B01F818, 0x0686EB06, 0x0646EB01, 0x0130F1A2, 0xD9F52909, 0x9608E646, 0xF0402800, 
    0xF0438408, 0x069E0310, 0x834CF100, 0xF10006DD, 0x065882F3, 0x82F0F140, 0xF9B59D07, 0x462A6000, 
    0x320417F7, 0x46394630, 0x28009207, 0x0200F171, 0x835DF2C0, 0xF89D1C61, 0xF04F5037, 0xF47F0201, 
    0xEA56AEEA, 0xF0000107, 0x9302824D, 0xF0002A01, 0x2A02828C, 0x825CF040, 0x46CB980B, 0xF0060933, 
    0xEA43010F, 0x093A7307, 0x4617461E, 0xF80B5C43, 0xEA563D01, 0xD1F10307, 0x030BEBA9, 0xE6E19305, 
    0xF0402800, 0x069983C0, 0x8367F100, 0xF10006DA, 0x065B80F1, 0x80EEF140, 0x68139A07, 0x92073204, 
    0x200CF8BD, 0xE5B8801A, 0x4A3D9807, 0x920B9608, 0x22786806, 0x30042130, 0x2039F88D, 0x0302F043, 
    0x27009007, 0x1038F88D, 0xE69C2202, 0x28009608, 0xF88DD099, 0xE7965037, 0x2000F898, 0xF47F2D00, 
    0x2001ADD1, 0xE5CD2520, 0x0301F043, 0x2000F898, 0x9608E5C8, 0xF0402800, 0x49298393, 0x069F910B, 
    0x82E8F100, 0x06DE9807, 0xF1004601, 0x065D8270, 0x826DF140, 0x88063104, 0x27009107, 0xF14007D8, 
    0xEA568222, 0xF0000107, 0x2130821E, 0x2039F88D, 0x0302F043, 0x1038F88D, 0xE6642202, 0x28009608, 
    0x836BF040, 0x910B4917, 0x9907E7D9, 0x680A9608, 0x2048F88D, 0x0000F04F, 0xF88D460A, 0x32040037, 
    0x90012001, 0x90059207, 0x0B48F10D, 0x24009302, 0xF043E670, 0xF8980340, 0xE5832000, 0x2000F898, 
    0xBF032A6C, 0x2001F898, 0x0320F043, 0x0801F108, 0x0310F043, 0xBF00E576, 0x0000AFB8, 0x0000AFC8, 
    0x0000AF78, 0x0000AF64, 0x680E9907, 0x2E00460A, 0x0204F102, 0xAE0FF6FF, 0xF8989207, 0xE5612000, 
    0x2000F898, 0x252B2001, 0x9907E55C, 0xF8D19608, 0xF04FB000, 0xF88D0200, 0x1D0E2037, 0x0F00F1BB, 
    0x82E5F000, 0xF0001C67, 0x462282C4, 0x46582100, 0xF7F89301, 0x9B01FC65, 0xF0002800, 0xEBA082E5, 
    0x9205020B, 0x93029607, 0x5037F89D, 0xE6192400, 0x2000F898, 0xF1082A2A, 0xF0000701, 0xF1A282E9, 
    0x29090130, 0xF04F46B8, 0xF63F0400, 0xF818AD2D, 0xEB042B01, 0xEB010484, 0xF1A20444, 0x29090130, 
    0xE521D9F5, 0x0320F043, 0x2000F898, 0x9608E51A, 0xF0402800, 0x2A0082DB, 0x80E7F000, 0xF88D2101, 
    0xF04F2048, 0x91010200, 0x2037F88D, 0xF10D9105, 0xE77B0B48, 0x68139A07, 0x92073204, 0x601A9A03, 
    0xAA0FE4CB, 0x46209904, 0xFC4AF7FF, 0xF0402800, 0x99108139, 0xF1019A11, 0x46CE0C01, 0x9910E5FF, 
    0x1C489A11, 0x5037F89D, 0xF43F2D00, 0x3201AE22, 0x0537F10D, 0x28072101, 0x90109211, 0x5000F8CA, 
    0x1004F8CA, 0x8108F340, 0xF0402A00, 0x9B0981BC, 0xF43F2B00, 0xAB0EAE1F, 0x46082202, 0x921D931C, 
    0x460146CA, 0x0A08F10A, 0x9B0A3001, 0xF43F2B80, 0x9B05AE19, 0x2C001AE4, 0x2C10DD2E, 0xDD1E4DB3, 
    0x261046D6, 0xF8DD9F06, 0xE006A010, 0xF10E1C88, 0x46190E08, 0x2C103C10, 0x1C4BDD10, 0x2B073210, 
    0xE88E9211, 0x93100060, 0x2A00DDF0, 0x3C10D165, 0xF04F2C10, 0x46110001, 0xDCEE46CE, 0x442246F2, 
    0x92112807, 0x5000F8CA, 0x4004F8CA, 0xF3009010, 0xF10A8085, 0x30010A08, 0xF8CA9905, 0x440AB000, 
    0x92112807, 0x1004F8CA, 0xF3409010, 0x2A008082, 0x8118F040, 0x92109B02, 0xD5350758, 0x99019B08, 
    0x2C001A5C, 0x80E7F340, 0x2C1046CA, 0x8218F340, 0x4E8F9910, 0xF8DD9F06, 0x2510B010, 0x1C88E006, 
    0x0A08F10A, 0x3C104619, 0xDD112C10, 0x32101C4B, 0x92112B07, 0x6000F8CA, 0x5004F8CA, 0xDDEE9310, 
    0x3C10BB42, 0xF04F2C10, 0x46110001, 0xDCED46CA, 0x28074422, 0xF8CA9211, 0xF8CA6000, 0x90104004, 
    0x2A00DD51, 0x819BF040, 0x9A089B03, 0x428A9901, 0x189BBFAC, 0x9303185B, 0xAA0FE04E, 0x46384651, 
    0xFB8EF7FF, 0xF0402800, 0x9910813F, 0x1C489A11, 0xE77F46CE, 0x4659AA0F, 0xF7FF4638, 0xB960FB81, 
    0x9A119910, 0x46CA1C48, 0x9B11E7BD, 0xB010F8DD, 0xF0402B00, 0x230081D4, 0xF8DB9310, 0xF0133064, 
    0xF8BB0F01, 0xD102300C, 0xF140059A, 0x065B80DE, 0xACB2F53F, 0xB02D9803, 0x8FF0E8BD, 0xF0402A00, 
    0x9A058106, 0x2301921D, 0xF8CD9211, 0x9310B070, 0xF10A46CA, 0x9B020A08, 0xD5040759, 0x99019B08, 
    0x2C001A5C, 0x9B03DC81, 0x98019908, 0xBFAC4281, 0x181B185B, 0xBB729303, 0x93102300, 0xF7FF46CA, 
    0xAA0FBBBC, 0x46209904, 0xFB3AF7FF, 0x9910BB50, 0xF1019A11, 0x46CC0E01, 0x2A00E548, 0x8140F040, 
    0x1037F89D, 0xF0002900, 0x2201811B, 0x0137F10D, 0x921D4610, 0x46CA911C, 0xF10A4601, 0x30010A08, 
    0x9B02E507, 0xF0002A01, 0x2A028098, 0x9302D10D, 0x27002600, 0xAA0FE5B0, 0x98069904, 0xFB10F7FF, 
    0xD0C92800, 0xB010F8DD, 0x9302E797, 0x27002600, 0xE0004649, 0x08F24659, 0x7247EA42, 0xF00608F8, 
    0x46070307, 0x33304616, 0x0207EA56, 0x3C01F801, 0x3BFFF101, 0x9A02D1EE, 0xF57F07D6, 0x2B30AD9D, 
    0xAD9AF43F, 0x23303902, 0x3C01F80B, 0x0301EBA9, 0x468B9305, 0x9B03E476, 0x428A9A08, 0x189BBFAC, 
    0x9303185B, 0x2202E798, 0x2F00E44D, 0x2E0ABF08, 0x46CBD352, 0x46394630, 0x2300220A, 0xF88EF7F9, 
    0xF80B3230, 0x46302D01, 0x23004639, 0xF7F9220A, 0x4606F885, 0xEA56460F, 0xD1EB0307, 0x9405E56C, 
    0xE44F46CB, 0x9904AA0F, 0xF7FF9806, 0x2800FAB9, 0x9A11D1A8, 0xE75E46CA, 0x9904AA0F, 0xF7FF9806, 
    0x2800FAAF, 0x46CAD19E, 0xBBC0F7FF, 0x0000AFC8, 0x0000AFB8, 0x68163104, 0x22019107, 0xE4122700, 
    0x46019807, 0x68063104, 0x27009107, 0x680EE40B, 0x91073104, 0xE5912700, 0x680E9907, 0x17F7460A, 
    0x92073204, 0x46394630, 0xF8DBE50F, 0xF7FD0058, 0xF8BBFA4D, 0xE71A300C, 0x93029B02, 0x0BB0F10D, 
    0x23013630, 0x6D41F80B, 0xE40B9305, 0x9904AA0F, 0xF7FF9806, 0x2800FA75, 0xAF64F47F, 0x9A119910, 
    0x46CA1C48, 0xAA0FE651, 0x98069904, 0xFA68F7FF, 0xF47F2800, 0x9910AF57, 0x1C489A11, 0xE44846CA, 
    0xF0402A00, 0x20018091, 0x46CA4611, 0xAA0FE641, 0x98069904, 0xFA54F7FF, 0xF47F2800, 0x9810AF43, 
    0x30019A11, 0xE66746CA, 0xE6D646D3, 0x36079E07, 0x0207F026, 0x0108F102, 0x6700E9D2, 0x22019107, 
    0xBBB1F7FF, 0x36079E07, 0x0607F026, 0x0100E9D6, 0x0208F106, 0x46069207, 0xE4B6460F, 0x36079E07, 
    0x0207F026, 0x0108F102, 0x6700E9D2, 0x22009107, 0xBB99F7FF, 0x36079E07, 0x0107F026, 0x0008F101, 
    0xE9D19007, 0xE5196700, 0xF7FF46CB, 0x252DBBAB, 0xEB674276, 0xF88D0747, 0x22015037, 0xBB88F7FF, 
    0xB9B39B09, 0x20014611, 0xE5F246CA, 0x0058F8DB, 0xF9CCF7FD, 0x33FFF04F, 0xF7FF9303, 0xAA0FBB50, 
    0x98069904, 0xF9FCF7FF, 0xF47F2800, 0x9A11AEEB, 0xAB0EE6A9, 0x931C2202, 0x2001921D, 0xE5D046CA, 
    0x9904AA0F, 0xF7FF9806, 0x2800F9EB, 0xAEDAF47F, 0x9A119910, 0x46CA1C48, 0x9A07E5A4, 0x68139903, 
    0x460817CD, 0x46293204, 0xE9C39207, 0xF7FF0100, 0x4658BA54, 0x93029607, 0xFA92F7F8, 0x90052400, 
    0x5037F89D, 0xBB5EF7FF, 0x9904AA0F, 0xF7FF9806, 0x2800F9C7, 0xAEB6F47F, 0x9A119910, 0x46CA1C48, 
    0x9910E5A7, 0x4E209A11, 0xF7FF3101, 0x2C06BB90, 0x2406BF28, 0x96079405, 0xF8DF9401, 0xE4D5B070, 
    0x4E199810, 0xE6033001, 0xF89D9405, 0x96075037, 0x46049302, 0xBB36F7FF, 0xF7FF4686, 0x9806BBCE, 
    0x4659AA0F, 0xF99CF7FF, 0xF43F2800, 0xE624AE24, 0xF8989907, 0x680C2001, 0xEA443104, 0x46B874E4, 
    0xF7FF9107, 0xF88DBA3F, 0xE43C5037, 0x5037F88D, 0xF88DE521, 0xF7FF5037, 0xF88DBBF4, 0xE4915037, 
    0x5037F88D, 0xBF00E469, 0x0000AFB8, 0x0000AF8C, 0x41F0E92D, 0xF5AD460C, 0x89896D8D, 0x89E56E66, 
    0xF0219619, 0x46060102, 0xF8AD69E0, 0x4617100C, 0x6180F44F, 0xF8AD6A62, 0x4698500E, 0x2300AD1A, 
    0xA8169007, 0x93069209, 0x95049500, 0x91059102, 0xF916F7FD, 0x463A4643, 0x46304669, 0xF990F7FF, 
    0xDB071E05, 0x46694630, 0xFD32F7FC, 0xBF182800, 0x35FFF04F, 0x300CF8BD, 0xD503065B, 0xF04389A3, 
    0x81A30340, 0xF7FD9816, 0x4628F8FD, 0x6D8DF50D, 0x81F0E8BD, 0x1E14B570, 0x4605B09A, 0x461ADB2E, 
    0x7302F44F, 0x91049100, 0x300CF8AD, 0x3C01D011, 0x76FFF64F, 0x94029B1E, 0x94054669, 0x600EF8AD, 
    0xFED2F7FD, 0xDB121C42, 0x22009B00, 0xB01A701A, 0x9B1EBD70, 0xF64F9402, 0x466976FF, 0xF8AD9405, 
    0xF7FD600E, 0x1C43FEC1, 0xB01ADB04, 0x238BBD70, 0xE7E9602B, 0x602B238B, 0xBD70B01A, 0x6003238B, 
    0x30FFF04F, 0xBF00E7F1, 0xB082B510, 0x93004C05, 0x46136824, 0x4601460A, 0xF7FF4620, 0xB002FFBB, 
    0xBF00BD10, 0x200000CC, 0x460DB5F8, 0x46064614, 0x6B83B110, 0xD04B2B00, 0x200CF9B4, 0x60A369A3, 
    0x0708B291, 0x6923D539, 0xD0362B00, 0x0489B2ED, 0xD515462F, 0x69616822, 0x428B1AD3, 0x3301DA1C, 
    0x1C5068A1, 0x60A13901, 0x70156020, 0x429A6962, 0x89A3D01A, 0xD50107DB, 0xD0152D0A, 0xBDF84638, 
    0xF4426E61, 0xF4215200, 0x81A25100, 0x66616822, 0x1AD36961, 0xDBE2428B, 0x46304621, 0xFC98F7FC, 
    0x6822B940, 0xE7DB2301, 0x46304621, 0xFC90F7FC, 0xD0E32800, 0x37FFF04F, 0x4621E7E0, 0xF0004630, 
    0x2800F82F, 0xF9B4D1F6, 0x6923200C, 0xE7BDB291, 0xFCE8F7FC, 0xBF00E7B0, 0x2AFFB121, 0x700AD804, 
    0x47702001, 0x47704608, 0x6003238A, 0x30FFF04F, 0xBF004770, 0x460DB570, 0x46114C08, 0x461A4606, 
    0x23004628, 0xF7F96023, 0x1C43F9D7, 0xBD70D000, 0x2B006823, 0x6033D0FB, 0xBF00BD70, 0x20002DF4, 
    0x4B30B538, 0x4605681B, 0xB113460C, 0x2A006B9A, 0xF9B4D038, 0xB293200C, 0xD50C0718, 0xB1A86920, 
    0x0201F013, 0x6963D01E, 0x425B2200, 0x60A261A3, 0x2000B1F0, 0x06D9BD38, 0x0758D53C, 0x6920D426, 
    0x0308F042, 0xB29B81A3, 0xD1E92800, 0x7220F403, 0x7F00F5B2, 0x4628D0E4, 0xF7FD4621, 0x89A3F837, 
    0xE7DD6920, 0xBF580799, 0x60A26962, 0xD1E02800, 0x300CF9B4, 0xD5DD061A, 0x0340F043, 0xF04F81A3, 
    0xBD3830FF, 0xF7FC4618, 0xE7C2FC7D, 0xB1516B21, 0x0340F104, 0xD0044299, 0xF7F94628, 0xF9B4F877, 
    0x2300200C, 0x23006323, 0x60636920, 0x0224F022, 0xE7C56020, 0x0240F042, 0x602B2309, 0x30FFF04F, 
    0xBD3881A2, 0x200000CC, 0x2006B508, 0xFBC0F001, 0xF7F92001, 0xBF00FA31, 0x4C07B538, 0x46052300, 
    0x60234608, 0xF938F7F9, 0xD0001C43, 0x6823BD38, 0xD0FB2B00, 0xBD38602B, 0x20002DF4, 0x690B6902, 
    0xF3004293, 0xE92D808D, 0xF1034FF0, 0xF10138FF, 0xF1000714, 0xF8570B14, 0xF85B2028, 0xEA4F3028, 
    0xB0830488, 0xFBB33201, 0xEB0BF9F2, 0x94000304, 0x0A04EB07, 0xF1B99301, 0xD0390F00, 0x462E2500, 
    0x46DE46BC, 0x4B04F85C, 0x3000F8DE, 0xFB09B2A2, 0x0C225502, 0xFB090C2C, 0xB2AD4202, 0xB2961B75, 
    0x4613EBC6, 0xF383FA15, 0x4623EB06, 0xEA43B29B, 0x45E24306, 0x4512EA4F, 0x3B04F84E, 0x4626EA4F, 
    0x9B00D2E0, 0x3003F85B, 0x9C01B993, 0x459B1F23, 0xF854D20C, 0xB94B3C04, 0x0308F1A4, 0x681AE002, 
    0xB91A3B04, 0xF108459B, 0xD3F838FF, 0x8010F8C0, 0xF0014604, 0x2800FA0B, 0xF109DB2E, 0x465D0901, 
    0xF8572300, 0x68281B04, 0x1A9AB28A, 0xFA120C0B, 0xEBC3F280, 0xEB034310, 0xB2924322, 0x4203EA42, 
    0xF84545BA, 0xEA4F2B04, 0xD2EA4323, 0x2028F85B, 0x0388EB0B, 0x1F1AB982, 0xD20B4593, 0x2C04F853, 
    0x3B08B942, 0x681AE002, 0xB91A3B04, 0xF108459B, 0xD3F838FF, 0x8010F8C4, 0xB0034648, 0x8FF0E8BD, 
    0x47702000, 0x00000000, 0x4FF0E92D, 0xB09B6C01, 0x9E274604, 0x469B4692, 0x6C42B141, 0x2301604A, 
    0x608B4093, 0xFFEAF000, 0x64232300, 0x0F00F1BB, 0xDB35465D, 0x60332300, 0x43AB4B9D, 0x2200D015, 
    0x46502300, 0xF7F84659, 0x4680FC89, 0xD02D2800, 0x23019A26, 0x9B286013, 0xF0002B00, 0x489580BD, 
    0x38016018, 0xE8BDB01B, 0x9A268FF0, 0x730FF242, 0xF1BA6013, 0xD10D0F00, 0x0513F3C5, 0x9B28B955, 
    0x2B00488D, 0xF100D0EE, 0x9A280308, 0xB01B6013, 0x8FF0E8BD, 0x48899B28, 0xD0E32B00, 0xE7F41CC3, 
    0xF02B2301, 0x60334500, 0xE7C546AB, 0xAB19AA18, 0x93009201, 0x465B4652, 0xF0014620, 0x0D2BFA17, 
    0xD0714681, 0x0213F3CB, 0x517FF042, 0xF8CD9F18, 0x46508050, 0x36FFF2A3, 0x1140F441, 0x4B782200, 
    0xF820F7F8, 0xE9D3A36C, 0xF7F82300, 0xA36CF9CF, 0x2300E9D3, 0xF818F7F8, 0x0102E9CD, 0xF7F84630, 
    0xA369F95F, 0x2300E9D3, 0xF9C0F7F8, 0x460B4602, 0x0102E9DD, 0xF808F7F8, 0x0104E9CD, 0xFC66F7F8, 
    0x90022200, 0xE9DD2300, 0xF7F80104, 0x2800FC21, 0x8173F040, 0x2D169D02, 0x815DF200, 0xEB034B61, 
    0xE9D303C5, 0x46520100, 0xF7F8465B, 0x2800FC2F, 0x81C5F000, 0x93021E6B, 0x930E2300, 0x1E7B1BBF, 
    0xF1009308, 0x23008154, 0x9B02930B, 0xF2C02B00, 0x9A088145, 0x4611930D, 0x23004419, 0x93069108, 
    0x2B099B24, 0x2B05D82A, 0x863CF340, 0x93243B04, 0x9B242500, 0x2B033B02, 0x863CF200, 0xF013E8DF, 
    0x02CA03D5, 0x046203E0, 0x9E199F18, 0xF206443E, 0x2B204332, 0x818EF340, 0x0340F1C3, 0x4012F206, 
    0xFA2A409D, 0x4328F000, 0xF8EAF7F8, 0x3E012301, 0x71F8F1A1, 0xE7819314, 0xE743483B, 0x64612100, 
    0x91254620, 0xFEE4F000, 0x33FFF04F, 0x9A25930A, 0x2301930F, 0x64209004, 0x930C9224, 0x2B009B19, 
    0x80D9F2C0, 0x2A0E9A02, 0x80D5F300, 0xEB034B2D, 0xED9303C2, 0x9B257B00, 0xED8D2B00, 0xF2C07B08, 
    0xE9DD83BB, 0x46505608, 0x4633462A, 0xF7F84659, 0xF7F8FA57, 0x4680FBDB, 0xF8C2F7F8, 0x4633462A, 
    0xF924F7F8, 0x4602460B, 0x46504659, 0xFF6AF7F7, 0xF1089D04, 0x702B0330, 0x2B019B0A, 0x460F4606, 
    0x0501F105, 0x2200D068, 0xF7F84B18, 0x2200F90F, 0x46062300, 0xF7F8460F, 0x2800FB71, 0x8088F040, 
    0x902CF8CD, 0x0A00F04F, 0xB040F8DF, 0xE9DD940C, 0xE0288908, 0x8000F3AF, 0x636F4361, 0x3FD287A7, 
    0x8B60C8B3, 0x3FC68A28, 0x509F79FB, 0x3FD34413, 0x7FF00000, 0x0000AF95, 0x0000B0DC, 0x0000B0E8, 
    0x3FF80000, 0x0000B118, 0x0000AF94, 0x40240000, 0xF8DCF7F8, 0x23002200, 0x460F4606, 0xFB3EF7F8, 
    0xF0402800, 0x464283C2, 0x4630464B, 0xF7F84639, 0xF7F8F9F7, 0x4604FB7B, 0xF862F7F8, 0x464B4642, 
    0xF8C4F7F8, 0x460B4602, 0x46394630, 0xFF0AF7F7, 0x0E30F104, 0xF8059E04, 0xEBA5EB01, 0x9E0A0E06, 
    0xE9CD45B6, 0x46520106, 0xD1D1465B, 0xF8DD46A0, 0x9C0C902C, 0x460F4606, 0x463B4632, 0x46394630, 
    0xFEF2F7F7, 0x460F4606, 0x460B4602, 0x0108E9DD, 0xFB0EF7F8, 0x4632B948, 0xE9DD463B, 0xF7F80108, 
    0xB1A8FAFD, 0x0F01F018, 0xF815D012, 0x9A048C01, 0xE0041E6B, 0xF000429A, 0xF8138402, 0xF1B88D01, 
    0xF1030F39, 0xD0F50501, 0x0801F108, 0x8000F883, 0x46204649, 0xFE32F000, 0x9B022200, 0x9A26702A, 
    0x60133301, 0x2B009B28, 0x839CF000, 0x601D9804, 0xE8BDB01B, 0x9A0C8FF0, 0xD03E2A00, 0x2A019A24, 
    0x8312F340, 0x9A069B0A, 0x42BA1E5F, 0x838DF2C0, 0x9B0A1BD7, 0xF2C02B00, 0x9D0B8485, 0x9A0B9B0A, 
    0x920B441A, 0x21019A08, 0x4620441A, 0xF0009208, 0x4606FE9F, 0x2301E024, 0xE6AF930E, 0x9B029A0B, 
    0x425B1AD2, 0x23009306, 0x930D920B, 0xF1C7E6B8, 0x930B0301, 0x93082300, 0x9D02E6A7, 0xF7F74628, 
    0x4602FFCF, 0xE9DD460B, 0xF7F80104, 0x2800FA97, 0xAE80F47F, 0x93021E6B, 0x9F06E67C, 0x9E0C9D0B, 
    0xDD0C2D00, 0x29009908, 0xDD08460B, 0x9A0B42A9, 0x462BBFA8, 0x1AED1AD2, 0x920B1ACB, 0x9B069308, 
    0x9B0CB1D3, 0xF0002B00, 0x2F0082B8, 0x4631DD10, 0x4620463A, 0xFEF8F000, 0x4601464A, 0x46204606, 
    0xFE60F000, 0x46804649, 0xF0004620, 0x46C1FDB7, 0x1BDA9B06, 0x82A2F040, 0x46202101, 0xFE48F000, 
    0x90069B0D, 0xDD1C2B00, 0x461A4601, 0xF0004620, 0x9B24FEDB, 0x2B019006, 0x8255F340, 0x0800F04F, 
    0x69139A06, 0x0383EB02, 0xF0006918, 0xF1C0FDE1, 0xE0100020, 0x0520F1C3, 0xF005FA0A, 0x900EE674, 
    0x9B24E63C, 0xF3402B01, 0xF04F8288, 0x9B0D0800, 0x2B002001, 0x9A08D1E4, 0xF0104410, 0xF000001F, 
    0xF1C080A0, 0x2B040320, 0x847FF340, 0xF1C09B0B, 0x4403001C, 0x4613930B, 0x44054403, 0x9B0B9308, 
    0xDD052B00, 0x461A4649, 0xF0004620, 0x4681FEED, 0x2B009B08, 0x461ADD05, 0x46209906, 0xFEE4F000, 
    0x9B0E9006, 0xF0402B00, 0x9B0A8085, 0xF3402B00, 0x9B0C8267, 0xF0002B00, 0x2D008097, 0x4631DD05, 
    0x4620462A, 0xFED0F000, 0xF1B84606, 0xF0400F00, 0x46B08338, 0x9A049B0A, 0x18D33B01, 0xF00A930B, 
    0x930C0301, 0xF8DD4617, 0x4648B018, 0xF7FF4659, 0x4631FCA5, 0x46484605, 0xFF08F000, 0x46594642, 
    0x46204682, 0xFF1EF000, 0x468368C2, 0x0330F105, 0xF0402A00, 0x4601822D, 0x93084648, 0xFEF6F000, 
    0x900A4659, 0xF0004620, 0x9A0AFD19, 0xB9329B08, 0xB9219924, 0x2A009A0C, 0x83DDF000, 0xF1BA9A24, 
    0xF2C00F00, 0xD105829E, 0xB9199924, 0x2900990C, 0x8297F000, 0xF3002A00, 0x9A0B8308, 0xF107703B, 
    0x42970A01, 0xF0004655, 0x46498309, 0x220A2300, 0xF0004620, 0x4546FCFD, 0x46314681, 0x0300F04F, 
    0x020AF04F, 0xF0004620, 0xF00081ED, 0x4641FCF1, 0x23004606, 0x4620220A, 0xFCEAF000, 0x46804657, 
    0x201CE7A1, 0x44039B0B, 0x9B08930B, 0x44054403, 0xE7649308, 0x46489906, 0xFEA8F000, 0xF6BF2800, 
    0x9F02AF74, 0x23004649, 0x4620220A, 0x97023F01, 0xFCCEF000, 0x46819B0C, 0xF0402B00, 0x9B0F83A9, 
    0xF3402B00, 0x930A83B2, 0x8010F8DD, 0xF8DD9F0A, 0x4645B018, 0xF000E002, 0x4681FCBB, 0x46484659, 
    0xFC1CF7FF, 0x0A30F100, 0xAB01F805, 0x0308EBA5, 0xF04F42BB, 0xF04F020A, 0x46490300, 0xDBEA4620, 
    0x9A0A9B04, 0xBFAC2A01, 0x3301189B, 0xF04F461D, 0x46490B00, 0x46202201, 0xFE16F000, 0x46819906, 
    0xFE64F000, 0xF3402800, 0xF8158237, 0x99042C01, 0xE0041E6B, 0xF000428B, 0xF81381AE, 0x2A392D01, 
    0x0501F103, 0x3201D0F6, 0x9906701A, 0xF0004620, 0x2E00FC75, 0xAE3CF43F, 0x0F00F1BB, 0x45B3D005, 
    0x4659D003, 0xF0004620, 0x4631FC69, 0xF0004620, 0xE62DFC65, 0x930C2300, 0x9A259B02, 0x930F4413, 
    0x2B013301, 0x461E461F, 0xBFB8930A, 0x21002701, 0x64612F17, 0x2201D90A, 0x005B2304, 0x0014F103, 
    0x46114287, 0x0201F102, 0x6461D2F7, 0xF0004620, 0x2E0EFC1F, 0x64209004, 0xAD40F63F, 0xF43F2D00, 
    0x9902AD3D, 0xE9CD2900, 0xF340AB10, 0x4BB98202, 0x020FF001, 0xEB03110D, 0x06E903C2, 0x6700E9D3, 
    0x81ABF140, 0x46504BB4, 0xE9D34659, 0xF7F72308, 0xE9CDFF97, 0xF0050112, 0xF04F050F, 0xB18D0A03, 
    0x82B4F8DF, 0xD50907EA, 0x46394630, 0x2300E9D8, 0xFE5CF7F7, 0x0A01F10A, 0x460F4606, 0xF108106D, 
    0xD1EF0808, 0x4632463B, 0x0112E9DD, 0xFF78F7F7, 0x46884607, 0xB1439B0E, 0x4BA02200, 0x46414638, 
    0xF8B6F7F8, 0xF0402800, 0x4650827F, 0xFDD8F7F7, 0x4643463A, 0xFE3AF7F7, 0x22004B99, 0xFC84F7F7, 
    0x46829B0A, 0x7B50F1A1, 0xF0002B00, 0x9B02813F, 0x9B0A9315, 0x9B0C9312, 0xF0002B00, 0x9A1281F7, 
    0x49904B8C, 0x03C2EB03, 0x2302E953, 0xF7F72000, 0x4652FF47, 0xF7F7465B, 0x4682FC65, 0x4638468B, 
    0xF7F84641, 0x4605F8C3, 0xFDAAF7F7, 0x460B4602, 0x46414638, 0xFC56F7F7, 0xFA5F3530, 0x9D04F885, 
    0x460F4606, 0x8000F885, 0x460B4602, 0x46594650, 0xF7F83501, 0x2800F88B, 0x4632D154, 0x2000463B, 
    0xF7F74976, 0x4602FC3F, 0x4650460B, 0xF7F84659, 0x2800F87D, 0x8268F040, 0x2A019A12, 0x815BF000, 
    0x9A049B12, 0x9048F8CD, 0x46994413, 0x2000E00D, 0xF7F7496A, 0x4652FC27, 0xF7F8465B, 0x2800F849, 
    0x8250F040, 0xF000454D, 0x46508144, 0x22004659, 0xF7F74B65, 0x2200FDCB, 0x46824B63, 0x4630468B, 
    0xF7F74639, 0x460FFDC3, 0xF7F84606, 0x4680F86F, 0xFD56F7F7, 0x460B4602, 0x46394630, 0xFC02F7F7, 
    0x0830F108, 0xF888FA5F, 0x465B4652, 0x8B01F805, 0x460F4606, 0xF81CF7F8, 0x463B4632, 0xD0C62800, 
    0x9048F8DD, 0x93029B15, 0x2300E522, 0x9B25930C, 0xF3402B00, 0x461F80D9, 0x930F461E, 0xE6F6930A, 
    0x930C2301, 0xF1BAE7F3, 0xF47F0F00, 0xF3CBADA7, 0x2B000313, 0xADB9F47F, 0x4700F02B, 0x053F0D3F, 
    0xF0002F00, 0x9B0B8205, 0x930B3301, 0x33019B08, 0xF04F9308, 0xE5AA0801, 0x2B009B0A, 0xAC41F73F, 
    0x809CF040, 0x4B392200, 0x0108E9DD, 0xFD6EF7F7, 0x4652465B, 0xFFF0F7F7, 0x93069B0A, 0x2800461E, 
    0x9B25D041, 0x43DB9D04, 0x99069302, 0xF0004620, 0x2E00FB15, 0xACDCF43F, 0x9A06E6A7, 0x46204649, 
    0xFC42F000, 0xE5574681, 0x2A009A14, 0x8180F000, 0x4333F203, 0x9D0B9F06, 0xF1BAE4F1, 0xF47F0F00, 
    0xE7B4AD74, 0xFB04F000, 0x46064657, 0xE5BA4680, 0x46204601, 0xF000930A, 0x2201FAF1, 0xE5DE9B0A, 
    0x2B029B24, 0xAD95F77F, 0x2B009B0A, 0x9906D1C9, 0x46202205, 0xFAECF000, 0x90064601, 0xF0004648, 
    0x2800FCB5, 0x9A02DDBD, 0x23319904, 0x92023201, 0x1C4D700B, 0x9A02E7B9, 0x92023201, 0x23319A04, 
    0xE6527013, 0x930C2301, 0xF8DDE666, 0x9C0C902C, 0xBF00E48E, 0x0000B118, 0x0000B0F0, 0x3FF00000, 
    0x401C0000, 0x3FE00000, 0x40240000, 0x40140000, 0xF7F74650, 0x463AFC95, 0xF7F74643, 0x2200FCF7, 
    0xF7F74BC5, 0x4682FB41, 0x7B50F1A1, 0x22004638, 0x46414BC2, 0xFB36F7F7, 0x465B4652, 0x460F4606, 
    0xFF74F7F7, 0xF0402800, 0x465280AD, 0x4300F10B, 0x46394630, 0xFF4CF7F7, 0xD04C2800, 0x93062300, 
    0xE76E461E, 0xF7FF9804, 0x9B06BABD, 0x97069A0D, 0x441A1AFB, 0x2700920D, 0xED9DE46B, 0xF04F7B10, 
    0xED8D0A02, 0xE65A7B12, 0x23012100, 0x46206461, 0xF0009325, 0x9B25FA4D, 0x64209004, 0x930F930A, 
    0x2A00E62C, 0xDD11469A, 0x22014649, 0xF0004620, 0x9906FBEB, 0xF0004681, 0x2800FC39, 0x8134F340, 
    0x0F39F1BA, 0x8104F000, 0x0A31F105, 0xF88746B3, 0x1C7DA000, 0xE5D84646, 0xF01AD104, 0xD0010F01, 
    0x4615E5C3, 0x3C01F815, 0xF1052B30, 0xD0F832FF, 0xF8DDE5CB, 0xE9DD9048, 0xF7FFAB10, 0x9904BB3F, 
    0x700A2230, 0xF8159A02, 0x32018C01, 0xF7FF9202, 0xF000BBFB, 0x9B0280B4, 0x4B89425D, 0x020FF005, 
    0x03C2EB03, 0x2300E9D3, 0x0110E9DD, 0xFC6EF7F7, 0x4607112D, 0xF0004688, 0x4E82811D, 0x0A02F04F, 
    0xD50907EB, 0x46414638, 0x2300E9D6, 0xFC5EF7F7, 0x0A01F10A, 0x46884607, 0xF106106D, 0xD1EF0608, 
    0x6871E608, 0xF0004620, 0x6933F9E3, 0x009A3302, 0xF1064605, 0x300C010C, 0xF982F7F7, 0x22014629, 
    0xF0004620, 0x4680FB81, 0x2B39E4B4, 0x80A0F000, 0x46B33301, 0x1C7D703B, 0xE5764646, 0x469A46B3, 
    0xE5564646, 0x93062300, 0xE70C461E, 0x49649B12, 0x01C3EB01, 0x465B4652, 0x0102E951, 0xFC26F7F7, 
    0x0116E9CD, 0x46414638, 0xFED0F7F7, 0xF7F74605, 0x460BFBB7, 0x46414602, 0xF7F74638, 0x9B12FA63, 
    0x9904460F, 0x2B013530, 0x4606700D, 0x0501F101, 0x9B12D026, 0xF8DF9A04, 0xF8CDB154, 0x44139048, 
    0x0A00F04F, 0x46524699, 0x4630465B, 0xF7F74639, 0x460FFBFD, 0xF7F74606, 0x4680FEA9, 0xFB90F7F7, 
    0x0830F108, 0x460B4602, 0x46394630, 0xFA3AF7F7, 0x8B01F805, 0x4606454D, 0xD1E4460F, 0x9048F8DD, 
    0x22004B41, 0x0116E9DD, 0xFA2EF7F7, 0x463B4632, 0xFE4EF7F7, 0xD0412800, 0x93029B15, 0x8C01F815, 
    0xBB45F7FF, 0x9A0A9B0B, 0x23001A9D, 0xBB77F7FF, 0x9F069B18, 0xF1C39D0B, 0xF7FF0336, 0xE9DDBB70, 
    0xF04F7810, 0xE5750A02, 0x2B009B0A, 0xAEC0F43F, 0x2D009D0F, 0xAF2FF77F, 0x4B2C2200, 0x46414638, 
    0xFBB4F7F7, 0x46884607, 0x0001F10A, 0xFB48F7F7, 0x4643463A, 0xFBAAF7F7, 0x22004B1F, 0xF9F4F7F7, 
    0x95129B02, 0x46823B01, 0x7B50F1A1, 0xE5729315, 0x46B32239, 0x4646703A, 0xE4C81C7D, 0x2316E9DD, 
    0x49192000, 0xF9DEF7F7, 0x463B4632, 0xFE1EF7F7, 0xE700B908, 0xF8154615, 0x2B303C01, 0x32FFF105, 
    0xE5DFD0F8, 0x9048F8DD, 0x93029B15, 0xBAEFF7FF, 0xF7FF46B8, 0x2B39BBAC, 0x469A46D3, 0xF1BBD0D8, 
    0xF73F0F00, 0xE6D1AED1, 0xAED0F47F, 0x0F01F01A, 0xAECCF43F, 0xBF00E6C4, 0x401C0000, 0x40140000, 
    0x0000B118, 0x0000B0F0, 0x3FE00000, 0x40240000, 0x23004631, 0x4620220A, 0xF91AF000, 0x2B009B0F, 
    0xDD0A4606, 0xF7FF930A, 0x9B24BBB8, 0xDC222B02, 0xE4489B0F, 0x0A02F04F, 0x9B24E4FC, 0xDC1A2B02, 
    0xE7EF9B0F, 0xF7FF2501, 0xF43FB9C4, 0xF1C0AB88, 0xE417003C, 0x64652500, 0x46204629, 0xF8C8F000, 
    0x33FFF04F, 0x930F930A, 0x90042301, 0x64209525, 0xF7FF930C, 0x9B0FB9E3, 0xE5F5930A, 0x47F0E92D, 
    0x4680B082, 0x46144689, 0xFFECF7FB, 0xD0362801, 0xF104464A, 0xA901035C, 0xF0004640, 0x1C42FC85, 
    0xD0254606, 0xF89DB3A8, 0x2500E004, 0x0A04F10D, 0x6823E009, 0x60221C5A, 0xE000F883, 0x42B53501, 
    0xF815D227, 0x68A3E00A, 0x2B003B01, 0xDAF060A3, 0x42BB69A7, 0x46224671, 0xDB024640, 0x0F0AF1BE, 
    0xF7FED1E7, 0x1C43FF21, 0xB002D1E8, 0x87F0E8BD, 0xF04389A3, 0x81A30340, 0xE8BDB002, 0xF10987F0, 
    0x2BFE33FF, 0xFA5FD8C4, 0x4606FE89, 0xE004F88D, 0x4648E7CB, 0xE8BDB002, 0xBF0087F0, 0x6E53B530, 
    0x0F01F013, 0x300CF9B2, 0xB0834614, 0xB29A4605, 0x0590D101, 0x0490D51C, 0x6E62D406, 0x5300F443, 
    0x5200F442, 0x666281A3, 0x46224628, 0xFF96F7FF, 0x07DA6E63, 0xD4024605, 0x059B89A3, 0x4628D502, 
    0xBD30B003, 0xF7FB6DA0, 0x4628FF91, 0xBD30B003, 0x91016DA0, 0xFF88F7FB, 0x300CF9B4, 0xB29A9901, 
    0xBF00E7D9, 0x4C07B538, 0x46052300, 0x60234608, 0xF970F7F8, 0xD0001C43, 0x6823BD38, 0xD0FB2B00, 
    0xBD38602B, 0x20002DF4, 0x4B054A04, 0x6B506812, 0xBF082800, 0x30F04618, 0xBF004770, 0x200000CC, 
    0x200004F8, 0x460DB570, 0x46114C08, 0x461A4606, 0x23004628, 0xF7F86023, 0x1C43F96B, 0xBD70D000, 
    0x2B006823, 0x6033D0FB, 0xBF00BD70, 0x20002DF4, 0xB5706CC3, 0x460C4605, 0xF853B14B, 0xB1800024, 
    0xF8436802, 0x23002024, 0x60C36103, 0x2221BD70, 0xF7F72104, 0x64E8FFCD, 0x28004603, 0x2000D1ED, 
    0x2101BD70, 0xF604FA01, 0x46281D72, 0xF7F70092, 0x2800FFBF, 0x6044D0F3, 0xE7E46086, 0x6CC3B131, 
    0xF853684A, 0x60080022, 0x1022F843, 0xBF004770, 0x690CB5F0, 0x460DB083, 0xF1014606, 0x27000E14, 
    0x0000F8DE, 0xFB02B281, 0x0C013301, 0xFB020C18, 0xB29B0101, 0xEB033701, 0x42BC4301, 0x3B04F84E, 
    0x4311EA4F, 0xB13BDCEC, 0x429468AA, 0xEB05DA07, 0x34010284, 0x612C6153, 0xB0034628, 0x6869BDF0, 
    0x31019301, 0xF7FF4630, 0x692AFFA3, 0xF1053202, 0x4607010C, 0x300C0092, 0xFF42F7F6, 0x68696CF2, 
    0xF8529B01, 0x60280021, 0x5021F842, 0xE7DE463D, 0x04120C02, 0xB9B24603, 0x20100403, 0x4F7FF013, 
    0x021BBF04, 0xF0133008, 0xBF044F70, 0x3004011B, 0x4F40F013, 0x009BBF04, 0x2B003002, 0x005BDB02, 
    0x2020D403, 0x20004770, 0x3001E7E8, 0xBF004770, 0xF0136803, 0x46010207, 0x07DAD007, 0x0798D421, 
    0x089BD421, 0x2002600B, 0xB2984770, 0x4610B198, 0x0FFFF013, 0x0A1BBF04, 0x071A3008, 0x091BBF04, 
    0x079A3004, 0x089BBF04, 0x07DA3002, 0x085BD407, 0x2020D104, 0x0C1B4770, 0xE7E92010, 0x600B3001, 
    0x20004770, 0x085B4770, 0x2001600B, 0xBF004770, 0x460CB510, 0xF7FF2101, 0x2201FF3B, 0x61026144, 
    0xBF00BD10, 0x4FF0E92D, 0x6915690C, 0xB08342AC, 0x4616468B, 0x4622DA04, 0x462C46B3, 0x4615460E, 
    0x3008F8DB, 0x1004F8DB, 0x0805EB04, 0xBFC84598, 0xF7FF3101, 0xF100FF1D, 0xEB090914, 0x45D10A88, 
    0xD2059000, 0x2100464B, 0x1B04F843, 0xD8FB459A, 0x0C14F106, 0x0385EB0C, 0x0B14F10B, 0xEB0B459C, 
    0xD24C0E84, 0xA004F8CD, 0xF8DC469A, 0xB2AF5000, 0x2100B1EF, 0x465E464D, 0xF856460C, 0x68282B04, 
    0xB281B293, 0x1303FB07, 0x0C010C12, 0xFB074423, 0xEB011102, 0xB29B4113, 0x4301EA43, 0xF84545B6, 
    0xEA4F3B04, 0xD8E84411, 0xF8DC602C, 0x0C2D5000, 0xF8D9D01D, 0x46483000, 0x4659461C, 0x880E2200, 
    0xFB050C24, 0x44224406, 0xEA43B29B, 0xF8404302, 0xF8513B04, 0x68043B04, 0xB2A60C1B, 0x6303FB05, 
    0x4312EB03, 0xEA4F458E, 0xD8E84213, 0xF10C6003, 0x45E20C04, 0x0904F109, 0xF8DDD8B7, 0xF1B8A004, 
    0xDD0B0F00, 0x3C04F85A, 0x0A04F1AA, 0xE005B11B, 0x3D04F85A, 0xF1B8B913, 0xD1F90801, 0xF8C09800, 
    0xB0038010, 0x8FF0E8BD, 0x0303F012, 0x41F0E92D, 0x46074614, 0x460DD12E, 0xD01C10A4, 0xB3966CBE, 
    0xF04F07E3, 0xD4060800, 0xD0141064, 0xB1A86830, 0x07E34606, 0x4632D5F8, 0x46384629, 0xFF52F7FF, 
    0x686AB1B5, 0x10646CFB, 0x1022F853, 0xF8436029, 0x46055022, 0x4628D1EA, 0x81F0E8BD, 0x46314632, 
    0xF7FF4638, 0x6030FF3F, 0x8000F8C0, 0xE7E04606, 0xE7D94605, 0x4D0B1E5A, 0xF8552300, 0xF7FF2022, 
    0x4605FE97, 0x2101E7C8, 0xF7FF4638, 0xF240FE61, 0x22012171, 0x61412300, 0x46066102, 0x600364B8, 
    0xBF00E7BE, 0x0000B1E0, 0x43F8E92D, 0x690A4691, 0xEA4F688B, 0xEB041469, 0xF1080802, 0x429D0501, 
    0x4607460E, 0xDD046849, 0x429D005B, 0x0101F101, 0x4638DCFA, 0xFE3CF7FF, 0xF1002C00, 0xDD060314, 
    0x0284EB03, 0xF8432100, 0x429A1B04, 0x6934D1FB, 0x0114F106, 0x091FF019, 0x0E84EB01, 0xF1C9D01D, 
    0x22000C20, 0xFA04680C, 0x4314F409, 0x4B04F843, 0x2B04F851, 0xFA22458E, 0xD8F3F20C, 0xB10A601A, 
    0x0502F108, 0x68726CFB, 0xF8533D01, 0x61051022, 0xF8436031, 0xE8BD6022, 0x3B0483F8, 0x2B04F851, 
    0x2F04F843, 0xD8F9458E, 0xBF00E7EC, 0x690BB430, 0x69004605, 0xD10F1AC0, 0x3514009B, 0x44193114, 
    0xE001442B, 0xD207429D, 0x4D04F853, 0x2D04F851, 0xD0F74294, 0x2001D302, 0x4770BC30, 0x30FFF04F, 
    0xBF00E7FA, 0x41F0E92D, 0x460E690F, 0x1A7F6911, 0x46902F00, 0x0089D117, 0x0514F106, 0x0E14F102, 
    0x4471186B, 0x429DE001, 0xF853D25C, 0xF8512D04, 0x42A24D04, 0xD25ED0F7, 0x462C4633, 0x46754646, 
    0x27014698, 0xDB58E005, 0x0514F106, 0x0414F108, 0x68712700, 0xFDBCF7FF, 0x3010F8D8, 0x60C76936, 
    0x0C83EB04, 0xEB0546A6, 0xF1000786, 0x23000414, 0x1B04F85E, 0x8B04F855, 0xFA13B28A, 0x0C09F388, 
    0xEBC11A9A, 0xEB034318, 0xB2924322, 0x4203EA42, 0xF84445F4, 0xEA4F2B04, 0xD8E94323, 0xD91742AF, 
    0x46AE46A4, 0x2B04F85E, 0xF382FA13, 0xEB011419, 0xB29B4112, 0x4201EA43, 0xF84C4577, 0xEA4F2B04, 
    0xD8EF4321, 0x442F43ED, 0x0703F027, 0x443C3704, 0xB9223C04, 0x3D04F854, 0x2B003E01, 0x6106D0FA, 
    0x81F0E8BD, 0xF7FF2100, 0x2201FD73, 0x61022300, 0xE8BD6143, 0x467481F0, 0x4633E7AB, 0x0414F106, 
    0x0514F102, 0x27014616, 0xE7A24698, 0x43F0E92D, 0x2101B083, 0xF3C3461C, 0x4617550A, 0xF7FF9E0A, 
    0xF3C4FD57, 0x46810413, 0xF444B10D, 0x94011480, 0xA802B31F, 0x7D08F840, 0xFDDAF7FF, 0xD1352800, 
    0x000CE89D, 0x2014F8C9, 0xBF0C2B00, 0x21022101, 0x3018F8C9, 0x1010F8C9, 0xEB09B9DD, 0xF2A00381, 
    0x60304032, 0xF7FF6918, 0x9B0BFDA3, 0x1041EBC0, 0x46486018, 0xE8BDB003, 0xA80183F0, 0xFDB8F7FF, 
    0xF8C99B01, 0x21013014, 0xF8C93020, 0x2D001010, 0xF2A5D0E3, 0xEB084833, 0x60330300, 0xF1C09B0B, 
    0x60180035, 0xB0034648, 0x83F0E8BD, 0x000AE89D, 0x0220F1C0, 0xF202FA03, 0x40C3430A, 0xF8C99301, 
    0xE7C12014, 0x460DB570, 0x46114C08, 0x461A4606, 0x23004628, 0xF7F76023, 0x1C43FE11, 0xBD70D000, 
    0x2B006823, 0x6033D0FB, 0xBF00BD70, 0x20002DF4, 0xD828291F, 0xF8D0B520, 0xB08222DC, 0xB1AA4605, 
    0x3021F852, 0x2B01B193, 0x1C58D00E, 0x2500D007, 0xF8424608, 0x47985021, 0xB0024628, 0x2316BD20, 
    0x602B2001, 0xBD20B002, 0xE7F62000, 0x91014628, 0xF82AF000, 0x460A9901, 0x46284601, 0xE8BDB002, 
    0xF0004020, 0x2316B80D, 0xF04F6003, 0x477030FF, 0x46014B02, 0xF7FF6818, 0xBF00BFCB, 0x200000CC, 
    0x460BB538, 0x46054C07, 0x46184611, 0x60232300, 0xF8BCF000, 0xD0001C43, 0x6823BD38, 0xD0FB2B00, 
    0xBD38602B, 0x20002DF4, 0xB8A8F000, 0x4FF0E92D, 0xB0836893, 0x2B004690, 0x4682D070, 0x6817460C, 
    0x6808688D, 0x89A3E042, 0x6F90F413, 0x6965D02E, 0xEB056921, 0xEBA00545, 0xEB050B01, 0xF10B75D5, 
    0x106D0001, 0x42A84430, 0xBF84462A, 0x462A4605, 0xD538055B, 0x46504611, 0xFC54F7F7, 0xD03C2800, 
    0x6921465A, 0xF7F69001, 0x89A2FC1B, 0xF4229B01, 0xF0426290, 0x81A20280, 0x020BEBA5, 0x000BEB03, 
    0x61236165, 0x60A26020, 0x46B34635, 0x4649465A, 0xFEECF7FB, 0x3008F8D8, 0x682068A2, 0x44581B55, 
    0x60A51B9E, 0xF8C86020, 0xB33E6008, 0x463B687E, 0x2E003708, 0x42AED0FA, 0x9000F8D3, 0xD2B246AB, 
    0x46B34635, 0x4650E7E2, 0xFC1EF7F7, 0x28004603, 0x6921D1D2, 0xF7F74650, 0x230CFC19, 0x3000F8CA, 
    0x220089A3, 0x0340F043, 0x30FFF04F, 0xF8C881A3, 0xF8C82008, 0xB0032004, 0x8FF0E8BD, 0xF8C82000, 
    0xB0030004, 0x8FF0E8BD, 0x4606B5F0, 0x461FB085, 0x4C10B189, 0x68244D10, 0x2C006B64, 0x462CBF08, 
    0x40E0F8D4, 0x1C4347A0, 0x2200D103, 0x603A238A, 0xB0056033, 0x460CBDF0, 0x4A074906, 0x6B496809, 
    0xBF082900, 0x46224611, 0x40E0F8D1, 0x47A0A901, 0xBF00E7E9, 0x200000CC, 0x200004F8, 0x22584B02, 
    0xF04F601A, 0x477030FF, 0x20002DF4, 0x22584B02, 0xF04F601A, 0x477030FF, 0x20002DF4, 0x00000000, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000003, 0x000003E8, 0x00000005, 
    0x20000C8C, 0x00000010, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 
    0x00000000, 0x00000000, 0x00001000, 0x0000A31C, 0x0000A358, 0x0000A340, 0x00000004, 0x10380009, 
    0x1038000A, 0x1038000B, 0x1038000C, 0x1038000D, 0x6D6E6970, 0x6D207061, 0x6D2D7369, 0x68637461, 
    0x6E697000, 0x2070616D, 0x20746F6E, 0x6E756F66, 0x6F662064, 0x65702072, 0x68706972, 0x6C617265, 
    0x756F6300, 0x6E20646C, 0x7020746F, 0x756F6E69, 0x00000074, 0x0000A21C, 0x20000B58, 0x00004A1D, 
    0x00004AB5, 0x00004AD5, 0x00004AE9, 0x00004AF9, 0x6465626D, 0x73736120, 0x61747265, 0x6E6F6974, 
    0x69616620, 0x3A64656C, 0x2C732520, 0x6C696620, 0x25203A65, 0x6C202C73, 0x20656E69, 0x0A206425, 
    0x6D5C2E00, 0x2D646562, 0x705C736F, 0x6674616C, 0x5C6D726F, 0x6465626D, 0x6972635F, 0x61636974, 
    0x00632E6C, 0x65746E69, 0x70757272, 0x6E655F74, 0x656C6261, 0x756F635F, 0x7265746E, 0x55203C20, 
    0x33544E49, 0x414D5F32, 0x6E690058, 0x72726574, 0x73747075, 0x7369645F, 0x656C6261, 0x616D0064, 
    0x745F6E69, 0x61657268, 0x72500064, 0x616D2065, 0x74206E69, 0x61657268, 0x6F6E2064, 0x72632074, 
    0x65746165, 0x69730064, 0x656C676E, 0x5F6E6F74, 0x6574756D, 0x616D0078, 0x636F6C6C, 0x74756D5F, 
    0x65007865, 0x6D5F766E, 0x78657475, 0x58545200, 0x2E355620, 0x00312E31, 0x00000000, 0x00000000, 
    0x00000000, 0x20000D98, 0x00000048, 0x200010E0, 0x00000100, 0x00000001, 0x00000000, 0x00000000, 
    0x00000000, 0x00000000, 0x20000CCC, 0x00000034, 0x20000D00, 0x00000050, 0x00000000, 0x00000000, 
    0x20000D50, 0x00000048, 0x20000DE0, 0x00000300, 0x00000028, 0x00000000, 0x00000000, 0x49534D43, 
    0x54522D53, 0x6520534F, 0x726F7272, 0x7453203A, 0x206B6361, 0x65646E75, 0x6F6C6672, 0x73282077, 
    0x75746174, 0x30203A73, 0x2C582578, 0x73617420, 0x4449206B, 0x7830203A, 0x202C5825, 0x6B736174, 
    0x6D616E20, 0x25203A65, 0x0D0A2973, 0x534D4300, 0x522D5349, 0x20534F54, 0x6F727265, 0x49203A72, 
    0x51205253, 0x65756575, 0x65766F20, 0x6F6C6672, 0x73282077, 0x75746174, 0x30203A73, 0x2C582578, 
    0x73617420, 0x4449206B, 0x7830203A, 0x202C5825, 0x656A626F, 0x49207463, 0x30203A44, 0x29582578, 
    0x43000D0A, 0x5349534D, 0x4F54522D, 0x72652053, 0x3A726F72, 0x65735520, 0x69542072, 0x2072656D, 
    0x6C6C6143, 0x6B636162, 0x65755120, 0x6F206575, 0x66726576, 0x20776F6C, 0x61747328, 0x3A737574, 
    0x25783020, 0x74202C58, 0x206B7361, 0x203A4449, 0x58257830, 0x6974202C, 0x2072656D, 0x203A4449, 
    0x58257830, 0x000D0A29, 0x49534D43, 0x54522D53, 0x6520534F, 0x726F7272, 0x5453203A, 0x2F432044, 
    0x202B2B43, 0x7262696C, 0x20797261, 0x7362696C, 0x65636170, 0x746F6E20, 0x61766120, 0x62616C69, 
    0x2820656C, 0x74617473, 0x203A7375, 0x58257830, 0x6174202C, 0x49206B73, 0x30203A44, 0x29582578, 
    0x43000D0A, 0x5349534D, 0x4F54522D, 0x72652053, 0x3A726F72, 0x44545320, 0x432F4320, 0x6C202B2B, 
    0x61726269, 0x6D207972, 0x78657475, 0x696E6920, 0x6C616974, 0x74617A69, 0x206E6F69, 0x6C696166, 
    0x28206465, 0x74617473, 0x203A7375, 0x58257830, 0x6174202C, 0x49206B73, 0x30203A44, 0x29582578, 
    0x43000D0A, 0x5349534D, 0x4F54522D, 0x72652053, 0x3A726F72, 0x6B6E5520, 0x6E776F6E, 0x74732820, 
    0x73757461, 0x7830203A, 0x202C5825, 0x6B736174, 0x3A444920, 0x25783020, 0x0D0A2958, 0x00000000, 
    0x00001010, 0x00000000, 0x00000003, 0x00004001, 0x00000001, 0x00000003, 0x00004005, 0x00000003, 
    0x00000003, 0x00004019, 0x00000004, 0x00000003, 0x0000000F, 0x00000000, 0x00000003, 0x00002010, 
    0x00000003, 0x00000003, 0x0000100A, 0x00000003, 0x00000003, 0x00002003, 0x00000001, 0x00000003, 
    0x0000200E, 0x00000004, 0x00000003, 0x00003002, 0x00000002, 0x00000003, 0x00003006, 0x00000000, 
    0x00000003, 0xFFFFFFFF, 0xFFFFFFFF, 0x00000000, 0x00001011, 0x00000000, 0x00000003, 0x00002011, 
    0x00000003, 0x00000003, 0x00003007, 0x00000000, 0x00000003, 0x00003003, 0x00000002, 0x00000003, 
    0x00002004, 0x00000001, 0x00000003, 0x0000200F, 0x00000004, 0x00000003, 0x0000100B, 0x00000003, 
    0x00000003, 0x0000000E, 0x00000000, 0x00000003, 0x00004018, 0x00000004, 0x00000003, 0x00004004, 
    0x00000003, 0x00000003, 0x00004000, 0x00000001, 0x00000003, 0xFFFFFFFF, 0xFFFFFFFF, 0x00000000, 
    0x00000207, 0x00000007, 0x00181300, 0x00000201, 0x01140000, 0x02FAF080, 0x00800000, 0x07270E00, 
    0x666E6F63, 0x67006769, 0x6174785F, 0x7246306C, 0x2E007165, 0x65626D5C, 0x736F2D64, 0x7261745C, 
    0x73746567, 0x5241545C, 0x5F544547, 0x65657246, 0x6C616373, 0x41545C65, 0x54454752, 0x55434D5F, 
    0x65727058, 0x5F6F7373, 0x5355434D, 0x5241545C, 0x5F544547, 0x5F55434D, 0x4634364B, 0x6972645C, 
    0x73726576, 0x6C73665C, 0x6F6C635F, 0x632E6B63, 0x785F6700, 0x336C6174, 0x65724632, 0x636D0071, 
    0x6C6C7067, 0x6B6C6330, 0x4F4C4300, 0x475F4B43, 0x634D7465, 0x74784567, 0x466B6C43, 0x00716572, 
    0x434F4C43, 0x65475F4B, 0x63734F74, 0x43724530, 0x72466B6C, 0x43007165, 0x4B434F4C, 0x7465475F, 
    0x32337245, 0x6B6C436B, 0x71657246, 0x4F4C4300, 0x475F4B43, 0x6C507465, 0x7246306C, 0x43007165, 
    0x4B434F4C, 0x616E455F, 0x50656C62, 0x00306C6C, 0x434F4C43, 0x65535F4B, 0x65625074, 0x65646F4D, 
    0x4F4C4300, 0x425F4B43, 0x54746F6F, 0x6565506F, 0x65646F4D, 0x02800000, 0x050002DC, 0x078005B8, 
    0x0A000895, 0x61680B71, 0x656C646E, 0x6D5C2E00, 0x2D646562, 0x745C736F, 0x65677261, 0x545C7374, 
    0x45475241, 0x72465F54, 0x63736565, 0x5C656C61, 0x47524154, 0x4D5F5445, 0x70585543, 0x73736572, 
    0x434D5F6F, 0x545C5355, 0x45475241, 0x434D5F54, 0x364B5F55, 0x645C4634, 0x65766972, 0x665C7372, 
    0x645F6C73, 0x2E697073, 0x5F670063, 0x69707364, 0x646E6148, 0x305B656C, 0x5F67005D, 0x69707364, 
    0x646E6148, 0x315B656C, 0x5F67005D, 0x69707364, 0x646E6148, 0x325B656C, 0x5053005D, 0x445F3049, 
    0x65766972, 0x51524972, 0x646E6148, 0x0072656C, 0x31495053, 0x6972445F, 0x49726576, 0x61485152, 
    0x656C646E, 0x50530072, 0x445F3249, 0x65766972, 0x51524972, 0x646E6148, 0x0072656C, 0x646E6168, 
    0x2120656C, 0x554E203D, 0x69004C4C, 0x6174736E, 0x2065636E, 0x5346203C, 0x45465F4C, 0x52555441, 
    0x4F535F45, 0x44455F43, 0x435F414D, 0x544E554F, 0x6D5C2E00, 0x2D646562, 0x745C736F, 0x65677261, 
    0x545C7374, 0x45475241, 0x72465F54, 0x63736565, 0x5C656C61, 0x47524154, 0x4D5F5445, 0x70585543, 
    0x73736572, 0x434D5F6F, 0x545C5355, 0x45475241, 0x434D5F54, 0x364B5F55, 0x645C4634, 0x65766972, 
    0x665C7372, 0x655F6C73, 0x2E616D64, 0x44450063, 0x485F414D, 0x6C646E61, 0x51524965, 0x665F7300, 
    0x6378656C, 0x61486E61, 0x656C646E, 0x005D305B, 0x61622821, 0x3E2D6573, 0x2052434D, 0x41432026, 
    0x434D5F4E, 0x444D5F52, 0x4D5F5349, 0x294B5341, 0x6D5C2E00, 0x2D646562, 0x745C736F, 0x65677261, 
    0x545C7374, 0x45475241, 0x72465F54, 0x63736565, 0x5C656C61, 0x47524154, 0x4D5F5445, 0x70585543, 
    0x73736572, 0x434D5F6F, 0x545C5355, 0x45475241, 0x434D5F54, 0x364B5F55, 0x645C4634, 0x65766972, 
    0x665C7372, 0x665F6C73, 0x6378656C, 0x632E6E61, 0x4E414300, 0x72445F30, 0x72657669, 0x48515249, 
    0x6C646E61, 0x69007265, 0x6174736E, 0x2065636E, 0x5346203C, 0x45465F4C, 0x52555441, 0x4F535F45, 
    0x49505F43, 0x4F435F54, 0x00544E55, 0x626D5C2E, 0x6F2D6465, 0x61745C73, 0x74656772, 0x41545C73, 
    0x54454752, 0x6572465F, 0x61637365, 0x545C656C, 0x45475241, 0x434D5F54, 0x72705855, 0x6F737365, 
    0x55434D5F, 0x41545C53, 0x54454752, 0x55434D5F, 0x34364B5F, 0x72645C46, 0x72657669, 0x73665C73, 
    0x69705F6C, 0x00632E74, 0x5F544950, 0x49746547, 0x6174736E, 0x0065636E, 0x5F544950, 0x74696E49, 
    0x735F7300, 0x61486961, 0x656C646E, 0x5B5D305B, 0x73005D31, 0x6961735F, 0x646E6148, 0x305B656C, 
    0x5D305B5D, 0x736E6900, 0x636E6174, 0x203C2065, 0x5F4C5346, 0x54414546, 0x5F455255, 0x5F434F53, 
    0x5F533249, 0x4E554F43, 0x5C2E0054, 0x6465626D, 0x5C736F2D, 0x67726174, 0x5C737465, 0x47524154, 
    0x465F5445, 0x73656572, 0x656C6163, 0x5241545C, 0x5F544547, 0x5855434D, 0x73657270, 0x4D5F6F73, 
    0x5C535543, 0x47524154, 0x4D5F5445, 0x4B5F5543, 0x5C463436, 0x76697264, 0x5C737265, 0x5F6C7366, 
    0x2E696173, 0x32490063, 0x545F3053, 0x72445F78, 0x72657669, 0x48515249, 0x6C646E61, 0x49007265, 
    0x5F305332, 0x445F7852, 0x65766972, 0x51524972, 0x646E6148, 0x0072656C, 0x64735F73, 0x61486368, 
    0x656C646E, 0x005D305B, 0x74736E69, 0x65636E61, 0x46203C20, 0x465F4C53, 0x55544145, 0x535F4552, 
    0x535F434F, 0x5F434844, 0x4E554F43, 0x5C2E0054, 0x6465626D, 0x5C736F2D, 0x67726174, 0x5C737465, 
    0x47524154, 0x465F5445, 0x73656572, 0x656C6163, 0x5241545C, 0x5F544547, 0x5855434D, 0x73657270, 
    0x4D5F6F73, 0x5C535543, 0x47524154, 0x4D5F5445, 0x4B5F5543, 0x5C463436, 0x76697264, 0x5C737265, 
    0x5F6C7366, 0x63686473, 0x5300632E, 0x5F434844, 0x76697244, 0x52497265, 0x6E614851, 0x72656C64, 
    0x736E6900, 0x636E6174, 0x203C2065, 0x74726175, 0x61727241, 0x756F4379, 0x6300746E, 0x69666E6F, 
    0x623E2D67, 0x52647561, 0x5F657461, 0x00737042, 0x5F4C5346, 0x54414546, 0x5F455255, 0x54524155, 
    0x4649465F, 0x49535F4F, 0x286E455A, 0x65736162, 0x3D3E2029, 0x6E6F6320, 0x2D676966, 0x4678743E, 
    0x576F6669, 0x72657461, 0x6B72616D, 0x4C534600, 0x4145465F, 0x45525554, 0x5241555F, 0x49465F54, 
    0x535F4F46, 0x6E455A49, 0x73616228, 0x3E202965, 0x6F63203D, 0x6769666E, 0x78723E2D, 0x6F666946, 
    0x65746157, 0x72616D72, 0x5C2E006B, 0x6465626D, 0x5C736F2D, 0x67726174, 0x5C737465, 0x47524154, 
    0x465F5445, 0x73656572, 0x656C6163, 0x5241545C, 0x5F544547, 0x5855434D, 0x73657270, 0x4D5F6F73, 
    0x5C535543, 0x47524154, 0x4D5F5445, 0x4B5F5543, 0x5C463436, 0x76697264, 0x5C737265, 0x5F6C7366, 
    0x74726175, 0x5500632E, 0x5F545241, 0x49746547, 0x6174736E, 0x0065636E, 0x54524155, 0x696E495F, 
    0x41550074, 0x475F5452, 0x65447465, 0x6C756166, 0x6E6F4374, 0x00676966, 0x54524155, 0x7465535F, 
    0x64756142, 0x65746152, 0x00000000, 0x4006A000, 0x4006B000, 0x4006C000, 0x4006D000, 0x400EA000, 
    0x400EB000, 0x1034000A, 0x1034000B, 0x1034000C, 0x1034000D, 0x1028000A, 0x1028000B, 0x626D5C2E, 
    0x6F2D6465, 0x61745C73, 0x74656772, 0x41545C73, 0x54454752, 0x6572465F, 0x61637365, 0x545C656C, 
    0x45475241, 0x434D5F54, 0x72705855, 0x6F737365, 0x55434D5F, 0x41545C53, 0x54454752, 0x55434D5F, 
    0x34364B5F, 0x65735C46, 0x6C616972, 0x6970615F, 0x2800632E, 0x29746E69, 0x2D6A626F, 0x7265733E, 
    0x2E6C6169, 0x65646E69, 0x3D212078, 0x00434E20, 0x4006A000, 0x4006B000, 0x4006C000, 0x4006D000, 
    0x400EA000, 0x400EB000, 0x02020000, 0x00000202, 0x400FF000, 0x400FF040, 0x400FF080, 0x400FF0C0, 
    0x400FF100, 0x2D6A626F, 0x6E69703E, 0x203D2120, 0x6E695028, 0x656D614E, 0x00434E29, 0x626D5C2E, 
    0x6F2D6465, 0x61745C73, 0x74656772, 0x41545C73, 0x54454752, 0x6572465F, 0x61637365, 0x545C656C, 
    0x45475241, 0x434D5F54, 0x72705855, 0x6F737365, 0x55434D5F, 0x70615C53, 0x70675C69, 0x615F6F69, 
    0x632E6970, 0x6D5C2E00, 0x2D646562, 0x745C736F, 0x65677261, 0x545C7374, 0x45475241, 0x72465F54, 
    0x63736565, 0x5C656C61, 0x47524154, 0x4D5F5445, 0x70585543, 0x73736572, 0x434D5F6F, 0x615C5355, 
    0x705C6970, 0x616D6E69, 0x00632E70, 0x40049000, 0x4004A000, 0x4004B000, 0x4004C000, 0x4004D000, 
    0x7566202C, 0x6974636E, 0x203A6E6F, 0x00000000, 0x65737361, 0x6F697472, 0x2522206E, 0x66202273, 
    0x656C6961, 0x66203A64, 0x20656C69, 0x22732522, 0x696C202C, 0x2520656E, 0x25732564, 0x00000A73, 
    0x200000D0, 0x00000043, 0x49534F50, 0x00000058, 0x0000002E, 0x00464E49, 0x00666E69, 0x004E414E, 
    0x006E616E, 0x33323130, 0x37363534, 0x42413938, 0x46454443, 0x00000000, 0x33323130, 0x37363534, 
    0x62613938, 0x66656463, 0x00000000, 0x6C756E28, 0x0000296C, 0x00000030, 0x20202020, 0x20202020, 
    0x20202020, 0x20202020, 0x30303030, 0x30303030, 0x30303030, 0x30303030, 0x20202020, 0x20202020, 
    0x20202020, 0x20202020, 0x30303030, 0x30303030, 0x30303030, 0x30303030, 0x20202000, 0x20202020, 
    0x28282020, 0x20282828, 0x20202020, 0x20202020, 0x20202020, 0x20202020, 0x10108820, 0x10101010, 
    0x10101010, 0x10101010, 0x04040410, 0x04040404, 0x10040404, 0x10101010, 0x41411010, 0x41414141, 
    0x01010101, 0x01010101, 0x01010101, 0x01010101, 0x01010101, 0x10101010, 0x42421010, 0x42424242, 
    0x02020202, 0x02020202, 0x02020202, 0x02020202, 0x02020202, 0x10101010, 0x00000020, 0x00000000, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x69666E49, 
    0x7974696E, 0x00000000, 0x004E614E, 0x00000000, 0x37E08000, 0x4341C379, 0xB5056E17, 0x4693B8B5, 
    0xE93FF9F5, 0x4D384F03, 0xF9301D32, 0x5A827748, 0x7F73BF3C, 0x75154FDD, 0x00000000, 0x3FF00000, 
    0x00000000, 0x40240000, 0x00000000, 0x40590000, 0x00000000, 0x408F4000, 0x00000000, 0x40C38800, 
    0x00000000, 0x40F86A00, 0x00000000, 0x412E8480, 0x00000000, 0x416312D0, 0x00000000, 0x4197D784, 
    0x00000000, 0x41CDCD65, 0x20000000, 0x4202A05F, 0xE8000000, 0x42374876, 0xA2000000, 0x426D1A94, 
    0xE5400000, 0x42A2309C, 0x1E900000, 0x42D6BCC4, 0x26340000, 0x430C6BF5, 0x37E08000, 0x4341C379, 
    0x85D8A000, 0x43763457, 0x674EC800, 0x43ABC16D, 0x60913D00, 0x43E158E4, 0x78B58C40, 0x4415AF1D, 
    0xD6E2EF50, 0x444B1AE4, 0x064DD592, 0x4480F0CF, 0xC7E14AF6, 0x44B52D02, 0x79D99DB4, 0x44EA7843, 
    0x00000005, 0x00000019, 0x0000007D, 0xBF00B5F8, 0xBC08BCF8, 0x4770469E, 0xBF00B5F8, 0xBC08BCF8, 
    0x4770469E, 0x7FFF5278, 0x00000001, 0x00000435, 0x000016C5, 0x00000411, 0x00000000, 0x20002DF8, 
    0x00001E79, 0x00000000, 0x0000A30D, 0x02FB1791, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x01400000, 0x003D0900, 
    0x00008000, 0x200000D0, 0x00000000, 0x200003BC, 0x20000424, 0x2000048C, 0x00000000, 0x00000000, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000001, 0x00000000, 0xABCD330E, 0xE66D1234, 
    0x0005DEEC, 0x0000000B, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000043, 0x00000000, 0x00000000, 0x00000000, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000043, 0x00000000, 0x00000000, 0x00000000, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000043, 0x00000000, 0x00000000, 0x00000000, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000043, 0x00000000, 0x00000000, 0x00000000, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000043, 0x00000000, 0x00000000, 0x00000000, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000043, 0x00000000, 0x00000000, 0x00000000, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000043, 0x00000000, 0x00000000, 0x00000000, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x000086D9, 0x00005DE1, 0x00000000, 0x0000AFD8, 
    0x0000AF50, 0x0000AF0C, 0x0000AF0C, 0x0000AF0C, 0x0000AF0C, 0x0000AF0C, 0x0000AF0C, 0x0000AF0C, 
    0x0000AF0C, 0x0000AF0C, 0xFFFFFFFF, 0xFFFFFFFF, 0xFFFFFFFF, 0x0000FFFF, 0x53410001, 0x00494943, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x53410000, 0x00494943, 
    0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 
    0x00000000, 0x20000664, 0x20000664, 0x2000066C, 0x2000066C, 0x20000674, 0x20000674, 0x2000067C, 
    0x2000067C, 0x20000684, 0x20000684, 0x2000068C, 0x2000068C, 0x20000694, 0x20000694, 0x2000069C, 
    0x2000069C, 0x200006A4, 0x200006A4, 0x200006AC, 0x200006AC, 0x200006B4, 0x200006B4, 0x200006BC, 
    0x200006BC, 0x200006C4, 0x200006C4, 0x200006CC, 0x200006CC, 0x200006D4, 0x200006D4, 0x200006DC, 
    0x200006DC, 0x200006E4, 0x200006E4, 0x200006EC, 0x200006EC, 0x200006F4, 0x200006F4, 0x200006FC, 
    0x200006FC, 0x20000704, 0x20000704, 0x2000070C, 0x2000070C, 0x20000714, 0x20000714, 0x2000071C, 
    0x2000071C, 0x20000724, 0x20000724, 0x2000072C, 0x2000072C, 0x20000734, 0x20000734, 0x2000073C, 
    0x2000073C, 0x20000744, 0x20000744, 0x2000074C, 0x2000074C, 0x20000754, 0x20000754, 0x2000075C, 
    0x2000075C, 0x20000764, 0x20000764, 0x2000076C, 0x2000076C, 0x20000774, 0x20000774, 0x2000077C, 
    0x2000077C, 0x20000784, 0x20000784, 0x2000078C, 0x2000078C, 0x20000794, 0x20000794, 0x2000079C, 
    0x2000079C, 0x200007A4, 0x200007A4, 0x200007AC, 0x200007AC, 0x200007B4, 0x200007B4, 0x200007BC, 
    0x200007BC, 0x200007C4, 0x200007C4, 0x200007CC, 0x200007CC, 0x200007D4, 0x200007D4, 0x200007DC, 
    0x200007DC, 0x200007E4, 0x200007E4, 0x200007EC, 0x200007EC, 0x200007F4, 0x200007F4, 0x200007FC, 
    0x200007FC, 0x20000804, 0x20000804, 0x2000080C, 0x2000080C, 0x20000814, 0x20000814, 0x2000081C, 
    0x2000081C, 0x20000824, 0x20000824, 0x2000082C, 0x2000082C, 0x20000834, 0x20000834, 0x2000083C, 
    0x2000083C, 0x20000844, 0x20000844, 0x2000084C, 0x2000084C, 0x20000854, 0x20000854, 0x2000085C, 
    0x2000085C, 0x20000864, 0x20000864, 0x2000086C, 0x2000086C, 0x20000874, 0x20000874, 0x2000087C, 
    0x2000087C, 0x20000884, 0x20000884, 0x2000088C, 0x2000088C, 0x20000894, 0x20000894, 0x2000089C, 
    0x2000089C, 0x200008A4, 0x200008A4, 0x200008AC, 0x200008AC, 0x200008B4, 0x200008B4, 0x200008BC, 
    0x200008BC, 0x200008C4, 0x200008C4, 0x200008CC, 0x200008CC, 0x200008D4, 0x200008D4, 0x200008DC, 
    0x200008DC, 0x200008E4, 0x200008E4, 0x200008EC, 0x200008EC, 0x200008F4, 0x200008F4, 0x200008FC, 
    0x200008FC, 0x20000904, 0x20000904, 0x2000090C, 0x2000090C, 0x20000914, 0x20000914, 0x2000091C, 
    0x2000091C, 0x20000924, 0x20000924, 0x2000092C, 0x2000092C, 0x20000934, 0x20000934, 0x2000093C, 
    0x2000093C, 0x20000944, 0x20000944, 0x2000094C, 0x2000094C, 0x20000954, 0x20000954, 0x2000095C, 
    0x2000095C, 0x20000964, 0x20000964, 0x2000096C, 0x2000096C, 0x20000974, 0x20000974, 0x2000097C, 
    0x2000097C, 0x20000984, 0x20000984, 0x2000098C, 0x2000098C, 0x20000994, 0x20000994, 0x2000099C, 
    0x2000099C, 0x200009A4, 0x200009A4, 0x200009AC, 0x200009AC, 0x200009B4, 0x200009B4, 0x200009BC, 
    0x200009BC, 0x200009C4, 0x200009C4, 0x200009CC, 0x200009CC, 0x200009D4, 0x200009D4, 0x200009DC, 
    0x200009DC, 0x200009E4, 0x200009E4, 0x200009EC, 0x200009EC, 0x200009F4, 0x200009F4, 0x200009FC, 
    0x200009FC, 0x20000A04, 0x20000A04, 0x20000A0C, 0x20000A0C, 0x20000A14, 0x20000A14, 0x20000A1C, 
    0x20000A1C, 0x20000A24, 0x20000A24, 0x20000A2C, 0x20000A2C, 0x20000A34, 0x20000A34, 0x20000A3C, 
    0x20000A3C, 0x20000A44, 0x20000A44, 0x20000A4C, 0x20000A4C, 0x20000A54, 0x20000A54, 0x20000A5C, 
    0x20000A5C, 0xFFFFFFFF, 0x00020000, 0x00000000, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
    0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
    0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
    0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
    0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
    0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
    0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
    0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
    0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
    0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
    0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
    0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
    0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
    0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
    0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
    0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
    0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
    0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
    0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
    0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
    0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
    0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
    0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
    0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
    0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
    0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
    0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
    0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,

]);
/* harmony export (immutable) */ __webpack_exports__["code"] = code;



/***/ })
/******/ ]);
//# sourceMappingURL=dap.bundle.js.map