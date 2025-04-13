import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func544(this: any) {
        Adap.dbgprt(544);
        Gvar.var_2478 = 10;
        Gvar.var_211 = Gvar.var_211 - 10;
        Gvar.var_208 = Gvar.var_2478 + Gvar.var_208;
        if (Gvar.var_211 <= 0) {
            Gvar.var_211 = 0;
            Gvar.var_356 = 235;
        }
        await Func.setMessage("自分の撃った弾丸が脳天に命中！", "" + Gvar.var_2478 + "のダメージを喰らった。", 10, false, false, false);
        Gvar.var_108 = 1;
        Gvar.var_747 = 1;
        Adap.DSPLAY(105);
        await Func.AutoDraw(10);
        Gvar.var_108 = 0;
        return;
}

export {func544}
