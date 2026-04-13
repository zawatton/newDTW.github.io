import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'

// 旧 func906
async function func0965(this: any) {
    if (Gvar.var_408 >= 1) {
        await Func.func0973();
    }
    if (Gvar.var_3867 == 1) {
        Gvar.var_3867 = 0;
        await Func.func0978();
    }
    if (Gvar.var_3868 == 1) {
        Gvar.var_3868 = 0;
        await Func.func0982();
    }
    if (Gvar.var_1046 >= 1) {
        await Func.func0976();
    }
    return;
}

export {func0965}
