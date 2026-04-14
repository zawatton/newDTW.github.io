/**
 * func224 — func224 不明
 *
 * (org原典: newDTW_func2)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func224(this: any) {
        Adap.dbgprt(224);
        Gvar.var_932 = 0;
        Gvar.var_955 = 1;
        Gvar.var_956 = 1;
        Gvar.var_957 = 1;
        Gvar.var_958 = Adap.dim(200);
        await Func.func226();
        await Func.func225();
}

export {func224}
