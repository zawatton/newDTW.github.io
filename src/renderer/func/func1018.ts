import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func1018(this: any) {
        Adap.dbgprt(1018);
        Gvar.var_3949 = 0;
        Gvar.var_120 = 10;
        if (Gvar.var_93[Gvar.var_378][Gvar.var_379] != 0) {
                Gvar.var_1638 = Gvar.var_93[Gvar.var_378][Gvar.var_379];
                if (Gvar.var_308[Gvar.var_1638][0] != 50) {
                        Gvar.var_283 = "";
                        Gvar.var_284 = "";
                        Gvar.var_285 = "";
                        Gvar.var_286 = "";
                        Gvar.var_287 = "";
                        Gvar.var_288 = "";
                        Gvar.var_289 = 0;
                        Gvar.var_283 = "髪の毛で" + Gvar.var_1872 + "を掴んだ！";
                        Gvar.var_284 = "";
                        Gvar.var_223 = 1;
                        Gvar.var_290 = 0;
                        Gvar.var_24 = Gvar.var_24[1];
                        Gvar.var_25 = Gvar.var_25[1];
                        Gvar.var_26 = Gvar.var_26[1];
                        await Func.func050();
                        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
                                await Func.func354();
                        }
                        Adap.DSPLAY(136);
                        Gvar.var_1532 = 1;
                        Gvar.var_310 = 1;
                        Gvar.var_1533 = (Gvar.var_308[Gvar.var_1638][1] - Gvar.var_74 + 4) * 40;
                        Gvar.var_1534 = (Gvar.var_308[Gvar.var_1638][2] - Gvar.var_75 + 4) * 40 - 10;
                        for (let cnt1 = 0; cnt1 < 7; ++cnt1) {
                                await Func.func354();
                                Gvar.var_1532++;
                        }
                        Gvar.var_1532 = 1;
                        for (let cnt1 = 0; cnt1 < 7; ++cnt1) {
                                await Func.func354();
                        }
                        Gvar.var_283 = "";
                        Gvar.var_284 = "";
                        Gvar.var_285 = "";
                        Gvar.var_286 = "";
                        Gvar.var_287 = "";
                        Gvar.var_288 = "";
                        Gvar.var_289 = 0;
                        Gvar.var_283 = "「きさまの血を";
                        Gvar.var_284 = "　この肉体の一部としてやるッ！」";
                        Gvar.var_223 = 1;
                        Gvar.var_290 = 0;
                        Gvar.var_24 = Gvar.var_24[2];
                        Gvar.var_25 = Gvar.var_25[2];
                        Gvar.var_26 = Gvar.var_26[2];
                        await Func.func050();
                        Adap.DSPLAY(123);
                        Gvar.var_3359 = Gvar.var_308[Gvar.var_1638][5];
                        Gvar.var_308[Gvar.var_1638][5] = 2;
                        Gvar.var_308[Gvar.var_1638][8] = 1;
                        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
                                Gvar.var_1532 = 20;
                                for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                                        await Func.func354();
                                }
                                Gvar.var_1532 = 21;
                                for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                                        await Func.func354();
                                }
                                Gvar.var_1532 = 22;
                                for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                                        await Func.func354();
                                }
                                Gvar.var_223 = 1;
                                Gvar.var_290 = 0;
                        }
                        Gvar.var_310 = 0;
                        Gvar.var_1532 = 0;
                        Gvar.var_308[Gvar.var_1638][5] = Gvar.var_3359;
                        Gvar.var_308[Gvar.var_1638][8] = 0;
                        Adap.DSPLAY(143);
                        Gvar.var_283 = Gvar.var_286;
                        Gvar.var_284 = Gvar.var_287;
                        Gvar.var_3949 = 1;
                        Gvar.var_286 = "満腹度が回復した！";
                        Gvar.var_287 = "";
                        Adap.DSPLAY(143);
                        Gvar.var_381 = Gvar.var_381 + 20;
                        if (Gvar.var_381 >= Gvar.var_649) {
                                Gvar.var_381 = Gvar.var_649;
                                Gvar.var_286 = "満腹度が完全に回復した！";
                        }
                        await Func.func050();
                        await Func.func053();
                        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
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

export {func1018}
