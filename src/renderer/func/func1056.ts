import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func1056(this: any) {
        Adap.dbgprt(1056);
        Gvar.var_3949 = 0;
        Gvar.var_120 = 10;
        if (Gvar.var_93[Gvar.var_378][Gvar.var_379] != 0) {
            Gvar.var_1638 = Gvar.var_93[Gvar.var_378][Gvar.var_379];
            if (Gvar.var_308[Gvar.var_1638][0] != 50) {
                if (Gvar.var_308[Gvar.var_1638][23] >= 1 || Gvar.var_2497 != 0 || Gvar.var_308[Gvar.var_1638][0] == 170) {
                    Gvar.var_271 = 0;
                    Gvar.var_283 = "";
                    Gvar.var_284 = "";
                    Gvar.var_285 = "";
                    Gvar.var_286 = "";
                    Gvar.var_287 = "";
                    Gvar.var_288 = "";
                    Gvar.var_289 = 0;
                    Gvar.var_283 = "ｸﾞﾁｭｸﾞﾁｭ";
                    if (Gvar.var_2497 != 0) {
                        Gvar.var_283 = "なぜか触れても意味がないようだ…";
                    }
                    if (Gvar.var_308[Gvar.var_1638][23] >= 1) {
                        Gvar.var_283 = "目が見えていないようだ…";
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
                Adap.DSPLAY(123);
                for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
                    await Func.func354();
                }
                Gvar.var_271 = 0;
                Gvar.var_283 = "";
                Gvar.var_284 = "";
                Gvar.var_285 = "";
                Gvar.var_286 = "";
                Gvar.var_287 = "";
                Gvar.var_288 = "";
                Gvar.var_289 = 0;
                Gvar.var_268 = Gvar.var_308[Gvar.var_1638][0];
                await Func.func658();
                Gvar.var_283 = "" + Gvar.var_1872 + "は";
                Gvar.var_284 = "自身をｶﾀﾂﾑﾘだと思い込んだ！";
                Gvar.var_268 = 170;
                await Func.func658();
                Gvar.var_308[Gvar.var_1638][0] = Gvar.var_268;
                Gvar.var_308[Gvar.var_1638][14] = 0;
                Gvar.var_308[Gvar.var_1638][15] = 0;
                Gvar.var_308[Gvar.var_1638][23] = 0;
                Gvar.var_308[Gvar.var_1638][30] = 0;
                Gvar.var_308[Gvar.var_345][31] = 0;
                if (Gvar.var_1073 == 1) {
                    Gvar.var_308[Gvar.var_1638][31] = 1;
                }
                if (Gvar.var_1073 == 2) {
                    Gvar.var_308[Gvar.var_1638][31] = 2;
                }
                if (Gvar.var_1073 == 3) {
                    Gvar.var_308[Gvar.var_1638][31] = 3;
                }
                if (Gvar.var_1073 == 4) {
                    Gvar.var_308[Gvar.var_1638][31] = 4;
                }
                if (Gvar.var_1073 == 5) {
                    Gvar.var_308[Gvar.var_1638][31] = 5;
                }
                if (Gvar.var_1073 == 6) {
                    Gvar.var_308[Gvar.var_1638][31] = 6;
                }
                if (Gvar.var_1073 == 7) {
                    Gvar.var_308[Gvar.var_1638][31] = 7;
                }
                if (Gvar.var_1073 == 8) {
                    Gvar.var_308[Gvar.var_1638][31] = 8;
                }
                if (Gvar.var_1073 == 9) {
                    Gvar.var_308[Gvar.var_1638][31] = 9;
                }
                if (Gvar.var_1073 == 10) {
                    Gvar.var_308[Gvar.var_1638][31] = 10;
                }
                Gvar.var_308[Gvar.var_1638][3] = Gvar.var_505;
                Gvar.var_2923 = Gvar.var_1638;
                await Func.func601();
                if (Gvar.var_1871 == 1) {
                    Gvar.var_308[Gvar.var_1638][15] = 1;
                }
                if (Gvar.var_1871 == 2) {
                    Gvar.var_308[Gvar.var_1638][14] = 1;
                }
                if (Gvar.var_131 == Gvar.var_1638) {
                    Gvar.var_131 = 0;
                    Gvar.var_532 = 0;
                    Gvar.var_533 = 0;
                    Gvar.var_530 = 0;
                    Gvar.var_531 = 0;
                }
                Gvar.var_3949 = 1;
                Gvar.var_24 = Gvar.var_24[2];
                Gvar.var_25 = Gvar.var_25[2];
                Gvar.var_26 = Gvar.var_26[2];
                Gvar.var_223 = 1;
                Gvar.var_290 = 0;
                await Func.func050();
                for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
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

export {func1056}
