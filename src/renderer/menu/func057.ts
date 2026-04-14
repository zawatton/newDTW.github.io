/**
 * func057 — メニュー画面の"資料"の処理 (ハイスコア/コミックス/死因リスト/敵図鑑)
 *
 * var_505 (0-3): 4項目の資料サブメニューカーソル位置
 *   0=ハイスコア → func0875, 1=コミックス → func375,
 *   2=死因リスト → func371, 3=敵図鑑 → func357
 * var_507: カーソル表示Y座標 (項目移動と連動)
 * var_375: 0=通常 / 1=ダンジョン中 (1の場合は資料閲覧不可)
 *
 * リファクタ履歴:
 *   - HSP由来の if列挙 + 再帰呼び出しを while + データ駆動に書き換え
 *   - 元 130行 → 約80行 (40%削減)
 *
 * (org原典: newDTW_func0)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

/** 資料メニュー項目の確定処理 */
type LibraryItem = {
    enter: () => Promise<void>;
};

const LIBRARY_ITEMS: LibraryItem[] = [
    {
        // 0: ハイスコア
        enter: async () => {
            Adap.DSPLAY(212);
            await Func.func051();
            Gvar.var_512 = 1;
            Gvar.var_513 = 1;
            Gvar.var_514 = 0;
            Gvar.var_515 = 131;
            Gvar.var_516 = 88;
            await Func.func0875();
        },
    },
    {
        // 1: コミックス
        enter: async () => {
            Adap.DSPLAY(212);
            await Func.func051();
            Gvar.var_508 = 0; // Mフラグ:資料
            Gvar.var_499 = 0; // Mフラグ:設定画面
            Gvar.var_502 = 5;
            await Func.func375();
        },
    },
    {
        // 2: 死因リスト
        enter: async () => {
            Adap.DSPLAY(212);
            await Func.func051();
            Gvar.var_508 = 0;
            Gvar.var_499 = 0;
            Gvar.var_502 = 3;
            await Func.func371();
        },
    },
    {
        // 3: 敵図鑑
        enter: async () => {
            Adap.DSPLAY(212);
            await Func.func051();
            await Func.func357();
        },
    },
];

/** カーソル循環移動 (delta: -1=↑, +1=↓) と Y座標連動更新 */
function moveCursor(delta: number): void {
    const max = LIBRARY_ITEMS.length - 1; // 3
    const prev = Gvar.var_505;
    const next = (prev + delta + max + 1) % (max + 1);
    Gvar.var_505 = next;

    // var_507 (Y座標) の更新ルール:
    //   通常時は ±16
    //   末尾→先頭ループ時は 45 (先頭位置)
    //   先頭→末尾ループ時は 93 (末尾位置)
    if (prev === max && next === 0) {
        Gvar.var_507 = 45;
    } else if (prev === 0 && next === max) {
        Gvar.var_507 = 93;
    } else {
        Gvar.var_507 = Gvar.var_507 + 16 * delta;
    }
    Adap.DSPLAY(100);
}

async function func057(this: any): Promise<void> {
    Adap.dbgprt(57);
    while (true) {
        await Func.func337();
        await Func.func080();

        if (Gvar.var_259 == 1) { moveCursor(+1); await Func.func337(); continue; }
        if (Gvar.var_255 == 1) { moveCursor(-1); await Func.func337(); continue; }

        // Z/A: 確定 (ダンジョン中は無効: var_375 == 1)
        if ((Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) && Gvar.var_375 == 0) {
            const item = LIBRARY_ITEMS[Gvar.var_505];
            if (item) {
                await item.enter();
                return;
            }
        }

        // X: キャンセル → 設定画面に戻る
        if (Gvar.key_X_on == 1) {
            Gvar.var_508 = 0;
            Adap.DSPLAY(212);
            Gvar.var_499 = 1;
            await Func.func051();
            await Func.func055(); // 設定画面に戻る
            return;
        }
    }
}

export { func057 }
