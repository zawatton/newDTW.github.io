import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// 旧 func910
async function func0969(this: any) {
    Gvar.var_408 = Gvar.var_408 - 1;
    if (Gvar.var_408 >= 1) {
        Gvar.var_3879 = 1;
        Gvar.var_3880 = 2;
        for (let cnt2 = 0; cnt2 < Gvar.var_408; ++cnt2) {
            Gvar.var_3881 = 0;
            for (let cnt3 = 0; cnt3 < 30; ++cnt3) {
                Gvar.var_3821[Gvar.var_3879][Gvar.var_3881] = Gvar.var_3821[Gvar.var_3880][Gvar.var_3881];
                Gvar.var_3821[Gvar.var_3880][Gvar.var_3881] = 0;
                Gvar.var_3881++;
            }
            Gvar.var_3879++;
            Gvar.var_3880++;
        }
    }
    return;
}

export {func0969}
