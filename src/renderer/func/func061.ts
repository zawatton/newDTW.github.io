/**
 * func061 — func061 不明
 *
 * (org原典: newDTW_func0)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func061(this: any) {
        Adap.dbgprt(61);
        Gvar.var_540 = Adap.dim(10, 30, Gvar.length3 = null, null);
        Gvar.var_281 = Gvar.var_66 - 4;
        if (Gvar.var_281 < 0) {
            Gvar.var_281 = 0;
        }
        Gvar.var_282 = Gvar.var_66 + 4;
        if (Gvar.var_282 > Gvar.var_33) {
            Gvar.var_282 = Gvar.var_33;
        }
        Gvar.var_283 = Gvar.var_67 - 4;
        if (Gvar.var_283 < 0) {
            Gvar.var_283 = 0;
        }
        Gvar.var_284 = Gvar.var_67 + 4;
        if (Gvar.var_284 > Gvar.var_34) {
            Gvar.var_284 = Gvar.var_34;
        }
        Gvar.var_541 = 0;
        Gvar.var_286 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_97; ++cnt1) {
            Gvar.var_542 = 0;
            // No = 36 スピードワゴン、No = 105 ツェッペリさん
            if (Gvar.var_83[Gvar.var_286].Var0 == 36 || Gvar.var_83[Gvar.var_286].Var0 == 105 || Gvar.var_83[Gvar.var_286].Var0 == 106 || Gvar.var_83[Gvar.var_286].Var0 == 107 || Gvar.var_83[Gvar.var_286].Var0 == 108) {
                if (Gvar.var_83[Gvar.var_286].Var31 == 5 && Gvar.var_83[Gvar.var_286].Var1 > Gvar.var_281 && Gvar.var_83[Gvar.var_286].Var1 < Gvar.var_282 && Gvar.var_83[Gvar.var_286].Var2 > Gvar.var_283 && Gvar.var_83[Gvar.var_286].Var2 < Gvar.var_284) {
                    Gvar.var_542 = 1;
                }
                if (Gvar.var_83[Gvar.var_286].Var31 == 5 && Gvar.var_83[Gvar.var_286].Var10 == Gvar.var_201 && Gvar.var_83[Gvar.var_286].Var10 != 14) {
                    Gvar.var_542 = 1;
                }
                if (Gvar.var_542 == 1) {
                    Gvar.var_541++;
                    Gvar.var_540[Gvar.var_541][0] = Gvar.var_83[Gvar.var_286].Var0;
                    Gvar.var_540[Gvar.var_541][3] = Gvar.var_83[Gvar.var_286].Var3;
                    Gvar.var_540[Gvar.var_541][4] = Gvar.var_83[Gvar.var_286].Var39;
                    Gvar.var_540[Gvar.var_541][5] = Gvar.var_83[Gvar.var_286].Var16;
                }
                if (Gvar.var_541 == 8) {
                    break;
                }
            }
            Gvar.var_286 = Gvar.var_286 + 1;
        }
        return;
}

export {func061}
