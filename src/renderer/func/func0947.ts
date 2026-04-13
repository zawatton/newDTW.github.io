import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'

// 旧 func888
async function func0947(this: any) {
    Gvar.var_874 = Adap.sdim(10000);
    Gvar.var_3621 = Adap.sdim(10000);
    Gvar.var_884 = Adap.dim(10000);
    Gvar.var_874 = "アイテム";
    Gvar.var_3621 = "eeeeeeeeee";
    Gvar.var_883 = 1;
    for (let cnt1 = 0; cnt1 < 150; ++cnt1) {
        await Func.func0948(); //アイテムの購入金額の値
        Gvar.var_874 = Gvar.var_874 + "\n" + Gvar.item_name;
        if (Gvar.belongings_item_list < 10) {
            Gvar.var_3621 = Gvar.var_3621 + "\np" + Gvar.belongings_item_list + "eeeeeeee";
        }
        if (Gvar.belongings_item_list >= 10 && Gvar.belongings_item_list < 100) {
            Gvar.var_3621 = Gvar.var_3621 + "\np" + Gvar.belongings_item_list + "eeeeeee";
        }
        if (Gvar.belongings_item_list >= 100) {
            Gvar.var_3621 = Gvar.var_3621 + "\np" + Gvar.belongings_item_list + "eeeeee";
        }
        Gvar.var_884[Gvar.var_883] = Gvar.belongings_item_list;
        if (Gvar.belongings_item_list == 1) {
            break;
        }
        Gvar.var_883++;
    }
    return;
}

export {func0947}
