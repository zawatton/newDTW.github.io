import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func530(this: any) {
        Adap.dbgprt(530);
        Gvar.var_2393 = 0;
        if (Gvar.kougeki_disc_id  == 0 && Gvar.bougyo_disc_id == 0 && Gvar.nouryoku_disc_id == 0) {
            Gvar.item_message1 = "スタンドを身につけていなかった…";
            return;
        }
        if (Gvar.kougeki_disc_id  != 0) {
            await Func.func426();
            Gvar.var_2394 = Gvar.var_233[Gvar.var_553].Var5 + Gvar.var_233[Gvar.var_553].Var19;
            if (Gvar.var_2394 >= 8) {
                Gvar.var_2393++;
            }
            if (Gvar.var_2394 < 8) {
                Gvar.belongings_item_list = Gvar.var_233[Gvar.var_553].Var0;
                await Func.func492(); // アイテムリスト呼び出し
                Gvar.var_2395 = Gvar.item_name;
                Gvar.var_233[Gvar.var_553].Var5 = Gvar.var_233[Gvar.var_553].Var5 + 1;
                Gvar.item_message1 = "装備中のDISCの空き容量が増えた！";
                Gvar.item_message2 = "";
            }
        }
        if (Gvar.bougyo_disc_id != 0) {
            await Func.func427();
            Gvar.var_2394 = Gvar.var_233[Gvar.var_554].Var5 + Gvar.var_233[Gvar.var_554].Var19;
            if (Gvar.var_2394 >= 8) {
                Gvar.var_2393++;
            }
            if (Gvar.var_2394 < 8) {
                Gvar.belongings_item_list = Gvar.var_233[Gvar.var_554].Var0;
                await Func.func492(); // アイテムリスト呼び出し
                Gvar.var_2395 = Gvar.item_name;
                Gvar.var_233[Gvar.var_554].Var5 = Gvar.var_233[Gvar.var_554].Var5 + 1;
                Gvar.item_message1 = "装備中のDISCの空き容量が増えた！";
                Gvar.item_message2 = "";
            }
        }
        if (Gvar.nouryoku_disc_id != 0) {
            await Func.func428();
            Gvar.var_2394 = Gvar.var_233[Gvar.var_555].Var5 + Gvar.var_233[Gvar.var_555].Var19;
            if (Gvar.var_2394 >= 8) {
                Gvar.var_2393++;
            }
            if (Gvar.var_2394 < 8) {
                Gvar.belongings_item_list = Gvar.var_233[Gvar.var_555].Var0;
                await Func.func492(); // アイテムリスト呼び出し
                Gvar.var_2395 = Gvar.item_name;
                Gvar.var_233[Gvar.var_555].Var5 = Gvar.var_233[Gvar.var_555].Var5 + 1;
                Gvar.item_message1 = "装備中のDISCの空き容量が増えた！";
                Gvar.item_message2 = "";
            }
        }
        if (Gvar.var_2393 == 3) {
            Gvar.item_message1 = "これ以上空き容量を増やせなかった";
            Gvar.item_message2 = "";
        }
        return;
}

export {func530}
