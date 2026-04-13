import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'

async function func0821(this: any) {
    Adap.dbgprt(821);
    Gvar.var_271 = 0;
    if (Gvar.var_458 >= 1 && Gvar.var_1095 >= 1 && Gvar.var_460 == 0) {
        await Func.func0054();
        await Func.func0887(); return;
    }
    Adap.DSPLAY(212);
    if (Gvar.var_460 == 1) {
        Gvar.var_283 = "";
        Gvar.var_284 = "";
        Gvar.var_285 = "";
        Gvar.var_286 = "";
        Gvar.var_287 = "";
        Gvar.var_288 = "";
        Gvar.var_289 = 0;
        Gvar.var_283 = "ﾃﾞｨｱﾎﾞﾛ「…？";
        Gvar.var_284 = "　　　　　壁の穴が塞がっているな」";
        Gvar.var_223 = 1;
        Gvar.var_290 = 0;
        Gvar.var_24 = Gvar.var_24[1];
        Gvar.var_25 = Gvar.var_25[1];
        Gvar.var_26 = Gvar.var_26[1];
        await Func.func0050();
        await Func.func0358();
        await Func.func0054();
        Gvar.var_223 = 0;
        await Func.func0009(); return;
    }
    if (Gvar.var_458 >= 1 && Gvar.var_1095 == 0) {
        Gvar.var_283 = "";
        Gvar.var_284 = "";
        Gvar.var_285 = "";
        Gvar.var_286 = "";
        Gvar.var_287 = "";
        Gvar.var_288 = "";
        Gvar.var_289 = 0;
        Gvar.var_283 = "壁に穴が開いている。";
        Gvar.var_284 = "";
        Gvar.var_223 = 1;
        Gvar.var_290 = 0;
        Gvar.var_24 = Gvar.var_24[1];
        Gvar.var_25 = Gvar.var_25[1];
        Gvar.var_26 = Gvar.var_26[1];
        await Func.func0050();
        await Func.func0358();
        await Func.func0054();
        Gvar.var_223 = 0;
        await Func.func0009(); return;
    }
    Gvar.var_283 = "";
    Gvar.var_284 = "";
    Gvar.var_285 = "";
    Gvar.var_286 = "";
    Gvar.var_287 = "";
    Gvar.var_288 = "";
    Gvar.var_289 = 0;
    Gvar.var_283 = "壁に写真や資料が貼り付いている。";
    Gvar.var_284 = "";
    Gvar.var_223 = 1;
    Gvar.var_290 = 0;
    Gvar.var_24 = Gvar.var_24[1];
    Gvar.var_25 = Gvar.var_25[1];
    Gvar.var_26 = Gvar.var_26[1];
    await Func.func0050();
    await Func.func0358();
    await Func.func0054();
    Gvar.var_223 = 0;
    await Func.func0009(); return;
}

export { func0821 }
