/**
 * func424 — func424 不明
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func424(this: any) {
        Adap.dbgprt(424);
        Gvar.var_1886 = 0;
        Gvar.var_1954 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_224; ++cnt1) {
            if (Gvar.var_233[Gvar.var_1954].Var0 >= 600 && Gvar.var_233[Gvar.var_1954].Var0 < 650) {
                Gvar.var_1886 = Gvar.var_1954;
                break;
            }
            Gvar.var_1954++;
        }
        if (Gvar.var_1886 == 0) {
            return;
        }
        Gvar.var_455 = Gvar.var_66;
        Gvar.var_456 = Gvar.var_67;
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            if (Gvar.var_199 == 4) {
                Gvar.var_455 = Gvar.var_455 - 1;
            }
            if (Gvar.var_199 == 6) {
                Gvar.var_455 = Gvar.var_455 + 1;
            }
            if (Gvar.var_199 == 8) {
                Gvar.var_456 = Gvar.var_456 - 1;
            }
            if (Gvar.var_199 == 2) {
                Gvar.var_456 = Gvar.var_456 + 1;
            }
            if (Gvar.var_199 == 1) {
                Gvar.var_455 = Gvar.var_455 - 1;
                Gvar.var_456 = Gvar.var_456 + 1;
            }
            if (Gvar.var_199 == 3) {
                Gvar.var_455 = Gvar.var_455 + 1;
                Gvar.var_456 = Gvar.var_456 + 1;
            }
            if (Gvar.var_199 == 7) {
                Gvar.var_455 = Gvar.var_455 - 1;
                Gvar.var_456 = Gvar.var_456 - 1;
            }
            if (Gvar.var_199 == 9) {
                Gvar.var_455 = Gvar.var_455 + 1;
                Gvar.var_456 = Gvar.var_456 - 1;
            }
            if (Gvar.var_455 < 5 || Gvar.var_455 > Gvar.var_33 || Gvar.var_456 < 5 || Gvar.var_456 > Gvar.var_34) {
                Gvar.var_1886 = 0;
                break;
            }
            if (Gvar.var_71[Gvar.var_455][Gvar.var_456] == 0) {
                Gvar.var_1886 = 0;
                break;
            }
            if (Gvar.var_82[Gvar.var_455][Gvar.var_456] != 0) {
                Gvar.var_1955 = Gvar.var_82[Gvar.var_455][Gvar.var_456];
                if (Gvar.var_83[Gvar.var_1955].Var0 != 50) {
                    break;
                }
            }
        }
        return;
}

export {func424}
