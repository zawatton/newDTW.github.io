import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func079(this: any) {
        Adap.dbgprt(79);
        await Func.func080(); // 各キー入力確認
        Gvar.conf_keyon = Adap.getkey(81); // キーQ 入力確認
        if (Gvar.conf_keyon == 1 && Gvar.key_Shift_on == 1) {
            await Func.func236();
            return;
        }
        // 仗助のdiscを使用した際のランダム動作処理
        if (Gvar.var_139 == 10 || Gvar.var_139 == 20 || Gvar.var_139 == 30 || Gvar.var_139 == 40) {
            if (Gvar.var_139 == 10) {
                if (Gvar.var_601 == 0) {
                    await Func.setMessage("「このヘアースタイルが",
                                            "  チンケな髪だとォ？」", 7, false, false, true);
                }
                if (Gvar.var_601 == 1) {
                    await Func.setMessage("「このヘアースタイルが",
                                            "  サザエさんみてェーだとォ？」", 7, false, false, true);
                }
                if (Gvar.var_601 == 2) {
                    await Func.setMessage("「このヘアースタイルが",
                                            "  くだらねーだとォ？」", 7, false, false, true);
                }
                if (Gvar.var_601 == 3) {
                    await Func.setMessage("「このヘアースタイルが",
                                            "  古くさいセンスだとォ？」", 7, false, false, true);
                }
            }
            if (Gvar.var_139 == 20) {
                await Func.setMessage("「たしかに聞いたぞ",
                                        "  コラ―――――――ッ！」", 7, false, false, true);
            }
            if (Gvar.var_139 == 30) {
                await Func.setMessage("「どこ隠れやがったあ――――",
                                        "  スッタコがぁ～～～～ッ」", 7, false, false, true);
            }
            if (Gvar.var_139 == 40) {
                await Func.setMessage("「けなすやつあ  ゆるさねえ～～～～",
                                        "  何者ﾝだろーと黙っちゃあいねえッ！」", 7, false, false, true);
            }
            Gvar.var_198 = 1; // メッセージウィンドウ開く
            Gvar.var_300 = 0;
            await Func.func047(); // メッセージ履歴追加処理
        }
        // ドッピオのdiscを使用した際のランダム動作処理
        if (Gvar.var_144 == 10 || Gvar.var_144 == 15 || Gvar.var_144 == 20 || Gvar.var_144 == 25 || Gvar.var_144 == 30 || Gvar.var_144 == 35 || Gvar.var_144 == 40 || Gvar.var_144 == 45) {
            if (Gvar.var_144 == 10) {
                await Func.setMessage("ﾄﾞｯﾋﾟｵ「今 ボスから電話があったんだ…",
                                        "        僕の任務は…」", 7, false, false, true);
            }
            if (Gvar.var_144 == 15) {
                await Func.setMessage("ﾄﾞｯﾋﾟｵ「えーと…  なんだっけ…」",
                                        "", 7, false, false, true);
            }
            if (Gvar.var_144 == 20) {
                await Func.setMessage("ﾄﾞｯﾋﾟｵ「…やばい…！ このままここに",
                                        "        ボケッとしてるのはやばいぞッ！」", 7, false, false, true);
            }
            if (Gvar.var_144 == 25) {
                await Func.setMessage("ﾄﾞｯﾋﾟｵ「すぐにも襲われそうだッ！」",
                                        "", 7, false, false, true);
            }
            if (Gvar.var_144 == 30) {
                await Func.setMessage("ﾄﾞｯﾋﾟｵ「ど…どこにいるんですか？",
                                        "        ボス！！」", 7, false, false, true);
            }
            if (Gvar.var_144 == 35) {
                await Func.setMessage("ﾄﾞｯﾋﾟｵ「オレの近くにいるのですかッ？」",
                                        "", 7, false, false, true);
            }
            if (Gvar.var_144 == 40) {
                await Func.setMessage("ﾄﾞｯﾋﾟｵ「いるならすぐに来て下さい！」",
                                        "", 7, false, false, true);
            }
            if (Gvar.var_144 == 45) {
                await Func.setMessage("ﾄﾞｯﾋﾟｵ「足に力が入らないんです…」",
                                        "", 7, false, false, true);
            }
        }
        if (Gvar.var_201 == 14) {
            if (Gvar.var_199 == 1) {
                Gvar.var_199 = 4;
            }
            if (Gvar.var_199 == 7) {
                Gvar.var_199 = 8;
            }
            if (Gvar.var_199 == 9) {
                Gvar.var_199 = 6;
            }
            if (Gvar.var_199 == 3) {
                Gvar.var_199 = 2;
            }
            if (Gvar.var_199 == 0) {
                Gvar.var_199 = 2;
            }
        }
        Gvar.var_423 = Gvar.var_66;
        Gvar.var_424 = Gvar.var_67;
        Gvar.var_425 = Gvar.var_66 - 1;
        if (Gvar.var_425 < 0) {
            Gvar.var_425 = 0;
        }
        Gvar.var_426 = Gvar.var_66 + 1;
        if (Gvar.var_426 > Gvar.var_33) {
            Gvar.var_426 = Gvar.var_33;
        }
        Gvar.var_427 = Gvar.var_67 + 1;
        if (Gvar.var_427 > Gvar.var_34) {
            Gvar.var_427 = Gvar.var_34;
        }
        Gvar.var_428 = Gvar.var_67 - 1;
        if (Gvar.var_428 < 0) {
            Gvar.var_428 = 0;
        }

        if (Gvar.var_144 == 0) {
            if (Gvar.var_82[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0) {
                Gvar.var_199 = 4;
                Gvar.var_243 = 1;
                await Func.func635(); // ディアボロの攻撃動作処理
                return;
            }
            if (Gvar.var_82[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0) {
                Gvar.var_199 = 6;
                Gvar.var_243 = 1;
                await Func.func635(); // ディアボロの攻撃動作処理
                return;
            }
            if (Gvar.var_82[Gvar.var_423][Gvar.var_427] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0) {
                Gvar.var_199 = 2;
                Gvar.var_243 = 1;
                await Func.func635(); // ディアボロの攻撃動作処理
                return;
            }
            if (Gvar.var_82[Gvar.var_423][Gvar.var_428] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0) {
                Gvar.var_199 = 8;
                Gvar.var_243 = 1;
                await Func.func635(); // ディアボロの攻撃動作処理
                return;
            }
            if (Gvar.var_82[Gvar.var_425][Gvar.var_427] != 0 && Gvar.var_71[Gvar.var_425][Gvar.var_427] != 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0) {
                Gvar.var_199 = 1;
                Gvar.var_243 = 1;
                await Func.func635(); // ディアボロの攻撃動作処理
                return;
            }
            if (Gvar.var_82[Gvar.var_426][Gvar.var_427] != 0 && Gvar.var_71[Gvar.var_426][Gvar.var_427] != 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0) {
                Gvar.var_199 = 3;
                Gvar.var_243 = 1;
                await Func.func635(); // ディアボロの攻撃動作処理
                return;
            }
            if (Gvar.var_82[Gvar.var_425][Gvar.var_428] != 0 && Gvar.var_71[Gvar.var_425][Gvar.var_428] != 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0) {
                Gvar.var_199 = 7;
                Gvar.var_243 = 1;
                await Func.func635(); // ディアボロの攻撃動作処理
                return;
            }
            if (Gvar.var_82[Gvar.var_426][Gvar.var_428] != 0 && Gvar.var_71[Gvar.var_426][Gvar.var_428] != 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0) {
                Gvar.var_199 = 9;
                Gvar.var_243 = 1;
                await Func.func635(); // ディアボロの攻撃動作処理
                return;
            }
        }
        Gvar.var_602 = 0;
        Gvar.var_603 = 0;
        Gvar.var_604 = 0;
        Gvar.var_605 = 0;
        Gvar.var_606 = 0;
        Gvar.var_607 = 0;
        Gvar.var_608 = 0;
        Gvar.var_609 = 0;
        if (Gvar.var_71[Gvar.var_425][Gvar.var_424] == 0 || Gvar.var_425 <= 5) {
            Gvar.var_602 = 1;
        }
        if (Gvar.var_71[Gvar.var_426][Gvar.var_424] == 0 || Gvar.var_426 >= Gvar.var_33) {
            Gvar.var_603 = 1;
        }
        if (Gvar.var_71[Gvar.var_423][Gvar.var_427] == 0 || Gvar.var_427 >= Gvar.var_34) {
            Gvar.var_604 = 1;
        }
        if (Gvar.var_71[Gvar.var_423][Gvar.var_428] == 0 || Gvar.var_428 <= 5) {
            Gvar.var_605 = 1;
        }
        if (Gvar.var_71[Gvar.var_425][Gvar.var_427] == 0 || Gvar.var_425 <= 5 || Gvar.var_427 >= Gvar.var_34) {
            Gvar.var_606 = 1;
        }
        if (Gvar.var_71[Gvar.var_425][Gvar.var_428] == 0 || Gvar.var_425 <= 5 || Gvar.var_428 <= 5) {
            Gvar.var_607 = 1;
        }
        if (Gvar.var_71[Gvar.var_426][Gvar.var_427] == 0 || Gvar.var_426 >= Gvar.var_33 || Gvar.var_427 >= Gvar.var_34) {
            Gvar.var_608 = 1;
        }
        if (Gvar.var_71[Gvar.var_426][Gvar.var_428] == 0 || Gvar.var_426 >= Gvar.var_33 || Gvar.var_428 <= 5) {
            Gvar.var_609 = 1;
        }
        Gvar.var_610 = 0;
        Gvar.var_611 = 0;
        if (Gvar.var_201 != 14 && Gvar.var_612 == 0) {
            Gvar.var_613 = Gvar.var_66;
            Gvar.var_614 = Gvar.var_67;
            Gvar.var_615 = Gvar.var_201;
            if (Gvar.var_322 == 0) {
                Gvar.var_322 = 2;
            }
            if (Gvar.var_322 == 4) {
                if (Gvar.var_76[Gvar.var_615][4][1] != 0 && Gvar.var_611 == 0) {
                    Gvar.var_66 = Gvar.var_76[Gvar.var_615][4][1];
                    Gvar.var_67 = Gvar.var_76[Gvar.var_615][4][2];
                    if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                        Gvar.var_611 = 1;
                    }
                }
                if (Gvar.var_76[Gvar.var_615][2][1] != 0 && Gvar.var_611 == 0) {
                    Gvar.var_66 = Gvar.var_76[Gvar.var_615][2][1];
                    Gvar.var_67 = Gvar.var_76[Gvar.var_615][2][2];
                    if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                        Gvar.var_611 = 1;
                    }
                }
                if (Gvar.var_76[Gvar.var_615][1][1] != 0 && Gvar.var_611 == 0) {
                    Gvar.var_66 = Gvar.var_76[Gvar.var_615][1][1];
                    Gvar.var_67 = Gvar.var_76[Gvar.var_615][1][2];
                    if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                        Gvar.var_611 = 1;
                    }
                }
                if (Gvar.var_76[Gvar.var_615][3][1] != 0 && Gvar.var_611 == 0) {
                    Gvar.var_66 = Gvar.var_76[Gvar.var_615][3][1];
                    Gvar.var_67 = Gvar.var_76[Gvar.var_615][3][2];
                    if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                        Gvar.var_611 = 1;
                    }
                }
            }
            if (Gvar.var_322 == 6) {
                if (Gvar.var_76[Gvar.var_615][1][1] != 0 && Gvar.var_611 == 0) {
                    Gvar.var_66 = Gvar.var_76[Gvar.var_615][1][1];
                    Gvar.var_67 = Gvar.var_76[Gvar.var_615][1][2];
                    if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                        Gvar.var_611 = 1;
                    }
                }
                if (Gvar.var_76[Gvar.var_615][3][1] != 0 && Gvar.var_611 == 0) {
                    Gvar.var_66 = Gvar.var_76[Gvar.var_615][3][1];
                    Gvar.var_67 = Gvar.var_76[Gvar.var_615][3][2];
                    if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                        Gvar.var_611 = 1;
                    }
                }
                if (Gvar.var_76[Gvar.var_615][4][1] != 0 && Gvar.var_611 == 0) {
                    Gvar.var_66 = Gvar.var_76[Gvar.var_615][4][1];
                    Gvar.var_67 = Gvar.var_76[Gvar.var_615][4][2];
                    if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                        Gvar.var_611 = 1;
                    }
                }
                if (Gvar.var_76[Gvar.var_615][2][1] != 0 && Gvar.var_611 == 0) {
                    Gvar.var_66 = Gvar.var_76[Gvar.var_615][2][1];
                    Gvar.var_67 = Gvar.var_76[Gvar.var_615][2][2];
                    if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                        Gvar.var_611 = 1;
                    }
                }
            }
            if (Gvar.var_322 == 8) {
                if (Gvar.var_76[Gvar.var_615][2][1] != 0 && Gvar.var_611 == 0) {
                    Gvar.var_66 = Gvar.var_76[Gvar.var_615][2][1];
                    Gvar.var_67 = Gvar.var_76[Gvar.var_615][2][2];
                    if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                        Gvar.var_611 = 1;
                    }
                }
                if (Gvar.var_76[Gvar.var_615][1][1] != 0 && Gvar.var_611 == 0) {
                    Gvar.var_66 = Gvar.var_76[Gvar.var_615][1][1];
                    Gvar.var_67 = Gvar.var_76[Gvar.var_615][1][2];
                    if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                        Gvar.var_611 = 1;
                    }
                }
                if (Gvar.var_76[Gvar.var_615][3][1] != 0 && Gvar.var_611 == 0) {
                    Gvar.var_66 = Gvar.var_76[Gvar.var_615][3][1];
                    Gvar.var_67 = Gvar.var_76[Gvar.var_615][3][2];
                    if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                        Gvar.var_611 = 1;
                    }
                }
                if (Gvar.var_76[Gvar.var_615][4][1] != 0 && Gvar.var_611 == 0) {
                    Gvar.var_66 = Gvar.var_76[Gvar.var_615][4][1];
                    Gvar.var_67 = Gvar.var_76[Gvar.var_615][4][2];
                    if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                        Gvar.var_611 = 1;
                    }
                }
            }
            if (Gvar.var_322 == 2) {
                if (Gvar.var_76[Gvar.var_615][3][1] != 0 && Gvar.var_611 == 0) {
                    Gvar.var_66 = Gvar.var_76[Gvar.var_615][3][1];
                    Gvar.var_67 = Gvar.var_76[Gvar.var_615][3][2];
                    if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                        Gvar.var_611 = 1;
                    }
                }
                if (Gvar.var_76[Gvar.var_615][4][1] != 0 && Gvar.var_611 == 0) {
                    Gvar.var_66 = Gvar.var_76[Gvar.var_615][4][1];
                    Gvar.var_67 = Gvar.var_76[Gvar.var_615][4][2];
                    if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                        Gvar.var_611 = 1;
                    }
                }
                if (Gvar.var_76[Gvar.var_615][2][1] != 0 && Gvar.var_611 == 0) {
                    Gvar.var_66 = Gvar.var_76[Gvar.var_615][2][1];
                    Gvar.var_67 = Gvar.var_76[Gvar.var_615][2][2];
                    if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                        Gvar.var_611 = 1;
                    }
                }
                if (Gvar.var_76[Gvar.var_615][1][1] != 0 && Gvar.var_611 == 0) {
                    Gvar.var_66 = Gvar.var_76[Gvar.var_615][1][1];
                    Gvar.var_67 = Gvar.var_76[Gvar.var_615][1][2];
                    if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                        Gvar.var_611 = 1;
                    }
                }
            }
            if (Gvar.var_144 == 0) {
                Gvar.var_616 = 1;
                for (let cnt3 = 0; cnt3 < Gvar.var_97; ++cnt3) {
                    if (Gvar.var_83[Gvar.var_616].Var0 != 0 && Gvar.var_83[Gvar.var_616].Var0 != 53 && Gvar.var_83[Gvar.var_616].Var30 == 0 && Gvar.var_201 == Gvar.var_83[Gvar.var_616].Var10) {
                        Gvar.var_66 = Gvar.var_83[Gvar.var_616].Var1;
                        Gvar.var_67 = Gvar.var_83[Gvar.var_616].Var2;
                        Gvar.var_611 = 1;
                        break;
                    }
                    if (Gvar.var_83[Gvar.var_616].Var10 == 14 && Gvar.var_201 != 14 && Gvar.var_83[Gvar.var_616].Var0 != 0 && Gvar.var_83[Gvar.var_616].Var0 != 53 && Gvar.var_83[Gvar.var_616].Var30 == 0) {
                        if (Gvar.var_71[Gvar.var_425][Gvar.var_424] == Gvar.var_201 || Gvar.var_71[Gvar.var_426][Gvar.var_424] == Gvar.var_201 || Gvar.var_71[Gvar.var_423][Gvar.var_427] == Gvar.var_201 || Gvar.var_71[Gvar.var_423][Gvar.var_428] == Gvar.var_201) {
                            Gvar.var_66 = Gvar.var_83[Gvar.var_616].Var1;
                            Gvar.var_67 = Gvar.var_83[Gvar.var_616].Var2;
                            Gvar.var_611 = 1;
                            break;
                        }
                    }
                    Gvar.var_616++;
                }
            }
            if (Gvar.var_611 == 1) {
                if (Gvar.var_66 < Gvar.var_423 && Gvar.var_67 > Gvar.var_424) {
                    if (Gvar.var_610 == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0 && Gvar.var_606 != 1 && Gvar.var_71[Gvar.var_425][Gvar.var_427] != 13 && Gvar.var_82[Gvar.var_425][Gvar.var_427] == 0) {
                        Gvar.var_423 = Gvar.var_423 - 1;
                        Gvar.var_424 = Gvar.var_424 + 1;
                        Gvar.var_199 = 1;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_425 == Gvar.var_66) {
                        if (Gvar.var_610 == 0 && Gvar.var_604 != 1 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 13 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0) {
                            Gvar.var_424 = Gvar.var_424 + 1;
                            Gvar.var_199 = 2;
                            Gvar.var_610 = 1;
                        }
                        if (Gvar.var_610 == 0 && Gvar.var_602 != 1 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 13 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0) {
                            Gvar.var_423 = Gvar.var_423 - 1;
                            Gvar.var_199 = 4;
                            Gvar.var_610 = 1;
                        }
                    }
                    if (Gvar.var_427 == Gvar.var_67) {
                        if (Gvar.var_610 == 0 && Gvar.var_602 != 1 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 13 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0) {
                            Gvar.var_423 = Gvar.var_423 - 1;
                            Gvar.var_199 = 4;
                            Gvar.var_610 = 1;
                        }
                        if (Gvar.var_610 == 0 && Gvar.var_604 != 1 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 13 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0) {
                            Gvar.var_424 = Gvar.var_424 + 1;
                            Gvar.var_199 = 2;
                            Gvar.var_610 = 1;
                        }
                    }
                    if (Gvar.var_610 == 0 && Gvar.var_604 != 1 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 13 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0) {
                        Gvar.var_424 = Gvar.var_424 + 1;
                        Gvar.var_199 = 2;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_610 == 0 && Gvar.var_602 != 1 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 13 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0) {
                        Gvar.var_423 = Gvar.var_423 - 1;
                        Gvar.var_199 = 4;
                        Gvar.var_610 = 1;
                    }
                }
                if (Gvar.var_66 < Gvar.var_423 && Gvar.var_67 < Gvar.var_424) {
                    if (Gvar.var_610 == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0 && Gvar.var_607 != 1 && Gvar.var_71[Gvar.var_425][Gvar.var_428] != 13 && Gvar.var_82[Gvar.var_425][Gvar.var_428] == 0) {
                        Gvar.var_423 = Gvar.var_423 - 1;
                        Gvar.var_424 = Gvar.var_424 - 1;
                        Gvar.var_199 = 7;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_425 == Gvar.var_66) {
                        if (Gvar.var_610 == 0 && Gvar.var_605 != 1 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 13 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0) {
                            Gvar.var_424 = Gvar.var_424 - 1;
                            Gvar.var_199 = 8;
                            Gvar.var_610 = 1;
                        }
                        if (Gvar.var_610 == 0 && Gvar.var_602 != 1 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 13 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0) {
                            Gvar.var_423 = Gvar.var_423 - 1;
                            Gvar.var_199 = 4;
                            Gvar.var_610 = 1;
                        }
                    }
                    if (Gvar.var_428 == Gvar.var_67) {
                        if (Gvar.var_610 == 0 && Gvar.var_602 != 1 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 13 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0) {
                            Gvar.var_423 = Gvar.var_423 - 1;
                            Gvar.var_199 = 4;
                            Gvar.var_610 = 1;
                        }
                        if (Gvar.var_610 == 0 && Gvar.var_605 != 1 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 13 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0) {
                            Gvar.var_424 = Gvar.var_424 - 1;
                            Gvar.var_199 = 8;
                            Gvar.var_610 = 1;
                        }
                    }
                    if (Gvar.var_610 == 0 && Gvar.var_605 != 1 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 13 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0) {
                        Gvar.var_424 = Gvar.var_424 - 1;
                        Gvar.var_199 = 8;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_610 == 0 && Gvar.var_602 != 1 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 13 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0) {
                        Gvar.var_423 = Gvar.var_423 - 1;
                        Gvar.var_199 = 4;
                        Gvar.var_610 = 1;
                    }
                }
                if (Gvar.var_66 > Gvar.var_423 && Gvar.var_67 > Gvar.var_424) {
                    if (Gvar.var_610 == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0 && Gvar.var_608 != 1 && Gvar.var_71[Gvar.var_426][Gvar.var_427] != 13 && Gvar.var_82[Gvar.var_426][Gvar.var_427] == 0) {
                        Gvar.var_423 = Gvar.var_423 + 1;
                        Gvar.var_424 = Gvar.var_424 + 1;
                        Gvar.var_199 = 3;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_426 == Gvar.var_66) {
                        if (Gvar.var_610 == 0 && Gvar.var_604 != 1 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 13 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0) {
                            Gvar.var_424 = Gvar.var_424 + 1;
                            Gvar.var_199 = 2;
                            Gvar.var_610 = 1;
                        }
                        if (Gvar.var_610 == 0 && Gvar.var_603 != 1 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 13 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0) {
                            Gvar.var_423 = Gvar.var_423 + 1;
                            Gvar.var_199 = 6;
                            Gvar.var_610 = 1;
                        }
                    }
                    if (Gvar.var_427 == Gvar.var_67) {
                        if (Gvar.var_610 == 0 && Gvar.var_603 != 1 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 13 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0) {
                            Gvar.var_423 = Gvar.var_423 + 1;
                            Gvar.var_199 = 6;
                            Gvar.var_610 = 1;
                        }
                        if (Gvar.var_610 == 0 && Gvar.var_604 != 1 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 13 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0) {
                            Gvar.var_424 = Gvar.var_424 + 1;
                            Gvar.var_199 = 2;
                            Gvar.var_610 = 1;
                        }
                    }
                    if (Gvar.var_610 == 0 && Gvar.var_604 != 1 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 13 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0) {
                        Gvar.var_424 = Gvar.var_424 + 1;
                        Gvar.var_199 = 2;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_610 == 0 && Gvar.var_603 != 1 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 13 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0) {
                        Gvar.var_423 = Gvar.var_423 + 1;
                        Gvar.var_199 = 6;
                        Gvar.var_610 = 1;
                    }
                }
                if (Gvar.var_66 > Gvar.var_423 && Gvar.var_67 < Gvar.var_424) {
                    if (Gvar.var_610 == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0 && Gvar.var_609 != 1 && Gvar.var_71[Gvar.var_426][Gvar.var_428] != 13 && Gvar.var_82[Gvar.var_426][Gvar.var_428] == 0) {
                        Gvar.var_423 = Gvar.var_423 + 1;
                        Gvar.var_424 = Gvar.var_424 - 1;
                        Gvar.var_199 = 9;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_426 == Gvar.var_66) {
                        if (Gvar.var_610 == 0 && Gvar.var_605 != 1 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 13 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0) {
                            Gvar.var_424 = Gvar.var_424 - 1;
                            Gvar.var_199 = 8;
                            Gvar.var_610 = 1;
                        }
                        if (Gvar.var_610 == 0 && Gvar.var_603 != 1 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 13 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0) {
                            Gvar.var_423 = Gvar.var_423 + 1;
                            Gvar.var_199 = 6;
                            Gvar.var_610 = 1;
                        }
                    }
                    if (Gvar.var_428 == Gvar.var_67) {
                        if (Gvar.var_610 == 0 && Gvar.var_603 != 1 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 13 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0) {
                            Gvar.var_423 = Gvar.var_423 + 1;
                            Gvar.var_199 = 6;
                            Gvar.var_610 = 1;
                        }
                        if (Gvar.var_610 == 0 && Gvar.var_605 != 1 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 13 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0) {
                            Gvar.var_424 = Gvar.var_424 - 1;
                            Gvar.var_199 = 8;
                            Gvar.var_610 = 1;
                        }
                    }
                    if (Gvar.var_610 == 0 && Gvar.var_605 != 1 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 13 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0) {
                        Gvar.var_424 = Gvar.var_424 - 1;
                        Gvar.var_199 = 8;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_610 == 0 && Gvar.var_603 != 1 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 13 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0) {
                        Gvar.var_423 = Gvar.var_423 + 1;
                        Gvar.var_199 = 6;
                        Gvar.var_610 = 1;
                    }
                }
                if (Gvar.var_66 < Gvar.var_423 && Gvar.var_67 == Gvar.var_424) {
                    if (Gvar.var_610 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0 && Gvar.var_602 != 1 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 13) {
                        Gvar.var_423 = Gvar.var_423 - 1;
                        Gvar.var_199 = 4;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_610 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0 && Gvar.var_607 != 1 && Gvar.var_71[Gvar.var_425][Gvar.var_428] != 13) {
                        Gvar.var_423 = Gvar.var_423 - 1;
                        Gvar.var_424 = Gvar.var_424 - 1;
                        Gvar.var_199 = 7;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_610 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0 && Gvar.var_606 != 1 && Gvar.var_71[Gvar.var_425][Gvar.var_427] != 13) {
                        Gvar.var_423 = Gvar.var_423 - 1;
                        Gvar.var_424 = Gvar.var_424 + 1;
                        Gvar.var_199 = 1;
                        Gvar.var_610 = 1;
                    }
                }
                if (Gvar.var_66 > Gvar.var_423 && Gvar.var_67 == Gvar.var_424) {
                    if (Gvar.var_610 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0 && Gvar.var_603 != 1 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 13) {
                        Gvar.var_423 = Gvar.var_423 + 1;
                        Gvar.var_199 = 6;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_610 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0 && Gvar.var_608 != 1 && Gvar.var_71[Gvar.var_426][Gvar.var_427] != 13) {
                        Gvar.var_423 = Gvar.var_423 + 1;
                        Gvar.var_424 = Gvar.var_424 + 1;
                        Gvar.var_199 = 3;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_610 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0 && Gvar.var_609 != 1 && Gvar.var_71[Gvar.var_426][Gvar.var_428] != 13) {
                        Gvar.var_423 = Gvar.var_423 + 1;
                        Gvar.var_424 = Gvar.var_424 - 1;
                        Gvar.var_199 = 9;
                        Gvar.var_610 = 1;
                    }
                }
                if (Gvar.var_66 == Gvar.var_423 && Gvar.var_67 < Gvar.var_424) {
                    if (Gvar.var_610 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0 && Gvar.var_605 != 1 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 13) {
                        Gvar.var_424 = Gvar.var_424 - 1;
                        Gvar.var_199 = 8;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_610 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0 && Gvar.var_609 != 1 && Gvar.var_71[Gvar.var_426][Gvar.var_428] != 13) {
                        Gvar.var_423 = Gvar.var_423 + 1;
                        Gvar.var_424 = Gvar.var_424 - 1;
                        Gvar.var_199 = 9;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_610 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0 && Gvar.var_607 != 1 && Gvar.var_71[Gvar.var_425][Gvar.var_428] != 13) {
                        Gvar.var_423 = Gvar.var_423 - 1;
                        Gvar.var_424 = Gvar.var_424 - 1;
                        Gvar.var_199 = 7;
                        Gvar.var_610 = 1;
                    }
                }
                if (Gvar.var_66 == Gvar.var_423 && Gvar.var_67 > Gvar.var_424) {
                    if (Gvar.var_610 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0 && Gvar.var_604 != 1 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 13) {
                        Gvar.var_424 = Gvar.var_424 + 1;
                        Gvar.var_199 = 2;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_610 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0 && Gvar.var_606 != 1 && Gvar.var_71[Gvar.var_425][Gvar.var_427] != 13) {
                        Gvar.var_423 = Gvar.var_423 - 1;
                        Gvar.var_424 = Gvar.var_424 + 1;
                        Gvar.var_199 = 1;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_610 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0 && Gvar.var_608 != 1 && Gvar.var_71[Gvar.var_426][Gvar.var_427] != 13) {
                        Gvar.var_423 = Gvar.var_423 + 1;
                        Gvar.var_424 = Gvar.var_424 + 1;
                        Gvar.var_199 = 3;
                        Gvar.var_610 = 1;
                    }
                }
                if (Gvar.var_610 == 0) {
                    Gvar.var_617 = 0;
                    if (Gvar.var_617 == 0 && Gvar.var_322 == 2) {
                        Gvar.var_322 = 4;
                        Gvar.var_617 = 1;
                    }
                    if (Gvar.var_617 == 0 && Gvar.var_322 == 6) {
                        Gvar.var_322 = 2;
                        Gvar.var_617 = 1;
                    }
                    if (Gvar.var_617 == 0 && Gvar.var_322 == 8) {
                        Gvar.var_322 = 6;
                        Gvar.var_617 = 1;
                    }
                    if (Gvar.var_617 == 0 && Gvar.var_322 == 4) {
                        Gvar.var_322 = 8;
                        Gvar.var_617 = 1;
                    }
                    if (Gvar.var_617 == 0) {
                        Gvar.var_322 = 2;
                    }
                    Gvar.var_66 = Gvar.var_423;
                    Gvar.var_67 = Gvar.var_424;
                    Gvar.var_217 = 1;
                }
                if (Gvar.var_610 == 1) {
                    Gvar.var_66 = Gvar.var_423;
                    Gvar.var_67 = Gvar.var_424;
                }
            }
        }
        if (Gvar.var_201 == 14 || Gvar.var_611 == 0) {
            if (Gvar.var_199 == 2 && Gvar.var_610 == 0) {
                if (Gvar.var_610 == 0 && Gvar.var_604 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 13) {
                    Gvar.var_67 = Gvar.var_67 + 1;
                    Gvar.var_199 = 2;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_603 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 13) {
                    Gvar.var_66 = Gvar.var_66 + 1;
                    Gvar.var_199 = 6;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_602 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 13) {
                    Gvar.var_66 = Gvar.var_66 - 1;
                    Gvar.var_199 = 4;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_605 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 13) {
                    Gvar.var_67 = Gvar.var_67 - 1;
                    Gvar.var_199 = 8;
                    Gvar.var_610 = 1;
                }
            }
            if (Gvar.var_199 == 4 && Gvar.var_610 == 0) {
                if (Gvar.var_610 == 0 && Gvar.var_602 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 13) {
                    Gvar.var_66 = Gvar.var_66 - 1;
                    Gvar.var_199 = 4;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_604 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 13) {
                    Gvar.var_67 = Gvar.var_67 + 1;
                    Gvar.var_199 = 2;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_605 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 13) {
                    Gvar.var_67 = Gvar.var_67 - 1;
                    Gvar.var_199 = 8;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_603 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 13) {
                    Gvar.var_66 = Gvar.var_66 + 1;
                    Gvar.var_199 = 6;
                    Gvar.var_610 = 1;
                }
            }
            if (Gvar.var_199 == 8 && Gvar.var_610 == 0) {
                if (Gvar.var_610 == 0 && Gvar.var_605 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 13) {
                    Gvar.var_67 = Gvar.var_67 - 1;
                    Gvar.var_199 = 8;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_602 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 13) {
                    Gvar.var_66 = Gvar.var_66 - 1;
                    Gvar.var_199 = 4;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_603 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 13) {
                    Gvar.var_66 = Gvar.var_66 + 1;
                    Gvar.var_199 = 6;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_604 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 13) {
                    Gvar.var_67 = Gvar.var_67 + 1;
                    Gvar.var_199 = 2;
                    Gvar.var_610 = 1;
                }
            }
            if (Gvar.var_199 == 6 && Gvar.var_610 == 0) {
                if (Gvar.var_610 == 0 && Gvar.var_603 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 13) {
                    Gvar.var_66 = Gvar.var_66 + 1;
                    Gvar.var_199 = 6;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_605 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 13) {
                    Gvar.var_67 = Gvar.var_67 - 1;
                    Gvar.var_199 = 8;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_604 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 13) {
                    Gvar.var_67 = Gvar.var_67 + 1;
                    Gvar.var_199 = 2;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_602 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 13) {
                    Gvar.var_66 = Gvar.var_66 - 1;
                    Gvar.var_199 = 4;
                    Gvar.var_610 = 1;
                }
            }
            if (Gvar.var_199 == 3 && Gvar.var_610 == 0) {
                if (Gvar.var_610 == 0 && Gvar.var_604 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 13) {
                    Gvar.var_67 = Gvar.var_67 + 1;
                    Gvar.var_199 = 2;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_603 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 13) {
                    Gvar.var_66 = Gvar.var_66 + 1;
                    Gvar.var_199 = 6;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_602 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 13) {
                    Gvar.var_66 = Gvar.var_66 - 1;
                    Gvar.var_199 = 4;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_605 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 13) {
                    Gvar.var_67 = Gvar.var_67 - 1;
                    Gvar.var_199 = 8;
                    Gvar.var_610 = 1;
                }
            }
            if (Gvar.var_199 == 1 && Gvar.var_610 == 0) {
                if (Gvar.var_610 == 0 && Gvar.var_602 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 13) {
                    Gvar.var_66 = Gvar.var_66 - 1;
                    Gvar.var_199 = 4;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_604 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 13) {
                    Gvar.var_67 = Gvar.var_67 + 1;
                    Gvar.var_199 = 2;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_605 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 13) {
                    Gvar.var_67 = Gvar.var_67 - 1;
                    Gvar.var_199 = 8;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_603 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 13) {
                    Gvar.var_66 = Gvar.var_66 + 1;
                    Gvar.var_199 = 6;
                    Gvar.var_610 = 1;
                }
            }
            if (Gvar.var_199 == 7 && Gvar.var_610 == 0) {
                if (Gvar.var_610 == 0 && Gvar.var_605 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 13) {
                    Gvar.var_67 = Gvar.var_67 - 1;
                    Gvar.var_199 = 8;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_602 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 13) {
                    Gvar.var_66 = Gvar.var_66 - 1;
                    Gvar.var_199 = 4;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_603 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 13) {
                    Gvar.var_66 = Gvar.var_66 + 1;
                    Gvar.var_199 = 6;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_604 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 13) {
                    Gvar.var_67 = Gvar.var_67 + 1;
                    Gvar.var_199 = 2;
                    Gvar.var_610 = 1;
                }
            }
            if (Gvar.var_199 == 9 && Gvar.var_610 == 0) {
                if (Gvar.var_610 == 0 && Gvar.var_603 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 13) {
                    Gvar.var_66 = Gvar.var_66 + 1;
                    Gvar.var_199 = 6;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_605 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 13) {
                    Gvar.var_67 = Gvar.var_67 - 1;
                    Gvar.var_199 = 8;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_604 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 13) {
                    Gvar.var_67 = Gvar.var_67 + 1;
                    Gvar.var_199 = 2;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_602 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 13) {
                    Gvar.var_66 = Gvar.var_66 - 1;
                    Gvar.var_199 = 4;
                    Gvar.var_610 = 1;
                }
            }
            if (Gvar.var_610 == 0) {
                Gvar.var_618 = 0;
                if (Gvar.var_618 == 0 && Gvar.var_199 == 2) {
                    Gvar.var_199 = 8;
                    Gvar.var_618 = 1;
                }
                if (Gvar.var_618 == 0 && Gvar.var_199 == 8) {
                    Gvar.var_199 = 2;
                    Gvar.var_618 = 1;
                }
                if (Gvar.var_618 == 0 && Gvar.var_199 == 6) {
                    Gvar.var_199 = 4;
                    Gvar.var_618 = 1;
                }
                if (Gvar.var_618 == 0 && Gvar.var_199 == 4) {
                    Gvar.var_199 = 6;
                    Gvar.var_618 = 1;
                }
                if (Gvar.var_618 == 0 && Gvar.var_199 == 1) {
                    Gvar.var_199 = 4;
                    Gvar.var_618 = 1;
                }
                if (Gvar.var_618 == 0 && Gvar.var_199 == 3) {
                    Gvar.var_199 = 2;
                    Gvar.var_618 = 1;
                }
                if (Gvar.var_618 == 0 && Gvar.var_199 == 7) {
                    Gvar.var_199 = 8;
                    Gvar.var_618 = 1;
                }
                if (Gvar.var_618 == 0 && Gvar.var_199 == 9) {
                    Gvar.var_199 = 6;
                    Gvar.var_618 = 1;
                }
                Gvar.var_217 = 1;
                await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
                return;
            }
        }
        await Func.func015(); // ディアボロの移動処理(座標計算処理)
        return;
}

export {func079}
