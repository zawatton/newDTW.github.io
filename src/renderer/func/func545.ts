import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func545(this: any) {
        Adap.dbgprt(545);
        if (Gvar.time_paused!= 0 || Gvar.time_paused_count != 0) {
            return;
        }
        Gvar.var_2479 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_337; ++cnt1) {
            if (Gvar.var_81[Gvar.var_2479][0] == 79) {
                Gvar.var_2480 = Gvar.var_2479;
                await Func.func546();
            }
            Gvar.var_2479++;
        }
        return;
}

export {func545}
