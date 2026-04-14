/**
 * func121 — func121 BGM(ID977)選曲(杜王町埠頭)
 *
 * (org原典: newDTW_audio)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

// 旧 func121
async function func121(this: any) {
        Adap.dbgprt(121);
        Gvar.bgm_list_id = 977;
        Gvar.var_681 = 977;
        await Music.func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング  "0.mp3" 設定)
        return;
}

export {func121}
