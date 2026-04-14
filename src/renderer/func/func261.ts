/**
 * func261 — func261 不明
 *
 * ダンジョンで読み込まれるランダムマップ。
 *
 * (org原典: newDTW_dungeon_map)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func261(this: any) {
        Adap.dbgprt(261);
        Gvar.var_1096 = 2;
        Gvar.var_1098 = 2;
        Gvar.var_1100 = 2;
        Gvar.var_1102 = 2;
        Gvar.var_1082 = 9;
        Gvar.var_1084 = 8;
        Gvar.var_983 = "##8###8##";
        Gvar.var_983 = Gvar.var_983 + "#.......#";
        Gvar.var_983 = Gvar.var_983 + "#...#...#";
        Gvar.var_983 = Gvar.var_983 + "4.......6";
        Gvar.var_983 = Gvar.var_983 + "4.......6";
        Gvar.var_983 = Gvar.var_983 + "#...#...#";
        Gvar.var_983 = Gvar.var_983 + "#.......#";
        Gvar.var_983 = Gvar.var_983 + "##2###2##";
        return;
}

export {func261}
