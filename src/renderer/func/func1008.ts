import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func1008(this: any) {
        Adap.dbgprt(1008);
        Gvar.var_223 = 0;
        Adap.DSPLAY(211);
        Gvar.var_886 = 5;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
                await Func.func354();
        }
        Gvar.var_886 = 4;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
                await Func.func354();
        }
        Gvar.var_886 = 3;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
                await Func.func354();
        }
        Gvar.var_886 = 2;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
                await Func.func354();
        }
        Gvar.var_886 = 1;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
                await Func.func354();
        }
        Gvar.var_886 = 0;
        await Func.func009(); return;
}

export {func1008}
