import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func251(this: any) {
        Adap.dbgprt(251);
        Gvar.var_1114 = Gvar.var_76[Gvar.var_1109][4][1];
        Gvar.var_1115 = Gvar.var_76[Gvar.var_1109][4][2];
        Gvar.var_1116 = Gvar.var_76[Gvar.var_1110][1][1];
        Gvar.var_1117 = Gvar.var_76[Gvar.var_1110][1][2];
        Gvar.var_1118 = Gvar.var_76[Gvar.var_1109][1][1];
        Gvar.var_1119 = Gvar.var_76[Gvar.var_1109][1][2];
        if (Gvar.var_1109 == 5 || Gvar.var_1109 == 6 || Gvar.var_1109 == 7 || Gvar.var_1109 == 8) {
            if (Gvar.var_493[Gvar.var_1112] == 0) {
                Gvar.var_71[Gvar.var_1118][Gvar.var_1119] = 0;
                Gvar.var_76[Gvar.var_1109][1][1] = 0;
                Gvar.var_76[Gvar.var_1109][1][2] = 0;
            }
        }
        if (Gvar.var_1109 == 9 || Gvar.var_1109 == 10 || Gvar.var_1109 == 11 || Gvar.var_1109 == 12) {
            if (Gvar.var_493[Gvar.var_1112] == 0 && Gvar.var_493[Gvar.var_1113] == 0) {
                Gvar.var_71[Gvar.var_1118][Gvar.var_1119] = 0;
                Gvar.var_76[Gvar.var_1109][1][1] = 0;
                Gvar.var_76[Gvar.var_1109][1][2] = 0;
            }
        }
        if (Gvar.var_1114 == 0 || Gvar.var_1115 == 0) {
            return;
        }
        if (Gvar.var_1110 == Gvar.var_95 && Gvar.var_1005 != 3) {
            Gvar.var_71[Gvar.var_1114][Gvar.var_1115] = 0;
            Gvar.var_71[Gvar.var_1116][Gvar.var_1117] = 0;
            Gvar.var_76[Gvar.var_1109][4][1] = 0;
            Gvar.var_76[Gvar.var_1109][4][2] = 0;
            return;
        }
        if (Gvar.var_1116 == 0 || Gvar.var_1117 == 0) {
            Gvar.var_1116 = Gvar.var_76[Gvar.var_1111][1][1];
            Gvar.var_1117 = Gvar.var_76[Gvar.var_1111][1][2];
            if (Gvar.var_1111 == Gvar.var_95 && Gvar.var_1005 != 3) {
                Gvar.var_71[Gvar.var_1114][Gvar.var_1115] = 0;
                Gvar.var_71[Gvar.var_1116][Gvar.var_1117] = 0;
                Gvar.var_76[Gvar.var_1109][4][1] = 0;
                Gvar.var_76[Gvar.var_1109][4][2] = 0;
                return;
            }
            if (Gvar.var_1116 == 0 || Gvar.var_1117 == 0) {
                Gvar.var_71[Gvar.var_1114][Gvar.var_1115] = 0;
                Gvar.var_71[Gvar.var_1116][Gvar.var_1117] = 0;
                Gvar.var_76[Gvar.var_1109][4][1] = 0;
                Gvar.var_76[Gvar.var_1109][4][2] = 0;
                return;
            }
        }
        if (Gvar.var_1114 == 0 || Gvar.var_1115 == 0) {
            return;
        }
        if (Gvar.var_1110 == Gvar.var_95 && Gvar.var_1005 != 3) {
            return;
        }
        if (Gvar.var_1116 == 0 || Gvar.var_1117 == 0) {
            Gvar.var_1116 = Gvar.var_76[Gvar.var_1111][1][1];
            Gvar.var_1117 = Gvar.var_76[Gvar.var_1111][1][2];
            if (Gvar.var_1111 == Gvar.var_95 && Gvar.var_1005 != 3) {
                return;
            }
            if (Gvar.var_1116 == 0 || Gvar.var_1117 == 0) {
                Gvar.var_71[Gvar.var_1114][Gvar.var_1115] = 0;
                Gvar.var_71[Gvar.var_1116][Gvar.var_1117] = 0;
                return;
            }
        }
        Gvar.var_1120 = Gvar.var_1114;
        Gvar.var_1121 = Gvar.var_1115;
        Gvar.var_1125 = Gvar.var_1117 - Gvar.var_1115 - 1;
        Gvar.var_1126 = Adap.rnd(Gvar.var_1125);
        Gvar.var_1126 = Gvar.var_1126 + 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_1126; ++cnt1) {
            Gvar.var_71[Gvar.var_1120][Gvar.var_1121] = 14;
            Gvar.var_1121 = Gvar.var_1121 + 1;
        }
        if (Gvar.var_1114 == Gvar.var_1116) {
            Gvar.var_1124 = 0;
        }
        if (Gvar.var_1114 > Gvar.var_1116) {
            Gvar.var_1124 = 1;
        }
        if (Gvar.var_1114 < Gvar.var_1116) {
            Gvar.var_1124 = 2;
        }
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            Gvar.var_71[Gvar.var_1120][Gvar.var_1121] = 14;
            if (Gvar.var_1120 == Gvar.var_1116) {
                break;
            }
            if (Gvar.var_1124 == 1) {
                Gvar.var_1120 = Gvar.var_1120 - 1;
                if (Gvar.var_1120 < 0) {
                    Gvar.var_1120 = 0;
                }
            }
            if (Gvar.var_1124 == 2) {
                Gvar.var_1120 = Gvar.var_1120 + 1;
            }
        }
        for (let cnt1 = 0; cnt1 < 30; ++cnt1) {
            Gvar.var_71[Gvar.var_1120][Gvar.var_1121] = 14;
            if (Gvar.var_1121 == Gvar.var_1117) {
                break;
            }
            Gvar.var_1121 = Gvar.var_1121 + 1;
        }
        return;
}

export {func251}
