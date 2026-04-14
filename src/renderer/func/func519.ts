/**
 * func519 — func519 不明
 *
 * (org原典: newDTW_func5)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func519(this: any) {
        Adap.dbgprt(519);
        if (Gvar.var_83[Gvar.var_2194].Var31 == 5) {
            return;
        }
        if (Gvar.var_83[Gvar.var_2194].Var25 <= 50) {
            Gvar.var_83[Gvar.var_2194].Var25 = 50;
        }
        Gvar.var_83[Gvar.var_2194].Var25 = Gvar.var_83[Gvar.var_2194].Var25 + 5;
        if (Gvar.var_83[Gvar.var_2194].Var25 >= 99) {
            Gvar.var_83[Gvar.var_2194].Var25 = 99;
        }
        if (Gvar.var_83[Gvar.var_2194].Var0 == 119) {
            Gvar.var_83[Gvar.var_2194].Var0 = 147;
            Gvar.var_83[Gvar.var_2194].Var14 = 1;
            if (Gvar.var_114 == Gvar.var_2194) {
                Gvar.var_114 = 0;
            }
            Gvar.enemy_list = 147;
            await Func.func626(); // 敵リスト
            Gvar.var_83[Gvar.var_2194].Var3 = Gvar.enemy_hp;
            Gvar.var_2264 = 1;
        }
        if (Gvar.var_83[Gvar.var_2194].Var0 == 135) {
            Gvar.var_83[Gvar.var_2194].Var0 = 119;
            Gvar.enemy_list = 119;
            await Func.func626(); // 敵リスト
            Gvar.var_83[Gvar.var_2194].Var3 = Gvar.enemy_hp;
            Gvar.var_2264 = 1;
        }
        return;
}

export {func519}
