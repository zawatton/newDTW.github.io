/**
 * func765 — func765 ヴェネチアホテルの地球儀へ話しかけた時の動作処理
 *
 * (org原典: newDTW_func7)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// ヴェネチアホテルの地球儀へ話しかけた時の動作処理
// 旧 func765
async function func765(this: any) {
        Adap.dbgprt(765);
        Gvar.var_243 = 0;
        Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
        await Func.setMessage("地球儀が置いてある。",
                               "", 7, true, false, false);

        if (Gvar.var_523 >= 1) {  // 一巡後の世界へ行けるようになった時のフラグ? 地球儀が回転
            await Func.setMessage("地球儀がすごい速度で回転している。",
                                   "", 7, true, false, false);
        }
        await Func.func051(); // キー入力待ち処理
        Gvar.var_198 = 0; // メッセージウィンドウ閉じる
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
}

export {func765}
