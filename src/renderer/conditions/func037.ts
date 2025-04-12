import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func037(this: any) {
        Adap.dbgprt(37);
        await Func.setMessage1("冷静になった。", "", 7, false, false, false);
        await Func.AutoDraw(9);
        return;
}

export {func037}
