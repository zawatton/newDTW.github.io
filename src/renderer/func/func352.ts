/**
 * func352 — func352 装備disc攻撃モーションドット座標指定
 *
 * (org原典: newDTW_func3)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func352(this: any) {
        Adap.dbgprt(352);
        if (Gvar.kougeki_disc_id  > 0 && Gvar.var_1280 == 0 && Gvar.kougeki_disc_id  != 122) {
            Gvar.var_1281 = 0;
            if (Gvar.var_243 == 1) {
                Gvar.var_1281 = 8;
            }
            if (Gvar.var_243 == 2) {
                Gvar.var_1281 = 4;
            }
            if (Gvar.var_243 == 3) {
                Gvar.var_1281 = 2;
            }
            if (Gvar.var_243 == 8) {
                Gvar.var_1281 = 2;
            }
            if (Gvar.var_243 == 9) {
                Gvar.var_1281 = 3;
            }
            if (Gvar.var_199 == 4) {
                Adap.pos(160 - 30 + Gvar.var_1281, 150);
            }
            if (Gvar.var_199 == 6) {
                Adap.pos(160 + 30 - Gvar.var_1281, 150);
            }
            if (Gvar.var_199 == 2) {
                Adap.pos(160, 150 + 30 - Gvar.var_1281);
            }
            if (Gvar.var_199 == 8) {
                Adap.pos(160, 150 - 30 + Gvar.var_1281);
            }
            if (Gvar.var_199 == 1) {
                Adap.pos(160 - 30 + Gvar.var_1281, 150 + 30 - Gvar.var_1281);
            }
            if (Gvar.var_199 == 3) {
                Adap.pos(160 + 30 - Gvar.var_1281, 150 + 30 - Gvar.var_1281);
            }
            if (Gvar.var_199 == 7) {
                Adap.pos(160 - 30 + Gvar.var_1281, 150 - 30 + Gvar.var_1281);
            }
            if (Gvar.var_199 == 9) {
                Adap.pos(160 + 30 - Gvar.var_1281, 150 - 30 + Gvar.var_1281);
            }
            if (Gvar.kougeki_disc_id  == 315) {
                if (Gvar.var_199 == 4) {
                    Gvar.var_1282 = 12;
                    Adap.pos(160 - 30 + Gvar.var_1281 + Gvar.var_1282, 150 - 3);
                }
                if (Gvar.var_199 == 6) {
                    Gvar.var_1282 = 12;
                    Adap.pos(160 + 30 - Gvar.var_1281 - Gvar.var_1282, 150 - 3);
                }
                if (Gvar.var_199 == 7) {
                    Gvar.var_1282 = 15;
                    Adap.pos(160 - 30 + Gvar.var_1281 + Gvar.var_1282, 150 - 30 + Gvar.var_1281 + Gvar.var_1282 - 5);
                }
                if (Gvar.var_199 == 9) {
                    Gvar.var_1282 = 15;
                    Adap.pos(160 + 30 - Gvar.var_1281 - Gvar.var_1282, 150 - 30 + Gvar.var_1281 + Gvar.var_1282 - 5);
                }
                if (Gvar.var_199 == 8) {
                    Gvar.var_1282 = 5;
                    Adap.pos(160, 150 - 30 + Gvar.var_1281 + Gvar.var_1282);
                }
                if (Gvar.var_199 == 2) {
                    Gvar.var_1282 = 13;
                    Adap.pos(160, 150 + 30 - Gvar.var_1281 - Gvar.var_1282);
                }
                if (Gvar.var_199 == 3) {
                    Gvar.var_1282 = 15;
                    Adap.pos(160 + 30 - Gvar.var_1281 - Gvar.var_1282, 150 + 30 - Gvar.var_1281 - Gvar.var_1282 + 5);
                }
                if (Gvar.var_199 == 1) {
                    Gvar.var_1282 = 15;
                    Adap.pos(160 - 30 + Gvar.var_1281 + Gvar.var_1282, 150 + 30 - Gvar.var_1281 - Gvar.var_1282 + 5);
                }
            }
            Gvar.var_1272 = 0;
            if (Gvar.kougeki_disc_id  == 100) {
                Gvar.var_1272 = 200;
            }
            if (Gvar.kougeki_disc_id  == 101) {
                Gvar.var_1272 = 160;
            }
            if (Gvar.kougeki_disc_id  == 102) {
                Gvar.var_1272 = 120;
            }
            if (Gvar.kougeki_disc_id  == 103) {
                Gvar.var_1272 = 80;
            }
            if (Gvar.kougeki_disc_id  == 104) {
                Gvar.var_1272 = 240;
            }
            if (Gvar.kougeki_disc_id  == 105) {
                Gvar.var_1272 = 360;
            }
            if (Gvar.kougeki_disc_id  == 106) {
                Gvar.var_1272 = 320;
            }
            if (Gvar.kougeki_disc_id  == 107) {
                Gvar.var_1272 = 280;
            }
            if (Gvar.kougeki_disc_id  == 108) {
                Gvar.var_1272 = 440;
            }
            if (Gvar.kougeki_disc_id  == 109) {
                Gvar.var_1272 = 480;
            }
            if (Gvar.kougeki_disc_id  == 110) {
                Gvar.var_1272 = 400;
            }
            if (Gvar.kougeki_disc_id  == 111) {
                Gvar.var_1272 = 520;
            }
            if (Gvar.kougeki_disc_id  == 112 || Gvar.kougeki_disc_id  == 395) {
                Gvar.var_1272 = 560;
            }
            if (Gvar.kougeki_disc_id  == 113) {
                Gvar.var_1272 = 600;
            }
            if (Gvar.kougeki_disc_id  == 114) {
                Gvar.var_1272 = 640;
            }
            if (Gvar.kougeki_disc_id  == 115) {
                Gvar.var_1272 = 680;
            }
            if (Gvar.kougeki_disc_id  == 116) {
                Gvar.var_1272 = 720;
            }
            if (Gvar.kougeki_disc_id  == 117) {
                Gvar.var_1272 = 880;
            }
            if (Gvar.kougeki_disc_id  == 118) {
                Gvar.var_1272 = 920;
            }
            if (Gvar.kougeki_disc_id  == 119) {
                Gvar.var_1272 = 1000;
            }
            if (Gvar.kougeki_disc_id  == 120) {
                Gvar.var_1272 = 1040;
            }
            if (Gvar.kougeki_disc_id  == 121) {
                Gvar.var_1272 = 1080;
            }
            if (Gvar.kougeki_disc_id  == 123) {
                Gvar.var_1272 = 1280;
            }
            if (Gvar.kougeki_disc_id  == 124) {
                Gvar.var_1272 = 1320;
            }
            if (Gvar.kougeki_disc_id  == 201) {
                Gvar.var_1272 = 1360;
            }
            if (Gvar.kougeki_disc_id  == 203) {
                Gvar.var_1272 = 1440;
            }
            if (Gvar.kougeki_disc_id  == 204) {
                Gvar.var_1272 = 2000;
            }
            if (Gvar.kougeki_disc_id  == 205) {
                Gvar.var_1272 = 1200;
            }
            if (Gvar.kougeki_disc_id  == 207) {
                Gvar.var_1272 = 1240;
            }
            if (Gvar.kougeki_disc_id  == 208) { // Ver0.1401にて追加。C-MOON
                Gvar.var_1272 = 2280;
            }
            if (Gvar.kougeki_disc_id  == 252) { // Ver0.1401にて追加。クリーム・スターター
                Gvar.var_1272 = 2360;
            }
            if (Gvar.kougeki_disc_id  == 255) { // Ver0.1401にて追加。イン・ア・サイレント・ウェイ
                Gvar.var_1272 = 2440;
            }
            if (Gvar.kougeki_disc_id  == 261) { // Ver0.1401にて追加。D4C
                Gvar.var_1272 = 2400;
            }
            if (Gvar.kougeki_disc_id  == 301) {
                Gvar.var_1272 = 1920;
            }
            if (Gvar.kougeki_disc_id  == 304) {
                Gvar.var_1272 = 1400;
            }
            if (Gvar.kougeki_disc_id  == 305) {
                Gvar.var_1272 = 2160;
            }
            if (Gvar.kougeki_disc_id  == 307) {
                Gvar.var_1272 = 1520;
            }
            if (Gvar.kougeki_disc_id  == 308) {
                Gvar.var_1272 = 1880;
            }
            if (Gvar.kougeki_disc_id  == 309) {
                Gvar.var_1272 = 2040;
            }
            if (Gvar.kougeki_disc_id  == 312) {
                Gvar.var_1272 = 1960;
            }
            if (Gvar.kougeki_disc_id  == 313) {
                Gvar.var_1272 = 1560;
            }
            if (Gvar.kougeki_disc_id  == 315) {
                Gvar.var_1272 = 2120;
            }
            if (Gvar.kougeki_disc_id  == 317) {
                Gvar.var_1272 = 1640;
            }
            if (Gvar.kougeki_disc_id  == 318) {
                Gvar.var_1272 = 1520;
            }
            if (Gvar.kougeki_disc_id  == 318) {
                Gvar.var_1272 = 1680;
            }
            if (Gvar.kougeki_disc_id  == 319) {
                Gvar.var_1272 = 1720;
            }
            if (Gvar.kougeki_disc_id  == 394) {
                Gvar.var_1272 = 760;
            }
            if (Gvar.kougeki_disc_id  == 397) {
                Gvar.var_1272 = 1840;
            }
            if (Gvar.kougeki_disc_id  == 398) {
                Gvar.var_1272 = 1600;
            }
            if (Gvar.kougeki_disc_id  == 399) {
                Gvar.var_1272 = 1480;
            }
            if (Gvar.var_1272 == 0 && Gvar.var_243 != 0) {
                return;
            }
            if (Gvar.var_1283 == 0) {
                Gvar.bufferid_stand_disc = 11; //Adap.buffer(11)は"img_stand0.gif"
                await Func.func426();
                Gvar.var_570 = Gvar.var_233[Gvar.var_553].Var13;
                if (Gvar.var_341 == 2) {
                    await Func.func427();
                    Gvar.var_570 = Gvar.var_233[Gvar.var_554].Var13;
                }
                if (Gvar.var_570 == 0) {
                    Gvar.bufferid_stand_disc = 11; //Adap.buffer(11)は"img_stand0.gif"
                }
                if (Gvar.var_570 == 1) {
                    Gvar.bufferid_stand_disc = 1; // Adap.buffer(1)は"img_stand1.gif"
                }
                if (Gvar.var_570 == 2) {
                    Gvar.bufferid_stand_disc = 16; // Adap.buffer(16)は"img_stand2.gif"
                }
                if (Gvar.var_570 == 3) {
                    Gvar.bufferid_stand_disc = 29; // Adap.buffer(29)は"img_stand3.gif"
                }
            }
            Adap.gmode(2, null, null, null);
            if (Gvar.var_243 == 1 || Gvar.var_243 == 7 || Gvar.var_243 == 8) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
            }
            if (Gvar.var_243 == 9) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 50);
            }
            if (Gvar.var_243 == 1 || Gvar.var_243 == 2) {
                if (Gvar.var_199 == 2) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 0, Gvar.var_1272, 40, 40);
                }
                if (Gvar.var_199 == 4) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 120, Gvar.var_1272, 40, 40);
                }
                if (Gvar.var_199 == 8) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 240, Gvar.var_1272, 40, 40);
                }
                if (Gvar.var_199 == 6) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 360, Gvar.var_1272, 40, 40);
                }
                if (Gvar.var_199 == 1) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 480, Gvar.var_1272, 40, 40);
                }
                if (Gvar.var_199 == 3) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 720, Gvar.var_1272, 40, 40);
                }
                if (Gvar.var_199 == 7) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 600, Gvar.var_1272, 40, 40);
                }
                if (Gvar.var_199 == 9) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 840, Gvar.var_1272, 40, 40);
                }
            }
            if (Gvar.var_243 == 3) {
                if (Gvar.var_199 == 2) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 40, Gvar.var_1272, 40, 40);
                }
                if (Gvar.var_199 == 4) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 160, Gvar.var_1272, 40, 40);
                }
                if (Gvar.var_199 == 8) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 280, Gvar.var_1272, 40, 40);
                }
                if (Gvar.var_199 == 6) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 400, Gvar.var_1272, 40, 40);
                }
                if (Gvar.var_199 == 1) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 520, Gvar.var_1272, 40, 40);
                }
                if (Gvar.var_199 == 3) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 760, Gvar.var_1272, 40, 40);
                }
                if (Gvar.var_199 == 7) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 640, Gvar.var_1272, 40, 40);
                }
                if (Gvar.var_199 == 9) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 880, Gvar.var_1272, 40, 40);
                }
            }
            if (Gvar.var_243 >= 4 && Gvar.var_243 < 10) {
                if (Gvar.var_199 == 2) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 80, Gvar.var_1272, 40, 40);
                }
                if (Gvar.var_199 == 4) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 200, Gvar.var_1272, 40, 40);
                }
                if (Gvar.var_199 == 8) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 320, Gvar.var_1272, 40, 40);
                }
                if (Gvar.var_199 == 6) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 440, Gvar.var_1272, 40, 40);
                }
                if (Gvar.var_199 == 1) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 560, Gvar.var_1272, 40, 40);
                }
                if (Gvar.var_199 == 3) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 800, Gvar.var_1272, 40, 40);
                }
                if (Gvar.var_199 == 7) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 680, Gvar.var_1272, 40, 40);
                }
                if (Gvar.var_199 == 9) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 920, Gvar.var_1272, 40, 40);
                }
            }
            if (Gvar.kougeki_disc_id  == 110) {
                Adap.gmode(2, null, null, null);
                if (Gvar.var_243 == 1 || Gvar.var_243 == 7 || Gvar.var_243 == 8) {
                    Adap.color(0, 0, 0);

                    Adap.gmode(4, null, null, 100);
                }
                if (Gvar.var_243 == 9) {
                    Adap.color(0, 0, 0);
    
                    Adap.gmode(4, null, null, 50);
                }
                Gvar.var_1281 = 0;
                if (Gvar.var_243 == 1) {
                    Gvar.var_1281 = 8;
                }
                if (Gvar.var_243 == 2) {
                    Gvar.var_1281 = 4;
                }
                if (Gvar.var_243 == 3) {
                    Gvar.var_1281 = 2;
                }
                if (Gvar.var_243 == 8) {
                    Gvar.var_1281 = 2;
                }
                if (Gvar.var_243 == 9) {
                    Gvar.var_1281 = 3;
                }
                if (Gvar.var_199 == 2 && Gvar.var_243 == 3) {
                    Adap.pos(160 + 5, 160 + 60 - Gvar.var_1281);
                    Adap.gcopy(Gvar.bufferid_stand_disc, 1000, 400, 13, 40);
                }
                if (Gvar.var_199 == 2 && Gvar.var_243 == 4) {
                    Adap.pos(160 + 5, 160 + 60);
                    Adap.gcopy(Gvar.bufferid_stand_disc, 1013, 400, 13, 40);
                }
                if (Gvar.var_199 == 2 && Gvar.var_243 >= 5 && Gvar.var_243 < 10 && Gvar.var_243 != 8 && Gvar.var_243 != 9) {
                    Adap.pos(160 + 5, 160 + 60);
                    Adap.gcopy(Gvar.bufferid_stand_disc, 1026, 400, 13, 40);
                }
                if (Gvar.var_199 == 2 && Gvar.var_243 == 8) {
                    Adap.pos(160 + 5, 160 + 60 - Gvar.var_1281);
                    Adap.gcopy(Gvar.bufferid_stand_disc, 1026, 400, 13, 40);
                }
                if (Gvar.var_199 == 2 && Gvar.var_243 == 9) {
                    Adap.pos(160 + 5, 160 + 60 - Gvar.var_1281);
                    Adap.gcopy(Gvar.bufferid_stand_disc, 1026, 400, 13, 40);
                }
                if (Gvar.var_199 == 8 && Gvar.var_243 == 3) {
                    Adap.pos(160 + 18, 160 - 80 + Gvar.var_1281);
                    Adap.gcopy(Gvar.bufferid_stand_disc, 1080, 400, 13, 40);
                }
                if (Gvar.var_199 == 8 && Gvar.var_243 == 4) {
                    Adap.pos(160 + 18, 160 - 80);
                    Adap.gcopy(Gvar.bufferid_stand_disc, 1093, 400, 13, 40);
                }
                if (Gvar.var_199 == 8 && Gvar.var_243 >= 5 && Gvar.var_243 < 10 && Gvar.var_243 != 8 && Gvar.var_243 != 9) {
                    Adap.pos(160 + 18, 160 - 80);
                    Adap.gcopy(Gvar.bufferid_stand_disc, 1106, 400, 13, 40);
                }
                if (Gvar.var_199 == 8 && Gvar.var_243 == 8) {
                    Adap.pos(160 + 18, 160 - 80 + Gvar.var_1281);
                    Adap.gcopy(Gvar.bufferid_stand_disc, 1106, 400, 13, 40);
                }
                if (Gvar.var_199 == 8 && Gvar.var_243 == 9) {
                    Adap.pos(160 + 18, 160 - 80 + Gvar.var_1281);
                    Adap.gcopy(Gvar.bufferid_stand_disc, 1106, 400, 13, 40);
                }
                if (Gvar.var_199 == 4 && Gvar.var_243 == 3) {
                    Adap.pos(160 - 70 + Gvar.var_1281, 160 + 4);
                    Adap.gcopy(Gvar.bufferid_stand_disc, 1040, 400, 40, 13);
                }
                if (Gvar.var_199 == 4 && Gvar.var_243 == 4) {
                    Adap.pos(160 - 70, 160 + 4);
                    Adap.gcopy(Gvar.bufferid_stand_disc, 1040, 413, 40, 13);
                }
                if (Gvar.var_199 == 4 && Gvar.var_243 >= 5 && Gvar.var_243 < 10 && Gvar.var_243 != 8 && Gvar.var_243 != 9) {
                    Adap.pos(160 - 70, 160 + 4);
                    Adap.gcopy(Gvar.bufferid_stand_disc, 1040, 426, 40, 13);
                }
                if (Gvar.var_199 == 4 && Gvar.var_243 == 8) {
                    Adap.pos(160 - 70 + Gvar.var_1281, 160 + 4);
                    Adap.gcopy(Gvar.bufferid_stand_disc, 1040, 426, 40, 13);
                }
                if (Gvar.var_199 == 4 && Gvar.var_243 == 9) {
                    Adap.pos(160 - 70 + Gvar.var_1281, 160 + 4);
                    Adap.gcopy(Gvar.bufferid_stand_disc, 1040, 426, 40, 13);
                }
                if (Gvar.var_199 == 6 && Gvar.var_243 == 3) {
                    Adap.pos(160 + 70 - Gvar.var_1281, 160 + 4);
                    Adap.gcopy(Gvar.bufferid_stand_disc, 1120, 400, 40, 13);
                }
                if (Gvar.var_199 == 6 && Gvar.var_243 == 4) {
                    Adap.pos(160 + 70, 160 + 4);
                    Adap.gcopy(Gvar.bufferid_stand_disc, 1120, 413, 40, 13);
                }
                if (Gvar.var_199 == 6 && Gvar.var_243 >= 5 && Gvar.var_243 < 10 && Gvar.var_243 != 8 && Gvar.var_243 != 9) {
                    Adap.pos(160 + 70, 160 + 4);
                    Adap.gcopy(Gvar.bufferid_stand_disc, 1120, 426, 40, 13);
                }
                if (Gvar.var_199 == 6 && Gvar.var_243 == 8) {
                    Adap.pos(160 + 70 - Gvar.var_1281, 160 + 4);
                    Adap.gcopy(Gvar.bufferid_stand_disc, 1120, 426, 40, 13);
                }
                if (Gvar.var_199 == 6 && Gvar.var_243 == 9) {
                    Adap.pos(160 + 70 - Gvar.var_1281, 160 + 4);
                    Adap.gcopy(Gvar.bufferid_stand_disc, 1120, 426, 40, 13);
                }
                if (Gvar.var_199 == 1 && Gvar.var_243 == 3) {
                    Adap.pos(160 - 69 + Gvar.var_1281, 160 + 59 - Gvar.var_1281);
                    Adap.gcopy(Gvar.bufferid_stand_disc, 1160, 400, 40, 40);
                }
                if (Gvar.var_199 == 1 && Gvar.var_243 == 4) {
                    Adap.pos(160 - 69, 160 + 59);
                    Adap.gcopy(Gvar.bufferid_stand_disc, 1200, 400, 40, 40);
                }
                if (Gvar.var_199 == 1 && Gvar.var_243 >= 5 && Gvar.var_243 < 10 && Gvar.var_243 != 8 && Gvar.var_243 != 9) {
                    Adap.pos(160 - 69, 160 + 59);
                    Adap.gcopy(Gvar.bufferid_stand_disc, 1240, 400, 40, 40);
                }
                if (Gvar.var_199 == 1 && Gvar.var_243 == 8) {
                    Adap.pos(160 - 69 + Gvar.var_1281, 160 + 59 - Gvar.var_1281);
                    Adap.gcopy(Gvar.bufferid_stand_disc, 1240, 400, 40, 40);
                }
                if (Gvar.var_199 == 1 && Gvar.var_243 == 9) {
                    Adap.pos(160 - 69 + Gvar.var_1281, 160 + 59 - Gvar.var_1281);
                    Adap.gcopy(Gvar.bufferid_stand_disc, 1240, 400, 40, 40);
                }
                if (Gvar.var_199 == 3 && Gvar.var_243 == 3) {
                    Adap.pos(160 + 69 - Gvar.var_1281, 160 + 59 - Gvar.var_1281);
                    Adap.gcopy(Gvar.bufferid_stand_disc, 1160, 440, 40, 40);
                }
                if (Gvar.var_199 == 3 && Gvar.var_243 == 4) {
                    Adap.pos(160 + 69, 160 + 59);
                    Adap.gcopy(Gvar.bufferid_stand_disc, 1200, 440, 40, 40);
                }
                if (Gvar.var_199 == 3 && Gvar.var_243 >= 5 && Gvar.var_243 < 10 && Gvar.var_243 != 8 && Gvar.var_243 != 9) {
                    Adap.pos(160 + 69, 160 + 59);
                    Adap.gcopy(Gvar.bufferid_stand_disc, 1240, 440, 40, 40);
                }
                if (Gvar.var_199 == 3 && Gvar.var_243 == 8) {
                    Adap.pos(160 + 69 - Gvar.var_1281, 160 + 59 - Gvar.var_1281);
                    Adap.gcopy(Gvar.bufferid_stand_disc, 1240, 440, 40, 40);
                }
                if (Gvar.var_199 == 3 && Gvar.var_243 == 9) {
                    Adap.pos(160 + 69 - Gvar.var_1281, 160 + 59 - Gvar.var_1281);
                    Adap.gcopy(Gvar.bufferid_stand_disc, 1240, 440, 40, 40);
                }
                if (Gvar.var_199 == 7 && Gvar.var_243 == 3) {
                    Adap.pos(160 - 69 + Gvar.var_1281, 160 - 80 + Gvar.var_1281);
                    Adap.gcopy(Gvar.bufferid_stand_disc, 1040, 360, 40, 40);
                }
                if (Gvar.var_199 == 7 && Gvar.var_243 == 4) {
                    Adap.pos(160 - 69, 160 - 80);
                    Adap.gcopy(Gvar.bufferid_stand_disc, 1080, 360, 40, 40);
                }
                if (Gvar.var_199 == 7 && Gvar.var_243 >= 5 && Gvar.var_243 < 10 && Gvar.var_243 != 8 && Gvar.var_243 != 9) {
                    Adap.pos(160 - 69, 160 - 80);
                    Adap.gcopy(Gvar.bufferid_stand_disc, 1120, 360, 40, 40);
                }
                if (Gvar.var_199 == 7 && Gvar.var_243 == 8) {
                    Adap.pos(160 - 69 + Gvar.var_1281, 160 - 80 + Gvar.var_1281);
                    Adap.gcopy(Gvar.bufferid_stand_disc, 1120, 360, 40, 40);
                }
                if (Gvar.var_199 == 7 && Gvar.var_243 == 9) {
                    Adap.pos(160 - 69 + Gvar.var_1281, 160 - 80 + Gvar.var_1281);
                    Adap.gcopy(Gvar.bufferid_stand_disc, 1120, 360, 40, 40);
                }
                if (Gvar.var_199 == 9 && Gvar.var_243 == 3) {
                    Adap.pos(160 + 69 - Gvar.var_1281, 160 - 80 + Gvar.var_1281);
                    Adap.gcopy(Gvar.bufferid_stand_disc, 1160, 360, 40, 40);
                }
                if (Gvar.var_199 == 9 && Gvar.var_243 == 4) {
                    Adap.pos(160 + 69, 160 - 80);
                    Adap.gcopy(Gvar.bufferid_stand_disc, 1200, 360, 40, 40);
                }
                if (Gvar.var_199 == 9 && Gvar.var_243 >= 5 && Gvar.var_243 < 10 && Gvar.var_243 != 8 && Gvar.var_243 != 9) {
                    Adap.pos(160 + 69, 160 - 80);
                    Adap.gcopy(Gvar.bufferid_stand_disc, 1240, 360, 40, 40);
                }
                if (Gvar.var_199 == 9 && Gvar.var_243 == 8) {
                    Adap.pos(160 + 69 - Gvar.var_1281, 160 - 80 + Gvar.var_1281);
                    Adap.gcopy(Gvar.bufferid_stand_disc, 1240, 360, 40, 40);
                }
                if (Gvar.var_199 == 9 && Gvar.var_243 == 9) {
                    Adap.pos(160 + 69 - Gvar.var_1281, 160 - 80 + Gvar.var_1281);
                    Adap.gcopy(Gvar.bufferid_stand_disc, 1240, 360, 40, 40);
                }
            }
        }
        if (Gvar.kougeki_disc_id  == 122) {
            await Func.func426();
            Gvar.var_570 = Gvar.var_233[Gvar.var_553].Var13;
            if (Gvar.var_341 == 2) {
                await Func.func427();
                Gvar.var_570 = Gvar.var_233[Gvar.var_554].Var13;
            }
            if (Gvar.var_570 == 0) {
                Gvar.bufferid_stand_disc = 11; //Adap.buffer(11)は"img_stand0.gif"
            }
            if (Gvar.var_570 == 1) {
                Gvar.bufferid_stand_disc = 1; // Adap.buffer(1)は"img_stand1.gif"
            }
            if (Gvar.var_570 == 2) {
                Gvar.bufferid_stand_disc = 16; // Adap.buffer(16)は"img_stand2.gif"
            }
            if (Gvar.var_570 == 3) {
                Gvar.bufferid_stand_disc = 29; // Adap.buffer(29)は"img_stand3.gif"
            }
            Adap.gmode(2, null, null, null);
            if (Gvar.var_243 == 8) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
            }
            if (Gvar.var_243 == 9) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 50);
            }
            if (Gvar.var_199 == 2) {
                Adap.pos(160, 150);
            }
            if (Gvar.var_199 == 4) {
                Adap.pos(160 - 30, 150);
            }
            if (Gvar.var_199 == 8) {
                Adap.pos(160 + 5, 150 - 30);
            }
            if (Gvar.var_199 == 6) {
                Adap.pos(160 - 10, 150);
            }
            if (Gvar.var_199 == 1) {
                Adap.pos(160 - 10, 150);
            }
            if (Gvar.var_199 == 3) {
                Adap.pos(160 + 10, 150);
            }
            if (Gvar.var_199 == 7) {
                Adap.pos(160 - 10, 150 - 20);
            }
            if (Gvar.var_199 == 9) {
                Adap.pos(160 + 10, 150 - 20);
            }
            if (Gvar.var_243 == 1 || Gvar.var_243 == 2) {
                if (Gvar.var_199 == 2) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 0, 1120, 40, 80);
                }
                if (Gvar.var_199 == 4) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 240, 1120, 80, 40);
                }
                if (Gvar.var_199 == 8) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 120, 1120, 40, 80);
                }
                if (Gvar.var_199 == 6) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 320, 1160, 40, 40);
                }
                if (Gvar.var_199 == 1) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 0, 1120, 40, 80);
                }
                if (Gvar.var_199 == 3) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 520, 1120, 40, 80);
                }
                if (Gvar.var_199 == 7) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 560, 1120, 40, 80);
                }
                if (Gvar.var_199 == 9) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 120, 1120, 40, 80);
                }
            }
            if (Gvar.var_243 == 3) {
                if (Gvar.var_199 == 2) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 40, 1120, 40, 80);
                }
                if (Gvar.var_199 == 4) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 240, 1160, 80, 40);
                }
                if (Gvar.var_199 == 8) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 160, 1120, 40, 80);
                }
                if (Gvar.var_199 == 6) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 360, 1160, 40, 40);
                }
                if (Gvar.var_199 == 1) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 40, 1120, 40, 80);
                }
                if (Gvar.var_199 == 3) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 480, 1120, 40, 80);
                }
                if (Gvar.var_199 == 7) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 600, 1120, 40, 80);
                }
                if (Gvar.var_199 == 9) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 160, 1120, 40, 80);
                }
            }
            if (Gvar.var_243 >= 4 && Gvar.var_243 < 10) {
                if (Gvar.var_199 == 2) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 80, 1120, 40, 80);
                }
                if (Gvar.var_199 == 4) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 320, 1120, 40, 40);
                }
                if (Gvar.var_199 == 8) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 200, 1120, 40, 80);
                }
                if (Gvar.var_199 == 6) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 360, 1120, 80, 40);
                }
                if (Gvar.var_199 == 1) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 80, 1120, 40, 80);
                }
                if (Gvar.var_199 == 3) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 440, 1120, 40, 80);
                }
                if (Gvar.var_199 == 7) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 640, 1120, 40, 80);
                }
                if (Gvar.var_199 == 9) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 200, 1120, 40, 80);
                }
            }
        }
        if (Gvar.var_1280 == 1) {
            await Func.func426();
            Gvar.var_570 = Gvar.var_233[Gvar.var_553].Var13;
            if (Gvar.var_570 == 0) {
                Gvar.bufferid_stand_disc = 11; //Adap.buffer(11)は"img_stand0.gif"
            }
            if (Gvar.var_570 == 1) {
                Gvar.bufferid_stand_disc = 1; // Adap.buffer(1)は"img_stand1.gif"
            }
            if (Gvar.var_570 == 2) {
                Gvar.bufferid_stand_disc = 16; // Adap.buffer(16)は"img_stand2.gif"
            }
            if (Gvar.var_570 == 3) {
                Gvar.bufferid_stand_disc = 29; // Adap.buffer(29)は"img_stand3.gif"
            }
            Gvar.var_1285 = 0;
            if (Gvar.kougeki_disc_id  == 398) {
                Gvar.var_1285 = 1760;
            }
            if (Gvar.var_243 == 1 || Gvar.var_243 >= 8) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
            }
            else {
                Adap.gmode(2, null, null, null);
            }
            if (Gvar.var_199 == 4) {
                Adap.pos(160 - 50, 160 - 25);
                if (Gvar.var_243 == 1 || Gvar.var_243 == 3 || Gvar.var_243 == 5 || Gvar.var_243 == 7 || Gvar.var_243 == 9) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 480, Gvar.var_1285, 80, 80);
                }
                if (Gvar.var_243 == 2 || Gvar.var_243 == 4 || Gvar.var_243 == 6 || Gvar.var_243 == 8 || Gvar.var_243 == 10) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 560, Gvar.var_1285, 80, 80);
                }
            }
            if (Gvar.var_199 == 6) {
                Adap.pos(160 + 10, 160 - 25);
                if (Gvar.var_243 == 1 || Gvar.var_243 == 3 || Gvar.var_243 == 5 || Gvar.var_243 == 7 || Gvar.var_243 == 9) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 320, Gvar.var_1285, 80, 80);
                }
                if (Gvar.var_243 == 2 || Gvar.var_243 == 4 || Gvar.var_243 == 6 || Gvar.var_243 == 8 || Gvar.var_243 == 10) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 400, Gvar.var_1285, 80, 80);
                }
            }
            if (Gvar.var_199 == 3) {
                Adap.pos(160 + 10, 160 + 5);
                if (Gvar.var_243 == 1 || Gvar.var_243 == 3 || Gvar.var_243 == 5 || Gvar.var_243 == 7 || Gvar.var_243 == 9) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 0, Gvar.var_1285, 80, 80);
                }
                if (Gvar.var_243 == 2 || Gvar.var_243 == 4 || Gvar.var_243 == 6 || Gvar.var_243 == 8 || Gvar.var_243 == 10) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 80, Gvar.var_1285, 80, 80);
                }
            }
            if (Gvar.var_199 == 1) {
                Adap.pos(160 - 50, 160 + 5);
                if (Gvar.var_243 == 1 || Gvar.var_243 == 3 || Gvar.var_243 == 5 || Gvar.var_243 == 7 || Gvar.var_243 == 9) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 160, Gvar.var_1285, 80, 80);
                }
                if (Gvar.var_243 == 2 || Gvar.var_243 == 4 || Gvar.var_243 == 6 || Gvar.var_243 == 8 || Gvar.var_243 == 10) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 240, Gvar.var_1285, 80, 80);
                }
            }
            if (Gvar.var_199 == 7) {
                Adap.pos(160 - 50, 160 - 60);
                if (Gvar.var_243 == 1 || Gvar.var_243 == 3 || Gvar.var_243 == 5 || Gvar.var_243 == 7 || Gvar.var_243 == 9) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 640, Gvar.var_1285, 80, 80);
                }
                if (Gvar.var_243 == 2 || Gvar.var_243 == 4 || Gvar.var_243 == 6 || Gvar.var_243 == 8 || Gvar.var_243 == 10) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 720, Gvar.var_1285, 80, 80);
                }
            }
            if (Gvar.var_199 == 9) {
                Adap.pos(160 + 10, 160 - 60);
                if (Gvar.var_243 == 1 || Gvar.var_243 == 3 || Gvar.var_243 == 5 || Gvar.var_243 == 7 || Gvar.var_243 == 9) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 800, Gvar.var_1285, 80, 80);
                }
                if (Gvar.var_243 == 2 || Gvar.var_243 == 4 || Gvar.var_243 == 6 || Gvar.var_243 == 8 || Gvar.var_243 == 10) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 880, Gvar.var_1285, 80, 80);
                }
            }
            if (Gvar.var_199 == 2) {
                Adap.pos(160 - 20, 160 + 5);
                if (Gvar.var_243 == 1 || Gvar.var_243 == 3 || Gvar.var_243 == 5 || Gvar.var_243 == 7 || Gvar.var_243 == 9) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 960, Gvar.var_1285, 80, 80);
                }
                if (Gvar.var_243 == 2 || Gvar.var_243 == 4 || Gvar.var_243 == 6 || Gvar.var_243 == 8 || Gvar.var_243 == 10) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 1040, Gvar.var_1285, 80, 80);
                }
            }
            if (Gvar.var_199 == 8) {
                Adap.pos(160 - 20, 160 - 70);
                if (Gvar.var_243 == 1 || Gvar.var_243 == 3 || Gvar.var_243 == 5 || Gvar.var_243 == 7 || Gvar.var_243 == 9) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 1120, Gvar.var_1285, 80, 80);
                }
                if (Gvar.var_243 == 2 || Gvar.var_243 == 4 || Gvar.var_243 == 6 || Gvar.var_243 == 8 || Gvar.var_243 == 10) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 1200, Gvar.var_1285, 80, 80);
                }
            }
        }
        return;
}

export {func352}
