import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// アイテムに乗った時の動作処理
async function func419(this: any) {
        Adap.dbgprt(419);
        if (Gvar.var_342 == 1) {
            return;
        }
        Gvar.var_240 = 0;
        Gvar.var_321 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
        Gvar.belongings_item_list = Gvar.var_78[Gvar.var_321].Var0;
        Gvar.disc_rarity = Gvar.var_78[Gvar.var_321].Var13;
        await Func.func492(); // アイテムリスト呼び出し
        await Func.func398(); // 道具(メニュー画面/道具)へ直接表示されるアイテム表示

        if (Gvar.var_78[Gvar.var_321].Var11 == 0) {
            if (Gvar.belongings_item_list == 800) {
                Gvar.var_1922 = Gvar.var_78[Gvar.var_321].Var6;
                if (Gvar.var_862[800][0] == 1 && Gvar.var_990[Gvar.var_1922] == 1) {
                    Gvar.var_1923 = Gvar.var_1922;
                    await Func.func490();
                    if (Gvar.var_1924 != "") {
                        await Func.setMessage1("" + Gvar.disp_item_name + "に乗った",
                                                "【" + Gvar.var_1924 + "】", 7, false, false, false);
                    }
                }
            }
            else
                await Func.setMessage1("" + Gvar.disp_item_name + "に乗った",
                                        "", 7, false, false, false);
        }

        if (Gvar.var_78[Gvar.var_321].Var11 == 1) { // お店で発動した場合？
            Gvar.var_1925 = 0;
            Gvar.var_482 = 0;
            Gvar.var_482 = (Gvar.var_78[Gvar.var_321].Var3 + Gvar.var_78[Gvar.var_321].Var4) * 50;
            if (Gvar.var_78[Gvar.var_321].Var0 != 800) {
                Gvar.var_482 = Gvar.var_78[Gvar.var_321].Var7 * 100 + Gvar.var_482;
            }
            if (Gvar.var_78[Gvar.var_321].Var19 > 1) {
                Gvar.var_482 = Gvar.var_78[Gvar.var_321].Var19 * 500 + Gvar.var_482;
            }
            Gvar.var_1925 = Gvar.buying_price + Gvar.var_482;
            if (Gvar.var_78[Gvar.var_321].Var0 >= 800 && Gvar.var_78[Gvar.var_321].Var0 < 900) {
                Gvar.var_484 = 0;
                Gvar.var_485 = Gvar.var_78[Gvar.var_321].Var6;
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    if (Gvar.var_486[Gvar.var_485][Gvar.var_484][0] > 0 && Gvar.var_486[Gvar.var_485][Gvar.var_484][11] == 1) {
                        Gvar.belongings_item_list = Gvar.var_486[Gvar.var_485][Gvar.var_484][0];
                        await Func.func492(); // アイテムリスト呼び出し
                        Gvar.var_482 = 0;
                        Gvar.var_482 = (Gvar.var_486[Gvar.var_485][Gvar.var_484][3] + Gvar.var_486[Gvar.var_485][Gvar.var_484][4]) * 50;
                        if (Gvar.var_486[Gvar.var_485][Gvar.var_484][19] > 1) {
                            Gvar.var_482 = Gvar.var_486[Gvar.var_485][Gvar.var_484][19] * 500 + Gvar.var_482;
                        }
                        Gvar.var_1925 = Gvar.var_1925 + Gvar.buying_price + Gvar.var_482;
                    }
                    Gvar.var_484 = Gvar.var_484 + 1;
                }
            }
            await Func.setMessage1("" + Gvar.disp_item_name,
                                    "値段 " + Gvar.var_1925 + " G", 7, false, false, false);
        }
        await Func.AutoDraw(5);
        return;
}

export {func419}
