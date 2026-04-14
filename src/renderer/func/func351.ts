/**
 * func351 — func351 不明
 *
 * (org原典: newDTW_func3)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func351(this: any) {
        Adap.dbgprt(351);
        Adap.gmode(2, null, null, null);
        if (Gvar.var_340 == 698) {
            if (Gvar.var_747 > 0 || Gvar.var_389 >= 1) {
                if (Gvar.var_747 > 0 && Gvar.var_750 == 1) {
                    Adap.pos(Gvar.var_748 * Gvar.var_35 - 12, Gvar.var_749 * Gvar.var_36 - 10 - 12 - 10);
                }
                if (Gvar.var_389 >= 1) {
                    Adap.pos(4 * Gvar.var_35 - 12, 4 * Gvar.var_36 - 10 - 12 - 10);
                }
                if (Gvar.var_747 == 1) {
                    Adap.gcopy(35, 0, 704, 64, 64);
                }
                if (Gvar.var_747 == 2 || Gvar.var_747 == 3) {
                    Adap.gcopy(35, 64, 704, 64, 64);
                }
                if (Gvar.var_747 == 4 || Gvar.var_747 == 5) {
                    Adap.gcopy(35, 128, 704, 64, 64);
                }
                if (Gvar.var_747 == 6 || Gvar.var_747 == 7) {
                    Adap.gcopy(35, 192, 704, 64, 64);
                }
                if (Gvar.var_747 == 8) {
                    Adap.gcopy(35, 256, 704, 64, 64);
                }
                if (Gvar.var_747 == 9) {
                    Adap.gcopy(35, 320, 704, 64, 64);
                }
                if (Gvar.var_747 == 10) {
                    Adap.gcopy(35, 384, 704, 64, 64);
                }
                if (Gvar.var_747 == 11) {
                    Adap.gcopy(35, 448, 704, 64, 64);
                }
            }
            return;
        }
        if (Gvar.var_1212 == 1 || Gvar.var_108 == 1) {
            if (Gvar.var_747 > 0 && Gvar.var_750 == 0) {
                if (Gvar.var_199 == 4) {
                    Adap.pos(4 * Gvar.var_35 - 40, 4 * Gvar.var_36 - 10);
                }
                if (Gvar.var_199 == 6) {
                    Adap.pos(4 * Gvar.var_35 + 40, 4 * Gvar.var_36 - 10);
                }
                if (Gvar.var_199 == 2) {
                    Adap.pos(4 * Gvar.var_35, 4 * Gvar.var_36 + 40 - 10);
                }
                if (Gvar.var_199 == 8) {
                    Adap.pos(4 * Gvar.var_35, 4 * Gvar.var_36 - 40 - 10);
                }
                if (Gvar.var_199 == 1) {
                    Adap.pos(4 * Gvar.var_35 - 40, 4 * Gvar.var_36 + 40 - 10);
                }
                if (Gvar.var_199 == 3) {
                    Adap.pos(4 * Gvar.var_35 + 40, 4 * Gvar.var_36 + 40 - 10);
                }
                if (Gvar.var_199 == 7) {
                    Adap.pos(4 * Gvar.var_35 - 40, 4 * Gvar.var_36 - 40 - 10);
                }
                if (Gvar.var_199 == 9) {
                    Adap.pos(4 * Gvar.var_35 + 40, 4 * Gvar.var_36 - 40 - 10);
                }
            }
            if (Gvar.var_747 > 0 && Gvar.var_750 == 1) {
                Adap.pos(Gvar.var_748 * Gvar.var_35, Gvar.var_749 * Gvar.var_36 - 10);
            }
            if (Gvar.var_389 >= 1 || Gvar.var_108 == 1) {
                Adap.pos(4 * Gvar.var_35, 4 * Gvar.var_36 - 10);
            }
            if (Gvar.var_747 > 0 || Gvar.var_389 >= 1) {
                if (Gvar.var_747 == 1) {
                    Adap.gcopy(3, 0, 320, 40, 40);
                }
                if (Gvar.var_747 == 2) {
                    Adap.gcopy(3, 40, 320, 40, 40);
                }
                if (Gvar.var_747 == 3) {
                    Adap.gcopy(3, 80, 320, 40, 40);
                }
            }
            return;
        }
        if (Gvar.var_747 > 0 && Gvar.var_750 == 0) {
            if (Gvar.var_199 == 4) {
                Adap.pos(4 * Gvar.var_35 - 40 - 12, 4 * Gvar.var_36 - 10 - 12);
                Gvar.var_1277 = Gvar.var_66 - 1;
                Gvar.var_1278 = Gvar.var_67;
            }
            if (Gvar.var_199 == 6) {
                Adap.pos(4 * Gvar.var_35 + 40 - 12, 4 * Gvar.var_36 - 10 - 12);
                Gvar.var_1277 = Gvar.var_66 + 1;
                Gvar.var_1278 = Gvar.var_67;
            }
            if (Gvar.var_199 == 2) {
                Adap.pos(4 * Gvar.var_35 - 12, 4 * Gvar.var_36 + 40 - 10 - 12);
                Gvar.var_1277 = Gvar.var_66;
                Gvar.var_1278 = Gvar.var_67 + 1;
            }
            if (Gvar.var_199 == 8) {
                Adap.pos(4 * Gvar.var_35 - 12, 4 * Gvar.var_36 - 40 - 10 - 12);
                Gvar.var_1277 = Gvar.var_66;
                Gvar.var_1278 = Gvar.var_67 - 1;
            }
            if (Gvar.var_199 == 1) {
                Adap.pos(4 * Gvar.var_35 - 40 - 12, 4 * Gvar.var_36 + 40 - 10 - 12);
                Gvar.var_1277 = Gvar.var_66 - 1;
                Gvar.var_1278 = Gvar.var_67 + 1;
            }
            if (Gvar.var_199 == 3) {
                Adap.pos(4 * Gvar.var_35 + 40 - 12, 4 * Gvar.var_36 + 40 - 10 - 12);
                Gvar.var_1277 = Gvar.var_66 + 1;
                Gvar.var_1278 = Gvar.var_67 + 1;
            }
            if (Gvar.var_199 == 7) {
                Adap.pos(4 * Gvar.var_35 - 40 - 12, 4 * Gvar.var_36 - 40 - 10 - 12);
                Gvar.var_1277 = Gvar.var_66 - 1;
                Gvar.var_1278 = Gvar.var_67 - 1;
            }
            if (Gvar.var_199 == 9) {
                Adap.pos(4 * Gvar.var_35 + 40 - 12, 4 * Gvar.var_36 - 40 - 10 - 12);
                Gvar.var_1277 = Gvar.var_66 + 1;
                Gvar.var_1278 = Gvar.var_67 - 1;
            }
        }
        if (Gvar.var_747 > 0 && Gvar.var_750 == 1) {
            Adap.pos(Gvar.var_748 * Gvar.var_35 - 12, Gvar.var_749 * Gvar.var_36 - 10 - 12);
            Gvar.var_1277 = Gvar.var_748 - 4 + Gvar.var_66;
            Gvar.var_1278 = Gvar.var_749 - 4 + Gvar.var_67;
        }
        if (Gvar.var_389 >= 1) {
            Adap.pos(4 * Gvar.var_35 - 12, 4 * Gvar.var_36 - 10 - 12);
            Gvar.var_1277 = Gvar.var_66;
            Gvar.var_1278 = Gvar.var_67;
        }
        if (Gvar.var_1279 == 0 && Gvar.var_209 >= 41) {
            if (Gvar.var_747 > 0 || Gvar.var_389 >= 1) {
                if (Gvar.var_747 == 1) {
                    Adap.gcopy(35, 0, 832, 64, 64);
                }
                if (Gvar.var_747 == 2) {
                    Adap.gcopy(35, 64, 832, 64, 64);
                }
                if (Gvar.var_747 == 3) {
                    Adap.gcopy(35, 128, 832, 64, 64);
                }
                if (Gvar.var_747 == 4) {
                    Adap.gcopy(35, 192, 832, 64, 64);
                }
                if (Gvar.var_747 == 5) {
                    Adap.gcopy(35, 256, 832, 64, 64);
                }
                if (Gvar.var_747 == 6) {
                    Adap.gcopy(35, 320, 832, 64, 64);
                }
                if (Gvar.var_747 == 7) {
                    Adap.gcopy(35, 384, 832, 64, 64);
                }
                if (Gvar.var_747 == 8) {
                    Adap.gcopy(35, 448, 832, 64, 64);
                }
            }
        }
        if (Gvar.var_1279 == 0 && Gvar.var_209 >= 15 && Gvar.var_209 < 41) {
            if (Gvar.var_747 > 0 || Gvar.var_389 >= 1) {
                if (Gvar.var_747 == 1) {
                    Adap.gcopy(35, 0, 896, 64, 64);
                }
                if (Gvar.var_747 == 2) {
                    Adap.gcopy(35, 64, 896, 64, 64);
                }
                if (Gvar.var_747 == 3) {
                    Adap.gcopy(35, 128, 896, 64, 64);
                }
                if (Gvar.var_747 == 4) {
                    Adap.gcopy(35, 192, 896, 64, 64);
                }
                if (Gvar.var_747 == 5) {
                    Adap.gcopy(35, 256, 896, 64, 64);
                }
                if (Gvar.var_747 == 6) {
                    Adap.gcopy(35, 320, 896, 64, 64);
                }
                if (Gvar.var_747 == 7) {
                    Adap.gcopy(35, 384, 896, 64, 64);
                }
                if (Gvar.var_747 == 8) {
                    Adap.gcopy(35, 448, 896, 64, 64);
                }
            }
        }
        if (Gvar.var_1279 == 0 && Gvar.var_209 < 15) {
            if (Gvar.var_747 > 0 || Gvar.var_389 >= 1) {
                if (Gvar.var_747 == 1) {
                    Adap.gcopy(35, 0, 960, 64, 64);
                }
                if (Gvar.var_747 == 2) {
                    Adap.gcopy(35, 64, 960, 64, 64);
                }
                if (Gvar.var_747 == 3) {
                    Adap.gcopy(35, 128, 960, 64, 64);
                }
                if (Gvar.var_747 == 4) {
                    Adap.gcopy(35, 192, 960, 64, 64);
                }
                if (Gvar.var_747 == 5) {
                    Adap.gcopy(35, 256, 960, 64, 64);
                }
                if (Gvar.var_747 == 6) {
                    Adap.gcopy(35, 320, 960, 64, 64);
                }
                if (Gvar.var_747 == 7) {
                    Adap.gcopy(35, 384, 960, 64, 64);
                }
                if (Gvar.var_747 == 8) {
                    Adap.gcopy(35, 448, 960, 64, 64);
                }
            }
        }
        if (Gvar.var_340 == 400 || Gvar.var_340 == 407) {
            if (Gvar.var_747 > 0 || Gvar.var_389 >= 1) {
                if (Gvar.var_747 > 0 && Gvar.var_750 == 1) {
                    Adap.pos(Gvar.var_748 * Gvar.var_35 - 12, Gvar.var_749 * Gvar.var_36 - 10 - 12);
                }
                if (Gvar.var_389 >= 1) {
                    Adap.pos(4 * Gvar.var_35 - 12, 4 * Gvar.var_36 - 10 - 12);
                }
                if (Gvar.var_747 == 1) {
                    Adap.gcopy(35, 512, 704, 64, 64);
                }
                if (Gvar.var_747 == 2) {
                    Adap.gcopy(35, 576, 704, 64, 64);
                }
                if (Gvar.var_747 == 3) {
                    Adap.gcopy(35, 640, 704, 64, 64);
                }
                if (Gvar.var_747 == 4) {
                    Adap.gcopy(35, 704, 704, 64, 64);
                }
                if (Gvar.var_747 == 5) {
                    Adap.gcopy(35, 768, 704, 64, 64);
                }
                if (Gvar.var_747 == 6) {
                    Adap.gcopy(35, 832, 704, 64, 64);
                }
                if (Gvar.var_747 == 7) {
                    Adap.gcopy(35, 896, 704, 64, 64);
                }
                if (Gvar.var_747 == 8) {
                    Adap.gcopy(35, 960, 704, 64, 64);
                }
            }
            return;
        }
        if (Gvar.var_340 == 401) {
            if (Gvar.var_747 > 0 || Gvar.var_389 >= 1) {
                if (Gvar.var_747 > 0 && Gvar.var_750 == 1) {
                    Adap.pos(Gvar.var_748 * Gvar.var_35 - 12, Gvar.var_749 * Gvar.var_36 - 10 - 12);
                }
                if (Gvar.var_389 >= 1) {
                    Adap.pos(4 * Gvar.var_35 - 12, 4 * Gvar.var_36 - 10 - 12);
                }
                if (Gvar.var_747 == 1) {
                    Adap.gcopy(35, 0, 768, 64, 64);
                }
                if (Gvar.var_747 == 2) {
                    Adap.gcopy(35, 64, 768, 64, 64);
                }
                if (Gvar.var_747 == 3) {
                    Adap.gcopy(35, 128, 768, 64, 64);
                }
                if (Gvar.var_747 == 4) {
                    Adap.gcopy(35, 192, 768, 64, 64);
                }
                if (Gvar.var_747 == 5) {
                    Adap.gcopy(35, 256, 768, 64, 64);
                }
                if (Gvar.var_747 == 6) {
                    Adap.gcopy(35, 320, 768, 64, 64);
                }
                if (Gvar.var_747 == 7) {
                    Adap.gcopy(35, 384, 768, 64, 64);
                }
                if (Gvar.var_747 == 8) {
                    Adap.gcopy(35, 448, 768, 64, 64);
                }
            }
            return;
        }
        return;
}

export {func351}
