import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 旧 func028
async function func028(this: any) {
        Adap.dbgprt(28);
        await Func.setMessage("透明状態ではなくなった", "", 7, false, false, false);
        await Func.AutoDraw(9);
        return;
}

export {func028}
