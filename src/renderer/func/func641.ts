/**
 * func641 — func641 不明
 *
 * (org原典: newDTW_func6)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func641(this: any) {
        Adap.dbgprt(641);
        Gvar.var_2968 = 0;
        Gvar.var_347 = Gvar.var_66;
        Gvar.var_348 = Gvar.var_67;
        if (Gvar.var_199 == 4) {
            Gvar.var_347 = Gvar.var_347 + 1;
        }
        if (Gvar.var_199 == 6) {
            Gvar.var_347 = Gvar.var_347 - 1;
        }
        if (Gvar.var_199 == 8) {
            Gvar.var_348 = Gvar.var_348 + 1;
        }
        if (Gvar.var_199 == 2) {
            Gvar.var_348 = Gvar.var_348 - 1;
        }
        if (Gvar.var_199 == 1) {
            Gvar.var_347 = Gvar.var_347 + 1;
            Gvar.var_348 = Gvar.var_348 - 1;
        }
        if (Gvar.var_199 == 3) {
            Gvar.var_347 = Gvar.var_347 - 1;
            Gvar.var_348 = Gvar.var_348 - 1;
        }
        if (Gvar.var_199 == 7) {
            Gvar.var_347 = Gvar.var_347 + 1;
            Gvar.var_348 = Gvar.var_348 + 1;
        }
        if (Gvar.var_199 == 9) {
            Gvar.var_347 = Gvar.var_347 - 1;
            Gvar.var_348 = Gvar.var_348 + 1;
        }
        if (Gvar.var_82[Gvar.var_347][Gvar.var_348] > 0 && Gvar.var_71[Gvar.var_347][Gvar.var_348] != 0) {
            Gvar.var_2969 = Gvar.var_82[Gvar.var_347][Gvar.var_348];
            if (Gvar.var_83[Gvar.var_2969].Var0 != 53 && Gvar.var_83[Gvar.var_2969].Var0 != 61 && Gvar.var_83[Gvar.var_2969].Var31 != 4 && Gvar.var_83[Gvar.var_2969].Var31 != 5) {
                Gvar.var_2968 = 1;
            }
        }
        if (Gvar.var_2968 == 1) {
            Gvar.var_2970 = 0;
            if (Gvar.var_2970 == 0 && Gvar.var_199 == 4) {
                Gvar.var_199 = 6;
                Gvar.var_2970 = 1;
            }
            if (Gvar.var_2970 == 0 && Gvar.var_199 == 6) {
                Gvar.var_199 = 4;
                Gvar.var_2970 = 1;
            }
            if (Gvar.var_2970 == 0 && Gvar.var_199 == 8) {
                Gvar.var_199 = 2;
                Gvar.var_2970 = 1;
            }
            if (Gvar.var_2970 == 0 && Gvar.var_199 == 2) {
                Gvar.var_199 = 8;
                Gvar.var_2970 = 1;
            }
            if (Gvar.var_2970 == 0 && Gvar.var_199 == 1) {
                Gvar.var_199 = 9;
                Gvar.var_2970 = 1;
            }
            if (Gvar.var_2970 == 0 && Gvar.var_199 == 3) {
                Gvar.var_199 = 7;
                Gvar.var_2970 = 1;
            }
            if (Gvar.var_2970 == 0 && Gvar.var_199 == 7) {
                Gvar.var_199 = 3;
                Gvar.var_2970 = 1;
            }
            if (Gvar.var_2970 == 0 && Gvar.var_199 == 9) {
                Gvar.var_199 = 1;
                Gvar.var_2970 = 1;
            }
        }
        return;
}

export {func641}
