import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func1051(this: any) {
        Adap.dbgprt(1051);
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
        await Func.func099();
        Gvar.var_283 = "";
        Gvar.var_284 = "";
        Gvar.var_285 = "";
        Gvar.var_286 = "";
        Gvar.var_287 = "";
        Gvar.var_288 = "";
        Gvar.var_289 = 0;
        if (Gvar.var_120 == 3) {
            Gvar.var_283 = "「エコーズ　ACT１」！！";
        }
        if (Gvar.var_120 == 2) {
            Gvar.var_283 = "「エコーズ　ACT２」！！";
        }
        if (Gvar.var_120 == 1) {
            Gvar.var_283 = "「エコーズ　ACT３」！！";
        }
        Gvar.var_24 = Gvar.var_24[2];
        Gvar.var_25 = Gvar.var_25[2];
        Gvar.var_26 = Gvar.var_26[2];
        Gvar.var_223 = 1;
        Gvar.var_290 = 0;
        await Func.func050();
        for (let cnt1 = 0; cnt1 < 16; ++cnt1) {
            Gvar.var_290 = 0;
            await Func.func354();
        }
        if (Gvar.var_120 == 3) {
            Gvar.var_2800 = 1;
        }
        if (Gvar.var_120 == 2) {
            Gvar.var_2800 = 2;
        }
        if (Gvar.var_120 == 1) {
            Gvar.var_2800 = 3;
        }
        Gvar.var_443 = 1;
        Gvar.var_2816 = 1;
        Gvar.var_444 = Gvar.var_445;
        await Func.func588();
        Gvar.var_446 = Gvar.var_445;
        Gvar.var_445 = Gvar.var_444;
        Gvar.var_2816 = 0;
        Gvar.var_2800 = 0;
        Gvar.var_443 = 0;
        if (Gvar.var_2339 == 1) {
            Gvar.var_120 = Gvar.var_120 - 1;
            Gvar.var_466 = (Gvar.var_308[Gvar.var_446][1] - Gvar.var_74 + 4) * 40;
            Gvar.var_467 = (Gvar.var_308[Gvar.var_446][2] - Gvar.var_75 + 4) * 40;
            Gvar.var_310 = 1;
            Gvar.var_468 = 1;
            Adap.DSPLAY(168);
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                Gvar.var_290 = 0;
                await Func.func354();
                Gvar.var_468++;
            }
            Gvar.var_310 = 0;
            Gvar.var_468 = 0;
        }
        if (Gvar.var_2339 == 0) {
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "しかしスタンドを出せなかった…";
            Gvar.var_287 = "";
            Gvar.var_24 = Gvar.var_24[2];
            Gvar.var_25 = Gvar.var_25[2];
            Gvar.var_26 = Gvar.var_26[2];
            await Func.func053();
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            await Func.func050();
            Gvar.var_2427 = 1;
            return;
        }
        await Func.func348();
        for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
            Gvar.var_290 = 0;
            await Func.func354();
        }
        return;
}

export {func1051}
