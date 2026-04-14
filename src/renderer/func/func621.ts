/**
 * func621 — func621 不明
 *
 * (org原典: newDTW_func6)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func621(this: any) {
        Adap.dbgprt(621);
        if (Gvar.var_1238 >= 1) {
            Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
            Adap.pos((Gvar.var_83[Gvar.var_314].Var1 - Gvar.var_66 + 4) * 40, (Gvar.var_83[Gvar.var_314].Var2 - Gvar.var_67 + 4) * 40 - 10);
            Adap.gcopy(3, 640, 360, 40, 40);
        }
        return;
}

export {func621}
