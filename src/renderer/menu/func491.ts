/**
 * func491 — アイテム名入力 確定: バッファ→文字列化 → ターン進行
 *
 * func484 (アイテム名入力UI 入力ループ) で「決定」した時の確定処理。
 * 入力バッファ var_2133[1..20] の 20文字を結合して var_2153 に格納し、
 * 関連フラグをリセットしてから func009 (ディアボロ側ターン処理) を呼び出す。
 *
 * リファクタ履歴:
 *   - var_2152 ループカウンタ (1..20) + 文字列連結 → slice + join に圧縮
 *   - 機能不明 → 機能特定 (アイテム名入力 確定)
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func491(this: any): Promise<void> {
    Adap.dbgprt(491);
    Gvar.var_2153 = Gvar.var_2133.slice(1, 21).join('');
    Gvar.var_2152 = 21; // 元コードのループ後の値 (1 + 20) — 後続参照に備え一応保持
    Gvar.var_1203 = 0;
    Gvar.var_2163 = 0;
    await Func.func009(); // ディアボロ側ターン処理(ループ処理)
}

export { func491 }
