/**
 * func284 — func284 不明
 *
 * ダンジョンで読み込まれるランダムマップ。
 *
 * (org原典: newDTW_dungeon_map)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func284(this: any) {
        Adap.dbgprt(284);
        Gvar.var_1096 = 6;
        Gvar.var_1098 = 6;
        Gvar.var_1100 = 4;
        Gvar.var_1102 = 4;
        Gvar.var_1082 = 8;
        Gvar.var_1084 = 6;
        Gvar.var_983 = "#888888#";
        Gvar.var_983 = Gvar.var_983 + "4......6";
        Gvar.var_983 = Gvar.var_983 + "4.^....6";
        Gvar.var_983 = Gvar.var_983 + "4.^....6";
        Gvar.var_983 = Gvar.var_983 + "4......6";
        Gvar.var_983 = Gvar.var_983 + "#222222#";
        return;
}

export {func284}
