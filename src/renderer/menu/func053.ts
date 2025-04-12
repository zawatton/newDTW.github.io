import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// メニュー画面呼び出し
async function func053(this: any) {
        Adap.dbgprt(53);
        await Func.func337(); // メッセージ表示処理(自動)
        await Func.func080(); // 各キー入力確認
        if (Gvar.key_X_on == 1) { // キーXを押すとメニュー画面を閉じる
            Gvar.var_195 = 0;
            Gvar.var_196 = 0; // Mフラグ:メニュー画面 Func.func054
            await Func.func009(); // ディアボロ側ターン処理(ループ処理)
            return;
        }
        if (Gvar.var_259 == 1 && Gvar.var_248 == 1) { // var_259:入力判定[↓]
            Gvar.var_246 = 45 + 18;
            Gvar.var_248 = 2;
            Adap.DSPLAY(100); // アイテム選択時の効果音
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
            await Func.func053(); // メニュー画面呼び出し
            return;
        }
        if (Gvar.var_259 == 1 && Gvar.var_248 == 2) { // var_259:入力判定[↓]
            await Func.func053(); // メニュー画面呼び出し
            return;
        }
        if (Gvar.var_255 == 1 && Gvar.var_248 == 1) { // var_255:入力判定[↑]
            await Func.func053(); // メニュー画面呼び出し
            return;
        }
        if (Gvar.var_255 == 1 && Gvar.var_248 == 2) { // var_255:入力判定[↑]
            Gvar.var_246 = 45;
            Gvar.var_248 = 1;
            Adap.DSPLAY(100); // アイテム選択時の効果音
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
            await Func.func053(); // メニュー画面呼び出し
            return;
        }
        if (Gvar.var_254 == 1 && Gvar.var_247 == 2) {
            Gvar.var_245 = 19;
            Gvar.var_247 = 1;
            Adap.DSPLAY(100); // アイテム選択時の効果音
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
            await Func.func053(); // メニュー画面呼び出し
            return;
        }
        if (Gvar.var_254 == 1 && Gvar.var_247 == 1) {
            await Func.func053(); // メニュー画面呼び出し
            return;
        }
        if (Gvar.var_257 == 1 && Gvar.var_247 == 1) {
            Gvar.var_245 = 19 + 48;
            Gvar.var_247 = 2;
            Adap.DSPLAY(100); // アイテム選択時の効果音
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
            await Func.func053(); // メニュー画面呼び出し
            return;
        }
        if (Gvar.var_257 == 1 && Gvar.var_247 == 2) {
            await Func.func053(); // メニュー画面呼び出し
            return;
        }
        // Gvar.var_247 列、var_248 行?
        if (Gvar.var_247 == 1 && Gvar.var_248 == 1) {
            Gvar.var_497 = 1;
        }
        if (Gvar.var_247 == 1 && Gvar.var_248 == 2) {
            Gvar.var_497 = 2;
        }
        if (Gvar.var_247 == 2 && Gvar.var_248 == 1) {
            Gvar.var_497 = 3;
        }
        if (Gvar.var_247 == 2 && Gvar.var_248 == 2) {
            Gvar.var_497 = 4;
        }
        if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) { // メニュー画面開いた状態(Gvar.key_A_on == 1)で、キーZを押したら
            if (Gvar.var_497 == 1) { // Gvar.var_497 = 1 は道具
                Gvar.var_195 = 0;
                Gvar.var_196 = 0;
                Gvar.item_page_number = 1;
                Gvar.Y_axis_item_position = 45;
                Gvar.var_225 = 1;
                Gvar.var_223 = Gvar.var_224 + 10;
                Gvar.var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
                Gvar.var_230 = 45;
                Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                await Func.func051(); // キー入力待ち処理
                Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
                await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                return;
            }
            if (Gvar.var_497 == 2) { // Gvar.var_497 = 2 は足元
                Gvar.var_195 = 0;
                Gvar.var_196 = 0;
                Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                await Func.func051(); // キー入力待ち処理
                await Func.func064(); // 足元確認呼び出し
                return;
            }
            if (Gvar.var_497 == 3) { // Gvar.var_497 = 3 は状態
                Gvar.var_195 = 0;
                Gvar.var_196 = 0;
                Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                await Func.func051(); // キー入力待ち処理
                Gvar.var_498 = 1;
                await Func.func380(); // 状態異常確認呼び出し
                return;
            }
            if (Gvar.var_497 == 4) { // Gvar.var_497 = 4 は設定
                Gvar.var_195 = 0;
                Gvar.var_196 = 0;
                Gvar.var_499 = 1; // Mフラグ:設定画面 Func.func056
                Gvar.var_500 = 0;
                Gvar.var_245 = 19;
                Gvar.var_246 = 45;
                Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                await Func.func051(); // キー入力待ち処理
                await Func.func055(); // 設定画面(メニュー画面)呼び出し  // 設定画面(メニュー画面)呼び出し
                return;
            }
        }
        await Func.func053(); // メニュー画面呼び出し
        return;
}

export {func053}
