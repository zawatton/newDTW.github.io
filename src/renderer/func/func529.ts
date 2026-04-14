/**
 * func529 — func529 不明
 *
 * (org原典: newDTW_func5)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func529(this: any) {
        Adap.dbgprt(529);
        Gvar.var_2379 = Gvar.var_66;
        Gvar.var_2380 = Gvar.var_67;
        Gvar.var_2381 = Gvar.var_66;
        Gvar.var_2382 = Gvar.var_67;
        Gvar.var_389 = 2;
        Gvar.var_2383 = 0;
        Gvar.var_2384 = 0;
        Adap.DSPLAY(177);
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            Gvar.var_2385 = Gvar.var_2381;
            Gvar.var_2386 = Gvar.var_2382;
            if (Gvar.var_199 == 6) {
                Gvar.var_2381 = Gvar.var_2381 - 1;
            }
            if (Gvar.var_199 == 4) {
                Gvar.var_2381 = Gvar.var_2381 + 1;
            }
            if (Gvar.var_199 == 2) {
                Gvar.var_2382 = Gvar.var_2382 - 1;
            }
            if (Gvar.var_199 == 8) {
                Gvar.var_2382 = Gvar.var_2382 + 1;
            }
            if (Gvar.var_199 == 9) {
                Gvar.var_2381 = Gvar.var_2381 - 1;
                Gvar.var_2382 = Gvar.var_2382 + 1;
            }
            if (Gvar.var_199 == 7) {
                Gvar.var_2381 = Gvar.var_2381 + 1;
                Gvar.var_2382 = Gvar.var_2382 + 1;
            }
            if (Gvar.var_199 == 3) {
                Gvar.var_2381 = Gvar.var_2381 - 1;
                Gvar.var_2382 = Gvar.var_2382 - 1;
            }
            if (Gvar.var_199 == 1) {
                Gvar.var_2381 = Gvar.var_2381 + 1;
                Gvar.var_2382 = Gvar.var_2382 - 1;
            }
            if (Gvar.var_71[Gvar.var_2381][Gvar.var_2382] == 0) {
                Gvar.var_2383 = 1;

                Adap.DSPLAY(105);
                break;
            }
            if (Gvar.var_82[Gvar.var_2381][Gvar.var_2382] != 0) {
                Gvar.var_2384 = 1;

                Adap.DSPLAY(105);
                break;
            }
            Gvar.var_66 = Gvar.var_2381;
            Gvar.var_67 = Gvar.var_2382;
            Gvar.var_236 = Gvar.var_2385;
            Gvar.var_237 = Gvar.var_2386;
            Gvar.var_65[Gvar.var_66][Gvar.var_67] = 1;
            Gvar.var_65[Gvar.var_236][Gvar.var_237] = 0;
            await Func.func016();
            if (Gvar.var_72[Gvar.var_236][Gvar.var_237] >= 1 && Gvar.var_72[Gvar.var_66][Gvar.var_67] == 0 && Gvar.var_85 == 0) {
                await Func.func722(); // アイテムを所持した状態で店から出た際の動作処理(泥棒状態認定)
            }
            await Func.func337(); // メッセージ表示処理(自動)
        }
        Gvar.var_374 = 1;
        Gvar.var_1580 = 1;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        await Func.AutoDraw(2);
        Gvar.var_1580 = 0;
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_374 = 0;
        if (Gvar.var_2384 == 1) {
            Gvar.var_66 = Gvar.var_2381;
            Gvar.var_67 = Gvar.var_2382;
            Gvar.var_2387 = Gvar.var_2381 - 1;
            if (Gvar.var_2387 < 0) {
                Gvar.var_2387 = 0;
            }
            Gvar.var_2388 = Gvar.var_2381 + 1;
            if (Gvar.var_2388 > Gvar.var_33) {
                Gvar.var_2388 = Gvar.var_33;
            }
            Gvar.var_2389 = Gvar.var_2382 + 1;
            if (Gvar.var_2389 > Gvar.var_34) {
                Gvar.var_2389 = Gvar.var_34;
            }
            Gvar.var_2390 = Gvar.var_2382 - 1;
            if (Gvar.var_2390 < 0) {
                Gvar.var_2390 = 0;
            }
            Gvar.var_236 = Gvar.var_66;
            Gvar.var_237 = Gvar.var_67;
            Gvar.var_2391 = 0;
            if (Gvar.var_2391 == 0 && Gvar.var_71[Gvar.var_2387][Gvar.var_2389] != 0 && Gvar.var_71[Gvar.var_2387][Gvar.var_2389] != 13 && Gvar.var_82[Gvar.var_2387][Gvar.var_2389] == 0) {
                Gvar.var_66 = Gvar.var_2387;
                Gvar.var_67 = Gvar.var_2389;
                Gvar.var_2391 = 1;
            }
            if (Gvar.var_2391 == 0 && Gvar.var_71[Gvar.var_2388][Gvar.var_2389] != 0 && Gvar.var_71[Gvar.var_2388][Gvar.var_2389] != 13 && Gvar.var_82[Gvar.var_2388][Gvar.var_2389] == 0) {
                Gvar.var_66 = Gvar.var_2388;
                Gvar.var_67 = Gvar.var_2389;
                Gvar.var_2391 = 1;
            }
            if (Gvar.var_2391 == 0 && Gvar.var_71[Gvar.var_2387][Gvar.var_2390] != 0 && Gvar.var_71[Gvar.var_2387][Gvar.var_2390] != 13 && Gvar.var_82[Gvar.var_2387][Gvar.var_2390] == 0) {
                Gvar.var_66 = Gvar.var_2387;
                Gvar.var_67 = Gvar.var_2390;
                Gvar.var_2391 = 1;
            }
            if (Gvar.var_2391 == 0 && Gvar.var_71[Gvar.var_2388][Gvar.var_2390] != 0 && Gvar.var_71[Gvar.var_2388][Gvar.var_2390] != 13 && Gvar.var_82[Gvar.var_2388][Gvar.var_2390] == 0) {
                Gvar.var_66 = Gvar.var_2388;
                Gvar.var_67 = Gvar.var_2390;
                Gvar.var_2391 = 1;
            }
            if (Gvar.var_2391 == 0 && Gvar.var_71[Gvar.var_2387][Gvar.var_67] != 0 && Gvar.var_71[Gvar.var_2387][Gvar.var_67] != 13 && Gvar.var_82[Gvar.var_2387][Gvar.var_67] == 0) {
                Gvar.var_66 = Gvar.var_2387;
                Gvar.var_2391 = 1;
            }
            if (Gvar.var_2391 == 0 && Gvar.var_71[Gvar.var_2388][Gvar.var_67] != 0 && Gvar.var_71[Gvar.var_2388][Gvar.var_67] != 13 && Gvar.var_82[Gvar.var_2388][Gvar.var_67] == 0) {
                Gvar.var_66 = Gvar.var_2388;
                Gvar.var_2391 = 1;
            }
            if (Gvar.var_2391 == 0 && Gvar.var_71[Gvar.var_66][Gvar.var_2389] != 0 && Gvar.var_71[Gvar.var_66][Gvar.var_2389] != 13 && Gvar.var_82[Gvar.var_66][Gvar.var_2389] == 0) {
                Gvar.var_67 = Gvar.var_2389;
                Gvar.var_2391 = 1;
            }
            if (Gvar.var_2391 == 0 && Gvar.var_71[Gvar.var_66][Gvar.var_2390] != 0 && Gvar.var_71[Gvar.var_66][Gvar.var_2390] != 13 && Gvar.var_82[Gvar.var_66][Gvar.var_2390] == 0) {
                Gvar.var_67 = Gvar.var_2390;
                Gvar.var_2391 = 1;
            }
            Gvar.var_236 = Gvar.var_2385;
            Gvar.var_237 = Gvar.var_2386;
            Gvar.var_65[Gvar.var_66][Gvar.var_67] = 1;
            Gvar.var_65[Gvar.var_236][Gvar.var_237] = 0;
            await Func.func016();
            Gvar.var_402 = Gvar.var_82[Gvar.var_2381][Gvar.var_2382];
            if (Gvar.var_199 == 2) {
                Gvar.var_83[Gvar.var_402].Var5 = 2;
            }
            if (Gvar.var_199 == 4) {
                Gvar.var_83[Gvar.var_402].Var5 = 4;
            }
            if (Gvar.var_199 == 8) {
                Gvar.var_83[Gvar.var_402].Var5 = 8;
            }
            if (Gvar.var_199 == 6) {
                Gvar.var_83[Gvar.var_402].Var5 = 6;
            }
            if (Gvar.var_199 == 1) {
                Gvar.var_83[Gvar.var_402].Var5 = 1;
            }
            if (Gvar.var_199 == 3) {
                Gvar.var_83[Gvar.var_402].Var5 = 3;
            }
            if (Gvar.var_199 == 7) {
                Gvar.var_83[Gvar.var_402].Var5 = 7;
            }
            if (Gvar.var_199 == 9) {
                Gvar.var_83[Gvar.var_402].Var5 = 9;
            }
            Gvar.var_403 = "ﾃﾞｨｱﾎﾞﾛは5のダメージ！";
            Gvar.var_209 = 5;
            await Func.func705();
            Gvar.var_211 = Gvar.var_211 - 5;
            Gvar.var_208 = Gvar.var_208 + 5;
            if (Gvar.var_211 <= 0) {
                Gvar.var_211 = 0;
                Gvar.var_356 = 237;
                Gvar.var_199 = 2;
            }
        }
        if (Gvar.var_2383 == 1) {
            await Func.setMessage("ﾃﾞｨｱﾎﾞﾛは5のダメージ！", "", 8, false, false, false);
            Gvar.var_211 = Gvar.var_211 - 5;
            Gvar.var_208 = Gvar.var_208 + 5;
            if (Gvar.var_211 <= 0) {
                Gvar.var_211 = 0;
                Gvar.var_356 = 237;
                Gvar.var_199 = 2;
            }
        }
        Gvar.var_2384 = 0;
        Gvar.var_389 = 0;
        if (Gvar.var_2379 != Gvar.var_66 || Gvar.var_2380 != Gvar.var_67) {
            Gvar.var_114 = 0;
            Gvar.var_463 = 0;
            Gvar.var_464 = 0;
            Gvar.var_461 = 0;
            Gvar.var_462 = 0;
        }
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        await Func.AutoDraw(5);
        if (Gvar.var_2379 != Gvar.var_66 || Gvar.var_2380 != Gvar.var_67) {
            Gvar.var_2392 = 1;
            for (let cnt2 = 0; cnt2 < Gvar.var_97; ++cnt2) {
                Gvar.var_83[Gvar.var_2392].Var9 = 0;
                Gvar.var_83[Gvar.var_2392].Var18 = 0;
                Gvar.var_2392 = Gvar.var_2392 + 1;
            }
        }
        return;
}

export {func529}
