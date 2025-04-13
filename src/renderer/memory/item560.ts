import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 560 仗助のdiscの効果
async function item560(this: any) {
    Gvar.var_1936 = 0 // アイテム毎の自動メッセージ非表示(item_message非表示)
    await Func.setMessage("プッツ―――――ン！", "", 7, true, false, false);
    await Func.AutoDraw(12);
    Gvar.var_601 = Adap.rnd(4);
    if (Gvar.var_601 == 0) {
        await Func.setMessage("ｱﾝｼﾞｪﾛに けなされた事を思い出した", "", 7, true, false, false);
    }
    if (Gvar.var_601 == 1) {
        await Func.setMessage("不良に けなされた事を思い出した", "", 7, true, false, false);
    }
    if (Gvar.var_601 == 2) {
        await Func.setMessage("承太郎に けなされた事を思い出した", "", 7, true, false, false);
    }
    if (Gvar.var_601 == 3) {
        await Func.setMessage("露伴に けなされた事を思い出した", "", 7, true, false, false);
    }
    if (Gvar.var_199 == 1) {
        Gvar.var_199 = 4;
    }
    if (Gvar.var_199 == 7) {
        Gvar.var_199 = 8;
    }
    if (Gvar.var_199 == 9) {
        Gvar.var_199 = 6;
    }
    if (Gvar.var_199 == 3) {
        Gvar.var_199 = 2;
    }
    Gvar.var_139 = 1;
    return;
}

export {item560}
