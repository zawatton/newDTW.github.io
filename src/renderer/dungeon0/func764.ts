/**
 * func764 — func764 不明
 *
 * (org原典: newDTW_func7)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 旧 func764
async function func764(this: any) {
        Adap.dbgprt(764);
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
}

export {func764}
