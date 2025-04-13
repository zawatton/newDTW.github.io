import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func580(this: any) {
        Adap.dbgprt(580);
        Gvar.var_2797 = Adap.rnd(5);
        if (Gvar.dungeon_number == 99) {
            Gvar.var_2797 = 1;
        }
        if (Gvar.var_2797 == 0) {
            if (Gvar.var_83[Gvar.var_673].Var0 == 91) {
                Gvar.var_2798 = 2;
            }
            if (Gvar.var_83[Gvar.var_673].Var0 == 92) {
                Gvar.var_2798 = 3;
            }
            if (Gvar.var_2798 == 2) {
                Gvar.var_83[Gvar.var_673].Var0 = 76;
                Gvar.var_83[Gvar.var_673].Var3 = 25;
                Gvar.var_83[Gvar.var_673].Var4 = 3;
            }
            if (Gvar.var_2798 == 3) {
                Gvar.var_83[Gvar.var_673].Var0 = 12;
                Gvar.var_83[Gvar.var_673].Var3 = 45;
                Gvar.var_83[Gvar.var_673].Var4 = 3;
            }
            if (Gvar.var_2798 == 2) {
                await Func.setMessage("", "ｴｺｰｽﾞはACT2に成長した！", 8, false, false, false);
            }
            if (Gvar.var_2798 == 3) {
                await Func.setMessage("", "ｴｺｰｽﾞはACT3に成長した！", 8, false, false, false);
            }
        }
        return;
}

export {func580}
