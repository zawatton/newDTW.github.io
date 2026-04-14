/**
 * func462 — アイテムIDからカテゴリ (item_class1) とサブメニュー高さ (item_class2) を決定
 *
 * 道具画面でアイテムが選択された時に呼ばれ、続けて func463 (操作メニュー入力ハンドラ)
 * を起動する。
 *
 * 入力 (Gvar):
 *   belongings_item_list: アイテムID
 *   var_220: 0=道具一覧 / 1=ヤバいもの中
 *   var_231: 0=通常 / 1=拾う(地面のアイテムを拾う動線)
 *
 * 出力 (Gvar):
 *   item_class1: 0=ゴールド/1=装備disc/2=射撃disc/3=使う/4=食べる/5=ヤバいもの/6=読む
 *   item_class2: サブメニューの高さ段数 (CLASS2_HEIGHT で px に変換される)
 *   var_222:    現在のサブメニューカーソル位置
 *   var_2032:   装備disc種別 (1=攻撃/2=防御/3=能力, 0=未装備)
 *   var_2034:   名前付け可フラグ
 *
 * リファクタ履歴:
 *   - 27本のID範囲 if-chain を CATEGORIES テーブルに置換
 *   - 元 189行 → 約120行
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

/** モード: var_220 と var_231 で決まる 3種類 */
type Mode = 'normal' | 'pickup' | 'open';

/** アイテムIDカテゴリ表 */
type Category = {
    /** 含まれる ID 範囲 [start, end) */
    range: [number, number];
    /** item_class1 (操作種別) */
    item_class1: number;
    /** item_class2 (高さ段数) — モード別 */
    item_class2: { normal: number; pickup: number; open: number };
    /** var_222 (カーソル位置) のモード別上書き値 (pickup では設定しない) */
    var_222?: { normal?: number; open?: number };
};

const CATEGORIES: Category[] = [
    { range: [0,    100],  item_class1: 0, item_class2: { normal: 3, pickup: 3, open: 4 }, var_222: { normal: 5, open: 5 } },
    // 100-399 装備disc — normal時は装備中(var_553/4/5一致)で c2=6 に上書き
    { range: [100,  400],  item_class1: 1, item_class2: { normal: 5, pickup: 5, open: 5 }, var_222: { open: 3 } },
    { range: [400,  500],  item_class1: 2, item_class2: { normal: 6, pickup: 6, open: 6 }, var_222: { open: 2 } },
    { range: [500,  600],  item_class1: 3, item_class2: { normal: 4, pickup: 5, open: 5 } },
    { range: [600,  700],  item_class1: 4, item_class2: { normal: 4, pickup: 5, open: 5 } },
    { range: [700,  750],  item_class1: 3, item_class2: { normal: 4, pickup: 5, open: 5 } },
    { range: [750,  800],  item_class1: 6, item_class2: { normal: 4, pickup: 5, open: 5 } },
    { range: [800,  900],  item_class1: 5, item_class2: { normal: 5, pickup: 6, open: 5 } },
    { range: [900, 1000],  item_class1: 6, item_class2: { normal: 4, pickup: 5, open: 5 } },
];

function findCategory(id: number): Category | undefined {
    return CATEGORIES.find((c) => id >= c.range[0] && id < c.range[1]);
}

function currentMode(): Mode {
    if (Gvar.var_220 == 1) return 'open';
    if (Gvar.var_231 == 1) return 'pickup';
    return 'normal';
}

async function func462(this: any): Promise<void> {
    Adap.dbgprt(462);

    // ヤバいもの→倉庫送り (var_1667) からの復帰時、状態を復元
    if (Gvar.var_1667 >= 1) {
        Gvar.belongings_item_list = Gvar.var_1667;
        Gvar.var_220 = Gvar.var_1668;
        Gvar.var_231 = Gvar.var_1669;
    }

    Gvar.item_class1 = 0;
    Gvar.var_2041 = 16;
    Gvar.var_2032 = 0;

    const mode = currentMode();
    const cat = findCategory(Gvar.belongings_item_list);

    if (cat) {
        Gvar.item_class1 = cat.item_class1;
        Gvar.item_class2 = cat.item_class2[mode];
        if (mode !== 'pickup' && cat.var_222) {
            const v = cat.var_222[mode];
            if (v !== undefined) Gvar.var_222 = v;
        }

        // ----- 装備disc特殊処理 (100-399, normal mode) -----
        // 装備中(var_553/554/555 == カーソル位置)なら c2 を 6 に上書きし var_2032 設定
        if (mode === 'normal' && cat.range[0] === 100) {
            await Func.func426();
            await Func.func427();
            await Func.func428();
            if (Gvar.var_225 == Gvar.var_553) { Gvar.var_2032 = 1; Gvar.item_class2 = 6; }
            if (Gvar.var_225 == Gvar.var_554) { Gvar.var_2032 = 2; Gvar.item_class2 = 6; }
            if (Gvar.var_225 == Gvar.var_555) { Gvar.var_2032 = 3; Gvar.item_class2 = 6; }
        }

        // 足元アイテム上に乗っている時、サブメニューに "交換" が増えるので +1 段
        if (mode === 'normal' && Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0) {
            Gvar.var_2033 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
            if (Gvar.var_78[Gvar.var_2033].Var0 != 1) {
                Gvar.item_class2 = Gvar.item_class2 + 1;
            }
        }
    }

    // ----- 名前付け可: 100-399 / 500-599 / 801-899 (未識別) または 800 (エニグマの紙) -----
    Gvar.var_2034 = 0;
    const id = Gvar.belongings_item_list;
    const unidentified = Gvar.var_862[id]?.[0] == 0;
    if (unidentified && id >= 100 && id < 400) { Gvar.var_2034 = 1; Gvar.item_class2++; }
    if (unidentified && id >= 500 && id < 600) { Gvar.var_2034 = 1; Gvar.item_class2++; }
    if (unidentified && id >= 801 && id < 900) { Gvar.var_2034 = 1; Gvar.item_class2++; }
    if (id == 800 && Gvar.dungeon_number != 99) {
        Gvar.var_2034 = 1;
        Gvar.item_class2++;
        Gvar.var_2042 = Gvar.var_225;
    }

    await Func.func051(); // キー入力待ち処理

    // ヤバいもの→倉庫送りからの復帰: 状態を初期化し var_222=8 (確認位置)
    if (Gvar.var_1667 >= 1) {
        Gvar.var_1668 = 0;
        Gvar.var_1669 = 0;
        Gvar.var_1667 = 0;
        Gvar.var_222 = 8;
    }

    await Func.func463();
}

export { func462 }
