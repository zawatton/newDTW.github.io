import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

// 旧 func106
async function func106(this: any) {
        Adap.dbgprt(106);
        if (Gvar.dungeon_number == 99) {
            return;
        }
        if (Gvar.var_681 == 988 || Gvar.var_681 == 990 || Gvar.var_681 == 987 || Gvar.var_681 == 996 || Gvar.var_681 == 998 || Gvar.var_681 == 984 || Gvar.var_681 == 982 || Gvar.var_681 == 986 || Gvar.var_681 == 981 || Gvar.var_681 == 980 || Gvar.var_681 == 985 || Gvar.var_681 == 978 || Gvar.var_681 == 977) {
            return;
        }
        // Gvar.var_677にitem_listのIDが割り当てられていたら、そのIDを返す
        if (Gvar.receive_bgm_id == Gvar.belongings_item_list) {
            // Gvar.var_681 = 989 が設定させていたら、その値を返す
            if (Gvar.var_681 == 989) {
                Gvar.bgm_list_id = 989; // 亀の中のBGM
                await Music.func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング  "0.mp3" 設定)
                return;
            }
            // Ver0.1403にて追加。var_681 = 976 が設定させていたら、その値を返す
            if (Gvar.var_681 == 976) {
                Gvar.bgm_list_id = 976; // 酒場のBGM
                await Music.func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング  "0.mp3" 設定)
                return;
            }
            // Gvar.bgm_list_id = 0  なら ダンジョンテーマソングを流す処理を呼び出し
            Gvar.bgm_list_id = 0; // BGMをダンジョンテーマソングへ戻す
            await Music.func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング  "0.mp3" 設定)
            return;
        }
        return;
}

export {func106}
