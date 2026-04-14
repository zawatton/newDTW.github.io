/**
 * func661 — func661 射撃discの攻撃力設定
 *
 * (org原典: newDTW_func6)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func661(this: any) {
        Adap.dbgprt(661);
        Gvar.var_3074 = Adap.rnd(3);
        Gvar.var_209 = Gvar.var_3074 + 1;
        Gvar.var_3075 = 0;
        if (Gvar.var_340 >= 400 && Gvar.var_340 < 420) {
            Gvar.var_3075 = 1;
        }
        if (Gvar.var_340 == 490) {
            Gvar.var_3075 = 1;
        }
        if (Gvar.var_340 == 698) {
            Gvar.var_3075 = 1;
        }
        if (Gvar.var_3075 == 1) {
            Gvar.var_3076 = 0;
            if (Gvar.var_340 == 400) {
                Gvar.var_3076 = 10;
            }
            if (Gvar.var_340 == 401) {
                Gvar.var_3076 = 2;
            }
            if (Gvar.var_340 == 402) {
                Gvar.var_3076 = 8;
            }
            if (Gvar.var_340 == 403) {
                Gvar.var_3076 = 6;
            }
            if (Gvar.var_340 == 407) {
                Gvar.var_3076 = 15;
            }
            if (Gvar.var_340 == 411) {
                Gvar.var_3076 = 5;
            }
            if (Gvar.var_340 == 414) { // No = 414 タスクact2
                Gvar.var_3076 = 12;
            }
            if (Gvar.var_340 == 415) { // Ver0.1401にて追加。No = 415 タスクact1
                Gvar.var_3076 = 7;
            }
            if (Gvar.var_340 == 416) { // Ver0.1401にて追加。No = 416 タスクact3
                Gvar.var_3076 = 16;
            }
            if (Gvar.var_340 == 417) { // Ver0.1401にて追加。No = 417 ラット
                Gvar.var_3076 = 4;
            }
            if (Gvar.var_340 == 418) { // Ver0.1401にて追加。No = 418 スカイ・ハイ
                Gvar.var_3076 = 0;
            }
            if (Gvar.var_340 == 419) { // Ver0.1401にて追加。No = 419 チューブラー・ベルズ
                Gvar.var_3076 = 2;
            }
            if (Gvar.var_340 == 490) {
                Gvar.var_3076 = 8;
            }
            if (Gvar.var_340 == 698) {
                Gvar.var_3076 = 2;
            }
            if (Gvar.equip_disc[306] == 1) {
                await Func.func428();
                Gvar.var_3076 = Gvar.var_3076 + Gvar.var_233[Gvar.var_555].Var4;
            }
            if (Gvar.var_83[Gvar.var_314].Var39 >= 2) {
                if (Gvar.var_83[Gvar.var_314].Var31 == 4 || Gvar.var_83[Gvar.var_314].Var31 == 5) {
                    Gvar.enemy_defence = Math.floor(Gvar.enemy_defence * (Gvar.var_83[Gvar.var_314].Var39 * 2 + 10) / 10);
                }
            }
            await Func.func679();
            Gvar.var_949 = Math.floor(Gvar.var_950 * (Gvar.var_3076 + Gvar.var_565 - 8) / 16) + Gvar.var_950;
            Gvar.var_951 = Gvar.var_949;
            for (let cnt2 = 0; cnt2 < Gvar.enemy_defence; ++cnt2) {
                Gvar.var_949 = Math.floor(Gvar.var_949 * 15 / 16);
            }
            if (Gvar.var_949 == 0) {
                Gvar.var_949 = 1;
            }
            Gvar.var_2817 = Adap.rnd(33);
            Gvar.var_2817 = Gvar.var_2817 + 111;
            Gvar.var_209 = Math.floor(Gvar.var_949 * Gvar.var_2817 / 128);
        }
        if (Gvar.var_340 == 1) {
            Gvar.var_209 = Gvar.var_1888;
        }
        if (Gvar.var_340 == 699) {
            Gvar.var_209 = 40;
        }
        if (Gvar.var_340 == 654) {
            Gvar.var_209 = 80;
        }
        if (Gvar.var_340 == 726) {
            Gvar.var_209 = 80;
        }
        if (Gvar.var_340 == 487) {
            Gvar.var_209 = 40;
        }
        if (Gvar.var_340 == 401) {
            if (Gvar.var_120 == 1 || Gvar.var_174 == 1) {
                Gvar.var_209 = Math.floor((Gvar.var_209 + Gvar.var_209 + Gvar.var_209) / 2);
            }
        }
        if (Gvar.var_340 == 414 && Gvar.var_168 == 1) {
            Gvar.var_209 = Math.floor((Gvar.var_209 + Gvar.var_209 + Gvar.var_209) / 2);
        }
        if (Gvar.var_138 == 1) {
            Gvar.var_209 = Math.floor((Gvar.var_209 + Gvar.var_209 + Gvar.var_209) / 2);
        }
        if (Gvar.sympathy_id == 101 || Gvar.sympathy_id == 109) {
            Gvar.var_209 = Math.floor((Gvar.var_209 + Gvar.var_209 + Gvar.var_209) / 2);
        }
        if (Gvar.var_83[Gvar.var_314].Var13 >= 1 && Gvar.var_83[Gvar.var_314].Var13 != 99) {
            Gvar.var_209 = Math.floor((Gvar.var_209 + Gvar.var_209 + Gvar.var_209) / 2);
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 73 && Gvar.var_83[Gvar.var_314].Var13 >= 1 && Gvar.var_83[Gvar.var_314].Var13 != 99) {
            Gvar.var_209 = 999;
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 141 && Gvar.var_340 == 582) {
            Gvar.var_209 = 999;
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 44 && Gvar.var_340 == 802) {
            Gvar.var_209 = 999;
        }
        if (Gvar.var_340 == 994) {
            Gvar.var_209 = 999;
        }
        if (Gvar.var_209 < 1) {
            Gvar.var_209 = 1;
        }
        if (Gvar.var_209 >= 65525) {
            Gvar.var_209 = 65525;
        }
        return;
}

export {func661}
