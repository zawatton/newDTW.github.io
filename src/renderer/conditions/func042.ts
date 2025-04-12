import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func042(this: any) {
        Adap.dbgprt(42);
        Gvar.var_472 = 1;
        await Func.AutoDraw(30);
        Gvar.var_472 = 0;
        await Func.setMessage1("ﾄﾞｯﾋﾟｵと交代した。", "", 7, false, false, false);
        Gvar.var_144 = 0;
        Gvar.var_199 = 2;
        await Func.AutoDraw(9);
        return;
}

export {func042}
