import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func252(this: any) {
        Adap.dbgprt(252);
        Gvar.var_1128 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_32; ++cnt1) {
            Gvar.var_1129 = 1;
            for (let cnt2 = 0; cnt2 < Gvar.var_31; ++cnt2) {
                if (Gvar.var_71[Gvar.var_1129][Gvar.var_1128] == 14) {
                    Gvar.var_1130 = Gvar.var_1129 - 1;
                    if (Gvar.var_1130 < 0) {
                        Gvar.var_1130 = 0;
                    }
                    Gvar.var_1131 = Gvar.var_1129 + 1;
                    if (Gvar.var_1131 > Gvar.var_31) {
                        Gvar.var_1131 = Gvar.var_31;
                    }
                    Gvar.var_1132 = Gvar.var_1128 - 1;
                    if (Gvar.var_1132 < 0) {
                        Gvar.var_1132 = 0;
                    }
                    Gvar.var_1133 = Gvar.var_1128 + 1;
                    if (Gvar.var_1133 > Gvar.var_32) {
                        Gvar.var_1133 = Gvar.var_32;
                    }
                    if (Gvar.var_71[Gvar.var_1130][Gvar.var_1128] != 14 && Gvar.var_71[Gvar.var_1131][Gvar.var_1128] != 14 && Gvar.var_71[Gvar.var_1129][Gvar.var_1132] != 14 && Gvar.var_71[Gvar.var_1129][Gvar.var_1133] != 14) {
                        Gvar.var_71[Gvar.var_1129][Gvar.var_1128] = 0;
                    }
                }
                Gvar.var_1129 = Gvar.var_1129 + 1;
            }
            Gvar.var_1128 = Gvar.var_1128 + 1;
        }
        return;
}

export {func252}
