/**
 * func617 — func617 不明
 *
 * (org原典: newDTW_func6)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func617(this: any) {
        Adap.dbgprt(617);
        Gvar.var_240 = 0;
        Gvar.var_83[Gvar.var_673].Var21 = 1;
        Gvar.var_411 = 1;
        await Func.AutoDraw(5);
        Gvar.var_411 = 2;
        await Func.AutoDraw(2);
        Gvar.var_411 = 3;
        await Func.AutoDraw(10);
        Gvar.var_411 = 2;
        await Func.AutoDraw(2);
        Gvar.var_411 = 1;
        await Func.AutoDraw(2);
        Gvar.var_411 = 0;
        Gvar.var_83[Gvar.var_673].Var21 = 0;
        Gvar.var_768 = 1;
        Gvar.var_2418 = 1;
        for (let cnt1 = 0; cnt1 < 4; ++cnt1) {
            for (let cnt2 = 0; cnt2 < 500; ++cnt2) {
                Gvar.var_1550 = Adap.rnd(Gvar.var_33);
                Gvar.var_230 = Adap.rnd(Gvar.var_34);
                if (Gvar.var_71[Gvar.var_1550][Gvar.var_230] == Gvar.var_201 && Gvar.var_77[Gvar.var_1550][Gvar.var_230] == 0 && Gvar.var_80[Gvar.var_1550][Gvar.var_230] == 0 && Gvar.var_73[Gvar.var_1550][Gvar.var_230] == 0 && Gvar.var_65[Gvar.var_1550][Gvar.var_230] == 0) {
                    await Func.func536();
                    break;
                }
            }
        }
        Gvar.var_768 = 0;
        Gvar.var_2418 = 0;
        await Func.setMessage("ケンゾーはドラゴンに手を入れた！", "周囲の危険が増えた気がする…", 8, false, false, false);
        await Func.AutoDraw(10);
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        return;
}

export {func617}
