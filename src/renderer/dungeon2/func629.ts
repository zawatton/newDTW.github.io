import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// レクイエムの大迷宮の出現敵設定
// 旧 func629
async function func629(this: any) {
        Adap.dbgprt(629);
        if (Gvar.current_floor == 1) {
            Gvar.var_977 = [79, 1, 5];
            Gvar.var_2917 = Adap.rnd(3);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 2) {
            Gvar.var_977 = [2, 79, 1, 5];
            Gvar.var_2917 = Adap.rnd(4);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 3) {
            Gvar.var_977 = [93, 3, 2, 5];
            Gvar.var_2917 = Adap.rnd(4);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 4) {
            Gvar.var_977 = [94, 77, 93, 3, 2];
            Gvar.var_2917 = Adap.rnd(5);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 5) {
            Gvar.var_977 = [51, 94, 77, 93, 3];
            Gvar.var_2917 = Adap.rnd(5);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 6) {
            Gvar.var_977 = [7, 9, 39, 51, 94, 77, 3];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 7) {
            Gvar.var_977 = [6, 76, 26, 7, 9, 39, 51, 94];
            Gvar.var_2917 = Adap.rnd(8);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 8) {
            Gvar.var_977 = [52, 76, 26, 7, 9, 39, 6];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 9) {
            Gvar.var_977 = [4, 134, 141, 52, 76, 26, 6];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 10) {
            Gvar.var_977 = [119, 99, 13, 4, 134, 141, 101, 76, 52];
            Gvar.var_2917 = Adap.rnd(9);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 11) {
            Gvar.var_977 = [71, 12, 119, 99, 13, 4, 134, 141, 101];
            Gvar.var_2917 = Adap.rnd(9);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 12) {
            Gvar.var_977 = [28, 56, 71, 12, 119, 13, 4, 134, 101];
            Gvar.var_2917 = Adap.rnd(9);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 13) {
            Gvar.var_977 = [131, 148, 28, 31, 56, 71, 12, 134];
            Gvar.var_2917 = Adap.rnd(8);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 14) {
            Gvar.var_977 = [115, 11, 131, 148, 28, 31, 56];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 15) {
            Gvar.var_977 = [45, 29, 115, 11, 131, 148, 28, 31];
            Gvar.var_2917 = Adap.rnd(8);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 16) {
            Gvar.var_977 = [47, 45, 29, 115, 11, 131, 148];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 17) {
            Gvar.var_977 = [136, 27, 47, 45, 29, 115, 11];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 18) {
            Gvar.var_977 = [48, 38, 78, 136, 27, 47, 45, 29];
            Gvar.var_2917 = Adap.rnd(8);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 19) {
            Gvar.var_977 = [17, 46, 48, 38, 78, 136, 27];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 20) {
            Gvar.var_977 = [97, 125, 17, 46, 48, 38, 78];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 21) {
            Gvar.var_977 = [14, 69, 97, 125, 17, 46, 12];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 22) {
            Gvar.var_977 = [18, 59, 145, 14, 97, 125, 69, 17, 46];
            Gvar.var_2917 = Adap.rnd(9);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 23) {
            Gvar.var_977 = [35, 135, 18, 59, 145, 14, 97, 69];
            Gvar.var_2917 = Adap.rnd(8);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 24) {
            Gvar.var_977 = [10, 35, 135, 18, 59, 145, 14];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 25) {
            Gvar.var_977 = [95, 63, 10, 35, 135, 59, 14];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 26) {
            Gvar.var_977 = [32, 84, 43, 85, 95, 63, 10, 35];
            Gvar.var_2917 = Adap.rnd(8);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 27) {
            Gvar.var_977 = [44, 72, 66, 32, 84, 43, 85, 95, 63];
            Gvar.var_2917 = Adap.rnd(9);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 28) {
            Gvar.var_977 = [113, 15, 123, 44, 72, 66, 32, 84, 43];
            Gvar.var_2917 = Adap.rnd(9);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 29) {
            Gvar.var_977 = [80, 65, 113, 15, 123, 44, 72, 66, 119];
            Gvar.var_2917 = Adap.rnd(9);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 30) {
            Gvar.var_977 = [80, 65, 113, 15, 123, 44, 72, 119];
            Gvar.var_2917 = Adap.rnd(8);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor >= 31) {
            Gvar.var_977 = [90];
            Gvar.var_2917 = Adap.rnd(1);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        return;
}

export {func629}
