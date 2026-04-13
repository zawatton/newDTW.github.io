import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func0995(this: any) {
        Adap.dbgprt(995);
        Gvar.var_405 = 5;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
                await Func.func354();
        }
        Gvar.var_405 = 4;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
                await Func.func354();
        }
        Gvar.var_405 = 3;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
                await Func.func354();
        }
        Gvar.var_405 = 2;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
                await Func.func354();
        }
        Gvar.var_405 = 1;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
                await Func.func354();
        }
        Gvar.var_405 = 0;
        Gvar.var_3907 = 0;
        Gvar.var_1314 = 1;
        Gvar.var_3908 = 0;
        Gvar.var_3909 = Adap.dim(5);
        Gvar.var_3910 = Adap.dim(5);
        Gvar.var_3911 = Adap.dim(5);
        Gvar.var_3912 = Adap.dim(5);
        Gvar.var_3913 = Adap.dim(5);
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                Gvar.var_3909[cnt1] = 65 * cnt1 + 10;
                Gvar.var_3911[cnt1] = 140;
                Gvar.var_3910[cnt1] = 110;
        }
        Gvar.var_3914 = 0;
        return;
}

export {func0995}
