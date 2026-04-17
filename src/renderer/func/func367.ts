/**
 * func367 — func367 不明
 *
 * (org原典: newDTW_func3)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import { tf } from '../i18n'

async function func367(this: any) {
        Adap.dbgprt(367);
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
        Gvar.var_1659 = 0;
        if (Gvar.var_802 >= 100 && Gvar.var_802 < 600) {
            Gvar.var_1659 = 1;
        }
        if (Gvar.var_802 == 700) {
            Gvar.var_1659 = 1;
        }
        if (Gvar.var_1659 == 1) {
            Adap.pos(285, 45);
            Adap.gcopy(9, 360, 0, 40, 20);
        }
        if (Gvar.var_802 == 100 || Gvar.var_802 == 108 || Gvar.var_802 == 110 || Gvar.var_802 == 113 || Gvar.var_802 == 118 || Gvar.var_802 == 123 || Gvar.var_802 == 398) {
            if (Gvar.var_862[Gvar.var_802][0] != 0) {
                Adap.pos(285, 70);
                Adap.gcopy(9, 360, 20, 40, 20);
            }
        }
        Adap.pos(20, 45);
        Gvar.belongings_item_list = Gvar.var_802;
        Gvar.disc_rarity = Gvar.var_1660;
        Gvar.var_1248 = Gvar.var_1660;
        await Func.func492(); // アイテムリスト呼び出し
        if (Gvar.var_802 < 100 || Gvar.var_802 >= 400) {
            await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
        }
        if (Gvar.var_802 >= 100 && Gvar.var_802 < 400) {
            if (Gvar.var_1661 == 0) {
                await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            if (Gvar.var_1661 == 1) {
                Gvar.item_icon_id = Gvar.var_802;
                await Func.func070(); // アイテムの表示用アイコン座標指定
                if (Gvar.var_1660 == 0) {
                    Gvar.buffer_id = 11; // Adap.buffer(11)は"img_stand0.gif"
                }
                if (Gvar.var_1660 == 1) {
                    Gvar.buffer_id = 1; // Adap.buffer(1)は"img_stand1.gif"
                }
                if (Gvar.var_1660 == 2) {
                    Gvar.buffer_id = 16;  // Adap.buffer(16)は"img_stand2.gif"
                }
                if (Gvar.var_1660 == 3) {
                    Gvar.buffer_id = 29; // Adap.buffer(29)は"img_stand3.gif"
                }
                Adap.pos(20, 50);
                // 各スタンドごとのアイコン表示を指定 Func.func070
                Adap.gcopy(Gvar.buffer_id, Gvar.buffer_x_axis, Gvar.buffer_y_axis, 40, 40);
            }
        }
        Adap.pos(70, 65);
        Adap.font(Gvar.font_type, Gvar.font_size = 16, Gvar.font_style = 1);
        if (Gvar.var_802 == 1) {
            Adap.color(255, 255, 255);
            Adap.mes(tf("{0}G", Gvar.var_1660));
        }
        if (Gvar.var_802 >= 100 && Gvar.var_802 < 400) {
            if (Gvar.var_1661 == 0) {
                Adap.color(0, 190, 0);
                Adap.mes(Gvar.item_name);
            }
            if (Gvar.var_1661 == 1) {
                Adap.color(0, 255, 0);
                if (Gvar.item_modified_value == 0 && Gvar.number_of_abilities <= 1) {
                    Adap.mes(Gvar.item_name);
                }
                if (Gvar.item_modified_value == 0 && Gvar.number_of_abilities > 1) {
                    Adap.mes(tf("{0} ★{1}", Gvar.item_name, Gvar.number_of_abilities));
                }
                if (Gvar.item_modified_value > 0 && Gvar.number_of_abilities <= 1) {
                    Adap.mes(tf("{0}+{1}", Gvar.item_name, Gvar.item_modified_value));
                }
                if (Gvar.item_modified_value > 0 && Gvar.number_of_abilities > 1) {
                    Adap.mes(tf("{0}+{1} ★{2}", Gvar.item_name, Gvar.item_modified_value, Gvar.number_of_abilities));
                }
            }
        }
        if (Gvar.var_802 >= 400 && Gvar.var_802 < 500) {
            Adap.color(225, 195, 145);
            Adap.mes(tf("{0}({1})", Gvar.item_name, Gvar.var_1662));
        }
        if (Gvar.var_802 >= 500 && Gvar.var_802 < 600) {
            Adap.color(255, 255, 255);
            if (Gvar.var_862[Gvar.var_802][0] == 0 && Gvar.dungeon_number != 0 && Gvar.dungeon_number != 1 && Gvar.dungeon_number != 99) {
                Adap.color(200, 200, 200);
            }
            Adap.mes(Gvar.item_name);
        }
        if (Gvar.var_802 >= 600 && Gvar.var_802 < 700) {
            Adap.color(255, 255, 255);
            Adap.mes(Gvar.item_name);
        }
        if (Gvar.var_802 >= 700 && Gvar.var_802 < 750) {
            Adap.color(255, 255, 255);
            Adap.mes(Gvar.item_name);
        }
        if (Gvar.var_802 >= 800 && Gvar.var_802 < 900) {
            Adap.color(0, 255, 255);
            if (Gvar.var_862[Gvar.var_802][0] == 0 && Gvar.dungeon_number != 0 && Gvar.dungeon_number != 1 && Gvar.dungeon_number != 99) {
                Adap.color(0, 170, 170);
            }
            Adap.mes(tf("{0}({1})", Gvar.item_name, Gvar.var_1663));
        }
        if (Gvar.var_802 >= 750 && Gvar.var_802 < 800) {
            Adap.color(255, 255, 255);
            Adap.mes(Gvar.item_name);
        }
        if (Gvar.var_802 >= 900 && Gvar.var_802 < 1000) {
            Adap.color(255, 255, 255);
            Adap.mes(Gvar.item_name);
        }
        if (Gvar.var_805 == 1 && Gvar.var_1661 == 1) {
            Adap.pos(62, 73);
            Adap.gmode(2, null, null, null);
            Adap.gcopy(8, 40, 50, 10, 10);
        }
        if (Gvar.var_805 == 2 && Gvar.var_1661 == 1) {
            Adap.pos(61, 74);
            Adap.gmode(2, null, null, null);
            Adap.gcopy(8, 40, 80, 10, 10);
        }
        Adap.color(255, 255, 255);
        Adap.font(Gvar.font_type, Gvar.font_size = 14, Gvar.font_style = 1);
        Adap.pos(30, 100);

        if (Gvar.var_802 < 100 || Gvar.var_802 >= 400) {
            Adap.mes(Gvar.item_description1);
        }
        if (Gvar.var_802 >= 100 && Gvar.var_802 < 400 && Gvar.var_862[Gvar.var_802][0] == 1) {
            if (Gvar.var_1661 == 0) {
                Adap.mes(tf("{0}", Gvar.item_description1));
            }
            if (Gvar.var_1661 == 1) {
                Adap.mes(tf("{0}  空き容量 {1}", Gvar.item_description1, Gvar.free_space_value));
            }
        }
        // 装備、射撃disc
        if (Gvar.var_802 >= 100 && Gvar.var_802 < 400 && Gvar.var_862[Gvar.var_802][0] == 0) {
            Adap.mes(tf("{0}", Gvar.item_description1));
        }
        Adap.pos(30, 120);
        Adap.mes(Gvar.effects_message);

        if (Gvar.var_802 < 100 || Gvar.var_802 >= 400) {
            Adap.pos(30, 140);
            Adap.color(255, 255, 255);
            Adap.mes(Gvar.item_ability_description);
        }

        if (Gvar.var_802 >= 100 && Gvar.var_802 < 400 && Gvar.var_862[Gvar.var_802][0] != 0) {
            Gvar.var_1664 = 0;
            // No = 5 なので、鉄獄(鉄の牢獄)
            if (Gvar.dungeon_number == 5 && Gvar.var_1661 == 0 && Gvar.var_1660 >= 1) {
                Gvar.var_1664 = 1;
            }
            Gvar.track_number = 1;
            for (let cnt2 = 0; cnt2 < Gvar.var_810 + Gvar.free_space_value; ++cnt2) {
                Adap.pos(30, Gvar.track_number * 20 + 120);
                Adap.color(255, 255, 255);
                Adap.font(Gvar.font_type, 12, 1);
                Adap.mes(tf("Track{0}:", Gvar.track_number));
                Gvar.track_number = Gvar.track_number + 1;
            }
            Gvar.track_number = 1;
            Gvar.var_1665 = 0;
            for (let cnt2 = 0; cnt2 < Gvar.var_810 + Gvar.free_space_value; ++cnt2) {
                Adap.pos(30 + 50, Gvar.track_number * 20 + 120);
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
                if (Gvar.var_813[Gvar.track_number] == "こわれるぞ。") {
                    Adap.color(255, 255, 255);
                    if (Gvar.var_1666 >= 10 && Gvar.var_1666 <= 15) {
                        Adap.color(255, 150, 150);
                    }
                    if (Gvar.var_1666 >= 16 && Gvar.var_1666 <= 21) {
                        Adap.color(255, 100, 100);
                    }
                    if (Gvar.var_1666 >= 22 && Gvar.var_1666 <= 24) {
                        Adap.color(255, 50, 50);
                    }
                    if (Gvar.var_1666 >= 25 && Gvar.var_1666 <= 27) {
                        Adap.color(255, 0, 0);
                    }
                    if (Gvar.var_1666 >= 28 && Gvar.var_1666 <= 30) {
                        Adap.color(200, 0, 0);
                    }
                    if (Gvar.var_1666 >= 31) {
                        Adap.color(150, 0, 0);
                    }
                }
        
                Adap.font("メイリオ", 14, 1);
                if (Gvar.var_1664 == 0) {
                    if (Gvar.var_813[Gvar.track_number] != "") {
                        Adap.mes(tf("{0}", Gvar.var_813[Gvar.track_number]));
                    }
                    if (Gvar.var_813[Gvar.track_number] == "") {
                        Adap.mes("空き");
                    }
                }
                if (Gvar.var_1664 == 1) {
                    if (Gvar.track_number == 1) {
                        Adap.mes(tf("{0}", Gvar.var_813[Gvar.track_number]));
                    }
                    if (Gvar.track_number != 1) {
                        Adap.color(255, 255, 255);
                        Adap.mes("？？？？？？？？？");
                    }
                }
                Gvar.track_number = Gvar.track_number + 1;
            }
        }
        return;
}

export {func367}
