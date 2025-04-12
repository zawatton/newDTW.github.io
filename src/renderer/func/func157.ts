import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// どこにも使用されていない
async function func157(this: any) {
        Adap.dbgprt(157);
        Adap.redraw(0);
        Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
        Adap.pos(0, 0);
        Adap.gcopy(17, 0, 0, 340, 340);
        Adap.color(0, 0, 0);

        Adap.gmode(4, null, null, 150);
        Gvar.var_763 = 0;
        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
            Gvar.var_764 = 0;
            for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
                Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36);
                // Adap.buffer(8)は"img1.gif"。X座標400、Y座標0から切り取り長さ X方向40、Y方向40
                // 絵:??何もないぞ?? 
                Adap.gcopy(8, 400, 0, 40, 40);
                Gvar.var_764 = Gvar.var_764 + 1;
            }
            Gvar.var_763 = Gvar.var_763 + 1;
        }
        await Func.func048();
        if (Gvar.var_765 == 1) {
            if (Gvar.var_766 == 0 || Gvar.var_766 == 1 || Gvar.var_766 == 2) {
                await Func.func341();
            }
        }
        if (Gvar.var_10 >= 1) {
            await Func.func338();
        }
        Adap.redraw(1);
        await Adap.wait(2);
        return;
}

export {func157}
