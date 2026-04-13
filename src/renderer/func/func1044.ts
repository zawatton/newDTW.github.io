import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func1044(this: any) {
        Adap.dbgprt(1044);
        if (Gvar.var_149 >= 1 || Gvar.var_144 >= 1 || Gvar.var_120 == 0) {
            Gvar.var_271 = 0;
            Gvar.var_283 = "";
            Gvar.var_284 = "";
            Gvar.var_285 = "";
            Gvar.var_286 = "";
            Gvar.var_287 = "";
            Gvar.var_288 = "";
            Gvar.var_289 = 0;
            Gvar.var_283 = "スデに目が見えないようだ…";
            Gvar.var_284 = "";
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            Gvar.var_24 = Gvar.var_24[1];
            Gvar.var_25 = Gvar.var_25[1];
            Gvar.var_26 = Gvar.var_26[1];
            await Func.func050();
            await Func.func009(); return;
        }
        Gvar.var_120 = 0;
        Gvar.var_283 = "ﾜﾑｳ「ブツ　ブツ　ブツ";
        Gvar.var_284 = "　　　　ブツ　ブツ　ブツ」";
        Gvar.var_286 = "";
        Gvar.var_287 = "";
        Gvar.var_289 = 0;
        Gvar.var_24 = Gvar.var_24[1];
        Gvar.var_25 = Gvar.var_25[1];
        Gvar.var_26 = Gvar.var_26[1];
        Gvar.var_223 = 1;
        Gvar.var_290 = 0;
        await Func.func050();
        Gvar.var_540 = 1;
        await Func.func358();
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func354();
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
        }
        Adap.DSPLAY(235);
        Gvar.var_540 = 2;
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
            await Func.func354();
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
        }
        Gvar.var_540 = 3;
        for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
            await Func.func354();
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
        }
        Gvar.var_540 = 0;
        Gvar.var_149 = 1;
        Gvar.var_283 = Gvar.var_286;
        Gvar.var_284 = Gvar.var_287;
        Gvar.var_286 = "ﾜﾑｳ「なまじ目が見えたから";
        Gvar.var_287 = "　　ヤツに虚をつかれた！」";
        Gvar.var_24 = Gvar.var_24[2];
        Gvar.var_25 = Gvar.var_25[2];
        Gvar.var_26 = Gvar.var_26[2];
        await Func.func053();
        Gvar.var_223 = 1;
        Gvar.var_290 = 0;
        await Func.func050();
        await Func.func358();
        Gvar.var_465 = 0;
        if (Gvar.var_944 >= 99) {
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "これ以上成長できなかった…";
            Gvar.var_287 = "";
            Gvar.var_24 = Gvar.var_24[2];
            Gvar.var_25 = Gvar.var_25[2];
            Gvar.var_26 = Gvar.var_26[2];
            await Func.func053();
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            await Func.func050();
            for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                await Func.func354();
            }
            await Func.func019(); return;
        }
        Adap.DSPLAY(142);
        Gvar.var_650 = Gvar.var_1048[Gvar.var_944];
        await Func.func719();
        Gvar.var_2431 = 0;
        Gvar.var_283 = Gvar.var_286;
        Gvar.var_284 = Gvar.var_287;
        Gvar.var_286 = "ﾜﾑｳはレベルが上がった！";
        Gvar.var_287 = "";
        Gvar.var_24 = Gvar.var_24[2];
        Gvar.var_25 = Gvar.var_25[2];
        Gvar.var_26 = Gvar.var_26[2];
        await Func.func053();
        Gvar.var_223 = 1;
        Gvar.var_290 = 0;
        await Func.func050();
        for (let cnt5 = 0; cnt5 < 10; ++cnt5) {
            await Func.func354();
        }
        return;
}

export {func1044}
