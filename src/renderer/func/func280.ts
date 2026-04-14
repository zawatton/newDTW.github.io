/**
 * func280 — func280 不明
 *
 * ダンジョンで読み込まれるランダムマップ。
 *
 * (org原典: newDTW_dungeon_map)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func280(this: any) {
        Adap.dbgprt(280);
        Gvar.var_1096 = 7;
        Gvar.var_1098 = 7;
        Gvar.var_1100 = 7;
        Gvar.var_1102 = 7;
        Gvar.var_1082 = 9;
        Gvar.var_1084 = 9;
        Gvar.var_983 = "#8888888#";
        Gvar.var_983 = Gvar.var_983 + "4.......6";
        Gvar.var_983 = Gvar.var_983 + "4...^.^.6";
        Gvar.var_983 = Gvar.var_983 + "4..^.^..6";
        Gvar.var_983 = Gvar.var_983 + "4.^.^.^.6";
        Gvar.var_983 = Gvar.var_983 + "4..^.^..6";
        Gvar.var_983 = Gvar.var_983 + "4.^...^.6";
        Gvar.var_983 = Gvar.var_983 + "4.......6";
        Gvar.var_983 = Gvar.var_983 + "#2222222#";
        return;
}

export {func280}
