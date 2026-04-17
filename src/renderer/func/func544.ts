/**
 * func544 — func544 不明
 *
 * (org原典: newDTW_func5)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import { tf } from '../i18n'

async function func544(this: any) {
        Adap.dbgprt(544);
        Gvar.var_2478 = 10;
        Gvar.var_211 = Gvar.var_211 - 10;
        Gvar.var_208 = Gvar.var_2478 + Gvar.var_208;
        if (Gvar.var_211 <= 0) {
            Gvar.var_211 = 0;
            Gvar.var_356 = 235;
        }
        await Func.setMessage("自分の撃った弾丸が脳天に命中！", tf("{0}のダメージを喰らった。", Gvar.var_2478), 10, false, false, false);
        Gvar.var_108 = 1;
        Gvar.var_747 = 1;
        Adap.DSPLAY(105);
        await Func.AutoDraw(10);
        Gvar.var_108 = 0;
        return;
}

export {func544}
