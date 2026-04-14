/**
 * func0897 — func897 不明
 *
 * (org原典: newDTW_func8)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 店のアイテムを購入せずに帰還した際、NPC マリリン・マンソンの登場処理
// 旧 func838
async function func0897(this: any) {
    Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
    Gvar.var_1470 = 1;
    if (Gvar.var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
        Gvar.belongings_item_list = Gvar.var_233[Gvar.var_1056].Var0;
        Gvar.var_1471 = Gvar.var_233[Gvar.var_1056].Var0;
        Gvar.disc_rarity = Gvar.var_233[Gvar.var_1056].Var13;
        Gvar.var_1249 = Gvar.var_233[Gvar.var_1056].Var13;
    }
    if (Gvar.var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
        Gvar.belongings_item_list = Gvar.var_486[Gvar.var_485][Gvar.var_484][0];
        Gvar.var_1471 = Gvar.var_486[Gvar.var_485][Gvar.var_484][0];
        Gvar.disc_rarity = Gvar.var_486[Gvar.var_485][Gvar.var_484][13];
        Gvar.var_1249 = Gvar.var_486[Gvar.var_485][Gvar.var_484][13];
    }
    await Func.func492(); // アイテムリスト呼び出し
    Gvar.var_3505 = Gvar.item_name;
    Gvar.var_225 = Gvar.var_3503;
    if (Gvar.var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
        await Func.func430();
    }
    await Func.func433(); // アイテム配列(所持アイテム)初期化関数
    if (Gvar.var_3502 == 0) {
        await Func.AutoDraw(20);
    }
    if (Gvar.var_3502 == 1) {
        await Func.AutoDraw(5);
    }
    // 店の商品を持っているか否かでメッセージを設定
    if (Gvar.var_3502 == 0) {
        await Func.setMessage("ﾏﾘﾘﾝﾏﾝｿﾝ「店ノ売リ物ヲ持ッテイルナ？」", "", 8, false, false, true);
    }
    if (Gvar.var_3502 == 1) {
        await Func.setMessage("ﾏﾘﾘﾝﾏﾝｿﾝ「マダ持ッテイルナ？」", "", 8, false, false, true);
    }
    await Func.AutoDraw(15);

    await Func.setMessage("ﾏﾘﾘﾝﾏﾝｿﾝ「返シテモラウ！」", "", 8, false, false, true);

    Gvar.var_389 = 2;
    Gvar.var_199 = 6;
    Gvar.var_1470 = 2;
    await Func.AutoDraw(2);
    Gvar.var_747 = 1;
    Gvar.var_1470 = 3;
    await Func.AutoDraw(15);
    Gvar.var_389 = 0;
    Gvar.var_1470 = 4;
    await Func.AutoDraw(2);
    Gvar.var_1470 = 1;

    await Func.setMessage("" + Gvar.var_3505 + "を奪われた", "", 8, false, false, false);
    await Func.AutoDraw(10);
    return;
}

export {func0897}
