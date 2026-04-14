/**
 * func553 — func553 不明
 *
 * (org原典: newDTW_func5)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// ダンジョン毎の階段処理
async function func553(this: any) {
        Adap.dbgprt(553);
        if (Gvar.var_262 != 0) { // Gvar.var_262 != 0 なので、Gvar.dungeon_number = 0 であれば
            return;
        }
        Gvar.var_2436 = Gvar.var_447 - Gvar.var_66 + 4;
        Gvar.var_2437 = Gvar.var_449 - Gvar.var_67 + 4;
        if (Gvar.var_409 == 0) {
            Gvar.var_2439 = 0;
        }
        if (Gvar.var_409 == 1) {
            Gvar.var_2439 = 10;
        }
        if (Gvar.var_409 == 2) {
            Gvar.var_2439 = 20;
        }
        if (Gvar.var_409 == 3) {
            Gvar.var_2439 = 30;
        }
        if (Gvar.var_409 == 4) {
            Gvar.var_2439 = 40;
        }
        if (Gvar.var_1824 == 0) {
            if (Gvar.var_199 == 4) {
                Adap.pos(Gvar.var_2436 * Gvar.var_35 - Gvar.var_2439, Gvar.var_2437 * Gvar.var_36);
            }
            if (Gvar.var_199 == 6) {
                Adap.pos(Gvar.var_2436 * Gvar.var_35 + Gvar.var_2439, Gvar.var_2437 * Gvar.var_36);
            }
            if (Gvar.var_199 == 8) {
                Adap.pos(Gvar.var_2436 * Gvar.var_35, Gvar.var_2437 * Gvar.var_36 - Gvar.var_2439);
            }
            if (Gvar.var_199 == 2) {
                Adap.pos(Gvar.var_2436 * Gvar.var_35, Gvar.var_2437 * Gvar.var_36 + Gvar.var_2439);
            }
            if (Gvar.var_199 == 1) {
                Adap.pos(Gvar.var_2436 * Gvar.var_35 - Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 + Gvar.var_2439);
            }
            if (Gvar.var_199 == 3) {
                Adap.pos(Gvar.var_2436 * Gvar.var_35 + Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 + Gvar.var_2439);
            }
            if (Gvar.var_199 == 7) {
                Adap.pos(Gvar.var_2436 * Gvar.var_35 - Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - Gvar.var_2439);
            }
            if (Gvar.var_199 == 9) {
                Adap.pos(Gvar.var_2436 * Gvar.var_35 + Gvar.var_2439, Gvar.var_2437 * Gvar.var_36 - Gvar.var_2439);
            }
            if (Gvar.var_217 == 1) {
                Adap.pos(Gvar.var_2436 * Gvar.var_35, Gvar.var_2437 * Gvar.var_36);
            }
        }
        if (Gvar.var_1824 == 1) {
            if (Gvar.var_199 == 4) {
                Adap.pos(Gvar.var_2436 * Gvar.var_35 - 20 + 20, Gvar.var_2437 * Gvar.var_36);
            }
            if (Gvar.var_199 == 6) {
                Adap.pos(Gvar.var_2436 * Gvar.var_35 + 20 - 20, Gvar.var_2437 * Gvar.var_36);
            }
            if (Gvar.var_199 == 8) {
                Adap.pos(Gvar.var_2436 * Gvar.var_35, Gvar.var_2437 * Gvar.var_36 - 20 + 20);
            }
            if (Gvar.var_199 == 2) {
                Adap.pos(Gvar.var_2436 * Gvar.var_35, Gvar.var_2437 * Gvar.var_36 + 20 - 20);
            }
            if (Gvar.var_199 == 1) {
                Adap.pos(Gvar.var_2436 * Gvar.var_35 - 20 + 20, Gvar.var_2437 * Gvar.var_36 + 20 - 20);
            }
            if (Gvar.var_199 == 3) {
                Adap.pos(Gvar.var_2436 * Gvar.var_35 + 20 - 20, Gvar.var_2437 * Gvar.var_36 + 20 - 20);
            }
            if (Gvar.var_199 == 7) {
                Adap.pos(Gvar.var_2436 * Gvar.var_35 - 20 + 20, Gvar.var_2437 * Gvar.var_36 - 20 + 20);
            }
            if (Gvar.var_199 == 9) {
                Adap.pos(Gvar.var_2436 * Gvar.var_35 + 20 - 20, Gvar.var_2437 * Gvar.var_36 - 20 + 20);
            }
        }
        Adap.gmode(2, null, null, null);
        if (Gvar.var_73[Gvar.var_447][Gvar.var_449] == 1) { // 各ダンジョンの最終フロア毎の階段処理？
            Gvar.var_2497 = 0;
            // No = 1 なので、ホテルの外
            if (Gvar.dungeon_number == 1 && Gvar.current_floor == 12) {
                Gvar.var_2497 = 1;
            }
            // No = 2 なので、レクイエムの大迷宮
            if (Gvar.dungeon_number == 2 && Gvar.current_floor == 30) {
                Gvar.var_2497 = 1;
            }
            // No = 3 なので、ディアボロの試練
            if (Gvar.dungeon_number == 3 && Gvar.current_floor == 99) {
                Gvar.var_2497 = 1;
            }
            // No = 5 なので、鉄獄(鉄の牢獄)
            if (Gvar.dungeon_number == 5 && Gvar.current_floor == Gvar.var_20) {
                Gvar.var_2497 = 1;
            }
            if (Gvar.var_2497 == 1) {
                Adap.gcopy(5, 1200, 0, 40, 40); // buffer_id = 5 なので "img_map.gif" の1行目にある上り階段
            }
            if (Gvar.var_2497 == 0) {
                Adap.gcopy(5, 1200, Gvar.y_axis_map_image * 40, 40, 40); // buffer_id = 5 なので "img_map.gif" にあるマップ毎の下り階段
            }
        }
        if (Gvar.var_73[Gvar.var_447][Gvar.var_449] == 2) { // 各ダンジョンの最終フロア以外の階段処理？
            Adap.gcopy(5, 1640, Gvar.y_axis_map_image * 40, 40, 40);// buffer_id = 5 なので "img_map.gif" にあるマップ毎の上り階段
        }
        return;
}

export {func553}
