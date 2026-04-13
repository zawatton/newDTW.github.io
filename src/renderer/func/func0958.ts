import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'

// 旧 func899
async function func0958(this: any) {
    Adap.netfail(Gvar.var_1050);
    if (Gvar.stat) {
        Gvar.var_407 = 0;
        Adap.netclose(Gvar.var_1050);
        Adap.gsel( Gvar.window_id = 33, Gvar.window_mode = -1);
        Adap.gsel( Gvar.window_id = 30, Gvar.window_mode = -1);

        Adap.gsel(0, 1);
        Adap.onkey(0);
        await Func.setMessage("接続が切断された。", "", 7, false, false, false);
        await Func.AutoDraw(5);
        return;
    }
    Adap.tcpcount(Gvar.var_3841, Gvar.var_1050);
    if (Gvar.var_3841 != 0) {
        Gvar.var_3840 = Adap.sdim(1024);
        Gvar.var_3842 = Adap.sdim(1024);
        Adap.tcpgetl(Gvar.var_3840, 1024, Gvar.var_1050);
        Gvar.var_3842 = Gvar.var_3840;
        Gvar.var_3843 = 0;
        Gvar.var_3844 = 0;
        if (Gvar.stat != 0) {
            Gvar.var_3845 = Adap.strmid(Gvar.var_3840, 0, 4);
            Gvar.var_3846 = Adap.strmid(Gvar.var_3840, 4, 250);
            if (Gvar.var_3845 == "倒敵") {
                await Func.func0975();
                return;
            }
            if (Gvar.var_3845 == "女帝") {
                await Func.func0977();
                return;
            }
            if (Gvar.var_3845 == "喋背") {
                await Func.func0981();
                return;
            }
            if (Gvar.var_3845 == "送具") {
                await Func.func0972();
                return;
            }
            if (Gvar.var_3845 == "捨送") {
                await Func.func0967();
                Gvar.var_3844 = 1;
            }
            Gvar.var_3847 = 0;
            if (Gvar.var_3845 == "字水") {
                Gvar.var_3842 = "" + Gvar.var_3846;
                Gvar.var_3847 = 0;
                Gvar.var_3843 = 1;
            }
            if (Gvar.var_3845 == "字赤") {
                Gvar.var_3842 = "" + Gvar.var_3846;
                Gvar.var_3847 = 1;
                Gvar.var_3843 = 1;
            }
            if (Gvar.var_3845 == "字青") {
                Gvar.var_3842 = "" + Gvar.var_3846;
                Gvar.var_3847 = 2;
                Gvar.var_3843 = 1;
            }
            if (Gvar.var_3845 == "字黄") {
                Gvar.var_3842 = "" + Gvar.var_3846;
                Gvar.var_3847 = 3;
                Gvar.var_3843 = 1;
            }
            if (Gvar.var_3845 == "行白") {
                Gvar.var_3842 = "" + Gvar.var_3846;
                Gvar.var_3847 = 0;
            }
            if (Gvar.var_3845 == "行赤") {
                Gvar.var_3842 = "" + Gvar.var_3846;
                Gvar.var_3847 = 1;
            }
            if (Gvar.var_3845 == "行青") {
                Gvar.var_3842 = "" + Gvar.var_3846;
                Gvar.var_3847 = 2;
            }
            if (Gvar.var_3845 == "行黄") {
                Gvar.var_3842 = "" + Gvar.var_3846;
                Gvar.var_3847 = 3;
            }
            if (Gvar.var_3845 == "行水") {
                Gvar.var_3842 = "" + Gvar.var_3846;
                Gvar.var_3847 = 4;
            }
            if (Gvar.var_3845 == "行緑") {
                Gvar.var_3842 = "" + Gvar.var_3846;
                Gvar.var_3847 = 5;
            }
            if (Gvar.var_3845 == "行橙") {
                Gvar.var_3842 = "" + Gvar.var_3846;
                Gvar.var_3847 = 6;
            }
            if (Gvar.var_3845 == "行紫") {
                Gvar.var_3842 = "" + Gvar.var_3846;
                Gvar.var_3847 = 7;
            }
            if (Gvar.var_3845 == "行茶") {
                Gvar.var_3842 = "" + Gvar.var_3846;
                Gvar.var_3847 = 8;
            }
            if (Adap.instr(Gvar.var_3840, 0, "さんが接続しました") != (-1)) {
                Gvar.var_3847 = 6;
                await Func.func0966();
            }
            if (Adap.instr(Gvar.var_3840, 0, "さんは切断しました") != (-1)) {
                Adap.gsel(33);
                Gvar.var_3828 = "相手の情報";
                Adap.title(Gvar.var_3828);
                Adap.gsel(0);
            }
            if (Gvar.var_3843 == 1) {
                Adap.notesel(Gvar.var_3829);
                Gvar.var_447 = Adap.noteinfo(0);
                if (Gvar.var_447 >= 200) {
                    Adap.notedel(0);
                }
                Gvar.var_3829 = Gvar.var_3829 + "\n" + Gvar.var_3842;
                Adap.sendmsg(Gvar.var_3832, 12, 0, Gvar.var_3829);
                Gvar.var_447 = Adap.noteinfo(0) - 1;
                Gvar.var_449 = Adap.noteinfo(1);
                Adap.sendmsg(Gvar.var_3832, 177, Gvar.var_449, Gvar.var_449);
                Adap.sendmsg(Gvar.var_3832, 183, 0, 0);
                return;
            }
            if (Gvar.var_3843 == 0) {
                Gvar.var_3848 = 33;
                Gvar.var_3849 = 220;
                Gvar.var_3850 = 420;
                Gvar.var_3851 = 440;
                Gvar.var_3852 = 125;
                Adap.gsel(33);
            }
            Adap.redraw(0);
            if (Gvar.var_3844 == 0) {
                Adap.gmode(0);
                Adap.pos(0, Gvar.var_3852);
                Adap.gcopy(Gvar.var_3848, 0, Gvar.var_3852 + 20, Gvar.var_3849, Gvar.var_3851);
                Adap.pos(10, Gvar.var_3850);
                Adap.color(255, 255, 255);
                if (Gvar.var_3847 == 1) {
                    Adap.color(255, 0, 0);
                }
                if (Gvar.var_3847 == 2) {
                    Adap.color(0, 0, 255);
                }
                if (Gvar.var_3847 == 3) {
                    Adap.color(255, 255, 0);
                }
                if (Gvar.var_3847 == 4) {
                    Adap.color(0, 255, 255);
                }
                if (Gvar.var_3847 == 5) {
                    Adap.color(0, 255, 0);
                }
                if (Gvar.var_3847 == 6) {
                    Adap.color(255, 180, 90);
                }
                if (Gvar.var_3847 == 7) {
                    Adap.color(240, 0, 240);
                }
                if (Gvar.var_3847 == 8) {
                    Adap.color(225, 195, 145);
                }
                if (Gvar.var_3847 == 9) {
                    Adap.color(255, 255, 255);
                }
                Adap.font(Gvar.font_type, 12);
                Adap.mes(Gvar.var_3842);
            }
            if (Gvar.var_3843 == 0) {
                Gvar.var_3532 = 5;
                Gvar.var_3853 = 3;
                Gvar.var_3530 = 255;
                Gvar.var_3531 = 150;
                Gvar.var_1631 = 245;
                Gvar.var_1632 = 140;
                Gvar.var_1633 = 65;
                Gvar.var_1634 = 65;
                Gvar.var_1635 = 0;
                Gvar.var_1636 = 0;
                Adap.color(0, 0, 0);
                Adap.boxf(Gvar.var_1631 - 3, Gvar.var_1632 - 3, Gvar.var_1631 - 3 + Gvar.var_1633 + 5, Gvar.var_1632 - 3 + Gvar.var_1634 + 7);
                Adap.gmode(4, null, null, 100);
                Adap.pos(Gvar.var_1631 - 3, Gvar.var_1632 - 3);
                Adap.gcopy(12, 0, 0, Gvar.var_1633 + 7, Gvar.var_1634 + 5);
                Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
                Adap.color(255, 255, 255);
                Adap.line(Gvar.var_1631 - Gvar.var_1635, Gvar.var_1632 - Gvar.var_1636 - 1, Gvar.var_1631 + Gvar.var_1633 + Gvar.var_1635, Gvar.var_1632 - Gvar.var_1636 - 1);
                Adap.line(Gvar.var_1631 - Gvar.var_1635, Gvar.var_1632 + Gvar.var_1634 + Gvar.var_1636, Gvar.var_1631 + Gvar.var_1633 + Gvar.var_1635, Gvar.var_1632 + Gvar.var_1634 + Gvar.var_1636);
                Adap.line(Gvar.var_1631 - Gvar.var_1635 - 1, Gvar.var_1632 - Gvar.var_1636, Gvar.var_1631 - Gvar.var_1635 - 1, Gvar.var_1632 + Gvar.var_1634 + Gvar.var_1636 - 2);
                Adap.line(Gvar.var_1631 + Gvar.var_1633 + Gvar.var_1635 + 2, Gvar.var_1632 - Gvar.var_1636, Gvar.var_1631 + Gvar.var_1633 + Gvar.var_1635 + 2, Gvar.var_1632 + Gvar.var_1634 + Gvar.var_1636 - 2);
                Adap.pset(Gvar.var_1631 - Gvar.var_1635, Gvar.var_1632 - Gvar.var_1636);
                Adap.pset(Gvar.var_1631 + Gvar.var_1633 + Gvar.var_1635 + 1, Gvar.var_1632 - Gvar.var_1636);
                Adap.pset(Gvar.var_1631 - Gvar.var_1635, Gvar.var_1632 + Gvar.var_1634 + Gvar.var_1636 - 1);
                Adap.pset(Gvar.var_1631 + Gvar.var_1633 + Gvar.var_1635 + 1, Gvar.var_1632 + Gvar.var_1634 + Gvar.var_1636 - 1);
                Adap.color(255, 255, 255);
                Adap.line(Gvar.var_3530 - 1, Gvar.var_3531 - 1, Gvar.var_3530 - 1, 9 * Gvar.var_3532 + Gvar.var_3531 + 1);
                Adap.line(Gvar.var_3530 - 2, Gvar.var_3531 - 1, 9 * Gvar.var_3532 + Gvar.var_3530 + 1, Gvar.var_3531 - 1);
                Adap.line(9 * Gvar.var_3532 + Gvar.var_3530 + 1, Gvar.var_3531 - 1, 9 * Gvar.var_3532 + Gvar.var_3530 + 1, 9 * Gvar.var_3532 + Gvar.var_3531 + 1);
                Adap.line(Gvar.var_3530 - 1, 9 * Gvar.var_3532 + Gvar.var_3531 + 1, 9 * Gvar.var_3532 + Gvar.var_3530 + 1, 9 * Gvar.var_3532 + Gvar.var_3531 + 1);
                Gvar.var_3854 = 0;
                Gvar.var_449 = 0;
                for (let cnt4 = 0; cnt4 < 9; ++cnt4) {
                    Gvar.var_447 = 0;
                    for (let cnt5 = 0; cnt5 < 9; ++cnt5) {
                        if (Adap.peek(Gvar.var_1068[25], Gvar.var_3854) == 48) {
                            Adap.color(0, 0, 0);
                            Adap.boxf(Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531, Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530 + Gvar.var_3532, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531 + Gvar.var_3532);
                        }
                        if (Adap.peek(Gvar.var_1068[25], Gvar.var_3854) == 49) {
                            Adap.color(0, 0, 255);
                            Adap.boxf(Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531, Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530 + Gvar.var_3532, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531 + Gvar.var_3532);
                        }
                        if (Adap.peek(Gvar.var_1068[25], Gvar.var_3854) == 55) {
                            Adap.color(0, 0, 150);
                            Adap.boxf(Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531, Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530 + Gvar.var_3532, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531 + Gvar.var_3532);
                        }
                        if (Adap.peek(Gvar.var_1068[25], Gvar.var_3854) == 50) {
                            Adap.color(255, 0, 255);
                            Adap.line(Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530 - 1, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531 - 1, Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530 + 4, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531 + 4);
                            Adap.line(Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530 + 5, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531 - 1, Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531 + 4);
                        }
                        if (Adap.peek(Gvar.var_1068[25], Gvar.var_3854) == 51) {
                            Adap.color(0, 255, 255);
                            Adap.boxf(Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531, Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530 + Gvar.var_3853, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531 + Gvar.var_3853);
                        }
                        if (Adap.peek(Gvar.var_1068[25], Gvar.var_3854) == 52) {
                            Adap.color(255, 0, 0);
                            Adap.boxf(Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531, Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530 + Gvar.var_3853, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531 + Gvar.var_3853);
                        }
                        if (Adap.peek(Gvar.var_1068[25], Gvar.var_3854) == 53) {
                            Adap.color(0, 255, 255);
                            Adap.boxf(Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531, Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530 + Gvar.var_3853, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531 + Gvar.var_3853);
                            Adap.color(0, 0, 255);
                            Adap.pset(Gvar.var_447 * Gvar.var_3532 + Gvar.var_3530 + 1, Gvar.var_449 * Gvar.var_3532 + Gvar.var_3531 + 1);
                        }
                        if (Adap.peek(Gvar.var_1068[25], Gvar.var_3854) == 54) {
                            Adap.color(255, 255, 255);
                            Adap.pset(Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530 + 1, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531);
                            Adap.pset(Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530 + 2, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531);
                            Adap.pset(Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530 + 3, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531);
                            Adap.pset(Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530 + 1, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531 + 4);
                            Adap.pset(Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530 + 2, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531 + 4);
                            Adap.pset(Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530 + 3, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531 + 4);
                            Adap.boxf(Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531 + 1, Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530 + 4, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531 + 3);
                        }
                        if (Adap.peek(Gvar.var_1068[25], Gvar.var_3854) == 56) {
                            Adap.color(255, 255, 0);
                            Adap.boxf(Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531, Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530 + Gvar.var_3853, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531 + Gvar.var_3853);
                        }
                        if (Adap.peek(Gvar.var_1068[25], Gvar.var_3854) == 57) {
                            Adap.color(0, 255, 255);
                            Adap.line(Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530 - 1, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531 - 1, Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530 + 4, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531 + 4);
                            Adap.line(Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530 + 5, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531 - 1, Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531 + 4);
                        }
                        Gvar.var_3854++;
                        Gvar.var_447++;
                    }
                    Gvar.var_449++;
                }
                if (Gvar.dungeon_number == Adap.int(Gvar.var_1068[12]) && Gvar.dungeon_number != 0) {
                    Gvar.var_536 = 1;
                }
                else {
                    Gvar.var_536 = 0;
                }
                Gvar.var_1631 = 10;
                Gvar.var_1632 = 10;
                Gvar.var_1633 = 300;
                Gvar.var_1634 = 110;
                Gvar.var_1635 = 0;
                Gvar.var_1636 = 0;
                Adap.color(1, 1, 1);
    
                Adap.boxf(0, 0, 320, 120);
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
                Adap.pos(Gvar.var_1631 - 3, Gvar.var_1632 - 3);
                Adap.gcopy(12, 0, 0, Gvar.var_1633 + 7, 110 + 5);
                Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
                Adap.color(255, 255, 255);
                Adap.line(Gvar.var_1631 - Gvar.var_1635, Gvar.var_1632 - Gvar.var_1636 - 1, Gvar.var_1631 + Gvar.var_1633 + Gvar.var_1635, Gvar.var_1632 - Gvar.var_1636 - 1);
                Adap.line(Gvar.var_1631 - Gvar.var_1635, Gvar.var_1632 + Gvar.var_1634 + Gvar.var_1636, Gvar.var_1631 + Gvar.var_1633 + Gvar.var_1635, Gvar.var_1632 + Gvar.var_1634 + Gvar.var_1636);
                Adap.line(Gvar.var_1631 - Gvar.var_1635 - 1, Gvar.var_1632 - Gvar.var_1636, Gvar.var_1631 - Gvar.var_1635 - 1, Gvar.var_1632 + Gvar.var_1634 + Gvar.var_1636 - 2);
                Adap.line(Gvar.var_1631 + Gvar.var_1633 + Gvar.var_1635 + 2, Gvar.var_1632 - Gvar.var_1636, Gvar.var_1631 + Gvar.var_1633 + Gvar.var_1635 + 2, Gvar.var_1632 + Gvar.var_1634 + Gvar.var_1636 - 2);
                Adap.pset(Gvar.var_1631 - Gvar.var_1635, Gvar.var_1632 - Gvar.var_1636);
                Adap.pset(Gvar.var_1631 + Gvar.var_1633 + Gvar.var_1635 + 1, Gvar.var_1632 - Gvar.var_1636);
                Adap.pset(Gvar.var_1631 - Gvar.var_1635, Gvar.var_1632 + Gvar.var_1634 + Gvar.var_1636 - 1);
                Adap.pset(Gvar.var_1631 + Gvar.var_1633 + Gvar.var_1635 + 1, Gvar.var_1632 + Gvar.var_1634 + Gvar.var_1636 - 1);
                Adap.pos(Gvar.var_1631 + 7, Gvar.var_1632 + 7);
                Adap.gcopy(3, 40, 0, 40, 40);
                Gvar.var_2607 = Gvar.var_1631 + 7 + 30;
                Gvar.var_2608 = Gvar.var_1631 + 7 + 24;
                if (Adap.int(Gvar.var_1068[3]) >= 10) {
                    Gvar.var_2607 = Gvar.var_2607 - 5;
                }
        
                Adap.font(Gvar.font_type, 16, 1);
                Adap.color(1, 1, 1);
                Adap.pos(Gvar.var_2607 - 1, Gvar.var_2608);
                Adap.mes(Gvar.var_1068[3]);
                Adap.pos(Gvar.var_2607 + 1, Gvar.var_2608);
                Adap.mes(Gvar.var_1068[3]);
                Adap.pos(Gvar.var_2607, Gvar.var_2608 - 1);
                Adap.mes(Gvar.var_1068[3]);
                Adap.pos(Gvar.var_2607, Gvar.var_2608 + 1);
                Adap.mes(Gvar.var_1068[3]);
                Adap.color(255, 255, 255);
                Adap.pos(Gvar.var_2607, Gvar.var_2608);
                Adap.mes(Gvar.var_1068[3]);
                Adap.font(Gvar.font_type, 12);
                Adap.pos(Gvar.var_1631 + 55, Gvar.var_1632 + 7);
                Adap.color(255, 255, 255);
                Adap.mes("");
                if (Adap.int(Gvar.var_1068[12]) == 0) {
                    Adap.mes("地上");
                }
                if (Adap.int(Gvar.var_1068[12]) == 1) {
                    Adap.mes("ホテル外 " + Gvar.var_1068[10] + "階");
                }
                if (Adap.int(Gvar.var_1068[12]) == 2) {
                    Adap.mes("大迷宮 " + Gvar.var_1068[10] + "階");
                }
                if (Adap.int(Gvar.var_1068[12]) == 3) {
                    Adap.mes("試練  " + Gvar.var_1068[10] + "階");
                }
                if (Adap.int(Gvar.var_1068[12]) == 4) {
                    Adap.mes("一巡後 " + Gvar.var_1068[10] + "階");
                }
                if (Adap.int(Gvar.var_1068[12]) >= 5) {
                    Adap.mes("");
                }
                Gvar.var_3855 = 0;
                Gvar.var_3856 = Adap.int(Gvar.var_1068[10]);
                Gvar.var_3855 = Gvar.current_floor - Gvar.var_3856;
                if (Gvar.dungeon_number != Adap.int(Gvar.var_1068[12])) {
                    Adap.color(150, 150, 150);
                    Adap.mes("（別の場所）");
                }
                if (Gvar.dungeon_number == Adap.int(Gvar.var_1068[12])) {
                    if (Gvar.var_3855 < (-2)) {
                        Adap.color(255, 0, 0);
                        Gvar.var_3857 = -Gvar.var_3855;
                        Adap.mes("（" + Gvar.var_3857 + "こ次の階）");
                    }
                    if (Gvar.var_3855 == (-2)) {
                        Adap.color(255, 255, 0);
                        Adap.mes("（2こ次の階）");
                    }
                    if (Gvar.var_3855 == (-1)) {
                        Adap.color(0, 255, 255);
                        Adap.mes("（次の階）");
                    }
                    if (Gvar.var_3855 == 0) {
                        Adap.color(0, 255, 255);
                        Adap.mes("（同じ階）");
                    }
                    if (Gvar.var_3855 == 1) {
                        Adap.color(0, 255, 255);
                        Adap.mes("（前の階）");
                    }
                    if (Gvar.var_3855 == 2) {
                        Adap.color(255, 255, 0);
                        Adap.mes("（2こ前の階）");
                    }
                    if (Gvar.var_3855 > 2) {
                        Adap.color(255, 0, 0);
                        Adap.mes("（" + Gvar.var_3855 + "こ前の階）");
                    }
                }
                Adap.pos(Gvar.var_1631 + 5, Gvar.var_1632 + 58);
                Adap.color(255, 255, 255);
                if (Adap.int(Gvar.var_1068[5]) > 0) {
                    Gvar.var_3858 = Math.floor(Adap.int(Gvar.var_1068[4]) / Adap.int(Gvar.var_1068[5]));
                }
                if (Gvar.var_3858 < 2) {
                    Adap.color(255, 255, 255);
                }
                if (Gvar.var_3858 >= 2 || Adap.int(Gvar.var_1068[5]) < 1) {
                    Adap.color(220, 0, 0);
                }
                if (Adap.int(Gvar.var_1068[5]) == 0) {
                    Adap.color(255, 255, 255);
                }
                Adap.mes("ＨＰ    " + Gvar.var_1068[5] + "/" + Gvar.var_1068[4]);
                Adap.color(255, 255, 255);
                Adap.mes("精神力  " + Gvar.var_1068[7] + "/" + Gvar.var_1068[6]);
                Adap.mes("満腹度  " + Gvar.var_1068[9] + "/" + Gvar.var_1068[8]);
                Adap.mes("お金    " + Gvar.var_1068[11] + " G");
                Gvar.var_1631 = Gvar.var_1631 + 4;
                Gvar.var_1632 = Gvar.var_1632 + 5;
                Gvar.var_1633 = 120;
                Gvar.var_1634 = 50;
                Gvar.var_1635 = 0;
                Gvar.var_1636 = 0;
                Adap.color(255, 255, 255);
                Adap.line(Gvar.var_1631 - Gvar.var_1635, Gvar.var_1632 - Gvar.var_1636 - 1, Gvar.var_1631 + Gvar.var_1633 + Gvar.var_1635, Gvar.var_1632 - Gvar.var_1636 - 1);
                Adap.line(Gvar.var_1631 - Gvar.var_1635, Gvar.var_1632 + Gvar.var_1634 + Gvar.var_1636, Gvar.var_1631 + Gvar.var_1633 + Gvar.var_1635, Gvar.var_1632 + Gvar.var_1634 + Gvar.var_1636);
                Adap.line(Gvar.var_1631 - Gvar.var_1635 - 1, Gvar.var_1632 - Gvar.var_1636, Gvar.var_1631 - Gvar.var_1635 - 1, Gvar.var_1632 + Gvar.var_1634 + Gvar.var_1636 - 2);
                Adap.line(Gvar.var_1631 + Gvar.var_1633 + Gvar.var_1635 + 2, Gvar.var_1632 - Gvar.var_1636, Gvar.var_1631 + Gvar.var_1633 + Gvar.var_1635 + 2, Gvar.var_1632 + Gvar.var_1634 + Gvar.var_1636 - 2);
                Adap.pset(Gvar.var_1631 - Gvar.var_1635, Gvar.var_1632 - Gvar.var_1636);
                Adap.pset(Gvar.var_1631 + Gvar.var_1633 + Gvar.var_1635 + 1, Gvar.var_1632 - Gvar.var_1636);
                Adap.pset(Gvar.var_1631 - Gvar.var_1635, Gvar.var_1632 + Gvar.var_1634 + Gvar.var_1636 - 1);
                Adap.pset(Gvar.var_1631 + Gvar.var_1633 + Gvar.var_1635 + 1, Gvar.var_1632 + Gvar.var_1634 + Gvar.var_1636 - 1);
                Gvar.var_1631 = 145;
                Gvar.var_1632 = 15;
                Gvar.var_1633 = 50;
                Gvar.var_1634 = 50;
                Gvar.var_1635 = 0;
                Gvar.var_1636 = 0;
                Gvar.var_3859 = Gvar.var_1631;
                for (let cnt4 = 0; cnt4 < 3; ++cnt4) {
                    Adap.color(255, 255, 255);
                    Adap.line(Gvar.var_1631 - Gvar.var_1635, Gvar.var_1632 - Gvar.var_1636 - 1, Gvar.var_1631 + Gvar.var_1633 + Gvar.var_1635, Gvar.var_1632 - Gvar.var_1636 - 1);
                    Adap.line(Gvar.var_1631 - Gvar.var_1635, Gvar.var_1632 + Gvar.var_1634 + Gvar.var_1636, Gvar.var_1631 + Gvar.var_1633 + Gvar.var_1635, Gvar.var_1632 + Gvar.var_1634 + Gvar.var_1636);
                    Adap.line(Gvar.var_1631 - Gvar.var_1635 - 1, Gvar.var_1632 - Gvar.var_1636, Gvar.var_1631 - Gvar.var_1635 - 1, Gvar.var_1632 + Gvar.var_1634 + Gvar.var_1636 - 2);
                    Adap.line(Gvar.var_1631 + Gvar.var_1633 + Gvar.var_1635 + 2, Gvar.var_1632 - Gvar.var_1636, Gvar.var_1631 + Gvar.var_1633 + Gvar.var_1635 + 2, Gvar.var_1632 + Gvar.var_1634 + Gvar.var_1636 - 2);
                    Adap.pset(Gvar.var_1631 - Gvar.var_1635, Gvar.var_1632 - Gvar.var_1636);
                    Adap.pset(Gvar.var_1631 + Gvar.var_1633 + Gvar.var_1635 + 1, Gvar.var_1632 - Gvar.var_1636);
                    Adap.pset(Gvar.var_1631 - Gvar.var_1635, Gvar.var_1632 + Gvar.var_1634 + Gvar.var_1636 - 1);
                    Adap.pset(Gvar.var_1631 + Gvar.var_1633 + Gvar.var_1635 + 1, Gvar.var_1632 + Gvar.var_1634 + Gvar.var_1636 - 1);
                    Gvar.var_1631 = Gvar.var_1631 + 55;
                }
                Gvar.var_3860 = 1;
                Adap.pos(Gvar.var_3859 + 5, Gvar.var_1632 + 5);
                Gvar.item_icon_id = Adap.int(Gvar.var_1068[13]);
                await Func.func070(); // アイテムの表示用アイコン座標指定
                if (Gvar.item_icon_id != 0) {
                    Adap.gcopy(Gvar.buffer_id, Gvar.buffer_x_axis, Gvar.buffer_y_axis, 40, 40);
                }
                Adap.color(1, 1, 1);
                Adap.pos(Gvar.var_3859 + 5 + 31, Gvar.var_1632 + 5 + 30);
                Adap.mes("" + Gvar.var_1068[15]);
                Adap.pos(Gvar.var_3859 + 5 + 33, Gvar.var_1632 + 5 + 30);
                Adap.mes("" + Gvar.var_1068[15]);
                Adap.pos(Gvar.var_3859 + 5 + 32, Gvar.var_1632 + 5 + 29);
                Adap.mes("" + Gvar.var_1068[15]);
                Adap.pos(Gvar.var_3859 + 5 + 32, Gvar.var_1632 + 5 + 31);
                Adap.mes("" + Gvar.var_1068[15]);
                Adap.color(0, 255, 0);
                Adap.pos(Gvar.var_3859 + 5 + 32, Gvar.var_1632 + 5 + 30);
                Adap.mes("" + Gvar.var_1068[15]);
                Adap.pos(Gvar.var_3859 + 60, Gvar.var_1632 + 5);
                Gvar.item_icon_id = Adap.int(Gvar.var_1068[16]);
                await Func.func070(); // アイテムの表示用アイコン座標指定
                if (Gvar.item_icon_id != 0) {
                    Adap.gcopy(Gvar.buffer_id, Gvar.buffer_x_axis, Gvar.buffer_y_axis, 40, 40);
                }
                Adap.color(1, 1, 1);
                Adap.pos(Gvar.var_3859 + 60 + 31, Gvar.var_1632 + 5 + 30);
                Adap.mes("" + Gvar.var_1068[18]);
                Adap.pos(Gvar.var_3859 + 60 + 33, Gvar.var_1632 + 5 + 30);
                Adap.mes("" + Gvar.var_1068[18]);
                Adap.pos(Gvar.var_3859 + 60 + 32, Gvar.var_1632 + 5 + 29);
                Adap.mes("" + Gvar.var_1068[18]);
                Adap.pos(Gvar.var_3859 + 60 + 32, Gvar.var_1632 + 5 + 31);
                Adap.mes("" + Gvar.var_1068[18]);
                Adap.color(0, 255, 0);
                Adap.pos(Gvar.var_3859 + 60 + 32, Gvar.var_1632 + 5 + 30);
                Adap.mes("" + Gvar.var_1068[18]);
                Adap.pos(Gvar.var_3859 + 115, Gvar.var_1632 + 5);
                Gvar.item_icon_id = Adap.int(Gvar.var_1068[19]);
                await Func.func070(); // アイテムの表示用アイコン座標指定
                if (Gvar.item_icon_id != 0) {
                    Adap.gcopy(Gvar.buffer_id, Gvar.buffer_x_axis, Gvar.buffer_y_axis, 40, 40);
                }
                Gvar.var_3860 = 0;
                Adap.pos(Gvar.var_3859 - 10, Gvar.var_1632 + 5 + 50);
                Adap.color(255, 255, 0);
                Gvar.var_3861 = Adap.int(Gvar.var_1068[13]);
                await Func.func0983();
                if (Adap.int(Gvar.var_1068[13]) == 0) {
                    Adap.mes("[攻] なし");
                }
                if (Adap.int(Gvar.var_1068[13]) != 0) {
                    if (Adap.int(Gvar.var_1068[14]) == 0) {
                        Adap.mes("[攻] " + Gvar.var_3862);
                    }
                    if (Adap.int(Gvar.var_1068[14]) != 0) {
                        Adap.mes("[攻] " + Gvar.var_3862 + "+" + Gvar.var_1068[14]);
                    }
                }
                Adap.color(255, 180, 90);
                Gvar.var_3861 = Adap.int(Gvar.var_1068[16]);
                await Func.func0983();
                if (Adap.int(Gvar.var_1068[16]) == 0) {
                    Adap.mes("[防] なし");
                }
                if (Adap.int(Gvar.var_1068[16]) != 0) {
                    if (Adap.int(Gvar.var_1068[17]) == 0) {
                        Adap.mes("[防] " + Gvar.var_3862);
                    }
                    if (Adap.int(Gvar.var_1068[17]) != 0) {
                        Adap.mes("[防] " + Gvar.var_3862 + "+" + Gvar.var_1068[17]);
                    }
                }
                Adap.color(240, 0, 240);
                Gvar.var_3861 = Adap.int(Gvar.var_1068[19]);
                await Func.func0983();
                if (Adap.int(Gvar.var_1068[19]) == 0) {
                    Adap.mes("[能] なし");
                }
                if (Adap.int(Gvar.var_1068[19]) != 0) {
                    if (Adap.int(Gvar.var_1068[20]) == 0) {
                        Adap.mes("[能] " + Gvar.var_3862);
                    }
                    if (Adap.int(Gvar.var_1068[20]) != 0) {
                        Adap.mes("[能] " + Gvar.var_3862 + "+" + Gvar.var_1068[20]);
                    }
                }
                Adap.color(225, 195, 145);
                Gvar.var_3861 = Adap.int(Gvar.var_1068[2]);
                await Func.func0983();
                if (Adap.int(Gvar.var_1068[2]) == 0) {
                    Adap.mes("[射] なし");
                }
                if (Adap.int(Gvar.var_1068[2]) != 0) {
                    if (Adap.int(Gvar.var_1068[21]) == 0) {
                        Adap.mes("[射] " + Gvar.var_3862);
                    }
                    if (Adap.int(Gvar.var_1068[21]) != 0) {
                        Adap.mes("[射] " + Gvar.var_3862 + "(" + Gvar.var_1068[21] + ")");
                    }
                }
            }
            Adap.redraw(1);
        }
    }
    return;
}

export {func0958}
