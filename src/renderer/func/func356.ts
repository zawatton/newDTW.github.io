/**
 * func356 — func356 不明
 *
 * (org原典: newDTW_func3)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func356(this: any) {
        Adap.dbgprt(356);
        Gvar.var_1607 = 1;
        Gvar.var_1608 = 1;
        if (Gvar.var_1609 == 1) {
            Gvar.var_1607 = Gvar.var_1610;
        }
        await Func.func366();
        if (Gvar.var_1038 == 0) {
            await Func.func362();
            return;
        }
        await Func.func361();
        return;
}

export {func356}
