/**
 * func667 — func667 不明
 *
 * (org原典: newDTW_func6)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func667(this: any) {
        Adap.dbgprt(667);
        await Func.AutoDraw(2);
        Gvar.var_1195 = 0;
        Gvar.var_1914 = Gvar.var_1894;
        Gvar.var_1915 = Gvar.var_1895;
        Gvar.var_1845 = 3;
        Gvar.var_2109 = 1;
        await Func.func556();
        Gvar.var_1845 = 0;
        Gvar.var_2109 = 0;
        Gvar.var_748 = Gvar.var_1914 - Gvar.var_66 + 4;
        Gvar.var_749 = Gvar.var_1915 - Gvar.var_67 + 4;
        if (Gvar.var_2110 == 1) {
            Gvar.var_439 = Gvar.var_673;
            Gvar.var_83[Gvar.var_439].Var11 = 1;
            Gvar.var_83[Gvar.var_439].Var5 = 2;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_444 = 1;
            for (let cnt2 = 0; cnt2 < 25; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_444 = Gvar.var_444 + 1;
            }
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_444 = 0;
            Gvar.var_83[Gvar.var_439].Var11 = 0;
        }
        await Func.AutoDraw(10);
        return;
}

export {func667}
