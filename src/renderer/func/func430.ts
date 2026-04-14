/**
 * func430 — func430 配列宣言処理
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func430(this: any) {
        Adap.dbgprt(430);
        if (Gvar.var_476[Gvar.var_225] == 1) {
            Gvar.var_476 = Adap.dim(40);
            Gvar.var_580 = Gvar.var_580 - Gvar.var_894;
            Gvar.var_894 = 0;
            Gvar.kougeki_disc_id  = 0;
            await Func.func431(); // BGM選曲関数呼び出し
            await Func.func494();
        }
        if (Gvar.var_477[Gvar.var_225] == 1) {
            Gvar.var_477 = Adap.dim(40);
            Gvar.var_581 = Gvar.var_581 - Gvar.var_895;
            Gvar.var_895 = 0;
            Gvar.bougyo_disc_id = 0;
            await Func.func431(); // BGM選曲関数呼び出し
            await Func.func494();
        }
        if (Gvar.var_479[Gvar.var_225] == 1) {
            Gvar.var_479 = Adap.dim(40);
            Gvar.var_250 = 0;
            Gvar.shageki_disc_id = 0;
            await Func.func431(); // BGM選曲関数呼び出し
            await Func.func494();
        }
        if (Gvar.var_478[Gvar.var_225] == 1) {
            Gvar.var_478 = Adap.dim(40);
            Gvar.nouryoku_disc_id = 0;
            await Func.func431(); // BGM選曲関数呼び出し
            await Func.func494();
        }
        return;
}

export {func430}
