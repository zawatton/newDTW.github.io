import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func603(this: any) {
        Adap.dbgprt(603);
        Gvar.var_2749 = Gvar.var_83[Gvar.var_673].Var18;
        Gvar.var_83[Gvar.var_673].Var18 = 0;
        Gvar.var_2858 = Gvar.var_83[Gvar.var_673].Var0;
        Gvar.var_2747 = Gvar.var_83[Gvar.var_673].Var1;
        Gvar.var_2748 = Gvar.var_83[Gvar.var_673].Var2;
        Gvar.var_1993 = Gvar.var_83[Gvar.var_673].Var1 - 1;
        if (Gvar.var_1993 < 0) {
            Gvar.var_1993 = 0;
        }
        Gvar.var_1994 = Gvar.var_83[Gvar.var_673].Var1 + 1;
        if (Gvar.var_1994 > Gvar.var_33) {
            Gvar.var_1994 = Gvar.var_33;
        }
        Gvar.var_1995 = Gvar.var_83[Gvar.var_673].Var2 + 1;
        if (Gvar.var_1995 > Gvar.var_34) {
            Gvar.var_1995 = Gvar.var_34;
        }
        Gvar.var_1996 = Gvar.var_83[Gvar.var_673].Var2 - 1;
        if (Gvar.var_1996 < 0) {
            Gvar.var_1996 = 0;
        }
        Gvar.var_2857 = 0;
        if (Gvar.var_82[Gvar.var_2747][Gvar.var_1995] == Gvar.var_2749) {
            Gvar.var_2857 = 1;
            Gvar.var_83[Gvar.var_673].Var5 = 2;
        }
        if (Gvar.var_82[Gvar.var_2747][Gvar.var_1996] == Gvar.var_2749) {
            Gvar.var_2857 = 1;
            Gvar.var_83[Gvar.var_673].Var5 = 8;
        }
        if (Gvar.var_82[Gvar.var_1993][Gvar.var_2748] == Gvar.var_2749) {
            Gvar.var_2857 = 1;
            Gvar.var_83[Gvar.var_673].Var5 = 4;
        }
        if (Gvar.var_82[Gvar.var_1994][Gvar.var_2748] == Gvar.var_2749) {
            Gvar.var_2857 = 1;
            Gvar.var_83[Gvar.var_673].Var5 = 6;
        }
        if (Gvar.var_82[Gvar.var_1993][Gvar.var_1995] == Gvar.var_2749) {
            Gvar.var_2857 = 1;
            Gvar.var_83[Gvar.var_673].Var5 = 1;
        }
        if (Gvar.var_82[Gvar.var_1993][Gvar.var_1996] == Gvar.var_2749) {
            Gvar.var_2857 = 1;
            Gvar.var_83[Gvar.var_673].Var5 = 7;
        }
        if (Gvar.var_82[Gvar.var_1994][Gvar.var_1995] == Gvar.var_2749) {
            Gvar.var_2857 = 1;
            Gvar.var_83[Gvar.var_673].Var5 = 3;
        }
        if (Gvar.var_82[Gvar.var_1994][Gvar.var_1996] == Gvar.var_2749) {
            Gvar.var_2857 = 1;
            Gvar.var_83[Gvar.var_673].Var5 = 9;
        }
        Gvar.var_2857 = 1;
        if (Gvar.var_2857 == 0 || Gvar.var_83[Gvar.var_2749].Var0 == 0) {
            Gvar.var_2740 = Gvar.var_83[Gvar.var_673].Var1;
            Gvar.var_2741 = Gvar.var_83[Gvar.var_673].Var2;
            Gvar.var_2742 = Gvar.var_66 - 3;
            if (Gvar.var_2742 < 0) {
                Gvar.var_2742 = 0;
            }
            Gvar.var_2743 = Gvar.var_66 + 3;
            if (Gvar.var_2743 > Gvar.var_33) {
                Gvar.var_2743 = Gvar.var_33;
            }
            Gvar.var_2744 = Gvar.var_67 + 3;
            if (Gvar.var_2744 > Gvar.var_34) {
                Gvar.var_2744 = Gvar.var_34;
            }
            Gvar.var_2745 = Gvar.var_67 - 3;
            if (Gvar.var_2745 < 0) {
                Gvar.var_2745 = 0;
            }
            if (Gvar.var_2740 >= Gvar.var_2742 && Gvar.var_2740 <= Gvar.var_2743 && Gvar.var_2741 >= Gvar.var_2745 && Gvar.var_2741 <= Gvar.var_2744) {
                Gvar.var_240 = 0;
                if (Gvar.var_2858 == 164) {
                    await Func.setMessage1("ｴｼﾃﾞｨｼの脳は", "恨みに震えている。", 8, false, false, false);
                }
                if (Gvar.var_2858 == 165) {
                    await Func.setMessage1("ｴﾎﾞﾆｰﾃﾞﾋﾞﾙは", "恨みに震えている。", 8, false, false, false);
                }
                Gvar.var_83[Gvar.var_673].Var21 = 1;
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    Gvar.var_411 = 1;
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_411 = 2;
                    await Func.func337(); // メッセージ表示処理(自動)
                }
                Gvar.var_411 = 1;
                Gvar.var_83[Gvar.var_673].Var21 = 0;
            }
            return;
        }
        Gvar.var_240 = 0;
        Adap.DSPLAY(197);
        Gvar.var_742 = 1;
        Gvar.var_83[Gvar.var_673].Var7 = 1;
        await Func.AutoDraw(10);
        Gvar.var_742 = 0;
        Gvar.var_83[Gvar.var_673].Var7 = 0;
        Gvar.var_2859 = Gvar.var_83[Gvar.var_673].Var1;
        Gvar.var_2860 = Gvar.var_83[Gvar.var_673].Var2;
        Gvar.var_82[Gvar.var_2859][Gvar.var_2860] = 0;
        Gvar.var_83[Gvar.var_673].Var0 = 0;
        Gvar.var_83[Gvar.var_673].Var1 = 0;
        Gvar.var_83[Gvar.var_673].Var2 = 0;
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        Gvar.var_83[Gvar.var_2749].Var12 = 0;
        Gvar.var_83[Gvar.var_2749].Var39 = Gvar.var_83[Gvar.var_2749].Var39 + 1;
        if (Gvar.var_83[Gvar.var_2749].Var39 == 1) {
            Gvar.var_83[Gvar.var_2749].Var39 = 2;
        }
        if (Gvar.var_2858 == 164) {
            Gvar.var_83[Gvar.var_2749].Var39 = Gvar.var_83[Gvar.var_2749].Var39 + 1;
        }
        Gvar.enemy_list = Gvar.var_83[Gvar.var_2749].Var0;
        await Func.func626(); // 敵リスト
        Gvar.var_83[Gvar.var_2749].Var3 = Math.floor(Gvar.enemy_hp * (Gvar.var_83[Gvar.var_2749].Var39 + 10) / 10);
        if (Gvar.var_83[Gvar.var_2749].Var3 >= 999) {
            Gvar.var_83[Gvar.var_2749].Var3 = 999;
        }
        Gvar.var_2861 = Gvar.enemy_name;
        if (Gvar.var_2858 == 164) {
            await Func.setMessage1("ｴｼﾃﾞｨｼの脳は", "" + Gvar.var_2861 + "に取り憑いた！", 8, true, false, false);
        }
        if (Gvar.var_2858 == 165) {
            await Func.setMessage1("ｴﾎﾞﾆｰﾃﾞﾋﾞﾙは", "" + Gvar.var_2861 + "に取り憑いた！", 8, true, false, false);
        }
        Adap.DSPLAY(198);
        await Func.setMessage1("" + Gvar.var_2861 + "は", "レベル " + Gvar.var_83[Gvar.var_2749].Var39 + " になった！", 8, false, false, false);
        await Func.AutoDraw(5);
        return;
}

export {func603}
