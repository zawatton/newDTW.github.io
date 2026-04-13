import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func1002(this: any) {
        Adap.dbgprt(1002);
        Adap.DSPLAY(136);
        Gvar.var_174 = 5;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
                await Func.func354();
        }
        Gvar.var_174 = 4;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
                await Func.func354();
        }
        Gvar.var_174 = 3;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
                await Func.func354();
        }
        Gvar.var_174 = 2;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
                await Func.func354();
        }
        Gvar.var_174 = 1;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
                await Func.func354();
        }
        Gvar.var_174 = 7;
        for (let cnt1 = 0; cnt1 < 4; ++cnt1) {
                await Func.func354();
        }
        Gvar.var_174 = 0;
        Gvar.var_283 = "";
        Gvar.var_284 = "";
        Gvar.var_285 = "";
        Gvar.var_286 = "";
        Gvar.var_287 = "";
        Gvar.var_288 = "";
        Gvar.var_289 = 0;
        Gvar.var_24 = Gvar.var_24[1];
        Gvar.var_25 = Gvar.var_25[1];
        Gvar.var_26 = Gvar.var_26[1];
        Gvar.var_283 = "生きていてよかった...";
        Gvar.var_223 = 1;
        Gvar.var_290 = 0;
        await Func.func050();
        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
                await Func.func354();
        }
        return;
}

export {func1002}
