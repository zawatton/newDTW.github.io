/**
 * func769 — func769 サヴェジガーデン作戦の鳩へ話しかけた時の動作処理
 *
 * (org原典: newDTW_func7)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// サヴェジガーデン作戦の鳩へ話しかけた時の動作処理
// 旧 func769
async function func769(this: any) {
        Adap.dbgprt(769);
        Gvar.var_243 = 0;
        Gvar.var_3148 = Gvar.var_314;
        await Func.setMessage("サヴェジガーデン作戦だ！",
                               "", 7, true, false, false);

        await Func.setMessage("アイテムを倉庫に送りますか？",
                               "", 7, true, false, false);
        
        await Func.func051(); // キー入力待ち処理
        Gvar.var_3149 = 0;
        Gvar.var_245 = 19;
        Gvar.var_246 = 45;
        Gvar.var_546 = 1;
        Gvar.var_3150 = 1;
        Gvar.var_548 = 1; // 選択肢処理フラグON
        await Func.func0898(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
        return;
}

export {func769}
