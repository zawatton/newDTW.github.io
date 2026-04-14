/**
 * func258 — func258 不明
 *
 * ダンジョンで読み込まれるランダムマップ。
 *
 * (org原典: newDTW_dungeon_map)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func258(this: any) {
        Adap.dbgprt(258);
        Gvar.var_1096 = 8;
        Gvar.var_1098 = 8;
        Gvar.var_1100 = 3;
        Gvar.var_1102 = 3;
        Gvar.var_1082 = 10;
        Gvar.var_1084 = 5;
        Gvar.var_983 = "#88888888#";
        Gvar.var_983 = Gvar.var_983 + "4........6";
        Gvar.var_983 = Gvar.var_983 + "4...##...6";
        Gvar.var_983 = Gvar.var_983 + "4........6";
        Gvar.var_983 = Gvar.var_983 + "#22222222#";
        return;
}

export {func258}
