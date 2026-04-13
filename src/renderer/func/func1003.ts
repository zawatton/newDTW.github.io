import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func1003(this: any) {
        Adap.dbgprt(1003);
        Gvar.var_283 = "";
        Gvar.var_284 = "";
        Gvar.var_285 = "";
        Gvar.var_286 = "";
        Gvar.var_287 = "";
        Gvar.var_288 = "";
        Gvar.var_289 = 0;
        Gvar.var_283 = "絶ﾎﾞﾛ「『キング・クリムゾン』！！";
        Gvar.var_284 = "       我以外の時間は消し飛ぶ！」";
        Gvar.var_223 = 1;
        Gvar.var_290 = 0;
        Gvar.var_24 = Gvar.var_24[1];
        Gvar.var_25 = Gvar.var_25[1];
        Gvar.var_26 = Gvar.var_26[1];
        await Func.func050();
        await Func.func358();
        Gvar.var_437 = Adap.dim(10, 10);
        Gvar.var_441 = 1;
        if (Gvar.var_140 == 0) {
                await Func.func1004();
                Gvar.var_450 = Gvar.var_102;
        }
        Gvar.var_102 = 17;
        Gvar.var_140 = 1;
        Gvar.var_131 = 0;
        Gvar.var_532 = 0;
        Gvar.var_533 = 0;
        Gvar.var_530 = 0;
        Gvar.var_531 = 0;
        Adap.DSPLAY(185);
        Gvar.var_310 = 1;
        Gvar.var_1648 = 1;
        Gvar.var_447 = Gvar.var_308[Gvar.var_2125][3];
        Gvar.var_3932 = Gvar.var_308[Gvar.var_2125][1];
        Gvar.var_3933 = Gvar.var_308[Gvar.var_2125][2];
        Gvar.var_308[Gvar.var_2125][0] = 0;
        Gvar.var_308[Gvar.var_2125][1] = 0;
        Gvar.var_308[Gvar.var_2125][2] = 0;
        Gvar.var_93[Gvar.var_3932][Gvar.var_3933] = 0;
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
                await Func.func354();
                Gvar.var_1648++;
        }
        Gvar.var_310 = 0;
        Gvar.var_1648 = 0;
        Gvar.var_2556 = 1;
        Gvar.var_443 = 4;
        Gvar.var_2331 = Gvar.var_74;
        Gvar.var_2332 = Gvar.var_75;
        Gvar.var_378 = Gvar.var_74;
        Gvar.var_379 = Gvar.var_75;
        await Func.func588();
        Gvar.var_2556 = 0;
        Gvar.var_443 = 0;
        Gvar.var_141 = Gvar.var_107;
        if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
        }
        Gvar.var_242 = 1;
        Gvar.var_2128 = 1;
        Gvar.var_448 = 0;
        return;
}

export {func1003}
