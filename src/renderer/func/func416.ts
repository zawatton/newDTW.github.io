/**
 * func416 — func416 不明
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func416(this: any) {
        Adap.dbgprt(416);
        Gvar.var_1900 = 1;
        Gvar.var_1921 = Adap.rnd(9);
        if (Gvar.var_1921 == 0) {
            Gvar.var_1900 = 0;
        }
        if (Gvar.var_340 >= 800 && Gvar.var_340 < 900) {
            Gvar.var_1900 = 1;
        }
        if (Gvar.var_111 == 1 || Gvar.var_138 == 1) { // Gvar.var_111 命中率を上げるフラグがONであれば
            Gvar.var_1900 = 1;
        }
        // 共鳴ID = 136 「はっはっは  狙え狙え」(投影命中率上昇)
        if (Gvar.sympathy_id == 136) {
            Gvar.var_1900 = 1;
        }
        if (Gvar.dungeon_number == 99) {
            Gvar.var_1900 = 1;
        }
        return;
}

export {func416}
