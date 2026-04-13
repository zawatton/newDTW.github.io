import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 旧 func761
async function func761(this: any) {
        Adap.dbgprt(761);
        await Func.func762();
}

export {func761}
