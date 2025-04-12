import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func245(this: any) {
        Adap.dbgprt(245);
        Gvar.var_1080 = Adap.rnd(14);
        if (Gvar.dungeon_number <= 2) {
            Gvar.var_1080 = 0;
        }
        // No = 5 なので、鉄獄(鉄の牢獄)
        if (Gvar.dungeon_number == 5) {
            Gvar.var_1080 = 0;
        }
        if (Gvar.var_1080 <= 6) {
            Gvar.var_96 = 1;
        }
        if (Gvar.var_1080 == 7) {
            Gvar.var_96 = 2;
        }
        if (Gvar.var_1080 == 8) {
            Gvar.var_96 = 3;
        }
        if (Gvar.var_1080 == 9) {
            Gvar.var_96 = 4;
        }
        if (Gvar.var_1080 == 10) {
            Gvar.var_96 = 5;
        }
        if (Gvar.var_1080 == 11) {
            Gvar.var_96 = 6;
        }
        if (Gvar.var_1080 == 12) {
            Gvar.var_96 = 7;
        }
        if (Gvar.var_1080 == 13) {
            Gvar.var_96 = 8;
        }
        if (Gvar.var_70 == 1) {
            Gvar.var_96 = 1;
        }
        if (Gvar.var_70 == 2) {
            Gvar.var_96 = 3;
        }
        if (Gvar.var_70 == 3) {
            Gvar.var_96 = 4;
        }
        if (Gvar.var_70 == 4) {
            Gvar.var_96 = 2;
        }
        if (Gvar.var_70 == 8) {
            Gvar.var_96 = 5;
        }
        if (Gvar.var_70 == 9) {
            Gvar.var_96 = 6;
        }
        if (Gvar.var_70 == 10) {
            Gvar.var_96 = 7;
        }
        if (Gvar.var_70 == 13) {
            Gvar.var_96 = 8;
        }
        if (Gvar.var_70 == 99) {
            Gvar.var_96 = 9;
        }
        return;
}

export {func245}
