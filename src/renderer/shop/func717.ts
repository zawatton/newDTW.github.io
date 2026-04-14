/**
 * func717 — func717 不明
 *
 * (org原典: newDTW_func7)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 旧 func717
async function func717(this: any) {
        Adap.dbgprt(717);
        Gvar.var_198 = 0; // メッセージウィンドウ閉じる
        Gvar.var_300 = 0;
        Gvar.var_1202 = 0;
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {func717}
