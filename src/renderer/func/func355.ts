/**
 * func355 — func355 不明
 *
 * (org原典: newDTW_func3)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func355(this: any) {
        Adap.dbgprt(355);
        Adap.pos(160, 150);
        if (Gvar.var_1213 == 1) {
            if (Gvar.var_199 == 2) {
                Adap.pos(160, 170);
            }
            if (Gvar.var_199 == 8) {
                Adap.pos(160, 120);
            }
            if (Gvar.var_199 == 4) {
                Adap.pos(130, 150);
            }
            if (Gvar.var_199 == 6) {
                Adap.pos(190, 150);
            }
            if (Gvar.var_199 == 1) {
                Adap.pos(130, 170);
            }
            if (Gvar.var_199 == 3) {
                Adap.pos(190, 170);
            }
            if (Gvar.var_199 == 7) {
                Adap.pos(130, 120);
            }
            if (Gvar.var_199 == 9) {
                Adap.pos(190, 120);
            }
            Adap.color(0, 0, 0);
    
            Adap.gmode(4, null, null, 150);
            if (Gvar.var_1189 == 1 || Gvar.var_1189 == 2) {
                Adap.gcopy(3, 760, 280, 40, 40);
            }
            if (Gvar.var_1189 == 3 || Gvar.var_1189 == 4) {
                Adap.gcopy(3, 800, 280, 40, 40);
            }
            if (Gvar.var_1189 == 5 || Gvar.var_1189 == 6) {
                Adap.gcopy(3, 840, 280, 40, 40);
            }
        }
        return;
}

export {func355}
