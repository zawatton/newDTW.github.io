/**
 * func612 — func612 不明
 *
 * (org原典: newDTW_func6)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

async function func612(this: any) {
        Adap.dbgprt(612);
        if (Gvar.var_83[Gvar.var_673].Var12 >= 1 || Gvar.var_83[Gvar.var_673].Var13 == 1 || Gvar.var_83[Gvar.var_673].Var17 == 1 || Gvar.var_83[Gvar.var_673].Var23 == 1 || Gvar.var_178 != 0) {
            Gvar.var_83[Gvar.var_673].Var18 = 0;
            return;
        }
        Gvar.var_1393 = Gvar.var_673;
        Gvar.var_178 = 1;
        await Func.setMessage("ウワハハハハハハーッ！！", "", 8, false, false, true);
        Gvar.var_1399 = (Gvar.var_83[Gvar.var_1393].Var1 - Gvar.var_66 + 4) * 40;
        Gvar.var_1400 = (Gvar.var_83[Gvar.var_1393].Var2 - Gvar.var_67 + 4) * 40 - 10;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_83[Gvar.var_1393].Var21 = 1;
        Gvar.var_959 = 0;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            if (Gvar.var_959 == 0 || Gvar.var_959 == 4 || Gvar.var_959 == 8) {
                Gvar.var_1398 = 1;
            }
            if (Gvar.var_959 == 1 || Gvar.var_959 == 5 || Gvar.var_959 == 9) {
                Gvar.var_1401 = 1;
            }
            if (Gvar.var_959 == 2 || Gvar.var_959 == 6) {
                Gvar.var_1402 = 1;
            }
            if (Gvar.var_959 == 3 || Gvar.var_959 == 7) {
                Gvar.var_1403 = 1;
            }
            Gvar.var_411 = 1;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_411 = 2;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_411 = 3;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_959++;
        }
        Gvar.var_83[Gvar.var_1393].Var21 = 0;
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1398 = 0;
        Gvar.var_1401 = 0;
        Gvar.var_1402 = 0;
        Gvar.var_1403 = 0;
        await Func.setMessage("西戸の嘲笑は", "ﾃﾞｨｱﾎﾞﾛを恐怖で呪縛した！", 7, true, false, false);
        await Func.setMessage("ぼくをチェーンで殴る気だッ！", "", 7, false, false, false);
        Gvar.var_240 = 0;
        Gvar.var_83[Gvar.var_1393].Var6 = 1;
        Gvar.var_83[Gvar.var_1393].Var18 = 0;
        Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
        Gvar.var_2197 = 1;
        await Func.AutoDraw(10);
        return;
}

export {func612}
