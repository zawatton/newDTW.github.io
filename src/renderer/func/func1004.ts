import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func1004(this: any) {
        Adap.dbgprt(1004);
        if (Gvar.var_469 == 0) {
                Gvar.var_881 = 0;
        }
        if (Gvar.var_469 == 1) {
                Gvar.var_881 = 10;
        }
        if (Gvar.var_469 == 2) {
                Gvar.var_881 = 20;
        }
        if (Gvar.var_469 == 3) {
                Gvar.var_881 = 30;
        }
        Gvar.var_882 = (Gvar.var_74 + 2) * Gvar.var_34 + Gvar.var_881;
        Gvar.var_883 = (Gvar.var_75 + 1) * Gvar.var_35 + Gvar.var_881;
        if (Gvar.var_242 == 0) {
                if (Gvar.var_224 == 6) {
                        Gvar.var_882 = (Gvar.var_74 + 2) * Gvar.var_34 - Gvar.var_881;
                        Gvar.var_883 = (Gvar.var_75 + 1) * Gvar.var_35;
                }
                if (Gvar.var_224 == 4) {
                        Gvar.var_882 = (Gvar.var_74 + 2) * Gvar.var_34 + Gvar.var_881;
                        Gvar.var_883 = (Gvar.var_75 + 1) * Gvar.var_35;
                }
                if (Gvar.var_224 == 2) {
                        Gvar.var_882 = (Gvar.var_74 + 2) * Gvar.var_34;
                        Gvar.var_883 = (Gvar.var_75 + 1) * Gvar.var_35 - Gvar.var_881;
                }
                if (Gvar.var_224 == 8) {
                        Gvar.var_882 = (Gvar.var_74 + 2) * Gvar.var_34;
                        Gvar.var_883 = (Gvar.var_75 + 1) * Gvar.var_35 + Gvar.var_881;
                }
                if (Gvar.var_224 == 9) {
                        Gvar.var_882 = (Gvar.var_74 + 2) * Gvar.var_34 - Gvar.var_881;
                        Gvar.var_883 = (Gvar.var_75 + 1) * Gvar.var_35 + Gvar.var_881;
                }
                if (Gvar.var_224 == 7) {
                        Gvar.var_882 = (Gvar.var_74 + 2) * Gvar.var_34 + Gvar.var_881;
                        Gvar.var_883 = (Gvar.var_75 + 1) * Gvar.var_35 + Gvar.var_881;
                }
                if (Gvar.var_224 == 3) {
                        Gvar.var_882 = (Gvar.var_74 + 2) * Gvar.var_34 - Gvar.var_881;
                        Gvar.var_883 = (Gvar.var_75 + 1) * Gvar.var_35 - Gvar.var_881;
                }
                if (Gvar.var_224 == 1) {
                        Gvar.var_882 = (Gvar.var_74 + 2) * Gvar.var_34 + Gvar.var_881;
                        Gvar.var_883 = (Gvar.var_75 + 1) * Gvar.var_35 - Gvar.var_881;
                }
        }
        if (Gvar.var_242 == 1) {
                Gvar.var_882 = (Gvar.var_74 + 2) * Gvar.var_34;
                Gvar.var_883 = (Gvar.var_75 + 1) * Gvar.var_35;
        }
        Adap.pos(0, 0);
        Adap.gmode(2);
        if (Gvar.var_441 == 1) {
                Adap.gcopy(54, Gvar.var_882, Gvar.var_883, 340, 340);
        }
        else {
                Adap.gcopy(53, Gvar.var_882, Gvar.var_883, 340, 340);
        }
        return;
}

export {func1004}
