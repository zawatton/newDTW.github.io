import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// お金を拾った時の動作処理
async function func435(this: any) {
        Adap.dbgprt(435);
        await Func.setMessage("" + Gvar.var_78[Gvar.var_321].Var13 + " Gを拾った",
                                "", 7, false, false, false);
        Gvar.wallet = Gvar.wallet + Gvar.var_78[Gvar.var_321].Var13;
        if (Gvar.wallet > 999999) {
            Gvar.wallet = 999999;
        }
        Gvar.var_77[Gvar.var_66][Gvar.var_67] = 0;
        Gvar.var_78[Gvar.var_321].Var0 = 0;
        Gvar.var_78[Gvar.var_321].Var1 = 0;
        Gvar.var_78[Gvar.var_321].Var2 = 0;
        Gvar.var_78[Gvar.var_321].Var3 = 0;
        Gvar.var_78[Gvar.var_321].Var4 = 0;
        Gvar.var_78[Gvar.var_321].Var5 = 0;
        Gvar.var_78[Gvar.var_321].Var6 = 0;
        Gvar.var_78[Gvar.var_321].Var13 = 0;
        Gvar.var_78[Gvar.var_321].Var14 = 0;
        Gvar.var_78[Gvar.var_321].Var15 = 0;
        Gvar.var_78[Gvar.var_321].Var16 = 0;
        return;
}

export {func435}
