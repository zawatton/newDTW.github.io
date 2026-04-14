/**
 * func476 — ヤバいもの (容器) 内アイテムのフィールドを 25 個の作業用グローバルへ展開
 *
 * var_486[var_682][var_225] (=容器スロット) の 25 フィールドを var_18XX 系の
 * 作業グローバルにバラして func404 (アイテムを置く処理) に引き渡す。
 *
 * 「亀の倉庫」「ヤバいもの」など容器型アイテムから取り出して床に置く動線で使う。
 *
 * リファクタ履歴:
 *   - 25行の手書きコピーを SRC_TO_DEST テーブル + 1ループに圧縮
 *   - 元 51行 → 約45行 (テーブル分行が増えた分はコメント/型で吸収)
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

/**
 * var_486[bag][slot][N]  →  Gvar.var_18XX
 *   N=0:item_id, 3:count, 4:status, 5..29:disc詳細
 * 元コードのままの不規則な番号順 (var_1846/1837/1835... = HSP 由来) を維持
 */
const SRC_TO_DEST: ReadonlyArray<readonly [number, string]> = [
    [0,  'var_1846'], [3,  'var_1837'], [4,  'var_1835'], [5,  'var_1847'], [6,  'var_1848'],
    [7,  'var_1838'], [8,  'var_1849'], [9,  'var_1889'], [11, 'var_1850'], [12, 'var_1851'],
    [13, 'var_1833'], [14, 'var_1834'], [15, 'var_1852'], [16, 'var_1853'], [17, 'var_1854'],
    [18, 'var_1855'], [19, 'var_1836'], [20, 'var_1856'], [21, 'var_1857'], [22, 'var_1858'],
    [23, 'var_1859'], [24, 'var_1860'], [25, 'var_1861'], [26, 'var_1862'], [27, 'var_1863'],
    [28, 'var_1864'], [29, 'var_1865'],
] as const;

async function func476(this: any): Promise<void> {
    Adap.dbgprt(476);

    Gvar.open_item_menue = 0; // 道具画面表示フラグ off
    Gvar.var_1866 = 0;
    Gvar.var_683 = Gvar.var_233[Gvar.var_1876].Var8;
    Gvar.belongings_item_list = Gvar.var_486[Gvar.var_682][Gvar.var_225][0];
    Gvar.disc_rarity = Gvar.var_486[Gvar.var_682][Gvar.var_225][13];
    await Func.func492(); // アイテムリスト呼び出し

    const src = Gvar.var_486[Gvar.var_682][Gvar.var_225];
    for (const [n, dest] of SRC_TO_DEST) {
        (Gvar as any)[dest] = src[n];
    }

    await Func.func404(); // アイテムを置く時の動作処理
}

export { func476 }
