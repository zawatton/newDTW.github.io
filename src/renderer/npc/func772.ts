/**
 * func772 — func772 ムーディーブルース以外でアイテムを送る手段(サウェッジガーデン？アバッキオ？)
 *
 * (org原典: newDTW_func7)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

// 旧 func772
async function func772(this: any) {
        Adap.dbgprt(772);
        Gvar.var_2000 = 0;
        Gvar.var_2401 = 0;
        Gvar.var_2402 = 0;
        if (Gvar.var_559 == 0 && Gvar.var_864 >= 19) {
            Gvar.var_2402 = 1;
        }
        if (Gvar.var_559 == 1 && Gvar.var_864 >= 26) {
            Gvar.var_2402 = 1;
        }
        if (Gvar.var_559 == 2 && Gvar.var_864 >= 33) {
            Gvar.var_2402 = 1;
        }
        if (Gvar.var_559 == 3 && Gvar.var_864 >= 39) {
            Gvar.var_2402 = 1;
        }
        if (Gvar.var_559 == 4 && Gvar.var_864 >= 45) {
            Gvar.var_2402 = 1;
        }
        if (Gvar.var_2402 == 1) {
            await Func.setMessage("倉庫にはもう置ける場所がないようだ",
                                    "", 7, true, false, false);
            await Func.func009(); // ディアボロ側ターン処理(ループ処理)
            return;
        }
        Gvar.var_449 = 21;
        for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
            Gvar.var_447 = 10;
            for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
                if (Gvar.var_863[Gvar.var_447][Gvar.var_449] == 0) {
                    Gvar.var_2403 = 0;
                    if (Gvar.var_559 <= 3) {
                        if (Gvar.var_447 == 10 && Gvar.var_449 == 21) {
                            Gvar.var_2403 = 1;
                        }
                        if (Gvar.var_447 == 10 && Gvar.var_449 == 22) {
                            Gvar.var_2403 = 1;
                        }
                        if (Gvar.var_447 == 10 && Gvar.var_449 == 23) {
                            Gvar.var_2403 = 1;
                        }
                        if (Gvar.var_447 == 10 && Gvar.var_449 == 24) {
                            Gvar.var_2403 = 1;
                        }
                        if (Gvar.var_447 == 10 && Gvar.var_449 == 25) {
                            Gvar.var_2403 = 1;
                        }
                        if (Gvar.var_447 == 10 && Gvar.var_449 == 26) {
                            Gvar.var_2403 = 1;
                        }
                    }
                    if (Gvar.var_559 <= 2) {
                        if (Gvar.var_447 == 11 && Gvar.var_449 == 21) {
                            Gvar.var_2403 = 1;
                        }
                        if (Gvar.var_447 == 11 && Gvar.var_449 == 22) {
                            Gvar.var_2403 = 1;
                        }
                        if (Gvar.var_447 == 11 && Gvar.var_449 == 23) {
                            Gvar.var_2403 = 1;
                        }
                        if (Gvar.var_447 == 11 && Gvar.var_449 == 24) {
                            Gvar.var_2403 = 1;
                        }
                        if (Gvar.var_447 == 11 && Gvar.var_449 == 25) {
                            Gvar.var_2403 = 1;
                        }
                        if (Gvar.var_447 == 11 && Gvar.var_449 == 26) {
                            Gvar.var_2403 = 1;
                        }
                    }
                    if (Gvar.var_447 == 12 && Gvar.var_449 == 21) {
                        Gvar.var_2403 = 1;
                    }
                    if (Gvar.var_447 == 13 && Gvar.var_449 == 21) {
                        Gvar.var_2403 = 1;
                    }
                    if (Gvar.var_447 == 14 && Gvar.var_449 == 21) {
                        Gvar.var_2403 = 1;
                    }
                    if (Gvar.var_447 == 15 && Gvar.var_449 == 21) {
                        Gvar.var_2403 = 1;
                    }
                    if (Gvar.var_447 == 12 && Gvar.var_449 == 22) {
                        Gvar.var_2403 = 1;
                    }
                    if (Gvar.var_447 == 13 && Gvar.var_449 == 22) {
                        Gvar.var_2403 = 1;
                    }
                    if (Gvar.var_447 == 14 && Gvar.var_449 == 22) {
                        Gvar.var_2403 = 1;
                    }
                    if (Gvar.var_447 == 15 && Gvar.var_449 == 22) {
                        Gvar.var_2403 = 1;
                    }
                    if (Gvar.var_447 == 13 && Gvar.var_449 == 23) {
                        Gvar.var_2403 = 1;
                    }
                    if (Gvar.var_2403 == 0) {
                        Gvar.var_1459 = Gvar.var_233[Gvar.var_225].Var0;
                        Gvar.var_1249 = Gvar.var_233[Gvar.var_225].Var13;
                        Gvar.var_864 = Gvar.var_864 + 1;
                        Gvar.var_863[Gvar.var_447][Gvar.var_449] = Gvar.var_864;
                        Gvar.var_866 = Gvar.var_864;
                        Gvar.var_853[Gvar.var_866][0] = Gvar.var_233[Gvar.var_225].Var0;
                        Gvar.var_853[Gvar.var_866][1] = Gvar.var_447;
                        Gvar.var_853[Gvar.var_866][2] = Gvar.var_449;
                        Gvar.var_853[Gvar.var_866][3] = Gvar.var_233[Gvar.var_225].Var3;
                        Gvar.var_853[Gvar.var_866][4] = Gvar.var_233[Gvar.var_225].Var4;
                        Gvar.var_853[Gvar.var_866][5] = Gvar.var_233[Gvar.var_225].Var5;
                        Gvar.var_853[Gvar.var_866][6] = Gvar.var_233[Gvar.var_225].Var6;
                        Gvar.var_853[Gvar.var_866][7] = Gvar.var_233[Gvar.var_225].Var7;
                        Gvar.var_853[Gvar.var_866][8] = Gvar.var_233[Gvar.var_225].Var8;
                        Gvar.var_853[Gvar.var_866][9] = Gvar.var_233[Gvar.var_225].Var9;
                        Gvar.var_853[Gvar.var_866][10] = Gvar.var_233[Gvar.var_225].Var10;
                        Gvar.var_853[Gvar.var_866][11] = 0;
                        Gvar.var_853[Gvar.var_866][12] = Gvar.var_233[Gvar.var_225].Var12;
                        Gvar.var_853[Gvar.var_866][13] = Gvar.var_233[Gvar.var_225].Var13;
                        Gvar.var_853[Gvar.var_866][14] = Gvar.var_233[Gvar.var_225].Var14;
                        Gvar.var_853[Gvar.var_866][15] = Gvar.var_233[Gvar.var_225].Var15;
                        Gvar.var_853[Gvar.var_866][16] = Gvar.var_233[Gvar.var_225].Var16;
                        Gvar.var_853[Gvar.var_866][17] = Gvar.var_233[Gvar.var_225].Var17;
                        Gvar.var_853[Gvar.var_866][18] = Gvar.var_233[Gvar.var_225].Var18;
                        Gvar.var_853[Gvar.var_866][19] = Gvar.var_233[Gvar.var_225].Var19;
                        Gvar.var_853[Gvar.var_866][20] = Gvar.var_233[Gvar.var_225].Var20;
                        Gvar.var_853[Gvar.var_866][21] = Gvar.var_233[Gvar.var_225].Var21;
                        Gvar.var_853[Gvar.var_866][22] = Gvar.var_233[Gvar.var_225].Var22;
                        Gvar.var_853[Gvar.var_866][23] = Gvar.var_233[Gvar.var_225].Var23;
                        Gvar.var_853[Gvar.var_866][24] = Gvar.var_233[Gvar.var_225].Var24;
                        Gvar.var_853[Gvar.var_866][25] = Gvar.var_233[Gvar.var_225].Var25;
                        Gvar.var_853[Gvar.var_866][26] = Gvar.var_233[Gvar.var_225].Var26;
                        Gvar.var_853[Gvar.var_866][27] = Gvar.var_233[Gvar.var_225].Var27;
                        Gvar.var_853[Gvar.var_866][28] = Gvar.var_233[Gvar.var_225].Var28;
                        Gvar.var_853[Gvar.var_866][29] = Gvar.var_233[Gvar.var_225].Var29;
                        if (Gvar.var_233[Gvar.var_225].Var11 == 1) {
                            Gvar.var_106 = 1;
                            Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
                            await Func.func492(); // アイテムリスト呼び出し
                            Gvar.var_482 = 0;
                            Gvar.var_482 = (Gvar.var_233[Gvar.var_225].Var3 + Gvar.var_233[Gvar.var_225].Var4) * 50;
                            if (Gvar.var_233[Gvar.var_225].Var0 != 800) {
                                Gvar.var_482 = Gvar.var_233[Gvar.var_225].Var7 * 100 + Gvar.var_482;
                            }
                            if (Gvar.var_233[Gvar.var_225].Var19 > 1) {
                                Gvar.var_482 = Gvar.var_233[Gvar.var_225].Var19 * 500 + Gvar.var_482;
                            }
                            Gvar.buying_price = Gvar.buying_price + Gvar.var_482;
                            Gvar.count_buying_price = Gvar.count_buying_price + Gvar.buying_price;
                        }
                        Gvar.var_1977 = 0;
                        if (Gvar.var_553 == Gvar.var_225) {
                            Gvar.var_476 = Adap.dim(40);
                            Gvar.var_580 = Gvar.var_580 - Gvar.var_894;
                            Gvar.var_894 = 0;
                            Gvar.kougeki_disc_id  = 0;
                            await Func.func494();
                            Gvar.var_1977 = 1;
                        }
                        if (Gvar.var_554 == Gvar.var_225) {
                            Gvar.var_477 = Adap.dim(40);
                            Gvar.var_581 = Gvar.var_581 - Gvar.var_895;
                            Gvar.var_895 = 0;
                            Gvar.bougyo_disc_id = 0;
                            await Func.func494();
                            Gvar.var_1977 = 1;
                        }
                        if (Gvar.var_555 == Gvar.var_225) {
                            Gvar.var_478 = Adap.dim(40);
                            Gvar.nouryoku_disc_id = 0;
                            await Func.func494();
                            Gvar.var_1977 = 1;
                        }
                        if (Gvar.var_556 == Gvar.var_225) {
                            Gvar.var_479 = Adap.dim(40);
                            Gvar.shageki_disc_id = 0;
                            Gvar.var_250 = 0;
                            Gvar.var_1977 = 1;
                        }
                        if (Gvar.var_1977 == 1) {
                            Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
                            await Music.func106(); // BGM選曲呼び出し割り振り
                        }
                        Gvar.var_2401 = 1;
                        await Func.func430();
                        await Func.func433(); // アイテム配列(所持アイテム)初期化関数
                        break;
                    }
                }
                Gvar.var_447 = Gvar.var_447 + 1;
            }
            if (Gvar.var_2401 == 1) {
                break;
            }
            Gvar.var_449 = Gvar.var_449 + 1;
        }
        if (Gvar.var_2401 == 1) {
            await Func.setMessage("サヴェジガーデンはアイテムを持って",
                                   "飛び去っていった。", 7, true, false, false);
        }
        if (Gvar.var_2401 == 0) {
            await Func.setMessage("倉庫にはもう置ける場所がないようだ",
                                   "", 7, true, false, false);
        }
        Gvar.var_198 = 0; // メッセージウィンドウ閉じる
        Gvar.var_300 = 0;
        if (Gvar.var_2401 == 1) {
            Gvar.var_1457 = Gvar.var_83[Gvar.var_3148].Var1;
            Gvar.var_1458 = Gvar.var_83[Gvar.var_3148].Var2;
            Gvar.var_83[Gvar.var_3148].Var11 = 1;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1456 = 1;
            for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1456++;
            }
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_1456 = 0;
            Gvar.var_82[Gvar.var_1457][Gvar.var_1458] = 0;
            Gvar.var_83[Gvar.var_3148].Var0 = 0;
            Gvar.var_83[Gvar.var_3148].Var1 = 0;
            Gvar.var_83[Gvar.var_3148].Var2 = 0;
            await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        }
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {func772}
