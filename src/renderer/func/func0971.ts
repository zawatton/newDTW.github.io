import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// 旧 func912
async function func0971(this: any) {
    Gvar.var_3822 = Adap.dim(30);
    Gvar.var_3822[0] = Gvar.var_233[Gvar.var_225].Var0;
    Gvar.var_3822[1] = 0;
    Gvar.var_3822[2] = 0;
    Gvar.var_3822[3] = Gvar.var_233[Gvar.var_225].Var3;
    Gvar.var_3822[4] = Gvar.var_233[Gvar.var_225].Var4;
    Gvar.var_3822[5] = Gvar.var_233[Gvar.var_225].Var5;
    Gvar.var_3822[6] = Gvar.var_233[Gvar.var_225].Var6;
    Gvar.var_3822[7] = Gvar.var_233[Gvar.var_225].Var7;
    Gvar.var_3822[8] = 0;
    Gvar.var_3822[9] = Gvar.var_233[Gvar.var_225].Var9;
    Gvar.var_3822[10] = Gvar.var_233[Gvar.var_225].Var10;
    Gvar.var_3822[11] = 0;
    Gvar.var_3822[12] = Gvar.var_233[Gvar.var_225].Var12;
    Gvar.var_3822[13] = Gvar.var_233[Gvar.var_225].Var13;
    Gvar.var_3822[14] = Gvar.var_233[Gvar.var_225].Var14;
    Gvar.var_3822[15] = Gvar.var_233[Gvar.var_225].Var15;
    Gvar.var_3822[16] = Gvar.var_233[Gvar.var_225].Var16;
    Gvar.var_3822[17] = Gvar.var_233[Gvar.var_225].Var17;
    Gvar.var_3822[18] = Gvar.var_233[Gvar.var_225].Var18;
    Gvar.var_3822[19] = Gvar.var_233[Gvar.var_225].Var19;
    Gvar.var_3822[20] = Gvar.var_233[Gvar.var_225].Var20;
    Gvar.var_3822[21] = Gvar.var_233[Gvar.var_225].Var21;
    Gvar.var_3822[22] = Gvar.var_233[Gvar.var_225].Var22;
    Gvar.var_3822[23] = Gvar.var_233[Gvar.var_225].Var23;
    Gvar.var_3822[24] = Gvar.var_233[Gvar.var_225].Var24;
    Gvar.var_3822[25] = Gvar.var_233[Gvar.var_225].Var25;
    Gvar.var_3822[26] = Gvar.var_233[Gvar.var_225].Var26;
    Gvar.var_3822[27] = Gvar.var_233[Gvar.var_225].Var27;
    Gvar.var_3822[28] = Gvar.var_233[Gvar.var_225].Var28;
    Gvar.var_3822[29] = Gvar.var_233[Gvar.var_225].Var29;
    Gvar.var_1459 = Gvar.var_233[Gvar.var_225].Var0;
    Gvar.var_1249 = Gvar.var_233[Gvar.var_225].Var13;
    Gvar.var_3869 = 0;
    Gvar.var_3882 = "送具";
    for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
        Gvar.var_3882 = "" + Gvar.var_3882 + "," + Gvar.var_3822[Gvar.var_3869];
        Gvar.var_3869++;
    }
    Adap.tcpput(Gvar.var_3882, Gvar.var_1050);
    Adap.tcpput("\n", Gvar.var_1050);
    return;
}

export {func0971}
