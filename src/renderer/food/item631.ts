/**
 * item631 — No = 631 アイテム「モッツァレラチーズとトマトのサラダ」を使用した時の効果
 *
 * (org原典: newDTW_item(食料))
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 631 アイテム「モッツァレラチーズとトマトのサラダ」を使用した時の効果
async function item631(this: any) {
    Gvar.var_360 = 0;
    Gvar.var_1936 = 0 // アイテム毎の自動メッセージ非表示(item_message非表示)
    if (Gvar.var_350 == Gvar.var_567) {
        Gvar.var_567 = Gvar.var_567 + 1;
        if (Gvar.var_567 > 999) {
            Gvar.var_567 = 999;
        }
    }
    if (Gvar.var_565 == Gvar.var_566) {
        await Func.setMessage("お腹が膨れた", "", 7, false, false, false);
    }
    Gvar.var_565 = Gvar.var_566;
    Gvar.var_350 = Gvar.var_350 + 10;
    if (Gvar.var_350 > Gvar.var_567) {
        Gvar.var_350 = Gvar.var_567;
    }
    await Func.setMessage("元通り強くなった気がする。", "", 7, false, false, false);
    return;
}

export {item631}
