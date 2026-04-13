import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func1040(this: any) {
        Adap.dbgprt(1040);
        Gvar.var_378 = Gvar.var_74;
        Gvar.var_379 = Gvar.var_75;
        if (Gvar.var_224 == 4) {
                Gvar.var_378 = Gvar.var_378 - 1;
        }
        if (Gvar.var_224 == 6) {
                Gvar.var_378 = Gvar.var_378 + 1;
        }
        if (Gvar.var_224 == 8) {
                Gvar.var_379 = Gvar.var_379 - 1;
        }
        if (Gvar.var_224 == 2) {
                Gvar.var_379 = Gvar.var_379 + 1;
        }
        if (Gvar.var_224 == 1) {
                Gvar.var_378 = Gvar.var_378 - 1;
                Gvar.var_379 = Gvar.var_379 + 1;
        }
        if (Gvar.var_224 == 3) {
                Gvar.var_378 = Gvar.var_378 + 1;
                Gvar.var_379 = Gvar.var_379 + 1;
        }
        if (Gvar.var_224 == 7) {
                Gvar.var_378 = Gvar.var_378 - 1;
                Gvar.var_379 = Gvar.var_379 - 1;
        }
        if (Gvar.var_224 == 9) {
                Gvar.var_378 = Gvar.var_378 + 1;
                Gvar.var_379 = Gvar.var_379 - 1;
        }
        Gvar.var_3949 = 0;
        await Func.func1013();
        if (Gvar.var_93[Gvar.var_378][Gvar.var_379] != 0) {
                Gvar.var_1638 = Gvar.var_93[Gvar.var_378][Gvar.var_379];
                Gvar.var_268 = Gvar.var_308[Gvar.var_1638][0];
                await Func.func658();
                if (Gvar.var_308[Gvar.var_1638][0] != 50 && Gvar.var_2497 == 0) {
                        Gvar.var_3949 = 1;
                        Adap.DSPLAY(197);
                        Gvar.var_476 = 1;
                        Gvar.var_271 = 1;
                        Adap.DSPLAY(197);
                        Gvar.var_308[Gvar.var_1638][8] = 1;
                        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
                                await Func.func354();
                        }
                        for (let cnt1 = 0; cnt1 < 8; ++cnt1) {
                                await Func.func354();
                        }
                        Gvar.var_271 = 0;
                        Gvar.var_308[Gvar.var_1638][8] = 0;
                        Gvar.var_176 = Gvar.var_308[Gvar.var_1638][0];
                        await Func.func1014();
                        await Func.func1015();
                        Gvar.var_308[Gvar.var_1638][0] = 0;
                        Gvar.var_308[Gvar.var_1638][1] = 0;
                        Gvar.var_308[Gvar.var_1638][2] = 0;
                        Gvar.var_224 = Gvar.var_308[Gvar.var_1638][5];
                        Gvar.var_93[Gvar.var_378][Gvar.var_379] = 0;
                        Gvar.var_74 = Gvar.var_378;
                        Gvar.var_75 = Gvar.var_379;
                        await Func.func016();
                        if (Gvar.var_226 != 14) {
                                await Func.func017();
                        }
                        await Func.func018();
                        if (Gvar.var_225 == Gvar.var_226 && Gvar.var_104 != 8) {
                                Gvar.var_109 = 1;
                        }
                        if (Gvar.var_227 == Gvar.var_226 && Gvar.var_104 != 8) {
                                Gvar.var_110 = 1;
                        }
                        await Func.func348();
                        Gvar.var_476 = 0;
                        Gvar.var_283 = "";
                        Gvar.var_284 = "";
                        Gvar.var_285 = "";
                        Gvar.var_286 = "";
                        Gvar.var_287 = "";
                        Gvar.var_288 = "";
                        Gvar.var_289 = 0;
                        Gvar.var_283 = "" + Gvar.var_422 + "は";
                        Gvar.var_284 = "" + Gvar.var_1872 + "に取り憑いた！";
                        Gvar.var_223 = 1;
                        Gvar.var_290 = 0;
                        Gvar.var_24 = Gvar.var_24[1];
                        Gvar.var_25 = Gvar.var_25[1];
                        Gvar.var_26 = Gvar.var_26[1];
                        await Func.func050();
                }
        }
        if (Gvar.var_3949 == 0) {
                Gvar.var_271 = 0;
                Gvar.var_283 = "";
                Gvar.var_284 = "";
                Gvar.var_285 = "";
                Gvar.var_286 = "";
                Gvar.var_287 = "";
                Gvar.var_288 = "";
                Gvar.var_289 = 0;
                Gvar.var_283 = "" + Gvar.var_422 + "は";
                Gvar.var_284 = "恨みに震えている。";
                Gvar.var_223 = 1;
                Gvar.var_290 = 0;
                Gvar.var_24 = Gvar.var_24[1];
                Gvar.var_25 = Gvar.var_25[1];
                Gvar.var_26 = Gvar.var_26[1];
                await Func.func050();
                for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
                        Gvar.var_540 = 1;
                        await Func.func354();
                        Gvar.var_540 = 2;
                        await Func.func354();
                }
                Gvar.var_540 = 0;
                await Func.func009(); return;
        }
        return;
}

export {func1040}
