/**
 * func328 — func328 不明
 *
 * (org原典: newDTW_func3)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func328(this: any) {
        Adap.dbgprt(328);
        if (Gvar.var_747 >= 1) {
            await Func.func351();
        }
        if (Gvar.var_1163 == 1) { // 敵エンヤ婆の能力発動フラグONの場合
            Adap.color(0, 0, 0);
            if (Gvar.var_1164 == 0) {
                Adap.pos(0, 0);
                Adap.gmode(4, null, null, 30);
            }
            if (Gvar.var_1164 == 1) {
                Adap.pos(0, 0);
                Adap.gmode(4, null, null, 60);
            }
            if (Gvar.var_1164 == 2) {
                Adap.pos(0, 0);
                Adap.gmode(4, null, null, 90);
            }
            if (Gvar.var_1164 == 3) {
                Adap.pos(0, 0);
                Adap.gmode(4, null, null, 120);
            }
            if (Gvar.var_1164 == 4) {
                Adap.pos(0, 0);
                Adap.gmode(4, null, null, 90);
            }
            if (Gvar.var_1164 == 5) {
                Adap.pos(0, 0);
                Adap.gmode(4, null, null, 60);
            }
            // Adap.buffer(8)は"img1.gif"。X座標0、Y座標800から切り取り長さ X方向340、Y方向340
            // 絵:スタンドジャッジメントの発動？エンヤ婆の能力が発動した時の絵と思われる。
            Adap.gcopy(8, 0, 800, 340, 340);
        }
        if (Gvar.var_312 == 1) {
            Adap.color(0, 0, 0);
            Adap.gmode(4, null, null, Gvar.var_311);
            Adap.pos(0, 0);
            Adap.gcopy(19, 0, 0, 340, 340);
        }
        if (Gvar.var_1165 == 1) {
            Adap.color(0, 0, 0);
            if (Gvar.var_1164 == 0) {
                Adap.pos(0, 0);
                Adap.gmode(4, null, null, 10);
            }
            if (Gvar.var_1164 == 1) {
                Adap.pos(0, 0);
                Adap.gmode(4, null, null, 30);
            }
            if (Gvar.var_1164 == 2) {
                Adap.pos(0, 0);
                Adap.gmode(4, null, null, 60);
            }
            if (Gvar.var_1164 == 3) {
                Adap.pos(0, 0);
                Adap.gmode(4, null, null, 90);
            }
            if (Gvar.var_1164 == 4) {
                Adap.pos(0, 0);
                Adap.gmode(4, null, null, 120);
            }
            if (Gvar.var_1164 == 5) {
                Adap.pos(0, 0);
                Adap.gmode(4, null, null, 60);
            }
            Adap.gcopy(19, 0, 0, 340, 340);
        }
        // Ver0.1403にて削除。亀の中から外へ出る場所の光表示処理。Func.func163へ移動。
        return;
}

export {func328}
