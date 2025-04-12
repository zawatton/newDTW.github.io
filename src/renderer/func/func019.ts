import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Stand from '../stand/index'

// ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
// 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
async function func019(this: any) {
        Adap.dbgprt(19);
        if (Gvar.dungeon_number != 0) {
            Gvar.var_338++;
        }
        await Func.func016();
        Gvar.var_195 = 0;
        Gvar.var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
        Gvar.var_234 = 0;
        Gvar.var_339 = 0;
        Gvar.var_340 = 0;
        Gvar.var_341 = 0;
        if (Gvar.var_66 != Gvar.var_236 || Gvar.var_67 != Gvar.var_237) {
            Gvar.var_342 = 0;
            Gvar.var_343 = 0;
            Gvar.var_344 = 0;
        }
        if (Gvar.var_66 == Gvar.var_236 && Gvar.var_67 == Gvar.var_237) {
            if (Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0) {
                Gvar.var_342 = 1;
            }
            if (Gvar.var_73[Gvar.var_66][Gvar.var_67] != 0) {
                Gvar.var_344 = 1;
            }
            if (Gvar.var_80[Gvar.var_66][Gvar.var_67] != 0) {
                Gvar.var_343 = 1;
            }
        }
        await Func.func020(); // 敵側のターン処理
        if (Gvar.var_211 <= 0) {
            Gvar.var_211 = 0;
            Gvar.var_212 = 1;
            await Func.func009(); // ディアボロ側ターン処理(ループ処理)
            return;
        }
        if (Gvar.var_159 >= 1) {
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
            Gvar.var_345 = 0;
    
            Gvar.var_346 = Adap.dim(10, 10, Gvar.length3 = null, null);
            if (Gvar.var_71[Gvar.var_66][Gvar.var_67] == 0) {
                Gvar.var_347 = Gvar.var_66;
                Gvar.var_348 = Gvar.var_67;
                await Func.func622();
                Gvar.var_345 = 1;
                Gvar.var_346[0][1] = Gvar.var_347;
                Gvar.var_346[0][2] = Gvar.var_348;
            }
            if (Gvar.var_71[Gvar.var_289][Gvar.var_67] == 0) {
                Gvar.var_347 = Gvar.var_289;
                Gvar.var_348 = Gvar.var_67;
                await Func.func622();
                Gvar.var_345 = 1;
                Gvar.var_346[4][1] = Gvar.var_347;
                Gvar.var_346[4][2] = Gvar.var_348;
            }
            if (Gvar.var_71[Gvar.var_290][Gvar.var_67] == 0) {
                Gvar.var_347 = Gvar.var_290;
                Gvar.var_348 = Gvar.var_67;
                await Func.func622();
                Gvar.var_345 = 1;
                Gvar.var_346[6][1] = Gvar.var_347;
                Gvar.var_346[6][2] = Gvar.var_348;
            }
            if (Gvar.var_71[Gvar.var_66][Gvar.var_291] == 0) {
                Gvar.var_347 = Gvar.var_66;
                Gvar.var_348 = Gvar.var_291;
                await Func.func622();
                Gvar.var_345 = 1;
                Gvar.var_346[2][1] = Gvar.var_347;
                Gvar.var_346[2][2] = Gvar.var_348;
            }
            if (Gvar.var_71[Gvar.var_66][Gvar.var_292] == 0) {
                Gvar.var_347 = Gvar.var_66;
                Gvar.var_348 = Gvar.var_292;
                await Func.func622();
                Gvar.var_345 = 1;
                Gvar.var_346[8][1] = Gvar.var_347;
                Gvar.var_346[8][2] = Gvar.var_348;
            }
            if (Gvar.var_71[Gvar.var_289][Gvar.var_291] == 0) {
                Gvar.var_347 = Gvar.var_289;
                Gvar.var_348 = Gvar.var_291;
                await Func.func622();
                Gvar.var_345 = 1;
                Gvar.var_346[1][1] = Gvar.var_347;
                Gvar.var_346[1][2] = Gvar.var_348;
            }
            if (Gvar.var_71[Gvar.var_290][Gvar.var_291] == 0) {
                Gvar.var_347 = Gvar.var_290;
                Gvar.var_348 = Gvar.var_291;
                await Func.func622();
                Gvar.var_345 = 1;
                Gvar.var_346[3][1] = Gvar.var_347;
                Gvar.var_346[3][2] = Gvar.var_348;
            }
            if (Gvar.var_71[Gvar.var_289][Gvar.var_292] == 0) {
                Gvar.var_347 = Gvar.var_289;
                Gvar.var_348 = Gvar.var_292;
                await Func.func622();
                Gvar.var_345 = 1;
                Gvar.var_346[7][1] = Gvar.var_347;
                Gvar.var_346[7][2] = Gvar.var_348;
            }
            if (Gvar.var_71[Gvar.var_290][Gvar.var_292] == 0) {
                Gvar.var_347 = Gvar.var_290;
                Gvar.var_348 = Gvar.var_292;
                await Func.func622();
                Gvar.var_345 = 1;
                Gvar.var_346[9][1] = Gvar.var_347;
                Gvar.var_346[9][2] = Gvar.var_348;
            }
            if (Gvar.var_345 == 1) {
                Adap.DSPLAY(123);
                for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                    Gvar.var_349++;
                    await Func.func337(); // メッセージ表示処理(自動)
                    await Func.func337(); // メッセージ表示処理(自動)
                }
                Gvar.var_349 = 0;

                Gvar.var_346 = Adap.dim(10, 10, Gvar.length3 = null, null);
            }
        }
        if (Gvar.time_paused_count == 0) {
            if (Gvar.var_350 > 0 && Gvar.var_211 >= 1 && Gvar.var_134 == 0 && Gvar.var_218 < 30) {
                Gvar.var_351 = Math.floor(Gvar.var_352 * 10 / 150); // Math.floor は対象の値の小数点以下を切り捨て
                Gvar.var_353 = Gvar.var_351 + Gvar.var_354;
                if (Gvar.var_130 == 1 || Gvar.var_182 == 1) {
                    Gvar.var_353 = Gvar.var_353 * 2;
                }
                if (Gvar.var_353 >= 50) {
                    Gvar.var_353 = 50;
                }
                if (Gvar.var_353 < 10) {
                    Gvar.var_354 = Gvar.var_353;
                    Gvar.var_355 = 0;
                }
                if (Gvar.var_353 >= 10 && Gvar.var_353 < 20) {
                    Gvar.var_354 = Gvar.var_353 - 10;
                    Gvar.var_355 = 1;
                }
                if (Gvar.var_353 >= 20 && Gvar.var_353 < 30) {
                    Gvar.var_354 = Gvar.var_353 - 20;
                    Gvar.var_355 = 2;
                }
                if (Gvar.var_353 >= 30 && Gvar.var_353 < 40) {
                    Gvar.var_354 = Gvar.var_353 - 30;
                    Gvar.var_355 = 3;
                }
                if (Gvar.var_353 >= 40 && Gvar.var_353 < 50) {
                    Gvar.var_354 = Gvar.var_353 - 40;
                    Gvar.var_355 = 4;
                }
                if (Gvar.var_353 >= 50) {
                    Gvar.var_354 = Gvar.var_353 - 50;
                    Gvar.var_355 = 5;
                }
                if (Gvar.var_354 < 0) {
                    Gvar.var_354 = 0;
                }
                Gvar.var_211 = Gvar.var_211 + Gvar.var_355;
                if (Gvar.var_130 == 1 || Gvar.var_182 == 1) {
                    Gvar.var_211 = Gvar.var_211 + Gvar.var_355;
                }
                if (Gvar.var_211 > Gvar.var_352) {
                    Gvar.var_211 = Gvar.var_352;
                }
            }
            if (Gvar.time_paused == 0) { // 時止め(時消し飛ばし)状態でない場合
                if (Gvar.var_135 >= 1) {
                    Gvar.var_211 = Gvar.var_211 - 5;
                    Gvar.var_135 = Gvar.var_135 + 1;
                    if (Gvar.var_211 <= 0) {
                        Gvar.var_211 = 0;
                        Gvar.var_356 = 203;
                        Gvar.var_212 = 1;
                        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                        return;
                    }
                    if (Gvar.var_135 == 11) {
                        Gvar.var_135 = 0;
                    }
                }
                if (Gvar.var_136 >= 1) {
                    Gvar.var_211 = Gvar.var_211 - 1;
                    Gvar.var_136 = Gvar.var_136 + 1;
                    if (Gvar.var_211 <= 0) {
                        Gvar.var_211 = 0;
                        Gvar.var_356 = 204;
                        Gvar.var_212 = 1;
                        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                        return;
                    }
                    if (Gvar.var_136 == 11) {
                        Gvar.var_136 = 0;
                    }
                }
                if (Gvar.var_137 >= 1) {
                    Gvar.var_211 = Gvar.var_211 - 10;
                    Gvar.var_137 = Gvar.var_137 + 1;
                    if (Gvar.var_211 <= 0) {
                        Gvar.var_211 = 0;
                        Gvar.var_356 = 256;
                        Gvar.var_212 = 1;
                        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                        return;
                    }
                    if (Gvar.var_137 == 11) {
                        Gvar.var_137 = 0;
                    }
                }
                if (Gvar.var_134 >= 1) {
                    Gvar.var_134 = Gvar.var_134 + 1;
                    if (Gvar.var_134 == 30) {
                        Gvar.var_134 = 0;
                    }
                }
                if (Gvar.var_177 >= 1) {
                    Gvar.var_177 = Gvar.var_177 + 1;
                    if (Gvar.var_177 == 11) {
                        await Func.func701();
                        Gvar.var_177 = 0;
                        if (Gvar.var_211 <= 0) {
                            Gvar.var_211 = 0;
                            Gvar.var_212 = 1;
                            await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                            return;
                        }
                    }
                }
                if (Gvar.var_71[Gvar.var_66][Gvar.var_67] == 13) {
                    if (Gvar.kougeki_disc_id  == 105 || Gvar.bougyo_disc_id == 105 || Gvar.nouryoku_disc_id == 105) {
                        await Func.func501();
                        if (Gvar.var_211 <= 0) {
                            Gvar.var_211 = 0;
                            Gvar.var_212 = 1;
                            await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                            return;
                        }
                    }
                }
                if (Gvar.equip_disc[311] == 1 && Gvar.var_144 == 0 && Gvar.var_218 == 0) {
                    await Func.func500();
                    if (Gvar.var_211 <= 0) {
                        Gvar.var_211 = 0;
                        Gvar.var_212 = 1;
                        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                        return;
                    }
                }
                if (Gvar.var_140 >= 1 && Gvar.var_144 == 0 && Gvar.var_218 == 0) {
                    await Func.func542(); // バステト女神の罠を蹈んで磁力化した際の処理
                    if (Gvar.var_211 <= 0) {
                        Gvar.var_211 = 0;
                        Gvar.var_212 = 1;
                        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                        return;
                    }
                }
                if (Gvar.var_193 == 0) {
                    if (Gvar.var_350 < 1) {
                        Gvar.var_211 = Gvar.var_211 - 1;
                        await Func.AutoDraw(3);
                        if (Gvar.var_211 <= 0) {
                            Gvar.var_211 = 0;
                            Gvar.var_356 = 201;
                            Gvar.var_212 = 1;
                            await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                            return;
                        }
                    }
                    Gvar.var_359 = 0;
                    if (Gvar.var_129 != 0 || Gvar.var_130 != 0) {
                        Gvar.var_359 = 1;
                    }
                    if (Gvar.equip_disc[300] != 1 && Gvar.var_359 == 0) {
                        Gvar.var_360 = Gvar.var_360 + 2;
                    }
                    if (Gvar.equip_disc[300] == 1 && Gvar.var_359 == 0) {
                        Gvar.var_360 = Gvar.var_360 + 1;
                    }
                    if (Gvar.equip_disc[300] != 1 && Gvar.var_359 == 1) {
                        Gvar.var_360 = Gvar.var_360 + 4;
                    }
                    if (Gvar.equip_disc[300] == 1 && Gvar.var_359 == 1) {
                        Gvar.var_360 = Gvar.var_360 + 2;
                    }
                    // No = 0 なので、拠点(ホテル、亀、)
                    if (Gvar.dungeon_number == 0) {
                        Gvar.var_360 = 0;
                    }
                    if (Gvar.var_360 >= 20) {
                        Gvar.var_360 = 0;
                        Gvar.var_350 = Gvar.var_350 - 1;
                        if (Gvar.var_350 < 1) {
                            Gvar.var_350 = 0;
                        }
                    }
                    if (Gvar.var_350 == 20 && Gvar.var_360 == 0) {
                        Gvar.var_361 = 1;
                        Gvar.var_362 = 1;
                        await Func.func071(); // 満腹度減少時のメッセージ処理
                    }
                    if (Gvar.var_350 == 10 && Gvar.var_360 == 0) {
                        Gvar.var_361 = 2;
                        Gvar.var_362 = 1;
                        await Func.func071(); // 満腹度減少時のメッセージ処理
                    }
                    if (Gvar.var_350 > 1) {
                        Gvar.var_363 = 0;
                    }
                    // 満腹度の減少調整処理
                    if (Gvar.var_350 == 1 && Gvar.var_363 == 0) {
                        if (Gvar.equip_disc[300] != 1 && Gvar.var_359 == 0) {
                            if (Gvar.var_360 > 12) {
                                Gvar.var_363 = 1;
                            }
                        }
                        if (Gvar.equip_disc[300] == 1 && Gvar.var_359 == 0) {
                            if (Gvar.var_360 > 16) {
                                Gvar.var_363 = 1;
                            }
                        }
                        if (Gvar.equip_disc[300] != 1 && Gvar.var_359 == 1) {
                            if (Gvar.var_360 > 4) {
                                Gvar.var_363 = 1;
                            }
                        }
                        if (Gvar.equip_disc[300] == 1 && Gvar.var_359 == 1) {
                            if (Gvar.var_360 > 12) {
                                Gvar.var_363 = 1;
                            }
                        }
                    }
                    if (Gvar.var_350 == 1 && Gvar.var_363 == 3) {
                        Gvar.var_363 = 4;
                        Gvar.var_361 = 5;
                        Gvar.var_362 = 1;
                        await Func.func071(); // 満腹度減少時のメッセージ処理
                    }
                    if (Gvar.var_350 == 1 && Gvar.var_363 == 2) {
                        Gvar.var_363 = 3;
                        Gvar.var_361 = 4;
                        Gvar.var_362 = 1;
                        await Func.func071(); // 満腹度減少時のメッセージ処理
                    }
                    if (Gvar.var_350 == 1 && Gvar.var_363 == 1) {
                        Gvar.var_363 = 2;
                        Gvar.var_361 = 3;
                        Gvar.var_362 = 1;
                        await Func.func071(); // 満腹度減少時のメッセージ処理
                    }
                }
            }
             // Gvar.var_262 == 0 なので、Gvar.dungeon_number = 0 でなければ
            if (Gvar.equip_disc[315] == 1 && Gvar.var_144 == 0 && Gvar.var_262 == 0 && Gvar.var_218 == 0) {
                if (Gvar.var_66 != Gvar.var_236 || Gvar.var_67 != Gvar.var_237) {
                    Gvar.var_364 = 0;
                    if (Gvar.var_80[Gvar.var_290][Gvar.var_67] != 0) {
                        Gvar.var_364 = 1;
                        Gvar.var_365 = Gvar.var_80[Gvar.var_290][Gvar.var_67];
                    }
                    if (Gvar.var_80[Gvar.var_289][Gvar.var_67] != 0) {
                        Gvar.var_364 = 1;
                        Gvar.var_365 = Gvar.var_80[Gvar.var_289][Gvar.var_67];
                    }
                    if (Gvar.var_80[Gvar.var_66][Gvar.var_291] != 0) {
                        Gvar.var_364 = 1;
                        Gvar.var_365 = Gvar.var_80[Gvar.var_66][Gvar.var_291];
                    }
                    if (Gvar.var_80[Gvar.var_66][Gvar.var_292] != 0) {
                        Gvar.var_364 = 1;
                        Gvar.var_365 = Gvar.var_80[Gvar.var_66][Gvar.var_292];
                    }
                    if (Gvar.var_80[Gvar.var_290][Gvar.var_291] != 0) {
                        Gvar.var_364 = 1;
                        Gvar.var_365 = Gvar.var_80[Gvar.var_290][Gvar.var_291];
                    }
                    if (Gvar.var_80[Gvar.var_289][Gvar.var_291] != 0) {
                        Gvar.var_364 = 1;
                        Gvar.var_365 = Gvar.var_80[Gvar.var_289][Gvar.var_291];
                    }
                    if (Gvar.var_80[Gvar.var_290][Gvar.var_292] != 0) {
                        Gvar.var_364 = 1;
                        Gvar.var_365 = Gvar.var_80[Gvar.var_290][Gvar.var_292];
                    }
                    if (Gvar.var_80[Gvar.var_289][Gvar.var_292] != 0) {
                        Gvar.var_364 = 1;
                        Gvar.var_365 = Gvar.var_80[Gvar.var_289][Gvar.var_292];
                    }
                    if (Gvar.var_364 == 1) {
                        Gvar.var_366 = 0;
                        if (Gvar.var_81[Gvar.var_365][4] == 1) {
                            Gvar.var_366 = 1;
                        }
                        if (Gvar.var_121 == 1) { // Gvar.var_121 罠が見えるようになるフラグがONであれば
                            Gvar.var_366 = 1;
                        }
                        if (Gvar.var_81[Gvar.var_365][0] >= 70) {
                            Gvar.var_366 = 1;
                        }
                        if (Gvar.var_366 == 1) {
                            Gvar.var_364 = 0;
                        }
                    }
                    if (Gvar.var_364 == 1) {
                        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
                        await Func.AutoDraw(10);
                        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
                        Gvar.var_364 = 0;
                    }
                }
            }
            if (Gvar.var_126 == 1) {
                Gvar.var_166 = Gvar.var_166 + 1;
                if (Gvar.var_166 == 10) {
                    Gvar.var_166 = 0;
                    Gvar.var_126 = 0;
                    Gvar.var_240 = 0;
                    await Func.func036(); // 混乱状態が治った時の処理
                }
            }
            if (Gvar.var_127 == 1) {  // 瞼が落ちるや目を切り裂かれるなどで視界が見えななくなった時のフラグがONの場合
                Gvar.var_167 = Gvar.var_167 + 1;
                if (Gvar.var_167 == 20) {
                    Gvar.var_167 = 0;
                    Gvar.var_127 = 0; // 瞼が落ちるや目を切り裂かれるなどで視界が見えななくなった時のフラグOFF
                    Gvar.var_240 = 0;
                    await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
                    await Func.func034(); // 盲目状態から復帰した時の表示
                }
            }
            if (Gvar.var_132 >= 1) {  // 記憶DISC「ンドゥール」の効果発動フラグがONの場合
                Gvar.var_132 = Gvar.var_132 + 1;
                if (Gvar.var_132 >= 20) {
                    Gvar.var_132 = 0; // 記憶DISC「ンドゥール」の効果発動フラグOFF
                    Gvar.var_240 = 0;
                    await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
                    await Func.func035(); // 記憶DISC「ンドゥール」の効果が切れた時の処理
                }
            }
            if (Gvar.var_159 >= 1) {
                Gvar.var_159 = Gvar.var_159 + 1;
                if (Gvar.var_159 >= 22) {
                    Gvar.var_159 = 0;
                    Gvar.var_240 = 0;
                    await Func.func029(); // オアシスの壁を溶かす効果が切れた時の表示
                }
            }
            if (Gvar.var_140 >= 1) {
                Gvar.var_141 = Gvar.var_141 + 1;
                if (Gvar.equip_disc[363] == 1) {
                    Gvar.var_141 = Gvar.var_141 + 1;
                }
                if (Gvar.var_141 >= 30) {
                    Gvar.var_141 = 1;
                    await Func.func543();
                }
            }
            if (Gvar.var_131 >= 1) {
                Gvar.var_131 = Gvar.var_131 + 1;
                if (Gvar.var_131 == 12) {
                    Gvar.var_131 = 0;
                    Gvar.var_240 = 0;
                    await Func.func028(); // メタリカの透明化が切れた時の表示
                }
            }
            if (Gvar.var_218 >= 1 && Gvar.var_218 < 30) {
                Gvar.var_218 = Gvar.var_218 + 1;
                if (Gvar.var_218 == 21) {
                    Gvar.var_218 = 0;
                    Gvar.var_240 = 0;
                    await Func.func031();
                }
            }
            if (Gvar.var_218 >= 30) {
                Gvar.var_218 = Gvar.var_218 + 1;
                if (Gvar.var_218 == 2000) {
                    Gvar.var_218 = 0;
                    Gvar.var_240 = 0;
                    await Func.func033(); // スティッキーフィンガーズの発動効果が切れた時の表示
                }
            }
            if (Gvar.var_139 >= 1) {
                Gvar.var_139 = Gvar.var_139 + 1;
                if (Gvar.var_139 >= 50) {
                    Gvar.var_139 = 0;
                    Gvar.var_240 = 0;
                    await Func.func037(); // 記憶DISC「仗助」の効果が切れた時の処理(冷静になった)
                }
            }
            if (Gvar.var_146 >= 1) {
                Gvar.var_146++;
                if (Gvar.var_146 >= 22) {
                    Gvar.var_146 = 0;
                    Gvar.var_147 = 0;
                    Gvar.var_148 = 0;
                    Gvar.var_240 = 0;
                    await Func.func040(); // スーパーフライの鉄塔が消滅した時の処理
                }
            }
            if (Gvar.var_144 >= 1) {
                Gvar.var_144 = Gvar.var_144 + 1;
                if (Gvar.var_144 == 45) {
                    await Func.func041(); // 記憶DISC「ドッピオ」を使用して一定のターンが経過した時のボスからの電話の処理
                }
                if (Gvar.var_192 == 0 && Gvar.var_144 >= 104) {
                    await Func.func042(); // 記憶DISC「ドッピオ」を使用してドッピオに変身した時の処理
                }
                if (Gvar.var_192 == 1 && Gvar.var_144 >= 114) {
                    await Func.func042(); // 記憶DISC「ドッピオ」を使用してドッピオに変身した時の処理
                }
                if (Gvar.var_192 == 2 && Gvar.var_144 >= 124) {
                    await Func.func042(); // 記憶DISC「ドッピオ」を使用してドッピオに変身した時の処理
                }
                if (Gvar.var_192 == 3 && Gvar.var_144 >= 93) {
                    await Func.func042(); // 記憶DISC「ドッピオ」を使用してドッピオに変身した時の処理
                }
                if (Gvar.var_144 >= 200) {
                    await Func.func042(); // 記憶DISC「ドッピオ」を使用してドッピオに変身した時の処理
                }
            }
            if (Gvar.var_191 >= 1) {
                Gvar.var_191++;
                if (Gvar.var_191 == 50) {
                    Gvar.var_191 = 0;
                }
            }
            if (Gvar.var_116 == 1 && Gvar.var_114 == 0) {
                Gvar.var_115 = Gvar.var_115 + 1;
                if (Gvar.var_115 == 6) {
                    Gvar.var_115 = 0;
                    Gvar.var_116 = 2;
                }
            }
            Gvar.var_367 = Gvar.var_367 + 1;
            if (Gvar.var_367 >= 20) {
                Gvar.var_367 = 0;
            }
            if (Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0 && Gvar.var_139 == 0 && Gvar.var_144 == 0 && Gvar.var_218 == 0 && Gvar.var_128 == 0 && Gvar.var_219 == 0 && Gvar.var_178 == 0) {
                if (Gvar.var_342 == 0 && Gvar.key_X_on == 0) {
                    Gvar.var_368 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
                    if (Gvar.var_78[Gvar.var_368].Var11 == 1) {
                        await Func.func419(); // アイテムに乗った時の動作処理
                    }
                    if (Gvar.var_78[Gvar.var_368].Var11 == 0) {
                        await Func.func400(); // アイテムを拾う際の動作処理
                    }
                }
                if (Gvar.key_X_on == 1) { // キーXを押しながらだとアイテムに乗れる
                    await Func.func419(); // アイテムに乗った時の動作処理
                }
            }
            if (Gvar.var_80[Gvar.var_66][Gvar.var_67] > 0 && Gvar.var_343 == 0 && Gvar.var_128 == 0 && Gvar.var_369 == 0 && Gvar.var_139 == 0 && Gvar.var_144 == 0 && Gvar.var_218 == 0 && Gvar.var_219 == 0 && Gvar.var_178 == 0) {
                Gvar.var_343 = 0;
                Gvar.var_240 = 0;
                await Func.func541(); // 罠を踏んだ時の処理
                if (Gvar.var_211 <= 0) {
                    Gvar.var_211 = 0;
                    Gvar.var_212 = 1;
                    await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                    return;
                }
            }
            if (Gvar.var_369 == 1) {
                Gvar.var_369 = 0;
            }
            if (Gvar.var_370 == 1) {
                Gvar.var_217 = 0;
                await Func.func548();
                return;
            }
            if (Gvar.var_371 == 1) {
                Gvar.var_217 = 0;
                await Func.func551();
                return;
            }
            if (Gvar.var_372 == 1) {
                Gvar.var_373 = 5;
                await Func.AutoDraw(2);
                Gvar.var_373 = 4;
                await Func.AutoDraw(2);
                Gvar.var_373 = 3;
                await Func.AutoDraw(2);
                Gvar.var_373 = 2;
                await Func.AutoDraw(2);
                Gvar.var_373 = 1;
                await Func.AutoDraw(10);
                Gvar.var_373 = 0;
                Gvar.var_374 = 0;
                if (Gvar.var_375 == 1) {
                    Gvar.var_372 = 0;
                    await Func.func233(); // ダンジョンへ入った際の全ステータス初期化処理
                    await Func.func880();
                    return;
                }
                Gvar.current_floor = Gvar.current_floor + 1;
                if (Gvar.current_floor > Gvar.var_376) {
                    Gvar.var_376 = Gvar.current_floor;
                }
                // No = 1 なので、ホテルの外
                if (Gvar.dungeon_number == 1 && Gvar.current_floor > Gvar.dungeon1_floor) {
                    Gvar.dungeon1_floor = Gvar.current_floor;
                }
                // No = 2 なので、レクイエムの大迷宮
                if (Gvar.dungeon_number == 2 && Gvar.current_floor > Gvar.dungeon2_floor) {
                    Gvar.dungeon2_floor = Gvar.current_floor;
                }
                // No = 3 なので、ディアボロの試練
                if (Gvar.dungeon_number == 3 && Gvar.current_floor > Gvar.dungeon3_floor) {
                    Gvar.dungeon3_floor = Gvar.current_floor;
                }
                // No = 4 なので、一巡後の世界
                if (Gvar.dungeon_number == 4 && Gvar.current_floor > Gvar.dungeon4_floor) {
                    Gvar.dungeon4_floor = Gvar.current_floor;
                }
                // No = 5 なので、鉄獄(鉄の牢獄)
                if (Gvar.dungeon_number == 5 && Gvar.current_floor > Gvar.dungeon5_floor) {
                    Gvar.dungeon5_floor = Gvar.current_floor;
                }
                Gvar.special_floor = 0;
                await Func.func059(); // ホテルの外の最終フロア、エンヤホテル以外確定処理
                Gvar.var_372 = 0;
                Gvar.var_217 = 0;
                Gvar.var_205 = 1;
                await Func.func231(); // プレイデータを保存するセーブ機能
                await Func.func076(); // 各ダンジョンの絵文字読込処理
                for (let cnt3 = 0; cnt3 < 80; ++cnt3) {
                    await Func.func339();
                }
                await Func.func006(); // 一巡後の世界のみのフラグ処理
                return;
            }
            if (Gvar.var_382 == 1) {
                Gvar.var_382 = 0;
                // 時止め(時消し飛ばし)状態でない場合
                if (Gvar.var_85 == 0 && Gvar.time_paused == 0 && Gvar.var_383 == 0) {
                    await Func.func722(); // アイテムを所持した状態で店から出た際の動作処理(泥棒状態認定)
                }
                Gvar.var_383 = 0;
                await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                return;
            }
            if (Gvar.var_157 != 0) { // Gvar.var_157 倍速移動フラグOFFでなければ
                if (Gvar.var_157 == 2) {
                    Gvar.var_384 = 1;
                }
                if (Gvar.var_157 == 1) { // Gvar.var_157 倍速移動フラグON
                    Gvar.var_384 = 2;
                }
                if (Gvar.var_384 == 1) {
                    Gvar.var_157 = 1; // Gvar.var_157 倍速移動フラグON
                }
                if (Gvar.var_384 == 2) {
                    Gvar.var_157 = 2;
                }
            }
            if (Gvar.var_157 == 1) { // Gvar.var_157 倍速移動フラグONであれば
                Gvar.var_158 = Gvar.var_158 + 1;
                if (Gvar.equip_disc[396] == 1) { // No = 396 メイドインヘブンのdisc を装備していたら
                    Gvar.var_158 = 0;
                    await Func.func043(); // おそらくメイド・イン・ヘブンを装備している際の「アイテムが朽ちていく効果」
                }
                if (Gvar.var_158 == 20) {
                    Gvar.var_240 = 0;
                    Gvar.var_157 = 0; // Gvar.var_157 倍速移動フラグOFF
                    await Func.setMessage1("普通の速さに戻った",
                                            "", 7, false, false, false);
                    await Func.AutoDraw(9);
                }
            }
        }
        if (Gvar.time_paused == 0) { // 時止め(時消し飛ばし)状態でない場合
            Gvar.var_385 = 1;
            await Func.func579();
            if (Gvar.var_212 == 1) {
                await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                return;
            }
            if (Gvar.var_211 <= 0) {
                Gvar.var_211 = 0;
                Gvar.var_212 = 1;
                await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                return;
            }
            Gvar.var_385 = 0;
            Gvar.var_217 = 0;
            if (Gvar.time_paused_count == 0) {
                if (Gvar.var_72[Gvar.var_66][Gvar.var_67] >= 1 && Gvar.var_72[Gvar.var_236][Gvar.var_237] == 0 && Gvar.var_85 == 0 && Gvar.var_210 == 0) {
                    if (Gvar.var_66 != Gvar.var_236 || Gvar.var_67 != Gvar.var_237) {
                        Gvar.var_240 = 0;
                        await Func.func706(); // トニオさんの店 レストラン・トラサルディーへ入店した時のメッセージ表示
                    }
                }
                if (Gvar.var_262 == 0) { // Gvar.var_262 == 0 なので、Gvar.dungeon_number = 0 でなければ
                    Gvar.var_112 = Gvar.var_112 + 1;
                }
                // No = 396なのでメイドインヘヴンのDISCを装備している場合
                if (Gvar.equip_disc[396] == 1 && Gvar.var_112 < 680) {
                    Gvar.var_112 = Gvar.var_112 + 2;
                }
                if (Gvar.var_112 == 700 || Gvar.var_112 == 850 || Gvar.var_112 == 1000) {
                    Gvar.var_240 = 0;
                    await Func.func072(); // ダンジョンに長居し過ぎた際の神砂嵐
                    if (Gvar.var_211 <= 0) {
                        Gvar.var_211 = 0;
                        Gvar.var_212 = 1;
                        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                        return;
                    }
                }
                if (Gvar.var_72[Gvar.var_236][Gvar.var_237] >= 1 && Gvar.var_72[Gvar.var_66][Gvar.var_67] == 0 && Gvar.var_85 == 0) {
                    await Func.func722(); // アイテムを所持した状態で店から出た際の動作処理(泥棒状態認定)
                }
                Gvar.var_165 = Gvar.var_165 + 1; // 現在のフロアの敵の数にプラス1する
                if (Gvar.equip_disc[358] == 1) { // No = 358 敵増え早いの装備disc効果
                    Gvar.var_165 = Gvar.var_165 + 1;// 現在のフロアの敵の数にさらにプラス1する
                }
                // No = 1 なので、ホテルの外
                if (Gvar.dungeon_number == 1 && Gvar.current_floor == 12 && Gvar.special_floor == 0 && Gvar.var_386 == 0) {
                    Gvar.var_165 = 0; // 敵増えるフラグOFF
                }
                if (Gvar.var_190 == 1) {
                    Gvar.var_165 = 0; // 敵増えるフラグOFF
                }
                // No = 3 なので、ディアボロの試練
                if (Gvar.dungeon_number == 3 && Gvar.current_floor == 99) {
                    Gvar.var_165 = 0; // 敵増えるフラグOFF
                }
                // Ver0.1403にて追加。No = 5 なので、鉄獄(鉄の牢獄)
                if (Gvar.dungeon_number == 5 && Gvar.current_floor == Gvar.var_20) {
                    Gvar.var_165 = 0; // 敵増えるフラグOFF
                }
                if (Gvar.special_floor == 1 && Gvar.var_387 == 0) { // 虹村屋敷
                    Gvar.var_165 = 0; // 敵増えるフラグOFF
                }
                if (Gvar.var_375 == 1) {
                    Gvar.var_165 = 0; // 敵増えるフラグOFF
                }
                if (Gvar.special_floor == 3) { // 吉良屋敷
                    Gvar.var_165 = 0; // 敵増えるフラグOFF
                }
                if (Gvar.special_floor == 5) { // 没特殊階層「ビンの中」ボスは毒グモ
                    Gvar.var_165 = 0; // 敵増えるフラグOFF
                }
                if (Gvar.special_floor == 9) { // 幽霊部屋
                    Gvar.var_165 = 0; // 敵増えるフラグOFF
                }
                if (Gvar.var_262 == 1) { // Gvar.var_262 == 1 なので、Gvar.dungeon_number = 0 であれば
                    Gvar.var_165 = 0; // 敵増えるフラグOFF
                }
                if (Gvar.var_165 >= 64 && Gvar.var_97 < 50) {
                    Gvar.var_165 = 0; // 敵増えるフラグOFF
                    await Func.func556();
                }
                if (Gvar.var_186 != 0) {
                    Gvar.var_183++;
                    if (Gvar.var_183 == 5) {
                        await Func.func693();
                    }
                }
                // No = 302 ハイウェイ・トゥ・ヘルを装備している時 && Gvar.var_262 == 0 なので、Gvar.dungeon_number = 0 でなければ
                if (Gvar.equip_disc[302] == 1 && Gvar.var_262 == 0 && Gvar.var_144 == 0 && Gvar.var_218 == 0 && Gvar.var_128 == 0 && Gvar.var_219 == 0 && Gvar.var_178 == 0 && Gvar.var_139 == 0) {
                    Gvar.var_388 = Adap.rnd(200);
                    if (Gvar.var_388 == 0) {
                        Gvar.var_240 = 0;
                        await Stand.func534();
                    }
                    if (Gvar.var_212 == 1) {
                        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                        return;
                    }
                    if (Gvar.var_211 <= 0) {
                        Gvar.var_211 = 0;
                        Gvar.var_212 = 1;
                        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                        return;
                    }
                }
                // エンプレスのDISCの効果 && Gvar.var_262 == 0 なので、Gvar.dungeon_number = 0 でなければ
                if (Gvar.equip_disc[310] == 1 && Gvar.var_262 == 0 && Gvar.var_144 == 0 && Gvar.var_218 == 0 && Gvar.var_128 == 0 && Gvar.var_219 == 0 && Gvar.var_178 == 0 && Gvar.var_139 == 0) {
                    Gvar.var_388 = Adap.rnd(200);
                    if (Gvar.var_388 == 0) {
                        Gvar.var_240 = 0;
                        await Func.setMessage1("ｴﾝﾌﾟﾚｽ「ﾃﾞｨｱﾎﾞﾛはここよッ！",
                                                "      ここにいるわよォ―――ッ」", 11, true, false, true);

                        Gvar.var_390 = 1;
                        for (let cnt5 = 0; cnt5 < Gvar.var_97; ++cnt5) {
                            Gvar.var_83[Gvar.var_390].Var12 = 0;
                            Gvar.var_390 = Gvar.var_390 + 1;
                        }
                        Gvar.var_389 = 0;
                        await Func.setMessage1("フロアの敵が全員 目を覚ました！",
                                                "", 7, false, false, false);
                        await Func.AutoDraw(10);
                    }
                }
                // 記憶DISC 噴上裕也 を使用した時のメッセージ処理
                if (Gvar.sympathy_id == 106 || Gvar.sympathy_id == 114 || Gvar.sympathy_id == 121) {
                    Gvar.var_388 = Adap.rnd(300);
                    if (Gvar.var_388 == 0 && Gvar.var_144 == 0 && Gvar.var_218 == 0 && Gvar.var_128 == 0 && Gvar.var_219 == 0 && Gvar.var_178 == 0 && Gvar.var_139 == 0) {
                        Gvar.var_240 = 0;
                        await Func.setMessage1("「クンクンクン・・・」", "", 7, false, false, false);
                        Gvar.var_391 = 1;
                        Adap.DSPLAY(184);
                        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
                        await Func.func047(); // メッセージ履歴追加処理
                        await Func.func340(); // キー入力による選択処理
                        await Func.func051(); // キー入力待ち処理
                        Gvar.var_391 = 0;
                        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
                    }
                }
            }
        }
        // 必要ない？？
        // if (Gvar.var_198 == 0) {
        //     await Func.setMessage1("", "", 7, false, false, false);
        // }
        if (Gvar.var_123 == 0) {
            if (Gvar.time_paused == 1) { // 時止め(時消し飛ばし)状態の場合
                Adap.DSPLAY(181);
                await Func.setMessage1("「" + Gvar.var_164 + "秒経過！」", "", 7, false, false, false);
                await Func.AutoDraw(10);
                Gvar.var_164++;
                Gvar.var_392 = 0;
                if (Gvar.var_164 == 6 && Gvar.var_130 == 0) {
                    Gvar.var_392 = 1;
                }
                if (Gvar.var_164 == 6 && Gvar.var_130 == 1) {
                    Gvar.var_392 = 2;
                }
                if (Gvar.var_164 == 11 && Gvar.var_130 == 1) {
                    Gvar.var_392 = 1;
                }
                if (Gvar.var_164 == 3 && Gvar.var_153 >= 1) {
                    Gvar.var_392 = 1;
                }
                if (Gvar.var_392 == 2) {
                    await Func.setMessage1("まだまだ止めていられるぞ…", "", 7, false, false, false);
                    await Func.AutoDraw(10);
                }
                if (Gvar.var_392 == 1) {
                    await Func.setMessage1("そして時は動き出す…", "", 7, false, false, false);
                    if (Gvar.var_153 == 1) {
                        await Func.setMessage1("パンチ一発分が限界か…", "", 7, false, false, false);
                    }
                    if (Gvar.var_153 == 2) {
                        await Func.setMessage1("「時」は動き出す", "", 7, false, false, false);
                    }
                    await Func.AutoDraw(10);
                    Gvar.var_153 = 0;
                    Gvar.var_164 = 0;
                    Gvar.time_paused = 0; // 時止め(時消し飛ばし)状態フラグOFF
                    if (Gvar.var_72[Gvar.var_66][Gvar.var_67] == 0 && Gvar.var_85 == 0) {
                        await Func.func722(); // アイテムを所持した状態で店から出た際の動作処理(泥棒状態認定)
                    }
                }
            }
        }
        if (Gvar.var_123 >= 1) {
            Gvar.var_393[Gvar.var_123][0] = Gvar.var_199;
            if (Gvar.var_66 == Gvar.var_393[Gvar.var_123][1] && Gvar.var_67 == Gvar.var_393[Gvar.var_123][2]) {
                Gvar.var_393[Gvar.var_123][0] = 0;
            }
            Gvar.var_393[Gvar.var_123][1] = Gvar.var_66;
            Gvar.var_393[Gvar.var_123][2] = Gvar.var_67;
            Gvar.var_123++;
            if (Gvar.var_123 > 6) {
                await Func.setMessage1("時は再び刻み始める…", "", 7, false, false, false);
                await Func.AutoDraw(10);
                Gvar.var_394 = Gvar.var_83[Gvar.var_124].Var1;
                Gvar.var_395 = Gvar.var_83[Gvar.var_124].Var2;
                Gvar.var_82[Gvar.var_394][Gvar.var_395] = 0;
                Gvar.var_83[Gvar.var_124].Var0 = 0;
                Gvar.var_83[Gvar.var_124].Var1 = 0;
                Gvar.var_83[Gvar.var_124].Var2 = 0;
                Gvar.var_123 = 0;
                Gvar.y_axis_map_image = Gvar.var_396;
            }
        }
        if (Gvar.time_paused_count == 0) {
            if (Gvar.var_96 >= 1 && Gvar.var_201 == Gvar.var_204) {
                Gvar.var_240 = 0;
                await Func.func074(); // モンスターハウス時のメッセージ処理
            }
            if (Gvar.var_133 == 1) {
                Gvar.var_217 = 1;
                await Func.func020(); // 敵側のターン処理
                Gvar.var_385 = 1;
                await Func.func579();
                if (Gvar.var_212 == 1) {
                    await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                    return;
                }
                if (Gvar.var_211 <= 0) {
                    Gvar.var_211 = 0;
                    Gvar.var_212 = 1;
                    await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                    return;
                }
                Gvar.var_385 = 0;
                Gvar.var_217 = 0;
                Gvar.var_397 = Gvar.var_397 + 1;
                if (Gvar.var_397 == 10) {
                    Gvar.var_397 = 0;
                    Gvar.var_133 = 0;
                    Gvar.var_240 = 0;
                    await Func.func030();// 鈍足状態から復帰した時の表示
                }
                await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
            }
            if (Gvar.var_169 == 999999) {
                Gvar.var_398 = 0;
                for (let cnt3 = 0; cnt3 < Gvar.var_97 + 1; ++cnt3) {
                    if (Gvar.var_83[cnt3][0] == 130) {
                        Gvar.var_399 = Gvar.var_83[cnt3][1]; // 0.1405 カウンターがリンクしていなかったので修正 cnt4 → cnt3へ変更
                        Gvar.var_400 = Gvar.var_83[cnt3][2]; // 0.1405 カウンターがリンクしていなかったので修正 cnt4 → cnt3へ変更
                        Gvar.var_82[Gvar.var_399][Gvar.var_400] = 0;
                        Gvar.var_83[cnt3][0] = 0; // 0.1405 カウンターがリンクしていなかったので修正 cnt4 → cnt3へ変更
                        Gvar.var_83[cnt3][1] = 0; // 0.1405 カウンターがリンクしていなかったので修正 cnt4 → cnt3へ変更
                        Gvar.var_83[cnt3][2] = 0; // 0.1405 カウンターがリンクしていなかったので修正 cnt4 → cnt3へ変更
                        Gvar.var_398 = 1;
                    }
                }
                if (Gvar.var_398 == 1) {
                    await Func.setMessage1("ﾏﾘﾘﾝﾏﾝｿﾝ「マタ会オウ！」",
                                            "", 7, false, false, true);
                    Gvar.var_240 = 0;
                    await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
                    await Func.AutoDraw(20);
                }
            }
            if (Gvar.var_208 != 0 && Gvar.var_211 != 0) {
                Gvar.var_401 = 1;
                for (let cnt3 = 0; cnt3 < Gvar.var_97; ++cnt3) {
                    if (Gvar.var_83[Gvar.var_401].Var0 != 0 && Gvar.var_83[Gvar.var_401].Var19 == 1) {
                        Gvar.var_402 = Gvar.var_401;
                        Gvar.var_209 = Gvar.var_208;
                        Gvar.var_403 = "とりついたﾗﾊﾞｰｽﾞの攻撃！";
                        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
                        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
                        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
                        Gvar.var_240 = 0;
                        await Func.AutoDraw(5);
                        await Func.func705();
                    }
                    Gvar.var_401 = Gvar.var_401 + 1;
                }
            }
            if (Gvar.var_212 == 1) {
                await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                return;
            }
            if (Gvar.var_211 <= 0) {
                Gvar.var_211 = 0;
                Gvar.var_212 = 1;
                await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                return;
            }
            // No = 0 なので、拠点(ホテル、亀、)
            if (Gvar.dungeon_number == 0 && Gvar.var_66 == 11 && Gvar.var_67 == 8) {
                if (Gvar.var_66 != Gvar.var_236 || Gvar.var_67 != Gvar.var_237) {
                    // Ver0.1403にて修正。ヴェネチアホテルのイベントフラグに応じて酒場へ行けるように。
                    if (Gvar.var_759 == 0) {
                        await Func.func824a(); // ホテルの外の入り口へ入ろうとした際のメッセージ処理
                    }
                    if (Gvar.var_759 >= 1) {
                        await Func.func824b(); // 酒場 or ホテルの外の入り口へ入ろうとした際のメッセージ処理
                    }
                    return;
                }
            }
            // Ver0.1403にて追加。酒場からホテルの部屋 or ホテルの外へ出ようとした際のフラグ
            if (Gvar.dungeon_number == 0 && Gvar.var_66 == 25 && Gvar.var_67 == 32) {
                if (Gvar.var_66 != Gvar.var_236 || Gvar.var_67 != Gvar.var_237) {
                    await Func.func824c(); // ホテルの部屋 or ホテルの外の入り口へ入ろうとした際のメッセージ処理
                    return;
                }
            }
            // No = 0 なので、拠点(ホテル、亀、)
            if (Gvar.dungeon_number == 0 && Gvar.var_404 >= 1 && Gvar.var_66 == 17 && Gvar.var_67 == 9) {
                if (Gvar.var_66 != Gvar.var_236 || Gvar.var_67 != Gvar.var_237) {
                    await Func.func826(); // レクイエムの大迷宮の入り口へ入ろうとした際のメッセージ処理
                    return;
                }
            }
            if (Gvar.var_73[Gvar.var_66][Gvar.var_67] >= 1 && Gvar.var_344 == 0 && Gvar.var_139 == 0 && Gvar.var_144 == 0 && Gvar.var_128 == 0 && Gvar.var_219 == 0 && Gvar.var_114 == 0 && Gvar.var_178 == 0) {
                Gvar.var_405 = 1;
                Gvar.var_245 = 19;
                Gvar.var_246 = 45;
                Gvar.var_406 = 1;
                Gvar.var_240 = 0;
                Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                await Func.func060(); // ダンジョンの階段を先に進んだ時の動作処理
                return;
            }
        }
        if (Gvar.time_paused_count >= 1) {
            Gvar.time_paused_count = Gvar.time_paused_count - 1;
            if (Gvar.time_paused_count == 1) {
                await Func.AutoDraw(10);
                await Func.setMessage1("そして時は動き出す…",
                                        "", 8, false, false, false);
                await Func.AutoDraw(10);
                Gvar.time_paused_count = 0;
                Gvar.var_152 = 0;
                Gvar.var_154 = 0;
                await Func.AutoDraw(5);
            }
        }
        Gvar.var_217 = 0;
        if (Gvar.var_407 >= 1) {
            if (Gvar.var_407 == 1) {
                await Func.func907();
                await Func.func906();
            }
            if (Gvar.var_407 == 2) {
                await Func.func929();
                if (Gvar.var_408 >= 1) {
                    await Func.func909();
                }
            }
        }
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
}

export {func019}
