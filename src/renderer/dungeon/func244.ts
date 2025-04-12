import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func244(this: any) {
        Adap.dbgprt(244);
        Gvar.var_95 = 0;
        Gvar.var_994 = 0;
        Gvar.var_1052 = 0;
        Gvar.var_96 = 0;
        Gvar.special_map_id = Adap.rnd(11);
        if (Gvar.dungeon_number == 3) {
            Gvar.special_map_id = Adap.rnd(14);
        }
        // No = 1 なので、ホテルの外
        if (Gvar.dungeon_number == 1 && Gvar.current_floor == 12) {
            Gvar.special_map_id = 111; // エンヤホテルのダンジョンマップ
        }
        // No = 2 なので、レクイエムの大迷宮
        if (Gvar.dungeon_number == 2 && Gvar.current_floor == 30) {
            Gvar.special_map_id = 121; // 黄金の風のダンジョンマップ
        }
        // No = 3 なので、ディアボロの試練
        if (Gvar.dungeon_number == 3 && Gvar.current_floor == 99) { // 最終フロア自由人の狂想曲
            Gvar.special_map_id = 120; // 自由人の狂想曲のダンジョンマップ
        }
        // No = 5 なので、鉄獄(鉄の牢獄)
        if (Gvar.dungeon_number == 5 && Gvar.current_floor == Gvar.var_20) { // 最終フロアケープカナベラル
            Gvar.special_map_id = 120; // 自由人の狂想曲のダンジョンマップ(ケープカナベラルとしても使用)
        }
        if (Gvar.special_floor == 1) { // 虹村屋敷
            Gvar.special_map_id = 114; // 虹村屋敷のダンジョンマップ
        }
        if (Gvar.special_floor == 2) { // 杜王町埠頭
            Gvar.special_map_id = 112; // 杜王町埠頭のダンジョンマップ
        }
        if (Gvar.special_floor == 3) { // 吉良屋敷
            Gvar.special_map_id = 115; // 吉良屋敷のダンジョンマップ
        }
        if (Gvar.special_floor == 5) { // 没特殊階層「ビンの中」ボスは毒グモ
            Gvar.special_map_id = 116;
        }
        if (Gvar.special_floor == 6) { // 没特殊階層「ナチス実験施設」ボスはサンタナ
            Gvar.special_map_id = 117;
        }
        if (Gvar.special_floor == 7) { // 広大な砂漠
            Gvar.special_map_id = 113;
        }
        if (Gvar.special_floor == 8) { // 幻覚の迷宮
            Gvar.special_map_id = 118;
        }
        if (Gvar.special_floor == 9) { // 幽霊部屋
            Gvar.special_map_id = 119;
        }
        if (Gvar.var_70 == 5) {
            Gvar.special_map_id = 6;
        }
        if (Gvar.var_70 == 6) {
            Gvar.special_map_id = 3;
        }
        if (Gvar.var_70 == 7) {
            Gvar.special_map_id = 0;
        }
        if (Gvar.var_70 == 11) {
            Gvar.special_map_id = 11;
        }
        if (Gvar.var_70 == 12) {
            Gvar.special_map_id = 12;
        }
        if (Gvar.var_70 == 99) {
            Gvar.special_map_id = 122;
        }
        if (Gvar.var_70 == 1 || Gvar.var_70 == 2 || Gvar.var_70 == 3 || Gvar.var_70 == 4 || Gvar.var_70 == 8 || Gvar.var_70 == 9 || Gvar.var_70 == 10 || Gvar.var_70 == 13) {
            Gvar.var_1073 = Adap.rnd(4);
            if (Gvar.var_1073 == 0) {
                Gvar.special_map_id = 1;
            }
            if (Gvar.var_1073 == 1) {
                Gvar.special_map_id = 2;
            }
            if (Gvar.var_1073 == 2) {
                Gvar.special_map_id = 9;
            }
            if (Gvar.var_1073 == 3) {
                Gvar.special_map_id = 10;
            }
        }
        if (Gvar.special_map_id == 0) {
            Gvar.var_1073 = Adap.rnd(3);
            if (Gvar.var_1073 == 0 || Gvar.var_1073 == 1) {
                await Func.func300(); // 大部屋ダンジョンマップ
            }
            if (Gvar.var_1073 == 2) {
                await Func.func301(); // 大部屋ダンジョンマップ(水床あり)
            }
        }
        if (Gvar.special_map_id == 1) {
            await Func.func303();
        }
        if (Gvar.special_map_id == 2) {
            await Func.func304();
        }
        if (Gvar.special_map_id == 3) {
            await Func.func305();
        }
        if (Gvar.special_map_id == 4) {
            await Func.func306();
        }
        if (Gvar.special_map_id == 5) {
            await Func.func307();
        }
        if (Gvar.special_map_id == 6) {
            await Func.func319();
        }
        if (Gvar.special_map_id == 7) {
            await Func.func308();
        }
        if (Gvar.special_map_id == 8) {
            await Func.func318();
        }
        if (Gvar.special_map_id == 9) {
            await Func.func320();
        }
        if (Gvar.special_map_id == 10) {
            await Func.func321();
        }
        if (Gvar.dungeon_number != 5) {
            if (Gvar.special_map_id == 11) {
                await Func.func311();  // 広大な砂漠のダンジョンマップ
                Gvar.special_floor = 7; // 広大な砂漠
            }
            if (Gvar.special_map_id == 12) {
                await Func.func302(); // 幻覚の迷宮のダンジョンマップ
                Gvar.special_floor = 8; // 幻覚の迷宮
            }
            if (Gvar.special_map_id == 13) {
                await Func.func316(); // 幽霊部屋のダンジョンマップ
                Gvar.special_floor = 9;
            }
        }
        if (Gvar.special_map_id == 111) {
            await Func.func309(); // エンヤホテルのダンジョンマップ
        }
        if (Gvar.special_map_id == 112) {
            await Func.func310(); // 杜王町埠頭のダンジョンマップ
        }
        if (Gvar.special_map_id == 113) {
            await Func.func311(); // 広大な砂漠のダンジョンマップ
        }
        if (Gvar.special_map_id == 114) {
            await Func.func312(); // 虹村屋敷のダンジョンマップ
        }
        if (Gvar.special_map_id == 115) {
            await Func.func313(); // 吉良屋敷のダンジョンマップ
        }
        if (Gvar.special_map_id == 116) {
            await Func.func314(); // 没特殊階層「ビンの中」ボスは毒グモのダンジョンマップ
        }
        if (Gvar.special_map_id == 117) {
            await Func.func315(); // 没特殊階層「ナチス実験施設」ボスはサンタナのダンジョンマップ
        }
        if (Gvar.special_map_id == 118) {
            await Func.func302(); // 幻覚の迷宮のダンジョンマップ
        }
        if (Gvar.special_map_id == 119) {
            await Func.func316(); // 幽霊部屋のダンジョンマップ
        }
        if (Gvar.special_map_id == 120) {
            await Func.func317(); // 自由人の狂想曲のダンジョンマップ
        }
        if (Gvar.special_map_id == 121) {
            await Func.func322(); // 黄金の風のダンジョンマップ
        }
        if (Gvar.special_map_id == 122) {
            await Func.func300(); // 大部屋ダンジョンマップ
        }
        if (Gvar.special_map_id == 0) {
            Gvar.var_204 = 1;
            Gvar.var_96 = 1;
        }
        if (Gvar.special_map_id == 1) {
            Gvar.var_1074 = Adap.rnd(2);
            Gvar.var_1074 = Gvar.var_1074 + 1;
            Gvar.var_204 = Gvar.var_1074;
            await Func.func245();
        }
        if (Gvar.special_map_id == 2) {
            Gvar.var_1074 = Adap.rnd(4);
            Gvar.var_1074 = Gvar.var_1074 + 1;
            Gvar.var_204 = Gvar.var_1074;
            await Func.func245();
        }
        if (Gvar.special_map_id == 9) {
            Gvar.var_1074 = Adap.rnd(6);
            Gvar.var_1074 = Gvar.var_1074 + 1;
            Gvar.var_204 = Gvar.var_1074;
            await Func.func245();
        }
        if (Gvar.special_map_id == 10) {
            Gvar.var_1074 = Adap.rnd(3);
            Gvar.var_1074 = Gvar.var_1074 + 1;
            Gvar.var_204 = Gvar.var_1074;
            await Func.func245();
        }
        if (Gvar.special_map_id == 122) {
            Gvar.var_204 = 1;
            Gvar.var_96 = 9;
        }
        Gvar.var_70 = 0;
        Gvar.var_764 = 0;
        Gvar.var_1075 = 0;
        for (let cnt1 = 0; cnt1 < Gvar.var_32; ++cnt1) {
            Gvar.var_1076 = 0;
            for (let cnt2 = 0; cnt2 < Gvar.var_31; ++cnt2) {
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 35) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 0;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 46) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 14;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 49) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 1;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 50) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 2;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 51) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 3;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 52) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 4;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 53) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 5;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 54) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 6;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 55) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 7;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 56) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 8;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 57) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 9;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 120) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 10;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 121) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 11;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 122) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 12;
                    Gvar.var_72[Gvar.var_1076][Gvar.var_1075] = 1;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 94) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 13;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 73) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 12;
                    Gvar.var_79[Gvar.var_1076][Gvar.var_1075] = 1;
                    Gvar.var_72[Gvar.var_1076][Gvar.var_1075] = 1;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 74) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 12;
                    Gvar.var_79[Gvar.var_1076][Gvar.var_1075] = 2;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 76) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 1;
                    Gvar.var_79[Gvar.var_1076][Gvar.var_1075] = 3;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 77) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 2;
                    Gvar.var_79[Gvar.var_1076][Gvar.var_1075] = 3;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 78) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 3;
                    Gvar.var_79[Gvar.var_1076][Gvar.var_1075] = 3;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 79) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 4;
                    Gvar.var_79[Gvar.var_1076][Gvar.var_1075] = 3;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 80) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 5;
                    Gvar.var_79[Gvar.var_1076][Gvar.var_1075] = 3;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 81) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 6;
                    Gvar.var_79[Gvar.var_1076][Gvar.var_1075] = 3;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 82) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 7;
                    Gvar.var_79[Gvar.var_1076][Gvar.var_1075] = 3;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 83) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 8;
                    Gvar.var_79[Gvar.var_1076][Gvar.var_1075] = 3;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 84) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 9;
                    Gvar.var_79[Gvar.var_1076][Gvar.var_1075] = 3;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 85) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 10;
                    Gvar.var_79[Gvar.var_1076][Gvar.var_1075] = 3;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 86) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 11;
                    Gvar.var_79[Gvar.var_1076][Gvar.var_1075] = 3;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 87) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 12;
                    Gvar.var_79[Gvar.var_1076][Gvar.var_1075] = 3;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 97) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 12;
                    Gvar.var_72[Gvar.var_1076][Gvar.var_1075] = 2;
                    Gvar.var_1016 = Gvar.var_1076;
                    Gvar.var_1017 = Gvar.var_1075;
                    Gvar.var_84[Gvar.var_1076][Gvar.var_1075] = 1;
                    Gvar.var_995 = 12;
                    Gvar.var_996 = Gvar.var_1005;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 98) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 12;
                    Gvar.var_72[Gvar.var_1076][Gvar.var_1075] = 3;
                    Gvar.var_1018 = Gvar.var_1076;
                    Gvar.var_1019 = Gvar.var_1075;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 99) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 12;
                    Gvar.var_72[Gvar.var_1076][Gvar.var_1075] = 4;
                    Gvar.var_1020 = Gvar.var_1076;
                    Gvar.var_1021 = Gvar.var_1075;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 100) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 14;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 101) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 14;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 102) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 14;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 103) {
                    Gvar.var_71[Gvar.var_1076][Gvar.var_1075] = 14;
                }
                Gvar.var_1076 = Gvar.var_1076 + 1;
                Gvar.var_764 = Gvar.var_764 + 1;
            }
            Gvar.var_1075 = Gvar.var_1075 + 1;
        }
        Gvar.var_764 = 0;
        Gvar.var_1075 = 0;
        for (let cnt1 = 0; cnt1 < Gvar.var_32; ++cnt1) {
            Gvar.var_1076 = 0;
            for (let cnt2 = 0; cnt2 < Gvar.var_31; ++cnt2) {
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 103) {
                    Gvar.var_1077 = Gvar.var_1076;
                    Gvar.var_1078 = Gvar.var_1075 + 1;
                    Gvar.var_1079 = Gvar.var_71[Gvar.var_1077][Gvar.var_1078];
                    Gvar.var_76[Gvar.var_1079][1][1] = Gvar.var_1076;
                    Gvar.var_76[Gvar.var_1079][1][2] = Gvar.var_1075;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 101) {
                    Gvar.var_1077 = Gvar.var_1076 + 1;
                    Gvar.var_1078 = Gvar.var_1075;
                    Gvar.var_1079 = Gvar.var_71[Gvar.var_1077][Gvar.var_1078];
                    Gvar.var_76[Gvar.var_1079][2][1] = Gvar.var_1076;
                    Gvar.var_76[Gvar.var_1079][2][2] = Gvar.var_1075;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 102) {
                    Gvar.var_1077 = Gvar.var_1076 - 1;
                    Gvar.var_1078 = Gvar.var_1075;
                    Gvar.var_1079 = Gvar.var_71[Gvar.var_1077][Gvar.var_1078];
                    Gvar.var_76[Gvar.var_1079][3][1] = Gvar.var_1076;
                    Gvar.var_76[Gvar.var_1079][3][2] = Gvar.var_1075;
                }
                if (Adap.peek(Gvar.var_983, Gvar.var_764) == 100) {
                    Gvar.var_1077 = Gvar.var_1076;
                    Gvar.var_1078 = Gvar.var_1075 - 1;
                    Gvar.var_1079 = Gvar.var_71[Gvar.var_1077][Gvar.var_1078];
                    Gvar.var_76[Gvar.var_1079][4][1] = Gvar.var_1076;
                    Gvar.var_76[Gvar.var_1079][4][2] = Gvar.var_1075;
                }
                Gvar.var_1076 = Gvar.var_1076 + 1;
                Gvar.var_764 = Gvar.var_764 + 1;
            }
            Gvar.var_1075 = Gvar.var_1075 + 1;
        }
        return;
}

export {func244}
