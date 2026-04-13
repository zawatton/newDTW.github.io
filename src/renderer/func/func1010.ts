import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func1010(this: any) {
        Adap.dbgprt(1010);
        Adap.gmode(2);
        if (Gvar.var_1746 >= 1) {
                Adap.color(0, 0, 0);
                if (Gvar.var_1746 == 1) {
                        Adap.gmode(4, null, null, 20);
                }
                if (Gvar.var_1746 == 2) {
                        Adap.gmode(4, null, null, 80);
                }
                if (Gvar.var_1746 == 3) {
                        Adap.gmode(4, null, null, 110);
                }
                if (Gvar.var_1746 == 4) {
                        Adap.gmode(4, null, null, 160);
                }
                if (Gvar.var_1746 >= 5) {
                        Adap.gmode(4, null, null, 256);
                }
                Gvar.var_2782 = 160;
                Gvar.var_2783 = 150;
                if (Gvar.var_224 == 4) {
                        Gvar.var_2782 = Gvar.var_2782 - 40;
                }
                if (Gvar.var_224 == 6) {
                        Gvar.var_2782 = Gvar.var_2782 + 40;
                }
                if (Gvar.var_224 == 8) {
                        Gvar.var_2783 = Gvar.var_2783 - 40;
                }
                if (Gvar.var_224 == 2) {
                        Gvar.var_2783 = Gvar.var_2783 + 40;
                }
                if (Gvar.var_224 == 1) {
                        Gvar.var_2782 = Gvar.var_2782 - 40;
                        Gvar.var_2783 = Gvar.var_2783 + 40;
                }
                if (Gvar.var_224 == 3) {
                        Gvar.var_2782 = Gvar.var_2782 + 40;
                        Gvar.var_2783 = Gvar.var_2783 + 40;
                }
                if (Gvar.var_224 == 7) {
                        Gvar.var_2782 = Gvar.var_2782 - 40;
                        Gvar.var_2783 = Gvar.var_2783 - 40;
                }
                if (Gvar.var_224 == 9) {
                        Gvar.var_2782 = Gvar.var_2782 + 40;
                        Gvar.var_2783 = Gvar.var_2783 - 40;
                }
                Adap.pos(Gvar.var_2782 - 3, Gvar.var_2783 - 5);
                if (Gvar.var_1746 <= 9) {
                        Adap.gcopy(Gvar.var_475, 1040, 2480, 40, 40);
                }
                if (Gvar.var_1746 == 10) {
                        Adap.gcopy(Gvar.var_475, 1080, 2480, 40, 40);
                }
                if (Gvar.var_1746 >= 11) {
                        Adap.gcopy(Gvar.var_475, 1120, 2480, 40, 40);
                }
        }
        if (Gvar.var_2503 >= 1) {
                Adap.pos(Gvar.var_466, Gvar.var_467 + 10);
                Gvar.var_3934 = 400 + (Gvar.var_2503 - 1) % 10 * 40;
                Gvar.var_3935 = 0;
                if (Gvar.var_2503 > 15) {
                        Gvar.var_3934 = 560;
                }
                if (Gvar.var_2503 > 10) {
                        Gvar.var_3935 = 40;
                }
                Adap.gcopy(9, Gvar.var_3934, Gvar.var_3935, 40, 40);
        }
        return;
}

export {func1010}
