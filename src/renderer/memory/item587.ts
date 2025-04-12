import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 587 吉良吉影のdiscの効果
async function item587(this: any) {
    Gvar.var_1936 = 0 // アイテム毎の自動メッセージ非表示(item_message非表示)
    await Func.AutoDraw(12);
    Gvar.var_1264 = 0;
    Gvar.var_2206 = 1;
    Gvar.var_2207 = 0;
    for (let cnt2 = 0; cnt2 < Gvar.var_224; ++cnt2) {
        if (Gvar.var_233[Gvar.var_2206].Var15 == 2) {
            Gvar.var_233[Gvar.var_2206].Var15 = 0;
            Gvar.var_2207 = 1;
            await Func.setMessage1("爆弾が解除された。", "", 7, true, true, true);
        }
        Gvar.var_2206 = Gvar.var_2206 + 1;
    }
    if (Gvar.var_2207 == 0) {
        Gvar.var_474 = 0;
        for (let cnt3 = 0; cnt3 < 50; ++cnt3) {
            Gvar.var_475 = Adap.rnd(Gvar.var_224);
            Gvar.var_475 = Gvar.var_475 + 1;
            if (Gvar.var_233[Gvar.var_475].Var0 >= 500 && Gvar.var_233[Gvar.var_475].Var0 < 800 && Gvar.var_233[Gvar.var_475].Var15 == 0) {
                Gvar.var_474 = 1;
                break;
            }
            if (Gvar.var_233[Gvar.var_475].Var0 >= 900 && Gvar.var_233[Gvar.var_475].Var15 == 0) {
                Gvar.var_474 = 1;
                break;
            }
        }
        if (Gvar.var_474 == 1) {
            Gvar.var_233[Gvar.var_475].Var15 = 2;
        }
        await Func.setMessage1("何かのｱｲﾃﾑが爆弾になったかも…", "", 7, true, true, true);
        await Func.setMessage1("う～む  どうだったかな……？", "自信がない…", 7, false, false, false);
    }
    return;
}

export {item587}
