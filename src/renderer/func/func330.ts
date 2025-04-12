import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'

 // ディアボロの周りの暗視エフェクト処理
 // バッファID 36だとウィンドウサイズを倍にした際に、バッファ0へ結合した箇所のスケールがおかしくなるのでバッファID 37で処理するように変更
async function func330(this: any) {
        Adap.dbgprt(330);

        if (Gvar.var_529 == 1) {
            Adap.color(0, 0, 0);
            if (Gvar.var_1164 == 0) {
                Adap.pos(0, 0);
                Adap.gmode(4, null, null, 10);
            }
            if (Gvar.var_1164 == 1) {
                Adap.pos(0, 0);
                Adap.gmode(4, null, null, 30);
            }
            if (Gvar.var_1164 == 2) {
                Adap.pos(0, 0);
                Adap.gmode(4, null, null, 60);
            }
            if (Gvar.var_1164 == 3) {
                Adap.pos(0, 0);
                Adap.gmode(4, null, null, 90);
            }
            if (Gvar.var_1164 == 4) {
                Adap.pos(0, 0);
                Adap.gmode(4, null, null, 120);
            }
            if (Gvar.var_1164 == 5) {
                Adap.pos(0, 0);
                Adap.gmode(4, null, null, 60);
            }
            Adap.gcopy(19, 0, 0, 340, 340);
        }
        if (Gvar.var_529 == 2) {
            Adap.color(0, 0, 0);
            if (Gvar.var_1164 == 0) {
                Adap.pos(0, 0);
        
                Adap.gmode(4, null, null, 120);
            }
            if (Gvar.var_1164 == 1) {
                Adap.pos(0, 0);

                Adap.gmode(4, null, null, 0);
            }
            if (Gvar.var_1164 == 2) {
                Adap.pos(0, 0);
        
                Adap.gmode(4, null, null, 120);
            }
            if (Gvar.var_1164 == 3) {
                Adap.pos(0, 0);

                Adap.gmode(4, null, null, 0);
            }
            if (Gvar.var_1164 == 4) {
                Adap.pos(0, 0);
        
                Adap.gmode(4, null, null, 120);
            }
            if (Gvar.var_1164 == 5) {
                Adap.pos(0, 0);

                Adap.gmode(4, null, null, 0);
            }
            Adap.gcopy(19, 0, 0, 340, 340);
        }
        if (Gvar.var_127 == 1 || Gvar.var_132 >= 1) {
            return;
        }
        if (Gvar.var_103 == 1 || Gvar.var_262 == 1) { // Gvar.var_262 == 1 なので、Gvar.dungeon_number = 0 であれば
            Adap.gsel(0);
            if (Gvar.time_paused == 1 || Gvar.time_paused_count >= 1) { // 時止め(時消し飛ばし)状態の場合
                Adap.gsel(24);
            }
            return;
        }
                
        // ↓↓↓通路での暗視エフェクト機能↓↓↓
        Adap.gsel(37);

        await Func.func324(); // マップ背景画像配置計算処理
        
        // Gvar.var_201 == 14 幻惑の迷宮、0 通常ダンジョン、
        if (Gvar.var_201 == 14 || Gvar.var_201 == 0 || Gvar.var_201 == 13) {
            Adap.color(0, 0, 0);
            Adap.gmode(4, null, null, 150);
            Gvar.var_1166 = 0;
            Gvar.var_1167 = 0;
            for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
                Gvar.var_1168 = 0;
                for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                    if (Gvar.var_1166 != 30 && Gvar.var_1166 != 31 && Gvar.var_1166 != 32 && Gvar.var_1166 != 39 && Gvar.var_1166 != 40 && Gvar.var_1166 != 41 && Gvar.var_1166 != 48 && Gvar.var_1166 != 49 && Gvar.var_1166 != 50) {
                        Adap.pos(Gvar.var_1168, Gvar.var_1167);
                        // Adap.buffer(8)は"img1.gif"。X座標760、Y座標880から切り取り長さ X方向40、Y方向40
                        // 絵:黒い四角いマス
                        // ここで暗視エフェクト用にオフスクリーンキャンバス（バッファID 8）から黒いマスをコピー
                        Adap.gcopy(8, 760, 880, 40, 40);
                    }
                    Gvar.var_1166++;
                    Gvar.var_1168 = Gvar.var_1168 + 40;
                }
                Gvar.var_1167 = Gvar.var_1167 + 40;
            }
            Adap.pos(120, 120);
            Adap.gcopy(8, 520, 840, 60, 60); // Adap.buffer(8)は"img1.gif"。通路でディアボロの周りにある暗視エフェクトの黒い円
            Adap.pos(180, 120);
            Adap.gcopy(8, 580, 840, 60, 60); // Adap.buffer(8)は"img1.gif"。通路でディアボロの周りにある暗視エフェクトの黒い円
            Adap.pos(120, 180);
            Adap.gcopy(8, 520, 900, 60, 60); // Adap.buffer(8)は"img1.gif"。通路でディアボロの周りにある暗視エフェクトの黒い円
            Adap.pos(180, 180);
            Adap.gcopy(8, 580, 900, 60, 60); // Adap.buffer(8)は"img1.gif"。通路でディアボロの周りにある暗視エフェクトの黒い円
            Adap.gmode(2, null, null, null);
            Adap.pos(120, 120);
            Adap.gcopy(8, 520, 120, 60, 60); // Adap.buffer(8)は"img1.gif"。通路でディアボロの周りにある暗視エフェクトの白い円？
            Adap.pos(180, 120);
            Adap.gcopy(8, 580, 120, 60, 60); // Adap.buffer(8)は"img1.gif"。通路でディアボロの周りにある暗視エフェクトの白い円？
            Adap.pos(120, 180);
            Adap.gcopy(8, 520, 180, 60, 60); // Adap.buffer(8)は"img1.gif"。通路でディアボロの周りにある暗視エフェクトの白い円？
            Adap.pos(180, 180);
            Adap.gcopy(8, 580, 180, 60, 60); // Adap.buffer(8)は"img1.gif"。通路でディアボロの周りにある暗視エフェクトの白い円？
            Adap.gsel(0);
            if (Gvar.time_paused == 1 || Gvar.time_paused_count >= 1) { // 時止め(時消し飛ばし)状態の場合
                Adap.gsel(24);
            }
            Adap.color(250, 255, 255);
            Adap.gmode(4, null, null, 255);
            Gvar.var_1167 = 0;

            // ↓↓↓ 通路での暗視エフェクト及び暗視エフェクト内の背景描写本体↓↓↓

            for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
                Gvar.var_1168 = 0;
                for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                    Adap.pos(Gvar.var_1168, Gvar.var_1167);
                    Adap.gcopy(37, Gvar.var_1168, Gvar.var_1167, 40, 40);
                    Gvar.var_1168 = Gvar.var_1168 + 40;
                }
                Gvar.var_1167 = Gvar.var_1167 + 40;
            }
            // ↑↑↑ ここまで ↑↑↑
            return;
        }
        // ↑↑↑通路での暗視エフェクト機能↑↑↑
        
        if (Gvar.var_201 >= 1 && Gvar.var_201 <= 12) {
            Gvar.var_449 = Gvar.var_67 - 5;
            Gvar.var_763 = -1;
            if (Gvar.var_449 < 0) {
                Gvar.var_449 = 0;
            }
            for (let cnt2 = 0; cnt2 < 11; ++cnt2) {
                Gvar.var_447 = Gvar.var_66 - 5;
                Gvar.var_764 = -1;
                if (Gvar.var_447 < 0) {
                    Gvar.var_447 = 0;
                }
                for (let cnt3 = 0; cnt3 < 11; ++cnt3) {
                    Gvar.var_1146 = Gvar.var_447 - 1;
                    if (Gvar.var_1146 < 0) {
                        Gvar.var_1146 = 0;
                    }
                    Gvar.var_1147 = Gvar.var_447 + 1;
                    Gvar.var_1149 = Gvar.var_449 + 1;
                    Gvar.var_1148 = Gvar.var_449 - 1;
                    if (Gvar.var_1148 < 0) {
                        Gvar.var_1148 = 0;
                    }
                    if (Gvar.var_409 == 0) {
                        Gvar.var_1169 = 0;
                    }
                    if (Gvar.var_409 == 1) {
                        Gvar.var_1169 = 10;
                    }
                    if (Gvar.var_409 == 2) {
                        Gvar.var_1169 = 20;
                    }
                    if (Gvar.var_409 == 3) {
                        Gvar.var_1169 = 30;
                    }
                    // 部屋に入っている時の部屋の周りの暗視エフェクト (暗視エフェクト内の背景は違う)
                    if (Gvar.var_71[Gvar.var_447][Gvar.var_449] != Gvar.var_201) {
                        Adap.color(0, 0, 0);
                
                        Adap.gmode(4, null, null, 150);
                        Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36);
                        if (Gvar.var_217 == 0) {
                            if (Gvar.var_199 == 4) {
                                Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_1169, Gvar.var_763 * Gvar.var_36);
                            }
                            if (Gvar.var_199 == 6) {
                                Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_1169, Gvar.var_763 * Gvar.var_36);
                            }
                            if (Gvar.var_199 == 8) {
                                Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - Gvar.var_1169);
                            }
                            if (Gvar.var_199 == 2) {
                                Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 + Gvar.var_1169);
                            }
                            if (Gvar.var_199 == 1) {
                                Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_1169, Gvar.var_763 * Gvar.var_36 + Gvar.var_1169);
                            }
                            if (Gvar.var_199 == 3) {
                                Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_1169, Gvar.var_763 * Gvar.var_36 + Gvar.var_1169);
                            }
                            if (Gvar.var_199 == 7) {
                                Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_1169, Gvar.var_763 * Gvar.var_36 - Gvar.var_1169);
                            }
                            if (Gvar.var_199 == 9) {
                                Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_1169, Gvar.var_763 * Gvar.var_36 - Gvar.var_1169);
                            }
                        }
                        Adap.gcopy(8, 760, 880, 40, 40); // Adap.buffer(8)は"img1.gif"。黒い四角
                    }
                    Adap.gmode(2, null, null, null);
                    if (Gvar.var_71[Gvar.var_1146][Gvar.var_449] == 0 || Gvar.var_71[Gvar.var_1146][Gvar.var_449] == 13) {
                        if (Gvar.var_71[Gvar.var_1146][Gvar.var_1148] == Gvar.var_201 && Gvar.var_71[Gvar.var_1146][Gvar.var_1149] == Gvar.var_201) {
                            Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36);
                            if (Gvar.var_217 == 0) {
                                if (Gvar.var_199 == 4) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_1169, Gvar.var_763 * Gvar.var_36);
                                }
                                if (Gvar.var_199 == 6) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_1169, Gvar.var_763 * Gvar.var_36);
                                }
                                if (Gvar.var_199 == 8) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - Gvar.var_1169);
                                }
                                if (Gvar.var_199 == 2) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 + Gvar.var_1169);
                                }
                                if (Gvar.var_199 == 1) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_1169, Gvar.var_763 * Gvar.var_36 + Gvar.var_1169);
                                }
                                if (Gvar.var_199 == 3) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_1169, Gvar.var_763 * Gvar.var_36 + Gvar.var_1169);
                                }
                                if (Gvar.var_199 == 7) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_1169, Gvar.var_763 * Gvar.var_36 - Gvar.var_1169);
                                }
                                if (Gvar.var_199 == 9) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_1169, Gvar.var_763 * Gvar.var_36 - Gvar.var_1169);
                                }
                            }
                            Adap.gcopy(8, 760, 920, 40, 40); // Adap.buffer(8)は"img1.gif"。白い四角
                        }
                    }
                    if (Gvar.var_71[Gvar.var_1147][Gvar.var_449] == 0 || Gvar.var_71[Gvar.var_1147][Gvar.var_449] == 13) {
                        if (Gvar.var_71[Gvar.var_1147][Gvar.var_1148] == Gvar.var_201 && Gvar.var_71[Gvar.var_1147][Gvar.var_1149] == Gvar.var_201) {
                            Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36);
                            if (Gvar.var_217 == 0) {
                                if (Gvar.var_199 == 4) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_1169, Gvar.var_763 * Gvar.var_36);
                                }
                                if (Gvar.var_199 == 6) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_1169, Gvar.var_763 * Gvar.var_36);
                                }
                                if (Gvar.var_199 == 8) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - Gvar.var_1169);
                                }
                                if (Gvar.var_199 == 2) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 + Gvar.var_1169);
                                }
                                if (Gvar.var_199 == 1) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_1169, Gvar.var_763 * Gvar.var_36 + Gvar.var_1169);
                                }
                                if (Gvar.var_199 == 3) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_1169, Gvar.var_763 * Gvar.var_36 + Gvar.var_1169);
                                }
                                if (Gvar.var_199 == 7) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_1169, Gvar.var_763 * Gvar.var_36 - Gvar.var_1169);
                                }
                                if (Gvar.var_199 == 9) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_1169, Gvar.var_763 * Gvar.var_36 - Gvar.var_1169);
                                }
                            }
                            Adap.gcopy(8, 760, 920, 40, 40); // Adap.buffer(8)は"img1.gif"。白い四角
                        }
                    }
                    if (Gvar.var_71[Gvar.var_447][Gvar.var_1148] == 0 || Gvar.var_71[Gvar.var_447][Gvar.var_1148] == 13) {
                        if (Gvar.var_71[Gvar.var_1146][Gvar.var_1148] == Gvar.var_201 && Gvar.var_71[Gvar.var_1147][Gvar.var_1148] == Gvar.var_201) {
                            Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 10);
                            if (Gvar.var_217 == 0) {
                                if (Gvar.var_199 == 4) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_1169, Gvar.var_763 * Gvar.var_36 - 10);
                                }
                                if (Gvar.var_199 == 6) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_1169, Gvar.var_763 * Gvar.var_36 - 10);
                                }
                                if (Gvar.var_199 == 8) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - Gvar.var_1169 - 10);
                                }
                                if (Gvar.var_199 == 2) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 + Gvar.var_1169 - 10);
                                }
                                if (Gvar.var_199 == 1) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_1169, Gvar.var_763 * Gvar.var_36 + Gvar.var_1169 - 10);
                                }
                                if (Gvar.var_199 == 3) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_1169, Gvar.var_763 * Gvar.var_36 + Gvar.var_1169 - 10);
                                }
                                if (Gvar.var_199 == 7) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_1169, Gvar.var_763 * Gvar.var_36 - Gvar.var_1169 - 10);
                                }
                                if (Gvar.var_199 == 9) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_1169, Gvar.var_763 * Gvar.var_36 - Gvar.var_1169 - 10);
                                }
                            }
                            Adap.gcopy(8, 760, 920, 40, 40); // Adap.buffer(8)は"img1.gif"。白い四角
                        }
                    }
                    if (Gvar.var_71[Gvar.var_447][Gvar.var_1149] == 0 || Gvar.var_71[Gvar.var_447][Gvar.var_1149] == 13) {
                        if (Gvar.var_71[Gvar.var_1146][Gvar.var_1149] == Gvar.var_201 && Gvar.var_71[Gvar.var_1147][Gvar.var_1149] == Gvar.var_201) {
                            Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36);
                            if (Gvar.var_217 == 0) {
                                if (Gvar.var_199 == 4) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_1169, Gvar.var_763 * Gvar.var_36);
                                }
                                if (Gvar.var_199 == 6) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_1169, Gvar.var_763 * Gvar.var_36);
                                }
                                if (Gvar.var_199 == 8) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - Gvar.var_1169);
                                }
                                if (Gvar.var_199 == 2) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 + Gvar.var_1169);
                                }
                                if (Gvar.var_199 == 1) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_1169, Gvar.var_763 * Gvar.var_36 + Gvar.var_1169);
                                }
                                if (Gvar.var_199 == 3) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_1169, Gvar.var_763 * Gvar.var_36 + Gvar.var_1169);
                                }
                                if (Gvar.var_199 == 7) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_1169, Gvar.var_763 * Gvar.var_36 - Gvar.var_1169);
                                }
                                if (Gvar.var_199 == 9) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_1169, Gvar.var_763 * Gvar.var_36 - Gvar.var_1169);
                                }
                            }
                            Adap.gcopy(8, 760, 920, 40, 40); // Adap.buffer(8)は"img1.gif"。白い四角
                        }
                    }
                    if (Gvar.var_71[Gvar.var_447][Gvar.var_449] == Gvar.var_201 || Gvar.var_71[Gvar.var_1146][Gvar.var_449] == Gvar.var_201 || Gvar.var_71[Gvar.var_1147][Gvar.var_449] == Gvar.var_201 || Gvar.var_71[Gvar.var_447][Gvar.var_1149] == Gvar.var_201 || Gvar.var_71[Gvar.var_447][Gvar.var_1148] == Gvar.var_201) {
                        if (Gvar.var_71[Gvar.var_447][Gvar.var_1148] == Gvar.var_201) {
                            Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 10);
                            if (Gvar.var_217 == 0) {
                                if (Gvar.var_199 == 4) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_1169, Gvar.var_763 * Gvar.var_36 - 10);
                                }
                                if (Gvar.var_199 == 6) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_1169, Gvar.var_763 * Gvar.var_36 - 10);
                                }
                                if (Gvar.var_199 == 8) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - Gvar.var_1169 - 10);
                                }
                                if (Gvar.var_199 == 2) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 + Gvar.var_1169 - 10);
                                }
                                if (Gvar.var_199 == 1) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_1169, Gvar.var_763 * Gvar.var_36 + Gvar.var_1169 - 10);
                                }
                                if (Gvar.var_199 == 3) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_1169, Gvar.var_763 * Gvar.var_36 + Gvar.var_1169 - 10);
                                }
                                if (Gvar.var_199 == 7) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_1169, Gvar.var_763 * Gvar.var_36 - Gvar.var_1169 - 10);
                                }
                                if (Gvar.var_199 == 9) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_1169, Gvar.var_763 * Gvar.var_36 - Gvar.var_1169 - 10);
                                }
                            }
                        }
                        if (Gvar.var_71[Gvar.var_447][Gvar.var_449] == Gvar.var_201 || Gvar.var_71[Gvar.var_1146][Gvar.var_449] == Gvar.var_201 || Gvar.var_71[Gvar.var_1147][Gvar.var_449] == Gvar.var_201 || Gvar.var_71[Gvar.var_447][Gvar.var_1149] == Gvar.var_201) {
                            Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36);
                            if (Gvar.var_217 == 0) {
                                if (Gvar.var_199 == 4) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_1169, Gvar.var_763 * Gvar.var_36);
                                }
                                if (Gvar.var_199 == 6) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_1169, Gvar.var_763 * Gvar.var_36);
                                }
                                if (Gvar.var_199 == 8) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - Gvar.var_1169);
                                }
                                if (Gvar.var_199 == 2) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 + Gvar.var_1169);
                                }
                                if (Gvar.var_199 == 1) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_1169, Gvar.var_763 * Gvar.var_36 + Gvar.var_1169);
                                }
                                if (Gvar.var_199 == 3) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_1169, Gvar.var_763 * Gvar.var_36 + Gvar.var_1169);
                                }
                                if (Gvar.var_199 == 7) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_1169, Gvar.var_763 * Gvar.var_36 - Gvar.var_1169);
                                }
                                if (Gvar.var_199 == 9) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_1169, Gvar.var_763 * Gvar.var_36 - Gvar.var_1169);
                                }
                            }
                        }
                        Adap.gcopy(8, 760, 920, 40, 40); // Adap.buffer(8)は"img1.gif"。白い四角
                    }
                    // おそらく暗視エフェクトの角のトリム部分
                    if (Gvar.var_71[Gvar.var_447][Gvar.var_449] != Gvar.var_201) {
                        if (Gvar.var_71[Gvar.var_1147][Gvar.var_1149] == Gvar.var_201 && Gvar.var_71[Gvar.var_1147][Gvar.var_449] != Gvar.var_201 && Gvar.var_71[Gvar.var_447][Gvar.var_1149] != Gvar.var_201 && Gvar.var_71[Gvar.var_1146][Gvar.var_1149] != Gvar.var_201 && Gvar.var_71[Gvar.var_1147][Gvar.var_1148] != Gvar.var_201) {
                            Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36);
                            if (Gvar.var_217 == 0) {
                                if (Gvar.var_199 == 4) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_1169, Gvar.var_763 * Gvar.var_36);
                                }
                                if (Gvar.var_199 == 6) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_1169, Gvar.var_763 * Gvar.var_36);
                                }
                                if (Gvar.var_199 == 8) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - Gvar.var_1169);
                                }
                                if (Gvar.var_199 == 2) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 + Gvar.var_1169);
                                }
                                if (Gvar.var_199 == 1) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_1169, Gvar.var_763 * Gvar.var_36 + Gvar.var_1169);
                                }
                                if (Gvar.var_199 == 3) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_1169, Gvar.var_763 * Gvar.var_36 + Gvar.var_1169);
                                }
                                if (Gvar.var_199 == 7) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_1169, Gvar.var_763 * Gvar.var_36 - Gvar.var_1169);
                                }
                                if (Gvar.var_199 == 9) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_1169, Gvar.var_763 * Gvar.var_36 - Gvar.var_1169);
                                }
                            }
                            Adap.gcopy(8, 750, 0, 40, 40); // Adap.buffer(8)は"img1.gif"。白い四分円
                        }
                        // おそらく暗視エフェクトの角のトリム部分
                        if (Gvar.var_71[Gvar.var_1146][Gvar.var_1149] == Gvar.var_201 && Gvar.var_71[Gvar.var_1146][Gvar.var_449] != Gvar.var_201 && Gvar.var_71[Gvar.var_447][Gvar.var_1149] != Gvar.var_201 && Gvar.var_71[Gvar.var_1147][Gvar.var_1149] != Gvar.var_201 && Gvar.var_71[Gvar.var_1146][Gvar.var_1148] != Gvar.var_201) {
                            Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36);
                            if (Gvar.var_217 == 0) {
                                if (Gvar.var_199 == 4) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_1169, Gvar.var_763 * Gvar.var_36);
                                }
                                if (Gvar.var_199 == 6) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_1169, Gvar.var_763 * Gvar.var_36);
                                }
                                if (Gvar.var_199 == 8) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - Gvar.var_1169);
                                }
                                if (Gvar.var_199 == 2) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 + Gvar.var_1169);
                                }
                                if (Gvar.var_199 == 1) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_1169, Gvar.var_763 * Gvar.var_36 + Gvar.var_1169);
                                }
                                if (Gvar.var_199 == 3) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_1169, Gvar.var_763 * Gvar.var_36 + Gvar.var_1169);
                                }
                                if (Gvar.var_199 == 7) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_1169, Gvar.var_763 * Gvar.var_36 - Gvar.var_1169);
                                }
                                if (Gvar.var_199 == 9) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_1169, Gvar.var_763 * Gvar.var_36 - Gvar.var_1169);
                                }
                            }
                            Adap.gcopy(8, 750, 40, 40, 40); // Adap.buffer(8)は"img1.gif"。白い四分円
                        }
                        // おそらく暗視エフェクトの角のトリム部分
                        if (Gvar.var_71[Gvar.var_1146][Gvar.var_1148] == Gvar.var_201 && Gvar.var_71[Gvar.var_1146][Gvar.var_449] != Gvar.var_201 && Gvar.var_71[Gvar.var_447][Gvar.var_1148] != Gvar.var_201 && Gvar.var_71[Gvar.var_1146][Gvar.var_1149] != Gvar.var_201 && Gvar.var_71[Gvar.var_1147][Gvar.var_1148] != Gvar.var_201) {
                            Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 10);
                            if (Gvar.var_217 == 0) {
                                if (Gvar.var_199 == 4) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_1169, Gvar.var_763 * Gvar.var_36 - 10);
                                }
                                if (Gvar.var_199 == 6) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_1169, Gvar.var_763 * Gvar.var_36 - 10);
                                }
                                if (Gvar.var_199 == 8) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - Gvar.var_1169 - 10);
                                }
                                if (Gvar.var_199 == 2) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 + Gvar.var_1169 - 10);
                                }
                                if (Gvar.var_199 == 1) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_1169, Gvar.var_763 * Gvar.var_36 + Gvar.var_1169 - 10);
                                }
                                if (Gvar.var_199 == 3) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_1169, Gvar.var_763 * Gvar.var_36 + Gvar.var_1169 - 10);
                                }
                                if (Gvar.var_199 == 7) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_1169, Gvar.var_763 * Gvar.var_36 - Gvar.var_1169 - 10);
                                }
                                if (Gvar.var_199 == 9) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_1169, Gvar.var_763 * Gvar.var_36 - Gvar.var_1169 - 10);
                                }
                            }
                            Adap.gcopy(8, 750, 80, 40, 40); // Adap.buffer(8)は"img1.gif"。白い四分円
                        }
                        // おそらく暗視エフェクトの角のトリム部分
                        if (Gvar.var_71[Gvar.var_1147][Gvar.var_1148] == Gvar.var_201 && Gvar.var_71[Gvar.var_1147][Gvar.var_449] != Gvar.var_201 && Gvar.var_71[Gvar.var_447][Gvar.var_1148] != Gvar.var_201 && Gvar.var_71[Gvar.var_1147][Gvar.var_1149] != Gvar.var_201 && Gvar.var_71[Gvar.var_1146][Gvar.var_1148] != Gvar.var_201) {
                            Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 10);
                            if (Gvar.var_217 == 0) {
                                if (Gvar.var_199 == 4) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_1169, Gvar.var_763 * Gvar.var_36 - 10);
                                }
                                if (Gvar.var_199 == 6) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_1169, Gvar.var_763 * Gvar.var_36 - 10);
                                }
                                if (Gvar.var_199 == 8) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - Gvar.var_1169 - 10);
                                }
                                if (Gvar.var_199 == 2) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 + Gvar.var_1169 - 10);
                                }
                                if (Gvar.var_199 == 1) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_1169, Gvar.var_763 * Gvar.var_36 + Gvar.var_1169 - 10);
                                }
                                if (Gvar.var_199 == 3) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_1169, Gvar.var_763 * Gvar.var_36 + Gvar.var_1169 - 10);
                                }
                                if (Gvar.var_199 == 7) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_1169, Gvar.var_763 * Gvar.var_36 - Gvar.var_1169 - 10);
                                }
                                if (Gvar.var_199 == 9) {
                                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_1169, Gvar.var_763 * Gvar.var_36 - Gvar.var_1169 - 10);
                                }
                            }
                            Adap.gcopy(8, 750, 120, 40, 40); // Adap.buffer(8)は"img1.gif"。白い四分円
                        }
                    }
                    Gvar.var_764++;
                    Gvar.var_447++;
                }
                Gvar.var_763++;
                Gvar.var_449++;
            }

            Adap.gsel(0);
            if (Gvar.time_paused == 1 || Gvar.time_paused_count >= 1) { // 時止め(時消し飛ばし)状態の場合
                Adap.gsel(24);
            }
            Adap.color(250, 255, 255);
            Adap.gmode(4, null, null, 255);
            Gvar.var_1167 = 0;

            for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
                Gvar.var_1168 = 0;
                for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                    Adap.pos(Gvar.var_1168, Gvar.var_1167);
                    Adap.gcopy(37, Gvar.var_1168, Gvar.var_1167, 40, 40);
                    Gvar.var_1168 += 40;
                }
                Gvar.var_1167 += 40;
            }
            return;
        }
        return;
}

export {func330}
