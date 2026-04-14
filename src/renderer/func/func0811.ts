/**
 * func0811 — func811 ヴェネチアホテルに設置してあるPC設定
 *
 * ヴェネチアホテルや亀、酒場の設定
 *
 * (org原典: newDTW_dungeon0 / DONE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'

async function func0811(this: any) {
    Adap.dbgprt(811);
    Gvar.var_1797 = 1;
    Gvar.var_1324 = 1;
    Gvar.var_1791 = 19;
    Gvar.var_1792 = 45;
    Gvar.var_1793 = 1;
    await Func.func0382(); return;
}

export { func0811 }
