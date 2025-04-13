import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func543(this: any) {
        Adap.dbgprt(543);
        if (Gvar.var_140 >= 6) {
            return;
        }
        Gvar.var_140 = Gvar.var_140 + 1;
        Gvar.var_141 = 1;
        Adap.DSPLAY(120);
        await Func.setMessage("磁力がさらに強くなったようだ…", "", 10, false, false, false);
        return;
}

export {func543}
