/**
 * func0843 — func843 不明
 *
 * (org原典: newDTW_func8)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func0843(this: any) {
    Adap.dbgprt(843);
    Gvar.var_607 = 1;
    Gvar.var_1607 = 1;
    Gvar.var_310 = 1;
    Gvar.var_1608 = Gvar.var_79;
    await Func.func0099();
    Gvar.var_283 = "";
    Gvar.var_284 = "";
    Gvar.var_285 = "";
    Gvar.var_286 = "";
    Gvar.var_287 = "";
    Gvar.var_288 = "";
    Gvar.var_289 = 0;
    Gvar.var_283 = "ｱﾊﾞｯｷｫ「ムーディー・ブルース！」";
    Gvar.var_284 = "";
    Gvar.var_223 = 1;
    Gvar.var_290 = 0;
    Gvar.var_24 = Gvar.var_24[1];
    Gvar.var_25 = Gvar.var_25[1];
    Gvar.var_26 = Gvar.var_26[1];
    await Func.func0050();
    await Func.func0358();
    Gvar.var_3459 = 1;
    for (let cnt1 = 0; cnt1 < Gvar.var_79 + 60; ++cnt1) {
        await Func.func0354();
        Gvar.var_3460 = Adap.rnd(2);
        if (Gvar.var_3460 == 0) {
            Gvar.var_3461 = Adap.rnd(100);
            Gvar.var_3461 = Gvar.var_3461 + 150;
            for (let cnt2 = 0; cnt2 < Gvar.var_3461; ++cnt2) {
                Gvar.var_3462 = Adap.rnd(680);
                Gvar.var_3462 = Gvar.var_3462 - 10;
                Gvar.var_3463 = Adap.rnd(680);
                Gvar.var_3464 = Adap.rnd(30);
                Gvar.var_3464 = Gvar.var_3464 + 5;
                Adap.color(150, 150, 150);
                Adap.line(Gvar.var_3462, Gvar.var_3463, Gvar.var_3462 + Gvar.var_3464, Gvar.var_3463);
                Adap.line(Gvar.var_3462, Gvar.var_3463 + 1, Gvar.var_3462 + Gvar.var_3464, Gvar.var_3463 + 1);
                Adap.line(Gvar.var_3462, Gvar.var_3463 + 30, Gvar.var_3462 + Gvar.var_3464, Gvar.var_3463 + 30);
                Adap.color(0, 0, 0);
                Adap.line(Gvar.var_3462, Gvar.var_3463 + 2, Gvar.var_3462 + Gvar.var_3464, Gvar.var_3463 + 2);
            }
        }
        if (cnt1 > 10) {
            Gvar.var_1608 = Gvar.var_1608 - 1;
            if (Gvar.var_1608 < 0) {
                Gvar.var_1608 = 0;
            }
        }
        Gvar.var_1607 = Gvar.var_1607 + 1;
        Gvar.var_3459 = Gvar.var_3459 + 1;
        Gvar.var_223 = 1;
        Gvar.var_290 = 0;
    }
    Gvar.var_1607 = 0;
    Gvar.var_310 = 0;
    Gvar.var_387 = 311;
    Gvar.var_242 = 0;
    await Func.func0186(); return;
}

export { func0843 }
