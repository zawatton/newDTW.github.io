import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func1023(this: any) {
        Adap.dbgprt(1023);
        Gvar.var_604 = 1;
        // gsel 19 - screen buffer select (no-op in TS)
        // color 255, 255, 255 / boxf - screen buffer clear (no-op in TS)
        // gsel 0
        Gvar.var_283 = "";
        Gvar.var_284 = "";
        Gvar.var_285 = "";
        Gvar.var_286 = "";
        Gvar.var_287 = "";
        Gvar.var_288 = "";
        Gvar.var_289 = 0;
        Gvar.var_283 = "ｴﾝﾎﾟﾘｵは純粋酸素を大量に集めた！";
        Gvar.var_284 = "";
        Gvar.var_223 = 1;
        Gvar.var_290 = 0;
        Gvar.var_24 = Gvar.var_24[2];
        Gvar.var_25 = Gvar.var_25[2];
        Gvar.var_26 = Gvar.var_26[2];
        await Func.func050();
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
                await Func.func354();
        }
        Gvar.var_457 = "酸素が細胞組織を破壊している！";
        Gvar.var_2455 = 1;
        Gvar.var_2424 = 1;
        Gvar.var_3951 = 0;
        for (let cnt1 = 0; cnt1 < Gvar.var_107; ++cnt1) {
                Gvar.var_2456 = 20;
                Gvar.var_2457 = 0;
                Gvar.var_2456 = Gvar.var_2456 + Gvar.var_2457;
                if (Gvar.var_2424 != Gvar.var_141) {
                        Gvar.var_2458 = 0;
                        if (Gvar.var_308[Gvar.var_2424][0] != 0 && Gvar.var_308[Gvar.var_2424][10] == Gvar.var_226 && Gvar.var_226 > 0 && Gvar.var_226 <= 12) {
                                Gvar.var_456 = Gvar.var_2424;
                                Gvar.var_234 = Gvar.var_2456;
                                if (Gvar.var_308[Gvar.var_2424][0] == 60) {
                                        Gvar.var_234 = 999;
                                }
                                await Func.func548();
                                await Func.func745();
                                for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                                        await Func.func354();
                                }
                                Gvar.var_3951 = 1;
                                Gvar.var_2458 = 1;
                        }
                        if (Gvar.var_2458 == 0) {
                                Gvar.var_2221 = Gvar.var_74 - 1;
                                if (Gvar.var_2221 < 0) {
                                        Gvar.var_2221 = 0;
                                }
                                Gvar.var_2222 = Gvar.var_74 + 1;
                                if (Gvar.var_2222 > Gvar.var_32) {
                                        Gvar.var_2222 = Gvar.var_32;
                                }
                                Gvar.var_2223 = Gvar.var_75 + 1;
                                if (Gvar.var_2223 > Gvar.var_33) {
                                        Gvar.var_2223 = Gvar.var_33;
                                }
                                Gvar.var_2224 = Gvar.var_75 - 1;
                                if (Gvar.var_2224 < 0) {
                                        Gvar.var_2224 = 0;
                                }
                                if (Gvar.var_308[Gvar.var_2424][0] != 0 && Gvar.var_308[Gvar.var_2424][1] == Gvar.var_74 && Gvar.var_308[Gvar.var_2424][2] == Gvar.var_2223) {
                                        Gvar.var_456 = Gvar.var_2424;
                                        Gvar.var_234 = Gvar.var_2456;
                                        if (Gvar.var_308[Gvar.var_2424][0] == 60) {
                                                Gvar.var_234 = 999;
                                        }
                                        await Func.func548();
                                        await Func.func745();
                                        for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                                                await Func.func354();
                                        }
                                        Gvar.var_3951 = 1;
                                        Gvar.var_2458 = 1;
                                }
                                if (Gvar.var_308[Gvar.var_2424][0] != 0 && Gvar.var_308[Gvar.var_2424][1] == Gvar.var_74 && Gvar.var_308[Gvar.var_2424][2] == Gvar.var_2224) {
                                        Gvar.var_456 = Gvar.var_2424;
                                        Gvar.var_234 = Gvar.var_2456;
                                        if (Gvar.var_308[Gvar.var_2424][0] == 60) {
                                                Gvar.var_234 = 999;
                                        }
                                        await Func.func548();
                                        await Func.func745();
                                        for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                                                await Func.func354();
                                        }
                                        Gvar.var_3951 = 1;
                                        Gvar.var_2458 = 1;
                                }
                                if (Gvar.var_308[Gvar.var_2424][0] != 0 && Gvar.var_308[Gvar.var_2424][1] == Gvar.var_2221 && Gvar.var_308[Gvar.var_2424][2] == Gvar.var_75) {
                                        Gvar.var_456 = Gvar.var_2424;
                                        Gvar.var_234 = Gvar.var_2456;
                                        if (Gvar.var_308[Gvar.var_2424][0] == 60) {
                                                Gvar.var_234 = 999;
                                        }
                                        await Func.func548();
                                        await Func.func745();
                                        for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                                                await Func.func354();
                                        }
                                        Gvar.var_3951 = 1;
                                        Gvar.var_2458 = 1;
                                }
                                if (Gvar.var_308[Gvar.var_2424][0] != 0 && Gvar.var_308[Gvar.var_2424][1] == Gvar.var_2222 && Gvar.var_308[Gvar.var_2424][2] == Gvar.var_75) {
                                        Gvar.var_456 = Gvar.var_2424;
                                        Gvar.var_234 = Gvar.var_2456;
                                        if (Gvar.var_308[Gvar.var_2424][0] == 60) {
                                                Gvar.var_234 = 999;
                                        }
                                        await Func.func548();
                                        await Func.func745();
                                        for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                                                await Func.func354();
                                        }
                                        Gvar.var_3951 = 1;
                                        Gvar.var_2458 = 1;
                                }
                                if (Gvar.var_308[Gvar.var_2424][0] != 0 && Gvar.var_308[Gvar.var_2424][1] == Gvar.var_2221 && Gvar.var_308[Gvar.var_2424][2] == Gvar.var_2223) {
                                        Gvar.var_456 = Gvar.var_2424;
                                        Gvar.var_234 = Gvar.var_2456;
                                        if (Gvar.var_308[Gvar.var_2424][0] == 60) {
                                                Gvar.var_234 = 999;
                                        }
                                        await Func.func548();
                                        await Func.func745();
                                        for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                                                await Func.func354();
                                        }
                                        Gvar.var_3951 = 1;
                                        Gvar.var_2458 = 1;
                                }
                                if (Gvar.var_308[Gvar.var_2424][0] != 0 && Gvar.var_308[Gvar.var_2424][1] == Gvar.var_2222 && Gvar.var_308[Gvar.var_2424][2] == Gvar.var_2223) {
                                        Gvar.var_456 = Gvar.var_2424;
                                        Gvar.var_234 = Gvar.var_2456;
                                        if (Gvar.var_308[Gvar.var_2424][0] == 60) {
                                                Gvar.var_234 = 999;
                                        }
                                        await Func.func548();
                                        await Func.func745();
                                        for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                                                await Func.func354();
                                        }
                                        Gvar.var_3951 = 1;
                                        Gvar.var_2458 = 1;
                                }
                                if (Gvar.var_308[Gvar.var_2424][0] != 0 && Gvar.var_308[Gvar.var_2424][1] == Gvar.var_2221 && Gvar.var_308[Gvar.var_2424][2] == Gvar.var_2224) {
                                        Gvar.var_456 = Gvar.var_2424;
                                        Gvar.var_234 = Gvar.var_2456;
                                        if (Gvar.var_308[Gvar.var_2424][0] == 60) {
                                                Gvar.var_234 = 999;
                                        }
                                        await Func.func548();
                                        await Func.func745();
                                        for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                                                await Func.func354();
                                        }
                                        Gvar.var_3951 = 1;
                                        Gvar.var_2458 = 1;
                                }
                                if (Gvar.var_308[Gvar.var_2424][0] != 0 && Gvar.var_308[Gvar.var_2424][1] == Gvar.var_2222 && Gvar.var_308[Gvar.var_2424][2] == Gvar.var_2224) {
                                        Gvar.var_456 = Gvar.var_2424;
                                        Gvar.var_234 = Gvar.var_2456;
                                        if (Gvar.var_308[Gvar.var_2424][0] == 60) {
                                                Gvar.var_234 = 999;
                                        }
                                        await Func.func548();
                                        await Func.func745();
                                        for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                                                await Func.func354();
                                        }
                                        Gvar.var_3951 = 1;
                                        Gvar.var_2458 = 1;
                                }
                        }
                        if (Gvar.var_2458 == 0 && Gvar.var_226 <= 12 && Gvar.var_226 != 0) {
                                Gvar.var_2459 = Gvar.var_308[Gvar.var_2424][1];
                                Gvar.var_2460 = Gvar.var_308[Gvar.var_2424][2];
                                Gvar.var_2461 = Gvar.var_308[Gvar.var_2424][1] - 1;
                                if (Gvar.var_2461 < 0) {
                                        Gvar.var_2461 = 0;
                                }
                                Gvar.var_2462 = Gvar.var_308[Gvar.var_2424][1] + 1;
                                if (Gvar.var_2462 > Gvar.var_32) {
                                        Gvar.var_2462 = Gvar.var_32;
                                }
                                Gvar.var_2463 = Gvar.var_308[Gvar.var_2424][2] + 1;
                                if (Gvar.var_2463 > Gvar.var_33) {
                                        Gvar.var_2463 = Gvar.var_33;
                                }
                                Gvar.var_2464 = Gvar.var_308[Gvar.var_2424][2] - 1;
                                if (Gvar.var_2464 < 0) {
                                        Gvar.var_2464 = 0;
                                }
                                if (Gvar.var_308[Gvar.var_2424][0] != 0 && Gvar.var_82[Gvar.var_2461][Gvar.var_2460] == Gvar.var_226) {
                                        Gvar.var_456 = Gvar.var_2424;
                                        Gvar.var_234 = Gvar.var_2456;
                                        await Func.func548();
                                        await Func.func745();
                                        if (Gvar.var_308[Gvar.var_2424][0] == 60) {
                                                Gvar.var_234 = 999;
                                        }
                                        for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                                                await Func.func354();
                                        }
                                        Gvar.var_3951 = 1;
                                        Gvar.var_2458 = 1;
                                }
                                if (Gvar.var_308[Gvar.var_2424][0] != 0 && Gvar.var_82[Gvar.var_2462][Gvar.var_2460] == Gvar.var_226) {
                                        Gvar.var_456 = Gvar.var_2424;
                                        Gvar.var_234 = Gvar.var_2456;
                                        if (Gvar.var_308[Gvar.var_2424][0] == 60) {
                                                Gvar.var_234 = 999;
                                        }
                                        await Func.func548();
                                        await Func.func745();
                                        for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                                                await Func.func354();
                                        }
                                        Gvar.var_3951 = 1;
                                        Gvar.var_2458 = 1;
                                }
                                if (Gvar.var_308[Gvar.var_2424][0] != 0 && Gvar.var_82[Gvar.var_2459][Gvar.var_2463] == Gvar.var_226) {
                                        Gvar.var_456 = Gvar.var_2424;
                                        Gvar.var_234 = Gvar.var_2456;
                                        if (Gvar.var_308[Gvar.var_2424][0] == 60) {
                                                Gvar.var_234 = 999;
                                        }
                                        await Func.func548();
                                        await Func.func745();
                                        for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                                                await Func.func354();
                                        }
                                        Gvar.var_3951 = 1;
                                        Gvar.var_2458 = 1;
                                }
                                if (Gvar.var_308[Gvar.var_2424][0] != 0 && Gvar.var_82[Gvar.var_2459][Gvar.var_2464] == Gvar.var_226) {
                                        Gvar.var_456 = Gvar.var_2424;
                                        Gvar.var_234 = Gvar.var_2456;
                                        if (Gvar.var_308[Gvar.var_2424][0] == 60) {
                                                Gvar.var_234 = 999;
                                        }
                                        await Func.func548();
                                        await Func.func745();
                                        for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                                                await Func.func354();
                                        }
                                        Gvar.var_3951 = 1;
                                        Gvar.var_2458 = 1;
                                }
                        }
                }
                Gvar.var_2424 = Gvar.var_2424 + 1;
        }
        if (Gvar.var_3951 == 0) {
                Gvar.var_604 = 0;
                Gvar.var_283 = "しかし何も起こらなかった…";
                Gvar.var_284 = "";
                Gvar.var_285 = "";
                Gvar.var_286 = "";
                Gvar.var_287 = "";
                Gvar.var_288 = "";
                Gvar.var_289 = 0;
                Gvar.var_223 = 1;
                Gvar.var_290 = 0;
                Gvar.var_24 = Gvar.var_24[1];
                Gvar.var_25 = Gvar.var_25[1];
                Gvar.var_26 = Gvar.var_26[1];
                await Func.func050();
        }
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                await Func.func354();
        }
        Gvar.var_604 = 0;
        Gvar.var_2455 = 0;
        return;
}

export {func1023}
