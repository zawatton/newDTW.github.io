import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func018(this: any) {
        Adap.dbgprt(18);
        Gvar.var_331 = Gvar.var_66 - 1;
        if (Gvar.var_331 < 0) {
            Gvar.var_331 = 0;
        }
        Gvar.var_332 = Gvar.var_66 + 1;
        if (Gvar.var_332 > Gvar.var_33) {
            Gvar.var_332 = Gvar.var_33;
        }
        Gvar.var_333 = Gvar.var_67 + 1;
        if (Gvar.var_333 > Gvar.var_34) {
            Gvar.var_333 = Gvar.var_34;
        }
        Gvar.var_334 = Gvar.var_67 - 1;
        if (Gvar.var_334 < 0) {
            Gvar.var_334 = 0;
        }
        Gvar.var_335 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_336; ++cnt1) {
            if (Gvar.var_201 != 14 && Gvar.var_78[Gvar.var_335].Var9 == Gvar.var_201) {
                Gvar.var_78[Gvar.var_335].Var10 = 1;
            }
            if (Gvar.var_78[Gvar.var_335].Var1 >= Gvar.var_331 && Gvar.var_78[Gvar.var_335].Var1 <= Gvar.var_332 && Gvar.var_78[Gvar.var_335].Var2 <= Gvar.var_333 && Gvar.var_78[Gvar.var_335].Var2 >= Gvar.var_334) {
                Gvar.var_78[Gvar.var_335].Var10 = 1;
            }
            Gvar.var_335 = Gvar.var_335 + 1;
        }
        Gvar.var_335 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_337; ++cnt1) {
            if (Gvar.var_81[Gvar.var_335][0] == 31 && Gvar.var_201 != 14 && Gvar.var_81[Gvar.var_335][5] == Gvar.var_201) {
                Gvar.var_81[Gvar.var_335][4] = 1;
            }
            if (Gvar.var_81[Gvar.var_335][0] == 31 && Gvar.var_81[Gvar.var_335][1] >= Gvar.var_331 && Gvar.var_81[Gvar.var_335][1] <= Gvar.var_332 && Gvar.var_81[Gvar.var_335][2] <= Gvar.var_333 && Gvar.var_81[Gvar.var_335][2] >= Gvar.var_334) {
                Gvar.var_81[Gvar.var_335][4] = 1;
            }
            Gvar.var_335 = Gvar.var_335 + 1;
        }
        return;
}

export {func018}
