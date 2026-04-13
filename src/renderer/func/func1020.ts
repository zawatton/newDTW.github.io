import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func1020(this: any) {
        Adap.dbgprt(1020);
        Gvar.var_2442 = 1;
        Gvar.var_869 = 1;
        for (let cnt1 = 0; cnt1 < 30; ++cnt1) {
                await Func.func568();
                if (Gvar.var_2443 == 1) {
                        break;
                }
        }
        Gvar.var_869 = 0;
        Gvar.var_2442 = 0;
        Gvar.var_283 = "";
        Gvar.var_284 = "";
        Gvar.var_285 = "";
        Gvar.var_286 = "";
        Gvar.var_287 = "";
        Gvar.var_288 = "";
        Gvar.var_289 = 0;
        Gvar.var_283 = "「悪魔の虹」が大量にあらわれた！！";
        Gvar.var_223 = 1;
        Gvar.var_290 = 0;
        Gvar.var_24 = Gvar.var_24[1];
        Gvar.var_25 = Gvar.var_25[1];
        Gvar.var_26 = Gvar.var_26[1];
        await Func.func050();
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
                await Func.func354();
        }
        return;
}

export {func1020}
