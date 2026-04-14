/**
 * func436 — func436 不明
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func436(this: any) {
        Adap.dbgprt(436);
        Gvar.var_1960 = Adap.rnd(200);
        Gvar.var_1960 = Gvar.var_1960 + 100;
        Gvar.var_1961 = Adap.rnd(10);
        Gvar.var_1962 = Adap.rnd(10);
        Gvar.var_1963 = Adap.rnd(10);
        Gvar.var_1783 = Gvar.var_1961 * Gvar.current_floor + Gvar.var_1962 * 10 + Gvar.var_1963 + Gvar.var_1960;
        if (Gvar.var_1783 >= 1000) {
            Gvar.var_1964 = Adap.rnd(100);
            Gvar.var_1783 = 1000 - Gvar.var_1964;
        }
        if (Gvar.sympathy_id == 119 || Gvar.sympathy_id == 123) {
            Gvar.var_1783 = Math.floor(Gvar.var_1783 * 3 / 2);
        }
        if (Gvar.equip_disc[356] == 1) {
            Gvar.var_1783 = Math.floor(Gvar.var_1783 / 2);
        }
        return;
}

export {func436}
