/**
 * func417 — func417 不明
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func417(this: any) {
        Adap.dbgprt(417);
        Gvar.payment_amount = 0;
        if (Gvar.var_1850 == 1) {
            Gvar.belongings_item_list = Gvar.var_1846;
            await Func.func492(); // アイテムリスト呼び出し
            Gvar.var_482 = 0;
            Gvar.var_482 = (Gvar.var_1837 + Gvar.var_1835) * 50;
            if (Gvar.var_1846 != 800) {
                Gvar.var_482 = Gvar.var_1838 * 100 + Gvar.var_482;
            }
            if (Gvar.var_1836 > 1) {
                Gvar.var_482 = Gvar.var_1836 * 500 + Gvar.var_482;
            }
            Gvar.payment_amount = Gvar.payment_amount + Gvar.buying_price + Gvar.var_482;
        }

        if (Gvar.var_1846 >= 800 && Gvar.var_1846 < 900) {
            Gvar.var_484 = 1;
            Gvar.var_485 = Gvar.var_1848;
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
                }
                Gvar.var_484 = Gvar.var_484 + 1;
            }
        }
        Gvar.count_buying_price = Gvar.count_buying_price + Gvar.payment_amount;
        if (Gvar.var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
            await Func.func430();
        }
        await Func.func433(); // アイテム配列(所持アイテム)初期化関数
        await Func.AutoDraw(3);
        Gvar.var_1220 = 0;
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {func417}
