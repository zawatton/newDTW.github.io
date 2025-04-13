import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func525(this: any) {
        Adap.dbgprt(525);
        Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
        if (Gvar.var_233[Gvar.var_225].Var0 < 100 || Gvar.var_233[Gvar.var_225].Var0 >= 400) {
            await Func.setMessage("それは装備用DISCではありません", "", 7, true, false, false);
            Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
            await Func.func051(); // キー入力待ち処理
            await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
            return;
        }
        if (Gvar.var_233[Gvar.var_225].Var19 <= 1) {
            await Func.setMessage("それに合成された能力はありません。", "", 7, true, false, false);
            Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
            await Func.func051(); // キー入力待ち処理
            await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
            return;
        }
        await Func.func426();
        await Func.func427();
        await Func.func428();
        if (Gvar.var_553 == Gvar.var_225 || Gvar.var_554 == Gvar.var_225 || Gvar.var_555 == Gvar.var_225) {
            await Func.setMessage("装備しているDISCは", "はずさないと能力を消せません。", 7, true, false, false);
            Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
            await Func.func051(); // キー入力待ち処理
            await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
            return;
        }
        if (Gvar.var_2301 == 0 && Gvar.var_225 == Gvar.var_2300) {
            await Func.setMessage("それは現在使用中のDISCです。", "", 7, true, false, false);
            Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
            await Func.func051(); // キー入力待ち処理
            await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
            return;
        }
        if (Gvar.var_233[Gvar.var_225].Var13 >= 1) {
            await Func.setMessage("このDISCの能力は、特別なパワーで", "守られているようだ。", 7, true, false, false);
            Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
            await Func.func051(); // キー入力待ち処理
            await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
            return;
        }
        Gvar.var_2006 = 0;
        Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
        Gvar.var_1289 = Gvar.var_233[Gvar.var_225].Var0;
        Gvar.var_2373 = Gvar.var_225;
        await Func.func492(); // アイテムリスト呼び出し
        Gvar.strengthen_item_name = Gvar.item_name;
        await Func.func051(); // キー入力待ち処理
        Gvar.var_1208 = 2;
        Gvar.belongings_item_list = Gvar.var_1289;
        Gvar.var_2374 = 157;
        Gvar.var_2375 = 2;
        Gvar.var_2376 = Gvar.var_233[Gvar.var_225].Var19;
        await Func.func368(); // アイテム配列変え関数??
        return;
}

export {func525}
