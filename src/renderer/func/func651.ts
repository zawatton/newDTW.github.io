import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Enemy from '../enemy/index'
import * as Music from '../music/index'
import * as Stand from '../stand/index'

async function func651(this: any) {
        Adap.dbgprt(651);
        Gvar.var_2985 = 0;
        // No = 118 ダイバーダウンのDISCを攻撃装備している時
        if (Gvar.equip_disc[118] == 1 && Gvar.var_71[Gvar.var_347][Gvar.var_348] == 0) {
            await Func.func653(); // No = 118 ダイバーダウンのDISCを攻撃装備している時の壁属性媒体から遠隔装備
        }
        // No = 104 ザ・ハンドのDISCを攻撃装備している時
        if (Gvar.equip_disc[104] == 1) {
            if (Gvar.var_71[Gvar.var_347][Gvar.var_348] == 0 && Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0 && Gvar.var_3014 == 0 && Gvar.var_199 != 1 && Gvar.var_199 != 3 && Gvar.var_199 != 7 && Gvar.var_199 != 9) {
                if (Gvar.y_axis_map_image != 1 && Gvar.y_axis_map_image != 7 && Gvar.y_axis_map_image != 16 && Gvar.var_262 == 0) {
                    if (Gvar.var_347 >= 5 && Gvar.var_348 >= 5 && Gvar.var_347 <= Gvar.var_33 && Gvar.var_348 <= Gvar.var_34) {
                        Gvar.var_71[Gvar.var_347][Gvar.var_348] = 14;
                        Gvar.var_303 = Gvar.var_347;
                        Gvar.var_304 = Gvar.var_348;
                        Gvar.var_305 = Gvar.var_347 - 1;
                        if (Gvar.var_305 < 0) {
                            Gvar.var_305 = 0;
                        }
                        Gvar.var_306 = Gvar.var_347 + 1;
                        if (Gvar.var_306 > Gvar.var_33) {
                            Gvar.var_306 = Gvar.var_33;
                        }
                        Gvar.var_307 = Gvar.var_348 + 1;
                        if (Gvar.var_307 > Gvar.var_34) {
                            Gvar.var_307 = Gvar.var_34;
                        }
                        Gvar.var_308 = Gvar.var_348 - 1;
                        if (Gvar.var_308 < 0) {
                            Gvar.var_308 = 0;
                        }
                        if (Gvar.var_71[Gvar.var_305][Gvar.var_304] != 0 && Gvar.var_71[Gvar.var_305][Gvar.var_304] <= 12 && Gvar.var_71[Gvar.var_306][Gvar.var_304] != 0 && Gvar.var_71[Gvar.var_306][Gvar.var_304] <= 12) {
                            Gvar.var_71[Gvar.var_347][Gvar.var_348] = Gvar.var_71[Gvar.var_305][Gvar.var_304];
                        }
                        if (Gvar.var_71[Gvar.var_303][Gvar.var_307] != 0 && Gvar.var_71[Gvar.var_303][Gvar.var_307] <= 12 && Gvar.var_71[Gvar.var_303][Gvar.var_308] != 0 && Gvar.var_71[Gvar.var_303][Gvar.var_308] <= 12) {
                            Gvar.var_71[Gvar.var_347][Gvar.var_348] = Gvar.var_71[Gvar.var_303][Gvar.var_307];
                        }
                        Gvar.var_1194 = 1;
                        await Stand.func646();
                    }
                }
            }
            Gvar.var_3014 = 0;
            if (Gvar.var_80[Gvar.var_347][Gvar.var_348] != 0 && Gvar.var_2932 == 0 && Gvar.var_2939 == 0) {
                Gvar.var_3015 = Gvar.var_80[Gvar.var_347][Gvar.var_348];
                if (Gvar.var_81[Gvar.var_3015][4] == 1 || Gvar.var_121 == 1) {
                    if (Gvar.var_81[Gvar.var_3015][0] != 31) {
                        Gvar.var_80[Gvar.var_347][Gvar.var_348] = 0;
                        Gvar.var_1194 = 1;
                        await Stand.func646();
                    }
                }
            }
        }
        // No = 108 スティッキーフィンガーズのDISCを攻撃装備 & 敵と隣接していない時
        if (Gvar.kougeki_disc_id  == 108 && Gvar.var_82[Gvar.var_347][Gvar.var_348] == 0) {
            Gvar.kougeki_disc_id  = 110; // No = 110 スティッキーフィンガーズ(2マス先攻撃)のDISC
        }
        if (Gvar.var_2932 == 0 && Gvar.var_2939 == 0) {
            Gvar.var_74[Gvar.var_347][Gvar.var_348] = 2;
        }
        if (Gvar.var_80[Gvar.var_347][Gvar.var_348] > 0 && Gvar.var_2932 == 0 && Gvar.var_2939 == 0) {
            Gvar.var_2935 = Gvar.var_80[Gvar.var_347][Gvar.var_348];
            Gvar.var_81[Gvar.var_2935][4] = 1;
        }
        // No = 110 スティッキーフィンガーズ(2マス先攻撃)のDISCを攻撃装備している時
        if (Gvar.kougeki_disc_id  == 110) {
            if (Gvar.var_199 == 4) {
                Gvar.var_3016 = Gvar.var_347 - 1;
                Gvar.var_3017 = Gvar.var_348;
            }
            if (Gvar.var_199 == 6) {
                Gvar.var_3016 = Gvar.var_347 + 1;
                Gvar.var_3017 = Gvar.var_348;
            }
            if (Gvar.var_199 == 8) {
                Gvar.var_3016 = Gvar.var_347;
                Gvar.var_3017 = Gvar.var_348 - 1;
            }
            if (Gvar.var_199 == 2) {
                Gvar.var_3016 = Gvar.var_347;
                Gvar.var_3017 = Gvar.var_348 + 1;
            }
            if (Gvar.var_199 == 1) {
                Gvar.var_3016 = Gvar.var_347 - 1;
                Gvar.var_3017 = Gvar.var_348 + 1;
            }
            if (Gvar.var_199 == 3) {
                Gvar.var_3016 = Gvar.var_347 + 1;
                Gvar.var_3017 = Gvar.var_348 + 1;
            }
            if (Gvar.var_199 == 7) {
                Gvar.var_3016 = Gvar.var_347 - 1;
                Gvar.var_3017 = Gvar.var_348 - 1;
            }
            if (Gvar.var_199 == 9) {
                Gvar.var_3016 = Gvar.var_347 + 1;
                Gvar.var_3017 = Gvar.var_348 - 1;
            }
            if (Gvar.var_80[Gvar.var_3016][Gvar.var_3017] > 0) {
                Gvar.var_2935 = Gvar.var_80[Gvar.var_3016][Gvar.var_3017];
                Gvar.var_81[Gvar.var_2935][4] = 1;
            }
        }
        if (Gvar.var_2927 == 1) {
            Gvar.var_2927 = 0;
            Gvar.var_1194 = 1;
        }
        // No = 109 マジシャンズレッドのDISCを攻撃装備している時
        if (Gvar.equip_disc[109] == 1 && Gvar.var_211 == Gvar.var_352 && Gvar.var_71[Gvar.var_347][Gvar.var_348] != 0 && Gvar.var_2939 == 0) {
            Gvar.var_3018 = 0;
            Gvar.var_3019 = Gvar.var_66;
            Gvar.var_3020 = Gvar.var_67;
            for (let cnt2 = 0; cnt2 < 4; ++cnt2) {
                if (Gvar.var_199 == 4) {
                    Gvar.var_3019 = Gvar.var_3019 - 1;
                    Gvar.var_3020 = Gvar.var_3020;
                }
                if (Gvar.var_199 == 6) {
                    Gvar.var_3019 = Gvar.var_3019 + 1;
                    Gvar.var_3020 = Gvar.var_3020;
                }
                if (Gvar.var_199 == 8) {
                    Gvar.var_3019 = Gvar.var_3019;
                    Gvar.var_3020 = Gvar.var_3020 - 1;
                }
                if (Gvar.var_199 == 2) {
                    Gvar.var_3019 = Gvar.var_3019;
                    Gvar.var_3020 = Gvar.var_3020 + 1;
                }
                if (Gvar.var_199 == 1) {
                    Gvar.var_3019 = Gvar.var_3019 - 1;
                    Gvar.var_3020 = Gvar.var_3020 + 1;
                }
                if (Gvar.var_199 == 3) {
                    Gvar.var_3019 = Gvar.var_3019 + 1;
                    Gvar.var_3020 = Gvar.var_3020 + 1;
                }
                if (Gvar.var_199 == 7) {
                    Gvar.var_3019 = Gvar.var_3019 - 1;
                    Gvar.var_3020 = Gvar.var_3020 - 1;
                }
                if (Gvar.var_199 == 9) {
                    Gvar.var_3019 = Gvar.var_3019 + 1;
                    Gvar.var_3020 = Gvar.var_3020 - 1;
                }
                if (Gvar.var_3019 <= 5 || Gvar.var_3019 > Gvar.var_31 || Gvar.var_3020 <= 5 || Gvar.var_3020 > Gvar.var_32) {
                    break;
                }
                if (Gvar.var_71[Gvar.var_3019][Gvar.var_3020] == 0) {
                    break;
                }
                if (Gvar.var_82[Gvar.var_3019][Gvar.var_3020] != 0) {
                    Gvar.var_3021 = Gvar.var_82[Gvar.var_3019][Gvar.var_3020];
                    if (Gvar.var_83[Gvar.var_3021].Var0 != 50 && Gvar.var_83[Gvar.var_3021].Var31 != 4 && Gvar.var_83[Gvar.var_3021].Var31 != 5) {
                        Gvar.var_3018 = 1;
                    }
                }
            }
            if (Gvar.var_3018 == 1) {
                Gvar.var_1267 = 1;
                await Func.func647(); // 射撃攻撃動作処理
                return;
            }
        }
        if (Gvar.var_3022 == 0) { // No = 118 ダイバーダウンのDISCを攻撃装備して遠隔攻撃していない時
            if (Gvar.var_83[Gvar.var_314].Var0 != 3) {
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    Gvar.var_2657 = Gvar.var_83[Gvar.var_314].Var5;
                }
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    Gvar.var_83[Gvar.var_314].Var5 = 1;
                    Gvar.var_83[Gvar.var_314].Var7 = 1;
                }
                await Func.func337(); // メッセージ表示処理(自動)
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    Gvar.var_83[Gvar.var_314].Var5 = 2;
                }
                await Func.func337(); // メッセージ表示処理(自動)
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    Gvar.var_83[Gvar.var_314].Var5 = 3;
                }
                await Func.func337(); // メッセージ表示処理(自動)
                if (Gvar.var_2985 == 0) {
                    await Music.func089(); // 各装備discごとの攻撃音設定
                }
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    Gvar.var_83[Gvar.var_314].Var5 = 6;
                }
                await Func.func337(); // メッセージ表示処理(自動)
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    Gvar.var_83[Gvar.var_314].Var5 = 9;
                }
                await Func.func337(); // メッセージ表示処理(自動)
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    Gvar.var_83[Gvar.var_314].Var5 = 8;
                }
                await Func.func337(); // メッセージ表示処理(自動)
                if (Gvar.var_2939 == 1) {
                    await Music.func090();
                }
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    Gvar.var_83[Gvar.var_314].Var5 = 7;
                }
                await Func.func337(); // メッセージ表示処理(自動)
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    Gvar.var_83[Gvar.var_314].Var5 = 4;
                }
                await Func.func337(); // メッセージ表示処理(自動)
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    Gvar.var_83[Gvar.var_314].Var5 = Gvar.var_2657;
                    Gvar.var_83[Gvar.var_314].Var7 = 0;
                }
            }
            // Ver0.1402にて追加。
            if (Gvar.var_83[Gvar.var_314].Var0 == 3) {
                if (Gvar.var_201 != 14 && Gvar.var_83[Gvar.var_314].Var10 == Gvar.var_201) { // 幻惑の迷宮(var_201 = 14)でないかつ部屋にいる時のみ発動
                    if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                        Gvar.var_2657 = Gvar.var_83[Gvar.var_314].Var5;
                    }
                    if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                        Gvar.var_83[Gvar.var_314].Var5 = 1;
                        Gvar.var_83[Gvar.var_314].Var7 = 1;
                    }
                    await Func.func337(); // メッセージ表示処理(自動)
                    if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                        Gvar.var_83[Gvar.var_314].Var5 = 2;
                    }
                    await Func.func337(); // メッセージ表示処理(自動)
                    if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                        Gvar.var_83[Gvar.var_314].Var5 = 3;
                    }
                    await Func.func337(); // メッセージ表示処理(自動)
                    if (Gvar.var_2985 == 0) {
                        await Music.func089(); // 各装備discごとの攻撃音設定
                    }
                    if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                        Gvar.var_83[Gvar.var_314].Var5 = 6;
                    }
                    await Func.func337(); // メッセージ表示処理(自動)
                    if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                        Gvar.var_83[Gvar.var_314].Var5 = 9;
                    }
                    await Func.func337(); // メッセージ表示処理(自動)
                    if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                        Gvar.var_83[Gvar.var_314].Var5 = 8;
                    }
                    await Func.func337(); // メッセージ表示処理(自動)
                    if (Gvar.var_2939 == 1) {
                        await Music.func090();
                    }
                    if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                        Gvar.var_83[Gvar.var_314].Var5 = 7;
                    }
                    await Func.func337(); // メッセージ表示処理(自動)
                    if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                        Gvar.var_83[Gvar.var_314].Var5 = 4;
                    }
                    await Func.func337(); // メッセージ表示処理(自動)
                    if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                        Gvar.var_83[Gvar.var_314].Var5 = Gvar.var_2657;
                        Gvar.var_83[Gvar.var_314].Var7 = 0;
                    }
                    // 下記のようにすることで、部屋内でヒラリ回避をした後に瞬間移動をする。
                    await Func.func337(); // メッセージ表示処理(自動)
                    if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                        await Enemy.enemy003(); // No = 3 敵タワーオブグレーの特殊能力。瞬間移動。
                        // ヒラリ回避→瞬間移動をした後に攻撃をさせない処理
                        //await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                    }
                    // 下記のようにすることで、部屋内でヒラリ回避をした後に瞬間移動をする。
                    await Func.func337(); // メッセージ表示処理(自動)
                    if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                        // ヒラリ回避→瞬間移動をした後に攻撃をさせない処理
                        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                    }
                }
                else { // 通路にいる場合の動作処理
                    if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                        Gvar.var_2657 = Gvar.var_83[Gvar.var_314].Var5;
                    }
                    if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                        Gvar.var_83[Gvar.var_314].Var5 = 1;
                        Gvar.var_83[Gvar.var_314].Var7 = 1;
                    }
                    await Func.func337(); // メッセージ表示処理(自動)
                    if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                        Gvar.var_83[Gvar.var_314].Var5 = 2;
                    }
                    await Func.func337(); // メッセージ表示処理(自動)
                    if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                        Gvar.var_83[Gvar.var_314].Var5 = 3;
                    }
                    await Func.func337(); // メッセージ表示処理(自動)
                    if (Gvar.var_2985 == 0) {
                        await Music.func089(); // 各装備discごとの攻撃音設定
                    }
                    if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                        Gvar.var_83[Gvar.var_314].Var5 = 6;
                    }
                    await Func.func337(); // メッセージ表示処理(自動)
                    if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                        Gvar.var_83[Gvar.var_314].Var5 = 9;
                    }
                    await Func.func337(); // メッセージ表示処理(自動)
                    if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                        Gvar.var_83[Gvar.var_314].Var5 = 8;
                    }
                    await Func.func337(); // メッセージ表示処理(自動)
                    if (Gvar.var_2939 == 1) {
                        await Music.func090();
                    }
                    if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                        Gvar.var_83[Gvar.var_314].Var5 = 7;
                    }
                    await Func.func337(); // メッセージ表示処理(自動)
                    if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                        Gvar.var_83[Gvar.var_314].Var5 = 4;
                    }
                    await Func.func337(); // メッセージ表示処理(自動)
                    if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                        Gvar.var_83[Gvar.var_314].Var5 = Gvar.var_2657;
                        Gvar.var_83[Gvar.var_314].Var7 = 0;
                    }
                    // 下記を設定することで、ヒラリ回避を実行した時のみターン消費させられる。
                    await Func.func337(); // メッセージ表示処理(自動)
                    if (Gvar.var_2938 == 1) {
                        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
                    }
                }
            }
            await Func.func337(); // メッセージ表示処理(自動)
        }
        // No = 105 チリペッパーを攻撃装備している場合
        if (Gvar.equip_disc[105] == 1 && Gvar.var_1030 >= 2 && Gvar.var_2939 == 1) {
            for (let cnt2 = 0; cnt2 < 8; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
            }
    
            Adap.DSPLAY(227);
            await Func.AutoDraw(2);
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1265 = 1;
            for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1265++;
            }
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_1265 = 0;
            await Func.setMessage1("おれは・・・", "反省すると強いぜ・・・", 7, false, false, true);
            await Func.AutoDraw(20);
        }
        Gvar.var_3022 = 0;
        Gvar.var_2939 = 0;
        Gvar.var_2932 = 0;
        Gvar.var_2938 = 0;
        Gvar.var_217 = 1;
        Gvar.var_1194 = 0;
        // No = 110 不明discを攻撃装備している場合
        if (Gvar.kougeki_disc_id  == 110) {
            Gvar.kougeki_disc_id  = 108; // No = 108 スティッキーフィンガーズのDISCを攻撃装備している場合
            Gvar.var_750 = 0;
        }
        // No = 113 クラッシュのDISCを装備している場合
        if (Gvar.kougeki_disc_id  == 113) {
            if (Gvar.var_71[Gvar.var_347][Gvar.var_348] == 13) {
                await Func.func652(); // No = 113 クラッシュのDISCを攻撃装備している時の水属性媒体から遠隔攻撃処理
            }
            if (Gvar.var_77[Gvar.var_347][Gvar.var_348] != 0 && Gvar.var_82[Gvar.var_347][Gvar.var_348] == 0) {
                Gvar.var_3023 = Gvar.var_77[Gvar.var_347][Gvar.var_348];
                if (Gvar.var_78[Gvar.var_3023].Var0 == 632) { // No = 632 キリマンジャロの雪解け水が床アイテムとしてある場合
                    await Func.func652(); // No = 113 クラッシュのDISCを攻撃装備している時の水属性媒体から遠隔攻撃処理
                }
            }
        }
        // No = 101 シルバーチャリオッツのDISCを攻撃装備している場合
        if (Gvar.equip_disc[101] == 1 && Gvar.var_2925 == 0 && Gvar.var_83[Gvar.var_314].Var0 > 0 && Gvar.var_2924 == 0 && Gvar.var_2965 == 0 && Gvar.var_128 == 0 && Gvar.var_178 == 0) {
            Gvar.var_2966 = Gvar.var_83[Gvar.var_314].Var1;
            Gvar.var_2967 = Gvar.var_83[Gvar.var_314].Var2;
            if (Gvar.var_82[Gvar.var_2966][Gvar.var_2967] != 0) {
                Gvar.var_2925 = 1;
                Gvar.var_243 = 1;
                await Func.func636(); // ディアボロが攻撃or話しかけた時の動作処理
                return;
            }
        }
        // No = 135 「達人二刀流」が発動している場合 (「シルバーチャリオッツ」 & 「アヌビス神」を装備)
        if (Gvar.sympathy_id == 135 && Gvar.var_341 == 1 && Gvar.var_83[Gvar.var_314].Var0 > 0 && Gvar.var_2924 == 0 && Gvar.var_2965 == 0 && Gvar.var_128 == 0 && Gvar.var_178 == 0) {
            Gvar.var_2966 = Gvar.var_83[Gvar.var_314].Var1;
            Gvar.var_2967 = Gvar.var_83[Gvar.var_314].Var2;
            if (Gvar.var_82[Gvar.var_2966][Gvar.var_2967] != 0) {
                if (Gvar.kougeki_disc_id  == 101) { // No = 101 シルバーチャリオッツのDISCを攻撃装備している場合
                    Gvar.var_341 = 2;
                    Gvar.var_243 = 1;
                    Gvar.kougeki_disc_id  = 122; // No = 122 アヌビス神のDISCを攻撃装備している場合
                    await Func.func636(); // ディアボロが攻撃or話しかけた時の動作処理
                    return;
                }
                if (Gvar.kougeki_disc_id  == 122) { // No = 122 アヌビス神のDISCを攻撃装備している場合
                    Gvar.var_341 = 2;
                    Gvar.var_243 = 1;
                    Gvar.kougeki_disc_id  = 101; // No = 101 シルバーチャリオッツのDISCを攻撃装備している場合
                    await Func.func636(); // ディアボロが攻撃or話しかけた時の動作処理
                    return;
                }
            }
        }
        // No = 101 シルバーチャリオッツのDISCを攻撃装備している場合
        if (Gvar.kougeki_disc_id  == 122 || Gvar.kougeki_disc_id  == 101) {
            Gvar.kougeki_disc_id  = Gvar.var_2923;
        }
        // No = 101 シルバーチャリオッツのDISCを攻撃装備している場合
        if (Gvar.equip_disc[120] == 1 && Gvar.var_2926 == 1 && Gvar.var_128 == 0 && Gvar.var_178 == 0) {
            if (Gvar.kougeki_disc_id  != 100 && Gvar.kougeki_disc_id  != 398) {
                Gvar.var_2926 = 0;
                await Func.func641();
                if (Gvar.var_2968 == 1) {
                    Gvar.var_2968 = 0;
                    Gvar.var_243 = 1;
                    await Func.func636(); // ディアボロが攻撃or話しかけた時の動作処理
                    return;
                }
            }
            // No = 101 シルバーチャリオッツのDISCを攻撃装備している場合
            if (Gvar.kougeki_disc_id  == 100 || Gvar.kougeki_disc_id  == 398) {
                Gvar.var_2926 = 0;
                await Func.func642();
                if (Gvar.var_2968 == 1) {
                    Gvar.var_2968 = 0;
                    Gvar.var_243 = 1;
                    await Func.func636(); // ディアボロが攻撃or話しかけた時の動作処理
                    return;
                }
            }
        }
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {func651}
