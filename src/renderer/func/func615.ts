/**
 * func615 — func615 不明
 *
 * (org原典: newDTW_func6)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func615(this: any) {
        Adap.dbgprt(615);
        Gvar.var_83[Gvar.var_673].Var30 = 0;
        Gvar.var_83[Gvar.var_673].Var21 = 1;
        Gvar.var_411 = 1;
        await Func.AutoDraw(3);
        Gvar.var_411 = 2;
        await Func.AutoDraw(2);
        Gvar.var_411 = 3;
        await Func.AutoDraw(2);
        Gvar.var_411 = 4;
        await Func.AutoDraw(2);
        Gvar.var_411 = 5;
        await Func.AutoDraw(4);
        Gvar.var_411 = 4;
        await Func.AutoDraw(4);
        Gvar.var_411 = 5;
        await Func.AutoDraw(4);
        Gvar.var_411 = 4;
        await Func.AutoDraw(4);
        Gvar.var_411 = 5;
        await Func.AutoDraw(2);
        Gvar.var_411 = 3;
        await Func.AutoDraw(2);
        Gvar.var_411 = 2;
        await Func.AutoDraw(2);
        Gvar.var_411 = 1;
        await Func.AutoDraw(3);
        Gvar.var_2705 = Gvar.var_83[Gvar.var_673].Var1;
        Gvar.var_2706 = Gvar.var_83[Gvar.var_673].Var2;
        if (Gvar.var_66 < Gvar.var_2705 && Gvar.var_67 > Gvar.var_2706) {
            Gvar.var_83[Gvar.var_673].Var5 = 1;
        }
        if (Gvar.var_66 > Gvar.var_2705 && Gvar.var_67 > Gvar.var_2706) {
            Gvar.var_83[Gvar.var_673].Var5 = 3;
        }
        if (Gvar.var_66 < Gvar.var_2705 && Gvar.var_67 < Gvar.var_2706) {
            Gvar.var_83[Gvar.var_673].Var5 = 7;
        }
        if (Gvar.var_66 > Gvar.var_2705 && Gvar.var_67 < Gvar.var_2706) {
            Gvar.var_83[Gvar.var_673].Var5 = 9;
        }
        if (Gvar.var_66 == Gvar.var_2705 && Gvar.var_67 > Gvar.var_2706) {
            Gvar.var_83[Gvar.var_673].Var5 = 2;
        }
        if (Gvar.var_66 == Gvar.var_2705 && Gvar.var_67 < Gvar.var_2706) {
            Gvar.var_83[Gvar.var_673].Var5 = 8;
        }
        if (Gvar.var_67 == Gvar.var_2706 && Gvar.var_66 < Gvar.var_2705) {
            Gvar.var_83[Gvar.var_673].Var5 = 4;
        }
        if (Gvar.var_67 == Gvar.var_2706 && Gvar.var_66 > Gvar.var_2705) {
            Gvar.var_83[Gvar.var_673].Var5 = 6;
        }
        Gvar.var_411 = 0;
        Gvar.var_83[Gvar.var_673].Var21 = 0;
        Gvar.var_83[Gvar.var_673].Var30 = 1;
        await Func.AutoDraw(10);
        return;
}

export {func615}
