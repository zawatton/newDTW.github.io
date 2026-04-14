/**
 * func346 — func346 射撃discの攻撃時に表示されるスタンド本体ドット絵設定
 *
 * (org原典: newDTW_func3)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func346(this: any) {
        Adap.dbgprt(346);
        if (Gvar.var_1270 >= 1 || Gvar.var_1190 >= 1) {
            return;
        }
        Gvar.var_1271 = 1;
        if (Gvar.var_199 == 4) {
            Adap.pos(Gvar.var_764 * Gvar.var_35 - 20, Gvar.var_763 * Gvar.var_36 - 10);
        }
        if (Gvar.var_199 == 6) {
            Adap.pos(Gvar.var_764 * Gvar.var_35 + 20, Gvar.var_763 * Gvar.var_36 - 10);
        }
        if (Gvar.var_199 == 2) {
            Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 10 + 20);
        }
        if (Gvar.var_199 == 8) {
            Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 10 - 20);
        }
        if (Gvar.var_199 == 1) {
            Adap.pos(Gvar.var_764 * Gvar.var_35 - 20, Gvar.var_763 * Gvar.var_36 - 10 + 20);
        }
        if (Gvar.var_199 == 3) {
            Adap.pos(Gvar.var_764 * Gvar.var_35 + 20, Gvar.var_763 * Gvar.var_36 - 10 + 20);
        }
        if (Gvar.var_199 == 7) {
            Adap.pos(Gvar.var_764 * Gvar.var_35 - 20, Gvar.var_763 * Gvar.var_36 - 10 - 20);
        }
        if (Gvar.var_199 == 9) {
            Adap.pos(Gvar.var_764 * Gvar.var_35 + 20, Gvar.var_763 * Gvar.var_36 - 10 - 20);
        }
        if (Gvar.var_340 == 400 || Gvar.var_340 == 407) { // No = 400 ハイエロファントグリーン、No = 407 ハイエロファントエメラルド
            Gvar.var_1271 = 400;
        }
        if (Gvar.var_340 == 401) { // No = 401 フー・ファイターズ
            Gvar.var_1271 = 720;
        }
        if (Gvar.var_340 == 402 || Gvar.var_340 == 490) { // No = 402 エンペラー、No = 490 不明
            Gvar.var_1271 = 0;
        }
        if (Gvar.var_340 == 403) { // No = 403 セックス・ピストルズ
            Gvar.var_1271 = 560;
        }
        if (Gvar.var_340 == 404) { // No = 404 ホルス神
            Gvar.var_1271 = 520;
        }
        if (Gvar.var_340 == 405) { // No = 405 エコーズACT2
            Gvar.var_1271 = 800;
        }
        if (Gvar.var_340 == 406) { // No = 406 エコーズACT1
            Gvar.var_1271 = 640;
        }
        if (Gvar.var_340 == 414) { // No = 414 タスクact2
            Gvar.var_1271 = 1240;
        }
        if (Gvar.var_340 == 415) { // Ver0.1401にて追加。No = 415 タスクact1
            Gvar.var_1271 = 1240;
        }
        if (Gvar.var_340 == 416) { // Ver0.1401にて追加。No = 416 タスクact3
            Gvar.var_1271 = 1240;
        }
        if (Gvar.var_340 == 417) { // Ver0.1401にて追加。No = 417 ラット
            Gvar.var_1271 = 1200;
        }
        if (Gvar.var_1271 == 1) {
            Adap.gmode(2, null, null, null);
            return;
        }
        Adap.gmode(2, null, null, null);
        if (Gvar.var_1266 == 1) {
            Adap.color(0, 0, 0);

            Adap.gmode(4, null, null, 30);
        }
        if (Gvar.var_1266 == 2) {
            Adap.color(0, 0, 0);

            Adap.gmode(4, null, null, 60);
        }
        if (Gvar.var_1266 == 3) {
            Adap.color(0, 0, 0);

            Adap.gmode(4, null, null, 100);
        }
        if (Gvar.var_1266 == 4) {
            Adap.color(0, 0, 0);
    
            Adap.gmode(4, null, null, 150);
        }
        if (Gvar.var_1266 == 5) {
            Adap.color(0, 0, 0);
    
            Adap.gmode(4, null, null, 200);
        }
        if (Gvar.var_1266 == 6) {
            Adap.gmode(2, null, null, null);
        }
        if (Gvar.var_340 != 405 && Gvar.var_340 != 406) {
            if (Gvar.var_199 == 2) {
                Adap.gcopy(34, 0, Gvar.var_1271, 40, 40);
            }
            if (Gvar.var_199 == 4) {
                Adap.gcopy(34, 40, Gvar.var_1271, 40, 40);
            }
            if (Gvar.var_199 == 8) {
                Adap.gcopy(34, 80, Gvar.var_1271, 40, 40);
            }
            if (Gvar.var_199 == 6) {
                Adap.gcopy(34, 120, Gvar.var_1271, 40, 40);
            }
            if (Gvar.var_199 == 1) {
                Adap.gcopy(34, 160, Gvar.var_1271, 40, 40);
            }
            if (Gvar.var_199 == 3) {
                Adap.gcopy(34, 240, Gvar.var_1271, 40, 40);
            }
            if (Gvar.var_199 == 7) {
                Adap.gcopy(34, 200, Gvar.var_1271, 40, 40);
            }
            if (Gvar.var_199 == 9) {
                Adap.gcopy(34, 280, Gvar.var_1271, 40, 40);
            }
        }
        if (Gvar.var_340 == 405) {
            if (Gvar.var_199 == 2) {
                Adap.gcopy(21, 0, 1040, 40, 40);
            }
            if (Gvar.var_199 == 4) {
                Adap.gcopy(21, 120, 1040, 40, 40);
            }
            if (Gvar.var_199 == 8) {
                Adap.gcopy(21, 240, 1040, 40, 40);
            }
            if (Gvar.var_199 == 6) {
                Adap.gcopy(21, 360, 1040, 40, 40);
            }
            if (Gvar.var_199 == 1) {
                Adap.gcopy(21, 480, 1040, 40, 40);
            }
            if (Gvar.var_199 == 7) {
                Adap.gcopy(21, 600, 1040, 40, 40);
            }
            if (Gvar.var_199 == 3) {
                Adap.gcopy(21, 720, 1040, 40, 40);
            }
            if (Gvar.var_199 == 9) {
                Adap.gcopy(21, 840, 1040, 40, 40);
            }
        }
        if (Gvar.var_340 == 406) {
            if (Gvar.var_199 == 2) {
                Adap.gcopy(21, 0, 1080, 40, 40);
            }
            if (Gvar.var_199 == 4) {
                Adap.gcopy(21, 120, 1080, 40, 40);
            }
            if (Gvar.var_199 == 8) {
                Adap.gcopy(21, 240, 1080, 40, 40);
            }
            if (Gvar.var_199 == 6) {
                Adap.gcopy(21, 360, 1080, 40, 40);
            }
            if (Gvar.var_199 == 1) {
                Adap.gcopy(21, 480, 1080, 40, 40);
            }
            if (Gvar.var_199 == 7) {
                Adap.gcopy(21, 600, 1080, 40, 40);
            }
            if (Gvar.var_199 == 3) {
                Adap.gcopy(21, 720, 1080, 40, 40);
            }
            if (Gvar.var_199 == 9) {
                Adap.gcopy(21, 840, 1080, 40, 40);
            }
        }
        Adap.gmode(2, null, null, null);
        return;
}

export {func346}
