/**
 * func0815 — func815 不明
 *
 * ヴェネチアホテルや亀、酒場の設定
 *
 * (org原典: newDTW_dungeon0 / DONE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'

async function func0815(this: any) {
    Adap.dbgprt(815);
    await Func.func0099();
    Gvar.var_283 = Gvar.var_286;
    Gvar.var_284 = Gvar.var_287;
    Gvar.var_286 = "グッド！";
    Gvar.var_287 = "";
    Gvar.var_223 = 1;
    Gvar.var_290 = 0;
    await Func.func0050();
    await Func.func0053();
    await Func.func0358();
    Gvar.var_1095 = 1;
    await Func.func0054();
    Gvar.var_223 = 0;
    await Func.func0995();
    await Func.func0009(); return;
}

export { func0815 }
