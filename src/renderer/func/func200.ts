/**
 * func200 — func200 マップの色設定
 *
 * (org原典: newDTW_func2)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func200(this: any) {
        Adap.dbgprt(200);
        Adap.color(0, 0, 0);

        Adap.gmode(4, null, null, 100);
        Adap.pos(42, 237);
        Adap.gcopy(12, 0, 0, 213, 82);
        Adap.color(255, 255, 255);
        Adap.line(45, 239, 250, 239);
        Adap.line(45, 316, 250, 316);
        Adap.line(44, 240, 44, 314);
        Adap.line(252, 240, 252, 314);
        Adap.pset(45, 240);
        Adap.pset(251, 240);
        Adap.pset(45, 315);
        Adap.pset(251, 315);

        Adap.font(Gvar.font_type, 16, 1);
        Adap.color(255, 255, 255);
        Adap.pos(85, 250);
        Adap.mes("マップの色を変更");
        Adap.pos(85, 270);
        Adap.mes("透明度を変更");
        Adap.pos(85, 290);
        Adap.mes("初期設定に戻す");
        if (Gvar.var_908 == 0) {
            Adap.pos(50, 247);
        }
        if (Gvar.var_908 == 1) {
            Adap.pos(50, 267);
        }
        if (Gvar.var_908 == 2) {
            Adap.pos(50, 287);
        }
        Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
        // Adap.buffer(8)は"img1.gif"。X座標70、Y座標50から切り取り長さ X方向25、Y方向20
        // 絵:カーソルアイコン(鏃)
        Adap.gcopy(8, 70, 50, 25, 20);
        if (Gvar.var_909 == 1) {
            Adap.pos(220, 270);
            if (Gvar.var_690 == 10) {
                Adap.mes("1");
            }
            if (Gvar.var_690 == 20) {
                Adap.mes("2");
            }
            if (Gvar.var_690 == 30) {
                Adap.mes("3");
            }
            if (Gvar.var_690 == 40) {
                Adap.mes("4");
            }
            if (Gvar.var_690 == 50) {
                Adap.mes("5");
            }
            if (Gvar.var_690 == 60) {
                Adap.mes("6");
            }
            if (Gvar.var_690 == 70) {
                Adap.mes("7");
            }
            if (Gvar.var_690 == 80) {
                Adap.mes("8");
            }
            if (Gvar.var_690 == 90) {
                Adap.mes("9");
            }
            if (Gvar.var_690 != 10) {
                Adap.pos(205, 270);
                Adap.mes("<");
                Adap.pos(206, 270);
                Adap.mes("<");
                Adap.pos(207, 270);
                Adap.mes("<");
            }
            if (Gvar.var_690 != 90) {
                Adap.pos(235, 270);
                Adap.mes(">");
                Adap.pos(236, 270);
                Adap.mes(">");
                Adap.pos(237, 270);
                Adap.mes(">");
            }
        }
        return;
}

export {func200}
