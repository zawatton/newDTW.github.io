import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func806(this: any) {
        Adap.dbgprt(806);
        Gvar.wallet = Gvar.wallet - Gvar.var_3189;
        await Func.func807();
}

export {func806}
