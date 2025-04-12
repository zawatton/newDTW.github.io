import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func254(this: any) {
        Adap.dbgprt(254);
        await Func.func294();
        Gvar.var_764 = 0;
        Gvar.var_1075 = 0;
        for (let cnt1 = 0; cnt1 < Gvar.var_32; ++cnt1) {
            Gvar.var_1076 = 0;
            for (let cnt2 = 0; cnt2 < Gvar.var_31; ++cnt2) {
                if (Adap.peek(Gvar.var_1136, Gvar.var_764) == 35) {
                    Gvar.var_1137[Gvar.var_1076][Gvar.var_1075] = 0;
                }
                if (Adap.peek(Gvar.var_1136, Gvar.var_764) == 94) {
                    Gvar.var_1137[Gvar.var_1076][Gvar.var_1075] = 13;
                }
                Gvar.var_1076 = Gvar.var_1076 + 1;
                Gvar.var_764 = Gvar.var_764 + 1;
            }
            Gvar.var_1075 = Gvar.var_1075 + 1;
        }
        Gvar.var_1128 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_32; ++cnt1) {
            Gvar.var_1129 = 1;
            for (let cnt2 = 0; cnt2 < Gvar.var_31; ++cnt2) {
                if (Gvar.var_71[Gvar.var_1129][Gvar.var_1128] == 0 && Gvar.var_1137[Gvar.var_1129][Gvar.var_1128] == 13) {
                    Gvar.var_71[Gvar.var_1129][Gvar.var_1128] = 13;
                }
                Gvar.var_1129 = Gvar.var_1129 + 1;
            }
            Gvar.var_1128 = Gvar.var_1128 + 1;
        }
        return;
}

export {func254}
