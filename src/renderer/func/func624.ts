/**
 * func624 — func624 不明
 *
 * (org原典: newDTW_func6)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func624(this: any) {
        Adap.dbgprt(624);
        Gvar.var_2905 = Gvar.var_347;
        Gvar.var_2906 = Gvar.var_348;
        Gvar.var_2907 = Gvar.var_347 - 1;
        if (Gvar.var_2907 < 0) {
            Gvar.var_2907 = 0;
        }
        Gvar.var_2908 = Gvar.var_347 + 1;
        if (Gvar.var_2908 > Gvar.var_33) {
            Gvar.var_2908 = Gvar.var_33;
        }
        Gvar.var_2909 = Gvar.var_348 + 1;
        if (Gvar.var_2909 > Gvar.var_33) {
            Gvar.var_2909 = Gvar.var_33;
        }
        Gvar.var_2910 = Gvar.var_348 - 1;
        if (Gvar.var_2910 < 0) {
            Gvar.var_2910 = 0;
        }
        Gvar.var_2911 = 0;
        if (Gvar.var_2911 == 0 && Gvar.var_71[Gvar.var_2907][Gvar.var_2906] != 0 && Gvar.var_71[Gvar.var_2907][Gvar.var_2906] != 13 && Gvar.var_65[Gvar.var_2907][Gvar.var_2906] == 0 && Gvar.var_82[Gvar.var_2907][Gvar.var_2906] == 0) {
            Gvar.var_2911 = 1;
            Gvar.var_2912 = Gvar.var_2907;
            Gvar.var_2913 = Gvar.var_2906;
            Gvar.var_2914 = Gvar.var_71[Gvar.var_2907][Gvar.var_2906];
            Gvar.var_1365 = 4;
        }
        if (Gvar.var_2911 == 0 && Gvar.var_71[Gvar.var_2908][Gvar.var_2906] != 0 && Gvar.var_71[Gvar.var_2908][Gvar.var_2906] != 13 && Gvar.var_65[Gvar.var_2908][Gvar.var_2906] == 0 && Gvar.var_82[Gvar.var_2908][Gvar.var_2906] == 0) {
            Gvar.var_2911 = 1;
            Gvar.var_2912 = Gvar.var_2908;
            Gvar.var_2913 = Gvar.var_2906;
            Gvar.var_2914 = Gvar.var_71[Gvar.var_2908][Gvar.var_2906];
            Gvar.var_1365 = 6;
        }
        if (Gvar.var_2911 == 0 && Gvar.var_71[Gvar.var_2905][Gvar.var_2909] != 0 && Gvar.var_71[Gvar.var_2905][Gvar.var_2909] != 13 && Gvar.var_65[Gvar.var_2905][Gvar.var_2909] == 0 && Gvar.var_82[Gvar.var_2905][Gvar.var_2909] == 0) {
            Gvar.var_2911 = 1;
            Gvar.var_2912 = Gvar.var_2905;
            Gvar.var_2913 = Gvar.var_2909;
            Gvar.var_2914 = Gvar.var_71[Gvar.var_2905][Gvar.var_2909];
            Gvar.var_1365 = 2;
        }
        if (Gvar.var_2911 == 0 && Gvar.var_71[Gvar.var_2905][Gvar.var_2910] != 0 && Gvar.var_71[Gvar.var_2905][Gvar.var_2910] != 13 && Gvar.var_65[Gvar.var_2905][Gvar.var_2910] == 0 && Gvar.var_82[Gvar.var_2905][Gvar.var_2910] == 0) {
            Gvar.var_2911 = 1;
            Gvar.var_2912 = Gvar.var_2905;
            Gvar.var_2913 = Gvar.var_2910;
            Gvar.var_2914 = Gvar.var_71[Gvar.var_2905][Gvar.var_2910];
            Gvar.var_1365 = 8;
        }
        if (Gvar.var_2911 == 0 && Gvar.var_71[Gvar.var_2907][Gvar.var_2909] != 0 && Gvar.var_71[Gvar.var_2907][Gvar.var_2909] != 13 && Gvar.var_65[Gvar.var_2907][Gvar.var_2909] == 0 && Gvar.var_82[Gvar.var_2907][Gvar.var_2909] == 0) {
            Gvar.var_2911 = 1;
            Gvar.var_2912 = Gvar.var_2907;
            Gvar.var_2913 = Gvar.var_2909;
            Gvar.var_2914 = Gvar.var_71[Gvar.var_2907][Gvar.var_2909];
            Gvar.var_1365 = 1;
        }
        if (Gvar.var_2911 == 0 && Gvar.var_71[Gvar.var_2908][Gvar.var_2909] != 0 && Gvar.var_71[Gvar.var_2908][Gvar.var_2909] != 13 && Gvar.var_65[Gvar.var_2908][Gvar.var_2909] == 0 && Gvar.var_82[Gvar.var_2908][Gvar.var_2909] == 0) {
            Gvar.var_2911 = 1;
            Gvar.var_2912 = Gvar.var_2908;
            Gvar.var_2913 = Gvar.var_2909;
            Gvar.var_2914 = Gvar.var_71[Gvar.var_2908][Gvar.var_2909];
            Gvar.var_1365 = 3;
        }
        if (Gvar.var_2911 == 0 && Gvar.var_71[Gvar.var_2907][Gvar.var_2910] != 0 && Gvar.var_71[Gvar.var_2907][Gvar.var_2910] != 13 && Gvar.var_65[Gvar.var_2907][Gvar.var_2910] == 0 && Gvar.var_82[Gvar.var_2907][Gvar.var_2910] == 0) {
            Gvar.var_2911 = 1;
            Gvar.var_2912 = Gvar.var_2907;
            Gvar.var_2913 = Gvar.var_2910;
            Gvar.var_2914 = Gvar.var_71[Gvar.var_2907][Gvar.var_2910];
            Gvar.var_1365 = 7;
        }
        if (Gvar.var_2911 == 0 && Gvar.var_71[Gvar.var_2908][Gvar.var_2910] != 0 && Gvar.var_71[Gvar.var_2908][Gvar.var_2910] != 13 && Gvar.var_65[Gvar.var_2908][Gvar.var_2910] == 0 && Gvar.var_82[Gvar.var_2908][Gvar.var_2910] == 0) {
            Gvar.var_2911 = 1;
            Gvar.var_2912 = Gvar.var_2908;
            Gvar.var_2913 = Gvar.var_2910;
            Gvar.var_2914 = Gvar.var_71[Gvar.var_2908][Gvar.var_2910];
            Gvar.var_1365 = 9;
        }
        if (Gvar.var_2911 == 1) {
            Gvar.var_1366 = 0;
            Gvar.var_1368 = 0;
            Gvar.var_1367 = 2;
            Gvar.var_1369 = Gvar.var_2905 - Gvar.var_66 + 4;
            Gvar.var_1370 = Gvar.var_2906 - Gvar.var_67 + 4;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1373 = 1;
            Gvar.var_1371 = 1;
    
            Adap.DSPLAY(156);
            for (let cnt2 = 0; cnt2 < 8; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
            }
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_1373 = 0;
            Gvar.var_440 = Gvar.var_2912;
            Gvar.var_441 = Gvar.var_2913;
            Gvar.var_2499 = Gvar.var_2914;
            await Func.func556();
            Gvar.var_1371 = 0;
            Gvar.var_1374 = 0;
            for (let cnt2 = 0; cnt2 < 15; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
            }
        }
        Gvar.var_1371 = 0;
        Gvar.var_1374 = 0;
        return;
}

export {func624}
