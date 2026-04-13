import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// 旧 func866
async function func0925(this: any) {
    if (Gvar.var_3565 == 2 || Gvar.var_3565 == 3 || Gvar.var_3565 == 4 || Gvar.var_3565 == 6 || Gvar.var_3565 == 7) {
        if (Gvar.var_65[Gvar.var_3614][Gvar.var_3615] == 1) {
            Gvar.var_65 = Adap.dim(70, 70, null, null);
        }
        if (Gvar.var_82[Gvar.var_3614][Gvar.var_3615] != 0) {
            Gvar.var_3634 = Gvar.var_82[Gvar.var_3614][Gvar.var_3615];
            Gvar.var_83[Gvar.var_3634].Var0 = 0;
            Gvar.var_83[Gvar.var_3634].Var16 = 0;
            Gvar.var_82[Gvar.var_3614][Gvar.var_3615] = 0;
        }
    }
    if (Gvar.var_3565 == 2 || Gvar.var_3565 == 3 || Gvar.var_3565 == 4 || Gvar.var_3565 == 8 || Gvar.var_3565 == 9) {
        if (Gvar.var_73[Gvar.var_3614][Gvar.var_3615] == 1) {
            Gvar.var_73 = Adap.dim(70, 70, null, null);
        }
        if (Gvar.var_77[Gvar.var_3614][Gvar.var_3615] != 0) {
            Gvar.var_3634 = Gvar.var_77[Gvar.var_3614][Gvar.var_3615];
            Gvar.var_78[Gvar.var_3634].Var0 = 0;
            Gvar.var_78[Gvar.var_3634].Var1 = 0;
            Gvar.var_78[Gvar.var_3634].Var2 = 0;
            Gvar.var_78[Gvar.var_3634].Var3 = 0;
            Gvar.var_77[Gvar.var_3614][Gvar.var_3615] = 0;
        }
        if (Gvar.var_80[Gvar.var_3614][Gvar.var_3615] != 0) {
            Gvar.var_3634 = Gvar.var_80[Gvar.var_3614][Gvar.var_3615];
            Gvar.var_81[Gvar.var_3634][0] = 0;
            Gvar.var_80[Gvar.var_3614][Gvar.var_3615] = 0;
        }
    }
    return;
}

export {func0925}
