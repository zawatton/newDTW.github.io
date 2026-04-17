import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import { tf } from '../i18n'

async function func170(this: any) {
        Adap.dbgprt(170);
        Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
        Adap.pos(0, 0);
        if (Gvar.var_767 == 0) {
            Adap.gcopy(17, 360, 0, 340, 340);
        }
        if (Gvar.var_767 == 1) {
            if (Gvar.var_791 == 0) {
                Adap.gcopy(17, 360, 0, 340, 340);
            }
            if (Gvar.var_791 == 1) {
                Adap.gcopy(17, 360, 720, 340, 340);
            }
            if (Gvar.var_791 == 2) {
                Adap.gcopy(17, 720, 0, 340, 340);
            }
        }
        Adap.gmode(4, null, null, 100);
        Adap.pos(0, 0);
        Adap.gcopy(12, 0, 0, 340, 340);
        Adap.color(255, 255, 255);
        Adap.line(9, 37, 330, 37);
        Adap.line(9, Gvar.var_801, 330, Gvar.var_801);
        Adap.line(8, 38, 8, Gvar.var_801 - 2);
        Adap.line(332, 38, 332, Gvar.var_801 - 2);
        Adap.pset(9, 38);
        Adap.pset(331, 38);
        Adap.pset(9, Gvar.var_801 - 1);
        Adap.pset(331, Gvar.var_801 - 1);
        Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
        Adap.pos(285, 45);
        Adap.gcopy(9, 360, 0, 40, 20);
        // 攻撃が特殊disc??
        if (Gvar.var_802 == 100 || Gvar.var_802 == 108 || Gvar.var_802 == 110 || Gvar.var_802 == 113 || Gvar.var_802 == 118 || Gvar.var_802 == 123 || Gvar.var_802 == 398) {
            Adap.pos(285, 70);
            Adap.gcopy(9, 360, 20, 40, 20);
        }
        Gvar.belongings_item_list = Gvar.var_802;
        await Func.func492(); // アイテムリスト呼び出し
        Gvar.item_icon_id = Gvar.var_802;
        await Func.func070(); // アイテムの表示用アイコン座標指定
        if (Gvar.disc_rarity == 0) {
            Gvar.buffer_id = 11;
        }
        if (Gvar.disc_rarity == 1) {
            Gvar.buffer_id = 1;
        }
        if (Gvar.disc_rarity == 2) {
            Gvar.buffer_id = 16;
        }
        if (Gvar.disc_rarity == 3) {
            Gvar.buffer_id = 29;
        }
        Adap.pos(20, 50);
        Adap.gcopy(Gvar.buffer_id, Gvar.buffer_x_axis, Gvar.buffer_y_axis, 40, 40);
        Adap.pos(70, 65);
        Adap.font(Gvar.font_type, Gvar.font_size = 16, Gvar.font_style = 1);
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
        if (Gvar.var_805 == 1) {
            Adap.pos(62, 73);
            Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
            // Adap.buffer(8)は"img1.gif"。X座標40、Y座標50から切り取り長さ X方向10、Y方向10
            // 絵:ドクロマーク          
            Adap.gcopy(8, 40, 50, 10, 10);
        }
        if (Gvar.var_805 == 2) {
            Adap.pos(61, 74);
            Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
            // Adap.buffer(8)は"img1.gif"。X座標40、Y座標80から切り取り長さ X方向10、Y方向10
            // 絵:星マーク   
            Adap.gcopy(8, 40, 80, 10, 10);
        }
        Adap.color(255, 255, 255);
        Adap.font(Gvar.font_type, 14, 1);
        Adap.pos(30, 100);
        Adap.mes(tf("{0}  空き容量 {1}", Gvar.item_description1, Gvar.free_space_value));
        Adap.pos(30, 120);
        Adap.mes(Gvar.effects_message);
        Gvar.track_number = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_810 + Gvar.free_space_value; ++cnt1) {
            Adap.pos(30, Gvar.track_number * 20 + 120);
            Adap.color(255, 255, 255);
            Adap.font(Gvar.font_type, 12, 1);
            Adap.mes(tf("Track{0}:", Gvar.track_number));
            Gvar.track_number = Gvar.track_number + 1;
        } 
        Gvar.track_number = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_810 + Gvar.free_space_value; ++cnt1) {
            
            Adap.pos(80, Gvar.track_number * 20 + 120);
            
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
            Adap.font("メイリオ", 14, 1);
            if (Gvar.var_813[Gvar.track_number] != "") {
                Adap.mes(tf("{0}", Gvar.var_813[Gvar.track_number]));
            }
            if (Gvar.var_813[Gvar.track_number] == "") {
                Adap.mes("空き");
            }
            Gvar.track_number = Gvar.track_number + 1;
        }
        return;
}

export {func170}
