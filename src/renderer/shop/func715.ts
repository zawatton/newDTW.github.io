import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func715(this: any) {
        Adap.dbgprt(715);
        Gvar.wallet = Gvar.wallet + Gvar.var_1009;
        if (Gvar.wallet > 999999) {
            Gvar.wallet = 999999;
        }
        Gvar.var_1009 = 0;
        Gvar.var_449 = 0;
        for (let cnt1 = 0; cnt1 < Gvar.var_32; ++cnt1) {
            Gvar.var_447 = 0;
            for (let cnt2 = 0; cnt2 < Gvar.var_31; ++cnt2) {
                if (Gvar.var_72[Gvar.var_447][Gvar.var_449] == 1 && Gvar.var_77[Gvar.var_447][Gvar.var_449] > 0) {
                    Gvar.var_3115 = Gvar.var_77[Gvar.var_447][Gvar.var_449];
                    if (Gvar.var_78[Gvar.var_3115].Var0 > 1) {
                        Gvar.var_78[Gvar.var_3115].Var11 = 1;
                    }
                    if (Gvar.var_78[Gvar.var_3115].Var0 >= 800 && Gvar.var_78[Gvar.var_3115].Var0 < 900) {
                        Gvar.var_484 = 1;
                        Gvar.var_485 = Gvar.var_78[Gvar.var_3115].Var6;
                        for (let cnt5 = 0; cnt5 < 10; ++cnt5) {
                            if (Gvar.var_486[Gvar.var_485][Gvar.var_484][0] > 1) {
                                Gvar.var_486[Gvar.var_485][Gvar.var_484][11] = 1;
                            }
                            Gvar.var_484 = Gvar.var_484 + 1;
                        }
                    }
                }
                Gvar.var_447 = Gvar.var_447 + 1;
            }
            Gvar.var_449 = Gvar.var_449 + 1;
        }
        Adap.DSPLAY(139);
        await Func.func718(); // トニオさんの店を出る際のメッセージ処理
        return;
}

export {func715}
