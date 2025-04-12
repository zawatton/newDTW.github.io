import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func528(this: any) {
        Adap.dbgprt(528);
        Adap.color(0, 0, 0);

        Adap.gmode(4, null, null, 100);
        Adap.pos(5, 35);
        Adap.gcopy(12, 0, 0, 332, Gvar.var_801 - 30);
        Adap.color(255, 255, 255);
        Adap.line(9, 37, 330, 37);
        Adap.line(9, Gvar.var_801, 330, Gvar.var_801);
        Adap.line(8, 38, 8, Gvar.var_801 - 2);
        Adap.line(332, 38, 332, Gvar.var_801 - 2);
        Adap.pset(9, 38);
        Adap.pset(331, 38);
        Adap.pset(9, Gvar.var_801 - 1);
        Adap.pset(331, Gvar.var_801 - 1);
        Adap.gmode(2, null, null, null);
        Adap.pos(285, 45);
        Adap.gcopy(9, 360, 0, 40, 20);
        Adap.pos(20, 45);
        Gvar.belongings_item_list = Gvar.var_1289;
        await Func.func492(); // アイテムリスト呼び出し
        Adap.pos(70, 55);

        Adap.font(Gvar.font_type, Gvar.font_size = 16, Gvar.font_style = 1);
        Adap.color(0, 255, 0);
        if (Gvar.item_modified_value == 0) {
            Adap.mes("" + Gvar.item_name + " ★" + Gvar.number_of_abilities);
        }
        if (Gvar.item_modified_value > 0) {
            Adap.mes("" + Gvar.item_name + "+" + Gvar.item_modified_value + " ★" + Gvar.number_of_abilities);
        }
        Adap.pos(30, 90);

        Adap.font(Gvar.font_type, 14, 1);
        Adap.color(255, 255, 255);
        Adap.mes("消去する能力を選んでください");
        Adap.pos(30, 110);

        Adap.font(Gvar.font_type, 12, 1);
        Adap.color(200, 200, 200);
        Adap.mes("※最初から備わっている能力は消去できません");
        Gvar.track_number = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_810 + Gvar.free_space_value; ++cnt1) {
            Adap.pos(35, Gvar.track_number * 20 + 120);
            Adap.color(255, 255, 255);
            if (Gvar.track_number == 1) {
                Adap.color(180, 180, 180);
            }
    
            Adap.font(Gvar.font_type, 12, 1);
            Adap.mes("" + Gvar.track_number + "：");
            Gvar.track_number = Gvar.track_number + 1;
        }
        Gvar.track_number = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_810 + Gvar.free_space_value; ++cnt1) {
            Adap.pos(53, Gvar.track_number * 20 + 120);
            Gvar.belongings_item_list = Gvar.var_811[Gvar.track_number];
            await Func.func492(); // アイテムリスト呼び出し
            Adap.color(255, 255, 255);
            if (Gvar.var_812 == 1) {
                Adap.color(255, 255, 0);
            }
            if (Gvar.var_812 == 2) {
                Adap.color(255, 180, 90);
            }
            if (Gvar.var_812 == 3) {
                Adap.color(0, 255, 0);
            }
            if (Gvar.var_812 == 4) {
                Adap.color(240, 0, 240);
            }
            if (Gvar.track_number == 1) {
                Adap.color(180, 180, 180);
            }
    
            Adap.font("メイリオ", 14, 1);
            if (Gvar.var_813[Gvar.track_number] != "") {
                Adap.mes("" + Gvar.var_813[Gvar.track_number]);
            }
            if (Gvar.var_813[Gvar.track_number] == "") {
                Adap.mes("空き");
            }
            Gvar.track_number = Gvar.track_number + 1;
        }
        Adap.color(255, 255, 255);

        Adap.font(Gvar.font_type, Gvar.font_size = 16, Gvar.font_style = 1);
        Adap.pos(15, Gvar.var_2374);
        Adap.mes(">");
        Adap.pos(16, Gvar.var_2374);
        Adap.mes(">");
        Adap.pos(17, Gvar.var_2374);
        Adap.mes(">");
        return;
}

export {func528}
