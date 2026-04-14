/**
 * func408 — func408 不明
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func408(this: any) {
        Adap.dbgprt(408);
        Gvar.var_1880 = 0;
        if (Gvar.var_233[Gvar.var_225].Var0 >= 805 && Gvar.var_233[Gvar.var_225].Var0 < 850) {
            Gvar.var_1880 = 2;
        }
        if (Gvar.var_233[Gvar.var_225].Var0 >= 850 && Gvar.var_233[Gvar.var_225].Var0 < 900) {
            Gvar.var_1880 = 1;
        }
        if (Gvar.var_233[Gvar.var_225].Var8 == 0) {
            Gvar.var_1880 = 1;
        }
        Gvar.var_1881 = (Gvar.var_233[Gvar.var_225].Var7 + Gvar.var_233[Gvar.var_225].Var8) * 20 + 37 + 30;
        Gvar.var_1882 = Gvar.var_225;
        Gvar.var_1883 = Gvar.Y_axis_item_position;

        Gvar.var_220 = 1; // 道具画面(メニュー画面/道具)呼び出し確認変数？
        
        Gvar.var_682 = Gvar.var_233[Gvar.var_225].Var6;
        Gvar.var_1876 = Gvar.var_225;
        Gvar.var_1884 = Gvar.var_233[Gvar.var_1876].Var8 + 10;
        Gvar.var_225 = 1;
        Gvar.Y_axis_item_position = 45;
        Gvar.var_1885 = Gvar.item_page_number;
        Gvar.item_page_number = 1;
        await Func.func051(); // キー入力待ち処理
        await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
        return;
}

export {func408}
