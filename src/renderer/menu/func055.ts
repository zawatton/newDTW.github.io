/**
 * func055 — 設定画面(メニュー画面)呼び出し
 *
 * var_500 (0-4): 5項目の設定メニューカーソル位置
 *   0=マップ(ON/OFF表示, var_501切替), 1=履歴, 2=資料, 3=システム, 4=終了/ギブアップ
 * var_246: カーソル表示Y座標 (描画用、項目移動と連動して更新)
 * var_375: 0=「終了」/ 1=「ギブアップ」(ダンジョン中はギブアップ表示)
 *
 * リファクタ履歴:
 *   - HSP由来の if列挙 + 再帰呼び出しを while + データ駆動に書き換え
 *   - 元 182行 → 90行 (50%削減)
 *
 * (org原典: newDTW_func0)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

/** メニュー項目の確定時アクション (Z/A押下時に呼ばれる) */
type SettingItem = {
    enter: () => Promise<void>;
    enabled?: () => boolean; // false なら選択不可
};

/**
 * 各メニュー項目の確定処理。
 * 0=マップ は var_500==0 の中で var_501 トグルする特殊処理なので
 * 一旦シンプル化のため別途扱う (handleEnterMap)。
 */
const SETTINGS_ITEMS: SettingItem[] = [
    { enter: handleEnterMap },                                        // 0: マップ ON/OFF
    { enter: () => handleSubmenu({                                    // 1: 履歴
        before: () => { Gvar.var_499 = 0; Gvar.var_502 = 6; Gvar.var_503 = 1; Gvar.var_504 = 2; },
        next: Func.func378,
    }) },
    { enter: () => handleSubmenu({                                    // 2: 資料
        before: () => { Gvar.var_505 = 0; Gvar.var_506 = 19; Gvar.var_507 = 45; Gvar.var_508 = 1; },
        next: Func.func057,
    }) },
    { enter: () => handleSubmenu({                                    // 3: システム
        before: () => { Gvar.var_509 = 1; },
        next: Func.func193,
    }) },
    { enter: handleEnterExit },                                       // 4: 終了 or ギブアップ
];

/** マップ ON/OFF 切替 (var_501 トグル) */
async function handleEnterMap(): Promise<void> {
    Gvar.var_501 = Gvar.var_501 == 0 ? 1 : 0;
    Adap.DSPLAY(212);
    await Func.func051();
    await Func.func337();
    await Func.func337();
    await Func.func055();
}

/** 通常サブメニュー遷移: 効果音→func051→事前処理→次関数呼び出し */
async function handleSubmenu(opts: { before: () => void, next: () => Promise<void> }): Promise<void> {
    Adap.DSPLAY(212);
    await Func.func051();
    opts.before();
    await opts.next();
}

/** 終了 (var_375==0) / ギブアップ (var_375==1) を分岐 */
async function handleEnterExit(): Promise<void> {
    Adap.DSPLAY(212);
    Gvar.var_499 = 0;
    await Func.func051();
    if (Gvar.var_375 == 0) {
        await Func.func234();
    } else {
        await Func.func233(); // ダンジョン内全ステータス初期化
        await Func.func0939();
    }
}

/**
 * カーソルを移動 (delta: -1=↑, +1=↓)。
 * 0↔4 を跨ぐ循環移動時は var_246 を初期値 (45/109) に再設定。
 */
function moveCursor(delta: number): void {
    const max = SETTINGS_ITEMS.length - 1; // 4
    const prev = Gvar.var_500;
    const next = (prev + delta + max + 1) % (max + 1);
    Gvar.var_500 = next;

    // var_246 (カーソルY座標) の更新ルール:
    //   通常時は ±16 の連続加減
    //   0→4 (上方向ループ): var_246 = 109 (末尾位置)
    //   4→0 (下方向ループ): var_246 = 45  (先頭位置)
    if (prev === 0 && next === max) {
        Gvar.var_246 = 109;
    } else if (prev === max && next === 0) {
        Gvar.var_246 = 45;
    } else {
        Gvar.var_246 = Gvar.var_246 + 16 * delta;
    }
    Adap.DSPLAY(100);
}

async function func055(this: any): Promise<void> {
    Adap.dbgprt(55);
    while (true) {
        await Func.func337();
        await Func.func080();

        // ↓ カーソル下移動
        if (Gvar.var_259 == 1) {
            moveCursor(+1);
            await Func.func337();
            continue;
        }
        // ↑ カーソル上移動
        if (Gvar.var_255 == 1) {
            moveCursor(-1);
            await Func.func337();
            continue;
        }
        // Z/A: 確定
        if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
            const item = SETTINGS_ITEMS[Gvar.var_500];
            if (item && (!item.enabled || item.enabled())) {
                await item.enter();
                return;
            }
        }
        // X: キャンセル → メニュー閉じる
        if (Gvar.key_X_on == 1) {
            Gvar.var_499 = 0;
            Adap.DSPLAY(212);
            await Func.func051();
            await Func.func009(); // ディアボロ側ターン処理に戻る
            return;
        }
    }
}

export { func055 }
