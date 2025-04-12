import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func095(this: any) {
        Adap.dbgprt(95);
        Gvar.se_file_name = 109;
        if (Gvar.var_83[Gvar.var_673].Var0 == 93) {
            Gvar.se_file_name = 109;
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 56) {
            Gvar.se_file_name = 110;
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 136) {
            Gvar.se_file_name = 194;
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 21) {
            Gvar.se_file_name = 169;
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 95 || Gvar.var_83[Gvar.var_673].Var0 == 121 || Gvar.var_83[Gvar.var_673].Var0 == 126) {
            Gvar.se_file_name = 176;
        }
        // No = 113 DIO、No = 132 レクイエムジョルノ
        if (Gvar.var_83[Gvar.var_673].Var0 == 113 || Gvar.var_83[Gvar.var_673].Var0 == 132) {
            Gvar.se_file_name = 121;
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 47 || Gvar.var_83[Gvar.var_673].Var0 == 67) {
            return;
        }
        Adap.DSPLAY(Gvar.se_file_name);
        return;
}

export {func095}
