/**
 * func622 — func622 不明
 *
 * (org原典: newDTW_func6)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func622(this: any) {
        Adap.dbgprt(622);
         // Gvar.var_262 == 1 なので、Gvar.dungeon_number = 0 であれば
        if (Gvar.y_axis_map_image == 1 || Gvar.y_axis_map_image == 7 || Gvar.y_axis_map_image == 16 || Gvar.var_262 == 1) {
            return;
        }
        if (Gvar.var_347 >= 5 && Gvar.var_348 >= 5 && Gvar.var_347 <= Gvar.var_33 && Gvar.var_348 <= Gvar.var_34) {
            Gvar.var_71[Gvar.var_347][Gvar.var_348] = 14;
            Gvar.var_303 = Gvar.var_347;
            Gvar.var_304 = Gvar.var_348;
            Gvar.var_305 = Gvar.var_347 - 1;
            if (Gvar.var_305 < 0) {
                Gvar.var_305 = 0;
            }
            Gvar.var_306 = Gvar.var_347 + 1;
            if (Gvar.var_306 > Gvar.var_33) {
                Gvar.var_306 = Gvar.var_33;
            }
            Gvar.var_307 = Gvar.var_348 + 1;
            if (Gvar.var_307 > Gvar.var_34) {
                Gvar.var_307 = Gvar.var_34;
            }
            Gvar.var_308 = Gvar.var_348 - 1;
            if (Gvar.var_308 < 0) {
                Gvar.var_308 = 0;
            }
            if (Gvar.var_71[Gvar.var_305][Gvar.var_304] != 0 && Gvar.var_71[Gvar.var_305][Gvar.var_304] <= 12 && Gvar.var_71[Gvar.var_306][Gvar.var_304] != 0 && Gvar.var_71[Gvar.var_306][Gvar.var_304] <= 12) {
                Gvar.var_71[Gvar.var_347][Gvar.var_348] = Gvar.var_71[Gvar.var_305][Gvar.var_304];
            }
            if (Gvar.var_71[Gvar.var_303][Gvar.var_307] != 0 && Gvar.var_71[Gvar.var_303][Gvar.var_307] <= 12 && Gvar.var_71[Gvar.var_303][Gvar.var_308] != 0 && Gvar.var_71[Gvar.var_303][Gvar.var_308] <= 12) {
                Gvar.var_71[Gvar.var_347][Gvar.var_348] = Gvar.var_71[Gvar.var_303][Gvar.var_307];
            }
        }
        return;
}

export {func622}
