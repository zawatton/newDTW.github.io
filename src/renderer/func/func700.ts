/**
 * func700 — func700 不明
 *
 * (org原典: newDTW_func7)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func700(this: any) {
        Adap.dbgprt(700);
        Gvar.var_402 = Gvar.var_2194;
        if (Gvar.var_83[Gvar.var_2194].Var0 == 132 || Gvar.var_83[Gvar.var_2194].Var0 == 143) {
            Gvar.var_209 = 10;
            Gvar.var_2195 = 0;
            Gvar.var_2196 = 0;
            await Func.func705();
            Gvar.var_2196 = 2;
            Gvar.var_2195 = 1;
            return;
        }
        if (Gvar.var_3083 == 0) {
            if (Gvar.var_83[Gvar.var_2194].Var0 == 33 || Gvar.var_83[Gvar.var_2194].Var0 == 34 || Gvar.var_83[Gvar.var_2194].Var0 == 32 || Gvar.var_83[Gvar.var_2194].Var0 == 21 || Gvar.var_83[Gvar.var_2194].Var0 == 137) {
                Gvar.var_209 = 10;
                Gvar.var_2195 = 0;
                Gvar.var_2196 = 0;
                await Func.func705();
                Gvar.var_2196 = 2;
                Gvar.var_2195 = 1;
                return;
            }
            if (Gvar.var_83[Gvar.var_2194].Var0 == 17) {
                Gvar.var_83[Gvar.var_2194].Var3 = 5;
                Gvar.var_83[Gvar.var_2194].Var8 = 1;
                await Func.AutoDraw(5);
                Gvar.var_83[Gvar.var_2194].Var8 = 0;
                Gvar.var_83[Gvar.var_2194].Var29 = 1;
                return;
            }
        }
        Gvar.var_209 = 999;
        Gvar.var_2217 = 1;
        await Func.func705();
        Gvar.var_2217 = 0;
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        return;
}

export {func700}
