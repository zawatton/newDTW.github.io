/**
 * func565 — func565 不明
 *
 * (org原典: newDTW_func5)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func565(this: any) {
        Adap.dbgprt(565);
        Gvar.var_1641 = Gvar.var_82[Gvar.var_447][Gvar.var_449];
        if (Gvar.time_paused_count >= 1 && Gvar.var_1199 == 1) {
            Gvar.var_1641 = Gvar.var_152;
        }
        Gvar.var_764 = Gvar.var_83[Gvar.var_1641].Var1 - Gvar.var_66 + 4;
        Gvar.var_763 = Gvar.var_83[Gvar.var_1641].Var2 - Gvar.var_67 + 4;
        Gvar.var_2575 = Gvar.var_83[Gvar.var_1641].Var1;
        Gvar.var_2576 = Gvar.var_83[Gvar.var_1641].Var2;
        if (Gvar.var_82[Gvar.var_2575][Gvar.var_2576] == 0) {
            return;
        }
        Gvar.enemy_list = Gvar.var_83[Gvar.var_1641].Var0;
        await Func.func626(); // 敵リスト
        Gvar.var_1640 = Gvar.var_83[Gvar.var_1641].Var5;
        if (Gvar.var_409 == 0) {
            Gvar.var_2577 = 0;
        }
        if (Gvar.var_409 == 1) {
            Gvar.var_2577 = 10;
        }
        if (Gvar.var_409 == 2) {
            Gvar.var_2577 = 20;
        }
        if (Gvar.var_409 == 3) {
            Gvar.var_2577 = 30;
        }
        if (Gvar.var_409 == 4) {
            Gvar.var_2577 = 40;
        }
        if (Gvar.var_83[Gvar.var_1641].Var15 == 3) {
            if (Gvar.var_409 == 2) {
                Gvar.var_764 = Gvar.var_83[Gvar.var_1641].Var35 - Gvar.var_66 + 4;
                Gvar.var_763 = Gvar.var_83[Gvar.var_1641].Var36 - Gvar.var_67 + 4;
                Gvar.var_1640 = Gvar.var_83[Gvar.var_1641].Var37;
                Gvar.var_2577 = 20;
            }
            if (Gvar.var_409 == 3) {
                Gvar.var_764 = Gvar.var_83[Gvar.var_1641].Var35 - Gvar.var_66 + 4;
                Gvar.var_763 = Gvar.var_83[Gvar.var_1641].Var36 - Gvar.var_67 + 4;
                Gvar.var_1640 = Gvar.var_83[Gvar.var_1641].Var37;
                Gvar.var_2577 = 30;
            }
        }
        await Func.func566();
}

export {func565}
