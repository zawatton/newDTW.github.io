import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func361(this: any) {
        Adap.dbgprt(361);
        await Func.func080(); // 各キー入力確認

        if (Gvar.var_12 == 1) { // 通信サーバーフラグ？？
            Gvar.conf_keyon = Adap.getkey(121); // キーF10入力確認
            if (Gvar.conf_keyon == 1) {
                Gvar.var_1038 = 200;
                for (let cnt3 = 0; cnt3 < 200; ++cnt3) {
                    Gvar.var_989[cnt3] = cnt3;
                }
                Gvar.var_1610 = 1;
                Gvar.var_1607 = 1;
                Gvar.var_1608 = 1;
                await Func.func365();
                for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                    await Func.func337(); // メッセージ表示処理(自動)
                }
                await Func.func361();
                return;
            }

            Gvar.conf_keyon = Adap.getkey(122); // キーF11入力確認
            if (Gvar.conf_keyon == 1) {
                Gvar.var_1038 = 1;
                for (let cnt3 = 0; cnt3 < 200; ++cnt3) {
                    Gvar.var_989[cnt3] = 0;
                }
                Gvar.var_989[1] = 1;
                Gvar.var_1610 = 1;
                Gvar.var_1607 = 1;
                Gvar.var_1608 = 1;
                await Func.func365();
                for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                    await Func.func337(); // メッセージ表示処理(自動)
                }
                await Func.func361();
                return;
            }
        }
        if (Gvar.var_1609 == 0) {
            if (Gvar.var_254 == 1 && Gvar.var_1607 > 1) {

                Adap.DSPLAY(100); // アイテム選択時の効果音
                Gvar.var_1607 = Gvar.var_1607 - 1;
                Gvar.var_1608 = 1;
                await Func.func365();
                for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                    await Func.func337(); // メッセージ表示処理(自動)
                }
                await Func.func361();
                return;
            }
            if (Gvar.var_254 == 1 && Gvar.var_1607 == 1) {

                Adap.DSPLAY(100); // アイテム選択時の効果音
                Gvar.var_1607 = Gvar.var_1614;
                Gvar.var_1608 = 1;
                await Func.func365();
                for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                    await Func.func337(); // メッセージ表示処理(自動)
                }
                await Func.func361();
                return;
            }
            if (Gvar.var_257 == 1 && Gvar.var_1607 < Gvar.var_1614) {

                Adap.DSPLAY(100); // アイテム選択時の効果音
                Gvar.var_1607 = Gvar.var_1607 + 1;
                Gvar.var_1608 = 1;
                await Func.func365();
                for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                    await Func.func337(); // メッセージ表示処理(自動)
                }
                await Func.func361();
                return;
            }
            if (Gvar.var_257 == 1 && Gvar.var_1607 >= Gvar.var_1614) {

                Adap.DSPLAY(100); // アイテム選択時の効果音
                Gvar.var_1607 = 1;
                Gvar.var_1608 = 1;
                await Func.func365();
                for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                    await Func.func337(); // メッセージ表示処理(自動)
                }
                await Func.func361();
                return;
            }
        }
        if (Gvar.key_X_on == 1 && Gvar.var_1609 == 0) {

            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            Gvar.var_502 = 0;
            Gvar.var_508 = 1; // Mフラグ:資料(設定画面) Func.func058
            Gvar.var_499 = 1; // Mフラグ:設定画面 Func.func056
            Gvar.var_511 = 1;
            await Func.func051(); // キー入力待ち処理
            await Func.func358();
            return;
        }
        if (Gvar.key_X_on == 1 && Gvar.var_1609 == 1) {
            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            Gvar.var_502 = 0;
            Gvar.var_1609 = 0;
            await Func.func513(); // 射撃discヘブンズドアーの発動時メッセージ
            return;
        }
        if (Gvar.key_A_on == 1) {
            Gvar.var_83[299].Var8 = 1;
            for (let cnt2 = 0; cnt2 < 8; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
            }
            Gvar.var_83[299].Var8 = 0;
            await Func.AutoDraw(2);
            await Func.func361();
            return;
        }
        if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
            Gvar.enemy_list = Gvar.var_83[299].Var0;
            await Func.func626();
            Gvar.var_743 = 0; //スタンド像付与フラグOFF
            if (Gvar.var_1637 == 1) { // 攻撃モーションにスタンド像を付与するフラグがONの場合
                Gvar.var_743 = 1; //スタンド像付与フラグON
            }
            if (Gvar.enemy_list == 30 || Gvar.enemy_list == 46) {
                Gvar.var_83[299].Var21 = 1;
                for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                    Gvar.var_411 = 2;
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_411 = 3;
                    await Func.func337(); // メッセージ表示処理(自動)
                }
                Gvar.var_411 = 1;
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_83[299].Var21 = 0;
                Gvar.var_411 = 0;
            }
            Gvar.var_742 = 1;
            Gvar.var_764 = 2;
            Gvar.var_763 = 4;
            Gvar.var_83[299].Var7 = 1;
            if (Gvar.enemy_list == 93 || Gvar.enemy_list == 7 || Gvar.enemy_list == 141 || Gvar.enemy_list == 99 || Gvar.enemy_list == 56 || Gvar.enemy_list == 48 || Gvar.enemy_list == 46 || Gvar.enemy_list == 30 || Gvar.enemy_list == 21 || Gvar.enemy_list == 121 || Gvar.enemy_list == 155 || Gvar.enemy_list == 151 || Gvar.enemy_list == 124 || Gvar.enemy_list == 126 || Gvar.enemy_list == 40 || Gvar.enemy_list == 41 || Gvar.enemy_list == 42) {
                Gvar.var_83[299].Var18 = 1;
            }
            if (Gvar.enemy_list == 79 || Gvar.enemy_list == 91 || Gvar.enemy_list == 92 || Gvar.enemy_list == 19 || Gvar.enemy_list == 90 || Gvar.enemy_list == 53 || Gvar.enemy_list == 23 || Gvar.enemy_list == 65) {
                Gvar.var_83[299].Var18 = 1;
            }
            for (let cnt2 = 0; cnt2 < 11; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
            }
            if (Gvar.var_83[299].Var0 == 22 || Gvar.var_83[299].Var0 == 17 || Gvar.var_83[299].Var0 == 71) {
                for (let cnt3 = 0; cnt3 < 4; ++cnt3) {
                    await Func.func337(); // メッセージ表示処理(自動)
                }
            }
            Gvar.var_83[299].Var7 = 0;
            Gvar.var_83[299].Var18 = 0;
            Gvar.var_743 = 0; //スタンド像付与フラグOFF
            Gvar.var_742 = 0;
            await Func.AutoDraw(2);
            await Func.func361();
            return;
        }
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_83[299].Var32 = Gvar.var_83[299].Var32 + 1;
        if (Gvar.var_83[299].Var32 == 12) {
            Gvar.var_83[299].Var32 = 0;
        }
        Gvar.var_1608++;
        if (Gvar.var_1608 == 240) {
            Gvar.var_1608 = 0;
        }
        await Func.func361();
        return;
}

export {func361}
