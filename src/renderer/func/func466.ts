/**
 * func466 — func466 不明
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func466(this: any) {
        Adap.dbgprt(466);
        Gvar.var_2046 = 1;
        for (let cnt1 = 0; true; ++cnt1) {
            Gvar.var_2047 = 2;
            for (let cnt2 = 0; true; ++cnt2) {
                if (Gvar.var_233[Gvar.var_2046].Var0 >= 400 && Gvar.var_233[Gvar.var_2046].Var0 < 500 && Gvar.var_233[Gvar.var_2046].Var0 == Gvar.var_233[Gvar.var_2047].Var0 && Gvar.var_2046 != Gvar.var_2047 && Gvar.var_233[Gvar.var_2046].Var11 == 0 && Gvar.var_233[Gvar.var_2047].Var11 == 0) {
                    Gvar.var_233[Gvar.var_2046].Var3 = Gvar.var_233[Gvar.var_2046].Var3 + Gvar.var_233[Gvar.var_2047].Var3;
                    if (Gvar.var_233[Gvar.var_2046].Var3 >= 99) {
                        Gvar.var_233[Gvar.var_2046].Var3 = 99;
                    }
                    if (Gvar.var_479[Gvar.var_2047] == 1) {
                        Gvar.var_479[Gvar.var_2047] = 0;
                        Gvar.var_479[Gvar.var_2046] = 1;
                        Gvar.var_250 = Gvar.var_233[Gvar.var_2046].Var0;
                    }
                    Gvar.var_225 = Gvar.var_2047;
                    await Func.func433(); // アイテム配列(所持アイテム)初期化関数
                    Gvar.var_2046 = 1;
                    Gvar.var_2047 = 1;
                }
                Gvar.var_2047 = Gvar.var_2047 + 1;
                if (Gvar.var_2047 > Gvar.var_224) {
                    break;
                }
            }
            Gvar.var_2046 = Gvar.var_2046 + 1;
            if (Gvar.var_2046 > Gvar.var_224) {
                break;
            }
        }
        Gvar.Y_axis_item_position = 45;
        Gvar.var_225 = 1;
        return;
}

export {func466}
