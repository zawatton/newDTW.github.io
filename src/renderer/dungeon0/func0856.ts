/**
 * func0856 — func856 不明
 *
 * (org原典: newDTW_func8)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 旧 func801
async function func0856(this: any) {
    Adap.DSPLAY(211);
    Gvar.var_783 = 5;
    await Func.AutoDraw(1);
    Gvar.var_783 = 4;
    await Func.AutoDraw(1);
    Gvar.var_783 = 3;
    await Func.AutoDraw(1);
    Gvar.var_783 = 2;
    await Func.AutoDraw(1);
    Gvar.var_783 = 1;
    await Func.AutoDraw(1);
    Gvar.var_783 = 0;
    return;
}

export {func0856}
