import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func926(this: any) {
        Adap.dbgprt(926);
        Adap.netfail(Gvar.var_1050);
        if (Gvar.stat) {
            Gvar.var_407 = 0;
            Adap.netclose(Gvar.var_1050);
            Adap.gsel( Gvar.window_id = 33, Gvar.window_mode = -1);
            Adap.gsel( Gvar.window_id = 30, Gvar.window_mode = -1);
            Adap.gsel( Gvar.window_id = 0, Gvar.window_mode = 1);           
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
            Gvar.var_3542 = "";
            Gvar.var_3588 = "";
            if (Gvar.stat != 0) {
                Gvar.var_3542 = Adap.strmid(Gvar.var_3537, 0, 4);
                Gvar.var_3543 = Adap.strmid(Gvar.var_3537, 4, 250);
                if (Gvar.var_3542 == "字水") {
                    Gvar.var_3539 = "" + Gvar.var_3543;
                    Gvar.var_3544 = 0;
                    Gvar.var_3540 = 1;
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
                    Gvar.var_3540 = 0;
                    return;
                }
                if (Gvar.var_3542 == "具０" || Gvar.var_3542 == "具１" || Gvar.var_3542 == "具２" || Gvar.var_3542 == "具３" || Gvar.var_3542 == "具４" || Gvar.var_3542 == "具５" || Gvar.var_3542 == "具６" || Gvar.var_3542 == "具７") {
                    Gvar.var_3575 = "" + Gvar.var_3542;
                    await Func.func913();
                    return;
                }
                Gvar.var_3589 = 99;
                if (Gvar.var_3542 == "捨０") {
                    Gvar.var_3589 = 0;
                    await Func.func927();
                }
                if (Gvar.var_3542 == "捨１") {
                    Gvar.var_3589 = 1;
                    await Func.func927();
                }
                if (Gvar.var_3542 == "捨２") {
                    Gvar.var_3589 = 2;
                    await Func.func927();
                }
                if (Gvar.var_3542 == "捨３") {
                    Gvar.var_3589 = 3;
                    await Func.func927();
                }
                if (Gvar.var_3542 == "捨４") {
                    Gvar.var_3589 = 4;
                    await Func.func927();
                }
                if (Gvar.var_3542 == "捨５") {
                    Gvar.var_3589 = 5;
                    await Func.func927();
                }
                if (Gvar.var_3542 == "捨６") {
                    Gvar.var_3589 = 6;
                    await Func.func927();
                }
                if (Gvar.var_3542 == "捨７") {
                    Gvar.var_3589 = 7;
                    await Func.func927();
                }
                if (Adap.instr(Gvar.var_3537, 0, "さんが接続しました") != (-1)) {
                    Gvar.var_3544 = 6;
                    await Func.func929();
                }
                Gvar.var_3544 = 0;
                Gvar.var_3588 = Adap.strmid(Gvar.var_3537, 0, 2);
                Gvar.var_3590 = 0;
                if (Gvar.var_3588 == "白") {
                    Gvar.var_3539 = "" + Gvar.var_3543;
                    Gvar.var_3544 = 0;
                    Gvar.var_3590 = 1;
                }
                if (Gvar.var_3588 == "赤") {
                    Gvar.var_3539 = "" + Gvar.var_3543;
                    Gvar.var_3544 = 1;
                    Gvar.var_3590 = 1;
                }
                if (Gvar.var_3588 == "青") {
                    Gvar.var_3539 = "" + Gvar.var_3543;
                    Gvar.var_3544 = 2;
                    Gvar.var_3590 = 1;
                }
                if (Gvar.var_3588 == "黄") {
                    Gvar.var_3539 = "" + Gvar.var_3543;
                    Gvar.var_3544 = 3;
                    Gvar.var_3590 = 1;
                }
                if (Gvar.var_3588 == "水") {
                    Gvar.var_3539 = "" + Gvar.var_3543;
                    Gvar.var_3544 = 4;
                    Gvar.var_3590 = 1;
                }
                if (Gvar.var_3588 == "緑") {
                    Gvar.var_3539 = "" + Gvar.var_3543;
                    Gvar.var_3544 = 5;
                    Gvar.var_3590 = 1;
                }
                if (Gvar.var_3588 == "橙") {
                    Gvar.var_3539 = "" + Gvar.var_3543;
                    Gvar.var_3544 = 6;
                    Gvar.var_3590 = 1;
                }
                if (Gvar.var_3588 == "紫") {
                    Gvar.var_3539 = "" + Gvar.var_3543;
                    Gvar.var_3544 = 7;
                    Gvar.var_3590 = 1;
                }
                if (Gvar.var_3588 == "茶") {
                    Gvar.var_3539 = "" + Gvar.var_3543;
                    Gvar.var_3544 = 8;
                    Gvar.var_3590 = 1;
                }
                Gvar.var_3591 = 0;
                if (Gvar.var_3590 == 1) {
                    Gvar.var_3592 = Adap.strmid(Gvar.var_3537, 2, 2);
                    if (Gvar.var_3592 == "０" && Gvar.var_624 == 1) {
                        Gvar.var_3591 = 1;
                    }
                    if (Gvar.var_3592 == "１" && Gvar.var_624 == 2) {
                        Gvar.var_3591 = 1;
                    }
                    if (Gvar.var_3592 == "２" && Gvar.var_624 == 3) {
                        Gvar.var_3591 = 1;
                    }
                    if (Gvar.var_3592 == "３" && Gvar.var_624 == 4) {
                        Gvar.var_3591 = 1;
                    }
                    if (Gvar.var_3592 == "４" && Gvar.var_624 == 5) {
                        Gvar.var_3591 = 1;
                    }
                    if (Gvar.var_3592 == "５" && Gvar.var_624 == 6) {
                        Gvar.var_3591 = 1;
                    }
                    if (Gvar.var_3592 == "６" && Gvar.var_624 == 7) {
                        Gvar.var_3591 = 1;
                    }
                    if (Gvar.var_3592 == "７" && Gvar.var_624 == 8) {
                        Gvar.var_3591 = 1;
                    }
                }
                if (Gvar.var_3540 == 0) {
                    Gvar.var_3545 = 33;
                    Gvar.var_3546 = 220;
                    Gvar.var_3547 = 420;
                    Gvar.var_3548 = 440;
                    Gvar.var_3549 = 125;
                    Adap.gsel(33);
                    Adap.redraw(0);
                    if (Gvar.var_624 >= 1) {
                        if (Gvar.var_625 == 1) {
                            Gvar.var_3545 = 33;
                            Gvar.var_3546 = 220;
                            Gvar.var_3547 = 420;
                            Gvar.var_3548 = 440;
                            Gvar.var_3549 = 125;
                            Adap.color(1, 1, 1);
                
                            Adap.boxf(0, Gvar.var_3549, 320, 500);
                            Gvar.var_625 = 0;
                            Gvar.var_3593 = 0;
                            Gvar.var_3594 = Gvar.var_624 - 1;
                            if (Gvar.var_1070[Gvar.var_3594] == Gvar.var_40) {
                                Gvar.var_3593 = 1;
                            }
                            if (Gvar.var_1070[Gvar.var_3594] == "") {
                                Gvar.var_3593 = 1;
                            }
                            if (Gvar.var_3593 == 0) {
                                await Func.func934();
                            }
                        }
                        Adap.font(Gvar.font_type, 12);
                        Gvar.var_3595 = 0;
                        Gvar.var_3596 = 58;
                        Gvar.var_3597 = Gvar.var_624 - 1;
                        Gvar.var_3598 = Gvar.var_3597 + 1;
                        if (Gvar.var_1069[Gvar.var_3597][4] != 0 && Gvar.var_624 >= 1 && Gvar.var_3593 == 0) {
                            if (Gvar.var_3591 == 1) {
                                Gvar.var_3545 = 33;
                                Gvar.var_3546 = 220;
                                Gvar.var_3547 = 420;
                                Gvar.var_3548 = 440;
                                Gvar.var_3549 = 125;
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
                            Adap.color(0, 0, 80);
                            Adap.boxf(0, 0, 440, 124);
                            Gvar.var_3233 = 5;
                            Gvar.var_3550 = 3;
                            Gvar.var_3231 = 30;
                            Gvar.var_3232 = 18;
                            Adap.color(0, 0, 0);
                            Adap.boxf(Gvar.var_3231 - 1, Gvar.var_3232 - 1, 9 * Gvar.var_3233 + Gvar.var_3232 + 1, 9 * Gvar.var_3233 + Gvar.var_3232 + 1);
                            Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
                            Adap.color(255, 255, 255);
                            Adap.line(Gvar.var_3231 - 1, Gvar.var_3232 - 1, Gvar.var_3231 - 1, 9 * Gvar.var_3233 + Gvar.var_3232 + 1);
                            Adap.line(Gvar.var_3231 - 2, Gvar.var_3232 - 1, 9 * Gvar.var_3233 + Gvar.var_3231 + 1, Gvar.var_3232 - 1);
                            Adap.line(9 * Gvar.var_3233 + Gvar.var_3231 + 1, Gvar.var_3232 - 1, 9 * Gvar.var_3233 + Gvar.var_3231 + 1, 9 * Gvar.var_3233 + Gvar.var_3232 + 1);
                            Adap.line(Gvar.var_3231 - 1, 9 * Gvar.var_3233 + Gvar.var_3232 + 1, 9 * Gvar.var_3233 + Gvar.var_3231 + 1, 9 * Gvar.var_3233 + Gvar.var_3232 + 1);
                            Gvar.var_3551 = 0;
                            Gvar.var_449 = 0;
                            for (let cnt6 = 0; cnt6 < 9; ++cnt6) {
                                Gvar.var_447 = 0;
                                for (let cnt7 = 0; cnt7 < 9; ++cnt7) {
                                    if (Adap.peek(Gvar.var_1071[Gvar.var_3597], Gvar.var_3551) == 48) {
                                        Adap.color(0, 0, 0);
                                        Adap.boxf(Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232, Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231 + Gvar.var_3233, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232 + Gvar.var_3233);
                                    }
                                    if (Adap.peek(Gvar.var_1071[Gvar.var_3597], Gvar.var_3551) == 49) {
                                        Adap.color(0, 0, 255);
                                        Adap.boxf(Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232, Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231 + Gvar.var_3233, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232 + Gvar.var_3233);
                                    }
                                    if (Adap.peek(Gvar.var_1071[Gvar.var_3597], Gvar.var_3551) == 55) {
                                        Adap.color(0, 0, 150);
                                        Adap.boxf(Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232, Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231 + Gvar.var_3233, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232 + Gvar.var_3233);
                                    }
                                    if (Adap.peek(Gvar.var_1071[Gvar.var_3597], Gvar.var_3551) == 50) {
                                        Adap.color(255, 0, 255);
                                        Adap.line(Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231 - 1, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232 - 1, Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231 + 4, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232 + 4);
                                        Adap.line(Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231 + 5, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232 - 1, Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232 + 4);
                                    }
                                    if (Adap.peek(Gvar.var_1071[Gvar.var_3597], Gvar.var_3551) == 51) {
                                        Adap.color(0, 255, 255);
                                        Adap.boxf(Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232, Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231 + Gvar.var_3550, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232 + Gvar.var_3550);
                                    }
                                    if (Adap.peek(Gvar.var_1071[Gvar.var_3597], Gvar.var_3551) == 52) {
                                        Adap.color(255, 0, 0);
                                        Adap.boxf(Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232, Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231 + Gvar.var_3550, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232 + Gvar.var_3550);
                                    }
                                    if (Adap.peek(Gvar.var_1071[Gvar.var_3597], Gvar.var_3551) == 53) {
                                        Adap.color(0, 255, 255);
                                        Adap.boxf(Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232, Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231 + Gvar.var_3550, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232 + Gvar.var_3550);
                                        Adap.color(0, 0, 255);
                                        Adap.boxf(Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231 + 1, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232 + 1, Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231 + 2, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232 + 2);
                                    }
                                    if (Adap.peek(Gvar.var_1071[Gvar.var_3597], Gvar.var_3551) == 54) {
                                        Adap.color(255, 255, 255);
                                        Adap.pset(Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231 + 1, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232);
                                        Adap.pset(Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231 + 2, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232);
                                        Adap.pset(Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231 + 3, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232);
                                        Adap.pset(Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231 + 1, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232 + 4);
                                        Adap.pset(Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231 + 2, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232 + 4);
                                        Adap.pset(Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231 + 3, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232 + 4);
                                        Adap.boxf(Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232 + 1, Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231 + 4, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232 + 3);
                                    }
                                    if (Adap.peek(Gvar.var_1071[Gvar.var_3597], Gvar.var_3551) == 56) {
                                        Adap.color(255, 255, 0);
                                        Adap.boxf(Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232, Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231 + Gvar.var_3550, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232 + Gvar.var_3550);
                                    }
                                    if (Adap.peek(Gvar.var_1071[Gvar.var_3597], Gvar.var_3551) == 57) {
                                        Adap.color(0, 255, 255);
                                        Adap.line(Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231 - 1, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232 - 1, Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231 + 4, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232 + 4);
                                        Adap.line(Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231 + 5, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232 - 1, Gvar.var_449 * Gvar.var_3233 + Gvar.var_3231, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3232 + 4);
                                    }
                                    Gvar.var_3551++;
                                    Gvar.var_447++;
                                }
                                Gvar.var_449++;
                            }
                            Gvar.var_1631 = 115;
                            Gvar.var_1632 = 15;
                            Gvar.var_1633 = 50;
                            Gvar.var_1634 = 50;
                            Gvar.var_1635 = 0;
                            Gvar.var_1636 = 0;
                            Gvar.var_3556 = Gvar.var_1631;
                            for (let cnt6 = 0; cnt6 < 3; ++cnt6) {
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
                            Gvar.var_3599 = 27;
                            Adap.pos(Gvar.var_3556 + 5, Gvar.var_1632 + 5);
                            Gvar.item_icon_id = Gvar.var_1069[Gvar.var_3597][13];
                            await Func.func070(); // アイテムの表示用アイコン座標指定
                            if (Gvar.var_1069[Gvar.var_3597][24] == 0) {
                                Gvar.buffer_id = 11;
                            }
                            if (Gvar.var_1069[Gvar.var_3597][24] == 1) {
                                Gvar.buffer_id = 1;
                            }
                            if (Gvar.var_1069[Gvar.var_3597][24] == 2) {
                                Gvar.buffer_id = 16;
                            }
                            if (Gvar.var_1069[Gvar.var_3597][24] == 3) {
                                Gvar.buffer_id = 29;
                            }
                            if (Gvar.item_icon_id != 0) {
                                Adap.gcopy(Gvar.buffer_id, Gvar.buffer_x_axis, Gvar.buffer_y_axis, 40, 40);
                            }
                            Adap.color(1, 1, 1);
                            Adap.pos(Gvar.var_3556 + 1 + Gvar.var_3599, Gvar.var_1632 + 5 + 30);
                            Adap.mes("[攻]");
                            Adap.pos(Gvar.var_3556 + 3 + Gvar.var_3599, Gvar.var_1632 + 5 + 30);
                            Adap.mes("[攻]");
                            Adap.pos(Gvar.var_3556 + 2 + Gvar.var_3599, Gvar.var_1632 + 5 + 29);
                            Adap.mes("[攻]");
                            Adap.pos(Gvar.var_3556 + 2 + Gvar.var_3599, Gvar.var_1632 + 5 + 31);
                            Adap.mes("[攻]");
                            Adap.color(255, 255, 0);
                            Adap.pos(Gvar.var_3556 + 2 + Gvar.var_3599, Gvar.var_1632 + 5 + 30);
                            Adap.mes("[攻]");
                            Gvar.var_3599 = Gvar.var_3599 + 55;
                            Adap.pos(Gvar.var_3556 + 60, Gvar.var_1632 + 5);
                            Gvar.item_icon_id = Gvar.var_1069[Gvar.var_3597][16];
                            await Func.func070(); // アイテムの表示用アイコン座標指定
                            if (Gvar.var_1069[Gvar.var_3597][26] == 0) {
                                Gvar.buffer_id = 11;
                            }
                            if (Gvar.var_1069[Gvar.var_3597][26] == 1) {
                                Gvar.buffer_id = 1;
                            }
                            if (Gvar.var_1069[Gvar.var_3597][26] == 2) {
                                Gvar.buffer_id = 16;
                            }
                            if (Gvar.var_1069[Gvar.var_3597][26] == 3) {
                                Gvar.buffer_id = 29;
                            }
                            if (Gvar.item_icon_id != 0) {
                                Adap.gcopy(Gvar.buffer_id, Gvar.buffer_x_axis, Gvar.buffer_y_axis, 40, 40);
                            }
                            Adap.color(1, 1, 1);
                            Adap.pos(Gvar.var_3556 + 1 + Gvar.var_3599, Gvar.var_1632 + 5 + 30);
                            Adap.mes("[防]");
                            Adap.pos(Gvar.var_3556 + 3 + Gvar.var_3599, Gvar.var_1632 + 5 + 30);
                            Adap.mes("[防]");
                            Adap.pos(Gvar.var_3556 + 2 + Gvar.var_3599, Gvar.var_1632 + 5 + 29);
                            Adap.mes("[防]");
                            Adap.pos(Gvar.var_3556 + 2 + Gvar.var_3599, Gvar.var_1632 + 5 + 31);
                            Adap.mes("[防]");
                            Adap.color(255, 180, 90);
                            Adap.pos(Gvar.var_3556 + 2 + Gvar.var_3599, Gvar.var_1632 + 5 + 30);
                            Adap.mes("[防]");
                            Gvar.var_3599 = Gvar.var_3599 + 55;
                            Adap.pos(Gvar.var_3556 + 115, Gvar.var_1632 + 5);
                            Gvar.item_icon_id = Gvar.var_1069[Gvar.var_3597][19];
                            await Func.func070(); // アイテムの表示用アイコン座標指定
                            if (Gvar.var_1069[Gvar.var_3597][28] == 0) {
                                Gvar.buffer_id = 11;
                            }
                            if (Gvar.var_1069[Gvar.var_3597][28] == 1) {
                                Gvar.buffer_id = 1;
                            }
                            if (Gvar.var_1069[Gvar.var_3597][28] == 2) {
                                Gvar.buffer_id = 16;
                            }
                            if (Gvar.var_1069[Gvar.var_3597][28] == 3) {
                                Gvar.buffer_id = 29;
                            }
                            if (Gvar.item_icon_id != 0) {
                                Adap.gcopy(Gvar.buffer_id, Gvar.buffer_x_axis, Gvar.buffer_y_axis, 40, 40);
                            }
                            Adap.color(1, 1, 1);
                            Adap.pos(Gvar.var_3556 + 1 + Gvar.var_3599, Gvar.var_1632 + 5 + 30);
                            Adap.mes("[能]");
                            Adap.pos(Gvar.var_3556 + 3 + Gvar.var_3599, Gvar.var_1632 + 5 + 30);
                            Adap.mes("[能]");
                            Adap.pos(Gvar.var_3556 + 2 + Gvar.var_3599, Gvar.var_1632 + 5 + 29);
                            Adap.mes("[能]");
                            Adap.pos(Gvar.var_3556 + 2 + Gvar.var_3599, Gvar.var_1632 + 5 + 31);
                            Adap.mes("[能]");
                            Adap.color(240, 0, 240);
                            Adap.pos(Gvar.var_3556 + 2 + Gvar.var_3599, Gvar.var_1632 + 5 + 30);
                            Adap.mes("[能]");
                            Gvar.var_3557 = 0;
                            Adap.color(0, 255, 0);
                            Adap.pos(10, Gvar.var_3595);
                            Adap.mes("[" + Gvar.var_3598 + "] " + Gvar.var_1070[Gvar.var_3597]);
                            Adap.color(255, 255, 255);
                            Adap.pos(210, Gvar.var_3595);
                            Gvar.var_3600 = Gvar.var_1069[Gvar.var_3597][12];
                            await Func.func928();
                            Adap.mes("" + Gvar.var_3601);
                            Adap.pos(280, Gvar.var_3595);
                            if (Gvar.var_3600 != 0) {
                                Adap.mes("" + Gvar.var_1069[Gvar.var_3597][10] + " 階");
                            }
                            Adap.pos(10, Gvar.var_3595 + 12 + Gvar.var_3596);
                            Adap.mes("Lv " + Gvar.var_1069[Gvar.var_3597][3]);
                            Adap.color(255, 255, 255);
                            Adap.pos(60, Gvar.var_3595 + 12 + Gvar.var_3596);
                            Adap.mes("" + Gvar.var_1069[Gvar.var_3597][11] + " G");
                            Adap.pos(10, Gvar.var_3595 + 24 + Gvar.var_3596);
                            Adap.mes("HP " + Gvar.var_1069[Gvar.var_3597][5] + "/" + Gvar.var_1069[Gvar.var_3597][4]);
                            Adap.color(255, 255, 255);
                            Adap.pos(10, Gvar.var_3595 + 36 + Gvar.var_3596);
                            Adap.mes("精神 " + Gvar.var_1069[Gvar.var_3597][7] + "/" + Gvar.var_1069[Gvar.var_3597][6]);
                            Adap.color(255, 255, 255);
                            if (Gvar.var_1069[Gvar.var_3597][8] >= 1) {
                                Adap.color(255, 0, 0);
                            }
                            Adap.pos(10, Gvar.var_3595 + 48 + Gvar.var_3596);
                            Adap.mes("死亡 " + Gvar.var_1069[Gvar.var_3597][8]);
                            Adap.color(255, 255, 255);
                            if (Gvar.var_1069[Gvar.var_3597][9] >= 1) {
                                Adap.color(0, 255, 255);
                            }
                            Adap.pos(60, Gvar.var_3595 + 48 + Gvar.var_3596);
                            Adap.mes("クリア " + Gvar.var_1069[Gvar.var_3597][9]);
                            Adap.color(255, 255, 255);
                            Adap.pos(0, Gvar.var_3595 + 60 + 56);
                            Adap.mes("―――――――――――――――――――――――――――");
                            Adap.pos(115, Gvar.var_3595 + 12 + 58);
                            Adap.color(255, 255, 0);
                            Gvar.var_3558 = Gvar.var_1069[Gvar.var_3597][13];
                            await Func.func924();
                            if (Gvar.var_1069[Gvar.var_3597][13] == 0) {
                                Gvar.var_3559 = "なし";
                            }
                            if (Gvar.var_1069[Gvar.var_3597][13] != 0) {
                                if (Gvar.var_1069[Gvar.var_3597][14] != 0) {
                                    Gvar.var_3559 = Gvar.var_3559 + "+" + Gvar.var_1069[Gvar.var_3597][14];
                                }
                                if (Gvar.var_1069[Gvar.var_3597][23] >= 2) {
                                    Gvar.var_3559 = Gvar.var_3559 + " ★" + Gvar.var_1069[Gvar.var_3597][23];
                                }
                                if (Gvar.var_1069[Gvar.var_3597][24] >= 1) {
                                    Gvar.var_3559 = "☆" + Gvar.var_3559;
                                }
                            }
                            Gvar.var_3559 = "[攻]" + Gvar.var_3559;
                            Adap.mes(Gvar.var_3559);
                            Adap.color(255, 180, 90);
                            Gvar.var_3558 = Gvar.var_1069[Gvar.var_3597][16];
                            await Func.func924();
                            if (Gvar.var_1069[Gvar.var_3597][16] == 0) {
                                Gvar.var_3559 = "なし";
                            }
                            if (Gvar.var_1069[Gvar.var_3597][16] != 0) {
                                if (Gvar.var_1069[Gvar.var_3597][17] != 0) {
                                    Gvar.var_3559 = Gvar.var_3559 + "+" + Gvar.var_1069[Gvar.var_3597][17];
                                }
                                if (Gvar.var_1069[Gvar.var_3597][25] >= 2) {
                                    Gvar.var_3559 = Gvar.var_3559 + " ★" + Gvar.var_1069[Gvar.var_3597][25];
                                }
                                if (Gvar.var_1069[Gvar.var_3597][26] >= 1) {
                                    Gvar.var_3559 = "☆" + Gvar.var_3559;
                                }
                            }
                            Gvar.var_3559 = "[防]" + Gvar.var_3559;
                            Adap.mes(Gvar.var_3559);
                            Adap.color(240, 0, 240);
                            Gvar.var_3558 = Gvar.var_1069[Gvar.var_3597][19];
                            await Func.func924();
                            if (Gvar.var_1069[Gvar.var_3597][19] == 0) {
                                Gvar.var_3559 = "なし";
                            }
                            if (Gvar.var_1069[Gvar.var_3597][19] != 0) {
                                if (Gvar.var_1069[Gvar.var_3597][20] != 0) {
                                    Gvar.var_3559 = Gvar.var_3559 + "+" + Gvar.var_1069[Gvar.var_3597][20];
                                }
                                if (Gvar.var_1069[Gvar.var_3597][27] >= 2) {
                                    Gvar.var_3559 = Gvar.var_3559 + " ★" + Gvar.var_1069[Gvar.var_3597][27];
                                }
                                if (Gvar.var_1069[Gvar.var_3597][28] >= 1) {
                                    Gvar.var_3559 = "☆" + Gvar.var_3559;
                                }
                            }
                            Gvar.var_3559 = "[能]" + Gvar.var_3559;
                            Adap.mes(Gvar.var_3559);
                            Adap.color(225, 195, 145);
                            Gvar.var_3558 = Gvar.var_1069[Gvar.var_3597][21];
                            await Func.func924();
                            if (Gvar.var_1069[Gvar.var_3597][21] == 0) {
                                Gvar.var_3559 = "なし";
                            }
                            if (Gvar.var_1069[Gvar.var_3597][21] != 0) {
                                Gvar.var_3559 = Gvar.var_3559 + "+" + Gvar.var_1069[Gvar.var_3597][22];
                            }
                            Gvar.var_3559 = "[射]" + Gvar.var_3559;
                            Adap.mes(Gvar.var_3559);
                        }
                    }
                    if (Gvar.var_3593 == 1) {
                        Gvar.var_3593 = 0;
                        Gvar.var_624 = 0;
                        await Func.func934();
                    }
                    if (Gvar.var_624 == 0) {
                        Adap.color(1, 1, 1);
                        Adap.boxf();
                        Adap.font(Gvar.font_type, 12);
                        Gvar.var_3595 = 0;
                        Gvar.var_3597 = 0;
                        for (let cnt5 = 0; cnt5 < 8; ++cnt5) {
                            if (Gvar.var_1069[Gvar.var_3597][4] != 0) {
                                Gvar.var_3598 = Gvar.var_3597 + 1;
                                Adap.color(0, 255, 0);
                                Adap.pos(10, Gvar.var_3595);
                                Adap.mes("[" + Gvar.var_3598 + "] " + Gvar.var_1070[Gvar.var_3597]);
                                Adap.color(255, 255, 255);
                                Adap.pos(210, Gvar.var_3595);
                                Gvar.var_3600 = Gvar.var_1069[Gvar.var_3597][12];
                                await Func.func928();
                                Adap.mes("" + Gvar.var_3601);
                                Adap.pos(280, Gvar.var_3595);
                                if (Gvar.var_3600 != 0) {
                                    Adap.mes("" + Gvar.var_1069[Gvar.var_3597][10] + " 階");
                                }
                                Adap.pos(10, Gvar.var_3595 + 12);
                                Adap.mes("Lv " + Gvar.var_1069[Gvar.var_3597][3]);
                                Adap.color(255, 255, 255);
                                Adap.pos(60, Gvar.var_3595 + 12);
                                Adap.mes("" + Gvar.var_1069[Gvar.var_3597][11] + " G");
                                Adap.pos(10, Gvar.var_3595 + 24);
                                Adap.mes("HP " + Gvar.var_1069[Gvar.var_3597][5] + "/" + Gvar.var_1069[Gvar.var_3597][4]);
                                Adap.color(255, 255, 255);
                                Adap.pos(10, Gvar.var_3595 + 36);
                                Adap.mes("精神 " + Gvar.var_1069[Gvar.var_3597][7] + "/" + Gvar.var_1069[Gvar.var_3597][6]);
                                Adap.color(255, 255, 255);
                                Adap.pos(0, Gvar.var_3595 + 46);
                                Adap.mes("―――――――――――――――――――――――――――");
                                Adap.pos(115, Gvar.var_3595 + 12);
                                Adap.color(255, 255, 0);
                                Gvar.var_3558 = Gvar.var_1069[Gvar.var_3597][13];
                                await Func.func924();
                                if (Gvar.var_1069[Gvar.var_3597][13] == 0) {
                                    Gvar.var_3559 = "なし";
                                }
                                if (Gvar.var_1069[Gvar.var_3597][13] != 0) {
                                    if (Gvar.var_1069[Gvar.var_3597][14] != 0) {
                                        Gvar.var_3559 = Gvar.var_3559 + "+" + Gvar.var_1069[Gvar.var_3597][14];
                                    }
                                    if (Gvar.var_1069[Gvar.var_3597][23] >= 2) {
                                        Gvar.var_3559 = Gvar.var_3559 + " ★" + Gvar.var_1069[Gvar.var_3597][23];
                                    }
                                    if (Gvar.var_1069[Gvar.var_3597][24] >= 1) {
                                        Gvar.var_3559 = "☆" + Gvar.var_3559;
                                    }
                                }
                                Gvar.var_3559 = "[攻]" + Gvar.var_3559;
                                Adap.mes(Gvar.var_3559);
                                Adap.color(255, 180, 90);
                                Gvar.var_3558 = Gvar.var_1069[Gvar.var_3597][16];
                                await Func.func924();
                                if (Gvar.var_1069[Gvar.var_3597][16] == 0) {
                                    Gvar.var_3559 = "なし";
                                }
                                if (Gvar.var_1069[Gvar.var_3597][16] != 0) {
                                    if (Gvar.var_1069[Gvar.var_3597][17] != 0) {
                                        Gvar.var_3559 = Gvar.var_3559 + "+" + Gvar.var_1069[Gvar.var_3597][17];
                                    }
                                    if (Gvar.var_1069[Gvar.var_3597][25] >= 2) {
                                        Gvar.var_3559 = Gvar.var_3559 + " ★" + Gvar.var_1069[Gvar.var_3597][25];
                                    }
                                    if (Gvar.var_1069[Gvar.var_3597][26] >= 1) {
                                        Gvar.var_3559 = "☆" + Gvar.var_3559;
                                    }
                                }
                                Gvar.var_3559 = "[防]" + Gvar.var_3559;
                                Adap.mes(Gvar.var_3559);
                                Adap.color(240, 0, 240);
                                Gvar.var_3558 = Gvar.var_1069[Gvar.var_3597][19];
                                await Func.func924();
                                if (Gvar.var_1069[Gvar.var_3597][19] == 0) {
                                    Gvar.var_3559 = "なし";
                                }
                                if (Gvar.var_1069[Gvar.var_3597][19] != 0) {
                                    if (Gvar.var_1069[Gvar.var_3597][20] != 0) {
                                        Gvar.var_3559 = Gvar.var_3559 + "+" + Gvar.var_1069[Gvar.var_3597][20];
                                    }
                                    if (Gvar.var_1069[Gvar.var_3597][27] >= 2) {
                                        Gvar.var_3559 = Gvar.var_3559 + " ★" + Gvar.var_1069[Gvar.var_3597][27];
                                    }
                                    if (Gvar.var_1069[Gvar.var_3597][28] >= 1) {
                                        Gvar.var_3559 = "☆" + Gvar.var_3559;
                                    }
                                }
                                Gvar.var_3559 = "[能]" + Gvar.var_3559;
                                Adap.mes(Gvar.var_3559);
                                Gvar.var_3595 = Gvar.var_3595 + 58;
                            }
                            Gvar.var_3597++;
                        }
                    }
                }
                Adap.redraw(1);
            }
        }
        return;
}

export {func926}
