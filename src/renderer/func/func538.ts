/**
 * func538 — func538 不明
 *
 * (org原典: newDTW_func5)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func538(this: any) {
        Adap.dbgprt(538);
        Gvar.var_365 = Gvar.var_80[Gvar.var_447][Gvar.var_449];
        Gvar.var_2436 = Gvar.var_81[Gvar.var_365][1] - Gvar.var_66 + 4;
        Gvar.var_2437 = Gvar.var_81[Gvar.var_365][2] - Gvar.var_67 + 4;
        Gvar.var_888 = Gvar.var_81[Gvar.var_365][0];
        Gvar.var_2438 = 0;
        if (Gvar.var_81[Gvar.var_365][4] == 1) {
            Gvar.var_2438 = 1;
        }
        if (Gvar.var_121 == 1) { // Gvar.var_121 罠が見えるようになるフラグがONであれば
            Gvar.var_2438 = 1;
        }
        if (Gvar.var_81[Gvar.var_365][0] == 31) {
            Gvar.var_2438 = 1;
        }
        if (Gvar.var_2438 == 0) {
            return;
        }
        if (Gvar.var_409 == 0) {
            Gvar.var_2439 = 0;
        }
        if (Gvar.var_409 == 1) {
            Gvar.var_2439 = 10;
        }
        if (Gvar.var_409 == 2) {
            Gvar.var_2439 = 20;
        }
        if (Gvar.var_409 == 3) {
            Gvar.var_2439 = 30;
        }
        if (Gvar.var_409 == 4) {
            Gvar.var_2439 = 40;
        }
        if (Gvar.var_1824 == 0) {
            if (Gvar.var_199 == 4) {
                Adap.pos(Gvar.var_2436 * Gvar.var_35 - Gvar.var_2439, Gvar.var_2437 * Gvar.var_36);
            }
            if (Gvar.var_199 == 6) {
                Adap.pos(Gvar.var_2436 * Gvar.var_35 + Gvar.var_2439, Gvar.var_2437 * Gvar.var_36);
            }
            if (Gvar.var_199 == 8) {
                Adap.pos(Gvar.var_2436 * Gvar.var_35, Gvar.var_2437 * Gvar.var_36 - Gvar.var_2439);
            }
            if (Gvar.var_199 == 2) {
                Adap.pos(Gvar.var_2436 * Gvar.var_35, Gvar.var_2437 * Gvar.var_36 + Gvar.var_2439);
            }
            if (Gvar.var_199 == 1) {
                Adap.pos(Gvar.var_2436 * Gvar.var_35 - Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 + Gvar.var_2439);
            }
            if (Gvar.var_199 == 3) {
                Adap.pos(Gvar.var_2436 * Gvar.var_35 + Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 + Gvar.var_2439);
            }
            if (Gvar.var_199 == 7) {
                Adap.pos(Gvar.var_2436 * Gvar.var_35 - Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - Gvar.var_2439);
            }
            if (Gvar.var_199 == 9) {
                Adap.pos(Gvar.var_2436 * Gvar.var_35 + Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - Gvar.var_2439);
            }
            if (Gvar.var_217 == 1) {
                Adap.pos(Gvar.var_2436 * Gvar.var_35, Gvar.var_2437 * Gvar.var_36);
            }
        }
        if (Gvar.var_1824 == 1) {
            if (Gvar.var_199 == 4) {
                Adap.pos(Gvar.var_2436 * Gvar.var_35 - 20 + 20, Gvar.var_2437 * Gvar.var_36);
            }
            if (Gvar.var_199 == 6) {
                Adap.pos(Gvar.var_2436 * Gvar.var_35 + 20 - 20, Gvar.var_2437 * Gvar.var_36);
            }
            if (Gvar.var_199 == 8) {
                Adap.pos(Gvar.var_2436 * Gvar.var_35, Gvar.var_2437 * Gvar.var_36 - 20 + 20);
            }
            if (Gvar.var_199 == 2) {
                Adap.pos(Gvar.var_2436 * Gvar.var_35, Gvar.var_2437 * Gvar.var_36 + 20 - 20);
            }
            if (Gvar.var_199 == 1) {
                Adap.pos(Gvar.var_2436 * Gvar.var_35 - 20 + 20, Gvar.var_2437 * Gvar.var_36 + 20 - 20);
            }
            if (Gvar.var_199 == 3) {
                Adap.pos(Gvar.var_2436 * Gvar.var_35 + 20 - 20, Gvar.var_2437 * Gvar.var_36 + 20 - 20);
            }
            if (Gvar.var_199 == 7) {
                Adap.pos(Gvar.var_2436 * Gvar.var_35 - 20 + 20, Gvar.var_2437 * Gvar.var_36 - 20 + 20);
            }
            if (Gvar.var_199 == 9) {
                Adap.pos(Gvar.var_2436 * Gvar.var_35 + 20 - 20, Gvar.var_2437 * Gvar.var_36 - 20 + 20);
            }
        }
        if (Gvar.var_888 == 6 && Gvar.var_81[Gvar.var_365][3] == 1) {
            if (Gvar.var_1824 == 0) {
                if (Gvar.var_199 == 4) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 - Gvar.var_2439 - 20, Gvar.var_2437 * Gvar.var_36);
                }
                if (Gvar.var_199 == 6) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 + Gvar.var_2439 - 20, Gvar.var_2437 * Gvar.var_36);
                }
                if (Gvar.var_199 == 8) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 - 20, Gvar.var_2437 * Gvar.var_36 - Gvar.var_2439);
                }
                if (Gvar.var_199 == 2) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 - 20, Gvar.var_2437 * Gvar.var_36 + Gvar.var_2439);
                }
                if (Gvar.var_199 == 1) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 - Gvar.var_2439 - 20, Gvar.var_2437 * Gvar.var_36 + Gvar.var_2439);
                }
                if (Gvar.var_199 == 3) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 + Gvar.var_2439 - 20, Gvar.var_2437 * Gvar.var_36 + Gvar.var_2439);
                }
                if (Gvar.var_199 == 7) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 - Gvar.var_2439 - 20, Gvar.var_2437 * Gvar.var_36 - Gvar.var_2439);
                }
                if (Gvar.var_199 == 9) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 + Gvar.var_2439 - 20, Gvar.var_2437 * Gvar.var_36 - Gvar.var_2439);
                }
                if (Gvar.var_217 == 1) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 - 20, Gvar.var_2437 * Gvar.var_36);
                }
            }
            if (Gvar.var_1824 == 1) {
                if (Gvar.var_199 == 4) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 - 20 + 20 - 20, Gvar.var_2437 * Gvar.var_36);
                }
                if (Gvar.var_199 == 6) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 + 20 - 20 - 20, Gvar.var_2437 * Gvar.var_36);
                }
                if (Gvar.var_199 == 8) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 - 20, Gvar.var_2437 * Gvar.var_36 - 20 + 20);
                }
                if (Gvar.var_199 == 2) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 - 20, Gvar.var_2437 * Gvar.var_36 + 20 - 20);
                }
                if (Gvar.var_199 == 1) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 - 20 + 20 - 20, Gvar.var_2437 * Gvar.var_36 + 20 - 20);
                }
                if (Gvar.var_199 == 3) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 + 20 - 20 - 20, Gvar.var_2437 * Gvar.var_36 + 20 - 20);
                }
                if (Gvar.var_199 == 7) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 - 20 + 20 - 20, Gvar.var_2437 * Gvar.var_36 - 20 + 20);
                }
                if (Gvar.var_199 == 9) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 + 20 - 20 - 20, Gvar.var_2437 * Gvar.var_36 - 20 + 20);
                }
            }
        }
        if (Gvar.var_888 == 79) {
            Gvar.var_1640 = Gvar.var_81[Gvar.var_365][6];
            if (Gvar.var_1640 == 4) {
                if (Gvar.var_199 == 4) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 + Gvar.var_2439 - Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10);
                }
                if (Gvar.var_199 == 6) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 + Gvar.var_2439 + Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10);
                }
                if (Gvar.var_199 == 8) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 + Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 - Gvar.var_2439);
                }
                if (Gvar.var_199 == 2) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 + Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 + Gvar.var_2439);
                }
                if (Gvar.var_199 == 1) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 + Gvar.var_2439 - Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 + Gvar.var_2439);
                }
                if (Gvar.var_199 == 3) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 + Gvar.var_2439 + Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 + Gvar.var_2439);
                }
                if (Gvar.var_199 == 7) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 + Gvar.var_2439 - Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 - Gvar.var_2439);
                }
                if (Gvar.var_199 == 9) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 + Gvar.var_2439 + Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 - Gvar.var_2439);
                }
                if (Gvar.var_217 == 1) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 + Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10);
                }
            }
            if (Gvar.var_1640 == 6) {
                if (Gvar.var_199 == 4) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 - Gvar.var_2439 - Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10);
                }
                if (Gvar.var_199 == 6) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 - Gvar.var_2439 + Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10);
                }
                if (Gvar.var_199 == 8) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 - Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 - Gvar.var_2439);
                }
                if (Gvar.var_199 == 2) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 - Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 + Gvar.var_2439);
                }
                if (Gvar.var_199 == 1) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 - Gvar.var_2439 - Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 + Gvar.var_2439);
                }
                if (Gvar.var_199 == 3) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 - Gvar.var_2439 + Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 + Gvar.var_2439);
                }
                if (Gvar.var_199 == 7) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 - Gvar.var_2439 - Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 - Gvar.var_2439);
                }
                if (Gvar.var_199 == 9) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 - Gvar.var_2439 + Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 - Gvar.var_2439);
                }
                if (Gvar.var_217 == 1) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 - Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10);
                }
            }
            if (Gvar.var_1640 == 8) {
                if (Gvar.var_199 == 4) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 - Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 + Gvar.var_2439);
                }
                if (Gvar.var_199 == 6) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 + Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 + Gvar.var_2439);
                }
                if (Gvar.var_199 == 8) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35, Gvar.var_2437 * Gvar.var_36 - 10 + Gvar.var_2439 - Gvar.var_2439);
                }
                if (Gvar.var_199 == 2) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35, Gvar.var_2437 * Gvar.var_36 - 10 + Gvar.var_2439 + Gvar.var_2439);
                }
                if (Gvar.var_199 == 1) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 - Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 + Gvar.var_2439 + Gvar.var_2439);
                }
                if (Gvar.var_199 == 3) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 + Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 + Gvar.var_2439 + Gvar.var_2439);
                }
                if (Gvar.var_199 == 7) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 - Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 + Gvar.var_2439 - Gvar.var_2439);
                }
                if (Gvar.var_199 == 9) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 + Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 + Gvar.var_2439 - Gvar.var_2439);
                }
                if (Gvar.var_217 == 1) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35, Gvar.var_2437 * Gvar.var_36 - 10 + Gvar.var_2439);
                }
            }
            if (Gvar.var_1640 == 2) {
                if (Gvar.var_199 == 4) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 - Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 - Gvar.var_2439);
                }
                if (Gvar.var_199 == 6) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 + Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 - Gvar.var_2439);
                }
                if (Gvar.var_199 == 8) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35, Gvar.var_2437 * Gvar.var_36 - 10 - Gvar.var_2439 - Gvar.var_2439);
                }
                if (Gvar.var_199 == 2) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35, Gvar.var_2437 * Gvar.var_36 - 10 - Gvar.var_2439 + Gvar.var_2439);
                }
                if (Gvar.var_199 == 1) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 - Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 - Gvar.var_2439 + Gvar.var_2439);
                }
                if (Gvar.var_199 == 3) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 + Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 - Gvar.var_2439 + Gvar.var_2439);
                }
                if (Gvar.var_199 == 7) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 - Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 - Gvar.var_2439 - Gvar.var_2439);
                }
                if (Gvar.var_199 == 9) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 + Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 - Gvar.var_2439 - Gvar.var_2439);
                }
                if (Gvar.var_217 == 1) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35, Gvar.var_2437 * Gvar.var_36 - 10 - Gvar.var_2439);
                }
            }
            if (Gvar.var_1640 == 1) {
                if (Gvar.var_199 == 4) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 + Gvar.var_2439 - Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 - Gvar.var_2439);
                }
                if (Gvar.var_199 == 6) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 + Gvar.var_2439 + Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 - Gvar.var_2439);
                }
                if (Gvar.var_199 == 8) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 + Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 - Gvar.var_2439 - Gvar.var_2439);
                }
                if (Gvar.var_199 == 2) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 + Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 - Gvar.var_2439 + Gvar.var_2439);
                }
                if (Gvar.var_199 == 1) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 + Gvar.var_2439 - Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 - Gvar.var_2439 + Gvar.var_2439);
                }
                if (Gvar.var_199 == 3) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 + Gvar.var_2439 + Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 - Gvar.var_2439 + Gvar.var_2439);
                }
                if (Gvar.var_199 == 7) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 + Gvar.var_2439 - Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 - Gvar.var_2439 - Gvar.var_2439);
                }
                if (Gvar.var_199 == 9) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 + Gvar.var_2439 + Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 - Gvar.var_2439 - Gvar.var_2439);
                }
                if (Gvar.var_217 == 1) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 + Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 - Gvar.var_2439);
                }
            }
            if (Gvar.var_1640 == 3) {
                if (Gvar.var_199 == 4) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 - Gvar.var_2439 - Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 - Gvar.var_2439);
                }
                if (Gvar.var_199 == 6) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 - Gvar.var_2439 + Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 - Gvar.var_2439);
                }
                if (Gvar.var_199 == 8) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 - Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 - Gvar.var_2439 - Gvar.var_2439);
                }
                if (Gvar.var_199 == 2) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 - Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 - Gvar.var_2439 + Gvar.var_2439);
                }
                if (Gvar.var_199 == 1) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 - Gvar.var_2439 - Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 - Gvar.var_2439 + Gvar.var_2439);
                }
                if (Gvar.var_199 == 3) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 - Gvar.var_2439 + Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 - Gvar.var_2439 + Gvar.var_2439);
                }
                if (Gvar.var_199 == 7) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 - Gvar.var_2439 - Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 - Gvar.var_2439 - Gvar.var_2439);
                }
                if (Gvar.var_199 == 9) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 - Gvar.var_2439 + Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 - Gvar.var_2439 - Gvar.var_2439);
                }
                if (Gvar.var_217 == 1) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 - Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 - Gvar.var_2439);
                }
            }
            if (Gvar.var_1640 == 7) {
                if (Gvar.var_199 == 4) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 + Gvar.var_2439 - Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 + Gvar.var_2439);
                }
                if (Gvar.var_199 == 6) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 + Gvar.var_2439 + Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 + Gvar.var_2439);
                }
                if (Gvar.var_199 == 8) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 + Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 + Gvar.var_2439 - Gvar.var_2439);
                }
                if (Gvar.var_199 == 2) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 + Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 + Gvar.var_2439 + Gvar.var_2439);
                }
                if (Gvar.var_199 == 1) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 + Gvar.var_2439 - Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 + Gvar.var_2439 + Gvar.var_2439);
                }
                if (Gvar.var_199 == 3) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 + Gvar.var_2439 + Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 + Gvar.var_2439 + Gvar.var_2439);
                }
                if (Gvar.var_199 == 7) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 + Gvar.var_2439 - Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 + Gvar.var_2439 - Gvar.var_2439);
                }
                if (Gvar.var_199 == 9) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 + Gvar.var_2439 + Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 + Gvar.var_2439 - Gvar.var_2439);
                }
                if (Gvar.var_217 == 1) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 + Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 + Gvar.var_2439);
                }
            }
            if (Gvar.var_1640 == 9) {
                if (Gvar.var_199 == 4) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 - Gvar.var_2439 - Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 + Gvar.var_2439);
                }
                if (Gvar.var_199 == 6) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 - Gvar.var_2439 + Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 + Gvar.var_2439);
                }
                if (Gvar.var_199 == 8) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 - Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 + Gvar.var_2439 - Gvar.var_2439);
                }
                if (Gvar.var_199 == 2) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 - Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 + Gvar.var_2439 + Gvar.var_2439);
                }
                if (Gvar.var_199 == 1) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 - Gvar.var_2439 - Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 + Gvar.var_2439 + Gvar.var_2439);
                }
                if (Gvar.var_199 == 3) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 - Gvar.var_2439 + Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 + Gvar.var_2439 + Gvar.var_2439);
                }
                if (Gvar.var_199 == 7) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 - Gvar.var_2439 - Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 + Gvar.var_2439 - Gvar.var_2439);
                }
                if (Gvar.var_199 == 9) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 - Gvar.var_2439 + Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 + Gvar.var_2439 - Gvar.var_2439);
                }
                if (Gvar.var_217 == 1) {
                    Adap.pos(Gvar.var_2436 * Gvar.var_35 - Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - 10 + Gvar.var_2439);
                }
            }
        }
        await Func.func539();
}

export {func538}
