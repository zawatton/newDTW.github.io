/**
 * func423 — func423 不明
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func423(this: any) {
        Adap.dbgprt(423);
        Gvar.var_486[Gvar.var_682][Gvar.var_225][3] = Gvar.var_486[Gvar.var_682][Gvar.var_225][3] - 1;
        if (Gvar.var_486[Gvar.var_682][Gvar.var_225][11] == 1) {
            Gvar.var_106 = 1;
            Gvar.count_buying_price = Gvar.count_buying_price + 50;
        }
        if (Gvar.var_486[Gvar.var_682][Gvar.var_225][0] >= 400 && Gvar.var_486[Gvar.var_682][Gvar.var_225][0] < 500 && Gvar.var_486[Gvar.var_682][Gvar.var_225][3] <= 0) {
            await Func.AutoDraw(10);
            Gvar.belongings_item_list = Gvar.var_486[Gvar.var_682][Gvar.var_225][0];
            await Func.func492(); // アイテムリスト呼び出し
            await Func.setMessage("" + Gvar.item_name + "は",
                                    "ｽﾀﾝﾄﾞﾊﾟﾜｰが尽きて消滅した", 7, false, false, false);
            if (Gvar.var_486[Gvar.var_682][Gvar.var_225][11] == 1) {
                Gvar.var_106 = 1;
                Gvar.count_buying_price = Gvar.count_buying_price + Gvar.buying_price;
            }
            await Func.func433(); // アイテム配列(所持アイテム)初期化関数
        }
        return;
}

export {func423}
