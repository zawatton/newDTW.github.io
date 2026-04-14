/**
 * func286 — func286 不明
 *
 * ダンジョンで読み込まれるランダムマップ。
 *
 * (org原典: newDTW_dungeon_map)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func286(this: any) {
        Adap.dbgprt(286);
        Gvar.var_1096 = 4;
        Gvar.var_1098 = 4;
        Gvar.var_1100 = 4;
        Gvar.var_1102 = 4;
        Gvar.var_1082 = 6;
        Gvar.var_1084 = 6;
        Gvar.var_983 = "#8888#";
        Gvar.var_983 = Gvar.var_983 + "4....6";
        Gvar.var_983 = Gvar.var_983 + "4.^^.6";
        Gvar.var_983 = Gvar.var_983 + "4.^^.6";
        Gvar.var_983 = Gvar.var_983 + "4....6";
        Gvar.var_983 = Gvar.var_983 + "#2222#";
        return;
}

export {func286}
