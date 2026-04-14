/**
 * func077 — func077 画像描画関係
 *
 * (org原典: newDTW_func0)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// 各ダンジョンの背景描写処理ではなさそう
async function func077(this: any) {
        Adap.dbgprt(77);
        if (Gvar.var_599 == 0) {
            Adap.pos(0, 0);
            Adap.gmode(4, null, null, 255);
            // Adap.buffer(8)は"img1.gif"。X座標400、Y座標350から切り取り長さ X方向340、Y方向340
            // 絵:真っ黒な正方形。ロード中の黒か?
            Adap.gcopy(8, 400, 350, 340, 340);
        }
        if (Gvar.var_599 == 1) {
            Adap.pos(0, 0);
            Adap.gmode(4, null, null, 200);
            // Adap.buffer(8)は"img1.gif"。X座標400、Y座標350から切り取り長さ X方向340、Y方向340
            // 絵:真っ黒な正方形。ロード中の黒か?
            Adap.gcopy(8, 400, 350, 340, 340);
        }
        if (Gvar.var_599 == 2) {
            Adap.pos(0, 0);
            Adap.gmode(4, null, null, 160);
            // Adap.buffer(8)は"img1.gif"。X座標400、Y座標350から切り取り長さ X方向340、Y方向340
            // 絵:真っ黒な正方形。ロード中の黒か?
            Adap.gcopy(8, 400, 350, 340, 340);
        }
        if (Gvar.var_599 == 3) {
            Adap.pos(0, 0);
            Adap.gmode(4, null, null, 80);
            // Adap.buffer(8)は"img1.gif"。X座標400、Y座標350から切り取り長さ X方向340、Y方向340
            // 絵:真っ黒な正方形。ロード中の黒か?
            Adap.gcopy(8, 400, 350, 340, 340);
        }
        if (Gvar.var_599 == 4) {
            Adap.pos(0, 0);
            Adap.gmode(4, null, null, 40);
            // Adap.buffer(8)は"img1.gif"。X座標400、Y座標350から切り取り長さ X方向340、Y方向340
            // 絵:真っ黒な正方形。ロード中の黒か?
            Adap.gcopy(8, 400, 350, 340, 340);
        }
        if (Gvar.var_599 == 5) {
            Adap.pos(0, 0);
            Adap.gmode(4, null, null, 20);
            // Adap.buffer(8)は"img1.gif"。X座標400、Y座標350から切り取り長さ X方向340、Y方向340
            // 絵:真っ黒な正方形。ロード中の黒か?
            Adap.gcopy(8, 400, 350, 340, 340);
        }
        Adap.gmode(2, null, null, null);
        Adap.pos(0, 100);
        if (Gvar.special_floor == 0) {
            // No = 0 なので、拠点(ホテル、亀、)
            if (Gvar.dungeon_number == 0) {
                if (Gvar.var_595 == 0) {
                    // Adap.buffer(34)は"img_syageki.gif"。X座標640、Y座標760から切り取り長さ X方向340、Y方向40
                    // 絵文字:ヴェネチアホテル
                    Adap.gcopy(34, 640, 760, 340, 40);
                }
                if (Gvar.var_595 == 1) {
                    // Adap.buffer(34)は"img_syageki.gif"。X座標640、Y座標720から切り取り長さ X方向340、Y方向40
                    // 絵文字:亀の中
                    Adap.gcopy(34, 640, 720, 340, 40);
                }
                // Ver0.1403にて追加。
                if (Gvar.var_595 == 2) {
                    // Adap.buffer(34)は"img_syageki.gif"。X座標640、Y座標720から切り取り長さ X方向340、Y方向40
                    // 絵文字:酒場
                    Adap.gcopy(34, 980, 880, 340, 40);
                }
                if (Gvar.var_595 == 3) {
                    // Adap.buffer(34)は"img_syageki.gif"。X座標640、Y座標1200から切り取り長さ X方向340、Y方向40
                    // 絵文字:ローマ・ティベレ河
                    Adap.gcopy(34, 640, 1200, 340, 40);
                }
            }
            // No = 1 なので、ホテルの外
            if (Gvar.dungeon_number == 1) {
                if (Gvar.current_floor <= 2) {
                    Adap.gcopy(34, 640, 440, 340, 40);
                }
                if (Gvar.current_floor >= 3 && Gvar.current_floor <= 5) {
                    Adap.gcopy(34, 640, 480, 340, 40);
                }
                if (Gvar.current_floor >= 6 && Gvar.current_floor <= 8) {
                    Adap.gcopy(34, 640, 600, 340, 40);
                }
                if (Gvar.current_floor >= 9 && Gvar.current_floor <= 11) {
                    Adap.gcopy(34, 640, 640, 340, 40);
                }
                if (Gvar.current_floor == 12) {
                    Adap.gcopy(34, 640, 400, 340, 40);
                }
            }
            // No = 2 なので、レクイエムの大迷宮
            if (Gvar.dungeon_number == 2) {
                if (Gvar.current_floor != 30) {
                    Adap.gcopy(34, 640, 560, 340, 40);
                }
                if (Gvar.current_floor == 30) {
                    Adap.gcopy(34, 640, 880, 340, 40);
                }
            }
            // No = 3 なので、ディアボロの試練
            if (Gvar.dungeon_number == 3) {
                if (Gvar.current_floor != 99) {
                    Adap.gcopy(34, 640, 520, 340, 40);
                }
                if (Gvar.current_floor == 99) {
                    Adap.gcopy(34, 640, 1160, 340, 40);
                }
            }
            // No = 4 なので、一巡後の世界
            if (Gvar.dungeon_number == 4) {
                Adap.gcopy(34, 640, 800, 340, 40);
            }
            // No = 5 なので、鉄獄(鉄の牢獄)
            if (Gvar.dungeon_number == 5) {
                if (Gvar.current_floor != Gvar.var_20) {
                    Adap.gcopy(34, 640, 1040, 340, 40);
                }
                if (Gvar.current_floor == Gvar.var_20) {
                    Adap.gcopy(34, 1000, 760, 340, 40);
                }
            }
            if (Gvar.dungeon_number == 99) {
                Adap.gcopy(34, 640, 960, 340, 40);
            }
        }
        if (Gvar.special_floor == 1) { // 虹村屋敷
            Adap.gcopy(34, 640, 840, 340, 40);
        }
        if (Gvar.special_floor == 2) { // 杜王町埠頭
            Adap.gcopy(34, 640, 1000, 340, 40);
        }
        if (Gvar.special_floor == 3) { // 吉良屋敷
            Adap.gcopy(34, 640, 680, 340, 40);
        }
        if (Gvar.special_floor == 7) { // 広大な砂漠
            Adap.gcopy(34, 640, 1080, 340, 40);
        }
        if (Gvar.special_floor == 8) { // 幻覚の迷宮
            Adap.gcopy(34, 640, 1120, 340, 40);
        }
        if (Gvar.special_floor == 9) { // 幽霊部屋
            Adap.gcopy(34, 640, 920, 340, 40);
        }
        if (Gvar.dungeon_number != 0 && Gvar.dungeon_number != 99 && Gvar.special_floor == 0) {
            Gvar.var_596 = Math.floor(Gvar.current_floor / 100); // Math.floor は対象の値の小数点以下を切り捨て
            Gvar.var_597 = Math.floor((Gvar.current_floor - Gvar.var_596 * 100) / 10); // Math.floor は対象の値の小数点以下を切り捨て
            Gvar.var_598 = Gvar.current_floor - Gvar.var_596 * 100 - Gvar.var_597 * 10;
            Gvar.var_596 = Gvar.var_596 * 20 + 640;
            Gvar.var_597 = Gvar.var_597 * 20 + 640;
            Gvar.var_598 = Gvar.var_598 * 20 + 640;
            if (Gvar.var_597 == 640 && Gvar.current_floor < 100) {
                Gvar.var_597 = 1600;
            }
            if (Gvar.var_596 == 640) {
                Gvar.var_596 = 1600;
            }
            Adap.pos(90, 160);
            if (Gvar.current_floor >= 100) {
                Adap.pos(70, 160);
            }
            Adap.gcopy(34, 880, 80, 80, 40);
            Adap.pos(220, 160);
            Adap.gcopy(34, 880, 120, 40, 40);
            Adap.pos(150, 160);
            Adap.gcopy(34, Gvar.var_596, 80, 20, 40);
            Adap.pos(170, 160);
            Adap.gcopy(34, Gvar.var_597, 80, 20, 40);
            Adap.pos(190, 160);
            if (Gvar.var_597 == 400) {
                Adap.pos(180, 160);
            }
            Adap.gcopy(34, Gvar.var_598, 80, 20, 40);
        }
        return;
}

export {func077}
