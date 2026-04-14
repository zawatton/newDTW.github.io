/**
 * func484 — アイテム名入力 UI のキー入力ループ
 *
 * func485 描画の対となる入力処理。func080 (キー入力確認) を毎フレーム呼び、
 * 状態 (var_2123) ごとに分岐:
 *   var_2123 == 0 : ソフトキーボードモード (var_2131 = 0..89 のカーソル位置)
 *   var_2123 == 1 : 履歴一覧モード (var_2140 = 行 0..9, var_2141 = ページ 1/2)
 *
 * キーボードモードの処理:
 *   ← →  : 行内左右ラップ (LEFT/RIGHT_WRAP テーブル)
 *   ↓ ↑  : 行間移動 (1行目↔2行目は密度差で特殊ジャンプ; DOWN/UP_TOP テーブル)
 *   Shift/A : 濁点 ﾞ (キー位置 58) を強制入力
 *   S/C     : 半濁点 ﾟ (キー位置 59) を強制入力
 *   Z      : 確定 — var_2131 で動作分岐
 *     0   : キーボード切替 (全角カナ→半角カナ→全角かな→...)
 *     1   : Backspace
 *     2   : キャンセル → 道具画面へ復帰
 *     3   : 履歴一覧モードへ
 *     4   : 入力確定 → func488/func489 (ノート保存) または func491
 *     >=10: その位置の文字を入力バッファへ追加
 *   X      : Backspace (空ならキャンセル)
 *
 * 履歴モードの処理:
 *   Z : 選択行を確定 → func488/func489
 *   X : キーボードモードへ戻る
 *   ↓↑: var_2140 を ±1 (0..9 でラップ)
 *   ←→: var_2141 ページ切替 (1↔2)
 *
 * リファクタ履歴:
 *   - 全 50+ 箇所の末尾再帰 → while(true) + continue ループ
 *   - 4方向 if 連鎖 (各 9-15 連) → LEFT/RIGHT/DOWN/UP テーブル
 *   - Shift/A vs S/C ブロック (各 50行ほぼ同一) → tryInsertSpecial() helper
 *   - backspace と cancel 重複 → 各々 helper 化
 *   - DSPLAY(100) + func337 の重複 (50回以上) → ループ末で一括
 *   - "不明" → 機能特定 (アイテム名入力 UI 入力ループ)
 *   - 元 833行 → 約280行
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

/** ← (var_254) 行内左ラップ: 行頭 → 行末 (それ以外は -1) */
const LEFT_WRAP: Readonly<Record<number, number>> = {
    0: 4, 10: 19, 20: 29, 30: 39, 40: 49,
    50: 59, 60: 69, 70: 79, 80: 89,
};

/** → (var_257) 行内右ラップ: 行末 → 行頭 (それ以外は +1) */
const RIGHT_WRAP: Readonly<Record<number, number>> = {
    4: 0, 19: 10, 29: 20, 39: 30, 49: 40,
    59: 50, 69: 60, 79: 70, 89: 80,
};

/** ↓ (var_259) 1行目 (5キー幅) → 2行目 (10キー幅) のジャンプマップ */
const DOWN_TOP: Readonly<Record<number, number>> = {
    0: 10, 1: 14, 2: 15, 3: 17, 4: 19,
};

/** ↓ (var_259) 最下行 (80-89, 10キー幅) → 1行目 (0-4, 5キー幅) のラップマップ */
const DOWN_BOT: Readonly<Record<number, number>> = {
    80: 0, 81: 0, 82: 0, 83: 1, 84: 1,
    85: 2, 86: 3, 87: 3, 88: 4, 89: 4,
};

/** ↑ (var_255) 1行目 → 最下行へのジャンプマップ */
const UP_TOP: Readonly<Record<number, number>> = {
    0: 80, 1: 84, 2: 85, 3: 86, 4: 88,
};

/** ↑ (var_255) 2行目 (10キー幅) → 1行目 (5キー幅) のラップマップ */
const UP_SECOND: Readonly<Record<number, number>> = {
    10: 0, 11: 0, 12: 0, 13: 1, 14: 1,
    15: 2, 16: 3, 17: 3, 18: 4, 19: 4,
};

/** カーソル位置 1 文字分 Backspace (var_2133/2134/2135/2136 を巻き戻し) */
function backspace(): void {
    Gvar.var_2135 = Gvar.var_2135 - 1;
    if (Gvar.var_2134[Gvar.var_2135] == 1) Gvar.var_2136 -= 1;
    if (Gvar.var_2134[Gvar.var_2135] == 2) Gvar.var_2136 -= 2;
    Gvar.var_2134[Gvar.var_2135] = 0;
    Gvar.var_2133[Gvar.var_2135] = "";
}

/** 入力キャンセル → 道具画面または敵ターンへ復帰 (var_2124 で分岐) */
async function cancelToCaller(): Promise<void> {
    Adap.DSPLAY(100);
    if (Gvar.var_2124 == 0) {
        Gvar.open_item_menue = 1;
        Gvar.var_1203 = 0;
        await Func.func051();
        await Func.func463();
    } else {
        Gvar.var_1203 = 0;
        Gvar.var_2124 = 0;
        await Func.func051();
        await Func.func009();
    }
}

/** 名前入力確定 → 800系容器なら func489、それ以外は func488 (var_2124==1 は func491) */
async function commitName(): Promise<void> {
    if (Gvar.var_2124 == 0) {
        Adap.DSPLAY(100);
        await Func.func051();
        await Func.func337();
        if (Gvar.var_2121 == 800 && Gvar.var_862[800][0] == 1 && Gvar.var_220 == 0) {
            await Func.func489();
        } else {
            await Func.func488();
        }
    } else {
        Gvar.var_2124 = 0;
        Adap.DSPLAY(100);
        await Func.func051();
        await Func.func337();
        await Func.func491();
    }
}

/** 文字バッファ末尾追加: var_2132 (0/1=全角=+2, 2=半角=+1) で var_2134 と var_2136 更新 */
function bumpInputBuffer(): void {
    if (Gvar.var_2132 < 2) {
        Gvar.var_2134[Gvar.var_2135] = 2;
        Gvar.var_2135 += 1;
        Gvar.var_2136 += 2;
    } else {
        Gvar.var_2134[Gvar.var_2135] = 1;
        Gvar.var_2135 += 1;
        Gvar.var_2136 += 1;
    }
}

/** 入力上限チェック (全角=19, 半角=20) — true なら超過 */
function inputBufferFull(): boolean {
    if (Gvar.var_2132 < 2 && Gvar.var_2136 >= 19) return true;
    if (Gvar.var_2132 == 2 && Gvar.var_2136 >= 20) return true;
    return false;
}

/**
 * Shift/A (charPos=58 ﾞ) または S/C (charPos=59 ﾟ) で特殊文字を強制入力。
 * var_2132 <= 1 (全角/半角カナ) 時は func487 で前文字濁点化を試行 (var_2138==1 で成功)。
 * 成功した場合・拒否された場合・上限超え場合はバッファ追加なしで終わる。
 */
async function tryInsertSpecial(charPos: number): Promise<void> {
    const orig = Gvar.var_2131;
    Gvar.var_2137 = orig;
    Gvar.var_2131 = charPos;

    // var_2132 <= 1 (カナ) は func487 で前文字濁点化を試す
    if (Gvar.var_2132 <= 1) {
        await Func.func487();
        if (Gvar.var_2138 == 1) {
            Adap.DSPLAY(100);
            Gvar.var_2131 = orig;
            return;
        }
        if (Gvar.var_2138 == 0) {
            Gvar.var_2131 = orig;
            return;
        }
    }
    // 上限超過 → 何もせず復帰
    if (inputBufferFull()) {
        Gvar.var_2131 = orig;
        return;
    }
    // バッファ末尾へ挿入
    await Func.func486();
    bumpInputBuffer();
    Adap.DSPLAY(100);
    Gvar.var_2131 = orig;
}

async function func484(this: any): Promise<void> {
    Adap.dbgprt(484);
    while (true) {
        await Func.func337(); // メッセージ表示処理(自動)
        await Func.func080(); // 各キー入力確認

        // ====================== ソフトキーボードモード ======================
        if (Gvar.var_2123 == 0) {
            // ---- ← (var_254) 左移動 ----
            if (Gvar.var_254 == 1) {
                Gvar.var_2131 = LEFT_WRAP[Gvar.var_2131] ?? Gvar.var_2131 - 1;
                Adap.DSPLAY(100);
                continue;
            }
            // ---- → (var_257) 右移動 ----
            if (Gvar.var_257 == 1) {
                Gvar.var_2131 = RIGHT_WRAP[Gvar.var_2131] ?? Gvar.var_2131 + 1;
                Adap.DSPLAY(100);
                continue;
            }
            // ---- ↓ (var_259) 下移動 ----
            if (Gvar.var_259 == 1) {
                Gvar.var_2131 = DOWN_TOP[Gvar.var_2131]
                              ?? DOWN_BOT[Gvar.var_2131]
                              ?? Gvar.var_2131 + 10;
                Adap.DSPLAY(100);
                continue;
            }
            // ---- ↑ (var_255) 上移動 ----
            if (Gvar.var_255 == 1) {
                Gvar.var_2131 = UP_TOP[Gvar.var_2131]
                              ?? UP_SECOND[Gvar.var_2131]
                              ?? Gvar.var_2131 - 10;
                Adap.DSPLAY(100);
                continue;
            }

            // ---- Shift / A : 濁点 ﾞ 強制 (キー位置 58) ----
            if (Gvar.key_Shift_on == 1 || Gvar.key_A_on == 1) {
                await tryInsertSpecial(58);
                continue;
            }
            // ---- S / C : 半濁点 ﾟ 強制 (キー位置 59) ----
            if (Gvar.key_S_on == 1 || Gvar.key_C_on == 1) {
                await tryInsertSpecial(59);
                continue;
            }

            // ---- Z : 確定 ----
            if (Gvar.key_Z_on == 1) {
                if (Gvar.var_2131 >= 10) {
                    // 通常のキー位置 → 1文字入力
                    if (Gvar.var_2132 <= 1 && (Gvar.var_2131 == 58 || Gvar.var_2131 == 59)) {
                        await Func.func487();
                        if (Gvar.var_2138 == 1) Adap.DSPLAY(100);
                        continue;
                    }
                    if (inputBufferFull()) continue;
                    await Func.func486();
                    bumpInputBuffer();
                    Adap.DSPLAY(100);
                    continue;
                }
                if (Gvar.var_2131 == 0) {
                    // キーボード切替: 全角カナ → 半角カナ → 全角かな → ...
                    if (Gvar.var_2132 == 0) Gvar.var_2139 = 1;
                    if (Gvar.var_2132 == 1) Gvar.var_2139 = 2;
                    if (Gvar.var_2132 == 2) Gvar.var_2139 = 0;
                    Gvar.var_2132 = Gvar.var_2139;
                    Adap.DSPLAY(100);
                    continue;
                }
                if (Gvar.var_2131 == 1 && Gvar.var_2135 >= 2) {
                    backspace();
                    Adap.DSPLAY(100);
                    continue;
                }
                if (Gvar.var_2131 == 2) {
                    await cancelToCaller();
                    return;
                }
                if (Gvar.var_2131 == 3) {
                    Adap.DSPLAY(100);
                    await Func.func051();
                    Adap.notesel(Gvar.var_754);
                    Gvar.var_2123 = 1;
                    Gvar.var_2140 = 0;
                    Gvar.var_2141 = 1;
                    continue;
                }
                if (Gvar.var_2131 == 4) {
                    await commitName();
                    return;
                }
            }

            // ---- X : Backspace (バッファが空に近ければキャンセル) ----
            if (Gvar.key_X_on == 1) {
                if (Gvar.var_2135 <= 1) {
                    await cancelToCaller();
                    return;
                }
                backspace();
                Adap.DSPLAY(100);
                continue;
            }
        }

        // ====================== 履歴一覧モード ======================
        if (Gvar.var_2123 == 1) {
            if (Gvar.key_Z_on == 1) {
                // 履歴行を選択 → ノート保存系 (func488/489) へ
                Adap.DSPLAY(100);
                await Func.func051();
                Gvar.var_2123 = 0;
                Gvar.var_2142 = 1;
                if (Gvar.var_2141 == 1) Gvar.var_2143 = Gvar.var_2140 + 100;
                if (Gvar.var_2141 == 2) Gvar.var_2143 = Gvar.var_2140 + 110;
                Adap.notesel(Gvar.var_754);
                Gvar.var_2144 = Adap.noteget(Gvar.var_2143);
                if (Gvar.var_2121 == 800 && Gvar.var_862[800][0] == 1 && Gvar.var_220 == 0) {
                    await Func.func489();
                } else {
                    await Func.func488();
                }
                return;
            }
            if (Gvar.key_X_on == 1) {
                // キーボードモードへ戻る
                Gvar.var_2123 = 0;
                Adap.DSPLAY(100);
                continue;
            }
            // ↓ : 行カーソル下 (9 でラップ)
            if (Gvar.var_259 == 1) {
                Gvar.var_2140 = (Gvar.var_2140 == 9) ? 0 : Gvar.var_2140 + 1;
                Adap.DSPLAY(100);
                continue;
            }
            // ↑ : 行カーソル上 (0 でラップ)
            if (Gvar.var_255 == 1) {
                Gvar.var_2140 = (Gvar.var_2140 == 0) ? 9 : Gvar.var_2140 - 1;
                Adap.DSPLAY(100);
                continue;
            }
            // ← / → : ページ切替 (1 ↔ 2)
            if (Gvar.var_254 == 1 || Gvar.var_257 == 1) {
                if (Gvar.var_2141 == 1) Gvar.var_2141 = 2;
                else if (Gvar.var_2141 == 2) Gvar.var_2141 = 1;
                Adap.DSPLAY(100);
                continue;
            }
        }

        // どのキーにもヒットせず → 次フレームへ
    }
}

export { func484 }
