import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func1030(this: any) {
        Adap.dbgprt(1030);
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
                        Gvar.var_3949 = 1;
                        Gvar.var_1509 = Gvar.var_308[Gvar.var_1638][1];
                        Gvar.var_1510 = Gvar.var_308[Gvar.var_1638][2];
                        Gvar.var_1512 = 1;
                        Gvar.var_310 = 1;
                        Adap.DSPLAY(215);
                        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
                                await Func.func354();
                                Gvar.var_1512 = Gvar.var_1512 + 1;
                        }
                        Gvar.var_1512 = 0;
                        Gvar.var_310 = 0;
                        Adap.DSPLAY(126);
                        Gvar.var_308[Gvar.var_1638][13] = 1;
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

export {func1030}
