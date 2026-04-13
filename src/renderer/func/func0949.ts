import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'

// 旧 func890
async function func0949(this: any) {
    Gvar.var_886 = Adap.sdim(10000);
    Gvar.var_3324 = Adap.sdim(10000);
    Gvar.var_3599 = Adap.dim(10000);
    Gvar.var_886 = "罠";
    Gvar.var_3324 = "eeeeeeeeee";
    Gvar.var_883 = 1;
    for (let cnt1 = 0; cnt1 < 32; ++cnt1) {
        await Func.func0950();
        Gvar.var_886 = Gvar.var_886 + "\n" + Gvar.var_889;
        if (Gvar.var_888 < 10) {
            Gvar.var_3324 = Gvar.var_3324 + "\np" + Gvar.var_888 + "eeeeeeee";
        }
        if (Gvar.var_888 >= 10 && Gvar.var_888 < 100) {
            Gvar.var_3324 = Gvar.var_3324 + "\np" + Gvar.var_888 + "eeeeeee";
        }
        if (Gvar.var_888 >= 100) {
            Gvar.var_3324 = Gvar.var_3324 + "\np" + Gvar.var_888 + "eeeeee";
        }
        Gvar.var_3599[Gvar.var_883] = Gvar.var_888;
        if (Gvar.var_888 == 98) {
            break;
        }
        Gvar.var_883++;
    }
    return;
}

export {func0949}
