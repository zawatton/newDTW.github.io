import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func1035(this: any) {
        Adap.dbgprt(1035);
        Gvar.var_3949 = 0;
        if (Gvar.var_93[Gvar.var_378][Gvar.var_379] != 0) {
                Gvar.var_1638 = Gvar.var_93[Gvar.var_378][Gvar.var_379];
                if (Gvar.var_308[Gvar.var_1638][0] != 50) {
                        Gvar.var_3949 = 1;
                        Gvar.var_475 = 11;
                        Gvar.var_268 = Gvar.var_308[Gvar.var_1638][0];
                        await Func.func658();
                        Gvar.var_475 = 11;
                        Gvar.var_476 = 1;
                        Gvar.var_283 = "";
                        Gvar.var_284 = "";
                        Gvar.var_285 = "";
                        Gvar.var_286 = "";
                        Gvar.var_287 = "";
                        Gvar.var_288 = "";
                        Gvar.var_289 = 0;
                        Gvar.var_283 = "髪の毛一本を「爆弾」に変えた";
                        Gvar.var_284 = "死ね！" + Gvar.var_1872 + "ッ！";
                        Gvar.var_223 = 1;
                        Gvar.var_290 = 0;
                        Gvar.var_24 = Gvar.var_24[1];
                        Gvar.var_25 = Gvar.var_25[1];
                        Gvar.var_26 = Gvar.var_26[1];
                        await Func.func050();
                        Gvar.var_271 = 1;
                        Gvar.var_522 = 1;
                        Adap.DSPLAY(126);
                        Gvar.var_308[Gvar.var_1638][8] = 1;
                        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
                                await Func.func354();
                        }
                        Gvar.var_308[Gvar.var_1638][24] = 1;
                        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
                                await Func.func354();
                        }
                        Gvar.var_308[Gvar.var_1638][8] = 0;
                        Gvar.var_476 = 0;
                        Gvar.var_271 = 0;
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

export {func1035}
