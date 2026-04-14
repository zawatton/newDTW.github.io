/**
 * func682 — func682 不明
 *
 * (org原典: newDTW_func6)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func682(this: any) {
        Adap.dbgprt(682);
        Gvar.var_3088 = Gvar.var_83[Gvar.var_3072].Var16;
        Gvar.var_3089 = Gvar.var_83[Gvar.var_3072].Var39;
        Gvar.var_3073 = 0;
        if (Gvar.var_3089 <= 1) {
            Gvar.var_3073 = 50 - Gvar.var_3088;
        }
        if (Gvar.var_3089 == 2) {
            Gvar.var_3073 = 200 - Gvar.var_3088;
        }
        if (Gvar.var_3089 == 3) {
            Gvar.var_3073 = 500 - Gvar.var_3088;
        }
        if (Gvar.var_3089 == 4) {
            Gvar.var_3073 = 1000 - Gvar.var_3088;
        }
        if (Gvar.var_3089 == 5) {
            Gvar.var_3073 = 2000 - Gvar.var_3088;
        }
        if (Gvar.var_3089 == 6) {
            Gvar.var_3073 = 4000 - Gvar.var_3088;
        }
        if (Gvar.var_3089 == 7) {
            Gvar.var_3073 = 10000 - Gvar.var_3088;
        }
        if (Gvar.var_3089 == 8) {
            Gvar.var_3073 = 20000 - Gvar.var_3088;
        }
        if (Gvar.var_3089 == 9) {
            Gvar.var_3073 = 40000 - Gvar.var_3088;
        }
        if (Gvar.var_3089 == 10) {
            Gvar.var_3073 = 999999;
        }
        return;
}

export {func682}
