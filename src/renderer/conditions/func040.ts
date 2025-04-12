import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func040(this: any) {
        Adap.dbgprt(40);
        await Func.setMessage1("鉄塔が消滅した。", "", 7, false, false, false);
        await Func.AutoDraw(9);
        return;
}

export {func040}
