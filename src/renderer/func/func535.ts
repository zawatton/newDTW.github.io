/**
 * func535 — func535 不明
 *
 * (org原典: newDTW_func5)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func535(this: any) {
        Adap.dbgprt(535);
        Gvar.var_80 = Adap.dim(70, 70, Gvar.length3 = null, null);
        Gvar.var_81 = Adap.dim(300, 7, Gvar.length3 = null, null);
        if (Gvar.special_floor == 9) { // 幽霊部屋
            return;
        }
        if (Gvar.current_floor >= 1 && Gvar.current_floor <= 5) {
            Gvar.var_337 = 3;
        }
        if (Gvar.current_floor >= 6 && Gvar.current_floor <= 12) {
            Gvar.var_337 = 4;
        }
        if (Gvar.current_floor >= 13 && Gvar.current_floor <= 20) {
            Gvar.var_337 = 5;
        }
        if (Gvar.current_floor >= 20) {
            Gvar.var_337 = 6;
        }
        await Func.func536();
}

export {func535}
