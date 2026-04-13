import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func1025(this: any) {
        Adap.dbgprt(1025);
        Gvar.var_283 = "";
        Gvar.var_284 = "";
        Gvar.var_285 = "";
        Gvar.var_286 = "";
        Gvar.var_287 = "";
        Gvar.var_288 = "";
        Gvar.var_289 = 0;
        Gvar.var_283 = "ディアボロを中心に重力が変わる！";
        Gvar.var_284 = "";
        Gvar.var_223 = 1;
        Gvar.var_290 = 0;
        Gvar.var_24 = Gvar.var_24[1];
        Gvar.var_25 = Gvar.var_25[1];
        Gvar.var_26 = Gvar.var_26[1];
        await Func.func050();
        await Func.func358();
        Gvar.var_2505 = 0;
        Gvar.var_2167 = Gvar.var_224;
        Gvar.var_224 = 2;
        Gvar.var_310 = 1;
        Gvar.var_1547 = 1;
        for (let cnt1 = 0; cnt1 < 30; ++cnt1) {
                await Func.func354();
                if (Gvar.var_1547 == 1) {
                        Adap.DSPLAY(161);
                }
                Gvar.var_1547++;
        }
        Gvar.var_310 = 0;
        Gvar.var_1547 = 0;
        Gvar.var_2220 = 1;
        Gvar.var_2543 = 0;
        Gvar.var_2221 = Gvar.var_74 - 1;
        Gvar.var_2222 = Gvar.var_74 + 1;
        Gvar.var_2223 = Gvar.var_75 + 1;
        Gvar.var_2224 = Gvar.var_75 - 1;
        Gvar.var_2544 = 0;
        Gvar.var_2545 = 0;
        Gvar.var_2546 = 0;
        Gvar.var_2547 = 0;
        Gvar.var_2548 = 0;
        Gvar.var_2549 = 0;
        Gvar.var_2550 = 0;
        Gvar.var_2551 = 0;
        for (let cnt1 = 0; cnt1 < Gvar.var_107; ++cnt1) {
                if (Gvar.var_308[Gvar.var_2220][1] == Gvar.var_74 && Gvar.var_308[Gvar.var_2220][2] == Gvar.var_2223) {
                        Gvar.var_2544 = 1;
                        Gvar.var_2543 = 1;
                }
                if (Gvar.var_308[Gvar.var_2220][1] == Gvar.var_74 && Gvar.var_308[Gvar.var_2220][2] == Gvar.var_2224) {
                        Gvar.var_2545 = 1;
                        Gvar.var_2543 = 1;
                }
                if (Gvar.var_308[Gvar.var_2220][1] == Gvar.var_2221 && Gvar.var_308[Gvar.var_2220][2] == Gvar.var_75) {
                        Gvar.var_2546 = 1;
                        Gvar.var_2543 = 1;
                }
                if (Gvar.var_308[Gvar.var_2220][1] == Gvar.var_2222 && Gvar.var_308[Gvar.var_2220][2] == Gvar.var_75) {
                        Gvar.var_2547 = 1;
                        Gvar.var_2543 = 1;
                }
                if (Gvar.var_308[Gvar.var_2220][1] == Gvar.var_2221 && Gvar.var_308[Gvar.var_2220][2] == Gvar.var_2223) {
                        Gvar.var_2548 = 1;
                        Gvar.var_2543 = 1;
                }
                if (Gvar.var_308[Gvar.var_2220][1] == Gvar.var_2222 && Gvar.var_308[Gvar.var_2220][2] == Gvar.var_2223) {
                        Gvar.var_2549 = 1;
                        Gvar.var_2543 = 1;
                }
                if (Gvar.var_308[Gvar.var_2220][1] == Gvar.var_2221 && Gvar.var_308[Gvar.var_2220][2] == Gvar.var_2224) {
                        Gvar.var_2550 = 1;
                        Gvar.var_2543 = 1;
                }
                if (Gvar.var_308[Gvar.var_2220][1] == Gvar.var_2222 && Gvar.var_308[Gvar.var_2220][2] == Gvar.var_2224) {
                        Gvar.var_2551 = 1;
                        Gvar.var_2543 = 1;
                }
                Gvar.var_2220 = Gvar.var_2220 + 1;
        }
        if (Gvar.var_2544 == 1) {
                Gvar.var_308[Gvar.var_2220][12] = 0;
                Gvar.var_2552 = 1;
                Gvar.var_523 = Gvar.var_74;
                Gvar.var_524 = Gvar.var_2223;
                Gvar.var_345 = Gvar.var_2220;
                Gvar.var_224 = 2;
                await Func.func697();
                Gvar.var_2552 = 0;
                Gvar.var_2543 = 1;
        }
        if (Gvar.var_2545 == 1) {
                Gvar.var_308[Gvar.var_2220][12] = 0;
                Gvar.var_2552 = 1;
                Gvar.var_523 = Gvar.var_74;
                Gvar.var_524 = Gvar.var_2224;
                Gvar.var_345 = Gvar.var_2220;
                Gvar.var_224 = 8;
                await Func.func697();
                Gvar.var_2552 = 0;
                Gvar.var_2543 = 1;
        }
        if (Gvar.var_2546 == 1) {
                Gvar.var_308[Gvar.var_2220][12] = 0;
                Gvar.var_2552 = 1;
                Gvar.var_523 = Gvar.var_2221;
                Gvar.var_524 = Gvar.var_75;
                Gvar.var_345 = Gvar.var_2220;
                Gvar.var_224 = 4;
                await Func.func697();
                Gvar.var_2552 = 0;
                Gvar.var_2543 = 1;
        }
        if (Gvar.var_2547 == 1) {
                Gvar.var_308[Gvar.var_2220][12] = 0;
                Gvar.var_2552 = 1;
                Gvar.var_523 = Gvar.var_2222;
                Gvar.var_524 = Gvar.var_75;
                Gvar.var_345 = Gvar.var_2220;
                Gvar.var_224 = 6;
                await Func.func697();
                Gvar.var_2552 = 0;
                Gvar.var_2543 = 1;
        }
        if (Gvar.var_2548 == 1) {
                Gvar.var_308[Gvar.var_2220][12] = 0;
                Gvar.var_2552 = 1;
                Gvar.var_523 = Gvar.var_2221;
                Gvar.var_524 = Gvar.var_2223;
                Gvar.var_345 = Gvar.var_2220;
                Gvar.var_224 = 1;
                await Func.func697();
                Gvar.var_2552 = 0;
                Gvar.var_2543 = 1;
        }
        if (Gvar.var_2549 == 1) {
                Gvar.var_308[Gvar.var_2220][12] = 0;
                Gvar.var_2552 = 1;
                Gvar.var_523 = Gvar.var_2222;
                Gvar.var_524 = Gvar.var_2223;
                Gvar.var_345 = Gvar.var_2220;
                Gvar.var_224 = 3;
                await Func.func697();
                Gvar.var_2552 = 0;
                Gvar.var_2543 = 1;
        }
        if (Gvar.var_2550 == 1) {
                Gvar.var_308[Gvar.var_2220][12] = 0;
                Gvar.var_2552 = 1;
                Gvar.var_523 = Gvar.var_2221;
                Gvar.var_524 = Gvar.var_2224;
                Gvar.var_345 = Gvar.var_2220;
                Gvar.var_224 = 7;
                await Func.func697();
                Gvar.var_2552 = 0;
                Gvar.var_2543 = 1;
        }
        if (Gvar.var_2551 == 1) {
                Gvar.var_308[Gvar.var_2220][12] = 0;
                Gvar.var_2552 = 1;
                Gvar.var_523 = Gvar.var_2222;
                Gvar.var_524 = Gvar.var_2224;
                Gvar.var_345 = Gvar.var_2220;
                Gvar.var_224 = 9;
                await Func.func697();
                Gvar.var_2552 = 0;
                Gvar.var_2543 = 1;
        }
        if (Gvar.var_2543 == 0) {
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
        if (Gvar.var_2543 == 1) {
                Gvar.var_131 = 0;
                Gvar.var_532 = 0;
                Gvar.var_533 = 0;
                Gvar.var_530 = 0;
                Gvar.var_531 = 0;
        }
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
                await Func.func354();
        }
        return;
}

export {func1025}
