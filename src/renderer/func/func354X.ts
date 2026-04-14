/**
 * func354X — func354X 不明
 *
 * (org原典: newDTW_func3)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func354X(this: any) {
        if (Gvar.var_1452 >= 1) {
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
            Gvar.var_1272 = 600;
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1452 == 1 || Gvar.var_1452 == 7 || Gvar.var_1452 == 8) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
            }
            if (Gvar.var_1452 == 9) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 50);
            }
            if (Gvar.var_1452 == 1 || Gvar.var_1452 == 2) {
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
            if (Gvar.var_1452 == 3) {
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
            if (Gvar.var_1452 >= 4 && Gvar.var_1452 < 10) {
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
        if (Gvar.var_1453 >= 1) {
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1453 == 1) {
                Adap.pos(Gvar.var_1286, Gvar.var_1287 - 170);
            }
            if (Gvar.var_1453 == 2) {
                Adap.pos(Gvar.var_1286, Gvar.var_1287 - 140);
            }
            if (Gvar.var_1453 == 3) {
                Adap.pos(Gvar.var_1286, Gvar.var_1287 - 110);
            }
            if (Gvar.var_1453 == 4) {
                Adap.pos(Gvar.var_1286, Gvar.var_1287 - 80);
            }
            if (Gvar.var_1453 == 5) {
                Adap.pos(Gvar.var_1286, Gvar.var_1287 - 60);
            }
            if (Gvar.var_1453 == 6) {
                Adap.pos(Gvar.var_1286, Gvar.var_1287 - 40);
            }
            if (Gvar.var_1453 == 7) {
                Adap.pos(Gvar.var_1286, Gvar.var_1287 - 20);
            }
            if (Gvar.var_1453 == 8) {
                Adap.pos(Gvar.var_1286, Gvar.var_1287 - 10);
            }
            if (Gvar.var_1453 == 9) {
                Adap.pos(Gvar.var_1286, Gvar.var_1287 - 5);
            }
            Adap.gcopy(6, 80, 600, 40, 40);
        }
        if (Gvar.var_1454 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos(160, 112);
            Adap.gcopy(3, 880, 400, 40, 40);
            Adap.font("メイリオ", 7);
            Adap.color(0, 255, 0);
            Adap.pos(176, 117);
            if (Gvar.var_1455 >= 10) {
                Adap.mes("0" + Gvar.var_1455);
            }
            if (Gvar.var_1455 <= 9) {
                Adap.mes("00" + Gvar.var_1455);
            }
        }
        if (Gvar.var_1456 >= 1) {
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1456 == 1) {
                Adap.pos((Gvar.var_1457 - Gvar.var_66 + 4) * 40, (Gvar.var_1458 - Gvar.var_67 + 4) * 40 - 10 - 20);
            }
            if (Gvar.var_1456 == 2) {
                Adap.pos((Gvar.var_1457 - Gvar.var_66 + 4) * 40, (Gvar.var_1458 - Gvar.var_67 + 4) * 40 - 10 - 40);
            }
            if (Gvar.var_1456 == 3) {
                Adap.pos((Gvar.var_1457 - Gvar.var_66 + 4) * 40, (Gvar.var_1458 - Gvar.var_67 + 4) * 40 - 10 - 60);
            }
            if (Gvar.var_1456 == 4) {
                Adap.pos((Gvar.var_1457 - Gvar.var_66 + 4) * 40, (Gvar.var_1458 - Gvar.var_67 + 4) * 40 - 10 - 80);
            }
            if (Gvar.var_1456 == 5) {
                Adap.pos((Gvar.var_1457 - Gvar.var_66 + 4) * 40, (Gvar.var_1458 - Gvar.var_67 + 4) * 40 - 10 - 100);
            }
            if (Gvar.var_1456 == 6) {
                Adap.pos((Gvar.var_1457 - Gvar.var_66 + 4) * 40, (Gvar.var_1458 - Gvar.var_67 + 4) * 40 - 10 - 120);
            }
            if (Gvar.var_1456 == 7) {
                Adap.pos((Gvar.var_1457 - Gvar.var_66 + 4) * 40, (Gvar.var_1458 - Gvar.var_67 + 4) * 40 - 10 - 140);
            }
            if (Gvar.var_1456 == 8) {
                Adap.pos((Gvar.var_1457 - Gvar.var_66 + 4) * 40, (Gvar.var_1458 - Gvar.var_67 + 4) * 40 - 10 - 160);
            }
            if (Gvar.var_1456 == 9) {
                Adap.pos((Gvar.var_1457 - Gvar.var_66 + 4) * 40, (Gvar.var_1458 - Gvar.var_67 + 4) * 40 - 10 - 180);
            }
            if (Gvar.var_1456 == 10) {
                Adap.pos((Gvar.var_1457 - Gvar.var_66 + 4) * 40, (Gvar.var_1458 - Gvar.var_67 + 4) * 40 - 10 - 200);
            }
            if (Gvar.var_1456 == 11) {
                Adap.pos((Gvar.var_1457 - Gvar.var_66 + 4) * 40, (Gvar.var_1458 - Gvar.var_67 + 4) * 40 - 10 - 220);
            }
            if (Gvar.var_1456 == 12) {
                Adap.pos((Gvar.var_1457 - Gvar.var_66 + 4) * 40, (Gvar.var_1458 - Gvar.var_67 + 4) * 40 - 10 - 240);
            }
            Gvar.belongings_item_list = Gvar.var_1459;
            Gvar.var_1248 = Gvar.var_1249;
            await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            Adap.gcopy(21, 0, 960, 40, 40);
        }
        if (Gvar.var_1460 >= 1) {
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1460 == 1) {
                Adap.pos((Gvar.var_1457 - Gvar.var_66 + 4) * 40, (Gvar.var_1458 - Gvar.var_67 + 4) * 40 - 10 - 20);
            }
            if (Gvar.var_1460 == 2) {
                Adap.pos((Gvar.var_1457 - Gvar.var_66 + 4) * 40, (Gvar.var_1458 - Gvar.var_67 + 4) * 40 - 10 - 40);
            }
            if (Gvar.var_1460 == 3) {
                Adap.pos((Gvar.var_1457 - Gvar.var_66 + 4) * 40, (Gvar.var_1458 - Gvar.var_67 + 4) * 40 - 10 - 60);
            }
            if (Gvar.var_1460 == 4) {
                Adap.pos((Gvar.var_1457 - Gvar.var_66 + 4) * 40, (Gvar.var_1458 - Gvar.var_67 + 4) * 40 - 10 - 80);
            }
            if (Gvar.var_1460 == 5) {
                Adap.pos((Gvar.var_1457 - Gvar.var_66 + 4) * 40, (Gvar.var_1458 - Gvar.var_67 + 4) * 40 - 10 - 100);
            }
            if (Gvar.var_1460 == 6) {
                Adap.pos((Gvar.var_1457 - Gvar.var_66 + 4) * 40, (Gvar.var_1458 - Gvar.var_67 + 4) * 40 - 10 - 120);
            }
            if (Gvar.var_1460 == 7) {
                Adap.pos((Gvar.var_1457 - Gvar.var_66 + 4) * 40, (Gvar.var_1458 - Gvar.var_67 + 4) * 40 - 10 - 140);
            }
            if (Gvar.var_1460 == 8) {
                Adap.pos((Gvar.var_1457 - Gvar.var_66 + 4) * 40, (Gvar.var_1458 - Gvar.var_67 + 4) * 40 - 10 - 160);
            }
            if (Gvar.var_1460 == 9) {
                Adap.pos((Gvar.var_1457 - Gvar.var_66 + 4) * 40, (Gvar.var_1458 - Gvar.var_67 + 4) * 40 - 10 - 180);
            }
            if (Gvar.var_1460 == 10) {
                Adap.pos((Gvar.var_1457 - Gvar.var_66 + 4) * 40, (Gvar.var_1458 - Gvar.var_67 + 4) * 40 - 10 - 200);
            }
            if (Gvar.var_1460 == 11) {
                Adap.pos((Gvar.var_1457 - Gvar.var_66 + 4) * 40, (Gvar.var_1458 - Gvar.var_67 + 4) * 40 - 10 - 220);
            }
            if (Gvar.var_1460 == 12) {
                Adap.pos((Gvar.var_1457 - Gvar.var_66 + 4) * 40, (Gvar.var_1458 - Gvar.var_67 + 4) * 40 - 10 - 240);
            }
            Gvar.belongings_item_list = Gvar.var_1459;
            Gvar.var_1248 = Gvar.var_1249;
            await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            Adap.gcopy(3, 920, 400, 40, 40);
        }
        if (Gvar.var_1461 >= 1 && Gvar.var_1461 <= 7) {
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1461 == 3) {
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 200);
            }
            if (Gvar.var_1461 == 4) {
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 150);
            }
            if (Gvar.var_1461 == 5) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
            }
            if (Gvar.var_1461 == 6) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 50);
            }
            if (Gvar.var_1461 == 7) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 20);
            }
            Adap.pos(Gvar.var_1462, Gvar.var_1463);
            if (Gvar.var_1464 == 0 || Gvar.var_1464 == 3) {
                Adap.gcopy(3, 1040, 440, 40, 40);
            }
            if (Gvar.var_1464 == 1 || Gvar.var_1464 == 4) {
                Adap.gcopy(3, 1080, 440, 40, 40);
            }
        }
        if (Gvar.var_1465 >= 1) {
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1465 == 1) {
                Gvar.var_1466 = Math.floor((Gvar.var_1462 + Gvar.var_1467) / 5) * 1;
                Gvar.var_1468 = 160 - Math.floor((Gvar.var_1463 + Gvar.var_1469) / 5) * 1;
            }
            if (Gvar.var_1465 == 2) {
                Gvar.var_1466 = Math.floor((Gvar.var_1462 + Gvar.var_1467) / 5) * 2;
                Gvar.var_1468 = 160 - Math.floor((Gvar.var_1463 + Gvar.var_1469) / 5) * 2;
            }
            if (Gvar.var_1465 == 3) {
                Gvar.var_1466 = Math.floor((Gvar.var_1462 + Gvar.var_1467) / 5) * 3;
                Gvar.var_1468 = 160 - Math.floor((Gvar.var_1463 + Gvar.var_1469) / 5) * 3;
            }
            if (Gvar.var_1465 == 4) {
                Gvar.var_1466 = Math.floor((Gvar.var_1462 + Gvar.var_1467) / 5) * 4;
                Gvar.var_1468 = 160 - Math.floor((Gvar.var_1463 + Gvar.var_1469) / 5) * 4;
            }
            if (Gvar.var_1465 >= 5) {
                Gvar.var_1466 = Gvar.var_1467;
                Gvar.var_1468 = Gvar.var_1469;
            }
            if (Gvar.var_1465 >= 5) {
                Adap.pos(Gvar.var_1466, Gvar.var_1468);
                if (Gvar.var_1464 == 0) {
                    Adap.gcopy(3, 1120, 440, 40, 40);
                }
                if (Gvar.var_1464 == 1) {
                    Adap.gcopy(3, 1120, 480, 40, 40);
                }
                if (Gvar.var_1464 == 2) {
                    Adap.gcopy(3, 1120, 520, 40, 40);
                }
                if (Gvar.var_1464 == 3) {
                    Adap.gcopy(3, 1120, 560, 40, 40);
                }
            }
            Adap.pos(Gvar.var_1466, Gvar.var_1468);
            if (Gvar.var_1464 == 0) {
                Adap.gcopy(3, 1040, 480, 40, 40);
            }
            if (Gvar.var_1464 == 1) {
                Adap.gcopy(3, 1080, 480, 40, 40);
            }
            if (Gvar.var_1464 == 2) {
                Adap.gcopy(3, 1040, 520, 40, 40);
            }
            if (Gvar.var_1464 == 3) {
                Adap.gcopy(3, 1080, 520, 40, 40);
            }
        }
        if (Gvar.var_1470 >= 1) {
            if (Gvar.var_1470 == 1) {
                Adap.pos(200, 150);
                Adap.color(0, 0, 0);
                Adap.gmode(4, null, null, 100);
                Adap.gcopy(3, 1560, 0, 40, 45); // "img_mychara.gif" の1行目の一番右側にあるディアボロの影(黒い丸)
                Adap.gmode(2, null, null, null);
                Adap.pos(200, 150);
                Adap.gcopy(3, 600, 240, 40, 40);
            }
            if (Gvar.var_1470 == 2) {
                Adap.pos(190, 150);
                Adap.color(0, 0, 0);
                Adap.gmode(4, null, null, 100);
                Adap.gcopy(3, 1560, 0, 40, 45); // "img_mychara.gif" の1行目の一番右側にあるディアボロの影(黒い丸)
                Adap.gmode(2, null, null, null);
                Adap.pos(190, 150);
                Adap.gcopy(3, 640, 240, 40, 40);
            }
            if (Gvar.var_1470 == 3) {
                Adap.pos(180, 150);
                Adap.color(0, 0, 0);
                Adap.gmode(4, null, null, 100);
                Adap.gcopy(3, 1560, 0, 40, 45); // "img_mychara.gif" の1行目の一番右側にあるディアボロの影(黒い丸)
                Adap.gmode(2, null, null, null);
                Adap.pos(180, 150);
                Adap.gcopy(3, 680, 240, 40, 40);
            }
            if (Gvar.var_1470 == 4) {
                Adap.pos(190, 150);
                Adap.color(0, 0, 0);
                Adap.gmode(4, null, null, 100);
                Adap.gcopy(3, 1560, 0, 40, 45); // "img_mychara.gif" の1行目の一番右側にあるディアボロの影(黒い丸)
                Adap.gmode(2, null, null, null);
                Adap.pos(190, 150);
                Adap.gcopy(3, 680, 240, 40, 40);
            }
            if (Gvar.var_1470 == 5) {
                Adap.pos(200, 150);
                Adap.color(0, 0, 0);
                Adap.gmode(4, null, null, 100);
                Adap.gcopy(3, 1560, 0, 40, 45); // "img_mychara.gif" の1行目の一番右側にあるディアボロの影(黒い丸)
                Adap.gmode(2, null, null, null);
                Adap.pos(200, 150);
                Adap.gcopy(3, 720, 240, 40, 40);
            }
            if (Gvar.var_1470 == 6) {
                Adap.pos(200, 150);
                Adap.color(0, 0, 0);
                Adap.gmode(4, null, null, 100);
                Adap.gcopy(3, 1560, 0, 40, 45); // "img_mychara.gif" の1行目の一番右側にあるディアボロの影(黒い丸)
                Adap.gmode(2, null, null, null);
                Adap.pos(200, 150);
                Adap.gcopy(3, 760, 240, 40, 40);
            }
            if (Gvar.var_1470 == 3) {
                Adap.gmode(2, null, null, null);
                Adap.pos(160, 130);
                Gvar.belongings_item_list = Gvar.var_1471;
                Gvar.var_1248 = Gvar.var_1249;
                await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            if (Gvar.var_1470 == 4) {
                Adap.color(0, 0, 0);
                Adap.gmode(4, null, null, 100);
                Adap.pos(160, 120);
                Gvar.belongings_item_list = Gvar.var_1471;
                Gvar.var_1248 = Gvar.var_1249;
                await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
        }
        if (Gvar.var_1472 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos(160, 150);
            if (Gvar.var_1472 <= 2) {
                Adap.gcopy(3, 880, 280, 40, 40);
            }
            if (Gvar.var_1472 >= 3) {
                Adap.gcopy(3, 920, 280, 40, 40);
            }
        }
        if (Gvar.var_1473 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos(160, 150);
            if (Gvar.var_1473 <= 2) {
                Adap.gcopy(3, 960, 280, 40, 40);
            }
            if (Gvar.var_1473 >= 3) {
                Adap.gcopy(3, 1000, 280, 40, 40);
            }
        }
        if (Gvar.var_1474 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos(160, 150);
            if (Gvar.var_1474 <= 2) {
                Adap.gcopy(3, 1040, 280, 40, 40);
            }
            if (Gvar.var_1474 >= 3) {
                Adap.gcopy(3, 1080, 280, 40, 40);
            }
        }
        if (Gvar.var_1475 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos(Gvar.var_1476, Gvar.var_1477 + 10);
            if (Gvar.var_1475 <= 2) {
                Adap.gcopy(3, 880, 280, 40, 40);
            }
            if (Gvar.var_1475 >= 3) {
                Adap.gcopy(3, 920, 280, 40, 40);
            }
        }
        if (Gvar.var_1478 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos(Gvar.var_1476 + 10, Gvar.var_1477);
            if (Gvar.var_1478 <= 2) {
                Adap.gcopy(3, 960, 280, 40, 40);
            }
            if (Gvar.var_1478 >= 3) {
                Adap.gcopy(3, 1000, 280, 40, 40);
            }
        }
        if (Gvar.var_1479 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos(Gvar.var_1476, Gvar.var_1477 + 10);
            if (Gvar.var_1479 <= 2) {
                Adap.gcopy(3, 1040, 280, 40, 40);
            }
            if (Gvar.var_1479 >= 3) {
                Adap.gcopy(3, 1080, 280, 40, 40);
            }
        }
        if (Gvar.var_1480 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos(95, 125);
            if (Gvar.var_1480 == 1) {
                Adap.gcopy(3, 640, 1080, 200, 120);
            }
            if (Gvar.var_1480 == 2) {
                Adap.gcopy(3, 840, 1080, 200, 120);
            }
            if (Gvar.var_1480 == 3) {
                Adap.gcopy(3, 640, 960, 200, 120);
            }
            if (Gvar.var_1480 == 4) {
                Adap.gcopy(3, 840, 960, 200, 120);
            }
            if (Gvar.var_1480 == 5) {
                Adap.gcopy(3, 640, 840, 200, 120);
            }
            if (Gvar.var_1480 == 6) {
                Adap.gcopy(3, 840, 840, 200, 120);
            }
            if (Gvar.var_1480 == 7) {
                Adap.gcopy(3, 640, 720, 200, 120);
            }
            if (Gvar.var_1480 == 8) {
                Adap.gcopy(3, 840, 720, 200, 120);
            }
            if (Gvar.var_1480 == 9) {
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 200);
                Adap.gcopy(3, 640, 720, 200, 120);
            }
            if (Gvar.var_1480 == 10) {
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 150);
                Adap.gcopy(3, 840, 720, 200, 120);
            }
            if (Gvar.var_1480 == 11) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
                Adap.gcopy(3, 640, 720, 200, 120);
            }
            if (Gvar.var_1480 == 12) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 50);
                Adap.gcopy(3, 840, 720, 200, 120);
            }
        }
        if (Gvar.var_1265 >= 1) {
            Adap.gmode(2, null, null, null);
            if (Gvar.var_784 == 0 || Gvar.var_784 == 2 || Gvar.var_784 == 4) {
                Adap.pos(160, 155);
            }
            if (Gvar.var_784 == 1 || Gvar.var_784 == 3 || Gvar.var_784 == 5) {
                Adap.pos(160, 157);
            }
            Adap.gcopy(3, 960, 400, 40, 40);
            if (Gvar.var_1265 >= 1 && Gvar.var_1265 < 30) {
                if (Gvar.var_784 == 0 || Gvar.var_784 == 2 || Gvar.var_784 == 4) {
                    Adap.pos(50, 20);
                }
                if (Gvar.var_784 == 1 || Gvar.var_784 == 3 || Gvar.var_784 == 5) {
                    Adap.pos(50, 23);
                }
                Adap.gmode(2, null, null, null);
                if (Gvar.var_1265 == 26) {
                    Adap.color(0, 0, 0);
            
                    Adap.gmode(4, null, null, 200);
                }
                if (Gvar.var_1265 == 27) {
                    Adap.color(0, 0, 0);
            
                    Adap.gmode(4, null, null, 150);
                }
                if (Gvar.var_1265 == 28) {
                    Adap.color(0, 0, 0);

                    Adap.gmode(4, null, null, 100);
                }
                if (Gvar.var_1265 == 29) {
                    Adap.color(0, 0, 0);
    
                    Adap.gmode(4, null, null, 50);
                }
                Adap.gcopy(17, 360, 550, 250, 145);
            }
        }
        if (Gvar.var_1481 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos(160, 140);
            if (Gvar.var_1481 == 1) {
                Adap.gcopy(3, 1160, 800, 50, 50);
            }
            if (Gvar.var_1481 == 2) {
                Adap.gcopy(3, 1210, 800, 50, 50);
            }
            if (Gvar.var_1481 == 3) {
                Adap.gcopy(3, 1260, 800, 50, 50);
            }
            if (Gvar.var_1481 == 4) {
                Adap.gcopy(3, 1310, 800, 50, 50);
            }
            if (Gvar.var_1481 == 5 || Gvar.var_1481 == 7 || Gvar.var_1481 == 9 || Gvar.var_1481 == 11 || Gvar.var_1481 == 13) {
                Adap.gcopy(3, 1360, 800, 50, 50);
            }
            if (Gvar.var_1481 == 6 || Gvar.var_1481 == 8 || Gvar.var_1481 == 10 || Gvar.var_1481 == 12 || Gvar.var_1481 == 14 || Gvar.var_1481 == 15) {
                Adap.gcopy(3, 1410, 800, 50, 50);
            }
            if (Gvar.var_1481 == 16 || Gvar.var_1481 == 17) {
                Adap.gcopy(3, 1460, 800, 50, 50);
            }
            if (Gvar.var_1481 == 18) {
                Adap.gcopy(3, 1510, 800, 50, 50);
            }
            if (Gvar.var_1481 == 19) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
                Adap.gcopy(3, 1510, 800, 50, 50);
            }
        }
        if (Gvar.var_1482 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos((Gvar.var_1396 - Gvar.var_66 + 4) * 40, (Gvar.var_1397 - Gvar.var_67 + 4) * 40 - 20);
            if (Gvar.var_1482 == 1) {
                Adap.gcopy(3, 1160, 800, 50, 50);
            }
            if (Gvar.var_1482 == 2) {
                Adap.gcopy(3, 1210, 800, 50, 50);
            }
            if (Gvar.var_1482 == 3) {
                Adap.gcopy(3, 1260, 800, 50, 50);
            }
            if (Gvar.var_1482 == 4) {
                Adap.gcopy(3, 1310, 800, 50, 50);
            }
            if (Gvar.var_1482 == 5 || Gvar.var_1482 == 7 || Gvar.var_1482 == 9 || Gvar.var_1482 == 11 || Gvar.var_1482 == 13) {
                Adap.gcopy(3, 1360, 800, 50, 50);
            }
            if (Gvar.var_1482 == 6 || Gvar.var_1482 == 8 || Gvar.var_1482 == 10 || Gvar.var_1482 == 12 || Gvar.var_1482 == 14 || Gvar.var_1482 == 15) {
                Adap.gcopy(3, 1410, 800, 50, 50);
            }
            if (Gvar.var_1482 == 16 || Gvar.var_1482 == 17) {
                Adap.gcopy(3, 1460, 800, 50, 50);
            }
            if (Gvar.var_1482 == 18) {
                Adap.gcopy(3, 1510, 800, 50, 50);
            }
            if (Gvar.var_1482 == 19) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
                Adap.gcopy(3, 1510, 800, 50, 50);
            }
        }
        if (Gvar.var_1483 >= 1) {
            Adap.gmode(2, null, null, null);
            Gvar.var_1484 = Gvar.var_1483;
            Gvar.var_1485 = 1;
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                if (Gvar.var_1485 == 1) {
                    Gvar.var_1486 = 300 - Gvar.var_1483 * 10;
                    if (Gvar.var_1486 < 160) {
                        Gvar.var_1486 = 160;
                    }
                    Gvar.var_1487 = 50 + Gvar.var_1483 * Gvar.var_1484;
                    if (Gvar.var_1487 >= 150) {
                        Gvar.var_1487 = 150;
                    }
                    Gvar.var_1488 = 120;
                }
                if (Gvar.var_1485 == 2) {
                    Gvar.var_1486 = 20 + Gvar.var_1483 * 10;
                    if (Gvar.var_1486 >= 160) {
                        Gvar.var_1486 = 160;
                    }
                    Gvar.var_1487 = 50 + Gvar.var_1483 * Gvar.var_1484;
                    if (Gvar.var_1487 >= 150) {
                        Gvar.var_1487 = 150;
                    }
                    Gvar.var_1488 = 360;
                }
                if (Gvar.var_1485 == 3) {
                    Gvar.var_1486 = 320 - Gvar.var_1483 * Gvar.var_1484;
                    if (Gvar.var_1486 < 160) {
                        Gvar.var_1486 = 160;
                    }
                    Gvar.var_1487 = 0 + Gvar.var_1483 * Gvar.var_1484 - 20;
                    if (Gvar.var_1487 >= 150) {
                        Gvar.var_1487 = 150;
                    }
                    Gvar.var_1488 = 480;
                }
                if (Gvar.var_1485 == 4) {
                    Gvar.var_1486 = 0 + Gvar.var_1483 * Gvar.var_1484;
                    if (Gvar.var_1486 >= 160) {
                        Gvar.var_1486 = 160;
                    }
                    Gvar.var_1487 = 0 + Gvar.var_1483 * Gvar.var_1484 - 20;
                    if (Gvar.var_1487 >= 150) {
                        Gvar.var_1487 = 150;
                    }
                    Gvar.var_1488 = 720;
                }
                if (Gvar.var_1485 == 5) {
                    Gvar.var_1486 = 160;
                    Gvar.var_1487 = 0 + Gvar.var_1483 * Gvar.var_1484 - 40;
                    if (Gvar.var_1487 >= 150) {
                        Gvar.var_1487 = 150;
                    }
                    Gvar.var_1488 = 40;
                }
                Adap.pos(Gvar.var_1486, Gvar.var_1487);
                Adap.gcopy(6, Gvar.var_1488, 1040, 40, 40);
                Gvar.var_1485++;
            }
        }
        if (Gvar.var_1489 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos(190, 120);
            Adap.gcopy(3, 600, 360, 40, 40);
        }
        if (Gvar.var_1490 >= 1) {
            Adap.pos(170, 0);
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1490 == 1) {
                Adap.gcopy(17, 360, 360, 120, 180);
            }
            if (Gvar.var_1490 == 2) {
                Adap.gcopy(17, 480, 360, 120, 180);
            }
            if (Gvar.var_1490 == 3) {
                Adap.gcopy(17, 600, 360, 120, 180);
            }
        }
        if (Gvar.var_1491 >= 1) {
            Gvar.var_1492 = Gvar.var_1491 % 2;
            if (Gvar.var_1492 == 0) {
                Adap.pos(60, 50);
            }
            if (Gvar.var_1492 == 1) {
                Adap.pos(60, 52);
            }
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1491 == 16) {
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 200);
            }
            if (Gvar.var_1491 == 17) {
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 150);
            }
            if (Gvar.var_1491 == 18) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
            }
            if (Gvar.var_1491 == 19) {
                Adap.color(0, 0, 0);
    
                Adap.gmode(4, null, null, 60);
            }
            if (Gvar.var_1491 == 20) {
                Adap.color(0, 0, 0);
    
                Adap.gmode(4, null, null, 30);
            }
            Adap.gcopy(17, 0, 710, 255, 112);
        }
        if (Gvar.var_1493 >= 1) {
            Gvar.var_1494 = Gvar.var_1493 % 2;
            if (Gvar.var_1494 == 0) {
                Adap.pos(190, 50);
            }
            if (Gvar.var_1494 == 1) {
                Adap.pos(190, 52);
            }
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1493 == 16) {
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 200);
            }
            if (Gvar.var_1493 == 17) {
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 150);
            }
            if (Gvar.var_1493 == 18) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
            }
            if (Gvar.var_1493 == 19) {
                Adap.color(0, 0, 0);
    
                Adap.gmode(4, null, null, 60);
            }
            if (Gvar.var_1493 == 20) {
                Adap.color(0, 0, 0);
    
                Adap.gmode(4, null, null, 30);
            }
            Adap.gcopy(17, 150, 850, 130, 150);
        }
        if (Gvar.var_531 >= 1) {
            Gvar.var_1494 = Gvar.var_531 % 2;
            if (Gvar.var_1494 == 0) {
                Adap.pos(200, 30);
            }
            if (Gvar.var_1494 == 1) {
                Adap.pos(200, 32);
            }
            Adap.gmode(2, null, null, null);
            if (Gvar.var_531 == 16) {
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 200);
            }
            if (Gvar.var_531 == 17) {
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 150);
            }
            if (Gvar.var_531 == 18) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
            }
            if (Gvar.var_531 == 19) {
                Adap.color(0, 0, 0);
    
                Adap.gmode(4, null, null, 60);
            }
            if (Gvar.var_531 == 20) {
                Adap.color(0, 0, 0);
    
                Adap.gmode(4, null, null, 30);
            }
            Adap.gcopy(17, 150, 1000, 130, 150);
        }
        if (Gvar.var_1495 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos(160, 150);
            if (Gvar.var_1495 >= 1 && Gvar.var_1495 < 3) {
                Adap.gcopy(14, 40, 0, 40, 40);
            }
            if (Gvar.var_1495 >= 3 && Gvar.var_1495 < 5) {
                Adap.gcopy(14, 80, 0, 40, 40);
            }
            if (Gvar.var_1495 >= 5 && Gvar.var_1495 < 10) {
                Adap.gcopy(14, 120, 0, 40, 40);
            }
            if (Gvar.var_1495 >= 10 && Gvar.var_1495 < 12) {
                Adap.gcopy(14, 80, 0, 40, 40);
            }
            if (Gvar.var_1495 >= 12 && Gvar.var_1495 < 14) {
                Adap.gcopy(14, 40, 0, 40, 40);
            }
        }
        if (Gvar.var_1496 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos(160, 140);
            if (Gvar.var_1496 == 1) {
                Adap.gcopy(34, 800, 1240, 40, 40);
            }
            if (Gvar.var_1496 == 2) {
                Adap.gcopy(34, 840, 1240, 40, 40);
            }
            if (Gvar.var_1496 == 3) {
                Adap.gcopy(34, 880, 1240, 40, 40);
            }
            if (Gvar.var_1496 == 4) {
                Adap.gcopy(34, 920, 1240, 40, 40);
            }
            if (Gvar.var_1496 == 5) {
                Adap.gcopy(34, 960, 1240, 40, 40);
            }
            if (Gvar.var_1496 == 6) {
                Adap.gcopy(34, 1000, 1240, 40, 40);
            }
            if (Gvar.var_1496 >= 7 && Gvar.var_1496 <= 10) {
                Adap.gcopy(34, 1040, 1240, 40, 40);
            }
            if (Gvar.var_1496 == 11) {
                Adap.gcopy(34, 1080, 1240, 40, 40);
            }
            if (Gvar.var_1496 == 12) {
                Adap.gcopy(34, 1120, 1240, 40, 40);
            }
            if (Gvar.var_1496 == 13) {
                Adap.gcopy(34, 1160, 1240, 40, 40);
            }
            if (Gvar.var_1496 == 14) {
                Adap.gcopy(34, 1200, 1240, 40, 40);
            }
            if (Gvar.var_1496 == 15) {
                Adap.gcopy(34, 1240, 1240, 40, 40);
            }
            if (Gvar.var_1496 == 16) {
                Adap.gcopy(34, 1280, 1240, 40, 40);
            }
            if (Gvar.var_1496 == 17) {
                Adap.gcopy(34, 1320, 1240, 40, 40);
            }
            if (Gvar.var_1496 >= 18) {
                Adap.gcopy(34, 1360, 1240, 40, 40);
            }
        }
        if (Gvar.var_1497 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos(160, 150);
            Adap.gcopy(3, 120, 120, 40, 40);
        }
        if (Gvar.var_1498 >= 1) {
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1498 == 1) {
                Adap.pos(160, 150);
            }
            if (Gvar.var_1498 == 2) {
                Adap.pos(160, 152);
            }
            Adap.gcopy(3, 840, 120, 40, 40);
        }
        if (Gvar.var_364 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos(160, 160);
            Adap.gcopy(3, 200, 360, 40, 40);
        }
        if (Gvar.var_1499 >= 4 && Gvar.var_1499 <= 9) {
            Adap.pos(160, 150);
            if (Gvar.var_1499 == 4) {
                Adap.gmode(2, null, null, null);
            }
            if (Gvar.var_1499 == 5) {
                Adap.gmode(2, null, null, null);
            }
            if (Gvar.var_1499 == 6) {
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 200);
            }
            if (Gvar.var_1499 == 7) {
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 150);
            }
            if (Gvar.var_1499 == 8) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
            }
            if (Gvar.var_1499 == 9) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 50);
            }
            Adap.gcopy(3, 1040, 120, 40, 40);
        }
        if (Gvar.var_1500 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos((Gvar.var_1437 - Gvar.var_66 + 4) * 40 - 5, (Gvar.var_1438 - Gvar.var_67 + 4) * 40 - 50);
            if (Gvar.var_1500 == 1) {
                Adap.gcopy(17, 760, 880, 40, 80);
            }
            if (Gvar.var_1500 == 2) {
                Adap.gcopy(17, 800, 880, 40, 80);
            }
            if (Gvar.var_1500 == 3) {
                Adap.gcopy(17, 840, 880, 40, 80);
            }
            if (Gvar.var_1500 == 4) {
                Adap.gcopy(17, 880, 880, 40, 80);
            }
            if (Gvar.var_1500 >= 5) {
                Adap.pos((Gvar.var_1437 - Gvar.var_66 + 4) * 40 + 2, (Gvar.var_1438 - Gvar.var_67 + 4) * 40 - 50);
                Adap.gcopy(17, 920, 880, 40, 80);
                if (Gvar.var_1500 == 5) {
                    Adap.gcopy(34, 680, 160, 40, 40);
                }
            }
        }
        if (Gvar.var_1501 >= 1) {
            if (Gvar.var_1501 <= 62) {
                Gvar.var_1502 = Gvar.var_1501 % 13;
                Adap.color(230, 230, 230);
                if (Gvar.var_1502 == 0 || Gvar.var_1502 == 1 || Gvar.var_1502 == 2 || Gvar.var_1502 == 3) {
                    Adap.line((Gvar.var_1437 - Gvar.var_66 + 4) * 40 - 18 + 40, (Gvar.var_1438 - Gvar.var_67 + 4) * 40 - 10 - 40, (Gvar.var_1437 - Gvar.var_66 + 4) * 40 - 18 - 40 + 40, (Gvar.var_1438 - Gvar.var_67 + 4) * 40 - 10 + 280);
                }
                if (Gvar.var_1502 == 4 || Gvar.var_1502 == 13) {
                    Adap.line((Gvar.var_1437 - Gvar.var_66 + 4) * 40 - 18 + 40, (Gvar.var_1438 - Gvar.var_67 + 4) * 40 - 10 - 40, (Gvar.var_1437 - Gvar.var_66 + 4) * 40 - 18 - 20 + 40, (Gvar.var_1438 - Gvar.var_67 + 4) * 40 - 10 + 280);
                }
                if (Gvar.var_1502 == 5 || Gvar.var_1502 == 12) {
                    Adap.line((Gvar.var_1437 - Gvar.var_66 + 4) * 40 - 18 + 40, (Gvar.var_1438 - Gvar.var_67 + 4) * 40 - 10 - 40, (Gvar.var_1437 - Gvar.var_66 + 4) * 40 - 18 + 40, (Gvar.var_1438 - Gvar.var_67 + 4) * 40 - 10 + 280);
                }
                if (Gvar.var_1502 == 6 || Gvar.var_1502 == 11) {
                    Adap.line((Gvar.var_1437 - Gvar.var_66 + 4) * 40 - 18 + 40, (Gvar.var_1438 - Gvar.var_67 + 4) * 40 - 10 - 40, (Gvar.var_1437 - Gvar.var_66 + 4) * 40 - 18 + 20 + 40, (Gvar.var_1438 - Gvar.var_67 + 4) * 40 - 10 + 280);
                }
                if (Gvar.var_1502 == 7 || Gvar.var_1502 == 8 || Gvar.var_1502 == 9 || Gvar.var_1502 == 10) {
                    Adap.line((Gvar.var_1437 - Gvar.var_66 + 4) * 40 - 18 + 40, (Gvar.var_1438 - Gvar.var_67 + 4) * 40 - 10 - 40, (Gvar.var_1437 - Gvar.var_66 + 4) * 40 - 18 + 40 + 40, (Gvar.var_1438 - Gvar.var_67 + 4) * 40 - 10 + 280);
                }
            }
            if (Gvar.var_1501 >= 100) {
                Gvar.var_1503 = (Gvar.var_1437 - Gvar.var_66 + 4) * 40;
                Gvar.var_1504 = (Gvar.var_1438 - Gvar.var_67 + 4) * 40;
                if (Gvar.var_1501 == 100) {
                    Gvar.var_1503 = Gvar.var_1503;
                    Gvar.var_1504 = Gvar.var_1504 + 80;
                }
                if (Gvar.var_1501 == 101) {
                    Gvar.var_1503 = Gvar.var_1503;
                    Gvar.var_1504 = Gvar.var_1504 + 40;
                }
                if (Gvar.var_1501 == 102) {
                    Gvar.var_1503 = Gvar.var_1503;
                    Gvar.var_1504 = Gvar.var_1504;
                }
                Adap.color(230, 230, 230);
                Adap.line((Gvar.var_1437 - Gvar.var_66 + 4) * 40 - 18 + 40, (Gvar.var_1438 - Gvar.var_67 + 4) * 40 - 10 - 40, Gvar.var_1503 + 20, Gvar.var_1504);
                Adap.gmode(2, null, null, null);
                Adap.pos(Gvar.var_1503, Gvar.var_1504);
                Adap.gcopy(34, 680, 160, 40, 40);
            }
            if (Gvar.var_1501 >= 63 && Gvar.var_1501 < 100) {
                if (Gvar.var_1505 <= 2) {
                    Gvar.var_1506 = Gvar.var_83[Gvar.var_1385].Var0;
                    if (Gvar.var_83[Gvar.var_1385].Var0 == 97 && Gvar.var_83[Gvar.var_1385].Var31 >= 11) {
                        Gvar.var_1506 = Gvar.var_83[Gvar.var_1385].Var31;
                        Gvar.var_1386 = Gvar.var_83[Gvar.var_1385].Var31;
                    }
                    if (Gvar.var_1506 < 50) {
                        Gvar.var_1375 = 6; // Adap.buffer(6)は"img_enemy1a.gif"
                        Gvar.var_1376 = Gvar.var_1386;
                    }
                    if (Gvar.var_1506 >= 50 && Gvar.var_1506 < 100) {
                        Gvar.var_1375 = 21; // Adap.buffer(21)は"img_enemy2a.gif"
                        Gvar.var_1376 = Gvar.var_1386 - 50;
                    }
                    if (Gvar.var_1506 >= 100 && Gvar.var_1506 < 150) {
                        Gvar.var_1375 = 27; // Adap.buffer(27)は"img_enemy3a.gif"
                        Gvar.var_1376 = Gvar.var_1386 - 100;
                    }
                    if (Gvar.var_1506 >= 150 && Gvar.var_1506 < 200) {
                        Gvar.var_1375 = 13; // Adap.buffer(13)は"img_enemy4a.gif"
                        Gvar.var_1376 = Gvar.var_1386 - 150; // ロッコ・バロッコ所長はGvar.enemy_list = 173。173 - 150 = 23。23 * 40 = 920となり、Y軸920で合致する。
                    }
                }
                Gvar.var_1503 = (Gvar.var_1437 - Gvar.var_66 + 4) * 40;
                Gvar.var_1504 = (Gvar.var_1438 - Gvar.var_67 + 4) * 40;
                Gvar.var_1503 = Gvar.var_1503;
                Gvar.var_1504 = Gvar.var_1504;
                if (Gvar.var_1501 == 61) {
                    Gvar.var_1503 = Gvar.var_1503 + 160;
                    Gvar.var_1504 = Gvar.var_1504 + 240;
                }
                if (Gvar.var_1501 == 62) {
                    Gvar.var_1503 = Gvar.var_1503 + 130;
                    Gvar.var_1504 = Gvar.var_1504 + 200;
                }
                if (Gvar.var_1501 == 63) {
                    Gvar.var_1503 = Gvar.var_1503 + 100;
                    Gvar.var_1504 = Gvar.var_1504 + 160;
                }
                if (Gvar.var_1501 == 64) {
                    Gvar.var_1503 = Gvar.var_1503 + 70;
                    Gvar.var_1504 = Gvar.var_1504 + 120;
                }
                if (Gvar.var_1501 == 65) {
                    Gvar.var_1503 = Gvar.var_1503 + 40;
                    Gvar.var_1504 = Gvar.var_1504 + 100;
                }
                if (Gvar.var_1501 == 66) {
                    Gvar.var_1503 = Gvar.var_1503 + 10;
                    Gvar.var_1504 = Gvar.var_1504 + 80;
                }
                if (Gvar.var_1501 == 67) {
                    Gvar.var_1503 = Gvar.var_1503 - 10;
                    Gvar.var_1504 = Gvar.var_1504 + 60;
                }
                if (Gvar.var_1501 == 68) {
                    Gvar.var_1503 = Gvar.var_1503 - 30;
                    Gvar.var_1504 = Gvar.var_1504 + 40;
                }
                if (Gvar.var_1501 == 69) {
                    Gvar.var_1503 = Gvar.var_1503 - 50;
                    Gvar.var_1504 = Gvar.var_1504 + 20;
                }
                if (Gvar.var_1501 == 70) {
                    Gvar.var_1503 = Gvar.var_1503 - 70;
                    Gvar.var_1504 = Gvar.var_1504;
                }
                if (Gvar.var_1501 == 71) {
                    Gvar.var_1503 = Gvar.var_1503 - 90;
                    Gvar.var_1504 = Gvar.var_1504 - 20;
                }
                if (Gvar.var_1501 == 72) {
                    Gvar.var_1503 = Gvar.var_1503 - 100;
                    Gvar.var_1504 = Gvar.var_1504 - 40;
                }
                if (Gvar.var_1501 == 73) {
                    Gvar.var_1503 = Gvar.var_1503 - 80;
                    Gvar.var_1504 = Gvar.var_1504 - 60;
                }
                if (Gvar.var_1501 == 74) {
                    Gvar.var_1503 = Gvar.var_1503 - 60;
                    Gvar.var_1504 = Gvar.var_1504 - 70;
                }
                if (Gvar.var_1501 == 75) {
                    Gvar.var_1503 = Gvar.var_1503 - 40;
                    Gvar.var_1504 = Gvar.var_1504 - 75;
                }
                if (Gvar.var_1501 == 76) {
                    Gvar.var_1503 = Gvar.var_1503 - 30;
                    Gvar.var_1504 = Gvar.var_1504 - 72;
                }
                if (Gvar.var_1501 == 77) {
                    Gvar.var_1503 = Gvar.var_1503 - 25;
                    Gvar.var_1504 = Gvar.var_1504 - 70;
                }
                if (Gvar.var_1501 == 78) {
                    Gvar.var_1503 = Gvar.var_1503 - 21;
                    Gvar.var_1504 = Gvar.var_1504 - 72;
                }
                if (Gvar.var_1501 == 79) {
                    Gvar.var_1503 = Gvar.var_1503 - 15;
                    Gvar.var_1504 = Gvar.var_1504 - 75;
                }
                if (Gvar.var_1501 == 80) {
                    Gvar.var_1503 = Gvar.var_1503 - 10;
                    Gvar.var_1504 = Gvar.var_1504 - 70;
                }
                if (Gvar.var_1501 == 81) {
                    Gvar.var_1503 = Gvar.var_1503 - 6;
                    Gvar.var_1504 = Gvar.var_1504 - 60;
                }
                if (Gvar.var_1501 == 82) {
                    Gvar.var_1503 = Gvar.var_1503 - 3;
                    Gvar.var_1504 = Gvar.var_1504 - 40;
                }
                Adap.color(230, 230, 230);
                Adap.line((Gvar.var_1437 - Gvar.var_66 + 4) * 40 - 18 + 40, (Gvar.var_1438 - Gvar.var_67 + 4) * 40 - 10 - 40, Gvar.var_1503 + 20, Gvar.var_1504 + 20);
                Adap.pos(Gvar.var_1503, Gvar.var_1504);
                if (Gvar.var_1505 <= 2) {
                    if (Gvar.var_83[Gvar.var_1385].Var30 != 0) {
                        Adap.color(0, 0, 0);
                
                        Adap.gmode(4, null, null, 150);
                    }
                    Adap.gcopy(Gvar.var_1375, 960, Gvar.var_1376 * 40, 40, 40);
                    Adap.gmode(2, null, null, null);
                }
                if (Gvar.var_1505 == 3) {
                    Gvar.belongings_item_list = Gvar.var_1386;
                    Gvar.var_1248 = Gvar.var_1249;
                    await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
                }
            }
            if (Gvar.var_1501 < 61) {
                Gvar.var_1507 = Gvar.var_1501 % 2;
                if (Gvar.var_1507 == 0) {
                    Adap.pos((Gvar.var_1508 - Gvar.var_66 + 4) * 40, (Gvar.var_1509 - Gvar.var_67 + 4) * 40 - 10);
                }
                if (Gvar.var_1507 == 1) {
                    Adap.pos((Gvar.var_1508 - Gvar.var_66 + 4) * 40, (Gvar.var_1509 - Gvar.var_67 + 4) * 40 - 10 - 2);
                }
                Adap.gcopy(34, 640, 160, 40, 40);
            }
        }
        if (Gvar.var_1510 >= 1) {
            Gvar.var_1503 = (14 - Gvar.var_66 + 4) * 40;
            Gvar.var_1504 = (8 - Gvar.var_67 + 4) * 40;
            if (Gvar.var_1510 == 1) {
                Gvar.var_1503 = Gvar.var_1503;
                Gvar.var_1504 = Gvar.var_1504 - 240;
            }
            if (Gvar.var_1510 == 2) {
                Gvar.var_1503 = Gvar.var_1503;
                Gvar.var_1504 = Gvar.var_1504 - 200;
            }
            if (Gvar.var_1510 == 3) {
                Gvar.var_1503 = Gvar.var_1503;
                Gvar.var_1504 = Gvar.var_1504 - 160;
            }
            if (Gvar.var_1510 == 4) {
                Gvar.var_1503 = Gvar.var_1503;
                Gvar.var_1504 = Gvar.var_1504 - 120;
            }
            if (Gvar.var_1510 == 5) {
                Gvar.var_1503 = Gvar.var_1503;
                Gvar.var_1504 = Gvar.var_1504 - 100;
            }
            if (Gvar.var_1510 == 6) {
                Gvar.var_1503 = Gvar.var_1503;
                Gvar.var_1504 = Gvar.var_1504 - 80;
            }
            if (Gvar.var_1510 == 7) {
                Gvar.var_1503 = Gvar.var_1503;
                Gvar.var_1504 = Gvar.var_1504 - 60;
            }
            if (Gvar.var_1510 == 8) {
                Gvar.var_1503 = Gvar.var_1503;
                Gvar.var_1504 = Gvar.var_1504 - 40;
            }
            if (Gvar.var_1510 == 9) {
                Gvar.var_1503 = Gvar.var_1503;
                Gvar.var_1504 = Gvar.var_1504 - 20;
            }
            if (Gvar.var_1510 == 10) {
                Gvar.var_1503 = Gvar.var_1503;
                Gvar.var_1504 = Gvar.var_1504;
            }
            Adap.gmode(2, null, null, null);
            Adap.pos(Gvar.var_1503, Gvar.var_1504);
            Gvar.belongings_item_list = Gvar.var_1386;
            Gvar.var_1248 = Gvar.var_1249;
            await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
        }
        if (Gvar.var_1511 >= 1) {
            Gvar.var_1503 = (Gvar.var_1512 - Gvar.var_66 + 4) * 40;
            Gvar.var_1504 = (Gvar.var_1513 - Gvar.var_67 + 4) * 40;
            if (Gvar.var_1511 == 1) {
                Gvar.var_1503 = Gvar.var_1503;
                Gvar.var_1504 = Gvar.var_1504 - 240;
            }
            if (Gvar.var_1511 == 2) {
                Gvar.var_1503 = Gvar.var_1503;
                Gvar.var_1504 = Gvar.var_1504 - 200;
            }
            if (Gvar.var_1511 == 3) {
                Gvar.var_1503 = Gvar.var_1503;
                Gvar.var_1504 = Gvar.var_1504 - 160;
            }
            if (Gvar.var_1511 == 4) {
                Gvar.var_1503 = Gvar.var_1503;
                Gvar.var_1504 = Gvar.var_1504 - 120;
            }
            if (Gvar.var_1511 == 5) {
                Gvar.var_1503 = Gvar.var_1503;
                Gvar.var_1504 = Gvar.var_1504 - 100;
            }
            if (Gvar.var_1511 == 6) {
                Gvar.var_1503 = Gvar.var_1503;
                Gvar.var_1504 = Gvar.var_1504 - 80;
            }
            if (Gvar.var_1511 == 7) {
                Gvar.var_1503 = Gvar.var_1503;
                Gvar.var_1504 = Gvar.var_1504 - 60;
            }
            if (Gvar.var_1511 == 8) {
                Gvar.var_1503 = Gvar.var_1503;
                Gvar.var_1504 = Gvar.var_1504 - 40;
            }
            if (Gvar.var_1511 == 9) {
                Gvar.var_1503 = Gvar.var_1503;
                Gvar.var_1504 = Gvar.var_1504 - 20;
            }
            if (Gvar.var_1511 == 10) {
                Gvar.var_1503 = Gvar.var_1503;
                Gvar.var_1504 = Gvar.var_1504;
            }
            Adap.gmode(2, null, null, null);
            Adap.pos(Gvar.var_1503, Gvar.var_1504);
            Gvar.belongings_item_list = Gvar.var_1386;
            Gvar.var_1248 = Gvar.var_1249;
            await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
        }
        if (Gvar.var_1514 >= 1) {
            if (Gvar.var_1514 == 0 || Gvar.var_1514 == 2 || Gvar.var_1514 == 4 || Gvar.var_1514 == 6 || Gvar.var_1514 == 8) {
                Adap.pos(160 + 5, 130);
            }
            if (Gvar.var_1514 == 1 || Gvar.var_1514 == 3 || Gvar.var_1514 == 5 || Gvar.var_1514 == 7 || Gvar.var_1514 == 9) {
                Adap.pos(160, 130);
            }
            Adap.gmode(2, null, null, null);
            Adap.gcopy(3, 840, 80, 40, 40);
        }
        if (Gvar.var_1515 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos(160, 150);
            if (Gvar.var_1515 == 0 || Gvar.var_1515 == 2 || Gvar.var_1515 == 4 || Gvar.var_1515 == 6 || Gvar.var_1515 == 8) {
                Adap.gcopy(3, 800, 160, 40, 40);
            }
            if (Gvar.var_1515 == 1 || Gvar.var_1515 == 3 || Gvar.var_1515 == 5 || Gvar.var_1515 == 7 || Gvar.var_1515 == 9) {
                Adap.gcopy(3, 800, 120, 40, 40);
            }
        }
        if (Gvar.var_1224 >= 1) {
            if (Gvar.var_1225 == 0 && Gvar.var_1224 != 10 && Gvar.var_1224 != 11) {
                Gvar.var_1516 = Adap.rnd(8);
                if (Gvar.var_1516 == 0) {
                    Gvar.var_1224 = 4;
                    Gvar.var_1517 = 680;
                    Gvar.var_1518 = Adap.rnd(280);
                }
                if (Gvar.var_1516 == 1) {
                    Gvar.var_1224 = 6;
                    Gvar.var_1517 = 0;
                    Gvar.var_1518 = Adap.rnd(280);
                }
                if (Gvar.var_1516 == 2) {
                    Gvar.var_1224 = 2;
                    Gvar.var_1517 = Adap.rnd(300);
                    Gvar.var_1518 = 0;
                }
                if (Gvar.var_1516 == 3) {
                    Gvar.var_1224 = 8;
                    Gvar.var_1517 = Adap.rnd(300);
                    Gvar.var_1518 = 680;
                }
                if (Gvar.var_1516 == 4) {
                    Gvar.var_1224 = 1;
                    Gvar.var_1517 = Adap.rnd(200);
                    Gvar.var_1517 = Gvar.var_1517 + 100;
                    Gvar.var_1518 = 0;
                }
                if (Gvar.var_1516 == 5) {
                    Gvar.var_1224 = 3;
                    Gvar.var_1517 = Adap.rnd(300);
                    Gvar.var_1517 = Gvar.var_1517 - 100;
                    Gvar.var_1518 = 0;
                }
                if (Gvar.var_1516 == 6) {
                    Gvar.var_1224 = 7;
                    Gvar.var_1517 = Adap.rnd(200);
                    Gvar.var_1517 = Gvar.var_1517 + 100;
                    Gvar.var_1518 = 680;
                }
                if (Gvar.var_1516 == 7) {
                    Gvar.var_1224 = 9;
                    Gvar.var_1517 = Adap.rnd(300);
                    Gvar.var_1517 = Gvar.var_1517 - 100;
                    Gvar.var_1518 = 680;
                }
            }
            if (Gvar.var_1224 == 4 || Gvar.var_1224 == 10) {
                Gvar.var_1517 = Gvar.var_1517 - 40;
                Gvar.var_1518 = Gvar.var_1518 + 0;
            }
            if (Gvar.var_1224 == 6) {
                Gvar.var_1517 = Gvar.var_1517 + 40;
                Gvar.var_1518 = Gvar.var_1518 + 0;
            }
            if (Gvar.var_1224 == 2) {
                Gvar.var_1517 = Gvar.var_1517 + 0;
                Gvar.var_1518 = Gvar.var_1518 + 40;
            }
            if (Gvar.var_1224 == 8) {
                Gvar.var_1517 = Gvar.var_1517 + 0;
                Gvar.var_1518 = Gvar.var_1518 - 40;
            }
            if (Gvar.var_1224 == 1) {
                Gvar.var_1517 = Gvar.var_1517 - 40;
                Gvar.var_1518 = Gvar.var_1518 + 40;
            }
            if (Gvar.var_1224 == 3) {
                Gvar.var_1517 = Gvar.var_1517 + 40;
                Gvar.var_1518 = Gvar.var_1518 + 40;
            }
            if (Gvar.var_1224 == 7) {
                Gvar.var_1517 = Gvar.var_1517 - 40;
                Gvar.var_1518 = Gvar.var_1518 - 40;
            }
            if (Gvar.var_1224 == 9) {
                Gvar.var_1517 = Gvar.var_1517 + 40;
                Gvar.var_1518 = Gvar.var_1518 - 40;
            }
            if (Gvar.var_1225 <= 9) {
                if (Gvar.var_1224 == 10 && Gvar.var_1225 >= 5) {
                    return;
                }
                Adap.pos(Gvar.var_1517, Gvar.var_1518);
                if (Gvar.var_1224 == 4 || Gvar.var_1224 == 10) {
                    Adap.gcopy(6, 120, 1920, 40, 40);
                    Adap.pos(Gvar.var_1517 - 20, Gvar.var_1518 + 20);
                }
                if (Gvar.var_1224 == 6) {
                    Adap.gcopy(6, 360, 1920, 40, 40);
                    Adap.pos(Gvar.var_1517 + 20, Gvar.var_1518 + 20);
                }
                if (Gvar.var_1224 == 2) {
                    Adap.gcopy(6, 40, 1920, 40, 40);
                    Adap.pos(Gvar.var_1517, Gvar.var_1518 + 20);
                }
                if (Gvar.var_1224 == 8) {
                    Adap.gcopy(6, 320, 1920, 40, 40);
                    Adap.pos(Gvar.var_1517, Gvar.var_1518 - 60);
                }
                if (Gvar.var_1224 == 1) {
                    Adap.gcopy(6, 480, 1920, 40, 40);
                    Adap.pos(Gvar.var_1517 - 20, Gvar.var_1518 + 20);
                }
                if (Gvar.var_1224 == 3) {
                    Adap.gcopy(6, 720, 1920, 40, 40);
                    Adap.pos(Gvar.var_1517 + 20, Gvar.var_1518 + 20);
                }
                if (Gvar.var_1224 == 7) {
                    Adap.gcopy(6, 600, 1920, 40, 40);
                    Adap.pos(Gvar.var_1517 - 20, Gvar.var_1518 - 60);
                }
                if (Gvar.var_1224 == 9) {
                    Adap.gcopy(6, 840, 1920, 40, 40);
                    Adap.pos(Gvar.var_1517 + 20, Gvar.var_1518 - 60);
                }
                if (Gvar.var_1224 < 10) {
                    if (Gvar.var_1153 == 0 || Gvar.var_1153 == 4 || Gvar.var_1153 == 8) {
                        Adap.gcopy(3, 1000, 160, 40, 40);
                    }
                    if (Gvar.var_1153 == 1 || Gvar.var_1153 == 5 || Gvar.var_1153 == 9) {
                        Adap.gcopy(3, 1040, 160, 40, 40);
                    }
                    if (Gvar.var_1153 == 2 || Gvar.var_1153 == 6 || Gvar.var_1153 == 10) {
                        Adap.gcopy(3, 1080, 160, 40, 40);
                    }
                    if (Gvar.var_1153 == 3 || Gvar.var_1153 == 7 || Gvar.var_1153 == 11) {
                        Adap.gcopy(3, 1120, 160, 40, 40);
                    }
                }
            }
        }
        if (Gvar.var_1519 >= 1) {
            Adap.pos((Gvar.var_347 - Gvar.var_66 + 4) * 40, (Gvar.var_348 - Gvar.var_67 + 4) * 40 - 10);
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1519 >= 0 && Gvar.var_1519 < 1) {
                Adap.gcopy(14, 40, 160, 40, 40);
            }
            if (Gvar.var_1519 >= 1 && Gvar.var_1519 < 2) {
                Adap.gcopy(14, 80, 160, 40, 40);
            }
            if (Gvar.var_1519 >= 2 && Gvar.var_1519 < 3) {
                Adap.gcopy(14, 120, 160, 40, 40);
            }
            if (Gvar.var_1519 >= 3 && Gvar.var_1519 < 4) {
                Adap.gcopy(14, 122, 160, 38, 40);
            }
            if (Gvar.var_1519 >= 4 && Gvar.var_1519 < 5) {
                Adap.gcopy(14, 120, 160, 40, 40);
            }
            if (Gvar.var_1519 >= 5 && Gvar.var_1519 < 8) {
                Adap.gcopy(14, 122, 160, 38, 40);
            }
            if (Gvar.var_1519 >= 8 && Gvar.var_1519 < 9) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
                Adap.gcopy(14, 120, 160, 40, 40);
            }
            if (Gvar.var_1519 >= 9 && Gvar.var_1519 < 11) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 50);
                Adap.gcopy(14, 120, 160, 40, 40);
            }
        }
        if (Gvar.var_1520 >= 10) {
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1520 == 19) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 230);
            }
            if (Gvar.var_1520 == 20) {
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 200);
            }
            if (Gvar.var_1520 == 21) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 160);
            }
            if (Gvar.var_1520 == 22) {
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 120);
            }
            if (Gvar.var_1520 == 23) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 80);
            }
            if (Gvar.var_1520 == 24) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 50);
            }
            if (Gvar.var_1520 == 25) {
                Adap.color(0, 0, 0);
    
                Adap.gmode(4, null, null, 30);
            }
            if (Gvar.var_1520 == 26) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 10);
            }
            Adap.pos(160, 160 - (Gvar.var_1520 - 2) * 5);
            Adap.gcopy(Gvar.bufferid_stand_disc, 1080, 160, 40, 40);
            Adap.pos(160, 160 + (Gvar.var_1520 - 4) * 5);
            Adap.gcopy(Gvar.bufferid_stand_disc, 1080, 160, 40, 40);
            Adap.pos(160 - (Gvar.var_1520 - 3) * 5, 160);
            Adap.gcopy(Gvar.bufferid_stand_disc, 1080, 160, 40, 40);
            Adap.pos(160 + (Gvar.var_1520 - 2) * 5, 160);
            Adap.gcopy(Gvar.bufferid_stand_disc, 1080, 160, 40, 40);
            Adap.pos(160 - (Gvar.var_1520 - 3) * 5, 160 - (Gvar.var_1520 - 3) * 5);
            Adap.gcopy(Gvar.bufferid_stand_disc, 1080, 160, 40, 40);
            Adap.pos(160 + (Gvar.var_1520 - 1) * 5, 160 - (Gvar.var_1520 - 1) * 5);
            Adap.gcopy(Gvar.bufferid_stand_disc, 1080, 160, 40, 40);
            Adap.pos(160 - (Gvar.var_1520 - 4) * 5, 160 + (Gvar.var_1520 - 4) * 5);
            Adap.gcopy(Gvar.bufferid_stand_disc, 1080, 160, 40, 40);
            Adap.pos(160 + (Gvar.var_1520 - 3) * 5, 160 + (Gvar.var_1520 - 3) * 5);
            Adap.gcopy(Gvar.bufferid_stand_disc, 1080, 160, 40, 40);
        }
        if (Gvar.var_1521 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos((Gvar.var_1396 - Gvar.var_66 + 4) * 40, (Gvar.var_1397 - Gvar.var_67 + 4) * 40);
            if (Gvar.var_862[Gvar.var_1522][0] == 0 && Gvar.dungeon_number >= 2) {
                Gvar.var_1523 = 0;
            }
            if (Gvar.var_862[Gvar.var_1522][0] == 1 && Gvar.dungeon_number >= 2) {
                Gvar.var_1523 = 1;
            }
            // No = 1 なので、ホテルの外
            if (Gvar.dungeon_number == 1 || Gvar.var_262 == 1) { // Gvar.var_262 == 1 なので、Gvar.dungeon_number = 0 であれば
                Gvar.var_1523 = 1;
            }
            if (Gvar.var_1522 >= 801 && Gvar.var_1522 <= 804) {
                Gvar.var_1523 = 1;
            }
            if (Gvar.var_1521 == 1 || Gvar.var_1521 == 2) {
                if (Gvar.var_1523 == 0) {
                    Adap.gcopy(9, 360, 280, 40, 40);
                }
                if (Gvar.var_1523 == 1) {
                    if (Gvar.var_1522 == 800) {
                        Adap.gcopy(9, 760, 280, 40, 40);
                    }
                    if (Gvar.var_1522 == 801) {
                        Adap.gcopy(9, 520, 280, 40, 40);
                    }
                    if (Gvar.var_1522 == 804) {
                        Adap.gcopy(9, 560, 280, 40, 40);
                    }
                    if (Gvar.var_1522 == 802) {
                        Adap.gcopy(9, 600, 280, 40, 40);
                    }
                    if (Gvar.var_1522 == 803) {
                        Adap.gcopy(9, 640, 280, 40, 40);
                    }
                    if (Gvar.var_1522 == 815) {
                        Adap.gcopy(9, 40, 280, 40, 40);
                    }
                    if (Gvar.var_1522 == 808) {
                        Adap.gcopy(9, 80, 280, 40, 40);
                    }
                    if (Gvar.var_1522 == 805) {
                        Adap.gcopy(9, 120, 280, 40, 40);
                    }
                    if (Gvar.var_1522 == 807) {
                        Adap.gcopy(9, 160, 280, 40, 40);
                    }
                    if (Gvar.var_1522 == 806) {
                        Adap.gcopy(9, 200, 280, 40, 40);
                    }
                    if (Gvar.var_1522 == 809) {
                        Adap.gcopy(9, 0, 280, 40, 40);
                    }
                    if (Gvar.var_1522 == 816) {
                        Adap.gcopy(9, 240, 280, 40, 40);
                    }
                    if (Gvar.var_1522 == 850) {
                        Adap.gcopy(9, 280, 280, 40, 40);
                    }
                    if (Gvar.var_1522 == 851) {
                        Adap.gcopy(9, 320, 280, 40, 40);
                    }
                    if (Gvar.var_1522 == 817) {
                        Adap.gcopy(9, 440, 280, 40, 40);
                    }
                    if (Gvar.var_1522 == 818) {
                        Adap.gcopy(9, 480, 280, 40, 40);
                    }
                    if (Gvar.var_1522 == 852) {
                        Adap.gcopy(9, 400, 280, 40, 40);
                    }
                    if (Gvar.var_1522 == 853) {
                        Adap.gcopy(9, 680, 280, 40, 40);
                    }
                    if (Gvar.var_1522 == 854) {
                        Adap.gcopy(9, 720, 280, 40, 40);
                    }
                }
            }
            if (Gvar.var_1521 == 3 || Gvar.var_1521 == 4) {
                if (Gvar.var_1523 == 0) {
                    Adap.gcopy(9, 360, 320, 40, 40);
                }
                if (Gvar.var_1523 == 1) {
                    if (Gvar.var_1522 == 800) {
                        Adap.gcopy(9, 760, 320, 40, 40);
                    }
                    if (Gvar.var_1522 == 801) {
                        Adap.gcopy(9, 520, 320, 40, 40);
                    }
                    if (Gvar.var_1522 == 804) {
                        Adap.gcopy(9, 560, 320, 40, 40);
                    }
                    if (Gvar.var_1522 == 802) {
                        Adap.gcopy(9, 600, 320, 40, 40);
                    }
                    if (Gvar.var_1522 == 803) {
                        Adap.gcopy(9, 640, 320, 40, 40);
                    }
                    if (Gvar.var_1522 == 815) {
                        Adap.gcopy(9, 40, 320, 40, 40);
                    }
                    if (Gvar.var_1522 == 808) {
                        Adap.gcopy(9, 80, 320, 40, 40);
                    }
                    if (Gvar.var_1522 == 805) {
                        Adap.gcopy(9, 120, 320, 40, 40);
                    }
                    if (Gvar.var_1522 == 807) {
                        Adap.gcopy(9, 160, 320, 40, 40);
                    }
                    if (Gvar.var_1522 == 806) {
                        Adap.gcopy(9, 200, 320, 40, 40);
                    }
                    if (Gvar.var_1522 == 809) {
                        Adap.gcopy(9, 0, 320, 40, 40);
                    }
                    if (Gvar.var_1522 == 816) {
                        Adap.gcopy(9, 240, 320, 40, 40);
                    }
                    if (Gvar.var_1522 == 850) {
                        Adap.gcopy(9, 280, 320, 40, 40);
                    }
                    if (Gvar.var_1522 == 851) {
                        Adap.gcopy(9, 320, 320, 40, 40);
                    }
                    if (Gvar.var_1522 == 817) {
                        Adap.gcopy(9, 440, 320, 40, 40);
                    }
                    if (Gvar.var_1522 == 818) {
                        Adap.gcopy(9, 480, 320, 40, 40);
                    }
                    if (Gvar.var_1522 == 852) {
                        Adap.gcopy(9, 400, 320, 40, 40);
                    }
                    if (Gvar.var_1522 == 853) {
                        Adap.gcopy(9, 680, 320, 40, 40);
                    }
                    if (Gvar.var_1522 == 854) {
                        Adap.gcopy(9, 720, 320, 40, 40);
                    }
                }
            }
            if (Gvar.var_1521 == 5 || Gvar.var_1521 == 6) {
                if (Gvar.var_1523 == 0) {
                    Adap.gcopy(9, 360, 360, 40, 40);
                }
                if (Gvar.var_1523 == 1) {
                    if (Gvar.var_1522 == 800) {
                        Adap.gcopy(9, 760, 360, 40, 40);
                    }
                    if (Gvar.var_1522 == 801) {
                        Adap.gcopy(9, 520, 360, 40, 40);
                    }
                    if (Gvar.var_1522 == 804) {
                        Adap.gcopy(9, 560, 360, 40, 40);
                    }
                    if (Gvar.var_1522 == 802) {
                        Adap.gcopy(9, 600, 360, 40, 40);
                    }
                    if (Gvar.var_1522 == 803) {
                        Adap.gcopy(9, 640, 360, 40, 40);
                    }
                    if (Gvar.var_1522 == 815) {
                        Adap.gcopy(9, 40, 360, 40, 40);
                    }
                    if (Gvar.var_1522 == 808) {
                        Adap.gcopy(9, 80, 360, 40, 40);
                    }
                    if (Gvar.var_1522 == 805) {
                        Adap.gcopy(9, 120, 360, 40, 40);
                    }
                    if (Gvar.var_1522 == 807) {
                        Adap.gcopy(9, 160, 360, 40, 40);
                    }
                    if (Gvar.var_1522 == 806) {
                        Adap.gcopy(9, 200, 360, 40, 40);
                    }
                    if (Gvar.var_1522 == 809) {
                        Adap.gcopy(9, 0, 360, 40, 40);
                    }
                    if (Gvar.var_1522 == 816) {
                        Adap.gcopy(9, 240, 360, 40, 40);
                    }
                    if (Gvar.var_1522 == 850) {
                        Adap.gcopy(9, 280, 360, 40, 40);
                    }
                    if (Gvar.var_1522 == 851) {
                        Adap.gcopy(9, 320, 360, 40, 40);
                    }
                    if (Gvar.var_1522 == 817) {
                        Adap.gcopy(9, 440, 360, 40, 40);
                    }
                    if (Gvar.var_1522 == 818) {
                        Adap.gcopy(9, 480, 360, 40, 40);
                    }
                    if (Gvar.var_1522 == 852) {
                        Adap.gcopy(9, 400, 360, 40, 40);
                    }
                    if (Gvar.var_1522 == 853) {
                        Adap.gcopy(9, 680, 360, 40, 40);
                    }
                    if (Gvar.var_1522 == 854) {
                        Adap.gcopy(9, 720, 360, 40, 40);
                    }
                }
            }
            if (Gvar.var_1521 == 7) {
                Adap.gcopy(9, 280, 240, 40, 40);
            }
        }
        if (Gvar.var_1524 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos((Gvar.var_1396 - Gvar.var_66 + 4) * 40, (Gvar.var_1397 - Gvar.var_67 + 4) * 40 - 10);
            if (Gvar.var_1524 >= 1 && Gvar.var_1524 <= 2) {
                Adap.gcopy(3, 640, 480, 40, 40);
            }
            if (Gvar.var_1524 >= 3 && Gvar.var_1524 <= 4) {
                Adap.gcopy(3, 680, 480, 40, 40);
            }
            if (Gvar.var_1524 >= 5 && Gvar.var_1524 <= 8) {
                Adap.gcopy(3, 720, 480, 40, 40);
            }
        }
        if (Gvar.var_1525 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos((Gvar.var_1396 - Gvar.var_66 + 4) * 40, (Gvar.var_1397 - Gvar.var_67 + 4) * 40 - 10);
            if (Gvar.var_1525 == 1 || Gvar.var_1525 == 4 || Gvar.var_1525 == 7) {
                Adap.gcopy(3, 840, 320, 40, 40);
            }
            if (Gvar.var_1525 == 2 || Gvar.var_1525 == 5 || Gvar.var_1525 == 8) {
                Adap.gcopy(3, 880, 320, 40, 40);
            }
            if (Gvar.var_1525 == 3 || Gvar.var_1525 == 6 || Gvar.var_1525 == 9) {
                Adap.gcopy(3, 920, 320, 40, 40);
            }
        }
        if (Gvar.var_1526 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos((Gvar.var_1396 - Gvar.var_66 + 4) * 40, (Gvar.var_1397 - Gvar.var_67 + 4) * 40 - 10);
            if (Gvar.var_1526 == 1 || Gvar.var_1526 == 4 || Gvar.var_1526 == 7) {
                Adap.gcopy(3, 720, 320, 40, 40);
            }
            if (Gvar.var_1526 == 2 || Gvar.var_1526 == 5 || Gvar.var_1526 == 8) {
                Adap.gcopy(3, 760, 320, 40, 40);
            }
            if (Gvar.var_1526 == 3 || Gvar.var_1526 == 6 || Gvar.var_1526 == 9) {
                Adap.gcopy(3, 800, 320, 40, 40);
            }
        }
        if (Gvar.var_1527 >= 1) {
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1527 == 5) {
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 150);
            }
            if (Gvar.var_1527 == 6) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 50);
            }
            Adap.pos((Gvar.var_1396 - Gvar.var_66 + 4) * 40, (Gvar.var_1397 - Gvar.var_67 + 4) * 40 - 10 - 240);
            if (Gvar.var_1527 == 1 || Gvar.var_1527 == 4) {
                Adap.gcopy(8, 0, 480, 40, 280);
            }
            if (Gvar.var_1527 == 2 || Gvar.var_1527 == 5) {
                Adap.gcopy(8, 40, 480, 40, 280);
            }
            if (Gvar.var_1527 == 3 || Gvar.var_1527 == 6) {
                Adap.gcopy(8, 80, 480, 40, 280);
            }
        }
        if (Gvar.var_1528 >= 1) {
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1528 == 10) {
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 150);
            }
            if (Gvar.var_1528 == 11) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
            }
            if (Gvar.var_1528 == 12) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 50);
            }
            if (Gvar.var_1528 >= 13) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 0);
            }
            Adap.pos((Gvar.var_1396 - Gvar.var_66 + 4) * 40, (Gvar.var_1397 - Gvar.var_67 + 4) * 40 - 10);
            if (Gvar.var_1528 == 1 || Gvar.var_1528 == 3 || Gvar.var_1528 == 5) {
                Adap.pos((Gvar.var_1396 - Gvar.var_66 + 4) * 40 + 1, (Gvar.var_1397 - Gvar.var_67 + 4) * 40 - 10);
            }
            if (Gvar.var_1528 == 2 || Gvar.var_1528 == 4 || Gvar.var_1528 == 6) {
                Adap.pos((Gvar.var_1396 - Gvar.var_66 + 4) * 40 - 1, (Gvar.var_1397 - Gvar.var_67 + 4) * 40 - 10);
            }
            Adap.gcopy(3, 120, 120, 40, 40);
        }
        if (Gvar.var_1529 == 1 && Gvar.var_1530 == 0) {
            Adap.gmode(2, null, null, null);
            Adap.pos(160, 150);
            Gvar.belongings_item_list = Gvar.var_233[Gvar.var_1531].Var0;
            Gvar.var_1248 = Gvar.var_233[Gvar.var_1531].Var13;
            await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            Adap.pos(160, 0);
            Adap.gcopy(14, 400, 0, 40, 200);
        }
        if (Gvar.var_1529 >= 2 && Gvar.var_1530 == 0) {
            Adap.gmode(2, null, null, null);
            Adap.pos(160, Gvar.var_774 - 10);
            Gvar.belongings_item_list = Gvar.var_233[Gvar.var_1531].Var0;
            Gvar.var_1248 = Gvar.var_233[Gvar.var_1531].Var13;
            await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            Adap.pos(160, Gvar.var_774 - 160);
            Adap.gcopy(14, 400, 0, 40, 200);
        }
        if (Gvar.var_1529 == 1 && Gvar.var_1530 == 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos(170, 0);
            Adap.gcopy(14, 400, 0, 40, 200);
        }
        if (Gvar.var_1529 >= 2 && Gvar.var_1530 == 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos(160, Gvar.var_774 + 10);
            Adap.gcopy(3, 960, 0, 40, 40);
            Adap.pos(170, Gvar.var_774 - 150);
            Adap.gcopy(14, 400, 0, 40, 200);
        }
        if (Gvar.var_1532 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos((Gvar.var_1396 - Gvar.var_66 + 4) * 40, (Gvar.var_1397 - Gvar.var_67 + 4) * 40 - 10);
            if (Gvar.var_1532 >= 1 && Gvar.var_1532 < 2) {
                Adap.gcopy(14, 80, 640, 40, 40);
            }
            if (Gvar.var_1532 >= 2 && Gvar.var_1532 < 3) {
                Adap.gcopy(14, 120, 640, 40, 40);
            }
            if (Gvar.var_1532 >= 3 && Gvar.var_1532 < 4) {
                Adap.gcopy(14, 160, 640, 40, 40);
            }
            if (Gvar.var_1532 >= 4 && Gvar.var_1532 < 8) {
                Adap.gcopy(14, 200, 640, 40, 40);
            }
            if (Gvar.var_1532 >= 8 && Gvar.var_1532 < 12) {
                Adap.gcopy(14, 240, 640, 40, 40);
            }
            if (Gvar.var_1532 >= 12 && Gvar.var_1532 < 13) {
                Adap.gcopy(14, 280, 640, 40, 40);
            }
            if (Gvar.var_1532 >= 13 && Gvar.var_1532 < 14) {
                Adap.gcopy(14, 280, 639, 40, 40);
            }
            if (Gvar.var_1532 >= 14 && Gvar.var_1532 < 15) {
                Adap.gcopy(14, 280, 640, 40, 40);
            }
            if (Gvar.var_1532 >= 15 && Gvar.var_1532 < 16) {
                Adap.gcopy(14, 280, 639, 40, 40);
            }
            if (Gvar.var_1532 >= 16 && Gvar.var_1532 < 19) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
                Adap.gcopy(14, 280, 640, 40, 40);
            }
            if (Gvar.var_1532 >= 19) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 50);
                Adap.gcopy(14, 280, 640, 40, 40);
            }
        }
        if (Gvar.var_1533 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos((Gvar.var_1396 - Gvar.var_66 + 4) * 40, (Gvar.var_1397 - Gvar.var_67 + 4) * 40 - 10);
            if (Gvar.var_1533 >= 1 && Gvar.var_1533 < 2) {
                Adap.gcopy(14, 40, 80, 40, 40);
            }
            if (Gvar.var_1533 >= 2 && Gvar.var_1533 < 3) {
                Adap.gcopy(14, 80, 80, 40, 40);
            }
            if (Gvar.var_1533 >= 3 && Gvar.var_1533 < 4) {
                Adap.gcopy(14, 120, 80, 40, 40);
            }
            if (Gvar.var_1533 >= 4 && Gvar.var_1533 < 5) {
                Adap.gcopy(14, 119, 80, 40, 40);
            }
            if (Gvar.var_1533 >= 5 && Gvar.var_1533 < 6) {
                Adap.gcopy(14, 120, 80, 40, 40);
            }
            if (Gvar.var_1533 >= 6 && Gvar.var_1533 < 7) {
                Adap.gcopy(14, 119, 80, 40, 40);
            }
            if (Gvar.var_1533 >= 7 && Gvar.var_1533 < 8) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
                Adap.gcopy(14, 120, 80, 40, 40);
            }
            if (Gvar.var_1533 >= 8) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 50);
                Adap.gcopy(14, 120, 80, 40, 40);
            }
        }
        if (Gvar.var_1534 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos((Gvar.var_1396 - Gvar.var_66 + 4) * 40, (Gvar.var_1397 - Gvar.var_67 + 4) * 40 - 10);
            if (Gvar.var_1534 >= 1 && Gvar.var_1534 < 2) {
                Adap.gcopy(14, 480, 120, 40, 40);
            }
            if (Gvar.var_1534 >= 2 && Gvar.var_1534 < 3) {
                Adap.gcopy(14, 520, 120, 40, 40);
            }
            if (Gvar.var_1534 >= 3 && Gvar.var_1534 < 4) {
                Adap.gcopy(14, 560, 120, 40, 40);
            }
            if (Gvar.var_1534 >= 4 && Gvar.var_1534 < 5) {
                Adap.gcopy(14, 559, 120, 40, 40);
            }
            if (Gvar.var_1534 >= 5 && Gvar.var_1534 < 6) {
                Adap.gcopy(14, 560, 120, 40, 40);
            }
            if (Gvar.var_1534 >= 6 && Gvar.var_1534 < 7) {
                Adap.gcopy(14, 559, 120, 40, 40);
            }
            if (Gvar.var_1534 >= 7 && Gvar.var_1534 < 8) {
                Adap.gcopy(14, 440, 160, 40, 40);
            }
            if (Gvar.var_1534 >= 8 && Gvar.var_1534 < 9) {
                Adap.gcopy(14, 480, 160, 40, 40);
            }
            if (Gvar.var_1534 >= 9 && Gvar.var_1534 < 10) {
                Adap.gcopy(14, 520, 160, 40, 40);
            }
            if (Gvar.var_1534 >= 10 && Gvar.var_1534 < 11) {
                Adap.gcopy(14, 560, 160, 40, 40);
            }
        }
        if (Gvar.var_1535 >= 1) {
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1535 == 1) {
                Adap.pos(4 * Gvar.var_35 - 20, 30);
                Adap.gcopy(14, 200, 0, 80, 80);
            }
            if (Gvar.var_1535 == 2) {
                Adap.pos(4 * Gvar.var_35 - 20, 70);
                Adap.gcopy(14, 200, 0, 80, 80);
            }
            if (Gvar.var_1535 == 3) {
                Adap.pos(4 * Gvar.var_35 - 20, 110);
                Adap.gcopy(14, 200, 0, 80, 80);
            }
            if (Gvar.var_1535 == 4) {
                Adap.pos(4 * Gvar.var_35 - 20, 130);
                Adap.gcopy(14, 200, 0, 80, 80);

                Adap.DSPLAY(137);
            }
            if (Gvar.var_1535 == 5) {
                Adap.pos(4 * Gvar.var_35 - 20, 125);
                Adap.gcopy(14, 200, 0, 80, 80);
            }
            if (Gvar.var_1535 == 6) {
                Adap.pos(4 * Gvar.var_35 - 20, 130);
                Adap.gcopy(14, 200, 0, 80, 80);
            }
            if (Gvar.var_1535 == 7) {
                Adap.pos(4 * Gvar.var_35 - 20, 125);
                Adap.gcopy(14, 200, 0, 80, 80);
            }
            if (Gvar.var_1535 == 8) {
                Adap.pos(4 * Gvar.var_35 - 20, 130);
                Adap.gcopy(14, 200, 0, 80, 80);
            }
            if (Gvar.var_1535 == 9 || Gvar.var_1535 == 10 || Gvar.var_1535 == 12 || Gvar.var_1535 == 13) {
                Adap.pos(4 * Gvar.var_35 - 20, 130);
                Adap.gcopy(14, 280, 0, 80, 80);
            }
        }
        if (Gvar.var_1536 >= 1) {
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1536 == 1) {
                Adap.pos(4 * Gvar.var_35 - 60, 0);
                Adap.gcopy(14, 240, 240, 160, 160);
            }
            if (Gvar.var_1536 == 2) {
                Adap.pos(4 * Gvar.var_35 - 60, 30);
                Adap.gcopy(14, 240, 240, 160, 160);
            }
            if (Gvar.var_1536 == 3) {
                Adap.pos(4 * Gvar.var_35 - 60, 50);
                Adap.gcopy(14, 240, 240, 160, 160);
            }
            if (Gvar.var_1536 == 4) {
                Adap.pos(4 * Gvar.var_35 - 60, 75);
                Adap.gcopy(14, 240, 240, 160, 160);
    
                Adap.DSPLAY(138);
            }
            if (Gvar.var_1536 == 5) {
                Adap.pos(4 * Gvar.var_35 - 60, 70);
                Adap.gcopy(14, 240, 240, 160, 160);
            }
            if (Gvar.var_1536 == 6) {
                Adap.pos(4 * Gvar.var_35 - 60, 75);
                Adap.gcopy(14, 240, 240, 160, 160);
            }
            if (Gvar.var_1536 == 7) {
                Adap.pos(4 * Gvar.var_35 - 60, 70);
                Adap.gcopy(14, 240, 240, 160, 160);
            }
            if (Gvar.var_1536 == 8) {
                Adap.pos(4 * Gvar.var_35 - 60, 75);
                Adap.gcopy(14, 240, 240, 160, 160);
            }
            if (Gvar.var_1536 == 9 || Gvar.var_1536 == 10 || Gvar.var_1536 == 12 || Gvar.var_1536 == 13) {
                Adap.pos(4 * Gvar.var_35 - 60, 70);
                Adap.gcopy(14, 240, 240, 160, 160);
            }
        }
        if (Gvar.var_1537 >= 1) {
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1537 == 1) {
                Adap.pos(310, 150);
                Adap.gcopy(14, 80, 240, 80, 40);
            }
            if (Gvar.var_1537 == 2) {
                Adap.pos(240, 150);
                Adap.gcopy(14, 80, 240, 80, 40);
            }
            if (Gvar.var_1537 == 3) {
                Adap.pos(160, 150);
                Adap.gcopy(14, 80, 240, 80, 40);
            }
            if (Gvar.var_1537 == 4) {
                Adap.pos(80, 150);
                Adap.gcopy(14, 80, 240, 80, 40);
            }
            if (Gvar.var_1537 == 5) {
                Adap.pos(0, 150);
                Adap.gcopy(14, 80, 240, 80, 40);
            }
            if (Gvar.var_1537 == 6) {
            }
            if (Gvar.var_1537 == 7) {
                Adap.pos(0, 170);
                Adap.gcopy(14, 160, 240, 80, 40);
            }
            if (Gvar.var_1537 == 8) {
                Adap.pos(80, 170);
                Adap.gcopy(14, 160, 240, 80, 40);
            }
            if (Gvar.var_1537 == 9) {
                Adap.pos(160, 170);
                Adap.gcopy(14, 160, 240, 80, 40);
            }
            if (Gvar.var_1537 == 10) {
                Adap.pos(240, 170);
                Adap.gcopy(14, 160, 240, 80, 40);
            }
            if (Gvar.var_1537 == 11) {
                Adap.pos(310, 170);
                Adap.gcopy(14, 160, 240, 80, 40);
            }
        }
        if (Gvar.var_1538 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos(160, 150);
            if (Gvar.var_1538 == 1 || Gvar.var_1538 == 2) {
                Adap.gcopy(14, 80, 320, 40, 40);
            }
            if (Gvar.var_1538 == 3 || Gvar.var_1538 == 4) {
                Adap.gcopy(14, 120, 320, 40, 40);
            }
            if (Gvar.var_1538 == 5 || Gvar.var_1538 == 6) {
                Adap.gcopy(14, 160, 320, 40, 40);
            }
        }
        if (Gvar.var_1539 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos(160, 160);
            if (Gvar.var_1539 >= 0 && Gvar.var_1539 < 1) {
                Adap.gcopy(14, 280, 400, 40, 40);
            }
            if (Gvar.var_1539 >= 1 && Gvar.var_1539 < 2) {
                Adap.gcopy(14, 320, 400, 40, 40);
            }
            if (Gvar.var_1539 >= 2 && Gvar.var_1539 < 3) {
                Adap.gcopy(14, 360, 400, 40, 40);
            }
            if (Gvar.var_1539 >= 3 && Gvar.var_1539 < 4) {
                Adap.gcopy(14, 359, 400, 40, 40);
            }
            if (Gvar.var_1539 >= 4 && Gvar.var_1539 < 5) {
                Adap.gcopy(14, 360, 400, 40, 40);
            }
            if (Gvar.var_1539 >= 5 && Gvar.var_1539 < 11) {
                Adap.gcopy(14, 359, 400, 40, 40);
            }
            if (Gvar.var_1539 >= 11 && Gvar.var_1539 < 12) {
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 200);
                Adap.gcopy(14, 360, 400, 40, 40);
            }
            if (Gvar.var_1539 >= 12 && Gvar.var_1539 < 13) {
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 150);
                Adap.gcopy(14, 360, 400, 40, 40);
            }
            if (Gvar.var_1539 >= 13 && Gvar.var_1539 < 14) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
                Adap.gcopy(14, 360, 400, 40, 40);
            }
            if (Gvar.var_1539 >= 14) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 50);
                Adap.gcopy(14, 360, 400, 40, 40);
            }
        }
        if (Gvar.var_1540 >= 1) {
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1540 == 1) {
                Adap.pos(4 * Gvar.var_35, 280);
                Adap.gcopy(14, 200, 80, 40, 40);
            }
            if (Gvar.var_1540 == 2) {
                Adap.pos(4 * Gvar.var_35, 240);
                Adap.gcopy(14, 200, 80, 40, 40);
            }
            if (Gvar.var_1540 == 3) {
                Adap.pos(4 * Gvar.var_35, 200);
                Adap.gcopy(14, 200, 80, 40, 40);
            }
            if (Gvar.var_1540 == 4) {
                Adap.pos(4 * Gvar.var_35, 160);
                Adap.gcopy(14, 200, 80, 40, 40);
            }
            if (Gvar.var_1540 == 5) {
                Adap.pos(4 * Gvar.var_35, 165);
                Adap.gcopy(14, 200, 80, 40, 40);
            }
            if (Gvar.var_1540 == 6) {
                Adap.pos(4 * Gvar.var_35, 160);
                Adap.gcopy(14, 200, 80, 40, 40);
            }
            if (Gvar.var_1540 == 7) {
                Adap.pos(4 * Gvar.var_35, 165);
                Adap.gcopy(14, 200, 80, 40, 40);
            }
            if (Gvar.var_1540 >= 8) {
                Adap.pos(4 * Gvar.var_35, 160);
                Adap.gcopy(14, 200, 80, 40, 40);
            }
        }
        if (Gvar.var_1541 >= 1) {
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1541 == 1) {
                Adap.pos(4 * Gvar.var_35, 280);
                Adap.gcopy(34, 400, 1200, 40, 40);
            }
            if (Gvar.var_1541 == 2) {
                Adap.pos(4 * Gvar.var_35, 240);
                Adap.gcopy(34, 400, 1200, 40, 40);
            }
            if (Gvar.var_1541 == 3) {
                Adap.pos(4 * Gvar.var_35, 200);
                Adap.gcopy(34, 400, 1200, 40, 40);
            }
            if (Gvar.var_1541 == 4) {
                Adap.pos(4 * Gvar.var_35, 160);
                Adap.gcopy(34, 400, 1200, 40, 40);
            }
            if (Gvar.var_1541 == 5) {
                Adap.pos(4 * Gvar.var_35, 165);
                Adap.gcopy(34, 400, 1200, 40, 40);
            }
            if (Gvar.var_1541 == 6) {
                Adap.pos(4 * Gvar.var_35, 160);
                Adap.gcopy(34, 400, 1200, 40, 40);
            }
            if (Gvar.var_1541 == 7) {
                Adap.pos(4 * Gvar.var_35, 165);
                Adap.gcopy(34, 400, 1200, 40, 40);
            }
            if (Gvar.var_1541 >= 8) {
                Adap.pos(4 * Gvar.var_35, 160);
                Adap.gcopy(34, 400, 1200, 40, 40);
            }
        }
        if (Gvar.var_1542 >= 1 && Gvar.var_127 == 0 && Gvar.var_132 == 0) {
            Adap.gmode(2, null, null, null);
            Adap.color(0, 0, 0);
            if (Gvar.var_1542 == 1) {

                Adap.gmode(4, null, null, 10);
            }
            if (Gvar.var_1542 == 2) {

                Adap.gmode(4, null, null, 50);
            }
            if (Gvar.var_1542 == 3) {

                Adap.gmode(4, null, null, 80);
            }
            if (Gvar.var_1542 == 4) {
        
                Adap.gmode(4, null, null, 120);
            }
            if (Gvar.var_1542 == 5) {
        
                Adap.gmode(4, null, null, 150);
            }
            if (Gvar.var_1542 == 6) {
        
                Adap.gmode(4, null, null, 200);
            }
            if (Gvar.var_1542 >= 7 && Gvar.var_1542 >= 15) {
    
                Adap.gmode(4, null, null, 255);
            }
            if (Gvar.var_1542 == 16) {
        
                Adap.gmode(4, null, null, 150);
            }
            if (Gvar.var_1542 == 17) {

                Adap.gmode(4, null, null, 80);
            }
            if (Gvar.var_1542 == 18) {

                Adap.gmode(4, null, null, 10);
            }
            if (Gvar.var_1542 >= 1 && Gvar.var_1542 < 19) {
                Adap.pos(160 - 20, 160 - 40);
                Adap.gcopy(14, 160, 120, 80, 80);
            }
            if (Gvar.var_1542 >= 21 && Gvar.var_1542 < 27) {
                Adap.gmode(2, null, null, null);
                Adap.pos(160, 160 - 40);
                if (Gvar.var_1542 == 21 || Gvar.var_1542 == 23 || Gvar.var_1542 == 25 || Gvar.var_1542 == 27) {
                    Adap.pos(160, 160 - 43);
                }
                Adap.gcopy(14, 160, 280, 40, 40);
            }
        }
        if (Gvar.var_1543 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos(160, 160);
            if (Gvar.var_1543 == 5) {
                Adap.gcopy(14, 280, 200, 40, 40);
            }
            if (Gvar.var_1543 == 6) {
                Adap.gcopy(14, 320, 200, 40, 40);
            }
            if (Gvar.var_1543 >= 7 && Gvar.var_1543 < 14) {
                Adap.gcopy(14, 360, 200, 40, 40);
            }
            if (Gvar.var_1543 >= 15 && Gvar.var_1543 < 17) {
                Adap.gcopy(14, 400, 200, 40, 40);
                Gvar.var_374 = 1;
            }
        }
        if (Gvar.var_1544 >= 1) {
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1544 == 22) {
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 150);
            }
            if (Gvar.var_1544 == 23) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
            }
            if (Gvar.var_1544 == 24) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 50);
            }
            Adap.pos(160, 130);
            if (Gvar.var_1544 == 1 || Gvar.var_1544 == 4 || Gvar.var_1544 == 7 || Gvar.var_1544 == 10 || Gvar.var_1544 == 13 || Gvar.var_1544 == 16 || Gvar.var_1544 == 19 || Gvar.var_1544 == 22) {
                Adap.gcopy(6, 80, 120, 40, 30);
            }
            if (Gvar.var_1544 == 2 || Gvar.var_1544 == 5 || Gvar.var_1544 == 8 || Gvar.var_1544 == 11 || Gvar.var_1544 == 14 || Gvar.var_1544 == 17 || Gvar.var_1544 == 20 || Gvar.var_1544 == 23) {
                Adap.gcopy(6, 40, 121, 40, 30);
            }
            if (Gvar.var_1544 == 3 || Gvar.var_1544 == 6 || Gvar.var_1544 == 9 || Gvar.var_1544 == 12 || Gvar.var_1544 == 15 || Gvar.var_1544 == 18 || Gvar.var_1544 == 21 || Gvar.var_1544 == 24) {
                Adap.gcopy(6, 0, 122, 40, 30);
            }
        }
        if (Gvar.var_1545 >= 1) {
            Adap.pos(160, 130);
            if (Gvar.var_1545 == 4) {
                Adap.gmode(2, null, null, null);
            }
            if (Gvar.var_1545 == 3) {
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 200);
            }
            if (Gvar.var_1545 == 2) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
            }
            if (Gvar.var_1545 == 1) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 50);
            }
            Adap.gcopy(34, 0, 440, 40, 40);
        }
        if (Gvar.var_1546 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos((Gvar.var_1396 - Gvar.var_66 + 4) * 40, (Gvar.var_1397 - Gvar.var_67 + 4) * 40 - 10 - 40);
            if (Gvar.var_1546 == 1) {
                Adap.gcopy(14, 440, 280, 40, 80);
            }
            if (Gvar.var_1546 == 2) {
                Adap.gcopy(14, 480, 280, 40, 80);
            }
            if (Gvar.var_1546 == 3) {
                Adap.gcopy(14, 520, 280, 40, 80);
            }
            if (Gvar.var_1546 == 4) {
                Adap.gcopy(14, 560, 280, 40, 80);
            }
            if (Gvar.var_1546 == 5) {
                Adap.gcopy(14, 560, 280, 40, 80);
            }
            if (Gvar.var_1546 == 6) {
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 200);
                Adap.gcopy(14, 560, 280, 40, 80);
            }
            if (Gvar.var_1546 == 7) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
                Adap.gcopy(14, 560, 280, 40, 80);
            }
            if (Gvar.var_1546 == 8) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 50);
                Adap.gcopy(14, 560, 280, 40, 80);
            }
        }
        if (Gvar.var_1547 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos((Gvar.var_1396 - Gvar.var_66 + 4) * 40, (Gvar.var_1397 - Gvar.var_67 + 4) * 40);
            if (Gvar.var_1547 == 1) {
                Adap.gcopy(14, 480, 360, 40, 40);
            }
            if (Gvar.var_1547 == 2) {
                Adap.gcopy(14, 480, 360, 40, 40);
            }
            if (Gvar.var_1547 == 3) {
                Adap.gcopy(14, 520, 360, 40, 40);
            }
            if (Gvar.var_1547 == 4) {
                Adap.gcopy(14, 520, 360, 40, 40);
            }
            if (Gvar.var_1547 == 5) {
                Adap.gcopy(14, 560, 360, 40, 40);
            }
            if (Gvar.var_1547 == 6) {
                Adap.gcopy(14, 560, 360, 40, 40);
            }
        }
        if (Gvar.var_1548 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos(120, 0);
            if (Gvar.var_1548 == 1) {
                Adap.gcopy(3, 1040, 880, 120, 160);
            }
            if (Gvar.var_1548 == 2) {
                Adap.gcopy(3, 1160, 880, 120, 160);
            }
            if (Gvar.var_1548 == 7) {
                Adap.gcopy(3, 1280, 880, 120, 160);
            }
            if (Gvar.var_1548 == 8) {
                Adap.gcopy(3, 1400, 880, 120, 160);
            }
        }
        if (Gvar.var_1549 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos((Gvar.var_1550 - Gvar.var_66 + 4) * 40, (Gvar.var_230 - Gvar.var_67 + 4 - 5) * 40 + Gvar.var_1549 * 20);
            Adap.gcopy(34, 320, 440, 40, 40);
        }
        if (Gvar.var_1551 >= 1) {
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1551 == 14) {
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 150);
            }
            if (Gvar.var_1551 == 15) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
            }
            if (Gvar.var_1551 == 16) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 50);
            }
            if (Gvar.var_1551 >= 17) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 0);
            }
            Adap.pos((Gvar.var_1396 - Gvar.var_66 + 4) * 40, (Gvar.var_1397 - Gvar.var_67 + 4) * 40 - 20);
            if (Gvar.var_1551 == 1 || Gvar.var_1551 == 5 || Gvar.var_1551 == 9 || Gvar.var_1551 == 13) {
                Adap.gcopy(3, 760, 520, 40, 40);
            }
            if (Gvar.var_1551 == 2 || Gvar.var_1551 == 6 || Gvar.var_1551 == 10 || Gvar.var_1551 == 14) {
                Adap.gcopy(3, 800, 520, 40, 40);
            }
            if (Gvar.var_1551 == 3 || Gvar.var_1551 == 7 || Gvar.var_1551 == 11 || Gvar.var_1551 == 15) {
                Adap.gcopy(3, 840, 520, 40, 40);
            }
            if (Gvar.var_1551 == 4 || Gvar.var_1551 == 8 || Gvar.var_1551 == 12 || Gvar.var_1551 == 16) {
                Adap.gcopy(3, 800, 520, 40, 40);
            }
        }
        if (Gvar.var_1552 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos((Gvar.var_1396 - Gvar.var_66 + 4) * 40, (Gvar.var_1397 - Gvar.var_67 + 4) * 40 - 10);
            if (Gvar.var_1552 == 1 || Gvar.var_1552 == 4 || Gvar.var_1552 == 7 || Gvar.var_1552 == 10 || Gvar.var_1552 == 13 || Gvar.var_1552 == 16) {
                Adap.gcopy(3, 560, 200, 40, 40);
            }
            if (Gvar.var_1552 == 2 || Gvar.var_1552 == 5 || Gvar.var_1552 == 8 || Gvar.var_1552 == 11 || Gvar.var_1552 == 14 || Gvar.var_1552 == 17) {
                Adap.gcopy(3, 600, 200, 40, 40);
            }
            if (Gvar.var_1552 == 3 || Gvar.var_1552 == 6 || Gvar.var_1552 == 9 || Gvar.var_1552 == 12 || Gvar.var_1552 == 15 || Gvar.var_1552 == 18) {
                Adap.gcopy(3, 640, 200, 40, 40);
            }
        }
        if (Gvar.var_1553 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos(Gvar.var_1554, 16 * 20 + Gvar.var_1555 - Gvar.var_1553 * 20);
            Adap.gcopy(34, 400, 400, 40, 40);
        }
        if (Gvar.var_1556 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos(Gvar.var_1554, 16 * 20 + Gvar.var_1555 - Gvar.var_1556 * 20);
            Adap.gcopy(34, 400, 1200, 40, 40);
        }
        if (Gvar.var_1557 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos(Gvar.var_1558, Gvar.var_1559 - 10);
            if (Gvar.var_1557 == 1) {
                Adap.gcopy(3, 800, 600, 40, 40);
            }
            if (Gvar.var_1557 == 2) {
                Adap.gcopy(3, 840, 600, 40, 40);
            }
            if (Gvar.var_1557 == 3) {
                Adap.gcopy(3, 880, 600, 40, 40);
            }
            if (Gvar.var_1557 == 4) {
                Adap.gcopy(3, 920, 600, 40, 40);
            }
            if (Gvar.var_1557 == 5) {
                Adap.gcopy(3, 960, 600, 40, 40);
            }
            if (Gvar.var_1557 == 6) {
                Adap.gcopy(3, 1000, 600, 40, 40);
            }
            if (Gvar.var_1557 >= 7 && Gvar.var_1557 <= 13) {
                Adap.gcopy(3, 1040, 600, 40, 40);
            }
            if (Gvar.var_1557 == 14 || Gvar.var_1557 == 16 || Gvar.var_1557 == 18) {
                Adap.gcopy(3, 1080, 600, 40, 40);
            }
            if (Gvar.var_1557 == 15 || Gvar.var_1557 == 17 || Gvar.var_1557 == 19) {
                Adap.gcopy(3, 1120, 600, 40, 40);
            }
        }
        if (Gvar.var_1560 >= 1) {
            Gvar.var_1561 = Gvar.var_1560 % 16;
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1561 == 0) {
                Adap.pos((Gvar.var_1396 - Gvar.var_66 + 4) * 40, (Gvar.var_1397 - Gvar.var_67 + 4) * 40 - 10);
            }
            if (Gvar.var_1561 == 1) {
                Adap.pos((Gvar.var_1396 - Gvar.var_66 + 4) * 40 - 2, (Gvar.var_1397 - Gvar.var_67 + 4) * 40 - 12);
            }
            if (Gvar.var_1561 == 2) {
                Adap.pos((Gvar.var_1396 - Gvar.var_66 + 4) * 40 - 4, (Gvar.var_1397 - Gvar.var_67 + 4) * 40 - 14);
            }
            if (Gvar.var_1561 == 3) {
                Adap.pos((Gvar.var_1396 - Gvar.var_66 + 4) * 40 - 6, (Gvar.var_1397 - Gvar.var_67 + 4) * 40 - 16);
            }
            if (Gvar.var_1561 == 4) {
                Adap.pos((Gvar.var_1396 - Gvar.var_66 + 4) * 40 - 8, (Gvar.var_1397 - Gvar.var_67 + 4) * 40 - 18);
            }
            if (Gvar.var_1561 == 5) {
                Adap.pos((Gvar.var_1396 - Gvar.var_66 + 4) * 40 - 6, (Gvar.var_1397 - Gvar.var_67 + 4) * 40 - 20);
            }
            if (Gvar.var_1561 == 6) {
                Adap.pos((Gvar.var_1396 - Gvar.var_66 + 4) * 40 - 4, (Gvar.var_1397 - Gvar.var_67 + 4) * 40 - 22);
            }
            if (Gvar.var_1561 == 7) {
                Adap.pos((Gvar.var_1396 - Gvar.var_66 + 4) * 40 - 2, (Gvar.var_1397 - Gvar.var_67 + 4) * 40 - 24);
            }
            if (Gvar.var_1561 == 8) {
                Adap.pos((Gvar.var_1396 - Gvar.var_66 + 4) * 40, (Gvar.var_1397 - Gvar.var_67 + 4) * 40 - 26);
            }
            if (Gvar.var_1561 == 9) {
                Adap.pos((Gvar.var_1396 - Gvar.var_66 + 4) * 40 + 2, (Gvar.var_1397 - Gvar.var_67 + 4) * 40 - 24);
            }
            if (Gvar.var_1561 == 10) {
                Adap.pos((Gvar.var_1396 - Gvar.var_66 + 4) * 40 + 4, (Gvar.var_1397 - Gvar.var_67 + 4) * 40 - 22);
            }
            if (Gvar.var_1561 == 11) {
                Adap.pos((Gvar.var_1396 - Gvar.var_66 + 4) * 40 + 6, (Gvar.var_1397 - Gvar.var_67 + 4) * 40 - 20);
            }
            if (Gvar.var_1561 == 12) {
                Adap.pos((Gvar.var_1396 - Gvar.var_66 + 4) * 40 + 8, (Gvar.var_1397 - Gvar.var_67 + 4) * 40 - 18);
            }
            if (Gvar.var_1561 == 13) {
                Adap.pos((Gvar.var_1396 - Gvar.var_66 + 4) * 40 + 6, (Gvar.var_1397 - Gvar.var_67 + 4) * 40 - 16);
            }
            if (Gvar.var_1561 == 14) {
                Adap.pos((Gvar.var_1396 - Gvar.var_66 + 4) * 40 + 4, (Gvar.var_1397 - Gvar.var_67 + 4) * 40 - 14);
            }
            if (Gvar.var_1561 == 15) {
                Adap.pos((Gvar.var_1396 - Gvar.var_66 + 4) * 40 + 2, (Gvar.var_1397 - Gvar.var_67 + 4) * 40 - 12);
            }
            Adap.gcopy(11, 1040, 200, 40, 40);
        }
        if (Gvar.var_1562 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos((Gvar.var_1563 - Gvar.var_66 + 4) * 40, (Gvar.var_1564 - Gvar.var_67 + 4) * 40 - Gvar.var_1562 * 20);
            Adap.gcopy(3, 1000, 320, 40, 40);
            if (Gvar.var_1565 >= 2) {
                Adap.pos((Gvar.var_1563 - Gvar.var_66 + 4) * 40 + Gvar.var_1562 * 10, (Gvar.var_1564 - Gvar.var_67 + 4) * 40 - Gvar.var_1562 * 20);
                Adap.gcopy(3, 1000, 320, 40, 40);
            }
            if (Gvar.var_1565 >= 3) {
                Adap.pos((Gvar.var_1563 - Gvar.var_66 + 4) * 40 - Gvar.var_1562 * 10, (Gvar.var_1564 - Gvar.var_67 + 4) * 40 - Gvar.var_1562 * 20);
                Adap.gcopy(3, 1000, 320, 40, 40);
            }
            if (Gvar.var_1565 >= 4) {
                Adap.pos((Gvar.var_1563 - Gvar.var_66 + 4) * 40 + Gvar.var_1562 * 15, (Gvar.var_1564 - Gvar.var_67 + 4) * 40 - Gvar.var_1562 * 20);
                Adap.gcopy(3, 1000, 320, 40, 40);
            }
            if (Gvar.var_1565 >= 5) {
                Adap.pos((Gvar.var_1563 - Gvar.var_66 + 4) * 40 - Gvar.var_1562 * 15, (Gvar.var_1564 - Gvar.var_67 + 4) * 40 - Gvar.var_1562 * 20);
                Adap.gcopy(3, 1000, 320, 40, 40);
            }
        }
        if (Gvar.var_1566 >= 1) {
            Adap.gmode(2, null, null, null);
            Gvar.var_1567 = 1;
            for (let cnt2 = 0; cnt2 < Gvar.var_1565; ++cnt2) {
                Adap.pos((Gvar.var_1568[Gvar.var_1567][1] - Gvar.var_66 + 4) * 40, (Gvar.var_1568[Gvar.var_1567][2] - Gvar.var_67 + 4 - 5) * 40 + Gvar.var_1566 * 20);
                Adap.gcopy(3, 1000, 320, 40, 40);
                Gvar.var_1567++;
            }
        }
        if (Gvar.var_1569 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos(160, 150);
            if (Gvar.var_1569 == 1 || Gvar.var_1569 == 5 || Gvar.var_1569 == 9 || Gvar.var_1569 == 13 || Gvar.var_1569 == 17) {
                Adap.gcopy(3, 640, 640, 40, 40);
            }
            if (Gvar.var_1569 == 2 || Gvar.var_1569 == 6 || Gvar.var_1569 == 10 || Gvar.var_1569 == 14 || Gvar.var_1569 == 18) {
                Adap.gcopy(3, 680, 640, 40, 40);
            }
            if (Gvar.var_1569 == 3 || Gvar.var_1569 == 7 || Gvar.var_1569 == 11 || Gvar.var_1569 == 15 || Gvar.var_1569 == 19) {
                Adap.gcopy(3, 720, 640, 40, 40);
            }
            if (Gvar.var_1569 == 4 || Gvar.var_1569 == 8 || Gvar.var_1569 == 12 || Gvar.var_1569 == 16 || Gvar.var_1569 == 20) {
                Adap.gcopy(3, 680, 640, 40, 40);
            }
        }
        if (Gvar.var_1570 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos(160, 120);
            Gvar.belongings_item_list = Gvar.var_1571;
            await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            Adap.pos(160, 130);
            if (Gvar.var_1570 == 1 || Gvar.var_1570 == 5 || Gvar.var_1570 == 9 || Gvar.var_1570 == 13 || Gvar.var_1570 == 17) {
                Adap.gcopy(3, 640, 680, 40, 40);
            }
            if (Gvar.var_1570 == 2 || Gvar.var_1570 == 6 || Gvar.var_1570 == 10 || Gvar.var_1570 == 14 || Gvar.var_1570 == 18) {
                Adap.gcopy(3, 340, 340, 40, 40);
            }
            if (Gvar.var_1570 == 3 || Gvar.var_1570 == 7 || Gvar.var_1570 == 11 || Gvar.var_1570 == 15 || Gvar.var_1570 == 19) {
                Adap.gcopy(3, 640, 680, 40, 40);
            }
            if (Gvar.var_1570 == 4 || Gvar.var_1570 == 8 || Gvar.var_1570 == 12 || Gvar.var_1570 == 16 || Gvar.var_1570 == 20) {
                Adap.gcopy(3, 340, 340, 40, 40);
            }
        }
        if (Gvar.var_1572 >= 1) {
            Adap.pos(140, 110);
            Adap.color(0, 0, 0);
    
            Adap.gmode(4, null, null, 130);
            if (Gvar.var_1572 == 8) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 80);
            }
            if (Gvar.var_1572 == 9) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 50);
            }
            if (Gvar.var_1572 == 10) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 20);
            }
            if (Gvar.var_1572 == 1 || Gvar.var_1572 == 5 || Gvar.var_1572 == 9 || Gvar.var_1572 == 13 || Gvar.var_1572 == 17) {
                Adap.gcopy(3, 1120, 280, 80, 80);
            }
            if (Gvar.var_1572 == 2 || Gvar.var_1572 == 6 || Gvar.var_1572 == 10 || Gvar.var_1572 == 14 || Gvar.var_1572 == 18) {
                Adap.gcopy(3, 1200, 280, 80, 80);
            }
            if (Gvar.var_1572 == 3 || Gvar.var_1572 == 7 || Gvar.var_1572 == 11 || Gvar.var_1572 == 15 || Gvar.var_1572 == 19) {
                Adap.gcopy(3, 1280, 280, 80, 80);
            }
            if (Gvar.var_1572 == 4 || Gvar.var_1572 == 8 || Gvar.var_1572 == 12 || Gvar.var_1572 == 16 || Gvar.var_1572 == 20) {
                Adap.gcopy(3, 1360, 280, 80, 80);
            }
        }
        if (Gvar.var_1573 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos((Gvar.var_1389 - Gvar.var_66 + 4) * 40 - 20, (Gvar.var_1390 - Gvar.var_67 + 4) * 40 - 30);
            if (Gvar.var_1573 == 1 || Gvar.var_1573 == 3) {
                Gvar.var_1391 = 0;
            }
            if (Gvar.var_1573 == 3 || Gvar.var_1573 == 4) {
                Gvar.var_1391 = 80;
            }
            if (Gvar.var_1573 == 5 || Gvar.var_1573 == 6) {
                Gvar.var_1391 = 160;
            }
            if (Gvar.var_1573 == 7 || Gvar.var_1573 == 8) {
                Gvar.var_1391 = 240;
            }
            if (Gvar.var_1573 == 9 || Gvar.var_1573 == 10) {
                Gvar.var_1391 = 320;
            }
            if (Gvar.var_1573 == 11 || Gvar.var_1573 == 12) {
                Gvar.var_1391 = 400;
            }
            if (Gvar.var_1573 == 13 || Gvar.var_1573 == 14) {
                Gvar.var_1391 = 480;
            }
            Adap.gcopy(3, Gvar.var_1391, 160, 80, 80);
        }
        if (Gvar.var_1574 >= 1) {
            Adap.pos(120, Gvar.var_774);
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1574 == 1) {
                Adap.gcopy(Gvar.bufferid_stand_disc, 1120, 1440, 120, 80);
            }
            if (Gvar.var_1574 == 2) {
                Adap.gcopy(Gvar.bufferid_stand_disc, 1000, 1520, 120, 80);
            }
            if (Gvar.var_1574 == 3) {
                Adap.gcopy(Gvar.bufferid_stand_disc, 1120, 1520, 120, 80);
            }
            if (Gvar.var_1574 == 4) {
                Adap.pos(120, Gvar.var_774 + 20);
                Adap.gcopy(Gvar.bufferid_stand_disc, 1000, 1600, 120, 80);
            }
            if (Gvar.var_1574 == 5) {
                Adap.pos(120, Gvar.var_774 + 20);
                Adap.gcopy(Gvar.bufferid_stand_disc, 1120, 1600, 120, 80);
            }
        }
        if (Gvar.var_1575 >= 1) {
            Adap.pos(160, Gvar.var_774);
            Adap.gmode(2, null, null, null);
            Adap.gcopy(3, 40, 0, 40, 40);
            Adap.pos(120, Gvar.var_774 - 20);
            Adap.gcopy(Gvar.bufferid_stand_disc, 1000, 1440, 120, 40);
        }
        if (Gvar.var_1576 >= 1) {
            Adap.pos(160, Gvar.var_774);
            Adap.gmode(2, null, null, null);
            Adap.gcopy(3, 40, 0, 40, 40);
        }
        if (Gvar.var_1577 >= 1) {
            Adap.pos(160, Gvar.var_774);
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1577 == 1 || Gvar.var_1577 == 5) {
                Adap.gcopy(3, 960, 0, 40, 40);
            }
            if (Gvar.var_1577 == 2 || Gvar.var_1577 == 6) {
                Adap.gcopy(3, 1000, 0, 40, 40);
            }
            if (Gvar.var_1577 == 3 || Gvar.var_1577 == 7) {
                Adap.gcopy(3, 1040, 0, 40, 40);
            }
            if (Gvar.var_1577 == 4 || Gvar.var_1577 == 8) {
                Adap.gcopy(3, 1080, 0, 40, 40);
            }
        }
        if (Gvar.var_1578 >= 1) {
            Adap.pos(160, Gvar.var_774);
            Adap.gmode(2, null, null, null);
            Adap.gcopy(3, 40, 0, 40, 40);
        }
        if (Gvar.var_1579 >= 1 && Gvar.var_1579 < 8) {
            Adap.gmode(2, null, null, null);
            Adap.pos(180, 120);
            if (Gvar.var_1579 == 1 || Gvar.var_1579 == 3 || Gvar.var_1579 == 5 || Gvar.var_1579 == 7) {
                Adap.pos(180, 125);
            }
            Adap.gcopy(14, 160, 280, 40, 40);
        }
        if (Gvar.var_1580 >= 1) {
            Adap.gmode(2, null, null, null);
            if (Gvar.var_199 == 2) {
                Adap.pos(160, 140 - 10);
                Adap.gcopy(3, 960, 0, 40, 40);
            }
            if (Gvar.var_199 == 4) {
                Adap.pos(180, 160 - 10);
                Adap.gcopy(3, 1000, 0, 40, 40);
            }
            if (Gvar.var_199 == 8) {
                Adap.pos(160, 180 - 10);
                Adap.gcopy(3, 1040, 0, 40, 40);
            }
            if (Gvar.var_199 == 6) {
                Adap.pos(140, 160 - 10);
                Adap.gcopy(3, 1080, 0, 40, 40);
            }
            if (Gvar.var_199 == 1) {
                Adap.pos(180, 140 - 10);
                Adap.gcopy(3, 1120, 0, 40, 40);
            }
            if (Gvar.var_199 == 3) {
                Adap.pos(140, 140 - 10);
                Adap.gcopy(3, 1200, 0, 40, 40);
            }
            if (Gvar.var_199 == 7) {
                Adap.pos(180, 180 - 10);
                Adap.gcopy(3, 1160, 0, 40, 40);
            }
            if (Gvar.var_199 == 9) {
                Adap.pos(140, 180 - 10);
                Adap.gcopy(3, 1240, 0, 40, 40);
            }
        }
        if (Gvar.var_414 >= 1) {
            Adap.pos(159, 160);
            Adap.gmode(2, null, null, null);
            if (Gvar.var_414 >= 0 && Gvar.var_414 < 1) {
                Adap.gcopy(14, 40, 160, 40, 40);
            }
            if (Gvar.var_414 >= 1 && Gvar.var_414 < 2) {
                Adap.gcopy(14, 80, 160, 40, 40);
            }
            if (Gvar.var_414 >= 2 && Gvar.var_414 < 3) {
                Adap.gcopy(14, 120, 160, 40, 40);
            }
            if (Gvar.var_414 >= 3 && Gvar.var_414 < 4) {
                Adap.pos(157, 160);
                Adap.gcopy(14, 120, 160, 40, 40);
            }
            if (Gvar.var_414 >= 4 && Gvar.var_414 < 5) {
                Adap.gcopy(14, 120, 160, 40, 40);
            }
            if (Gvar.var_414 >= 5 && Gvar.var_414 < 20) {
                Adap.pos(157, 160);
                Adap.gcopy(14, 120, 160, 40, 40);
            }
            if (Gvar.var_414 >= 21 && Gvar.var_414 < 22) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
                Adap.gcopy(14, 120, 160, 40, 40);
            }
            if (Gvar.var_414 >= 22 && Gvar.var_414 < 23) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 50);
                Adap.gcopy(14, 120, 160, 40, 40);
            }
        }
        if (Gvar.var_1238 >= 1) {
            if (Gvar.var_1238 >= 22 && Gvar.var_1238 < 35) {
                Adap.pos((Gvar.var_83[Gvar.var_314].Var1 - Gvar.var_66 + 4) * 40, (Gvar.var_83[Gvar.var_314].Var2 - Gvar.var_67 + 4) * 40 - 10);
                Adap.gcopy(3, 800, 360, 40, 40);
            }
            if (Gvar.var_1238 == 35 || Gvar.var_1238 == 37) {
                Adap.pos((Gvar.var_83[Gvar.var_314].Var1 - Gvar.var_66 + 4) * 40, (Gvar.var_83[Gvar.var_314].Var2 - Gvar.var_67 + 4) * 40 - 10);
                Adap.gcopy(3, 760, 360, 40, 40);
            }
            if (Gvar.var_1238 == 36 || Gvar.var_1238 == 38) {
                Adap.pos((Gvar.var_83[Gvar.var_314].Var1 - Gvar.var_66 + 4) * 40, (Gvar.var_83[Gvar.var_314].Var2 - Gvar.var_67 + 4) * 40 - 10);
                Adap.gcopy(3, 720, 360, 40, 40);
            }
            if (Gvar.var_1238 >= 62 && Gvar.var_1238 < 75) {
                Adap.pos((Gvar.var_83[Gvar.var_314].Var1 - Gvar.var_66 + 4) * 40, (Gvar.var_83[Gvar.var_314].Var2 - Gvar.var_67 + 4) * 40 - 10);
                Adap.gcopy(3, 840, 360, 40, 40);
            }
        }
        if (Gvar.var_1581 >= 1) {
            if (Gvar.var_1581 >= 1 && Gvar.var_1581 < 15) {
                Adap.pos((Gvar.var_83[Gvar.var_421].Var1 - Gvar.var_66 + 4) * 40, (Gvar.var_83[Gvar.var_421].Var2 - Gvar.var_67 + 4) * 40 - 10);
                Adap.gcopy(3, 800, 360, 40, 40);
            }
            if (Gvar.var_1581 == 15 || Gvar.var_1581 == 17) {
                Adap.pos((Gvar.var_83[Gvar.var_421].Var1 - Gvar.var_66 + 4) * 40, (Gvar.var_83[Gvar.var_421].Var2 - Gvar.var_67 + 4) * 40 - 10);
                Adap.gcopy(3, 760, 360, 40, 40);
            }
            if (Gvar.var_1581 == 16 || Gvar.var_1581 == 18) {
                Adap.pos((Gvar.var_83[Gvar.var_421].Var1 - Gvar.var_66 + 4) * 40, (Gvar.var_83[Gvar.var_421].Var2 - Gvar.var_67 + 4) * 40 - 10);
                Adap.gcopy(3, 720, 360, 40, 40);
            }
            if (Gvar.var_1581 >= 40 && Gvar.var_1581 < 75) {
                Adap.pos((Gvar.var_83[Gvar.var_421].Var1 - Gvar.var_66 + 4) * 40, (Gvar.var_83[Gvar.var_421].Var2 - Gvar.var_67 + 4) * 40 - 10);
                Adap.gcopy(3, 840, 360, 40, 40);
            }
        }
        if (Gvar.var_1582 >= 1) {
            Adap.gmode(2, null, null, null);
            if (Gvar.var_1582 == 1) {
                Adap.pos(160, 100);
                if (Gvar.var_1153 == 0 || Gvar.var_1153 == 1 || Gvar.var_1153 == 2) {
                    Adap.gcopy(6, 0, 1120, 40, 40);
                }
                if (Gvar.var_1153 == 3 || Gvar.var_1153 == 4 || Gvar.var_1153 == 5) {
                    Adap.gcopy(6, 40, 1120, 40, 40);
                }
                if (Gvar.var_1153 == 6 || Gvar.var_1153 == 7 || Gvar.var_1153 == 8) {
                    Adap.gcopy(6, 80, 1120, 40, 40);
                }
                if (Gvar.var_1153 == 9 || Gvar.var_1153 == 10 || Gvar.var_1153 == 11) {
                    Adap.gcopy(6, 40, 1120, 40, 40);
                }
            }
            if (Gvar.var_1582 == 2) {
                Adap.pos(160, 100);
                Adap.gcopy(15, 0, 1120, 40, 40);
            }
            if (Gvar.var_1582 == 3) {
                Adap.pos(160, 100);
                Adap.gcopy(15, 0, 1120, 40, 40);
            }
            if (Gvar.var_1582 == 4) {
                Adap.pos(160, 110);
                Adap.gcopy(15, 40, 1120, 40, 40);
            }
            if (Gvar.var_1582 == 5) {
                Adap.pos(160, 120);
                Adap.gcopy(15, 40, 1120, 40, 40);
            }
            if (Gvar.var_1582 == 6) {
                Adap.pos(160, 135);
                Adap.gcopy(15, 80, 1120, 40, 40);
            }
            if (Gvar.var_1582 == 7) {
                Adap.pos(160, 130);
                Adap.gcopy(15, 80, 1120, 40, 40);
            }
            if (Gvar.var_1582 == 8) {
                Adap.pos(160, 135);
                Adap.gcopy(15, 80, 1120, 40, 40);
            }
            if (Gvar.var_1582 == 9) {
                Adap.pos(160, 120);
                Adap.gcopy(15, 40, 1120, 40, 40);
            }
            if (Gvar.var_1582 == 10) {
                Adap.pos(160, 110);
                Adap.gcopy(15, 40, 1120, 40, 40);
            }
        }
        if (Gvar.var_458 >= 1) {
            Adap.pos(160, 150);
            Adap.color(0, 0, 0);
    
            Adap.gmode(4, null, null, 150);
            if (Gvar.var_458 == 1 || Gvar.var_458 == 2) {
                Adap.gcopy(3, 760, 280, 40, 40);
            }
            if (Gvar.var_458 == 3 || Gvar.var_458 == 4) {
                Adap.gcopy(3, 800, 280, 40, 40);
            }
            if (Gvar.var_458 == 5 || Gvar.var_458 == 6) {
                Adap.gcopy(3, 840, 280, 40, 40);
            }
        }
        if (Gvar.var_1583 >= 1) {
            Adap.pos(Gvar.var_1584, Gvar.var_1585);
            Adap.color(0, 0, 0);
    
            Adap.gmode(4, null, null, 150);
            if (Gvar.var_1583 == 1 || Gvar.var_1583 == 2) {
                Adap.gcopy(3, 760, 280, 40, 40);
            }
            if (Gvar.var_1583 == 3 || Gvar.var_1583 == 4) {
                Adap.gcopy(3, 800, 280, 40, 40);
            }
            if (Gvar.var_1583 == 5 || Gvar.var_1583 == 6) {
                Adap.gcopy(3, 840, 280, 40, 40);
            }
        }
        if (Gvar.var_1586 >= 1) {
            Adap.pos(Gvar.var_1584, Gvar.var_1585);
            Adap.color(0, 0, 0);
    
            Adap.gmode(4, null, null, 150);
            if (Gvar.var_1586 == 1 || Gvar.var_1586 == 2) {
                Adap.gcopy(3, 760, 280, 40, 40);
            }
            if (Gvar.var_1586 == 3 || Gvar.var_1586 == 4) {
                Adap.gcopy(3, 800, 280, 40, 40);
            }
            if (Gvar.var_1586 == 5 || Gvar.var_1586 == 6) {
                Adap.gcopy(3, 840, 280, 40, 40);
            }
            Adap.pos(Gvar.var_1587, Gvar.var_1588);
            Adap.color(0, 0, 0);
    
            Adap.gmode(4, null, null, 150);
            if (Gvar.var_1586 == 1 || Gvar.var_1586 == 2) {
                Adap.gcopy(3, 760, 280, 40, 40);
            }
            if (Gvar.var_1586 == 3 || Gvar.var_1586 == 4) {
                Adap.gcopy(3, 800, 280, 40, 40);
            }
            if (Gvar.var_1586 == 5 || Gvar.var_1586 == 6) {
                Adap.gcopy(3, 840, 280, 40, 40);
            }
            Adap.pos(Gvar.var_1589, Gvar.var_1590);
            Adap.color(0, 0, 0);
    
            Adap.gmode(4, null, null, 150);
            if (Gvar.var_1586 == 1 || Gvar.var_1586 == 2) {
                Adap.gcopy(3, 760, 280, 40, 40);
            }
            if (Gvar.var_1586 == 3 || Gvar.var_1586 == 4) {
                Adap.gcopy(3, 800, 280, 40, 40);
            }
            if (Gvar.var_1586 == 5 || Gvar.var_1586 == 6) {
                Adap.gcopy(3, 840, 280, 40, 40);
            }
        }
        if (Gvar.var_1591 >= 1 && Gvar.var_1591 < 8) {
            Adap.gmode(2, null, null, null);
            Adap.pos(180, 120);
            if (Gvar.var_1591 == 1 || Gvar.var_1591 == 3 || Gvar.var_1591 == 5 || Gvar.var_1591 == 7) {
                Adap.pos(180, 125);
            }
            Adap.gcopy(3, 600, 80, 40, 40);
        }
        if (Gvar.var_1592 >= 1) {
            Adap.pos(160, 160 - 10);
            if (Gvar.var_1592 == 3 || Gvar.var_1592 == 32) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 20);
                Adap.gcopy(Gvar.bufferid_stand_disc, 200, 280, 40, 40);
            }
            if (Gvar.var_1592 == 4 || Gvar.var_1592 == 31) {
                Adap.color(0, 0, 0);
    
                Adap.gmode(4, null, null, 60);
                Adap.gcopy(Gvar.bufferid_stand_disc, 200, 280, 40, 40);
            }
            if (Gvar.var_1592 == 5 || Gvar.var_1592 == 30) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 80);
                Adap.gcopy(Gvar.bufferid_stand_disc, 200, 280, 40, 40);
            }
            if (Gvar.var_1592 == 6 || Gvar.var_1592 == 29) {
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 120);
                Adap.gcopy(Gvar.bufferid_stand_disc, 200, 280, 40, 40);
            }
            if (Gvar.var_1592 == 7 || Gvar.var_1592 == 28) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 160);
                Adap.gcopy(Gvar.bufferid_stand_disc, 200, 280, 40, 40);
            }
            if (Gvar.var_1592 == 8 || Gvar.var_1592 == 27) {
                Adap.color(0, 0, 0);
        
                Adap.gmode(4, null, null, 200);
                Adap.gcopy(Gvar.bufferid_stand_disc, 200, 280, 40, 40);
            }
            if (Gvar.var_1592 == 9 || Gvar.var_1592 == 26) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 230);
                Adap.gcopy(Gvar.bufferid_stand_disc, 200, 280, 40, 40);
            }
            if (Gvar.var_1592 == 10) {
                Adap.pos(160, 160 - 10);
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
                Adap.gcopy(Gvar.bufferid_stand_disc, 200, 280, 40, 40);
                Adap.pos(160, 180 - 10);
                Adap.gmode(2, null, null, null);
                Adap.gcopy(Gvar.bufferid_stand_disc, 200, 280, 40, 40);
            }
            if (Gvar.var_1592 == 11) {
                Adap.pos(160, 180 - 10);
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
                Adap.gcopy(Gvar.bufferid_stand_disc, 200, 280, 40, 40);
                Adap.pos(160, 200 - 10);
                Adap.gmode(2, null, null, null);
                Adap.gcopy(Gvar.bufferid_stand_disc, 200, 280, 40, 40);
            }
            if (Gvar.var_1592 == 12) {
                Adap.pos(160, 200 - 10);
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
                Adap.gcopy(Gvar.bufferid_stand_disc, 200, 280, 40, 40);
                Adap.pos(140, 200 - 10);
                Adap.gmode(2, null, null, null);
                Adap.gcopy(Gvar.bufferid_stand_disc, 200, 280, 40, 40);
            }
            if (Gvar.var_1592 == 13) {
                Adap.pos(140, 200 - 10);
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
                Adap.gcopy(Gvar.bufferid_stand_disc, 200, 280, 40, 40);
                Adap.pos(120, 180 - 10);
                Adap.gmode(2, null, null, null);
                Adap.gcopy(Gvar.bufferid_stand_disc, 200, 280, 40, 40);
            }
            if (Gvar.var_1592 == 14) {
                Adap.pos(120, 180 - 10);
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
                Adap.gcopy(Gvar.bufferid_stand_disc, 200, 280, 40, 40);
                Adap.pos(120, 160 - 10);
                Adap.gmode(2, null, null, null);
                Adap.gcopy(Gvar.bufferid_stand_disc, 200, 280, 40, 40);
            }
            if (Gvar.var_1592 == 15) {
                Adap.pos(120, 160 - 10);
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
                Adap.gcopy(Gvar.bufferid_stand_disc, 200, 280, 40, 40);
                Adap.pos(120, 140 - 10);
                Adap.gmode(2, null, null, null);
                Adap.gcopy(Gvar.bufferid_stand_disc, 200, 280, 40, 40);
            }
            if (Gvar.var_1592 == 16) {
                Adap.pos(120, 140 - 10);
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
                Adap.gcopy(Gvar.bufferid_stand_disc, 200, 280, 40, 40);
                Adap.pos(140, 120 - 10);
                Adap.gmode(2, null, null, null);
                Adap.gcopy(Gvar.bufferid_stand_disc, 200, 280, 40, 40);
            }
            if (Gvar.var_1592 == 17) {
                Adap.pos(140, 120 - 10);
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
                Adap.gcopy(Gvar.bufferid_stand_disc, 200, 280, 40, 40);
                Adap.pos(160, 120 - 10);
                Adap.gmode(2, null, null, null);
                Adap.gcopy(Gvar.bufferid_stand_disc, 200, 280, 40, 40);
            }
            if (Gvar.var_1592 == 18) {
                Adap.pos(160, 120 - 10);
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
                Adap.gcopy(Gvar.bufferid_stand_disc, 200, 280, 40, 40);
                Adap.pos(180, 120 - 10);
                Adap.gmode(2, null, null, null);
                Adap.gcopy(Gvar.bufferid_stand_disc, 200, 280, 40, 40);
            }
            if (Gvar.var_1592 == 19) {
                Adap.pos(180, 120 - 10);
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
                Adap.gcopy(Gvar.bufferid_stand_disc, 200, 280, 40, 40);
                Adap.pos(200, 140 - 10);
                Adap.gmode(2, null, null, null);
                Adap.gcopy(Gvar.bufferid_stand_disc, 200, 280, 40, 40);
            }
            if (Gvar.var_1592 == 20) {
                Adap.pos(200, 140 - 10);
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
                Adap.gcopy(Gvar.bufferid_stand_disc, 200, 280, 40, 40);
                Adap.pos(200, 160 - 10);
                Adap.gmode(2, null, null, null);
                Adap.gcopy(Gvar.bufferid_stand_disc, 200, 280, 40, 40);
            }
            if (Gvar.var_1592 == 21) {
                Adap.pos(200, 160 - 10);
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
                Adap.gcopy(Gvar.bufferid_stand_disc, 200, 280, 40, 40);
                Adap.pos(200, 180 - 10);
                Adap.gmode(2, null, null, null);
                Adap.gcopy(Gvar.bufferid_stand_disc, 200, 280, 40, 40);
            }
            if (Gvar.var_1592 == 22) {
                Adap.pos(200, 180 - 10);
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
                Adap.gcopy(Gvar.bufferid_stand_disc, 200, 280, 40, 40);
                Adap.pos(180, 200 - 10);
                Adap.gmode(2, null, null, null);
                Adap.gcopy(Gvar.bufferid_stand_disc, 200, 280, 40, 40);
            }
            if (Gvar.var_1592 == 23) {
                Adap.pos(180, 200 - 10);
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
                Adap.gcopy(Gvar.bufferid_stand_disc, 200, 280, 40, 40);
                Adap.pos(160, 200 - 10);
                Adap.gmode(2, null, null, null);
                Adap.gcopy(Gvar.bufferid_stand_disc, 200, 280, 40, 40);
            }
            if (Gvar.var_1592 == 24) {
                Adap.pos(160, 200 - 10);
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
                Adap.gcopy(Gvar.bufferid_stand_disc, 200, 280, 40, 40);
                Adap.pos(160, 180 - 10);
                Adap.gmode(2, null, null, null);
                Adap.gcopy(Gvar.bufferid_stand_disc, 200, 280, 40, 40);
            }
            if (Gvar.var_1592 == 25) {
                Adap.pos(160, 180 - 10);
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
                Adap.gcopy(Gvar.bufferid_stand_disc, 200, 280, 40, 40);
                Adap.pos(160, 160 - 10);
                Adap.gmode(2, null, null, null);
                Adap.gcopy(Gvar.bufferid_stand_disc, 200, 280, 40, 40);
            }
        }
        if (Gvar.var_1593 >= 1) {
            Adap.pos(160, 160);
            if (Gvar.var_1593 >= 0 && Gvar.var_1593 < 2) {
                Adap.gcopy(14, 40, 0, 40, 40);
            }
            if (Gvar.var_1593 >= 2 && Gvar.var_1593 < 4) {
                Adap.gcopy(14, 80, 0, 40, 40);
            }
            if (Gvar.var_1593 >= 4 && Gvar.var_1593 < 6) {
                Adap.gcopy(14, 120, 0, 40, 40);
            }
            if (Gvar.var_1593 >= 6 && Gvar.var_1593 < 8) {
                Adap.gcopy(14, 80, 0, 40, 40);
            }
            if (Gvar.var_1593 >= 8 && Gvar.var_1593 < 10) {
                Adap.gcopy(14, 40, 0, 40, 40);
            }
        }
        if (Gvar.var_1594 >= 1) {
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                Gvar.var_1595 = Adap.rnd(680);
                Gvar.var_1596 = Adap.rnd(280);
                Gvar.var_1597 = Adap.rnd(100);
                Gvar.var_1597 = Gvar.var_1597 + 100;
                Adap.color(80, 80, 80);
                Adap.line(Gvar.var_1595, Gvar.var_1596, Gvar.var_1595, Gvar.var_1596 + Gvar.var_1597);
            }
        }
        if (Gvar.var_1598 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos(170, 150);
            if (Gvar.var_1598 >= 1 && Gvar.var_1598 < 1) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
                Adap.gcopy(11, 0, 1200, 40, 40);
            }
            if (Gvar.var_1598 >= 1 && Gvar.var_1598 < 2) {
                Adap.gcopy(11, 0, 1200, 40, 40);
            }
            if (Gvar.var_1598 >= 2 && Gvar.var_1598 < 3) {
                Adap.gcopy(11, 40, 1200, 40, 40);
            }
            if (Gvar.var_1598 >= 3 && Gvar.var_1598 < 4) {
                Adap.gcopy(11, 80, 1200, 40, 40);
            }
            if (Gvar.var_1598 >= 4 && Gvar.var_1598 < 5) {
                Adap.gcopy(11, 80, 1200, 40, 40);
            }
            if (Gvar.var_1598 >= 5 && Gvar.var_1598 < 15) {
                Adap.gcopy(11, 80, 1200, 40, 40);
            }
            if (Gvar.var_1598 >= 16 && Gvar.var_1598 < 18) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
                Adap.gcopy(11, 80, 1200, 40, 40);
            }
            if (Gvar.var_1598 >= 18 && Gvar.var_1598 < 20) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 50);
                Adap.gcopy(11, 80, 1200, 40, 40);
            }
        }
        if (Gvar.var_1599 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos(170, 150);
            if (Gvar.var_1599 >= 1 && Gvar.var_1599 < 1) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
                Adap.gcopy(Gvar.bufferid_stand_disc, 0, 1480, 40, 40);
            }
            if (Gvar.var_1599 >= 1 && Gvar.var_1599 < 2) {
                Adap.gcopy(Gvar.bufferid_stand_disc, 0, 1480, 40, 40);
            }
            if (Gvar.var_1599 >= 2 && Gvar.var_1599 < 3) {
                Adap.gcopy(Gvar.bufferid_stand_disc, 40, 1480, 40, 40);
            }
            if (Gvar.var_1599 >= 3 && Gvar.var_1599 < 4) {
                Adap.gcopy(Gvar.bufferid_stand_disc, 80, 1480, 40, 40);
            }
            if (Gvar.var_1599 >= 4 && Gvar.var_1599 < 5) {
                Adap.gcopy(Gvar.bufferid_stand_disc, 80, 1480, 40, 40);
            }
            if (Gvar.var_1599 >= 5 && Gvar.var_1599 < 15) {
                Adap.gcopy(Gvar.bufferid_stand_disc, 80, 1480, 40, 40);
            }
            if (Gvar.var_1599 >= 16 && Gvar.var_1599 < 18) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
                Adap.gcopy(Gvar.bufferid_stand_disc, 80, 1480, 40, 40);
            }
            if (Gvar.var_1599 >= 18 && Gvar.var_1599 < 20) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 50);
                Adap.gcopy(Gvar.bufferid_stand_disc, 80, 1480, 40, 40);
            }
        }
        if (Gvar.var_1600 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos(170, 150);
            if (Gvar.var_1600 >= 1 && Gvar.var_1600 < 1) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
                Adap.gcopy(Gvar.bufferid_stand_disc, 0, 440, 40, 40);
            }
            if (Gvar.var_1600 >= 1 && Gvar.var_1600 < 2) {
                Adap.gcopy(Gvar.bufferid_stand_disc, 0, 440, 40, 40);
            }
            if (Gvar.var_1600 >= 2 && Gvar.var_1600 < 3) {
                Adap.gcopy(Gvar.bufferid_stand_disc, 40, 440, 40, 40);
            }
            if (Gvar.var_1600 >= 3 && Gvar.var_1600 < 4) {
                Adap.gcopy(Gvar.bufferid_stand_disc, 80, 440, 40, 40);
            }
            if (Gvar.var_1600 >= 4 && Gvar.var_1600 < 5) {
                Adap.gcopy(Gvar.bufferid_stand_disc, 80, 440, 40, 40);
            }
            if (Gvar.var_1600 >= 5 && Gvar.var_1600 < 15) {
                Adap.gcopy(Gvar.bufferid_stand_disc, 80, 440, 40, 40);
            }
            if (Gvar.var_1600 >= 16 && Gvar.var_1600 < 18) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
                Adap.gcopy(Gvar.bufferid_stand_disc, 80, 440, 40, 40);
            }
            if (Gvar.var_1600 >= 18 && Gvar.var_1600 < 20) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 50);
                Adap.gcopy(Gvar.bufferid_stand_disc, 80, 440, 40, 40);
            }
        }
        if (Gvar.var_1601 >= 1) {
            Gvar.var_1602 = 250 - Gvar.var_1601;
            Adap.color(0, 0, 0);
            Adap.gmode(4, null, null, Gvar.var_1602);
            Adap.pos(200, 100 - Gvar.var_1601);
            Adap.gcopy(3, 920, 80, 40, 40);
            Adap.pos(120, 180 - Gvar.var_1601);
            Adap.gcopy(3, 960, 80, 40, 40);
            Adap.pos(200, 200 - Gvar.var_1601);
            Adap.gcopy(3, 1000, 80, 40, 40);
            Adap.pos(230, 220 - Gvar.var_1601);
            Adap.gcopy(3, 1040, 80, 40, 40);
            Adap.pos(160, 160 - Gvar.var_1601);
            Adap.gcopy(3, 1080, 80, 40, 40);
            Adap.gmode(2, null, null, null);
            Adap.pos(0, 0);
            Adap.gcopy(8, 0, 100, 340, 340);
        }
        if (Gvar.var_1603 >= 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos((Gvar.var_455 - Gvar.var_66 + 4) * 40, (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10);
            Adap.gcopy(3, 720, 520, 40, 40);
        }
        if (Gvar.var_1604 >= 1) {
            if (Gvar.var_1604 == 0 || Gvar.var_1604 == 2 || Gvar.var_1604 == 4 || Gvar.var_1604 == 6 || Gvar.var_1604 == 8 || Gvar.var_1604 == 10) {
                Adap.pos(Gvar.var_1605 + 5, Gvar.var_1606);
            }
            if (Gvar.var_1604 == 1 || Gvar.var_1604 == 3 || Gvar.var_1604 == 5 || Gvar.var_1604 == 7 || Gvar.var_1604 == 9 || Gvar.var_1604 == 11) {
                Adap.pos(Gvar.var_1605, Gvar.var_1606);
            }
            Adap.gmode(2, null, null, null);
            Adap.gcopy(3, 840, 80, 40, 40);
        }
        return;
}

export {func354X}
