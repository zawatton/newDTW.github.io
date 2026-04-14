/**
 * func220 — func220 ジョイコン設定キー名称
 *
 * (org原典: newDTW_func2)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func220(this: any) {
        Adap.dbgprt(220);
        if (Gvar.var_930 == 1) {
            Gvar.var_931 = Gvar.var_692;
        }
        if (Gvar.var_930 == 2) {
            Gvar.var_931 = Gvar.var_693;
        }
        if (Gvar.var_930 == 3) {
            Gvar.var_931 = Gvar.var_694;
        }
        if (Gvar.var_930 == 4) {
            Gvar.var_931 = Gvar.var_695;
        }
        if (Gvar.var_930 == 5) {
            Gvar.var_931 = Gvar.var_696;
        }
        if (Gvar.var_930 == 6) {
            Gvar.var_931 = Gvar.var_697;
        }
        if (Gvar.var_930 == 7) {
            Gvar.var_931 = Gvar.var_698;
        }
        if (Gvar.var_930 == 8) {
            Gvar.var_931 = Gvar.var_699;
        }
        if (Gvar.var_930 == 9) {
            Gvar.var_931 = Gvar.var_700;
        }
        if (Gvar.var_930 == 10) {
            Gvar.var_931 = Gvar.var_701;
        }
        if (Gvar.var_931 == 4096) {
            Adap.color(255, 255, 255);
            Adap.mes("Cボタン");
        }
        if (Gvar.var_931 == 2048) {
            Adap.color(255, 255, 255);
            Adap.mes("Bボタン");
        }
        if (Gvar.var_931 == 8192) {
            Adap.color(255, 255, 255);
            Adap.mes("Aボタン");
        }
        if (Gvar.var_931 == 16384) {
            Adap.color(255, 255, 255);
            Adap.mes("Dボタン");
        }
        if (Gvar.var_931 == 65536) {
            Adap.color(255, 255, 255);
            Adap.mes("Eボタン");
        }
        if (Gvar.var_931 == 32768) {
            Adap.color(255, 255, 255);
            Adap.mes("Fボタン");
        }
        if (Gvar.var_931 == 131072) {
            Adap.color(255, 255, 255);
            Adap.mes("Gボタン");
        }
        if (Gvar.var_931 == 262144) {
            Adap.color(255, 255, 255);
            Adap.mes("Hボタン");
        }
        if (Gvar.var_931 == 524288) {
            Adap.color(255, 255, 255);
            Adap.mes("Iボタン");
        }
        if (Gvar.var_931 == 1048576) {
            Adap.color(255, 255, 255);
            Adap.mes("Jボタン");
        }
        return;
}

export {func220}
