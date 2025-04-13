import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// ダンジョンの階段を先に進んだ時の動作処理
async function func060(this: any) {
        Adap.dbgprt(60);
        await Func.func337(); // メッセージ表示処理(自動)
        await Func.func080(); // 各キー入力確認
        if (Gvar.var_259 == 1 && Gvar.var_406 == 1) { // var_259:入力判定[↓]
            Gvar.var_246 = Gvar.var_246 + 19;
            Gvar.var_406 = 0;
            Adap.DSPLAY(100); // アイテム選択時の効果音
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
        }
        if (Gvar.var_255 == 1 && Gvar.var_406 == 0) { // var_255:入力判定[↑]
            Gvar.var_246 = Gvar.var_246 - 19;
            Gvar.var_406 = 1;
            Adap.DSPLAY(100); // アイテム選択時の効果音
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
        }
        if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
            if (Gvar.var_406 == 1) {
                Gvar.var_405 = 0;
                Gvar.var_344 = 0;
                Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                Gvar.var_527 = 0; // 階段を降りれなくなるフラグOFF
                Gvar.var_528 = 1;
                for (let cnt3 = 0; cnt3 < Gvar.var_97; ++cnt3) {
                    // Gvar.enemy_list = 29 グリーン・ディが同じ部屋に居る状態
                    if (Gvar.var_83[Gvar.var_528].Var0 == 29 && Gvar.var_83[Gvar.var_528].Var10 == Gvar.var_201 && Gvar.var_201 != 14 && Gvar.var_83[Gvar.var_528].Var20 == 0 && Gvar.var_83[Gvar.var_528].Var12 == 0 && Gvar.var_83[Gvar.var_528].Var13 == 0 && Gvar.var_83[Gvar.var_528].Var17 == 0 && Gvar.var_83[Gvar.var_528].Var23 == 0) {
                        if (Gvar.nouryoku_disc_id != 206 && Gvar.nouryoku_disc_id != 108 && Gvar.var_130 != 1) {
                            Gvar.var_527 = 1; // グリーン・ディが同じ部屋に居る状態のフラグ?
                        }
                        if (Gvar.var_73[Gvar.var_66][Gvar.var_67] == 2) {
                            Gvar.var_527 = 0; // 階段を降りれなくなるフラグOFF
                        }
                    }
                    // Gvar.enemy_list = 113 DIOが同じ部屋に居る状態
                    if (Gvar.var_83[Gvar.var_528].Var0 == 113 && Gvar.var_83[Gvar.var_528].Var10 == Gvar.var_201 && Gvar.var_201 != 14 && Gvar.var_83[Gvar.var_528].Var20 == 0 && Gvar.var_83[Gvar.var_528].Var12 == 0 && Gvar.var_83[Gvar.var_528].Var13 == 0 && Gvar.var_83[Gvar.var_528].Var17 == 0 && Gvar.var_83[Gvar.var_528].Var23 == 0) {
                        if (Gvar.nouryoku_disc_id != 100 && Gvar.nouryoku_disc_id != 111 && Gvar.nouryoku_disc_id != 398) {
                            Gvar.var_527 = 2; // DIOが同じ部屋に居る状態のフラグ?
                        }
                    }
                    Gvar.var_528 = Gvar.var_528 + 1;
                }
                // No = 1 なので、ホテルの外
                if (Gvar.dungeon_number == 1 && Gvar.current_floor == 12) {
                    Gvar.var_527 = 0; // 階段を降りれなくなるフラグOFF
                }
                // No = 2 なので、レクイエムの大迷宮
                if (Gvar.dungeon_number == 2 && Gvar.current_floor == 30) {
                    Gvar.var_527 = 0; // 階段を降りれなくなるフラグOFF
                }
                // No = 3 なので、ディアボロの試練
                if (Gvar.dungeon_number == 3 && Gvar.current_floor == 99) {
                    Gvar.var_527 = 0; // 階段を降りれなくなるフラグOFF
                }
                // No = 5 なので、鉄獄(鉄の牢獄)
                if (Gvar.dungeon_number == 5 && Gvar.current_floor == Gvar.var_20) {
                    Gvar.var_527 = 0; // 階段を降りれなくなるフラグOFF
                }
                if (Gvar.var_527 == 1) { // グリーン・ディが同じ部屋に居る状態のフラグ?がONであれば
                    await Func.setMessage("ｸﾞﾘｰﾝ･ﾃﾞｨが同じ部屋にいるぞ",
                                           "このままでは降りられないぞ", 7, false, false, false)
                    Adap.gsel(19);
                    Adap.color(10, 100, 10);
                    Adap.boxf(0, 0, 340, 340);
                    Adap.gsel(0);
                    Gvar.var_529 = 1;
                    await Func.AutoDraw(20);
                    Gvar.var_529 = 0;
                    await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                    return;
                }
                if (Gvar.var_527 == 2) { // DIOが同じ部屋に居る状態のフラグ?がONの場合
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
                    Adap.DSPLAY(101); // 階段を昇るor降りる時の効果音
                    await Func.AutoDraw(10);
                    Gvar.var_373 = 0;
                    if (Gvar.var_199 == 2) {
                        Gvar.var_530 = 8;
                    }
                    if (Gvar.var_199 == 8) {
                        Gvar.var_530 = 2;
                    }
                    if (Gvar.var_199 == 4) {
                        Gvar.var_530 = 6;
                    }
                    if (Gvar.var_199 == 6) {
                        Gvar.var_530 = 4;
                    }
                    if (Gvar.var_199 == 1) {
                        Gvar.var_530 = 9;
                    }
                    if (Gvar.var_199 == 3) {
                        Gvar.var_530 = 7;
                    }
                    if (Gvar.var_199 == 7) {
                        Gvar.var_530 = 3;
                    }
                    if (Gvar.var_199 == 9) {
                        Gvar.var_530 = 1;
                    }
                    Gvar.var_199 = Gvar.var_530;
                    Adap.DSPLAY(185);
                    Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
                    Gvar.var_531 = 1;
                    for (let cnt4 = 0; cnt4 < 20; ++cnt4) {
                        await Func.func337(); // メッセージ表示処理(自動)
                        Gvar.var_531++;
                    }
                    Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
                    Gvar.var_531 = 0;
                    await Func.AutoDraw(10);
                    await Func.setMessage("「ありのまま起こったことを話すぜ！」",
                                          "", 7, true, false, true);

                    await Func.setMessage("「おれは階段を降りたと思ったら",
                                           "  いつの間にか上っていた」", 7, false, false, true);

                    if (Gvar.var_73[Gvar.var_66][Gvar.var_67] == 2) {
                        await Func.setMessage("「おれは階段を上ったと思ったら",
                                               "  いつの間にか降りていた」", 7, false, false, true);
                    }
                    await Func.AutoDraw(10);
                    await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                    return;
                }
                if (Gvar.var_114 >= 1) {
                    await Func.setMessage("掴まれていて降りられない！",
                                           "", 7, false, false, false);
                    if (Gvar.var_73[Gvar.var_66][Gvar.var_67] == 2) {
                        await Func.setMessage("掴まれていて上れない！",
                                               "", 7, false, false, false);
                    }
                    await Func.AutoDraw(9);
                    await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                    return;
                }
                // No = 1 なので、ホテルの外
                if (Gvar.dungeon_number == 1 && Gvar.current_floor == 12) {
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
                    Gvar.special_floor = 0;
                    if (Gvar.var_404 == 0) {
                        Gvar.ivents_flag = 3; // ホテルの外初クリア後(エンヤホテル)、ヴェネチアホテルに戻った際のイベントフラグ
                    }
                    Gvar.var_532 = 1;
                    Gvar.var_356 = 301;
                    if (Gvar.var_203 == 1) { // No = 1:虹村屋敷
                        Gvar.var_356 = 321;
                    }
                    if (Gvar.var_203 == 2) { // No = 2:吉良屋敷
                        Gvar.var_356 = 322;
                    }
                    if (Gvar.var_203 == 3) { // No = 3:杜王町埠頭
                        Gvar.var_356 = 325;
                    }
                    Gvar.var_533 = 50000;
                    if (Gvar.var_404 == 0) {
                        Gvar.var_404 = 1;
                    }
                    if (Gvar.var_407 == 2) {
                        Gvar.var_534++;
                        await Func.func929();
                    }
                    await Func.func173();
                    return;
                }
                // No = 2 なので、レクイエムの大迷宮
                if (Gvar.dungeon_number == 2 && Gvar.current_floor == 30) {
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
                    Gvar.special_floor = 0;
                    Gvar.var_532 = 1;
                    Gvar.var_356 = 302; // クリアした時の死因指定
                    Gvar.var_533 = 100000;
                    if (Gvar.var_526 == 0) {
                        Gvar.var_526 = 1; // DIO&プッチ神父出現フラグ(Gvar.var_526 >= 1)
                        Gvar.ivents_flag = 6; // ディアボロの試練開放イベント(岸辺露伴がヤギを追いかけるイベント)フラグ
                    }
                    if (Gvar.var_535 == 1 && Gvar.var_536 == 0) {
                        Gvar.var_356 = 312; // アイテムを持ち込まずレクイエムの大迷宮をクリアした時のフラグ?
                        Gvar.var_533 = 200000;
                        if (Gvar.var_526 < 2) {
                            Gvar.var_526 = 2;
                        }
                        Gvar.var_11 = 1;
        
                        await Adap.bsave("00.dat", Gvar.data = Gvar.var_11, null, 80)
                    }
                    if (Gvar.var_407 == 2) {
                        Gvar.var_534++;
                        await Func.func929();
                    }
                    await Func.func173();
                    return;
                }
                // No = 3 なので、ディアボロの試練
                if (Gvar.dungeon_number == 3 && Gvar.current_floor == 99) {
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
                    Gvar.special_floor = 0;
                    Gvar.var_532 = 1;
                    Gvar.var_356 = 303; // クリアした時の死因指定
                    Gvar.var_533 = 1000000;
                    if (Gvar.var_537 == 0) {
                        Gvar.var_537 = 1;
                    }
                    if (Gvar.var_407 == 2) {
                        Gvar.var_534++;
                        await Func.func929();
                    }
                    await Func.func173();
                    return;
                }
                // No = 5 なので、鉄獄(鉄の牢獄)
                //if (Gvar.dungeon_number == 5 && Gvar.current_floor == Gvar.var_20 && Gvar.var_73[Gvar.var_66][Gvar.var_67] == 1) {
                if (Gvar.dungeon_number == 5 && Gvar.current_floor == Gvar.var_20) {
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
                    Gvar.special_floor = 0;
                    Gvar.var_532 = 1;
                    Gvar.var_356 = 314; // クリアした時の死因指定
                    Gvar.var_533 = 1000000;
                    if (Gvar.var_538 == 0) {
                        Gvar.var_538 = 1;
                    }
                    if (Gvar.var_407 == 2) {
                        Gvar.var_534++;
                        await Func.func929();
                    }
                    await Func.func173();
                    return;
                }
                Adap.DSPLAY(101); // 階段を昇るor降りる時の効果音
                if (Gvar.var_375 == 1) {
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
                    Gvar.special_floor = 0;
                    Gvar.var_539 = 1;
                    await Func.func233(); // ダンジョンへ入った際の全ステータス初期化処理
                    await Func.func880();
                    return;
                }
                await Func.func061();
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
                if (Gvar.var_73[Gvar.var_66][Gvar.var_67] == 1) {
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
                }
                if (Gvar.var_73[Gvar.var_66][Gvar.var_67] == 2) {
                    Gvar.current_floor = Gvar.current_floor - 1;
                }
                Gvar.special_floor = 0;
                await Func.func059(); // ホテルの外の最終フロア、エンヤホテル以外確定処理
                Gvar.var_205 = 1;
                await Func.func231(); // プレイデータを保存するセーブ機能
                if (Gvar.var_407 == 1) {
                    await Func.func904();
                }
                if (Gvar.var_407 == 2) {
                    await Func.func932();
                }
                await Func.func076(); // 各ダンジョンの絵文字読込処理
                for (let cnt3 = 0; cnt3 < 80; ++cnt3) {
                    await Func.func339();
                }
                await Func.func006(); // 一巡後の世界のみのフラグ処理
                return;
            }
        }
        if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
            if (Gvar.var_406 == 0) {
                Gvar.var_405 = 0;
                Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                await Func.func051(); // キー入力待ち処理
                await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                return;
            }
        }
        if (Gvar.key_X_on == 1) {
            Gvar.var_405 = 0;
            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            await Func.func051(); // キー入力待ち処理
            await Func.func009(); // ディアボロ側ターン処理(ループ処理)
            return;
        }
        await Func.func060(); // ダンジョンの階段を先に進んだ時の動作処理
        return;
}

export {func060}
