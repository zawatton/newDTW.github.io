import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// DISC使用時のイベント処理 (label_0543)
async function func543(this: any) {
        Adap.dbgprt(543);
        Gvar.var_2493 = 0;
        if (Gvar.var_245 == 0 && Gvar.var_259 == 0) {
            Gvar.var_2494 = Gvar.var_258[Gvar.var_250][0];
            if (Gvar.var_621[Gvar.var_2494][0] == 1 && Gvar.var_258[Gvar.var_250][12] == 1 && Gvar.var_258[Gvar.var_250][14] == 1) {
                Gvar.var_2493 = 1;
            }
        }
        if (Gvar.var_245 == 1) {
            Gvar.var_2492 = Gvar.var_2099;
            Gvar.var_2494 = Gvar.var_554[Gvar.var_764][Gvar.var_250][0];
            if (Gvar.var_621[Gvar.var_2494][0] == 1 && Gvar.var_554[Gvar.var_764][Gvar.var_250][12] == 1 && Gvar.var_554[Gvar.var_764][Gvar.var_250][14] == 1) {
                Gvar.var_2493 = 1;
            }
        }
        if (Gvar.var_259 == 1) {
            Gvar.var_2494 = Gvar.var_89[Gvar.var_352][0];
            if (Gvar.var_621[Gvar.var_2494][0] == 1 && Gvar.var_89[Gvar.var_352][12] == 1 && Gvar.var_89[Gvar.var_352][14] == 1) {
                Gvar.var_2493 = 1;
            }
        }
        if (Gvar.var_300 == 1) {
            await Func.func541(); // goto *label_0541
            return;
        }
        if (Gvar.var_2493 == 1) {
            await Func.func542(); // goto *label_0542
            return;
        }
        // 未識別DISCの場合
        if (Gvar.var_621[Gvar.var_2494][0] == 0 && Gvar.var_2494 >= 100 && Gvar.var_2494 < 400) {
            Gvar.var_257 = Gvar.var_2494;
            await Func.func524();
            Gvar.var_2495 = Gvar.var_557;
            Gvar.var_621[Gvar.var_2494][0] = 1;
            await Func.func524();
            Gvar.var_2496 = Gvar.var_557;
            await Func.setMessage("なんと" + Gvar.var_2495 + "は", "" + Gvar.var_2496 + "だった！", 10, false, false, false);
            for (let cnt = 0; cnt < 20; ++cnt) {
                await Func.func337();
            }
        }
        // === DISC No.100: 射撃攻撃防御 ===
        if (Gvar.var_2494 == 100) {
            await Func.func538();
            Gvar.var_172 = 1;
            await Func.setMessage("射撃攻撃を防げるようになった！", "", 10, false, false, false);
            Adap.DSPLAY(182);
            Gvar.var_1444 = 8;
            Gvar.var_310 = 1;
            Gvar.var_1442 = 1;
            for (let cnt = 0; cnt < 20; ++cnt) {
                await Func.func337();
                Gvar.var_1442++;
            }
            Gvar.var_310 = 0;
            Gvar.var_1442 = 0;
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.103: ACT3 FREEZE ===
        if (Gvar.var_2494 == 103) {
            await Func.func538();
            if (Gvar.var_652 == 0) { Gvar.var_475 = 11; }
            if (Gvar.var_652 == 1) { Gvar.var_475 = 1; }
            if (Gvar.var_652 == 2) { Gvar.var_475 = 16; }
            if (Gvar.var_652 == 3) { Gvar.var_475 = 29; }
            if (Gvar.var_652 == 4) { Gvar.var_475 = 40; }
            Gvar.var_476 = 1;
            await Func.setMessage("ACT ３ FREEZE　！！", "", 10, false, false, false);
            Gvar.var_477 = Gvar.var_389;
            Gvar.var_389 = 103;
            Gvar.var_271 = 1;
            Gvar.var_378 = Gvar.var_74;
            Gvar.var_379 = Gvar.var_75;
            if (Gvar.var_224 == 4) { Gvar.var_378 = Gvar.var_378 - 1; }
            if (Gvar.var_224 == 6) { Gvar.var_378 = Gvar.var_378 + 1; }
            if (Gvar.var_224 == 8) { Gvar.var_379 = Gvar.var_379 - 1; }
            if (Gvar.var_224 == 2) { Gvar.var_379 = Gvar.var_379 + 1; }
            if (Gvar.var_224 == 1) { Gvar.var_378 = Gvar.var_378 - 1; Gvar.var_379 = Gvar.var_379 + 1; }
            if (Gvar.var_224 == 3) { Gvar.var_378 = Gvar.var_378 + 1; Gvar.var_379 = Gvar.var_379 + 1; }
            if (Gvar.var_224 == 7) { Gvar.var_378 = Gvar.var_378 - 1; Gvar.var_379 = Gvar.var_379 - 1; }
            if (Gvar.var_224 == 9) { Gvar.var_378 = Gvar.var_378 + 1; Gvar.var_379 = Gvar.var_379 - 1; }
            Adap.DSPLAY(122);
            for (let cnt = 0; cnt < 2; ++cnt) {
                await Func.func337();
            }
            if (Gvar.var_93[Gvar.var_378][Gvar.var_379] != 0) {
                Gvar.var_1638 = Gvar.var_93[Gvar.var_378][Gvar.var_379];
                if (Gvar.var_83[Gvar.var_1638].Var0 != 50) {
                    if (Gvar.var_83[Gvar.var_1638].Var12 == 99) {
                        Gvar.var_83[Gvar.var_1638].Var12 = 0;
                    }
                    Gvar.var_83[Gvar.var_1638].Var13 = 0;
                    if (Gvar.var_83[Gvar.var_1638].Var15 == 0) {
                        Gvar.var_83[Gvar.var_1638].Var14 = 1;
                        Adap.DSPLAY(162);
                    }
                    if (Gvar.var_83[Gvar.var_1638].Var15 != 0) {
                        Gvar.var_83[Gvar.var_1638].Var14 = 0;
                        Gvar.var_83[Gvar.var_1638].Var15 = 0;
                    }
                    Gvar.var_846 = 1;
                }
            }
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
            }
            Gvar.var_476 = 0;
            Gvar.var_389 = Gvar.var_477;
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.114: 「一手」遅カッタ…ナ…！ ===
        if (Gvar.var_2494 == 114) {
            await Func.func538();
            if (Gvar.var_652 == 0) { Gvar.var_475 = 11; }
            if (Gvar.var_652 == 1) { Gvar.var_475 = 1; }
            if (Gvar.var_652 == 2) { Gvar.var_475 = 16; }
            if (Gvar.var_652 == 3) { Gvar.var_475 = 29; }
            if (Gvar.var_652 == 4) { Gvar.var_475 = 40; }
            Gvar.var_476 = 1;
            await Func.func099();
            await Func.setMessage("「一手」 遅カッタ…ナ…！", "", 10, false, false, false);
            Gvar.var_477 = Gvar.var_389;
            Gvar.var_389 = 114;
            Gvar.var_271 = 1;
            Gvar.var_378 = Gvar.var_74;
            Gvar.var_379 = Gvar.var_75;
            if ( Gvar.var_224 == 4 ) {
                Gvar.var_378 = Gvar.var_378 - 1;
            }
            if ( Gvar.var_224 == 6 ) {
                Gvar.var_378 = Gvar.var_378 + 1;
            }
            if ( Gvar.var_224 == 8 ) {
                Gvar.var_379 = Gvar.var_379 - 1;
            }
            if ( Gvar.var_224 == 2 ) {
                Gvar.var_379 = Gvar.var_379 + 1;
            }
            if ( Gvar.var_224 == 1 ) {
                Gvar.var_378 = Gvar.var_378 - 1;
                Gvar.var_379 = Gvar.var_379 + 1;
            }
            if ( Gvar.var_224 == 3 ) {
                Gvar.var_378 = Gvar.var_378 + 1;
                Gvar.var_379 = Gvar.var_379 + 1;
            }
            if ( Gvar.var_224 == 7 ) {
                Gvar.var_378 = Gvar.var_378 - 1;
                Gvar.var_379 = Gvar.var_379 - 1;
            }
            if ( Gvar.var_224 == 9 ) {
                Gvar.var_378 = Gvar.var_378 + 1;
                Gvar.var_379 = Gvar.var_379 - 1;
            }
            if ( Gvar.var_93[Gvar.var_378][Gvar.var_379] != 0 ) {
                Gvar.var_1638 = Gvar.var_93[Gvar.var_378][Gvar.var_379];
                Gvar.var_268 = Gvar.var_83[Gvar.var_1638].Var0;
                await Func.func658();
                if ( Gvar.var_2497 == 0  &&  Gvar.var_83[Gvar.var_1638].Var0 != 50 ) {
                    Gvar.var_846 = 1;
                    Gvar.var_83[Gvar.var_1638].Var12 = 99;
                }
            }
            for (let cnt = 0; cnt < 30; ++cnt) {
                await Func.func337();
            }
            Adap.gsel(19);
            Adap.color(255, 255, 255);
            Adap.boxf(0, 0, 340, 340);
            Adap.gsel(0);
            Gvar.var_342 = 0;
            Gvar.var_343 = 1;
            for (let cnt = 0; cnt < 51; ++cnt) {
                await Func.func337();
                Gvar.var_342 = Gvar.var_342 + 5;
            }
            if ( Gvar.var_93[Gvar.var_378][Gvar.var_379] != 0 ) {
                Adap.DSPLAY(123);
                Gvar.var_1638 = Gvar.var_93[Gvar.var_378][Gvar.var_379];
                Gvar.var_268 = Gvar.var_83[Gvar.var_1638].Var0;
                await Func.func658();
                if ( Gvar.var_2497 == 0  &&  Gvar.var_83[Gvar.var_1638].Var0 != 50 ) {
                    Gvar.var_456 = Gvar.var_1638;
                    Gvar.var_234 = 999;
                    Gvar.var_2425 = 1;
                    Gvar.var_2426 = 2;
                    Gvar.var_2498 = 1;
                    if ( Gvar.var_83[Gvar.var_1638].Var0 == 205 ) {
                        Gvar.var_2498 = 2;
                    }
                    await Func.func745();
                    Gvar.var_2498 = 0;
                    Gvar.var_2426 = 0;
                    Gvar.var_2425 = 0;
                }
            }
            for (let cnt = 0; cnt < 51; ++cnt) {
                await Func.func337();
                Gvar.var_342 = Gvar.var_342 - 5;
            }
            Gvar.var_343 = 0;
            Gvar.var_476 = 0;
            Gvar.var_389 = Gvar.var_477;
            if ( Gvar.var_2444 == 1 ) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
            }
            Gvar.var_476 = 0;
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            return;
        }
        // === DISC No.215: スデニ……出来テイタナ… ===
        if (Gvar.var_2494 == 215) {
            await Func.func538();
            if (Gvar.var_652 == 0) { Gvar.var_475 = 11; }
            if (Gvar.var_652 == 1) { Gvar.var_475 = 1; }
            if (Gvar.var_652 == 2) { Gvar.var_475 = 16; }
            if (Gvar.var_652 == 3) { Gvar.var_475 = 29; }
            if (Gvar.var_652 == 4) { Gvar.var_475 = 40; }
            Gvar.var_476 = 1;
            await Func.func099();
            await Func.setMessage("スデニ……出来テイタナ…", "", 10, false, false, false);
            Gvar.var_477 = Gvar.var_389;
            Gvar.var_389 = 114;
            Gvar.var_271 = 1;
            Gvar.var_378 = Gvar.var_74;
            Gvar.var_379 = Gvar.var_75;
            if ( Gvar.var_224 == 4 ) {
                Gvar.var_378 = Gvar.var_378 - 1;
            }
            if ( Gvar.var_224 == 6 ) {
                Gvar.var_378 = Gvar.var_378 + 1;
            }
            if ( Gvar.var_224 == 8 ) {
                Gvar.var_379 = Gvar.var_379 - 1;
            }
            if ( Gvar.var_224 == 2 ) {
                Gvar.var_379 = Gvar.var_379 + 1;
            }
            if ( Gvar.var_224 == 1 ) {
                Gvar.var_378 = Gvar.var_378 - 1;
                Gvar.var_379 = Gvar.var_379 + 1;
            }
            if ( Gvar.var_224 == 3 ) {
                Gvar.var_378 = Gvar.var_378 + 1;
                Gvar.var_379 = Gvar.var_379 + 1;
            }
            if ( Gvar.var_224 == 7 ) {
                Gvar.var_378 = Gvar.var_378 - 1;
                Gvar.var_379 = Gvar.var_379 - 1;
            }
            if ( Gvar.var_224 == 9 ) {
                Gvar.var_378 = Gvar.var_378 + 1;
                Gvar.var_379 = Gvar.var_379 - 1;
            }
            if ( Gvar.var_93[Gvar.var_378][Gvar.var_379] != 0 ) {
                Gvar.var_1638 = Gvar.var_93[Gvar.var_378][Gvar.var_379];
                Gvar.var_268 = Gvar.var_83[Gvar.var_1638].Var0;
                await Func.func658();
                if ( Gvar.var_2497 == 0  &&  Gvar.var_83[Gvar.var_1638].Var0 != 50 ) {
                    Gvar.var_456 = Gvar.var_1638;
                    Gvar.var_234 = 999;
                    Gvar.var_2425 = 1;
                    Gvar.var_2426 = 2;
                    Gvar.var_2498 = 1;
                    if ( Gvar.var_83[Gvar.var_1638].Var0 == 205 ) {
                        Gvar.var_2498 = 2;
                    }
                    await Func.func745();
                    Gvar.var_2498 = 0;
                    Gvar.var_2426 = 0;
                    Gvar.var_2425 = 0;
                }
            }
            Gvar.var_2499 = 0;
            Gvar.var_443 = 0;
            Gvar.var_466 = 160;
            Gvar.var_467 = 150;
            Gvar.var_310 = 1;
            Gvar.var_468 = 1;
            if ( Gvar.var_224 == 4 ) {
                Gvar.var_466 = Gvar.var_466 - 40;
            }
            if ( Gvar.var_224 == 8 ) {
                Gvar.var_467 = Gvar.var_467 - 40;
            }
            if ( Gvar.var_224 == 6 ) {
                Gvar.var_466 = Gvar.var_466 + 40;
            }
            if ( Gvar.var_224 == 2 ) {
                Gvar.var_467 = Gvar.var_467 + 40;
            }
            if ( Gvar.var_224 == 7 ) {
                Gvar.var_466 = Gvar.var_466 - 40;
                Gvar.var_467 = Gvar.var_467 - 40;
            }
            if ( Gvar.var_224 == 9 ) {
                Gvar.var_466 = Gvar.var_466 + 40;
                Gvar.var_467 = Gvar.var_467 - 40;
            }
            if ( Gvar.var_224 == 1 ) {
                Gvar.var_466 = Gvar.var_466 - 40;
                Gvar.var_467 = Gvar.var_467 + 40;
            }
            if ( Gvar.var_224 == 3 ) {
                Gvar.var_466 = Gvar.var_466 + 40;
                Gvar.var_467 = Gvar.var_467 + 40;
            }
            Adap.DSPLAY(168);
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
                Gvar.var_468++;
            }
            Gvar.var_310 = 0;
            Gvar.var_468 = 0;
            Gvar.var_257 = 308;
            Gvar.var_343 = 0;
            Gvar.var_476 = 0;
            Gvar.var_389 = Gvar.var_477;
            if ( Gvar.var_2444 == 1 ) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            }
            Gvar.var_476 = 0;
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        // === DISC No.217: 言ってやるゥゥゥゥ / お前は敗北を認めた！ ===
        if (Gvar.var_2494 == 217) {
            await Func.func538();
            if (Gvar.var_652 == 0) { Gvar.var_475 = 11; }
            if (Gvar.var_652 == 1) { Gvar.var_475 = 1; }
            if (Gvar.var_652 == 2) { Gvar.var_475 = 16; }
            if (Gvar.var_652 == 3) { Gvar.var_475 = 29; }
            if (Gvar.var_652 == 4) { Gvar.var_475 = 40; }
            // 正面の敵チェックと処理
            Gvar.var_378 = Gvar.var_74;
            Gvar.var_379 = Gvar.var_75;
            if (Gvar.var_224 == 4) { Gvar.var_378 = Gvar.var_378 - 1; }
            if (Gvar.var_224 == 6) { Gvar.var_378 = Gvar.var_378 + 1; }
            if (Gvar.var_224 == 8) { Gvar.var_379 = Gvar.var_379 - 1; }
            if (Gvar.var_224 == 2) { Gvar.var_379 = Gvar.var_379 + 1; }
            if (Gvar.var_224 == 1) { Gvar.var_378 = Gvar.var_378 - 1; Gvar.var_379 = Gvar.var_379 + 1; }
            if (Gvar.var_224 == 3) { Gvar.var_378 = Gvar.var_378 + 1; Gvar.var_379 = Gvar.var_379 + 1; }
            if (Gvar.var_224 == 7) { Gvar.var_378 = Gvar.var_378 - 1; Gvar.var_379 = Gvar.var_379 - 1; }
            if (Gvar.var_224 == 9) { Gvar.var_378 = Gvar.var_378 + 1; Gvar.var_379 = Gvar.var_379 - 1; }
            Gvar.var_1638 = Gvar.var_93[Gvar.var_378][Gvar.var_379];
            Gvar.var_268 = Gvar.var_83[Gvar.var_1638].Var0;
            await Func.func658();
            if (Gvar.var_2497 != 0 || Gvar.var_268 == 50) {
                await Func.func099();
                await Func.setMessage("言ってやるゥゥゥゥ", "おれは最強のバクチ打ちだァァァァァァ", 10, false, false, false);
                await Func.func337();
                Gvar.var_242 = 1;
                await Func.func019();
            }
            Gvar.var_476 = 1;
            await Func.func099();
            await Func.setMessage("お前は敗北を認めた！", "", 10, false, false, false);
            if ( Gvar.var_93[Gvar.var_378][Gvar.var_379] != 0 ) {
                Gvar.var_1746 = 1;
                Adap.DSPLAY(197);
                Gvar.var_310 = 1;
                Gvar.var_1265 = 1;
                Gvar.var_83[Gvar.var_1638].Var8 = 1;
                Gvar.var_83[Gvar.var_1638].Var5 = 2;
                for (let cnt = 0; cnt < 13; ++cnt) {
                    await Func.func337();
                    Gvar.var_1746++;
                    if ( Gvar.var_1746 == 11 ) {
                        Gvar.var_2500 = Gvar.var_83[Gvar.var_1638].Var0;
                        Gvar.var_2501 = Gvar.var_83[Gvar.var_1638].Var1;
                        Gvar.var_2502 = Gvar.var_83[Gvar.var_1638].Var2;
                        Gvar.var_83[Gvar.var_1638].Var0 = 0;
                        Gvar.var_83[Gvar.var_1638].Var1 = 0;
                        Gvar.var_83[Gvar.var_1638].Var2 = 0;
                        Gvar.var_93[Gvar.var_378][Gvar.var_379] = 0;
                    }
                    if ( Gvar.var_1746 == 12 ) {
                        Adap.DSPLAY(109);
                    }
                }
                Gvar.var_1746 = 0;
                Adap.DSPLAY(168);
                Gvar.var_468 = 1;
                Gvar.var_2503 = 1;
                for (let cnt = 0; cnt < 15; ++cnt) {
                    await Func.func337();
                    if ( Gvar.var_468 >= 6 ) {
                        Gvar.var_468 = 0;
                    }
                    if ( Gvar.var_468 != 0 ) {
                        Gvar.var_468++;
                    }
                    Gvar.var_2503++;
                }
                Gvar.var_1265 = 0;
                Gvar.var_310 = 0;
                Gvar.var_468 = 0;
                Gvar.var_2503 = 0;
                Gvar.var_265 = 0;
                Gvar.var_506 = Gvar.var_83[Gvar.var_489].Var0;
                Gvar.var_83[Gvar.var_489].Var5 = 2;
                Gvar.var_453 = Gvar.var_2501;
                Gvar.var_454 = Gvar.var_2502;
                Gvar.var_507 = Gvar.var_2501;
                Gvar.var_508 = Gvar.var_2502;
                Gvar.var_509 = Gvar.var_2501;
                Gvar.var_510 = Gvar.var_2502;
                Gvar.var_512 = 1;
                await Func.func436();
                Gvar.var_512 = 0;
                if ( Gvar.var_513 != 0 ) {
                    Gvar.var_514 = Gvar.var_515;
                    Gvar.var_516 = Gvar.var_517;
                    Gvar.var_518 = 1;
                    Gvar.var_519 = 1;
                    Gvar.var_520 = 1;
                    Gvar.var_521 = 1;
                    Gvar.var_1994 = Gvar.var_2500;
                    await Func.func415();
                    Gvar.var_1994 = 0;
                    Gvar.var_521 = 0;
                    Gvar.var_518 = 0;
                    Gvar.var_519 = 0;
                    Gvar.var_520 = 0;
                }
            }
            Gvar.var_476 = 0;
            if ( Gvar.var_2444 == 1 ) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            }
            Gvar.var_476 = 0;
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        // === DISC No.218: 地面の記憶を呼び出した！ ===
        if (Gvar.var_2494 == 218) {
            await Func.func538();
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
            }
            await Func.func099();
            await Func.setMessage("地面の記憶を呼び出した！", "", 10, false, false, false);
            // 罠大量出現処理
            Gvar.var_869 = 1;
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func568();
            }
            Gvar.var_869 = 0;
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "罠がたくさん現れたようだ…";
            await Func.func050();
            await Func.func053();
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            await Func.func358();
            // ウェザーの記憶DISC掘り起こし処理
            if (Gvar.dungeon_number == 9 && Gvar.var_79 >= Gvar.var_66) {
                await Func.func099();
                Gvar.var_283 = Gvar.var_286;
                Gvar.var_284 = Gvar.var_287;
                Gvar.var_286 = "どこかで『ｳｪｻﾞｰの記憶DISC』が";
                Gvar.var_287 = "掘り起こされたようだ…";
                Gvar.var_223 = 1;
                Gvar.var_290 = 0;
                await Func.func050();
                await Func.func053();
            await Func.func358();
            if ( Gvar.var_70 == 9  &&  Gvar.var_79 >= Gvar.var_66 ) {
                await Func.func099();
                Gvar.var_283 = Gvar.var_286;
                Gvar.var_284 = Gvar.var_287;
                Gvar.var_286 = "どこかで『ｳｪｻﾞｰの記憶DISC』が";
                Gvar.var_287 = "掘り起こされたようだ…";
                await Func.func053();
                Gvar.var_2504 = 0;
                for (let cnt = 0; cnt < 500; ++cnt) {
                    Gvar.var_1714 = Adap.rnd(Gvar.var_32);
                    Gvar.var_255 = Adap.rnd(Gvar.var_33);
                    if ( Gvar.var_82[Gvar.var_1714][Gvar.var_255] != 0  &&  Gvar.var_82[Gvar.var_1714][Gvar.var_255] != Gvar.var_226  &&  Gvar.var_82[Gvar.var_1714][Gvar.var_255] <= 12  &&  Gvar.var_88[Gvar.var_1714][Gvar.var_255] == 0  &&  Gvar.var_84[Gvar.var_1714][Gvar.var_255] == 0  &&  Gvar.var_83[Gvar.var_1714][Gvar.var_255] == 0  &&  Gvar.var_91[Gvar.var_1714][Gvar.var_255] == 0 ) {
                        Gvar.var_2504 = 1;
                        break;
                    }
                    if ( Gvar.var_104 == 8  &&  Gvar.var_82[Gvar.var_1714][Gvar.var_255] == 14  &&  Gvar.var_88[Gvar.var_1714][Gvar.var_255] == 0  &&  Gvar.var_84[Gvar.var_1714][Gvar.var_255] == 0  &&  Gvar.var_91[Gvar.var_1714][Gvar.var_255] == 0 ) {
                        Gvar.var_2504 = 1;
                        break;
                    }
                }
                if ( Gvar.var_2504 == 0 ) {
                    for (let cnt = 0; cnt < 500; ++cnt) {
                        Gvar.var_1714 = Adap.rnd(Gvar.var_32);
                        Gvar.var_255 = Adap.rnd(Gvar.var_33);
                        if ( Gvar.var_82[Gvar.var_1714][Gvar.var_255] != 0  &&  Gvar.var_82[Gvar.var_1714][Gvar.var_255] <= 12  &&  Gvar.var_88[Gvar.var_1714][Gvar.var_255] == 0  &&  Gvar.var_84[Gvar.var_1714][Gvar.var_255] == 0  &&  Gvar.var_83[Gvar.var_1714][Gvar.var_255] == 0  &&  Gvar.var_91[Gvar.var_1714][Gvar.var_255] == 0 ) {
                            break;
                        }
                        if ( Gvar.var_104 == 8  &&  Gvar.var_82[Gvar.var_1714][Gvar.var_255] == 14  &&  Gvar.var_88[Gvar.var_1714][Gvar.var_255] == 0  &&  Gvar.var_84[Gvar.var_1714][Gvar.var_255] == 0  &&  Gvar.var_91[Gvar.var_1714][Gvar.var_255] == 0 ) {
                            Gvar.var_2504 = 1;
                            break;
                        }
                    }
                }
                Gvar.var_515 = Gvar.var_1714;
                Gvar.var_517 = Gvar.var_255;
                Gvar.var_453 = Gvar.var_515;
                Gvar.var_454 = Gvar.var_517;
                Gvar.var_507 = Gvar.var_515;
                Gvar.var_508 = Gvar.var_517;
                Gvar.var_509 = Gvar.var_515;
                Gvar.var_510 = Gvar.var_517;
                Gvar.var_512 = 1;
                await Func.func436();
                Gvar.var_512 = 0;
                if ( Gvar.var_513 != 0 ) {
                    Gvar.var_514 = Gvar.var_515;
                    Gvar.var_516 = Gvar.var_517;
                    Gvar.var_518 = 1;
                    Gvar.var_519 = 1;
                    Gvar.var_520 = 1;
                    Gvar.var_521 = 1;
                    Gvar.var_1995 = 1;
                    await Func.func415();
                    Gvar.var_1995 = 0;
                    Gvar.var_521 = 0;
                    Gvar.var_518 = 0;
                    Gvar.var_519 = 0;
                    Gvar.var_520 = 0;
                }
                await Func.func348();
            }
            await Func.func348();
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        }
        // === DISC No.207: グレイトフル・デッド ===
        if (Gvar.var_2494 == 207) {
            await Func.func538();
            if (Gvar.var_652 == 0) { Gvar.var_475 = 11; }
            if (Gvar.var_652 == 1) { Gvar.var_475 = 1; }
            if (Gvar.var_652 == 2) { Gvar.var_475 = 16; }
            if (Gvar.var_652 == 3) { Gvar.var_475 = 29; }
            if (Gvar.var_652 == 4) { Gvar.var_475 = 40; }
            if (Gvar.var_193 == 1) {
                await Func.setMessage("発動能力がパワーアップしている！", "", 10, false, false, false);
                await Func.func358();
            }
            await Func.setMessage("「グレイトフル・デッド！！」", "", 10, false, false, false);
            Gvar.var_2505 = 0;
            Gvar.var_2167 = Gvar.var_224;
            Gvar.var_224 = 2;
            Gvar.var_310 = 1;
            Gvar.var_1546 = 1;
            for (let cnt = 0; cnt < 30; ++cnt) {
                await Func.func337();
                if ( Gvar.var_1546 == 11 ) {
                    Adap.DSPLAY(161);
                }
                Gvar.var_1546++;
            }
            Gvar.var_310 = 0;
            Gvar.var_1546 = 0;
            Gvar.var_2506 = 0;
            Gvar.var_2424 = 1;
            for (let cnt = 0; cnt < Gvar.var_107; ++cnt) {
                Gvar.var_2507 = 0;
                if ( Gvar.var_83[Gvar.var_2424].Var0 != 0 ) {
                    Gvar.var_2221 = Gvar.var_74 - 1;
                    if ( Gvar.var_2221 < 0 ) {
                        Gvar.var_2221 = 0;
                    }
                    Gvar.var_2222 = Gvar.var_74 + 1;
                    if ( Gvar.var_2222 > Gvar.var_32 ) {
                        Gvar.var_2222 = Gvar.var_32;
                    }
                    Gvar.var_2223 = Gvar.var_75 + 1;
                    if ( Gvar.var_2223 > Gvar.var_33 ) {
                        Gvar.var_2223 = Gvar.var_33;
                    }
                    Gvar.var_2224 = Gvar.var_75 - 1;
                    if ( Gvar.var_2224 < 0 ) {
                        Gvar.var_2224 = 0;
                    }
                    if ( Gvar.var_2507 == 0  &&  Gvar.var_2424 != Gvar.var_141  &&  Gvar.var_83[Gvar.var_2424].Var10 == Gvar.var_226  &&  Gvar.var_226 > 0  &&  Gvar.var_226 <= 12 ) {
                        await Func.func551();
                        Gvar.var_2507 = 1;
                    }
                    if ( Gvar.var_2507 == 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_74  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2223 ) {
                        await Func.func551();
                        Gvar.var_2507 = 1;
                    }
                    if ( Gvar.var_2507 == 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_74  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2224 ) {
                        await Func.func551();
                        Gvar.var_2507 = 1;
                    }
                    if ( Gvar.var_2507 == 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2221  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_75 ) {
                        await Func.func551();
                        Gvar.var_2507 = 1;
                    }
                    if ( Gvar.var_2507 == 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2222  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_75 ) {
                        await Func.func551();
                        Gvar.var_2507 = 1;
                    }
                    if ( Gvar.var_2507 == 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2221  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2223 ) {
                        await Func.func551();
                        Gvar.var_2507 = 1;
                    }
                    if ( Gvar.var_2507 == 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2222  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2223 ) {
                        await Func.func551();
                        Gvar.var_2507 = 1;
                    }
                    if ( Gvar.var_2507 == 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2221  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2224 ) {
                        await Func.func551();
                        Gvar.var_2507 = 1;
                    }
                    if ( Gvar.var_2507 == 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2222  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2224 ) {
                        await Func.func551();
                        Gvar.var_2507 = 1;
                    }
                    if ( Gvar.var_226 <= 12  &&  Gvar.var_226 != 0 ) {
                        Gvar.var_2459 = Gvar.var_83[Gvar.var_2424].Var1;
                        Gvar.var_2460 = Gvar.var_83[Gvar.var_2424].Var2;
                        Gvar.var_2461 = Gvar.var_83[Gvar.var_2424].Var1 - 1;
                        if ( Gvar.var_2461 < 0 ) {
                            Gvar.var_2461 = 0;
                        }
                        Gvar.var_2462 = Gvar.var_83[Gvar.var_2424].Var1 + 1;
                        if ( Gvar.var_2462 > Gvar.var_32 ) {
                            Gvar.var_2462 = Gvar.var_32;
                        }
                        Gvar.var_2463 = Gvar.var_83[Gvar.var_2424].Var2 + 1;
                        if ( Gvar.var_2463 > Gvar.var_33 ) {
                            Gvar.var_2463 = Gvar.var_33;
                        }
                        Gvar.var_2464 = Gvar.var_83[Gvar.var_2424].Var2 - 1;
                        if ( Gvar.var_2464 < 0 ) {
                            Gvar.var_2464 = 0;
                        }
                        if ( Gvar.var_2507 == 0  &&  Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_82[Gvar.var_2461][Gvar.var_2460] == Gvar.var_226 ) {
                            await Func.func551();
                            Gvar.var_2507 = 1;
                        }
                        if ( Gvar.var_2507 == 0  &&  Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_82[Gvar.var_2462][Gvar.var_2460] == Gvar.var_226 ) {
                            await Func.func551();
                            Gvar.var_2507 = 1;
                        }
                        if ( Gvar.var_2507 == 0  &&  Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_82[Gvar.var_2459][Gvar.var_2463] == Gvar.var_226 ) {
                            await Func.func551();
                            Gvar.var_2507 = 1;
                        }
                        if ( Gvar.var_2507 == 0  &&  Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_82[Gvar.var_2459][Gvar.var_2464] == Gvar.var_226 ) {
                            await Func.func551();
                            Gvar.var_2507 = 1;
                        }
                    }
                    if ( Gvar.var_2507 == 0  &&  Gvar.var_193 >= 1 ) {
                        await Func.func551();
                        Gvar.var_2507 = 1;
                    }
                }
                if ( Gvar.var_2507 == 1 ) {
                    Gvar.var_2506 = 1;
                }
                Gvar.var_2424 = Gvar.var_2424 + 1;
            }
            if ( Gvar.var_2506 == 1  ||  Gvar.var_193 >= 1 ) {
                Gvar.var_283 = Gvar.var_286;
                Gvar.var_284 = Gvar.var_287;
                if ( Gvar.var_193 == 0 ) {
                    Gvar.var_286 = "近くにいる敵は急激に老化して";
                    Gvar.var_287 = "攻撃力が下がった！";
                }
                if ( Gvar.var_193 >= 1 ) {
                    Gvar.var_286 = "この階にいる全ての敵は";
                    Gvar.var_287 = "急激に老化して攻撃力が下がった！";
                }
                await Func.func053();
                for (let cnt = 0; cnt < 10; ++cnt) {
                    await Func.func337();
                }
            }
            Gvar.var_224 = Gvar.var_2167;
            if ( Gvar.var_2444 == 1 ) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            }
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            if (Gvar.var_193 == 0) {
                Gvar.var_286 = "近くにいる敵は急激に老化して";
                Gvar.var_287 = "攻撃力が下がった！";
            }
            if (Gvar.var_193 >= 1) {
                Gvar.var_286 = "この階にいる全ての敵は";
                Gvar.var_287 = "急激に老化して攻撃力が下がった！";
            }
            await Func.func053();
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            await Func.func050();
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        }
        // === DISC No.122: エニグマ ===
        if (Gvar.var_2494 == 122) {
            await Func.func538();
            Gvar.var_160 = 1;
            await Func.func099();
            await Func.setMessage("「どの程度の ふみ込みまで", "　耐えられるか 憶えるゼ！」", 10, false, false, false);
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
            }
            Adap.DSPLAY(140);
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        }
        // === DISC No.113: クラッシュ ===
        if (Gvar.var_2494 == 113) {
            await Func.func538();
            if (Gvar.var_652 == 0) { Gvar.var_475 = 11; }
            if (Gvar.var_652 == 1) { Gvar.var_475 = 1; }
            if (Gvar.var_652 == 2) { Gvar.var_475 = 16; }
            if (Gvar.var_652 == 3) { Gvar.var_475 = 29; }
            if (Gvar.var_652 == 4) { Gvar.var_475 = 40; }
            Gvar.var_476 = 1;
            await Func.setMessage("「クラッシュ！くらいつけッ！」", "", 10, false, false, false);
            Gvar.var_477 = Gvar.var_389;
            Gvar.var_389 = 113;
            Gvar.var_271 = 1;
            Gvar.var_378 = Gvar.var_74;
            Gvar.var_379 = Gvar.var_75;
            if ( Gvar.var_224 == 4 ) {
                Gvar.var_378 = Gvar.var_378 - 1;
            }
            if ( Gvar.var_224 == 6 ) {
                Gvar.var_378 = Gvar.var_378 + 1;
            }
            if ( Gvar.var_224 == 8 ) {
                Gvar.var_379 = Gvar.var_379 - 1;
            }
            if ( Gvar.var_224 == 2 ) {
                Gvar.var_379 = Gvar.var_379 + 1;
            }
            if ( Gvar.var_224 == 1 ) {
                Gvar.var_378 = Gvar.var_378 - 1;
                Gvar.var_379 = Gvar.var_379 + 1;
            }
            if ( Gvar.var_224 == 3 ) {
                Gvar.var_378 = Gvar.var_378 + 1;
                Gvar.var_379 = Gvar.var_379 + 1;
            }
            if ( Gvar.var_224 == 7 ) {
                Gvar.var_378 = Gvar.var_378 - 1;
                Gvar.var_379 = Gvar.var_379 - 1;
            }
            if ( Gvar.var_224 == 9 ) {
                Gvar.var_378 = Gvar.var_378 + 1;
                Gvar.var_379 = Gvar.var_379 - 1;
            }
            Adap.DSPLAY(104);
            if ( Gvar.var_93[Gvar.var_378][Gvar.var_379] != 0 ) {
                Gvar.var_345 = Gvar.var_93[Gvar.var_378][Gvar.var_379];
                if ( Gvar.var_83[Gvar.var_345].Var0 != 50 ) {
                    Gvar.var_846 = 1;
                    for (let cnt = 0; cnt < 10; ++cnt) {
                        await Func.func337();
                    }
                    await Func.func706();
                }
            }
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
            }
            Gvar.var_476 = 0;
            Gvar.var_389 = Gvar.var_477;
            if ( Gvar.var_2444 == 1 ) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            }
            Gvar.var_476 = 0;
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        // === DISC No.105: 限界なく明るくなる ===
        if (Gvar.var_2494 == 105) {
            await Func.func538();
            Gvar.var_342 = 255;
            await Func.setMessage("限界なく明るくなるッ！！", "", 10, false, false, false);
            Adap.DSPLAY(161);
            Gvar.var_343 = 1;
            for (let cnt = 0; cnt < 51; ++cnt) {
                await Func.func337();
                Gvar.var_342 = Gvar.var_342 - 5;
            }
            Gvar.var_343 = 0;
            Gvar.var_114 = 1;
            Gvar.var_138 = 1;
            Gvar.var_2424 = 1;
            for (let cnt = 0; cnt < Gvar.var_367; ++cnt) {
                if ( Gvar.var_89[Gvar.var_2424][0] != 0 ) {
                    Gvar.var_2221 = Gvar.var_74 - 1;
                    if ( Gvar.var_2221 < 0 ) {
                        Gvar.var_2221 = 0;
                    }
                    Gvar.var_2222 = Gvar.var_74 + 1;
                    if ( Gvar.var_2222 > Gvar.var_32 ) {
                        Gvar.var_2222 = Gvar.var_32;
                    }
                    Gvar.var_2223 = Gvar.var_75 + 1;
                    if ( Gvar.var_2223 > Gvar.var_33 ) {
                        Gvar.var_2223 = Gvar.var_33;
                    }
                    Gvar.var_2224 = Gvar.var_75 - 1;
                    if ( Gvar.var_2224 < 0 ) {
                        Gvar.var_2224 = 0;
                    }
                    if ( Gvar.var_89[Gvar.var_2424][9] == Gvar.var_226  &&  Gvar.var_226 > 0  &&  Gvar.var_226 <= 12 ) {
                        await Func.func544();
                    }
                    if ( Gvar.var_89[Gvar.var_2424][1] == Gvar.var_74  &&  Gvar.var_89[Gvar.var_2424][2] == Gvar.var_2223 ) {
                        await Func.func544();
                    }
                    if ( Gvar.var_89[Gvar.var_2424][1] == Gvar.var_74  &&  Gvar.var_89[Gvar.var_2424][2] == Gvar.var_2224 ) {
                        await Func.func544();
                    }
                    if ( Gvar.var_89[Gvar.var_2424][1] == Gvar.var_2221  &&  Gvar.var_89[Gvar.var_2424][2] == Gvar.var_75 ) {
                        await Func.func544();
                    }
                    if ( Gvar.var_89[Gvar.var_2424][1] == Gvar.var_2222  &&  Gvar.var_89[Gvar.var_2424][2] == Gvar.var_75 ) {
                        await Func.func544();
                    }
                    if ( Gvar.var_89[Gvar.var_2424][1] == Gvar.var_2221  &&  Gvar.var_89[Gvar.var_2424][2] == Gvar.var_2223 ) {
                        await Func.func544();
                    }
                    if ( Gvar.var_89[Gvar.var_2424][1] == Gvar.var_2222  &&  Gvar.var_89[Gvar.var_2424][2] == Gvar.var_2223 ) {
                        await Func.func544();
                    }
                    if ( Gvar.var_89[Gvar.var_2424][1] == Gvar.var_2221  &&  Gvar.var_89[Gvar.var_2424][2] == Gvar.var_2224 ) {
                        await Func.func544();
                    }
                    if ( Gvar.var_89[Gvar.var_2424][1] == Gvar.var_2222  &&  Gvar.var_89[Gvar.var_2424][2] == Gvar.var_2224 ) {
                        await Func.func544();
                    }
                    if ( Gvar.var_226 <= 12  &&  Gvar.var_226 != 0 ) {
                        Gvar.var_2459 = Gvar.var_89[Gvar.var_2424][1];
                        Gvar.var_2460 = Gvar.var_89[Gvar.var_2424][2];
                        Gvar.var_2461 = Gvar.var_89[Gvar.var_2424][1] - 1;
                        if ( Gvar.var_2461 < 0 ) {
                            Gvar.var_2461 = 0;
                        }
                        Gvar.var_2462 = Gvar.var_89[Gvar.var_2424][1] + 1;
                        if ( Gvar.var_2462 > Gvar.var_32 ) {
                            Gvar.var_2462 = Gvar.var_32;
                        }
                        Gvar.var_2463 = Gvar.var_89[Gvar.var_2424][2] + 1;
                        if ( Gvar.var_2463 > Gvar.var_33 ) {
                            Gvar.var_2463 = Gvar.var_33;
                        }
                        Gvar.var_2464 = Gvar.var_89[Gvar.var_2424][2] - 1;
                        if ( Gvar.var_2464 < 0 ) {
                            Gvar.var_2464 = 0;
                        }
                        if ( Gvar.var_89[Gvar.var_2424][0] != 0  &&  Gvar.var_82[Gvar.var_2461][Gvar.var_2460] == Gvar.var_226 ) {
                            await Func.func544();
                        }
                        if ( Gvar.var_89[Gvar.var_2424][0] != 0  &&  Gvar.var_82[Gvar.var_2462][Gvar.var_2460] == Gvar.var_226 ) {
                            await Func.func544();
                        }
                        if ( Gvar.var_89[Gvar.var_2424][0] != 0  &&  Gvar.var_82[Gvar.var_2459][Gvar.var_2463] == Gvar.var_226 ) {
                            await Func.func544();
                        }
                        if ( Gvar.var_89[Gvar.var_2424][0] != 0  &&  Gvar.var_82[Gvar.var_2459][Gvar.var_2464] == Gvar.var_226 ) {
                            await Func.func544();
                        }
                    }
                }
                Gvar.var_2424 = Gvar.var_2424 + 1;
            }
            Gvar.var_2424 = 1;
            for (let cnt = 0; cnt < Gvar.var_107; ++cnt) {
                if ( Gvar.var_83[Gvar.var_2424].Var0 != 0 ) {
                    Gvar.var_2221 = Gvar.var_74 - 1;
                    if ( Gvar.var_2221 < 0 ) {
                        Gvar.var_2221 = 0;
                    }
                    Gvar.var_2222 = Gvar.var_74 + 1;
                    if ( Gvar.var_2222 > Gvar.var_32 ) {
                        Gvar.var_2222 = Gvar.var_32;
                    }
                    Gvar.var_2223 = Gvar.var_75 + 1;
                    if ( Gvar.var_2223 > Gvar.var_33 ) {
                        Gvar.var_2223 = Gvar.var_33;
                    }
                    Gvar.var_2224 = Gvar.var_75 - 1;
                    if ( Gvar.var_2224 < 0 ) {
                        Gvar.var_2224 = 0;
                    }
                    if ( Gvar.var_2424 != Gvar.var_141  &&  Gvar.var_83[Gvar.var_2424].Var10 == Gvar.var_226  &&  Gvar.var_226 > 0  &&  Gvar.var_226 <= 12 ) {
                        Gvar.var_83[Gvar.var_2424].Var23 = 1;
                        if ( Gvar.var_83[Gvar.var_2424].Var0 == 97 ) {
                            Gvar.var_83[Gvar.var_2424].Var31 = 0;
                        }
                    }
                    if ( Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_74  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2223 ) {
                        Gvar.var_83[Gvar.var_2424].Var23 = 1;
                        if ( Gvar.var_83[Gvar.var_2424].Var0 == 97 ) {
                            Gvar.var_83[Gvar.var_2424].Var31 = 0;
                        }
                    }
                    if ( Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_74  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2224 ) {
                        Gvar.var_83[Gvar.var_2424].Var23 = 1;
                        if ( Gvar.var_83[Gvar.var_2424].Var0 == 97 ) {
                            Gvar.var_83[Gvar.var_2424].Var31 = 0;
                        }
                    }
                    if ( Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2221  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_75 ) {
                        Gvar.var_83[Gvar.var_2424].Var23 = 1;
                        if ( Gvar.var_83[Gvar.var_2424].Var0 == 97 ) {
                            Gvar.var_83[Gvar.var_2424].Var31 = 0;
                        }
                    }
                    if ( Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2222  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_75 ) {
                        Gvar.var_83[Gvar.var_2424].Var23 = 1;
                        if ( Gvar.var_83[Gvar.var_2424].Var0 == 97 ) {
                            Gvar.var_83[Gvar.var_2424].Var31 = 0;
                        }
                    }
                    if ( Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2221  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2223 ) {
                        Gvar.var_83[Gvar.var_2424].Var23 = 1;
                        if ( Gvar.var_83[Gvar.var_2424].Var0 == 97 ) {
                            Gvar.var_83[Gvar.var_2424].Var31 = 0;
                        }
                    }
                    if ( Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2222  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2223 ) {
                        Gvar.var_83[Gvar.var_2424].Var23 = 1;
                        if ( Gvar.var_83[Gvar.var_2424].Var0 == 97 ) {
                            Gvar.var_83[Gvar.var_2424].Var31 = 0;
                        }
                    }
                    if ( Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2221  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2224 ) {
                        Gvar.var_83[Gvar.var_2424].Var23 = 1;
                        if ( Gvar.var_83[Gvar.var_2424].Var0 == 97 ) {
                            Gvar.var_83[Gvar.var_2424].Var31 = 0;
                        }
                    }
                    if ( Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2222  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2224 ) {
                        Gvar.var_83[Gvar.var_2424].Var23 = 1;
                        if ( Gvar.var_83[Gvar.var_2424].Var0 == 97 ) {
                            Gvar.var_83[Gvar.var_2424].Var31 = 0;
                        }
                    }
                    if ( Gvar.var_226 <= 12  &&  Gvar.var_226 != 0 ) {
                        Gvar.var_2459 = Gvar.var_83[Gvar.var_2424].Var1;
                        Gvar.var_2460 = Gvar.var_83[Gvar.var_2424].Var2;
                        Gvar.var_2461 = Gvar.var_83[Gvar.var_2424].Var1 - 1;
                        if ( Gvar.var_2461 < 0 ) {
                            Gvar.var_2461 = 0;
                        }
                        Gvar.var_2462 = Gvar.var_83[Gvar.var_2424].Var1 + 1;
                        if ( Gvar.var_2462 > Gvar.var_32 ) {
                            Gvar.var_2462 = Gvar.var_32;
                        }
                        Gvar.var_2463 = Gvar.var_83[Gvar.var_2424].Var2 + 1;
                        if ( Gvar.var_2463 > Gvar.var_33 ) {
                            Gvar.var_2463 = Gvar.var_33;
                        }
                        Gvar.var_2464 = Gvar.var_83[Gvar.var_2424].Var2 - 1;
                        if ( Gvar.var_2464 < 0 ) {
                            Gvar.var_2464 = 0;
                        }
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_82[Gvar.var_2461][Gvar.var_2460] == Gvar.var_226 ) {
                            Gvar.var_83[Gvar.var_2424].Var23 = 1;
                            if ( Gvar.var_83[Gvar.var_2424].Var0 == 97 ) {
                                Gvar.var_83[Gvar.var_2424].Var31 = 0;
                            }
                        }
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_82[Gvar.var_2462][Gvar.var_2460] == Gvar.var_226 ) {
                            Gvar.var_83[Gvar.var_2424].Var23 = 1;
                            if ( Gvar.var_83[Gvar.var_2424].Var0 == 97 ) {
                                Gvar.var_83[Gvar.var_2424].Var31 = 0;
                            }
                        }
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_82[Gvar.var_2459][Gvar.var_2463] == Gvar.var_226 ) {
                            Gvar.var_83[Gvar.var_2424].Var23 = 1;
                            if ( Gvar.var_83[Gvar.var_2424].Var0 == 97 ) {
                                Gvar.var_83[Gvar.var_2424].Var31 = 0;
                            }
                        }
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_82[Gvar.var_2459][Gvar.var_2464] == Gvar.var_226 ) {
                            Gvar.var_83[Gvar.var_2424].Var23 = 1;
                            if ( Gvar.var_83[Gvar.var_2424].Var0 == 97 ) {
                                Gvar.var_83[Gvar.var_2424].Var31 = 0;
                            }
                        }
                    }
                }
                Gvar.var_2424 = Gvar.var_2424 + 1;
            }
            Gvar.var_131 = 0;
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        }
        // === DISC No.116: ハーミットパープル(念写) ===
        if (Gvar.var_2494 == 116) {
            await Func.func538();
            Gvar.var_2167 = Gvar.var_224;
            Gvar.var_224 = 2;
            Gvar.var_1394 = 3;
            Adap.DSPLAY(127);
            Gvar.var_310 = 1;
            Gvar.var_1635 = 1;
            for (let cnt = 0; cnt < 14; ++cnt) {
                Gvar.var_1635++;
                await Func.func337();
                await Func.func337();
            }
            Gvar.var_310 = 0;
            Gvar.var_1635 = 0;
            Gvar.var_1394 = 0;
            Gvar.var_200 = 0;
            Gvar.var_201 = 0;
            Gvar.var_2509 = 0;
            Gvar.var_2510 = 0;
            Gvar.var_2511 = 1;
            for (let cnt = 0; cnt < Gvar.var_107; ++cnt) {
                if ( Gvar.var_83[Gvar.var_2511].Var0 == 113 ) {
                    Gvar.var_2512 = Adap.rnd(20);
                    if ( Gvar.var_2512 >= 10 ) {
                        Gvar.var_2510 = Gvar.var_2511;
                        break;
                    }
                }
                if ( Gvar.var_83[Gvar.var_2511].Var0 == 115 ) {
                    Gvar.var_2512 = Adap.rnd(20);
                    if ( Gvar.var_2512 >= 10 ) {
                        Gvar.var_2509 = Gvar.var_2511;
                        break;
                    }
                }
                Gvar.var_2511++;
            }
            if ( Gvar.var_2509 == 0  &&  Gvar.var_2510 == 0 ) {
                Adap.DSPLAY(184);
                await Func.setMessage("この階の地図を念写した！", "", 10, false, false, false);
                Gvar.var_113 = 1;
            }
            if ( Gvar.var_2510 >= 1 ) {
                await Func.func099();
                await Func.setMessage("「きさま、見ているなッ！！」", "", 10, false, false, false);
                await Func.func358();
                Gvar.var_201 = Gvar.var_2510;
            }
            if ( Gvar.var_2509 >= 1 ) {
                Adap.DSPLAY(184);
                await Func.setMessage("この階のｱｸｱ･ﾈｯｸﾚｽを念写した！", "", 10, false, false, false);
                await Func.func358();
                Gvar.var_200 = Gvar.var_2509;
            }
            await Func.func348();
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
            }
            Gvar.var_224 = Gvar.var_2167;
            if ( Gvar.var_2444 == 1 ) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            }
            if (Gvar.var_2509 == 0 && Gvar.var_2510 == 0) {
                Adap.DSPLAY(184);
                await Func.setMessage("この階の地図を念写した！", "", 10, false, false, false);
                Gvar.var_113 = 1;
            }
            if (Gvar.var_2510 >= 1) {
                await Func.func099();
                await Func.setMessage("「きさま、見ているなッ！！」", "", 10, false, false, false);
                await Func.func358();
                Gvar.var_201 = Gvar.var_2510;
                Gvar.var_223 = 0;
            }
            if (Gvar.var_2509 >= 1) {
                Adap.DSPLAY(184);
                await Func.setMessage("この階のｱｸｱ･ﾈｯｸﾚｽを念写した！", "", 10, false, false, false);
                await Func.func358();
                Gvar.var_200 = Gvar.var_2509;
                Gvar.var_223 = 0;
            }
            await Func.func348();
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        // === DISC No.107: デス13(ラリホー) ===
        if (Gvar.var_2494 == 107) {
            await Func.func538();
            if (Gvar.var_652 == 0) { Gvar.var_475 = 11; }
            if (Gvar.var_652 == 1) { Gvar.var_475 = 1; }
            if (Gvar.var_652 == 2) { Gvar.var_475 = 16; }
            if (Gvar.var_652 == 3) { Gvar.var_475 = 29; }
            if (Gvar.var_652 == 4) { Gvar.var_475 = 40; }
            if (Gvar.var_193 == 1) {
                await Func.setMessage("発動能力がパワーアップしている！", "", 10, false, false, false);
                await Func.func358();
            }
            Adap.DSPLAY(131);
            await Func.setMessage("「ラリホ～～～～～っ！」", "", 10, false, false, false);
            Gvar.var_2167 = Gvar.var_224;
            Gvar.var_224 = 2;
            Gvar.var_310 = 1;
            Gvar.var_1757 = 1;
            for (let cnt = 0; cnt < 34; ++cnt) {
                await Func.func337();
                Gvar.var_1757++;
            }
            Gvar.var_310 = 0;
            Gvar.var_1757 = 0;
            Gvar.var_2506 = 0;
            Gvar.var_2424 = 1;
            for (let cnt = 0; cnt < Gvar.var_107; ++cnt) {
                Gvar.var_2507 = 0;
                if ( Gvar.var_83[Gvar.var_2424].Var0 != 0 ) {
                    Gvar.var_2221 = Gvar.var_74 - 1;
                    if ( Gvar.var_2221 < 0 ) {
                        Gvar.var_2221 = 0;
                    }
                    Gvar.var_2222 = Gvar.var_74 + 1;
                    if ( Gvar.var_2222 > Gvar.var_32 ) {
                        Gvar.var_2222 = Gvar.var_32;
                    }
                    Gvar.var_2223 = Gvar.var_75 + 1;
                    if ( Gvar.var_2223 > Gvar.var_33 ) {
                        Gvar.var_2223 = Gvar.var_33;
                    }
                    Gvar.var_2224 = Gvar.var_75 - 1;
                    if ( Gvar.var_2224 < 0 ) {
                        Gvar.var_2224 = 0;
                    }
                    if ( Gvar.var_2507 == 0  &&  Gvar.var_2424 != Gvar.var_141  &&  Gvar.var_83[Gvar.var_2424].Var10 == Gvar.var_226  &&  Gvar.var_226 > 0  &&  Gvar.var_226 <= 12  &&  Gvar.var_193 == 1 ) {
                        await Func.func552();
                        Gvar.var_2507 = 1;
                    }
                    if ( Gvar.var_2507 == 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_74  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2223 ) {
                        await Func.func552();
                        Gvar.var_2507 = 1;
                    }
                    if ( Gvar.var_2507 == 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_74  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2224 ) {
                        await Func.func552();
                        Gvar.var_2507 = 1;
                    }
                    if ( Gvar.var_2507 == 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2221  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_75 ) {
                        await Func.func552();
                        Gvar.var_2507 = 1;
                    }
                    if ( Gvar.var_2507 == 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2222  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_75 ) {
                        await Func.func552();
                        Gvar.var_2507 = 1;
                    }
                    if ( Gvar.var_2507 == 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2221  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2223 ) {
                        await Func.func552();
                        Gvar.var_2507 = 1;
                    }
                    if ( Gvar.var_2507 == 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2222  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2223 ) {
                        await Func.func552();
                        Gvar.var_2507 = 1;
                    }
                    if ( Gvar.var_2507 == 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2221  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2224 ) {
                        await Func.func552();
                        Gvar.var_2507 = 1;
                    }
                    if ( Gvar.var_2507 == 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2222  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2224 ) {
                        await Func.func552();
                        Gvar.var_2507 = 1;
                    }
                    if ( Gvar.var_226 <= 12  &&  Gvar.var_226 != 0  &&  Gvar.var_193 == 1 ) {
                        Gvar.var_2459 = Gvar.var_83[Gvar.var_2424].Var1;
                        Gvar.var_2460 = Gvar.var_83[Gvar.var_2424].Var2;
                        Gvar.var_2461 = Gvar.var_83[Gvar.var_2424].Var1 - 1;
                        if ( Gvar.var_2461 < 0 ) {
                            Gvar.var_2461 = 0;
                        }
                        Gvar.var_2462 = Gvar.var_83[Gvar.var_2424].Var1 + 1;
                        if ( Gvar.var_2462 > Gvar.var_32 ) {
                            Gvar.var_2462 = Gvar.var_32;
                        }
                        Gvar.var_2463 = Gvar.var_83[Gvar.var_2424].Var2 + 1;
                        if ( Gvar.var_2463 > Gvar.var_33 ) {
                            Gvar.var_2463 = Gvar.var_33;
                        }
                        Gvar.var_2464 = Gvar.var_83[Gvar.var_2424].Var2 - 1;
                        if ( Gvar.var_2464 < 0 ) {
                            Gvar.var_2464 = 0;
                        }
                        if ( Gvar.var_2507 == 0  &&  Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_82[Gvar.var_2461][Gvar.var_2460] == Gvar.var_226 ) {
                            await Func.func552();
                            Gvar.var_2507 = 1;
                        }
                        if ( Gvar.var_2507 == 0  &&  Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_82[Gvar.var_2462][Gvar.var_2460] == Gvar.var_226 ) {
                            await Func.func552();
                            Gvar.var_2507 = 1;
                        }
                        if ( Gvar.var_2507 == 0  &&  Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_82[Gvar.var_2459][Gvar.var_2463] == Gvar.var_226 ) {
                            await Func.func552();
                            Gvar.var_2507 = 1;
                        }
                        if ( Gvar.var_2507 == 0  &&  Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_82[Gvar.var_2459][Gvar.var_2464] == Gvar.var_226 ) {
                            await Func.func552();
                            Gvar.var_2507 = 1;
                        }
                    }
                }
                if ( Gvar.var_2507 == 1 ) {
                    Gvar.var_2506 = 1;
                }
                Gvar.var_2424 = Gvar.var_2424 + 1;
            }
            Gvar.var_131 = 0;
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        }
        // === DISC No.115: ゴールドエクスペリエンス(生命付与) ===
        if (Gvar.var_2494 == 115) {
            await Func.func538();
            await Func.func099();
            await Func.setMessage("生まれろ…　新しい生命…", "", 10, false, false, false);
            for (let cnt = 0; cnt < 16; ++cnt) {
                await Func.func337();
            }
            for (let cnt = 0; cnt < 8; ++cnt) {
                Gvar.var_2513 = 1;
                Gvar.var_443 = 1;
                await Func.func588();
                Gvar.var_2513 = 0;
                Gvar.var_443 = 0;
                if ( Gvar.var_2339 != 0 ) {
                    Gvar.var_2514 = Gvar.var_107;
                    Gvar.var_83[Gvar.var_2514].Var21 = 1;
                    Gvar.var_471 = 1;
                    for (let cnt = 0; cnt < 3; ++cnt) {
                        await Func.func337();
                    }
                    Gvar.var_471 = 2;
                    for (let cnt = 0; cnt < 3; ++cnt) {
                        await Func.func337();
                    }
                    Gvar.var_471 = 3;
                    for (let cnt = 0; cnt < 3; ++cnt) {
                        await Func.func337();
                    }
                    Gvar.var_471 = 4;
                    for (let cnt = 0; cnt < 3; ++cnt) {
                        await Func.func337();
                    }
                    Gvar.var_471 = 0;
                    Gvar.var_83[Gvar.var_2514].Var21 = 0;
                    Gvar.var_83[Gvar.var_2514].Var5 = 2;
                }
            }
            if ( Gvar.var_2444 == 1 ) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        // === DISC No.109: クロスファイヤーハリケーンスペシャル ===
        if (Gvar.var_2494 == 109) {
            await Func.func538();
            if (Gvar.var_193 == 1) {
                await Func.setMessage("発動能力がパワーアップしている！", "", 10, false, false, false);
                await Func.func358();
            }
            await Func.setMessage("クロスファイヤーハリケーンスペシャル！", "", 10, false, false, false);
            Adap.gsel(19);
            Adap.color(255, 0, 0);
            Adap.boxf(0, 0, 340, 340);
            Adap.gsel(0);
            Gvar.var_604 = 1;
            Adap.DSPLAY(128);
            Gvar.var_1712 = 7;
            await Func.func337();
            await Func.func337();
            Gvar.var_1712 = 8;
            await Func.func337();
            await Func.func337();
            for (let cnt = 0; cnt < 15; ++cnt) {
                Adap.DSPLAY(128);
                Gvar.var_1712 = 1;
                await Func.func337();
                Gvar.var_1712 = 2;
                await Func.func337();
            }
            Gvar.var_1712 = 0;
            for (let cnt = 0; cnt < 10; ++cnt) {
                for (let cnt = 0; cnt < 300; ++cnt) {
                    Gvar.var_1714 = Adap.rnd(Gvar.var_32);
                    Gvar.var_255 = Adap.rnd(Gvar.var_33);
                    if ( Gvar.var_82[Gvar.var_1714][Gvar.var_255] == Gvar.var_226  &&  Gvar.var_93[Gvar.var_1714][Gvar.var_255] != 0  &&  Gvar.var_82[Gvar.var_1714][Gvar.var_255] != 14 ) {
                        Gvar.var_489 = Gvar.var_93[Gvar.var_1714][Gvar.var_255];
                        Gvar.var_310 = 1;
                        Gvar.var_1713 = 1;
                        for (let cnt = 0; cnt < 10; ++cnt) {
                            await Func.func337();
                            Gvar.var_1713++;
                        }
                        Gvar.var_1713 = 0;
                        Gvar.var_457 = "クロスファイヤーハリケーンスペシャル！";
                        Gvar.var_268 = Gvar.var_83[Gvar.var_489].Var0;
                        await Func.func658();
                        Gvar.var_456 = Gvar.var_489;
                        Gvar.var_345 = Gvar.var_489;
                        Gvar.var_234 = Gvar.var_647 * 5;
                        Gvar.var_2457 = Adap.rnd(3);
                        Gvar.var_234 = Gvar.var_234 + Gvar.var_2457;
                        if ( Gvar.var_193 >= 1 ) {
                            Gvar.var_234 = Gvar.var_234 * 2;
                        }
                        await Func.func745();
                        break;
                    }
                    if ( Gvar.var_82[Gvar.var_1714][Gvar.var_255] == Gvar.var_226  &&  Gvar.var_88[Gvar.var_1714][Gvar.var_255] == 0  &&  Gvar.var_91[Gvar.var_1714][Gvar.var_255] == 0  &&  Gvar.var_84[Gvar.var_1714][Gvar.var_255] == 0  &&  Gvar.var_73[Gvar.var_1714][Gvar.var_255] == 0  &&  Gvar.var_93[Gvar.var_1714][Gvar.var_255] == 0  &&  Gvar.var_82[Gvar.var_1714][Gvar.var_255] != 14 ) {
                        Gvar.var_310 = 1;
                        Gvar.var_1713 = 1;
                        for (let cnt = 0; cnt < 10; ++cnt) {
                            await Func.func337();
                            Gvar.var_1713++;
                        }
                        Gvar.var_1713 = 0;
                        Gvar.var_869 = 1;
                        Gvar.var_2515 = 1;
                        await Func.func568();
                        Gvar.var_1549 = Gvar.var_1714;
                        Gvar.var_1550 = Gvar.var_255;
                        Gvar.var_1711 = 1;
                        Gvar.var_310 = 1;
                        Adap.DSPLAY(128);
                        for (let cnt = 0; cnt < 7; ++cnt) {
                            await Func.func337();
                            Gvar.var_1711++;
                        }
                        Gvar.var_1711 = 0;
                        Gvar.var_869 = 0;
                        Gvar.var_2515 = 0;
                        await Func.func348();
                        break;
                    }
                }
            }
            Gvar.var_1709 = 3;
            await Func.func337();
            Gvar.var_1709 = 2;
            await Func.func337();
            Gvar.var_1709 = 1;
            await Func.func337();
            Gvar.var_1709 = 0;
            Gvar.var_310 = 0;
            Gvar.var_604 = 0;
            if ( Gvar.var_2444 == 1 ) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        // === DISC No.301: アイテム回収 ===
        if (Gvar.var_2494 == 301) {
            await Func.func538();
            await Func.setMessage("アイテムを取って来いッ！", "", 10, false, false, false);
            Gvar.var_1640 = 1;
            Gvar.var_310 = 1;
            for (let cnt = 0; cnt < 20; ++cnt) {
                await Func.func337();
                Gvar.var_1640++;
            }
            Gvar.var_1640 = 0;
            Gvar.var_310 = 0;
            Gvar.var_2516 = Gvar.var_74 - 1;
            if ( Gvar.var_2516 < 0 ) {
                Gvar.var_2516 = 0;
            }
            Gvar.var_2517 = Gvar.var_74 + 1;
            if ( Gvar.var_2517 > Gvar.var_32 ) {
                Gvar.var_2517 = Gvar.var_32;
            }
            Gvar.var_2518 = Gvar.var_75 - 1;
            if ( Gvar.var_2518 < 0 ) {
                Gvar.var_2518 = 0;
            }
            Gvar.var_2519 = Gvar.var_75 + 1;
            if ( Gvar.var_2519 > Gvar.var_33 ) {
                Gvar.var_2519 = Gvar.var_33;
            }
            Gvar.var_378 = Gvar.var_74;
            Gvar.var_379 = Gvar.var_75;
            Gvar.var_2520 = 0;
            // ... (アイテム移動処理)
            if (Gvar.var_2520 == 0) {
                await Func.setMessage("１個も拾ってこなかったど！", "", 10, false, false, false);
            }
            if (Gvar.var_2520 >= 1) {
                await Func.setMessage("" + Gvar.var_2520 + "個　拾ってきた。", "", 10, false, false, false);
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        }
        // === DISC No.106: パールジャム(合成) ===
        if (Gvar.var_2494 == 106) {
            await Func.setMessage("ベースとなるアイテムを選んでください", "", 10, false, false, false);
            for (let cnt = 0; cnt < 4; ++cnt) {
                await Func.func337();
            }
            await Func.func358();
            Gvar.var_2527 = Gvar.var_250;
            Gvar.var_1375 = 1;
            if ( Gvar.var_245 == 1 ) {
                Gvar.var_2528 = 1;
            }
            Gvar.var_252 = 1;
            Gvar.var_253 = 45;
            Gvar.var_250 = 1;
            Gvar.var_248 = Gvar.var_249 + 10;
            Gvar.var_245 = 0;
            await Func.func054();
            Gvar.var_222 = 1;
            await Func.func493();
            }
        // === DISC No.300: パールジャム(食べる) ===
        if (Gvar.var_2494 == 300) {
            await Func.func538();
            await Func.setMessage("パールジャムを食べた。", "", 10, false, false, false);
            // 満腹度回復処理
            Gvar.var_381 = Gvar.var_381 + 50;
            if (Gvar.var_381 > Gvar.var_649) {
                Gvar.var_381 = Gvar.var_649;
            }
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "お腹が少し膨らんだ";
            Gvar.var_287 = "";
            if (Gvar.var_381 == Gvar.var_649) {
                Gvar.var_286 = "お腹がいっぱいになった。";
                Gvar.var_287 = "";
            }
            await Func.func050();
            await Func.func053();
            for (let cnt = 0; cnt < 5; ++cnt) {
                await Func.func337();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        }
        // === DISC No.108: マンインザミラー ===
        if (Gvar.var_2494 == 108) {
            await Func.func538();
            if (Gvar.var_652 == 0) { Gvar.var_475 = 11; }
            if (Gvar.var_652 == 1) { Gvar.var_475 = 1; }
            if (Gvar.var_652 == 2) { Gvar.var_475 = 16; }
            if (Gvar.var_652 == 3) { Gvar.var_475 = 29; }
            if (Gvar.var_652 == 4) { Gvar.var_475 = 40; }
            await Func.setMessage("こいつ自身に見せつけるしかねえッ！", "", 10, false, false, false);
            // 鏡の世界処理
            // ... (後半)
            await Func.setMessage("「覚悟」ってのはこういうことだぜ…", "", 10, false, false, false);
            // ジッパー処理
            // 床にジッパーをくっつけた！
            // このフロアにジッパーはつけられない
            // ここにジッパーはつけられない
            Gvar.var_242 = 1;
            await Func.func019();
        }
        // === DISC No.104: ザ・ハンド(空間削り) ===
        if (Gvar.var_2494 == 104) {
            await Func.func538();
            if (Gvar.var_652 == 0) { Gvar.var_475 = 11; }
            if (Gvar.var_652 == 1) { Gvar.var_475 = 1; }
            if (Gvar.var_652 == 2) { Gvar.var_475 = 16; }
            if (Gvar.var_652 == 3) { Gvar.var_475 = 29; }
            if (Gvar.var_652 == 4) { Gvar.var_475 = 40; }
            Gvar.var_476 = 1;
            await Func.setMessage("空間をけずりとる！ ", "……するとお～～～～っ！", 10, false, false, false);
            Gvar.var_284 = "……するとお～～～～っ！";
            for (let cnt = 0; cnt < 5; ++cnt) {
                await Func.func337();
            }
            await Func.func358();
            Gvar.var_523 = Gvar.var_74;
            Gvar.var_524 = Gvar.var_75;
            if ( Gvar.var_224 == 4 ) {
                Gvar.var_523 = Gvar.var_523 - 1;
            }
            if ( Gvar.var_224 == 6 ) {
                Gvar.var_523 = Gvar.var_523 + 1;
            }
            if ( Gvar.var_224 == 8 ) {
                Gvar.var_524 = Gvar.var_524 - 1;
            }
            if ( Gvar.var_224 == 2 ) {
                Gvar.var_524 = Gvar.var_524 + 1;
            }
            if ( Gvar.var_224 == 1 ) {
                Gvar.var_523 = Gvar.var_523 - 1;
                Gvar.var_524 = Gvar.var_524 + 1;
            }
            if ( Gvar.var_224 == 3 ) {
                Gvar.var_523 = Gvar.var_523 + 1;
                Gvar.var_524 = Gvar.var_524 + 1;
            }
            if ( Gvar.var_224 == 7 ) {
                Gvar.var_523 = Gvar.var_523 - 1;
                Gvar.var_524 = Gvar.var_524 - 1;
            }
            if ( Gvar.var_224 == 9 ) {
                Gvar.var_523 = Gvar.var_523 + 1;
                Gvar.var_524 = Gvar.var_524 - 1;
            }
            Gvar.var_2530 = Gvar.var_523;
            Gvar.var_2531 = Gvar.var_524;
            Gvar.var_2532 = Gvar.var_74;
            Gvar.var_2533 = Gvar.var_75;
            Gvar.var_523 = Gvar.var_74;
            Gvar.var_524 = Gvar.var_75;
            for (let cnt = 0; cnt < 40; ++cnt) {
                Gvar.var_2118 = Gvar.var_523;
                Gvar.var_2119 = Gvar.var_524;
                if ( Gvar.var_224 == 4 ) {
                    Gvar.var_523 = Gvar.var_523 - 1;
                }
                if ( Gvar.var_224 == 6 ) {
                    Gvar.var_523 = Gvar.var_523 + 1;
                }
                if ( Gvar.var_224 == 8 ) {
                    Gvar.var_524 = Gvar.var_524 - 1;
                }
                if ( Gvar.var_224 == 2 ) {
                    Gvar.var_524 = Gvar.var_524 + 1;
                }
                if ( Gvar.var_224 == 1 ) {
                    Gvar.var_523 = Gvar.var_523 - 1;
                    Gvar.var_524 = Gvar.var_524 + 1;
                }
                if ( Gvar.var_224 == 3 ) {
                    Gvar.var_523 = Gvar.var_523 + 1;
                    Gvar.var_524 = Gvar.var_524 + 1;
                }
                if ( Gvar.var_224 == 7 ) {
                    Gvar.var_523 = Gvar.var_523 - 1;
                    Gvar.var_524 = Gvar.var_524 - 1;
                }
                if ( Gvar.var_224 == 9 ) {
                    Gvar.var_523 = Gvar.var_523 + 1;
                    Gvar.var_524 = Gvar.var_524 - 1;
                }
                if ( Gvar.var_523 < 5  ||  Gvar.var_523 > Gvar.var_32  ||  Gvar.var_524 < 5  ||  Gvar.var_524 > Gvar.var_33 ) {
                    Gvar.var_523 = Gvar.var_2118;
                    Gvar.var_524 = Gvar.var_2119;
                }
                if ( Gvar.var_82[Gvar.var_523][Gvar.var_524] == 0 ) {
                    break;
                }
                if ( Gvar.var_93[Gvar.var_523][Gvar.var_524] > 0  ||  Gvar.var_88[Gvar.var_523][Gvar.var_524] > 0  ||  (Gvar.var_162 == 1  ||  (Gvar.var_177[218] == 1  &&  Gvar.var_176 == 0)  &&  Gvar.var_91[Gvar.var_523][Gvar.var_524] > 0) ) {
                    if ( Gvar.var_162 == 1  ||  (Gvar.var_177[218] == 1  &&  Gvar.var_176 == 0)  &&  Gvar.var_91[Gvar.var_523][Gvar.var_524] > 0 ) {
                        if ( Gvar.var_84[Gvar.var_2532][Gvar.var_2533] >= 1  ||  Gvar.var_88[Gvar.var_2532][Gvar.var_2533] != 0  ||  Gvar.var_91[Gvar.var_2532][Gvar.var_2533] != 0 ) {
                            if ( Gvar.var_224 == 4 ) {
                                Gvar.var_2532 = Gvar.var_2532 - 1;
                            }
                            if ( Gvar.var_224 == 6 ) {
                                Gvar.var_2532 = Gvar.var_2532 + 1;
                            }
                            if ( Gvar.var_224 == 8 ) {
                                Gvar.var_2533 = Gvar.var_2533 - 1;
                            }
                            if ( Gvar.var_224 == 2 ) {
                                Gvar.var_2533 = Gvar.var_2533 + 1;
                            }
                            if ( Gvar.var_224 == 1 ) {
                                Gvar.var_2532 = Gvar.var_2532 - 1;
                                Gvar.var_2533 = Gvar.var_524 + 1;
                            }
                            if ( Gvar.var_224 == 3 ) {
                                Gvar.var_2532 = Gvar.var_2532 + 1;
                                Gvar.var_2533 = Gvar.var_524 + 1;
                            }
                            if ( Gvar.var_224 == 7 ) {
                                Gvar.var_2532 = Gvar.var_2532 - 1;
                                Gvar.var_2533 = Gvar.var_524 - 1;
                            }
                            if ( Gvar.var_224 == 9 ) {
                                Gvar.var_2532 = Gvar.var_2532 + 1;
                                Gvar.var_2533 = Gvar.var_524 - 1;
                            }
                        }
                        Gvar.var_2534 = Gvar.var_91[Gvar.var_523][Gvar.var_524];
                        Gvar.var_91[Gvar.var_523][Gvar.var_524] = 0;
                        Gvar.var_92[Gvar.var_2534][1] = Gvar.var_2532;
                        Gvar.var_92[Gvar.var_2534][2] = Gvar.var_2533;
                        Gvar.var_91[Gvar.var_2532][Gvar.var_2533] = Gvar.var_2534;
                    }
                    if ( Gvar.var_93[Gvar.var_523][Gvar.var_524] > 0 ) {
                        Gvar.var_2534 = Gvar.var_93[Gvar.var_523][Gvar.var_524];
                        Gvar.var_93[Gvar.var_523][Gvar.var_524] = 0;
                        if ( Gvar.var_82[Gvar.var_2530][Gvar.var_2531] == 13 ) {
                            Gvar.var_2535 = Gvar.var_2530 - 1;
                            if ( Gvar.var_2535 < 0 ) {
                                Gvar.var_2535 = 0;
                            }
                            Gvar.var_2536 = Gvar.var_2530 + 1;
                            if ( Gvar.var_2536 > Gvar.var_32 ) {
                                Gvar.var_2536 = Gvar.var_32;
                            }
                            Gvar.var_2537 = Gvar.var_2531 + 1;
                            if ( Gvar.var_2537 > Gvar.var_33 ) {
                                Gvar.var_2537 = Gvar.var_33;
                            }
                            Gvar.var_2538 = Gvar.var_2531 - 1;
                            if ( Gvar.var_2538 < 0 ) {
                                Gvar.var_2538 = 0;
                            }
                            Gvar.var_2539 = 0;
                            if ( Gvar.var_2539 == 0  &&  Gvar.var_82[Gvar.var_2535][Gvar.var_2537] != 0  &&  Gvar.var_82[Gvar.var_2535][Gvar.var_2537] != 13  &&  Gvar.var_93[Gvar.var_2535][Gvar.var_2537] == 0  &&  Gvar.var_73[Gvar.var_2535][Gvar.var_2537] == 0 ) {
                                Gvar.var_2530 = Gvar.var_2535;
                                Gvar.var_2531 = Gvar.var_2537;
                                Gvar.var_2539 = 1;
                            }
                            if ( Gvar.var_2539 == 0  &&  Gvar.var_82[Gvar.var_2536][Gvar.var_2537] != 0  &&  Gvar.var_82[Gvar.var_2536][Gvar.var_2537] != 13  &&  Gvar.var_93[Gvar.var_2536][Gvar.var_2537] == 0  &&  Gvar.var_73[Gvar.var_2536][Gvar.var_2537] == 0 ) {
                                Gvar.var_2530 = Gvar.var_2536;
                                Gvar.var_2531 = Gvar.var_2537;
                                Gvar.var_2539 = 1;
                            }
                            if ( Gvar.var_2539 == 0  &&  Gvar.var_82[Gvar.var_2535][Gvar.var_2538] != 0  &&  Gvar.var_82[Gvar.var_2535][Gvar.var_2538] != 13  &&  Gvar.var_93[Gvar.var_2535][Gvar.var_2538] == 0  &&  Gvar.var_73[Gvar.var_2535][Gvar.var_2538] == 0 ) {
                                Gvar.var_2530 = Gvar.var_2535;
                                Gvar.var_2531 = Gvar.var_2538;
                                Gvar.var_2539 = 1;
                            }
                            if ( Gvar.var_2539 == 0  &&  Gvar.var_82[Gvar.var_2536][Gvar.var_2538] != 0  &&  Gvar.var_82[Gvar.var_2536][Gvar.var_2538] != 13  &&  Gvar.var_93[Gvar.var_2536][Gvar.var_2538] == 0  &&  Gvar.var_73[Gvar.var_2536][Gvar.var_2538] == 0 ) {
                                Gvar.var_2530 = Gvar.var_2536;
                                Gvar.var_2531 = Gvar.var_2538;
                                Gvar.var_2539 = 1;
                            }
                            if ( Gvar.var_2539 == 0  &&  Gvar.var_82[Gvar.var_2535][Gvar.var_2119] != 0  &&  Gvar.var_82[Gvar.var_2535][Gvar.var_2119] != 13  &&  Gvar.var_93[Gvar.var_2535][Gvar.var_2119] == 0  &&  Gvar.var_73[Gvar.var_2535][Gvar.var_2119] == 0 ) {
                                Gvar.var_2530 = Gvar.var_2535;
                                Gvar.var_2539 = 1;
                            }
                            if ( Gvar.var_2539 == 0  &&  Gvar.var_82[Gvar.var_2536][Gvar.var_2119] != 0  &&  Gvar.var_82[Gvar.var_2536][Gvar.var_2119] != 13  &&  Gvar.var_93[Gvar.var_2536][Gvar.var_2119] == 0  &&  Gvar.var_73[Gvar.var_2536][Gvar.var_2119] == 0 ) {
                                Gvar.var_2530 = Gvar.var_2536;
                                Gvar.var_2539 = 1;
                            }
                            if ( Gvar.var_2539 == 0  &&  Gvar.var_82[Gvar.var_2118][Gvar.var_2537] != 0  &&  Gvar.var_82[Gvar.var_2118][Gvar.var_2537] != 13  &&  Gvar.var_93[Gvar.var_2118][Gvar.var_2537] == 0  &&  Gvar.var_73[Gvar.var_2118][Gvar.var_2537] == 0 ) {
                                Gvar.var_2531 = Gvar.var_2537;
                                Gvar.var_2539 = 1;
                            }
                            if ( Gvar.var_2539 == 0  &&  Gvar.var_82[Gvar.var_2118][Gvar.var_2538] != 0  &&  Gvar.var_82[Gvar.var_2118][Gvar.var_2538] != 13  &&  Gvar.var_93[Gvar.var_2118][Gvar.var_2538] == 0  &&  Gvar.var_73[Gvar.var_2118][Gvar.var_2538] == 0 ) {
                                Gvar.var_2531 = Gvar.var_2538;
                                Gvar.var_2539 = 1;
                            }
                        }
                        Gvar.var_83[Gvar.var_2534].Var1 = Gvar.var_2530;
                        Gvar.var_83[Gvar.var_2534].Var2 = Gvar.var_2531;
                        Gvar.var_93[Gvar.var_2530][Gvar.var_2531] = Gvar.var_2534;
                    }
                    if ( Gvar.var_88[Gvar.var_523][Gvar.var_524] > 0 ) {
                        if ( Gvar.var_84[Gvar.var_2532][Gvar.var_2533] >= 1  ||  Gvar.var_88[Gvar.var_2532][Gvar.var_2533] != 0 ) {
                            if ( Gvar.var_224 == 4 ) {
                                Gvar.var_2532 = Gvar.var_2532 - 1;
                            }
                            if ( Gvar.var_224 == 6 ) {
                                Gvar.var_2532 = Gvar.var_2532 + 1;
                            }
                            if ( Gvar.var_224 == 8 ) {
                                Gvar.var_2533 = Gvar.var_2533 - 1;
                            }
                            if ( Gvar.var_224 == 2 ) {
                                Gvar.var_2533 = Gvar.var_2533 + 1;
                            }
                            if ( Gvar.var_224 == 1 ) {
                                Gvar.var_2532 = Gvar.var_2532 - 1;
                                Gvar.var_2533 = Gvar.var_524 + 1;
                            }
                            if ( Gvar.var_224 == 3 ) {
                                Gvar.var_2532 = Gvar.var_2532 + 1;
                                Gvar.var_2533 = Gvar.var_524 + 1;
                            }
                            if ( Gvar.var_224 == 7 ) {
                                Gvar.var_2532 = Gvar.var_2532 - 1;
                                Gvar.var_2533 = Gvar.var_524 - 1;
                            }
                            if ( Gvar.var_224 == 9 ) {
                                Gvar.var_2532 = Gvar.var_2532 + 1;
                                Gvar.var_2533 = Gvar.var_524 - 1;
                            }
                        }
                        Gvar.var_2534 = Gvar.var_88[Gvar.var_523][Gvar.var_524];
                        Gvar.var_88[Gvar.var_523][Gvar.var_524] = 0;
                        Gvar.var_89[Gvar.var_2534][1] = Gvar.var_2532;
                        Gvar.var_89[Gvar.var_2534][2] = Gvar.var_2533;
                        Gvar.var_88[Gvar.var_2532][Gvar.var_2533] = Gvar.var_2534;
                    }
                    for (let cnt = 0; cnt < 20; ++cnt) {
                        await Func.func337();
                    }
                    break;
                }
            }
            Gvar.var_476 = 0;
            Gvar.var_389 = Gvar.var_477;
            if ( Gvar.var_2444 == 1 ) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            if ( Gvar.var_83[Gvar.var_74][Gvar.var_75] == 0  &&  Gvar.var_96 == 0  &&  Gvar.var_184 == 0 ) {
                await Func.func762();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            }
            Gvar.var_476 = 0;
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        // === DISC No.101: シルバーチャリオッツ(分身) ===
        if (Gvar.var_2494 == 101) {
            if (Gvar.var_488 != 0) {
                await Func.setMessage("チャリオッツは分身中だ。", "", 10, false, false, false);
                for (let cnt = 0; cnt < 5; ++cnt) {
                    await Func.func337();
                }
                Gvar.var_259 = 0;
                Gvar.var_245 = 0;
            }
            // 分身出現判定
            // チャリオッツを出せる場所が無いぞ。
            await Func.func538();
            await Func.func099();
            await Func.setMessage("ブラボー！", "おお…　ブラボー！！", 10, false, false, false);
            // 甲冑脱ぎアニメーション
            await Func.func099();
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "フフフ･･･";
            Gvar.var_287 = "感覚の目でよーく見てろ！";
            await Func.func053();
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            await Func.func050();
            for (let cnt = 0; cnt < 5; ++cnt) {
                await Func.func337();
            }
            Gvar.var_259 = 0;
            Gvar.var_245 = 0;
            await Func.func009();
            }
            Gvar.var_2540 = 1;
            Gvar.var_443 = 1;
            await Func.func588();
            Gvar.var_83[Gvar.var_445].Var11 = 1;
            Gvar.var_2540 = 0;
            Gvar.var_443 = 0;
            if ( Gvar.var_2339 == 0 ) {
                await Func.setMessage("チャリオッツを出せる場所が無いぞ。", "", 10, false, false, false);
                for (let cnt = 0; cnt < 5; ++cnt) {
                    await Func.func337();
                }
                Gvar.var_259 = 0;
                Gvar.var_245 = 0;
                await Func.func009();
            }
            await Func.func538();
            for (let cnt = 0; cnt < 7; ++cnt) {
                Gvar.var_2540 = 1;
                Gvar.var_443 = 1;
                await Func.func588();
                Gvar.var_83[Gvar.var_445].Var11 = 1;
                Gvar.var_2540 = 0;
                Gvar.var_443 = 0;
            }
            Gvar.var_488 = 7;
            await Func.func099();
            await Func.setMessage("ブラボー！", "おお…　ブラボー！！", 10, false, false, false);
            for (let cnt = 0; cnt < 2; ++cnt) {
                Gvar.var_1395 = 1;
                await Func.func337();
                await Func.func337();
                Gvar.var_1395 = 2;
                await Func.func337();
                await Func.func337();
                Gvar.var_1395 = 3;
                await Func.func337();
                await Func.func337();
                await Func.func337();
                await Func.func337();
                Gvar.var_1395 = 2;
                await Func.func337();
                await Func.func337();
                Gvar.var_1395 = 1;
                await Func.func337();
                await Func.func337();
            }
            await Func.func099();
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "フフフ･･･";
            Gvar.var_287 = "感覚の目でよーく見てろ！";
            await Func.func053();
            for (let cnt = 0; cnt < 2; ++cnt) {
                Gvar.var_1395 = 1;
                await Func.func337();
                await Func.func337();
                Gvar.var_1395 = 2;
                await Func.func337();
                await Func.func337();
                Gvar.var_1395 = 3;
                await Func.func337();
                await Func.func337();
                await Func.func337();
                await Func.func337();
                Gvar.var_1395 = 2;
                await Func.func337();
                await Func.func337();
                Gvar.var_1395 = 1;
                await Func.func337();
                await Func.func337();
            }
            Gvar.var_1395 = 0;
            Gvar.var_224 = 2;
            await Func.func337();
            for (let cnt = 0; cnt < Gvar.var_107 + 1; ++cnt) {
                if ( Gvar.var_83[cnt].Var0 == 146  &&  Gvar.var_83[cnt].Var31 == 5 ) {
                    Gvar.var_83[cnt].Var11 = 0;
                }
            }
            Adap.DSPLAY(112);
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "これだ！　甲冑を外したスタンド";
            Gvar.var_287 = "「シルバー・チャリオッツ」！";
            await Func.func053();
            await Func.func348();
            for (let cnt = 0; cnt < 20; ++cnt) {
                await Func.func337();
            }
            if ( Gvar.var_2444 == 1 ) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "これだ！　甲冑を外したスタンド";
            Gvar.var_287 = "「シルバー・チャリオッツ」！";
            await Func.func053();
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            await Func.func050();
            await Func.func348();
            for (let cnt = 0; cnt < 20; ++cnt) {
                await Func.func337();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        // === DISC No.319: 能力消去DISC選択 ===
        if (Gvar.var_2494 == 319) {
            await Func.setMessage("能力を消すDISCを選んでください", "", 10, false, false, false);
            for (let cnt = 0; cnt < 4; ++cnt) {
                await Func.func337();
            }
            await Func.func358();
            Gvar.var_2541 = Gvar.var_250;
            Gvar.var_2542 = 0;
            if ( Gvar.var_245 != 0 ) {
                Gvar.var_2542 = 1;
            }
            if ( Gvar.var_259 != 0 ) {
                Gvar.var_2542 = 2;
            }
            Gvar.var_2234 = 1;
            Gvar.var_252 = 1;
            Gvar.var_253 = 45;
            Gvar.var_250 = 1;
            Gvar.var_248 = Gvar.var_249 + 10;
            Gvar.var_245 = 0;
            await Func.func054();
            Gvar.var_222 = 1;
            await Func.func493();
            }
        // === DISC No.111/398: ザ・ワールド / スタープラチナ・ザ・ワールド ===
        if (Gvar.var_2494 == 111 || Gvar.var_2494 == 398) {
            await Func.func538();
            Gvar.var_184 = 1;
            Gvar.var_185 = 1;
            Gvar.var_170 = 0;
            if (Gvar.var_2494 == 111) {
                await Func.setMessage("「ザ・ワールド」！！", "時よ止まれ！", 10, false, false, false);
            }
            if (Gvar.var_2494 == 398) {
                await Func.setMessage("「スタープラチナ・ザ・ワールド」！！", "時は止まる・・・", 10, false, false, false);
            }
            Gvar.var_131 = 0;
            Adap.DSPLAY(185);
            Gvar.var_310 = 1;
            Gvar.var_1648 = 1;
            for (let cnt = 0; cnt < 20; ++cnt) {
                await Func.func337();
                Gvar.var_1648++;
            }
            Gvar.var_310 = 0;
            Gvar.var_1648 = 0;
            for (let cnt = 0; cnt < 5; ++cnt) {
                await Func.func337();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
        }
        // === DISC No.201: イエローテンパランス ===
        if (Gvar.var_2494 == 201) {
            await Func.func538();
            await Func.setMessage("このオレのスタンド「黄の節制」に", "弱点はない！", 10, false, false, false);
            Gvar.var_284 = "弱点はない！";
            Adap.DSPLAY(123);
            Gvar.var_310 = 1;
            Gvar.var_1455 = 1;
            Gvar.var_406 = 1;
            for (let cnt = 0; cnt < 20; ++cnt) {
                await Func.func337();
                Gvar.var_1455++;
                if ( Gvar.var_1455 == 7 ) {
                    Gvar.var_1455 = 1;
                }
            }
            Gvar.var_406 = 0;
            Gvar.var_310 = 0;
            Gvar.var_1455 = 0;
            if ( Gvar.var_131 != 0 ) {
                if ( Gvar.var_83[Gvar.var_131].Var0 == 78 ) {
                    Gvar.var_131 = 0;
                }
            }
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "このフロアで熱と冷気に強くなった！";
            await Func.func053();
            await Func.func358();
            Gvar.var_194 = 1;
            for (let cnt = 0; cnt < 15; ++cnt) {
                await Func.func337();
            }
            if ( Gvar.var_2444 == 1 ) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            }
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "このフロアで熱と冷気に強くなった！";
            Gvar.var_287 = "";
            await Func.func050();
            await Func.func053();
            await Func.func358();
            Gvar.var_194 = 1;
            for (let cnt = 0; cnt < 15; ++cnt) {
                await Func.func337();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        // === DISC No.310: 敵召集 ===
        if (Gvar.var_2494 == 310) {
            await Func.func538();
            if ( Gvar.var_463 == 1  &&  Gvar.var_611 == 1  &&  Gvar.var_70 == Math.floor(Gvar.var_1170[12]) ) {
                await Func.func0974();
            }
            Gvar.var_443 = 1;
            await Func.func588();
            Gvar.var_443 = 0;
            if ( Gvar.var_2339 != 0 ) {
                for (let cnt = 0; cnt < 3; ++cnt) {
                    Gvar.var_443 = 1;
                    await Func.func588();
                    Gvar.var_443 = 0;
                }
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "敵が集まってしまった！";
            Gvar.var_287 = "";
            await Func.func053();
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            await Func.func050();
            for (let cnt = 0; cnt < 15; ++cnt) {
                await Func.func337();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        }
        // === DISC No.403: 食べるDISC選択 ===
        if (Gvar.var_2494 == 403) {
            await Func.setMessage("どれを食べますか？", "", 10, false, false, false);
            await Func.func358();
            Gvar.var_2541 = Gvar.var_250;
            Gvar.var_2542 = 0;
            if ( Gvar.var_245 != 0 ) {
                Gvar.var_2542 = 1;
            }
            if ( Gvar.var_259 != 0 ) {
                Gvar.var_2542 = 2;
            }
            Gvar.var_2232 = 1;
            Gvar.var_252 = 1;
            Gvar.var_253 = 45;
            Gvar.var_250 = 1;
            Gvar.var_248 = Gvar.var_249 + 10;
            Gvar.var_245 = 0;
            await Func.func054();
            Gvar.var_222 = 1;
            await Func.func493();
            }
        }
        // === DISC No.120: ストーンフリー ===
        if (Gvar.var_2494 == 120) {
            await Func.func538();
            await Func.setMessage("『ストーンフリーーッ！』", "", 10, false, false, false);
            for (let cnt = 0; cnt < 5; ++cnt) {
                await Func.func337();
            }
            Gvar.var_1722 = 160;
            Gvar.var_1723 = 160;
            Gvar.var_310 = 1;
            Gvar.var_1721 = 1;
            for (let cnt = 0; cnt < 20; ++cnt) {
                await Func.func337();
                Gvar.var_1721++;
            }
            Gvar.var_310 = 0;
            Gvar.var_1721 = 0;
            Gvar.var_236 = Gvar.var_383;
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "傷口を縫って体力が回復した。";
            Gvar.var_287 = "";
            await Func.func053();
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            await Func.func050();
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        }
        // === DISC No.126: C-MOON(重力変化) ===
        if (Gvar.var_2494 == 126) {
            await Func.func538();
            await Func.setMessage("ディアボロを中心に重力が変わる！", "", 10, false, false, false);
            await Func.func358();
            Gvar.var_2505 = 0;
            Gvar.var_2167 = Gvar.var_224;
            Gvar.var_224 = 2;
            Gvar.var_310 = 1;
            Gvar.var_1547 = 1;
            for (let cnt = 0; cnt < 30; ++cnt) {
                await Func.func337();
                if ( Gvar.var_1547 == 1 ) {
                    Adap.DSPLAY(161);
                }
                Gvar.var_1547++;
            }
            Gvar.var_310 = 0;
            Gvar.var_1547 = 0;
            Gvar.var_2220 = 1;
            Gvar.var_2543 = 0;
            Gvar.var_2221 = Gvar.var_74 - 1;
            Gvar.var_2222 = Gvar.var_74 + 1;
            Gvar.var_2223 = Gvar.var_75 + 1;
            Gvar.var_2224 = Gvar.var_75 - 1;
            Gvar.var_2544 = 0;
            Gvar.var_2545 = 0;
            Gvar.var_2546 = 0;
            Gvar.var_2547 = 0;
            Gvar.var_2548 = 0;
            Gvar.var_2549 = 0;
            Gvar.var_2550 = 0;
            Gvar.var_2551 = 0;
            for (let cnt = 0; cnt < Gvar.var_107; ++cnt) {
                if ( Gvar.var_83[Gvar.var_2220].Var1 == Gvar.var_74  &&  Gvar.var_83[Gvar.var_2220].Var2 == Gvar.var_2223 ) {
                    Gvar.var_2544 = 1;
                    Gvar.var_2543 = 1;
                }
                if ( Gvar.var_83[Gvar.var_2220].Var1 == Gvar.var_74  &&  Gvar.var_83[Gvar.var_2220].Var2 == Gvar.var_2224 ) {
                    Gvar.var_2545 = 1;
                    Gvar.var_2543 = 1;
                }
                if ( Gvar.var_83[Gvar.var_2220].Var1 == Gvar.var_2221  &&  Gvar.var_83[Gvar.var_2220].Var2 == Gvar.var_75 ) {
                    Gvar.var_2546 = 1;
                    Gvar.var_2543 = 1;
                }
                if ( Gvar.var_83[Gvar.var_2220].Var1 == Gvar.var_2222  &&  Gvar.var_83[Gvar.var_2220].Var2 == Gvar.var_75 ) {
                    Gvar.var_2547 = 1;
                    Gvar.var_2543 = 1;
                }
                if ( Gvar.var_83[Gvar.var_2220].Var1 == Gvar.var_2221  &&  Gvar.var_83[Gvar.var_2220].Var2 == Gvar.var_2223 ) {
                    Gvar.var_2548 = 1;
                    Gvar.var_2543 = 1;
                }
                if ( Gvar.var_83[Gvar.var_2220].Var1 == Gvar.var_2222  &&  Gvar.var_83[Gvar.var_2220].Var2 == Gvar.var_2223 ) {
                    Gvar.var_2549 = 1;
                    Gvar.var_2543 = 1;
                }
                if ( Gvar.var_83[Gvar.var_2220].Var1 == Gvar.var_2221  &&  Gvar.var_83[Gvar.var_2220].Var2 == Gvar.var_2224 ) {
                    Gvar.var_2550 = 1;
                    Gvar.var_2543 = 1;
                }
                if ( Gvar.var_83[Gvar.var_2220].Var1 == Gvar.var_2222  &&  Gvar.var_83[Gvar.var_2220].Var2 == Gvar.var_2224 ) {
                    Gvar.var_2551 = 1;
                    Gvar.var_2543 = 1;
                }
                Gvar.var_2220 = Gvar.var_2220 + 1;
            }
            if ( Gvar.var_2544 == 1 ) {
                Gvar.var_83[Gvar.var_2220].Var12 = 0;
                Gvar.var_2552 = 1;
                Gvar.var_523 = Gvar.var_74;
                Gvar.var_524 = Gvar.var_2223;
                Gvar.var_345 = Gvar.var_2220;
                Gvar.var_224 = 2;
                await Func.func697();
                Gvar.var_2552 = 0;
                Gvar.var_2543 = 1;
            }
            if ( Gvar.var_2545 == 1 ) {
                Gvar.var_83[Gvar.var_2220].Var12 = 0;
                Gvar.var_2552 = 1;
                Gvar.var_523 = Gvar.var_74;
                Gvar.var_524 = Gvar.var_2224;
                Gvar.var_345 = Gvar.var_2220;
                Gvar.var_224 = 8;
                await Func.func697();
                Gvar.var_2552 = 0;
                Gvar.var_2543 = 1;
            }
            if ( Gvar.var_2546 == 1 ) {
                Gvar.var_83[Gvar.var_2220].Var12 = 0;
                Gvar.var_2552 = 1;
                Gvar.var_523 = Gvar.var_2221;
                Gvar.var_524 = Gvar.var_75;
                Gvar.var_345 = Gvar.var_2220;
                Gvar.var_224 = 4;
                await Func.func697();
                Gvar.var_2552 = 0;
                Gvar.var_2543 = 1;
            }
            if ( Gvar.var_2547 == 1 ) {
                Gvar.var_83[Gvar.var_2220].Var12 = 0;
                Gvar.var_2552 = 1;
                Gvar.var_523 = Gvar.var_2222;
                Gvar.var_524 = Gvar.var_75;
                Gvar.var_345 = Gvar.var_2220;
                Gvar.var_224 = 6;
                await Func.func697();
                Gvar.var_2552 = 0;
                Gvar.var_2543 = 1;
            }
            if ( Gvar.var_2548 == 1 ) {
                Gvar.var_83[Gvar.var_2220].Var12 = 0;
                Gvar.var_2552 = 1;
                Gvar.var_523 = Gvar.var_2221;
                Gvar.var_524 = Gvar.var_2223;
                Gvar.var_345 = Gvar.var_2220;
                Gvar.var_224 = 1;
                await Func.func697();
                Gvar.var_2552 = 0;
                Gvar.var_2543 = 1;
            }
            if ( Gvar.var_2549 == 1 ) {
                Gvar.var_83[Gvar.var_2220].Var12 = 0;
                Gvar.var_2552 = 1;
                Gvar.var_523 = Gvar.var_2222;
                Gvar.var_524 = Gvar.var_2223;
                Gvar.var_345 = Gvar.var_2220;
                Gvar.var_224 = 3;
                await Func.func697();
                Gvar.var_2552 = 0;
                Gvar.var_2543 = 1;
            }
            if ( Gvar.var_2550 == 1 ) {
                Gvar.var_83[Gvar.var_2220].Var12 = 0;
                Gvar.var_2552 = 1;
                Gvar.var_523 = Gvar.var_2221;
                Gvar.var_524 = Gvar.var_2224;
                Gvar.var_345 = Gvar.var_2220;
                Gvar.var_224 = 7;
                await Func.func697();
                Gvar.var_2552 = 0;
                Gvar.var_2543 = 1;
            }
            if ( Gvar.var_2551 == 1 ) {
                Gvar.var_83[Gvar.var_2220].Var12 = 0;
                Gvar.var_2552 = 1;
                Gvar.var_523 = Gvar.var_2222;
                Gvar.var_524 = Gvar.var_2224;
                Gvar.var_345 = Gvar.var_2220;
                Gvar.var_224 = 9;
                await Func.func697();
                Gvar.var_2552 = 0;
                Gvar.var_2543 = 1;
            }
            await Func.setMessage("しかし何も起こらなかった…", "逆転して落ちるッ！", 10, false, false, false);
            if ( Gvar.var_2543 == 1 ) {
                Gvar.var_131 = 0;
                Gvar.var_532 = 0;
                Gvar.var_533 = 0;
                Gvar.var_530 = 0;
                Gvar.var_531 = 0;
            }
            for (let cnt = 0; cnt < 20; ++cnt) {
                await Func.func337();
            }
            if ( Gvar.var_2444 == 1 ) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            }
            if (Gvar.var_2543 == 1) {
                Gvar.var_283 = "重力はわたしの肉体に対し";
                Gvar.var_284 = "逆転して落ちるッ！";
            }
            if (Gvar.var_2543 == 0) {
                Gvar.var_283 = "しかし何も起こらなかった…";
            }
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            await Func.func050();
            for (let cnt = 0; cnt < 20; ++cnt) {
                await Func.func337();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        // === DISC No.200: スーパーフライ(鉄塔) ===
        if (Gvar.var_2494 == 200) {
            if (Gvar.var_84[Gvar.var_74][Gvar.var_75] != 0) {
                await Func.setMessage("ここには鉄塔を建てられない。", "", 10, false, false, false);
                for (let cnt = 0; cnt < 5; ++cnt) {
                    await Func.func337();
                }
            }
            await Func.func538();
            await Func.setMessage("「スーパーフライ！」", "", 10, false, false, false);
            await Func.func358();
            Gvar.var_164 = Gvar.var_74;
            Gvar.var_165 = Gvar.var_75;
            Gvar.var_163 = 1;
            Adap.DSPLAY(188);
            Gvar.var_131 = 0;
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "鉄塔を建てた！";
            Gvar.var_287 = "";
            await Func.func053();
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            await Func.func050();
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        }
        // === DISC No.205: ペットショップ(氷固定) ===
        if (Gvar.var_2494 == 205) {
            await Func.func538();
            if (Gvar.var_652 == 0) { Gvar.var_475 = 11; }
            if (Gvar.var_652 == 1) { Gvar.var_475 = 1; }
            if (Gvar.var_652 == 2) { Gvar.var_475 = 16; }
            if (Gvar.var_652 == 3) { Gvar.var_475 = 29; }
            if (Gvar.var_652 == 4) { Gvar.var_475 = 40; }
            if (Gvar.var_193 == 1) {
                await Func.setMessage("発動能力がパワーアップしている！", "", 10, false, false, false);
                await Func.func358();
            }
            if ( Gvar.var_2494 == 205 ) {
                await Func.func538();
                if ( Gvar.var_652 == 0 ) {
                    Gvar.var_475 = 11;
                }
                if ( Gvar.var_652 == 1 ) {
                    Gvar.var_475 = 1;
                }
                if ( Gvar.var_652 == 2 ) {
                    Gvar.var_475 = 16;
                }
                if ( Gvar.var_652 == 3 ) {
                    Gvar.var_475 = 29;
                }
                if ( Gvar.var_652 == 4 ) {
                    Gvar.var_475 = 40;
                }
                if ( Gvar.var_193 == 1 ) {
                    await Func.setMessage("発動能力がパワーアップしている！", "", 10, false, false, false);
                    await Func.func358();
                }
                for (let cnt = 0; cnt < 10; ++cnt) {
                    await Func.func337();
                }
                Gvar.var_2220 = 1;
                Gvar.var_2543 = 0;
                Gvar.var_2221 = Gvar.var_74 - 1;
                Gvar.var_2222 = Gvar.var_74 + 1;
                Gvar.var_2223 = Gvar.var_75 + 1;
                Gvar.var_2224 = Gvar.var_75 - 1;
                for (let cnt = 0; cnt < Gvar.var_107; ++cnt) {
                    if ( Gvar.var_83[Gvar.var_2220].Var1 == Gvar.var_74  &&  Gvar.var_83[Gvar.var_2220].Var2 == Gvar.var_2223 ) {
                        Gvar.var_83[Gvar.var_2220].Var12 = 0;
                        Gvar.var_83[Gvar.var_2220].Var13 = 99;
                        Gvar.var_2543 = 1;
                    }
                    if ( Gvar.var_83[Gvar.var_2220].Var1 == Gvar.var_74  &&  Gvar.var_83[Gvar.var_2220].Var2 == Gvar.var_2224 ) {
                        Gvar.var_83[Gvar.var_2220].Var12 = 0;
                        Gvar.var_83[Gvar.var_2220].Var13 = 99;
                        Gvar.var_2543 = 1;
                    }
                    if ( Gvar.var_83[Gvar.var_2220].Var1 == Gvar.var_2221  &&  Gvar.var_83[Gvar.var_2220].Var2 == Gvar.var_75 ) {
                        Gvar.var_83[Gvar.var_2220].Var12 = 0;
                        Gvar.var_83[Gvar.var_2220].Var13 = 99;
                        Gvar.var_2543 = 1;
                    }
                    if ( Gvar.var_83[Gvar.var_2220].Var1 == Gvar.var_2222  &&  Gvar.var_83[Gvar.var_2220].Var2 == Gvar.var_75 ) {
                        Gvar.var_83[Gvar.var_2220].Var12 = 0;
                        Gvar.var_83[Gvar.var_2220].Var13 = 99;
                        Gvar.var_2543 = 1;
                    }
                    if ( Gvar.var_83[Gvar.var_2220].Var1 == Gvar.var_2221  &&  Gvar.var_83[Gvar.var_2220].Var2 == Gvar.var_2223 ) {
                        Gvar.var_83[Gvar.var_2220].Var12 = 0;
                        Gvar.var_83[Gvar.var_2220].Var13 = 99;
                        Gvar.var_2543 = 1;
                    }
                    if ( Gvar.var_83[Gvar.var_2220].Var1 == Gvar.var_2222  &&  Gvar.var_83[Gvar.var_2220].Var2 == Gvar.var_2223 ) {
                        Gvar.var_83[Gvar.var_2220].Var12 = 0;
                        Gvar.var_83[Gvar.var_2220].Var13 = 99;
                        Gvar.var_2543 = 1;
                    }
                    if ( Gvar.var_83[Gvar.var_2220].Var1 == Gvar.var_2221  &&  Gvar.var_83[Gvar.var_2220].Var2 == Gvar.var_2224 ) {
                        Gvar.var_83[Gvar.var_2220].Var12 = 0;
                        Gvar.var_83[Gvar.var_2220].Var13 = 99;
                        Gvar.var_2543 = 1;
                    }
                    if ( Gvar.var_83[Gvar.var_2220].Var1 == Gvar.var_2222  &&  Gvar.var_83[Gvar.var_2220].Var2 == Gvar.var_2224 ) {
                        Gvar.var_83[Gvar.var_2220].Var12 = 0;
                        Gvar.var_83[Gvar.var_2220].Var13 = 99;
                        Gvar.var_2543 = 1;
                    }
                    if ( Gvar.var_193 >= 1 ) {
                        if ( Gvar.var_83[Gvar.var_2220].Var10 == Gvar.var_226  &&  Gvar.var_226 != 14 ) {
                            Gvar.var_83[Gvar.var_2220].Var13 = 99;
                            Gvar.var_2543 = 1;
                        }
                        if ( Gvar.var_226 <= 12  &&  Gvar.var_226 != 0 ) {
                            Gvar.var_2459 = Gvar.var_83[Gvar.var_2220].Var1;
                            Gvar.var_2460 = Gvar.var_83[Gvar.var_2220].Var2;
                            Gvar.var_2461 = Gvar.var_83[Gvar.var_2220].Var1 - 1;
                            if ( Gvar.var_2461 < 0 ) {
                                Gvar.var_2461 = 0;
                            }
                            Gvar.var_2462 = Gvar.var_83[Gvar.var_2220].Var1 + 1;
                            if ( Gvar.var_2462 > Gvar.var_32 ) {
                                Gvar.var_2462 = Gvar.var_32;
                            }
                            Gvar.var_2463 = Gvar.var_83[Gvar.var_2220].Var2 + 1;
                            if ( Gvar.var_2463 > Gvar.var_33 ) {
                                Gvar.var_2463 = Gvar.var_33;
                            }
                            Gvar.var_2464 = Gvar.var_83[Gvar.var_2220].Var2 - 1;
                            if ( Gvar.var_2464 < 0 ) {
                                Gvar.var_2464 = 0;
                            }
                            if ( Gvar.var_83[Gvar.var_2220].Var0 != 0  &&  Gvar.var_82[Gvar.var_2461][Gvar.var_2460] == Gvar.var_226 ) {
                                Gvar.var_83[Gvar.var_2220].Var13 = 99;
                                Gvar.var_2543 = 1;
                            }
                            if ( Gvar.var_83[Gvar.var_2220].Var0 != 0  &&  Gvar.var_82[Gvar.var_2462][Gvar.var_2460] == Gvar.var_226 ) {
                                Gvar.var_83[Gvar.var_2220].Var13 = 99;
                                Gvar.var_2543 = 1;
                            }
                            if ( Gvar.var_83[Gvar.var_2220].Var0 != 0  &&  Gvar.var_82[Gvar.var_2459][Gvar.var_2463] == Gvar.var_226 ) {
                                Gvar.var_83[Gvar.var_2220].Var13 = 99;
                                Gvar.var_2543 = 1;
                            }
                            if ( Gvar.var_83[Gvar.var_2220].Var0 != 0  &&  Gvar.var_82[Gvar.var_2459][Gvar.var_2464] == Gvar.var_226 ) {
                                Gvar.var_83[Gvar.var_2220].Var13 = 99;
                                Gvar.var_2543 = 1;
                            }
                        }
                    }
                    Gvar.var_2220 = Gvar.var_2220 + 1;
                }
                await Func.setMessage("しかし何も起こらなかった…", "", 10, false, false, false);
                if ( Gvar.var_2543 == 1 ) {
                    Gvar.var_131 = 0;
                    Gvar.var_532 = 0;
                    Gvar.var_533 = 0;
                    Gvar.var_530 = 0;
                    Gvar.var_531 = 0;
                }
                for (let cnt = 0; cnt < 20; ++cnt) {
                    await Func.func337();
                }
                if ( Gvar.var_2444 == 1 ) {
                    Gvar.var_2444 = 0;
                    await Func.func540();
                }
                Gvar.var_242 = 1;
                await Func.func019();
            }
            if (Gvar.var_2543 == 1) {
                Gvar.var_283 = "その場所に固定するッ！";
                Adap.DSPLAY(126);
            }
            if (Gvar.var_2543 == 0) {
                Gvar.var_283 = "しかし何も起こらなかった…";
            }
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            await Func.func050();
            for (let cnt = 0; cnt < 20; ++cnt) {
                await Func.func337();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        }
        // === DISC No.206: オアシス(ドロドロ) ===
        if (Gvar.var_2494 == 206) {
            await Func.func538();
            await Func.setMessage("周囲がドロドロになってきた…", "", 10, false, false, false);
            await Func.func358();
            Gvar.var_180 = 1;
            Gvar.var_328 = Gvar.var_74 - 1;
            if ( Gvar.var_328 < 0 ) {
                Gvar.var_328 = 0;
            }
            Gvar.var_329 = Gvar.var_74 + 1;
            if ( Gvar.var_329 > Gvar.var_32 ) {
                Gvar.var_329 = Gvar.var_32;
            }
            Gvar.var_330 = Gvar.var_75 + 1;
            if ( Gvar.var_330 > Gvar.var_33 ) {
                Gvar.var_330 = Gvar.var_33;
            }
            Gvar.var_331 = Gvar.var_75 - 1;
            if ( Gvar.var_331 < 0 ) {
                Gvar.var_331 = 0;
            }
            Gvar.var_376 = 0;
            // dim var_377, 10, 10 — already initialized
            if ( Gvar.var_82[Gvar.var_74][Gvar.var_75] == 0 ) {
                Gvar.var_378 = Gvar.var_74;
                Gvar.var_379 = Gvar.var_75;
                await Func.func654();
                Gvar.var_376 = 1;
                Gvar.var_377[0][1] = Gvar.var_378;
                Gvar.var_377[0][2] = Gvar.var_379;
            }
            if ( Gvar.var_82[Gvar.var_328][Gvar.var_75] == 0 ) {
                Gvar.var_378 = Gvar.var_328;
                Gvar.var_379 = Gvar.var_75;
                await Func.func654();
                Gvar.var_376 = 1;
                Gvar.var_377[4][1] = Gvar.var_378;
                Gvar.var_377[4][2] = Gvar.var_379;
            }
            if ( Gvar.var_82[Gvar.var_329][Gvar.var_75] == 0 ) {
                Gvar.var_378 = Gvar.var_329;
                Gvar.var_379 = Gvar.var_75;
                await Func.func654();
                Gvar.var_376 = 1;
                Gvar.var_377[6][1] = Gvar.var_378;
                Gvar.var_377[6][2] = Gvar.var_379;
            }
            if ( Gvar.var_82[Gvar.var_74][Gvar.var_330] == 0 ) {
                Gvar.var_378 = Gvar.var_74;
                Gvar.var_379 = Gvar.var_330;
                await Func.func654();
                Gvar.var_376 = 1;
                Gvar.var_377[2][1] = Gvar.var_378;
                Gvar.var_377[2][2] = Gvar.var_379;
            }
            if ( Gvar.var_82[Gvar.var_74][Gvar.var_331] == 0 ) {
                Gvar.var_378 = Gvar.var_74;
                Gvar.var_379 = Gvar.var_331;
                await Func.func654();
                Gvar.var_376 = 1;
                Gvar.var_377[8][1] = Gvar.var_378;
                Gvar.var_377[8][2] = Gvar.var_379;
            }
            if ( Gvar.var_82[Gvar.var_328][Gvar.var_330] == 0 ) {
                Gvar.var_378 = Gvar.var_328;
                Gvar.var_379 = Gvar.var_330;
                await Func.func654();
                Gvar.var_376 = 1;
                Gvar.var_377[1][1] = Gvar.var_378;
                Gvar.var_377[1][2] = Gvar.var_379;
            }
            if ( Gvar.var_82[Gvar.var_329][Gvar.var_330] == 0 ) {
                Gvar.var_378 = Gvar.var_329;
                Gvar.var_379 = Gvar.var_330;
                await Func.func654();
                Gvar.var_376 = 1;
                Gvar.var_377[3][1] = Gvar.var_378;
                Gvar.var_377[3][2] = Gvar.var_379;
            }
            if ( Gvar.var_82[Gvar.var_328][Gvar.var_331] == 0 ) {
                Gvar.var_378 = Gvar.var_328;
                Gvar.var_379 = Gvar.var_331;
                await Func.func654();
                Gvar.var_376 = 1;
                Gvar.var_377[7][1] = Gvar.var_378;
                Gvar.var_377[7][2] = Gvar.var_379;
            }
            if ( Gvar.var_82[Gvar.var_329][Gvar.var_331] == 0 ) {
                Gvar.var_378 = Gvar.var_329;
                Gvar.var_379 = Gvar.var_331;
                await Func.func654();
                Gvar.var_376 = 1;
                Gvar.var_377[9][1] = Gvar.var_378;
                Gvar.var_377[9][2] = Gvar.var_379;
            }
            if ( Gvar.var_376 == 1 ) {
                Adap.DSPLAY(123);
                for (let cnt = 0; cnt < 5; ++cnt) {
                    Gvar.var_380++;
                    await Func.func337();
                    await Func.func337();
                }
                Gvar.var_380 = 0;
                // dim var_377, 10, 10 — already initialized
            }
            if ( Gvar.var_2444 == 1 ) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        // === DISC No.304: ウェザーリポート(雨) ===
        if (Gvar.var_2494 == 304) {
            await Func.func538();
            if (Gvar.var_193 == 1) {
                await Func.setMessage("発動能力がパワーアップしている！", "", 10, false, false, false);
                await Func.func358();
            }
            Gvar.var_199 = 1;
            await Func.setMessage("雨が降ってきた。", "", 10, false, false, false);
            Gvar.var_1771 = 1;
            Gvar.var_310 = 1;
            for (let cnt = 0; cnt < 40; ++cnt) {
                await Func.func337();
            }
            Gvar.var_457 = "雷が落ちた！";
            Gvar.var_2455 = 1;
            Gvar.var_2424 = 1;
            for (let cnt = 0; cnt < Gvar.var_107; ++cnt) {
                Gvar.var_2456 = Gvar.var_647 * 3;
                Gvar.var_2457 = Adap.rnd(3);
                Gvar.var_2456 = Gvar.var_2456 + Gvar.var_2457;
                if ( Gvar.var_193 >= 1 ) {
                    Gvar.var_2456 = Gvar.var_2456 * 2;
                }
                if ( Gvar.var_2424 != Gvar.var_141 ) {
                    Gvar.var_2458 = 0;
                    if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var10 == Gvar.var_226  &&  Gvar.var_226 > 0  &&  Gvar.var_226 <= 12 ) {
                        Gvar.var_456 = Gvar.var_2424;
                        Gvar.var_234 = Gvar.var_2456;
                        await Func.func550();
                        await Func.func745();
                        for (let cnt = 0; cnt < 2; ++cnt) {
                            await Func.func337();
                        }
                        Gvar.var_2458 = 1;
                    }
                    if ( Gvar.var_2458 == 0 ) {
                        Gvar.var_2221 = Gvar.var_74 - 1;
                        if ( Gvar.var_2221 < 0 ) {
                            Gvar.var_2221 = 0;
                        }
                        Gvar.var_2222 = Gvar.var_74 + 1;
                        if ( Gvar.var_2222 > Gvar.var_32 ) {
                            Gvar.var_2222 = Gvar.var_32;
                        }
                        Gvar.var_2223 = Gvar.var_75 + 1;
                        if ( Gvar.var_2223 > Gvar.var_33 ) {
                            Gvar.var_2223 = Gvar.var_33;
                        }
                        Gvar.var_2224 = Gvar.var_75 - 1;
                        if ( Gvar.var_2224 < 0 ) {
                            Gvar.var_2224 = 0;
                        }
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_74  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2223 ) {
                            Gvar.var_456 = Gvar.var_2424;
                            Gvar.var_234 = Gvar.var_2456;
                            await Func.func550();
                            await Func.func745();
                            for (let cnt = 0; cnt < 2; ++cnt) {
                                await Func.func337();
                            }
                            Gvar.var_2458 = 1;
                        }
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_74  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2224 ) {
                            Gvar.var_456 = Gvar.var_2424;
                            Gvar.var_234 = Gvar.var_2456;
                            await Func.func550();
                            await Func.func745();
                            for (let cnt = 0; cnt < 2; ++cnt) {
                                await Func.func337();
                            }
                            Gvar.var_2458 = 1;
                        }
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2221  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_75 ) {
                            Gvar.var_456 = Gvar.var_2424;
                            Gvar.var_234 = Gvar.var_2456;
                            await Func.func550();
                            await Func.func745();
                            for (let cnt = 0; cnt < 2; ++cnt) {
                                await Func.func337();
                            }
                            Gvar.var_2458 = 1;
                        }
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2222  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_75 ) {
                            Gvar.var_456 = Gvar.var_2424;
                            Gvar.var_234 = Gvar.var_2456;
                            await Func.func550();
                            await Func.func745();
                            for (let cnt = 0; cnt < 2; ++cnt) {
                                await Func.func337();
                            }
                            Gvar.var_2458 = 1;
                        }
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2221  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2223 ) {
                            Gvar.var_456 = Gvar.var_2424;
                            Gvar.var_234 = Gvar.var_2456;
                            await Func.func550();
                            await Func.func745();
                            for (let cnt = 0; cnt < 2; ++cnt) {
                                await Func.func337();
                            }
                            Gvar.var_2458 = 1;
                        }
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2222  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2223 ) {
                            Gvar.var_456 = Gvar.var_2424;
                            Gvar.var_234 = Gvar.var_2456;
                            await Func.func550();
                            await Func.func745();
                            for (let cnt = 0; cnt < 2; ++cnt) {
                                await Func.func337();
                            }
                            Gvar.var_2458 = 1;
                        }
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2221  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2224 ) {
                            Gvar.var_456 = Gvar.var_2424;
                            Gvar.var_234 = Gvar.var_2456;
                            await Func.func550();
                            await Func.func745();
                            for (let cnt = 0; cnt < 2; ++cnt) {
                                await Func.func337();
                            }
                            Gvar.var_2458 = 1;
                        }
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2222  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2224 ) {
                            Gvar.var_456 = Gvar.var_2424;
                            Gvar.var_234 = Gvar.var_2456;
                            await Func.func550();
                            await Func.func745();
                            for (let cnt = 0; cnt < 2; ++cnt) {
                                await Func.func337();
                            }
                            Gvar.var_2458 = 1;
                        }
                    }
                    if ( Gvar.var_2458 == 0  &&  Gvar.var_226 <= 12  &&  Gvar.var_226 != 0 ) {
                        Gvar.var_2459 = Gvar.var_83[Gvar.var_2424].Var1;
                        Gvar.var_2460 = Gvar.var_83[Gvar.var_2424].Var2;
                        Gvar.var_2461 = Gvar.var_83[Gvar.var_2424].Var1 - 1;
                        if ( Gvar.var_2461 < 0 ) {
                            Gvar.var_2461 = 0;
                        }
                        Gvar.var_2462 = Gvar.var_83[Gvar.var_2424].Var1 + 1;
                        if ( Gvar.var_2462 > Gvar.var_32 ) {
                            Gvar.var_2462 = Gvar.var_32;
                        }
                        Gvar.var_2463 = Gvar.var_83[Gvar.var_2424].Var2 + 1;
                        if ( Gvar.var_2463 > Gvar.var_33 ) {
                            Gvar.var_2463 = Gvar.var_33;
                        }
                        Gvar.var_2464 = Gvar.var_83[Gvar.var_2424].Var2 - 1;
                        if ( Gvar.var_2464 < 0 ) {
                            Gvar.var_2464 = 0;
                        }
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_82[Gvar.var_2461][Gvar.var_2460] == Gvar.var_226 ) {
                            Gvar.var_456 = Gvar.var_2424;
                            Gvar.var_234 = Gvar.var_2456;
                            await Func.func550();
                            await Func.func745();
                            for (let cnt = 0; cnt < 2; ++cnt) {
                                await Func.func337();
                            }
                            Gvar.var_2458 = 1;
                        }
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_82[Gvar.var_2462][Gvar.var_2460] == Gvar.var_226 ) {
                            Gvar.var_456 = Gvar.var_2424;
                            Gvar.var_234 = Gvar.var_2456;
                            await Func.func550();
                            await Func.func745();
                            for (let cnt = 0; cnt < 2; ++cnt) {
                                await Func.func337();
                            }
                            Gvar.var_2458 = 1;
                        }
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_82[Gvar.var_2459][Gvar.var_2463] == Gvar.var_226 ) {
                            Gvar.var_456 = Gvar.var_2424;
                            Gvar.var_234 = Gvar.var_2456;
                            await Func.func550();
                            await Func.func745();
                            for (let cnt = 0; cnt < 2; ++cnt) {
                                await Func.func337();
                            }
                            Gvar.var_2458 = 1;
                        }
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_82[Gvar.var_2459][Gvar.var_2464] == Gvar.var_226 ) {
                            Gvar.var_456 = Gvar.var_2424;
                            Gvar.var_234 = Gvar.var_2456;
                            await Func.func550();
                            await Func.func745();
                            for (let cnt = 0; cnt < 2; ++cnt) {
                                await Func.func337();
                            }
                            Gvar.var_2458 = 1;
                        }
                    }
                }
                Gvar.var_2424 = Gvar.var_2424 + 1;
            }
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
            }
            Gvar.var_2455 = 0;
            await Func.setMessage("", "　――――　雨があがった　――――", 10, false, false, false);
            Gvar.var_1771 = 0;
            Gvar.var_310 = 0;
            for (let cnt = 0; cnt < 15; ++cnt) {
                await Func.func337();
                Gvar.var_342 = Gvar.var_342 - 5;
            }
            Gvar.var_342 = 0;
            Gvar.var_343 = 0;
            await Func.func358();
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "地面が洗い流され、";
            Gvar.var_287 = "罠が見えるようになった。";
            await Func.func053();
            Gvar.var_138 = 1;
            await Func.func348();
            await Func.func358();
            Gvar.var_2553 = 0;
            Gvar.var_2554 = 0;
            Gvar.var_2555 = 0;
            Gvar.var_2435 = 1;
            for (let cnt = 0; cnt < Gvar.var_367; ++cnt) {
                if ( Gvar.var_89[Gvar.var_2435][0] == 651 ) {
                    Gvar.var_89[Gvar.var_2435][0] = 653;
                    Gvar.var_2553 = 1;
                }
                if ( Gvar.var_89[Gvar.var_2435][0] == 650 ) {
                    Gvar.var_89[Gvar.var_2435][0] = 651;
                    Gvar.var_2553 = 1;
                }
                Gvar.var_2435++;
            }
            Gvar.var_2435 = 1;
            for (let cnt = 0; cnt < Gvar.var_249; ++cnt) {
                if ( Gvar.var_258[Gvar.var_2435][0] == 401 ) {
                    Gvar.var_2554 = 1;
                }
                Gvar.var_2435++;
            }
            Gvar.var_2435 = 1;
            for (let cnt = 0; cnt < Gvar.var_107; ++cnt) {
                if ( Gvar.var_83[Gvar.var_2435].Var0 == 115  ||  Gvar.var_83[Gvar.var_2435].Var0 == 27  ||  Gvar.var_83[Gvar.var_2435].Var0 == 21 ) {
                    Gvar.var_2555 = 1;
                    Gvar.var_83[Gvar.var_2435].Var39 = Gvar.var_83[Gvar.var_2435].Var39 + 1;
                    if ( Gvar.var_83[Gvar.var_2435].Var39 == 1 ) {
                        Gvar.var_83[Gvar.var_2435].Var39 = 2;
                    }
                    Gvar.var_268 = Gvar.var_83[Gvar.var_2435].Var0;
                    await Func.func658();
                    Gvar.var_83[Gvar.var_2435].Var3 = Gvar.var_505 * (Gvar.var_83[Gvar.var_2435].Var39 + 10) / 10;
                    if ( Gvar.var_83[Gvar.var_2435].Var3 >= 999 ) {
                        Gvar.var_83[Gvar.var_2435].Var3 = 999;
                    }
                }
                Gvar.var_2435++;
            }
            if ( Gvar.var_2554 == 1 ) {
                Gvar.var_283 = Gvar.var_286;
                Gvar.var_284 = Gvar.var_287;
                Gvar.var_286 = "フー・ファイターズの威力がアップした！";
                await Func.func053();
                await Func.func358();
            }
            if ( Gvar.var_2553 == 1 ) {
                Gvar.var_283 = Gvar.var_286;
                Gvar.var_284 = Gvar.var_287;
                Gvar.var_286 = "地面のカエルが成長したようだ。";
                await Func.func053();
                await Func.func358();
            }
            if ( Gvar.var_2555 == 1 ) {
                Gvar.var_283 = Gvar.var_286;
                Gvar.var_284 = Gvar.var_287;
                Gvar.var_286 = "パワーアップした敵がいるようだ…";
                await Func.func053();
                await Func.func358();
            }
            if ( Gvar.var_2444 == 1 ) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            }
            await Func.setMessage("", "　――――　雨があがった　――――", 10, false, false, false);
            // 雨後の処理
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "地面が洗い流され、";
            Gvar.var_287 = "罠が見えるようになった。";
            Gvar.var_138 = 1;
            await Func.func053();
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            await Func.func050();
            await Func.func348();
            // フー・ファイターズ威力アップ
            // "フー・ファイターズの威力がアップした！"
            // カエル成長
            // "地面のカエルが成長したようだ。"
            // パワーアップ敵
            // "パワーアップした敵がいるようだ…"
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        // === DISC No.102: キング・クリムゾン ===
        if (Gvar.var_2494 == 102) {
            await Func.func538();
            await Func.setMessage("「キング・クリムゾン」！！", "我以外の時間は消し飛ぶ！", 10, false, false, false);
            await Func.func358();
            // dim var_437, 10, 10 — already initialized
            if ( Gvar.var_140 == 0 ) {
                Gvar.var_450 = Gvar.var_102;
            }
            Gvar.var_140 = 1;
            Gvar.var_102 = 17;
            Gvar.var_131 = 0;
            Adap.DSPLAY(185);
            Gvar.var_310 = 1;
            Gvar.var_1648 = 1;
            for (let cnt = 0; cnt < 20; ++cnt) {
                await Func.func337();
                Gvar.var_1648++;
            }
            Gvar.var_310 = 0;
            Gvar.var_1648 = 0;
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        }
        // === DISC No.121: パープルヘイズ(ウイルス) ===
        if (Gvar.var_2494 == 121) {
            await Func.func538();
            if (Gvar.var_193 == 1) {
                await Func.setMessage("発動能力がパワーアップしている！", "", 10, false, false, false);
                await Func.func358();
            }
            if ( Gvar.var_2494 == 121 ) {
                await Func.func538();
                if ( Gvar.var_193 == 1 ) {
                    await Func.setMessage("発動能力がパワーアップしている！", "", 10, false, false, false);
                    await Func.func358();
                }
                Adap.gsel(19);
                Adap.color(150, 0, 150);
                Adap.boxf(0, 0, 340, 340);
                Adap.gsel(0);
                Gvar.var_604 = 1;
                Gvar.var_457 = "ウイルスが敵の体を蝕んでいる！";
                Gvar.var_2455 = 1;
                Gvar.var_2424 = 1;
                for (let cnt = 0; cnt < Gvar.var_107; ++cnt) {
                    Gvar.var_2456 = Gvar.var_647 * 4;
                    Gvar.var_2457 = Adap.rnd(3);
                    Gvar.var_2456 = Gvar.var_2456 + Gvar.var_2457;
                    if ( Gvar.var_193 >= 1 ) {
                        Gvar.var_2456 = Gvar.var_2456 * 2;
                    }
                    if ( Gvar.var_2424 != Gvar.var_141 ) {
                        Gvar.var_2458 = 0;
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var10 == Gvar.var_226  &&  Gvar.var_226 > 0  &&  Gvar.var_226 <= 12 ) {
                            Gvar.var_456 = Gvar.var_2424;
                            Gvar.var_234 = Gvar.var_2456;
                            await Func.func548();
                            await Func.func745();
                            for (let cnt = 0; cnt < 2; ++cnt) {
                                await Func.func337();
                            }
                            Gvar.var_2458 = 1;
                        }
                        if ( Gvar.var_2458 == 0 ) {
                            Gvar.var_2221 = Gvar.var_74 - 1;
                            if ( Gvar.var_2221 < 0 ) {
                                Gvar.var_2221 = 0;
                            }
                            Gvar.var_2222 = Gvar.var_74 + 1;
                            if ( Gvar.var_2222 > Gvar.var_32 ) {
                                Gvar.var_2222 = Gvar.var_32;
                            }
                            Gvar.var_2223 = Gvar.var_75 + 1;
                            if ( Gvar.var_2223 > Gvar.var_33 ) {
                                Gvar.var_2223 = Gvar.var_33;
                            }
                            Gvar.var_2224 = Gvar.var_75 - 1;
                            if ( Gvar.var_2224 < 0 ) {
                                Gvar.var_2224 = 0;
                            }
                            if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_74  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2223 ) {
                                Gvar.var_456 = Gvar.var_2424;
                                Gvar.var_234 = Gvar.var_2456;
                                await Func.func548();
                                await Func.func745();
                                for (let cnt = 0; cnt < 2; ++cnt) {
                                    await Func.func337();
                                }
                                Gvar.var_2458 = 1;
                            }
                            if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_74  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2224 ) {
                                Gvar.var_456 = Gvar.var_2424;
                                Gvar.var_234 = Gvar.var_2456;
                                await Func.func548();
                                await Func.func745();
                                for (let cnt = 0; cnt < 2; ++cnt) {
                                    await Func.func337();
                                }
                                Gvar.var_2458 = 1;
                            }
                            if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2221  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_75 ) {
                                Gvar.var_456 = Gvar.var_2424;
                                Gvar.var_234 = Gvar.var_2456;
                                await Func.func548();
                                await Func.func745();
                                for (let cnt = 0; cnt < 2; ++cnt) {
                                    await Func.func337();
                                }
                                Gvar.var_2458 = 1;
                            }
                            if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2222  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_75 ) {
                                Gvar.var_456 = Gvar.var_2424;
                                Gvar.var_234 = Gvar.var_2456;
                                await Func.func548();
                                await Func.func745();
                                for (let cnt = 0; cnt < 2; ++cnt) {
                                    await Func.func337();
                                }
                                Gvar.var_2458 = 1;
                            }
                            if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2221  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2223 ) {
                                Gvar.var_456 = Gvar.var_2424;
                                Gvar.var_234 = Gvar.var_2456;
                                await Func.func548();
                                await Func.func745();
                                for (let cnt = 0; cnt < 2; ++cnt) {
                                    await Func.func337();
                                }
                                Gvar.var_2458 = 1;
                            }
                            if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2222  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2223 ) {
                                Gvar.var_456 = Gvar.var_2424;
                                Gvar.var_234 = Gvar.var_2456;
                                await Func.func548();
                                await Func.func745();
                                for (let cnt = 0; cnt < 2; ++cnt) {
                                    await Func.func337();
                                }
                                Gvar.var_2458 = 1;
                            }
                            if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2221  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2224 ) {
                                Gvar.var_456 = Gvar.var_2424;
                                Gvar.var_234 = Gvar.var_2456;
                                await Func.func548();
                                await Func.func745();
                                for (let cnt = 0; cnt < 2; ++cnt) {
                                    await Func.func337();
                                }
                                Gvar.var_2458 = 1;
                            }
                            if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2222  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2224 ) {
                                Gvar.var_456 = Gvar.var_2424;
                                Gvar.var_234 = Gvar.var_2456;
                                await Func.func548();
                                await Func.func745();
                                for (let cnt = 0; cnt < 2; ++cnt) {
                                    await Func.func337();
                                }
                                Gvar.var_2458 = 1;
                            }
                        }
                        if ( Gvar.var_2458 == 0  &&  Gvar.var_226 <= 12  &&  Gvar.var_226 != 0 ) {
                            Gvar.var_2459 = Gvar.var_83[Gvar.var_2424].Var1;
                            Gvar.var_2460 = Gvar.var_83[Gvar.var_2424].Var2;
                            Gvar.var_2461 = Gvar.var_83[Gvar.var_2424].Var1 - 1;
                            if ( Gvar.var_2461 < 0 ) {
                                Gvar.var_2461 = 0;
                            }
                            Gvar.var_2462 = Gvar.var_83[Gvar.var_2424].Var1 + 1;
                            if ( Gvar.var_2462 > Gvar.var_32 ) {
                                Gvar.var_2462 = Gvar.var_32;
                            }
                            Gvar.var_2463 = Gvar.var_83[Gvar.var_2424].Var2 + 1;
                            if ( Gvar.var_2463 > Gvar.var_33 ) {
                                Gvar.var_2463 = Gvar.var_33;
                            }
                            Gvar.var_2464 = Gvar.var_83[Gvar.var_2424].Var2 - 1;
                            if ( Gvar.var_2464 < 0 ) {
                                Gvar.var_2464 = 0;
                            }
                            if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_82[Gvar.var_2461][Gvar.var_2460] == Gvar.var_226 ) {
                                Gvar.var_456 = Gvar.var_2424;
                                Gvar.var_234 = Gvar.var_2456;
                                await Func.func548();
                                await Func.func745();
                                for (let cnt = 0; cnt < 2; ++cnt) {
                                    await Func.func337();
                                }
                                Gvar.var_2458 = 1;
                            }
                            if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_82[Gvar.var_2462][Gvar.var_2460] == Gvar.var_226 ) {
                                Gvar.var_456 = Gvar.var_2424;
                                Gvar.var_234 = Gvar.var_2456;
                                await Func.func548();
                                await Func.func745();
                                for (let cnt = 0; cnt < 2; ++cnt) {
                                    await Func.func337();
                                }
                                Gvar.var_2458 = 1;
                            }
                            if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_82[Gvar.var_2459][Gvar.var_2463] == Gvar.var_226 ) {
                                Gvar.var_456 = Gvar.var_2424;
                                Gvar.var_234 = Gvar.var_2456;
                                await Func.func548();
                                await Func.func745();
                                for (let cnt = 0; cnt < 2; ++cnt) {
                                    await Func.func337();
                                }
                                Gvar.var_2458 = 1;
                            }
                            if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_82[Gvar.var_2459][Gvar.var_2464] == Gvar.var_226 ) {
                                Gvar.var_456 = Gvar.var_2424;
                                Gvar.var_234 = Gvar.var_2456;
                                await Func.func548();
                                await Func.func745();
                                for (let cnt = 0; cnt < 2; ++cnt) {
                                    await Func.func337();
                                }
                                Gvar.var_2458 = 1;
                            }
                        }
                    }
                    Gvar.var_2424 = Gvar.var_2424 + 1;
                }
                for (let cnt = 0; cnt < 10; ++cnt) {
                    await Func.func337();
                }
                Gvar.var_604 = 0;
                Gvar.var_2455 = 0;
                if ( Gvar.var_2444 == 1 ) {
                    Gvar.var_2444 = 0;
                    await Func.func540();
                }
                Gvar.var_242 = 1;
                await Func.func019();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        }
        // === DISC No.318: エネルギー吸収 ===
        if (Gvar.var_2494 == 318) {
            await Func.func538();
            if (Gvar.var_193 == 1) {
                await Func.setMessage("発動能力がパワーアップしている！", "", 10, false, false, false);
                await Func.func358();
            }
            if ( Gvar.var_2494 == 318 ) {
                await Func.func538();
                if ( Gvar.var_193 == 1 ) {
                    await Func.setMessage("発動能力がパワーアップしている！", "", 10, false, false, false);
                    await Func.func358();
                }
                Adap.gsel(19);
                Adap.color(250, 250, 250);
                Adap.boxf(0, 0, 340, 340);
                Adap.gsel(0);
                Gvar.var_604 = 1;
                Gvar.var_457 = "血液が沸騰している！";
                Gvar.var_2455 = 1;
                Gvar.var_2424 = 1;
                for (let cnt = 0; cnt < Gvar.var_107; ++cnt) {
                    Gvar.var_2456 = Gvar.var_647 * 3;
                    Gvar.var_2457 = Adap.rnd(3);
                    Gvar.var_2456 = Gvar.var_2456 + Gvar.var_2457;
                    if ( Gvar.var_193 >= 1 ) {
                        Gvar.var_2456 = Gvar.var_2456 * 2;
                    }
                    if ( Gvar.var_2424 != Gvar.var_141 ) {
                        Gvar.var_2458 = 0;
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var10 == Gvar.var_226  &&  Gvar.var_226 > 0  &&  Gvar.var_226 <= 12 ) {
                            Gvar.var_456 = Gvar.var_2424;
                            Gvar.var_234 = Gvar.var_2456;
                            await Func.func549();
                            await Func.func745();
                            for (let cnt = 0; cnt < 2; ++cnt) {
                                await Func.func337();
                            }
                            Gvar.var_2458 = 1;
                        }
                        if ( Gvar.var_2458 == 0 ) {
                            Gvar.var_2221 = Gvar.var_74 - 1;
                            if ( Gvar.var_2221 < 0 ) {
                                Gvar.var_2221 = 0;
                            }
                            Gvar.var_2222 = Gvar.var_74 + 1;
                            if ( Gvar.var_2222 > Gvar.var_32 ) {
                                Gvar.var_2222 = Gvar.var_32;
                            }
                            Gvar.var_2223 = Gvar.var_75 + 1;
                            if ( Gvar.var_2223 > Gvar.var_33 ) {
                                Gvar.var_2223 = Gvar.var_33;
                            }
                            Gvar.var_2224 = Gvar.var_75 - 1;
                            if ( Gvar.var_2224 < 0 ) {
                                Gvar.var_2224 = 0;
                            }
                            if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_74  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2223 ) {
                                Gvar.var_456 = Gvar.var_2424;
                                Gvar.var_234 = Gvar.var_2456;
                                await Func.func549();
                                await Func.func745();
                                for (let cnt = 0; cnt < 2; ++cnt) {
                                    await Func.func337();
                                }
                                Gvar.var_2458 = 1;
                            }
                            if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_74  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2224 ) {
                                Gvar.var_456 = Gvar.var_2424;
                                Gvar.var_234 = Gvar.var_2456;
                                await Func.func549();
                                await Func.func745();
                                for (let cnt = 0; cnt < 2; ++cnt) {
                                    await Func.func337();
                                }
                                Gvar.var_2458 = 1;
                            }
                            if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2221  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_75 ) {
                                Gvar.var_456 = Gvar.var_2424;
                                Gvar.var_234 = Gvar.var_2456;
                                await Func.func549();
                                await Func.func745();
                                for (let cnt = 0; cnt < 2; ++cnt) {
                                    await Func.func337();
                                }
                                Gvar.var_2458 = 1;
                            }
                            if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2222  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_75 ) {
                                Gvar.var_456 = Gvar.var_2424;
                                Gvar.var_234 = Gvar.var_2456;
                                await Func.func549();
                                await Func.func745();
                                for (let cnt = 0; cnt < 2; ++cnt) {
                                    await Func.func337();
                                }
                                Gvar.var_2458 = 1;
                            }
                            if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2221  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2223 ) {
                                Gvar.var_456 = Gvar.var_2424;
                                Gvar.var_234 = Gvar.var_2456;
                                await Func.func549();
                                await Func.func745();
                                for (let cnt = 0; cnt < 2; ++cnt) {
                                    await Func.func337();
                                }
                                Gvar.var_2458 = 1;
                            }
                            if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2222  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2223 ) {
                                Gvar.var_456 = Gvar.var_2424;
                                Gvar.var_234 = Gvar.var_2456;
                                await Func.func549();
                                await Func.func745();
                                for (let cnt = 0; cnt < 2; ++cnt) {
                                    await Func.func337();
                                }
                                Gvar.var_2458 = 1;
                            }
                            if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2221  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2224 ) {
                                Gvar.var_456 = Gvar.var_2424;
                                Gvar.var_234 = Gvar.var_2456;
                                await Func.func549();
                                await Func.func745();
                                for (let cnt = 0; cnt < 2; ++cnt) {
                                    await Func.func337();
                                }
                                Gvar.var_2458 = 1;
                            }
                            if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2222  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2224 ) {
                                Gvar.var_456 = Gvar.var_2424;
                                Gvar.var_234 = Gvar.var_2456;
                                await Func.func549();
                                await Func.func745();
                                for (let cnt = 0; cnt < 2; ++cnt) {
                                    await Func.func337();
                                }
                                Gvar.var_2458 = 1;
                            }
                        }
                        if ( Gvar.var_2458 == 0  &&  Gvar.var_226 <= 12  &&  Gvar.var_226 != 0 ) {
                            Gvar.var_2459 = Gvar.var_83[Gvar.var_2424].Var1;
                            Gvar.var_2460 = Gvar.var_83[Gvar.var_2424].Var2;
                            Gvar.var_2461 = Gvar.var_83[Gvar.var_2424].Var1 - 1;
                            if ( Gvar.var_2461 < 0 ) {
                                Gvar.var_2461 = 0;
                            }
                            Gvar.var_2462 = Gvar.var_83[Gvar.var_2424].Var1 + 1;
                            if ( Gvar.var_2462 > Gvar.var_32 ) {
                                Gvar.var_2462 = Gvar.var_32;
                            }
                            Gvar.var_2463 = Gvar.var_83[Gvar.var_2424].Var2 + 1;
                            if ( Gvar.var_2463 > Gvar.var_33 ) {
                                Gvar.var_2463 = Gvar.var_33;
                            }
                            Gvar.var_2464 = Gvar.var_83[Gvar.var_2424].Var2 - 1;
                            if ( Gvar.var_2464 < 0 ) {
                                Gvar.var_2464 = 0;
                            }
                            if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_82[Gvar.var_2461][Gvar.var_2460] == Gvar.var_226 ) {
                                Gvar.var_456 = Gvar.var_2424;
                                Gvar.var_234 = Gvar.var_2456;
                                await Func.func549();
                                await Func.func745();
                                for (let cnt = 0; cnt < 2; ++cnt) {
                                    await Func.func337();
                                }
                                Gvar.var_2458 = 1;
                            }
                            if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_82[Gvar.var_2462][Gvar.var_2460] == Gvar.var_226 ) {
                                Gvar.var_456 = Gvar.var_2424;
                                Gvar.var_234 = Gvar.var_2456;
                                await Func.func549();
                                await Func.func745();
                                for (let cnt = 0; cnt < 2; ++cnt) {
                                    await Func.func337();
                                }
                                Gvar.var_2458 = 1;
                            }
                            if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_82[Gvar.var_2459][Gvar.var_2463] == Gvar.var_226 ) {
                                Gvar.var_456 = Gvar.var_2424;
                                Gvar.var_234 = Gvar.var_2456;
                                await Func.func549();
                                await Func.func745();
                                for (let cnt = 0; cnt < 2; ++cnt) {
                                    await Func.func337();
                                }
                                Gvar.var_2458 = 1;
                            }
                            if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_82[Gvar.var_2459][Gvar.var_2464] == Gvar.var_226 ) {
                                Gvar.var_456 = Gvar.var_2424;
                                Gvar.var_234 = Gvar.var_2456;
                                await Func.func549();
                                await Func.func745();
                                for (let cnt = 0; cnt < 2; ++cnt) {
                                    await Func.func337();
                                }
                                Gvar.var_2458 = 1;
                            }
                        }
                    }
                    Gvar.var_2424 = Gvar.var_2424 + 1;
                }
                for (let cnt = 0; cnt < 10; ++cnt) {
                    await Func.func337();
                }
                Gvar.var_604 = 0;
                Gvar.var_2455 = 0;
                if ( Gvar.var_2444 == 1 ) {
                    Gvar.var_2444 = 0;
                    await Func.func540();
                }
                Gvar.var_242 = 1;
                await Func.func019();
            }
            // "合計 " + Gvar.var_2557 + " のエネルギーを吸収した。"
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        }
        // === DISC No.117: 養分吸収 ===
        if (Gvar.var_2494 == 117) {
            await Func.func538();
            if (Gvar.var_193 == 1) {
                await Func.setMessage("発動能力がパワーアップしている！", "", 10, false, false, false);
                await Func.func358();
            }
            if ( Gvar.var_2494 == 117 ) {
                await Func.func538();
                if ( Gvar.var_193 == 1 ) {
                    await Func.setMessage("発動能力がパワーアップしている！", "", 10, false, false, false);
                    await Func.func358();
                }
                Adap.gsel(19);
                Adap.color(0, 0, 150);
                Adap.boxf(0, 0, 340, 340);
                Adap.gsel(0);
                Gvar.var_2557 = 0;
                Gvar.var_604 = 1;
                Gvar.var_457 = "フジツボでエネルギーを吸い取っている！";
                Gvar.var_2455 = 1;
                Gvar.var_2424 = 1;
                for (let cnt = 0; cnt < Gvar.var_107; ++cnt) {
                    Gvar.var_2558 = Gvar.var_647 * 2;
                    Gvar.var_2457 = Adap.rnd(3);
                    Gvar.var_2558 = Gvar.var_2558 + Gvar.var_2457;
                    if ( Gvar.var_193 >= 1 ) {
                        Gvar.var_2558 = Gvar.var_2558 * 2;
                    }
                    if ( Gvar.var_2424 != Gvar.var_141 ) {
                        Gvar.var_2458 = 0;
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var10 == Gvar.var_226  &&  Gvar.var_226 > 0  &&  Gvar.var_226 <= 12 ) {
                            Gvar.var_456 = Gvar.var_2424;
                            Gvar.var_234 = Gvar.var_2558;
                            Gvar.var_2557 = Gvar.var_2557 + Gvar.var_2558;
                            await Func.func547();
                            await Func.func745();
                            for (let cnt = 0; cnt < 2; ++cnt) {
                                await Func.func337();
                            }
                            Gvar.var_2458 = 1;
                        }
                        if ( Gvar.var_2458 == 0 ) {
                            Gvar.var_2221 = Gvar.var_74 - 1;
                            if ( Gvar.var_2221 < 0 ) {
                                Gvar.var_2221 = 0;
                            }
                            Gvar.var_2222 = Gvar.var_74 + 1;
                            if ( Gvar.var_2222 > Gvar.var_32 ) {
                                Gvar.var_2222 = Gvar.var_32;
                            }
                            Gvar.var_2223 = Gvar.var_75 + 1;
                            if ( Gvar.var_2223 > Gvar.var_33 ) {
                                Gvar.var_2223 = Gvar.var_33;
                            }
                            Gvar.var_2224 = Gvar.var_75 - 1;
                            if ( Gvar.var_2224 < 0 ) {
                                Gvar.var_2224 = 0;
                            }
                            if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_74  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2223 ) {
                                Gvar.var_456 = Gvar.var_2424;
                                Gvar.var_234 = Gvar.var_2558;
                                Gvar.var_2557 = Gvar.var_2557 + Gvar.var_2558;
                                await Func.func547();
                                await Func.func745();
                                for (let cnt = 0; cnt < 2; ++cnt) {
                                    await Func.func337();
                                }
                                Gvar.var_2458 = 1;
                            }
                            if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_74  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2224 ) {
                                Gvar.var_456 = Gvar.var_2424;
                                Gvar.var_234 = Gvar.var_2558;
                                Gvar.var_2557 = Gvar.var_2557 + Gvar.var_2558;
                                await Func.func547();
                                await Func.func745();
                                for (let cnt = 0; cnt < 2; ++cnt) {
                                    await Func.func337();
                                }
                                Gvar.var_2458 = 1;
                            }
                            if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2221  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_75 ) {
                                Gvar.var_456 = Gvar.var_2424;
                                Gvar.var_234 = Gvar.var_2558;
                                Gvar.var_2557 = Gvar.var_2557 + Gvar.var_2558;
                                await Func.func547();
                                await Func.func745();
                                for (let cnt = 0; cnt < 2; ++cnt) {
                                    await Func.func337();
                                }
                                Gvar.var_2458 = 1;
                            }
                            if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2222  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_75 ) {
                                Gvar.var_456 = Gvar.var_2424;
                                Gvar.var_234 = Gvar.var_2558;
                                Gvar.var_2557 = Gvar.var_2557 + Gvar.var_2558;
                                await Func.func547();
                                await Func.func745();
                                for (let cnt = 0; cnt < 2; ++cnt) {
                                    await Func.func337();
                                }
                                Gvar.var_2458 = 1;
                            }
                            if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2221  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2223 ) {
                                Gvar.var_456 = Gvar.var_2424;
                                Gvar.var_234 = Gvar.var_2558;
                                Gvar.var_2557 = Gvar.var_2557 + Gvar.var_2558;
                                await Func.func547();
                                await Func.func745();
                                for (let cnt = 0; cnt < 2; ++cnt) {
                                    await Func.func337();
                                }
                                Gvar.var_2458 = 1;
                            }
                            if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2222  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2223 ) {
                                Gvar.var_456 = Gvar.var_2424;
                                Gvar.var_234 = Gvar.var_2558;
                                Gvar.var_2557 = Gvar.var_2557 + Gvar.var_2558;
                                await Func.func547();
                                await Func.func745();
                                for (let cnt = 0; cnt < 2; ++cnt) {
                                    await Func.func337();
                                }
                                Gvar.var_2458 = 1;
                            }
                            if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2221  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2224 ) {
                                Gvar.var_456 = Gvar.var_2424;
                                Gvar.var_234 = Gvar.var_2558;
                                Gvar.var_2557 = Gvar.var_2557 + Gvar.var_2558;
                                await Func.func547();
                                await Func.func745();
                                for (let cnt = 0; cnt < 2; ++cnt) {
                                    await Func.func337();
                                }
                                Gvar.var_2458 = 1;
                            }
                            if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2222  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2224 ) {
                                Gvar.var_456 = Gvar.var_2424;
                                Gvar.var_234 = Gvar.var_2558;
                                Gvar.var_2557 = Gvar.var_2557 + Gvar.var_2558;
                                await Func.func547();
                                await Func.func745();
                                for (let cnt = 0; cnt < 2; ++cnt) {
                                    await Func.func337();
                                }
                                Gvar.var_2458 = 1;
                            }
                        }
                        if ( Gvar.var_2458 == 0  &&  Gvar.var_226 <= 12  &&  Gvar.var_226 != 0 ) {
                            Gvar.var_2459 = Gvar.var_83[Gvar.var_2424].Var1;
                            Gvar.var_2460 = Gvar.var_83[Gvar.var_2424].Var2;
                            Gvar.var_2461 = Gvar.var_83[Gvar.var_2424].Var1 - 1;
                            if ( Gvar.var_2461 < 0 ) {
                                Gvar.var_2461 = 0;
                            }
                            Gvar.var_2462 = Gvar.var_83[Gvar.var_2424].Var1 + 1;
                            if ( Gvar.var_2462 > Gvar.var_32 ) {
                                Gvar.var_2462 = Gvar.var_32;
                            }
                            Gvar.var_2463 = Gvar.var_83[Gvar.var_2424].Var2 + 1;
                            if ( Gvar.var_2463 > Gvar.var_33 ) {
                                Gvar.var_2463 = Gvar.var_33;
                            }
                            Gvar.var_2464 = Gvar.var_83[Gvar.var_2424].Var2 - 1;
                            if ( Gvar.var_2464 < 0 ) {
                                Gvar.var_2464 = 0;
                            }
                            if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_82[Gvar.var_2461][Gvar.var_2460] == Gvar.var_226 ) {
                                Gvar.var_456 = Gvar.var_2424;
                                Gvar.var_234 = Gvar.var_2558;
                                Gvar.var_2557 = Gvar.var_2557 + Gvar.var_2558;
                                await Func.func547();
                                await Func.func745();
                                for (let cnt = 0; cnt < 2; ++cnt) {
                                    await Func.func337();
                                }
                                Gvar.var_2458 = 1;
                            }
                            if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_82[Gvar.var_2462][Gvar.var_2460] == Gvar.var_226 ) {
                                Gvar.var_456 = Gvar.var_2424;
                                Gvar.var_234 = Gvar.var_2558;
                                Gvar.var_2557 = Gvar.var_2557 + Gvar.var_2558;
                                await Func.func547();
                                await Func.func745();
                                for (let cnt = 0; cnt < 2; ++cnt) {
                                    await Func.func337();
                                }
                                Gvar.var_2458 = 1;
                            }
                            if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_82[Gvar.var_2459][Gvar.var_2463] == Gvar.var_226 ) {
                                Gvar.var_456 = Gvar.var_2424;
                                Gvar.var_234 = Gvar.var_2558;
                                Gvar.var_2557 = Gvar.var_2557 + Gvar.var_2558;
                                await Func.func547();
                                await Func.func745();
                                for (let cnt = 0; cnt < 2; ++cnt) {
                                    await Func.func337();
                                }
                                Gvar.var_2458 = 1;
                            }
                            if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_82[Gvar.var_2459][Gvar.var_2464] == Gvar.var_226 ) {
                                Gvar.var_456 = Gvar.var_2424;
                                Gvar.var_234 = Gvar.var_2558;
                                Gvar.var_2557 = Gvar.var_2557 + Gvar.var_2558;
                                await Func.func547();
                                await Func.func745();
                                for (let cnt = 0; cnt < 2; ++cnt) {
                                    await Func.func337();
                                }
                                Gvar.var_2458 = 1;
                            }
                        }
                    }
                    Gvar.var_2424 = Gvar.var_2424 + 1;
                }
                for (let cnt = 0; cnt < 10; ++cnt) {
                    await Func.func337();
                }
                Gvar.var_604 = 0;
                if ( Gvar.var_2557 != 0 ) {
                    Adap.DSPLAY(143);
                    Gvar.var_1444 = 0;
                    Gvar.var_310 = 1;
                    Gvar.var_1442 = 1;
                    for (let cnt = 0; cnt < 20; ++cnt) {
                        await Func.func337();
                        Gvar.var_1442++;
                    }
                    Gvar.var_310 = 0;
                    Gvar.var_1442 = 0;
                    Gvar.var_236 = Gvar.var_236 + Gvar.var_2557;
                    if ( Gvar.var_236 > Gvar.var_383 ) {
                        Gvar.var_236 = Gvar.var_383;
                    }
                    await Func.setMessage("合計 " + Gvar.var_2557 + " のエネルギーを吸収した。", "", 10, false, false, false);
                    for (let cnt = 0; cnt < 10; ++cnt) {
                        await Func.func337();
                    }
                }
                Gvar.var_2455 = 0;
                if ( Gvar.var_2444 == 1 ) {
                    Gvar.var_2444 = 0;
                    await Func.func540();
                }
                Gvar.var_242 = 1;
                await Func.func019();
            }
            // "合計 " + Gvar.var_2557 + " の養分を吸収した。"
            // "満腹度が完全回復した。"
            // "満腹度が回復した。"
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        }
        // === DISC No.313: 養分吸収2 ===
        if (Gvar.var_2494 == 313) {
            await Func.func538();
            if (Gvar.var_193 == 1) {
                await Func.setMessage("発動能力がパワーアップしている！", "", 10, false, false, false);
                await Func.func358();
            }
            // "合計 " + Gvar.var_2557 + " の養分を吸収した。"
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        }
        // === DISC No.308: 人形設置 ===
        if (Gvar.var_2494 == 308) {
            // "そこには人形を出せないぞ。"
            await Func.setMessage("うけけけけけけけけけけッ！！", "", 10, false, false, false);
            for (let cnt = 0; cnt < 15; ++cnt) {
                await Func.func337();
            }
            if ( Gvar.var_2444 == 1 ) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        // === DISC No.203: ザ・フール(砂嵐) ===
        if (Gvar.var_2494 == 203) {
            await Func.func538();
            if (Gvar.var_652 == 0) { Gvar.var_475 = 11; }
            if (Gvar.var_652 == 1) { Gvar.var_475 = 1; }
            if (Gvar.var_652 == 2) { Gvar.var_475 = 16; }
            if (Gvar.var_652 == 3) { Gvar.var_475 = 29; }
            if (Gvar.var_652 == 4) { Gvar.var_475 = 40; }
            await Func.func099();
            await Func.setMessage("「アッフォオオ―――――ン！」", "", 10, false, false, false);
            Gvar.var_406 = 1;
            Gvar.var_1739 = 1;
            Gvar.var_310 = 1;
            Gvar.var_875 = 160;
            await Func.func337();
            Gvar.var_875 = 150;
            await Func.func337();
            Gvar.var_875 = 140;
            await Func.func337();
            Gvar.var_875 = 130;
            await Func.func337();
            Gvar.var_875 = 120;
            await Func.func337();
            Gvar.var_875 = 110;
            await Func.func337();
            Gvar.var_875 = 100;
            await Func.func337();
            for (let cnt = 0; cnt < 3; ++cnt) {
                Gvar.var_875 = 102;
                for (let cnt = 0; cnt < 2; ++cnt) {
                    await Func.func337();
                }
                Gvar.var_875 = 104;
                for (let cnt = 0; cnt < 2; ++cnt) {
                    await Func.func337();
                }
                Gvar.var_875 = 106;
                for (let cnt = 0; cnt < 2; ++cnt) {
                    await Func.func337();
                }
                Gvar.var_875 = 108;
                for (let cnt = 0; cnt < 4; ++cnt) {
                    await Func.func337();
                }
                Gvar.var_875 = 106;
                for (let cnt = 0; cnt < 2; ++cnt) {
                    await Func.func337();
                }
                Gvar.var_875 = 104;
                for (let cnt = 0; cnt < 2; ++cnt) {
                    await Func.func337();
                }
                Gvar.var_875 = 102;
                for (let cnt = 0; cnt < 2; ++cnt) {
                    await Func.func337();
                }
                Gvar.var_875 = 100;
                Gvar.var_1738 = 1;
                for (let cnt = 0; cnt < 5; ++cnt) {
                    await Func.func337();
                    Gvar.var_1738++;
                }
                Gvar.var_1738 = 0;
            }
            for (let cnt = 0; cnt < 16; ++cnt) {
                await Func.func337();
                Gvar.var_875 = Gvar.var_875 - 10;
            }
            Gvar.var_1739 = 0;
            Gvar.var_310 = 0;
            Gvar.var_2506 = 0;
            Gvar.var_2424 = 1;
            for (let cnt = 0; cnt < Gvar.var_107; ++cnt) {
                Gvar.var_2507 = 0;
                if ( Gvar.var_83[Gvar.var_2424].Var0 != 0 ) {
                    Gvar.var_2221 = Gvar.var_74 - 1;
                    if ( Gvar.var_2221 < 0 ) {
                        Gvar.var_2221 = 0;
                    }
                    Gvar.var_2222 = Gvar.var_74 + 1;
                    if ( Gvar.var_2222 > Gvar.var_32 ) {
                        Gvar.var_2222 = Gvar.var_32;
                    }
                    Gvar.var_2223 = Gvar.var_75 + 1;
                    if ( Gvar.var_2223 > Gvar.var_33 ) {
                        Gvar.var_2223 = Gvar.var_33;
                    }
                    Gvar.var_2224 = Gvar.var_75 - 1;
                    if ( Gvar.var_2224 < 0 ) {
                        Gvar.var_2224 = 0;
                    }
                    if ( Gvar.var_2507 == 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_74  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2223 ) {
                        await Func.func553();
                        Gvar.var_2507 = 1;
                    }
                    if ( Gvar.var_2507 == 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_74  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2224 ) {
                        await Func.func553();
                        Gvar.var_2507 = 1;
                    }
                    if ( Gvar.var_2507 == 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2221  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_75 ) {
                        await Func.func553();
                        Gvar.var_2507 = 1;
                    }
                    if ( Gvar.var_2507 == 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2222  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_75 ) {
                        await Func.func553();
                        Gvar.var_2507 = 1;
                    }
                    if ( Gvar.var_2507 == 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2221  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2223 ) {
                        await Func.func553();
                        Gvar.var_2507 = 1;
                    }
                    if ( Gvar.var_2507 == 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2222  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2223 ) {
                        await Func.func553();
                        Gvar.var_2507 = 1;
                    }
                    if ( Gvar.var_2507 == 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2221  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2224 ) {
                        await Func.func553();
                        Gvar.var_2507 = 1;
                    }
                    if ( Gvar.var_2507 == 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2222  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2224 ) {
                        await Func.func553();
                        Gvar.var_2507 = 1;
                    }
                }
                if ( Gvar.var_2507 == 1 ) {
                    Gvar.var_2506 = 1;
                }
                Gvar.var_2424 = Gvar.var_2424 + 1;
            }
            if ( Gvar.var_2506 == 1 ) {
                Adap.DSPLAY(153);
                Gvar.var_283 = Gvar.var_286;
                Gvar.var_284 = Gvar.var_287;
                Gvar.var_286 = "周りの敵は目に砂が入って";
                Gvar.var_287 = "盲目になってしまった！";
                await Func.func053();
                await Func.func358();
            }
            Gvar.var_406 = 0;
            await Func.func531();
            if ( Gvar.var_2444 == 1 ) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            }
            // "周りの敵は目に砂が入って"
            // "盲目になってしまった！"
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        // === DISC No.112/394: シアーハートアタック召喚 ===
        if (Gvar.var_2494 == 112 || Gvar.var_2494 == 394) {
            // 出せない場合
            // "そこには出せないぞ。"
            await Func.func538();
            await Func.func099();
            await Func.setMessage("「シアー・ハート・アタック」！！", "狙った標的は必ず仕留める…", 10, false, false, false);
            for (let cnt = 0; cnt < 5; ++cnt) {
                await Func.func337();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        }
        // === DISC No.204: シアーハートアタック爆発 ===
        if (Gvar.var_2494 == 204) {
            await Func.func538();
            await Func.setMessage("カチリ", "", 10, false, false, false);
            for (let cnt = 0; cnt < 15; ++cnt) {
                await Func.func337();
            }
            await Func.setMessage("ｼｱｰﾊｰﾄｱﾀｯｸが爆発した！", "", 10, false, false, false);
            Gvar.var_24 = Gvar.var_24[2];
            Gvar.var_25 = Gvar.var_25[2];
            Gvar.var_26 = Gvar.var_26[2];
            Gvar.var_2221 = Gvar.var_1541 - 1;
            if ( Gvar.var_2221 < 0 ) {
                Gvar.var_2221 = 0;
            }
            Gvar.var_2222 = Gvar.var_1541 + 1;
            Gvar.var_2223 = Gvar.var_1542 + 1;
            Gvar.var_2224 = Gvar.var_1542 - 1;
            if ( Gvar.var_2224 < 0 ) {
                Gvar.var_2224 = 0;
            }
            if ( Gvar.var_82[Gvar.var_2221][Gvar.var_1542] == 0 ) {
                Gvar.var_378 = Gvar.var_2221;
                Gvar.var_379 = Gvar.var_1542;
                await Func.func654();
            }
            if ( Gvar.var_82[Gvar.var_2222][Gvar.var_1542] == 0 ) {
                Gvar.var_378 = Gvar.var_2222;
                Gvar.var_379 = Gvar.var_1542;
                await Func.func654();
            }
            if ( Gvar.var_82[Gvar.var_1541][Gvar.var_2223] == 0 ) {
                Gvar.var_378 = Gvar.var_1541;
                Gvar.var_379 = Gvar.var_2223;
                await Func.func654();
            }
            if ( Gvar.var_82[Gvar.var_1541][Gvar.var_2224] == 0 ) {
                Gvar.var_378 = Gvar.var_1541;
                Gvar.var_379 = Gvar.var_2224;
                await Func.func654();
            }
            if ( Gvar.var_82[Gvar.var_2221][Gvar.var_2223] == 0 ) {
                Gvar.var_378 = Gvar.var_2221;
                Gvar.var_379 = Gvar.var_2223;
                await Func.func654();
            }
            if ( Gvar.var_82[Gvar.var_2222][Gvar.var_2223] == 0 ) {
                Gvar.var_378 = Gvar.var_2222;
                Gvar.var_379 = Gvar.var_2223;
                await Func.func654();
            }
            if ( Gvar.var_82[Gvar.var_2221][Gvar.var_2224] == 0 ) {
                Gvar.var_378 = Gvar.var_2221;
                Gvar.var_379 = Gvar.var_2224;
                await Func.func654();
            }
            if ( Gvar.var_82[Gvar.var_2222][Gvar.var_2224] == 0 ) {
                Gvar.var_378 = Gvar.var_2222;
                Gvar.var_379 = Gvar.var_2224;
                await Func.func654();
            }
            if ( Gvar.var_88[Gvar.var_1541][Gvar.var_1542] > 0 ) {
                Gvar.var_88[Gvar.var_1541][Gvar.var_1542] = 0;
            }
            if ( Gvar.var_88[Gvar.var_2221][Gvar.var_1542] > 0 ) {
                Gvar.var_88[Gvar.var_2221][Gvar.var_1542] = 0;
            }
            if ( Gvar.var_88[Gvar.var_2222][Gvar.var_1542] > 0 ) {
                Gvar.var_88[Gvar.var_2222][Gvar.var_1542] = 0;
            }
            if ( Gvar.var_88[Gvar.var_1541][Gvar.var_2223] > 0 ) {
                Gvar.var_88[Gvar.var_1541][Gvar.var_2223] = 0;
            }
            if ( Gvar.var_88[Gvar.var_1541][Gvar.var_2224] > 0 ) {
                Gvar.var_88[Gvar.var_1541][Gvar.var_2224] = 0;
            }
            if ( Gvar.var_88[Gvar.var_2221][Gvar.var_2223] > 0 ) {
                Gvar.var_88[Gvar.var_2221][Gvar.var_2223] = 0;
            }
            if ( Gvar.var_88[Gvar.var_2222][Gvar.var_2223] > 0 ) {
                Gvar.var_88[Gvar.var_2222][Gvar.var_2223] = 0;
            }
            if ( Gvar.var_88[Gvar.var_2221][Gvar.var_2224] > 0 ) {
                Gvar.var_88[Gvar.var_2221][Gvar.var_2224] = 0;
            }
            if ( Gvar.var_88[Gvar.var_2222][Gvar.var_2224] > 0 ) {
                Gvar.var_88[Gvar.var_2222][Gvar.var_2224] = 0;
            }
            Gvar.var_224 = 2;
            Gvar.var_124 = 2;
            Gvar.var_1400 = 1;
            Adap.DSPLAY(180);
            Gvar.var_310 = 1;
            Gvar.var_1540 = 1;
            for (let cnt = 0; cnt < 3; ++cnt) {
                Gvar.var_664 = 3;
                await Func.func337();
                Gvar.var_664 = 0;
                await Func.func337();
                Gvar.var_1540++;
            }
            for (let cnt = 0; cnt < 24; ++cnt) {
                await Func.func337();
                if ( cnt == 25 ) {
                    Gvar.var_1400 = 0;
                }
                Gvar.var_1540++;
            }
            Gvar.var_310 = 0;
            Gvar.var_1540 = 0;
            Gvar.var_1400 = 0;
            Gvar.var_457 = "ｼｱｰﾊｰﾄｱﾀｯｸが爆発した！";
            Gvar.var_2424 = 1;
            Gvar.var_2425 = 1;
            Gvar.var_2426 = 2;
            for (let cnt = 0; cnt < Gvar.var_107; ++cnt) {
                if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_1541  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2223 ) {
                    await Func.func740();
                }
                if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_1541  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2224 ) {
                    await Func.func740();
                }
                if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2221  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_1542 ) {
                    await Func.func740();
                }
                if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2222  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_1542 ) {
                    await Func.func740();
                }
                if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2221  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2223 ) {
                    await Func.func740();
                }
                if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2222  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2223 ) {
                    await Func.func740();
                }
                if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2221  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2224 ) {
                    await Func.func740();
                }
                if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2222  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2224 ) {
                    await Func.func740();
                }
                Gvar.var_234 = 0;
                Gvar.var_2424 = Gvar.var_2424 + 1;
            }
            Gvar.var_2426 = 0;
            Gvar.var_2425 = 0;
            if ( Gvar.var_236 == 1 ) {
                Gvar.var_236 = 0;
                Gvar.var_387 = 209;
                for (let cnt = 0; cnt < 9; ++cnt) {
                    await Func.func337();
                }
            }
            if ( Gvar.var_236 > 1 ) {
                Gvar.var_2428 = Gvar.var_236 / 2;
                if ( Gvar.var_177[314] == 1  &&  Gvar.var_176 == 0 ) {
                    Gvar.var_2428 = Gvar.var_2428 / 2;
                }
                if ( Gvar.var_176 == 144  ||  Gvar.var_176 == 21  ||  Gvar.var_176 == 137  ||  Gvar.var_176 == 32 ) {
                    Gvar.var_2428 = 10;
                }
                Gvar.var_236 = Gvar.var_236 - Gvar.var_2428;
                if ( Gvar.var_236 <= 0 ) {
                    Gvar.var_236 = 1;
                }
                Gvar.var_233 = Gvar.var_2428 + Gvar.var_233;
            }
            Gvar.var_124 = 0;
            Gvar.var_2429 = 1;
            for (let cnt = 0; cnt < Gvar.var_107; ++cnt) {
                if ( Gvar.var_83[Gvar.var_2429].Var0 == 17  &&  Gvar.var_83[Gvar.var_2429].Var29 == 1 ) {
                    await Func.func739();
                    Gvar.var_2429 = 1;
                    continue;
                }
                Gvar.var_2429++;
            }
            if ( Gvar.var_2444 == 1 ) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        // === DISC No.312: 電気攻撃(伝達力) ===
        if (Gvar.var_2494 == 312) {
            await Func.func538();
            if (Gvar.var_193 == 1) {
                await Func.setMessage("発動能力がパワーアップしている！", "", 10, false, false, false);
                await Func.func358();
            }
            // "地面が濡れて伝達力が上がっている！"
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        }
        // === DISC No.316: ファイトクラブ ===
        if (Gvar.var_2494 == 316) {
            await Func.func538();
            if ( Gvar.var_652 == 0 ) {
                Gvar.var_475 = 11;
            }
            if ( Gvar.var_652 == 1 ) {
                Gvar.var_475 = 1;
            }
            if ( Gvar.var_652 == 2 ) {
                Gvar.var_475 = 16;
            }
            if ( Gvar.var_652 == 3 ) {
                Gvar.var_475 = 29;
            }
            if ( Gvar.var_652 == 4 ) {
                Gvar.var_475 = 40;
            }
            if ( Gvar.var_193 == 1 ) {
                await Func.setMessage("発動能力がパワーアップしている！", "", 10, false, false, false);
                await Func.func358();
            }
            if ( Gvar.var_199 == 1 ) {
                await Func.setMessage("地面が濡れて伝達力が上がっている！", "", 10, false, false, false);
                await Func.func358();
            }
            Gvar.var_310 = 1;
            Gvar.var_1679 = 1;
            Adap.DSPLAY(161);
            for (let cnt = 0; cnt < 26; ++cnt) {
                await Func.func337();
                Gvar.var_1679++;
            }
            Gvar.var_1679 = 0;
            Gvar.var_310 = 0;
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
            }
            Gvar.var_2220 = 1;
            Gvar.var_2221 = Gvar.var_74 - 1;
            Gvar.var_2222 = Gvar.var_74 + 1;
            Gvar.var_2223 = Gvar.var_75 + 1;
            Gvar.var_2224 = Gvar.var_75 - 1;
            for (let cnt = 0; cnt < Gvar.var_107; ++cnt) {
                if ( Gvar.var_83[Gvar.var_2220].Var10 == Gvar.var_226  &&  Gvar.var_226 != 14 ) {
                    Gvar.var_83[Gvar.var_2220].Var12 = 0;
                    Gvar.var_83[Gvar.var_2220].Var17 = 1;
                }
                if ( Gvar.var_226 <= 12  &&  Gvar.var_226 != 0 ) {
                    Gvar.var_2459 = Gvar.var_83[Gvar.var_2220].Var1;
                    Gvar.var_2460 = Gvar.var_83[Gvar.var_2220].Var2;
                    Gvar.var_2461 = Gvar.var_83[Gvar.var_2220].Var1 - 1;
                    if ( Gvar.var_2461 < 0 ) {
                        Gvar.var_2461 = 0;
                    }
                    Gvar.var_2462 = Gvar.var_83[Gvar.var_2220].Var1 + 1;
                    if ( Gvar.var_2462 > Gvar.var_32 ) {
                        Gvar.var_2462 = Gvar.var_32;
                    }
                    Gvar.var_2463 = Gvar.var_83[Gvar.var_2220].Var2 + 1;
                    if ( Gvar.var_2463 > Gvar.var_33 ) {
                        Gvar.var_2463 = Gvar.var_33;
                    }
                    Gvar.var_2464 = Gvar.var_83[Gvar.var_2220].Var2 - 1;
                    if ( Gvar.var_2464 < 0 ) {
                        Gvar.var_2464 = 0;
                    }
                    if ( Gvar.var_83[Gvar.var_2220].Var0 != 0  &&  Gvar.var_82[Gvar.var_2461][Gvar.var_2460] == Gvar.var_226 ) {
                        Gvar.var_83[Gvar.var_2220].Var12 = 0;
                        Gvar.var_83[Gvar.var_2220].Var17 = 1;
                    }
                    if ( Gvar.var_83[Gvar.var_2220].Var0 != 0  &&  Gvar.var_82[Gvar.var_2462][Gvar.var_2460] == Gvar.var_226 ) {
                        Gvar.var_83[Gvar.var_2220].Var12 = 0;
                        Gvar.var_83[Gvar.var_2220].Var17 = 1;
                    }
                    if ( Gvar.var_83[Gvar.var_2220].Var0 != 0  &&  Gvar.var_82[Gvar.var_2459][Gvar.var_2463] == Gvar.var_226 ) {
                        Gvar.var_83[Gvar.var_2220].Var12 = 0;
                        Gvar.var_83[Gvar.var_2220].Var17 = 1;
                    }
                    if ( Gvar.var_83[Gvar.var_2220].Var0 != 0  &&  Gvar.var_82[Gvar.var_2459][Gvar.var_2464] == Gvar.var_226 ) {
                        Gvar.var_83[Gvar.var_2220].Var12 = 0;
                        Gvar.var_83[Gvar.var_2220].Var17 = 1;
                    }
                }
                if ( Gvar.var_83[Gvar.var_2220].Var1 == Gvar.var_74  &&  Gvar.var_83[Gvar.var_2220].Var2 == Gvar.var_2223 ) {
                    Gvar.var_83[Gvar.var_2220].Var12 = 0;
                    Gvar.var_83[Gvar.var_2220].Var17 = 1;
                }
                if ( Gvar.var_83[Gvar.var_2220].Var1 == Gvar.var_74  &&  Gvar.var_83[Gvar.var_2220].Var2 == Gvar.var_2224 ) {
                    Gvar.var_83[Gvar.var_2220].Var12 = 0;
                    Gvar.var_83[Gvar.var_2220].Var17 = 1;
                }
                if ( Gvar.var_83[Gvar.var_2220].Var1 == Gvar.var_2221  &&  Gvar.var_83[Gvar.var_2220].Var2 == Gvar.var_75 ) {
                    Gvar.var_83[Gvar.var_2220].Var12 = 0;
                    Gvar.var_83[Gvar.var_2220].Var17 = 1;
                }
                if ( Gvar.var_83[Gvar.var_2220].Var1 == Gvar.var_2222  &&  Gvar.var_83[Gvar.var_2220].Var2 == Gvar.var_75 ) {
                    Gvar.var_83[Gvar.var_2220].Var12 = 0;
                    Gvar.var_83[Gvar.var_2220].Var17 = 1;
                }
                if ( Gvar.var_83[Gvar.var_2220].Var1 == Gvar.var_2221  &&  Gvar.var_83[Gvar.var_2220].Var2 == Gvar.var_2223 ) {
                    Gvar.var_83[Gvar.var_2220].Var12 = 0;
                    Gvar.var_83[Gvar.var_2220].Var17 = 1;
                }
                if ( Gvar.var_83[Gvar.var_2220].Var1 == Gvar.var_2222  &&  Gvar.var_83[Gvar.var_2220].Var2 == Gvar.var_2223 ) {
                    Gvar.var_83[Gvar.var_2220].Var12 = 0;
                    Gvar.var_83[Gvar.var_2220].Var17 = 1;
                }
                if ( Gvar.var_83[Gvar.var_2220].Var1 == Gvar.var_2221  &&  Gvar.var_83[Gvar.var_2220].Var2 == Gvar.var_2224 ) {
                    Gvar.var_83[Gvar.var_2220].Var12 = 0;
                    Gvar.var_83[Gvar.var_2220].Var17 = 1;
                }
                if ( Gvar.var_83[Gvar.var_2220].Var1 == Gvar.var_2222  &&  Gvar.var_83[Gvar.var_2220].Var2 == Gvar.var_2224 ) {
                    Gvar.var_83[Gvar.var_2220].Var12 = 0;
                    Gvar.var_83[Gvar.var_2220].Var17 = 1;
                }
                if ( Gvar.var_193 == 1  ||  Gvar.var_199 == 1 ) {
                    Gvar.var_83[Gvar.var_2220].Var12 = 0;
                    Gvar.var_83[Gvar.var_2220].Var17 = 1;
                }
                Gvar.var_2220 = Gvar.var_2220 + 1;
            }
            await Func.func144();
            Gvar.var_131 = 0;
            await Func.setMessage("ファイトクラブだっ！！", "", 10, false, false, false);
            for (let cnt = 0; cnt < 5; ++cnt) {
                await Func.func337();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        }
        // === DISC No.223: D4C(ドジャアア～～ン) ===
        if (Gvar.var_2494 == 223) {
            await Func.func099();
            await Func.setMessage("ドジャアア～～ン", "", 10, false, false, false);
            Gvar.var_121 = 1;
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
            }
            Gvar.var_121 = 2;
            Adap.DSPLAY(121);
            for (let cnt = 0; cnt < 9; ++cnt) {
                if ( Gvar.var_121 == 9 ) {
                    Adap.DSPLAY(118);
                }
                await Func.func337();
                Gvar.var_121 = Gvar.var_121 + 1;
            }
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
            }
            Gvar.var_461 = 0;
            Gvar.var_375 = 0;
            Gvar.var_602 = 0;
            Gvar.var_603 = 1;
            await Func.func064();
            Gvar.var_405 = 5;
            for (let cnt = 0; cnt < 2; ++cnt) {
                await Func.func337();
            }
            Gvar.var_405 = 4;
            for (let cnt = 0; cnt < 2; ++cnt) {
                await Func.func337();
            }
            Gvar.var_405 = 3;
            for (let cnt = 0; cnt < 2; ++cnt) {
                await Func.func337();
            }
            Gvar.var_405 = 2;
            for (let cnt = 0; cnt < 2; ++cnt) {
                await Func.func337();
            }
            Gvar.var_405 = 1;
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
            }
            Gvar.var_405 = 0;
            if ( Gvar.var_84[Gvar.var_74][Gvar.var_75] == 1 ) {
                if ( Gvar.var_79 > Gvar.var_408 ) {
                    Gvar.var_408 = Gvar.var_79;
                }
                if ( Gvar.var_70 == 1  &&  Gvar.var_79 > Gvar.var_409 ) {
                    Gvar.var_409 = Gvar.var_79;
                }
                if ( Gvar.var_70 == 2  &&  Gvar.var_79 > Gvar.var_410 ) {
                    Gvar.var_410 = Gvar.var_79;
                }
                if ( Gvar.var_70 == 3  &&  Gvar.var_79 > Gvar.var_411 ) {
                    Gvar.var_411 = Gvar.var_79;
                }
                if ( Gvar.var_70 == 4  &&  Gvar.var_79 > Gvar.var_412 ) {
                    Gvar.var_412 = Gvar.var_79;
                }
                if ( Gvar.var_70 == 5  &&  Gvar.var_79 > Gvar.var_413 ) {
                    Gvar.var_413 = Gvar.var_79;
                }
                if ( Gvar.var_70 == 6  &&  Gvar.var_79 > Gvar.var_409 ) {
                    Gvar.var_409 = Gvar.var_79;
                }
                if ( Gvar.var_70 == 7  &&  Gvar.var_79 > Gvar.var_413 ) {
                    Gvar.var_413 = Gvar.var_79;
                }
                if ( Gvar.var_70 == 8  &&  Gvar.var_79 > Gvar.var_413 ) {
                    Gvar.var_413 = Gvar.var_79;
                }
                if ( Gvar.var_70 == 9  &&  Gvar.var_79 > Gvar.var_413 ) {
                    Gvar.var_413 = Gvar.var_79;
                }
            }
            Gvar.var_104 = 0;
            await Func.func062();
            Gvar.var_230 = 1;
            await Func.func244();
            if ( Gvar.var_463 == 1 ) {
                await Func.func0963();
            }
            if ( Gvar.var_463 == 2 ) {
                await Func.func0991();
            }
            await Func.func080();
            for (let cnt = 0; cnt < 80; ++cnt) {
                await Func.func357();
            }
            await Func.func006();
            }
        // === DISC No.224: ホワイトアルバム(白い凍結) ===
        if (Gvar.var_2494 == 224) {
            await Func.func538();
            if (Gvar.var_652 == 0) { Gvar.var_475 = 11; }
            if (Gvar.var_652 == 1) { Gvar.var_475 = 1; }
            if (Gvar.var_652 == 2) { Gvar.var_475 = 16; }
            if (Gvar.var_652 == 3) { Gvar.var_475 = 29; }
            if (Gvar.var_652 == 4) { Gvar.var_475 = 40; }
            }
            Adap.DSPLAY(123);
            Adap.gsel(19);
            Adap.color(255, 255, 255);
            Adap.boxf(0, 0, 340, 340);
            Adap.gsel(0);
            Gvar.var_342 = 0;
            Gvar.var_343 = 1;
            Gvar.var_1277 = 0;
            for (let cnt = 0; cnt < 51; ++cnt) {
                await Func.func337();
                Gvar.var_342 = Gvar.var_342 + 5;
            }
            for (let cnt = 0; cnt < 20; ++cnt) {
                await Func.func337();
                Gvar.var_1277 = Gvar.var_1277 + 1;
            }
            Gvar.var_2563 = 0;
            Gvar.var_2506 = 0;
            Gvar.var_2424 = 1;
            for (let cnt = 0; cnt < Gvar.var_107; ++cnt) {
                Gvar.var_2507 = 0;
                if ( Gvar.var_83[Gvar.var_2424].Var0 != 0 ) {
                    Gvar.var_2221 = Gvar.var_74 - 1;
                    if ( Gvar.var_2221 < 0 ) {
                        Gvar.var_2221 = 0;
                    }
                    Gvar.var_2222 = Gvar.var_74 + 1;
                    if ( Gvar.var_2222 > Gvar.var_32 ) {
                        Gvar.var_2222 = Gvar.var_32;
                    }
                    Gvar.var_2223 = Gvar.var_75 + 1;
                    if ( Gvar.var_2223 > Gvar.var_33 ) {
                        Gvar.var_2223 = Gvar.var_33;
                    }
                    Gvar.var_2224 = Gvar.var_75 - 1;
                    if ( Gvar.var_2224 < 0 ) {
                        Gvar.var_2224 = 0;
                    }
                    if ( Gvar.var_2507 == 0  &&  Gvar.var_2424 != Gvar.var_141  &&  Gvar.var_83[Gvar.var_2424].Var10 == Gvar.var_226  &&  Gvar.var_226 > 0  &&  Gvar.var_226 <= 12  &&  Gvar.var_193 == 1 ) {
                        await Func.func552();
                        Gvar.var_2564 = Adap.rnd(3);
                        Gvar.var_268 = Gvar.var_83[Gvar.var_2424].Var0;
                        await Func.func658();
                        if ( Gvar.var_2497 == 0 ) {
                            if ( Gvar.var_2506 == 0 ) {
                                Gvar.var_2563 = Gvar.var_2424;
                            }
                        } else {
                            if ( Gvar.var_2564 == 0 ) {
                                Gvar.var_2563 = Gvar.var_2424;
                            }
                        }
                    }
                    Gvar.var_2507 = 1;
                }
                if ( Gvar.var_2507 == 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_74  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2223 ) {
                    await Func.func552();
                    Gvar.var_2564 = Adap.rnd(3);
                    Gvar.var_268 = Gvar.var_83[Gvar.var_2424].Var0;
                    await Func.func658();
                    if ( Gvar.var_2497 == 0 ) {
                        if ( Gvar.var_2506 == 0 ) {
                            Gvar.var_2563 = Gvar.var_2424;
                        }
                    } else {
                        if ( Gvar.var_2564 == 0 ) {
                            Gvar.var_2563 = Gvar.var_2424;
                        }
                    }
                }
                Gvar.var_2507 = 1;
            }
            if ( Gvar.var_2507 == 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_74  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2224 ) {
                await Func.func552();
                Gvar.var_2564 = Adap.rnd(3);
                Gvar.var_268 = Gvar.var_83[Gvar.var_2424].Var0;
                await Func.func658();
                if ( Gvar.var_2497 == 0 ) {
                    if ( Gvar.var_2506 == 0 ) {
                        Gvar.var_2563 = Gvar.var_2424;
                    }
                } else {
                    if ( Gvar.var_2564 == 0 ) {
                        Gvar.var_2563 = Gvar.var_2424;
                    }
                }
            }
            Gvar.var_2507 = 1;
            if ( Gvar.var_2507 == 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2221  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_75 ) {
                await Func.func552();
                Gvar.var_2564 = Adap.rnd(3);
                Gvar.var_268 = Gvar.var_83[Gvar.var_2424].Var0;
                await Func.func658();
                if ( Gvar.var_2497 == 0 ) {
                    if ( Gvar.var_2506 == 0 ) {
                        Gvar.var_2563 = Gvar.var_2424;
                    }
                } else {
                    if ( Gvar.var_2564 == 0 ) {
                        Gvar.var_2563 = Gvar.var_2424;
                    }
                }
            }
            Gvar.var_2507 = 1;
            if ( Gvar.var_2507 == 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2222  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_75 ) {
                await Func.func552();
                Gvar.var_2564 = Adap.rnd(3);
                Gvar.var_268 = Gvar.var_83[Gvar.var_2424].Var0;
                await Func.func658();
                if ( Gvar.var_2497 == 0 ) {
                    if ( Gvar.var_2506 == 0 ) {
                        Gvar.var_2563 = Gvar.var_2424;
                    }
                } else {
                    if ( Gvar.var_2564 == 0 ) {
                        Gvar.var_2563 = Gvar.var_2424;
                    }
                }
            }
            Gvar.var_2507 = 1;
            if ( Gvar.var_2507 == 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2221  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2223 ) {
                await Func.func552();
                Gvar.var_2564 = Adap.rnd(3);
                Gvar.var_268 = Gvar.var_83[Gvar.var_2424].Var0;
                await Func.func658();
                if ( Gvar.var_2497 == 0 ) {
                    if ( Gvar.var_2506 == 0 ) {
                        Gvar.var_2563 = Gvar.var_2424;
                    }
                } else {
                    if ( Gvar.var_2564 == 0 ) {
                        Gvar.var_2563 = Gvar.var_2424;
                    }
                }
            }
            Gvar.var_2507 = 1;
            if ( Gvar.var_2507 == 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2222  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2223 ) {
                await Func.func552();
                Gvar.var_2564 = Adap.rnd(3);
                Gvar.var_268 = Gvar.var_83[Gvar.var_2424].Var0;
                await Func.func658();
                if ( Gvar.var_2497 == 0 ) {
                    if ( Gvar.var_2506 == 0 ) {
                        Gvar.var_2563 = Gvar.var_2424;
                    }
                } else {
                    if ( Gvar.var_2564 == 0 ) {
                        Gvar.var_2563 = Gvar.var_2424;
                    }
                }
            }
            Gvar.var_2507 = 1;
            if ( Gvar.var_2507 == 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2221  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2224 ) {
                await Func.func552();
                Gvar.var_2564 = Adap.rnd(3);
                Gvar.var_268 = Gvar.var_83[Gvar.var_2424].Var0;
                await Func.func658();
                if ( Gvar.var_2497 == 0 ) {
                    if ( Gvar.var_2506 == 0 ) {
                        Gvar.var_2563 = Gvar.var_2424;
                    }
                } else {
                    if ( Gvar.var_2564 == 0 ) {
                        Gvar.var_2563 = Gvar.var_2424;
                    }
                }
            }
            Gvar.var_2507 = 1;
            if ( Gvar.var_2507 == 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2222  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2224 ) {
                await Func.func552();
                Gvar.var_2564 = Adap.rnd(3);
                Gvar.var_268 = Gvar.var_83[Gvar.var_2424].Var0;
                await Func.func658();
                if ( Gvar.var_2497 == 0 ) {
                    if ( Gvar.var_2506 == 0 ) {
                        Gvar.var_2563 = Gvar.var_2424;
                    }
                } else {
                    if ( Gvar.var_2564 == 0 ) {
                        Gvar.var_2563 = Gvar.var_2424;
                    }
                }
            }
            Gvar.var_2507 = 1;
            if ( Gvar.var_226 <= 12  &&  Gvar.var_226 != 0 ) {
                Gvar.var_2459 = Gvar.var_83[Gvar.var_2424].Var1;
                Gvar.var_2460 = Gvar.var_83[Gvar.var_2424].Var2;
                Gvar.var_2461 = Gvar.var_83[Gvar.var_2424].Var1 - 1;
                if ( Gvar.var_2461 < 0 ) {
                    Gvar.var_2461 = 0;
                }
                Gvar.var_2462 = Gvar.var_83[Gvar.var_2424].Var1 + 1;
                if ( Gvar.var_2462 > Gvar.var_32 ) {
                    Gvar.var_2462 = Gvar.var_32;
                }
                Gvar.var_2463 = Gvar.var_83[Gvar.var_2424].Var2 + 1;
                if ( Gvar.var_2463 > Gvar.var_33 ) {
                    Gvar.var_2463 = Gvar.var_33;
                }
                Gvar.var_2464 = Gvar.var_83[Gvar.var_2424].Var2 - 1;
                if ( Gvar.var_2464 < 0 ) {
                    Gvar.var_2464 = 0;
                }
                if ( Gvar.var_2507 == 0  &&  Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_82[Gvar.var_2461][Gvar.var_2460] == Gvar.var_226 ) {
                    await Func.func552();
                    Gvar.var_2564 = Adap.rnd(3);
                    Gvar.var_268 = Gvar.var_83[Gvar.var_2424].Var0;
                    await Func.func658();
                    if ( Gvar.var_2497 == 0 ) {
                        if ( Gvar.var_2506 == 0 ) {
                            Gvar.var_2563 = Gvar.var_2424;
                        }
                    } else {
                        if ( Gvar.var_2564 == 0 ) {
                            Gvar.var_2563 = Gvar.var_2424;
                        }
                    }
                }
                Gvar.var_2507 = 1;
            }
            if ( Gvar.var_2507 == 0  &&  Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_82[Gvar.var_2462][Gvar.var_2460] == Gvar.var_226 ) {
                await Func.func552();
                Gvar.var_2564 = Adap.rnd(3);
                Gvar.var_268 = Gvar.var_83[Gvar.var_2424].Var0;
                await Func.func658();
                if ( Gvar.var_2497 == 0 ) {
                    if ( Gvar.var_2506 == 0 ) {
                        Gvar.var_2563 = Gvar.var_2424;
                    }
                } else {
                    if ( Gvar.var_2564 == 0 ) {
                        Gvar.var_2563 = Gvar.var_2424;
                    }
                }
            }
            Gvar.var_2507 = 1;
            if ( Gvar.var_2507 == 0  &&  Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_82[Gvar.var_2459][Gvar.var_2463] == Gvar.var_226 ) {
                await Func.func552();
                Gvar.var_2564 = Adap.rnd(3);
                Gvar.var_268 = Gvar.var_83[Gvar.var_2424].Var0;
                await Func.func658();
                if ( Gvar.var_2497 == 0 ) {
                    if ( Gvar.var_2506 == 0 ) {
                        Gvar.var_2563 = Gvar.var_2424;
                    }
                } else {
                    if ( Gvar.var_2564 == 0 ) {
                        Gvar.var_2563 = Gvar.var_2424;
                    }
                }
            }
            Gvar.var_2507 = 1;
            if ( Gvar.var_2507 == 0  &&  Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_82[Gvar.var_2459][Gvar.var_2464] == Gvar.var_226 ) {
                await Func.func552();
                Gvar.var_2564 = Adap.rnd(3);
                Gvar.var_268 = Gvar.var_83[Gvar.var_2424].Var0;
                await Func.func658();
                if ( Gvar.var_2497 == 0 ) {
                    if ( Gvar.var_2506 == 0 ) {
                        Gvar.var_2563 = Gvar.var_2424;
                    }
                } else {
                    if ( Gvar.var_2564 == 0 ) {
                        Gvar.var_2563 = Gvar.var_2424;
                    }
                }
            }
            Gvar.var_2507 = 1;
            if ( Gvar.var_2507 == 1 ) {
                Gvar.var_2506 = 1;
            }
            Gvar.var_2424 = Gvar.var_2424 + 1;
            Gvar.var_131 = 0;
            Gvar.var_244 = 1;
            if ( Gvar.var_2563 != 0 ) {
                Gvar.var_176 = Gvar.var_83[Gvar.var_2563].Var0;
                await Func.func1014();
                await Func.func1015();
                await Func.func526();
                // @ts-ignore HSP: var_93(var_308(var_2563, 1), var_308(var_2563, 2)) = 0
                Gvar.var_116 = 1;
                Gvar.var_209 = Gvar.var_74;
                Gvar.var_210 = Gvar.var_75;
                Gvar.var_211 = 207;
                Gvar.var_2565 = Gvar.var_83[Gvar.var_2563].Var3;
                Gvar.var_2566 = Gvar.var_83[Gvar.var_2563].Var0;
                Gvar.var_74 = Gvar.var_83[Gvar.var_2563].Var1;
                Gvar.var_75 = Gvar.var_83[Gvar.var_2563].Var2;
                await Func.func016();
                if ( Gvar.var_226 != 14 ) {
                    await Func.func017();
                }
                await Func.func018();
                if ( Gvar.var_225 == Gvar.var_226  &&  Gvar.var_104 != 8 ) {
                    Gvar.var_109 = 1;
                }
                if ( Gvar.var_227 == Gvar.var_226  &&  Gvar.var_104 != 8 ) {
                    Gvar.var_110 = 1;
                }
                Gvar.var_83[Gvar.var_2563].Var0 = 0;
                Gvar.var_83[Gvar.var_2563].Var1 = 0;
                Gvar.var_83[Gvar.var_2563].Var2 = 0;
                Gvar.var_224 = Gvar.var_83[Gvar.var_2563].Var5;
                await Func.func732();
            }
            for (let cnt = 0; cnt < 51; ++cnt) {
                await Func.func337();
                Gvar.var_342 = Gvar.var_342 - 5;
                Gvar.var_1277 = Gvar.var_1277 + 1;
            }
            Gvar.var_1277 = 0;
            Gvar.var_343 = 0;
            Gvar.var_476 = 0;
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        // === DISC No.202: ホワイトアルバム(全凍結) ===
        if (Gvar.var_2494 == 202) {
            await Func.func538();
            if (Gvar.var_193 == 1) {
                await Func.setMessage("発動能力がパワーアップしている！", "", 10, false, false, false);
                await Func.func358();
            }
            await Func.setMessage("低温世界で動ける物質はなにもなくなる", "全てを止められる！", 10, false, false, false);
            Gvar.var_284 = "全てを止められる！";
            Adap.gsel(19);
            Adap.color(255, 255, 255);
            Adap.boxf(0, 0, 340, 340);
            Adap.gsel(0);
            Adap.DSPLAY(126);
            Gvar.var_604 = 1;
            for (let cnt = 0; cnt < 20; ++cnt) {
                await Func.func337();
            }
            Gvar.var_2220 = 1;
            Gvar.var_2221 = Gvar.var_74 - 1;
            Gvar.var_2222 = Gvar.var_74 + 1;
            Gvar.var_2223 = Gvar.var_75 + 1;
            Gvar.var_2224 = Gvar.var_75 - 1;
            for (let cnt = 0; cnt < Gvar.var_107; ++cnt) {
                if ( Gvar.var_83[Gvar.var_2220].Var10 == Gvar.var_226  &&  Gvar.var_226 != 14 ) {
                    Gvar.var_83[Gvar.var_2220].Var12 = 0;
                    Gvar.var_83[Gvar.var_2220].Var13 = 1;
            Gvar.var_131 = 0;
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        }
        // === DISC No.395: キラークイーン第3の爆弾 BITE THE DUST ===
        if (Gvar.var_2494 == 395) {
            await Func.func538();
            await Func.func099();
            await Func.setMessage("キラークィーン【第３の爆弾】", "「BITE THE DUST」（負けて死ね）！！", 10, false, false, false);
            Gvar.var_284 = "「BITE THE DUST」（負けて死ね）！！";
            for (let cnt = 0; cnt < 20; ++cnt) {
                await Func.func337();
            }
            Gvar.var_2567 = 0;
            Gvar.var_2424 = 1;
            for (let cnt = 0; cnt < Gvar.var_107; ++cnt) {
                if ( Gvar.var_2424 != Gvar.var_141  &&  Gvar.var_83[Gvar.var_2424].Var0 != 132  &&  Gvar.var_83[Gvar.var_2424].Var0 != 143  &&  Gvar.var_83[Gvar.var_2424].Var0 != 34  &&  Gvar.var_83[Gvar.var_2424].Var31 != 4  &&  Gvar.var_83[Gvar.var_2424].Var31 != 5 ) {
                    if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var10 == Gvar.var_226  &&  Gvar.var_226 > 0  &&  Gvar.var_226 <= 12 ) {
                        Gvar.var_83[Gvar.var_2424].Var12 = 0;
                        Gvar.var_83[Gvar.var_2424].Var13 = 0;
                        Gvar.var_83[Gvar.var_2424].Var24 = 3;
                        Gvar.var_2567 = 1;
                    }
                    if ( Gvar.var_2458 == 0 ) {
                        Gvar.var_2221 = Gvar.var_74 - 1;
                        if ( Gvar.var_2221 < 0 ) {
                            Gvar.var_2221 = 0;
                        }
                        Gvar.var_2222 = Gvar.var_74 + 1;
                        if ( Gvar.var_2222 > Gvar.var_32 ) {
                            Gvar.var_2222 = Gvar.var_32;
                        }
                        Gvar.var_2223 = Gvar.var_75 + 1;
                        if ( Gvar.var_2223 > Gvar.var_33 ) {
                            Gvar.var_2223 = Gvar.var_33;
                        }
                        Gvar.var_2224 = Gvar.var_75 - 1;
                        if ( Gvar.var_2224 < 0 ) {
                            Gvar.var_2224 = 0;
                        }
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_74  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2223 ) {
                            Gvar.var_83[Gvar.var_2424].Var12 = 0;
                            Gvar.var_83[Gvar.var_2424].Var13 = 0;
                            Gvar.var_83[Gvar.var_2424].Var24 = 3;
                            Gvar.var_2567 = 1;
                        }
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_74  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2224 ) {
                            Gvar.var_83[Gvar.var_2424].Var12 = 0;
                            Gvar.var_83[Gvar.var_2424].Var13 = 0;
                            Gvar.var_83[Gvar.var_2424].Var24 = 3;
                            Gvar.var_2567 = 1;
                        }
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2221  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_75 ) {
                            Gvar.var_83[Gvar.var_2424].Var12 = 0;
                            Gvar.var_83[Gvar.var_2424].Var13 = 0;
                            Gvar.var_83[Gvar.var_2424].Var24 = 3;
                            Gvar.var_2567 = 1;
                        }
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2222  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_75 ) {
                            Gvar.var_83[Gvar.var_2424].Var12 = 0;
                            Gvar.var_83[Gvar.var_2424].Var13 = 0;
                            Gvar.var_83[Gvar.var_2424].Var24 = 3;
                            Gvar.var_2567 = 1;
                        }
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2221  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2223 ) {
                            Gvar.var_83[Gvar.var_2424].Var12 = 0;
                            Gvar.var_83[Gvar.var_2424].Var13 = 0;
                            Gvar.var_83[Gvar.var_2424].Var24 = 3;
                            Gvar.var_2567 = 1;
                        }
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2222  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2223 ) {
                            Gvar.var_83[Gvar.var_2424].Var12 = 0;
                            Gvar.var_83[Gvar.var_2424].Var13 = 0;
                            Gvar.var_83[Gvar.var_2424].Var24 = 3;
                            Gvar.var_2567 = 1;
                        }
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2221  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2224 ) {
                            Gvar.var_83[Gvar.var_2424].Var12 = 0;
                            Gvar.var_83[Gvar.var_2424].Var13 = 0;
                            Gvar.var_83[Gvar.var_2424].Var24 = 3;
                            Gvar.var_2567 = 1;
                        }
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2222  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2224 ) {
                            Gvar.var_83[Gvar.var_2424].Var12 = 0;
                            Gvar.var_83[Gvar.var_2424].Var13 = 0;
                            Gvar.var_83[Gvar.var_2424].Var24 = 3;
                            Gvar.var_2567 = 1;
                        }
                    }
                    if ( Gvar.var_2458 == 0  &&  Gvar.var_226 <= 12  &&  Gvar.var_226 != 0 ) {
                        Gvar.var_2459 = Gvar.var_83[Gvar.var_2424].Var1;
                        Gvar.var_2460 = Gvar.var_83[Gvar.var_2424].Var2;
                        Gvar.var_2461 = Gvar.var_83[Gvar.var_2424].Var1 - 1;
                        if ( Gvar.var_2461 < 0 ) {
                            Gvar.var_2461 = 0;
                        }
                        Gvar.var_2462 = Gvar.var_83[Gvar.var_2424].Var1 + 1;
                        if ( Gvar.var_2462 > Gvar.var_32 ) {
                            Gvar.var_2462 = Gvar.var_32;
                        }
                        Gvar.var_2463 = Gvar.var_83[Gvar.var_2424].Var2 + 1;
                        if ( Gvar.var_2463 > Gvar.var_33 ) {
                            Gvar.var_2463 = Gvar.var_33;
                        }
                        Gvar.var_2464 = Gvar.var_83[Gvar.var_2424].Var2 - 1;
                        if ( Gvar.var_2464 < 0 ) {
                            Gvar.var_2464 = 0;
                        }
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_82[Gvar.var_2461][Gvar.var_2460] == Gvar.var_226 ) {
                            Gvar.var_83[Gvar.var_2424].Var12 = 0;
                            Gvar.var_83[Gvar.var_2424].Var13 = 0;
                            Gvar.var_83[Gvar.var_2424].Var24 = 3;
                            Gvar.var_2567 = 1;
                        }
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_82[Gvar.var_2462][Gvar.var_2460] == Gvar.var_226 ) {
                            Gvar.var_83[Gvar.var_2424].Var12 = 0;
                            Gvar.var_83[Gvar.var_2424].Var13 = 0;
                            Gvar.var_83[Gvar.var_2424].Var24 = 3;
                            Gvar.var_2567 = 1;
                        }
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_82[Gvar.var_2459][Gvar.var_2463] == Gvar.var_226 ) {
                            Gvar.var_83[Gvar.var_2424].Var12 = 0;
                            Gvar.var_83[Gvar.var_2424].Var13 = 0;
                            Gvar.var_83[Gvar.var_2424].Var24 = 3;
                            Gvar.var_2567 = 1;
                        }
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_82[Gvar.var_2459][Gvar.var_2464] == Gvar.var_226 ) {
                            Gvar.var_83[Gvar.var_2424].Var12 = 0;
                            Gvar.var_83[Gvar.var_2424].Var13 = 0;
                            Gvar.var_83[Gvar.var_2424].Var24 = 3;
                            Gvar.var_2567 = 1;
                        }
                    }
                }
                Gvar.var_2424 = Gvar.var_2424 + 1;
            }
            if ( Gvar.var_2567 == 1 ) {
                await Func.func358();
                await Func.func099();
                Gvar.var_283 = Gvar.var_286;
                Gvar.var_284 = Gvar.var_287;
                Gvar.var_286 = "すでに「瞳」の中に入っている！";
                await Func.func053();
                for (let cnt = 0; cnt < 10; ++cnt) {
                    await Func.func337();
                }
            }
            if ( Gvar.var_2567 == 0 ) {
                await Func.func358();
                Gvar.var_283 = Gvar.var_286;
                Gvar.var_284 = Gvar.var_287;
                Gvar.var_286 = "しかし何もおこらなかった…";
                await Func.func053();
                for (let cnt = 0; cnt < 10; ++cnt) {
                    await Func.func337();
                }
            }
            if ( Gvar.var_2444 == 1 ) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            }
            // "すでに「瞳」の中に入っている！"
            // "しかし何もおこらなかった…"
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        }
        // === DISC No.302: チープトリック(道連れ) ===
        if (Gvar.var_2494 == 302) {
            await Func.func538();
            if (Gvar.var_193 == 1) {
                await Func.setMessage("発動能力がパワーアップしている！", "", 10, false, false, false);
                await Func.func358();
            }
            await Func.func099();
            await Func.setMessage("オレって情けねえよなあ～～～。", "死にたくなった･･･", 10, false, false, false);
            Gvar.var_284 = "死にたくなった･･･";
            for (let cnt = 0; cnt < 20; ++cnt) {
                await Func.func337();
            }
            Gvar.var_1155 = 1;
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
            }
            Adap.DSPLAY(136);
            for (let cnt = 0; cnt < 5; ++cnt) {
                Gvar.var_1155 = 2;
                await Func.func337();
                Gvar.var_1155 = 3;
                await Func.func337();
            }
            if ( Gvar.var_236 == 1 ) {
                Gvar.var_236 = 0;
                Gvar.var_237 = 1;
                Gvar.var_387 = 247;
                Gvar.var_224 = 2;
                for (let cnt = 0; cnt < 20; ++cnt) {
                    await Func.func337();
                }
                await Func.func009();
            }
            if ( Gvar.var_236 > 1 ) {
                Gvar.var_236 = Gvar.var_236 / 2;
                // @ts-ignore HSP: var_233 は数値として使用
                Gvar.var_233 = Gvar.var_236 / 2 + Gvar.var_233;
            }
            for (let cnt = 0; cnt < 20; ++cnt) {
                await Func.func337();
            }
            Gvar.var_2557 = 0;
            Gvar.var_457 = "道連れにしている！";
            Gvar.var_2455 = 1;
            Gvar.var_2424 = 1;
            for (let cnt = 0; cnt < Gvar.var_107; ++cnt) {
                Gvar.var_2558 = Gvar.var_647 * 2;
                Gvar.var_2457 = Adap.rnd(3);
                Gvar.var_2558 = Gvar.var_2558 + Gvar.var_2457;
                if ( Gvar.var_193 >= 1 ) {
                    Gvar.var_2558 = Gvar.var_2558 * 2;
                }
                if ( Gvar.var_2424 != Gvar.var_141 ) {
                    Gvar.var_2458 = 0;
                    if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var10 == Gvar.var_226  &&  Gvar.var_226 > 0  &&  Gvar.var_226 <= 12 ) {
                        Gvar.var_456 = Gvar.var_2424;
                        Gvar.var_234 = Gvar.var_2558;
                        Gvar.var_2557 = Gvar.var_2557 + Gvar.var_2558;
                        await Func.func745();
                        for (let cnt = 0; cnt < 2; ++cnt) {
                            await Func.func337();
                        }
                        Gvar.var_2458 = 1;
                    }
                    if ( Gvar.var_2458 == 0 ) {
                        Gvar.var_2221 = Gvar.var_74 - 1;
                        if ( Gvar.var_2221 < 0 ) {
                            Gvar.var_2221 = 0;
                        }
                        Gvar.var_2222 = Gvar.var_74 + 1;
                        if ( Gvar.var_2222 > Gvar.var_32 ) {
                            Gvar.var_2222 = Gvar.var_32;
                        }
                        Gvar.var_2223 = Gvar.var_75 + 1;
                        if ( Gvar.var_2223 > Gvar.var_33 ) {
                            Gvar.var_2223 = Gvar.var_33;
                        }
                        Gvar.var_2224 = Gvar.var_75 - 1;
                        if ( Gvar.var_2224 < 0 ) {
                            Gvar.var_2224 = 0;
                        }
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_74  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2223 ) {
                            Gvar.var_456 = Gvar.var_2424;
                            Gvar.var_234 = Gvar.var_2558;
                            Gvar.var_2557 = Gvar.var_2557 + Gvar.var_2558;
                            await Func.func745();
                            for (let cnt = 0; cnt < 2; ++cnt) {
                                await Func.func337();
                            }
                            Gvar.var_2458 = 1;
                        }
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_74  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2224 ) {
                            Gvar.var_456 = Gvar.var_2424;
                            Gvar.var_234 = Gvar.var_2558;
                            Gvar.var_2557 = Gvar.var_2557 + Gvar.var_2558;
                            await Func.func745();
                            for (let cnt = 0; cnt < 2; ++cnt) {
                                await Func.func337();
                            }
                            Gvar.var_2458 = 1;
                        }
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2221  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_75 ) {
                            Gvar.var_456 = Gvar.var_2424;
                            Gvar.var_234 = Gvar.var_2558;
                            Gvar.var_2557 = Gvar.var_2557 + Gvar.var_2558;
                            await Func.func745();
                            for (let cnt = 0; cnt < 2; ++cnt) {
                                await Func.func337();
                            }
                            Gvar.var_2458 = 1;
                        }
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2222  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_75 ) {
                            Gvar.var_456 = Gvar.var_2424;
                            Gvar.var_234 = Gvar.var_2558;
                            Gvar.var_2557 = Gvar.var_2557 + Gvar.var_2558;
                            await Func.func745();
                            for (let cnt = 0; cnt < 2; ++cnt) {
                                await Func.func337();
                            }
                            Gvar.var_2458 = 1;
                        }
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2221  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2223 ) {
                            Gvar.var_456 = Gvar.var_2424;
                            Gvar.var_234 = Gvar.var_2558;
                            Gvar.var_2557 = Gvar.var_2557 + Gvar.var_2558;
                            await Func.func745();
                            for (let cnt = 0; cnt < 2; ++cnt) {
                                await Func.func337();
                            }
                            Gvar.var_2458 = 1;
                        }
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2222  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2223 ) {
                            Gvar.var_456 = Gvar.var_2424;
                            Gvar.var_234 = Gvar.var_2558;
                            Gvar.var_2557 = Gvar.var_2557 + Gvar.var_2558;
                            await Func.func745();
                            for (let cnt = 0; cnt < 2; ++cnt) {
                                await Func.func337();
                            }
                            Gvar.var_2458 = 1;
                        }
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2221  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2224 ) {
                            Gvar.var_456 = Gvar.var_2424;
                            Gvar.var_234 = Gvar.var_2558;
                            Gvar.var_2557 = Gvar.var_2557 + Gvar.var_2558;
                            await Func.func745();
                            for (let cnt = 0; cnt < 2; ++cnt) {
                                await Func.func337();
                            }
                            Gvar.var_2458 = 1;
                        }
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2222  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2224 ) {
                            Gvar.var_456 = Gvar.var_2424;
                            Gvar.var_234 = Gvar.var_2558;
                            Gvar.var_2557 = Gvar.var_2557 + Gvar.var_2558;
                            await Func.func745();
                            for (let cnt = 0; cnt < 2; ++cnt) {
                                await Func.func337();
                            }
                            Gvar.var_2458 = 1;
                        }
                    }
                    if ( Gvar.var_2458 == 0  &&  Gvar.var_226 <= 12  &&  Gvar.var_226 != 0 ) {
                        Gvar.var_2459 = Gvar.var_83[Gvar.var_2424].Var1;
                        Gvar.var_2460 = Gvar.var_83[Gvar.var_2424].Var2;
                        Gvar.var_2461 = Gvar.var_83[Gvar.var_2424].Var1 - 1;
                        if ( Gvar.var_2461 < 0 ) {
                            Gvar.var_2461 = 0;
                        }
                        Gvar.var_2462 = Gvar.var_83[Gvar.var_2424].Var1 + 1;
                        if ( Gvar.var_2462 > Gvar.var_32 ) {
                            Gvar.var_2462 = Gvar.var_32;
                        }
                        Gvar.var_2463 = Gvar.var_83[Gvar.var_2424].Var2 + 1;
                        if ( Gvar.var_2463 > Gvar.var_33 ) {
                            Gvar.var_2463 = Gvar.var_33;
                        }
                        Gvar.var_2464 = Gvar.var_83[Gvar.var_2424].Var2 - 1;
                        if ( Gvar.var_2464 < 0 ) {
                            Gvar.var_2464 = 0;
                        }
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_82[Gvar.var_2461][Gvar.var_2460] == Gvar.var_226 ) {
                            Gvar.var_456 = Gvar.var_2424;
                            Gvar.var_234 = Gvar.var_2558;
                            Gvar.var_2557 = Gvar.var_2557 + Gvar.var_2558;
                            await Func.func745();
                            for (let cnt = 0; cnt < 2; ++cnt) {
                                await Func.func337();
                            }
                            Gvar.var_2458 = 1;
                        }
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_82[Gvar.var_2462][Gvar.var_2460] == Gvar.var_226 ) {
                            Gvar.var_456 = Gvar.var_2424;
                            Gvar.var_234 = Gvar.var_2558;
                            Gvar.var_2557 = Gvar.var_2557 + Gvar.var_2558;
                            await Func.func745();
                            for (let cnt = 0; cnt < 2; ++cnt) {
                                await Func.func337();
                            }
                            Gvar.var_2458 = 1;
                        }
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_82[Gvar.var_2459][Gvar.var_2463] == Gvar.var_226 ) {
                            Gvar.var_456 = Gvar.var_2424;
                            Gvar.var_234 = Gvar.var_2558;
                            Gvar.var_2557 = Gvar.var_2557 + Gvar.var_2558;
                            await Func.func745();
                            for (let cnt = 0; cnt < 2; ++cnt) {
                                await Func.func337();
                            }
                            Gvar.var_2458 = 1;
                        }
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_82[Gvar.var_2459][Gvar.var_2464] == Gvar.var_226 ) {
                            Gvar.var_456 = Gvar.var_2424;
                            Gvar.var_234 = Gvar.var_2558;
                            Gvar.var_2557 = Gvar.var_2557 + Gvar.var_2558;
                            await Func.func745();
                            for (let cnt = 0; cnt < 2; ++cnt) {
                                await Func.func337();
                            }
                            Gvar.var_2458 = 1;
                        }
                    }
                }
                Gvar.var_2424 = Gvar.var_2424 + 1;
            }
            Gvar.var_1155 = 0;
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
            }
            Gvar.var_2455 = 0;
            if ( Gvar.var_2444 == 1 ) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        }
        // === DISC No.216: ボーイ・II・マン(ナンバー変更) ===
        if (Gvar.var_2494 == 216) {
            await Func.func538();
            Gvar.var_1765 = 1;
            if ( Gvar.var_1765 == 0  &&  Gvar.var_2568 == 1 ) {
                Gvar.var_1765 = 1;
            }
            if ( Gvar.var_1765 == 1  &&  Gvar.var_2569 == 1 ) {
                Gvar.var_1765 = 2;
            }
            if ( Gvar.var_1765 == 2  &&  Gvar.var_2570 == 1 ) {
                Gvar.var_1765 = 3;
            }
            if ( Gvar.var_1765 == 3  &&  Gvar.var_2571 == 1 ) {
                Gvar.var_1765 = 0;
            }
            if ( Gvar.var_1765 == 0 ) {
                if ( Gvar.var_2568 == 0 ) {
                    Gvar.var_2568 = 1;
                    Gvar.var_2572 = 0;
                    if ( Gvar.var_70 == 1 ) {
                        Gvar.var_2572 = Gvar.var_59 - 1;
                    }
                    if ( Gvar.var_70 == 2 ) {
                        Gvar.var_2572 = Gvar.var_60 - 1;
                    }
                    if ( Gvar.var_70 == 3 ) {
                        Gvar.var_2572 = Gvar.var_61 - 1;
                    }
                    if ( Gvar.var_70 == 4 ) {
                        Gvar.var_2573 = Adap.rnd(3);
                        Gvar.var_1765 = Gvar.var_2573 + 1;
                    }
                    if ( Gvar.var_70 == 5 ) {
                        Gvar.var_2572 = Gvar.var_62 - 1;
                    }
                    if ( Gvar.var_70 == 6 ) {
                        Gvar.var_2572 = Gvar.var_64 - 1;
                    }
                    if ( Gvar.var_70 == 7 ) {
                        Gvar.var_2572 = Gvar.var_63 - 1;
                    }
                    if ( Gvar.var_70 == 8 ) {
                        Gvar.var_2572 = Gvar.var_65 - 1;
                    }
                    if ( Gvar.var_70 == 9  &&  Gvar.var_79 < Gvar.var_66 ) {
                        Gvar.var_2572 = Gvar.var_66 - 1;
                    }
                    if ( Gvar.var_70 == 9  &&  Gvar.var_79 >= Gvar.var_66 ) {
                        Gvar.var_2572 = Gvar.var_67 - 1;
                    }
                    Gvar.var_1767 = Adap.rnd(Gvar.var_2572) + 1;
                    Gvar.var_1767 = 97;
                    Gvar.var_1767 -= Gvar.var_79;
                    Gvar.var_2574 = "フロア数";
                }
            }
            if ( Gvar.var_1765 == 1 ) {
                if ( Gvar.var_2569 == 0 ) {
                    Gvar.var_2569 = 1;
                    Gvar.var_2575 = Gvar.var_944 * 2 + 20;
                    if ( Gvar.var_2575 > 99 ) {
                        Gvar.var_2575 = 99;
                    }
                    Gvar.var_1768 = Adap.rnd(Gvar.var_2575) + 1;
                    Gvar.var_1768 -= Gvar.var_944;
                    Gvar.var_2574 = "レベル";
                }
            }
            if ( Gvar.var_1765 == 2 ) {
                if ( Gvar.var_2570 == 0 ) {
                    Gvar.var_2570 = 1;
                    Gvar.var_2574 = "HP";
                    Gvar.var_2576 = Gvar.var_383 * 2 + 100;
                    if ( Gvar.var_2576 > 999 ) {
                        Gvar.var_2576 = 1000;
                    }
                    Gvar.var_1769 = Adap.rnd(Gvar.var_2576);
                    if ( Gvar.var_1769 < 15 ) {
                        Gvar.var_1769 = 15;
                    }
                    Gvar.var_1769 -= Gvar.var_383;
                }
            }
            if ( Gvar.var_1765 == 3 ) {
                Gvar.var_2571 = 1;
                Gvar.var_2574 = "所持金";
                Gvar.var_1770 = Adap.rnd(Gvar.var_483 * 2 + 10000);
                Gvar.var_1770 -= Gvar.var_483;
            }
            await Func.setMessage("", "", 10, false, false, false);
            await Func.setMessage("念のため" + Gvar.var_2574 + "も", "別のナンバーに替えておくか", 10, false, false, false);
            Adap.DSPLAY(182);
            Gvar.var_1444 = 8;
            Gvar.var_310 = 1;
            Gvar.var_1761 = 1;
            Gvar.var_1766 = 1;
            for (let cnt = 0; cnt < 40; ++cnt) {
                await Func.func337();
                Gvar.var_1761++;
            }
            Gvar.var_1766 = 0;
            Gvar.var_310 = 0;
            Gvar.var_1761 = 0;
            Gvar.var_1766 = 1;
            for (let cnt = 0; cnt < 40; ++cnt) {
                await Func.func337();
                Gvar.var_1761++;
            }
            Gvar.var_1766 = 0;
            Gvar.var_310 = 0;
            Gvar.var_1761 = 0;
            if ( Gvar.var_1765 == 0 ) {
                Gvar.var_79 += Gvar.var_1353;
            }
            if ( Gvar.var_1765 == 1 ) {
                if ( Gvar.var_1356 > 0 ) {
                    for (let cnt = 0; cnt < Gvar.var_1356; ++cnt) {
                        if ( Gvar.var_944 <= 98 ) {
                            Gvar.var_650 = Gvar.var_1048[Gvar.var_944];
                            await Func.func719();
                            Gvar.var_2431 = 0;
                        }
                    }
                }
                if ( Gvar.var_1356 < 0 ) {
                    Gvar.var_2577 = -Gvar.var_1356;
                    for (let cnt = 0; cnt < Gvar.var_2577; ++cnt) {
                        Gvar.var_944 = Gvar.var_944 - 1;
                        Gvar.var_383 = Gvar.var_383 - 3;
                        Gvar.var_236 = Gvar.var_236 - 3;
                        if ( Gvar.var_383 < 1 ) {
                            Gvar.var_383 = 1;
                        }
                        if ( Gvar.var_236 < 1 ) {
                            Gvar.var_236 = 1;
                        }
                        Gvar.var_650 = Gvar.var_1048[Gvar.var_944] - 1;
                        Gvar.var_124 = 0;
                    }
                }
            }
            if ( Gvar.var_1765 == 2 ) {
                Gvar.var_383 = Gvar.var_383 + Gvar.var_1358;
                if ( Gvar.var_236 > Gvar.var_383 ) {
                    Gvar.var_2578 = Gvar.var_383;
                }
            }
            if ( Gvar.var_1765 == 3 ) {
                Gvar.var_483 = Gvar.var_483 + Gvar.var_1359;
            }
            Gvar.var_1767 = 0;
            Gvar.var_1353 = 0;
            Gvar.var_1768 = 0;
            Gvar.var_1356 = 0;
            Gvar.var_1769 = 0;
            Gvar.var_1358 = 0;
            Gvar.var_1770 = 0;
            Gvar.var_1359 = 0;
            Gvar.var_1765 = 0;
            if ( Gvar.var_2444 == 1 ) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        // === DISC No.222: 運命固定 ===
        if (Gvar.var_2494 == 222) {
            await Func.func538();
            await Func.setMessage("7ﾀｰﾝの間運命の流れを固定する！", "", 10, false, false, false);
            Adap.DSPLAY(183);
            Gvar.var_1444 = 8;
            Gvar.var_310 = 1;
            Gvar.var_1442 = 1;
            Gvar.var_128 = 1;
            for (let cnt = 0; cnt < 20; ++cnt) {
                await Func.func337();
                Gvar.var_1442++;
            }
            Gvar.var_310 = 0;
            Gvar.var_1442 = 0;
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        }
        // === DISC No.303: 回避力アップ ===
        if (Gvar.var_2494 == 303) {
            await Func.func538();
            await Func.setMessage("攻撃をかわしやすくなった！", "", 10, false, false, false);
            Adap.DSPLAY(182);
            Gvar.var_1444 = 8;
            Gvar.var_310 = 1;
            Gvar.var_1442 = 1;
            for (let cnt = 0; cnt < 20; ++cnt) {
                await Func.func337();
                Gvar.var_1442++;
            }
            Gvar.var_310 = 0;
            Gvar.var_1442 = 0;
            Gvar.var_119 = 1;
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        }
        // === DISC No.413: 人形設置2 ===
        if (Gvar.var_2494 == 413) {
            // "人形を置く場所が無いぞ。"
            if ( Gvar.var_2494 == 413 ) {
                Gvar.var_2338 = 1;
                Gvar.var_443 = 1;
                await Func.func588();
                Gvar.var_2338 = 0;
                Gvar.var_443 = 0;
                if ( Gvar.var_2339 == 0 ) {
                    await Func.setMessage("人形を置く場所が無いぞ。", "", 10, false, false, false);
                    for (let cnt = 0; cnt < 5; ++cnt) {
                        await Func.func337();
                    }
                    Gvar.var_259 = 0;
                    Gvar.var_245 = 0;
                    await Func.func009();
                }
                await Func.func538();
                Gvar.var_506 = Gvar.var_445;
                Gvar.var_83[Gvar.var_506].Var11 = 1;
                Gvar.var_83[Gvar.var_506].Var5 = 2;
                Gvar.var_310 = 1;
                Gvar.var_511 = 1;
                for (let cnt = 0; cnt < 25; ++cnt) {
                    await Func.func337();
                    Gvar.var_511 = Gvar.var_511 + 1;
                }
                Gvar.var_310 = 0;
                Gvar.var_511 = 0;
                Gvar.var_83[Gvar.var_506].Var11 = 0;
            Gvar.var_242 = 1;
            await Func.func019();
        }
        // === DISC No.320: メタリカ(透明化) ===
        if (Gvar.var_2494 == 320) {
            await Func.func538();
            Gvar.var_148 = 1;
            await Func.setMessage("砂鉄を吸い寄せて透明になった。", "", 10, false, false, false);
            for (let cnt = 0; cnt < 5; ++cnt) {
                await Func.func337();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        }
        // === DISC No.321: 幽霊部屋 ===
        if (Gvar.var_2494 == 321) {
            await Func.func538();
            // 条件チェック
            // "何も起こらなかったようだ・・・"
            // "次の階で部屋の幽霊に入れるぞ！"
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            await Func.func050();
            await Func.func358();
            for (let cnt = 0; cnt < 5; ++cnt) {
                await Func.func337();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        }
        // === DISC No.305: シンデレラ(幸運メイク) ===
        if (Gvar.var_2494 == 305) {
            await Func.func538();
            Gvar.var_1126 = 1;
            await Func.setMessage("幸運な顔のメイクをしてみた。", "", 10, false, false, false);
            await Func.func358();
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "次のフロアでアイテムがたくさん";
            Gvar.var_287 = "出現する気がする…！";
            await Func.func053();
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            await Func.func050();
            for (let cnt = 0; cnt < 5; ++cnt) {
                await Func.func337();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        }
        // === DISC No.396: メイドインヘブン(高速移動) ===
        if (Gvar.var_2494 == 396) {
            await Func.func538();
            Adap.DSPLAY(154);
            await Func.setMessage("自分だけ速く動けるようになった！", "", 10, false, false, false);
            if (Gvar.var_150 == 0) {
                Gvar.var_178 = 1;
                Gvar.var_179 = 0;
            }
            if (Gvar.var_150 != 0) {
                Gvar.var_150 = 0;
            }
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        }
        // === DISC No.119: スパイスガール(ゴム弾力) ===
        if (Gvar.var_2494 == 119) {
            await Func.func538();
            Adap.DSPLAY(152);
            await Func.setMessage("体にゴムのような弾力がついた！", "", 10, false, false, false);
            Gvar.var_167 = 1;
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        }
        // === DISC No.123: クリーム(空間移動) ===
        if (Gvar.var_2494 == 123) {
            await Func.func538();
            Gvar.var_371 = 123;
            Gvar.var_465 = 0;
            Gvar.var_1337 = 1;
            Gvar.var_1338 = 0;
            for (let cnt = 0; cnt < 25; ++cnt) {
                await Func.func337();
            }
            Gvar.var_523 = Gvar.var_74;
            Gvar.var_524 = Gvar.var_75;
            Gvar.var_1339 = 1;
            Gvar.var_1341 = 1;
            await Func.func337();
            Gvar.var_1341 = 0;
            if ( Gvar.var_224 == 4 ) {
                Gvar.var_1569 = 40;
            }
            if ( Gvar.var_224 == 6 ) {
                Gvar.var_1569 = 120;
            }
            if ( Gvar.var_224 == 8 ) {
                Gvar.var_1569 = 80;
            }
            if ( Gvar.var_224 == 2 ) {
                Gvar.var_1569 = 0;
            }
            if ( Gvar.var_224 == 1 ) {
                Gvar.var_1569 = 160;
            }
            if ( Gvar.var_224 == 3 ) {
                Gvar.var_1569 = 240;
            }
            if ( Gvar.var_224 == 7 ) {
                Gvar.var_1569 = 200;
            }
            if ( Gvar.var_224 == 9 ) {
                Gvar.var_1569 = 280;
            }
            Gvar.var_2579 = 10;
            Gvar.var_257 = Gvar.var_258[Gvar.var_250][0];
            await Func.func524();
            Gvar.var_1337 = 3;
            Gvar.var_1308 = 1;
            for (let cnt = 0; cnt < 10; ++cnt) {
                Gvar.var_2118 = Gvar.var_523;
                Gvar.var_2119 = Gvar.var_524;
                if ( Gvar.var_224 == 4 ) {
                    Gvar.var_523 = Gvar.var_523 - 1;
                }
                if ( Gvar.var_224 == 6 ) {
                    Gvar.var_523 = Gvar.var_523 + 1;
                }
                if ( Gvar.var_224 == 8 ) {
                    Gvar.var_524 = Gvar.var_524 - 1;
                }
                if ( Gvar.var_224 == 2 ) {
                    Gvar.var_524 = Gvar.var_524 + 1;
                }
                if ( Gvar.var_224 == 1 ) {
                    Gvar.var_523 = Gvar.var_523 - 1;
                    Gvar.var_524 = Gvar.var_524 + 1;
                }
                if ( Gvar.var_224 == 3 ) {
                    Gvar.var_523 = Gvar.var_523 + 1;
                    Gvar.var_524 = Gvar.var_524 + 1;
                }
                if ( Gvar.var_224 == 7 ) {
                    Gvar.var_523 = Gvar.var_523 - 1;
                    Gvar.var_524 = Gvar.var_524 - 1;
                }
                if ( Gvar.var_224 == 9 ) {
                    Gvar.var_523 = Gvar.var_523 + 1;
                    Gvar.var_524 = Gvar.var_524 - 1;
                }
                if ( Gvar.var_104 == 9  &&  Gvar.var_82[Gvar.var_523][Gvar.var_524] == 0 ) {
                    break;
                }
                if ( Gvar.var_420 == 1  &&  Gvar.var_82[Gvar.var_523][Gvar.var_524] == 0 ) {
                    break;
                }
                if ( Gvar.var_523 < 5  ||  Gvar.var_523 > Gvar.var_32  ||  Gvar.var_524 < 5  ||  Gvar.var_524 > Gvar.var_33 ) {
                    Gvar.var_523 = Gvar.var_2118;
                    Gvar.var_524 = Gvar.var_2119;
                }
                Gvar.var_74 = Gvar.var_523;
                Gvar.var_75 = Gvar.var_524;
                Gvar.var_261 = Gvar.var_2118;
                Gvar.var_262 = Gvar.var_2119;
                await Func.func016();
                if ( Gvar.var_83[Gvar.var_261][Gvar.var_262] >= 1  &&  Gvar.var_83[Gvar.var_74][Gvar.var_75] == 0  &&  Gvar.var_96 == 0 ) {
                    await Func.func762();
                }
                if ( Gvar.var_82[Gvar.var_523][Gvar.var_524] == 0 ) {
                    Gvar.var_82[Gvar.var_523][Gvar.var_524] = 14;
                }
                if ( Gvar.var_88[Gvar.var_523][Gvar.var_524] > 0 ) {
                    Gvar.var_88[Gvar.var_523][Gvar.var_524] = 0;
                }
                if ( Gvar.var_104 != 9 ) {
                    if ( Gvar.var_224 == 1  ||  Gvar.var_224 == 3  ||  Gvar.var_224 == 7  ||  Gvar.var_224 == 9 ) {
                        Gvar.var_2580 = Gvar.var_523 - 1;
                        if ( Gvar.var_2580 < 5 ) {
                            Gvar.var_2580 = 5;
                        }
                        Gvar.var_2581 = Gvar.var_523 + 1;
                        if ( Gvar.var_2581 > Gvar.var_32 ) {
                            Gvar.var_2581 = Gvar.var_32;
                        }
                        Gvar.var_2582 = Gvar.var_524 + 1;
                        if ( Gvar.var_2582 > Gvar.var_33 ) {
                            Gvar.var_2582 = Gvar.var_33;
                        }
                        Gvar.var_2583 = Gvar.var_524 - 1;
                        if ( Gvar.var_2583 < 5 ) {
                            Gvar.var_2583 = 5;
                        }
                        if ( Gvar.var_82[Gvar.var_2580][Gvar.var_524] == 0 ) {
                            Gvar.var_82[Gvar.var_2580][Gvar.var_524] = 14;
                        }
                        if ( Gvar.var_82[Gvar.var_2581][Gvar.var_524] == 0 ) {
                            Gvar.var_82[Gvar.var_2581][Gvar.var_524] = 14;
                        }
                        if ( Gvar.var_82[Gvar.var_523][Gvar.var_2582] == 0 ) {
                            Gvar.var_82[Gvar.var_523][Gvar.var_2582] = 14;
                        }
                        if ( Gvar.var_82[Gvar.var_523][Gvar.var_2583] == 0 ) {
                            Gvar.var_82[Gvar.var_523][Gvar.var_2583] = 14;
                        }
                    }
                }
                if ( Gvar.var_93[Gvar.var_523][Gvar.var_524] > 0 ) {
                    await Func.func697();
                }
                await Func.func337();
                await Func.func348();
            }
            Gvar.var_1308 = 0;
            Gvar.var_1337 = 2;
            Gvar.var_1338 = 0;
            await Func.func016();
            for (let cnt = 0; cnt < 16; ++cnt) {
                await Func.func337();
            }
            Gvar.var_1337 = 0;
            if ( Gvar.var_2444 == 1 ) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        }
        // === DISC No.124: ボーイズマンマン(送る) ===
        if (Gvar.var_2494 == 124) {
            // "誰に送りますか？"
            // "どれを送りますか？"
            // "どれを相手に送りますか？"
            // "どれを倉庫に送りますか？"
            if ( Gvar.var_2494 == 124 ) {
                if ( Gvar.var_463 == 2 ) {
                    Gvar.var_2584 = 0;
                    // sdim var_2585, 100, 10 — already initialized
                    for (let cnt = 0; cnt < 8; ++cnt) {
                        Gvar.var_2585[cnt] = "" + Gvar.var_1172[cnt];
                        if ( Gvar.var_1171[cnt][4] == 0 ) {
                            Gvar.var_2585[cnt] = "(no entry)";
                        }
                        if ( Gvar.var_1171[cnt][4] != 0 ) {
                            Gvar.var_2584++;
                        }
                    }
                    await Func.setMessage("誰に送りますか？", "", 10, false, false, false);
                    for (let cnt = 0; cnt < 4; ++cnt) {
                        await Func.func337();
                    }
                    await Func.func358();
                    await Func.func054();
                    Gvar.var_2586 = 0;
                    Gvar.var_1327 = 1;
                    Gvar.var_2587 = 0;
                    Gvar.var_2588 = 8;
                    Gvar.var_2589 = Gvar.var_2588 - 1;
                    Gvar.var_2590 = Gvar.var_2588 * 20 + 37 + 30;
                    Gvar.var_253 = 45;
                    for (let cnt = 0; ; ++cnt) {
                        await Func.func337();
                        await Func.func084();
                        if ( Gvar.var_264 == 1 ) {
                            Adap.DSPLAY(212);
                            Gvar.var_2586 = 1;
                            break;
                        }
                        if ( Gvar.var_267 == 1  ||  Gvar.var_272 == 1 ) {
                            if ( Gvar.var_2585[Gvar.var_2587] != "(no entry)" ) {
                                if ( Gvar.var_2585[Gvar.var_2587] != Gvar.var_39 ) {
                                    Adap.DSPLAY(212);
                                    break;
                                }
                            }
                        }
                        if ( Gvar.var_297 == 1 ) {
                            if ( Gvar.var_2587 != 7 ) {
                                Gvar.var_253 = Gvar.var_253 + 22;
                                Gvar.var_2587 = Gvar.var_2587 + 1;
                                Adap.DSPLAY(100);
                                await Func.func337();
                                await Func.func337();
                                continue;
                            }
                            if ( Gvar.var_2587 == 7 ) {
                                Gvar.var_253 = 45;
                                Gvar.var_2587 = 0;
                                Adap.DSPLAY(100);
                                await Func.func337();
                                await Func.func337();
                                continue;
                            }
                        }
                        if ( Gvar.var_293 == 1 ) {
                            if ( Gvar.var_2587 != 0 ) {
                                Gvar.var_253 = Gvar.var_253 - 22;
                                Gvar.var_2587 = Gvar.var_2587 - 1;
                                Adap.DSPLAY(100);
                                await Func.func337();
                                await Func.func337();
                                continue;
                            }
                            if ( Gvar.var_2587 == 0 ) {
                                Gvar.var_253 = 45 + 7 * 22;
                                Gvar.var_2587 = 7;
                                Adap.DSPLAY(100);
                                await Func.func337();
                                await Func.func337();
                                continue;
                            }
                        }
                    }
                    Gvar.var_1327 = 0;
                    if ( Gvar.var_2586 == 0 ) {
                        await Func.setMessage("どれを送りますか？", "", 10, false, false, false);
                        for (let cnt = 0; cnt < 4; ++cnt) {
                            await Func.func337();
                        }
                        await Func.func358();
                        Gvar.var_2541 = Gvar.var_250;
                        Gvar.var_2542 = 0;
                        if ( Gvar.var_245 != 0 ) {
                            Gvar.var_2542 = 1;
                        }
                        if ( Gvar.var_259 != 0 ) {
                            Gvar.var_2542 = 2;
                        }
                        Gvar.var_2235 = 1;
                        Gvar.var_252 = 1;
                        Gvar.var_253 = 45;
                        Gvar.var_250 = 1;
                        Gvar.var_248 = Gvar.var_249 + 10;
                        Gvar.var_245 = 0;
                        await Func.func054();
                        Gvar.var_222 = 1;
                        await Func.func493();
                    }
                }
                if ( Gvar.var_463 == 1  &&  Gvar.var_611 == 1  &&  Gvar.var_70 == Math.floor(Gvar.var_1170[12]) ) {
                    await Func.setMessage("どれを相手に送りますか？", "", 10, false, false, false);
                    for (let cnt = 0; cnt < 4; ++cnt) {
                        await Func.func337();
                    }
                    await Func.func358();
                    Gvar.var_2541 = Gvar.var_250;
                    Gvar.var_2542 = 0;
                    if ( Gvar.var_245 != 0 ) {
                        Gvar.var_2542 = 1;
                    }
                    if ( Gvar.var_259 != 0 ) {
                        Gvar.var_2542 = 2;
                    }
                    Gvar.var_2235 = 1;
                    Gvar.var_252 = 1;
                    Gvar.var_253 = 45;
                    Gvar.var_250 = 1;
                    Gvar.var_248 = Gvar.var_249 + 10;
                    Gvar.var_245 = 0;
                    await Func.func054();
                    Gvar.var_222 = 1;
                    await Func.func493();
                }
                await Func.setMessage("どれを倉庫に送りますか？", "", 10, false, false, false);
                for (let cnt = 0; cnt < 4; ++cnt) {
                    await Func.func337();
                }
                await Func.func358();
                Gvar.var_2236 = 1;
                Gvar.var_2541 = Gvar.var_250;
                Gvar.var_2542 = 0;
                if ( Gvar.var_245 != 0 ) {
                    Gvar.var_2542 = 1;
                }
                if ( Gvar.var_259 != 0 ) {
                    Gvar.var_2542 = 2;
                }
                Gvar.var_2235 = 1;
                Gvar.var_252 = 1;
                Gvar.var_253 = 45;
                Gvar.var_250 = 1;
                Gvar.var_248 = Gvar.var_249 + 10;
                Gvar.var_245 = 0;
                await Func.func054();
                Gvar.var_222 = 1;
                await Func.func493();
            }
        }
        // === DISC No.311: チープトリック(おんぶ) ===
        if (Gvar.var_2494 == 311) {
            await Func.func538();
            Gvar.var_310 = 1;
            Gvar.var_1469 = 1;
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
                Gvar.var_1469 = Gvar.var_1469 + 1;
            }
            await Func.func099();
            await Func.setMessage("「おんぶして」　「ねっ！」", "　　　　「おんぶして…」", 10, false, false, false);
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
            }
            // 連続台詞処理
            await Func.func099();
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "「あなたが今のぼくの本体なんです！」";
            Gvar.var_287 = "　「わかる？」　「ね？」";
            await Func.func053();
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            await Func.func050();
            for (let cnt = 0; cnt < 10; ++cnt) { await Func.func337(); }
            await Func.func099();
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "「ぼくの能力は人に囁くだけ」";
            Gvar.var_287 = "　　「ね？」「誰か助け呼ぶの？」";
            await Func.func053();
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            await Func.func050();
            for (let cnt = 0; cnt < 10; ++cnt) { await Func.func337(); }
            await Func.func099();
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "「イヒヒ！」　「ねっ！」";
            Gvar.var_287 = "　　　「イヒヒヒヒ」";
            await Func.func053();
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            await Func.func050();
            for (let cnt = 0; cnt < 10; ++cnt) { await Func.func337(); }
            await Func.func099();
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "「ポコチンまで干からびさせて";
            Gvar.var_287 = "　　死ぬのはおまえだッ！」";
            await Func.func053();
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            await Func.func050();
            for (let cnt = 0; cnt < 10; ++cnt) { await Func.func337(); }
            await Func.func099();
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "「どこへ行こうとも…";
            Gvar.var_287 = "　　疲れるだけだよ」」";
            await Func.func053();
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            await Func.func050();
            for (let cnt = 0; cnt < 10; ++cnt) { await Func.func337(); }
            await Func.func099();
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "「疲労とダメージで";
            Gvar.var_287 = "　　ぶっ倒れるのが先か」";
            await Func.func053();
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            await Func.func050();
            for (let cnt = 0; cnt < 10; ++cnt) { await Func.func337(); }
            await Func.func099();
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "「精神がまいっちまって";
            Gvar.var_287 = "　　自滅するのが先か…」";
            await Func.func053();
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            await Func.func050();
            for (let cnt = 0; cnt < 10; ++cnt) { await Func.func337(); }
            // 精神力低下処理
            Adap.DSPLAY(164);
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "最大精神力が１下がってしまった！";
            Gvar.var_287 = "";
            await Func.func053();
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            await Func.func050();
            for (let cnt = 0; cnt < 10; ++cnt) { await Func.func337(); }
            Gvar.var_648 = Gvar.var_648 - 1;
            if (Gvar.var_648 <= 0) { Gvar.var_648 = 0; }
            Gvar.var_647 = Gvar.var_647 - 1;
            if (Gvar.var_647 < 0) { Gvar.var_647 = 0; }
            Gvar.var_310 = 0;
            Gvar.var_1469 = 0;
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        }
        // === DISC No.397: 悪魔の虹(罠大量出現) ===
        if (Gvar.var_2494 == 397) {
            await Func.func538();
            Gvar.var_2442 = 1;
            Gvar.var_869 = 1;
            for (let cnt = 0; cnt < 30; ++cnt) {
                await Func.func568();
                if ( Gvar.var_2443 == 1 ) {
                    break;
                }
            }
            Gvar.var_869 = 0;
            Gvar.var_2442 = 0;
            await Func.setMessage("", "", 10, false, false, false);
            await Func.setMessage("「悪魔の虹」が大量にあらわれた！！", "", 10, false, false, false);
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        }
        // === DISC No.314: ストレイキャット ===
        if (Gvar.var_2494 == 314) {
            await Func.func538();
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
                for (let cnt = 0; cnt < 10; ++cnt) {
                    await Func.func337();
                }
            }
            Adap.DSPLAY(159);
            await Func.setMessage("「うにゃあ」", "", 10, false, false, false);
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
            }
        }
        // === DISC No.405/406/408/409/410/404/400/317/414/309: 罠設置系 ===
        if (Gvar.var_2494 == 405 || Gvar.var_2494 == 406 || Gvar.var_2494 == 408 || Gvar.var_2494 == 409 || Gvar.var_2494 == 410 || Gvar.var_2494 == 404 || Gvar.var_2494 == 400 || Gvar.var_2494 == 317 || Gvar.var_2494 == 414 || Gvar.var_2494 == 309) {
            if (Gvar.var_84[Gvar.var_74][Gvar.var_75] != 0 || Gvar.var_91[Gvar.var_74][Gvar.var_75] != 0 || Gvar.var_88[Gvar.var_74][Gvar.var_75] != 0) {
                if (Gvar.var_2494 == 409 || Gvar.var_2494 == 406 || Gvar.var_2494 == 410 || Gvar.var_2494 == 309) {
                    await Func.setMessage("ここには潜ませられない。", "", 10, false, false, false);
                }
                if (Gvar.var_2494 == 404 || Gvar.var_2494 == 400 || Gvar.var_2494 == 405 || Gvar.var_2494 == 408) {
                    await Func.setMessage("ここには仕掛けられない。", "", 10, false, false, false);
                }
                if (Gvar.var_2494 == 317) {
                    await Func.setMessage("ここには貼れない。", "", 10, false, false, false);
                }
                if (Gvar.var_2494 == 414) {
                    await Func.setMessage("ここには撃てない。", "", 10, false, false, false);
                }
                for (let cnt = 0; cnt < 5; ++cnt) {
                    await Func.func337();
                }
            }
            if ( Gvar.var_2494 == 414 ) {
                Gvar.var_283 = "ここには撃てない。";
            }
            for (let cnt = 0; cnt < 5; ++cnt) {
                await Func.func337();
            }
            await Func.func009();
            }
            if (Gvar.var_2494 == 309) { await Func.setMessage("地面にｿﾌﾄ･ﾏｼｰﾝを潜ませた。", "", 10, false, false, false); }
            if (Gvar.var_2494 == 406) { await Func.setMessage("地面に文字を貼り付けた。", "", 10, false, false, false); }
            if (Gvar.var_2494 == 408) { await Func.setMessage("足元に鏡を仕掛けた。", "", 10, false, false, false); }
            if (Gvar.var_2494 == 405) { await Func.setMessage("地面に文字を貼り付けた。", "", 10, false, false, false); }
            if (Gvar.var_2494 == 409) { await Func.setMessage("こっそりラバーズを潜ませた。", "", 10, false, false, false); }
            if (Gvar.var_2494 == 404) { await Func.setMessage("足元に氷の罠を仕掛けた。", "", 10, false, false, false); }
            if (Gvar.var_2494 == 410) { await Func.setMessage("ﾊｲｳｪｲ･ｽﾀｰを潜ませた。", "", 10, false, false, false); }
            if (Gvar.var_2494 == 400 || Gvar.var_2494 == 407) { await Func.setMessage("法王の結界を仕掛けた。", "", 10, false, false, false); }
            if (Gvar.var_2494 == 317) { await Func.setMessage("シールを貼った。", "", 10, false, false, false); }
            if (Gvar.var_2494 == 414) { await Func.setMessage("地面に穴を開けた。", "", 10, false, false, false); }
            for (let cnt = 0; cnt < 5; ++cnt) {
                await Func.func337();
            }
            Gvar.var_257 = Gvar.var_2494;
            await Func.func538();
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        // === DISC No.118/407: ダイバーダウン/法王の結界(周囲設置) ===
        if (Gvar.var_2494 == 118 || Gvar.var_2494 == 407) {
            if ( Gvar.var_2494 == 118  ||  Gvar.var_2494 == 407 ) {
                Gvar.var_2593 = 0;
                Gvar.var_2594 = Gvar.var_74;
                Gvar.var_2595 = Gvar.var_75;
                Gvar.var_2596 = Gvar.var_74 - 1;
                if ( Gvar.var_2596 <= 0 ) {
                    Gvar.var_2596 = 0;
                }
                Gvar.var_2597 = Gvar.var_74 + 1;
                if ( Gvar.var_2597 >= Gvar.var_32 ) {
                    Gvar.var_2597 = Gvar.var_32;
                }
                Gvar.var_2598 = Gvar.var_75 - 1;
                if ( Gvar.var_2598 <= 0 ) {
                    Gvar.var_2598 = 0;
                }
                Gvar.var_2599 = Gvar.var_75 + 1;
                if ( Gvar.var_2599 >= Gvar.var_33 ) {
                    Gvar.var_2599 = Gvar.var_33;
                }
            // 設置不可の場合
            // "この辺りには潜ませられない。"
            // "この辺りには仕掛けられない。"
            // 設置成功の場合
            if (Gvar.var_2494 == 118) { await Func.setMessage("地面にダイバーダウンを潜ませた。", "", 10, false, false, false); }
            if (Gvar.var_2494 == 407) { await Func.setMessage("法王の結界を仕掛けた。", "", 10, false, false, false); }
            for (let cnt = 0; cnt < 5; ++cnt) {
                await Func.func337();
            }
            Gvar.var_257 = Gvar.var_2494;
            await Func.func538();
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        }
        // === DISC No.401: フー・ファイターズ(体力回復) ===
        if (Gvar.var_2494 == 401) {
            Gvar.var_236 = Gvar.var_236 + 20;
            if (Gvar.var_137 == 1 || Gvar.var_199 == 1) {
                Gvar.var_236 = Gvar.var_236 + 20;
            }
            Gvar.var_2603 = 0;
            if (Gvar.var_236 >= Gvar.var_383) {
                Gvar.var_236 = Gvar.var_383;
                Gvar.var_2603 = 1;
            }
            await Func.setMessage("傷口にプランクトンを詰めた。", "", 10, false, false, false);
            if (Gvar.var_137 == 1 || Gvar.var_199 == 1) {
                Gvar.var_284 = "いつもより多く回復した。";
            }
            if (Gvar.var_2603 == 1) {
                Gvar.var_284 = "体力が完全に回復した。";
            }
            if ( Gvar.var_2494 == 401 ) {
                Gvar.var_2603 = 0;
                Gvar.var_236 = Gvar.var_236 + 20;
                if ( Gvar.var_137 == 1  ||  Gvar.var_199 == 1 ) {
                    Gvar.var_236 = Gvar.var_236 + 20;
                }
                if ( Gvar.var_236 >= Gvar.var_383 ) {
                    Gvar.var_236 = Gvar.var_383;
                    Gvar.var_2603 = 1;
                }
                await Func.setMessage("傷口にプランクトンを詰めた。", "体力が完全に回復した。", 10, false, false, false);
                Adap.DSPLAY(143);
                Gvar.var_1444 = 5;
                Gvar.var_310 = 1;
                Gvar.var_1442 = 1;
                for (let cnt = 0; cnt < 20; ++cnt) {
                    await Func.func337();
                    Gvar.var_1442++;
                }
                Gvar.var_310 = 0;
                Gvar.var_1442 = 0;
                Gvar.var_257 = Gvar.var_2494;
                await Func.func538();
            Gvar.var_242 = 1;
            await Func.func019();
        }
        // === DISC No.402: エンペラー ===
        if (Gvar.var_2494 == 402) {
            await Func.setMessage("「エンペラー」！！", "", 10, false, false, false);
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
            }
            Gvar.var_257 = Gvar.var_2494;
            await Func.func538();
        }
        // === DISC No.411: テレポート ===
        if (Gvar.var_2494 == 411) {
            if ( Gvar.var_2494 == 411 ) {
                for (let cnt = 0; cnt < 10; ++cnt) {
                    await Func.func337();
                }
                Gvar.var_131 = 0;
                Gvar.var_532 = 0;
                Gvar.var_533 = 0;
                Gvar.var_530 = 0;
                Gvar.var_531 = 0;
                Gvar.var_2605 = Gvar.var_74;
                Gvar.var_2606 = Gvar.var_75;
                Gvar.var_2607 = Gvar.var_74 - 5;
                if ( Gvar.var_2607 < 0 ) {
                    Gvar.var_2607 = 0;
                }
                Gvar.var_2608 = Gvar.var_74 + 5;
                if ( Gvar.var_2608 > Gvar.var_32 ) {
                    Gvar.var_2608 = Gvar.var_32;
                }
                Gvar.var_2609 = Gvar.var_75 + 5;
                if ( Gvar.var_2609 > Gvar.var_33 ) {
                    Gvar.var_2609 = Gvar.var_33;
                }
                Gvar.var_2610 = Gvar.var_75 - 5;
                if ( Gvar.var_2610 < 0 ) {
                    Gvar.var_2610 = 0;
                }
                Gvar.var_2611 = 0;
                for (let cnt = 0; cnt < 10000; ++cnt) {
                    Gvar.var_2612 = Adap.rnd(Gvar.var_32);
                    Gvar.var_2613 = Adap.rnd(Gvar.var_33);
                    if ( Gvar.var_2612 == Gvar.var_2605  &&  Gvar.var_2613 == Gvar.var_2606 ) {
                        continue;
                    }
                    if ( Gvar.var_2612 > Gvar.var_2607  &&  Gvar.var_2612 < Gvar.var_2608  &&  Gvar.var_2613 > Gvar.var_2610  &&  Gvar.var_2613 < Gvar.var_2609  &&  Gvar.var_93[Gvar.var_2612][Gvar.var_2613] == 0  &&  Gvar.var_82[Gvar.var_2612][Gvar.var_2613] != 0  &&  Gvar.var_82[Gvar.var_2612][Gvar.var_2613] != 13 ) {
                        Gvar.var_2611 = 1;
                        break;
                    }
                }
                Gvar.var_224 = 2;
                if ( Gvar.var_2611 == 1 ) {
                    Gvar.var_74 = Gvar.var_2612;
                    Gvar.var_75 = Gvar.var_2613;
                    await Func.func016();
                    if ( Gvar.var_226 != 14 ) {
                        await Func.func017();
                    }
                    await Func.func018();
                    if ( Gvar.var_225 == Gvar.var_226  &&  Gvar.var_104 != 8 ) {
                        Gvar.var_109 = 1;
                    }
                    if ( Gvar.var_227 == Gvar.var_226  &&  Gvar.var_104 != 8 ) {
                        Gvar.var_110 = 1;
                    }
                    await Func.func348();
                }
                if ( Gvar.var_2611 == 0 ) {
                    Gvar.var_74 = Gvar.var_261;
                    Gvar.var_75 = Gvar.var_262;
                }
                Gvar.var_1431 = 170;
                Gvar.var_1432 = 140;
                Gvar.var_310 = 1;
                Gvar.var_1451 = 1;
                Adap.DSPLAY(190);
                for (let cnt = 0; cnt < 5; ++cnt) {
                    await Func.func337();
                    Gvar.var_1451++;
                }
                Gvar.var_310 = 0;
                Gvar.var_1451 = 0;
                for (let cnt = 0; cnt < 10; ++cnt) {
                    await Func.func337();
                }
            Gvar.var_257 = Gvar.var_2494;
            await Func.func538();
            Gvar.var_242 = 1;
            await Func.func019();
        }
        // === DISC No.412: ヘブンズドアー ===
        if (Gvar.var_2494 == 412) {
            await Func.func099();
            await Func.setMessage("「ヘブンズドアーッ」！！", "", 10, false, false, false);
            Gvar.var_477 = Gvar.var_389;
            Gvar.var_389 = 0;
            Gvar.var_271 = 1;
            Gvar.var_378 = Gvar.var_74;
            Gvar.var_379 = Gvar.var_75;
            if ( Gvar.var_224 == 4 ) {
                Gvar.var_378 = Gvar.var_378 - 1;
            }
            if ( Gvar.var_224 == 6 ) {
                Gvar.var_378 = Gvar.var_378 + 1;
            }
            if ( Gvar.var_224 == 8 ) {
                Gvar.var_379 = Gvar.var_379 - 1;
            }
            if ( Gvar.var_224 == 2 ) {
                Gvar.var_379 = Gvar.var_379 + 1;
            }
            if ( Gvar.var_224 == 1 ) {
                Gvar.var_378 = Gvar.var_378 - 1;
                Gvar.var_379 = Gvar.var_379 + 1;
            }
            if ( Gvar.var_224 == 3 ) {
                Gvar.var_378 = Gvar.var_378 + 1;
                Gvar.var_379 = Gvar.var_379 + 1;
            }
            if ( Gvar.var_224 == 7 ) {
                Gvar.var_378 = Gvar.var_378 - 1;
                Gvar.var_379 = Gvar.var_379 - 1;
            }
            if ( Gvar.var_224 == 9 ) {
                Gvar.var_378 = Gvar.var_378 + 1;
                Gvar.var_379 = Gvar.var_379 - 1;
            }
            if ( Gvar.var_93[Gvar.var_378][Gvar.var_379] != 0 ) {
                Gvar.var_1638 = Gvar.var_93[Gvar.var_378][Gvar.var_379];
                Gvar.var_2469 = 0;
                if ( Gvar.var_83[Gvar.var_1638].Var23 == 0 ) {
                    Gvar.var_2469 = 1;
                }
                if ( Gvar.var_83[Gvar.var_1638].Var23 != 0 ) {
                    Gvar.var_2469 = 2;
                }
                if ( Gvar.var_83[Gvar.var_1638].Var0 == 50 ) {
                    Gvar.var_2469 = 0;
                }
                if ( Gvar.var_83[Gvar.var_1638].Var0 == 118 ) {
                    Gvar.var_2469 = 1;
                }
                if ( Gvar.var_2469 == 1 ) {
                    Adap.DSPLAY(161);
                    Gvar.var_1472 = (Gvar.var_83[Gvar.var_1638].Var1 - Gvar.var_74 + 4) * 40;
                    Gvar.var_1473 = (Gvar.var_83[Gvar.var_1638].Var2 - Gvar.var_75 + 4) * 40 - 10;
                    Gvar.var_310 = 1;
                    Gvar.var_1471 = 1;
                    for (let cnt = 0; cnt < 10; ++cnt) {
                        await Func.func337();
                        Gvar.var_1471++;
                    }
                    Gvar.var_83[Gvar.var_1638].Var8 = 1;
                    for (let cnt = 0; cnt < 10; ++cnt) {
                        await Func.func337();
                        Gvar.var_1471++;
                    }
                    Gvar.var_310 = 0;
                    Gvar.var_1471 = 0;
                    Gvar.var_2470 = Gvar.var_1139 + 1;
                    Gvar.var_2471 = 0;
                    for (let cnt = 0; cnt < Gvar.var_2470; ++cnt) {
                        if ( Gvar.var_1090[cnt] == Gvar.var_83[Gvar.var_1638].Var0 ) {
                            Gvar.var_2471 = 1;
                            Gvar.var_1787 = cnt;
                            break;
                        }
                    }
                    if ( Gvar.var_2471 == 0 ) {
                        Gvar.var_1139 = Gvar.var_1139 + 1;
                        Gvar.var_1090[Gvar.var_1139] = Gvar.var_83[Gvar.var_1638].Var0;
                        Gvar.var_1787 = Gvar.var_1139;
                    }
                    Gvar.var_1786 = 1;
                    Adap.DSPLAY(100);
                    Gvar.var_574 = 1;
                    Adap.DSPLAY(118);
                    await Func.func378();
                }
                if ( Gvar.var_2469 == 2 ) {
                    Gvar.var_1472 = (Gvar.var_83[Gvar.var_1638].Var1 - Gvar.var_74 + 4) * 40;
                    Gvar.var_1473 = (Gvar.var_83[Gvar.var_1638].Var2 - Gvar.var_75 + 4) * 40 - 10;
                    Gvar.var_310 = 1;
                    Gvar.var_1471 = 1;
                    for (let cnt = 0; cnt < 20; ++cnt) {
                        await Func.func337();
                    }
                    Gvar.var_310 = 0;
                    Gvar.var_1471 = 0;
                    Gvar.var_283 = Gvar.var_286;
                    Gvar.var_284 = Gvar.var_287;
                    Gvar.var_286 = "見えてなくて効かなかった…";
                    await Func.func053();
                }
            }
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
            }
            Gvar.var_389 = Gvar.var_477;
            Gvar.var_257 = Gvar.var_2494;
            await Func.func538();
            Gvar.var_242 = 1;
            await Func.func019();
            }
            // "見えてなくて効かなかった…"
            Gvar.var_257 = Gvar.var_2494;
            await Func.func538();
            Gvar.var_242 = 1;
            await Func.func019();
        }
        // === DISC No.425: 重い雨 ===
        if (Gvar.var_2494 == 425) {
            await Func.func538();
            await Func.setMessage("雨が降ってきた。", "", 10, false, false, false);
            Gvar.var_1771 = 1;
            Gvar.var_310 = 1;
            for (let cnt = 0; cnt < 40; ++cnt) {
                await Func.func337();
            }
            Gvar.var_457 = "重さのある雨が降り注ぐ！";
            Gvar.var_2455 = 1;
            Gvar.var_2424 = 1;
            for (let cnt = 0; cnt < Gvar.var_107; ++cnt) {
                Gvar.var_2456 = Gvar.var_647;
                Gvar.var_2457 = Adap.rnd(3);
                Gvar.var_2456 = Gvar.var_2456 + Gvar.var_2457;
                if ( Gvar.var_2424 != Gvar.var_141 ) {
                    Gvar.var_2458 = 0;
                    if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var10 == Gvar.var_226  &&  Gvar.var_226 > 0  &&  Gvar.var_226 <= 12 ) {
                        Gvar.var_456 = Gvar.var_2424;
                        Gvar.var_234 = Gvar.var_2456;
                        await Func.func745();
                        for (let cnt = 0; cnt < 2; ++cnt) {
                            await Func.func337();
                        }
                        Gvar.var_2458 = 1;
                    }
                    if ( Gvar.var_2458 == 0 ) {
                        Gvar.var_2221 = Gvar.var_74 - 1;
                        if ( Gvar.var_2221 < 0 ) {
                            Gvar.var_2221 = 0;
                        }
                        Gvar.var_2222 = Gvar.var_74 + 1;
                        if ( Gvar.var_2222 > Gvar.var_32 ) {
                            Gvar.var_2222 = Gvar.var_32;
                        }
                        Gvar.var_2223 = Gvar.var_75 + 1;
                        if ( Gvar.var_2223 > Gvar.var_33 ) {
                            Gvar.var_2223 = Gvar.var_33;
                        }
                        Gvar.var_2224 = Gvar.var_75 - 1;
                        if ( Gvar.var_2224 < 0 ) {
                            Gvar.var_2224 = 0;
                        }
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_74  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2223 ) {
                            Gvar.var_456 = Gvar.var_2424;
                            Gvar.var_234 = Gvar.var_2456;
                            await Func.func745();
                            for (let cnt = 0; cnt < 2; ++cnt) {
                                await Func.func337();
                            }
                            Gvar.var_2458 = 1;
                        }
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_74  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2224 ) {
                            Gvar.var_456 = Gvar.var_2424;
                            Gvar.var_234 = Gvar.var_2456;
                            await Func.func745();
                            for (let cnt = 0; cnt < 2; ++cnt) {
                                await Func.func337();
                            }
                            Gvar.var_2458 = 1;
                        }
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2221  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_75 ) {
                            Gvar.var_456 = Gvar.var_2424;
                            Gvar.var_234 = Gvar.var_2456;
                            await Func.func745();
                            for (let cnt = 0; cnt < 2; ++cnt) {
                                await Func.func337();
                            }
                            Gvar.var_2458 = 1;
                        }
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2222  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_75 ) {
                            Gvar.var_456 = Gvar.var_2424;
                            Gvar.var_234 = Gvar.var_2456;
                            await Func.func745();
                            for (let cnt = 0; cnt < 2; ++cnt) {
                                await Func.func337();
                            }
                            Gvar.var_2458 = 1;
                        }
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2221  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2223 ) {
                            Gvar.var_456 = Gvar.var_2424;
                            Gvar.var_234 = Gvar.var_2456;
                            await Func.func745();
                            for (let cnt = 0; cnt < 2; ++cnt) {
                                await Func.func337();
                            }
                            Gvar.var_2458 = 1;
                        }
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2222  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2223 ) {
                            Gvar.var_456 = Gvar.var_2424;
                            Gvar.var_234 = Gvar.var_2456;
                            await Func.func745();
                            for (let cnt = 0; cnt < 2; ++cnt) {
                                await Func.func337();
                            }
                            Gvar.var_2458 = 1;
                        }
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2221  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2224 ) {
                            Gvar.var_456 = Gvar.var_2424;
                            Gvar.var_234 = Gvar.var_2456;
                            await Func.func745();
                            for (let cnt = 0; cnt < 2; ++cnt) {
                                await Func.func337();
                            }
                            Gvar.var_2458 = 1;
                        }
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_83[Gvar.var_2424].Var1 == Gvar.var_2222  &&  Gvar.var_83[Gvar.var_2424].Var2 == Gvar.var_2224 ) {
                            Gvar.var_456 = Gvar.var_2424;
                            Gvar.var_234 = Gvar.var_2456;
                            await Func.func745();
                            for (let cnt = 0; cnt < 2; ++cnt) {
                                await Func.func337();
                            }
                            Gvar.var_2458 = 1;
                        }
                    }
                    if ( Gvar.var_2458 == 0  &&  Gvar.var_226 <= 12  &&  Gvar.var_226 != 0 ) {
                        Gvar.var_2459 = Gvar.var_83[Gvar.var_2424].Var1;
                        Gvar.var_2460 = Gvar.var_83[Gvar.var_2424].Var2;
                        Gvar.var_2461 = Gvar.var_83[Gvar.var_2424].Var1 - 1;
                        if ( Gvar.var_2461 < 0 ) {
                            Gvar.var_2461 = 0;
                        }
                        Gvar.var_2462 = Gvar.var_83[Gvar.var_2424].Var1 + 1;
                        if ( Gvar.var_2462 > Gvar.var_32 ) {
                            Gvar.var_2462 = Gvar.var_32;
                        }
                        Gvar.var_2463 = Gvar.var_83[Gvar.var_2424].Var2 + 1;
                        if ( Gvar.var_2463 > Gvar.var_33 ) {
                            Gvar.var_2463 = Gvar.var_33;
                        }
                        Gvar.var_2464 = Gvar.var_83[Gvar.var_2424].Var2 - 1;
                        if ( Gvar.var_2464 < 0 ) {
                            Gvar.var_2464 = 0;
                        }
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_82[Gvar.var_2461][Gvar.var_2460] == Gvar.var_226 ) {
                            Gvar.var_456 = Gvar.var_2424;
                            Gvar.var_234 = Gvar.var_2456;
                            await Func.func745();
                            for (let cnt = 0; cnt < 2; ++cnt) {
                                await Func.func337();
                            }
                            Gvar.var_2458 = 1;
                        }
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_82[Gvar.var_2462][Gvar.var_2460] == Gvar.var_226 ) {
                            Gvar.var_456 = Gvar.var_2424;
                            Gvar.var_234 = Gvar.var_2456;
                            await Func.func745();
                            for (let cnt = 0; cnt < 2; ++cnt) {
                                await Func.func337();
                            }
                            Gvar.var_2458 = 1;
                        }
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_82[Gvar.var_2459][Gvar.var_2463] == Gvar.var_226 ) {
                            Gvar.var_456 = Gvar.var_2424;
                            Gvar.var_234 = Gvar.var_2456;
                            await Func.func745();
                            for (let cnt = 0; cnt < 2; ++cnt) {
                                await Func.func337();
                            }
                            Gvar.var_2458 = 1;
                        }
                        if ( Gvar.var_83[Gvar.var_2424].Var0 != 0  &&  Gvar.var_82[Gvar.var_2459][Gvar.var_2464] == Gvar.var_226 ) {
                            Gvar.var_456 = Gvar.var_2424;
                            Gvar.var_234 = Gvar.var_2456;
                            await Func.func745();
                            for (let cnt = 0; cnt < 2; ++cnt) {
                                await Func.func337();
                            }
                            Gvar.var_2458 = 1;
                        }
                    }
                }
                Gvar.var_2424 = Gvar.var_2424 + 1;
            }
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
            }
            Gvar.var_2455 = 0;
            await Func.setMessage("", "　――――　雨があがった　――――", 10, false, false, false);
            Gvar.var_1771 = 0;
            Gvar.var_310 = 0;
            for (let cnt = 0; cnt < 15; ++cnt) {
                await Func.func337();
                Gvar.var_342 = Gvar.var_342 - 5;
            }
            Gvar.var_1697 = 0;
            Gvar.var_342 = 0;
            Gvar.var_343 = 0;
            await Func.func358();
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "周囲が水浸しになり";
            Gvar.var_287 = "辺りに水たまりができた";
            await Func.func053();
            await Func.func348();
            await Func.func358();
            Gvar.var_2553 = 0;
            Gvar.var_2554 = 0;
            Gvar.var_2555 = 0;
            Gvar.var_2614 = 1;
            Gvar.var_869 = 1;
            Gvar.var_2615 = 1;
            for (let cnt = 0; cnt < 11; ++cnt) {
                for (let cnt = 0; cnt < 500; ++cnt) {
                    Gvar.var_1714 = Adap.rnd(Gvar.var_32);
                    Gvar.var_255 = Adap.rnd(Gvar.var_33);
                    if ( Gvar.var_82[Gvar.var_1714][Gvar.var_255] == Gvar.var_226  &&  Gvar.var_88[Gvar.var_1714][Gvar.var_255] == 0  &&  Gvar.var_91[Gvar.var_1714][Gvar.var_255] == 0  &&  Gvar.var_84[Gvar.var_1714][Gvar.var_255] == 0  &&  Gvar.var_73[Gvar.var_1714][Gvar.var_255] == 0 ) {
                        await Func.func568();
                        break;
                    }
                }
            }
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
            }
            Gvar.var_2615 = 0;
            Gvar.var_2614 = 0;
            Gvar.var_869 = 0;
            if ( Gvar.var_2444 == 1 ) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            }
            await Func.setMessage("", "　――――　雨があがった　――――", 10, false, false, false);
            // 雨後処理
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "周囲が水浸しになり";
            Gvar.var_287 = "辺りに水たまりができた";
            await Func.func053();
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            await Func.func050();
            await Func.func348();
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        }
        // === DISC No.306: ウェザーリポート(気流) ===
        if (Gvar.var_2494 == 306) {
            await Func.func538();
            await Func.setMessage("「気流……」", "", 10, false, false, false);
            Adap.gsel(19);
            Adap.color(10, 10, 10);
            Adap.boxf(0, 0, 340, 340);
            Adap.gsel(0);
            Gvar.var_342 = 0;
            Gvar.var_343 = 1;
            for (let cnt = 0; cnt < 20; ++cnt) {
                await Func.func337();
                Gvar.var_342 = Gvar.var_342 + 10;
            }
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "「このフロアの空気の流れを読む…！」";
            await Func.func053();
            await Func.func358();
            Adap.DSPLAY(184);
            Gvar.var_136 = 1;
            Gvar.var_112 = 1;
            await Func.func348();
            for (let cnt = 0; cnt < 20; ++cnt) {
                await Func.func337();
            }
            for (let cnt = 0; cnt < 20; ++cnt) {
                await Func.func337();
                Gvar.var_342 = Gvar.var_342 - 10;
            }
            Gvar.var_343 = 0;
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "敵の行動がわかるようになった！";
            await Func.func053();
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
            }
            if ( Gvar.var_2444 == 1 ) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            }
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "「このフロアの空気の流れを読む…！」";
            Gvar.var_287 = "";
            await Func.func050();
            await Func.func053();
            await Func.func358();
            Adap.DSPLAY(184);
            Gvar.var_136 = 1;
            Gvar.var_112 = 1;
            await Func.func348();
            for (let cnt = 0; cnt < 20; ++cnt) {
                await Func.func337();
            }
            for (let cnt = 0; cnt < 20; ++cnt) {
                await Func.func337();
                Gvar.var_342 = Gvar.var_342 - 10;
            }
            Gvar.var_343 = 0;
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "敵の行動がわかるようになった！";
            await Func.func053();
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
            }
            if ( Gvar.var_2444 == 1 ) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            }
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "敵の行動がわかるようになった！";
            Gvar.var_287 = "";
            await Func.func050();
            await Func.func053();
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        // === DISC No.315: エピタフ(未来予知) ===
        if (Gvar.var_2494 == 315) {
            await Func.func538();
            await Func.setMessage("「エピタフ！」", "", 10, false, false, false);
            Gvar.var_136 = 1;
            Gvar.var_138 = 1;
            Gvar.var_112 = 1;
            Adap.DSPLAY(184);
            await Func.func348();
            Adap.gsel(19);
            Adap.color(10, 10, 10);
            Adap.boxf(0, 0, 340, 340);
            Adap.gsel(0);
            Gvar.var_342 = 255;
            Gvar.var_343 = 1;
            for (let cnt = 0; cnt < 51; ++cnt) {
                await Func.func337();
                Gvar.var_342 = Gvar.var_342 - 5;
            }
            Gvar.var_343 = 0;
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "「迫り来る危険を感知できる…！」";
            await Func.func053();
            await Func.func358();
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "見えないものが見えるようになった！";
            await Func.func053();
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
            }
            if ( Gvar.var_2444 == 1 ) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
            }
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "「迫り来る危険を感知できる…！」";
            Gvar.var_287 = "";
            await Func.func050();
            await Func.func053();
            await Func.func358();
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "見えないものが見えるようになった！";
            Gvar.var_287 = "";
            await Func.func050();
            await Func.func053();
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
            }
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        // === DISC No.393: ジョジョ読み(敵召喚) ===
        if (Gvar.var_2494 == 393) {
            await Func.func538();
            Gvar.var_2616 = Adap.rnd(6);
            if (Gvar.var_107 >= 50) {
                Gvar.var_2616 = 10;
            }
            Adap.DSPLAY(118);
            if (Gvar.var_2616 == 0) {
                await Func.setMessage("ﾃﾞｨｱﾎﾞﾛは", "「ﾌｧﾝﾄﾑ･ﾌﾞﾗｯﾄﾞ」を読んだ", 10, false, false, false);
            }
            if (Gvar.var_2616 == 1) {
                await Func.setMessage("ﾃﾞｨｱﾎﾞﾛは", "「戦闘潮流」を読んだ", 10, false, false, false);
            }
            if (Gvar.var_2616 == 2) {
                await Func.setMessage("ﾃﾞｨｱﾎﾞﾛは", "「ｽﾀｰﾀﾞｽﾄ･ｸﾙｾｲﾀﾞｰｽ」を読んだ", 10, false, false, false);
            }
            if (Gvar.var_2616 == 3) {
                await Func.setMessage("ﾃﾞｨｱﾎﾞﾛは", "「ダイヤモンドは砕けない」を読んだ", 10, false, false, false);
            }
            if (Gvar.var_2616 == 4) {
                await Func.setMessage("ﾃﾞｨｱﾎﾞﾛは", "「黄金の風」を読んだ", 10, false, false, false);
            }
            if (Gvar.var_2616 == 5) {
                await Func.setMessage("ﾃﾞｨｱﾎﾞﾛは", "「ｽﾄｰﾝ･ｵｰｼｬﾝ」を読んだ", 10, false, false, false);
            }
            if (Gvar.var_2616 == 6) {
                await Func.setMessage("ﾃﾞｨｱﾎﾞﾛ「これからはおれの時代だッ！」", "", 10, false, false, false);
                for (let cnt = 0; cnt < 10; ++cnt) {
                    await Func.func337();
                }
                if (Gvar.var_2444 == 1) {
                    Gvar.var_2444 = 0;
                    await Func.func540();
                }
                Gvar.var_242 = 1;
                await Func.func019();
            }
            if ( Gvar.var_2494 == 393 ) {
                await Func.func538();
                Gvar.var_2616 = Adap.rnd(6);
                if ( Gvar.var_107 >= 50 ) {
                    Gvar.var_2616 = 10;
                }
                Adap.DSPLAY(118);
                await Func.setMessage("ﾃﾞｨｱﾎﾞﾛ「これからはおれの時代だッ！」", "「ｽﾄｰﾝ･ｵｰｼｬﾝ」を読んだ", 10, false, false, false);
                for (let cnt = 0; cnt < 16; ++cnt) {
                    await Func.func337();
                }
                if ( Gvar.var_2616 == 6 ) {
                    for (let cnt = 0; cnt < 10; ++cnt) {
                        await Func.func337();
                    }
                    if ( Gvar.var_2444 == 1 ) {
                        Gvar.var_2444 = 0;
                        await Func.func540();
                    }
                    Gvar.var_242 = 1;
                    await Func.func019();
                    // @ts-ignore HSP: return
                }
                Gvar.var_466 = 0;
                Gvar.var_467 = 0;
                Gvar.var_1752 = 0;
                Gvar.var_1753 = 0;
                Gvar.var_1754 = 0;
                Gvar.var_1755 = 0;
                await Func.func0657();
                Gvar.var_443 = 1;
                Gvar.var_444 = Gvar.var_445;
                await Func.func588();
                Gvar.var_2617 = 0;
                Gvar.var_466 = (Gvar.var_83[Gvar.var_445].Var1 - Gvar.var_74 + 4) * 40;
                Gvar.var_467 = (Gvar.var_83[Gvar.var_445].Var2 - Gvar.var_75 + 4) * 40;
                Gvar.var_445 = Gvar.var_444;
                Gvar.var_443 = 0;
                if ( Gvar.var_2339 == 0 ) {
                    Gvar.var_283 = Gvar.var_286;
                    Gvar.var_284 = Gvar.var_287;
                    Gvar.var_286 = "しかし何も起こらなかった…";
                    Gvar.var_24 = Gvar.var_24[2];
                    Gvar.var_25 = Gvar.var_25[2];
                    Gvar.var_26 = Gvar.var_26[2];
                    await Func.func053();
                    for (let cnt = 0; cnt < 10; ++cnt) {
                        await Func.func337();
                    }
                    Gvar.var_2618 = 0;
                    if ( Gvar.var_2444 == 1 ) {
                        Gvar.var_2444 = 0;
                        await Func.func540();
                    }
                    Gvar.var_242 = 1;
                    await Func.func019();
                }
                await Func.func0657();
                Gvar.var_443 = 1;
                Gvar.var_444 = Gvar.var_445;
                await Func.func588();
                Gvar.var_2617 = 0;
                Gvar.var_1752 = (Gvar.var_83[Gvar.var_445].Var1 - Gvar.var_74 + 4) * 40;
                Gvar.var_1753 = (Gvar.var_83[Gvar.var_445].Var2 - Gvar.var_75 + 4) * 40;
                Gvar.var_445 = Gvar.var_444;
                Gvar.var_443 = 0;
                await Func.func0657();
                Gvar.var_443 = 1;
                Gvar.var_444 = Gvar.var_445;
                await Func.func588();
                Gvar.var_2617 = 0;
                Gvar.var_1754 = (Gvar.var_83[Gvar.var_445].Var1 - Gvar.var_74 + 4) * 40;
                Gvar.var_1755 = (Gvar.var_83[Gvar.var_445].Var2 - Gvar.var_75 + 4) * 40;
                Gvar.var_445 = Gvar.var_444;
                Gvar.var_443 = 0;
                Adap.DSPLAY(168);
                Gvar.var_310 = 1;
                Gvar.var_1751 = 1;
                for (let cnt = 0; cnt < 10; ++cnt) {
                    await Func.func337();
                    Gvar.var_1751++;
                }
                Gvar.var_310 = 0;
                Gvar.var_1751 = 0;
                await Func.func348();
                Gvar.var_283 = Gvar.var_286;
                Gvar.var_284 = Gvar.var_287;
                Gvar.var_286 = "マンガのキャラクターが現れた！";
                await Func.func053();
                for (let cnt = 0; cnt < 10; ++cnt) {
                    await Func.func337();
                    Gvar.var_2618 = 0;
                }
                for (let cnt = 0; cnt < 10; ++cnt) {
                    await Func.func337();
                }
                if ( Gvar.var_2444 == 1 ) {
                    Gvar.var_2444 = 0;
                    await Func.func540();
                }
                Gvar.var_242 = 1;
                await Func.func019();
            }
            // "しかし何も起こらなかった…"
            // "マンガのキャラクターが現れた！"
            if (Gvar.var_2444 == 1) {
                Gvar.var_2444 = 0;
                await Func.func540();
            }
            Gvar.var_242 = 1;
            await Func.func019();
        }
        // === DISC No.399: ゴールドエクスペリエンスレクイエム ===
        if (Gvar.var_2494 == 399) {
            await Func.func538();
            if (Gvar.var_652 == 0) { Gvar.var_475 = 11; }
            if (Gvar.var_652 == 1) { Gvar.var_475 = 1; }
            if (Gvar.var_652 == 2) { Gvar.var_475 = 16; }
            if (Gvar.var_652 == 3) { Gvar.var_475 = 29; }
            if (Gvar.var_652 == 4) { Gvar.var_475 = 40; }
            Gvar.var_224 = 2;
            for (let cnt = 0; cnt < 10; ++cnt) {
                await Func.func337();
            }
            await Func.setMessage("「ｺﾞｰﾙﾄﾞ･ｴｸｽﾍﾟﾘｴﾝｽ･ﾚｸｲｴﾑ」！！", "", 10, false, false, false);
            await Func.func0114();
            Gvar.var_1776 = 1;
            Gvar.var_310 = 1;
            for (let cnt = 0; cnt < 30; ++cnt) {
                await Func.func337();
                if ( Gvar.var_1776 == 3 ) {
                    Gvar.var_124 = 2;
                    Gvar.var_846 = 1;
                    Gvar.var_236 = 0;
                    Adap.DSPLAY(105);
                }
                Gvar.var_1776++;
            }
            Gvar.var_1776 = 0;
            Gvar.var_310 = 0;
            if ( Gvar.var_2444 == 1 ) {
                Gvar.var_2444 = 0;
                await Func.func540();
                for (let cnt = 0; cnt < 10; ++cnt) {
                    await Func.func337();
                }
            }
            await Func.setMessage("", "", 10, false, false, false);
            await Func.setMessage("死に続ける能力が解除された！", "", 10, false, false, false);
            await Func.func358();
            Gvar.var_124 = 0;
            Gvar.var_114 = 1;
            Gvar.var_342 = 255;
            Gvar.var_406 = 1;
            Gvar.var_1778 = 1;
            Gvar.var_310 = 1;
            Gvar.var_573 = 1;
            Adap.gsel(19);
            Adap.color(255, 255, 255);
            Adap.boxf(0, 0, 340, 340);
            Adap.gsel(0);
            Gvar.var_343 = 1;
            for (let cnt = 0; cnt < 51; ++cnt) {
                await Func.func337();
                Gvar.var_342 = Gvar.var_342 - 5;
                Gvar.var_1778 = Gvar.var_1778 + 2;
            }
            Gvar.var_343 = 0;
            await Func.func0131();
            for (let cnt = 0; cnt < 100; ++cnt) {
                await Func.func337();
                Gvar.var_1778 = Gvar.var_1778 + 2;
            }
            await Func.func564();
            }
            await Func.setMessage("しかし何も起こらなかった", "", 10, false, false, false);
            Gvar.var_259 = 0;
            Gvar.var_245 = 0;
            Gvar.var_242 = 1;
            await Func.func019();
        // === デフォルト: 何も起こらなかった ===
        await Func.setMessage("しかし何も起こらなかった", "", 10, false, false, false);
        Gvar.var_259 = 0;
        Gvar.var_245 = 0;
        Gvar.var_242 = 1;
        await Func.func019();

export {func543}
