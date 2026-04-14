/**
 * func794 — func794 ヤク中の少年関係
 *
 * (org原典: newDTW_func7)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// ヤク中の少年
// 旧 func794
async function func794(this: any) {
        Adap.dbgprt(794);
        Gvar.var_243 = 0;
        await Func.setMessage("ﾔｸ中の少年がフラフラと歩いている。",
                               "", 7, true, false, false);

        await Func.func051(); // キー入力待ち処理
        Gvar.var_245 = 19;
        Gvar.var_246 = 45;
        Gvar.var_546 = 1;
        Gvar.var_3147 = 1;
        Gvar.var_548 = 1; // 選択肢処理フラグON
        await Func.func0898(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
        return;
}

export {func794}
