import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func1047(this: any) {
        Adap.dbgprt(1047);
        if (Gvar.var_120 == 0) {
            Gvar.var_271 = 0;
            Gvar.var_283 = "";
            Gvar.var_284 = "";
            Gvar.var_285 = "";
            Gvar.var_286 = "";
            Gvar.var_287 = "";
            Gvar.var_288 = "";
            Gvar.var_289 = 0;
            Gvar.var_283 = "方角はスデに決定しているようだ…";
            Gvar.var_284 = "";
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            Gvar.var_24 = Gvar.var_24[1];
            Gvar.var_25 = Gvar.var_25[1];
            Gvar.var_26 = Gvar.var_26[1];
            await Func.func050();
            await Func.func009(); return;
        }
        Gvar.var_120 = Gvar.var_120 - 1;
        Gvar.var_265 = 0;
        Gvar.var_540 = 1;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            await Func.func354();
        }
        Gvar.var_540 = 2;
        for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
            await Func.func354();
        }
        Gvar.var_540 = 3;
        for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
            await Func.func354();
        }
        Gvar.var_540 = 2;
        for (let cnt4 = 0; cnt4 < 2; ++cnt4) {
            await Func.func354();
        }
        Gvar.var_540 = 1;
        for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
            await Func.func354();
        }
        Gvar.var_540 = 0;
        Gvar.var_869 = 1;
        Gvar.var_2615 = 1;
        for (let cnt6 = 0; cnt6 < 4; ++cnt6) {
            for (let cnt7 = 0; cnt7 < 500; ++cnt7) {
                Gvar.var_1714 = Adap.rnd(Gvar.var_32);
                Gvar.var_255 = Adap.rnd(Gvar.var_33);
                if (Gvar.var_82[Gvar.var_1714][Gvar.var_255] == Gvar.var_226 && Gvar.var_88[Gvar.var_1714][Gvar.var_255] == 0 && Gvar.var_91[Gvar.var_1714][Gvar.var_255] == 0 && Gvar.var_84[Gvar.var_1714][Gvar.var_255] == 0 && Gvar.var_73[Gvar.var_1714][Gvar.var_255] == 0) {
                    await Func.func568();
                    break;
                }
            }
        }
        Gvar.var_869 = 0;
        Gvar.var_2615 = 0;
        Gvar.var_283 = "";
        Gvar.var_284 = "";
        Gvar.var_285 = "";
        Gvar.var_286 = "";
        Gvar.var_287 = "";
        Gvar.var_288 = "";
        Gvar.var_289 = 0;
        Gvar.var_283 = "ｹﾝｿﾞｰはドラゴンに手を入れた！";
        Gvar.var_284 = "周囲に罠が増えた";
        Gvar.var_223 = 1;
        Gvar.var_290 = 0;
        Gvar.var_24 = Gvar.var_24[2];
        Gvar.var_25 = Gvar.var_25[2];
        Gvar.var_26 = Gvar.var_26[2];
        await Func.func050();
        for (let cnt8 = 0; cnt8 < 10; ++cnt8) {
            await Func.func354();
        }
        await Func.func348();
        return;
}

export {func1047}
