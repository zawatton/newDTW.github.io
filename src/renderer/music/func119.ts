/**
 * func119 — func119 BGM(ID998)選曲(虹村屋敷)
 *
 * (org原典: newDTW_audio)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

// 旧 func119
async function func119(this: any) {
        Adap.dbgprt(119);
        Gvar.bgm_list_id = 998;
        Gvar.var_681 = 998;
        await Music.func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング  "0.mp3" 設定)
        return;
}

export {func119}
