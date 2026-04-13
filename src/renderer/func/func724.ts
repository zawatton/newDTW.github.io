import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// 旧 func724
async function func724(this: any) {
        Adap.dbgprt(724);
        Gvar.var_3123 = 0;
        Gvar.var_3124 = 1;
        for (let cnt1 = 0; cnt1 < 299; ++cnt1) {
            if (Gvar.var_78[Gvar.var_3124].Var0 == 0) {
                Gvar.var_854 = Gvar.var_3124;
                Gvar.var_3123 = 1;
                break;
            }
            Gvar.var_3124++;
        }
        if (Gvar.var_3123 == 1) {
            for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
                Gvar.var_78[Gvar.var_854]["Var" + cnt2] = 0;
            }
            if (Gvar.var_336 < Gvar.var_854) {
                Gvar.var_336 = Gvar.var_854;
            }
            Gvar.var_194 = Gvar.var_854;
        }
        return;
}

export {func724}
