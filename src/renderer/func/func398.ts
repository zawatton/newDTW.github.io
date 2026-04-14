/**
 * func398 — func398 不明
 *
 * (org原典: newDTW_func3)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func398(this: any) {
        Adap.dbgprt(398);
        Gvar.disp_item_name = "error";
        if (Gvar.belongings_item_list == 1) {
            Gvar.disp_item_name = "" + Gvar.var_78[Gvar.var_321].Var13 + " G";
        }
        // 装備discの表示
        if (Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 400) {
            if (Gvar.var_78[Gvar.var_321].Var14 == 0) {
                Gvar.disp_item_name = Gvar.item_name;
            }
            if (Gvar.var_78[Gvar.var_321].Var14 == 1) {
                if (Gvar.var_78[Gvar.var_321].Var4 == 0 && Gvar.var_78[Gvar.var_321].Var19 <= 1) {
                    Gvar.disp_item_name = Gvar.item_name;
                }
                if (Gvar.var_78[Gvar.var_321].Var4 == 0 && Gvar.var_78[Gvar.var_321].Var19 > 1) {
                    Gvar.disp_item_name = "" + Gvar.item_name + " ★" + Gvar.var_78[Gvar.var_321].Var19;
                }
                if (Gvar.var_78[Gvar.var_321].Var4 > 0 && Gvar.var_78[Gvar.var_321].Var19 <= 1) {
                    Gvar.disp_item_name = "" + Gvar.item_name + "+" + Gvar.var_78[Gvar.var_321].Var4;
                }
                if (Gvar.var_78[Gvar.var_321].Var4 > 0 && Gvar.var_78[Gvar.var_321].Var19 > 1) {
                    Gvar.disp_item_name = "" + Gvar.item_name + "+" + Gvar.var_78[Gvar.var_321].Var4 + " ★" + Gvar.var_78[Gvar.var_321].Var19;
                }
            }
        }
        if (Gvar.belongings_item_list >= 400 && Gvar.belongings_item_list < 500) {
            Gvar.disp_item_name = "" + Gvar.item_name + "(" + Gvar.var_78[Gvar.var_321].Var3 + ")";
        }
        if (Gvar.belongings_item_list >= 500 && Gvar.belongings_item_list < 800) {
            Gvar.disp_item_name = Gvar.item_name;
        }
        if (Gvar.belongings_item_list >= 800 && Gvar.belongings_item_list < 900) {
            Gvar.disp_item_name = "" + Gvar.item_name + "(" + Gvar.var_78[Gvar.var_321].Var7 + ")";
        }
        if (Gvar.belongings_item_list >= 900 && Gvar.belongings_item_list < 1000) {
            Gvar.disp_item_name = Gvar.item_name;
        }
        return;
}

export {func398}
