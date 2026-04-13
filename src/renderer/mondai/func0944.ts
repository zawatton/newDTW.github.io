import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 旧 func885
async function func0944(this: any) {
    Adap.redraw(0);
    Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
    Adap.pos(0, 0);
    Adap.gcopy(3, 0, 400, 340, 340);
    Adap.gmode(4, null, null, 100);
    Adap.pos(0, 0);
    Adap.gcopy(12, 0, 0, 340, 340);
    Gvar.var_1631 = 20;
    Gvar.var_1632 = 10;
    Gvar.var_1633 = 300;
    Gvar.var_1634 = 30;
    Gvar.var_1635 = 0;
    Gvar.var_1636 = 0;
    Adap.color(0, 0, 0);
    Adap.gmode(4, null, null, 100);
    Adap.pos(Gvar.var_1631 - 3, Gvar.var_1632 - 3);
    Adap.gcopy(12, 0, 0, Gvar.var_1633 + 5, Gvar.var_1634 + 5);
    Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
    Adap.color(255, 255, 255);
    Adap.line(Gvar.var_1631 - Gvar.var_1635, Gvar.var_1632 - Gvar.var_1636 - 1, Gvar.var_1631 + Gvar.var_1633 + Gvar.var_1635, Gvar.var_1632 - Gvar.var_1636 - 1);
    Adap.line(Gvar.var_1631 - Gvar.var_1635, Gvar.var_1632 + Gvar.var_1634 + Gvar.var_1636, Gvar.var_1631 + Gvar.var_1633 + Gvar.var_1635, Gvar.var_1632 + Gvar.var_1634 + Gvar.var_1636);
    Adap.line(Gvar.var_1631 - Gvar.var_1635 - 1, Gvar.var_1632 - Gvar.var_1636, Gvar.var_1631 - Gvar.var_1635 - 1, Gvar.var_1632 + Gvar.var_1634 + Gvar.var_1636 - 2);
    Adap.line(Gvar.var_1631 + Gvar.var_1633 + Gvar.var_1635 + 2, Gvar.var_1632 - Gvar.var_1636, Gvar.var_1631 + Gvar.var_1633 + Gvar.var_1635 + 2, Gvar.var_1632 + Gvar.var_1634 + Gvar.var_1636 - 2);
    Adap.pset(Gvar.var_1631 - Gvar.var_1635, Gvar.var_1632 - Gvar.var_1636);
    Adap.pset(Gvar.var_1631 + Gvar.var_1633 + Gvar.var_1635 + 1, Gvar.var_1632 - Gvar.var_1636);
    Adap.pset(Gvar.var_1631 - Gvar.var_1635, Gvar.var_1632 + Gvar.var_1634 + Gvar.var_1636 - 1);
    Adap.pset(Gvar.var_1631 + Gvar.var_1633 + Gvar.var_1635 + 1, Gvar.var_1632 + Gvar.var_1634 + Gvar.var_1636 - 1);
    Adap.font(Gvar.font_type, 16, 1);
    Adap.pos(Gvar.var_1631 + 105, Gvar.var_1632 + 8);
    Adap.mes("魔少年の問題");
    if (Gvar.var_3788 >= 1) {
        Gvar.var_1631 = 20;
        Gvar.var_1632 = 55;
        Gvar.var_1633 = 115;
        Gvar.var_1634 = 30;
        Gvar.var_1635 = 0;
        Gvar.var_1636 = 0;
        Adap.color(0, 0, 0);
        Adap.gmode(4, null, null, 100);
        Adap.pos(Gvar.var_1631 - 3, Gvar.var_1632 - 3);
        Adap.gcopy(12, 0, 0, Gvar.var_1633 + 5, Gvar.var_1634 + 5);
        Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
        Adap.color(255, 255, 255);
        Adap.line(Gvar.var_1631 - Gvar.var_1635, Gvar.var_1632 - Gvar.var_1636 - 1, Gvar.var_1631 + Gvar.var_1633 + Gvar.var_1635, Gvar.var_1632 - Gvar.var_1636 - 1);
        Adap.line(Gvar.var_1631 - Gvar.var_1635, Gvar.var_1632 + Gvar.var_1634 + Gvar.var_1636, Gvar.var_1631 + Gvar.var_1633 + Gvar.var_1635, Gvar.var_1632 + Gvar.var_1634 + Gvar.var_1636);
        Adap.line(Gvar.var_1631 - Gvar.var_1635 - 1, Gvar.var_1632 - Gvar.var_1636, Gvar.var_1631 - Gvar.var_1635 - 1, Gvar.var_1632 + Gvar.var_1634 + Gvar.var_1636 - 2);
        Adap.line(Gvar.var_1631 + Gvar.var_1633 + Gvar.var_1635 + 2, Gvar.var_1632 - Gvar.var_1636, Gvar.var_1631 + Gvar.var_1633 + Gvar.var_1635 + 2, Gvar.var_1632 + Gvar.var_1634 + Gvar.var_1636 - 2);
        Adap.pset(Gvar.var_1631 - Gvar.var_1635, Gvar.var_1632 - Gvar.var_1636);
        Adap.pset(Gvar.var_1631 + Gvar.var_1633 + Gvar.var_1635 + 1, Gvar.var_1632 - Gvar.var_1636);
        Adap.pset(Gvar.var_1631 - Gvar.var_1635, Gvar.var_1632 + Gvar.var_1634 + Gvar.var_1636 - 1);
        Adap.pset(Gvar.var_1631 + Gvar.var_1633 + Gvar.var_1635 + 1, Gvar.var_1632 + Gvar.var_1634 + Gvar.var_1636 - 1);
        Adap.font(Gvar.font_type, 16, 1);
        Adap.pos(Gvar.var_1631 + 38, Gvar.var_1632 + 8);
        Adap.mes("問題作成");
    }
    Gvar.var_1631 = 20;
    Gvar.var_1632 = 100;
    Gvar.var_1633 = 300;
    Gvar.var_1634 = 220;
    Gvar.var_1635 = 0;
    Gvar.var_1636 = 0;
    Adap.color(0, 0, 0);
    Adap.gmode(4, null, null, 100);
    Adap.pos(Gvar.var_1631 - 3, Gvar.var_1632 - 3);
    Adap.gcopy(12, 0, 0, Gvar.var_1633 + 5, 220 + 5);
    Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
    Adap.color(255, 255, 255);
    Adap.line(Gvar.var_1631 - Gvar.var_1635, Gvar.var_1632 - Gvar.var_1636 - 1, Gvar.var_1631 + Gvar.var_1633 + Gvar.var_1635, Gvar.var_1632 - Gvar.var_1636 - 1);
    Adap.line(Gvar.var_1631 - Gvar.var_1635, Gvar.var_1632 + Gvar.var_1634 + Gvar.var_1636, Gvar.var_1631 + Gvar.var_1633 + Gvar.var_1635 - 170, Gvar.var_1632 + Gvar.var_1634 + Gvar.var_1636);
    Adap.line(Gvar.var_1631 - Gvar.var_1635 + 175, Gvar.var_1632 + Gvar.var_1634 + Gvar.var_1636, Gvar.var_1631 + Gvar.var_1633 + Gvar.var_1635, Gvar.var_1632 + Gvar.var_1634 + Gvar.var_1636);
    Adap.line(Gvar.var_1631 - Gvar.var_1635 - 1, Gvar.var_1632 - Gvar.var_1636, Gvar.var_1631 - Gvar.var_1635 - 1, Gvar.var_1632 + Gvar.var_1634 + Gvar.var_1636 - 2);
    Adap.line(Gvar.var_1631 + Gvar.var_1633 + Gvar.var_1635 + 2, Gvar.var_1632 - Gvar.var_1636, Gvar.var_1631 + Gvar.var_1633 + Gvar.var_1635 + 2, Gvar.var_1632 + Gvar.var_1634 + Gvar.var_1636 - 2);
    Adap.pset(Gvar.var_1631 - Gvar.var_1635, Gvar.var_1632 - Gvar.var_1636);
    Adap.pset(Gvar.var_1631 + Gvar.var_1633 + Gvar.var_1635 + 1, Gvar.var_1632 - Gvar.var_1636);
    Adap.pset(Gvar.var_1631 - Gvar.var_1635, Gvar.var_1632 + Gvar.var_1634 + Gvar.var_1636 - 1);
    Adap.pset(Gvar.var_1631 + Gvar.var_1633 + Gvar.var_1635 + 1, Gvar.var_1632 + Gvar.var_1634 + Gvar.var_1636 - 1);
    Adap.font(Gvar.font_type, 16, 1);
    if (Gvar.var_3786 < 10) {
        Adap.pos(Gvar.var_1631 - Gvar.var_1635 + 150, Gvar.var_1632 + Gvar.var_1634 + Gvar.var_1636 - 8);
        Adap.mes("" + Gvar.var_3786);
    }
    if (Gvar.var_3786 >= 10) {
        Adap.pos(Gvar.var_1631 - Gvar.var_1635 + 145, Gvar.var_1632 + Gvar.var_1634 + Gvar.var_1636 - 8);
        Adap.mes("" + Gvar.var_3786);
    }
    Adap.color(255, 255, 255);
    Gvar.var_3803 = Gvar.var_3784;
    Gvar.var_3797 = Gvar.var_3786 * 10 - 10;
    Gvar.var_3804 = Gvar.var_3794 - Gvar.var_3797;
    if (Gvar.var_3804 >= 10) {
        Gvar.var_3804 = 10;
    }
    for (let cnt1 = 0; cnt1 < Gvar.var_3804; ++cnt1) {
        Gvar.var_3805 = Adap.noteget(Gvar.var_3797);
        Adap.getstr(Gvar.var_3806, Gvar.var_3805, 0, 46);
        Adap.pos(Gvar.var_3783, Gvar.var_3803);
        Adap.color(255, 255, 255);
        if (Gvar.var_3796[Gvar.var_3797] == 1) {
            Adap.color(255, 255, 0);
        }
        if (Gvar.var_3796[Gvar.var_3797] == 2) {
            Adap.color(255, 0, 0);
        }
        if (Gvar.var_3796[Gvar.var_3797] == 3) {
            Adap.color(0, 255, 255);
        }
        Adap.mes("" + Gvar.var_3806);
        Gvar.var_3797++;
        Gvar.var_3803 = Gvar.var_3803 + 20;
    }
    Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
    Adap.pos(Gvar.var_3780, Gvar.var_3781);
    if (Gvar.var_3785 == 0) {
        Adap.pos(Gvar.var_3780, 59);
    }
    // Adap.buffer(8)は"img1.gif"。X座標70、Y座標50から切り取り長さ X方向25、Y方向20
    // 絵:カーソルアイコン(鏃)
    Adap.gcopy(8, 70, 50, 25, 20);
    Adap.color(0, 0, 0);
    Adap.gmode(4, null, null, 100);
    Adap.pos(290, 50);
    Adap.gcopy(3, 1560, 0, 40, 45); // "img_mychara.gif" の1行目の一番右側にあるディアボロの影(黒い丸)
    Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
    Adap.pos(290, 48);
    Adap.gcopy(3, 760, 120, 40, 40);
    Adap.pos(150, 32);
    Adap.gcopy(17, 0, 920, 160, 80);
    Adap.font(Gvar.font_type, 12, 1);
    Adap.color(0, 0, 0);
    Adap.pos(175, 62);
    if (Gvar.var_3794 > 0) {
        Adap.mes("問題を選びな！");
    }
    if (Gvar.var_3794 == 0) {
        Adap.mes("問題がないぜ");
    }
    if (Gvar.var_10 >= 1) {
        await Func.func338();
    }
    Adap.redraw(1);
    return;
}

export {func0944}
