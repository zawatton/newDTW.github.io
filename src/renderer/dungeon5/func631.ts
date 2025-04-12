import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// 鉄の牢獄のボス以外の出現敵設定
async function func631(this: any) {
        Adap.dbgprt(631);
        Gvar.var_2918 = Gvar.current_floor;
        if (Gvar.var_112 > 300) {
            Gvar.var_2919 = Adap.rnd(10);
            if (Gvar.var_2919 >= 5) {
                Gvar.current_floor = Gvar.current_floor + 1;
            }
            if (Gvar.var_2919 >= 6 && Gvar.var_112 > 500) {
                Gvar.current_floor = Gvar.current_floor + 1;
            }
            if (Gvar.var_2919 >= 7 && Gvar.var_112 > 700) {
                Gvar.current_floor = Gvar.current_floor + 1;
            }
        }
        if (Gvar.current_floor == 1) {
            Gvar.var_977 = [5, 1, 147];
            Gvar.var_2917 = Adap.rnd(3);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 2) {
            Gvar.var_977 = [5, 1, 88, 2];
            Gvar.var_2917 = Adap.rnd(4);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 3) {
            Gvar.var_977 = [93, 88, 3, 2];
            Gvar.var_2917 = Adap.rnd(4);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 4) {
            Gvar.var_977 = [93, 94, 3, 2, 77, 101];
            Gvar.var_2917 = Adap.rnd(6);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 5) {
            Gvar.var_977 = [94, 51, 3, 77, 7, 101];
            Gvar.var_2917 = Adap.rnd(6);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 6) {
            Gvar.var_977 = [7, 51, 9, 77, 39, 119];
            Gvar.var_2917 = Adap.rnd(6);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 7) {
            Gvar.var_977 = [7, 9, 39, 76, 52, 119];
            Gvar.var_2917 = Adap.rnd(6);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 8) {
            Gvar.var_977 = [73, 7, 39, 76, 52, 6];
            Gvar.var_2917 = Adap.rnd(6);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 9) {
            Gvar.var_977 = [73, 52, 4, 6, 141, 31];
            Gvar.var_2917 = Adap.rnd(6);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 10) {
            Gvar.var_977 = [4, 138, 99, 134, 141, 148, 31];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 11) {
            Gvar.var_977 = [134, 13, 4, 138, 148, 12, 28];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 12) {
            Gvar.var_977 = [13, 138, 71, 12, 56, 140, 131];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 13) {
            Gvar.var_977 = [71, 12, 56, 140, 131, 115];
            Gvar.var_2917 = Adap.rnd(6);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 14) {
            Gvar.var_977 = [11, 56, 131, 115, 12];
            Gvar.var_2917 = Adap.rnd(5);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 15) {
            Gvar.var_977 = [11, 56, 115, 45, 29];
            Gvar.var_2917 = Adap.rnd(5);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 16) {
            Gvar.var_977 = [11, 56, 115, 45, 29, 31];
            Gvar.var_2917 = Adap.rnd(5);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 17) {
            Gvar.var_977 = [11, 56, 27, 45, 29, 31];
            Gvar.var_2917 = Adap.rnd(5);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 18) {
            Gvar.var_977 = [12, 31, 48, 47, 27];
            Gvar.var_2917 = Adap.rnd(5);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 19) {
            Gvar.var_977 = [31, 48, 47, 27, 11];
            Gvar.var_2917 = Adap.rnd(5);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 20) {
            Gvar.var_977 = [17, 46, 48, 47, 27];
            Gvar.var_2917 = Adap.rnd(5);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 21) {
            Gvar.var_977 = [17, 46, 47, 27, 35];
            Gvar.var_2917 = Adap.rnd(5);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 22) {
            Gvar.var_977 = [69, 136, 14, 45, 85];
            Gvar.var_2917 = Adap.rnd(5);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 23) {
            Gvar.var_977 = [69, 136, 14, 45, 85];
            Gvar.var_2917 = Adap.rnd(5);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 24) {
            Gvar.var_977 = [125, 38, 14, 95, 10, 85];
            Gvar.var_2917 = Adap.rnd(6);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 25) {
            Gvar.var_977 = [72, 38, 84, 65, 66, 65];
            Gvar.var_2917 = Adap.rnd(6);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 26) {
            Gvar.var_977 = [125, 145, 78, 66, 65];
            Gvar.var_2917 = Adap.rnd(5);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 27) {
            Gvar.var_977 = [59, 63, 43, 135, 44];
            Gvar.var_2917 = Adap.rnd(5);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 28) {
            Gvar.var_977 = [123, 80, 15, 59];
            Gvar.var_2917 = Adap.rnd(4);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 29) {
            Gvar.var_977 = [30, 32, 113, 152, 80];
            Gvar.var_2917 = Adap.rnd(5);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 30) {
            Gvar.var_977 = [30, 32, 113, 152, 121];
            Gvar.var_2917 = Adap.rnd(5);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 31) {
            Gvar.var_977 = [122, 160, 155, 150];
            Gvar.var_2917 = Adap.rnd(4);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 32) {
            Gvar.var_977 = [122, 160, 155, 150, 144];
            Gvar.var_2917 = Adap.rnd(5);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 33) {
            Gvar.var_977 = [156, 157, 86, 144, 150];
            Gvar.var_2917 = Adap.rnd(5);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 34) {
            Gvar.var_977 = [156, 157, 86, 144, 150, 158];
            Gvar.var_2917 = Adap.rnd(6);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 35) {
            Gvar.var_977 = [128, 68, 67, 172];
            Gvar.var_2917 = Adap.rnd(4);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 36) {
            Gvar.var_977 = [128, 68, 67, 172];
            Gvar.var_2917 = Adap.rnd(4);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 37) {
            Gvar.var_977 = [128, 68, 67, 172];
            Gvar.var_2917 = Adap.rnd(4);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 38) {
            Gvar.var_977 = [110, 109, 87, 139];
            Gvar.var_2917 = Adap.rnd(4);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 39) {
            Gvar.var_977 = [110, 109, 87, 139];
            Gvar.var_2917 = Adap.rnd(4);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 40) {
            Gvar.var_977 = [110, 109, 87, 139];
            Gvar.var_2917 = Adap.rnd(4);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 41) {
            Gvar.var_977 = [124, 129, 126, 154];
            Gvar.var_2917 = Adap.rnd(4);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 42) {
            Gvar.var_977 = [124, 129, 126, 154];
            Gvar.var_2917 = Adap.rnd(4);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 43) {
            Gvar.var_977 = [124, 129, 126, 154];
            Gvar.var_2917 = Adap.rnd(4);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 44) {
            Gvar.var_977 = [153, 133, 137, 21, 64];
            Gvar.var_2917 = Adap.rnd(5);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 45) {
            Gvar.var_977 = [153, 133, 137, 21, 64];
            Gvar.var_2917 = Adap.rnd(5);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 46) {
            Gvar.var_977 = [153, 133, 137, 21, 64];
            Gvar.var_2917 = Adap.rnd(5);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 47) {
            Gvar.var_977 = [111, 98, 120, 60, 114, 118, 151];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 48) {
            Gvar.var_977 = [111, 98, 120, 60, 114, 118, 151];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 49) {
            Gvar.var_977 = [111, 98, 120, 60, 114, 118, 151];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor >= 50) {
            Gvar.var_977 = [111, 98, 120, 60, 114, 118, 151];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        Gvar.current_floor = Gvar.var_2918;
        return;
}

export {func631}
