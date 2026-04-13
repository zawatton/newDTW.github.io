import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'

// 旧 func892
async function func0951(this: any) {
    Gvar.var_890 = Adap.sdim(10000);
    Gvar.var_3618 = Adap.sdim(10000);
    Gvar.var_3591 = Adap.dim(10000);
    Gvar.var_890 = "敵";
    Gvar.var_3618 = "eeeeeeeeee";
    Gvar.var_883 = 1;
    for (let cnt1 = 0; cnt1 < 126; ++cnt1) {
        await Func.func0952();
        Gvar.var_890 = Gvar.var_890 + "\n" + Gvar.enemy_name;
        if (Gvar.enemy_list < 10) {
            Gvar.var_3618 = Gvar.var_3618 + "\np" + Gvar.enemy_list + "eeeeeeee";
        }
        if (Gvar.enemy_list >= 10 && Gvar.enemy_list < 100) {
            Gvar.var_3618 = Gvar.var_3618 + "\np" + Gvar.enemy_list + "eeeeeee";
        }
        if (Gvar.enemy_list >= 100) {
            Gvar.var_3618 = Gvar.var_3618 + "\np" + Gvar.enemy_list + "eeeeee";
        }
        Gvar.var_3591[Gvar.var_883] = Gvar.enemy_list;
        if (Gvar.enemy_list == 37) {
            break;
        }
        Gvar.var_883++;
    }
    return;
}

export {func0951}
