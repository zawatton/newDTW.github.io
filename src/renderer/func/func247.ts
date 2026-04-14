/**
 * func247 — func247 ダンジョン関係
 *
 * (org原典: newDTW_dungeon_main / DONE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func247(this: any) {
        Adap.dbgprt(247);
        Gvar.var_1089 = Adap.rnd(100);
        if (Gvar.var_1089 >= 0 && Gvar.var_1089 < 30) {
            Gvar.var_1090 = 0;
            if (Gvar.var_204 == Gvar.var_560) {
                Gvar.var_96 = 0;
            }
        }
        else {
            Gvar.var_1091 = Adap.rnd(100);
            if (Gvar.var_1091 >= 0 && Gvar.var_1091 < 75) {
                Gvar.var_1090 = 1;
            }
            if (Gvar.var_1091 >= 75 && Gvar.var_1091 < 85) {
                Gvar.var_1090 = 2;
                if (Gvar.var_204 == Gvar.var_560) {
                    Gvar.var_96 = 0;
                }
            }
            if (Gvar.var_1091 >= 85 && Gvar.var_1091 < 98) {
                Gvar.var_1090 = 3;
                if (Gvar.var_204 == Gvar.var_560) {
                    Gvar.var_96 = 0;
                }
            }
            if (Gvar.var_1091 >= 98 && Gvar.var_1091 < 100) { // 幻覚の迷宮が出る確率 2%
                Gvar.var_1090 = 4;
                if (Gvar.var_204 == Gvar.var_560) {
                    Gvar.var_96 = 0;
                }
            }
        }
        if (Gvar.var_1090 == 0) {
            Gvar.var_493[Gvar.var_560] = 0;
            await Func.func256();  // 不明マップ??
        }
        if (Gvar.var_1090 == 2) {
            Gvar.var_493[Gvar.var_560] = 1;
            Gvar.var_1092 = Adap.rnd(13);
            if (Gvar.var_1092 == 0) {
                await Func.func258(); // 不明マップ??
            }
            if (Gvar.var_1092 == 1) {
                await Func.func259(); // 不明マップ??
            }
            if (Gvar.var_1092 == 2) {
                await Func.func260(); // 不明マップ??
            }
            if (Gvar.var_1092 == 3) {
                await Func.func261(); // 不明マップ??
            }
            if (Gvar.var_1092 == 4) {
                await Func.func262(); // 不明マップ??
            }
            if (Gvar.var_1092 == 5) {
                await Func.func263(); // 不明マップ??
            }
            if (Gvar.var_1092 == 6) {
                await Func.func264(); // 不明マップ??
            }
            if (Gvar.var_1092 == 7) {
                await Func.func265(); // 不明マップ??
            }
            if (Gvar.var_1092 == 8) {
                await Func.func266(); // 不明マップ??
            }
            if (Gvar.var_1092 == 9) {
                await Func.func267(); // 不明マップ??
            }
            if (Gvar.var_1092 == 10) {
                await Func.func268(); // 不明マップ??
            }
            if (Gvar.var_1092 == 11) {
                await Func.func269(); // 不明マップ??
            }
            if (Gvar.var_1092 == 12) {
                await Func.func270(); // 不明マップ??
            }
        }
        if (Gvar.var_1090 == 3) {
            Gvar.var_493[Gvar.var_560] = 1;
            Gvar.var_1092 = Adap.rnd(16);
            // No = 1 なので、ホテルの外
            if (Gvar.dungeon_number == 1) {
                Gvar.var_1092 = Adap.rnd(15);
            }
            if (Gvar.var_1092 == 0) {
                await Func.func271(); // 不明マップ??
            }
            if (Gvar.var_1092 == 1) {
                await Func.func272(); // 不明マップ??
            }
            if (Gvar.var_1092 == 2) {
                await Func.func273(); // 不明マップ??
            }
            if (Gvar.var_1092 == 3) {
                await Func.func274(); // 不明マップ??
            }
            if (Gvar.var_1092 == 4) {
                await Func.func275(); // 不明マップ??
            }
            if (Gvar.var_1092 == 5) {
                await Func.func276(); // 不明マップ??
            }
            if (Gvar.var_1092 == 6) {
                await Func.func277(); // 不明マップ??
            }
            if (Gvar.var_1092 == 7) {
                await Func.func278(); // 不明マップ??
            }
            if (Gvar.var_1092 == 8) {
                await Func.func279(); // 不明マップ??
            }
            if (Gvar.var_1092 == 9) {
                await Func.func280(); // 不明マップ??
            }
            if (Gvar.var_1092 == 10) {
                await Func.func281(); // 不明マップ??
            }
            if (Gvar.var_1092 == 11) {
                await Func.func282(); // 不明マップ??
            }
            if (Gvar.var_1092 == 12) {
                await Func.func283(); // 不明マップ??
            }
            if (Gvar.var_1092 == 13) {
                await Func.func284(); // 不明マップ??
            }
            if (Gvar.var_1092 == 14) {
                await Func.func285(); // 不明マップ??
            }
            if (Gvar.var_1092 == 15) {
                await Func.func286(); // 不明マップ??
            }
        }
        if (Gvar.var_1090 == 4) {
            // 幻覚の迷宮
            if (Gvar.var_994 == 1 || Gvar.special_floor == 8 || Gvar.var_560 == 2 || Gvar.var_560 == 3 || Gvar.var_560 == 6 || Gvar.var_560 == 7 || Gvar.var_560 == 10 || Gvar.var_560 == 11) {
                Gvar.var_1090 = 1;
            }
            else {
                Gvar.var_493[Gvar.var_560] = 2;
                await Func.func287(); // 不明マップ??
                Gvar.var_1004 = 1;
                Gvar.var_994 = 1;
                Gvar.var_95 = Gvar.var_560;
                Gvar.var_1093 = Adap.rnd(20);
                if (Gvar.var_560 == 1) {
                    Gvar.var_1094 = Adap.rnd(2);
                    if (Gvar.var_1094 == 0) {
                        Gvar.var_1005 = 0;
                    }
                    if (Gvar.var_1094 == 1) {
                        Gvar.var_1005 = 2;
                    }
                }
                if (Gvar.var_560 == 4) {
                    Gvar.var_1094 = Adap.rnd(2);
                    if (Gvar.var_1094 == 0) {
                        Gvar.var_1005 = 0;
                    }
                    if (Gvar.var_1094 == 1) {
                        Gvar.var_1005 = 1;
                    }
                }
                if (Gvar.var_560 == 5) {
                    Gvar.var_1094 = Adap.rnd(3);
                    if (Gvar.var_1094 == 0) {
                        Gvar.var_1005 = 0;
                    }
                    if (Gvar.var_1094 == 1) {
                        Gvar.var_1005 = 2;
                    }
                    if (Gvar.var_1094 == 2) {
                        Gvar.var_1005 = 3;
                    }
                }
                if (Gvar.var_560 == 8) {
                    Gvar.var_1094 = Adap.rnd(3);
                    if (Gvar.var_1094 == 0) {
                        Gvar.var_1005 = 0;
                    }
                    if (Gvar.var_1094 == 1) {
                        Gvar.var_1005 = 1;
                    }
                    if (Gvar.var_1094 == 2) {
                        Gvar.var_1005 = 3;
                    }
                }
                if (Gvar.var_560 == 9) {
                    Gvar.var_1094 = Adap.rnd(2);
                    if (Gvar.var_1094 == 0) {
                        Gvar.var_1005 = 2;
                    }
                    if (Gvar.var_1094 == 1) {
                        Gvar.var_1005 = 3;
                    }
                }
                if (Gvar.var_560 == 12) {
                    Gvar.var_1094 = Adap.rnd(2);
                    if (Gvar.var_1094 == 0) {
                        Gvar.var_1005 = 1;
                    }
                    if (Gvar.var_1094 == 1) {
                        Gvar.var_1005 = 3;
                    }
                }
            }
        }
        if (Gvar.var_1090 == 1) {
            Gvar.var_493[Gvar.var_560] = 1;
            await Func.func257();
        }
        return;
}

export {func247}
