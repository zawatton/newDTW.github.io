/**
 * func736 — func736 岸辺露伴に話しかけた時の初期化処理
 *
 * (org原典: newDTW_func7)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 旧 func736
async function func736(this: any) {
        Adap.dbgprt(736);
        Gvar.var_374 = 1;
        Gvar.var_772 = 1;
        Gvar.var_777 = 1;
        for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_777++;
        }
        Gvar.var_777 = 0;
        Gvar.var_772 = 0;
        Gvar.var_1201 = 1;
        await Func.func737(); // 岸辺露伴に話しかけた時の選択処理？
}

export {func736}
