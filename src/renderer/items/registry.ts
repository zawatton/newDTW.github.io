/**
 * Item registry runtime.
 *
 * - ITEMS: 各 data/*.ts で定義されたアイテム定義を集約し flatId → ItemDef の逆引き Map を構築。
 * - applyItem(flatId): Gvar.* に必要な全フィールドをローカライズ済み文字列で直接セット。
 * - postProcessItem(): ☆rare prefix や var_172 強化 effects_message など共通の後処理。
 *
 * func492 側の移行戦略:
 *   1. applyItem(flatId) が true を返せば (= registry にあれば) 既存 if-chain をスキップ
 *   2. false なら既存 if-chain にフォールバック
 *   3. 移行が終わったアイテムは if-chain から削除していく
 */

import { Gvar } from '../variable';
import { getLanguage } from '../i18n';
import type { ItemDef, LocalizedStrings } from './types';

// ---- Data imports ---------------------------------------------------------

import { DISCS_MELEE } from './data/discs-melee';           // 100-126 (手動英訳済)
import { DISC_MELEE_EXT } from './data/disc-melee-ext';     // 127-399
import { DISC_RANGED } from './data/disc-ranged';           // 400-499
import { DISC_MEMORY } from './data/disc-memory';           // 560-599
import { FOOD } from './data/food';                         // 600-699
import { EXTRA } from './data/extra';                       // 700-799 (一部は legacy 残置)
import { SCROLL } from './data/scroll';                     // 800-899
import { BOOK } from './data/book';                         // 900-999
import { MISC } from './data/misc';                         // 0, 1 等

const ALL_ITEMS: ItemDef[] = [
    ...MISC,
    ...DISCS_MELEE,
    ...DISC_MELEE_EXT,
    ...DISC_RANGED,
    ...DISC_MEMORY,
    ...FOOD,
    ...EXTRA,
    ...SCROLL,
    ...BOOK,
];

// ---- Index ----------------------------------------------------------------

const FLAT_INDEX: Map<number, ItemDef> = new Map();
for (const it of ALL_ITEMS) {
    if (FLAT_INDEX.has(it.flatId)) {
        console.warn(`[items] Duplicate flatId ${it.flatId} (category=${it.category} id=${it.id})`);
    }
    FLAT_INDEX.set(it.flatId, it);
}

export function getItemDef(flatId: number): ItemDef | undefined {
    return FLAT_INDEX.get(flatId);
}

/** ItemDef が registry に載っているか */
export function isMigrated(flatId: number): boolean {
    return FLAT_INDEX.has(flatId);
}

// ---- Localization helper --------------------------------------------------

function pick(s: LocalizedStrings | undefined): string {
    if (!s) return '';
    if (getLanguage() === 'ja') return s.ja;
    // 空文字も「未翻訳」扱いして ja にフォールバック
    return (s.en && s.en.length > 0) ? s.en : s.ja;
}

// ---- Runtime apply --------------------------------------------------------

/**
 * registry に定義されたアイテムを Gvar.* にロードする。
 * 見つからない (flatId が未登録) 場合は false を返す。
 */
export function applyItem(flatId: number): boolean {
    const def = FLAT_INDEX.get(flatId);
    if (!def) return false;

    Gvar.buying_price = def.buyingPrice;
    Gvar.item_name = pick(def.name);
    Gvar.item_description1 = pick(def.description1);
    Gvar.effects_message = pick(def.effectsMessage);
    Gvar.item_ability_description = pick(def.abilityDescription);

    // Disc固有の Gvar は未定義アイテムでもデフォルト 0 / "" を設定し残留汚染を防ぐ
    Gvar.var_812 = def.equipCategory ?? 0;
    Gvar.var_1984 = def.jojoPart ?? 0;
    Gvar.var_2173 = pick(def.iconChar);
    Gvar.var_2174 = def.starFlag ?? 0;
    Gvar.var_2039 = pick(def.activationCry);

    return true;
}

/**
 * func492 の後半で行う共通後処理を集約。
 *  - rare Disc (disc_rarity > 0) の ☆ prefix (flatId 100-399)
 *  - var_172=1 分岐時の effects_message 強化 ([発動] → [★発動])
 *
 * 注: 既存 if-chain 経由のアイテムでも呼べるように、flatId ベースで一般化。
 *     ただし effects_message 強化版は registry にのみ存在するので registry 経由時のみ反映。
 */
export function postProcessItem(flatId: number): void {
    // ☆rare prefix
    if (Gvar.disc_rarity > 0 && flatId >= 100 && flatId < 400) {
        Gvar.item_name = "☆" + Gvar.item_name;
    }

    // var_172 強化版 effects_message (registry にある場合のみ)
    const def = FLAT_INDEX.get(flatId);
    if (def && def.effectsMessageEnhanced && Gvar.var_172 == 1) {
        Gvar.effects_message = pick(def.effectsMessageEnhanced);
    }
}
