import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func522(this: any) {
        Adap.dbgprt(522);
        Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
        await Func.func426();
        await Func.func427();
        await Func.func428();
        if (Gvar.var_553 == Gvar.var_225 || Gvar.var_554 == Gvar.var_225 || Gvar.var_555 == Gvar.var_225) {
            await Func.setMessage1("装備しているDISCは",
                                    "はずさないと合成できません。", 7, true, false, false);
            for (let cnt2 = 0; cnt2 < 4; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
            }
            Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
            await Func.func051(); // キー入力待ち処理
            await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
            return;
        }
        if (Gvar.var_225 == Gvar.var_2286 && Gvar.var_2287 == 0 && Gvar.var_234 == 0) {
            await Func.setMessage1("そのDISCは合成するために使用中です",
                                    "", 7, true, false, false);
            for (let cnt2 = 0; cnt2 < 4; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
            }
            Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
            await Func.func051(); // キー入力待ち処理
            await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
            return;
        }
        if (Gvar.var_233[Gvar.var_225].Var0 < 100 || Gvar.var_233[Gvar.var_225].Var0 >= 400) {
            await Func.setMessage1("それを合成することはできません。",
                                    "", 7, true, false, false);
            for (let cnt2 = 0; cnt2 < 4; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
            }
            Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
            await Func.func051(); // キー入力待ち処理
            await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
            return;
        }
        Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
        Gvar.var_2090 = Gvar.var_225;
        await Func.setMessage1("合成させるアイテムを選んでください",
                                "", 7, true, false, false);
        await Func.AutoDraw(4);
        Gvar.var_1240 = 2; 
        Gvar.item_page_number = 1;
        Gvar.Y_axis_item_position = 45;
        Gvar.var_225 = 1;
        Gvar.var_223 = Gvar.var_224 + 10;
        Gvar.var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
        Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
        await Func.func051(); // キー入力待ち処理
        await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
        return;
}

export {func522}
