/**
 * func108 — func108 BGM用mp3ファイル再生停止
 *
 * (org原典: newDTW_audio)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// 旧 func108
async function func108(this: any) {
        Adap.dbgprt(108);
        Adap.DMSTOP(); // BGM停止関数
        return;
}

export {func108}
