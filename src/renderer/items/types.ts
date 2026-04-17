/**
 * Item registry types.
 *
 * ID 2層設計:
 *   - id      : カテゴリ内オーサリング用連番 (1,2,3,...)。空き番地探し不要。
 *   - flatId  : ランタイム用。Gvar.belongings_item_list に入る数値。save/drop/gacha互換のため固定。
 *
 * 多言語:
 *   - LocalizedStrings の ja/en を両方定義。en 未設定時は ja フォールバック。
 *   - registry から set する際は getLanguage() で分岐し、直接ローカライズ済みの文字列を代入する。
 *   - (installAutoTranslate の二重翻訳には影響しない: t() は未登録なら入力をそのまま返すため)
 */

export type ItemCategory =
    | 'disc-melee'         // 装備Disc (近接, 100-399)
    | 'disc-ranged'        // 遠距離Disc (400-499)
    | 'disc-memory'        // 記憶DISC (560-599)
    | 'food'               // 食料 (600-699)
    | 'extra'              // その他 (700-799)
    | 'scroll'             // 保管/特殊ｱｲﾃﾑ (800-899)
    | 'book'               // コミックス・書籍系 (900-999)
    | 'misc';              // その他未分類 (0, 1 等)

export interface LocalizedStrings {
    ja: string;
    en?: string;           // 未翻訳時は ja にフォールバック
}

export interface ItemDef {
    id: number;                           // カテゴリ内連番 (authoring key)
    flatId: number;                       // Gvar.belongings_item_list に入る実行時 ID
    category: ItemCategory;

    // 表示系
    name: LocalizedStrings;               // Gvar.item_name
    description1: LocalizedStrings;       // Gvar.item_description1 (攻撃/防御やスタンド型)
    effectsMessage?: LocalizedStrings;    // Gvar.effects_message ([発動]…)
    effectsMessageEnhanced?: LocalizedStrings;  // var_172=1 分岐時の [★発動]…
    abilityDescription?: LocalizedStrings;      // Gvar.item_ability_description

    // 経済
    buyingPrice: number;                  // Gvar.buying_price

    // Disc固有 (非Discは未設定)
    equipCategory?: number;               // Gvar.var_812 (1:攻撃補正/2:防御/3:速度/4:能力)
    jojoPart?: number;                    // Gvar.var_1984 (登場ジョジョ部)
    iconChar?: LocalizedStrings;          // Gvar.var_2173 (1文字アイコンラベル)
    starFlag?: number;                    // Gvar.var_2174 (☆化可否)
    activationCry?: LocalizedStrings;     // Gvar.var_2039 (発動時の掛け声)
}

/** カテゴリ別の flatId 予約レンジ。新カテゴリや独自アイテム用。 */
export const CATEGORY_RANGES: Record<ItemCategory, { start: number; end: number }> = {
    'disc-melee':    { start: 100,   end: 399 },
    'disc-ranged':   { start: 400,   end: 499 },
    'disc-memory':   { start: 560,   end: 599 },
    'food':          { start: 600,   end: 699 },
    'extra':         { start: 700,   end: 799 },
    'scroll':        { start: 800,   end: 899 },
    'book':          { start: 900,   end: 999 },
    'misc':          { start: 10000, end: 19999 },
};
