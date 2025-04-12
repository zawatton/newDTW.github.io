import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func379(this: any) {
        Adap.dbgprt(379);
        Gvar.var_1699 = Gvar.var_503;
        Gvar.var_1700 = Gvar.var_504;
        Gvar.var_1701 = 23;
        Gvar.var_1702 = 325;
        Gvar.var_1703 = 280;
        Gvar.var_1704 = 330;
        Gvar.var_1705 = 278;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            Adap.color(0, 0, 0);

            Adap.gmode(4, null, null, 100);
            Adap.pos(20, Gvar.var_1705);
            Adap.gcopy(12, 0, 0, 310, 54);
            Adap.color(255, 255, 255);
            Adap.line(Gvar.var_1701, Gvar.var_1703, Gvar.var_1702, Gvar.var_1703);
            Adap.line(Gvar.var_1701, Gvar.var_1704, Gvar.var_1702, Gvar.var_1704);
            Adap.line(Gvar.var_1701 - 1, Gvar.var_1703 + 1, Gvar.var_1701 - 1, Gvar.var_1704 - 2);
            Adap.line(Gvar.var_1702 + 2, Gvar.var_1703 + 1, Gvar.var_1702 + 2, Gvar.var_1704 - 2);
            Adap.pset(Gvar.var_1701, Gvar.var_1703 + 1);
            Adap.pset(Gvar.var_1702 + 1, Gvar.var_1703 + 1);
            Adap.pset(Gvar.var_1701, Gvar.var_1704 - 1);
            Adap.pset(Gvar.var_1702 + 1, Gvar.var_1704 - 1);
    
            Adap.font(Gvar.font_type, Gvar.font_size = 16, Gvar.font_style = 1);
            Adap.color(255, 255, 255);
            Adap.pos(Gvar.var_1701 + 5, Gvar.var_1703 + 7);
            Adap.mes(Gvar.var_494[Gvar.var_1699]);
            Adap.mes(Gvar.var_494[Gvar.var_1700]);
            if (cnt1 != 0) {
                Adap.font("メイリオ", 12);
                Adap.color(255, 255, 255);
                Adap.pos(Gvar.var_1701 + 150, Gvar.var_1704);
                Adap.mes("▼");
            }
            if (cnt1 == 0 && Gvar.var_503 != 1) {
                Adap.font("メイリオ", 12);
                Adap.color(255, 255, 255);
                Adap.pos(Gvar.var_1701 + 150, Gvar.var_1704);
                Adap.mes("▼");
            }
            Gvar.var_1699 += 2;
            Gvar.var_1700 += 2;
            Gvar.var_1701 = 23;
            Gvar.var_1702 = 325;
            Gvar.var_1703 = Gvar.var_1703 - 60;
            Gvar.var_1704 = Gvar.var_1704 - 60;
            Gvar.var_1705 = Gvar.var_1705 - 60;
        }
        if (Gvar.var_503 < 31) {
            Adap.font("メイリオ", 12);
            Adap.color(255, 255, 255);
            Adap.pos(Gvar.var_1701 + 150, Gvar.var_1704);
            Adap.mes("▼");
        }
        return;
}

export {func379}
