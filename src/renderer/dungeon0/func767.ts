/**
 * func767 — func767 ディアボロの試練の入り口(フラグ前は壁)へ話しかけた時の動作処理
 *
 * (org原典: newDTW_func7)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// ディアボロの試練の入り口(フラグ前は壁)へ話しかけた時の動作処理
// 旧 func767
async function func767(this: any) {
        Adap.dbgprt(767);
        Gvar.var_243 = 0;
        // Gvar.var_526 >= 1 ディアボロの試練解放フラグがON
        if (Gvar.var_526 >= 1 && Gvar.var_993 >= 1) { // Gvar.var_993 >= 1 ディアボロの試練解放フラグがONなら
            await Func.func051(); // キー入力待ち処理
            await Func.func0887(); // ディアボロの試練の入り口へ入ろうとした際のメッセージ処理
            return;
        }
        Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音

        // ディアボロの試練解放フラグがON
        if (Gvar.var_526 >= 1 && Gvar.var_993 == 0) {
            await Func.setMessage("壁に穴が開いている。",
                                   "", 7, true, false, false);

            await Func.func051(); // キー入力待ち処理
            Gvar.var_198 = 0; // メッセージウィンドウ閉じる
            await Func.func009(); // ディアボロ側ターン処理(ループ処理)
            return;
        }
        await Func.setMessage("壁に写真や資料が貼り付いている。",
                               "", 7, true, false, false);
        await Func.func051(); // キー入力待ち処理
        Gvar.var_198 = 0; // メッセージウィンドウ閉じる
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
}

export {func767}
