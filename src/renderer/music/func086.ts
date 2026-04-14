/**
 * func086 — func086 BGM上限設定処理 (最大値:150)
 *
 * (org原典: newDTW_audio)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// 旧 func086
async function func086(this: any) {
        Adap.dbgprt(86);
        Gvar.se_volume = Gvar.se_volume + 1;
        if (Gvar.se_volume >= 150) { // Ver0.1310で値を修正 (100 → 150)
            Gvar.se_volume = 150; // Ver0.1310で値を修正 (100 → 150)
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

export {func086}
