import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

 // 酒場の配置(マップ読み込み)
 // 旧 func163b
async function func163b(this: any) {
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
        Gvar.var_780 = (Gvar.var_67) * Gvar.var_36 + Gvar.var_778;
        if (Gvar.var_217 == 0) {
            if (Gvar.var_199 == 1) {
                Gvar.var_779 = (Gvar.var_66 + 2) * Gvar.var_35 + Gvar.var_778;
                Gvar.var_780 = (Gvar.var_67) * Gvar.var_36 - Gvar.var_778;
            }
            if (Gvar.var_199 == 2) {
                Gvar.var_779 = (Gvar.var_66 + 2) * Gvar.var_35;
                Gvar.var_780 = (Gvar.var_67) * Gvar.var_36 - Gvar.var_778;
            }
            if (Gvar.var_199 == 3) {
                Gvar.var_779 = (Gvar.var_66 + 2) * Gvar.var_35 - Gvar.var_778;
                Gvar.var_780 = (Gvar.var_67) * Gvar.var_36 - Gvar.var_778;
            }
            if (Gvar.var_199 == 4) {
                Gvar.var_779 = (Gvar.var_66 + 2) * Gvar.var_35 + Gvar.var_778;
                Gvar.var_780 = (Gvar.var_67) * Gvar.var_36;
            }
            if (Gvar.var_199 == 6) {
                Gvar.var_779 = (Gvar.var_66 + 2) * Gvar.var_35 - Gvar.var_778;
                Gvar.var_780 = (Gvar.var_67) * Gvar.var_36;
            }
            if (Gvar.var_199 == 7) {
                Gvar.var_779 = (Gvar.var_66 + 2) * Gvar.var_35 + Gvar.var_778;
                Gvar.var_780 = (Gvar.var_67) * Gvar.var_36 + Gvar.var_778;
            }
            if (Gvar.var_199 == 8) {
                Gvar.var_779 = (Gvar.var_66 + 2) * Gvar.var_35;
                Gvar.var_780 = (Gvar.var_67) * Gvar.var_36 + Gvar.var_778;
            }
            if (Gvar.var_199 == 9) {
                Gvar.var_779 = (Gvar.var_66 + 2) * Gvar.var_35 - Gvar.var_778;
                Gvar.var_780 = (Gvar.var_67) * Gvar.var_36 + Gvar.var_778;
            }
        }
        if (Gvar.var_217 == 1) {
            Gvar.var_779 = (Gvar.var_66 + 2) * Gvar.var_35; // ((Gvar.var_66 = 25) + 2) * (Gvar.var_35 = 40) = 1080
            Gvar.var_780 = (Gvar.var_67) * Gvar.var_36; // (Gvar.var_67 = 32) * (Gvar.var_36 = 40) = 1280
        }
        Adap.pos(0, 0);
        Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
        Adap.gcopy(18, Gvar.var_779, Gvar.var_780, 380, 400); // Adap.buffer(18)は"img4.gif" x: 1080、y: 1280 よりx方向へ380、y方向へ400切り抜き
        return;
}

export {func163b}
