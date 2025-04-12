import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// 承太郎を倒した時のメッセージ処理 (仕掛中)
async function func633(this: any) {
        Adap.dbgprt(633);
        Gvar.var_1720 = 1;
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            if (Gvar.var_992[Gvar.var_1720] == Gvar.var_2921) {
                Gvar.var_992[Gvar.var_1720] = 0;
            }
            Gvar.var_1720++;
        }
        return;
}

export {func633}
