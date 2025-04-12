import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func729(this: any) {
        Adap.dbgprt(729);
        Gvar.enemy_list = Gvar.var_83[Gvar.var_3072].Var0;
        await Func.func626();
        Gvar.var_1331 = Gvar.enemy_hp;
        if (Gvar.var_83[Gvar.var_3072].Var39 >= 2) {
            Gvar.var_1331 = Math.floor(Gvar.enemy_hp * (Gvar.var_83[Gvar.var_3072].Var39 + 10) / 10);
            if (Gvar.var_1331 >= 999) {
                Gvar.var_1331 = 999;
            }
        }
        Gvar.var_1332 = Math.floor(Gvar.var_83[Gvar.var_3072].Var3 * 100 / Gvar.var_1331);
        return;
}

export {func729}
