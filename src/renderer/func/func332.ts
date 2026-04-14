/**
 * func332 — func332  不明
 *
 * (org原典: newDTW_func3)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func332(this: any) {
        Adap.dbgprt(332);
        Adap.gsel(4);
        Adap.color(0, 0, 0);

        Adap.boxf(0, 0, 680, 680);
        Adap.gmode(2, null, null, null);
        Adap.pos(110, 90);
        Adap.gcopy(17, 0, 360, 160, 180);
        Adap.gsel(7);
        Adap.color(0, 0, 0);

        Adap.boxf(0, 0, 680, 300);
        Adap.gsel(0);
        if (Gvar.var_407 >= 1) {
            for (let cnt2 = 0; cnt2 < 81; ++cnt2) {
                Gvar.var_1170 = Gvar.var_1170 + "" + 0;
            }
        }
        return;
}

export {func332}
