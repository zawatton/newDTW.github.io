/**
 * func483 — アイテム「名前変更」UI 初期化
 *
 * 道具画面で「名前を付ける」を選んだ際の入力ボックス座標/状態の準備。
 * UI 上の文字入力位置・余白・カーソル変数群と、入力受け取り用の sdim/dim 配列を確保。
 *
 * リファクタ履歴:
 *   - 18本の Gvar 単純代入をテーブル形式 + 1ループに圧縮
 *   - 元 33行 → 約25行
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

/** UI 状態系 Gvar の (キー, 初期値) テーブル */
const INIT_VARS: ReadonlyArray<readonly [string, number]> = [
    ['var_1203', 1], ['var_2125', 25], ['var_2126', 120], ['var_2127', 20],
    ['var_2128', 0], ['var_2129', 0],  ['var_2130', 26],  ['var_2131', 10],
    ['var_2132', 0], ['var_2123', 0],  ['var_2135', 1],   ['var_2136', 0],
] as const;

async function func483(this: any): Promise<void> {
    Adap.dbgprt(483);
    await Func.func051(); // キー入力待ち
    Gvar.open_item_menue = 0; // 道具画面表示フラグ off

    for (const [k, v] of INIT_VARS) (Gvar as any)[k] = v;

    Gvar.var_2133 = Adap.sdim(30, 30); // 文字列入力バッファ
    Gvar.var_2134 = Adap.dim(30);      // 数値入力バッファ
}

export { func483 }
