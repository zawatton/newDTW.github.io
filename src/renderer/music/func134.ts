import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

// 旧 func134
async function func134(this: any) {
        Adap.dbgprt(134);
        Gvar.bgm_list_id = 980;
        Gvar.var_681 = 980;
        await Music.func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング  "0.mp3" 設定)
        return;
}

export {func134}
