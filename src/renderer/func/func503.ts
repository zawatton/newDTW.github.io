/**
 * func503 — func503 未識別状態のアイテムの説明を見た時のメッセージ処理
 *
 * (org原典: newDTW_func5)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func503(this: any) {
        Adap.dbgprt(503);
        if (Gvar.belongings_item_list >= 800 && Gvar.belongings_item_list < 900) {
            Gvar.effects_message = "なにかヤバイものだ";
            Gvar.item_ability_description = "";
            Gvar.item_description1 = "[ヤバイもの]";
            Gvar.var_2248 = 0;
            Gvar.var_2249 = 130;
            for (let cnt2 = 0; cnt2 < 15; ++cnt2) {
                if (Gvar.var_862[Gvar.belongings_item_list][1] == Gvar.var_2248) {
                    Gvar.item_name = "" + Gvar.var_1066[Gvar.var_2249];
                }
                Gvar.var_2248++;
                Gvar.var_2249++;
            }
            return;
        }
        if (Gvar.belongings_item_list >= 500 && Gvar.belongings_item_list < 600) {
            Gvar.effects_message = "未識別のDISCだ";
            Gvar.item_ability_description = "";
            Gvar.item_description1 = "[消耗DISC]";
            Gvar.var_2250 = "のDISC";
            if (Gvar.var_862[Gvar.belongings_item_list][2] >= 1) {
                Gvar.var_2250 = "";
            }
        }
        if (Gvar.belongings_item_list < 400) {
            Gvar.effects_message = "未識別のDISCだ";
            Gvar.item_ability_description = "";
            Gvar.item_description1 = "[装備DISC]";
            Gvar.var_2250 = "の装備DISC";
            if (Gvar.var_862[Gvar.belongings_item_list][2] >= 1) {
                Gvar.var_2250 = "";
            }
        }
        Gvar.var_2248 = 0;
        for (let cnt1 = 0; cnt1 < 112; ++cnt1) {
            if (Gvar.var_862[Gvar.belongings_item_list][1] == Gvar.var_2248) {
                Gvar.item_name = "" + Gvar.var_1066[Gvar.var_2248] + "" + Gvar.var_2250;
            }
            Gvar.var_2248++;
        }
        return;
}

export {func503}
