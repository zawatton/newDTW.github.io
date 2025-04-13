import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func029(this: any) {
        Adap.dbgprt(29);
        await Func.setMessage("周囲がドロドロではなくなった", "", 7, false, false, false);
        await Func.AutoDraw(9);
        return;
}

export {func029}
