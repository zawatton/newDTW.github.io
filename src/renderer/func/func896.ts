import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func896(this: any) {
        Adap.dbgprt(896);
        Adap.gsel( Gvar.window_id = 33, Gvar.window_mode = -1);
        Adap.gsel( Gvar.window_id = 0, Gvar.window_mode = 1);
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
}

export {func896}
