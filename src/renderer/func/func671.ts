/**
 * func671 — func671 不明
 *
 * (org原典: newDTW_func6)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func671(this: any) {
        Adap.dbgprt(671);
        if (Gvar.var_340 == 123) {
            if (Gvar.var_1217 == 0 || Gvar.var_1217 == 2 || Gvar.var_1217 == 4 || Gvar.var_1217 == 6 || Gvar.var_1217 == 8) {
                Adap.pos(Gvar.var_748 * Gvar.var_35 + 5, Gvar.var_749 * Gvar.var_36 - 10);
            }
            if (Gvar.var_1217 == 1 || Gvar.var_1217 == 3 || Gvar.var_1217 == 5 || Gvar.var_1217 == 7 || Gvar.var_1217 == 9) {
                Adap.pos(Gvar.var_748 * Gvar.var_35, Gvar.var_749 * Gvar.var_36 - 10);
            }
            if (Gvar.var_1217 >= 0 && Gvar.var_1217 < 7) {
                Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
            }
            if (Gvar.var_1217 == 7) {
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 180);
            }
            if (Gvar.var_1217 == 8) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
            }
            if (Gvar.var_1217 == 9) {
                Adap.color(0, 0, 0);
                Adap.gmode(4, null, null, 50);
            }
            Adap.gcopy(11, 960, 240, 40, 40);
        }
        return;
}

export {func671}
