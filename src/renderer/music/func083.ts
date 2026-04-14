/**
 * func083 — func083 効果音上限設定処理 (最大値:137)
 *
 * (org原典: newDTW_audio)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

// 旧 func083
async function func083(this: any) {
        Adap.dbgprt(83);
        Gvar.var_668 = 137;
        await Music.func084();
        return;
}

export {func083}
