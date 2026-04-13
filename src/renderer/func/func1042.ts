import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func1042(this: any) {
        Adap.dbgprt(1042);
        Gvar.var_3949 = 0;
        Gvar.var_120 = 10;
        if (Gvar.var_93[Gvar.var_378][Gvar.var_379] != 0) {
                Gvar.var_1638 = Gvar.var_93[Gvar.var_378][Gvar.var_379];
                if (Gvar.var_308[Gvar.var_1638][0] != 50) {
                        if (Gvar.var_224 == 2) {
                                Gvar.var_540 = 1;
                        }
                        if (Gvar.var_224 == 4) {
                                Gvar.var_540 = 2;
                        }
                        if (Gvar.var_224 == 8) {
                                Gvar.var_540 = 3;
                        }
                        if (Gvar.var_224 == 6) {
                                Gvar.var_540 = 4;
                        }
                        if (Gvar.var_224 == 1) {
                                Gvar.var_540 = 5;
                        }
                        if (Gvar.var_224 == 7) {
                                Gvar.var_540 = 6;
                        }
                        if (Gvar.var_224 == 3) {
                                Gvar.var_540 = 7;
                        }
                        if (Gvar.var_224 == 9) {
                                Gvar.var_540 = 8;
                        }
                        Gvar.var_308[Gvar.var_1638][8] = 1;
                        Gvar.var_310 = 1;
                        Gvar.var_1637 = 1;
                        Gvar.var_1636 = 1;
                        Adap.DSPLAY(161);
                        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
                                await Func.func354();
                                Gvar.var_1636++;
                        }
                        Gvar.var_1637 = 0;
                        Gvar.var_540 = 0;
                        Gvar.var_310 = 0;
                        Gvar.var_1636 = 0;
                        Gvar.var_308[Gvar.var_1638][8] = 0;
                        Gvar.var_283 = "";
                        Gvar.var_284 = "";
                        Gvar.var_285 = "";
                        Gvar.var_286 = "";
                        Gvar.var_287 = "";
                        Gvar.var_288 = "";
                        Gvar.var_289 = 0;
                        Gvar.var_283 = "養分を吸って満腹度が回復した！";
                        Gvar.var_284 = "";
                        Adap.DSPLAY(143);
                        Gvar.var_381 = Gvar.var_381 + 10;
                        if (Gvar.var_381 >= Gvar.var_649) {
                                Gvar.var_381 = Gvar.var_649;
                                Gvar.var_283 = "養分を吸って満腹度が完全に回復した！";
                        }
                        Gvar.var_223 = 1;
                        Gvar.var_290 = 0;
                        Gvar.var_24 = Gvar.var_24[2];
                        Gvar.var_25 = Gvar.var_25[2];
                        Gvar.var_26 = Gvar.var_26[2];
                        await Func.func050();
                        Gvar.var_3949 = 1;
                        Adap.DSPLAY(143);
                        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
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

export {func1042}
