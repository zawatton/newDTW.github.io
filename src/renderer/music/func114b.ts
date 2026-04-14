/**
 * func114b — func114b 酒場の選曲(BGM "")
 *
 * (org原典: newDTW_audio / DONE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

// 旧 func114b
async function func114b(this: any) {
        Adap.dbgprt(114);
        Gvar.var_678 = 1;
        Gvar.bgm_list_id = 976; // BGM ""
        Gvar.var_681 = 976;
        await Music.func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング  "0.mp3" 設定)
        Gvar.var_678 = 0;
        return;
}

export {func114b}
