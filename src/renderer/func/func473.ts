import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func473(this: any) {
        Adap.dbgprt(473);
        Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
        Gvar.var_1866 = 0;
        if (Gvar.var_233[Gvar.var_225].Var0 != 851 && Gvar.var_233[Gvar.var_225].Var7 == 0) {
            await Func.setMessage("これ以上押せないようだ。", "", 7, false, false, false);
            Gvar.var_231 = 0;
            Gvar.var_234 = 0;
            Gvar.var_2040 = 0;
            await Func.AutoDraw(10);
            await Func.func009(); // ディアボロ側ターン処理(ループ処理)
            return;
        }
        if (Gvar.var_233[Gvar.var_225].Var0 == 851) {
            Gvar.var_1916 = Gvar.var_233[Gvar.var_225].Var6;
            if (Gvar.var_486[Gvar.var_1916][1][15] == 0 || Gvar.var_233[Gvar.var_225].Var8 == 0) {
                await Func.setMessage("何も入っていないようだ。", "", 7, false, false, false);
                Gvar.var_231 = 0;
                Gvar.var_234 = 0;
                Gvar.var_2040 = 0;
                await Func.AutoDraw(10);
                await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                return;
            }
        }
        if (Gvar.var_233[Gvar.var_225].Var0 != 851) {
            Gvar.var_233[Gvar.var_225].Var7 = Gvar.var_233[Gvar.var_225].Var7 - 1;
            if (Gvar.var_233[Gvar.var_225].Var11 == 1) {
                Gvar.count_buying_price = Gvar.count_buying_price + 100;
            }
            if (Gvar.var_234 == 1) {
                Gvar.var_2087 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
                Gvar.var_78[Gvar.var_2087].Var7 = Gvar.var_233[0].Var7;
            }
        }
        Adap.DSPLAY(221);
        if (Gvar.var_233[Gvar.var_225].Var0 == 850) {
            Gvar.var_1940 = Gvar.var_199;
            Gvar.var_199 = 2;
            await Func.setMessage("パウッ！", "", 7, false, false, false);
            await Func.AutoDraw(10);
            Gvar.var_389 = 2;
            Gvar.var_747 = 1;
            Adap.DSPLAY(103); // 殴られた時の効果音
            await Func.AutoDraw(15);
            Gvar.var_389 = 0;
            Adap.DSPLAY(182);
            Gvar.var_1299 = 1;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1297 = 1;
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1297++;
            }
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_1297 = 0;
            if (Gvar.var_130 != 0) {
                Gvar.var_389 = 2;
                Gvar.var_134 = 1;
                Gvar.var_211 = 1;
                Gvar.var_747 = 1;
                Adap.DSPLAY(105);
                await Func.AutoDraw(10);
                await Func.setMessage("吸血鬼体質で波紋呼吸をしてしまった！", "", 7, true, false, false);
                await Func.setMessage("酷いダメージを受けて回復しない！", "", 7, false, false, false);
                await Func.AutoDraw(10);
                Gvar.var_389 = 0;
            }
            if (Gvar.var_130 == 0) {
                if (Gvar.var_211 != Gvar.var_352) {
                    Adap.DSPLAY(143);
                    Gvar.var_211 = Gvar.var_352;
                    await Func.setMessage("ＨＰが回復した！", "", 7, true, false, false);
                    await Func.AutoDraw(3);
                }
                await Func.func457();
                Gvar.var_125 = 1;
                await Func.setMessage("吸血鬼に強くなった！", "", 7, false, false, false);
            }
            Gvar.var_199 = Gvar.var_1940;
            await Func.AutoDraw(10);
        }
        if (Gvar.var_233[Gvar.var_225].Var0 == 851) {
            if (Gvar.var_199 == 2) {
                Gvar.var_2102 = Gvar.var_66;
                Gvar.var_2103 = Gvar.var_67 + 1;
            }
            if (Gvar.var_199 == 8) {
                Gvar.var_2102 = Gvar.var_66;
                Gvar.var_2103 = Gvar.var_67 - 1;
            }
            if (Gvar.var_199 == 4) {
                Gvar.var_2102 = Gvar.var_66 - 1;
                Gvar.var_2103 = Gvar.var_67;
            }
            if (Gvar.var_199 == 6) {
                Gvar.var_2102 = Gvar.var_66 + 1;
                Gvar.var_2103 = Gvar.var_67;
            }
            if (Gvar.var_199 == 1) {
                Gvar.var_2102 = Gvar.var_66 - 1;
                Gvar.var_2103 = Gvar.var_67 + 1;
            }
            if (Gvar.var_199 == 3) {
                Gvar.var_2102 = Gvar.var_66 + 1;
                Gvar.var_2103 = Gvar.var_67 + 1;
            }
            if (Gvar.var_199 == 7) {
                Gvar.var_2102 = Gvar.var_66 - 1;
                Gvar.var_2103 = Gvar.var_67 - 1;
            }
            if (Gvar.var_199 == 9) {
                Gvar.var_2102 = Gvar.var_66 + 1;
                Gvar.var_2103 = Gvar.var_67 - 1;
            }
            if (Gvar.var_862[851][0] == 0) {
                await Func.setMessage("何かを押した。", "", 7, false, false, false);
            }
            if (Gvar.var_862[851][0] == 1) {
                await Func.setMessage("ビンの中を押した。", "", 7, false, false, false);
            }
            await Func.AutoDraw(10);
            if (Gvar.var_71[Gvar.var_2102][Gvar.var_2103] == 0 || Gvar.var_71[Gvar.var_2102][Gvar.var_2103] == 13 || Gvar.var_82[Gvar.var_2102][Gvar.var_2103] != 0) {
                await Func.setMessage("何かが飛び出そうになったが", "出てこなかった。", 7, false, false, false);
                await Func.AutoDraw(10);
            }
            if (Gvar.var_71[Gvar.var_2102][Gvar.var_2103] != 0 && Gvar.var_71[Gvar.var_2102][Gvar.var_2103] != 13 && Gvar.var_82[Gvar.var_2102][Gvar.var_2103] == 0) {
                Gvar.var_1845 = 4;
                Gvar.var_1916 = Gvar.var_233[Gvar.var_225].Var6;
                Gvar.var_1918 = Gvar.var_486[Gvar.var_1916][1][15];
                Gvar.var_1919 = Gvar.var_486[Gvar.var_1916][1][18];
                await Func.func556();
                Gvar.var_1918 = 0;
                Gvar.var_1845 = 0;
                Gvar.var_1584 = (Gvar.var_83[Gvar.var_673].Var1 - Gvar.var_66 + 4) * 40;
                Gvar.var_1585 = (Gvar.var_83[Gvar.var_673].Var2 - Gvar.var_67 + 4) * 40;
                Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
                Gvar.var_1583 = 1;
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    Gvar.var_300 = 0;
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_1583++;
                }
                Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
                Gvar.var_1583 = 0;
                Gvar.var_486[Gvar.var_1916][1][15] = 0;
                Gvar.var_1957 = 0;
                Gvar.var_447 = 1;
                Gvar.var_449 = 2;
                Gvar.var_2104 = Gvar.var_233[Gvar.var_225].Var7 + Gvar.var_233[Gvar.var_225].Var8;
                for (let cnt3 = 0; cnt3 < Gvar.var_2104; ++cnt3) {
                    if (Gvar.var_486[Gvar.var_1916][Gvar.var_447][15] == 0) {
                        Gvar.var_486[Gvar.var_1916][Gvar.var_447][15] = Gvar.var_486[Gvar.var_1916][Gvar.var_449][15];
                        Gvar.var_486[Gvar.var_1916][Gvar.var_447][18] = Gvar.var_486[Gvar.var_1916][Gvar.var_449][18];
                        Gvar.var_1957 = 1;
                    }
                    if (Gvar.var_1957 == 1) {
                        Gvar.var_486[Gvar.var_1916][Gvar.var_447][15] = Gvar.var_486[Gvar.var_1916][Gvar.var_449][15];
                        Gvar.var_486[Gvar.var_1916][Gvar.var_447][18] = Gvar.var_486[Gvar.var_1916][Gvar.var_449][18];
                    }
                    Gvar.var_447 = Gvar.var_447 + 1;
                    Gvar.var_449 = Gvar.var_449 + 1;
                }
                Gvar.var_2105 = Gvar.var_2104;
                Gvar.var_486[Gvar.var_1916][Gvar.var_2105][15] = 0;
                Gvar.var_486[Gvar.var_1916][Gvar.var_2105][18] = 0;
                Gvar.var_233[Gvar.var_225].Var8 = Gvar.var_233[Gvar.var_225].Var8 - 1;
                if (Gvar.var_233[Gvar.var_225].Var11 == 1) {
                    Gvar.count_buying_price = Gvar.count_buying_price + 100;
                }
                if (Gvar.var_234 == 1) {
                    Gvar.var_2087 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
                    Gvar.var_78[Gvar.var_2087].Var7 = Gvar.var_233[0].Var7;
                    Gvar.var_78[Gvar.var_2087].Var8 = Gvar.var_233[0].Var8;
                }
                await Func.AutoDraw(10);
            }
        }
        if (Gvar.var_233[Gvar.var_225].Var0 == 852) {
            if (Gvar.var_862[852][0] == 0) {
                await Func.setMessage("何かを押した。", "", 7, false, false, false);
            }
            if (Gvar.var_862[852][0] == 1) {
                await Func.setMessage("ランドセルを押した。", "", 7, false, false, false);
            }
            await Func.AutoDraw(10);
            await Func.setMessage("ギャ――ス！", "", 7, false, false, false);
            await Func.AutoDraw(3);
            Gvar.var_231 = 0;
            Gvar.var_234 = 0;
            Gvar.var_2040 = 0;
            Gvar.var_2106 = 2;
            Gvar.var_1213 = 1;
            await Func.func647(); // 射撃攻撃動作処理
            return;
        }
        if (Gvar.var_233[Gvar.var_225].Var0 == 853) {
            if (Gvar.var_199 == 2) {
                Gvar.var_2102 = Gvar.var_66;
                Gvar.var_2103 = Gvar.var_67 + 1;
            }
            if (Gvar.var_199 == 8) {
                Gvar.var_2102 = Gvar.var_66;
                Gvar.var_2103 = Gvar.var_67 - 1;
            }
            if (Gvar.var_199 == 4) {
                Gvar.var_2102 = Gvar.var_66 - 1;
                Gvar.var_2103 = Gvar.var_67;
            }
            if (Gvar.var_199 == 6) {
                Gvar.var_2102 = Gvar.var_66 + 1;
                Gvar.var_2103 = Gvar.var_67;
            }
            if (Gvar.var_199 == 1) {
                Gvar.var_2102 = Gvar.var_66 - 1;
                Gvar.var_2103 = Gvar.var_67 + 1;
            }
            if (Gvar.var_199 == 3) {
                Gvar.var_2102 = Gvar.var_66 + 1;
                Gvar.var_2103 = Gvar.var_67 + 1;
            }
            if (Gvar.var_199 == 7) {
                Gvar.var_2102 = Gvar.var_66 - 1;
                Gvar.var_2103 = Gvar.var_67 - 1;
            }
            if (Gvar.var_199 == 9) {
                Gvar.var_2102 = Gvar.var_66 + 1;
                Gvar.var_2103 = Gvar.var_67 - 1;
            }
            Gvar.var_2107 = 0;
            if (Gvar.var_862[853][0] == 0) {
                await Func.setMessage("何かを押した。", "", 7, false, false, false);
            }
            if (Gvar.var_862[853][0] == 1) {
                await Func.setMessage("サーフィス人形を押した。", "", 7, false, false, false);
            }
            await Func.AutoDraw(10);
            if (Gvar.var_71[Gvar.var_2102][Gvar.var_2103] == 0 || Gvar.var_71[Gvar.var_2102][Gvar.var_2103] == 13 || Gvar.var_82[Gvar.var_2102][Gvar.var_2103] != 0) {
                Gvar.var_2108 = 0;
            }
            if (Gvar.var_71[Gvar.var_2102][Gvar.var_2103] != 0 && Gvar.var_71[Gvar.var_2102][Gvar.var_2103] != 13 && Gvar.var_82[Gvar.var_2102][Gvar.var_2103] == 0) {
                Gvar.var_2108 = 1;
            }
            if (Gvar.var_2108 == 0) {
                Gvar.var_2109 = 1;
                Gvar.var_1845 = 1;
                await Func.func556();
                Gvar.var_2109 = 0;
                Gvar.var_1845 = 0;
                if (Gvar.var_2110 == 1) {
                    Gvar.var_2107 = 1;
                    Gvar.var_199 = Gvar.var_2111;
                }
                if (Gvar.var_2110 == 0) {
                    await Func.setMessage("十分なスペースがないため", "うまくいかなかった。", 7, false, false, false);
                    Gvar.var_231 = 0;
                    Gvar.var_234 = 0;
                    Gvar.var_2040 = 0;
                    Gvar.var_217 = 1;
                    await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
                    return;
                }
            }
            if (Gvar.var_2108 == 1) {
                Gvar.var_2109 = 1;
                Gvar.var_1845 = 4;
                await Func.func556();
                Gvar.var_2109 = 0;
                Gvar.var_1845 = 0;
                Gvar.var_2107 = 1;
            }
            if (Gvar.var_2107 == 1) {
                Gvar.var_439 = Gvar.var_673;
                Gvar.var_83[Gvar.var_439].Var11 = 1;
                Gvar.var_83[Gvar.var_439].Var5 = 2;
                Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
                Gvar.var_444 = 1;
                for (let cnt3 = 0; cnt3 < 25; ++cnt3) {
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_444 = Gvar.var_444 + 1;
                    Gvar.var_198 = 1; // メッセージウィンドウ開く
                    Gvar.var_300 = 0;
                }
                Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
                Gvar.var_444 = 0;
                Gvar.var_83[Gvar.var_439].Var11 = 0;
                await Func.setMessage("ｺﾋﾟｰ人形が現れた。", "うまくいかなかった。", 7, false, false, false);
            }
            await Func.AutoDraw(10);
        }
        if (Gvar.var_233[Gvar.var_225].Var0 == 854) {
            if (Gvar.var_862[854][0] == 0) {
                await Func.setMessage("何かを押した。",  "", 7, false, false, false);
            }
            if (Gvar.var_862[854][0] == 1) {
                await Func.setMessage("聖人の脊椎を押した。", "", 7, false, false, false);
            }
            await Func.AutoDraw(10);
            Gvar.var_234 = 0;
            if (Gvar.var_262 == 0) { // Gvar.var_262 == 0 なので、Gvar.dungeon_number = 0 でなければ
                Gvar.var_231 = 0;
                Gvar.var_234 = 0;
                Gvar.var_2040 = 0;
                Gvar.var_2112 = 1;
                Adap.DSPLAY(190);
                await Func.func499(); // ダンジョン動作処理?
            }
            if (Gvar.var_262 != 0) { // Gvar.var_262 != 0 なので、Gvar.dungeon_number = 0 であれば
                await Func.setMessage("ここでは何も起こらなかった。", "", 7, false, false, false);
            }
        }
        Gvar.var_231 = 0;
        Gvar.var_234 = 0;
        Gvar.var_2040 = 0;
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {func473}
