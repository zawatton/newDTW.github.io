/**
 * func409 — func409 不明
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func409(this: any) {
        Adap.dbgprt(409);
        if (Gvar.var_171 == 1) {
            await Func.func424();
            if (Gvar.var_1886 >= 1) {
                await Func.func425();
                return;
            }
        }
        await Func.func410(); // 装備したdiscを投げる時(取り外す際)の動作処理
}

export {func409}
