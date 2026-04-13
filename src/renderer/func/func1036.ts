import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func1036(this: any) {
        Adap.dbgprt(1036);
        Gvar.var_3949 = 0;
        if (Gvar.var_93[Gvar.var_378][Gvar.var_379] != 0) {
                Gvar.var_1638 = Gvar.var_93[Gvar.var_378][Gvar.var_379];
                if (Gvar.var_308[Gvar.var_1638][0] != 50) {
                        Gvar.var_475 = 11;
                        Gvar.var_3949 = 1;
                        Gvar.var_268 = Gvar.var_308[Gvar.var_1638][0];
                        await Func.func658();
                        Gvar.var_3953 = Gvar.var_1872;
                        Gvar.var_476 = 1;
                        Gvar.var_283 = "";
                        Gvar.var_284 = "";
                        Gvar.var_285 = "";
                        Gvar.var_286 = "";
                        Gvar.var_287 = "";
                        Gvar.var_288 = "";
                        Gvar.var_289 = 0;
                        Gvar.var_283 = "接触老化攻撃だ！";
                        Gvar.var_284 = "";
                        Gvar.var_223 = 1;
                        Gvar.var_290 = 0;
                        Gvar.var_24 = Gvar.var_24[1];
                        Gvar.var_25 = Gvar.var_25[1];
                        Gvar.var_26 = Gvar.var_26[1];
                        await Func.func050();
                        Gvar.var_271 = 1;
                        Adap.DSPLAY(121);
                        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
                                await Func.func354();
                        }
                        Gvar.var_2505 = 0;
                        if (Gvar.var_308[Gvar.var_1638][25] <= 50) {
                                Gvar.var_308[Gvar.var_1638][25] = 50;
                        }
                        Gvar.var_308[Gvar.var_1638][25] = Gvar.var_308[Gvar.var_1638][25] + 5;
                        if (Gvar.var_308[Gvar.var_1638][25] >= 99) {
                                Gvar.var_308[Gvar.var_1638][25] = 99;
                        }
                        if (Gvar.var_308[Gvar.var_1638][0] == 119) {
                                Gvar.var_308[Gvar.var_1638][0] = 147;
                                Gvar.var_308[Gvar.var_1638][14] = 1;
                                if (Gvar.var_131 == Gvar.var_1638) {
                                        Gvar.var_131 = 0;
                                }
                                Gvar.var_268 = 147;
                                await Func.func658();
                                Gvar.var_308[Gvar.var_1638][3] = Gvar.var_505;
                                Gvar.var_2505 = 1;
                        }
                        if (Gvar.var_308[Gvar.var_1638][0] == 135) {
                                Gvar.var_308[Gvar.var_1638][0] = 119;
                                Gvar.var_268 = 119;
                                await Func.func658();
                                Gvar.var_308[Gvar.var_1638][3] = Gvar.var_505;
                                Gvar.var_2505 = 1;
                        }
                        Gvar.var_271 = 0;
                        Adap.DSPLAY(164);
                        Gvar.var_283 = Gvar.var_286;
                        Gvar.var_284 = Gvar.var_287;
                        if (Gvar.var_2505 == 1) {
                                Gvar.var_286 = "" + Gvar.var_3953 + "は老化した！";
                        }
                        else {
                                Gvar.var_286 = "" + Gvar.var_1872 + "は攻撃力が下がった！";
                        }
                        Gvar.var_2505 = 0;
                        Gvar.var_287 = "";
                        Gvar.var_24 = Gvar.var_24[1];
                        Gvar.var_25 = Gvar.var_25[1];
                        Gvar.var_26 = Gvar.var_26[1];
                        await Func.func053();
                        Gvar.var_223 = 1;
                        Gvar.var_290 = 0;
                        await Func.func050();
                        Gvar.var_2427 = 1;
                        Gvar.var_476 = 0;
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

export {func1036}
