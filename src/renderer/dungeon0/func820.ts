import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func820(this: any) {
        Adap.dbgprt(820);
        Gvar.var_3197 = 0;
        if (Gvar.var_523 >= 1) {  // 一巡後の世界へ行けるようになった時のフラグ? 地球儀が回転
            Gvar.var_3197++;
        }
        if (Gvar.var_524 >= 1) { // 鉄の牢獄へ行けるようになった時のフラグ? ロッコ・バロッコ所長との会話が終わったフラグ
            Gvar.var_3197++;
        }
        await Func.func337(); // メッセージ表示処理(自動)
        await Func.func080(); // 各キー入力確認
        if (Gvar.var_259 == 1) { // var_259:入力判定[↓]
            if (Gvar.var_3197 == 2 && Gvar.var_513 != 5) {
                Gvar.var_516 = Gvar.var_516 + 16;
                Gvar.var_513 = Gvar.var_513 + 1;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func820();
                return;
            }
            if (Gvar.var_3197 == 2 && Gvar.var_513 == 5) {
                Gvar.var_516 = 88;
                Gvar.var_513 = 1;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func820();
                return;
            }
            if (Gvar.var_3197 == 1 && Gvar.var_513 != 4) {
                Gvar.var_516 = Gvar.var_516 + 16;
                Gvar.var_513 = Gvar.var_513 + 1;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func820();
                return;
            }
            if (Gvar.var_3197 == 1 && Gvar.var_513 == 4) {
                Gvar.var_516 = 88;
                Gvar.var_513 = 1;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func820();
                return;
            }
            // ディアボロの試練解放フラグがON
            if (Gvar.var_526 >= 1 && Gvar.var_513 != 3) {
                Gvar.var_516 = Gvar.var_516 + 16;
                Gvar.var_513 = Gvar.var_513 + 1;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func820();
                return;
            }
            // ディアボロの試練解放フラグがON
            if (Gvar.var_526 >= 1 && Gvar.var_513 == 3) {
                Gvar.var_516 = 88;
                Gvar.var_513 = 1;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func820();
                return;
            }
            if (Gvar.var_404 >= 1 && Gvar.var_513 != 2) {
                Gvar.var_516 = Gvar.var_516 + 16;
                Gvar.var_513 = Gvar.var_513 + 1;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func820();
                return;
            }
            if (Gvar.var_404 >= 1 && Gvar.var_513 == 2) {
                Gvar.var_516 = 88;
                Gvar.var_513 = 1;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func820();
                return;
            }
        }
        if (Gvar.var_255 == 1) { // var_255:入力判定[↑]
            if (Gvar.var_3197 == 2 && Gvar.var_513 != 1) {
                Gvar.var_516 = Gvar.var_516 - 16;
                Gvar.var_513 = Gvar.var_513 - 1;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func820();
                return;
            }
            if (Gvar.var_3197 == 2 && Gvar.var_513 == 1) {
                Gvar.var_516 = 152;
                Gvar.var_513 = 5;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func820();
                return;
            }
            if (Gvar.var_3197 == 1 && Gvar.var_513 != 1) {
                Gvar.var_516 = Gvar.var_516 - 16;
                Gvar.var_513 = Gvar.var_513 - 1;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func820();
                return;
            }
            if (Gvar.var_3197 == 1 && Gvar.var_513 == 1) {
                Gvar.var_516 = 136;
                Gvar.var_513 = 4;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func820();
                return;
            }
            // ディアボロの試練解放フラグがON
            if (Gvar.var_526 >= 1 && Gvar.var_513 != 1) {
                Gvar.var_516 = Gvar.var_516 - 16;
                Gvar.var_513 = Gvar.var_513 - 1;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func820();
                return;
            }
            // ディアボロの試練解放フラグがON
            if (Gvar.var_526 >= 1 && Gvar.var_513 == 1) {
                Gvar.var_516 = 120;
                Gvar.var_513 = 3;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func820();
                return;
            }
            if (Gvar.var_404 >= 1 && Gvar.var_513 != 1) {
                Gvar.var_516 = Gvar.var_516 - 16;
                Gvar.var_513 = Gvar.var_513 - 1;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func820();
                return;
            }
            if (Gvar.var_404 >= 1 && Gvar.var_513 == 1) {
                Gvar.var_516 = 104;
                Gvar.var_513 = 2;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func820();
                return;
            }
        }
        if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
            if (Gvar.var_513 == 1) {
                Gvar.var_198 = 0; // メッセージウィンドウ閉じる
    
                Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                Gvar.var_793 = 1;
                Gvar.var_785 = 1;
                Gvar.var_786 = 1;
                Gvar.var_787 = 1;
                Gvar.var_629 = 1;
                await Func.func821();
                await Func.func166();
                return;
            }
            if (Gvar.var_513 == 2) {
                Gvar.var_198 = 0; // メッセージウィンドウ閉じる
    
                Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                Gvar.var_793 = 2;
                Gvar.var_785 = 1;
                Gvar.var_786 = 1;
                Gvar.var_787 = 1;
                Gvar.var_629 = 1;
                await Func.func821();
                await Func.func166();
                return;
            }
            if (Gvar.var_513 == 3) {
                Gvar.var_198 = 0; // メッセージウィンドウ閉じる
    
                Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                Gvar.var_793 = 3;
                Gvar.var_785 = 1;
                Gvar.var_786 = 1;
                Gvar.var_787 = 1;
                Gvar.var_629 = 1;
                await Func.func821();
                await Func.func166();
                return;
            }
            if (Gvar.var_513 == 4) {
                // Gvar.var_524 鉄の牢獄へ行けるようになった時のフラグ? ロッコ・バロッコ所長との会話が終わったフラグ
                if (Gvar.var_524 == 0 && Gvar.var_523 >= 1) {  // 一巡後の世界へ行けるようになった時のフラグ? 地球儀が回転
                    Gvar.var_198 = 0; // メッセージウィンドウ閉じる
        
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    Gvar.var_793 = 4;
                    Gvar.var_785 = 1;
                    Gvar.var_786 = 1;
                    Gvar.var_787 = 1;
                    Gvar.var_629 = 1;
                    await Func.func821();
                    await Func.func166();
                    return;
                }
                // Gvar.var_524 鉄の牢獄へ行けるようになった時のフラグ? ロッコ・バロッコ所長との会話が終わったフラグ
                if (Gvar.var_524 >= 1 && Gvar.var_523 == 0) {  // 一巡後の世界へ行けるようになった時のフラグ? 地球儀が回転
                    Gvar.var_198 = 0; // メッセージウィンドウ閉じる
        
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    Gvar.var_793 = 0;
                    Gvar.var_785 = 1;
                    Gvar.var_786 = 1;
                    Gvar.var_787 = 1;
                    Gvar.var_629 = 1;
                    await Func.func821();
                    await Func.func166();
                    return;
                }
                // Gvar.var_524 鉄の牢獄へ行けるようになった時のフラグ? ロッコ・バロッコ所長との会話が終わったフラグ
                if (Gvar.var_524 >= 1 && Gvar.var_523 >= 1) {  // 一巡後の世界へ行けるようになった時のフラグ? 地球儀が回転
                    Gvar.var_198 = 0; // メッセージウィンドウ閉じる
        
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    Gvar.var_793 = 0;
                    Gvar.var_785 = 1;
                    Gvar.var_786 = 1;
                    Gvar.var_787 = 1;
                    Gvar.var_629 = 1;
                    await Func.func821();
                    await Func.func166();
                    return;
                }
            }
            if (Gvar.var_513 == 5) {
                Gvar.var_198 = 0; // メッセージウィンドウ閉じる
    
                Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                Gvar.var_793 = 4;
                Gvar.var_785 = 1;
                Gvar.var_786 = 1;
                Gvar.var_787 = 1;
                Gvar.var_629 = 1;
                await Func.func821();
                await Func.func166();
                return;
            }
        }
        if (Gvar.key_X_on == 1) {
            Gvar.var_198 = 0; // メッセージウィンドウ閉じる

            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            Gvar.var_512 = 0;
            await Func.func051(); // キー入力待ち処理
            await Func.func057(); // メニュー画面の"資料"の処理 (ハイスコア、コミックス、死因リスト、敵図鑑)
            return;
        }
        await Func.func820();
        return;
}

export {func820}
