/**
 * func395 — func395 不明
 *
 * (org原典: newDTW_func3)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func395(this: any) {
        Adap.dbgprt(395);
        Gvar.var_986 = Adap.dim(100);
        Gvar.var_1806 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_224; ++cnt1) {
            if (Gvar.var_233[Gvar.var_1806].Var0 >= 800 && Gvar.var_233[Gvar.var_1806].Var0 < 900) {
                Gvar.var_1807 = Gvar.var_233[Gvar.var_1806].Var6;
                Gvar.var_986[Gvar.var_1807] = 1;
            }
            Gvar.var_1806 = Gvar.var_1806 + 1;
        }
        Gvar.var_1806 = 1;
        for (let cnt1 = 0; cnt1 < 299; ++cnt1) {
            if (Gvar.var_78[Gvar.var_1806].Var0 >= 800 && Gvar.var_78[Gvar.var_1806].Var0 < 900) {
                Gvar.var_1807 = Gvar.var_78[Gvar.var_1806].Var6;
                Gvar.var_986[Gvar.var_1807] = 1;
            }
            Gvar.var_1806 = Gvar.var_1806 + 1;
        }
        Gvar.var_1806 = 1;
        for (let cnt1 = 0; cnt1 < 49; ++cnt1) {
            if (Gvar.var_853[Gvar.var_1806][0] >= 800 && Gvar.var_853[Gvar.var_1806][0] < 900) {
                Gvar.var_1807 = Gvar.var_853[Gvar.var_1806][6];
                Gvar.var_986[Gvar.var_1807] = 1;
            }
            Gvar.var_1806 = Gvar.var_1806 + 1;
        }
        Gvar.var_1810 = 1;
        for (let cnt1 = 0; cnt1 < 79; ++cnt1) {
            if (Gvar.var_986[Gvar.var_1810] == 0) {
                Gvar.var_1811 = 0;
                for (let cnt3 = 0; cnt3 < 11; ++cnt3) {
                    Gvar.var_1812 = 0;
                    for (let cnt4 = 0; cnt4 < 30; ++cnt4) {
                        Gvar.var_486[Gvar.var_1810][Gvar.var_1811][Gvar.var_1812] = 0;
                        Gvar.var_1812++;
                    }
                    Gvar.var_1811++;
                }
                Gvar.var_990[Gvar.var_1810] = 0;
            }
            Gvar.var_1810 = Gvar.var_1810 + 1;
        }
        Gvar.var_858 = 1;
        for (let cnt1 = 0; cnt1 < 79; ++cnt1) {
            if (Gvar.var_986[Gvar.var_858] == 0) {
                Gvar.var_986[Gvar.var_858] = 1;
                break;
            }
            Gvar.var_858 = Gvar.var_858 + 1;
            if (Gvar.var_858 > 79) {
                Gvar.var_858 = 0;
                Adap.dialog("ヤバイもの警告", 1);
            }
        }
        return;
}

export {func395}
