/**
 * func437 — func437 不明
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func437(this: any) {
        Adap.dbgprt(437);
        if (Gvar.var_234 == 1) {
            if (Gvar.var_233[0].Var11 == 1) {
                Gvar.belongings_item_list = Gvar.var_233[0].Var0;
                await Func.func492(); // アイテムリスト呼び出し
                Gvar.var_106 = 1;
                Gvar.count_buying_price = Gvar.count_buying_price + Gvar.buying_price;
            }
            await Func.func479();
        }
        if (Gvar.var_1965 == 1) {
            Gvar.var_220 = 1; // 道具画面(メニュー画面/道具)呼び出し確認変数？
            Gvar.var_225 = Gvar.var_1932;
            if (Gvar.var_486[Gvar.var_682][Gvar.var_225][11] == 1) {
                Gvar.belongings_item_list = Gvar.var_486[Gvar.var_682][Gvar.var_225][0];
                await Func.func492(); // アイテムリスト呼び出し
                Gvar.var_106 = 1;
                Gvar.count_buying_price = Gvar.count_buying_price + Gvar.buying_price;
            }
            await Func.func433(); // アイテム配列(所持アイテム)初期化関数
        }
        if (Gvar.var_234 == 0 && Gvar.var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
            Gvar.var_225 = Gvar.var_1932;
            if (Gvar.var_1966 > Gvar.var_225) {
                Gvar.var_1966 = Gvar.var_1966 - 1;
            }
            if (Gvar.var_233[Gvar.var_225].Var11 == 1) {
                Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
                await Func.func492(); // アイテムリスト呼び出し
                Gvar.var_106 = 1;
                Gvar.count_buying_price = Gvar.count_buying_price + Gvar.buying_price;
            }
            await Func.func433(); // アイテム配列(所持アイテム)初期化関数
        }
        Gvar.var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
        Gvar.var_1965 = 0;
        Gvar.var_234 = 0;
        return;
}

export {func437}
