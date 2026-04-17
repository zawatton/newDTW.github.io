/**
 * func354 — func354 不明
 *
 * (org原典: newDTW_func3)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import { tf } from '../i18n'

// エフェクト "キラキラ" 表示処理
async function func354(this: any) {
        Adap.dbgprt(354);
        Adap.pos(Gvar.var_1286, Gvar.var_1287);
        Adap.gmode(2, null, null, null);
        if (Gvar.var_1297 >= 1) {
            Gvar.var_1298 = Gvar.var_1299 * 64;
            Adap.gmode(2, null, null, null);
            Adap.pos(148, 138);
            if (Gvar.var_1299 == 0) {
                Adap.pos(148, 98);
            }
            if (Gvar.var_1299 == 1) {
                Adap.pos(148, 128);
            }
            if (Gvar.var_1299 == 2) {
                Adap.pos(165, 125);
            }
            if (Gvar.var_1299 == 3) {
                Adap.pos(148, 128);
            }
            if (Gvar.var_1299 == 4) {
                Adap.pos(148, 128);
            }
            if (Gvar.var_1299 == 5) {
                Adap.pos(148, 128);
            }
            if (Gvar.var_1299 == 8) {
                Adap.pos(148, 128);
            }
            if (Gvar.var_1299 == 9) {
                Adap.pos(148, 128);
            }
            if (Gvar.var_1299 == 10) {
                Adap.pos(148, 128);
            }


            if (Gvar.var_1297 == 1) {
                Adap.gcopy(35, 0, Gvar.var_1298, 64, 64);
            }
            if (Gvar.var_1297 == 2) {
                Adap.gcopy(35, 64, Gvar.var_1298, 64, 64);
            }
            if (Gvar.var_1297 == 3) {
                Adap.gcopy(35, 128, Gvar.var_1298, 64, 64);
            }
            if (Gvar.var_1297 == 4) {
                Adap.gcopy(35, 192, Gvar.var_1298, 64, 64);
            }
            if (Gvar.var_1297 == 5) {
                Adap.gcopy(35, 256, Gvar.var_1298, 64, 64);
            }
            if (Gvar.var_1297 == 6) {
                Adap.gcopy(35, 320, Gvar.var_1298, 64, 64);
            }
            if (Gvar.var_1297 == 7) {
                Adap.gcopy(35, 384, Gvar.var_1298, 64, 64);
            }
            if (Gvar.var_1297 == 8) {
                Adap.gcopy(35, 448, Gvar.var_1298, 64, 64);
            }
            if (Gvar.var_1297 == 9) {
                Adap.gcopy(35, 512, Gvar.var_1298, 64, 64);
            }
            if (Gvar.var_1297 == 10) {
                Adap.gcopy(35, 576, Gvar.var_1298, 64, 64);
            }
            if (Gvar.var_1297 == 11) {
                Adap.gcopy(35, 640, Gvar.var_1298, 64, 64);
            }
            if (Gvar.var_1297 == 12) {
                Adap.gcopy(35, 704, Gvar.var_1298, 64, 64);
            }
            if (Gvar.var_1297 == 13) {
                Adap.gcopy(35, 768, Gvar.var_1298, 64, 64);
            }
            if (Gvar.var_1297 == 14) {
                Adap.gcopy(35, 832, Gvar.var_1298, 64, 64);
            }
            if (Gvar.var_1297 == 15) {
                Adap.gcopy(35, 896, Gvar.var_1298, 64, 64);
            }
            if (Gvar.var_1297 == 16) {
                Adap.gcopy(35, 960, Gvar.var_1298, 64, 64);
            }
            if (Gvar.var_1297 == 17) {
                Adap.gcopy(35, 1024, Gvar.var_1298, 64, 64);
            }
            if (Gvar.var_1297 == 18) {
                Adap.gcopy(35, 1088, Gvar.var_1298, 64, 64);
            }
            if (Gvar.var_1297 == 19) {
                Adap.gcopy(35, 1152, Gvar.var_1298, 64, 64);
            }
            if (Gvar.var_1297 == 20) {
                Adap.gcopy(35, 1216, Gvar.var_1298, 64, 64);
            }
        }
        if (Gvar.var_1300 == 1) {
            Adap.color(0, 0, 0);
    
            Adap.gmode(4, null, null, 180);
            Adap.pos(160, 150);
            Adap.gcopy(14, 40, 280, 40, 40);
        }
        if (Gvar.var_1300 == 2) {
            Adap.color(0, 0, 0);
    
            Adap.gmode(4, null, null, 180);
            Adap.pos(160, 150);
            Adap.gcopy(14, 160, 440, 40, 40);
        }
        if (Gvar.var_1301 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos(Gvar.var_1302, Gvar.var_1303);
            if (Gvar.var_1304 == 0) {
                if (Gvar.var_1301 == 1) {
                    Adap.gcopy(34, 720, 280, 40, 40);
                }
                if (Gvar.var_1301 == 2) {
                    Adap.gcopy(34, 680, 280, 40, 40);
                }
                if (Gvar.var_1301 == 3) {
                    Adap.gcopy(34, 640, 280, 40, 40);
                }
                if (Gvar.var_1301 >= 4) {
                    Adap.gcopy(34, 600, 280, 40, 40);
                }
            }
            if (Gvar.var_1304 == 1) {
                if (Gvar.var_1301 == 1) {
                    Adap.gcopy(34, 720, 320, 40, 40);
                }
                if (Gvar.var_1301 == 2) {
                    Adap.gcopy(34, 680, 320, 40, 40);
                }
                if (Gvar.var_1301 == 3) {
                    Adap.gcopy(34, 640, 320, 40, 40);
                }
                if (Gvar.var_1301 >= 4) {
                    Adap.gcopy(34, 600, 320, 40, 40);
                }
            }
            if (Gvar.var_1304 == 2) {
                if (Gvar.var_1301 == 1) {
                    Adap.gcopy(34, 720, 360, 40, 40);
                }
                if (Gvar.var_1301 == 2) {
                    Adap.gcopy(34, 680, 360, 40, 40);
                }
                if (Gvar.var_1301 == 3) {
                    Adap.gcopy(34, 640, 360, 40, 40);
                }
                if (Gvar.var_1301 >= 4) {
                    Adap.gcopy(34, 600, 360, 40, 40);
                }
            }
        }
        if (Gvar.var_1305 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos(160 - 12, 150 - 12 - 10);
            if (Gvar.var_1305 == 1) {
                Adap.gcopy(35, 0, 704, 64, 64);
            }
            if (Gvar.var_1305 == 2 || Gvar.var_1305 == 3) {
                Adap.gcopy(35, 64, 704, 64, 64);
            }
            if (Gvar.var_1305 == 4 || Gvar.var_1305 == 5) {
                Adap.gcopy(35, 128, 704, 64, 64);
            }
            if (Gvar.var_1305 == 6 || Gvar.var_1305 == 7) {
                Adap.gcopy(35, 192, 704, 64, 64);
            }
            if (Gvar.var_1305 == 8) {
                Adap.gcopy(35, 256, 704, 64, 64);
            }
            if (Gvar.var_1305 == 9) {
                Adap.gcopy(35, 320, 704, 64, 64);
            }
            if (Gvar.var_1305 == 10) {
                Adap.gcopy(35, 384, 704, 64, 64);
            }
            if (Gvar.var_1305 == 11) {
                Adap.gcopy(35, 448, 704, 64, 64);
            }
        }
        if (Gvar.var_1306 >= 1) {
            if (Gvar.var_1306 == 5) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
            }
            Adap.gcopy(3, 80, 360, 40, 40);
        }
        if (Gvar.var_1307 >= 1) {
            if (Gvar.var_1307 == 8) {
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 150);
            }
            if (Gvar.var_1307 == 9) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 50);
            }
            if (Gvar.var_1308 == 1) {
                Adap.gcopy(3, 680, 200, 40, 40);
            }
            if (Gvar.var_1308 == 2) {
                Adap.gcopy(3, 720, 200, 40, 40);
            }
        }
        if (Gvar.var_1309 >= 1) {
            if (Gvar.var_1309 <= 2 || Gvar.var_1309 >= 14) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
            }
            Adap.gcopy(11, 960, 280, 40, 40);
        }
        if (Gvar.var_1310 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos(160, 150);
            if (Gvar.var_1310 == 1 || Gvar.var_1310 == 2) {
                Adap.gcopy(15, 960, 360, 40, 40);
            }
            if (Gvar.var_1310 == 3 || Gvar.var_1310 == 4) {
                Adap.gcopy(15, 1000, 360, 40, 40);
            }
            if (Gvar.var_1310 == 5 || Gvar.var_1310 == 6) {
                Adap.gcopy(15, 1040, 360, 40, 40);
            }
            Adap.pos(160, 110);
            Adap.gcopy(15, 1080, 360, 40, 40);
        }
        if (Gvar.var_1311 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos(160, 160);
            Adap.gcopy(34, 320, 920, 40, 40);
        }
        if (Gvar.var_1312 >= 1) {
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1312 == 26) {
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 200);
            }
            if (Gvar.var_1312 == 27) {
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 150);
            }
            if (Gvar.var_1312 == 28) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
            }
            if (Gvar.var_1312 == 29) {
                Adap.color(0, 0, 0);
    
                Adap.gmode(4, null, null, 60);
            }
            if (Gvar.var_1312 == 30) {
                Adap.color(0, 0, 0);
    
                Adap.gmode(4, null, null, 30);
            }
            Adap.pos(145, 100);
            if (Gvar.var_1312 == 11 || Gvar.var_1312 == 13 || Gvar.var_1312 == 15) {
                Adap.pos(145, 102);
            }
            if (Gvar.var_1312 == 1) {
                Adap.gcopy(14, 80, 480, 64, 64);
            }
            if (Gvar.var_1312 == 2) {
                Adap.gcopy(14, 144, 480, 64, 64);
            }
            if (Gvar.var_1312 == 3) {
                Adap.gcopy(14, 208, 480, 64, 64);
            }
            if (Gvar.var_1312 == 4) {
                Adap.gcopy(14, 272, 480, 64, 64);
            }
            if (Gvar.var_1312 == 5) {
                Adap.gcopy(14, 336, 480, 64, 64);
            }
            if (Gvar.var_1312 >= 6 && Gvar.var_1312 <= 10) {
                Adap.gcopy(14, 400, 480, 64, 64);
            }
            if (Gvar.var_1312 >= 11 && Gvar.var_1312 <= 20) {
                Adap.gcopy(14, 464, 480, 64, 64);
            }
            if (Gvar.var_1312 == 21) {
                Adap.gcopy(14, 528, 480, 64, 64);
            }
            if (Gvar.var_1312 == 22) {
                Adap.gcopy(14, 80, 544, 64, 64);
            }
            if (Gvar.var_1312 == 23) {
                Adap.gcopy(14, 144, 544, 64, 64);
            }
            if (Gvar.var_1312 == 24) {
                Adap.gcopy(14, 208, 544, 64, 64);
            }
            if (Gvar.var_1312 >= 25) {
                Adap.gcopy(14, 272, 544, 64, 64);
            }
        }
        if (Gvar.var_744 >= 1) {
            Adap.gmode(2, null, null, null);
            if (Gvar.var_744 == 2) {
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 150);
            }
            if (Gvar.var_744 == 3) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 50);
            }
            Adap.pos(Gvar.var_745, Gvar.var_746);
            Adap.gcopy(17, 0, 1120, 40, 40);
        }
        if (Gvar.var_1313 >= 1) {
            if (Gvar.var_83[Gvar.var_1314].Var0 == 121 || Gvar.var_83[Gvar.var_1314].Var0 == 126) {
                Gvar.var_1315 = 400;
            }
            if (Gvar.var_83[Gvar.var_1314].Var0 == 151 || Gvar.var_83[Gvar.var_1314].Var0 == 172) {
                Gvar.var_1315 = 1200;
            }
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1313 == 1) {
                Adap.color(0, 0, 0);
    
                Adap.gmode(4, null, null, 30);
            }
            if (Gvar.var_1313 == 2) {
                Adap.color(0, 0, 0);
    
                Adap.gmode(4, null, null, 60);
            }
            if (Gvar.var_1313 == 3) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
            }
            if (Gvar.var_1313 == 4) {
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 150);
            }
            if (Gvar.var_1313 == 5) {
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 200);
            }
            Adap.pos((Gvar.var_455 - Gvar.var_66 + 4) * 40, (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10);
            if (Gvar.var_83[Gvar.var_1314].Var5 == 2) {
                Adap.gcopy(34, 0, Gvar.var_1315, 40, 40);
            }
            if (Gvar.var_83[Gvar.var_1314].Var5 == 4) {
                Adap.gcopy(34, 40, Gvar.var_1315, 40, 40);
            }
            if (Gvar.var_83[Gvar.var_1314].Var5 == 8) {
                Adap.gcopy(34, 80, Gvar.var_1315, 40, 40);
            }
            if (Gvar.var_83[Gvar.var_1314].Var5 == 6) {
                Adap.gcopy(34, 120, Gvar.var_1315, 40, 40);
            }
            if (Gvar.var_83[Gvar.var_1314].Var5 == 1) {
                Adap.gcopy(34, 160, Gvar.var_1315, 40, 40);
            }
            if (Gvar.var_83[Gvar.var_1314].Var5 == 7) {
                Adap.gcopy(34, 200, Gvar.var_1315, 40, 40);
            }
            if (Gvar.var_83[Gvar.var_1314].Var5 == 3) {
                Adap.gcopy(34, 240, Gvar.var_1315, 40, 40);
            }
            if (Gvar.var_83[Gvar.var_1314].Var5 == 9) {
                Adap.gcopy(34, 280, Gvar.var_1315, 40, 40);
            }
        }
        if (Gvar.var_1316 >= 1) {
            Adap.gmode(2, null, null, null);
            Gvar.var_1317 = 0;
            for (let cnt2 = 0; cnt2 < 4; ++cnt2) {
                if (cnt2 == 0) {
                    Gvar.var_1318 = 0;
                }
                if (cnt2 == 1) {
                    Gvar.var_1318 = 8;
                }
                if (cnt2 == 2) {
                    Gvar.var_1318 = 3;
                }
                if (cnt2 == 3) {
                    Gvar.var_1318 = 5;
                }
                if (Gvar.var_1316 == 1) {
                    Adap.pos(Gvar.var_1319 + Gvar.var_1318, Gvar.var_1320 - 5 + Gvar.var_1317);
                }
                if (Gvar.var_1316 == 2) {
                    Adap.pos(Gvar.var_1319 + Gvar.var_1318, Gvar.var_1320 - 10 + Gvar.var_1317);
                }
                if (Gvar.var_1316 == 3) {
                    Adap.pos(Gvar.var_1319 + Gvar.var_1318, Gvar.var_1320 - 15 + Gvar.var_1317);
                }
                if (Gvar.var_1316 == 4) {
                    Adap.pos(Gvar.var_1319 + Gvar.var_1318, Gvar.var_1320 - 18 + Gvar.var_1317);
                }
                if (Gvar.var_1316 == 5) {
                    Adap.pos(Gvar.var_1319 + Gvar.var_1318, Gvar.var_1320 - 20 + Gvar.var_1317);
                }
                if (Gvar.var_1316 == 6) {
                    Adap.pos(Gvar.var_1319 + Gvar.var_1318, Gvar.var_1320 - 10 + Gvar.var_1317);
                }
                if (Gvar.var_1316 == 7) {
                    Adap.pos(Gvar.var_1319 + Gvar.var_1318, Gvar.var_1320 + Gvar.var_1317);
                }
                if (Gvar.var_1316 == 8) {
                    Adap.pos(Gvar.var_1319 + Gvar.var_1318, Gvar.var_1320 + 10 + Gvar.var_1317);
                }
                if (Gvar.var_1316 == 9) {
                    Adap.pos(Gvar.var_1319 + Gvar.var_1318, Gvar.var_1320 + 20 + Gvar.var_1317);
                }
                if (Gvar.var_1316 == 10) {
                    Adap.pos(Gvar.var_1319 + Gvar.var_1318, Gvar.var_1320 + 30 + Gvar.var_1317);
                }
                Adap.gcopy(9, 120, 40, 40, 40);
                Gvar.var_1317 = Gvar.var_1317 + 20;
            }
        }
        if (Gvar.var_584 >= 1) {
            for (let cnt2 = 0; cnt2 < 100; ++cnt2) {
                Adap.pos(Gvar.var_587[cnt2][1], Gvar.var_587[cnt2][2]);
                if (Gvar.var_587[cnt2][3] == 0 && Gvar.var_587[cnt2][0] == 0) {
                    Adap.gcopy(3, 560, 160, 20, 20);
                }
                if (Gvar.var_587[cnt2][3] == 1 && Gvar.var_587[cnt2][0] == 0) {
                    Adap.gcopy(3, 580, 160, 20, 20);
                }
                if (Gvar.var_587[cnt2][3] == 2 && Gvar.var_587[cnt2][0] == 0) {
                    Adap.gcopy(3, 560, 180, 20, 20);
                }
                if (Gvar.var_587[cnt2][3] == 3 && Gvar.var_587[cnt2][0] == 0) {
                    Adap.gcopy(3, 580, 180, 20, 20);
                }
                if (Gvar.var_587[cnt2][3] == 0 && Gvar.var_587[cnt2][0] == 1) {
                    Adap.gcopy(3, 600, 160, 20, 20);
                }
                if (Gvar.var_587[cnt2][3] == 1 && Gvar.var_587[cnt2][0] == 1) {
                    Adap.gcopy(3, 620, 160, 20, 20);
                }
                if (Gvar.var_587[cnt2][3] == 2 && Gvar.var_587[cnt2][0] == 1) {
                    Adap.gcopy(3, 600, 180, 20, 20);
                }
                if (Gvar.var_587[cnt2][3] == 3 && Gvar.var_587[cnt2][0] == 1) {
                    Adap.gcopy(3, 620, 180, 20, 20);
                }
                if (Gvar.var_587[cnt2][3] == 0 && Gvar.var_587[cnt2][0] == 2) {
                    Adap.gcopy(3, 640, 160, 40, 40);
                }
                if (Gvar.var_587[cnt2][3] == 1 && Gvar.var_587[cnt2][0] == 2) {
                    Adap.gcopy(3, 680, 160, 40, 40);
                }
                if (Gvar.var_587[cnt2][3] == 2 && Gvar.var_587[cnt2][0] == 2) {
                    Adap.gcopy(3, 720, 160, 40, 40);
                }
                if (Gvar.var_587[cnt2][3] == 3 && Gvar.var_587[cnt2][0] == 2) {
                    Adap.gcopy(3, 760, 160, 40, 40);
                }
                Gvar.var_587[cnt2][1] = Gvar.var_587[cnt2][1] - Gvar.var_587[cnt2][4];
                Gvar.var_587[cnt2][2] = Gvar.var_587[cnt2][2] + Gvar.var_587[cnt2][5];
                Gvar.var_587[cnt2][3] = Gvar.var_587[cnt2][3] + 1;
                if (Gvar.var_587[cnt2][3] == 4) {
                    Gvar.var_587[cnt2][3] = 0;
                }
            }
        }
        if (Gvar.var_586 >= 1) {
            if (Gvar.var_586 == 1) {
                Adap.pos(105, 0);
            }
            if (Gvar.var_586 == 2) {
                Adap.pos(105, 50);
            }
            if (Gvar.var_586 == 3) {
                Adap.pos(105, 80);
            }
            if (Gvar.var_586 == 4) {
                Adap.pos(105, 105);
            }
            if (Gvar.var_586 == 5) {
                Adap.pos(105, 110);
            }
            if (Gvar.var_586 == 6) {
                Adap.pos(105, 105);
            }
            if (Gvar.var_586 == 7) {
                Adap.pos(105, 110);
            }
            if (Gvar.var_586 >= 8) {
                Adap.pos(105, 105);
            }
            Adap.gcopy(3, 840, 160, 160, 120);
        }
        if (Gvar.var_1321 >= 1) {
            if (Gvar.var_1321 <= 3 || Gvar.var_1321 > 13) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
            }
            else {
                Adap.gmode(2, null, null, null);
            }
            if (Gvar.var_1321 == 1) {
                Adap.pos(160, 155);
            }
            if (Gvar.var_1321 == 2) {
                Adap.pos(160, 150);
            }
            if (Gvar.var_1321 == 3) {
                Adap.pos(160, 145);
            }
            if (Gvar.var_1321 == 4) {
                Adap.pos(160, 140);
            }
            if (Gvar.var_1321 == 5) {
                Adap.pos(160, 135);
            }
            if (Gvar.var_1321 >= 6) {
                Adap.pos(160, 130);
            }
            Adap.gcopy(3, 80, 120, 40, 40);
        }
        if (Gvar.var_1322 >= 1) {
            Adap.pos((Gvar.var_347 - Gvar.var_66 + 4) * 40, (Gvar.var_348 - Gvar.var_67 + 4) * 40 - 10);
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1322 == 1 || Gvar.var_1322 == 2) {
                Adap.gcopy(3, 360, 240, 40, 40);
            }
            if (Gvar.var_1322 == 3 || Gvar.var_1322 == 4) {
                Adap.gcopy(3, 400, 240, 40, 40);
            }
            if (Gvar.var_1322 == 5 || Gvar.var_1322 == 6) {
                Adap.gcopy(3, 440, 240, 40, 40);
            }
        }
        if (Gvar.var_1323 >= 1) {
            if (Gvar.var_1323 >= 11) {
                Adap.pos(Gvar.var_1324, Gvar.var_1325);
                Adap.gmode(2, null, null, null);
                Adap.gcopy(3, 720, 520, 40, 40);
            }
            if (Gvar.var_1323 <= 10) {
                Adap.gsel(32);
                Adap.color(0, 0, 0);
                Adap.boxf(0, 0, 160, 160);
                if (Gvar.var_1323 == 1) {
                    Adap.pos(0, 0);
                    Adap.gzoom(160, 160, 3, 720, 520, 40, 40, 1);
                    Gvar.var_1326 = 80;
                    Gvar.var_1327 = Gvar.var_1326;
                }
                if (Gvar.var_1323 == 2) {
                    Adap.pos(0, 0);
                    Adap.gzoom(150, 150, 3, 720, 520, 40, 40, 1);
                    Gvar.var_1326 = 75;
                    Gvar.var_1327 = Gvar.var_1326;
                }
                if (Gvar.var_1323 == 3) {
                    Adap.pos(0, 0);
                    Adap.gzoom(140, 140, 3, 720, 520, 40, 40, 1);
                    Gvar.var_1326 = 70;
                    Gvar.var_1327 = Gvar.var_1326;
                }
                if (Gvar.var_1323 == 4) {
                    Adap.pos(0, 0);
                    Adap.gzoom(130, 130, 3, 720, 520, 40, 40, 1);
                    Gvar.var_1326 = 65;
                    Gvar.var_1327 = Gvar.var_1326;
                }
                if (Gvar.var_1323 == 5) {
                    Adap.pos(0, 0);
                    Adap.gzoom(120, 120, 3, 720, 520, 40, 40, 1);
                    Gvar.var_1326 = 60;
                    Gvar.var_1327 = Gvar.var_1326;
                }
                if (Gvar.var_1323 == 6) {
                    Adap.pos(0, 0);
                    Adap.gzoom(110, 110, 3, 720, 520, 40, 40, 1);
                    Gvar.var_1326 = 55;
                    Gvar.var_1327 = Gvar.var_1326;
                }
                if (Gvar.var_1323 == 7) {
                    Adap.pos(0, 0);
                    Adap.gzoom(100, 100, 3, 720, 520, 40, 40, 1);
                    Gvar.var_1326 = 50;
                    Gvar.var_1327 = Gvar.var_1326;
                }
                if (Gvar.var_1323 == 8) {
                    Adap.pos(0, 0);
                    Adap.gzoom(80, 80, 3, 720, 520, 40, 40, 1);
                    Gvar.var_1326 = 40;
                    Gvar.var_1327 = Gvar.var_1326;
                }
                if (Gvar.var_1323 == 9) {
                    Adap.pos(0, 0);
                    Adap.gzoom(60, 60, 3, 720, 520, 40, 40, 1);
                    Gvar.var_1326 = 30;
                    Gvar.var_1327 = Gvar.var_1326;
                }
                if (Gvar.var_1323 >= 10) {
                    Adap.pos(0, 0);
                    Adap.gzoom(40, 40, 3, 720, 520, 40, 40, 1);
                    Gvar.var_1326 = 20;
                    Gvar.var_1327 = Gvar.var_1326;
                }
                Adap.gsel(0);
                Adap.gmode(2, null, null, null);
                if (Gvar.var_1323 == 1) {
                    Adap.pos(Gvar.var_1324 - Gvar.var_1326 + 20, Gvar.var_1325 - Gvar.var_1327 + 20);
                }
                if (Gvar.var_1323 == 2) {
                    Adap.pos(Gvar.var_1324 - Gvar.var_1326 + 20, Gvar.var_1325 - Gvar.var_1327 + 20);
                }
                if (Gvar.var_1323 == 3) {
                    Adap.pos(Gvar.var_1324 - Gvar.var_1326 + 20, Gvar.var_1325 - Gvar.var_1327 + 20);
                }
                if (Gvar.var_1323 == 4) {
                    Adap.pos(Gvar.var_1324 - Gvar.var_1326 + 20, Gvar.var_1325 - Gvar.var_1327 + 20);
                }
                if (Gvar.var_1323 == 5) {
                    Adap.pos(Gvar.var_1324 - Gvar.var_1326 + 20, Gvar.var_1325 - Gvar.var_1327 + 20);
                }
                if (Gvar.var_1323 == 6) {
                    Adap.pos(Gvar.var_1324 - Gvar.var_1326 + 20, Gvar.var_1325 - Gvar.var_1327 + 20);
                }
                if (Gvar.var_1323 == 7) {
                    Adap.pos(Gvar.var_1324 - Gvar.var_1326 + 20, Gvar.var_1325 - Gvar.var_1327 + 20);
                }
                if (Gvar.var_1323 == 8) {
                    Adap.pos(Gvar.var_1324 - Gvar.var_1326 + 20, Gvar.var_1325 - Gvar.var_1327 + 20);
                }
                if (Gvar.var_1323 == 9) {
                    Adap.pos(Gvar.var_1324 - Gvar.var_1326 + 20, Gvar.var_1325 - Gvar.var_1327 + 20);
                }
                if (Gvar.var_1323 >= 10) {
                    Adap.pos(Gvar.var_1324 - Gvar.var_1326 + 20, Gvar.var_1325 - Gvar.var_1327 + 20);
                }
                Adap.gcopy(32, 0, 0, 160, 160);
            }
        }
        if (Gvar.var_594 >= 1) {
            Gvar.var_1328 = Gvar.var_594 % 2;
            Adap.gmode(2, null, null, null);
            if (Gvar.var_594 == 37) {
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 200);
            }
            if (Gvar.var_594 == 38) {
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 150);
            }
            if (Gvar.var_594 == 39) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
            }
            if (Gvar.var_594 == 40) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 50);
            }
            if (Gvar.var_1328 == 0) {
                Adap.pos(30, 20);
            }
            if (Gvar.var_1328 == 1) {
                Adap.pos(32, 20);
            }
            Adap.gcopy(8, 400, 1040, 80, 80);
            if (Gvar.var_1328 == 0) {
                Adap.pos(50, 60);
            }
            if (Gvar.var_1328 == 1) {
                Adap.pos(52, 60);
            }
            Adap.gcopy(8, 400, 1120, 80, 80);
            if (Gvar.var_1328 == 0) {
                Adap.pos(200, 20);
            }
            if (Gvar.var_1328 == 1) {
                Adap.pos(202, 20);
            }
            Adap.gcopy(8, 480, 1040, 80, 80);
            if (Gvar.var_1328 == 0) {
                Adap.pos(30, 150);
            }
            if (Gvar.var_1328 == 1) {
                Adap.pos(32, 150);
            }
            Adap.gcopy(8, 480, 1040, 80, 80);
            if (Gvar.var_1328 == 0) {
                Adap.pos(230, 120);
            }
            if (Gvar.var_1328 == 1) {
                Adap.pos(232, 120);
            }
            Adap.gcopy(8, 400, 1120, 80, 80);
            if (Gvar.var_1328 == 0) {
                Adap.pos(250, 170);
            }
            if (Gvar.var_1328 == 1) {
                Adap.pos(252, 170);
            }
            Adap.gcopy(8, 400, 1040, 80, 80);
        }
        if (Gvar.var_1329 >= 1) {
            Gvar.var_1330 = Gvar.var_1329 % 2;
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1329 == 37) {
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 200);
            }
            if (Gvar.var_1329 == 38) {
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 150);
            }
            if (Gvar.var_1329 == 39) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
            }
            if (Gvar.var_1329 == 40) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 50);
            }
            if (Gvar.var_1330 == 0) {
                Adap.pos(30, 20);
            }
            if (Gvar.var_1330 == 1) {
                Adap.pos(32, 20);
            }
            Adap.gcopy(8, 560, 1040, 80, 80);
            if (Gvar.var_1330 == 0) {
                Adap.pos(50, 60);
            }
            if (Gvar.var_1330 == 1) {
                Adap.pos(52, 60);
            }
            Adap.gcopy(8, 560, 1120, 80, 80);
            if (Gvar.var_1330 == 0) {
                Adap.pos(200, 20);
            }
            if (Gvar.var_1330 == 1) {
                Adap.pos(202, 20);
            }
            Adap.gcopy(8, 640, 1040, 80, 80);
            if (Gvar.var_1330 == 0) {
                Adap.pos(30, 150);
            }
            if (Gvar.var_1330 == 1) {
                Adap.pos(32, 150);
            }
            Adap.gcopy(8, 640, 1040, 80, 80);
            if (Gvar.var_1330 == 0) {
                Adap.pos(230, 120);
            }
            if (Gvar.var_1330 == 1) {
                Adap.pos(232, 120);
            }
            Adap.gcopy(8, 560, 1120, 80, 80);
            if (Gvar.var_1330 == 0) {
                Adap.pos(250, 170);
            }
            if (Gvar.var_1330 == 1) {
                Adap.pos(252, 170);
            }
            Adap.gcopy(8, 560, 1040, 80, 80);
        }
        if (Gvar.var_469 >= 1) {
            if (Gvar.var_469 >= 1 && Gvar.var_469 < 4) {
                Adap.pos(4 * Gvar.var_35 + 10, 4 * Gvar.var_36 - 20);
            }
            if (Gvar.var_469 >= 4 && Gvar.var_469 < 7) {
                Adap.pos(4 * Gvar.var_35 + 20, 4 * Gvar.var_36 - 10);
            }
            if (Gvar.var_469 >= 7 && Gvar.var_469 < 10) {
                Adap.pos(4 * Gvar.var_35 + 20, 4 * Gvar.var_36);
            }
            Adap.gmode(2, null, null, null);
            Adap.gcopy(3, 240, 360, 40, 40);
        }
        if (Gvar.var_272 == 1) {
            Adap.gmode(2, null, null, null);
            if (Gvar.var_199 == 8) {
                Adap.pos(4 * Gvar.var_35, 3 * Gvar.var_36 - 10);
                Adap.gcopy(3, 280, 360, 40, 40);
            }
            if (Gvar.var_199 == 4) {
                Adap.pos(3 * Gvar.var_35, 4 * Gvar.var_36 - 10);
                Adap.gcopy(3, 320, 360, 40, 40);
            }
            if (Gvar.var_199 == 2) {
                Adap.pos(4 * Gvar.var_35, 5 * Gvar.var_36 - 10);
                Adap.gcopy(3, 360, 360, 40, 40);
            }
            if (Gvar.var_199 == 6) {
                Adap.pos(5 * Gvar.var_35, 4 * Gvar.var_36 - 10);
                Adap.gcopy(3, 400, 360, 40, 40);
            }
            if (Gvar.var_199 == 1) {
                Adap.pos(3 * Gvar.var_35, 5 * Gvar.var_36 - 10);
                Adap.gcopy(3, 440, 360, 40, 40);
            }
            if (Gvar.var_199 == 7) {
                Adap.pos(3 * Gvar.var_35, 3 * Gvar.var_36 - 10);
                Adap.gcopy(3, 480, 360, 40, 40);
            }
            if (Gvar.var_199 == 3) {
                Adap.pos(5 * Gvar.var_35, 5 * Gvar.var_36 - 10);
                Adap.gcopy(3, 520, 360, 40, 40);
            }
            if (Gvar.var_199 == 9) {
                Adap.pos(5 * Gvar.var_35, 3 * Gvar.var_36 - 10);
                Adap.gcopy(3, 560, 360, 40, 40);
            }
            if (Gvar.equip_disc[316] == 1 && Gvar.var_268 != 0 && Gvar.var_127 == 0) {
                Gvar.enemy_list = Gvar.var_83[Gvar.var_268].Var0;
                await Func.func626();
                Gvar.var_1331 = Gvar.enemy_hp;
                if (Gvar.var_83[Gvar.var_268].Var39 >= 2) {
                    Gvar.var_1331 = Math.floor(Gvar.enemy_hp * (Gvar.var_83[Gvar.var_268].Var39 + 10) / 10);
                    if (Gvar.var_1331 >= 999) {
                        Gvar.var_1331 = 999;
                    }
                }
                Gvar.var_1332 = Math.floor(Gvar.var_83[Gvar.var_268].Var3 * 100 / Gvar.var_1331);
                Adap.color(0, 255, 0);
                Adap.font(Gvar.font_type, 12);
                Gvar.var_1333 = "" + Gvar.var_1332 + " %";
                if (Gvar.var_83[Gvar.var_268].Var0 == 36 || Gvar.var_83[Gvar.var_268].Var0 == 105 || Gvar.var_83[Gvar.var_268].Var0 == 106 || Gvar.var_83[Gvar.var_268].Var0 == 107 || Gvar.var_83[Gvar.var_268].Var0 == 108) {
                    Gvar.var_1333 = Gvar.var_1333 + "  EXP : " + Gvar.var_83[Gvar.var_268].Var16;
                }
                Adap.mes(Gvar.var_1333);
            }
            if (Gvar.equip_disc[315] == 999 && Gvar.var_268 != 0 && Gvar.var_127 == 0) {
                Gvar.enemy_list = Gvar.var_83[Gvar.var_268].Var0;
                if (Gvar.enemy_list != 46 && Gvar.enemy_list != 30 && Gvar.enemy_list != 124 && Gvar.enemy_list != 85 && Gvar.enemy_list != 99 && Gvar.enemy_list == 153) {
                    await Func.func626();
                    if (Gvar.var_83[Gvar.var_268].Var39 >= 2) {
                        Gvar.enemy_power = Math.floor(Gvar.enemy_power * (Gvar.var_83[Gvar.var_268].Var39 * 2 + 10) / 10);
                    }
                    if (Gvar.var_83[Gvar.var_268].Var25 >= 1 && Gvar.var_83[Gvar.var_268].Var25 <= 50) {
                        Gvar.enemy_power = Gvar.enemy_power + Gvar.var_83[Gvar.var_268].Var25;
                    }
                    if (Gvar.var_83[Gvar.var_268].Var25 >= 51 && Gvar.var_83[Gvar.var_268].Var25 <= 99) {
                        Gvar.enemy_power = Gvar.enemy_power - (Gvar.var_83[Gvar.var_268].Var25 - 50);
                        if (Gvar.enemy_power <= 1) {
                            Gvar.enemy_power = 1;
                        }
                    }
                    Gvar.var_949 = Math.floor(Gvar.enemy_power * (Gvar.enemy_power + Gvar.enemy_power - 8) / 16) + Gvar.enemy_power;
                    for (let cnt4 = 0; cnt4 < Gvar.var_581; ++cnt4) {
                        Gvar.var_949 = Math.floor(Gvar.var_949 * 15 / 16);
                    }
                    Gvar.var_1334 = 111;
                    Gvar.var_1335 = 143;
                    Gvar.var_1336 = Math.floor(Gvar.var_949 * Gvar.var_1334 / 128);
                    // 波紋使い関係??
                    if (Gvar.var_130 != 0) {
                        Gvar.var_1337 = Gvar.var_83[Gvar.var_268].Var0;
                        if (Gvar.var_1337 == 147 || Gvar.var_1337 == 73 || Gvar.var_1337 == 119 || Gvar.var_1337 == 136 || Gvar.var_1337 == 135 || Gvar.var_1337 == 139 || Gvar.var_1337 == 140 || Gvar.var_1337 == 105) {
                            Gvar.var_1336 = Math.floor(Gvar.var_1336 * 3 / 2);
                        }
                    }

                    if (Gvar.var_182 == 1) {
                        Gvar.var_1336 = Math.floor(Gvar.var_1336 / 2);
                    }
                    if (Gvar.var_1336 <= 1) {
                        Gvar.var_1336 = 1;
                    }
                    Gvar.var_1338 = Math.floor(Gvar.var_949 * Gvar.var_1335 / 128);
                    if (Gvar.var_130 != 0) {
                        Gvar.var_1337 = Gvar.var_83[Gvar.var_268].Var0;
                        if (Gvar.var_1337 == 147 || Gvar.var_1337 == 73 || Gvar.var_1337 == 119 || Gvar.var_1337 == 136 || Gvar.var_1337 == 135 || Gvar.var_1337 == 139 || Gvar.var_1337 == 140 || Gvar.var_1337 == 105) {
                            Gvar.var_1338 = Math.floor(Gvar.var_1338 * 3 / 2);
                        }
                    }
                    if (Gvar.var_182 == 1) {
                        Gvar.var_1338 = Math.floor(Gvar.var_1338 / 2);
                    }
                    if (Gvar.var_1338 <= 1) {
                        Gvar.var_1338 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_268].Var0 == 14 || Gvar.var_83[Gvar.var_268].Var0 == 66 || Gvar.var_83[Gvar.var_268].Var0 == 47 || Gvar.var_83[Gvar.var_268].Var0 == 120 || Gvar.var_83[Gvar.var_268].Var0 == 160 || Gvar.var_83[Gvar.var_268].Var0 == 67) {
                        Gvar.var_83[Gvar.var_268].Var20 = 0;
                        Gvar.var_1338 = Math.floor(Gvar.var_1338 * 3 / 2);
                    }
                    Adap.color(0, 255, 0);
                    Adap.font(Gvar.font_type, 12);
                    Adap.mes(tf("{0} ～ {1}", Gvar.var_1336, Gvar.var_1338));
                }
                if (Gvar.enemy_list == 46 || Gvar.enemy_list == 30 || Gvar.enemy_list == 124 || Gvar.enemy_list == 85 || Gvar.enemy_list == 99 || Gvar.enemy_list == 153) {
                    if (Gvar.enemy_list == 46) {
                        Gvar.var_1336 = 15;
                        Gvar.var_1338 = 15;
                    }
                    if (Gvar.enemy_list == 30) {
                        Gvar.var_1336 = 15;
                        Gvar.var_1338 = 90;
                    }
                    if (Gvar.enemy_list == 124) {
                        Gvar.var_1336 = 30;
                        Gvar.var_1338 = 30;
                    }
                    if (Gvar.enemy_list == 85) {
                        Gvar.var_1336 = 10;
                        Gvar.var_1338 = 16;
                    }
                    if (Gvar.enemy_list == 99) {
                        Gvar.var_1336 = 10;
                        Gvar.var_1338 = 10;
                    }
                    if (Gvar.enemy_list == 153) {
                        Gvar.var_1336 = 20;
                        Gvar.var_1338 = 20;
                    }
                    if (Gvar.var_83[Gvar.var_268].Var39 >= 2) {
                        Gvar.var_1336 = (Gvar.var_83[Gvar.var_268].Var39 - 1) * 2 + Gvar.var_1336;
                        Gvar.var_1338 = (Gvar.var_83[Gvar.var_268].Var39 - 1) * 2 + Gvar.var_1338;
                    }
                    if (Gvar.equip_disc[205] == 1) {
                        Gvar.var_1336 = Math.floor(Gvar.var_1336 * 2 / 3);
                        Gvar.var_1338 = Math.floor(Gvar.var_1338 * 2 / 3);
                    }
                    // アイテム「鉄球」を使用して射撃攻撃ダメージがアップしている場合
                    if (Gvar.var_168 == 1) {
                        Gvar.var_1336 = Math.floor(Gvar.var_1336 * 2 / 3);
                        Gvar.var_1338 = Math.floor(Gvar.var_1338 * 2 / 3);
                    }
                    Adap.color(0, 255, 0);
                    Adap.font(Gvar.font_type, 12);
                    Adap.mes(tf("{0} ～ {1}", Gvar.var_1336, Gvar.var_1338));
                }
            }
        }
        if (Gvar.var_1339 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos(Gvar.var_1340, Gvar.var_1341);
            if (Gvar.var_862[851][0] == 1) {
                Adap.gcopy(9, 320, 280, 40, 40);
            }
            if (Gvar.var_862[851][0] == 0) {
                Adap.gcopy(9, 360, 280, 40, 40);
            }
        }
        if (Gvar.var_1342 >= 1) {
            Adap.pos((Gvar.var_1343 - Gvar.var_66 + 4) * 40 - 15, (Gvar.var_1344 - Gvar.var_67 + 4) * 40 - 20);
            Adap.gmode(2, null, null, null);
            Adap.gcopy(15, 960, 680, 40, 40);
        }
        if (Gvar.var_1345 >= 1) {
            if (Gvar.var_1345 >= 1 && Gvar.var_1345 < 15) {
                Adap.pos((Gvar.var_83[Gvar.var_412].Var1 - Gvar.var_66 + 4) * 40, (Gvar.var_83[Gvar.var_412].Var2 - Gvar.var_67 + 4) * 40 - 10);
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
                Adap.gcopy(3, 1440, 0, 40, 45);
            }
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1345 >= 1 && Gvar.var_1345 < 15) {
                Adap.pos((Gvar.var_83[Gvar.var_412].Var1 - Gvar.var_66 + 4) * 40 + 40, (Gvar.var_83[Gvar.var_412].Var2 - Gvar.var_67 + 4) * 40 - 10 - 40);
                Adap.gcopy(3, 600, 360, 40, 40);
            }
            if (Gvar.var_1345 >= 1 && Gvar.var_1345 < 15) {
                Adap.pos((Gvar.var_83[Gvar.var_412].Var1 - Gvar.var_66 + 4) * 40, (Gvar.var_83[Gvar.var_412].Var2 - Gvar.var_67 + 4) * 40 - 10);
            }
            if (Gvar.var_1345 == 15) {
                Adap.pos((Gvar.var_83[Gvar.var_412].Var1 - Gvar.var_66 + 4) * 40, (Gvar.var_83[Gvar.var_412].Var2 - Gvar.var_67 + 4) * 40 - 10 - 40);
            }
            if (Gvar.var_1345 == 16) {
                Adap.pos((Gvar.var_83[Gvar.var_412].Var1 - Gvar.var_66 + 4) * 40, (Gvar.var_83[Gvar.var_412].Var2 - Gvar.var_67 + 4) * 40 - 10 - 80);
            }
            if (Gvar.var_1345 == 17) {
                Adap.pos((Gvar.var_83[Gvar.var_412].Var1 - Gvar.var_66 + 4) * 40, (Gvar.var_83[Gvar.var_412].Var2 - Gvar.var_67 + 4) * 40 - 10 - 120);
            }
            if (Gvar.var_1345 == 18) {
                Adap.pos((Gvar.var_83[Gvar.var_412].Var1 - Gvar.var_66 + 4) * 40, (Gvar.var_83[Gvar.var_412].Var2 - Gvar.var_67 + 4) * 40 - 10 - 160);
            }
            if (Gvar.var_1345 == 19) {
                Adap.pos((Gvar.var_83[Gvar.var_412].Var1 - Gvar.var_66 + 4) * 40, (Gvar.var_83[Gvar.var_412].Var2 - Gvar.var_67 + 4) * 40 - 10 - 200);
            }
            if (Gvar.var_1345 == 20) {
                Adap.pos((Gvar.var_83[Gvar.var_412].Var1 - Gvar.var_66 + 4) * 40, (Gvar.var_83[Gvar.var_412].Var2 - Gvar.var_67 + 4) * 40 - 10 - 240);
            }
            Adap.gcopy(6, 40, 1040, 40, 40);
            if (Gvar.var_1345 >= 1 && Gvar.var_1345 < 15) {
                Adap.pos((Gvar.var_83[Gvar.var_412].Var1 - Gvar.var_66 + 4) * 40 - 10, (Gvar.var_83[Gvar.var_412].Var2 - Gvar.var_67 + 4) * 40 - 10 - 10);
                Gvar.belongings_item_list = Gvar.var_417;
                Gvar.var_1248 = Gvar.var_1249;
                await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
        }
        if (Gvar.var_1346 >= 1) {
            if (Gvar.var_1346 >= 1 && Gvar.var_1346 < 15) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
                Adap.pos((Gvar.var_1347 - Gvar.var_66 + 4) * 40, (Gvar.var_1348 - Gvar.var_67 + 4) * 40 - 10);
                Adap.gcopy(3, 1440, 0, 40, 45);
            }
            if (Gvar.var_1346 >= 1 && Gvar.var_1346 < 15) {
                Adap.gmode(2, null, null, null);
                Adap.pos((Gvar.var_1347 - Gvar.var_66 + 4) * 40 + 40, (Gvar.var_1348 - Gvar.var_67 + 4) * 40 - 10 - 40);
                Adap.gcopy(3, 600, 360, 40, 40);
            }
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1349 == 1) {
                if (Gvar.var_1346 >= 1 && Gvar.var_1346 < 15) {
                    Adap.pos((Gvar.var_1347 - Gvar.var_66 + 4) * 40, (Gvar.var_1348 - Gvar.var_67 + 4) * 40 - 10);
                }
                if (Gvar.var_1346 == 15) {
                    Adap.pos((Gvar.var_1347 - Gvar.var_66 + 4) * 40, (Gvar.var_1348 - Gvar.var_67 + 4) * 40 - 10 - 40);
                }
                if (Gvar.var_1346 == 16) {
                    Adap.pos((Gvar.var_1347 - Gvar.var_66 + 4) * 40, (Gvar.var_1348 - Gvar.var_67 + 4) * 40 - 10 - 80);
                }
                if (Gvar.var_1346 == 17) {
                    Adap.pos((Gvar.var_1347 - Gvar.var_66 + 4) * 40, (Gvar.var_1348 - Gvar.var_67 + 4) * 40 - 10 - 120);
                }
                if (Gvar.var_1346 == 18) {
                    Adap.pos((Gvar.var_1347 - Gvar.var_66 + 4) * 40, (Gvar.var_1348 - Gvar.var_67 + 4) * 40 - 10 - 160);
                }
                if (Gvar.var_1346 == 19) {
                    Adap.pos((Gvar.var_1347 - Gvar.var_66 + 4) * 40, (Gvar.var_1348 - Gvar.var_67 + 4) * 40 - 10 - 200);
                }
                if (Gvar.var_1346 == 20) {
                    Adap.pos((Gvar.var_1347 - Gvar.var_66 + 4) * 40, (Gvar.var_1348 - Gvar.var_67 + 4) * 40 - 10 - 240);
                }
            }
            if (Gvar.var_1349 == 0) {
                Adap.pos((Gvar.var_1347 - Gvar.var_66 + 4) * 40, (Gvar.var_1348 - Gvar.var_67 + 4) * 40 - 10);
            }
            Adap.gcopy(6, 40, 1040, 40, 40);
            if (Gvar.var_1346 >= 1 && Gvar.var_1346 < 15) {
                Adap.pos((Gvar.var_1347 - Gvar.var_66 + 4) * 40 - 10, (Gvar.var_1348 - Gvar.var_67 + 4) * 40 - 10 - 10);
                Gvar.belongings_item_list = Gvar.var_417;
                Gvar.var_1248 = Gvar.var_1249;
                await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
        }
        if (Gvar.var_1350 >= 1) {
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1350 >= 1 && Gvar.var_1350 < 5) {
                Adap.pos((Gvar.var_83[Gvar.var_1351].Var1 - Gvar.var_66 + 4) * 40, (Gvar.var_83[Gvar.var_1351].Var2 - Gvar.var_67 + 4) * 40 - 10);
            }
            if (Gvar.var_1350 == 5) {
                Adap.pos((Gvar.var_83[Gvar.var_1351].Var1 - Gvar.var_66 + 4) * 40, (Gvar.var_83[Gvar.var_1351].Var2 - Gvar.var_67 + 4) * 40 - 10 - 40);
            }
            if (Gvar.var_1350 == 6) {
                Adap.pos((Gvar.var_83[Gvar.var_1351].Var1 - Gvar.var_66 + 4) * 40, (Gvar.var_83[Gvar.var_1351].Var2 - Gvar.var_67 + 4) * 40 - 10 - 80);
            }
            if (Gvar.var_1350 == 7) {
                Adap.pos((Gvar.var_83[Gvar.var_1351].Var1 - Gvar.var_66 + 4) * 40, (Gvar.var_83[Gvar.var_1351].Var2 - Gvar.var_67 + 4) * 40 - 10 - 120);
            }
            if (Gvar.var_1350 == 8) {
                Adap.pos((Gvar.var_83[Gvar.var_1351].Var1 - Gvar.var_66 + 4) * 40, (Gvar.var_83[Gvar.var_1351].Var2 - Gvar.var_67 + 4) * 40 - 10 - 160);
            }
            if (Gvar.var_1350 == 9) {
                Adap.pos((Gvar.var_83[Gvar.var_1351].Var1 - Gvar.var_66 + 4) * 40, (Gvar.var_83[Gvar.var_1351].Var2 - Gvar.var_67 + 4) * 40 - 10 - 200);
            }
            if (Gvar.var_1350 == 10) {
                Adap.pos((Gvar.var_83[Gvar.var_1351].Var1 - Gvar.var_66 + 4) * 40, (Gvar.var_83[Gvar.var_1351].Var2 - Gvar.var_67 + 4) * 40 - 10 - 240);
            }
            if (Gvar.var_83[Gvar.var_1351].Var0 < 50) {
                Gvar.var_965 = 6; // Adap.buffer(6)は"img_enemy1a.gif"
                Gvar.var_1352 = Gvar.var_83[Gvar.var_1351].Var0;
            }
            if (Gvar.var_83[Gvar.var_1351].Var0 >= 50 && Gvar.var_83[Gvar.var_1351].Var0 < 100) {
                Gvar.var_965 = 21; // Adap.buffer(21)は"img_enemy2a.gif"
                Gvar.var_1352 = Gvar.var_83[Gvar.var_1351].Var0 - 50;
            }
            if (Gvar.var_83[Gvar.var_1351].Var0 >= 100 && Gvar.var_83[Gvar.var_1351].Var0 < 150) {
                Gvar.var_965 = 27; // Adap.buffer(27)は"img_enemy3a.gif"
                Gvar.var_1352 = Gvar.var_83[Gvar.var_1351].Var0 - 100;
            }
            if (Gvar.var_83[Gvar.var_1351].Var0 >= 150 && Gvar.var_83[Gvar.var_1351].Var0 < 200) {
                Gvar.var_965 = 13; // Adap.buffer(13)は"img_enemy4a.gif"
                Gvar.var_1352 = Gvar.var_83[Gvar.var_1351].Var0 - 150; // ロッコ・バロッコ所長はGvar.enemy_list = 173。173 - 150 = 23。23 * 40 = 920となり、Y軸920で合致する。
            }
            Adap.gcopy(Gvar.var_965, 40, Gvar.var_1352 * 40, 40, 40);
        }
        if (Gvar.var_1353 >= 1) {
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1353 == 1) {
                Adap.pos(170, 155);
            }
            if (Gvar.var_1353 == 2) {
                Adap.pos(172, 156);
            }
            Gvar.belongings_item_list = Gvar.var_1354;
            Gvar.var_1248 = Gvar.var_1249;
            await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            Adap.pos(160, 150);
            if (Gvar.var_1353 == 1) {
                Adap.gcopy(3, 1160, 120, 40, 40);
            }
            if (Gvar.var_1353 == 2) {
                Adap.gcopy(3, 1200, 120, 40, 40);
            }
            if (Gvar.var_1353 == 1) {
                Adap.pos(120, 120);
            }
            if (Gvar.var_1353 == 2) {
                Adap.pos(122, 122);
            }
            Adap.gcopy(3, 1160, 240, 40, 40);
            if (Gvar.var_1353 == 1) {
                Adap.pos(147, 102);
            }
            if (Gvar.var_1353 == 2) {
                Adap.pos(145, 100);
            }
            Adap.gcopy(3, 1200, 240, 40, 40);
            if (Gvar.var_1353 == 1) {
                Adap.pos(180, 110);
            }
            if (Gvar.var_1353 == 2) {
                Adap.pos(182, 112);
            }
            Adap.gcopy(3, 1160, 240, 40, 40);
            if (Gvar.var_1353 == 1) {
                Adap.pos(212, 142);
            }
            if (Gvar.var_1353 == 2) {
                Adap.pos(210, 140);
            }
            Adap.gcopy(3, 1200, 240, 40, 40);
        }
        if (Gvar.var_756 >= 1) {
            Adap.gmode(2, null, null, null);
            if (Gvar.var_756 <= 10) {
                Adap.pos(240, 200);
                // Adap.buffer(18)は"img4.gif"
                // 絵: 床のタイル
                Adap.gcopy(18, 1440, 1160, 40, 40);
            }
            if (Gvar.var_756 >= 11 && Gvar.var_756 < 16) {
                Adap.pos(220, 170);
                // Adap.buffer(18)は"img4.gif" 
                // 絵: ディアボロが帰還して床を壊した際の破片1
                Adap.gcopy(18, 0, 800, 80, 80);
            }
            if (Gvar.var_756 == 16) {
                Adap.pos(220, 170);
                Adap.gcopy(18, 0, 880, 80, 80);
            }
            if (Gvar.var_756 == 17) {
                Adap.pos(220, 170);
                // Adap.buffer(18)は"img4.gif" 
                // 絵: ディアボロが帰還して床を壊した際の破片2
                Adap.gcopy(18, 0, 960, 80, 80);
            }
            if (Gvar.var_756 == 18) {
                Adap.pos(220, 170);
                // Adap.buffer(18)は"img4.gif" 
                // 絵: ディアボロが帰還して床を壊した際の破片3
                Adap.gcopy(18, 0, 1040, 80, 80);
            }
            if (Gvar.var_756 == 19) {
                Adap.pos(220, 170);
                // Adap.buffer(18)は"img4.gif" 
                // 絵: ディアボロが帰還して床を壊した際の破片4
                Adap.gcopy(18, 0, 1120, 80, 80);
            }
        }
        if (Gvar.var_757 >= 1) {
            Adap.gmode(2, null, null, null);
            if (Gvar.var_757 == 1) {
                Adap.pos(240, 0);
            }
            if (Gvar.var_757 == 2) {
                Adap.pos(240, 20);
            }
            if (Gvar.var_757 == 3) {
                Adap.pos(240, 40);
            }
            if (Gvar.var_757 == 4) {
                Adap.pos(240, 60);
            }
            if (Gvar.var_757 == 5) {
                Adap.pos(240, 80);
            }
            if (Gvar.var_757 == 6) {
                Adap.pos(240, 100);
            }
            if (Gvar.var_757 == 7) {
                Adap.pos(240, 120);
            }
            if (Gvar.var_757 == 8) {
                Adap.pos(240, 140);
            }
            if (Gvar.var_757 == 9) {
                Adap.pos(240, 160);
            }
            if (Gvar.var_757 == 10) {
                Adap.pos(240, 187);
            }
            if (Gvar.var_757 == 11) {
                Adap.pos(240, 190);
            }
            if (Gvar.var_757 == 12) {
                Adap.pos(240, 187);
            }
            if (Gvar.var_757 == 13) {
                Adap.pos(240, 190);
            }
            if (Gvar.var_757 == 14) {
                Adap.pos(240, 187);
            }
            if (Gvar.var_757 == 15) {
                Adap.pos(240, 190);
            }
            if (Gvar.var_757 == 16) {
                Adap.pos(235, 180);
            }
            if (Gvar.var_757 == 17) {
                Adap.pos(230, 170);
            }
            if (Gvar.var_757 == 18) {
                Adap.pos(225, 165);
            }
            if (Gvar.var_757 == 19) {
                Adap.pos(220, 163);
            }
            if (Gvar.var_757 == 20) {
                Adap.pos(215, 165);
            }
            if (Gvar.var_757 == 21) {
                Adap.pos(210, 170);
            }
            if (Gvar.var_757 == 22) {
                Adap.pos(200, 177);
            }
            if (Gvar.var_757 == 23) {
                Adap.pos(200, 180);
            }
            if (Gvar.var_757 == 24) {
                Adap.pos(200, 177);
            }
            if (Gvar.var_757 == 25) {
                Adap.pos(200, 180);
            }
            if (Gvar.var_757 == 26) {
                Adap.pos(195, 160);
            }
            if (Gvar.var_757 == 27) {
                Adap.pos(180, 150);
            }
            if (Gvar.var_757 == 28) {
                Adap.pos(175, 145);
            }
            if (Gvar.var_757 == 29) {
                Adap.pos(170, 143);
            }
            if (Gvar.var_757 == 30) {
                Adap.pos(165, 145);
            }
            if (Gvar.var_757 == 31) {
                Adap.pos(160, 150);
            }
            if (Gvar.var_757 == 32) {
                Adap.pos(160, 157);
            }
            if (Gvar.var_757 == 33) {
                Adap.pos(160, 160);
            }
            if (Gvar.var_757 == 34) {
                Adap.pos(160, 157);
            }
            if (Gvar.var_757 >= 35) {
                Adap.pos(160, 160);
            }
            if (Gvar.var_757 <= 35) {
                Adap.gcopy(3, 360, 1080, 40, 40);
            }
            if (Gvar.var_757 == 36) {
                Adap.gcopy(3, 400, 1080, 40, 40);
            }
            if (Gvar.var_757 == 37) {
                Adap.gcopy(3, 280, 1080, 40, 40);
            }
        }
        if (Gvar.var_1355 >= 1) {
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1355 == 1) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 230);
            }
            if (Gvar.var_1355 == 2) {
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 220);
            }
            if (Gvar.var_1355 == 3) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 210);
            }
            if (Gvar.var_1355 == 4) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 190);
            }
            if (Gvar.var_1355 == 5) {
                Adap.color(0, 0, 0);
    
                Adap.gmode(4, null, null, 170);
            }
            if (Gvar.var_1355 == 6) {
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 150);
            }
            if (Gvar.var_1355 == 7) {
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 130);
            }
            if (Gvar.var_1355 == 8) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 110);
            }
            if (Gvar.var_1355 == 9) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 90);
            }
            if (Gvar.var_1355 == 10) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 70);
            }
            if (Gvar.var_1355 == 11) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 50);
            }
            if (Gvar.var_1355 == 12) {
                Adap.color(0, 0, 0);
    
                Adap.gmode(4, null, null, 30);
            }
            if (Gvar.var_1355 == 13) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 10);
            }
            Adap.pos(160, 0);
            if (Gvar.var_1355 >= 1 && Gvar.var_1355 < 5) {
                Adap.gcopy(8, 120, 525, 40, 240);
            }
            if (Gvar.var_1355 >= 5 && Gvar.var_1355 < 7) {
                Adap.gcopy(8, 160, 525, 40, 240);
            }
            if (Gvar.var_1355 >= 7 && Gvar.var_1355 < 9) {
                Adap.gcopy(8, 200, 525, 40, 240);
            }
            if (Gvar.var_1355 >= 9 && Gvar.var_1355 < 11) {
                Adap.gcopy(8, 240, 525, 40, 240);
            }
            if (Gvar.var_1355 >= 11 && Gvar.var_1355 < 13) {
                Adap.gcopy(8, 280, 525, 40, 240);
            }
        }
        if (Gvar.var_1356 >= 1) {
            if (Gvar.var_1356 == 0 || Gvar.var_1356 == 2 || Gvar.var_1356 == 4 || Gvar.var_1356 == 6 || Gvar.var_1356 == 8 || Gvar.var_1356 == 10) {
                Adap.pos(Gvar.var_748 * Gvar.var_35 + 5, Gvar.var_749 * Gvar.var_36 - 10);
            }
            if (Gvar.var_1356 == 1 || Gvar.var_1356 == 3 || Gvar.var_1356 == 5 || Gvar.var_1356 == 7 || Gvar.var_1356 == 9) {
                Adap.pos(Gvar.var_748 * Gvar.var_35, Gvar.var_749 * Gvar.var_36 - 10);
            }
            if (Gvar.var_1356 >= 0 && Gvar.var_1356 < 8) {
                Adap.gmode(2, null, null, null);
            }
            if (Gvar.var_1356 == 8) {
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 180);
            }
            if (Gvar.var_1356 == 9) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
            }
            if (Gvar.var_1356 == 10) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 50);
            }
            Adap.gcopy(11, 960, 240, 40, 40);
        }
        if (Gvar.var_1357 >= 1) {
            if (Gvar.var_1357 == 0 || Gvar.var_1357 == 2 || Gvar.var_1357 == 4 || Gvar.var_1357 == 6 || Gvar.var_1357 == 8 || Gvar.var_1357 == 10) {
                Adap.pos(Gvar.var_748 + 5, Gvar.var_749 - 40);
            }
            if (Gvar.var_1357 == 1 || Gvar.var_1357 == 3 || Gvar.var_1357 == 5 || Gvar.var_1357 == 7 || Gvar.var_1357 == 9) {
                Adap.pos(Gvar.var_748, Gvar.var_749 - 40);
            }
            if (Gvar.var_1357 >= 0 && Gvar.var_1357 < 8) {
                Adap.gmode(2, null, null, null);
            }
            if (Gvar.var_1357 == 8) {
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 180);
            }
            if (Gvar.var_1357 == 9) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
            }
            if (Gvar.var_1357 == 10) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 50);
            }
            Adap.gcopy(11, 960, 240, 40, 40);
        }
        if (Gvar.var_1358 >= 1) {
            if (Gvar.var_1359 == 1) {
                Adap.gmode(2, null, null, null);
                if (Gvar.var_1358 == 2 || Gvar.var_1358 == 19) {
                    Adap.color(0, 0, 0);

                    Adap.gmode(4, null, null, 100);
                }
                if (Gvar.var_1358 == 1 || Gvar.var_1358 == 20) {
                    Adap.color(0, 0, 0);
    
                    Adap.gmode(4, null, null, 50);
                }
                Adap.pos((Gvar.var_1360 - Gvar.var_66 + 4) * 40, (Gvar.var_1361 - Gvar.var_67 + 4) * 40 - 10);
                if (Gvar.var_83[Gvar.var_314].Var5 == 2) {
                    Adap.gcopy(34, 0, 520, 40, 40);
                }
                if (Gvar.var_83[Gvar.var_314].Var5 == 4) {
                    Adap.gcopy(34, 40, 520, 40, 40);
                }
                if (Gvar.var_83[Gvar.var_314].Var5 == 8) {
                    Adap.gcopy(34, 80, 520, 40, 40);
                }
                if (Gvar.var_83[Gvar.var_314].Var5 == 6) {
                    Adap.gcopy(34, 120, 520, 40, 40);
                }
                if (Gvar.var_83[Gvar.var_314].Var5 == 1) {
                    Adap.gcopy(34, 160, 520, 40, 40);
                }
                if (Gvar.var_83[Gvar.var_314].Var5 == 7) {
                    Adap.gcopy(34, 200, 520, 40, 40);
                }
                if (Gvar.var_83[Gvar.var_314].Var5 == 3) {
                    Adap.gcopy(34, 240, 520, 40, 40);
                }
                if (Gvar.var_83[Gvar.var_314].Var5 == 9) {
                    Adap.gcopy(34, 280, 520, 40, 40);
                }
            }
            Gvar.var_1362 = Gvar.var_1358 % 2;
            Adap.color(0, 0, 0);
    
            Adap.gmode(4, null, null, 150);
            Adap.pos(4 * 40, 4 * 40 - 10);
            if (Gvar.var_1362 == 0) {
                Adap.gcopy(3, 640, 520, 40, 40);
            }
            if (Gvar.var_1362 == 1) {
                Adap.gcopy(3, 680, 520, 40, 40);
            }
        }
        if (Gvar.var_1363 >= 1) {
            Gvar.var_1362 = Gvar.var_1363 % 2;
            Adap.color(0, 0, 0);
    
            Adap.gmode(4, null, null, 150);
            Adap.pos((Gvar.var_1360 - Gvar.var_66 + 4) * 40, (Gvar.var_1361 - Gvar.var_67 + 4) * 40 - 10);
            if (Gvar.var_1362 == 0) {
                Adap.gcopy(3, 640, 520, 40, 40);
            }
            if (Gvar.var_1362 == 1) {
                Adap.gcopy(3, 680, 520, 40, 40);
            }
        }
        if (Gvar.var_1364 >= 1) {
            if (Gvar.var_1365 == 4) {
                Gvar.var_1366 = Gvar.var_1366 - Gvar.var_1367;
                Gvar.var_1368 = Gvar.var_1368;
            }
            if (Gvar.var_1365 == 6) {
                Gvar.var_1366 = Gvar.var_1366 + Gvar.var_1367;
                Gvar.var_1368 = Gvar.var_1368;
            }
            if (Gvar.var_1365 == 2) {
                Gvar.var_1366 = Gvar.var_1366;
                Gvar.var_1368 = Gvar.var_1368 + Gvar.var_1367;
            }
            if (Gvar.var_1365 == 8) {
                Gvar.var_1366 = Gvar.var_1366;
                Gvar.var_1368 = Gvar.var_1368 - Gvar.var_1367;
            }
            if (Gvar.var_1365 == 1) {
                Gvar.var_1366 = Gvar.var_1366 - Gvar.var_1367;
                Gvar.var_1368 = Gvar.var_1368 + Gvar.var_1367;
            }
            if (Gvar.var_1365 == 3) {
                Gvar.var_1366 = Gvar.var_1366 + Gvar.var_1367;
                Gvar.var_1368 = Gvar.var_1368 + Gvar.var_1367;
            }
            if (Gvar.var_1365 == 7) {
                Gvar.var_1366 = Gvar.var_1366 - Gvar.var_1367;
                Gvar.var_1368 = Gvar.var_1368 - Gvar.var_1367;
            }
            if (Gvar.var_1365 == 9) {
                Gvar.var_1366 = Gvar.var_1366 + Gvar.var_1367;
                Gvar.var_1368 = Gvar.var_1368 - Gvar.var_1367;
            }
            Adap.pos(Gvar.var_1369 * Gvar.var_35 + Gvar.var_1366, Gvar.var_1370 * Gvar.var_36 - 10 + Gvar.var_1368);
            if (Gvar.var_1371 == 1) {
                Gvar.var_1372 = 13;
            }
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1365 == 4) {
                Adap.gcopy(6, 1080, Gvar.var_1372 * 40, 40, 40);
            }
            if (Gvar.var_1365 == 6) {
                Adap.gcopy(6, 1000, Gvar.var_1372 * 40, 40, 40);
            }
            if (Gvar.var_1365 == 8) {
                Adap.gcopy(6, 960, Gvar.var_1372 * 40, 40, 40);
            }
            if (Gvar.var_1365 == 2) {
                Adap.gcopy(6, 1040, Gvar.var_1372 * 40, 40, 40);
            }
            if (Gvar.var_1365 == 1) {
                Adap.gcopy(6, 1240, Gvar.var_1372 * 40, 40, 40);
            }
            if (Gvar.var_1365 == 3) {
                Adap.gcopy(6, 1160, Gvar.var_1372 * 40, 40, 40);
            }
            if (Gvar.var_1365 == 7) {
                Adap.gcopy(6, 1200, Gvar.var_1372 * 40, 40, 40);
            }
            if (Gvar.var_1365 == 9) {
                Adap.gcopy(6, 1120, Gvar.var_1372 * 40, 40, 40);
            }
        }
        if (Gvar.var_1373 >= 1) {
            if (Gvar.var_1365 == 4) {
                Gvar.var_1366 = Gvar.var_1366 - Gvar.var_1367;
                Gvar.var_1368 = Gvar.var_1368;
            }
            if (Gvar.var_1365 == 6) {
                Gvar.var_1366 = Gvar.var_1366 + Gvar.var_1367;
                Gvar.var_1368 = Gvar.var_1368;
            }
            if (Gvar.var_1365 == 2) {
                Gvar.var_1366 = Gvar.var_1366;
                Gvar.var_1368 = Gvar.var_1368 + Gvar.var_1367;
            }
            if (Gvar.var_1365 == 8) {
                Gvar.var_1366 = Gvar.var_1366;
                Gvar.var_1368 = Gvar.var_1368 - Gvar.var_1367;
            }
            if (Gvar.var_1365 == 1) {
                Gvar.var_1366 = Gvar.var_1366 - Gvar.var_1367;
                Gvar.var_1368 = Gvar.var_1368 + Gvar.var_1367;
            }
            if (Gvar.var_1365 == 3) {
                Gvar.var_1366 = Gvar.var_1366 + Gvar.var_1367;
                Gvar.var_1368 = Gvar.var_1368 + Gvar.var_1367;
            }
            if (Gvar.var_1365 == 7) {
                Gvar.var_1366 = Gvar.var_1366 - Gvar.var_1367;
                Gvar.var_1368 = Gvar.var_1368 - Gvar.var_1367;
            }
            if (Gvar.var_1365 == 9) {
                Gvar.var_1366 = Gvar.var_1366 + Gvar.var_1367;
                Gvar.var_1368 = Gvar.var_1368 - Gvar.var_1367;
            }
            Adap.pos(Gvar.var_1369 * Gvar.var_35 + Gvar.var_1366, Gvar.var_1370 * Gvar.var_36 - 10 + Gvar.var_1368);
            if (Gvar.var_1374 < 50) {
                Gvar.var_1375 = 6; // Adap.buffer(6)は"img_enemy1a.gif"
                Gvar.var_1376 = Gvar.var_1374;
            }
            if (Gvar.var_1374 >= 50 && Gvar.var_1374 < 100) {
                Gvar.var_1375 = 21; // Adap.buffer(21)は"img_enemy2a.gif"
                Gvar.var_1376 = Gvar.var_1374 - 50;
            }
            if (Gvar.var_1374 >= 100 && Gvar.var_1374 < 150) {
                Gvar.var_1375 = 27; // Adap.buffer(27)は"img_enemy3a.gif"
                Gvar.var_1376 = Gvar.var_1374 - 100;
            }
            if (Gvar.var_1374 >= 150 && Gvar.var_1374 < 200) {
                Gvar.var_1375 = 13; // Adap.buffer(13)は"img_enemy4a.gif"
                Gvar.var_1376 = Gvar.var_1374 - 150; // ロッコ・バロッコ所長はGvar.enemy_list = 173。173 - 150 = 23。23 * 40 = 920となり、Y軸920で合致する。
            }
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1365 == 4) {
                Adap.gcopy(Gvar.var_1375, 1080, Gvar.var_1376 * 40, 40, 40);
            }
            if (Gvar.var_1365 == 6) {
                Adap.gcopy(Gvar.var_1375, 1000, Gvar.var_1376 * 40, 40, 40);
            }
            if (Gvar.var_1365 == 8) {
                Adap.gcopy(Gvar.var_1375, 960, Gvar.var_1376 * 40, 40, 40);
            }
            if (Gvar.var_1365 == 2) {
                Adap.gcopy(Gvar.var_1375, 1040, Gvar.var_1376 * 40, 40, 40);
            }
            if (Gvar.var_1365 == 1) {
                Adap.gcopy(Gvar.var_1375, 1240, Gvar.var_1376 * 40, 40, 40);
            }
            if (Gvar.var_1365 == 3) {
                Adap.gcopy(Gvar.var_1375, 1160, Gvar.var_1376 * 40, 40, 40);
            }
            if (Gvar.var_1365 == 7) {
                Adap.gcopy(Gvar.var_1375, 1200, Gvar.var_1376 * 40, 40, 40);
            }
            if (Gvar.var_1365 == 9) {
                Adap.gcopy(Gvar.var_1375, 1120, Gvar.var_1376 * 40, 40, 40);
            }
        }
        if (Gvar.var_1377 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos(Gvar.var_1378, Gvar.var_1379);
            if (Gvar.var_1377 == 1 || Gvar.var_1377 == 2) {
                Adap.gcopy(28, 960, 840, 40, 40);
            }
            if (Gvar.var_1377 == 3 || Gvar.var_1377 == 4) {
                Adap.gcopy(28, 1000, 840, 40, 40);
            }
            if (Gvar.var_1377 == 5 || Gvar.var_1377 == 6) {
                Adap.gcopy(28, 1040, 840, 40, 40);
            }
            if (Gvar.var_1377 == 7 || Gvar.var_1377 == 8) {
                Adap.gcopy(28, 1080, 840, 40, 40);
            }
            if (Gvar.var_1377 == 9 || Gvar.var_1377 == 10) {
                Adap.gcopy(28, 1120, 840, 40, 40);
            }
        }
        if (Gvar.var_1242 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos(165, 140);
            Adap.gcopy(9, 200, 120, 40, 40);
        }
        if (Gvar.var_1380 >= 1) {
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1380 == 1 || Gvar.var_1380 == 3 || Gvar.var_1380 == 5 || Gvar.var_1380 == 7) {
                Adap.pos(160, 150);
            }
            if (Gvar.var_1380 == 2 || Gvar.var_1380 == 4 || Gvar.var_1380 == 6 || Gvar.var_1380 == 8) {
                Adap.pos(162, 150);
            }
            if (Gvar.var_1380 <= 8) {
                Adap.gcopy(3, 720, 120, 40, 40);
            }
        }
        if (Gvar.var_1381 >= 1) {
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1381 == 1 || Gvar.var_1381 == 3 || Gvar.var_1381 == 5 || Gvar.var_1381 == 7) {
                Adap.pos(160, 150);
            }
            if (Gvar.var_1381 == 2 || Gvar.var_1381 == 4 || Gvar.var_1381 == 6 || Gvar.var_1381 == 8) {
                Adap.pos(162, 150);
            }
            if (Gvar.var_1381 <= 8) {
                Adap.gcopy(3, 120, 120, 40, 40);
            }
        }
        if (Gvar.var_1382 >= 1) {
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1382 == 1 || Gvar.var_1382 == 3 || Gvar.var_1382 == 5 || Gvar.var_1382 == 7) {
                Adap.pos(160, 150);
            }
            if (Gvar.var_1382 == 2 || Gvar.var_1382 == 4 || Gvar.var_1382 == 6 || Gvar.var_1382 == 8) {
                Adap.pos(162, 150);
            }
            if (Gvar.var_1382 <= 8) {
                Adap.gcopy(3, 40, 120, 40, 40);
            }
        }
        if (Gvar.var_1383 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos(160, 150);
            if (Gvar.var_1383 == 1) {
                Adap.gcopy(3, 440, 120, 40, 40);
            }
            if (Gvar.var_1383 == 2) {
                Adap.gcopy(3, 480, 120, 40, 40);
            }
            if (Gvar.var_1383 == 3 || Gvar.var_1383 == 5) {
                Adap.gcopy(3, 520, 120, 40, 40);
            }
            if (Gvar.var_1383 == 4 || Gvar.var_1383 == 6) {
                Adap.gcopy(3, 560, 120, 40, 40);
            }
            if (Gvar.var_1383 == 7) {
                Adap.gcopy(3, 600, 120, 40, 40);
            }
            if (Gvar.var_1383 == 8) {
                Adap.gcopy(3, 640, 120, 40, 40);
            }
            if (Gvar.var_1383 == 9) {
                Adap.gcopy(3, 680, 120, 40, 40);
            }
        }
        if (Gvar.var_444 >= 1) {
            if (Gvar.var_444 >= 1 && Gvar.var_444 < 20) {
                Adap.gmode(2, null, null, null);
                if (Gvar.var_444 == 15) {
                    Adap.color(0, 0, 0);
            
                    Adap.gmode(4, null, null, 200);
                }
                if (Gvar.var_444 == 16) {
                    Adap.color(0, 0, 0);
            
                    Adap.gmode(4, null, null, 180);
                }
                if (Gvar.var_444 == 17) {
                    Adap.color(0, 0, 0);
            
                    Adap.gmode(4, null, null, 150);
                }
                if (Gvar.var_444 == 18) {
                    Adap.color(0, 0, 0);

                    Adap.gmode(4, null, null, 100);
                }
                if (Gvar.var_444 == 19) {
                    Adap.color(0, 0, 0);
    
                    Adap.gmode(4, null, null, 50);
                }
                Adap.pos((Gvar.var_440 - Gvar.var_66 + 4) * 40, (Gvar.var_441 - Gvar.var_67 + 4) * 40 - 10);
                Adap.gcopy(15, 960, 1960, 40, 40);
            }
            if (Gvar.var_444 >= 15 && Gvar.var_444 < 26) {
                Adap.gmode(2, null, null, null);
                if (Gvar.var_444 == 15) {
                    Adap.color(0, 0, 0);
    
                    Adap.gmode(4, null, null, 50);
                }
                if (Gvar.var_444 == 16) {
                    Adap.color(0, 0, 0);

                    Adap.gmode(4, null, null, 100);
                }
                if (Gvar.var_444 == 17) {
                    Adap.color(0, 0, 0);
            
                    Adap.gmode(4, null, null, 150);
                }
                if (Gvar.var_444 == 18) {
                    Adap.color(0, 0, 0);
            
                    Adap.gmode(4, null, null, 180);
                }
                if (Gvar.var_444 == 19) {
                    Adap.color(0, 0, 0);
            
                    Adap.gmode(4, null, null, 200);
                }
                Adap.pos((Gvar.var_440 - Gvar.var_66 + 4) * 40, (Gvar.var_441 - Gvar.var_67 + 4) * 40 - 10);
                Adap.gcopy(15, 1080, 1960, 40, 40);
            }
        }
        if (Gvar.var_1384 == 1) {
            Adap.gmode(2, null, null, null);
            if (Gvar.var_83[Gvar.var_1385].Var0 < 50) {
                Gvar.var_1375 = 6; // Adap.buffer(6)は"img_enemy1a.gif"
                Gvar.var_1376 = Gvar.var_1386;
            }
            if (Gvar.var_83[Gvar.var_1385].Var0 >= 50 && Gvar.var_83[Gvar.var_1385].Var0 < 100) {
                Gvar.var_1375 = 21; // Adap.buffer(21)は"img_enemy2a.gif"
                Gvar.var_1376 = Gvar.var_1386 - 50;
            }
            if (Gvar.var_83[Gvar.var_1385].Var0 >= 100 && Gvar.var_83[Gvar.var_1385].Var0 < 150) {
                Gvar.var_1375 = 27; // Adap.buffer(27)は"img_enemy3a.gif"
                Gvar.var_1376 = Gvar.var_1386 - 100;
            }
            if (Gvar.var_83[Gvar.var_1385].Var0 >= 150 && Gvar.var_83[Gvar.var_1385].Var0 < 200) {
                Gvar.var_1375 = 13; // Adap.buffer(13)は"img_enemy4a.gif"
                Gvar.var_1376 = Gvar.var_1386 - 150; // ロッコ・バロッコ所長はGvar.enemy_list = 173。173 - 150 = 23。23 * 40 = 920となり、Y軸920で合致する。
            }
            if (Gvar.var_199 == 4) {
                Adap.pos((Gvar.var_455 - Gvar.var_66 + 4) * 40 + 20, (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10);
                Adap.gcopy(Gvar.var_1375, 1080, Gvar.var_1376 * 40, 40, 40);
            }
            if (Gvar.var_199 == 6) {
                Adap.pos((Gvar.var_455 - Gvar.var_66 + 4) * 40 - 20, (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10);
                Adap.gcopy(Gvar.var_1375, 1000, Gvar.var_1376 * 40, 40, 40);
            }
            if (Gvar.var_199 == 8) {
                Adap.pos((Gvar.var_455 - Gvar.var_66 + 4) * 40, (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10 + 20);
                Adap.gcopy(Gvar.var_1375, 960, Gvar.var_1376 * 40, 40, 40);
            }
            if (Gvar.var_199 == 2) {
                Adap.pos((Gvar.var_455 - Gvar.var_66 + 4) * 40, (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10 - 20);
                Adap.gcopy(Gvar.var_1375, 1040, Gvar.var_1376 * 40, 40, 40);
            }
            if (Gvar.var_199 == 1) {
                Adap.pos((Gvar.var_455 - Gvar.var_66 + 4) * 40 + 20, (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10 - 20);
                Adap.gcopy(Gvar.var_1375, 1240, Gvar.var_1376 * 40, 40, 40);
            }
            if (Gvar.var_199 == 3) {
                Adap.pos((Gvar.var_455 - Gvar.var_66 + 4) * 40 - 20, (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10 - 20);
                Adap.gcopy(Gvar.var_1375, 1160, Gvar.var_1376 * 40, 40, 40);
            }
            if (Gvar.var_199 == 7) {
                Adap.pos((Gvar.var_455 - Gvar.var_66 + 4) * 40 + 20, (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10 + 20);
                Adap.gcopy(Gvar.var_1375, 1200, Gvar.var_1376 * 40, 40, 40);
            }
            if (Gvar.var_199 == 9) {
                Adap.pos((Gvar.var_455 - Gvar.var_66 + 4) * 40 - 20, (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10 + 20);
                Adap.gcopy(Gvar.var_1375, 1120, Gvar.var_1376 * 40, 40, 40);
            }
        }
        if (Gvar.var_1387 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos((Gvar.var_83[Gvar.var_314].Var1 - Gvar.var_66 + 4) * 40, (Gvar.var_83[Gvar.var_314].Var2 - Gvar.var_67 + 4) * 40 - 10);
            if (Gvar.var_1387 == 1 || Gvar.var_1387 == 4 || Gvar.var_1387 == 7 || Gvar.var_1387 == 10) {
                Adap.gcopy(15, 1240, 1760, 40, 40);
            }
            if (Gvar.var_1387 == 2 || Gvar.var_1387 == 5 || Gvar.var_1387 == 8) {
                Adap.gcopy(15, 1160, 1760, 40, 40);
            }
            if (Gvar.var_1387 == 3 || Gvar.var_1387 == 6 || Gvar.var_1387 == 9) {
                Adap.gcopy(15, 1200, 1760, 40, 40);
            }
        }
        if (Gvar.var_1388 >= 1 && Gvar.var_1388 <= 20) {
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1388 == 20) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
            }
            Adap.pos((Gvar.var_1389 - Gvar.var_66 + 4) * 40 - 43, (Gvar.var_1390 - Gvar.var_67 + 4) * 40 - 70);
            if (Gvar.var_1388 == 1 || Gvar.var_1388 == 2) {
                Gvar.var_1391 = 0;
            }
            if (Gvar.var_1388 == 3 || Gvar.var_1388 == 4) {
                Gvar.var_1391 = 128;
            }
            if (Gvar.var_1388 == 5 || Gvar.var_1388 == 6) {
                Gvar.var_1391 = 256;
            }
            if (Gvar.var_1388 == 7 || Gvar.var_1388 == 8) {
                Gvar.var_1391 = 384;
            }
            if (Gvar.var_1388 == 9 || Gvar.var_1388 == 10) {
                Gvar.var_1391 = 512;
            }
            if (Gvar.var_1388 == 11 || Gvar.var_1388 == 12) {
                Gvar.var_1391 = 640;
            }
            if (Gvar.var_1388 == 13 || Gvar.var_1388 == 14) {
                Gvar.var_1391 = 768;
            }
            if (Gvar.var_1388 == 15 || Gvar.var_1388 == 16) {
                Gvar.var_1391 = 896;
            }
            if (Gvar.var_1388 == 17 || Gvar.var_1388 == 18) {
                Gvar.var_1391 = 1024;
            }
            if (Gvar.var_1388 == 19 || Gvar.var_1388 == 20) {
                Gvar.var_1391 = 1152;
            }
            Adap.gcopy(35, Gvar.var_1391, 384, 128, 128);
        }
        if (Gvar.var_751 >= 1 && Gvar.var_751 <= 20) {
            Adap.color(0, 0, 0);

            Adap.gmode(4, null, null, 255);
            Adap.pos(20, 210);
            if (Gvar.var_751 == 1 || Gvar.var_751 == 2) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 250);
            }
            if (Gvar.var_751 == 3 || Gvar.var_751 == 4) {
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 220);
            }
            if (Gvar.var_751 == 5 || Gvar.var_751 == 6) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 190);
            }
            if (Gvar.var_751 == 7 || Gvar.var_751 == 8) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 160);
            }
            if (Gvar.var_751 == 9 || Gvar.var_751 == 10) {
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 130);
            }
            if (Gvar.var_751 == 11 || Gvar.var_751 == 12) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
            }
            if (Gvar.var_751 == 13 || Gvar.var_751 == 14) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 70);
            }
            if (Gvar.var_751 == 15 || Gvar.var_751 == 16) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 50);
            }
            if (Gvar.var_751 == 17 || Gvar.var_751 == 18) {
                Adap.color(0, 0, 0);
    
                Adap.gmode(4, null, null, 30);
            }
            if (Gvar.var_751 == 19 || Gvar.var_751 == 20) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 10);
            }
            Adap.gcopy(3, 960, 0, 40, 40);
            Adap.pos(20, 210);
            if (Gvar.var_751 == 1 || Gvar.var_751 == 2) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 160);
                Adap.gcopy(3, 840, 560, 40, 40);
            }
            if (Gvar.var_751 == 3 || Gvar.var_751 == 4) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 160);
                Adap.gcopy(3, 880, 560, 40, 40);
            }
            if (Gvar.var_751 == 5 || Gvar.var_751 == 6) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 160);
                Adap.gcopy(3, 920, 560, 40, 40);
            }
            if (Gvar.var_751 == 7 || Gvar.var_751 == 8) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 160);
                Adap.gcopy(3, 960, 560, 40, 40);
            }
            if (Gvar.var_751 == 9 || Gvar.var_751 == 10) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 160);
                Adap.gcopy(3, 1000, 560, 40, 40);
            }
            if (Gvar.var_751 == 11 || Gvar.var_751 == 12) {
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 120);
                Adap.gcopy(3, 960, 560, 40, 40);
            }
            if (Gvar.var_751 == 13 || Gvar.var_751 == 14) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
                Adap.gcopy(3, 920, 560, 40, 40);
            }
            if (Gvar.var_751 == 15 || Gvar.var_751 == 16) {
                Adap.color(0, 0, 0);
    
                Adap.gmode(4, null, null, 60);
                Adap.gcopy(3, 880, 560, 40, 40);
            }
            if (Gvar.var_751 == 17 || Gvar.var_751 == 18) {
                Adap.color(0, 0, 0);
    
                Adap.gmode(4, null, null, 30);
                Adap.gcopy(3, 840, 560, 40, 40);
            }
        }
        if (Gvar.var_1392 >= 1) {
            Adap.pos((Gvar.var_83[Gvar.var_1393].Var1 - Gvar.var_66 + 4) * 40, (Gvar.var_83[Gvar.var_1393].Var2 - Gvar.var_67 + 4) * 40);
            if (Gvar.var_1392 == 3 || Gvar.var_1392 == 28) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 20);
                Adap.gcopy(11, 80, 1240, 40, 40);
            }
            if (Gvar.var_1392 == 4 || Gvar.var_1392 == 27) {
                Adap.color(0, 0, 0);
    
                Adap.gmode(4, null, null, 60);
                Adap.gcopy(11, 80, 1240, 40, 40);
            }
            if (Gvar.var_1392 == 5 || Gvar.var_1392 == 26) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 80);
                Adap.gcopy(11, 80, 1240, 40, 40);
            }
            if (Gvar.var_1392 == 6 || Gvar.var_1392 == 25) {
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 120);
                Adap.gcopy(11, 80, 1240, 40, 40);
            }
            if (Gvar.var_1392 == 7 || Gvar.var_1392 == 24) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 160);
                Adap.gcopy(11, 80, 1240, 40, 40);
            }
            if (Gvar.var_1392 == 8 || Gvar.var_1392 == 23) {
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 200);
                Adap.gcopy(11, 80, 1240, 40, 40);
            }
            if (Gvar.var_1392 == 9 || Gvar.var_1392 == 22) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 230);
                Adap.gcopy(11, 80, 1240, 40, 40);
            }
            if (Gvar.var_1392 >= 10 && Gvar.var_1392 < 22) {
                Adap.gmode(2, null, null, null);
                Adap.gcopy(11, 80, 1240, 40, 40);
            }
            Adap.pos((Gvar.var_83[Gvar.var_1393].Var1 - Gvar.var_66 + 4) * 40 - 120, (Gvar.var_83[Gvar.var_1393].Var2 - Gvar.var_67 + 4) * 40 - 20);
            Adap.color(0, 0, 0);
    
            Adap.gmode(4, null, null, 120);
            if (Gvar.var_1392 == 11 || Gvar.var_1392 == 12) {
                Adap.gcopy(3, 1160, 400, 280, 80);
            }
            if (Gvar.var_1392 == 13 || Gvar.var_1392 == 14) {
                Adap.gcopy(3, 1160, 480, 280, 80);
            }
            if (Gvar.var_1392 == 15 || Gvar.var_1392 == 16) {
                Adap.gcopy(3, 1160, 560, 280, 80);
            }
            if (Gvar.var_1392 == 17 || Gvar.var_1392 == 18) {
                Adap.gcopy(3, 1160, 640, 280, 80);
            }
            if (Gvar.var_1392 == 19 || Gvar.var_1392 == 20) {
                Adap.gcopy(3, 1160, 720, 280, 80);
            }
        }
        if (Gvar.var_1394 >= 1) {
            Adap.pos(160, 160);
            if (Gvar.var_1394 == 3 || Gvar.var_1394 == 28) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 20);
                Adap.gcopy(Gvar.bufferid_stand_disc, 80, 1240, 40, 40);
            }
            if (Gvar.var_1394 == 4 || Gvar.var_1394 == 27) {
                Adap.color(0, 0, 0);
    
                Adap.gmode(4, null, null, 60);
                Adap.gcopy(Gvar.bufferid_stand_disc, 80, 1240, 40, 40);
            }
            if (Gvar.var_1394 == 5 || Gvar.var_1394 == 26) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 80);
                Adap.gcopy(Gvar.bufferid_stand_disc, 80, 1240, 40, 40);
            }
            if (Gvar.var_1394 == 6 || Gvar.var_1394 == 25) {
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 120);
                Adap.gcopy(Gvar.bufferid_stand_disc, 80, 1240, 40, 40);
            }
            if (Gvar.var_1394 == 7 || Gvar.var_1394 == 24) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 160);
                Adap.gcopy(Gvar.bufferid_stand_disc, 80, 1240, 40, 40);
            }
            if (Gvar.var_1394 == 8 || Gvar.var_1394 == 23) {
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 200);
                Adap.gcopy(Gvar.bufferid_stand_disc, 80, 1240, 40, 40);
            }
            if (Gvar.var_1394 == 9 || Gvar.var_1394 == 22) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 230);
                Adap.gcopy(Gvar.bufferid_stand_disc, 80, 1240, 40, 40);
            }
            if (Gvar.var_1394 >= 10 && Gvar.var_1394 < 22) {
                Adap.gmode(2, null, null, null);
                Adap.gcopy(Gvar.bufferid_stand_disc, 80, 1240, 40, 40);
            }
            Adap.pos(40, 150);
            Adap.color(0, 0, 0);
    
            Adap.gmode(4, null, null, 120);
            if (Gvar.var_1394 == 11 || Gvar.var_1394 == 12) {
                Adap.gcopy(3, 1160, 400, 280, 80);
            }
            if (Gvar.var_1394 == 13 || Gvar.var_1394 == 14) {
                Adap.gcopy(3, 1160, 480, 280, 80);
            }
            if (Gvar.var_1394 == 15 || Gvar.var_1394 == 16) {
                Adap.gcopy(3, 1160, 560, 280, 80);
            }
            if (Gvar.var_1394 == 17 || Gvar.var_1394 == 18) {
                Adap.gcopy(3, 1160, 640, 280, 80);
            }
            if (Gvar.var_1394 == 19 || Gvar.var_1394 == 20) {
                Adap.gcopy(3, 1160, 720, 280, 80);
            }
        }
        if (Gvar.var_1395 >= 1) {
            Adap.pos((Gvar.var_1396 - Gvar.var_66 + 4) * 40 - 10, (Gvar.var_1397 - Gvar.var_67 + 4) * 40 - 30);
            if (Gvar.var_1395 == 1) {
                Adap.gcopy(3, 1040, 1080, 40, 40);
            }
            if (Gvar.var_1395 == 2) {
                Adap.gcopy(3, 1080, 1080, 40, 40);
            }
            if (Gvar.var_1395 == 3) {
                Adap.gcopy(3, 1120, 1080, 40, 40);
            }
            if (Gvar.var_1395 == 4) {
                Adap.gcopy(3, 1160, 1080, 40, 40);
            }
        }
        if (Gvar.var_1398 >= 1) {
            Adap.pos(Gvar.var_1399 - 40, Gvar.var_1400 - 50);
            if (Gvar.var_1398 == 3) {
                Adap.gcopy(20, 1160, 720, 40, 40);
                Gvar.var_1398 = 0;
            }
            if (Gvar.var_1398 == 2) {
                Adap.gcopy(20, 1120, 720, 40, 40);
                Gvar.var_1398++;
            }
            if (Gvar.var_1398 == 1) {
                Adap.gcopy(20, 1080, 720, 40, 40);
                Gvar.var_1398++;
            }
            Adap.pos(Gvar.var_1399 + 30, Gvar.var_1400 + 30);
            if (Gvar.var_1398 == 3) {
                Adap.gcopy(20, 1160, 720, 40, 40);
                Gvar.var_1398 = 0;
            }
            if (Gvar.var_1398 == 2) {
                Adap.gcopy(20, 1120, 720, 40, 40);
                Gvar.var_1398++;
            }
            if (Gvar.var_1398 == 1) {
                Adap.gcopy(20, 1080, 720, 40, 40);
                Gvar.var_1398++;
            }
        }
        if (Gvar.var_1401 >= 1) {
            Adap.pos(Gvar.var_1399 - 50, Gvar.var_1400 + 40);
            if (Gvar.var_1401 == 3) {
                Adap.gcopy(20, 1160, 720, 40, 40);
                Gvar.var_1401 = 0;
            }
            if (Gvar.var_1401 == 2) {
                Adap.gcopy(20, 1120, 720, 40, 40);
                Gvar.var_1401++;
            }
            if (Gvar.var_1401 == 1) {
                Adap.gcopy(20, 1080, 720, 40, 40);
                Gvar.var_1401++;
            }
            Adap.pos(Gvar.var_1399 + 60, Gvar.var_1400 - 20);
            if (Gvar.var_1401 == 3) {
                Adap.gcopy(20, 1160, 720, 40, 40);
                Gvar.var_1401 = 0;
            }
            if (Gvar.var_1401 == 2) {
                Adap.gcopy(20, 1120, 720, 40, 40);
                Gvar.var_1401++;
            }
            if (Gvar.var_1401 == 1) {
                Adap.gcopy(20, 1080, 720, 40, 40);
                Gvar.var_1401++;
            }
        }
        if (Gvar.var_1402 >= 1) {
            Adap.pos(Gvar.var_1399 - 60, Gvar.var_1400 - 40);
            if (Gvar.var_1402 == 3) {
                Adap.gcopy(20, 1160, 720, 40, 40);
                Gvar.var_1402 = 0;
            }
            if (Gvar.var_1402 == 2) {
                Adap.gcopy(20, 1120, 720, 40, 40);
                Gvar.var_1402++;
            }
            if (Gvar.var_1402 == 1) {
                Adap.gcopy(20, 1080, 720, 40, 40);
                Gvar.var_1402++;
            }
            Adap.pos(Gvar.var_1399 + 30, Gvar.var_1400 + 50);
            if (Gvar.var_1402 == 3) {
                Adap.gcopy(20, 1160, 720, 40, 40);
                Gvar.var_1402 = 0;
            }
            if (Gvar.var_1402 == 2) {
                Adap.gcopy(20, 1120, 720, 40, 40);
                Gvar.var_1402++;
            }
            if (Gvar.var_1402 == 1) {
                Adap.gcopy(20, 1080, 720, 40, 40);
                Gvar.var_1402++;
            }
        }
        if (Gvar.var_1403 >= 1) {
            Adap.pos(Gvar.var_1399 + 50, Gvar.var_1400 - 30);
            if (Gvar.var_1403 == 3) {
                Adap.gcopy(20, 1160, 720, 40, 40);
                Gvar.var_1403 = 0;
            }
            if (Gvar.var_1403 == 2) {
                Adap.gcopy(20, 1120, 720, 40, 40);
                Gvar.var_1403++;
            }
            if (Gvar.var_1403 == 1) {
                Adap.gcopy(20, 1080, 720, 40, 40);
                Gvar.var_1403++;
            }
            Adap.pos(Gvar.var_1399 - 40, Gvar.var_1400 + 30);
            if (Gvar.var_1403 == 3) {
                Adap.gcopy(20, 1160, 720, 40, 40);
                Gvar.var_1403 = 0;
            }
            if (Gvar.var_1403 == 2) {
                Adap.gcopy(20, 1120, 720, 40, 40);
                Gvar.var_1403++;
            }
            if (Gvar.var_1403 == 1) {
                Adap.gcopy(20, 1080, 720, 40, 40);
                Gvar.var_1403++;
            }
        }
        if (Gvar.var_1404 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos(140, 140);
            if (Gvar.var_1404 == 1 || Gvar.var_1404 == 3) {
                Gvar.var_1391 = 0;
            }
            if (Gvar.var_1404 == 3 || Gvar.var_1404 == 4) {
                Gvar.var_1391 = 80;
            }
            if (Gvar.var_1404 == 5 || Gvar.var_1404 == 6) {
                Gvar.var_1391 = 160;
            }
            if (Gvar.var_1404 == 7 || Gvar.var_1404 == 8) {
                Gvar.var_1391 = 240;
            }
            if (Gvar.var_1404 == 9 || Gvar.var_1404 == 10) {
                Gvar.var_1391 = 320;
            }
            if (Gvar.var_1404 == 11 || Gvar.var_1404 == 12) {
                Gvar.var_1391 = 400;
            }
            if (Gvar.var_1404 == 13 || Gvar.var_1404 == 14) {
                Gvar.var_1391 = 480;
            }
            if (Gvar.var_1404 >= 1 && Gvar.var_1404 < 15) {
                Adap.gcopy(3, Gvar.var_1391, 160, 80, 80);
            }
            if (Gvar.var_1404 == 15) {
                Adap.pos(0, 0);
                Adap.color(0, 0, 0);
    
                Adap.gmode(4, null, null, 30);
            }
            if (Gvar.var_1404 == 16) {
                Adap.pos(0, 0);
                Adap.color(0, 0, 0);
    
                Adap.gmode(4, null, null, 60);
            }
            if (Gvar.var_1404 == 17) {
                Adap.pos(0, 0);
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 90);
            }
            if (Gvar.var_1404 == 18) {
                Adap.pos(0, 0);
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 120);
            }
            if (Gvar.var_1404 == 19) {
                Adap.pos(0, 0);
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 150);
            }
            if (Gvar.var_1404 == 20) {
                Adap.pos(0, 0);
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 180);
            }
            if (Gvar.var_1404 == 21) {
                Adap.pos(0, 0);
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 210);
            }
            if (Gvar.var_1404 == 22) {
                Adap.pos(0, 0);
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 240);
            }
            if (Gvar.var_1404 >= 23) {
                Adap.pos(0, 0);
                Adap.color(0, 0, 0);
    
                Adap.gmode(4, null, null, 255);
            }
            if (Gvar.var_1404 >= 15) {
                Adap.gcopy(19, 0, 0, 340, 340);
            }
        }
        if (Gvar.var_1405 >= 1) {
            if (Gvar.var_1405 == 1) {
                Adap.pos(160, 280);
            }
            if (Gvar.var_1405 == 2) {
                Adap.pos(160, 240);
            }
            if (Gvar.var_1405 == 3) {
                Adap.pos(160, 200);
            }
            if (Gvar.var_1405 == 4) {
                Adap.pos(160, 160);
            }
            if (Gvar.var_1405 == 5) {
                Adap.pos(160, 165);
            }
            if (Gvar.var_1405 == 6) {
                Adap.pos(160, 160);
            }
            if (Gvar.var_1405 == 7) {
                Adap.pos(160, 165);
            }
            if (Gvar.var_1405 >= 8) {
                Adap.pos(160, 160);
            }
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1405 >= 1 && Gvar.var_1405 < 20) {
                Adap.gcopy(14, 120, 360, 40, 40);
            }
        }
        if (Gvar.var_1406 >= 1) {
            if (Gvar.var_1407 == 0) {
                if (Gvar.var_1406 == 1) {
                    Adap.pos(160, 280);
                }
                if (Gvar.var_1406 == 2) {
                    Adap.pos(160, 240);
                }
                if (Gvar.var_1406 == 3) {
                    Adap.pos(160, 200);
                }
                if (Gvar.var_1406 == 4) {
                    Adap.pos(160, 160);
                }
                if (Gvar.var_1406 == 5) {
                    Adap.pos(160, 165);
                }
                if (Gvar.var_1406 == 6) {
                    Adap.pos(160, 160);
                }
                if (Gvar.var_1406 == 7) {
                    Adap.pos(160, 165);
                }
                if (Gvar.var_1406 >= 8) {
                    Adap.pos(160, 160);
                }
            }
            if (Gvar.var_1407 == 1) {
                if (Gvar.var_1406 == 1) {
                    Adap.pos(40, 150);
                }
                if (Gvar.var_1406 == 2) {
                    Adap.pos(80, 150);
                }
                if (Gvar.var_1406 == 3) {
                    Adap.pos(120, 150);
                }
                if (Gvar.var_1406 == 4) {
                    Adap.pos(150, 150);
                }
                if (Gvar.var_1406 == 5) {
                    Adap.pos(155, 150);
                }
                if (Gvar.var_1406 == 6) {
                    Adap.pos(150, 150);
                }
                if (Gvar.var_1406 == 7) {
                    Adap.pos(155, 150);
                }
                if (Gvar.var_1406 >= 8) {
                    Adap.pos(150, 150);
                }
            }
            if (Gvar.var_1407 == 2) {
                if (Gvar.var_1406 == 1) {
                    Adap.pos(280, 150);
                }
                if (Gvar.var_1406 == 2) {
                    Adap.pos(240, 150);
                }
                if (Gvar.var_1406 == 3) {
                    Adap.pos(200, 150);
                }
                if (Gvar.var_1406 == 4) {
                    Adap.pos(170, 150);
                }
                if (Gvar.var_1406 == 5) {
                    Adap.pos(175, 150);
                }
                if (Gvar.var_1406 == 6) {
                    Adap.pos(170, 150);
                }
                if (Gvar.var_1406 == 7) {
                    Adap.pos(175, 150);
                }
                if (Gvar.var_1406 >= 8) {
                    Adap.pos(170, 150);
                }
            }
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1408 == 1 && Gvar.var_1406 >= 1 && Gvar.var_1406 < 20) {
                Adap.gcopy(14, 160, 360, 40, 40);
            }
            if (Gvar.var_1408 == 2 && Gvar.var_1406 >= 1 && Gvar.var_1406 < 20) {
                Adap.gcopy(14, 200, 360, 40, 40);
            }
            if (Gvar.var_1408 == 3 && Gvar.var_1406 >= 1 && Gvar.var_1406 < 20) {
                Adap.gcopy(14, 200, 320, 40, 40);
            }
            if (Gvar.var_1408 == 4 && Gvar.var_1406 >= 1 && Gvar.var_1406 < 20) {
                Adap.gcopy(14, 200, 280, 40, 40);
            }
            if (Gvar.var_1408 == 5 && Gvar.var_1406 >= 1 && Gvar.var_1406 < 20) {
                Adap.gcopy(14, 320, 160, 40, 40);
            }
        }
        if (Gvar.var_1409 >= 1) {
            if (Gvar.var_1409 == 1) {
                Adap.pos(140, 0);
            }
            if (Gvar.var_1409 == 2) {
                Adap.pos(140, 40);
            }
            if (Gvar.var_1409 == 3) {
                Adap.pos(140, 80);
            }
            if (Gvar.var_1409 == 4) {
                Adap.pos(140, 120);
            }
            if (Gvar.var_1409 == 5) {
                Adap.pos(140, 125);
            }
            if (Gvar.var_1409 == 6) {
                Adap.pos(140, 120);
            }
            if (Gvar.var_1409 == 7) {
                Adap.pos(140, 125);
            }
            if (Gvar.var_1409 >= 8) {
                Adap.pos(140, 120);
            }
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1409 >= 1 && Gvar.var_1409 < 20) {
                Adap.gcopy(14, 320, 80, 80, 80);
            }
        }
        if (Gvar.var_1410 >= 1) {
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1410 == 1) {
                Adap.pos(10, 130);
            }
            if (Gvar.var_1410 == 2) {
                Adap.pos(50, 130);
            }
            if (Gvar.var_1410 == 3) {
                Adap.pos(90, 130);
            }
            if (Gvar.var_1410 == 4) {
                Adap.pos(120, 130);
            }
            if (Gvar.var_1410 == 5) {
                Adap.pos(125, 130);
            }
            if (Gvar.var_1410 == 6) {
                Adap.pos(120, 130);
            }
            if (Gvar.var_1410 == 7) {
                Adap.pos(125, 130);
            }
            if (Gvar.var_1410 >= 8) {
                Adap.pos(120, 130);
            }
            if (Gvar.var_1410 >= 1 && Gvar.var_1410 < 30) {
                Adap.gcopy(14, 440, 0, 80, 80);
            }
            if (Gvar.var_1410 == 1) {
                Adap.pos(280, 130);
            }
            if (Gvar.var_1410 == 2) {
                Adap.pos(240, 130);
            }
            if (Gvar.var_1410 == 3) {
                Adap.pos(200, 130);
            }
            if (Gvar.var_1410 == 4) {
                Adap.pos(170, 130);
            }
            if (Gvar.var_1410 == 5) {
                Adap.pos(175, 130);
            }
            if (Gvar.var_1410 == 6) {
                Adap.pos(170, 130);
            }
            if (Gvar.var_1410 == 7) {
                Adap.pos(175, 130);
            }
            if (Gvar.var_1410 >= 8) {
                Adap.pos(170, 130);
            }
            if (Gvar.var_1410 >= 1 && Gvar.var_1410 < 30) {
                Adap.gcopy(14, 520, 0, 80, 80);
            }
        }
        if (Gvar.var_1411 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos(160, 150);
            Gvar.var_1412 = 0;
            if (Gvar.var_1413 == 1) {
                Gvar.var_1412 = 120;
            }
            if (Gvar.var_1411 == 1) {
                Adap.gcopy(3, 40, 1120 - Gvar.var_1412, 40, 40);
            }
            if (Gvar.var_1411 == 2) {
                Adap.gcopy(3, 80, 1120 - Gvar.var_1412, 40, 40);
            }
            if (Gvar.var_1411 == 3) {
                Adap.gcopy(3, 120, 1120 - Gvar.var_1412, 40, 40);
            }
            if (Gvar.var_1411 == 4) {
                Adap.gcopy(3, 160, 1120 - Gvar.var_1412, 40, 40);
            }
            if (Gvar.var_1411 == 5) {
                Adap.gcopy(3, 200, 1120 - Gvar.var_1412, 40, 40);
            }
            if (Gvar.var_1411 == 6) {
                Adap.gcopy(3, 240, 1120 - Gvar.var_1412, 40, 40);
            }
            if (Gvar.var_1411 == 7) {
                Adap.gcopy(3, 280, 1120 - Gvar.var_1412, 40, 40);
            }
            if (Gvar.var_1411 == 8) {
                Adap.gcopy(3, 320, 1120 - Gvar.var_1412, 40, 40);
            }
            if (Gvar.var_1411 == 9) {
                Adap.gcopy(3, 360, 1120 - Gvar.var_1412, 40, 40);
            }
            if (Gvar.var_1411 == 10) {
                Adap.gcopy(3, 400, 1120 - Gvar.var_1412, 40, 40);
            }
            if (Gvar.var_1411 == 11) {
                Adap.gcopy(3, 440, 1120 - Gvar.var_1412, 40, 40);
            }
            if (Gvar.var_1411 == 12) {
                Adap.gcopy(3, 480, 1120 - Gvar.var_1412, 40, 40);
            }
            if (Gvar.var_1411 == 13) {
                Adap.gcopy(3, 520, 1120 - Gvar.var_1412, 40, 40);
            }
            if (Gvar.var_1411 == 14) {
                Adap.gcopy(3, 560, 1120 - Gvar.var_1412, 40, 40);
            }
            if (Gvar.var_1411 == 15) {
                Adap.gcopy(3, 600, 1120 - Gvar.var_1412, 40, 40);
            }
            if (Gvar.var_1411 == 16) {
                Adap.gcopy(3, 0, 1160 - Gvar.var_1412, 40, 40);
            }
            if (Gvar.var_1411 == 17) {
                Adap.gcopy(3, 40, 1160 - Gvar.var_1412, 40, 40);
            }
            if (Gvar.var_1411 >= 18 && Gvar.var_1411 <= 28) {
                Adap.gcopy(3, 80, 1160 - Gvar.var_1412, 40, 40);
            }
            if (Gvar.var_1411 == 29) {
                Adap.gcopy(3, 120, 1160 - Gvar.var_1412, 40, 40);
            }
            if (Gvar.var_1411 == 30) {
                Adap.gcopy(3, 160, 1160 - Gvar.var_1412, 40, 40);
            }
            if (Gvar.var_1411 == 31) {
                Adap.gcopy(3, 200, 1160 - Gvar.var_1412, 40, 40);
            }
            if (Gvar.var_1411 >= 32 && Gvar.var_1411 <= 35) {
                Adap.gcopy(3, 240, 1160 - Gvar.var_1412, 40, 40);
            }
            if (Gvar.var_1411 == 36) {
                Adap.gcopy(3, 200, 1160 - Gvar.var_1412, 40, 40);
            }
            if (Gvar.var_1411 == 37) {
                Adap.gcopy(3, 160, 1160 - Gvar.var_1412, 40, 40);
            }
            if (Gvar.var_1411 == 38) {
                Adap.gcopy(3, 120, 1160 - Gvar.var_1412, 40, 40);
            }
            if (Gvar.var_1411 >= 39 && Gvar.var_1411 <= 45) {
                Adap.gcopy(3, 80, 1160 - Gvar.var_1412, 40, 40);
            }
            if (Gvar.var_1411 == 46) {
                Adap.gcopy(3, 280, 1160 - Gvar.var_1412, 40, 40);
            }
            if (Gvar.var_1411 == 47) {
                Adap.gcopy(3, 320, 1160 - Gvar.var_1412, 40, 40);
            }
            if (Gvar.var_1411 == 48) {
                Adap.gcopy(3, 360, 1160 - Gvar.var_1412, 40, 40);
            }
            if (Gvar.var_1411 == 49) {
                Adap.gcopy(3, 400, 1160 - Gvar.var_1412, 40, 40);
            }
        }
        if (Gvar.var_1414 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos(180, 150);
            if (Gvar.var_1414 >= 0 && Gvar.var_1414 < 1) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
                Adap.gcopy(11, 0, 320, 40, 40);
            }
            if (Gvar.var_1414 >= 1 && Gvar.var_1414 < 2) {
                Adap.gcopy(11, 0, 320, 40, 40);
            }
            if (Gvar.var_1414 >= 2 && Gvar.var_1414 < 3) {
                Adap.gcopy(11, 40, 320, 40, 40);
            }
            if (Gvar.var_1414 >= 3 && Gvar.var_1414 < 4) {
                Adap.gcopy(11, 80, 320, 40, 40);
            }
            if (Gvar.var_1414 >= 4 && Gvar.var_1414 < 5) {
                Adap.gcopy(11, 80, 320, 40, 40);
            }
            if (Gvar.var_1414 >= 5 && Gvar.var_1414 < 6) {
                Adap.gcopy(11, 80, 320, 40, 40);
            }
            if (Gvar.var_1414 >= 6 && Gvar.var_1414 < 8) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
                Adap.gcopy(11, 80, 320, 40, 40);
            }
            if (Gvar.var_1414 >= 8) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 50);
                Adap.gcopy(11, 80, 320, 40, 40);
            }
        }
        if (Gvar.var_1415 >= 1) {
            Adap.color(0, 0, 0);
    
            Adap.gmode(4, null, null, 150);
            Adap.pos((Gvar.var_83[Gvar.var_1393].Var1 - Gvar.var_66 + 3) * 40, (Gvar.var_83[Gvar.var_1393].Var2 - Gvar.var_67 + 3) * 40 - 10);
            Adap.gcopy(3, 760, 400, 120, 120);
            Adap.gmode(2, null, null, null);
            Gvar.var_1416 = Adap.rnd(8);
            Gvar.var_1416 = Gvar.var_1416 * 40 + 40;
            Gvar.var_1417 = Adap.rnd(2);
            Gvar.var_1418 = Adap.rnd(2);
            Gvar.var_1419 = Adap.rnd(40);
            Gvar.var_1420 = Adap.rnd(40);
            Adap.pos((Gvar.var_83[Gvar.var_1393].Var1 - Gvar.var_66 + 3 + Gvar.var_1417) * 40 + Gvar.var_1419, (Gvar.var_83[Gvar.var_1393].Var2 - Gvar.var_67 + 3 + Gvar.var_1418) * 40 - 10 + Gvar.var_1420);
            if (Gvar.var_1270 != 0) {
                Gvar.belongings_item_list = Gvar.var_1421;
                Gvar.var_1248 = Gvar.var_1249;
                await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            if (Gvar.var_1270 == 0) {
                if (Gvar.var_340 == 400) {
                    Adap.gcopy(34, 320 + Gvar.var_1416, 400, 40, 40);
                }
                if (Gvar.var_340 == 401) {
                    Adap.gcopy(34, 320 + Gvar.var_1416, 720, 40, 40);
                }
                if (Gvar.var_340 == 402) {
                    Adap.gcopy(34, 320 + Gvar.var_1416, 0, 40, 40);
                }
                if (Gvar.var_340 == 403) {
                    Adap.gcopy(34, 320 + Gvar.var_1416, 560, 40, 40);
                }
                if (Gvar.var_340 == 404) {
                    Adap.gcopy(34, 320 + Gvar.var_1416, 520, 40, 40);
                }
                if (Gvar.var_340 == 405) {
                    Adap.gcopy(34, 320 + Gvar.var_1416, 800, 40, 40);
                }
                if (Gvar.var_340 == 406) {
                    Adap.gcopy(34, 320 + Gvar.var_1416, 640, 40, 40);
                }
                if (Gvar.var_340 == 407) {
                    Adap.gcopy(34, 320 + Gvar.var_1416, 400, 40, 40);
                }
                if (Gvar.var_340 == 408) {
                    Adap.gcopy(34, 320 + Gvar.var_1416, 840, 40, 40);
                }
                if (Gvar.var_340 == 409) {
                    Adap.gcopy(3, 680, 280, 40, 40);
                }
                if (Gvar.var_340 == 410) {
                    Adap.gcopy(34, 320 + Gvar.var_1416, 1080, 40, 40);
                }
                if (Gvar.var_340 == 411) {
                    Adap.gcopy(34, 320 + Gvar.var_1416, 1120, 40, 40);
                }
                if (Gvar.var_340 == 412) {
                    Adap.gcopy(3, 720, 520, 40, 40);
                }
                if (Gvar.var_340 == 413) {
                    Adap.gcopy(15, 960, 1960, 40, 40);
                }
                if (Gvar.var_340 == 414) {
                    Adap.gcopy(34, 320 + Gvar.var_1416, 1240, 40, 40);
                }
                if (Gvar.var_340 == 415) { // Ver0.1401にて追加。タスクact1
                    Adap.gcopy(34, 320 + Gvar.var_1416, 1240, 40, 40);
                }
                if (Gvar.var_340 == 416) { // Ver0.1401にて追加。タスクact3
                    Adap.gcopy(34, 320 + Gvar.var_1416, 1240, 40, 40);
                }
                if (Gvar.var_340 == 417) { // Ver0.1401にて追加。No = 417 ラット
                    Adap.gcopy(34, 320 + Gvar.var_1416, 1200, 40, 40);
                }
                if (Gvar.var_340 == 489) {
                    Adap.color(0, 0, 0);
            
                    Adap.gmode(4, null, null, 150);
                    Adap.gcopy(32, 320 + Gvar.var_1416, 680, 40, 40);
                    Adap.gmode(2, null, null, null);
                }
                if (Gvar.var_340 == 488) {
                    Adap.color(0, 0, 0);
            
                    Adap.gmode(4, null, null, 150);
                    Adap.gcopy(32, 320 + Gvar.var_1416, 680, 40, 40);
                    Adap.gmode(2, null, null, null);
                }
                if (Gvar.var_340 == 487) {
                    Adap.color(0, 0, 0);
            
                    Adap.gmode(4, null, null, 150);
                    Adap.gcopy(32, 320 + Gvar.var_1416, 680, 40, 40);
                    Adap.gmode(2, null, null, null);
                }
                if (Gvar.var_340 == 490) {
                    Adap.gcopy(34, 320 + Gvar.var_1416, 0, 40, 40);
                }
                if (Gvar.var_340 == 699) {
                    Adap.gcopy(34, 320 + Gvar.var_1416, 880, 40, 40);
                }
                if (Gvar.var_340 == 698) {
                    Adap.gcopy(34, 320 + Gvar.var_1416, 440, 40, 40);
                }
            }
            if (Gvar.var_1415 >= 10) {
                Adap.pos((Gvar.var_83[Gvar.var_1393].Var1 - Gvar.var_66 + 3 + Gvar.var_1417) * 40 + Gvar.var_1419, (Gvar.var_83[Gvar.var_1393].Var2 - Gvar.var_67 + 3 + Gvar.var_1418) * 40 - 10 + Gvar.var_1420);
                Adap.color(0, 0, 0);
                Gvar.var_1422 = (Gvar.var_1415 - 10) * 20;
                if (Gvar.var_1422 >= 255) {
                    Gvar.var_1422 = 255;
                }
                Adap.gmode(4, null, null, Gvar.var_1422);
                Adap.gcopy(3, 720, 400, 40, 40);
            }
            return;
        }
        if (Gvar.var_1423 >= 1) {
            Adap.color(0, 0, 0);
    
            Adap.gmode(4, null, null, 150);
            if (Gvar.var_1423 == 17) {

                Adap.gmode(4, null, null, 110);
            }
            if (Gvar.var_1423 == 18) {

                Adap.gmode(4, null, null, 80);
            }
            if (Gvar.var_1423 == 19) {

                Adap.gmode(4, null, null, 50);
            }
            if (Gvar.var_1423 == 20) {

                Adap.gmode(4, null, null, 20);
            }
            Adap.pos((Gvar.var_83[Gvar.var_1393].Var1 - Gvar.var_66 + 3) * 40, (Gvar.var_83[Gvar.var_1393].Var2 - Gvar.var_67 + 3) * 40 - 10);
            Adap.gcopy(3, 760, 400, 120, 120);
            Adap.gmode(2, null, null, null);
            Adap.pos((Gvar.var_83[Gvar.var_1393].Var1 - Gvar.var_66 + 4) * 40, (Gvar.var_83[Gvar.var_1393].Var2 - Gvar.var_67 + 4) * 40 - Gvar.var_1423 * 20);
            Gvar.var_1416 = 80;
            Adap.pos((Gvar.var_83[Gvar.var_1393].Var1 - Gvar.var_66 + 4) * 40, (Gvar.var_83[Gvar.var_1393].Var2 - Gvar.var_67 + 4) * 40 - Gvar.var_1423 * 20);
            Adap.gmode(2, null, null, null);
            Adap.gcopy(3, 720, 400, 40, 40);
            return;
        }
        if (Gvar.var_1424 >= 1) {
            Adap.pos(160, Gvar.var_1424);
            Adap.gmode(2, null, null, null);
            Adap.gcopy(3, 720, 400, 40, 40);
            return;
        }
        if (Gvar.var_1425 >= 1) {
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1426 == 0) {
                Adap.pos(Gvar.var_1427, Gvar.var_1428);
                Adap.gcopy(34, 320, 560, 40, 40);
            }
            if (Gvar.var_1426 == 1) {
                Adap.pos(Gvar.var_1427, Gvar.var_1428);
                Adap.gcopy(34, 560, 560, 40, 40);
            }
            if (Gvar.var_1426 == 2) {
                Adap.pos(Gvar.var_1427, Gvar.var_1428);
                Adap.gcopy(34, 480, 560, 40, 40);
            }
        }
        if (Gvar.var_1429 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos((Gvar.var_1430 - Gvar.var_66 + 4) * 40, (Gvar.var_1431 - Gvar.var_67 + 4 - Gvar.var_1429) * 40);
            Adap.gcopy(34, 400, 560, 40, 40);
        }
        if (Gvar.var_1432 >= 1) {
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1426 == 0) {
                Adap.pos(Gvar.var_1427, Gvar.var_1428);
                Adap.gcopy(34, 320, 600, 40, 40);
            }
            if (Gvar.var_1426 == 1) {
                Adap.pos(Gvar.var_1427, Gvar.var_1428);
                Adap.gcopy(34, 560, 600, 40, 40);
            }
            if (Gvar.var_1426 == 2) {
                Adap.pos(Gvar.var_1427, Gvar.var_1428);
                Adap.gcopy(34, 480, 600, 40, 40);
            }
        }
        if (Gvar.var_1433 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos((Gvar.var_1430 - Gvar.var_66 + 4) * 40, (Gvar.var_1431 - Gvar.var_67 + 4 - Gvar.var_1433) * 40);
            Adap.gcopy(34, 400, 600, 40, 40);
        }
        if (Gvar.var_1434 >= 1) {
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1426 == 0) {
                Adap.pos(Gvar.var_1427, Gvar.var_1428);
                Adap.gcopy(34, 320, 0, 40, 40);
            }
            if (Gvar.var_1426 == 1) {
                Adap.pos(Gvar.var_1427, Gvar.var_1428);
                Adap.gcopy(34, 560, 0, 40, 40);
            }
            if (Gvar.var_1426 == 2) {
                Adap.pos(Gvar.var_1427, Gvar.var_1428);
                Adap.gcopy(34, 480, 0, 40, 40);
            }
        }
        if (Gvar.var_1435 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos((Gvar.var_1430 - Gvar.var_66 + 4) * 40, (Gvar.var_1431 - Gvar.var_67 + 4 - Gvar.var_1435) * 40);
            Adap.gcopy(34, 400, 0, 40, 40);
        }
        if (Gvar.var_1436 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos(Gvar.var_1437, Gvar.var_1438);
            Adap.gcopy(34, 320, 160, 40, 40);
        }
        if (Gvar.var_1439 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos((Gvar.var_1430 - Gvar.var_66 + 4) * 40, (Gvar.var_1431 - Gvar.var_67 + 4 - Gvar.var_1439) * 40);
            Adap.gcopy(34, 400, 160, 40, 40);
        }
        if (Gvar.var_1439 >= 1 || Gvar.var_1436 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos((Gvar.var_1430 - Gvar.var_66 + 4) * 40, (Gvar.var_1431 - Gvar.var_67 + 4 - 10) * 40);
            Adap.gcopy(8, 320, 480, 40, 240);
        }
        if (Gvar.var_1440 >= 1) {
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1440 == 5 && Gvar.var_1441 == 0) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
            }
            if (Gvar.var_1440 == 6 && Gvar.var_1441 == 0) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 50);
            }
            if (Gvar.var_1440 == 7 && Gvar.var_1441 == 0) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 0);
            }
            if (Gvar.var_1442 == 0) {
                Adap.pos(Gvar.var_1427, Gvar.var_1428);
                Adap.gcopy(3, 720, 560, 80, 80);
            }
            if (Gvar.var_1442 == 1) {
                Adap.pos(Gvar.var_1427, Gvar.var_1428);
                Adap.gcopy(3, 640, 560, 80, 80);
            }
        }
        if (Gvar.var_1443 >= 1) {
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1443 < 14) {
                Adap.pos(150, 170);
                Gvar.belongings_item_list = Gvar.base_disc_list;
                await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
                Adap.pos(170, 170);
                Gvar.belongings_item_list = Gvar.with_disc_list;
                await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            if (Gvar.var_1443 == 14) {
                Adap.pos(150, 172);
                Gvar.belongings_item_list = Gvar.base_disc_list;
                await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
                Adap.pos(170, 172);
                Gvar.belongings_item_list = Gvar.with_disc_list;
                await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            if (Gvar.var_1443 == 15) {
                Adap.pos(150, 170);
                Gvar.belongings_item_list = Gvar.base_disc_list;
                await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
                Adap.pos(170, 170);
                Gvar.belongings_item_list = Gvar.with_disc_list;
                await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            if (Gvar.var_1443 == 16) {
                Adap.pos(150, 172);
                Gvar.belongings_item_list = Gvar.base_disc_list;
                await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
                Adap.pos(170, 172);
                Gvar.belongings_item_list = Gvar.with_disc_list;
                await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            if (Gvar.var_1443 > 16 && Gvar.var_1443 < 25) {
                Adap.pos(150, 170);
                Gvar.belongings_item_list = Gvar.base_disc_list;
                await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
                Adap.pos(170, 170);
                Gvar.belongings_item_list = Gvar.with_disc_list;
                await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            if (Gvar.var_1443 == 25 || Gvar.var_1443 == 26) {
                Adap.pos(152, 170);
                Gvar.belongings_item_list = Gvar.base_disc_list;
                await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
                Adap.pos(168, 170);
                Gvar.belongings_item_list = Gvar.with_disc_list;
                await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            if (Gvar.var_1443 == 27 || Gvar.var_1443 == 28) {
                Adap.pos(154, 170);
                Gvar.belongings_item_list = Gvar.base_disc_list;
                await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
                Adap.pos(166, 170);
                Gvar.belongings_item_list = Gvar.with_disc_list;
                await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            if (Gvar.var_1443 == 29 || Gvar.var_1443 == 30) {
                Adap.pos(156, 170);
                Gvar.belongings_item_list = Gvar.base_disc_list;
                await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
                Adap.pos(164, 170);
                Gvar.belongings_item_list = Gvar.with_disc_list;
                await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            if (Gvar.var_1443 == 31 || Gvar.var_1443 == 32) {
                Adap.pos(158, 170);
                Gvar.belongings_item_list = Gvar.base_disc_list;
                await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
                Adap.pos(162, 170);
                Gvar.belongings_item_list = Gvar.with_disc_list;
                await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            if (Gvar.var_1443 == 33 || Gvar.var_1443 == 34) {
                Adap.pos(160, 170);
                Gvar.belongings_item_list = Gvar.base_disc_list;
                await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
                Adap.pos(160, 170);
                Gvar.belongings_item_list = Gvar.with_disc_list;
                await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            if (Gvar.var_1443 == 35 || Gvar.var_1443 == 36) {
                Adap.pos(160, 170);
                Gvar.belongings_item_list = Gvar.base_disc_list;
                await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
                Adap.pos(160, 170);
                Gvar.belongings_item_list = Gvar.with_disc_list;
                await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            if (Gvar.var_1443 == 37 || Gvar.var_1443 == 38) {
                Adap.pos(160, 170);
                Gvar.belongings_item_list = Gvar.base_disc_list;
                await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
                Adap.pos(160, 170);
                Gvar.belongings_item_list = Gvar.with_disc_list;
                await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            if (Gvar.var_1443 == 39 || Gvar.var_1443 == 40) {
                Adap.pos(160, 170);
                Gvar.belongings_item_list = Gvar.base_disc_list;
                await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 200);
                Adap.pos(160, 170);
                Gvar.belongings_item_list = Gvar.with_disc_list;
                await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            if (Gvar.var_1443 == 41 || Gvar.var_1443 == 42) {
                Adap.pos(160, 170);
                Gvar.belongings_item_list = Gvar.base_disc_list;
                await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 150);
                Adap.pos(160, 170);
                Gvar.belongings_item_list = Gvar.with_disc_list;
                await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            if (Gvar.var_1443 == 43 || Gvar.var_1443 == 44) {
                Adap.pos(160, 170);
                Gvar.belongings_item_list = Gvar.base_disc_list;
                await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
                Adap.pos(160, 170);
                Gvar.belongings_item_list = Gvar.with_disc_list;
                await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            if (Gvar.var_1443 == 45 || Gvar.var_1443 == 46) {
                Adap.pos(160, 170);
                Gvar.belongings_item_list = Gvar.base_disc_list;
                await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 50);
                Adap.pos(160, 170);
                Gvar.belongings_item_list = Gvar.with_disc_list;
                await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            if (Gvar.var_1443 == 47 || Gvar.var_1443 == 48) {
                Adap.pos(160, 170);
                Gvar.belongings_item_list = Gvar.base_disc_list;
                await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
                Adap.color(0, 0, 0);
    
                Adap.gmode(4, null, null, 30);
                Adap.pos(160, 170);
                Gvar.belongings_item_list = Gvar.with_disc_list;
                await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            if (Gvar.var_1443 > 48 || Gvar.var_1443 == 60) {
                Adap.pos(160, 170);
                Gvar.belongings_item_list = Gvar.base_disc_list;
                await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            Adap.pos(170, 150);
            if (Gvar.var_1443 >= 10 && Gvar.var_1443 < 11) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
                Adap.gcopy(Gvar.bufferid_stand_disc, 0, 320, 40, 40);
            }
            if (Gvar.var_1443 >= 11 && Gvar.var_1443 < 12) {
                Adap.gcopy(Gvar.bufferid_stand_disc, 0, 320, 40, 40);
            }
            if (Gvar.var_1443 >= 12 && Gvar.var_1443 < 13) {
                Adap.gcopy(Gvar.bufferid_stand_disc, 40, 320, 40, 40);
            }
            if (Gvar.var_1443 >= 13 && Gvar.var_1443 < 14) {
                Adap.gcopy(Gvar.bufferid_stand_disc, 80, 320, 40, 40);
            }
            if (Gvar.var_1443 >= 14 && Gvar.var_1443 < 15) {
                Adap.gcopy(Gvar.bufferid_stand_disc, 80, 320, 40, 40);
            }
            if (Gvar.var_1443 >= 15 && Gvar.var_1443 < 25) {
                Adap.gcopy(Gvar.bufferid_stand_disc, 80, 320, 40, 40);
            }
            if (Gvar.var_1443 >= 26 && Gvar.var_1443 < 28) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
                Adap.gcopy(Gvar.bufferid_stand_disc, 80, 320, 40, 40);
            }
            if (Gvar.var_1443 >= 28 && Gvar.var_1443 < 30) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 50);
                Adap.gcopy(Gvar.bufferid_stand_disc, 80, 320, 40, 40);
            }
        }
        
        if (Gvar.var_1446 == 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos(160, 157);
            Adap.gcopy(9, 160, 80, 40, 40);
        }
        if (Gvar.var_1447 >= 1) {
            if (Gvar.var_1448 == 0) {
                if (Gvar.var_1449 == 6) {
                    Adap.pos(Gvar.var_1450 - 30, Gvar.var_1451);
                }
                if (Gvar.var_1449 == 4) {
                    Adap.pos(Gvar.var_1450 + 30, Gvar.var_1451);
                }
                if (Gvar.var_1449 == 8) {
                    Adap.pos(Gvar.var_1450, Gvar.var_1451 + 30);
                }
                if (Gvar.var_1449 == 2) {
                    Adap.pos(Gvar.var_1450, Gvar.var_1451 - 30);
                }
                if (Gvar.var_1449 == 9) {
                    Adap.pos(Gvar.var_1450 - 30, Gvar.var_1451 + 30);
                }
                if (Gvar.var_1449 == 7) {
                    Adap.pos(Gvar.var_1450 + 30, Gvar.var_1451 + 30);
                }
                if (Gvar.var_1449 == 3) {
                    Adap.pos(Gvar.var_1450 - 30, Gvar.var_1451 - 30);
                }
                if (Gvar.var_1449 == 1) {
                    Adap.pos(Gvar.var_1450 + 30, Gvar.var_1451 - 30);
                }
            }
            if (Gvar.var_1448 == 1) {
                if (Gvar.var_1449 == 4) {
                    Adap.pos(Gvar.var_1450 - 10, Gvar.var_1451);
                }
                if (Gvar.var_1449 == 6) {
                    Adap.pos(Gvar.var_1450 + 10, Gvar.var_1451);
                }
                if (Gvar.var_1449 == 2) {
                    Adap.pos(Gvar.var_1450, Gvar.var_1451 + 10);
                }
                if (Gvar.var_1449 == 8) {
                    Adap.pos(Gvar.var_1450, Gvar.var_1451 - 10);
                }
                if (Gvar.var_1449 == 1) {
                    Adap.pos(Gvar.var_1450 - 10, Gvar.var_1451 + 10);
                }
                if (Gvar.var_1449 == 3) {
                    Adap.pos(Gvar.var_1450 + 10, Gvar.var_1451 + 10);
                }
                if (Gvar.var_1449 == 7) {
                    Adap.pos(Gvar.var_1450 - 10, Gvar.var_1451 - 10);
                }
                if (Gvar.var_1449 == 9) {
                    Adap.pos(Gvar.var_1450 + 10, Gvar.var_1451 - 10);
                }
                Gvar.bufferid_stand_disc = 11; //Adap.buffer(11)は"img_stand0.gif"
            }
            Gvar.var_1272 = 920;
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1447 == 1 || Gvar.var_1447 == 7) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
            }
            if (Gvar.var_1447 == 8) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 50);
            }
            if (Gvar.var_1447 == 1 || Gvar.var_1447 == 2) {
                if (Gvar.var_1449 == 8) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 0, Gvar.var_1272, 40, 40);
                }
                if (Gvar.var_1449 == 6) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 120, Gvar.var_1272, 40, 40);
                }
                if (Gvar.var_1449 == 2) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 240, Gvar.var_1272, 40, 40);
                }
                if (Gvar.var_1449 == 4) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 360, Gvar.var_1272, 40, 40);
                }
                if (Gvar.var_1449 == 9) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 480, Gvar.var_1272, 40, 40);
                }
                if (Gvar.var_1449 == 7) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 720, Gvar.var_1272, 40, 40);
                }
                if (Gvar.var_1449 == 3) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 600, Gvar.var_1272, 40, 40);
                }
                if (Gvar.var_1449 == 1) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 840, Gvar.var_1272, 40, 40);
                }
            }
            if (Gvar.var_1447 == 3) {
                if (Gvar.var_1449 == 8) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 40, Gvar.var_1272, 40, 40);
                }
                if (Gvar.var_1449 == 6) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 160, Gvar.var_1272, 40, 40);
                }
                if (Gvar.var_1449 == 2) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 280, Gvar.var_1272, 40, 40);
                }
                if (Gvar.var_1449 == 4) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 400, Gvar.var_1272, 40, 40);
                }
                if (Gvar.var_1449 == 9) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 520, Gvar.var_1272, 40, 40);
                }
                if (Gvar.var_1449 == 7) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 760, Gvar.var_1272, 40, 40);
                }
                if (Gvar.var_1449 == 3) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 640, Gvar.var_1272, 40, 40);
                }
                if (Gvar.var_1449 == 1) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 880, Gvar.var_1272, 40, 40);
                }
            }
            if (Gvar.var_1447 >= 4 && Gvar.var_1447 < 10) {
                if (Gvar.var_1449 == 8) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 80, Gvar.var_1272, 40, 40);
                }
                if (Gvar.var_1449 == 6) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 200, Gvar.var_1272, 40, 40);
                }
                if (Gvar.var_1449 == 2) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 320, Gvar.var_1272, 40, 40);
                }
                if (Gvar.var_1449 == 4) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 440, Gvar.var_1272, 40, 40);
                }
                if (Gvar.var_1449 == 9) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 560, Gvar.var_1272, 40, 40);
                }
                if (Gvar.var_1449 == 7) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 800, Gvar.var_1272, 40, 40);
                }
                if (Gvar.var_1449 == 3) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 680, Gvar.var_1272, 40, 40);
                }
                if (Gvar.var_1449 == 1) {
                    Adap.gcopy(Gvar.bufferid_stand_disc, 920, Gvar.var_1272, 40, 40);
                }
            }
        }
        await Func.func354X();
}

export {func354}
