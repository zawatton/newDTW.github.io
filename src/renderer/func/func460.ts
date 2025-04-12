import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func460(this: any) {
        Adap.dbgprt(460);
        // 
        if (Gvar.var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
            Adap.color(0, 0, 0);
            Adap.gmode(4, null, null, 100);
            Adap.pos(5, 35);
            if (Gvar.item_page_number != 3) {
                Adap.gcopy(12, 0, 0, 332, 235);
            }
            if (Gvar.item_page_number == 3) {
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
            }
            if (Gvar.item_page_number == 3) {
                Adap.line(9, 77, 156, 77);
                Adap.line(200, 77, 330, 77);
                Adap.line(8, 38, 8, 75);
                Adap.line(332, 38, 332, 75);
            }
            Adap.pset(9, 38);
            Adap.pset(331, 38);
            if (Gvar.item_page_number != 3) {
                Adap.pset(9, 266);
            }
            if (Gvar.item_page_number != 3) {
                Adap.pset(331, 266);
            }
            if (Gvar.item_page_number == 3) {
                Adap.pset(9, 76);
            }
            if (Gvar.item_page_number == 3) {
                Adap.pset(331, 76);
            }
        }

        if (Gvar.var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
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
        Adap.line(9, 275, 330, 275);
        Adap.line(9, 332, 330, 332);
        Adap.line(8, 276, 8, 330);
        Adap.line(332, 276, 332, 330);
        Adap.pset(9, 276);
        Adap.pset(331, 276);
        Adap.pset(9, 331);
        Adap.pset(331, 331);
        Adap.gmode(2, null, null, null);

        if (Gvar.item_page_number == 1) {
            Gvar.var_1620 = 1;
        }
        if (Gvar.item_page_number == 2) {
            Gvar.var_1620 = 11;
        }
        if (Gvar.item_page_number == 3) { // No = 3 は
            Gvar.var_1620 = 0;
        }
        if (Gvar.var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
            Gvar.var_1620 = 1;
        }
        Gvar.var_230 = 45;
        let loopCount: any = 1;
        if (Gvar.item_page_number != 3) {
            loopCount = 10;
        }
        for (let cnt1 = 0; cnt1 < loopCount; ++cnt1) {
            // 乳母車での見えなくなったアイテムの配列処理
            if (Gvar.var_220 == 1 && Gvar.var_233[Gvar.var_1882].Var0 == 817 && Gvar.var_119 == 0) {
                break;
            }
            if (Gvar.var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                Gvar.var_2009 = Gvar.var_1620;
                Gvar.var_2010 = Gvar.var_233[Gvar.var_1620].Var0;
                Gvar.var_2011 = Gvar.var_233[Gvar.var_1620].Var3;
                Gvar.var_2012 = Gvar.var_233[Gvar.var_1620].Var4;
                Gvar.var_2013 = Gvar.var_233[Gvar.var_1620].Var5;
                Gvar.var_1922 = Gvar.var_233[Gvar.var_1620].Var6;
                Gvar.var_2014 = Gvar.var_233[Gvar.var_1620].Var7;
                Gvar.var_2015 = Gvar.var_233[Gvar.var_1620].Var11;
                Gvar.var_2016 = Gvar.var_233[Gvar.var_1620].Var12;
                Gvar.var_2017 = Gvar.var_233[Gvar.var_1620].Var13;
                Gvar.var_2018 = Gvar.var_233[Gvar.var_1620].Var14;
                Gvar.var_2019 = Gvar.var_233[Gvar.var_1620].Var16;
                Gvar.var_2020 = Gvar.var_233[Gvar.var_1620].Var19;
            }
            if (Gvar.var_220 == 1) {
                Gvar.var_2009 = Gvar.var_1620;
                Gvar.var_2010 = Gvar.var_486[Gvar.var_682][Gvar.var_1620][0];
                Gvar.var_2011 = Gvar.var_486[Gvar.var_682][Gvar.var_1620][3];
                Gvar.var_2012 = Gvar.var_486[Gvar.var_682][Gvar.var_1620][4];
                Gvar.var_2013 = Gvar.var_486[Gvar.var_682][Gvar.var_1620][5];
                Gvar.var_1922 = Gvar.var_486[Gvar.var_682][Gvar.var_1620][6];
                Gvar.var_2014 = Gvar.var_486[Gvar.var_682][Gvar.var_1620][7];
                Gvar.var_2015 = Gvar.var_486[Gvar.var_682][Gvar.var_1620][11];
                Gvar.var_2016 = Gvar.var_486[Gvar.var_682][Gvar.var_1620][12];
                Gvar.var_2017 = Gvar.var_486[Gvar.var_682][Gvar.var_1620][13];
                Gvar.var_2018 = Gvar.var_486[Gvar.var_682][Gvar.var_1620][14];
                Gvar.var_2019 = Gvar.var_486[Gvar.var_682][Gvar.var_1620][16];
                Gvar.var_2020 = Gvar.var_486[Gvar.var_682][Gvar.var_1620][19];
            }
            Gvar.belongings_item_list = Gvar.var_2010;
            Gvar.disc_rarity = Gvar.var_2017;
            await Func.func492(); // アイテムリスト呼び出し          
            Gvar.var_2021 = 0;
            // ヤバいもののなかでも "押す" 機能があるものだけ
            // Gvar.var_220 はヤバいものの中を見た時に1になる
            if (Gvar.var_220 == 1 && Gvar.var_1620 <= Gvar.var_233[Gvar.var_1882].Var7 && Gvar.var_233[Gvar.var_1882].Var0 >= 850 && Gvar.var_233[Gvar.var_1882].Var0 < 860 && Gvar.var_233[Gvar.var_1882].Var0 != 851) {
        
                Adap.font(Gvar.font_type, Gvar.font_size = 16, Gvar.font_style = 1);
                Adap.color(255, 255, 255);
                Adap.pos(40, Gvar.var_230);
                Adap.mes("何か");
            }
            // ヤバいもの No = 851「ホルマジオのビン」 
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
                    await Func.func626(); // 敵リスト
                    Gvar.var_2022 = "" + Gvar.enemy_name;
                    if (Gvar.var_486[Gvar.var_1916][Gvar.var_1620][18] >= 2) {
                        Gvar.var_2022 = "" + Gvar.var_2022 + " Lv" + Gvar.var_486[Gvar.var_1916][Gvar.var_1620][18];
                    }
                    Adap.mes("" + Gvar.var_2022);
                }
            }
            // ヤバいものNo = 851「ホルマジオのビン」ではない時
            if (Gvar.var_220 != 1 || Gvar.var_233[Gvar.var_1882].Var0 != 851) {

                if (Gvar.var_2010 > 0) {
                    Adap.font(Gvar.font_type, Gvar.font_size = 16, Gvar.font_style = 1);
                    Adap.color(255, 255, 255);
                    Adap.pos(40, Gvar.var_230);
                    if (Gvar.belongings_item_list == 1) {
                        Adap.color(255, 255, 255);
                        Adap.mes("" + Gvar.var_2017 + "G");
                    }
                    // 装備disc
                    if (Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 400) {
                        if (Gvar.var_220 == 1) {
                            if (Gvar.var_2018 == 0) {
                                Adap.color(0, 190, 0);
                                Adap.mes(Gvar.item_name);
                            }
                            if (Gvar.var_2018 == 1) {
                                Adap.color(0, 255, 0);
                                if (Gvar.var_2012 == 0 && Gvar.var_2020 <= 1) {
                                    Adap.mes("" + Gvar.item_name);
                                }
                                if (Gvar.var_2012 == 0 && Gvar.var_2020 > 1) {
                                    Adap.mes("" + Gvar.item_name + " ★" + Gvar.var_2020);
                                }
                                if (Gvar.var_2012 > 0 && Gvar.var_2020 <= 1) {
                                    Adap.mes("" + Gvar.item_name + "+" + Gvar.var_2012);
                                }
                                if (Gvar.var_2012 > 0 && Gvar.var_2020 > 1) {
                                    Adap.mes("" + Gvar.item_name + "+" + Gvar.var_2012 + " ★" + Gvar.var_2020);
                                }
                            }
                        }
                        if (Gvar.var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                            if (Gvar.var_2018 == 0) {
                                Adap.color(0, 190, 0);
                                Adap.mes(Gvar.item_name);
                            }
                            if (Gvar.var_2018 == 1) {
                                if (Gvar.var_476[Gvar.var_1620] == 0 && Gvar.var_477[Gvar.var_1620] == 0 && Gvar.var_478[Gvar.var_1620] == 0) {
                                    Adap.color(0, 255, 0);
                                    if (Gvar.var_2012 == 0 && Gvar.var_2020 <= 1) {
                                        Adap.mes("" + Gvar.item_name);
                                    }
                                    if (Gvar.var_2012 == 0 && Gvar.var_2020 > 1) {
                                        Adap.mes("" + Gvar.item_name + " ★" + Gvar.var_2020);
                                    }
                                    if (Gvar.var_2012 > 0 && Gvar.var_2020 <= 1) {
                                        Adap.mes("" + Gvar.item_name + "+" + Gvar.var_2012);
                                    }
                                    if (Gvar.var_2012 > 0 && Gvar.var_2020 > 1) {
                                        Adap.mes("" + Gvar.item_name + "+" + Gvar.var_2012 + " ★" + Gvar.var_2020);
                                    }
                                }
                                if (Gvar.var_476[Gvar.var_1620] == 1) {
                                    Adap.color(255, 255, 0);
                                    Adap.pos(32, Gvar.var_230);
                                    Adap.font(Gvar.font_type, 8);
                                    Adap.mes("E");
                            
                                    Adap.font(Gvar.font_type, Gvar.font_size = 16, Gvar.font_style = 1);
                                    Adap.pos(40, Gvar.var_230);
                                    if (Gvar.var_2012 == 0 && Gvar.var_2020 <= 1) {
                                        Adap.mes("" + Gvar.item_name);
                                    }
                                    if (Gvar.var_2012 == 0 && Gvar.var_2020 > 1) {
                                        Adap.mes("" + Gvar.item_name + " ★" + Gvar.var_2020);
                                    }
                                    if (Gvar.var_2012 > 0 && Gvar.var_2020 <= 1) {
                                        Adap.mes("" + Gvar.item_name + "+" + Gvar.var_2012);
                                    }
                                    if (Gvar.var_2012 > 0 && Gvar.var_2020 > 1) {
                                        Adap.mes("" + Gvar.item_name + "+" + Gvar.var_2012 + " ★" + Gvar.var_2020);
                                    }
                                }
                                if (Gvar.var_477[Gvar.var_1620] == 1) {
                                    Adap.color(255, 180, 90);
                                    Adap.pos(32, Gvar.var_230);
                                    Adap.font(Gvar.font_type, 8);
                                    Adap.mes("E");
                            
                                    Adap.font(Gvar.font_type, Gvar.font_size = 16, Gvar.font_style = 1);
                                    Adap.pos(40, Gvar.var_230);
                                    if (Gvar.var_2012 == 0 && Gvar.var_2020 <= 1) {
                                        Adap.mes("" + Gvar.item_name);
                                    }
                                    if (Gvar.var_2012 == 0 && Gvar.var_2020 > 1) {
                                        Adap.mes("" + Gvar.item_name + " ★" + Gvar.var_2020);
                                    }
                                    if (Gvar.var_2012 > 0 && Gvar.var_2020 <= 1) {
                                        Adap.mes("" + Gvar.item_name + "+" + Gvar.var_2012);
                                    }
                                    if (Gvar.var_2012 > 0 && Gvar.var_2020 > 1) {
                                        Adap.mes("" + Gvar.item_name + "+" + Gvar.var_2012 + " ★" + Gvar.var_2020);
                                    }
                                }
                                if (Gvar.var_478[Gvar.var_1620] == 1) {
                                    Adap.color(240, 0, 240);
                                    Adap.pos(32, Gvar.var_230);
                                    Adap.font(Gvar.font_type, 8);
                                    Adap.mes("E");
                            
                                    Adap.font(Gvar.font_type, Gvar.font_size = 16, Gvar.font_style = 1);
                                    Adap.pos(40, Gvar.var_230);
                                    if (Gvar.var_2012 == 0 && Gvar.var_2020 <= 1) {
                                        Adap.mes("" + Gvar.item_name);
                                    }
                                    if (Gvar.var_2012 == 0 && Gvar.var_2020 > 1) {
                                        Adap.mes("" + Gvar.item_name + " ★" + Gvar.var_2020);
                                    }
                                    if (Gvar.var_2012 > 0 && Gvar.var_2020 <= 1) {
                                        Adap.mes("" + Gvar.item_name + "+" + Gvar.var_2012);
                                    }
                                    if (Gvar.var_2012 > 0 && Gvar.var_2020 > 1) {
                                        Adap.mes("" + Gvar.item_name + "+" + Gvar.var_2012 + " ★" + Gvar.var_2020);
                                    }
                                }
                            }
                        }
                    }
                    // 射撃disc
                    if (Gvar.belongings_item_list >= 400 && Gvar.belongings_item_list < 500) {
                        if (Gvar.var_479[Gvar.var_1620] == 0 || Gvar.var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
                            Adap.color(225, 195, 145);
                            Adap.mes("" + Gvar.item_name + "(" + Gvar.var_2011 + ")");
                        }
                        if (Gvar.var_479[Gvar.var_1620] == 1 && Gvar.var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                            Adap.color(225, 195, 145);
                            Adap.pos(32, Gvar.var_230);
                            Adap.font(Gvar.font_type, 8);
                            Adap.mes("E");
                    
                            Adap.font(Gvar.font_type, Gvar.font_size = 16, Gvar.font_style = 1);
                            Adap.pos(40, Gvar.var_230);
                            Adap.mes("" + Gvar.item_name + "(" + Gvar.var_2011 + ")");
                        }
                    }
                    // 記憶disc
                    if (Gvar.belongings_item_list >= 500 && Gvar.belongings_item_list < 600) {
                        Adap.color(255, 255, 255);
                        if (Gvar.var_862[Gvar.belongings_item_list][0] == 0 && Gvar.dungeon_number != 0 && Gvar.dungeon_number != 1 && Gvar.dungeon_number != 99) {
                            Adap.color(200, 200, 200);
                        }
                        Adap.pos(40, Gvar.var_230);
                        Adap.mes(Gvar.item_name);
                    }
                    // 食糧、回復アイテム
                    if (Gvar.belongings_item_list >= 600 && Gvar.belongings_item_list < 700) {
                        Adap.color(255, 255, 255);
                        Adap.pos(40, Gvar.var_230);
                        Adap.mes(Gvar.item_name);
                    }
                    // その他の消費
                    if (Gvar.belongings_item_list >= 700 && Gvar.belongings_item_list < 750) {
                        Adap.color(255, 255, 255);
                        Adap.pos(40, Gvar.var_230);
                        Adap.mes(Gvar.item_name);
                    }
                    // ヤバいもの
                    if (Gvar.belongings_item_list >= 800 && Gvar.belongings_item_list < 900) {
                        Adap.color(0, 255, 255);
                        if (Gvar.var_862[Gvar.belongings_item_list][0] == 0 && Gvar.dungeon_number != 0 && Gvar.dungeon_number != 1 && Gvar.dungeon_number != 99) {
                            Adap.color(0, 170, 170);
                        }
                        Adap.mes("" + Gvar.item_name + "(" + Gvar.var_2014 + ")");
                        if (Gvar.belongings_item_list == 800 && Gvar.var_862[800][0] == 1 && Gvar.var_990[Gvar.var_1922] == 1 && Gvar.dungeon_number != 99) {
                            Gvar.var_1923 = Gvar.var_1922;
                            await Func.func490();
                            Adap.pos(155, Gvar.var_230 + 3);
                            Adap.color(255, 255, 255);
                    
                            Adap.font(Gvar.font_type, 12, 1);
                            Adap.mes(Gvar.var_1924);
                    
                            Adap.font(Gvar.font_type, Gvar.font_size = 16, Gvar.font_style = 1);
                        }
                    } 
                    // コミック スティールボールラン 7 ~ 15, 装備+99
                    if (Gvar.belongings_item_list >= 750 && Gvar.belongings_item_list < 800) {
                        Adap.color(255, 255, 255);
                        Adap.pos(40, Gvar.var_230);
                        Adap.mes(Gvar.item_name);
                    }
                    // コミック
                    if (Gvar.belongings_item_list >= 900 && Gvar.belongings_item_list < 1000) {
                        Adap.color(255, 255, 255);
                        Adap.pos(40, Gvar.var_230);
                        Adap.mes(Gvar.item_name);
                    }
                    if (Gvar.var_2015 == 1) {
                        Gvar.var_1925 = 0;
                        Adap.pos(275, Gvar.var_230);
                        Adap.color(0, 255, 0);
                        Gvar.var_482 = 0;
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
                                if (Gvar.var_486[Gvar.var_485][Gvar.var_484][0] > 0 && Gvar.var_486[Gvar.var_485][Gvar.var_484][11] == 1) {
                                    Gvar.belongings_item_list = Gvar.var_486[Gvar.var_485][Gvar.var_484][0];
                                    await Func.func492(); // アイテムリスト呼び出し
                                    Gvar.var_482 = 0;
                                    Gvar.var_482 = (Gvar.var_486[Gvar.var_485][Gvar.var_484][3] + Gvar.var_486[Gvar.var_485][Gvar.var_484][4]) * 50;
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

        if (Gvar.var_1880 == 0) {
            if (Gvar.var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                Gvar.var_2023 = Gvar.var_233[Gvar.var_225].Var0;
                Gvar.var_2024 = Gvar.var_233[Gvar.var_225].Var5;
                Gvar.var_2025 = Gvar.var_233[Gvar.var_225].Var12;
                Gvar.var_2026 = Gvar.var_233[Gvar.var_225].Var13;
                Gvar.var_2027 = Gvar.var_233[Gvar.var_225].Var14;
                Gvar.var_2028 = Gvar.var_233[Gvar.var_225].Var15;
                Gvar.var_2029 = Gvar.var_233[Gvar.var_225].Var16;
            }
            if (Gvar.var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
                Gvar.var_2023 = Gvar.var_486[Gvar.var_682][Gvar.var_225][0];
                Gvar.var_2024 = Gvar.var_486[Gvar.var_682][Gvar.var_225][5];
                Gvar.var_2025 = Gvar.var_486[Gvar.var_682][Gvar.var_225][12];
                Gvar.var_2026 = Gvar.var_486[Gvar.var_682][Gvar.var_225][13];
                Gvar.var_2027 = Gvar.var_486[Gvar.var_682][Gvar.var_225][14];
                Gvar.var_2028 = Gvar.var_486[Gvar.var_682][Gvar.var_225][15];
                Gvar.var_2029 = Gvar.var_486[Gvar.var_682][Gvar.var_225][16];
            }
            if (Gvar.item_page_number != 3) {
                Gvar.belongings_item_list = Gvar.var_2023;
                Gvar.disc_rarity = Gvar.var_2026;
            }
            if (Gvar.item_page_number == 3) {
                Gvar.belongings_item_list = Gvar.var_233[0].Var0;
                Gvar.disc_rarity = Gvar.var_233[0].Var13;
            }
            await Func.func492(); // アイテムリスト呼び出し
    
            Adap.font(Gvar.font_type, Gvar.font_size = 14, Gvar.font_style = 1);
            if (Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 400 && Gvar.var_2025 == 1 && Gvar.var_2027 == 1 && Gvar.var_862[Gvar.belongings_item_list][0] == 1) {
                Adap.pos(225, 283);
                Adap.color(255, 0, 0);
                Adap.mes("呪縛");
            }
            if (Gvar.nouryoku_disc_id == 112 || Gvar.nouryoku_disc_id == 204 || Gvar.nouryoku_disc_id == 394 || Gvar.nouryoku_disc_id == 395) {
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
            Adap.color(255, 255, 255);
            if (Gvar.var_812 == 1) {
                Adap.color(255, 255, 0);
            }
            if (Gvar.var_812 == 2) {
                Adap.color(255, 180, 90);
            }
            if (Gvar.var_812 == 3) {
                Adap.color(0, 255, 0);
            }
            if (Gvar.var_812 == 4) {
                Adap.color(240, 0, 240);
            }
            Adap.mes(Gvar.item_ability_description);
        }

        if (Gvar.var_1880 == 1) {
            Adap.pos(15, 283);
            Adap.font(Gvar.font_type, Gvar.font_size = 14, Gvar.font_style = 1);
            Adap.color(255, 255, 255);
            Adap.mes("");
            if (Gvar.var_233[Gvar.var_1882].Var0 < 850 || Gvar.var_233[Gvar.var_1882].Var0 >= 860) {
                Adap.mes("                  何も入っていないぞ");
            }
            if (Gvar.var_233[Gvar.var_1882].Var0 >= 850 && Gvar.var_233[Gvar.var_1882].Var0 < 860 && Gvar.var_233[Gvar.var_1882].Var7 == 0 && Gvar.var_233[Gvar.var_1882].Var0 != 851) {
                Adap.mes("                  何も入っていないぞ");
            }
            if (Gvar.var_233[Gvar.var_1882].Var0 >= 850 && Gvar.var_233[Gvar.var_1882].Var0 < 860 && Gvar.var_233[Gvar.var_1882].Var7 != 0 && Gvar.var_233[Gvar.var_1882].Var0 != 851) {
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
        Adap.font(Gvar.font_type, Gvar.font_size = 16, Gvar.font_style = 1);
        Adap.pos(160, 269);
        Adap.color(255, 255, 255);
        if (Gvar.var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
            if (Gvar.item_page_number == 1) {
                if (Gvar.var_224 < 11 && Gvar.var_77[Gvar.var_66][Gvar.var_67] == 0) {
                    Adap.line(155, 267, 201, 267);
                }
                // アイテム欄の選択カーソルかも？？
                if (Gvar.var_224 > 10) {
                    Adap.pos(175, 259);
                    Adap.mes(">");
                    Adap.pos(176, 259);
                    Adap.mes(">");
                    Adap.pos(177, 259);
                    Adap.mes(">");
                }
                if (Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0) {
                    Adap.pos(175, 259);
                    Adap.mes(">");
                    Adap.pos(176, 259);
                    Adap.mes(">");
                    Adap.pos(177, 259);
                    Adap.mes(">");
                }
            }
            if (Gvar.item_page_number == 2) {
                if (Gvar.var_77[Gvar.var_66][Gvar.var_67] == 0) {
                    Adap.pos(175, 259);
                    Adap.mes("<");
                    Adap.pos(176, 259);
                    Adap.mes("<");
                    Adap.pos(177, 259);
                    Adap.mes("<");
                }
                if (Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0) {
                    Adap.pos(166, 259);
                    Adap.mes("< >");
                    Adap.pos(167, 259);
                    Adap.mes("< >");
                    Adap.pos(168, 259);
                    Adap.mes("< >");
                }
            }
            if (Gvar.item_page_number == 3) {
                Adap.pos(168, 71);
                Adap.font(Gvar.font_type, 12, 1);
                Adap.mes("足元");
            }
        }
        if (Gvar.var_1880 == 0) {
            Adap.color(255, 255, 255);
            Adap.font(Gvar.font_type, Gvar.font_size = 16, Gvar.font_style = 1);
            Adap.pos(15, Gvar.Y_axis_item_position);
            Adap.mes(">");
            Adap.pos(16, Gvar.Y_axis_item_position);
            Adap.mes(">");
            Adap.pos(17, Gvar.Y_axis_item_position);
            Adap.mes(">");
        }
        // アイテムを選択した時
        if (Gvar.var_221 >= 1) {
            Gvar.var_1822 = 114;
            if (Gvar.item_class2 == 3) {
                Gvar.var_1822 = 97;
            }
            if (Gvar.item_class2 == 4) {
                Gvar.var_1822 = 114;
            }
            if (Gvar.item_class2 == 5) {
                Gvar.var_1822 = 131;
            }
            if (Gvar.item_class2 == 6) {
                Gvar.var_1822 = 148;
            }
            if (Gvar.item_class2 == 7) {
                Gvar.var_1822 = 165;
            }
            if (Gvar.item_class2 == 8) {
                Gvar.var_1822 = 182;
            }
            if (Gvar.item_class2 == 9) {
                Gvar.var_1822 = 199;
            }
            Adap.gmode(4, null, null, 100);
            Adap.pos(252, 38);
            Adap.gcopy(12, 0, 0, 80, Gvar.var_1822 - 32);
            Adap.color(255, 255, 255);
            if (Gvar.var_221 >= 2) {
                Adap.color(150, 150, 150);
            }
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
            Adap.color(255, 255, 255);
            if (Gvar.var_231 == 1) {
                Adap.color(255, 255, 255);
                if (Gvar.var_221 >= 2) {
                    Adap.color(150, 150, 150);
                }
                Adap.mes("拾う");
            }
            if (Gvar.item_class1 != 0) {
                Adap.color(255, 255, 255);
                if (Gvar.var_221 >= 2) {
                    Adap.color(150, 150, 150);
                }
                // 道具画面(メニュー画面/道具)が閉じている状態
                if (Gvar.item_class1 == 1 && Gvar.var_220 == 0 && Gvar.var_231 == 0) {
                    Adap.mes("装備");
                }
                // 道具画面(メニュー画面/道具)が閉じている状態
                if (Gvar.item_class1 == 2 && Gvar.var_479[Gvar.var_225] == 0 && Gvar.var_220 == 0 && Gvar.var_231 == 0) {
                    Adap.mes("装備");
                }
                // 道具画面(メニュー画面/道具)が閉じている状態
                if (Gvar.item_class1 == 2 && Gvar.var_479[Gvar.var_225] == 1 && Gvar.var_220 == 0 && Gvar.var_231 == 0) {
                    Adap.mes("はずす");
                }
                if (Gvar.item_class1 == 3) {
                    Adap.mes("使う");
                }
                if (Gvar.item_class1 == 4) {
                    Adap.mes("食べる");
                }
                if (Gvar.item_class1 == 5) {
                    Adap.mes("見る");
                }
                if (Gvar.item_class1 == 6) {
                    Adap.mes("読む");
                }
            }
            if (Gvar.item_class1 == 2) {
                Adap.color(255, 255, 255);
                if (Gvar.var_221 >= 2) {
                    Adap.color(150, 150, 150);
                }
                Adap.mes("撃つ");
            }
            if (Gvar.item_class1 == 1 && Gvar.var_2032 != 0) {
                Adap.color(255, 255, 255);
                if (Gvar.var_221 >= 2) {
                    Adap.color(150, 150, 150);
                }
                Adap.mes("はずす");
            }
            if (Gvar.item_class1 == 1 || Gvar.item_class1 == 2) {
                Adap.color(255, 255, 255);
                if (Gvar.var_221 >= 2) {
                    Adap.color(150, 150, 150);
                }
                Adap.mes("発動");
            }
            if (Gvar.item_class1 == 5) {
                Adap.color(255, 255, 255);
                if (Gvar.var_221 >= 2) {
                    Adap.color(150, 150, 150);
                }
                if (Gvar.var_233[Gvar.var_225].Var0 < 850 || Gvar.var_233[Gvar.var_225].Var0 >= 860) {
                    Adap.mes("入れる");
                }
                if (Gvar.var_233[Gvar.var_225].Var0 >= 850 && Gvar.var_233[Gvar.var_225].Var0 < 860) {
                    Adap.mes("押す");
                }
            }
            Adap.color(255, 255, 255);
            if (Gvar.var_221 >= 2) {
                Adap.color(150, 150, 150);
            }
            Adap.mes("投げる");
            if (Gvar.var_220 == 1) {
                Adap.color(255, 255, 255);
                if (Gvar.var_221 >= 2) {
                    Adap.color(150, 150, 150);
                }
                Adap.mes("出す");
            }
            if (Gvar.var_231 == 0) {
                Adap.color(255, 255, 255);
                if (Gvar.var_221 >= 2) {
                    Adap.color(150, 150, 150);
                }
                Adap.mes("置く");
            }
            if (Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0 && Gvar.var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                Gvar.var_2033 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
                if (Gvar.var_78[Gvar.var_2033].Var0 != 1) {
                    Adap.color(255, 255, 255);
                    if (Gvar.var_221 >= 2) {
                        Adap.color(150, 150, 150);
                    }
                    Adap.mes("交換");
                }
            }
            if (Gvar.var_2034 == 1) {
                Adap.color(255, 255, 255);
                if (Gvar.var_221 >= 2) {
                    Adap.color(150, 150, 150);
                }
                Gvar.var_2035 = "名前";
                if (Gvar.belongings_item_list == 800 && Gvar.var_862[800][0] == 1) {
                    Gvar.var_2035 = "メモ";
                }
                Adap.mes(Gvar.var_2035);
            }
            Adap.color(255, 255, 255);
            if (Gvar.var_221 >= 2) {
                Adap.color(150, 150, 150);
            }
            Adap.mes("説明");
            Adap.color(255, 255, 255);
            if (Gvar.var_221 >= 2) {
                Adap.color(150, 150, 150);
            }
    
            Adap.font(Gvar.font_type, Gvar.font_size = 16, Gvar.font_style = 1);
            Adap.pos(260, Gvar.var_229);
            Adap.mes(">");
            Adap.pos(260, Gvar.var_229);
            Adap.mes(">");
            Adap.pos(260, Gvar.var_229);
            Adap.mes(">");
        }
        if (Gvar.var_221 == 2) {
            Gvar.var_2036 = 0;
            Gvar.var_2037 = 100;
            Gvar.var_2038 = 20;
            if (Gvar.var_2032 != 0) {
                Gvar.var_2038 = 10;
            }
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
            if (Gvar.var_2032 != 1) {
                Adap.color(255, 255, 0);
                Adap.mes("攻撃");
            }
            if (Gvar.var_2032 != 2) {
                Adap.color(255, 180, 90);
                Adap.mes("防御");
            }
            if (Gvar.var_2032 != 3) {
                Adap.color(240, 0, 240);
                Adap.mes("能力");
            }
            Adap.color(255, 255, 255);
    
            Adap.font(Gvar.font_type, Gvar.font_size = 16, Gvar.font_style = 1);
            Adap.pos(260 - Gvar.var_2036, Gvar.var_246 + Gvar.var_2037);
            Adap.mes(">");
            Adap.pos(260 - Gvar.var_2036, Gvar.var_246 + Gvar.var_2037);
            Adap.mes(">");
            Adap.pos(260 - Gvar.var_2036, Gvar.var_246 + Gvar.var_2037);
            Adap.mes(">");
        }
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
            await Func.func492(); // アイテムリスト呼び出し
            Adap.mes("" + Gvar.var_2039);
            Adap.mes("やめる");
            Adap.color(255, 255, 255);
            Adap.font(Gvar.font_type, Gvar.font_size = 16, Gvar.font_style = 1);
            Adap.pos(260 - Gvar.var_2036, Gvar.var_246 + Gvar.var_2037 + 2);
            Adap.mes(">");
            Adap.pos(260 - Gvar.var_2036, Gvar.var_246 + Gvar.var_2037 + 2);
            Adap.mes(">");
            Adap.pos(260 - Gvar.var_2036, Gvar.var_246 + Gvar.var_2037 + 2);
            Adap.mes(">");
        }
        return;
}

export {func460}
