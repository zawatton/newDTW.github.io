import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func1001(this: any) {
        Adap.dbgprt(1001);
        await Adap.wait(1);
        Gvar.var_3928 = Adap.getkey(Gvar.var_735);
        Gvar.var_3929 = Gvar.var_3928;
        Gvar.var_3917 = Gvar.var_3928 ^ Gvar.var_3930 & Gvar.var_3928;
        Gvar.var_3931 = Gvar.var_3928 ^ Gvar.var_3930 & Gvar.var_3930;
        Gvar.var_3930 = Gvar.var_3928;
        return;
}

export {func1001}
