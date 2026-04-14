/**
 * func696 — func696 ダメージを反射する際の動作処理
 *
 * (org原典: newDTW_func6)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func696(this: any) {
        Adap.dbgprt(696);
        if (Gvar.var_211 == 0) {
            return;
        }
        Gvar.var_3098 = 1;
        Gvar.var_402 = Gvar.var_673;
        if (Gvar.var_83[Gvar.var_402].Var0 <= 0) {
            return;
        }
        Gvar.var_403 = "ダメージを反射した！";
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func705();
        await Func.func340(); // キー入力による選択処理
        await Func.func051(); // キー入力待ち処理
        return;
}

export {func696}
