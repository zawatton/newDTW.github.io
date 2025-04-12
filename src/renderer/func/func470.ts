import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

async function func470(this: any) {
        Adap.dbgprt(470);

        // No = 805 グッチョの死体の動作処理
        // 入れたdiscに応じてBGMがかかる
        if (Gvar.yabaimono_id == 805) {
            await Music.func115(); // グッチョの死体へdiscを入れた際の選曲処理
            return;
        }

        // No = 806 カルネの死体の動作処理
        // 入れたアイテムが消える
        if (Gvar.yabaimono_id == 806) {
            if (Gvar.var_233[Gvar.var_225].Var11 == 1) {
                Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
                await Func.func492(); // アイテムリスト呼び出し
                Gvar.var_482 = 0;
                Gvar.var_482 = (Gvar.var_233[Gvar.var_225].Var3 + Gvar.var_233[Gvar.var_225].Var4) * 50;
                if (Gvar.var_233[Gvar.var_225].Var19 > 1) {
                    Gvar.var_482 = Gvar.var_233[Gvar.var_225].Var19 * 500 + Gvar.var_482;
                }
                Gvar.count_buying_price = Gvar.count_buying_price + Gvar.buying_price + Gvar.var_482;
            }
            Gvar.var_233[Gvar.var_1876].Var8 = Gvar.var_233[Gvar.var_1876].Var8 - 1;
            for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
                Gvar.var_486[Gvar.var_682][Gvar.var_683][cnt2] = 0;
            }
            return;
        }

        // No = 818 は無い。なんの機能？？
        if (Gvar.yabaimono_id == 818) {
            if (Gvar.var_407 == 1 && Gvar.var_536 == 1) {
                await Func.func912();
                if (Gvar.var_233[Gvar.var_225].Var11 == 1) {
                    Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
                    await Func.func492(); // アイテムリスト呼び出し
                    Gvar.var_482 = 0;
                    Gvar.var_482 = (Gvar.var_233[Gvar.var_225].Var3 + Gvar.var_233[Gvar.var_225].Var4) * 50;
                    if (Gvar.var_233[Gvar.var_225].Var19 > 1) {
                        Gvar.var_482 = Gvar.var_233[Gvar.var_225].Var19 * 500 + Gvar.var_482;
                    }
                    Gvar.count_buying_price = Gvar.count_buying_price + Gvar.buying_price + Gvar.var_482;
                }
                Gvar.var_233[Gvar.var_1876].Var8 = Gvar.var_233[Gvar.var_1876].Var8 - 1;
                for (let cnt3 = 0; cnt3 < 30; ++cnt3) {
                    Gvar.var_486[Gvar.var_682][Gvar.var_683][cnt3] = 0;
                }
            }
            return;
        }
        // 
        if (Gvar.yabaimono_id == 815 && Gvar.var_233[Gvar.var_1876].Var7 >= 1) {
            Gvar.var_2088 = 0;
            Gvar.var_233[Gvar.var_1876].Var8 = Gvar.var_233[Gvar.var_1876].Var8 + 1;
            Gvar.var_233[Gvar.var_1876].Var7 = Gvar.var_233[Gvar.var_1876].Var7 - 1;
            Gvar.var_2089 = Gvar.var_683 + 1;
            for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
                Gvar.var_486[Gvar.var_682][Gvar.var_2089][cnt2] = Gvar.var_486[Gvar.var_682][Gvar.var_683][cnt2];
            }
            return;
        }
        if (Gvar.yabaimono_id == 807) {
            if (Gvar.var_486[Gvar.var_682][Gvar.var_683][0] < 100 || Gvar.var_486[Gvar.var_682][Gvar.var_683][0] >= 400) {
                return;
            }
            if (Gvar.var_486[Gvar.var_682][Gvar.var_683][0] == 100 || Gvar.var_486[Gvar.var_682][Gvar.var_683][0] == 398 || Gvar.var_486[Gvar.var_682][Gvar.var_683][0] == 108 || Gvar.var_486[Gvar.var_682][Gvar.var_683][0] == 110 || Gvar.var_486[Gvar.var_682][Gvar.var_683][0] == 113 || Gvar.var_486[Gvar.var_682][Gvar.var_683][0] == 118 || Gvar.var_486[Gvar.var_682][Gvar.var_683][0] == 123) {
                return;
            }
            Gvar.var_2089 = Gvar.var_683 - 1;
            if (Gvar.var_2089 <= 0) {
                return;
            }
            Gvar.var_2090 = Gvar.var_2089;
            Gvar.var_2091 = Gvar.var_683;
            if (Gvar.var_486[Gvar.var_682][Gvar.var_2089][0] < 100 || Gvar.var_486[Gvar.var_682][Gvar.var_2089][0] >= 400) {
                return;
            }
            Gvar.base_disc_list = Gvar.var_486[Gvar.var_682][Gvar.var_2090][0];
            Gvar.with_disc_list = Gvar.var_486[Gvar.var_682][Gvar.var_2091][0];
            Gvar.belongings_item_list = Gvar.var_486[Gvar.var_682][Gvar.var_2090][0];
            await Func.func492(); // アイテムリスト呼び出し
            Gvar.var_2092 = Gvar.var_486[Gvar.var_682][Gvar.var_2091][19];
            Gvar.var_2093 = 20;
            if (Gvar.var_486[Gvar.var_682][Gvar.var_2090][5] != 0) {
                for (let cnt3 = 0; cnt3 < Gvar.var_2092; ++cnt3) {
                    Gvar.var_2094 = 20;
                    for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                        Gvar.var_2095 = 0;
                        if (Gvar.var_486[Gvar.var_682][Gvar.var_2090][Gvar.var_2094] == Gvar.var_486[Gvar.var_682][Gvar.var_2091][Gvar.var_2093]) {
                            Gvar.var_2095 = 1;
                            break;
                        }
                        if (Gvar.var_486[Gvar.var_682][Gvar.var_2090][Gvar.var_2094] == 0) {
                            Gvar.var_2096 = Gvar.var_2094;
                            break;
                        }
                        Gvar.var_2094 = Gvar.var_2094 + 1;
                    }
                    if (Gvar.var_2095 == 0) {
                        Gvar.var_486[Gvar.var_682][Gvar.var_2090][Gvar.var_2096] = Gvar.var_486[Gvar.var_682][Gvar.var_2091][Gvar.var_2093];
                        Gvar.var_486[Gvar.var_682][Gvar.var_2090][19] = Gvar.var_486[Gvar.var_682][Gvar.var_2090][19] + 1;
                        Gvar.var_486[Gvar.var_682][Gvar.var_2090][5] = Gvar.var_486[Gvar.var_682][Gvar.var_2090][5] - 1;
                    }
                    if (Gvar.var_486[Gvar.var_682][Gvar.var_2090][5] == 0) {
                        break;
                    }
                    Gvar.var_2093 = Gvar.var_2093 + 1;
                }
            }
            if (Gvar.dungeon_number != 5) {
                Gvar.var_486[Gvar.var_682][Gvar.var_2090][4] = Gvar.var_486[Gvar.var_682][Gvar.var_2090][4] + Gvar.var_486[Gvar.var_682][Gvar.var_2091][4];
                if (Gvar.var_486[Gvar.var_682][Gvar.var_2090][4] >= 99) {
                    Gvar.var_486[Gvar.var_682][Gvar.var_2090][4] = 99;
                }
            }
            if (Gvar.var_486[Gvar.var_682][Gvar.var_2091][12] == 1 || Gvar.var_486[Gvar.var_682][Gvar.var_2090][12] == 1) {
                Gvar.var_486[Gvar.var_682][Gvar.var_2090][12] = 1;
            }
            if (Gvar.var_486[Gvar.var_682][Gvar.var_2091][12] == 2 || Gvar.var_486[Gvar.var_682][Gvar.var_2090][12] == 2) {
                Gvar.var_486[Gvar.var_682][Gvar.var_2090][12] = 2;
            }
            if (Gvar.var_486[Gvar.var_682][Gvar.var_2091][11] == 1) {
                Gvar.belongings_item_list = Gvar.var_486[Gvar.var_682][Gvar.var_2091][0];
                await Func.func492(); // アイテムリスト呼び出し
                Gvar.var_106 = 1;
                Gvar.var_482 = 0;
                Gvar.var_482 = (Gvar.var_486[Gvar.var_682][Gvar.var_2091][3] + Gvar.var_486[Gvar.var_682][Gvar.var_2091][4]) * 50;
                if (Gvar.var_486[Gvar.var_682][Gvar.var_2091][19] > 1) {
                    Gvar.var_482 = Gvar.var_486[Gvar.var_682][Gvar.var_2091][19] * 500 + Gvar.var_482;
                }
                Gvar.buying_price = Gvar.buying_price + Gvar.var_482;
                Gvar.count_buying_price = Gvar.count_buying_price + Gvar.buying_price;
            }
            Gvar.var_486[Gvar.var_682][Gvar.var_2090][14] = 1;
            Gvar.belongings_item_list = Gvar.var_486[Gvar.var_682][Gvar.var_2090][0];
            Gvar.var_2097 = 0;
            // No = 100:ｽﾀｰ･ﾌﾟﾗﾁﾅのDISC、No = 111:ｻﾞ･ﾜｰﾙﾄﾞのDISC
            if (Gvar.base_disc_list == 100 && Gvar.with_disc_list == 111) {
                Gvar.var_2097 = 1;
                // No = 398:ｽﾀﾌﾟﾗｻﾞﾜｰﾙﾄﾞのDISC
                Gvar.var_486[Gvar.var_682][Gvar.var_2090][0] = 398;
                Gvar.var_862[398][0] = 1;
            }
            // No = 112:ｷﾗｰ･ｸｨｰﾝのDISC、No = 204:ｼｱｰﾊｰﾄｱﾀｯｸのDISC
            if (Gvar.base_disc_list == 112 && Gvar.with_disc_list == 204) {
                Gvar.var_2097 = 2;
                // No = 395:ﾊﾞｲﾂｧ･ﾀﾞｽﾄのDISC
                Gvar.var_486[Gvar.var_682][Gvar.var_2090][0] = 395;
                Gvar.var_862[395][0] = 1;
                Gvar.var_486[Gvar.var_682][Gvar.var_2090][20] = 395;
            }
            // No = 304:ｳｪｻﾞｰﾘﾎﾟｰﾄのDISC、No = 114:ﾎﾜｲﾄｽﾈｲｸのDISC
            if (Gvar.base_disc_list == 304 && Gvar.with_disc_list == 114) {
                Gvar.var_2097 = 4;
                // No = 397:ﾍﾋﾞｰ･ｳｪｻﾞｰのDISC
                Gvar.var_486[Gvar.var_682][Gvar.var_2090][0] = 397;
                Gvar.var_862[397][0] = 1;
                Gvar.var_486[Gvar.var_682][Gvar.var_2090][20] = 397;
            }
            // No = 114:ﾎﾜｲﾄｽﾈｲｸのDISC
            if (Gvar.base_disc_list == 114) {
                Gvar.var_2098 = 21;
                Gvar.var_2099 = 0;
                for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                    // No = 107:ﾃﾞｽ･13のDISC、No = 116:ﾊｰﾐｯﾄﾊﾟｰﾌﾟﾙのDISC、No = 201:ｲｴﾛｰﾃﾝﾊﾟﾗﾝｽのDISC、No = 202:ﾎﾜｲﾄｱﾙﾊﾞﾑのDISC
                    if (Gvar.var_486[Gvar.var_682][Gvar.var_2090][Gvar.var_2098] == 107 || Gvar.var_486[Gvar.var_682][Gvar.var_2090][Gvar.var_2098] == 116 || Gvar.var_486[Gvar.var_682][Gvar.var_2090][Gvar.var_2098] == 201 || Gvar.var_486[Gvar.var_682][Gvar.var_2090][Gvar.var_2098] == 202) {
                        Gvar.var_2099++;
                    }
                    Gvar.var_2098++;
                }
                if (Gvar.var_2099 >= 4) {
                    // No = 396:ﾒｲﾄﾞ･ｲﾝ･ﾍﾌﾞﾝのDISC
                    Gvar.var_486[Gvar.var_682][Gvar.var_2090][0] = 396;
                    Gvar.var_862[396][0] = 1;
                    Gvar.var_486[Gvar.var_682][Gvar.var_2090][20] = 396;
                }
            }
            if (Gvar.var_486[Gvar.var_682][Gvar.var_2091][11] == 1) {
                Gvar.var_106 = 1;
                Gvar.belongings_item_list = Gvar.var_486[Gvar.var_682][Gvar.var_2091][0];
                await Func.func492(); // アイテムリスト呼び出し
                Gvar.var_482 = 0;
                Gvar.var_482 = (Gvar.var_486[Gvar.var_682][Gvar.var_2091][3] + Gvar.var_486[Gvar.var_682][Gvar.var_2091][4]) * 50;
                if (Gvar.var_486[Gvar.var_682][Gvar.var_2091][19] > 1) {
                    Gvar.var_482 = Gvar.var_486[Gvar.var_682][Gvar.var_2091][19] * 500 + Gvar.var_482;
                }
                Gvar.buying_price = Gvar.buying_price + Gvar.var_482;
                Gvar.count_buying_price = Gvar.count_buying_price + Gvar.buying_price;
            }
            Gvar.var_2100 = Gvar.var_225;
            Gvar.var_225 = Gvar.var_2091;
            await Func.func434();
            Gvar.var_233[Gvar.var_1876].Var7 = Gvar.var_233[Gvar.var_1876].Var7 - 1;
            Gvar.var_225 = Gvar.var_2100;
            return;
        }
        return;
}

export {func470}
