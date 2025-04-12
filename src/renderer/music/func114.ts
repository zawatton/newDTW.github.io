import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

async function func114(this: any) {
        Adap.dbgprt(114);
        Gvar.var_678 = 1;
        Gvar.bgm_list_id = 989; // BGM "20th Century Boy"
        Gvar.var_681 = 989;
        await Music.func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング  "0.mp3" 設定)
        Gvar.var_678 = 0;
        return;
}

export {func114}
