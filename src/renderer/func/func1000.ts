import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func1000(this: any) {
        Adap.dbgprt(1000);
        await Adap.wait(1);
        Gvar.var_3924 = Adap.getkey(Gvar.var_728);
        Gvar.var_3925 = Gvar.var_3924;
        Gvar.var_3915 = Gvar.var_3924 ^ Gvar.var_3926 & Gvar.var_3924;
        Gvar.var_3927 = Gvar.var_3924 ^ Gvar.var_3926 & Gvar.var_3926;
        Gvar.var_3926 = Gvar.var_3924;
        return;
}

export {func1000}
