import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'

async function func0825(this: any) {
    Adap.dbgprt(825);
    Gvar.var_222 = 0;
    if (Gvar.var_258[Gvar.var_250][0] >= 800 && Gvar.var_258[Gvar.var_250][0] < 900 && Gvar.var_258[Gvar.var_250][8] != 0) {
        Gvar.var_283 = "";
        Gvar.var_284 = "";
        Gvar.var_285 = "";
        Gvar.var_286 = "";
        Gvar.var_287 = "";
        Gvar.var_288 = "";
        Gvar.var_289 = 0;
        Gvar.var_283 = "中に何か入っているアイテムは";
        Gvar.var_284 = "送ることはできない。";
        Gvar.var_223 = 1;
        Gvar.var_290 = 0;
        Gvar.var_24 = Gvar.var_24[1];
        Gvar.var_25 = Gvar.var_25[1];
        Gvar.var_26 = Gvar.var_26[1];
        await Func.func0050();
        for (let cnt1 = 0; cnt1 < 4; ++cnt1) {
            await Func.func0354();
        }
        await Func.func0358();
        await Func.func0054();
        Gvar.var_222 = 1;
        await Func.func0493(); return;
    }
    await Func.func0457();
    await Func.func0458();
    await Func.func0459();
    await Func.func0460();
    Gvar.var_2344 = 0;
    if (Gvar.var_428 == Gvar.var_250 && Gvar.var_996 != 0) {
        Gvar.var_2344 = 1;
    }
    if (Gvar.var_432 == Gvar.var_250 && Gvar.var_997 != 0) {
        Gvar.var_2344 = 1;
    }
    if (Gvar.var_474 == Gvar.var_250 && Gvar.var_998 != 0) {
        Gvar.var_2344 = 1;
    }
    if (Gvar.var_2344 == 1) {
        Gvar.var_283 = "";
        Gvar.var_284 = "";
        Gvar.var_285 = "";
        Gvar.var_286 = "";
        Gvar.var_287 = "";
        Gvar.var_288 = "";
        Gvar.var_289 = 0;
        Gvar.var_283 = "呪われていて外せない！";
        Gvar.var_284 = "";
        Gvar.var_223 = 1;
        Gvar.var_290 = 0;
        Gvar.var_24 = Gvar.var_24[1];
        Gvar.var_25 = Gvar.var_25[1];
        Gvar.var_26 = Gvar.var_26[1];
        await Func.func0050();
        for (let cnt1 = 0; cnt1 < 4; ++cnt1) {
            await Func.func0354();
        }
        await Func.func0358();
        await Func.func0054();
        Gvar.var_222 = 1;
        await Func.func0493(); return;
    }
    return;
}

export { func0825 }
