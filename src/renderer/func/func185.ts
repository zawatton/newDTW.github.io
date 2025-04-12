import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func185(this: any) {
        Adap.dbgprt(185);
        Gvar.current_floor = Gvar.var_871 + 1;
        Gvar.current_level = Gvar.var_872 + 1;
        if (Gvar.current_level > 99) {
            Gvar.current_level = 99;
        }
        if (Gvar.current_level <= 1) {
            Gvar.current_level = 1;
        }
        if (Gvar.current_floor <= 1) {
            Gvar.current_floor = 1;
        }
        Gvar.var_352 = Gvar.current_level * 4 + 15;
        Gvar.var_211 = Gvar.var_352;
        Gvar.special_floor = Gvar.var_880;
        if (Gvar.dungeon_number == 0) {
            // No = 1 なので、ホテルの外
            Gvar.dungeon_number = 1;
        }
        Gvar.var_262 = 0; // Gvar.dungeon_number = 0 確認フラグOFF
        Gvar.var_595 = 0; // Gvar.dungeon_number = 0 での場所確認。0 = ヴェネチアホテル
        Adap.gsel( Gvar.window_id = 31, Gvar.window_mode = -1);
        Adap.gsel(0, 1);
        await Func.func076(); // 各ダンジョンの絵文字読込処理
        for (let cnt1 = 0; cnt1 < 80; ++cnt1) {
            await Func.func339();
        }
        await Func.func006(); // 一巡後の世界のみのフラグ処理
        return;
}

export {func185}
