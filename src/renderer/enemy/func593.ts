/**
 * func593 — func593 康一act2 の仲間召喚動作処理
 *
 * (org原典: newDTW_func5)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

async function func593(this: any) {
        Adap.dbgprt(593);
        Gvar.var_2352 = Adap.rnd(5);
        await Func.setMessage("康一「たいへんなんだ…", "    とにかくすぐ来てッ！」", 8, false, false, true);
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            Gvar.var_300 = 0;
            await Func.func337(); // メッセージ表示処理(自動)
        }
        if (Gvar.var_2352 == 0) {
            Gvar.var_2533 = 147;
        }
        if (Gvar.var_2352 == 1) {
            Gvar.var_2533 = 128;
        }
        if (Gvar.var_2352 == 2) {
            Gvar.var_2533 = 158;
        }
        if (Gvar.var_2352 == 3) {
            Gvar.var_2533 = 67;
        }
        if (Gvar.var_2352 == 4) {
            Gvar.var_2533 = 68;
        }
        Gvar.var_1845 = 1;
        Gvar.var_2353 = Gvar.var_673;
        await Func.func556();
        Gvar.var_2457 = Gvar.var_673;
        Gvar.var_673 = Gvar.var_2353;
        Gvar.var_2533 = 0;
        Gvar.var_1845 = 0;
        if (Gvar.var_2110 == 1) {
            Gvar.var_1584 = (Gvar.var_83[Gvar.var_2457].Var1 - Gvar.var_66 + 4) * 40;
            Gvar.var_1585 = (Gvar.var_83[Gvar.var_2457].Var2 - Gvar.var_67 + 4) * 40;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1583 = 1;
    
            Adap.DSPLAY(168);
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                Gvar.var_300 = 0;
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1583++;
            }
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_1583 = 0;
        }
        if (Gvar.var_2110 == 0) {
            await Func.setMessage("しかし仲間は来なかった…", "", 8, false, false, false);
            Gvar.var_2197 = 1;
            return;
        }
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            Gvar.var_300 = 0;
            await Func.func337(); // メッセージ表示処理(自動)
        }
        return;
}

export {func593}
