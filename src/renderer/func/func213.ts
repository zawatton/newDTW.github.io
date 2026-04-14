/**
 * func213 — func213 不明
 *
 * (org原典: newDTW_func2)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func213(this: any) {
        Adap.dbgprt(213);
        Gvar.var_922 = Adap.dim(10);
        Gvar.var_922[1] = Gvar.var_655;
        Gvar.var_922[2] = Gvar.var_656;
        Gvar.var_922[3] = Gvar.var_657;
        Gvar.var_922[4] = Gvar.var_658;
        Gvar.var_922[5] = Gvar.var_660;
        Gvar.var_922[6] = Gvar.var_659;
        Gvar.var_923 = Gvar.var_922[Gvar.var_911];
        Gvar.var_922[Gvar.var_911] = Gvar.var_912;
        Gvar.var_924 = 1;
        for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
            if (Gvar.var_922[Gvar.var_924] == Gvar.var_912 && Gvar.var_911 != Gvar.var_924) {
                if (Gvar.var_924 == 1) {
                    Gvar.var_655 = Gvar.var_923;
                }
                if (Gvar.var_924 == 2) {
                    Gvar.var_656 = Gvar.var_923;
                }
                if (Gvar.var_924 == 3) {
                    Gvar.var_657 = Gvar.var_923;
                }
                if (Gvar.var_924 == 4) {
                    Gvar.var_658 = Gvar.var_923;
                }
                if (Gvar.var_924 == 6) {
                    Gvar.var_659 = Gvar.var_923;
                }
                if (Gvar.var_924 == 5) {
                    Gvar.var_660 = Gvar.var_923;
                }
            }
            Gvar.var_924++;
        }
        if (Gvar.var_911 == 1) {
            Gvar.var_655 = Gvar.var_922[Gvar.var_911];
        }
        if (Gvar.var_911 == 2) {
            Gvar.var_656 = Gvar.var_922[Gvar.var_911];
        }
        if (Gvar.var_911 == 3) {
            Gvar.var_657 = Gvar.var_922[Gvar.var_911];
        }
        if (Gvar.var_911 == 4) {
            Gvar.var_658 = Gvar.var_922[Gvar.var_911];
        }
        if (Gvar.var_911 == 5) {
            Gvar.var_660 = Gvar.var_922[Gvar.var_911];
        }
        if (Gvar.var_911 == 6) {
            Gvar.var_659 = Gvar.var_922[Gvar.var_911];
        }
        return;
}

export {func213}
