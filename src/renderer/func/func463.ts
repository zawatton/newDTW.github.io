import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func463(this: any) {
        Adap.dbgprt(463);
        await Func.func337(); // メッセージ表示処理(自動)
        await Func.func080(); // 各キー入力確認
        if (Gvar.key_X_on == 1) {
            Gvar.var_221 = 0;
            Gvar.var_231 = 0;
            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            await Func.func051(); // キー入力待ち処理
            await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
            return;
        }
        if (Gvar.var_259 == 1) { // var_259:入力判定[↓]
            if (Gvar.var_222 == 10) {
                Gvar.var_229 = Gvar.var_229 + Gvar.var_2041;
                if (Gvar.item_class1 == 0) {
                    Gvar.var_222 = 5;
                }
                if (Gvar.item_class1 == 1) {
                    Gvar.var_222 = 1;
                    if (Gvar.var_231 == 1) {
                        Gvar.var_222 = 3;
                    }
                }
                if (Gvar.item_class1 == 2) {
                    Gvar.var_222 = 1;
                    if (Gvar.var_231 == 1) {
                        Gvar.var_222 = 2;
                    }
                }
                if (Gvar.item_class1 == 3) {
                    Gvar.var_222 = 1;
                }
                if (Gvar.item_class1 == 4) {
                    Gvar.var_222 = 1;
                }
                if (Gvar.item_class1 == 5) {
                    Gvar.var_222 = 1;
                }
                if (Gvar.item_class1 == 6) {
                    Gvar.var_222 = 1;
                }
                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func463();
                return;
            }
            if (Gvar.var_222 == 1) {
                Gvar.var_229 = Gvar.var_229 + Gvar.var_2041;
                if (Gvar.item_class1 == 1) {
                    if (Gvar.var_2032 == 0) {
                        Gvar.var_222 = 3;
                    }
                    if (Gvar.var_2032 != 0) {
                        Gvar.var_222 = 2;
                    }
                }
                if (Gvar.item_class1 == 2) {
                    Gvar.var_222 = 2;
                }
                if (Gvar.item_class1 == 3) {
                    Gvar.var_222 = 5;
                }
                if (Gvar.item_class1 == 4) {
                    Gvar.var_222 = 5;
                }
                if (Gvar.item_class1 == 5) {
                    Gvar.var_222 = 4;
                }
                if (Gvar.item_class1 == 6) {
                    Gvar.var_222 = 5;
                }
                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func463();
                return;
            }
            if (Gvar.var_222 == 2) {
                Gvar.var_229 = Gvar.var_229 + Gvar.var_2041;
                Gvar.var_222 = 3;
                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func463();
                return;
            }
            if (Gvar.var_222 == 3) {
                Gvar.var_229 = Gvar.var_229 + Gvar.var_2041;
                Gvar.var_222 = 5;
                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func463();
                return;
            }
            if (Gvar.var_222 == 4) {
                Gvar.var_229 = Gvar.var_229 + Gvar.var_2041;
                Gvar.var_222 = 5;
                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func463();
                return;
            }
            // 消費形アイテム (Gvar.var_222 = 5) であれば
            if (Gvar.var_222 == 5) {
                Gvar.var_229 = Gvar.var_229 + Gvar.var_2041;
                Gvar.var_222 = 6;
                if (Gvar.var_231 == 1) {
                    Gvar.var_2033 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
                    if (Gvar.var_78[Gvar.var_2033].Var0 != 1) {
                        Gvar.var_222 = 7;
                    }
                }
                if (Gvar.var_231 == 1) {
                    Gvar.var_2033 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
                    if (Gvar.var_78[Gvar.var_2033].Var0 == 1) {
                        if (Gvar.var_2034 == 0) {
                            Gvar.var_222 = 8;
                        }
                        if (Gvar.var_2034 == 1) {
                            Gvar.var_222 = 11;
                        }
                    }
                }
                if (Gvar.var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
                    Gvar.var_222 = 9;
                }
                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func463();
                return;
            }
            if (Gvar.var_222 == 9) {
                Gvar.var_229 = Gvar.var_229 + Gvar.var_2041;
                Gvar.var_222 = 6;
                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func463();
                return;
            }
            if (Gvar.var_222 == 6) {
                Gvar.var_229 = Gvar.var_229 + Gvar.var_2041;
                if (Gvar.var_2034 == 0) {
                    Gvar.var_222 = 8;
                }
                if (Gvar.var_2034 == 1) {
                    Gvar.var_222 = 11;
                }
                if (Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0 && Gvar.var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                    Gvar.var_2033 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
                    if (Gvar.var_78[Gvar.var_2033].Var0 != 1) {
                        Gvar.var_222 = 7;
                    }
                }
                if (Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0 && Gvar.var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                    Gvar.var_2033 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
                    if (Gvar.var_78[Gvar.var_2033].Var0 == 1) {
                        if (Gvar.var_2034 == 0) {
                            Gvar.var_222 = 8;
                        }
                        if (Gvar.var_2034 == 1) {
                            Gvar.var_222 = 11;
                        }
                    }
                }
                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func463();
                return;
            }
            if (Gvar.var_222 == 7) {
                Gvar.var_229 = Gvar.var_229 + Gvar.var_2041;
                if (Gvar.var_2034 == 0) {
                    Gvar.var_222 = 8;
                }
                if (Gvar.var_2034 == 1) {
                    Gvar.var_222 = 11;
                }
                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func463();
                return;
            }
            if (Gvar.var_222 == 11) {
                Gvar.var_229 = Gvar.var_229 + Gvar.var_2041;
                Gvar.var_222 = 8;
                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func463();
                return;
            }
            if (Gvar.var_222 == 8) {
                Gvar.var_229 = 44;
                Gvar.var_222 = 1;
                if (Gvar.var_231 == 0) {
                    if (Gvar.item_class1 == 0) {
                        Gvar.var_222 = 5;
                    }
                    if (Gvar.item_class1 != 0) {
                        Gvar.var_222 = 1;
                    }
                }
                if (Gvar.var_231 == 1) {
                    Gvar.var_222 = 10;
                }
                if (Gvar.var_220 == 1 && Gvar.item_class1 == 1) {
                    Gvar.var_222 = 3;
                }
                // 道具画面(メニュー画面/道具)が開いている状態
                if (Gvar.var_220 == 1 && Gvar.item_class1 == 2) {
                    Gvar.var_222 = 2;
                }
                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func463();
                return;
            }
        }
        if (Gvar.var_255 == 1) { // var_255:入力判定[↑]
            if (Gvar.var_222 == 10) {
                if (Gvar.var_2034 == 0) {
                    if (Gvar.item_class1 == 0) {
                        Gvar.var_222 = 8;
                        Gvar.var_229 = 44 + Gvar.var_2041 * 3;
                    }
                    if (Gvar.item_class1 == 1) {
                        Gvar.var_222 = 8;
                        Gvar.var_229 = 44 + Gvar.var_2041 * 4;
                    }
                    if (Gvar.item_class1 == 2) {
                        Gvar.var_222 = 8;
                        Gvar.var_229 = 44 + Gvar.var_2041 * 5;
                    }
                    if (Gvar.item_class1 == 3) {
                        Gvar.var_222 = 8;
                        Gvar.var_229 = 44 + Gvar.var_2041 * 4;
                    }
                    if (Gvar.item_class1 == 4) {
                        Gvar.var_222 = 8;
                        Gvar.var_229 = 44 + Gvar.var_2041 * 4;
                    }
                    if (Gvar.item_class1 == 5) {
                        Gvar.var_222 = 8;
                        Gvar.var_229 = 44 + Gvar.var_2041 * 5;
                    }
                    if (Gvar.item_class1 == 6) {
                        Gvar.var_222 = 8;
                        Gvar.var_229 = 44 + Gvar.var_2041 * 4;
                    }
                    if (Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0) {
                        Gvar.var_2033 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
                        if (Gvar.var_78[Gvar.var_2033].Var0 == 1) {
                            Gvar.var_229 = Gvar.var_229 - Gvar.var_2041;
                        }
                    }
                }
                if (Gvar.var_2034 == 1) {
                    if (Gvar.item_class1 == 0) {
                        Gvar.var_222 = 8;
                        Gvar.var_229 = 44 + Gvar.var_2041 * 4;
                    }
                    if (Gvar.item_class1 == 1) {
                        Gvar.var_222 = 8;
                        Gvar.var_229 = 44 + Gvar.var_2041 * 5;
                    }
                    if (Gvar.item_class1 == 2) {
                        Gvar.var_222 = 8;
                        Gvar.var_229 = 44 + Gvar.var_2041 * 6;
                    }
                    if (Gvar.item_class1 == 3) {
                        Gvar.var_222 = 8;
                        Gvar.var_229 = 44 + Gvar.var_2041 * 5;
                    }
                    if (Gvar.item_class1 == 4) {
                        Gvar.var_222 = 8;
                        Gvar.var_229 = 44 + Gvar.var_2041 * 5;
                    }
                    if (Gvar.item_class1 == 5) {
                        Gvar.var_222 = 8;
                        Gvar.var_229 = 44 + Gvar.var_2041 * 6;
                    }
                    if (Gvar.item_class1 == 6) {
                        Gvar.var_222 = 8;
                        Gvar.var_229 = 44 + Gvar.var_2041 * 5;
                    }
                    if (Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0) {
                        Gvar.var_2033 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
                        if (Gvar.var_78[Gvar.var_2033].Var0 == 1) {
                            Gvar.var_229 = Gvar.var_229 - Gvar.var_2041;
                        }
                    }
                }
                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func463();
                return;
            }
            if (Gvar.var_222 == 1) {
                if (Gvar.var_2034 == 0) {
                    if (Gvar.var_231 == 0) {
                        if (Gvar.item_class1 == 1) {
                            if (Gvar.var_2032 == 0) {
                                Gvar.var_222 = 8;
                                Gvar.var_229 = 44 + Gvar.var_2041 * 4;
                                if (Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0 || Gvar.var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
                                    Gvar.var_229 = 44 + Gvar.var_2041 * 5;
                                }
                            }
                            if (Gvar.var_2032 != 0) {
                                Gvar.var_222 = 8;
                                Gvar.var_229 = 44 + Gvar.var_2041 * 5;
                                if (Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0 || Gvar.var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
                                    Gvar.var_229 = 44 + Gvar.var_2041 * 6;
                                }
                            }
                        }
                        if (Gvar.item_class1 == 2) {
                            Gvar.var_222 = 8;
                            Gvar.var_229 = 44 + Gvar.var_2041 * 5;
                            if (Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0 || Gvar.var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
                                Gvar.var_229 = 44 + Gvar.var_2041 * 6;
                            }
                        }
                        if (Gvar.item_class1 == 3) {
                            Gvar.var_222 = 8;
                            Gvar.var_229 = 44 + Gvar.var_2041 * 3;
                            if (Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0 || Gvar.var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
                                Gvar.var_229 = 44 + Gvar.var_2041 * 4;
                            }
                        }
                        if (Gvar.item_class1 == 4) {
                            Gvar.var_222 = 8;
                            Gvar.var_229 = 44 + Gvar.var_2041 * 3;
                            if (Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0 || Gvar.var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
                                Gvar.var_229 = 44 + Gvar.var_2041 * 4;
                            }
                        }
                        if (Gvar.item_class1 == 5) {
                            Gvar.var_222 = 8;
                            Gvar.var_229 = 44 + Gvar.var_2041 * 4;
                            if (Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0 || Gvar.var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
                                Gvar.var_229 = 44 + Gvar.var_2041 * 5;
                            }
                        }
                        if (Gvar.item_class1 == 6) {
                            Gvar.var_222 = 8;
                            Gvar.var_229 = 44 + Gvar.var_2041 * 3;
                            if (Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0 || Gvar.var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
                                Gvar.var_229 = 44 + Gvar.var_2041 * 4;
                            }
                        }
                        if (Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0) {
                            Gvar.var_2033 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
                            if (Gvar.var_78[Gvar.var_2033].Var0 == 1) {
                                Gvar.var_229 = Gvar.var_229 - 16;
                            }
                        }
                    }
                    if (Gvar.var_231 == 1) {
                        Gvar.var_222 = 10;
                        Gvar.var_229 = Gvar.var_229 - Gvar.var_2041;
                    }
                }
                if (Gvar.var_2034 == 1) {
                    if (Gvar.var_231 == 0) {
                        if (Gvar.item_class1 == 1) {
                            if (Gvar.var_2032 == 0) {
                                Gvar.var_222 = 8;
                                Gvar.var_229 = 44 + Gvar.var_2041 * 5;
                                if (Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0 && Gvar.var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                                    Gvar.var_229 = 44 + Gvar.var_2041 * 6;
                                }
                            }
                            if (Gvar.var_2032 != 0) {
                                Gvar.var_222 = 8;
                                Gvar.var_229 = 44 + Gvar.var_2041 * 6;
                                if (Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0 && Gvar.var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                                    Gvar.var_229 = 44 + Gvar.var_2041 * 7;
                                }
                            }
                        }
                        if (Gvar.item_class1 == 2) {
                            Gvar.var_222 = 8;
                            Gvar.var_229 = 44 + Gvar.var_2041 * 6;
                            if (Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0 && Gvar.var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                                Gvar.var_229 = 44 + Gvar.var_2041 * 7;
                            }
                        }
                        if (Gvar.item_class1 == 3) {
                            Gvar.var_222 = 8;
                            Gvar.var_229 = 44 + Gvar.var_2041 * 4;
                            if (Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0 && Gvar.var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                                Gvar.var_229 = 44 + Gvar.var_2041 * 5;
                            }
                            if (Gvar.var_77[Gvar.var_66][Gvar.var_67] == 0 && Gvar.var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
                                Gvar.var_229 = 44 + Gvar.var_2041 * 5;
                            }
                            if (Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0 && Gvar.var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
                                Gvar.var_229 = 44 + Gvar.var_2041 * 5;
                            }
                        }
                        if (Gvar.item_class1 == 4) {
                            Gvar.var_222 = 8;
                            Gvar.var_229 = 44 + Gvar.var_2041 * 4;
                            if (Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0 && Gvar.var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                                Gvar.var_229 = 44 + Gvar.var_2041 * 5;
                            }
                        }
                        if (Gvar.item_class1 == 5) {
                            Gvar.var_222 = 8;
                            Gvar.var_229 = 44 + Gvar.var_2041 * 5;
                            if (Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0 && Gvar.var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                                Gvar.var_229 = 44 + Gvar.var_2041 * 6;
                            }
                        }
                        if (Gvar.item_class1 == 6) {
                            Gvar.var_222 = 8;
                            Gvar.var_229 = 44 + Gvar.var_2041 * 4;
                            if (Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0 && Gvar.var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                                Gvar.var_229 = 44 + Gvar.var_2041 * 5;
                            }
                        }
                        if (Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0) {
                            Gvar.var_2033 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
                            if (Gvar.var_78[Gvar.var_2033].Var0 == 1) {
                                Gvar.var_229 = Gvar.var_229 - 16;
                            }
                        }
                    }
                    if (Gvar.var_231 == 1) {
                        Gvar.var_222 = 10;
                        Gvar.var_229 = Gvar.var_229 - Gvar.var_2041;
                    }
                }
                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func463();
                return;
            }
            if (Gvar.var_222 == 2) {
                Gvar.var_229 = Gvar.var_229 - Gvar.var_2041;
                // 道具画面(メニュー画面/道具)が閉じている状態
                if (Gvar.var_220 == 0 && Gvar.var_231 == 0) {
                    Gvar.var_222 = 1;
                }
                if (Gvar.var_231 == 1) {
                    Gvar.var_222 = 10;
                }
                if (Gvar.var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
                    Gvar.var_222 = 8;
                    Gvar.var_229 = 44 + Gvar.var_2041 * 5;
                }
                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func463();
                return;
            }
            if (Gvar.var_222 == 3) {
                Gvar.var_229 = Gvar.var_229 - Gvar.var_2041;
                if (Gvar.item_class1 == 1) {
                    if (Gvar.var_220 == 0 && Gvar.var_231 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                        if (Gvar.var_2032 == 0) {
                            Gvar.var_222 = 1;
                        }
                        if (Gvar.var_2032 != 0) {
                            Gvar.var_222 = 2;
                        }
                    }
                    if (Gvar.var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
                        Gvar.var_222 = 8;
                        if (Gvar.var_2034 == 0) {
                            Gvar.var_229 = 44 + Gvar.var_2041 * 4;
                        }
                        if (Gvar.var_2034 == 1) {
                            Gvar.var_229 = 44 + Gvar.var_2041 * 5;
                        }
                    }
                    if (Gvar.var_231 == 1) {
                        Gvar.var_222 = 10;
                    }
                }
                if (Gvar.item_class1 == 2) {
                    Gvar.var_222 = 2;
                }
                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func463();
                return;
            }
            if (Gvar.var_222 == 4) {
                Gvar.var_229 = Gvar.var_229 - Gvar.var_2041;
                Gvar.var_222 = 1;
                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func463();
                return;
            }
            if (Gvar.var_222 == 5) { // 消費形アイテム (Gvar.var_222 = 5) であれば
                Gvar.var_229 = Gvar.var_229 - Gvar.var_2041;
                if (Gvar.item_class1 == 0) {
                    if (Gvar.var_220 == 0 && Gvar.var_231 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                        Gvar.var_222 = 8;
                        Gvar.var_229 = 44 + Gvar.var_2041 * 2;
                        if (Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0) {
                            Gvar.var_2033 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
                            if (Gvar.var_78[Gvar.var_2033].Var0 != 1) {
                                Gvar.var_229 = 44 + Gvar.var_2041 * 3;
                            }
                        }
                    }
                    if (Gvar.var_220 == 0 && Gvar.var_231 == 1) { // 道具画面(メニュー画面/道具)が閉じている状態
                        Gvar.var_222 = 10;
                    }
                    if (Gvar.var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
                        Gvar.var_222 = 8;
                        Gvar.var_229 = 44 + Gvar.var_2041 * 3;
                    }
                }
                if (Gvar.item_class1 == 1) {
                    Gvar.var_222 = 3;
                }
                if (Gvar.item_class1 == 2) {
                    Gvar.var_222 = 3;
                }
                if (Gvar.item_class1 == 3) {
                    Gvar.var_222 = 1;
                }
                if (Gvar.item_class1 == 4) {
                    Gvar.var_222 = 1;
                }
                if (Gvar.item_class1 == 5) {
                    Gvar.var_222 = 4;
                }
                if (Gvar.item_class1 == 6) {
                    Gvar.var_222 = 1;
                }
                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func463();
                return;
            }
            if (Gvar.var_222 == 9) {
                Gvar.var_229 = Gvar.var_229 - Gvar.var_2041;
                Gvar.var_222 = 5;
                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func463();
                return;
            }
            if (Gvar.var_222 == 6) {
                Gvar.var_229 = Gvar.var_229 - Gvar.var_2041;
                Gvar.var_222 = 5;
                if (Gvar.var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
                    Gvar.var_222 = 9;
                }
                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func463();
                return;
            }
            if (Gvar.var_222 == 7) {
                Gvar.var_229 = Gvar.var_229 - Gvar.var_2041;
                Gvar.var_222 = 6;
                if (Gvar.var_231 == 1) {
                    Gvar.var_222 = 5;
                }
                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func463();
                return;
            }
            if (Gvar.var_222 == 11) {
                Gvar.var_229 = Gvar.var_229 - Gvar.var_2041;
                Gvar.var_222 = 6;
                if (Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0 && Gvar.var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                    Gvar.var_2033 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
                    if (Gvar.var_78[Gvar.var_2033].Var0 != 1) {
                        Gvar.var_222 = 7;
                    }
                }
                if (Gvar.var_231 == 1) {
                    Gvar.var_2033 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
                    if (Gvar.var_78[Gvar.var_2033].Var0 != 1) {
                        Gvar.var_222 = 7;
                    }
                }
                if (Gvar.var_231 == 1) {
                    Gvar.var_2033 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
                    if (Gvar.var_78[Gvar.var_2033].Var0 == 1) {
                        Gvar.var_222 = 5;
                    }
                }
                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func463();
                return;
            }
            if (Gvar.var_222 == 8) {
                Gvar.var_229 = Gvar.var_229 - Gvar.var_2041;
                Gvar.var_222 = 6;
                if (Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0 && Gvar.var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                    Gvar.var_2033 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
                    if (Gvar.var_78[Gvar.var_2033].Var0 != 1) {
                        Gvar.var_222 = 7;
                    }
                }
                if (Gvar.var_231 == 1) {
                    Gvar.var_2033 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
                    if (Gvar.var_78[Gvar.var_2033].Var0 != 1) {
                        Gvar.var_222 = 7;
                    }
                    if (Gvar.var_78[Gvar.var_2033].Var0 == 1) {
                        Gvar.var_222 = 5;
                    }
                }
                if (Gvar.var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
                    Gvar.var_222 = 6;
                }
                if (Gvar.var_2034 == 1) {
                    Gvar.var_222 = 11;
                }
                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                await Func.func463();
                return;
            }
        }

        if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
            if (Gvar.var_220 == 0 && Gvar.var_231 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                if (Gvar.var_222 == 1) {
                    if (Gvar.item_class1 == 1) {
                        Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                        await Func.func051(); // キー入力待ち処理
                        Gvar.var_221 = 2;
                        Gvar.var_246 = 44;
                        Gvar.var_2043 = 1;
                        await Func.func464();
                        return;
                    }
                    if (Gvar.item_class1 == 5) {
                        Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                        Gvar.var_221 = 0;
                        await Func.func408();
                        return;
                    }
                    Gvar.var_221 = 0;
                    Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
                    await Func.func420(); // 各アイテムを使った際、item_listのIDに応じて効果を割り振り
                    return;
                }
                if (Gvar.var_222 == 2 && Gvar.item_class1 == 2) {
                    Gvar.var_221 = 0;
                    Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
                    await Func.func406(); // アイテムメニューからの "打つ" 選択時、射撃攻撃動作呼び出し処理
                    return;
                }
                if (Gvar.var_222 == 2 && Gvar.item_class1 == 1) {
                    Gvar.var_221 = 0;
                    Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
                    if (Gvar.var_2032 == 1) {
                        Gvar.disc_class = 1;
                    }
                    if (Gvar.var_2032 == 2) {
                        Gvar.disc_class = 2;
                    }
                    if (Gvar.var_2032 == 3) {
                        Gvar.disc_class = 3;
                    }
                    await Func.func420(); // 各アイテムを使った際、item_listのIDに応じて効果を割り振り
                    return;
                }
                if (Gvar.var_222 == 3 && Gvar.item_class1 == 1) {
                    await Func.func051(); // キー入力待ち処理
                    Gvar.var_221 = 3;
                    Gvar.var_246 = 44;
                    Gvar.var_2043 = 1;
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    await Func.func465(); // アイテムを使用する時の動作処理 (特定アイテムにカーソルを合わせ キー "Z" を押した時の処理)
                    return;
                }
                if (Gvar.var_222 == 3 && Gvar.item_class1 == 2) {
                    await Func.func051(); // キー入力待ち処理
                    Gvar.var_221 = 3;
                    Gvar.var_246 = 44;
                    Gvar.var_2043 = 1;
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    await Func.func465(); // アイテムを使用する時の動作処理 (特定アイテムにカーソルを合わせ キー "Z" を押した時の処理)
                    return;
                }
                if (Gvar.var_222 == 4) {
                    Gvar.var_221 = 0;
                    Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    await Func.func407(); // アイテム欄を開いた時の表示イニシャル処理 (1ページ目、カーソル一番上等)
                    return;
                }
                if (Gvar.var_222 == 5) { // 消費形アイテム (Gvar.var_222 = 5) であれば
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    if (Gvar.item_class1 != 2) {
                        Gvar.var_221 = 0;
                        Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
                        await Func.func409();
                        return;
                    }
                    if (Gvar.item_class1 == 2) {
                        Gvar.var_339 = 1;
                        Gvar.var_221 = 0;
                        Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
                        await Func.func409();
                        return;
                    }
                }
                if (Gvar.var_222 == 6) {
                    Gvar.var_221 = 0;
                    Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    await Func.func403(); // 装備したdiscを床に置く時(取り外す際)の動作処理
                    return;
                }
                if (Gvar.var_222 == 7) {
                    Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
                    Gvar.var_2044 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    await Func.func480(); // 道具画面(メニュー画面/道具)からの足元交換
                    return;
                }
                if (Gvar.var_222 == 8) {
                    Gvar.var_221 = 0;
                    Gvar.var_1209 = 1;
                    Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    await Func.func368(); // アイテム配列変え関数??
                    return;
                }
                if (Gvar.var_222 == 11) {
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    await Func.func482();
                    return;
                }
            }
        }
        if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
            if (Gvar.var_220 == 0 && Gvar.var_231 == 1) { // 道具画面(メニュー画面/道具)が閉じている状態
                Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                if (Gvar.var_222 == 10) {
                    Gvar.var_231 = 0;
                    Gvar.var_198 = 0; // メッセージウィンドウ閉じる
                    Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
                    Gvar.var_221 = 0;
                    // 所持アイテム数が20個以上になる場合
                    if (Gvar.var_224 >= 20 && Gvar.var_78[Gvar.var_321].Var0 >= 400 && Gvar.var_78[Gvar.var_321].Var0 < 500) {
                        await Func.func401(); // 射撃discを拾った際、同じものを既に所持していた時にまとめる動作処理
                        if (Gvar.var_1839 == 1) {
                            Gvar.var_217 = 1;
                            await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
                            return;
                        }
                    }
                    // 所持アイテム数が20個以上になる場合
                    if (Gvar.var_224 >= 20 && Gvar.var_78[Gvar.var_321].Var0 != 1) {
                        await Func.func477(); // アイテムを "拾う" を選択した時に所持アイテムが20個以上になる際の処理
                        return;
                    }
                    await Func.func400(); // アイテムを拾う際の動作処理
                    Gvar.var_217 = 1;
                    await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
                    return;
                }
                if (Gvar.var_222 == 1) {
                    if (Gvar.item_class1 == 1) {
                        Gvar.var_221 = 2;
                        Gvar.var_246 = 44;
                        Gvar.var_2043 = 1;
                        await Func.func051(); // キー入力待ち処理
                        await Func.func464();
                        return;
                    }
                    if (Gvar.item_class1 == 2) {
                        Gvar.var_231 = 0;
                        Gvar.var_198 = 0; // メッセージウィンドウ閉じる
                        Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
                        Gvar.var_221 = 0;
                        // 所持アイテム数が20個以上になる場合
                        if (Gvar.var_224 >= 20) {
                            await Func.func477(); // アイテムを "拾う" を選択した時に所持アイテムが20個以上になる際の処理
                            return;
                        }
                        await Func.func400(); // アイテムを拾う際の動作処理
                        Gvar.var_225 = Gvar.var_224;
                        Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
                        await Func.func420(); // 各アイテムを使った際、item_listのIDに応じて効果を割り振り
                        return;
                    }
                    if (Gvar.item_class1 == 5) {
                        Gvar.var_221 = 0;
                        Gvar.var_225 = 0;
                        Gvar.var_231 = 0;
                        await Func.func408();
                        return;
                    }
                    Gvar.var_231 = 0;
                    Gvar.var_198 = 0; // メッセージウィンドウ閉じる
                    Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
                    Gvar.var_221 = 0;
                    Gvar.var_234 = 1;
                    Gvar.var_225 = 0;
                    Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
                    await Func.func420(); // 各アイテムを使った際、item_listのIDに応じて効果を割り振り
                    return;
                }
                if (Gvar.var_222 == 2) {
                    Gvar.var_221 = 0;
                    Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
                    Gvar.var_231 = 0;
                    Gvar.var_234 = 1;
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    await Func.func406(); // アイテムメニューからの "打つ" 選択時、射撃攻撃動作呼び出し処理
                    return;
                }
                if (Gvar.var_222 == 3 && Gvar.item_class1 == 1) {
                    await Func.func051(); // キー入力待ち処理
                    Gvar.var_221 = 3;
                    Gvar.var_246 = 44;
                    Gvar.var_2043 = 1;
                    Gvar.var_234 = 1;
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    await Func.func465(); // アイテムを使用する時の動作処理 (特定アイテムにカーソルを合わせ キー "Z" を押した時の処理)
                    return;
                }
                if (Gvar.var_222 == 3 && Gvar.item_class1 == 2) {
                    await Func.func051(); // キー入力待ち処理
                    Gvar.var_221 = 3;
                    Gvar.var_246 = 44;
                    Gvar.var_2043 = 1;
                    Gvar.var_234 = 1;
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    await Func.func465(); // アイテムを使用する時の動作処理 (特定アイテムにカーソルを合わせ キー "Z" を押した時の処理)
                    return;
                }
                if (Gvar.var_222 == 4) {
                    Gvar.var_221 = 0;
                    Gvar.var_225 = 0;
                    Gvar.var_234 = 1;
                    Gvar.var_1876 = 0;
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    await Func.func407(); // アイテム欄を開いた時の表示イニシャル処理 (1ページ目、カーソル一番上等)
                    return;
                }
                if (Gvar.var_222 == 5) { // 消費形アイテム (Gvar.var_222 = 5) であれば
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    Gvar.var_231 = 0;
                    Gvar.var_198 = 0; // メッセージウィンドウ閉じる
                    Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
                    Gvar.var_221 = 0;
                    Gvar.var_234 = 1;
                    Gvar.var_225 = 0;
                    if (Gvar.item_class1 == 2) {
                        Gvar.var_339 = 1;
                    }
                    Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
                    await Func.func409();
                    return;
                }
                if (Gvar.var_222 == 7) {
                    Gvar.var_231 = 0;
                    Gvar.var_198 = 0; // メッセージウィンドウ閉じる
                    Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
                    Gvar.var_221 = 0;
                    Gvar.var_2005 = 1;
                    Gvar.var_2044 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
                    Gvar.item_page_number = 1;
                    Gvar.Y_axis_item_position = 45;
                    Gvar.var_225 = 1;
                    Gvar.var_223 = Gvar.var_224 + 10;
                    Gvar.var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    await Func.func051(); // キー入力待ち処理
                    Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
                    await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                    return;
                }
                if (Gvar.var_222 == 8) {
                    Gvar.var_198 = 0; // メッセージウィンドウ閉じる
                    Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
                    Gvar.var_221 = 0;
                    Gvar.var_2045 = 1;
                    Gvar.var_2044 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    Gvar.var_1209 = 1;
                    // await Func.func481(); // Ver0.1309にてコメントアウト。console.log 1234123 を表示。これがあるために、床に置いたアイテムの説明を開くとフリーズしていた。Func.func481はおそらくバグ取り用の関数か? 
                    Gvar.var_225 = 0;
                    Gvar.belongings_item_list = Gvar.var_78[Gvar.var_2044].Var0;
                    await Func.func368(); // アイテム配列変え関数??
                    return;
                }
                if (Gvar.var_222 == 11) {
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    await Func.func482();
                    return;
                }
            }
        }
        if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
            if (Gvar.var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
                if (Gvar.var_222 == 9) {
                    Gvar.var_221 = 0;
                    Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    await Func.func474();
                    return;
                }
                if (Gvar.var_222 == 1) {
                    Gvar.var_221 = 0;
                    Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    await Func.func420(); // 各アイテムを使った際、item_listのIDに応じて効果を割り振り
                    return;
                }
                if (Gvar.var_222 == 2) {
                    Gvar.var_221 = 0;
                    Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    await Func.func406(); // アイテムメニューからの "打つ" 選択時、射撃攻撃動作呼び出し処理
                    return;
                }
                if (Gvar.var_222 == 3 && Gvar.item_class1 == 1) {
                    await Func.func051(); // キー入力待ち処理
                    Gvar.var_221 = 3;
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    Gvar.var_246 = 44;
                    Gvar.var_2043 = 1;
                    await Func.func465(); // アイテムを使用する時の動作処理 (特定アイテムにカーソルを合わせ キー "Z" を押した時の処理)
                    return;
                }
                if (Gvar.var_222 == 3 && Gvar.item_class1 == 2) {
                    await Func.func051(); // キー入力待ち処理
                    Gvar.var_221 = 3;
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    Gvar.var_246 = 44;
                    Gvar.var_2043 = 1;
                    await Func.func465(); // アイテムを使用する時の動作処理 (特定アイテムにカーソルを合わせ キー "Z" を押した時の処理)
                    return;
                }
                if (Gvar.var_222 == 5) {
                    if (Gvar.item_class1 != 2) {
                        Gvar.var_221 = 0;
                        Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
                        Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                        await Func.func411(); // アイテムを投げた時の動作処理
                        return;
                    }
                    if (Gvar.item_class1 == 2) {
                        Gvar.var_339 = 1;
                        Gvar.var_221 = 0;
                        Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
                        Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                        await Func.func411(); // アイテムを投げた時の動作処理
                        return;
                    }
                }
                if (Gvar.var_222 == 6) {
                    Gvar.var_221 = 0;
                    Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    await Func.func476(); // 亀の倉庫へアイテムを保管する際、アイテムデータ配列を保存する処理？
                    return;
                }
                if (Gvar.var_222 == 8) {
                    Gvar.var_221 = 0;
                    Gvar.var_1209 = 1;
                    Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    await Func.func368(); // アイテム配列変え関数??
                    return;
                }
                if (Gvar.var_222 == 11) {
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    await Func.func482();
                    return;
                }
            }
        }
        await Func.func463();
        return;
}

export {func463}
