/**
 * func0831 — func831 持ち込み不可ダンジョン侵入忠告メッセージ処理
 *
 * (org原典: newDTW_dungeon_main / DONE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func0831(this: any) {
    Adap.dbgprt(831);
    if (Gvar.var_249 >= 20) {
        Gvar.var_283 = "";
        Gvar.var_284 = "";
        Gvar.var_285 = "";
        Gvar.var_286 = "";
        Gvar.var_287 = "";
        Gvar.var_288 = "";
        Gvar.var_289 = 0;
        Gvar.var_283 = "持ち物がいっぱいで出せない。";
        Gvar.var_284 = "";
        Gvar.var_223 = 1;
        Gvar.var_290 = 0;
        await Func.func0050();
        await Func.func0358();
        await Func.func0054();
        Gvar.var_223 = 0;
        await Func.func0009(); return;
    }
    Gvar.var_257 = Gvar.var_1088[0];
    Gvar.var_555 = Gvar.var_1088[13];
    await Func.func0524();
    Gvar.var_3448 = Gvar.var_557;
    if (Gvar.var_257 >= 800 && Gvar.var_257 < 900) {
        Gvar.var_2023 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_249; ++cnt1) {
            if (Gvar.var_258[Gvar.var_2023][0] >= 800 && Gvar.var_258[Gvar.var_2023][0] < 900) {
                Gvar.var_2024 = Gvar.var_258[Gvar.var_2023][6];
                Gvar.var_1087[Gvar.var_2024] = 1;
            }
            Gvar.var_2023 = Gvar.var_2023 + 1;
        }
        Gvar.var_2023 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_367; ++cnt1) {
            if (Gvar.var_89[Gvar.var_2023][0] >= 800 && Gvar.var_89[Gvar.var_2023][0] < 900) {
                Gvar.var_2024 = Gvar.var_89[Gvar.var_2023][6];
                Gvar.var_1087[Gvar.var_2024] = 1;
            }
            Gvar.var_2023 = Gvar.var_2023 + 1;
        }
        Gvar.var_622 = 1;
        for (let cnt1 = 0; cnt1 < 80; ++cnt1) {
            if (Gvar.var_1087[Gvar.var_622] == 0) {
                Gvar.var_2028 = 0;
                for (let cnt2 = 0; cnt2 < 11; ++cnt2) {
                    Gvar.var_2029 = 0;
                    for (let cnt3 = 0; cnt3 < 30; ++cnt3) {
                        Gvar.var_554[Gvar.var_622][Gvar.var_2028][Gvar.var_2029] = 0;
                        Gvar.var_2029++;
                    }
                    Gvar.var_2028++;
                }
                Gvar.var_1087[Gvar.var_622] = 1;
                break;
            }
            Gvar.var_622 = Gvar.var_622 + 1;
        }
    }
    Gvar.var_249 = Gvar.var_249 + 1;
    Gvar.var_258[Gvar.var_249][0] = Gvar.var_1088[0];
    Gvar.var_258[Gvar.var_249][3] = Gvar.var_1088[3];
    Gvar.var_258[Gvar.var_249][4] = Gvar.var_1088[4];
    Gvar.var_258[Gvar.var_249][5] = Gvar.var_1088[5];
    Gvar.var_258[Gvar.var_249][6] = 0;
    if (Gvar.var_257 >= 800 && Gvar.var_257 < 900) {
        Gvar.var_258[Gvar.var_249][6] = Gvar.var_622;
    }
    Gvar.var_258[Gvar.var_249][7] = Gvar.var_1088[7];
    Gvar.var_258[Gvar.var_249][8] = Gvar.var_1088[8];
    Gvar.var_258[Gvar.var_249][11] = Gvar.var_1088[11];
    Gvar.var_258[Gvar.var_249][12] = Gvar.var_1088[12];
    Gvar.var_258[Gvar.var_249][13] = Gvar.var_1088[13];
    Gvar.var_258[Gvar.var_249][14] = Gvar.var_1088[14];
    Gvar.var_258[Gvar.var_249][15] = Gvar.var_1088[15];
    Gvar.var_258[Gvar.var_249][16] = Gvar.var_1088[16];
    Gvar.var_258[Gvar.var_249][17] = Gvar.var_1088[17];
    Gvar.var_258[Gvar.var_249][18] = Gvar.var_1088[18];
    Gvar.var_258[Gvar.var_249][19] = Gvar.var_1088[19];
    Gvar.var_258[Gvar.var_249][20] = Gvar.var_1088[20];
    Gvar.var_258[Gvar.var_249][21] = Gvar.var_1088[21];
    Gvar.var_258[Gvar.var_249][22] = Gvar.var_1088[22];
    Gvar.var_258[Gvar.var_249][23] = Gvar.var_1088[23];
    Gvar.var_258[Gvar.var_249][24] = Gvar.var_1088[24];
    Gvar.var_258[Gvar.var_249][25] = Gvar.var_1088[25];
    Gvar.var_258[Gvar.var_249][26] = Gvar.var_1088[26];
    Gvar.var_258[Gvar.var_249][27] = Gvar.var_1088[27];
    Gvar.var_258[Gvar.var_249][28] = Gvar.var_1088[28];
    Gvar.var_258[Gvar.var_249][29] = Gvar.var_1088[29];
    Gvar.var_1088[0] = 0;
    Gvar.var_283 = "";
    Gvar.var_284 = "";
    Gvar.var_285 = "";
    Gvar.var_286 = "";
    Gvar.var_287 = "";
    Gvar.var_288 = "";
    Gvar.var_289 = 0;
    Gvar.var_283 = "" + Gvar.var_3448 + "を出した。";
    Gvar.var_284 = "";
    Gvar.var_223 = 1;
    Gvar.var_290 = 0;
    await Func.func0050();
    await Func.func0358();
    await Func.func0054();
    Gvar.var_223 = 0;
    await Func.func0009(); return;
}

export { func0831 }
