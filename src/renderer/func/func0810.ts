/**
 * func0810 — func810 ヴェネチアホテルに設置してあるPC設定
 *
 * ヴェネチアホテルや亀、酒場の設定
 *
 * (org原典: newDTW_dungeon0 / DONE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'

async function func0810(this: any) {
    Adap.dbgprt(810);
    Gvar.var_271 = 0;
    Gvar.var_1812 = Gvar.var_345;
    await Func.func0099();
    Gvar.var_283 = "";
    Gvar.var_284 = "";
    Gvar.var_285 = "";
    Gvar.var_286 = "";
    Gvar.var_287 = "";
    Gvar.var_288 = "";
    Gvar.var_289 = 0;
    Gvar.var_283 = Gvar.var_286;
    Gvar.var_284 = Gvar.var_287;
    Gvar.var_286 = "ﾑｰﾃﾞｨ･ﾌﾞﾙｰｽﾞ";
    Gvar.var_287 = "「DISCをリプレイするのか？」";
    Gvar.var_223 = 1;
    Gvar.var_290 = 0;
    Gvar.var_24 = Gvar.var_24[1];
    Gvar.var_25 = Gvar.var_25[1];
    Gvar.var_26 = Gvar.var_26[1];
    await Func.func0050();
    await Func.func0053();
    await Func.func0358();
    Adap.DSPLAY(212);
    await Func.func0054();
    Gvar.var_273 = 19;
    Gvar.var_274 = 45;
    Gvar.var_627 = 1;
    Gvar.var_3440 = 1;
    Gvar.var_629 = 1;
    await Func.func0898(); return;
}

export { func0810 }
