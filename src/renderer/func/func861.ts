import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func861(this: any) {
        Adap.dbgprt(861);
        Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
        Adap.pos(Gvar.var_3264 * 40 + 10, Gvar.var_3265 * 40 + 10);
        Adap.gcopy(3, 240, 120, 40, 40);

        Adap.pos(Gvar.mousex - 3, Gvar.mousey - 3);
        if (Gvar.var_3266 == 0) {
            Adap.gcopy(5, 0, Gvar.var_3263 * 40, 40, 40);
        }
        if (Gvar.var_3266 == 1) {
            Adap.gcopy(5, 120, Gvar.var_3263 * 40, 40, 40);
        }
        if (Gvar.var_3266 == 2) {
            Adap.gcopy(5, 240, Gvar.var_3263 * 40, 40, 40);
        }
        if (Gvar.var_3266 == 3) {
            Adap.gcopy(5, 1520, Gvar.var_3263 * 40, 40, 40);
        }
        if (Gvar.var_3266 == 4) {
            Adap.gcopy(3, 280, 120, 40, 40);
        }
        if (Gvar.var_3266 == 5) {
            Adap.gcopy(5, 1200, Gvar.var_3263 * 40, 40, 40);
        }
        if (Gvar.var_3266 == 6) {
            Adap.gcopy(3, 40, 0, 40, 40);
        }
        if (Gvar.var_3266 == 7) {
            Gvar.var_1642 = 1;
            Gvar.var_83[0].Var0 = Gvar.var_3292[Gvar.var_3246];
            Gvar.var_83[0].Var5 = 2;
            Gvar.var_1641 = 0;
            Gvar.var_3312 = Gvar.var_3292[Gvar.var_3246];
            Gvar.var_1640 = 2;
            await Func.func567();
            Gvar.var_1642 = 0;
        }
        if (Gvar.var_3266 == 8) {
            Gvar.var_78[0].Var0 = Gvar.var_884[Gvar.var_873];
            Gvar.belongings_item_list = Gvar.var_78[0].Var0;
            Gvar.var_3313 = Gvar.belongings_item_list;
            await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
        }
        if (Gvar.var_3266 == 9) {
            Gvar.var_888 = Gvar.var_3300[Gvar.var_3249];
            Gvar.var_3314 = Gvar.var_888;
            await Func.func539();
        }
        if (Gvar.var_3266 == 0) {

            Adap.pos(Gvar.mousex + 3, Gvar.mousey + 20 + 10 - 5);
            Adap.font(Gvar.font_type, 11);
            Adap.color(255, 255, 255);
            if (Gvar.var_3270 < 10) {
                Adap.mes("部屋 " + Gvar.var_3270);
            }
            if (Gvar.var_3270 >= 10) {
                Adap.mes("部屋" + Gvar.var_3270);
            }
        }
        if (Gvar.var_3266 == 1) {

            Adap.pos(Gvar.mousex + 3, Gvar.mousey + 20 + 10 - 5);
            Adap.font(Gvar.font_type, 11);
            Adap.color(255, 255, 255);
            Adap.mes("通路");
        }
        if (Gvar.var_3266 == 2) {

            Adap.pos(Gvar.mousex + 3, Gvar.mousey + 20 + 10 - 5);
            Adap.font(Gvar.font_type, 11);
            Adap.color(255, 255, 255);
            Adap.mes("壁");
        }
        if (Gvar.var_3266 == 3) {

            Adap.pos(Gvar.mousex + 3, Gvar.mousey + 20 + 10 - 5);
            Adap.font(Gvar.font_type, 11);
            Adap.color(255, 255, 255);
            Adap.mes("水");
        }

        Adap.pos(Gvar.mousex - 3, Gvar.mousey - 3);
        if (Gvar.var_3266 >= 0 && Gvar.var_3266 <= 3) {
            Adap.gcopy(3, 160, 120, 40, 40);
        }
        return;
}

export {func861}
