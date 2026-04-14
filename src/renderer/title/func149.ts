/**
 * func149 — func149 ボス日記消去選択時の表示
 *
 * (org原典: newDTW_login / DONE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// ボス日記消去選択時の表示
async function func149(this: any) {
        Adap.dbgprt(149);
        if (Gvar.var_726 == 1) {
            Gvar.var_739 = 70;
            Gvar.var_740 = 70 + 15 + 20;
        }
        if (Gvar.var_726 == 2) {
            Gvar.var_739 = 70;
            Gvar.var_740 = 70 + 85 + 20;
        }
        if (Gvar.var_726 == 3) {
            Gvar.var_739 = 70;
            Gvar.var_740 = 70 + 155 + 20;
        }
        Adap.color(0, 0, 0);

        Adap.gmode(4, null, null, 150);
        Adap.pos(70, Gvar.var_740);
        Adap.gcopy(12, 0, 0, 251, 60);
        Adap.color(255, 0, 0);
        Adap.line(Gvar.var_739 + 2, Gvar.var_740 + 1, Gvar.var_739 + 247, Gvar.var_740 + 1);
        Adap.line(Gvar.var_739 + 2, Gvar.var_740 + 59, Gvar.var_739 + 247, Gvar.var_740 + 59);
        Adap.line(Gvar.var_739 + 1, Gvar.var_740 + 2, Gvar.var_739 + 1, Gvar.var_740 + 57);
        Adap.line(Gvar.var_739 + 249, Gvar.var_740 + 2, Gvar.var_739 + 249, Gvar.var_740 + 57);
        Adap.pset(Gvar.var_739 + 2, Gvar.var_740 + 2);
        Adap.pset(Gvar.var_739 + 248, Gvar.var_740 + 2);
        Adap.pset(Gvar.var_739 + 2, Gvar.var_740 + 58);
        Adap.pset(Gvar.var_739 + 248, Gvar.var_740 + 58);

        Adap.font(Gvar.font_type, 16, 1);
        Adap.pos(Gvar.var_739 + 15, Gvar.var_740 + 15);
        Adap.color(255, 0, 0);
        if (Gvar.var_726 == 1 && Gvar.var_703 == 0) {
            Adap.mes("データはありません");
            return;
        }
        if (Gvar.var_726 == 2 && Gvar.var_711 == 0) {
            Adap.mes("データはありません");
            return;
        }
        if (Gvar.var_726 == 3 && Gvar.var_718 == 0) {
            Adap.mes("データはありません");
            return;
        }
        Adap.mes("このデータを消去しますか？");
        Adap.mes("「Y」キーを押すと消去されます。");
        return;
}

export {func149}
