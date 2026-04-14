/**
 * func413 — func413 不明
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func413(this: any) {
        Adap.dbgprt(413);
        if (Gvar.var_199 == 2) {
            Adap.pos(90, 140);
        }
        if (Gvar.var_199 == 8) {
            Adap.pos(190, 80);
        }
        if (Gvar.var_199 == 4) {
            Adap.pos(90, 80);
        }
        if (Gvar.var_199 == 6) {
            Adap.pos(170, 80);
        }
        if (Gvar.var_199 == 1) {
            Adap.pos(90, 80);
        }
        if (Gvar.var_199 == 3) {
            Adap.pos(170, 80);
        }
        if (Gvar.var_199 == 7) {
            Adap.pos(140, 80);
        }
        if (Gvar.var_199 == 9) {
            Adap.pos(140, 80);
        }
        Adap.gmode(2, null, null, null);
        if (Gvar.var_1190 == 6) {
            Adap.color(0, 0, 0);
    
            Adap.gmode(4, null, null, 200);
        }
        if (Gvar.var_1190 == 7) {
            Adap.color(0, 0, 0);
    
            Adap.gmode(4, null, null, 150);
        }
        if (Gvar.var_1190 == 8) {
            Adap.color(0, 0, 0);

            Adap.gmode(4, null, null, 100);
        }
        if (Gvar.var_1190 == 9) {
            Adap.color(0, 0, 0);
            Adap.gmode(4, null, null, 50);
        }
        Adap.gcopy(17, 0, 1000, 80, 80);
        return;
}

export {func413}
