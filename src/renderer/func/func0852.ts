import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func0852(this: any) {
    Adap.dbgprt(852);
    Gvar.var_1319 = 2;
    Gvar.var_3465 = 0;
    Gvar.var_3466 = 0;
    Gvar.var_3467 = 0;
    Gvar.var_3468 = 0;
    Gvar.var_3469 = 0;
    Gvar.var_3470 = 0;
    Gvar.var_3471 = 0;
    Gvar.var_3472 = 0;
    Gvar.var_3473 = 0;
    Gvar.var_3474 = 1;
    Gvar.var_3475 = 95;
    Gvar.var_283 = "";
    Gvar.var_284 = "";
    Gvar.var_285 = "";
    Gvar.var_286 = "";
    Gvar.var_287 = "";
    Gvar.var_288 = "";
    Gvar.var_289 = 0;
    Gvar.var_283 = "" + Gvar.var_1134 + "G 入っています。";
    Gvar.var_284 = "何G 口座から出しますか？";
    Gvar.var_223 = 1;
    Gvar.var_290 = 0;
    Gvar.var_24 = Gvar.var_24[1];
    Gvar.var_25 = Gvar.var_25[1];
    Gvar.var_26 = Gvar.var_26[1];
    await Func.func0050();
    for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
        await Func.func0354();
    }
    await Func.func0853(); return;
}

export { func0852 }
