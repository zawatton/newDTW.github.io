/**
 * func0859 — func859 不明
 *
 * (org原典: newDTW_func8)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 旧 func804
async function func0859(this: any) {
    Adap.color(0, 0, 0);
    Adap.gmode(4, null, null, 100);
    Adap.pos(5, 35);
    Adap.gcopy(12, 0, 0, 332, Gvar.var_1881 - 30);
    Adap.pos(5, 273);
    Adap.gcopy(12, 0, 0, 332, 62);
    Adap.color(255, 255, 255);
    Adap.line(9, 37, 330, 37);
    Adap.line(9, Gvar.var_1881, 330, Gvar.var_1881);
    Adap.line(8, 38, 8, Gvar.var_1881 - 2);
    Adap.line(332, 38, 332, Gvar.var_1881 - 2);
    Adap.pset(9, 38);
    Adap.pset(331, 38);
    Adap.pset(9, Gvar.var_1881 - 1);
    Adap.pset(331, Gvar.var_1881 - 1);
    Adap.line(9, 275, 330, 275);
    Adap.line(9, 332, 330, 332);
    Adap.line(8, 276, 8, 330);
    Adap.line(332, 276, 332, 330);
    Adap.pset(9, 276);
    Adap.pset(331, 276);
    Adap.pset(9, 331);
    Adap.pset(331, 331);
    Gvar.var_1620 = 1;
    Gvar.var_230 = 45;
    for (let cnt1 = 0; cnt1 < Gvar.var_1013; ++cnt1) {
        Gvar.var_2010 = Gvar.var_991[0][Gvar.var_1620][0];
        Gvar.var_2011 = Gvar.var_991[0][Gvar.var_1620][3];
        Gvar.var_2012 = Gvar.var_991[0][Gvar.var_1620][4];
        Gvar.var_2013 = Gvar.var_991[0][Gvar.var_1620][5];
        Gvar.var_1922 = Gvar.var_991[0][Gvar.var_1620][6];
        Gvar.var_2014 = Gvar.var_991[0][Gvar.var_1620][7];
        Gvar.var_2015 = Gvar.var_991[0][Gvar.var_1620][11];
        Gvar.var_2016 = Gvar.var_991[0][Gvar.var_1620][12];
        Gvar.var_2017 = Gvar.var_991[0][Gvar.var_1620][13];
        Gvar.var_2018 = Gvar.var_991[0][Gvar.var_1620][14];
        Gvar.var_2019 = Gvar.var_991[0][Gvar.var_1620][16];
        Gvar.var_2020 = Gvar.var_991[0][Gvar.var_1620][19];
        Gvar.belongings_item_list = Gvar.var_2010;
        Gvar.disc_rarity = Gvar.var_2017;
        await Func.func492(); // アイテムリスト呼び出し
        if (Gvar.var_2010 > 0) {
            Adap.font(Gvar.font_type, Gvar.font_size = 16, Gvar.font_style = 1);
            Adap.color(255, 255, 255);
            Adap.pos(40, Gvar.var_230);
            if (Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 400) {
                Adap.color(0, 255, 0);
                Adap.mes(Gvar.item_name);
            }
            if (Gvar.belongings_item_list >= 400 && Gvar.belongings_item_list < 500) {
                Adap.color(225, 195, 145);
                Adap.mes("" + Gvar.item_name + "(" + Gvar.var_2011 + ")");
            }
            if (Gvar.belongings_item_list >= 500 && Gvar.belongings_item_list < 800) {
                Adap.color(255, 255, 255);
                Adap.mes(Gvar.item_name);
            }
            if (Gvar.belongings_item_list >= 800 && Gvar.belongings_item_list < 900) {
                Adap.color(0, 255, 255);
                Adap.mes("" + Gvar.item_name + "(" + Gvar.var_2014 + ")");
            }
            if (Gvar.belongings_item_list >= 900 && Gvar.belongings_item_list < 1000) {
                Adap.color(255, 255, 255);
                Adap.mes(Gvar.item_name);
            }
            if (Gvar.var_2015 == 1) {
                Gvar.var_1925 = 0;
                Adap.pos(260, Gvar.var_230);
                Adap.color(0, 255, 0);
                Gvar.var_482 = 0;
                Gvar.var_482 = (Gvar.var_2011 + Gvar.var_2012) * 50;
                Gvar.var_1925 = Gvar.buying_price + Gvar.var_482;
                Gvar.var_1925 = Gvar.var_1925 * Gvar.var_1036;
                Adap.mes(Gvar.var_1925);
            }
        }
        Gvar.var_1620 = Gvar.var_1620 + 1;
        Gvar.var_230 = Gvar.var_230 + 22;
    }
    Gvar.var_2023 = Gvar.var_991[0][Gvar.var_225][0];
    Gvar.var_2024 = Gvar.var_991[0][Gvar.var_225][5];
    Gvar.var_2025 = Gvar.var_991[0][Gvar.var_225][12];
    Gvar.var_2026 = Gvar.var_991[0][Gvar.var_225][13];
    Gvar.var_2027 = Gvar.var_991[0][Gvar.var_225][14];
    Gvar.var_2028 = Gvar.var_991[0][Gvar.var_225][15];
    Gvar.var_2029 = Gvar.var_991[0][Gvar.var_225][16];
    Gvar.belongings_item_list = Gvar.var_2023;
    Gvar.disc_rarity = Gvar.var_2026;
    await Func.func492(); // アイテムリスト呼び出し
    Adap.font(Gvar.font_type, 14, 1);
    Adap.pos(15, 283);
    Adap.color(255, 255, 255);
    if (Gvar.belongings_item_list < 100 || Gvar.belongings_item_list >= 400) {
        Adap.mes(Gvar.item_description1);
    }
    if (Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 400 && Gvar.var_2027 == 0) {
        Adap.mes("" + Gvar.item_description1);
    }
    if (Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 400 && Gvar.var_2027 == 1) {
        Adap.mes("" + Gvar.item_description1 + "  空き容量 " + Gvar.var_2024);
    }
    Adap.color(255, 255, 255);
    Adap.mes(Gvar.effects_message);
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
    Adap.mes(Gvar.item_ability_description);
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

export {func0859}
