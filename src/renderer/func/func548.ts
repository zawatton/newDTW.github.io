/**
 * func548 — func548 地上へ帰還する
 *
 * (org原典: newDTW_func5)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func548(this: any) {
        Adap.dbgprt(548);
        Gvar.var_370 = 0;
        await Func.setMessage("地上に戻りますか？", "", 7, true, false, false);
        await Func.AutoDraw(2);
        Gvar.var_245 = 19;
        Gvar.var_246 = 45;
        Gvar.var_546 = 1;
        Gvar.var_2494 = 1;
        Gvar.var_548 = 1; // 選択肢処理フラグON
        await Func.func0898(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
        return;
}

export {func548}
