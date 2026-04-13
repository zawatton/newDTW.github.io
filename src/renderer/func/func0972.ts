import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// 旧 func913
async function func0972(this: any) {
    Gvar.var_408++;
    Gvar.var_3871 = 0;
    Gvar.var_3872 = 0;
    for (let cnt1 = 0; cnt1 < 29; ++cnt1) {
        Adap.getstr(Gvar.var_3824[Gvar.var_3872], Gvar.var_3840, Gvar.var_3871, 44);
        Gvar.var_3871 = Gvar.var_3871 + Gvar.strsize;
        Gvar.var_3872++;
    }
    Gvar.var_3872 = 1;
    Gvar.var_3884 = 0;
    for (let cnt1 = 0; cnt1 < 30; ++cnt1) {
        Gvar.var_3821[Gvar.var_408][Gvar.var_3884] = Adap.int(Gvar.var_3824[Gvar.var_3872]);
        Gvar.var_3872++;
        Gvar.var_3884++;
    }
    return;
}

export {func0972}
