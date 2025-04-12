import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

async function func084(this: any) {
        Adap.dbgprt(84);
        Gvar.se_volume = 60;
        Gvar.var_670 = 100;
        for (let cnt1 = 0; cnt1 < Gvar.var_668; ++cnt1) {
            Adap.DSSETVOLUME(Gvar.var_670, Gvar.se_volume);
            Gvar.var_670++;
        }
        return;
}

export {func084}
