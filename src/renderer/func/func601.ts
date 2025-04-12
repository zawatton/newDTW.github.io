import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func601(this: any) {
        Adap.dbgprt(601);
        Gvar.enemy_list = Gvar.var_83[Gvar.var_673].Var0;
        await Func.func626(); // 敵リスト
        if (Gvar.var_83[Gvar.var_673].Var39 >= 2) {
            Gvar.enemy_power = Math.floor(Gvar.enemy_power * (Gvar.var_83[Gvar.var_673].Var39 * 2 + 10) / 10);
        }
        if (Gvar.var_83[Gvar.var_673].Var25 >= 1 && Gvar.var_83[Gvar.var_673].Var25 <= 50) {
            Gvar.enemy_power = Gvar.enemy_power + Gvar.var_83[Gvar.var_673].Var25;
        }
        if (Gvar.var_83[Gvar.var_673].Var25 >= 51 && Gvar.var_83[Gvar.var_673].Var25 < 99) {
            Gvar.enemy_power = Gvar.enemy_power - (Gvar.var_83[Gvar.var_673].Var25 - 50);
            if (Gvar.enemy_power <= 1) {
                Gvar.enemy_power = 1;
            }
        }
        Gvar.var_949 = Math.floor(Gvar.enemy_power * (Gvar.enemy_power + Gvar.enemy_power - 8) / 16) + Gvar.enemy_power;
        for (let cnt1 = 0; cnt1 < Gvar.var_581; ++cnt1) {
            Gvar.var_949 = Math.floor(Gvar.var_949 * 15 / 16);
        }
        Gvar.var_2817 = Adap.rnd(33);
        Gvar.var_2817 = Gvar.var_2817 + 111;
        Gvar.var_209 = Math.floor(Gvar.var_949 * Gvar.var_2817 / 128);
        if (Gvar.var_128 >= 1) {
            Gvar.var_209 = Math.floor(Gvar.var_209 * 3 / 2);
        }
        if (Gvar.var_113 == 1) {
            Gvar.var_209 = Math.floor(Gvar.var_209 * 2 / 3);
        }
        if (Gvar.var_209 <= 1) {
            Gvar.var_209 = 1;
        }
        return;
}

export {func601}
