import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 旧 func033
async function func033(this: any) {
        Adap.dbgprt(33);
        Gvar.var_471 = 9;
        await Func.AutoDraw(2);
        Gvar.var_471 = 10;
        await Func.AutoDraw(2);
        Gvar.var_471 = 2;
        await Func.AutoDraw(5);
        Gvar.var_471 = 1;
        await Func.setMessage("元通りくっついた", "", 7, false, false, false);
        await Func.AutoDraw(9);
        Gvar.var_471 = 0;
        return;
}

export {func033}
