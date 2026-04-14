/**
 * func078 — func078 不明 (ロード関係)
 *
 * (org原典: newDTW_func0)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// ディアボロの試練クリア時の「完」メッセージ
async function func078(this: any) {
        Adap.dbgprt(78);
        if (Gvar.var_373 == 1) {
            Adap.pos(0, 0);
            Adap.gmode(4, null, null, 255);
            // Adap.buffer(8)は"img1.gif"。X座標400、Y座標350から切り取り長さ X方向340、Y方向340
            // 絵:真っ黒な正方形。ロード中の黒か?
            Adap.gcopy(8, 400, 350, 340, 340);
        }
        if (Gvar.var_373 == 2) {
            Adap.pos(0, 0);
            Adap.gmode(4, null, null, 200);
            // Adap.buffer(8)は"img1.gif"。X座標400、Y座標350から切り取り長さ X方向340、Y方向340
            // 絵:真っ黒な正方形。ロード中の黒か?
            Adap.gcopy(8, 400, 350, 340, 340);
        }
        if (Gvar.var_373 == 3) {
            Adap.pos(0, 0);
            Adap.gmode(4, null, null, 160);
            // Adap.buffer(8)は"img1.gif"。X座標400、Y座標350から切り取り長さ X方向340、Y方向340
            // 絵:真っ黒な正方形。ロード中の黒か?
            Adap.gcopy(8, 400, 350, 340, 340);
        }
        if (Gvar.var_373 == 4) {
            Adap.pos(0, 0);
            Adap.gmode(4, null, null, 110);
            // Adap.buffer(8)は"img1.gif"。X座標400、Y座標350から切り取り長さ X方向340、Y方向340
            // 絵:真っ黒な正方形。ロード中の黒か?
            Adap.gcopy(8, 400, 350, 340, 340);
        }
        if (Gvar.var_373 == 5) {
            Adap.pos(0, 0);
            Adap.gmode(4, null, null, 80);
            // Adap.buffer(8)は"img1.gif"。X座標400、Y座標350から切り取り長さ X方向340、Y方向340
            // 絵:真っ黒な正方形。ロード中の黒か?
            Adap.gcopy(8, 400, 350, 340, 340);
        }
        if (Gvar.var_373 == 6) {
            Adap.pos(0, 0);
            Adap.gmode(4, null, null, 50);
            // Adap.buffer(8)は"img1.gif"。X座標400、Y座標350から切り取り長さ X方向340、Y方向340
            // 絵:真っ黒な正方形。ロード中の黒か?
            Adap.gcopy(8, 400, 350, 340, 340);
        }
        if (Gvar.var_600 >= 1) {
            Adap.color(255, 255, 255);
    
            Adap.font("ＭＳ 明朝", 36, 1);
            Adap.pos(160, 150);
            Adap.mes("完");
        }
        return;
}

export {func078}
