/**
 * func481 — func481 おそらくバグ取り用の関数か? console.log を使用して developper tools の Console へ 1234123 を表示。
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func481(this: any) { // Ver0.1309にて使用しないように変更。
        Adap.dbgprt(481);
        Gvar.var_233[0] = Gvar.var_78[Gvar.var_2044];
        Gvar.var_78[Gvar.var_2044].Var0 = 1234123;
        console.log(Gvar.var_233[0].Var0);
        return;
}

export {func481}
