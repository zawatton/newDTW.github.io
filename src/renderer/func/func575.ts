/**
 * func575 — func575 ディアボロと敵のターン交代処理?(敵の位置座標処理)
 *
 * ここがおかしくなると、ディアボロの行動時に敵が攻撃してくる。敵が瞬間移動する(敵の位置座標の処理をしている?)
 *
 * (org原典: newDTW_func5)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func575(this: any) {
        Adap.dbgprt(575);
        Gvar.var_673 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_97; ++cnt1) {
            Gvar.var_2707 = cnt1;
            if (Gvar.var_83[Gvar.var_673].Var0 == 0) {
                Gvar.var_423 = Gvar.var_83[Gvar.var_673].Var1;
                Gvar.var_424 = Gvar.var_83[Gvar.var_673].Var2;
                Gvar.var_82[Gvar.var_423][Gvar.var_424] = 0;
                Gvar.var_83[Gvar.var_673].Var0 = 0;
                Gvar.var_83[Gvar.var_673].Var1 = 0;
                Gvar.var_83[Gvar.var_673].Var2 = 0;
                Gvar.var_673 = Gvar.var_673 + 1;
                continue;
            }
            if (Gvar.time_paused_count >= 1 && Gvar.var_673 != Gvar.var_152) {
                Gvar.var_673 = Gvar.var_673 + 1;
                continue;
            }
            Gvar.var_83[Gvar.var_673].Var9 = 0;
            Gvar.var_83[Gvar.var_673].Var18 = 0;
            Gvar.var_83[Gvar.var_673].Var6 = 0;
            Gvar.var_83[Gvar.var_673].Var27 = 0;
            Gvar.var_423 = Gvar.var_83[Gvar.var_673].Var1;
            Gvar.var_424 = Gvar.var_83[Gvar.var_673].Var2;
            if (Gvar.var_82[Gvar.var_423][Gvar.var_424] == 0) {
                Gvar.var_83[Gvar.var_673].Var0 = 0;
                Gvar.var_83[Gvar.var_673].Var1 = 0;
                Gvar.var_83[Gvar.var_673].Var2 = 0;
                Gvar.var_673 = Gvar.var_673 + 1;
                continue;
            }
            Gvar.var_2708 = 0; // 敵が攻撃してこなくなるフラグOFF
            Gvar.var_2709 = 0;
            Gvar.var_2710 = 0;
            if (Gvar.var_83[Gvar.var_673].Var12 >= 1) {
                Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
            }
            if (Gvar.var_83[Gvar.var_673].Var13 >= 1) {
                Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
            }
            if (Gvar.var_83[Gvar.var_673].Var14 == 1) {
                Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
            }
            // No = 10 ノートリアスBIG
            if (Gvar.var_83[Gvar.var_673].Var0 == 10 && Gvar.var_133 != 0) {
                Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
            }
            // No = 17 シアハートアタック
            if (Gvar.var_83[Gvar.var_673].Var0 == 17 && Gvar.var_83[Gvar.var_673].Var3 == 1 && Gvar.var_83[Gvar.var_673].Var20 == 0) {
                Gvar.var_83[Gvar.var_673].Var9 = 1;
                Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
            }
            // No = 19 アラビアファッツ
            if (Gvar.var_83[Gvar.var_673].Var0 == 19) {
                Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
            }
            // No = 23 ただの死体
            if (Gvar.var_83[Gvar.var_673].Var0 == 23) {
                Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
            }
            // No = 26 ハーヴェスト
            if (Gvar.var_83[Gvar.var_673].Var0 == 26 && Gvar.var_83[Gvar.var_673].Var26 >= 1 && Gvar.var_83[Gvar.var_673].Var20 == 0) {
                Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
            }
            // No = 33 トニオさん(通常)
            if (Gvar.var_83[Gvar.var_673].Var0 == 33) {
                Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
            }
            // No = 35 仗助
            // No = 134 ジョリーン、No = 35 仗助は共通設定。Ver0.1403にて分離
            if (Gvar.var_83[Gvar.var_673].Var0 == 35) {
                if (Gvar.var_83[Gvar.var_673].Var10 != 14) {
                    Gvar.var_616 = 1;
                    for (let cnt4 = 0; cnt4 < Gvar.var_97; ++cnt4) {
                        if (Gvar.var_83[Gvar.var_616].Var0 != 0 && Gvar.var_673 != Gvar.var_616 && Gvar.var_83[Gvar.var_616].Var31 != 4 && Gvar.var_83[Gvar.var_616].Var31 != 5 && Gvar.var_83[Gvar.var_673].Var10 == Gvar.var_83[Gvar.var_616].Var10) {
                            Gvar.var_2646 = Gvar.var_616;
                            await Func.func578();
                            if (Gvar.var_2647 >= 1) {
                                Gvar.var_2709 = 1;
                                break;
                            }
                        }
                        Gvar.var_616++;
                    }
                }
            }
            // No = 36 スピードワゴン
            if (Gvar.var_83[Gvar.var_673].Var0 == 36 && Gvar.var_83[Gvar.var_673].Var31 == 4) {
                Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
            }
            // No = 44 レッドホットチリペッパー
            if (Gvar.var_83[Gvar.var_673].Var0 == 44) {
                Gvar.var_616 = 1;
                for (let cnt3 = 0; cnt3 < Gvar.var_97; ++cnt3) {
                    // No = 147 ジョセフ(4部)
                    if (Gvar.var_83[Gvar.var_616].Var0 == 147 && Gvar.var_83[Gvar.var_673].Var10 == Gvar.var_83[Gvar.var_616].Var10) {
                        Gvar.var_2709 = Gvar.var_83[Gvar.var_616].Var0;
                        break;
                    }
                    Gvar.var_616++;
                }
            }
            // No = 48 エアロスミス
            if (Gvar.var_83[Gvar.var_673].Var0 == 48 && Gvar.var_83[Gvar.var_673].Var10 != 14 && Gvar.var_83[Gvar.var_673].Var20 == 0) {
                Gvar.var_2648 = 1;
                for (let cnt3 = 0; cnt3 < Gvar.var_336; ++cnt3) {
                    // No = 713 ポルポのライター
                    if (Gvar.var_78[Gvar.var_2648].Var0 == 713 && Gvar.var_78[Gvar.var_2648].Var9 == Gvar.var_83[Gvar.var_673].Var10) {
                        Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
                    }
                    Gvar.var_2648 = Gvar.var_2648 + 1;
                }
            }
            // No = 49 コピー人形
            if (Gvar.var_83[Gvar.var_673].Var0 == 49) {
                Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
            }
            // No = 50 元いた場所
            if (Gvar.var_83[Gvar.var_673].Var0 == 50) {
                Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
            }
            // No = 53 エクスペリエンスの花
            if (Gvar.var_83[Gvar.var_673].Var0 == 53) {
                Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
            }
            // Gvar.enemy_list = 55 なので亀
            if (Gvar.var_83[Gvar.var_673].Var0 == 55) {
            Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
            }
            // No = 57 SPW財団の男
            if (Gvar.var_83[Gvar.var_673].Var0 == 57) {
                Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
            }
            // No = 58 ボインゴ
            if (Gvar.var_83[Gvar.var_673].Var0 == 58) {
                Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
            }
            // No = 61 ヨーヨーマッ
            if (Gvar.var_83[Gvar.var_673].Var0 == 61) {
                Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
            }
            // No = 65 虹村形兆
            if (Gvar.var_83[Gvar.var_673].Var0 == 65 && Gvar.var_83[Gvar.var_673].Var20 == 0) {
                Gvar.var_2711 = Adap.rnd(10);
                if (Gvar.var_2711 < 4) {
                    Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
                }
            }
            // No = 70 D・ダービー
            if (Gvar.var_83[Gvar.var_673].Var0 == 70) {
                Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
            }
            // No = 74 サヴェジガーデン
            if (Gvar.var_83[Gvar.var_673].Var0 == 74) {
                Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
            }
            // No = 75 鮮血のシャボン
            if (Gvar.var_83[Gvar.var_673].Var0 == 75) {
                Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
            }
            // No = 79 エコーズの卵
            if (Gvar.var_83[Gvar.var_673].Var0 == 79) {
                Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
            }
            // No = 81 アバッキオ
            if (Gvar.var_83[Gvar.var_673].Var0 == 81) {
                Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
            }
            // No = 82 バーテンダー
            if (Gvar.var_83[Gvar.var_673].Var0 == 82) {
                Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
            }
            // No = 83 間田
            if (Gvar.var_83[Gvar.var_673].Var0 == 83) {
                Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
            }
            // No = 86 サンタナ
            if (Gvar.var_83[Gvar.var_673].Var0 == 86) {
                if (Gvar.var_83[Gvar.var_673].Var10 != 14) {
                    Gvar.var_616 = 1;
                    for (let cnt4 = 0; cnt4 < Gvar.var_97; ++cnt4) {
                        if (Gvar.var_83[Gvar.var_616].Var0 != 0 && Gvar.var_83[Gvar.var_616].Var0 != 86 && Gvar.var_673 != Gvar.var_616 && Gvar.var_83[Gvar.var_616].Var31 != 4 && Gvar.var_83[Gvar.var_616].Var31 != 5 && Gvar.var_83[Gvar.var_673].Var10 == Gvar.var_83[Gvar.var_616].Var10 && Gvar.var_83[Gvar.var_616].Var31 == 2) {
                            Gvar.var_2709 = Gvar.var_83[Gvar.var_616].Var0;
                            break;
                        }
                        Gvar.var_616++;
                    }
                }
            }
            // No = 90 岩
            if (Gvar.var_83[Gvar.var_673].Var0 == 90) {
                Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
            }
            // No = 91 ACT1さなぎ
            if (Gvar.var_83[Gvar.var_673].Var0 == 91) {
                Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
            }
            // No = 92 ACT2のさなぎ
            if (Gvar.var_83[Gvar.var_673].Var0 == 92) {
                Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
            }
            // No = 96 感電エンポリオ
            if (Gvar.var_83[Gvar.var_673].Var0 == 96) {
                Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
            }
            // No = 105 ツェペリさん
            if (Gvar.var_83[Gvar.var_673].Var0 == 105 && Gvar.var_83[Gvar.var_673].Var31 == 4) {
                Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
            }
            // No = 106 ペッシ
            if (Gvar.var_83[Gvar.var_673].Var0 == 106 && Gvar.var_83[Gvar.var_673].Var31 == 4) {
                Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
            }
            // No = 107 成長したペッシ
            if (Gvar.var_83[Gvar.var_673].Var0 == 107 && Gvar.var_83[Gvar.var_673].Var31 == 4) {
                Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
            }
            // No = 108 イギー
            if (Gvar.var_83[Gvar.var_673].Var0 == 108 && Gvar.var_83[Gvar.var_673].Var31 == 4) {
                Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
            }
            // No = 109 ワムウ
            if (Gvar.var_83[Gvar.var_673].Var0 == 109 && Gvar.var_83[Gvar.var_673].Var30 != 0 && Gvar.var_83[Gvar.var_673].Var20 == 0) {
                Gvar.var_2711 = Adap.rnd(10);
                if (Gvar.var_2711 < 4) {
                    Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
                }
            }
            // Gvar.enemy_list = 113 DIO
            // Gvar.enemy_list = 113 DIOと Gvar.enemy_list = 114 最高にハイなDIOは共通設定。Ver0.1403にて分離
            if (Gvar.var_83[Gvar.var_673].Var0 == 113) {
                if (Gvar.var_83[Gvar.var_673].Var10 != 14 && Gvar.var_201 == Gvar.var_83[Gvar.var_673].Var10) {
                    Gvar.var_616 = 1;
                    for (let cnt4 = 0; cnt4 < Gvar.var_97; ++cnt4) {
                        // No = 119 ジョセフ(3部)
                        if (Gvar.var_83[Gvar.var_616].Var0 == 119 && Gvar.var_83[Gvar.var_673].Var10 == Gvar.var_83[Gvar.var_616].Var10) {
                            Gvar.var_2709 = 119;
                            break;
                        }
                        Gvar.var_616++;
                    }
                }
            }
            // Gvar.enemy_list = 114 最高にハイなDIO
            // Gvar.enemy_list = 113 DIOと Gvar.enemy_list = 114 最高にハイなDIOは共通設定。Ver0.1403にて分離
            if (Gvar.var_83[Gvar.var_673].Var0 == 114) {
                if (Gvar.var_83[Gvar.var_673].Var10 != 14 && Gvar.var_201 == Gvar.var_83[Gvar.var_673].Var10) {
                    Gvar.var_616 = 1;
                    for (let cnt4 = 0; cnt4 < Gvar.var_97; ++cnt4) {
                        // No = 119 ジョセフ(3部)
                        if (Gvar.var_83[Gvar.var_616].Var0 == 119 && Gvar.var_83[Gvar.var_673].Var10 == Gvar.var_83[Gvar.var_616].Var10) {
                            Gvar.var_2709 = 119;
                            break;
                        }
                        Gvar.var_616++;
                    }
                }
            }
            // No = 116 玉美
            if (Gvar.var_83[Gvar.var_673].Var0 == 116) {
                Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
            }
            // No = 117 チョコラータの上半身
            if (Gvar.var_83[Gvar.var_673].Var0 == 117 && Gvar.var_83[Gvar.var_673].Var20 == 0) {
                Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
            }
            // No = 134 ジョリーン
            // No = 134 ジョリーン、No = 35 仗助は共通設定。Ver0.1403にて分離
            if (Gvar.var_83[Gvar.var_673].Var0 == 134) {
                if (Gvar.var_83[Gvar.var_673].Var10 != 14) {
                    Gvar.var_616 = 1;
                    for (let cnt4 = 0; cnt4 < Gvar.var_97; ++cnt4) {
                        if (Gvar.var_83[Gvar.var_616].Var0 != 0 && Gvar.var_673 != Gvar.var_616 && Gvar.var_83[Gvar.var_616].Var31 != 4 && Gvar.var_83[Gvar.var_616].Var31 != 5 && Gvar.var_83[Gvar.var_673].Var10 == Gvar.var_83[Gvar.var_616].Var10) {
                            Gvar.var_2646 = Gvar.var_616;
                            await Func.func578();
                            if (Gvar.var_2647 >= 1) {
                                Gvar.var_2709 = 1;
                                break;
                            }
                        }
                        Gvar.var_616++;
                    }
                }
            }
            // No = 142 岸辺露伴
            if (Gvar.var_83[Gvar.var_673].Var0 == 142) {
                Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
            }
            // No = 144 川尻浩作
            if (Gvar.var_83[Gvar.var_673].Var0 == 144 && Gvar.var_83[Gvar.var_673].Var26 >= 1 && Gvar.var_83[Gvar.var_673].Var20 == 0) {
                Gvar.var_2711 = Adap.rnd(10);
                if (Gvar.var_2711 < 4) {
                    Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
                }
            }
            // No = 147 ジョセフ(4部)
            if (Gvar.var_83[Gvar.var_673].Var0 == 147 && Gvar.var_83[Gvar.var_673].Var20 == 0) {
                Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
            }
            // No = 149 不明
            if (Gvar.var_83[Gvar.var_673].Var0 == 149) {
                Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
            }
            // No = 163 ヤク中の少年
            if (Gvar.var_83[Gvar.var_673].Var0 == 163) {
                Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
            }
            // No = 164 エシディシの脳
            // No = 164 エシディシの脳、No = 165 エボニーデビルの共通設定。Ver0.1403にて分離
            if (Gvar.var_83[Gvar.var_673].Var0 == 164) {
                Gvar.var_616 = 1;
                for (let cnt3 = 0; cnt3 < Gvar.var_97; ++cnt3) {
                    if (Gvar.var_83[Gvar.var_616].Var0 != 0 && Gvar.var_83[Gvar.var_616].Var0 != 164 && Gvar.var_83[Gvar.var_616].Var0 != 165 && Gvar.var_673 != Gvar.var_616 && Gvar.var_83[Gvar.var_616].Var31 != 4 && Gvar.var_83[Gvar.var_616].Var31 != 5) {
                        Gvar.var_2709 = 1;
                        break;
                    }
                    Gvar.var_616++;
                }
            }
            // No = 165 エボニーデビル
            // No = 164 エシディシの脳、No = 165 エボニーデビルの共通設定。Ver0.1403にて分離
            if (Gvar.var_83[Gvar.var_673].Var0 == 165) {
                Gvar.var_616 = 1;
                for (let cnt3 = 0; cnt3 < Gvar.var_97; ++cnt3) {
                    if (Gvar.var_83[Gvar.var_616].Var0 != 0 && Gvar.var_83[Gvar.var_616].Var0 != 164 && Gvar.var_83[Gvar.var_616].Var0 != 165 && Gvar.var_673 != Gvar.var_616 && Gvar.var_83[Gvar.var_616].Var31 != 4 && Gvar.var_83[Gvar.var_616].Var31 != 5) {
                        Gvar.var_2709 = 1;
                        break;
                    }
                    Gvar.var_616++;
                }
            }
            // No = 169 ヤク中の少年(没キャラ)
            if (Gvar.var_83[Gvar.var_673].Var0 == 169) {
                Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
            }
            // Gvar.enemy_list = 173 NPC ロッコ・バロッコ所長
            if (Gvar.var_83[Gvar.var_673].Var0 == 173) {
                Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
            }
            // Gvar.enemy_list = 180 NPC デッドマンズ吉良
            if (Gvar.var_83[Gvar.var_673].Var0 == 180) {
                Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON // これを設定すると隣接しても攻撃してこなくなる。
            }
            // No = 43 セッコ、No = 111 究極カーズでない
            if (Gvar.var_71[Gvar.var_66][Gvar.var_67] == 0 && Gvar.var_83[Gvar.var_673].Var0 != 43 && Gvar.var_83[Gvar.var_673].Var0 != 111) {
                Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
            }
            if (Gvar.var_83[Gvar.var_673].Var31 == 5 && Gvar.var_313 == Gvar.var_673) {
                Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
            }
            // No = 10 ノートリアスBIGではない
            if (Gvar.var_157 == 1 && Gvar.var_83[Gvar.var_673].Var0 != 10 && Gvar.var_83[Gvar.var_673].Var15 == 0) {
                Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
            }
            Gvar.var_2712 = 0;
            Gvar.var_616 = 1;
            for (let cnt2 = 0; cnt2 < Gvar.var_97; ++cnt2) {
                if (Gvar.var_83[Gvar.var_616].Var0 == 49) { // No = 49 コピー人形
                    Gvar.var_2712 = 1;
                    break;
                }
                if (Gvar.var_83[Gvar.var_616].Var0 == 37 && Gvar.var_83[Gvar.var_673].Var0 != 37) {
                    Gvar.var_2713 = Gvar.var_83[Gvar.var_673].Var1;
                    Gvar.var_2714 = Gvar.var_83[Gvar.var_673].Var2;
                    Gvar.var_2715 = Gvar.var_83[Gvar.var_673].Var1 - 1;
                    if (Gvar.var_2715 < 0) {
                        Gvar.var_2715 = 0;
                    }
                    Gvar.var_2716 = Gvar.var_83[Gvar.var_673].Var1 + 1;
                    if (Gvar.var_2716 > Gvar.var_33) {
                        Gvar.var_2716 = Gvar.var_33;
                    }
                    Gvar.var_2717 = Gvar.var_83[Gvar.var_673].Var2 + 1;
                    if (Gvar.var_2717 > Gvar.var_34) {
                        Gvar.var_2717 = Gvar.var_34;
                    }
                    Gvar.var_2718 = Gvar.var_83[Gvar.var_673].Var2 - 1;
                    if (Gvar.var_2718 < 0) {
                        Gvar.var_2718 = 0;
                    }
                    if (Gvar.var_82[Gvar.var_2715][Gvar.var_2714] == Gvar.var_616 || Gvar.var_82[Gvar.var_2716][Gvar.var_2714] == Gvar.var_616 || Gvar.var_82[Gvar.var_2713][Gvar.var_2717] == Gvar.var_616 || Gvar.var_82[Gvar.var_2713][Gvar.var_2718] == Gvar.var_616 || Gvar.var_82[Gvar.var_2715][Gvar.var_2717] == Gvar.var_616 || Gvar.var_82[Gvar.var_2715][Gvar.var_2718] == Gvar.var_616 || Gvar.var_82[Gvar.var_2716][Gvar.var_2717] == Gvar.var_616 || Gvar.var_82[Gvar.var_2716][Gvar.var_2718] == Gvar.var_616) {
                        Gvar.var_2709 = 37;
                        break;
                    }
                }
                Gvar.var_616++;
            }
            if (Gvar.var_83[Gvar.var_673].Var20 == 2) {
                Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
            }
            if (Gvar.var_2708 == 0) {
                Gvar.var_2719 = 0;
                if (Gvar.var_2708 == 0 && Gvar.var_83[Gvar.var_673].Var20 == 0) {
                    // No = 7 運命の車輪、No = 15 ペットショップ、No = 21 ストレイキャット、No = 47 億泰、No = 67 ブチ切れた億泰、No = 158 プッツン由花子、No = 168、No = 175 不明敵(没敵チャカ?)
                    if (Gvar.var_83[Gvar.var_673].Var0 == 7 || Gvar.var_83[Gvar.var_673].Var0 == 15 || Gvar.var_83[Gvar.var_673].Var0 == 21 || Gvar.var_83[Gvar.var_673].Var0 == 47 || Gvar.var_83[Gvar.var_673].Var0 == 67 || Gvar.var_83[Gvar.var_673].Var0 == 158 || Gvar.var_83[Gvar.var_673].Var0 == 168 || Gvar.var_83[Gvar.var_673].Var0 == 175) {
                        Gvar.var_2719 = 1;
                    }
                    // No = 48 エアロスミス、No = 40 バッドカンパニー、No = 41 バッドカンパニー戦車、No = 42 アパッチ、No = 155 マライア、No = 140 ジョナサン、No = 136 シーザー
                    if (Gvar.var_83[Gvar.var_673].Var0 == 48 || Gvar.var_83[Gvar.var_673].Var0 == 40 || Gvar.var_83[Gvar.var_673].Var0 == 41 || Gvar.var_83[Gvar.var_673].Var0 == 42 || Gvar.var_83[Gvar.var_673].Var0 == 155 || Gvar.var_83[Gvar.var_673].Var0 == 140 || Gvar.var_83[Gvar.var_673].Var0 == 136) {
                        Gvar.var_2719 = 1;
                    }
                    // No = 56 シュトロハイム、No = 80 ラング・ラングラー、No = 93 エンポリオ(ウェザー付)、No = 95 ストレイツォ、No = 121 花京院、No = 113 DIO、No = 76 エコーズACT2
                    if (Gvar.var_83[Gvar.var_673].Var0 == 56 || Gvar.var_83[Gvar.var_673].Var0 == 80 || Gvar.var_83[Gvar.var_673].Var0 == 93 || Gvar.var_83[Gvar.var_673].Var0 == 95 || Gvar.var_83[Gvar.var_673].Var0 == 121 || Gvar.var_83[Gvar.var_673].Var0 == 113 || Gvar.var_83[Gvar.var_673].Var0 == 76) {
                        Gvar.var_2719 = 1;
                    }
                    // No = 114 最高にハイなDIO、No = 128 承太郎(4部)、No = 132 レクイエムジョルノ、No =141 F・F、No = 123 ブチャラティ、No = 126 退院した花京院、No = 151 虫食い、No = 172 虫食いでない
                    if (Gvar.var_83[Gvar.var_673].Var0 == 114 || Gvar.var_83[Gvar.var_673].Var0 == 128 || Gvar.var_83[Gvar.var_673].Var0 == 132 || Gvar.var_83[Gvar.var_673].Var0 == 141 || Gvar.var_83[Gvar.var_673].Var0 == 123 || Gvar.var_83[Gvar.var_673].Var0 == 126 || Gvar.var_83[Gvar.var_673].Var0 == 151 || Gvar.var_83[Gvar.var_673].Var0 == 172) {
                        Gvar.var_2719 = 1;
                    }
                    // Ver0.1403にて追加。No = 171 離婚した承太郎
                    if (Gvar.var_83[Gvar.var_673].Var0 == 171) {
                        Gvar.var_2719 = 1;
                    }
                    if (Gvar.var_2719 == 1) {
                         Gvar.var_2720 = 0; // 敵の特殊能力発動フラグOFF
                        Gvar.var_2721 = Gvar.var_66 - 1;
                        Gvar.var_2722 = Gvar.var_66 + 1;
                        Gvar.var_2723 = Gvar.var_67 + 1;
                        Gvar.var_2724 = Gvar.var_67 - 1;
                        if (Gvar.var_2721 < 0) {
                            Gvar.var_2721 = 0;
                        }
                        if (Gvar.var_2724 < 0) {
                            Gvar.var_2724 = 0;
                        }
                        if (Gvar.var_2722 > Gvar.var_33) {
                            Gvar.var_2722 = Gvar.var_33;
                        }
                        if (Gvar.var_2723 > Gvar.var_34) {
                            Gvar.var_2723 = Gvar.var_34;
                        }
                        if (Gvar.var_83[Gvar.var_673].Var17 == 0 && Gvar.var_83[Gvar.var_673].Var23 == 0 && Gvar.var_201 != 14 && Gvar.var_201 == Gvar.var_83[Gvar.var_673].Var10) {
                             Gvar.var_2720 = 1; // 敵の特殊能力発動フラグON
                        }
                        if (Gvar.var_83[Gvar.var_673].Var17 == 0 && Gvar.var_83[Gvar.var_673].Var23 == 0 && Gvar.var_201 != 14 && Gvar.var_83[Gvar.var_673].Var10 == 14) {
                            Gvar.var_2713 = Gvar.var_83[Gvar.var_673].Var1;
                            Gvar.var_2714 = Gvar.var_83[Gvar.var_673].Var2;
                            Gvar.var_2715 = Gvar.var_83[Gvar.var_673].Var1 - 1;
                            if (Gvar.var_2715 < 0) {
                                Gvar.var_2715 = 0;
                            }
                            Gvar.var_2716 = Gvar.var_83[Gvar.var_673].Var1 + 1;
                            if (Gvar.var_2716 > Gvar.var_33) {
                                Gvar.var_2716 = Gvar.var_33;
                            }
                            Gvar.var_2717 = Gvar.var_83[Gvar.var_673].Var2 + 1;
                            if (Gvar.var_2717 > Gvar.var_34) {
                                Gvar.var_2717 = Gvar.var_34;
                            }
                            Gvar.var_2718 = Gvar.var_83[Gvar.var_673].Var2 - 1;
                            if (Gvar.var_2718 < 0) {
                                Gvar.var_2718 = 0;
                            }
                            if (Gvar.var_71[Gvar.var_2715][Gvar.var_2714] == Gvar.var_201 || Gvar.var_71[Gvar.var_2716][Gvar.var_2714] == Gvar.var_201 || Gvar.var_71[Gvar.var_2713][Gvar.var_2717] == Gvar.var_201 || Gvar.var_71[Gvar.var_2713][Gvar.var_2718] == Gvar.var_201 || Gvar.var_71[Gvar.var_2715][Gvar.var_2717] == Gvar.var_201 || Gvar.var_71[Gvar.var_2715][Gvar.var_2718] == Gvar.var_201 || Gvar.var_71[Gvar.var_2716][Gvar.var_2717] == Gvar.var_201 || Gvar.var_71[Gvar.var_2716][Gvar.var_2718] == Gvar.var_201) {
                                 Gvar.var_2720 = 1; // 敵の特殊能力発動フラグON
                            }
                        }
                        if (Gvar.var_83[Gvar.var_673].Var17 == 0 && Gvar.var_83[Gvar.var_673].Var23 == 0 && Gvar.var_201 == 14 && Gvar.var_83[Gvar.var_673].Var10 != 14) {
                            Gvar.var_2713 = Gvar.var_66;
                            Gvar.var_2714 = Gvar.var_67;
                            Gvar.var_2715 = Gvar.var_66 - 1;
                            if (Gvar.var_2715 < 0) {
                                Gvar.var_2715 = 0;
                            }
                            Gvar.var_2716 = Gvar.var_66 + 1;
                            if (Gvar.var_2716 > Gvar.var_33) {
                                Gvar.var_2716 = Gvar.var_33;
                            }
                            Gvar.var_2717 = Gvar.var_67 + 1;
                            if (Gvar.var_2717 > Gvar.var_34) {
                                Gvar.var_2717 = Gvar.var_34;
                            }
                            Gvar.var_2718 = Gvar.var_67 - 1;
                            if (Gvar.var_2718 < 0) {
                                Gvar.var_2718 = 0;
                            }
                            if (Gvar.var_71[Gvar.var_2715][Gvar.var_2714] == Gvar.var_83[Gvar.var_673].Var10 || Gvar.var_71[Gvar.var_2716][Gvar.var_2714] == Gvar.var_83[Gvar.var_673].Var10 || Gvar.var_71[Gvar.var_2713][Gvar.var_2717] == Gvar.var_83[Gvar.var_673].Var10 || Gvar.var_71[Gvar.var_2713][Gvar.var_2718] == Gvar.var_83[Gvar.var_673].Var10 || Gvar.var_71[Gvar.var_2715][Gvar.var_2717] == Gvar.var_83[Gvar.var_673].Var10 || Gvar.var_71[Gvar.var_2715][Gvar.var_2718] == Gvar.var_83[Gvar.var_673].Var10 || Gvar.var_71[Gvar.var_2716][Gvar.var_2717] == Gvar.var_83[Gvar.var_673].Var10 || Gvar.var_71[Gvar.var_2716][Gvar.var_2718] == Gvar.var_83[Gvar.var_673].Var10) {
                                 Gvar.var_2720 = 1; // 敵の特殊能力発動フラグON
                            }
                        }
                        if (Gvar.var_83[Gvar.var_673].Var17 == 0 && Gvar.var_83[Gvar.var_673].Var23 == 0 && Gvar.var_423 >= Gvar.var_2721 && Gvar.var_423 <= Gvar.var_2722 && Gvar.var_424 >= Gvar.var_2724 && Gvar.var_424 <= Gvar.var_2723) {
                             Gvar.var_2720 = 1; // 敵の特殊能力発動フラグON
                        }
                        // No = 123 ブチャラティ、No = 140 ジョナサン、No = 168 警備員の西戸
                        if (Gvar.var_83[Gvar.var_673].Var0 == 123 || Gvar.var_83[Gvar.var_673].Var0 == 140 || Gvar.var_83[Gvar.var_673].Var0 == 168) {
                             Gvar.var_2720 = 0; // 敵の特殊能力発動フラグOFF
                            if (Gvar.var_83[Gvar.var_673].Var17 == 0 && Gvar.var_83[Gvar.var_673].Var23 == 0 && Gvar.var_146 == 0 && Gvar.var_123 == 0 && Gvar.var_2712 == 0) {
                                Gvar.var_2725 = Gvar.var_83[Gvar.var_673].Var5;
                                Gvar.var_2726 = Gvar.var_66 - 2;
                                if (Gvar.var_2726 < 0) {
                                    Gvar.var_2726 = 0;
                                }
                                Gvar.var_2727 = Gvar.var_66 + 2;
                                if (Gvar.var_2727 > Gvar.var_33) {
                                    Gvar.var_2727 = Gvar.var_33;
                                }
                                Gvar.var_2728 = Gvar.var_67 + 2;
                                if (Gvar.var_2728 > Gvar.var_34) {
                                    Gvar.var_2728 = Gvar.var_34;
                                }
                                Gvar.var_2729 = Gvar.var_67 - 2;
                                if (Gvar.var_2729 < 0) {
                                    Gvar.var_2729 = 0;
                                }
                                if (Gvar.var_423 == Gvar.var_2726 && Gvar.var_424 == Gvar.var_67) {
                                    Gvar.var_83[Gvar.var_673].Var5 = 4;
                                     Gvar.var_2720 = 1; // 敵の特殊能力発動フラグON
                                    Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
                                }
                                if (Gvar.var_423 == Gvar.var_2727 && Gvar.var_424 == Gvar.var_67) {
                                    Gvar.var_83[Gvar.var_673].Var5 = 6;
                                     Gvar.var_2720 = 1; // 敵の特殊能力発動フラグON
                                    Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
                                }
                                if (Gvar.var_423 == Gvar.var_66 && Gvar.var_424 == Gvar.var_2729) {
                                    Gvar.var_83[Gvar.var_673].Var5 = 8;
                                     Gvar.var_2720 = 1; // 敵の特殊能力発動フラグON
                                    Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
                                }
                                if (Gvar.var_423 == Gvar.var_66 && Gvar.var_424 == Gvar.var_2728) {
                                    Gvar.var_83[Gvar.var_673].Var5 = 2;
                                     Gvar.var_2720 = 1; // 敵の特殊能力発動フラグON
                                    Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
                                }
                                if (Gvar.var_423 == Gvar.var_2726 && Gvar.var_424 == Gvar.var_2729) {
                                    Gvar.var_83[Gvar.var_673].Var5 = 7;
                                     Gvar.var_2720 = 1; // 敵の特殊能力発動フラグON
                                    Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
                                }
                                if (Gvar.var_423 == Gvar.var_2727 && Gvar.var_424 == Gvar.var_2729) {
                                    Gvar.var_83[Gvar.var_673].Var5 = 9;
                                     Gvar.var_2720 = 1; // 敵の特殊能力発動フラグON
                                    Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
                                }
                                if (Gvar.var_423 == Gvar.var_2726 && Gvar.var_424 == Gvar.var_2728) {
                                    Gvar.var_83[Gvar.var_673].Var5 = 1;
                                     Gvar.var_2720 = 1; // 敵の特殊能力発動フラグON
                                    Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
                                }
                                if (Gvar.var_423 == Gvar.var_2727 && Gvar.var_424 == Gvar.var_2728) {
                                    Gvar.var_83[Gvar.var_673].Var5 = 3;
                                     Gvar.var_2720 = 1; // 敵の特殊能力発動フラグON
                                    Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
                                }
                                if (Gvar.var_2720 == 1) { // 敵の特殊能力発動フラグがONの場合
                                    // No = 140 ジョナサン、No = 168 警備員の西戸
                                    if (Gvar.var_83[Gvar.var_673].Var0 == 140 || Gvar.var_83[Gvar.var_673].Var0 == 168) {
                                        Gvar.var_2726 = Gvar.var_66 - 1;
                                        if (Gvar.var_2726 < 0) {
                                            Gvar.var_2726 = 0;
                                        }
                                        Gvar.var_2727 = Gvar.var_66 + 1;
                                        if (Gvar.var_2727 > Gvar.var_33) {
                                            Gvar.var_2727 = Gvar.var_33;
                                        }
                                        Gvar.var_2728 = Gvar.var_67 + 1;
                                        if (Gvar.var_2728 > Gvar.var_34) {
                                            Gvar.var_2728 = Gvar.var_34;
                                        }
                                        Gvar.var_2729 = Gvar.var_67 - 1;
                                        if (Gvar.var_2729 < 0) {
                                            Gvar.var_2729 = 0;
                                        }
                                        if (Gvar.var_83[Gvar.var_673].Var5 == 4) {
                                            if (Gvar.var_82[Gvar.var_2726][Gvar.var_67] != 0 || Gvar.var_71[Gvar.var_2726][Gvar.var_67] == 0) {
                                                 Gvar.var_2720 = 0; // 敵の特殊能力発動フラグOFF
                                                Gvar.var_2708 = 0; // 敵が攻撃してこなくなるフラグOFF
                                                Gvar.var_83[Gvar.var_673].Var5 = Gvar.var_2725;
                                            }
                                        }
                                        if (Gvar.var_83[Gvar.var_673].Var5 == 6) {
                                            if (Gvar.var_82[Gvar.var_2727][Gvar.var_67] != 0 || Gvar.var_71[Gvar.var_2727][Gvar.var_67] == 0) {
                                                 Gvar.var_2720 = 0; // 敵の特殊能力発動フラグOFF
                                                Gvar.var_2708 = 0; // 敵が攻撃してこなくなるフラグOFF
                                                Gvar.var_83[Gvar.var_673].Var5 = Gvar.var_2725;
                                            }
                                        }
                                        if (Gvar.var_83[Gvar.var_673].Var5 == 2) {
                                            if (Gvar.var_82[Gvar.var_66][Gvar.var_2728] != 0 || Gvar.var_71[Gvar.var_66][Gvar.var_2728] == 0) {
                                                 Gvar.var_2720 = 0; // 敵の特殊能力発動フラグOFF
                                                Gvar.var_2708 = 0; // 敵が攻撃してこなくなるフラグOFF
                                                Gvar.var_83[Gvar.var_673].Var5 = Gvar.var_2725;
                                            }
                                        }
                                        if (Gvar.var_83[Gvar.var_673].Var5 == 8) {
                                            if (Gvar.var_82[Gvar.var_66][Gvar.var_2729] != 0 || Gvar.var_71[Gvar.var_66][Gvar.var_2729] == 0) {
                                                 Gvar.var_2720 = 0; // 敵の特殊能力発動フラグOFF
                                                Gvar.var_2708 = 0; // 敵が攻撃してこなくなるフラグOFF
                                                Gvar.var_83[Gvar.var_673].Var5 = Gvar.var_2725;
                                            }
                                        }
                                        if (Gvar.var_83[Gvar.var_673].Var5 == 1) {
                                            if (Gvar.var_82[Gvar.var_2726][Gvar.var_2728] != 0 || Gvar.var_71[Gvar.var_2726][Gvar.var_2728] == 0) {
                                                 Gvar.var_2720 = 0; // 敵の特殊能力発動フラグOFF
                                                Gvar.var_2708 = 0; // 敵が攻撃してこなくなるフラグOFF
                                                Gvar.var_83[Gvar.var_673].Var5 = Gvar.var_2725;
                                            }
                                        }
                                        if (Gvar.var_83[Gvar.var_673].Var5 == 3) {
                                            if (Gvar.var_82[Gvar.var_2727][Gvar.var_2728] != 0 || Gvar.var_71[Gvar.var_2727][Gvar.var_2728] == 0) {
                                                 Gvar.var_2720 = 0; // 敵の特殊能力発動フラグOFF
                                                Gvar.var_2708 = 0; // 敵が攻撃してこなくなるフラグOFF
                                                Gvar.var_83[Gvar.var_673].Var5 = Gvar.var_2725;
                                            }
                                        }
                                        if (Gvar.var_83[Gvar.var_673].Var5 == 7) {
                                            if (Gvar.var_82[Gvar.var_2726][Gvar.var_2729] != 0 || Gvar.var_71[Gvar.var_2726][Gvar.var_2729] == 0) {
                                                 Gvar.var_2720 = 0; // 敵の特殊能力発動フラグOFF
                                                Gvar.var_2708 = 0; // 敵が攻撃してこなくなるフラグOFF
                                                Gvar.var_83[Gvar.var_673].Var5 = Gvar.var_2725;
                                            }
                                        }
                                        if (Gvar.var_83[Gvar.var_673].Var5 == 9) {
                                            if (Gvar.var_82[Gvar.var_2727][Gvar.var_2729] != 0 || Gvar.var_71[Gvar.var_2727][Gvar.var_2729] == 0) {
                                                 Gvar.var_2720 = 0; // 敵の特殊能力発動フラグOFF
                                                Gvar.var_2708 = 0; // 敵が攻撃してこなくなるフラグOFF
                                                Gvar.var_83[Gvar.var_673].Var5 = Gvar.var_2725;
                                            }
                                        }
                                    }
                                }
                                // 敵の特殊能力発動フラグがONの場合 & No = 123 ブチャラティ
                                if (Gvar.var_2720 == 1 && Gvar.var_83[Gvar.var_673].Var0 == 123) {
                                    Gvar.var_2726 = Gvar.var_66 - 1;
                                    if (Gvar.var_2726 < 0) {
                                        Gvar.var_2726 = 0;
                                    }
                                    Gvar.var_2727 = Gvar.var_66 + 1;
                                    if (Gvar.var_2727 > Gvar.var_33) {
                                        Gvar.var_2727 = Gvar.var_33;
                                    }
                                    Gvar.var_2728 = Gvar.var_67 + 1;
                                    if (Gvar.var_2728 > Gvar.var_34) {
                                        Gvar.var_2728 = Gvar.var_34;
                                    }
                                    Gvar.var_2729 = Gvar.var_67 - 1;
                                    if (Gvar.var_2729 < 0) {
                                        Gvar.var_2729 = 0;
                                    }
                                    if (Gvar.var_83[Gvar.var_673].Var5 == 4 && Gvar.var_82[Gvar.var_2726][Gvar.var_67] != 0) {
                                        Gvar.var_2730 = Gvar.var_82[Gvar.var_2726][Gvar.var_67];
                                        if (Gvar.var_83[Gvar.var_2730].Var31 == 4 || Gvar.var_83[Gvar.var_2730].Var31 == 5) {
                                             Gvar.var_2720 = 0; // 敵の特殊能力発動フラグOFF
                                            Gvar.var_2708 = 0; // 敵が攻撃してこなくなるフラグOFF
                                        }
                                    }
                                    if (Gvar.var_83[Gvar.var_673].Var5 == 6 && Gvar.var_82[Gvar.var_2727][Gvar.var_67] != 0) {
                                        Gvar.var_2730 = Gvar.var_82[Gvar.var_2727][Gvar.var_67];
                                        if (Gvar.var_83[Gvar.var_2730].Var31 == 4 || Gvar.var_83[Gvar.var_2730].Var31 == 5) {
                                             Gvar.var_2720 = 0; // 敵の特殊能力発動フラグOFF
                                            Gvar.var_2708 = 0; // 敵が攻撃してこなくなるフラグOFF
                                        }
                                    }
                                    if (Gvar.var_83[Gvar.var_673].Var5 == 2 && Gvar.var_82[Gvar.var_66][Gvar.var_2728] != 0) {
                                        Gvar.var_2730 = Gvar.var_82[Gvar.var_66][Gvar.var_2728];
                                        if (Gvar.var_83[Gvar.var_2730].Var31 == 4 || Gvar.var_83[Gvar.var_2730].Var31 == 5) {
                                             Gvar.var_2720 = 0; // 敵の特殊能力発動フラグOFF
                                            Gvar.var_2708 = 0; // 敵が攻撃してこなくなるフラグOFF
                                        }
                                    }
                                    if (Gvar.var_83[Gvar.var_673].Var5 == 8 && Gvar.var_82[Gvar.var_66][Gvar.var_2729] != 0) {
                                        Gvar.var_2730 = Gvar.var_82[Gvar.var_66][Gvar.var_2729];
                                        if (Gvar.var_83[Gvar.var_2730].Var31 == 4 || Gvar.var_83[Gvar.var_2730].Var31 == 5) {
                                             Gvar.var_2720 = 0; // 敵の特殊能力発動フラグOFF
                                            Gvar.var_2708 = 0; // 敵が攻撃してこなくなるフラグOFF
                                        }
                                    }
                                    if (Gvar.var_83[Gvar.var_673].Var5 == 1 && Gvar.var_82[Gvar.var_2726][Gvar.var_2728] != 0) {
                                        Gvar.var_2730 = Gvar.var_82[Gvar.var_2726][Gvar.var_2728];
                                        if (Gvar.var_83[Gvar.var_2730].Var31 == 4 || Gvar.var_83[Gvar.var_2730].Var31 == 5) {
                                             Gvar.var_2720 = 0; // 敵の特殊能力発動フラグOFF
                                            Gvar.var_2708 = 0; // 敵が攻撃してこなくなるフラグOFF
                                        }
                                    }
                                    if (Gvar.var_83[Gvar.var_673].Var5 == 3 && Gvar.var_82[Gvar.var_2727][Gvar.var_2728] != 0) {
                                        Gvar.var_2730 = Gvar.var_82[Gvar.var_2727][Gvar.var_2728];
                                        if (Gvar.var_83[Gvar.var_2730].Var31 == 4 || Gvar.var_83[Gvar.var_2730].Var31 == 5) {
                                             Gvar.var_2720 = 0; // 敵の特殊能力発動フラグOFF
                                            Gvar.var_2708 = 0; // 敵が攻撃してこなくなるフラグOFF
                                        }
                                    }
                                    if (Gvar.var_83[Gvar.var_673].Var5 == 7 && Gvar.var_82[Gvar.var_2726][Gvar.var_2729] != 0) {
                                        Gvar.var_2730 = Gvar.var_82[Gvar.var_2726][Gvar.var_2729];
                                        if (Gvar.var_83[Gvar.var_2730].Var31 == 4 || Gvar.var_83[Gvar.var_2730].Var31 == 5) {
                                             Gvar.var_2720 = 0; // 敵の特殊能力発動フラグOFF
                                            Gvar.var_2708 = 0; // 敵が攻撃してこなくなるフラグOFF
                                        }
                                    }
                                    if (Gvar.var_83[Gvar.var_673].Var5 == 9 && Gvar.var_82[Gvar.var_2727][Gvar.var_2729] != 0) {
                                        Gvar.var_2730 = Gvar.var_82[Gvar.var_2727][Gvar.var_2729];
                                        if (Gvar.var_83[Gvar.var_2730].Var31 == 4 || Gvar.var_83[Gvar.var_2730].Var31 == 5) {
                                             Gvar.var_2720 = 0; // 敵の特殊能力発動フラグOFF
                                            Gvar.var_2708 = 0; // 敵が攻撃してこなくなるフラグOFF
                                        }
                                    }
                                }
                            }
                        }
                        if (Gvar.time_paused_count != 0) {
                             Gvar.var_2720 = 0; // 敵の特殊能力発動フラグOFF
                        }
                        if (Gvar.var_2720 == 1) { // 敵の特殊能力発動フラグがONの場合
                            // No = 168 警備員の西戸
                            if (Gvar.var_83[Gvar.var_673].Var0 == 168) {
                                Gvar.var_2731 = 1;
                            }
                            await Func.func576(); // 敵特殊行動発動フラグ処理
                            Gvar.var_2731 = 0;
                        }
                    }
                }
                if (Gvar.var_83[Gvar.var_673].Var17 == 0 && Gvar.var_83[Gvar.var_673].Var20 == 0 && Gvar.var_83[Gvar.var_673].Var23 == 0 && Gvar.var_123 == 0 && Gvar.var_2712 == 0) {
                    // No = 46 ホル・ホース、No = 30 禁煙中ホル・ホース、No = 99 マンハッタントランスファー、No = 65 虹村形兆、No = 84 チョコラータ、No = 85 リゾット、No = 63 プロシュート兄貴、No = 153 マックイィーン
                    if (Gvar.var_83[Gvar.var_673].Var0 == 46 || Gvar.var_83[Gvar.var_673].Var0 == 30 || Gvar.var_83[Gvar.var_673].Var0 == 99 || Gvar.var_83[Gvar.var_673].Var0 == 65 || Gvar.var_83[Gvar.var_673].Var0 == 84 || Gvar.var_83[Gvar.var_673].Var0 == 85 || Gvar.var_83[Gvar.var_673].Var0 == 63 || Gvar.var_83[Gvar.var_673].Var0 == 153) {
                        await Func.func576(); // 敵特殊行動発動フラグ処理
                    }
                    // No = 124 ミスタ、No = 125 フーゴ、No = 134 ジョリーン、No = 35 仗助、No = 164 エシディシの脳、No = 165 エボニーデビル、No = 159 記憶が戻ったウェザー
                    if (Gvar.var_83[Gvar.var_673].Var0 == 124 || Gvar.var_83[Gvar.var_673].Var0 == 125 || Gvar.var_83[Gvar.var_673].Var0 == 134 || Gvar.var_83[Gvar.var_673].Var0 == 35 || Gvar.var_83[Gvar.var_673].Var0 == 164 || Gvar.var_83[Gvar.var_673].Var0 == 165 || Gvar.var_83[Gvar.var_673].Var0 == 159) {
                        await Func.func576(); // 敵特殊行動発動フラグ処理
                    }
                    // No = 143 ウンガロ、No = 145 康一、No = 150 康一act2!!、No = 137 成長した吉良、No = 72 ケンゾー、No = 98 エンポリオ、No = 154 スポーツマックス
                    if (Gvar.var_83[Gvar.var_673].Var0 == 143 || Gvar.var_83[Gvar.var_673].Var0 == 145 || Gvar.var_83[Gvar.var_673].Var0 == 150 || Gvar.var_83[Gvar.var_673].Var0 == 137 || Gvar.var_83[Gvar.var_673].Var0 == 72 || Gvar.var_83[Gvar.var_673].Var0 == 98 || Gvar.var_83[Gvar.var_673].Var0 == 154) {
                        await Func.func576(); // 敵特殊行動発動フラグ処理
                    }
                    // No = 157 アナスイ
                    if (Gvar.var_83[Gvar.var_673].Var0 == 157) {
                        await Func.func576(); // 敵特殊行動発動フラグ処理
                    }
                    // No = 168 警備員の西戸
                    if (Gvar.var_83[Gvar.var_673].Var0 == 168 && Gvar.var_83[Gvar.var_673].Var18 == 0) {
                        await Func.func576(); // 敵特殊行動発動フラグ処理
                    }
                }
                // No = 118 クリーム
                if (Gvar.var_83[Gvar.var_673].Var17 == 0 && Gvar.var_83[Gvar.var_673].Var20 == 0 && Gvar.var_123 == 0 && Gvar.var_83[Gvar.var_673].Var0 == 118 && Gvar.var_2712 == 0) {
                    await Func.func576(); // 敵特殊行動発動フラグ処理
                }
                if (Gvar.var_2709 == 1) {
                    Gvar.var_2709 = 0;
                    Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
                }
                if (Gvar.var_83[Gvar.var_673].Var18 == 0 && Gvar.var_2708 == 0) {
                    Gvar.var_2619 = Gvar.var_423;
                    Gvar.var_2620 = Gvar.var_424;
                    Gvar.var_425 = Gvar.var_423 - 1;
                    Gvar.var_426 = Gvar.var_423 + 1;
                    Gvar.var_427 = Gvar.var_424 + 1;
                    Gvar.var_428 = Gvar.var_424 - 1;
                    if (Gvar.var_425 < 0) {
                        Gvar.var_425 = Gvar.var_2619;
                    }
                    if (Gvar.var_428 < 0) {
                        Gvar.var_428 = Gvar.var_2620;
                    }
                    if (Gvar.var_426 > Gvar.var_33) {
                        Gvar.var_426 = Gvar.var_2619;
                    }
                    if (Gvar.var_427 > Gvar.var_34) {
                        Gvar.var_427 = Gvar.var_2620;
                    }
                    if (Gvar.var_83[Gvar.var_673].Var17 >= 1 || Gvar.var_2709 == 2) {
                        Gvar.var_2710 = Adap.rnd(5);
                        if (Gvar.var_2710 != 0) {
                            if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0) {
                                Gvar.var_2732 = Gvar.var_82[Gvar.var_425][Gvar.var_424];
                                Gvar.var_83[Gvar.var_673].Var9 = 1;
                                Gvar.var_83[Gvar.var_673].Var5 = 4;
                                Gvar.var_83[Gvar.var_673].Var27 = Gvar.var_82[Gvar.var_425][Gvar.var_424];
                                Gvar.var_2733 = Gvar.var_82[Gvar.var_425][Gvar.var_424];
                                Gvar.var_83[Gvar.var_2733].Var28 = Gvar.var_83[Gvar.var_2733].Var28 + 1;
                            }
                            if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0) {
                                Gvar.var_2732 = Gvar.var_82[Gvar.var_426][Gvar.var_424];
                                Gvar.var_83[Gvar.var_673].Var9 = 1;
                                Gvar.var_83[Gvar.var_673].Var5 = 6;
                                Gvar.var_83[Gvar.var_673].Var27 = Gvar.var_82[Gvar.var_426][Gvar.var_424];
                                Gvar.var_2733 = Gvar.var_82[Gvar.var_426][Gvar.var_424];
                                Gvar.var_83[Gvar.var_2733].Var28 = Gvar.var_83[Gvar.var_2733].Var28 + 1;
                            }
                            if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_427] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0) {
                                Gvar.var_2732 = Gvar.var_82[Gvar.var_423][Gvar.var_427];
                                Gvar.var_83[Gvar.var_673].Var9 = 1;
                                Gvar.var_83[Gvar.var_673].Var5 = 2;
                                Gvar.var_83[Gvar.var_673].Var27 = Gvar.var_82[Gvar.var_423][Gvar.var_427];
                                Gvar.var_2733 = Gvar.var_82[Gvar.var_423][Gvar.var_427];
                                Gvar.var_83[Gvar.var_2733].Var28 = Gvar.var_83[Gvar.var_2733].Var28 + 1;
                            }
                            if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_428] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0) {
                                Gvar.var_2732 = Gvar.var_82[Gvar.var_423][Gvar.var_428];
                                Gvar.var_83[Gvar.var_673].Var9 = 1;
                                Gvar.var_83[Gvar.var_673].Var5 = 8;
                                Gvar.var_83[Gvar.var_673].Var27 = Gvar.var_82[Gvar.var_423][Gvar.var_428];
                                Gvar.var_2733 = Gvar.var_82[Gvar.var_423][Gvar.var_428];
                                Gvar.var_83[Gvar.var_2733].Var28 = Gvar.var_83[Gvar.var_2733].Var28 + 1;
                            }
                            if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_427] != 0 && Gvar.var_71[Gvar.var_425][Gvar.var_427] != 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0) {
                                Gvar.var_2732 = Gvar.var_82[Gvar.var_425][Gvar.var_427];
                                Gvar.var_83[Gvar.var_673].Var9 = 1;
                                Gvar.var_83[Gvar.var_673].Var5 = 1;
                                Gvar.var_83[Gvar.var_673].Var27 = Gvar.var_82[Gvar.var_425][Gvar.var_427];
                                Gvar.var_2733 = Gvar.var_82[Gvar.var_425][Gvar.var_427];
                                Gvar.var_83[Gvar.var_2733].Var28 = Gvar.var_83[Gvar.var_2733].Var28 + 1;
                            }
                            if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_427] != 0 && Gvar.var_71[Gvar.var_426][Gvar.var_427] != 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0) {
                                Gvar.var_2732 = Gvar.var_82[Gvar.var_426][Gvar.var_427];
                                Gvar.var_83[Gvar.var_673].Var9 = 1;
                                Gvar.var_83[Gvar.var_673].Var5 = 3;
                                Gvar.var_83[Gvar.var_673].Var27 = Gvar.var_82[Gvar.var_426][Gvar.var_427];
                                Gvar.var_2733 = Gvar.var_82[Gvar.var_426][Gvar.var_427];
                                Gvar.var_83[Gvar.var_2733].Var28 = Gvar.var_83[Gvar.var_2733].Var28 + 1;
                            }
                            if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_428] != 0 && Gvar.var_71[Gvar.var_425][Gvar.var_428] != 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0) {
                                Gvar.var_2732 = Gvar.var_82[Gvar.var_425][Gvar.var_428];
                                Gvar.var_83[Gvar.var_673].Var9 = 1;
                                Gvar.var_83[Gvar.var_673].Var5 = 7;
                                Gvar.var_83[Gvar.var_673].Var27 = Gvar.var_82[Gvar.var_425][Gvar.var_428];
                                Gvar.var_2733 = Gvar.var_82[Gvar.var_425][Gvar.var_428];
                                Gvar.var_83[Gvar.var_2733].Var28 = Gvar.var_83[Gvar.var_2733].Var28 + 1;
                            }
                            if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_428] != 0 && Gvar.var_71[Gvar.var_426][Gvar.var_428] != 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0) {
                                Gvar.var_2732 = Gvar.var_82[Gvar.var_426][Gvar.var_428];
                                Gvar.var_83[Gvar.var_673].Var9 = 1;
                                Gvar.var_83[Gvar.var_673].Var5 = 9;
                                Gvar.var_83[Gvar.var_673].Var27 = Gvar.var_82[Gvar.var_426][Gvar.var_428];
                                Gvar.var_2733 = Gvar.var_82[Gvar.var_426][Gvar.var_428];
                                Gvar.var_83[Gvar.var_2733].Var28 = Gvar.var_83[Gvar.var_2733].Var28 + 1;
                            }
                        }
                    }
                    if (Gvar.var_2709 >= 3) {
                        if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0) {
                            Gvar.var_2732 = Gvar.var_82[Gvar.var_425][Gvar.var_424];
                            if (Gvar.var_83[Gvar.var_2732].Var0 == Gvar.var_2709) {
                                Gvar.var_83[Gvar.var_673].Var9 = 1;
                                Gvar.var_83[Gvar.var_673].Var5 = 4;
                                Gvar.var_83[Gvar.var_673].Var27 = Gvar.var_82[Gvar.var_425][Gvar.var_424];
                                Gvar.var_2733 = Gvar.var_82[Gvar.var_425][Gvar.var_424];
                                Gvar.var_83[Gvar.var_2733].Var28 = Gvar.var_83[Gvar.var_2733].Var28 + 1;
                            }
                        }
                        if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0) {
                            Gvar.var_2732 = Gvar.var_82[Gvar.var_426][Gvar.var_424];
                            if (Gvar.var_83[Gvar.var_2732].Var0 == Gvar.var_2709) {
                                Gvar.var_83[Gvar.var_673].Var9 = 1;
                                Gvar.var_83[Gvar.var_673].Var5 = 6;
                                Gvar.var_83[Gvar.var_673].Var27 = Gvar.var_82[Gvar.var_426][Gvar.var_424];
                                Gvar.var_2733 = Gvar.var_82[Gvar.var_426][Gvar.var_424];
                                Gvar.var_83[Gvar.var_2733].Var28 = Gvar.var_83[Gvar.var_2733].Var28 + 1;
                            }
                        }
                        if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_427] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0) {
                            Gvar.var_2732 = Gvar.var_82[Gvar.var_423][Gvar.var_427];
                            if (Gvar.var_83[Gvar.var_2732].Var0 == Gvar.var_2709) {
                                Gvar.var_83[Gvar.var_673].Var9 = 1;
                                Gvar.var_83[Gvar.var_673].Var5 = 2;
                                Gvar.var_83[Gvar.var_673].Var27 = Gvar.var_82[Gvar.var_423][Gvar.var_427];
                                Gvar.var_2733 = Gvar.var_82[Gvar.var_423][Gvar.var_427];
                                Gvar.var_83[Gvar.var_2733].Var28 = Gvar.var_83[Gvar.var_2733].Var28 + 1;
                            }
                        }
                        if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_428] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0) {
                            Gvar.var_2732 = Gvar.var_82[Gvar.var_423][Gvar.var_428];
                            if (Gvar.var_83[Gvar.var_2732].Var0 == Gvar.var_2709) {
                                Gvar.var_83[Gvar.var_673].Var9 = 1;
                                Gvar.var_83[Gvar.var_673].Var5 = 8;
                                Gvar.var_83[Gvar.var_673].Var27 = Gvar.var_82[Gvar.var_423][Gvar.var_428];
                                Gvar.var_2733 = Gvar.var_82[Gvar.var_423][Gvar.var_428];
                                Gvar.var_83[Gvar.var_2733].Var28 = Gvar.var_83[Gvar.var_2733].Var28 + 1;
                            }
                        }
                        if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_427] != 0 && Gvar.var_71[Gvar.var_425][Gvar.var_427] != 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0) {
                            if (Gvar.var_83[Gvar.var_2732].Var0 == Gvar.var_2709) {
                                Gvar.var_2732 = Gvar.var_82[Gvar.var_425][Gvar.var_427];
                                Gvar.var_83[Gvar.var_673].Var9 = 1;
                                Gvar.var_83[Gvar.var_673].Var5 = 1;
                                Gvar.var_83[Gvar.var_673].Var27 = Gvar.var_82[Gvar.var_425][Gvar.var_427];
                                Gvar.var_2733 = Gvar.var_82[Gvar.var_425][Gvar.var_427];
                                Gvar.var_83[Gvar.var_2733].Var28 = Gvar.var_83[Gvar.var_2733].Var28 + 1;
                            }
                        }
                        if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_427] != 0 && Gvar.var_71[Gvar.var_426][Gvar.var_427] != 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0) {
                            if (Gvar.var_83[Gvar.var_2732].Var0 == Gvar.var_2709) {
                                Gvar.var_2732 = Gvar.var_82[Gvar.var_426][Gvar.var_427];
                                Gvar.var_83[Gvar.var_673].Var9 = 1;
                                Gvar.var_83[Gvar.var_673].Var5 = 3;
                                Gvar.var_83[Gvar.var_673].Var27 = Gvar.var_82[Gvar.var_426][Gvar.var_427];
                                Gvar.var_2733 = Gvar.var_82[Gvar.var_426][Gvar.var_427];
                                Gvar.var_83[Gvar.var_2733].Var28 = Gvar.var_83[Gvar.var_2733].Var28 + 1;
                            }
                        }
                        if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_428] != 0 && Gvar.var_71[Gvar.var_425][Gvar.var_428] != 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0) {
                            if (Gvar.var_83[Gvar.var_2732].Var0 == Gvar.var_2709) {
                                Gvar.var_2732 = Gvar.var_82[Gvar.var_425][Gvar.var_428];
                                Gvar.var_83[Gvar.var_673].Var9 = 1;
                                Gvar.var_83[Gvar.var_673].Var5 = 7;
                                Gvar.var_83[Gvar.var_673].Var27 = Gvar.var_82[Gvar.var_425][Gvar.var_428];
                                Gvar.var_2733 = Gvar.var_82[Gvar.var_425][Gvar.var_428];
                                Gvar.var_83[Gvar.var_2733].Var28 = Gvar.var_83[Gvar.var_2733].Var28 + 1;
                            }
                        }
                        if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_428] != 0 && Gvar.var_71[Gvar.var_426][Gvar.var_428] != 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0) {
                            if (Gvar.var_83[Gvar.var_2732].Var0 == Gvar.var_2709) {
                                Gvar.var_2732 = Gvar.var_82[Gvar.var_426][Gvar.var_428];
                                Gvar.var_83[Gvar.var_673].Var9 = 1;
                                Gvar.var_83[Gvar.var_673].Var5 = 9;
                                Gvar.var_83[Gvar.var_673].Var27 = Gvar.var_82[Gvar.var_426][Gvar.var_428];
                                Gvar.var_2733 = Gvar.var_82[Gvar.var_426][Gvar.var_428];
                                Gvar.var_83[Gvar.var_2733].Var28 = Gvar.var_83[Gvar.var_2733].Var28 + 1;
                            }
                        }
                    }
                    if (Gvar.var_83[Gvar.var_673].Var23 >= 1) {
                        if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_83[Gvar.var_673].Var5 == 4) {
                            Gvar.var_2732 = Gvar.var_82[Gvar.var_425][Gvar.var_424];
                            Gvar.var_83[Gvar.var_673].Var9 = 1;
                            Gvar.var_83[Gvar.var_673].Var5 = 4;
                            Gvar.var_83[Gvar.var_673].Var27 = Gvar.var_82[Gvar.var_425][Gvar.var_424];
                            Gvar.var_2733 = Gvar.var_82[Gvar.var_425][Gvar.var_424];
                            Gvar.var_83[Gvar.var_2733].Var28 = Gvar.var_83[Gvar.var_2733].Var28 + 1;
                        }
                        if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_83[Gvar.var_673].Var5 == 6) {
                            Gvar.var_2732 = Gvar.var_82[Gvar.var_426][Gvar.var_424];
                            Gvar.var_83[Gvar.var_673].Var9 = 1;
                            Gvar.var_83[Gvar.var_673].Var5 = 6;
                            Gvar.var_83[Gvar.var_673].Var27 = Gvar.var_82[Gvar.var_426][Gvar.var_424];
                            Gvar.var_2733 = Gvar.var_82[Gvar.var_426][Gvar.var_424];
                            Gvar.var_83[Gvar.var_2733].Var28 = Gvar.var_83[Gvar.var_2733].Var28 + 1;
                        }
                        if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_427] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0 && Gvar.var_83[Gvar.var_673].Var5 == 2) {
                            Gvar.var_2732 = Gvar.var_82[Gvar.var_423][Gvar.var_427];
                            Gvar.var_83[Gvar.var_673].Var9 = 1;
                            Gvar.var_83[Gvar.var_673].Var5 = 2;
                            Gvar.var_83[Gvar.var_673].Var27 = Gvar.var_82[Gvar.var_423][Gvar.var_427];
                            Gvar.var_2733 = Gvar.var_82[Gvar.var_423][Gvar.var_427];
                            Gvar.var_83[Gvar.var_2733].Var28 = Gvar.var_83[Gvar.var_2733].Var28 + 1;
                        }
                        if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_428] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0 && Gvar.var_83[Gvar.var_673].Var5 == 8) {
                            Gvar.var_2732 = Gvar.var_82[Gvar.var_423][Gvar.var_428];
                            Gvar.var_83[Gvar.var_673].Var9 = 1;
                            Gvar.var_83[Gvar.var_673].Var5 = 8;
                            Gvar.var_83[Gvar.var_673].Var27 = Gvar.var_82[Gvar.var_423][Gvar.var_428];
                            Gvar.var_2733 = Gvar.var_82[Gvar.var_423][Gvar.var_428];
                            Gvar.var_83[Gvar.var_2733].Var28 = Gvar.var_83[Gvar.var_2733].Var28 + 1;
                        }
                        if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_427] != 0 && Gvar.var_71[Gvar.var_425][Gvar.var_427] != 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0 && Gvar.var_83[Gvar.var_673].Var5 == 1) {
                            Gvar.var_2732 = Gvar.var_82[Gvar.var_425][Gvar.var_427];
                            Gvar.var_83[Gvar.var_673].Var9 = 1;
                            Gvar.var_83[Gvar.var_673].Var5 = 1;
                            Gvar.var_83[Gvar.var_673].Var27 = Gvar.var_82[Gvar.var_425][Gvar.var_427];
                            Gvar.var_2733 = Gvar.var_82[Gvar.var_425][Gvar.var_427];
                            Gvar.var_83[Gvar.var_2733].Var28 = Gvar.var_83[Gvar.var_2733].Var28 + 1;
                        }
                        if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_427] != 0 && Gvar.var_71[Gvar.var_426][Gvar.var_427] != 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0 && Gvar.var_83[Gvar.var_673].Var5 == 3) {
                            Gvar.var_2732 = Gvar.var_82[Gvar.var_426][Gvar.var_427];
                            Gvar.var_83[Gvar.var_673].Var9 = 1;
                            Gvar.var_83[Gvar.var_673].Var5 = 3;
                            Gvar.var_83[Gvar.var_673].Var27 = Gvar.var_82[Gvar.var_426][Gvar.var_427];
                            Gvar.var_2733 = Gvar.var_82[Gvar.var_426][Gvar.var_427];
                            Gvar.var_83[Gvar.var_2733].Var28 = Gvar.var_83[Gvar.var_2733].Var28 + 1;
                        }
                        if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_428] != 0 && Gvar.var_71[Gvar.var_425][Gvar.var_428] != 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0 && Gvar.var_83[Gvar.var_673].Var5 == 7) {
                            Gvar.var_2732 = Gvar.var_82[Gvar.var_425][Gvar.var_428];
                            Gvar.var_83[Gvar.var_673].Var9 = 1;
                            Gvar.var_83[Gvar.var_673].Var5 = 7;
                            Gvar.var_83[Gvar.var_673].Var27 = Gvar.var_82[Gvar.var_425][Gvar.var_428];
                            Gvar.var_2733 = Gvar.var_82[Gvar.var_425][Gvar.var_428];
                            Gvar.var_83[Gvar.var_2733].Var28 = Gvar.var_83[Gvar.var_2733].Var28 + 1;
                        }
                        if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_428] != 0 && Gvar.var_71[Gvar.var_426][Gvar.var_428] != 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0 && Gvar.var_83[Gvar.var_673].Var5 == 9) {
                            Gvar.var_2732 = Gvar.var_82[Gvar.var_426][Gvar.var_428];
                            Gvar.var_83[Gvar.var_673].Var9 = 1;
                            Gvar.var_83[Gvar.var_673].Var5 = 9;
                            Gvar.var_83[Gvar.var_673].Var27 = Gvar.var_82[Gvar.var_426][Gvar.var_428];
                            Gvar.var_2733 = Gvar.var_82[Gvar.var_426][Gvar.var_428];
                            Gvar.var_83[Gvar.var_2733].Var28 = Gvar.var_83[Gvar.var_2733].Var28 + 1;
                        }
                        if (Gvar.var_83[Gvar.var_673].Var0 == 118 && Gvar.var_83[Gvar.var_673].Var9 == 1) {
                            Gvar.var_2733 = Gvar.var_83[Gvar.var_673].Var27;
                            if (Gvar.var_83[Gvar.var_2733].Var0 == 118) {
                                Gvar.var_83[Gvar.var_673].Var9 = 0;
                                Gvar.var_83[Gvar.var_673].Var27 = 0;
                                Gvar.var_83[Gvar.var_2733].Var28 = Gvar.var_83[Gvar.var_2733].Var28 - 1;
                            }
                        }
                    }
                    if (Gvar.var_83[Gvar.var_673].Var31 == 5) {
                        if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0) {
                            Gvar.var_2732 = Gvar.var_82[Gvar.var_425][Gvar.var_424];
                            if (Gvar.var_83[Gvar.var_2732].Var31 != 4 && Gvar.var_83[Gvar.var_2732].Var31 != 5 && Gvar.var_83[Gvar.var_2732].Var0 != 53) {
                                Gvar.var_83[Gvar.var_673].Var9 = 1;
                                Gvar.var_83[Gvar.var_673].Var5 = 4;
                                Gvar.var_83[Gvar.var_673].Var27 = Gvar.var_82[Gvar.var_425][Gvar.var_424];
                                Gvar.var_2733 = Gvar.var_82[Gvar.var_425][Gvar.var_424];
                                Gvar.var_83[Gvar.var_2733].Var28 = Gvar.var_83[Gvar.var_2733].Var28 + 1;
                            }
                        }
                        if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0) {
                            Gvar.var_2732 = Gvar.var_82[Gvar.var_426][Gvar.var_424];
                            if (Gvar.var_83[Gvar.var_2732].Var31 != 4 && Gvar.var_83[Gvar.var_2732].Var31 != 5 && Gvar.var_83[Gvar.var_2732].Var0 != 53) {
                                Gvar.var_83[Gvar.var_673].Var9 = 1;
                                Gvar.var_83[Gvar.var_673].Var5 = 6;
                                Gvar.var_83[Gvar.var_673].Var27 = Gvar.var_82[Gvar.var_426][Gvar.var_424];
                                Gvar.var_2733 = Gvar.var_82[Gvar.var_426][Gvar.var_424];
                                Gvar.var_83[Gvar.var_2733].Var28 = Gvar.var_83[Gvar.var_2733].Var28 + 1;
                            }
                        }
                        if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_427] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0) {
                            Gvar.var_2732 = Gvar.var_82[Gvar.var_423][Gvar.var_427];
                            if (Gvar.var_83[Gvar.var_2732].Var31 != 4 && Gvar.var_83[Gvar.var_2732].Var31 != 5 && Gvar.var_83[Gvar.var_2732].Var0 != 53) {
                                Gvar.var_83[Gvar.var_673].Var9 = 1;
                                Gvar.var_83[Gvar.var_673].Var5 = 2;
                                Gvar.var_83[Gvar.var_673].Var27 = Gvar.var_82[Gvar.var_423][Gvar.var_427];
                                Gvar.var_2733 = Gvar.var_82[Gvar.var_423][Gvar.var_427];
                                Gvar.var_83[Gvar.var_2733].Var28 = Gvar.var_83[Gvar.var_2733].Var28 + 1;
                            }
                        }
                        if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_428] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0) {
                            Gvar.var_2732 = Gvar.var_82[Gvar.var_423][Gvar.var_428];
                            if (Gvar.var_83[Gvar.var_2732].Var31 != 4 && Gvar.var_83[Gvar.var_2732].Var31 != 5 && Gvar.var_83[Gvar.var_2732].Var0 != 53) {
                                Gvar.var_83[Gvar.var_673].Var9 = 1;
                                Gvar.var_83[Gvar.var_673].Var5 = 8;
                                Gvar.var_83[Gvar.var_673].Var27 = Gvar.var_82[Gvar.var_423][Gvar.var_428];
                                Gvar.var_2733 = Gvar.var_82[Gvar.var_423][Gvar.var_428];
                                Gvar.var_83[Gvar.var_2733].Var28 = Gvar.var_83[Gvar.var_2733].Var28 + 1;
                            }
                        }
                        if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_427] != 0 && Gvar.var_71[Gvar.var_425][Gvar.var_427] != 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0) {
                            Gvar.var_2732 = Gvar.var_82[Gvar.var_425][Gvar.var_427];
                            if (Gvar.var_83[Gvar.var_2732].Var31 != 4 && Gvar.var_83[Gvar.var_2732].Var31 != 5 && Gvar.var_83[Gvar.var_2732].Var0 != 53) {
                                Gvar.var_83[Gvar.var_673].Var9 = 1;
                                Gvar.var_83[Gvar.var_673].Var5 = 1;
                                Gvar.var_83[Gvar.var_673].Var27 = Gvar.var_82[Gvar.var_425][Gvar.var_427];
                                Gvar.var_2733 = Gvar.var_82[Gvar.var_425][Gvar.var_427];
                                Gvar.var_83[Gvar.var_2733].Var28 = Gvar.var_83[Gvar.var_2733].Var28 + 1;
                            }
                        }
                        if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_427] != 0 && Gvar.var_71[Gvar.var_426][Gvar.var_427] != 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0) {
                            Gvar.var_2732 = Gvar.var_82[Gvar.var_426][Gvar.var_427];
                            if (Gvar.var_83[Gvar.var_2732].Var31 != 4 && Gvar.var_83[Gvar.var_2732].Var31 != 5 && Gvar.var_83[Gvar.var_2732].Var0 != 53) {
                                Gvar.var_83[Gvar.var_673].Var9 = 1;
                                Gvar.var_83[Gvar.var_673].Var5 = 3;
                                Gvar.var_83[Gvar.var_673].Var27 = Gvar.var_82[Gvar.var_426][Gvar.var_427];
                                Gvar.var_2733 = Gvar.var_82[Gvar.var_426][Gvar.var_427];
                                Gvar.var_83[Gvar.var_2733].Var28 = Gvar.var_83[Gvar.var_2733].Var28 + 1;
                            }
                        }
                        if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_428] != 0 && Gvar.var_71[Gvar.var_425][Gvar.var_428] != 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0) {
                            Gvar.var_2732 = Gvar.var_82[Gvar.var_425][Gvar.var_428];
                            if (Gvar.var_83[Gvar.var_2732].Var31 != 4 && Gvar.var_83[Gvar.var_2732].Var31 != 5 && Gvar.var_83[Gvar.var_2732].Var0 != 53) {
                                Gvar.var_83[Gvar.var_673].Var9 = 1;
                                Gvar.var_83[Gvar.var_673].Var5 = 7;
                                Gvar.var_83[Gvar.var_673].Var27 = Gvar.var_82[Gvar.var_425][Gvar.var_428];
                                Gvar.var_2733 = Gvar.var_82[Gvar.var_425][Gvar.var_428];
                                Gvar.var_83[Gvar.var_2733].Var28 = Gvar.var_83[Gvar.var_2733].Var28 + 1;
                            }
                        }
                        if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_428] != 0 && Gvar.var_71[Gvar.var_426][Gvar.var_428] != 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0) {
                            Gvar.var_2732 = Gvar.var_82[Gvar.var_426][Gvar.var_428];
                            if (Gvar.var_83[Gvar.var_2732].Var31 != 4 && Gvar.var_83[Gvar.var_2732].Var31 != 5 && Gvar.var_83[Gvar.var_2732].Var0 != 53) {
                                Gvar.var_83[Gvar.var_673].Var9 = 1;
                                Gvar.var_83[Gvar.var_673].Var5 = 9;
                                Gvar.var_83[Gvar.var_673].Var27 = Gvar.var_82[Gvar.var_426][Gvar.var_428];
                                Gvar.var_2733 = Gvar.var_82[Gvar.var_426][Gvar.var_428];
                                Gvar.var_83[Gvar.var_2733].Var28 = Gvar.var_83[Gvar.var_2733].Var28 + 1;
                            }
                        }
                    }
                    if (Gvar.var_83[Gvar.var_673].Var31 != 5 && Gvar.var_83[Gvar.var_673].Var31 != 4) {
                        if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0) {
                            Gvar.var_2732 = Gvar.var_82[Gvar.var_425][Gvar.var_424];
                            if (Gvar.var_83[Gvar.var_2732].Var31 == 5) {
                                Gvar.var_83[Gvar.var_673].Var9 = 1;
                                Gvar.var_83[Gvar.var_673].Var5 = 4;
                                Gvar.var_83[Gvar.var_673].Var27 = Gvar.var_82[Gvar.var_425][Gvar.var_424];
                                Gvar.var_2733 = Gvar.var_82[Gvar.var_425][Gvar.var_424];
                                Gvar.var_83[Gvar.var_2733].Var28 = Gvar.var_83[Gvar.var_2733].Var28 + 1;
                            }
                        }
                        if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0) {
                            Gvar.var_2732 = Gvar.var_82[Gvar.var_426][Gvar.var_424];
                            if (Gvar.var_83[Gvar.var_2732].Var31 == 5) {
                                Gvar.var_83[Gvar.var_673].Var9 = 1;
                                Gvar.var_83[Gvar.var_673].Var5 = 6;
                                Gvar.var_83[Gvar.var_673].Var27 = Gvar.var_82[Gvar.var_426][Gvar.var_424];
                                Gvar.var_2733 = Gvar.var_82[Gvar.var_426][Gvar.var_424];
                                Gvar.var_83[Gvar.var_2733].Var28 = Gvar.var_83[Gvar.var_2733].Var28 + 1;
                            }
                        }
                        if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_427] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0) {
                            Gvar.var_2732 = Gvar.var_82[Gvar.var_423][Gvar.var_427];
                            if (Gvar.var_83[Gvar.var_2732].Var31 == 5) {
                                Gvar.var_83[Gvar.var_673].Var9 = 1;
                                Gvar.var_83[Gvar.var_673].Var5 = 2;
                                Gvar.var_83[Gvar.var_673].Var27 = Gvar.var_82[Gvar.var_423][Gvar.var_427];
                                Gvar.var_2733 = Gvar.var_82[Gvar.var_423][Gvar.var_427];
                                Gvar.var_83[Gvar.var_2733].Var28 = Gvar.var_83[Gvar.var_2733].Var28 + 1;
                            }
                        }
                        if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_428] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0) {
                            Gvar.var_2732 = Gvar.var_82[Gvar.var_423][Gvar.var_428];
                            if (Gvar.var_83[Gvar.var_2732].Var31 == 5) {
                                Gvar.var_83[Gvar.var_673].Var9 = 1;
                                Gvar.var_83[Gvar.var_673].Var5 = 8;
                                Gvar.var_83[Gvar.var_673].Var27 = Gvar.var_82[Gvar.var_423][Gvar.var_428];
                                Gvar.var_2733 = Gvar.var_82[Gvar.var_423][Gvar.var_428];
                                Gvar.var_83[Gvar.var_2733].Var28 = Gvar.var_83[Gvar.var_2733].Var28 + 1;
                            }
                        }
                        if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_427] != 0 && Gvar.var_71[Gvar.var_425][Gvar.var_427] != 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0) {
                            Gvar.var_2732 = Gvar.var_82[Gvar.var_425][Gvar.var_427];
                            if (Gvar.var_83[Gvar.var_2732].Var31 == 5) {
                                Gvar.var_83[Gvar.var_673].Var9 = 1;
                                Gvar.var_83[Gvar.var_673].Var5 = 1;
                                Gvar.var_83[Gvar.var_673].Var27 = Gvar.var_82[Gvar.var_425][Gvar.var_427];
                                Gvar.var_2733 = Gvar.var_82[Gvar.var_425][Gvar.var_427];
                                Gvar.var_83[Gvar.var_2733].Var28 = Gvar.var_83[Gvar.var_2733].Var28 + 1;
                            }
                        }
                        if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_427] != 0 && Gvar.var_71[Gvar.var_426][Gvar.var_427] != 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0) {
                            Gvar.var_2732 = Gvar.var_82[Gvar.var_426][Gvar.var_427];
                            if (Gvar.var_83[Gvar.var_2732].Var31 == 5) {
                                Gvar.var_83[Gvar.var_673].Var9 = 1;
                                Gvar.var_83[Gvar.var_673].Var5 = 3;
                                Gvar.var_83[Gvar.var_673].Var27 = Gvar.var_82[Gvar.var_426][Gvar.var_427];
                                Gvar.var_2733 = Gvar.var_82[Gvar.var_426][Gvar.var_427];
                                Gvar.var_83[Gvar.var_2733].Var28 = Gvar.var_83[Gvar.var_2733].Var28 + 1;
                            }
                        }
                        if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_428] != 0 && Gvar.var_71[Gvar.var_425][Gvar.var_428] != 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0) {
                            Gvar.var_2732 = Gvar.var_82[Gvar.var_425][Gvar.var_428];
                            if (Gvar.var_83[Gvar.var_2732].Var31 == 5) {
                                Gvar.var_83[Gvar.var_673].Var9 = 1;
                                Gvar.var_83[Gvar.var_673].Var5 = 7;
                                Gvar.var_83[Gvar.var_673].Var27 = Gvar.var_82[Gvar.var_425][Gvar.var_428];
                                Gvar.var_2733 = Gvar.var_82[Gvar.var_425][Gvar.var_428];
                                Gvar.var_83[Gvar.var_2733].Var28 = Gvar.var_83[Gvar.var_2733].Var28 + 1;
                            }
                        }
                        if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_428] != 0 && Gvar.var_71[Gvar.var_426][Gvar.var_428] != 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0) {
                            Gvar.var_2732 = Gvar.var_82[Gvar.var_426][Gvar.var_428];
                            if (Gvar.var_83[Gvar.var_2732].Var31 == 5) {
                                Gvar.var_83[Gvar.var_673].Var9 = 1;
                                Gvar.var_83[Gvar.var_673].Var5 = 9;
                                Gvar.var_83[Gvar.var_673].Var27 = Gvar.var_82[Gvar.var_426][Gvar.var_428];
                                Gvar.var_2733 = Gvar.var_82[Gvar.var_426][Gvar.var_428];
                                Gvar.var_83[Gvar.var_2733].Var28 = Gvar.var_83[Gvar.var_2733].Var28 + 1;
                            }
                        }
                    }
                    if (Gvar.var_123 >= 1 && Gvar.var_83[Gvar.var_673].Var31 != 5 && Gvar.var_83[Gvar.var_673].Var31 != 4) {
                        if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == Gvar.var_124) {
                            Gvar.var_83[Gvar.var_673].Var9 = 1;
                            Gvar.var_83[Gvar.var_673].Var5 = 4;
                            Gvar.var_83[Gvar.var_673].Var27 = Gvar.var_82[Gvar.var_425][Gvar.var_424];
                            Gvar.var_2733 = Gvar.var_82[Gvar.var_425][Gvar.var_424];
                            Gvar.var_83[Gvar.var_2733].Var28 = Gvar.var_83[Gvar.var_2733].Var28 + 1;
                        }
                        if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == Gvar.var_124) {
                            Gvar.var_83[Gvar.var_673].Var9 = 1;
                            Gvar.var_83[Gvar.var_673].Var5 = 6;
                            Gvar.var_83[Gvar.var_673].Var27 = Gvar.var_82[Gvar.var_426][Gvar.var_424];
                            Gvar.var_2733 = Gvar.var_82[Gvar.var_426][Gvar.var_424];
                            Gvar.var_83[Gvar.var_2733].Var28 = Gvar.var_83[Gvar.var_2733].Var28 + 1;
                        }
                        if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == Gvar.var_124) {
                            Gvar.var_83[Gvar.var_673].Var9 = 1;
                            Gvar.var_83[Gvar.var_673].Var5 = 2;
                            Gvar.var_83[Gvar.var_673].Var27 = Gvar.var_82[Gvar.var_423][Gvar.var_427];
                            Gvar.var_2733 = Gvar.var_82[Gvar.var_423][Gvar.var_427];
                            Gvar.var_83[Gvar.var_2733].Var28 = Gvar.var_83[Gvar.var_2733].Var28 + 1;
                        }
                        if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == Gvar.var_124) {
                            Gvar.var_83[Gvar.var_673].Var9 = 1;
                            Gvar.var_83[Gvar.var_673].Var5 = 8;
                            Gvar.var_83[Gvar.var_673].Var27 = Gvar.var_82[Gvar.var_423][Gvar.var_428];
                            Gvar.var_2733 = Gvar.var_82[Gvar.var_423][Gvar.var_428];
                            Gvar.var_83[Gvar.var_2733].Var28 = Gvar.var_83[Gvar.var_2733].Var28 + 1;
                        }
                        if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_427] == Gvar.var_124 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0) {
                            Gvar.var_83[Gvar.var_673].Var9 = 1;
                            Gvar.var_83[Gvar.var_673].Var5 = 1;
                            Gvar.var_83[Gvar.var_673].Var27 = Gvar.var_82[Gvar.var_425][Gvar.var_427];
                            Gvar.var_2733 = Gvar.var_82[Gvar.var_425][Gvar.var_427];
                            Gvar.var_83[Gvar.var_2733].Var28 = Gvar.var_83[Gvar.var_2733].Var28 + 1;
                        }
                        if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_427] == Gvar.var_124 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0) {
                            Gvar.var_83[Gvar.var_673].Var9 = 1;
                            Gvar.var_83[Gvar.var_673].Var5 = 3;
                            Gvar.var_83[Gvar.var_673].Var27 = Gvar.var_82[Gvar.var_426][Gvar.var_427];
                            Gvar.var_2733 = Gvar.var_82[Gvar.var_426][Gvar.var_427];
                            Gvar.var_83[Gvar.var_2733].Var28 = Gvar.var_83[Gvar.var_2733].Var28 + 1;
                        }
                        if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_428] == Gvar.var_124 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0) {
                            Gvar.var_83[Gvar.var_673].Var9 = 1;
                            Gvar.var_83[Gvar.var_673].Var5 = 7;
                            Gvar.var_83[Gvar.var_673].Var27 = Gvar.var_82[Gvar.var_425][Gvar.var_428];
                            Gvar.var_2733 = Gvar.var_82[Gvar.var_425][Gvar.var_428];
                            Gvar.var_83[Gvar.var_2733].Var28 = Gvar.var_83[Gvar.var_2733].Var28 + 1;
                        }
                        if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_428] == Gvar.var_124 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0) {
                            Gvar.var_83[Gvar.var_673].Var9 = 1;
                            Gvar.var_83[Gvar.var_673].Var5 = 9;
                            Gvar.var_83[Gvar.var_673].Var27 = Gvar.var_82[Gvar.var_426][Gvar.var_428];
                            Gvar.var_2733 = Gvar.var_82[Gvar.var_426][Gvar.var_428];
                            Gvar.var_83[Gvar.var_2733].Var28 = Gvar.var_83[Gvar.var_2733].Var28 + 1;
                        }
                    }
                    Gvar.var_2734 = 1;
                    if (Gvar.var_123 != 0) {
                        Gvar.var_2734 = 0;
                    }
                    if (Gvar.var_83[Gvar.var_673].Var31 == 5) {
                        Gvar.var_2734 = 0;
                    }
                    if (Gvar.var_83[Gvar.var_673].Var9 == 1) {
                        Gvar.var_2734 = 0;
                    }
                    if (Gvar.var_131 >= 1) {
                        Gvar.var_2734 = 0;
                    }
                    if (Gvar.var_144 >= 1) {
                        Gvar.var_2734 = 0;
                    }
                    if (Gvar.var_218 >= 1) {
                        Gvar.var_2734 = 0;
                    }
                    if (Gvar.var_2709 == 2) {
                        Gvar.var_1073 = Adap.rnd(4);
                        if (Gvar.var_1073 != 0) {
                            Gvar.var_2734 = 0;
                        }
                    }
                    if (Gvar.var_2709 >= 3) {
                        Gvar.var_2734 = 0;
                    }
                    if (Gvar.var_2712 != 0) {
                        Gvar.var_2734 = 0;
                    }
                    if (Gvar.var_2710 != 0) {
                        Gvar.var_2734 = 0;
                    }
                    // No = 132 レクイエムジョルノでなければ
                    if (Gvar.var_146 >= 1 && Gvar.var_147 == Gvar.var_66 && Gvar.var_148 == Gvar.var_67 && Gvar.var_83[Gvar.var_673].Var0 != 132) {
                        Gvar.var_2734 = 0;
                    }
                    // No = 164 エシディシの脳、No = 165 エボニーデビル
                    if (Gvar.var_83[Gvar.var_673].Var0 == 164 || Gvar.var_83[Gvar.var_673].Var0 == 165) {
                        if (Gvar.var_83[Gvar.var_673].Var20 == 0) {
                            Gvar.var_2734 = 0;
                        }
                    }
                    if (Gvar.var_2734 == 1) {
                        if (Gvar.var_83[Gvar.var_673].Var23 >= 1) {
                            if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_65[Gvar.var_425][Gvar.var_424] == 1 && Gvar.var_83[Gvar.var_673].Var5 == 4) {
                                Gvar.var_83[Gvar.var_673].Var9 = 1;
                                Gvar.var_83[Gvar.var_673].Var5 = 4;
                            }
                            if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_65[Gvar.var_426][Gvar.var_424] == 1 && Gvar.var_83[Gvar.var_673].Var5 == 6) {
                                Gvar.var_83[Gvar.var_673].Var9 = 1;
                                Gvar.var_83[Gvar.var_673].Var5 = 6;
                            }
                            if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_65[Gvar.var_423][Gvar.var_427] == 1 && Gvar.var_83[Gvar.var_673].Var5 == 2) {
                                Gvar.var_83[Gvar.var_673].Var9 = 1;
                                Gvar.var_83[Gvar.var_673].Var5 = 2;
                            }
                            if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_65[Gvar.var_423][Gvar.var_428] == 1 && Gvar.var_83[Gvar.var_673].Var5 == 8) {
                                Gvar.var_83[Gvar.var_673].Var9 = 1;
                                Gvar.var_83[Gvar.var_673].Var5 = 8;
                            }
                            if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_65[Gvar.var_425][Gvar.var_427] == 1 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0 && Gvar.var_83[Gvar.var_673].Var5 == 1) {
                                Gvar.var_83[Gvar.var_673].Var9 = 1;
                                Gvar.var_83[Gvar.var_673].Var5 = 1;
                            }
                            if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_65[Gvar.var_426][Gvar.var_427] == 1 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0 && Gvar.var_83[Gvar.var_673].Var5 == 3) {
                                Gvar.var_83[Gvar.var_673].Var9 = 1;
                                Gvar.var_83[Gvar.var_673].Var5 = 3;
                            }
                            if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_65[Gvar.var_425][Gvar.var_428] == 1 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0 && Gvar.var_83[Gvar.var_673].Var5 == 7) {
                                Gvar.var_83[Gvar.var_673].Var9 = 1;
                                Gvar.var_83[Gvar.var_673].Var5 = 7;
                            }
                            if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_65[Gvar.var_426][Gvar.var_428] == 1 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0 && Gvar.var_83[Gvar.var_673].Var5 == 9) {
                                Gvar.var_83[Gvar.var_673].Var9 = 1;
                                Gvar.var_83[Gvar.var_673].Var5 = 9;
                            }
                        }
                        if (Gvar.var_83[Gvar.var_673].Var23 == 0) {
                            if (Gvar.var_83[Gvar.var_673].Var0 != 111 && Gvar.var_83[Gvar.var_673].Var0 != 43) {
                                if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_65[Gvar.var_425][Gvar.var_424] == 1) {
                                    Gvar.var_83[Gvar.var_673].Var9 = 1;
                                    Gvar.var_83[Gvar.var_673].Var5 = 4;
                                }
                                if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_65[Gvar.var_426][Gvar.var_424] == 1) {
                                    Gvar.var_83[Gvar.var_673].Var9 = 1;
                                    Gvar.var_83[Gvar.var_673].Var5 = 6;
                                }
                                if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_65[Gvar.var_423][Gvar.var_427] == 1) {
                                    Gvar.var_83[Gvar.var_673].Var9 = 1;
                                    Gvar.var_83[Gvar.var_673].Var5 = 2;
                                }
                                if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_65[Gvar.var_423][Gvar.var_428] == 1) {
                                    Gvar.var_83[Gvar.var_673].Var9 = 1;
                                    Gvar.var_83[Gvar.var_673].Var5 = 8;
                                }
                                if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_65[Gvar.var_425][Gvar.var_427] == 1 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0) {
                                    Gvar.var_83[Gvar.var_673].Var9 = 1;
                                    Gvar.var_83[Gvar.var_673].Var5 = 1;
                                }
                                if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_65[Gvar.var_426][Gvar.var_427] == 1 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0) {
                                    Gvar.var_83[Gvar.var_673].Var9 = 1;
                                    Gvar.var_83[Gvar.var_673].Var5 = 3;
                                }
                                if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_65[Gvar.var_425][Gvar.var_428] == 1 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0) {
                                    Gvar.var_83[Gvar.var_673].Var9 = 1;
                                    Gvar.var_83[Gvar.var_673].Var5 = 7;
                                }
                                if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_65[Gvar.var_426][Gvar.var_428] == 1 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0) {
                                    Gvar.var_83[Gvar.var_673].Var9 = 1;
                                    Gvar.var_83[Gvar.var_673].Var5 = 9;
                                }
                            }
                            // 敵が壁の中を動ける動作処理
                            // No = 111 究極カーズ、No = 43 セッコ
                            if (Gvar.var_83[Gvar.var_673].Var0 == 111 || Gvar.var_83[Gvar.var_673].Var0 == 43) {
                                if (Gvar.var_83[Gvar.var_673].Var20 == 0) {
                                    if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_65[Gvar.var_425][Gvar.var_424] == 1) {
                                        Gvar.var_83[Gvar.var_673].Var9 = 1;
                                        Gvar.var_83[Gvar.var_673].Var5 = 4;
                                    }
                                    if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_65[Gvar.var_426][Gvar.var_424] == 1) {
                                        Gvar.var_83[Gvar.var_673].Var9 = 1;
                                        Gvar.var_83[Gvar.var_673].Var5 = 6;
                                    }
                                    if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_65[Gvar.var_423][Gvar.var_427] == 1) {
                                        Gvar.var_83[Gvar.var_673].Var9 = 1;
                                        Gvar.var_83[Gvar.var_673].Var5 = 2;
                                    }
                                    if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_65[Gvar.var_423][Gvar.var_428] == 1) {
                                        Gvar.var_83[Gvar.var_673].Var9 = 1;
                                        Gvar.var_83[Gvar.var_673].Var5 = 8;
                                    }
                                    if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_65[Gvar.var_425][Gvar.var_427] == 1) {
                                        Gvar.var_83[Gvar.var_673].Var9 = 1;
                                        Gvar.var_83[Gvar.var_673].Var5 = 1;
                                    }
                                    if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_65[Gvar.var_426][Gvar.var_427] == 1) {
                                        Gvar.var_83[Gvar.var_673].Var9 = 1;
                                        Gvar.var_83[Gvar.var_673].Var5 = 3;
                                    }
                                    if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_65[Gvar.var_425][Gvar.var_428] == 1) {
                                        Gvar.var_83[Gvar.var_673].Var9 = 1;
                                        Gvar.var_83[Gvar.var_673].Var5 = 7;
                                    }
                                    if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_65[Gvar.var_426][Gvar.var_428] == 1) {
                                        Gvar.var_83[Gvar.var_673].Var9 = 1;
                                        Gvar.var_83[Gvar.var_673].Var5 = 9;
                                    }
                                }
                                if (Gvar.var_83[Gvar.var_673].Var20 != 0) {
                                    if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_65[Gvar.var_425][Gvar.var_424] == 1) {
                                        Gvar.var_83[Gvar.var_673].Var9 = 1;
                                        Gvar.var_83[Gvar.var_673].Var5 = 4;
                                    }
                                    if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_65[Gvar.var_426][Gvar.var_424] == 1) {
                                        Gvar.var_83[Gvar.var_673].Var9 = 1;
                                        Gvar.var_83[Gvar.var_673].Var5 = 6;
                                    }
                                    if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_65[Gvar.var_423][Gvar.var_427] == 1) {
                                        Gvar.var_83[Gvar.var_673].Var9 = 1;
                                        Gvar.var_83[Gvar.var_673].Var5 = 2;
                                    }
                                    if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_65[Gvar.var_423][Gvar.var_428] == 1) {
                                        Gvar.var_83[Gvar.var_673].Var9 = 1;
                                        Gvar.var_83[Gvar.var_673].Var5 = 8;
                                    }
                                    if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_65[Gvar.var_425][Gvar.var_427] == 1 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0) {
                                        Gvar.var_83[Gvar.var_673].Var9 = 1;
                                        Gvar.var_83[Gvar.var_673].Var5 = 1;
                                    }
                                    if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_65[Gvar.var_426][Gvar.var_427] == 1 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0) {
                                        Gvar.var_83[Gvar.var_673].Var9 = 1;
                                        Gvar.var_83[Gvar.var_673].Var5 = 3;
                                    }
                                    if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_65[Gvar.var_425][Gvar.var_428] == 1 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0) {
                                        Gvar.var_83[Gvar.var_673].Var9 = 1;
                                        Gvar.var_83[Gvar.var_673].Var5 = 7;
                                    }
                                    if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_65[Gvar.var_426][Gvar.var_428] == 1 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0) {
                                        Gvar.var_83[Gvar.var_673].Var9 = 1;
                                        Gvar.var_83[Gvar.var_673].Var5 = 9;
                                    }
                                }
                            }
                        }
                    }
                    if (Gvar.var_123 == 0 && Gvar.var_83[Gvar.var_673].Var31 == 5 && Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_71[Gvar.var_66][Gvar.var_67] != 13) {
                        Gvar.var_2735 = 0;
                        Gvar.var_616 = 1;
                        for (let cnt5 = 0; cnt5 < Gvar.var_97; ++cnt5) {
                            if (Gvar.var_83[Gvar.var_616].Var0 != 0 && Gvar.var_83[Gvar.var_616].Var31 != 4 && Gvar.var_83[Gvar.var_616].Var31 != 5 && Gvar.var_83[Gvar.var_616].Var30 == 0 && Gvar.var_83[Gvar.var_673].Var10 == Gvar.var_83[Gvar.var_616].Var10 && Gvar.var_83[Gvar.var_673].Var10 != 14) {
                                Gvar.var_2735 = 1;
                                break;
                            }
                            if (Gvar.var_83[Gvar.var_616].Var10 == 14) {
                                Gvar.var_2221 = Gvar.var_83[Gvar.var_616].Var1;
                                Gvar.var_2222 = Gvar.var_83[Gvar.var_616].Var2;
                                Gvar.var_2223 = Gvar.var_83[Gvar.var_616].Var1 - 1;
                                if (Gvar.var_2223 < 0) {
                                    Gvar.var_2223 = 0;
                                }
                                Gvar.var_2224 = Gvar.var_83[Gvar.var_616].Var1 + 1;
                                if (Gvar.var_2224 > Gvar.var_33) {
                                    Gvar.var_2224 = Gvar.var_33;
                                }
                                Gvar.var_2225 = Gvar.var_83[Gvar.var_616].Var2 + 1;
                                if (Gvar.var_2225 > Gvar.var_34) {
                                    Gvar.var_2225 = Gvar.var_34;
                                }
                                Gvar.var_2226 = Gvar.var_83[Gvar.var_616].Var2 - 1;
                                if (Gvar.var_2226 < 0) {
                                    Gvar.var_2226 = 0;
                                }
                                if (Gvar.var_83[Gvar.var_616].Var0 != 0 && Gvar.var_83[Gvar.var_616].Var31 != 4 && Gvar.var_83[Gvar.var_616].Var31 != 5 && Gvar.var_83[Gvar.var_616].Var30 == 0 && Gvar.var_71[Gvar.var_2223][Gvar.var_2222] == Gvar.var_83[Gvar.var_673].Var10 && Gvar.var_83[Gvar.var_673].Var10 != 14) {
                                    Gvar.var_2735 = 1;
                                    break;
                                }
                                if (Gvar.var_83[Gvar.var_616].Var0 != 0 && Gvar.var_83[Gvar.var_616].Var31 != 4 && Gvar.var_83[Gvar.var_616].Var31 != 5 && Gvar.var_83[Gvar.var_616].Var30 == 0 && Gvar.var_71[Gvar.var_2224][Gvar.var_2222] == Gvar.var_83[Gvar.var_673].Var10 && Gvar.var_83[Gvar.var_673].Var10 != 14) {
                                    Gvar.var_2735 = 1;
                                    break;
                                }
                                if (Gvar.var_83[Gvar.var_616].Var0 != 0 && Gvar.var_83[Gvar.var_616].Var31 != 4 && Gvar.var_83[Gvar.var_616].Var31 != 5 && Gvar.var_83[Gvar.var_616].Var30 == 0 && Gvar.var_71[Gvar.var_2221][Gvar.var_2225] == Gvar.var_83[Gvar.var_673].Var10 && Gvar.var_83[Gvar.var_673].Var10 != 14) {
                                    Gvar.var_2735 = 1;
                                    break;
                                }
                                if (Gvar.var_83[Gvar.var_616].Var0 != 0 && Gvar.var_83[Gvar.var_616].Var31 != 4 && Gvar.var_83[Gvar.var_616].Var31 != 5 && Gvar.var_83[Gvar.var_616].Var30 == 0 && Gvar.var_71[Gvar.var_2221][Gvar.var_2226] == Gvar.var_83[Gvar.var_673].Var10 && Gvar.var_83[Gvar.var_673].Var10 != 14) {
                                    Gvar.var_2735 = 1;
                                    break;
                                }
                            }
                            Gvar.var_616++;
                        }
                        if (Gvar.var_218 != 0 || Gvar.var_144 != 0 || Gvar.var_139 != 0) {
                            Gvar.var_2735 = 1;
                        }
                        if (Gvar.var_2735 == 0) {
                            if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_65[Gvar.var_425][Gvar.var_424] == 1) {
                                Gvar.var_83[Gvar.var_673].Var9 = 2;
                                Gvar.var_83[Gvar.var_673].Var5 = 4;
                            }
                            if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_65[Gvar.var_426][Gvar.var_424] == 1) {
                                Gvar.var_83[Gvar.var_673].Var9 = 2;
                                Gvar.var_83[Gvar.var_673].Var5 = 6;
                            }
                            if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_65[Gvar.var_423][Gvar.var_427] == 1) {
                                Gvar.var_83[Gvar.var_673].Var9 = 2;
                                Gvar.var_83[Gvar.var_673].Var5 = 2;
                            }
                            if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_65[Gvar.var_423][Gvar.var_428] == 1) {
                                Gvar.var_83[Gvar.var_673].Var9 = 2;
                                Gvar.var_83[Gvar.var_673].Var5 = 8;
                            }
                            if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_65[Gvar.var_425][Gvar.var_427] == 1 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0) {
                                Gvar.var_83[Gvar.var_673].Var9 = 2;
                                Gvar.var_83[Gvar.var_673].Var5 = 1;
                            }
                            if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_65[Gvar.var_426][Gvar.var_427] == 1 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0) {
                                Gvar.var_83[Gvar.var_673].Var9 = 2;
                                Gvar.var_83[Gvar.var_673].Var5 = 3;
                            }
                            if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_65[Gvar.var_425][Gvar.var_428] == 1 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0) {
                                Gvar.var_83[Gvar.var_673].Var9 = 2;
                                Gvar.var_83[Gvar.var_673].Var5 = 7;
                            }
                            if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_65[Gvar.var_426][Gvar.var_428] == 1 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0) {
                                Gvar.var_83[Gvar.var_673].Var9 = 2;
                                Gvar.var_83[Gvar.var_673].Var5 = 9;
                            }
                        }
                    }
                }
            }
            if (Gvar.var_83[Gvar.var_673].Var9 == 1 || Gvar.var_83[Gvar.var_673].Var18 == 1) {
                Gvar.var_362 = 1;
            }
            if (Gvar.var_83[Gvar.var_673].Var9 == 0 && Gvar.var_83[Gvar.var_673].Var18 == 0) {
                Gvar.var_2611 = Gvar.var_673;
                Gvar.var_83[Gvar.var_2611].Var6 = 0;
                await Func.func569();
                if (Gvar.var_83[Gvar.var_2611].Var15 == 2 && Gvar.var_83[Gvar.var_2611].Var6 != 0) {
                    Gvar.var_83[Gvar.var_2611].Var15 = 3;
                }
                if (Gvar.var_83[Gvar.var_2611].Var15 == 2 && Gvar.var_83[Gvar.var_2611].Var6 == 0) {
                    Gvar.var_83[Gvar.var_2611].Var15 = 4;
                    Gvar.var_83[Gvar.var_2611].Var6 = 1;
                }
                if (Gvar.var_83[Gvar.var_2611].Var15 == 1 && Gvar.var_83[Gvar.var_2611].Var6 != 0 && Gvar.var_157 == 0) {
                    Gvar.var_83[Gvar.var_2611].Var15 = 2;
                    Gvar.var_83[Gvar.var_2611].Var35 = Gvar.var_83[Gvar.var_2611].Var1;
                    Gvar.var_83[Gvar.var_2611].Var36 = Gvar.var_83[Gvar.var_2611].Var2;
                    Gvar.var_83[Gvar.var_2611].Var37 = Gvar.var_83[Gvar.var_2611].Var5;
                    Gvar.var_2736 = 0;
                    Gvar.var_2737 = Gvar.var_83[Gvar.var_2611].Var1;
                    Gvar.var_2738 = Gvar.var_83[Gvar.var_2611].Var2;
                    if (Gvar.var_80[Gvar.var_2737][Gvar.var_2738] != 0) {
                        Gvar.var_2739 = Gvar.var_80[Gvar.var_2737][Gvar.var_2738];
                        if (Gvar.var_81[Gvar.var_2739] >= 70 && Gvar.var_81[Gvar.var_2739] <= 94) {
                            Gvar.var_2736 = 1;
                        }
                    }
                    if (Gvar.var_2736 == 0) {
                        cnt1 = Gvar.var_2707 - 1;
                        continue;
                    }
                }
            }
            if (Gvar.var_83[Gvar.var_673].Var15 == 2) {
                if (Gvar.var_83[Gvar.var_673].Var6 == 0 || Gvar.var_83[Gvar.var_673].Var9 != 0 || Gvar.var_83[Gvar.var_673].Var18 != 0) {
                    Gvar.var_83[Gvar.var_673].Var15 = 4;
                }
                Gvar.var_83[Gvar.var_673].Var6 = 1;
            }
            Gvar.var_673 = Gvar.var_673 + 1;
        }
        return;
}

export {func575}
