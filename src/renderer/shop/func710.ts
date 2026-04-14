/**
 * func710 — func710 不明
 *
 * (org原典: newDTW_func7)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 旧 func710
async function func710(this: any) {
        Adap.dbgprt(710);
        Gvar.var_3118 = 1;
        Gvar.var_515 = 19;
        Gvar.var_516 = 45;
        await Func.func711();
}

export {func710}
