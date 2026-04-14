/**
 * func371 — func371 不明
 *
 * (org原典: newDTW_func3)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func371(this: any) {
        Adap.dbgprt(371);
        if (Gvar.var_833 == 0) {
            Gvar.var_1678 = 1;
        }
        if (Gvar.var_833 >= 1) {
            Gvar.var_1678 = Math.floor(Gvar.var_833 / 10) + 1;
        }
        Gvar.var_1679 = 1;
        await Func.func372();
}

export {func371}
