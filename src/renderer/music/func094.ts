/**
 * func094 — func094 メッセージ送りの際の効果音
 *
 * (org原典: newDTW_audio)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// メッセージ送りの際の効果音
// 旧 func094
async function func094(this: any) {
        Adap.dbgprt(94);
        Adap.DSPLAY(173);
        return;
}

export {func094}
