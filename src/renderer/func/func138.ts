/**
 * func138 — func138 読み込んだ"img_3.gif"ファイルからロード時の"石仮面"、"進行バー"の座標指定処理
 *
 * newDTW のゲームの根幹となる処理
 *
 * (org原典: newDTW_mainframe)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func138(this: any) {
        Adap.dbgprt(138);
        Adap.gsel(0);
        Adap.redraw(0);
        Adap.color(0, 0, 0);
        Adap.boxf(0, 0, 340, 340);
        Adap.gmode(4, null, null, Gvar.var_18);
        if (Gvar.var_11 == 0) {
            if (Gvar.var_60 < 25) {
                Adap.pos(150, 120);

                // Adap.buffer(17)は"img_3.gif"。X座標40、Y座標0から切り取り長さ X方向40、Y方向80
                // 絵:石仮面(目が光っていない & 赤石無し)
                Adap.gcopy(17, 40, 0, 40, 80);
            }
            if (Gvar.var_60 >= 25) {
                Adap.pos(150, 120);
                // Adap.buffer(17)は"img_3.gif"。X座標0、Y座標0から切り取り長さ X方向40、Y方向80
                // 絵:石仮面(目が光っている & 赤石無し)
                Adap.gcopy(17, 0, 0, 40, 80);
            }
        }
        if (Gvar.var_11 == 1) {
            if (Gvar.var_60 < 25) {
                Adap.pos(150, 120);

                // Adap.buffer(17)は"img_3.gif"。X座標120、Y座標0から切り取り長さ X方向40、Y方向80
                // 絵:石仮面(目が光っていない & 赤石有り)                
                Adap.gcopy(17, 120, 0, 40, 80);
            }
            if (Gvar.var_60 >= 25) {
                Adap.pos(150, 120);

                // Adap.buffer(17)は"img_3.gif"。X座標80、Y座標0から切り取り長さ X方向40、Y方向80
                // 絵:石仮面(目が光っている & 赤石有り)
                Adap.gcopy(17, 80, 0, 40, 80);
            }
        }
        Adap.pos(100, 200);
        // Adap.buffer(17)は"img_3.gif"。X座標0、Y座標80から切り取り長さ X方向160、Y方向40
        // 絵文字:NOW LOADING
        Adap.gcopy(17, 0, 80, 160, 40);
        Gvar.var_685 = 1;
        for (let cnt1 = 0; cnt1 < 25; ++cnt1) {
            Gvar.var_447 = Gvar.var_685 * 3 + 130;
            Gvar.var_449 = 240;
            Adap.pos(Gvar.var_447, Gvar.var_449);
            // Adap.buffer(17)は"img_3.gif"。X座標643、Y座標640から切り取り長さ X方向2、Y方向6
            // 絵文字:ロード読み込み進行バー1
            Adap.gcopy(17, 643, 640, 2, 6);
            Gvar.var_685++;
        }
        if (Gvar.var_60 >= 1) {
            Gvar.var_685 = 1;
            for (let cnt2 = 0; cnt2 < Gvar.var_60; ++cnt2) {
                Gvar.var_447 = Gvar.var_685 * 3 + 130;
                Gvar.var_449 = 240;
                Adap.pos(Gvar.var_447, Gvar.var_449);

                // Adap.buffer(17)は"img_3.gif"。X座標640、Y座標640から切り取り長さ X方向2、Y方向6
                // 絵文字:ロード読み込み進行バー2
                Adap.gcopy(17, 640, 640, 2, 6);
                Gvar.var_685++;
            }
        }
        if (Gvar.var_10 >= 1) {
            await Func.func338();
        }
        Adap.redraw(1);
        await Adap.wait(1);
        return;
}

export {func138}
