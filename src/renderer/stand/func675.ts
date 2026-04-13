import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

// 旧 func675
async function func675(this: any) {
        Adap.dbgprt(675);
        Gvar.belongings_item_list = Gvar.nouryoku_disc_id;
        Gvar.var_3081 = Gvar.nouryoku_disc_id;
        await Func.func428();
        Gvar.disc_rarity = Gvar.var_233[Gvar.var_555].Var13;
        await Func.func492(); // アイテムリスト呼び出し
        Gvar.var_3082 = Gvar.item_name;
        await Func.setMessage("アナザーワン・バイツァ・ダスト！！", "", 7, false, false, false);
        Adap.DSPLAY(180);
        Gvar.var_1389 = Gvar.var_66;
        Gvar.var_1390 = Gvar.var_67;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1388 = 1;
        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
            Gvar.var_585 = 3;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_585 = 0;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1388++;
        }
        for (let cnt1 = 0; cnt1 < 24; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_198 = 1; // メッセージウィンドウ開く
            Gvar.var_300 = 0;
            Gvar.var_1388++;
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1388 = 0;
        Gvar.var_3083 = 1;
        Gvar.var_403 = "アナザーワン・バイツァ・ダスト！！";
        Gvar.var_2217 = 1;
        Gvar.var_2194 = 1;
        Gvar.var_2196 = 2;
        Gvar.var_2195 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_97; ++cnt1) {
            Gvar.var_2218 = 999;
            Gvar.var_2219 = 0;
            // Ver0.1403にて追加。No = 171 離婚した承太郎
            if (Gvar.var_2194 != Gvar.var_124 && Gvar.var_83[Gvar.var_2194].Var0 != 132 && Gvar.var_83[Gvar.var_2194].Var0 != 143 && Gvar.var_83[Gvar.var_2194].Var0 != 171 && Gvar.var_83[Gvar.var_2194].Var0 != 34 && Gvar.var_83[Gvar.var_2194].Var31 != 4 && Gvar.var_83[Gvar.var_2194].Var31 != 5) {
                if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var10 == Gvar.var_201 && Gvar.var_201 > 0 && Gvar.var_201 <= 12) {
                    await Func.func700();
                }
                if (Gvar.var_2220 == 0) {
                    Gvar.var_1993 = Gvar.var_66 - 1;
                    if (Gvar.var_1993 < 0) {
                        Gvar.var_1993 = 0;
                    }
                    Gvar.var_1994 = Gvar.var_66 + 1;
                    if (Gvar.var_1994 > Gvar.var_33) {
                        Gvar.var_1994 = Gvar.var_33;
                    }
                    Gvar.var_1995 = Gvar.var_67 + 1;
                    if (Gvar.var_1995 > Gvar.var_34) {
                        Gvar.var_1995 = Gvar.var_34;
                    }
                    Gvar.var_1996 = Gvar.var_67 - 1;
                    if (Gvar.var_1996 < 0) {
                        Gvar.var_1996 = 0;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_66 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                        await Func.func700();
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_66 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                        await Func.func700();
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_67) {
                        await Func.func700();
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_67) {
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
                }
                if (Gvar.var_2220 == 0 && Gvar.var_201 <= 12 && Gvar.var_201 != 0) {
                    Gvar.var_2221 = Gvar.var_83[Gvar.var_2194].Var1;
                    Gvar.var_2222 = Gvar.var_83[Gvar.var_2194].Var2;
                    Gvar.var_2223 = Gvar.var_83[Gvar.var_2194].Var1 - 1;
                    if (Gvar.var_2223 < 0) {
                        Gvar.var_2223 = 0;
                    }
                    Gvar.var_2224 = Gvar.var_83[Gvar.var_2194].Var1 + 1;
                    if (Gvar.var_2224 > Gvar.var_33) {
                        Gvar.var_2224 = Gvar.var_33;
                    }
                    Gvar.var_2225 = Gvar.var_83[Gvar.var_2194].Var2 + 1;
                    if (Gvar.var_2225 > Gvar.var_34) {
                        Gvar.var_2225 = Gvar.var_34;
                    }
                    Gvar.var_2226 = Gvar.var_83[Gvar.var_2194].Var2 - 1;
                    if (Gvar.var_2226 < 0) {
                        Gvar.var_2226 = 0;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_71[Gvar.var_2223][Gvar.var_2222] == Gvar.var_201) {
                        await Func.func700();
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_71[Gvar.var_2224][Gvar.var_2222] == Gvar.var_201) {
                        await Func.func700();
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_71[Gvar.var_2221][Gvar.var_2225] == Gvar.var_201) {
                        await Func.func700();
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_71[Gvar.var_2221][Gvar.var_2226] == Gvar.var_201) {
                        await Func.func700();
                    }
                }
            }
            Gvar.var_2194 = Gvar.var_2194 + 1;
        }
        Gvar.var_2196 = 0;
        Gvar.var_2195 = 0;
        Gvar.var_2217 = 0;
        Gvar.var_3083 = 0;
        Adap.gsel(19);
        Adap.color(255, 255, 255);
        Adap.boxf(0, 0, 680, 680);
        Adap.gsel(0);
        Gvar.var_211 = Gvar.var_352;
        Gvar.var_565 = Gvar.var_566;
        Gvar.var_133 = 0;
        Gvar.var_140 = 0;
        Gvar.var_110 = 0;
        Gvar.var_109 = 0;
        Gvar.var_134 = 0;
        Gvar.var_126 = 0;
        Gvar.var_132 = 0;
        Gvar.var_127 = 0;  // 瞼が落ちるや目を切り裂かれるなどで視界が見えななくなった時のフラグOFF
        Gvar.var_133 = 0;
        Gvar.var_135 = 0;
        Gvar.var_136 = 0;
        Gvar.var_114 = 0;
        Gvar.var_463 = 0;
        Gvar.var_464 = 0;
        Gvar.var_461 = 0;
        Gvar.var_462 = 0;
        Gvar.time_paused_count = 0;
        Gvar.var_152 = 0;
        Gvar.var_389 = 0;
        Gvar.var_586 = 0;
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_585 = 0;
        Gvar.var_112 = Gvar.var_112 - 151;
        Gvar.var_311 = 255;
        Adap.DSPLAY(161);
        Gvar.var_312 = 1;
        for (let cnt1 = 0; cnt1 < 51; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_311 = Gvar.var_311 - 5;
        }
        Gvar.var_312 = 0;
        Gvar.var_212 = 0;
        await Func.func428();
        Gvar.var_225 = Gvar.var_555;
        Gvar.var_898 = 0;
        Gvar.belongings_item_list = Gvar.var_3081;
        await Func.func430();
        await Func.func433(); // アイテム配列(所持アイテム)初期化関数
        Gvar.var_2392 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_97; ++cnt1) {
            Gvar.var_83[Gvar.var_2392].Var6 = 0;
            Gvar.var_83[Gvar.var_2392].Var9 = 0;
            Gvar.var_83[Gvar.var_2392].Var18 = 0;
            Gvar.var_2392 = Gvar.var_2392 + 1;
        }
        await Music.func112();
        await Func.setMessage("死の直前まで時間が戻った！", "", 7, true, false, false);
        await Func.setMessage("" + Gvar.var_3082 + "は", "ｴﾈﾙｷﾞｰを使い果たして消滅した。", 7, false, false, false);
        await Func.AutoDraw(30);
        Gvar.var_217 = 0;
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
}

export {func675}
