import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// ロード中の黒画面処理?
async function func180(this: any) {
        Adap.dbgprt(180);
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
        return;
}

export {func180}
