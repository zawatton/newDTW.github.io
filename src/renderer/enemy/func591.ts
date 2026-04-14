/**
 * func591 — func591 記憶が戻ったウェザーの発動能力「鈍足のカタツムリの召喚」動作処理
 *
 * (org原典: newDTW_func5)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 記憶が戻ったウェザーの発動能力「鈍足のカタツムリの召喚」動作処理
async function func591(this: any) {
        Adap.dbgprt(591);
        if (Gvar.var_97 >= 100) {
            return;
        }
        Gvar.var_2838 = 0;
        Gvar.var_2519 = Gvar.var_83[Gvar.var_673].Var10;
        for (let cnt1 = 0; cnt1 < 4; ++cnt1) {
            Gvar.var_2540 = 1;
            Gvar.var_1845 = 5;
            Gvar.var_2353 = Gvar.var_673;
            await Func.func556();
            Gvar.var_2457 = Gvar.var_673;
            Gvar.var_673 = Gvar.var_2353;
            Gvar.var_2540 = 0;
            Gvar.var_1845 = 0;
            if (Gvar.var_2110 == 1) {
                Gvar.var_1584 = (Gvar.var_83[Gvar.var_2457].Var1 - Gvar.var_66 + 4) * 40;
                Gvar.var_1585 = (Gvar.var_83[Gvar.var_2457].Var2 - Gvar.var_67 + 4) * 40;
                Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
                Gvar.var_1583 = 1;
        
                Adap.DSPLAY(168);
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    Gvar.var_300 = 0;
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_1583++;
                }
                Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
                Gvar.var_1583 = 0;
                Gvar.var_2838 = 1;
            }
        }
        if (Gvar.var_2838 == 1) {
            Gvar.var_2197 = 1;
            await Func.setMessage("ウェザーは無意識にカタツムリを呼んだ", "", 8, false, false, false);
            await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                Gvar.var_300 = 0;
                await Func.func337(); // メッセージ表示処理(自動)
            }
        }
        return;
}

export {func591}
