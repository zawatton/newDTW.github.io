import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func402(this: any) {
        Adap.dbgprt(402);
        if (Gvar.var_78[Gvar.var_320].Var15 == 1) {
            Gvar.var_217 = 1;
            Gvar.var_1842 = Gvar.var_78[Gvar.var_320].Var1;
            Gvar.var_1843 = Gvar.var_78[Gvar.var_320].Var2;
            if (Gvar.current_floor < 19) {
                Gvar.var_1844 = 1;
            }
            if (Gvar.current_floor >= 19) {
                Gvar.var_1844 = 2;
            }
            Gvar.var_1845 = 2;
            await Func.func556();
            Gvar.var_1844 = 0;
            Gvar.var_1845 = 0;
            Gvar.var_83[Gvar.var_673].Var21 = 1;
            Gvar.var_77[Gvar.var_1842][Gvar.var_1843] = 0;
            Gvar.var_78[Gvar.var_320].Var0 = 0;
            Gvar.var_78[Gvar.var_320].Var1 = 0;
            Gvar.var_78[Gvar.var_320].Var2 = 0;
            Gvar.var_78[Gvar.var_320].Var3 = 0;
            Gvar.var_78[Gvar.var_320].Var4 = 0;
            Gvar.var_78[Gvar.var_320].Var5 = 0;
            Gvar.var_78[Gvar.var_320].Var6 = 0;
            Gvar.var_78[Gvar.var_320].Var7 = 0;
            Gvar.var_78[Gvar.var_320].Var8 = 0;
            Gvar.var_78[Gvar.var_320].Var9 = 0;
            Gvar.var_78[Gvar.var_320].Var11 = 0;
            Gvar.var_78[Gvar.var_320].Var12 = 0;
            Gvar.var_78[Gvar.var_320].Var13 = 0;
            Gvar.var_78[Gvar.var_320].Var14 = 0;
            Gvar.var_78[Gvar.var_320].Var15 = 0;
            Gvar.var_78[Gvar.var_320].Var16 = 0;
            Gvar.var_78[Gvar.var_320].Var17 = 0;
            Gvar.var_78[Gvar.var_320].Var18 = 0;
            Gvar.var_78[Gvar.var_320].Var19 = 0;
            Gvar.var_78[Gvar.var_320].Var20 = 0;
            Gvar.var_78[Gvar.var_320].Var21 = 0;
            Gvar.var_78[Gvar.var_320].Var22 = 0;
            Gvar.var_78[Gvar.var_320].Var23 = 0;
            Gvar.var_78[Gvar.var_320].Var24 = 0;
            Gvar.var_78[Gvar.var_320].Var25 = 0;
            Gvar.var_78[Gvar.var_320].Var26 = 0;
            Gvar.var_78[Gvar.var_320].Var27 = 0;
            Gvar.var_78[Gvar.var_320].Var28 = 0;
            Gvar.var_78[Gvar.var_320].Var29 = 0;
            Adap.DSPLAY(156);
            if (Gvar.current_floor < 19) {
                for (let cnt3 = 0; cnt3 < 6; ++cnt3) {
                    if (cnt3 == 1) {
                        Gvar.var_411 = 2;
                    }
                    if (cnt3 == 2) {
                        Gvar.var_411 = 1;
                    }
                    if (cnt3 == 3) {
                        Gvar.var_411 = 2;
                    }
                    if (cnt3 == 4) {
                        Gvar.var_411 = 2;
                    }
                    if (cnt3 == 5) {
                        Gvar.var_411 = 1;
                    }
                    if (cnt3 == 6) {
                        Gvar.var_411 = 4;
                    }
                    await Func.func337(); // メッセージ表示処理(自動)
                }
            }
            if (Gvar.current_floor >= 19) {
                for (let cnt3 = 0; cnt3 < 8; ++cnt3) {
                    if (cnt3 == 1) {
                        Gvar.var_411 = 1;
                    }
                    if (cnt3 == 2) {
                        Gvar.var_411 = 2;
                    }
                    if (cnt3 == 3) {
                        Gvar.var_411 = 3;
                    }
                    if (cnt3 == 4) {
                        Gvar.var_411 = 4;
                    }
                    if (cnt3 == 5) {
                        Gvar.var_411 = 5;
                    }
                    if (cnt3 == 6) {
                        Gvar.var_411 = 6;
                    }
                    if (cnt3 == 7) {
                        Gvar.var_411 = 7;
                    }
                    if (cnt3 == 8) {
                        Gvar.var_411 = 8;
                    }
                    await Func.func337(); // メッセージ表示処理(自動)
                }
            }
            Gvar.var_83[Gvar.var_673].Var21 = 0;
            return;
        }
        return;
}

export {func402}
