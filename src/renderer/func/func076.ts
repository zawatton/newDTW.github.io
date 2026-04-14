/**
 * func076 — func076 各ダンジョンの絵文字読込処理
 *
 * (org原典: newDTW_dungeon_main / DONE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 各ダンジョンの絵文字読込処理
async function func076(this: any) {
        Adap.dbgprt(76);
        Adap.redraw(2);
        Adap.color(1, 1, 1);
        Adap.boxf(0, 0, 360, 360);
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
                    // Adap.buffer(34)は"img_syageki.gif"。X座標640、Y座標440から切り取り長さ X方向340、Y方向40
                    // 絵文字:水の都
                    Adap.gcopy(34, 640, 440, 340, 40);
                }
                if (Gvar.current_floor >= 3 && Gvar.current_floor <= 5) {
                    // Adap.buffer(34)は"img_syageki.gif"。X座標640、Y座標480から切り取り長さ X方向340、Y方向40
                    // 絵文字:森の郊外
                    Adap.gcopy(34, 640, 480, 340, 40);
                }
                if (Gvar.current_floor >= 6 && Gvar.current_floor <= 8) {
                    // Adap.buffer(34)は"img_syageki.gif"。X座標640、Y座標600から切り取り長さ X方向340、Y方向40
                    // 絵文字:紅海の浜辺
                    Adap.gcopy(34, 640, 600, 340, 40);
                }
                if (Gvar.current_floor >= 9 && Gvar.current_floor <= 11) {
                    // Adap.buffer(34)は"img_syageki.gif"。X座標640、Y座標640から切り取り長さ X方向340、Y方向40
                    // 絵文字:山岳地帯
                    Adap.gcopy(34, 640, 640, 340, 40);
                }
                if (Gvar.current_floor == 12) {
                    // Adap.buffer(34)は"img_syageki.gif"。X座標640、Y座標400から切り取り長さ X方向340、Y方向40
                    // 絵文字:エンヤホテル
                    Adap.gcopy(34, 640, 400, 340, 40);
                }
            }
            // No = 2 なので、レクイエムの大迷宮
            if (Gvar.dungeon_number == 2) {
                if (Gvar.current_floor != 30) {
                    // Adap.buffer(34)は"img_syageki.gif"。X座標640、Y座標560から切り取り長さ X方向340、Y方向40
                    // 絵文字:レクイエムの大迷宮
                    Adap.gcopy(34, 640, 560, 340, 40);
                }
                if (Gvar.current_floor == 30) {
                    // Adap.buffer(34)は"img_syageki.gif"。X座標640、Y座標880から切り取り長さ X方向340、Y方向40
                    // 絵文字:黄金の風
                    Adap.gcopy(34, 640, 880, 340, 40);
                }
            }
            // No = 3 なので、ディアボロの試練
            if (Gvar.dungeon_number == 3) {
                if (Gvar.current_floor != 99) {
                    // Adap.buffer(34)は"img_syageki.gif"。X座標640、Y座標520から切り取り長さ X方向340、Y方向40
                    // 絵文字:ディアボロの試練
                    Adap.gcopy(34, 640, 520, 340, 40);
                }
                if (Gvar.current_floor == 99) {
                    // Adap.buffer(34)は"img_syageki.gif"。X座標640、Y座標1160から切り取り長さ X方向340、Y方向40
                    // 絵文字:自由人の狂想曲
                    Adap.gcopy(34, 640, 1160, 340, 40);
                }
            }
            // No = 4 なので、一巡後の世界
            if (Gvar.dungeon_number == 4) {
                // Adap.buffer(34)は"img_syageki.gif"。X座標640、Y座標800から切り取り長さ X方向340、Y方向40
                // 絵文字:一巡後の世界
                Adap.gcopy(34, 640, 800, 340, 40);
            }
            // No = 5 なので、鉄獄(鉄の牢獄)
            if (Gvar.dungeon_number == 5) {
                if (Gvar.current_floor != Gvar.var_20) {
                    // Adap.buffer(34)は"img_syageki.gif"。X座標640、Y座標1040から切り取り長さ X方向340、Y方向40
                    // 絵文字:鉄獄 Ver0.1401にて修正。鉄の牢獄 → 鉄獄
                    Adap.gcopy(34, 640, 1040, 340, 40);
                }
                if (Gvar.current_floor == Gvar.var_20) {
                    // Adap.buffer(34)は"img_syageki.gif"。X座標1000、Y座標760から切り取り長さ X方向340、Y方向40
                    // 絵文字:ケープ・カナベラル
                    Adap.gcopy(34, 980, 840, 360, 40);
                }
            }
            if (Gvar.dungeon_number == 99) {
                // Adap.buffer(34)は"img_syageki.gif"。X座標640、Y座標960から切り取り長さ X方向340、Y方向40
                // 絵文字:魔少年の問題
                Adap.gcopy(34, 640, 960, 340, 40);
            }
        }
        if (Gvar.special_floor == 1) { // 虹村屋敷
            // Adap.buffer(34)は"img_syageki.gif"。X座標640、Y座標840から切り取り長さ X方向340、Y方向40
            // 絵文字:虹村屋敷
            Adap.gcopy(34, 640, 840, 340, 40);
        }
        if (Gvar.special_floor == 2) { // 杜王町埠頭
            // Adap.buffer(34)は"img_syageki.gif"。X座標640、Y座標1000から切り取り長さ X方向340、Y方向40
            // 絵文字:杜王町埠頭
            Adap.gcopy(34, 640, 1000, 340, 40);
        }
        if (Gvar.special_floor == 3) { // 吉良屋敷
            // Adap.buffer(34)は"img_syageki.gif"。X座標640、Y座標680から切り取り長さ X方向340、Y方向40
            // 絵文字:吉良屋敷
            Adap.gcopy(34, 640, 680, 340, 40);
        }
        if (Gvar.special_floor == 7) { // 広大な砂漠
            // Adap.buffer(34)は"img_syageki.gif"。X座標640、Y座標1080から切り取り長さ X方向340、Y方向40
            // 絵文字:砂漠
            Adap.gcopy(34, 640, 1080, 340, 40);
        }
        if (Gvar.special_floor == 8) { // 幻覚の迷宮
            // Adap.buffer(34)は"img_syageki.gif"。X座標640、Y座標1120から切り取り長さ X方向340、Y方向40
            // 絵文字:幻覚の迷宮
            Adap.gcopy(34, 640, 1120, 340, 40);
        }
        if (Gvar.special_floor == 9) { // 幽霊部屋
            // Adap.buffer(34)は"img_syageki.gif"。X座標640、Y座標920から切り取り長さ X方向340、Y方向40
            // 絵文字:幽霊部屋
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
            // Adap.buffer(34)は"img_syageki.gif"。X座標880、Y座標80から切り取り長さ X方向80、Y方向40
            // 絵文字:地下
            Adap.gcopy(34, 880, 80, 80, 40);
            Adap.pos(220, 160);
            
            // Adap.buffer(34)は"img_syageki.gif"。X座標880、Y座標120から切り取り長さ X方向40、Y方向40
            // 絵文字:階
            Adap.gcopy(34, 880, 120, 40, 40);
            Adap.pos(150, 160);
            
            // Adap.buffer(34)は"img_syageki.gif"。X座標var_596(現在の階？)、Y座標80から切り取り長さ X方向20、Y方向40
            // 絵文字:数字(0~9)
            Adap.gcopy(34, Gvar.var_596, 80, 20, 40);
            Adap.pos(170, 160);

            // Adap.buffer(34)は"img_syageki.gif"。X座標var_597(現在の階？)、Y座標80から切り取り長さ X方向20、Y方向40
            // 絵文字:数字(0~9)
            Adap.gcopy(34, Gvar.var_597, 80, 20, 40);
            Adap.pos(190, 160);

            if (Gvar.var_597 == 400) {
                Adap.pos(180, 160);
            }
            // Adap.buffer(34)は"img_syageki.gif"。X座標var_598(現在の階？)、Y座標80から切り取り長さ X方向20、Y方向40
            // 絵文字:数字(0~9)
            Adap.gcopy(34, Gvar.var_598, 80, 20, 40);
        }
        if (Gvar.var_10 >= 1) {
            await Func.func338();
        }
        Adap.redraw(1);
        return;
}

export {func076}
