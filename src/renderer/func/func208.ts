/**
 * func208 — func208 不明
 *
 * (org原典: newDTW_func2)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func208(this: any) {
        Adap.dbgprt(208);
        Gvar.Y_axis_item_position = 55;
        Gvar.var_911 = 1;
        await Func.func212();
        await Func.func209();
}

export {func208}
