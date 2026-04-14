/**
 * func132 — func132 BGM(ID984)選曲
 *
 * (org原典: newDTW_audio)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

// 旧 func132
async function func132(this: any) {
        Adap.dbgprt(132);
        Gvar.bgm_list_id = 984;
        Gvar.var_681 = 984;
        await Music.func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング  "0.mp3" 設定)
        return;
}

export {func132}
