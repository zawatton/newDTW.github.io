import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

// 旧 func120
async function func120(this: any) {
        Adap.dbgprt(120);
        Gvar.bgm_list_id = 978;
        Gvar.var_681 = 978;
        await Music.func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング  "0.mp3" 設定)
        return;
}

export {func120}
