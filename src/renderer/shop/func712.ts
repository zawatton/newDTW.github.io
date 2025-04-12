import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func712(this: any) {
        Adap.dbgprt(712);
        Gvar.var_3118 = 1;
        Gvar.var_515 = 19;
        Gvar.var_516 = 45;
        await Func.func713();
}

export {func712}
