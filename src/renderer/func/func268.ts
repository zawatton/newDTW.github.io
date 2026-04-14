/**
 * func268 — func268 不明
 *
 * ダンジョンで読み込まれるランダムマップ。
 *
 * (org原典: newDTW_dungeon_map)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func268(this: any) {
        Adap.dbgprt(268);
        Gvar.var_1096 = 5;
        Gvar.var_1098 = 5;
        Gvar.var_1100 = 4;
        Gvar.var_1102 = 4;
        Gvar.var_1082 = 7;
        Gvar.var_1084 = 6;
        Gvar.var_983 = "#88888#";
        Gvar.var_983 = Gvar.var_983 + "4.....6";
        Gvar.var_983 = Gvar.var_983 + "4...#.6";
        Gvar.var_983 = Gvar.var_983 + "4.#...6";
        Gvar.var_983 = Gvar.var_983 + "4.....6";
        Gvar.var_983 = Gvar.var_983 + "#22222#";
        return;
}

export {func268}
