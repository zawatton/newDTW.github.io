/**
 * func781 — func781 岸辺露伴に話しかけた時のメッセージ処理
 *
 * (org原典: newDTW_func7)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 旧 func781
async function func781(this: any) {
        Adap.dbgprt(781);
        Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
        await Func.setMessage("露伴に「ﾎﾞﾍﾐｱﾝ･ﾗﾌﾟｿﾃﾞｨのDISC」を",
                               "見せてあげますか？", 7, true, false, false);

        await Func.func051(); // キー入力待ち処理
        Gvar.var_245 = 19;
        Gvar.var_246 = 45;
        Gvar.var_546 = 1;
        Gvar.var_3157 = 1;
        Gvar.var_548 = 1; // 選択肢処理フラグON
        await Func.func0898(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
        return;
}

export {func781}
