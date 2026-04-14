/**
 * func723 — func723 不明
 *
 * (org原典: newDTW_func7)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func723(this: any) {
        Adap.dbgprt(723);
        Gvar.var_862 = Adap.dim(1000, 4, Gvar.length3 = null, null);
        Gvar.var_480 = 1;
        Gvar.var_3121 = 0;
        for (let cnt1 = 0; cnt1 < Gvar.var_224; ++cnt1) {
            if (Gvar.var_233[Gvar.var_480].Var0 != 0) {
                Gvar.var_3121++;
                Gvar.var_3122 = Gvar.var_233[Gvar.var_480].Var0;
                Gvar.var_862[Gvar.var_3122][0] = 1;
                Gvar.var_233[Gvar.var_480].Var14 = 1;
            }
            if (Gvar.var_233[Gvar.var_480].Var0 >= 800 && Gvar.var_233[Gvar.var_480].Var0 < 900) {
                Gvar.var_484 = 1;
                Gvar.var_485 = Gvar.var_233[Gvar.var_480].Var6;
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    if (Gvar.var_486[Gvar.var_485][Gvar.var_484][0] != 0) {
                        Gvar.var_3121++;
                        Gvar.var_3122 = Gvar.var_486[Gvar.var_485][Gvar.var_484][0];
                        Gvar.var_862[Gvar.var_3122][0] = 1;
                        Gvar.var_486[Gvar.var_485][Gvar.var_484][14] = 1;
                    }
                    Gvar.var_484 = Gvar.var_484 + 1;
                }
            }
            Gvar.var_480 = Gvar.var_480 + 1;
        }
        return;
}

export {func723}
