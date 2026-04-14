/**
 * func788 — func788 アバッキオ関係
 *
 * (org原典: newDTW_func7)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 旧 func788
async function func788(this: any) {
        Adap.dbgprt(788);
        Gvar.var_532 = 1;
        Gvar.var_1454 = 1;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1455 = Gvar.current_floor;

        await Func.setMessage("ｱﾊﾞｯｷｫ「ムーディー・ブルース！」",
                               "", 7, true, false, true);

        Gvar.var_3164 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.current_floor + 60; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_3165 = Adap.rnd(2);
            if (Gvar.var_3165 == 0) {
                Gvar.var_3166 = Adap.rnd(100);
                Gvar.var_3166 = Gvar.var_3166 + 150;
                for (let cnt3 = 0; cnt3 < Gvar.var_3166; ++cnt3) {
                    Gvar.var_3167 = Adap.rnd(680);
                    Gvar.var_3167 = Gvar.var_3167 - 10;
                    Gvar.var_3168 = Adap.rnd(680);
                    Gvar.var_3169 = Adap.rnd(30);
                    Gvar.var_3169 = Gvar.var_3169 + 5;
                    Adap.color(150, 150, 150);
                    Adap.line(Gvar.var_3167, Gvar.var_3168, Gvar.var_3167 + Gvar.var_3169, Gvar.var_3168);
                    Adap.line(Gvar.var_3167, Gvar.var_3168 + 1, Gvar.var_3167 + Gvar.var_3169, Gvar.var_3168 + 1);
                    Adap.line(Gvar.var_3167, Gvar.var_3168 + 30, Gvar.var_3167 + Gvar.var_3169, Gvar.var_3168 + 30);
                    Adap.color(0, 0, 0);
                    Adap.line(Gvar.var_3167, Gvar.var_3168 + 2, Gvar.var_3167 + Gvar.var_3169, Gvar.var_3168 + 2);
                }
            }
            if (cnt1 > 10) {
                Gvar.var_1455 = Gvar.var_1455 - 1;
                if (Gvar.var_1455 < 0) {
                    Gvar.var_1455 = 0;
                }
            }
            Gvar.var_1454 = Gvar.var_1454 + 1;
            Gvar.var_3164 = Gvar.var_3164 + 1;
            Gvar.var_198 = 1; // メッセージウィンドウ開く
            Gvar.var_300 = 0;
        }
        Gvar.var_1454 = 0;
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_356 = 311;
        Gvar.var_217 = 0;
        await Func.func173();
        return;
}

export {func788}
