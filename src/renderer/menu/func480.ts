/**
 * func480 — 道具画面: 所持アイテムと足元アイテムを 1:1 交換
 *
 * 道具画面で「足元と交換」を選んだ時の処理。
 * 選択中アイテム var_233[var_225] と 足元 var_78[var_2044] の 25 フィールドをスワップし、
 * UI 名前を取得して "足元の<元>と<新>を交換した。" メッセージを表示してターン進行。
 *
 * 装備中で呪われている場合 (3スロット中のいずれかが該当アイテムかつ呪い ON) は拒否。
 *
 * リファクタ履歴:
 *   - 24フィールドの 3 段コピー (save / 233←78 / 78←save) → ITEM_FIELDS テーブル + swap helper
 *   - 装備呪い 3スロット判定を CURSE_SLOTS テーブル + reduce
 *   - 元 143行 → 約75行
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import { tf } from '../i18n'

/** スワップ対象 Var{N} 添字一覧 (Var0/3-8/11-29) — Var9/10 は除外 (HSP原典) */
const ITEM_FIELDS: ReadonlyArray<number> = [
    0, 3, 4, 5, 6, 7, 8,
    11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
] as const;

/** 装備呪い判定: (装備スロット ID, 呪いフラグ) のペア */
const CURSE_SLOTS: ReadonlyArray<readonly [string, string]> = [
    ['var_553', 'var_896'],
    ['var_554', 'var_897'],
    ['var_555', 'var_898'],
] as const;

async function func480(this: any): Promise<void> {
    Adap.dbgprt(480);
    Gvar.open_item_menue = 0; // 道具画面表示フラグ off
    await Func.func426();
    await Func.func427();
    await Func.func428();

    // ---- 装備呪い判定 ----
    let cursed = 0;
    for (const [slotKey, curseKey] of CURSE_SLOTS) {
        if ((Gvar as any)[slotKey] == Gvar.var_225 && (Gvar as any)[curseKey] != 0) {
            cursed = 1;
            break;
        }
    }
    Gvar.var_2116 = cursed;

    if (cursed == 1) {
        await Func.setMessage("呪われていて外せない！", "", 7, true, false, false);
        await Func.AutoDraw(3);
        Gvar.open_item_menue = 1;
        if (Gvar.var_2005 == 1) {
            await Func.func461(); // 道具画面動作処理
            return;
        }
        await Func.func463();
        return;
    }

    Gvar.var_221 = 0;
    Gvar.var_2005 = 0;

    // ---- 所持↔足元 25フィールドスワップ ----
    const inv = Gvar.var_233[Gvar.var_225] as any;
    const flr = Gvar.var_78[Gvar.var_2044] as any;
    for (const n of ITEM_FIELDS) {
        const key = 'Var' + n;
        const tmp = inv[key];
        inv[key] = flr[key];
        flr[key] = tmp;
    }

    // ---- 元名/新名取得 (両アイテム) — 1=ゴールドは "<額>G" ----
    Gvar.belongings_item_list = inv.Var0;
    Gvar.disc_rarity = inv.Var13;
    await Func.func492(); // アイテムリスト呼び出し
    Gvar.var_2118 = (inv.Var0 == 1) ? ("" + inv.Var13 + "G") : Gvar.item_name;

    Gvar.belongings_item_list = flr.Var0;
    Gvar.disc_rarity = flr.Var13;
    await Func.func492();
    Gvar.var_2119 = (flr.Var0 == 1) ? ("" + flr.Var13 + "G") : Gvar.item_name;

    Gvar.open_item_menue = 0;
    Gvar.var_2005 = 0;
    await Func.func430();
    await Func.func331(); // 装備/消費アイテム使用エフェクト
    await Func.setMessage(tf("足元の{0}と", Gvar.var_2118), tf("{0}を交換した。", Gvar.var_2119), 7, true, false, false);
    await Func.AutoDraw(3);
    Gvar.var_217 = 1;
    await Func.func019(); // ターン変更時の割り込み処理
}

export { func480 }
