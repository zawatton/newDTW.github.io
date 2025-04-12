import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

// グッチョの死体へDISCを入れた際のプレイ処理
async function func115(this: any) {
        Adap.dbgprt(115);
        Gvar.var_678 = 0;
        Gvar.bgm_list_id = Gvar.var_486[Gvar.var_682][Gvar.var_683][0];
        if (Gvar.bgm_list_id < 100) {
            return;
        }
        if (Gvar.bgm_list_id >= 500 && Gvar.bgm_list_id != 565) {
            return;
        }
        await Music.func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング  "0.mp3" 設定)
        Gvar.var_678 = 0;
        return;
}

export {func115}
