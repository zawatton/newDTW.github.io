/**
 * func460 — 道具画面 (メニュー画面/道具) の表示処理
 *
 * 道具一覧パネル + アイテム選択時のサブメニュー描画を担当。
 * カーソル/入力ロジックは func461 側。
 *
 * リファクタ履歴:
 *   - "+N ★M" のアイテム名サフィックス (16箇所重複) を formatItemName() に集約
 *   - グレーアウト判定付きラベル描画 (10+箇所) を drawMenuLabel() に集約
 *   - var_233 / var_486 から var_200x への 13フィールド転記を copyItemFields() に集約
 *   - item_class2 → Y座標 (var_1822) のマッピングを CLASS2_HEIGHT テーブル化
 *   - 元 831行 → 約580行 (-30%)
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

/** アイテム名にサフィックス +N (強化値) と ★M (合成段階) を結合 */
function formatItemName(name: string, plus: number, star: number): string {
    let s = "" + name;
    if (plus > 0) s += "+" + plus;
    if (star > 1) s += " ★" + star;
    return s;
}

/** カーソル位置のラベル描画: var_221 >= 2 (確定後) はグレー */
function drawMenuLabel(label: string): void {
    Adap.color(255, 255, 255);
    if (Gvar.var_221 >= 2) {
        Adap.color(150, 150, 150);
    }
    Adap.mes(label);
}

/** Eマーク(装備中) を所定色で描画 */
function drawEquipMark(y: number, r: number, g: number, b: number): void {
    Adap.color(r, g, b);
    Adap.pos(32, y);
    Adap.font(Gvar.font_type, 8);
    Adap.mes("E");
    Adap.font(Gvar.font_type, Gvar.font_size = 16, Gvar.font_style = 1);
    Adap.pos(40, y);
}

/**
 * 道具一覧 1行分の var_200x への転記
 * src=true 時 (var_220==1, ヤバいもの内): var_486[var_682][slot] から
 * src=false 時 (通常): var_233[slot] から
 */
function copyItemRow13(slot: number, fromBag: boolean): void {
    Gvar.var_2009 = slot;
    if (fromBag) {
        const r = Gvar.var_486[Gvar.var_682][slot];
        Gvar.var_2010 = r[0];
        Gvar.var_2011 = r[3];
        Gvar.var_2012 = r[4];
        Gvar.var_2013 = r[5];
        Gvar.var_1922 = r[6];
        Gvar.var_2014 = r[7];
        Gvar.var_2015 = r[11];
        Gvar.var_2016 = r[12];
        Gvar.var_2017 = r[13];
        Gvar.var_2018 = r[14];
        Gvar.var_2019 = r[16];
        Gvar.var_2020 = r[19];
    } else {
        const r = Gvar.var_233[slot];
        Gvar.var_2010 = r.Var0;
        Gvar.var_2011 = r.Var3;
        Gvar.var_2012 = r.Var4;
        Gvar.var_2013 = r.Var5;
        Gvar.var_1922 = r.Var6;
        Gvar.var_2014 = r.Var7;
        Gvar.var_2015 = r.Var11;
        Gvar.var_2016 = r.Var12;
        Gvar.var_2017 = r.Var13;
        Gvar.var_2018 = r.Var14;
        Gvar.var_2019 = r.Var16;
        Gvar.var_2020 = r.Var19;
    }
}

/** カーソル選択中アイテムの 7フィールド (var_2023-2029) 転記 */
function copyCursorFields(slot: number, fromBag: boolean): void {
    if (fromBag) {
        const r = Gvar.var_486[Gvar.var_682][slot];
        Gvar.var_2023 = r[0];
        Gvar.var_2024 = r[5];
        Gvar.var_2025 = r[12];
        Gvar.var_2026 = r[13];
        Gvar.var_2027 = r[14];
        Gvar.var_2028 = r[15];
        Gvar.var_2029 = r[16];
    } else {
        const r = Gvar.var_233[slot];
        Gvar.var_2023 = r.Var0;
        Gvar.var_2024 = r.Var5;
        Gvar.var_2025 = r.Var12;
        Gvar.var_2026 = r.Var13;
        Gvar.var_2027 = r.Var14;
        Gvar.var_2028 = r.Var15;
        Gvar.var_2029 = r.Var16;
    }
}

/** item_class2 → サブメニュー枠の高さ (var_1822) */
const CLASS2_HEIGHT: Record<number, number> = {
    3: 97, 4: 114, 5: 131, 6: 148, 7: 165, 8: 182, 9: 199,
};

/** 同じ位置に ">" を3回重ね描き (太字風) */
function drawCursorTriple(x: number, y: number): void {
    Adap.pos(x, y); Adap.mes(">");
    Adap.pos(x + 1, y); Adap.mes(">");
    Adap.pos(x + 2, y); Adap.mes(">");
}

async function func460(this: any): Promise<void> {
    Adap.dbgprt(460);

    // ====== 道具一覧パネル枠 (var_220 == 0) ======
    if (Gvar.var_220 == 0) {
        Adap.color(0, 0, 0);
        Adap.gmode(4, null, null, 100);
        Adap.pos(5, 35);
        if (Gvar.item_page_number != 3) {
            Adap.gcopy(12, 0, 0, 332, 235);
        } else {
            Adap.gcopy(12, 0, 0, 332, 45);
        }
        Adap.pos(5, 273);
        Adap.gcopy(12, 0, 0, 332, 62);
        Adap.color(255, 255, 255);
        Adap.line(9, 37, 330, 37);
        if (Gvar.item_page_number != 3) {
            Adap.line(9, 267, 166, 267);
            Adap.line(190, 267, 330, 267);
            Adap.line(8, 38, 8, 265);
            Adap.line(332, 38, 332, 265);
        } else {
            Adap.line(9, 77, 156, 77);
            Adap.line(200, 77, 330, 77);
            Adap.line(8, 38, 8, 75);
            Adap.line(332, 38, 332, 75);
        }
        Adap.pset(9, 38);
        Adap.pset(331, 38);
        if (Gvar.item_page_number != 3) {
            Adap.pset(9, 266);
            Adap.pset(331, 266);
        } else {
            Adap.pset(9, 76);
            Adap.pset(331, 76);
        }
    }

    // ====== ヤバいもの内パネル枠 (var_220 == 1) ======
    if (Gvar.var_220 == 1) {
        Adap.color(0, 0, 0);
        Adap.gmode(4, null, null, 100);
        Adap.pos(5, 35);
        Adap.gcopy(12, 0, 0, 332, Gvar.var_1881 - 30);
        Adap.pos(5, 273);
        Adap.gcopy(12, 0, 0, 332, 62);
        Adap.color(255, 255, 255);
        Adap.line(9, 37, 330, 37);
        Adap.line(9, Gvar.var_1881, 330, Gvar.var_1881);
        Adap.line(8, 38, 8, Gvar.var_1881 - 2);
        Adap.line(332, 38, 332, Gvar.var_1881 - 2);
        Adap.pset(9, 38);
        Adap.pset(331, 38);
        Adap.pset(9, Gvar.var_1881 - 1);
        Adap.pset(331, Gvar.var_1881 - 1);
    }

    // ====== 説明欄の枠 (共通) ======
    Adap.line(9, 275, 330, 275);
    Adap.line(9, 332, 330, 332);
    Adap.line(8, 276, 8, 330);
    Adap.line(332, 276, 332, 330);
    Adap.pset(9, 276);
    Adap.pset(331, 276);
    Adap.pset(9, 331);
    Adap.pset(331, 331);
    Adap.gmode(2, null, null, null);

    // ====== ループ開始位置 (var_1620) ======
    if (Gvar.item_page_number == 1) Gvar.var_1620 = 1;
    if (Gvar.item_page_number == 2) Gvar.var_1620 = 11;
    if (Gvar.item_page_number == 3) Gvar.var_1620 = 0;
    if (Gvar.var_220 == 1) Gvar.var_1620 = 1;
    Gvar.var_230 = 45;

    let loopCount: any = (Gvar.item_page_number != 3) ? 10 : 1;
    const fromBag = (Gvar.var_220 == 1);

    for (let cnt1 = 0; cnt1 < loopCount; ++cnt1) {
        // 乳母車での見えなくなったアイテム
        if (Gvar.var_220 == 1 && Gvar.var_233[Gvar.var_1882].Var0 == 817 && Gvar.var_119 == 0) {
            break;
        }

        // 1行分のフィールド転記
        copyItemRow13(Gvar.var_1620, fromBag);

        Gvar.belongings_item_list = Gvar.var_2010;
        Gvar.disc_rarity = Gvar.var_2017;
        await Func.func492(); // アイテムリスト呼び出し
        Gvar.var_2021 = 0;

        // ヤバいもの "押す" 機能 (No=850-859, 851除く)
        if (Gvar.var_220 == 1
            && Gvar.var_1620 <= Gvar.var_233[Gvar.var_1882].Var7
            && Gvar.var_233[Gvar.var_1882].Var0 >= 850
            && Gvar.var_233[Gvar.var_1882].Var0 < 860
            && Gvar.var_233[Gvar.var_1882].Var0 != 851) {
            Adap.font(Gvar.font_type, Gvar.font_size = 16, Gvar.font_style = 1);
            Adap.color(255, 255, 255);
            Adap.pos(40, Gvar.var_230);
            Adap.mes("何か");
        }

        // ヤバいもの No=851 "ホルマジオのビン"
        if (Gvar.var_220 == 1 && Gvar.var_233[Gvar.var_1882].Var0 == 851) {
            Adap.font(Gvar.font_type, Gvar.font_size = 16, Gvar.font_style = 1);
            Adap.color(255, 255, 255);
            Adap.pos(40, Gvar.var_230);
            if (Gvar.var_862[851][0] == 0) {
                Gvar.var_1916 = Gvar.var_233[Gvar.var_1882].Var6;
                if (Gvar.var_486[Gvar.var_1916][Gvar.var_1620][15] >= 1) {
                    Adap.mes("何か");
                }
            }
            if (Gvar.var_862[851][0] == 1) {
                Gvar.var_1916 = Gvar.var_233[Gvar.var_1882].Var6;
                Gvar.enemy_list = Gvar.var_486[Gvar.var_1916][Gvar.var_1620][15];
                await Func.func626();
                Gvar.var_2022 = "" + Gvar.enemy_name;
                if (Gvar.var_486[Gvar.var_1916][Gvar.var_1620][18] >= 2) {
                    Gvar.var_2022 = "" + Gvar.var_2022 + " Lv" + Gvar.var_486[Gvar.var_1916][Gvar.var_1620][18];
                }
                Adap.mes("" + Gvar.var_2022);
            }
        }

        // ヤバいものNo=851 以外
        if (Gvar.var_220 != 1 || Gvar.var_233[Gvar.var_1882].Var0 != 851) {
            if (Gvar.var_2010 > 0) {
                Adap.font(Gvar.font_type, Gvar.font_size = 16, Gvar.font_style = 1);
                Adap.color(255, 255, 255);
                Adap.pos(40, Gvar.var_230);

                // ゴールド
                if (Gvar.belongings_item_list == 1) {
                    Adap.color(255, 255, 255);
                    Adap.mes("" + Gvar.var_2017 + "G");
                }

                // 装備disc (100-399)
                if (Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 400) {
                    if (Gvar.var_220 == 1) {
                        if (Gvar.var_2018 == 0) {
                            Adap.color(0, 190, 0);
                            Adap.mes(Gvar.item_name);
                        }
                        if (Gvar.var_2018 == 1) {
                            Adap.color(0, 255, 0);
                            Adap.mes(formatItemName(Gvar.item_name, Gvar.var_2012, Gvar.var_2020));
                        }
                    }
                    if (Gvar.var_220 == 0) {
                        if (Gvar.var_2018 == 0) {
                            Adap.color(0, 190, 0);
                            Adap.mes(Gvar.item_name);
                        }
                        if (Gvar.var_2018 == 1) {
                            // 装備状態に応じて色違いの E マーク + アイテム名
                            if (Gvar.var_476[Gvar.var_1620] == 0
                                && Gvar.var_477[Gvar.var_1620] == 0
                                && Gvar.var_478[Gvar.var_1620] == 0) {
                                Adap.color(0, 255, 0);
                                Adap.mes(formatItemName(Gvar.item_name, Gvar.var_2012, Gvar.var_2020));
                            }
                            if (Gvar.var_476[Gvar.var_1620] == 1) {
                                drawEquipMark(Gvar.var_230, 255, 255, 0);
                                Adap.mes(formatItemName(Gvar.item_name, Gvar.var_2012, Gvar.var_2020));
                            }
                            if (Gvar.var_477[Gvar.var_1620] == 1) {
                                drawEquipMark(Gvar.var_230, 255, 180, 90);
                                Adap.mes(formatItemName(Gvar.item_name, Gvar.var_2012, Gvar.var_2020));
                            }
                            if (Gvar.var_478[Gvar.var_1620] == 1) {
                                drawEquipMark(Gvar.var_230, 240, 0, 240);
                                Adap.mes(formatItemName(Gvar.item_name, Gvar.var_2012, Gvar.var_2020));
                            }
                        }
                    }
                }

                // 射撃disc (400-499)
                if (Gvar.belongings_item_list >= 400 && Gvar.belongings_item_list < 500) {
                    if (Gvar.var_479[Gvar.var_1620] == 0 || Gvar.var_220 == 1) {
                        Adap.color(225, 195, 145);
                        Adap.mes("" + Gvar.item_name + "(" + Gvar.var_2011 + ")");
                    }
                    if (Gvar.var_479[Gvar.var_1620] == 1 && Gvar.var_220 == 0) {
                        drawEquipMark(Gvar.var_230, 225, 195, 145);
                        Adap.mes("" + Gvar.item_name + "(" + Gvar.var_2011 + ")");
                    }
                }

                // 記憶disc (500-599)
                if (Gvar.belongings_item_list >= 500 && Gvar.belongings_item_list < 600) {
                    Adap.color(255, 255, 255);
                    if (Gvar.var_862[Gvar.belongings_item_list][0] == 0
                        && Gvar.dungeon_number != 0
                        && Gvar.dungeon_number != 1
                        && Gvar.dungeon_number != 99) {
                        Adap.color(200, 200, 200);
                    }
                    Adap.pos(40, Gvar.var_230);
                    Adap.mes(Gvar.item_name);
                }

                // 食糧/回復 (600-699)
                if (Gvar.belongings_item_list >= 600 && Gvar.belongings_item_list < 700) {
                    Adap.color(255, 255, 255);
                    Adap.pos(40, Gvar.var_230);
                    Adap.mes(Gvar.item_name);
                }

                // その他消費 (700-749)
                if (Gvar.belongings_item_list >= 700 && Gvar.belongings_item_list < 750) {
                    Adap.color(255, 255, 255);
                    Adap.pos(40, Gvar.var_230);
                    Adap.mes(Gvar.item_name);
                }

                // ヤバいもの (800-899)
                if (Gvar.belongings_item_list >= 800 && Gvar.belongings_item_list < 900) {
                    Adap.color(0, 255, 255);
                    if (Gvar.var_862[Gvar.belongings_item_list][0] == 0
                        && Gvar.dungeon_number != 0
                        && Gvar.dungeon_number != 1
                        && Gvar.dungeon_number != 99) {
                        Adap.color(0, 170, 170);
                    }
                    Adap.mes("" + Gvar.item_name + "(" + Gvar.var_2014 + ")");
                    if (Gvar.belongings_item_list == 800
                        && Gvar.var_862[800][0] == 1
                        && Gvar.var_990[Gvar.var_1922] == 1
                        && Gvar.dungeon_number != 99) {
                        Gvar.var_1923 = Gvar.var_1922;
                        await Func.func490();
                        Adap.pos(155, Gvar.var_230 + 3);
                        Adap.color(255, 255, 255);
                        Adap.font(Gvar.font_type, 12, 1);
                        Adap.mes(Gvar.var_1924);
                        Adap.font(Gvar.font_type, Gvar.font_size = 16, Gvar.font_style = 1);
                    }
                }

                // コミック スティールボールラン (750-799)
                if (Gvar.belongings_item_list >= 750 && Gvar.belongings_item_list < 800) {
                    Adap.color(255, 255, 255);
                    Adap.pos(40, Gvar.var_230);
                    Adap.mes(Gvar.item_name);
                }

                // コミック (900-999)
                if (Gvar.belongings_item_list >= 900 && Gvar.belongings_item_list < 1000) {
                    Adap.color(255, 255, 255);
                    Adap.pos(40, Gvar.var_230);
                    Adap.mes(Gvar.item_name);
                }

                // 価格 (var_2015 == 1: 売値表示)
                if (Gvar.var_2015 == 1) {
                    Gvar.var_1925 = 0;
                    Adap.pos(275, Gvar.var_230);
                    Adap.color(0, 255, 0);
                    Gvar.var_482 = (Gvar.var_2011 + Gvar.var_2012) * 50;
                    if (Gvar.var_2010 != 800) {
                        Gvar.var_482 = Gvar.var_2014 * 100 + Gvar.var_482;
                    }
                    if (Gvar.var_2020 > 1) {
                        Gvar.var_482 = Gvar.var_2020 * 500 + Gvar.var_482;
                    }
                    Gvar.var_1925 = Gvar.buying_price + Gvar.var_482;
                    if (Gvar.belongings_item_list >= 800 && Gvar.belongings_item_list < 900) {
                        Gvar.var_484 = 0;
                        Gvar.var_485 = Gvar.var_1922;
                        for (let cnt6 = 0; cnt6 < 10; ++cnt6) {
                            if (Gvar.var_486[Gvar.var_485][Gvar.var_484][0] > 0
                                && Gvar.var_486[Gvar.var_485][Gvar.var_484][11] == 1) {
                                Gvar.belongings_item_list = Gvar.var_486[Gvar.var_485][Gvar.var_484][0];
                                await Func.func492();
                                Gvar.var_482 = (Gvar.var_486[Gvar.var_485][Gvar.var_484][3]
                                              + Gvar.var_486[Gvar.var_485][Gvar.var_484][4]) * 50;
                                if (Gvar.var_486[Gvar.var_485][Gvar.var_484][19] > 1) {
                                    Gvar.var_482 = Gvar.var_486[Gvar.var_485][Gvar.var_484][19] * 500 + Gvar.var_482;
                                }
                                Gvar.var_1925 = Gvar.var_1925 + Gvar.buying_price + Gvar.var_482;
                            }
                            Gvar.var_484 = Gvar.var_484 + 1;
                        }
                    }
                    Adap.mes(Gvar.var_1925);
                }

                // disc装備マーク (アイコン)
                if (Gvar.var_2016 == 1 && Gvar.var_2018 == 1) {
                    Adap.pos(32, Gvar.var_230 + 8);
                    Adap.gmode(2, null, null, null);
                    Adap.gcopy(8, 40, 50, 10, 10);
                }
                if (Gvar.var_2016 == 2 && Gvar.var_2018 == 1) {
                    Adap.pos(31, Gvar.var_230 + 9);
                    Adap.gmode(2, null, null, null);
                    Adap.gcopy(8, 40, 80, 10, 10);
                }
            }
        }
        Gvar.var_1620 = Gvar.var_1620 + 1;
        Gvar.var_230 = Gvar.var_230 + 22;
    }

    // ====== カーソル位置のアイテム説明 (var_1880 == 0) ======
    if (Gvar.var_1880 == 0) {
        copyCursorFields(Gvar.var_225, fromBag);

        if (Gvar.item_page_number != 3) {
            Gvar.belongings_item_list = Gvar.var_2023;
            Gvar.disc_rarity = Gvar.var_2026;
        } else {
            Gvar.belongings_item_list = Gvar.var_233[0].Var0;
            Gvar.disc_rarity = Gvar.var_233[0].Var13;
        }
        await Func.func492();

        Adap.font(Gvar.font_type, Gvar.font_size = 14, Gvar.font_style = 1);
        if (Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 400
            && Gvar.var_2025 == 1 && Gvar.var_2027 == 1
            && Gvar.var_862[Gvar.belongings_item_list][0] == 1) {
            Adap.pos(225, 283);
            Adap.color(255, 0, 0);
            Adap.mes("呪縛");
        }
        if (Gvar.nouryoku_disc_id == 112 || Gvar.nouryoku_disc_id == 204
            || Gvar.nouryoku_disc_id == 394 || Gvar.nouryoku_disc_id == 395) {
            if (Gvar.var_2028 == 2) {
                Adap.pos(275, 283);
                Adap.color(255, 0, 0);
                Adap.mes("爆弾");
            }
        }
        Adap.pos(15, 283);
        Adap.color(255, 255, 255);
        if (Gvar.belongings_item_list < 100 || Gvar.belongings_item_list >= 400) {
            Adap.mes(Gvar.item_description1);
        }
        if (Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 400 && Gvar.var_2027 == 0) {
            Adap.mes("" + Gvar.item_description1);
        }
        if (Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 400 && Gvar.var_2027 == 1) {
            Adap.mes("" + Gvar.item_description1 + "  空き容量 " + Gvar.var_2024);
        }
        Adap.color(255, 255, 255);
        Adap.mes(Gvar.effects_message);

        // 能力色 (var_812)
        Adap.color(255, 255, 255);
        if (Gvar.var_812 == 1) Adap.color(255, 255, 0);
        if (Gvar.var_812 == 2) Adap.color(255, 180, 90);
        if (Gvar.var_812 == 3) Adap.color(0, 255, 0);
        if (Gvar.var_812 == 4) Adap.color(240, 0, 240);
        Adap.mes(Gvar.item_ability_description);
    }

    // ====== ヤバいもの内 (var_1880 == 1): 中身プレビュー ======
    if (Gvar.var_1880 == 1) {
        Adap.pos(15, 283);
        Adap.font(Gvar.font_type, Gvar.font_size = 14, Gvar.font_style = 1);
        Adap.color(255, 255, 255);
        Adap.mes("");
        if (Gvar.var_233[Gvar.var_1882].Var0 < 850 || Gvar.var_233[Gvar.var_1882].Var0 >= 860) {
            Adap.mes("                  何も入っていないぞ");
        }
        if (Gvar.var_233[Gvar.var_1882].Var0 >= 850 && Gvar.var_233[Gvar.var_1882].Var0 < 860
            && Gvar.var_233[Gvar.var_1882].Var7 == 0
            && Gvar.var_233[Gvar.var_1882].Var0 != 851) {
            Adap.mes("                  何も入っていないぞ");
        }
        if (Gvar.var_233[Gvar.var_1882].Var0 >= 850 && Gvar.var_233[Gvar.var_1882].Var0 < 860
            && Gvar.var_233[Gvar.var_1882].Var7 != 0
            && Gvar.var_233[Gvar.var_1882].Var0 != 851) {
            Adap.mes("                      何かが見える");
        }
        if (Gvar.var_233[Gvar.var_1882].Var0 == 851) {
            Gvar.var_1916 = Gvar.var_233[Gvar.var_1882].Var6;
            if (Gvar.var_486[Gvar.var_1916][1][15] == 0 || Gvar.var_233[Gvar.var_1882].Var7 == 0) {
                Adap.mes("                  何も入っていないぞ");
            }
            if (Gvar.var_486[Gvar.var_1916][1][15] != 0 && Gvar.var_233[Gvar.var_1882].Var7 != 0) {
                Adap.mes("                  何かが見える");
            }
        }
        Adap.mes("");
    }

    // ====== 取り出せない (var_1880 == 2) ======
    if (Gvar.var_1880 == 2) {
        Adap.pos(15, 283);
        Adap.font(Gvar.font_type, Gvar.font_size = 14, Gvar.font_style = 1);
        Adap.color(255, 255, 255);
        Adap.mes("");
        if (Gvar.var_233[Gvar.var_1882].Var0 != 817) {
            Adap.mes("              取り出すことはできないぞ");
        }
        if (Gvar.var_233[Gvar.var_1882].Var0 == 817) {
            if (Gvar.var_119 == 0) {
                Adap.mes("                  何も入っていないぞ");
            }
            if (Gvar.var_119 >= 1) {
                Adap.mes("              取り出すことはできないぞ");
            }
        }
        Adap.mes("");
    }

    // ====== ページ切替矢印 / 足元タイトル ======
    Adap.font(Gvar.font_type, Gvar.font_size = 16, Gvar.font_style = 1);
    Adap.pos(160, 269);
    Adap.color(255, 255, 255);
    if (Gvar.var_220 == 0) {
        if (Gvar.item_page_number == 1) {
            if (Gvar.var_224 < 11 && Gvar.var_77[Gvar.var_66][Gvar.var_67] == 0) {
                Adap.line(155, 267, 201, 267);
            }
            if (Gvar.var_224 > 10) {
                drawCursorTriple(175, 259);
            }
            if (Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0) {
                drawCursorTriple(175, 259);
            }
        }
        if (Gvar.item_page_number == 2) {
            if (Gvar.var_77[Gvar.var_66][Gvar.var_67] == 0) {
                Adap.pos(175, 259); Adap.mes("<");
                Adap.pos(176, 259); Adap.mes("<");
                Adap.pos(177, 259); Adap.mes("<");
            }
            if (Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0) {
                Adap.pos(166, 259); Adap.mes("< >");
                Adap.pos(167, 259); Adap.mes("< >");
                Adap.pos(168, 259); Adap.mes("< >");
            }
        }
        if (Gvar.item_page_number == 3) {
            Adap.pos(168, 71);
            Adap.font(Gvar.font_type, 12, 1);
            Adap.mes("足元");
        }
    }

    // ====== カーソル位置の "▶" 表示 ======
    if (Gvar.var_1880 == 0) {
        Adap.color(255, 255, 255);
        Adap.font(Gvar.font_type, Gvar.font_size = 16, Gvar.font_style = 1);
        drawCursorTriple(15, Gvar.Y_axis_item_position);
    }

    // ====== アイテム選択時のサブメニュー (var_221 >= 1) ======
    if (Gvar.var_221 >= 1) {
        Gvar.var_1822 = CLASS2_HEIGHT[Gvar.item_class2] ?? 114;

        Adap.gmode(4, null, null, 100);
        Adap.pos(252, 38);
        Adap.gcopy(12, 0, 0, 80, Gvar.var_1822 - 32);
        Adap.color(255, 255, 255);
        if (Gvar.var_221 >= 2) Adap.color(150, 150, 150);
        Adap.line(255, 41, 326, 41);
        Adap.line(255, Gvar.var_1822 + 2, 326, Gvar.var_1822 + 2);
        Adap.line(254, 42, 254, Gvar.var_1822);
        Adap.line(328, 42, 328, Gvar.var_1822);
        Adap.pset(255, 42);
        Adap.pset(327, 42);
        Adap.pset(255, Gvar.var_1822 + 1);
        Adap.pset(327, Gvar.var_1822 + 1);
        Adap.font(Gvar.font_type, Gvar.font_size = 16, Gvar.font_style = 1);
        Adap.pos(277, 46);

        // ----- メニューラベル群 -----
        if (Gvar.var_231 == 1) drawMenuLabel("拾う");

        if (Gvar.item_class1 != 0) {
            if (Gvar.item_class1 == 1 && Gvar.var_220 == 0 && Gvar.var_231 == 0) drawMenuLabel("装備");
            if (Gvar.item_class1 == 2 && Gvar.var_479[Gvar.var_225] == 0 && Gvar.var_220 == 0 && Gvar.var_231 == 0) drawMenuLabel("装備");
            if (Gvar.item_class1 == 2 && Gvar.var_479[Gvar.var_225] == 1 && Gvar.var_220 == 0 && Gvar.var_231 == 0) drawMenuLabel("はずす");
            if (Gvar.item_class1 == 3) drawMenuLabel("使う");
            if (Gvar.item_class1 == 4) drawMenuLabel("食べる");
            if (Gvar.item_class1 == 5) drawMenuLabel("見る");
            if (Gvar.item_class1 == 6) drawMenuLabel("読む");
        }
        if (Gvar.item_class1 == 2) drawMenuLabel("撃つ");
        if (Gvar.item_class1 == 1 && Gvar.var_2032 != 0) drawMenuLabel("はずす");
        if (Gvar.item_class1 == 1 || Gvar.item_class1 == 2) drawMenuLabel("発動");
        if (Gvar.item_class1 == 5) {
            if (Gvar.var_233[Gvar.var_225].Var0 < 850 || Gvar.var_233[Gvar.var_225].Var0 >= 860) drawMenuLabel("入れる");
            if (Gvar.var_233[Gvar.var_225].Var0 >= 850 && Gvar.var_233[Gvar.var_225].Var0 < 860) drawMenuLabel("押す");
        }
        drawMenuLabel("投げる");
        if (Gvar.var_220 == 1) drawMenuLabel("出す");
        if (Gvar.var_231 == 0) drawMenuLabel("置く");
        if (Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0 && Gvar.var_220 == 0) {
            Gvar.var_2033 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
            if (Gvar.var_78[Gvar.var_2033].Var0 != 1) {
                drawMenuLabel("交換");
            }
        }
        if (Gvar.var_2034 == 1) {
            Gvar.var_2035 = "名前";
            if (Gvar.belongings_item_list == 800 && Gvar.var_862[800][0] == 1) {
                Gvar.var_2035 = "メモ";
            }
            drawMenuLabel(Gvar.var_2035);
        }
        drawMenuLabel("説明");

        // カーソル "▶"
        Adap.color(255, 255, 255);
        if (Gvar.var_221 >= 2) Adap.color(150, 150, 150);
        Adap.font(Gvar.font_type, Gvar.font_size = 16, Gvar.font_style = 1);
        Adap.pos(260, Gvar.var_229); Adap.mes(">");
        Adap.pos(260, Gvar.var_229); Adap.mes(">");
        Adap.pos(260, Gvar.var_229); Adap.mes(">");
    }

    // ====== サブメニューの "発動" 選択時 (var_221 == 2) ======
    if (Gvar.var_221 == 2) {
        Gvar.var_2036 = 0;
        Gvar.var_2037 = 100;
        Gvar.var_2038 = 20;
        if (Gvar.var_2032 != 0) Gvar.var_2038 = 10;

        Adap.gmode(4, null, null, 100);
        Adap.pos(252 - Gvar.var_2036, 38 + Gvar.var_2037);
        Adap.gcopy(12, 0, 0, 80, 42 + Gvar.var_2038);
        Adap.color(255, 255, 255);
        Adap.line(255 - Gvar.var_2036, 41 + Gvar.var_2037, 326 - Gvar.var_2036, 41 + Gvar.var_2037);
        Adap.line(255 - Gvar.var_2036, 76 + Gvar.var_2037 + Gvar.var_2038, 326 - Gvar.var_2036, 76 + Gvar.var_2037 + Gvar.var_2038);
        Adap.line(254 - Gvar.var_2036, 42 + Gvar.var_2037, 254 - Gvar.var_2036, 74 + Gvar.var_2037 + Gvar.var_2038);
        Adap.line(328 - Gvar.var_2036, 42 + Gvar.var_2037, 328 - Gvar.var_2036, 74 + Gvar.var_2037 + Gvar.var_2038);
        Adap.pset(255 - Gvar.var_2036, 42 + Gvar.var_2037);
        Adap.pset(327 - Gvar.var_2036, 42 + Gvar.var_2037);
        Adap.pset(255 - Gvar.var_2036, 75 + Gvar.var_2037 + Gvar.var_2038);
        Adap.pset(327 - Gvar.var_2036, 75 + Gvar.var_2037 + Gvar.var_2038);

        Adap.font(Gvar.font_type, Gvar.font_size = 16, Gvar.font_style = 1);
        Adap.pos(277 - Gvar.var_2036, 46 + Gvar.var_2037);
        if (Gvar.var_2032 != 1) { Adap.color(255, 255, 0); Adap.mes("攻撃"); }
        if (Gvar.var_2032 != 2) { Adap.color(255, 180, 90); Adap.mes("防御"); }
        if (Gvar.var_2032 != 3) { Adap.color(240, 0, 240); Adap.mes("能力"); }
        Adap.color(255, 255, 255);

        Adap.font(Gvar.font_type, Gvar.font_size = 16, Gvar.font_style = 1);
        Adap.pos(260 - Gvar.var_2036, Gvar.var_246 + Gvar.var_2037); Adap.mes(">");
        Adap.pos(260 - Gvar.var_2036, Gvar.var_246 + Gvar.var_2037); Adap.mes(">");
        Adap.pos(260 - Gvar.var_2036, Gvar.var_246 + Gvar.var_2037); Adap.mes(">");
    }

    // ====== 発動の確認ダイアログ (var_221 == 3) ======
    if (Gvar.var_221 == 3) {
        Gvar.var_2036 = 120;
        Gvar.var_2037 = 100;
        Adap.gmode(4, null, null, 140);
        Adap.pos(252 - Gvar.var_2036, 38 + Gvar.var_2037);
        Adap.gcopy(12, 0, 0, 200, 52);
        Adap.color(255, 255, 255);
        Adap.line(255 - Gvar.var_2036, 41 + Gvar.var_2037, 326, 41 + Gvar.var_2037);
        Adap.line(255 - Gvar.var_2036, 86 + Gvar.var_2037, 326, 86 + Gvar.var_2037);
        Adap.line(254 - Gvar.var_2036, 42 + Gvar.var_2037, 254 - Gvar.var_2036, 84 + Gvar.var_2037);
        Adap.line(328, 42 + Gvar.var_2037, 328, 84 + Gvar.var_2037);
        Adap.pset(255 - Gvar.var_2036, 42 + Gvar.var_2037);
        Adap.pset(327, 42 + Gvar.var_2037);
        Adap.pset(255 - Gvar.var_2036, 85 + Gvar.var_2037);
        Adap.pset(327, 85 + Gvar.var_2037);
        Adap.font(Gvar.font_type, Gvar.font_size = 16, Gvar.font_style = 1);
        Adap.color(255, 255, 255);
        Adap.pos(277 - Gvar.var_2036, 48 + Gvar.var_2037);
        await Func.func492();
        Adap.mes("" + Gvar.var_2039);
        Adap.mes("やめる");
        Adap.color(255, 255, 255);
        Adap.font(Gvar.font_type, Gvar.font_size = 16, Gvar.font_style = 1);
        Adap.pos(260 - Gvar.var_2036, Gvar.var_246 + Gvar.var_2037 + 2); Adap.mes(">");
        Adap.pos(260 - Gvar.var_2036, Gvar.var_246 + Gvar.var_2037 + 2); Adap.mes(">");
        Adap.pos(260 - Gvar.var_2036, Gvar.var_246 + Gvar.var_2037 + 2); Adap.mes(">");
    }
}

export { func460 }
