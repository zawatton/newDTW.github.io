/**
 * func498 — func498 消費アイテム効果
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Memory from '../memory/index'
import * as Food from '../food/index'
import * as Extra from '../extra_items/index'

async function func498(this: any) {
    Adap.dbgprt(498);
    if (Gvar.var_1930 == 1) {
        Gvar.var_2187 = Gvar.belongings_item_list;
        await Func.func492(); // アイテムリスト呼び出し
        Gvar.var_2188 = Gvar.item_name;

        if (Gvar.var_862[Gvar.belongings_item_list][0] == 0) {
            if (Gvar.belongings_item_list == 567 || Gvar.belongings_item_list == 590 || Gvar.belongings_item_list == 565) {
                Gvar.var_862[Gvar.belongings_item_list][0] = 1;
                if (Gvar.belongings_item_list == 567) {
                    await Func.setMessage("なんと" + Gvar.item_name + "は", 
                                            "ｱｳﾞﾄﾞｩﾙのDISCだった！", 7, false, false, false);
                    Gvar.var_2188 = "ｱｳﾞﾄﾞｩﾙのDISC";
                }
                if (Gvar.belongings_item_list == 590) {
                    await Func.setMessage("なんと" + Gvar.item_name + "は", 
                                            "ｷﾞｱｯﾁｮのDISCだった！", 7, false, false, false);
                    Gvar.var_2188 = "ｷﾞｱｯﾁｮのDISC";
                }
                if (Gvar.belongings_item_list == 565) {
                    await Func.setMessage("なんと" + Gvar.item_name + "は", 
                                            "ﾌﾟｯﾁ神父のDISCだった！", 7, false, false, false);
                    Gvar.var_2188 = "ﾌﾟｯﾁ神父のDISC";
                }
                for (let cnt4 = 0; cnt4 < 9; ++cnt4) {
                    await Func.func337(); // メッセージ表示処理(自動)
                }
            }
        }
        for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
            await Func.func337(); // メッセージ表示処理(自動)
        }
        Gvar.var_1264 = 0;
        Gvar.var_1214 = 0;
        Gvar.var_1252 = 0;
        Gvar.var_1389 = Gvar.var_66;
        Gvar.var_1390 = Gvar.var_67;
        await Func.setMessage("" + Gvar.var_2188 + "が", 
                                "爆発した！", 8, false, false, false);
        Gvar.var_1993 = Gvar.var_1389 - 1;
        if (Gvar.var_1993 < 0) {
            Gvar.var_1993 = 0;
        }
        Gvar.var_1994 = Gvar.var_1389 + 1;
        Gvar.var_1995 = Gvar.var_1390 + 1;
        Gvar.var_1996 = Gvar.var_1390 - 1;
        if (Gvar.var_1996 < 0) {
            Gvar.var_1996 = 0;
        }
        if (Gvar.var_71[Gvar.var_1993][Gvar.var_1390] == 0) {
            Gvar.var_347 = Gvar.var_1993;
            Gvar.var_348 = Gvar.var_1390;
            await Func.func622();
        }
        if (Gvar.var_71[Gvar.var_1994][Gvar.var_1390] == 0) {
            Gvar.var_347 = Gvar.var_1994;
            Gvar.var_348 = Gvar.var_1390;
            await Func.func622();
        }
        if (Gvar.var_71[Gvar.var_1389][Gvar.var_1995] == 0) {
            Gvar.var_347 = Gvar.var_1389;
            Gvar.var_348 = Gvar.var_1995;
            await Func.func622();
        }
        if (Gvar.var_71[Gvar.var_1389][Gvar.var_1996] == 0) {
            Gvar.var_347 = Gvar.var_1389;
            Gvar.var_348 = Gvar.var_1996;
            await Func.func622();
        }
        if (Gvar.var_71[Gvar.var_1993][Gvar.var_1995] == 0) {
            Gvar.var_347 = Gvar.var_1993;
            Gvar.var_348 = Gvar.var_1995;
            await Func.func622();
        }
        if (Gvar.var_71[Gvar.var_1994][Gvar.var_1995] == 0) {
            Gvar.var_347 = Gvar.var_1994;
            Gvar.var_348 = Gvar.var_1995;
            await Func.func622();
        }
        if (Gvar.var_71[Gvar.var_1993][Gvar.var_1996] == 0) {
            Gvar.var_347 = Gvar.var_1993;
            Gvar.var_348 = Gvar.var_1996;
            await Func.func622();
        }
        if (Gvar.var_71[Gvar.var_1994][Gvar.var_1996] == 0) {
            Gvar.var_347 = Gvar.var_1994;
            Gvar.var_348 = Gvar.var_1996;
            await Func.func622();
        }
        if (Gvar.var_77[Gvar.var_1389][Gvar.var_1390] > 0) {
            Gvar.var_77[Gvar.var_1389][Gvar.var_1390] = 0;
            Gvar.var_2189 = Gvar.var_77[Gvar.var_1389][Gvar.var_1390];
            Gvar.var_78[Gvar.var_2189].Var0 = 0;
            Gvar.var_78[Gvar.var_2189].Var1 = 0;
            Gvar.var_78[Gvar.var_2189].Var2 = 0;
        }
        if (Gvar.var_77[Gvar.var_1993][Gvar.var_1390] > 0) {
            Gvar.var_77[Gvar.var_1993][Gvar.var_1390] = 0;
            Gvar.var_2189 = Gvar.var_77[Gvar.var_2190][Gvar.var_1390];
            Gvar.var_78[Gvar.var_2189].Var0 = 0;
            Gvar.var_78[Gvar.var_2189].Var1 = 0;
            Gvar.var_78[Gvar.var_2189].Var2 = 0;
        }
        if (Gvar.var_77[Gvar.var_1994][Gvar.var_1390] > 0) {
            Gvar.var_77[Gvar.var_1994][Gvar.var_1390] = 0;
            Gvar.var_2189 = Gvar.var_77[Gvar.var_2191][Gvar.var_1390];
            Gvar.var_78[Gvar.var_2189].Var0 = 0;
            Gvar.var_78[Gvar.var_2189].Var1 = 0;
            Gvar.var_78[Gvar.var_2189].Var2 = 0;
        }
        if (Gvar.var_77[Gvar.var_1389][Gvar.var_1995] > 0) {
            Gvar.var_77[Gvar.var_1389][Gvar.var_1995] = 0;
            Gvar.var_2189 = Gvar.var_77[Gvar.var_1389][Gvar.var_2192];
            Gvar.var_78[Gvar.var_2189].Var0 = 0;
            Gvar.var_78[Gvar.var_2189].Var1 = 0;
            Gvar.var_78[Gvar.var_2189].Var2 = 0;
        }
        if (Gvar.var_77[Gvar.var_1389][Gvar.var_1996] > 0) {
            Gvar.var_77[Gvar.var_1389][Gvar.var_1996] = 0;
            Gvar.var_2189 = Gvar.var_77[Gvar.var_1389][Gvar.var_2193];
            Gvar.var_78[Gvar.var_2189].Var0 = 0;
            Gvar.var_78[Gvar.var_2189].Var1 = 0;
            Gvar.var_78[Gvar.var_2189].Var2 = 0;
        }
        if (Gvar.var_77[Gvar.var_1993][Gvar.var_1995] > 0) {
            Gvar.var_77[Gvar.var_1993][Gvar.var_1995] = 0;
            Gvar.var_2189 = Gvar.var_77[Gvar.var_2190][Gvar.var_2192];
            Gvar.var_78[Gvar.var_2189].Var0 = 0;
            Gvar.var_78[Gvar.var_2189].Var1 = 0;
            Gvar.var_78[Gvar.var_2189].Var2 = 0;
        }
        if (Gvar.var_77[Gvar.var_1994][Gvar.var_1995] > 0) {
            Gvar.var_77[Gvar.var_1994][Gvar.var_1995] = 0;
            Gvar.var_2189 = Gvar.var_77[Gvar.var_2191][Gvar.var_2192];
            Gvar.var_78[Gvar.var_2189].Var0 = 0;
            Gvar.var_78[Gvar.var_2189].Var1 = 0;
            Gvar.var_78[Gvar.var_2189].Var2 = 0;
        }
        if (Gvar.var_77[Gvar.var_1993][Gvar.var_1996] > 0) {
            Gvar.var_77[Gvar.var_1993][Gvar.var_1996] = 0;
            Gvar.var_2189 = Gvar.var_77[Gvar.var_2190][Gvar.var_2193];
            Gvar.var_78[Gvar.var_2189].Var0 = 0;
            Gvar.var_78[Gvar.var_2189].Var1 = 0;
            Gvar.var_78[Gvar.var_2189].Var2 = 0;
        }
        if (Gvar.var_77[Gvar.var_1994][Gvar.var_1996] > 0) {
            Gvar.var_77[Gvar.var_1994][Gvar.var_1996] = 0;
            Gvar.var_2189 = Gvar.var_77[Gvar.var_2191][Gvar.var_2193];
            Gvar.var_78[Gvar.var_2189].Var0 = 0;
            Gvar.var_78[Gvar.var_2189].Var1 = 0;
            Gvar.var_78[Gvar.var_2189].Var2 = 0;
        }
        Adap.DSPLAY(180);
        Gvar.var_199 = 2;
        Gvar.var_389 = 2;
        Gvar.var_1263 = 1;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1388 = 1;
        for (let cnt2 = 0; cnt2 < 3; ++cnt2) {
            Gvar.var_585 = 3;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_585 = 0;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1388++;
        }
        for (let cnt2 = 0; cnt2 < 24; ++cnt2) {
            await Func.func337(); // メッセージ表示処理(自動)
            if (cnt2 == 25) {
                Gvar.var_1263 = 0;
            }
            Gvar.var_1388++;
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1388 = 0;
        Gvar.var_1263 = 0;
        Gvar.var_403 = "";
        Gvar.var_2194 = 1;
        Gvar.var_2195 = 1;
        Gvar.var_2196 = 2;
        for (let cnt2 = 0; cnt2 < Gvar.var_97; ++cnt2) {
            if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1389 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                await Func.func700();
            }
            if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1389 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                await Func.func700();
            }
            if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1390) {
                await Func.func700();
            }
            if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1390) {
                await Func.func700();
            }
            if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                await Func.func700();
            }
            if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                await Func.func700();
            }
            if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                await Func.func700();
            }
            if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                await Func.func700();
            }
            Gvar.var_209 = 0;
            Gvar.var_2194 = Gvar.var_2194 + 1;
        }
        Gvar.var_2196 = 0;
        Gvar.var_2195 = 0;
        if (Gvar.var_211 == 1) {
            Gvar.var_211 = 0;
            Gvar.var_356 = 249;
            for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                await Func.func337(); // メッセージ表示処理(自動)
            }
            Gvar.var_389 = 0;
            Gvar.var_2197 = 1;
            Gvar.var_1936 = 0; // アイテム毎の自動メッセージ非表示(item_message表示)
            return;
        }
        if (Gvar.var_211 > 1) {
            Gvar.var_2198 = Math.floor(Gvar.var_211 / 2);
            if (Gvar.equip_disc[314] == 1) {
                Gvar.var_2198 = Math.floor(Gvar.var_2198 / 2);
            }
            Gvar.var_211 = Gvar.var_211 - Gvar.var_2198;
            if (Gvar.var_211 <= 0) {
                Gvar.var_211 = 1;
            }
            Gvar.var_208 = Gvar.var_2198 + Gvar.var_208;
        }
        Gvar.var_389 = 0;
        Gvar.var_2199 = 1;
        for (let cnt2 = 0; cnt2 < Gvar.var_97; ++cnt2) {
            if (Gvar.var_83[Gvar.var_2199].Var0 == 17 && Gvar.var_83[Gvar.var_2199].Var29 == 1) {
                await Func.func699();
                Gvar.var_2199 = 1;
                cnt2 = -1;
                continue;
            }
            Gvar.var_2199++;
        }
        Gvar.var_1936 = 0; // アイテム毎の自動メッセージ非表示(item_message表示)
        return;
    }
    // No = 560 仗助のdiscの効果
    if (Gvar.belongings_item_list == 560) {
        await Memory.item560();
        return;
    }
    // No = 561  空き のdiscの効果
    if (Gvar.belongings_item_list == 561) {
        await Memory.item561();
        return;
    }
    // No = 562 康一のdiscの効果
    if (Gvar.belongings_item_list == 562) {
        await Memory.item562();
        return;
    }
    // No = 563 ンドゥールのdiscの効果
    if (Gvar.belongings_item_list == 563) {
        await Memory.item563();
        return;
    }
    // No = 564 噴上裕也のdiscの効果
    if (Gvar.belongings_item_list == 564) {
        await Memory.item564();
        return;
    }
    // No = 565 プッチ神父のdiscの効果
    if (Gvar.belongings_item_list == 565) {
        await Memory.item565();
        return;
    }
    // No = 566 ケンゾーのdiscの効果
    if (Gvar.belongings_item_list == 566) {
        await Memory.item566();
        return;
    }
    // No = 567 アヴドゥルのdiscの効果
    if (Gvar.belongings_item_list == 567) {
        await Memory.item567();
        return;
    }
    // No = 568 ジョンガリ・Aのdiscの効果
    if (Gvar.belongings_item_list == 568) {
        await Memory.item568();
        return;
    }
    // No = 569 ポルナレフのdiscの効果
    if (Gvar.belongings_item_list == 569) {
        await Memory.item569();
        return;
    }
    // No = 570 ジョナサンのdiscの効果
    if (Gvar.belongings_item_list == 570) {
        await Memory.item570();
        return;
    }
    // No = 571 ボインゴのdiscの効果
    if (Gvar.belongings_item_list == 571) {
        await Memory.item571();
        return;
    }
    // No = 572 承太郎のdiscの効果
    if (Gvar.belongings_item_list == 572) {
        await Memory.item572();
        return;
    }
    // No = 573 重ちーのdiscの効果
    if (Gvar.belongings_item_list == 573) {
        await Memory.item573();
        return;
    }
    // No = 574 エンポリオのdiscの効果
    if (Gvar.belongings_item_list == 574) {
        await Memory.item574();
        return;
    }
    // No = 575 マニッシュボーイのdiscの効果
    if (Gvar.belongings_item_list == 575) {
        await Memory.item575();
        return;
    }
    // No = 576 破裂するdiscの効果
    if (Gvar.belongings_item_list == 576) {
        await Memory.item576();
        return;
    }
    // No = 577 ミキタカのdiscの効果
    if (Gvar.belongings_item_list == 577) {
        await Memory.item577();
        return;
    }
    // No = 578 サンドマンのdiscの効果
    if (Gvar.belongings_item_list == 578) {
        await Memory.item578();
        return;
    }
    // No = 579 ペットショップのdiscの効果
    if (Gvar.belongings_item_list == 579) {
        await Memory.item579();
        return;
    }
    // No = 580 ドッピオのdiscの効果
    if (Gvar.belongings_item_list == 580) {
        await Memory.item580();
        return;
    }
    // No = 582 水が熱湯になるdiscの効果
    if (Gvar.belongings_item_list == 582) {
        await Memory.item582();
        return;
    }
    // No = 583 ディアボロのdiscの効果
    if (Gvar.belongings_item_list == 583) {
        await Memory.item583();
        return;
    }
    // No = 584 ヌケサクのdiscの効果
    if (Gvar.belongings_item_list == 584) {
        await Memory.item584();
        return;
    }
    // No = 585 億泰のdiscの効果
    if (Gvar.belongings_item_list == 585) {
        await Memory.item585();
        return;
    }
    // No = 586 ペッシのdiscの効果
    if (Gvar.belongings_item_list == 586) {
        await Memory.item586();
        return;
    }
    // No = 587 吉良吉影のdiscの効果
    if (Gvar.belongings_item_list == 587) {
        await Memory.item587();
        return;
    }
    // No = 588 J・ガイルのdiscの効果
    if (Gvar.belongings_item_list == 588) {
        await Memory.item588();
        return;
    }
    // No = 589 プロシュート兄貴のdiscの効果
    if (Gvar.belongings_item_list == 589) {
        await Memory.item589();
        return;
    }
    // No = 590 ギアッチョのdiscの効果
    if (Gvar.belongings_item_list == 590) {
        await Memory.item590();
        return;
    }
    // Ver0.1403にて追加。No = 591 ポコロコのdiscの効果
    if (Gvar.belongings_item_list == 591) {
        await Memory.item591();
        return;
    }
    // No = 715 アイテム「点滴」を使用した時の効果
    if (Gvar.belongings_item_list == 715) {
        await Extra.item715();
        return;
    }
    // No = 600 アイテム「ピッツァ」を使用した時の効果
    if (Gvar.belongings_item_list == 600) {
        await Food.item600();
        return;
    }
    // No = 602 アイテム「ネアポリスのピッツァ」を使用した時の効果
    if (Gvar.belongings_item_list == 602) {
        await Food.item602();
        return;
    }
    // No = 603 「腐ったピッツァ」を使用した時の効果
    if (Gvar.belongings_item_list == 603) {
        await Food.item603();
        return;
    }
    // No = 604 アイテム「ポルポのピッツァ」を使用した時の効果
    if (Gvar.belongings_item_list == 604) {
        await Food.item604();
        return;
    }
    // No = 605  アイテム「焦げたピッツァ」を使用した時の効果
    if (Gvar.belongings_item_list == 605) {
        await Food.item605();
        return;
    }
    // No = 630  アイテム「娼婦風スパゲッティ」を使用した時の効果
    if (Gvar.belongings_item_list == 630) {
        await Food.item630();
        return;
    }
    // No = 631 アイテム「モッツァレラチーズとトマトのサラダ」を使用した時の効果
    if (Gvar.belongings_item_list == 631) {
        await Food.item631();
        return;
    }
    // No = 632 アイテム「キリマンジャロの雪解け水」を使用した時の効果
    if (Gvar.belongings_item_list == 632) {
        await Food.item632();
        return;
    }
    // No = 633 アイテム「子羊背肉のリンゴソースかけ」を使用した時の効果
    if (Gvar.belongings_item_list == 633) {
        await Food.item633();
        return;
    }
    // No = 634 アイテム「プリン」を使用した時の効果
    if (Gvar.belongings_item_list == 634) {
        await Food.item634();
        return;
    }
    // No = 635 アイテム「焦げた料理」を使用した時の効果
    if (Gvar.belongings_item_list == 635) {
        await Food.item635();
        return;
    }
    // No = 636 アイテム「サンドイッチ」を使用した時の効果
    if (Gvar.belongings_item_list == 636) {
        await Food.item636();
        return;
    }
    // No = 639 アイテム「カエルの丸焼き」を使用した時の効果
    if (Gvar.belongings_item_list == 639) {
        await Food.item639();
        return;
    }
    // No = 640 アイテム「焦げた食べ物」を使用した時の効果
    if (Gvar.belongings_item_list == 640) {
        await Food.item640();
        return;
    }
    // No = 641 アイテム「消し炭」を使用した時の効果
    if (Gvar.belongings_item_list == 641) {
        await Food.item641();
        return;
    }
    // No = 644 「猫バーガー」を使用した時の効果。No = 603 「腐ったピッツァ」と効果同じ。
    if (Gvar.belongings_item_list == 644) {
        await Food.item603();
        return;
    }
    // No = 645 「猫ステーキ」を使用した時の効果。No = 603 「腐ったピッツァ」と効果同じ。
    if (Gvar.belongings_item_list == 645) {
        await Food.item603();
        return;
    }
    // No = 646 「猫ジュース」を使用した時の効果。No = 603 「腐ったピッツァ」と効果同じ。
    if (Gvar.belongings_item_list == 646) {
        await Food.item603();
        return;
    }
    // No = 647 アイテム「オレンジ」を使用した時の効果
    if (Gvar.belongings_item_list == 647) {
        await Food.item647();
        return;
    }
    // No = 648 アイテム「鎌倉カスター」を使用した時の効果
    if (Gvar.belongings_item_list == 648) {
        await Food.item648();
        return;
    }
    // No = 650 アイテム「カエル」を使用した時の効果
    if (Gvar.belongings_item_list == 650) {
        await Food.item650();
        return;
    }
    // No = 651 アイテム「大きいカエル」を使用した時の効果
    if (Gvar.belongings_item_list == 651) {
        await Food.item651();
        return;
    }
    // No = 652 アイテム「カエルの死体」を使用した時の効果
    if (Gvar.belongings_item_list == 652) {
        await Food.item652();
        return;
    }
    // No = 653 アイテム「超巨大なカエル」を使用した時の効果
    if (Gvar.belongings_item_list == 653) {
        await Food.item653();
        return;
    }
    // No = 654 アイテム「ヤドクガエル」を使用した時の効果
    if (Gvar.belongings_item_list == 654) {
        await Food.item654();
        return;
    }
    // No = 655 アイテム「ザリガニ」を使用した時の効果
    if (Gvar.belongings_item_list == 655) {
        await Food.item655();
        return;
    }
    // No = 701 没アイテム「ソフト・マシーンの発動によって罠にした敵」を使用した時の効果
    if (Gvar.belongings_item_list == 701) {
        await Extra.item701();
        return;
    }
    // No = 9999 没アイテム？
    if (Gvar.belongings_item_list == 9999) {
        await Extra.item9999();
        return;
    }
    // No = 712 アイテム「やばいクスリ」を使用した時の効果
    if (Gvar.belongings_item_list == 712) {
        await Extra.item712();
        return;
    }
    // No = 713 アイテム「ﾎﾟﾙﾎﾟのﾗｲﾀｰ」を使用した時の効果
    if (Gvar.belongings_item_list == 713) {
        await Extra.item713();
        return;
    }
    // No = 714 アイテム「紫外線照射装置」を使用した時の効果
    if (Gvar.belongings_item_list == 714) {
        await Extra.item714();
        return;
    }
    // item_list = 724 石仮面
    if (Gvar.belongings_item_list == 724) {
        await Extra.item724();
        return;
    }
    // item_list == 728 赤石つき石仮面
    if (Gvar.belongings_item_list == 728) {
        await Extra.item728();
        return;
    }
    // No = 726 アイテム「鉄球」を使用した時の効果
    if (Gvar.belongings_item_list == 726) {
        await Extra.item726();
        return;
    }
    // No = 727 アイテム「ｿﾞﾝﾋﾞ馬」を使用した時の効果
    if (Gvar.belongings_item_list == 727) {
        await Extra.item727();
        return;
    }
    // No = 797 アイテム「」を使用した時の効果
    if (Gvar.belongings_item_list == 797) {
        await Extra.item797();
        return;
    }
    // No = 798 アイテム「」を使用した時の効果
    if (Gvar.belongings_item_list == 798) {
        await Extra.item798();
        return;
    }
    // No = 799 アイテム「装備＋９９」を使用した時の効果
    if (Gvar.belongings_item_list == 799) {
        await Extra.item799();
        return;
    }
    // No = 718 アイテム「聖なる弓矢」を使用した時の効果
    if (Gvar.belongings_item_list == 718) {
        await Extra.item718();
        return;
    }
    // No = 719 アイテム「吉良の弓矢」を使用した時の効果
    if (Gvar.belongings_item_list == 719) {
        await Extra.item719();
        return;
    }
    // No = 720 アイテム「ときのがくぼう」を使用した時の効果
    if (Gvar.belongings_item_list == 720) {
        await Extra.item720();
        return;
    }
    // No = 722 アイテム「ｼｰｻﾞｰのﾊﾞﾝﾀﾞﾅ」を使用した時の効果
    if (Gvar.belongings_item_list == 722) {
        await Extra.item722();
        return;
    }
    // No = 716 アイテム「恐竜の化石」を使用した時の効果
    if (Gvar.belongings_item_list == 716) {
        await Extra.item716();
        return;
    }
    // No = 723 アイテム「魔法のランプ」を使用した時の効果
    if (Gvar.belongings_item_list == 723) {
        await Extra.item723();
        return;
    }
    // No = 729 アイテム「吉良の財布」を使用した時の効果
    if (Gvar.belongings_item_list == 729) {
        await Extra.item729();
        return;
    }
    // No = 730 アイテム「大家のカバン」を使用した時の効果
    if (Gvar.belongings_item_list == 730) {
        await Extra.item730();
        return;
    }
    // No = 731 アイテム「盗まれた財布」を使用した時の効果
    if (Gvar.belongings_item_list == 731) {
        await Extra.item731();
        return;
    }
    // Ver0.14にて追加。No = 732 アイテム「ベルトのバックル」を使用した時の効果
    if (Gvar.belongings_item_list == 732) {
        await Extra.item732();
        return;
    }        
    // コミック「GP BOY」を読んだ時の効果
    if (Gvar.belongings_item_list == 900) {
        Adap.DSPLAY(118);
        await Func.AutoDraw(12);
        await Func.setMessage("チェッ！", 
                                "やっぱりセナは速ェや…", 7, false, false, false);
        return;
    }
    // 一部コミックを読んだ時の効果
    if (Gvar.belongings_item_list >= 901 && Gvar.belongings_item_list <= 905) {
        Adap.DSPLAY(118);
        await Func.AutoDraw(12);
        Gvar.var_1252 = 3;
        Gvar.var_1299 = 10;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1297 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1297++;
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1297 = 0;
        Gvar.var_566 = Gvar.var_566 + 1;
        Gvar.var_565 = Gvar.var_565 + 1;
        if (Gvar.var_566 > 99) {
            Gvar.var_566 = 99;
            Gvar.var_565 = 99;
            Gvar.item_message1 = "精神力は限界まで達した！";
        }
        return;
    }
    // 二部コミックを読んだ時の効果
    if (Gvar.belongings_item_list >= 906 && Gvar.belongings_item_list <= 911) {
        Adap.DSPLAY(118);
        await Func.AutoDraw(12);
        Gvar.var_1252 = 3;
        Adap.DSPLAY(209);
        Gvar.var_1299 = 10;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1297 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1297++;
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1297 = 0;
        Gvar.var_352 = Gvar.var_352 + 5;
        Gvar.var_211 = Gvar.var_211 + 5;
        if (Gvar.var_352 >= 999) {
            Gvar.var_352 = 999;
            Gvar.var_211 = 999;
            Gvar.item_message1 = "最大HPは限界まで達した！";
        }
        return;
    }
    if (Gvar.belongings_item_list >= 912 && Gvar.belongings_item_list <= 928) {
        Gvar.var_1950 = 3;
        return;
    }
    if (Gvar.belongings_item_list >= 929 && Gvar.belongings_item_list <= 947) {
        Gvar.var_1950 = 4;
        return;
    }
    if (Gvar.belongings_item_list >= 948 && Gvar.belongings_item_list <= 963) {
        Gvar.var_1950 = 5;
        return;
    }
    if (Gvar.belongings_item_list >= 948 && Gvar.belongings_item_list <= 980) {
        Gvar.var_1950 = 6;
        return;
    }
    if (Gvar.belongings_item_list >= 981 && Gvar.belongings_item_list <= 986) {
        Gvar.var_1950 = 7;
        return;
    }
    if (Gvar.belongings_item_list >= 750 && Gvar.belongings_item_list <= 770) {
        Gvar.var_1950 = 7;
        return;
    }

    if (Gvar.belongings_item_list == 987) {
        Adap.DSPLAY(118);
        await Func.AutoDraw(12);
        Gvar.var_1252 = 3;
        Adap.DSPLAY(209);
        Gvar.var_1299 = 10;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1297 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1297++;
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1297 = 0;
        Gvar.var_352 = Gvar.var_352 + 10;
        Gvar.var_211 = Gvar.var_211 + 10;
        if (Gvar.var_352 > 999) {
            Gvar.var_352 = 999;
            Gvar.item_message1 = "最大HPは限界まで達した！";
        }
        if (Gvar.var_211 > Gvar.var_352) {
            Gvar.var_211 = Gvar.var_352;
        }
        return;
    }
    if (Gvar.belongings_item_list == 988) {
        Adap.DSPLAY(118);
        await Func.AutoDraw(12);
        Gvar.var_1252 = 3;
        Gvar.var_1299 = 10;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1297 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1297++;
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1297 = 0;
        Gvar.var_352 = Gvar.var_352 + 10;
        Gvar.var_211 = Gvar.var_211 + 10;
        if (Gvar.var_352 > 999) {
            Gvar.var_352 = 999;
            Gvar.item_message1 = "最大HPは限界まで達した！";
        }
        if (Gvar.var_211 > Gvar.var_352) {
            Gvar.var_211 = Gvar.var_352;
        }
        return;
    }
    if (Gvar.belongings_item_list == 989) {
        Adap.DSPLAY(118);
        await Func.AutoDraw(12);
        Gvar.var_1252 = 3;
        Adap.DSPLAY(209);
        Gvar.var_1299 = 10;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1297 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1297++;
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1297 = 0;
        Gvar.var_566 = Gvar.var_566 + 5;
        Gvar.var_565 = Gvar.var_565 + 5;
        if (Gvar.var_566 > 99) {
            Gvar.var_566 = 99;
            Gvar.var_565 = 99;
            Gvar.item_message1 = "精神力は限界まで達した！";
        }
        return;
    }
    if (Gvar.belongings_item_list == 990) {
        Adap.DSPLAY(118);
        await Func.AutoDraw(12);
        Gvar.var_1252 = 3;

        Adap.DSPLAY(182);
        Gvar.var_1299 = 3;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1297 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1297++;
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1297 = 0;
        Gvar.var_105 = 1; // Gvar.var_105 攻撃を躱わしやすくなるフラグON
        Gvar.var_111 = 1; // 命中率を上げるフラグON
        Gvar.var_104 = 1; // Gvar.var_104 攻撃力が上がるフラグON
        return;
    }
    if (Gvar.belongings_item_list == 991) {
        Adap.DSPLAY(118);
        await Func.AutoDraw(12);
        Gvar.var_1252 = 3;
        Adap.DSPLAY(142); // レベルアップした時の効果音
        Gvar.var_1299 = 9;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1297 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1297++;
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1297 = 0;
        if (Gvar.current_level >= 99) {
            Gvar.item_message1 = "これ以上成長できなかった…";
            return;
        }
        for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
            if (Gvar.current_level <= 98) {
                Gvar.var_568 = Gvar.var_948[Gvar.current_level];
                await Func.func681();
                Gvar.var_2201 = 0;
            }
        }
        return;
    }
    if (Gvar.belongings_item_list == 992) {
        Adap.DSPLAY(118);
        await Func.AutoDraw(12);
        Gvar.var_1252 = 3;
        Adap.DSPLAY(142); // レベルアップした時の効果音
        Gvar.var_1299 = 9;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1297 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1297++;
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1297 = 0;
        if (Gvar.current_level >= 99) {
            Gvar.item_message1 = "これ以上成長できなかった…";
            return;
        }
        for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
            if (Gvar.current_level <= 98) {
                Gvar.var_568 = Gvar.var_948[Gvar.current_level];
                await Func.func681();
                Gvar.var_2201 = 0;
            }
        }
        return;
    }
    if (Gvar.belongings_item_list == 993) {
        Gvar.var_1950 = 20;
        return;
    }
    if (Gvar.belongings_item_list == 994) {
        Gvar.var_1950 = 20;
        return;
    }
    if (Gvar.belongings_item_list == 995) {
        Gvar.var_1252 = 0;
        Gvar.var_1253 = 995;
        Gvar.var_1254 = 1;
        await Func.setMessage("「ﾋﾟﾝｸﾀﾞｰｸの少年」を目の前にかざした。", "", 7, true, false, true);
        await Func.setMessage("『天国の扉』によって…", "心の扉は開かれる", 7, true, false, false);
        Gvar.var_347 = Gvar.var_66;
        Gvar.var_348 = Gvar.var_67;
        if (Gvar.var_199 == 4) {
            Gvar.var_347 = Gvar.var_347 - 1;
        }
        if (Gvar.var_199 == 6) {
            Gvar.var_347 = Gvar.var_347 + 1;
        }
        if (Gvar.var_199 == 8) {
            Gvar.var_348 = Gvar.var_348 - 1;
        }
        if (Gvar.var_199 == 2) {
            Gvar.var_348 = Gvar.var_348 + 1;
        }
        if (Gvar.var_199 == 1) {
            Gvar.var_347 = Gvar.var_347 - 1;
            Gvar.var_348 = Gvar.var_348 + 1;
        }
        if (Gvar.var_199 == 3) {
            Gvar.var_347 = Gvar.var_347 + 1;
            Gvar.var_348 = Gvar.var_348 + 1;
        }
        if (Gvar.var_199 == 7) {
            Gvar.var_347 = Gvar.var_347 - 1;
            Gvar.var_348 = Gvar.var_348 - 1;
        }
        if (Gvar.var_199 == 9) {
            Gvar.var_347 = Gvar.var_347 + 1;
            Gvar.var_348 = Gvar.var_348 - 1;
        }
        if (Gvar.var_82[Gvar.var_347][Gvar.var_348] != 0) {
            Gvar.var_2231 = Gvar.var_82[Gvar.var_347][Gvar.var_348];
            Gvar.var_2232 = 0;
            if (Gvar.var_83[Gvar.var_2231].Var23 == 0) {
                Gvar.var_2232 = 1;
            }
            if (Gvar.var_83[Gvar.var_2231].Var23 != 0) {
                Gvar.var_2232 = 2;
            }
            if (Gvar.var_83[Gvar.var_2231].Var0 == 50) {
                Gvar.var_2232 = 0;
            }
            if (Gvar.var_83[Gvar.var_2231].Var0 == 118) {
                Gvar.var_2232 = 1;
            }
            if (Gvar.var_2232 == 1) {
                Adap.DSPLAY(161);
                Gvar.var_1324 = (Gvar.var_83[Gvar.var_2231].Var1 - Gvar.var_66 + 4) * 40;
                Gvar.var_1325 = (Gvar.var_83[Gvar.var_2231].Var2 - Gvar.var_67 + 4) * 40 - 10;
                Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
                Gvar.var_1323 = 1;
                for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_1323++;
                }
                Gvar.var_83[Gvar.var_2231].Var8 = 1;
                for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_1323++;
                }
                Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
                Gvar.var_1323 = 0;
                Gvar.var_2233 = Gvar.var_1038 + 1;
                Gvar.var_2234 = 0;
                for (let cnt4 = 0; cnt4 < Gvar.var_2233; ++cnt4) {
                    if (Gvar.var_989[cnt4] == Gvar.var_83[Gvar.var_2231].Var0) {
                        Gvar.var_2234 = 1;
                        Gvar.var_1610 = cnt4;
                        break;
                    }
                }
                if (Gvar.var_2234 == 0) {
                    Gvar.var_1038 = Gvar.var_1038 + 1;
                    Gvar.var_989[Gvar.var_1038] = Gvar.var_83[Gvar.var_2231].Var0;
                    Gvar.var_1610 = Gvar.var_1038;
                }
                Gvar.var_198 = 0; // メッセージウィンドウ閉じる
                Gvar.var_1609 = 1;
                Gvar.var_1949 = 1;
                return;
            }
            if (Gvar.var_2232 == 2) {
                Adap.DSPLAY(161);
                Gvar.var_1324 = (Gvar.var_83[Gvar.var_2231].Var1 - Gvar.var_66 + 4) * 40;
                Gvar.var_1325 = (Gvar.var_83[Gvar.var_2231].Var2 - Gvar.var_67 + 4) * 40 - 10;
                Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
                Gvar.var_1323 = 1;
                for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_1323++;
                }
                for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_1323++;
                }
                Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
                Gvar.var_1323 = 0;
                await Func.setMessage("見えてなくて効かなかった…", 
                                        "", 7, false, false, false);
            }
        }
        Gvar.var_1254 = 0;
        return;
    }
    if (Gvar.belongings_item_list == 9999) {
        Adap.DSPLAY(118);
        await Func.AutoDraw(12);
        Gvar.var_1252 = 3;
        Adap.DSPLAY(142); // レベルアップした時の効果音
        Gvar.var_1299 = 9;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1297 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1297++;
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1297 = 0;
        if (Gvar.current_level >= 99) {
            Gvar.item_message1 = "これ以上成長できなかった…";
            return;
        }
        for (let cnt2 = 0; cnt2 < 3; ++cnt2) {
            if (Gvar.current_level <= 98) {
                Gvar.var_568 = Gvar.var_948[Gvar.current_level];
                await Func.func681();
                Gvar.var_2201 = 0;
            }
        }
        return;
    }
    if (Gvar.belongings_item_list == 996) {
        Adap.DSPLAY(118);
        await Func.AutoDraw(12);
        Gvar.var_1252 = 3;
        Adap.DSPLAY(142); // レベルアップした時の効果音
        Gvar.var_1299 = 9;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1297 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1297++;
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1297 = 0;
        if (Gvar.current_level >= 99) {
            Gvar.item_message1 = "これ以上成長できなかった…";
            return;
        }
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            if (Gvar.current_level <= 98) {
                Gvar.var_568 = Gvar.var_948[Gvar.current_level];
                await Func.func681();
                Gvar.var_2201 = 0;
            }
        }
        return;
    }
    if (Gvar.belongings_item_list == 997) {
        return;
    }
    if (Gvar.belongings_item_list == 998) {
        return;
    }
    if (Gvar.belongings_item_list == 999) {
        return;
    }
    return;
}

export {func498}
