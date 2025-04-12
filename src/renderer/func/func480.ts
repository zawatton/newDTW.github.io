import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func480(this: any) {
        Adap.dbgprt(480);
        Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
        await Func.func426();
        await Func.func427();
        await Func.func428();
        Gvar.var_2116 = 0;
        if (Gvar.var_553 == Gvar.var_225 && Gvar.var_896 != 0) {
            Gvar.var_2116 = 1;
        }
        if (Gvar.var_554 == Gvar.var_225 && Gvar.var_897 != 0) {
            Gvar.var_2116 = 1;
        }
        if (Gvar.var_555 == Gvar.var_225 && Gvar.var_898 != 0) {
            Gvar.var_2116 = 1;
        }
        if (Gvar.var_2116 == 1) {
            await Func.setMessage1("呪われていて外せない！", "", 7, true, false, false);
            await Func.AutoDraw(3);
            Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
            if (Gvar.var_2005 == 1) {
                await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                return;
            }
            await Func.func463();
            return;
        }
        Gvar.var_221 = 0;
        Gvar.var_2005 = 0;
        Gvar.var_814 = Gvar.var_233[Gvar.var_225].Var0;
        Gvar.var_1662 = Gvar.var_233[Gvar.var_225].Var3;
        Gvar.item_modified_value = Gvar.var_233[Gvar.var_225].Var4;
        Gvar.free_space_value = Gvar.var_233[Gvar.var_225].Var5;
        Gvar.var_1671 = Gvar.var_233[Gvar.var_225].Var6;
        Gvar.var_1663 = Gvar.var_233[Gvar.var_225].Var7;
        Gvar.var_2117 = Gvar.var_233[Gvar.var_225].Var8;
        Gvar.var_1672 = Gvar.var_233[Gvar.var_225].Var11;
        Gvar.var_805 = Gvar.var_233[Gvar.var_225].Var12;
        Gvar.var_1660 = Gvar.var_233[Gvar.var_225].Var13;
        Gvar.var_1661 = Gvar.var_233[Gvar.var_225].Var14;
        Gvar.var_1673 = Gvar.var_233[Gvar.var_225].Var15;
        Gvar.var_1674 = Gvar.var_233[Gvar.var_225].Var16;
        Gvar.var_1675 = Gvar.var_233[Gvar.var_225].Var17;
        Gvar.var_1666 = Gvar.var_233[Gvar.var_225].Var18;
        Gvar.var_810 = Gvar.var_233[Gvar.var_225].Var19;
        Gvar.var_815 = Gvar.var_233[Gvar.var_225].Var20;
        Gvar.var_816 = Gvar.var_233[Gvar.var_225].Var21;
        Gvar.var_817 = Gvar.var_233[Gvar.var_225].Var22;
        Gvar.var_818 = Gvar.var_233[Gvar.var_225].Var23;
        Gvar.var_819 = Gvar.var_233[Gvar.var_225].Var24;
        Gvar.var_820 = Gvar.var_233[Gvar.var_225].Var25;
        Gvar.var_821 = Gvar.var_233[Gvar.var_225].Var26;
        Gvar.var_822 = Gvar.var_233[Gvar.var_225].Var27;
        Gvar.var_823 = Gvar.var_233[Gvar.var_225].Var28;
        Gvar.var_824 = Gvar.var_233[Gvar.var_225].Var29;
        Gvar.var_233[Gvar.var_225].Var0 = Gvar.var_78[Gvar.var_2044].Var0;
        Gvar.var_233[Gvar.var_225].Var3 = Gvar.var_78[Gvar.var_2044].Var3;
        Gvar.var_233[Gvar.var_225].Var4 = Gvar.var_78[Gvar.var_2044].Var4;
        Gvar.var_233[Gvar.var_225].Var5 = Gvar.var_78[Gvar.var_2044].Var5;
        Gvar.var_233[Gvar.var_225].Var6 = Gvar.var_78[Gvar.var_2044].Var6;
        Gvar.var_233[Gvar.var_225].Var7 = Gvar.var_78[Gvar.var_2044].Var7;
        Gvar.var_233[Gvar.var_225].Var8 = Gvar.var_78[Gvar.var_2044].Var8;
        Gvar.var_233[Gvar.var_225].Var11 = Gvar.var_78[Gvar.var_2044].Var11;
        Gvar.var_233[Gvar.var_225].Var12 = Gvar.var_78[Gvar.var_2044].Var12;
        Gvar.var_233[Gvar.var_225].Var13 = Gvar.var_78[Gvar.var_2044].Var13;
        Gvar.var_233[Gvar.var_225].Var14 = Gvar.var_78[Gvar.var_2044].Var14;
        Gvar.var_233[Gvar.var_225].Var15 = Gvar.var_78[Gvar.var_2044].Var15;
        Gvar.var_233[Gvar.var_225].Var16 = Gvar.var_78[Gvar.var_2044].Var16;
        Gvar.var_233[Gvar.var_225].Var17 = Gvar.var_78[Gvar.var_2044].Var17;
        Gvar.var_233[Gvar.var_225].Var18 = Gvar.var_78[Gvar.var_2044].Var18;
        Gvar.var_233[Gvar.var_225].Var19 = Gvar.var_78[Gvar.var_2044].Var19;
        Gvar.var_233[Gvar.var_225].Var20 = Gvar.var_78[Gvar.var_2044].Var20;
        Gvar.var_233[Gvar.var_225].Var21 = Gvar.var_78[Gvar.var_2044].Var21;
        Gvar.var_233[Gvar.var_225].Var22 = Gvar.var_78[Gvar.var_2044].Var22;
        Gvar.var_233[Gvar.var_225].Var23 = Gvar.var_78[Gvar.var_2044].Var23;
        Gvar.var_233[Gvar.var_225].Var24 = Gvar.var_78[Gvar.var_2044].Var24;
        Gvar.var_233[Gvar.var_225].Var25 = Gvar.var_78[Gvar.var_2044].Var25;
        Gvar.var_233[Gvar.var_225].Var26 = Gvar.var_78[Gvar.var_2044].Var26;
        Gvar.var_233[Gvar.var_225].Var27 = Gvar.var_78[Gvar.var_2044].Var27;
        Gvar.var_233[Gvar.var_225].Var28 = Gvar.var_78[Gvar.var_2044].Var28;
        Gvar.var_233[Gvar.var_225].Var29 = Gvar.var_78[Gvar.var_2044].Var29;
        Gvar.var_78[Gvar.var_2044].Var0 = Gvar.var_814;
        Gvar.var_78[Gvar.var_2044].Var3 = Gvar.var_1662;
        Gvar.var_78[Gvar.var_2044].Var4 = Gvar.item_modified_value;
        Gvar.var_78[Gvar.var_2044].Var5 = Gvar.free_space_value;
        Gvar.var_78[Gvar.var_2044].Var6 = Gvar.var_1671;
        Gvar.var_78[Gvar.var_2044].Var7 = Gvar.var_1663;
        Gvar.var_78[Gvar.var_2044].Var8 = Gvar.var_2117;
        Gvar.var_78[Gvar.var_2044].Var11 = Gvar.var_1672;
        Gvar.var_78[Gvar.var_2044].Var12 = Gvar.var_805;
        Gvar.var_78[Gvar.var_2044].Var13 = Gvar.var_1660;
        Gvar.var_78[Gvar.var_2044].Var14 = Gvar.var_1661;
        Gvar.var_78[Gvar.var_2044].Var15 = Gvar.var_1673;
        Gvar.var_78[Gvar.var_2044].Var16 = Gvar.var_1674;
        Gvar.var_78[Gvar.var_2044].Var17 = Gvar.var_1675;
        Gvar.var_78[Gvar.var_2044].Var18 = Gvar.var_1666;
        Gvar.var_78[Gvar.var_2044].Var19 = Gvar.var_810;
        Gvar.var_78[Gvar.var_2044].Var20 = Gvar.var_815;
        Gvar.var_78[Gvar.var_2044].Var21 = Gvar.var_816;
        Gvar.var_78[Gvar.var_2044].Var22 = Gvar.var_817;
        Gvar.var_78[Gvar.var_2044].Var23 = Gvar.var_818;
        Gvar.var_78[Gvar.var_2044].Var24 = Gvar.var_819;
        Gvar.var_78[Gvar.var_2044].Var25 = Gvar.var_820;
        Gvar.var_78[Gvar.var_2044].Var26 = Gvar.var_821;
        Gvar.var_78[Gvar.var_2044].Var27 = Gvar.var_822;
        Gvar.var_78[Gvar.var_2044].Var28 = Gvar.var_823;
        Gvar.var_78[Gvar.var_2044].Var29 = Gvar.var_824;
        Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
        Gvar.disc_rarity = Gvar.var_233[Gvar.var_225].Var13;
        await Func.func492(); // アイテムリスト呼び出し
        Gvar.var_2118 = Gvar.item_name;
        if (Gvar.var_233[Gvar.var_225].Var0 == 1) {
            Gvar.var_2118 = "" + Gvar.var_233[Gvar.var_225].Var13 + "G";
        }
        Gvar.belongings_item_list = Gvar.var_78[Gvar.var_2044].Var0;
        Gvar.disc_rarity = Gvar.var_78[Gvar.var_2044].Var13;
        await Func.func492(); // アイテムリスト呼び出し
        Gvar.var_2119 = Gvar.item_name;
        if (Gvar.var_78[Gvar.var_2044].Var0 == 1) {
            Gvar.var_2119 = "" + Gvar.var_78[Gvar.var_2044].Var13 + "G";
        }
        Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
        Gvar.var_2005 = 0;
        await Func.func430();
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        await Func.setMessage1("足元の" + Gvar.var_2118 + "と", "" + Gvar.var_2119 + "を交換した。", 7, true, false, false);
        await Func.AutoDraw(3);
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {func480}
