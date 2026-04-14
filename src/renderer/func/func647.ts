/**
 * func647 — func647 射撃攻撃動作処理
 *
 * (org原典: newDTW_func6)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'
import * as Stand from '../stand/index'

async function func647(this: any) {
        Adap.dbgprt(647);
        if (Gvar.var_251 == 1 && Gvar.shageki_disc_id == 0) {
            await Func.setMessage("射撃DISCを装備していないぞ", "", 7, false, false, false);
            await Func.AutoDraw(3);
            Gvar.var_251 = 0;
            await Func.func009(); // ディアボロ側ターン処理(ループ処理)
            return;
        }
        if (Gvar.var_171 == 1) {
            await Func.func424();
            if (Gvar.var_1886 >= 1) {
                await Func.func425();
                return;
            }
        }
        Gvar.var_251 = 0;
        Gvar.var_340 = Gvar.var_233[Gvar.var_225].Var0;
        if (Gvar.var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
            Gvar.var_340 = Gvar.var_486[Gvar.var_682][Gvar.var_225][0];
        }
        if (Gvar.var_1223 == 1) {
            Gvar.var_340 = 699;
        }
        if (Gvar.var_1267 == 1) {
            Gvar.var_340 = 698;
        }
        if (Gvar.var_2342 == 1) {
            Gvar.var_340 = 490;
            Gvar.var_2342 = 0;
        }
        if (Gvar.var_2106 == 2) {
            Gvar.var_340 = 487;
            Gvar.var_2106 = 0;
            if (Gvar.nouryoku_disc_id == 112 || Gvar.nouryoku_disc_id == 394) {
                Gvar.var_340 = 488;
                Gvar.var_2329 = 1;
            }
        }
        if (Gvar.var_2106 == 1 && Gvar.var_2329 == 0) {
            Gvar.var_340 = 489;
            Gvar.var_2106 = 0;
            if (Gvar.nouryoku_disc_id == 112 || Gvar.nouryoku_disc_id == 394) {
                Gvar.var_340 = 488;
                Gvar.var_2329 = 1;
            }
        }
        if (Gvar.var_2106 == 1 && Gvar.var_2329 == 1) {
            Gvar.var_2106 = 0;
            Gvar.var_340 = 488;
            Gvar.var_2329 = 1;
        }
        Gvar.var_2988 = 0;
        Gvar.var_455 = Gvar.var_66;
        Gvar.var_456 = Gvar.var_67;
        Gvar.var_1266 = 2;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_1266 = 4;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_1266 = 6;
        // await Func.func337(); // メッセージ表示処理(自動)
        // await Func.func337(); // メッセージ表示処理(自動)
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_1197 = 1;
        Gvar.var_1266 = 0;
        if (Gvar.var_1267 == 0 && Gvar.var_340 != 403) {
            Gvar.var_1220 = 1;
        }
        if (Gvar.var_340 == 403) {
            Gvar.var_1250 = 1;
        }
        await Music.func097(); // 射撃攻撃時の効果音設定
        if (Gvar.var_340 != 403) {
            if (Gvar.var_199 == 4) {
                Gvar.var_1416 = 40;
            }
            if (Gvar.var_199 == 6) {
                Gvar.var_1416 = 120;
            }
            if (Gvar.var_199 == 8) {
                Gvar.var_1416 = 80;
            }
            if (Gvar.var_199 == 2) {
                Gvar.var_1416 = 0;
            }
            if (Gvar.var_199 == 1) {
                Gvar.var_1416 = 160;
            }
            if (Gvar.var_199 == 3) {
                Gvar.var_1416 = 240;
            }
            if (Gvar.var_199 == 7) {
                Gvar.var_1416 = 200;
            }
            if (Gvar.var_199 == 9) {
                Gvar.var_1416 = 280;
            }
            Gvar.var_1195 = 1;
            Gvar.var_2989 = Gvar.var_199;
            Gvar.var_1189 = 1;
            Gvar.var_2990 = 20;
            if (Gvar.var_340 == 402) {
                Gvar.var_2990 = 20;
            }
            if (Gvar.var_340 == 413) {
                Gvar.var_2990 = 10;
            }
            if (Gvar.var_1267 == 1) {
                Gvar.var_2990 = 4;
            }
            Gvar.var_2991 = 0;
            Gvar.var_2992 = 0;
            for (let cnt2 = 0; cnt2 < Gvar.var_2990; ++cnt2) {
                Gvar.var_1894 = Gvar.var_455;
                Gvar.var_1895 = Gvar.var_456;
                if (Gvar.var_2989 == 4) {
                    Gvar.var_455 = Gvar.var_455 - 1;
                }
                if (Gvar.var_2989 == 6) {
                    Gvar.var_455 = Gvar.var_455 + 1;
                }
                if (Gvar.var_2989 == 8) {
                    Gvar.var_456 = Gvar.var_456 - 1;
                }
                if (Gvar.var_2989 == 2) {
                    Gvar.var_456 = Gvar.var_456 + 1;
                }
                if (Gvar.var_2989 == 1) {
                    Gvar.var_455 = Gvar.var_455 - 1;
                    Gvar.var_456 = Gvar.var_456 + 1;
                }
                if (Gvar.var_2989 == 3) {
                    Gvar.var_455 = Gvar.var_455 + 1;
                    Gvar.var_456 = Gvar.var_456 + 1;
                }
                if (Gvar.var_2989 == 7) {
                    Gvar.var_455 = Gvar.var_455 - 1;
                    Gvar.var_456 = Gvar.var_456 - 1;
                }
                if (Gvar.var_2989 == 9) {
                    Gvar.var_455 = Gvar.var_455 + 1;
                    Gvar.var_456 = Gvar.var_456 - 1;
                }
                if (Gvar.var_455 < 5 || Gvar.var_455 > Gvar.var_33 || Gvar.var_456 < 5 || Gvar.var_456 > Gvar.var_34) {
                    Gvar.var_455 = Gvar.var_1894;
                    Gvar.var_456 = Gvar.var_1895;
                    break;
                }
                if (Gvar.var_71[Gvar.var_455][Gvar.var_456] == 0) {
                    if (Gvar.var_340 == 402) {
                        Gvar.var_2988 = 0;
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
                        Gvar.var_455 = Gvar.var_1894;
                        Gvar.var_456 = Gvar.var_1895;
                        if (Gvar.var_2989 == 4) {
                            if (Gvar.var_71[Gvar.var_2295][Gvar.var_456] != 0) {
                                Gvar.var_2993 = 6;
                            }
                            if (Gvar.var_71[Gvar.var_455][Gvar.var_2296] != 0) {
                                Gvar.var_2993 = 2;
                            }
                            if (Gvar.var_71[Gvar.var_455][Gvar.var_2297] != 0) {
                                Gvar.var_2993 = 8;
                            }
                        }
                        if (Gvar.var_2989 == 6) {
                            if (Gvar.var_71[Gvar.var_2294][Gvar.var_456] != 0) {
                                Gvar.var_2993 = 4;
                            }
                            if (Gvar.var_71[Gvar.var_455][Gvar.var_2297] != 0) {
                                Gvar.var_2993 = 8;
                            }
                            if (Gvar.var_71[Gvar.var_455][Gvar.var_2296] != 0) {
                                Gvar.var_2993 = 2;
                            }
                        }
                        if (Gvar.var_2989 == 8 || Gvar.var_2989 == 9 || Gvar.var_2989 == 7) {
                            if (Gvar.var_71[Gvar.var_455][Gvar.var_2296] != 0) {
                                Gvar.var_2993 = 2;
                            }
                            if (Gvar.var_71[Gvar.var_2294][Gvar.var_456] != 0) {
                                Gvar.var_2993 = 4;
                            }
                            if (Gvar.var_71[Gvar.var_2295][Gvar.var_456] != 0) {
                                Gvar.var_2993 = 6;
                            }
                        }
                        if (Gvar.var_2989 == 2 || Gvar.var_2989 == 1 || Gvar.var_2989 == 3) {
                            if (Gvar.var_71[Gvar.var_455][Gvar.var_2297] != 0) {
                                Gvar.var_2993 = 8;
                            }
                            if (Gvar.var_71[Gvar.var_2295][Gvar.var_456] != 0) {
                                Gvar.var_2993 = 6;
                            }
                            if (Gvar.var_71[Gvar.var_2294][Gvar.var_456] != 0) {
                                Gvar.var_2993 = 4;
                            }
                        }
                        if (Gvar.var_2993 == 8) {
                            Gvar.var_2989 = 8;
                            Gvar.var_1416 = 80;
                        }
                        if (Gvar.var_2993 == 2) {
                            Gvar.var_2989 = 2;
                            Gvar.var_1416 = 0;
                        }
                        if (Gvar.var_2993 == 6) {
                            Gvar.var_2989 = 6;
                            Gvar.var_1416 = 120;
                        }
                        if (Gvar.var_2993 == 4) {
                            Gvar.var_2989 = 4;
                            Gvar.var_1416 = 40;
                        }
                    }
                    Gvar.var_2994 = 0;
                    if (Gvar.var_340 == 413) {
                        await Func.func667();
                        break;
                    }
                    if (Gvar.var_340 == 488) {
                        await Func.func660();
                        break;
                    }
                    if (Gvar.var_2994 == 0 && Gvar.var_340 != 402) {
                        if (Gvar.var_340 == 400 || Gvar.var_340 == 698 || Gvar.var_340 == 401 || Gvar.var_340 == 407) {
                            Gvar.var_747 = 1;
                            Gvar.var_750 = 1;
                            Gvar.var_748 = Gvar.var_455 - Gvar.var_66 + 4;
                            Gvar.var_749 = Gvar.var_456 - Gvar.var_67 + 4;
                        }
                        Gvar.var_1195 = 0;
                        Gvar.var_1279 = 1;
                        for (let cnt5 = 0; cnt5 < 8; ++cnt5) {
                            await Func.func337(); // メッセージ表示処理(自動)
                        }
                        if (Gvar.var_340 == 698) {
                            for (let cnt6 = 0; cnt6 < 3; ++cnt6) {
                                await Func.func337(); // メッセージ表示処理(自動)
                            }
                        }
                        Gvar.var_1279 = 0;
                        Gvar.var_750 = 0;
                        Gvar.var_2991 = 1;
                        break;
                    }
                    Gvar.var_2994 = 0;
                }
                if (Gvar.var_82[Gvar.var_455][Gvar.var_456] > 0) {
                    Gvar.var_1899 = Gvar.var_82[Gvar.var_455][Gvar.var_456];
                    if (Gvar.var_83[Gvar.var_1899].Var0 != 50) {
                        if (Gvar.var_340 == 413) {
                            await Func.func667();
                            break;
                        }
                        if (Gvar.var_340 != 411) {
                            Gvar.var_1195 = 0;
                        }
                        await Func.func660();
                        Gvar.var_2991 = 1;
                        if (Gvar.var_340 != 411 || Gvar.var_2995 == 1) {
                            break;
                        }
                        if (Gvar.var_340 == 411) {
                            Gvar.var_2992++;
                        }
                    }
                }
                if (Gvar.var_65[Gvar.var_455][Gvar.var_456] == 1) {
                    if (Gvar.var_340 == 402 || Gvar.var_340 == 490) {
                        Gvar.var_1195 = 0;
                        await Func.func544();
                        break;
                    }
                }
                if (Gvar.var_340 == 490) {
                    await Func.func080(); // 各キー入力確認
                    if (Gvar.var_254 == 1) {
                        Gvar.var_2989 = 4;
                        Gvar.var_1416 = 40;
                    }
                    if (Gvar.var_257 == 1) {
                        Gvar.var_2989 = 6;
                        Gvar.var_1416 = 120;
                    }
                    if (Gvar.var_255 == 1) { // var_255:入力判定[↑]
                        Gvar.var_2989 = 8;
                        Gvar.var_1416 = 80;
                    }
                    if (Gvar.var_259 == 1) { // var_259:入力判定[↓]
                        Gvar.var_2989 = 2;
                        Gvar.var_1416 = 0;
                    }
                    if (Gvar.var_253 == 1) {
                        Gvar.var_2989 = 7;
                        Gvar.var_1416 = 200;
                    }
                    if (Gvar.var_254 == 1 && Gvar.var_255 == 1) { // var_255:入力判定[↑]
                        Gvar.var_2989 = 7;
                        Gvar.var_1416 = 200;
                    }
                    if (Gvar.var_256 == 1) {
                        Gvar.var_2989 = 9;
                        Gvar.var_1416 = 280;
                    }
                    if (Gvar.var_257 == 1 && Gvar.var_255 == 1) { // var_255:入力判定[↑]
                        Gvar.var_2989 = 9;
                        Gvar.var_1416 = 280;
                    }
                    if (Gvar.var_258 == 1) {
                        Gvar.var_2989 = 1;
                        Gvar.var_1416 = 160;
                    }
                    if (Gvar.var_254 == 1 && Gvar.var_259 == 1) { // var_259:入力判定[↓]
                        Gvar.var_2989 = 1;
                        Gvar.var_1416 = 160;
                    }
                    if (Gvar.var_260 == 1) {
                        Gvar.var_2989 = 3;
                        Gvar.var_1416 = 240;
                    }
                    if (Gvar.var_257 == 1 && Gvar.var_259 == 1) { // var_259:入力判定[↓]
                        Gvar.var_2989 = 3;
                        Gvar.var_1416 = 240;
                    }
                    Gvar.var_2988 = 0;
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_2988 = 1;
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_2988 = 2;
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_2988 = 3;
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_2988 = 4;
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_2988 = 5;
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_2988 = 6;
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_2988 = 7;
                }
                if (Gvar.var_340 != 490) {
                    Gvar.var_1896 = 1;
                    await Func.func337(); // メッセージ表示処理(自動)
                    Gvar.var_1896 = 0;
                }
                await Func.func337(); // メッセージ表示処理(自動)
            }
            if (Gvar.var_340 == 413 && Gvar.var_1195 != 0) {
                await Func.func667();
            }
            Gvar.var_1195 = 0;
        }
        Gvar.var_2995 = 0;
        if (Gvar.var_340 == 698 && Gvar.var_2991 == 0) {
            Gvar.var_747 = 1;
            Gvar.var_750 = 1;
            Gvar.var_748 = Gvar.var_455 - Gvar.var_66 + 4;
            Gvar.var_749 = Gvar.var_456 - Gvar.var_67 + 4;
            Gvar.var_1195 = 0;
            Gvar.var_1279 = 1;
            for (let cnt2 = 0; cnt2 < 11; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
            }
            Gvar.var_1279 = 0;
            Gvar.var_750 = 0;
        }
        if (Gvar.var_340 == 403) {
            await Stand.func650(); // 射撃セックスピストルズでの攻撃動作処理
            if (Gvar.var_2994 == 1) {
                Gvar.var_2994 = 0;
                Gvar.var_1899 = Gvar.var_82[Gvar.var_455][Gvar.var_456];
                if (Gvar.var_83[Gvar.var_1899].Var0 != 50 && Gvar.var_83[Gvar.var_1899].Var31 != 4 && Gvar.var_83[Gvar.var_1899].Var31 != 5) {
                    await Func.func660();
                }
            }
        }
        await Func.AutoDraw(2);
        if (Gvar.var_234 == 0 && Gvar.var_1223 == 0 && Gvar.var_1267 == 0 && Gvar.var_340 != 487 && Gvar.var_340 != 488 && Gvar.var_340 != 489 && Gvar.var_340 != 490) {
            await Func.func421();
        }
        if (Gvar.var_234 == 1 && Gvar.var_1223 == 0 && Gvar.var_1267 == 0 && Gvar.var_340 != 487 && Gvar.var_340 != 488 && Gvar.var_340 != 489 && Gvar.var_340 != 490) {
            Gvar.var_234 = 0;
            await Func.func422();
        }
        Gvar.var_217 = 1;
        Gvar.var_1953 = 0;
        Gvar.var_1267 = 0;
        Gvar.var_1223 = 0;
        Gvar.var_1250 = 0;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {func647}
