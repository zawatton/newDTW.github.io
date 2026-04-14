/**
 * func399 — func399 不明
 *
 * (org原典: newDTW_func3)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func399(this: any) {
        Adap.dbgprt(399);
        Gvar.var_1832 = "error";
        if (Gvar.belongings_item_list == 1) {
            Gvar.var_1832 = "" + Gvar.var_1833 + " G";
        }
        if (Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 400) {
            if (Gvar.var_1834 == 0) {
                Gvar.var_1832 = Gvar.item_name;
            }
            if (Gvar.var_1834 == 1) {
                if (Gvar.var_1835 == 0 && Gvar.var_1836 <= 1) {
                    Gvar.var_1832 = Gvar.item_name;
                }
                if (Gvar.var_1835 == 0 && Gvar.var_1836 > 1) {
                    Gvar.var_1832 = "" + Gvar.item_name + " ★" + Gvar.var_1836;
                }
                if (Gvar.var_1835 > 0 && Gvar.var_1836 <= 1) {
                    Gvar.var_1832 = "" + Gvar.item_name + "+" + Gvar.var_1835;
                }
                if (Gvar.var_1835 > 0 && Gvar.var_1836 > 1) {
                    Gvar.var_1832 = "" + Gvar.item_name + "+" + Gvar.var_1835 + " ★" + Gvar.var_1836;
                }
            }
        }
        if (Gvar.belongings_item_list >= 400 && Gvar.belongings_item_list < 500) {
            Gvar.var_1832 = "" + Gvar.item_name + "(" + Gvar.var_1837 + ")";
        }
        if (Gvar.belongings_item_list >= 500 && Gvar.belongings_item_list < 800) {
            Gvar.var_1832 = Gvar.item_name;
        }
        if (Gvar.belongings_item_list >= 800 && Gvar.belongings_item_list < 900) {
            Gvar.var_1832 = "" + Gvar.item_name + "(" + Gvar.var_1838 + ")";
        }
        if (Gvar.belongings_item_list >= 900 && Gvar.belongings_item_list < 1000) {
            Gvar.var_1832 = Gvar.item_name;
        }
        return;
}

export {func399}
