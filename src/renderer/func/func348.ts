/**
 * func348 — func348 不明
 *
 * (org原典: newDTW_func3)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func348(this: any) {
        Adap.dbgprt(348);
        Adap.gmode(2, null, null, null);
        Adap.pos((Gvar.var_83[Gvar.var_314].Var1 - Gvar.var_66 + 4) * 40, (Gvar.var_83[Gvar.var_314].Var2 - Gvar.var_67 + 4) * 40 - 10);
        if (Gvar.var_1193 == 1) {
            Adap.gcopy(3, 1320, 200, 40, 40);
    
            Adap.DSPLAY(123);
        }
        if (Gvar.var_1193 == 2) {
            Adap.gcopy(3, 1360, 200, 40, 40);
        }
        if (Gvar.var_1193 == 3) {
            Adap.gcopy(3, 1400, 200, 40, 40);
        }
        if (Gvar.var_1193 == 4) {
            Adap.gcopy(3, 1440, 200, 40, 40);
        }
        if (Gvar.var_1193 == 5) {
            Adap.gcopy(3, 1480, 200, 40, 40);
        }
        Gvar.var_1193++;
        if (Gvar.var_1193 >= 6) {
            Gvar.var_1193 = 0;
        }
        return;
}

export {func348}
