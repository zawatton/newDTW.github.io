/**
 * func517 — func517 不明
 *
 * (org原典: newDTW_func5)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func517(this: any) {
        Adap.dbgprt(517);
        Gvar.var_2359 = Gvar.var_66;
        Gvar.var_2360 = Gvar.var_67;
        Gvar.var_2361 = Gvar.var_66 - 5;
        if (Gvar.var_2361 < 0) {
            Gvar.var_2361 = 0;
        }
        Gvar.var_2362 = Gvar.var_66 + 5;
        if (Gvar.var_2362 > Gvar.var_33) {
            Gvar.var_2362 = Gvar.var_33;
        }
        Gvar.var_2363 = Gvar.var_67 + 5;
        if (Gvar.var_2363 > Gvar.var_34) {
            Gvar.var_2363 = Gvar.var_34;
        }
        Gvar.var_2364 = Gvar.var_67 - 5;
        if (Gvar.var_2364 < 0) {
            Gvar.var_2364 = 0;
        }
        Gvar.var_1396 = Gvar.var_83[Gvar.var_2194].Var1;
        Gvar.var_1397 = Gvar.var_83[Gvar.var_2194].Var2;
        if (Gvar.var_1396 < Gvar.var_2361 || Gvar.var_1396 > Gvar.var_2362 || Gvar.var_1397 < Gvar.var_2364 || Gvar.var_1397 > Gvar.var_2363) {
            return;
        }
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1526 = 1;
        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1526++;
        }
        Gvar.var_1526 = 0;
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        return;
}

export {func517}
