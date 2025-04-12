import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func549(this: any) {
        Adap.dbgprt(549);
        Adap.DSPLAY(101); // 階段を昇るor降りる時の効果音
        Gvar.var_373 = 5;
        await Func.AutoDraw(2);
        Gvar.var_373 = 4;
        await Func.AutoDraw(2);
        Gvar.var_373 = 3;
        await Func.AutoDraw(2);
        Gvar.var_373 = 2;
        await Func.AutoDraw(2);
        Gvar.var_373 = 1;
        await Func.AutoDraw(10);
        Gvar.var_373 = 0;
        Gvar.special_floor = 0;
        Gvar.var_532 = 1;
        Gvar.var_356 = 300;
        await Func.func173();
        return;
}

export {func549}
