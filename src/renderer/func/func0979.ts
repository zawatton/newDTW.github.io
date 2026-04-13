import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// 旧 func920
async function func0979(this: any) {
    if (Gvar.var_83[Gvar.var_2194].Var31 == 4 || Gvar.var_83[Gvar.var_2194].Var31 == 5 || Gvar.var_83[Gvar.var_2194].Var13 != 0 || Gvar.time_paused_count != 0 || Gvar.time_paused!= 0) {
        return;
    }
    if (Gvar.var_83[Gvar.var_2194].Var0 == 20 || Gvar.var_83[Gvar.var_2194].Var0 == 132 || Gvar.var_83[Gvar.var_2194].Var0 == 143 || Gvar.var_83[Gvar.var_2194].Var0 == 90 || Gvar.var_83[Gvar.var_2194].Var0 == 96 || Gvar.var_83[Gvar.var_2194].Var0 == 91 || Gvar.var_83[Gvar.var_2194].Var0 == 92) {
        return;
    }
    Gvar.var_3888 = "" + Gvar.var_83[Gvar.var_2194].Var0 + "," + Gvar.var_83[Gvar.var_2194].Var39 + "," + Gvar.var_83[Gvar.var_2194].Var3 + "," + Gvar.var_83[Gvar.var_2194].Var14 + "," + Gvar.var_83[Gvar.var_2194].Var15 + "," + Gvar.var_83[Gvar.var_2194].Var17 + "," + Gvar.var_83[Gvar.var_2194].Var19 + "," + Gvar.var_83[Gvar.var_2194].Var20 + "," + Gvar.var_83[Gvar.var_2194].Var23 + "," + Gvar.var_83[Gvar.var_2194].Var24 + "," + Gvar.var_83[Gvar.var_2194].Var30;
    Gvar.var_3864 = "倒敵" + Gvar.var_3888;
    Adap.tcpput(Gvar.var_3864, Gvar.var_1050);
    Adap.tcpput("\n", Gvar.var_1050);
    Gvar.var_3889 = Gvar.var_83[Gvar.var_2194].Var1;
    Gvar.var_3890 = Gvar.var_83[Gvar.var_2194].Var2;
    Gvar.var_82[Gvar.var_3889][Gvar.var_3890] = 0;
    Gvar.var_83[Gvar.var_2194].Var0 = 0;
    Gvar.var_83[Gvar.var_2194].Var1 = 0;
    Gvar.var_83[Gvar.var_2194].Var2 = 0;
    Gvar.var_3887 = 1;
    return;
}

export {func0979}
