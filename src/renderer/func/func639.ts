/**
 * func639 — func639 敵の回避処理
 *
 * (org原典: newDTW_func6)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func639(this: any) {
        Adap.dbgprt(639);
        Gvar.var_2867 = Adap.rnd(12);
        Gvar.var_2938 = 0;
        if (Gvar.var_129 == 0) {
            if (Gvar.kougeki_disc_id  == 104 && Gvar.var_111 == 0) { // Gvar.var_111 命中率を上げるフラグがOFF
                if (Gvar.var_2867 == 1 || Gvar.var_2867 == 2 || Gvar.var_2867 == 3 || Gvar.var_2867 == 4 || Gvar.var_2867 == 5) {
                    Gvar.var_2867 = 0;
                }
            }
            if (Gvar.kougeki_disc_id  == 104 && Gvar.var_111 == 1) { // Gvar.var_111 命中率を上げるフラグがON
                if (Gvar.var_2867 == 1 || Gvar.var_2867 == 2 || Gvar.var_2867 == 3) {
                    Gvar.var_2867 = 0;
                }
            }
        }
        // 敵のヒラリ回避動作処理 Gvar.enemy_list == 72 ケンゾー、Gvar.enemy_list == 88 ドノヴァン、Gvar.enemy_list == 99 マンハッタントランスファー
        // Ver0.1401 Gvar.enemy_list == 3 タワー・オブ・グレー、Gvar.enemy_list == 139 リサリサ追加
        // Ver0.1402 タワーオブグレーのみ別枠へ移動 (ダンジョンごとにヒラリ回避をONOFF)
        if (Gvar.var_83[Gvar.var_314].Var0 == 72 || Gvar.var_83[Gvar.var_314].Var0 == 88 || Gvar.var_83[Gvar.var_314].Var0 == 99 || Gvar.var_83[Gvar.var_314].Var0 == 139) {
            if (Gvar.var_83[Gvar.var_314].Var20 == 0 && Gvar.equip_disc[366] == 0) {
                if (Gvar.var_2867 == 1 || Gvar.var_2867 == 2 || Gvar.var_2867 == 3 || Gvar.var_2867 == 4) { // Ver0.1401にて修正。敵がヒラリ回避をする確率3/12*100=25% → 確率4/12*100=33.33%
                    Gvar.var_2867 = 0; // 発動後の発動確率初期化処理
                    Gvar.var_2938 = 1; // ヒラリ回避発動フラグON
                }
            }
        }
        // Ver0.1402にて追加。タワー・オブ・グレーのヒラリ回避。
        if (Gvar.var_83[Gvar.var_314].Var0 == 3) {
            if (Gvar.var_83[Gvar.var_314].Var20 == 0 && Gvar.equip_disc[366] == 0) {
                if (Gvar.var_2867 == 1 || Gvar.var_2867 == 2 || Gvar.var_2867 == 3 || Gvar.var_2867 == 4) { // Ver0.1401にて修正。敵がヒラリ回避をする確率3/12*100=25% → 確率4/12*100=33.33%
                    Gvar.var_2867 = 0; // 発動後の発動確率初期化処理
                    Gvar.var_2938 = 1; // ヒラリ回避発動フラグON
                }
            }
        }/*
        // Ver0.1402 Gvar.enemy_list == 3 タワー・オブ・グレーのヒラリ回避。一巡後の世界で有効。
        if (Gvar.dungeon_number == 4 && Gvar.var_83[Gvar.var_314].Var0 == 3) {
            if (Gvar.var_83[Gvar.var_314].Var20 == 0 && Gvar.equip_disc[366] == 0) {
                if (Gvar.var_2867 == 1 || Gvar.var_2867 == 2 || Gvar.var_2867 == 3 || Gvar.var_2867 == 4) { // Ver0.1401にて修正。敵がヒラリ回避をする確率3/12*100=25% → 確率4/12*100=33.33%
                    Gvar.var_2867 = 0; // 発動後の発動確率初期化処理
                    Gvar.var_2938 = 1; // ヒラリ回避発動フラグON
                }
            }
        }
        */
        if (Gvar.kougeki_disc_id  != 104) {
             // Gvar.var_111 命中率を上げるフラグがON
            if (Gvar.var_111 == 1 || Gvar.var_83[Gvar.var_314].Var12 != 0 || Gvar.var_83[Gvar.var_314].Var13 != 0) {
                Gvar.var_2867 = 1;
                Gvar.var_2938 = 0;
            }
        }
        if (Gvar.equip_disc[105] == 1 && Gvar.var_1030 >= 2) {
            Gvar.var_2867 = 1;
            Gvar.var_2938 = 0;
        }
        if (Gvar.var_2927 == 1) {
            Gvar.var_2867 = 1;
            Gvar.var_2938 = 0;
        }
        return;
}

export {func639}
