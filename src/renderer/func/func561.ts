import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func561(this: any) {
        Adap.dbgprt(561);
        Gvar.var_1728 = 1;
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            await Func.func556();
        }
        Gvar.var_1728 = 0;
        return;
}

export {func561}
