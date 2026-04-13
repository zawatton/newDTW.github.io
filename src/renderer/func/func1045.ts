import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func1045(this: any) {
        Adap.dbgprt(1045);
        Gvar.var_472 = Gvar.var_445;
        Gvar.var_3949 = 0;
        Gvar.var_120 = 10;
        if (Gvar.var_93[Gvar.var_378][Gvar.var_379] != 0) {
            Gvar.var_1638 = Gvar.var_93[Gvar.var_378][Gvar.var_379];
            if (Gvar.var_308[Gvar.var_1638][0] != 50) {
                Gvar.var_268 = Gvar.var_308[Gvar.var_1638][0];
                await Func.func658();
                if (Gvar.var_308[Gvar.var_1638][26] == 2 || Gvar.var_2497 == 1 || Gvar.var_249 >= 20 || Gvar.var_308[Gvar.var_1638][44] == 1) {
                    Gvar.var_271 = 0;
                    Gvar.var_283 = "";
                    Gvar.var_284 = "";
                    Gvar.var_285 = "";
                    Gvar.var_286 = "";
                    Gvar.var_287 = "";
                    Gvar.var_288 = "";
                    Gvar.var_289 = 0;
                    Gvar.var_283 = "" + Gvar.var_1872 + "にDISCを抜き取る隙がないようだ…";
                    if (Gvar.var_249 >= 20) {
                        Gvar.var_283 = "持ち物が一杯のようだ…";
                    }
                    if (Gvar.var_308[Gvar.var_1638][26] == 2 || Gvar.var_308[Gvar.var_1638][44] == 1) {
                        Gvar.var_283 = "DISCを装備してないようだ…";
                    }
                    Gvar.var_223 = 1;
                    Gvar.var_290 = 0;
                    Gvar.var_24 = Gvar.var_24[1];
                    Gvar.var_25 = Gvar.var_25[1];
                    Gvar.var_26 = Gvar.var_26[1];
                    await Func.func050();
                    await Func.func009(); return;
                }
                Gvar.var_271 = 1;
                Gvar.var_1367 = 1;
                Gvar.var_842 = 0;
                Gvar.var_308[Gvar.var_1638][44] = 1;
                Adap.DSPLAY(122);
                for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
                    if (cnt1 == 0 || cnt1 == 1 || cnt1 == 9) {
                        if (Gvar.var_224 == 2) {
                            Gvar.var_540 = 7;
                        }
                        if (Gvar.var_224 == 8) {
                            Gvar.var_540 = 6;
                        }
                        if (Gvar.var_224 == 4) {
                            Gvar.var_540 = 5;
                        }
                        if (Gvar.var_224 == 6) {
                            Gvar.var_540 = 7;
                        }
                        if (Gvar.var_224 == 1) {
                            Gvar.var_540 = 7;
                        }
                        if (Gvar.var_224 == 3) {
                            Gvar.var_540 = 1;
                        }
                        if (Gvar.var_224 == 7) {
                            Gvar.var_540 = 2;
                        }
                        if (Gvar.var_224 == 9) {
                            Gvar.var_540 = 4;
                        }
                    }
                    if (cnt1 == 2 || cnt1 == 3 || cnt1 == 8) {
                        if (Gvar.var_224 == 2) {
                            Gvar.var_540 = 1;
                        }
                        if (Gvar.var_224 == 8) {
                            Gvar.var_540 = 3;
                        }
                        if (Gvar.var_224 == 4) {
                            Gvar.var_540 = 2;
                        }
                        if (Gvar.var_224 == 6) {
                            Gvar.var_540 = 4;
                        }
                        if (Gvar.var_224 == 1) {
                            Gvar.var_540 = 5;
                        }
                        if (Gvar.var_224 == 3) {
                            Gvar.var_540 = 7;
                        }
                        if (Gvar.var_224 == 7) {
                            Gvar.var_540 = 6;
                        }
                        if (Gvar.var_224 == 9) {
                            Gvar.var_540 = 9;
                        }
                    }
                    if (cnt1 == 4 || cnt1 == 5 || cnt1 == 6 || cnt1 == 7) {
                        if (Gvar.var_224 == 2) {
                            Gvar.var_540 = 5;
                        }
                        if (Gvar.var_224 == 8) {
                            Gvar.var_540 = 8;
                        }
                        if (Gvar.var_224 == 4) {
                            Gvar.var_540 = 6;
                        }
                        if (Gvar.var_224 == 6) {
                            Gvar.var_540 = 8;
                        }
                        if (Gvar.var_224 == 1) {
                            Gvar.var_540 = 2;
                        }
                        if (Gvar.var_224 == 3) {
                            Gvar.var_540 = 4;
                        }
                        if (Gvar.var_224 == 7) {
                            Gvar.var_540 = 3;
                        }
                        if (Gvar.var_224 == 9) {
                            Gvar.var_540 = 3;
                        }
                    }
                    await Func.func354();
                }
                Gvar.var_1367 = 0;
                Gvar.var_842 = 0;
                Gvar.var_271 = 0;
                Gvar.var_540 = 0;
                Gvar.var_3949 = 1;
                Gvar.var_2498 = 1;
                Gvar.var_3375 = 1;
                Gvar.var_968 = 0;
                await Func.func713();
                Gvar.var_2498 = 0;
                Gvar.var_257 = Gvar.var_89[Gvar.var_968][0];
                Gvar.var_485 = Gvar.var_257;
                await Func.func524();
                Gvar.var_249 = Gvar.var_249 + 1;
                Gvar.var_88[Gvar.var_89[Gvar.var_968][1]][Gvar.var_89[Gvar.var_968][2]] = 0;
                for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
                    if (cnt2 == 1 || cnt2 == 2 || cnt2 == 9 || cnt2 == 10) {
                        Gvar.var_89[Gvar.var_968][cnt2] = 0;
                        continue;
                    }
                    Gvar.var_258[Gvar.var_249][cnt2] = Gvar.var_89[Gvar.var_968][cnt2];
                    Gvar.var_89[Gvar.var_3952][cnt2] = 0;
                }
                Gvar.var_283 = "";
                Gvar.var_284 = "";
                Gvar.var_285 = "";
                Gvar.var_286 = "";
                Gvar.var_287 = "";
                Gvar.var_288 = "";
                Gvar.var_289 = 0;
                Gvar.var_283 = "" + Gvar.var_1872 + "の";
                Gvar.var_284 = "" + Gvar.var_557 + "を抜き取った！";
                Gvar.var_223 = 1;
                Gvar.var_290 = 0;
                Gvar.var_24 = Gvar.var_24[2];
                Gvar.var_25 = Gvar.var_25[2];
                Gvar.var_26 = Gvar.var_26[2];
                await Func.func050();
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    await Func.func354();
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

export {func1045}
