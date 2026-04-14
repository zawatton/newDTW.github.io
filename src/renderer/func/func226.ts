/**
 * func226 — func226 不明
 *
 * (org原典: newDTW_func2)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func226(this: any) {
        Adap.dbgprt(226);
        Gvar.dungeon_number = Gvar.var_956;
        Gvar.var_973 = 0;
        Gvar.var_974 = 0;
        Gvar.var_975 = 0;
        Gvar.var_976 = Gvar.var_955;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
                Gvar.var_975 = Gvar.var_973 + Gvar.var_974;
                Gvar.current_floor = Gvar.var_976;
                await Func.func627(); // 各ダンジョンごとの出現敵設定
                Gvar.var_958[Gvar.var_975] = Gvar.var_977[Gvar.var_973];
                Gvar.var_973 = Gvar.var_973 + 1;
            }
            Gvar.var_973 = 0;
            Gvar.var_974 = Gvar.var_974 + 10;
            Gvar.var_976++;
        }
        return;
}

export {func226}
