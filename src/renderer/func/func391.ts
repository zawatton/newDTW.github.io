import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func391(this: any) {
        Adap.dbgprt(391);
        Gvar.var_452 = 1;
        Gvar.var_453 = 1;
        Gvar.var_1734 = 1;
        Gvar.var_449 = 0;
        for (let cnt1 = 0; cnt1 < Gvar.var_32; ++cnt1) {
            Gvar.var_447 = 0;
            for (let cnt2 = 0; cnt2 < Gvar.var_31; ++cnt2) {
                if (Gvar.var_79[Gvar.var_447][Gvar.var_449] == 1) {
                    await Func.func384();
                }
                if (Gvar.var_79[Gvar.var_447][Gvar.var_449] == 2) {
                    Gvar.var_1734 = 0;
                    await Func.func384();
                    Gvar.var_1734 = 1;
                }
                Gvar.var_447 = Gvar.var_447 + 1;
            }
            Gvar.var_449 = Gvar.var_449 + 1;
        }
        Gvar.var_452 = 0;
        Gvar.var_453 = 0;
        Gvar.var_1734 = 0;
        return;
}

export {func391}
