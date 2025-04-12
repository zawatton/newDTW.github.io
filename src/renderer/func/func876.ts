import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

// 魔少年の問題機能?? ver0.12から追加されている
async function func876(this: any) {
        Adap.dbgprt(876);
        await Func.func233(); // ダンジョンへ入った際の全ステータス初期化処理
        Gvar.var_65 = Adap.dim(70, 70, null, null);
        Gvar.dungeon_number = 99;
        Gvar.var_375 = 1;
        Gvar.var_336 = 0;
        Gvar.var_97 = 0;
        Gvar.var_337 = 0;
        await Func.func877();
        await Func.func858();
        Gvar.y_axis_map_image = Gvar.var_3261;
        if (Gvar.y_axis_map_image == 15 || Gvar.y_axis_map_image == 19 || Gvar.y_axis_map_image == 22 || Gvar.y_axis_map_image == 11 || Gvar.y_axis_map_image == 23) {
            Gvar.var_103 = 1;
        }
        Gvar.var_199 = 2;
        Gvar.var_74[Gvar.var_66][Gvar.var_67] = 1;
        Gvar.var_75[Gvar.var_201] = 1;
        await Func.func017();
        await Func.func018();
        if (Gvar.var_200 == Gvar.var_201) {
            Gvar.var_98 = 1;
        }
        Adap.chdir(Gvar.var_30);
        Adap.onexit(1);
        Gvar.var_626 = 0;
        await Music.func111();
        await Func.func076(); // 各ダンジョンの絵文字読込処理
        for (let cnt1 = 0; cnt1 < 80; ++cnt1) {
            await Func.func339();
        }
        Gvar.var_68 = 1;
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
}

export {func876}
