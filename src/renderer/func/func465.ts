/**
 * func465 — func465 アイテムを使用する時の動作処理 (特定アイテムにカーソルを合わせ キー "Z" を押した時の処理)
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func465(this: any) {
        Adap.dbgprt(465);
        await Func.func337(); // メッセージ表示処理(自動)
        await Func.func080(); // 各キー入力確認
        if (Gvar.key_X_on == 1) {
            Gvar.var_221 = 1;
            Gvar.var_234 = 0;
            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            await Func.func051(); // キー入力待ち処理
            await Func.func462(); // アイテムidごとに区分分け関数
            return;
        }
        if (Gvar.var_259 == 1 && Gvar.var_2043 == 1) { // var_259:入力判定[↓]
            Gvar.var_246 = Gvar.var_246 + 17;
            Gvar.var_2043 = 2;
            Adap.DSPLAY(100); // アイテム選択時の効果音
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
        }
        if (Gvar.var_255 == 1 && Gvar.var_2043 == 2) { // var_255:入力判定[↑]
            Gvar.var_246 = Gvar.var_246 - 17;
            Gvar.var_2043 = 1;
            Adap.DSPLAY(100); // アイテム選択時の効果音
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
        }
        if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            if (Gvar.var_2043 == 1) {
                Gvar.var_221 = 0;
                Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
                Gvar.var_231 = 0;
                await Func.func511(); // 各discごとの発動動作処理 (スタンド能力)
                return;
            }
            if (Gvar.var_2043 == 2) {
                Gvar.var_221 = 1;
                Gvar.var_234 = 0;
                await Func.func051(); // キー入力待ち処理
                await Func.func462(); // アイテムidごとに区分分け関数
                return;
            }
        }
        await Func.func465(); // アイテムを使用する時の動作処理 (特定アイテムにカーソルを合わせ キー "Z" を押した時の処理)
        return;
}

export {func465}
