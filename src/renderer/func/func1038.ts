import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func1038(this: any) {
        Adap.dbgprt(1038);
        if (Gvar.var_120 != 0) {
                Gvar.var_271 = 0;
                Gvar.var_283 = "";
                Gvar.var_284 = "";
                Gvar.var_285 = "";
                Gvar.var_286 = "";
                Gvar.var_287 = "";
                Gvar.var_288 = "";
                Gvar.var_289 = 0;
                Gvar.var_283 = "あと" + Gvar.var_120 + "呼吸置かないと";
                Gvar.var_284 = "発動できないようだ…";
                Gvar.var_223 = 1;
                Gvar.var_290 = 0;
                Gvar.var_24 = Gvar.var_24[1];
                Gvar.var_25 = Gvar.var_25[1];
                Gvar.var_26 = Gvar.var_26[1];
                await Func.func050();
                await Func.func009(); return;
        }
        Gvar.var_184 = 1;
        Gvar.var_185 = 1;
        Gvar.var_170 = 0;
        Gvar.var_283 = "";
        Gvar.var_284 = "";
        Gvar.var_285 = "";
        Gvar.var_286 = "";
        Gvar.var_287 = "";
        Gvar.var_288 = "";
        Gvar.var_289 = 0;
        if (Gvar.var_176 == 114 || Gvar.var_176 == 113) {
                Gvar.var_283 = "「ザ・ワールド」！！";
                Gvar.var_284 = "時よ止まれ！";
                Gvar.var_120 = 20;
                if (Gvar.var_176 == 113) {
                        Gvar.var_120 = 15;
                }
        }
        if (Gvar.var_176 == 128) {
                Gvar.var_283 = "「スタープラチナ・ザ・ワールド」！！";
                Gvar.var_284 = "時は止まる・・・";
                Gvar.var_120 = 5;
        }
        Gvar.var_223 = 1;
        Gvar.var_290 = 0;
        Gvar.var_24 = Gvar.var_24[1];
        Gvar.var_25 = Gvar.var_25[1];
        Gvar.var_26 = Gvar.var_26[1];
        await Func.func050();
        Gvar.var_131 = 0;
        Gvar.var_532 = 0;
        Gvar.var_533 = 0;
        Gvar.var_530 = 0;
        Gvar.var_531 = 0;
        Adap.DSPLAY(185);
        Gvar.var_310 = 1;
        Gvar.var_1648 = 1;
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
                await Func.func354();
                Gvar.var_1648++;
        }
        Gvar.var_310 = 0;
        Gvar.var_1648 = 0;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
                await Func.func354();
        }
        Gvar.var_271 = 0;
        await Func.func009(); return;
}

export {func1038}
