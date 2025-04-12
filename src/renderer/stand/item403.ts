import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 403 セックス・ピストルズの発動処理
async function item403(this: any) {
        await Func.setMessage1("どれを食べますか？",
                               "", 7, true, false, false);
        Gvar.var_2300 = Gvar.var_225;
        Gvar.var_2301 = 0;
        if (Gvar.var_220 != 0) {
            Gvar.var_2301 = 1;
        }
        if (Gvar.var_234 != 0) {
            Gvar.var_2301 = 2;
        }
        Gvar.var_198 = 0; // メッセージウィンドウ閉じる
        Gvar.var_2004 = 1;
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

export {item403}
