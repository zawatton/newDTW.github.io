/**
 * func103 — func103 ダンジョン内のテーマソング "0.mp3" 設定
 *
 * (org原典: newDTW_audio)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

// 旧 func103
async function func103(this: any) {
        Adap.dbgprt(103);
        Gvar.bgm_file_name = "0.mp3";
        await Music.func101();
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            Adap.DMINIT();
            await Music.func104(); // BGM用mp3ファイル再生
            if (Gvar.stat == 1) {
                break;
            }
        }
        Gvar.receive_bgm_id = Gvar.bgm_list_id;
        if (Gvar.var_678 == 0) {
            Gvar.var_634 = 1;
        }
        return;
}

export {func103}
