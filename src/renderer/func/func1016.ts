import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 敵スプライトグラフィックス計算（スキルID→画像バッファ・オフセットのマッピング）
async function func1016(this: any) {
        Adap.dbgprt(1016);
        if (Gvar.var_176 != 0) {
            if (Gvar.var_176 < 50) {
                Gvar.var_1369 = 6;
                Gvar.var_1370 = 15;
                Gvar.var_1371 = Gvar.var_176;
            }
            if (Gvar.var_176 >= 50 && Gvar.var_176 < 100) {
                Gvar.var_1369 = 21;
                Gvar.var_1370 = 22;
                Gvar.var_1371 = Gvar.var_176 - 50;
            }
            if (Gvar.var_176 >= 100 && Gvar.var_176 < 150) {
                Gvar.var_1369 = 27;
                Gvar.var_1370 = 28;
                Gvar.var_1371 = Gvar.var_176 - 100;
            }
            if (Gvar.var_176 >= 150 && Gvar.var_176 < 200) {
                Gvar.var_1369 = 13;
                Gvar.var_1370 = 20;
                Gvar.var_1371 = Gvar.var_176 - 150;
            }
            if (Gvar.var_176 >= 200 && Gvar.var_176 < 250) {
                Gvar.var_1369 = 50;
                Gvar.var_1370 = 51;
                Gvar.var_1371 = Gvar.var_176 - 200;
            }
            Gvar.var_1371 = Gvar.var_1371 * 40;
        }
        else {
            if (Gvar.var_128 >= 1) {
                Gvar.var_1369 = 3;
                Gvar.var_1370 = 3;
                Gvar.var_1371 = 1320;
            }
        }
        return;
}

export {func1016}
