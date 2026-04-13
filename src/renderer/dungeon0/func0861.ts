import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 旧 func806
async function func0861(this: any) {
    Gvar.wallet = Gvar.wallet - Gvar.var_3189;
    await Func.func0862();
}

export {func0861}
