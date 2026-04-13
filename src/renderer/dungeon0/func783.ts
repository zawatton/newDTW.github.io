import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// ディアボロの試練解放後、岸辺露伴に話しかけた時のメッセージ処理
// 旧 func783
async function func783(this: any) {
        Adap.dbgprt(783);

        await Func.setMessage("「ﾎﾞﾍﾐｱﾝ･ﾗﾌﾟｿﾃﾞｨのDISC」だ。", "", 7, true, false, true);
        await Func.setMessage("ぼくが行けりゃあ", "すぐに手に入るんだがな…", 7, true, true, true);
        await Func.setMessage("あいにく、", "まだ死にたくないんだ。", 7, true, false, true);

        await Func.func051(); // キー入力待ち処理
        Gvar.var_198 = 0; // メッセージウィンドウ閉じる
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
}

export {func783}
