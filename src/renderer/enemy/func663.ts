/**
 * func663 — func663 敵ラバーソウル&ノートリアスBIGの投擲無効化処理
 *
 * (org原典: newDTW_func6)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func663(this: any) {
        Adap.dbgprt(663);
        if (Gvar.var_83[Gvar.var_314].Var12 == 99) {
            Gvar.var_83[Gvar.var_314].Var12 = 0;
        }
        Gvar.var_83[Gvar.var_314].Var13 = 0;
        Gvar.belongings_item_list = Gvar.var_340;
        Gvar.disc_rarity = Gvar.var_1833;
        await Func.func492(); // アイテムリスト呼び出し
        Gvar.var_83[Gvar.var_314].Var21 = 1;
        Gvar.var_772 = 1;
        Gvar.var_1288 = 1;
        Gvar.var_1289 = Gvar.var_340;
        if (Gvar.var_1270 == 0) {
            Gvar.item_name = "弾丸";
        }
        Adap.DSPLAY(123);
        if (Gvar.var_83[Gvar.var_314].Var0 == 9) {
            await Func.setMessage("「" + Gvar.item_name + "喰って", "  パワーアップッ！」", 8, false, false, false);
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 10) {
            await Func.setMessage("" + Gvar.item_name + "を", "吸収している！！", 8, false, false, false);
        }
        Gvar.var_411 = 1;
        for (let cnt1 = 0; cnt1 < 16; ++cnt1) {
            await Func.AutoDraw(2);
            Gvar.var_411 = Gvar.var_411 + 1;
            if (Gvar.var_411 == 4) {
                Gvar.var_411 = 1;
            }
            Gvar.var_300 = 0;
        }
        Gvar.var_772 = 0;
        Gvar.var_1288 = 0;
        Gvar.var_411 = 0;
        Gvar.var_83[Gvar.var_314].Var21 = 0;
        Adap.DSPLAY(142); // レベルアップした時の効果音
        if (Gvar.var_83[Gvar.var_314].Var0 == 9) {
            await Func.setMessage("ﾗﾊﾞｰｿｳﾙはレベルが上がった！", "", 8, false, false, false);
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 10) {
            await Func.setMessage("ﾉﾄｰﾘｱｽBIGはレベルが上がった！", "", 8, false, false, false);
        }
        Gvar.var_83[Gvar.var_314].Var39 = Gvar.var_83[Gvar.var_314].Var39 + 1;
        if (Gvar.var_83[Gvar.var_314].Var39 == 1) {
            Gvar.var_83[Gvar.var_314].Var39 = 2;
        }
        Gvar.enemy_list = Gvar.var_83[Gvar.var_314].Var0; // Gvar.var_83[Gvar.var_314].Var0 は enemy list
        await Func.func626(); // 敵リスト
        Gvar.var_83[Gvar.var_314].Var3 = Math.floor(Gvar.enemy_hp * (Gvar.var_83[Gvar.var_314].Var39 + 10) / 10);
        if (Gvar.var_83[Gvar.var_314].Var3 >= 999) {
            Gvar.var_83[Gvar.var_314].Var3 = 999;
        }
        await Func.AutoDraw(10);
        return;
}

export {func663}
