/**
 * func387 — func387 不明
 *
 * (org原典: newDTW_func3)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func387(this: any) {
        Adap.dbgprt(387);
        Gvar.var_1784 = Adap.rnd(100);
        if (Gvar.var_1784 >= 0 && Gvar.var_1784 < 65) {
            Gvar.var_78[Gvar.var_866].Var4 = 0;
        }
        if (Gvar.var_1784 >= 65 && Gvar.var_1784 < 90) {
            Gvar.var_78[Gvar.var_866].Var4 = 1;
        }
        if (Gvar.var_1784 >= 90 && Gvar.var_1784 < 97) {
            Gvar.var_78[Gvar.var_866].Var4 = 2;
        }
        if (Gvar.var_1784 >= 97 && Gvar.var_1784 < 100) {
            Gvar.var_78[Gvar.var_866].Var4 = 3;
        }
        if (Gvar.equip_disc[354] == 1 && Gvar.var_1784 >= 85) {
            Gvar.var_78[Gvar.var_866].Var4 = 0;
        }
        Gvar.var_1785 = Adap.rnd(100);
        if (Gvar.var_1734 == 1) {
            Gvar.var_1785 = 99;
        }
        if (Gvar.var_1785 < 7) {
            Gvar.var_78[Gvar.var_866].Var4 = 0;
            Gvar.var_78[Gvar.var_866].Var12 = 1;
        }
        if (Gvar.equip_disc[353] == 1 && Gvar.var_1785 < 20) {
            Gvar.var_78[Gvar.var_866].Var4 = 0;
            Gvar.var_78[Gvar.var_866].Var12 = 1;
        }
        if (Gvar.var_78[Gvar.var_866].Var0 == 310 || Gvar.var_78[Gvar.var_866].Var0 == 311 || Gvar.var_78[Gvar.var_866].Var0 == 122 || Gvar.var_78[Gvar.var_866].Var0 == 200 || Gvar.var_78[Gvar.var_866].Var0 == 302) {
            Gvar.var_78[Gvar.var_866].Var4 = 0;
            Gvar.var_78[Gvar.var_866].Var12 = 1;
        }
        return;
}

export {func387}
