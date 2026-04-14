/**
 * func073 — func073 不明 配列格納
 *
 * (org原典: newDTW_func0)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func073(this: any) {
        Adap.dbgprt(73);
        Gvar.var_587 = Adap.dim(110, 6, Gvar.length3 = null, null);
        for (let cnt1 = 0; cnt1 < 100; ++cnt1) {
            if (Gvar.var_112 == 700) {
                Gvar.var_588 = Adap.rnd(1);
            }
            if (Gvar.var_112 == 850) {
                Gvar.var_588 = Adap.rnd(2);
            }
            if (Gvar.var_112 == 1000) {
                Gvar.var_588 = Adap.rnd(3);
            }
            Gvar.var_589 = Adap.rnd(1000);
            Gvar.var_590 = Adap.rnd(400);
            Gvar.var_591 = Adap.rnd(4);
            Gvar.var_592 = Adap.rnd(30);
            Gvar.var_593 = Adap.rnd(10);
            Gvar.var_587[cnt1][0] = Gvar.var_588;
            Gvar.var_587[cnt1][1] = 360 + Gvar.var_589;
            Gvar.var_587[cnt1][2] = 100 - Gvar.var_590;
            Gvar.var_587[cnt1][3] = Gvar.var_591;
            Gvar.var_587[cnt1][4] = Gvar.var_592 + 20;
            Gvar.var_587[cnt1][5] = Gvar.var_593 + 5;
        }
        return;
}

export {func073}
