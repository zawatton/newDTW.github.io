/**
 * func0805 — func805 ヴェネチアホテルに設置してあるPC設定
 *
 * ヴェネチアホテルや亀、酒場の設定
 *
 * (org原典: newDTW_dungeon0 / DONE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'

async function func0805(this: any) {
    Adap.dbgprt(805);
    Gvar.var_271 = 0;
    await Func.func0099();
    Gvar.var_283 = "";
    Gvar.var_284 = "";
    Gvar.var_285 = "";
    Gvar.var_286 = "";
    Gvar.var_287 = "";
    Gvar.var_288 = "";
    Gvar.var_289 = 0;
    Gvar.var_3152 = Adap.rnd(8);
    if (Gvar.var_3152 == 0) {
        Gvar.var_283 = "ﾖｰﾖｰﾏｯ「もっとおお わたしを叱ってええ」";
    }
    if (Gvar.var_3152 == 1) {
        Gvar.var_283 = "ﾖｰﾖｰﾏｯ「わたしが おくつを磨きましょう」";
    }
    if (Gvar.var_3152 == 2) {
        Gvar.var_283 = "ﾖｰﾖｰﾏｯ「マンガお読みになられますか」";
    }
    if (Gvar.var_3152 == 3) {
        Gvar.var_283 = "ﾖｰﾖｰﾏｯ「マッチ棒パズルやります？」";
    }
    if (Gvar.var_3152 == 4) {
        Gvar.var_283 = "ﾖｰﾖｰﾏｯ「黄色い花はヘビイチゴ」";
    }
    if (Gvar.var_3152 == 5) {
        Gvar.var_283 = "ﾖｰﾖｰﾏｯ「だんな様あああ～」";
    }
    if (Gvar.var_3152 == 6) {
        Gvar.var_283 = "ﾖｰﾖｰﾏｯ「お逃げになりますか？」";
    }
    if (Gvar.var_3152 == 7) {
        Gvar.var_283 = "ﾖｰﾖｰﾏｯ「おっしゃるとおりに いたします」";
    }
    Gvar.var_3437 = Gvar.var_88[Gvar.var_378][Gvar.var_379];
    if (Gvar.var_89[Gvar.var_3437][0] == 650 || Gvar.var_89[Gvar.var_3437][0] == 651 || Gvar.var_89[Gvar.var_3437][0] == 652 || Gvar.var_89[Gvar.var_3437][0] == 653) {
        Gvar.var_283 = "ﾖｰﾖｰﾏｯ「のっかりてぇ―のっかりてェ―」";
    }
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
    Gvar.var_3438 = 1;
    Gvar.var_629 = 1;
    await Func.func0898(); return;
}

export { func0805 }
