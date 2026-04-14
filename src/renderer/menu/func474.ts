/**
 * func474 — ヤバいもの容器からアイテム取り出し → 所持アイテム末尾へ追加
 *
 * 道具画面で「ヤバいもの」内のアイテムを「出す」操作した時の処理。
 * - 所持上限 (20個) を超えるなら拒否メッセージ + 敵ターンへ
 * - 余裕があれば var_486[var_682][var_225] (容器内 25 フィールド) を
 *   var_233[var_224+1] (新規末尾スロット) にコピーしてアイテムリスト更新
 *
 * 入力 (Gvar):
 *   var_224                : 現在の所持アイテム数
 *   var_682, var_225       : 取り出し対象の容器/スロット index
 *   var_1876               : 容器自体の var_233 index (Var8 が容器型ID)
 *
 * 出力:
 *   var_233[var_224]       : 25 フィールド複製済み新スロット
 *   disc_rarity            : 取出アイテムの rarity (Var13)
 *
 * リファクタ履歴:
 *   - 25行の手書きコピーを ITEM_FIELDS テーブル + 1ループに圧縮
 *   - 元 74行 → 約55行
 *   - "不明" → 機能特定済み
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

/** var_486 ↔ var_233 で複製する Var{N} 添字一覧 (Var0/3-6/11-29) */
const ITEM_FIELDS: ReadonlyArray<number> = [
    0, 3, 4, 5, 6,
    11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
] as const;

async function func474(this: any): Promise<void> {
    Adap.dbgprt(474);

    // 所持アイテム数 20 個以上なら拒否
    if (Gvar.var_224 >= 20) {
        Gvar.open_item_menue = 0; // 道具画面表示フラグ off
        Gvar.var_1866 = 0;
        await Func.setMessage("持ち物がいっぱいで出せない", "", 7, false, false, false);
        await Func.AutoDraw(3);
        if (Gvar.var_234 == 1) {
            Gvar.var_234 = 0;
        }
        Gvar.var_220 = 0; // 道具画面呼び出し確認変数
        await Func.func009(); // ディアボロ側ターン処理
        return;
    }

    // 容器から所持アイテム末尾へコピー
    Gvar.open_item_menue = 0;
    Gvar.var_1866 = 0;
    Gvar.var_224 = Gvar.var_224 + 1;
    Gvar.var_683 = Gvar.var_233[Gvar.var_1876].Var8;

    const src = Gvar.var_486[Gvar.var_682][Gvar.var_225];
    const dst = Gvar.var_233[Gvar.var_224] as any;
    for (const n of ITEM_FIELDS) {
        dst['Var' + n] = src[n];
    }
    Gvar.disc_rarity = Gvar.var_233[Gvar.var_224].Var13;

    await Func.func492(); // アイテムリスト呼び出し
    await Func.func433(); // アイテム配列(所持アイテム)初期化
    Gvar.var_1866 = 0;
    await Func.setMessage("" + Gvar.item_name + "を出した", "", 7, false, false, false);
    await Func.AutoDraw(3);
    await Func.func051(); // キー入力待ち
    Gvar.var_213 = 1;
    Gvar.var_226 = Gvar.var_1876;
    Gvar.var_217 = 1;
    await Func.func019(); // ターン変更時の割り込み処理
}

export { func474 }
