/**
 * func0874 — func874 不明
 *
 * (org原典: newDTW_func8)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 旧 func819
async function func0874(this: any) {
    await Func.func337(); // メッセージ表示処理(自動)
    await Func.func080(); // 各キー入力確認
    if (Gvar.var_404 >= 1) {
        if (Gvar.var_259 == 1 && Gvar.var_3196 != 4) { // var_259:入力判定[↓]
            Gvar.var_246 = Gvar.var_246 + 16;
            Gvar.var_3196 = Gvar.var_3196 + 1;

            Adap.DSPLAY(100); // アイテム選択時の効果音
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
            await Func.func0874();
            return;
        }
        if (Gvar.var_259 == 1 && Gvar.var_3196 == 4) { // var_259:入力判定[↓]
            Gvar.var_246 = 45;
            Gvar.var_3196 = 0;

            Adap.DSPLAY(100); // アイテム選択時の効果音
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
            await Func.func0874();
            return;
        }
        if (Gvar.var_255 == 1 && Gvar.var_3196 != 0) { // var_255:入力判定[↑]
            Gvar.var_246 = Gvar.var_246 - 16;
            Gvar.var_3196 = Gvar.var_3196 - 1;

            Adap.DSPLAY(100); // アイテム選択時の効果音
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
            await Func.func0874();
            return;
        }
        if (Gvar.var_255 == 1 && Gvar.var_3196 == 0) { // var_255:入力判定[↑]
            Gvar.var_246 = 109;
            Gvar.var_3196 = 4;

            Adap.DSPLAY(100); // アイテム選択時の効果音
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
            await Func.func0874();
            return;
        }
    }
    if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
        if (Gvar.var_3196 == 0) {
            Gvar.var_1204 = 0;
            Gvar.var_198 = 0; // メッセージウィンドウ閉じる

            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            await Func.func051(); // キー入力待ち処理
            await Func.func796();
            return;
        }
        if (Gvar.var_3196 == 1) {
            Gvar.var_1204 = 0;
            Gvar.var_198 = 0; // メッセージウィンドウ閉じる

            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            await Func.func051(); // キー入力待ち処理
            await Func.func797();
            return;
        }
        if (Gvar.var_3196 == 2) {
            Gvar.var_1204 = 0;
            Gvar.var_198 = 0; // メッセージウィンドウ閉じる

            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            await Func.func051(); // キー入力待ち処理
            await Func.func0857();
            return;
        }
        if (Gvar.var_3196 == 3) {
            Gvar.var_1204 = 0;
            Gvar.var_198 = 0; // メッセージウィンドウ閉じる

            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            await Func.func051(); // キー入力待ち処理
            await Func.func0864();
            return;
        }
        if (Gvar.var_3196 == 4) {
            Gvar.var_1204 = 0;
            Gvar.var_198 = 0; // メッセージウィンドウ閉じる

            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            await Func.func051(); // キー入力待ち処理
            await Func.func0868();
            return;
        }
    }
    if (Gvar.key_X_on == 1) {
        Gvar.var_1204 = 0;
        Gvar.var_198 = 0; // メッセージウィンドウ閉じる

        Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
        await Func.func051(); // キー入力待ち処理
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
    }
    await Func.func0874();
    return;
}

export {func0874}
