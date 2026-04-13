import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'

async function func0819(this: any) {
    Adap.dbgprt(819);
    Gvar.var_271 = 0;
    Adap.DSPLAY(212);
    Gvar.var_283 = "";
    Gvar.var_284 = "";
    Gvar.var_285 = "";
    Gvar.var_286 = "";
    Gvar.var_287 = "";
    Gvar.var_288 = "";
    Gvar.var_289 = 0;
    Gvar.var_283 = "地球儀が置いてある。";
    if (Gvar.var_595 >= 1 || Gvar.var_460 == 1) {
        Gvar.var_283 = "地球儀がすごい速度で回転している。";
    }
    Gvar.var_284 = "";
    Gvar.var_223 = 1;
    Gvar.var_290 = 0;
    Gvar.var_24 = Gvar.var_24[1];
    Gvar.var_25 = Gvar.var_25[1];
    Gvar.var_26 = Gvar.var_26[1];
    await Func.func0050();
    await Func.func0358();
    await Func.func0054();
    Gvar.var_223 = 0;
    await Func.func0009(); return;
}

export { func0819 }
