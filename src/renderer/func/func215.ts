/**
 * func215 — func215 不明
 *
 * (org原典: newDTW_func2)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func215(this: any) {
        Adap.dbgprt(215);
        Gvar.Y_axis_item_position = 140;
        Gvar.var_925 = 1;
        Gvar.var_926 = 0;
        Gvar.var_927 = 0;
        Gvar.var_928 = 140;
        await Func.func216();
}

export {func215}
