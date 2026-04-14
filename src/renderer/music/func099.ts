/**
 * func099 — func099 SE(ID142)選曲
 *
 * (org原典: newDTW_audio)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// 旧 func099
async function func099(this: any) {
        Adap.dbgprt(99);
        Gvar.se_file_name = 142;
        Adap.DSPLAY(Gvar.se_file_name);
        return;
}

export {func099}
