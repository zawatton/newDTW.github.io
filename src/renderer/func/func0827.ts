import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func0827(this: any) {
    Adap.dbgprt(827);
    Gvar.var_271 = 0;
    Gvar.var_283 = "";
    Gvar.var_284 = "";
    Gvar.var_285 = "";
    Gvar.var_286 = "";
    Gvar.var_287 = "";
    Gvar.var_288 = "";
    Gvar.var_289 = 0;
    Gvar.var_283 = "鮮血のｼｬﾎﾞﾝが浮かんでいる…";
    Gvar.var_284 = "";
    Gvar.var_24 = Gvar.var_24[1];
    Gvar.var_25 = Gvar.var_25[1];
    Gvar.var_26 = Gvar.var_26[1];
    Gvar.var_223 = 1;
    Gvar.var_290 = 0;
    await Func.func0050();
    await Func.func0358();
    if (Gvar.var_1088[0] == 0) {
        Gvar.var_283 = Gvar.var_286;
        Gvar.var_284 = Gvar.var_287;
        Gvar.var_286 = "中には何も入っていないようだ。";
        Gvar.var_287 = "";
        Gvar.var_223 = 1;
        Gvar.var_290 = 0;
        await Func.func0050();
        await Func.func0053();
        await Func.func0358();
        Gvar.var_283 = Gvar.var_286;
        Gvar.var_284 = Gvar.var_287;
        Gvar.var_286 = "何か入れますか？";
        Gvar.var_287 = "";
        Gvar.var_223 = 1;
        Gvar.var_290 = 0;
        await Func.func0050();
        await Func.func0053();
        await Func.func0358();
        await Func.func0054();
        Gvar.var_273 = 19;
        Gvar.var_274 = 45;
        Gvar.var_627 = 1;
        Gvar.var_3446 = 1;
        Gvar.var_629 = 1;
        await Func.func0898(); return;
    }
    if (Gvar.var_1088[0] != 0) {
        Gvar.var_257 = Gvar.var_1088[0];
        Gvar.var_555 = Gvar.var_1088[13];
        await Func.func0524();
        Gvar.var_283 = Gvar.var_286;
        Gvar.var_284 = Gvar.var_287;
        Gvar.var_286 = "" + Gvar.var_557 + "が";
        Gvar.var_287 = "入っているようだ。";
        Gvar.var_223 = 1;
        Gvar.var_290 = 0;
        await Func.func0050();
        await Func.func0053();
        await Func.func0358();
        Gvar.var_283 = Gvar.var_286;
        Gvar.var_284 = Gvar.var_287;
        Gvar.var_286 = "取り出しますか？";
        Gvar.var_287 = "";
        Gvar.var_223 = 1;
        Gvar.var_290 = 0;
        await Func.func0050();
        await Func.func0053();
        await Func.func0358();
        await Func.func0054();
        Gvar.var_273 = 19;
        Gvar.var_274 = 45;
        Gvar.var_627 = 1;
        Gvar.var_3447 = 1;
        Gvar.var_629 = 1;
        await Func.func0898(); return;
    }
    return;
}

export { func0827 }
