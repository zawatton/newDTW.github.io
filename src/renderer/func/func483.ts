import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func483(this: any) {
        Adap.dbgprt(483);
        await Func.func051(); // キー入力待ち処理
        Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
        Gvar.var_1203 = 1;
        Gvar.var_2125 = 25;
        Gvar.var_2126 = 120;
        Gvar.var_2127 = 20;
        Gvar.var_2128 = 0;
        Gvar.var_2129 = 0;
        Gvar.var_2130 = 26;
        Gvar.var_2131 = 10;
        Gvar.var_2132 = 0;
        Gvar.var_2123 = 0;

        Gvar.var_2133 = Adap.sdim(30, 30);
        Gvar.var_2134 = Adap.dim(30);
        Gvar.var_2135 = 1;
        Gvar.var_2136 = 0;
        return;
}

export {func483}
