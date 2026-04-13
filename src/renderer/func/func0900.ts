import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'

// 旧 func841
async function func0900(this: any) {
    if (Gvar.var_637 >= 1) {
        Gvar.var_637 = 0;
        Adap.gsel( Gvar.window_id = 37, Gvar.window_mode = -1);
        Adap.screen_(0, 340, 340, 2);
        Adap.SetWindowLongA(Gvar.hwnd, -8, Gvar.var_15);
        if (Gvar.var_640 == 0) {
            Gvar.var_10 = 0;
            Adap.width(340, 340);
        }
        if (Gvar.var_640 == 1) {
            Gvar.var_640 = 0;
            Gvar.var_10 = 1;
            Adap.width(680, 680);
        }
        Adap.gsel( Gvar.window_id = 0, Gvar.window_mode = 2);
        Adap.chgdisp();
    }
    Adap.onexit(0);
    Gvar.var_3510 = 353;
    Gvar.var_3511 = 50;
    Gvar.var_3512 = Gvar.var_3510;
    Gvar.var_3513 = Gvar.var_3511 + 44;
    Gvar.var_3514 = Gvar.var_3510;
    Gvar.var_3515 = Gvar.var_3513 + 44;
    Gvar.var_3516 = Gvar.var_3512 + 44;
    Gvar.var_3517 = Gvar.var_3513;
    Gvar.var_3518 = Gvar.var_3514 + 44;
    Gvar.var_3519 = Gvar.var_3515;
    Gvar.var_3520 = Gvar.var_3518 + 44;
    Gvar.var_3521 = Gvar.var_3519;
    Gvar.var_3522 = Gvar.var_3516 + 44;
    Gvar.var_3523 = Gvar.var_3517;
    Gvar.var_3524 = Gvar.var_3522 + 44;
    Gvar.var_3525 = Gvar.var_3523;
    Gvar.var_3526 = Gvar.var_3520 + 44;
    Gvar.var_3527 = Gvar.var_3521;
    Gvar.var_3528 = Gvar.var_3524;
    Gvar.var_3529 = Gvar.var_3525 - 44;
    Gvar.var_3530 = Gvar.var_3510;
    Gvar.var_3531 = Gvar.var_3515 + 60;
    Gvar.var_3532 = 3;
    Gvar.var_3533 = 2;
    Gvar.var_3534 = Gvar.var_31 - 3;
    Gvar.var_3535 = Gvar.var_32 - 4;
    Gvar.var_3536 = Gvar.var_31 - 2;
    Gvar.var_3537 = Gvar.var_32 - 3;
    Gvar.var_3538 = Gvar.var_3530 - 5;
    Gvar.var_3539 = Gvar.var_3531 - 2;
    Gvar.var_3540 = 185;
    Gvar.var_3541 = 135;
    Gvar.var_3542 = Gvar.var_3524 + 40 + 20;
    Gvar.var_3543 = Gvar.var_3515 + 60;
    Gvar.var_869 = 1;
    await Func.func0947();
    Gvar.var_869 = 0;
    await Func.func0949();
    await Func.func0951();
    Adap.objsize(1);
    Adap.pos(800, 800);
    Adap.button("ダミー", Func.func0909);
    Adap.objsize(50);
    Adap.pos(Gvar.var_3510 + 45, Gvar.var_3511);
    Adap.combox(Gvar.var_3544, 100, "部屋\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12");
    Gvar.var_3545 = 0;
    Gvar.var_3546 = 0;
    Gvar.var_873 = 0;
    Gvar.var_3547 = 0;
    Gvar.var_3548 = 0;
    Gvar.var_3549 = 0;
    Gvar.var_3550 = 0;
    Gvar.var_3551 = 0;
    Adap.objsize(135);
    Adap.pos(Gvar.var_3528 + 44, Gvar.var_3529);
    Adap.combox(Gvar.var_3545, 100, Gvar.var_890);
    Adap.pos(Gvar.var_3524 + 44, Gvar.var_3525);
    Adap.combox(Gvar.var_873, 100, Gvar.var_874);
    Adap.pos(Gvar.var_3526 + 44, Gvar.var_3527);
    Adap.combox(Gvar.var_3548, 100, Gvar.var_886);
    Adap.objsize(60);
    Adap.pos(Gvar.var_3542, Gvar.var_3543 + 28);
    Adap.button("読込", Func.func0927);
    Adap.pos(Gvar.var_3542, Gvar.var_3543 + 56);
    Adap.button("保存", Func.func0931);
    Adap.pos(Gvar.var_3542, Gvar.var_3543);
    Adap.button("実行", Func.func0930);
    Adap.objsize(100);
    Adap.pos(Gvar.var_3542, Gvar.var_3543 + 114);
    Gvar.var_3552 = 0;
    Adap.combox(Gvar.var_3552, 100, "フラグ変更\n未クリア(白)\nクリア済(黄)\n製作中(赤)\n完成(水色)");
    Gvar.var_3553 = 0;
    Gvar.var_3554 = 0;
    Gvar.var_3555 = 0;
    Gvar.var_3556 = 0;
    Gvar.var_3557 = 0;
    Gvar.var_3558 = 0;
    await Func.func0905();
    Adap.objsize(60);
    Adap.pos(Gvar.var_3542 + 70, Gvar.var_3543 + 56);
    Adap.button("戻る", Func.func0908);
    Adap.pos(Gvar.var_3542 + 70, Gvar.var_3543 + 28);
    Adap.button("初期化", Func.func0924);
    Gvar.var_3559 = 0;
    Gvar.var_3560 = 0;
    Gvar.var_3561 = 0;
    await Func.func0915();
    await Func.func0906();
    Adap.width(340, 340);
    Gvar.y_axis_map_image = 2;
    Gvar.var_3562 = Gvar.y_axis_map_image;
    Gvar.var_3563 = 1;
    Gvar.var_3564 = 1;
    Gvar.var_3565 = 6;
    Gvar.var_3544 = 1;
    Gvar.var_3566 = 1;
    Gvar.var_3567 = 0;
    Gvar.var_3568 = 0;
    Gvar.var_3569 = 1;
    Gvar.var_3570 = 0;
    Gvar.var_3571 = "";
    Gvar.var_626 = 1;
    if (Gvar.var_3572 == 1) {
        Gvar.var_3573 = 1;
        await Func.func0928();
        return;
    }
    if (Gvar.var_3572 == 0) {
        await Func.func0934();
    }
    await Func.func0910();
    return;
}

export {func0900}
