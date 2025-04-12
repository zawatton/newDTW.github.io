import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

// トニオさんの店 レストラン・トラサルディーへ入店した時のメッセージ表示
async function func706(this: any) {
        Adap.dbgprt(706);
        Gvar.var_281 = Gvar.var_66 - 1;
        if (Gvar.var_281 < 0) {
            Gvar.var_281 = 0;
        }
        Gvar.var_282 = Gvar.var_66 + 1;
        if (Gvar.var_282 > Gvar.var_33) {
            Gvar.var_282 = Gvar.var_33;
        }
        Gvar.var_283 = Gvar.var_67 - 1;
        if (Gvar.var_283 < 0) {
            Gvar.var_283 = 0;
        }
        Gvar.var_284 = Gvar.var_67 + 1;
        if (Gvar.var_284 > Gvar.var_34) {
            Gvar.var_284 = Gvar.var_34;
        }
        Gvar.var_3112 = 0;
        Gvar.var_286 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_97; ++cnt1) {
            if (Gvar.var_83[Gvar.var_286].Var0 == 33) {
                Gvar.var_3113 = Gvar.var_83[Gvar.var_286].Var1;
                Gvar.var_3114 = Gvar.var_83[Gvar.var_286].Var2;
                if (Gvar.var_71[Gvar.var_3113][Gvar.var_3114] >= 1 && Gvar.var_71[Gvar.var_3113][Gvar.var_3114] == Gvar.var_201) {
                    Gvar.var_3112 = 1;
                    break;
                }
            }
            Gvar.var_286 = Gvar.var_286 + 1;
        }
        if (Gvar.var_3112 == 1 && Gvar.var_83[Gvar.var_286].Var12 == 0 && Gvar.var_83[Gvar.var_286].Var13 == 0) {
            Gvar.var_83[Gvar.var_286].Var5 = 2;
            if (Gvar.var_83[Gvar.var_286].Var1 < Gvar.var_66) {
                Gvar.var_83[Gvar.var_286].Var5 = 6;
            }
            if (Gvar.var_83[Gvar.var_286].Var1 > Gvar.var_66) {
                Gvar.var_83[Gvar.var_286].Var5 = 4;
            }
            if (Gvar.var_83[Gvar.var_286].Var2 < Gvar.var_67) {
                Gvar.var_83[Gvar.var_286].Var5 = 2;
            }
            if (Gvar.var_83[Gvar.var_286].Var2 > Gvar.var_67) {
                Gvar.var_83[Gvar.var_286].Var5 = 8;
            }
            await Func.setMessage1("レストラン・トラサルディーへようこそ！",
                                   "", 7, false, false, true);
            await Music.func136();
            await Func.AutoDraw(10);
            Gvar.var_210 = 1;
        }
        return;
}

export {func706}
