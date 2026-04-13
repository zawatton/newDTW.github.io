import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

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
                Gvar.var_899 = 6;

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
        }
        if (Gvar.var_259 == 1) { // var_259:入力判定[↓]
            if (Gvar.var_899 == 6) {
                Gvar.var_899 = 0;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ関係呼び出し
                await Func.func337(); // メッセージ関係呼び出し
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
