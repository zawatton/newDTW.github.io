import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// 旧 func927
async function func0986(this: any) {
    Gvar.var_3871 = 0;
    Gvar.var_3872 = 0;
    Gvar.var_3844 = 1;
    for (let cnt1 = 0; cnt1 < 30; ++cnt1) {
        Adap.getstr(Gvar.var_1068[Gvar.var_3872], Gvar.var_3846, Gvar.var_3871, 44);
        if (cnt1 == 0) {
            Gvar.var_1070[Gvar.var_3892] = "" + Gvar.var_1068[cnt1];
        }
        if (cnt1 != 0 && cnt1 != 29) {
            Gvar.var_1069[Gvar.var_3892][cnt1] = Adap.int(Gvar.var_1068[cnt1]);
        }
        if (cnt1 == 29) {
            Gvar.var_1071[Gvar.var_3892] = Gvar.var_1068[cnt1];
        }

        Gvar.var_3871 = Gvar.var_3871 + Gvar.strsize;
        Gvar.var_3872++;
    }
    return;
}

export {func0986}
