import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func1022(this: any) {
        Adap.dbgprt(1022);
        if (Gvar.var_88[Gvar.var_74][Gvar.var_75] == 0 && Gvar.var_91[Gvar.var_74][Gvar.var_75] == 0 && Gvar.var_84[Gvar.var_74][Gvar.var_75] == 0) {
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
                Gvar.var_540 = 1;
                for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
                        await Func.func354();
                }
                Adap.DSPLAY(231);
                Gvar.var_540 = 2;
                for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
                        await Func.func354();
                }
                Gvar.var_540 = 3;
                for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                        await Func.func354();
                }
                Gvar.var_869 = 1;
                Gvar.var_1938 = 1;
                Gvar.var_2688 = 1;
                Gvar.var_1714 = Gvar.var_74;
                Gvar.var_255 = Gvar.var_75;
                Gvar.var_2676 = 1;
                Gvar.var_2691 = 1;
                await Func.func568();
                Gvar.var_2691 = 0;
                Gvar.var_2676 = 0;
                Gvar.var_869 = 0;
                Gvar.var_1938 = 0;
                Gvar.var_2688 = 0;
                Gvar.var_540 = 4;
                for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
                        await Func.func354();
                }
                Gvar.var_540 = 5;
                for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
                        await Func.func354();
                }
                Gvar.var_540 = 4;
                for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
                        await Func.func354();
                }
                Gvar.var_540 = 0;
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
                Gvar.var_283 = "シールを貼る場所がないようだ…";
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

export {func1022}
