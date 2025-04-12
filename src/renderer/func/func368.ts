import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func368(this: any) {
        Adap.dbgprt(368);
        Gvar.var_1667 = Gvar.belongings_item_list;
        Gvar.var_1668 = Gvar.var_220;
        Gvar.var_1669 = Gvar.var_231;
        Gvar.var_802 = Gvar.belongings_item_list;
        Gvar.var_1670 = Gvar.var_225;
        await Func.func492(); // アイテムリスト呼び出し

        // アイテム欄を開いていなければ？
        if (Gvar.var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
            Gvar.var_814 = Gvar.var_233[Gvar.var_225].Var0;
            Gvar.var_1662 = Gvar.var_233[Gvar.var_225].Var3;
            Gvar.item_modified_value = Gvar.var_233[Gvar.var_225].Var4;
            Gvar.free_space_value = Gvar.var_233[Gvar.var_225].Var5;
            Gvar.var_1671 = Gvar.var_233[Gvar.var_225].Var6;
            Gvar.var_1663 = Gvar.var_233[Gvar.var_225].Var7;
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
        }
        // アイテム欄を開いていれば？
        if (Gvar.var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
            Gvar.var_814 = Gvar.var_486[Gvar.var_682][Gvar.var_225][0];
            Gvar.var_1662 = Gvar.var_486[Gvar.var_682][Gvar.var_225][3];
            Gvar.item_modified_value = Gvar.var_486[Gvar.var_682][Gvar.var_225][4];
            Gvar.free_space_value = Gvar.var_486[Gvar.var_682][Gvar.var_225][5];
            Gvar.var_1671 = Gvar.var_486[Gvar.var_682][Gvar.var_225][6];
            Gvar.var_1663 = Gvar.var_486[Gvar.var_682][Gvar.var_225][7];
            Gvar.var_1672 = Gvar.var_486[Gvar.var_682][Gvar.var_225][11];
            Gvar.var_805 = Gvar.var_486[Gvar.var_682][Gvar.var_225][12];
            Gvar.var_1660 = Gvar.var_486[Gvar.var_682][Gvar.var_225][13];
            Gvar.var_1661 = Gvar.var_486[Gvar.var_682][Gvar.var_225][14];
            Gvar.var_1673 = Gvar.var_486[Gvar.var_682][Gvar.var_225][15];
            Gvar.var_1674 = Gvar.var_486[Gvar.var_682][Gvar.var_225][16];
            Gvar.var_1675 = Gvar.var_486[Gvar.var_682][Gvar.var_225][17];
            Gvar.var_1666 = Gvar.var_486[Gvar.var_682][Gvar.var_225][18];
            Gvar.var_810 = Gvar.var_486[Gvar.var_682][Gvar.var_225][19];
            Gvar.var_815 = Gvar.var_486[Gvar.var_682][Gvar.var_225][20];
            Gvar.var_816 = Gvar.var_486[Gvar.var_682][Gvar.var_225][21];
            Gvar.var_817 = Gvar.var_486[Gvar.var_682][Gvar.var_225][22];
            Gvar.var_818 = Gvar.var_486[Gvar.var_682][Gvar.var_225][23];
            Gvar.var_819 = Gvar.var_486[Gvar.var_682][Gvar.var_225][24];
            Gvar.var_820 = Gvar.var_486[Gvar.var_682][Gvar.var_225][25];
            Gvar.var_821 = Gvar.var_486[Gvar.var_682][Gvar.var_225][26];
            Gvar.var_822 = Gvar.var_486[Gvar.var_682][Gvar.var_225][27];
            Gvar.var_823 = Gvar.var_486[Gvar.var_682][Gvar.var_225][28];
            Gvar.var_824 = Gvar.var_486[Gvar.var_682][Gvar.var_225][29];
        }

        Gvar.number_of_abilities = Gvar.var_810;
        if (Gvar.var_814 >= 100 && Gvar.var_814 < 400) {
            await Func.func370();
        }
        Gvar.belongings_item_list = Gvar.var_802;
        await Func.func492(); // アイテムリスト呼び出し
        Gvar.var_801 = 170;
        if (Gvar.var_814 == 104) {
            Gvar.var_801 = 190;
        }
        if (Gvar.var_814 >= 100 && Gvar.var_814 < 400) {
            Gvar.var_801 = (Gvar.var_810 + Gvar.free_space_value - 2) * 19 + 190;
        }
        if (Gvar.var_862[Gvar.var_814][0] == 0) {
            Gvar.var_801 = 170;
        }
        if (Gvar.var_1208 == 2) {
            Gvar.var_1208 = 1;
            await Func.func527();
            return;
        }
        await Func.func369();
}

export {func368}
