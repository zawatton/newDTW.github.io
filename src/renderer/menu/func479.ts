/**
 * func479 — 足元アイテムの実体を消去 (var_77 マップから削除 + var_78 スロット解放)
 *
 * func321 で保存してあった足元アイテム ID (Gvar.var_321) を消す。
 * 床マップ (var_77) と実体配列 (var_78) の両方をクリア。
 *
 * 入力 (Gvar):
 *   var_321            : 削除対象の var_78 スロット ID (func478 で記録済)
 *
 * 動作:
 *   var_77[var_78[id].Var1][var_78[id].Var2] = 0   // マップ座標を空に
 *   var_78[id].Var0 = 0   // 実体 ID を空に
 *   var_78[id].Var1 = 0   // X 座標を空に
 *   var_78[id].Var2 = 0   // Y 座標を空に
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

async function func479(this: any): Promise<void> {
    Adap.dbgprt(479);
    const slot = Gvar.var_78[Gvar.var_321];
    Gvar.var_2114 = slot.Var1;
    Gvar.var_2115 = slot.Var2;
    Gvar.var_77[Gvar.var_2114][Gvar.var_2115] = 0;
    slot.Var0 = 0;
    slot.Var1 = 0;
    slot.Var2 = 0;
}

export { func479 }
