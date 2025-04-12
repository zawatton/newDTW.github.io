import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 604 アイテム「ポルポのピッツァ」を使用した時の効果
async function item604(this: any) {
    Gvar.var_360 = 0;
    Gvar.var_1936 = 0 // アイテム毎の自動メッセージ非表示(item_message非表示)
    Gvar.var_567 = Gvar.var_567 + 10;
    if (Gvar.var_567 > 999) {
        Gvar.var_567 = 999;
    }
    Gvar.var_350 = Gvar.var_567;
    await Func.setMessage1("最大満腹度が" + Gvar.var_567 + "になった。", "", 7, false, false, false);
    if (Gvar.equip_disc[396] == 0) {
        if (Gvar.var_157 == 0) { // Gvar.var_157 倍速移動フラグOFFであれば
            Gvar.var_133 = 1;
            Gvar.var_397 = 0;
        }
        if (Gvar.var_157 != 0) { // Gvar.var_157 倍速移動フラグOFFでなければ
            Gvar.var_157 = 0; // Gvar.var_157 倍速移動フラグOFF
            Gvar.var_158 = 0;
        }
        await Func.setMessage1("最大満腹度が" + Gvar.var_567 + "になった。", "お腹がいっぱいで動きが重い…", 7, false, false, false);
        Adap.DSPLAY(162);
    }
    return;
}

export {item604}
