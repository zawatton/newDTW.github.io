import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func899(this: any) {
        Adap.dbgprt(899);
        Adap.netfail(Gvar.var_1050);
        if (Gvar.stat) {
            Gvar.var_407 = 0;
            Adap.netclose(Gvar.var_1050);
            Adap.gsel( Gvar.window_id = 33, Gvar.window_mode = -1);
            Adap.gsel( Gvar.window_id = 30, Gvar.window_mode = -1);
    
            Adap.gsel(0, 1);
            Adap.onkey(0);
            await Func.setMessage1("接続が切断された。", "", 7, false, false, false);
            await Func.AutoDraw(5);
            return;
        }
        Adap.tcpcount(Gvar.var_3538, Gvar.var_1050);
        if (Gvar.var_3538 != 0) {
            Gvar.var_3537 = Adap.sdim(1024);
            Gvar.var_3539 = Adap.sdim(1024);
            Adap.tcpgetl(Gvar.var_3537, 1024, Gvar.var_1050);
            Gvar.var_3539 = Gvar.var_3537;
            Gvar.var_3540 = 0;
            Gvar.var_3541 = 0;
            if (Gvar.stat != 0) {
                Gvar.var_3542 = Adap.strmid(Gvar.var_3537, 0, 4);
                Gvar.var_3543 = Adap.strmid(Gvar.var_3537, 4, 250);
                if (Gvar.var_3542 == "倒敵") {
                    await Func.func916();
                    return;
                }
                if (Gvar.var_3542 == "女帝") {
                    await Func.func918();
                    return;
                }
                if (Gvar.var_3542 == "喋背") {
                    await Func.func922();
                    return;
                }
                if (Gvar.var_3542 == "送具") {
                    await Func.func913();
                    return;
                }
                if (Gvar.var_3542 == "捨送") {
                    await Func.func908();
                    Gvar.var_3541 = 1;
                }
                Gvar.var_3544 = 0;
                if (Gvar.var_3542 == "字水") {
                    Gvar.var_3539 = "" + Gvar.var_3543;
                    Gvar.var_3544 = 0;
                    Gvar.var_3540 = 1;
                }
                if (Gvar.var_3542 == "字赤") {
                    Gvar.var_3539 = "" + Gvar.var_3543;
                    Gvar.var_3544 = 1;
                    Gvar.var_3540 = 1;
                }
                if (Gvar.var_3542 == "字青") {
                    Gvar.var_3539 = "" + Gvar.var_3543;
                    Gvar.var_3544 = 2;
                    Gvar.var_3540 = 1;
                }
                if (Gvar.var_3542 == "字黄") {
                    Gvar.var_3539 = "" + Gvar.var_3543;
                    Gvar.var_3544 = 3;
                    Gvar.var_3540 = 1;
                }
                if (Gvar.var_3542 == "行白") {
                    Gvar.var_3539 = "" + Gvar.var_3543;
                    Gvar.var_3544 = 0;
                }
                if (Gvar.var_3542 == "行赤") {
                    Gvar.var_3539 = "" + Gvar.var_3543;
                    Gvar.var_3544 = 1;
                }
                if (Gvar.var_3542 == "行青") {
                    Gvar.var_3539 = "" + Gvar.var_3543;
                    Gvar.var_3544 = 2;
                }
                if (Gvar.var_3542 == "行黄") {
                    Gvar.var_3539 = "" + Gvar.var_3543;
                    Gvar.var_3544 = 3;
                }
                if (Gvar.var_3542 == "行水") {
                    Gvar.var_3539 = "" + Gvar.var_3543;
                    Gvar.var_3544 = 4;
                }
                if (Gvar.var_3542 == "行緑") {
                    Gvar.var_3539 = "" + Gvar.var_3543;
                    Gvar.var_3544 = 5;
                }
                if (Gvar.var_3542 == "行橙") {
                    Gvar.var_3539 = "" + Gvar.var_3543;
                    Gvar.var_3544 = 6;
                }
                if (Gvar.var_3542 == "行紫") {
                    Gvar.var_3539 = "" + Gvar.var_3543;
                    Gvar.var_3544 = 7;
                }
                if (Gvar.var_3542 == "行茶") {
                    Gvar.var_3539 = "" + Gvar.var_3543;
                    Gvar.var_3544 = 8;
                }
                if (Adap.instr(Gvar.var_3537, 0, "さんが接続しました") != (-1)) {
                    Gvar.var_3544 = 6;
                    await Func.func907();
                }
                if (Adap.instr(Gvar.var_3537, 0, "さんは切断しました") != (-1)) {
                    Adap.gsel(33);
                    Gvar.var_3525 = "相手の情報";
                    Adap.title(Gvar.var_3525);
                    Adap.gsel(0);
                }
                if (Gvar.var_3540 == 1) {
                    Adap.notesel(Gvar.var_3526);
                    Gvar.var_447 = Adap.noteinfo(0);
                    if (Gvar.var_447 >= 200) {
                        Adap.notedel(0);
                    }
                    Gvar.var_3526 = Gvar.var_3526 + "\n" + Gvar.var_3539;
                    Adap.sendmsg(Gvar.var_3529, 12, 0, Gvar.var_3526);
                    Gvar.var_447 = Adap.noteinfo(0) - 1;
                    Gvar.var_449 = Adap.noteinfo(1);
                    Adap.sendmsg(Gvar.var_3529, 177, Gvar.var_449, Gvar.var_449);
                    Adap.sendmsg(Gvar.var_3529, 183, 0, 0);
                    return;
                }
                if (Gvar.var_3540 == 0) {
                    Gvar.var_3545 = 33;
                    Gvar.var_3546 = 220;
                    Gvar.var_3547 = 420;
                    Gvar.var_3548 = 440;
                    Gvar.var_3549 = 125;
                    Adap.gsel(33);
                }
                Adap.redraw(0);
                if (Gvar.var_3541 == 0) {
                    Adap.gmode(0);
                    Adap.pos(0, Gvar.var_3549);
                    Adap.gcopy(Gvar.var_3545, 0, Gvar.var_3549 + 20, Gvar.var_3546, Gvar.var_3548);
                    Adap.pos(10, Gvar.var_3547);
                    Adap.color(255, 255, 255);
                    if (Gvar.var_3544 == 1) {
                        Adap.color(255, 0, 0);
                    }
                    if (Gvar.var_3544 == 2) {
                        Adap.color(0, 0, 255);
                    }
                    if (Gvar.var_3544 == 3) {
                        Adap.color(255, 255, 0);
                    }
                    if (Gvar.var_3544 == 4) {
                        Adap.color(0, 255, 255);
                    }
                    if (Gvar.var_3544 == 5) {
                        Adap.color(0, 255, 0);
                    }
                    if (Gvar.var_3544 == 6) {
                        Adap.color(255, 180, 90);
                    }
                    if (Gvar.var_3544 == 7) {
                        Adap.color(240, 0, 240);
                    }
                    if (Gvar.var_3544 == 8) {
                        Adap.color(225, 195, 145);
                    }
                    if (Gvar.var_3544 == 9) {
                        Adap.color(255, 255, 255);
                    }
                    Adap.font(Gvar.font_type, 12);
                    Adap.mes(Gvar.var_3539);
                }
                if (Gvar.var_3540 == 0) {
                    Gvar.var_3233 = 5;
                    Gvar.var_3550 = 3;
                    Gvar.var_3231 = 255;
                    Gvar.var_3232 = 150;
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
                    Adap.line(Gvar.var_3231 - 1, Gvar.var_3232 - 1, Gvar.var_3231 - 1, 9 * Gvar.var_3233 + Gvar.var_3232 + 1);
                    Adap.line(Gvar.var_3231 - 2, Gvar.var_3232 - 1, 9 * Gvar.var_3233 + Gvar.var_3231 + 1, Gvar.var_3232 - 1);
                    Adap.line(9 * Gvar.var_3233 + Gvar.var_3231 + 1, Gvar.var_3232 - 1, 9 * Gvar.var_3233 + Gvar.var_3231 + 1, 9 * Gvar.var_3233 + Gvar.var_3232 + 1);
                    Adap.line(Gvar.var_3231 - 1, 9 * Gvar.var_3233 + Gvar.var_3232 + 1, 9 * Gvar.var_3233 + Gvar.var_3231 + 1, 9 * Gvar.var_3233 + Gvar.var_3232 + 1);
                    Gvar.var_3551 = 0;
                    Gvar.var_449 = 0;
                    for (let cnt4 = 0; cnt4 < 9; ++cnt4) {
                        Gvar.var_447 = 0;
                        for (let cnt5 = 0; cnt5 < 9; ++cnt5) {
                            if (Adap.peek(Gvar.var_1068[25], Gvar.var_3551) == 48) {
                                Adap.color(0, 0, 0);
                                Adap.boxf(Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232, Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231 + Gvar.var_3233, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232 + Gvar.var_3233);
                            }
                            if (Adap.peek(Gvar.var_1068[25], Gvar.var_3551) == 49) {
                                Adap.color(0, 0, 255);
                                Adap.boxf(Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232, Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231 + Gvar.var_3233, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232 + Gvar.var_3233);
                            }
                            if (Adap.peek(Gvar.var_1068[25], Gvar.var_3551) == 55) {
                                Adap.color(0, 0, 150);
                                Adap.boxf(Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232, Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231 + Gvar.var_3233, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232 + Gvar.var_3233);
                            }
                            if (Adap.peek(Gvar.var_1068[25], Gvar.var_3551) == 50) {
                                Adap.color(255, 0, 255);
                                Adap.line(Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231 - 1, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232 - 1, Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231 + 4, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232 + 4);
                                Adap.line(Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231 + 5, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232 - 1, Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232 + 4);
                            }
                            if (Adap.peek(Gvar.var_1068[25], Gvar.var_3551) == 51) {
                                Adap.color(0, 255, 255);
                                Adap.boxf(Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232, Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231 + Gvar.var_3550, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232 + Gvar.var_3550);
                            }
                            if (Adap.peek(Gvar.var_1068[25], Gvar.var_3551) == 52) {
                                Adap.color(255, 0, 0);
                                Adap.boxf(Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232, Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231 + Gvar.var_3550, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232 + Gvar.var_3550);
                            }
                            if (Adap.peek(Gvar.var_1068[25], Gvar.var_3551) == 53) {
                                Adap.color(0, 255, 255);
                                Adap.boxf(Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232, Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231 + Gvar.var_3550, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232 + Gvar.var_3550);
                                Adap.color(0, 0, 255);
                                Adap.pset(Gvar.var_447 * Gvar.var_3233 + Gvar.var_3231 + 1, Gvar.var_449 * Gvar.var_3233 + Gvar.var_3232 + 1);
                            }
                            if (Adap.peek(Gvar.var_1068[25], Gvar.var_3551) == 54) {
                                Adap.color(255, 255, 255);
                                Adap.pset(Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231 + 1, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232);
                                Adap.pset(Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231 + 2, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232);
                                Adap.pset(Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231 + 3, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232);
                                Adap.pset(Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231 + 1, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232 + 4);
                                Adap.pset(Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231 + 2, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232 + 4);
                                Adap.pset(Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231 + 3, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232 + 4);
                                Adap.boxf(Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232 + 1, Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231 + 4, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232 + 3);
                            }
                            if (Adap.peek(Gvar.var_1068[25], Gvar.var_3551) == 56) {
                                Adap.color(255, 255, 0);
                                Adap.boxf(Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232, Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231 + Gvar.var_3550, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232 + Gvar.var_3550);
                            }
                            if (Adap.peek(Gvar.var_1068[25], Gvar.var_3551) == 57) {
                                Adap.color(0, 255, 255);
                                Adap.line(Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231 - 1, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232 - 1, Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231 + 4, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232 + 4);
                                Adap.line(Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231 + 5, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232 - 1, Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232 + 4);
                            }
                            Gvar.var_3551++;
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
                    Gvar.var_3552 = 0;
                    Gvar.var_3553 = Adap.int(Gvar.var_1068[10]);
                    Gvar.var_3552 = Gvar.current_floor - Gvar.var_3553;
                    if (Gvar.dungeon_number != Adap.int(Gvar.var_1068[12])) {
                        Adap.color(150, 150, 150);
                        Adap.mes("（別の場所）");
                    }
                    if (Gvar.dungeon_number == Adap.int(Gvar.var_1068[12])) {
                        if (Gvar.var_3552 < (-2)) {
                            Adap.color(255, 0, 0);
                            Gvar.var_3554 = -Gvar.var_3552;
                            Adap.mes("（" + Gvar.var_3554 + "こ次の階）");
                        }
                        if (Gvar.var_3552 == (-2)) {
                            Adap.color(255, 255, 0);
                            Adap.mes("（2こ次の階）");
                        }
                        if (Gvar.var_3552 == (-1)) {
                            Adap.color(0, 255, 255);
                            Adap.mes("（次の階）");
                        }
                        if (Gvar.var_3552 == 0) {
                            Adap.color(0, 255, 255);
                            Adap.mes("（同じ階）");
                        }
                        if (Gvar.var_3552 == 1) {
                            Adap.color(0, 255, 255);
                            Adap.mes("（前の階）");
                        }
                        if (Gvar.var_3552 == 2) {
                            Adap.color(255, 255, 0);
                            Adap.mes("（2こ前の階）");
                        }
                        if (Gvar.var_3552 > 2) {
                            Adap.color(255, 0, 0);
                            Adap.mes("（" + Gvar.var_3552 + "こ前の階）");
                        }
                    }
                    Adap.pos(Gvar.var_1631 + 5, Gvar.var_1632 + 58);
                    Adap.color(255, 255, 255);
                    if (Adap.int(Gvar.var_1068[5]) > 0) {
                        Gvar.var_3555 = Math.floor(Adap.int(Gvar.var_1068[4]) / Adap.int(Gvar.var_1068[5]));
                    }
                    if (Gvar.var_3555 < 2) {
                        Adap.color(255, 255, 255);
                    }
                    if (Gvar.var_3555 >= 2 || Adap.int(Gvar.var_1068[5]) < 1) {
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
                    Gvar.var_3556 = Gvar.var_1631;
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
                    Gvar.var_3557 = 1;
                    Adap.pos(Gvar.var_3556 + 5, Gvar.var_1632 + 5);
                    Gvar.item_icon_id = Adap.int(Gvar.var_1068[13]);
                    await Func.func070(); // アイテムの表示用アイコン座標指定
                    if (Gvar.item_icon_id != 0) {
                        Adap.gcopy(Gvar.buffer_id, Gvar.buffer_x_axis, Gvar.buffer_y_axis, 40, 40);
                    }
                    Adap.color(1, 1, 1);
                    Adap.pos(Gvar.var_3556 + 5 + 31, Gvar.var_1632 + 5 + 30);
                    Adap.mes("" + Gvar.var_1068[15]);
                    Adap.pos(Gvar.var_3556 + 5 + 33, Gvar.var_1632 + 5 + 30);
                    Adap.mes("" + Gvar.var_1068[15]);
                    Adap.pos(Gvar.var_3556 + 5 + 32, Gvar.var_1632 + 5 + 29);
                    Adap.mes("" + Gvar.var_1068[15]);
                    Adap.pos(Gvar.var_3556 + 5 + 32, Gvar.var_1632 + 5 + 31);
                    Adap.mes("" + Gvar.var_1068[15]);
                    Adap.color(0, 255, 0);
                    Adap.pos(Gvar.var_3556 + 5 + 32, Gvar.var_1632 + 5 + 30);
                    Adap.mes("" + Gvar.var_1068[15]);
                    Adap.pos(Gvar.var_3556 + 60, Gvar.var_1632 + 5);
                    Gvar.item_icon_id = Adap.int(Gvar.var_1068[16]);
                    await Func.func070(); // アイテムの表示用アイコン座標指定
                    if (Gvar.item_icon_id != 0) {
                        Adap.gcopy(Gvar.buffer_id, Gvar.buffer_x_axis, Gvar.buffer_y_axis, 40, 40);
                    }
                    Adap.color(1, 1, 1);
                    Adap.pos(Gvar.var_3556 + 60 + 31, Gvar.var_1632 + 5 + 30);
                    Adap.mes("" + Gvar.var_1068[18]);
                    Adap.pos(Gvar.var_3556 + 60 + 33, Gvar.var_1632 + 5 + 30);
                    Adap.mes("" + Gvar.var_1068[18]);
                    Adap.pos(Gvar.var_3556 + 60 + 32, Gvar.var_1632 + 5 + 29);
                    Adap.mes("" + Gvar.var_1068[18]);
                    Adap.pos(Gvar.var_3556 + 60 + 32, Gvar.var_1632 + 5 + 31);
                    Adap.mes("" + Gvar.var_1068[18]);
                    Adap.color(0, 255, 0);
                    Adap.pos(Gvar.var_3556 + 60 + 32, Gvar.var_1632 + 5 + 30);
                    Adap.mes("" + Gvar.var_1068[18]);
                    Adap.pos(Gvar.var_3556 + 115, Gvar.var_1632 + 5);
                    Gvar.item_icon_id = Adap.int(Gvar.var_1068[19]);
                    await Func.func070(); // アイテムの表示用アイコン座標指定
                    if (Gvar.item_icon_id != 0) {
                        Adap.gcopy(Gvar.buffer_id, Gvar.buffer_x_axis, Gvar.buffer_y_axis, 40, 40);
                    }
                    Gvar.var_3557 = 0;
                    Adap.pos(Gvar.var_3556 - 10, Gvar.var_1632 + 5 + 50);
                    Adap.color(255, 255, 0);
                    Gvar.var_3558 = Adap.int(Gvar.var_1068[13]);
                    await Func.func924();
                    if (Adap.int(Gvar.var_1068[13]) == 0) {
                        Adap.mes("[攻] なし");
                    }
                    if (Adap.int(Gvar.var_1068[13]) != 0) {
                        if (Adap.int(Gvar.var_1068[14]) == 0) {
                            Adap.mes("[攻] " + Gvar.var_3559);
                        }
                        if (Adap.int(Gvar.var_1068[14]) != 0) {
                            Adap.mes("[攻] " + Gvar.var_3559 + "+" + Gvar.var_1068[14]);
                        }
                    }
                    Adap.color(255, 180, 90);
                    Gvar.var_3558 = Adap.int(Gvar.var_1068[16]);
                    await Func.func924();
                    if (Adap.int(Gvar.var_1068[16]) == 0) {
                        Adap.mes("[防] なし");
                    }
                    if (Adap.int(Gvar.var_1068[16]) != 0) {
                        if (Adap.int(Gvar.var_1068[17]) == 0) {
                            Adap.mes("[防] " + Gvar.var_3559);
                        }
                        if (Adap.int(Gvar.var_1068[17]) != 0) {
                            Adap.mes("[防] " + Gvar.var_3559 + "+" + Gvar.var_1068[17]);
                        }
                    }
                    Adap.color(240, 0, 240);
                    Gvar.var_3558 = Adap.int(Gvar.var_1068[19]);
                    await Func.func924();
                    if (Adap.int(Gvar.var_1068[19]) == 0) {
                        Adap.mes("[能] なし");
                    }
                    if (Adap.int(Gvar.var_1068[19]) != 0) {
                        if (Adap.int(Gvar.var_1068[20]) == 0) {
                            Adap.mes("[能] " + Gvar.var_3559);
                        }
                        if (Adap.int(Gvar.var_1068[20]) != 0) {
                            Adap.mes("[能] " + Gvar.var_3559 + "+" + Gvar.var_1068[20]);
                        }
                    }
                    Adap.color(225, 195, 145);
                    Gvar.var_3558 = Adap.int(Gvar.var_1068[2]);
                    await Func.func924();
                    if (Adap.int(Gvar.var_1068[2]) == 0) {
                        Adap.mes("[射] なし");
                    }
                    if (Adap.int(Gvar.var_1068[2]) != 0) {
                        if (Adap.int(Gvar.var_1068[21]) == 0) {
                            Adap.mes("[射] " + Gvar.var_3559);
                        }
                        if (Adap.int(Gvar.var_1068[21]) != 0) {
                            Adap.mes("[射] " + Gvar.var_3559 + "(" + Gvar.var_1068[21] + ")");
                        }
                    }
                }
                Adap.redraw(1);
            }
        }
        return;
}

export {func899}
