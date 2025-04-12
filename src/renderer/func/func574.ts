import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func574(this: any) {
        Adap.dbgprt(574);
        Gvar.var_2694 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_97; ++cnt1) {
            if (Gvar.var_83[Gvar.var_2694].Var22 == 1) {
                if (Gvar.var_83[Gvar.var_2694].Var0 == 118) {
                    Gvar.var_2676 = Gvar.var_201;
                    Gvar.var_2702 = Gvar.var_83[Gvar.var_2694].Var1;
                    Gvar.var_2703 = Gvar.var_83[Gvar.var_2694].Var2;
                    if (Gvar.var_77[Gvar.var_2702][Gvar.var_2703] != 0) {
                        Gvar.var_2704 = Gvar.var_77[Gvar.var_2702][Gvar.var_2703];
                        Gvar.var_78[Gvar.var_2704].Var0 = 0;
                        Gvar.var_78[Gvar.var_2704].Var1 = 0;
                        Gvar.var_78[Gvar.var_2704].Var2 = 0;
                        Gvar.var_77[Gvar.var_2702][Gvar.var_2703] = 0;
                    }
                    if (Gvar.var_80[Gvar.var_2702][Gvar.var_2703] != 0) {
                        Gvar.var_2704 = Gvar.var_80[Gvar.var_2702][Gvar.var_2703];
                        if (Gvar.var_81[Gvar.var_2704][0] != 31) {
                            Gvar.var_81[Gvar.var_2704][0] = 0;
                            Gvar.var_81[Gvar.var_2704][1] = 0;
                            Gvar.var_81[Gvar.var_2704][2] = 0;
                            Gvar.var_80[Gvar.var_2702][Gvar.var_2703] = 0;
                        }
                    }
                    if (Gvar.var_71[Gvar.var_2702][Gvar.var_2703] == 0) {
                        Gvar.var_71[Gvar.var_2702][Gvar.var_2703] = 14;
                        Gvar.var_2676 = 14;
                        Gvar.var_2677 = Gvar.var_2702;
                        Gvar.var_2678 = Gvar.var_2703;
                        Gvar.var_2679 = Gvar.var_2677 - 1;
                        if (Gvar.var_2679 <= 0) {
                            Gvar.var_2679 = 0;
                        }
                        Gvar.var_2680 = Gvar.var_2677 + 1;
                        if (Gvar.var_2680 >= Gvar.var_33) {
                            Gvar.var_2680 = Gvar.var_33;
                        }
                        Gvar.var_2681 = Gvar.var_2678 - 1;
                        if (Gvar.var_2681 <= 0) {
                            Gvar.var_2681 = 0;
                        }
                        Gvar.var_2682 = Gvar.var_2678 + 1;
                        if (Gvar.var_2682 >= Gvar.var_34) {
                            Gvar.var_2682 = Gvar.var_34;
                        }
                        if (Gvar.var_71[Gvar.var_2679][Gvar.var_2678] != 0 && Gvar.var_71[Gvar.var_2679][Gvar.var_2678] <= 12 && Gvar.var_71[Gvar.var_2680][Gvar.var_2678] != 0 && Gvar.var_71[Gvar.var_2680][Gvar.var_2678] <= 12) {
                            Gvar.var_71[Gvar.var_2677][Gvar.var_2678] = Gvar.var_71[Gvar.var_2679][Gvar.var_2678];
                            Gvar.var_2676 = Gvar.var_71[Gvar.var_2677][Gvar.var_2678];
                        }
                        if (Gvar.var_71[Gvar.var_2677][Gvar.var_2682] != 0 && Gvar.var_71[Gvar.var_2677][Gvar.var_2682] <= 12 && Gvar.var_71[Gvar.var_2677][Gvar.var_2681] != 0 && Gvar.var_71[Gvar.var_2677][Gvar.var_2681] <= 12) {
                            Gvar.var_71[Gvar.var_2677][Gvar.var_2678] = Gvar.var_71[Gvar.var_2677][Gvar.var_2682];
                            Gvar.var_2676 = Gvar.var_71[Gvar.var_2677][Gvar.var_2678];
                        }
                    }
                    Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
                    Gvar.var_1357 = 1;
                    Gvar.var_748 = (Gvar.var_83[Gvar.var_2694].Var1 - Gvar.var_66 + 4) * 40;
                    Gvar.var_749 = (Gvar.var_83[Gvar.var_2694].Var2 - Gvar.var_67 + 4) * 40 + 20;
                    Gvar.var_83[Gvar.var_2694].Var10 = Gvar.var_2676;
                    Gvar.var_83[Gvar.var_2694].Var11 = 0;
                    Gvar.var_83[Gvar.var_2694].Var21 = 1;
                    Gvar.var_411 = 6;
                    Adap.DSPLAY(189);
                    for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                        await Func.func337(); // メッセージ表示処理(自動)
                        Gvar.var_1357 = Gvar.var_1357 + 1;
                    }
                    Gvar.var_1357 = 0;
                    Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
                    Gvar.var_411 = 7;
                    await Func.AutoDraw(2);
                    Gvar.var_411 = 8;
                    await Func.AutoDraw(2);
                    Gvar.var_411 = 0;
                    Gvar.var_83[Gvar.var_2694].Var21 = 0;
                    await Func.AutoDraw(2);
                    Gvar.var_2705 = Gvar.var_83[Gvar.var_2694].Var1;
                    Gvar.var_2706 = Gvar.var_83[Gvar.var_2694].Var2;
                    if (Gvar.var_66 < Gvar.var_2705 && Gvar.var_67 > Gvar.var_2706) {
                        Gvar.var_83[Gvar.var_2694].Var5 = 1;
                    }
                    if (Gvar.var_66 > Gvar.var_2705 && Gvar.var_67 > Gvar.var_2706) {
                        Gvar.var_83[Gvar.var_2694].Var5 = 3;
                    }
                    if (Gvar.var_66 < Gvar.var_2705 && Gvar.var_67 < Gvar.var_2706) {
                        Gvar.var_83[Gvar.var_2694].Var5 = 7;
                    }
                    if (Gvar.var_66 > Gvar.var_2705 && Gvar.var_67 < Gvar.var_2706) {
                        Gvar.var_83[Gvar.var_2694].Var5 = 9;
                    }
                    if (Gvar.var_66 == Gvar.var_2705 && Gvar.var_67 > Gvar.var_2706) {
                        Gvar.var_83[Gvar.var_2694].Var5 = 2;
                    }
                    if (Gvar.var_66 == Gvar.var_2705 && Gvar.var_67 < Gvar.var_2706) {
                        Gvar.var_83[Gvar.var_2694].Var5 = 8;
                    }
                    if (Gvar.var_67 == Gvar.var_2706 && Gvar.var_66 < Gvar.var_2705) {
                        Gvar.var_83[Gvar.var_2694].Var5 = 4;
                    }
                    if (Gvar.var_67 == Gvar.var_2706 && Gvar.var_66 > Gvar.var_2705) {
                        Gvar.var_83[Gvar.var_2694].Var5 = 6;
                    }
                    await Func.AutoDraw(2);
                }
                // 瞬間移動後の画像処理
                if (Gvar.var_83[Gvar.var_2694].Var0 == 3) { // Gvar.enemy_list = 3 タワーオブグレー
                    Gvar.var_83[Gvar.var_2694].Var11 = 0;
                    Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
                    Gvar.var_1306 = 1;
                    Gvar.var_1286 = (Gvar.var_83[Gvar.var_2694].Var1 - Gvar.var_66 + 4) * 40;
                    Gvar.var_1287 = (Gvar.var_83[Gvar.var_2694].Var2 - Gvar.var_67 + 4) * 40 - 50;
                    Adap.DSPLAY(190);
                    for (let cnt4 = 0; cnt4 < 5; ++cnt4) {
                        await Func.func337(); // メッセージ表示処理(自動)
                        Gvar.var_1306 = Gvar.var_1306 + 1;
                    }
                    Gvar.var_1306 = 0;
                    Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
                }
                if (Gvar.var_83[Gvar.var_2694].Var0 == 48) {
                    Gvar.var_83[Gvar.var_2694].Var11 = 0;
                    Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
                    Gvar.var_1307 = 1;
                    Gvar.var_1308 = Adap.rnd(2);
                    Gvar.var_1308++;
                    Gvar.var_1286 = (Gvar.var_83[Gvar.var_2694].Var1 - Gvar.var_66 + 4) * 40;
                    Gvar.var_1287 = (Gvar.var_83[Gvar.var_2694].Var2 - Gvar.var_67 + 4) * 40 - 50;
                    Adap.DSPLAY(191);
                    for (let cnt4 = 0; cnt4 < 9; ++cnt4) {
                        await Func.func337(); // メッセージ表示処理(自動)
                        Gvar.var_1307 = Gvar.var_1307 + 1;
                    }
                    Gvar.var_1307 = 0;
                    Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
                }
                if (Gvar.var_83[Gvar.var_2694].Var0 == 15) {
                    Gvar.var_83[Gvar.var_2694].Var11 = 1;
                    if (Gvar.var_127 == 0 && Gvar.var_83[Gvar.var_2694].Var30 == 0) {
                        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
                    }
                    Gvar.var_1453 = 1;
                    Adap.DSPLAY(219);
                    Gvar.var_1286 = (Gvar.var_83[Gvar.var_2694].Var1 - Gvar.var_66 + 4) * 40;
                    Gvar.var_1287 = (Gvar.var_83[Gvar.var_2694].Var2 - Gvar.var_67 + 4) * 40 - 10;
                    Adap.DSPLAY(191);
                    for (let cnt4 = 0; cnt4 < 9; ++cnt4) {
                        await Func.func337(); // メッセージ表示処理(自動)
                        Gvar.var_1453 = Gvar.var_1453 + 1;
                    }
                    Gvar.var_1453 = 0;
                    Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
                    Gvar.var_83[Gvar.var_2694].Var11 = 0;
                }
                if (Gvar.var_83[Gvar.var_2694].Var0 == 115 || Gvar.var_83[Gvar.var_2694].Var0 == 27 || Gvar.var_83[Gvar.var_2694].Var0 == 18 || Gvar.var_83[Gvar.var_2694].Var0 == 86 || Gvar.var_83[Gvar.var_2694].Var0 == 44) {
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_83[Gvar.var_2694].Var11 = 0;
                    if (Gvar.var_83[Gvar.var_2694].Var0 == 115) {
                        Adap.DSPLAY(183);
                    }
                    if (Gvar.var_83[Gvar.var_2694].Var0 == 27) {
                        Adap.DSPLAY(183);
                    }
                    if (Gvar.var_83[Gvar.var_2694].Var0 == 86) {
                
                        Adap.DSPLAY(123);
                    }
                    if (Gvar.var_83[Gvar.var_2694].Var0 == 44) {
                
                        Adap.DSPLAY(120);
                    }
                    Gvar.var_83[Gvar.var_2694].Var21 = 1;
                    Gvar.var_411 = 1;
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_411 = 2;
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_411 = 3;
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_411 = 4;
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_411 = 5;
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_411 = 0;
                    Gvar.var_83[Gvar.var_2694].Var21 = 0;
                }
                if (Gvar.var_83[Gvar.var_2694].Var0 == 76 || Gvar.var_83[Gvar.var_2694].Var0 == 65) {
                    Gvar.var_83[Gvar.var_2694].Var21 = 1;
                    Gvar.var_411 = 1;
                    if (Gvar.var_83[Gvar.var_2694].Var0 == 76) {
                        Adap.DSPLAY(231);
                    }
                    if (Gvar.var_83[Gvar.var_2694].Var0 == 65) {
                        Adap.DSPLAY(230);
                    }
                    await Func.AutoDraw(10);
                    Gvar.var_83[Gvar.var_2694].Var21 = 0;
                    Gvar.var_411 = 0;
                }
                if (Gvar.var_83[Gvar.var_2694].Var0 == 135) {
                    Gvar.var_83[Gvar.var_2694].Var21 = 1;
                    Adap.DSPLAY(229);
                    for (let cnt4 = 0; cnt4 < 2; ++cnt4) {
                        Gvar.var_411 = 1;
                        await Func.func337(); // メッセージ表示処理(自動)
                        Gvar.var_411 = 2;
                        await Func.func337(); // メッセージ表示処理(自動)
                        Gvar.var_411 = 1;
                        await Func.func337(); // メッセージ表示処理(自動)
                        Gvar.var_411 = 3;
                        await Func.func337(); // メッセージ表示処理(自動)
                    }
                    Gvar.var_768 = 1;
                    Gvar.var_1728 = 1;
                    Gvar.var_2435 = 1;
                    Gvar.var_1550 = Gvar.var_83[Gvar.var_2694].Var1;
                    Gvar.var_230 = Gvar.var_83[Gvar.var_2694].Var2;
                    Gvar.var_2412 = 1;
                    await Func.func536();
                    Gvar.var_2412 = 0;
                    Gvar.var_768 = 0;
                    Gvar.var_1728 = 0;
                    Gvar.var_2435 = 0;
                    Gvar.var_83[Gvar.var_2694].Var21 = 0;
                    Gvar.var_411 = 0;
                    Gvar.var_83[Gvar.var_2694].Var22 = 0;
                }
                if (Gvar.var_83[Gvar.var_2694].Var0 == 148) {
                    Gvar.var_83[Gvar.var_2694].Var21 = 1;
                    Gvar.var_411 = 1;
                    await Func.AutoDraw(2);
                    Adap.DSPLAY(231);
                    Gvar.var_411 = 2;
                    await Func.AutoDraw(2);
                    Gvar.var_411 = 3;
                    for (let cnt4 = 0; cnt4 < 5; ++cnt4) {
                        await Func.func337(); // メッセージ表示処理(自動)
                    }
                    Gvar.var_768 = 1;
                    Gvar.var_1728 = 1;
                    Gvar.var_2425 = 1;
                    Gvar.var_1550 = Gvar.var_83[Gvar.var_2694].Var1;
                    Gvar.var_230 = Gvar.var_83[Gvar.var_2694].Var2;
                    Gvar.var_2412 = 1;
                    Gvar.var_2428 = 1;
                    await Func.func536();
                    Gvar.var_2428 = 0;
                    Gvar.var_2412 = 0;
                    Gvar.var_768 = 0;
                    Gvar.var_1728 = 0;
                    Gvar.var_2425 = 0;
                    Gvar.var_411 = 4;
                    await Func.AutoDraw(2);
                    Gvar.var_411 = 5;
                    await Func.AutoDraw(2);
                    Gvar.var_411 = 4;
                    await Func.AutoDraw(2);
                    Gvar.var_83[Gvar.var_2694].Var21 = 0;
                    Gvar.var_411 = 0;
                }
                Gvar.var_83[Gvar.var_2694].Var22 = 0;
            }
            Gvar.var_2694 = Gvar.var_2694 + 1;
        }
        return;
}

export {func574}
