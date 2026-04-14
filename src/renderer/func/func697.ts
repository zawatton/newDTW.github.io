/**
 * func697 — func697 不明
 *
 * (org原典: newDTW_func6)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func697(this: any) {
        Adap.dbgprt(697);
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1440 = 1;
        if (Gvar.var_1441 == 1) {
            if (Gvar.var_83[Gvar.var_2194].Var1 > Gvar.var_66) {
                Gvar.var_1442 = 0;
            }
            if (Gvar.var_83[Gvar.var_2194].Var1 <= Gvar.var_66) {
                Gvar.var_1442 = 1;
            }
            if (Gvar.var_1442 == 0) {
                Gvar.var_1427 = (Gvar.var_83[Gvar.var_2194].Var1 - Gvar.var_66 + 4) * 40 - 160;
                Gvar.var_1428 = (Gvar.var_83[Gvar.var_2194].Var2 - Gvar.var_67 + 4) * 40 - 160 - 20;
            }
            if (Gvar.var_1442 == 1) {
                Gvar.var_1427 = (Gvar.var_83[Gvar.var_2194].Var1 - Gvar.var_66 + 4) * 40 + 160 - 40;
                Gvar.var_1428 = (Gvar.var_83[Gvar.var_2194].Var2 - Gvar.var_67 + 4) * 40 - 160 - 20;
            }
        }
        if (Gvar.var_1441 == 0) {
            Gvar.var_1442 = Adap.rnd(2);
            if (Gvar.var_1442 == 0) {
                Gvar.var_1427 = 0;
                Gvar.var_1428 = 0;
            }
            if (Gvar.var_1442 == 1) {
                Gvar.var_1427 = 320 - 40;
                Gvar.var_1428 = 0;
            }
        }
        for (let cnt1 = 0; cnt1 < 7; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            if (Gvar.var_1442 == 0) {
                Gvar.var_1427 = Gvar.var_1427 + 20;
                Gvar.var_1428 = Gvar.var_1428 + 20;
            }
            if (Gvar.var_1442 == 1) {
                Gvar.var_1427 = Gvar.var_1427 - 20;
                Gvar.var_1428 = Gvar.var_1428 + 20;
            }
            Gvar.var_1440 = Gvar.var_1440 + 1;
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1440 = 0;
        return;
}

export {func697}
