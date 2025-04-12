import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func250(this: any) {
        Adap.dbgprt(250);
        Gvar.var_1114 = Gvar.var_76[Gvar.var_1109][3][1];
        Gvar.var_1115 = Gvar.var_76[Gvar.var_1109][3][2];
        Gvar.var_1116 = Gvar.var_76[Gvar.var_1110][2][1];
        Gvar.var_1117 = Gvar.var_76[Gvar.var_1110][2][2];
        Gvar.var_1118 = Gvar.var_76[Gvar.var_1109][2][1];
        Gvar.var_1119 = Gvar.var_76[Gvar.var_1109][2][2];
        if (Gvar.var_1109 == 2 || Gvar.var_1109 == 6 || Gvar.var_1109 == 10) {
            if (Gvar.var_493[Gvar.var_1112] == 0) {
                Gvar.var_71[Gvar.var_1118][Gvar.var_1119] = 0;
                Gvar.var_76[Gvar.var_1109][2][1] = 0;
                Gvar.var_76[Gvar.var_1109][2][2] = 0;
            }
        }
        if (Gvar.var_1109 == 3 || Gvar.var_1109 == 4 || Gvar.var_1109 == 7 || Gvar.var_1109 == 8 || Gvar.var_1109 == 11 || Gvar.var_1109 == 12) {
            if (Gvar.var_493[Gvar.var_1112] == 0 && Gvar.var_493[Gvar.var_1113] == 0) {
                Gvar.var_71[Gvar.var_1118][Gvar.var_1119] = 0;
                Gvar.var_76[Gvar.var_1109][2][1] = 0;
                Gvar.var_76[Gvar.var_1109][2][2] = 0;
            }
        }
        if (Gvar.var_1114 == 0 || Gvar.var_1115 == 0) {
            return;
        }
        if (Gvar.var_1110 == Gvar.var_95 && Gvar.var_1005 != 1) {
            Gvar.var_71[Gvar.var_1114][Gvar.var_1115] = 0;
            Gvar.var_71[Gvar.var_1116][Gvar.var_1117] = 0;
            Gvar.var_76[Gvar.var_1109][3][1] = 0;
            Gvar.var_76[Gvar.var_1109][3][2] = 0;
            return;
        }
        if (Gvar.var_1116 == 0 || Gvar.var_1117 == 0) {
            Gvar.var_1116 = Gvar.var_76[Gvar.var_1111][2][1];
            Gvar.var_1117 = Gvar.var_76[Gvar.var_1111][2][2];
            if (Gvar.var_1111 == Gvar.var_95 && Gvar.var_1005 != 1) {
                Gvar.var_71[Gvar.var_1114][Gvar.var_1115] = 0;
                Gvar.var_71[Gvar.var_1116][Gvar.var_1117] = 0;
                Gvar.var_76[Gvar.var_1109][3][1] = 0;
                Gvar.var_76[Gvar.var_1109][3][2] = 0;
                return;
            }
            if (Gvar.var_1116 == 0 || Gvar.var_1117 == 0) {
                Gvar.var_71[Gvar.var_1114][Gvar.var_1115] = 0;
                Gvar.var_71[Gvar.var_1116][Gvar.var_1117] = 0;
                Gvar.var_76[Gvar.var_1109][3][1] = 0;
                Gvar.var_76[Gvar.var_1109][3][2] = 0;
                return;
            }
        }
        Gvar.var_1120 = Gvar.var_1114;
        Gvar.var_1121 = Gvar.var_1115;
        Gvar.var_1122 = Gvar.var_1116 - Gvar.var_1114 - 1;
        Gvar.var_1123 = Adap.rnd(Gvar.var_1122);
        Gvar.var_1123 = Gvar.var_1123 + 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_1123; ++cnt1) {
            Gvar.var_71[Gvar.var_1120][Gvar.var_1121] = 14;
            Gvar.var_1120 = Gvar.var_1120 + 1;
        }
        if (Gvar.var_1115 == Gvar.var_1117) {
            Gvar.var_1124 = 0;
        }
        if (Gvar.var_1115 > Gvar.var_1117) {
            Gvar.var_1124 = 1;
        }
        if (Gvar.var_1115 < Gvar.var_1117) {
            Gvar.var_1124 = 2;
        }
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            Gvar.var_71[Gvar.var_1120][Gvar.var_1121] = 14;
            if (Gvar.var_1121 == Gvar.var_1117) {
                break;
            }
            if (Gvar.var_1124 == 1) {
                Gvar.var_1121 = Gvar.var_1121 - 1;
                if (Gvar.var_1121 < 0) {
                    Gvar.var_1121 = 0;
                }
            }
            if (Gvar.var_1124 == 2) {
                Gvar.var_1121 = Gvar.var_1121 + 1;
            }
        }
        for (let cnt1 = 0; cnt1 < 30; ++cnt1) {
            Gvar.var_71[Gvar.var_1120][Gvar.var_1121] = 14;
            if (Gvar.var_1120 == Gvar.var_1116) {
                break;
            }
            Gvar.var_1120 = Gvar.var_1120 + 1;
        }
        return;
}

export {func250}
