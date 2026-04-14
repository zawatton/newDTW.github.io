/**
 * func774 — func774 不明
 *
 * (org原典: newDTW_func7)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 旧 func774
async function func774(this: any) {
        Adap.dbgprt(774);
        Gvar.var_2001 = 1;
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

export {func774}
