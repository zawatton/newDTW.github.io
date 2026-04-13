import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// ホテルの外のボス以外の出現敵設定
// 旧 func628
async function func628(this: any) {
        Adap.dbgprt(628);
        if (Gvar.current_floor == 1) {
            Gvar.var_977 = [1, 5]; // No = 1 ヤク中のゴロツキ、No = 5 小汚い浮浪者
            Gvar.var_2917 = Adap.rnd(2);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 2) {
            Gvar.var_977 = [147, 1, 5]; // No = 1 ヤク中のゴロツキ、No = 5 小汚い浮浪者
            Gvar.var_2917 = Adap.rnd(3);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 3) {
            Gvar.var_977 = [93, 2, 147, 5];
            Gvar.var_2917 = Adap.rnd(4);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 4) {
            Gvar.var_977 = [93, 3, 2, 147];
            Gvar.var_2917 = Adap.rnd(4);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 5) {
            Gvar.var_977 = [51, 94, 93, 3];
            Gvar.var_2917 = Adap.rnd(4);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 6) {
            Gvar.var_977 = [51, 94, 93, 3];
            Gvar.var_2917 = Adap.rnd(4);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 7) {
            Gvar.var_977 = [7, 9, 51, 6, 94];
            Gvar.var_2917 = Adap.rnd(5);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 8) {
            Gvar.var_977 = [52, 7, 9, 6];
            Gvar.var_2917 = Adap.rnd(4);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 9) {
            Gvar.var_977 = [134, 52, 7, 9, 6];
            Gvar.var_2917 = Adap.rnd(5);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 10) {
            Gvar.var_977 = [99, 13, 134, 141, 101, 52];
            Gvar.var_2917 = Adap.rnd(6);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 11) {
            Gvar.var_977 = [99, 13, 134, 141, 101, 52];
            Gvar.var_2917 = Adap.rnd(6);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 12) {
            Gvar.var_977 = [8, 24, 25];
            Gvar.var_2917 = Adap.rnd(3);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor >= 13) {
            Gvar.var_977 = [90];
            Gvar.var_2917 = Adap.rnd(1);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 99) {
            Gvar.var_977 = [36, 105, 106, 107, 108, 161, 162];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        return;
}

export {func628}
