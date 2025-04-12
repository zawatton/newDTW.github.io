import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func608(this: any) {
        Adap.dbgprt(608);
        if (Gvar.var_83[Gvar.var_673].Var12 >= 1 || Gvar.var_83[Gvar.var_673].Var13 == 1 || Gvar.var_83[Gvar.var_673].Var17 == 1 || Gvar.var_83[Gvar.var_673].Var23 == 1) {
            return;
        }
        Gvar.var_2751 = Adap.rnd(30); // 敵が特殊攻撃をしてくる確率
        // Gvar.var_2751 敵が特殊攻撃をしてくる確率
        if (Gvar.var_2751 == 1) {
            Gvar.var_747 = 1;
            Gvar.var_389 = 2;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1490 = 1;
            Gvar.var_209 = Gvar.var_1022;
    
            Adap.DSPLAY(176);
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1490++;
            }
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_1490 = 0;
            Gvar.var_389 = 0;
            Gvar.var_2852 = Gvar.var_1022;
            await Func.setMessage1("太陽から発射されたレーザーで", "" + Gvar.var_2852 + "のダメージをうけた！", 8, false, false, false);
            if (Gvar.var_128 >= 1) {
                await Func.func023();
            }
            for (let cnt2 = 0; cnt2 < 8; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
            }
            Gvar.var_211 = Gvar.var_211 - Gvar.var_2852;
            Gvar.var_208 = Gvar.var_208 + Gvar.var_2852;
            if (Gvar.var_211 <= 0) {
                Gvar.var_211 = 0;
                Gvar.var_356 = 207;
            }
            Gvar.var_240 = 0;
        }
        // Gvar.var_2751 敵が特殊攻撃をしてくる確率
        if (Gvar.var_2751 == 2) {
            Adap.gsel(19);
            Adap.color(255, 0, 0);
            Adap.boxf(0, 0, 680, 680);
            Adap.gsel(0);
            Gvar.var_1165 = 1;
            Gvar.var_2875 = Adap.rnd(2);
            Gvar.var_2875 = Gvar.var_2875 + 1;
            Gvar.var_1022 = Gvar.var_1022 + Gvar.var_2875;
            await Func.setMessage1("周りの気温が" + Gvar.var_2875 + "度 上がった！", "太陽のエネルギーがアップした！", 8, false, false, false);
            await Func.AutoDraw(10);
            Gvar.var_1165 = 0;
            Gvar.var_240 = 0;
        }
        return;
}

export {func608}
