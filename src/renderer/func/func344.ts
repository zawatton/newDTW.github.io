/**
 * func344 — func344 不明
 *
 * (org原典: newDTW_func3)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func344(this: any) {
        Adap.dbgprt(344);
        if (Gvar.var_374 == 1) {
            return;
        }
        Gvar.var_764 = 4;
        Gvar.var_763 = 4;
        Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 10);
        if (Gvar.var_243 > 0) {
            if (Gvar.var_243 == 1 || Gvar.var_243 == 2 || Gvar.var_243 >= 8) {
                Gvar.var_1237 = 2;
            }
            if (Gvar.var_243 == 3) {
                Gvar.var_1237 = 4;
            }
            if (Gvar.var_243 >= 4 || Gvar.var_243 < 8) {
                Gvar.var_1237 = 6;
            }
            if (Gvar.var_199 == 4) {
                Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_1237, Gvar.var_763 * Gvar.var_36 - 10);
            }
            if (Gvar.var_199 == 6) {
                Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_1237, Gvar.var_763 * Gvar.var_36 - 10);
            }
            if (Gvar.var_199 == 2) {
                Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_1237);
            }
            if (Gvar.var_199 == 8) {
                Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_1237);
            }
            if (Gvar.var_199 == 1) {
                Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_1237, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_1237);
            }
            if (Gvar.var_199 == 3) {
                Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_1237, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_1237);
            }
            if (Gvar.var_199 == 7) {
                Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_1237, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_1237);
            }
            if (Gvar.var_199 == 9) {
                Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_1237, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_1237);
            }
        }
        Adap.color(0, 0, 0);
        Adap.gmode(4, null, null, 100);
        if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 13 && Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0 && Gvar.var_1238 == 0 && Gvar.var_159 == 0) {
            Adap.gcopy(3, 1560, 0, 40, 45); // "img_mychara.gif" の1行目の一番右側にあるディアボロの影(黒い丸)
        }
        if (Gvar.var_1238 > 0) {
            if (Gvar.var_1238 < 5 || Gvar.var_1238 > 83) {
                Adap.gcopy(3, 1560, 0, 40, 45); // "img_mychara.gif" の1行目の一番右側にあるディアボロの影(黒い丸)
            }
        }
        if (Gvar.var_71[Gvar.var_66][Gvar.var_67] == 13) {
            if (Gvar.var_125 == 0) {
                if (Gvar.nouryoku_disc_id == 202) {
                    Adap.gmode(2, null, null, null);
                    Adap.gcopy(3, 1520, 0, 40, 45);
                }
                if (Gvar.nouryoku_disc_id == 117) {
                    Adap.gmode(2, null, null, null);
                    if (Gvar.var_784 == 0 || Gvar.var_784 == 1 || Gvar.var_784 == 2) {
                        Adap.gcopy(3, 1320, 0, 40, 45);
                    }
                    if (Gvar.var_784 == 3 || Gvar.var_784 == 4 || Gvar.var_784 == 5) {
                        Adap.gcopy(3, 1360, 0, 40, 45);
                    }
                }
            }
            if (Gvar.var_125 != 0) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
                if (Gvar.var_784 == 0 || Gvar.var_784 == 1) {
                    Adap.gcopy(3, 1440, 80, 40, 45);
                }
                if (Gvar.var_784 == 2 || Gvar.var_784 == 3) {
                    Adap.gcopy(3, 1480, 80, 40, 45);
                }
                if (Gvar.var_784 == 4 || Gvar.var_784 == 5) {
                    Adap.gcopy(3, 1520, 80, 40, 45);
                }
            }
        }
        if (Gvar.var_159 != 0 && Gvar.var_71[Gvar.var_66][Gvar.var_67] != 13) {
            Adap.gmode(2, null, null, null);
            if (Gvar.var_784 == 0 || Gvar.var_784 == 1 || Gvar.var_784 == 2) {
                Adap.gcopy(3, 1320, 80, 40, 45);
            }
            if (Gvar.var_784 == 3 || Gvar.var_784 == 4 || Gvar.var_784 == 5) {
                Adap.gcopy(3, 1360, 80, 40, 45);
            }
        }
        return;
}

export {func344}
