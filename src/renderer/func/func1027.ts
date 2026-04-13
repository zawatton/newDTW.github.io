import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func1027(this: any) {
        Adap.dbgprt(1027);
        Gvar.var_472 = Gvar.var_445;
        Gvar.var_3949 = 0;
        Gvar.var_120 = 10;
        if (Gvar.var_93[Gvar.var_378][Gvar.var_379] != 0) {
                Gvar.var_1638 = Gvar.var_93[Gvar.var_378][Gvar.var_379];
                if (Gvar.var_308[Gvar.var_1638][0] != 50) {
                        Gvar.var_268 = Gvar.var_308[Gvar.var_1638][0];
                        await Func.func658();
                        if (Gvar.var_308[Gvar.var_1638][26] == 2 || Gvar.var_2497 == 1 || Gvar.var_249 >= 20 || (Gvar.var_308[Gvar.var_1638][44] == 1 && Gvar.var_308[Gvar.var_1638][26] != 1)) {
                                Gvar.var_271 = 0;
                                Gvar.var_283 = "";
                                Gvar.var_284 = "";
                                Gvar.var_285 = "";
                                Gvar.var_286 = "";
                                Gvar.var_287 = "";
                                Gvar.var_288 = "";
                                Gvar.var_289 = 0;
                                Gvar.var_283 = "ﾊｰｳﾞｪｽﾄは様子をうかがっている…";
                                if (Gvar.var_249 >= 20) {
                                        Gvar.var_283 = "持ち物が一杯のようだ…";
                                }
                                if (Gvar.var_308[Gvar.var_1638][26] == 2 || (Gvar.var_308[Gvar.var_1638][44] == 1 && Gvar.var_308[Gvar.var_1638][26] != 1)) {
                                        Gvar.var_283 = "盗むようなものを持っていないようだ…";
                                }
                                Gvar.var_223 = 1;
                                Gvar.var_290 = 0;
                                Gvar.var_24 = Gvar.var_24[1];
                                Gvar.var_25 = Gvar.var_25[1];
                                Gvar.var_26 = Gvar.var_26[1];
                                await Func.func050();
                                await Func.func009(); return;
                        }
                        Gvar.var_3949 = 1;
                        Adap.DSPLAY(122);
                        Gvar.var_308[Gvar.var_1638][8] = 1;
                        Gvar.var_271 = 1;
                        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
                                await Func.func354();
                        }
                        Gvar.var_271 = 0;
                        Gvar.var_308[Gvar.var_1638][8] = 0;
                        Gvar.var_3374 = 1;
                        Gvar.var_968 = 0;
                        await Func.func713();
                        Gvar.var_3952 = Gvar.var_968;
                        Gvar.var_257 = Gvar.var_89[Gvar.var_3952][0];
                        Gvar.var_485 = Gvar.var_257;
                        Gvar.var_1385 = Gvar.var_89[Gvar.var_3952][13];
                        Gvar.var_555 = Gvar.var_89[Gvar.var_3952][13];
                        await Func.func524();
                        Gvar.var_249 = Gvar.var_249 + 1;
                        Gvar.var_88[Gvar.var_89[Gvar.var_3952][1]][Gvar.var_89[Gvar.var_3952][2]] = 0;
                        for (let cnt1 = 0; cnt1 < 30; ++cnt1) {
                                if (cnt1 == 1 || cnt1 == 2 || cnt1 == 9 || cnt1 == 10) {
                                        continue;
                                }
                                Gvar.var_258[Gvar.var_249][cnt1] = Gvar.var_89[Gvar.var_3952][cnt1];
                                Gvar.var_89[Gvar.var_3952][cnt1] = 0;
                        }
                        Gvar.var_486 = Gvar.var_557;
                        Gvar.var_283 = "";
                        Gvar.var_284 = "";
                        Gvar.var_285 = "";
                        Gvar.var_286 = "";
                        Gvar.var_287 = "";
                        Gvar.var_288 = "";
                        Gvar.var_289 = 0;
                        Gvar.var_283 = "" + Gvar.var_486 + "を盗んだ！";
                        Gvar.var_223 = 1;
                        Gvar.var_290 = 0;
                        Gvar.var_24 = Gvar.var_24[2];
                        Gvar.var_25 = Gvar.var_25[2];
                        Gvar.var_26 = Gvar.var_26[2];
                        await Func.func050();
                        Gvar.var_308[Gvar.var_1638][26] = 2;
                        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
                                await Func.func354();
                        }
                        Gvar.var_2427 = 1;
                        if (Gvar.var_258[Gvar.var_249][15] == 2) {
                                Gvar.var_258[Gvar.var_249][15] = 0;
                                Gvar.var_1398 = 1;
                                for (let cnt1 = 0; cnt1 < 14; ++cnt1) {
                                        await Func.func354();
                                        Gvar.var_1398 = Gvar.var_1398 + 1;
                                        Gvar.var_223 = 1;
                                        Gvar.var_290 = 0;
                                }
                                Gvar.var_1398 = 0;
                                Gvar.var_283 = "";
                                Gvar.var_284 = "";
                                Gvar.var_285 = "";
                                Gvar.var_286 = "";
                                Gvar.var_287 = "";
                                Gvar.var_288 = "";
                                Gvar.var_289 = 0;
                                Gvar.var_283 = "なんと" + Gvar.var_486 + "は";
                                Gvar.var_284 = "爆弾だった！";
                                Gvar.var_223 = 1;
                                Gvar.var_290 = 0;
                                Gvar.var_24 = Gvar.var_24[1];
                                Gvar.var_25 = Gvar.var_25[1];
                                Gvar.var_26 = Gvar.var_26[1];
                                await Func.func050();
                                Gvar.var_523 = Gvar.var_2061;
                                Gvar.var_524 = Gvar.var_2062;
                                await Func.func741();
                                Gvar.var_202 = 0;
                                if (Gvar.var_236 <= 0) {
                                        Gvar.var_236 = 0;
                                        Gvar.var_237 = 1;
                                        await Func.func009(); return;
                                }
                        }
                        else {
                                Gvar.var_1398 = 1;
                                for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
                                        await Func.func354();
                                        Gvar.var_1398 = Gvar.var_1398 + 1;
                                        if (Gvar.var_1398 == 16) {
                                                Adap.DSPLAY(216);
                                        }
                                }
                                Gvar.var_1398 = 0;
                                Gvar.var_256 = 0;
                                Gvar.var_259 = 0;
                                Gvar.var_2063 = 0;
                                Gvar.var_2064 = 1;
                                if (Gvar.var_150 == 0) {
                                        Gvar.var_178 = 1;
                                        Gvar.var_179 = 0;
                                }
                                if (Gvar.var_150 != 0) {
                                        Gvar.var_150 = 0;
                                }
                                if (Gvar.var_300 == 0) {
                                        await Func.func531();
                                }
                        }
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
                Gvar.var_283 = "目の前に敵がいないようだ";
                Gvar.var_223 = 1;
                Gvar.var_290 = 0;
                Gvar.var_24 = Gvar.var_24[1];
                Gvar.var_25 = Gvar.var_25[1];
                Gvar.var_26 = Gvar.var_26[1];
                await Func.func050();
                await Func.func009(); return;
        }
        return;
}

export {func1027}
