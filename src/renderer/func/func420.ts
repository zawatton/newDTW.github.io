/**
 * func420 — func420 各アイテムを使った際、item_listのIDに応じて効果を割り振り
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'
import { tf } from '../i18n'

// 各アイテムを使った際、item_listのIDに応じて効果を割り振り
async function func420(this: any) {
        Adap.dbgprt(420);
        Gvar.var_1926 = 0;
        Gvar.var_1927 = 0;
        Gvar.var_1928 = 0;
        Gvar.var_1929 = 0;
        Gvar.var_1930 = 0;
        if (Gvar.var_220 == 0 && Gvar.var_233[Gvar.var_225].Var15 == 2) { // 道具画面(メニュー画面/道具)が閉じている状態
            Gvar.var_1930 = 1;
        }
        if (Gvar.var_220 == 1 && Gvar.var_486[Gvar.var_682][Gvar.var_225][15] == 2) { // 道具画面(メニュー画面/道具)が開いている状態
            Gvar.var_1930 = 1;
        }
        if (Gvar.var_234 == 1) {
            Gvar.var_1931 = 0;
            if (Gvar.belongings_item_list >= 912 && Gvar.belongings_item_list < 987) {
                Gvar.var_1931 = 1;
            }
            if (Gvar.belongings_item_list >= 993 && Gvar.belongings_item_list <= 994) {
                Gvar.var_1931 = 1;
            }
            if (Gvar.belongings_item_list >= 750 && Gvar.belongings_item_list < 770) {
                Gvar.var_1931 = 1;
            }
            if (Gvar.belongings_item_list != 567 && Gvar.belongings_item_list != 590 && Gvar.belongings_item_list != 565) {
                if (Gvar.var_1931 == 0) {
                    await Func.func479();
                }
            }
            if (Gvar.belongings_item_list == 567 && Gvar.var_1930 == 1) {
                await Func.func479();
            }
            if (Gvar.belongings_item_list == 590 && Gvar.var_1930 == 1) {
                await Func.func479();
            }
            if (Gvar.belongings_item_list == 565 && Gvar.var_1930 == 1) {
                await Func.func479();
            }
            if (Gvar.var_1931 == 1 && Gvar.var_1930 == 1) {
                await Func.func479();
            }
        }
        Gvar.var_1932 = Gvar.var_225;
        if (Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 600) {
            Gvar.var_1264 = 1;
            Adap.DSPLAY(117);
        }
        if (Gvar.belongings_item_list >= 600 && Gvar.belongings_item_list < 606) {
            Gvar.var_1214 = 3;
            Adap.DSPLAY(119); // 食べた時の効果音
        }
        if (Gvar.belongings_item_list >= 606 && Gvar.belongings_item_list < 650) {
            Gvar.var_1214 = 1;
            Adap.DSPLAY(119); // 食べた時の効果音
        }
        if (Gvar.belongings_item_list >= 650 && Gvar.belongings_item_list < 660) {
            Gvar.var_1214 = 2;
            Adap.DSPLAY(119); // 食べた時の効果音
        }
        if (Gvar.belongings_item_list >= 660 && Gvar.belongings_item_list < 700) {
            Gvar.var_1214 = 1;
            Adap.DSPLAY(119); // 食べた時の効果音
        }
        if (Gvar.belongings_item_list >= 750 && Gvar.belongings_item_list < 800 && Gvar.var_234 == 0) {
            Gvar.var_1252 = 1;
        }
        if (Gvar.belongings_item_list >= 900 && Gvar.belongings_item_list < 1000 && Gvar.var_234 == 0) {
            Gvar.var_1252 = 1;
        }
        if (Gvar.belongings_item_list >= 750 && Gvar.belongings_item_list < 770) {
            Gvar.var_1840 = Gvar.belongings_item_list + 250 - 900;
            Gvar.var_988[Gvar.var_1840] = 1;
        }
        if (Gvar.belongings_item_list >= 900 && Gvar.belongings_item_list < 1000) {
            Gvar.var_1840 = Gvar.belongings_item_list - 900;
            Gvar.var_988[Gvar.var_1840] = 1;
        }
        if (Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 500) {
            Gvar.var_1933 = 1;
        }
        if (Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 400) {
            Gvar.var_1934 = 0;
            if (Gvar.var_896 == 1 && Gvar.disc_class == 1) {
                Gvar.var_1934 = 1;
            }
            if (Gvar.var_897 == 1 && Gvar.disc_class == 2) {
                Gvar.var_1934 = 1;
            }
            if (Gvar.var_898 == 1 && Gvar.disc_class == 3) {
                Gvar.var_1934 = 1;
            }
            if (Gvar.var_896 == 1 && Gvar.var_476[Gvar.var_225] == 1) {
                Gvar.var_1934 = 1;
            }
            if (Gvar.var_897 == 1 && Gvar.var_477[Gvar.var_225] == 1) {
                Gvar.var_1934 = 1;
            }
            if (Gvar.var_898 == 1 && Gvar.var_478[Gvar.var_225] == 1) {
                Gvar.var_1934 = 1;
            }
            // スーパープライの呪いを解除した後、外したにもかかわらず、新しく装備しようとすると"呪われていてはずせない！"のコメントが表示された。
            // 装備を外すのに何個もフラグがあるのが問題?
            /* 
            if (Gvar.var_1934 == 1) {
                Gvar.comments_row1 = "";
                Gvar.comments_row2 = "";
                Gvar.var_295 = "";
                Gvar.comments_row1a = "";
                Gvar.comments_row2a = "";
                Gvar.var_298 = "";
                Gvar.animationStep = 0;
                Gvar.comments_row1 = "呪われていてはずせない！";
                Gvar.var_198 = 1; // メッセージウィンドウ開く
                Gvar.var_300 = 0;
                Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
                await Func.func047(); // メッセージ履歴追加処理
                await Func.AutoDraw(10);
                await Func.func340(); // キー入力による選択処理
                Gvar.var_1264 = 0;
                Gvar.var_217 = 1;
                Gvar.disc_class = 0;
                Gvar.var_1933 = 0;
                await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
                return;
            }*/
        }
        if (Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 400) {
            if (Gvar.var_233[Gvar.var_225].Var4 != 0) {
                Gvar.var_1936 = 0; // アイテム毎の自動メッセージ非表示(item_message表示)
                if (Gvar.disc_class == 1 && Gvar.var_476[Gvar.var_225] == 0) {
                    await Func.setMessage(tf("{0}+{1}を", Gvar.item_name, Gvar.var_233[Gvar.var_225].Var4), "攻撃用に装備した", 7, false, false, false);
                    Gvar.var_1927 = Gvar.belongings_item_list;
                    Gvar.var_1926 = 1;
                    await Music.func105(); // discを装備した際のBGM選曲
                }
                if (Gvar.disc_class == 2 && Gvar.var_477[Gvar.var_225] == 0) {
                    await Func.setMessage(tf("{0}+{1}を", Gvar.item_name, Gvar.var_233[Gvar.var_225].Var4), "防御用に装備した", 7, false, false, false);
                    Gvar.var_1928 = Gvar.belongings_item_list;
                    Gvar.var_1926 = 1;
                    await Music.func105(); // discを装備した際のBGM選曲
                }
                if (Gvar.disc_class == 3 && Gvar.var_478[Gvar.var_225] == 0) {
                    await Func.setMessage(tf("{0}+{1}を", Gvar.item_name, Gvar.var_233[Gvar.var_225].Var4), "能力用に装備した", 7, false, false, false);
                    Gvar.var_1929 = Gvar.belongings_item_list;
                    Gvar.var_1926 = 1;
                    await Music.func105(); // discを装備した際のBGM選曲
                }
            }
            if (Gvar.var_233[Gvar.var_225].Var4 == 0) {
                Gvar.var_1936 = 0; // アイテム毎の自動メッセージ非表示(item_message表示)
                if (Gvar.disc_class == 1 && Gvar.var_476[Gvar.var_225] == 0) {
                    await Func.setMessage(tf("{0}を", Gvar.item_name), "攻撃用に装備した", 7, false, false, false);
                    Gvar.var_1927 = Gvar.belongings_item_list;
                    Gvar.var_1926 = 1;
                    await Music.func105(); // discを装備した際のBGM選曲
                }
                if (Gvar.disc_class == 2 && Gvar.var_477[Gvar.var_225] == 0) {
                    await Func.setMessage(tf("{0}を", Gvar.item_name), "防御用に装備した", 7, false, false, false);
                    Gvar.var_1928 = Gvar.belongings_item_list;
                    Gvar.var_1926 = 1;
                    await Music.func105(); // discを装備した際のBGM選曲
                }
                if (Gvar.disc_class == 3 && Gvar.var_478[Gvar.var_225] == 0) {
                    await Func.setMessage(tf("{0}を", Gvar.item_name), "能力用に装備した", 7, false, false, false);
                    Gvar.var_1929 = Gvar.belongings_item_list;
                    Gvar.var_1926 = 1;
                    await Music.func105(); // discを装備した際のBGM選曲
                }
            }
            if (Gvar.var_862[Gvar.belongings_item_list][0] == 0) {
                Gvar.var_1936 = 0; // アイテム毎の自動メッセージ非表示(item_message表示)
                if (Gvar.disc_class == 1 && Gvar.var_476[Gvar.var_225] == 0) {
                    await Func.setMessage(tf("{0}を", Gvar.item_name), "攻撃用に装備した", 7, false, false, false);
                    Gvar.var_1927 = Gvar.belongings_item_list;
                    Gvar.var_1926 = 1;
                    await Music.func105(); // discを装備した際のBGM選曲
                }
                if (Gvar.disc_class == 2 && Gvar.var_477[Gvar.var_225] == 0) {
                    await Func.setMessage(tf("{0}を", Gvar.item_name), "防御用に装備した", 7, false, false, false);
                    Gvar.var_1928 = Gvar.belongings_item_list;
                    Gvar.var_1926 = 1;
                    await Music.func105(); // discを装備した際のBGM選曲
                }
                if (Gvar.disc_class == 3 && Gvar.var_478[Gvar.var_225] == 0) {
                    await Func.setMessage(tf("{0}を", Gvar.item_name), "能力用に装備した", 7, false, false, false);
                    Gvar.var_1929 = Gvar.belongings_item_list;
                    Gvar.var_1926 = 1;
                    await Music.func105(); // discを装備した際のBGM選曲
                }
            }
            if (Gvar.disc_class == 1 && Gvar.var_476[Gvar.var_225] == 1) {
                await Func.setMessage(tf("{0}をはずした", Gvar.item_name), "", 7, false, false, false);
                await Music.func106(); // BGM選曲呼び出し割り振り
            }
            if (Gvar.disc_class == 2 && Gvar.var_477[Gvar.var_225] == 1) {
                await Func.setMessage(tf("{0}をはずした", Gvar.item_name), "", 7, false, false, false);
                await Music.func106(); // BGM選曲呼び出し割り振り
            }
            if (Gvar.disc_class == 3 && Gvar.var_478[Gvar.var_225] == 1) {
                await Func.setMessage(tf("{0}をはずした", Gvar.item_name), "", 7, false, false, false);
                await Music.func106(); // BGM選曲呼び出し割り振り
            }
        }
        if (Gvar.belongings_item_list >= 400 && Gvar.belongings_item_list < 450 && Gvar.var_479[Gvar.var_225] == 0) {
            await Func.setMessage(tf("{0}({1})を装備した", Gvar.item_name, Gvar.var_233[Gvar.var_225].Var3), "", 7, false, false, false);
            Gvar.var_1936 = 0; // アイテム毎の自動メッセージ非表示(item_message表示)
            await Music.func105(); // discを装備した際のBGM選曲
        }
        if (Gvar.belongings_item_list >= 400 && Gvar.belongings_item_list < 450 && Gvar.var_479[Gvar.var_225] == 1) {
            await Func.setMessage(tf("{0}({1})をはずした", Gvar.item_name, Gvar.var_233[Gvar.var_225].Var3), "", 7, false, false, false);
            Gvar.var_1936 = 0; // アイテム毎の自動メッセージ非表示(item_message表示)
            await Music.func106(); // BGM選曲呼び出し割り振り
        }
        if (Gvar.belongings_item_list >= 500 && Gvar.belongings_item_list < 600) {
            await Func.setMessage(tf("{0} を使った", Gvar.item_name), "", 7, false, false, false);
            Gvar.var_1936 = 1; // アイテム毎の自動メッセージ表示(item_message表示)
        }
        if (Gvar.belongings_item_list >= 600 && Gvar.belongings_item_list < 700) {
            await Func.setMessage(tf("{0} を食べた", Gvar.item_name), "", 7, false, false, false);
            Gvar.var_1936 = 1; // アイテム毎の自動メッセージ表示(item_message表示)
        }
        if (Gvar.belongings_item_list == 632 || Gvar.belongings_item_list == 646) {
            await Func.setMessage(tf("{0} を飲んだ", Gvar.item_name), "", 7, false, false, false);
        }
        if (Gvar.belongings_item_list >= 700 && Gvar.belongings_item_list < 750) {
            await Func.setMessage(tf("{0} を使った", Gvar.item_name), "", 7, false, false, false);
            Gvar.var_1936 = 1; // アイテム毎の自動メッセージ表示(item_message表示)
        }
        if (Gvar.belongings_item_list >= 750 && Gvar.belongings_item_list < 800) {
            await Func.setMessage(tf("{0} を読んだ", Gvar.item_name), "", 7, false, false, false);
            Gvar.var_1936 = 1; // アイテム毎の自動メッセージ表示(item_message表示)
            Gvar.var_1253 = Gvar.belongings_item_list;
        }
        if (Gvar.belongings_item_list >= 900 && Gvar.belongings_item_list < 1000) {
            await Func.setMessage(tf("{0} を読んだ", Gvar.item_name), "", 7, false, false, false);
            Gvar.var_1936 = 1; // アイテム毎の自動メッセージ表示(item_message表示)
            Gvar.var_1253 = Gvar.belongings_item_list;
        }
        if (Gvar.belongings_item_list >= 912 && Gvar.belongings_item_list <= 986 && Gvar.var_1930 == 0) {
            await Func.setMessage("どのスタンドを研究しますか？", "", 7, false, false, false);
            Gvar.var_1936 = 0; // アイテム毎の自動メッセージ非表示(item_message表示)
            Gvar.var_1937 = Gvar.item_name;
        }
        if (Gvar.belongings_item_list >= 993 && Gvar.belongings_item_list <= 994 && Gvar.var_1930 == 0) {
            await Func.setMessage("どのスタンドを研究しますか？", "", 7, false, false, false);
            Gvar.var_1936 = 0; // アイテム毎の自動メッセージ非表示(item_message表示)
            Gvar.var_1937 = Gvar.item_name;
        }
        if (Gvar.belongings_item_list >= 750 && Gvar.belongings_item_list <= 770 && Gvar.var_1930 == 0) {
            await Func.setMessage("どのスタンドを研究しますか？", "", 7, false, false, false);
            Gvar.var_1936 = 0; // アイテム毎の自動メッセージ非表示(item_message表示)
            Gvar.var_1937 = Gvar.item_name;
        }
        if (Gvar.belongings_item_list >= 912 && Gvar.belongings_item_list <= 986 && Gvar.var_1930 == 1) {
            await Func.setMessage(tf("{0} を読んだ", Gvar.item_name), "", 7, false, false, false);
            Gvar.var_1936 = 0; // アイテム毎の自動メッセージ非表示(item_message表示)
            Gvar.var_1937 = Gvar.item_name;
        }
        if (Gvar.belongings_item_list >= 993 && Gvar.belongings_item_list <= 994 && Gvar.var_1930 == 1) {
            await Func.setMessage(tf("{0} を読んだ", Gvar.item_name), "", 7, false, false, false);
            Gvar.var_1936 = 0; // アイテム毎の自動メッセージ非表示(item_message表示)
            Gvar.var_1937 = Gvar.item_name;
        }
        if (Gvar.belongings_item_list >= 750 && Gvar.belongings_item_list <= 770 && Gvar.var_1930 == 1) {
            await Func.setMessage(tf("{0} を読んだ", Gvar.item_name), "", 7, false, false, false);
            Gvar.var_1936 = 0; // アイテム毎の自動メッセージ非表示(item_message表示)
            Gvar.var_1937 = Gvar.item_name;
        }
        Gvar.var_1938 = Gvar.item_name;
        if (Gvar.var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
            Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
            Gvar.var_233[Gvar.var_225].Var14 = 1;
            if (Gvar.dungeon_number != 3 && Gvar.dungeon_number != 4 && Gvar.dungeon_number != 5 && Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 400) {
                Gvar.var_862[Gvar.belongings_item_list][0] = 1;
            }
        }
        if (Gvar.var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
            Gvar.belongings_item_list = Gvar.var_486[Gvar.var_682][Gvar.var_225][0];
        }
        if (Gvar.dungeon_number != 1 && Gvar.var_262 == 0) {
            Gvar.var_1939 = 0;
            if (Gvar.belongings_item_list >= 450 && Gvar.belongings_item_list < 500) {
                Gvar.var_1939 = 1;
            }
            if (Gvar.belongings_item_list >= 500 && Gvar.belongings_item_list < 600) {
                Gvar.var_1939 = 1;
            }
            // No = 3 なので、ディアボロの試練
            if (Gvar.dungeon_number == 3 && Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 400) {
                Gvar.var_1939 = 1;
            }
            // No = 4 なので、一巡後の世界
            if (Gvar.dungeon_number == 4 && Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 400) {
                Gvar.var_1939 = 1;
            }
            // No = 5 なので、鉄獄(鉄の牢獄)
            if (Gvar.dungeon_number == 5 && Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 400) {
                Gvar.var_1939 = 1;
            }
            // 読んだアイテムが未識別状態(Gvar.var_862[Gvar.belongings_item_list][0] == 0)かつ
            // アイテムが Gvar.var_1939 = 1 に該当するものかつ
            // No = 567 アヴドゥルのdiscでないかつ
            // No = 590 ギアッチョのdiscでないかつ
            // No = 565 ピッチ神父のdisc出ない場合
            if (Gvar.var_862[Gvar.belongings_item_list][0] == 0 && Gvar.var_1939 == 1 && Gvar.belongings_item_list != 567 && Gvar.belongings_item_list != 590 && Gvar.belongings_item_list != 565) {
                if (Gvar.var_375 == 0) {
                    await Func.AutoDraw(9);
                    if (Gvar.var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                        Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
                    }
                    if (Gvar.var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
                        Gvar.belongings_item_list = Gvar.var_486[Gvar.var_682][Gvar.var_225][0];
                    }
                    Gvar.var_862[Gvar.belongings_item_list][0] = 1;
                    await Func.func492(); // アイテムリスト呼び出し
                    if (Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 400 && Gvar.var_233[Gvar.var_225].Var4 != 0) {
                        await Func.setMessage(tf("なんと{0}は", Gvar.item_name), tf("{0}+{1}だった！", Gvar.item_name, Gvar.var_233[Gvar.var_225].Var4), 7, false, false, false);
                    }
                    else {
                        await Func.setMessage(tf("なんと{0}は", Gvar.item_name), tf("{0}だった！", Gvar.item_name), 7, false, false, false);
                    }
                    await Func.AutoDraw(9);
                }
            }
        }
        if (Gvar.var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
            Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
        }
        if (Gvar.var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
            Gvar.belongings_item_list = Gvar.var_486[Gvar.var_682][Gvar.var_225][0];
        }
        // 装備discの場合
        if (Gvar.var_233[Gvar.var_225].Var12 == 1 && Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 400) {
            Gvar.var_198 = 1; // メッセージウィンドウ開く
            Gvar.var_300 = 0;
            for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
            }
            if (Gvar.disc_class == 1) {
                Gvar.var_896 = 1;
            }
            if (Gvar.disc_class == 2) {
                Gvar.var_897 = 1;
            }
            if (Gvar.disc_class == 3) {
                Gvar.var_898 = 1;
            }
            await Func.setMessage(tf("{0}は", Gvar.item_name), "呪われていた！！", 7, false, false, false);
            Gvar.var_1940 = Gvar.var_199;
            Gvar.var_199 = 2;
            Gvar.var_1264 = 0;
            Gvar.var_747 = 1;
            Gvar.var_1212 = 1;
            Adap.DSPLAY(127);
            Gvar.var_389 = 2;
            Gvar.var_1498 = 1;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1498 = 1;
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1498 = 2;
            }
            await Func.AutoDraw(10);
            Gvar.var_1498 = 0;
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_389 = 0;
            Gvar.var_199 = Gvar.var_1940;
        }
        if (Gvar.var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
            Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
        }
        if (Gvar.var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
            Gvar.belongings_item_list = Gvar.var_486[Gvar.var_682][Gvar.var_225][0];
        }
        Gvar.var_1941 = 0;
        if (Gvar.belongings_item_list < 500) {
            Gvar.var_1941 = 1;
        }
        if (Gvar.belongings_item_list == 567 || Gvar.belongings_item_list == 590 || Gvar.belongings_item_list == 565) {
            Gvar.var_1941 = 1;
        }
        if (Gvar.belongings_item_list >= 912 && Gvar.belongings_item_list <= 986) {
            Gvar.var_1941 = 1;
        }
        if (Gvar.belongings_item_list >= 750 && Gvar.belongings_item_list <= 800) {
            Gvar.var_1941 = 1;
        }
        // 道具画面(メニュー画面/道具)が閉じている状態
        if (Gvar.var_1941 == 0 && Gvar.var_220 == 0 && Gvar.var_233[Gvar.var_225].Var11 == 1) {
            Gvar.var_106 = 1;
            Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
            await Func.func492(); // アイテムリスト呼び出し
            Gvar.count_buying_price = Gvar.count_buying_price + Gvar.buying_price;
        }
        // 道具画面(メニュー画面/道具)が開いている状態
        if (Gvar.var_1941 == 0 && Gvar.var_220 == 1 && Gvar.var_486[Gvar.var_682][Gvar.var_225][11] == 1) {
            Gvar.var_106 = 1;
            Gvar.belongings_item_list = Gvar.var_486[Gvar.var_682][Gvar.var_225][0];
            await Func.func492(); // アイテムリスト呼び出し
            Gvar.count_buying_price = Gvar.count_buying_price + Gvar.buying_price;
        }
        if (Gvar.var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
            Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
            Gvar.disc_rarity = Gvar.var_233[Gvar.var_225].Var13;
            Gvar.var_1942 = Gvar.var_233[Gvar.var_225].Var20;
            Gvar.var_1943 = Gvar.var_233[Gvar.var_225].Var21;
        }
        if (Gvar.var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
            Gvar.belongings_item_list = Gvar.var_486[Gvar.var_682][Gvar.var_225][0];
            Gvar.disc_rarity = Gvar.var_486[Gvar.var_682][Gvar.var_225][13];
            Gvar.var_1942 = Gvar.var_486[Gvar.var_682][Gvar.var_225][20];
            Gvar.var_1943 = Gvar.var_486[Gvar.var_682][Gvar.var_225][21];
        }
        Gvar.var_1944 = Gvar.belongings_item_list;

        await Func.func492(); // アイテムリスト呼び出し
        if (Gvar.belongings_item_list == 700 || Gvar.belongings_item_list == 571 || Gvar.belongings_item_list == 579 || Gvar.belongings_item_list == 729 || Gvar.belongings_item_list == 730 || Gvar.belongings_item_list == 731 || Gvar.belongings_item_list == 701 || Gvar.belongings_item_list == 995) {
            Gvar.var_1936 = 0; // アイテム毎の自動メッセージ非表示(item_message表示)
        }
        if (Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 400) {
            await Func.func493(); // 装備disc能力値の設定
        }
        if (Gvar.belongings_item_list < 100 || Gvar.belongings_item_list >= 500) {
            await Func.func498(); // 消費アイテムの効果
        }
        // if (Gvar.belongings_item_list >= 500 || Gvar.belongings_item_list < 750) {
        //     await Func.func498(); // 消費アイテムの効果
        // }
        Gvar.belongings_item_list = Gvar.var_1944;


        if (Gvar.var_234 == 0) {
            Gvar.var_1931 = 0;
            if (Gvar.belongings_item_list >= 912 && Gvar.belongings_item_list < 987) {
                Gvar.var_1931 = 1;
            }
            if (Gvar.belongings_item_list >= 993 && Gvar.belongings_item_list <= 994) {
                Gvar.var_1931 = 1;
            }
            if (Gvar.belongings_item_list >= 750 && Gvar.belongings_item_list < 770) {
                Gvar.var_1931 = 1;
            }
            // 
            if (Gvar.belongings_item_list != 567 && Gvar.belongings_item_list != 590 && Gvar.belongings_item_list != 565) {
                if (Gvar.var_1931 == 0) {
                    await Func.func432(); // disc関係の配列宣言処理 or それ以外は初期化処理
                }
            }
            // No = 567 ジョンガリAのdisc
            if (Gvar.belongings_item_list == 567 && Gvar.var_1930 == 1) {
                await Func.func432(); // disc関係の配列宣言処理 or それ以外は初期化処理
            }
            // No = 590 ギアッチョのdisc
            if (Gvar.belongings_item_list == 590 && Gvar.var_1930 == 1) {
                await Func.func432(); // disc関係の配列宣言処理 or それ以外は初期化処理
            }
            // No = 565 ケンゾーのdisc
            if (Gvar.belongings_item_list == 565 && Gvar.var_1930 == 1) {
                await Func.func432(); // disc関係の配列宣言処理 or それ以外は初期化処理
            }
            if (Gvar.var_1931 == 1 && Gvar.var_1930 == 1) {
                await Func.func432(); // disc関係の配列宣言処理 or それ以外は初期化処理
            }
        }
        await Func.AutoDraw(9);
        if (Gvar.var_1945 == 4) {
            Gvar.var_1936 = 0; // アイテム毎の自動メッセージ非表示(item_message非表示)
        }
        // アイテム使用時のメッセージ表示処理
        if (Gvar.var_1936 == 1) {
            await Func.setMessage(Gvar.item_message1, Gvar.item_message2, 7, false, false, false);
            await Func.AutoDraw(5);
        }
        Gvar.var_1948 = 0;
        Gvar.var_1264 = 0;
        Gvar.var_1214 = 0;
        Gvar.var_217 = 1;
        Gvar.disc_class = 0;
        if (Gvar.var_1949 == 1) {
            Adap.DSPLAY(118);
            Gvar.var_502 = 1;
            await Func.func356();
            return;
        }
        if (Gvar.var_1223 == 1) {
            await Func.func647(); // 射撃攻撃動作処理
            return;
        }
        if (Gvar.var_1945 >= 1) {
            await Func.func438(); // キーの入力  ？
            return;
        }
        if (Gvar.var_1950 > 0) {
            await Func.func443(); // キーの入力  ？
            return;
        }
        if (Gvar.var_1055 == 1) {
            await Func.func447(); // 魔法のランプを使用した際の動作処理
            return;
        }
        if (Gvar.var_1951 == 1) {
            await Func.func550(); // 階段を上り下りする時に関係する関数
            return;
        }
        Gvar.var_1252 = 0;
        if (Gvar.var_1933 == 1) { // アイテム100 ~ 500 であれば
            await Func.func494();
            await Func.func497(); // スタンドの共鳴発動時のメッセージ表示
            Gvar.var_1933 = 0;
            Gvar.var_1926 = 0;
            Gvar.var_1927 = 0;
            Gvar.var_1928 = 0;
            Gvar.var_1929 = 0;
            await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        }
        Gvar.var_234 = 0;
        Gvar.var_220 = 0; // 道具画面(メニュー画面/道具)が閉じている状態
        if (Gvar.var_1952 == 1) {
            Gvar.var_1952 = 0;
            Gvar.var_217 = 0;
            await Func.func009(); // ディアボロ側ターン処理(ループ処理)
            return;
        }
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {func420}
