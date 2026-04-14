/**
 * func742 — func742 イギー関係(砂DIOを仕込ませた)
 *
 * (org原典: newDTW_func7)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 旧 func742
async function func742(this: any) {
        Adap.dbgprt(742);
        Gvar.var_180 = 1;
        await Func.setMessage("ｲｷﾞｰは足元に砂のDIOを潜ませた。",
                               "", 7, false, false, false);
        Gvar.var_768 = 1;
        Gvar.var_1550 = Gvar.var_3128;
        Gvar.var_230 = Gvar.var_3129;
        Gvar.var_2419 = 1;
        await Func.func536();
        Gvar.var_2419 = 0;
        Gvar.var_768 = 0;
        await Func.AutoDraw(5);
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {func742}
