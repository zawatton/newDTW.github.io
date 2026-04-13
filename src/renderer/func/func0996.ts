import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func0996(this: any) {
        Adap.dbgprt(996);
        Adap.redraw(1);
        await Func.func084();
        if (Gvar.var_264 == 1) {
                Gvar.var_1314 = 0;
                for (let cnt1 = 0; cnt1 < 4; ++cnt1) {
                        await Func.func354();
                }
                await Func.func009(); return;
        }
        if (Gvar.var_3907 == 0) {
                await Func.func099();
                Gvar.var_283 = "";
                Gvar.var_284 = "";
                Gvar.var_285 = "";
                Gvar.var_286 = "";
                Gvar.var_287 = "";
                Gvar.var_288 = "";
                Gvar.var_289 = 0;
                Gvar.var_283 = "D.ﾀﾞｰﾋﾞｰ「それでは";
                Gvar.var_284 = "　ポーカーでお相手願いましょう」";
                Gvar.var_223 = 1;
                Gvar.var_290 = 0;
                Gvar.var_24 = Gvar.var_24[1];
                Gvar.var_25 = Gvar.var_25[1];
                Gvar.var_26 = Gvar.var_26[1];
                await Func.func358();
                await Func.func099();
                Gvar.var_283 = Gvar.var_286;
                Gvar.var_284 = Gvar.var_287;
                Gvar.var_286 = "D.ﾀﾞｰﾋﾞｰ「賭けるDISCを選びたまえ」";
                Gvar.var_287 = "";
                Gvar.var_24 = Gvar.var_24[1];
                Gvar.var_25 = Gvar.var_25[1];
                Gvar.var_26 = Gvar.var_26[1];
                await Func.func053();
                Gvar.var_223 = 1;
                Gvar.var_290 = 0;
                await Func.func358();
                Gvar.var_2527 = Gvar.var_250;
                Gvar.var_223 = 0;
                Gvar.var_2237 = 1;
                Gvar.var_252 = 1;
                Gvar.var_253 = 45;
                Gvar.var_250 = 1;
                Gvar.var_248 = Gvar.var_249 + 10;
                Gvar.var_245 = 0;
                await Func.func054();
                Gvar.var_222 = 1;
                await Func.func493(); return;
        }
        if (Gvar.var_3907 == 6) {
                await Func.func1000();
                await Func.func0999();
                await Func.func1001();
                if (Gvar.var_3915 == 1) {
                        Gvar.var_3914 = Gvar.var_3914 + 1;
                }
                if (Gvar.var_3916 == 1) {
                        Gvar.var_3914 = Gvar.var_3914 - 1;
                }
                if (Gvar.var_3914 > 4) {
                        Gvar.var_3914 = 4;
                }
                if (Gvar.var_3914 < 0) {
                        Gvar.var_3914 = 0;
                }
                if (Gvar.var_3917 == 1) {
                        Gvar.var_3913[Gvar.var_3914] = Gvar.var_3913[Gvar.var_3914] ^ 1;
                }
        }
        await Func.func354();
        await Func.func0996(); return;
}

export {func0996}
