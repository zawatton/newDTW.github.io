/**
 * func779 — func779 岸辺露伴に話しかけた時のメッセージ処理
 *
 * (org原典: newDTW_func7)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 旧 func779
async function func779(this: any) {
        Adap.dbgprt(779);

        await Func.setMessage("グッド！",
                               "", 7, true, true, true);

        await Func.setMessage("よろしく頼むよ。",
                                "", 7, true, true, true);

        Gvar.var_993 = 1; // ディアボロの試練解放フラグON
        await Func.func051(); // キー入力待ち処理
        Gvar.var_198 = 0; // メッセージウィンドウ閉じる
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
}

export {func779}
