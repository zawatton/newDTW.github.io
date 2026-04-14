/**
 * func674 — func674 不明
 *
 * (org原典: newDTW_func6)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func674(this: any) {
        Adap.dbgprt(674);
        Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
        Adap.pos(Gvar.var_2400, 290);
        Adap.gcopy(8, 40, 0, 230, 40);
        return;
}

export {func674}
