import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// 旧 func908
async function func0967(this: any) {
    Gvar.var_3871 = 0;
    Gvar.var_3872 = 0;
    for (let cnt1 = 0; cnt1 < 22; ++cnt1) {
        Adap.getstr(Gvar.var_1068[Gvar.var_3872], Gvar.var_3846, Gvar.var_3871, 44);

        Gvar.var_3871 = Gvar.var_3871 + Gvar.strsize;
        Gvar.var_3872++;
    }
    Gvar.var_3873 = Gvar.var_3871;
    Adap.getstr(Gvar.var_1068[25], Gvar.var_3846, Gvar.var_3871, 44);
    if (Gvar.var_3828 == "相手の情報") {
        Gvar.var_3828 = "" + Gvar.var_1068[0] + "さんの情報";
        Adap.gsel(33);
        Adap.title(Gvar.var_3828);
        Adap.gsel(0);
    }
    return;
}

export {func0967}
