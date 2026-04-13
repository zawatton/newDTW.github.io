import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// 店での購入時のメッセージ表示
// 旧 func714
async function func714(this: any) {
        Adap.dbgprt(714);
        Adap.color(0, 0, 0);

        Adap.gmode(4, null, null, 100);
        Adap.pos(12, 37);
        Adap.gcopy(12, 0, 0, 113, 53);
        Adap.color(255, 255, 255);
        Adap.line(15, 39, 120, 39);
        Adap.line(15, 86, 120, 86);
        Adap.line(14, 40, 14, 84);
        Adap.line(122, 40, 122, 84);
        Adap.pset(15, 40);
        Adap.pset(121, 40);
        Adap.pset(15, 85);
        Adap.pset(121, 85);
        Adap.font(Gvar.font_type, Gvar.font_size = 16, Gvar.font_style = 1);
        Adap.color(255, 255, 255);
        Adap.pos(33, 47);
        if (Gvar.var_3117 == 1) {
            Adap.mes("売る");
        }
        if (Gvar.var_3117 == 2) {
            Adap.mes("買う");
        }
        Adap.mes("やめる");
        Adap.color(255, 255, 255);

        Adap.font(Gvar.font_type, 16, 1);
        Adap.pos(Gvar.var_515, Gvar.var_516);
        Adap.mes(">");
        Adap.pos(Gvar.var_515 + 1, Gvar.var_516);
        Adap.mes(">");
        Adap.pos(Gvar.var_515 + 2, Gvar.var_516);
        Adap.mes(">");
        Adap.gmode(2, null, null, null);
        return;
}

export {func714}
