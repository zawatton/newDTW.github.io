/**
 * func381 — func381 不明
 *
 * (org原典: newDTW_func3)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func381(this: any) {
        Adap.dbgprt(381);
        await Func.func080(); // 各キー入力確認
        if (Gvar.var_254 == 1) {
            if (Gvar.var_1721 == 1) {
                Gvar.var_1721 = 1;
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func381();
                return;
            }
            if (Gvar.var_1721 == 2) {
                Gvar.var_1721 = 1;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func381();
                return;
            }
            if (Gvar.var_1721 == 3) {
                Gvar.var_1721 = 2;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func381();
                return;
            }
            if (Gvar.var_1721 == 4) {
                Gvar.var_1721 = 3;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func381();
                return;
            }
            if (Gvar.var_1721 == 5) {
                Gvar.var_1721 = 4;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func381();
                return;
            }
            await Func.func337(); // メッセージ表示処理(自動)
        }
        if (Gvar.var_257 == 1) {
            if (Gvar.var_1721 == 4 && Gvar.var_1707 >= 54) {
                Gvar.var_1721 = 5;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func381();
                return;
            }
            if (Gvar.var_1721 == 3 && Gvar.var_1707 >= 41) {
                Gvar.var_1721 = 4;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func381();
                return;
            }
            if (Gvar.var_1721 == 2 && Gvar.var_1707 >= 28) {
                Gvar.var_1721 = 3;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func381();
                return;
            }
            if (Gvar.var_1721 == 1 && Gvar.var_1707 >= 15) {
                Gvar.var_1721 = 2;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func381();
                return;
            }
            await Func.func337(); // メッセージ表示処理(自動)
        }
        if (Gvar.key_X_on == 1) {
            Gvar.var_498 = 0;

            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            await Func.func009(); // ディアボロ側ターン処理(ループ処理)
            return;
        }
        await Func.func337(); // メッセージ表示処理(自動)
        await Func.func381();
        return;
}

export {func381}
