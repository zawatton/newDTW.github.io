/**
 * func461 — 道具画面 (メニュー画面/道具) の入力ハンドラ
 *
 * var_220:    0=道具一覧表示 / 1=アイテムサブメニュー(使う・置く等)表示
 * var_224:    所持アイテム数
 * var_225:    現在カーソル位置(1〜20、0は足元)
 * item_page_number: 1=1ページ目(1-10) / 2=2ページ目(11-20) / 3=足元アイテム
 * Y_axis_item_position: カーソル表示Y座標 (45 + (n-1)*22)
 *
 * リファクタ履歴:
 *   - HSP由来の `await Func.func461()` 末尾再帰を while(true) ループへ書き換え
 *     (深い再帰でスタック溢れを起こす危険を排除)
 *   - 11個のスタンド能力フラグ (var_1240/1999/2000/2001/1950/2002/2003/2004/2005/2006/2007)
 *     のチェックを noAbilityActive() ヘルパーに集約
 *   - DSPLAY(100)+func337() を cursorBeep() に集約
 *   - 元 569行 → 約350行
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Stand from '../stand/index'

/** スタンド能力等で道具画面の通常操作が制限される時のフラグ群 */
const ABILITY_FLAGS = [
    'var_1240', // クレイジーD: disc同士の合成発動フラグ
    'var_1999',
    'var_2000', // ムーディーブルース以外でアイテムを送る (サウェッジ/アバッキオ等)
    'var_2001', // 同上 (別ルート)
    'var_1950', // disc に対してコミックを読んだ時の強化処理
    'var_2002',
    'var_2003',
    'var_2004', // セックスピストルズ発動
    'var_2005', // 道具→足元交換
    'var_2006', // ボーイⅡマン発動
    'var_2007', // ムーディーブルース倉庫送り
] as const;

/** スタンド能力等の制限フラグが全て立っていない (= 通常操作可能) */
function noAbilityActive(): boolean {
    return ABILITY_FLAGS.every((k) => (Gvar as any)[k] === 0);
}

/** カーソル移動時の効果音 + メッセージ表示更新 */
async function cursorBeep(): Promise<void> {
    Adap.DSPLAY(100);
    await Func.func337();
}

async function func461(this: any): Promise<void> {
    Adap.dbgprt(461);

    // 持ち物が0かつ道具画面が閉じている (足元ページでもない) → 専用画面に切替
    if (Gvar.var_220 == 0 && Gvar.var_224 == 0 && Gvar.item_page_number != 3) {
        await Func.func459(); // 道具画面(所持数0)の表示
        return;
    }

    // 末尾再帰を while ループに置換
    while (true) {
        Gvar.var_198 = 0; // メッセージウィンドウ閉じる
        await Func.func337();
        await Func.func080(); // 各キー入力確認

        // ============================================================
        // var_220 == 0: 道具一覧 (カーソルでアイテム間移動)
        // ============================================================
        if (Gvar.var_220 == 0) {
            // ----- ↓キー: カーソル下方向 (足元ページ以外) -----
            if (Gvar.var_259 == 1 && Gvar.item_page_number != 3) {
                if (Gvar.item_page_number == 1) {
                    // 1ページ目: 末尾未満なら1段下、末尾なら先頭に戻る
                    if (Gvar.var_224 <= 10 && Gvar.var_225 != Gvar.var_224) {
                        Gvar.Y_axis_item_position += 22;
                        Gvar.var_225 += 1;
                        await cursorBeep();
                        continue;
                    }
                    if (Gvar.var_224 >= 11 && Gvar.var_225 != 10) {
                        Gvar.Y_axis_item_position += 22;
                        Gvar.var_225 += 1;
                        await cursorBeep();
                        continue;
                    }
                    if (Gvar.var_225 == Gvar.var_224 || Gvar.var_225 == 10) {
                        Gvar.Y_axis_item_position = 45;
                        Gvar.var_225 = 1;
                        await cursorBeep();
                        continue;
                    }
                }
                if (Gvar.item_page_number == 2) {
                    // 2ページ目: 末尾未満なら1段下、末尾なら先頭(11)に戻る
                    if (Gvar.var_225 != Gvar.var_224 && Gvar.var_225 != 20) {
                        Gvar.Y_axis_item_position += 22;
                        Gvar.var_225 += 1;
                        await cursorBeep();
                        continue;
                    }
                    if (Gvar.var_225 == Gvar.var_224 || Gvar.var_225 == 20) {
                        Gvar.Y_axis_item_position = 45;
                        Gvar.var_225 = 11;
                        await cursorBeep();
                        continue;
                    }
                }
            }

            // ----- ↑キー: カーソル上方向 (足元ページ以外) -----
            if (Gvar.var_255 == 1 && Gvar.item_page_number != 3) {
                if (Gvar.var_225 != 1 && Gvar.var_225 != 11) {
                    Gvar.Y_axis_item_position -= 22;
                    Gvar.var_225 -= 1;
                    await cursorBeep();
                    continue;
                }
                if (Gvar.var_225 == 1 || Gvar.var_225 == 11) {
                    if (Gvar.item_page_number == 1) {
                        if (Gvar.var_224 <= 10) {
                            Gvar.Y_axis_item_position = (Gvar.var_224 - 1) * 22 + 45;
                            Gvar.var_225 = Gvar.var_224;
                            await cursorBeep();
                            continue;
                        }
                        if (Gvar.var_224 >= 11) {
                            Gvar.Y_axis_item_position = 9 * 22 + 45;
                            Gvar.var_225 = 10;
                            await cursorBeep();
                            continue;
                        }
                    }
                    if (Gvar.item_page_number == 2) {
                        Gvar.Y_axis_item_position = (Gvar.var_224 - 11) * 22 + 45;
                        Gvar.var_225 = Gvar.var_224;
                        await cursorBeep();
                        continue;
                    }
                }
            }

            // ----- ←キー: ページ移動 (左へ) -----
            if (Gvar.var_254 == 1) {
                if (Gvar.item_page_number == 1) {
                    // 1ページ目で足元アイテムがあり、能力非アクティブなら足元へ
                    if (Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0 && noAbilityActive()) {
                        Gvar.item_page_number = 3;
                        Gvar.Y_axis_item_position = 45;
                        Gvar.var_225 = 0;
                        Adap.DSPLAY(100);
                        await Func.func478();
                        await Func.func337();
                        continue;
                    }
                    // 11個以上持っていれば 2ページ目へ
                    if (Gvar.var_224 > 10) {
                        Gvar.var_225 = 11;
                        Gvar.item_page_number = 2;
                        Gvar.Y_axis_item_position = 45;
                        await cursorBeep();
                        continue;
                    }
                }
                if (Gvar.item_page_number == 2) {
                    // 2ページ目→1ページ目
                    Gvar.var_225 = 1;
                    Gvar.item_page_number = 1;
                    Gvar.Y_axis_item_position = 45;
                    await cursorBeep();
                    continue;
                }
                if (Gvar.item_page_number == 3 && Gvar.var_224 != 0) {
                    // 足元から戻る → 持ちアイテム数で 1 or 2 ページへ
                    if (Gvar.var_224 <= 10) {
                        Gvar.var_225 = 1;
                        Gvar.item_page_number = 1;
                    } else {
                        Gvar.var_225 = 11;
                        Gvar.item_page_number = 2;
                    }
                    Gvar.Y_axis_item_position = 45;
                    Gvar.var_231 = 0;
                    await cursorBeep();
                    continue;
                }
            }

            // ----- →キー: ページ移動 (右へ) -----
            if (Gvar.var_257 == 1) {
                // 1ページ目で 11個以上 → 2ページ目
                if (Gvar.item_page_number == 1 && Gvar.var_224 > 10) {
                    Gvar.var_225 = 11;
                    Gvar.item_page_number = 2;
                    Gvar.Y_axis_item_position = 45;
                    await cursorBeep();
                    continue;
                }
                // 能力非アクティブ時: 足元アイテム表示へ
                if (noAbilityActive()) {
                    if (Gvar.item_page_number == 1 && Gvar.var_224 <= 10 && Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0) {
                        Gvar.item_page_number = 3;
                        Gvar.Y_axis_item_position = 45;
                        Gvar.var_225 = 0;
                        Adap.DSPLAY(100);
                        await Func.func478();
                        await Func.func337();
                        continue;
                    }
                    if (Gvar.item_page_number == 2 && Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0) {
                        Gvar.item_page_number = 3;
                        Gvar.Y_axis_item_position = 45;
                        Gvar.var_225 = 0;
                        Adap.DSPLAY(100);
                        await Func.func478();
                        await Func.func337();
                        continue;
                    }
                }
                // 2ページ目: 能力アクティブなら 1ページ目に戻る
                if (Gvar.item_page_number == 2) {
                    if (!noAbilityActive()) {
                        Gvar.var_225 = 1;
                        Gvar.item_page_number = 1;
                        Gvar.Y_axis_item_position = 45;
                        await cursorBeep();
                        continue;
                    }
                }
                // 2ページ目で足元無し → 1ページ目
                if (Gvar.item_page_number == 2 && Gvar.var_77[Gvar.var_66][Gvar.var_67] == 0) {
                    Gvar.var_225 = 1;
                    Gvar.item_page_number = 1;
                    Gvar.Y_axis_item_position = 45;
                    await cursorBeep();
                    continue;
                }
                // 2ページ目+ピストルズ: 1ページ目へ
                if (Gvar.item_page_number == 2 && Gvar.var_2005 == 1) {
                    Gvar.var_225 = 1;
                    Gvar.item_page_number = 1;
                    Gvar.Y_axis_item_position = 45;
                    await cursorBeep();
                    continue;
                }
                // 足元から右へ → 持ちアイテムへ
                if (Gvar.item_page_number == 3 && Gvar.var_224 != 0) {
                    Gvar.var_225 = 1;
                    Gvar.item_page_number = 1;
                    Gvar.Y_axis_item_position = 45;
                    Gvar.var_231 = 0;
                    await cursorBeep();
                    continue;
                }
            }

            // ----- Shiftキー: アイテム整理 -----
            if (
                Gvar.key_Shift_on == 1 &&
                Gvar.var_1866 == 0 &&
                Gvar.var_234 == 0 &&
                Gvar.var_220 == 0 &&
                Gvar.var_231 == 0 &&
                Gvar.var_1945 == 0 &&
                Gvar.var_224 > 1 &&
                noAbilityActive() &&
                Gvar.item_page_number != 3
            ) {
                Adap.DSPLAY(208); // アイテム整理時の効果音
                await Func.func467(); // アイテム整理
                return;
            }
        }

        // ============================================================
        // var_220 == 1: アイテムサブメニュー (使う/置く等) でカーソル移動
        // ============================================================
        if (Gvar.var_220 == 1 && Gvar.var_233[Gvar.var_1876].Var8 != 0 && Gvar.var_233[Gvar.var_1876].Var0 < 805) {
            if (Gvar.var_259 == 1) {
                if (Gvar.var_225 != Gvar.var_233[Gvar.var_1876].Var8 && Gvar.var_225 != Gvar.var_1884) {
                    Gvar.Y_axis_item_position += 22;
                    Gvar.var_225 += 1;
                    await cursorBeep();
                    continue;
                }
                if (Gvar.var_225 == Gvar.var_233[Gvar.var_1876].Var8 || Gvar.var_225 == Gvar.var_1884) {
                    Gvar.Y_axis_item_position = 45;
                    Gvar.var_225 = 1;
                    await cursorBeep();
                    continue;
                }
            }
            if (Gvar.var_255 == 1) {
                if (Gvar.var_225 != 1) {
                    Gvar.Y_axis_item_position -= 22;
                    Gvar.var_225 -= 1;
                    await cursorBeep();
                    continue;
                }
                if (Gvar.var_225 == 1) {
                    Gvar.Y_axis_item_position = (Gvar.var_233[Gvar.var_1876].Var8 - 1) * 22 + 45;
                    Gvar.var_225 = Gvar.var_233[Gvar.var_1876].Var8;
                    await cursorBeep();
                    continue;
                }
            }
        }

        // ============================================================
        // Z/A: 確定 (アイテム選択 or サブメニュー確定)
        // ============================================================
        if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
            // ヤバいもの (変なdisc等) を入れる選択
            if (Gvar.var_1866 == 1 && Gvar.item_page_number != 3) {
                Adap.DSPLAY(212);
                await Func.func469();
                return;
            }
            if (Gvar.var_1866 == 1 && Gvar.item_page_number == 3) {
                Adap.DSPLAY(212);
                Gvar.var_2040 = 1;
                await Func.func469();
                return;
            }

            // var_220 == 1 のサブメニュー上で確定
            if (Gvar.var_220 == 1 && Gvar.var_233[Gvar.var_1876].Var8 != 0 && Gvar.var_233[Gvar.var_1876].Var0 < 805) {
                Adap.DSPLAY(212);
                Gvar.var_221 = 1;
                Gvar.var_229 = 44;
                Gvar.var_222 = 1;
                await Func.func462();
                return;
            }

            // var_220 == 0: 道具一覧で確定 → 各能力フラグの分岐
            if (Gvar.var_220 == 0) {
                // クレイジーD合成 1
                if (Gvar.var_1240 == 1) {
                    Adap.DSPLAY(212);
                    await Func.func522();
                    return;
                }
                // クレイジーD合成 2
                if (Gvar.var_1240 == 2) {
                    Adap.DSPLAY(212);
                    await Func.func523();
                    return;
                }
                // アイテム送信系 (var_2000/2001)
                if (Gvar.var_2000 == 1) {
                    Adap.DSPLAY(212);
                    await Func.func771();
                    return;
                }
                if (Gvar.var_2001 == 1) {
                    Adap.DSPLAY(212);
                    await Func.func775();
                    return;
                }
                // disc強化 (コミック)
                if (Gvar.var_1950 >= 1) {
                    Adap.DSPLAY(212);
                    await Func.func444();
                    return;
                }
                // disc発動: アヴドゥル/ギアッチョ/プッチ
                if (Gvar.var_1945 == 1) {
                    Adap.DSPLAY(212);
                    await Func.func439();
                    return;
                }
                if (Gvar.var_1945 == 2) {
                    Adap.DSPLAY(212);
                    await Func.func441();
                    return;
                }
                if (Gvar.var_1945 == 3) {
                    Adap.DSPLAY(212);
                    await Func.func442();
                    return;
                }
                // 足元交換
                if (Gvar.var_2005 == 1) {
                    Adap.DSPLAY(212);
                    await Func.func480();
                    return;
                }
                // セックスピストルズ
                if (Gvar.var_2004 == 1) {
                    Adap.DSPLAY(212);
                    await Stand.func524();
                    return;
                }
                // ボーイⅡマン
                if (Gvar.var_2006 == 1) {
                    Adap.DSPLAY(212);
                    await Func.func525();
                    return;
                }
                // ムーディーブルース倉庫送り
                if (Gvar.var_2007 == 1) {
                    Adap.DSPLAY(212);
                    await Stand.func533();
                    return;
                }

                // 通常: 持ちアイテム選択 → サブメニューへ
                if (Gvar.item_page_number != 3) {
                    Gvar.var_221 = 1;
                    Gvar.var_229 = 44;
                    Gvar.var_222 = 1;
                    Adap.DSPLAY(212);
                    await Func.func462();
                    return;
                }
                // 足元アイテム選択
                if (Gvar.item_page_number == 3) {
                    Gvar.var_221 = 1;
                    Gvar.var_229 = 44;
                    Gvar.var_222 = 10;
                    Gvar.var_231 = 1;
                    Adap.DSPLAY(212);
                    await Func.func462();
                    return;
                }
            }
        }

        // ============================================================
        // X: キャンセル
        // ============================================================
        if (Gvar.key_X_on == 1) {
            // サブメニューを閉じて道具一覧に戻る
            if (Gvar.var_220 == 1) {
                Gvar.open_item_menue = 1;
                Gvar.var_221 = 0;
                Gvar.var_225 = Gvar.var_1882;
                Gvar.Y_axis_item_position = Gvar.var_1883;
                Gvar.var_220 = 0;
                Gvar.var_1965 = 0;
                Gvar.var_231 = 0;
                Gvar.var_1880 = 0;
                Gvar.item_page_number = Gvar.var_1885;
                Adap.DSPLAY(212);
                await Func.func051();
                continue;
            }
            // 道具画面そのものを閉じる
            if (Gvar.var_220 == 0) {
                if (Gvar.var_1866 == 0) {
                    Gvar.open_item_menue = 0;
                    Gvar.var_1240 = 0;
                    Gvar.var_1999 = 0;
                    Gvar.var_2000 = 0;
                    Gvar.var_2001 = 0;
                    Gvar.var_1950 = 0;
                    Gvar.var_217 = 0;
                    Gvar.var_2002 = 0;
                    Gvar.var_2003 = 0;
                    Gvar.var_2004 = 0;
                    Gvar.var_2005 = 0;
                    Gvar.var_1945 = 0;
                    Gvar.var_1252 = 0;
                    Gvar.var_2006 = 0;
                    Gvar.var_2007 = 0;
                    Gvar.var_1208 = 0;
                    Gvar.var_234 = 0;
                    Gvar.var_231 = 0;
                    Gvar.var_220 = 0;
                    Gvar.var_1667 = 0;
                    Gvar.var_2008 = 0;
                    Gvar.var_1965 = 0;
                    Adap.DSPLAY(212);
                    await Func.func009(); // ディアボロ側ターン処理
                    return;
                }
                if (Gvar.var_1866 == 1) {
                    Gvar.var_1866 = 0;
                    Gvar.var_221 = 1;
                    Gvar.var_229 = 44;
                    Gvar.var_225 = Gvar.var_1877;
                    Gvar.item_page_number = Gvar.var_1878;
                    Gvar.Y_axis_item_position = Gvar.var_1879;
                    Gvar.var_234 = 0;
                    Gvar.var_222 = 1;
                    if (Gvar.var_231 == 1) {
                        Gvar.var_222 = 10;
                    }
                    Adap.DSPLAY(212);
                    await Func.func051();
                    await Func.func462();
                    return;
                }
            }
        }

        // 何のキーも該当しなかった: 次フレームで再判定 (元の末尾再帰相当)
        continue;
    }
}

export { func461 }
