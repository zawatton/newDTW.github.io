import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func1033(this: any) {
        Adap.dbgprt(1033);
        Adap.DSPLAY(165);
        Gvar.var_283 = "";
        Gvar.var_284 = "";
        Gvar.var_285 = "";
        Gvar.var_286 = "";
        Gvar.var_287 = "";
        Gvar.var_288 = "";
        Gvar.var_289 = 0;
        Gvar.var_283 = "カチリ";
        Gvar.var_223 = 1;
        Gvar.var_290 = 0;
        Gvar.var_24 = Gvar.var_24[2];
        Gvar.var_25 = Gvar.var_25[2];
        Gvar.var_26 = Gvar.var_26[2];
        await Func.func050();
        Gvar.var_1491 = 2;
        for (let cnt1 = 0; cnt1 < 15; ++cnt1) {
                await Func.func354();
        }
        Gvar.var_1491 = 0;
        Gvar.var_1541 = Gvar.var_74;
        Gvar.var_1542 = Gvar.var_75;
        Gvar.var_283 = "";
        Gvar.var_284 = "";
        Gvar.var_285 = "";
        Gvar.var_286 = "";
        Gvar.var_287 = "";
        Gvar.var_288 = "";
        Gvar.var_289 = 0;
        Gvar.var_283 = "ｼｱｰﾊｰﾄｱﾀｯｸが爆発した！";
        Gvar.var_24 = Gvar.var_24[2];
        Gvar.var_25 = Gvar.var_25[2];
        Gvar.var_26 = Gvar.var_26[2];
        Gvar.var_223 = 1;
        Gvar.var_290 = 0;
        await Func.func050();
        Gvar.var_2221 = Gvar.var_1541 - 1;
        if (Gvar.var_2221 < 0) {
                Gvar.var_2221 = 0;
        }
        Gvar.var_2222 = Gvar.var_1541 + 1;
        Gvar.var_2223 = Gvar.var_1542 + 1;
        Gvar.var_2224 = Gvar.var_1542 - 1;
        if (Gvar.var_2224 < 0) {
                Gvar.var_2224 = 0;
        }
        if (Gvar.var_82[Gvar.var_2221][Gvar.var_1542] == 0) {
                Gvar.var_378 = Gvar.var_2221;
                Gvar.var_379 = Gvar.var_1542;
                await Func.func654();
        }
        if (Gvar.var_82[Gvar.var_2222][Gvar.var_1542] == 0) {
                Gvar.var_378 = Gvar.var_2222;
                Gvar.var_379 = Gvar.var_1542;
                await Func.func654();
        }
        if (Gvar.var_82[Gvar.var_1541][Gvar.var_2223] == 0) {
                Gvar.var_378 = Gvar.var_1541;
                Gvar.var_379 = Gvar.var_2223;
                await Func.func654();
        }
        if (Gvar.var_82[Gvar.var_1541][Gvar.var_2224] == 0) {
                Gvar.var_378 = Gvar.var_1541;
                Gvar.var_379 = Gvar.var_2224;
                await Func.func654();
        }
        if (Gvar.var_82[Gvar.var_2221][Gvar.var_2223] == 0) {
                Gvar.var_378 = Gvar.var_2221;
                Gvar.var_379 = Gvar.var_2223;
                await Func.func654();
        }
        if (Gvar.var_82[Gvar.var_2222][Gvar.var_2223] == 0) {
                Gvar.var_378 = Gvar.var_2222;
                Gvar.var_379 = Gvar.var_2223;
                await Func.func654();
        }
        if (Gvar.var_82[Gvar.var_2221][Gvar.var_2224] == 0) {
                Gvar.var_378 = Gvar.var_2221;
                Gvar.var_379 = Gvar.var_2224;
                await Func.func654();
        }
        if (Gvar.var_82[Gvar.var_2222][Gvar.var_2224] == 0) {
                Gvar.var_378 = Gvar.var_2222;
                Gvar.var_379 = Gvar.var_2224;
                await Func.func654();
        }
        if (Gvar.var_88[Gvar.var_1541][Gvar.var_1542] > 0) {
                Gvar.var_88[Gvar.var_1541][Gvar.var_1542] = 0;
        }
        if (Gvar.var_88[Gvar.var_2221][Gvar.var_1542] > 0) {
                Gvar.var_88[Gvar.var_2221][Gvar.var_1542] = 0;
        }
        if (Gvar.var_88[Gvar.var_2222][Gvar.var_1542] > 0) {
                Gvar.var_88[Gvar.var_2222][Gvar.var_1542] = 0;
        }
        if (Gvar.var_88[Gvar.var_1541][Gvar.var_2223] > 0) {
                Gvar.var_88[Gvar.var_1541][Gvar.var_2223] = 0;
        }
        if (Gvar.var_88[Gvar.var_1541][Gvar.var_2224] > 0) {
                Gvar.var_88[Gvar.var_1541][Gvar.var_2224] = 0;
        }
        if (Gvar.var_88[Gvar.var_2221][Gvar.var_2223] > 0) {
                Gvar.var_88[Gvar.var_2221][Gvar.var_2223] = 0;
        }
        if (Gvar.var_88[Gvar.var_2222][Gvar.var_2223] > 0) {
                Gvar.var_88[Gvar.var_2222][Gvar.var_2223] = 0;
        }
        if (Gvar.var_88[Gvar.var_2221][Gvar.var_2224] > 0) {
                Gvar.var_88[Gvar.var_2221][Gvar.var_2224] = 0;
        }
        if (Gvar.var_88[Gvar.var_2222][Gvar.var_2224] > 0) {
                Gvar.var_88[Gvar.var_2222][Gvar.var_2224] = 0;
        }
        Gvar.var_224 = 2;
        Gvar.var_124 = 2;
        Gvar.var_1400 = 1;
        Adap.DSPLAY(180);
        Gvar.var_310 = 1;
        Gvar.var_1540 = 1;
        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
                Gvar.var_664 = 3;
                await Func.func354();
                Gvar.var_664 = 0;
                await Func.func354();
                Gvar.var_1540++;
        }
        for (let cnt1 = 0; cnt1 < 24; ++cnt1) {
                await Func.func354();
                if (cnt1 == 25) {
                        Gvar.var_1400 = 0;
                }
                Gvar.var_1540++;
        }
        Gvar.var_310 = 0;
        Gvar.var_1540 = 0;
        Gvar.var_1400 = 0;
        Gvar.var_457 = "ｼｱｰﾊｰﾄｱﾀｯｸが爆発した！";
        Gvar.var_2424 = 1;
        Gvar.var_2425 = 1;
        Gvar.var_2426 = 2;
        for (let cnt1 = 0; cnt1 < Gvar.var_107; ++cnt1) {
                if (Gvar.var_308[Gvar.var_2424][0] != 0 && Gvar.var_308[Gvar.var_2424][1] == Gvar.var_1541 && Gvar.var_308[Gvar.var_2424][2] == Gvar.var_2223) {
                        await Func.func740();
                }
                if (Gvar.var_308[Gvar.var_2424][0] != 0 && Gvar.var_308[Gvar.var_2424][1] == Gvar.var_1541 && Gvar.var_308[Gvar.var_2424][2] == Gvar.var_2224) {
                        await Func.func740();
                }
                if (Gvar.var_308[Gvar.var_2424][0] != 0 && Gvar.var_308[Gvar.var_2424][1] == Gvar.var_2221 && Gvar.var_308[Gvar.var_2424][2] == Gvar.var_1542) {
                        await Func.func740();
                }
                if (Gvar.var_308[Gvar.var_2424][0] != 0 && Gvar.var_308[Gvar.var_2424][1] == Gvar.var_2222 && Gvar.var_308[Gvar.var_2424][2] == Gvar.var_1542) {
                        await Func.func740();
                }
                if (Gvar.var_308[Gvar.var_2424][0] != 0 && Gvar.var_308[Gvar.var_2424][1] == Gvar.var_2221 && Gvar.var_308[Gvar.var_2424][2] == Gvar.var_2223) {
                        await Func.func740();
                }
                if (Gvar.var_308[Gvar.var_2424][0] != 0 && Gvar.var_308[Gvar.var_2424][1] == Gvar.var_2222 && Gvar.var_308[Gvar.var_2424][2] == Gvar.var_2223) {
                        await Func.func740();
                }
                if (Gvar.var_308[Gvar.var_2424][0] != 0 && Gvar.var_308[Gvar.var_2424][1] == Gvar.var_2221 && Gvar.var_308[Gvar.var_2424][2] == Gvar.var_2224) {
                        await Func.func740();
                }
                if (Gvar.var_308[Gvar.var_2424][0] != 0 && Gvar.var_308[Gvar.var_2424][1] == Gvar.var_2222 && Gvar.var_308[Gvar.var_2424][2] == Gvar.var_2224) {
                        await Func.func740();
                }
                Gvar.var_234 = 0;
                Gvar.var_2424 = Gvar.var_2424 + 1;
        }
        Gvar.var_2426 = 0;
        Gvar.var_2425 = 0;
        if (Gvar.var_236 == 1) {
                Gvar.var_236 = 0;
                Gvar.var_387 = 209;
                for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
                        await Func.func354();
                }
        }
        if (Gvar.var_236 > 1) {
                Gvar.var_2428 = Gvar.var_236 / 2;
                if (Gvar.var_177[314] == 1 && Gvar.var_176 == 0) {
                        Gvar.var_2428 = Gvar.var_2428 / 2;
                }
                if (Gvar.var_176 == 144 || Gvar.var_176 == 21 || Gvar.var_176 == 137 || Gvar.var_176 == 32) {
                        Gvar.var_2428 = 10;
                }
                Gvar.var_236 = Gvar.var_236 - Gvar.var_2428;
                if (Gvar.var_236 <= 0) {
                        Gvar.var_236 = 1;
                }
                Gvar.var_233 = Gvar.var_2428 + Gvar.var_233;
        }
        Gvar.var_124 = 0;
        Gvar.var_2429 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_107; ++cnt1) {
                if (Gvar.var_308[Gvar.var_2429][0] == 17 && Gvar.var_308[Gvar.var_2429][29] == 1) {
                        await Func.func739();
                        Gvar.var_2429 = 1;
                        continue;
                }
                Gvar.var_2429++;
        }
        return;
}

export {func1033}
