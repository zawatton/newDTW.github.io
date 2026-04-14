/**
 * func797 — func797 銀行口座の設定
 *
 * ヴェネチアホテルや亀、酒場の設定
 *
 * (org原典: newDTW_dungeon0 / DONE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 旧 func797
async function func797(this: any) {
        Adap.dbgprt(797);
        Gvar.var_1205 = 2;
        Gvar.var_3170 = 0;
        Gvar.var_3171 = 0;
        Gvar.var_3172 = 0;
        Gvar.var_3173 = 0;
        Gvar.var_3174 = 0;
        Gvar.var_3175 = 0;
        Gvar.var_3176 = 0;
        Gvar.var_3177 = 0;
        Gvar.var_3178 = 0;
        Gvar.var_3179 = 1;
        Gvar.var_3180 = 95;
        await Func.setMessage("" + Gvar.var_1032 + "G 入っています。", "何G 口座から出しますか？", 7, false, false, false);
        await Func.AutoDraw(2);
        await Func.func798();
        return;
}

export {func797}
