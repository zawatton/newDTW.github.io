/**
 * func542 — func542 不明
 *
 * (org原典: newDTW_func5)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import { tf } from '../i18n'

// バステト女神の罠を蹈んで磁力化した際の処理
async function func542(this: any) {
        Adap.dbgprt(542);
        Gvar.var_2477 = Adap.rnd(300);
        if (Gvar.var_2464 == 1) {
            Gvar.var_2477 = 3;
        }
        if (Gvar.var_2464 == 2) {
            Gvar.var_2477 = 0;
        }
        if (Gvar.var_2464 == 3) {
            Gvar.var_2477 = 4;
        }
        if (Gvar.var_2464 == 4) {
            Gvar.var_2477 = 5;
        }
        if (Gvar.var_2464 == 5) {
            Gvar.var_2477 = 6;
        }
        if (Gvar.var_2464 >= 6) {
            Gvar.var_2477 = 7;
        }
        if (Gvar.var_2477 == 1 && Gvar.var_140 >= 1) {
            await Func.setMessage("磁力で カナヅチが飛んできた！", "5 のダメージを喰らった。", 10, false, false, false);
            Gvar.var_108 = 1;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1406 = 1;
            Gvar.var_1408 = 1;
            Gvar.var_1407 = Adap.rnd(3);
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1406 = Gvar.var_1406 + 1;
                if (Gvar.var_1406 == 6) {
                    Adap.DSPLAY(103); // 殴られた時の効果音
                }
            }
            Gvar.var_211 = Gvar.var_211 - 5;
            Gvar.var_208 = Gvar.var_208 + 5;
            if (Gvar.var_211 <= 0) {
                Gvar.var_211 = 0;
                Gvar.var_356 = 267;
                Gvar.var_199 = 2;
            }
            Gvar.var_1406 = 0;
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_108 = 0;
        }
        if (Gvar.var_2477 == 3 && Gvar.var_140 >= 1) {
            await Func.setMessage("磁力で カンヅメが飛んできた！", "3 のダメージを喰らった。", 10, false, false, false);
            Gvar.var_108 = 1;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1408 = 3;
            Gvar.var_1406 = 1;
            Gvar.var_1407 = Adap.rnd(3);
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1406 = Gvar.var_1406 + 1;
                if (Gvar.var_1406 == 6) {
                    Adap.DSPLAY(157);
                }
            }
            Gvar.var_211 = Gvar.var_211 - 3;
            Gvar.var_208 = Gvar.var_208 + 3;
            if (Gvar.var_211 <= 0) {
                Gvar.var_211 = 0;
                Gvar.var_356 = 268;
                Gvar.var_199 = 2;
            }
            Gvar.var_1406 = 0;
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_108 = 0;
        }
        if (Gvar.var_2477 == 2 && Gvar.var_140 >= 2) {
            await Func.setMessage("磁力で ラジカセが飛んできた！", "8 のダメージを喰らった。", 10, false, false, false);
            Gvar.var_108 = 1;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1408 = 2;
            Gvar.var_1406 = 1;
            Gvar.var_1407 = Adap.rnd(3);
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1406 = Gvar.var_1406 + 1;
                if (Gvar.var_1406 == 6) {
                    Adap.DSPLAY(104);
                }
            }
            Gvar.var_211 = Gvar.var_211 - 8;
            Gvar.var_208 = Gvar.var_208 + 8;
            if (Gvar.var_211 <= 0) {
                Gvar.var_211 = 0;
                Gvar.var_356 = 269;
                Gvar.var_199 = 2;
            }
            Gvar.var_1406 = 0;
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_108 = 0;
        }
        if (Gvar.var_2477 == 0 && Gvar.var_140 >= 2) {
            await Func.setMessage("磁力で 刃物が飛んできた！", "10 のダメージを喰らった。", 10, false, false, false);
            Gvar.var_108 = 1;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1405 = 1;
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1405 = Gvar.var_1405 + 1;
                if (Gvar.var_1405 == 6) {
                    Adap.DSPLAY(111);
                }
            }
            Gvar.var_211 = Gvar.var_211 - 10;
            Gvar.var_208 = Gvar.var_208 + 10;
            if (Gvar.var_211 <= 0) {
                Gvar.var_211 = 0;
                Gvar.var_356 = 270;
                Gvar.var_199 = 2;
            }
            Gvar.var_1405 = 0;
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_108 = 0;
        }
        if (Gvar.var_2477 == 4 && Gvar.var_140 >= 3) {
            await Func.setMessage("磁力で 自転車が飛んできた！", "15 のダメージを喰らった。", 10, false, false, false);
            Gvar.var_108 = 1;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1408 = 4;
            Gvar.var_1406 = 1;
            Gvar.var_1407 = Adap.rnd(3);
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                if (Gvar.var_1406 == 6) {
    
                    Adap.DSPLAY(105);
                }
                Gvar.var_1406 = Gvar.var_1406 + 1;
            }
            Gvar.var_211 = Gvar.var_211 - 15;
            Gvar.var_208 = Gvar.var_208 + 15;
            if (Gvar.var_211 <= 0) {
                Gvar.var_211 = 0;
                Gvar.var_356 = 271;
                Gvar.var_199 = 2;
            }
            Gvar.var_1406 = 0;
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_108 = 0;
        }
        if (Gvar.var_2477 == 5 && Gvar.var_140 >= 4) {
            await Func.setMessage("磁力で アブドゥルが飛んできた！", "20 のダメージを喰らった。", 10, false, false, false);
            Gvar.var_108 = 1;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1408 = 5;
            Gvar.var_1406 = 1;
            Gvar.var_1407 = Adap.rnd(3);
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1406 = Gvar.var_1406 + 1;
                if (Gvar.var_1406 == 6) {
                    Adap.DSPLAY(115);
                }
            }
            Gvar.var_211 = Gvar.var_211 - 20;
            Gvar.var_208 = Gvar.var_208 + 20;
            if (Gvar.var_211 <= 0) {
                Gvar.var_211 = 0;
                Gvar.var_356 = 272;
                Gvar.var_199 = 2;
            }
            Gvar.var_1406 = 0;
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_108 = 0;
        }
        if (Gvar.var_2477 == 6 && Gvar.var_140 >= 5) {
            Gvar.var_2478 = Math.floor(Gvar.var_211 / 2);
            Gvar.var_211 = Gvar.var_211 - Gvar.var_2478;
            Gvar.var_208 = Gvar.var_2478 + Gvar.var_208;
            await Func.setMessage("磁力で 車が飛んできた！", tf("{0}のダメージを喰らった。", Gvar.var_2478), 10, false, false, false);
            Gvar.var_108 = 1;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1409 = 1;
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1409 = Gvar.var_1409 + 1;
                if (Gvar.var_1409 == 6) {
                    Adap.DSPLAY(138);
                }
            }
            if (Gvar.var_211 <= 0) {
                Gvar.var_211 = 0;
                Gvar.var_356 = 273;
                Gvar.var_199 = 2;
            }
            Gvar.var_1409 = 0;
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_108 = 0;
        }
        if (Gvar.var_2477 == 7 && Gvar.var_140 >= 6) {
            await Func.setMessage("はさみうちだァ――――ッ！", "「骨折の１､２本じゃあすみませんな」", 10, false, false, false);
            Gvar.var_108 = 1;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1410 = 1;
            for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                if (Gvar.var_1410 == 6) {
                    Adap.DSPLAY(137);
                }
                Gvar.var_1410 = Gvar.var_1410 + 1;
            }
            if (Gvar.var_211 == 1) {
                Gvar.var_211 = 0;
                Gvar.var_356 = 277;
                Gvar.var_199 = 2;
            }
            if (Gvar.var_211 >= 2) {
                Gvar.var_208 = Gvar.var_211 - 1 + Gvar.var_208;
                Gvar.var_211 = 1;
            }
            Gvar.var_1410 = 0;
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_108 = 0;
        }
        return;
}

export {func542}
