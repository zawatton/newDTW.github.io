import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 144 川尻浩作の特殊能力
async function enemy144(this: any) {
        Gvar.var_412 = Gvar.var_673;
        if (Gvar.wallet < 10) {
            return;
        }
        if (Gvar.var_83[Gvar.var_412].Var17 != 0 || Gvar.var_83[Gvar.var_412].Var23 != 0 || Gvar.var_83[Gvar.var_412].Var26 != 0) {
            return;
        }
        Gvar.var_2885 = Adap.rnd(4);
        Adap.DSPLAY(122);
        Gvar.var_742 = 1;
        Gvar.var_743 = 1; //スタンド像付与フラグON
        Gvar.var_83[Gvar.var_412].Var7 = 1;
        Gvar.var_389 = 3;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_389 = 3;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_389 = 1;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_389 = 3;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_389 = 1;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_389 = 3;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_389 = 1;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_389 = 3;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_389 = 1;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_83[Gvar.var_412].Var7 = 0;
        Gvar.var_742 = 0;
        Gvar.var_743 = 0; //スタンド像付与フラグOFF
        Gvar.var_83[Gvar.var_412].Var26 = 1;
        Gvar.belongings_item_list = 1;
        Gvar.var_417 = Gvar.belongings_item_list;
        Gvar.stolen_money = Math.floor(Gvar.wallet / 2);
        Gvar.wallet = Gvar.wallet - Gvar.stolen_money;
        if (Gvar.wallet < 0) {
            Gvar.wallet = 0;
        }
        Gvar.target_item_name = "" + Gvar.stolen_money + "G";
        Gvar.var_419 = Gvar.var_412 + 200;
        Gvar.var_78[Gvar.var_419].Var0 = 1;
        Gvar.var_78[Gvar.var_419].Var1 = 0;
        Gvar.var_78[Gvar.var_419].Var2 = 0;
        Gvar.var_78[Gvar.var_419].Var3 = 0;
        Gvar.var_78[Gvar.var_419].Var4 = 0;
        Gvar.var_78[Gvar.var_419].Var5 = 0;
        Gvar.var_78[Gvar.var_419].Var6 = 0;
        Gvar.var_78[Gvar.var_419].Var7 = 0;
        Gvar.var_78[Gvar.var_419].Var8 = 0;
        Gvar.var_78[Gvar.var_419].Var9 = 0;
        Gvar.var_78[Gvar.var_419].Var10 = 0;
        Gvar.var_78[Gvar.var_419].Var11 = 0;
        Gvar.var_78[Gvar.var_419].Var12 = 0;
        Gvar.var_78[Gvar.var_419].Var13 = Gvar.stolen_money;
        Gvar.var_78[Gvar.var_419].Var14 = 0;
        Gvar.var_78[Gvar.var_419].Var15 = 0;
        Gvar.var_78[Gvar.var_419].Var16 = 0;
        Gvar.var_78[Gvar.var_419].Var17 = 0;
        Gvar.var_78[Gvar.var_419].Var18 = 0;
        Gvar.var_78[Gvar.var_419].Var19 = 0;
        Gvar.var_78[Gvar.var_419].Var20 = 0;
        Gvar.var_78[Gvar.var_419].Var21 = 0;
        Gvar.var_78[Gvar.var_419].Var22 = 0;
        Gvar.var_78[Gvar.var_419].Var23 = 0;
        Gvar.var_78[Gvar.var_419].Var24 = 0;
        Gvar.var_78[Gvar.var_419].Var25 = 0;
        Gvar.var_78[Gvar.var_419].Var26 = 0;
        Gvar.var_78[Gvar.var_419].Var27 = 0;
        Gvar.var_78[Gvar.var_419].Var28 = 0;
        Gvar.var_78[Gvar.var_419].Var29 = 0;
        if (Gvar.var_127 == 1 || Gvar.var_132 >= 1) {
            await Func.setMessage("何者かに", "" + Gvar.target_item_name + "を盗まれた！", 8, false, false, false);
        }
        else
            await Func.setMessage("川尻浩作に", "" + Gvar.target_item_name + "を盗まれた！", 8, false, false, false);
        if (Gvar.var_128 >= 1) {
            await Func.func023();
        }
        await Func.AutoDraw(10);
        Gvar.var_2197 = 1;
        return;
}

export {enemy144}
