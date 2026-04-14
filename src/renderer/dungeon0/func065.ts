/**
 * func065 — func065 デバック処理用(なくても良い?) 亀の倉庫のジッパー関連機能
 *
 * ヴェネチアホテルや亀、酒場の設定
 *
 * (org原典: newDTW_dungeon0 / DONE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 旧 func065
async function func065(this: any) {
        Adap.dbgprt(65);
        await Func.func066(); // 亀の倉庫のジッパー関連機能
}

export {func065}
