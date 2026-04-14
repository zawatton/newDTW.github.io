/**
 * func740 — func740 イギー関係
 *
 * (org原典: newDTW_func7)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 旧 func740
async function func740(this: any) {
        Adap.dbgprt(740);
        await Func.setMessage("「フン！」",
                               "", 7, false, false, true);
        await Func.AutoDraw(5);
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {func740}
