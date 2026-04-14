/**
 * enemy017 — No = 17 シアハートアタックの特殊能力
 *
 * (org原典: newDTW_enemy / DONE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 17 シアハートアタックの特殊能力
async function enemy017(this: any) {
        if (Gvar.var_83[Gvar.var_673].Var3 == 2) {
            await Func.setMessage("「コッチヲ見ロォ～」",
                                   "", 8, false, false, true);
            Gvar.var_2197 = 1;
            return;
        }
        if (Gvar.var_83[Gvar.var_673].Var3 == 1) {
            Gvar.var_2890 = Gvar.var_673;
            await Func.func698();
            Gvar.var_2197 = 1;
            return;
        }
}

export {enemy017}
