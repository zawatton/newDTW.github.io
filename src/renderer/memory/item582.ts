import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 582 水が熱湯になるdiscの効果
async function item582(this: any) {
    Gvar.var_1936 = 0 // アイテム毎の自動メッセージ非表示(item_message非表示)
    await Func.AutoDraw(12);
    Gvar.var_1264 = 0;
    Gvar.var_2204 = 0;
    Gvar.var_2205 = 1;
    for (let cnt2 = 0; cnt2 < Gvar.var_224; ++cnt2) {
        if (Gvar.var_233[Gvar.var_2205].Var0 == 401) {
            Gvar.var_2204 = 1;
            Gvar.var_233[Gvar.var_2205].Var3 = 1;
        }
        Gvar.var_2205++;
    }
    if (Gvar.var_2204 == 1) {
        Adap.DSPLAY(175);
        Gvar.var_1584 = 160;
        Gvar.var_1585 = 160;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1583 = 1;
        for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1583++;
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1583 = 0;
        await Func.setMessage("ﾌｰ･ﾌｧｲﾀｰｽﾞのDISCの回数が", "残り １ になってしまった！！", 7, false, false, false);
    }
    if (Gvar.var_2204 != 1) {
        await Func.setMessage("しかし何も起こらなかった…", "", 7, false, false, false);
    }
    return;
}

export {item582}
