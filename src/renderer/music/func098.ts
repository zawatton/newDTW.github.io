/**
 * func098 — func098 SE(ID103)選曲
 *
 * (org原典: newDTW_audio)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// 旧 func098
async function func098(this: any) {
        Adap.dbgprt(98);
        Gvar.se_file_name = 103;
        Adap.DSPLAY(Gvar.se_file_name);
        return;
}

export {func098}
