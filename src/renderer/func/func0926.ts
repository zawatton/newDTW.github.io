import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// 旧 func867
async function func0926(this: any) {
    Adap.color(0, 0, 0);
    Adap.boxf(50, 200, 330, 250);
    Adap.font(Gvar.font_type, 12);
    Adap.color(255, 255, 255);
    Adap.pos(60, 210);
    if (Gvar.var_3593 == 1) {
        Adap.mes("これ以上は増やせません");
    }
    if (Gvar.var_3593 == 2) {
        Adap.mes("ここには配置できません");
    }
    if (Gvar.var_3593 == 3) {
        Adap.mes("これ以上個室を増やせません");
    }
    return;
}

export {func0926}
