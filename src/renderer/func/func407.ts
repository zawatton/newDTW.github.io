import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// アイテム欄を開いた時の表示イニシャル処理 (1ページ目、カーソル一番上等)
async function func407(this: any) {
        Adap.dbgprt(407);
        if (Gvar.var_233[Gvar.var_225].Var0 >= 850 && Gvar.var_233[Gvar.var_225].Var0 < 860) {
            await Func.func473();
            return;
        }
        Gvar.var_1866 = 1;
        Gvar.var_682 = Gvar.var_233[Gvar.var_225].Var6;
        Gvar.var_1876 = Gvar.var_225;
        Gvar.var_1877 = Gvar.var_225;
        Gvar.var_1878 = Gvar.item_page_number;
        Gvar.var_1879 = Gvar.Y_axis_item_position;
        Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
        Gvar.var_221 = 0;
        Gvar.item_page_number = 1; // 
        Gvar.Y_axis_item_position = 45;
        Gvar.var_225 = 1;
        Gvar.var_223 = Gvar.var_224 + 10;
        await Func.func051(); // キー入力待ち処理
        await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
        return;
}

export {func407}
