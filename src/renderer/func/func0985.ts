import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'
import { tf } from '../i18n'

// 旧 func926
async function func0985(this: any) {
    Adap.netfail(Gvar.var_1050);
    if (Gvar.stat) {
        Gvar.var_407 = 0;
        Adap.netclose(Gvar.var_1050);
        Adap.gsel( Gvar.window_id = 33, Gvar.window_mode = -1);
        Adap.gsel( Gvar.window_id = 30, Gvar.window_mode = -1);
        Adap.gsel( Gvar.window_id = 0, Gvar.window_mode = 1);           
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
        Gvar.var_3845 = "";
        Gvar.var_3891 = "";
        if (Gvar.stat != 0) {
            Gvar.var_3845 = Adap.strmid(Gvar.var_3840, 0, 4);
            Gvar.var_3846 = Adap.strmid(Gvar.var_3840, 4, 250);
            if (Gvar.var_3845 == "字水") {
                Gvar.var_3842 = "" + Gvar.var_3846;
                Gvar.var_3847 = 0;
                Gvar.var_3843 = 1;
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
                Gvar.var_3843 = 0;
                return;
            }
            if (Gvar.var_3845 == "具０" || Gvar.var_3845 == "具１" || Gvar.var_3845 == "具２" || Gvar.var_3845 == "具３" || Gvar.var_3845 == "具４" || Gvar.var_3845 == "具５" || Gvar.var_3845 == "具６" || Gvar.var_3845 == "具７") {
                Gvar.var_3878 = "" + Gvar.var_3845;
                await Func.func0972();
                return;
            }
            Gvar.var_3892 = 99;
            if (Gvar.var_3845 == "捨０") {
                Gvar.var_3892 = 0;
                await Func.func0986();
            }
            if (Gvar.var_3845 == "捨１") {
                Gvar.var_3892 = 1;
                await Func.func0986();
            }
            if (Gvar.var_3845 == "捨２") {
                Gvar.var_3892 = 2;
                await Func.func0986();
            }
            if (Gvar.var_3845 == "捨３") {
                Gvar.var_3892 = 3;
                await Func.func0986();
            }
            if (Gvar.var_3845 == "捨４") {
                Gvar.var_3892 = 4;
                await Func.func0986();
            }
            if (Gvar.var_3845 == "捨５") {
                Gvar.var_3892 = 5;
                await Func.func0986();
            }
            if (Gvar.var_3845 == "捨６") {
                Gvar.var_3892 = 6;
                await Func.func0986();
            }
            if (Gvar.var_3845 == "捨７") {
                Gvar.var_3892 = 7;
                await Func.func0986();
            }
            if (Adap.instr(Gvar.var_3840, 0, "さんが接続しました") != (-1)) {
                Gvar.var_3847 = 6;
                await Func.func0988();
            }
            Gvar.var_3847 = 0;
            Gvar.var_3891 = Adap.strmid(Gvar.var_3840, 0, 2);
            Gvar.var_3893 = 0;
            if (Gvar.var_3891 == "白") {
                Gvar.var_3842 = "" + Gvar.var_3846;
                Gvar.var_3847 = 0;
                Gvar.var_3893 = 1;
            }
            if (Gvar.var_3891 == "赤") {
                Gvar.var_3842 = "" + Gvar.var_3846;
                Gvar.var_3847 = 1;
                Gvar.var_3893 = 1;
            }
            if (Gvar.var_3891 == "青") {
                Gvar.var_3842 = "" + Gvar.var_3846;
                Gvar.var_3847 = 2;
                Gvar.var_3893 = 1;
            }
            if (Gvar.var_3891 == "黄") {
                Gvar.var_3842 = "" + Gvar.var_3846;
                Gvar.var_3847 = 3;
                Gvar.var_3893 = 1;
            }
            if (Gvar.var_3891 == "水") {
                Gvar.var_3842 = "" + Gvar.var_3846;
                Gvar.var_3847 = 4;
                Gvar.var_3893 = 1;
            }
            if (Gvar.var_3891 == "緑") {
                Gvar.var_3842 = "" + Gvar.var_3846;
                Gvar.var_3847 = 5;
                Gvar.var_3893 = 1;
            }
            if (Gvar.var_3891 == "橙") {
                Gvar.var_3842 = "" + Gvar.var_3846;
                Gvar.var_3847 = 6;
                Gvar.var_3893 = 1;
            }
            if (Gvar.var_3891 == "紫") {
                Gvar.var_3842 = "" + Gvar.var_3846;
                Gvar.var_3847 = 7;
                Gvar.var_3893 = 1;
            }
            if (Gvar.var_3891 == "茶") {
                Gvar.var_3842 = "" + Gvar.var_3846;
                Gvar.var_3847 = 8;
                Gvar.var_3893 = 1;
            }
            Gvar.var_3894 = 0;
            if (Gvar.var_3893 == 1) {
                Gvar.var_3895 = Adap.strmid(Gvar.var_3840, 2, 2);
                if (Gvar.var_3895 == "０" && Gvar.var_624 == 1) {
                    Gvar.var_3894 = 1;
                }
                if (Gvar.var_3895 == "１" && Gvar.var_624 == 2) {
                    Gvar.var_3894 = 1;
                }
                if (Gvar.var_3895 == "２" && Gvar.var_624 == 3) {
                    Gvar.var_3894 = 1;
                }
                if (Gvar.var_3895 == "３" && Gvar.var_624 == 4) {
                    Gvar.var_3894 = 1;
                }
                if (Gvar.var_3895 == "４" && Gvar.var_624 == 5) {
                    Gvar.var_3894 = 1;
                }
                if (Gvar.var_3895 == "５" && Gvar.var_624 == 6) {
                    Gvar.var_3894 = 1;
                }
                if (Gvar.var_3895 == "６" && Gvar.var_624 == 7) {
                    Gvar.var_3894 = 1;
                }
                if (Gvar.var_3895 == "７" && Gvar.var_624 == 8) {
                    Gvar.var_3894 = 1;
                }
            }
            if (Gvar.var_3843 == 0) {
                Gvar.var_3848 = 33;
                Gvar.var_3849 = 220;
                Gvar.var_3850 = 420;
                Gvar.var_3851 = 440;
                Gvar.var_3852 = 125;
                Adap.gsel(33);
                Adap.redraw(0);
                if (Gvar.var_624 >= 1) {
                    if (Gvar.var_625 == 1) {
                        Gvar.var_3848 = 33;
                        Gvar.var_3849 = 220;
                        Gvar.var_3850 = 420;
                        Gvar.var_3851 = 440;
                        Gvar.var_3852 = 125;
                        Adap.color(1, 1, 1);
            
                        Adap.boxf(0, Gvar.var_3852, 320, 500);
                        Gvar.var_625 = 0;
                        Gvar.var_3896 = 0;
                        Gvar.var_3897 = Gvar.var_624 - 1;
                        if (Gvar.var_1070[Gvar.var_3897] == Gvar.var_40) {
                            Gvar.var_3896 = 1;
                        }
                        if (Gvar.var_1070[Gvar.var_3897] == "") {
                            Gvar.var_3896 = 1;
                        }
                        if (Gvar.var_3896 == 0) {
                            await Func.func0993();
                        }
                    }
                    Adap.font(Gvar.font_type, 12);
                    Gvar.var_3898 = 0;
                    Gvar.var_3899 = 58;
                    Gvar.var_3900 = Gvar.var_624 - 1;
                    Gvar.var_3901 = Gvar.var_3900 + 1;
                    if (Gvar.var_1069[Gvar.var_3900][4] != 0 && Gvar.var_624 >= 1 && Gvar.var_3896 == 0) {
                        if (Gvar.var_3894 == 1) {
                            Gvar.var_3848 = 33;
                            Gvar.var_3849 = 220;
                            Gvar.var_3850 = 420;
                            Gvar.var_3851 = 440;
                            Gvar.var_3852 = 125;
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
                        Adap.color(0, 0, 80);
                        Adap.boxf(0, 0, 440, 124);
                        Gvar.var_3532 = 5;
                        Gvar.var_3853 = 3;
                        Gvar.var_3530 = 30;
                        Gvar.var_3531 = 18;
                        Adap.color(0, 0, 0);
                        Adap.boxf(Gvar.var_3530 - 1, Gvar.var_3531 - 1, 9 * Gvar.var_3532 + Gvar.var_3531 + 1, 9 * Gvar.var_3532 + Gvar.var_3531 + 1);
                        Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
                        Adap.color(255, 255, 255);
                        Adap.line(Gvar.var_3530 - 1, Gvar.var_3531 - 1, Gvar.var_3530 - 1, 9 * Gvar.var_3532 + Gvar.var_3531 + 1);
                        Adap.line(Gvar.var_3530 - 2, Gvar.var_3531 - 1, 9 * Gvar.var_3532 + Gvar.var_3530 + 1, Gvar.var_3531 - 1);
                        Adap.line(9 * Gvar.var_3532 + Gvar.var_3530 + 1, Gvar.var_3531 - 1, 9 * Gvar.var_3532 + Gvar.var_3530 + 1, 9 * Gvar.var_3532 + Gvar.var_3531 + 1);
                        Adap.line(Gvar.var_3530 - 1, 9 * Gvar.var_3532 + Gvar.var_3531 + 1, 9 * Gvar.var_3532 + Gvar.var_3530 + 1, 9 * Gvar.var_3532 + Gvar.var_3531 + 1);
                        Gvar.var_3854 = 0;
                        Gvar.var_449 = 0;
                        for (let cnt6 = 0; cnt6 < 9; ++cnt6) {
                            Gvar.var_447 = 0;
                            for (let cnt7 = 0; cnt7 < 9; ++cnt7) {
                                if (Adap.peek(Gvar.var_1071[Gvar.var_3900], Gvar.var_3854) == 48) {
                                    Adap.color(0, 0, 0);
                                    Adap.boxf(Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531, Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530 + Gvar.var_3532, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531 + Gvar.var_3532);
                                }
                                if (Adap.peek(Gvar.var_1071[Gvar.var_3900], Gvar.var_3854) == 49) {
                                    Adap.color(0, 0, 255);
                                    Adap.boxf(Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531, Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530 + Gvar.var_3532, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531 + Gvar.var_3532);
                                }
                                if (Adap.peek(Gvar.var_1071[Gvar.var_3900], Gvar.var_3854) == 55) {
                                    Adap.color(0, 0, 150);
                                    Adap.boxf(Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531, Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530 + Gvar.var_3532, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531 + Gvar.var_3532);
                                }
                                if (Adap.peek(Gvar.var_1071[Gvar.var_3900], Gvar.var_3854) == 50) {
                                    Adap.color(255, 0, 255);
                                    Adap.line(Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530 - 1, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531 - 1, Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530 + 4, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531 + 4);
                                    Adap.line(Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530 + 5, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531 - 1, Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531 + 4);
                                }
                                if (Adap.peek(Gvar.var_1071[Gvar.var_3900], Gvar.var_3854) == 51) {
                                    Adap.color(0, 255, 255);
                                    Adap.boxf(Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531, Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530 + Gvar.var_3853, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531 + Gvar.var_3853);
                                }
                                if (Adap.peek(Gvar.var_1071[Gvar.var_3900], Gvar.var_3854) == 52) {
                                    Adap.color(255, 0, 0);
                                    Adap.boxf(Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531, Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530 + Gvar.var_3853, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531 + Gvar.var_3853);
                                }
                                if (Adap.peek(Gvar.var_1071[Gvar.var_3900], Gvar.var_3854) == 53) {
                                    Adap.color(0, 255, 255);
                                    Adap.boxf(Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531, Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530 + Gvar.var_3853, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531 + Gvar.var_3853);
                                    Adap.color(0, 0, 255);
                                    Adap.boxf(Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530 + 1, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531 + 1, Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530 + 2, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531 + 2);
                                }
                                if (Adap.peek(Gvar.var_1071[Gvar.var_3900], Gvar.var_3854) == 54) {
                                    Adap.color(255, 255, 255);
                                    Adap.pset(Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530 + 1, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531);
                                    Adap.pset(Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530 + 2, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531);
                                    Adap.pset(Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530 + 3, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531);
                                    Adap.pset(Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530 + 1, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531 + 4);
                                    Adap.pset(Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530 + 2, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531 + 4);
                                    Adap.pset(Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530 + 3, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531 + 4);
                                    Adap.boxf(Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531 + 1, Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530 + 4, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531 + 3);
                                }
                                if (Adap.peek(Gvar.var_1071[Gvar.var_3900], Gvar.var_3854) == 56) {
                                    Adap.color(255, 255, 0);
                                    Adap.boxf(Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531, Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530 + Gvar.var_3853, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531 + Gvar.var_3853);
                                }
                                if (Adap.peek(Gvar.var_1071[Gvar.var_3900], Gvar.var_3854) == 57) {
                                    Adap.color(0, 255, 255);
                                    Adap.line(Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530 - 1, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531 - 1, Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530 + 4, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531 + 4);
                                    Adap.line(Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530 + 5, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531 - 1, Gvar.var_449 * Gvar.var_3532 + Gvar.var_3530, Gvar.var_447 * Gvar.var_3532 + Gvar.var_3531 + 4);
                                }
                                Gvar.var_3854++;
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
                        Gvar.var_3859 = Gvar.var_1631;
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
                        Gvar.var_3860 = 1;
                        Gvar.var_3902 = 27;
                        Adap.pos(Gvar.var_3859 + 5, Gvar.var_1632 + 5);
                        Gvar.item_icon_id = Gvar.var_1069[Gvar.var_3900][13];
                        await Func.func070(); // アイテムの表示用アイコン座標指定
                        if (Gvar.var_1069[Gvar.var_3900][24] == 0) {
                            Gvar.buffer_id = 11;
                        }
                        if (Gvar.var_1069[Gvar.var_3900][24] == 1) {
                            Gvar.buffer_id = 1;
                        }
                        if (Gvar.var_1069[Gvar.var_3900][24] == 2) {
                            Gvar.buffer_id = 16;
                        }
                        if (Gvar.var_1069[Gvar.var_3900][24] == 3) {
                            Gvar.buffer_id = 29;
                        }
                        if (Gvar.item_icon_id != 0) {
                            Adap.gcopy(Gvar.buffer_id, Gvar.buffer_x_axis, Gvar.buffer_y_axis, 40, 40);
                        }
                        Adap.color(1, 1, 1);
                        Adap.pos(Gvar.var_3859 + 1 + Gvar.var_3902, Gvar.var_1632 + 5 + 30);
                        Adap.mes("[攻]");
                        Adap.pos(Gvar.var_3859 + 3 + Gvar.var_3902, Gvar.var_1632 + 5 + 30);
                        Adap.mes("[攻]");
                        Adap.pos(Gvar.var_3859 + 2 + Gvar.var_3902, Gvar.var_1632 + 5 + 29);
                        Adap.mes("[攻]");
                        Adap.pos(Gvar.var_3859 + 2 + Gvar.var_3902, Gvar.var_1632 + 5 + 31);
                        Adap.mes("[攻]");
                        Adap.color(255, 255, 0);
                        Adap.pos(Gvar.var_3859 + 2 + Gvar.var_3902, Gvar.var_1632 + 5 + 30);
                        Adap.mes("[攻]");
                        Gvar.var_3902 = Gvar.var_3902 + 55;
                        Adap.pos(Gvar.var_3859 + 60, Gvar.var_1632 + 5);
                        Gvar.item_icon_id = Gvar.var_1069[Gvar.var_3900][16];
                        await Func.func070(); // アイテムの表示用アイコン座標指定
                        if (Gvar.var_1069[Gvar.var_3900][26] == 0) {
                            Gvar.buffer_id = 11;
                        }
                        if (Gvar.var_1069[Gvar.var_3900][26] == 1) {
                            Gvar.buffer_id = 1;
                        }
                        if (Gvar.var_1069[Gvar.var_3900][26] == 2) {
                            Gvar.buffer_id = 16;
                        }
                        if (Gvar.var_1069[Gvar.var_3900][26] == 3) {
                            Gvar.buffer_id = 29;
                        }
                        if (Gvar.item_icon_id != 0) {
                            Adap.gcopy(Gvar.buffer_id, Gvar.buffer_x_axis, Gvar.buffer_y_axis, 40, 40);
                        }
                        Adap.color(1, 1, 1);
                        Adap.pos(Gvar.var_3859 + 1 + Gvar.var_3902, Gvar.var_1632 + 5 + 30);
                        Adap.mes("[防]");
                        Adap.pos(Gvar.var_3859 + 3 + Gvar.var_3902, Gvar.var_1632 + 5 + 30);
                        Adap.mes("[防]");
                        Adap.pos(Gvar.var_3859 + 2 + Gvar.var_3902, Gvar.var_1632 + 5 + 29);
                        Adap.mes("[防]");
                        Adap.pos(Gvar.var_3859 + 2 + Gvar.var_3902, Gvar.var_1632 + 5 + 31);
                        Adap.mes("[防]");
                        Adap.color(255, 180, 90);
                        Adap.pos(Gvar.var_3859 + 2 + Gvar.var_3902, Gvar.var_1632 + 5 + 30);
                        Adap.mes("[防]");
                        Gvar.var_3902 = Gvar.var_3902 + 55;
                        Adap.pos(Gvar.var_3859 + 115, Gvar.var_1632 + 5);
                        Gvar.item_icon_id = Gvar.var_1069[Gvar.var_3900][19];
                        await Func.func070(); // アイテムの表示用アイコン座標指定
                        if (Gvar.var_1069[Gvar.var_3900][28] == 0) {
                            Gvar.buffer_id = 11;
                        }
                        if (Gvar.var_1069[Gvar.var_3900][28] == 1) {
                            Gvar.buffer_id = 1;
                        }
                        if (Gvar.var_1069[Gvar.var_3900][28] == 2) {
                            Gvar.buffer_id = 16;
                        }
                        if (Gvar.var_1069[Gvar.var_3900][28] == 3) {
                            Gvar.buffer_id = 29;
                        }
                        if (Gvar.item_icon_id != 0) {
                            Adap.gcopy(Gvar.buffer_id, Gvar.buffer_x_axis, Gvar.buffer_y_axis, 40, 40);
                        }
                        Adap.color(1, 1, 1);
                        Adap.pos(Gvar.var_3859 + 1 + Gvar.var_3902, Gvar.var_1632 + 5 + 30);
                        Adap.mes("[能]");
                        Adap.pos(Gvar.var_3859 + 3 + Gvar.var_3902, Gvar.var_1632 + 5 + 30);
                        Adap.mes("[能]");
                        Adap.pos(Gvar.var_3859 + 2 + Gvar.var_3902, Gvar.var_1632 + 5 + 29);
                        Adap.mes("[能]");
                        Adap.pos(Gvar.var_3859 + 2 + Gvar.var_3902, Gvar.var_1632 + 5 + 31);
                        Adap.mes("[能]");
                        Adap.color(240, 0, 240);
                        Adap.pos(Gvar.var_3859 + 2 + Gvar.var_3902, Gvar.var_1632 + 5 + 30);
                        Adap.mes("[能]");
                        Gvar.var_3860 = 0;
                        Adap.color(0, 255, 0);
                        Adap.pos(10, Gvar.var_3898);
                        Adap.mes(tf("[{0}] {1}", Gvar.var_3901, Gvar.var_1070[Gvar.var_3900]));
                        Adap.color(255, 255, 255);
                        Adap.pos(210, Gvar.var_3898);
                        Gvar.var_3903 = Gvar.var_1069[Gvar.var_3900][12];
                        await Func.func0987();
                        Adap.mes(tf("{0}", Gvar.var_3904));
                        Adap.pos(280, Gvar.var_3898);
                        if (Gvar.var_3903 != 0) {
                            Adap.mes(tf("{0} 階", Gvar.var_1069[Gvar.var_3900][10]));
                        }
                        Adap.pos(10, Gvar.var_3898 + 12 + Gvar.var_3899);
                        Adap.mes(tf("Lv {0}", Gvar.var_1069[Gvar.var_3900][3]));
                        Adap.color(255, 255, 255);
                        Adap.pos(60, Gvar.var_3898 + 12 + Gvar.var_3899);
                        Adap.mes(tf("{0} G", Gvar.var_1069[Gvar.var_3900][11]));
                        Adap.pos(10, Gvar.var_3898 + 24 + Gvar.var_3899);
                        Adap.mes(tf("HP {0}/{1}", Gvar.var_1069[Gvar.var_3900][5], Gvar.var_1069[Gvar.var_3900][4]));
                        Adap.color(255, 255, 255);
                        Adap.pos(10, Gvar.var_3898 + 36 + Gvar.var_3899);
                        Adap.mes(tf("精神 {0}/{1}", Gvar.var_1069[Gvar.var_3900][7], Gvar.var_1069[Gvar.var_3900][6]));
                        Adap.color(255, 255, 255);
                        if (Gvar.var_1069[Gvar.var_3900][8] >= 1) {
                            Adap.color(255, 0, 0);
                        }
                        Adap.pos(10, Gvar.var_3898 + 48 + Gvar.var_3899);
                        Adap.mes(tf("死亡 {0}", Gvar.var_1069[Gvar.var_3900][8]));
                        Adap.color(255, 255, 255);
                        if (Gvar.var_1069[Gvar.var_3900][9] >= 1) {
                            Adap.color(0, 255, 255);
                        }
                        Adap.pos(60, Gvar.var_3898 + 48 + Gvar.var_3899);
                        Adap.mes(tf("クリア {0}", Gvar.var_1069[Gvar.var_3900][9]));
                        Adap.color(255, 255, 255);
                        Adap.pos(0, Gvar.var_3898 + 60 + 56);
                        Adap.mes("―――――――――――――――――――――――――――");
                        Adap.pos(115, Gvar.var_3898 + 12 + 58);
                        Adap.color(255, 255, 0);
                        Gvar.var_3861 = Gvar.var_1069[Gvar.var_3900][13];
                        await Func.func0983();
                        if (Gvar.var_1069[Gvar.var_3900][13] == 0) {
                            Gvar.var_3862 = "なし";
                        }
                        if (Gvar.var_1069[Gvar.var_3900][13] != 0) {
                            if (Gvar.var_1069[Gvar.var_3900][14] != 0) {
                                Gvar.var_3862 = Gvar.var_3862 + "+" + Gvar.var_1069[Gvar.var_3900][14];
                            }
                            if (Gvar.var_1069[Gvar.var_3900][23] >= 2) {
                                Gvar.var_3862 = Gvar.var_3862 + " ★" + Gvar.var_1069[Gvar.var_3900][23];
                            }
                            if (Gvar.var_1069[Gvar.var_3900][24] >= 1) {
                                Gvar.var_3862 = "☆" + Gvar.var_3862;
                            }
                        }
                        Gvar.var_3862 = "[攻]" + Gvar.var_3862;
                        Adap.mes(Gvar.var_3862);
                        Adap.color(255, 180, 90);
                        Gvar.var_3861 = Gvar.var_1069[Gvar.var_3900][16];
                        await Func.func0983();
                        if (Gvar.var_1069[Gvar.var_3900][16] == 0) {
                            Gvar.var_3862 = "なし";
                        }
                        if (Gvar.var_1069[Gvar.var_3900][16] != 0) {
                            if (Gvar.var_1069[Gvar.var_3900][17] != 0) {
                                Gvar.var_3862 = Gvar.var_3862 + "+" + Gvar.var_1069[Gvar.var_3900][17];
                            }
                            if (Gvar.var_1069[Gvar.var_3900][25] >= 2) {
                                Gvar.var_3862 = Gvar.var_3862 + " ★" + Gvar.var_1069[Gvar.var_3900][25];
                            }
                            if (Gvar.var_1069[Gvar.var_3900][26] >= 1) {
                                Gvar.var_3862 = "☆" + Gvar.var_3862;
                            }
                        }
                        Gvar.var_3862 = "[防]" + Gvar.var_3862;
                        Adap.mes(Gvar.var_3862);
                        Adap.color(240, 0, 240);
                        Gvar.var_3861 = Gvar.var_1069[Gvar.var_3900][19];
                        await Func.func0983();
                        if (Gvar.var_1069[Gvar.var_3900][19] == 0) {
                            Gvar.var_3862 = "なし";
                        }
                        if (Gvar.var_1069[Gvar.var_3900][19] != 0) {
                            if (Gvar.var_1069[Gvar.var_3900][20] != 0) {
                                Gvar.var_3862 = Gvar.var_3862 + "+" + Gvar.var_1069[Gvar.var_3900][20];
                            }
                            if (Gvar.var_1069[Gvar.var_3900][27] >= 2) {
                                Gvar.var_3862 = Gvar.var_3862 + " ★" + Gvar.var_1069[Gvar.var_3900][27];
                            }
                            if (Gvar.var_1069[Gvar.var_3900][28] >= 1) {
                                Gvar.var_3862 = "☆" + Gvar.var_3862;
                            }
                        }
                        Gvar.var_3862 = "[能]" + Gvar.var_3862;
                        Adap.mes(Gvar.var_3862);
                        Adap.color(225, 195, 145);
                        Gvar.var_3861 = Gvar.var_1069[Gvar.var_3900][21];
                        await Func.func0983();
                        if (Gvar.var_1069[Gvar.var_3900][21] == 0) {
                            Gvar.var_3862 = "なし";
                        }
                        if (Gvar.var_1069[Gvar.var_3900][21] != 0) {
                            Gvar.var_3862 = Gvar.var_3862 + "+" + Gvar.var_1069[Gvar.var_3900][22];
                        }
                        Gvar.var_3862 = "[射]" + Gvar.var_3862;
                        Adap.mes(Gvar.var_3862);
                    }
                }
                if (Gvar.var_3896 == 1) {
                    Gvar.var_3896 = 0;
                    Gvar.var_624 = 0;
                    await Func.func0993();
                }
                if (Gvar.var_624 == 0) {
                    Adap.color(1, 1, 1);
                    Adap.boxf();
                    Adap.font(Gvar.font_type, 12);
                    Gvar.var_3898 = 0;
                    Gvar.var_3900 = 0;
                    for (let cnt5 = 0; cnt5 < 8; ++cnt5) {
                        if (Gvar.var_1069[Gvar.var_3900][4] != 0) {
                            Gvar.var_3901 = Gvar.var_3900 + 1;
                            Adap.color(0, 255, 0);
                            Adap.pos(10, Gvar.var_3898);
                            Adap.mes(tf("[{0}] {1}", Gvar.var_3901, Gvar.var_1070[Gvar.var_3900]));
                            Adap.color(255, 255, 255);
                            Adap.pos(210, Gvar.var_3898);
                            Gvar.var_3903 = Gvar.var_1069[Gvar.var_3900][12];
                            await Func.func0987();
                            Adap.mes(tf("{0}", Gvar.var_3904));
                            Adap.pos(280, Gvar.var_3898);
                            if (Gvar.var_3903 != 0) {
                                Adap.mes(tf("{0} 階", Gvar.var_1069[Gvar.var_3900][10]));
                            }
                            Adap.pos(10, Gvar.var_3898 + 12);
                            Adap.mes(tf("Lv {0}", Gvar.var_1069[Gvar.var_3900][3]));
                            Adap.color(255, 255, 255);
                            Adap.pos(60, Gvar.var_3898 + 12);
                            Adap.mes(tf("{0} G", Gvar.var_1069[Gvar.var_3900][11]));
                            Adap.pos(10, Gvar.var_3898 + 24);
                            Adap.mes(tf("HP {0}/{1}", Gvar.var_1069[Gvar.var_3900][5], Gvar.var_1069[Gvar.var_3900][4]));
                            Adap.color(255, 255, 255);
                            Adap.pos(10, Gvar.var_3898 + 36);
                            Adap.mes(tf("精神 {0}/{1}", Gvar.var_1069[Gvar.var_3900][7], Gvar.var_1069[Gvar.var_3900][6]));
                            Adap.color(255, 255, 255);
                            Adap.pos(0, Gvar.var_3898 + 46);
                            Adap.mes("―――――――――――――――――――――――――――");
                            Adap.pos(115, Gvar.var_3898 + 12);
                            Adap.color(255, 255, 0);
                            Gvar.var_3861 = Gvar.var_1069[Gvar.var_3900][13];
                            await Func.func0983();
                            if (Gvar.var_1069[Gvar.var_3900][13] == 0) {
                                Gvar.var_3862 = "なし";
                            }
                            if (Gvar.var_1069[Gvar.var_3900][13] != 0) {
                                if (Gvar.var_1069[Gvar.var_3900][14] != 0) {
                                    Gvar.var_3862 = Gvar.var_3862 + "+" + Gvar.var_1069[Gvar.var_3900][14];
                                }
                                if (Gvar.var_1069[Gvar.var_3900][23] >= 2) {
                                    Gvar.var_3862 = Gvar.var_3862 + " ★" + Gvar.var_1069[Gvar.var_3900][23];
                                }
                                if (Gvar.var_1069[Gvar.var_3900][24] >= 1) {
                                    Gvar.var_3862 = "☆" + Gvar.var_3862;
                                }
                            }
                            Gvar.var_3862 = "[攻]" + Gvar.var_3862;
                            Adap.mes(Gvar.var_3862);
                            Adap.color(255, 180, 90);
                            Gvar.var_3861 = Gvar.var_1069[Gvar.var_3900][16];
                            await Func.func0983();
                            if (Gvar.var_1069[Gvar.var_3900][16] == 0) {
                                Gvar.var_3862 = "なし";
                            }
                            if (Gvar.var_1069[Gvar.var_3900][16] != 0) {
                                if (Gvar.var_1069[Gvar.var_3900][17] != 0) {
                                    Gvar.var_3862 = Gvar.var_3862 + "+" + Gvar.var_1069[Gvar.var_3900][17];
                                }
                                if (Gvar.var_1069[Gvar.var_3900][25] >= 2) {
                                    Gvar.var_3862 = Gvar.var_3862 + " ★" + Gvar.var_1069[Gvar.var_3900][25];
                                }
                                if (Gvar.var_1069[Gvar.var_3900][26] >= 1) {
                                    Gvar.var_3862 = "☆" + Gvar.var_3862;
                                }
                            }
                            Gvar.var_3862 = "[防]" + Gvar.var_3862;
                            Adap.mes(Gvar.var_3862);
                            Adap.color(240, 0, 240);
                            Gvar.var_3861 = Gvar.var_1069[Gvar.var_3900][19];
                            await Func.func0983();
                            if (Gvar.var_1069[Gvar.var_3900][19] == 0) {
                                Gvar.var_3862 = "なし";
                            }
                            if (Gvar.var_1069[Gvar.var_3900][19] != 0) {
                                if (Gvar.var_1069[Gvar.var_3900][20] != 0) {
                                    Gvar.var_3862 = Gvar.var_3862 + "+" + Gvar.var_1069[Gvar.var_3900][20];
                                }
                                if (Gvar.var_1069[Gvar.var_3900][27] >= 2) {
                                    Gvar.var_3862 = Gvar.var_3862 + " ★" + Gvar.var_1069[Gvar.var_3900][27];
                                }
                                if (Gvar.var_1069[Gvar.var_3900][28] >= 1) {
                                    Gvar.var_3862 = "☆" + Gvar.var_3862;
                                }
                            }
                            Gvar.var_3862 = "[能]" + Gvar.var_3862;
                            Adap.mes(Gvar.var_3862);
                            Gvar.var_3898 = Gvar.var_3898 + 58;
                        }
                        Gvar.var_3900++;
                    }
                }
            }
            Adap.redraw(1);
        }
    }
    return;
}

export {func0985}
