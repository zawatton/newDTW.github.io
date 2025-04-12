import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func246(this: any) {
        Adap.dbgprt(246);
        Gvar.var_95 = 0;
        Gvar.var_994 = 0;
        await Func.func293(); // ダンジョンマップ初期化処理(+ヴェネチアホテル)
        Gvar.var_1052 = 0;
        Gvar.var_96 = 0;
        Gvar.var_1052 = Adap.rnd(6);
        // No = 3 なので、ディアボロの試練
        if (Gvar.dungeon_number == 3) {
            Gvar.var_1052 = Adap.rnd(5);
        }
        // No = 5 なので、鉄獄(鉄の牢獄)
        if (Gvar.dungeon_number == 5) {
            Gvar.var_1052 = Adap.rnd(5);
        }
        // No = 364 なので 「モンスターハウス増加」効果
        if (Gvar.equip_disc[364] == 1) {
            Gvar.var_1052 = Adap.rnd(4);
        }
        if (Gvar.var_1052 == 0) {
            Gvar.var_204 = Adap.rnd(12);
            Gvar.var_204 = Gvar.var_204 + 1;
            await Func.func245();
        }
        if (Gvar.current_floor < 4) {
            Gvar.var_96 = 0;
        }
        // No = 1 なので、ホテルの外
        if (Gvar.dungeon_number == 1) {
            Gvar.var_96 = 0;
        }
        // No = 2 なので、レクイエムの大迷宮
        if (Gvar.dungeon_number == 2 && Gvar.current_floor == 30) {
            Gvar.var_96 = 0;
        }
        // No = 3 なので、ディアボロの試練
        if (Gvar.dungeon_number == 3 && Gvar.current_floor == 99) {
            Gvar.var_96 = 0;
        }
        // No = 5 なので、鉄獄(鉄の牢獄)
        if (Gvar.dungeon_number == 5 && Gvar.current_floor == Gvar.var_20) {
            Gvar.var_96 = 0;
        }
        if (Gvar.special_floor >= 1) {
            Gvar.var_96 = 0;
        }
        Gvar.var_560 = 1;
        Gvar.var_561 = 5; // マップX軸原点の初期値5 (安易に変更すると壁の中になるのでワープしてしまう)
        Gvar.var_562 = 5; // Ver0.1404にて修正。0 → 5。実験中に0へ変更したのを戻し忘れ。マップY軸原点の初期値5 (安易に変更すると壁の中になるのでワープしてしまう)
        for (let cnt1 = 0; cnt1 < 12; ++cnt1) {
            Gvar.var_1004 = 0;
            await Func.func247();
            if (Gvar.var_560 == 1) {
                Gvar.var_1081 = 18 - Gvar.var_1082;
                Gvar.var_1083 = 16 - Gvar.var_1084;
            }
            if (Gvar.var_560 == 2) {
                Gvar.var_1081 = 31 - Gvar.var_1082;
                Gvar.var_1083 = 16 - Gvar.var_1084;
            }
            if (Gvar.var_560 == 3) {
                Gvar.var_1081 = 44 - Gvar.var_1082;
                Gvar.var_1083 = 16 - Gvar.var_1084;
            }
            if (Gvar.var_560 == 4) {
                Gvar.var_1081 = 57 - Gvar.var_1082;
                Gvar.var_1083 = 16 - Gvar.var_1084;
            }
            if (Gvar.var_560 == 5) {
                Gvar.var_1081 = 18 - Gvar.var_1082;
                Gvar.var_1083 = 27 - Gvar.var_1084;
            }
            if (Gvar.var_560 == 6) {
                Gvar.var_1081 = 31 - Gvar.var_1082;
                Gvar.var_1083 = 27 - Gvar.var_1084;
            }
            if (Gvar.var_560 == 7) {
                Gvar.var_1081 = 44 - Gvar.var_1082;
                Gvar.var_1083 = 27 - Gvar.var_1084;
            }
            if (Gvar.var_560 == 8) {
                Gvar.var_1081 = 57 - Gvar.var_1082;
                Gvar.var_1083 = 27 - Gvar.var_1084;
            }
            if (Gvar.var_560 == 9) {
                Gvar.var_1081 = 18 - Gvar.var_1082;
                Gvar.var_1083 = 38 - Gvar.var_1084;
            }
            if (Gvar.var_560 == 10) {
                Gvar.var_1081 = 31 - Gvar.var_1082;
                Gvar.var_1083 = 38 - Gvar.var_1084;
            }
            if (Gvar.var_560 == 11) {
                Gvar.var_1081 = 44 - Gvar.var_1082;
                Gvar.var_1083 = 38 - Gvar.var_1084;
            }
            if (Gvar.var_560 == 12) {
                Gvar.var_1081 = 57 - Gvar.var_1082;
                Gvar.var_1083 = 38 - Gvar.var_1084;
            }
            Gvar.var_1085 = 13 - Gvar.var_1082;
            Gvar.var_1086 = 11 - Gvar.var_1084;
            Gvar.var_1087 = Adap.rnd(Gvar.var_1085);
            Gvar.var_1088 = Adap.rnd(Gvar.var_1086);
            Gvar.var_562 = Gvar.var_1081 - Gvar.var_1087;
            Gvar.var_561 = Gvar.var_1083 - Gvar.var_1088;
            await Func.func248();
            Gvar.var_560 = Gvar.var_560 + 1;
        }
        return;
}

export {func246}
