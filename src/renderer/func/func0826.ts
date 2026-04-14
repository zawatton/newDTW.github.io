/**
 * func0826 — func826 レクイエムの大迷宮の入り口へ入ろうとした際のメッセージ処理
 *
 * ヴェネチアホテルや亀、酒場の設定
 *
 * (org原典: newDTW_dungeon0 / DONE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func0826(this: any) {
    Adap.dbgprt(826);
    Gvar.var_2228 = 0;
    Gvar.var_2665 = 0;
    Gvar.var_2666 = 0;
    if (Gvar.var_641 == 0 && Gvar.var_966 >= 19) {
        Gvar.var_2666 = 1;
    }
    if (Gvar.var_641 == 1 && Gvar.var_966 >= 26) {
        Gvar.var_2666 = 1;
    }
    if (Gvar.var_641 == 2 && Gvar.var_966 >= 33) {
        Gvar.var_2666 = 1;
    }
    if (Gvar.var_641 == 3 && Gvar.var_966 >= 39) {
        Gvar.var_2666 = 1;
    }
    if (Gvar.var_641 == 4 && Gvar.var_966 >= 45) {
        Gvar.var_2666 = 1;
    }
    if (Gvar.var_2666 == 1) {
        Gvar.var_283 = "";
        Gvar.var_284 = "";
        Gvar.var_285 = "";
        Gvar.var_286 = "";
        Gvar.var_287 = "";
        Gvar.var_288 = "";
        Gvar.var_289 = 0;
        Gvar.var_283 = "倉庫にはもう置ける場所がないようだ";
        Gvar.var_284 = "";
        Gvar.var_223 = 1;
        Gvar.var_290 = 0;
        await Func.func0050();
        await Func.func0358();
        Gvar.var_223 = 0;
        Gvar.var_290 = 0;
        await Func.func0009(); return;
    }
    Gvar.var_516 = 21;
    for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
        Gvar.var_514 = 10;
        for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
            // @ts-ignore HSP 2D array access
            if (Gvar.var_965[Gvar.var_514][Gvar.var_516] == 0) {
                Gvar.var_2667 = 0;
                if (Gvar.var_641 <= 3) {
                    if (Gvar.var_514 == 10 && Gvar.var_516 == 21) {
                        Gvar.var_2667 = 1;
                    }
                    if (Gvar.var_514 == 10 && Gvar.var_516 == 22) {
                        Gvar.var_2667 = 1;
                    }
                    if (Gvar.var_514 == 10 && Gvar.var_516 == 23) {
                        Gvar.var_2667 = 1;
                    }
                    if (Gvar.var_514 == 10 && Gvar.var_516 == 24) {
                        Gvar.var_2667 = 1;
                    }
                    if (Gvar.var_514 == 10 && Gvar.var_516 == 25) {
                        Gvar.var_2667 = 1;
                    }
                    if (Gvar.var_514 == 10 && Gvar.var_516 == 26) {
                        Gvar.var_2667 = 1;
                    }
                }
                if (Gvar.var_641 <= 2) {
                    if (Gvar.var_514 == 11 && Gvar.var_516 == 21) {
                        Gvar.var_2667 = 1;
                    }
                    if (Gvar.var_514 == 11 && Gvar.var_516 == 22) {
                        Gvar.var_2667 = 1;
                    }
                    if (Gvar.var_514 == 11 && Gvar.var_516 == 23) {
                        Gvar.var_2667 = 1;
                    }
                    if (Gvar.var_514 == 11 && Gvar.var_516 == 24) {
                        Gvar.var_2667 = 1;
                    }
                    if (Gvar.var_514 == 11 && Gvar.var_516 == 25) {
                        Gvar.var_2667 = 1;
                    }
                    if (Gvar.var_514 == 11 && Gvar.var_516 == 26) {
                        Gvar.var_2667 = 1;
                    }
                }
                if (Gvar.var_514 == 12 && Gvar.var_516 == 21) {
                    Gvar.var_2667 = 1;
                }
                if (Gvar.var_514 == 13 && Gvar.var_516 == 21) {
                    Gvar.var_2667 = 1;
                }
                if (Gvar.var_514 == 14 && Gvar.var_516 == 21) {
                    Gvar.var_2667 = 1;
                }
                if (Gvar.var_514 == 15 && Gvar.var_516 == 21) {
                    Gvar.var_2667 = 1;
                }
                if (Gvar.var_514 == 12 && Gvar.var_516 == 22) {
                    Gvar.var_2667 = 1;
                }
                if (Gvar.var_514 == 13 && Gvar.var_516 == 22) {
                    Gvar.var_2667 = 1;
                }
                if (Gvar.var_514 == 14 && Gvar.var_516 == 22) {
                    Gvar.var_2667 = 1;
                }
                if (Gvar.var_514 == 15 && Gvar.var_516 == 22) {
                    Gvar.var_2667 = 1;
                }
                if (Gvar.var_514 == 13 && Gvar.var_516 == 23) {
                    Gvar.var_2667 = 1;
                }
                if (Gvar.var_2667 == 0) {
                    Gvar.var_1612 = Gvar.var_258[Gvar.var_250][0];
                    Gvar.var_1385 = Gvar.var_258[Gvar.var_250][13];
                    Gvar.var_966 = Gvar.var_966 + 1;
                    // @ts-ignore HSP 2D array access
                    Gvar.var_965[Gvar.var_514][Gvar.var_516] = Gvar.var_966;
                    Gvar.var_968 = Gvar.var_966;
                    Gvar.var_957[Gvar.var_968][0] = Gvar.var_258[Gvar.var_250][0];
                    Gvar.var_957[Gvar.var_968][1] = Gvar.var_514;
                    Gvar.var_957[Gvar.var_968][2] = Gvar.var_516;
                    Gvar.var_957[Gvar.var_968][3] = Gvar.var_258[Gvar.var_250][3];
                    Gvar.var_957[Gvar.var_968][4] = Gvar.var_258[Gvar.var_250][4];
                    Gvar.var_957[Gvar.var_968][5] = Gvar.var_258[Gvar.var_250][5];
                    Gvar.var_957[Gvar.var_968][6] = Gvar.var_258[Gvar.var_250][6];
                    Gvar.var_957[Gvar.var_968][7] = Gvar.var_258[Gvar.var_250][7];
                    Gvar.var_957[Gvar.var_968][8] = Gvar.var_258[Gvar.var_250][8];
                    Gvar.var_957[Gvar.var_968][9] = Gvar.var_258[Gvar.var_250][9];
                    Gvar.var_957[Gvar.var_968][10] = Gvar.var_258[Gvar.var_250][10];
                    Gvar.var_957[Gvar.var_968][11] = 0;
                    Gvar.var_957[Gvar.var_968][12] = Gvar.var_258[Gvar.var_250][12];
                    Gvar.var_957[Gvar.var_968][13] = Gvar.var_258[Gvar.var_250][13];
                    Gvar.var_957[Gvar.var_968][14] = Gvar.var_258[Gvar.var_250][14];
                    Gvar.var_957[Gvar.var_968][15] = Gvar.var_258[Gvar.var_250][15];
                    Gvar.var_957[Gvar.var_968][16] = Gvar.var_258[Gvar.var_250][16];
                    Gvar.var_957[Gvar.var_968][17] = Gvar.var_258[Gvar.var_250][17];
                    Gvar.var_957[Gvar.var_968][18] = Gvar.var_258[Gvar.var_250][18];
                    Gvar.var_957[Gvar.var_968][19] = Gvar.var_258[Gvar.var_250][19];
                    Gvar.var_957[Gvar.var_968][20] = Gvar.var_258[Gvar.var_250][20];
                    Gvar.var_957[Gvar.var_968][21] = Gvar.var_258[Gvar.var_250][21];
                    Gvar.var_957[Gvar.var_968][22] = Gvar.var_258[Gvar.var_250][22];
                    Gvar.var_957[Gvar.var_968][23] = Gvar.var_258[Gvar.var_250][23];
                    Gvar.var_957[Gvar.var_968][24] = Gvar.var_258[Gvar.var_250][24];
                    Gvar.var_957[Gvar.var_968][25] = Gvar.var_258[Gvar.var_250][25];
                    Gvar.var_957[Gvar.var_968][26] = Gvar.var_258[Gvar.var_250][26];
                    Gvar.var_957[Gvar.var_968][27] = Gvar.var_258[Gvar.var_250][27];
                    Gvar.var_957[Gvar.var_968][28] = Gvar.var_258[Gvar.var_250][28];
                    Gvar.var_957[Gvar.var_968][29] = Gvar.var_258[Gvar.var_250][29];
                    if (Gvar.var_258[Gvar.var_250][11] == 1) {
                        Gvar.var_122 = 1;
                        Gvar.var_257 = Gvar.var_258[Gvar.var_250][0];
                        await Func.func0524();
                        Gvar.var_550 = 0;
                        Gvar.var_550 = (Gvar.var_258[Gvar.var_250][3] + Gvar.var_258[Gvar.var_250][4]) * 50;
                        if (Gvar.var_258[Gvar.var_250][0] != 800) {
                            Gvar.var_550 = Gvar.var_258[Gvar.var_250][7] * 100 + Gvar.var_550;
                        }
                        if (Gvar.var_258[Gvar.var_250][19] > 1) {
                            Gvar.var_550 = Gvar.var_258[Gvar.var_250][19] * 500 + Gvar.var_550;
                        }
                        Gvar.var_551 = Gvar.var_551 + Gvar.var_550;
                        Gvar.var_123 = Gvar.var_123 + Gvar.var_551;
                    }
                    Gvar.var_1159 = 0;
                    if (Gvar.var_428 == Gvar.var_250) {
                        Gvar.var_429 = Adap.dim(40);
                        Gvar.var_430 = Gvar.var_430 - Gvar.var_431;
                        Gvar.var_431 = 0;
                        Gvar.var_389 = 0;
                        await Func.func0526();
                        Gvar.var_1159 = 1;
                    }
                    if (Gvar.var_432 == Gvar.var_250) {
                        Gvar.var_433 = Adap.dim(40);
                        Gvar.var_434 = Gvar.var_434 - Gvar.var_435;
                        Gvar.var_435 = 0;
                        Gvar.var_390 = 0;
                        await Func.func0526();
                        Gvar.var_1159 = 1;
                    }
                    if (Gvar.var_474 == Gvar.var_250) {
                        Gvar.var_546 = Adap.dim(40);
                        Gvar.var_240 = 0;
                        await Func.func0526();
                        Gvar.var_1159 = 1;
                    }
                    if (Gvar.var_638 == Gvar.var_250) {
                        Gvar.var_547 = Adap.dim(40);
                        Gvar.var_470 = 0;
                        Gvar.var_278 = 0;
                        Gvar.var_1159 = 1;
                    }
                    if (Gvar.var_1159 == 1) {
                        Gvar.var_257 = Gvar.var_258[Gvar.var_250][0];
                        await Func.func0112();
                    }
                    Gvar.var_2665 = 1;
                    await Func.func0461();
                    await Func.func0464();
                    break;
                }
            }
            Gvar.var_514 = Gvar.var_514 + 1;
        }
        if (Gvar.var_2665 == 1) {
            break;
        }
        Gvar.var_516 = Gvar.var_516 + 1;
    }
    Gvar.var_283 = "";
    Gvar.var_284 = "";
    Gvar.var_285 = "";
    Gvar.var_286 = "";
    Gvar.var_287 = "";
    Gvar.var_288 = "";
    Gvar.var_289 = 0;
    if (Gvar.var_2665 == 1) {
        Gvar.var_283 = "サヴェジガーデンはアイテムを持って";
        Gvar.var_284 = "飛び去っていった。";
    }
    if (Gvar.var_2665 == 0) {
        Gvar.var_283 = "倉庫にはもう置ける場所がないようだ";
        Gvar.var_284 = "";
    }
    Gvar.var_223 = 1;
    Gvar.var_290 = 0;
    await Func.func0050();
    await Func.func0358();
    Gvar.var_223 = 0;
    Gvar.var_290 = 0;
    if (Gvar.var_2665 == 1) {
        Gvar.var_1610 = Gvar.var_308[Gvar.var_3443][1];
        Gvar.var_1611 = Gvar.var_308[Gvar.var_3443][2];
        Gvar.var_308[Gvar.var_3443][11] = 1;
        Gvar.var_310 = 1;
        Gvar.var_1609 = 1;
        for (let cnt1 = 0; cnt1 < 12; ++cnt1) {
            await Func.func0354();
            Gvar.var_1609++;
        }
        Gvar.var_310 = 0;
        Gvar.var_1609 = 0;
        Gvar.var_93[Gvar.var_1610][Gvar.var_1611] = 0;
        Gvar.var_308[Gvar.var_3443][0] = 0;
        Gvar.var_308[Gvar.var_3443][1] = 0;
        Gvar.var_308[Gvar.var_3443][2] = 0;
        await Func.func0348();
    }
    Gvar.var_242 = 1;
    await Func.func0019(); return;
}

export { func0826 }
