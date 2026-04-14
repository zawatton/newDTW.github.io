/**
 * func582 — func582 不明
 *
 * (org原典: newDTW_func5)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func582(this: any) {
        Adap.dbgprt(582);
        if (Gvar.var_83[Gvar.var_673].Var0 == 47 || Gvar.var_83[Gvar.var_673].Var0 == 67 || Gvar.var_83[Gvar.var_673].Var0 == 80 || Gvar.var_83[Gvar.var_673].Var0 == 45 || Gvar.var_83[Gvar.var_673].Var0 == 158 || Gvar.var_83[Gvar.var_673].Var0 == 32 || Gvar.var_83[Gvar.var_673].Var0 == 106 || Gvar.var_83[Gvar.var_673].Var0 == 107 || Gvar.var_83[Gvar.var_673].Var0 == 76 || Gvar.var_83[Gvar.var_673].Var0 == 136 || Gvar.var_83[Gvar.var_673].Var0 == 175) {
            return;
        }
        Adap.gmode(2, null, null, null);
        Gvar.var_748 = (Gvar.var_83[Gvar.var_673].Var1 - Gvar.var_66 + 4) * 40;
        Gvar.var_749 = (Gvar.var_83[Gvar.var_673].Var2 - Gvar.var_67 + 4) * 40 - 10;
        if (Gvar.var_83[Gvar.var_673].Var5 == 4) {
            Adap.pos(Gvar.var_748 - 10, Gvar.var_749);
        }
        if (Gvar.var_83[Gvar.var_673].Var5 == 6) {
            Adap.pos(Gvar.var_748 + 10, Gvar.var_749);
        }
        if (Gvar.var_83[Gvar.var_673].Var5 == 2) {
            Adap.pos(Gvar.var_748, Gvar.var_749 + 10);
        }
        if (Gvar.var_83[Gvar.var_673].Var5 == 8) {
            Adap.pos(Gvar.var_748, Gvar.var_749 - 10);
        }
        if (Gvar.var_83[Gvar.var_673].Var5 == 1) {
            Adap.pos(Gvar.var_748 - 10, Gvar.var_749 + 10);
        }
        if (Gvar.var_83[Gvar.var_673].Var5 == 3) {
            Adap.pos(Gvar.var_748 + 10, Gvar.var_749 + 10);
        }
        if (Gvar.var_83[Gvar.var_673].Var5 == 7) {
            Adap.pos(Gvar.var_748 - 10, Gvar.var_749 - 10);
        }
        if (Gvar.var_83[Gvar.var_673].Var5 == 9) {
            Adap.pos(Gvar.var_748 + 10, Gvar.var_749 - 10);
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 21) {
            if (Gvar.var_83[Gvar.var_673].Var5 == 4) {
                Adap.pos(Gvar.var_748 - 12 - 10, Gvar.var_749 - 12);
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 6) {
                Adap.pos(Gvar.var_748 - 12 + 10, Gvar.var_749 - 12);
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 2) {
                Adap.pos(Gvar.var_748 - 12, Gvar.var_749 - 12 + 10);
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 8) {
                Adap.pos(Gvar.var_748 - 12, Gvar.var_749 - 12 - 10);
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 1) {
                Adap.pos(Gvar.var_748 - 12 - 10, Gvar.var_749 - 12 + 10);
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 3) {
                Adap.pos(Gvar.var_748 - 12 + 10, Gvar.var_749 - 12 + 10);
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 7) {
                Adap.pos(Gvar.var_748 - 12 - 10, Gvar.var_749 - 12 - 10);
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 9) {
                Adap.pos(Gvar.var_748 - 12 + 10, Gvar.var_749 - 12 - 10);
            }
            Adap.color(0, 0, 0);
    
            Adap.gmode(4, null, null, 180);
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 21) {
            if (Gvar.var_1198 == 1) {
                Adap.gcopy(35, 512, 768, 64, 64);
            }
            if (Gvar.var_1198 == 2) {
                Adap.gcopy(35, 576, 768, 64, 64);
            }
            if (Gvar.var_1198 == 3) {
                Adap.gcopy(35, 640, 768, 64, 64);
            }
            if (Gvar.var_1198 == 4) {
                Adap.gcopy(35, 704, 768, 64, 64);
            }
            if (Gvar.var_1198 == 5) {
                Adap.gcopy(35, 768, 768, 64, 64);
            }
            return;
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 121 || Gvar.var_83[Gvar.var_673].Var0 == 126) {
            if (Gvar.var_1198 == 1) {
                Adap.gcopy(3, 360, 240, 40, 40);
            }
            if (Gvar.var_1198 == 2) {
                Adap.gcopy(3, 400, 240, 40, 40);
            }
            if (Gvar.var_1198 == 3) {
                Adap.gcopy(3, 440, 240, 40, 40);
            }
            return;
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 15) {
            if (Gvar.var_1198 == 1) {
                Adap.gcopy(3, 280, 280, 40, 40);
            }
            if (Gvar.var_1198 == 2) {
                Adap.gcopy(3, 320, 280, 40, 40);
            }
            if (Gvar.var_1198 == 3) {
                Adap.gcopy(3, 360, 280, 40, 40);
            }
            return;
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 141) {
            return;
        }
        if (Gvar.var_1198 == 1) {
            Adap.gcopy(3, 0, 320, 40, 40);
        }
        if (Gvar.var_1198 == 2) {
            Adap.gcopy(3, 40, 320, 40, 40);
        }
        if (Gvar.var_1198 == 3) {
            Adap.gcopy(3, 80, 320, 40, 40);
        }
        return;
}

export {func582}
