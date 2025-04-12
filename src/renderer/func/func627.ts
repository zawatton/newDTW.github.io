import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func627(this: any) {
        Adap.dbgprt(627);
        Gvar.var_977 = Adap.dim(20);
        // No = 1 なので、ホテルの外
        if (Gvar.dungeon_number == 1) {
            await Func.func628(); // ホテルの外のボス以外の出現敵設定
        }
        // No = 2 なので、レクイエムの大迷宮
        if (Gvar.dungeon_number == 2) {
            await Func.func629(); // レクイエムの大迷宮のボス以外の出現敵設定
        }
        // No = 3 なので、ディアボロの試練
        if (Gvar.dungeon_number == 3) {
            await Func.func630(); // ディアボロの試練のボス以外の出現敵設定
        }
        // No = 4 なので、一巡後の世界
        if (Gvar.dungeon_number == 4) {
            await Func.func634(); // 一巡後の世界のボス以外の出現敵設定
        }
        // No = 5 なので、鉄獄(鉄の牢獄)
        if (Gvar.dungeon_number == 5) {
            await Func.func631(); // 鉄の牢獄のボス以外の出現敵設定
        }
        if (Gvar.special_floor == 1) { // 虹村屋敷
            Gvar.var_977 = [40, 41, 42, 54, 47, 79];
            Gvar.var_2917 = Adap.rnd(6);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.special_floor == 2) { // 杜王町埠頭
            // Gvar.var_977 = [47, 39, 35, 145, 147, 147];
            Gvar.var_977 = [47, 39, 35, 145, 147]; // Ver0.1310にて修正。
            Gvar.var_2917 = Adap.rnd(5); // Ver0.1310にて修正。Adap.rnd(7) → Adap.rnd(6)。こうしていないとバグ敵が出現する。
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.special_floor == 3) { // 吉良屋敷
            // Gvar.var_977 = [17, 17, 31, 17, 31, 31];
            Gvar.var_977 = [17, 31]; // Ver0.1310にて修正。
            Gvar.var_2917 = Adap.rnd(2); // Ver0.1310にて修正。Adap.rnd(7) → Adap.rnd(2)。こうしていないとバグ敵が出現する。
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.special_floor == 4) { // 没特殊階層「星屑の十字軍」ボスは承太郎
            Gvar.var_977 = [78, 119, 121, 122];
            Gvar.var_2917 = Adap.rnd(4);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.special_floor == 5) { // 没特殊階層「ビンの中」ボスは毒グモ
            Gvar.var_977 = [100, 100, 48];
            Gvar.var_2917 = Adap.rnd(3);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.special_floor == 6) { // 没特殊階層「ナチス実験施設」ボスはサンタナ
            Gvar.var_977 = [2, 51, 52, 71, 11];
            Gvar.var_2917 = Adap.rnd(5);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.special_floor == 7) { // 広大な砂漠
            Gvar.var_977 = [90, 90, 90, 90, 88, 88, 27];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        return;
}

export {func627}
