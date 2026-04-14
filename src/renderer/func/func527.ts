/**
 * func527 — func527 ボーイⅡマンの発動能力3
 *
 * (org原典: newDTW_func5 / DONE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Stand from '../stand/index'

async function func527(this: any) {
        Adap.dbgprt(527);
        await Func.func337(); // メッセージ表示処理(自動)
        await Func.func080(); // 各キー入力確認
        if (Gvar.var_259 == 1) { // var_259:入力判定[↓]
            if (Gvar.var_2375 == Gvar.var_2376) {
                Gvar.var_2375 = 2;
                Gvar.var_2374 = 157;
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func527();
                return;
            }
            Gvar.var_2375 = Gvar.var_2375 + 1;
            Gvar.var_2374 = Gvar.var_2374 + 20;

            Adap.DSPLAY(100); // アイテム選択時の効果音
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
            await Func.func527();
            return;
        }
        if (Gvar.var_255 == 1) { // var_255:入力判定[↑]
            if (Gvar.var_2375 == 2) {
                Gvar.var_2375 = Gvar.var_2376;
                Gvar.var_2374 = (Gvar.var_2376 - 2) * 20 + 157;
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func527();
                return;
            }
            Gvar.var_2375 = Gvar.var_2375 - 1;
            Gvar.var_2374 = Gvar.var_2374 - 20;

            Adap.DSPLAY(100); // アイテム選択時の効果音
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
            await Func.func527();
            return;
        }
        if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
            Gvar.var_1208 = 0;

            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            await Stand.func526();
            return;
        }
        if (Gvar.key_X_on == 1) {

            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            Gvar.var_1208 = 0;
            Gvar.var_198 = 0; // メッセージウィンドウ閉じる
            Gvar.var_2006 = 1;
            Gvar.item_page_number = 1;
            Gvar.Y_axis_item_position = 45;
            Gvar.var_225 = 1;
            Gvar.var_223 = Gvar.var_224 + 10;
            Gvar.var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
            await Func.func051(); // キー入力待ち処理
            Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
            await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
            return;
        }
        await Func.func527();
        return;
}

export {func527}
