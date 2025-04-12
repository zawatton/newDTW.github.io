import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// ダンジョン内の階段機能
async function func063(this: any) {
        Adap.dbgprt(63);
        Adap.color(0, 0, 0);
        Adap.gmode(4, null, null, 100);
        Adap.pos(12, 37);
        if (Gvar.var_262 == 0) { // Gvar.var_262 == 0 なので、Gvar.dungeon_number = 0 でなければ
            Adap.gcopy(12, 0, 0, 113, 53);
        }
        if (Gvar.var_262 == 1) { // Gvar.var_262 == 1 なので、Gvar.dungeon_number = 0 であれば
            Adap.gcopy(12, 0, 0, 203, 113);
        }
        if (Gvar.var_262 == 0) { // Gvar.var_262 == 0 なので、Gvar.dungeon_number = 0 でなければ
            Adap.color(255, 255, 255);
            Adap.line(15, 39, 120, 39);
            Adap.line(15, 86, 120, 86);
            Adap.line(14, 40, 14, 84);
            Adap.line(122, 40, 122, 84);
            Adap.pset(15, 40);
            Adap.pset(121, 40);
            Adap.pset(15, 85);
            Adap.pset(121, 85);
        }
        if (Gvar.var_262 == 1) { // Gvar.var_262 == 1 なので、Gvar.dungeon_number = 0 であれば
            Adap.color(255, 255, 255);
            Adap.line(15, 39, 210, 39);
            Adap.line(15, 146, 210, 146);
            Adap.line(14, 40, 14, 144);
            Adap.line(212, 40, 212, 144);
            Adap.pset(15, 40);
            Adap.pset(211, 40);
            Adap.pset(15, 145);
            Adap.pset(211, 145);
        }
        Adap.font(Gvar.font_type, Gvar.font_size = 16, Gvar.font_style = 1);
        Adap.color(255, 255, 255);
        Adap.pos(33, 47);
        if (Gvar.var_262 == 0) { // Gvar.var_262 == 0 なので、Gvar.dungeon_number = 0 でなければ
            if (Gvar.var_73[Gvar.var_66][Gvar.var_67] == 1) {
                Gvar.var_543 = 0;
                // No = 1 なので、ホテルの外
                if (Gvar.dungeon_number == 1 && Gvar.current_floor == 12) {
                    Gvar.var_543 = 1;
                }
                // No = 2 なので、レクイエムの大迷宮
                if (Gvar.dungeon_number == 2 && Gvar.current_floor == 30) {
                    Gvar.var_543 = 1;
                }
                // No = 3 なので、ディアボロの試練
                if (Gvar.dungeon_number == 3 && Gvar.current_floor == 99) {
                    Gvar.var_543 = 1;
                }
                // No = 5 なので、鉄獄(鉄の牢獄)
                if (Gvar.dungeon_number == 5 && Gvar.current_floor == Gvar.var_20) {
                    Gvar.var_543 = 1;
                }
                if (Gvar.var_543 == 0) {
                    Adap.mes("降りる");
                }
                if (Gvar.var_543 == 1) {
                    Adap.mes("のぼる");
                }
                Adap.mes("そのまま");
            }
            if (Gvar.var_73[Gvar.var_66][Gvar.var_67] == 2) {
                Adap.mes("のぼる");
                Adap.mes("そのまま");
            }
        }
        Adap.color(255, 255, 255);
        Adap.font(Gvar.font_type, 16, 1);
        Adap.pos(Gvar.var_245, Gvar.var_246);
        Adap.mes(">");
        Adap.pos(Gvar.var_245 + 1, Gvar.var_246);
        Adap.mes(">");
        Adap.pos(Gvar.var_245 + 2, Gvar.var_246);
        Adap.mes(">");
        Adap.gmode(2, null, null, null);
        return;
}

export {func063}
