import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func1050(this: any) {
        Adap.dbgprt(1050);
        if (Gvar.var_120 == 0) {
            Gvar.var_271 = 0;
            Gvar.var_283 = "";
            Gvar.var_284 = "";
            Gvar.var_285 = "";
            Gvar.var_286 = "";
            Gvar.var_287 = "";
            Gvar.var_288 = "";
            Gvar.var_289 = 0;
            Gvar.var_283 = "この特技を使うパワーが";
            Gvar.var_284 = "残っていないようだ･･･";
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            Gvar.var_24 = Gvar.var_24[1];
            Gvar.var_25 = Gvar.var_25[1];
            Gvar.var_26 = Gvar.var_26[1];
            await Func.func050();
            await Func.func009(); return;
        }
        else {
            if (Gvar.var_120 < 3) {
                Gvar.var_1727 = Gvar.var_74;
                Gvar.var_1728 = Gvar.var_75;
                Gvar.var_3106 = Gvar.var_445;
                Gvar.var_3107 = Gvar.var_74 - 5;
                if (Gvar.var_3107 < 0) {
                    Gvar.var_3107 = 0;
                }
                Gvar.var_3108 = Gvar.var_74 + 5;
                if (Gvar.var_3108 > Gvar.var_32) {
                    Gvar.var_3108 = Gvar.var_32;
                }
                Gvar.var_3109 = Gvar.var_75 + 5;
                if (Gvar.var_3109 > Gvar.var_33) {
                    Gvar.var_3109 = Gvar.var_33;
                }
                Gvar.var_3110 = Gvar.var_75 - 5;
                if (Gvar.var_3110 < 0) {
                    Gvar.var_3110 = 0;
                }
                Gvar.var_3111 = 1;
                Gvar.var_1729 = 0;
                Gvar.var_1732 = Adap.dim(30, 3);
                for (let cnt1 = 0; cnt1 < Gvar.var_107; ++cnt1) {
                    if (Gvar.var_308[Gvar.var_3111][0] == 43 && Gvar.var_308[Gvar.var_3111][11] == 0 && Gvar.var_308[Gvar.var_3111][12] == 0 && Gvar.var_308[Gvar.var_3111][13] == 0 && Gvar.var_308[Gvar.var_3111][31] == 5) {
                        if (Gvar.var_308[Gvar.var_3111][1] >= Gvar.var_3107 && Gvar.var_308[Gvar.var_3111][1] <= Gvar.var_3108 && Gvar.var_308[Gvar.var_3111][2] >= Gvar.var_3110 && Gvar.var_308[Gvar.var_3111][2] <= Gvar.var_3109) {
                            Gvar.var_1729++;
                            Gvar.var_1732[Gvar.var_1729][1] = Gvar.var_308[Gvar.var_3111][1];
                            Gvar.var_1732[Gvar.var_1729][2] = Gvar.var_308[Gvar.var_3111][2];
                            Gvar.var_308[Gvar.var_3111][21] = 1;
                            Gvar.var_471 = 1;
                        }
                    }
                    Gvar.var_3111++;
                }
                if (Gvar.var_1729 >= 1) {
                    await Func.func099();
                    Gvar.var_283 = "";
                    Gvar.var_284 = "";
                    Gvar.var_285 = "";
                    Gvar.var_286 = "";
                    Gvar.var_287 = "";
                    Gvar.var_288 = "";
                    Gvar.var_289 = 0;
                    Gvar.var_283 = "ﾁｮｺﾗｰﾀ「甘いの３つ欲しいのかッ！？」";
                    Gvar.var_24 = Gvar.var_24[2];
                    Gvar.var_25 = Gvar.var_25[2];
                    Gvar.var_26 = Gvar.var_26[2];
                    Gvar.var_223 = 1;
                    Gvar.var_290 = 0;
                    await Func.func050();
                    for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
                        await Func.func354();
                    }
                    Adap.DSPLAY(102);
                    Gvar.var_310 = 1;
                    Gvar.var_1726 = 1;
                    for (let cnt3 = 0; cnt3 < 15; ++cnt3) {
                        await Func.func354();
                        Gvar.var_1726++;
                    }
                    Gvar.var_310 = 0;
                    Gvar.var_1726 = 0;
                    Gvar.var_310 = 1;
                    Gvar.var_1730 = 1;
                    for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                        await Func.func354();
                        Gvar.var_1730++;
                    }
                    Gvar.var_310 = 0;
                    Gvar.var_1730 = 0;
                    Gvar.var_283 = "";
                    Gvar.var_284 = "";
                    Gvar.var_285 = "";
                    Gvar.var_286 = "";
                    Gvar.var_287 = "";
                    Gvar.var_288 = "";
                    Gvar.var_289 = 0;
                    Gvar.var_283 = "セッコ「ガリガリガリガリガリガリガリ」";
                    Gvar.var_24 = Gvar.var_24[2];
                    Gvar.var_25 = Gvar.var_25[2];
                    Gvar.var_26 = Gvar.var_26[2];
                    Gvar.var_223 = 1;
                    Gvar.var_290 = 0;
                    await Func.func050();
                    Adap.DSPLAY(196);
                    for (let cnt5 = 0; cnt5 < 10; ++cnt5) {
                        Gvar.var_471 = 2;
                        await Func.func354();
                        Gvar.var_471 = 3;
                        await Func.func354();
                    }
                    Gvar.var_3112 = 1;
                    Gvar.var_1729 = 0;
                    for (let cnt6 = 0; cnt6 < Gvar.var_107; ++cnt6) {
                        if (Gvar.var_308[Gvar.var_3112][0] == 43 && Gvar.var_308[Gvar.var_3112][11] == 0 && Gvar.var_308[Gvar.var_3112][12] == 0 && Gvar.var_308[Gvar.var_3112][13] == 0 && Gvar.var_308[Gvar.var_3112][31] == 5) {
                            if (Gvar.var_308[Gvar.var_3112][1] >= Gvar.var_3107 && Gvar.var_308[Gvar.var_3112][1] <= Gvar.var_3108 && Gvar.var_308[Gvar.var_3112][2] >= Gvar.var_3110 && Gvar.var_308[Gvar.var_3112][2] <= Gvar.var_3109) {
                                if (Gvar.var_308[Gvar.var_3112][25] >= 50) {
                                    Gvar.var_308[Gvar.var_3112][25] -= 2;
                                    if (Gvar.var_308[Gvar.var_3112][25] < 50) {
                                        Gvar.var_308[Gvar.var_3112][25] = 0;
                                    }
                                }
                                if (Gvar.var_308[Gvar.var_3112][25] < 50) {
                                    Gvar.var_308[Gvar.var_3112][25] += 2;
                                    if (Gvar.var_308[Gvar.var_3112][25] >= 50) {
                                        Gvar.var_308[Gvar.var_3112][25] = 49;
                                    }
                                }
                                Gvar.var_308[Gvar.var_3112][21] = 0;
                                Gvar.var_471 = 0;
                            }
                        }
                        Gvar.var_3112++;
                    }
                    Adap.DSPLAY(182);
                    Gvar.var_283 = Gvar.var_286;
                    Gvar.var_284 = Gvar.var_287;
                    Gvar.var_286 = "近くのセッコの攻撃力が上がった！";
                    Gvar.var_287 = "";
                    Gvar.var_24 = Gvar.var_24[2];
                    Gvar.var_25 = Gvar.var_25[2];
                    Gvar.var_26 = Gvar.var_26[2];
                    await Func.func053();
                    Gvar.var_223 = 1;
                    Gvar.var_290 = 0;
                    await Func.func050();
                    for (let cnt7 = 0; cnt7 < 9; ++cnt7) {
                        await Func.func354();
                    }
                    Gvar.var_2427 = 1;
                    Gvar.var_120 = Gvar.var_120 - 1;
                }
                else {
                    Gvar.var_271 = 0;
                    Gvar.var_283 = "";
                    Gvar.var_284 = "";
                    Gvar.var_285 = "";
                    Gvar.var_286 = "";
                    Gvar.var_287 = "";
                    Gvar.var_288 = "";
                    Gvar.var_289 = 0;
                    Gvar.var_283 = "近くにセッコが";
                    Gvar.var_284 = "いないようだ･･･";
                    Gvar.var_223 = 1;
                    Gvar.var_290 = 0;
                    Gvar.var_24 = Gvar.var_24[1];
                    Gvar.var_25 = Gvar.var_25[1];
                    Gvar.var_26 = Gvar.var_26[1];
                    await Func.func050();
                    await Func.func009(); return;
                }
            }
            else {
                Gvar.var_283 = "";
                Gvar.var_284 = "";
                Gvar.var_285 = "";
                Gvar.var_286 = "";
                Gvar.var_287 = "";
                Gvar.var_288 = "";
                Gvar.var_289 = 0;
                Gvar.var_283 = "ﾁｮｺﾗｰﾀはｾｯｺを呼んだ！";
                Gvar.var_24 = Gvar.var_24[2];
                Gvar.var_25 = Gvar.var_25[2];
                Gvar.var_26 = Gvar.var_26[2];
                Gvar.var_223 = 1;
                Gvar.var_290 = 0;
                await Func.func050();
                for (let cnt8 = 0; cnt8 < 16; ++cnt8) {
                    Gvar.var_290 = 0;
                    await Func.func354();
                }
                Gvar.var_2791 = 1;
                Gvar.var_443 = 1;
                Gvar.var_444 = Gvar.var_445;
                Gvar.var_2816 = 1;
                await Func.func588();
                Gvar.var_2816 = 0;
                Gvar.var_446 = Gvar.var_445;
                Gvar.var_445 = Gvar.var_444;
                Gvar.var_2791 = 0;
                Gvar.var_443 = 0;
                if (Gvar.var_2339 == 0) {
                    Gvar.var_283 = Gvar.var_286;
                    Gvar.var_284 = Gvar.var_287;
                    Gvar.var_286 = "しかしｾｯｺは来なかった…";
                    Gvar.var_287 = "";
                    Gvar.var_24 = Gvar.var_24[2];
                    Gvar.var_25 = Gvar.var_25[2];
                    Gvar.var_26 = Gvar.var_26[2];
                    await Func.func053();
                    Gvar.var_223 = 1;
                    Gvar.var_290 = 0;
                    await Func.func050();
                    Gvar.var_2427 = 1;
                    await Func.func009(); return;
                }
                Gvar.var_466 = (Gvar.var_308[Gvar.var_446][1] - Gvar.var_74 + 4) * 40;
                Gvar.var_467 = (Gvar.var_308[Gvar.var_446][2] - Gvar.var_75 + 4) * 40;
                Gvar.var_310 = 1;
                Gvar.var_468 = 1;
                Adap.DSPLAY(168);
                for (let cnt9 = 0; cnt9 < 10; ++cnt9) {
                    await Func.func354();
                    Gvar.var_223 = 1;
                    Gvar.var_290 = 0;
                    Gvar.var_468++;
                }
                Gvar.var_310 = 0;
                Gvar.var_468 = 0;
                await Func.func348();
                await Func.func099();
                Gvar.var_283 = Gvar.var_286;
                Gvar.var_284 = Gvar.var_287;
                Gvar.var_286 = "ヤツが死ぬところを撮影して来いッ！";
                Gvar.var_287 = "";
                Gvar.var_24 = Gvar.var_24[2];
                Gvar.var_25 = Gvar.var_25[2];
                Gvar.var_26 = Gvar.var_26[2];
                await Func.func053();
                Gvar.var_223 = 1;
                Gvar.var_290 = 0;
                await Func.func050();
                Gvar.var_2427 = 1;
                Gvar.var_120 = Gvar.var_120 - 1;
            }
        }
        return;
}

export {func1050}
