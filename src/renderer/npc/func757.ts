import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// キャラに話しかけた時のメッセージ(コメントなし)
// 旧 func757
async function func757(this: any) {
        Adap.dbgprt(757);
        Gvar.var_243 = 0;
        await Func.setMessage("「……」",
                                "", 7, true, false, true);

        await Func.setMessage("「……」",
                                "", 7, true, false, true);

        await Func.func051(); // キー入力待ち処理
        Gvar.var_198 = 0; // メッセージウィンドウ閉じる
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
}

export {func757}
