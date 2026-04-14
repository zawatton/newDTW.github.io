/**
 * func0870 — func870 不明
 *
 * (org原典: newDTW_func8)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 旧 func815
async function func0870(this: any) {
    Gvar.wallet = 0;
    Adap.DSPLAY(207);
    Gvar.var_1032 = Gvar.var_1032 - Gvar.var_3190;
    Gvar.var_198 = 0; // メッセージウィンドウ閉じる
    await Func.func0871();
    return;
}

export {func0870}
