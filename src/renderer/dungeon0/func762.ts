import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 旧 func762
async function func762(this: any) {
        Adap.dbgprt(762);
        await Func.func763();
}

export {func762}
