/**
 * enemy9999 — No = 9999 没敵(ジョナサン,ジョセフ等の波紋使い?)の特殊能力
 *
 * (org原典: newDTW_enemy / DONE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 9999 没敵(ジョナサン,ジョセフ等の波紋使い?)の特殊能力
async function enemy9999(this: any) {
        Gvar.var_2830 = Adap.rnd(4);
        if (Gvar.var_2830 == 0 && Gvar.var_134 == 0) {
            Gvar.var_742 = 1;
            Gvar.var_83[Gvar.var_673].Var7 = 1;
            if (Gvar.nouryoku_disc_id != 116 && Gvar.var_125 == 0) {
                Gvar.var_134 = 1;
            }
            await Func.setMessage("オーバードライブ！", "", 8, false, false, false);
            await Func.AutoDraw(9);
            if (Gvar.nouryoku_disc_id == 116 || Gvar.var_125 >= 1) {
                await Func.setMessage("しかし波紋に強くなっていて平気だった", "", 8, true, false, false);
            }
            await Func.func619();
            Gvar.var_2197 = 1;
        }
        return;
}

export {enemy9999}
