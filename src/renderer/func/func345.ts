/**
 * func345 — func345 不明
 *
 * (org原典: newDTW_func3)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'

 // ディアボロ本体の描画処理
async function func345(this: any) {
        Adap.dbgprt(345);
        if (Gvar.var_123 >= 1) {

            Adap.gmode(4, null, null, 100);
            Gvar.var_1239 = 1;
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                if (Gvar.var_409 == 0) {
                    Gvar.var_778 = 0;
                }
                if (Gvar.var_409 == 1) {
                    Gvar.var_778 = 10;
                }
                if (Gvar.var_409 == 2) {
                    Gvar.var_778 = 20;
                }
                if (Gvar.var_409 == 3) {
                    Gvar.var_778 = 30;
                }
                if (Gvar.var_409 == 4) {
                    Gvar.var_778 = 40;
                }
                Gvar.var_764 = Gvar.var_393[Gvar.var_1239][1] - Gvar.var_66 + 4;
                Gvar.var_763 = Gvar.var_393[Gvar.var_1239][2] - Gvar.var_67 + 4;
                if (Gvar.var_199 == 4) {
                    Gvar.var_1150 = Gvar.var_764 * Gvar.var_35 - Gvar.var_778;
                    Gvar.var_1151 = Gvar.var_763 * Gvar.var_36 - 10;
                }
                if (Gvar.var_199 == 6) {
                    Gvar.var_1150 = Gvar.var_764 * Gvar.var_35 + Gvar.var_778;
                    Gvar.var_1151 = Gvar.var_763 * Gvar.var_36 - 10;
                }
                if (Gvar.var_199 == 8) {
                    Gvar.var_1150 = Gvar.var_764 * Gvar.var_35;
                    Gvar.var_1151 = Gvar.var_763 * Gvar.var_36 - Gvar.var_778 - 10;
                }
                if (Gvar.var_199 == 2) {
                    Gvar.var_1150 = Gvar.var_764 * Gvar.var_35;
                    Gvar.var_1151 = Gvar.var_763 * Gvar.var_36 + Gvar.var_778 - 10;
                }
                if (Gvar.var_199 == 1) {
                    Gvar.var_1150 = Gvar.var_764 * Gvar.var_35 - Gvar.var_778;
                    Gvar.var_1151 = Gvar.var_763 * Gvar.var_36 + Gvar.var_778 - 10;
                }
                if (Gvar.var_199 == 3) {
                    Gvar.var_1150 = Gvar.var_764 * Gvar.var_35 + Gvar.var_778;
                    Gvar.var_1151 = Gvar.var_763 * Gvar.var_36 + Gvar.var_778 - 10;
                }
                if (Gvar.var_199 == 7) {
                    Gvar.var_1150 = Gvar.var_764 * Gvar.var_35 - Gvar.var_778;
                    Gvar.var_1151 = Gvar.var_763 * Gvar.var_36 - Gvar.var_778 - 10;
                }
                if (Gvar.var_199 == 9) {
                    Gvar.var_1150 = Gvar.var_764 * Gvar.var_35 + Gvar.var_778;
                    Gvar.var_1151 = Gvar.var_763 * Gvar.var_36 - Gvar.var_778 - 10;
                }
                if (Gvar.var_217 == 1) {
                    Gvar.var_1150 = Gvar.var_764 * Gvar.var_35;
                    Gvar.var_1151 = Gvar.var_763 * Gvar.var_36 - 10;
                }
                Adap.pos(Gvar.var_1150, Gvar.var_1151);
                if (Gvar.var_393[Gvar.var_1239][0] == 2) {
                    Adap.gcopy(3, 80, 40, 40, 40);
                }
                if (Gvar.var_393[Gvar.var_1239][0] == 4) {
                    Adap.gcopy(3, 200, 40, 40, 40);
                }
                if (Gvar.var_393[Gvar.var_1239][0] == 8) {
                    Adap.gcopy(3, 320, 40, 40, 40);
                }
                if (Gvar.var_393[Gvar.var_1239][0] == 6) {
                    Adap.gcopy(3, 440, 40, 40, 40);
                }
                if (Gvar.var_393[Gvar.var_1239][0] == 1) {
                    Adap.gcopy(3, 560, 40, 40, 40);
                }
                if (Gvar.var_393[Gvar.var_1239][0] == 3) {
                    Adap.gcopy(3, 800, 40, 40, 40);
                }
                if (Gvar.var_393[Gvar.var_1239][0] == 7) {
                    Adap.gcopy(3, 680, 40, 40, 40);
                }
                if (Gvar.var_393[Gvar.var_1239][0] == 9) {
                    Adap.gcopy(3, 920, 40, 40, 40);
                }
                Gvar.var_1239++;
            }
        }
        Adap.gmode(2, null, null, null);
        if (Gvar.var_71[Gvar.var_66][Gvar.var_67] == 0) {
            Adap.color(0, 0, 0);
    
            Adap.gmode(4, null, null, 150);
        }
        if (Gvar.var_131 >= 1) {
            Adap.color(0, 0, 0);

            Adap.gmode(4, null, null, 100);
        }
        Gvar.var_764 = 4;
        Gvar.var_763 = 4;
        Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 10);
        if (Gvar.var_243 > 0) {
            if (Gvar.var_243 == 1 || Gvar.var_243 == 2 || Gvar.var_243 >= 8) {
                Gvar.var_1237 = 2;
            }
            if (Gvar.var_243 == 3) {
                Gvar.var_1237 = 4;
            }
            if (Gvar.var_243 >= 4 || Gvar.var_243 < 8) {
                Gvar.var_1237 = 6;
            }
            if (Gvar.var_199 == 4) {
                Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_1237, Gvar.var_763 * Gvar.var_36 - 10);
            }
            if (Gvar.var_199 == 6) {
                Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_1237, Gvar.var_763 * Gvar.var_36 - 10);
            }
            if (Gvar.var_199 == 2) {
                Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_1237);
            }
            if (Gvar.var_199 == 8) {
                Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_1237);
            }
            if (Gvar.var_199 == 1) {
                Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_1237, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_1237);
            }
            if (Gvar.var_199 == 3) {
                Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_1237, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_1237);
            }
            if (Gvar.var_199 == 7) {
                Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_1237, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_1237);
            }
            if (Gvar.var_199 == 9) {
                Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_1237, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_1237);
            }
        }
        if (Gvar.var_1201 == 1) {
            Adap.gmode(2, null, null, null);
            Adap.pos(4 * Gvar.var_35 + 10, 2 * Gvar.var_36);
            Adap.gcopy(3, 480, 400, 40, 80);
            Adap.pos(3 * Gvar.var_35 + 12, 2 * Gvar.var_36 - 17);
            if (Gvar.var_784 >= 0 && Gvar.var_784 < 2) {
                Adap.gcopy(3, 520, 400, 40, 40);
            }
            if (Gvar.var_784 >= 2 && Gvar.var_784 < 4) {
                Adap.gcopy(3, 560, 400, 40, 40);
            }
            if (Gvar.var_784 >= 4 && Gvar.var_784 < 6) {
                Adap.gcopy(3, 600, 400, 40, 40);
            }
            return;
        }
        if (Gvar.var_374 == 1) {
            return;
        }
        if (Gvar.var_211 == 0 && Gvar.var_218 >= 30) {
            Adap.pos(160, 160);
            Adap.gcopy(3, 280, 880, 40, 40);
            return;
        }
        if (Gvar.var_211 == 0 && Gvar.var_218 >= 1 && Gvar.var_218 < 30) {
            Adap.gcopy(3, 0, 880, 40, 40);
            return;
        }
        if (Gvar.var_211 == 0 && Gvar.var_1061 == 3 && Gvar.var_1054 == 0 && Gvar.var_144 != 0) {
            Adap.gcopy(3, 1120, 1200, 40, 40);
            return;
        }
        if (Gvar.var_211 == 0 && Gvar.var_1061 == 0 && Gvar.var_1054 == 0) {
            if (Gvar.var_199 == 2) {
                Adap.gcopy(3, 960, 0, 40, 40);
            }
            if (Gvar.var_199 == 4) {
                Adap.gcopy(3, 1000, 0, 40, 40);
            }
            if (Gvar.var_199 == 8) {
                Adap.gcopy(3, 1040, 0, 40, 40);
            }
            if (Gvar.var_199 == 6) {
                Adap.gcopy(3, 1080, 0, 40, 40);
            }
            if (Gvar.var_199 == 1) {
                Adap.gcopy(3, 1120, 0, 40, 40);
            }
            if (Gvar.var_199 == 3) {
                Adap.gcopy(3, 1200, 0, 40, 40);
            }
            if (Gvar.var_199 == 7) {
                Adap.gcopy(3, 1160, 0, 40, 40);
            }
            if (Gvar.var_199 == 9) {
                Adap.gcopy(3, 1240, 0, 40, 40);
            }
            return;
        }
        if (Gvar.var_144 == 91) {
            Adap.gcopy(3, 960, 1200, 40, 40);
            return;
        }
        if (Gvar.var_472 == 1) {
            if (Gvar.var_784 >= 0 && Gvar.var_784 < 2) {
                Adap.gcopy(3, 1000, 1200, 40, 40);
            }
            if (Gvar.var_784 >= 2 && Gvar.var_784 < 4) {
                Adap.gcopy(3, 1040, 1200, 40, 40);
            }
            if (Gvar.var_784 >= 4 && Gvar.var_784 < 6) {
                Adap.gcopy(3, 1080, 1200, 40, 40);
            }
            return;
        }
        if (Gvar.var_758 == 1) {
            Adap.gcopy(3, 440, 1080, 40, 40);
            return;
        }
        if (Gvar.var_758 == 2) {
            Adap.gcopy(3, 480, 1080, 40, 40);
            return;
        }
        if (Gvar.var_1240 == 3) {
            Adap.gcopy(3, 40, 0, 40, 40);
            return;
        }
        if (Gvar.var_1241 == 1) {
            Adap.gcopy(3, 40, 0, 40, 40);
            return;
        }
        if (Gvar.var_1242 >= 1) {
            Adap.gcopy(3, 1280, 160, 40, 40);
            return;
        }
        if (Gvar.var_1054 == 1) {
            Adap.gcopy(3, 1240, 40, 40, 40);
            return;
        }
        if (Gvar.var_1054 == 2) {
            Adap.gcopy(3, 1160, 40, 40, 40);
            return;
        }
        if (Gvar.var_1054 == 3) {
            Adap.gcopy(3, 1200, 40, 40, 40);
            return;
        }
        if (Gvar.var_1243 == 1) {
            Adap.gcopy(3, 1240, 240, 40, 40);
            return;
        }
        if (Gvar.var_1243 == 2) {
            Adap.gcopy(3, 1280, 240, 40, 40);
            return;
        }
        if (Gvar.var_1243 == 3) {
            Adap.gcopy(3, 1320, 240, 40, 40);
            return;
        }
        if (Gvar.var_1244 >= 1) {
            Adap.gcopy(3, 1120, 120, 40, 40);
            return;
        }
        if (Gvar.var_1245 >= 1) {
            if (Gvar.var_1245 == 1) {
                Adap.gcopy(3, 0, 1080, 40, 40);
                return;
            }
            if (Gvar.var_1245 == 2) {
                Adap.gcopy(3, 40, 1080, 40, 40);
                return;
            }
            if (Gvar.var_1245 == 3) {
                Adap.gcopy(3, 80, 1080, 40, 40);
                return;
            }
            if (Gvar.var_1245 == 4) {
                Adap.gcopy(3, 120, 1080, 40, 40);
                return;
            }
            if (Gvar.var_1245 == 5) {
                Adap.gcopy(3, 160, 1080, 40, 40);
                Gvar.var_1245 = 6;
                return;
            }
            if (Gvar.var_1245 == 6) {
                Adap.gcopy(3, 200, 1080, 40, 40);
                Gvar.var_1245 = 5;
                return;
            }
            if (Gvar.var_1245 == 7) {
                Adap.gcopy(3, 160, 1080, 40, 40);
                return;
            }
        }
        if (Gvar.var_1246 >= 1) { // アイテムを投げた時のフラグON
            Gvar.belongings_item_list = Gvar.var_1247;
            Gvar.var_1248 = Gvar.var_1249;
            if (Gvar.var_199 == 2) {
                Adap.pos(160, 150);
                Adap.gcopy(3, 480, 0, 40, 40);
                Adap.pos(145, 140);
                await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            if (Gvar.var_199 == 8) {
                Adap.pos(160, 150);
                Adap.gcopy(3, 920, 0, 40, 40);
                Adap.pos(175, 150);
                await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            if (Gvar.var_199 == 4) {
                Adap.pos(160, 150);
                Adap.gcopy(3, 560, 0, 40, 40);
                Adap.pos(175, 150);
                await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            if (Gvar.var_199 == 6) {
                Adap.pos(160, 150);
                Adap.gcopy(3, 720, 0, 40, 40);
                Adap.pos(145, 150);
                await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            if (Gvar.var_199 == 1) {
                Adap.pos(150, 140);
                await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
                Adap.pos(160, 150);
                Adap.gcopy(3, 120, 0, 40, 40);
            }
            if (Gvar.var_199 == 3) {
                Adap.pos(170, 140);
                await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
                Adap.pos(160, 150);
                Adap.gcopy(3, 440, 0, 40, 40);
            }
            if (Gvar.var_199 == 7) {
                Adap.pos(160, 150);
                Adap.gcopy(3, 200, 0, 40, 40);
                Adap.pos(160, 160);
                await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            if (Gvar.var_199 == 9) {
                Adap.pos(160, 150);
                Adap.gcopy(3, 360, 0, 40, 40);
                Adap.pos(160, 160);
                await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            return;
        }
        if (Gvar.var_1250 == 1) {
            Adap.gcopy(3, 440, 80, 40, 40);
            return;
        }
        if (Gvar.var_1251 == 1) {
            Adap.gcopy(3, 480, 1160, 40, 40);
            return;
        }
        if (Gvar.var_1251 == 2) {
            Adap.gcopy(3, 520, 1160, 40, 40);
            return;
        }
        if (Gvar.var_1251 == 3) {
            Adap.gcopy(3, 560, 1160, 40, 40);
            return;
        }
        if (Gvar.var_1251 == 4) {
            Adap.gcopy(3, 600, 1160, 40, 40);
            return;
        }
        if (Gvar.var_1251 == 5) {
            Adap.gcopy(3, 480, 1040, 40, 40);
            return;
        }
        if (Gvar.var_1251 == 6) {
            Adap.gcopy(3, 520, 1040, 40, 40);
            return;
        }
        if (Gvar.var_1251 == 7) {
            Adap.gcopy(3, 560, 1040, 40, 40);
            return;
        }
        if (Gvar.var_1251 == 8) {
            Adap.gcopy(3, 600, 1040, 40, 40);
            return;
        }
        if (Gvar.var_1252 == 1) {
            if (Gvar.var_784 >= 0 && Gvar.var_784 < 3) {
                Adap.gcopy(3, 1160, 160, 40, 40);
            }
            if (Gvar.var_784 >= 3 && Gvar.var_784 < 7) {
                Adap.gcopy(3, 1200, 160, 40, 40);
            }
            return;
        }
        if (Gvar.var_1252 == 2) {
            Adap.gcopy(3, 1240, 160, 40, 40);
            Adap.pos(175, 135);
            Gvar.belongings_item_list = Gvar.var_1253;
            await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            return;
        }
        if (Gvar.var_1252 == 3) {
            Adap.gcopy(3, 1240, 160, 40, 40);
            return;
        }
        if (Gvar.var_1254 == 1) {
            Adap.gcopy(3, 1280, 160, 40, 40);
            Adap.pos(175, 135);
            Gvar.belongings_item_list = Gvar.var_1253;
            await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            return;
        }
        if (Gvar.var_1255 == 1) {
            Adap.gcopy(3, 520, 80, 40, 40);
            return;
        }
        if (Gvar.var_1256 == 1) {
            Adap.gcopy(3, 640, 80, 40, 40);
            return;
        }
        if (Gvar.var_1256 == 2) {
            Adap.gcopy(3, 680, 80, 40, 40);
            return;
        }
        if (Gvar.var_1257 == 1) {
            Adap.gcopy(3, 560, 80, 40, 40);
            return;
        }
        if (Gvar.var_1258 == 1) {
            Adap.gcopy(3, 720, 80, 40, 40);
            return;
        }
        if (Gvar.var_1258 == 2) {
            Adap.gcopy(3, 760, 80, 40, 40);
            return;
        }
        if (Gvar.var_1258 == 3) {
            Adap.gcopy(3, 800, 80, 40, 40);
            return;
        }
        if (Gvar.var_218 >= 1 && Gvar.var_218 < 30) {
            Adap.gcopy(3, 0, 880, 40, 40);
            return;
        }
        if (Gvar.var_470 == 1) {
            Adap.gcopy(3, 0, 960, 40, 40);
            return;
        }
        if (Gvar.var_470 == 2) {
            Adap.gcopy(3, 40, 960, 40, 40);
            return;
        }
        if (Gvar.var_470 == 3) {
            Adap.gcopy(3, 80, 960, 40, 40);
            return;
        }
        if (Gvar.var_470 == 4) {
            Adap.gcopy(3, 120, 960, 40, 40);
            return;
        }
        if (Gvar.var_470 == 5) {
            Adap.gcopy(3, 160, 960, 40, 40);
            return;
        }
        if (Gvar.var_470 == 6) {
            Adap.gcopy(3, 200, 960, 40, 40);
            return;
        }
        if (Gvar.var_470 == 7) {
            Adap.gcopy(3, 240, 960, 40, 40);
            return;
        }
        if (Gvar.var_470 == 8) {
            Adap.gcopy(3, 280, 960, 40, 40);
            return;
        }
        if (Gvar.var_470 == 9) {
            Adap.gcopy(3, 320, 960, 40, 40);
            return;
        }
        if (Gvar.var_470 == 10) {
            Adap.gcopy(3, 360, 960, 40, 40);
            return;
        }
        if (Gvar.var_470 == 11) {
            Adap.gcopy(3, 400, 960, 40, 40);
            return;
        }
        if (Gvar.var_470 == 12) {
            Adap.gcopy(3, 440, 960, 40, 40);
            return;
        }
        if (Gvar.var_470 == 13) {
            Adap.gcopy(3, 480, 960, 40, 40);
            return;
        }
        if (Gvar.var_470 == 14) {
            Adap.gcopy(3, 520, 960, 40, 40);
            return;
        }
        if (Gvar.var_470 == 15) {
            Adap.gcopy(3, 560, 960, 40, 40);
            return;
        }
        if (Gvar.var_470 == 16) {
            Adap.gcopy(3, 600, 960, 40, 40);
            return;
        }
        if (Gvar.var_470 == 17) {
            Adap.gcopy(3, 0, 920, 40, 40);
            return;
        }
        if (Gvar.var_470 == 18) {
            Adap.gcopy(3, 40, 920, 40, 40);
            return;
        }
        if (Gvar.var_470 == 19) {
            Adap.gcopy(3, 80, 920, 40, 40);
            return;
        }
        if (Gvar.var_470 == 20) {
            Adap.gcopy(3, 120, 920, 40, 40);
            return;
        }
        if (Gvar.var_218 >= 30) {
            Adap.pos(160, 160);
            Adap.gcopy(3, 280, 880, 40, 40);
            return;
        }
        if (Gvar.var_471 == 1) {
            Adap.gcopy(3, 40, 880, 40, 40);
            return;
        }
        if (Gvar.var_471 == 2) {
            Adap.gcopy(3, 80, 880, 40, 40);
            return;
        }
        if (Gvar.var_471 == 3) {
            Adap.pos(160, 120);
            Adap.gcopy(3, 120, 880, 40, 40);
            return;
        }
        if (Gvar.var_471 == 4) {
            Adap.pos(160, 125);
            Adap.gcopy(3, 160, 880, 40, 40);
            return;
        }
        if (Gvar.var_471 == 5) {
            Adap.pos(160, 130);
            Adap.gcopy(3, 200, 880, 40, 40);
            return;
        }
        if (Gvar.var_471 == 6) {
            Adap.pos(160, 135);
            Adap.gcopy(3, 240, 880, 40, 40);
            return;
        }
        if (Gvar.var_471 == 7) {
            Adap.pos(160, 140);
            Adap.gcopy(3, 120, 880, 40, 40);
            return;
        }
        if (Gvar.var_471 == 8) {
            Adap.pos(160, 150);
            Adap.gcopy(3, 160, 880, 40, 40);
            return;
        }
        if (Gvar.var_471 == 9) {
            Adap.pos(160, 160);
            Adap.gcopy(3, 160, 880, 40, 40);
            return;
        }
        if (Gvar.var_471 == 10) {
            Adap.pos(160, 160);
            Adap.gcopy(3, 120, 880, 40, 40);
            return;
        }
        if (Gvar.var_1259 == 1) {
            Adap.gcopy(3, 1160, 80, 40, 40);
            return;
        }
        if (Gvar.var_1259 == 2) {
            Adap.gcopy(3, 1200, 80, 40, 40);
            return;
        }
        if (Gvar.var_1259 == 3) {
            Adap.gcopy(3, 1240, 80, 40, 40);
            return;
        }
        if (Gvar.var_1260 >= 1) {
            Adap.gcopy(3, 480, 80, 40, 40);
            return;
        }
        if (Gvar.var_1261 == 1) {
            Adap.gcopy(3, 360, 80, 40, 40);
            return;
        }
        if (Gvar.var_1261 == 2) {
            Adap.gcopy(3, 1040, 40, 40, 40);
            return;
        }
        if (Gvar.var_1261 == 3) {
            Adap.gcopy(3, 1080, 40, 40, 40);
            return;
        }
        if (Gvar.var_1262 == 1) {
            Adap.pos(160, 150);
            Adap.gcopy(3, 960, 40, 40, 40);
            return;
        }
        if (Gvar.var_1262 == 2) {
            Adap.pos(160, 152);
            Adap.gcopy(3, 960, 40, 40, 40);
            return;
        }
        if (Gvar.var_1262 == 3) {
            Adap.pos(160, 150);
            Adap.gcopy(3, 1000, 40, 40, 40);
            return;
        }
        if (Gvar.var_1262 == 4) {
            Adap.pos(160, 152);
            Adap.gcopy(3, 1000, 40, 40, 40);
            return;
        }
        if (Gvar.var_1263 == 1) {
            Adap.gcopy(3, 1080, 120, 40, 40);
            return;
        }
        if (Gvar.var_1224 == 10) {
            Adap.pos(120, 140);
            if (Gvar.var_1225 == 5) {
                Adap.gcopy(3, 1000, 200, 80, 40);
            }
            if (Gvar.var_1225 == 6) {
                Adap.gcopy(3, 1080, 200, 80, 40);
            }
            if (Gvar.var_1225 == 7) {
                Adap.gcopy(3, 1000, 240, 80, 40);
            }
            if (Gvar.var_1225 == 8) {
                Adap.gcopy(3, 1080, 240, 80, 40);
            }
            Adap.pos(160, 150);
            Adap.gcopy(3, 880, 80, 40, 40);
            return;
        }
        if (Gvar.var_1264 == 1) {
            if (Gvar.var_784 >= 0 && Gvar.var_784 < 2) {
                Adap.gcopy(3, 0, 80, 40, 40);
            }
            if (Gvar.var_784 >= 2 && Gvar.var_784 < 4) {
                Adap.gcopy(3, 40, 80, 40, 40);
            }
            if (Gvar.var_784 >= 4 && Gvar.var_784 < 6) {
                Adap.gcopy(3, 80, 80, 40, 40);
            }
            await Func.func349();
            Adap.gmode(2, null, null, null);
            return;
        }
        if (Gvar.var_1214 == 1) {
            if (Gvar.var_1215 >= 0 && Gvar.var_1215 < 2) {
                Adap.gcopy(3, 120, 80, 40, 40);
            }
            if (Gvar.var_1215 >= 2 && Gvar.var_1215 < 3) {
                Adap.gcopy(3, 160, 80, 40, 40);
            }
            if (Gvar.var_1215 >= 3 && Gvar.var_1215 < 6) {
                Adap.gcopy(3, 200, 80, 40, 40);
            }
            await Func.func349();
            Adap.gmode(2, null, null, null);
            return;
        }
        if (Gvar.var_1265 >= 1) {
            Adap.gcopy(3, 1000, 400, 40, 40);
            return;
        }
        if (Gvar.var_1214 == 2) {
            if (Gvar.var_1215 >= 0 && Gvar.var_1215 < 2) {
                Adap.gcopy(3, 240, 80, 40, 40);
            }
            if (Gvar.var_1215 >= 2 && Gvar.var_1215 < 3) {
                Adap.gcopy(3, 280, 80, 40, 40);
            }
            if (Gvar.var_1215 >= 3 && Gvar.var_1215 < 6) {
                Adap.gcopy(3, 320, 80, 40, 40);
            }
            await Func.func349();
            Adap.gmode(2, null, null, null);
            return;
        }
        if (Gvar.var_1214 == 3) {
            if (Gvar.var_1215 >= 0 && Gvar.var_1215 < 2) {
                Adap.gcopy(3, 1160, 200, 40, 40);
            }
            if (Gvar.var_1215 >= 2 && Gvar.var_1215 < 3) {
                Adap.gcopy(3, 1200, 200, 40, 40);
            }
            if (Gvar.var_1215 >= 3 && Gvar.var_1215 < 6) {
                Adap.gcopy(3, 1240, 200, 40, 40);
            }
            await Func.func349();
            Adap.gmode(2, null, null, null);
            return;
        }
        if (Gvar.var_1218 == 1) {
            if (Gvar.var_1219 <= 4) {
                Adap.gcopy(3, 40, 0, 40, 40);
            }
            if (Gvar.var_1219 >= 5 && Gvar.var_1219 <= 6) {
                Adap.gcopy(3, 0, 240, 40, 40);
            }
            if (Gvar.var_1219 >= 7 && Gvar.var_1219 <= 8) {
                Adap.gcopy(3, 40, 240, 40, 40);
            }
            if (Gvar.var_1219 >= 9 && Gvar.var_1219 <= 10) {
                Adap.gcopy(3, 80, 240, 40, 40);
            }
            if (Gvar.var_1219 >= 11 && Gvar.var_1219 <= 12) {
                Adap.gcopy(3, 120, 240, 40, 40);
            }
            if (Gvar.var_1219 >= 13 && Gvar.var_1219 <= 14) {
                Adap.gcopy(3, 160, 240, 40, 40);
            }
            if (Gvar.var_1219 >= 15 && Gvar.var_1219 <= 16) {
                Adap.gcopy(3, 200, 240, 40, 40);
            }
            if (Gvar.var_1219 >= 17 && Gvar.var_1219 <= 20) {
            }
            if (Gvar.var_1219 == 21) {
                Adap.gcopy(3, 240, 240, 40, 40);
            }
            if (Gvar.var_1219 == 22) {
                Adap.gcopy(3, 280, 240, 40, 40);
            }
            if (Gvar.var_1219 >= 23) {
                Adap.gcopy(3, 320, 240, 40, 40);
            }
            Adap.gmode(2, null, null, null);
            return;
        }
        if (Gvar.var_1218 == 2) {
            if (Gvar.var_1219 >= 15) {
                Adap.gcopy(3, 0, 240, 40, 40);
            }
            if (Gvar.var_1219 == 14) {
                Adap.gcopy(3, 40, 240, 40, 40);
            }
            if (Gvar.var_1219 == 13) {
                Adap.gcopy(3, 80, 240, 40, 40);
            }
            if (Gvar.var_1219 == 12) {
                Adap.gcopy(3, 120, 240, 40, 40);
            }
            if (Gvar.var_1219 == 11) {
                Adap.gcopy(3, 160, 240, 40, 40);
            }
            if (Gvar.var_1219 == 10) {
                Adap.gcopy(3, 200, 240, 40, 40);
            }
            if (Gvar.var_1219 >= 6 && Gvar.var_1219 <= 9) {
            }
            if (Gvar.var_1219 == 5) {
                Adap.gcopy(3, 240, 240, 40, 40);
            }
            if (Gvar.var_1219 == 4) {
                Adap.gcopy(3, 280, 240, 40, 40);
            }
            if (Gvar.var_1219 <= 3) {
                Adap.gcopy(3, 320, 240, 40, 40);
            }
            Adap.gmode(2, null, null, null);
            return;
        }
        if (Gvar.var_1218 == 3) {
            Adap.gcopy(3, 320, 240, 40, 40);
            Adap.gmode(2, null, null, null);
            return;
        }
        if (Gvar.var_1238 >= 5 && Gvar.var_1238 < 83) {
            if (Gvar.var_1238 >= 5 && Gvar.var_1238 < 10) {
                Adap.gcopy(3, 920, 360, 40, 40);
            }
            if (Gvar.var_1238 == 10) {
                Adap.gcopy(3, 960, 360, 40, 40);
            }
            if (Gvar.var_1238 == 11) {
                Adap.gcopy(3, 1000, 360, 40, 40);
            }
            if (Gvar.var_1238 >= 12 && Gvar.var_1238 < 76) {
                Adap.gcopy(3, 880, 360, 40, 40);
            }
            if (Gvar.var_1238 == 76) {
                Adap.gcopy(3, 1000, 360, 40, 40);
            }
            if (Gvar.var_1238 == 77) {
                Adap.gcopy(3, 960, 360, 40, 40);
            }
            if (Gvar.var_1238 >= 78 && Gvar.var_1238 < 83) {
                Adap.gcopy(3, 920, 360, 40, 40);
            }
            Adap.gmode(2, null, null, null);
            return;
        }
        if (Gvar.var_219 >= 1 || Gvar.var_1061 == 3) {
            Adap.gcopy(3, 1280, 0, 40, 40);
            if (Gvar.var_1061 == 0) {
                if (Gvar.var_784 >= 0 && Gvar.var_784 < 2) {
                    Adap.gcopy(3, 360, 320, 40, 40);
                }
                if (Gvar.var_784 >= 2 && Gvar.var_784 < 4) {
                    Adap.gcopy(3, 400, 320, 40, 40);
                }
                if (Gvar.var_784 >= 4 && Gvar.var_784 < 6) {
                    Adap.gcopy(3, 440, 320, 40, 40);
                }
            }
            await Func.func349();
            Adap.gmode(2, null, null, null);
            return;
        }
        if (Gvar.var_128 >= 1) {
            Adap.gcopy(3, 960, 0, 40, 40);
            Adap.color(0, 0, 0);

            Adap.gmode(4, null, null, 170);
            Adap.gcopy(3, 40, 360, 40, 40);
            Adap.gmode(2, null, null, null);
            return;
        }
        if (Gvar.var_243 == 1 || Gvar.var_243 == 2 || Gvar.var_243 >= 10) {
            if (Gvar.var_199 == 2) {
                Adap.gcopy(3, 0, 40, 40, 40);
            }
            if (Gvar.var_199 == 4) {
                Adap.gcopy(3, 120, 40, 40, 40);
            }
            if (Gvar.var_199 == 8) {
                Adap.gcopy(3, 240, 40, 40, 40);
            }
            if (Gvar.var_199 == 6) {
                Adap.gcopy(3, 360, 40, 40, 40);
            }
            if (Gvar.var_199 == 1) {
                Adap.gcopy(3, 480, 40, 40, 40);
            }
            if (Gvar.var_199 == 3) {
                Adap.gcopy(3, 720, 40, 40, 40);
            }
            if (Gvar.var_199 == 7) {
                Adap.gcopy(3, 600, 40, 40, 40);
            }
            if (Gvar.var_199 == 9) {
                Adap.gcopy(3, 840, 40, 40, 40);
            }
            await Func.func349();
        }
        if (Gvar.var_243 == 3) {
            if (Gvar.var_199 == 2) {
                Adap.gcopy(3, 40, 40, 40, 40);
            }
            if (Gvar.var_199 == 4) {
                Adap.gcopy(3, 160, 40, 40, 40);
            }
            if (Gvar.var_199 == 8) {
                Adap.gcopy(3, 280, 40, 40, 40);
            }
            if (Gvar.var_199 == 6) {
                Adap.gcopy(3, 400, 40, 40, 40);
            }
            if (Gvar.var_199 == 1) {
                Adap.gcopy(3, 520, 40, 40, 40);
            }
            if (Gvar.var_199 == 3) {
                Adap.gcopy(3, 760, 40, 40, 40);
            }
            if (Gvar.var_199 == 7) {
                Adap.gcopy(3, 640, 40, 40, 40);
            }
            if (Gvar.var_199 == 9) {
                Adap.gcopy(3, 880, 40, 40, 40);
            }
            await Func.func349();
        }
        if (Gvar.var_243 >= 4 && Gvar.var_243 < 10) {
            if (Gvar.var_199 == 2) {
                Adap.gcopy(3, 80, 40, 40, 40);
            }
            if (Gvar.var_199 == 4) {
                Adap.gcopy(3, 200, 40, 40, 40);
            }
            if (Gvar.var_199 == 8) {
                Adap.gcopy(3, 320, 40, 40, 40);
            }
            if (Gvar.var_199 == 6) {
                Adap.gcopy(3, 440, 40, 40, 40);
            }
            if (Gvar.var_199 == 1) {
                Adap.gcopy(3, 560, 40, 40, 40);
            }
            if (Gvar.var_199 == 3) {
                Adap.gcopy(3, 800, 40, 40, 40);
            }
            if (Gvar.var_199 == 7) {
                Adap.gcopy(3, 680, 40, 40, 40);
            }
            if (Gvar.var_199 == 9) {
                Adap.gcopy(3, 920, 40, 40, 40);
            }
            await Func.func349();
        }
        if (Gvar.var_583 == 1) {
            Adap.gcopy(3, 400, 80, 40, 40);
            await Func.func349();
            Adap.gmode(2, null, null, null);
            return;
        }
        if (Gvar.var_389 == 1) {
            if (Gvar.var_83[Gvar.var_673].Var30 == 1 || Gvar.var_127 != 0 || Gvar.var_132 != 0) {
                if (Gvar.var_199 == 2) {
                    Adap.gcopy(3, 960, 0, 40, 40);
                }
                if (Gvar.var_199 == 4) {
                    Adap.gcopy(3, 1000, 0, 40, 40);
                }
                if (Gvar.var_199 == 8) {
                    Adap.gcopy(3, 1040, 0, 40, 40);
                }
                if (Gvar.var_199 == 6) {
                    Adap.gcopy(3, 1080, 0, 40, 40);
                }
                if (Gvar.var_199 == 1) {
                    Adap.gcopy(3, 1120, 0, 40, 40);
                }
                if (Gvar.var_199 == 3) {
                    Adap.gcopy(3, 1200, 0, 40, 40);
                }
                if (Gvar.var_199 == 7) {
                    Adap.gcopy(3, 1160, 0, 40, 40);
                }
                if (Gvar.var_199 == 9) {
                    Adap.gcopy(3, 1240, 0, 40, 40);
                }
                await Func.func349();
                return;
            }
            if (Gvar.var_83[Gvar.var_673].Var30 == 0 && Gvar.var_127 == 0 && Gvar.var_132 == 0) {
                if (Gvar.var_83[Gvar.var_673].Var5 == 4) {
                    Adap.gcopy(3, 1080, 0, 40, 40);
                    Gvar.var_199 = 6;
                }
                if (Gvar.var_83[Gvar.var_673].Var5 == 6) {
                    Adap.gcopy(3, 1000, 0, 40, 40);
                    Gvar.var_199 = 4;
                }
                if (Gvar.var_83[Gvar.var_673].Var5 == 8) {
                    Adap.gcopy(3, 960, 0, 40, 40);
                    Gvar.var_199 = 2;
                }
                if (Gvar.var_83[Gvar.var_673].Var5 == 2) {
                    Adap.gcopy(3, 1040, 0, 40, 40);
                    Gvar.var_199 = 8;
                }
                if (Gvar.var_83[Gvar.var_673].Var5 == 1) {
                    Adap.gcopy(3, 1240, 0, 40, 40);
                    Gvar.var_199 = 9;
                }
                if (Gvar.var_83[Gvar.var_673].Var5 == 3) {
                    Adap.gcopy(3, 1160, 0, 40, 40);
                    Gvar.var_199 = 7;
                }
                if (Gvar.var_83[Gvar.var_673].Var5 == 7) {
                    Adap.gcopy(3, 1200, 0, 40, 40);
                    Gvar.var_199 = 3;
                }
                if (Gvar.var_83[Gvar.var_673].Var5 == 9) {
                    Adap.gcopy(3, 1120, 0, 40, 40);
                    Gvar.var_199 = 1;
                }
                await Func.func349();
                return;
            }
        }
        if (Gvar.var_389 == 2 || Gvar.var_1223 == 1 || Gvar.var_178 >= 1) {
            if (Gvar.var_199 == 2) {
                Adap.gcopy(3, 960, 0, 40, 40);
            }
            if (Gvar.var_199 == 4) {
                Adap.gcopy(3, 1000, 0, 40, 40);
            }
            if (Gvar.var_199 == 8) {
                Adap.gcopy(3, 1040, 0, 40, 40);
            }
            if (Gvar.var_199 == 6) {
                Adap.gcopy(3, 1080, 0, 40, 40);
            }
            if (Gvar.var_199 == 1) {
                Adap.gcopy(3, 1120, 0, 40, 40);
            }
            if (Gvar.var_199 == 3) {
                Adap.gcopy(3, 1200, 0, 40, 40);
            }
            if (Gvar.var_199 == 7) {
                Adap.gcopy(3, 1160, 0, 40, 40);
            }
            if (Gvar.var_199 == 9) {
                Adap.gcopy(3, 1240, 0, 40, 40);
            }
            await Func.func349();
            return;
        }
        if (Gvar.var_1220 == 1 || Gvar.var_1191 == 1 || Gvar.var_1190 >= 1 || Gvar.var_1266 >= 1) {
            if (Gvar.var_1267 != 1) {
                if (Gvar.var_199 == 2) {
                    Adap.gcopy(3, 80, 40, 40, 40);
                }
                if (Gvar.var_199 == 4) {
                    Adap.gcopy(3, 200, 40, 40, 40);
                }
                if (Gvar.var_199 == 8) {
                    Adap.gcopy(3, 320, 40, 40, 40);
                }
                if (Gvar.var_199 == 6) {
                    Adap.gcopy(3, 440, 40, 40, 40);
                }
                if (Gvar.var_199 == 1) {
                    Adap.gcopy(3, 560, 40, 40, 40);
                }
                if (Gvar.var_199 == 3) {
                    Adap.gcopy(3, 800, 40, 40, 40);
                }
                if (Gvar.var_199 == 7) {
                    Adap.gcopy(3, 680, 40, 40, 40);
                }
                if (Gvar.var_199 == 9) {
                    Adap.gcopy(3, 920, 40, 40, 40);
                }
                if (Gvar.var_1220 == 1 || Gvar.var_1191 == 1 || Gvar.var_1266 >= 1) {
                    await Func.func346(); // 射撃discの攻撃時に表示されるスタンド本体ドット絵設定
                }
                return;
            }
        }
        if (Gvar.var_108 == 1) {
            Adap.gcopy(3, 960, 0, 40, 40);
            await Func.func349();
            Adap.gmode(2, null, null, null);
            return;
        }
        if (Gvar.var_1220 == 0 && Gvar.var_1191 == 0 && Gvar.var_243 == 0) {
            if (Gvar.var_157 == 0 && Gvar.var_240 == 0) {
                for (let cnt3 = 0; cnt3 < 12; ++cnt3) {
                    Gvar.var_1067[cnt3] = cnt3;
                }
            }
            if (Gvar.var_157 >= 1 || Gvar.var_240 == 1) {
                Gvar.var_1067[0] = 0;
                Gvar.var_1067[1] = 1;
                Gvar.var_1067[2] = 6;
                Gvar.var_1067[3] = 7;
                Gvar.var_1067[4] = 2;
                Gvar.var_1067[5] = 5;
                Gvar.var_1067[6] = 3;
                Gvar.var_1067[7] = 4;
                Gvar.var_1067[8] = 9;
                Gvar.var_1067[9] = 10;
                Gvar.var_1067[10] = 8;
                Gvar.var_1067[11] = 11;
            }
            if (Gvar.var_144 == 0 && Gvar.var_1268 == 0) {
                if (Gvar.var_199 == 8) {
                    if (Gvar.var_1226 == Gvar.var_1067[0] || Gvar.var_1226 == Gvar.var_1067[1] || Gvar.var_1226 == Gvar.var_1067[2] || Gvar.var_1226 == Gvar.var_1067[3]) {
                        Adap.gcopy(3, 240, 0, 40, 40);
                    }
                    if (Gvar.var_1226 == Gvar.var_1067[4] || Gvar.var_1226 == Gvar.var_1067[5] || Gvar.var_1226 == Gvar.var_1067[10] || Gvar.var_1226 == Gvar.var_1067[11]) {
                        Adap.gcopy(3, 280, 0, 40, 40);
                    }
                    if (Gvar.var_1226 == Gvar.var_1067[6] || Gvar.var_1226 == Gvar.var_1067[7] || Gvar.var_1226 == Gvar.var_1067[8] || Gvar.var_1226 == Gvar.var_1067[9]) {
                        Adap.gcopy(3, 320, 0, 40, 40);
                    }
                }
                if (Gvar.var_199 == 2) { // ディアボロの正面ドット設定
                    if (Gvar.var_1226 == Gvar.var_1067[0] || Gvar.var_1226 == Gvar.var_1067[1] || Gvar.var_1226 == Gvar.var_1067[2] || Gvar.var_1226 == Gvar.var_1067[3]) {
                        Adap.gcopy(3, 0, 0, 40, 40); // buffer_id = 3 なので "img_mychara.gif" の1行目の一番左(ディアボロ正面)
                    }
                    if (Gvar.var_1226 == Gvar.var_1067[4] || Gvar.var_1226 == Gvar.var_1067[5] || Gvar.var_1226 == Gvar.var_1067[10] || Gvar.var_1226 == Gvar.var_1067[11]) {
                        Adap.gcopy(3, 40, 0, 40, 40); // buffer_id = 3 なので "img_mychara.gif" の2行目の一番左(ディアボロ正面)
                    }
                    if (Gvar.var_1226 == Gvar.var_1067[6] || Gvar.var_1226 == Gvar.var_1067[7] || Gvar.var_1226 == Gvar.var_1067[8] || Gvar.var_1226 == Gvar.var_1067[9]) {
                        Adap.gcopy(3, 80, 0, 40, 40); // buffer_id = 3 なので img_mychara.gif 主にディアボロの動作関係ドット絵
                    }
                }
                if (Gvar.var_199 == 4) {
                    if (Gvar.var_1226 == Gvar.var_1067[0] || Gvar.var_1226 == Gvar.var_1067[1] || Gvar.var_1226 == Gvar.var_1067[2] || Gvar.var_1226 == Gvar.var_1067[3]) {
                        Adap.gcopy(3, 120, 0, 40, 40); // buffer_id = 3 なので "img_mychara.gif" の1行目4列目(ディアボロ右)
                    }
                    if (Gvar.var_1226 == Gvar.var_1067[4] || Gvar.var_1226 == Gvar.var_1067[5] || Gvar.var_1226 == Gvar.var_1067[10] || Gvar.var_1226 == Gvar.var_1067[11]) {
                        Adap.gcopy(3, 160, 0, 40, 40); // buffer_id = 3 なので "img_mychara.gif" の1行目5列目(ディアボロ右)
                    }
                    if (Gvar.var_1226 == Gvar.var_1067[6] || Gvar.var_1226 == Gvar.var_1067[7] || Gvar.var_1226 == Gvar.var_1067[8] || Gvar.var_1226 == Gvar.var_1067[9]) {
                        Adap.gcopy(3, 200, 0, 40, 40);
                    }
                }
                if (Gvar.var_199 == 6) {
                    if (Gvar.var_1226 == Gvar.var_1067[0] || Gvar.var_1226 == Gvar.var_1067[1] || Gvar.var_1226 == Gvar.var_1067[2] || Gvar.var_1226 == Gvar.var_1067[3]) {
                        Adap.gcopy(3, 360, 0, 40, 40);
                    }
                    if (Gvar.var_1226 == Gvar.var_1067[4] || Gvar.var_1226 == Gvar.var_1067[5] || Gvar.var_1226 == Gvar.var_1067[10] || Gvar.var_1226 == Gvar.var_1067[11]) {
                        Adap.gcopy(3, 400, 0, 40, 40);
                    }
                    if (Gvar.var_1226 == Gvar.var_1067[6] || Gvar.var_1226 == Gvar.var_1067[7] || Gvar.var_1226 == Gvar.var_1067[8] || Gvar.var_1226 == Gvar.var_1067[9]) {
                        Adap.gcopy(3, 440, 0, 40, 40);
                    }
                }
                if (Gvar.var_199 == 1) {
                    if (Gvar.var_1226 == Gvar.var_1067[0] || Gvar.var_1226 == Gvar.var_1067[1] || Gvar.var_1226 == Gvar.var_1067[2] || Gvar.var_1226 == Gvar.var_1067[3]) {
                        Adap.gcopy(3, 480, 0, 40, 40);
                    }
                    if (Gvar.var_1226 == Gvar.var_1067[4] || Gvar.var_1226 == Gvar.var_1067[5] || Gvar.var_1226 == Gvar.var_1067[10] || Gvar.var_1226 == Gvar.var_1067[11]) {
                        Adap.gcopy(3, 520, 0, 40, 40);
                    }
                    if (Gvar.var_1226 == Gvar.var_1067[6] || Gvar.var_1226 == Gvar.var_1067[7] || Gvar.var_1226 == Gvar.var_1067[8] || Gvar.var_1226 == Gvar.var_1067[9]) {
                        Adap.gcopy(3, 560, 0, 40, 40);
                    }
                }
                if (Gvar.var_199 == 7) {
                    if (Gvar.var_1226 == Gvar.var_1067[0] || Gvar.var_1226 == Gvar.var_1067[1] || Gvar.var_1226 == Gvar.var_1067[2] || Gvar.var_1226 == Gvar.var_1067[3]) {
                        Adap.gcopy(3, 600, 0, 40, 40);
                    }
                    if (Gvar.var_1226 == Gvar.var_1067[4] || Gvar.var_1226 == Gvar.var_1067[5] || Gvar.var_1226 == Gvar.var_1067[10] || Gvar.var_1226 == Gvar.var_1067[11]) {
                        Adap.gcopy(3, 640, 0, 40, 40);
                    }
                    if (Gvar.var_1226 == Gvar.var_1067[6] || Gvar.var_1226 == Gvar.var_1067[7] || Gvar.var_1226 == Gvar.var_1067[8] || Gvar.var_1226 == Gvar.var_1067[9]) {
                        Adap.gcopy(3, 680, 0, 40, 40);
                    }
                }
                if (Gvar.var_199 == 9) {
                    if (Gvar.var_1226 == Gvar.var_1067[0] || Gvar.var_1226 == Gvar.var_1067[1] || Gvar.var_1226 == Gvar.var_1067[2] || Gvar.var_1226 == Gvar.var_1067[3]) {
                        Adap.gcopy(3, 840, 0, 40, 40);
                    }
                    if (Gvar.var_1226 == Gvar.var_1067[4] || Gvar.var_1226 == Gvar.var_1067[5] || Gvar.var_1226 == Gvar.var_1067[10] || Gvar.var_1226 == Gvar.var_1067[11]) {
                        Adap.gcopy(3, 880, 0, 40, 40);
                    }
                    if (Gvar.var_1226 == Gvar.var_1067[6] || Gvar.var_1226 == Gvar.var_1067[7] || Gvar.var_1226 == Gvar.var_1067[8] || Gvar.var_1226 == Gvar.var_1067[9]) {
                        Adap.gcopy(3, 920, 0, 40, 40);
                    }
                }
                if (Gvar.var_199 == 3) {
                    if (Gvar.var_1226 == Gvar.var_1067[0] || Gvar.var_1226 == Gvar.var_1067[1] || Gvar.var_1226 == Gvar.var_1067[2] || Gvar.var_1226 == Gvar.var_1067[3]) {
                        Adap.gcopy(3, 720, 0, 40, 40);
                    }
                    if (Gvar.var_1226 == Gvar.var_1067[4] || Gvar.var_1226 == Gvar.var_1067[5] || Gvar.var_1226 == Gvar.var_1067[10] || Gvar.var_1226 == Gvar.var_1067[11]) {
                        Adap.gcopy(3, 760, 0, 40, 40);
                    }
                    if (Gvar.var_1226 == Gvar.var_1067[6] || Gvar.var_1226 == Gvar.var_1067[7] || Gvar.var_1226 == Gvar.var_1067[8] || Gvar.var_1226 == Gvar.var_1067[9]) {
                        Adap.gcopy(3, 800, 0, 40, 40);
                    }
                }
                await Func.func349();
            }
            if (Gvar.var_144 >= 1) {
                if (Gvar.var_199 == 8) {
                    if (Gvar.var_1226 == Gvar.var_1067[0] || Gvar.var_1226 == Gvar.var_1067[1] || Gvar.var_1226 == Gvar.var_1067[2] || Gvar.var_1226 == Gvar.var_1067[3]) {
                        Adap.gcopy(3, 240, 1200, 40, 40);
                    }
                    if (Gvar.var_1226 == Gvar.var_1067[4] || Gvar.var_1226 == Gvar.var_1067[5] || Gvar.var_1226 == Gvar.var_1067[10] || Gvar.var_1226 == Gvar.var_1067[11]) {
                        Adap.gcopy(3, 280, 1200, 40, 40);
                    }
                    if (Gvar.var_1226 == Gvar.var_1067[6] || Gvar.var_1226 == Gvar.var_1067[7] || Gvar.var_1226 == Gvar.var_1067[8] || Gvar.var_1226 == Gvar.var_1067[9]) {
                        Adap.gcopy(3, 320, 1200, 40, 40);
                    }
                }
                if (Gvar.var_199 == 2) {
                    if (Gvar.var_1226 == Gvar.var_1067[0] || Gvar.var_1226 == Gvar.var_1067[1] || Gvar.var_1226 == Gvar.var_1067[2] || Gvar.var_1226 == Gvar.var_1067[3]) {
                        Adap.gcopy(3, 0, 1200, 40, 40);
                    }
                    if (Gvar.var_1226 == Gvar.var_1067[4] || Gvar.var_1226 == Gvar.var_1067[5] || Gvar.var_1226 == Gvar.var_1067[10] || Gvar.var_1226 == Gvar.var_1067[11]) {
                        Adap.gcopy(3, 40, 1200, 40, 40);
                    }
                    if (Gvar.var_1226 == Gvar.var_1067[6] || Gvar.var_1226 == Gvar.var_1067[7] || Gvar.var_1226 == Gvar.var_1067[8] || Gvar.var_1226 == Gvar.var_1067[9]) {
                        Adap.gcopy(3, 80, 1200, 40, 40);
                    }
                }
                if (Gvar.var_199 == 4) {
                    if (Gvar.var_1226 == Gvar.var_1067[0] || Gvar.var_1226 == Gvar.var_1067[1] || Gvar.var_1226 == Gvar.var_1067[2] || Gvar.var_1226 == Gvar.var_1067[3]) {
                        Adap.gcopy(3, 120, 1200, 40, 40);
                    }
                    if (Gvar.var_1226 == Gvar.var_1067[4] || Gvar.var_1226 == Gvar.var_1067[5] || Gvar.var_1226 == Gvar.var_1067[10] || Gvar.var_1226 == Gvar.var_1067[11]) {
                        Adap.gcopy(3, 160, 1200, 40, 40);
                    }
                    if (Gvar.var_1226 == Gvar.var_1067[6] || Gvar.var_1226 == Gvar.var_1067[7] || Gvar.var_1226 == Gvar.var_1067[8] || Gvar.var_1226 == Gvar.var_1067[9]) {
                        Adap.gcopy(3, 200, 1200, 40, 40);
                    }
                }
                if (Gvar.var_199 == 6) {
                    if (Gvar.var_1226 == Gvar.var_1067[0] || Gvar.var_1226 == Gvar.var_1067[1] || Gvar.var_1226 == Gvar.var_1067[2] || Gvar.var_1226 == Gvar.var_1067[3]) {
                        Adap.gcopy(3, 360, 1200, 40, 40);
                    }
                    if (Gvar.var_1226 == Gvar.var_1067[4] || Gvar.var_1226 == Gvar.var_1067[5] || Gvar.var_1226 == Gvar.var_1067[10] || Gvar.var_1226 == Gvar.var_1067[11]) {
                        Adap.gcopy(3, 400, 1200, 40, 40);
                    }
                    if (Gvar.var_1226 == Gvar.var_1067[6] || Gvar.var_1226 == Gvar.var_1067[7] || Gvar.var_1226 == Gvar.var_1067[8] || Gvar.var_1226 == Gvar.var_1067[9]) {
                        Adap.gcopy(3, 440, 1200, 40, 40);
                    }
                }
                if (Gvar.var_199 == 1) {
                    if (Gvar.var_1226 == Gvar.var_1067[0] || Gvar.var_1226 == Gvar.var_1067[1] || Gvar.var_1226 == Gvar.var_1067[2] || Gvar.var_1226 == Gvar.var_1067[3]) {
                        Adap.gcopy(3, 480, 1200, 40, 40);
                    }
                    if (Gvar.var_1226 == Gvar.var_1067[4] || Gvar.var_1226 == Gvar.var_1067[5] || Gvar.var_1226 == Gvar.var_1067[10] || Gvar.var_1226 == Gvar.var_1067[11]) {
                        Adap.gcopy(3, 520, 1200, 40, 40);
                    }
                    if (Gvar.var_1226 == Gvar.var_1067[6] || Gvar.var_1226 == Gvar.var_1067[7] || Gvar.var_1226 == Gvar.var_1067[8] || Gvar.var_1226 == Gvar.var_1067[9]) {
                        Adap.gcopy(3, 560, 1200, 40, 40);
                    }
                }
                if (Gvar.var_199 == 7) {
                    if (Gvar.var_1226 == Gvar.var_1067[0] || Gvar.var_1226 == Gvar.var_1067[1] || Gvar.var_1226 == Gvar.var_1067[2] || Gvar.var_1226 == Gvar.var_1067[3]) {
                        Adap.gcopy(3, 600, 1200, 40, 40);
                    }
                    if (Gvar.var_1226 == Gvar.var_1067[4] || Gvar.var_1226 == Gvar.var_1067[5] || Gvar.var_1226 == Gvar.var_1067[10] || Gvar.var_1226 == Gvar.var_1067[11]) {
                        Adap.gcopy(3, 640, 1200, 40, 40);
                    }
                    if (Gvar.var_1226 == Gvar.var_1067[6] || Gvar.var_1226 == Gvar.var_1067[7] || Gvar.var_1226 == Gvar.var_1067[8] || Gvar.var_1226 == Gvar.var_1067[9]) {
                        Adap.gcopy(3, 680, 1200, 40, 40);
                    }
                }
                if (Gvar.var_199 == 9) {
                    if (Gvar.var_1226 == Gvar.var_1067[0] || Gvar.var_1226 == Gvar.var_1067[1] || Gvar.var_1226 == Gvar.var_1067[2] || Gvar.var_1226 == Gvar.var_1067[3]) {
                        Adap.gcopy(3, 840, 1200, 40, 40);
                    }
                    if (Gvar.var_1226 == Gvar.var_1067[4] || Gvar.var_1226 == Gvar.var_1067[5] || Gvar.var_1226 == Gvar.var_1067[10] || Gvar.var_1226 == Gvar.var_1067[11]) {
                        Adap.gcopy(3, 880, 1200, 40, 40);
                    }
                    if (Gvar.var_1226 == Gvar.var_1067[6] || Gvar.var_1226 == Gvar.var_1067[7] || Gvar.var_1226 == Gvar.var_1067[8] || Gvar.var_1226 == Gvar.var_1067[9]) {
                        Adap.gcopy(3, 920, 1200, 40, 40);
                    }
                }
                if (Gvar.var_199 == 3) {
                    if (Gvar.var_1226 == Gvar.var_1067[0] || Gvar.var_1226 == Gvar.var_1067[1] || Gvar.var_1226 == Gvar.var_1067[2] || Gvar.var_1226 == Gvar.var_1067[3]) {
                        Adap.gcopy(3, 720, 1200, 40, 40);
                    }
                    if (Gvar.var_1226 == Gvar.var_1067[4] || Gvar.var_1226 == Gvar.var_1067[5] || Gvar.var_1226 == Gvar.var_1067[10] || Gvar.var_1226 == Gvar.var_1067[11]) {
                        Adap.gcopy(3, 760, 1200, 40, 40);
                    }
                    if (Gvar.var_1226 == Gvar.var_1067[6] || Gvar.var_1226 == Gvar.var_1067[7] || Gvar.var_1226 == Gvar.var_1067[8] || Gvar.var_1226 == Gvar.var_1067[9]) {
                        Adap.gcopy(3, 800, 1200, 40, 40);
                    }
                }
            }
            if (Gvar.var_1268 >= 1) {
                if (Gvar.var_199 == 8) {
                    if (Gvar.var_1226 == Gvar.var_1067[0] || Gvar.var_1226 == Gvar.var_1067[1] || Gvar.var_1226 == Gvar.var_1067[2] || Gvar.var_1226 == Gvar.var_1067[3]) {
                        Adap.gcopy(3, 240, 1240, 40, 40);
                    }
                    if (Gvar.var_1226 == Gvar.var_1067[4] || Gvar.var_1226 == Gvar.var_1067[5] || Gvar.var_1226 == Gvar.var_1067[10] || Gvar.var_1226 == Gvar.var_1067[11]) {
                        Adap.gcopy(3, 280, 1240, 40, 40);
                    }
                    if (Gvar.var_1226 == Gvar.var_1067[6] || Gvar.var_1226 == Gvar.var_1067[7] || Gvar.var_1226 == Gvar.var_1067[8] || Gvar.var_1226 == Gvar.var_1067[9]) {
                        Adap.gcopy(3, 320, 1240, 40, 40);
                    }
                }
                if (Gvar.var_199 == 2) {
                    if (Gvar.var_1226 == Gvar.var_1067[0] || Gvar.var_1226 == Gvar.var_1067[1] || Gvar.var_1226 == Gvar.var_1067[2] || Gvar.var_1226 == Gvar.var_1067[3]) {
                        Adap.gcopy(3, 0, 1240, 40, 40);
                    }
                    if (Gvar.var_1226 == Gvar.var_1067[4] || Gvar.var_1226 == Gvar.var_1067[5] || Gvar.var_1226 == Gvar.var_1067[10] || Gvar.var_1226 == Gvar.var_1067[11]) {
                        Adap.gcopy(3, 40, 1240, 40, 40);
                    }
                    if (Gvar.var_1226 == Gvar.var_1067[6] || Gvar.var_1226 == Gvar.var_1067[7] || Gvar.var_1226 == Gvar.var_1067[8] || Gvar.var_1226 == Gvar.var_1067[9]) {
                        Adap.gcopy(3, 80, 1240, 40, 40);
                    }
                }
                if (Gvar.var_199 == 4) {
                    if (Gvar.var_1226 == Gvar.var_1067[0] || Gvar.var_1226 == Gvar.var_1067[1] || Gvar.var_1226 == Gvar.var_1067[2] || Gvar.var_1226 == Gvar.var_1067[3]) {
                        Adap.gcopy(3, 120, 1240, 40, 40);
                    }
                    if (Gvar.var_1226 == Gvar.var_1067[4] || Gvar.var_1226 == Gvar.var_1067[5] || Gvar.var_1226 == Gvar.var_1067[10] || Gvar.var_1226 == Gvar.var_1067[11]) {
                        Adap.gcopy(3, 160, 1240, 40, 40);
                    }
                    if (Gvar.var_1226 == Gvar.var_1067[6] || Gvar.var_1226 == Gvar.var_1067[7] || Gvar.var_1226 == Gvar.var_1067[8] || Gvar.var_1226 == Gvar.var_1067[9]) {
                        Adap.gcopy(3, 200, 1240, 40, 40);
                    }
                }
                if (Gvar.var_199 == 6) {
                    if (Gvar.var_1226 == Gvar.var_1067[0] || Gvar.var_1226 == Gvar.var_1067[1] || Gvar.var_1226 == Gvar.var_1067[2] || Gvar.var_1226 == Gvar.var_1067[3]) {
                        Adap.gcopy(3, 360, 1240, 40, 40);
                    }
                    if (Gvar.var_1226 == Gvar.var_1067[4] || Gvar.var_1226 == Gvar.var_1067[5] || Gvar.var_1226 == Gvar.var_1067[10] || Gvar.var_1226 == Gvar.var_1067[11]) {
                        Adap.gcopy(3, 400, 1240, 40, 40);
                    }
                    if (Gvar.var_1226 == Gvar.var_1067[6] || Gvar.var_1226 == Gvar.var_1067[7] || Gvar.var_1226 == Gvar.var_1067[8] || Gvar.var_1226 == Gvar.var_1067[9]) {
                        Adap.gcopy(3, 440, 1240, 40, 40);
                    }
                }
                if (Gvar.var_199 == 1) {
                    if (Gvar.var_1226 == Gvar.var_1067[0] || Gvar.var_1226 == Gvar.var_1067[1] || Gvar.var_1226 == Gvar.var_1067[2] || Gvar.var_1226 == Gvar.var_1067[3]) {
                        Adap.gcopy(3, 480, 1240, 40, 40);
                    }
                    if (Gvar.var_1226 == Gvar.var_1067[4] || Gvar.var_1226 == Gvar.var_1067[5] || Gvar.var_1226 == Gvar.var_1067[10] || Gvar.var_1226 == Gvar.var_1067[11]) {
                        Adap.gcopy(3, 520, 1240, 40, 40);
                    }
                    if (Gvar.var_1226 == Gvar.var_1067[6] || Gvar.var_1226 == Gvar.var_1067[7] || Gvar.var_1226 == Gvar.var_1067[8] || Gvar.var_1226 == Gvar.var_1067[9]) {
                        Adap.gcopy(3, 560, 1240, 40, 40);
                    }
                }
                if (Gvar.var_199 == 7) {
                    if (Gvar.var_1226 == Gvar.var_1067[0] || Gvar.var_1226 == Gvar.var_1067[1] || Gvar.var_1226 == Gvar.var_1067[2] || Gvar.var_1226 == Gvar.var_1067[3]) {
                        Adap.gcopy(3, 600, 1240, 40, 40);
                    }
                    if (Gvar.var_1226 == Gvar.var_1067[4] || Gvar.var_1226 == Gvar.var_1067[5] || Gvar.var_1226 == Gvar.var_1067[10] || Gvar.var_1226 == Gvar.var_1067[11]) {
                        Adap.gcopy(3, 640, 1240, 40, 40);
                    }
                    if (Gvar.var_1226 == Gvar.var_1067[6] || Gvar.var_1226 == Gvar.var_1067[7] || Gvar.var_1226 == Gvar.var_1067[8] || Gvar.var_1226 == Gvar.var_1067[9]) {
                        Adap.gcopy(3, 680, 1240, 40, 40);
                    }
                }
                if (Gvar.var_199 == 9) {
                    if (Gvar.var_1226 == Gvar.var_1067[0] || Gvar.var_1226 == Gvar.var_1067[1] || Gvar.var_1226 == Gvar.var_1067[2] || Gvar.var_1226 == Gvar.var_1067[3]) {
                        Adap.gcopy(3, 840, 1240, 40, 40);
                    }
                    if (Gvar.var_1226 == Gvar.var_1067[4] || Gvar.var_1226 == Gvar.var_1067[5] || Gvar.var_1226 == Gvar.var_1067[10] || Gvar.var_1226 == Gvar.var_1067[11]) {
                        Adap.gcopy(3, 880, 1240, 40, 40);
                    }
                    if (Gvar.var_1226 == Gvar.var_1067[6] || Gvar.var_1226 == Gvar.var_1067[7] || Gvar.var_1226 == Gvar.var_1067[8] || Gvar.var_1226 == Gvar.var_1067[9]) {
                        Adap.gcopy(3, 920, 1240, 40, 40);
                    }
                }
                if (Gvar.var_199 == 3) {
                    if (Gvar.var_1226 == Gvar.var_1067[0] || Gvar.var_1226 == Gvar.var_1067[1] || Gvar.var_1226 == Gvar.var_1067[2] || Gvar.var_1226 == Gvar.var_1067[3]) {
                        Adap.gcopy(3, 720, 1240, 40, 40);
                    }
                    if (Gvar.var_1226 == Gvar.var_1067[4] || Gvar.var_1226 == Gvar.var_1067[5] || Gvar.var_1226 == Gvar.var_1067[10] || Gvar.var_1226 == Gvar.var_1067[11]) {
                        Adap.gcopy(3, 760, 1240, 40, 40);
                    }
                    if (Gvar.var_1226 == Gvar.var_1067[6] || Gvar.var_1226 == Gvar.var_1067[7] || Gvar.var_1226 == Gvar.var_1067[8] || Gvar.var_1226 == Gvar.var_1067[9]) {
                        Adap.gcopy(3, 800, 1240, 40, 40);
                    }
                }
            }
        }
        Gvar.var_1269 = Gvar.var_199;
        Adap.gmode(2, null, null, null);
        return;
}

export {func345}
