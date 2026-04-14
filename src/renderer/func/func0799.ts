/**
 * func0799 — func799 口座へ入金、口座から出金した時の表示
 *
 * ヴェネチアホテルや亀、酒場の設定
 *
 * (org原典: newDTW_dungeon0 / DONE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'

async function func0799(this: any) {
    Adap.dbgprt(799);
    Gvar.var_271 = 0;
    await Func.func0099();
    Gvar.var_283 = "";
    Gvar.var_284 = "";
    Gvar.var_285 = "";
    Gvar.var_286 = "";
    Gvar.var_287 = "";
    Gvar.var_288 = "";
    Gvar.var_289 = 0;
    Gvar.var_283 = "ｽｸｱｰﾛ「こんな・・・";
    Gvar.var_284 = "　　　　圧倒的な精神力・・・・」";
    Gvar.var_24 = Gvar.var_24[1];
    Gvar.var_25 = Gvar.var_25[1];
    Gvar.var_26 = Gvar.var_26[1];
    Gvar.var_223 = 1;
    Gvar.var_290 = 39;
    await Func.func0050();
    await Func.func0358();
    await Func.func0099();
    Gvar.var_283 = Gvar.var_286;
    Gvar.var_284 = Gvar.var_287;
    Gvar.var_286 = "ｽｸｱｰﾛ「まるで希望があるかのような";
    Gvar.var_287 = "　　　精神力は一体？」";
    Gvar.var_223 = 1;
    Gvar.var_290 = 0;
    await Func.func0050();
    await Func.func0053();
    await Func.func0358();
    await Func.func0054();
    Gvar.var_223 = 0;
    await Func.func0009(); return;
}

export { func0799 }
