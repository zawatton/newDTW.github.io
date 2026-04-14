/**
 * func015 — func015 ディアボロの移動処理(座標計算処理)
 *
 * (org原典: newDTW_func0)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// ディアボロの移動処理(座標計算処理)
async function func015(this: any) {
        Adap.dbgprt(15);
        if (Gvar.var_116 >= 1 || Gvar.var_114 >= 1) {
            Gvar.var_66 = Gvar.var_236;
            Gvar.var_67 = Gvar.var_237;
            await Func.func026(); // その場へ固定された時の動作処理
            return;
        }
        if (Gvar.var_126 == 1) {
            Gvar.var_66 = Gvar.var_236;
            Gvar.var_67 = Gvar.var_237;
            Gvar.var_288 = Adap.rnd(8);
            if (Gvar.var_288 == 0) {
                Gvar.var_66 = Gvar.var_66 - 1;
                Gvar.var_67 = Gvar.var_67 - 1;
                Gvar.var_199 = 7;
            }
            if (Gvar.var_288 == 1) {
                Gvar.var_66 = Gvar.var_66 + 1;
                Gvar.var_67 = Gvar.var_67 - 1;
                Gvar.var_199 = 9;
            }
            if (Gvar.var_288 == 2) {
                Gvar.var_66 = Gvar.var_66 - 1;
                Gvar.var_67 = Gvar.var_67 + 1;
                Gvar.var_199 = 1;
            }
            if (Gvar.var_288 == 3) {
                Gvar.var_66 = Gvar.var_66 + 1;
                Gvar.var_67 = Gvar.var_67 + 1;
                Gvar.var_199 = 3;
            }
            if (Gvar.var_288 == 4) {
                Gvar.var_66 = Gvar.var_66 - 1;
                Gvar.var_199 = 4;
            }
            if (Gvar.var_288 == 5) {
                Gvar.var_66 = Gvar.var_66 + 1;
                Gvar.var_199 = 6;
            }
            if (Gvar.var_288 == 6) {
                Gvar.var_67 = Gvar.var_67 - 1;
                Gvar.var_199 = 8;
            }
            if (Gvar.var_288 == 7) {
                Gvar.var_67 = Gvar.var_67 + 1;
                Gvar.var_199 = 2;
            }
        }
        // No = 0 なので、拠点(ホテル、亀、)
        if (Gvar.dungeon_number == 0 && Gvar.var_66 == 14 && Gvar.var_67 == 22 && Gvar.var_236 != 15) { // X軸14なのでロッコ・バロッコ所長?
            Gvar.var_66 = Gvar.var_236; // buffer指定用X座標
            Gvar.var_67 = Gvar.var_237; // buffer指定用Y座標
            await Func.func162(); // ヴェネチアホテル読込処理
            return;
        }
        // No = 0 なので、拠点(ホテル、亀、)
        if (Gvar.dungeon_number == 0 && Gvar.var_66 == 12 && Gvar.var_67 == 22 && Gvar.var_199 == 8) { // X軸12なので岸辺露伴？
            Gvar.var_66 = Gvar.var_236; // buffer指定用X座標
            Gvar.var_67 = Gvar.var_237; // buffer指定用Y座標
            await Func.func736(); // 岸辺露伴に話しかけた時の初期化処理
            return;
        }
        Gvar.var_241 = 0;
        if (Gvar.var_217 == 0) {
            if (Gvar.var_66 < 5) {
                Gvar.var_66 = Gvar.var_236; // buffer指定用X座標
                Gvar.var_67 = Gvar.var_237; // buffer指定用Y座標
                await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                return;
            }
            if (Gvar.var_67 < 5) {
                Gvar.var_66 = Gvar.var_236; // buffer指定用X座標
                Gvar.var_67 = Gvar.var_237; // buffer指定用Y座標
                await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                return;
            }
            if (Gvar.var_66 > Gvar.var_33) {
                Gvar.var_66 = Gvar.var_236; // buffer指定用X座標
                Gvar.var_67 = Gvar.var_237; // buffer指定用Y座標
                await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                return;
            }
            if (Gvar.var_67 > Gvar.var_34) {
                Gvar.var_66 = Gvar.var_236; // buffer指定用X座標
                Gvar.var_67 = Gvar.var_237; // buffer指定用Y座標
                await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                return;
            }
            Gvar.var_289 = Gvar.var_66 - 1;
            if (Gvar.var_289 < 0) {
                Gvar.var_289 = 0;
            }
            Gvar.var_290 = Gvar.var_66 + 1;
            if (Gvar.var_290 > Gvar.var_33) {
                Gvar.var_290 = Gvar.var_33;
            }
            Gvar.var_291 = Gvar.var_67 + 1;
            if (Gvar.var_291 > Gvar.var_34) {
                Gvar.var_291 = Gvar.var_34;
            }
            Gvar.var_292 = Gvar.var_67 - 1;
            if (Gvar.var_292 < 0) {
                Gvar.var_292 = 0;
            }
            if (Gvar.var_71[Gvar.var_66][Gvar.var_67] == 13 && Gvar.nouryoku_disc_id != 202 && Gvar.nouryoku_disc_id != 117 && Gvar.var_125 == 0) {
                Gvar.var_66 = Gvar.var_236; // buffer指定用X座標
                Gvar.var_67 = Gvar.var_237; // buffer指定用Y座標
                await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                return;
            }
            await Func.func080(false); // 各キー入力確認 OFF?
            if (Gvar.var_71[Gvar.var_66][Gvar.var_67] == 0 && Gvar.var_159 == 0) {
                Gvar.var_66 = Gvar.var_236; // buffer指定用X座標
                Gvar.var_67 = Gvar.var_237; // buffer指定用Y座標
                await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                return;
            }
            if (Gvar.var_71[Gvar.var_66][Gvar.var_67] == 0 && Gvar.key_X_on == 1) {
                Gvar.var_66 = Gvar.var_236; // buffer指定用X座標
                Gvar.var_67 = Gvar.var_237; // buffer指定用Y座標
                await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                return;
            }
            if (Gvar.var_199 == 1 && Gvar.var_159 == 0) {
                if (Gvar.var_71[Gvar.var_290][Gvar.var_67] == 0 || Gvar.var_71[Gvar.var_66][Gvar.var_292] == 0) {
                    Gvar.var_66 = Gvar.var_236; // buffer指定用X座標
                    Gvar.var_67 = Gvar.var_237; // buffer指定用Y座標
                    await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                    return;
                }
            }
            if (Gvar.var_199 == 3 && Gvar.var_159 == 0) {
                if (Gvar.var_71[Gvar.var_289][Gvar.var_67] == 0 || Gvar.var_71[Gvar.var_66][Gvar.var_292] == 0) {
                    Gvar.var_66 = Gvar.var_236; // buffer指定用X座標
                    Gvar.var_67 = Gvar.var_237; // buffer指定用Y座標
                    await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                    return;
                }
            }
            if (Gvar.var_199 == 7 && Gvar.var_159 == 0) {
                if (Gvar.var_71[Gvar.var_290][Gvar.var_67] == 0 || Gvar.var_71[Gvar.var_66][Gvar.var_291] == 0) {
                    Gvar.var_66 = Gvar.var_236; // buffer指定用X座標
                    Gvar.var_67 = Gvar.var_237; // buffer指定用Y座標
                    await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                    return;
                }
            }
            if (Gvar.var_199 == 9 && Gvar.var_159 == 0) {
                if (Gvar.var_71[Gvar.var_289][Gvar.var_67] == 0 || Gvar.var_71[Gvar.var_66][Gvar.var_291] == 0) {
                    Gvar.var_66 = Gvar.var_236; // buffer指定用X座標
                    Gvar.var_67 = Gvar.var_237; // buffer指定用Y座標
                    await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                    return;
                }
            }
            // 時止め(時消し飛ばし)状態でない場合
            if (Gvar.var_146 >= 1 && Gvar.var_236 == Gvar.var_147 && Gvar.var_237 == Gvar.var_148 && Gvar.var_139 == 0 && Gvar.var_144 == 0 && Gvar.var_123 == 0 && Gvar.time_paused == 0) {
                if (Gvar.var_82[Gvar.var_66][Gvar.var_67] != 0) {
                    Gvar.var_66 = Gvar.var_147;
                    Gvar.var_67 = Gvar.var_148;
                    Gvar.var_236 = Gvar.var_66;
                    Gvar.var_237 = Gvar.var_67;
                    await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                    return;
                }
                Gvar.var_66 = Gvar.var_147;
                Gvar.var_67 = Gvar.var_148;
                Gvar.var_236 = Gvar.var_66;
                Gvar.var_237 = Gvar.var_67;
                await Func.setMessage("鉄塔からは出られない！", "", 7, false, false, false);
                Adap.DSPLAY(188);
                await Func.AutoDraw(9);
                await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                return;
            }
            Gvar.var_301 = 0;
            if (Gvar.var_201 != 14 && Gvar.var_71[Gvar.var_66][Gvar.var_67] >= 13 && Gvar.var_139 == 0 && Gvar.var_144 == 0 && Gvar.var_123 == 0 && Gvar.time_paused == 0) {
                if (Gvar.nouryoku_disc_id != 112 && Gvar.nouryoku_disc_id != 204 && Gvar.nouryoku_disc_id != 394 && Gvar.nouryoku_disc_id != 395) {
                    Gvar.var_302 = 1;
                    for (let cnt4 = 0; cnt4 < Gvar.var_97; ++cnt4) {
                        if (Gvar.var_83[Gvar.var_302].Var0 == 31 && Gvar.var_83[Gvar.var_302].Var20 == 0 && Gvar.var_83[Gvar.var_302].Var10 == Gvar.var_201 && Gvar.var_83[Gvar.var_302].Var12 == 0 && Gvar.var_83[Gvar.var_302].Var13 == 0 && Gvar.var_83[Gvar.var_302].Var14 == 0 && Gvar.var_83[Gvar.var_302].Var17 == 0 && Gvar.var_83[Gvar.var_302].Var23 == 0) {
                            Gvar.var_301 = 1;
                        }
                        Gvar.var_302 = Gvar.var_302 + 1;
                    }
                    if (Gvar.var_301 == 1 && Gvar.var_71[Gvar.var_66][Gvar.var_67] == 13) {
                        Gvar.var_303 = Gvar.var_66;
                        Gvar.var_304 = Gvar.var_67;
                        Gvar.var_305 = Gvar.var_66 - 1;
                        if (Gvar.var_305 < 0) {
                            Gvar.var_305 = 0;
                        }
                        Gvar.var_306 = Gvar.var_66 + 1;
                        if (Gvar.var_306 > Gvar.var_33) {
                            Gvar.var_306 = Gvar.var_33;
                        }
                        Gvar.var_307 = Gvar.var_67 + 1;
                        if (Gvar.var_307 > Gvar.var_34) {
                            Gvar.var_307 = Gvar.var_34;
                        }
                        Gvar.var_308 = Gvar.var_67 - 1;
                        if (Gvar.var_308 < 0) {
                            Gvar.var_308 = 0;
                        }
                        if (Gvar.var_71[Gvar.var_305][Gvar.var_304] == Gvar.var_201) {
                            Gvar.var_301 = 0;
                        }
                        if (Gvar.var_71[Gvar.var_306][Gvar.var_304] == Gvar.var_201) {
                            Gvar.var_301 = 0;
                        }
                        if (Gvar.var_71[Gvar.var_303][Gvar.var_307] == Gvar.var_201) {
                            Gvar.var_301 = 0;
                        }
                        if (Gvar.var_71[Gvar.var_303][Gvar.var_308] == Gvar.var_201) {
                            Gvar.var_301 = 0;
                        }
                        if (Gvar.var_71[Gvar.var_305][Gvar.var_307] == Gvar.var_201) {
                            Gvar.var_301 = 0;
                        }
                        if (Gvar.var_71[Gvar.var_305][Gvar.var_308] == Gvar.var_201) {
                            Gvar.var_301 = 0;
                        }
                        if (Gvar.var_71[Gvar.var_306][Gvar.var_307] == Gvar.var_201) {
                            Gvar.var_301 = 0;
                        }
                        if (Gvar.var_71[Gvar.var_306][Gvar.var_308] == Gvar.var_201) {
                            Gvar.var_301 = 0;
                        }
                    }
                    if (Gvar.var_301 == 1) {
                        Gvar.var_240 = 0;
                        Gvar.var_309 = Gvar.var_66;
                        Gvar.var_310 = Gvar.var_67;
                        Gvar.var_66 = Gvar.var_236;
                        Gvar.var_67 = Gvar.var_237;
                        if (Gvar.var_82[Gvar.var_309][Gvar.var_310] == 0) {
                            Adap.gsel(19);
                            Adap.color(255, 255, 255);
            
                            Adap.boxf(0, 0, 340, 340);
                            Adap.gsel(0);
                            Gvar.var_311 = 255;
                            Adap.DSPLAY(206);
                            Gvar.var_312 = 1;
                            await Func.func337(); // メッセージ表示処理(自動)
                            Gvar.var_312 = 0;
                            await Func.setMessage("吉良の親父がいるため",
                                                    "この部屋から出ることができない！", 7, false, false, false);
                            await Func.AutoDraw(9);
                        }
                        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                        return;
                    }
                }
            }
            Gvar.var_313 = 0;
            if (Gvar.key_X_on == 1 && Gvar.var_82[Gvar.var_66][Gvar.var_67] != 0 && Gvar.var_71[Gvar.var_236][Gvar.var_237] != 0 && Gvar.var_71[Gvar.var_236][Gvar.var_237] != 13) {
                Gvar.var_314 = Gvar.var_82[Gvar.var_66][Gvar.var_67];
                Gvar.var_315 = 0;
                if (Gvar.var_83[Gvar.var_314].Var31 == 4) {
                    Gvar.var_315 = 1;
                }
                if (Gvar.var_83[Gvar.var_314].Var31 == 5) {
                    Gvar.var_315 = 1;
                }
                if (Gvar.var_83[Gvar.var_314].Var0 == 61) { // No = 61 ヨーヨーマッ
                    Gvar.var_315 = 1;
                }
                if (Gvar.var_83[Gvar.var_314].Var0 == 49) {
                    Gvar.var_315 = 1;
                }
                if (Gvar.var_83[Gvar.var_314].Var0 == 116) {
                    Gvar.var_315 = 1;
                }
                if (Gvar.var_83[Gvar.var_314].Var20 == 2) {
                    Gvar.var_315 = 1;
                }
                if (Gvar.var_83[Gvar.var_314].Var0 == 33) {
                    Gvar.var_315 = 0;
                }
                if (Gvar.var_83[Gvar.var_314].Var0 == 142) {
                    Gvar.var_315 = 0;
                }
                if (Gvar.var_315 == 1) {
                    Gvar.var_316 = Gvar.var_83[Gvar.var_314].Var1;
                    Gvar.var_317 = Gvar.var_83[Gvar.var_314].Var2;
                    Gvar.var_83[Gvar.var_314].Var1 = Gvar.var_236;
                    Gvar.var_83[Gvar.var_314].Var2 = Gvar.var_237;
                    Gvar.var_82[Gvar.var_316][Gvar.var_317] = 0;
                    Gvar.var_82[Gvar.var_236][Gvar.var_237] = Gvar.var_314;
                    if (Gvar.var_199 == 4) {
                        Gvar.var_83[Gvar.var_314].Var5 = 6;
                    }
                    if (Gvar.var_199 == 6) {
                        Gvar.var_83[Gvar.var_314].Var5 = 4;
                    }
                    if (Gvar.var_199 == 8) {
                        Gvar.var_83[Gvar.var_314].Var5 = 2;
                    }
                    if (Gvar.var_199 == 2) {
                        Gvar.var_83[Gvar.var_314].Var5 = 8;
                    }
                    if (Gvar.var_199 == 1) {
                        Gvar.var_83[Gvar.var_314].Var5 = 9;
                    }
                    if (Gvar.var_199 == 3) {
                        Gvar.var_83[Gvar.var_314].Var5 = 7;
                    }
                    if (Gvar.var_199 == 7) {
                        Gvar.var_83[Gvar.var_314].Var5 = 3;
                    }
                    if (Gvar.var_199 == 9) {
                        Gvar.var_83[Gvar.var_314].Var5 = 1;
                    }
                    Gvar.var_240 = 0;
                    Gvar.var_313 = Gvar.var_314;
                    if (Gvar.var_83[Gvar.var_314].Var0 == 116) {
                        Gvar.var_318 = Gvar.var_314;
                    }
                }
            }
            if (Gvar.var_82[Gvar.var_66][Gvar.var_67] != 0) {
                Gvar.var_319 = Gvar.var_82[Gvar.var_66][Gvar.var_67];
                if (Gvar.var_83[Gvar.var_319].Var0 != 50) {
                    Gvar.var_66 = Gvar.var_236;
                    Gvar.var_67 = Gvar.var_237;
                    await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                    return;
                }
            }
            if (Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0 && Gvar.var_313 == 0) {
                Gvar.var_320 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
                if (Gvar.var_78[Gvar.var_320].Var15 == 1) {
                    Gvar.var_321 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
                    Gvar.var_66 = Gvar.var_236;
                    Gvar.var_67 = Gvar.var_237;
                    Gvar.var_240 = 0;
                    await Func.func402();
                }
            }
        }
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {func015}
