/**
 * func193 — システム設定メニュー入力処理
 *
 * var_899 (0-7): メニューカーソル位置
 *   0=ゲームスピード, 1=メッセージ色, 2=キーコンフィグ, 3=ゲームパッド,
 *   4=画面サイズ, 5=マップ色変更, 6=通信モード, 7=言語設定
 *
 * リファクタ履歴:
 *   - HSP由来の if列挙 + 再帰呼び出しパターンを while ループ + データ駆動に書き換え
 *     (220行 → 約60行、項目追加が SYSTEM_MENU_ITEMS への1要素追加で完結)
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

/**
 * メニュー項目の定義。
 * 各項目: { 確定時のフラグ名 (省略可), 確定時に呼ぶ関数, 有効化条件 (省略可) }
 *
 * フラグ: 多くの項目は確定時に var_900〜905 を 1 にすることでサブメニュー表示を
 *   func337 から有効化する。lang_menu_open は同様に言語サブメニュー用。
 */
type MenuItem = {
    flag?: keyof typeof Gvar; // 確定前にセットするフラグ名
    enter: () => Promise<void>; // 確定時に呼ぶ関数
    enabled?: () => boolean; // false なら選択不可
};

const SYSTEM_MENU_ITEMS: MenuItem[] = [
    { flag: 'var_900', enter: () => Func.func194() },                     // 0: ゲームスピード
    { flag: 'var_901', enter: () => Func.func202() },                     // 1: メッセージ色
    { flag: 'var_902', enter: () => Func.func208() },                     // 2: キーコンフィグ
    { flag: 'var_903', enter: () => Func.func215() },                     // 3: ゲームパッド
    { flag: 'var_904', enter: () => Func.func205() },                     // 4: 画面サイズ
    { flag: 'var_905', enter: () => Func.func198() },                     // 5: マップ色変更
    {
        // 6: 通信モード — ダンジョン99/var_637!=0 では無効
        enter: () => Func.func0984(),
        enabled: () => Gvar.dungeon_number != 99 && Gvar.var_637 == 0,
    },
    { flag: 'lang_menu_open', enter: () => Func.funcLangInit() },         // 7: 言語設定
];

/** カーソル位置を循環移動させる (delta: -1=↑, +1=↓) */
function moveCursor(delta: number): void {
    const max = SYSTEM_MENU_ITEMS.length - 1;
    Gvar.var_899 = (Gvar.var_899 + delta + max + 1) % (max + 1);
    Adap.DSPLAY(100); // 項目移動の効果音
}

async function func193(this: any): Promise<void> {
    Adap.dbgprt(193);
    while (true) {
        await Func.func337(); // メッセージ関係呼び出し(描画)
        await Func.func080(); // 各キー入力確認

        // Z/A: 確定 — 選択中の項目を実行
        if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
            const item = SYSTEM_MENU_ITEMS[Gvar.var_899];
            if (item && (!item.enabled || item.enabled())) {
                Adap.DSPLAY(212); // メニュー確定の効果音
                await Func.func051();
                if (item.flag) (Gvar as any)[item.flag] = 1;
                await item.enter();
                return;
            }
        }

        // X: キャンセル — 上位メニューに戻る
        if (Gvar.key_X_on == 1) {
            Adap.DSPLAY(212);
            Gvar.var_509 = 0;
            await Func.func051();
            await Func.func055();
            return;
        }

        // ↑↓: カーソル移動 (循環)
        if (Gvar.var_255 == 1) { // ↑
            moveCursor(-1);
            await Func.func337();
        }
        if (Gvar.var_259 == 1) { // ↓
            moveCursor(+1);
            await Func.func337();
        }
    }
}

export { func193 }
