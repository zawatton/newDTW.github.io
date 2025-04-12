import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func560(this: any) {
        Adap.dbgprt(560);
        Gvar.var_449 = 0;
        for (let cnt1 = 0; cnt1 < Gvar.var_32; ++cnt1) {
            Gvar.var_447 = 0;
            for (let cnt2 = 0; cnt2 < Gvar.var_31; ++cnt2) {
                if (Gvar.var_84[Gvar.var_447][Gvar.var_449] == 1) {
                    Gvar.var_2102 = Gvar.var_447;
                    Gvar.var_2103 = Gvar.var_449;
                    Gvar.var_347 = Gvar.var_447;
                    Gvar.var_348 = Gvar.var_449;
                    Gvar.var_2542 = 1;
                    Gvar.var_1845 = 4;
                    await Func.func556();
                    Gvar.var_1845 = 0;
                    Gvar.var_2542 = 0;
                }
                Gvar.var_447 = Gvar.var_447 + 1;
            }
            Gvar.var_449 = Gvar.var_449 + 1;
        }
        return;
}

export {func560}
