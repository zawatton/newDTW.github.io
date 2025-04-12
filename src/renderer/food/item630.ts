import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 630  アイテム「娼婦風スパゲッティ」を使用した時の効果
async function item630(this: any) {
    Gvar.var_360 = 0;
    Gvar.var_1936 = 0 // アイテム毎の自動メッセージ非表示(item_message非表示)
    if (Gvar.var_350 == Gvar.var_567) {
        Gvar.var_567 = Gvar.var_567 + 1;
        if (Gvar.var_567 > 999) {
            Gvar.var_567 = 999;
        }
    }
    Gvar.var_350 = Gvar.var_350 + 20;
    if (Gvar.var_350 > Gvar.var_567) {
        Gvar.var_350 = Gvar.var_567;
    }
    Gvar.var_1223 = 1;
    await Func.setMessage1("虫歯が飛び出した！", "", 7, false, false, false);
    return;
}

export {item630}
