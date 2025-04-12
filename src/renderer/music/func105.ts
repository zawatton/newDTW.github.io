import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

async function func105(this: any) {
        Adap.dbgprt(105);
        if (Gvar.receive_bgm_id == Gvar.belongings_item_list) {
            return;
        }
        if (Gvar.dungeon_number == 99) {
            return;
        }
        if (Gvar.var_681 == 988 || Gvar.var_681 == 990 || Gvar.var_681 == 987 || Gvar.var_681 == 996 || Gvar.var_681 == 998 || Gvar.var_681 == 984 || Gvar.var_681 == 982 || Gvar.var_681 == 986 || Gvar.var_681 == 981 || Gvar.var_681 == 980 || Gvar.var_681 == 985 || Gvar.var_681 == 978 || Gvar.var_681 == 977) {
            return;
        }
        Gvar.bgm_list_id = Gvar.belongings_item_list;
        await Music.func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング  "0.mp3" 設定)
        return;
}

export {func105}
