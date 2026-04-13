import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func1017(this: any) {
        Adap.dbgprt(1017);
        Gvar.var_3949 = 0;
        Gvar.var_120 = 10;
        if (Gvar.var_93[Gvar.var_378][Gvar.var_379] != 0) {
                Gvar.var_1638 = Gvar.var_93[Gvar.var_378][Gvar.var_379];
                if (Gvar.var_308[Gvar.var_1638][0] != 50) {
                        if (Gvar.var_308[Gvar.var_1638][12] == 99) {
                                Gvar.var_308[Gvar.var_1638][12] = 0;
                        }
                        Gvar.var_308[Gvar.var_1638][13] = 0;
                        Adap.DSPLAY(156);
                        Gvar.var_540 = 1;
                        Gvar.var_1652 = 1;
                        Gvar.var_310 = 1;
                        Gvar.var_308[Gvar.var_1638][8] = 1;
                        Gvar.var_3359 = Gvar.var_308[Gvar.var_1638][5];
                        Gvar.var_308[Gvar.var_1638][5] = 2;
                        Gvar.var_1653 = (Gvar.var_308[Gvar.var_1638][1] - Gvar.var_74 + 4) * 40;
                        Gvar.var_1654 = (Gvar.var_308[Gvar.var_1638][2] - Gvar.var_75 + 4) * 40 - 10;
                        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
                                await Func.func354();
                                Gvar.var_1652++;
                        }
                        Gvar.var_540 = 0;
                        Gvar.var_1652 = 0;
                        Gvar.var_310 = 0;
                        Gvar.var_124 = 0;
                        Gvar.var_308[Gvar.var_1638][8] = 0;
                        Gvar.var_308[Gvar.var_1638][5] = Gvar.var_3359;
                        Gvar.var_268 = Gvar.var_308[Gvar.var_1638][0];
                        await Func.func658();
                        Gvar.var_283 = "";
                        Gvar.var_284 = "";
                        Gvar.var_285 = "";
                        Gvar.var_286 = "";
                        Gvar.var_287 = "";
                        Gvar.var_288 = "";
                        Gvar.var_289 = 0;
                        if (Gvar.var_308[Gvar.var_1638][0] != 119 && Gvar.var_308[Gvar.var_1638][0] != 147) {
                                Adap.DSPLAY(151);
                                if (Gvar.var_308[Gvar.var_1638][39] >= 2) {
                                        Gvar.var_308[Gvar.var_1638][39] = Gvar.var_308[Gvar.var_1638][39] - 1;
                                        if (Gvar.var_308[Gvar.var_1638][39] <= 1) {
                                                Gvar.var_308[Gvar.var_1638][39] = 0;
                                        }
                                        if (Gvar.var_308[Gvar.var_1638][31] == 5) {
                                                Gvar.var_3355 = Gvar.var_1638;
                                                await Func.func720();
                                                Gvar.var_308[Gvar.var_1638][16] = Gvar.var_308[Gvar.var_1638][16] + Gvar.var_3356;
                                                Gvar.var_308[Gvar.var_1638][16] = Gvar.var_308[Gvar.var_1638][16] - 1;
                                        }
                                        if (Gvar.var_308[Gvar.var_1638][3] >= Gvar.var_505) {
                                                Gvar.var_308[Gvar.var_1638][3] = Gvar.var_505;
                                        }
                                        Gvar.var_268 = Gvar.var_308[Gvar.var_1638][0];
                                        if (Gvar.var_308[Gvar.var_1638][0] == 97 && Gvar.var_308[Gvar.var_1638][31] >= 11) {
                                                Gvar.var_268 = Gvar.var_308[Gvar.var_1638][31];
                                        }
                                        await Func.func658();
                                        Gvar.var_283 = "" + Gvar.var_1872 + "は";
                                        Gvar.var_284 = "レベルが下がった";
                                }
                                else {
                                        if (Gvar.var_308[Gvar.var_1638][25] <= 50) {
                                                Gvar.var_308[Gvar.var_1638][25] = 50;
                                        }
                                        Gvar.var_308[Gvar.var_1638][25] = Gvar.var_308[Gvar.var_1638][25] + 5;
                                        if (Gvar.var_308[Gvar.var_1638][25] >= 99) {
                                                Gvar.var_308[Gvar.var_1638][25] = 99;
                                        }
                                        Gvar.var_283 = "" + Gvar.var_1872 + "は";
                                        Gvar.var_284 = "攻撃力が下がった！";
                                }
                        }
                        else {
                                if (Gvar.var_308[Gvar.var_1638][0] == 147) {
                                        Gvar.var_268 = 119;
                                        Gvar.var_308[Gvar.var_1638][14] = 0;
                                }
                                if (Gvar.var_308[Gvar.var_1638][0] == 119) {
                                        Gvar.var_268 = 135;
                                }
                                if (Gvar.var_131 == Gvar.var_1638) {
                                        Gvar.var_131 = 0;
                                        Gvar.var_532 = 0;
                                        Gvar.var_533 = 0;
                                        Gvar.var_530 = 0;
                                        Gvar.var_531 = 0;
                                }
                                Gvar.var_3950 = Gvar.var_1872;
                                Gvar.var_308[Gvar.var_1638][0] = Gvar.var_268;
                                await Func.func658();
                                Gvar.var_308[Gvar.var_1638][3] = Gvar.var_505;
                                Gvar.var_283 = "" + Gvar.var_3950 + "は若返った！";
                                Gvar.var_284 = "";
                        }
                        Gvar.var_223 = 1;
                        Gvar.var_290 = 0;
                        Gvar.var_24 = Gvar.var_24[2];
                        Gvar.var_25 = Gvar.var_25[2];
                        Gvar.var_26 = Gvar.var_26[2];
                        await Func.func050();
                        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
                                await Func.func354();
                        }
                        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
                                await Func.func354();
                        }
                        Gvar.var_3949 = 1;
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

export {func1017}
