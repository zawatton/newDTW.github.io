/**
 * func537 — func537 不明
 *
 * (org原典: newDTW_func5)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func537(this: any) {
        Adap.dbgprt(537);
        Gvar.var_449 = 0;
        for (let cnt1 = 0; cnt1 < Gvar.var_32; ++cnt1) {
            Gvar.var_447 = 0;
            for (let cnt2 = 0; cnt2 < Gvar.var_31; ++cnt2) {
                if (Gvar.var_79[Gvar.var_447][Gvar.var_449] == 3) {
                    Gvar.var_337 = Gvar.var_337 + 1;
                    Gvar.var_2405 = Gvar.var_337;
                    for (let cnt4 = 0; cnt4 < 30; ++cnt4) {
                        Gvar.var_81[Gvar.var_2405][cnt4] = 0;
                    }
                    Gvar.var_80[Gvar.var_447][Gvar.var_449] = Gvar.var_2405;
                    Gvar.var_81[Gvar.var_2405][0] = 31;
                    Gvar.var_81[Gvar.var_2405][1] = Gvar.var_447;
                    Gvar.var_81[Gvar.var_2405][2] = Gvar.var_449;
                    Gvar.var_81[Gvar.var_2405][3] = 0;
                    Gvar.var_81[Gvar.var_2405][4] = 0;
                    Gvar.var_81[Gvar.var_2405][5] = Gvar.var_71[Gvar.var_447][Gvar.var_449];
                }
                Gvar.var_447 = Gvar.var_447 + 1;
            }
            Gvar.var_449 = Gvar.var_449 + 1;
        }
        return;
}

export {func537}
