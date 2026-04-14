/**
 * func583 — func583 敵の射撃攻撃モーション処理(ドット絵座標設定等)
 *
 * (org原典: newDTW_func5)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func583(this: any) {
        Adap.dbgprt(583);
        Adap.gmode(2, null, null, null);
        Adap.pos((Gvar.var_455 - Gvar.var_66 + 4) * 40, (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10);
        if (Gvar.var_1192 == 1) {
            if (Gvar.var_83[Gvar.var_673].Var5 == 4) {
                Adap.pos((Gvar.var_455 - Gvar.var_66 + 4) * 40 - 20, (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10);
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 6) {
                Adap.pos((Gvar.var_455 - Gvar.var_66 + 4) * 40 + 20, (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10);
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 8) {
                Adap.pos((Gvar.var_455 - Gvar.var_66 + 4) * 40, (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10 - 20);
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 2) {
                Adap.pos((Gvar.var_455 - Gvar.var_66 + 4) * 40, (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10 + 20);
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 1) {
                Adap.pos((Gvar.var_455 - Gvar.var_66 + 4) * 40 - 20, (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10 + 20);
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 3) {
                Adap.pos((Gvar.var_455 - Gvar.var_66 + 4) * 40 + 20, (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10 + 20);
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 7) {
                Adap.pos((Gvar.var_455 - Gvar.var_66 + 4) * 40 - 20, (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10 - 20);
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 9) {
                Adap.pos((Gvar.var_455 - Gvar.var_66 + 4) * 40 + 20, (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10 - 20);
            }
        }
        if (Gvar.var_1192 == 2) {
            if (Gvar.var_83[Gvar.var_673].Var5 == 4) {
                Adap.pos((Gvar.var_455 - Gvar.var_66 + 4) * 40 - 20, (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10);
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 6) {
                Adap.pos((Gvar.var_455 - Gvar.var_66 + 4) * 40 + 20, (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10);
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 8) {
                Adap.pos((Gvar.var_455 - Gvar.var_66 + 4) * 40, (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10 - 20);
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 2) {
                Adap.pos((Gvar.var_455 - Gvar.var_66 + 4) * 40, (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10 + 20);
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 1) {
                Adap.pos((Gvar.var_455 - Gvar.var_66 + 4) * 40 - 20, (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10 + 20);
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 3) {
                Adap.pos((Gvar.var_455 - Gvar.var_66 + 4) * 40 + 20, (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10 + 20);
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 7) {
                Adap.pos((Gvar.var_455 - Gvar.var_66 + 4) * 40 - 20, (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10 - 20);
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 9) {
                Adap.pos((Gvar.var_455 - Gvar.var_66 + 4) * 40 + 20, (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10 - 20);
            }
        }
        if (Gvar.var_2802 == 1) {
            if (Gvar.var_83[Gvar.var_673].Var5 == 4) {
                Adap.pos((Gvar.var_455 - Gvar.var_66 + 4) * 40, (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10);
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 6) {
                Adap.pos((Gvar.var_455 - Gvar.var_66 + 4) * 40, (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10);
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 8) {
                Adap.pos((Gvar.var_455 - Gvar.var_66 + 4) * 40, (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10);
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 2) {
                Adap.pos((Gvar.var_455 - Gvar.var_66 + 4) * 40, (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10);
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 1) {
                Adap.pos((Gvar.var_455 - Gvar.var_66 + 4) * 40, (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10);
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 3) {
                Adap.pos((Gvar.var_455 - Gvar.var_66 + 4) * 40, (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10);
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 7) {
                Adap.pos((Gvar.var_455 - Gvar.var_66 + 4) * 40, (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10);
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 9) {
                Adap.pos((Gvar.var_455 - Gvar.var_66 + 4) * 40, (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10);
            }
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 7) { // No = 7 運命の車輪
            Adap.gcopy(34, 320 + Gvar.var_1416, 160, 40, 40);
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 15) { // No = 15 ペットショップ
            Adap.gcopy(34, 320 + Gvar.var_1416, 520, 40, 40);
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 21) { // No = 21 ストレイ・キャット
            Adap.color(0, 0, 0);
            Adap.gmode(4, null, null, 150);
            Adap.gcopy(34, 320 + Gvar.var_1416, 680, 40, 40);
            Adap.gmode(2, null, null, null);
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 32) { // No = 32 吉良吉影
            Adap.gcopy(34, 320 + Gvar.var_1416, 920, 40, 40);
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 40) { // No = 40 バッドカンパニー
            Adap.gcopy(34, 320 + Gvar.var_1416, 480, 40, 40);
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 41) { // No = 41 バッドカンパニー戦車
            Adap.gcopy(34, 320 + Gvar.var_1416, 960, 40, 40);
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 42) { // No = 42 アパッチ
            Adap.gcopy(34, 320 + Gvar.var_1416, 1000, 40, 40);
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 45) { // No = 45 由花子。Ver0.1403にてNo = 158 プッツン由花子と分離。
            Adap.gcopy(34, 320 + Gvar.var_1416, 760, 40, 40);
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 47) { // No = 47 億泰。Ver0.1403にてNo = 67 ブチ切れた億泰と分離。
            Adap.gcopy(3, 0, 0, 1, 1);
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 48) { // No = 48 エアロスミス
            Adap.gcopy(34, 320 + Gvar.var_1416, 480, 40, 40);
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 56) { // No = 56 シュトロハイム
            Adap.gcopy(34, 320 + Gvar.var_1416, 480, 40, 40);
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 67) { // No = 67 ブチ切れた億泰。Ver0.1403にてNo = 47 億泰と分離。
            Adap.gcopy(3, 0, 0, 1, 1);
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 76) { // No = 76 エコーズACT2
            if (Gvar.var_1304 == 0) {
                Adap.gcopy(34, 320 + Gvar.var_1416, 280, 40, 40);
            }
            if (Gvar.var_1304 == 1) {
                Adap.gcopy(34, 320 + Gvar.var_1416, 320, 40, 40);
            }
            if (Gvar.var_1304 == 2) {
                Adap.gcopy(34, 320 + Gvar.var_1416, 360, 40, 40);
            }
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 80) { // No = 80 ラング・ラングラー
            Adap.gcopy(34, 320 + Gvar.var_1416, 1040, 40, 40);
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 93) { // No = 93 エンポリオ
            Adap.gcopy(34, 320 + Gvar.var_1416, 1280, 40, 40);
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 95) { // No = 95 ストレイツォ
            Adap.gcopy(34, 320 + Gvar.var_1416, 240, 40, 40);
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 106) { // No = 106 ペッシ。Ver0.1403にてNo = 107 成長したペッシと分離。
            Adap.gcopy(34, 320 + Gvar.var_1416, 160, 40, 40);
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 107) { // No = 107 成長したペッシ。Ver0.1403にてNo = 106 ペッシと分離。
            Adap.gcopy(34, 320 + Gvar.var_1416, 160, 40, 40);
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 113) { // No = 113 DIO
            Adap.gcopy(34, 320 + Gvar.var_1416, 40, 40, 40);
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 121) { // No = 121 花京院。Ver0.1403にてNo = 126 退院した花京院と分離。
            Adap.gcopy(34, 320 + Gvar.var_1416, 400, 40, 40);
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 126) { // No = 126 退院した花京院。Ver0.1403にてNo = 121 花京院と分離。
            Adap.gcopy(34, 320 + Gvar.var_1416, 400, 40, 40);
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 132) { // No = 132 レクイエムジョルノ
            Adap.gcopy(34, 320 + Gvar.var_1416, 1160, 40, 40);
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 136) { // No = 136 シーザー
            Adap.gcopy(34, 320 + Gvar.var_1416, 120, 40, 40);
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 141) { // No = 141 F・F
            Adap.gcopy(34, 320 + Gvar.var_1416, 200, 40, 40);
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 151) { // No = 151 虫食い。Ver0.1403にてNo = 172 虫食いでないと分離。
            Adap.gcopy(34, 320 + Gvar.var_1416, 1200, 40, 40);
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 155) { // No = 155 マライア
            Adap.gcopy(34, 320 + Gvar.var_1416, 80, 40, 40);
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 158) { // No = 158 プッツン由花子。Ver0.1403にてNo = 45 由花子と分離。
            Adap.gcopy(34, 320 + Gvar.var_1416, 760, 40, 40);
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 172) { // No = 172 虫食いでない。Ver0.1403にてNo = 151 虫食いと分離。
            Adap.gcopy(34, 320 + Gvar.var_1416, 1200, 40, 40);
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 175) { // No = 175 不明敵(没敵チャカ？)
            Adap.gcopy(34, 320 + Gvar.var_1416, 1320, 40, 40);
        }
        return;
}

export {func583}
