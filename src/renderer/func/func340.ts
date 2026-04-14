/**
 * func340 — func340 キー入力による選択処理
 *
 * (org原典: newDTW_func3)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// キー入力による選択処理
// 「ユーザーが新規のキー入力で選択を確定」するための関数
async function func340(this: any) {
        Adap.dbgprt(680);
        Gvar.var_765 = 1;
        Gvar.var_766 = 0;

        // (A) まず前の押しっぱなしキーを離すのを待つ
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func080(); // 各キー入力確認
            if (Gvar.key_Z_on == 0 && Gvar.key_X_on == 0 && Gvar.key_A_on == 0 && Gvar.key_C_on == 0) {
                break;
            }
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_300 = 1;
            Gvar.var_198 = 1; // メッセージウィンドウ開く
            Gvar.var_766++;
            if (Gvar.var_766 == 6) {
                Gvar.var_766 = 0;
            }
        }
        Gvar.var_766 = 0;
        // (B) 次に、新しくキー(Z/X/A/S/C など)が押されるまで待つ
        for (let cnt1 = 0; true; ++cnt1) {
            await Func.func080(); // 各キー入力確認
            if (Gvar.key_Z_on == 1) { // キーZ入力確認
                break;
            }
            if (Gvar.key_X_on == 1) {
                break;
            }
            if (Gvar.key_A_on == 1) { // キーA入力確認
                break;
            }
            if (Gvar.key_S_on == 1) { // キーS入力確認
                break;
            }
            if (Gvar.key_Shift_on == 1) { // キーShift入力確認
                break;
            }
            if (Gvar.key_C_on == 1) { // キーC入力確認
                break;
            }
            if (Gvar.key_F_on == 1) { // Ver0.1401にて追加。キーF入力確認
                break;
            }
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_300 = 1;
            Gvar.var_198 = 1; // メッセージウィンドウ開く
            Gvar.var_766++;
            if (Gvar.var_766 == 6) {
                Gvar.var_766 = 0;
            }
        }
        Gvar.var_766 = 0;
        Gvar.var_765 = 0;
        return;
}

export {func340}
