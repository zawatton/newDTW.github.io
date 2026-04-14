/**
 * func020 — imoprt
 *
 * (org原典: newDTW_func0)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 敵側のターン処理
async function func020(this: any) {
        Adap.dbgprt(20);
        Gvar.var_362 = 0;
        if (Gvar.time_paused == 0) { // 時止め(時消し飛ばし)状態でない場合
            await Func.func575();
            await Func.func545();
        }
        if (Gvar.var_240 == 0 || Gvar.time_paused == 1) {
            Gvar.var_409 = 3;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_409 = 2;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_409 = 1;
            await Func.func337(); // メッセージ表示処理(自動)
        }
        Gvar.var_409 = 0;
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        if (Gvar.time_paused == 1) { // 時止め(時消し飛ばし)状態の場合
            return;
        }
        if (Gvar.var_318 >= 1 && Gvar.shageki_disc_id == 406) {
            Gvar.var_240 = 0;
            Gvar.var_83[Gvar.var_318].Var21 = 1;
            if (Gvar.var_199 == 2) {
                Gvar.var_411 = 3;
            }
            if (Gvar.var_199 == 4) {
                Gvar.var_411 = 4;
            }
            if (Gvar.var_199 == 8) {
                Gvar.var_411 = 1;
            }
            if (Gvar.var_199 == 6) {
                Gvar.var_411 = 2;
            }
            if (Gvar.var_199 == 1) {
                Gvar.var_411 = 8;
            }
            if (Gvar.var_199 == 7) {
                Gvar.var_411 = 7;
            }
            if (Gvar.var_199 == 3) {
                Gvar.var_411 = 6;
            }
            if (Gvar.var_199 == 9) {
                Gvar.var_411 = 5;
            }
            await Func.AutoDraw(10);
            Gvar.var_83[Gvar.var_318].Var21 = 0;
            Gvar.var_411 = 0;
            Gvar.var_318 = 0;
        }
        if (Gvar.var_318 >= 1 && Gvar.shageki_disc_id != 406) {
            Gvar.var_240 = 0;
            Gvar.var_412 = Gvar.var_318;
            Gvar.var_83[Gvar.var_318].Var21 = 1;
            if (Gvar.var_199 == 2) {
                Gvar.var_411 = 3;
            }
            if (Gvar.var_199 == 4) {
                Gvar.var_411 = 4;
            }
            if (Gvar.var_199 == 8) {
                Gvar.var_411 = 1;
            }
            if (Gvar.var_199 == 6) {
                Gvar.var_411 = 2;
            }
            if (Gvar.var_199 == 1) {
                Gvar.var_411 = 8;
            }
            if (Gvar.var_199 == 7) {
                Gvar.var_411 = 7;
            }
            if (Gvar.var_199 == 3) {
                Gvar.var_411 = 6;
            }
            if (Gvar.var_199 == 9) {
                Gvar.var_411 = 5;
            }
            Adap.DSPLAY(106);
            await Func.AutoDraw(10);
            Gvar.var_389 = 2;
            Gvar.var_413 = Gvar.var_199;
            Gvar.var_199 = 2;
            Gvar.var_414 = 1;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Adap.DSPLAY(188);
            for (let cnt2 = 0; cnt2 < 25; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_414++;
            }
            Gvar.var_199 = Gvar.var_413;
            Gvar.var_389 = 0;
            Gvar.var_414 = 0;
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_83[Gvar.var_318].Var21 = 0;
            Gvar.var_411 = 0;
            Gvar.var_318 = 0;
            if (Gvar.wallet < 1) {
                if (Gvar.equip_disc[396] == 0) {
                    if (Gvar.var_157 == 0) { // Gvar.var_157 倍速移動フラグOFFであれば
                        Gvar.var_133 = 1;
                        Gvar.var_397 = 0;
                    }
                    if (Gvar.var_157 != 0) { // Gvar.var_157 倍速移動フラグOFFでなければ
                        Gvar.var_157 = 0; // Gvar.var_157 倍速移動フラグOFF
                        Gvar.var_158 = 0;
                    }
                }
                Adap.DSPLAY(162);
                await Func.setMessage("罪悪感で体が重くなった！",
                                        "", 8, true, false, false);
                if (Gvar.equip_disc[396] == 1) {
                    await Func.setMessage("しかし装備スタンドの効果で",
                                            "速度は遅くならない！", 7, false, false, true);
                }
                await Func.AutoDraw(10);
            }
            if (Gvar.wallet >= 1) {
                Adap.DSPLAY(207);
                if (Gvar.wallet <= 500) {
                    Gvar.stolen_money = Gvar.wallet;
                }
                if (Gvar.wallet > 500) {
                    Gvar.stolen_money = Math.floor(Gvar.wallet / 2); // Math.floor は対象の値の小数点以下を切り捨て
                }
                Gvar.wallet = Gvar.wallet - Gvar.stolen_money;
                Gvar.var_83[Gvar.var_412].Var26 = 1;
                Gvar.belongings_item_list = 1;
                Gvar.var_417 = Gvar.belongings_item_list;
                Gvar.target_item_name = "" + Gvar.stolen_money + "G"; //現在の所持金表示
                Gvar.var_419 = Gvar.var_412 + 200;
                Gvar.var_78[Gvar.var_419].Var0 = 1;
                Gvar.var_78[Gvar.var_419].Var1 = 0;
                Gvar.var_78[Gvar.var_419].Var2 = 0;
                Gvar.var_78[Gvar.var_419].Var3 = 0;
                Gvar.var_78[Gvar.var_419].Var4 = 0;
                Gvar.var_78[Gvar.var_419].Var5 = 0;
                Gvar.var_78[Gvar.var_419].Var6 = 0;
                Gvar.var_78[Gvar.var_419].Var7 = 0;
                Gvar.var_78[Gvar.var_419].Var8 = 0;
                Gvar.var_78[Gvar.var_419].Var9 = 0;
                Gvar.var_78[Gvar.var_419].Var10 = 0;
                Gvar.var_78[Gvar.var_419].Var11 = 0;
                Gvar.var_78[Gvar.var_419].Var12 = 0;
                // 0でなければ、もともとの配列に格納されている金額に新たに金額を追加する。var_78[Gvar.var_419].Var13が金額を格納する配列？
                if (Gvar.var_78[Gvar.var_419].Var13 != 0) {
                    Gvar.var_78[Gvar.var_419].Var13 = Gvar.var_78[Gvar.var_419].Var13 + Gvar.stolen_money;
                }
                // 0であればそのまま金額を追加する。var_78[Gvar.var_419].Var13が金額を格納する配列？
                if (Gvar.var_78[Gvar.var_419].Var13 == 0) {
                    Gvar.var_78[Gvar.var_419].Var13 = Gvar.stolen_money;
                }
                Gvar.var_78[Gvar.var_419].Var14 = 0;
                Gvar.var_78[Gvar.var_419].Var15 = 0;
                Gvar.var_78[Gvar.var_419].Var16 = 0;
                Gvar.var_78[Gvar.var_419].Var17 = 0;
                Gvar.var_78[Gvar.var_419].Var18 = 0;
                Gvar.var_78[Gvar.var_419].Var19 = 0;
                Gvar.var_78[Gvar.var_419].Var20 = 0;
                Gvar.var_78[Gvar.var_419].Var21 = 0;
                Gvar.var_78[Gvar.var_419].Var22 = 0;
                Gvar.var_78[Gvar.var_419].Var23 = 0;
                Gvar.var_78[Gvar.var_419].Var24 = 0;
                Gvar.var_78[Gvar.var_419].Var25 = 0;
                Gvar.var_78[Gvar.var_419].Var26 = 0;
                Gvar.var_78[Gvar.var_419].Var27 = 0;
                Gvar.var_78[Gvar.var_419].Var28 = 0;
                Gvar.var_78[Gvar.var_419].Var29 = 0;

                await Func.setMessage("罪悪感で" + Gvar.target_item_name + " 奪われた！",
                                        "", 8, false, false, false);

                await Func.AutoDraw(20);
                Gvar.var_199 = Gvar.var_413;
            }
        }
        if (Gvar.var_420 >= 1) {
            Gvar.var_420 = Gvar.var_420 - 1;
            if (Gvar.var_420 == 0) {
                Gvar.var_398 = 0;
                for (let cnt3 = 0; cnt3 < Gvar.var_97 + 1; ++cnt3) {
                    if (Gvar.var_83[cnt3][0] == 146 && Gvar.var_83[cnt3][31] == 5) {
                        Gvar.var_399 = Gvar.var_83[cnt3][1]; // 0.1405 カウンターがリンクしていなかったので修正 cnt4 → cnt3へ変更
                        Gvar.var_400 = Gvar.var_83[cnt3][2]; // 0.1405 カウンターがリンクしていなかったので修正 cnt4 → cnt3へ変更
                        Gvar.var_82[Gvar.var_399][Gvar.var_400] = 0;
                        Gvar.var_83[cnt3][0] = 0; // 0.1405 カウンターがリンクしていなかったので修正 cnt4 → cnt3へ変更
                        Gvar.var_83[cnt3][1] = 0; // 0.1405 カウンターがリンクしていなかったので修正 cnt4 → cnt3へ変更
                        Gvar.var_83[cnt3][2] = 0; // 0.1405 カウンターがリンクしていなかったので修正 cnt4 → cnt3へ変更
                        Gvar.var_83[cnt3][6] = 0; // 0.1405 カウンターがリンクしていなかったので修正 cnt4 → cnt3へ変更
                        Gvar.var_83[cnt3][7] = 0; // 0.1405 カウンターがリンクしていなかったので修正 cnt4 → cnt3へ変更
                        Gvar.var_83[cnt3][8] = 0; // 0.1405 カウンターがリンクしていなかったので修正 cnt4 → cnt3へ変更
                        Gvar.var_83[cnt3][9] = 0; // 0.1405 カウンターがリンクしていなかったので修正 cnt4 → cnt3へ変更
                        Gvar.var_83[cnt3][15] = 0; // 0.1405 カウンターがリンクしていなかったので修正 cnt4 → cnt3へ変更
                        Gvar.var_83[cnt3][18] = 0; // 0.1405 カウンターがリンクしていなかったので修正 cnt4 → cnt3へ変更
                        Gvar.var_398 = 1;
                    }
                }
                if (Gvar.var_398 == 1) {
                    await Func.setMessage("残像ﾁｬﾘｵｯﾂは消えた。",
                                            "", 7, false, false, false);
                    Gvar.var_240 = 0;
                    await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
                    await Func.AutoDraw(10);
                }
            }
        }
        Gvar.var_421 = 1;
        Gvar.var_422 = 0;
        for (let cnt1 = 0; cnt1 < Gvar.var_97; ++cnt1) {
            if (Gvar.var_83[Gvar.var_421].Var0 == 0 || Gvar.var_83[Gvar.var_421].Var0 == 50) {
                Gvar.var_421++;
                continue;
            }
            if (Gvar.time_paused_count >= 1 && Gvar.var_421 != Gvar.var_152) {
                Gvar.var_421++;
                continue;
            }
            Gvar.var_423 = Gvar.var_83[Gvar.var_421].Var1;
            Gvar.var_424 = Gvar.var_83[Gvar.var_421].Var2;
            Gvar.var_425 = Gvar.var_423 - 1;
            Gvar.var_426 = Gvar.var_423 + 1;
            Gvar.var_427 = Gvar.var_424 + 1;
            Gvar.var_428 = Gvar.var_424 - 1;
            if (Gvar.var_425 < 5) {
                Gvar.var_425 = 5;
            }
            if (Gvar.var_428 < 5) {
                Gvar.var_428 = 5;
            }
            if (Gvar.var_426 > Gvar.var_33) {
                Gvar.var_426 = Gvar.var_33;
            }
            if (Gvar.var_427 > Gvar.var_34) {
                Gvar.var_427 = Gvar.var_34;
            }
            if (Gvar.var_80[Gvar.var_423][Gvar.var_424] != 0) {
                await Func.func547(); // 敵が罠(キッスのシール、ソフトマシーンの仕込み)を踏んだ時の動作処理
            }
            if (Gvar.var_83[Gvar.var_421].Var18 == 0 && Gvar.var_83[Gvar.var_421].Var4 == 2 && Gvar.var_83[Gvar.var_421].Var9 == 0 && Gvar.var_83[Gvar.var_421].Var12 == 0 && Gvar.var_83[Gvar.var_421].Var13 == 0 && Gvar.var_83[Gvar.var_421].Var17 == 0 && Gvar.var_83[Gvar.var_421].Var23 == 0 && Gvar.var_83[Gvar.var_421].Var31 != 5 && Gvar.var_83[Gvar.var_421].Var0 != 164 && Gvar.var_83[Gvar.var_421].Var0 != 165) {
                Gvar.var_429 = 0;
                if (Gvar.var_82[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_429 == 0) {
                    Gvar.var_430 = Gvar.var_82[Gvar.var_425][Gvar.var_424];
                    if (Gvar.var_83[Gvar.var_430].Var31 == 5) {
                        Gvar.var_431 = Gvar.var_66;
                        Gvar.var_432 = Gvar.var_67;
                        Gvar.var_66 = Gvar.var_83[Gvar.var_430].Var1;
                        Gvar.var_67 = Gvar.var_83[Gvar.var_430].Var2;
                        Gvar.var_429 = 1;
                    }
                }
                if (Gvar.var_82[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_429 == 0) {
                    Gvar.var_430 = Gvar.var_82[Gvar.var_426][Gvar.var_424];
                    if (Gvar.var_83[Gvar.var_430].Var31 == 5) {
                        Gvar.var_431 = Gvar.var_66;
                        Gvar.var_432 = Gvar.var_67;
                        Gvar.var_66 = Gvar.var_83[Gvar.var_430].Var1;
                        Gvar.var_67 = Gvar.var_83[Gvar.var_430].Var2;
                        Gvar.var_429 = 1;
                    }
                }
                if (Gvar.var_82[Gvar.var_423][Gvar.var_427] != 0 && Gvar.var_429 == 0) {
                    Gvar.var_430 = Gvar.var_82[Gvar.var_423][Gvar.var_427];
                    if (Gvar.var_83[Gvar.var_430].Var31 == 5) {
                        Gvar.var_431 = Gvar.var_66;
                        Gvar.var_432 = Gvar.var_67;
                        Gvar.var_66 = Gvar.var_83[Gvar.var_430].Var1;
                        Gvar.var_67 = Gvar.var_83[Gvar.var_430].Var2;
                        Gvar.var_429 = 1;
                    }
                }
                if (Gvar.var_82[Gvar.var_423][Gvar.var_428] != 0 && Gvar.var_429 == 0) {
                    Gvar.var_430 = Gvar.var_82[Gvar.var_423][Gvar.var_428];
                    if (Gvar.var_83[Gvar.var_430].Var31 == 5) {
                        Gvar.var_431 = Gvar.var_66;
                        Gvar.var_432 = Gvar.var_67;
                        Gvar.var_66 = Gvar.var_83[Gvar.var_430].Var1;
                        Gvar.var_67 = Gvar.var_83[Gvar.var_430].Var2;
                        Gvar.var_429 = 1;
                    }
                }
                if (Gvar.var_82[Gvar.var_425][Gvar.var_427] != 0 && Gvar.var_429 == 0) {
                    Gvar.var_430 = Gvar.var_82[Gvar.var_425][Gvar.var_427];
                    if (Gvar.var_83[Gvar.var_430].Var31 == 5) {
                        Gvar.var_431 = Gvar.var_66;
                        Gvar.var_432 = Gvar.var_67;
                        Gvar.var_66 = Gvar.var_83[Gvar.var_430].Var1;
                        Gvar.var_67 = Gvar.var_83[Gvar.var_430].Var2;
                        Gvar.var_429 = 1;
                    }
                }
                if (Gvar.var_82[Gvar.var_426][Gvar.var_427] != 0 && Gvar.var_429 == 0) {
                    Gvar.var_430 = Gvar.var_82[Gvar.var_426][Gvar.var_427];
                    if (Gvar.var_83[Gvar.var_430].Var31 == 5) {
                        Gvar.var_431 = Gvar.var_66;
                        Gvar.var_432 = Gvar.var_67;
                        Gvar.var_66 = Gvar.var_83[Gvar.var_430].Var1;
                        Gvar.var_67 = Gvar.var_83[Gvar.var_430].Var2;
                        Gvar.var_429 = 1;
                    }
                }
                if (Gvar.var_82[Gvar.var_425][Gvar.var_428] != 0 && Gvar.var_429 == 0) {
                    Gvar.var_430 = Gvar.var_82[Gvar.var_425][Gvar.var_428];
                    if (Gvar.var_83[Gvar.var_430].Var31 == 5) {
                        Gvar.var_431 = Gvar.var_66;
                        Gvar.var_432 = Gvar.var_67;
                        Gvar.var_66 = Gvar.var_83[Gvar.var_430].Var1;
                        Gvar.var_67 = Gvar.var_83[Gvar.var_430].Var2;
                        Gvar.var_429 = 1;
                    }
                }
                if (Gvar.var_82[Gvar.var_426][Gvar.var_428] != 0 && Gvar.var_429 == 0) {
                    Gvar.var_430 = Gvar.var_82[Gvar.var_426][Gvar.var_428];
                    if (Gvar.var_83[Gvar.var_430].Var31 == 5) {
                        Gvar.var_431 = Gvar.var_66;
                        Gvar.var_432 = Gvar.var_67;
                        Gvar.var_66 = Gvar.var_83[Gvar.var_430].Var1;
                        Gvar.var_67 = Gvar.var_83[Gvar.var_430].Var2;
                        Gvar.var_429 = 1;
                    }
                }
                Gvar.var_433 = Gvar.var_421;
                Gvar.var_434 = Gvar.var_83[Gvar.var_433].Var1;
                Gvar.var_435 = Gvar.var_83[Gvar.var_433].Var2;
                await Func.func704();
                if (Gvar.var_429 == 1) {
                    Gvar.var_66 = Gvar.var_431;
                    Gvar.var_67 = Gvar.var_432;
                }
            }
            if (Gvar.var_83[Gvar.var_421].Var0 == 26 && Gvar.var_83[Gvar.var_421].Var20 == 0 && Gvar.var_83[Gvar.var_421].Var26 == 0 && Gvar.var_83[Gvar.var_421].Var6 == 0 && Gvar.var_83[Gvar.var_421].Var12 == 0 && Gvar.var_83[Gvar.var_421].Var13 == 0 && Gvar.var_83[Gvar.var_421].Var17 == 0 && Gvar.var_83[Gvar.var_421].Var23 == 0 && Gvar.var_83[Gvar.var_421].Var28 == 0 && Gvar.var_97 < 90 && Gvar.var_336 < 90) {
                Gvar.var_436 = 0;
                if (Gvar.var_201 != 14 && Gvar.var_83[Gvar.var_421].Var10 == Gvar.var_201) {
                    await Func.func573();
                    Gvar.var_436 = 1;
                }
                if (Gvar.var_436 == 0 && Gvar.var_83[Gvar.var_421].Var10 == 14) {
                    await Func.func573();
                }
            }
            if (Gvar.var_83[Gvar.var_421].Var31 == 5 && Gvar.var_367 == 1) {
                Gvar.enemy_list = Gvar.var_83[Gvar.var_421].Var0;
                await Func.func626(); // 敵リスト
                if (Gvar.var_83[Gvar.var_421].Var39 >= 2) {
                    Gvar.enemy_hp = Math.floor(Gvar.enemy_hp * (Gvar.var_83[Gvar.var_421].Var39 + 10) / 10);
                    if (Gvar.enemy_hp >= 999) {
                        Gvar.enemy_hp = 999;
                    }
                }
                if (Gvar.var_83[Gvar.var_421].Var3 < Gvar.enemy_hp) {
                    Gvar.var_83[Gvar.var_421].Var3 = Gvar.var_83[Gvar.var_421].Var3 + 1;
                }
            }
            if (Gvar.var_83[Gvar.var_421].Var12 >= 1 && Gvar.var_83[Gvar.var_421].Var12 < 99) {
                Gvar.var_83[Gvar.var_421].Var12 = Gvar.var_83[Gvar.var_421].Var12 - 1;
                if (Gvar.var_83[Gvar.var_421].Var12 == 1) {
                    Gvar.var_83[Gvar.var_421].Var12 = 99;
                }
            }
            if (Gvar.var_83[Gvar.var_421].Var13 > 0 && Gvar.var_83[Gvar.var_421].Var13 != 99) {
                Gvar.var_83[Gvar.var_421].Var13 = Gvar.var_83[Gvar.var_421].Var13 + 1;
                if (Gvar.var_83[Gvar.var_421].Var13 == 21) {
                    Gvar.var_83[Gvar.var_421].Var13 = 0;
                }
            }
            if (Gvar.var_83[Gvar.var_421].Var17 > 0) {
                Gvar.var_83[Gvar.var_421].Var17 = Gvar.var_83[Gvar.var_421].Var17 + 1;
                if (Gvar.var_83[Gvar.var_421].Var17 == 11) {
                    Gvar.var_83[Gvar.var_421].Var17 = 0;
                    Gvar.var_83[Gvar.var_421].Var4 = 3;
                }
            }
            if (Gvar.var_83[Gvar.var_421].Var23 > 0 && Gvar.var_83[Gvar.var_421].Var0 != 118) {
                Gvar.var_83[Gvar.var_421].Var23 = Gvar.var_83[Gvar.var_421].Var23 + 1;
                if (Gvar.var_83[Gvar.var_421].Var0 == 109 && Gvar.var_83[Gvar.var_421].Var29 == 1) {
                    Gvar.var_83[Gvar.var_421].Var23 = 1;
                }
                if (Gvar.var_83[Gvar.var_421].Var23 == 31) {
                    Gvar.var_83[Gvar.var_421].Var23 = 0;
                    Gvar.var_83[Gvar.var_421].Var4 = 3;
                }
            }
            if (Gvar.var_83[Gvar.var_421].Var14 > 0 && Gvar.var_157 != 1) {
                Gvar.var_83[Gvar.var_421].Var14 = Gvar.var_83[Gvar.var_421].Var14 + 1;
                if (Gvar.var_83[Gvar.var_421].Var14 == 3) {
                    Gvar.var_83[Gvar.var_421].Var14 = 1;
                }
            }
            if (Gvar.var_83[Gvar.var_421].Var0 == 49) {
                if (Gvar.var_83[Gvar.var_421].Var29 < 10) {
                    Gvar.var_83[Gvar.var_421].Var29 = Gvar.var_83[Gvar.var_421].Var29 + 1;
                }
                if (Gvar.var_83[Gvar.var_421].Var29 == 10) {
                    Gvar.var_240 = 0;
                    Gvar.var_439 = Gvar.var_83[Gvar.var_421].Var0;
                    Gvar.var_83[Gvar.var_421].Var5 = 2;
                    Gvar.var_440 = Gvar.var_83[Gvar.var_421].Var1;
                    Gvar.var_441 = Gvar.var_83[Gvar.var_421].Var2;
                    Gvar.var_442 = Gvar.var_83[Gvar.var_421].Var1;
                    Gvar.var_443 = Gvar.var_83[Gvar.var_421].Var2;
                    Gvar.var_83[Gvar.var_421].Var11 = 1;
                    Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
                    Gvar.var_444 = 25;
                    for (let cnt4 = 0; cnt4 < 25; ++cnt4) {
                        await Func.func337(); // メッセージ表示処理(自動)
                        Gvar.var_444 = Gvar.var_444 - 1;
                    }
                    Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
                    Gvar.var_444 = 0;
                    Gvar.var_399 = Gvar.var_83[Gvar.var_421].Var1;
                    Gvar.var_400 = Gvar.var_83[Gvar.var_421].Var2;
                    Gvar.var_82[Gvar.var_399][Gvar.var_400] = 0;
                    Gvar.var_83[Gvar.var_421].Var0 = 0;
                    Gvar.var_83[Gvar.var_421].Var1 = 0;
                    Gvar.var_83[Gvar.var_421].Var2 = 0;
                    Gvar.var_445 = 1;
                    await Func.func405();
                    Gvar.var_445 = 0;
                    if (Gvar.var_446 != 0) {
                        Gvar.var_447 = Gvar.var_448;
                        Gvar.var_449 = Gvar.var_450;
                        Gvar.var_451 = 1;
                        Gvar.var_452 = 1;
                        Gvar.var_453 = 1;
                        Gvar.var_454 = 1;
                        await Func.func384();
                        Gvar.var_454 = 0;
                        Gvar.var_451 = 0;
                        Gvar.var_452 = 0;
                        Gvar.var_453 = 0;
                    }
                    await Func.setMessage("サーフィスは人形に戻った。",
                                            "", 7, false, false, false);
                    Gvar.var_240 = 0;
                    await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
                    await Func.AutoDraw(10);
                }
            }
            if (Gvar.var_83[Gvar.var_421].Var24 >= 1) {
                Gvar.var_83[Gvar.var_421].Var24 = Gvar.var_83[Gvar.var_421].Var24 - 1;
                if (Gvar.var_83[Gvar.var_421].Var24 == 0) {
                    Gvar.var_455 = Gvar.var_83[Gvar.var_421].Var1;
                    Gvar.var_456 = Gvar.var_83[Gvar.var_421].Var2;
                    Gvar.var_83[Gvar.var_421].Var8 = 1;
                    await Func.func668();
                    Gvar.var_83[Gvar.var_421].Var8 = 0;
                }
            }
            Gvar.var_421 = Gvar.var_421 + 1;
        }
        if (Gvar.var_262 == 0 && Gvar.time_paused_count == 0) { // Gvar.var_262 == 0 なので、Gvar.dungeon_number = 0 でなければ
            await Func.func574();
        }
        return;
}

export {func020}
