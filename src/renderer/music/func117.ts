/**
 * func117 — func117 BGM(ID982)選曲
 *
 * (org原典: newDTW_audio)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

// 旧 func117
async function func117(this: any) {
        Adap.dbgprt(117);
        Gvar.bgm_list_id = 982;
        Gvar.var_681 = 982;
        await Music.func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング  "0.mp3" 設定)
        return;
}

export {func117}
