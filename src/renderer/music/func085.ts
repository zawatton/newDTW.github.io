/**
 * func085 — func085 効果音下限設定処理
 *
 * (org原典: newDTW_audio)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// 旧 func085
async function func085(this: any) {
        Adap.dbgprt(85);
        Gvar.se_volume = Gvar.se_volume - 1;
        if (Gvar.se_volume <= 0) {
            Gvar.se_volume = 0;
        }
        Gvar.var_670 = 100;
        for (let cnt1 = 0; cnt1 < Gvar.var_668; ++cnt1) {
            Adap.DSSETVOLUME(Gvar.var_670, Gvar.se_volume);
            Gvar.var_670++;
        }
        Gvar.var_635 = 1;
        Gvar.var_636 = 0;
        Gvar.var_632 = 0;
        Gvar.var_633 = 0;
        return;
}

export {func085}
