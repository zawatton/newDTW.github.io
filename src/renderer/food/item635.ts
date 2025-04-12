import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 635 アイテム「焦げた料理」を使用した時の効果
async function item635(this: any) {
    Gvar.var_360 = 0;
    Gvar.var_1936 = 0 // アイテム毎の自動メッセージ非表示(item_message非表示)
    if (Gvar.var_350 == Gvar.var_567) {
        Gvar.var_567 = Gvar.var_567 + 1;
        if (Gvar.var_567 > 999) {
            Gvar.var_567 = 999;
        }
    }
    Gvar.var_350 = Gvar.var_350 + 10;
    if (Gvar.var_350 > Gvar.var_567) {
        Gvar.var_350 = Gvar.var_567;
    }
    await Func.setMessage1("焦げてて食べられる部分が無い…", "", 7, false, false, false);
    if (Gvar.var_350 == Gvar.var_567) {
        await Func.setMessage1("お腹がいっぱいになった。", "", 7, false, false, false);
    }
    return;
}

export {item635}
