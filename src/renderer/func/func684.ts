/**
 * func684 — func684 不明
 *
 * (org原典: newDTW_func6)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func684(this: any) {
        Adap.dbgprt(684);
        if (Gvar.var_83[Gvar.var_673].Var0 == 36) {
            Gvar.var_83[Gvar.var_673].Var16 = Gvar.var_1025;
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 105) {
            Gvar.var_83[Gvar.var_673].Var16 = Gvar.var_1026;
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 106) {
            Gvar.var_83[Gvar.var_673].Var16 = Gvar.var_1027;
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 108) {
            Gvar.var_83[Gvar.var_673].Var16 = Gvar.var_1029;
        }
        if (Gvar.var_83[Gvar.var_673].Var39 <= 1 && Gvar.var_83[Gvar.var_673].Var16 >= 50) {
            Gvar.var_83[Gvar.var_673].Var39 = 2;
        }
        if (Gvar.var_83[Gvar.var_673].Var39 == 2 && Gvar.var_83[Gvar.var_673].Var16 >= 200) {
            Gvar.var_83[Gvar.var_673].Var39 = 3;
        }
        if (Gvar.var_83[Gvar.var_673].Var39 == 3 && Gvar.var_83[Gvar.var_673].Var16 >= 500) {
            Gvar.var_83[Gvar.var_673].Var39 = 4;
        }
        if (Gvar.var_83[Gvar.var_673].Var39 == 4 && Gvar.var_83[Gvar.var_673].Var16 >= 1000) {
            Gvar.var_83[Gvar.var_673].Var39 = 5;
        }
        if (Gvar.var_83[Gvar.var_673].Var39 == 5 && Gvar.var_83[Gvar.var_673].Var16 >= 2000) {
            Gvar.var_83[Gvar.var_673].Var39 = 6;
        }
        if (Gvar.var_83[Gvar.var_673].Var39 == 6 && Gvar.var_83[Gvar.var_673].Var16 >= 4000) {
            Gvar.var_83[Gvar.var_673].Var39 = 7;
        }
        if (Gvar.var_83[Gvar.var_673].Var39 == 7 && Gvar.var_83[Gvar.var_673].Var16 >= 10000) {
            Gvar.var_83[Gvar.var_673].Var39 = 8;
        }
        if (Gvar.var_83[Gvar.var_673].Var39 == 8 && Gvar.var_83[Gvar.var_673].Var16 >= 20000) {
            Gvar.var_83[Gvar.var_673].Var39 = 9;
        }
        if (Gvar.var_83[Gvar.var_673].Var39 == 9 && Gvar.var_83[Gvar.var_673].Var16 >= 40000) {
            Gvar.var_83[Gvar.var_673].Var39 = 10;
        }
        if (Gvar.var_83[Gvar.var_673].Var39 >= 2) {
            Gvar.enemy_list = Gvar.var_83[Gvar.var_673].Var0;
            await Func.func626(); // 敵リスト
            Gvar.var_83[Gvar.var_673].Var3 = Math.floor(Gvar.enemy_hp * (Gvar.var_83[Gvar.var_673].Var39 * 2 + 10) / 10);
        }
        return;
}

export {func684}
