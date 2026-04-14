/**
 * item648 — No = 648 アイテム「鎌倉カスター」を使用した時の効果
 *
 * (org原典: newDTW_item(食料))
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 648 アイテム「鎌倉カスター」を使用した時の効果
async function item648(this: any) {
    Gvar.var_360 = 0;
    Gvar.var_1936 = 0 // アイテム毎の自動メッセージ非表示(item_message非表示)
    if (Gvar.var_350 == Gvar.var_567) {
        Gvar.var_567 = Gvar.var_567 + 1;
        if (Gvar.var_567 > 999) {
            Gvar.var_567 = 999;
        }
    }
    Gvar.var_350 = Gvar.var_350 + 7;
    if (Gvar.var_350 > Gvar.var_567) {
        Gvar.var_350 = Gvar.var_567;
    }
    if (Gvar.var_350 == Gvar.var_567) {
        await Func.setMessage("お腹がいっぱいになった。", "", 7, false, false, false);
    }
    if (Gvar.var_350 != Gvar.var_567) {
        await Func.setMessage("お腹が少し膨らんだ", "", 7, false, false, false);
    }
    return;
}

export {item648}
