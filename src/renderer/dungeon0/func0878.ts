import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// 旧 func823
// α版で承太郎との通信追加あり
async function func0878(this: any) {
    Gvar.var_1627 = 0;
    Adap.color(0, 0, 0);
    Adap.gmode(4, null, null, 100);
    Adap.pos(12, 37);
    Adap.gcopy(12, 0, 0, 213, 103 + Gvar.var_1627);
    Adap.color(255, 255, 255);
    if (Gvar.var_512 == 1) {
        Adap.color(150, 150, 150);
    }
    Adap.line(15, 39, 220, 39);
    Adap.line(15, 136 + Gvar.var_1627, 220, 136 + Gvar.var_1627);
    Adap.line(14, 40, 14, 134 + Gvar.var_1627);
    Adap.line(222, 40, 222, 134 + Gvar.var_1627);
    Adap.pset(15, 40);
    Adap.pset(221, 40);
    Adap.pset(15, 135 + Gvar.var_1627);
    Adap.pset(221, 135 + Gvar.var_1627);

    Adap.font(Gvar.font_type, Gvar.font_size = 16, Gvar.font_style = 1);
    Adap.color(255, 255, 255);
    Adap.pos(33, 47);
    Adap.mes("口座に入金する");
    Adap.mes("口座から引き出す");
    Adap.mes("ペリーコロと通信");
    Adap.mes("ポルポと通信");
    Adap.mes("ＳＰＷ財団と通信");
    Adap.color(255, 255, 255);
    if (Gvar.var_512 == 1) {
        Adap.color(150, 150, 150);
    }

    Adap.font(Gvar.font_type, 16, 1);
    Adap.pos(Gvar.var_245, Gvar.var_246);
    Adap.mes(">");
    Adap.pos(Gvar.var_245 + 1, Gvar.var_246);
    Adap.mes(">");
    Adap.pos(Gvar.var_245 + 2, Gvar.var_246);
    Adap.mes(">");
    return;
}

export {func0878}
