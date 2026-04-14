/**
 * func506 — func506 discの発動をした際に、修正値の減少させる(0の時はdisc消滅させる)関数
 *
 * (org原典: newDTW_func5)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func506(this: any) {
        Adap.dbgprt(506);
        Gvar.var_2254 = 0;
        // 装備discの場合
        if (Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 400) {
            
            if (Gvar.var_220 == 0 && Gvar.var_234 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                Gvar.var_570 = Gvar.var_233[Gvar.var_225].Var13;
                Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
                await Func.func492(); // アイテムリスト呼び出し
                Gvar.var_2255 = Gvar.item_name;
                // 修正値が無い場合は、発動をした時に発動したdiscを消去
                if (Gvar.var_233[Gvar.var_225].Var4 == 0 || Gvar.var_233[Gvar.var_225].Var14 == 0) {
                    
                    if (Gvar.var_233[Gvar.var_225].Var11 == 1) { // お店で発動した場合？
                        Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
                        await Func.func492(); // アイテムリスト呼び出し
                        Gvar.var_106 = 1;
                        Gvar.count_buying_price = Gvar.count_buying_price + Gvar.buying_price;
                    }
                    await Func.func430();
                    await Func.func433(); // アイテム配列(所持アイテム)初期化関数
                    Gvar.var_2254 = 1;
                    return;
                }
                // 修正値が1以上の際は、発動をした時に1引く
                if (Gvar.var_233[Gvar.var_225].Var4 >= 1) {
                    Gvar.var_233[Gvar.var_225].Var4 = Gvar.var_233[Gvar.var_225].Var4 - 1;
                    // Gvar.var_233[Gvar.var_225].Var4 = Gvar.var_233[Gvar.var_225].Var4; // デバッグ用 発動しても修正値減らない
                    
                    if (Gvar.var_233[Gvar.var_225].Var11 == 1) { // お店で発動した場合？
                        Gvar.var_106 = 1;
                        Gvar.count_buying_price = Gvar.count_buying_price + 50;
                    }
                    await Func.func426();
                    if (Gvar.var_553 == Gvar.var_225) {
                        Gvar.var_580 = Gvar.var_580 - 1;
                        Gvar.var_894 = Gvar.var_894 - 1;
                    }
                    await Func.func427();
                    if (Gvar.var_554 == Gvar.var_225) {
                        Gvar.var_581 = Gvar.var_581 - 1;
                        Gvar.var_895 = Gvar.var_895 - 1;
                    }
                    return;
                }
            }
            if (Gvar.var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
                Gvar.var_570 = Gvar.var_486[Gvar.var_682][Gvar.var_225][13];
                
                Gvar.belongings_item_list = Gvar.var_486[Gvar.var_682][Gvar.var_225][0];
                
                await Func.func492(); // アイテムリスト呼び出し
                
                Gvar.var_2255 = Gvar.item_name;

                if (Gvar.var_486[Gvar.var_682][Gvar.var_225][4] == 0 || Gvar.var_486[Gvar.var_682][Gvar.var_225][14] == 0) {
                    
                    if (Gvar.var_486[Gvar.var_682][Gvar.var_225][11] == 1) { // お店で発動した場合？
                        Gvar.belongings_item_list = Gvar.var_486[Gvar.var_682][Gvar.var_225][0];
                        await Func.func492(); // アイテムリスト呼び出し
                        Gvar.var_106 = 1;
                        Gvar.count_buying_price = Gvar.count_buying_price + Gvar.buying_price;
                    }

                    Gvar.var_1876 = Gvar.var_2256;
                    await Func.func433(); // アイテム配列(所持アイテム)初期化関数
                    Gvar.var_2254 = 1;
                    Gvar.var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
                    return;
                }
                if (Gvar.var_486[Gvar.var_682][Gvar.var_225][4] >= 1) {
                    Gvar.var_486[Gvar.var_682][Gvar.var_225][4] = Gvar.var_486[Gvar.var_682][Gvar.var_225][4] - 1;
                    // Gvar.var_486[Gvar.var_682][Gvar.var_225][4] = Gvar.var_486[Gvar.var_682][Gvar.var_225][4]; // デバッグ用 発動しても修正値減らない

                    if (Gvar.var_486[Gvar.var_682][Gvar.var_225][11] == 1) { // お店で発動した場合？
                        Gvar.var_106 = 1;
                        Gvar.count_buying_price = Gvar.count_buying_price + 50;
                    }
                    
                    Gvar.var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
                    return;
                }
            }
            if (Gvar.var_234 == 1) {
                Gvar.var_570 = Gvar.var_78[Gvar.var_321].Var13;
                Gvar.belongings_item_list = Gvar.var_78[Gvar.var_321].Var0;
                await Func.func492(); // アイテムリスト呼び出し
                Gvar.var_2255 = Gvar.item_name;
                if (Gvar.var_78[Gvar.var_321].Var4 == 0 || Gvar.var_78[Gvar.var_321].Var14 == 0) {

                    if (Gvar.var_78[Gvar.var_321].Var11 == 1) { // お店で発動した場合？
                        Gvar.belongings_item_list = Gvar.var_78[Gvar.var_321].Var0;
                        await Func.func492(); // アイテムリスト呼び出し
                        Gvar.var_106 = 1;
                        Gvar.count_buying_price = Gvar.count_buying_price + Gvar.buying_price;
                    }
                    await Func.func479();
                    Gvar.var_2254 = 1;
                    Gvar.var_234 = 0;
                    return;
                }
                if (Gvar.var_78[Gvar.var_321].Var4 >= 1) {
                    Gvar.var_78[Gvar.var_321].Var4 = Gvar.var_78[Gvar.var_321].Var4 - 1;
                    // Gvar.var_78[Gvar.var_321].Var4 = Gvar.var_78[Gvar.var_321].Var4; // デバッグ用 発動しても修正値減らない

                    if (Gvar.var_78[Gvar.var_321].Var11 == 1) { // お店で発動した場合？
                        Gvar.var_106 = 1;
                        Gvar.count_buying_price = Gvar.count_buying_price + 50;
                    }
                    Gvar.var_234 = 0;
                    return;
                }
            }
        }
        // 射撃discの場合
        if (Gvar.belongings_item_list >= 400 && Gvar.belongings_item_list < 500) {
            if (Gvar.var_220 == 0 && Gvar.var_234 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                if (Gvar.var_233[Gvar.var_225].Var3 <= 1) {
                    Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
                    await Func.func492(); // アイテムリスト呼び出し
                    Gvar.var_2255 = Gvar.item_name;

                    if (Gvar.var_233[Gvar.var_225].Var11 == 1) { // お店で発動した場合？
                        Gvar.var_106 = 1;
                        Gvar.count_buying_price = Gvar.count_buying_price + Gvar.buying_price;
                    }
                    await Func.func430();
                    await Func.func433(); // アイテム配列(所持アイテム)初期化関数
                    await Func.func507(); // スタンドパワーが力尽きて消滅した時の表示
                    return;
                }
                if (Gvar.var_233[Gvar.var_225].Var3 >= 2) {
                    Gvar.var_233[Gvar.var_225].Var3 = Gvar.var_233[Gvar.var_225].Var3 - 1;

                    if (Gvar.var_233[Gvar.var_225].Var11 == 1) { // お店で発動した場合？
                        Gvar.var_106 = 1;
                        Gvar.count_buying_price = Gvar.count_buying_price + 50;
                    }
                    return;
                }
            }
            if (Gvar.var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
                if (Gvar.var_486[Gvar.var_682][Gvar.var_225][3] <= 1) {
                    Gvar.belongings_item_list = Gvar.var_486[Gvar.var_682][Gvar.var_225][0];
                    await Func.func492(); // アイテムリスト呼び出し
                    Gvar.var_2255 = Gvar.item_name;

                    if (Gvar.var_486[Gvar.var_682][Gvar.var_225][11] == 1) { // お店で発動した場合？
                        Gvar.var_106 = 1;
                        Gvar.count_buying_price = Gvar.count_buying_price + Gvar.buying_price;
                    }
                    Gvar.var_1876 = Gvar.var_2256;
                    await Func.func433(); // アイテム配列(所持アイテム)初期化関数
                    await Func.func507(); // スタンドパワーが力尽きて消滅した時の表示
                    Gvar.var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
                    return;
                }
                if (Gvar.var_486[Gvar.var_682][Gvar.var_225][3] >= 2) {
                    Gvar.var_486[Gvar.var_682][Gvar.var_225][3] = Gvar.var_486[Gvar.var_682][Gvar.var_225][3] - 1;

                    if (Gvar.var_486[Gvar.var_682][Gvar.var_225][11] == 1) { // お店で発動した場合？
                        Gvar.var_106 = 1;
                        Gvar.count_buying_price = Gvar.count_buying_price + 50;
                    }
                    Gvar.var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
                    return;
                }
            }
            if (Gvar.var_234 == 1) {
                if (Gvar.var_78[Gvar.var_321].Var3 <= 1) {
                    Gvar.belongings_item_list = Gvar.var_78[Gvar.var_321].Var0;
                    await Func.func492(); // アイテムリスト呼び出し
                    Gvar.var_2255 = Gvar.item_name;

                    if (Gvar.var_78[Gvar.var_321].Var11 == 1) { // お店で発動した場合？
                        Gvar.var_106 = 1;
                        Gvar.count_buying_price = Gvar.count_buying_price + Gvar.buying_price;
                    }
                    await Func.func479();
                    await Func.func507(); // スタンドパワーが力尽きて消滅した時の表示
                    Gvar.var_234 = 0;
                    return;
                }
                if (Gvar.var_78[Gvar.var_321].Var3 >= 2) {
                    Gvar.var_78[Gvar.var_321].Var3 = Gvar.var_78[Gvar.var_321].Var3 - 1;

                    if (Gvar.var_78[Gvar.var_321].Var11 == 1) { // お店で発動した場合？
                        Gvar.var_106 = 1;
                        Gvar.count_buying_price = Gvar.count_buying_price + 50;
                    }
                    Gvar.var_234 = 0;
                    return;
                }
            }
        }
        return;
}

export {func506}
