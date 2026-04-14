/**
 * func0846 — func846 不明
 *
 * (org原典: newDTW_func8)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func0846(this: any) {
    Adap.dbgprt(846);
    if (Gvar.var_240 == 115 && Gvar.var_176 == 0 || Gvar.var_176 == 131) {
        await Func.func0847(); return;
    }
    await Func.func0099();
    Gvar.var_283 = Gvar.var_286;
    Gvar.var_284 = Gvar.var_287;
    Gvar.var_286 = "ﾃﾞｨｱﾎﾞﾛ「★※○■¶◆ЖΘ！！！」";
    Gvar.var_287 = "";
    Gvar.var_24 = Gvar.var_24[5];
    Gvar.var_25 = Gvar.var_25[5];
    Gvar.var_26 = Gvar.var_26[5];
    Gvar.var_223 = 1;
    Gvar.var_290 = 0;
    await Func.func0050();
    await Func.func0053();
    await Func.func0358();
    if (Gvar.var_236 <= 1) {
        Gvar.var_236 = 0;
        Gvar.var_387 = 280;
        Gvar.var_237 = 1;
    }
    if (Gvar.var_236 >= 2) {
        Gvar.var_236 = 1;
    }
    Gvar.var_124 = 2;
    Adap.DSPLAY(103);
    Gvar.var_283 = Gvar.var_286;
    Gvar.var_284 = Gvar.var_287;
    Gvar.var_286 = "ﾃﾞｨｱﾎﾞﾛは酷いダメージを受けた！";
    Gvar.var_287 = "";
    Gvar.var_223 = 1;
    Gvar.var_290 = 0;
    await Func.func0050();
    await Func.func0053();
    await Func.func0358();
    await Func.func0054();
    Gvar.var_124 = 0;
    Gvar.var_223 = 0;
    await Func.func0009(); return;
}

export { func0846 }
