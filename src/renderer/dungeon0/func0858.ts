/**
 * func0858 — func858 不明
 *
 * (org原典: newDTW_func8)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 旧 func803
async function func0858(this: any) {
    await Func.func337(); // メッセージ表示処理(自動)
    await Func.func080(); // 各キー入力確認
    if (Gvar.key_X_on == 1) {
        Gvar.var_1206 = 0;
        Gvar.var_783 = 0;
        Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
        await Func.func0856();
        await Func.func051(); // キー入力待ち処理
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
    }
    if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {

        Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
        await Func.func051(); // キー入力待ち処理
        await Func.func0860();
        return;
    }
    if (Gvar.var_259 == 1) { // var_259:入力判定[↓]
        if (Gvar.var_225 != Gvar.var_1013) {
            Gvar.Y_axis_item_position = Gvar.Y_axis_item_position + 22;
            Gvar.var_225 = Gvar.var_225 + 1;
            Adap.DSPLAY(100); // アイテム選択時の効果音
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
            await Func.func0858();
            return;
        }
        if (Gvar.var_225 == Gvar.var_1013) {
            Gvar.Y_axis_item_position = 45;
            Gvar.var_225 = 1;
            Adap.DSPLAY(100); // アイテム選択時の効果音
            // ここも間違っている?
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
            await Func.func0858();
            return;
        }
    }
    if (Gvar.var_255 == 1) { // var_255:入力判定[↑]
        if (Gvar.var_225 != 1) {
            Gvar.Y_axis_item_position = Gvar.Y_axis_item_position - 22;
            Gvar.var_225 = Gvar.var_225 - 1;
            Adap.DSPLAY(100); // アイテム選択時の効果音
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
            await Func.func0858();
            return;
        }
        if (Gvar.var_225 == 1) {
            Gvar.Y_axis_item_position = 45 + (Gvar.var_1013 - 1) * 22;
            Gvar.var_225 = Gvar.var_1013;
            Adap.DSPLAY(100); // アイテム選択時の効果音
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
            await Func.func0858();
            return;
        }
    }
    await Func.func0858();
    return;
}

export {func0858}
