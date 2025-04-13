import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func031(this: any) {
        Adap.dbgprt(31);
        Adap.DSPLAY(123);
        Gvar.var_470 = 19;
        await Func.AutoDraw(2);
        Gvar.var_470 = 9;
        await Func.AutoDraw(2);
        Gvar.var_470 = 8;
        await Func.AutoDraw(2);
        Gvar.var_470 = 7;
        await Func.AutoDraw(2);
        Gvar.var_470 = 6;
        await Func.AutoDraw(2);
        Gvar.var_470 = 5;
        await Func.AutoDraw(2);
        Gvar.var_470 = 4;
        await Func.AutoDraw(2);
        Gvar.var_470 = 3;
        await Func.AutoDraw(2);
        Gvar.var_470 = 2;
        await Func.AutoDraw(2);
        Gvar.var_470 = 1;
        await Func.AutoDraw(5);
        Gvar.var_470 = 0;
        await Func.setMessage("変身が解除された", "", 7, false, false, false);
        await Func.AutoDraw(9);
        return;
}

export {func031}
