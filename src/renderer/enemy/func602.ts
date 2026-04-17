/**
 * func602 — func602 不明
 *
 * (org原典: newDTW_func6)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import { tf } from '../i18n'

async function func602(this: any) {
        Adap.dbgprt(602);
        Gvar.var_2856 = Gvar.var_83[Gvar.var_673].Var0;
        Gvar.var_2749 = Gvar.var_83[Gvar.var_673].Var18;
        Gvar.var_83[Gvar.var_673].Var18 = 0;
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
            Gvar.var_2646 = Gvar.var_2749;
            await Func.func578();
            if (Gvar.var_2647 >= 1) {
                Gvar.var_2857 = 1;
                Gvar.var_83[Gvar.var_673].Var5 = 2;
            }
        }
        if (Gvar.var_82[Gvar.var_2747][Gvar.var_1996] == Gvar.var_2749) {
            Gvar.var_2646 = Gvar.var_2749;
            await Func.func578();
            if (Gvar.var_2647 >= 1) {
                Gvar.var_2857 = 1;
                Gvar.var_83[Gvar.var_673].Var5 = 8;
            }
        }
        if (Gvar.var_82[Gvar.var_1993][Gvar.var_2748] == Gvar.var_2749) {
            Gvar.var_2646 = Gvar.var_2749;
            await Func.func578();
            if (Gvar.var_2647 >= 1) {
                Gvar.var_2857 = 1;
                Gvar.var_83[Gvar.var_673].Var5 = 4;
            }
        }
        if (Gvar.var_82[Gvar.var_1994][Gvar.var_2748] == Gvar.var_2749) {
            Gvar.var_2646 = Gvar.var_2749;
            await Func.func578();
            if (Gvar.var_2647 >= 1) {
                Gvar.var_2857 = 1;
                Gvar.var_83[Gvar.var_673].Var5 = 6;
            }
        }
        if (Gvar.var_82[Gvar.var_1993][Gvar.var_1995] == Gvar.var_2749) {
            Gvar.var_2646 = Gvar.var_2749;
            await Func.func578();
            if (Gvar.var_2647 >= 1) {
                Gvar.var_2857 = 1;
                Gvar.var_83[Gvar.var_673].Var5 = 1;
            }
        }
        if (Gvar.var_82[Gvar.var_1993][Gvar.var_1996] == Gvar.var_2749) {
            Gvar.var_2646 = Gvar.var_2749;
            await Func.func578();
            if (Gvar.var_2647 >= 1) {
                Gvar.var_2857 = 1;
                Gvar.var_83[Gvar.var_673].Var5 = 7;
            }
        }
        if (Gvar.var_82[Gvar.var_1994][Gvar.var_1995] == Gvar.var_2749) {
            Gvar.var_2646 = Gvar.var_2749;
            await Func.func578();
            if (Gvar.var_2647 >= 1) {
                Gvar.var_2857 = 1;
                Gvar.var_83[Gvar.var_673].Var5 = 3;
            }
        }
        if (Gvar.var_82[Gvar.var_1994][Gvar.var_1996] == Gvar.var_2749) {
            Gvar.var_2646 = Gvar.var_2749;
            await Func.func578();
            if (Gvar.var_2647 >= 1) {
                Gvar.var_2857 = 1;
                Gvar.var_83[Gvar.var_673].Var5 = 9;
            }
        }
        if (Gvar.var_2857 == 0) {
            if (Gvar.var_2856 == 134) {
                await Func.setMessage("ｼﾞｮﾘｰﾝは仲間を心配している。", "", 8, false, false, false);
            }
            if (Gvar.var_2856 == 35) {
                await Func.setMessage("仗助は仲間を心配している。", "", 8, false, false, false);
            }
            await Func.AutoDraw(10);
            return;
        }
        if (Gvar.var_2856 == 134) {
            await Func.setMessage("「ストーンフリー」！！", "", 8, false, false, false);
        }
        if (Gvar.var_2856 == 35) {
            await Func.setMessage("「クレイジー・ダイヤモンド」！！", "", 8, false, false, false);
        }
        if (Gvar.var_2856 == 134) {
            Gvar.var_1558 = (Gvar.var_83[Gvar.var_2749].Var1 - Gvar.var_66 + 4) * 40;
            Gvar.var_1559 = (Gvar.var_83[Gvar.var_2749].Var2 - Gvar.var_67 + 4) * 40;
            Gvar.var_83[Gvar.var_673].Var21 = 1;
            if (Gvar.var_83[Gvar.var_673].Var5 == 2) {
                Gvar.var_411 = 1;
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 4) {
                Gvar.var_411 = 2;
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 8) {
                Gvar.var_411 = 3;
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 6) {
                Gvar.var_411 = 4;
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 1) {
                Gvar.var_411 = 5;
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 7) {
                Gvar.var_411 = 6;
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 3) {
                Gvar.var_411 = 7;
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 9) {
                Gvar.var_411 = 8;
            }

            Adap.DSPLAY(136);
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1557 = 1;
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1557++;
            }
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_1557 = 0;
            Gvar.var_411 = 0;
            Gvar.var_83[Gvar.var_673].Var21 = 0;
        }
        if (Gvar.var_2856 == 35) {
            Gvar.var_742 = 1;
            Gvar.var_83[Gvar.var_673].Var7 = 1;
            Gvar.var_743 = 1; //スタンド像付与フラグON
            await Func.AutoDraw(3);
            Adap.DSPLAY(143);
            for (let cnt2 = 0; cnt2 < 3; ++cnt2) {
                Gvar.var_83[Gvar.var_2749].Var8 = 1;
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_83[Gvar.var_2749].Var8 = 0;
                await Func.func337(); // メッセージ表示処理(自動)
            }
            Gvar.var_742 = 0;
            Gvar.var_83[Gvar.var_673].Var7 = 0;
            Gvar.var_743 = 0; //スタンド像付与フラグOFF
        }
        Gvar.enemy_list = Gvar.var_83[Gvar.var_2749].Var0;
        await Func.func626(); // 敵リスト
        Gvar.var_83[Gvar.var_2749].Var3 = Gvar.var_83[Gvar.var_2749].Var3 + 50;
        if (Gvar.var_83[Gvar.var_2749].Var3 > Gvar.var_2792) {
            Gvar.var_83[Gvar.var_2749].Var3 = Gvar.var_2792;
        }
        await Func.setMessage(tf("{0}の", Gvar.enemy_name), "傷がふさがった。", 7, false, false, false);
        await Func.AutoDraw(10);
        return;
}

export {func602}
