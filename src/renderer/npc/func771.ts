import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

 // ムーディーブルース以外でアイテムを送る手段(サウェッジガーデン？アバッキオ？)
 // 旧 func771
async function func771(this: any) {
        Adap.dbgprt(771);
        Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
        if (Gvar.var_233[Gvar.var_225].Var0 >= 800 && Gvar.var_233[Gvar.var_225].Var0 < 900 && Gvar.var_233[Gvar.var_225].Var8 != 0) {
            await Func.setMessage("中に何か入っているアイテムは",
                                   "送ることはできない。", 7, true, false, false);
            await Func.AutoDraw(4);

            await Func.func051(); // キー入力待ち処理
            Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
            await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
            return;
        }
        await Func.func426();
        await Func.func427();
        await Func.func428();
        await Func.func429();
        Gvar.var_2116 = 0;
        if (Gvar.var_553 == Gvar.var_225 && Gvar.var_896 != 0) {
            Gvar.var_2116 = 1;
        }
        if (Gvar.var_554 == Gvar.var_225 && Gvar.var_897 != 0) {
            Gvar.var_2116 = 1;
        }
        if (Gvar.var_555 == Gvar.var_225 && Gvar.var_898 != 0) {
            Gvar.var_2116 = 1;
        }
        if (Gvar.var_2116 == 1) {
            await Func.setMessage("呪われていて外せない！",
                                   "", 7, true, false, false);
            await Func.AutoDraw(4);

            await Func.func051(); // キー入力待ち処理
            Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
            await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
            return;
        }
        await Func.func772();
}

export {func771}
