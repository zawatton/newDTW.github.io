/**
 * func475 — 足元アイテム書き込み (var_233[0] → var_78[id])
 *
 * func478 で var_77/var_78 から var_233[0] にロードしたアイテムを再び
 * 床側 (var_78) へ書き戻す。道具画面で足元アイテムを編集 (合成・捨てる等) 完了時に呼ぶ。
 *
 * 入力:
 *   var_66, var_67, var_236, var_237 : マップ座標 (579 ペットショップdisc は別座標)
 *   var_77[x][y]                     : 床アイテム ID (= var_78 スロット番号)
 *   var_233[0]                       : 編集後の足元アイテム
 *
 * 出力:
 *   var_2113                         : 書き込み先の var_78 スロット ID
 *   var_78[var_2113].VarN            : 25 フィールド復元 (Var0/3-9/11-18)
 *
 * 備考: func478 と異なり Var19-29 はコピー対象外 (HSP原典どおり)
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

/** var_233[0] ↔ var_78 で復元する Var{N} 添字一覧 (Var0/3-9/11-18) */
const ITEM_FIELDS: ReadonlyArray<number> = [
    0, 3, 4, 5, 6, 7, 8, 9,
    11, 12, 13, 14, 15, 16, 17, 18,
] as const;

async function func475(this: any): Promise<void> {
    Adap.dbgprt(475);

    Gvar.var_2113 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
    // No = 579 ペットショップのdiscは別座標 (var_236/var_237) を使う
    if (Gvar.belongings_item_list == 579) {
        Gvar.var_2113 = Gvar.var_77[Gvar.var_236][Gvar.var_237];
    }

    const src = Gvar.var_233[0] as any;
    const dst = Gvar.var_78[Gvar.var_2113] as any;
    for (const n of ITEM_FIELDS) {
        dst['Var' + n] = src['Var' + n];
    }
}

export { func475 }
