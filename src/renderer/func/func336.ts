/**
 * func336 — func336 不明
 *
 * (org原典: newDTW_func3)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func336(this: any) {
        Adap.dbgprt(336);
        Gvar.var_198 = 0; // メッセージウィンドウ閉じる
        Gvar.var_755 = 9;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_755 = 8;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_755 = 7;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_755 = 6;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_755 = 5;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_755 = 4;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_755 = 3;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_755 = 2;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_755 = 1;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_755 = 0;
        await Func.func337(); // メッセージ表示処理(自動)
        return;
}

export {func336}
