import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// ゲームスピード設定フラグ
async function func194(this: any) {
        Adap.dbgprt(194);
        if (Gvar.animationDelay == 30) {
            Gvar.var_906 = 0;
        }
        if (Gvar.animationDelay == 40) {
            Gvar.var_906 = 1;
        }
        if (Gvar.animationDelay == 50) {
            Gvar.var_906 = 2;
        }
        if (Gvar.animationDelay == 60) {
            Gvar.var_906 = 3;
        }
        if (Gvar.animationDelay == 70) {
            Gvar.var_906 = 4;
        }
        await Func.func195(); // ゲームスピード設定項目動作処理
}

export {func194}
