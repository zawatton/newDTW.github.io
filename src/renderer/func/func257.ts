/**
 * func257 — func257 不明
 *
 * (org原典: newDTW_func2)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func257(this: any) {
        Adap.dbgprt(257);
        Gvar.var_1082 = Adap.rnd(4);
        Gvar.var_1082 = Gvar.var_1082 + 5;
        Gvar.var_1084 = Adap.rnd(4);
        Gvar.var_1084 = Gvar.var_1084 + 5;
        Gvar.var_1096 = Gvar.var_1082 - 2;
        Gvar.var_1098 = Gvar.var_1082 - 2;
        Gvar.var_1100 = Gvar.var_1084 - 2;
        Gvar.var_1102 = Gvar.var_1084 - 2;
        Gvar.var_983 = "";
        Gvar.var_1138 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_1084; ++cnt1) {
            Gvar.var_1139 = 1;
            for (let cnt2 = 0; cnt2 < Gvar.var_1082; ++cnt2) {
                if (Gvar.var_1138 == 1 || Gvar.var_1138 == Gvar.var_1084) {
                    if (Gvar.var_1139 == 1 || Gvar.var_1139 == Gvar.var_1082) {
                        Gvar.var_983 = Gvar.var_983 + "#";
                    }
                }
                if (Gvar.var_1138 != 1 && Gvar.var_1138 != Gvar.var_1084) {
                    if (Gvar.var_1139 != 1 && Gvar.var_1139 != Gvar.var_1082) {
                        Gvar.var_983 = Gvar.var_983 + ".";
                    }
                }
                if (Gvar.var_1138 == 1 && Gvar.var_1139 != 1 && Gvar.var_1139 != Gvar.var_1082) {
                    Gvar.var_983 = Gvar.var_983 + "8";
                }
                if (Gvar.var_1138 == Gvar.var_1084 && Gvar.var_1139 != 1 && Gvar.var_1139 != Gvar.var_1082) {
                    Gvar.var_983 = Gvar.var_983 + "2";
                }
                if (Gvar.var_1139 == 1 && Gvar.var_1138 != 1 && Gvar.var_1138 != Gvar.var_1084) {
                    Gvar.var_983 = Gvar.var_983 + "4";
                }
                if (Gvar.var_1139 == Gvar.var_1082 && Gvar.var_1138 != 1 && Gvar.var_1138 != Gvar.var_1084) {
                    Gvar.var_983 = Gvar.var_983 + "6";
                }
                Gvar.var_1139 = Gvar.var_1139 + 1;
            }
            Gvar.var_1138 = Gvar.var_1138 + 1;
        }
        return;
}

export {func257}
