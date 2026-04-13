import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// 旧 func887
async function func0946(this: any) {
    Gvar.var_3807 = Gvar.var_3635;
    await Adap.exist(Gvar.var_3807);
    Gvar.var_3808 = Gvar.strsize;
    if (Gvar.var_3808 < 0) {
        Gvar.var_3808 = 10000;
    }
    Gvar.var_254 = "lナ2";
    Gvar.var_3809 = 1;
    for (let cnt1 = 0; cnt1 < Gvar.var_3808 - 1; ++cnt1) {
        Gvar.var_3810 = Adap.peek(Gvar.var_3771, Gvar.var_3809);
        Gvar.conf_keyon = Adap.peek(Gvar.var_254, Gvar.var_3809 % 4);
        Gvar.var_3811 = Gvar.var_3810 ^ Gvar.conf_keyon;
        Gvar.conf_keyon = Gvar.conf_keyon + 57 && 255;
        Adap.poke(Gvar.var_254, Gvar.var_3809 % 4, Gvar.conf_keyon);
        Adap.poke(Gvar.var_3771, Gvar.var_3809, Gvar.var_3811);
        Gvar.var_3809++;
    }
    return;
}

export {func0946}
