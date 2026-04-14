/**
 * func329 — func329 画面全体に黒いブラインドをかける処理
 *
 * (org原典: newDTW_func3)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
// 画面全体に黒いブラインドをかける処理
async function func329(this: any) {
        Adap.dbgprt(329);
        Adap.color(0, 0, 0);
        Adap.gmode(4, null, null, 200); // 255で完全コピー。200なので少し透明になる
        Gvar.var_763 = 0;
        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
            Gvar.var_764 = 0;
            for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
                Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36);
                // Adap.buffer(8)は"img1.gif"。X座標760、Y座標880から切り取り長さ X方向40、Y方向40
                // 絵:黒い四角いマス
                Adap.gcopy(8, 760, 880, 40, 40);
                Gvar.var_764++; // こうすることで、9回ループした時には9 * 40 = 360となる
            }
            Gvar.var_763++; // こうすることで、9回ループした時には9 * 40 = 360となる
        }
        return;
}

export {func329}
