/**
 * func585 — func585 ラングラングラーの唾吐きかけ動作処理
 *
 * (org原典: newDTW_func5)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'
import * as Enemy from '../enemy/index'
import { tf } from '../i18n'

async function func585(this: any) {
        Adap.dbgprt(585);
        Gvar.var_1192 = 0;
        Gvar.var_2804 = 0;
        if (Gvar.var_83[Gvar.var_673].Var0 == 80) {
            Adap.DSPLAY(183);
            Gvar.var_389 = 1;
            await Func.setMessage("ﾗﾝｸﾞ･ﾗﾝｸﾞﾗｰに唾をかけられた！", "思うように動けなくなった！", 8, false, false, false);
            await Func.AutoDraw(6);
            Gvar.var_389 = 0;
            Adap.DSPLAY(134);
            Gvar.var_126 = 1;
            return;
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 45 || Gvar.var_83[Gvar.var_673].Var0 == 158) {
            Adap.DSPLAY(193);
            Gvar.var_389 = 1;
            await Func.setMessage("由花子の髪の毛が刺さった！", "思うように動けなくなった！", 8, false, false, false);
            await Func.AutoDraw(6);
            Gvar.var_389 = 0;
            Adap.DSPLAY(134);
            Gvar.var_126 = 1;
            return;
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 21) {
            Gvar.var_2804 = 0;
            for (let cnt2 = 0; cnt2 < Gvar.var_97 + 1; ++cnt2) {
                if (Gvar.var_83[cnt2][0] == 137) {
                    if (Gvar.var_83[cnt2][10] == Gvar.var_83[Gvar.var_673].Var10 && Gvar.var_83[cnt2][10] != 14) { // 0.1405 カウンターがリンクしていなかったので修正 cnt3 → cnt2
                        Gvar.var_2804 = 1;
                    }
                    Gvar.var_2806 = Gvar.var_83[cnt2][1]; // 0.1405 カウンターがリンクしていなかったので修正 cnt3 → cnt2
                    Gvar.var_2807 = Gvar.var_83[cnt2][2]; // 0.1405 カウンターがリンクしていなかったので修正 cnt3 → cnt2
                    Gvar.var_2808 = Gvar.var_83[cnt2][1] - 1; // 0.1405 カウンターがリンクしていなかったので修正 cnt3 → cnt2
                    if (Gvar.var_2808 < 0) {
                        Gvar.var_2808 = 0;
                    }
                    Gvar.var_2809 = Gvar.var_83[cnt2][1] + 1; // 0.1405 カウンターがリンクしていなかったので修正 cnt3 → cnt2
                    if (Gvar.var_2809 > Gvar.var_33) {
                        Gvar.var_2809 = Gvar.var_33;
                    }
                    Gvar.var_2810 = Gvar.var_83[cnt2][2] - 1; // 0.1405 カウンターがリンクしていなかったので修正 cnt3 → cnt2
                    if (Gvar.var_2810 < 0) {
                        Gvar.var_2810 = 0;
                    }
                    Gvar.var_2811 = Gvar.var_83[cnt2][2] + 1; // 0.1405 カウンターがリンクしていなかったので修正 cnt3 → cnt2
                    if (Gvar.var_2811 > Gvar.var_34) {
                        Gvar.var_2811 = Gvar.var_34;
                    }
                    if (Gvar.var_71[Gvar.var_2808][Gvar.var_2807] == Gvar.var_83[Gvar.var_673].Var10 && Gvar.var_83[cnt2][10] != 14) { // 0.1405 カウンターがリンクしていなかったので修正 cnt3 → cnt2
                        Gvar.var_2804 = 1;
                    }
                    if (Gvar.var_71[Gvar.var_2809][Gvar.var_2807] == Gvar.var_83[Gvar.var_673].Var10 && Gvar.var_83[cnt2][10] != 14) { // 0.1405 カウンターがリンクしていなかったので修正 cnt3 → cnt2
                        Gvar.var_2804 = 1;
                    }
                    if (Gvar.var_71[Gvar.var_2806][Gvar.var_2811] == Gvar.var_83[Gvar.var_673].Var10 && Gvar.var_83[cnt2][10] != 14) { // 0.1405 カウンターがリンクしていなかったので修正 cnt3 → cnt2
                        Gvar.var_2804 = 1;
                    }
                    if (Gvar.var_71[Gvar.var_2806][Gvar.var_2810] == Gvar.var_83[Gvar.var_673].Var10 && Gvar.var_83[cnt2][10] != 14) { // 0.1405 カウンターがリンクしていなかったので修正 cnt3 → cnt2
                        Gvar.var_2804 = 1;
                    }
                }
            }
            if (Gvar.var_116 == 0 && Gvar.var_2804 == 0) {
                Gvar.var_389 = 1;
                await Func.setMessage("空気弾が体にまとわりついた。", "体が動かない！", 8, false, false, false);
                await Func.AutoDraw(10);
                Gvar.var_389 = 0;
                Gvar.var_116 = 1;
                Gvar.var_115 = 0;
                Gvar.var_461 = Gvar.var_66;
                Gvar.var_462 = Gvar.var_67;
                Gvar.var_83[Gvar.var_673].Var12 = 6;
                return;
            }
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 47 || Gvar.var_83[Gvar.var_673].Var0 == 67) {
            await Enemy.func588();
            return;
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 32) {
            Gvar.var_1971 = Gvar.var_199;
            Gvar.var_199 = 2;
            Gvar.var_1241 = 1;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1311 = 1;
            await Func.setMessage("これで安心して熟睡できる…", "", 8, true, false, false);
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_1311 = 0;
            Gvar.var_1241 = 0;
            await Func.func701();
            Gvar.var_199 = Gvar.var_1971;
            return;
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 76) {
            if (Gvar.var_1304 == 1) {
                Gvar.var_199 = 2;
                Gvar.var_389 = 2;
                Gvar.var_1300 = 2;
                Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
                await Func.setMessage("「ドッグォン」の文字が貼りついた！", "", 8, true, false, false);
                Gvar.var_114 = 0;
                Gvar.var_463 = 0;
                Gvar.var_464 = 0;
                Gvar.var_461 = 0;
                Gvar.var_462 = 0;
                Gvar.var_1389 = Gvar.var_66;
                Gvar.var_1390 = Gvar.var_67;
                Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
                Gvar.var_1573 = 1;
                Adap.DSPLAY(180);
                for (let cnt3 = 0; cnt3 < 14; ++cnt3) {
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_1573++;
                }
                Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
                Gvar.var_1573 = 0;
                Gvar.var_1300 = 0;
                Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
                Adap.DSPLAY(216); // ワープして逃げる時の効果音
                Gvar.var_374 = 1;
                Gvar.var_774 = 160;
                Gvar.var_1576 = 1;
                Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
                for (let cnt3 = 0; cnt3 < 8; ++cnt3) {
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_774 = Gvar.var_774 - 20;
                }
                Gvar.var_1576 = 0;
                Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
                Gvar.var_374 = 0;
                Gvar.var_389 = 0;
                await Func.func499(); // ダンジョン動作処理?
                Gvar.var_2392 = 1;
                for (let cnt3 = 0; cnt3 < Gvar.var_97; ++cnt3) {
                    Gvar.var_83[Gvar.var_2392].Var9 = 0;
                    Gvar.var_83[Gvar.var_2392].Var18 = 0;
                    Gvar.var_2392 = Gvar.var_2392 + 1;
                }
                return;
            }
            if (Gvar.var_1304 == 0) {
                Gvar.var_1971 = Gvar.var_199;
                Gvar.var_199 = 2;
                Gvar.var_389 = 2;
                Gvar.var_1300 = 1;
                Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
                await Func.setMessage("「ドジュウ」の文字が貼りついた！", "", 8, true, false, false);
                Adap.DSPLAY(175);
                Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
                Gvar.var_458 = 1;
                for (let cnt3 = 0; cnt3 < 20; ++cnt3) {
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_458++;
                    Gvar.var_198 = 1; // メッセージウィンドウ開く
                    Gvar.var_300 = 0;
                }
                Gvar.var_458 = 0;
                Gvar.var_1300 = 0;
                Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
                Gvar.var_2460 = 0;
                Gvar.var_2461 = 1;
                for (let cnt3 = 0; cnt3 < Gvar.var_224; ++cnt3) {
                    if (Gvar.var_233[Gvar.var_2461].Var0 == 605 || Gvar.var_233[Gvar.var_2461].Var0 == 635 || Gvar.var_233[Gvar.var_2461].Var0 == 640) {
                        Gvar.var_2460 = Gvar.var_233[Gvar.var_2461].Var0;
                        Gvar.var_233[Gvar.var_2461].Var0 = 641;
                        Gvar.var_2812 = 641;
                        break;
                    }
                    if (Gvar.var_233[Gvar.var_2461].Var0 >= 600 && Gvar.var_233[Gvar.var_2461].Var0 <= 604) {
                        Gvar.var_2460 = Gvar.var_233[Gvar.var_2461].Var0;
                        Gvar.var_233[Gvar.var_2461].Var0 = 605;
                        Gvar.var_2812 = 605;
                        break;
                    }
                    if (Gvar.var_233[Gvar.var_2461].Var0 >= 630 && Gvar.var_233[Gvar.var_2461].Var0 <= 639) {
                        Gvar.var_2460 = Gvar.var_233[Gvar.var_2461].Var0;
                        Gvar.var_233[Gvar.var_2461].Var0 = 635;
                        Gvar.var_2812 = 635;
                        break;
                    }
                    if (Gvar.var_233[Gvar.var_2461].Var0 >= 642 && Gvar.var_233[Gvar.var_2461].Var0 <= 649) {
                        Gvar.var_2460 = Gvar.var_233[Gvar.var_2461].Var0;
                        Gvar.var_233[Gvar.var_2461].Var0 = 640;
                        Gvar.var_2812 = 640;
                        break;
                    }
                    if (Gvar.var_233[Gvar.var_2461].Var0 >= 650 && Gvar.var_233[Gvar.var_2461].Var0 <= 654) {
                        Gvar.var_2460 = Gvar.var_233[Gvar.var_2461].Var0;
                        Gvar.var_233[Gvar.var_2461].Var0 = 639;
                        Gvar.var_2812 = 639;
                        break;
                    }
                    Gvar.var_2461 = Gvar.var_2461 + 1;
                }
                Gvar.belongings_item_list = Gvar.var_2460;
                await Func.func492(); // アイテムリスト呼び出し
                Gvar.var_2813 = Gvar.item_name;
                Gvar.belongings_item_list = Gvar.var_2812;
                await Func.func492(); // アイテムリスト呼び出し
                Gvar.var_2814 = Gvar.item_name;
                if (Gvar.var_2460 != 0) {
                    await Func.setMessage(tf("{0}は", Gvar.var_2813), tf("{0}になった！", Gvar.var_2814), 8, false, false, false);
                }
                if (Gvar.var_2460 == 0) {
                    await Func.setMessage("しかし何も起こらなかった。", "", 8, false, false, false);
                }
                Gvar.var_389 = 0;
                Gvar.var_199 = Gvar.var_1971;
                return;
            }
        }
        // Gvar.enemy_list = 113 DIO、Gvar.enemy_list = 175 不明敵(没敵チャカ?)
        if (Gvar.var_83[Gvar.var_673].Var0 != 113 && Gvar.var_83[Gvar.var_673].Var0 != 175) {
            await Func.func584(); // 射撃攻撃を受けた時の回避動作処理(弾丸を止める、燃え尽きる等)
        }
        if (Gvar.var_2803 == 1) {
            return;
        }
        if (Gvar.var_128 >= 1) {
            await Func.func023();
        }
        Gvar.var_747 = 1;
        Gvar.var_389 = 1;
        if (Gvar.var_83[Gvar.var_673].Var0 == 7) {
            Gvar.var_2815 = 5;
            Gvar.var_2816 = "ｶﾞｿﾘﾝの弾丸";
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 15) {
            Gvar.var_2815 = 15;
            Gvar.var_2816 = "氷のﾐｻｲﾙ";
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 21) {
            Gvar.var_2815 = 20;
            Gvar.var_2816 = "空気弾";
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 45) {
            Gvar.var_2815 = 6;
            Gvar.var_2816 = "由花子の髪の毛";
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 158) {
            Gvar.var_2815 = 6;
            Gvar.var_2816 = "由花子の髪の毛";
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 48) {
            Gvar.var_2815 = 15;
            Gvar.var_2816 = "ｴｱﾛｽﾐｽの機銃";
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 32) {
            Gvar.var_2815 = 20;
            Gvar.var_2816 = "爆弾の100G";
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 40) {
            Gvar.var_2815 = 3;
            Gvar.var_2816 = "ﾊﾞｯﾄﾞｶﾝﾊﾟﾆｰの弾丸";
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 41) {
            Gvar.var_2815 = 10;
            Gvar.var_2816 = "戦車の砲弾";
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 42) {
            Gvar.var_2815 = 7;
            Gvar.var_2816 = "ｱﾊﾟｯﾁのﾐｻｲﾙ";
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 56) {
            Gvar.var_2815 = 15;
            Gvar.var_2816 = "ｼｭﾄﾛﾊｲﾑのﾏｼﾝｶﾞﾝ";
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 93) {
            Gvar.var_2815 = 2;
            Gvar.var_2816 = "幽霊の弾丸";
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 95) {
            Gvar.var_2815 = 15;
            Gvar.var_2816 = "空烈眼刺驚";
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 121 || Gvar.var_83[Gvar.var_673].Var0 == 126) {
            Gvar.var_2815 = 30;
            Gvar.var_2816 = "ｴﾒﾗﾙﾄﾞｽﾌﾟﾗｯｼｭ";
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 151) {
            Gvar.var_2815 = 14;
            Gvar.var_2816 = "ﾗｯﾄの針";
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 172) {
            Gvar.var_2815 = 14;
            Gvar.var_2816 = "ﾗｯﾄの針";
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 132) { // No = 132 レクイエムジョルノ
            Gvar.var_2815 = 40;
            Gvar.var_2816 = "サソリ";
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 141) {
            Gvar.var_2815 = 20;
            Gvar.var_2816 = "F・F弾";
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 155) {
            Gvar.var_2815 = 20;
            Gvar.var_2816 = "ﾎﾞﾙﾄやﾅｯﾄ";
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 136) {
            Gvar.var_2815 = 20;
            Gvar.var_2816 = "ｼｬﾎﾞﾝﾗﾝﾁｬｰ";
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 113) {
            Gvar.var_2815 = 20;
            Gvar.var_2816 = "上院議員";
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 106 || Gvar.var_83[Gvar.var_673].Var0 == 107) {
            Gvar.var_2815 = 10;
            Gvar.var_2816 = "釣り針";
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 76) {
            Gvar.var_2815 = 20;
            Gvar.var_2816 = "「バグォ」の文字";
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 175) {
            Gvar.var_2815 = 20;
            Gvar.var_2816 = "ﾁｬｶの透過攻撃";
        }
        Gvar.var_674 = Gvar.var_83[Gvar.var_673].Var0;
        await Music.func096();
        Gvar.enemy_list = Gvar.var_83[Gvar.var_673].Var0;
        await Func.func626(); // 敵リスト
        if (Gvar.var_83[Gvar.var_673].Var39 >= 2) {
            Gvar.enemy_power = Math.floor(Gvar.enemy_power * (Gvar.var_83[Gvar.var_673].Var39 * 2 + 10) / 10);
        }
        if (Gvar.var_83[Gvar.var_673].Var25 >= 1 && Gvar.var_83[Gvar.var_673].Var25 <= 50) {
            Gvar.enemy_power = Gvar.enemy_power + Gvar.var_83[Gvar.var_673].Var25;
        }
        if (Gvar.var_83[Gvar.var_673].Var25 >= 51 && Gvar.var_83[Gvar.var_673].Var25 < 99) {
            Gvar.enemy_power = Gvar.enemy_power - (Gvar.var_83[Gvar.var_673].Var25 - 50);
            if (Gvar.enemy_power <= 1) {
                Gvar.enemy_power = 1;
            }
        }
        Gvar.var_949 = Math.floor(Gvar.enemy_power * (Gvar.enemy_power + Gvar.enemy_power - 8) / 16) + Gvar.enemy_power;
        for (let cnt1 = 0; cnt1 < Gvar.var_581; ++cnt1) {
            Gvar.var_949 = Math.floor(Gvar.var_949 * 15 / 16);
        }
        Gvar.var_2817 = Adap.rnd(33);
        Gvar.var_2817 = Gvar.var_2817 + 111;
        Gvar.var_209 = Math.floor(Gvar.var_949 * Gvar.var_2817 / 128);
        if (Gvar.var_83[Gvar.var_673].Var0 == 155) {
            Gvar.var_209 = Gvar.var_209 * (Gvar.var_140 + 1);
        }
        if (Gvar.var_113 == 1) {
            Gvar.var_209 = Math.floor(Gvar.var_209 * 2 / 3);
        }
        if (Gvar.var_128 >= 1) {
            Gvar.var_209 = Math.floor(Gvar.var_209 * 3 / 2);
        }
        if (Gvar.equip_disc[205] == 1) {
            Gvar.var_209 = Math.floor(Gvar.var_209 * 2 / 3);
        }
        // アイテム「鉄球」を使用して射撃攻撃ダメージがアップしている場合
        if (Gvar.var_168 == 1) {
            Gvar.var_209 = Math.floor(Gvar.var_209 * 2 / 3);
        }
        if (Gvar.var_209 <= 1) {
            Gvar.var_209 = 1;
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 21 && Gvar.var_2804 == 1) {
            await Func.func701();
            Gvar.var_209 = Gvar.var_2818;
            Gvar.var_2804 = 0;
            return;
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 32) {
            Gvar.var_1389 = Gvar.var_66;
            Gvar.var_1390 = Gvar.var_67;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1388 = 1;
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1388++;
            }
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_1388 = 0;
        }
        if (Gvar.var_2804 == 0) {
            Gvar.var_211 = Gvar.var_211 - Gvar.var_209;
            Gvar.var_208 = Gvar.var_208 + Gvar.var_209;
            // 射撃による攻撃で死んだ時の死因リストの処理
            if (Gvar.var_211 <= 0) {
                Gvar.var_211 = 0;
                if (Gvar.var_83[Gvar.var_673].Var0 == 7) {
                    Gvar.var_356 = 205;
                }
                if (Gvar.var_83[Gvar.var_673].Var0 == 15) {
                    Gvar.var_356 = 206;
                }
                if (Gvar.var_83[Gvar.var_673].Var0 == 21) {
                    Gvar.var_356 = 211;
                }
                if (Gvar.var_83[Gvar.var_673].Var0 == 48) {
                    Gvar.var_356 = 216;
                }
                if (Gvar.var_83[Gvar.var_673].Var0 == 32) {
                    Gvar.var_356 = 217;
                }
                if (Gvar.var_83[Gvar.var_673].Var0 == 40) {
                    Gvar.var_356 = 218;
                }
                if (Gvar.var_83[Gvar.var_673].Var0 == 41) {
                    Gvar.var_356 = 219;
                }
                if (Gvar.var_83[Gvar.var_673].Var0 == 42) {
                    Gvar.var_356 = 220;
                }
                if (Gvar.var_83[Gvar.var_673].Var0 == 56) {
                    Gvar.var_356 = 221;
                }
                if (Gvar.var_83[Gvar.var_673].Var0 == 93) {
                    Gvar.var_356 = 227;
                }
                if (Gvar.var_83[Gvar.var_673].Var0 == 95) {
                    Gvar.var_356 = 228;
                }
                if (Gvar.var_83[Gvar.var_673].Var0 == 121) {
                    Gvar.var_356 = 239;
                }
                if (Gvar.var_83[Gvar.var_673].Var0 == 126) {
                    Gvar.var_356 = 274;
                }
                if (Gvar.var_83[Gvar.var_673].Var0 == 151) {
                    Gvar.var_356 = 242;
                }
                if (Gvar.var_83[Gvar.var_673].Var0 == 172) {
                    Gvar.var_356 = 286;
                }
                if (Gvar.var_83[Gvar.var_673].Var0 == 132) { // No = 132 レクイエムジョルノ
                    Gvar.var_356 = 243;
                }
                if (Gvar.var_83[Gvar.var_673].Var0 == 141) {
                    Gvar.var_356 = 244;
                }
                if (Gvar.var_83[Gvar.var_673].Var0 == 155) {
                    Gvar.var_356 = 254;
                }
                if (Gvar.var_83[Gvar.var_673].Var0 == 136) {
                    Gvar.var_356 = 264;
                }
                if (Gvar.var_83[Gvar.var_673].Var0 == 113) {
                    Gvar.var_356 = 265;
                }
                if (Gvar.var_83[Gvar.var_673].Var0 == 106) {
                    Gvar.var_356 = 265;
                }
                if (Gvar.var_83[Gvar.var_673].Var0 == 107) {
                    Gvar.var_356 = 266;
                }
                if (Gvar.var_83[Gvar.var_673].Var0 == 76) {
                    Gvar.var_356 = 278;
                }
                if (Gvar.var_83[Gvar.var_673].Var0 == 175) {
                    Gvar.var_356 = 287;
                }
            }
        }
        await Func.setMessage(tf("{0} を喰らった！", Gvar.var_2816), tf("{0}のダメージをうけた。", Gvar.var_209), 8, false, false, false);
        if (Gvar.var_83[Gvar.var_673].Var0 == 136 && Gvar.var_211 >= 1) {
            Gvar.var_1073 = Adap.rnd(4);
            if (Gvar.var_1073 == 0 && Gvar.var_178 == 0 && Gvar.nouryoku_disc_id != 116 && Gvar.var_125 == 0) {
                Adap.DSPLAY(120);
                Gvar.var_178 = 1;
                await Func.setMessage("ビリっときたあああああ！！", "", 8, true, false, false);
            }
        }
        await Func.AutoDraw(9);
        if (Gvar.var_83[Gvar.var_673].Var0 == 151 && Gvar.var_211 >= 1) {
            await Enemy.func587();
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 172 && Gvar.var_211 >= 1) {
            await Enemy.func587();
        }
        Gvar.var_389 = 0;
        Gvar.var_240 = 0;
        return;
}

export {func585}
