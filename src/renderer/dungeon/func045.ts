import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

async function func045(this: any) {
        Adap.dbgprt(45);
        // No = 1 なので、ホテルの外
        if (Gvar.dungeon_number == 1 && Gvar.current_floor == 12 && Gvar.var_203 == 0) { // No = 0:エンヤホテル
            return;
        }
        // No = 2 なので、レクイエムの大迷宮
        if (Gvar.dungeon_number == 2 && Gvar.current_floor == 30) {
            return;
        }
        // No = 3 なので、ディアボロの試練
        if (Gvar.dungeon_number == 3 && Gvar.current_floor == 99) {
            return;
        }
        // No = 5 なので、鉄獄(鉄の牢獄)
        if (Gvar.dungeon_number == 5 && Gvar.current_floor == Gvar.var_20) {
            return;
        }
        for (let cnt1 = 0; true; ++cnt1) {
            Gvar.var_491 = Adap.rnd(Gvar.var_33);
            Gvar.var_492 = Adap.rnd(Gvar.var_34);
            if (Gvar.var_491 >= 30 && Gvar.var_491 <= 35 && Gvar.var_492 >= 23 && Gvar.var_492 <= 30) {
                continue;
            }
            if (Gvar.var_71[Gvar.var_491][Gvar.var_492] != 0 && Gvar.var_71[Gvar.var_491][Gvar.var_492] <= 12 && Gvar.var_72[Gvar.var_491][Gvar.var_492] == 0 && Gvar.var_80[Gvar.var_491][Gvar.var_492] == 0 && Gvar.var_77[Gvar.var_491][Gvar.var_492] == 0 && Gvar.var_73[Gvar.var_491][Gvar.var_492] == 0) {
                break;
            }
            // 幻覚の迷宮
            if (Gvar.special_floor == 8 && Gvar.var_71[Gvar.var_491][Gvar.var_492] == 14 && Gvar.var_80[Gvar.var_491][Gvar.var_492] == 0 && Gvar.var_77[Gvar.var_491][Gvar.var_492] == 0 && Gvar.var_73[Gvar.var_491][Gvar.var_492] == 0) {
                break;
            }
        }
        if (Gvar.special_floor == 5) { // 没特殊階層「ビンの中」ボスは毒グモ
            Gvar.var_491 = 30;
            Gvar.var_492 = 17;
        }
        if (Gvar.special_floor == 9) { // 幽霊部屋
            Gvar.var_491 = 23; // X軸21
            Gvar.var_492 = 13; // Y軸13
        }
        Gvar.var_73[Gvar.var_491][Gvar.var_492] = 1;
        Gvar.var_200 = Gvar.var_71[Gvar.var_491][Gvar.var_492];
        // Ver0.1403にてコメントアウト。おそらく全て無くして良い。No = 5 なので、鉄獄(鉄の牢獄)
        /*
        if (Gvar.dungeon_number == 5 && Gvar.current_floor != 1) {
            for (let cnt2 = 0; true; ++cnt2) {
                Gvar.var_491 = Adap.rnd(Gvar.var_33);
                Gvar.var_492 = Adap.rnd(Gvar.var_34);
                if (Gvar.var_491 >= 30 && Gvar.var_491 <= 35 && Gvar.var_492 >= 23 && Gvar.var_492 <= 30) {
                    continue;
                }
                if (Gvar.var_71[Gvar.var_491][Gvar.var_492] != 0 && Gvar.var_71[Gvar.var_491][Gvar.var_492] <= 12 && Gvar.var_72[Gvar.var_491][Gvar.var_492] == 0 && Gvar.var_80[Gvar.var_491][Gvar.var_492] == 0 && Gvar.var_77[Gvar.var_491][Gvar.var_492] == 0 && Gvar.var_73[Gvar.var_491][Gvar.var_492] == 0) {
                    break;
                }
                // 幻覚の迷宮
                if (Gvar.special_floor == 8 && Gvar.var_71[Gvar.var_491][Gvar.var_492] == 14 && Gvar.var_80[Gvar.var_491][Gvar.var_492] == 0 && Gvar.var_77[Gvar.var_491][Gvar.var_492] == 0 && Gvar.var_73[Gvar.var_491][Gvar.var_492] == 0) {
                    break;
                }
            }
            // Gvar.var_73[Gvar.var_491][Gvar.var_492] = 2; // Ver0.1403にてコメントアウト。上りの階段生成フラグ
            //var_202 = Gvar.var_71[Gvar.var_491][Gvar.var_492];
        }*/
        return;
}

export {func045}
