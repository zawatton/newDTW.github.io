/**
 * func463 — 道具画面のサブメニュー (使う/装備/投げる/置く/拾う等) の入力ハンドラ
 *
 * func462 で分類された (item_class1, item_class2, var_222) を入力に
 * ↑↓キーでカーソル移動、Z/Aで確定、Xでキャンセル。
 *
 * 状態変数:
 *   var_220: 0=道具一覧 / 1=ヤバいもの中 (倉庫から)
 *   var_231: 0=通常 / 1=拾う動線 (足元アイテムから)
 *   var_222: サブメニュー内のカーソル位置 (1〜11)
 *   var_229: カーソル表示Y座標
 *   var_2041: カーソル間隔 (16px)
 *   var_2034: 名前付け項目あり (識別前等)
 *
 * リファクタ履歴:
 *   - HSP由来の `await Func.func463()` 末尾再帰 29箇所を while(true) ループに置換
 *   - DSPLAY(100)+func337() を cursorBeep() に集約 (28箇所)
 *   - 二重 await func337() (コメントアウト + 実行) のペアを整理
 *   - 元 1018行 → 約720行 (-29%)
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

/** カーソル移動時の効果音 + メッセージ表示更新 */
async function cursorBeep(): Promise<void> {
    Adap.DSPLAY(100);
    await Func.func337();
}

async function func463(this: any): Promise<void> {
    Adap.dbgprt(463);

    while (true) {
        await Func.func337();
        await Func.func080();

        // ============================================================
        // X: キャンセル → 道具一覧に戻る
        // ============================================================
        if (Gvar.key_X_on == 1) {
            Gvar.var_221 = 0;
            Gvar.var_231 = 0;
            Adap.DSPLAY(212);
            await Func.func051();
            await Func.func461();
            return;
        }

        // ============================================================
        // ↓: カーソル下方向
        // ============================================================
        if (Gvar.var_259 == 1) {
            if (Gvar.var_222 == 10) {
                Gvar.var_229 += Gvar.var_2041;
                if (Gvar.item_class1 == 0) {
                    Gvar.var_222 = 5;
                }
                if (Gvar.item_class1 == 1) {
                    Gvar.var_222 = 1;
                    if (Gvar.var_231 == 1) Gvar.var_222 = 3;
                }
                if (Gvar.item_class1 == 2) {
                    Gvar.var_222 = 1;
                    if (Gvar.var_231 == 1) Gvar.var_222 = 2;
                }
                if (Gvar.item_class1 >= 3 && Gvar.item_class1 <= 6) {
                    Gvar.var_222 = 1;
                }
                await cursorBeep();
                continue;
            }
            if (Gvar.var_222 == 1) {
                Gvar.var_229 += Gvar.var_2041;
                if (Gvar.item_class1 == 1) {
                    Gvar.var_222 = (Gvar.var_2032 == 0) ? 3 : 2;
                }
                if (Gvar.item_class1 == 2) Gvar.var_222 = 2;
                if (Gvar.item_class1 == 3) Gvar.var_222 = 5;
                if (Gvar.item_class1 == 4) Gvar.var_222 = 5;
                if (Gvar.item_class1 == 5) Gvar.var_222 = 4;
                if (Gvar.item_class1 == 6) Gvar.var_222 = 5;
                await cursorBeep();
                continue;
            }
            if (Gvar.var_222 == 2) {
                Gvar.var_229 += Gvar.var_2041;
                Gvar.var_222 = 3;
                await cursorBeep();
                continue;
            }
            if (Gvar.var_222 == 3) {
                Gvar.var_229 += Gvar.var_2041;
                Gvar.var_222 = 5;
                await cursorBeep();
                continue;
            }
            if (Gvar.var_222 == 4) {
                Gvar.var_229 += Gvar.var_2041;
                Gvar.var_222 = 5;
                await cursorBeep();
                continue;
            }
            if (Gvar.var_222 == 5) {
                Gvar.var_229 += Gvar.var_2041;
                Gvar.var_222 = 6;
                if (Gvar.var_231 == 1) {
                    Gvar.var_2033 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
                    if (Gvar.var_78[Gvar.var_2033].Var0 != 1) {
                        Gvar.var_222 = 7;
                    }
                    if (Gvar.var_78[Gvar.var_2033].Var0 == 1) {
                        Gvar.var_222 = (Gvar.var_2034 == 0) ? 8 : 11;
                    }
                }
                if (Gvar.var_220 == 1) {
                    Gvar.var_222 = 9;
                }
                await cursorBeep();
                continue;
            }
            if (Gvar.var_222 == 9) {
                Gvar.var_229 += Gvar.var_2041;
                Gvar.var_222 = 6;
                await cursorBeep();
                continue;
            }
            if (Gvar.var_222 == 6) {
                Gvar.var_229 += Gvar.var_2041;
                Gvar.var_222 = (Gvar.var_2034 == 0) ? 8 : 11;
                if (Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0 && Gvar.var_220 == 0) {
                    Gvar.var_2033 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
                    if (Gvar.var_78[Gvar.var_2033].Var0 != 1) {
                        Gvar.var_222 = 7;
                    } else {
                        Gvar.var_222 = (Gvar.var_2034 == 0) ? 8 : 11;
                    }
                }
                await cursorBeep();
                continue;
            }
            if (Gvar.var_222 == 7) {
                Gvar.var_229 += Gvar.var_2041;
                Gvar.var_222 = (Gvar.var_2034 == 0) ? 8 : 11;
                await cursorBeep();
                continue;
            }
            if (Gvar.var_222 == 11) {
                Gvar.var_229 += Gvar.var_2041;
                Gvar.var_222 = 8;
                await cursorBeep();
                continue;
            }
            if (Gvar.var_222 == 8) {
                Gvar.var_229 = 44;
                Gvar.var_222 = 1;
                if (Gvar.var_231 == 0) {
                    Gvar.var_222 = (Gvar.item_class1 == 0) ? 5 : 1;
                }
                if (Gvar.var_231 == 1) Gvar.var_222 = 10;
                if (Gvar.var_220 == 1 && Gvar.item_class1 == 1) Gvar.var_222 = 3;
                if (Gvar.var_220 == 1 && Gvar.item_class1 == 2) Gvar.var_222 = 2;
                await cursorBeep();
                continue;
            }
        }

        // ============================================================
        // ↑: カーソル上方向
        // ============================================================
        if (Gvar.var_255 == 1) {
            if (Gvar.var_222 == 10) {
                // var_222=10 から ↑ → 末尾位置(8)へジャンプ。多項目によって基準位置が違う
                const stepBase: Record<number, number> = {
                    0: 3, 1: 4, 2: 5, 3: 4, 4: 4, 5: 5, 6: 4,
                };
                const adj = (Gvar.var_2034 == 1) ? 1 : 0;
                Gvar.var_222 = 8;
                Gvar.var_229 = 44 + Gvar.var_2041 * (stepBase[Gvar.item_class1] + adj);
                if (Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0) {
                    Gvar.var_2033 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
                    if (Gvar.var_78[Gvar.var_2033].Var0 == 1) {
                        Gvar.var_229 -= Gvar.var_2041;
                    }
                }
                await cursorBeep();
                continue;
            }
            if (Gvar.var_222 == 1) {
                if (Gvar.var_231 == 0) {
                    // 装備disc(1) は var_2032 で2分岐、それ以外は item_class1 で分岐
                    let base: number;
                    if (Gvar.item_class1 == 1) {
                        base = (Gvar.var_2032 == 0) ? 4 : 5;
                    } else if (Gvar.item_class1 == 2) {
                        base = 5;
                    } else if (Gvar.item_class1 == 3) {
                        base = 3;
                    } else if (Gvar.item_class1 == 4) {
                        base = 3;
                    } else if (Gvar.item_class1 == 5) {
                        base = 4;
                    } else { // 6
                        base = 3;
                    }
                    if (Gvar.var_2034 == 1) base += 1;
                    if (Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0 || Gvar.var_220 == 1) {
                        base += 1;
                    }
                    Gvar.var_222 = 8;
                    Gvar.var_229 = 44 + Gvar.var_2041 * base;
                    if (Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0) {
                        Gvar.var_2033 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
                        if (Gvar.var_78[Gvar.var_2033].Var0 == 1) {
                            Gvar.var_229 -= 16;
                        }
                    }
                }
                if (Gvar.var_231 == 1) {
                    Gvar.var_222 = 10;
                    Gvar.var_229 -= Gvar.var_2041;
                }
                await cursorBeep();
                continue;
            }
            if (Gvar.var_222 == 2) {
                Gvar.var_229 -= Gvar.var_2041;
                if (Gvar.var_220 == 0 && Gvar.var_231 == 0) Gvar.var_222 = 1;
                if (Gvar.var_231 == 1) Gvar.var_222 = 10;
                if (Gvar.var_220 == 1) {
                    Gvar.var_222 = 8;
                    Gvar.var_229 = 44 + Gvar.var_2041 * 5;
                }
                await cursorBeep();
                continue;
            }
            if (Gvar.var_222 == 3) {
                Gvar.var_229 -= Gvar.var_2041;
                if (Gvar.item_class1 == 1) {
                    if (Gvar.var_220 == 0 && Gvar.var_231 == 0) {
                        Gvar.var_222 = (Gvar.var_2032 == 0) ? 1 : 2;
                    }
                    if (Gvar.var_220 == 1) {
                        Gvar.var_222 = 8;
                        Gvar.var_229 = 44 + Gvar.var_2041 * ((Gvar.var_2034 == 0) ? 4 : 5);
                    }
                    if (Gvar.var_231 == 1) Gvar.var_222 = 10;
                }
                if (Gvar.item_class1 == 2) Gvar.var_222 = 2;
                await cursorBeep();
                continue;
            }
            if (Gvar.var_222 == 4) {
                Gvar.var_229 -= Gvar.var_2041;
                Gvar.var_222 = 1;
                await cursorBeep();
                continue;
            }
            if (Gvar.var_222 == 5) {
                Gvar.var_229 -= Gvar.var_2041;
                if (Gvar.item_class1 == 0) {
                    if (Gvar.var_220 == 0 && Gvar.var_231 == 0) {
                        Gvar.var_222 = 8;
                        Gvar.var_229 = 44 + Gvar.var_2041 * 2;
                        if (Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0) {
                            Gvar.var_2033 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
                            if (Gvar.var_78[Gvar.var_2033].Var0 != 1) {
                                Gvar.var_229 = 44 + Gvar.var_2041 * 3;
                            }
                        }
                    }
                    if (Gvar.var_220 == 0 && Gvar.var_231 == 1) {
                        Gvar.var_222 = 10;
                    }
                    if (Gvar.var_220 == 1) {
                        Gvar.var_222 = 8;
                        Gvar.var_229 = 44 + Gvar.var_2041 * 3;
                    }
                }
                if (Gvar.item_class1 == 1) Gvar.var_222 = 3;
                if (Gvar.item_class1 == 2) Gvar.var_222 = 3;
                if (Gvar.item_class1 == 3) Gvar.var_222 = 1;
                if (Gvar.item_class1 == 4) Gvar.var_222 = 1;
                if (Gvar.item_class1 == 5) Gvar.var_222 = 4;
                if (Gvar.item_class1 == 6) Gvar.var_222 = 1;
                await cursorBeep();
                continue;
            }
            if (Gvar.var_222 == 9) {
                Gvar.var_229 -= Gvar.var_2041;
                Gvar.var_222 = 5;
                await cursorBeep();
                continue;
            }
            if (Gvar.var_222 == 6) {
                Gvar.var_229 -= Gvar.var_2041;
                Gvar.var_222 = (Gvar.var_220 == 1) ? 9 : 5;
                await cursorBeep();
                continue;
            }
            if (Gvar.var_222 == 7) {
                Gvar.var_229 -= Gvar.var_2041;
                Gvar.var_222 = (Gvar.var_231 == 1) ? 5 : 6;
                await cursorBeep();
                continue;
            }
            if (Gvar.var_222 == 11) {
                Gvar.var_229 -= Gvar.var_2041;
                Gvar.var_222 = 6;
                if (Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0 && Gvar.var_220 == 0) {
                    Gvar.var_2033 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
                    if (Gvar.var_78[Gvar.var_2033].Var0 != 1) {
                        Gvar.var_222 = 7;
                    }
                }
                if (Gvar.var_231 == 1) {
                    Gvar.var_2033 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
                    if (Gvar.var_78[Gvar.var_2033].Var0 != 1) Gvar.var_222 = 7;
                    if (Gvar.var_78[Gvar.var_2033].Var0 == 1) Gvar.var_222 = 5;
                }
                await cursorBeep();
                continue;
            }
            if (Gvar.var_222 == 8) {
                Gvar.var_229 -= Gvar.var_2041;
                Gvar.var_222 = 6;
                if (Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0 && Gvar.var_220 == 0) {
                    Gvar.var_2033 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
                    if (Gvar.var_78[Gvar.var_2033].Var0 != 1) Gvar.var_222 = 7;
                }
                if (Gvar.var_231 == 1) {
                    Gvar.var_2033 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
                    if (Gvar.var_78[Gvar.var_2033].Var0 != 1) Gvar.var_222 = 7;
                    if (Gvar.var_78[Gvar.var_2033].Var0 == 1) Gvar.var_222 = 5;
                }
                if (Gvar.var_220 == 1) Gvar.var_222 = 6;
                if (Gvar.var_2034 == 1) Gvar.var_222 = 11;
                await cursorBeep();
                continue;
            }
        }

        // ============================================================
        // Z/A: 確定 — モード別 (var_220, var_231) で 3分岐
        // ============================================================
        if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {

            // ----- Mode A: 道具一覧 通常 (var_220==0 && var_231==0) -----
            if (Gvar.var_220 == 0 && Gvar.var_231 == 0) {
                if (Gvar.var_222 == 1) {
                    if (Gvar.item_class1 == 1) {
                        Adap.DSPLAY(212);
                        await Func.func051();
                        Gvar.var_221 = 2;
                        Gvar.var_246 = 44;
                        Gvar.var_2043 = 1;
                        await Func.func464();
                        return;
                    }
                    if (Gvar.item_class1 == 5) {
                        Adap.DSPLAY(212);
                        Gvar.var_221 = 0;
                        await Func.func408();
                        return;
                    }
                    Gvar.var_221 = 0;
                    Gvar.open_item_menue = 0;
                    await Func.func420();
                    return;
                }
                if (Gvar.var_222 == 2 && Gvar.item_class1 == 2) {
                    Gvar.var_221 = 0;
                    Gvar.open_item_menue = 0;
                    await Func.func406();
                    return;
                }
                if (Gvar.var_222 == 2 && Gvar.item_class1 == 1) {
                    Gvar.var_221 = 0;
                    Gvar.open_item_menue = 0;
                    if (Gvar.var_2032 == 1) Gvar.disc_class = 1;
                    if (Gvar.var_2032 == 2) Gvar.disc_class = 2;
                    if (Gvar.var_2032 == 3) Gvar.disc_class = 3;
                    await Func.func420();
                    return;
                }
                if (Gvar.var_222 == 3 && (Gvar.item_class1 == 1 || Gvar.item_class1 == 2)) {
                    await Func.func051();
                    Gvar.var_221 = 3;
                    Gvar.var_246 = 44;
                    Gvar.var_2043 = 1;
                    Adap.DSPLAY(212);
                    await Func.func465();
                    return;
                }
                if (Gvar.var_222 == 4) {
                    Gvar.var_221 = 0;
                    Gvar.open_item_menue = 0;
                    Adap.DSPLAY(212);
                    await Func.func407();
                    return;
                }
                if (Gvar.var_222 == 5) {
                    Adap.DSPLAY(212);
                    if (Gvar.item_class1 == 2) Gvar.var_339 = 1;
                    Gvar.var_221 = 0;
                    Gvar.open_item_menue = 0;
                    await Func.func409();
                    return;
                }
                if (Gvar.var_222 == 6) {
                    Gvar.var_221 = 0;
                    Gvar.open_item_menue = 0;
                    Adap.DSPLAY(212);
                    await Func.func403();
                    return;
                }
                if (Gvar.var_222 == 7) {
                    Gvar.open_item_menue = 0;
                    Gvar.var_2044 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
                    Adap.DSPLAY(212);
                    await Func.func480();
                    return;
                }
                if (Gvar.var_222 == 8) {
                    Gvar.var_221 = 0;
                    Gvar.var_1209 = 1;
                    Gvar.open_item_menue = 0;
                    Adap.DSPLAY(212);
                    await Func.func368();
                    return;
                }
                if (Gvar.var_222 == 11) {
                    Adap.DSPLAY(212);
                    await Func.func482();
                    return;
                }
            }

            // ----- Mode B: 拾う (var_220==0 && var_231==1) -----
            if (Gvar.var_220 == 0 && Gvar.var_231 == 1) {
                Adap.DSPLAY(212);
                if (Gvar.var_222 == 10) {
                    Gvar.var_231 = 0;
                    Gvar.var_198 = 0;
                    Gvar.open_item_menue = 0;
                    Gvar.var_221 = 0;
                    // 所持アイテム数が20個以上になる場合
                    if (Gvar.var_224 >= 20
                        && Gvar.var_78[Gvar.var_321].Var0 >= 400
                        && Gvar.var_78[Gvar.var_321].Var0 < 500) {
                        await Func.func401();
                        if (Gvar.var_1839 == 1) {
                            Gvar.var_217 = 1;
                            await Func.func019();
                            return;
                        }
                    }
                    if (Gvar.var_224 >= 20 && Gvar.var_78[Gvar.var_321].Var0 != 1) {
                        await Func.func477();
                        return;
                    }
                    await Func.func400();
                    Gvar.var_217 = 1;
                    await Func.func019();
                    return;
                }
                if (Gvar.var_222 == 1) {
                    if (Gvar.item_class1 == 1) {
                        Gvar.var_221 = 2;
                        Gvar.var_246 = 44;
                        Gvar.var_2043 = 1;
                        await Func.func051();
                        await Func.func464();
                        return;
                    }
                    if (Gvar.item_class1 == 2) {
                        Gvar.var_231 = 0;
                        Gvar.var_198 = 0;
                        Gvar.open_item_menue = 0;
                        Gvar.var_221 = 0;
                        if (Gvar.var_224 >= 20) {
                            await Func.func477();
                            return;
                        }
                        await Func.func400();
                        Gvar.var_225 = Gvar.var_224;
                        Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
                        await Func.func420();
                        return;
                    }
                    if (Gvar.item_class1 == 5) {
                        Gvar.var_221 = 0;
                        Gvar.var_225 = 0;
                        Gvar.var_231 = 0;
                        await Func.func408();
                        return;
                    }
                    Gvar.var_231 = 0;
                    Gvar.var_198 = 0;
                    Gvar.open_item_menue = 0;
                    Gvar.var_221 = 0;
                    Gvar.var_234 = 1;
                    Gvar.var_225 = 0;
                    Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
                    await Func.func420();
                    return;
                }
                if (Gvar.var_222 == 2) {
                    Gvar.var_221 = 0;
                    Gvar.open_item_menue = 0;
                    Gvar.var_231 = 0;
                    Gvar.var_234 = 1;
                    Adap.DSPLAY(212);
                    await Func.func406();
                    return;
                }
                if (Gvar.var_222 == 3 && (Gvar.item_class1 == 1 || Gvar.item_class1 == 2)) {
                    await Func.func051();
                    Gvar.var_221 = 3;
                    Gvar.var_246 = 44;
                    Gvar.var_2043 = 1;
                    Gvar.var_234 = 1;
                    Adap.DSPLAY(212);
                    await Func.func465();
                    return;
                }
                if (Gvar.var_222 == 4) {
                    Gvar.var_221 = 0;
                    Gvar.var_225 = 0;
                    Gvar.var_234 = 1;
                    Gvar.var_1876 = 0;
                    Adap.DSPLAY(212);
                    await Func.func407();
                    return;
                }
                if (Gvar.var_222 == 5) {
                    Adap.DSPLAY(212);
                    Gvar.var_231 = 0;
                    Gvar.var_198 = 0;
                    Gvar.open_item_menue = 0;
                    Gvar.var_221 = 0;
                    Gvar.var_234 = 1;
                    Gvar.var_225 = 0;
                    if (Gvar.item_class1 == 2) Gvar.var_339 = 1;
                    Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
                    await Func.func409();
                    return;
                }
                if (Gvar.var_222 == 7) {
                    Gvar.var_231 = 0;
                    Gvar.var_198 = 0;
                    Gvar.open_item_menue = 0;
                    Gvar.var_221 = 0;
                    Gvar.var_2005 = 1;
                    Gvar.var_2044 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
                    Gvar.item_page_number = 1;
                    Gvar.Y_axis_item_position = 45;
                    Gvar.var_225 = 1;
                    Gvar.var_223 = Gvar.var_224 + 10;
                    Gvar.var_220 = 0;
                    Adap.DSPLAY(212);
                    await Func.func051();
                    Gvar.open_item_menue = 1;
                    await Func.func461();
                    return;
                }
                if (Gvar.var_222 == 8) {
                    Gvar.var_198 = 0;
                    Gvar.open_item_menue = 0;
                    Gvar.var_221 = 0;
                    Gvar.var_2045 = 1;
                    Gvar.var_2044 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
                    Adap.DSPLAY(212);
                    Gvar.var_1209 = 1;
                    Gvar.var_225 = 0;
                    Gvar.belongings_item_list = Gvar.var_78[Gvar.var_2044].Var0;
                    await Func.func368();
                    return;
                }
                if (Gvar.var_222 == 11) {
                    Adap.DSPLAY(212);
                    await Func.func482();
                    return;
                }
            }

            // ----- Mode C: ヤバいもの内 (var_220==1) -----
            if (Gvar.var_220 == 1) {
                if (Gvar.var_222 == 9) {
                    Gvar.var_221 = 0;
                    Gvar.open_item_menue = 0;
                    Adap.DSPLAY(212);
                    await Func.func474();
                    return;
                }
                if (Gvar.var_222 == 1) {
                    Gvar.var_221 = 0;
                    Gvar.open_item_menue = 0;
                    Adap.DSPLAY(212);
                    await Func.func420();
                    return;
                }
                if (Gvar.var_222 == 2) {
                    Gvar.var_221 = 0;
                    Gvar.open_item_menue = 0;
                    Adap.DSPLAY(212);
                    await Func.func406();
                    return;
                }
                if (Gvar.var_222 == 3 && (Gvar.item_class1 == 1 || Gvar.item_class1 == 2)) {
                    await Func.func051();
                    Gvar.var_221 = 3;
                    Adap.DSPLAY(212);
                    Gvar.var_246 = 44;
                    Gvar.var_2043 = 1;
                    await Func.func465();
                    return;
                }
                if (Gvar.var_222 == 5) {
                    if (Gvar.item_class1 == 2) Gvar.var_339 = 1;
                    Gvar.var_221 = 0;
                    Gvar.open_item_menue = 0;
                    Adap.DSPLAY(212);
                    await Func.func411();
                    return;
                }
                if (Gvar.var_222 == 6) {
                    Gvar.var_221 = 0;
                    Gvar.open_item_menue = 0;
                    Adap.DSPLAY(212);
                    await Func.func476();
                    return;
                }
                if (Gvar.var_222 == 8) {
                    Gvar.var_221 = 0;
                    Gvar.var_1209 = 1;
                    Gvar.open_item_menue = 0;
                    Adap.DSPLAY(212);
                    await Func.func368();
                    return;
                }
                if (Gvar.var_222 == 11) {
                    Adap.DSPLAY(212);
                    await Func.func482();
                    return;
                }
            }
        }

        // 何のキーも該当しなかった: 次フレーム再判定 (元の末尾再帰相当)
        continue;
    }
}

export { func463 }
