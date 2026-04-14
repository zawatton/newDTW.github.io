/**
 * func578 — func578 不明
 *
 * (org原典: newDTW_func5)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func578(this: any) {
        Adap.dbgprt(578);
        Gvar.enemy_list = Gvar.var_83[Gvar.var_2646].Var0;
        await Func.func626(); // 敵リスト
        Gvar.var_2792 = Gvar.enemy_hp;
        if (Gvar.var_83[Gvar.var_2646].Var39 >= 2) {
            Gvar.var_2792 = Math.floor(Gvar.enemy_hp * (Gvar.var_83[Gvar.var_2646].Var39 + 10) / 10);
            if (Gvar.var_2792 >= 999) {
                Gvar.var_2792 = 999;
            }
        }
        Gvar.var_2647 = 0;
        if (Gvar.var_2792 > Gvar.var_83[Gvar.var_2646].Var3) {
            Gvar.var_2647 = Gvar.var_2792 - Gvar.var_83[Gvar.var_2646].Var3;
        }
        return;
}

export {func578}
