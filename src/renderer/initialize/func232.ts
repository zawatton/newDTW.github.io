import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func232(this: any) {
        Adap.dbgprt(232);
        Gvar.var_389 = 0;
        Gvar.var_1051 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_97; ++cnt1) {
            Gvar.var_83[Gvar.var_1051].Var7 = 0;
            Gvar.var_83[Gvar.var_1051].Var8 = 0;
            Gvar.var_83[Gvar.var_1051].Var11 = 0;
            Gvar.var_83[Gvar.var_1051].Var21 = 0;
            Gvar.var_1051 = Gvar.var_1051 + 1;
        }
        return;
}

export {func232}
