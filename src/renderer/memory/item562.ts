import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 562 康一のdiscの効果
async function item562(this: any) {
    Gvar.var_1936 = 0 // アイテム毎の自動メッセージ非表示(item_message非表示)
    await Func.AutoDraw(12);
    Gvar.var_1264 = 0;
    if (Gvar.current_level >= 99) {
        await Func.setMessage("これ以上成長できなかった…", "", 7, false, false, false);
        return;
    }
    await Func.setMessage("ﾃﾞｨｱﾎﾞﾛはレベルが上がった！", "", 7, true, false, true);
    Adap.DSPLAY(142); // レベルアップした時の効果音
    Gvar.var_568 = Gvar.var_948[Gvar.current_level];
    await Func.func681();
    Gvar.var_2201 = 0;
    await Func.AutoDraw(12);
    await Func.setMessage("「うわオッ！」", "", 7, true, false, true);
    await Func.setMessage("「ひょっとして成長したんですかァ！？", "ぼく！？」", 7, true, true, true);
    return;
}

export {item562}
