/**
 * enemy094 — No = 94 ブルりんの特殊能力
 *
 * (org原典: newDTW_enemy / DONE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 94 ブルりんの特殊能力
async function enemy094(this: any) {
        if (Gvar.var_114 >= 1 || Gvar.var_128 != 0 || Gvar.var_219 != 0) {
            return;
        }
        Gvar.var_2893 = Adap.rnd(3);
        if (Gvar.dungeon_number == 99 && Gvar.var_83[Gvar.var_673].Var16 == 1) {
            Gvar.var_2893 = 1;
        }
        if (Gvar.var_2893 == 0) {
            return;
        }
        Adap.DSPLAY(136);
        Gvar.var_742 = 1;
        Gvar.var_83[Gvar.var_673].Var7 = 1;
        Gvar.var_463 = Gvar.var_83[Gvar.var_673].Var1;
        Gvar.var_464 = Gvar.var_83[Gvar.var_673].Var2;
        Gvar.var_114 = Gvar.var_673;
        await Func.setMessage("ブルりんにつかまった！", "", 8, false, false, false);
        await Func.AutoDraw(10);
        Gvar.var_83[Gvar.var_673].Var7 = 0;
        Gvar.var_461 = Gvar.var_66;
        Gvar.var_462 = Gvar.var_67;
        await Func.func619();
        Gvar.var_2197 = 1;
        return;
}

export {enemy094}
