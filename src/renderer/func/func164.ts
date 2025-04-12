import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

 // 幽霊部屋の配置(マップ読み込み)
async function func164(this: any) {
        Adap.dbgprt(164);
        if (Gvar.var_409 == 0) {
            Gvar.var_778 = 0;
        }
        if (Gvar.var_409 == 1) {
            Gvar.var_778 = 10;
        }
        if (Gvar.var_409 == 2) {
            Gvar.var_778 = 20;
        }
        if (Gvar.var_409 == 3) {
            Gvar.var_778 = 30;
        }
        Gvar.var_779 = (Gvar.var_66 + 2) * Gvar.var_35 + Gvar.var_778;
        Gvar.var_780 = (Gvar.var_67 + 1) * Gvar.var_36 + Gvar.var_778;
        if (Gvar.var_217 == 0) {
            if (Gvar.var_199 == 1) {
                Gvar.var_779 = (Gvar.var_66 + 2) * Gvar.var_35 + Gvar.var_778;
                Gvar.var_780 = (Gvar.var_67 + 1) * Gvar.var_36 - Gvar.var_778;
            }
            if (Gvar.var_199 == 2) {
                Gvar.var_779 = (Gvar.var_66 + 2) * Gvar.var_35;
                Gvar.var_780 = (Gvar.var_67 + 1) * Gvar.var_36 - Gvar.var_778;
            }
            if (Gvar.var_199 == 3) {
                Gvar.var_779 = (Gvar.var_66 + 2) * Gvar.var_35 - Gvar.var_778;
                Gvar.var_780 = (Gvar.var_67 + 1) * Gvar.var_36 - Gvar.var_778;
            }
            if (Gvar.var_199 == 4) {
                Gvar.var_779 = (Gvar.var_66 + 2) * Gvar.var_35 + Gvar.var_778;
                Gvar.var_780 = (Gvar.var_67 + 1) * Gvar.var_36;
            }
            if (Gvar.var_199 == 6) {
                Gvar.var_779 = (Gvar.var_66 + 2) * Gvar.var_35 - Gvar.var_778;
                Gvar.var_780 = (Gvar.var_67 + 1) * Gvar.var_36;
            }
            if (Gvar.var_199 == 7) {
                Gvar.var_779 = (Gvar.var_66 + 2) * Gvar.var_35 + Gvar.var_778;
                Gvar.var_780 = (Gvar.var_67 + 1) * Gvar.var_36 + Gvar.var_778;
            }
            if (Gvar.var_199 == 8) {
                Gvar.var_779 = (Gvar.var_66 + 2) * Gvar.var_35;
                Gvar.var_780 = (Gvar.var_67 + 1) * Gvar.var_36 + Gvar.var_778;
            }
            if (Gvar.var_199 == 9) {
                Gvar.var_779 = (Gvar.var_66 + 2) * Gvar.var_35 - Gvar.var_778;
                Gvar.var_780 = (Gvar.var_67 + 1) * Gvar.var_36 + Gvar.var_778;
            }
        }
        if (Gvar.var_217 == 1) {
            Gvar.var_779 = (Gvar.var_66 + 2) * Gvar.var_35; // Gvar.var_35 = 40
            Gvar.var_780 = (Gvar.var_67 + 1) * Gvar.var_36; // Gvar.var_36 = 40
        }
        Adap.pos(0, 0);
        Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
        Adap.gcopy(18, Gvar.var_779, Gvar.var_780, 340, 340); // Adap.buffer(18)は"img4.gif"
        return;
}

export {func164}
