import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 636 アイテム「サンドイッチ」を使用した時の効果
async function item636(this: any) {
    Gvar.var_1936 = 0 // アイテム毎の自動メッセージ非表示(item_message非表示)
    await Func.setMessage("「ピクニックに来ている気分だね…」", "", 7, true, false, false);
    Gvar.var_360 = 0;
    if (Gvar.var_350 == Gvar.var_567) {
        Gvar.var_567 = Gvar.var_567 + 1;
        if (Gvar.var_567 > 999) {
            Gvar.var_567 = 999;
        }
    }
    await Func.setMessage("精神力が１上がった！", "", 7, false, false, false);
    Gvar.var_350 = Gvar.var_567;
    Gvar.var_566 = Gvar.var_566 + 1;
    Gvar.var_565 = Gvar.var_565 + 1;
    if (Gvar.var_566 > 99) {
        Gvar.var_566 = 99;
        Gvar.var_565 = 99;
    }
    return;
}

export {item636}
