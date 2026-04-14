/**
 * item653 — No = 653 アイテム「超巨大なカエル」を使用した時の効果
 *
 * (org原典: newDTW_item(食料))
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 653 アイテム「超巨大なカエル」を使用した時の効果
async function item653(this: any) {
    Gvar.var_360 = 0;
    Gvar.var_1936 = 0 // アイテム毎の自動メッセージ非表示(item_message非表示)
    if (Gvar.var_211 == Gvar.var_352) {
        Gvar.var_352 = Gvar.var_352 + 5;
        await Func.setMessage("最大HPが５あがった！", "", 7, false, false, false);
        if (Gvar.var_352 > 999) {
            Gvar.var_352 = 999;
            await Func.setMessage("最大HPは限界まで達した！", "", 7, false, false, false);
        }
    }
    if (Gvar.var_211 != Gvar.var_352)  {
        await Func.setMessage("体力が回復した", "", 7, false, false, false);
    }
    Gvar.var_211 = Gvar.var_352;
    Gvar.var_350 = Gvar.var_350 + 20;
    if (Gvar.var_350 > Gvar.var_567) {
        Gvar.var_350 = Gvar.var_567;
    }
    return;
}

export {item653}
