import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func920(this: any) {
        Adap.dbgprt(920);
        if (Gvar.var_83[Gvar.var_2194].Var31 == 4 || Gvar.var_83[Gvar.var_2194].Var31 == 5 || Gvar.var_83[Gvar.var_2194].Var13 != 0 || Gvar.time_paused_count != 0 || Gvar.time_paused!= 0) {
            return;
        }
        if (Gvar.var_83[Gvar.var_2194].Var0 == 20 || Gvar.var_83[Gvar.var_2194].Var0 == 132 || Gvar.var_83[Gvar.var_2194].Var0 == 143 || Gvar.var_83[Gvar.var_2194].Var0 == 90 || Gvar.var_83[Gvar.var_2194].Var0 == 96 || Gvar.var_83[Gvar.var_2194].Var0 == 91 || Gvar.var_83[Gvar.var_2194].Var0 == 92) {
            return;
        }
        Gvar.var_3585 = "" + Gvar.var_83[Gvar.var_2194].Var0 + "," + Gvar.var_83[Gvar.var_2194].Var39 + "," + Gvar.var_83[Gvar.var_2194].Var3 + "," + Gvar.var_83[Gvar.var_2194].Var14 + "," + Gvar.var_83[Gvar.var_2194].Var15 + "," + Gvar.var_83[Gvar.var_2194].Var17 + "," + Gvar.var_83[Gvar.var_2194].Var19 + "," + Gvar.var_83[Gvar.var_2194].Var20 + "," + Gvar.var_83[Gvar.var_2194].Var23 + "," + Gvar.var_83[Gvar.var_2194].Var24 + "," + Gvar.var_83[Gvar.var_2194].Var30;
        Gvar.var_3561 = "倒敵" + Gvar.var_3585;
        Adap.tcpput(Gvar.var_3561, Gvar.var_1050);
        Adap.tcpput("\n", Gvar.var_1050);
        Gvar.var_3586 = Gvar.var_83[Gvar.var_2194].Var1;
        Gvar.var_3587 = Gvar.var_83[Gvar.var_2194].Var2;
        Gvar.var_82[Gvar.var_3586][Gvar.var_3587] = 0;
        Gvar.var_83[Gvar.var_2194].Var0 = 0;
        Gvar.var_83[Gvar.var_2194].Var1 = 0;
        Gvar.var_83[Gvar.var_2194].Var2 = 0;
        Gvar.var_3584 = 1;
        return;
}

export {func920}
