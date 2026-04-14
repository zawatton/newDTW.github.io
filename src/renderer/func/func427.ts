/**
 * func427 — func427 不明
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func427(this: any) {
        Adap.dbgprt(427);
        Gvar.var_1956 = 1;
        Gvar.var_554 = 0;
        for (let cnt1 = 0; cnt1 < Gvar.var_224; ++cnt1) {
            if (Gvar.var_477[Gvar.var_1956] == 1) {
                Gvar.var_554 = Gvar.var_1956;
            }
            Gvar.var_1956 = Gvar.var_1956 + 1;
        }
        return;
}

export {func427}
