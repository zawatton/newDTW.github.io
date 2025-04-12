import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func462(this: any) {
        Adap.dbgprt(462);
        if (Gvar.var_1667 >= 1) {
            Gvar.belongings_item_list = Gvar.var_1667;
            Gvar.var_220 = Gvar.var_1668;
            Gvar.var_231 = Gvar.var_1669;
        }
        Gvar.item_class1 = 0;
        Gvar.var_2041 = 16;
        Gvar.var_2032 = 0;
        if (Gvar.var_220 == 0 && Gvar.var_231 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
            if (Gvar.belongings_item_list < 100) {
                Gvar.item_class1 = 0;
                Gvar.item_class2 = 3;
                Gvar.var_222 = 5;
            }
            if (Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 400) {
                await Func.func426();
                await Func.func427();
                await Func.func428();
                Gvar.item_class2 = 5;
                if (Gvar.var_225 == Gvar.var_553) {
                    Gvar.var_2032 = 1;
                    Gvar.item_class2 = 6;
                }
                if (Gvar.var_225 == Gvar.var_554) {
                    Gvar.var_2032 = 2;
                    Gvar.item_class2 = 6;
                }
                if (Gvar.var_225 == Gvar.var_555) {
                    Gvar.var_2032 = 3;
                    Gvar.item_class2 = 6;
                }
                Gvar.item_class1 = 1;
            }
            if (Gvar.belongings_item_list >= 400 && Gvar.belongings_item_list < 500) {
                Gvar.item_class1 = 2;
                Gvar.item_class2 = 6;
            }
            if (Gvar.belongings_item_list >= 500 && Gvar.belongings_item_list < 600) {
                Gvar.item_class1 = 3;
                Gvar.item_class2 = 4;
            }
            if (Gvar.belongings_item_list >= 600 && Gvar.belongings_item_list < 700) {
                Gvar.item_class1 = 4;
                Gvar.item_class2 = 4;
            }
            if (Gvar.belongings_item_list >= 700 && Gvar.belongings_item_list < 750) {
                Gvar.item_class1 = 3;
                Gvar.item_class2 = 4;
            }
            if (Gvar.belongings_item_list >= 800 && Gvar.belongings_item_list < 900) {
                Gvar.item_class1 = 5;
                Gvar.item_class2 = 5;
            }
            if (Gvar.belongings_item_list >= 750 && Gvar.belongings_item_list < 800) {
                Gvar.item_class1 = 6;
                Gvar.item_class2 = 4;
            }
            if (Gvar.belongings_item_list >= 900 && Gvar.belongings_item_list < 1000) {
                Gvar.item_class1 = 6;
                Gvar.item_class2 = 4;
            }
            if (Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0) {
                Gvar.var_2033 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
                if (Gvar.var_78[Gvar.var_2033].Var0 != 1) {
                    Gvar.item_class2 = Gvar.item_class2 + 1;
                }
            }
        }
        if (Gvar.var_220 == 0 && Gvar.var_231 == 1) { // 道具画面(メニュー画面/道具)が閉じている状態
            if (Gvar.belongings_item_list < 100) {
                Gvar.item_class1 = 0;
                Gvar.item_class2 = 3;
            }
            if (Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 400) {
                Gvar.item_class1 = 1;
                Gvar.item_class2 = 5;
            }
            if (Gvar.belongings_item_list >= 400 && Gvar.belongings_item_list < 500) {
                Gvar.item_class1 = 2;
                Gvar.item_class2 = 6;
            }
            if (Gvar.belongings_item_list >= 500 && Gvar.belongings_item_list < 600) {
                Gvar.item_class1 = 3;
                Gvar.item_class2 = 5;
            }
            if (Gvar.belongings_item_list >= 600 && Gvar.belongings_item_list < 700) {
                Gvar.item_class1 = 4;
                Gvar.item_class2 = 5;
            }
            if (Gvar.belongings_item_list >= 700 && Gvar.belongings_item_list < 750) {
                Gvar.item_class1 = 3;
                Gvar.item_class2 = 5;
            }
            if (Gvar.belongings_item_list >= 800 && Gvar.belongings_item_list < 900) {
                Gvar.item_class1 = 5;
                Gvar.item_class2 = 6;
            }
            if (Gvar.belongings_item_list >= 750 && Gvar.belongings_item_list < 800) {
                Gvar.item_class1 = 6;
                Gvar.item_class2 = 5;
            }
            if (Gvar.belongings_item_list >= 900 && Gvar.belongings_item_list < 1000) {
                Gvar.item_class1 = 6;
                Gvar.item_class2 = 5;
            }
        }
        if (Gvar.var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
            if (Gvar.belongings_item_list < 100) {
                Gvar.item_class1 = 0;
                Gvar.item_class2 = 4;
                Gvar.var_222 = 5;
            }
            if (Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 400) {
                Gvar.item_class1 = 1;
                Gvar.item_class2 = 5;
                Gvar.var_222 = 3;
            }
            if (Gvar.belongings_item_list >= 400 && Gvar.belongings_item_list < 500) {
                Gvar.item_class1 = 2;
                Gvar.item_class2 = 6;
                Gvar.var_222 = 2;
            }
            if (Gvar.belongings_item_list >= 500 && Gvar.belongings_item_list < 600) {
                Gvar.item_class1 = 3;
                Gvar.item_class2 = 5;
            }
            if (Gvar.belongings_item_list >= 600 && Gvar.belongings_item_list < 700) {
                Gvar.item_class1 = 4;
                Gvar.item_class2 = 5;
            }
            if (Gvar.belongings_item_list >= 700 && Gvar.belongings_item_list < 750) {
                Gvar.item_class1 = 3;
                Gvar.item_class2 = 5;
            }
            if (Gvar.belongings_item_list >= 800 && Gvar.belongings_item_list < 900) {
                Gvar.item_class1 = 5;
                Gvar.item_class2 = 5;
            }
            if (Gvar.belongings_item_list >= 750 && Gvar.belongings_item_list < 800) {
                Gvar.item_class1 = 6;
                Gvar.item_class2 = 5;
            }
            if (Gvar.belongings_item_list >= 900 && Gvar.belongings_item_list < 1000) {
                Gvar.item_class1 = 6;
                Gvar.item_class2 = 5;
            }
        }
        Gvar.var_2034 = 0;
        if (Gvar.var_862[Gvar.belongings_item_list][0] == 0 && Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 400) {
            Gvar.var_2034 = 1;
            Gvar.item_class2++;
        }
        if (Gvar.var_862[Gvar.belongings_item_list][0] == 0 && Gvar.belongings_item_list >= 500 && Gvar.belongings_item_list < 600) {
            Gvar.var_2034 = 1;
            Gvar.item_class2++;
        }
        if (Gvar.var_862[Gvar.belongings_item_list][0] == 0 && Gvar.belongings_item_list >= 801 && Gvar.belongings_item_list < 900) {
            Gvar.var_2034 = 1;
            Gvar.item_class2++;
        }
        // No = 800 エニグマの紙 かつ 99階でなければ
        if (Gvar.belongings_item_list == 800 && Gvar.dungeon_number != 99) {
            Gvar.var_2034 = 1;
            Gvar.item_class2++;
            Gvar.var_2042 = Gvar.var_225;
        }
        await Func.func051(); // キー入力待ち処理
        if (Gvar.var_1667 >= 1) {
            Gvar.var_1668 = 0;
            Gvar.var_1669 = 0;
            Gvar.var_1667 = 0;
            Gvar.var_222 = 8;
        }
        await Func.func463();
}

export {func462}
