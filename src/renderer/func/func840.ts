import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
// 選択肢処理(はい、いいえ & 買う、やめる等)
async function func840(this: any) {
        Adap.dbgprt(840);
        Adap.color(0, 0, 0);
        Adap.gmode(4, null, null, 100);
        Adap.pos(12, 37);
        Adap.gcopy(12, 0, 0, 113, 53);
        Adap.color(255, 255, 255);
        Adap.line(15, 39, 120, 39);
        Adap.line(15, 86, 120, 86);
        Adap.line(14, 40, 14, 84);
        Adap.line(122, 40, 122, 84);
        Adap.pset(15, 40);
        Adap.pset(121, 40);
        Adap.pset(15, 85);
        Adap.pset(121, 85);
        Adap.font(Gvar.font_type, Gvar.font_size = 16, Gvar.font_style = 1);
        Adap.color(255, 255, 255);
        Adap.pos(33, 47);
        if (Gvar.go_to_hotel == 0 && Gvar.var_3198 == 0 && Gvar.var_3192 == 0 && Gvar.var_3147 == 0 && Gvar.var_3136 == 0 && Gvar.var_3163 != 2 && Gvar.var_3163 != 3) {
            Adap.mes("はい");
            Adap.mes("いいえ");
        }
        // Ver0.1403にて追加。ホテルの外へ向かうかどうかの選択。酒場へ行けるようになるまで。
        if (Gvar.dungeon_number == 0 && Gvar.var_66 == 11 && Gvar.var_67 == 8 && Gvar.var_759 == 0 && Gvar.var_3198 == 1) {
            Adap.mes("はい");
            Adap.mes("いいえ");
        }
        // Ver0.1403にて追加。酒場へ向かうかホテルの外へ向かうかどうかの選択。酒場へ行けるようになった後。
        if (Gvar.dungeon_number == 0 && Gvar.var_66 == 11 && Gvar.var_67 == 8 && Gvar.var_759 >= 1 && Gvar.var_3198 == 1) {
            Adap.mes("酒場");
            Adap.mes("ﾎﾃﾙの外");
        }
        // Ver0.1403にて追加。部屋へ戻るかテルの外へ向かうかどうかの選択。酒場へ行けるようになった後。
        if (Gvar.dungeon_number == 0 && Gvar.var_66 == 25 && Gvar.var_67 == 32 && Gvar.var_759 >= 1 && Gvar.go_to_hotel == 1) {
            Adap.mes("部屋");
            Adap.mes("ﾎﾃﾙの外");
        }
        if (Gvar.var_3192 == 1) {
            Adap.mes("買う");
            Adap.mes("やめる");
        }
        if (Gvar.var_3147 == 1 || Gvar.var_3136 == 1) {
            Adap.mes("ﾌﾞﾝ殴る");
            Adap.mes("放っとく");
        }
        if (Gvar.var_3163 >= 2) {
            Adap.mes("いただく");
            Adap.mes("断る");
        }
        Adap.color(255, 255, 255);
        Adap.font(Gvar.font_type, 16, 1);
        Adap.pos(Gvar.var_245, Gvar.var_246);
        Adap.mes(">");
        Adap.pos(Gvar.var_245 + 1, Gvar.var_246);
        Adap.mes(">");
        Adap.pos(Gvar.var_245 + 2, Gvar.var_246);
        Adap.mes(">");
        return;
}

export {func840}
