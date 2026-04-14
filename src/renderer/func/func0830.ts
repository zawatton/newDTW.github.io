/**
 * func0830 — func830 ダンジョンへ侵入した時に必ず一番はじめに読み込まれる処理
 *
 * (org原典: newDTW_dungeon_main / DONE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func0830(this: any) {
    Adap.dbgprt(830);
    Gvar.var_257 = Gvar.var_258[Gvar.var_250][0];
    Gvar.var_555 = Gvar.var_258[Gvar.var_250][13];
    await Func.func0524();
    Gvar.var_3448 = Gvar.var_557;
    Gvar.var_968 = Gvar.var_966;
    Gvar.var_1088[0] = Gvar.var_258[Gvar.var_250][0];
    Gvar.var_1088[1] = 0;
    Gvar.var_1088[2] = 0;
    Gvar.var_1088[3] = Gvar.var_258[Gvar.var_250][3];
    Gvar.var_1088[4] = Gvar.var_258[Gvar.var_250][4];
    Gvar.var_1088[5] = Gvar.var_258[Gvar.var_250][5];
    Gvar.var_1088[6] = Gvar.var_258[Gvar.var_250][6];
    Gvar.var_1088[7] = Gvar.var_258[Gvar.var_250][7] + Gvar.var_258[Gvar.var_250][8];
    Gvar.var_1088[8] = 0;
    Gvar.var_1088[9] = Gvar.var_258[Gvar.var_250][9];
    Gvar.var_1088[10] = Gvar.var_258[Gvar.var_250][10];
    Gvar.var_1088[11] = Gvar.var_258[Gvar.var_250][11];
    Gvar.var_1088[12] = Gvar.var_258[Gvar.var_250][12];
    Gvar.var_1088[13] = Gvar.var_258[Gvar.var_250][13];
    Gvar.var_1088[14] = Gvar.var_258[Gvar.var_250][14];
    Gvar.var_1088[15] = Gvar.var_258[Gvar.var_250][15];
    Gvar.var_1088[16] = Gvar.var_258[Gvar.var_250][16];
    Gvar.var_1088[17] = Gvar.var_258[Gvar.var_250][17];
    Gvar.var_1088[18] = Gvar.var_258[Gvar.var_250][18];
    Gvar.var_1088[19] = Gvar.var_258[Gvar.var_250][19];
    Gvar.var_1088[20] = Gvar.var_258[Gvar.var_250][20];
    Gvar.var_1088[21] = Gvar.var_258[Gvar.var_250][21];
    Gvar.var_1088[22] = Gvar.var_258[Gvar.var_250][22];
    Gvar.var_1088[23] = Gvar.var_258[Gvar.var_250][23];
    Gvar.var_1088[24] = Gvar.var_258[Gvar.var_250][24];
    Gvar.var_1088[25] = Gvar.var_258[Gvar.var_250][25];
    Gvar.var_1088[26] = Gvar.var_258[Gvar.var_250][26];
    Gvar.var_1088[27] = Gvar.var_258[Gvar.var_250][27];
    Gvar.var_1088[28] = Gvar.var_258[Gvar.var_250][28];
    Gvar.var_1088[29] = Gvar.var_258[Gvar.var_250][29];
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
    await Func.func0461();
    await Func.func0464();
    Gvar.var_283 = "";
    Gvar.var_284 = "";
    Gvar.var_285 = "";
    Gvar.var_286 = "";
    Gvar.var_287 = "";
    Gvar.var_288 = "";
    Gvar.var_289 = 0;
    Gvar.var_283 = "" + Gvar.var_3448 + "を入れた。";
    Gvar.var_284 = "";
    Gvar.var_223 = 1;
    Gvar.var_290 = 0;
    await Func.func0050();
    await Func.func0358();
    Gvar.var_223 = 0;
    await Func.func0009(); return;
}

export { func0830 }
