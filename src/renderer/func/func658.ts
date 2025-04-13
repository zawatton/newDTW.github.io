import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'
import * as Enemy from '../enemy/index'

 // 敵が攻撃を受けた時の動作処理
async function func658(this: any) {
        Adap.dbgprt(658);
        if (Gvar.var_83[Gvar.var_314].Var12 != 0 || Gvar.var_83[Gvar.var_314].Var13 != 0 || Gvar.var_83[Gvar.var_314].Var17 != 0) {
            return;
        }
        if (Gvar.var_83[Gvar.var_314].Var0 != 133 && Gvar.var_83[Gvar.var_314].Var0 != 118 && Gvar.var_83[Gvar.var_314].Var0 != 9 && Gvar.var_83[Gvar.var_314].Var0 != 10 && Gvar.var_83[Gvar.var_314].Var0 != 139 && Gvar.var_83[Gvar.var_314].Var0 != 153 && Gvar.var_83[Gvar.var_314].Var0 != 61) {
            for (let cnt2 = 0; cnt2 < 4; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
            }
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 137) {
            Gvar.var_3042 = Gvar.var_314;
            if (Gvar.var_83[Gvar.var_314].Var3 > 10) {
                return;
            }
            await Func.setMessage("吉良「限界だッ！  押すねッ！」", "", 8, true, false, true);
            await Func.setMessage("吉良『今だッ』！", "", 8, true, false, true);
            if (Gvar.var_83[Gvar.var_3042].Var14 != 0) {
                Gvar.var_83[Gvar.var_3042].Var8 = 1;
                await Func.AutoDraw(5);
                Adap.DSPLAY(162);
                for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                    Gvar.var_585 = 3;
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_585 = 0;
                    await Func.func337(); // メッセージ表示処理(自動)
                }
                await Func.setMessage("「Ｓ・Ｈ・Ｉ・Ｔ！」", "", 7, true, false, true);
                await Func.setMessage("吉良のバイツァダストを防いだ！", "", 7, true, false, false);
                await Func.setMessage("吉良「…………な………", "このクソカスどもがァ――ッ！！」", 8, true, false, true);
                if (Gvar.nouryoku_disc_id == 111 || Gvar.nouryoku_disc_id == 398) {
                    Gvar.var_114 = 0;
                    Gvar.var_463 = 0;
                    Gvar.var_464 = 0;
                    Gvar.var_461 = 0;
                    Gvar.var_462 = 0;
                    Gvar.time_paused_count = 0;
                    Gvar.var_152 = 0;
                    Gvar.time_paused = 1; // 時止め(時消し飛ばし)状態フラグON
                    Gvar.var_164 = 1;
                    Adap.DSPLAY(185);
                    Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
                    Gvar.var_1493 = 1;
                    for (let cnt4 = 0; cnt4 < 20; ++cnt4) {
                        await Func.func337(); // メッセージ表示処理(自動)
                        Gvar.var_1493++;
                    }
                    Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
                    Gvar.var_1493 = 0;
                    if (Gvar.nouryoku_disc_id == 111) {
                        await Func.setMessage("『ザ・ワールド』！", "", 12, true, false, false);
                    }
                    if (Gvar.nouryoku_disc_id == 398) {
                        await Func.setMessage("『ｽﾀｰﾌﾟﾗﾁﾅ･ｻﾞ･ﾜｰﾙﾄﾞ』！", "", 12, true, false, false);
                    }
                    await Func.AutoDraw(2);
                    await Func.setMessage("ﾃﾞｨｱﾎﾞﾛ「そしてやれやれ", "          間に合ったぜ……」", 12, true, false, false);
                    await Func.AutoDraw(2);
                    Gvar.var_153 = 2;
                }
                Gvar.var_83[Gvar.var_3042].Var8 = 0;
                return;
            }
            Adap.DSPLAY(165);
            await Func.AutoDraw(5);
            Gvar.var_3043 = 0;
            if (Gvar.var_201 == Gvar.var_83[Gvar.var_3042].Var10 && Gvar.var_201 != 14) {
                Gvar.var_3043 = 1;
            }
            Gvar.var_3044 = Gvar.var_66;
            Gvar.var_3045 = Gvar.var_67;
            Gvar.var_3046 = Gvar.var_3044 - 1;
            if (Gvar.var_3046 < 0) {
                Gvar.var_3046 = 0;
            }
            Gvar.var_3047 = Gvar.var_3044 + 1;
            if (Gvar.var_3047 > Gvar.var_31 + 2) {
                Gvar.var_3047 = Gvar.var_31;
            }
            Gvar.var_3048 = Gvar.var_3045 + 1;
            if (Gvar.var_3048 > Gvar.var_34 + 2) {
                Gvar.var_3048 = Gvar.var_34;
            }
            Gvar.var_3049 = Gvar.var_3045 - 1;
            if (Gvar.var_3049 < 0) {
                Gvar.var_3049 = 0;
            }
            if (Gvar.var_83[Gvar.var_3042].Var1 >= Gvar.var_3046 && Gvar.var_83[Gvar.var_3042].Var1 <= Gvar.var_3047 && Gvar.var_83[Gvar.var_3042].Var2 >= Gvar.var_3049 && Gvar.var_83[Gvar.var_3042].Var2 <= Gvar.var_3048) {
                Gvar.var_3043 = 1;
            }
            Adap.DSPLAY(180);
            Gvar.var_1389 = Gvar.var_83[Gvar.var_3042].Var1;
            Gvar.var_1390 = Gvar.var_83[Gvar.var_3042].Var2;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1388 = 1;
            if (Gvar.var_3043 == 1) {
                Gvar.var_389 = 2;
            }
            for (let cnt2 = 0; cnt2 < 3; ++cnt2) {
                Gvar.var_585 = 3;
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_585 = 0;
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1388++;
            }
            for (let cnt2 = 0; cnt2 < 7; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_198 = 1; // メッセージウィンドウ開く
                Gvar.var_300 = 0;
                Gvar.var_1388++;
            }
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_198 = 1; // メッセージウィンドウ開く
                Gvar.var_300 = 0;
                Gvar.var_1388++;
            }
            Gvar.var_389 = 0;
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_1388 = 0;
            if (Gvar.var_3043 == 1) {
                Gvar.var_177 = 8;
            }
            Gvar.var_3043 = 0;
            Adap.gsel(19);
            Adap.color(255, 255, 255);
            Adap.boxf(0, 0, 680, 680);
            Adap.gsel(0);
            Gvar.var_311 = 255;
            Gvar.var_312 = 1;
            Gvar.var_83[Gvar.var_3042].Var8 = 0;
            Gvar.var_2965 = 1;
            await Func.func669();
            Gvar.var_83[Gvar.var_3042].Var39 = Gvar.var_83[Gvar.var_3042].Var39 + 1;
            if (Gvar.var_83[Gvar.var_3042].Var39 == 1) {
                Gvar.var_83[Gvar.var_3042].Var39 = 2;
            }
            Gvar.enemy_list = 137;
            await Func.func626(); // 敵リスト
            Gvar.var_83[Gvar.var_3042].Var3 = Math.floor(Gvar.enemy_hp * (Gvar.var_83[Gvar.var_3042].Var39 + 10) / 10);
            if (Gvar.var_83[Gvar.var_3042].Var3 >= 999) {
                Gvar.var_83[Gvar.var_3042].Var3 = 999;
            }
            for (let cnt2 = 0; cnt2 < 51; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_311 = Gvar.var_311 - 5;
            }
            Gvar.var_312 = 0;
            await Func.setMessage("「フ…フハ…  フハハハハハハハハハ", "    戻ったぞ…」", 8, true, false, false);
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 143) {
            Gvar.var_3042 = Gvar.var_314;
            Gvar.var_83[Gvar.var_3042].Var8 = 0;
            Gvar.var_1912 = Gvar.var_673;
            Gvar.var_673 = Gvar.var_314;
            await Enemy.func595();
            Gvar.var_673 = Gvar.var_1912;
            return;
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 153) {
            Gvar.var_3042 = Gvar.var_314;
            Gvar.var_83[Gvar.var_3042].Var8 = 1;
            await Func.setMessage("「いっしょに行こうよォ～～ッ」", "", 8, true, false, true);
            Gvar.var_1396 = Gvar.var_66;
            Gvar.var_1397 = Gvar.var_67;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1551 = 1;
            for (let cnt2 = 0; cnt2 < 16; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1551++;
            }
            Gvar.var_1551 = 0;
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_389 = 2;
            Gvar.var_747 = 1;
            Adap.DSPLAY(105);
            Gvar.var_1212 = 1;
            Gvar.var_2244 = Gvar.var_209;
            Gvar.var_211 = Gvar.var_211 - Gvar.var_2244;
            Gvar.var_208 = Gvar.var_208 + Gvar.var_2244;
            if (Gvar.var_211 <= 0) {
                Gvar.var_211 = 0;
                Gvar.var_356 = 253;
            }
            await Func.setMessage("" + Gvar.var_2244 + "のﾀﾞﾒｰｼﾞを喰らった", "", 8, false, false, false);
            await Func.AutoDraw(5);
            Gvar.var_389 = 0;
            Gvar.var_83[Gvar.var_3042].Var8 = 0;
            return;
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 61) { // No = 61 ヨーヨーマッ
            await Func.setMessage("うぉうッ！  臭いがッ！", "", 8, true, false, false);
            await Func.AutoDraw(15);
            Gvar.var_389 = 2;
            Adap.DSPLAY(105);
            Gvar.var_747 = 1;
            Gvar.var_1212 = 1;
            Gvar.var_2244 = Gvar.var_209;
            Gvar.var_211 = Gvar.var_211 - Gvar.var_2244;
            Gvar.var_208 = Gvar.var_208 + Gvar.var_2244;
            if (Gvar.var_211 <= 0) {
                Gvar.var_211 = 0;
                Gvar.var_356 = 252;
            }
            await Func.setMessage("" + Gvar.var_2244 + "のﾀﾞﾒｰｼﾞを喰らった", "", 8, false, false, false);
            await Func.AutoDraw(5);
            Gvar.var_389 = 0;
            Gvar.var_83[Gvar.var_314].Var8 = 0;
            return;
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 84 && Gvar.var_83[Gvar.var_314].Var3 <= 20) {
            Gvar.var_83[Gvar.var_314].Var8 = 0;
            Gvar.var_83[Gvar.var_314].Var0 = 117;
            Gvar.var_83[Gvar.var_314].Var15 = 1;
            Gvar.var_1584 = (Gvar.var_83[Gvar.var_314].Var1 - Gvar.var_66 + 4) * 40;
            Gvar.var_1585 = (Gvar.var_83[Gvar.var_314].Var2 - Gvar.var_67 + 4) * 40;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1583 = 1;
            Adap.DSPLAY(168);
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1583++;
            }
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_1583 = 0;
            await Func.setMessage("キィイイイイイイ", "    コエエエエエエ  エエエエエエエエ", 8, false, false, true);
            await Func.AutoDraw(10);
            return;
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 9 || Gvar.var_83[Gvar.var_314].Var0 == 10) {
            Gvar.var_1073 = Adap.rnd(4);
            if (Gvar.var_1073 != 0 || Gvar.var_136 != 0 || Gvar.var_135 != 0 || Gvar.var_134 != 0) {
                return;
            }
            if (Gvar.equip_disc[201] == 0 && Gvar.var_83[Gvar.var_314].Var0 == 9) {
                Gvar.var_136 = 1;
        
                Adap.DSPLAY(123);
            }
            if (Gvar.equip_disc[201] == 0 && Gvar.var_83[Gvar.var_314].Var0 == 10) {
                Gvar.var_135 = 1;
        
                Adap.DSPLAY(123);
            }
            await Func.AutoDraw(10);
            if (Gvar.equip_disc[201] == 0) {
                await Func.setMessage("肉片がくっついた！", "", 8, false, false, false);
            }
            if (Gvar.equip_disc[201] == 1) {
                await Func.setMessage("肉片がくっつきそうになったが", "装備DISCによって防いだ", 7, false, false, false);
            }
            await Func.AutoDraw(10);
            return;
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 86) {
            Gvar.var_1073 = Adap.rnd(4);
            if (Gvar.var_1073 != 0 || Gvar.var_137 != 0) {
                return;
            }
            if (Gvar.equip_disc[201] == 0) {
                Gvar.var_137 = 1;
        
                Adap.DSPLAY(123);
            }
            await Func.AutoDraw(10);
            if (Gvar.equip_disc[201] == 0) {
                await Func.setMessage("「憎き肉片」がくっついた！", "", 8, false, false, false);
            }
            if (Gvar.equip_disc[201] == 1) {
                await Func.setMessage("「憎き肉片」がくっつきそうになったが", "装備DISCによって防いだ", 7, false, false, false);
            }
            await Func.AutoDraw(10);
            return;
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 139) {
            Gvar.var_1073 = Adap.rnd(4);
            if (Gvar.var_1073 != 0 || Gvar.var_178 != 0) {
                return;
            }
            if (Gvar.nouryoku_disc_id != 116 && Gvar.var_125 == 0) {
                Gvar.var_178 = 1;
        
                Adap.DSPLAY(120);
            }
            await Func.AutoDraw(10);
            if (Gvar.nouryoku_disc_id != 116 && Gvar.var_125 == 0) {
                await Func.setMessage("オーノーだズラ！", "波紋を流されちまったズラ！", 8, false, false, false);
            }
            if (Gvar.nouryoku_disc_id == 116 || Gvar.var_125 >= 1) {
                await Func.setMessage("波紋でやられそうになったが、", "波紋に強くなっていて平気だった。", 7, false, false, false);
            }
            await Func.AutoDraw(10);
            return;
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 138) {
            Gvar.var_1073 = Adap.rnd(5);
            if (Gvar.var_1073 != 0) {
                return;
            }
            Gvar.var_128 = 1;
            Adap.DSPLAY(126);
            await Func.AutoDraw(10);
            if (Gvar.nouryoku_disc_id != 109 && Gvar.shageki_disc_id != 404 && Gvar.nouryoku_disc_id != 202 && Gvar.var_173 == 0) {
                Gvar.var_1073 = Adap.rnd(3);
                if (Gvar.var_1073 == 0) {
                    await Func.setMessage("チェックが甘かったな…！", "", 8, false, false, false);
                }
                if (Gvar.var_1073 == 1) {
                    await Func.setMessage("お前はこのディオにとっての", "モンキーなんだよ――――ッ！！", 8, false, false, false);
                }
                if (Gvar.var_1073 == 2) {
                    await Func.setMessage("無駄  無駄  無駄―――っ！！", "", 8, false, false, false);
                }
            }
            if (Gvar.nouryoku_disc_id == 109 || Gvar.shageki_disc_id == 404 || Gvar.nouryoku_disc_id == 202) {
                await Func.setMessage("凍らされそうになったが、", "装備ｽﾀﾝﾄﾞのおかげで平気だった", 7, false, false, false);
                Gvar.var_128 = 0;
            }
            if (Gvar.var_173 == 1) {
                await Func.setMessage("凍らされそうになったが、", "冷たいのに強くなってて平気だった", 7, false, false, false);
                Gvar.var_128 = 0;
            }
            await Func.AutoDraw(10);
            return;
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 109 && Gvar.var_83[Gvar.var_314].Var30 != 0) {
            Gvar.var_3050 = Adap.rnd(3);
            if (Gvar.var_3050 != 0) {
                return;
            }
            await Func.setMessage("ﾜﾑｳの透明化が解除された。", "", 8, false, false, false);
            Gvar.var_83[Gvar.var_314].Var30 = 0;
            await Func.AutoDraw(5);
            return;
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 109 && Gvar.var_83[Gvar.var_314].Var29 == 0 && Gvar.var_83[Gvar.var_314].Var30 == 0) {
            if (Gvar.var_83[Gvar.var_314].Var3 > 10) {
                return;
            }
            if (Gvar.var_83[Gvar.var_314].Var23 != 0) {
                return;
            }
            Gvar.var_83[Gvar.var_314].Var8 = 1;
            await Func.setMessage("ﾜﾑｳ「ブツ  ブツ  ブツ", "        ブツ  ブツ  ブツ」", 8, true, false, false);
            Gvar.var_83[Gvar.var_314].Var21 = 1;
            Gvar.var_83[Gvar.var_314].Var8 = 0;
            Gvar.var_411 = 1;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_198 = 1; // メッセージウィンドウ開く
                Gvar.var_300 = 0;
            }
    
            Adap.DSPLAY(235);
            Gvar.var_411 = 2;
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_198 = 1; // メッセージウィンドウ開く
                Gvar.var_300 = 0;
            }
            Gvar.var_411 = 3;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_198 = 1; // メッセージウィンドウ開く
                Gvar.var_300 = 0;
            }
            Gvar.var_411 = 0;
            Gvar.var_83[Gvar.var_314].Var21 = 0;
            Gvar.var_83[Gvar.var_314].Var23 = 1;
            Gvar.var_83[Gvar.var_314].Var29 = 1;
            await Func.setMessage("ﾜﾑｳ「なまじ目が見えたから", "    ヤツに虚をつかれた！」", 8, true, false, false);
            Adap.DSPLAY(142); // レベルアップした時の効果音
            Gvar.var_83[Gvar.var_314].Var39 = Gvar.var_83[Gvar.var_314].Var39 + 2;
            if (Gvar.var_83[Gvar.var_314].Var39 == 2) {
                Gvar.var_83[Gvar.var_314].Var39 = 3;
            }
            Gvar.enemy_list = Gvar.var_83[Gvar.var_314].Var0; // Gvar.var_83[Gvar.var_314].Var0 は enemy list
            await Func.func626(); // 敵リスト
            Gvar.var_83[Gvar.var_314].Var3 = Math.floor(Gvar.enemy_hp * (Gvar.var_83[Gvar.var_314].Var39 + 10) / 10);
            if (Gvar.var_83[Gvar.var_314].Var3 >= 999) {
                Gvar.var_83[Gvar.var_314].Var3 = 999;
            }
            await Func.setMessage("ﾜﾑｳはレベルが上がった！", "", 8, false, false, false);
            await Func.AutoDraw(10);
            return;
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 6) {
            if (Gvar.var_83[Gvar.var_314].Var25 >= 50) {
                Gvar.var_83[Gvar.var_314].Var25 -= 1;
                if (Gvar.var_83[Gvar.var_314].Var25 < 50) {
                    Gvar.var_83[Gvar.var_314].Var25 = 0;
                }
            }
            if (Gvar.var_83[Gvar.var_314].Var25 < 50) {
                Gvar.var_83[Gvar.var_314].Var25 += 1;
                if (Gvar.var_83[Gvar.var_314].Var25 >= 50) {
                    Gvar.var_83[Gvar.var_314].Var25 = 49;
                }
            }
            Adap.DSPLAY(182);
            await Func.setMessage("恨みのパワーで", "ｴﾎﾞﾆｰﾃﾞﾋﾞﾙの攻撃力が上がった！", 8, false, false, false);
            Gvar.var_83[Gvar.var_314].Var21 = 1;
            for (let cnt2 = 0; cnt2 < 4; ++cnt2) {
                Gvar.var_411 = 1;
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_411 = 2;
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_411 = 3;
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_411 = 4;
                await Func.func337(); // メッセージ表示処理(自動)
            }
            Gvar.var_411 = 0;
            Gvar.var_83[Gvar.var_314].Var21 = 0;
            return;
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 44 && Gvar.var_83[Gvar.var_314].Var10 != 13) {
            if (Gvar.var_83[Gvar.var_314].Var25 >= 50) {
                Gvar.var_83[Gvar.var_314].Var25 -= 2;
                if (Gvar.var_83[Gvar.var_314].Var25 < 50) {
                    Gvar.var_83[Gvar.var_314].Var25 = 0;
                }
            }
            if (Gvar.var_83[Gvar.var_314].Var25 < 50) {
                Gvar.var_83[Gvar.var_314].Var25 += 2;
                if (Gvar.var_83[Gvar.var_314].Var25 >= 50) {
                    Gvar.var_83[Gvar.var_314].Var25 = 49;
                }
            }
            await Func.setMessage("ﾚｯﾄﾞﾎｯﾄﾁﾘﾍﾟｯﾊﾟｰは反省している…", "電力を集中させ 攻撃力が上がった！", 8, false, false, false);
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1387 = 1;
            Adap.DSPLAY(120);
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1387 = Gvar.var_1387 + 1;
            }
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_1387 = 0;
            return;
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 14) {
            Gvar.var_83[Gvar.var_314].Var21 = 1;
            Gvar.var_411 = 1;
            if (Gvar.var_83[Gvar.var_314].Var25 >= 50) {
                Gvar.var_83[Gvar.var_314].Var25 -= 2;
                if (Gvar.var_83[Gvar.var_314].Var25 < 50) {
                    Gvar.var_83[Gvar.var_314].Var25 = 0;
                }
            }
            if (Gvar.var_83[Gvar.var_314].Var25 < 50) {
                Gvar.var_83[Gvar.var_314].Var25 += 2;
                if (Gvar.var_83[Gvar.var_314].Var25 >= 50) {
                    Gvar.var_83[Gvar.var_314].Var25 = 49;
                }
            }
            await Func.AutoDraw(5);
            Adap.DSPLAY(112);  // 刀の切れる音 or 強化した時のシャキーン 効果音
            Gvar.var_411 = 2;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_411 = 3;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_411 = 4;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_411 = 3;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_411 = 2;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_411 = 1;
            await Func.setMessage("「今ので覚えたぞ・・・！」", "床屋のｶｰﾝの攻撃力が上がった！", 8, false, false, true);
            await Func.AutoDraw(10);
            Gvar.var_83[Gvar.var_314].Var21 = 0;
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 129) {
            Gvar.var_83[Gvar.var_314].Var21 = 1;
            Gvar.var_411 = 1;
            if (Gvar.var_83[Gvar.var_314].Var25 >= 50) {
                Gvar.var_83[Gvar.var_314].Var25 -= 4;
                if (Gvar.var_83[Gvar.var_314].Var25 < 50) {
                    Gvar.var_83[Gvar.var_314].Var25 = 0;
                }
            }
            if (Gvar.var_83[Gvar.var_314].Var25 < 50) {
                Gvar.var_83[Gvar.var_314].Var25 += 4;
                if (Gvar.var_83[Gvar.var_314].Var25 >= 50) {
                    Gvar.var_83[Gvar.var_314].Var25 = 49;
                }
            }
            await Func.AutoDraw(5);
    
            Adap.DSPLAY(112);  // 刀の切れる音 or 強化した時のシャキーン 効果音
            Gvar.var_411 = 2;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_411 = 3;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_411 = 4;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_411 = 3;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_411 = 2;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_411 = 1;
            await Func.setMessage("「今ので覚えたぞ・・・！」", "ｱﾇﾋﾞｽﾎﾟﾙﾅﾚﾌの攻撃力が上がった！", 8, false, false, true);
            await Func.AutoDraw(10);
            Gvar.var_83[Gvar.var_314].Var21 = 0;
        }
        // Gvar.enemy_list == 120 承太郎
        if (Gvar.var_83[Gvar.var_314].Var0 == 120) {
            if (Gvar.var_83[Gvar.var_314].Var25 >= 50) {
                Gvar.var_83[Gvar.var_314].Var25 -= 5;
                if (Gvar.var_83[Gvar.var_314].Var25 < 50) {
                    Gvar.var_83[Gvar.var_314].Var25 = 0;
                }
            }
            if (Gvar.var_83[Gvar.var_314].Var25 < 50) {
                Gvar.var_83[Gvar.var_314].Var25 += 5;
                if (Gvar.var_83[Gvar.var_314].Var25 >= 50) {
                    Gvar.var_83[Gvar.var_314].Var25 = 49;
                }
            }
            await Func.setMessage("承太郎は何かメモをしている…", "「忘れっぽいんでな…」", 8, false, false, true);
            await Func.AutoDraw(10);
            Adap.DSPLAY(182);
            await Func.setMessage("承太郎の攻撃力が上がった！", "", 8, false, false, false);
            await Func.AutoDraw(10);
            return;
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 161) {
            await Func.setMessage("      バルバルバルバルバルバル", "", 8, true, false, false);
            await Func.AutoDraw(10);
            Gvar.var_83[Gvar.var_314].Var8 = 0;
            await Func.setMessage("「これがッ！」", "", 8, false, false, false);
            Gvar.var_83[Gvar.var_314].Var21 = 1;
            Gvar.var_411 = 1;
            await Func.AutoDraw(1);
            Gvar.var_411 = 2;
            await Func.func337(); // メッセージ表示処理(自動)
            for (let cnt2 = 0; cnt2 < 7; ++cnt2) {
                Gvar.var_411 = 2;
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_411 = 3;
                await Func.func337(); // メッセージ表示処理(自動)
            }
            await Func.setMessage("「これがッ！」    「これがッ！」", "", 8, false, false, false);
            Gvar.var_411 = 4;
            await Func.AutoDraw(2);
            Gvar.var_411 = 5;
            await Func.AutoDraw(2);
            Gvar.var_411 = 6;
            await Func.AutoDraw(2);
            Gvar.var_411 = 7;
            await Func.AutoDraw(2);
            Gvar.var_83[Gvar.var_314].Var0 = 162;
            Gvar.var_411 = 1;
            await Func.AutoDraw(2);
            Gvar.var_411 = 2;
            await Func.AutoDraw(10);
            Gvar.var_411 = 3;
            await Func.AutoDraw(4);
            Gvar.var_411 = 4;
            await Func.AutoDraw(2);
            Gvar.var_411 = 5;
            await Func.AutoDraw(2);
            await Func.setMessage("「これがッ！」    「これがッ！」", "「これが【バオー】だッ！」", 8, false, false, false);
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                Gvar.var_411 = 7;
                await Func.AutoDraw(2);
                Gvar.var_411 = 6;
                await Func.AutoDraw(2);
            }
            Gvar.var_411 = 0;
            Gvar.var_83[Gvar.var_314].Var21 = 0;
            await Func.setMessage("ウオオオオオオオオオ――――ム！", "", 8, false, false, false);
            await Func.AutoDraw(15);
            return;
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 118) {
            Gvar.var_3051 = Adap.rnd(5);
            if (Gvar.var_3051 != 0) {
                return;
            }
            Gvar.var_3052 = Gvar.var_83[Gvar.var_314].Var1;
            Gvar.var_3053 = Gvar.var_83[Gvar.var_314].Var2;
            if (Gvar.var_71[Gvar.var_3052][Gvar.var_3053] == 13) {
                return;
            }
            await Func.AutoDraw(10);
            Gvar.var_83[Gvar.var_314].Var8 = 0;
            await Func.setMessage("「このド畜生がッ！！」", "", 8, false, false, true);
            Gvar.var_83[Gvar.var_314].Var30 = 0;
            Gvar.var_83[Gvar.var_314].Var21 = 1;
            Gvar.var_411 = 1;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_411 = 2;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_83[Gvar.var_314].Var0 = 133;
            Gvar.var_83[Gvar.var_314].Var31 = 2;
            Gvar.var_83[Gvar.var_314].Var23 = 0;
            Gvar.var_411 = 8;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_411 = 7;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_411 = 6;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_411 = 5;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_411 = 4;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_411 = 3;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_411 = 2;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_411 = 1;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_411 = 0;
            Gvar.var_83[Gvar.var_314].Var21 = 0;
            await Func.AutoDraw(10);
            return;
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 133) {
            Gvar.var_3051 = Adap.rnd(3);
            if (Gvar.var_3051 == 0) {
                return;
            }
            await Func.AutoDraw(10);
            Gvar.var_83[Gvar.var_314].Var8 = 0;
            Gvar.var_83[Gvar.var_314].Var21 = 1;
            Gvar.var_411 = 1;
            await Func.setMessage("「暗黒空間にバラ撒いてやるッ！」", "", 8, false, false, true);
            await Func.AutoDraw(5);
            Gvar.var_411 = 2;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_411 = 3;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_411 = 4;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_411 = 5;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_411 = 6;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_411 = 7;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_411 = 8;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_411 = 0;
            Gvar.var_83[Gvar.var_314].Var21 = 0;
            Gvar.var_83[Gvar.var_314].Var0 = 118;
            Gvar.var_83[Gvar.var_314].Var31 = 3;
            Gvar.var_83[Gvar.var_314].Var23 = 1;
            Gvar.var_83[Gvar.var_314].Var21 = 1;
            Gvar.var_411 = 2;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_411 = 1;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_411 = 0;
            Gvar.var_83[Gvar.var_314].Var21 = 0;
            Gvar.var_83[Gvar.var_314].Var30 = 1;
            return;
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 121) {
            await Func.AutoDraw(10);
            Gvar.var_83[Gvar.var_314].Var8 = 0;
            Gvar.var_3054 = Gvar.var_83[Gvar.var_314].Var5;
            Gvar.var_83[Gvar.var_314].Var5 = 2;
            await Func.setMessage("「これがおれの本体のハンサム顔だ！」", "", 8, false, false, true);
            Gvar.var_83[Gvar.var_314].Var0 = 9;
            Gvar.var_1378 = (Gvar.var_83[Gvar.var_314].Var1 - Gvar.var_66 + 4) * 40;
            Gvar.var_1379 = (Gvar.var_83[Gvar.var_314].Var2 - Gvar.var_67 + 4) * 40 - 10;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1377 = 1;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1377++;
            }
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_1377 = 0;
            await Func.AutoDraw(10);
            Gvar.var_83[Gvar.var_314].Var5 = Gvar.var_3054;
            return;
        }
        return;
}

export {func658}
