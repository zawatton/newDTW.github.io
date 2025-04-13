import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

async function func469(this: any) {
        Adap.dbgprt(469);
        Gvar.yabaimono_id = Gvar.var_233[Gvar.var_1876].Var0;
        if (Gvar.var_233[Gvar.var_225].Var0 >= 800 && Gvar.var_233[Gvar.var_225].Var0 < 900) {
            Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
            Gvar.var_1866 = 0;
            await Func.setMessage("これを入れることはできない",
                                    "", 7, false, false, false);
            await Func.AutoDraw(3);
            Gvar.var_231 = 0;
            Gvar.var_234 = 0;
            Gvar.var_2040 = 0;
            await Func.func009(); // ディアボロ側ターン処理(ループ処理)
            return;
        }
        // No = 801:形兆のDISCｹｰｽ、No = 802:ﾄﾗｸﾀｰのﾀｲﾔの時
        if (Gvar.var_233[Gvar.var_1876].Var0 == 801 || Gvar.var_233[Gvar.var_1876].Var0 == 802) {
            Gvar.var_2084 = 0;
            if (Gvar.belongings_item_list < 100) {
                Gvar.var_2084 = 1;
            }
            if (Gvar.belongings_item_list >= 600 && Gvar.belongings_item_list != 700) {
                Gvar.var_2084 = 1;
            }
            if (Gvar.var_2084 == 1) {
                Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
                Gvar.var_1866 = 0;
                await Func.setMessage("DISCしか入れることはできない",
                                        "", 7, false, false, false);
                await Func.AutoDraw(3);
                Gvar.var_231 = 0;
                Gvar.var_234 = 0;
                Gvar.var_2040 = 0;
                await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                return;
            }
        }
        if (Gvar.var_233[Gvar.var_1876].Var0 == 803) {
            Gvar.var_2084 = 0;
            if (Gvar.belongings_item_list < 600 || Gvar.belongings_item_list >= 700) {
                Gvar.var_2084 = 1;
            }
            if (Gvar.var_2084 == 1) {
                Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
                Gvar.var_1866 = 0;
                await Func.setMessage("食べ物しか入れることはできない",
                                        "", 7, false, false, false);
                await Func.AutoDraw(3);
                Gvar.var_231 = 0;
                Gvar.var_234 = 0;
                Gvar.var_2040 = 0;
                await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                return;
            }
        }
        if (Gvar.var_233[Gvar.var_1876].Var0 == 804) {
            Gvar.var_2084 = 1;
            if (Gvar.belongings_item_list >= 900 && Gvar.belongings_item_list < 1000) {
                Gvar.var_2084 = 0;
            }
            if (Gvar.belongings_item_list >= 750 && Gvar.belongings_item_list < 800) {
                Gvar.var_2084 = 0;
            }
            if (Gvar.var_2084 == 1) {
                Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
                Gvar.var_1866 = 0;
                await Func.setMessage("本しか入れることはできない",
                                        "", 7, false, false, false);
                await Func.AutoDraw(3);
                Gvar.var_231 = 0;
                Gvar.var_234 = 0;
                Gvar.var_2040 = 0;
                await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                return;
            }
        }
        if (Gvar.var_233[Gvar.var_1876].Var7 == 0) {
            Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
            Gvar.var_1866 = 0;
            await Func.setMessage("これ以上入れられない",
                                    "", 7, false, false, false);
            await Func.AutoDraw(3);
            Gvar.var_231 = 0;
            Gvar.var_234 = 0;
            Gvar.var_2040 = 0;
            await Func.func009(); // ディアボロ側ターン処理(ループ処理)
            return;
        }
        Gvar.var_2084 = 0;
        if (Gvar.kougeki_disc_id  != 0 && Gvar.var_225 != 0) {
            await Func.func426();
            if (Gvar.var_553 == Gvar.var_225 && Gvar.var_233[Gvar.var_225].Var12 == 1) {
                Gvar.var_2084 = 1;
            }
        }
        if (Gvar.bougyo_disc_id != 0 && Gvar.var_225 != 0) {
            await Func.func427();
            if (Gvar.var_554 == Gvar.var_225 && Gvar.var_233[Gvar.var_225].Var12 == 1) {
                Gvar.var_2084 = 1;
            }
        }
        if (Gvar.nouryoku_disc_id != 0 && Gvar.var_225 != 0) {
            await Func.func428();
            if (Gvar.var_555 == Gvar.var_225 && Gvar.var_233[Gvar.var_225].Var12 == 1) {
                Gvar.var_2084 = 1;
            }
        }
        if (Gvar.var_2084 == 1) {
            Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
            Gvar.var_1866 = 0;
            await Func.setMessage("" + Gvar.item_name + "を",
                                    "", 7, false, false, false);
            await Func.AutoDraw(3);
            Gvar.var_231 = 0;
            Gvar.var_234 = 0;
            Gvar.var_2040 = 0;
            await Func.func009(); // ディアボロ側ターン処理(ループ処理)
            return;
        }
        Gvar.var_2085 = Gvar.var_233[Gvar.var_225].Var0;
        Gvar.disc_rarity = Gvar.var_233[Gvar.var_225].Var13;
        Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
        if (Gvar.var_2040 == 1) {
            await Func.func479();
        }
        Gvar.var_233[Gvar.var_1876].Var8 = Gvar.var_233[Gvar.var_1876].Var8 + 1;
        Gvar.var_233[Gvar.var_1876].Var7 = Gvar.var_233[Gvar.var_1876].Var7 - 1;
        if (Gvar.var_233[Gvar.var_1876].Var11 == 1 && Gvar.yabaimono_id >= 805) {
            Gvar.count_buying_price = Gvar.count_buying_price + 100;
        }
        Gvar.var_683 = Gvar.var_233[Gvar.var_1876].Var8;
        Gvar.var_486[Gvar.var_682][Gvar.var_683][0] = Gvar.var_233[Gvar.var_225].Var0;
        Gvar.var_486[Gvar.var_682][Gvar.var_683][3] = Gvar.var_233[Gvar.var_225].Var3;
        Gvar.var_486[Gvar.var_682][Gvar.var_683][4] = Gvar.var_233[Gvar.var_225].Var4;
        Gvar.var_486[Gvar.var_682][Gvar.var_683][5] = Gvar.var_233[Gvar.var_225].Var5;
        Gvar.var_486[Gvar.var_682][Gvar.var_683][6] = Gvar.var_233[Gvar.var_225].Var6;
        Gvar.var_486[Gvar.var_682][Gvar.var_683][11] = Gvar.var_233[Gvar.var_225].Var11;
        Gvar.var_486[Gvar.var_682][Gvar.var_683][12] = Gvar.var_233[Gvar.var_225].Var12;
        Gvar.var_486[Gvar.var_682][Gvar.var_683][13] = Gvar.var_233[Gvar.var_225].Var13;
        Gvar.var_486[Gvar.var_682][Gvar.var_683][14] = Gvar.var_233[Gvar.var_225].Var14;
        Gvar.var_486[Gvar.var_682][Gvar.var_683][15] = Gvar.var_233[Gvar.var_225].Var15;
        Gvar.var_486[Gvar.var_682][Gvar.var_683][16] = Gvar.var_233[Gvar.var_225].Var16;
        Gvar.var_486[Gvar.var_682][Gvar.var_683][17] = Gvar.var_233[Gvar.var_225].Var17;
        Gvar.var_486[Gvar.var_682][Gvar.var_683][18] = Gvar.var_233[Gvar.var_225].Var18;
        Gvar.var_486[Gvar.var_682][Gvar.var_683][19] = Gvar.var_233[Gvar.var_225].Var19;
        Gvar.var_486[Gvar.var_682][Gvar.var_683][20] = Gvar.var_233[Gvar.var_225].Var20;
        Gvar.var_486[Gvar.var_682][Gvar.var_683][21] = Gvar.var_233[Gvar.var_225].Var21;
        Gvar.var_486[Gvar.var_682][Gvar.var_683][22] = Gvar.var_233[Gvar.var_225].Var22;
        Gvar.var_486[Gvar.var_682][Gvar.var_683][23] = Gvar.var_233[Gvar.var_225].Var23;
        Gvar.var_486[Gvar.var_682][Gvar.var_683][24] = Gvar.var_233[Gvar.var_225].Var24;
        Gvar.var_486[Gvar.var_682][Gvar.var_683][25] = Gvar.var_233[Gvar.var_225].Var25;
        Gvar.var_486[Gvar.var_682][Gvar.var_683][26] = Gvar.var_233[Gvar.var_225].Var26;
        Gvar.var_486[Gvar.var_682][Gvar.var_683][27] = Gvar.var_233[Gvar.var_225].Var27;
        Gvar.var_486[Gvar.var_682][Gvar.var_683][28] = Gvar.var_233[Gvar.var_225].Var28;
        Gvar.var_486[Gvar.var_682][Gvar.var_683][29] = Gvar.var_233[Gvar.var_225].Var29;
        await Func.func470(); //disc同士の合成関数(dioの骨)
        Gvar.var_1977 = 0;
        if (Gvar.var_476[Gvar.var_225] == 1) {
            Gvar.var_476[Gvar.var_225] = 0;
            Gvar.kougeki_disc_id  = 0;
            Gvar.var_580 = Gvar.var_580 - Gvar.var_894;
            Gvar.var_894 = 0;
            await Func.func494();
            Gvar.var_1977 = 1;
        }
        if (Gvar.var_477[Gvar.var_225] == 1) {
            Gvar.var_477[Gvar.var_225] = 0;
            Gvar.bougyo_disc_id = 0;
            Gvar.var_581 = Gvar.var_581 - Gvar.var_895;
            Gvar.var_895 = 0;
            await Func.func494();
            Gvar.var_1977 = 1;
        }
        if (Gvar.var_479[Gvar.var_225] == 1) {
            Gvar.var_479[Gvar.var_225] = 0;
            Gvar.shageki_disc_id = 0;
            Gvar.var_250 = 0;
            Gvar.var_1977 = 1;
        }
        if (Gvar.var_478[Gvar.var_225] == 1) {
            Gvar.var_478[Gvar.var_225] = 0;
            Gvar.nouryoku_disc_id = 0;
            await Func.func494();
            Gvar.var_1977 = 1;
        }
        if (Gvar.var_1977 == 1 && Gvar.yabaimono_id != 805) {
            Gvar.belongings_item_list = Gvar.var_2085;
            await Music.func106(); // BGM選曲呼び出し割り振り
        }
        Gvar.belongings_item_list = Gvar.var_2085;
        await Func.func492(); // アイテムリスト呼び出し
        if (Gvar.var_2040 == 0) {
            await Func.func433(); // アイテム配列(所持アイテム)初期化関数
        }
        Adap.DSPLAY(130);
        Gvar.var_1866 = 0;
        if (Gvar.yabaimono_id == 801) {
            await Func.setMessage("" + Gvar.item_name + "を",
                                    "形兆のDISCｹｰｽに入れた", 7, false, false, false);
        }
        if (Gvar.yabaimono_id == 802) {
            await Func.setMessage("" + Gvar.item_name + "を",
                                    "ﾄﾗｸﾀｰのﾀｲﾔに入れた", 7, false, false, false);
        }
        if (Gvar.yabaimono_id == 803) {
            await Func.setMessage("" + Gvar.item_name + "を",
                                    "ｻﾝｼﾞｪﾙﾏﾝの紙袋に入れた", 7, false, false, false);
        }
        if (Gvar.yabaimono_id == 804) {
            await Func.setMessage("" + Gvar.item_name + "を",
                                    "露伴のｶﾊﾞﾝに入れた", 7, false, false, false);
        }
        if (Gvar.yabaimono_id >= 805 || Gvar.yabaimono_id == 800) {
            if (Gvar.var_862[Gvar.yabaimono_id][0] == 0) {
                await Func.setMessage("" + Gvar.item_name + "を",
                                        "ヤバイものに入れた", 7, false, false, false);
            }
            if (Gvar.var_862[Gvar.yabaimono_id][0] == 1) {
                if (Gvar.yabaimono_id == 800) {
                    await Func.setMessage("" + Gvar.item_name + "を",
                                            "紙の中に入れた", 7, false, false, false);
                }
                if (Gvar.yabaimono_id == 805) {
                    await Func.setMessage("" + Gvar.item_name + "を",
                                            "ｸﾞｯﾁｮの死体に入れた", 7, false, false, false);
                }
                if (Gvar.yabaimono_id == 806) {
                    await Func.setMessage("" + Gvar.item_name + "を",
                                            "ｶﾙﾈの死体に入れた", 7, false, false, false);
                }
                if (Gvar.yabaimono_id == 807) {
                    await Func.setMessage("" + Gvar.item_name + "を",
                                            "DIOの骨に入れた", 7, false, false, false);
                }
                if (Gvar.yabaimono_id == 808) {
                    await Func.setMessage("" + Gvar.item_name + "を",
                                            "聖人の眼球に入れた", 7, false, false, false);
                }
                if (Gvar.yabaimono_id == 809) {
                    await Func.setMessage("" + Gvar.item_name + "を",
                                            "聖人の左腕に入れた", 7, false, false, false);
                }
                if (Gvar.yabaimono_id == 815) {
                    await Func.setMessage("" + Gvar.item_name + "を",
                                            "ｴﾙﾒｪｽのｱﾚに入れた", 7, false, false, false);
                }
                if (Gvar.yabaimono_id == 816) {
                    await Func.setMessage("" + Gvar.item_name + "を",
                                            "ﾐｷﾀｶのｶﾊﾞﾝに入れた", 7, false, false, false);
                }
                if (Gvar.yabaimono_id == 817) {
                    await Func.setMessage("" + Gvar.item_name + "を",
                                            "乳母車に入れた", 7, false, false, false);
                }
                if (Gvar.yabaimono_id == 818) {
                    await Func.setMessage("" + Gvar.item_name + "を",
                                            "送信壷に入れた", 7, false, false, false);
                }
            }
        }
        await Func.AutoDraw(3);
        await Func.func051(); // キー入力待ち処理
        if (Gvar.yabaimono_id == 805 && Gvar.var_2085 == 631 && Gvar.var_683 >= 2) {
            Gvar.var_2086 = Gvar.var_683 - 1;
            if (Gvar.var_486[Gvar.var_682][Gvar.var_2086][0] >= 600 && Gvar.var_486[Gvar.var_682][Gvar.var_2086][0] <= 605) {
                await Func.func472(); // グッチョの死体にピッツァ&トマトチーズのサラダを入れた時の動作処理
            }
        }
        await Func.func471();
        Gvar.var_213 = 1;
        if (Gvar.var_2040 == 1) {
            Gvar.var_2040 = 0;
        }
        if (Gvar.var_234 == 1) {
            Gvar.var_2087 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
            Gvar.var_78[Gvar.var_2087].Var8 = Gvar.var_233[0].Var8;
            Gvar.var_78[Gvar.var_2087].Var7 = Gvar.var_233[0].Var7;
        }
        if (Gvar.var_225 > Gvar.var_1876) {
            Gvar.var_226 = Gvar.var_1876;
        }
        if (Gvar.var_225 < Gvar.var_1876) {
            Gvar.var_226 = Gvar.var_1876 - 1;
        }
        if (Gvar.var_225 == 0) {
            Gvar.var_226 = Gvar.var_1876;
        }
        Gvar.var_231 = 0;
        Gvar.var_234 = 0;
        Gvar.var_2040 = 0;
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {func469}
