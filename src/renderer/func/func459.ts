import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func459(this: any) {
        Adap.dbgprt(459);
        Gvar.var_195 = 0;
        Gvar.var_196 = 0;
        Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
        await Func.setMessage("道具をひとつも持っていないぞ",
                                "", 7, false, false, false);
        await Func.AutoDraw(3);
        Gvar.var_1240 = 0;
        Gvar.var_1999 = 0;
        Gvar.var_2000 = 0;
        Gvar.var_2001 = 0;
        Gvar.var_1950 = 0;
        Gvar.var_2002 = 0;
        Gvar.var_2003 = 0;
        Gvar.var_2004 = 0;
        Gvar.var_2005 = 0;
        Gvar.var_234 = 0;
        Gvar.var_1252 = 0;
        Gvar.var_2006 = 0;
        Gvar.var_1208 = 0;
        Gvar.var_2007 = 0;
        Gvar.var_1667 = 0;
        Gvar.var_2008 = 0;
        Gvar.var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
        Gvar.var_1965 = 0;
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
}

export {func459}
