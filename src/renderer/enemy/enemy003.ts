/**
 * enemy003 — No = 3 敵タワーオブグレーの特殊能力
 *
 * (org原典: newDTW_enemy / DONE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// Ver0.1402にて追加。No = 3 敵タワーオブグレーの特殊能力。瞬間移動。
async function enemy003(this: any) {
        if (Gvar.var_201 != 14 && Gvar.var_83[Gvar.var_314].Var10 == Gvar.var_201) { // 幻惑の迷宮(var_201 = 14)でないかつ部屋にいる時のみ発動
            Gvar.var_2672 = Gvar.var_83[Gvar.var_314].Var1;
            Gvar.var_2673 = Gvar.var_83[Gvar.var_314].Var2;
            Gvar.var_1349 = 0;
            for (let cnt4 = 0; cnt4 < 500; ++cnt4) {
                Gvar.var_2350 = Adap.rnd(Gvar.var_33);
                Gvar.var_2351 = Adap.rnd(Gvar.var_34);
                // Gvar.enemy_list = 118 クリームじゃなければ
                if (Gvar.var_71[Gvar.var_2350][Gvar.var_2351] == Gvar.var_201 && Gvar.var_65[Gvar.var_2350][Gvar.var_2351] == 0 && Gvar.var_82[Gvar.var_2350][Gvar.var_2351] == 0 && Gvar.var_71[Gvar.var_2350][Gvar.var_2351] != 13) {
                    if (Gvar.var_2350 > Gvar.var_2621 && Gvar.var_2350 < Gvar.var_2622 && Gvar.var_2351 > Gvar.var_2624 && Gvar.var_2351 < Gvar.var_2623) {
                        Gvar.var_1349 = 1;
                        break;
                    }
                }
            }
            if (Gvar.var_1349 == 0) {
                Gvar.var_2350 = Gvar.var_2672;
                Gvar.var_2351 = Gvar.var_2673;
            }
            if (Gvar.var_1349 == 1) {
                Gvar.var_83[Gvar.var_314].Var35 = Gvar.var_2672;
                Gvar.var_83[Gvar.var_314].Var36 = Gvar.var_2673;
                Gvar.var_83[Gvar.var_314].Var1 = Gvar.var_2350;
                Gvar.var_83[Gvar.var_314].Var2 = Gvar.var_2351;
                Gvar.var_82[Gvar.var_2350][Gvar.var_2351] = Gvar.var_82[Gvar.var_2672][Gvar.var_2673];
                Gvar.var_82[Gvar.var_2672][Gvar.var_2673] = 0;
                Gvar.var_83[Gvar.var_314].Var10 = Gvar.var_71[Gvar.var_2350][Gvar.var_2351];
                Gvar.var_83[Gvar.var_314].Var11 = 2;
                Gvar.var_83[Gvar.var_314].Var22 = 1;
                Gvar.var_83[Gvar.var_314].Var6 = 0;
                Gvar.var_83[Gvar.var_314].Var5 = 2;
            }
        }
        // 瞬間移動後の画像処理
        Gvar.var_83[Gvar.var_314].Var11 = 0;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1306 = 1;
        Gvar.var_1286 = (Gvar.var_83[Gvar.var_314].Var1 - Gvar.var_66 + 4) * 40;
        Gvar.var_1287 = (Gvar.var_83[Gvar.var_314].Var2 - Gvar.var_67 + 4) * 40 - 50;
        Adap.DSPLAY(190);
        for (let cnt4 = 0; cnt4 < 5; ++cnt4) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1306 = Gvar.var_1306 + 1;
        }
        Gvar.var_1306 = 0;
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF// ここまで (瞬間移動後の画像処理)
        await Func.func047(); // メッセージ履歴追加処理
        await Func.AutoDraw(10);
        Gvar.var_2197 = 1;
        return;
}

export {enemy003}
