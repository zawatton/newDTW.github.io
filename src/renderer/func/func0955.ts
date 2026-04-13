import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'

// 旧 func896
// どこからも呼び出されていない？ 消しても良いかも？
async function func0955(this: any) {
    Adap.gsel( Gvar.window_id = 33, Gvar.window_mode = -1);
    Adap.gsel( Gvar.window_id = 0, Gvar.window_mode = 1);
    await Func.func009(); // ディアボロ側ターン処理(ループ処理)
    return;
}

export {func0955}
