/**
 * func520 — func520 不明
 *
 * (org原典: newDTW_func5)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func520(this: any) {
        Adap.dbgprt(520);
        if (Gvar.var_83[Gvar.var_2194].Var0 == 50) {
            return;
        }
        Gvar.var_83[Gvar.var_2194].Var12 = 6;
        if (Gvar.var_114 == Gvar.var_2194) {
            Gvar.var_114 = 0;
            Gvar.var_463 = 0;
            Gvar.var_464 = 0;
            Gvar.var_461 = 0;
            Gvar.var_462 = 0;
        }
        return;
}

export {func520}
