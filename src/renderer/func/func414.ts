import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

// ヤバいもの関係の容量設定？？
async function func414(this: any) {
        Adap.dbgprt(414);
        if (Gvar.var_1850 == 1) {
            Gvar.belongings_item_list = Gvar.var_1846;
            await Func.func492(); // アイテムリスト呼び出し
            Gvar.var_482 = 0;
            if (Gvar.var_1846 != 800) {
                Gvar.var_482 = Gvar.var_1838 * 100 + Gvar.var_482;
            }
            Gvar.count_buying_price = Gvar.count_buying_price + Gvar.buying_price + Gvar.var_482;
        }
        Gvar.var_1897 = 0;
        Gvar.var_1898 = 0;
        Gvar.var_1191 = 0;
        Gvar.var_1220 = 0;
        // No = 853 サーフィスの人形
        if (Gvar.var_1903 == 0 && Gvar.var_233[Gvar.var_225].Var0 == 853) {
            Gvar.var_1270 = 0;
            await Func.func415();
            return;
        }
        Gvar.var_488 = Gvar.var_1846;
        await Music.func100(); // 効果音
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1521 = 1;
        Gvar.var_1522 = Gvar.var_233[Gvar.var_225].Var0;
        Gvar.var_1396 = Gvar.var_455;
        Gvar.var_1397 = Gvar.var_456;
        for (let cnt1 = 0; cnt1 < 7; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1521++;
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1521 = 0;
        Gvar.var_1904 = Gvar.var_233[Gvar.var_225].Var6;
        Gvar.var_1905 = Gvar.var_233[Gvar.var_225].Var8;
        Gvar.var_1906 = Gvar.var_448;
        Gvar.var_1907 = Gvar.var_450;
        Gvar.var_1908 = Gvar.var_455;
        Gvar.var_1909 = Gvar.var_456;
        // No = 806 ヤバいもの「カルネの死体」、No = 851 ヤバいもの「ホルマジオのビン」、// No = 852 ヤバいもの「ランドセル」ではない場合
        if (Gvar.var_233[Gvar.var_225].Var0 != 806 && Gvar.var_233[Gvar.var_225].Var0 != 851 && Gvar.var_233[Gvar.var_225].Var0 != 852) {
            Gvar.var_1910 = 1;
            for (let cnt2 = 0; cnt2 < Gvar.var_1905; ++cnt2) {
                Gvar.var_309 = Gvar.var_66;
                Gvar.var_310 = Gvar.var_67;
                Gvar.var_66 = Gvar.var_1906;
                Gvar.var_67 = Gvar.var_1907;
                await Func.func405();
                Gvar.var_66 = Gvar.var_309;
                Gvar.var_67 = Gvar.var_310;
                if (Gvar.var_446 == 0) {
                    break;
                }
                await Func.func724();
                Gvar.var_77[Gvar.var_448][Gvar.var_450] = Gvar.var_854;
                Gvar.var_78[Gvar.var_854].Var0 = Gvar.var_486[Gvar.var_1904][Gvar.var_1910][0];
                Gvar.var_78[Gvar.var_854].Var1 = Gvar.var_448;
                Gvar.var_78[Gvar.var_854].Var2 = Gvar.var_450;
                Gvar.var_78[Gvar.var_854].Var3 = Gvar.var_486[Gvar.var_1904][Gvar.var_1910][3];
                Gvar.var_78[Gvar.var_854].Var4 = Gvar.var_486[Gvar.var_1904][Gvar.var_1910][4];
                Gvar.var_78[Gvar.var_854].Var5 = Gvar.var_486[Gvar.var_1904][Gvar.var_1910][5];
                Gvar.var_78[Gvar.var_854].Var6 = Gvar.var_486[Gvar.var_1904][Gvar.var_1910][6];
                Gvar.var_78[Gvar.var_854].Var7 = Gvar.var_486[Gvar.var_1904][Gvar.var_1910][7];
                Gvar.var_78[Gvar.var_854].Var8 = Gvar.var_486[Gvar.var_1904][Gvar.var_1910][8];
                Gvar.var_78[Gvar.var_854].Var9 = Gvar.var_71[Gvar.var_448][Gvar.var_450];
                Gvar.var_78[Gvar.var_854].Var10 = 1;
                Gvar.var_78[Gvar.var_854].Var11 = Gvar.var_486[Gvar.var_1904][Gvar.var_1910][11];
                Gvar.var_78[Gvar.var_854].Var12 = Gvar.var_486[Gvar.var_1904][Gvar.var_1910][12];
                Gvar.var_78[Gvar.var_854].Var13 = Gvar.var_486[Gvar.var_1904][Gvar.var_1910][13];
                Gvar.var_78[Gvar.var_854].Var14 = Gvar.var_486[Gvar.var_1904][Gvar.var_1910][14];
                Gvar.var_78[Gvar.var_854].Var15 = Gvar.var_486[Gvar.var_1904][Gvar.var_1910][15];
                Gvar.var_78[Gvar.var_854].Var16 = Gvar.var_486[Gvar.var_1904][Gvar.var_1910][16];
                Gvar.var_78[Gvar.var_854].Var17 = Gvar.var_486[Gvar.var_1904][Gvar.var_1910][17];
                Gvar.var_78[Gvar.var_854].Var18 = Gvar.var_486[Gvar.var_1904][Gvar.var_1910][18];
                Gvar.var_78[Gvar.var_854].Var19 = Gvar.var_486[Gvar.var_1904][Gvar.var_1910][19];
                Gvar.var_78[Gvar.var_854].Var20 = Gvar.var_486[Gvar.var_1904][Gvar.var_1910][20];
                Gvar.var_78[Gvar.var_854].Var21 = Gvar.var_486[Gvar.var_1904][Gvar.var_1910][21];
                Gvar.var_78[Gvar.var_854].Var22 = Gvar.var_486[Gvar.var_1904][Gvar.var_1910][22];
                Gvar.var_78[Gvar.var_854].Var23 = Gvar.var_486[Gvar.var_1904][Gvar.var_1910][23];
                Gvar.var_78[Gvar.var_854].Var24 = Gvar.var_486[Gvar.var_1904][Gvar.var_1910][24];
                Gvar.var_78[Gvar.var_854].Var25 = Gvar.var_486[Gvar.var_1904][Gvar.var_1910][25];
                Gvar.var_78[Gvar.var_854].Var26 = Gvar.var_486[Gvar.var_1904][Gvar.var_1910][26];
                Gvar.var_78[Gvar.var_854].Var27 = Gvar.var_486[Gvar.var_1904][Gvar.var_1910][27];
                Gvar.var_78[Gvar.var_854].Var28 = Gvar.var_486[Gvar.var_1904][Gvar.var_1910][28];
                Gvar.var_78[Gvar.var_854].Var29 = Gvar.var_486[Gvar.var_1904][Gvar.var_1910][29];
                Gvar.var_1910++;
            }
            await Func.func018();
        }
        Gvar.var_1270 = 0;
        // No = 806 ヤバいもの「カルネの死体」の場合
        if (Gvar.var_233[Gvar.var_225].Var0 == 806) {
            Gvar.var_1911 = Gvar.var_233[Gvar.var_225].Var7 - Gvar.var_233[Gvar.var_225].Var8;
            if (Gvar.var_1911 >= 1) {
                Gvar.var_1912 = Gvar.var_673;
                Gvar.var_1913 = 1;
                Gvar.var_1845 = 3;
                Gvar.var_1914 = Gvar.var_1908;
                Gvar.var_1915 = Gvar.var_1909;
                for (let cnt3 = 0; cnt3 < Gvar.var_1911; ++cnt3) {
                    await Func.func556();
                }
                Gvar.var_1913 = 0;
                Gvar.var_1845 = 0;
                Gvar.var_673 = Gvar.var_1912;
            }
        }
        // No = 851 ヤバいもの「ホルマジオのビン」の場合
        if (Gvar.var_233[Gvar.var_225].Var0 == 851) {
            Gvar.var_1911 = Gvar.var_233[Gvar.var_225].Var8;
            if (Gvar.var_1911 >= 1) {
                Gvar.var_1912 = Gvar.var_673;
                Gvar.var_1916 = Gvar.var_233[Gvar.var_225].Var6;
                Gvar.var_1845 = 3;
                Gvar.var_1914 = Gvar.var_1908;
                Gvar.var_1915 = Gvar.var_1909;
                Gvar.var_1917 = 1;
                for (let cnt3 = 0; cnt3 < Gvar.var_1911; ++cnt3) {
                    Gvar.var_1918 = Gvar.var_486[Gvar.var_1916][Gvar.var_1917][15];
                    Gvar.var_1919 = Gvar.var_486[Gvar.var_1916][Gvar.var_1917][18];
                    if (Gvar.var_1918 != 0) {
                        await Func.func556();
                    }
                    Gvar.var_1917++;
                }
                Gvar.var_1918 = 0;
                Gvar.var_1845 = 0;
                Gvar.var_673 = Gvar.var_1912;
            }
        }
        // No = 852 ヤバいもの「ランドセル」の場合
        if (Gvar.var_233[Gvar.var_225].Var0 == 852) {
            Gvar.var_1911 = Gvar.var_233[Gvar.var_225].Var7 - Gvar.var_233[Gvar.var_225].Var8;
            if (Gvar.var_1911 >= 1) {
                Gvar.var_1912 = Gvar.var_673;
                Gvar.var_1920 = 1;
                Gvar.var_1845 = 3;
                Gvar.var_1914 = Gvar.var_1908;
                Gvar.var_1915 = Gvar.var_1909;
                for (let cnt3 = 0; cnt3 < Gvar.var_1911; ++cnt3) {
                    await Func.func556();
                }
                Gvar.var_1920 = 0;
                Gvar.var_1845 = 0;
                Gvar.var_673 = Gvar.var_1912;
            }
        }
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        if (Gvar.var_1903 == 1) {
            return;
        }
        await Func.func433(); // アイテム配列(所持アイテム)初期化関数
        await Func.AutoDraw(3);
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {func414}
