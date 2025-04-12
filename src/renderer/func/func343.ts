import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func343(this: any) {
        Adap.dbgprt(343);
        if (Gvar.var_1233 == 1) {
            return;
        }
        Gvar.var_1235 = 130;
        if (Gvar.var_352 > 200 && Gvar.var_352 < 300) {
            Gvar.var_1236 = Gvar.var_352 - 200;
            Gvar.var_1235 = 130 - Gvar.var_1236;
        }
        if (Gvar.var_352 >= 300) {
            Gvar.var_1235 = 30;
        }
        Adap.color(255, 255, 255);
        Adap.boxf(Gvar.var_1235 - 1, 24, Gvar.var_352 + Gvar.var_1235 + 1, 31);
        Adap.color(255, 0, 0);
        Adap.boxf(Gvar.var_1235, 25, Gvar.var_352 + Gvar.var_1235, 30);
        Adap.color(255, 0, 0);
        Adap.boxf(Gvar.var_1235, 25, Gvar.var_352 + Gvar.var_1235, 30);
        if (Gvar.var_211 > 0) {
            Adap.color(255, 255, 255);
            Adap.boxf(Gvar.var_1235, 25, Gvar.var_211 + Gvar.var_1235 + 1, 30);
            Adap.color(0, 255, 0);
            if (Gvar.var_130 >= 1) {
                Adap.color(0, 0, 255);
            }
            if (Gvar.var_134 >= 1 || Gvar.var_135 >= 1 || Gvar.var_136 >= 1 || Gvar.var_137 >= 1) {
                Adap.color(255, 0, 255);
            }
            Adap.boxf(Gvar.var_1235, 25, Gvar.var_211 + Gvar.var_1235, 30);
        }
        Adap.font(Gvar.font_type, 11);
        Adap.color(255, 255, 255);
        Adap.pos(Gvar.var_1235 - 18, 24);
        Adap.mes("HP");
        return;
}

export {func343}
