import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func1019(this: any) {
        Adap.dbgprt(1019);
        Gvar.var_3949 = 0;
        Gvar.var_120 = 10;
        if (Gvar.var_93[Gvar.var_378][Gvar.var_379] != 0) {
                Gvar.var_1638 = Gvar.var_93[Gvar.var_378][Gvar.var_379];
                if (Gvar.var_308[Gvar.var_1638][0] != 50) {
                        Gvar.var_268 = Gvar.var_308[Gvar.var_1638][0];
                        await Func.func658();
                        if (Gvar.var_308[Gvar.var_1638][17] == 1) {
                                Gvar.var_271 = 0;
                                Gvar.var_283 = "";
                                Gvar.var_284 = "";
                                Gvar.var_285 = "";
                                Gvar.var_286 = "";
                                Gvar.var_287 = "";
                                Gvar.var_288 = "";
                                Gvar.var_289 = 0;
                                Gvar.var_283 = "" + Gvar.var_1872 + "は";
                                Gvar.var_284 = "スデに混乱しているようだ";
                                Gvar.var_223 = 1;
                                Gvar.var_290 = 0;
                                Gvar.var_24 = Gvar.var_24[1];
                                Gvar.var_25 = Gvar.var_25[1];
                                Gvar.var_26 = Gvar.var_26[1];
                                await Func.func050();
                                await Func.func009(); return;
                        }
                        Adap.DSPLAY(149);
                        Gvar.var_283 = "";
                        Gvar.var_284 = "";
                        Gvar.var_285 = "";
                        Gvar.var_286 = "";
                        Gvar.var_287 = "";
                        Gvar.var_288 = "";
                        Gvar.var_289 = 0;
                        Gvar.var_283 = "「ドガ！」「バキ！」「ボ！」「ビシ！」";
                        Gvar.var_284 = "　　「ボ！」「ドヒュン！」「バキ！」";
                        Gvar.var_24 = Gvar.var_24[2];
                        Gvar.var_25 = Gvar.var_25[2];
                        Gvar.var_26 = Gvar.var_26[2];
                        Gvar.var_223 = 1;
                        Gvar.var_290 = 0;
                        await Func.func050();
                        Gvar.var_271 = 1;
                        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
                                await Func.func354();
                        }
                        await Func.func358();
                        Gvar.var_271 = 0;
                        Gvar.var_308[Gvar.var_1638][17] = 1;
                        Adap.DSPLAY(134);
                        await Func.func651();
                        Gvar.var_283 = Gvar.var_286;
                        Gvar.var_284 = Gvar.var_287;
                        Gvar.var_286 = "" + Gvar.var_1872 + "は混乱した！";
                        Gvar.var_287 = "";
                        Gvar.var_24 = Gvar.var_24[1];
                        Gvar.var_25 = Gvar.var_25[1];
                        Gvar.var_26 = Gvar.var_26[1];
                        await Func.func053();
                        Gvar.var_223 = 1;
                        Gvar.var_290 = 0;
                        await Func.func050();
                        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
                                await Func.func354();
                        }
                        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
                                await Func.func354();
                        }
                        Gvar.var_3949 = 1;
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

export {func1019}
