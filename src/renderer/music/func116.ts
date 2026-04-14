/**
 * func116 — func116 BGM(ID990)選曲
 *
 * (org原典: newDTW_audio)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

// 旧 func116
async function func116(this: any) {
        Adap.dbgprt(116);
        Gvar.bgm_list_id = 990;
        Gvar.var_681 = 990;
        await Music.func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング  "0.mp3" 設定)
        return;
}

export {func116}
