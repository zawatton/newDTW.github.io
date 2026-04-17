import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'
import { tf } from '../i18n'

// メイド・イン・ヘブンを装備している際の「アイテムが朽ちていく効果」
async function func043(this: any) {
        Adap.dbgprt(43);
        Gvar.var_473 = Adap.rnd(10);
        if (Gvar.var_473 != 0) {
            return;
        }
        Gvar.var_474 = 0;
        for (let cnt1 = 0; cnt1 < 50; ++cnt1) {
            Gvar.var_475 = Adap.rnd(Gvar.var_224); // 持っているアイテムの中から乱数を使ってランダムで朽ちさせる？
            Gvar.var_475 = Gvar.var_475 + 1;
            if (Gvar.var_476[Gvar.var_475] == 0 && Gvar.var_477[Gvar.var_475] == 0 && Gvar.var_478[Gvar.var_475] == 0 && Gvar.var_479[Gvar.var_475] == 0) {
                Gvar.var_474 = 1;
                break;
            }
        }
        if (Gvar.var_474 == 0) {
            return;
        }
        Gvar.var_480 = Gvar.var_475;
        Gvar.payment_amount = 0;
        if (Gvar.var_233[Gvar.var_480].Var11 == 1) {
            Gvar.belongings_item_list = Gvar.var_233[Gvar.var_480].Var0;
            await Func.func492(); // アイテムリスト呼び出し
            Gvar.var_482 = 0;
            Gvar.var_482 = (Gvar.var_233[Gvar.var_480].Var3 + Gvar.var_233[Gvar.var_480].Var4) * 50;
            if (Gvar.var_233[Gvar.var_480].Var0 != 800) {
                Gvar.var_482 = Gvar.var_233[Gvar.var_480].Var7 * 100 + Gvar.var_482;
            }
            if (Gvar.var_233[Gvar.var_480].Var19 > 1) {
                Gvar.var_482 = Gvar.var_233[Gvar.var_480].Var19 * 500 + Gvar.var_482;
            }
            Gvar.payment_amount = Gvar.payment_amount + Gvar.buying_price + Gvar.var_482;
            Gvar.count_buying_price = Gvar.count_buying_price + Gvar.payment_amount;
        }
        if (Gvar.var_233[Gvar.var_480].Var0 >= 800 && Gvar.var_233[Gvar.var_480].Var0 < 900) {
            Gvar.var_484 = 1;
            Gvar.var_485 = Gvar.var_233[Gvar.var_480].Var6;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                if (Gvar.var_486[Gvar.var_485][Gvar.var_484][0] > 0 && Gvar.var_486[Gvar.var_485][Gvar.var_484][11] == 1) {
                    Gvar.belongings_item_list = Gvar.var_486[Gvar.var_485][Gvar.var_484][0];
                    await Func.func492(); // アイテムリスト呼び出し
                    Gvar.var_482 = 0;
                    Gvar.var_482 = (Gvar.var_486[Gvar.var_485][Gvar.var_484][3] + Gvar.var_486[Gvar.var_485][Gvar.var_484][4]) * 50;
                    if (Gvar.var_486[Gvar.var_485][Gvar.var_484][19] > 1) {
                        Gvar.var_482 = Gvar.var_486[Gvar.var_485][Gvar.var_484][19] * 500 + Gvar.var_482;
                    }
                    Gvar.payment_amount = Gvar.payment_amount + Gvar.buying_price + Gvar.var_482;
                    Gvar.count_buying_price = Gvar.count_buying_price + Gvar.payment_amount;
                }
                Gvar.var_484 = Gvar.var_484 + 1;
            }
        }
        Gvar.belongings_item_list = Gvar.var_233[Gvar.var_475].Var0;
        Gvar.disc_rarity = Gvar.var_233[Gvar.var_475].Var13;
        Gvar.var_488 = Gvar.var_233[Gvar.var_475].Var0;
        await Func.func492(); // アイテムリスト呼び出し
        Gvar.target_item_name = Gvar.item_name;
        Gvar.var_225 = Gvar.var_475;
        await Func.func433(); // アイテム配列(所持アイテム)初期化関数
        await Music.func100(); // 効果音
        await Func.setMessage(tf("{0}は", Gvar.target_item_name), "朽ち果ててしまった…", 7, false, false, false);
        await Func.AutoDraw(9);
        return;
}

export {func043}
