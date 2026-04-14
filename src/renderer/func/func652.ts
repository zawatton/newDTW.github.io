/**
 * func652 — func652 No = 113 クラッシュのDISCを攻撃装備している時の水属性媒体から遠隔攻撃処理
 *
 * (org原典: newDTW_func6)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

async function func652(this: any) {
        Adap.dbgprt(652);
        if (Gvar.var_201 == 14) {
            return;
        }
        await Func.func426();
        Gvar.var_570 = Gvar.var_233[Gvar.var_553].Var13;
        Gvar.var_3024 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_97; ++cnt1) {
            if (Gvar.var_83[Gvar.var_3024].Var10 == Gvar.var_201 && Gvar.var_83[Gvar.var_3024].Var0 != 0 && Gvar.var_83[Gvar.var_3024].Var31 != 4 && Gvar.var_83[Gvar.var_3024].Var31 != 5) {
                Gvar.var_1711 = Gvar.var_83[Gvar.var_3024].Var1;
                Gvar.var_1712 = Gvar.var_83[Gvar.var_3024].Var2;
                Gvar.var_1713 = Gvar.var_1711 - 1;
                Gvar.var_1714 = Gvar.var_1711 + 1;
                Gvar.var_1715 = Gvar.var_1712 + 1;
                Gvar.var_1716 = Gvar.var_1712 - 1;
                if (Gvar.var_1713 < 0) {
                    Gvar.var_1713 = 0;
                }
                if (Gvar.var_1716 < 0) {
                    Gvar.var_1716 = 0;
                }
                if (Gvar.var_1714 > Gvar.var_33) {
                    Gvar.var_1714 = Gvar.var_33;
                }
                if (Gvar.var_1715 > Gvar.var_34) {
                    Gvar.var_1715 = Gvar.var_34;
                }
                Gvar.var_3025 = 0;
                if (Gvar.var_3025 == 0 && Gvar.var_71[Gvar.var_1713][Gvar.var_1712] == 13) {
                    Gvar.var_3025 = 1;
                    Gvar.var_1449 = 4;
                    Gvar.var_1450 = Gvar.var_1713;
                    Gvar.var_1451 = Gvar.var_1712;
                }
                if (Gvar.var_3025 == 0 && Gvar.var_71[Gvar.var_1714][Gvar.var_1712] == 13) {
                    Gvar.var_3025 = 1;
                    Gvar.var_1449 = 6;
                    Gvar.var_1450 = Gvar.var_1714;
                    Gvar.var_1451 = Gvar.var_1712;
                }
                if (Gvar.var_3025 == 0 && Gvar.var_71[Gvar.var_1711][Gvar.var_1716] == 13) {
                    Gvar.var_3025 = 1;
                    Gvar.var_1449 = 8;
                    Gvar.var_1450 = Gvar.var_1711;
                    Gvar.var_1451 = Gvar.var_1716;
                }
                if (Gvar.var_3025 == 0 && Gvar.var_71[Gvar.var_1711][Gvar.var_1715] == 13) {
                    Gvar.var_3025 = 1;
                    Gvar.var_1449 = 2;
                    Gvar.var_1450 = Gvar.var_1711;
                    Gvar.var_1451 = Gvar.var_1715;
                }
                if (Gvar.var_3025 == 0 && Gvar.var_71[Gvar.var_1713][Gvar.var_1716] == 13) {
                    Gvar.var_3025 = 1;
                    Gvar.var_1449 = 7;
                    Gvar.var_1450 = Gvar.var_1713;
                    Gvar.var_1451 = Gvar.var_1716;
                }
                if (Gvar.var_3025 == 0 && Gvar.var_71[Gvar.var_1714][Gvar.var_1716] == 13) {
                    Gvar.var_3025 = 1;
                    Gvar.var_1449 = 9;
                    Gvar.var_1450 = Gvar.var_1714;
                    Gvar.var_1451 = Gvar.var_1716;
                }
                if (Gvar.var_3025 == 0 && Gvar.var_71[Gvar.var_1713][Gvar.var_1715] == 13) {
                    Gvar.var_3025 = 1;
                    Gvar.var_1449 = 1;
                    Gvar.var_1450 = Gvar.var_1713;
                    Gvar.var_1451 = Gvar.var_1715;
                }
                if (Gvar.var_3025 == 0 && Gvar.var_71[Gvar.var_1714][Gvar.var_1715] == 13) {
                    Gvar.var_3025 = 1;
                    Gvar.var_1449 = 3;
                    Gvar.var_1450 = Gvar.var_1714;
                    Gvar.var_1451 = Gvar.var_1715;
                }
                if (Gvar.var_3025 == 0 && Gvar.var_77[Gvar.var_1713][Gvar.var_1712] != 0) {
                    Gvar.var_3026 = Gvar.var_77[Gvar.var_1713][Gvar.var_1712];
                    if (Gvar.var_78[Gvar.var_3026].Var0 == 632) { // No = 632 キリマンジャロの雪解け水が床アイテムとしてある場合
                        Gvar.var_3025 = 1;
                        Gvar.var_1449 = 4;
                        Gvar.var_1450 = Gvar.var_1713;
                        Gvar.var_1451 = Gvar.var_1712;
                    }
                }
                if (Gvar.var_3025 == 0 && Gvar.var_77[Gvar.var_1714][Gvar.var_1712] != 0) {
                    Gvar.var_3026 = Gvar.var_77[Gvar.var_1714][Gvar.var_1712];
                    if (Gvar.var_78[Gvar.var_3026].Var0 == 632) { // No = 632 キリマンジャロの雪解け水が床アイテムとしてある場合
                        Gvar.var_3025 = 1;
                        Gvar.var_1449 = 6;
                        Gvar.var_1450 = Gvar.var_1714;
                        Gvar.var_1451 = Gvar.var_1712;
                    }
                }
                if (Gvar.var_3025 == 0 && Gvar.var_77[Gvar.var_1711][Gvar.var_1716] != 0) {
                    Gvar.var_3026 = Gvar.var_77[Gvar.var_1711][Gvar.var_1716];
                    if (Gvar.var_78[Gvar.var_3026].Var0 == 632) { // No = 632 キリマンジャロの雪解け水が床アイテムとしてある場合
                        Gvar.var_3025 = 1;
                        Gvar.var_1449 = 8;
                        Gvar.var_1450 = Gvar.var_1711;
                        Gvar.var_1451 = Gvar.var_1716;
                    }
                }
                if (Gvar.var_3025 == 0 && Gvar.var_77[Gvar.var_1711][Gvar.var_1715] != 0) {
                    Gvar.var_3026 = Gvar.var_77[Gvar.var_1711][Gvar.var_1715];
                    if (Gvar.var_78[Gvar.var_3026].Var0 == 632) { // No = 632 キリマンジャロの雪解け水が床アイテムとしてある場合
                        Gvar.var_3025 = 1;
                        Gvar.var_1449 = 2;
                        Gvar.var_1450 = Gvar.var_1711;
                        Gvar.var_1451 = Gvar.var_1715;
                    }
                }
                if (Gvar.var_3025 == 0 && Gvar.var_77[Gvar.var_1713][Gvar.var_1716] != 0) {
                    Gvar.var_3026 = Gvar.var_77[Gvar.var_1713][Gvar.var_1716];
                    if (Gvar.var_78[Gvar.var_3026].Var0 == 632) { // No = 632 キリマンジャロの雪解け水が床アイテムとしてある場合
                        Gvar.var_3025 = 1;
                        Gvar.var_1449 = 7;
                        Gvar.var_1450 = Gvar.var_1713;
                        Gvar.var_1451 = Gvar.var_1716;
                    }
                }
                if (Gvar.var_3025 == 0 && Gvar.var_77[Gvar.var_1714][Gvar.var_1716] != 0) {
                    Gvar.var_3026 = Gvar.var_77[Gvar.var_1714][Gvar.var_1716];
                    if (Gvar.var_78[Gvar.var_3026].Var0 == 632) { // No = 632 キリマンジャロの雪解け水が床アイテムとしてある場合
                        Gvar.var_3025 = 1;
                        Gvar.var_1449 = 9;
                        Gvar.var_1450 = Gvar.var_1714;
                        Gvar.var_1451 = Gvar.var_1716;
                    }
                }
                if (Gvar.var_3025 == 0 && Gvar.var_77[Gvar.var_1713][Gvar.var_1715] != 0) {
                    Gvar.var_3026 = Gvar.var_77[Gvar.var_1713][Gvar.var_1715];
                    if (Gvar.var_78[Gvar.var_3026].Var0 == 632) { // No = 632 キリマンジャロの雪解け水が床アイテムとしてある場合
                        Gvar.var_3025 = 1;
                        Gvar.var_1449 = 1;
                        Gvar.var_1450 = Gvar.var_1713;
                        Gvar.var_1451 = Gvar.var_1715;
                    }
                }
                if (Gvar.var_3025 == 0 && Gvar.var_77[Gvar.var_1714][Gvar.var_1715] != 0) {
                    Gvar.var_3026 = Gvar.var_77[Gvar.var_1714][Gvar.var_1715];
                    if (Gvar.var_78[Gvar.var_3026].Var0 == 632) { // No = 632 キリマンジャロの雪解け水が床アイテムとしてある場合
                        Gvar.var_3025 = 1;
                        Gvar.var_1449 = 3;
                        Gvar.var_1450 = Gvar.var_1714;
                        Gvar.var_1451 = Gvar.var_1715;
                    }
                }
                if (Gvar.var_3025 == 0 && Gvar.var_82[Gvar.var_1713][Gvar.var_1712] != 0) {
                    Gvar.var_3026 = Gvar.var_82[Gvar.var_1713][Gvar.var_1712];
                    // Gvar.enemy_list == 27 ゲブ神、Gvar.enemy_list == 115 アクアネックレス
                    if (Gvar.var_83[Gvar.var_3026].Var0 == 27 || Gvar.var_83[Gvar.var_3026].Var0 == 115) {
                        Gvar.var_3025 = 1;
                        Gvar.var_1449 = 4;
                        Gvar.var_1450 = Gvar.var_1713;
                        Gvar.var_1451 = Gvar.var_1712;
                    }
                }
                if (Gvar.var_3025 == 0 && Gvar.var_82[Gvar.var_1714][Gvar.var_1712] != 0) {
                    Gvar.var_3026 = Gvar.var_82[Gvar.var_1714][Gvar.var_1712];
                    // Gvar.enemy_list == 27 ゲブ神、Gvar.enemy_list == 115 アクアネックレス
                    if (Gvar.var_83[Gvar.var_3026].Var0 == 27 || Gvar.var_83[Gvar.var_3026].Var0 == 115) {
                        Gvar.var_3025 = 1;
                        Gvar.var_1449 = 6;
                        Gvar.var_1450 = Gvar.var_1714;
                        Gvar.var_1451 = Gvar.var_1712;
                    }
                }
                if (Gvar.var_3025 == 0 && Gvar.var_82[Gvar.var_1711][Gvar.var_1716] != 0) {
                    Gvar.var_3026 = Gvar.var_82[Gvar.var_1711][Gvar.var_1716];
                    // Gvar.enemy_list == 27 ゲブ神、Gvar.enemy_list == 115 アクアネックレス
                    if (Gvar.var_83[Gvar.var_3026].Var0 == 27 || Gvar.var_83[Gvar.var_3026].Var0 == 115) {
                        Gvar.var_3025 = 1;
                        Gvar.var_1449 = 8;
                        Gvar.var_1450 = Gvar.var_1711;
                        Gvar.var_1451 = Gvar.var_1716;
                    }
                }
                if (Gvar.var_3025 == 0 && Gvar.var_82[Gvar.var_1711][Gvar.var_1715] != 0) {
                    Gvar.var_3026 = Gvar.var_82[Gvar.var_1711][Gvar.var_1715];
                    // Gvar.enemy_list == 27 ゲブ神、Gvar.enemy_list == 115 アクアネックレス
                    if (Gvar.var_83[Gvar.var_3026].Var0 == 27 || Gvar.var_83[Gvar.var_3026].Var0 == 115) {
                        Gvar.var_3025 = 1;
                        Gvar.var_1449 = 2;
                        Gvar.var_1450 = Gvar.var_1711;
                        Gvar.var_1451 = Gvar.var_1715;
                    }
                }
                if (Gvar.var_3025 == 0 && Gvar.var_82[Gvar.var_1713][Gvar.var_1716] != 0) {
                    Gvar.var_3026 = Gvar.var_82[Gvar.var_1713][Gvar.var_1716];
                    // Gvar.enemy_list == 27 ゲブ神、Gvar.enemy_list == 115 アクアネックレス
                    if (Gvar.var_83[Gvar.var_3026].Var0 == 27 || Gvar.var_83[Gvar.var_3026].Var0 == 115) {
                        Gvar.var_3025 = 1;
                        Gvar.var_1449 = 7;
                        Gvar.var_1450 = Gvar.var_1713;
                        Gvar.var_1451 = Gvar.var_1716;
                    }
                }
                if (Gvar.var_3025 == 0 && Gvar.var_82[Gvar.var_1714][Gvar.var_1716] != 0) {
                    Gvar.var_3026 = Gvar.var_82[Gvar.var_1714][Gvar.var_1716];
                    // Gvar.enemy_list == 27 ゲブ神、Gvar.enemy_list == 115 アクアネックレス
                    if (Gvar.var_83[Gvar.var_3026].Var0 == 27 || Gvar.var_83[Gvar.var_3026].Var0 == 115) {
                        Gvar.var_3025 = 1;
                        Gvar.var_1449 = 9;
                        Gvar.var_1450 = Gvar.var_1714;
                        Gvar.var_1451 = Gvar.var_1716;
                    }
                }
                if (Gvar.var_3025 == 0 && Gvar.var_82[Gvar.var_1713][Gvar.var_1715] != 0) {
                    Gvar.var_3026 = Gvar.var_82[Gvar.var_1713][Gvar.var_1715];
                    // Gvar.enemy_list == 27 ゲブ神、Gvar.enemy_list == 115 アクアネックレス
                    if (Gvar.var_83[Gvar.var_3026].Var0 == 27 || Gvar.var_83[Gvar.var_3026].Var0 == 115) {
                        Gvar.var_3025 = 1;
                        Gvar.var_1449 = 1;
                        Gvar.var_1450 = Gvar.var_1713;
                        Gvar.var_1451 = Gvar.var_1715;
                    }
                }
                if (Gvar.var_3025 == 0 && Gvar.var_82[Gvar.var_1714][Gvar.var_1715] != 0) {
                    Gvar.var_3026 = Gvar.var_82[Gvar.var_1714][Gvar.var_1715];
                    // Gvar.enemy_list == 27 ゲブ神、Gvar.enemy_list == 115 アクアネックレス
                    if (Gvar.var_83[Gvar.var_3026].Var0 == 27 || Gvar.var_83[Gvar.var_3026].Var0 == 115) {
                        Gvar.var_3025 = 1;
                        Gvar.var_1449 = 3;
                        Gvar.var_1450 = Gvar.var_1714;
                        Gvar.var_1451 = Gvar.var_1715;
                    }
                }
                if (Gvar.var_3025 == 1) {
                    Gvar.var_1450 = (Gvar.var_1450 - Gvar.var_66 + 4) * 40;
                    Gvar.var_1451 = (Gvar.var_1451 - Gvar.var_67 + 4) * 40 - 10;
                    Gvar.var_314 = Gvar.var_3024;
                    Gvar.var_402 = Gvar.var_3024;
                    Gvar.enemy_list = Gvar.var_83[Gvar.var_3024].Var0;
                    Gvar.var_403 = "「クラッシュ！  食い破れ！」";
                    if (Gvar.var_143 >= 1) {
                        Gvar.var_2267[8] = Gvar.var_2267[7];
                        Gvar.var_2267[7] = Gvar.var_2267[6];
                        Gvar.var_2267[6] = Gvar.var_2267[5];
                        Gvar.var_2267[5] = Gvar.var_2267[4];
                        Gvar.var_2267[4] = Gvar.var_2267[3];
                        Gvar.var_2267[3] = Gvar.var_2267[2];
                        Gvar.var_2267[2] = Gvar.var_2267[1];
                        Gvar.var_2267[1] = Gvar.var_2267[0];
                        Gvar.var_2267[0] = Gvar.var_83[Gvar.var_314].Var0; // Gvar.var_83[Gvar.var_314].Var0 は enemy list
                        if (Gvar.var_2267[0] != 0 && Gvar.var_2267[0] == Gvar.var_2267[1]) {
                            Gvar.var_143 = 2;
                        }
                        if (Gvar.var_143 == 2 && Gvar.var_2267[1] == Gvar.var_2267[2]) {
                            Gvar.var_143 = 3;
                        }
                        if (Gvar.var_143 == 3 && Gvar.var_2267[2] == Gvar.var_2267[3]) {
                            Gvar.var_143 = 4;
                        }
                        if (Gvar.var_143 == 4 && Gvar.var_2267[3] == Gvar.var_2267[4]) {
                            Gvar.var_143 = 5;
                        }
                        if (Gvar.var_143 == 5 && Gvar.var_2267[4] == Gvar.var_2267[5]) {
                            Gvar.var_143 = 6;
                        }
                        if (Gvar.var_143 == 6 && Gvar.var_2267[5] == Gvar.var_2267[6]) {
                            Gvar.var_143 = 7;
                        }
                        if (Gvar.var_143 == 7 && Gvar.var_2267[6] == Gvar.var_2267[7]) {
                            Gvar.var_143 = 8;
                        }
                        if (Gvar.var_143 == 8 && Gvar.var_2267[7] == Gvar.var_2267[8]) {
                            Gvar.var_143 = 9;
                        }
                        if (Gvar.var_2267[0] != 0 && Gvar.var_2267[0] != Gvar.var_2267[1]) {
                            Gvar.var_143 = 1;
                        }
                    }
                    Gvar.var_1452 = 1;
                    Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
                    for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                        await Func.func337(); // メッセージ表示処理(自動)
                        Gvar.var_1452++;
                        if (Gvar.var_1452 == 4) {
                            Gvar.var_2867 = Adap.rnd(12);
                            // Gvar.var_111 命中率を上げるフラグがON
                            if (Gvar.var_111 == 1 || Gvar.var_83[Gvar.var_3024].Var12 != 0 || Gvar.var_83[Gvar.var_3024].Var13 != 0) {
                                Gvar.var_2867 = 1;
                            }
                            if (Gvar.var_2867 != 0) {
                                Gvar.enemy_list = Gvar.var_83[Gvar.var_3024].Var0;
                                await Func.func626(); // 敵リスト
                                await Func.func638();
                                Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
                                Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
                                Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
                                await Func.func705();
                            }
                            if (Gvar.var_2867 == 0) {
                                await Music.func090();
                                for (let cnt7 = 0; cnt7 < 3; ++cnt7) {
                                    await Func.func337(); // メッセージ表示処理(自動)
                                }
                            }
                        }
                    }
                    Gvar.var_1452 = 0;
                    Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
                    if (Gvar.var_211 <= 0) {
                        break;
                    }
                }
            }
            Gvar.var_3024 = Gvar.var_3024 + 1;
        }
        return;
}

export {func652}
