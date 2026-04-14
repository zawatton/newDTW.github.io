/**
 * func0850 — func850 不明
 *
 * (org原典: newDTW_func8)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func0850(this: any) {
    Adap.dbgprt(850);
    Gvar.var_223 = 0;
    Gvar.var_271 = 1;
    for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
        await Func.func0354();
    }
    Gvar.var_846 = 1;
    await Func.func0096();
    Gvar.var_2552 = 1;
    Gvar.var_523 = Gvar.var_378;
    Gvar.var_524 = Gvar.var_379;
    await Func.func0697();
    Gvar.var_2552 = 0;
    Gvar.var_378 = Gvar.var_2118;
    Gvar.var_379 = Gvar.var_2119;
    Gvar.var_271 = 0;
    Gvar.var_242 = 1;
    await Func.func0019(); return;
}

export { func0850 }
