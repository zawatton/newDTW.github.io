import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// 一巡後の世界のボス以外の出現敵設定
async function func634(this: any) {
        Adap.dbgprt(634);
        if (Gvar.current_floor == 1) {
            Gvar.var_977 = [77, 39, 76, 52, 26, 4, 138, 134, 13, 141, 71, 140];
            Gvar.var_2917 = Adap.rnd(12);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 2) {
            Gvar.var_977 = [28, 12, 56, 115, 131, 31, 46, 47, 27, 148, 48];
            Gvar.var_2917 = Adap.rnd(11);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 3) {
            Gvar.var_977 = [99, 46, 136, 14, 17, 35, 38, 95];
            Gvar.var_2917 = Adap.rnd(8);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 4) {
            Gvar.var_977 = [45, 85, 43, 59, 145, 84, 125, 72, 65, 123];
            Gvar.var_2917 = Adap.rnd(10);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 5) {
            Gvar.var_977 = [66, 44, 63, 78, 135, 15, 80, 32, 30, 113];
            Gvar.var_2917 = Adap.rnd(10);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 6) {
            Gvar.var_977 = [122, 121, 152, 160, 155, 156, 157, 86];
            Gvar.var_2917 = Adap.rnd(8);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 7) {
            Gvar.var_977 = [128, 158, 150, 68, 67, 151, 144];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 8) {
            Gvar.var_977 = [110, 109, 87, 139, 153, 124, 127, 154];
            Gvar.var_2917 = Adap.rnd(8);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 9) {
            Gvar.var_977 = [129, 126, 137, 64, 111, 98, 120, 60, 114, 118];
            Gvar.var_2917 = Adap.rnd(10);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor >= 10) {
            Gvar.var_2922 = Adap.rnd(10);
            if (Gvar.var_2922 <= 5) {
                Gvar.var_2917 = Adap.rnd(19);
                if (Gvar.var_2917 == 0) {
                    Gvar.var_953 = 129;
                }
                if (Gvar.var_2917 == 1) {
                    Gvar.var_953 = 126;
                }
                if (Gvar.var_2917 == 2) {
                    Gvar.var_953 = 137;
                }
                if (Gvar.var_2917 == 3) {
                    Gvar.var_953 = 64;
                }
                if (Gvar.var_2917 == 4) {
                    Gvar.var_953 = 111;
                }
                if (Gvar.var_2917 == 5) {
                    Gvar.var_953 = 98;
                }
                if (Gvar.var_2917 == 6) {
                    Gvar.var_953 = 120;
                }
                if (Gvar.var_2917 == 7) {
                    Gvar.var_953 = 60;
                }
                if (Gvar.var_2917 == 8) {
                    Gvar.var_953 = 114;
                }
                if (Gvar.var_2917 == 9) {
                    Gvar.var_953 = 87;
                }
                if (Gvar.var_2917 == 10) {
                    Gvar.var_953 = 127;
                }
                if (Gvar.var_2917 == 11) {
                    Gvar.var_953 = 154;
                }
                if (Gvar.var_2917 == 12) {
                    Gvar.var_953 = 160;
                }
                if (Gvar.var_2917 == 13) {
                    Gvar.var_953 = 68;
                }
                if (Gvar.var_2917 == 14) {
                    Gvar.var_953 = 150;
                }
                if (Gvar.var_2917 == 15) {
                    Gvar.var_953 = 161;
                }
                if (Gvar.var_2917 == 16) {
                    Gvar.var_953 = 158;
                }
                if (Gvar.var_2917 == 17) {
                    Gvar.var_953 = 67;
                }
                if (Gvar.var_2917 == 18) {
                    Gvar.var_953 = 159;
                }
            }
            if (Gvar.var_2922 == 6 || Gvar.var_2922 == 7 || Gvar.var_2922 == 8) {
                Gvar.var_2917 = Adap.rnd(28);
                if (Gvar.var_2917 == 0) {
                    Gvar.var_953 = 133;
                }
                if (Gvar.var_2917 == 1) {
                    Gvar.var_953 = 124;
                }
                if (Gvar.var_2917 == 2) {
                    Gvar.var_953 = 151;
                }
                if (Gvar.var_2917 == 3) {
                    Gvar.var_953 = 38;
                }
                if (Gvar.var_2917 == 4) {
                    Gvar.var_953 = 31;
                }
                if (Gvar.var_2917 == 5) {
                    Gvar.var_953 = 148;
                }
                if (Gvar.var_2917 == 6) {
                    Gvar.var_953 = 27;
                }
                if (Gvar.var_2917 == 7) {
                    Gvar.var_953 = 78;
                }
                if (Gvar.var_2917 == 8) {
                    Gvar.var_953 = 135;
                }
                if (Gvar.var_2917 == 9) {
                    Gvar.var_953 = 118;
                }
                if (Gvar.var_2917 == 10) {
                    Gvar.var_953 = 15;
                }
                if (Gvar.var_2917 == 11) {
                    Gvar.var_953 = 80;
                }
                if (Gvar.var_2917 == 12) {
                    Gvar.var_953 = 85;
                }
                if (Gvar.var_2917 == 13) {
                    Gvar.var_953 = 59;
                }
                if (Gvar.var_2917 == 14) {
                    Gvar.var_953 = 115;
                }
                if (Gvar.var_2917 == 15) {
                    Gvar.var_953 = 131;
                }
                if (Gvar.var_2917 == 16) {
                    Gvar.var_953 = 39;
                }
                if (Gvar.var_2917 == 17) {
                    Gvar.var_953 = 26;
                }
                if (Gvar.var_2917 == 18) {
                    Gvar.var_953 = 4;
                }
                if (Gvar.var_2917 == 19) {
                    Gvar.var_953 = 134;
                }
                if (Gvar.var_2917 == 20) {
                    Gvar.var_953 = 72;
                }
                if (Gvar.var_2917 == 21) {
                    Gvar.var_953 = 125;
                }
                if (Gvar.var_2917 == 22) {
                    Gvar.var_953 = 63;
                }
                if (Gvar.var_2917 == 23) {
                    Gvar.var_953 = 153;
                }
                if (Gvar.var_2917 == 24) {
                    Gvar.var_953 = 155;
                }
                if (Gvar.var_2917 == 25) {
                    Gvar.var_953 = 21;
                }
                if (Gvar.var_2917 == 26) {
                    Gvar.var_953 = 29;
                }
                if (Gvar.var_2917 == 27) {
                    Gvar.var_953 = 30;
                }
            }
            if (Gvar.var_2922 == 9) {
                Gvar.var_2917 = Adap.rnd(62);
                if (Gvar.var_2917 == 0) {
                    Gvar.var_953 = 79;
                }
                if (Gvar.var_2917 == 1) {
                    Gvar.var_953 = 1;
                }
                if (Gvar.var_2917 == 2) {
                    Gvar.var_953 = 5;
                }
                if (Gvar.var_2917 == 3) {
                    Gvar.var_953 = 88;
                }
                if (Gvar.var_2917 == 4) {
                    Gvar.var_953 = 147;
                }
                if (Gvar.var_2917 == 5) {
                    Gvar.var_953 = 2;
                }
                if (Gvar.var_2917 == 6) {
                    Gvar.var_953 = 93;
                }
                if (Gvar.var_2917 == 7) {
                    Gvar.var_953 = 3;
                }
                if (Gvar.var_2917 == 8) {
                    Gvar.var_953 = 94;
                }
                if (Gvar.var_2917 == 9) {
                    Gvar.var_953 = 77;
                }
                if (Gvar.var_2917 == 10) {
                    Gvar.var_953 = 51;
                }
                if (Gvar.var_2917 == 11) {
                    Gvar.var_953 = 7;
                }
                if (Gvar.var_2917 == 12) {
                    Gvar.var_953 = 9;
                }
                if (Gvar.var_2917 == 13) {
                    Gvar.var_953 = 39;
                }
                if (Gvar.var_2917 == 14) {
                    Gvar.var_953 = 76;
                }
                if (Gvar.var_2917 == 15) {
                    Gvar.var_953 = 6;
                }
                if (Gvar.var_2917 == 16) {
                    Gvar.var_953 = 52;
                }
                if (Gvar.var_2917 == 17) {
                    Gvar.var_953 = 73;
                }
                if (Gvar.var_2917 == 18) {
                    Gvar.var_953 = 101;
                }
                if (Gvar.var_2917 == 19) {
                    Gvar.var_953 = 141;
                }
                if (Gvar.var_2917 == 20) {
                    Gvar.var_953 = 13;
                }
                if (Gvar.var_2917 == 21) {
                    Gvar.var_953 = 119;
                }
                if (Gvar.var_2917 == 22) {
                    Gvar.var_953 = 99;
                }
                if (Gvar.var_2917 == 23) {
                    Gvar.var_953 = 138;
                }
                if (Gvar.var_2917 == 24) {
                    Gvar.var_953 = 71;
                }
                if (Gvar.var_2917 == 25) {
                    Gvar.var_953 = 12;
                }
                if (Gvar.var_2917 == 26) {
                    Gvar.var_953 = 56;
                }
                if (Gvar.var_2917 == 27) {
                    Gvar.var_953 = 140;
                }
                if (Gvar.var_2917 == 28) {
                    Gvar.var_953 = 27;
                }
                if (Gvar.var_2917 == 29) {
                    Gvar.var_953 = 11;
                }
                if (Gvar.var_2917 == 30) {
                    Gvar.var_953 = 28;
                }
                if (Gvar.var_2917 == 31) {
                    Gvar.var_953 = 17;
                }
                if (Gvar.var_2917 == 32) {
                    Gvar.var_953 = 14;
                }
                if (Gvar.var_2917 == 33) {
                    Gvar.var_953 = 69;
                }
                if (Gvar.var_2917 == 34) {
                    Gvar.var_953 = 18;
                }
                if (Gvar.var_2917 == 35) {
                    Gvar.var_953 = 10;
                }
                if (Gvar.var_2917 == 36) {
                    Gvar.var_953 = 84;
                }
                if (Gvar.var_2917 == 37) {
                    Gvar.var_953 = 48;
                }
                if (Gvar.var_2917 == 38) {
                    Gvar.var_953 = 95;
                }
                if (Gvar.var_2917 == 39) {
                    Gvar.var_953 = 43;
                }
                if (Gvar.var_2917 == 40) {
                    Gvar.var_953 = 66;
                }
                if (Gvar.var_2917 == 41) {
                    Gvar.var_953 = 113;
                }
                if (Gvar.var_2917 == 42) {
                    Gvar.var_953 = 123;
                }
                if (Gvar.var_2917 == 43) {
                    Gvar.var_953 = 65;
                }
                if (Gvar.var_2917 == 44) {
                    Gvar.var_953 = 152;
                }
                if (Gvar.var_2917 == 45) {
                    Gvar.var_953 = 86;
                }
                if (Gvar.var_2917 == 46) {
                    Gvar.var_953 = 156;
                }
                if (Gvar.var_2917 == 47) {
                    Gvar.var_953 = 157;
                }
                if (Gvar.var_2917 == 48) {
                    Gvar.var_953 = 128;
                }
                if (Gvar.var_2917 == 49) {
                    Gvar.var_953 = 109;
                }
                if (Gvar.var_2917 == 50) {
                    Gvar.var_953 = 110;
                }
                if (Gvar.var_2917 == 51) {
                    Gvar.var_953 = 139;
                }
                if (Gvar.var_2917 == 52) {
                    Gvar.var_953 = 122;
                }
                if (Gvar.var_2917 == 53) {
                    Gvar.var_953 = 121;
                }
                if (Gvar.var_2917 == 54) {
                    Gvar.var_953 = 35;
                }
                if (Gvar.var_2917 == 55) {
                    Gvar.var_953 = 145;
                }
                if (Gvar.var_2917 == 56) {
                    Gvar.var_953 = 47;
                }
                if (Gvar.var_2917 == 57) {
                    Gvar.var_953 = 46;
                }
                if (Gvar.var_2917 == 58) {
                    Gvar.var_953 = 45;
                }
                if (Gvar.var_2917 == 59) {
                    Gvar.var_953 = 136;
                }
                if (Gvar.var_2917 == 60) {
                    Gvar.var_953 = 144;
                }
                if (Gvar.var_2917 == 61) {
                    Gvar.var_953 = 172;
                }
            }
        }
        return;
}

export {func634}
