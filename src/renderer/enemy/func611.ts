/**
 * func611 — func611 不明
 *
 * (org原典: newDTW_func6)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func611(this: any) {
        Adap.dbgprt(611);
        if (Gvar.var_83[Gvar.var_673].Var12 != 0 || Gvar.var_83[Gvar.var_673].Var13 != 0 || Gvar.var_83[Gvar.var_673].Var17 != 0 || Gvar.var_83[Gvar.var_673].Var23 != 0) {
            return;
        }
        Gvar.var_2877 = Adap.rnd(2);
        if (Gvar.var_2877 == 0) {
            return;
        }
        Gvar.var_2878 = 0;
        Gvar.var_2879 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_97; ++cnt1) {
            if (Gvar.var_83[Gvar.var_2879].Var0 != 0 && Gvar.var_83[Gvar.var_2879].Var10 == Gvar.var_201 && Gvar.var_201 != 14 && Gvar.var_2879 != Gvar.var_673) {
                Gvar.var_2878 = 1;
            }
            Gvar.var_2879 = Gvar.var_2879 + 1;
        }
        if (Gvar.var_2878 == 1) {
            return;
        }
        Gvar.var_2879 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_336; ++cnt1) {
            if (Gvar.var_78[Gvar.var_2879].Var0 == 650 || Gvar.var_78[Gvar.var_2879].Var0 == 651 || Gvar.var_78[Gvar.var_2879].Var0 == 652 || Gvar.var_78[Gvar.var_2879].Var0 == 653) {
                if (Gvar.var_78[Gvar.var_2879].Var9 == Gvar.var_201 && Gvar.var_201 != 14) {
                    Gvar.var_2878 = 1;
                }
            }
            Gvar.var_2879 = Gvar.var_2879 + 1;
        }
        if (Gvar.var_2878 == 1) {
            return;
        }
        Gvar.var_2880 = Adap.rnd(2);
        Gvar.var_2852 = Math.floor(Gvar.var_352 / 15) + Gvar.var_2880;
        Gvar.var_747 = 1;
        Gvar.var_389 = 2;
        Adap.DSPLAY(104);
        Gvar.var_209 = Gvar.var_2852;
        await Func.AutoDraw(10);
        Gvar.var_389 = 0;
        await Func.setMessage("ﾖｰﾖｰﾏｯの謎の攻撃を喰らった！", "" + Gvar.var_2852 + "のダメージをうけた！", 8, false, false, false);
        if (Gvar.var_128 >= 1) {
            await Func.func023();
        }
        await Func.AutoDraw(6);
        Gvar.var_211 = Gvar.var_211 - Gvar.var_2852;
        Gvar.var_208 = Gvar.var_208 + Gvar.var_2852;
        if (Gvar.var_211 <= 0) {
            Gvar.var_211 = 0;
            Gvar.var_356 = 222;
        }
        Gvar.var_240 = 0;
        return;
}

export {func611}
