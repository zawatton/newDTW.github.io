import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'
import { tf } from '../i18n'

// 旧 func853
async function func0912(this: any) {
    Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
    Adap.font(Gvar.font_type, 12);
    Adap.color(236, 233, 216);
    Adap.boxf(680, 0, 680, 680);
    if (Gvar.var_3578 <= Gvar.var_31 && Gvar.var_3579 <= Gvar.var_32) {
        Gvar.var_3594 = Gvar.var_3578 - 5;
        Gvar.var_3595 = Gvar.var_3579 - 5;
        Gvar.var_3596 = "x:" + Gvar.var_3594;
        Gvar.var_3597 = "y:" + Gvar.var_3595;
        Gvar.var_3571 = "";
        if (Gvar.var_82[Gvar.var_3578][Gvar.var_3579] >= 1) {
            Gvar.var_2501 = Gvar.var_82[Gvar.var_3578][Gvar.var_3579];
            Gvar.enemy_list = Gvar.var_83[Gvar.var_2501].Var0;
            await Func.func626();
            Gvar.var_3598 = Gvar.enemy_name;
            Gvar.var_3571 = Gvar.var_3571 + "  " + Gvar.var_3598;
        }
        if (Gvar.var_65[Gvar.var_3578][Gvar.var_3579] == 1) {
            Gvar.var_3571 = Gvar.var_3571 + "  " + "開始地点";
        }
        if (Gvar.var_77[Gvar.var_3578][Gvar.var_3579] >= 1) {
            Gvar.var_2501 = Gvar.var_77[Gvar.var_3578][Gvar.var_3579];
            Gvar.belongings_item_list = Gvar.var_78[Gvar.var_2501].Var0;
            Gvar.var_2176 = 1;
            await Func.func492(); // アイテムリスト呼び出し
            Gvar.var_2176 = 0;
            Gvar.var_3598 = Gvar.item_name;
            if (Gvar.var_78[Gvar.var_2501].Var4 >= 1 && Gvar.var_78[Gvar.var_2501].Var4 <= 10) {
                Gvar.var_3598 = Gvar.var_3598 + "" + "+" + Gvar.var_78[Gvar.var_2501].Var4;
            }
            if (Gvar.var_78[Gvar.var_2501].Var4 == 11 || Gvar.var_78[Gvar.var_2501].Var12 == 1) {
                Gvar.var_3598 = Gvar.var_3598 + "" + "[呪]";
            }
            if (Gvar.var_78[Gvar.var_2501].Var3 >= 1) {
                Gvar.var_3598 = Gvar.var_3598 + "" + "(" + Gvar.var_78[Gvar.var_2501].Var3 + ")";
            }
            if (Gvar.var_78[Gvar.var_2501].Var7 >= 1) {
                Gvar.var_3598 = Gvar.var_3598 + "" + "(" + Gvar.var_78[Gvar.var_2501].Var7 + ")";
            }
            if (Gvar.var_78[Gvar.var_2501].Var13 >= 1) {
                Gvar.var_3598 = Gvar.var_3598 + " " + Gvar.var_78[Gvar.var_2501].Var13 + "G";
            }
            Gvar.var_3571 = Gvar.var_3571 + "  " + Gvar.var_3598;
        }
        if (Gvar.var_80[Gvar.var_3578][Gvar.var_3579] >= 1) {
            Gvar.var_2501 = Gvar.var_80[Gvar.var_3578][Gvar.var_3579];
            Gvar.var_888 = Gvar.var_81[Gvar.var_2501][0];
            await Func.func554();
            Gvar.var_3598 = Gvar.var_889;
            Gvar.var_3571 = Gvar.var_3571 + "  " + Gvar.var_3598;
        }
        if (Gvar.var_73[Gvar.var_3578][Gvar.var_3579] == 1) {
            Gvar.var_3571 = Gvar.var_3571 + "  " + "階段";
        }
    }
    Adap.color(0, 0, 0);
    Adap.boxf(Gvar.var_3538 + 10, Gvar.var_3539 + Gvar.var_3541 - 20, Gvar.var_3538 + 80 + 10, Gvar.var_3539 + Gvar.var_3541 - 5);
    Adap.color(255, 255, 0);
    Adap.pos(Gvar.var_3538 + 20, Gvar.var_3539 + Gvar.var_3541 - 18);
    Adap.mes(tf("{0}", Gvar.var_3596));
    Adap.pos(Gvar.var_3538 + 20 + 35, Gvar.var_3539 + Gvar.var_3541 - 18);
    Adap.mes(tf("{0}", Gvar.var_3597));
    Adap.color(0, 0, 0);
    Adap.boxf(350, 10, 670, 30);
    Adap.color(255, 255, 255);
    Adap.pos(355, 15);
    Adap.mes(tf("{0}", Gvar.var_3571));
    Adap.color(80, 80, 80);
    Adap.boxf(Gvar.var_3510, Gvar.var_3511, Gvar.var_3510 + 40, Gvar.var_3511 + 40);
    Adap.boxf(Gvar.var_3512, Gvar.var_3513, Gvar.var_3512 + 40, Gvar.var_3513 + 40);
    Adap.boxf(Gvar.var_3514, Gvar.var_3515, Gvar.var_3514 + 40, Gvar.var_3515 + 40);
    Adap.boxf(Gvar.var_3516, Gvar.var_3517, Gvar.var_3516 + 40, Gvar.var_3517 + 40);
    Adap.boxf(Gvar.var_3518, Gvar.var_3519, Gvar.var_3518 + 40, Gvar.var_3519 + 40);
    Adap.boxf(Gvar.var_3520, Gvar.var_3521, Gvar.var_3520 + 40, Gvar.var_3521 + 40);
    Adap.boxf(Gvar.var_3522, Gvar.var_3523, Gvar.var_3522 + 40, Gvar.var_3523 + 40);
    Adap.boxf(Gvar.var_3528, Gvar.var_3529, Gvar.var_3528 + 40, Gvar.var_3529 + 40);
    Adap.boxf(Gvar.var_3524, Gvar.var_3525, Gvar.var_3524 + 40, Gvar.var_3525 + 40);
    Adap.boxf(Gvar.var_3526, Gvar.var_3527, Gvar.var_3526 + 40, Gvar.var_3527 + 40);
    Adap.pos(Gvar.var_3510, Gvar.var_3511);
    Adap.gcopy(5, 0, Gvar.var_3562 * 40, 40, 40);
    Adap.pos(Gvar.var_3512, Gvar.var_3513);
    Adap.gcopy(5, 120, Gvar.var_3562 * 40, 40, 40);
    Adap.pos(Gvar.var_3514, Gvar.var_3515);
    Adap.gcopy(5, 240, Gvar.var_3562 * 40, 40, 40);
    Adap.pos(Gvar.var_3516, Gvar.var_3517);
    Adap.gcopy(5, 1520, Gvar.var_3562 * 40, 40, 40);
    Adap.pos(Gvar.var_3518, Gvar.var_3519);
    Adap.gcopy(3, 280, 120, 40, 40);
    Adap.pos(Gvar.var_3520, Gvar.var_3521);
    Adap.gcopy(5, 1200, Gvar.var_3562 * 40, 40, 40);
    Adap.pos(Gvar.var_3522, Gvar.var_3523);
    Adap.gcopy(3, 40, 0, 40, 40);
    Adap.pos(Gvar.var_3528, Gvar.var_3529);
    Gvar.var_1642 = 1;
    Gvar.var_83[0].Var0 = Gvar.var_3591[Gvar.var_3545];
    Gvar.var_83[0].Var5 = 2;
    Gvar.var_1641 = 0;
    Gvar.var_1640 = 2;
    await Func.func567();
    Gvar.var_1642 = 0;
    Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
    Adap.pos(Gvar.var_3524, Gvar.var_3525);
    Gvar.var_78[0].Var0 = Gvar.var_884[Gvar.var_873];
    Gvar.belongings_item_list = Gvar.var_78[0].Var0;
    await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
    Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
    Adap.pos(Gvar.var_3526, Gvar.var_3527);
    Gvar.var_888 = Gvar.var_3599[Gvar.var_3548];
    await Func.func539();
    Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
    Adap.font(Gvar.font_type, 11);
    Adap.color(255, 255, 255);
    Gvar.var_3301 = Gvar.var_3544;
    if (Gvar.var_3301 == 0) {
        Gvar.var_3301 = 1;
    }
    if (Gvar.var_3301 < 10) {
        Adap.pos(Gvar.var_3510 + 3, Gvar.var_3511 + 25);
        Adap.mes(tf("部屋 {0}", Gvar.var_3301));
    }
    if (Gvar.var_3301 >= 10) {
        Adap.pos(Gvar.var_3510 + 3, Gvar.var_3511 + 25);
        Adap.mes(tf("部屋{0}", Gvar.var_3301));
    }
    Adap.pos(Gvar.var_3512 + 3, Gvar.var_3513 + 25);
    Adap.mes("通路");
    Adap.pos(Gvar.var_3514 + 3, Gvar.var_3515 + 25);
    Adap.mes("壁");
    Adap.pos(Gvar.var_3510, Gvar.var_3511);
    if (Gvar.var_3565 == 0) {
        Adap.gcopy(3, 240, 120, 40, 40);
    }
    else {
        Adap.gcopy(3, 160, 120, 40, 40);
    }
    Adap.pos(Gvar.var_3512, Gvar.var_3513);
    if (Gvar.var_3565 == 1) {
        Adap.gcopy(3, 240, 120, 40, 40);
    }
    else {
        Adap.gcopy(3, 160, 120, 40, 40);
    }
    Adap.pos(Gvar.var_3514, Gvar.var_3515);
    if (Gvar.var_3565 == 2) {
        Adap.gcopy(3, 240, 120, 40, 40);
    }
    else {
        Adap.gcopy(3, 160, 120, 40, 40);
    }
    Adap.pos(Gvar.var_3516, Gvar.var_3517);
    if (Gvar.var_3565 == 3) {
        Adap.gcopy(3, 240, 120, 40, 40);
    }
    else {
        Adap.gcopy(3, 160, 120, 40, 40);
    }
    Adap.pos(Gvar.var_3518, Gvar.var_3519);
    if (Gvar.var_3565 == 4) {
        Adap.gcopy(3, 240, 120, 40, 40);
    }
    else {
        Adap.gcopy(3, 160, 120, 40, 40);
    }
    Adap.pos(Gvar.var_3520, Gvar.var_3521);
    if (Gvar.var_3565 == 5) {
        Adap.gcopy(3, 240, 120, 40, 40);
    }
    else {
        Adap.gcopy(3, 160, 120, 40, 40);
    }
    Adap.pos(Gvar.var_3522, Gvar.var_3523);
    if (Gvar.var_3565 == 6) {
        Adap.gcopy(3, 240, 120, 40, 40);
    }
    else {
        Adap.gcopy(3, 160, 120, 40, 40);
    }
    Adap.pos(Gvar.var_3528, Gvar.var_3529);
    if (Gvar.var_3565 == 7) {
        Adap.gcopy(3, 240, 120, 40, 40);
    }
    else {
        Adap.gcopy(3, 160, 120, 40, 40);
    }
    Adap.pos(Gvar.var_3524, Gvar.var_3525);
    if (Gvar.var_3565 == 8) {
        Adap.gcopy(3, 240, 120, 40, 40);
    }
    else {
        Adap.gcopy(3, 160, 120, 40, 40);
    }
    Adap.pos(Gvar.var_3526, Gvar.var_3527);
    if (Gvar.var_3565 == 9) {
        Adap.gcopy(3, 240, 120, 40, 40);
    }
    else {
        Adap.gcopy(3, 160, 120, 40, 40);
    }
    Adap.color(255, 255, 255);
    Adap.line(Gvar.var_3510 - 5, Gvar.var_3511 - 10, 673, Gvar.var_3511 - 10);
    Adap.line(Gvar.var_3510 - 5, Gvar.var_3511 - 10, Gvar.var_3510 - 5, Gvar.var_3515 + 48);
    Adap.color(100, 100, 100);
    Adap.line(Gvar.var_3510 - 5, Gvar.var_3515 + 48, 673, Gvar.var_3515 + 48);
    Adap.line(Gvar.var_3510 - 5, Gvar.var_3515 + 48 + 1, 673, Gvar.var_3515 + 48 + 1);
    Adap.line(673, Gvar.var_3511 - 10, 673, Gvar.var_3515 + 48);
    Adap.line(673 - 1, Gvar.var_3511 - 10, 673 - 1, Gvar.var_3515 + 48);
    Adap.color(0, 0, 0);
    Adap.boxf(0, 0, 680, 10);
    Adap.boxf(0, 330, 680, 680);
    Adap.boxf(0, 0, 10, 680);
    Adap.boxf(330, 0, 680, 680);
    await Func.func0913();
    return;
}

export {func0912}
