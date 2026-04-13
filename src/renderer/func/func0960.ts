import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'

// 旧 func901
// どこからも呼び出されていない？ 消しても良いかも？
async function func0960(this: any) {
    if (await Adap.ginfo(2) != 30) {
        return;
    }
    if (Gvar.wparam == 13) {
        await Func.func0959();
    }
    return;
}

export {func0960}
