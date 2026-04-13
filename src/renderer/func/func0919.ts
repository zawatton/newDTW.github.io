import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// 旧 func860
async function func0919(this: any) {
    Adap.color(155, 155, 155);
    Gvar.var_3607 = 0;
    Gvar.var_3608 = 680;
    Gvar.var_3609 = 10;
    Gvar.var_3610 = 10;
    for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
        Adap.line(Gvar.var_3607, Gvar.var_3609, Gvar.var_3608, Gvar.var_3610);
        Gvar.var_3609 = Gvar.var_3609 + 40;
        Gvar.var_3610 = Gvar.var_3610 + 40;
    }
    Gvar.var_3607 = 10;
    Gvar.var_3608 = 10;
    Gvar.var_3609 = 0;
    Gvar.var_3610 = 680;
    for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
        Adap.line(Gvar.var_3607, Gvar.var_3609, Gvar.var_3608, Gvar.var_3610);
        Gvar.var_3607 = Gvar.var_3607 + 40;
        Gvar.var_3608 = Gvar.var_3608 + 40;
    }
    return;
}

export {func0919}
