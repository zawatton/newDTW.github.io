/**
 * func0839 — func839 マップ移動やイベント発生フラグ処理
 *
 * newDTW のゲームの根幹となる処理
 *
 * (org原典: newDTW_mainframe)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func0839(this: any) {
    Adap.dbgprt(839);
    await Func.func0099();
    Gvar.var_283 = "";
    Gvar.var_284 = "";
    Gvar.var_285 = "";
    Gvar.var_286 = "";
    Gvar.var_287 = "";
    Gvar.var_288 = "";
    Gvar.var_289 = 0;
    Gvar.var_283 = "おやっ？君が持っているのは";
    Gvar.var_284 = "僕のマンガじゃあないか。";
    Gvar.var_223 = 1;
    Gvar.var_290 = 0;
    Gvar.var_24 = Gvar.var_24[1];
    Gvar.var_25 = Gvar.var_25[1];
    Gvar.var_26 = Gvar.var_26[1];
    await Func.func0050();
    await Func.func0358();
    await Func.func0099();
    Gvar.var_283 = Gvar.var_286;
    Gvar.var_284 = Gvar.var_287;
    Gvar.var_286 = "僕のマンガが好きなのかい？";
    Gvar.var_287 = "【波調が合う】…ってことかな。";
    Gvar.var_223 = 1;
    Gvar.var_290 = 0;
    await Func.func0050();
    await Func.func0053();
    await Func.func0358();
    Gvar.var_223 = 0;
    Gvar.var_1397 = 1;
    Adap.DSPLAY(103);
    Gvar.var_310 = 1;
    Gvar.var_1704 = 21;
    for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
        await Func.func0354();
        Gvar.var_1704++;
    }
    Adap.DSPLAY(118);
    for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
        await Func.func0354();
    }
    Gvar.var_1397 = 0;
    Gvar.var_310 = 0;
    Gvar.var_1704 = 0;
    await Func.func0099();
    Gvar.var_283 = "";
    Gvar.var_284 = "";
    Gvar.var_285 = "";
    Gvar.var_286 = "";
    Gvar.var_287 = "";
    Gvar.var_288 = "";
    Gvar.var_289 = 0;
    Gvar.var_283 = "冗談！冗談だよ";
    Gvar.var_284 = "嫌だなあ～";
    Gvar.var_223 = 1;
    Gvar.var_290 = 0;
    Gvar.var_24 = Gvar.var_24[1];
    Gvar.var_25 = Gvar.var_25[1];
    Gvar.var_26 = Gvar.var_26[1];
    await Func.func0050();
    await Func.func0358();
    await Func.func0054();
    Gvar.var_223 = 0;
    await Func.func0009(); return;
}

export { func0839 }
