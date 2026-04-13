import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func1043(this: any) {
        Adap.dbgprt(1043);
        Gvar.var_3949 = 0;
        if (Gvar.var_93[Gvar.var_378][Gvar.var_379] != 0) {
            Gvar.var_1638 = Gvar.var_93[Gvar.var_378][Gvar.var_379];
            if (Gvar.var_308[Gvar.var_1638][0] != 50) {
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
                Gvar.var_120 = Gvar.var_120 - 1;
                Adap.DSPLAY(131);
                Gvar.var_310 = 1;
                Gvar.var_1431 = 160;
                Gvar.var_1432 = 160 - 50;
                Gvar.var_1454 = 1;
                for (let cnt1 = 0; cnt1 < 15; ++cnt1) {
                    if (Gvar.var_224 == 1 || Gvar.var_224 == 2 || Gvar.var_224 == 3) {
                        Gvar.var_540 = 1;
                    }
                    if (Gvar.var_224 == 7 || Gvar.var_224 == 8 || Gvar.var_224 == 9) {
                        Gvar.var_540 = 2;
                    }
                    if (Gvar.var_224 == 4) {
                        Gvar.var_540 = 3;
                    }
                    if (Gvar.var_224 == 6) {
                        Gvar.var_540 = 4;
                    }
                    Gvar.var_1454 = Gvar.var_1454 + 1;
                    await Func.func354();
                }
                Gvar.var_310 = 0;
                Gvar.var_1454 = 0;
                Gvar.var_540 = 0;
                Gvar.var_283 = "";
                Gvar.var_284 = "";
                Gvar.var_285 = "";
                Gvar.var_286 = "";
                Gvar.var_287 = "";
                Gvar.var_288 = "";
                Gvar.var_289 = 0;
                Gvar.var_268 = Gvar.var_308[Gvar.var_1638][0];
                await Func.func658();
                Gvar.var_283 = "" + Gvar.var_1872 + "は眠ってしまった！";
                Gvar.var_24 = Gvar.var_24[2];
                Gvar.var_25 = Gvar.var_25[2];
                Gvar.var_26 = Gvar.var_26[2];
                Gvar.var_308[Gvar.var_1638][12] = 6;
                if (Gvar.var_131 == Gvar.var_1638) {
                    Gvar.var_131 = 0;
                    Gvar.var_532 = 0;
                    Gvar.var_533 = 0;
                    Gvar.var_530 = 0;
                    Gvar.var_531 = 0;
                }
                Adap.DSPLAY(132);
                Gvar.var_223 = 1;
                Gvar.var_290 = 0;
                await Func.func050();
                for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                    await Func.func354();
                }
                Gvar.var_3949 = 1;
                Gvar.var_120 = Gvar.var_120 - 1;
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

export {func1043}
