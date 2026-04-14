/**
 * item106 — No = 106 クレイジーDの発動処理
 *
 * 各スタンドの発動能力設定。
 *
 * (org原典: newDTW_item(スタンドdisc))
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 106 クレイジーDの発動処理
async function item106(this: any) {
        if (Gvar.var_220 == 0 && Gvar.var_234 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
            Gvar.var_570 = Gvar.var_233[Gvar.var_225].Var13;
        }
        if (Gvar.var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
            Gvar.var_570 = Gvar.var_486[Gvar.var_682][Gvar.var_225][13];
        }
        if (Gvar.var_234 == 1) {
            Gvar.var_570 = Gvar.var_78[Gvar.var_321].Var13;
        }
        await Func.setMessage("ベースとなるアイテムを選んでください",
                               "", 7, true, false, false);
        await Func.AutoDraw(4);

        Gvar.var_2286 = Gvar.var_225;
        Gvar.var_198 = 0; // メッセージウィンドウ閉じる
        Gvar.var_1240 = 1;
        if (Gvar.var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
            Gvar.var_2287 = 1;
        }
        Gvar.item_page_number = 1;
        Gvar.Y_axis_item_position = 45;
        Gvar.var_225 = 1;
        Gvar.var_223 = Gvar.var_224 + 10;
        Gvar.var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
        await Func.func051(); // キー入力待ち処理
        Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
        await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
        return;
}

export {item106}
