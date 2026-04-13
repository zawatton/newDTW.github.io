import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func1048(this: any) {
        Adap.dbgprt(1048);
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
        Gvar.var_652 = 0;
        Gvar.var_283 = "";
        Gvar.var_284 = "";
        Gvar.var_285 = "";
        Gvar.var_286 = "";
        Gvar.var_287 = "";
        Gvar.var_288 = "";
        Gvar.var_289 = 0;
        Gvar.var_283 = "ベースとなるアイテムを選んでください";
        Gvar.var_223 = 1;
        Gvar.var_290 = 0;
        Gvar.var_24 = Gvar.var_24[1];
        Gvar.var_25 = Gvar.var_25[1];
        Gvar.var_26 = Gvar.var_26[1];
        await Func.func050();
        for (let cnt1 = 0; cnt1 < 4; ++cnt1) {
            await Func.func354();
        }
        await Func.func358();
        Gvar.var_2527 = Gvar.var_250;
        Gvar.var_223 = 0;
        Gvar.var_1375 = 1;
        if (Gvar.var_245 == 1) {
            Gvar.var_2528 = 1;
        }
        Gvar.var_252 = 1;
        Gvar.var_253 = 45;
        Gvar.var_250 = 1;
        Gvar.var_248 = Gvar.var_249 + 10;
        Gvar.var_245 = 0;
        await Func.func054();
        Gvar.var_222 = 1;
        await Func.func493(); return;
}

export {func1048}
