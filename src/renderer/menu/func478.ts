/**
 * func478 — 足元アイテム (var_77/var_78) を仮想スロット var_233[0] にロード
 *
 * 道具画面の「足元」ページで操作する際、足元の生データを通常の所持アイテム配列
 * の slot 0 (足元用予約スロット) に複製しておき、共通 UI で扱えるようにする。
 *
 * 入力 (Gvar):
 *   var_66, var_67     : ﾌﾟﾚｲﾔｰの現在マップ座標
 *   var_77[x][y]       : 床アイテム ID (0=なし)
 *   var_78[id]         : 床アイテムの実体データ (Var0..Var29)
 *
 * 出力:
 *   var_321            : 足元アイテム ID (var_77[var_66][var_67])
 *   var_233[0]         : 足元アイテムの 25 フィールドコピー
 *   belongings_item_list : 足元アイテム ID
 *
 * リファクタ履歴:
 *   - 25 フィールドコピーを ITEM_FIELDS テーブル + 1ループに圧縮
 *   - 元 43行 → 約30行
 *   - "不明" → 機能特定済みコメント
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

/** var_78 ↔ var_233 で複製する Var{N} 添字一覧 (Var0/3-9/11-29) */
const ITEM_FIELDS: ReadonlyArray<number> = [
    0, 3, 4, 5, 6, 7, 8, 9,
    11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
] as const;

async function func478(this: any): Promise<void> {
    Adap.dbgprt(478);

    Gvar.var_321 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
    Gvar.belongings_item_list = Gvar.var_78[Gvar.var_321].Var0;

    const src = Gvar.var_78[Gvar.var_321] as any;
    const dst = Gvar.var_233[0] as any;
    for (const n of ITEM_FIELDS) {
        dst['Var' + n] = src['Var' + n];
    }
}

export { func478 }
