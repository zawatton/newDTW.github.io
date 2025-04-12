import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

async function func911(this: any) {
        Adap.dbgprt(911);
        Gvar.var_3519 = Adap.dim(30);
        Gvar.var_3519[0] = Gvar.var_233[Gvar.var_225].Var0;
        if (Gvar.dungeon_number == 3 && Gvar.var_3519[0] == 112) {
            if (Gvar.current_floor >= 60 && Gvar.current_floor <= 66) {
                Gvar.var_3519[0] = 394;
            }
        }
        Gvar.var_3519[1] = 0;
        Gvar.var_3519[2] = 0;
        Gvar.var_3519[3] = Gvar.var_233[Gvar.var_225].Var3;
        Gvar.var_3519[4] = Gvar.var_233[Gvar.var_225].Var4;
        Gvar.var_3519[5] = Gvar.var_233[Gvar.var_225].Var5;
        Gvar.var_3519[6] = Gvar.var_233[Gvar.var_225].Var6;
        Gvar.var_3519[7] = Gvar.var_233[Gvar.var_225].Var7;
        Gvar.var_3519[8] = 0;
        Gvar.var_3519[9] = Gvar.var_233[Gvar.var_225].Var9;
        Gvar.var_3519[10] = Gvar.var_233[Gvar.var_225].Var10;
        Gvar.var_3519[11] = 0;
        Gvar.var_3519[12] = Gvar.var_233[Gvar.var_225].Var12;
        Gvar.var_3519[13] = Gvar.var_233[Gvar.var_225].Var13;
        Gvar.var_3519[14] = Gvar.var_233[Gvar.var_225].Var14;
        Gvar.var_3519[15] = Gvar.var_233[Gvar.var_225].Var15;
        Gvar.var_3519[16] = Gvar.var_233[Gvar.var_225].Var16;
        Gvar.var_3519[17] = Gvar.var_233[Gvar.var_225].Var17;
        Gvar.var_3519[18] = Gvar.var_233[Gvar.var_225].Var18;
        Gvar.var_3519[19] = Gvar.var_233[Gvar.var_225].Var19;
        Gvar.var_3519[20] = Gvar.var_233[Gvar.var_225].Var20;
        Gvar.var_3519[21] = Gvar.var_233[Gvar.var_225].Var21;
        Gvar.var_3519[22] = Gvar.var_233[Gvar.var_225].Var22;
        Gvar.var_3519[23] = Gvar.var_233[Gvar.var_225].Var23;
        Gvar.var_3519[24] = Gvar.var_233[Gvar.var_225].Var24;
        Gvar.var_3519[25] = Gvar.var_233[Gvar.var_225].Var25;
        Gvar.var_3519[26] = Gvar.var_233[Gvar.var_225].Var26;
        Gvar.var_3519[27] = Gvar.var_233[Gvar.var_225].Var27;
        Gvar.var_3519[28] = Gvar.var_233[Gvar.var_225].Var28;
        Gvar.var_3519[29] = Gvar.var_233[Gvar.var_225].Var29;
        Gvar.var_1459 = Gvar.var_233[Gvar.var_225].Var0;
        Gvar.var_1249 = Gvar.var_233[Gvar.var_225].Var13;
        Gvar.var_3566 = 0;
        Gvar.var_3579 = "送具";
        if (Gvar.var_407 == 2) {
            if (Gvar.var_2323 == 0) {
                Gvar.var_3579 = "具０";
            }
            if (Gvar.var_2323 == 1) {
                Gvar.var_3579 = "具１";
            }
            if (Gvar.var_2323 == 2) {
                Gvar.var_3579 = "具２";
            }
            if (Gvar.var_2323 == 3) {
                Gvar.var_3579 = "具３";
            }
            if (Gvar.var_2323 == 4) {
                Gvar.var_3579 = "具４";
            }
            if (Gvar.var_2323 == 5) {
                Gvar.var_3579 = "具５";
            }
            if (Gvar.var_2323 == 6) {
                Gvar.var_3579 = "具６";
            }
            if (Gvar.var_2323 == 7) {
                Gvar.var_3579 = "具７";
            }
        }
        for (let cnt1 = 0; cnt1 < 30; ++cnt1) {
            Gvar.var_3579 = "" + Gvar.var_3579 + "," + Gvar.var_3519[Gvar.var_3566];
            Gvar.var_3566++;
        }
        Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
        Gvar.disc_rarity = Gvar.var_233[Gvar.var_225].Var13;
        await Func.func492(); // アイテムリスト呼び出し
        Gvar.var_3580 = Gvar.item_name;
        if (Gvar.var_233[Gvar.var_225].Var11 == 1) {
            Gvar.var_106 = 1;
            Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
            await Func.func492(); // アイテムリスト呼び出し
            Gvar.var_482 = 0;
            Gvar.var_482 = (Gvar.var_233[Gvar.var_225].Var3 + Gvar.var_233[Gvar.var_225].Var4) * 50;
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
        await Func.func430();
        await Func.func433(); // アイテム配列(所持アイテム)初期化関数
        await Func.setMessage1("「" + Gvar.var_3580 + "」は", "ﾑｰﾃﾞｨｰﾌﾞﾙｰｽの手で運ばれていった", 7, false, false, false);
        Adap.tcpput(Gvar.var_3579, Gvar.var_1050);
        Adap.tcpput("\n", Gvar.var_1050);
        Gvar.var_1457 = Gvar.var_66;
        Gvar.var_1458 = Gvar.var_67;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1460 = 1;
        for (let cnt1 = 0; cnt1 < 12; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1460++;
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1460 = 0;
        if (Gvar.var_225 < Gvar.var_2300 && Gvar.var_2301 == 0) {
            Gvar.var_2300 = Gvar.var_2300 - 1;
        }
        if (Gvar.var_225 < Gvar.var_2256 && Gvar.var_2301 == 1) {
            Gvar.var_2256 = Gvar.var_2256 - 1;
        }
        Gvar.var_225 = Gvar.var_2300;
        if (Gvar.var_2301 == 1) {
            Gvar.var_220 = 1; // 道具画面(メニュー画面/道具)呼び出し確認変数？
        }
        if (Gvar.var_2301 == 2) {
            Gvar.var_234 = 1;
        }
        Gvar.belongings_item_list = Gvar.activated_disc_id;
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {func911}
