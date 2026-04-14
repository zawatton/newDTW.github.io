/**
 * func689 — func689 ダンジョンを制覇したときの動作処理 (階段出現)
 *
 * (org原典: newDTW_dungeon_main / DONE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func689(this: any) {
        Adap.dbgprt(689);
        await Func.setMessage("このダンジョンを制覇した！", "", 12, true, false, false);
        for (let cnt1 = 0; true; ++cnt1) {
            Gvar.var_491 = Adap.rnd(Gvar.var_33);
            Gvar.var_492 = Adap.rnd(Gvar.var_34);
            if (Gvar.var_491 >= 30 && Gvar.var_491 <= 35 && Gvar.var_492 >= 23 && Gvar.var_492 <= 30) {
                continue;
            }
            if (Gvar.var_71[Gvar.var_491][Gvar.var_492] != 0 && Gvar.var_71[Gvar.var_491][Gvar.var_492] <= 12 && Gvar.var_72[Gvar.var_491][Gvar.var_492] == 0 && Gvar.var_71[Gvar.var_491][Gvar.var_492] != Gvar.var_201 && Gvar.var_80[Gvar.var_491][Gvar.var_492] == 0 && Gvar.var_77[Gvar.var_491][Gvar.var_492] == 0) {
                break;
            }
            if (Gvar.dungeon_number == 3 && Gvar.var_71[Gvar.var_491][Gvar.var_492] != 0 && Gvar.var_71[Gvar.var_491][Gvar.var_492] <= 12 && Gvar.var_72[Gvar.var_491][Gvar.var_492] == 0 && Gvar.var_80[Gvar.var_491][Gvar.var_492] == 0 && Gvar.var_77[Gvar.var_491][Gvar.var_492] == 0) {
                break;
            }
        }
        Gvar.var_73[Gvar.var_491][Gvar.var_492] = 1;
        Gvar.var_200 = Gvar.var_71[Gvar.var_491][Gvar.var_492];
        await Func.setMessage("どこかに階段が現れたようだ…", "", 7, true, false, false);
        return;
}

export {func689}
