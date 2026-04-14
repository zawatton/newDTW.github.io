/**
 * func0867 — func867 不明
 *
 * (org原典: newDTW_func8)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 旧 func812
async function func0867(this: any) {
    Gvar.var_198 = 0; // メッセージウィンドウ閉じる
    Adap.DSPLAY(211);
    Gvar.var_783 = 5;
    await Func.AutoDraw(1);
    Gvar.var_783 = 4;
    await Func.AutoDraw(1);
    Gvar.var_783 = 3;
    await Func.AutoDraw(1);
    Gvar.var_783 = 2;
    await Func.AutoDraw(1);
    Gvar.var_783 = 1;
    await Func.AutoDraw(1);
    Gvar.var_783 = 0;
    await Func.func009(); // ディアボロ側ターン処理(ループ処理)
    return;
}

export {func0867}
