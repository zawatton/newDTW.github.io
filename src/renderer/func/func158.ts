import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Class from '../classes'

async function func158(this: any) {
        Adap.dbgprt(158);
        Gvar.var_767 = 0;
        Gvar.var_262 = 1; // Gvar.dungeon_number = 0 確認フラグON
        Gvar.current_floor = 0;
        Gvar.var_199 = 8;
        Gvar.y_axis_map_image = 18;
        await Func.func293(); // ダンジョンマップ初期化処理(+ヴェネチアホテル)
        Gvar.var_560 = 1;
        Gvar.var_561 = 5; // マップX軸原点の初期値5 (安易に変更すると壁の中になるのでワープしてしまう)
        Gvar.var_562 = 5; // マップY軸原点の初期値5 (安易に変更すると壁の中になるのでワープしてしまう)
        await Func.func288(); // ヴェネチアホテル+亀初期マップ+ローマ・ティベレ河マップ配置処理(亀の成長0)
        await Func.func248();
        // No = 0 なので、拠点(ホテル、亀、)
        Gvar.dungeon_number = 0;
        Gvar.var_532 = 0;

        Gvar.var_77 = Adap.dim(70, 70, null, null);
        Gvar.var_78 = Class.ItemInfo.dim(300);

        Gvar.var_82 = Adap.dim(70, 70, null, null);
        Gvar.var_83 = Class.CharactorInfo.dim(300);

        Gvar.var_73 = Adap.dim(70, 70, null, null);

        Gvar.var_65 = Adap.dim(70, 70, null, null);
        Gvar.var_66 = 29;
        Gvar.var_67 = 10;
        Gvar.var_65[Gvar.var_66][Gvar.var_67] = 1;
        Gvar.var_374 = 1;
        // キャラ配置と思われる
        Gvar.var_97 = 0;
        Gvar.var_97 = Gvar.var_97 + 1;
        Gvar.var_82[28][10] = Gvar.var_97;
        Gvar.var_83[Gvar.var_97].Var0 = 49;
        Gvar.var_83[Gvar.var_97].Var1 = 28;
        Gvar.var_83[Gvar.var_97].Var2 = 10;
        Gvar.var_83[Gvar.var_97].Var5 = 6;
        Gvar.var_83[Gvar.var_97].Var32 = Adap.rnd(6);

        Gvar.var_97 = Gvar.var_97 + 1;
        Gvar.var_82[32][10] = Gvar.var_97;
        Gvar.var_83[Gvar.var_97].Var0 = 132; // No = 132 レクイエムジョルノ
        Gvar.var_83[Gvar.var_97].Var1 = 32;
        Gvar.var_83[Gvar.var_97].Var2 = 10;
        Gvar.var_83[Gvar.var_97].Var5 = 4;
        Gvar.var_83[Gvar.var_97].Var32 = Adap.rnd(6);
        
        Gvar.var_97 = Gvar.var_97 + 1;
        Gvar.var_82[30][7] = Gvar.var_97;
        Gvar.var_83[Gvar.var_97].Var0 = 124;
        Gvar.var_83[Gvar.var_97].Var1 = 30;
        Gvar.var_83[Gvar.var_97].Var2 = 7;
        Gvar.var_83[Gvar.var_97].Var5 = 2;
        Gvar.var_83[Gvar.var_97].Var32 = Adap.rnd(6);

        Gvar.var_97 = Gvar.var_97 + 1;
        Gvar.var_82[31][8] = Gvar.var_97;
        Gvar.var_83[Gvar.var_97].Var0 = 152;
        Gvar.var_83[Gvar.var_97].Var1 = 31;
        Gvar.var_83[Gvar.var_97].Var2 = 8;
        Gvar.var_83[Gvar.var_97].Var5 = 1;
        Gvar.var_83[Gvar.var_97].Var32 = Adap.rnd(6);
        return;
}

export {func158}
