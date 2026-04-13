import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func0998(this: any) {
        Adap.dbgprt(998);
        Gvar.var_222 = 0;
        Gvar.var_257 = Gvar.var_258[Gvar.var_250][0];
        if (Gvar.var_257 < 100 || Gvar.var_257 >= 400) {
                Gvar.var_283 = "";
                Gvar.var_284 = "";
                Gvar.var_285 = "";
                Gvar.var_286 = "";
                Gvar.var_287 = "";
                Gvar.var_288 = "";
                Gvar.var_289 = 0;
                Gvar.var_283 = "装備ディスクしか賭けられません。";
                Gvar.var_284 = "";
                Gvar.var_223 = 1;
                Gvar.var_290 = 0;
                Gvar.var_24 = Gvar.var_24[1];
                Gvar.var_25 = Gvar.var_25[1];
                Gvar.var_26 = Gvar.var_26[1];
                await Func.func050();
                for (let cnt1 = 0; cnt1 < 4; ++cnt1) {
                        await Func.func354();
                }
                await Func.func358();
                Gvar.var_222 = 1;
                await Func.func054();
                await Func.func493(); return;
        }
        await Func.func457();
        await Func.func458();
        await Func.func459();
        if (Gvar.var_428 == Gvar.var_250 || Gvar.var_432 == Gvar.var_250 || Gvar.var_474 == Gvar.var_250) {
                Gvar.var_283 = "";
                Gvar.var_284 = "";
                Gvar.var_285 = "";
                Gvar.var_286 = "";
                Gvar.var_287 = "";
                Gvar.var_288 = "";
                Gvar.var_289 = 0;
                Gvar.var_283 = "装備しているDISCは";
                Gvar.var_284 = "はずさないと賭けられません。";
                Gvar.var_223 = 1;
                Gvar.var_290 = 0;
                Gvar.var_24 = Gvar.var_24[1];
                Gvar.var_25 = Gvar.var_25[1];
                Gvar.var_26 = Gvar.var_26[1];
                await Func.func050();
                for (let cnt1 = 0; cnt1 < 4; ++cnt1) {
                        await Func.func354();
                }
                await Func.func358();
                Gvar.var_222 = 1;
                await Func.func054();
                Gvar.var_3918 = 0;
                if (Gvar.var_389 != 0) {
                        Gvar.var_3918 = Gvar.var_3918 + 1;
                }
                if (Gvar.var_390 != 0) {
                        Gvar.var_3918 = Gvar.var_3918 + 1;
                }
                if (Gvar.var_240 != 0) {
                        Gvar.var_3918 = Gvar.var_3918 + 1;
                }
                Gvar.var_3919 = 0;
                for (let cnt1 = 0; cnt1 < Gvar.var_249; ++cnt1) {
                        if (Gvar.var_258[cnt1][0] >= 100 || Gvar.var_258[cnt1][0] < 400) {
                                Gvar.var_3919 = Gvar.var_3919 + 1;
                        }
                }
                if (Gvar.var_3918 == Gvar.var_3919 || Gvar.var_3919 != 0) {
                        Gvar.var_1314 = 0;
                        Gvar.var_3907 = 0;
                        Gvar.var_222 = 0;
                        Gvar.var_1375 = 0;
                        Gvar.var_2227 = 0;
                        Gvar.var_2228 = 0;
                        Gvar.var_2229 = 0;
                        Gvar.var_2180 = 0;
                        Gvar.var_242 = 0;
                        Gvar.var_2230 = 0;
                        Gvar.var_2231 = 0;
                        Gvar.var_2232 = 0;
                        Gvar.var_2233 = 0;
                        Gvar.var_2175 = 0;
                        Gvar.var_1388 = 0;
                        Gvar.var_2234 = 0;
                        Gvar.var_2235 = 0;
                        Gvar.var_1325 = 0;
                        Gvar.var_259 = 0;
                        Gvar.var_256 = 0;
                        Gvar.var_245 = 0;
                        Gvar.var_1886 = 0;
                        Gvar.var_2236 = 0;
                        Gvar.var_245 = 0;
                        Gvar.var_2195 = 0;
                        Gvar.var_2237 = 0;
                        await Func.func009(); return;
                }
                await Func.func493(); return;
        }
        await Func.func464();
        Gvar.var_2237 = 0;
        Gvar.var_3907 = 1;
        await Func.func0996(); return;
}

export {func0998}
