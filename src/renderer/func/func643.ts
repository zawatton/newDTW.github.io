import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func643(this: any) {
        Adap.dbgprt(643);
        Gvar.var_2974 = Gvar.var_347;
        Gvar.var_2975 = Gvar.var_348;
        Gvar.var_2928 = Gvar.var_347 - 1;
        Gvar.var_2929 = Gvar.var_347 + 1;
        Gvar.var_2931 = Gvar.var_348 - 1;
        Gvar.var_2930 = Gvar.var_348 + 1;
        if (Gvar.var_2928 < 0) {
            Gvar.var_2928 = 0;
        }
        if (Gvar.var_2929 > Gvar.var_33) {
            Gvar.var_2929 = Gvar.var_33;
        }
        if (Gvar.var_2931 < 0) {
            Gvar.var_348 = 0;
        }
        if (Gvar.var_2930 > Gvar.var_34) {
            Gvar.var_2930 = Gvar.var_34;
        }
        Gvar.var_1280 = 0;
        if (Gvar.var_199 == 4) {
            if (Gvar.var_82[Gvar.var_2928][Gvar.var_2931] > 0) {
                Gvar.var_402 = Gvar.var_82[Gvar.var_2928][Gvar.var_2931];
                if (Gvar.var_83[Gvar.var_402].Var31 != 4 && Gvar.var_83[Gvar.var_402].Var31 != 5) {
                    Gvar.var_1280 = 1;
                }
            }
            if (Gvar.var_82[Gvar.var_2928][Gvar.var_2930] > 0) {
                Gvar.var_402 = Gvar.var_82[Gvar.var_2928][Gvar.var_2930];
                if (Gvar.var_83[Gvar.var_402].Var31 != 4 && Gvar.var_83[Gvar.var_402].Var31 != 5) {
                    Gvar.var_1280 = 1;
                }
            }
        }
        if (Gvar.var_199 == 6) {
            if (Gvar.var_82[Gvar.var_2929][Gvar.var_2931] > 0) {
                Gvar.var_402 = Gvar.var_82[Gvar.var_2929][Gvar.var_2931];
                if (Gvar.var_83[Gvar.var_402].Var31 != 4 && Gvar.var_83[Gvar.var_402].Var31 != 5) {
                    Gvar.var_1280 = 1;
                }
            }
            if (Gvar.var_82[Gvar.var_2929][Gvar.var_2930] > 0) {
                Gvar.var_402 = Gvar.var_82[Gvar.var_2929][Gvar.var_2930];
                if (Gvar.var_83[Gvar.var_402].Var31 != 4 && Gvar.var_83[Gvar.var_402].Var31 != 5) {
                    Gvar.var_1280 = 1;
                }
            }
        }
        if (Gvar.var_199 == 8) {
            if (Gvar.var_82[Gvar.var_2928][Gvar.var_2931] > 0) {
                Gvar.var_402 = Gvar.var_82[Gvar.var_2928][Gvar.var_2931];
                if (Gvar.var_83[Gvar.var_402].Var31 != 4 && Gvar.var_83[Gvar.var_402].Var31 != 5) {
                    Gvar.var_1280 = 1;
                }
            }
            if (Gvar.var_82[Gvar.var_2929][Gvar.var_2931] > 0) {
                Gvar.var_402 = Gvar.var_82[Gvar.var_2929][Gvar.var_2931];
                if (Gvar.var_83[Gvar.var_402].Var31 != 4 && Gvar.var_83[Gvar.var_402].Var31 != 5) {
                    Gvar.var_1280 = 1;
                }
            }
        }
        if (Gvar.var_199 == 2) {
            if (Gvar.var_82[Gvar.var_2928][Gvar.var_2930] > 0) {
                Gvar.var_402 = Gvar.var_82[Gvar.var_2928][Gvar.var_2930];
                if (Gvar.var_83[Gvar.var_402].Var31 != 4 && Gvar.var_83[Gvar.var_402].Var31 != 5) {
                    Gvar.var_1280 = 1;
                }
            }
            if (Gvar.var_82[Gvar.var_2929][Gvar.var_2930] > 0) {
                Gvar.var_402 = Gvar.var_82[Gvar.var_2929][Gvar.var_2930];
                if (Gvar.var_83[Gvar.var_402].Var31 != 4 && Gvar.var_83[Gvar.var_402].Var31 != 5) {
                    Gvar.var_1280 = 1;
                }
            }
        }
        if (Gvar.var_199 == 1) {
            if (Gvar.var_82[Gvar.var_2928][Gvar.var_2975] > 0) {
                Gvar.var_402 = Gvar.var_82[Gvar.var_2928][Gvar.var_2975];
                if (Gvar.var_83[Gvar.var_402].Var31 != 4 && Gvar.var_83[Gvar.var_402].Var31 != 5) {
                    Gvar.var_1280 = 1;
                }
            }
            if (Gvar.var_82[Gvar.var_2974][Gvar.var_2930] > 0) {
                Gvar.var_402 = Gvar.var_82[Gvar.var_2974][Gvar.var_2930];
                if (Gvar.var_83[Gvar.var_402].Var31 != 4 && Gvar.var_83[Gvar.var_402].Var31 != 5) {
                    Gvar.var_1280 = 1;
                }
            }
        }
        if (Gvar.var_199 == 3) {
            if (Gvar.var_82[Gvar.var_2929][Gvar.var_2975] > 0) {
                Gvar.var_402 = Gvar.var_82[Gvar.var_2929][Gvar.var_2975];
                if (Gvar.var_83[Gvar.var_402].Var31 != 4 && Gvar.var_83[Gvar.var_402].Var31 != 5) {
                    Gvar.var_1280 = 1;
                }
            }
            if (Gvar.var_82[Gvar.var_2974][Gvar.var_2930] > 0) {
                Gvar.var_402 = Gvar.var_82[Gvar.var_2974][Gvar.var_2930];
                if (Gvar.var_83[Gvar.var_402].Var31 != 4 && Gvar.var_83[Gvar.var_402].Var31 != 5) {
                    Gvar.var_1280 = 1;
                }
            }
        }
        if (Gvar.var_199 == 7) {
            if (Gvar.var_82[Gvar.var_2974][Gvar.var_2931] > 0) {
                Gvar.var_402 = Gvar.var_82[Gvar.var_2974][Gvar.var_2931];
                if (Gvar.var_83[Gvar.var_402].Var31 != 4 && Gvar.var_83[Gvar.var_402].Var31 != 5) {
                    Gvar.var_1280 = 1;
                }
            }
            if (Gvar.var_82[Gvar.var_2928][Gvar.var_2975] > 0) {
                Gvar.var_402 = Gvar.var_82[Gvar.var_2928][Gvar.var_2975];
                if (Gvar.var_83[Gvar.var_402].Var31 != 4 && Gvar.var_83[Gvar.var_402].Var31 != 5) {
                    Gvar.var_1280 = 1;
                }
            }
        }
        if (Gvar.var_199 == 9) {
            if (Gvar.var_82[Gvar.var_2974][Gvar.var_2931] > 0) {
                Gvar.var_402 = Gvar.var_82[Gvar.var_2974][Gvar.var_2931];
                if (Gvar.var_83[Gvar.var_402].Var31 != 4 && Gvar.var_83[Gvar.var_402].Var31 != 5) {
                    Gvar.var_1280 = 1;
                }
            }
            if (Gvar.var_82[Gvar.var_2929][Gvar.var_2975] > 0) {
                Gvar.var_402 = Gvar.var_82[Gvar.var_2929][Gvar.var_2975];
                if (Gvar.var_83[Gvar.var_402].Var31 != 4 && Gvar.var_83[Gvar.var_402].Var31 != 5) {
                    Gvar.var_1280 = 1;
                }
            }
        }
        if (Gvar.var_199 == 1 && Gvar.var_82[Gvar.var_2928][Gvar.var_2930] > 0) {
            if (Gvar.var_71[Gvar.var_2928][Gvar.var_2975] == 0 || Gvar.var_71[Gvar.var_2974][Gvar.var_2930] == 0) {
                Gvar.var_402 = Gvar.var_82[Gvar.var_2928][Gvar.var_2930];
                if (Gvar.var_83[Gvar.var_402].Var31 != 4 && Gvar.var_83[Gvar.var_402].Var31 != 5) {
                    Gvar.var_1280 = 1;
                }
            }
        }
        if (Gvar.var_199 == 3 && Gvar.var_82[Gvar.var_2929][Gvar.var_2930] > 0) {
            if (Gvar.var_71[Gvar.var_2929][Gvar.var_2975] == 0 || Gvar.var_71[Gvar.var_2974][Gvar.var_2930] == 0) {
                Gvar.var_402 = Gvar.var_82[Gvar.var_2929][Gvar.var_2930];
                if (Gvar.var_83[Gvar.var_402].Var31 != 4 && Gvar.var_83[Gvar.var_402].Var31 != 5) {
                    Gvar.var_1280 = 1;
                }
            }
        }
        if (Gvar.var_199 == 7 && Gvar.var_82[Gvar.var_2928][Gvar.var_2931] > 0) {
            if (Gvar.var_71[Gvar.var_2974][Gvar.var_2931] == 0 || Gvar.var_71[Gvar.var_2928][Gvar.var_2975] == 0) {
                Gvar.var_402 = Gvar.var_82[Gvar.var_2928][Gvar.var_2931];
                if (Gvar.var_83[Gvar.var_402].Var31 != 4 && Gvar.var_83[Gvar.var_402].Var31 != 5) {
                    Gvar.var_1280 = 1;
                }
            }
        }
        if (Gvar.var_199 == 9 && Gvar.var_82[Gvar.var_2929][Gvar.var_2931] > 0) {
            if (Gvar.var_71[Gvar.var_2974][Gvar.var_2931] == 0 || Gvar.var_71[Gvar.var_2929][Gvar.var_2975] == 0) {
                Gvar.var_402 = Gvar.var_82[Gvar.var_2929][Gvar.var_2931];
                if (Gvar.var_83[Gvar.var_402].Var31 != 4 && Gvar.var_83[Gvar.var_402].Var31 != 5) {
                    Gvar.var_1280 = 1;
                }
            }
        }
        if (Gvar.var_1280 == 0) {
            return;
        }
        Gvar.var_403 = "「オラオラオラオラオラオラオラオラオラ」";
        Gvar.var_2976 = 0;
        Gvar.var_2977 = 0;
        Gvar.var_2978 = 0;
        Gvar.var_2979 = 0;
        Gvar.var_2980 = 0;
        Gvar.var_2981 = 0;
        Gvar.var_2982 = 0;
        Gvar.var_2983 = 0;
        Gvar.var_2984 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7

        Adap.DSPLAY(121);
        // await Func.func337(); // メッセージ表示処理(自動)
        await Func.func337(); // メッセージ表示処理(自動)

        Adap.DSPLAY(121);
        // await Func.func337(); // メッセージ表示処理(自動)
        await Func.func337(); // メッセージ表示処理(自動)

        Adap.DSPLAY(121);
        // await Func.func337(); // メッセージ表示処理(自動)
        await Func.func337(); // メッセージ表示処理(自動)
        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
            if (Gvar.var_199 == 4) {
                if (Gvar.var_82[Gvar.var_2928][Gvar.var_2931] > 0 && Gvar.var_71[Gvar.var_2928][Gvar.var_2931] != 0 && Gvar.var_2981 == 0) {
                    Gvar.var_2981 = 1;
                    Gvar.var_402 = Gvar.var_82[Gvar.var_2928][Gvar.var_2931];
                    Gvar.var_314 = Gvar.var_82[Gvar.var_2928][Gvar.var_2931];
                    Gvar.enemy_list = Gvar.var_83[Gvar.var_402].Var0;
                    if (Gvar.var_83[Gvar.var_402].Var31 != 4 && Gvar.var_83[Gvar.var_402].Var31 != 5) {
                         await Func.func644(); // No = 100 スタープラチナ、No = 398 スタープラチナ・ザ・ワールドのDISCを攻撃装備して攻撃した際、敵に回避された時の動作処理
                        if (Gvar.var_2867 != 0) {
                            await Func.func626(); // 敵リスト
                            await Func.func638();
                            await Func.func705();
                            for (let cnt6 = 0; cnt6 < 3; ++cnt6) {
                                await Func.func337(); // メッセージ表示処理(自動)
                            }
                        }
                    }
                }
                if (Gvar.var_82[Gvar.var_2928][Gvar.var_2975] > 0 && Gvar.var_71[Gvar.var_2928][Gvar.var_2975] != 0 && Gvar.var_2984 == 0) {
                    Gvar.var_2984 = 1;
                    Gvar.var_402 = Gvar.var_82[Gvar.var_2928][Gvar.var_2975];
                    Gvar.var_314 = Gvar.var_82[Gvar.var_2928][Gvar.var_2975];
                    Gvar.enemy_list = Gvar.var_83[Gvar.var_402].Var0;
                    if (Gvar.var_83[Gvar.var_402].Var31 != 4 && Gvar.var_83[Gvar.var_402].Var31 != 5) {
                         await Func.func644(); // No = 100 スタープラチナ、No = 398 スタープラチナ・ザ・ワールドのDISCを攻撃装備して攻撃した際、敵に回避された時の動作処理
                        if (Gvar.var_2867 != 0) {
                            await Func.func626(); // 敵リスト
                            await Func.func638();
                            await Func.func705();
                            for (let cnt6 = 0; cnt6 < 3; ++cnt6) {
                                await Func.func337(); // メッセージ表示処理(自動)
                            }
                        }
                    }
                }
                if (Gvar.var_82[Gvar.var_2928][Gvar.var_2930] > 0 && Gvar.var_71[Gvar.var_2928][Gvar.var_2930] != 0 && Gvar.var_2976 == 0) {
                    Gvar.var_2976 = 1;
                    Gvar.var_402 = Gvar.var_82[Gvar.var_2928][Gvar.var_2930];
                    Gvar.var_314 = Gvar.var_82[Gvar.var_2928][Gvar.var_2930];
                    Gvar.enemy_list = Gvar.var_83[Gvar.var_402].Var0;
                    if (Gvar.var_83[Gvar.var_402].Var31 != 4 && Gvar.var_83[Gvar.var_402].Var31 != 5) {
                         await Func.func644(); // No = 100 スタープラチナ、No = 398 スタープラチナ・ザ・ワールドのDISCを攻撃装備して攻撃した際、敵に回避された時の動作処理
                        if (Gvar.var_2867 != 0) {
                            await Func.func626(); // 敵リスト
                            await Func.func638();
                            await Func.func705();
                        }
                    }
                }
            }
            if (Gvar.var_199 == 6) {
                if (Gvar.var_82[Gvar.var_2929][Gvar.var_2931] > 0 && Gvar.var_71[Gvar.var_2929][Gvar.var_2931] != 0 && Gvar.var_2983 == 0) {
                    Gvar.var_2983 = 1;
                    Gvar.var_402 = Gvar.var_82[Gvar.var_2929][Gvar.var_2931];
                    Gvar.var_314 = Gvar.var_82[Gvar.var_2929][Gvar.var_2931];
                    Gvar.enemy_list = Gvar.var_83[Gvar.var_402].Var0;
                    if (Gvar.var_83[Gvar.var_402].Var31 != 4 && Gvar.var_83[Gvar.var_402].Var31 != 5) {
                         await Func.func644(); // No = 100 スタープラチナ、No = 398 スタープラチナ・ザ・ワールドのDISCを攻撃装備して攻撃した際、敵に回避された時の動作処理
                        if (Gvar.var_2867 != 0) {
                            await Func.func626(); // 敵リスト
                            await Func.func638();
                            await Func.func705();
                            for (let cnt6 = 0; cnt6 < 3; ++cnt6) {
                                await Func.func337(); // メッセージ表示処理(自動)
                            }
                        }
                    }
                }
                if (Gvar.var_82[Gvar.var_2929][Gvar.var_2975] > 0 && Gvar.var_71[Gvar.var_2929][Gvar.var_2975] != 0 && Gvar.var_2984 == 0) {
                    Gvar.var_2984 = 1;
                    Gvar.var_402 = Gvar.var_82[Gvar.var_2929][Gvar.var_2975];
                    Gvar.var_314 = Gvar.var_82[Gvar.var_2929][Gvar.var_2975];
                    Gvar.enemy_list = Gvar.var_83[Gvar.var_402].Var0;
                    if (Gvar.var_83[Gvar.var_402].Var31 != 4 && Gvar.var_83[Gvar.var_402].Var31 != 5) {
                         await Func.func644(); // No = 100 スタープラチナ、No = 398 スタープラチナ・ザ・ワールドのDISCを攻撃装備して攻撃した際、敵に回避された時の動作処理
                        if (Gvar.var_2867 != 0) {
                            await Func.func626(); // 敵リスト
                            await Func.func638();
                            await Func.func705();
                            for (let cnt6 = 0; cnt6 < 3; ++cnt6) {
                                await Func.func337(); // メッセージ表示処理(自動)
                            }
                        }
                    }
                }
                if (Gvar.var_82[Gvar.var_2929][Gvar.var_2930] > 0 && Gvar.var_71[Gvar.var_2929][Gvar.var_2930] != 0 && Gvar.var_2978 == 0) {
                    Gvar.var_2978 = 1;
                    Gvar.var_402 = Gvar.var_82[Gvar.var_2929][Gvar.var_2930];
                    Gvar.var_314 = Gvar.var_82[Gvar.var_2929][Gvar.var_2930];
                    Gvar.enemy_list = Gvar.var_83[Gvar.var_402].Var0;
                    if (Gvar.var_83[Gvar.var_402].Var31 != 4 && Gvar.var_83[Gvar.var_402].Var31 != 5) {
                         await Func.func644(); // No = 100 スタープラチナ、No = 398 スタープラチナ・ザ・ワールドのDISCを攻撃装備して攻撃した際、敵に回避された時の動作処理
                        if (Gvar.var_2867 != 0) {
                            await Func.func626(); // 敵リスト
                            await Func.func638();
                            await Func.func705();
                        }
                    }
                }
            }
            if (Gvar.var_199 == 8) {
                if (Gvar.var_82[Gvar.var_2928][Gvar.var_2931] > 0 && Gvar.var_71[Gvar.var_2928][Gvar.var_2931] != 0 && Gvar.var_2981 == 0) {
                    Gvar.var_2981 = 1;
                    Gvar.var_402 = Gvar.var_82[Gvar.var_2928][Gvar.var_2931];
                    Gvar.var_314 = Gvar.var_82[Gvar.var_2928][Gvar.var_2931];
                    Gvar.enemy_list = Gvar.var_83[Gvar.var_402].Var0;
                    if (Gvar.var_83[Gvar.var_402].Var31 != 4 && Gvar.var_83[Gvar.var_402].Var31 != 5) {
                         await Func.func644(); // No = 100 スタープラチナ、No = 398 スタープラチナ・ザ・ワールドのDISCを攻撃装備して攻撃した際、敵に回避された時の動作処理
                        if (Gvar.var_2867 != 0) {
                            await Func.func626(); // 敵リスト
                            await Func.func638();
                            await Func.func705();
                            for (let cnt6 = 0; cnt6 < 3; ++cnt6) {
                                await Func.func337(); // メッセージ表示処理(自動)
                            }
                        }
                    }
                }
                if (Gvar.var_82[Gvar.var_2974][Gvar.var_2931] > 0 && Gvar.var_71[Gvar.var_2974][Gvar.var_2931] != 0 && Gvar.var_2984 == 0) {
                    Gvar.var_2984 = 1;
                    Gvar.var_402 = Gvar.var_82[Gvar.var_2974][Gvar.var_2931];
                    Gvar.var_314 = Gvar.var_82[Gvar.var_2974][Gvar.var_2931];
                    Gvar.enemy_list = Gvar.var_83[Gvar.var_402].Var0;
                    if (Gvar.var_83[Gvar.var_402].Var31 != 4 && Gvar.var_83[Gvar.var_402].Var31 != 5) {
                         await Func.func644(); // No = 100 スタープラチナ、No = 398 スタープラチナ・ザ・ワールドのDISCを攻撃装備して攻撃した際、敵に回避された時の動作処理
                        if (Gvar.var_2867 != 0) {
                            await Func.func626(); // 敵リスト
                            await Func.func638();
                            await Func.func705();
                            for (let cnt6 = 0; cnt6 < 3; ++cnt6) {
                                await Func.func337(); // メッセージ表示処理(自動)
                            }
                        }
                    }
                }
                if (Gvar.var_82[Gvar.var_2929][Gvar.var_2931] > 0 && Gvar.var_71[Gvar.var_2929][Gvar.var_2931] != 0 && Gvar.var_2983 == 0) {
                    Gvar.var_2983 = 1;
                    Gvar.var_402 = Gvar.var_82[Gvar.var_2929][Gvar.var_2931];
                    Gvar.var_314 = Gvar.var_82[Gvar.var_2929][Gvar.var_2931];
                    Gvar.enemy_list = Gvar.var_83[Gvar.var_402].Var0;
                    if (Gvar.var_83[Gvar.var_402].Var31 != 4 && Gvar.var_83[Gvar.var_402].Var31 != 5) {
                         await Func.func644(); // No = 100 スタープラチナ、No = 398 スタープラチナ・ザ・ワールドのDISCを攻撃装備して攻撃した際、敵に回避された時の動作処理
                        if (Gvar.var_2867 != 0) {
                            await Func.func626(); // 敵リスト
                            await Func.func638();
                            await Func.func705();
                        }
                    }
                }
            }
            if (Gvar.var_199 == 2) {
                if (Gvar.var_82[Gvar.var_2928][Gvar.var_2930] > 0 && Gvar.var_71[Gvar.var_2928][Gvar.var_2930] != 0 && Gvar.var_2976 == 0) {
                    Gvar.var_2976 = 1;
                    Gvar.var_402 = Gvar.var_82[Gvar.var_2928][Gvar.var_2930];
                    Gvar.var_314 = Gvar.var_82[Gvar.var_2928][Gvar.var_2930];
                    Gvar.enemy_list = Gvar.var_83[Gvar.var_402].Var0;
                    if (Gvar.var_83[Gvar.var_402].Var31 != 4 && Gvar.var_83[Gvar.var_402].Var31 != 5) {
                         await Func.func644(); // No = 100 スタープラチナ、No = 398 スタープラチナ・ザ・ワールドのDISCを攻撃装備して攻撃した際、敵に回避された時の動作処理
                        if (Gvar.var_2867 != 0) {
                            await Func.func626(); // 敵リスト
                            await Func.func638();
                            await Func.func705();
                            for (let cnt6 = 0; cnt6 < 3; ++cnt6) {
                                await Func.func337(); // メッセージ表示処理(自動)
                            }
                        }
                    }
                }
                if (Gvar.var_82[Gvar.var_2974][Gvar.var_2930] > 0 && Gvar.var_71[Gvar.var_2974][Gvar.var_2930] != 0 && Gvar.var_2984 == 0) {
                    Gvar.var_2984 = 1;
                    Gvar.var_402 = Gvar.var_82[Gvar.var_2974][Gvar.var_2930];
                    Gvar.var_314 = Gvar.var_82[Gvar.var_2974][Gvar.var_2930];
                    Gvar.enemy_list = Gvar.var_83[Gvar.var_402].Var0;
                    if (Gvar.var_83[Gvar.var_402].Var31 != 4 && Gvar.var_83[Gvar.var_402].Var31 != 5) {
                         await Func.func644(); // No = 100 スタープラチナ、No = 398 スタープラチナ・ザ・ワールドのDISCを攻撃装備して攻撃した際、敵に回避された時の動作処理
                        if (Gvar.var_2867 != 0) {
                            await Func.func626(); // 敵リスト
                            await Func.func638();
                            await Func.func705();
                            for (let cnt6 = 0; cnt6 < 3; ++cnt6) {
                                await Func.func337(); // メッセージ表示処理(自動)
                            }
                        }
                    }
                }
                if (Gvar.var_82[Gvar.var_2929][Gvar.var_2930] > 0 && Gvar.var_71[Gvar.var_2929][Gvar.var_2930] != 0 && Gvar.var_2978 == 0) {
                    Gvar.var_2978 = 1;
                    Gvar.var_402 = Gvar.var_82[Gvar.var_2929][Gvar.var_2930];
                    Gvar.var_314 = Gvar.var_82[Gvar.var_2929][Gvar.var_2930];
                    Gvar.enemy_list = Gvar.var_83[Gvar.var_402].Var0;
                    if (Gvar.var_83[Gvar.var_402].Var31 != 4 && Gvar.var_83[Gvar.var_402].Var31 != 5) {
                         await Func.func644(); // No = 100 スタープラチナ、No = 398 スタープラチナ・ザ・ワールドのDISCを攻撃装備して攻撃した際、敵に回避された時の動作処理
                        if (Gvar.var_2867 != 0) {
                            await Func.func626(); // 敵リスト
                            await Func.func638();
                            await Func.func705();
                        }
                    }
                }
            }
            if (Gvar.var_199 == 1) {
                if (Gvar.var_82[Gvar.var_2928][Gvar.var_2975] > 0 && Gvar.var_71[Gvar.var_2928][Gvar.var_2975] != 0 && Gvar.var_2979 == 0) {
                    Gvar.var_2979 = 1;
                    Gvar.var_402 = Gvar.var_82[Gvar.var_2928][Gvar.var_2975];
                    Gvar.var_314 = Gvar.var_82[Gvar.var_2928][Gvar.var_2975];
                    Gvar.enemy_list = Gvar.var_83[Gvar.var_402].Var0;
                    if (Gvar.var_83[Gvar.var_402].Var31 != 4 && Gvar.var_83[Gvar.var_402].Var31 != 5) {
                         await Func.func644(); // No = 100 スタープラチナ、No = 398 スタープラチナ・ザ・ワールドのDISCを攻撃装備して攻撃した際、敵に回避された時の動作処理
                        if (Gvar.var_2867 != 0) {
                            await Func.func626(); // 敵リスト
                            await Func.func638();
                            await Func.func705();
                            for (let cnt6 = 0; cnt6 < 3; ++cnt6) {
                                await Func.func337(); // メッセージ表示処理(自動)
                            }
                        }
                    }
                }
                if (Gvar.var_82[Gvar.var_2928][Gvar.var_2930] > 0 && Gvar.var_71[Gvar.var_2928][Gvar.var_2930] != 0 && Gvar.var_2984 == 0) {
                    Gvar.var_2984 = 1;
                    Gvar.var_402 = Gvar.var_82[Gvar.var_2928][Gvar.var_2930];
                    Gvar.var_314 = Gvar.var_82[Gvar.var_2928][Gvar.var_2930];
                    Gvar.enemy_list = Gvar.var_83[Gvar.var_402].Var0;
                    if (Gvar.var_83[Gvar.var_402].Var31 != 4 && Gvar.var_83[Gvar.var_402].Var31 != 5) {
                         await Func.func644(); // No = 100 スタープラチナ、No = 398 スタープラチナ・ザ・ワールドのDISCを攻撃装備して攻撃した際、敵に回避された時の動作処理
                        if (Gvar.var_2867 != 0) {
                            await Func.func626(); // 敵リスト
                            await Func.func638();
                            await Func.func705();
                            for (let cnt6 = 0; cnt6 < 3; ++cnt6) {
                                await Func.func337(); // メッセージ表示処理(自動)
                            }
                        }
                    }
                }
                if (Gvar.var_82[Gvar.var_2974][Gvar.var_2930] > 0 && Gvar.var_71[Gvar.var_2974][Gvar.var_2930] != 0 && Gvar.var_2977 == 0) {
                    Gvar.var_2977 = 1;
                    Gvar.var_402 = Gvar.var_82[Gvar.var_2974][Gvar.var_2930];
                    Gvar.var_314 = Gvar.var_82[Gvar.var_2974][Gvar.var_2930];
                    Gvar.enemy_list = Gvar.var_83[Gvar.var_402].Var0;
                    if (Gvar.var_83[Gvar.var_402].Var31 != 4 && Gvar.var_83[Gvar.var_402].Var31 != 5) {
                         await Func.func644(); // No = 100 スタープラチナ、No = 398 スタープラチナ・ザ・ワールドのDISCを攻撃装備して攻撃した際、敵に回避された時の動作処理
                        if (Gvar.var_2867 != 0) {
                            await Func.func626(); // 敵リスト
                            await Func.func638();
                            await Func.func705();
                        }
                    }
                }
            }
            if (Gvar.var_199 == 3) {
                if (Gvar.var_82[Gvar.var_2929][Gvar.var_2975] > 0 && Gvar.var_71[Gvar.var_2929][Gvar.var_2975] != 0 && Gvar.var_2980 == 0) {
                    Gvar.var_2980 = 1;
                    Gvar.var_402 = Gvar.var_82[Gvar.var_2929][Gvar.var_2975];
                    Gvar.var_314 = Gvar.var_82[Gvar.var_2929][Gvar.var_2975];
                    Gvar.enemy_list = Gvar.var_83[Gvar.var_402].Var0;
                    if (Gvar.var_83[Gvar.var_402].Var31 != 4 && Gvar.var_83[Gvar.var_402].Var31 != 5) {
                         await Func.func644(); // No = 100 スタープラチナ、No = 398 スタープラチナ・ザ・ワールドのDISCを攻撃装備して攻撃した際、敵に回避された時の動作処理
                        if (Gvar.var_2867 != 0) {
                            await Func.func626(); // 敵リスト
                            await Func.func638();
                            await Func.func705();
                            for (let cnt6 = 0; cnt6 < 3; ++cnt6) {
                                await Func.func337(); // メッセージ表示処理(自動)
                            }
                        }
                    }
                }
                if (Gvar.var_82[Gvar.var_2929][Gvar.var_2930] > 0 && Gvar.var_71[Gvar.var_2929][Gvar.var_2930] != 0 && Gvar.var_2984 == 0) {
                    Gvar.var_2984 = 1;
                    Gvar.var_402 = Gvar.var_82[Gvar.var_2929][Gvar.var_2930];
                    Gvar.var_314 = Gvar.var_82[Gvar.var_2929][Gvar.var_2930];
                    Gvar.enemy_list = Gvar.var_83[Gvar.var_402].Var0;
                    if (Gvar.var_83[Gvar.var_402].Var31 != 4 && Gvar.var_83[Gvar.var_402].Var31 != 5) {
                         await Func.func644(); // No = 100 スタープラチナ、No = 398 スタープラチナ・ザ・ワールドのDISCを攻撃装備して攻撃した際、敵に回避された時の動作処理
                        if (Gvar.var_2867 != 0) {
                            await Func.func626(); // 敵リスト
                            await Func.func638();
                            await Func.func705();
                            for (let cnt6 = 0; cnt6 < 3; ++cnt6) {
                                await Func.func337(); // メッセージ表示処理(自動)
                            }
                        }
                    }
                }
                if (Gvar.var_82[Gvar.var_2974][Gvar.var_2930] > 0 && Gvar.var_71[Gvar.var_2974][Gvar.var_2930] != 0 && Gvar.var_2977 == 0) {
                    Gvar.var_2977 = 1;
                    Gvar.var_402 = Gvar.var_82[Gvar.var_2974][Gvar.var_2930];
                    Gvar.var_314 = Gvar.var_82[Gvar.var_2974][Gvar.var_2930];
                    Gvar.enemy_list = Gvar.var_83[Gvar.var_402].Var0;
                    if (Gvar.var_83[Gvar.var_402].Var31 != 4 && Gvar.var_83[Gvar.var_402].Var31 != 5) {
                         await Func.func644(); // No = 100 スタープラチナ、No = 398 スタープラチナ・ザ・ワールドのDISCを攻撃装備して攻撃した際、敵に回避された時の動作処理
                        if (Gvar.var_2867 != 0) {
                            await Func.func626(); // 敵リスト
                            await Func.func638();
                            await Func.func705();
                        }
                    }
                }
            }
            if (Gvar.var_199 == 7) {
                if (Gvar.var_82[Gvar.var_2974][Gvar.var_2931] > 0 && Gvar.var_71[Gvar.var_2974][Gvar.var_2931] != 0 && Gvar.var_2982 == 0) {
                    Gvar.var_2982 = 1;
                    Gvar.var_402 = Gvar.var_82[Gvar.var_2974][Gvar.var_2931];
                    Gvar.var_314 = Gvar.var_82[Gvar.var_2974][Gvar.var_2931];
                    Gvar.enemy_list = Gvar.var_83[Gvar.var_402].Var0;
                    if (Gvar.var_83[Gvar.var_402].Var31 != 4 && Gvar.var_83[Gvar.var_402].Var31 != 5) {
                         await Func.func644(); // No = 100 スタープラチナ、No = 398 スタープラチナ・ザ・ワールドのDISCを攻撃装備して攻撃した際、敵に回避された時の動作処理
                        if (Gvar.var_2867 != 0) {
                            await Func.func626(); // 敵リスト
                            await Func.func638();
                            await Func.func705();
                            for (let cnt6 = 0; cnt6 < 3; ++cnt6) {
                                await Func.func337(); // メッセージ表示処理(自動)
                            }
                        }
                    }
                }
                if (Gvar.var_82[Gvar.var_2928][Gvar.var_2931] > 0 && Gvar.var_71[Gvar.var_2928][Gvar.var_2931] != 0 && Gvar.var_2984 == 0) {
                    Gvar.var_2984 = 1;
                    Gvar.var_402 = Gvar.var_82[Gvar.var_2928][Gvar.var_2931];
                    Gvar.var_314 = Gvar.var_82[Gvar.var_2928][Gvar.var_2931];
                    Gvar.enemy_list = Gvar.var_83[Gvar.var_402].Var0;
                    if (Gvar.var_83[Gvar.var_402].Var31 != 4 && Gvar.var_83[Gvar.var_402].Var31 != 5) {
                         await Func.func644(); // No = 100 スタープラチナ、No = 398 スタープラチナ・ザ・ワールドのDISCを攻撃装備して攻撃した際、敵に回避された時の動作処理
                        if (Gvar.var_2867 != 0) {
                            await Func.func626(); // 敵リスト
                            await Func.func638();
                            await Func.func705();
                            for (let cnt6 = 0; cnt6 < 3; ++cnt6) {
                                await Func.func337(); // メッセージ表示処理(自動)
                            }
                        }
                    }
                }
                if (Gvar.var_82[Gvar.var_2928][Gvar.var_2975] > 0 && Gvar.var_71[Gvar.var_2928][Gvar.var_2975] != 0 && Gvar.var_2979 == 0) {
                    Gvar.var_2979 = 1;
                    Gvar.var_402 = Gvar.var_82[Gvar.var_2928][Gvar.var_2975];
                    Gvar.var_314 = Gvar.var_82[Gvar.var_2928][Gvar.var_2975];
                    Gvar.enemy_list = Gvar.var_83[Gvar.var_402].Var0;
                    if (Gvar.var_83[Gvar.var_402].Var31 != 4 && Gvar.var_83[Gvar.var_402].Var31 != 5) {
                         await Func.func644(); // No = 100 スタープラチナ、No = 398 スタープラチナ・ザ・ワールドのDISCを攻撃装備して攻撃した際、敵に回避された時の動作処理
                        if (Gvar.var_2867 != 0) {
                            await Func.func626(); // 敵リスト
                            await Func.func638();
                            await Func.func705();
                        }
                    }
                }
            }
            if (Gvar.var_199 == 9) {
                if (Gvar.var_82[Gvar.var_2974][Gvar.var_2931] > 0 && Gvar.var_71[Gvar.var_2974][Gvar.var_2931] != 0 && Gvar.var_2982 == 0) {
                    Gvar.var_2982 = 1;
                    Gvar.var_402 = Gvar.var_82[Gvar.var_2974][Gvar.var_2931];
                    Gvar.var_314 = Gvar.var_82[Gvar.var_2974][Gvar.var_2931];
                    Gvar.enemy_list = Gvar.var_83[Gvar.var_402].Var0;
                    if (Gvar.var_83[Gvar.var_402].Var31 != 4 && Gvar.var_83[Gvar.var_402].Var31 != 5) {
                         await Func.func644(); // No = 100 スタープラチナ、No = 398 スタープラチナ・ザ・ワールドのDISCを攻撃装備して攻撃した際、敵に回避された時の動作処理
                        if (Gvar.var_2867 != 0) {
                            await Func.func626(); // 敵リスト
                            await Func.func638();
                            await Func.func705();
                            for (let cnt6 = 0; cnt6 < 3; ++cnt6) {
                                await Func.func337(); // メッセージ表示処理(自動)
                            }
                        }
                    }
                }
                if (Gvar.var_82[Gvar.var_2929][Gvar.var_2931] > 0 && Gvar.var_71[Gvar.var_2929][Gvar.var_2931] != 0 && Gvar.var_2984 == 0) {
                    Gvar.var_2984 = 1;
                    Gvar.var_402 = Gvar.var_82[Gvar.var_2929][Gvar.var_2931];
                    Gvar.var_314 = Gvar.var_82[Gvar.var_2929][Gvar.var_2931];
                    Gvar.enemy_list = Gvar.var_83[Gvar.var_402].Var0;
                    if (Gvar.var_83[Gvar.var_402].Var31 != 4 && Gvar.var_83[Gvar.var_402].Var31 != 5) {
                         await Func.func644(); // No = 100 スタープラチナ、No = 398 スタープラチナ・ザ・ワールドのDISCを攻撃装備して攻撃した際、敵に回避された時の動作処理
                        if (Gvar.var_2867 != 0) {
                            await Func.func626(); // 敵リスト
                            await Func.func638();
                            await Func.func705();
                            for (let cnt6 = 0; cnt6 < 3; ++cnt6) {
                                await Func.func337(); // メッセージ表示処理(自動)
                            }
                        }
                    }
                }
                if (Gvar.var_82[Gvar.var_2929][Gvar.var_2975] > 0 && Gvar.var_71[Gvar.var_2929][Gvar.var_2975] != 0 && Gvar.var_2980 == 0) {
                    Gvar.var_2980 = 1;
                    Gvar.var_402 = Gvar.var_82[Gvar.var_2929][Gvar.var_2975];
                    Gvar.var_314 = Gvar.var_82[Gvar.var_2929][Gvar.var_2975];
                    Gvar.enemy_list = Gvar.var_83[Gvar.var_402].Var0;
                    if (Gvar.var_83[Gvar.var_402].Var31 != 4 && Gvar.var_83[Gvar.var_402].Var31 != 5) {
                         await Func.func644(); // No = 100 スタープラチナ、No = 398 スタープラチナ・ザ・ワールドのDISCを攻撃装備して攻撃した際、敵に回避された時の動作処理
                        if (Gvar.var_2867 != 0) {
                            await Func.func626(); // 敵リスト
                            await Func.func638();
                            await Func.func705();
                        }
                    }
                }
            }
        }
        return;
}

export {func643}
