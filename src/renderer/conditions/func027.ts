import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func027(this: any) {
        Adap.dbgprt(27);
        await Func.setMessage("動けるようになった。", "", 7, false, false, false);
        await Func.AutoDraw(9);
        return;
}

export {func027}
