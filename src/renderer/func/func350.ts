/**
 * func350 — func350 おそらく射撃攻撃のモーション設定
 *
 * (org原典: newDTW_func3)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// おそらく射撃攻撃のモーション設定
async function func350(this: any) {
        Adap.dbgprt(350);
        if (Gvar.var_340 == 405 || Gvar.var_340 == 406 || Gvar.var_340 == 408 || Gvar.var_340 == 409 || Gvar.var_340 == 411 || Gvar.var_340 == 412 || Gvar.var_340 == 698) {
            return;
        }
        Adap.gmode(2, null, null, null);
        if (Gvar.var_199 == 4) {
            Adap.pos(4 * Gvar.var_35 - 20, 4 * Gvar.var_36 - 10);
        }
        if (Gvar.var_199 == 6) {
            Adap.pos(4 * Gvar.var_35 + 20, 4 * Gvar.var_36 - 10);
        }
        if (Gvar.var_199 == 2) {
            Adap.pos(4 * Gvar.var_35, 4 * Gvar.var_36 + 20 - 10);
        }
        if (Gvar.var_199 == 8) {
            Adap.pos(4 * Gvar.var_35, 4 * Gvar.var_36 - 20 - 10);
        }
        if (Gvar.var_199 == 1) {
            Adap.pos(4 * Gvar.var_35 - 20, 4 * Gvar.var_36 + 20 - 10);
        }
        if (Gvar.var_199 == 3) {
            Adap.pos(4 * Gvar.var_35 + 20, 4 * Gvar.var_36 + 20 - 10);
        }
        if (Gvar.var_199 == 7) {
            Adap.pos(4 * Gvar.var_35 - 20, 4 * Gvar.var_36 - 20 - 10);
        }
        if (Gvar.var_199 == 9) {
            Adap.pos(4 * Gvar.var_35 + 20, 4 * Gvar.var_36 - 20 - 10);
        }
        if (Gvar.var_340 == 403) {
            Adap.pos(4 * Gvar.var_35 + 20, 4 * Gvar.var_36 - 30);
        }
        if (Gvar.var_340 == 401 || Gvar.var_340 == 402 || Gvar.var_340 == 490) {
            if (Gvar.var_199 == 2) {
                Adap.pos(4 * Gvar.var_35 - 10, 4 * Gvar.var_36 + 20 - 10);
            }
            if (Gvar.var_199 == 8) {
                Adap.pos(4 * Gvar.var_35 + 15, 4 * Gvar.var_36 - 20 - 10);
            }
        }
        if (Gvar.var_340 == 400 || Gvar.var_340 == 407 || Gvar.var_340 == 404) {
            if (Gvar.var_199 == 4) {
                Adap.pos(4 * Gvar.var_35 - 30, 4 * Gvar.var_36 - 10);
            }
            if (Gvar.var_199 == 6) {
                Adap.pos(4 * Gvar.var_35 + 30, 4 * Gvar.var_36 - 10);
            }
            if (Gvar.var_199 == 2) {
                Adap.pos(4 * Gvar.var_35, 4 * Gvar.var_36 + 30 - 10);
            }
            if (Gvar.var_199 == 8) {
                Adap.pos(4 * Gvar.var_35, 4 * Gvar.var_36 - 30 - 10);
            }
            if (Gvar.var_199 == 1) {
                Adap.pos(4 * Gvar.var_35 - 30, 4 * Gvar.var_36 + 30 - 10);
            }
            if (Gvar.var_199 == 3) {
                Adap.pos(4 * Gvar.var_35 + 30, 4 * Gvar.var_36 + 30 - 10);
            }
            if (Gvar.var_199 == 7) {
                Adap.pos(4 * Gvar.var_35 - 30, 4 * Gvar.var_36 - 30 - 10);
            }
            if (Gvar.var_199 == 9) {
                Adap.pos(4 * Gvar.var_35 + 30, 4 * Gvar.var_36 - 30 - 10);
            }
        }
        // タスクの射撃モーション設定。
        if (Gvar.var_340 == 414 || Gvar.var_340 == 415 || Gvar.var_340 == 416) { // Ver0.14にて修正。415、416を追加。
            if (Gvar.var_199 == 4) {
                Adap.pos(4 * Gvar.var_35 - 20, 4 * Gvar.var_36 - 10 + 10);
            }
            if (Gvar.var_199 == 6) {
                Adap.pos(4 * Gvar.var_35 + 20, 4 * Gvar.var_36 - 10 + 10);
            }
            if (Gvar.var_199 == 2) {
                Adap.pos(4 * Gvar.var_35 - 10, 4 * Gvar.var_36 + 20 - 10);
            }
            if (Gvar.var_199 == 8) {
                Adap.pos(4 * Gvar.var_35 + 15, 4 * Gvar.var_36 - 20 - 10);
            }
            if (Gvar.var_199 == 1) {
                Adap.pos(4 * Gvar.var_35 - 20, 4 * Gvar.var_36 + 20 - 10);
            }
            if (Gvar.var_199 == 3) {
                Adap.pos(4 * Gvar.var_35 + 20, 4 * Gvar.var_36 + 20 - 10);
            }
            if (Gvar.var_199 == 7) {
                Adap.pos(4 * Gvar.var_35 - 20, 4 * Gvar.var_36 - 20 - 10);
            }
            if (Gvar.var_199 == 9) {
                Adap.pos(4 * Gvar.var_35 + 20, 4 * Gvar.var_36 - 20 - 10);
            }
        }
        if (Gvar.var_340 == 400 || Gvar.var_340 == 407) {
            if (Gvar.var_1197 == 1) {
                Adap.gcopy(3, 360, 240, 40, 40);
            }
            if (Gvar.var_1197 == 2) {
                Adap.gcopy(3, 400, 240, 40, 40);
            }
            if (Gvar.var_1197 == 3) {
                Adap.gcopy(3, 440, 240, 40, 40);
            }
            return;
        }
        if (Gvar.var_340 == 404) {
            if (Gvar.var_1197 == 1) {
                Adap.gcopy(3, 280, 280, 40, 40);
            }
            if (Gvar.var_1197 == 2) {
                Adap.gcopy(3, 320, 280, 40, 40);
            }
            if (Gvar.var_1197 == 3) {
                Adap.gcopy(3, 360, 280, 40, 40);
            }
            return;
        }
        if (Gvar.var_340 == 401) {
            if (Gvar.var_1197 == 1) {
                Adap.gcopy(3, 600, 320, 40, 40);
            }
            if (Gvar.var_1197 == 2) {
                Adap.gcopy(3, 640, 320, 40, 40);
            }
            if (Gvar.var_1197 == 3) {
                Adap.gcopy(3, 680, 320, 40, 40);
            }
            return;
        }
        if (Gvar.var_1197 == 1) {
            Adap.gcopy(3, 0, 320, 40, 40);
        }
        if (Gvar.var_1197 == 2) {
            Adap.gcopy(3, 40, 320, 40, 40);
        }
        if (Gvar.var_1197 == 3) {
            Adap.gcopy(3, 80, 320, 40, 40);
        }
        return;
}

export {func350}
