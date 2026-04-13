import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// 旧 func878
async function func0937(this: any) {
    Gvar.var_764 = 0;
    Gvar.var_1075 = 0;
    for (let cnt1 = 0; cnt1 < Gvar.var_32; ++cnt1) {
        Gvar.var_1076 = 0;
        for (let cnt2 = 0; cnt2 < 57; ++cnt2) {
            if (Gvar.var_71[Gvar.var_1076][Gvar.var_1075] == 21 || Gvar.var_71[Gvar.var_1076][Gvar.var_1075] == 22 || Gvar.var_71[Gvar.var_1076][Gvar.var_1075] == 23 || Gvar.var_71[Gvar.var_1076][Gvar.var_1075] == 24) {
                Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 14;
            }
            Gvar.var_1076 = Gvar.var_1076 + 1;
            Gvar.var_764 = Gvar.var_764 + 1;
        }
        Gvar.var_1075 = Gvar.var_1075 + 1;
    }
    return;
}

export {func0937}
