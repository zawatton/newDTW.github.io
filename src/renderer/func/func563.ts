import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func563(this: any) {
        Adap.dbgprt(563);
        Gvar.var_387 = 0;
        Gvar.var_386 = 0;
        // No = 1 なので、ホテルの外
        if (Gvar.dungeon_number == 1 && Gvar.current_floor == 12 && Gvar.special_floor == 0) {
            Gvar.var_2543 = 1;
            Gvar.var_386 = 1;
            await Func.func556();
            Gvar.var_2543 = 0;
        }
        // No = 2 なので、レクイエムの大迷宮
        if (Gvar.dungeon_number == 2 && Gvar.current_floor == 30) {
            Gvar.var_2543 = 6; // ダンジョン主指定フラグ 6 = 132 レクイエムジョルノ
            await Func.func556();
            Gvar.var_2543 = 0;
        }
        // No = 3 なので、ディアボロの試練
        if (Gvar.dungeon_number == 3 && Gvar.current_floor == 99) {
            Gvar.var_2543 = 7; // ダンジョン主指定フラグ 7 = 143 ウンガロ
            await Func.func556();
            Gvar.var_2543 = 0;
        }
        // Ver0.1403にて追加。No = 5 なので、鉄獄
        if (Gvar.dungeon_number == 5 && Gvar.current_floor == Gvar.var_20) {
            Gvar.var_2543 = 8; // ダンジョン主指定フラグ 8 = 171 離婚した承太郎
            await Func.func556();
            Gvar.var_2543 = 0;
        }        
        if (Gvar.special_floor == 1) { // 虹村屋敷
            Gvar.var_2543 = 3;
            await Func.func556();
            Gvar.var_2543 = 0;
            Gvar.var_387 = 1;
        }
        if (Gvar.special_floor == 2) { // 杜王町埠頭
            Gvar.var_2543 = 2;
            await Func.func556();
            Gvar.var_2543 = 0;
        }
        if (Gvar.special_floor == 3) { // 吉良屋敷
            Gvar.var_2543 = 4;
            await Func.func556();
            Gvar.var_2543 = 0;
        }
        if (Gvar.special_floor == 4) { // 没特殊階層「星屑の十字軍」ボスは承太郎
            Gvar.var_2543 = 5;
            await Func.func556();
            Gvar.var_2543 = 0;
        }
        if (Gvar.special_floor == 6) { // 没特殊階層「ナチス実験施設」ボスはサンタナ
            Gvar.var_2543 = 9;
            await Func.func556();
            Gvar.var_2543 = 0;
        }
        if (Gvar.special_floor == 7) { // 広大な砂漠
            Gvar.var_2543 = 10;
            await Func.func556();
            Gvar.var_2543 = 0;
        }
        if (Gvar.special_floor == 9) { // 幽霊部屋
            Gvar.var_2543 = 12;
            Gvar.var_1845 = 4;
            Gvar.var_2102 = 18;
            Gvar.var_2103 = 16;
            await Func.func556();
            Gvar.var_1845 = 0;
            Gvar.var_2543 = 0;
        }
        return;
}

export {func563}
