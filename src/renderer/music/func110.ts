import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

// 旧 func110
async function func110(this: any) {
        Adap.dbgprt(110);
        if (Gvar.dungeon_number == 99) {
            return;
        }
        Gvar.var_678 = 1;
        Gvar.bgm_list_id = 979;
        await Music.func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング  "0.mp3" 設定)
        Gvar.var_678 = 0;
        Gvar.var_634 = 0;
        return;
}

export {func110}
