/**
 * func262 — func262 不明
 *
 * ダンジョンで読み込まれるランダムマップ。
 *
 * (org原典: newDTW_dungeon_map)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func262(this: any) {
        Adap.dbgprt(262);
        Gvar.var_1096 = 2;
        Gvar.var_1098 = 2;
        Gvar.var_1100 = 2;
        Gvar.var_1102 = 2;
        Gvar.var_1082 = 10;
        Gvar.var_1084 = 8;
        Gvar.var_983 = "####88####";
        Gvar.var_983 = Gvar.var_983 + "#........#";
        Gvar.var_983 = Gvar.var_983 + "#..#..#..#";
        Gvar.var_983 = Gvar.var_983 + "4........6";
        Gvar.var_983 = Gvar.var_983 + "4........6";
        Gvar.var_983 = Gvar.var_983 + "#..#..#..#";
        Gvar.var_983 = Gvar.var_983 + "#........#";
        Gvar.var_983 = Gvar.var_983 + "####22####";
        return;
}

export {func262}
