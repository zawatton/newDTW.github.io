import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

// 旧 func136
async function func136(this: any) {
        Adap.dbgprt(136);
        Gvar.var_684 = Gvar.receive_bgm_id;
        Gvar.bgm_list_id = 987;
        Gvar.var_681 = 987;
        Gvar.var_678 = 1;
        await Music.func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング  "0.mp3" 設定)
        Gvar.var_678 = 0;
        return;
}

export {func136}
