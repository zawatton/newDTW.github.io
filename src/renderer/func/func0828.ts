/**
 * func0828 — func828 ディアボロの試練の入り口へ入ろうとした際のメッセージ処理
 *
 * ヴェネチアホテルや亀、酒場の設定
 *
 * (org原典: newDTW_dungeon0 / DONE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func0828(this: any) {
    Adap.dbgprt(828);
    Gvar.var_2229 = 1;
    Gvar.var_252 = 1;
    Gvar.var_253 = 45;
    Gvar.var_250 = 1;
    Gvar.var_248 = Gvar.var_249 + 10;
    Gvar.var_245 = 0;
    await Func.func0054();
    Gvar.var_222 = 1;
    await Func.func0493(); return;
}

export { func0828 }
