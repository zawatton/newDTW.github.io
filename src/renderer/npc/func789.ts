/**
 * func789 — func789 アバッキオ関係
 *
 * (org原典: newDTW_func7)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// アバッキオセリフ
// 旧 func789
async function func789(this: any) {
        Adap.dbgprt(789);

        await Func.setMessage("ｱﾊﾞｯｷｫ「ところで…茶でも飲むか？」",
                               "", 7, true, false, true);

        await Func.func051(); // キー入力待ち処理
        Gvar.var_245 = 19;
        Gvar.var_246 = 45;
        Gvar.var_546 = 1;
        Gvar.var_3163 = 2;
        Gvar.var_548 = 1; // 選択肢処理フラグON
        await Func.func0898(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
        return;
}

export {func789}
