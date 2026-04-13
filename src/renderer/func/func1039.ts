import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func1039(this: any) {
        Adap.dbgprt(1039);
        if (Gvar.var_224 == 2) {
                Gvar.var_2331 = Gvar.var_74;
                Gvar.var_2332 = Gvar.var_75 + 1;
        }
        if (Gvar.var_224 == 8) {
                Gvar.var_2331 = Gvar.var_74;
                Gvar.var_2332 = Gvar.var_75 - 1;
        }
        if (Gvar.var_224 == 4) {
                Gvar.var_2331 = Gvar.var_74 - 1;
                Gvar.var_2332 = Gvar.var_75;
        }
        if (Gvar.var_224 == 6) {
                Gvar.var_2331 = Gvar.var_74 + 1;
                Gvar.var_2332 = Gvar.var_75;
        }
        if (Gvar.var_224 == 1) {
                Gvar.var_2331 = Gvar.var_74 - 1;
                Gvar.var_2332 = Gvar.var_75 + 1;
        }
        if (Gvar.var_224 == 3) {
                Gvar.var_2331 = Gvar.var_74 + 1;
                Gvar.var_2332 = Gvar.var_75 + 1;
        }
        if (Gvar.var_224 == 7) {
                Gvar.var_2331 = Gvar.var_74 - 1;
                Gvar.var_2332 = Gvar.var_75 - 1;
        }
        if (Gvar.var_224 == 9) {
                Gvar.var_2331 = Gvar.var_74 + 1;
                Gvar.var_2332 = Gvar.var_75 - 1;
        }
        if (Gvar.var_82[Gvar.var_2331][Gvar.var_2332] == 0 || Gvar.var_82[Gvar.var_2331][Gvar.var_2332] == 13 || Gvar.var_93[Gvar.var_2331][Gvar.var_2332] != 0) {
                Gvar.var_2337 = 0;
        }
        if (Gvar.var_82[Gvar.var_2331][Gvar.var_2332] != 0 && Gvar.var_82[Gvar.var_2331][Gvar.var_2332] != 13 && Gvar.var_93[Gvar.var_2331][Gvar.var_2332] == 0) {
                Gvar.var_2337 = 1;
        }
        if (Gvar.var_120 == 0) {
                Gvar.var_271 = 0;
                Gvar.var_283 = "";
                Gvar.var_284 = "";
                Gvar.var_285 = "";
                Gvar.var_286 = "";
                Gvar.var_287 = "";
                Gvar.var_288 = "";
                Gvar.var_289 = 0;
                Gvar.var_283 = "すでにｼｱﾊｰﾄｱﾀｯｸを出しているぞ。";
                Gvar.var_284 = "";
                Gvar.var_223 = 1;
                Gvar.var_290 = 0;
                Gvar.var_24 = Gvar.var_24[1];
                Gvar.var_25 = Gvar.var_25[1];
                Gvar.var_26 = Gvar.var_26[1];
                await Func.func050();
                await Func.func009(); return;
        }
        if (Gvar.var_2337 == 0) {
                Gvar.var_283 = "";
                Gvar.var_284 = "";
                Gvar.var_285 = "";
                Gvar.var_286 = "";
                Gvar.var_287 = "";
                Gvar.var_288 = "";
                Gvar.var_289 = 0;
                Gvar.var_283 = "そこには出せないぞ。";
                Gvar.var_284 = "";
                Gvar.var_223 = 1;
                Gvar.var_290 = 0;
                Gvar.var_24 = Gvar.var_24[1];
                Gvar.var_25 = Gvar.var_25[1];
                Gvar.var_26 = Gvar.var_26[1];
                await Func.func050();
                for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                        await Func.func354();
                }
                Gvar.var_259 = 0;
                Gvar.var_245 = 0;
                await Func.func009(); return;
        }
        Gvar.var_2559 = 1;
        Gvar.var_443 = 4;
        await Func.func588();
        Gvar.var_2559 = 0;
        Gvar.var_443 = 0;
        Gvar.var_466 = (Gvar.var_308[Gvar.var_445][1] - Gvar.var_74 + 4) * 40;
        Gvar.var_467 = (Gvar.var_308[Gvar.var_445][2] - Gvar.var_75 + 4) * 40;
        Gvar.var_310 = 1;
        Gvar.var_468 = 1;
        Adap.DSPLAY(168);
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
                await Func.func354();
                Gvar.var_223 = 1;
                Gvar.var_290 = 0;
                Gvar.var_468++;
        }
        Gvar.var_310 = 0;
        Gvar.var_468 = 0;
        Gvar.var_257 = Gvar.var_2494;
        await Func.func538();
        await Func.func099();
        Gvar.var_283 = "";
        Gvar.var_284 = "";
        Gvar.var_285 = "";
        Gvar.var_286 = "";
        Gvar.var_287 = "";
        Gvar.var_288 = "";
        Gvar.var_289 = 0;
        Gvar.var_283 = "「シアー・ハート・アタック」！！";
        Gvar.var_284 = "狙った標的は必ず仕留める…";
        Gvar.var_223 = 1;
        Gvar.var_290 = 0;
        Gvar.var_24 = Gvar.var_24[1];
        Gvar.var_25 = Gvar.var_25[1];
        Gvar.var_26 = Gvar.var_26[1];
        await Func.func050();
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                await Func.func354();
        }
        Gvar.var_120 = 0;
        return;
}

export {func1039}
