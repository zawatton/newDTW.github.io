import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Enemy from '../enemy/index'
import * as Music from '../music/index'

async function func644(this: any) {
        Adap.dbgprt(644);
        Gvar.var_2867 = 0;
        await Func.func639(); // 敵の回避処理
        if (Gvar.var_143 >= 1) {
            Gvar.var_2267[8] = Gvar.var_2267[7];
            Gvar.var_2267[7] = Gvar.var_2267[6];
            Gvar.var_2267[6] = Gvar.var_2267[5];
            Gvar.var_2267[5] = Gvar.var_2267[4];
            Gvar.var_2267[4] = Gvar.var_2267[3];
            Gvar.var_2267[3] = Gvar.var_2267[2];
            Gvar.var_2267[2] = Gvar.var_2267[1];
            Gvar.var_2267[1] = Gvar.var_2267[0];
            Gvar.var_2267[0] = Gvar.var_83[Gvar.var_314].Var0; // Gvar.var_83[Gvar.var_314].Var0 は enemy list
            if (Gvar.var_2267[0] != 0 && Gvar.var_2267[0] == Gvar.var_2267[1]) {
                Gvar.var_143 = 2;
            }
            if (Gvar.var_143 == 2 && Gvar.var_2267[1] == Gvar.var_2267[2]) {
                Gvar.var_143 = 3;
            }
            if (Gvar.var_143 == 3 && Gvar.var_2267[2] == Gvar.var_2267[3]) {
                Gvar.var_143 = 4;
            }
            if (Gvar.var_143 == 4 && Gvar.var_2267[3] == Gvar.var_2267[4]) {
                Gvar.var_143 = 5;
            }
            if (Gvar.var_143 == 5 && Gvar.var_2267[4] == Gvar.var_2267[5]) {
                Gvar.var_143 = 6;
            }
            if (Gvar.var_143 == 6 && Gvar.var_2267[5] == Gvar.var_2267[6]) {
                Gvar.var_143 = 7;
            }
            if (Gvar.var_143 == 7 && Gvar.var_2267[6] == Gvar.var_2267[7]) {
                Gvar.var_143 = 8;
            }
            if (Gvar.var_143 == 8 && Gvar.var_2267[7] == Gvar.var_2267[8]) {
                Gvar.var_143 = 9;
            }
            if (Gvar.var_2267[0] != 0 && Gvar.var_2267[0] != Gvar.var_2267[1]) {
                Gvar.var_143 = 1;
            }
        }
        if (Gvar.var_2867 != 0) {
            return;
        }
        if (Gvar.var_2938 != 1) { // ヒラリ回避発動フラグOFF
            await Func.setMessage("「オラオララオラオラオラオオラオラ」", "ﾃﾞｨｱﾎﾞﾛの攻撃は外れた", 7, false, false, false);
        }
        if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
            await Func.setMessage("「オラオララオラオラオラオオラオラ」", "ヒラリと攻撃をかわされた", 7, false, false, false);
        }
        Gvar.var_2939 = 1;
        if (Gvar.equip_disc[105] == 1) {
            Gvar.var_1030 = Gvar.var_1030 + 1;
        }
        Gvar.var_2985 = 0;
        if (Gvar.var_2939 == 1) {
            await Music.func090();
        }
        if (Gvar.var_83[Gvar.var_314].Var0 != 3) {
            if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                Gvar.var_2657 = Gvar.var_83[Gvar.var_314].Var5;
            }
            if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                Gvar.var_83[Gvar.var_314].Var5 = 1;
                Gvar.var_83[Gvar.var_314].Var7 = 1;
            }
            await Func.func337(); // メッセージ表示処理(自動)
            if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                Gvar.var_83[Gvar.var_314].Var5 = 2;
            }
            await Func.func337(); // メッセージ表示処理(自動)
            if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                Gvar.var_83[Gvar.var_314].Var5 = 3;
            }
            await Func.func337(); // メッセージ表示処理(自動)
            if (Gvar.var_2985 == 0) {
                await Music.func089(); // 各装備discごとの攻撃音設定
            }
            if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                Gvar.var_83[Gvar.var_314].Var5 = 6;
            }
            await Func.func337(); // メッセージ表示処理(自動)
            if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                Gvar.var_83[Gvar.var_314].Var5 = 9;
            }
            await Func.func337(); // メッセージ表示処理(自動)
            if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                Gvar.var_83[Gvar.var_314].Var5 = 8;
            }
            await Func.func337(); // メッセージ表示処理(自動)
            if (Gvar.var_2939 == 1) {
                await Music.func090();
            }
            if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                Gvar.var_83[Gvar.var_314].Var5 = 7;
            }
            await Func.func337(); // メッセージ表示処理(自動)
            if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                Gvar.var_83[Gvar.var_314].Var5 = 4;
            }
            await Func.func337(); // メッセージ表示処理(自動)
            if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                Gvar.var_83[Gvar.var_314].Var5 = Gvar.var_2657;
                Gvar.var_83[Gvar.var_314].Var7 = 0;
            }
        }
        // Ver0.1402にて追加。
        if (Gvar.var_83[Gvar.var_314].Var0 == 3) {
            if (Gvar.var_201 != 14 && Gvar.var_83[Gvar.var_314].Var10 == Gvar.var_201) { // 幻惑の迷宮(var_201 = 14)でないかつ部屋にいる時のみ発動
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    Gvar.var_2657 = Gvar.var_83[Gvar.var_314].Var5;
                }
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    Gvar.var_83[Gvar.var_314].Var5 = 1;
                    Gvar.var_83[Gvar.var_314].Var7 = 1;
                }
                await Func.func337(); // メッセージ表示処理(自動)
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    Gvar.var_83[Gvar.var_314].Var5 = 2;
                }
                await Func.func337(); // メッセージ表示処理(自動)
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    Gvar.var_83[Gvar.var_314].Var5 = 3;
                }
                await Func.func337(); // メッセージ表示処理(自動)
                if (Gvar.var_2985 == 0) {
                    await Music.func089(); // 各装備discごとの攻撃音設定
                }
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    Gvar.var_83[Gvar.var_314].Var5 = 6;
                }
                await Func.func337(); // メッセージ表示処理(自動)
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    Gvar.var_83[Gvar.var_314].Var5 = 9;
                }
                await Func.func337(); // メッセージ表示処理(自動)
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    Gvar.var_83[Gvar.var_314].Var5 = 8;
                }
                await Func.func337(); // メッセージ表示処理(自動)
                if (Gvar.var_2939 == 1) {
                    await Music.func090();
                }
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    Gvar.var_83[Gvar.var_314].Var5 = 7;
                }
                await Func.func337(); // メッセージ表示処理(自動)
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    Gvar.var_83[Gvar.var_314].Var5 = 4;
                }
                await Func.func337(); // メッセージ表示処理(自動)
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    Gvar.var_83[Gvar.var_314].Var5 = Gvar.var_2657;
                    Gvar.var_83[Gvar.var_314].Var7 = 0;
                }
                // 下記のようにすることで、部屋内でヒラリ回避をした後に瞬間移動をする。
                await Func.func337(); // メッセージ表示処理(自動)
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    await Enemy.enemy003(); // No = 3 敵タワーオブグレーの特殊能力。瞬間移動。
                    // ヒラリ回避→瞬間移動をした後に攻撃をさせない処理
                    //await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                }
                // 下記のようにすることで、部屋内でヒラリ回避をした後に瞬間移動をする。
                await Func.func337(); // メッセージ表示処理(自動)
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    // ヒラリ回避→瞬間移動をした後に攻撃をさせない処理
                    await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                }
            }
            else { // 通路にいる場合の動作処理
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    Gvar.var_2657 = Gvar.var_83[Gvar.var_314].Var5;
                }
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    Gvar.var_83[Gvar.var_314].Var5 = 1;
                    Gvar.var_83[Gvar.var_314].Var7 = 1;
                }
                await Func.func337(); // メッセージ表示処理(自動)
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    Gvar.var_83[Gvar.var_314].Var5 = 2;
                }
                await Func.func337(); // メッセージ表示処理(自動)
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    Gvar.var_83[Gvar.var_314].Var5 = 3;
                }
                await Func.func337(); // メッセージ表示処理(自動)
                if (Gvar.var_2985 == 0) {
                    await Music.func089(); // 各装備discごとの攻撃音設定
                }
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    Gvar.var_83[Gvar.var_314].Var5 = 6;
                }
                await Func.func337(); // メッセージ表示処理(自動)
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    Gvar.var_83[Gvar.var_314].Var5 = 9;
                }
                await Func.func337(); // メッセージ表示処理(自動)
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    Gvar.var_83[Gvar.var_314].Var5 = 8;
                }
                await Func.func337(); // メッセージ表示処理(自動)
                if (Gvar.var_2939 == 1) {
                    await Music.func090();
                }
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    Gvar.var_83[Gvar.var_314].Var5 = 7;
                }
                await Func.func337(); // メッセージ表示処理(自動)
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    Gvar.var_83[Gvar.var_314].Var5 = 4;
                }
                await Func.func337(); // メッセージ表示処理(自動)
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    Gvar.var_83[Gvar.var_314].Var5 = Gvar.var_2657;
                    Gvar.var_83[Gvar.var_314].Var7 = 0;
                }
                // 下記を設定することで、ヒラリ回避を実行した時のみターン消費させられる。
                await Func.func337(); // メッセージ表示処理(自動)
                if (Gvar.var_2938 == 1) {
                    await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                }
            }
        }
        // await Func.func337(); // メッセージ表示処理(自動)
        // await Func.func337(); // メッセージ表示処理(自動)
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_198 = 0; // メッセージウィンドウ閉じる
        Gvar.var_300 = 0;
        // await Func.func337(); // メッセージ表示処理(自動)
        // await Func.func337(); // メッセージ表示処理(自動)
        //await Func.func337(); // メッセージ表示処理(自動)
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_2939 = 0;
        Gvar.var_2932 = 0;
        Gvar.var_2938 = 0;
        Gvar.var_217 = 1;
        Gvar.var_1194 = 0;
        return;
}

export {func644}
