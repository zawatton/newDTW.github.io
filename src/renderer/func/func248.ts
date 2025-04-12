import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func248(this: any) {
        Adap.dbgprt(248);
        Gvar.var_1095 = Adap.rnd(Gvar.var_1096);
        Gvar.var_1095 = Gvar.var_1095 + 1;
        Gvar.var_1097 = Adap.rnd(Gvar.var_1098);
        Gvar.var_1097 = Gvar.var_1097 + 1;
        Gvar.var_1099 = Adap.rnd(Gvar.var_1100);
        Gvar.var_1099 = Gvar.var_1099 + 1;
        Gvar.var_1101 = Adap.rnd(Gvar.var_1102);
        Gvar.var_1101 = Gvar.var_1101 + 1;
        Gvar.var_1103 = 0;
        Gvar.var_1104 = 0;
        Gvar.var_1105 = 0;
        Gvar.var_1106 = 0;
        Gvar.var_1107 = 0;
        Gvar.var_764 = 0;
        Gvar.var_1075 = Gvar.var_561;
        for (let cnt1 = 0; cnt1 < Gvar.var_1084; ++cnt1) {
            Gvar.var_1108 = 0;
            Gvar.var_1076 = Gvar.var_562;
            for (let cnt2 = 0; cnt2 < Gvar.var_1082; ++cnt2) {
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 35) {
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 46) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = Gvar.var_560;
                    if (Gvar.var_1004 == 1) {
                        Gvar.var_72[Gvar.var_1076][Gvar.var_1075] = 1;
                    }
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 50) {
                    Gvar.var_1103 = Gvar.var_1103 + 1;
                    if (Gvar.var_1097 == Gvar.var_1103 && Gvar.var_560 != 9 && Gvar.var_560 != 10 && Gvar.var_560 != 11 && Gvar.var_560 != 12) {
                        Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 14;
                        Gvar.var_76[Gvar.var_560][4][1] = Gvar.var_1076;
                        Gvar.var_76[Gvar.var_560][4][2] = Gvar.var_1075;
                    }
                    else {
                        Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 0;
                    }
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 52) {
                    Gvar.var_1104 = Gvar.var_1104 + 1;
                    if (Gvar.var_1099 == Gvar.var_1104 && Gvar.var_560 != 1 && Gvar.var_560 != 5 && Gvar.var_560 != 9) {
                        Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 14;
                        Gvar.var_76[Gvar.var_560][2][1] = Gvar.var_1076;
                        Gvar.var_76[Gvar.var_560][2][2] = Gvar.var_1075;
                    }
                    else {
                        Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 0;
                    }
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 54) {
                    Gvar.var_1105 = Gvar.var_1105 + 1;
                    if (Gvar.var_1101 == Gvar.var_1105 && Gvar.var_560 != 4 && Gvar.var_560 != 8 && Gvar.var_560 != 12) {
                        Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 14;
                        Gvar.var_76[Gvar.var_560][3][1] = Gvar.var_1076;
                        Gvar.var_76[Gvar.var_560][3][2] = Gvar.var_1075;
                    }
                    else {
                        Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 0;
                    }
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 56) {
                    Gvar.var_1106 = Gvar.var_1106 + 1;
                    if (Gvar.var_1095 == Gvar.var_1106 && Gvar.var_560 != 1 && Gvar.var_560 != 2 && Gvar.var_560 != 3 && Gvar.var_560 != 4) {
                        Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 14;
                        Gvar.var_76[Gvar.var_560][1][1] = Gvar.var_1076;
                        Gvar.var_76[Gvar.var_560][1][2] = Gvar.var_1075;
                    }
                    else {
                        Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 0;
                    }
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 94) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 13;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 45) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 14;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 51) {
                    if (Gvar.var_1005 == 0) {
                        Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 14;
                        Gvar.var_76[Gvar.var_560][4][1] = Gvar.var_1076;
                        Gvar.var_76[Gvar.var_560][4][2] = Gvar.var_1075;
                    }
                    else {
                        Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 0;
                        Gvar.var_76[Gvar.var_560][4][1] = 0;
                        Gvar.var_76[Gvar.var_560][4][2] = 0;
                    }
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 53) {
                    if (Gvar.var_1005 == 1) {
                        Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 14;
                        Gvar.var_76[Gvar.var_560][2][1] = Gvar.var_1076;
                        Gvar.var_76[Gvar.var_560][2][2] = Gvar.var_1075;
                    }
                    else {
                        Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 0;
                        Gvar.var_76[Gvar.var_560][2][1] = 0;
                        Gvar.var_76[Gvar.var_560][2][2] = 0;
                    }
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 55) {
                    if (Gvar.var_1005 == 2) {
                        Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 14;
                        Gvar.var_76[Gvar.var_560][3][1] = Gvar.var_1076;
                        Gvar.var_76[Gvar.var_560][3][2] = Gvar.var_1075;
                    }
                    else {
                        Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 0;
                        Gvar.var_76[Gvar.var_560][3][1] = 0;
                        Gvar.var_76[Gvar.var_560][3][2] = 0;
                    }
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 57) {
                    if (Gvar.var_1005 == 3) {
                        Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 14;
                        Gvar.var_76[Gvar.var_560][1][1] = Gvar.var_1076;
                        Gvar.var_76[Gvar.var_560][1][2] = Gvar.var_1075;
                    }
                    else {
                        Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 0;
                        Gvar.var_76[Gvar.var_560][1][1] = 0;
                        Gvar.var_76[Gvar.var_560][1][2] = 0;
                    }
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 73) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = Gvar.var_560;
                    Gvar.var_79[Gvar.var_1076][Gvar.var_1075] = 1;
                    Gvar.var_72[Gvar.var_1076][Gvar.var_1075] = 1;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 74) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = Gvar.var_560;
                    Gvar.var_79[Gvar.var_1076][Gvar.var_1075] = 2;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 66) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = Gvar.var_560;
                    Gvar.var_79[Gvar.var_1076][Gvar.var_1075] = 3;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 97) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = Gvar.var_560;
                    if (Gvar.var_1005 == 0) {
                        Gvar.var_72[Gvar.var_1076][Gvar.var_1075] = 2;
                        Gvar.var_1016 = Gvar.var_1076;
                        Gvar.var_1017 = Gvar.var_1075;
                        Gvar.var_84[Gvar.var_1076][Gvar.var_1075] = 1;
                        Gvar.var_995 = Gvar.var_560;
                    }
                    else {
                        Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = Gvar.var_560;
                        Gvar.var_72[Gvar.var_1076][Gvar.var_1075] = 1;
                        Gvar.var_996 = Gvar.var_1005;
                    }
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 98) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = Gvar.var_560;
                    if (Gvar.var_1005 == 0) {
                        Gvar.var_72[Gvar.var_1076][Gvar.var_1075] = 3;
                        Gvar.var_1018 = Gvar.var_1076;
                        Gvar.var_1019 = Gvar.var_1075;
                    }
                    else {
                        Gvar.var_72[Gvar.var_1076][Gvar.var_1075] = 1;
                    }
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 99) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = Gvar.var_560;
                    if (Gvar.var_1005 == 0) {
                        Gvar.var_72[Gvar.var_1076][Gvar.var_1075] = 4;
                        Gvar.var_1020 = Gvar.var_1076;
                        Gvar.var_1021 = Gvar.var_1075;
                    }
                    else {
                        Gvar.var_72[Gvar.var_1076][Gvar.var_1075] = 1;
                    }
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 100) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = Gvar.var_560;
                    if (Gvar.var_1005 == 1) {
                        Gvar.var_72[Gvar.var_1076][Gvar.var_1075] = 2;
                        Gvar.var_1016 = Gvar.var_1076;
                        Gvar.var_1017 = Gvar.var_1075;
                        Gvar.var_84[Gvar.var_1076][Gvar.var_1075] = 1;
                        Gvar.var_995 = Gvar.var_560;
                    }
                    else {
                        Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = Gvar.var_560;
                        Gvar.var_72[Gvar.var_1076][Gvar.var_1075] = 1;
                        Gvar.var_996 = Gvar.var_1005;
                    }
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 101) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = Gvar.var_560;
                    if (Gvar.var_1005 == 1) {
                        Gvar.var_72[Gvar.var_1076][Gvar.var_1075] = 3;
                        Gvar.var_1018 = Gvar.var_1076;
                        Gvar.var_1019 = Gvar.var_1075;
                    }
                    else {
                        Gvar.var_72[Gvar.var_1076][Gvar.var_1075] = 1;
                    }
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 102) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = Gvar.var_560;
                    if (Gvar.var_1005 == 1) {
                        Gvar.var_72[Gvar.var_1076][Gvar.var_1075] = 4;
                        Gvar.var_1020 = Gvar.var_1076;
                        Gvar.var_1021 = Gvar.var_1075;
                    }
                    else {
                        Gvar.var_72[Gvar.var_1076][Gvar.var_1075] = 1;
                    }
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 103) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = Gvar.var_560;
                    if (Gvar.var_1005 == 2) {
                        Gvar.var_72[Gvar.var_1076][Gvar.var_1075] = 2;
                        Gvar.var_1016 = Gvar.var_1076;
                        Gvar.var_1017 = Gvar.var_1075;
                        Gvar.var_84[Gvar.var_1076][Gvar.var_1075] = 1;
                        Gvar.var_995 = Gvar.var_560;
                    }
                    else {
                        Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = Gvar.var_560;
                        Gvar.var_72[Gvar.var_1076][Gvar.var_1075] = 1;
                        Gvar.var_996 = Gvar.var_1005;
                    }
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 104) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = Gvar.var_560;
                    if (Gvar.var_1005 == 2) {
                        Gvar.var_72[Gvar.var_1076][Gvar.var_1075] = 3;
                        Gvar.var_1018 = Gvar.var_1076;
                        Gvar.var_1019 = Gvar.var_1075;
                    }
                    else {
                        Gvar.var_72[Gvar.var_1076][Gvar.var_1075] = 1;
                    }
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 105) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = Gvar.var_560;
                    if (Gvar.var_1005 == 2) {
                        Gvar.var_72[Gvar.var_1076][Gvar.var_1075] = 4;
                        Gvar.var_1020 = Gvar.var_1076;
                        Gvar.var_1021 = Gvar.var_1075;
                    }
                    else {
                        Gvar.var_72[Gvar.var_1076][Gvar.var_1075] = 1;
                    }
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 106) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = Gvar.var_560;
                    if (Gvar.var_1005 == 3) {
                        Gvar.var_72[Gvar.var_1076][Gvar.var_1075] = 2;
                        Gvar.var_1016 = Gvar.var_1076;
                        Gvar.var_1017 = Gvar.var_1075;
                        Gvar.var_1016 = Gvar.var_1076;
                        Gvar.var_1017 = Gvar.var_1075;
                        Gvar.var_84[Gvar.var_1076][Gvar.var_1075] = 1;
                        Gvar.var_995 = Gvar.var_560;
                    }
                    else {
                        Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = Gvar.var_560;
                        Gvar.var_72[Gvar.var_1076][Gvar.var_1075] = 1;
                        Gvar.var_996 = Gvar.var_1005;
                    }
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 107) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = Gvar.var_560;
                    if (Gvar.var_1005 == 3) {
                        Gvar.var_72[Gvar.var_1076][Gvar.var_1075] = 3;
                        Gvar.var_1018 = Gvar.var_1076;
                        Gvar.var_1019 = Gvar.var_1075;
                    }
                    else {
                        Gvar.var_72[Gvar.var_1076][Gvar.var_1075] = 1;
                    }
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 108) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = Gvar.var_560;
                    if (Gvar.var_1005 == 3) {
                        Gvar.var_72[Gvar.var_1076][Gvar.var_1075] = 4;
                        Gvar.var_1020 = Gvar.var_1076;
                        Gvar.var_1021 = Gvar.var_1075;
                    }
                    else {
                        Gvar.var_72[Gvar.var_1076][Gvar.var_1075] = 1;
                    }
                }
                Gvar.var_1076 = Gvar.var_1076 + 1;
                Gvar.var_1108 = Gvar.var_1108 + 1;
                Gvar.var_764 = Gvar.var_764 + 1;
            }
            Gvar.var_1107 = Gvar.var_1107 + 1;
            Gvar.var_1075 = Gvar.var_1075 + 1;
        }
        return;
}

export {func248}
