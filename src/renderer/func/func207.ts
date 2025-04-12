import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func207(this: any) {
        Adap.dbgprt(207);
        Adap.color(0, 0, 0);
        Adap.gmode(4, null, null, 100);
        Adap.pos(42, 137);
        Adap.gcopy(12, 0, 0, 123, 63);
        Adap.color(255, 255, 255);
        Adap.line(45, 139, 160, 139);
        Adap.line(45, 196, 160, 196);
        Adap.line(44, 140, 44, 194);
        Adap.line(162, 140, 162, 194);
        Adap.pset(45, 140);
        Adap.pset(161, 140);
        Adap.pset(45, 195);
        Adap.pset(161, 195);
        Adap.font(Gvar.font_type, 16, 1);
        Adap.color(255, 255, 255);
        Adap.pos(85, 150);
        Adap.mes("340×340");
        Adap.pos(85, 170);
        Adap.mes("680×680");
        if (Gvar.var_910 == 0) {
            Adap.pos(50, 147);
        }
        if (Gvar.var_910 == 1) {
            Adap.pos(50, 167);
        }
        Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
        // Adap.buffer(8)は"img1.gif"。X座標70、Y座標50から切り取り長さ X方向25、Y方向20
        // 絵:カーソルアイコン(鏃)
        Adap.gcopy(8, 70, 50, 25, 20);
        return;
}

export {func207}
