/**
 * func655 — func655 不明
 *
 * (org原典: newDTW_func6)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

async function func655(this: any) {
        Adap.dbgprt(655);
        Gvar.var_2819 = Gvar.var_673;
        Gvar.var_402 = Gvar.var_83[Gvar.var_2819].Var27;
        if (Gvar.var_83[Gvar.var_402].Var0 == 50) {
            await Func.func656();
            return;
        }
        if (Gvar.var_83[Gvar.var_402].Var0 == 0) {
            Gvar.var_83[Gvar.var_2819].Var27 = 0;
            return;
        }
        Gvar.enemy_list = Gvar.var_83[Gvar.var_402].Var0;
        if (Gvar.var_83[Gvar.var_402].Var0 == 97 && Gvar.var_83[Gvar.var_402].Var31 >= 11) {
            Gvar.enemy_list = Gvar.var_83[Gvar.var_402].Var31;
        }
        await Func.func626(); // 敵リスト
        Gvar.var_971 = Gvar.enemy_defence;
        Gvar.var_2861 = Gvar.enemy_name;
        Gvar.var_3039 = Gvar.var_83[Gvar.var_402].Var5;
        if (Gvar.var_127 != 0 || Gvar.var_132 != 0) {
            Gvar.var_2861 = "何者か";
        }
        if (Gvar.var_119 == 0 && Gvar.sympathy_id != 166 && Gvar.var_83[Gvar.var_402].Var30 != 0) {
            Gvar.var_2861 = "何者か";
        }
        Gvar.var_1637 = 0;
        Gvar.enemy_list = Gvar.var_83[Gvar.var_2819].Var0;
        if (Gvar.var_83[Gvar.var_2819].Var0 == 97 && Gvar.var_83[Gvar.var_2819].Var31 >= 11) {
            Gvar.enemy_list = Gvar.var_83[Gvar.var_2819].Var31;
        }
        await Func.func626(); // 敵リスト
        Gvar.var_2820 = Gvar.enemy_power;
        Gvar.var_3040 = Gvar.enemy_name;
        if (Gvar.var_127 != 0 || Gvar.var_132 != 0) {
            Gvar.var_3040 = "何者か";
        }
        if (Gvar.var_119 == 0 && Gvar.sympathy_id != 166 && Gvar.var_83[Gvar.var_2819].Var30 != 0) {
            Gvar.var_3040 = "何者か";
        }
        Gvar.var_3041 = Adap.rnd(8);
        if (Gvar.dungeon_number == 99) {
            Gvar.var_3041 = 1;
        }
        if (Gvar.var_3041 == 0) {
            await Func.func656();
            await Func.setMessage("" + Gvar.var_3040 + "の攻撃は外れた", "", 8, false, false, false);
            await Func.AutoDraw(3);
            return;
        }
        if (Gvar.var_83[Gvar.var_402].Var0 == 53) {
            Gvar.var_971 = Gvar.enemy_defence;
        }
        Gvar.var_403 = "" + Gvar.var_3040 + "は";
        if (Gvar.var_83[Gvar.var_2819].Var39 >= 2) {
            Gvar.var_2820 = Math.floor(Gvar.var_2820 * (Gvar.var_83[Gvar.var_2819].Var39 * 2 + 10) / 10);
        }
        if (Gvar.var_83[Gvar.var_402].Var39 >= 2) {
            if (Gvar.var_83[Gvar.var_402].Var31 == 4 || Gvar.var_83[Gvar.var_402].Var31 == 5) {
                Gvar.var_971 = Math.floor(Gvar.var_971 * (Gvar.var_83[Gvar.var_402].Var39 * 2 + 10) / 10);
            }
        }
        if (Gvar.var_83[Gvar.var_2819].Var25 >= 1 && Gvar.var_83[Gvar.var_2819].Var25 <= 50) {
            Gvar.var_2820 = Gvar.var_2820 + Gvar.var_83[Gvar.var_2819].Var25;
        }
        if (Gvar.var_83[Gvar.var_2819].Var25 >= 51 && Gvar.var_83[Gvar.var_2819].Var25 < 99) {
            Gvar.var_2820 = Gvar.enemy_power - (Gvar.var_83[Gvar.var_2819].Var25 - 50);
            if (Gvar.var_2820 <= 1) {
                Gvar.var_2820 = 1;
            }
        }
        Gvar.var_949 = Math.floor(Gvar.var_2820 * (Gvar.var_2820 + Gvar.var_2820) / 16) + Gvar.var_2820;
        for (let cnt1 = 0; cnt1 < Gvar.var_971; ++cnt1) {
            Gvar.var_949 = Math.floor(Gvar.var_949 * 15 / 16);
        }
        Gvar.var_2817 = Adap.rnd(33);
        Gvar.var_2817 = Gvar.var_2817 + 111;
        Gvar.var_209 = Math.floor(Gvar.var_949 * Gvar.var_2817 / 128) + 1;
        if (Gvar.var_1637 == 1) { // 攻撃モーションにスタンド像を付与するフラグがONの場合
            Gvar.var_743 = 1; //スタンド像付与フラグON
        }
        Gvar.var_2196 = 1;
        if (Gvar.var_83[Gvar.var_402].Var0 != 79) {
            if (Gvar.var_83[Gvar.var_2819].Var5 == 4) {
                Gvar.var_83[Gvar.var_402].Var5 = 6;
            }
            if (Gvar.var_83[Gvar.var_2819].Var5 == 6) {
                Gvar.var_83[Gvar.var_402].Var5 = 4;
            }
            if (Gvar.var_83[Gvar.var_2819].Var5 == 2) {
                Gvar.var_83[Gvar.var_402].Var5 = 8;
            }
            if (Gvar.var_83[Gvar.var_2819].Var5 == 8) {
                Gvar.var_83[Gvar.var_402].Var5 = 2;
            }
            if (Gvar.var_83[Gvar.var_2819].Var5 == 1) {
                Gvar.var_83[Gvar.var_402].Var5 = 9;
            }
            if (Gvar.var_83[Gvar.var_2819].Var5 == 3) {
                Gvar.var_83[Gvar.var_402].Var5 = 7;
            }
            if (Gvar.var_83[Gvar.var_2819].Var5 == 7) {
                Gvar.var_83[Gvar.var_402].Var5 = 3;
            }
            if (Gvar.var_83[Gvar.var_2819].Var5 == 9) {
                Gvar.var_83[Gvar.var_402].Var5 = 1;
            }
        }
        Gvar.var_742 = 1;
        Gvar.var_83[Gvar.var_2819].Var7 = 1;
        // await Func.func337(); // メッセージ表示処理(自動)
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_672 = Gvar.var_83[Gvar.var_673].Var0;
        await Music.func093();
        // await Func.func337(); // メッセージ表示処理(自動)
        // await Func.func337(); // メッセージ表示処理(自動)
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        await Func.func705();
        Gvar.var_83[Gvar.var_2819].Var7 = 0;
        Gvar.var_742 = 0;
        Gvar.var_2196 = 0;
        if (Gvar.var_83[Gvar.var_402].Var0 != 0 && Gvar.var_83[Gvar.var_402].Var9 == 1) {
            Gvar.var_83[Gvar.var_402].Var5 = Gvar.var_3039;
        }
        if (Gvar.var_83[Gvar.var_402].Var0 != 0 && Gvar.var_83[Gvar.var_2819].Var10 == 0) {
            Gvar.var_83[Gvar.var_402].Var5 = Gvar.var_3039;
        }
        Gvar.var_240 = 0;
        Gvar.var_743 = 0; //スタンド像付与フラグOFF
        return;
}

export {func655}
