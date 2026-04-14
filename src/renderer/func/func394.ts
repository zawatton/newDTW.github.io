/**
 * func394 — func394 不明
 *
 * (org原典: newDTW_func3)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func394(this: any) {
        Adap.dbgprt(394);
        Gvar.var_1805 = 0;
        Gvar.var_855 = Adap.dim(100);
        Gvar.var_1806 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_224; ++cnt1) {
            if (Gvar.var_233[Gvar.var_1806].Var0 >= 800 && Gvar.var_233[Gvar.var_1806].Var0 < 900) {
                Gvar.var_1807 = Gvar.var_233[Gvar.var_1806].Var6;
                Gvar.var_855[Gvar.var_1807]++;
            }
            Gvar.var_1806++;
        }
        Gvar.var_1808 = 1;
        for (let cnt1 = 0; cnt1 < 99; ++cnt1) {
            if (Gvar.var_855[Gvar.var_1808] >= 2) {
                Gvar.var_1809 = 1;
                for (let cnt3 = 0; cnt3 < Gvar.var_224; ++cnt3) {
                    if (Gvar.var_233[Gvar.var_1809].Var0 >= 800 && Gvar.var_233[Gvar.var_1809].Var0 < 900 && Gvar.var_233[Gvar.var_1809].Var6 == Gvar.var_1808) {
                        await Func.func395();
                        Gvar.var_233[Gvar.var_1809].Var6 = Gvar.var_858;
                        Gvar.var_233[Gvar.var_1809].Var7 = Gvar.var_233[Gvar.var_1809].Var7 + Gvar.var_233[Gvar.var_1809].Var8;
                        if (Gvar.var_233[Gvar.var_1809].Var7 > 11) {
                            Gvar.var_233[Gvar.var_1809].Var7 = 10;
                        }
                        Gvar.var_233[Gvar.var_1809].Var8 = 0;
                        Gvar.var_1805 = 1;
                    }
                    Gvar.var_1809++;
                }
            }
            Gvar.var_1808++;
        }
        return;
}

export {func394}
