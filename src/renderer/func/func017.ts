import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func017(this: any) {
        Adap.dbgprt(17);
        if (Gvar.special_floor == 8) { // 幻覚の迷宮
            return;
        }
        Gvar.var_325 = 0;
        for (let cnt1 = 0; cnt1 < Gvar.var_31; ++cnt1) {
            Gvar.var_326 = 0;
            for (let cnt2 = 0; cnt2 < Gvar.var_32; ++cnt2) {
                Gvar.var_327 = Gvar.var_325 - 1;
                if (Gvar.var_327 < 0) {
                    Gvar.var_327 = 0;
                }
                Gvar.var_328 = Gvar.var_325 + 1;
                if (Gvar.var_328 > Gvar.var_33) {
                    Gvar.var_328 = Gvar.var_33;
                }
                Gvar.var_329 = Gvar.var_326 + 1;
                if (Gvar.var_329 > Gvar.var_34) {
                    Gvar.var_329 = Gvar.var_34;
                }
                Gvar.var_330 = Gvar.var_326 - 1;
                if (Gvar.var_330 < 0) {
                    Gvar.var_330 = 0;
                }
                if (Gvar.var_71[Gvar.var_327][Gvar.var_326] == Gvar.var_201 || Gvar.var_71[Gvar.var_328][Gvar.var_326] == Gvar.var_201 || Gvar.var_71[Gvar.var_325][Gvar.var_329] == Gvar.var_201 || Gvar.var_71[Gvar.var_325][Gvar.var_330] == Gvar.var_201) {
                    if (Gvar.var_74[Gvar.var_325][Gvar.var_326] == 0)
                        Gvar.var_74[Gvar.var_325][Gvar.var_326] = 1;
                }
                Gvar.var_326 = Gvar.var_326 + 1;
            }
            Gvar.var_325 = Gvar.var_325 + 1;
        }
        return;
}

export {func017}
