/**
 * func338 — func338 不明
 *
 * (org原典: newDTW_func3)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func338(this: any) {
        Adap.dbgprt(338);
        if (Gvar.var_637 < 2) {
            Adap.gsel(26);
            Adap.gmode(0, 680, 680, null);
            Adap.pos(340, 340);
            Adap.grotate(0, 0, 0, 0, 340, 340);
            Adap.gsel(0);
            Adap.gmode(0, null, null, null);
            Adap.pos(0, 0);
            Adap.gcopy(26, 0, 0, 340, 340);
            Adap.gmode(0, null, null, null);
            return;
        }
        if (Gvar.var_637 >= 2) {
            Adap.gsel(26);
            Adap.gmode(0, 680, 680, null);
            Adap.pos(Math.floor(Gvar.var_643 / 2), Math.floor(Gvar.var_644 / 2));
            Adap.grotate(0, 0, 0, 0, Gvar.var_643, Gvar.var_644);
            Adap.gsel(0);
            Adap.gmode(0, null, null, null);
            Adap.pos(0, 0);
            Adap.gcopy(26, 0, 0, Gvar.var_643, Gvar.var_644);
            Adap.gmode(0, null, null, null);
            return;
        }
        return;
}

export {func338}
