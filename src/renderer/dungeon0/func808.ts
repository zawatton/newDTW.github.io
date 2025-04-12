import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func808(this: any) {
        Adap.dbgprt(808);
        Gvar.var_836 = Gvar.dungeon_number;
        Gvar.var_837 = Gvar.current_floor;
        if (Gvar.var_837 <= 3) {
            Gvar.var_1013 = 0;
        }
        if (Gvar.var_837 >= 4) {
            Gvar.var_1013 = 1;
        }
        if (Gvar.var_837 >= 8) {
            Gvar.var_1013 = 2;
        }
        if (Gvar.var_837 >= 12) {
            Gvar.var_1013 = 3;
        }
        if (Gvar.var_837 >= 15) {
            Gvar.var_1013 = 4;
        }
        if (Gvar.var_837 >= 18) {
            Gvar.var_1013 = 5;
        }
        if (Gvar.var_837 >= 20) {
            Gvar.var_1013 = 6;
        }
        if (Gvar.var_837 >= 22) {
            Gvar.var_1013 = 7;
        }
        if (Gvar.var_837 >= 25) {
            Gvar.var_1013 = 8;
        }
        Gvar.var_1036 = Adap.rnd(3);
        Gvar.var_1036 = Gvar.var_1036 + 2;
        Gvar.var_683 = 1;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
                Gvar.var_991[0][Gvar.var_683][cnt2] = 0;
            }
            Gvar.var_866 = 0;
            Gvar.var_1736 = Adap.rnd(100);
            if (Gvar.var_1736 >= 0 && Gvar.var_1736 < 5) {
                Gvar.var_1735 = 6;
            }
            if (Gvar.var_1736 >= 5 && Gvar.var_1736 < 10) {
                Gvar.var_1735 = 4;
            }
            if (Gvar.var_1736 >= 10 && Gvar.var_1736 < 60) {
                Gvar.var_1735 = 1;
            }
            if (Gvar.var_1736 >= 60 && Gvar.var_1736 < 70) {
                Gvar.var_1735 = 5;
            }
            if (Gvar.var_1736 >= 70 && Gvar.var_1736 < 85) {
                Gvar.var_1735 = 3;
            }
            if (Gvar.var_1736 >= 85 && Gvar.var_1736 < 100) {
                Gvar.var_1735 = 9;
            }
            if (Gvar.var_262 == 1) { // Gvar.var_262 == 1 なので、Gvar.dungeon_number = 0 であれば
                // No = 2 なので、レクイエムの大迷宮
                Gvar.dungeon_number = 2;
            }
            await Func.func385(); // 各ダンジョンごとの出現アイテム&出現確率管理
            if (Gvar.var_262 == 1) { // Gvar.var_262 == 1 なので、Gvar.dungeon_number = 0 であれば
                // No = 0 なので、拠点(ホテル、亀、)
                Gvar.dungeon_number = 0;
            }
            for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
                Gvar.var_991[0][Gvar.var_683][cnt2] = Gvar.var_78[Gvar.var_866]["Var" + cnt2];
            }
            Gvar.var_991[0][Gvar.var_683][11] = 1;
            Gvar.var_991[0][Gvar.var_683][12] = 0;
            Gvar.var_991[0][Gvar.var_683][14] = 0;
            Gvar.var_991[0][Gvar.var_683][15] = 0;
            Gvar.var_683 = Gvar.var_683 + 1;
        }
        return;
}

export {func808}
