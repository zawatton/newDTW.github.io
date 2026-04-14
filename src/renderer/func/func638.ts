/**
 * func638 — func638 敵を攻撃した時のダメージ計算
 *
 * (org原典: newDTW_func6)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func638(this: any) {
        Adap.dbgprt(638);
        if (Gvar.var_83[Gvar.var_314].Var39 >= 2) {
            if (Gvar.var_83[Gvar.var_314].Var31 == 4 || Gvar.var_83[Gvar.var_314].Var31 == 5) {
                Gvar.enemy_defence = Math.floor(Gvar.enemy_defence * (Gvar.var_83[Gvar.var_314].Var39 * 2 + 10) / 10);
            }
        }
        // No = 206 オアシスのDISCを装備している時
        if (Gvar.equip_disc[206] == 1) {
            Gvar.var_1073 = Adap.rnd(8);
            if (Gvar.var_1073 == 0) {
                Gvar.enemy_defence = Math.floor(Gvar.enemy_defence / 2);
                Gvar.var_1193 = 1;
            }
        }
        await Func.func679();
        Gvar.var_949 = Math.floor(Gvar.var_950 * (Gvar.var_580 + Gvar.var_565 - 8) / 16) + Gvar.var_950;
        Gvar.var_951 = Gvar.var_949;
        for (let cnt1 = 0; cnt1 < Gvar.enemy_defence; ++cnt1) {
            Gvar.var_949 = Math.floor(Gvar.var_949 * 15 / 16);
        }
        Gvar.var_2817 = Adap.rnd(33);
        Gvar.var_2817 = Gvar.var_2817 + 111;
        Gvar.var_209 = Math.floor(Gvar.var_949 * Gvar.var_2817 / 128);
        // No = 117 ダークブルームーンのDISCを装備している時
        if (Gvar.equip_disc[117] == 1) {
            await Func.func645();
        }
        if (Gvar.var_143 >= 2) {
            Gvar.var_209 = Gvar.var_209 + Math.floor(Gvar.var_143 * Gvar.var_209 / 5);
        }
        // No = 399 G・E・レクイエムのDISCを装備している時
        if (Gvar.equip_disc[399] == 1) {
            Gvar.var_209 = Math.floor(Gvar.var_209 * 3 / 2);
        }
        // No = 111 ザ・ワールドのDISCを装備している時
        if (Gvar.equip_disc[111] == 1) {
            Gvar.var_1337 = Gvar.var_83[Gvar.var_314].Var0; // Gvar.var_83[Gvar.var_314].Var0 は enemy list
             // No = 132 レクイエムジョルノ
             // Ver0.1403にて追加。No = 171 離婚した承太郎
            if (Gvar.var_1337 == 147 || Gvar.var_1337 == 134 || Gvar.var_1337 == 119 || Gvar.var_1337 == 35 || Gvar.var_1337 == 135 || Gvar.var_1337 == 120 || Gvar.var_1337 == 128 || Gvar.var_1337 == 140 || Gvar.var_1337 == 68 || Gvar.var_1337 == 131 || Gvar.var_1337 == 132 || Gvar.var_1337 == 171) {
                Gvar.var_209 = Math.floor(Gvar.var_209 * 3 / 2);
            }
        }
        // No = 114 ホワイトスイネイクのDISCを装備している時
        if (Gvar.equip_disc[114] == 1) {
            Gvar.var_1337 = Gvar.var_83[Gvar.var_314].Var0; // Gvar.var_83[Gvar.var_314].Var0 は enemy list
            if (Gvar.var_1337 == 141 || Gvar.var_1337 == 134 || Gvar.var_1337 == 99 || Gvar.var_1337 == 72 || Gvar.var_1337 == 80 || Gvar.var_1337 == 148 || Gvar.var_1337 == 153 || Gvar.var_1337 == 154 || Gvar.var_1337 == 156 || Gvar.var_1337 == 157 || Gvar.var_1337 == 159 || Gvar.var_1337 == 93 || Gvar.var_1337 == 96 || Gvar.var_1337 == 98) {
                Gvar.var_209 = Math.floor(Gvar.var_209 * 3 / 2);
            }
        }
        // No = 368 能力「暗殺倍打」をDISCへ合成している時
        if (Gvar.equip_disc[369] == 1) {
            Gvar.var_1337 = Gvar.var_83[Gvar.var_314].Var0; // Gvar.var_83[Gvar.var_314].Var0 は enemy list
            // 暗殺チーム設定
            if (Gvar.var_1337 == 62 || Gvar.var_1337 == 63 || Gvar.var_1337 == 85 || Gvar.var_1337 == 64 || Gvar.var_1337 == 106 || Gvar.var_1337 == 107) {
                Gvar.var_209 = Math.floor(Gvar.var_209 * 3 / 2);
            }
        }
        // No = 370 能力「九柱神倍打」をDISCへ合成している時
        if (Gvar.equip_disc[370] == 1) {
            Gvar.var_1337 = Gvar.var_83[Gvar.var_314].Var0; // Gvar.var_83[Gvar.var_314].Var0 は enemy list
            if (Gvar.var_1337 == 27 || Gvar.var_1337 == 97 || Gvar.var_1337 == 58 || Gvar.var_1337 == 14 || Gvar.var_1337 == 15 || Gvar.var_1337 == 38 || Gvar.var_1337 == 155 || Gvar.var_1337 == 129) {
                Gvar.var_209 = Math.floor(Gvar.var_209 * 3 / 2);
            }
        }
        // No = 112 キラークイーンのDISCを装備している時
        if (Gvar.equip_disc[112] == 1) {
            if (Gvar.var_83[Gvar.var_314].Var31 == 6 || Gvar.var_83[Gvar.var_314].Var31 == 7 || Gvar.var_83[Gvar.var_314].Var31 == 8) {
                Gvar.var_209 = Math.floor(Gvar.var_209 * 3 / 2);
            }
        }
        // No = 102 キング・クリムゾンのDISCを装備している時
        if (Gvar.equip_disc[102] == 1) {
            if (Gvar.var_83[Gvar.var_314].Var31 == 9 || Gvar.var_83[Gvar.var_314].Var31 == 10) {
                Gvar.var_209 = Math.floor(Gvar.var_209 * 3 / 2);
            }
        }
        // No = 116 ハーミットパープルのDISCを装備している時 Ver0.1401にて修正。他のDISC条件と書き方を統一
        /*
        if (Gvar.equip_disc[116] == 1 && Gvar.var_83[Gvar.var_314].Var31 == 2) { 
            Gvar.var_209 = Math.floor(Gvar.var_209 * 3 / 2);
        }
        */
        if (Gvar.equip_disc[116] == 1) { 
            if (Gvar.var_83[Gvar.var_314].Var31 == 2) { // 敵がvar_972 = 2 吸血鬼属性の場合
                Gvar.var_209 = Math.floor(Gvar.var_209 * 3 / 2);
            }
        }
        // No = 124 ムーディーブルースのDISCを装備している時 Ver0.1401にて修正。他のDISC条件と書き方を統一
        /*
        if (Gvar.equip_disc[124] == 1 && Gvar.var_83[Gvar.var_314].Var0 == 131) {
            Gvar.var_209 = Math.floor(Gvar.var_209 * 3 / 2);
        } 
        if (Gvar.equip_disc[124] == 1 && Gvar.var_83[Gvar.var_314].Var0 == 132) {
            Gvar.var_209 = Math.floor(Gvar.var_209 * 3 / 2);
        }
        */
        if (Gvar.equip_disc[124] == 1) {
            if (Gvar.var_83[Gvar.var_314].Var0 == 131 || Gvar.var_83[Gvar.var_314].Var0 == 132) { // 敵がNo = 131 ジョルノとNo = 132 レクイエムジョルノの場合
                Gvar.var_209 = Math.floor(Gvar.var_209 * 3 / 2);
            }
        }
        
        // Ver0.1401にて追加。タスクact1を発動したかどうかの確認フラグがONの時、直接攻撃(装備区分:攻撃に何も装備していない状態)のダメージ増加。
        // Func.func420の攻撃用disc装備を参考。
        if (Gvar.taskact1_on == 1) {
            if (Gvar.kougeki_disc_id  == 0) {
                Gvar.var_209 = Math.floor(Gvar.var_209 * 3 / 2);
                //var_209 = 999;
            }
        }
        if (Gvar.var_125 == 1 && Gvar.var_83[Gvar.var_314].Var31 == 2) {
            Gvar.var_209 = Math.floor(Gvar.var_209 * 3 / 2);
        }
        if (Gvar.var_104 == 1) { // Gvar.var_104 攻撃力が上がるフラグがONであれば
            Gvar.var_209 = Math.floor((Gvar.var_209 + Gvar.var_209 + Gvar.var_209) / 2);
        }
        if (Gvar.var_109 == 1) {
            Gvar.var_209 = Math.floor((Gvar.var_209 + Gvar.var_209) / 3);
        }
        if (Gvar.var_83[Gvar.var_314].Var13 >= 1 && Gvar.var_83[Gvar.var_314].Var13 != 99) {
            Gvar.var_209 = Math.floor(Gvar.var_209 * 3 / 2);
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 73 && Gvar.var_83[Gvar.var_314].Var13 >= 1 && Gvar.var_83[Gvar.var_314].Var13 != 99) {
            Gvar.var_209 = 999;
        }
        if (Gvar.var_209 < 1) {
            Gvar.var_209 = 1;
        }
        if (Gvar.var_143 >= 5 && Gvar.var_209 == 1) {
            Gvar.var_209 = 2;
        }
        if (Gvar.var_182 == 1) {
            Gvar.var_209 = Gvar.var_209 * 2;
        }
        // No = 308 エボニーデビルのDISCを装備している時
        if (Gvar.equip_disc[308] == 1 && Gvar.var_83[Gvar.var_314].Var0 == Gvar.var_831 && Gvar.var_83[Gvar.var_314].Var0 != 0) {
            Gvar.var_209 = Gvar.var_209 * 2;
        }
        if (Gvar.var_1035 >= 1) {
            Gvar.var_209 = Gvar.var_209 * 2;
            Gvar.var_1035 = 0;
        }
        if (Gvar.var_209 >= 65525) {
            Gvar.var_209 = 65525;
        }
        return;
}

export {func638}
