import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func1032(this: any) {
        Adap.dbgprt(1032);
        Gvar.var_2167 = Gvar.var_224;
        Gvar.var_224 = 2;
        Gvar.var_1394 = 3;
        Adap.DSPLAY(127);
        Gvar.var_310 = 1;
        Gvar.var_1635 = 1;
        for (let cnt1 = 0; cnt1 < 14; ++cnt1) {
                Gvar.var_1635++;
                await Func.func354();
                await Func.func354();
        }
        Gvar.var_310 = 0;
        Gvar.var_1635 = 0;
        Gvar.var_1394 = 0;
        Gvar.var_200 = 0;
        Gvar.var_201 = 0;
        Gvar.var_2509 = 0;
        Gvar.var_2510 = 0;
        Gvar.var_2511 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_107; ++cnt1) {
                if (Gvar.var_308[Gvar.var_2511][0] == 113) {
                        Gvar.var_2512 = Adap.rnd(20);
                        if (Gvar.var_2512 >= 10) {
                                Gvar.var_2510 = Gvar.var_2511;
                                break;
                        }
                }
                if (Gvar.var_308[Gvar.var_2511][0] == 115) {
                        Gvar.var_2512 = Adap.rnd(20);
                        if (Gvar.var_2512 >= 10) {
                                Gvar.var_2509 = Gvar.var_2511;
                                break;
                        }
                }
                Gvar.var_2511++;
        }
        if (Gvar.var_2509 == 0 && Gvar.var_2510 == 0) {
                Adap.DSPLAY(184);
                Gvar.var_283 = "";
                Gvar.var_284 = "";
                Gvar.var_285 = "";
                Gvar.var_286 = "";
                Gvar.var_287 = "";
                Gvar.var_288 = "";
                Gvar.var_289 = 0;
                Gvar.var_283 = "この階の地図を念写した！";
                Gvar.var_223 = 1;
                Gvar.var_290 = 0;
                Gvar.var_24 = Gvar.var_24[1];
                Gvar.var_25 = Gvar.var_25[1];
                Gvar.var_26 = Gvar.var_26[1];
                await Func.func050();
                Gvar.var_113 = 1;
        }
        if (Gvar.var_2510 >= 1) {
                await Func.func099();
                Gvar.var_283 = "";
                Gvar.var_284 = "";
                Gvar.var_285 = "";
                Gvar.var_286 = "";
                Gvar.var_287 = "";
                Gvar.var_288 = "";
                Gvar.var_289 = 0;
                Gvar.var_283 = "「きさま、見ているなッ！！」";
                Gvar.var_223 = 1;
                Gvar.var_290 = 0;
                Gvar.var_24 = Gvar.var_24[1];
                Gvar.var_25 = Gvar.var_25[1];
                Gvar.var_26 = Gvar.var_26[1];
                await Func.func050();
                await Func.func358();
                Gvar.var_201 = Gvar.var_2510;
                Gvar.var_223 = 0;
        }
        if (Gvar.var_2509 >= 1) {
                Adap.DSPLAY(184);
                Gvar.var_283 = "";
                Gvar.var_284 = "";
                Gvar.var_285 = "";
                Gvar.var_286 = "";
                Gvar.var_287 = "";
                Gvar.var_288 = "";
                Gvar.var_289 = 0;
                Gvar.var_283 = "この階のｱｸｱ･ﾈｯｸﾚｽを念写した！";
                Gvar.var_223 = 1;
                Gvar.var_290 = 0;
                Gvar.var_24 = Gvar.var_24[1];
                Gvar.var_25 = Gvar.var_25[1];
                Gvar.var_26 = Gvar.var_26[1];
                await Func.func050();
                await Func.func358();
                Gvar.var_200 = Gvar.var_2509;
                Gvar.var_223 = 0;
        }
        await Func.func348();
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
                await Func.func354();
        }
        Gvar.var_224 = Gvar.var_2167;
        return;
}

export {func1032}
