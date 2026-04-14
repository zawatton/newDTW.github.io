/**
 * func558 — func558 不明
 *
 * (org原典: newDTW_func5)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func558(this: any) {
        Adap.dbgprt(558);
        Gvar.var_2561 = 1;
        if (Gvar.var_83[Gvar.var_673].Var31 == 5 || Gvar.var_83[Gvar.var_673].Var31 == 4) {
            Gvar.var_2561 = 0;
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 33 || Gvar.var_83[Gvar.var_673].Var0 == 34) {
            Gvar.var_2561 = 1;
        }
        if (Gvar.var_2561 == 1) {
            if (Gvar.enemy_power >= 0 && Gvar.enemy_power < 10) {
                Gvar.var_2562 = 50;
            }
            if (Gvar.enemy_power >= 10 && Gvar.enemy_power < 15) {
                Gvar.var_2562 = 40;
            }
            if (Gvar.enemy_power >= 15 && Gvar.enemy_power < 20) {
                Gvar.var_2562 = 30;
            }
            if (Gvar.enemy_power >= 20 && Gvar.enemy_power < 25) {
                Gvar.var_2562 = 20;
            }
            if (Gvar.enemy_power >= 25 && Gvar.enemy_power < 30) {
                Gvar.var_2562 = 10;
            }
            if (Gvar.enemy_power >= 30 && Gvar.enemy_power < 40) {
                Gvar.var_2562 = 7;
            }
            if (Gvar.enemy_power >= 40 && Gvar.enemy_power < 50) {
                Gvar.var_2562 = 5;
            }
            if (Gvar.enemy_power >= 50 && Gvar.enemy_power < 60) {
                Gvar.var_2562 = 3;
            }
            if (Gvar.enemy_power >= 60) {
                Gvar.var_2562 = 1;
            }
            if (Gvar.var_83[Gvar.var_673].Var0 == 161) {
                Gvar.var_2562 = 1;
            }
            if (Gvar.var_83[Gvar.var_673].Var0 == 153) {
                Gvar.var_2562 = 1;
            }
            if (Gvar.var_83[Gvar.var_673].Var0 == 124) {
                Gvar.var_2562 = 1;
            }
            if (Gvar.var_83[Gvar.var_673].Var0 == 127) {
                Gvar.var_2562 = 1;
            }
            Gvar.var_2563 = Gvar.current_floor - 10;
            Gvar.var_2564 = Adap.rnd(3);
            Gvar.var_2562 = Gvar.var_2562 + Gvar.var_2564;
            Gvar.var_83[Gvar.var_673].Var39 = Gvar.var_2563 + Gvar.var_2562;
            if (Gvar.var_83[Gvar.var_673].Var39 >= 999) {
                Gvar.var_83[Gvar.var_673].Var39 = 999;
            }
            Gvar.var_83[Gvar.var_673].Var3 = Math.floor(Gvar.enemy_hp * (Gvar.var_83[Gvar.var_673].Var39 + 10) / 10);
            if (Gvar.var_83[Gvar.var_673].Var3 >= 999) {
                Gvar.var_83[Gvar.var_673].Var3 = 999;
            }
        }
        return;
}

export {func558}
