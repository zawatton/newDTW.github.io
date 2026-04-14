/**
 * func471 — ヤバいもの容器 (808/809/816) へアイテムを入れた時の特殊処理
 *
 * func469 (入れる) の後段で yabaimono_id (容器種別 ID) に応じた特殊効果を発火する。
 *
 *   808 聖人の眼球    : 入れたアイテムの 14番目フラグを ON、識別済みにする
 *   809 聖人の左腕    : 12番/15番フラグ解除 + ジョナサンDISC(570) なら買値+500 → タスクact1(414) に変換
 *   816 ﾐｷﾀｶのカバン : 中身を変身させる。買値計算後に 30フィールドを 0 化 (11以外) し、
 *                       random なダンジョン (var_1735 種別) からアイテム生成 (func385) → 復元
 *
 * リファクタ履歴:
 *   - 30要素クリアループを clearSlot() helper に集約 (3回 → 1関数)
 *   - var_1735 7バケット if 連鎖を MIKITAKA_LUT テーブル + 線形探索に圧縮
 *   - "不明" → 機能特定済み
 *   - 元 102行 → 約75行
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

/** ﾐｷﾀｶのカバン: var_1736 (rnd(100)) → var_1735 (ダンジョン種別) のバケットマップ */
const MIKITAKA_LUT: ReadonlyArray<readonly [number, number, number]> = [
    [ 0,  15, 6],
    [15,  32, 1],
    [32,  53, 5],
    [53,  71, 3],
    [71,  76, 5],
    [76,  86, 4],
    [86, 100, 9],
] as const;

/** var_486[bag][slot] の 30 フィールドを 0 化 (skipIndex を除外可) */
function clearSlot(bag: number, slot: number, skipIndex = -1): void {
    const arr = Gvar.var_486[bag][slot];
    for (let i = 0; i < 30; i++) {
        if (i !== skipIndex) arr[i] = 0;
    }
}

async function func471(this: any): Promise<void> {
    Adap.dbgprt(471);
    const bag = Gvar.var_682;
    const slot = Gvar.var_683;
    const arr = Gvar.var_486[bag][slot];

    // ---- 808 聖人の眼球 : 入れたアイテムを識別済みに ----
    if (Gvar.yabaimono_id == 808) {
        arr[14] = 1;
        Gvar.var_2101 = arr[0];
        Gvar.var_862[Gvar.var_2101][0] = 1;
    }

    // ---- 809 聖人の左腕 : 12/15番フラグ解除 + ジョナサンDISC変換 ----
    if (Gvar.yabaimono_id == 809) {
        if (arr[12] == 1) arr[12] = 0;
        if (arr[15] == 1 || arr[15] == 2) arr[15] = 0;
        // 570 ジョナサンのDISC → 414 タスクact1 へ変換
        if (arr[0] == 570) {
            if (arr[11] == 1) {
                Gvar.count_buying_price = Gvar.count_buying_price + 500;
            }
            clearSlot(bag, slot);
            arr[0] = 414; // Ver0.1401修正: 414 → 415 タスクact1
            arr[3] = 5;   // 変化後の射撃回数
            Gvar.var_862[414][0] = 1;
        }
    }

    // ---- 816 ﾐｷﾀｶのカバン : 中身をランダムアイテムに変身 ----
    if (Gvar.yabaimono_id == 816) {
        if (arr[11] == 1) {
            Gvar.belongings_item_list = arr[0];
            await Func.func492(); // アイテムリスト呼び出し
            Gvar.var_482 = (arr[3] + arr[4]) * 50;
            if (arr[19] > 1) {
                Gvar.var_482 = arr[19] * 500 + Gvar.var_482;
            }
            Gvar.count_buying_price = Gvar.count_buying_price + Gvar.buying_price + Gvar.var_482;
        }
        clearSlot(bag, slot, 11);

        Gvar.var_866 = 0; // 一時格納先 var_78[0]
        Gvar.var_1736 = Adap.rnd(100);
        // 7バケット LUT で var_1735 (ダンジョン種別) を決定
        for (const [lo, hi, kind] of MIKITAKA_LUT) {
            if (Gvar.var_1736 >= lo && Gvar.var_1736 < hi) {
                Gvar.var_1735 = kind;
                break;
            }
        }

        // dungeon_number=1 (ホテル外) に切替えて出現テーブル参照 → 戻す
        if (Gvar.var_262 == 1) Gvar.dungeon_number = 1;
        await Func.func385(); // ダンジョン別出現アイテム抽選
        if (Gvar.var_262 == 1) Gvar.dungeon_number = 0;

        // 抽選結果 (var_78[0]) を容器スロットへ転写、Var11 だけは 0 固定
        for (let i = 0; i < 30; i++) {
            arr[i] = (Gvar.var_78[0] as any)['Var' + i];
        }
        arr[11] = 0;
        // 一時格納 var_78[0] をクリア
        for (let i = 0; i < 30; i++) {
            (Gvar.var_78[0] as any)['Var' + i] = 0;
        }
    }
}

export { func471 }
