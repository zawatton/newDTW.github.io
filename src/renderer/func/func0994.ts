import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import { tf } from '../i18n'

// 旧 func935
async function func0994(this: any) {
    Adap.color(0, 0, 0);
    Adap.gmode(4, null, null, 100);
    Adap.pos(5, 35);
    Adap.gcopy(12, 0, 0, 332, Gvar.var_2326 - 30);
    Adap.color(255, 255, 255);
    Adap.line(9, 37, 330, 37);
    Adap.line(9, Gvar.var_2326, 330, Gvar.var_2326);
    Adap.line(8, 38, 8, Gvar.var_2326 - 2);
    Adap.line(332, 38, 332, Gvar.var_2326 - 2);
    Adap.pset(9, 38);
    Adap.pset(331, 38);
    Adap.pset(9, Gvar.var_2326 - 1);
    Adap.pset(331, Gvar.var_2326 - 1);
    Gvar.var_230 = 45;
    for (let cnt1 = 0; cnt1 < Gvar.var_2324; ++cnt1) {
        Adap.font(Gvar.font_type, Gvar.font_size = 16, Gvar.font_style = 1);
        Adap.pos(40, Gvar.var_230);
        Adap.color(255, 255, 255);
        Gvar.var_3875 = 0;
        Gvar.var_3876 = Gvar.var_1069[cnt1][10];
        if (Gvar.current_floor < Gvar.var_3876) {
            Gvar.var_3875 = Gvar.var_3876 - Gvar.current_floor;
        }
        if (Gvar.current_floor > Gvar.var_3876) {
            Gvar.var_3875 = Gvar.current_floor - Gvar.var_3876;
        }
        if (Gvar.current_floor == Gvar.var_3876) {
            Gvar.var_3875 = 0;
        }
        // No = 0 なので、拠点(ホテル、亀、)
        if (Gvar.dungeon_number == 0) {
            Adap.color(255, 0, 0);
        }
        if (Gvar.dungeon_number != Gvar.var_1069[cnt1][12]) {
            Adap.color(255, 0, 0);
        }
        if (Gvar.var_3875 >= 5) {
            Adap.color(255, 0, 0);
        }
        if (Gvar.var_3875 >= 2 && Gvar.var_3875 <= 4) {
            Adap.color(255, 255, 0);
        }
        if (Gvar.var_3875 == 1) {
            Adap.color(0, 255, 255);
        }
        if (Gvar.var_3875 == 0) {
            Adap.color(0, 255, 255);
        }
        if (Gvar.var_2321[cnt1] == Gvar.var_40) {
            Adap.color(150, 150, 150);
        }
        if (Gvar.var_2321[cnt1] == "(no entry)") {
            Adap.color(150, 150, 150);
        }
        Adap.mes(tf("{0}", Gvar.var_2321[cnt1]));
        Gvar.var_230 = Gvar.var_230 + 22;
    }
    Adap.color(255, 255, 255);

    Adap.font(Gvar.font_type, Gvar.font_size = 16, Gvar.font_style = 1);
    Adap.pos(15, Gvar.Y_axis_item_position);
    Adap.mes(">");
    Adap.pos(16, Gvar.Y_axis_item_position);
    Adap.mes(">");
    Adap.pos(17, Gvar.Y_axis_item_position);
    Adap.mes(">");
    return;
}

export {func0994}
