import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

async function func182(this: any) {
        Adap.dbgprt(182);

        Gvar.var_863 = Adap.dim(70, 70, Gvar.length3 = null, null);

        Gvar.var_853 = Adap.dim(50, 30, Gvar.length3 = null, null);
        Gvar.var_864 = 0;
        Gvar.var_449 = 1;
        for (let cnt1 = 0; cnt1 < 50; ++cnt1) {
            Gvar.var_447 = 1;
            for (let cnt2 = 0; cnt2 < 50; ++cnt2) {
                if (Gvar.var_447 >= 10 && Gvar.var_447 <= 18 && Gvar.var_449 >= 20 && Gvar.var_449 <= 27 && Gvar.var_77[Gvar.var_447][Gvar.var_449] > 0) {
                    Gvar.var_864 = Gvar.var_864 + 1;
                    Gvar.var_863[Gvar.var_447][Gvar.var_449] = Gvar.var_864;
                    Gvar.var_865 = Gvar.var_864;
                    Gvar.var_866 = Gvar.var_77[Gvar.var_447][Gvar.var_449];
                    Gvar.var_853[Gvar.var_865][0] = Gvar.var_78[Gvar.var_866].Var0;
                    Gvar.var_853[Gvar.var_865][1] = Gvar.var_447;
                    Gvar.var_853[Gvar.var_865][2] = Gvar.var_449;
                    Gvar.var_853[Gvar.var_865][3] = Gvar.var_78[Gvar.var_866].Var3;
                    Gvar.var_853[Gvar.var_865][4] = Gvar.var_78[Gvar.var_866].Var4;
                    Gvar.var_853[Gvar.var_865][5] = Gvar.var_78[Gvar.var_866].Var5;
                    Gvar.var_853[Gvar.var_865][6] = Gvar.var_78[Gvar.var_866].Var6;
                    Gvar.var_853[Gvar.var_865][7] = Gvar.var_78[Gvar.var_866].Var7;
                    Gvar.var_853[Gvar.var_865][8] = Gvar.var_78[Gvar.var_866].Var8;
                    Gvar.var_853[Gvar.var_865][9] = Gvar.var_78[Gvar.var_866].Var9;
                    Gvar.var_853[Gvar.var_865][10] = Gvar.var_78[Gvar.var_866].Var10;
                    Gvar.var_853[Gvar.var_865][11] = Gvar.var_78[Gvar.var_866].Var11;
                    Gvar.var_853[Gvar.var_865][12] = Gvar.var_78[Gvar.var_866].Var12;
                    Gvar.var_853[Gvar.var_865][13] = Gvar.var_78[Gvar.var_866].Var13;
                    Gvar.var_853[Gvar.var_865][14] = Gvar.var_78[Gvar.var_866].Var14;
                    Gvar.var_853[Gvar.var_865][15] = Gvar.var_78[Gvar.var_866].Var15;
                    Gvar.var_853[Gvar.var_865][16] = Gvar.var_78[Gvar.var_866].Var16;
                    Gvar.var_853[Gvar.var_865][17] = Gvar.var_78[Gvar.var_866].Var17;
                    Gvar.var_853[Gvar.var_865][18] = Gvar.var_78[Gvar.var_866].Var18;
                    Gvar.var_853[Gvar.var_865][19] = Gvar.var_78[Gvar.var_866].Var19;
                    Gvar.var_853[Gvar.var_865][20] = Gvar.var_78[Gvar.var_866].Var20;
                    Gvar.var_853[Gvar.var_865][21] = Gvar.var_78[Gvar.var_866].Var21;
                    Gvar.var_853[Gvar.var_865][22] = Gvar.var_78[Gvar.var_866].Var22;
                    Gvar.var_853[Gvar.var_865][23] = Gvar.var_78[Gvar.var_866].Var23;
                    Gvar.var_853[Gvar.var_865][24] = Gvar.var_78[Gvar.var_866].Var24;
                    Gvar.var_853[Gvar.var_865][25] = Gvar.var_78[Gvar.var_866].Var25;
                    Gvar.var_853[Gvar.var_865][26] = Gvar.var_78[Gvar.var_866].Var26;
                    Gvar.var_853[Gvar.var_865][27] = Gvar.var_78[Gvar.var_866].Var27;
                    Gvar.var_853[Gvar.var_865][28] = Gvar.var_78[Gvar.var_866].Var28;
                    Gvar.var_853[Gvar.var_865][29] = Gvar.var_78[Gvar.var_866].Var29;
                }
                Gvar.var_447 = Gvar.var_447 + 1;
            }
            Gvar.var_449 = Gvar.var_449 + 1;
        }
        return;
}

export {func182}
