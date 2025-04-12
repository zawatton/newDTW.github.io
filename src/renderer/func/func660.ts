import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'
import * as Enemy from '../enemy/index'

async function func660(this: any) {
        Adap.dbgprt(660);
        Gvar.var_3056 = Gvar.var_340;
        Gvar.var_314 = Gvar.var_82[Gvar.var_455][Gvar.var_456];
        Gvar.enemy_list = Gvar.var_83[Gvar.var_314].Var0; // Gvar.var_83[Gvar.var_314].Var0 は enemy list
        await Func.func626(); // 敵リスト
        Gvar.var_748 = Gvar.var_83[Gvar.var_314].Var1 - Gvar.var_66 + 4;
        Gvar.var_749 = Gvar.var_83[Gvar.var_314].Var2 - Gvar.var_67 + 4;
        if (Gvar.time_paused == 0 && Gvar.var_123 == 0) { // 時止め(時消し飛ばし)状態でない場合
            // Gvar.enemy_list == 64 ギアッチョ & No = 122 アヌビス神のdiscを装備していない
            if (Gvar.var_83[Gvar.var_314].Var0 == 64 && Gvar.var_83[Gvar.var_314].Var12 == 0 && Gvar.var_83[Gvar.var_314].Var20 == 0 && Gvar.var_83[Gvar.var_314].Var17 == 0 && Gvar.var_1218 == 0 && Gvar.equip_disc[122] == 0 && Gvar.var_340 != 412) {
                Gvar.var_1195 = 0;
                Gvar.var_1421 = Gvar.var_340;
                Gvar.var_1249 = Gvar.var_1887;
                Gvar.var_1393 = Gvar.var_314;
                await Enemy.func666(); // 敵ギアッチョの射撃&投擲無効化処理
                Gvar.var_340 = Gvar.var_3056;
                Gvar.var_2995 = 1;
                return;
            }
            // No = 122 アヌビス神のdiscを装備していない
            if (Gvar.var_1270 == 1 && Gvar.equip_disc[122] == 0 && Gvar.var_1218 == 0 && Gvar.var_83[Gvar.var_314].Var12 == 0 && Gvar.var_83[Gvar.var_314].Var20 == 0 && Gvar.var_83[Gvar.var_314].Var17 == 0) {
                // Gvar.enemy_list == 9 ラバーソウル
                if (Gvar.var_83[Gvar.var_314].Var0 == 9) {
                    await Enemy.func663(); // 敵ラバーソウル&ノートリアスBIGの投擲無効化処理
                    Gvar.var_340 = Gvar.var_3056;
                    Gvar.var_1249 = Gvar.var_1887;
                    return;
                }
                // Gvar.enemy_list == 10 ノートリアスBIG
                if (Gvar.var_83[Gvar.var_314].Var0 == 10) {
                    await Enemy.func663(); // 敵ラバーソウル&ノートリアスBIGの投擲無効化処理
                    Gvar.var_340 = Gvar.var_3056;
                    Gvar.var_1249 = Gvar.var_1887;
                    return;
                }
            }
            // Gvar.enemy_list = 118 クリーム
            if (Gvar.var_83[Gvar.var_314].Var0 == 118 && Gvar.var_1218 == 0) {
                Gvar.var_1195 = 0;
                await Enemy.func664(); // 敵クリームの射撃&投擲無効化処理
                Gvar.var_340 = Gvar.var_3056;
                Gvar.var_2995 = 1;
                return;
            }
            // Gvar.enemy_list == 156 ウェザーリポート & No = 122 アヌビス神のdiscを装備していない
            if (Gvar.var_83[Gvar.var_314].Var0 == 156 && Gvar.var_1218 == 0 && Gvar.equip_disc[122] == 0 && Gvar.var_83[Gvar.var_314].Var12 == 0 && Gvar.var_83[Gvar.var_314].Var20 == 0 && Gvar.var_83[Gvar.var_314].Var17 == 0 && Gvar.var_340 != 412) {
                if (Gvar.var_340 != 304 && Gvar.var_340 != 397) {
                    Gvar.var_1195 = 0;
                    await Enemy.func665(); // 敵ウェザーリポートの射撃&投擲無効化処理
                    Gvar.var_340 = Gvar.var_3056;
                    Gvar.var_2995 = 1;
                    return;
                }
            }
            // Gvar.enemy_list == 159 記憶が戻ったウェザー & No = 122 アヌビス神のdiscを装備していない
            if (Gvar.var_83[Gvar.var_314].Var0 == 159 && Gvar.var_1218 == 0 && Gvar.equip_disc[122] == 0 && Gvar.var_83[Gvar.var_314].Var12 == 0 && Gvar.var_83[Gvar.var_314].Var20 == 0 && Gvar.var_83[Gvar.var_314].Var17 == 0 && Gvar.var_340 != 412) {
                Gvar.var_1195 = 0;
                await Enemy.func665(); // 敵ウェザーリポートの射撃&投擲無効化処理
                Gvar.var_340 = Gvar.var_3056;
                Gvar.var_2995 = 1;
                return;
            }
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 141 && Gvar.var_340 == 632) {
            Gvar.var_340 = 562;
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 106 && Gvar.var_83[Gvar.var_314].Var31 == 5 && Gvar.var_340 == 589) {
            Gvar.var_340 = 1100;
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 115 && Gvar.var_340 == 582) {
            Gvar.var_340 = 1101;
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 93) {
            if (Gvar.var_340 == 304 || Gvar.var_340 == 397) {
                Gvar.var_340 = 1102;
            }
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 156) {
            if (Gvar.var_340 == 304 || Gvar.var_340 == 397) {
                Gvar.var_340 = 1102;
            }
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 144 && Gvar.var_340 == 718) {
            Gvar.var_340 = 1102;
        }
        if (Gvar.var_83[Gvar.var_314].Var31 == 5 && Gvar.var_340 == 401) {
            if (Gvar.var_83[Gvar.var_314].Var12 == 99) {
                Gvar.var_83[Gvar.var_314].Var12 = 0;
            }
            Gvar.var_83[Gvar.var_314].Var13 = 0;
            Gvar.var_83[Gvar.var_314].Var8 = 1;
            await Func.AutoDraw(10);
            Gvar.var_83[Gvar.var_314].Var8 = 0;
            Gvar.enemy_list = Gvar.var_83[Gvar.var_314].Var0; // Gvar.var_83[Gvar.var_314].Var0 は enemy list
            if (Gvar.var_83[Gvar.var_314].Var0 == 97 && Gvar.var_83[Gvar.var_314].Var31 >= 11) {
                Gvar.enemy_list = Gvar.var_83[Gvar.var_314].Var31;
            }
            await Func.func626(); // 敵リスト
            Gvar.var_3057 = Gvar.enemy_name;
            Gvar.var_83[Gvar.var_314].Var3 = Gvar.var_83[Gvar.var_314].Var3 + 20;
            if (Gvar.var_120 == 1 || Gvar.var_174 == 1) {
                Gvar.var_83[Gvar.var_314].Var3 = Gvar.var_83[Gvar.var_314].Var3 + 20;
            }
            Gvar.var_3058 = 0;
            if (Gvar.var_83[Gvar.var_314].Var39 >= 2) {
                Gvar.var_3059 = Math.floor(Gvar.enemy_hp * (Gvar.var_83[Gvar.var_314].Var39 + 10) / 10);
                if (Gvar.var_3059 >= 999) {
                    Gvar.var_3059 = 999;
                }
                if (Gvar.var_83[Gvar.var_314].Var3 >= Gvar.var_3059) {
                    Gvar.var_83[Gvar.var_314].Var3 = Gvar.var_3059;
                    Gvar.var_3058 = 1;
                }
            }
            if (Gvar.var_83[Gvar.var_314].Var39 <= 1) {
                if (Gvar.var_83[Gvar.var_314].Var3 >= Gvar.enemy_hp) {
                    Gvar.var_83[Gvar.var_314].Var3 = Gvar.enemy_hp;
                    Gvar.var_3058 = 1;
                }
            }
            await Func.setMessage1("" + Gvar.var_3057 + "に", "プランクトンを詰めた。", 7, true, false, false);
            Adap.DSPLAY(143);
            if (Gvar.var_3058 == 0 && Gvar.var_120 == 0 && Gvar.var_174 == 0) {
                await Func.setMessage1("" + Gvar.var_3057 + "の", "傷が少し癒えたようだ。", 7, true, false, false);
            }
            if (Gvar.var_3058 == 0) {
                if (Gvar.var_120 == 1 || Gvar.var_174 == 1) {
                    await Func.setMessage1("" + Gvar.var_3057 + "の", "傷がだいぶ癒えたようだ。", 7, true, false, false);
                }
            }
            if (Gvar.var_3058 == 1) {
                await Func.setMessage1("" + Gvar.var_3057 + "の", "傷は完全に回復した。", 7, true, false, false);
            }
            Gvar.var_340 = Gvar.var_3056;
            return;
        }
        if (Gvar.var_1270 == 1 && Gvar.var_1852 == 2) {
            if (Gvar.nouryoku_disc_id == 112 || Gvar.nouryoku_disc_id == 394) {
                Gvar.var_340 = 488;
            }
        }
        if (Gvar.var_340 == 851) {
            Gvar.var_1901 = 0;
            // Ver0.1403にて追加。No = 171 離婚した承太郎
            if (Gvar.var_83[Gvar.var_314].Var0 == 33 || Gvar.var_83[Gvar.var_314].Var0 == 34 || Gvar.var_83[Gvar.var_314].Var0 == 171 || Gvar.var_83[Gvar.var_314].Var0 == 143 || Gvar.var_83[Gvar.var_314].Var0 == 132 || Gvar.var_83[Gvar.var_314].Var31 == 4 || Gvar.var_83[Gvar.var_314].Var31 == 5) {
                Gvar.var_340 = Gvar.var_3056;
                return;
            }
            Gvar.var_1916 = Gvar.var_233[Gvar.var_225].Var6;
            Gvar.var_3060 = 1;
            Gvar.var_3061 = 0;
            Gvar.var_2104 = Gvar.var_1838 + Gvar.var_1849;
            for (let cnt2 = 0; cnt2 < Gvar.var_2104; ++cnt2) {
                if (Gvar.var_486[Gvar.var_1916][Gvar.var_3060][15] == 0) {
                    Gvar.var_3061 = Gvar.var_3060;
                    break;
                }
                Gvar.var_3060++;
            }
            if (Gvar.var_3061 == 0) {
                Gvar.var_340 = Gvar.var_3056;
                return;
            }
            Gvar.var_1838 = Gvar.var_1838 - 1;
            Gvar.var_1849 = Gvar.var_1849 + 1;
            Gvar.var_486[Gvar.var_1916][Gvar.var_3060][15] = Gvar.var_83[Gvar.var_314].Var0; // Gvar.var_83[Gvar.var_314].Var0 は enemy list
            Gvar.var_486[Gvar.var_1916][Gvar.var_3060][18] = Gvar.var_83[Gvar.var_314].Var39;
            Gvar.enemy_list = Gvar.var_83[Gvar.var_314].Var0; // Gvar.var_83[Gvar.var_314].Var0 は enemy list
            Adap.DSPLAY(130);
            if (Gvar.var_862[851][0] == 1) {
                await Func.setMessage1("" + Gvar.enemy_name + "を", "ビンの中に閉じ込めた！", 7, false, false, false);
            }
            if (Gvar.var_862[851][0] == 0) {
                await Func.setMessage1("" + Gvar.enemy_name + "を", "ヤバイものに閉じ込めた！", 7, false, false, false);
            }
            Gvar.var_82[Gvar.var_455][Gvar.var_456] = 0;
            Gvar.var_83[Gvar.var_314].Var0 = 0;
            Gvar.var_83[Gvar.var_314].Var1 = 0;
            Gvar.var_83[Gvar.var_314].Var2 = 0;
            if (Gvar.equip_disc[122] == 1) {
                for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_198 = 1; // メッセージウィンドウ開く
                    Gvar.var_300 = 0;
                }
            }
            if (Gvar.equip_disc[122] == 0) {
                Gvar.var_1340 = (Gvar.var_455 - Gvar.var_66 + 4) * 40;
                Gvar.var_1341 = (Gvar.var_456 - Gvar.var_67 + 4) * 40;
                Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
                Gvar.var_1339 = 1;
                for (let cnt3 = 0; cnt3 < 15; ++cnt3) {
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_198 = 1; // メッセージウィンドウ開く
                    Gvar.var_300 = 0;
                    Gvar.var_1339++;
                }
                Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
                Gvar.var_1339 = 0;
            }
            Gvar.var_1901 = 1;
            Gvar.var_340 = Gvar.var_3056;
            return;
        }
        if (Gvar.var_340 == 727) {
            if (Gvar.var_83[Gvar.var_314].Var12 == 99) {
                Gvar.var_83[Gvar.var_314].Var12 = 0;
            }
            Gvar.var_83[Gvar.var_314].Var13 = 0;
            Gvar.var_83[Gvar.var_314].Var8 = 1;
            await Func.AutoDraw(10);
            Gvar.var_83[Gvar.var_314].Var8 = 0;
            Gvar.enemy_list = Gvar.var_83[Gvar.var_314].Var0; // Gvar.var_83[Gvar.var_314].Var0 は enemy list
            if (Gvar.var_83[Gvar.var_314].Var0 == 97 && Gvar.var_83[Gvar.var_314].Var31 >= 11) {
                Gvar.enemy_list = Gvar.var_83[Gvar.var_314].Var31;
            }
            await Func.func626(); // 敵リスト
            Gvar.var_3057 = Gvar.enemy_name;
            Gvar.var_83[Gvar.var_314].Var3 = Gvar.enemy_hp;
            if (Gvar.var_83[Gvar.var_314].Var39 >= 2) {
                Gvar.var_3059 = Math.floor(Gvar.enemy_hp * (Gvar.var_83[Gvar.var_314].Var39 + 10) / 10);
                if (Gvar.var_3059 >= 999) {
                    Gvar.var_3059 = 999;
                }
                Gvar.var_83[Gvar.var_314].Var3 = Gvar.var_3059;
            }
            await Func.setMessage1("" + Gvar.var_3057 + "を", "ｿﾞﾝﾋﾞ馬で縫った。", 7, true, false, false);
            await Func.setMessage1("" + Gvar.var_3057 + "の", "傷は完全に回復した。", 7, true, false, false);
            Gvar.var_340 = Gvar.var_3056;
            return;
        }
        if (Gvar.var_340 == 712) {
            if (Gvar.var_83[Gvar.var_314].Var12 == 99) {
                Gvar.var_83[Gvar.var_314].Var12 = 0;
            }
            Gvar.var_83[Gvar.var_314].Var13 = 0;
            if (Gvar.var_114 == Gvar.var_314) {
                Gvar.var_114 = 0;
            }
            Gvar.var_83[Gvar.var_314].Var8 = 1;

            Adap.DSPLAY(143);
            await Func.AutoDraw(10);
            Gvar.var_83[Gvar.var_314].Var8 = 0;
            Gvar.enemy_list = Gvar.var_83[Gvar.var_314].Var0; // Gvar.var_83[Gvar.var_314].Var0 は enemy list
            if (Gvar.var_83[Gvar.var_314].Var0 == 97 && Gvar.var_83[Gvar.var_314].Var31 >= 11) {
                Gvar.enemy_list = Gvar.var_83[Gvar.var_314].Var31;
            }
            await Func.func626(); // 敵リスト
            Gvar.var_3057 = Gvar.enemy_name;
            Gvar.var_83[Gvar.var_314].Var3 = Gvar.enemy_hp;
            if (Gvar.var_83[Gvar.var_314].Var39 >= 2) {
                Gvar.var_3059 = Math.floor(Gvar.enemy_hp * (Gvar.var_83[Gvar.var_314].Var39 + 10) / 10);
                if (Gvar.var_3059 >= 999) {
                    Gvar.var_3059 = 999;
                }
                Gvar.var_83[Gvar.var_314].Var3 = Gvar.var_3059;
            }
            await Func.setMessage1("" + Gvar.var_3057 + "は", "体力が回復した。", 7, true, false, false);
            Gvar.var_83[Gvar.var_314].Var17 = 1;
            Adap.DSPLAY(134);
            await Func.setMessage1("" + Gvar.var_3057 + "は", "混乱してしまった！", 7, true, false, false);
            Gvar.var_340 = Gvar.var_3056;
            return;
        }
        if (Gvar.var_340 == 405 || Gvar.var_2937 == 1 || Gvar.var_340 == 318) {
            Gvar.var_1894 = 0;
            Gvar.var_1895 = 0;
            Gvar.var_1385 = Gvar.var_82[Gvar.var_455][Gvar.var_456];
            Gvar.var_82[Gvar.var_455][Gvar.var_456] = 0;
            if (Gvar.var_83[Gvar.var_1385].Var13 != 0) {
                Gvar.var_460 = Gvar.var_1385;
                await Func.func024();
            }
            if (Gvar.var_83[Gvar.var_1385].Var12 == 99) {
                Gvar.var_83[Gvar.var_1385].Var12 = 0;
            }
            if (Gvar.var_83[Gvar.var_1385].Var0 == 33) {
                Gvar.var_83[Gvar.var_1385].Var0 = 34;
                Gvar.var_83[Gvar.var_1385].Var31 = 1;
            }
            Gvar.var_83[Gvar.var_1385].Var8 = 1;
            Gvar.var_3062 = 0;
            Gvar.var_3063 = 0;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                Gvar.var_82[Gvar.var_1894][Gvar.var_1895] = 0;
                Gvar.var_82[Gvar.var_455][Gvar.var_456] = Gvar.var_1385;
                Gvar.var_83[Gvar.var_1385].Var1 = Gvar.var_455;
                Gvar.var_83[Gvar.var_1385].Var2 = Gvar.var_456;
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1894 = Gvar.var_455;
                Gvar.var_1895 = Gvar.var_456;
                if (Gvar.var_199 == 4) {
                    Gvar.var_455 = Gvar.var_455 - 1;
                }
                if (Gvar.var_199 == 6) {
                    Gvar.var_455 = Gvar.var_455 + 1;
                }
                if (Gvar.var_199 == 8) {
                    Gvar.var_456 = Gvar.var_456 - 1;
                }
                if (Gvar.var_199 == 2) {
                    Gvar.var_456 = Gvar.var_456 + 1;
                }
                if (Gvar.var_199 == 1) {
                    Gvar.var_455 = Gvar.var_455 - 1;
                    Gvar.var_456 = Gvar.var_456 + 1;
                }
                if (Gvar.var_199 == 3) {
                    Gvar.var_455 = Gvar.var_455 + 1;
                    Gvar.var_456 = Gvar.var_456 + 1;
                }
                if (Gvar.var_199 == 7) {
                    Gvar.var_455 = Gvar.var_455 - 1;
                    Gvar.var_456 = Gvar.var_456 - 1;
                }
                if (Gvar.var_199 == 9) {
                    Gvar.var_455 = Gvar.var_455 + 1;
                    Gvar.var_456 = Gvar.var_456 - 1;
                }
                if (Gvar.var_71[Gvar.var_455][Gvar.var_456] == 0) {
                    Gvar.var_3063 = 1;
                    break;
                }
                if (Gvar.var_82[Gvar.var_455][Gvar.var_456] > 0) {
                    Gvar.var_3062 = 1;
                    break;
                }
            }
            Gvar.var_3064 = Gvar.var_1894;
            Gvar.var_3065 = Gvar.var_1895;
            Gvar.var_3066 = Gvar.var_455;
            Gvar.var_3067 = Gvar.var_456;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1384 = 1;
            Gvar.var_1386 = Gvar.var_83[Gvar.var_1385].Var0;
            Gvar.var_83[Gvar.var_1385].Var11 = 1;
            if (Gvar.var_3062 == 1) {
                Gvar.var_3068 = Gvar.var_82[Gvar.var_455][Gvar.var_456];
                Gvar.var_83[Gvar.var_3068].Var8 = 1;
                if (Gvar.var_83[Gvar.var_3068].Var13 != 0) {
                    Gvar.var_460 = Gvar.var_3068;
                    await Func.func024();
                }
                if (Gvar.var_83[Gvar.var_3068].Var12 == 99) {
                    Gvar.var_83[Gvar.var_3068].Var12 = 0;
                }
                if (Gvar.var_83[Gvar.var_3068].Var0 == 33) {
                    Gvar.var_83[Gvar.var_3068].Var0 = 34;
                    Gvar.var_83[Gvar.var_3068].Var31 = 1;
                }
            }
            await Func.AutoDraw(3);
            Gvar.var_1894 = Gvar.var_3064;
            Gvar.var_1895 = Gvar.var_3065;
            Gvar.var_455 = Gvar.var_3066;
            Gvar.var_456 = Gvar.var_3067;
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_1384 = 0;
            Gvar.var_83[Gvar.var_1385].Var11 = 0;
            if (Gvar.var_3062 == 1) {
                Gvar.var_82[Gvar.var_1894][Gvar.var_1895] = 0;
                Gvar.var_2294 = Gvar.var_455 - 1;
                if (Gvar.var_2294 < 0) {
                    Gvar.var_2294 = 0;
                }
                Gvar.var_2295 = Gvar.var_455 + 1;
                if (Gvar.var_2295 > Gvar.var_33) {
                    Gvar.var_2295 = Gvar.var_33;
                }
                Gvar.var_2296 = Gvar.var_456 + 1;
                if (Gvar.var_2296 > Gvar.var_34) {
                    Gvar.var_2296 = Gvar.var_34;
                }
                Gvar.var_2297 = Gvar.var_456 - 1;
                if (Gvar.var_2297 < 0) {
                    Gvar.var_2297 = 0;
                }
                Gvar.var_2298 = 0;
                if (Gvar.var_2298 == 0 && Gvar.var_71[Gvar.var_2294][Gvar.var_2296] != 0 && Gvar.var_71[Gvar.var_2294][Gvar.var_2296] != 13 && Gvar.var_82[Gvar.var_2294][Gvar.var_2296] == 0 && Gvar.var_65[Gvar.var_2294][Gvar.var_2296] == 0) {
                    Gvar.var_1894 = Gvar.var_2294;
                    Gvar.var_1895 = Gvar.var_2296;
                    Gvar.var_2298 = 1;
                }
                if (Gvar.var_2298 == 0 && Gvar.var_71[Gvar.var_2295][Gvar.var_2296] != 0 && Gvar.var_71[Gvar.var_2295][Gvar.var_2296] != 13 && Gvar.var_82[Gvar.var_2295][Gvar.var_2296] == 0 && Gvar.var_65[Gvar.var_2295][Gvar.var_2296] == 0) {
                    Gvar.var_1894 = Gvar.var_2295;
                    Gvar.var_1895 = Gvar.var_2296;
                    Gvar.var_2298 = 1;
                }
                if (Gvar.var_2298 == 0 && Gvar.var_71[Gvar.var_2294][Gvar.var_2297] != 0 && Gvar.var_71[Gvar.var_2294][Gvar.var_2297] != 13 && Gvar.var_82[Gvar.var_2294][Gvar.var_2297] == 0 && Gvar.var_65[Gvar.var_2294][Gvar.var_2297] == 0) {
                    Gvar.var_1894 = Gvar.var_2294;
                    Gvar.var_1895 = Gvar.var_2297;
                    Gvar.var_2298 = 1;
                }
                if (Gvar.var_2298 == 0 && Gvar.var_71[Gvar.var_2295][Gvar.var_2297] != 0 && Gvar.var_71[Gvar.var_2295][Gvar.var_2297] != 13 && Gvar.var_82[Gvar.var_2295][Gvar.var_2297] == 0 && Gvar.var_65[Gvar.var_2295][Gvar.var_2297] == 0) {
                    Gvar.var_1894 = Gvar.var_2295;
                    Gvar.var_1895 = Gvar.var_2297;
                    Gvar.var_2298 = 1;
                }
                if (Gvar.var_2298 == 0 && Gvar.var_71[Gvar.var_2294][Gvar.var_1895] != 0 && Gvar.var_71[Gvar.var_2294][Gvar.var_1895] != 13 && Gvar.var_82[Gvar.var_2294][Gvar.var_1895] == 0 && Gvar.var_65[Gvar.var_2294][Gvar.var_1895] == 0) {
                    Gvar.var_1894 = Gvar.var_2294;
                    Gvar.var_2298 = 1;
                }
                if (Gvar.var_2298 == 0 && Gvar.var_71[Gvar.var_2295][Gvar.var_1895] != 0 && Gvar.var_71[Gvar.var_2295][Gvar.var_1895] != 13 && Gvar.var_82[Gvar.var_2295][Gvar.var_1895] == 0 && Gvar.var_65[Gvar.var_2295][Gvar.var_1895] == 0) {
                    Gvar.var_1894 = Gvar.var_2295;
                    Gvar.var_2298 = 1;
                }
                if (Gvar.var_2298 == 0 && Gvar.var_71[Gvar.var_1894][Gvar.var_2296] != 0 && Gvar.var_71[Gvar.var_1894][Gvar.var_2296] != 13 && Gvar.var_82[Gvar.var_1894][Gvar.var_2296] == 0 && Gvar.var_65[Gvar.var_1894][Gvar.var_2296] == 0) {
                    Gvar.var_1895 = Gvar.var_2296;
                    Gvar.var_2298 = 1;
                }
                if (Gvar.var_2298 == 0 && Gvar.var_71[Gvar.var_1894][Gvar.var_2297] != 0 && Gvar.var_71[Gvar.var_1894][Gvar.var_2297] != 13 && Gvar.var_82[Gvar.var_1894][Gvar.var_2297] == 0 && Gvar.var_65[Gvar.var_1894][Gvar.var_2297] == 0) {
                    Gvar.var_1895 = Gvar.var_2297;
                    Gvar.var_2298 = 1;
                }
            }
            Gvar.var_82[Gvar.var_1894][Gvar.var_1895] = Gvar.var_1385;
            Gvar.var_83[Gvar.var_1385].Var1 = Gvar.var_1894;
            Gvar.var_83[Gvar.var_1385].Var2 = Gvar.var_1895;
            Gvar.var_83[Gvar.var_1385].Var10 = Gvar.var_71[Gvar.var_1894][Gvar.var_1895];
            if (Gvar.var_1385 == Gvar.var_114) {
                if (Gvar.var_83[Gvar.var_1385].Var1 != Gvar.var_463 || Gvar.var_83[Gvar.var_1385].Var2 != Gvar.var_464) {
                    Gvar.var_114 = 0;
                    Gvar.var_463 = 0;
                    Gvar.var_464 = 0;
                    Gvar.var_461 = 0;
                    Gvar.var_462 = 0;
                }
            }
            // No = 61 ヨーヨーマッ
            if (Gvar.var_3062 == 1 || Gvar.var_3063 == 1 || Gvar.var_83[Gvar.var_1385].Var0 == 61 || Gvar.var_83[Gvar.var_1385].Var0 == 163) {
                Gvar.var_403 = "";
                Gvar.var_209 = 5;
                Gvar.var_402 = Gvar.var_1385;
                await Func.func705();
            }
            if (Gvar.var_3062 == 1) {
                Gvar.var_403 = "";
                Gvar.var_209 = 5;
                Gvar.var_402 = Gvar.var_3068;
                await Func.func705();
            }
            Gvar.var_3069 = Gvar.var_83[Gvar.var_1385].Var1;
            Gvar.var_3070 = Gvar.var_83[Gvar.var_1385].Var2;
            if (Gvar.var_71[Gvar.var_3069][Gvar.var_3070] == 0) {
                Gvar.var_314 = Gvar.var_1385;
                await Func.func669();
            }
            if (Gvar.var_71[Gvar.var_3069][Gvar.var_3070] == 13) {
                Gvar.var_314 = Gvar.var_1385;
                if (Gvar.var_83[Gvar.var_314].Var0 == 44) {
                    await Enemy.func670();
                    if (Gvar.var_3071 == 1) {
                        Gvar.var_3071 = 0;
                        Gvar.var_340 = Gvar.var_3056;
                        return;
                    }
                }
                await Func.func669();
            }
            Gvar.var_83[Gvar.var_1385].Var8 = 0;
            Gvar.var_83[Gvar.var_3068].Var8 = 0;
            await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
            await Func.AutoDraw(2);
            Gvar.var_340 = Gvar.var_3056;
            return;
        }
        if (Gvar.var_340 == 123) {
            Gvar.var_314 = Gvar.var_82[Gvar.var_455][Gvar.var_456];
            // Ver0.1403にて追加。No = 171 離婚した承太郎
            if (Gvar.var_83[Gvar.var_314].Var0 == 33 || Gvar.var_83[Gvar.var_314].Var0 == 34 || Gvar.var_83[Gvar.var_314].Var0 == 143 || Gvar.var_83[Gvar.var_314].Var0 == 132 || Gvar.var_83[Gvar.var_314].Var0 == 20) {
                if (Gvar.var_83[Gvar.var_314].Var12 == 99) {
                    Gvar.var_83[Gvar.var_314].Var12 = 0;
                }
                Gvar.var_83[Gvar.var_314].Var13 = 0;
                Gvar.var_402 = Gvar.var_314;
                Gvar.var_209 = 10;
                Gvar.var_403 = "とっさにかわされて";
                Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
                await Func.func705();
                Gvar.var_340 = Gvar.var_3056;
                return;
            }
            Gvar.var_82[Gvar.var_455][Gvar.var_456] = 0;
            Gvar.var_83[Gvar.var_314].Var0 = 0;
            Gvar.var_83[Gvar.var_314].Var1 = 0;
            Gvar.var_83[Gvar.var_314].Var2 = 0;
            Gvar.var_1196 = 1;
    
            Adap.DSPLAY(122);
            for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
            }
            Gvar.var_340 = Gvar.var_3056;
            return;
        }
        if (Gvar.var_340 == 408) {
            await Func.func662();
            Gvar.var_369 = 1;
            Gvar.var_340 = Gvar.var_3056;
            return;
        }
        if (Gvar.var_340 == 584) {
            Gvar.var_314 = Gvar.var_82[Gvar.var_455][Gvar.var_456];
            if (Gvar.var_83[Gvar.var_314].Var13 != 0) {
                Gvar.var_460 = Gvar.var_314;
                await Func.func024();
            }
            if (Gvar.var_83[Gvar.var_314].Var12 == 99) {
                Gvar.var_83[Gvar.var_314].Var12 = 0;
            }
            if (Gvar.var_83[Gvar.var_314].Var25 <= 50) {
                Gvar.var_83[Gvar.var_314].Var25 = 50;
            }
            Gvar.var_83[Gvar.var_314].Var25 = Gvar.var_83[Gvar.var_314].Var25 + 5;
            if (Gvar.var_83[Gvar.var_314].Var25 >= 99) {
                Gvar.var_83[Gvar.var_314].Var25 = 99;
            }
            Gvar.enemy_list = Gvar.var_83[Gvar.var_314].Var0; // Gvar.var_83[Gvar.var_314].Var0 は enemy list
            if (Gvar.var_83[Gvar.var_314].Var0 == 97 && Gvar.var_83[Gvar.var_314].Var31 >= 11) {
                Gvar.enemy_list = Gvar.var_83[Gvar.var_314].Var31;
            }
            await Func.func626(); // 敵リスト
            Gvar.var_83[Gvar.var_314].Var8 = 1;
            Adap.DSPLAY(164);
            await Func.setMessage1("" + Gvar.enemy_name + "は", "攻撃力が下がった！", 7, false, false, false);
            await Func.AutoDraw(10);
            Gvar.var_83[Gvar.var_314].Var8 = 0;
            Gvar.var_340 = Gvar.var_3056;
            return;
        }
        if (Gvar.var_340 == 588) {
            Gvar.var_314 = Gvar.var_82[Gvar.var_455][Gvar.var_456];
            if (Gvar.var_83[Gvar.var_314].Var13 != 0) {
                Gvar.var_460 = Gvar.var_314;
                await Func.func024();
            }
            if (Gvar.var_83[Gvar.var_314].Var12 == 99) {
                Gvar.var_83[Gvar.var_314].Var12 = 0;
            }
            if (Gvar.var_83[Gvar.var_314].Var25 >= 50) {
                Gvar.var_83[Gvar.var_314].Var25 -= 2;
                if (Gvar.var_83[Gvar.var_314].Var25 < 50) {
                    Gvar.var_83[Gvar.var_314].Var25 = 0;
                }
            }
            if (Gvar.var_83[Gvar.var_314].Var25 < 50) {
                Gvar.var_83[Gvar.var_314].Var25 += 2;
                if (Gvar.var_83[Gvar.var_314].Var25 >= 50) {
                    Gvar.var_83[Gvar.var_314].Var25 = 49;
                }
            }
            Gvar.enemy_list = Gvar.var_83[Gvar.var_314].Var0; // Gvar.var_83[Gvar.var_314].Var0 は enemy list
            if (Gvar.var_83[Gvar.var_314].Var0 == 97 && Gvar.var_83[Gvar.var_314].Var31 >= 11) {
                Gvar.enemy_list = Gvar.var_83[Gvar.var_314].Var31;
            }
            await Func.func626(); // 敵リスト
            Gvar.var_83[Gvar.var_314].Var8 = 1;
            Adap.DSPLAY(182);
            await Func.setMessage1("" + Gvar.enemy_name + "は", "攻撃力が上がった！", 7, false, false, false);
            await Func.AutoDraw(10);
            Gvar.var_83[Gvar.var_314].Var8 = 0;
            Gvar.var_340 = Gvar.var_3056;
            return;
        }
        if (Gvar.var_340 == 103 || Gvar.var_340 == 115) {
            Gvar.var_314 = Gvar.var_82[Gvar.var_455][Gvar.var_456];
            if (Gvar.var_83[Gvar.var_314].Var13 != 0) {
                Gvar.var_460 = Gvar.var_314;
                await Func.func024();
            }
            if (Gvar.var_83[Gvar.var_314].Var12 == 99) {
                Gvar.var_83[Gvar.var_314].Var12 = 0;
            }
            if (Gvar.var_83[Gvar.var_314].Var15 == 0) {
                Gvar.var_83[Gvar.var_314].Var14 = 1;
            }
            if (Gvar.var_83[Gvar.var_314].Var15 != 0) {
                Gvar.var_83[Gvar.var_314].Var14 = 0;
                Gvar.var_83[Gvar.var_314].Var15 = 0;
            }
            Gvar.enemy_list = Gvar.var_83[Gvar.var_314].Var0; // Gvar.var_83[Gvar.var_314].Var0 は enemy list
            if (Gvar.var_83[Gvar.var_314].Var0 == 97 && Gvar.var_83[Gvar.var_314].Var31 >= 11) {
                Gvar.enemy_list = Gvar.var_83[Gvar.var_314].Var31;
            }
            await Func.func626(); // 敵リスト
            Gvar.var_83[Gvar.var_314].Var8 = 1;
            Adap.DSPLAY(162);
            await Func.setMessage1("" + Gvar.enemy_name + "は", "動きが鈍くなった！", 7, false, false, false);
            await Func.AutoDraw(10);
            Gvar.var_83[Gvar.var_314].Var8 = 0;
            Gvar.var_340 = Gvar.var_3056;
            return;
        }
        if (Gvar.var_340 == 503 || Gvar.var_340 == 575 || Gvar.var_340 == 107) {
            Gvar.var_1196 = 1;
            Gvar.var_83[Gvar.var_314].Var8 = 1;
            for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
            }
            Gvar.var_83[Gvar.var_314].Var8 = 0;
            Gvar.var_314 = Gvar.var_82[Gvar.var_455][Gvar.var_456];
            Gvar.var_83[Gvar.var_314].Var13 = 0;
            Gvar.var_83[Gvar.var_314].Var12 = 6;
            if (Gvar.var_114 == Gvar.var_314) {
                Gvar.var_114 = 0;
            }
            Gvar.enemy_list = Gvar.var_83[Gvar.var_314].Var0; // Gvar.var_83[Gvar.var_314].Var0 は enemy list
            if (Gvar.var_83[Gvar.var_314].Var0 == 97 && Gvar.var_83[Gvar.var_314].Var31 >= 11) {
                Gvar.enemy_list = Gvar.var_83[Gvar.var_314].Var31;
            }
            await Func.func626(); // 敵リスト
            Adap.DSPLAY(132);
            await Func.setMessage1("" + Gvar.enemy_name + "は", "眠ってしまった！", 7, false, false, false);
            await Func.AutoDraw(10);
            Gvar.var_340 = Gvar.var_3056;
            return;
        }
        if (Gvar.var_340 == 412) {
            Gvar.var_314 = Gvar.var_82[Gvar.var_455][Gvar.var_456];
            Gvar.var_2964 = Gvar.var_314;
            if (Gvar.var_83[Gvar.var_314].Var0 == 53 || Gvar.var_83[Gvar.var_314].Var0 == 23 || Gvar.var_83[Gvar.var_314].Var0 == 50 || Gvar.var_83[Gvar.var_314].Var0 == 90 || Gvar.var_83[Gvar.var_314].Var0 == 74 || Gvar.var_83[Gvar.var_314].Var0 == 75) {
                Gvar.var_340 = Gvar.var_3056;
                return;
            }
            if (Gvar.var_83[Gvar.var_314].Var23 == 0) {
                Gvar.var_1195 = 1;
                Adap.DSPLAY(118);
                if (Gvar.var_83[Gvar.var_2964].Var20 >= 1) {
                    await Func.setMessage1("「ヘブンズドアー！」", "「攻撃することはできない！」", 7, false, false, false);
                }
                else {
                    await Func.setMessage1("「ヘブンズドアー！」", "「特殊な行動ができなくなる！」", 7, false, false, false);
                }
                for (let cnt3 = 0; cnt3 < 20; ++cnt3) {
                    await Func.func337(); // メッセージ表示処理(自動)
                }
                Gvar.var_1195 = 0;
                if (Gvar.var_83[Gvar.var_2964].Var20 == 1) {
                    Gvar.var_83[Gvar.var_2964].Var20 = 2;
                }
                if (Gvar.var_83[Gvar.var_2964].Var20 == 0) {
                    Gvar.var_83[Gvar.var_2964].Var20 = 1;
                }
                if (Gvar.var_83[Gvar.var_314].Var12 == 99) {
                    Gvar.var_83[Gvar.var_2964].Var12 = 0;
                }
                Gvar.var_83[Gvar.var_2964].Var15 = 0;
                Gvar.var_83[Gvar.var_2964].Var30 = 0;
                if (Gvar.var_83[Gvar.var_2964].Var0 == 97) {
                    Gvar.var_83[Gvar.var_2964].Var31 = 0;
                }
                if (Gvar.var_114 == Gvar.var_2964) {
                    Gvar.var_114 = 0;
                }
                Gvar.var_340 = Gvar.var_3056;
                return;
            }
            if (Gvar.var_83[Gvar.var_314].Var23 != 0) {
                await Func.setMessage1("「ヘブンズドアー！」", "", 7, false, false, false);
                Gvar.var_1195 = 1;
                for (let cnt3 = 0; cnt3 < 15; ++cnt3) {
                    await Func.func337(); // メッセージ表示処理(自動)
                }
                Gvar.var_1195 = 0;
                await Func.setMessage1("見えてなくて効かなかった…", "", 7, true, false, false);
                Gvar.var_340 = Gvar.var_3056;
                return;
            }
            return;
        }
        if (Gvar.var_340 == 205 || Gvar.var_340 == 489) {
            Gvar.var_314 = Gvar.var_82[Gvar.var_455][Gvar.var_456];
            if (Gvar.var_83[Gvar.var_314].Var12 == 99) {
                Gvar.var_83[Gvar.var_314].Var12 = 0;
            }
            Gvar.var_83[Gvar.var_314].Var13 = 99;
            if (Gvar.var_114 == Gvar.var_314) {
                Gvar.var_114 = 0;
            }
            Gvar.enemy_list = Gvar.var_83[Gvar.var_314].Var0; // Gvar.var_83[Gvar.var_314].Var0 は enemy list
            if (Gvar.var_83[Gvar.var_314].Var0 == 97 && Gvar.var_83[Gvar.var_314].Var31 >= 11) {
                Gvar.enemy_list = Gvar.var_83[Gvar.var_314].Var31;
            }
            await Func.func626(); // 敵リスト
            Gvar.var_83[Gvar.var_314].Var8 = 1;
            Adap.DSPLAY(126);
            await Func.setMessage1("" + Gvar.enemy_name + "を", "その場に固定した！", 7, false, false, false);
            await Func.AutoDraw(10);
            Gvar.var_83[Gvar.var_314].Var8 = 0;
            Gvar.var_340 = Gvar.var_3056;
            return;
        }
        if (Gvar.var_340 == 404 || Gvar.var_340 == 202) {
            Gvar.var_314 = Gvar.var_82[Gvar.var_455][Gvar.var_456];
            if (Gvar.var_83[Gvar.var_314].Var12 == 99) {
                Gvar.var_83[Gvar.var_314].Var12 = 0;
            }
            Gvar.var_83[Gvar.var_314].Var13 = 1;
            if (Gvar.var_114 == Gvar.var_314) {
                Gvar.var_114 = 0;
            }
            Adap.DSPLAY(126);
            Gvar.enemy_list = Gvar.var_83[Gvar.var_314].Var0; // Gvar.var_83[Gvar.var_314].Var0 は enemy list
            if (Gvar.var_83[Gvar.var_314].Var0 == 97 && Gvar.var_83[Gvar.var_314].Var31 >= 11) {
                Gvar.enemy_list = Gvar.var_83[Gvar.var_314].Var31;
            }
            await Func.func626(); // 敵リスト
            Gvar.var_83[Gvar.var_314].Var8 = 1;
            await Func.setMessage1("" + Gvar.enemy_name + "は", "氷漬けになった！", 7, false, false, false);
            await Func.AutoDraw(10);
            Gvar.var_83[Gvar.var_314].Var8 = 0;
            Gvar.var_340 = Gvar.var_3056;
            return;
        }
        if (Gvar.var_340 == 409) {
            Gvar.var_314 = Gvar.var_82[Gvar.var_455][Gvar.var_456];
            if (Gvar.var_83[Gvar.var_314].Var0 == 90 || Gvar.var_83[Gvar.var_314].Var0 == 53 || Gvar.var_83[Gvar.var_314].Var0 == 23) {
                Gvar.var_340 = Gvar.var_3056;
                return;
            }
            if (Gvar.var_83[Gvar.var_314].Var13 != 0) {
                Gvar.var_460 = Gvar.var_314;
                await Func.func024();
            }
            if (Gvar.var_83[Gvar.var_314].Var12 == 99) {
                Gvar.var_83[Gvar.var_314].Var12 = 0;
            }
            Gvar.var_83[Gvar.var_314].Var19 = 1;
            Gvar.enemy_list = Gvar.var_83[Gvar.var_314].Var0; // Gvar.var_83[Gvar.var_314].Var0 は enemy list
            if (Gvar.var_83[Gvar.var_314].Var0 == 97 && Gvar.var_83[Gvar.var_314].Var31 >= 11) {
                Gvar.enemy_list = Gvar.var_83[Gvar.var_314].Var31;
            }
            await Func.func626(); // 敵リスト
            Gvar.var_83[Gvar.var_314].Var8 = 1;
            await Func.setMessage1("" + Gvar.enemy_name + "に", "ラバーズが取り付いた！", 7, false, false, false);
            await Func.AutoDraw(10);
            Gvar.var_83[Gvar.var_314].Var8 = 0;
            Gvar.var_340 = Gvar.var_3056;
            return;
        }
        if (Gvar.var_340 == 316 || Gvar.var_340 == 574 || Gvar.var_340 == 560 || Gvar.var_340 == 406) {
            Gvar.var_83[Gvar.var_314].Var17 = 1;
            if (Gvar.var_83[Gvar.var_314].Var12 == 99) {
                Gvar.var_83[Gvar.var_314].Var12 = 0;
            }
            Gvar.var_83[Gvar.var_314].Var13 = 0;
            if (Gvar.var_114 == Gvar.var_314) {
                Gvar.var_114 = 0;
            }
            Gvar.enemy_list = Gvar.var_83[Gvar.var_314].Var0; // Gvar.var_83[Gvar.var_314].Var0 は enemy list
            if (Gvar.var_83[Gvar.var_314].Var0 == 97 && Gvar.var_83[Gvar.var_314].Var31 >= 11) {
                Gvar.enemy_list = Gvar.var_83[Gvar.var_314].Var31;
            }
            await Func.func626(); // 敵リスト
            Gvar.var_83[Gvar.var_314].Var8 = 1;
            Adap.DSPLAY(134);
            await Func.setMessage1("" + Gvar.enemy_name + "は", "混乱してしまった！", 7, false, false, false);
            await Func.AutoDraw(10);
            Gvar.var_83[Gvar.var_314].Var8 = 0;
            Gvar.var_340 = Gvar.var_3056;
            return;
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 43 && Gvar.var_340 == 802) {
            Gvar.var_83[Gvar.var_314].Var17 = 1;
            if (Gvar.var_83[Gvar.var_314].Var12 == 99) {
                Gvar.var_83[Gvar.var_314].Var12 = 0;
            }
            Gvar.var_83[Gvar.var_314].Var13 = 0;
            if (Gvar.var_114 == Gvar.var_314) {
                Gvar.var_114 = 0;
            }
            Gvar.enemy_list = Gvar.var_83[Gvar.var_314].Var0; // Gvar.var_83[Gvar.var_314].Var0 は enemy list
            if (Gvar.var_83[Gvar.var_314].Var0 == 97 && Gvar.var_83[Gvar.var_314].Var31 >= 11) {
                Gvar.enemy_list = Gvar.var_83[Gvar.var_314].Var31;
            }
            await Func.func626(); // 敵リスト
            Gvar.var_83[Gvar.var_314].Var8 = 1;
            Adap.DSPLAY(134);
            await Func.setMessage1("" + Gvar.enemy_name + "は", "鼓膜が破れてしまった！", 7, false, false, false);
            await Func.AutoDraw(10);
            Gvar.var_83[Gvar.var_314].Var8 = 0;
            Gvar.var_340 = Gvar.var_3056;
            return;
        }
        if (Gvar.var_340 == 563 || Gvar.var_340 == 495) {
            Gvar.var_83[Gvar.var_314].Var23 = 1;
            if (Gvar.var_83[Gvar.var_314].Var12 == 99) {
                Gvar.var_83[Gvar.var_314].Var12 = 0;
            }
            Gvar.var_83[Gvar.var_314].Var13 = 0;
            if (Gvar.var_114 == Gvar.var_314) {
                Gvar.var_114 = 0;
            }
            Gvar.enemy_list = Gvar.var_83[Gvar.var_314].Var0; // Gvar.var_83[Gvar.var_314].Var0 は enemy list
            if (Gvar.var_83[Gvar.var_314].Var0 == 97 && Gvar.var_83[Gvar.var_314].Var31 >= 11) {
                Gvar.enemy_list = Gvar.var_83[Gvar.var_314].Var31;
            }
            await Func.func626(); // 敵リスト
            Gvar.var_83[Gvar.var_314].Var8 = 1;
            Adap.DSPLAY(153);
            await Func.setMessage1("" + Gvar.enemy_name + "の", "目は見えなくなった！", 7, false, false, false);
            await Func.AutoDraw(10);
            Gvar.var_83[Gvar.var_314].Var8 = 0;
            Gvar.var_340 = Gvar.var_3056;
            return;
        }
        if (Gvar.var_340 == 322 || Gvar.var_340 == 578) {
            if (Gvar.var_83[Gvar.var_314].Var12 == 99) {
                Gvar.var_83[Gvar.var_314].Var12 = 0;
            }
            Gvar.var_83[Gvar.var_314].Var13 = 0;
            if (Gvar.var_83[Gvar.var_314].Var14 == 0) {
                Gvar.var_83[Gvar.var_314].Var15 = 1;
            }
            if (Gvar.var_83[Gvar.var_314].Var14 != 0) {
                Gvar.var_83[Gvar.var_314].Var14 = 0;
                Gvar.var_83[Gvar.var_314].Var15 = 0;
            }
            Gvar.enemy_list = Gvar.var_83[Gvar.var_314].Var0; // Gvar.var_83[Gvar.var_314].Var0 は enemy list
            if (Gvar.var_83[Gvar.var_314].Var0 == 97 && Gvar.var_83[Gvar.var_314].Var31 >= 11) {
                Gvar.enemy_list = Gvar.var_83[Gvar.var_314].Var31;
            }
            await Func.func626(); // 敵リスト
            Gvar.var_83[Gvar.var_314].Var8 = 1;
            Adap.DSPLAY(154);
            await Func.setMessage1("" + Gvar.enemy_name + "の", "動きが速くなった！", 7, false, false, false);
            await Func.AutoDraw(10);
            Gvar.var_83[Gvar.var_314].Var8 = 0;
            Gvar.var_340 = Gvar.var_3056;
            return;
        }
        if (Gvar.var_340 == 320 || Gvar.var_340 == 817) {
            Gvar.var_83[Gvar.var_314].Var30 = 1;
            if (Gvar.var_83[Gvar.var_314].Var12 == 99) {
                Gvar.var_83[Gvar.var_314].Var12 = 0;
            }
            Gvar.var_83[Gvar.var_314].Var13 = 0;
            Gvar.enemy_list = Gvar.var_83[Gvar.var_314].Var0; // Gvar.var_83[Gvar.var_314].Var0 は enemy list
            if (Gvar.var_83[Gvar.var_314].Var0 == 97 && Gvar.var_83[Gvar.var_314].Var31 >= 11) {
                Gvar.enemy_list = Gvar.var_83[Gvar.var_314].Var31;
            }
            await Func.func626(); // 敵リスト
            Gvar.var_83[Gvar.var_314].Var8 = 1;
            await Func.setMessage1("" + Gvar.enemy_name + "は", "透明状態になった！", 7, false, false, false);
            await Func.AutoDraw(10);
            Gvar.var_83[Gvar.var_314].Var8 = 0;
            Gvar.var_340 = Gvar.var_3056;
            return;
        }
        if (Gvar.var_340 == 1101) {
            Gvar.var_83[Gvar.var_314].Var8 = 1;
            if (Gvar.var_83[Gvar.var_314].Var12 == 99) {
                Gvar.var_83[Gvar.var_314].Var12 = 0;
            }
            Gvar.var_83[Gvar.var_314].Var13 = 0;
            await Func.AutoDraw(10);
            Gvar.var_83[Gvar.var_314].Var30 = 1;
            Gvar.var_1584 = (Gvar.var_83[Gvar.var_314].Var1 - Gvar.var_66 + 4) * 40;
            Gvar.var_1585 = (Gvar.var_83[Gvar.var_314].Var2 - Gvar.var_67 + 4) * 40 - 10;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1583 = 1;
    
            Adap.DSPLAY(175);
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                if (cnt2 == 4) {
                    Gvar.var_83[Gvar.var_314].Var8 = 0;
                }
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1583++;
            }
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_1583 = 0;
            await Func.setMessage1("ｱｸｱ･ﾈｯｸﾚｽは", "蒸発して透明になった！", 7, false, false, false);
            await Func.AutoDraw(10);
            Gvar.var_340 = Gvar.var_3056;
            return;
        }
        if (Gvar.var_340 == 562 || Gvar.var_340 == 991 || Gvar.var_340 == 992 || Gvar.var_340 == 993 || Gvar.var_340 == 995 || Gvar.var_340 == 996) {
            if (Gvar.var_83[Gvar.var_314].Var31 != 5 && Gvar.var_83[Gvar.var_314].Var31 != 4) {
                if (Gvar.var_83[Gvar.var_314].Var12 == 99) {
                    Gvar.var_83[Gvar.var_314].Var12 = 0;
                }
                Gvar.var_83[Gvar.var_314].Var13 = 0;
                Gvar.var_83[Gvar.var_314].Var39 = Gvar.var_83[Gvar.var_314].Var39 + 1;
                if (Gvar.var_83[Gvar.var_314].Var39 == 1) {
                    Gvar.var_83[Gvar.var_314].Var39 = 2;
                }
                Gvar.enemy_list = Gvar.var_83[Gvar.var_314].Var0; // Gvar.var_83[Gvar.var_314].Var0 は enemy list
                if (Gvar.var_83[Gvar.var_314].Var0 == 97 && Gvar.var_83[Gvar.var_314].Var31 >= 11) {
                    Gvar.enemy_list = Gvar.var_83[Gvar.var_314].Var31;
                }
                await Func.func626(); // 敵リスト
                Gvar.var_83[Gvar.var_314].Var3 = Math.floor(Gvar.enemy_hp * (Gvar.var_83[Gvar.var_314].Var39 + 10) / 10);
                if (Gvar.var_83[Gvar.var_314].Var3 >= 999) {
                    Gvar.var_83[Gvar.var_314].Var3 = 999;
                }
                Gvar.var_83[Gvar.var_314].Var8 = 1;
                Adap.DSPLAY(142); // レベルアップした時の効果音
                await Func.setMessage1("" + Gvar.enemy_name + "は", "レベルが上がった！", 7, false, false, false);
                await Func.AutoDraw(10);
                Gvar.var_83[Gvar.var_314].Var8 = 0;
                Gvar.var_340 = Gvar.var_3056;
                return;
            }
            if (Gvar.var_83[Gvar.var_314].Var31 == 5 && Gvar.var_83[Gvar.var_314].Var39 < 10) {
                if (Gvar.var_83[Gvar.var_314].Var12 == 99) {
                    Gvar.var_83[Gvar.var_314].Var12 = 0;
                }
                Gvar.var_83[Gvar.var_314].Var13 = 0;
                Gvar.var_83[Gvar.var_314].Var8 = 1;
                Gvar.belongings_item_list = Gvar.var_340;
                Gvar.disc_rarity = Gvar.var_1833;
                await Func.func492(); // アイテムリスト呼び出し
                await Func.setMessage1("" + Gvar.item_name + "が命中した！", "", 7, false, false, false);
                Gvar.var_3072 = Gvar.var_314;
                await Func.func682();
                Gvar.var_83[Gvar.var_314].Var16 = Gvar.var_83[Gvar.var_314].Var16 + Gvar.var_3073;
                Gvar.var_1912 = Gvar.var_673;
                Gvar.var_673 = Gvar.var_314;
                await Func.func683();
                Gvar.var_673 = Gvar.var_1912;
                Gvar.var_83[Gvar.var_314].Var8 = 0;
                Gvar.var_340 = Gvar.var_3056;
                return;
            }
        }
        if (Gvar.var_340 == 586 && Gvar.var_83[Gvar.var_314].Var39 >= 2) {
            if (Gvar.var_83[Gvar.var_314].Var12 == 99) {
                Gvar.var_83[Gvar.var_314].Var12 = 0;
            }
            Gvar.var_83[Gvar.var_314].Var13 = 0;
            Gvar.var_83[Gvar.var_314].Var39 = Gvar.var_83[Gvar.var_314].Var39 - 1;
            if (Gvar.var_83[Gvar.var_314].Var39 <= 1) {
                Gvar.var_83[Gvar.var_314].Var39 = 0;
            }
            if (Gvar.var_83[Gvar.var_314].Var31 == 5) {
                Gvar.var_3072 = Gvar.var_314;
                await Func.func682();
                Gvar.var_83[Gvar.var_314].Var16 = Gvar.var_83[Gvar.var_314].Var16 + Gvar.var_3073;
                Gvar.var_83[Gvar.var_314].Var16 = Gvar.var_83[Gvar.var_314].Var16 - 1;
            }
            Gvar.enemy_list = Gvar.var_83[Gvar.var_314].Var0; // Gvar.var_83[Gvar.var_314].Var0 は enemy list
            if (Gvar.var_83[Gvar.var_314].Var0 == 97 && Gvar.var_83[Gvar.var_314].Var31 >= 11) {
                Gvar.enemy_list = Gvar.var_83[Gvar.var_314].Var31;
            }
            await Func.func626(); // 敵リスト
            if (Gvar.var_83[Gvar.var_314].Var3 >= Gvar.enemy_hp) {
                Gvar.var_83[Gvar.var_314].Var3 = Gvar.enemy_hp;
            }
            Gvar.var_83[Gvar.var_314].Var8 = 1;
            Adap.DSPLAY(151);
            await Func.setMessage1("" + Gvar.enemy_name + "は", "レベルが下がった！", 7, false, false, false);
            await Func.AutoDraw(10);
            Gvar.var_83[Gvar.var_314].Var8 = 0;
            Gvar.var_340 = Gvar.var_3056;
            return;
        }
        if (Gvar.var_340 == 1100) {
            Gvar.var_83[Gvar.var_314].Var12 = 0;
            Gvar.var_83[Gvar.var_314].Var13 = 0;
            await Music.func127();
            Gvar.var_83[Gvar.var_314].Var8 = 1;
            await Func.setMessage1("ﾍﾟｯｼ「プロシュート兄貴ィ！」", "", 7, true, false, true);
            await Func.setMessage1("ﾍﾟｯｼ「兄貴の覚悟が！", "  【言葉】ではなく【心】で理解できた！」", 7, false, false, true);
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
            }
            Gvar.var_83[Gvar.var_314].Var8 = 0;
            Gvar.var_83[Gvar.var_314].Var0 = 107;
            Gvar.var_340 = Gvar.var_3056;
            return;
        }
        if (Gvar.var_340 == 576) {
            Gvar.var_83[Gvar.var_314].Var12 = 0;
            Gvar.var_83[Gvar.var_314].Var13 = 0;
            Gvar.var_83[Gvar.var_314].Var24 = 10;
            Gvar.var_83[Gvar.var_314].Var8 = 1;
            await Func.setMessage1("【10ターン後に破裂する！】", "", 7, false, false, false);
            await Func.AutoDraw(10);
            Gvar.var_83[Gvar.var_314].Var8 = 0;
            Gvar.var_340 = Gvar.var_3056;
            return;
        }
        if (Gvar.var_340 == 488) {
            await Func.func668();
            Gvar.var_340 = Gvar.var_3056;
            return;
        }
        if (Gvar.var_340 == 579) {
    
            Adap.DSPLAY(117);
            await Func.AutoDraw(10);
            await Func.func669();
            Gvar.var_340 = Gvar.var_3056;
            return;
        }
        if (Gvar.var_340 == 1102) {
            Gvar.var_83[Gvar.var_314].Var8 = 1;
            Adap.DSPLAY(117);
            if (Gvar.var_83[Gvar.var_314].Var0 == 93) {
                await Func.setMessage1("ｴﾝﾎﾟﾘｵにDISCが差し込まれた！", "", 7, false, false, false);
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 156) {
                await Func.setMessage1("ｳｪｻﾞｰにDISCが差し込まれた！", "", 7, false, false, false);
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 144) {
                await Func.setMessage1("川尻浩作に矢が刺さった！", "", 7, false, false, false);
            }
            await Func.AutoDraw(10);
            Gvar.var_83[Gvar.var_314].Var8 = 0;
            if (Gvar.var_83[Gvar.var_314].Var0 == 93) {
                Gvar.var_83[Gvar.var_314].Var0 = 98;
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 156) {
                Gvar.var_83[Gvar.var_314].Var0 = 159;
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 144) {
                Gvar.var_83[Gvar.var_314].Var0 = 137;
            }
            return;
        }
        await Func.func661();
        Gvar.var_673 = Gvar.var_314;
        Gvar.var_403 = "";
        Gvar.var_402 = Gvar.var_314;
        if (Gvar.var_340 == 401) {
            if (Gvar.var_120 == 1 || Gvar.var_174 == 1) {
                Gvar.var_403 = "F・Fのパワーは全開だ！";
            }
        }
        // No = 414 タスクact2 & アイテム「鉄球」を使用して射撃攻撃ダメージがアップしている場合
        if (Gvar.var_340 == 414 && Gvar.var_168 == 1) {
            Gvar.var_403 = "爪の回転がアップしている！";
        }
        // Ver0.1401にて追加。No = 415 タスクact1 & アイテム「鉄球」を使用して射撃攻撃ダメージがアップしている場合
        if (Gvar.var_340 == 415 && Gvar.var_168 == 1) {
            Gvar.var_403 = "爪の回転がアップしている！";
        }
        // Ver0.1401にて追加。No = 416 タスクact3 & アイテム「鉄球」を使用して射撃攻撃ダメージがアップしている場合
        if (Gvar.var_340 == 416 && Gvar.var_168 == 1) {
            Gvar.var_403 = "爪の回転がアップしている！";
        }
        if (Gvar.var_340 == 411) {
            if (Gvar.var_2992 == 0) {
                Gvar.var_403 = "";
            }
            if (Gvar.var_2992 == 1) {
                Gvar.var_403 = "";
            }
            if (Gvar.var_2992 == 2) {
                Gvar.var_403 = "「ビンゴォ！」";
            }
            if (Gvar.var_2992 == 3) {
                Gvar.var_403 = "";
            }
            if (Gvar.var_2992 == 4) {
                Gvar.var_403 = "「舌を引きちぎった！」";
            }
            if (Gvar.var_2992 == 5) {
                Gvar.var_403 = "";
            }
            if (Gvar.var_2992 == 6) {
                Gvar.var_403 = "「マサクゥル！（みな殺し！）」";
            }
            if (Gvar.var_2992 == 7) {
                Gvar.var_403 = "";
            }
            if (Gvar.var_2992 == 8) {
                Gvar.var_403 = "「ビンゴにゃあ のろすぎるゥゥゥゥゥ」";
            }
            if (Gvar.var_2992 >= 9) {
                Gvar.var_403 = "";
            }
        }
        await Func.func705();
        Gvar.var_83[Gvar.var_314].Var8 = 0;
        if (Gvar.var_83[Gvar.var_314].Var0 == 33) {
            Gvar.var_83[Gvar.var_314].Var0 = 34;
            Gvar.var_83[Gvar.var_314].Var31 = 1;
        }
        Gvar.var_340 = Gvar.var_3056;
        return;
}

export {func660}
