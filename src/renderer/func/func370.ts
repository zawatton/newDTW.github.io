/**
 * func370 — func370 不明
 *
 * (org原典: newDTW_func3)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func370(this: any) {
        Adap.dbgprt(370);
        Gvar.var_1677 = 1;
        Gvar.var_813 = Adap.sdim(64, 20, Gvar.length3 = null)
        Gvar.var_811 = Adap.dim(100);
        Gvar.var_825 = 20;
        Gvar.var_826 = 1;
        Gvar.var_827 = 0;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            Gvar.var_813[Gvar.var_826] = "";
            if (Gvar.var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                Gvar.belongings_item_list = Gvar.var_233[Gvar.var_1670]["Var" + Gvar.var_825];
            }
            if (Gvar.var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
                Gvar.belongings_item_list = Gvar.var_486[Gvar.var_682][Gvar.var_1670][Gvar.var_825];
            }
            if (Gvar.belongings_item_list == 104) {
                Gvar.var_827 = 1;
            }
            if (Gvar.var_1208 == 2) {
                Gvar.var_827 = 0;
            }
            await Func.func492(); // アイテムリスト呼び出し
            if (Gvar.item_ability_description == "") {
                Gvar.var_826 = Gvar.var_826 - 1;
                break;
            }
            Gvar.var_813[Gvar.var_826] = "" + Gvar.item_ability_description;
            Gvar.var_811[Gvar.var_826] = Gvar.belongings_item_list;
            Gvar.var_826 = Gvar.var_826 + 1;
            Gvar.var_825 = Gvar.var_825 + 1;
        }
        if (Gvar.var_827 == 1) {
            Gvar.var_826 = Gvar.var_826 + 1;
            Gvar.var_813[Gvar.var_826] = "こわれるぞ。";
            Gvar.var_811[Gvar.var_826] = 199;
            Gvar.var_810 = Gvar.var_810 + 1;
        }
        Gvar.var_1677 = 0;
        return;
}

export {func370}
