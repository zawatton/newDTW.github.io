import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func382(this: any) {
        Adap.dbgprt(382);
        Gvar.var_1680 = 9;
        Gvar.var_1681 = 330;
        Gvar.var_1682 = 37;
        Gvar.var_1683 = 320;
        Gvar.var_1684 = 0;
        Adap.color(0, 0, 0);

        Adap.gmode(4, null, null, 100);
        Adap.pos(5, 35);
        Adap.gcopy(12, 0, 0, 332, 290);
        Adap.color(255, 255, 255);
        Adap.line(Gvar.var_1680, Gvar.var_1682 + Gvar.var_1684, Gvar.var_1681, Gvar.var_1682 + Gvar.var_1684);
        Adap.line(Gvar.var_1680, Gvar.var_1683 + Gvar.var_1684, 166, Gvar.var_1683 + Gvar.var_1684);
        Adap.line(190, Gvar.var_1683 + Gvar.var_1684, Gvar.var_1681, Gvar.var_1683 + Gvar.var_1684);
        Adap.line(Gvar.var_1680 - 1, Gvar.var_1682 + 1 + Gvar.var_1684, Gvar.var_1680 - 1, Gvar.var_1683 - 2 + Gvar.var_1684);
        Adap.line(Gvar.var_1681 + 2, Gvar.var_1682 + 1 + Gvar.var_1684, Gvar.var_1681 + 2, Gvar.var_1683 - 2 + Gvar.var_1684);
        Adap.pset(Gvar.var_1680, Gvar.var_1682 + 1 + Gvar.var_1684);
        Adap.pset(Gvar.var_1681 + 1, Gvar.var_1682 + 1 + Gvar.var_1684);
        Adap.pset(Gvar.var_1680, Gvar.var_1683 - 1 + Gvar.var_1684);
        Adap.pset(Gvar.var_1681 + 1, Gvar.var_1683 - 1 + Gvar.var_1684);
        Adap.pos(173, 310);
        Adap.color(255, 255, 255);

        Adap.font(Gvar.font_type, Gvar.font_size = 16, Gvar.font_style = 1);
        if (Gvar.var_1707 >= 15) {
            Adap.mes(Gvar.var_1721);
        }
        if (Gvar.var_1707 < 15) {
            Adap.line(165, Gvar.var_1683 + Gvar.var_1684, 191, Gvar.var_1683 + Gvar.var_1684);
        }
        Adap.color(0, 255, 0);

        Adap.font(Gvar.font_type, Gvar.font_size = 14, Gvar.font_style = 1);
        if (Gvar.var_1721 == 1) {
            Gvar.var_1722 = 1;
        }
        if (Gvar.var_1721 == 2) {
            Gvar.var_1722 = 14;
        }
        if (Gvar.var_1721 == 3) {
            Gvar.var_1722 = 27;
        }
        if (Gvar.var_1721 == 4) {
            Gvar.var_1722 = 40;
        }
        if (Gvar.var_1721 == 5) {
            Gvar.var_1722 = 53;
        }
        for (let cnt1 = 0; cnt1 < 13; ++cnt1) {
            Adap.pos(20, cnt1 * 20 + 50);
            if (Gvar.var_1706[Gvar.var_1722][2] == "0") {
                Adap.color(255, 255, 255);
            }
            if (Gvar.var_1706[Gvar.var_1722][2] == "1") {
                Adap.color(255, 255, 0);
            }
            if (Gvar.var_1706[Gvar.var_1722][2] == "2") {
                Adap.color(255, 180, 90);
            }
            if (Gvar.var_1706[Gvar.var_1722][2] == "3") {
                Adap.color(0, 255, 0);
            }
            if (Gvar.var_1706[Gvar.var_1722][2] == "4") {
                Adap.color(240, 0, 240);
            }
            if (Gvar.var_1706[Gvar.var_1722][2] == "5") {
                Adap.color(255, 0, 0);
            }
            if (Gvar.var_1706[Gvar.var_1722][2] == "6") {
                Adap.color(255, 80, 255);
            }
            if (Gvar.var_1706[Gvar.var_1722][2] == "7") {
                Adap.color(200, 200, 200);
            }
            if (Gvar.var_1706[Gvar.var_1722][2] == "8") {
                Adap.color(0, 255, 255);
            }
            Adap.mes("" + Gvar.var_1706[Gvar.var_1722][1]);
            Gvar.var_1722++;
        }
        return;
}

export {func382}
