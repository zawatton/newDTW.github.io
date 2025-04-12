import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func567(this: any) {
        Adap.dbgprt(567);
        if (Gvar.var_1642 == 1) {
            if (Gvar.var_83[Gvar.var_1641].Var0 < 50) {
                Gvar.var_965 = 6; // Adap.buffer(6)は"img_enemy1a.gif" // Adap.buffer(6) は "img_enemy1a.gif"
                Gvar.var_1826 = 15; // Adap.buffer(15) は "img_enemy1b.gif"
                Gvar.var_966 = Gvar.var_83[Gvar.var_1641].Var0;
            }
            if (Gvar.var_83[Gvar.var_1641].Var0 >= 50 && Gvar.var_83[Gvar.var_1641].Var0 < 100) {
                Gvar.var_965 = 21; // Adap.buffer(21)は"img_enemy2a.gif" // Adap.buffer(21) は "img_enemy2a.gif"
                Gvar.var_1826 = 22; // Adap.buffer(22) は "img_enemy2b.gif"
                Gvar.var_966 = Gvar.var_83[Gvar.var_1641].Var0 - 50;
            }
            if (Gvar.var_83[Gvar.var_1641].Var0 >= 100 && Gvar.var_83[Gvar.var_1641].Var0 < 150) {
                Gvar.var_965 = 27; // Adap.buffer(27)は"img_enemy3a.gif" // Adap.buffer(27) は "img_enemy3a.gif"
                Gvar.var_1826 = 28; // Adap.buffer(28) は "img_enemy3b.gif"
                Gvar.var_966 = Gvar.var_83[Gvar.var_1641].Var0 - 100;
            }
            if (Gvar.var_83[Gvar.var_1641].Var0 >= 150 && Gvar.var_83[Gvar.var_1641].Var0 < 200) {
                Gvar.var_965 = 13; // Adap.buffer(13)は"img_enemy4a.gif" // Adap.buffer(13) は "img_enemy4a.gif"
                Gvar.var_1826 = 20; // Adap.buffer(20) は "img_enemy4b.gif"
                Gvar.var_966 = Gvar.var_83[Gvar.var_1641].Var0 - 150;
            }
            if (Gvar.var_83[Gvar.var_1641].Var0 == 97 && Gvar.var_83[Gvar.var_1641].Var31 >= 11 && Gvar.var_83[Gvar.var_1641].Var3 >= 1) {
                if (Gvar.var_83[Gvar.var_1641].Var31 < 50) {
                    Gvar.var_965 = 6; // Adap.buffer(6)は"img_enemy1a.gif"
                    Gvar.var_1826 = 15;
                    Gvar.var_966 = Gvar.var_83[Gvar.var_1641].Var31;
                }
                if (Gvar.var_83[Gvar.var_1641].Var31 >= 50 && Gvar.var_83[Gvar.var_1641].Var31 < 100) {
                    Gvar.var_965 = 21; // Adap.buffer(21)は"img_enemy2a.gif"
                    Gvar.var_1826 = 22;
                    Gvar.var_966 = Gvar.var_83[Gvar.var_1641].Var31 - 50;
                }
                if (Gvar.var_83[Gvar.var_1641].Var31 >= 100 && Gvar.var_83[Gvar.var_1641].Var31 < 150) {
                    Gvar.var_965 = 27; // Adap.buffer(27)は"img_enemy3a.gif"
                    Gvar.var_1826 = 28;
                    Gvar.var_966 = Gvar.var_83[Gvar.var_1641].Var31 - 100;
                }
                if (Gvar.var_83[Gvar.var_1641].Var31 >= 150 && Gvar.var_83[Gvar.var_1641].Var31 < 200) {
                    Gvar.var_965 = 13; // Adap.buffer(13)は"img_enemy4a.gif"
                    Gvar.var_1826 = 20;
                    Gvar.var_966 = Gvar.var_83[Gvar.var_1641].Var31 - 150;
                }
            }
            if (Gvar.var_1161 == 1) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
                if (Gvar.var_83[Gvar.var_1641].Var30 >= 1 && Gvar.var_119 == 0 && Gvar.var_83[Gvar.var_1641].Var0 != 118) {
                    return;
                }
                if (Gvar.var_83[Gvar.var_1641].Var30 >= 1 && Gvar.var_119 == 0 && Gvar.var_83[Gvar.var_1641].Var0 == 118 && Gvar.var_83[Gvar.var_1641].Var21 == 0) {
                    return;
                }
                if (Gvar.var_83[Gvar.var_1641].Var30 >= 1 && Gvar.var_119 == 0 && Gvar.var_83[Gvar.var_1641].Var0 == 118 && Gvar.var_83[Gvar.var_1641].Var21 == 1 && Gvar.var_411 < 6) {
                    return;
                }
                if (Gvar.var_83[Gvar.var_1641].Var0 == 50) {
                    return;
                }
                if (Gvar.var_83[Gvar.var_1641].Var0 == 115 || Gvar.var_83[Gvar.var_1641].Var0 == 43 || Gvar.var_83[Gvar.var_1641].Var0 == 19 || Gvar.var_83[Gvar.var_1641].Var0 == 90 || Gvar.var_83[Gvar.var_1641].Var0 == 23 || Gvar.var_83[Gvar.var_1641].Var0 == 27 || Gvar.var_83[Gvar.var_1641].Var0 == 170) {
                    return;
                }
                if (Gvar.var_83[Gvar.var_1641].Var8 == 1 && Gvar.var_1238 >= 22 && Gvar.var_1238 < 75) {
                    return;
                }
                if (Gvar.var_83[Gvar.var_1641].Var11 >= 1) {
                    return;
                }
                if (Gvar.var_83[Gvar.var_1641].Var0 == 13 || Gvar.var_83[Gvar.var_1641].Var0 == 26 || Gvar.var_83[Gvar.var_1641].Var0 == 74 || Gvar.var_83[Gvar.var_1641].Var0 == 75 || Gvar.var_83[Gvar.var_1641].Var0 == 40 || Gvar.var_83[Gvar.var_1641].Var0 == 54 || Gvar.var_83[Gvar.var_1641].Var0 == 151 || Gvar.var_83[Gvar.var_1641].Var0 == 172) {
                    Adap.gcopy(3, 1440, 0, 40, 45);
                    return;
                }
                if (Gvar.var_83[Gvar.var_1641].Var0 == 7) {
                    Adap.gcopy(3, 1280, 80, 40, 45);
                    return;
                }
                if (Gvar.var_83[Gvar.var_1641].Var0 == 17 || Gvar.var_83[Gvar.var_1641].Var0 == 37 || Gvar.var_83[Gvar.var_1641].Var0 == 166) {
                    Adap.gcopy(3, 1400, 0, 40, 40);
                    return;
                }
                if (Gvar.var_83[Gvar.var_1641].Var0 == 118) {
                    if (Gvar.var_83[Gvar.var_1641].Var21 == 0) {
                        Adap.gcopy(3, 1560, 0, 40, 45); // "img_mychara.gif" の1行目の一番右側にあるディアボロの影(黒い丸)
                    }
                    if (Gvar.var_83[Gvar.var_1641].Var21 == 1 && Gvar.var_411 < 6) {
                        Adap.gcopy(3, 1560, 0, 40, 45); // "img_mychara.gif" の1行目の一番右側にあるディアボロの影(黒い丸)
                    }
                    if (Gvar.var_83[Gvar.var_1641].Var21 == 1 && Gvar.var_411 >= 6 && Gvar.var_411 <= 7) {
                        Adap.gmode(2, null, null, null);
                        Adap.gcopy(3, 1400, 80, 40, 45);
                    }
                    if (Gvar.var_83[Gvar.var_1641].Var21 == 1 && Gvar.var_411 == 8) {
                        Adap.color(0, 0, 0);
                
                        Adap.gmode(4, null, null, 150);
                        Adap.gcopy(3, 1400, 80, 40, 45);
                    }
                    return;
                }
                Adap.gcopy(3, 1560, 0, 40, 45); // "img_mychara.gif" の1行目の一番右側にあるディアボロの影(黒い丸)
                return;
            }
            if (Gvar.var_83[Gvar.var_1641].Var30 >= 1 && Gvar.var_83[Gvar.var_1641].Var8 == 0) {
                if (Gvar.var_83[Gvar.var_1641].Var0 != 85 && Gvar.var_119 == 0 && Gvar.sympathy_id != 166) {
                    return;
                }
                if (Gvar.var_83[Gvar.var_1641].Var0 == 85 && Gvar.var_140 == 0 && Gvar.var_119 == 0 && Gvar.equip_disc[320] == 0 && Gvar.sympathy_id != 166) {
                    return;
                }
            }
            if (Gvar.var_83[Gvar.var_1641].Var11 == 1) {
                return;
            }
            Adap.gmode(2, null, null, null);
            if (Gvar.var_83[Gvar.var_1641].Var30 >= 1) {
                Adap.color(0, 0, 0);

                Adap.gmode(4, null, null, 100);
            }
            if (Gvar.var_83[Gvar.var_1641].Var11 == 2) {
                Gvar.var_764 = Gvar.var_83[Gvar.var_1641].Var35 - Gvar.var_66 + 4;
                Gvar.var_763 = Gvar.var_83[Gvar.var_1641].Var36 - Gvar.var_67 + 4;
                if (Gvar.var_199 == 4) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10);
                }
                if (Gvar.var_199 == 6) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10);
                }
                if (Gvar.var_199 == 8) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - Gvar.var_2577 - 10);
                }
                if (Gvar.var_199 == 2) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 + Gvar.var_2577 - 10);
                }
                if (Gvar.var_199 == 5) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 10);
                }
                if (Gvar.var_199 == 1) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 3) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 7) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577);
                }
                if (Gvar.var_199 == 9) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577);
                }
                if (Gvar.var_217 == 1) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 10);
                }
                if (Gvar.var_409 == 1) {
                    Adap.gcopy(Gvar.var_1826, 960, Gvar.var_966 * 40, 40, 40);
                }
                if (Gvar.var_409 == 2) {
                    Adap.gcopy(Gvar.var_1826, 1040, Gvar.var_966 * 40, 40, 40);
                }
                if (Gvar.var_409 == 3) {
                    Adap.gcopy(Gvar.var_1826, 1080, Gvar.var_966 * 40, 40, 40);
                }
                return;
            }
            if (Gvar.var_83[Gvar.var_1641].Var21 == 1) {
                if (Gvar.var_411 == 0) {
                    return;
                }
                if (Gvar.var_411 == 1) {
                    Adap.gcopy(Gvar.var_1826, 960, Gvar.var_966 * 40, 40, 40);
                }
                if (Gvar.var_411 == 2) {
                    Adap.gcopy(Gvar.var_1826, 1000, Gvar.var_966 * 40, 40, 40);
                }
                if (Gvar.var_411 == 3) {
                    Adap.gcopy(Gvar.var_1826, 1040, Gvar.var_966 * 40, 40, 40);
                }
                if (Gvar.var_411 == 4) {
                    Adap.gcopy(Gvar.var_1826, 1080, Gvar.var_966 * 40, 40, 40);
                }
                if (Gvar.var_411 == 5) {
                    Adap.gcopy(Gvar.var_1826, 1120, Gvar.var_966 * 40, 40, 40);
                }
                if (Gvar.var_411 == 6) {
                    Adap.gcopy(Gvar.var_1826, 1160, Gvar.var_966 * 40, 40, 40);
                }
                if (Gvar.var_411 == 7) {
                    Adap.gcopy(Gvar.var_1826, 1200, Gvar.var_966 * 40, 40, 40);
                }
                if (Gvar.var_411 == 8) {
                    Adap.gcopy(Gvar.var_1826, 1240, Gvar.var_966 * 40, 40, 40);
                }
                await Func.func568();
                return;
            }
            if (Gvar.var_83[Gvar.var_1641].Var8 == 1) {
                if (Gvar.var_83[Gvar.var_1641].Var5 == 6) {
                    Adap.gcopy(Gvar.var_965, 1080, Gvar.var_966 * 40, 40, 40);
                }
                if (Gvar.var_83[Gvar.var_1641].Var5 == 4) {
                    Adap.gcopy(Gvar.var_965, 1000, Gvar.var_966 * 40, 40, 40);
                }
                if (Gvar.var_83[Gvar.var_1641].Var5 == 2) {
                    Adap.gcopy(Gvar.var_965, 960, Gvar.var_966 * 40, 40, 40);
                }
                if (Gvar.var_83[Gvar.var_1641].Var5 == 8) {
                    Adap.gcopy(Gvar.var_965, 1040, Gvar.var_966 * 40, 40, 40);
                }
                if (Gvar.var_83[Gvar.var_1641].Var5 == 9) {
                    Adap.gcopy(Gvar.var_965, 1240, Gvar.var_966 * 40, 40, 40);
                }
                if (Gvar.var_83[Gvar.var_1641].Var5 == 7) {
                    Adap.gcopy(Gvar.var_965, 1160, Gvar.var_966 * 40, 40, 40);
                }
                if (Gvar.var_83[Gvar.var_1641].Var5 == 3) {
                    Adap.gcopy(Gvar.var_965, 1200, Gvar.var_966 * 40, 40, 40);
                }
                if (Gvar.var_83[Gvar.var_1641].Var5 == 1) {
                    Adap.gcopy(Gvar.var_965, 1120, Gvar.var_966 * 40, 40, 40);
                }
                await Func.func568();
                return;
            }
            if (Gvar.var_83[Gvar.var_1641].Var8 == 2) {
                if (Gvar.var_83[Gvar.var_1641].Var5 == 6) {
                    Adap.gcopy(Gvar.var_965, 1080, Gvar.var_966 * 40, 40, 40);
                }
                if (Gvar.var_83[Gvar.var_1641].Var5 == 4) {
                    Adap.gcopy(Gvar.var_965, 1000, Gvar.var_966 * 40, 40, 40);
                }
                if (Gvar.var_83[Gvar.var_1641].Var5 == 2) {
                    Adap.gcopy(Gvar.var_965, 960, Gvar.var_966 * 40, 40, 40);
                }
                if (Gvar.var_83[Gvar.var_1641].Var5 == 8) {
                    Adap.gcopy(Gvar.var_965, 1040, Gvar.var_966 * 40, 40, 40);
                }
                if (Gvar.var_83[Gvar.var_1641].Var5 == 9) {
                    Adap.gcopy(Gvar.var_965, 1240, Gvar.var_966 * 40, 40, 40);
                }
                if (Gvar.var_83[Gvar.var_1641].Var5 == 7) {
                    Adap.gcopy(Gvar.var_965, 1160, Gvar.var_966 * 40, 40, 40);
                }
                if (Gvar.var_83[Gvar.var_1641].Var5 == 3) {
                    Adap.gcopy(Gvar.var_965, 1200, Gvar.var_966 * 40, 40, 40);
                }
                if (Gvar.var_83[Gvar.var_1641].Var5 == 1) {
                    Adap.gcopy(Gvar.var_965, 1120, Gvar.var_966 * 40, 40, 40);
                }
                await Func.func568();
                return;
            }
            if (Gvar.var_83[Gvar.var_1641].Var12 >= 1) {
                if (Gvar.var_1640 == 8) {
                    Adap.gcopy(Gvar.var_965, 280, Gvar.var_966 * 40, 40, 40);
                }
                if (Gvar.var_1640 == 2) {
                    Adap.gcopy(Gvar.var_965, 40, Gvar.var_966 * 40, 40, 40);
                }
                if (Gvar.var_1640 == 4) {
                    Adap.gcopy(Gvar.var_965, 160, Gvar.var_966 * 40, 40, 40);
                }
                if (Gvar.var_1640 == 6) {
                    Adap.gcopy(Gvar.var_965, 400, Gvar.var_966 * 40, 40, 40);
                }
                if (Gvar.var_1640 == 1) {
                    Adap.gcopy(Gvar.var_965, 520, Gvar.var_966 * 40, 40, 40);
                }
                if (Gvar.var_1640 == 3) {
                    Adap.gcopy(Gvar.var_965, 760, Gvar.var_966 * 40, 40, 40);
                }
                if (Gvar.var_1640 == 7) {
                    Adap.gcopy(Gvar.var_965, 640, Gvar.var_966 * 40, 40, 40);
                }
                if (Gvar.var_1640 == 9) {
                    Adap.gcopy(Gvar.var_965, 880, Gvar.var_966 * 40, 40, 40);
                }
                if (Gvar.var_83[Gvar.var_1641].Var12 == 99 || Gvar.var_83[Gvar.var_1641].Var12 == 1) {
                    if (Gvar.var_1164 >= 0 && Gvar.var_1164 < 2) {
                        Adap.gcopy(3, 360, 320, 40, 40);
                    }
                    if (Gvar.var_1164 >= 2 && Gvar.var_1164 < 4) {
                        Adap.gcopy(3, 400, 320, 40, 40);
                    }
                    if (Gvar.var_1164 >= 4 && Gvar.var_1164 < 6) {
                        Adap.gcopy(3, 440, 320, 40, 40);
                    }
                }
                if (Gvar.var_83[Gvar.var_1641].Var12 != 99 && Gvar.var_83[Gvar.var_1641].Var12 != 1) {
                    if (Gvar.var_1164 >= 0 && Gvar.var_1164 < 2) {
                        Adap.gcopy(3, 480, 320, 40, 40);
                    }
                    if (Gvar.var_1164 >= 2 && Gvar.var_1164 < 4) {
                        Adap.gcopy(3, 520, 320, 40, 40);
                    }
                    if (Gvar.var_1164 >= 4 && Gvar.var_1164 < 6) {
                        Adap.gcopy(3, 560, 320, 40, 40);
                    }
                }
                await Func.func568();
                return;
            }
            if (Gvar.var_83[Gvar.var_1641].Var13 >= 1) {
                if (Gvar.var_1640 == 8) {
                    Adap.gcopy(Gvar.var_965, 280, Gvar.var_966 * 40, 40, 40);
                }
                if (Gvar.var_1640 == 2) {
                    Adap.gcopy(Gvar.var_965, 40, Gvar.var_966 * 40, 40, 40);
                }
                if (Gvar.var_1640 == 4) {
                    Adap.gcopy(Gvar.var_965, 160, Gvar.var_966 * 40, 40, 40);
                }
                if (Gvar.var_1640 == 6) {
                    Adap.gcopy(Gvar.var_965, 400, Gvar.var_966 * 40, 40, 40);
                }
                if (Gvar.var_1640 == 1) {
                    Adap.gcopy(Gvar.var_965, 520, Gvar.var_966 * 40, 40, 40);
                }
                if (Gvar.var_1640 == 3) {
                    Adap.gcopy(Gvar.var_965, 760, Gvar.var_966 * 40, 40, 40);
                }
                if (Gvar.var_1640 == 7) {
                    Adap.gcopy(Gvar.var_965, 640, Gvar.var_966 * 40, 40, 40);
                }
                if (Gvar.var_1640 == 9) {
                    Adap.gcopy(Gvar.var_965, 880, Gvar.var_966 * 40, 40, 40);
                }
                await Func.func568();
                return;
            }
            Gvar.var_2593 = 0;
            Gvar.var_2594 = 1;
            Gvar.var_2595 = 2;
            Gvar.var_2596 = 3;
            Gvar.var_2597 = 4;
            Gvar.var_2598 = 5;
            Gvar.var_2599 = 6;
            Gvar.var_2600 = 7;
            Gvar.var_2601 = 8;
            Gvar.var_2602 = 9;
            Gvar.var_2603 = 10;
            Gvar.var_2604 = 11;
            if (Gvar.var_83[Gvar.var_1641].Var15 >= 1) {
                Gvar.var_2593 = 0;
                Gvar.var_2594 = 1;
                Gvar.var_2595 = 6;
                Gvar.var_2596 = 7;
                Gvar.var_2597 = 2;
                Gvar.var_2598 = 5;
                Gvar.var_2599 = 3;
                Gvar.var_2600 = 4;
                Gvar.var_2601 = 9;
                Gvar.var_2602 = 10;
                Gvar.var_2603 = 8;
                Gvar.var_2604 = 11;
            }
            // Gvar.enemy_list = 10 ノートリアスBIG
            if (Gvar.var_83[Gvar.var_1641].Var0 == 10 && Gvar.var_83[Gvar.var_1641].Var14 == 0 && Gvar.var_83[Gvar.var_1641].Var20 == 0 && Gvar.var_157 != 0) {
                Gvar.var_2593 = 0;
                Gvar.var_2594 = 1;
                Gvar.var_2595 = 6;
                Gvar.var_2596 = 7;
                Gvar.var_2597 = 2;
                Gvar.var_2598 = 5;
                Gvar.var_2599 = 3;
                Gvar.var_2600 = 4;
                Gvar.var_2601 = 9;
                Gvar.var_2602 = 10;
                Gvar.var_2603 = 8;
                Gvar.var_2604 = 11;
            }
            // Gvar.enemy_list = 17 シアハートアタック、Gvar.enemy_list = 29 グリーン・ディ、Gvar.enemy_list = 42 アパッチ、Gvar.enemy_list = 48 エアロスミス、Gvar.enemy_list = 60 ザ・ニュー神父、Gvar.enemy_list = 108 イギー、Gvar.enemy_list = 118 クリーム、Gvar.enemy_list = 96 感電エンポリオ
            if (Gvar.var_83[Gvar.var_1641].Var0 == 17 || Gvar.var_83[Gvar.var_1641].Var0 == 29 || Gvar.var_83[Gvar.var_1641].Var0 == 42 || Gvar.var_83[Gvar.var_1641].Var0 == 48 || Gvar.var_83[Gvar.var_1641].Var0 == 60 || Gvar.var_83[Gvar.var_1641].Var0 == 108 || Gvar.var_83[Gvar.var_1641].Var0 == 118 || Gvar.var_83[Gvar.var_1641].Var0 == 96) {
                Gvar.var_2593 = 0;
                Gvar.var_2594 = 1;
                Gvar.var_2595 = 6;
                Gvar.var_2596 = 7;
                Gvar.var_2597 = 2;
                Gvar.var_2598 = 3;
                Gvar.var_2599 = 4;
                Gvar.var_2600 = 5;
                Gvar.var_2601 = 10;
                Gvar.var_2602 = 11;
                Gvar.var_2603 = 8;
                Gvar.var_2604 = 9;
                if (Gvar.var_83[Gvar.var_1641].Var15 >= 1) {
                    Gvar.var_2593 = 0;
                    Gvar.var_2594 = 3;
                    Gvar.var_2595 = 6;
                    Gvar.var_2596 = 9;
                    Gvar.var_2597 = 1;
                    Gvar.var_2598 = 4;
                    Gvar.var_2599 = 2;
                    Gvar.var_2600 = 5;
                    Gvar.var_2601 = 8;
                    Gvar.var_2602 = 11;
                    Gvar.var_2603 = 7;
                    Gvar.var_2604 = 10;
                }
            }
            // Gvar.enemy_list = 88 ドノヴァン、Gvar.enemy_list = 115 アクアネックレス、Gvar.enemy_list = 170 カタツムリ
            if (Gvar.var_83[Gvar.var_1641].Var0 == 88 || Gvar.var_83[Gvar.var_1641].Var0 == 115 || Gvar.var_83[Gvar.var_1641].Var0 == 170) {
                Gvar.var_2593 = 0;
                Gvar.var_2594 = 1;
                Gvar.var_2595 = 2;
                Gvar.var_2596 = 3;
                Gvar.var_2597 = 4;
                Gvar.var_2598 = 5;
                Gvar.var_2599 = 8;
                Gvar.var_2600 = 9;
                Gvar.var_2601 = 10;
                Gvar.var_2602 = 11;
                Gvar.var_2603 = 6;
                Gvar.var_2604 = 7;
                if (Gvar.var_83[Gvar.var_1641].Var15 >= 1) {
                    Gvar.var_2593 = 0;
                    Gvar.var_2594 = 1;
                    Gvar.var_2595 = 6;
                    Gvar.var_2596 = 7;
                    Gvar.var_2597 = 2;
                    Gvar.var_2598 = 3;
                    Gvar.var_2599 = 4;
                    Gvar.var_2600 = 5;
                    Gvar.var_2601 = 10;
                    Gvar.var_2602 = 11;
                    Gvar.var_2603 = 8;
                    Gvar.var_2604 = 9;
                }
            }
            Gvar.var_2605 = Gvar.var_83[Gvar.var_1641].Var32;
            if (Gvar.var_83[Gvar.var_1641].Var32 == 99) {
                Gvar.var_2605 = 0;
            }
            if (Gvar.var_83[Gvar.var_1641].Var7 == 0) {
                // 敵キャラアイコン上方向 240, 280, 320座標からそれぞれ40mm角
                if (Gvar.var_1640 == 8) {
                    if (Gvar.var_2605 == Gvar.var_2593 || Gvar.var_2605 == Gvar.var_2594 || Gvar.var_2605 == Gvar.var_2595 || Gvar.var_2605 == Gvar.var_2596) {
                        Adap.gcopy(Gvar.var_965, 240, Gvar.var_966 * 40, 40, 40);
                    }
                    if (Gvar.var_2605 == Gvar.var_2597 || Gvar.var_2605 == Gvar.var_2598 || Gvar.var_2605 == Gvar.var_2603 || Gvar.var_2605 == Gvar.var_2604) {
                        Adap.gcopy(Gvar.var_965, 280, Gvar.var_966 * 40, 40, 40);
                    }
                    if (Gvar.var_2605 == Gvar.var_2599 || Gvar.var_2605 == Gvar.var_2600 || Gvar.var_2605 == Gvar.var_2601 || Gvar.var_2605 == Gvar.var_2602) {
                        Adap.gcopy(Gvar.var_965, 320, Gvar.var_966 * 40, 40, 40);
                    }
                }
                // 敵キャラアイコン正面 0, 40, 80座標からそれぞれ40mm角
                if (Gvar.var_1640 == 2) {
                    if (Gvar.var_2605 == Gvar.var_2593 || Gvar.var_2605 == Gvar.var_2594 || Gvar.var_2605 == Gvar.var_2595 || Gvar.var_2605 == Gvar.var_2596) {
                        Adap.gcopy(Gvar.var_965, 0, Gvar.var_966 * 40, 40, 40);
                    }
                    if (Gvar.var_2605 == Gvar.var_2597 || Gvar.var_2605 == Gvar.var_2598 || Gvar.var_2605 == Gvar.var_2603 || Gvar.var_2605 == Gvar.var_2604) {
                        Adap.gcopy(Gvar.var_965, 40, Gvar.var_966 * 40, 40, 40);
                    }
                    if (Gvar.var_2605 == Gvar.var_2599 || Gvar.var_2605 == Gvar.var_2600 || Gvar.var_2605 == Gvar.var_2601 || Gvar.var_2605 == Gvar.var_2602) {
                        Adap.gcopy(Gvar.var_965, 80, Gvar.var_966 * 40, 40, 40);
                    }
                }
                // 敵キャラアイコン左方向 120, 160, 200座標からそれぞれ40mm角
                if (Gvar.var_1640 == 4) {
                    if (Gvar.var_2605 == Gvar.var_2593 || Gvar.var_2605 == Gvar.var_2594 || Gvar.var_2605 == Gvar.var_2595 || Gvar.var_2605 == Gvar.var_2596) {
                        Adap.gcopy(Gvar.var_965, 120, Gvar.var_966 * 40, 40, 40);
                    }
                    if (Gvar.var_2605 == Gvar.var_2597 || Gvar.var_2605 == Gvar.var_2598 || Gvar.var_2605 == Gvar.var_2603 || Gvar.var_2605 == Gvar.var_2604) {
                        Adap.gcopy(Gvar.var_965, 160, Gvar.var_966 * 40, 40, 40);
                    }
                    if (Gvar.var_2605 == Gvar.var_2599 || Gvar.var_2605 == Gvar.var_2600 || Gvar.var_2605 == Gvar.var_2601 || Gvar.var_2605 == Gvar.var_2602) {
                        Adap.gcopy(Gvar.var_965, 200, Gvar.var_966 * 40, 40, 40);
                    }
                }
                // 敵キャラアイコン右方向 360, 400, 440座標からそれぞれ40mm角
                if (Gvar.var_1640 == 6) {
                    if (Gvar.var_2605 == Gvar.var_2593 || Gvar.var_2605 == Gvar.var_2594 || Gvar.var_2605 == Gvar.var_2595 || Gvar.var_2605 == Gvar.var_2596) {
                        Adap.gcopy(Gvar.var_965, 360, Gvar.var_966 * 40, 40, 40);
                    }
                    if (Gvar.var_2605 == Gvar.var_2597 || Gvar.var_2605 == Gvar.var_2598 || Gvar.var_2605 == Gvar.var_2603 || Gvar.var_2605 == Gvar.var_2604) {
                        Adap.gcopy(Gvar.var_965, 400, Gvar.var_966 * 40, 40, 40);
                    }
                    if (Gvar.var_2605 == Gvar.var_2599 || Gvar.var_2605 == Gvar.var_2600 || Gvar.var_2605 == Gvar.var_2601 || Gvar.var_2605 == Gvar.var_2602) {
                        Adap.gcopy(Gvar.var_965, 440, Gvar.var_966 * 40, 40, 40);
                    }
                }
                // 敵キャラアイコン左下方向 480, 520, 560座標からそれぞれ40mm角
                if (Gvar.var_1640 == 1) {
                    if (Gvar.var_2605 == Gvar.var_2593 || Gvar.var_2605 == Gvar.var_2594 || Gvar.var_2605 == Gvar.var_2595 || Gvar.var_2605 == Gvar.var_2596) {
                        Adap.gcopy(Gvar.var_965, 480, Gvar.var_966 * 40, 40, 40);
                    }
                    if (Gvar.var_2605 == Gvar.var_2597 || Gvar.var_2605 == Gvar.var_2598 || Gvar.var_2605 == Gvar.var_2603 || Gvar.var_2605 == Gvar.var_2604) {
                        Adap.gcopy(Gvar.var_965, 520, Gvar.var_966 * 40, 40, 40);
                    }
                    if (Gvar.var_2605 == Gvar.var_2599 || Gvar.var_2605 == Gvar.var_2600 || Gvar.var_2605 == Gvar.var_2601 || Gvar.var_2605 == Gvar.var_2602) {
                        Adap.gcopy(Gvar.var_965, 560, Gvar.var_966 * 40, 40, 40);
                    }
                }
                // 敵キャラアイコン右下方向 720, 760, 800座標からそれぞれ40mm角
                if (Gvar.var_1640 == 3) {
                    if (Gvar.var_2605 == Gvar.var_2593 || Gvar.var_2605 == Gvar.var_2594 || Gvar.var_2605 == Gvar.var_2595 || Gvar.var_2605 == Gvar.var_2596) {
                        Adap.gcopy(Gvar.var_965, 720, Gvar.var_966 * 40, 40, 40);
                    }
                    if (Gvar.var_2605 == Gvar.var_2597 || Gvar.var_2605 == Gvar.var_2598 || Gvar.var_2605 == Gvar.var_2603 || Gvar.var_2605 == Gvar.var_2604) {
                        Adap.gcopy(Gvar.var_965, 760, Gvar.var_966 * 40, 40, 40);
                    }
                    if (Gvar.var_2605 == Gvar.var_2599 || Gvar.var_2605 == Gvar.var_2600 || Gvar.var_2605 == Gvar.var_2601 || Gvar.var_2605 == Gvar.var_2602) {
                        Adap.gcopy(Gvar.var_965, 800, Gvar.var_966 * 40, 40, 40);
                    }
                }
                // 敵キャラアイコン左上方向 600, 640, 680座標からそれぞれ40mm角
                if (Gvar.var_1640 == 7) {
                    if (Gvar.var_2605 == Gvar.var_2593 || Gvar.var_2605 == Gvar.var_2594 || Gvar.var_2605 == Gvar.var_2595 || Gvar.var_2605 == Gvar.var_2596) {
                        Adap.gcopy(Gvar.var_965, 600, Gvar.var_966 * 40, 40, 40);
                    }
                    if (Gvar.var_2605 == Gvar.var_2597 || Gvar.var_2605 == Gvar.var_2598 || Gvar.var_2605 == Gvar.var_2603 || Gvar.var_2605 == Gvar.var_2604) {
                        Adap.gcopy(Gvar.var_965, 640, Gvar.var_966 * 40, 40, 40);
                    }
                    if (Gvar.var_2605 == Gvar.var_2599 || Gvar.var_2605 == Gvar.var_2600 || Gvar.var_2605 == Gvar.var_2601 || Gvar.var_2605 == Gvar.var_2602) {
                        Adap.gcopy(Gvar.var_965, 680, Gvar.var_966 * 40, 40, 40);
                    }
                }
                // 敵キャラアイコン右上方向 840, 880, 920座標からそれぞれ40mm角
                if (Gvar.var_1640 == 9) {
                    if (Gvar.var_2605 == Gvar.var_2593 || Gvar.var_2605 == Gvar.var_2594 || Gvar.var_2605 == Gvar.var_2595 || Gvar.var_2605 == Gvar.var_2596) {
                        Adap.gcopy(Gvar.var_965, 840, Gvar.var_966 * 40, 40, 40);
                    }
                    if (Gvar.var_2605 == Gvar.var_2597 || Gvar.var_2605 == Gvar.var_2598 || Gvar.var_2605 == Gvar.var_2603 || Gvar.var_2605 == Gvar.var_2604) {
                        Adap.gcopy(Gvar.var_965, 880, Gvar.var_966 * 40, 40, 40);
                    }
                    if (Gvar.var_2605 == Gvar.var_2599 || Gvar.var_2605 == Gvar.var_2600 || Gvar.var_2605 == Gvar.var_2601 || Gvar.var_2605 == Gvar.var_2602) {
                        Adap.gcopy(Gvar.var_965, 920, Gvar.var_966 * 40, 40, 40);
                    }
                }
            }
            if (Gvar.var_83[Gvar.var_1641].Var7 == 1) {
                if (Gvar.var_742 <= 3) {
                    Gvar.var_2606 = 1;
                }
                if (Gvar.var_742 == 4) {
                    Gvar.var_2606 = 2;
                }
                if (Gvar.var_742 >= 5) {
                    Gvar.var_2606 = 3;
                }
                // Gvar.enemy_list = 3 タワーオブグレー
                // Gvar.enemy_list = 39 ハイウェイスター、Gvar.enemy_list = 3 タワーオブグレーは設定共通。Ver0.1403にて分離。
                if (Gvar.var_83[Gvar.var_1641].Var0 == 3) {
                    if (Gvar.var_742 <= 3) {
                        Gvar.var_2606 = 1;
                    }
                    if (Gvar.var_742 == 4) {
                        Gvar.var_2606 = 2;
                    }
                    if (Gvar.var_742 >= 5) {
                        Gvar.var_2606 = 3;
                    }
                    if (Gvar.var_742 > 8) {
                        Gvar.var_2606 = 1;
                    }
                }
                // Gvar.enemy_list = 17 シアハートアタック
                // // Gvar.enemy_list = 22 ｱｳﾞﾄﾞｩﾙ人形、Gvar.enemy_list = 17 シアハートアタック、Gvar.enemy_list = 71 ドゥービーは設定共通。Ver0.1403にて分離。
                if (Gvar.var_83[Gvar.var_1641].Var0 == 17) {
                    if (Gvar.var_742 <= 3) {
                        Gvar.var_2606 = 1;
                    }
                    if (Gvar.var_742 == 4 || Gvar.var_742 == 5 || Gvar.var_742 == 6 || Gvar.var_742 == 10 || Gvar.var_742 == 11 || Gvar.var_742 == 12) {
                        Gvar.var_2606 = 2;
                    }
                    if (Gvar.var_742 == 7 || Gvar.var_742 == 8 || Gvar.var_742 == 9 || Gvar.var_742 == 13 || Gvar.var_742 == 14 || Gvar.var_742 >= 15) {
                        Gvar.var_2606 = 3;
                    }
                }
                // Gvar.enemy_list = 21 ストレイキャット
                if (Gvar.var_83[Gvar.var_1641].Var0 == 21) {
                    if (Gvar.var_742 == 1) {
                        Gvar.var_2606 = 1;
                    }
                    if (Gvar.var_742 == 2) {
                        Gvar.var_2606 = 2;
                    }
                    if (Gvar.var_742 >= 3) {
                        Gvar.var_2606 = 3;
                    }
                }
                // Gvar.enemy_list = 22 ｱｳﾞﾄﾞｩﾙ人形
                // // Gvar.enemy_list = 22 ｱｳﾞﾄﾞｩﾙ人形、Gvar.enemy_list = 17 シアハートアタック、Gvar.enemy_list = 71 ドゥービーは設定共通。Ver0.1403にて分離。
                if (Gvar.var_83[Gvar.var_1641].Var0 == 22) {
                    if (Gvar.var_742 <= 3) {
                        Gvar.var_2606 = 1;
                    }
                    if (Gvar.var_742 == 4 || Gvar.var_742 == 5 || Gvar.var_742 == 6 || Gvar.var_742 == 10 || Gvar.var_742 == 11 || Gvar.var_742 == 12) {
                        Gvar.var_2606 = 2;
                    }
                    if (Gvar.var_742 == 7 || Gvar.var_742 == 8 || Gvar.var_742 == 9 || Gvar.var_742 == 13 || Gvar.var_742 == 14 || Gvar.var_742 >= 15) {
                        Gvar.var_2606 = 3;
                    }
                }
                // Gvar.enemy_list = 29 グリーン・ディ
                if (Gvar.var_83[Gvar.var_1641].Var0 == 29) {
                    if (Gvar.var_742 <= 5) {
                        Gvar.var_2606 = 1;
                    }
                    if (Gvar.var_742 == 6) {
                        Gvar.var_2606 = 2;
                    }
                    if (Gvar.var_742 >= 7) {
                        Gvar.var_2606 = 3;
                    }
                    if (Gvar.var_742 > 9) {
                        Gvar.var_2606 = 2;
                    }
                }
                // Gvar.enemy_list = 30 禁煙中ホルホース
                // Gvar.enemy_list = 46 ホルホース、Gvar.enemy_list = 30 禁煙中ホルホースは設定共通。Ver0.1403にて分離。
                if (Gvar.var_83[Gvar.var_1641].Var0 == 30) {
                    if (Gvar.var_742 == 1) {
                        Gvar.var_2606 = 1;
                    }
                    if (Gvar.var_742 == 2) {
                        Gvar.var_2606 = 2;
                    }
                    if (Gvar.var_742 >= 3) {
                        Gvar.var_2606 = 3;
                    }
                }
                // Gvar.enemy_list = 34 ブチギレ状態のトニオさん
                if (Gvar.var_83[Gvar.var_1641].Var0 == 34) {
                    if (Gvar.var_742 == 1 || Gvar.var_742 == 3 || Gvar.var_742 == 5) {
                        Gvar.var_2606 = 1;
                    }
                    if (Gvar.var_742 == 2 || Gvar.var_742 == 4) {
                        Gvar.var_2606 = 2;
                    }
                    if (Gvar.var_742 >= 6) {
                        Gvar.var_2606 = 3;
                    }
                }
                // Gvar.enemy_list = 39 ハイウェイスター
                // Gvar.enemy_list = 39 ハイウェイスター、Gvar.enemy_list = 3 タワーオブグレーは設定共通。Ver0.1403にて分離。
                if (Gvar.var_83[Gvar.var_1641].Var0 == 39) {
                    if (Gvar.var_742 <= 3) {
                        Gvar.var_2606 = 1;
                    }
                    if (Gvar.var_742 == 4) {
                        Gvar.var_2606 = 2;
                    }
                    if (Gvar.var_742 >= 5) {
                        Gvar.var_2606 = 3;
                    }
                    if (Gvar.var_742 > 8) {
                        Gvar.var_2606 = 1;
                    }
                }
                // Gvar.enemy_list = 44 レッドホットチリペッパー
                if (Gvar.var_83[Gvar.var_1641].Var0 == 44) {
                    if (Gvar.var_742 == 1 || Gvar.var_742 == 2) {
                        Gvar.var_2606 = 1;
                    }
                    if (Gvar.var_742 == 3 || Gvar.var_742 == 4 || Gvar.var_742 == 7 || Gvar.var_742 == 8) {
                        Gvar.var_2606 = 2;
                    }
                    if (Gvar.var_742 == 5 || Gvar.var_742 == 6 || Gvar.var_742 == 9 || Gvar.var_742 == 10) {
                        Gvar.var_2606 = 3;
                    }
                    if (Gvar.var_742 >= 11) {
                        Gvar.var_2606 = 1;
                    }
                }
                // Gvar.enemy_list = 46 ホルホース
                // Gvar.enemy_list = 46 ホルホース、Gvar.enemy_list = 30 禁煙中ホルホースは設定共通。Ver0.1403にて分離。
                if (Gvar.var_83[Gvar.var_1641].Var0 == 46) {
                    if (Gvar.var_742 == 1) {
                        Gvar.var_2606 = 1;
                    }
                    if (Gvar.var_742 == 2) {
                        Gvar.var_2606 = 2;
                    }
                    if (Gvar.var_742 >= 3) {
                        Gvar.var_2606 = 3;
                    }
                }
                // Gvar.enemy_list = 48 エアロスミス
                if (Gvar.var_83[Gvar.var_1641].Var0 == 48) {
                    if (Gvar.var_742 == 1 || Gvar.var_742 == 4 || Gvar.var_742 == 7 || Gvar.var_742 == 10) {
                        Gvar.var_2606 = 1;
                    }
                    if (Gvar.var_742 == 2 || Gvar.var_742 == 5 || Gvar.var_742 == 8 || Gvar.var_742 == 11) {
                        Gvar.var_2606 = 2;
                    }
                    if (Gvar.var_742 == 3 || Gvar.var_742 == 6 || Gvar.var_742 == 9 || Gvar.var_742 == 12) {
                        Gvar.var_2606 = 3;
                    }
                }
                // Gvar.enemy_list = 51 ワンチェン
                if (Gvar.var_83[Gvar.var_1641].Var0 == 51) {
                    if (Gvar.var_742 <= 4) {
                        Gvar.var_2606 = 1;
                    }
                    if (Gvar.var_742 == 5 || Gvar.var_742 == 6) {
                        Gvar.var_2606 = 2;
                    }
                    if (Gvar.var_742 == 7 || Gvar.var_742 == 8) {
                        Gvar.var_2606 = 3;
                    }
                    if (Gvar.var_742 >= 9) {
                        Gvar.var_2606 = 1;
                    }
                }
                // Gvar.enemy_list = 56 シュトロハイム
                if (Gvar.var_83[Gvar.var_1641].Var0 == 56) {
                    if (Gvar.var_742 == 1 || Gvar.var_742 == 3 || Gvar.var_742 == 5 || Gvar.var_742 == 7 || Gvar.var_742 == 9 || Gvar.var_742 == 11 || Gvar.var_742 == 13) {
                        Gvar.var_2606 = 3;
                    }
                    if (Gvar.var_742 == 0 || Gvar.var_742 == 2 || Gvar.var_742 == 4 || Gvar.var_742 == 6 || Gvar.var_742 == 8 || Gvar.var_742 == 10 || Gvar.var_742 == 12) {
                        Gvar.var_2606 = 2;
                    }
                }
                // Gvar.enemy_list = 71 ドゥービー
                // // Gvar.enemy_list = 22 ｱｳﾞﾄﾞｩﾙ人形、Gvar.enemy_list = 17 シアハートアタック、Gvar.enemy_list = 71 ドゥービーは設定共通。Ver0.1403にて分離。
                if (Gvar.var_83[Gvar.var_1641].Var0 == 71) {
                    if (Gvar.var_742 <= 3) {
                        Gvar.var_2606 = 1;
                    }
                    if (Gvar.var_742 == 4 || Gvar.var_742 == 5 || Gvar.var_742 == 6 || Gvar.var_742 == 10 || Gvar.var_742 == 11 || Gvar.var_742 == 12) {
                        Gvar.var_2606 = 2;
                    }
                    if (Gvar.var_742 == 7 || Gvar.var_742 == 8 || Gvar.var_742 == 9 || Gvar.var_742 == 13 || Gvar.var_742 == 14 || Gvar.var_742 >= 15) {
                        Gvar.var_2606 = 3;
                    }
                }
                // Gvar.enemy_list = 135 若ジョセフ
                if (Gvar.var_83[Gvar.var_1641].Var0 == 135) {
                    if (Gvar.var_742 <= 3) {
                        Gvar.var_2606 = 1;
                    }
                    if (Gvar.var_742 == 4 || Gvar.var_742 == 6 || Gvar.var_742 == 8) {
                        Gvar.var_2606 = 2;
                    }
                    if (Gvar.var_742 == 5 || Gvar.var_742 == 7 || Gvar.var_742 == 9) {
                        Gvar.var_2606 = 3;
                    }
                    if (Gvar.var_742 >= 10) {
                        Gvar.var_2606 = 1;
                    }
                }
                // Gvar.enemy_list = 136 シーザー
                if (Gvar.var_83[Gvar.var_1641].Var0 == 136 && Gvar.var_1198 >= 1) {
                    if (Gvar.var_83[Gvar.var_1641].Var5 == 2) {
                        Adap.gcopy(Gvar.var_1826, 960, Gvar.var_966 * 40, 40, 40);
                    }
                    if (Gvar.var_83[Gvar.var_1641].Var5 == 4) {
                        Adap.gcopy(Gvar.var_1826, 1000, Gvar.var_966 * 40, 40, 40);
                    }
                    if (Gvar.var_83[Gvar.var_1641].Var5 == 8) {
                        Adap.gcopy(Gvar.var_1826, 1040, Gvar.var_966 * 40, 40, 40);
                    }
                    if (Gvar.var_83[Gvar.var_1641].Var5 == 6) {
                        Adap.gcopy(Gvar.var_1826, 1080, Gvar.var_966 * 40, 40, 40);
                    }
                    if (Gvar.var_83[Gvar.var_1641].Var5 == 1) {
                        Adap.gcopy(Gvar.var_1826, 1120, Gvar.var_966 * 40, 40, 40);
                    }
                    if (Gvar.var_83[Gvar.var_1641].Var5 == 7) {
                        Adap.gcopy(Gvar.var_1826, 1160, Gvar.var_966 * 40, 40, 40);
                    }
                    if (Gvar.var_83[Gvar.var_1641].Var5 == 3) {
                        Adap.gcopy(Gvar.var_1826, 1200, Gvar.var_966 * 40, 40, 40);
                    }
                    if (Gvar.var_83[Gvar.var_1641].Var5 == 9) {
                        Adap.gcopy(Gvar.var_1826, 1240, Gvar.var_966 * 40, 40, 40);
                    }
                    await Func.func568();
                    return;
                }
                // Gvar.enemy_list = 136 シーザー
                if (Gvar.var_83[Gvar.var_1641].Var0 == 136) {
                    if (Gvar.var_742 <= 2) {
                        Gvar.var_2606 = 1;
                    }
                    if (Gvar.var_742 == 3) {
                        Gvar.var_2606 = 2;
                    }
                    if (Gvar.var_742 >= 4) {
                        Gvar.var_2606 = 3;
                    }
                    if (Gvar.var_742 == 8) {
                        Gvar.var_2606 = 1;
                    }
                    if (Gvar.var_742 >= 9) {
                        Gvar.var_2606 = 1;
                        Gvar.var_1826 = Gvar.var_965;
                    }
                }
                // Gvar.enemy_list = 140 ジョナサン
                if (Gvar.var_83[Gvar.var_1641].Var0 == 140) {
                    if (Gvar.var_742 <= 3) {
                        Gvar.var_2606 = 1;
                    }
                    if (Gvar.var_742 == 4 || Gvar.var_742 == 5 || Gvar.var_742 == 9) {
                        Gvar.var_2606 = 2;
                    }
                    if (Gvar.var_742 == 6 || Gvar.var_742 == 7 || Gvar.var_742 == 8) {
                        Gvar.var_2606 = 2;
                    }
                    if (Gvar.var_742 >= 10) {
                        Gvar.var_2606 = 1;
                    }
                }
                // Gvar.enemy_list = 141 F・F
                if (Gvar.var_83[Gvar.var_1641].Var0 == 141) {
                    if (Gvar.var_742 <= 2) {
                        Gvar.var_2606 = 1;
                    }
                    if (Gvar.var_742 == 3) {
                        Gvar.var_2606 = 2;
                    }
                    if (Gvar.var_742 == 4) {
                        Gvar.var_2606 = 3;
                    }
                    if (Gvar.var_742 == 5) {
                        Gvar.var_2606 = 3;
                    }
                    if (Gvar.var_742 >= 6) {
                        Gvar.var_2606 = 1;
                    }
                }
                // Gvar.enemy_list = 164 エシディシの脳
                // Gvar.enemy_list = 164 エシディシの脳、Gvar.enemy_list = 165 エボニーデビルは設定共通。Ver0.1403にて分離。
                if (Gvar.var_83[Gvar.var_1641].Var0 == 164) {
                    if (Gvar.var_742 == 1) {
                        Gvar.var_2606 = 1;
                        Adap.color(0, 0, 0);
                        
                        Adap.gmode(4, null, null, 255);
                    }
                    if (Gvar.var_742 == 2) {
                        Gvar.var_2606 = 1;
                        Adap.color(0, 0, 0);
                        
                        Adap.gmode(4, null, null, 255);
                    }
                    if (Gvar.var_742 == 3) {
                        Gvar.var_2606 = 1;
                        Adap.color(0, 0, 0);
                        Adap.gmode(4, null, null, 240);
                    }
                    if (Gvar.var_742 == 4) {
                        Gvar.var_2606 = 1;
                        Adap.color(0, 0, 0);
                
                        Adap.gmode(4, null, null, 220);
                    }
                    if (Gvar.var_742 == 5) {
                        Gvar.var_2606 = 1;
                        Adap.color(0, 0, 0);
                
                        Adap.gmode(4, null, null, 200);
                    }
                    if (Gvar.var_742 == 6) {
                        Gvar.var_2606 = 1;
                        Adap.color(0, 0, 0);
            
                        Adap.gmode(4, null, null, 160);
                    }
                    if (Gvar.var_742 == 7) {
                        Gvar.var_2606 = 1;
                        Adap.color(0, 0, 0);
                
                        Adap.gmode(4, null, null, 120);
                    }
                    if (Gvar.var_742 == 8) {
                        Gvar.var_2606 = 1;
                        Adap.color(0, 0, 0);
                        Adap.gmode(4, null, null, 60);
                    }
                    if (Gvar.var_742 >= 9) {
                        Gvar.var_2606 = 1;
                        Adap.color(0, 0, 0);
            
                        Adap.gmode(4, null, null, 20);
                    }
                }
                // Gvar.enemy_list = 165 エボニーデビル
                // Gvar.enemy_list = 164 エシディシの脳、Gvar.enemy_list = 165 エボニーデビルは設定共通。Ver0.1403にて分離。
                if (Gvar.var_83[Gvar.var_1641].Var0 == 165) {
                    if (Gvar.var_742 == 1) {
                        Gvar.var_2606 = 1;
                        Adap.color(0, 0, 0);
                        
                        Adap.gmode(4, null, null, 255);
                    }
                    if (Gvar.var_742 == 2) {
                        Gvar.var_2606 = 1;
                        Adap.color(0, 0, 0);
                        
                        Adap.gmode(4, null, null, 255);
                    }
                    if (Gvar.var_742 == 3) {
                        Gvar.var_2606 = 1;
                        Adap.color(0, 0, 0);
                        Adap.gmode(4, null, null, 240);
                    }
                    if (Gvar.var_742 == 4) {
                        Gvar.var_2606 = 1;
                        Adap.color(0, 0, 0);
                
                        Adap.gmode(4, null, null, 220);
                    }
                    if (Gvar.var_742 == 5) {
                        Gvar.var_2606 = 1;
                        Adap.color(0, 0, 0);
                
                        Adap.gmode(4, null, null, 200);
                    }
                    if (Gvar.var_742 == 6) {
                        Gvar.var_2606 = 1;
                        Adap.color(0, 0, 0);
            
                        Adap.gmode(4, null, null, 160);
                    }
                    if (Gvar.var_742 == 7) {
                        Gvar.var_2606 = 1;
                        Adap.color(0, 0, 0);
                
                        Adap.gmode(4, null, null, 120);
                    }
                    if (Gvar.var_742 == 8) {
                        Gvar.var_2606 = 1;
                        Adap.color(0, 0, 0);
                        Adap.gmode(4, null, null, 60);
                    }
                    if (Gvar.var_742 >= 9) {
                        Gvar.var_2606 = 1;
                        Adap.color(0, 0, 0);
            
                        Adap.gmode(4, null, null, 20);
                    }
                }
                // Gvar.enemy_list = 168 警備員の西戸
                if (Gvar.var_83[Gvar.var_1641].Var0 == 168) {
                    if (Gvar.var_742 <= 3) {
                        Gvar.var_2606 = 1;
                    }
                    if (Gvar.var_742 == 4 || Gvar.var_742 == 5 || Gvar.var_742 == 9) {
                        Gvar.var_2606 = 2;
                    }
                    if (Gvar.var_742 == 6 || Gvar.var_742 == 7 || Gvar.var_742 == 8) {
                        Gvar.var_2606 = 2;
                    }
                    if (Gvar.var_742 >= 10) {
                        Gvar.var_2606 = 1;
                    }
                }
                if (Gvar.var_1640 == 8) {
                    if (Gvar.var_2606 == 1) {
                        Adap.gcopy(Gvar.var_1826, 240, Gvar.var_966 * 40, 40, 40);
                    }
                    if (Gvar.var_2606 == 2) {
                        Adap.gcopy(Gvar.var_1826, 280, Gvar.var_966 * 40, 40, 40);
                    }
                    if (Gvar.var_2606 == 3) {
                        Adap.gcopy(Gvar.var_1826, 320, Gvar.var_966 * 40, 40, 40);
                    }
                }
                if (Gvar.var_1640 == 2) {
                    if (Gvar.var_2606 == 1) {
                        Adap.gcopy(Gvar.var_1826, 0, Gvar.var_966 * 40, 40, 40);
                    }
                    if (Gvar.var_2606 == 2) {
                        Adap.gcopy(Gvar.var_1826, 40, Gvar.var_966 * 40, 40, 40);
                    }
                    if (Gvar.var_2606 == 3) {
                        Adap.gcopy(Gvar.var_1826, 80, Gvar.var_966 * 40, 40, 40);
                    }
                }
                if (Gvar.var_1640 == 4) {
                    if (Gvar.var_2606 == 1) {
                        Adap.gcopy(Gvar.var_1826, 120, Gvar.var_966 * 40, 40, 40);
                    }
                    if (Gvar.var_2606 == 2) {
                        Adap.gcopy(Gvar.var_1826, 160, Gvar.var_966 * 40, 40, 40);
                    }
                    if (Gvar.var_2606 == 3) {
                        Adap.gcopy(Gvar.var_1826, 200, Gvar.var_966 * 40, 40, 40);
                    }
                }
                if (Gvar.var_1640 == 6) {
                    if (Gvar.var_2606 == 1) {
                        Adap.gcopy(Gvar.var_1826, 360, Gvar.var_966 * 40, 40, 40);
                    }
                    if (Gvar.var_2606 == 2) {
                        Adap.gcopy(Gvar.var_1826, 400, Gvar.var_966 * 40, 40, 40);
                    }
                    if (Gvar.var_2606 == 3) {
                        Adap.gcopy(Gvar.var_1826, 440, Gvar.var_966 * 40, 40, 40);
                    }
                }
                if (Gvar.var_1640 == 1) {
                    if (Gvar.var_2606 == 1) {
                        Adap.gcopy(Gvar.var_1826, 480, Gvar.var_966 * 40, 40, 40);
                    }
                    if (Gvar.var_2606 == 2) {
                        Adap.gcopy(Gvar.var_1826, 520, Gvar.var_966 * 40, 40, 40);
                    }
                    if (Gvar.var_2606 == 3) {
                        Adap.gcopy(Gvar.var_1826, 560, Gvar.var_966 * 40, 40, 40);
                    }
                }
                if (Gvar.var_1640 == 3) {
                    if (Gvar.var_2606 == 1) {
                        Adap.gcopy(Gvar.var_1826, 720, Gvar.var_966 * 40, 40, 40);
                    }
                    if (Gvar.var_2606 == 2) {
                        Adap.gcopy(Gvar.var_1826, 760, Gvar.var_966 * 40, 40, 40);
                    }
                    if (Gvar.var_2606 == 3) {
                        Adap.gcopy(Gvar.var_1826, 800, Gvar.var_966 * 40, 40, 40);
                    }
                }
                if (Gvar.var_1640 == 7) {
                    if (Gvar.var_2606 == 1) {
                        Adap.gcopy(Gvar.var_1826, 600, Gvar.var_966 * 40, 40, 40);
                    }
                    if (Gvar.var_2606 == 2) {
                        Adap.gcopy(Gvar.var_1826, 640, Gvar.var_966 * 40, 40, 40);
                    }
                    if (Gvar.var_2606 == 3) {
                        Adap.gcopy(Gvar.var_1826, 680, Gvar.var_966 * 40, 40, 40);
                    }
                }
                if (Gvar.var_1640 == 9) {
                    if (Gvar.var_2606 == 1) {
                        Adap.gcopy(Gvar.var_1826, 840, Gvar.var_966 * 40, 40, 40);
                    }
                    if (Gvar.var_2606 == 2) {
                        Adap.gcopy(Gvar.var_1826, 880, Gvar.var_966 * 40, 40, 40);
                    }
                    if (Gvar.var_2606 == 3) {
                        Adap.gcopy(Gvar.var_1826, 920, Gvar.var_966 * 40, 40, 40);
                    }
                }
            }
            await Func.func568();
            //スタンド像付与フラグがONの場合
            if (Gvar.var_743 == 1 && Gvar.var_83[Gvar.var_1641].Var7 == 1) {
                Gvar.var_1281 = 0;
                if (Gvar.var_742 == 1) {
                    Gvar.var_1281 = 8;
                }
                if (Gvar.var_742 == 2) {
                    Gvar.var_1281 = 4;
                }
                if (Gvar.var_742 == 3) {
                    Gvar.var_1281 = 2;
                }
                if (Gvar.var_742 == 8) {
                    Gvar.var_1281 = 2;
                }
                if (Gvar.var_742 == 9) {
                    Gvar.var_1281 = 3;
                }
                if (Gvar.var_1640 == 4) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - 20 + Gvar.var_1281, Gvar.var_763 * Gvar.var_36 - 10);
                }
                if (Gvar.var_1640 == 6) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + 20 - Gvar.var_1281, Gvar.var_763 * Gvar.var_36 - 10);
                }
                if (Gvar.var_1640 == 2) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 + 20 - 10 - Gvar.var_1281);
                }
                if (Gvar.var_1640 == 8) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 20 - 10 + Gvar.var_1281);
                }
                if (Gvar.var_1640 == 1) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - 20 + Gvar.var_1281, Gvar.var_763 * Gvar.var_36 + 20 - 10 - Gvar.var_1281);
                }
                if (Gvar.var_1640 == 3) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + 20 - Gvar.var_1281, Gvar.var_763 * Gvar.var_36 + 20 - 10 - Gvar.var_1281);
                }
                if (Gvar.var_1640 == 7) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - 20 + Gvar.var_1281, Gvar.var_763 * Gvar.var_36 - 20 - 10 + Gvar.var_1281);
                }
                if (Gvar.var_1640 == 9) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + 20 - Gvar.var_1281, Gvar.var_763 * Gvar.var_36 - 20 - 10 + Gvar.var_1281);
                }
                // Gvar.enemy_list = 4 デス・13
                if (Gvar.var_83[Gvar.var_1641].Var0 == 4) {
                    // Gvar.var_1291 敵キャラの攻撃モーション用スタンドのドット絵選択
                    Gvar.var_1291 = 7;
                }
                // Gvar.enemy_list = 14 床屋のカーン
                if (Gvar.var_83[Gvar.var_1641].Var0 == 14) {
                    // Gvar.var_1291 敵キャラの攻撃モーション用スタンドのドット絵選択
                    Gvar.var_1291 = 20;
                }
                // Gvar.enemy_list = 32 吉良吉影
                if (Gvar.var_83[Gvar.var_1641].Var0 == 32) {
                    // Gvar.var_1291 敵キャラの攻撃モーション用スタンドのドット絵選択
                    Gvar.var_1291 = 14;
                }
                // Gvar.enemy_list = 35 仗助
                if (Gvar.var_83[Gvar.var_1641].Var0 == 35) {
                    // Gvar.var_1291 敵キャラの攻撃モーション用スタンドのドット絵選択
                    Gvar.var_1291 = 8;
                }
                // Gvar.enemy_list = 47 億泰
                if (Gvar.var_83[Gvar.var_1641].Var0 == 47) {
                    // Gvar.var_1291 敵キャラの攻撃モーション用スタンドのドット絵選択
                    Gvar.var_1291 = 6;
                }
                // Gvar.enemy_list = 49 コピー人形
                if (Gvar.var_83[Gvar.var_1641].Var0 == 49) {
                    // Gvar.var_1291 敵キャラの攻撃モーション用スタンドのドット絵選択
                    Gvar.var_1291 = 3;
                }
                // Gvar.enemy_list = 59 プッチ神父
                if (Gvar.var_83[Gvar.var_1641].Var0 == 59) {
                    // Gvar.var_1291 敵キャラの攻撃モーション用スタンドのドット絵選択
                    Gvar.var_1291 = 16;
                }
                // Gvar.enemy_list = 60 ザ・ニュー神父
                if (Gvar.var_83[Gvar.var_1641].Var0 == 60) {
                    // Gvar.var_1291 敵キャラの攻撃モーション用スタンドのドット絵選択
                    Gvar.var_1291 = 20;
                }
                // Gvar.enemy_list = 63 プロシュートの兄貴
                if (Gvar.var_83[Gvar.var_1641].Var0 == 63) {
                    // Gvar.var_1291 敵キャラの攻撃モーション用スタンドのドット絵選択
                    Gvar.var_1291 = 31;
                }
                // Gvar.enemy_list = 66 タルカス
                if (Gvar.var_83[Gvar.var_1641].Var0 == 66) {
                    // Gvar.var_1291 敵キャラの攻撃モーション用スタンドのドット絵選択
                    Gvar.var_1291 = 20;
                }
                // Gvar.enemy_list = 67 ブチギレた億泰
                if (Gvar.var_83[Gvar.var_1641].Var0 == 67) {
                    // Gvar.var_1291 敵キャラの攻撃モーション用スタンドのドット絵選択
                    Gvar.var_1291 = 6;
                }
                // Gvar.enemy_list = 68 ブチギレた仗助
                if (Gvar.var_83[Gvar.var_1641].Var0 == 68) {
                    // Gvar.var_1291 敵キャラの攻撃モーション用スタンドのドット絵選択
                    Gvar.var_1291 = 8;
                }
                // Gvar.enemy_list = 78 アヴドゥルさん
                if (Gvar.var_83[Gvar.var_1641].Var0 == 78) {
                    // Gvar.var_1291 敵キャラの攻撃モーション用スタンドのドット絵選択
                    Gvar.var_1291 = 12;
                }
                // Gvar.enemy_list = 80 ラング・ラングラー
                if (Gvar.var_83[Gvar.var_1641].Var0 == 80) {
                    // Gvar.var_1291 敵キャラの攻撃モーション用スタンドのドット絵選択
                    Gvar.var_1291 = 42;
                }
                // Gvar.enemy_list = 87 エシディシ
                if (Gvar.var_83[Gvar.var_1641].Var0 == 87) {
                    // Gvar.var_1291 敵キャラの攻撃モーション用スタンドのドット絵選択
                    Gvar.var_1291 = 52;
                }
                // Gvar.enemy_list = 87 エシディシ
                if (Gvar.var_83[Gvar.var_1641].Var0 == 87) {
                    if (Gvar.var_1640 == 4) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 20 + Gvar.var_1281 - 12, Gvar.var_763 * Gvar.var_36 - 10);
                    }
                    if (Gvar.var_1640 == 6) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 20 - Gvar.var_1281 + 12, Gvar.var_763 * Gvar.var_36 - 10);
                    }
                    if (Gvar.var_1640 == 2) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 + 20 - 10 - Gvar.var_1281 + 15);
                    }
                    if (Gvar.var_1640 == 8) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 20 - 10 + Gvar.var_1281 - 8);
                    }
                    if (Gvar.var_1640 == 1) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 20 + Gvar.var_1281 - 5, Gvar.var_763 * Gvar.var_36 + 20 - 10 - Gvar.var_1281 + 12);
                    }
                    if (Gvar.var_1640 == 3) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 20 - Gvar.var_1281 + 5, Gvar.var_763 * Gvar.var_36 + 20 - 10 - Gvar.var_1281 + 12);
                    }
                    if (Gvar.var_1640 == 7) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 20 + Gvar.var_1281 - 12, Gvar.var_763 * Gvar.var_36 - 20 - 10 + Gvar.var_1281 - 7);
                    }
                    if (Gvar.var_1640 == 9) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 20 - Gvar.var_1281 + 15, Gvar.var_763 * Gvar.var_36 - 20 - 10 + Gvar.var_1281 - 5);
                    }
                }
                // Gvar.enemy_list = 98 エンポリオ(ウェザーリポートのDISC付)
                if (Gvar.var_83[Gvar.var_1641].Var0 == 98) {
                    // Gvar.var_1291 敵キャラの攻撃モーション用スタンドのドット絵選択
                    Gvar.var_1291 = 35;
                }
                // Gvar.enemy_list = 108 イギー
                if (Gvar.var_83[Gvar.var_1641].Var0 == 108) {
                    // Gvar.var_1291 敵キャラの攻撃モーション用スタンドのドット絵選択
                    Gvar.var_1291 = 36;
                }
                // Gvar.enemy_list = 113 DIO
                if (Gvar.var_83[Gvar.var_1641].Var0 == 113) {
                    // Gvar.var_1291 敵キャラの攻撃モーション用スタンドのドット絵選択
                    Gvar.var_1291 = 13;
                }
                // Gvar.enemy_list = 114 最高にハイなDIO
                if (Gvar.var_83[Gvar.var_1641].Var0 == 114) {
                    // Gvar.var_1291 敵キャラの攻撃モーション用スタンドのドット絵選択
                    Gvar.var_1291 = 13;
                }
                // Gvar.enemy_list = 119 ジョセフ(3部)
                if (Gvar.var_83[Gvar.var_1641].Var0 == 119) {
                    // Gvar.var_1291 敵キャラの攻撃モーション用スタンドのドット絵選択
                    Gvar.var_1291 = 18;
                }
                // Gvar.enemy_list = 120 承太郎(3部)
                if (Gvar.var_83[Gvar.var_1641].Var0 == 120) {
                    // Gvar.var_1291 敵キャラの攻撃モーション用スタンドのドット絵選択
                    Gvar.var_1291 = 5;
                }
                // Gvar.enemy_list = 122 ポルナレフ(3部)
                if (Gvar.var_83[Gvar.var_1641].Var0 == 122) {
                    // Gvar.var_1291 敵キャラの攻撃モーション用スタンドのドット絵選択
                    Gvar.var_1291 = 4; // シルバーチャリオッツのドット絵
                }
                // Gvar.enemy_list = 123 ブチャラティ
                if (Gvar.var_83[Gvar.var_1641].Var0 == 123) {
                    // Gvar.var_1291 敵キャラの攻撃モーション用スタンドのドット絵選択
                    Gvar.var_1291 = 11;
                }
                // Gvar.enemy_list = 125 フーゴ
                if (Gvar.var_83[Gvar.var_1641].Var0 == 125) {
                    // Gvar.var_1291 敵キャラの攻撃モーション用スタンドのドット絵選択
                    Gvar.var_1291 = 27;
                }
                // Gvar.enemy_list = 128 承太郎(4部)
                if (Gvar.var_83[Gvar.var_1641].Var0 == 128) {
                    // Gvar.var_1291 敵キャラの攻撃モーション用スタンドのドット絵選択
                    Gvar.var_1291 = 40; // Ver0.1403にて修正 5 → 40 スタープラチナからスタプラザワールドへ変更
                }
                // Gvar.enemy_list = 129 アヌビスポルナレフ
                if (Gvar.var_83[Gvar.var_1641].Var0 == 129) {
                    // Gvar.var_1291 敵キャラの攻撃モーション用スタンドのドット絵選択
                    Gvar.var_1291 = 4; // シルバーチャリオッツのドット絵
                }
                // Gvar.enemy_list = 131 ジョルノ
                if (Gvar.var_83[Gvar.var_1641].Var0 == 131) {
                    // Gvar.var_1291 敵キャラの攻撃モーション用スタンドのドット絵選択
                    Gvar.var_1291 = 17;
                }
                // Gvar.enemy_list = 132 レクイエムジョルノ
                if (Gvar.var_83[Gvar.var_1641].Var0 == 132) {
                    // Gvar.var_1291 敵キャラの攻撃モーション用スタンドのドット絵選択
                    Gvar.var_1291 = 37;
                }
                // Gvar.enemy_list = 134 ジョリーン
                if (Gvar.var_83[Gvar.var_1641].Var0 == 134) {
                    // Gvar.var_1291 敵キャラの攻撃モーション用スタンドのドット絵選択
                    Gvar.var_1291 = 26;
                }
                // Gvar.enemy_list = 137 成長した吉良
                if (Gvar.var_83[Gvar.var_1641].Var0 == 137) {
                    // Gvar.var_1291 敵キャラの攻撃モーション用スタンドのドット絵選択
                    Gvar.var_1291 = 14;
                }
                // Gvar.enemy_list = 144 川尻浩作
                if (Gvar.var_83[Gvar.var_1641].Var0 == 144) {
                    // Gvar.var_1291 敵キャラの攻撃モーション用スタンドのドット絵選択
                    Gvar.var_1291 = 14;
                }
                // Gvar.enemy_list = 145 康一
                if (Gvar.var_83[Gvar.var_1641].Var0 == 145) {
                    // Gvar.var_1291 敵キャラの攻撃モーション用スタンドのドット絵選択
                    Gvar.var_1291 = 2; // エコーズact3のドット絵
                }
                // Gvar.enemy_list = 147 ジョセフ(4部)
                if (Gvar.var_83[Gvar.var_1641].Var0 == 147) {
                    // Gvar.var_1291 敵キャラの攻撃モーション用スタンドのドット絵選択
                    Gvar.var_1291 = 18;
                }
                // Gvar.enemy_list = 148 エルメェス
                if (Gvar.var_83[Gvar.var_1641].Var0 == 148) {
                    // Gvar.var_1291 敵キャラの攻撃モーション用スタンドのドット絵選択
                    Gvar.var_1291 = 41;
                }
                // Gvar.enemy_list = 150 康一act2!!
                if (Gvar.var_83[Gvar.var_1641].Var0 == 150) {
                    // Gvar.var_1291 敵キャラの攻撃モーション用スタンドのドット絵選択
                    Gvar.var_1291 = 2; // エコーズact3のドット絵
                }
                // Gvar.enemy_list = 152 トリッシュ
                if (Gvar.var_83[Gvar.var_1641].Var0 == 152) {
                    // Gvar.var_1291 敵キャラの攻撃モーション用スタンドのドット絵選択
                    Gvar.var_1291 = 25;
                }
                // Gvar.enemy_list = 156 ウェザー
                if (Gvar.var_83[Gvar.var_1641].Var0 == 156) {
                    // Gvar.var_1291 敵キャラの攻撃モーション用スタンドのドット絵選択
                    Gvar.var_1291 = 35;
                }
                // Gvar.enemy_list = 157 アナスイ
                if (Gvar.var_83[Gvar.var_1641].Var0 == 157) {
                    // Gvar.var_1291 敵キャラの攻撃モーション用スタンドのドット絵選択
                    Gvar.var_1291 = 23;
                }
                // Gvar.enemy_list = 159 記憶が戻ったウェザー
                if (Gvar.var_83[Gvar.var_1641].Var0 == 159) {
                    // Gvar.var_1291 敵キャラの攻撃モーション用スタンドのドット絵選択
                    Gvar.var_1291 = 46;
                }
                // Ver0.1403にて追加。Gvar.enemy_list = 171 離婚した承太郎
                if (Gvar.var_83[Gvar.var_1641].Var0 == 171) {
                    // Gvar.var_1291 敵キャラの攻撃モーション用スタンドのドット絵選択
                    Gvar.var_1291 = 40; // スタプラザワールドのドット絵
                }
                if (Gvar.var_1291 != 20) { // タルカス以外の場合(20はタルカスの攻撃ドット)
                    Adap.gmode(2, null, null, null);
                    if (Gvar.var_742 == 1 || Gvar.var_742 == 8) {
                        Adap.color(0, 0, 0);
                        Adap.gmode(4, null, null, 100);
                    }
                    if (Gvar.var_742 == 9) {
                        Adap.color(0, 0, 0);
                        Adap.gmode(4, null, null, 70);
                    }
                    if (Gvar.var_742 == 10) {
                        Adap.color(0, 0, 0);
                        Adap.gmode(4, null, null, 30);
                    }
                    if (Gvar.var_742 == 1 || Gvar.var_742 == 2) {
                        if (Gvar.var_1640 == 2) {
                            Adap.gcopy(11, 0, Gvar.var_1291 * 40, 40, 40); // Adap.buffer(11)は"img_stand0.gif"
                        }
                        if (Gvar.var_1640 == 4) {
                            Adap.gcopy(11, 120, Gvar.var_1291 * 40, 40, 40); // Adap.buffer(11)は"img_stand0.gif"
                        }
                        if (Gvar.var_1640 == 8) {
                            Adap.gcopy(11, 240, Gvar.var_1291 * 40, 40, 40); // Adap.buffer(11)は"img_stand0.gif"
                        }
                        if (Gvar.var_1640 == 6) {
                            Adap.gcopy(11, 360, Gvar.var_1291 * 40, 40, 40); // Adap.buffer(11)は"img_stand0.gif"
                        }
                        if (Gvar.var_1640 == 1) {
                            Adap.gcopy(11, 480, Gvar.var_1291 * 40, 40, 40); // Adap.buffer(11)は"img_stand0.gif"
                        }
                        if (Gvar.var_1640 == 3) {
                            Adap.gcopy(11, 720, Gvar.var_1291 * 40, 40, 40); // Adap.buffer(11)は"img_stand0.gif"
                        }
                        if (Gvar.var_1640 == 7) {
                            Adap.gcopy(11, 600, Gvar.var_1291 * 40, 40, 40); // Adap.buffer(11)は"img_stand0.gif"
                        }
                        if (Gvar.var_1640 == 9) {
                            Adap.gcopy(11, 840, Gvar.var_1291 * 40, 40, 40); // Adap.buffer(11)は"img_stand0.gif"
                        }
                    }
                    if (Gvar.var_742 == 3) {
                        if (Gvar.var_1640 == 2) {
                            Adap.gcopy(11, 40, Gvar.var_1291 * 40, 40, 40); // Adap.buffer(11)は"img_stand0.gif"
                        }
                        if (Gvar.var_1640 == 4) {
                            Adap.gcopy(11, 160, Gvar.var_1291 * 40, 40, 40); // Adap.buffer(11)は"img_stand0.gif"
                        }
                        if (Gvar.var_1640 == 8) {
                            Adap.gcopy(11, 280, Gvar.var_1291 * 40, 40, 40); // Adap.buffer(11)は"img_stand0.gif"
                        }
                        if (Gvar.var_1640 == 6) {
                            Adap.gcopy(11, 400, Gvar.var_1291 * 40, 40, 40); // Adap.buffer(11)は"img_stand0.gif"
                        }
                        if (Gvar.var_1640 == 1) {
                            Adap.gcopy(11, 520, Gvar.var_1291 * 40, 40, 40); // Adap.buffer(11)は"img_stand0.gif"
                        }
                        if (Gvar.var_1640 == 3) {
                            Adap.gcopy(11, 760, Gvar.var_1291 * 40, 40, 40); // Adap.buffer(11)は"img_stand0.gif"
                        }
                        if (Gvar.var_1640 == 7) {
                            Adap.gcopy(11, 640, Gvar.var_1291 * 40, 40, 40); // Adap.buffer(11)は"img_stand0.gif"
                        }
                        if (Gvar.var_1640 == 9) {
                            Adap.gcopy(11, 880, Gvar.var_1291 * 40, 40, 40); // Adap.buffer(11)は"img_stand0.gif"
                        }
                    }
                    if (Gvar.var_742 >= 4 && Gvar.var_742 <= 10) {
                        if (Gvar.var_1640 == 2) {
                            Adap.gcopy(11, 80, Gvar.var_1291 * 40, 40, 40); // Adap.buffer(11)は"img_stand0.gif"
                        }
                        if (Gvar.var_1640 == 4) {
                            Adap.gcopy(11, 200, Gvar.var_1291 * 40, 40, 40); // Adap.buffer(11)は"img_stand0.gif"
                        }
                        if (Gvar.var_1640 == 8) {
                            Adap.gcopy(11, 320, Gvar.var_1291 * 40, 40, 40); // Adap.buffer(11)は"img_stand0.gif"
                        }
                        if (Gvar.var_1640 == 6) {
                            Adap.gcopy(11, 440, Gvar.var_1291 * 40, 40, 40); // Adap.buffer(11)は"img_stand0.gif"
                        }
                        if (Gvar.var_1640 == 1) {
                            Adap.gcopy(11, 560, Gvar.var_1291 * 40, 40, 40); // Adap.buffer(11)は"img_stand0.gif"
                        }
                        if (Gvar.var_1640 == 3) {
                            Adap.gcopy(11, 800, Gvar.var_1291 * 40, 40, 40); // Adap.buffer(11)は"img_stand0.gif"
                        }
                        if (Gvar.var_1640 == 7) {
                            Adap.gcopy(11, 680, Gvar.var_1291 * 40, 40, 40); // Adap.buffer(11)は"img_stand0.gif"
                        }
                        if (Gvar.var_1640 == 9) {
                            Adap.gcopy(11, 920, Gvar.var_1291 * 40, 40, 40); // Adap.buffer(11)は"img_stand0.gif"
                        }
                    }
                }
                if (Gvar.var_1291 == 20) { // タルカスの場合(20はタルカスの攻撃ドット)
                    Adap.gmode(2, null, null, null);
                    if (Gvar.var_742 == 6) {
                        Adap.color(0, 0, 0);
    
                        Adap.gmode(4, null, null, 100);
                    }
                    if (Gvar.var_742 == 3) {
                        if (Gvar.var_1640 == 2) {
                            Adap.gcopy(11, 0, Gvar.var_1291 * 40, 40, 40); // Adap.buffer(11)は"img_stand0.gif"
                        }
                        if (Gvar.var_1640 == 4) {
                            Adap.gcopy(11, 120, Gvar.var_1291 * 40, 40, 40); // Adap.buffer(11)は"img_stand0.gif"
                        }
                        if (Gvar.var_1640 == 8) {
                            Adap.gcopy(11, 240, Gvar.var_1291 * 40, 40, 40); // Adap.buffer(11)は"img_stand0.gif"
                        }
                        if (Gvar.var_1640 == 6) {
                            Adap.gcopy(11, 360, Gvar.var_1291 * 40, 40, 40); // Adap.buffer(11)は"img_stand0.gif"
                        }
                        if (Gvar.var_1640 == 1) {
                            Adap.gcopy(11, 480, Gvar.var_1291 * 40, 40, 40); // Adap.buffer(11)は"img_stand0.gif"
                        }
                        if (Gvar.var_1640 == 3) {
                            Adap.gcopy(11, 720, Gvar.var_1291 * 40, 40, 40); // Adap.buffer(11)は"img_stand0.gif"
                        }
                        if (Gvar.var_1640 == 7) {
                            Adap.gcopy(11, 600, Gvar.var_1291 * 40, 40, 40); // Adap.buffer(11)は"img_stand0.gif"
                        }
                        if (Gvar.var_1640 == 9) {
                            Adap.gcopy(11, 840, Gvar.var_1291 * 40, 40, 40); // Adap.buffer(11)は"img_stand0.gif"
                        }
                    }
                    if (Gvar.var_742 == 4) {
                        if (Gvar.var_1640 == 2) {
                            Adap.gcopy(11, 40, Gvar.var_1291 * 40, 40, 40); // Adap.buffer(11)は"img_stand0.gif"
                        }
                        if (Gvar.var_1640 == 4) {
                            Adap.gcopy(11, 160, Gvar.var_1291 * 40, 40, 40); // Adap.buffer(11)は"img_stand0.gif"
                        }
                        if (Gvar.var_1640 == 8) {
                            Adap.gcopy(11, 280, Gvar.var_1291 * 40, 40, 40); // Adap.buffer(11)は"img_stand0.gif"
                        }
                        if (Gvar.var_1640 == 6) {
                            Adap.gcopy(11, 400, Gvar.var_1291 * 40, 40, 40); // Adap.buffer(11)は"img_stand0.gif"
                        }
                        if (Gvar.var_1640 == 1) {
                            Adap.gcopy(11, 520, Gvar.var_1291 * 40, 40, 40); // Adap.buffer(11)は"img_stand0.gif"
                        }
                        if (Gvar.var_1640 == 3) {
                            Adap.gcopy(11, 760, Gvar.var_1291 * 40, 40, 40); // Adap.buffer(11)は"img_stand0.gif"
                        }
                        if (Gvar.var_1640 == 7) {
                            Adap.gcopy(11, 640, Gvar.var_1291 * 40, 40, 40); // Adap.buffer(11)は"img_stand0.gif"
                        }
                        if (Gvar.var_1640 == 9) {
                            Adap.gcopy(11, 880, Gvar.var_1291 * 40, 40, 40); // Adap.buffer(11)は"img_stand0.gif"
                        }
                    }
                    if (Gvar.var_742 == 5 || Gvar.var_742 == 6) {
                        if (Gvar.var_1640 == 2) {
                            Adap.gcopy(11, 80, Gvar.var_1291 * 40, 40, 40); // Adap.buffer(11)は"img_stand0.gif"
                        }
                        if (Gvar.var_1640 == 4) {
                            Adap.gcopy(11, 200, Gvar.var_1291 * 40, 40, 40); // Adap.buffer(11)は"img_stand0.gif"
                        }
                        if (Gvar.var_1640 == 8) {
                            Adap.gcopy(11, 320, Gvar.var_1291 * 40, 40, 40); // Adap.buffer(11)は"img_stand0.gif"
                        }
                        if (Gvar.var_1640 == 6) {
                            Adap.gcopy(11, 440, Gvar.var_1291 * 40, 40, 40); // Adap.buffer(11)は"img_stand0.gif"
                        }
                        if (Gvar.var_1640 == 1) {
                            Adap.gcopy(11, 560, Gvar.var_1291 * 40, 40, 40); // Adap.buffer(11)は"img_stand0.gif"
                        }
                        if (Gvar.var_1640 == 3) {
                            Adap.gcopy(11, 800, Gvar.var_1291 * 40, 40, 40); // Adap.buffer(11)は"img_stand0.gif"
                        }
                        if (Gvar.var_1640 == 7) {
                            Adap.gcopy(11, 680, Gvar.var_1291 * 40, 40, 40); // Adap.buffer(11)は"img_stand0.gif"
                        }
                        if (Gvar.var_1640 == 9) {
                            Adap.gcopy(11, 920, Gvar.var_1291 * 40, 40, 40); // Adap.buffer(11)は"img_stand0.gif"
                        }
                    }
                }
            }
        }
        Adap.gmode(2, null, null, null);
        return;
}

export {func567}
