/**
 * func411 — func411 アイテムを投げた時の動作処理
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// アイテムを投げた時の動作処理
async function func411(this: any) {
        Adap.dbgprt(411);
        if (Gvar.var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
            if (Gvar.var_171 == 1) {
                await Func.func424();
                if (Gvar.var_1886 >= 1) {
                    await Func.func425();
                    return;
                }
            }
            Gvar.var_1846 = Gvar.var_486[Gvar.var_682][Gvar.var_225][0];
            Gvar.var_1837 = Gvar.var_486[Gvar.var_682][Gvar.var_225][3];
            Gvar.var_1835 = Gvar.var_486[Gvar.var_682][Gvar.var_225][4];
            Gvar.var_1847 = Gvar.var_486[Gvar.var_682][Gvar.var_225][5];
            Gvar.var_1848 = Gvar.var_486[Gvar.var_682][Gvar.var_225][6];
            Gvar.var_1838 = Gvar.var_486[Gvar.var_682][Gvar.var_225][7];
            Gvar.var_1849 = Gvar.var_486[Gvar.var_682][Gvar.var_225][8];
            Gvar.var_1889 = Gvar.var_486[Gvar.var_682][Gvar.var_225][9];
            Gvar.var_1890 = Gvar.var_486[Gvar.var_682][Gvar.var_225][10];
            Gvar.var_1850 = Gvar.var_486[Gvar.var_682][Gvar.var_225][11];
            Gvar.var_1851 = Gvar.var_486[Gvar.var_682][Gvar.var_225][12];
            Gvar.var_1833 = Gvar.var_486[Gvar.var_682][Gvar.var_225][13];
            Gvar.var_1834 = Gvar.var_486[Gvar.var_682][Gvar.var_225][14];
            Gvar.var_1852 = Gvar.var_486[Gvar.var_682][Gvar.var_225][15];
            Gvar.var_1853 = Gvar.var_486[Gvar.var_682][Gvar.var_225][16];
            Gvar.var_1854 = Gvar.var_486[Gvar.var_682][Gvar.var_225][17];
            Gvar.var_1855 = Gvar.var_486[Gvar.var_682][Gvar.var_225][18];
            Gvar.var_1836 = Gvar.var_486[Gvar.var_682][Gvar.var_225][19];
            Gvar.var_1856 = Gvar.var_486[Gvar.var_682][Gvar.var_225][20];
            Gvar.var_1857 = Gvar.var_486[Gvar.var_682][Gvar.var_225][21];
            Gvar.var_1858 = Gvar.var_486[Gvar.var_682][Gvar.var_225][22];
            Gvar.var_1859 = Gvar.var_486[Gvar.var_682][Gvar.var_225][23];
            Gvar.var_1860 = Gvar.var_486[Gvar.var_682][Gvar.var_225][24];
            Gvar.var_1861 = Gvar.var_486[Gvar.var_682][Gvar.var_225][25];
            Gvar.var_1862 = Gvar.var_486[Gvar.var_682][Gvar.var_225][26];
            Gvar.var_1863 = Gvar.var_486[Gvar.var_682][Gvar.var_225][27];
            Gvar.var_1864 = Gvar.var_486[Gvar.var_682][Gvar.var_225][28];
            Gvar.var_1865 = Gvar.var_486[Gvar.var_682][Gvar.var_225][29];
            Gvar.var_340 = Gvar.var_486[Gvar.var_682][Gvar.var_225][0];
            Gvar.var_1887 = Gvar.var_486[Gvar.var_682][Gvar.var_225][13];
            Gvar.var_1888 = Math.floor(Gvar.var_486[Gvar.var_682][Gvar.var_225][13] / 10);
        }
        Gvar.var_1246 = 1;
        Gvar.var_1247 = Gvar.var_1846;
        Gvar.var_1249 = Gvar.var_1833;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1246++;
        }
        Gvar.var_1246 = 0;
        Adap.DSPLAY(107);
        Gvar.var_1190 = 1;
        Gvar.var_1191 = 1;
        Gvar.var_455 = Gvar.var_66;
        Gvar.var_456 = Gvar.var_67;
        Gvar.var_1891 = 0;
        Gvar.var_446 = 0;
        if (Gvar.var_199 == 4) {
            Gvar.var_1416 = 40;
        }
        if (Gvar.var_199 == 6) {
            Gvar.var_1416 = 120;
        }
        if (Gvar.var_199 == 8) {
            Gvar.var_1416 = 80;
        }
        if (Gvar.var_199 == 2) {
            Gvar.var_1416 = 0;
        }
        if (Gvar.var_199 == 1) {
            Gvar.var_1416 = 160;
        }
        if (Gvar.var_199 == 3) {
            Gvar.var_1416 = 240;
        }
        if (Gvar.var_199 == 7) {
            Gvar.var_1416 = 200;
        }
        if (Gvar.var_199 == 9) {
            Gvar.var_1416 = 280;
        }
        Gvar.var_1892 = 10;
        Gvar.var_1893 = 0;
        if (Gvar.equip_disc[122] == 1 && Gvar.var_262 == 0) {
            Gvar.var_1892 = 60;
            Gvar.var_1893 = 1;
        }
        for (let cnt1 = 0; cnt1 < Gvar.var_1892; ++cnt1) {
            Gvar.var_1894 = Gvar.var_455;
            Gvar.var_1895 = Gvar.var_456;
            if (Gvar.var_199 == 4) {
                Gvar.var_455 = Gvar.var_455 - 1;
            }
            if (Gvar.var_199 == 6) {
                Gvar.var_455 = Gvar.var_455 + 1;
            }
            if (Gvar.var_199 == 8) {
                Gvar.var_456 = Gvar.var_456 - 1;
            }
            if (Gvar.var_199 == 2) {
                Gvar.var_456 = Gvar.var_456 + 1;
            }
            if (Gvar.var_199 == 1) {
                Gvar.var_455 = Gvar.var_455 - 1;
                Gvar.var_456 = Gvar.var_456 + 1;
            }
            if (Gvar.var_199 == 3) {
                Gvar.var_455 = Gvar.var_455 + 1;
                Gvar.var_456 = Gvar.var_456 + 1;
            }
            if (Gvar.var_199 == 7) {
                Gvar.var_455 = Gvar.var_455 - 1;
                Gvar.var_456 = Gvar.var_456 - 1;
            }
            if (Gvar.var_199 == 9) {
                Gvar.var_455 = Gvar.var_455 + 1;
                Gvar.var_456 = Gvar.var_456 - 1;
            }
            Gvar.var_1896 = 1;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1896 = 0;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1270 = 1;
            if (Gvar.var_1893 == 0) {
                if (Gvar.var_71[Gvar.var_455][Gvar.var_456] == 0) {
                    if (Gvar.var_1270 == 1 && Gvar.var_1852 == 2) {
                        if (Gvar.nouryoku_disc_id == 112 || Gvar.nouryoku_disc_id == 394) {
                            await Func.func660();
                            Gvar.var_1897 = 1;
                        }
                    }
                    Gvar.var_455 = Gvar.var_1894;
                    Gvar.var_456 = Gvar.var_1895;
                    Gvar.var_1898 = 1;
                    break;
                }
                if (Gvar.var_82[Gvar.var_455][Gvar.var_456] > 0) {
                    Gvar.var_1191 = 0;
                    Gvar.var_1899 = Gvar.var_82[Gvar.var_455][Gvar.var_456];
                    if (Gvar.var_83[Gvar.var_1899].Var0 != 50) {
                        await Func.func416();
                        if (Gvar.var_1900 == 0) {
                            Adap.DSPLAY(141);
                        }
                        if (Gvar.var_1900 == 1) {
                            await Func.func660();
                            Gvar.var_1897 = 1;
                        }
                        break;
                    }
                }
            }
            if (Gvar.var_1893 == 1) {
                if (Gvar.var_82[Gvar.var_455][Gvar.var_456] > 0) {
                    Gvar.var_1899 = Gvar.var_82[Gvar.var_455][Gvar.var_456];
                    if (Gvar.var_83[Gvar.var_1899].Var0 != 50) {
                        await Func.func660();
                        Gvar.var_1897 = 1;
                        Gvar.var_1897 = 0;
                    }
                }
                if (Gvar.var_455 <= 0 || Gvar.var_455 >= Gvar.var_31 || Gvar.var_456 <= 0 || Gvar.var_456 >= Gvar.var_32) {
                    Gvar.var_455 = 0;
                    Gvar.var_456 = 0;
                    Gvar.var_1897 = 1;
                    break;
                }
            }
        }
        if (Gvar.var_1893 == 0 && Gvar.var_340 >= 800 && Gvar.var_340 < 900 && Gvar.var_1901 == 0) {
            if (Gvar.var_1898 == 1 || Gvar.var_1897 == 1) {
                Gvar.var_1902 = 0;
                if (Gvar.var_340 == 800 && Gvar.var_1898 == 1) {
                    Gvar.var_1902 = 1;
                }
                if (Gvar.var_1902 == 0) {
                    Gvar.var_1897 = 1;
                    await Func.func414(); // ヤバいもの関係の容量設定？？
                    return;
                }
            }
        }
        Gvar.var_1898 = 0;
        Gvar.var_1191 = 0;
        Gvar.var_1270 = 0;

        if (Gvar.var_1893 == 0 && Gvar.var_1897 == 1 && Gvar.var_1901 == 0) {
            Gvar.var_1897 = 0;
            Gvar.var_1901 = 0;
            await Func.func417();
            return;
        }
        if (Gvar.var_1893 == 1) {
            Gvar.var_1897 = 0;
            Gvar.var_1901 = 0;
            await Func.func418(); // 遠投状態(アヌビス神装備)でアイテムを投げた時の動作処理
            return;
        }
        Gvar.var_1901 = 0;
        Gvar.var_1897 = 0;
        Gvar.var_309 = Gvar.var_66;
        Gvar.var_310 = Gvar.var_67;
        Gvar.var_66 = Gvar.var_455;
        Gvar.var_67 = Gvar.var_456;
        await Func.func405();
        Gvar.var_66 = Gvar.var_309;
        Gvar.var_67 = Gvar.var_310;
        await Func.func724();

        if (Gvar.var_446 == 1) { // 投げて落ちた先が地面であれば
            Gvar.var_77[Gvar.var_448][Gvar.var_450] = Gvar.var_854;
            Gvar.var_78[Gvar.var_854].Var0 = Gvar.var_1846;
            Gvar.var_78[Gvar.var_854].Var1 = Gvar.var_448;
            Gvar.var_78[Gvar.var_854].Var2 = Gvar.var_450;
            Gvar.var_78[Gvar.var_854].Var3 = Gvar.var_1837;
            Gvar.var_78[Gvar.var_854].Var4 = Gvar.var_1835;
            Gvar.var_78[Gvar.var_854].Var5 = Gvar.var_1847;
            Gvar.var_78[Gvar.var_854].Var6 = Gvar.var_1848;
            Gvar.var_78[Gvar.var_854].Var7 = Gvar.var_1838;
            Gvar.var_78[Gvar.var_854].Var8 = Gvar.var_1849;
            Gvar.var_78[Gvar.var_854].Var9 = Gvar.var_71[Gvar.var_448][Gvar.var_450];
            Gvar.var_78[Gvar.var_854].Var10 = 1;
            Gvar.var_78[Gvar.var_854].Var11 = Gvar.var_1850;
            Gvar.var_78[Gvar.var_854].Var12 = Gvar.var_1851;
            Gvar.var_78[Gvar.var_854].Var13 = Gvar.var_1833;
            Gvar.var_78[Gvar.var_854].Var14 = Gvar.var_1834;
            Gvar.var_78[Gvar.var_854].Var15 = Gvar.var_1852;
            Gvar.var_78[Gvar.var_854].Var16 = Gvar.var_1853;
            Gvar.var_78[Gvar.var_854].Var17 = Gvar.var_1854;
            Gvar.var_78[Gvar.var_854].Var18 = Gvar.var_1855;
            Gvar.var_78[Gvar.var_854].Var19 = Gvar.var_1836;
            Gvar.var_78[Gvar.var_854].Var20 = Gvar.var_1856;
            Gvar.var_78[Gvar.var_854].Var21 = Gvar.var_1857;
            Gvar.var_78[Gvar.var_854].Var22 = Gvar.var_1858;
            Gvar.var_78[Gvar.var_854].Var23 = Gvar.var_1859;
            Gvar.var_78[Gvar.var_854].Var24 = Gvar.var_1860;
            Gvar.var_78[Gvar.var_854].Var25 = Gvar.var_1861;
            Gvar.var_78[Gvar.var_854].Var26 = Gvar.var_1862;
            Gvar.var_78[Gvar.var_854].Var27 = Gvar.var_1863;
            Gvar.var_78[Gvar.var_854].Var28 = Gvar.var_1864;
            Gvar.var_78[Gvar.var_854].Var29 = Gvar.var_1865;
            Gvar.belongings_item_list = Gvar.var_1846;
            Gvar.var_321 = Gvar.var_854;
            await Func.func398(); // 道具(メニュー画面/道具)へ直接表示されるアイテム表示
            await Func.setMessage("" + Gvar.disp_item_name + " は落ちた", "", 7, false, false, false);
        }
        if (Gvar.var_446 == 0) { // 投げて落ちた先が水面等おけない床であれば
            Gvar.var_78[Gvar.var_854].Var0 = Gvar.var_1846;
            Gvar.var_78[Gvar.var_854].Var1 = 0;
            Gvar.var_78[Gvar.var_854].Var2 = 0;
            Gvar.var_78[Gvar.var_854].Var3 = Gvar.var_1837;
            Gvar.var_78[Gvar.var_854].Var4 = Gvar.var_1835;
            Gvar.var_78[Gvar.var_854].Var5 = Gvar.var_1847;
            Gvar.var_78[Gvar.var_854].Var6 = Gvar.var_1848;
            Gvar.var_78[Gvar.var_854].Var7 = Gvar.var_1838;
            Gvar.var_78[Gvar.var_854].Var8 = Gvar.var_1849;
            Gvar.var_78[Gvar.var_854].Var9 = 0;
            Gvar.var_78[Gvar.var_854].Var10 = 0;
            Gvar.var_78[Gvar.var_854].Var11 = Gvar.var_1850;
            Gvar.var_78[Gvar.var_854].Var12 = Gvar.var_1851;
            Gvar.var_78[Gvar.var_854].Var13 = Gvar.var_1833;
            Gvar.var_78[Gvar.var_854].Var14 = Gvar.var_1834;
            Gvar.var_78[Gvar.var_854].Var15 = Gvar.var_1852;
            Gvar.var_78[Gvar.var_854].Var16 = Gvar.var_1853;
            Gvar.var_78[Gvar.var_854].Var17 = Gvar.var_1854;
            Gvar.var_78[Gvar.var_854].Var18 = Gvar.var_1855;
            Gvar.var_78[Gvar.var_854].Var19 = Gvar.var_1836;
            Gvar.var_78[Gvar.var_854].Var20 = Gvar.var_1856;
            Gvar.var_78[Gvar.var_854].Var21 = Gvar.var_1857;
            Gvar.var_78[Gvar.var_854].Var22 = Gvar.var_1858;
            Gvar.var_78[Gvar.var_854].Var23 = Gvar.var_1859;
            Gvar.var_78[Gvar.var_854].Var24 = Gvar.var_1860;
            Gvar.var_78[Gvar.var_854].Var25 = Gvar.var_1861;
            Gvar.var_78[Gvar.var_854].Var26 = Gvar.var_1862;
            Gvar.var_78[Gvar.var_854].Var27 = Gvar.var_1863;
            Gvar.var_78[Gvar.var_854].Var28 = Gvar.var_1864;
            Gvar.var_78[Gvar.var_854].Var29 = Gvar.var_1865;
            Gvar.belongings_item_list = Gvar.var_1846;
            Gvar.var_321 = Gvar.var_854;
            await Func.func398(); // 道具(メニュー画面/道具)へ直接表示されるアイテム表示
            for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
                Gvar.var_78[Gvar.var_854]["Var" + cnt2] = 0;
            }
            await Func.setMessage("" + Gvar.disp_item_name + " は",
                                    "地面に落ちて使い物にならなくなった", 7, false, false, false);
        }
        if (Gvar.var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
            await Func.func430();
        }
        await Func.func433(); // アイテム配列(所持アイテム)初期化関数
        await Func.AutoDraw(3);
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {func411}
