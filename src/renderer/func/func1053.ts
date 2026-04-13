import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func1053(this: any) {
        Adap.dbgprt(1053);
        await Func.func099();
        Gvar.var_283 = "";
        Gvar.var_284 = "";
        Gvar.var_285 = "";
        Gvar.var_286 = "";
        Gvar.var_287 = "";
        Gvar.var_288 = "";
        Gvar.var_289 = 0;
        Gvar.var_283 = "HAIL 2 U !!";
        Gvar.var_223 = 1;
        Gvar.var_290 = 0;
        Gvar.var_24 = Gvar.var_24[2];
        Gvar.var_25 = Gvar.var_25[2];
        Gvar.var_26 = Gvar.var_26[2];
        await Func.func050();
        for (let cnt1 = 0; cnt1 < 16; ++cnt1) {
            Gvar.var_290 = 0;
            await Func.func354();
        }
        Gvar.var_2790 = 1;
        Gvar.var_443 = 1;
        Gvar.var_444 = Gvar.var_445;
        await Func.func588();
        Gvar.var_445 = Gvar.var_444;
        Gvar.var_2790 = 0;
        Gvar.var_443 = 0;
        if (Gvar.var_2339 == 0) {
            await Func.func099();
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "お前の願いを言え！";
            Gvar.var_287 = "";
            Gvar.var_24 = Gvar.var_24[2];
            Gvar.var_25 = Gvar.var_25[2];
            Gvar.var_26 = Gvar.var_26[2];
            await Func.func053();
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            await Func.func050();
            Gvar.var_2427 = 1;
            return;
        }
        Adap.DSPLAY(166);
        Gvar.var_2514 = Gvar.var_107;
        Gvar.var_308[Gvar.var_2514][21] = 1;
        Gvar.var_471 = 1;
        for (let cnt2 = 0; cnt2 < 3; ++cnt2) {
            Gvar.var_290 = 0;
            await Func.func354();
        }
        Gvar.var_471 = 2;
        for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
            Gvar.var_290 = 0;
            await Func.func354();
        }
        Gvar.var_471 = 3;
        for (let cnt4 = 0; cnt4 < 3; ++cnt4) {
            Gvar.var_290 = 0;
            await Func.func354();
        }
        Gvar.var_471 = 4;
        for (let cnt5 = 0; cnt5 < 3; ++cnt5) {
            Gvar.var_290 = 0;
            await Func.func354();
        }
        Gvar.var_471 = 0;
        Gvar.var_308[Gvar.var_2514][21] = 0;
        Gvar.var_308[Gvar.var_2514][5] = 2;
        await Func.func348();
        Gvar.var_283 = Gvar.var_286;
        Gvar.var_284 = Gvar.var_287;
        Gvar.var_286 = "地面から 土人形 が現れた！";
        Gvar.var_287 = "";
        Gvar.var_24 = Gvar.var_24[2];
        Gvar.var_25 = Gvar.var_25[2];
        Gvar.var_26 = Gvar.var_26[2];
        await Func.func053();
        Gvar.var_223 = 1;
        Gvar.var_290 = 0;
        await Func.func050();
        Gvar.var_2427 = 1;
        return;
}

export {func1053}
