import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func1026(this: any) {
        Adap.dbgprt(1026);
        Adap.DSPLAY(229);
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
                Gvar.var_540 = 1;
                await Func.func354();
                Gvar.var_540 = 2;
                await Func.func354();
                Gvar.var_540 = 1;
                await Func.func354();
                Gvar.var_540 = 3;
                await Func.func354();
        }
        Gvar.var_869 = 1;
        Gvar.var_1938 = 1;
        Gvar.var_2698 = 1;
        Gvar.var_1714 = Gvar.var_74;
        Gvar.var_255 = Gvar.var_75;
        Gvar.var_2676 = 1;
        await Func.func568();
        Gvar.var_2676 = 0;
        Gvar.var_869 = 0;
        Gvar.var_1938 = 0;
        Gvar.var_2698 = 0;
        Gvar.var_540 = 0;
        return;
}

export {func1026}
