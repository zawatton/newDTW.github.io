/**
 * func645 — func645 不明
 *
 * (org原典: newDTW_func6)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func645(this: any) {
        Adap.dbgprt(645);
        Gvar.var_1710 = 0;
        Gvar.var_1711 = Gvar.var_66;
        Gvar.var_1712 = Gvar.var_67;
        Gvar.var_1713 = Gvar.var_66 - 1;
        Gvar.var_1714 = Gvar.var_66 + 1;
        Gvar.var_1715 = Gvar.var_67 + 1;
        Gvar.var_1716 = Gvar.var_67 - 1;
        if (Gvar.var_1713 < 0) {
            Gvar.var_1713 = 0;
        }
        if (Gvar.var_1716 < 0) {
            Gvar.var_1716 = 0;
        }
        if (Gvar.var_1714 > Gvar.var_33) {
            Gvar.var_1714 = Gvar.var_33;
        }
        if (Gvar.var_1715 > Gvar.var_34) {
            Gvar.var_1715 = Gvar.var_34;
        }
        if (Gvar.var_71[Gvar.var_1711][Gvar.var_1712] == 13) {
            Gvar.var_1710 = Gvar.var_1710 + 1;
        }
        if (Gvar.var_71[Gvar.var_1713][Gvar.var_1712] == 13) {
            Gvar.var_1710 = Gvar.var_1710 + 1;
        }
        if (Gvar.var_71[Gvar.var_1714][Gvar.var_1712] == 13) {
            Gvar.var_1710 = Gvar.var_1710 + 1;
        }
        if (Gvar.var_71[Gvar.var_1711][Gvar.var_1715] == 13) {
            Gvar.var_1710 = Gvar.var_1710 + 1;
        }
        if (Gvar.var_71[Gvar.var_1711][Gvar.var_1716] == 13) {
            Gvar.var_1710 = Gvar.var_1710 + 1;
        }
        if (Gvar.var_71[Gvar.var_1713][Gvar.var_1715] == 13) {
            Gvar.var_1710 = Gvar.var_1710 + 1;
        }
        if (Gvar.var_71[Gvar.var_1714][Gvar.var_1715] == 13) {
            Gvar.var_1710 = Gvar.var_1710 + 1;
        }
        if (Gvar.var_71[Gvar.var_1713][Gvar.var_1716] == 13) {
            Gvar.var_1710 = Gvar.var_1710 + 1;
        }
        if (Gvar.var_71[Gvar.var_1714][Gvar.var_1716] == 13) {
            Gvar.var_1710 = Gvar.var_1710 + 1;
        }
        Gvar.var_1717 = Math.floor((Gvar.var_565 + 1) / 2);
        Gvar.var_209 = Gvar.var_1717 * Gvar.var_1710 + Gvar.var_209;
        return;
}

export {func645}
