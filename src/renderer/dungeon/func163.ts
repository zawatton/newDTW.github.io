/**
 * func163 — func163 ヴェネチアホテル & 亀の中のアイテム配置
 *
 * ヴェネチアホテルや亀、酒場の設定
 *
 * (org原典: newDTW_dungeon0 / DONE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// ヴェネチアホテルのアイテム配置
// 旧 func163
async function func163(this: any) {
        Adap.dbgprt(163);
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
        Gvar.var_779 = (Gvar.var_66 - 5) * Gvar.var_35 + Gvar.var_778; // Gvar.var_35は固定値40
        Gvar.var_780 = (Gvar.var_67 - 5) * Gvar.var_36 + Gvar.var_778; // Gvar.var_36は固定値40
        if (Gvar.var_217 == 0) {
            if (Gvar.var_199 == 6) {
                Gvar.var_779 = (Gvar.var_66 - 5) * Gvar.var_35 - Gvar.var_778; // Gvar.var_35は固定値40
                Gvar.var_780 = (Gvar.var_67 - 5) * Gvar.var_36; // Gvar.var_36は固定値40
            }
            if (Gvar.var_199 == 4) {
                Gvar.var_779 = (Gvar.var_66 - 5) * Gvar.var_35 + Gvar.var_778; // Gvar.var_35は固定値40
                Gvar.var_780 = (Gvar.var_67 - 5) * Gvar.var_36; // Gvar.var_36は固定値40
            }
            if (Gvar.var_199 == 2) {
                Gvar.var_779 = (Gvar.var_66 - 5) * Gvar.var_35; // Gvar.var_35は固定値40
                Gvar.var_780 = (Gvar.var_67 - 5) * Gvar.var_36 - Gvar.var_778; // Gvar.var_36は固定値40
            }
            if (Gvar.var_199 == 8) {
                Gvar.var_779 = (Gvar.var_66 - 5) * Gvar.var_35; // Gvar.var_35は固定値40
                Gvar.var_780 = (Gvar.var_67 - 5) * Gvar.var_36 + Gvar.var_778; // Gvar.var_36は固定値40
            }
            if (Gvar.var_199 == 9) {
                Gvar.var_779 = (Gvar.var_66 - 5) * Gvar.var_35 - Gvar.var_778; // Gvar.var_35は固定値40
                Gvar.var_780 = (Gvar.var_67 - 5) * Gvar.var_36 + Gvar.var_778; // Gvar.var_36は固定値40
            }
            if (Gvar.var_199 == 7) {
                Gvar.var_779 = (Gvar.var_66 - 5) * Gvar.var_35 + Gvar.var_778; // Gvar.var_35は固定値40
                Gvar.var_780 = (Gvar.var_67 - 5) * Gvar.var_36 + Gvar.var_778; // Gvar.var_36は固定値40
            }
            if (Gvar.var_199 == 3) {
                Gvar.var_779 = (Gvar.var_66 - 5) * Gvar.var_35 - Gvar.var_778; // Gvar.var_35は固定値40
                Gvar.var_780 = (Gvar.var_67 - 5) * Gvar.var_36 - Gvar.var_778; // Gvar.var_36は固定値40
            }
            if (Gvar.var_199 == 1) {
                Gvar.var_779 = (Gvar.var_66 - 5) * Gvar.var_35 + Gvar.var_778; // Gvar.var_35は固定値40
                Gvar.var_780 = (Gvar.var_67 - 5) * Gvar.var_36 - Gvar.var_778; // Gvar.var_36は固定値40
            }
        }
        if (Gvar.var_217 == 1) {
            Gvar.var_779 = (Gvar.var_66 - 5) * Gvar.var_35; // Gvar.var_35は固定値40
            Gvar.var_780 = (Gvar.var_67 - 5) * Gvar.var_36; // Gvar.var_36は固定値40
        }
        Adap.pos(0, 0);
        Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。

        // Adap.buffer(18)は"img4.gif"。X座標var_779、Y座標var_780から切り取り長さ X方向340、Y方向340
        // 絵: 
        Adap.gcopy(18, Gvar.var_779, Gvar.var_780, 340, 340); // Adap.buffer(18)は"img4.gif" // マップ描画 (ヴェネチアホテル、亀の中)
        Gvar.var_781 = 17; // x軸17, y軸5なのでPCの位置 
        Gvar.var_782 = 5;
        if (Gvar.var_199 == 4) {
            Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
        }
        if (Gvar.var_199 == 6) {
            Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
        }
        if (Gvar.var_199 == 8) {
            Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
        }
        if (Gvar.var_199 == 2) {
            Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
        }
        if (Gvar.var_199 == 1) {
            Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
        }
        if (Gvar.var_199 == 3) {
            Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
        }
        if (Gvar.var_199 == 7) {
            Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
        }
        if (Gvar.var_199 == 9) {
            Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
        }
        if (Gvar.var_217 == 1) {
            Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
        }
        // ヴェネチアホテルにあるPCの画面ドット関係
        Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
        if (Gvar.var_404 == 0) { // 冒険中でなければ？？
            // Adap.buffer(18)は"img4.gif"。X座標1400、Y座標680から切り取り長さ X方向40、Y方向40
            // 絵: ヴェネチアホテルにあるPC (NPCが画面内に出てくる直前のノイズ画面)
            Adap.gcopy(18, 1400, 680, 40, 40); // Adap.buffer(18)は"img4.gif"
        }
        if (Gvar.var_783 == 1) {
            // Adap.buffer(18)は"img4.gif"。X座標1440、Y座標680から切り取り長さ X方向40、Y方向40
            // 絵: ヴェネチアホテルにあるPC (NPCが画面内に出てくる直前のノイズ画面)
            Adap.gcopy(18, 1440, 680, 40, 40); // Adap.buffer(18)は"img4.gif"
        }
        if (Gvar.var_783 == 2) {
            // Adap.buffer(18)は"img4.gif"。X座標1440、Y座標680から切り取り長さ X方向40、Y方向40
            // 絵:
            Adap.gcopy(18, 1440, 720, 40, 40); // Adap.buffer(18)は"img4.gif"
        }
        if (Gvar.var_783 == 3) {
            // Adap.buffer(18)は"img4.gif"。X座標1440、Y座標680から切り取り長さ X方向40、Y方向40
            // 絵:
            Adap.gcopy(18, 1440, 760, 40, 40); // Adap.buffer(18)は"img4.gif"
        }
        if (Gvar.var_783 == 4) {
            // Adap.buffer(18)は"img4.gif"。X座標1440、Y座標680から切り取り長さ X方向40、Y方向40
            // 絵:
            Adap.gcopy(18, 1440, 800, 40, 40); // Adap.buffer(18)は"img4.gif"
        }
        if (Gvar.var_783 == 5) {
            // Adap.buffer(18)は"img4.gif"。X座標1440、Y座標680から切り取り長さ X方向40、Y方向40
            // 絵:
            Adap.gcopy(18, 1440, 840, 40, 40); // Adap.buffer(18)は"img4.gif"
        }
        if (Gvar.var_783 == 6) {
            // Adap.buffer(18)は"img4.gif"。X座標1440、Y座標680から切り取り長さ X方向40、Y方向40
            // 絵:
            Adap.gcopy(18, 1440, 880, 40, 40); // Adap.buffer(18)は"img4.gif"
        }
        if (Gvar.var_783 == 7) {
            // Adap.buffer(18)は"img4.gif"。X座標1440、Y座標680から切り取り長さ X方向40、Y方向40
            // 絵:
            Adap.gcopy(18, 1440, 920, 40, 40); // Adap.buffer(18)は"img4.gif"
        }
        if (Gvar.var_783 == 8) {
            // Adap.buffer(18)は"img4.gif"。X座標1440、Y座標680から切り取り長さ X方向40、Y方向40
            // 絵:
            Adap.gcopy(18, 1440, 960, 40, 40); // Adap.buffer(18)は"img4.gif"
        }
        if (Gvar.var_783 == 9) {
            // Adap.buffer(18)は"img4.gif"。X座標1440、Y座標680から切り取り長さ X方向40、Y方向40
            // 絵:
            Adap.gcopy(18, 1440, 1000, 40, 40); // Adap.buffer(18)は"img4.gif"
        }
        if (Gvar.var_783 == 10) {
            // Adap.buffer(18)は"img4.gif"。X座標1440、Y座標680から切り取り長さ X方向40、Y方向40
            // 絵:
            Adap.gcopy(18, 1440, 1040, 40, 40); // Adap.buffer(18)は"img4.gif"
        }
        if (Gvar.var_783 == 11) {
            // Adap.buffer(18)は"img4.gif"。X座標1440、Y座標680から切り取り長さ X方向40、Y方向40
            // 絵:
            Adap.gcopy(18, 1440, 1080, 40, 40); // Adap.buffer(18)は"img4.gif"
        }
        if (Gvar.var_783 == 12) {
            // Adap.buffer(18)は"img4.gif"。X座標1440、Y座標680から切り取り長さ X方向40、Y方向40
            // 絵:
            Adap.gcopy(18, 1400, 720, 40, 40); // Adap.buffer(18)は"img4.gif"
        }
        if (Gvar.var_783 == 13) {
            // Adap.buffer(18)は"img4.gif"。X座標1440、Y座標680から切り取り長さ X方向40、Y方向40
            // 絵:
            Adap.gcopy(18, 1400, 760, 40, 40); // Adap.buffer(18)は"img4.gif"
        }
        if (Gvar.var_783 == 14) {
            // Adap.buffer(18)は"img4.gif"。X座標1440、Y座標680から切り取り長さ X方向40、Y方向40
            // 絵:
            Adap.gcopy(18, 1400, 800, 40, 40); // Adap.buffer(18)は"img4.gif"
        }
        if (Gvar.var_783 == 15) {
            // Adap.buffer(18)は"img4.gif"。X座標1440、Y座標680から切り取り長さ X方向40、Y方向40
            // 絵:
            Adap.gcopy(18, 1400, 840, 40, 40); // Adap.buffer(18)は"img4.gif"
        }
        if (Gvar.var_404 >= 1) {
            Gvar.var_781 = 17; // x軸17, y軸9なのでレクイエム階段の位置 
            Gvar.var_782 = 9;
            if (Gvar.var_199 == 4) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
            }
            if (Gvar.var_199 == 6) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
            }
            if (Gvar.var_199 == 8) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
            }
            if (Gvar.var_199 == 2) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
            }
            if (Gvar.var_199 == 1) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
            }
            if (Gvar.var_199 == 3) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
            }
            if (Gvar.var_199 == 7) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
            }
            if (Gvar.var_199 == 9) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
            }
            if (Gvar.var_217 == 1) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
            }
            Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
            Adap.gcopy(18, 1440, 1120, 40, 40);
        }
        // Gvar.var_526 >= 1 ディアボロの試練解放フラグがON
        if (Gvar.var_526 >= 1) {
            Gvar.var_781 = 15; // x軸15, y軸5なので試練に向かう壁穴の位置 
            Gvar.var_782 = 5;
            if (Gvar.var_199 == 4) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
            }
            if (Gvar.var_199 == 6) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
            }
            if (Gvar.var_199 == 8) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
            }
            if (Gvar.var_199 == 2) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
            }
            if (Gvar.var_199 == 1) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
            }
            if (Gvar.var_199 == 3) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
            }
            if (Gvar.var_199 == 7) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
            }
            if (Gvar.var_199 == 9) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
            }
            if (Gvar.var_217 == 1) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
            }
            Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
            Adap.gcopy(18, 1400, 1000, 40, 80); // Adap.buffer(18)は"img4.gif" 壁に開いた穴(ディアボロの試練への入り口)
            
            if (Gvar.var_760 >= 1) {
                if (Gvar.var_199 == 4) {
                    Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
                }
                if (Gvar.var_199 == 6) {
                    Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
                }
                if (Gvar.var_199 == 8) {
                    Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
                }
                if (Gvar.var_199 == 2) {
                    Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
                }
                if (Gvar.var_199 == 1) {
                    Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
                }
                if (Gvar.var_199 == 3) {
                    Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
                }
                if (Gvar.var_199 == 7) {
                    Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
                }
                if (Gvar.var_199 == 9) {
                    Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
                }
                if (Gvar.var_217 == 1) {
                    Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
                }
                if (Gvar.var_760 == 4) {
                    // 岸辺露伴のイベントで、壁に穴を開けた後の絵
                    Adap.gcopy(18, 1360, 1000, 40, 80); // Adap.buffer(18)は"img4.gif"
                }
                if (Gvar.var_760 == 3) {
                    // 岸辺露伴のイベントで、壁に穴を開ける時の破片1
                    Adap.gcopy(18, 0, 240, 40, 40); // Adap.buffer(18)は"img4.gif"
                }
                if (Gvar.var_760 == 2) {
                    // 岸辺露伴のイベントで、壁に穴を開ける時の破片2
                    Adap.gcopy(18, 0, 280, 40, 40); // Adap.buffer(18)は"img4.gif"
                }
                if (Gvar.var_760 == 1) {
                    // 岸辺露伴のイベントで、壁に穴を開ける時の破片3
                    Adap.gcopy(18, 0, 320, 40, 40); // Adap.buffer(18)は"img4.gif"
                }
            }
        }
        // Gvar.var_526 >= 1 ディアボロの試練解放フラグがON & Gvar.var_759 >= 2 DIO&プッチ神父出現フラグがON
        if (Gvar.var_526 >= 1 && Gvar.var_759 >= 2) {
            Gvar.var_781 = 12; // x軸12, y軸4なのでDIO用にブラインドが降ろされた窓
            Gvar.var_782 = 4;
            if (Gvar.var_199 == 4) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
            }
            if (Gvar.var_199 == 6) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
            }
            if (Gvar.var_199 == 8) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
            }
            if (Gvar.var_199 == 2) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
            }
            if (Gvar.var_199 == 1) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
            }
            if (Gvar.var_199 == 3) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
            }
            if (Gvar.var_199 == 7) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
            }
            if (Gvar.var_199 == 9) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
            }
            if (Gvar.var_217 == 1) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
            }
            Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
            Adap.gcopy(18, 80, 1080, 120, 120); // Adap.buffer(18)は"img4.gif" // DIO用にブラインドが降ろされた窓
            
            Gvar.var_781 = 12; // x軸12, y軸6なのでDIOとプッチ神父
            Gvar.var_782 = 6;
            if (Gvar.var_199 == 4) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
            }
            if (Gvar.var_199 == 6) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
            }
            if (Gvar.var_199 == 8) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
            }
            if (Gvar.var_199 == 2) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
            }
            if (Gvar.var_199 == 1) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
            }
            if (Gvar.var_199 == 3) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
            }
            if (Gvar.var_199 == 7) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
            }
            if (Gvar.var_199 == 9) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
            }
            if (Gvar.var_217 == 1) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
            }
            Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
            Adap.gcopy(18, 1360, 1120, 80, 80); // DIOとプッチ神父?
        }

        if (Gvar.var_523 >= 1) { // 一巡後の世界へ行けるようになった時のフラグ? 地球儀が回転
            Gvar.var_781 = 16; // x軸16, y軸5なので地球儀の位置
            Gvar.var_782 = 5;
            if (Gvar.var_199 == 4) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
            }
            if (Gvar.var_199 == 6) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
            }
            if (Gvar.var_199 == 8) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
            }
            if (Gvar.var_199 == 2) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
            }
            if (Gvar.var_199 == 1) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
            }
            if (Gvar.var_199 == 3) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
            }
            if (Gvar.var_199 == 7) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
            }
            if (Gvar.var_199 == 9) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
            }
            if (Gvar.var_217 == 1) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
            }
            Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
            if (Gvar.var_784 == 0 || Gvar.var_784 == 3) {
                Adap.gcopy(18, 0, 0, 40, 40); // Adap.buffer(18)は"img4.gif" 地球儀
            }
            if (Gvar.var_784 == 1 || Gvar.var_784 == 4) {
                Adap.gcopy(18, 0, 40, 40, 40); // Adap.buffer(18)は"img4.gif" 地球儀
            }
            if (Gvar.var_784 == 2 || Gvar.var_784 == 5) {
                Adap.gcopy(18, 0, 80, 40, 40); // Adap.buffer(18)は"img4.gif" 地球儀
            }
        }

        // ここから亀の中の配置
        Gvar.var_781 = 15; // x軸15, y軸21なので亀の中のジッパーの位置
        Gvar.var_782 = 21;
        if (Gvar.var_199 == 4) {
            Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
        }
        if (Gvar.var_199 == 6) {
            Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
        }
        if (Gvar.var_199 == 8) {
            Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
        }
        if (Gvar.var_199 == 2) {
            Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
        }
        if (Gvar.var_199 == 1) {
            Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
        }
        if (Gvar.var_199 == 3) {
            Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
        }
        if (Gvar.var_199 == 7) {
            Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
        }
        if (Gvar.var_199 == 9) {
            Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
        }
        if (Gvar.var_217 == 1) {
            Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
        }
        
        Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
        if (Gvar.var_557 == 0 || Gvar.var_557 >= 13) {
            Adap.gcopy(14, 0, 400, 40, 40); // Adap.buffer(14)は"img_wana.gif" ジッパー(完閉じ 1/4)
        }
        if (Gvar.var_557 == 1 || Gvar.var_557 == 2 || Gvar.var_557 == 11 || Gvar.var_557 == 12) {
            Adap.gcopy(14, 40, 400, 40, 40); // Adap.buffer(14)は"img_wana.gif" ジッパー(ちょい開け 2/4)
        }
        if (Gvar.var_557 == 3 || Gvar.var_557 == 4 || Gvar.var_557 == 9 || Gvar.var_557 == 10) {
            Adap.gcopy(14, 80, 400, 40, 40); // Adap.buffer(14)は"img_wana.gif" ジッパー(開け 3/4)
        }
        if (Gvar.var_557 == 5 || Gvar.var_557 == 6 || Gvar.var_557 == 7 || Gvar.var_557 == 8) {
            Adap.gcopy(14, 120, 400, 40, 40); // Adap.buffer(14)は"img_wana.gif" ジッパー(完開け 4/4)
        }
        if (Gvar.var_559 < 4) {
            if (Gvar.var_559 < 3) {
                Gvar.var_781 = 9;
                Gvar.var_782 = 19;
            }
            if (Gvar.var_559 == 3) {
                Gvar.var_781 = 8;
                Gvar.var_782 = 19;
            }
            if (Gvar.var_199 == 4) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
            }
            if (Gvar.var_199 == 6) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
            }
            if (Gvar.var_199 == 8) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
            }
            if (Gvar.var_199 == 2) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
            }
            if (Gvar.var_199 == 1) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
            }
            if (Gvar.var_199 == 3) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
            }
            if (Gvar.var_199 == 7) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
            }
            if (Gvar.var_199 == 9) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
            }
            if (Gvar.var_217 == 1) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
            }
            Adap.gcopy(18, 80, 360, 120, 360); // Adap.buffer(18)は"img4.gif" 仕切り(縦)。細長いやつ。
        }
        if (Gvar.var_559 < 2) {
            if (Gvar.var_559 == 0) {
                Gvar.var_781 = 11;
                Gvar.var_782 = 25;
            }
            if (Gvar.var_559 == 1) {
                Gvar.var_781 = 11;
                Gvar.var_782 = 26;
            }
            if (Gvar.var_199 == 4) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
            }
            if (Gvar.var_199 == 6) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
            }
            if (Gvar.var_199 == 8) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
            }
            if (Gvar.var_199 == 2) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
            }
            if (Gvar.var_199 == 1) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
            }
            if (Gvar.var_199 == 3) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
            }
            if (Gvar.var_199 == 7) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
            }
            if (Gvar.var_199 == 9) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
            }
            if (Gvar.var_217 == 1) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
            }
            Adap.gcopy(18, 960, 1040, 360, 160); // Adap.buffer(18)は"img4.gif" 仕切り(横)。細長いやつ
        }
        // Ver0.1403にて追加(Func.func328より移植)。亀の中から外へ出る場所の光表示処理。
        if (Gvar.var_262 == 1) { // Gvar.var_262 == 1 なので、Gvar.dungeon_number = 0 であれば
            Adap.color(0, 0, 0);
            Adap.gmode(4, null, null, 180);
            Gvar.var_781 = 14;
            Gvar.var_782 = 17;
            if (Gvar.var_199 == 4) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
            }
            if (Gvar.var_199 == 6) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
            }
            if (Gvar.var_199 == 8) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
            }
            if (Gvar.var_199 == 2) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
            }
            if (Gvar.var_199 == 1) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
            }
            if (Gvar.var_199 == 3) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
            }
            if (Gvar.var_199 == 7) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
            }
            if (Gvar.var_199 == 9) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
            }
            if (Gvar.var_217 == 1) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
            }
            // Adap.buffer(8)は"img1.gif"。X座標760、Y座標1000から切り取り長さ X方向40、Y方向200
            // 絵:亀の中から外へ出る場所の光
            Adap.gcopy(8, 760, 1000, 40, 200);
        }
        return;
}

export {func163}
