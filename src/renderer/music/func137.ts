import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

async function func137(this: any) {
        Adap.dbgprt(137);
        if (Gvar.receive_bgm_id != 987) {
            return;
        }
        Gvar.bgm_list_id = Gvar.var_684;
        Gvar.var_681 = 0;
        if (Gvar.var_684 == 996) {
            Gvar.var_681 = 996;
        }
        if (Gvar.var_684 == 998) {
            Gvar.var_681 = 998;
        }
        if (Gvar.var_684 == 985) {
            Gvar.var_681 = 985;
        }
        if (Gvar.var_684 == 984) {
            Gvar.var_681 = 984;
        }
        if (Gvar.var_684 == 981) {
            Gvar.var_681 = 981;
        }
        Gvar.var_678 = 1;
        await Music.func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング  "0.mp3" 設定)
        Gvar.var_678 = 0;
        return;
}

export {func137}
