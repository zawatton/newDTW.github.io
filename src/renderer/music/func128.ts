import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

// 旧 func128
async function func128(this: any) {
        Adap.dbgprt(128);
        if (Gvar.receive_bgm_id == 983) {
            return;
        }
        if (Gvar.var_681 == 988 || Gvar.var_681 == 989 || Gvar.var_681 == 990 || Gvar.var_681 == 987 || Gvar.var_681 == 996 || Gvar.var_681 == 998 || Gvar.var_681 == 984 || Gvar.var_681 == 982 || Gvar.var_681 == 986 || Gvar.var_681 == 981 || Gvar.var_681 == 980 || Gvar.var_681 == 985) {
            return;
        }
        Gvar.bgm_list_id = 983;
        await Music.func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング  "0.mp3" 設定)
        return;
}

export {func128}
