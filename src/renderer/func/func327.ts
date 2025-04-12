import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// スーパーフライの鉄塔描写処理
async function func327(this: any) {
        Adap.dbgprt(327);
        if (Gvar.var_447 == Gvar.var_147 && Gvar.var_449 == Gvar.var_148) {
            if (Gvar.var_199 == 4) {
                Adap.pos((Gvar.var_147 - Gvar.var_66 + 4) * 40 - Gvar.var_778, (Gvar.var_148 - Gvar.var_67 + 4) * 40 - 40 + Gvar.var_1145);
            }
            if (Gvar.var_199 == 6) {
                Adap.pos((Gvar.var_147 - Gvar.var_66 + 4) * 40 + Gvar.var_778, (Gvar.var_148 - Gvar.var_67 + 4) * 40 - 40 + Gvar.var_1145);
            }
            if (Gvar.var_199 == 8) {
                Adap.pos((Gvar.var_147 - Gvar.var_66 + 4) * 40, (Gvar.var_148 - Gvar.var_67 + 4) * 40 - 40 - Gvar.var_778 + Gvar.var_1145);
            }
            if (Gvar.var_199 == 2) {
                Adap.pos((Gvar.var_147 - Gvar.var_66 + 4) * 40, (Gvar.var_148 - Gvar.var_67 + 4) * 40 - 40 + Gvar.var_778 + Gvar.var_1145);
            }
            if (Gvar.var_199 == 1) {
                Adap.pos((Gvar.var_147 - Gvar.var_66 + 4) * 40 - Gvar.var_778, (Gvar.var_148 - Gvar.var_67 + 4) * 40 - 40 + Gvar.var_778 + Gvar.var_1145);
            }
            if (Gvar.var_199 == 3) {
                Adap.pos((Gvar.var_147 - Gvar.var_66 + 4) * 40 + Gvar.var_778, (Gvar.var_148 - Gvar.var_67 + 4) * 40 - 40 + Gvar.var_778 + Gvar.var_1145);
            }
            if (Gvar.var_199 == 7) {
                Adap.pos((Gvar.var_147 - Gvar.var_66 + 4) * 40 - Gvar.var_778, (Gvar.var_148 - Gvar.var_67 + 4) * 40 - 40 - Gvar.var_778 + Gvar.var_1145);
            }
            if (Gvar.var_199 == 9) {
                Adap.pos((Gvar.var_147 - Gvar.var_66 + 4) * 40 + Gvar.var_778, (Gvar.var_148 - Gvar.var_67 + 4) * 40 - 40 - Gvar.var_778 + Gvar.var_1145);
            }
            if (Gvar.var_217 == 1) {
                Adap.pos((Gvar.var_147 - Gvar.var_66 + 4) * 40, (Gvar.var_148 - Gvar.var_67 + 4) * 40 - 40);
            }
            Adap.gmode(2, null, null, null);
            Adap.gcopy(3, 800, 200, 40, 80); // Adap.buffer(3)は"img_mychara.gif" スーパーフライの鉄塔
        }
        return;
}

export {func327}
