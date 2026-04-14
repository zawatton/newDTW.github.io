import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// func193: システム設定メニュー入力処理
// var_899 (0-7): メニューカーソル位置
//   0=ゲームスピード, 1=メッセージ色, 2=キーコンフィグ, 3=ゲームパッド,
//   4=画面サイズ, 5=マップ色変更, 6=通信モード, 7=言語設定
async function func193(this: any) {
        Adap.dbgprt(193);
        await Func.func337(); // メッセージ関係呼び出し
        await Func.func080(); // 各キー入力確認
        if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {

            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            if (Gvar.var_899 == 0) {
                await Func.func051();
                Gvar.var_900 = 1;
                await Func.func194();
                return;
            }
            if (Gvar.var_899 == 1) {
                await Func.func051();
                Gvar.var_901 = 1;
                await Func.func202(); // メッセージ色設定処理(デバッグ処理)
                return;
            }
            if (Gvar.var_899 == 2) {
                await Func.func051();
                Gvar.var_902 = 1;
                await Func.func208();
                return;
            }
            if (Gvar.var_899 == 3) {
                await Func.func051();
                Gvar.var_903 = 1;
                await Func.func215();
                return;
            }
            if (Gvar.var_899 == 4) {
                await Func.func051();
                Gvar.var_904 = 1;
                await Func.func205();
                return;
            }
            if (Gvar.var_899 == 5) {
                await Func.func051();
                Gvar.var_905 = 1;
                await Func.func198();
                return;
            }
            if (Gvar.var_899 == 6 && Gvar.dungeon_number != 99 && Gvar.var_637 == 0) {
                await Func.func051();
                await Func.func0984();
                return;
            }
            if (Gvar.var_899 == 7) {
                await Func.func051();
                Gvar.lang_menu_open = 1; // lang_menu_open: 言語設定サブメニュー表示フラグ
                await Func.funcLangInit(); // 言語設定初期化→入力処理へ
                return;
            }
        }
        if (Gvar.key_X_on == 1) {

            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            Gvar.var_509 = 0;
            await Func.func051();
            await Func.func055();
            return;
        }
        if (Gvar.var_255 == 1) { // var_255:入力判定[↑]
            if (Gvar.var_899 == 0) {
                Gvar.var_899 = 7; // 先頭から末尾(言語)へループ

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ関係呼び出し
                await Func.func337(); // メッセージ関係呼び出し
                await Func.func193();
                return;
            }
            if (Gvar.var_899 == 1) {
                Gvar.var_899 = 0;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ関係呼び出し
                await Func.func337(); // メッセージ関係呼び出し
                await Func.func193();
                return;
            }
            if (Gvar.var_899 == 2) {
                Gvar.var_899 = 1;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ関係呼び出し
                await Func.func337(); // メッセージ関係呼び出し
                await Func.func193();
                return;
            }
            if (Gvar.var_899 == 3) {
                Gvar.var_899 = 2;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ関係呼び出し
                await Func.func337(); // メッセージ関係呼び出し
                await Func.func193();
                return;
            }
            if (Gvar.var_899 == 4) {
                Gvar.var_899 = 3;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ関係呼び出し
                await Func.func337(); // メッセージ関係呼び出し
                await Func.func193();
                return;
            }
            if (Gvar.var_899 == 5) {
                Gvar.var_899 = 4;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ関係呼び出し
                await Func.func337(); // メッセージ関係呼び出し
                await Func.func193();
                return;
            }
            if (Gvar.var_899 == 6) {
                Gvar.var_899 = 5;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ関係呼び出し
                await Func.func337(); // メッセージ関係呼び出し
                await Func.func193();
                return;
            }
            if (Gvar.var_899 == 7) {
                Gvar.var_899 = 6;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                await Func.func337();
                await Func.func193();
                return;
            }
        }
        if (Gvar.var_259 == 1) { // var_259:入力判定[↓]
            if (Gvar.var_899 == 7) {
                Gvar.var_899 = 0; // 末尾(言語)から先頭へループ

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ関係呼び出し
                await Func.func337(); // メッセージ関係呼び出し
                await Func.func193();
                return;
            }
            if (Gvar.var_899 == 6) {
                Gvar.var_899 = 7;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                await Func.func337();
                await Func.func193();
                return;
            }
            if (Gvar.var_899 == 5) {
                Gvar.var_899 = 6;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ関係呼び出し
                await Func.func337(); // メッセージ関係呼び出し
                await Func.func193();
                return;
            }
            if (Gvar.var_899 == 4) {
                Gvar.var_899 = 5;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ関係呼び出し
                await Func.func337(); // メッセージ関係呼び出し
                await Func.func193();
                return;
            }
            if (Gvar.var_899 == 3) {
                Gvar.var_899 = 4;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ関係呼び出し
                await Func.func337(); // メッセージ関係呼び出し
                await Func.func193();
                return;
            }
            if (Gvar.var_899 == 2) {
                Gvar.var_899 = 3;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ関係呼び出し
                await Func.func337(); // メッセージ関係呼び出し
                await Func.func193();
                return;
            }
            if (Gvar.var_899 == 1) {
                Gvar.var_899 = 2;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ関係呼び出し
                await Func.func337(); // メッセージ関係呼び出し
                await Func.func193();
                return;
            }
            if (Gvar.var_899 == 0) {
                Gvar.var_899 = 1;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ関係呼び出し
                await Func.func337(); // メッセージ関係呼び出し
                await Func.func193();
                return;
            }
        }
        await Func.func193();
        return;
}

export {func193}
