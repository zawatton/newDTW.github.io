/**
 * func0835 — func835 NPC ロッコ・バロッコ所長に話しかけた時のメッセージ処理
 *
 * ヴェネチアホテルや亀、酒場の設定
 *
 * (org原典: newDTW_dungeon0 / DONE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func0835(this: any) {
    Adap.dbgprt(835);
    Adap.DSPLAY(212);
    Gvar.var_283 = "";
    Gvar.var_284 = "";
    Gvar.var_285 = "";
    Gvar.var_286 = "";
    Gvar.var_287 = "";
    Gvar.var_288 = "";
    Gvar.var_289 = 0;
    Gvar.var_283 = "露伴に「ﾎﾞﾍﾐｱﾝ･ﾗﾌﾟｿﾃﾞｨのDISC」を";
    Gvar.var_284 = "見せてあげますか？";
    Gvar.var_223 = 1;
    Gvar.var_290 = 0;
    Gvar.var_24 = Gvar.var_24[1];
    Gvar.var_25 = Gvar.var_25[1];
    Gvar.var_26 = Gvar.var_26[1];
    await Func.func0050();
    await Func.func0358();
    await Func.func0054();
    Gvar.var_273 = 19;
    Gvar.var_274 = 45;
    Gvar.var_627 = 1;
    Gvar.var_3452 = 1;
    Gvar.var_629 = 1;
    await Func.func0898(); return;
}

export { func0835 }
