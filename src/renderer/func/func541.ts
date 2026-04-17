/**
 * func541 — func541 各罠を踏んだ時の動作処理
 *
 * (org原典: newDTW_func5)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'
import { tf } from '../i18n'

// 罠を踏んだ時の処理
async function func541(this: any) {
        Adap.dbgprt(541);
        Gvar.var_2442 = Gvar.var_80[Gvar.var_66][Gvar.var_67];
        Gvar.var_2443 = Gvar.var_66;
        Gvar.var_2444 = Gvar.var_67;
        if (Gvar.var_81[Gvar.var_2442][0] == 96) {
            return;
        }
        if (Gvar.var_81[Gvar.var_2442][0] == 98 && Gvar.shageki_disc_id == 402 && Gvar.var_545 == 0) {
            return;
        }
        if (Gvar.var_545 == 0) {
            if (Gvar.var_81[Gvar.var_2442][0] == 80 || Gvar.var_81[Gvar.var_2442][0] == 81 || Gvar.var_81[Gvar.var_2442][0] == 82 || Gvar.var_81[Gvar.var_2442][0] == 84 || Gvar.var_81[Gvar.var_2442][0] == 85 || Gvar.var_81[Gvar.var_2442][0] == 86 || Gvar.var_81[Gvar.var_2442][0] == 87 || Gvar.var_81[Gvar.var_2442][0] == 88 || Gvar.var_81[Gvar.var_2442][0] == 89 || Gvar.var_81[Gvar.var_2442][0] == 90 || Gvar.var_81[Gvar.var_2442][0] == 91 || Gvar.var_81[Gvar.var_2442][0] == 92 || Gvar.var_81[Gvar.var_2442][0] == 93 || Gvar.var_81[Gvar.var_2442][0] == 94 || Gvar.var_81[Gvar.var_2442][0] == 79 || Gvar.var_81[Gvar.var_2442][0] == 78 || Gvar.var_81[Gvar.var_2442][0] == 77) {
                return;
            }
        }
        Gvar.var_240 = 0;
        Gvar.var_81[Gvar.var_2442][4] = 1;
        Gvar.var_888 = Gvar.var_81[Gvar.var_2442][0];
        Gvar.var_2445 = Gvar.var_81[Gvar.var_2442][0];
        Gvar.var_2446 = Gvar.var_81[Gvar.var_2442][6];
        await Func.func554();
        if (Gvar.var_888 != 19 && Gvar.var_888 != 97 && Gvar.var_81[Gvar.var_2442][0] != 80 && Gvar.var_81[Gvar.var_2442][0] != 82 && Gvar.var_81[Gvar.var_2442][0] != 84 && Gvar.var_81[Gvar.var_2442][0] != 85 && Gvar.var_81[Gvar.var_2442][0] != 86 && Gvar.var_81[Gvar.var_2442][0] != 87 && Gvar.var_81[Gvar.var_2442][0] != 88 && Gvar.var_81[Gvar.var_2442][0] != 89 && Gvar.var_81[Gvar.var_2442][0] != 90 && Gvar.var_81[Gvar.var_2442][0] != 91 && Gvar.var_81[Gvar.var_2442][0] != 92 && Gvar.var_81[Gvar.var_2442][0] != 93 && Gvar.var_81[Gvar.var_2442][0] != 94 && Gvar.var_81[Gvar.var_2442][0] != 79 || Gvar.var_81[Gvar.var_2442][0] == 78 || Gvar.var_81[Gvar.var_2442][0] == 77) {
            await Func.setMessage(tf("{0}を踏んだ", Gvar.var_889), "", 10, false, false, false);
            if (Gvar.var_888 != 5) {
                Adap.DSPLAY(165);
            }
            if (Gvar.var_888 == 5) {

                Adap.DSPLAY(167);
            }
        }
        if (Gvar.var_81[Gvar.var_2442][0] == 80 || Gvar.var_81[Gvar.var_2442][0] == 82 || Gvar.var_81[Gvar.var_2442][0] == 84 || Gvar.var_81[Gvar.var_2442][0] == 86 || Gvar.var_81[Gvar.var_2442][0] == 87 || Gvar.var_81[Gvar.var_2442][0] == 88 || Gvar.var_81[Gvar.var_2442][0] == 89 || Gvar.var_81[Gvar.var_2442][0] == 90 || Gvar.var_81[Gvar.var_2442][0] == 91 || Gvar.var_81[Gvar.var_2442][0] == 92 || Gvar.var_81[Gvar.var_2442][0] == 93 || Gvar.var_81[Gvar.var_2442][0] == 94 || Gvar.var_81[Gvar.var_2442][0] == 79 || Gvar.var_81[Gvar.var_2442][0] == 81 || Gvar.var_81[Gvar.var_2442][0] == 78 || Gvar.var_81[Gvar.var_2442][0] == 77) {
            await Func.setMessage("地面を調べた。", "", 10, true, false, false);
        }
        if (Gvar.var_888 == 97 || Gvar.var_888 == 19) {
            await Func.setMessage("地面に何か書いてある。", "", 10, true, false, false);
        }
        if (Gvar.var_888 == 85) {
            await Func.setMessage("幽霊部屋に入った。", "", 10, true, false, false);
        }
        await Func.AutoDraw(10);
        // 時止め(時消し飛ばし)状態でない場合
        if (Gvar.sympathy_id == 139 && Gvar.var_545 == 0 && Gvar.time_paused == 0) {
            await Func.setMessage("ﾃﾞｨｱﾎﾞﾛ「キング・クリムゾン！」", "", 7, true, false, false);
            Gvar.time_paused = 1; // 時止め(時消し飛ばし)状態フラグON
            Adap.DSPLAY(185);
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1491 = 1;
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1491++;
            }
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_1491 = 0;
            await Func.setMessage("未来という目の前に………", tf("「{0}」を見つけ！", Gvar.var_889), 7, true, false, false);
            await Func.setMessage("それに引っかかる事がなければ", "「絶頂」のままでいられる  わたしは！…", 7, true, false, false);
            await Func.AutoDraw(10);
            Gvar.time_paused = 0; // 時止め(時消し飛ばし)状態フラグOFF
            return;
        }
        Gvar.var_2447 = Adap.rnd(5);
        if (Gvar.dungeon_number == 99) {
            Gvar.var_2447 = 1;
        }
        if (Gvar.var_545 == 1) {
            Gvar.var_545 = 0;
            Gvar.var_2447 = 1;
        }
        if (Gvar.equip_disc[355] == 1) {
            Gvar.var_545 = 0;
            Gvar.var_2447 = 1;
        }
        if (Gvar.var_81[Gvar.var_2442][0] == 19) {
            Gvar.var_545 = 0;
            Gvar.var_2447 = 1;
        }
        if (Gvar.time_paused == 1) { // 時止め(時消し飛ばし)状態の場合
            Gvar.var_545 = 0;
            Gvar.var_2447 = 0;
        }
        if (Gvar.var_2447 == 0) {
            if (Gvar.var_81[Gvar.var_2442][0] == 19) {
                await Func.setMessage("", "しかし何も起こらなかった…", 7, false, false, false);
            }
            else {
                await Func.setMessage("", "しかし読まなかった。", 7, false, false, false);
            }
            await Func.AutoDraw(10);
            return;
        }
        Gvar.var_1216 = 0;
        // No = 1 セト神の罠を踏んだ時の動作処理
        if (Gvar.var_81[Gvar.var_2442][0] == 1) {
            Gvar.var_108 = 1;
            Gvar.var_81[Gvar.var_2442][3] = 1;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1593 = 1;
    
            Adap.DSPLAY(156);
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1593++;
            }
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_1593 = 0;
            Gvar.var_81[Gvar.var_2442][3] = 0;
            await Func.setMessage("", "精神力が退化してしまった！", 7, false, false, false);
            Adap.DSPLAY(164);
            await Func.AutoDraw(10);
            Gvar.var_108 = 0;
            if (Gvar.equip_disc[207] == 1) {
                Adap.DSPLAY(163);
                await Func.setMessage("と思ったが、装備中のDISCによって", "若返りを防いだ！", 7, false, false, false);
            }
            if (Gvar.equip_disc[207] == 0) {
                Gvar.var_565 = Gvar.var_565 - 1;
                if (Gvar.var_565 < 0) {
                    Gvar.var_565 = 0;
                }
            }
        }
        // No = 2 ジェイルハウスロックの罠を踏んだ時の動作処理
        if (Gvar.var_81[Gvar.var_2442][0] == 2) {
            Gvar.var_108 = 1;
            Gvar.var_81[Gvar.var_2442][3] = 1;
    
            Adap.DSPLAY(161);
            await Func.AutoDraw(10);
            Gvar.var_108 = 0;
            Gvar.var_81[Gvar.var_2442][3] = 0;
            Gvar.var_179 = Adap.rnd(2);
            if (Gvar.dungeon_number != 2 && Gvar.dungeon_number != 3 && Gvar.dungeon_number != 5) {
                Gvar.var_179 = 0;
            }
            if (Gvar.var_179 == 1) {
                Gvar.var_2448 = Adap.dim(100);
                Gvar.var_2449 = 0;
                Gvar.var_2450 = 560;
                for (let cnt3 = 0; cnt3 < 40; ++cnt3) {
                    if (Gvar.var_862[Gvar.var_2450][0] == 1 && Gvar.var_2450 != 583) {
                        Gvar.var_2448[Gvar.var_2449] = Gvar.var_2450;
                        Gvar.var_2449++;
                    }
                    Gvar.var_2450++;
                }
                if (Gvar.var_862[800][0] == 1) {
                    Gvar.var_2448[Gvar.var_2449] = 800;
                    Gvar.var_2449++;
                }
                Gvar.var_2450 = 805;
                for (let cnt3 = 0; cnt3 < 90; ++cnt3) {
                    if (Gvar.var_862[Gvar.var_2450][0] == 1) {
                        Gvar.var_2448[Gvar.var_2449] = Gvar.var_2450;
                        Gvar.var_2449++;
                    }
                    Gvar.var_2450++;
                }
                if (Gvar.var_2449 != 0) {
                    await Func.setMessage("", "識別したｱｲﾃﾑを１つ忘れてしまった！", 7, false, false, false);            
                    Adap.DSPLAY(164);
                }
                if (Gvar.var_2449 == 0) {
                    Gvar.var_179 = 0;
                }
                if (Gvar.var_2449 >= 1) {
                    await Func.func047(); // メッセージ履歴追加処理
                    Gvar.var_2451 = Adap.rnd(Gvar.var_2449);
                    Gvar.var_2452 = Gvar.var_2448[Gvar.var_2451];
                    Gvar.var_862[Gvar.var_2452][0] = 0;
                }
            }
            if (Gvar.var_179 == 0) {
                await Func.setMessage("", "地形とｱｲﾃﾑの位置を忘れてしまった！", 7, false, false, false);        
                Gvar.var_74 = Adap.dim(70, 70, Gvar.length3 = null, null);
                Gvar.var_75 = Adap.dim(20);
                Gvar.var_98 = 0;
                Gvar.var_99 = 0;
                Gvar.var_2453 = 1;
                for (let cnt3 = 0; cnt3 < Gvar.var_336; ++cnt3) {
                    Gvar.var_78[Gvar.var_2453].Var10 = 0;
                    Gvar.var_2453 = Gvar.var_2453 + 1;
                }
                Gvar.var_2453 = 1;
                for (let cnt3 = 0; cnt3 < Gvar.var_337; ++cnt3) {
                    Gvar.var_81[Gvar.var_2453][4] = 0;
                    Gvar.var_2453 = Gvar.var_2453 + 1;
                }
                Gvar.var_100 = 0;
                Gvar.var_102 = 0;
                await Func.func017();
                await Func.func016();
                await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        
                Adap.DSPLAY(164);
            }
        }
        // No = 3 ダイバーダウンの罠を踏んだ時の動作処理
        if (Gvar.var_81[Gvar.var_2442][0] == 3) {
            Gvar.var_2454 = Adap.rnd(10);
            Gvar.var_2455 = Math.floor(Gvar.var_211 / 5) + Gvar.var_2454;
            Gvar.var_209 = Gvar.var_2455;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1533 = 1;
            Gvar.var_1396 = Gvar.var_66;
            Gvar.var_1397 = Gvar.var_67;
            Gvar.var_81[Gvar.var_2442][3] = 1;
            Gvar.var_108 = 1;
            Gvar.var_747 = 1;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1533++;
                if (Gvar.var_1533 == 3) {
            
                    Adap.DSPLAY(104);
                }
            }
            Gvar.var_108 = 0;
            Gvar.var_81[Gvar.var_2442][3] = 0;
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_1533 = 0;
            Gvar.var_211 = Gvar.var_211 - Gvar.var_2455;
            Gvar.var_208 = Gvar.var_208 + Gvar.var_2455;
            if (Gvar.var_211 <= 0) {
                Gvar.var_211 = 0;
                Gvar.var_356 = 230;
                Gvar.var_199 = 2;
            }
            await Func.setMessage("", tf("{0}のダメージをうけた！", Gvar.var_2455), 7, false, false, false);
            await Func.AutoDraw(11);
        }
        // No = 4 アンダーワールドの罠を踏んだ時の動作処理
        if (Gvar.var_81[Gvar.var_2442][0] == 4) {
            Gvar.var_81[Gvar.var_2442][3] = 1;
            await Func.AutoDraw(10);
            Gvar.var_108 = 0;
            Gvar.var_81[Gvar.var_2442][3] = 0;
            await Func.setMessage("", "地面の記憶を呼び出した！", 7, false, false, false);
            Adap.DSPLAY(166);
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_198 = 1; // メッセージウィンドウ開く
                Gvar.var_300 = 0;
            }
    
            Adap.DSPLAY(166);
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_198 = 1; // メッセージウィンドウ開く
                Gvar.var_300 = 0;
            }
            Gvar.var_768 = 1;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func536();
            }
            Gvar.var_768 = 0;
            await Func.setMessage("罠がたくさん現れたようだ…", "", 7, false, false, false);
            await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
            await Func.AutoDraw(10);
            Gvar.var_80[Gvar.var_66][Gvar.var_67] = 0;
            Gvar.var_81[Gvar.var_2442][0] = 0;
            Gvar.var_81[Gvar.var_2442][1] = 0;
            Gvar.var_81[Gvar.var_2442][2] = 0;
        }
        // No = 5 猫袋の罠を踏んだ時の動作処理
        if (Gvar.var_81[Gvar.var_2442][0] == 5) {
            await Func.setMessage("", "「ボ ﾑ ギ ！」", 7, false, false, false);
            await Func.AutoDraw(20);
            Gvar.var_2456 = 1;
            Gvar.var_1845 = 1;
            await Func.func556();
            Gvar.var_2457 = Gvar.var_673;
            Gvar.var_2456 = 0;
            Gvar.var_1845 = 0;
            if (Gvar.var_2110 == 0) {
                await Func.setMessage("しかし何も起こらなかった。", "", 7, false, false, false);
            }
            if (Gvar.var_2110 == 1) {
                await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
                await Func.setMessage("俺のネコ殺しといて", "タダで行っちまうつもりかよ！", 7, false, false, false);
                Gvar.var_80[Gvar.var_66][Gvar.var_67] = 0;
                Gvar.var_81[Gvar.var_2442][0] = 0;
                Gvar.var_81[Gvar.var_2442][1] = 0;
                Gvar.var_81[Gvar.var_2442][2] = 0;
                Gvar.var_1584 = (Gvar.var_83[Gvar.var_2457].Var1 - Gvar.var_66 + 4) * 40;
                Gvar.var_1585 = (Gvar.var_83[Gvar.var_2457].Var2 - Gvar.var_67 + 4) * 40;
                Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
                Gvar.var_1583 = 1;
        
                Adap.DSPLAY(168);
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    Gvar.var_300 = 0;
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_1583++;
                }
                Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
                Gvar.var_1583 = 0;
            }
        }
        // No = 6 ダービー弟の落とし穴の罠を踏んだ時の動作処理
        if (Gvar.var_81[Gvar.var_2442][0] == 6) {
            Gvar.var_108 = 1;
            Gvar.var_81[Gvar.var_2442][3] = 1;
            if (Gvar.shageki_disc_id != 411) {
                Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
                Gvar.var_1543 = 1;
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_1543++;
                }
                await Func.setMessage("", "下の階に引きずり込まれた！", 7, false, false, false);
                Adap.DSPLAY(135);
                for (let cnt3 = 0; cnt3 < 8; ++cnt3) {
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_1543++;
                }
                Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
                Gvar.var_1543 = 0;
                Gvar.var_372 = 1;
            }
            // No = 411 タワーオブグレーを装備していた場合
            if (Gvar.shageki_disc_id == 411) {
                Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
                Gvar.var_1544 = 1;
                Adap.DSPLAY(190);
                for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_1544++;
                }
                await Func.setMessage("", "「ブーーーン」", 7, false, false, false);
                for (let cnt3 = 0; cnt3 < 13; ++cnt3) {
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_1544++;
                }
                Gvar.var_1216 = 2;
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1544++;
                Gvar.var_1216 = 1;
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1544++;
                Gvar.var_1216 = 0;
                Gvar.var_81[Gvar.var_2442][3] = 0;
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1544++;
                for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_1544++;
                }
                Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
                Gvar.var_1544 = 0;
                Gvar.var_108 = 0;
            }
        }
        // No = 7 ローリングストーンズの罠を踏んだ時の動作処理
        if (Gvar.var_81[Gvar.var_2442][0] == 7) {
            Gvar.var_81[Gvar.var_2442][3] = 1;
            Gvar.var_108 = 1;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1535 = 1;
            for (let cnt2 = 0; cnt2 < 14; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1535++;
            }
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_1535 = 0;
            if (Gvar.shageki_disc_id != 403) {
                Gvar.var_2455 = Math.floor(Gvar.var_211 / 2);
            }
            if (Gvar.shageki_disc_id == 403) {
                Gvar.var_2455 = Math.floor(Gvar.var_211 / 4);
            }
            Gvar.var_211 = Gvar.var_211 - Gvar.var_2455;
            Gvar.var_208 = Gvar.var_208 + Gvar.var_2455;
            if (Gvar.var_211 <= 0) {
                Gvar.var_211 = 0;
                Gvar.var_356 = 231;
                Gvar.var_199 = 2;
            }
            await Func.setMessage("", "巨大な岩に押しつぶされた！", 7, false, false, false);
            if (Gvar.shageki_disc_id == 403) {
                await Func.setMessage("しかし、装備中のDISCのおかげで", "ダメージが少なかった。", 7, true, false, false);
            }
            await Func.AutoDraw(14);
            Gvar.var_81[Gvar.var_2442][3] = 0;
            Gvar.var_108 = 0;
        }
        // No = 8 ホワイトアルバムの罠を踏んだ時の動作処理
        if (Gvar.var_81[Gvar.var_2442][0] == 8) {
            Gvar.var_81[Gvar.var_2442][3] = 1;
            Gvar.var_108 = 1;
            Gvar.var_747 = 1;
            Gvar.var_1212 = 1;
            Gvar.var_128 = 1;
            Adap.DSPLAY(126);
            await Func.setMessage("", "体が凍ってしまった！", 7, false, false, false);
            Adap.DSPLAY(126);
            await Func.AutoDraw(10);
            Gvar.var_108 = 0;
            Gvar.var_81[Gvar.var_2442][3] = 0;
            await Func.AutoDraw(10);
            if (Gvar.nouryoku_disc_id == 109 || Gvar.nouryoku_disc_id == 202 || Gvar.shageki_disc_id == 404 || Gvar.var_173 == 1) {
                Gvar.var_128 = 0;
                if (Gvar.nouryoku_disc_id == 109 || Gvar.nouryoku_disc_id == 202 || Gvar.shageki_disc_id == 404) {
                    await Func.setMessage("しかし、装備中のDISCのおかげで", "氷漬けを解除できた。", 7, true, false, false);
                }
                if (Gvar.var_173 == 1) {
                    await Func.setMessage("しかし、冷たいのに強くなっていて", "氷漬けを解除できた。", 7, true, false, false);
                }
            }
        }
        // No = 9, 31 エコーズACT2の罠(ボヨヨン)を踏んだ時の動作処理
        if (Gvar.var_81[Gvar.var_2442][0] == 9 || Gvar.var_81[Gvar.var_2442][0] == 31) {
            Gvar.var_300 = 0;
            await Func.setMessage("", "地面に「ボョヨオン」と書かれていた！", 7, false, false, false);
            await Func.AutoDraw(15);
            Adap.DSPLAY(169);
            Gvar.var_81[Gvar.var_2442][3] = 1;
            Gvar.var_108 = 1;
            Gvar.var_374 = 1;
            Gvar.var_774 = 160;
            Gvar.var_1577 = 1;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            for (let cnt2 = 0; cnt2 < 8; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1577++;
                Gvar.var_774 = Gvar.var_774 - 20;
            }
            Gvar.var_1577 = 0;
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_374 = 0;
            Gvar.var_108 = 0;
            Gvar.var_81[Gvar.var_2442][3] = 0;
            await Func.func499(); // ダンジョン動作処理?
            Gvar.var_382 = 1;
        }
        // No = 10 クラフトワークの罠を踏んだ時の動作処理
        if (Gvar.var_81[Gvar.var_2442][0] == 10) {
            Gvar.var_81[Gvar.var_2442][3] = 1;
            Gvar.var_108 = 1;
            Gvar.var_1212 = 1;
            Gvar.var_1598 = 1;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                if (Gvar.var_1598 == 3) {
                    Gvar.var_747 = 1;
    
                    Adap.DSPLAY(105);
                }
                Gvar.var_1598++;
                Gvar.var_198 = 1; // メッセージウィンドウ開く
                Gvar.var_300 = 0;
            }
            Gvar.var_1598 = 0;
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            await Func.setMessage("", "地面に固定された！", 7, false, false, false);
            await Func.AutoDraw(10);
            Gvar.var_108 = 0;
            Gvar.var_81[Gvar.var_2442][3] = 0;
            Gvar.var_116 = 1;
            Gvar.var_115 = 0;
            Gvar.var_461 = Gvar.var_66;
            Gvar.var_462 = Gvar.var_67;
            await Func.AutoDraw(11);
        }
        // No = 11 ワムウの罠を踏んだ時の動作処理
        if (Gvar.var_81[Gvar.var_2442][0] == 11) {
            Gvar.var_81[Gvar.var_2442][3] = 1;
            Gvar.var_2454 = Adap.rnd(10);
            Gvar.var_2455 = Math.floor(Gvar.var_211 / 5) + Gvar.var_2454;
            Gvar.var_209 = Gvar.var_2455;
            Gvar.var_108 = 1;
            Gvar.var_747 = 1;
            Adap.DSPLAY(103); // 殴られた時の効果音
            await Func.AutoDraw(10);
            Gvar.var_108 = 0;
            Gvar.var_81[Gvar.var_2442][3] = 0;
            Gvar.var_211 = Gvar.var_211 - Gvar.var_2455;
            Gvar.var_208 = Gvar.var_208 + Gvar.var_2455;
            if (Gvar.var_211 <= 0) {
                Gvar.var_211 = 0;
                Gvar.var_356 = 232;
                Gvar.var_199 = 2;
            }
            await Func.setMessage("", tf("{0}のダメージをうけた！", Gvar.var_2455), 7, false, false, false);
            await Func.AutoDraw(5);
            if (Gvar.var_224 == 0) {
                await Func.func540();
                return;
            }
            Gvar.var_474 = 0;
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                Gvar.var_475 = Adap.rnd(Gvar.var_224);
                Gvar.var_475 = Gvar.var_475 + 1;
                if (Gvar.var_476[Gvar.var_475] == 0 && Gvar.var_477[Gvar.var_475] == 0 && Gvar.var_478[Gvar.var_475] == 0 && Gvar.var_479[Gvar.var_475] == 0) {
                    Gvar.var_474 = 1;
                    break;
                }
            }
            if (Gvar.var_474 == 1) {
                Gvar.belongings_item_list = Gvar.var_233[Gvar.var_475].Var0;
                Gvar.disc_rarity = Gvar.var_233[Gvar.var_475].Var13;
                Gvar.var_488 = Gvar.belongings_item_list;
                await Func.func492(); // アイテムリスト呼び出し
                Gvar.target_item_name = Gvar.item_name;
                if (Gvar.equip_disc[119] == 0) {
                    Gvar.var_225 = Gvar.var_475;
                    Gvar.var_2458 = 0;
                    if (Gvar.var_233[Gvar.var_475].Var0 >= 800 && Gvar.var_233[Gvar.var_475].Var0 < 900) {
                        if (Gvar.var_233[Gvar.var_475].Var0 != 806 && Gvar.var_233[Gvar.var_475].Var0 != 851 && Gvar.var_233[Gvar.var_475].Var0 != 852 && Gvar.var_233[Gvar.var_475].Var8 >= 1) {
                            Gvar.var_1905 = Gvar.var_233[Gvar.var_475].Var8;
                            Gvar.var_1910 = 1;
                            Gvar.var_2459 = Gvar.var_233[Gvar.var_475].Var6;
                            for (let cnt6 = 0; cnt6 < Gvar.var_1905; ++cnt6) {
                                Gvar.var_309 = Gvar.var_66;
                                Gvar.var_310 = Gvar.var_67;
                                await Func.func405();
                                Gvar.var_66 = Gvar.var_309;
                                Gvar.var_67 = Gvar.var_310;
                                if (Gvar.var_446 == 0) {
                                    break;
                                }
                                await Func.func724();
                                Gvar.var_77[Gvar.var_448][Gvar.var_450] = Gvar.var_854;
                                Gvar.var_78[Gvar.var_854].Var0 = Gvar.var_486[Gvar.var_2459][Gvar.var_1910][0];
                                Gvar.var_78[Gvar.var_854].Var1 = Gvar.var_448;
                                Gvar.var_78[Gvar.var_854].Var2 = Gvar.var_450;
                                Gvar.var_78[Gvar.var_854].Var3 = Gvar.var_486[Gvar.var_2459][Gvar.var_1910][3];
                                Gvar.var_78[Gvar.var_854].Var4 = Gvar.var_486[Gvar.var_2459][Gvar.var_1910][4];
                                Gvar.var_78[Gvar.var_854].Var5 = Gvar.var_486[Gvar.var_2459][Gvar.var_1910][5];
                                Gvar.var_78[Gvar.var_854].Var6 = Gvar.var_486[Gvar.var_2459][Gvar.var_1910][6];
                                Gvar.var_78[Gvar.var_854].Var7 = Gvar.var_486[Gvar.var_2459][Gvar.var_1910][7];
                                Gvar.var_78[Gvar.var_854].Var8 = Gvar.var_486[Gvar.var_2459][Gvar.var_1910][8];
                                Gvar.var_78[Gvar.var_854].Var9 = Gvar.var_71[Gvar.var_448][Gvar.var_450];
                                Gvar.var_78[Gvar.var_854].Var10 = 1;
                                Gvar.var_78[Gvar.var_854].Var11 = Gvar.var_486[Gvar.var_2459][Gvar.var_1910][11];
                                Gvar.var_78[Gvar.var_854].Var12 = Gvar.var_486[Gvar.var_2459][Gvar.var_1910][12];
                                Gvar.var_78[Gvar.var_854].Var13 = Gvar.var_486[Gvar.var_2459][Gvar.var_1910][13];
                                Gvar.var_78[Gvar.var_854].Var14 = Gvar.var_486[Gvar.var_2459][Gvar.var_1910][14];
                                Gvar.var_78[Gvar.var_854].Var15 = Gvar.var_486[Gvar.var_2459][Gvar.var_1910][15];
                                Gvar.var_78[Gvar.var_854].Var16 = Gvar.var_486[Gvar.var_2459][Gvar.var_1910][16];
                                Gvar.var_78[Gvar.var_854].Var17 = Gvar.var_486[Gvar.var_2459][Gvar.var_1910][17];
                                Gvar.var_78[Gvar.var_854].Var18 = Gvar.var_486[Gvar.var_2459][Gvar.var_1910][18];
                                Gvar.var_78[Gvar.var_854].Var19 = Gvar.var_486[Gvar.var_2459][Gvar.var_1910][19];
                                Gvar.var_78[Gvar.var_854].Var20 = Gvar.var_486[Gvar.var_2459][Gvar.var_1910][20];
                                Gvar.var_78[Gvar.var_854].Var21 = Gvar.var_486[Gvar.var_2459][Gvar.var_1910][21];
                                Gvar.var_78[Gvar.var_854].Var22 = Gvar.var_486[Gvar.var_2459][Gvar.var_1910][22];
                                Gvar.var_78[Gvar.var_854].Var23 = Gvar.var_486[Gvar.var_2459][Gvar.var_1910][23];
                                Gvar.var_78[Gvar.var_854].Var24 = Gvar.var_486[Gvar.var_2459][Gvar.var_1910][24];
                                Gvar.var_78[Gvar.var_854].Var25 = Gvar.var_486[Gvar.var_2459][Gvar.var_1910][25];
                                Gvar.var_78[Gvar.var_854].Var26 = Gvar.var_486[Gvar.var_2459][Gvar.var_1910][26];
                                Gvar.var_78[Gvar.var_854].Var27 = Gvar.var_486[Gvar.var_2459][Gvar.var_1910][27];
                                Gvar.var_78[Gvar.var_854].Var28 = Gvar.var_486[Gvar.var_2459][Gvar.var_1910][28];
                                Gvar.var_78[Gvar.var_854].Var29 = Gvar.var_486[Gvar.var_2459][Gvar.var_1910][29];
                                Gvar.var_1910++;
                            }
                        }
                        if (Gvar.var_233[Gvar.var_475].Var0 == 806) {
                            Gvar.var_1911 = Gvar.var_233[Gvar.var_475].Var7 - Gvar.var_233[Gvar.var_475].Var8;
                            if (Gvar.var_1911 >= 1) {
                                Gvar.var_1912 = Gvar.var_673;
                                Gvar.var_1913 = 1;
                                Gvar.var_1845 = 3;
                                Gvar.var_1914 = Gvar.var_66;
                                Gvar.var_1915 = Gvar.var_67;
                                for (let cnt7 = 0; cnt7 < Gvar.var_1911; ++cnt7) {
                                    await Func.func556();
                                }
                                Gvar.var_1913 = 0;
                                Gvar.var_1845 = 0;
                                Gvar.var_673 = Gvar.var_1912;
                            }
                        }
                        if (Gvar.var_233[Gvar.var_475].Var0 == 851) {
                            Gvar.var_1911 = Gvar.var_233[Gvar.var_475].Var8;
                            if (Gvar.var_1911 >= 1) {
                                Gvar.var_1912 = Gvar.var_673;
                                Gvar.var_1916 = Gvar.var_233[Gvar.var_475].Var6;
                                Gvar.var_1845 = 3;
                                Gvar.var_1914 = Gvar.var_66;
                                Gvar.var_1915 = Gvar.var_67;
                                Gvar.var_1917 = 1;
                                for (let cnt7 = 0; cnt7 < Gvar.var_1911; ++cnt7) {
                                    Gvar.var_1918 = Gvar.var_486[Gvar.var_1916][Gvar.var_1917][15];
                                    Gvar.var_1919 = Gvar.var_486[Gvar.var_1916][Gvar.var_1917][18];
                                    if (Gvar.var_1918 != 0) {
                                        await Func.func556();
                                    }
                                    Gvar.var_1917++;
                                }
                                Gvar.var_1918 = 0;
                                Gvar.var_1845 = 0;
                                Gvar.var_673 = Gvar.var_1912;
                            }
                        }
                        if (Gvar.var_233[Gvar.var_475].Var0 == 852) {
                            Gvar.var_1911 = Gvar.var_233[Gvar.var_475].Var7 - Gvar.var_233[Gvar.var_475].Var8;
                            if (Gvar.var_1911 >= 1) {
                                Gvar.var_1912 = Gvar.var_673;
                                Gvar.var_1920 = 1;
                                Gvar.var_1845 = 3;
                                Gvar.var_1914 = Gvar.var_66;
                                Gvar.var_1915 = Gvar.var_67;
                                for (let cnt7 = 0; cnt7 < Gvar.var_1911; ++cnt7) {
                                    await Func.func556();
                                }
                                Gvar.var_1920 = 0;
                                Gvar.var_1845 = 0;
                                Gvar.var_673 = Gvar.var_1912;
                            }
                        }
                    }
                    Gvar.var_225 = Gvar.var_475;
                    await Func.func433(); // アイテム配列(所持アイテム)初期化関数
                }
                await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
                if (Gvar.equip_disc[119] == 0) {
                    await Music.func100();
                }
                await Func.setMessage(tf("{0}が壊された！", Gvar.target_item_name), "", 7, false, false, false);
                await Func.AutoDraw(5);
                if (Gvar.equip_disc[119] == 1) {
                    await Func.setMessage("…と思ったが、ｽﾊﾟｲｽｶﾞｰﾙで", "柔らかくして防いだ！", 7, true, false, false);
                }
                await Func.AutoDraw(5);
            }
        }
        // No = 12 DIOの罠を踏んだ時の動作処理
        if (Gvar.var_81[Gvar.var_2442][0] == 12) {
            Gvar.var_81[Gvar.var_2442][3] = 1;
            Gvar.var_108 = 1;
            Gvar.var_300 = 0;
            await Func.setMessage("", "「ロードローラーだッ！」", 7, false, false, false);
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1536 = 1;
            for (let cnt2 = 0; cnt2 < 15; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1536++;
            }
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_1536 = 0;
            if (Gvar.var_211 == 1) {
                Gvar.var_211 = 0;
                Gvar.var_356 = 233;
                Gvar.var_199 = 2;
            }
            if (Gvar.var_211 > 1) {
                if (Gvar.nouryoku_disc_id != 100 && Gvar.nouryoku_disc_id != 398) {
                    Gvar.var_208 = Gvar.var_211 - 1 + Gvar.var_208;
                    Gvar.var_211 = 1;
                }
                if (Gvar.nouryoku_disc_id == 100 || Gvar.nouryoku_disc_id == 398) {
                    Gvar.var_208 = Math.floor(Gvar.var_211 / 2) + Gvar.var_208;
                    Gvar.var_211 = Math.floor(Gvar.var_211 / 2);
                }
            }
            await Func.AutoDraw(14);
            Gvar.var_81[Gvar.var_2442][3] = 0;
            Gvar.var_1389 = Gvar.var_66;
            Gvar.var_1390 = Gvar.var_67;
            Gvar.var_1993 = Gvar.var_1389 - 1;
            if (Gvar.var_1993 < 0) {
                Gvar.var_1993 = 0;
            }
            Gvar.var_1994 = Gvar.var_1389 + 1;
            Gvar.var_1995 = Gvar.var_1390 + 1;
            Gvar.var_1996 = Gvar.var_1390 - 1;
            if (Gvar.var_1996 < 0) {
                Gvar.var_1996 = 0;
            }
            Gvar.var_403 = "";
            Gvar.var_2194 = 1;
            Gvar.var_2195 = 1;
            Gvar.var_2196 = 2;
            for (let cnt2 = 0; cnt2 < Gvar.var_97; ++cnt2) {
                if (Gvar.var_83[Gvar.var_2194].Var31 != 5) {
                    if (Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1389 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = 999;
                        await Func.func705();
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1389 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = 999;
                        await Func.func705();
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1390) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = 999;
                        await Func.func705();
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1390) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = 999;
                        await Func.func705();
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = 999;
                        await Func.func705();
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = 999;
                        await Func.func705();
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = 999;
                        await Func.func705();
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = 999;
                        await Func.func705();
                    }
                }
                if (Gvar.var_83[Gvar.var_2194].Var31 == 5) {
                    if (Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1389 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                        Gvar.var_83[Gvar.var_2194].Var3 = 1;
                        Gvar.var_83[Gvar.var_2194].Var8 = 1;
                        await Func.AutoDraw(10);
                        Gvar.var_83[Gvar.var_2194].Var8 = 0;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1389 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                        Gvar.var_83[Gvar.var_2194].Var3 = 1;
                        Gvar.var_83[Gvar.var_2194].Var8 = 1;
                        await Func.AutoDraw(10);
                        Gvar.var_83[Gvar.var_2194].Var8 = 0;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1390) {
                        Gvar.var_83[Gvar.var_2194].Var3 = 1;
                        Gvar.var_83[Gvar.var_2194].Var8 = 1;
                        await Func.AutoDraw(10);
                        Gvar.var_83[Gvar.var_2194].Var8 = 0;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1390) {
                        Gvar.var_83[Gvar.var_2194].Var3 = 1;
                        Gvar.var_83[Gvar.var_2194].Var8 = 1;
                        await Func.AutoDraw(10);
                        Gvar.var_83[Gvar.var_2194].Var8 = 0;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                        Gvar.var_83[Gvar.var_2194].Var3 = 1;
                        Gvar.var_83[Gvar.var_2194].Var8 = 1;
                        await Func.AutoDraw(10);
                        Gvar.var_83[Gvar.var_2194].Var8 = 0;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                        Gvar.var_83[Gvar.var_2194].Var3 = 1;
                        Gvar.var_83[Gvar.var_2194].Var8 = 1;
                        await Func.AutoDraw(10);
                        Gvar.var_83[Gvar.var_2194].Var8 = 0;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                        Gvar.var_83[Gvar.var_2194].Var3 = 1;
                        Gvar.var_83[Gvar.var_2194].Var8 = 1;
                        await Func.AutoDraw(10);
                        Gvar.var_83[Gvar.var_2194].Var8 = 0;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                        Gvar.var_83[Gvar.var_2194].Var3 = 1;
                        Gvar.var_83[Gvar.var_2194].Var8 = 1;
                        await Func.AutoDraw(10);
                        Gvar.var_83[Gvar.var_2194].Var8 = 0;
                    }
                }
                Gvar.var_209 = 0;
                Gvar.var_2194 = Gvar.var_2194 + 1;
            }
            Gvar.var_2196 = 0;
            Gvar.var_2195 = 0;
            if (Gvar.var_211 != 0) {
                if (Gvar.nouryoku_disc_id == 100 || Gvar.nouryoku_disc_id == 398) {
                    await Func.setMessage("しかし、ｽﾀｰﾌﾟﾗﾁﾅのｶﾞｰﾄﾞのおかげで", "ダメージを抑えられた！", 7, true, false, false);
                }
            }
            Gvar.var_108 = 0;
        }
        // No = 13 スカイ・ハイの罠を踏んだ時の動作処理
        if (Gvar.var_81[Gvar.var_2442][0] == 13) {
            Gvar.var_81[Gvar.var_2442][3] = 1;
            Gvar.var_108 = 1;
    
            Adap.DSPLAY(161);
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1537 = 1;
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1537++;
            }
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_1537 = 0;
            Gvar.var_300 = 0;
            await Func.setMessage("", "まぶたがスト――ンと落ちてきた！", 7, false, false, false);
            Adap.DSPLAY(153);
            Gvar.var_108 = 0;
            Gvar.var_81[Gvar.var_2442][3] = 0;
            Gvar.var_127 = 1; // 瞼が落ちるや目を切り裂かれるなどで視界が見えななくなった時のフラグON
            Gvar.var_167 = 0;
            await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
            await Func.AutoDraw(10);
        }
        // No = 14 エコーズACT2(ドジュウ)の罠を踏んだ時の動作処理
        if (Gvar.var_81[Gvar.var_2442][0] == 14) {
            Gvar.var_2460 = 0;
            Gvar.var_2461 = 1;
            for (let cnt2 = 0; cnt2 < Gvar.var_224; ++cnt2) {
                if (Gvar.var_233[Gvar.var_2461].Var0 == 605 || Gvar.var_233[Gvar.var_2461].Var0 == 635 || Gvar.var_233[Gvar.var_2461].Var0 == 640) {
                    Gvar.var_233[Gvar.var_2461].Var0 = 641;
                    Gvar.var_2460 = 1;
                }
                if (Gvar.var_233[Gvar.var_2461].Var0 >= 600 && Gvar.var_233[Gvar.var_2461].Var0 <= 604) {
                    Gvar.var_233[Gvar.var_2461].Var0 = 605;
                    Gvar.var_2460 = 1;
                }
                if (Gvar.var_233[Gvar.var_2461].Var0 >= 630 && Gvar.var_233[Gvar.var_2461].Var0 <= 639) {
                    Gvar.var_233[Gvar.var_2461].Var0 = 635;
                    Gvar.var_2460 = 1;
                }
                if (Gvar.var_233[Gvar.var_2461].Var0 >= 642 && Gvar.var_233[Gvar.var_2461].Var0 <= 649) {
                    Gvar.var_233[Gvar.var_2461].Var0 = 640;
                    Gvar.var_2460 = 1;
                }
                if (Gvar.var_233[Gvar.var_2461].Var0 >= 650 && Gvar.var_233[Gvar.var_2461].Var0 <= 654) {
                    Gvar.var_233[Gvar.var_2461].Var0 = 639;
                    Gvar.var_2460 = 1;
                }
                Gvar.var_2461 = Gvar.var_2461 + 1;
            }
            Gvar.var_81[Gvar.var_2442][3] = 1;
            Gvar.var_108 = 1;
            await Func.setMessage("", "地面に「ドジュｩウ」と書かれていた！", 7, false, false, false);
            Adap.DSPLAY(175);
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_458 = 1;
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_458++;
            }
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_458 = 0;
            if (Gvar.var_2460 == 1) {
                await Func.setMessage("食べ物がすべて焦げてしまった！", "", 7, false, false, false);
            }
            if (Gvar.var_2460 == 0) {
                await Func.setMessage("しかし何も起こらなかった。", "", 7, false, false, false);
            }
            Gvar.var_108 = 0;
            Gvar.var_81[Gvar.var_2442][3] = 0;
            await Func.AutoDraw(10);
        }
        // No = 15 ヘブンズ・ドアーの罠を踏んだ時の動作処理
        if (Gvar.var_81[Gvar.var_2442][0] == 15) {
            Gvar.var_108 = 1;
            Gvar.var_81[Gvar.var_2442][3] = 1;
            await Func.setMessage("", "", 7, false, false, false);
            Adap.DSPLAY(161);
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1542 = 1;
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1542++;
            }
            Gvar.var_2462 = Adap.rnd(4);
            if (Gvar.var_127 != 0 || Gvar.var_132 != 0) {
                Gvar.var_2462 = 99;
            }
            if (Gvar.var_2462 == 99) {
                await Func.setMessage("見えなくて平気だった", "", 7, true, false, false);
                await Func.AutoDraw(10);
                Gvar.var_108 = 0;
                Gvar.var_81[Gvar.var_2442][3] = 0;
                Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
                Gvar.var_1542 = 0;
                await Func.func340(); // キー入力による選択処理
                return;
            }
    
            Adap.DSPLAY(103); // 殴られた時の効果音
            if (Gvar.shageki_disc_id == 412) {
                Gvar.var_1261 = 1;
                for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_1542++;
                }
                Gvar.var_1073 = Adap.rnd(3);
                if (Gvar.var_1073 == 0) {
                    await Func.setMessage("「今すぐ装備DISCを全てはずす！」", "と書き込まれた", 7, false, false, false);
                }
                if (Gvar.var_1073 == 1) {
                    await Func.setMessage("「思うように動けなくなる！」", "と書き込まれた", 7, false, false, false);
                }
                if (Gvar.var_1073 == 2) {
                    await Func.setMessage("「私は焼身自殺します」", "と書き込まれた", 7, false, false, false);
                }
                if (Gvar.var_1073 == 3) {
                    await Func.setMessage("「何も見えなくなってすっ飛ぶ！」", "と書き込まれた", 7, false, false, false);
                }
                Adap.DSPLAY(118);
                await Func.AutoDraw(10);
                Gvar.var_1542 = 0;
                await Func.AutoDraw(5);
                Gvar.var_1073 = Adap.rnd(2);
                if (Gvar.var_1073 == 0) {
                    await Func.setMessage("しかし無理やり「体力が回復する！」", "と書き換えた！", 7, false, false, false);
                }
                if (Gvar.var_1073 == 1) {
                    await Func.setMessage("しかし無理やり「満腹度が回復する！」", "と書き換えた！", 7, false, false, false);
                }
                if (Gvar.var_1073 == 0) {
                    Gvar.var_211 = Gvar.var_352;
                }
                if (Gvar.var_1073 == 1) {
                    Gvar.var_350 = Gvar.var_567;
                }
                Adap.DSPLAY(143);
                Gvar.var_1299 = 5;
                Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
                Gvar.var_1297 = 1;
                for (let cnt3 = 0; cnt3 < 20; ++cnt3) {
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_1297++;
                }
                Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
                Gvar.var_1297 = 0;
                Gvar.var_108 = 0;
                Gvar.var_81[Gvar.var_2442][3] = 0;
                Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
                Gvar.var_1542 = 0;
                Gvar.var_1261 = 0;
                Gvar.var_80[Gvar.var_66][Gvar.var_67] = 0;
                Gvar.var_81[Gvar.var_2442][0] = 0;
                Gvar.var_81[Gvar.var_2442][1] = 0;
                Gvar.var_81[Gvar.var_2442][2] = 0;
                await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
                return;
            }
            if (Gvar.var_2462 == 0) {
                Gvar.var_2463 = 0;
                if (Gvar.kougeki_disc_id  == 0 && Gvar.bougyo_disc_id == 0 && Gvar.nouryoku_disc_id == 0 && Gvar.shageki_disc_id == 0) {
                    Gvar.var_2463 = 1;
                }
                Gvar.var_1261 = 1;
                for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_1542++;
                }
                if (Gvar.var_2463 == 0) {
                    await Func.setMessage("「今すぐ装備DISCを全てはずす！」", "と書き込まれた", 7, false, false, false);
                }
                if (Gvar.var_2463 == 1) {
                    await Func.setMessage("「思うように動けなくなる！」", "と書き込まれた", 7, false, false, false);
                    Gvar.var_126 = 1;
                    Gvar.var_166 = 0;
                }
                Adap.DSPLAY(118);
                if (Gvar.var_2463 == 0) {
                    Gvar.belongings_item_list = Gvar.receive_bgm_id;
                    await Music.func106(); // BGM選曲呼び出し割り振り
                }
                await Func.AutoDraw(10);
                Gvar.var_108 = 0;
                Gvar.var_81[Gvar.var_2442][3] = 0;
                Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
                Gvar.var_1542 = 0;
                Gvar.var_476 = Adap.dim(40);
                Gvar.var_580 = Gvar.var_580 - Gvar.var_894;
                Gvar.var_894 = 0;
                Gvar.kougeki_disc_id  = 0;
                Gvar.var_477 = Adap.dim(40);
                Gvar.var_581 = Gvar.var_581 - Gvar.var_895;
                Gvar.var_895 = 0;
                Gvar.bougyo_disc_id = 0;
                Gvar.var_479 = Adap.dim(40);
                Gvar.var_250 = 0;
                Gvar.shageki_disc_id = 0;
                Gvar.var_478 = Adap.dim(40);
                Gvar.nouryoku_disc_id = 0;
                await Func.func494();
                Gvar.var_896 = 0;
                Gvar.var_897 = 0;
                Gvar.var_898 = 0;
                Gvar.var_999 = 0;
                await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
                await Func.func340(); // キー入力による選択処理
                if (Gvar.var_2463 == 1) {
            
                    Adap.DSPLAY(134);
                }
                Gvar.var_1261 = 0;
            }
            if (Gvar.var_2462 == 1) {
                Gvar.var_1261 = 1;
                for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_1542++;
                }
                Adap.DSPLAY(118);
                await Func.setMessage("恥ずかしい記憶を読まれた…", "", 7, true, false, false);
                await Func.AutoDraw(10);
                Gvar.var_108 = 0;
                Gvar.var_81[Gvar.var_2442][3] = 0;
                Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
                Gvar.var_1542 = 0;
                Adap.DSPLAY(164);
                await Func.setMessage("精神力が下がってしまった。", "", 7, false, false, false);
                await Func.AutoDraw(10);
                Gvar.var_565 = Gvar.var_565 - 1;
                if (Gvar.var_565 < 0) {
                    Gvar.var_565 = 0;
                }
                Gvar.var_1261 = 0;
            }
            if (Gvar.var_2462 == 2) {
                Gvar.var_1261 = 1;
                for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_1542++;
                }
                Adap.DSPLAY(118);
                await Func.setMessage("「私は焼身自殺します」", "と書き込まれた", 7, true, false, false);
                await Func.AutoDraw(10);
                Gvar.var_108 = 0;
                Gvar.var_81[Gvar.var_2442][3] = 0;
                Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
                Gvar.var_1542 = 0;
                Adap.DSPLAY(158);
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    Gvar.var_1261 = 2;
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_211 = Gvar.var_211 - 1;
                    if (Gvar.var_211 <= 0) {
                        Gvar.var_211 = 1;
                    }
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_211 = Gvar.var_211 - 1;
                    if (Gvar.var_211 <= 0) {
                        Gvar.var_211 = 1;
                    }
                    Gvar.var_1261 = 3;
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_211 = Gvar.var_211 - 1;
                    if (Gvar.var_211 <= 0) {
                        Gvar.var_211 = 1;
                    }
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_211 = Gvar.var_211 - 1;
                    if (Gvar.var_211 <= 0) {
                        Gvar.var_211 = 1;
                    }
                }
                Gvar.var_1261 = 0;
            }
            if (Gvar.var_2462 == 3) {
                Gvar.var_1261 = 1;
                for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_1542++;
                }
                Adap.DSPLAY(118);
                await Func.setMessage("「何も見えなくなってすっ飛ぶ！」", "と書き込まれた", 7, true, false, false);
                await Func.AutoDraw(10);
                Gvar.var_108 = 0;
                Gvar.var_81[Gvar.var_2442][3] = 0;
                Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
                Gvar.var_1542 = 0;
                Gvar.var_1261 = 0;
                Gvar.var_127 = 1; // 瞼が落ちるや目を切り裂かれるなどで視界が見えななくなった時のフラグON
                await Func.func529();
            }
        }
        // No = 16 トーキング・ヘッドの罠を踏んだ時の動作処理
        if (Gvar.var_81[Gvar.var_2442][0] == 16) {
            Gvar.var_81[Gvar.var_2442][3] = 1;
            Gvar.var_108 = 1;
            await Func.AutoDraw(10);
            Adap.DSPLAY(134);
            await Func.setMessage("", "思うように動けなくなった！", 7, false, false, false);
            await Func.AutoDraw(15);
            Gvar.var_108 = 0;
            Gvar.var_81[Gvar.var_2442][3] = 0;
            Gvar.var_126 = 1;
            Gvar.var_166 = 0;
            if (Gvar.nouryoku_disc_id == 113) {
                Gvar.var_126 = 0;
                await Func.AutoDraw(10);
                Adap.DSPLAY(163);
                await Func.setMessage("と思ったが、装備中のDISCに反応して", "能力が解除された！", 7, false, false, false);
            }
        }
        // No = 17 バッドカンパニーの地雷を踏んだ時の動作処理
        if (Gvar.var_81[Gvar.var_2442][0] == 17) {
            Gvar.var_81[Gvar.var_2442][3] = 1;
            Gvar.var_108 = 1;
            Adap.DSPLAY(179);
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1538 = 1;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1538++;
            }
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_1538 = 0;
            Gvar.var_81[Gvar.var_2442][3] = 0;
            Gvar.var_211 = Gvar.var_211 - 5;
            Gvar.var_208 = Gvar.var_208 + 5;
            if (Gvar.var_211 <= 0) {
                Gvar.var_211 = 0;
                Gvar.var_356 = 234;
                Gvar.var_199 = 2;
            }
            await Func.setMessage("", "5のダメージをうけた！", 7, false, false, false);
            await Func.AutoDraw(10);
            Gvar.var_108 = 0;
            if (Gvar.equip_disc[396] == 0) {
                await Func.setMessage("足を負傷して 動きが遅くなってしまった！", "", 7, false, false, false);
                if (Gvar.var_157 == 0) { // Gvar.var_157 倍速移動フラグOFF
                    Gvar.var_133 = 1;
                    Gvar.var_397 = 0;
                }
                if (Gvar.var_157 != 0) { // Gvar.var_157 倍速移動フラグOFFでなければ
                    Gvar.var_157 = 0; // Gvar.var_157 倍速移動フラグOFF
                    Gvar.var_158 = 0;
                }
            }
            if (Gvar.equip_disc[396] == 1) {
                await Func.setMessage("足を負傷したが、", "装備ｽﾀﾝﾄﾞの効果で速度は変わらない！", 7, false, false, false);
            }
        }
        // No = 18 バステト女神の罠を踏んだ時の動作処理
        if (Gvar.var_81[Gvar.var_2442][0] == 18) {
            Gvar.var_140 = Gvar.var_140 + 1;
            Gvar.var_141 = 1;
            Gvar.var_108 = 1;
            Gvar.var_747 = 1;
            Adap.DSPLAY(120);
            await Func.AutoDraw(10);
            Gvar.var_108 = 0;
            if (Gvar.var_140 == 1) {
                await Func.setMessage("", "磁力体質になってしまった！", 7, false, false, false);
            }
            if (Gvar.var_140 >= 2 && Gvar.var_140 <= 6) {
                await Func.setMessage("", "磁力がさらに強くなった！", 7, false, false, false);
            }
            if (Gvar.var_140 == 7 && Gvar.equip_disc[396] == 0) {
                await Func.setMessage("", "磁力が強力すぎて体が重い！", 7, false, false, false);
                Gvar.var_157 = 0; // Gvar.var_157 倍速移動フラグOFF
                Gvar.var_158 = 0;
                Gvar.var_133 = 1;
                Gvar.var_397 = 0;
                Adap.DSPLAY(162);
            }
            if (Gvar.var_140 == 7) {
                Gvar.var_140 = 6;
            }
            await Func.AutoDraw(10);
            if (Gvar.equip_disc[320] == 1) {
                Adap.DSPLAY(163);
                await Func.setMessage("しかし、ﾒﾀﾘｶのDISCのおかげで", "磁力を解除できた。", 7, true, false, false);
                Gvar.var_140 = 0;
            }
            if (Gvar.var_140 >= 1) {
                Gvar.var_2464 = Gvar.var_140;
                await Func.func542(); // バステト女神の罠を蹈んで磁力化した際の処理
                Gvar.var_2464 = 0;
            }
        }
        // No = 19 ラクガキの罠を踏んだ時の動作処理
        if (Gvar.var_81[Gvar.var_2442][0] == 19) {
            Gvar.var_1845 = 0;
            Gvar.var_2465 = 1;
            await Func.func556();
            Gvar.var_1845 = 0;
            Gvar.var_2465 = 0;
            if (Gvar.var_1731 == 0) {
                await Func.setMessage("", "「LUCKY LAND COMMUNICATIONS」", 7, false, false, false);
                await Func.AutoDraw(10);
                Gvar.var_81[Gvar.var_2442][3] = 0;
                Gvar.var_108 = 0;
                Gvar.var_80[Gvar.var_66][Gvar.var_67] = 0;
                Gvar.var_81[Gvar.var_2442][1] = 0;
                Gvar.var_81[Gvar.var_2442][2] = 0;
                return;
            }
            await Func.setMessage("", "", 7, true, false, false);
            Adap.DSPLAY(173);
            await Func.setMessage("    このラクガキを見て    うしろを", "    ふり向いた時    おまえらは", 7, true, false, false);
            await Func.setMessage("", "                      死ぬ", 7, false, false, false);
            Adap.DSPLAY(173);
            Adap.DSPLAY(178);
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_594 = 1;
            for (let cnt2 = 0; cnt2 < 40; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_594 = Gvar.var_594 + 1;
                Gvar.var_198 = 1; // メッセージウィンドウ開く
                Gvar.var_300 = 0;
            }
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_594 = 0;
            await Func.AutoDraw(11);
            Gvar.var_80[Gvar.var_66][Gvar.var_67] = 0;
            Gvar.var_81[Gvar.var_2442][1] = 0;
            Gvar.var_81[Gvar.var_2442][2] = 0;
            return;
        }
        // No = 20 エコーズACT2(ドヒュウ)の罠を踏んだ時の動作処理
        if (Gvar.var_81[Gvar.var_2442][0] == 20) {
            Gvar.var_81[Gvar.var_2442][3] = 1;
            await Func.AutoDraw(10);
            await Func.setMessage("", "地面に「ドヒュｩウ」と書かれていた！", 7, false, false, false);
            await Func.AutoDraw(10);
            await Func.func529();
            Gvar.var_81[Gvar.var_2442][3] = 0;
        }
        // No = 21 エンプレスの罠を踏んだ時の動作処理
        if (Gvar.var_81[Gvar.var_2442][0] == 21) {
            Gvar.var_81[Gvar.var_2442][3] = 1;
            Gvar.var_108 = 1;
            Adap.DSPLAY(173);
            await Func.setMessage("", "「チュミミ～～～ン！」", 7, false, false, false);
            await Func.AutoDraw(10);
            Adap.DSPLAY(173);
            await Func.setMessage("ｴﾝﾌﾟﾚｽ「ﾃﾞｨｱﾎﾞﾛはここよッ！", "      ここにいるわよォ―――ッ」", 7, true, false, false);
            await Func.AutoDraw(3);
            Gvar.var_108 = 0;
            Gvar.var_390 = 1;
            for (let cnt2 = 0; cnt2 < Gvar.var_97; ++cnt2) {
                Gvar.var_83[Gvar.var_390].Var12 = 0;
                Gvar.var_390 = Gvar.var_390 + 1;
            }
            Gvar.var_81[Gvar.var_2442][3] = 0;
            await Func.setMessage("フロアの敵が全員 目を覚ました！", "", 7, false, false, false);
            await Func.AutoDraw(10);
        }
        // No = 22 ハイウェイ・スターの罠を踏んだ時の動作処理
        if (Gvar.var_81[Gvar.var_2442][0] == 22) {
            Gvar.var_108 = 1;
            await Func.setMessage("", "", 7, false, false, false);
            Adap.DSPLAY(161);
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1481 = 1;
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1481++;
            }
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_1481 = 0;
            if (Gvar.equip_disc[352] == 0) {
                await Func.setMessage("養分を吸い取られて、", "お腹がとても減ってしまった！", 7, false, false, false);
                Adap.DSPLAY(129);
                Gvar.var_350 = Gvar.var_350 - 20;
                if (Gvar.var_350 <= 0) {
                    Gvar.var_350 = 0;
                }
            }
            if (Gvar.equip_disc[352] == 1) {
                await Func.setMessage("しかし装備DISCの効果によって", "腹ヘリを防いだ！", 7, false, false, false);
            }
            await Func.AutoDraw(10);
            Gvar.var_108 = 0;
        }
        // No = 23 ワイアードの罠を踏んだ時の動作処理
        if (Gvar.var_81[Gvar.var_2442][0] == 23) {
            if (Gvar.shageki_disc_id == 415) { // Ver0.1401にて修正。414 → 415 タスクact1へ変更。
                Gvar.var_1530 = 1;
                Gvar.var_81[Gvar.var_2442][3] = 1;
                Gvar.var_108 = 1;
                Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
                Gvar.var_1529 = 1;
                await Func.AutoDraw(3);
                await Func.setMessage("", "「奪うのは！」", 7, true, false, false);
                await Func.setMessage("「ジオシュッターを先に殺してからで", "  いいって事だァァ―――――――ッ」", 7, true, false, false);
                Adap.DSPLAY(174);
                Gvar.var_774 = 160;
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_774 = Gvar.var_774 - 20;
                    Gvar.var_374 = 1;
                    Gvar.var_108 = 0;
                    Gvar.var_1529++;
                }
                Gvar.var_1529 = 0;
                Gvar.var_2466 = 0;
                Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
                await Func.AutoDraw(20);
                Gvar.var_374 = 0;
                Gvar.var_81[Gvar.var_2442][3] = 0;
                Gvar.var_1530 = 0;
                await Func.func499(); // ダンジョン動作処理?
                Gvar.var_382 = 1;
                return;
            }
            Gvar.var_2467 = 0;
            if (Gvar.var_224 == 0) {
                await Func.setMessage("", "しかし何も起こらなかった…", 7, false, false, false);
                return;
            }
            Gvar.var_1531 = 0;
            if (Gvar.var_1531 == 0) {
                for (let cnt3 = 0; cnt3 < 100; ++cnt3) {
                    Gvar.var_2468 = Adap.rnd(Gvar.var_224);
                    Gvar.var_2468++;
                    if (Gvar.var_476[Gvar.var_2468] == 0 && Gvar.var_477[Gvar.var_2468] == 0 && Gvar.var_478[Gvar.var_2468] == 0 && Gvar.var_479[Gvar.var_2468] == 0) {
                        Gvar.var_1531 = Gvar.var_2468;
                        break;
                    }
                }
            }
            Gvar.belongings_item_list = Gvar.var_233[Gvar.var_1531].Var0;
            Gvar.disc_rarity = Gvar.var_233[Gvar.var_1531].Var13;
            Gvar.var_2459 = Gvar.var_233[Gvar.var_1531].Var6;
            await Func.func492(); // アイテムリスト呼び出し
            Gvar.var_2469 = Gvar.item_name;
            Gvar.var_300 = 0;
            await Func.setMessage("", tf("{0}を釣られた！", Gvar.var_2469), 7, false, false, false);
            if (Gvar.var_1531 == 0) {
                await Func.setMessage("", "しかし何も起こらなかった…", 7, false, false, false);
            }
            if (Gvar.var_1531 == 0) {
                return;
            }
            Gvar.var_81[Gvar.var_2442][3] = 1;
            Gvar.var_108 = 1;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1529 = 1;
            await Func.AutoDraw(3);
            Adap.DSPLAY(174);
            Gvar.var_774 = 160;
            for (let cnt2 = 0; cnt2 < 8; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_774 = Gvar.var_774 - 20;
                Gvar.var_1529++;
            }
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_1529 = 0;
            Gvar.var_108 = 0;
            Gvar.var_81[Gvar.var_2442][3] = 0;
            Gvar.var_2470 = 0;
            for (let cnt2 = 0; cnt2 < 500; ++cnt2) {
                Gvar.var_1550 = Adap.rnd(Gvar.var_33);
                Gvar.var_230 = Adap.rnd(Gvar.var_34);
                if (Gvar.var_71[Gvar.var_1550][Gvar.var_230] != 0 && Gvar.var_71[Gvar.var_1550][Gvar.var_230] != Gvar.var_201 && Gvar.var_71[Gvar.var_1550][Gvar.var_230] <= 12 && Gvar.var_77[Gvar.var_1550][Gvar.var_230] == 0 && Gvar.var_73[Gvar.var_1550][Gvar.var_230] == 0 && Gvar.var_72[Gvar.var_1550][Gvar.var_230] == 0 && Gvar.var_80[Gvar.var_1550][Gvar.var_230] == 0) {
                    Gvar.var_2470 = 1;
                    break;
                }
                // 幻覚の迷宮
                if (Gvar.special_floor == 8 && Gvar.var_71[Gvar.var_1550][Gvar.var_230] == 14 && Gvar.var_77[Gvar.var_1550][Gvar.var_230] == 0 && Gvar.var_73[Gvar.var_1550][Gvar.var_230] == 0 && Gvar.var_80[Gvar.var_1550][Gvar.var_230] == 0) {
                    Gvar.var_2470 = 1;
                    break;
                }
            }
            if (Gvar.var_2470 == 0) {
                for (let cnt3 = 0; cnt3 < 500; ++cnt3) {
                    Gvar.var_1550 = Adap.rnd(Gvar.var_33);
                    Gvar.var_230 = Adap.rnd(Gvar.var_34);
                    if (Gvar.var_71[Gvar.var_1550][Gvar.var_230] != 0 && Gvar.var_71[Gvar.var_1550][Gvar.var_230] <= 12 && Gvar.var_77[Gvar.var_1550][Gvar.var_230] == 0 && Gvar.var_73[Gvar.var_1550][Gvar.var_230] == 0 && Gvar.var_72[Gvar.var_1550][Gvar.var_230] == 0 && Gvar.var_80[Gvar.var_1550][Gvar.var_230] == 0) {
                        break;
                    }
                    // 幻覚の迷宮
                    if (Gvar.special_floor == 8 && Gvar.var_71[Gvar.var_1550][Gvar.var_230] == 14 && Gvar.var_77[Gvar.var_1550][Gvar.var_230] == 0 && Gvar.var_73[Gvar.var_1550][Gvar.var_230] == 0 && Gvar.var_80[Gvar.var_1550][Gvar.var_230] == 0) {
                        Gvar.var_2470 = 1;
                        break;
                    }
                }
            }
            Gvar.var_488 = Gvar.var_233[Gvar.var_1531].Var0;
            if (Gvar.var_233[Gvar.var_1531].Var0 < 800 || Gvar.var_233[Gvar.var_1531].Var0 >= 900) {
                Gvar.var_2458 = 0;
            }
            if (Gvar.var_233[Gvar.var_1531].Var0 >= 800 && Gvar.var_233[Gvar.var_1531].Var0 < 900) {
                Gvar.var_2458 = 1;
                if (Gvar.equip_disc[119] == 1 && Gvar.var_2458 == 1) {
                    await Func.setMessage("破壊されそうになったが", "柔らかくしていて平気だった。", 7, true, false, false);
                    await Func.AutoDraw(10);
                    Gvar.var_2458 = 0;
                }
            }
            if (Gvar.var_2458 == 0) {
                Gvar.var_225 = Gvar.var_1531;
                Gvar.var_448 = Gvar.var_1550;
                Gvar.var_450 = Gvar.var_230;
                await Func.func724();
                Gvar.var_77[Gvar.var_448][Gvar.var_450] = Gvar.var_854;
                Gvar.var_78[Gvar.var_854].Var0 = Gvar.var_233[Gvar.var_225].Var0;
                Gvar.var_78[Gvar.var_854].Var1 = Gvar.var_448;
                Gvar.var_78[Gvar.var_854].Var2 = Gvar.var_450;
                Gvar.var_78[Gvar.var_854].Var3 = Gvar.var_233[Gvar.var_225].Var3;
                Gvar.var_78[Gvar.var_854].Var4 = Gvar.var_233[Gvar.var_225].Var4;
                Gvar.var_78[Gvar.var_854].Var5 = Gvar.var_233[Gvar.var_225].Var5;
                Gvar.var_78[Gvar.var_854].Var6 = Gvar.var_233[Gvar.var_225].Var6;
                Gvar.var_78[Gvar.var_854].Var7 = Gvar.var_233[Gvar.var_225].Var7;
                Gvar.var_78[Gvar.var_854].Var8 = Gvar.var_233[Gvar.var_225].Var8;
                Gvar.var_78[Gvar.var_854].Var9 = Gvar.var_71[Gvar.var_448][Gvar.var_450];
                Gvar.var_78[Gvar.var_854].Var10 = 0;
                Gvar.var_78[Gvar.var_854].Var11 = Gvar.var_233[Gvar.var_225].Var11;
                Gvar.var_78[Gvar.var_854].Var12 = Gvar.var_233[Gvar.var_225].Var12;
                Gvar.var_78[Gvar.var_854].Var13 = Gvar.var_233[Gvar.var_225].Var13;
                Gvar.var_78[Gvar.var_854].Var14 = Gvar.var_233[Gvar.var_225].Var14;
                Gvar.var_78[Gvar.var_854].Var15 = Gvar.var_233[Gvar.var_225].Var15;
                Gvar.var_78[Gvar.var_854].Var16 = Gvar.var_233[Gvar.var_225].Var16;
                Gvar.var_78[Gvar.var_854].Var17 = Gvar.var_233[Gvar.var_225].Var17;
                Gvar.var_78[Gvar.var_854].Var18 = Gvar.var_233[Gvar.var_225].Var18;
                Gvar.var_78[Gvar.var_854].Var19 = Gvar.var_233[Gvar.var_225].Var19;
                Gvar.var_78[Gvar.var_854].Var20 = Gvar.var_233[Gvar.var_225].Var20;
                Gvar.var_78[Gvar.var_854].Var21 = Gvar.var_233[Gvar.var_225].Var21;
                Gvar.var_78[Gvar.var_854].Var22 = Gvar.var_233[Gvar.var_225].Var22;
                Gvar.var_78[Gvar.var_854].Var23 = Gvar.var_233[Gvar.var_225].Var23;
                Gvar.var_78[Gvar.var_854].Var24 = Gvar.var_233[Gvar.var_225].Var24;
                Gvar.var_78[Gvar.var_854].Var25 = Gvar.var_233[Gvar.var_225].Var25;
                Gvar.var_78[Gvar.var_854].Var26 = Gvar.var_233[Gvar.var_225].Var26;
                Gvar.var_78[Gvar.var_854].Var27 = Gvar.var_233[Gvar.var_225].Var27;
                Gvar.var_78[Gvar.var_854].Var28 = Gvar.var_233[Gvar.var_225].Var28;
                Gvar.var_78[Gvar.var_854].Var29 = Gvar.var_233[Gvar.var_225].Var29;
                Gvar.belongings_item_list = Gvar.var_1846;
                Gvar.var_321 = Gvar.var_854;
                await Func.func433(); // アイテム配列(所持アイテム)初期化関数
                await Func.func540();
                await Func.func018();
                await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
                return;
            }
            if (Gvar.var_2458 == 1) {
                if (Gvar.var_233[Gvar.var_1531].Var0 != 806 && Gvar.var_233[Gvar.var_1531].Var0 != 851 && Gvar.var_233[Gvar.var_1531].Var0 != 852 && Gvar.var_233[Gvar.var_1531].Var8 >= 1) {
                    Gvar.var_2467 = 1;
                    Gvar.var_1905 = Gvar.var_233[Gvar.var_1531].Var8;
                    Gvar.var_1910 = 1;
                    for (let cnt4 = 0; cnt4 < Gvar.var_1905; ++cnt4) {
                        Gvar.var_309 = Gvar.var_66;
                        Gvar.var_310 = Gvar.var_67;
                        Gvar.var_66 = Gvar.var_1550;
                        Gvar.var_67 = Gvar.var_230;
                        await Func.func405();
                        Gvar.var_66 = Gvar.var_309;
                        Gvar.var_67 = Gvar.var_310;
                        if (Gvar.var_446 == 0) {
                            break;
                        }
                        await Func.func724();
                        Gvar.var_77[Gvar.var_448][Gvar.var_450] = Gvar.var_854;
                        Gvar.var_78[Gvar.var_854].Var0 = Gvar.var_486[Gvar.var_2459][Gvar.var_1910][0];
                        Gvar.var_78[Gvar.var_854].Var1 = Gvar.var_448;
                        Gvar.var_78[Gvar.var_854].Var2 = Gvar.var_450;
                        Gvar.var_78[Gvar.var_854].Var3 = Gvar.var_486[Gvar.var_2459][Gvar.var_1910][3];
                        Gvar.var_78[Gvar.var_854].Var4 = Gvar.var_486[Gvar.var_2459][Gvar.var_1910][4];
                        Gvar.var_78[Gvar.var_854].Var5 = Gvar.var_486[Gvar.var_2459][Gvar.var_1910][5];
                        Gvar.var_78[Gvar.var_854].Var6 = Gvar.var_486[Gvar.var_2459][Gvar.var_1910][6];
                        Gvar.var_78[Gvar.var_854].Var7 = Gvar.var_486[Gvar.var_2459][Gvar.var_1910][7];
                        Gvar.var_78[Gvar.var_854].Var8 = Gvar.var_486[Gvar.var_2459][Gvar.var_1910][8];
                        Gvar.var_78[Gvar.var_854].Var9 = Gvar.var_71[Gvar.var_448][Gvar.var_450];
                        Gvar.var_78[Gvar.var_854].Var10 = 0;
                        Gvar.var_78[Gvar.var_854].Var11 = Gvar.var_486[Gvar.var_2459][Gvar.var_1910][11];
                        Gvar.var_78[Gvar.var_854].Var12 = Gvar.var_486[Gvar.var_2459][Gvar.var_1910][12];
                        Gvar.var_78[Gvar.var_854].Var13 = Gvar.var_486[Gvar.var_2459][Gvar.var_1910][13];
                        Gvar.var_78[Gvar.var_854].Var14 = Gvar.var_486[Gvar.var_2459][Gvar.var_1910][14];
                        Gvar.var_78[Gvar.var_854].Var15 = Gvar.var_486[Gvar.var_2459][Gvar.var_1910][15];
                        Gvar.var_78[Gvar.var_854].Var16 = Gvar.var_486[Gvar.var_2459][Gvar.var_1910][16];
                        Gvar.var_78[Gvar.var_854].Var17 = Gvar.var_486[Gvar.var_2459][Gvar.var_1910][17];
                        Gvar.var_78[Gvar.var_854].Var18 = Gvar.var_486[Gvar.var_2459][Gvar.var_1910][18];
                        Gvar.var_78[Gvar.var_854].Var19 = Gvar.var_486[Gvar.var_2459][Gvar.var_1910][19];
                        Gvar.var_78[Gvar.var_854].Var20 = Gvar.var_486[Gvar.var_2459][Gvar.var_1910][20];
                        Gvar.var_78[Gvar.var_854].Var21 = Gvar.var_486[Gvar.var_2459][Gvar.var_1910][21];
                        Gvar.var_78[Gvar.var_854].Var22 = Gvar.var_486[Gvar.var_2459][Gvar.var_1910][22];
                        Gvar.var_78[Gvar.var_854].Var23 = Gvar.var_486[Gvar.var_2459][Gvar.var_1910][23];
                        Gvar.var_78[Gvar.var_854].Var24 = Gvar.var_486[Gvar.var_2459][Gvar.var_1910][24];
                        Gvar.var_78[Gvar.var_854].Var25 = Gvar.var_486[Gvar.var_2459][Gvar.var_1910][25];
                        Gvar.var_78[Gvar.var_854].Var26 = Gvar.var_486[Gvar.var_2459][Gvar.var_1910][26];
                        Gvar.var_78[Gvar.var_854].Var27 = Gvar.var_486[Gvar.var_2459][Gvar.var_1910][27];
                        Gvar.var_78[Gvar.var_854].Var28 = Gvar.var_486[Gvar.var_2459][Gvar.var_1910][28];
                        Gvar.var_78[Gvar.var_854].Var29 = Gvar.var_486[Gvar.var_2459][Gvar.var_1910][29];
                        Gvar.var_1910++;
                    }
                }
                if (Gvar.var_233[Gvar.var_1531].Var0 == 806) {
                    Gvar.var_1911 = Gvar.var_233[Gvar.var_1531].Var7 - Gvar.var_233[Gvar.var_1531].Var8;
                    if (Gvar.var_1911 >= 1) {
                        Gvar.var_2467 = 1;
                        Gvar.var_1912 = Gvar.var_673;
                        Gvar.var_1913 = 1;
                        Gvar.var_1845 = 3;
                        Gvar.var_1914 = Gvar.var_1550;
                        Gvar.var_1915 = Gvar.var_230;
                        for (let cnt5 = 0; cnt5 < Gvar.var_1911; ++cnt5) {
                            await Func.func556();
                        }
                        Gvar.var_1913 = 0;
                        Gvar.var_1845 = 0;
                        Gvar.var_673 = Gvar.var_1912;
                    }
                }
                if (Gvar.var_233[Gvar.var_1531].Var0 == 851) {
                    Gvar.var_1911 = Gvar.var_233[Gvar.var_1531].Var8;
                    if (Gvar.var_1911 >= 1) {
                        Gvar.var_2467 = 1;
                        Gvar.var_1912 = Gvar.var_673;
                        Gvar.var_1916 = Gvar.var_233[Gvar.var_1531].Var6;
                        Gvar.var_1845 = 3;
                        Gvar.var_1914 = Gvar.var_1550;
                        Gvar.var_1915 = Gvar.var_230;
                        Gvar.var_1917 = 1;
                        for (let cnt5 = 0; cnt5 < Gvar.var_1911; ++cnt5) {
                            Gvar.var_1918 = Gvar.var_486[Gvar.var_1916][Gvar.var_1917][15];
                            Gvar.var_1919 = Gvar.var_486[Gvar.var_1916][Gvar.var_1917][18];
                            if (Gvar.var_1918 != 0) {
                                await Func.func556();
                            }
                            Gvar.var_1917++;
                        }
                        Gvar.var_1918 = 0;
                        Gvar.var_1845 = 0;
                        Gvar.var_673 = Gvar.var_1912;
                    }
                }
                if (Gvar.var_233[Gvar.var_1531].Var0 == 852) {
                    Gvar.var_1911 = Gvar.var_233[Gvar.var_1531].Var7 - Gvar.var_233[Gvar.var_1531].Var8;
                    if (Gvar.var_1911 >= 1) {
                        Gvar.var_2467 = 1;
                        Gvar.var_1912 = Gvar.var_673;
                        Gvar.var_1920 = 1;
                        Gvar.var_1845 = 3;
                        Gvar.var_1914 = Gvar.var_1550;
                        Gvar.var_1915 = Gvar.var_230;
                        for (let cnt5 = 0; cnt5 < Gvar.var_1911; ++cnt5) {
                            await Func.func556();
                        }
                        Gvar.var_1920 = 0;
                        Gvar.var_1845 = 0;
                        Gvar.var_673 = Gvar.var_1912;
                    }
                }
                Gvar.var_225 = Gvar.var_1531;
                await Func.func433(); // アイテム配列(所持アイテム)初期化関数
                await Func.func540();
                await Func.func018();
                await Music.func100();
                if (Gvar.var_2467 == 1) {
                    await Func.setMessage(tf("{0}は破壊され", Gvar.var_2469), "中身をバラ撒かれた。", 7, true, false, false);
                }
                if (Gvar.var_2467 == 0) {
                    await Func.setMessage("限界なく明るくなるッ！！", "", 7, true, false, false);
                }
                Gvar.var_2467 = 0;
                await Func.AutoDraw(10);
                await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
                return;
            }
        }
        // No = 24 リンプ・ビズキットの罠を踏んだ時の動作処理
        if (Gvar.var_81[Gvar.var_2442][0] == 24) {
            Gvar.var_108 = 1;
            await Func.setMessage("透明な何者かを呼んでしまった！", "", 7, false, false, false);
            Adap.DSPLAY(170);
            await Func.AutoDraw(10);
            Gvar.var_108 = 0;
            Gvar.var_2471 = Adap.rnd(3);
            Gvar.var_2472 = 1;
            Gvar.var_1845 = 1;
            for (let cnt2 = 0; cnt2 < Gvar.var_2471 + 1; ++cnt2) {
                await Func.func556();
            }
            Gvar.var_2472 = 0;
            Gvar.var_1845 = 0;
            await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        }
        // No = 25 ネズミ捕りの罠を踏んだ時の動作処理
        if (Gvar.var_81[Gvar.var_2442][0] == 25) {
            Gvar.var_81[Gvar.var_2442][3] = 1;
            Gvar.var_108 = 1;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1541 = 1;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                if (Gvar.var_1541 == 5) {
            
                    Adap.DSPLAY(111);
                }
                Gvar.var_1541++;
            }
            Gvar.var_211 = Gvar.var_211 - 10;
            Gvar.var_208 = Gvar.var_208 + 10;
            if (Gvar.var_211 <= 0) {
                Gvar.var_211 = 0;
                Gvar.var_356 = 261;
                Gvar.var_199 = 2;
            }
            await Func.setMessage("", "10のダメージを受けた", 7, false, false, false);
            await Func.AutoDraw(5);
            Gvar.var_81[Gvar.var_2442][3] = 0;
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_1541 = 0;
            Gvar.var_2473 = 0;
            Gvar.var_2474 = 0;
            if (Gvar.kougeki_disc_id  != 0 && Gvar.bougyo_disc_id == 0) {
                await Func.func426();
                if (Gvar.var_233[Gvar.var_553].Var4 != 0) {
                    Gvar.var_2474 = 1;
                }
            }
            if (Gvar.kougeki_disc_id  == 0 && Gvar.bougyo_disc_id != 0) {
                await Func.func427();
                if (Gvar.var_233[Gvar.var_554].Var4 != 0) {
                    Gvar.var_2474 = 2;
                }
            }
            if (Gvar.kougeki_disc_id  != 0 && Gvar.bougyo_disc_id != 0) {
                await Func.func426();
                await Func.func427();
                if (Gvar.var_233[Gvar.var_553].Var4 == 0 && Gvar.var_233[Gvar.var_554].Var4 == 0) {
                    Gvar.var_2474 = 0;
                    Gvar.var_2473 = 0;
                }
                if (Gvar.var_233[Gvar.var_553].Var4 != 0 && Gvar.var_233[Gvar.var_554].Var4 == 0) {
                    Gvar.var_2474 = 1;
                }
                if (Gvar.var_233[Gvar.var_553].Var4 == 0 && Gvar.var_233[Gvar.var_554].Var4 != 0) {
                    Gvar.var_2474 = 2;
                }
                if (Gvar.var_233[Gvar.var_553].Var4 != 0 && Gvar.var_233[Gvar.var_554].Var4 != 0) {
                    Gvar.var_2475 = Adap.rnd(2);
                    if (Gvar.var_2475 == 0) {
                        Gvar.var_2474 = 1;
                    }
                    if (Gvar.var_2475 == 1) {
                        Gvar.var_2474 = 2;
                    }
                }
            }
            if (Gvar.kougeki_disc_id  == 0 && Gvar.bougyo_disc_id == 0) {
                Gvar.var_2474 = 0;
                Gvar.var_2473 = 0;
            }
            if (Gvar.var_211 <= 0) {
                Gvar.var_2474 = 0;
                Gvar.var_2473 = 0;
            }
            if (Gvar.var_2474 == 1 && Gvar.var_233[Gvar.var_553].Var12 == 2) {
                Gvar.var_2474 = 0;
                Gvar.var_2473 = 3;
            }
            if (Gvar.var_2474 == 2 && Gvar.var_233[Gvar.var_554].Var12 == 2) {
                Gvar.var_2474 = 0;
                Gvar.var_2473 = 3;
            }
            if (Gvar.var_2474 == 1) {
                await Func.func426();
                Gvar.var_233[Gvar.var_553].Var4 = Gvar.var_233[Gvar.var_553].Var4 - 1;
                Gvar.var_580 = Gvar.var_580 - 1;
                Gvar.var_894 = Gvar.var_894 - 1;
                Gvar.var_2473 = 1;
                Gvar.belongings_item_list = Gvar.kougeki_disc_id ;
                Gvar.disc_rarity = Gvar.var_233[Gvar.var_553].Var13;
                await Func.func492(); // アイテムリスト呼び出し
            }
            if (Gvar.var_2474 == 2) {
                await Func.func427();
                Gvar.var_233[Gvar.var_554].Var4 = Gvar.var_233[Gvar.var_554].Var4 - 1;
                Gvar.var_581 = Gvar.var_581 - 1;
                Gvar.var_895 = Gvar.var_895 - 1;
                Gvar.var_2473 = 1;
                Gvar.belongings_item_list = Gvar.bougyo_disc_id;
                Gvar.disc_rarity = Gvar.var_233[Gvar.var_554].Var13;
                await Func.func492(); // アイテムリスト呼び出し
            }
            if (Gvar.var_2473 == 1) {
                await Func.setMessage("スタンドが溶かされている！", "", 7, true, false, false);
                Adap.DSPLAY(164);
                await Func.setMessage(tf("{0}は", Gvar.item_name), "弱くなってしまった…", 7, true, false, false);
            }
            if (Gvar.var_2473 == 2) {
                await Func.setMessage("スタンドが溶かされそうになったが", "装備中のラットの能力で無事だった。", 7, true, false, false);
            }
            if (Gvar.var_2473 == 3) {
                await Func.setMessage("スタンドが溶かされそうになったが", "漆黒のオーラに包まれていて無事だった", 7, true, false, false);
            }
            await Func.AutoDraw(10);
            Gvar.var_108 = 0;
        }
        // No = 26 ホワイトスネイクの罠を踏んだ時の動作処理
        if (Gvar.var_81[Gvar.var_2442][0] == 26) {
            Gvar.var_108 = 1;
            Gvar.var_81[Gvar.var_2442][3] = 1;
            await Func.setMessage("", "", 7, false, false, false);
            Gvar.var_2463 = 0;
            if (Gvar.kougeki_disc_id  == 0 && Gvar.bougyo_disc_id == 0 && Gvar.nouryoku_disc_id == 0 && Gvar.shageki_disc_id != 0) {
                Gvar.var_2463 = 99;
            }
            if (Gvar.kougeki_disc_id  == 0 && Gvar.bougyo_disc_id == 0 && Gvar.nouryoku_disc_id == 0 && Gvar.shageki_disc_id == 0) {
                Gvar.var_2463 = 1;
            }
            if (Gvar.shageki_disc_id == 401) {
                Gvar.var_2463 = 99;
            }
            if (Gvar.equip_disc[361] == 1) {
                Gvar.var_2463 = 2;
            }
    
            Adap.DSPLAY(103); // 殴られた時の効果音
            if (Gvar.var_2463 == 0) {
                for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                    Gvar.var_1262 = 1;
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_1262 = 2;
                    await Func.func337(); // メッセージ表示処理(自動)
                }
            }
            if (Gvar.var_2463 == 99) {
                for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                    Gvar.var_1262 = 3;
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_1262 = 4;
                    await Func.func337(); // メッセージ表示処理(自動)
                }
            }
            if (Gvar.var_2463 != 0 && Gvar.var_2463 != 99) {
                await Func.AutoDraw(5);
            }
            Gvar.var_108 = 0;
            if (Gvar.shageki_disc_id == 401 && Gvar.var_2463 == 99) {
                if (Gvar.receive_bgm_id == 401) {
                    Gvar.belongings_item_list = 401;
                    await Music.func106(); // BGM選曲呼び出し割り振り
                }
                await Func.setMessage("ﾌｰ･ﾌｧｲﾀｰｽﾞのDISCを外された！", "", 7, false, false, false);
                await Func.AutoDraw(10);
                Gvar.var_1262 = 0;
                Gvar.var_81[Gvar.var_2442][3] = 0;
                Gvar.var_479 = Adap.dim(40);
                Gvar.var_250 = 0;
                Gvar.shageki_disc_id = 0;
                await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
                return;
            }
            if (Gvar.var_2463 == 0 || Gvar.var_2463 == 99) {
                Gvar.belongings_item_list = Gvar.receive_bgm_id;
                await Music.func106(); // BGM選曲呼び出し割り振り
            }
            if (Gvar.var_2463 == 0) {
                await Func.setMessage("装備が全て外れてしまった！", "", 7, false, false, false);
            }
            if (Gvar.var_2463 == 1) {
                await Func.setMessage("しかし何も起こらなかった。", "", 7, false, false, false);
            }
            if (Gvar.var_2463 == 2) {
                await Func.setMessage("しかし装備DISCの効果によって", "DISCを抜き取られなかった。", 7, false, false, false);
            }
            if (Gvar.var_2463 == 99) {
                await Func.setMessage("装備が全て外れてしまった！", "", 7, false, false, false);
            }
            await Func.AutoDraw(10);
            Gvar.var_1262 = 0;
            Gvar.var_81[Gvar.var_2442][3] = 0;
            if (Gvar.var_2463 != 0 && Gvar.var_2463 != 99) {
                return;
            }
            Gvar.var_476 = Adap.dim(40);
            Gvar.var_580 = Gvar.var_580 - Gvar.var_894;
            Gvar.var_894 = 0;
            Gvar.kougeki_disc_id  = 0;
            Gvar.var_477 = Adap.dim(40);
            Gvar.var_581 = Gvar.var_581 - Gvar.var_895;
            Gvar.var_895 = 0;
            Gvar.bougyo_disc_id = 0;
            Gvar.var_479 = Adap.dim(40);
            Gvar.var_250 = 0;
            Gvar.shageki_disc_id = 0;
            Gvar.var_478 = Adap.dim(40);
            Gvar.nouryoku_disc_id = 0;
            await Func.func494();
            Gvar.var_896 = 0;
            Gvar.var_897 = 0;
            Gvar.var_898 = 0;
            Gvar.var_999 = 0;
            await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        }
        // No = 27 没罠 マリリンマンソンの罠を踏んだ時の動作処理
        if (Gvar.var_81[Gvar.var_2442][0] == 27) {
            Gvar.var_81[Gvar.var_2442][3] = 1;
            Gvar.var_108 = 1;
            await Func.AutoDraw(10);
            if (Gvar.var_224 == 0) {
                await Func.setMessage("しかし何も起こらなかった…", "", 7, false, false, false);
                await Func.AutoDraw(10);
                Gvar.var_81[Gvar.var_2442][3] = 0;
                Gvar.var_108 = 0;
                return;
            }
            Gvar.var_1845 = 1;
            Gvar.var_1470 = 1;
            await Func.func556();
            Gvar.var_1845 = 0;
            Gvar.var_1470 = 0;
            if (Gvar.var_2110 == 0) {
                await Func.setMessage("しかし何も起こらなかった…", "", 7, false, false, false);
                await Func.AutoDraw(10);
                Gvar.var_81[Gvar.var_2442][3] = 0;
                Gvar.var_108 = 0;
                return;
            }
            for (let cnt2 = 0; cnt2 < 3; ++cnt2) {
                Gvar.var_1845 = 1;
                Gvar.var_1470 = 1;
                await Func.func556();
                Gvar.var_1845 = 0;
                Gvar.var_1470 = 0;
            }
            await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
            Gvar.var_480 = 1;
            Gvar.payment_amount = 0;
            for (let cnt2 = 0; cnt2 < Gvar.var_224; ++cnt2) {
                Gvar.belongings_item_list = Gvar.var_233[Gvar.var_480].Var0;
                await Func.func492(); // アイテムリスト呼び出し
                Gvar.var_2476 = Math.floor(Gvar.buying_price / 2);
                Gvar.var_482 = 0;
                Gvar.var_482 = (Gvar.var_233[Gvar.var_480].Var3 + Gvar.var_233[Gvar.var_480].Var4) * 50;
                if (Gvar.var_233[Gvar.var_480].Var19 > 1) {
                    Gvar.var_482 = Gvar.var_233[Gvar.var_480].Var19 * 500 + Gvar.var_482;
                }
                Gvar.payment_amount = Gvar.payment_amount + Gvar.var_2476 + Gvar.var_482;
                if (Gvar.var_233[Gvar.var_480].Var0 >= 800 && Gvar.var_233[Gvar.var_480].Var0 < 900) {
                    Gvar.var_484 = 1;
                    Gvar.var_485 = Gvar.var_233[Gvar.var_480].Var6;
                    for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                        if (Gvar.var_486[Gvar.var_485][Gvar.var_484][0] > 0) {
                            Gvar.belongings_item_list = Gvar.var_486[Gvar.var_485][Gvar.var_484][0];
                            await Func.func492(); // アイテムリスト呼び出し
                            Gvar.var_2476 = Math.floor(Gvar.buying_price / 2);
                            Gvar.var_482 = 0;
                            Gvar.var_482 = (Gvar.var_486[Gvar.var_485][Gvar.var_484][3] + Gvar.var_486[Gvar.var_485][Gvar.var_484][4]) * 50;
                            if (Gvar.var_486[Gvar.var_485][Gvar.var_484][19] > 1) {
                                Gvar.var_482 = Gvar.var_486[Gvar.var_485][Gvar.var_484][19] * 500 + Gvar.var_482;
                            }
                            Gvar.payment_amount = Gvar.payment_amount + Gvar.var_2476 + Gvar.var_482;
                        }
                        Gvar.var_484 = Gvar.var_484 + 1;
                    }
                }
                Gvar.var_480 = Gvar.var_480 + 1;
            }
            await Func.setMessage("オマエがコノダンジョンで", "カッテに拾ッタアイテムの価値ハ！", 7, true, false, false);
            await Func.AutoDraw(2);
            await Func.setMessage("合計で", tf("{0} G！", Gvar.payment_amount), 7, true, false, false);
            await Func.AutoDraw(2);
            await Func.setMessage("スベテ支払ってモラウ！", "", 7, true, false, false);
            await Func.AutoDraw(2);
            Gvar.var_169 = Gvar.payment_amount;
            await Func.AutoDraw(10);
            Gvar.var_80[Gvar.var_66][Gvar.var_67] = 0;
            Gvar.var_81[Gvar.var_2442][0] = 0;
            Gvar.var_81[Gvar.var_2442][1] = 0;
            Gvar.var_81[Gvar.var_2442][2] = 0;
            Gvar.var_81[Gvar.var_2442][3] = 0;
            Gvar.var_108 = 0;
        }
        // No = 28 オエコモバの罠を踏んだ時の動作処理
        if (Gvar.var_81[Gvar.var_2442][0] == 28) {
            Gvar.var_81[Gvar.var_2442][3] = 1;
            await Func.AutoDraw(3);
            if (Gvar.var_224 == 0) {
                await Func.AutoDraw(7);
                await Func.setMessage("", "しかし何も起こらなかった…", 7, false, false, false);
                await Func.AutoDraw(10);
                Gvar.var_81[Gvar.var_2442][3] = 0;
                Gvar.var_108 = 0;
                return;
            }
            Gvar.var_474 = 0;
            for (let cnt2 = 0; cnt2 < 100; ++cnt2) {
                Gvar.var_475 = Adap.rnd(Gvar.var_224);
                Gvar.var_475 = Gvar.var_475 + 1;
                if (Gvar.var_233[Gvar.var_475].Var0 >= 500 && Gvar.var_233[Gvar.var_475].Var0 < 800 && Gvar.var_233[Gvar.var_475].Var15 == 0) {
                    Gvar.var_474 = 1;
                    break;
                }
                if (Gvar.var_233[Gvar.var_475].Var0 >= 900 && Gvar.var_233[Gvar.var_475].Var15 == 0) {
                    Gvar.var_474 = 1;
                    break;
                }
            }
            if (Gvar.var_474 == 1) {
                Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
                Gvar.var_1312 = 1;
                for (let cnt3 = 0; cnt3 < 30; ++cnt3) {
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_1312++;
                    if (Gvar.var_1312 == 11) {
                        Gvar.var_108 = 1;
                
                        Adap.DSPLAY(181);
                    }
                }
                Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
                Gvar.var_1312 = 0;
            }
            if (Gvar.var_474 == 1) {
                Gvar.var_233[Gvar.var_475].Var15 = 2;
                await Func.setMessage("", "何かが爆弾にされた！", 7, false, false, false);
            }
            if (Gvar.var_474 == 0) {
                await Func.AutoDraw(7);
                await Func.setMessage("", "しかし何も起こらなかった…", 7, false, false, false);
                await Func.AutoDraw(10);
                Gvar.var_81[Gvar.var_2442][3] = 0;
                Gvar.var_108 = 0;
                return;
            }
            await Func.AutoDraw(10);
            Gvar.var_81[Gvar.var_2442][3] = 0;
            Gvar.var_108 = 0;
            await Func.func540();
            return;
        }
        // No = 30 血の槍の罠を踏んだ時の動作処理
        if (Gvar.var_81[Gvar.var_2442][0] == 30) {
            Gvar.var_2455 = 20;
            Gvar.var_209 = 20;
            Gvar.var_1396 = Gvar.var_66;
            Gvar.var_1397 = Gvar.var_67;
            Gvar.var_81[Gvar.var_2442][3] = 1;
            Gvar.var_108 = 1;
            Gvar.var_747 = 1;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Adap.DSPLAY(104);
            }
            Gvar.var_108 = 0;
            Gvar.var_81[Gvar.var_2442][3] = 0;
            Gvar.var_211 = Gvar.var_211 - Gvar.var_2455;
            Gvar.var_208 = Gvar.var_208 + Gvar.var_2455;
            if (Gvar.var_211 <= 0) {
                Gvar.var_211 = 0;
                Gvar.var_356 = 282;
                Gvar.var_199 = 2;
            }
            await Func.setMessage("", tf("{0}のダメージをうけた！", Gvar.var_2455), 7, false, false, false);
            await Func.AutoDraw(11);
        }
        // No = 36 スピード・キングの罠を踏んだ時の動作処理（気絶）
        if (Gvar.var_81[Gvar.var_2442][0] == 36) {
            await Func.func050();
            Gvar.var_108 = 1;
            Gvar.var_81[Gvar.var_2442][3] = 1;
            Gvar.var_283 = "";
            await Func.func050();
            Gvar.var_290 = 0;
            Adap.DSPLAY(161);
            Gvar.var_310 = 1;
            // 火災アニメーション
            Gvar.var_1759 = 1;
            Gvar.var_1760 = 0;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func354();
                Gvar.var_1760++;
            }
            await Func.setMessage("「あああ！？何！？", "　あ･･･熱い･･･」", 7, false, false, false);
            await Func.func050();
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            Adap.DSPLAY(123);
            // HP減少ループ
            Gvar.var_2712 = 1;
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                Gvar.var_1759 = 2;
                await Func.func354();
                Gvar.var_236 = Gvar.var_236 - Gvar.var_2712;
                if (Gvar.var_236 <= 0) { Gvar.var_236 = 1; }
                await Func.func354();
                Gvar.var_236 = Gvar.var_236 - Gvar.var_2712;
                if (Gvar.var_236 <= 0) { Gvar.var_236 = 1; }
                Gvar.var_1759 = 3;
                await Func.func354();
                Gvar.var_236 = Gvar.var_236 - Gvar.var_2712;
                if (Gvar.var_236 <= 0) { Gvar.var_236 = 1; }
                await Func.func354();
                Gvar.var_236 = Gvar.var_236 - Gvar.var_2712;
                if (Gvar.var_236 <= 0) { Gvar.var_236 = 1; }
            }
            Gvar.var_1759 = 0;
            Gvar.var_81[Gvar.var_2442][3] = 0;
            // 気絶メッセージ
            Gvar.var_283 = Gvar.var_286;
            Gvar.var_284 = Gvar.var_287;
            Gvar.var_286 = "ﾃﾞｨｱﾎﾞﾛは気絶した！";
            Gvar.var_287 = "";
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            await Func.func050();
            await Func.func053();
            await Func.func358();
            // 気絶状態設定
            Gvar.var_108 = 0;
            Gvar.var_310 = 0;
            Gvar.var_1704 = 0;
            Gvar.var_1397 = 0;
            Gvar.var_219 = 1; // 行動不能状態
            Gvar.var_223 = 1;
            Gvar.var_290 = 0;
            Gvar.var_529 = 1; // 気絶フラグON
            Gvar.var_1760 = 0;
            Adap.DSPLAY(132);
        }
        // No = 77 ディアボロが仕掛けた罠を踏んだ時の動作処理
        if (Gvar.var_81[Gvar.var_2442][0] == 77) {
            await Func.setMessage("", tf("{0}がいるぞ。", Gvar.var_889), 7, false, false, false);
            await Func.AutoDraw(10);
        }
        if (Gvar.var_81[Gvar.var_2442][0] == 78) {
            await Func.setMessage("", "ｿﾌﾄ･ﾏｼｰﾝを潜ませてあるぞ。", 7, false, false, false);
            await Func.AutoDraw(10);
        }
        if (Gvar.var_81[Gvar.var_2442][0] == 79) {
            await Func.setMessage("", "タスクの穴が開いているぞ。", 7, false, false, false);
            await Func.AutoDraw(10);
        }
        if (Gvar.var_81[Gvar.var_2442][0] == 80) {
            await Func.setMessage("", "砂のDIOが潜んでいるぞ。", 7, false, false, false);
            await Func.AutoDraw(10);
        }
        if (Gvar.var_81[Gvar.var_2442][0] == 81) {
            await Func.setMessage("", "ｷｯｽのｼｰﾙが貼ってあるぞ。", 7, false, false, false);
            await Func.AutoDraw(10);
        }
        if (Gvar.var_81[Gvar.var_2442][0] == 82) {
            await Func.setMessage("", "ﾏｼﾞｼｬﾝｽﾞﾚｯﾄﾞが作った穴があるぞ。", 7, false, false, false);
            await Func.AutoDraw(10);
        }
        if (Gvar.var_81[Gvar.var_2442][0] == 83) {
            Gvar.var_81[Gvar.var_2442][3] = 1;
            Gvar.var_108 = 1;
            await Func.AutoDraw(10);
            await Func.setMessage("", "波紋で体が焼かれている！", 7, false, false, false);
            await Func.AutoDraw(11);
            Gvar.var_108 = 0;
            Gvar.var_81[Gvar.var_2442][3] = 0;
            Gvar.var_80[Gvar.var_66][Gvar.var_67] = 0;
            Gvar.var_81[Gvar.var_2442][0] = 0;
            Gvar.var_81[Gvar.var_2442][1] = 0;
            Gvar.var_81[Gvar.var_2442][2] = 0;
            Gvar.var_134 = 1;
            if (Gvar.nouryoku_disc_id == 116 || Gvar.var_125 >= 1) {
                Gvar.var_134 = 0;
                await Func.setMessage("しかし、", "波紋に強くなっていて平気だった。", 7, true, false, false);
                await Func.AutoDraw(11);
            }
        }
        if (Gvar.var_81[Gvar.var_2442][0] == 84) {
            await Func.setMessage("", "ここには『上り階段の記憶』があるぞ。", 7, false, false, false);
            await Func.AutoDraw(10);
            Gvar.var_370 = 1;
        }
        if (Gvar.var_81[Gvar.var_2442][0] == 85) {
            await Func.AutoDraw(10);
            await Func.setMessage("", "", 7, false, false, false);
            Gvar.var_372 = 1;
            Gvar.var_70 = 0;
            Gvar.var_1031 = 1;
        }
        if (Gvar.var_81[Gvar.var_2442][0] == 86) {
            await Func.setMessage("", "ここには『悪魔の虹』があるぞ。", 7, false, false, false);
            await Func.AutoDraw(10);
        }
        if (Gvar.var_81[Gvar.var_2442][0] == 87) {
            await Func.setMessage("", "ここにはｴｺｰｽﾞの音が仕掛けてあるぞ。", 7, false, false, false);
            await Func.AutoDraw(10);
        }
        if (Gvar.var_81[Gvar.var_2442][0] == 88) {
            await Func.setMessage("", "鏡が置いてあるぞ。", 7, false, false, false);
            await Func.AutoDraw(10);
        }
        if (Gvar.var_81[Gvar.var_2442][0] == 89) {
            await Func.setMessage("", "ﾊｲｳｪｲｽﾀｰを潜ませてあるぞ。", 7, false, false, false);
            await Func.AutoDraw(10);
        }
        if (Gvar.var_81[Gvar.var_2442][0] == 90) {
            await Func.setMessage("", "『ドッグォン』と書いてあるぞ。", 7, false, false, false);
            await Func.AutoDraw(10);
        }
        if (Gvar.var_81[Gvar.var_2442][0] == 91) {
            await Func.setMessage("", "ここにはﾗﾊﾞｰｽﾞを潜ませてあるぞ。", 7, false, false, false);
            await Func.AutoDraw(10);
        }
        if (Gvar.var_81[Gvar.var_2442][0] == 92) {
            await Func.setMessage("", "法王の結界が仕掛けてあるぞ。", 7, false, false, false);
            await Func.AutoDraw(10);
        }
        if (Gvar.var_81[Gvar.var_2442][0] == 93) {
            await Func.setMessage("", "ホルス神の罠が仕掛けてあるぞ。", 7, false, false, false);
            await Func.AutoDraw(10);
        }
        if (Gvar.var_81[Gvar.var_2442][0] == 94) {
            await Func.setMessage("", "ﾀﾞｲﾊﾞｰﾀﾞｳﾝを潜ませてあるぞ。", 7, false, false, false);
            await Func.AutoDraw(10);
        }
        if (Gvar.var_81[Gvar.var_2442][0] == 95) {
            Gvar.var_81[Gvar.var_2442][3] = 1;
            Gvar.var_108 = 1;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1540 = 1;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1540++;
                if (Gvar.var_1540 == 4) {
                    Adap.DSPLAY(111);
                }
            }
            await Func.setMessage("", "波紋で体が焼かれている！", 7, true, false, false);
            for (let cnt2 = 0; cnt2 < 3; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1540++;
            }
            Adap.DSPLAY(173);
            await Func.setMessage("ﾀﾞｲｱｰさん「フフ……は…波紋入りの", "          薔薇の棘は 痛か…ろう…」", 7, false, false, false);
            await Func.AutoDraw(11);
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                Gvar.var_2440 = 1;
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_2440 = 2;
                await Func.func337(); // メッセージ表示処理(自動)
            }
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_1540 = 0;
            Gvar.var_2440 = 0;
            Gvar.var_108 = 0;
            Gvar.var_81[Gvar.var_2442][3] = 0;
            Gvar.var_80[Gvar.var_66][Gvar.var_67] = 0;
            Gvar.var_81[Gvar.var_2442][0] = 0;
            Gvar.var_81[Gvar.var_2442][1] = 0;
            Gvar.var_81[Gvar.var_2442][2] = 0;
            Gvar.var_134 = 1;
            if (Gvar.nouryoku_disc_id == 116 || Gvar.var_125 >= 1) {
                Gvar.var_134 = 0;
                await Func.setMessage("しかし気の毒なことに、", "波紋に強くなっていて平気だった。", 7, true, false, false);
                await Func.AutoDraw(11);
            }
        }
        if (Gvar.var_81[Gvar.var_2442][0] == 98) {
            Gvar.var_81[Gvar.var_2442][3] = 1;
            Gvar.var_108 = 1;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1539 = 1;
            Gvar.var_747 = 1;
            Adap.DSPLAY(111);
            for (let cnt2 = 0; cnt2 < 15; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1539++;
            }
            Gvar.var_108 = 0;
            Gvar.var_81[Gvar.var_2442][3] = 0;
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_1539 = 0;
            Gvar.var_2454 = Adap.rnd(5);
            Gvar.var_2455 = 8 + Gvar.var_2454;
            Gvar.var_211 = Gvar.var_211 - Gvar.var_2455;
            Gvar.var_208 = Gvar.var_208 + Gvar.var_2455;
            if (Gvar.var_211 <= 0) {
                Gvar.var_211 = 0;
                Gvar.var_356 = 238;
                Gvar.var_199 = 2;
            }
            await Func.setMessage("", tf("ﾊﾝｸﾞﾄﾞﾏﾝから{0}のﾀﾞﾒｰｼﾞをうけた！", Gvar.var_2455), 7, false, false, false);
            await Func.AutoDraw(10);
            Gvar.var_80[Gvar.var_66][Gvar.var_67] = 0;
            Gvar.var_81[Gvar.var_2442][0] = 0;
            Gvar.var_81[Gvar.var_2442][1] = 0;
            Gvar.var_81[Gvar.var_2442][2] = 0;
        }
        if (Gvar.var_81[Gvar.var_2442][0] == 99) {
            Gvar.var_108 = 1;
            Gvar.var_81[Gvar.var_2442][3] = 1;
            Adap.DSPLAY(148);
            await Func.AutoDraw(10);
            await Func.setMessage("", "下の階に落ちた！", 7, false, false, false);
            await Func.AutoDraw(8);
            Gvar.var_372 = 1;
        }
        // No = 2999 没罠を踏んだ時の動作処理
        if (Gvar.var_81[Gvar.var_2442][0] == 2999) {
            Gvar.var_81[Gvar.var_2442][3] = 1;
            Gvar.var_108 = 1;
            Adap.DSPLAY(173);
            await Func.setMessage("", "「」", 7, false, false, false);
            await Func.AutoDraw(10);
            Adap.DSPLAY(173);
            await Func.setMessage("", "", 7, true, false, false);
            await Func.AutoDraw(3);
            await Func.func340(); // キー入力による選択処理
            Gvar.var_108 = 0;
            Gvar.var_390 = 1;
            for (let cnt2 = 0; cnt2 < Gvar.var_97; ++cnt2) {
                Gvar.var_83[Gvar.var_390].Var12 = 0;
                Gvar.var_390 = Gvar.var_390 + 1;
            }
            Gvar.var_81[Gvar.var_2442][3] = 0;
            await Func.setMessage("", "", 7, false, false, false);
            await Func.AutoDraw(10);
        }
        await Func.func540();
        return;
}

export {func541}
