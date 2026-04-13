import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func1041(this: any) {
        Adap.dbgprt(1041);
        await Func.func099();
        Gvar.var_283 = "";
        Gvar.var_284 = "";
        Gvar.var_285 = "";
        Gvar.var_286 = "";
        Gvar.var_287 = "";
        Gvar.var_288 = "";
        Gvar.var_289 = 0;
        Gvar.var_283 = "オレって情けねえよなあ～～～。";
        Gvar.var_284 = "死にたくなった･･･";
        Gvar.var_223 = 1;
        Gvar.var_290 = 0;
        Gvar.var_24 = Gvar.var_24[1];
        Gvar.var_25 = Gvar.var_25[1];
        Gvar.var_26 = Gvar.var_26[1];
        await Func.func050();
        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
                await Func.func354();
        }
        Gvar.var_3128 = Gvar.var_236;
        if (Gvar.var_3128 < 4) {
                Gvar.var_3128 = 4;
        }
        Gvar.var_3127 = Gvar.var_3128 / 4;
        if (Gvar.var_3127 < 1) {
                Gvar.var_3127 = 1;
        }
        Gvar.var_540 = Adap.rnd(8);
        Gvar.var_540++;
        Adap.DSPLAY(103);
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
                Gvar.var_1372 = 1;
                await Func.func354();
                Gvar.var_1372 = 0;
                await Func.func354();
        }
        if (Gvar.var_236 == 1) {
                Gvar.var_236 = 0;
                Gvar.var_237 = 1;
                Gvar.var_387 = 247;
                Gvar.var_224 = 2;
                for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
                        await Func.func354();
                }
                Gvar.var_540 = 0;
                await Func.func009(); return;
        }
        if (Gvar.var_236 > 1) {
                Gvar.var_236 = Gvar.var_236 - Gvar.var_3127;
        }
        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
                Gvar.var_1372 = 1;
                await Func.func354();
                Gvar.var_1372 = 0;
                await Func.func354();
        }
        Gvar.var_2557 = 0;
        Gvar.var_457 = "道連れにしている！";
        Gvar.var_2455 = 1;
        Gvar.var_2424 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_107; ++cnt1) {
                Gvar.var_2558 = Gvar.var_3127;
                Gvar.var_2457 = 0;
                Gvar.var_2558 = Gvar.var_2558 + Gvar.var_2457;
                if (Gvar.var_193 >= 1) {
                        Gvar.var_2558 = Gvar.var_2558 * 2;
                }
                if (Gvar.var_2424 != Gvar.var_141) {
                        Gvar.var_2458 = 0;
                        if (Gvar.var_308[Gvar.var_2424][0] != 0 && Gvar.var_308[Gvar.var_2424][10] == Gvar.var_226 && Gvar.var_226 > 0 && Gvar.var_226 <= 12) {
                                Gvar.var_456 = Gvar.var_2424;
                                Gvar.var_234 = Gvar.var_2558;
                                Gvar.var_2557 = Gvar.var_2557 + Gvar.var_2558;
                                await Func.func745();
                                for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                                        await Func.func354();
                                }
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
                                        Gvar.var_234 = Gvar.var_2558;
                                        Gvar.var_2557 = Gvar.var_2557 + Gvar.var_2558;
                                        await Func.func745();
                                        for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                                                await Func.func354();
                                        }
                                        Gvar.var_2458 = 1;
                                }
                                if (Gvar.var_308[Gvar.var_2424][0] != 0 && Gvar.var_308[Gvar.var_2424][1] == Gvar.var_74 && Gvar.var_308[Gvar.var_2424][2] == Gvar.var_2224) {
                                        Gvar.var_456 = Gvar.var_2424;
                                        Gvar.var_234 = Gvar.var_2558;
                                        Gvar.var_2557 = Gvar.var_2557 + Gvar.var_2558;
                                        await Func.func745();
                                        for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                                                await Func.func354();
                                        }
                                        Gvar.var_2458 = 1;
                                }
                                if (Gvar.var_308[Gvar.var_2424][0] != 0 && Gvar.var_308[Gvar.var_2424][1] == Gvar.var_2221 && Gvar.var_308[Gvar.var_2424][2] == Gvar.var_75) {
                                        Gvar.var_456 = Gvar.var_2424;
                                        Gvar.var_234 = Gvar.var_2558;
                                        Gvar.var_2557 = Gvar.var_2557 + Gvar.var_2558;
                                        await Func.func745();
                                        for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                                                await Func.func354();
                                        }
                                        Gvar.var_2458 = 1;
                                }
                                if (Gvar.var_308[Gvar.var_2424][0] != 0 && Gvar.var_308[Gvar.var_2424][1] == Gvar.var_2222 && Gvar.var_308[Gvar.var_2424][2] == Gvar.var_75) {
                                        Gvar.var_456 = Gvar.var_2424;
                                        Gvar.var_234 = Gvar.var_2558;
                                        Gvar.var_2557 = Gvar.var_2557 + Gvar.var_2558;
                                        await Func.func745();
                                        for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                                                await Func.func354();
                                        }
                                        Gvar.var_2458 = 1;
                                }
                                if (Gvar.var_308[Gvar.var_2424][0] != 0 && Gvar.var_308[Gvar.var_2424][1] == Gvar.var_2221 && Gvar.var_308[Gvar.var_2424][2] == Gvar.var_2223) {
                                        Gvar.var_456 = Gvar.var_2424;
                                        Gvar.var_234 = Gvar.var_2558;
                                        Gvar.var_2557 = Gvar.var_2557 + Gvar.var_2558;
                                        await Func.func745();
                                        for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                                                await Func.func354();
                                        }
                                        Gvar.var_2458 = 1;
                                }
                                if (Gvar.var_308[Gvar.var_2424][0] != 0 && Gvar.var_308[Gvar.var_2424][1] == Gvar.var_2222 && Gvar.var_308[Gvar.var_2424][2] == Gvar.var_2223) {
                                        Gvar.var_456 = Gvar.var_2424;
                                        Gvar.var_234 = Gvar.var_2558;
                                        Gvar.var_2557 = Gvar.var_2557 + Gvar.var_2558;
                                        await Func.func745();
                                        for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                                                await Func.func354();
                                        }
                                        Gvar.var_2458 = 1;
                                }
                                if (Gvar.var_308[Gvar.var_2424][0] != 0 && Gvar.var_308[Gvar.var_2424][1] == Gvar.var_2221 && Gvar.var_308[Gvar.var_2424][2] == Gvar.var_2224) {
                                        Gvar.var_456 = Gvar.var_2424;
                                        Gvar.var_234 = Gvar.var_2558;
                                        Gvar.var_2557 = Gvar.var_2557 + Gvar.var_2558;
                                        await Func.func745();
                                        for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                                                await Func.func354();
                                        }
                                        Gvar.var_2458 = 1;
                                }
                                if (Gvar.var_308[Gvar.var_2424][0] != 0 && Gvar.var_308[Gvar.var_2424][1] == Gvar.var_2222 && Gvar.var_308[Gvar.var_2424][2] == Gvar.var_2224) {
                                        Gvar.var_456 = Gvar.var_2424;
                                        Gvar.var_234 = Gvar.var_2558;
                                        Gvar.var_2557 = Gvar.var_2557 + Gvar.var_2558;
                                        await Func.func745();
                                        for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                                                await Func.func354();
                                        }
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
                                        Gvar.var_234 = Gvar.var_2558;
                                        Gvar.var_2557 = Gvar.var_2557 + Gvar.var_2558;
                                        await Func.func745();
                                        for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                                                await Func.func354();
                                        }
                                        Gvar.var_2458 = 1;
                                }
                                if (Gvar.var_308[Gvar.var_2424][0] != 0 && Gvar.var_82[Gvar.var_2462][Gvar.var_2460] == Gvar.var_226) {
                                        Gvar.var_456 = Gvar.var_2424;
                                        Gvar.var_234 = Gvar.var_2558;
                                        Gvar.var_2557 = Gvar.var_2557 + Gvar.var_2558;
                                        await Func.func745();
                                        for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                                                await Func.func354();
                                        }
                                        Gvar.var_2458 = 1;
                                }
                                if (Gvar.var_308[Gvar.var_2424][0] != 0 && Gvar.var_82[Gvar.var_2459][Gvar.var_2463] == Gvar.var_226) {
                                        Gvar.var_456 = Gvar.var_2424;
                                        Gvar.var_234 = Gvar.var_2558;
                                        Gvar.var_2557 = Gvar.var_2557 + Gvar.var_2558;
                                        await Func.func745();
                                        for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                                                await Func.func354();
                                        }
                                        Gvar.var_2458 = 1;
                                }
                                if (Gvar.var_308[Gvar.var_2424][0] != 0 && Gvar.var_82[Gvar.var_2459][Gvar.var_2464] == Gvar.var_226) {
                                        Gvar.var_456 = Gvar.var_2424;
                                        Gvar.var_234 = Gvar.var_2558;
                                        Gvar.var_2557 = Gvar.var_2557 + Gvar.var_2558;
                                        await Func.func745();
                                        for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                                                await Func.func354();
                                        }
                                        Gvar.var_2458 = 1;
                                }
                        }
                }
                Gvar.var_2424 = Gvar.var_2424 + 1;
        }
        Gvar.var_540 = 0;
        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
                await Func.func354();
        }
        Gvar.var_2455 = 0;
        return;
}

export {func1041}
