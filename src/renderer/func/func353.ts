/**
 * func353 — func353 不明
 *
 * (org原典: newDTW_func3)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func353(this: any) {
        Adap.dbgprt(353);
        Adap.pos(Gvar.var_1286, Gvar.var_1287);
        Adap.gmode(2, null, null, null);
        if (Gvar.var_1288 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos((Gvar.var_83[Gvar.var_314].Var1 - Gvar.var_66 + 4) * 40, (Gvar.var_83[Gvar.var_314].Var2 - Gvar.var_67 + 4) * 40 - 50);
            Adap.gcopy(15, 1080, 360, 40, 40); // Adap.buffer(15)は "img_enemy1b.gif" ブチュルブチュの文字？？
            Adap.pos((Gvar.var_83[Gvar.var_314].Var1 - Gvar.var_66 + 4) * 40, (Gvar.var_83[Gvar.var_314].Var2 - Gvar.var_67 + 4) * 40 - 10);
            Gvar.belongings_item_list = Gvar.var_1289;
            Gvar.var_1248 = Gvar.var_1249;
            if (Gvar.var_1270 == 1) {
                await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
        }
        if (Gvar.var_773 >= 1 && Gvar.var_773 <= 6) {
            Adap.pos(160, Gvar.var_774);
            Adap.gmode(2, null, null, null);
            Adap.gcopy(3, 40, 0, 40, 40);
        }
        if (Gvar.var_773 >= 7 && Gvar.var_773 <= 15) {
            Adap.gmode(2, null, null, null);
            if (Gvar.var_773 == 7) {
                Adap.pos(160, 110);
            }
            if (Gvar.var_773 == 8) {
                Adap.pos(160, 112);
            }
            if (Gvar.var_773 == 9) {
                Adap.pos(160, 110);
            }
            if (Gvar.var_773 == 10) {
                Adap.pos(160, 100);
            }
            if (Gvar.var_773 == 11) {
                Adap.pos(160, 105);
            }
            if (Gvar.var_773 == 12) {
                Adap.pos(160, 110);
            }
            if (Gvar.var_773 == 13) {
                Adap.pos(160, 120);
            }
            if (Gvar.var_773 == 14) {
                Adap.pos(160, 130);
            }
            if (Gvar.var_773 == 15) {
                Adap.pos(160, 160);
            }
            Adap.gcopy(3, 40, 0, 40, 40);
        }
        if (Gvar.var_777 >= 1 && Gvar.var_777 <= 6) {
            Adap.gmode(2, null, null, null);
            if (Gvar.var_777 == 1) {
                Adap.pos(160, 120);
            }
            if (Gvar.var_777 == 2) {
                Adap.pos(160, 100);
            }
            if (Gvar.var_777 == 3) {
                Adap.pos(160, 90);
            }
            if (Gvar.var_777 == 4) {
                Adap.pos(160, 85);
            }
            if (Gvar.var_777 == 5) {
                Adap.pos(160, 100);
            }
            if (Gvar.var_777 == 6) {
                Adap.pos(160, 100);
            }
            Adap.gcopy(3, 240, 0, 40, 40);
        }
        if (Gvar.var_777 >= 7 && Gvar.var_777 <= 12) {
            Adap.pos(160, Gvar.var_774);
            Adap.gmode(2, null, null, null);
            Adap.gcopy(3, 240, 0, 40, 40);
        }
        if (Gvar.var_1290 >= 1 && Gvar.var_127 == 0) {
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1290 == 1 || Gvar.var_1290 == 7 || Gvar.var_1290 == 8) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
            }
            if (Gvar.var_1290 == 9) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 50);
            }
            Gvar.var_1291 = 10;  // 敵キャラの攻撃モーション用スタンドのドット絵選択
            if (Gvar.var_1292 == 4) {
                Adap.pos(Gvar.var_1293 - 20, Gvar.var_1294 - 10);
            }
            if (Gvar.var_1292 == 6) {
                Adap.pos(Gvar.var_1293 + 20, Gvar.var_1294 - 10);
            }
            if (Gvar.var_1292 == 2) {
                Adap.pos(Gvar.var_1293, Gvar.var_1294 + 20 - 10);
            }
            if (Gvar.var_1292 == 8) {
                Adap.pos(Gvar.var_1293, Gvar.var_1294 - 20 - 10);
            }
            if (Gvar.var_1292 == 1) {
                Adap.pos(Gvar.var_1293 - 20, Gvar.var_1294 + 20 - 10);
            }
            if (Gvar.var_1292 == 3) {
                Adap.pos(Gvar.var_1293 + 20, Gvar.var_1294 + 20 - 10);
            }
            if (Gvar.var_1292 == 7) {
                Adap.pos(Gvar.var_1293 - 20, Gvar.var_1294 - 20 - 10);
            }
            if (Gvar.var_1292 == 9) {
                Adap.pos(Gvar.var_1293 + 20, Gvar.var_1294 - 20 - 10);
            }
            if (Gvar.var_1290 == 1 || Gvar.var_1290 == 2) {
                if (Gvar.var_1292 == 2) {
                    Adap.gcopy(11, 0, Gvar.var_1291 * 40, 40, 40);
                }
                if (Gvar.var_1292 == 4) {
                    Adap.gcopy(11, 120, Gvar.var_1291 * 40, 40, 40);
                }
                if (Gvar.var_1292 == 8) {
                    Adap.gcopy(11, 240, Gvar.var_1291 * 40, 40, 40);
                }
                if (Gvar.var_1292 == 6) {
                    Adap.gcopy(11, 360, Gvar.var_1291 * 40, 40, 40);
                }
                if (Gvar.var_1292 == 1) {
                    Adap.gcopy(11, 480, Gvar.var_1291 * 40, 40, 40);
                }
                if (Gvar.var_1292 == 3) {
                    Adap.gcopy(11, 720, Gvar.var_1291 * 40, 40, 40);
                }
                if (Gvar.var_1292 == 7) {
                    Adap.gcopy(11, 600, Gvar.var_1291 * 40, 40, 40);
                }
                if (Gvar.var_1292 == 9) {
                    Adap.gcopy(11, 840, Gvar.var_1291 * 40, 40, 40);
                }
            }
            if (Gvar.var_1290 == 3) {
                if (Gvar.var_1292 == 2) {
                    Adap.gcopy(11, 40, Gvar.var_1291 * 40, 40, 40);
                }
                if (Gvar.var_1292 == 4) {
                    Adap.gcopy(11, 160, Gvar.var_1291 * 40, 40, 40);
                }
                if (Gvar.var_1292 == 8) {
                    Adap.gcopy(11, 280, Gvar.var_1291 * 40, 40, 40);
                }
                if (Gvar.var_1292 == 6) {
                    Adap.gcopy(11, 400, Gvar.var_1291 * 40, 40, 40);
                }
                if (Gvar.var_1292 == 1) {
                    Adap.gcopy(11, 520, Gvar.var_1291 * 40, 40, 40);
                }
                if (Gvar.var_1292 == 3) {
                    Adap.gcopy(11, 760, Gvar.var_1291 * 40, 40, 40);
                }
                if (Gvar.var_1292 == 7) {
                    Adap.gcopy(11, 640, Gvar.var_1291 * 40, 40, 40);
                }
                if (Gvar.var_1292 == 9) {
                    Adap.gcopy(11, 880, Gvar.var_1291 * 40, 40, 40);
                }
            }
            if (Gvar.var_1290 >= 4) {
                if (Gvar.var_1292 == 2) {
                    Adap.gcopy(11, 80, Gvar.var_1291 * 40, 40, 40);
                }
                if (Gvar.var_1292 == 4) {
                    Adap.gcopy(11, 200, Gvar.var_1291 * 40, 40, 40);
                }
                if (Gvar.var_1292 == 8) {
                    Adap.gcopy(11, 320, Gvar.var_1291 * 40, 40, 40);
                }
                if (Gvar.var_1292 == 6) {
                    Adap.gcopy(11, 440, Gvar.var_1291 * 40, 40, 40);
                }
                if (Gvar.var_1292 == 1) {
                    Adap.gcopy(11, 560, Gvar.var_1291 * 40, 40, 40);
                }
                if (Gvar.var_1292 == 3) {
                    Adap.gcopy(11, 800, Gvar.var_1291 * 40, 40, 40);
                }
                if (Gvar.var_1292 == 7) {
                    Adap.gcopy(11, 680, Gvar.var_1291 * 40, 40, 40);
                }
                if (Gvar.var_1292 == 9) {
                    Adap.gcopy(11, 920, Gvar.var_1291 * 40, 40, 40);
                }
            }
            Gvar.var_1281 = 0;
            if (Gvar.var_1292 == 2 && Gvar.var_1290 == 3) {
                Adap.pos(Gvar.var_1293 + 5, Gvar.var_1294 + 50);
                Adap.gcopy(11, 1000, 400, 13, 40);
            }
            if (Gvar.var_1292 == 2 && Gvar.var_1290 == 4) {
                Adap.pos(Gvar.var_1293 + 2, Gvar.var_1294 + 50);
                Adap.gcopy(11, 1013, 400, 13, 40);
            }
            if (Gvar.var_1292 == 2 && Gvar.var_1290 >= 5 && Gvar.var_1290 < 10 && Gvar.var_1290 != 8 && Gvar.var_1290 != 9) {
                Adap.pos(Gvar.var_1293 + 5, Gvar.var_1294 + 50);
                Adap.gcopy(11, 1026, 400, 13, 40);
            }
            if (Gvar.var_1292 == 2 && Gvar.var_1290 == 8) {
                Adap.pos(Gvar.var_1293 + 5, Gvar.var_1294 + 50);
                Adap.gcopy(11, 1026, 400, 13, 40);
            }
            if (Gvar.var_1292 == 2 && Gvar.var_1290 == 9) {
                Adap.pos(Gvar.var_1293 + 5, Gvar.var_1294 + 50);
                Adap.gcopy(11, 1026, 400, 13, 40);
            }
            if (Gvar.var_1292 == 8 && Gvar.var_1290 == 3) {
                Adap.pos(Gvar.var_1293 + 18, Gvar.var_1294 - 70);
                Adap.gcopy(11, 1080, 400, 13, 40);
            }
            if (Gvar.var_1292 == 8 && Gvar.var_1290 == 4) {
                Adap.pos(Gvar.var_1293 + 18, Gvar.var_1294 - 70);
                Adap.gcopy(11, 1093, 400, 13, 40);
            }
            if (Gvar.var_1292 == 8 && Gvar.var_1290 >= 5 && Gvar.var_1290 < 10 && Gvar.var_1290 != 8 && Gvar.var_1290 != 9) {
                Adap.pos(Gvar.var_1293 + 18, Gvar.var_1294 - 70);
                Adap.gcopy(11, 1106, 400, 13, 40);
            }
            if (Gvar.var_1292 == 8 && Gvar.var_1290 == 8) {
                Adap.pos(Gvar.var_1293 + 18, Gvar.var_1294 - 70);
                Adap.gcopy(11, 1106, 400, 13, 40);
            }
            if (Gvar.var_1292 == 8 && Gvar.var_1290 == 9) {
                Adap.pos(Gvar.var_1293 + 18, Gvar.var_1294 - 70);
                Adap.gcopy(11, 1106, 400, 13, 40);
            }
            if (Gvar.var_1292 == 4 && Gvar.var_1290 == 3) {
                Adap.pos(Gvar.var_1293 - 60, Gvar.var_1294 + 4);
                Adap.gcopy(11, 1040, 400, 40, 13);
            }
            if (Gvar.var_1292 == 4 && Gvar.var_1290 == 4) {
                Adap.pos(Gvar.var_1293 - 60, Gvar.var_1294 + 4);
                Adap.gcopy(11, 1040, 413, 40, 13);
            }
            if (Gvar.var_1292 == 4 && Gvar.var_1290 >= 5 && Gvar.var_1290 < 10 && Gvar.var_1290 != 8 && Gvar.var_1290 != 9) {
                Adap.pos(Gvar.var_1293 - 60, Gvar.var_1294 + 4);
                Adap.gcopy(11, 1040, 426, 40, 13);
            }
            if (Gvar.var_1292 == 4 && Gvar.var_1290 == 8) {
                Adap.pos(Gvar.var_1293 - 60, Gvar.var_1294 + 4);
                Adap.gcopy(11, 1040, 426, 40, 13);
            }
            if (Gvar.var_1292 == 4 && Gvar.var_1290 == 9) {
                Adap.pos(Gvar.var_1293 - 60, Gvar.var_1294 + 4);
                Adap.gcopy(11, 1040, 426, 40, 13);
            }
            if (Gvar.var_1292 == 6 && Gvar.var_1290 == 3) {
                Adap.pos(Gvar.var_1293 + 60, Gvar.var_1294 + 4);
                Adap.gcopy(11, 1120, 400, 40, 13);
            }
            if (Gvar.var_1292 == 6 && Gvar.var_1290 == 4) {
                Adap.pos(Gvar.var_1293 + 60, Gvar.var_1294 + 4);
                Adap.gcopy(11, 1120, 413, 40, 13);
            }
            if (Gvar.var_1292 == 6 && Gvar.var_1290 >= 5 && Gvar.var_1290 < 10 && Gvar.var_1290 != 8 && Gvar.var_1290 != 9) {
                Adap.pos(Gvar.var_1293 + 60, Gvar.var_1294 + 4);
                Adap.gcopy(11, 1120, 426, 40, 13);
            }
            if (Gvar.var_1292 == 6 && Gvar.var_1290 == 8) {
                Adap.pos(Gvar.var_1293 + 60, Gvar.var_1294 + 4);
                Adap.gcopy(11, 1120, 426, 40, 13);
            }
            if (Gvar.var_1292 == 6 && Gvar.var_1290 == 9) {
                Adap.pos(Gvar.var_1293 + 60, Gvar.var_1294 + 4);
                Adap.gcopy(11, 1120, 426, 40, 13);
            }
            if (Gvar.var_1292 == 1 && Gvar.var_1290 == 3) {
                Adap.pos(Gvar.var_1293 - 59, Gvar.var_1294 + 49);
                Adap.gcopy(11, 1160, 400, 40, 40);
            }
            if (Gvar.var_1292 == 1 && Gvar.var_1290 == 4) {
                Adap.pos(Gvar.var_1293 - 59, Gvar.var_1294 + 49);
                Adap.gcopy(11, 1200, 400, 40, 40);
            }
            if (Gvar.var_1292 == 1 && Gvar.var_1290 >= 5 && Gvar.var_1290 < 10 && Gvar.var_1290 != 8 && Gvar.var_1290 != 9) {
                Adap.pos(Gvar.var_1293 - 59, Gvar.var_1294 + 49);
                Adap.gcopy(11, 1240, 400, 40, 40);
            }
            if (Gvar.var_1292 == 1 && Gvar.var_1290 == 8) {
                Adap.pos(Gvar.var_1293 - 59, Gvar.var_1294 + 49);
                Adap.gcopy(11, 1240, 400, 40, 40);
            }
            if (Gvar.var_1292 == 1 && Gvar.var_1290 == 9) {
                Adap.pos(Gvar.var_1293 - 59, Gvar.var_1294 + 49);
                Adap.gcopy(11, 1240, 400, 40, 40);
            }
            if (Gvar.var_1292 == 3 && Gvar.var_1290 == 3) {
                Adap.pos(Gvar.var_1293 + 59, Gvar.var_1294 + 49);
                Adap.gcopy(11, 1160, 440, 40, 40);
            }
            if (Gvar.var_1292 == 3 && Gvar.var_1290 == 4) {
                Adap.pos(Gvar.var_1293 + 59, Gvar.var_1294 + 49);
                Adap.gcopy(11, 1200, 440, 40, 40);
            }
            if (Gvar.var_1292 == 3 && Gvar.var_1290 >= 5 && Gvar.var_1290 < 10 && Gvar.var_1290 != 8 && Gvar.var_1290 != 9) {
                Adap.pos(Gvar.var_1293 + 59, Gvar.var_1294 + 49);
                Adap.gcopy(11, 1240, 440, 40, 40);
            }
            if (Gvar.var_1292 == 3 && Gvar.var_1290 == 8) {
                Adap.pos(Gvar.var_1293 + 59, Gvar.var_1294 + 49);
                Adap.gcopy(11, 1240, 440, 40, 40);
            }
            if (Gvar.var_1292 == 3 && Gvar.var_1290 == 9) {
                Adap.pos(Gvar.var_1293 + 59, Gvar.var_1294 + 49);
                Adap.gcopy(11, 1240, 440, 40, 40);
            }
            if (Gvar.var_1292 == 7 && Gvar.var_1290 == 3) {
                Adap.pos(Gvar.var_1293 - 59, Gvar.var_1294 - 70);
                Adap.gcopy(11, 1040, 360, 40, 40);
            }
            if (Gvar.var_1292 == 7 && Gvar.var_1290 == 4) {
                Adap.pos(Gvar.var_1293 - 59, Gvar.var_1294 - 70);
                Adap.gcopy(11, 1080, 360, 40, 40);
            }
            if (Gvar.var_1292 == 7 && Gvar.var_1290 >= 5 && Gvar.var_1290 < 10 && Gvar.var_1290 != 8 && Gvar.var_1290 != 9) {
                Adap.pos(Gvar.var_1293 - 59, Gvar.var_1294 - 70);
                Adap.gcopy(11, 1120, 360, 40, 40);
            }
            if (Gvar.var_1292 == 7 && Gvar.var_1290 == 8) {
                Adap.pos(Gvar.var_1293 - 59, Gvar.var_1294 - 70);
                Adap.gcopy(11, 1120, 360, 40, 40);
            }
            if (Gvar.var_1292 == 7 && Gvar.var_1290 == 9) {
                Adap.pos(Gvar.var_1293 - 59, Gvar.var_1294 - 70);
                Adap.gcopy(11, 1120, 360, 40, 40);
            }
            if (Gvar.var_1292 == 9 && Gvar.var_1290 == 3) {
                Adap.pos(Gvar.var_1293 + 59, Gvar.var_1294 - 70);
                Adap.gcopy(11, 1160, 360, 40, 40);
            }
            if (Gvar.var_1292 == 9 && Gvar.var_1290 == 4) {
                Adap.pos(Gvar.var_1293 + 59, Gvar.var_1294 - 70);
                Adap.gcopy(11, 1200, 360, 40, 40);
            }
            if (Gvar.var_1292 == 9 && Gvar.var_1290 >= 5 && Gvar.var_1290 < 10 && Gvar.var_1290 != 8 && Gvar.var_1290 != 9) {
                Adap.pos(Gvar.var_1293 + 59, Gvar.var_1294 - 70);
                Adap.gcopy(11, 1240, 360, 40, 40);
            }
            if (Gvar.var_1292 == 9 && Gvar.var_1290 == 8) {
                Adap.pos(Gvar.var_1293 + 59, Gvar.var_1294 - 70);
                Adap.gcopy(11, 1240, 360, 40, 40);
            }
            if (Gvar.var_1292 == 9 && Gvar.var_1290 == 9) {
                Adap.pos(Gvar.var_1293 + 59, Gvar.var_1294 - 70);
                Adap.gcopy(11, 1240, 360, 40, 40);
            }
        }
        if (Gvar.var_1295 >= 1 && Gvar.var_127 == 0) {
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1292 == 2 && Gvar.var_1295 == 4) {
                Adap.pos(Gvar.var_1293 + 5, Gvar.var_1294 + 33);
                Adap.gcopy(34, 1000, 480, 13, 40);
            }
            if (Gvar.var_1292 == 2 && Gvar.var_1295 == 5) {
                Adap.pos(Gvar.var_1293 + 5, Gvar.var_1294 + 33);
                Adap.gcopy(34, 1013, 480, 13, 40);
            }
            if (Gvar.var_1292 == 2) {
                if (Gvar.var_1295 == 6 || Gvar.var_1295 == 7) {
                    Adap.pos(Gvar.var_1293 + 5, Gvar.var_1294 + 43);
                    Adap.gcopy(34, 1026, 480, 13, 40);
                }
            }
            if (Gvar.var_1292 == 2 && Gvar.var_1295 == 8) {
                Adap.pos(Gvar.var_1293 + 5, Gvar.var_1294 + 43);
                Adap.gcopy(34, 1013, 480, 13, 40);
            }
            if (Gvar.var_1292 == 2 && Gvar.var_1295 == 9) {
                Adap.pos(Gvar.var_1293 + 5, Gvar.var_1294 + 33);
                Adap.gcopy(34, 1000, 480, 13, 40);
            }
            if (Gvar.var_1292 == 8 && Gvar.var_1295 == 4) {
                Adap.pos(Gvar.var_1293 + 20, Gvar.var_1294 - 52);
                Adap.gcopy(34, 1080, 480, 13, 40);
            }
            if (Gvar.var_1292 == 8 && Gvar.var_1295 == 5) {
                Adap.pos(Gvar.var_1293 + 20, Gvar.var_1294 - 52);
                Adap.gcopy(34, 1093, 480, 13, 40);
            }
            if (Gvar.var_1292 == 8) {
                if (Gvar.var_1295 == 6 || Gvar.var_1295 == 7) {
                    Adap.pos(Gvar.var_1293 + 20, Gvar.var_1294 - 62);
                    Adap.gcopy(34, 1106, 480, 13, 40);
                }
            }
            if (Gvar.var_1292 == 8 && Gvar.var_1295 == 8) {
                Adap.pos(Gvar.var_1293 + 20, Gvar.var_1294 - 62);
                Adap.gcopy(34, 1093, 480, 13, 40);
            }
            if (Gvar.var_1292 == 8 && Gvar.var_1295 == 9) {
                Adap.pos(Gvar.var_1293 + 20, Gvar.var_1294 - 52);
                Adap.gcopy(34, 1080, 480, 13, 40);
            }
            if (Gvar.var_1292 == 4 && Gvar.var_1295 == 4) {
                Adap.pos(Gvar.var_1293 - 43, Gvar.var_1294 + 6);
                Adap.gcopy(34, 1040, 480, 40, 13);
            }
            if (Gvar.var_1292 == 4 && Gvar.var_1295 == 5) {
                Adap.pos(Gvar.var_1293 - 43, Gvar.var_1294 + 6);
                Adap.gcopy(34, 1040, 493, 40, 13);
            }
            if (Gvar.var_1292 == 4) {
                if (Gvar.var_1295 == 6 || Gvar.var_1295 == 7) {
                    Adap.pos(Gvar.var_1293 - 53, Gvar.var_1294 + 6);
                    Adap.gcopy(34, 1040, 506, 40, 13);
                }
            }
            if (Gvar.var_1292 == 4 && Gvar.var_1295 == 8) {
                Adap.pos(Gvar.var_1293 - 53, Gvar.var_1294 + 6);
                Adap.gcopy(34, 1040, 493, 40, 13);
            }
            if (Gvar.var_1292 == 4 && Gvar.var_1295 == 9) {
                Adap.pos(Gvar.var_1293 - 43, Gvar.var_1294 + 6);
                Adap.gcopy(34, 1040, 480, 40, 13);
            }
            if (Gvar.var_1292 == 6 && Gvar.var_1295 == 4) {
                Adap.pos(Gvar.var_1293 + 43, Gvar.var_1294 + 6);
                Adap.gcopy(34, 1120, 480, 40, 13);
            }
            if (Gvar.var_1292 == 6 && Gvar.var_1295 == 5) {
                Adap.pos(Gvar.var_1293 + 43, Gvar.var_1294 + 6);
                Adap.gcopy(34, 1120, 493, 40, 13);
            }
            if (Gvar.var_1292 == 6) {
                if (Gvar.var_1295 == 6 || Gvar.var_1295 == 7) {
                    Adap.pos(Gvar.var_1293 + 53, Gvar.var_1294 + 6);
                    Adap.gcopy(34, 1120, 506, 40, 13);
                }
            }
            if (Gvar.var_1292 == 6 && Gvar.var_1295 == 8) {
                Adap.pos(Gvar.var_1293 + 53, Gvar.var_1294 + 6);
                Adap.gcopy(34, 1120, 493, 40, 13);
            }
            if (Gvar.var_1292 == 6 && Gvar.var_1295 == 9) {
                Adap.pos(Gvar.var_1293 + 43, Gvar.var_1294 + 6);
                Adap.gcopy(34, 1120, 480, 40, 13);
            }
            if (Gvar.var_1292 == 1 && Gvar.var_1295 == 4) {
                Adap.pos(Gvar.var_1293 - 44, Gvar.var_1294 + 32);
                Adap.gcopy(34, 1160, 480, 40, 40);
            }
            if (Gvar.var_1292 == 1 && Gvar.var_1295 == 5) {
                Adap.pos(Gvar.var_1293 - 44, Gvar.var_1294 + 32);
                Adap.gcopy(34, 1200, 480, 40, 40);
            }
            if (Gvar.var_1292 == 1 && Gvar.var_1295 == 6) {
                Adap.pos(Gvar.var_1293 - 54, Gvar.var_1294 + 42);
                Adap.gcopy(34, 1240, 480, 40, 40);
            }
            if (Gvar.var_1292 == 1 && Gvar.var_1295 == 7) {
                Adap.pos(Gvar.var_1293 - 59, Gvar.var_1294 + 47);
                Adap.gcopy(34, 1240, 480, 40, 40);
            }
            if (Gvar.var_1292 == 1 && Gvar.var_1295 == 8) {
                Adap.pos(Gvar.var_1293 - 54, Gvar.var_1294 + 42);
                Adap.gcopy(34, 1200, 480, 40, 40);
            }
            if (Gvar.var_1292 == 1 && Gvar.var_1295 == 9) {
                Adap.pos(Gvar.var_1293 - 44, Gvar.var_1294 + 32);
                Adap.gcopy(34, 1160, 480, 40, 40);
            }
            if (Gvar.var_1292 == 3 && Gvar.var_1295 == 4) {
                Adap.pos(Gvar.var_1293 + 44, Gvar.var_1294 + 32);
                Adap.gcopy(34, 1160, 520, 40, 40);
            }
            if (Gvar.var_1292 == 3 && Gvar.var_1295 == 5) {
                Adap.pos(Gvar.var_1293 + 44, Gvar.var_1294 + 32);
                Adap.gcopy(34, 1200, 520, 40, 40);
            }
            if (Gvar.var_1292 == 3 && Gvar.var_1295 == 6) {
                Adap.pos(Gvar.var_1293 + 54, Gvar.var_1294 + 42);
                Adap.gcopy(34, 1240, 520, 40, 40);
            }
            if (Gvar.var_1292 == 3 && Gvar.var_1295 == 7) {
                Adap.pos(Gvar.var_1293 + 59, Gvar.var_1294 + 47);
                Adap.gcopy(34, 1240, 520, 40, 40);
            }
            if (Gvar.var_1292 == 3 && Gvar.var_1295 == 8) {
                Adap.pos(Gvar.var_1293 + 54, Gvar.var_1294 + 42);
                Adap.gcopy(34, 1200, 520, 40, 40);
            }
            if (Gvar.var_1292 == 3 && Gvar.var_1295 == 9) {
                Adap.pos(Gvar.var_1293 + 44, Gvar.var_1294 + 32);
                Adap.gcopy(34, 1160, 520, 40, 40);
            }
            if (Gvar.var_1292 == 7 && Gvar.var_1295 == 4) {
                Adap.pos(Gvar.var_1293 - 44, Gvar.var_1294 - 54);
                Adap.gcopy(34, 1040, 440, 40, 40);
            }
            if (Gvar.var_1292 == 7 && Gvar.var_1295 == 5) {
                Adap.pos(Gvar.var_1293 - 44, Gvar.var_1294 - 54);
                Adap.gcopy(34, 1080, 440, 40, 40);
            }
            if (Gvar.var_1292 == 7 && Gvar.var_1295 == 6) {
                Adap.pos(Gvar.var_1293 - 54, Gvar.var_1294 - 64);
                Adap.gcopy(34, 1120, 440, 40, 40);
            }
            if (Gvar.var_1292 == 7 && Gvar.var_1295 == 7) {
                Adap.pos(Gvar.var_1293 - 59, Gvar.var_1294 - 69);
                Adap.gcopy(34, 1120, 440, 40, 40);
            }
            if (Gvar.var_1292 == 7 && Gvar.var_1295 == 8) {
                Adap.pos(Gvar.var_1293 - 54, Gvar.var_1294 - 64);
                Adap.gcopy(34, 1080, 440, 40, 40);
            }
            if (Gvar.var_1292 == 7 && Gvar.var_1295 == 9) {
                Adap.pos(Gvar.var_1293 - 44, Gvar.var_1294 - 54);
                Adap.gcopy(34, 1040, 440, 40, 40);
            }
            if (Gvar.var_1292 == 9 && Gvar.var_1295 == 4) {
                Adap.pos(Gvar.var_1293 + 44, Gvar.var_1294 - 54);
                Adap.gcopy(34, 1040, 520, 40, 40);
            }
            if (Gvar.var_1292 == 9 && Gvar.var_1295 == 5) {
                Adap.pos(Gvar.var_1293 + 44, Gvar.var_1294 - 54);
                Adap.gcopy(34, 1080, 520, 40, 40);
            }
            if (Gvar.var_1292 == 9 && Gvar.var_1295 == 6) {
                Adap.pos(Gvar.var_1293 + 54, Gvar.var_1294 - 64);
                Adap.gcopy(34, 1120, 520, 40, 40);
            }
            if (Gvar.var_1292 == 9 && Gvar.var_1295 == 7) {
                Adap.pos(Gvar.var_1293 + 59, Gvar.var_1294 - 69);
                Adap.gcopy(34, 1120, 520, 40, 40);
            }
            if (Gvar.var_1292 == 9 && Gvar.var_1295 == 8) {
                Adap.pos(Gvar.var_1293 + 54, Gvar.var_1294 - 64);
                Adap.gcopy(34, 1080, 520, 40, 40);
            }
            if (Gvar.var_1292 == 9 && Gvar.var_1295 == 9) {
                Adap.pos(Gvar.var_1293 + 44, Gvar.var_1294 - 54);
                Adap.gcopy(34, 1040, 520, 40, 40);
            }
        }
        if (Gvar.var_1296 >= 1 && Gvar.var_127 == 0) {
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1292 == 2 && Gvar.var_1296 == 4) {
                Adap.pos(Gvar.var_1293 - 2, Gvar.var_1294 + 40);
                Adap.gcopy(34, 1000, 600, 13, 40);
            }
            if (Gvar.var_1292 == 2 && Gvar.var_1296 == 5) {
                Adap.pos(Gvar.var_1293 - 1, Gvar.var_1294 + 40);
                Adap.gcopy(34, 1013, 600, 13, 40);
            }
            if (Gvar.var_1292 == 2) {
                if (Gvar.var_1296 == 6 || Gvar.var_1296 == 7) {
                    Adap.pos(Gvar.var_1293, Gvar.var_1294 + 50);
                    Adap.gcopy(34, 1026, 600, 13, 40);
                }
            }
            if (Gvar.var_1292 == 2 && Gvar.var_1296 == 8) {
                Adap.pos(Gvar.var_1293, Gvar.var_1294 + 50);
                Adap.gcopy(34, 1026, 600, 13, 40);
            }
            if (Gvar.var_1292 == 2 && Gvar.var_1296 == 9) {
                Adap.pos(Gvar.var_1293, Gvar.var_1294 + 40);
                Adap.gcopy(34, 1026, 600, 13, 40);
            }
            if (Gvar.var_1292 == 8 && Gvar.var_1296 == 4) {
                Adap.pos(Gvar.var_1293 + 10, Gvar.var_1294 - 58);
                Adap.gcopy(34, 1080, 600, 13, 40);
            }
            if (Gvar.var_1292 == 8 && Gvar.var_1296 == 5) {
                Adap.pos(Gvar.var_1293 + 10, Gvar.var_1294 - 58);
                Adap.gcopy(34, 1093, 600, 13, 40);
            }
            if (Gvar.var_1292 == 8) {
                if (Gvar.var_1296 == 6 || Gvar.var_1296 == 7) {
                    Adap.pos(Gvar.var_1293 + 10, Gvar.var_1294 - 68);
                    Adap.gcopy(34, 1106, 600, 13, 40);
                }
            }
            if (Gvar.var_1292 == 8 && Gvar.var_1296 == 8) {
                Adap.pos(Gvar.var_1293 + 10, Gvar.var_1294 - 68);
                Adap.gcopy(34, 1106, 600, 13, 40);
            }
            if (Gvar.var_1292 == 8 && Gvar.var_1296 == 9) {
                Adap.pos(Gvar.var_1293 + 10, Gvar.var_1294 - 58);
                Adap.gcopy(34, 1106, 600, 13, 40);
            }
            if (Gvar.var_1292 == 4 && Gvar.var_1296 == 4) {
                Adap.pos(Gvar.var_1293 - 50, Gvar.var_1294 + 6);
                Adap.gcopy(34, 1040, 600, 40, 13);
            }
            if (Gvar.var_1292 == 4 && Gvar.var_1296 == 5) {
                Adap.pos(Gvar.var_1293 - 50, Gvar.var_1294 + 7);
                Adap.gcopy(34, 1040, 613, 40, 13);
            }
            if (Gvar.var_1292 == 4) {
                if (Gvar.var_1296 == 6 || Gvar.var_1296 == 7) {
                    Adap.pos(Gvar.var_1293 - 60, Gvar.var_1294 + 8);
                    Adap.gcopy(34, 1040, 626, 40, 13);
                }
            }
            if (Gvar.var_1292 == 4 && Gvar.var_1296 == 8) {
                Adap.pos(Gvar.var_1293 - 60, Gvar.var_1294 + 8);
                Adap.gcopy(34, 1040, 626, 40, 13);
            }
            if (Gvar.var_1292 == 4 && Gvar.var_1296 == 9) {
                Adap.pos(Gvar.var_1293 - 50, Gvar.var_1294 + 8);
                Adap.gcopy(34, 1040, 626, 40, 13);
            }
            if (Gvar.var_1292 == 6 && Gvar.var_1296 == 4) {
                Adap.pos(Gvar.var_1293 + 51, Gvar.var_1294 + 6);
                Adap.gcopy(34, 1120, 600, 40, 13);
            }
            if (Gvar.var_1292 == 6 && Gvar.var_1296 == 5) {
                Adap.pos(Gvar.var_1293 + 51, Gvar.var_1294 + 7);
                Adap.gcopy(34, 1120, 613, 40, 13);
            }
            if (Gvar.var_1292 == 6) {
                if (Gvar.var_1296 == 6 || Gvar.var_1296 == 7) {
                    Adap.pos(Gvar.var_1293 + 61, Gvar.var_1294 + 8);
                    Adap.gcopy(34, 1120, 626, 40, 13);
                }
            }
            if (Gvar.var_1292 == 6 && Gvar.var_1296 == 8) {
                Adap.pos(Gvar.var_1293 + 61, Gvar.var_1294 + 8);
                Adap.gcopy(34, 1120, 626, 40, 13);
            }
            if (Gvar.var_1292 == 6 && Gvar.var_1296 == 9) {
                Adap.pos(Gvar.var_1293 + 51, Gvar.var_1294 + 8);
                Adap.gcopy(34, 1120, 626, 40, 13);
            }
            if (Gvar.var_1292 == 1 && Gvar.var_1296 == 4) {
                Adap.pos(Gvar.var_1293 - 44, Gvar.var_1294 + 32);
                Adap.gcopy(34, 1160, 600, 40, 40);
            }
            if (Gvar.var_1292 == 1 && Gvar.var_1296 == 5) {
                Adap.pos(Gvar.var_1293 - 44, Gvar.var_1294 + 32);
                Adap.gcopy(34, 1200, 600, 40, 40);
            }
            if (Gvar.var_1292 == 1 && Gvar.var_1296 == 6) {
                Adap.pos(Gvar.var_1293 - 54, Gvar.var_1294 + 42);
                Adap.gcopy(34, 1240, 600, 40, 40);
            }
            if (Gvar.var_1292 == 1 && Gvar.var_1296 == 7) {
                Adap.pos(Gvar.var_1293 - 59, Gvar.var_1294 + 47);
                Adap.gcopy(34, 1240, 600, 40, 40);
            }
            if (Gvar.var_1292 == 1 && Gvar.var_1296 == 8) {
                Adap.pos(Gvar.var_1293 - 54, Gvar.var_1294 + 42);
                Adap.gcopy(34, 1240, 600, 40, 40);
            }
            if (Gvar.var_1292 == 1 && Gvar.var_1296 == 9) {
                Adap.pos(Gvar.var_1293 - 44, Gvar.var_1294 + 32);
                Adap.gcopy(34, 1240, 600, 40, 40);
            }
            if (Gvar.var_1292 == 3 && Gvar.var_1296 == 4) {
                Adap.pos(Gvar.var_1293 + 44, Gvar.var_1294 + 32);
                Adap.gcopy(34, 1160, 640, 40, 40);
            }
            if (Gvar.var_1292 == 3 && Gvar.var_1296 == 5) {
                Adap.pos(Gvar.var_1293 + 44, Gvar.var_1294 + 32);
                Adap.gcopy(34, 1200, 640, 40, 40);
            }
            if (Gvar.var_1292 == 3 && Gvar.var_1296 == 6) {
                Adap.pos(Gvar.var_1293 + 54, Gvar.var_1294 + 42);
                Adap.gcopy(34, 1240, 640, 40, 40);
            }
            if (Gvar.var_1292 == 3 && Gvar.var_1296 == 7) {
                Adap.pos(Gvar.var_1293 + 59, Gvar.var_1294 + 47);
                Adap.gcopy(34, 1240, 640, 40, 40);
            }
            if (Gvar.var_1292 == 3 && Gvar.var_1296 == 8) {
                Adap.pos(Gvar.var_1293 + 54, Gvar.var_1294 + 42);
                Adap.gcopy(34, 1240, 640, 40, 40);
            }
            if (Gvar.var_1292 == 3 && Gvar.var_1296 == 9) {
                Adap.pos(Gvar.var_1293 + 44, Gvar.var_1294 + 32);
                Adap.gcopy(34, 1240, 640, 40, 40);
            }
            if (Gvar.var_1292 == 7 && Gvar.var_1296 == 4) {
                Adap.pos(Gvar.var_1293 - 44, Gvar.var_1294 - 54);
                Adap.gcopy(34, 1040, 560, 40, 40);
            }
            if (Gvar.var_1292 == 7 && Gvar.var_1296 == 5) {
                Adap.pos(Gvar.var_1293 - 44, Gvar.var_1294 - 54);
                Adap.gcopy(34, 1080, 560, 40, 40);
            }
            if (Gvar.var_1292 == 7 && Gvar.var_1296 == 6) {
                Adap.pos(Gvar.var_1293 - 54, Gvar.var_1294 - 64);
                Adap.gcopy(34, 1120, 560, 40, 40);
            }
            if (Gvar.var_1292 == 7 && Gvar.var_1296 == 7) {
                Adap.pos(Gvar.var_1293 - 59, Gvar.var_1294 - 69);
                Adap.gcopy(34, 1120, 560, 40, 40);
            }
            if (Gvar.var_1292 == 7 && Gvar.var_1296 == 8) {
                Adap.pos(Gvar.var_1293 - 54, Gvar.var_1294 - 64);
                Adap.gcopy(34, 1120, 560, 40, 40);
            }
            if (Gvar.var_1292 == 7 && Gvar.var_1296 == 9) {
                Adap.pos(Gvar.var_1293 - 44, Gvar.var_1294 - 54);
                Adap.gcopy(34, 1120, 560, 40, 40);
            }
            if (Gvar.var_1292 == 9 && Gvar.var_1296 == 4) {
                Adap.pos(Gvar.var_1293 + 44, Gvar.var_1294 - 54);
                Adap.gcopy(34, 1040, 640, 40, 40);
            }
            if (Gvar.var_1292 == 9 && Gvar.var_1296 == 5) {
                Adap.pos(Gvar.var_1293 + 44, Gvar.var_1294 - 54);
                Adap.gcopy(34, 1080, 640, 40, 40);
            }
            if (Gvar.var_1292 == 9 && Gvar.var_1296 == 6) {
                Adap.pos(Gvar.var_1293 + 54, Gvar.var_1294 - 64);
                Adap.gcopy(34, 1120, 640, 40, 40);
            }
            if (Gvar.var_1292 == 9 && Gvar.var_1296 == 7) {
                Adap.pos(Gvar.var_1293 + 59, Gvar.var_1294 - 69);
                Adap.gcopy(34, 1120, 640, 40, 40);
            }
            if (Gvar.var_1292 == 9 && Gvar.var_1296 == 8) {
                Adap.pos(Gvar.var_1293 + 54, Gvar.var_1294 - 64);
                Adap.gcopy(34, 1120, 640, 40, 40);
            }
            if (Gvar.var_1292 == 9 && Gvar.var_1296 == 9) {
                Adap.pos(Gvar.var_1293 + 44, Gvar.var_1294 - 54);
                Adap.gcopy(34, 1120, 640, 40, 40);
            }
        }
        return;
}

export {func353}
