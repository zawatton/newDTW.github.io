import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func422(this: any) {
        Adap.dbgprt(422);
        Gvar.var_78[Gvar.var_321].Var3 = Gvar.var_78[Gvar.var_321].Var3 - 1;

        if (Gvar.var_78[Gvar.var_321].Var11 == 1) { // お店で発動した場合？
            Gvar.var_106 = 1;
            Gvar.count_buying_price = Gvar.count_buying_price + 50;
        }
        Gvar.var_1953 = 0;
        if (Gvar.var_78[Gvar.var_321].Var0 >= 400 && Gvar.var_78[Gvar.var_321].Var0 < 500 && Gvar.var_78[Gvar.var_321].Var3 <= 0) {
            await Func.AutoDraw(10);
            Gvar.var_1953 = 1;
            Gvar.belongings_item_list = Gvar.var_78[Gvar.var_321].Var0;
            await Func.func492(); // アイテムリスト呼び出し
            await Func.setMessage1("" + Gvar.item_name + "は",
                                    "ｽﾀﾝﾄﾞﾊﾟﾜｰが尽きて消滅した", 7, false, false, false);
            if (Gvar.var_78[Gvar.var_321].Var11 == 1) { // お店で発動した場合？
                Gvar.var_106 = 1;
                Gvar.count_buying_price = Gvar.count_buying_price + Gvar.buying_price;
            }
            await Func.func479();
        }
        return;
}

export {func422}
