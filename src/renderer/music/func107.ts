/**
 * func107 — func107 不明
 *
 * (org原典: newDTW_audio)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

// 旧 func107
async function func107(this: any) {
        Adap.dbgprt(107);
        Gvar.bgm_list_id = Gvar.receive_bgm_id;
        await Music.func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング  "0.mp3" 設定)
        return;
}

export {func107}
