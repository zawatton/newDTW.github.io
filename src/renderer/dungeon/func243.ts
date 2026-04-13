import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// ダンジョン関係
// 旧 func243
async function func243(this: any) {
        Adap.dbgprt(243);
        Gvar.var_86 = Adap.rnd(12);
        if (Gvar.current_floor < 4) {
            Gvar.var_86 = 1;
        }
        if (Gvar.special_floor >= 1) {
            Gvar.var_70 = 0;
        }
        // No = 1 なので、ホテルの外
        if (Gvar.dungeon_number == 1) {
            Gvar.var_86 = 1;
        }
        if (Gvar.var_70 != 0) {
            Gvar.var_86 = 0;
        }
        // No = 1 なので、ホテルの外
        if (Gvar.dungeon_number == 1 && Gvar.current_floor == 12) {
            Gvar.var_86 = 0;
        }
        // No = 2 なので、レクイエムの大迷宮
        if (Gvar.dungeon_number == 2 && Gvar.current_floor == 30) {
            Gvar.var_86 = 0;
        }
        // No = 3 なので、ディアボロの試練
        if (Gvar.dungeon_number == 3 && Gvar.current_floor == 99) {
            Gvar.var_86 = 0;
        }
        // No = 5 なので、鉄獄(鉄の牢獄)
        if (Gvar.dungeon_number == 5 && Gvar.current_floor == Gvar.var_20) {
            Gvar.var_86 = 0; // Ver0.1403にて修正 1 → 0。ランダムダンジョンマップ生成フラグOFF
        }
        if (Gvar.special_floor == 1) { // 虹村屋敷
            Gvar.var_86 = 0;
        }
        if (Gvar.special_floor == 2) { // 杜王町埠頭
            Gvar.var_86 = 0;
        }
        if (Gvar.special_floor == 3) { // 吉良屋敷
            Gvar.var_86 = 0;
        }
        if (Gvar.special_floor == 4) { // 没特殊階層「星屑の十字軍」ボスは承太郎
            Gvar.var_86 = 1;
        }
        if (Gvar.special_floor == 5) { // 没特殊階層「ビンの中」ボスは毒グモ
            Gvar.var_86 = 0;
        }
        if (Gvar.special_floor == 6) { // 没特殊階層「ナチス実験施設」ボスはサンタナ
            Gvar.var_86 = 0;
        }
        if (Gvar.special_floor == 7) { // 広大な砂漠
            Gvar.var_86 = 0;
        }
        if (Gvar.special_floor == 8) { // 幻覚の迷宮
            Gvar.var_86 = 0;
        }
        if (Gvar.special_floor == 9) { // 幽霊部屋
            Gvar.var_86 = 0;
        }
        return;
}

export {func243}
