import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func1009(this: any) {
        Adap.dbgprt(1009);
        Gvar.var_271 = 0;
        Gvar.var_283 = "";
        Gvar.var_284 = "";
        Gvar.var_285 = "";
        Gvar.var_286 = "";
        Gvar.var_287 = "";
        Gvar.var_288 = "";
        Gvar.var_289 = 0;
        Gvar.var_283 = "取り込んでいた魂を";
        Gvar.var_284 = "解放した。";
        if (Gvar.var_116 == 1) {
                Gvar.var_283 = "道具が使える状態ではないようだ…";
                Gvar.var_284 = "";
        }
        Gvar.var_24 = Gvar.var_24[1];
        Gvar.var_25 = Gvar.var_25[1];
        Gvar.var_26 = Gvar.var_26[1];
        Gvar.var_223 = 1;
        Gvar.var_290 = 0;
        await Func.func050();
        if (Gvar.var_116 == 0) {
                Gvar.var_465 = 0;
                Adap.DSPLAY(168);
                Gvar.var_466 = 160;
                Gvar.var_467 = 150;
                Gvar.var_310 = 1;
                Gvar.var_468 = 1;
                await Func.func1014();
                Gvar.var_541 = 150 - 20;
                Gvar.var_542 = Gvar.var_176;
                if (Gvar.var_176 != 0) {
                        Gvar.var_176 = 0;
                        await Func.func526();
                }
                for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
                        await Func.func354();
                        Gvar.var_541 = Gvar.var_541 - 20;
                        Gvar.var_468++;
                }
                Gvar.var_542 = 0;
                Gvar.var_541 = 0;
                Gvar.var_310 = 0;
                Gvar.var_468 = 0;
        }
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
                await Func.func354();
        }
        return;
}

export {func1009}
