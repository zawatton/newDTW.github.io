import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'


async function func853(this: any) {
        Adap.dbgprt(853);
        Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
        Adap.font(Gvar.font_type, 12);
        Adap.color(236, 233, 216);
        Adap.boxf(680, 0, 680, 680);
        if (Gvar.var_3279 <= Gvar.var_31 && Gvar.var_3280 <= Gvar.var_32) {
            Gvar.var_3295 = Gvar.var_3279 - 5;
            Gvar.var_3296 = Gvar.var_3280 - 5;
            Gvar.var_3297 = "x:" + Gvar.var_3295;
            Gvar.var_3298 = "y:" + Gvar.var_3296;
            Gvar.var_3272 = "";
            if (Gvar.var_82[Gvar.var_3279][Gvar.var_3280] >= 1) {
                Gvar.var_2501 = Gvar.var_82[Gvar.var_3279][Gvar.var_3280];
                Gvar.enemy_list = Gvar.var_83[Gvar.var_2501].Var0;
                await Func.func626();
                Gvar.var_3299 = Gvar.enemy_name;
                Gvar.var_3272 = Gvar.var_3272 + "  " + Gvar.var_3299;
            }
            if (Gvar.var_65[Gvar.var_3279][Gvar.var_3280] == 1) {
                Gvar.var_3272 = Gvar.var_3272 + "  " + "開始地点";
            }
            if (Gvar.var_77[Gvar.var_3279][Gvar.var_3280] >= 1) {
                Gvar.var_2501 = Gvar.var_77[Gvar.var_3279][Gvar.var_3280];
                Gvar.belongings_item_list = Gvar.var_78[Gvar.var_2501].Var0;
                Gvar.var_2176 = 1;
                await Func.func492(); // アイテムリスト呼び出し
                Gvar.var_2176 = 0;
                Gvar.var_3299 = Gvar.item_name;
                if (Gvar.var_78[Gvar.var_2501].Var4 >= 1 && Gvar.var_78[Gvar.var_2501].Var4 <= 10) {
                    Gvar.var_3299 = Gvar.var_3299 + "" + "+" + Gvar.var_78[Gvar.var_2501].Var4;
                }
                if (Gvar.var_78[Gvar.var_2501].Var4 == 11 || Gvar.var_78[Gvar.var_2501].Var12 == 1) {
                    Gvar.var_3299 = Gvar.var_3299 + "" + "[呪]";
                }
                if (Gvar.var_78[Gvar.var_2501].Var3 >= 1) {
                    Gvar.var_3299 = Gvar.var_3299 + "" + "(" + Gvar.var_78[Gvar.var_2501].Var3 + ")";
                }
                if (Gvar.var_78[Gvar.var_2501].Var7 >= 1) {
                    Gvar.var_3299 = Gvar.var_3299 + "" + "(" + Gvar.var_78[Gvar.var_2501].Var7 + ")";
                }
                if (Gvar.var_78[Gvar.var_2501].Var13 >= 1) {
                    Gvar.var_3299 = Gvar.var_3299 + " " + Gvar.var_78[Gvar.var_2501].Var13 + "G";
                }
                Gvar.var_3272 = Gvar.var_3272 + "  " + Gvar.var_3299;
            }
            if (Gvar.var_80[Gvar.var_3279][Gvar.var_3280] >= 1) {
                Gvar.var_2501 = Gvar.var_80[Gvar.var_3279][Gvar.var_3280];
                Gvar.var_888 = Gvar.var_81[Gvar.var_2501][0];
                await Func.func554();
                Gvar.var_3299 = Gvar.var_889;
                Gvar.var_3272 = Gvar.var_3272 + "  " + Gvar.var_3299;
            }
            if (Gvar.var_73[Gvar.var_3279][Gvar.var_3280] == 1) {
                Gvar.var_3272 = Gvar.var_3272 + "  " + "階段";
            }
        }
        Adap.color(0, 0, 0);
        Adap.boxf(Gvar.var_3239 + 10, Gvar.var_3240 + Gvar.var_3242 - 20, Gvar.var_3239 + 80 + 10, Gvar.var_3240 + Gvar.var_3242 - 5);
        Adap.color(255, 255, 0);
        Adap.pos(Gvar.var_3239 + 20, Gvar.var_3240 + Gvar.var_3242 - 18);
        Adap.mes("" + Gvar.var_3297);
        Adap.pos(Gvar.var_3239 + 20 + 35, Gvar.var_3240 + Gvar.var_3242 - 18);
        Adap.mes("" + Gvar.var_3298);
        Adap.color(0, 0, 0);
        Adap.boxf(350, 10, 670, 30);
        Adap.color(255, 255, 255);
        Adap.pos(355, 15);
        Adap.mes("" + Gvar.var_3272);
        Adap.color(80, 80, 80);
        Adap.boxf(Gvar.var_3211, Gvar.var_3212, Gvar.var_3211 + 40, Gvar.var_3212 + 40);
        Adap.boxf(Gvar.var_3213, Gvar.var_3214, Gvar.var_3213 + 40, Gvar.var_3214 + 40);
        Adap.boxf(Gvar.var_3215, Gvar.var_3216, Gvar.var_3215 + 40, Gvar.var_3216 + 40);
        Adap.boxf(Gvar.var_3217, Gvar.var_3218, Gvar.var_3217 + 40, Gvar.var_3218 + 40);
        Adap.boxf(Gvar.var_3219, Gvar.var_3220, Gvar.var_3219 + 40, Gvar.var_3220 + 40);
        Adap.boxf(Gvar.var_3221, Gvar.var_3222, Gvar.var_3221 + 40, Gvar.var_3222 + 40);
        Adap.boxf(Gvar.var_3223, Gvar.var_3224, Gvar.var_3223 + 40, Gvar.var_3224 + 40);
        Adap.boxf(Gvar.var_3229, Gvar.var_3230, Gvar.var_3229 + 40, Gvar.var_3230 + 40);
        Adap.boxf(Gvar.var_3225, Gvar.var_3226, Gvar.var_3225 + 40, Gvar.var_3226 + 40);
        Adap.boxf(Gvar.var_3227, Gvar.var_3228, Gvar.var_3227 + 40, Gvar.var_3228 + 40);
        Adap.pos(Gvar.var_3211, Gvar.var_3212);
        Adap.gcopy(5, 0, Gvar.var_3263 * 40, 40, 40);
        Adap.pos(Gvar.var_3213, Gvar.var_3214);
        Adap.gcopy(5, 120, Gvar.var_3263 * 40, 40, 40);
        Adap.pos(Gvar.var_3215, Gvar.var_3216);
        Adap.gcopy(5, 240, Gvar.var_3263 * 40, 40, 40);
        Adap.pos(Gvar.var_3217, Gvar.var_3218);
        Adap.gcopy(5, 1520, Gvar.var_3263 * 40, 40, 40);
        Adap.pos(Gvar.var_3219, Gvar.var_3220);
        Adap.gcopy(3, 280, 120, 40, 40);
        Adap.pos(Gvar.var_3221, Gvar.var_3222);
        Adap.gcopy(5, 1200, Gvar.var_3263 * 40, 40, 40);
        Adap.pos(Gvar.var_3223, Gvar.var_3224);
        Adap.gcopy(3, 40, 0, 40, 40);
        Adap.pos(Gvar.var_3229, Gvar.var_3230);
        Gvar.var_1642 = 1;
        Gvar.var_83[0].Var0 = Gvar.var_3292[Gvar.var_3246];
        Gvar.var_83[0].Var5 = 2;
        Gvar.var_1641 = 0;
        Gvar.var_1640 = 2;
        await Func.func567();
        Gvar.var_1642 = 0;
        Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
        Adap.pos(Gvar.var_3225, Gvar.var_3226);
        Gvar.var_78[0].Var0 = Gvar.var_884[Gvar.var_873];
        Gvar.belongings_item_list = Gvar.var_78[0].Var0;
        await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
        Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
        Adap.pos(Gvar.var_3227, Gvar.var_3228);
        Gvar.var_888 = Gvar.var_3300[Gvar.var_3249];
        await Func.func539();
        Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
        Adap.font(Gvar.font_type, 11);
        Adap.color(255, 255, 255);
        Gvar.var_3301 = Gvar.var_3245;
        if (Gvar.var_3301 == 0) {
            Gvar.var_3301 = 1;
        }
        if (Gvar.var_3301 < 10) {
            Adap.pos(Gvar.var_3211 + 3, Gvar.var_3212 + 25);
            Adap.mes("部屋" + " " + Gvar.var_3301);
        }
        if (Gvar.var_3301 >= 10) {
            Adap.pos(Gvar.var_3211 + 3, Gvar.var_3212 + 25);
            Adap.mes("部屋" + "" + Gvar.var_3301);
        }
        Adap.pos(Gvar.var_3213 + 3, Gvar.var_3214 + 25);
        Adap.mes("通路");
        Adap.pos(Gvar.var_3215 + 3, Gvar.var_3216 + 25);
        Adap.mes("壁");
        Adap.pos(Gvar.var_3211, Gvar.var_3212);
        if (Gvar.var_3266 == 0) {
            Adap.gcopy(3, 240, 120, 40, 40);
        }
        else {
            Adap.gcopy(3, 160, 120, 40, 40);
        }
        Adap.pos(Gvar.var_3213, Gvar.var_3214);
        if (Gvar.var_3266 == 1) {
            Adap.gcopy(3, 240, 120, 40, 40);
        }
        else {
            Adap.gcopy(3, 160, 120, 40, 40);
        }
        Adap.pos(Gvar.var_3215, Gvar.var_3216);
        if (Gvar.var_3266 == 2) {
            Adap.gcopy(3, 240, 120, 40, 40);
        }
        else {
            Adap.gcopy(3, 160, 120, 40, 40);
        }
        Adap.pos(Gvar.var_3217, Gvar.var_3218);
        if (Gvar.var_3266 == 3) {
            Adap.gcopy(3, 240, 120, 40, 40);
        }
        else {
            Adap.gcopy(3, 160, 120, 40, 40);
        }
        Adap.pos(Gvar.var_3219, Gvar.var_3220);
        if (Gvar.var_3266 == 4) {
            Adap.gcopy(3, 240, 120, 40, 40);
        }
        else {
            Adap.gcopy(3, 160, 120, 40, 40);
        }
        Adap.pos(Gvar.var_3221, Gvar.var_3222);
        if (Gvar.var_3266 == 5) {
            Adap.gcopy(3, 240, 120, 40, 40);
        }
        else {
            Adap.gcopy(3, 160, 120, 40, 40);
        }
        Adap.pos(Gvar.var_3223, Gvar.var_3224);
        if (Gvar.var_3266 == 6) {
            Adap.gcopy(3, 240, 120, 40, 40);
        }
        else {
            Adap.gcopy(3, 160, 120, 40, 40);
        }
        Adap.pos(Gvar.var_3229, Gvar.var_3230);
        if (Gvar.var_3266 == 7) {
            Adap.gcopy(3, 240, 120, 40, 40);
        }
        else {
            Adap.gcopy(3, 160, 120, 40, 40);
        }
        Adap.pos(Gvar.var_3225, Gvar.var_3226);
        if (Gvar.var_3266 == 8) {
            Adap.gcopy(3, 240, 120, 40, 40);
        }
        else {
            Adap.gcopy(3, 160, 120, 40, 40);
        }
        Adap.pos(Gvar.var_3227, Gvar.var_3228);
        if (Gvar.var_3266 == 9) {
            Adap.gcopy(3, 240, 120, 40, 40);
        }
        else {
            Adap.gcopy(3, 160, 120, 40, 40);
        }
        Adap.color(255, 255, 255);
        Adap.line(Gvar.var_3211 - 5, Gvar.var_3212 - 10, 673, Gvar.var_3212 - 10);
        Adap.line(Gvar.var_3211 - 5, Gvar.var_3212 - 10, Gvar.var_3211 - 5, Gvar.var_3216 + 48);
        Adap.color(100, 100, 100);
        Adap.line(Gvar.var_3211 - 5, Gvar.var_3216 + 48, 673, Gvar.var_3216 + 48);
        Adap.line(Gvar.var_3211 - 5, Gvar.var_3216 + 48 + 1, 673, Gvar.var_3216 + 48 + 1);
        Adap.line(673, Gvar.var_3212 - 10, 673, Gvar.var_3216 + 48);
        Adap.line(673 - 1, Gvar.var_3212 - 10, 673 - 1, Gvar.var_3216 + 48);
        Adap.color(0, 0, 0);
        Adap.boxf(0, 0, 680, 10);
        Adap.boxf(0, 330, 680, 680);
        Adap.boxf(0, 0, 10, 680);
        Adap.boxf(330, 0, 680, 680);
        await Func.func854();
        return;
}

export {func853}
