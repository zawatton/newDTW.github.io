/**
 * item654 — No = 654 アイテム「ヤドクガエル」を使用した時の効果
 *
 * (org原典: newDTW_item(食料))
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 654 アイテム「ヤドクガエル」を使用した時の効果
async function item654(this: any) {
    await Func.AutoDraw(20);
    Gvar.var_1936 = 0 // アイテム毎の自動メッセージ非表示(item_message非表示)
    Gvar.var_1214 = 0;
    Gvar.var_1940 = Gvar.var_199;
    Gvar.var_199 = 2;
    Gvar.var_389 = 2;
    Gvar.var_747 = 1;
    Gvar.var_209 = 20;
    Gvar.var_360 = 0;
    Gvar.var_350 = Gvar.var_350 + 10;
    await Func.setMessage("８０のダメージを受けた！", "", 7, false, false, false);
    if (Gvar.var_350 > Gvar.var_567) {
        Gvar.var_350 = Gvar.var_567;
    }
    Gvar.var_211 = Gvar.var_211 - 80;
    if (Gvar.var_211 <= 0) {
        Gvar.var_211 = 0;
    }
    Gvar.var_208 = Gvar.var_208 + 80;
    if (Gvar.var_211 <= 0) {
        Gvar.var_211 = 0;
        Gvar.var_356 = 260;
    }
    await Func.AutoDraw(20);
    Gvar.var_389 = 0;
    Gvar.var_199 = Gvar.var_1940;
    return;
}

export {item654}
