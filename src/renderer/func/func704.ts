/**
 * func704 — func704 不明
 *
 * (org原典: newDTW_func7)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func704(this: any) {
        Adap.dbgprt(704);
        if (Gvar.var_434 == Gvar.var_66 && Gvar.var_435 > Gvar.var_67) {
            Gvar.var_83[Gvar.var_433].Var5 = 8;
        }
        if (Gvar.var_434 == Gvar.var_66 && Gvar.var_435 < Gvar.var_67) {
            Gvar.var_83[Gvar.var_433].Var5 = 2;
        }
        if (Gvar.var_434 < Gvar.var_66 && Gvar.var_435 == Gvar.var_67) {
            Gvar.var_83[Gvar.var_433].Var5 = 6;
        }
        if (Gvar.var_434 > Gvar.var_66 && Gvar.var_435 == Gvar.var_67) {
            Gvar.var_83[Gvar.var_433].Var5 = 4;
        }
        if (Gvar.var_434 > Gvar.var_66 && Gvar.var_435 > Gvar.var_67) {
            Gvar.var_83[Gvar.var_433].Var5 = 7;
        }
        if (Gvar.var_434 < Gvar.var_66 && Gvar.var_435 > Gvar.var_67) {
            Gvar.var_83[Gvar.var_433].Var5 = 9;
        }
        if (Gvar.var_434 > Gvar.var_66 && Gvar.var_435 < Gvar.var_67) {
            Gvar.var_83[Gvar.var_433].Var5 = 1;
        }
        if (Gvar.var_434 < Gvar.var_66 && Gvar.var_435 < Gvar.var_67) {
            Gvar.var_83[Gvar.var_433].Var5 = 3;
        }
        return;
}

export {func704}
