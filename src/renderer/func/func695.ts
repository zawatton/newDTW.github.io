import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func695(this: any) {
        Adap.dbgprt(695);
        if (Gvar.var_211 == 0) {
            return;
        }
        Gvar.var_2855 = 0;
        Gvar.var_3099 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_224; ++cnt1) {
            if (Gvar.var_233[Gvar.var_3099].Var0 == 650 || Gvar.var_233[Gvar.var_3099].Var0 == 651 || Gvar.var_233[Gvar.var_3099].Var0 == 653 || Gvar.var_233[Gvar.var_3099].Var0 == 654 || Gvar.var_233[Gvar.var_3099].Var0 == 655) {
                Gvar.var_2855 = Gvar.var_233[Gvar.var_3099].Var0;
                break;
            }
            Gvar.var_3099++;
        }
        if (Gvar.var_2855 != 0) {
            Gvar.belongings_item_list = Gvar.var_2855;
            await Func.func492(); // アイテムリスト呼び出し
            Gvar.var_3100 = Gvar.item_name;
            Gvar.var_1396 = Gvar.var_83[Gvar.var_673].Var1;
            Gvar.var_1397 = Gvar.var_83[Gvar.var_673].Var2;
            Gvar.var_83[Gvar.var_673].Var8 = 1;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1552 = 1;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1552++;
            }
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_1552 = 0;
            Gvar.var_403 = "" + Gvar.var_3100 + "がダメージを反射した！";
            Gvar.var_3098 = 1;
            Gvar.var_402 = Gvar.var_673;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_209 = Math.floor(Gvar.var_209 / 3);
            if (Gvar.var_209 <= 0) {
                Gvar.var_209 = 1;
            }
            await Func.func705();
            Gvar.var_3098 = 0;
            await Func.AutoDraw(5);
        }
        return;
}

export {func695}
