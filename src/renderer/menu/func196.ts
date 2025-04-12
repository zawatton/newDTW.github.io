import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// ゲームスピード設定項目表示
async function func196(this: any) {
        Adap.dbgprt(196);
        Adap.color(0, 0, 0);
        Adap.gmode(4, null, null, 100);
        Adap.pos(42, 137);
        Adap.gcopy(12, 0, 0, 113, 123);
        Adap.color(255, 255, 255);
        Adap.line(45, 139, 150, 139);
        Adap.line(45, 256, 150, 256);
        Adap.line(44, 140, 44, 254);
        Adap.line(152, 140, 152, 254);
        Adap.pset(45, 140);
        Adap.pset(151, 140);
        Adap.pset(45, 255);
        Adap.pset(151, 255);

        Adap.font(Gvar.font_type, 16, 1);
        Adap.color(255, 255, 255);
        Adap.pos(85, 150);
        Adap.mes("超速");
        Adap.pos(85, 170);
        Adap.mes("速い");
        Adap.pos(85, 190);
        Adap.mes("標準");
        Adap.pos(85, 210);
        Adap.mes("遅い");
        Adap.pos(85, 230);
        Adap.mes("超遅");
        if (Gvar.var_906 == 0) {
            Adap.pos(50, 147);
        }
        if (Gvar.var_906 == 1) {
            Adap.pos(50, 167);
        }
        if (Gvar.var_906 == 2) {
            Adap.pos(50, 187);
        }
        if (Gvar.var_906 == 3) {
            Adap.pos(50, 207);
        }
        if (Gvar.var_906 == 4) {
            Adap.pos(50, 227);
        }
        Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
        // Adap.buffer(8)は"img1.gif"。X座標70、Y座標50から切り取り長さ X方向25、Y方向20
        // 絵:カーソルアイコン(鏃)
        Adap.gcopy(8, 70, 50, 25, 20);
        return;
}

export {func196}
