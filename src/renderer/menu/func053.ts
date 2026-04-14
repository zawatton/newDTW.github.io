/**
 * func053 — メニュー画面呼び出し (2x2グリッドメニュー)
 *
 * カーソル位置:
 *   var_247 (1=左列 / 2=右列)
 *   var_248 (1=上行 / 2=下行)
 *   var_497 (1=道具, 2=足元, 3=状態, 4=設定) ← 上記から自動算出
 *
 * 描画位置:
 *   var_245 (X座標): 19 (左) / 19+48=67 (右)
 *   var_246 (Y座標): 45 (上) / 45+18=63 (下)
 *
 * メニュー項目レイアウト:
 *   ┌─────────┬─────────┐
 *   │ 1 道具  │ 3 状態  │
 *   ├─────────┼─────────┤
 *   │ 2 足元  │ 4 設定  │
 *   └─────────┴─────────┘
 *
 * リファクタ履歴:
 *   - HSP由来の if列挙 + 再帰呼び出しを while + データ駆動に書き換え
 *   - 元 138行 → 90行 (35%削減)
 *
 * (org原典: newDTW_func0)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

/** 2x2グリッドの座標定数 */
const COL_X = { 1: 19, 2: 19 + 48 };       // 列(var_247)→ var_245 のX座標
const ROW_Y = { 1: 45, 2: 45 + 18 };       // 行(var_248)→ var_246 のY座標

/** メニュー項目の確定処理 (var_497 値 → 関数) */
type MainMenuItem = {
    enter: () => Promise<void>;
};

const MAIN_MENU_ITEMS: Record<number, MainMenuItem> = {
    1: { enter: handleEnterItems },     // 道具
    2: { enter: handleEnterGround },    // 足元
    3: { enter: handleEnterStatus },    // 状態
    4: { enter: handleEnterSettings },  // 設定
};

/** var_247 と var_248 から var_497 (1-4) を算出 */
function computeItemId(): number {
    return (Gvar.var_247 - 1) * 2 + Gvar.var_248;
}

/** カーソルを (col, row) に移動して描画位置と効果音を更新 */
function moveCursor(col: 1 | 2, row: 1 | 2): void {
    if (Gvar.var_247 === col && Gvar.var_248 === row) return; // 変化なし
    Gvar.var_247 = col;
    Gvar.var_248 = row;
    Gvar.var_245 = COL_X[col];
    Gvar.var_246 = ROW_Y[row];
    Adap.DSPLAY(100); // 項目移動の効果音
}

// ============ 各項目の確定処理 ============

async function handleEnterItems(): Promise<void> {
    Gvar.var_195 = 0;
    Gvar.var_196 = 0;
    Gvar.item_page_number = 1;
    Gvar.Y_axis_item_position = 45;
    Gvar.var_225 = 1;
    Gvar.var_223 = Gvar.var_224 + 10;
    Gvar.var_220 = 0; // 道具画面呼び出し確認変数
    Gvar.var_230 = 45;
    Adap.DSPLAY(212);
    await Func.func051();
    Gvar.open_item_menue = 1; // Mフラグ:道具画面表示
    await Func.func461(); // 道具画面の動作処理
}

async function handleEnterGround(): Promise<void> {
    Gvar.var_195 = 0;
    Gvar.var_196 = 0;
    Adap.DSPLAY(212);
    await Func.func051();
    await Func.func064(); // 足元確認呼び出し
}

async function handleEnterStatus(): Promise<void> {
    Gvar.var_195 = 0;
    Gvar.var_196 = 0;
    Adap.DSPLAY(212);
    await Func.func051();
    Gvar.var_498 = 1;
    await Func.func380(); // 状態異常確認呼び出し
}

async function handleEnterSettings(): Promise<void> {
    Gvar.var_195 = 0;
    Gvar.var_196 = 0;
    Gvar.var_499 = 1; // Mフラグ:設定画面 Func.func056
    Gvar.var_500 = 0;
    Gvar.var_245 = 19;
    Gvar.var_246 = 45;
    Adap.DSPLAY(212);
    await Func.func051();
    await Func.func055(); // 設定画面呼び出し
}

// ============ メインループ ============

async function func053(this: any): Promise<void> {
    Adap.dbgprt(53);
    while (true) {
        await Func.func337();
        await Func.func080();

        // X: メニューを閉じる
        if (Gvar.key_X_on == 1) {
            Gvar.var_195 = 0;
            Gvar.var_196 = 0;
            await Func.func009(); // ディアボロ側ターン処理に戻る
            return;
        }

        // 矢印キー: カーソル移動
        if (Gvar.var_255 == 1 && Gvar.var_248 == 2) moveCursor(Gvar.var_247 as 1 | 2, 1); // ↑
        if (Gvar.var_259 == 1 && Gvar.var_248 == 1) moveCursor(Gvar.var_247 as 1 | 2, 2); // ↓
        if (Gvar.var_254 == 1 && Gvar.var_247 == 2) moveCursor(1, Gvar.var_248 as 1 | 2); // ←
        if (Gvar.var_257 == 1 && Gvar.var_247 == 1) moveCursor(2, Gvar.var_248 as 1 | 2); // →

        // var_497 (現在選択中の項目) を更新
        Gvar.var_497 = computeItemId();

        // Z/A: 確定
        if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
            const item = MAIN_MENU_ITEMS[Gvar.var_497];
            if (item) {
                await item.enter();
                return;
            }
        }
    }
}

export { func053 }
