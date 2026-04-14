/**
 * func481 — (廃止) デバッグ用のアイテム ID 1234123 注入
 *
 * Ver0.1309 で使用停止。原典では足元アイテム var_78[var_2044] に ID 1234123 を
 * 注入し console.log するだけの開発時動作確認用関数。互換のため残置。
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

async function func481(this: any): Promise<void> {
    Adap.dbgprt(481);
    // (Ver0.1309 で使用停止) — HSP 原典の挙動は維持
    Gvar.var_233[0] = Gvar.var_78[Gvar.var_2044];
    Gvar.var_78[Gvar.var_2044].Var0 = 1234123;
    console.log(Gvar.var_233[0].Var0);
}

export { func481 }
