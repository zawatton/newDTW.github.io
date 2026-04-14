/**
 * func559 — func559 不明
 *
 * (org原典: newDTW_func5)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func559(this: any) {
        Adap.dbgprt(559);
        Gvar.var_2503 = 0;
        for (let cnt1 = 0; cnt1 < 100; ++cnt1) {
            Gvar.var_2565 = Adap.rnd(8);
            if (Gvar.var_977[Gvar.var_2565] > 10 && Gvar.var_977[Gvar.var_2565] != 97) {
                Gvar.var_2503 = Gvar.var_977[Gvar.var_2565];
                break;
            }
        }
        if (Gvar.var_2503 == 0) {
            Gvar.var_2503 = 79;
        }
        return;
}

export {func559}
