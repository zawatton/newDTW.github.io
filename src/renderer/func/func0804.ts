/**
 * func0804 — func804 ヴェネチアホテルに設置してあるPC設定
 *
 * ヴェネチアホテルや亀、酒場の設定
 *
 * (org原典: newDTW_dungeon0 / DONE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'

async function func0804(this: any) {
    Adap.dbgprt(804);
    Gvar.var_271 = 0;
    await Func.func0099();
    Gvar.var_283 = "";
    Gvar.var_284 = "";
    Gvar.var_285 = "";
    Gvar.var_286 = "";
    Gvar.var_287 = "";
    Gvar.var_288 = "";
    Gvar.var_289 = 0;
    Gvar.var_283 = "ボインゴ「新しいページが現れたぞ…」";
    Gvar.var_24 = Gvar.var_24[1];
    Gvar.var_25 = Gvar.var_25[1];
    Gvar.var_26 = Gvar.var_26[1];
    Gvar.var_223 = 1;
    Gvar.var_290 = 0;
    await Func.func0050();
    await Func.func0358();
    await Func.func0099();
    Gvar.var_283 = Gvar.var_286;
    Gvar.var_284 = Gvar.var_287;
    Gvar.var_286 = "「ディアボロは次の階で…";
    Gvar.var_287 = "";
    Gvar.var_223 = 1;
    Gvar.var_290 = 0;
    await Func.func0050();
    await Func.func0053();
    await Func.func0358();
    Gvar.var_3434 = Gvar.var_79;
    Gvar.var_79 = Gvar.var_79 + 1;
    await Func.func0660();
    Gvar.var_387 = Gvar.var_1078[Gvar.var_2837];
    await Func.func0190();
    Gvar.var_79 = Gvar.var_3434;
    await Func.func0099();
    Gvar.var_283 = Gvar.var_286;
    Gvar.var_284 = Gvar.var_287;
    Gvar.var_286 = "" + Gvar.var_953;
    Gvar.var_287 = "リタイアだァ―ッ！」";
    Gvar.var_223 = 1;
    Gvar.var_290 = 0;
    await Func.func0050();
    await Func.func0053();
    await Func.func0358();
    await Func.func0099();
    Gvar.var_283 = Gvar.var_286;
    Gvar.var_284 = Gvar.var_287;
    Gvar.var_286 = "ｳｸｹｺ ｳﾋｺ ｳｹｹｹ ｳｹｺｹｺｹﾛｵ ";
    Gvar.var_287 = "ｳｹﾛｵｵｵﾌﾊﾎｯ！";
    Gvar.var_223 = 1;
    Gvar.var_290 = 0;
    await Func.func0050();
    await Func.func0053();
    for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
        await Func.func0354();
    }
    await Func.func0358();
    await Func.func0054();
    Gvar.var_223 = 0;
    await Func.func0009(); return;
}

export { func0804 }
