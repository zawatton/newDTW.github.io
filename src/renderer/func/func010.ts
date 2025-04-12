import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// Cキーを押した際のその場所での旋回処理
async function func010(this: any) {
        Adap.dbgprt(10);
        Gvar.var_263 = Adap.dim(10);
        Gvar.var_264 = Gvar.var_66 - 1;
        if (Gvar.var_264 < 0) {
            Gvar.var_264 = 0;
        }
        Gvar.var_265 = Gvar.var_66 + 1;
        if (Gvar.var_265 > Gvar.var_33) {
            Gvar.var_265 = Gvar.var_33;
        }
        Gvar.var_266 = Gvar.var_67 - 1;
        if (Gvar.var_266 < 0) {
            Gvar.var_266 = 0;
        }
        Gvar.var_267 = Gvar.var_67 + 1;
        if (Gvar.var_267 > Gvar.var_34) {
            Gvar.var_267 = Gvar.var_34;
        }
        await Func.func011();
}

export {func010}
