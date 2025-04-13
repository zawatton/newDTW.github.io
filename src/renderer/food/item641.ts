import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 641 アイテム「消し炭」を使用した時の効果
async function item641(this: any) {
    Gvar.var_1936 = 0 // アイテム毎の自動メッセージ非表示(item_message非表示)
    await Func.AutoDraw(10);
    Gvar.var_1214 = 0;
    Gvar.var_389 = 2;
    Adap.DSPLAY(164);
    await Func.AutoDraw(10);
    await Func.setMessage("お腹が痛い…", "", 7, false, false, false);
    Gvar.var_389 = 0;
    Gvar.var_360 = 0;
    Gvar.var_567 = Gvar.var_567 - 10;
    if (Gvar.var_567 < 1) {
        Gvar.var_567 = 1;
    }
    Gvar.var_350 = Gvar.var_350 + 10;
    if (Gvar.var_350 > Gvar.var_567) {
        Gvar.var_350 = Gvar.var_567;
    }
    return;
}

export {item641}
