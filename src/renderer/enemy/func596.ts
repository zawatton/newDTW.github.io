/**
 * func596 — func596 リゾットの刃物生成動作処理
 *
 * (org原典: newDTW_func5)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

async function func596(this: any) {
        Adap.dbgprt(596);
        Gvar.var_2843 = 0;
        Gvar.var_2844 = 0;
        Gvar.var_2845 = 0;
        Gvar.var_2782 = Gvar.var_83[Gvar.var_673].Var1;
        Gvar.var_2783 = Gvar.var_83[Gvar.var_673].Var2;
        Gvar.var_2784 = Gvar.var_83[Gvar.var_673].Var1;
        Gvar.var_2785 = Gvar.var_83[Gvar.var_673].Var1;
        Gvar.var_2786 = Gvar.var_83[Gvar.var_673].Var2;
        Gvar.var_2787 = Gvar.var_83[Gvar.var_673].Var2;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            if (Gvar.var_65[Gvar.var_2784][Gvar.var_2783] == 1) {
                Gvar.var_2843 = cnt1; // 0.1405 カウンターがリンクしていなかったので修正 cnt2 → cnt1
                Gvar.var_2845 = 6;
                break;
            }
            if (Gvar.var_65[Gvar.var_2785][Gvar.var_2783] == 1) {
                Gvar.var_2843 = cnt1; // 0.1405 カウンターがリンクしていなかったので修正 cnt2 → cnt1
                Gvar.var_2845 = 4;
                break;
            }
            if (Gvar.var_65[Gvar.var_2782][Gvar.var_2786] == 1) {
                Gvar.var_2843 = cnt1; // 0.1405 カウンターがリンクしていなかったので修正 cnt2 → cnt1
                Gvar.var_2845 = 2;
                break;
            }
            if (Gvar.var_65[Gvar.var_2782][Gvar.var_2787] == 1) {
                Gvar.var_2843 = cnt1; // 0.1405 カウンターがリンクしていなかったので修正 cnt2 → cnt1
                Gvar.var_2845 = 8;
                break;
            }
            if (Gvar.var_65[Gvar.var_2785][Gvar.var_2786] == 1) {
                Gvar.var_2843 = cnt1; // 0.1405 カウンターがリンクしていなかったので修正 cnt2 → cnt1
                Gvar.var_2845 = 1;
                break;
            }
            if (Gvar.var_65[Gvar.var_2784][Gvar.var_2786] == 1) {
                Gvar.var_2843 = cnt1; // 0.1405 カウンターがリンクしていなかったので修正 cnt2 → cnt1
                Gvar.var_2845 = 3;
                break;
            }
            if (Gvar.var_65[Gvar.var_2785][Gvar.var_2787] == 1) {
                Gvar.var_2843 = cnt1; // 0.1405 カウンターがリンクしていなかったので修正 cnt2 → cnt1
                Gvar.var_2845 = 7;
                break;
            }
            if (Gvar.var_65[Gvar.var_2784][Gvar.var_2787] == 1) {
                Gvar.var_2843 = cnt1; // 0.1405 カウンターがリンクしていなかったので修正 cnt2 → cnt1
                Gvar.var_2845 = 9;
                break;
            }
            Gvar.var_2784 = Gvar.var_2784 + 1;
            if (Gvar.var_2784 > Gvar.var_33) {
                Gvar.var_2784 = Gvar.var_33;
            }
            Gvar.var_2785 = Gvar.var_2785 - 1;
            if (Gvar.var_2785 < 0) {
                Gvar.var_2785 = 0;
            }
            Gvar.var_2786 = Gvar.var_2786 + 1;
            if (Gvar.var_2786 > Gvar.var_34) {
                Gvar.var_2786 = Gvar.var_34;
            }
            Gvar.var_2787 = Gvar.var_2787 - 1;
            if (Gvar.var_2787 < 0) {
                Gvar.var_2787 = 0;
            }
        }
        if (Gvar.var_2843 != 0) {
            Gvar.var_2782 = Gvar.var_83[Gvar.var_673].Var1;
            Gvar.var_2783 = Gvar.var_83[Gvar.var_673].Var2;
            Gvar.var_2784 = Gvar.var_83[Gvar.var_673].Var1;
            Gvar.var_2785 = Gvar.var_83[Gvar.var_673].Var1;
            Gvar.var_2786 = Gvar.var_83[Gvar.var_673].Var2;
            Gvar.var_2787 = Gvar.var_83[Gvar.var_673].Var2;
            for (let cnt2 = 0; cnt2 < Gvar.var_2843; ++cnt2) {
                if (Gvar.var_2845 == 6 && Gvar.var_77[Gvar.var_2784][Gvar.var_2783] != 0 && Gvar.var_82[Gvar.var_2784][Gvar.var_2783] == 0 && Gvar.var_65[Gvar.var_2784][Gvar.var_2783] == 0) {
                    Gvar.var_2205 = Gvar.var_77[Gvar.var_2784][Gvar.var_2783];
                    if (Gvar.var_78[Gvar.var_2205].Var0 == 650 || Gvar.var_78[Gvar.var_2205].Var0 == 651 || Gvar.var_78[Gvar.var_2205].Var0 == 653) {
                        Gvar.var_2844 = 1;
                        break;
                    }
                }
                if (Gvar.var_2845 == 4 && Gvar.var_77[Gvar.var_2785][Gvar.var_2783] != 0 && Gvar.var_82[Gvar.var_2785][Gvar.var_2783] == 0 && Gvar.var_65[Gvar.var_2785][Gvar.var_2783] == 0) {
                    Gvar.var_2205 = Gvar.var_77[Gvar.var_2785][Gvar.var_2783];
                    if (Gvar.var_78[Gvar.var_2205].Var0 == 650 || Gvar.var_78[Gvar.var_2205].Var0 == 651 || Gvar.var_78[Gvar.var_2205].Var0 == 653) {
                        Gvar.var_2844 = 1;
                        break;
                    }
                }
                if (Gvar.var_2845 == 2 && Gvar.var_77[Gvar.var_2782][Gvar.var_2786] != 0 && Gvar.var_82[Gvar.var_2782][Gvar.var_2786] == 0 && Gvar.var_65[Gvar.var_2782][Gvar.var_2786] == 0) {
                    Gvar.var_2205 = Gvar.var_77[Gvar.var_2782][Gvar.var_2786];
                    if (Gvar.var_78[Gvar.var_2205].Var0 == 650 || Gvar.var_78[Gvar.var_2205].Var0 == 651 || Gvar.var_78[Gvar.var_2205].Var0 == 653) {
                        Gvar.var_2844 = 1;
                        break;
                    }
                }
                if (Gvar.var_2845 == 8 && Gvar.var_77[Gvar.var_2782][Gvar.var_2787] != 0 && Gvar.var_82[Gvar.var_2782][Gvar.var_2787] == 0 && Gvar.var_65[Gvar.var_2782][Gvar.var_2787] == 0) {
                    Gvar.var_2205 = Gvar.var_77[Gvar.var_2782][Gvar.var_2787];
                    if (Gvar.var_78[Gvar.var_2205].Var0 == 650 || Gvar.var_78[Gvar.var_2205].Var0 == 651 || Gvar.var_78[Gvar.var_2205].Var0 == 653) {
                        Gvar.var_2844 = 1;
                        break;
                    }
                }
                if (Gvar.var_2845 == 1 && Gvar.var_77[Gvar.var_2785][Gvar.var_2786] != 0 && Gvar.var_82[Gvar.var_2785][Gvar.var_2786] == 0 && Gvar.var_65[Gvar.var_2785][Gvar.var_2786] == 0) {
                    Gvar.var_2205 = Gvar.var_77[Gvar.var_2785][Gvar.var_2786];
                    if (Gvar.var_78[Gvar.var_2205].Var0 == 650 || Gvar.var_78[Gvar.var_2205].Var0 == 651 || Gvar.var_78[Gvar.var_2205].Var0 == 653) {
                        Gvar.var_2844 = 1;
                        break;
                    }
                }
                if (Gvar.var_2845 == 3 && Gvar.var_77[Gvar.var_2784][Gvar.var_2786] != 0 && Gvar.var_82[Gvar.var_2784][Gvar.var_2786] == 0 && Gvar.var_65[Gvar.var_2784][Gvar.var_2786] == 0) {
                    Gvar.var_2205 = Gvar.var_77[Gvar.var_2784][Gvar.var_2786];
                    if (Gvar.var_78[Gvar.var_2205].Var0 == 650 || Gvar.var_78[Gvar.var_2205].Var0 == 651 || Gvar.var_78[Gvar.var_2205].Var0 == 653) {
                        Gvar.var_2844 = 1;
                        break;
                    }
                }
                if (Gvar.var_2845 == 7 && Gvar.var_77[Gvar.var_2785][Gvar.var_2787] != 0 && Gvar.var_82[Gvar.var_2785][Gvar.var_2787] == 0 && Gvar.var_65[Gvar.var_2785][Gvar.var_2787] == 0) {
                    Gvar.var_2205 = Gvar.var_77[Gvar.var_2785][Gvar.var_2787];
                    if (Gvar.var_78[Gvar.var_2205].Var0 == 650 || Gvar.var_78[Gvar.var_2205].Var0 == 651 || Gvar.var_78[Gvar.var_2205].Var0 == 653) {
                        Gvar.var_2844 = 1;
                        break;
                    }
                }
                if (Gvar.var_2845 == 9 && Gvar.var_77[Gvar.var_2784][Gvar.var_2787] != 0 && Gvar.var_82[Gvar.var_2784][Gvar.var_2787] == 0 && Gvar.var_65[Gvar.var_2784][Gvar.var_2787] == 0) {
                    Gvar.var_2205 = Gvar.var_77[Gvar.var_2784][Gvar.var_2787];
                    if (Gvar.var_78[Gvar.var_2205].Var0 == 650 || Gvar.var_78[Gvar.var_2205].Var0 == 651 || Gvar.var_78[Gvar.var_2205].Var0 == 653) {
                        Gvar.var_2844 = 1;
                        break;
                    }
                }
                Gvar.var_2784 = Gvar.var_2784 + 1;
                if (Gvar.var_2784 > Gvar.var_33) {
                    Gvar.var_2784 = Gvar.var_33;
                }
                Gvar.var_2785 = Gvar.var_2785 - 1;
                if (Gvar.var_2785 < 0) {
                    Gvar.var_2785 = 0;
                }
                Gvar.var_2786 = Gvar.var_2786 + 1;
                if (Gvar.var_2786 > Gvar.var_34) {
                    Gvar.var_2786 = Gvar.var_34;
                }
                Gvar.var_2787 = Gvar.var_2787 - 1;
                if (Gvar.var_2787 < 0) {
                    Gvar.var_2787 = 0;
                }
            }
        }
        if (Gvar.var_2844 == 1) {
            Gvar.var_2846 = Gvar.var_78[Gvar.var_2205].Var1;
            Gvar.var_2847 = Gvar.var_78[Gvar.var_2205].Var2;
            Gvar.var_1476 = (Gvar.var_78[Gvar.var_2205].Var1 - Gvar.var_66 + 4) * 40;
            Gvar.var_1477 = (Gvar.var_78[Gvar.var_2205].Var2 - Gvar.var_67 + 4) * 40;
            Gvar.var_2303 = Gvar.var_78[Gvar.var_2205].Var0;
            Gvar.belongings_item_list = Gvar.var_2303;
            await Func.func492(); // アイテムリスト呼び出し
            Gvar.var_2848 = Gvar.item_name;
            Gvar.var_78[Gvar.var_2205].Var0 = 652;
            Gvar.var_2849 = Adap.rnd(3);
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            if (Gvar.var_2849 == 0) {
                Gvar.var_1475 = 1;
            }
            if (Gvar.var_2849 == 1) {
                Gvar.var_1478 = 1;
            }
            if (Gvar.var_2849 == 2) {
                Gvar.var_1479 = 1;
            }
    
            Adap.DSPLAY(111);
            for (let cnt2 = 0; cnt2 < 15; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                if (Gvar.var_2849 == 0) {
                    Gvar.var_1475++;
                }
                if (Gvar.var_2849 == 1) {
                    Gvar.var_1478++;
                }
                if (Gvar.var_2849 == 2) {
                    Gvar.var_1479++;
                }
            }
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_1475 = 0;
            Gvar.var_1478 = 0;
            Gvar.var_1479 = 0;
            if (Gvar.var_2849 == 0) {
                await Func.setMessage("床の " + Gvar.var_2848 + "から", "針が飛び出した！", 8, false, false, false);
            }
            if (Gvar.var_2849 == 1) {
                await Func.setMessage("床の " + Gvar.var_2848 + "から", "ハサミが飛び出した！", 8, false, false, false);
            }
            if (Gvar.var_2849 == 2) {
                await Func.setMessage("床の " + Gvar.var_2848 + "から", "カミソリが飛び出した！", 8, false, false, false);
            }
            await Func.AutoDraw(6);
            return;
        }
        Gvar.var_2850 = 0;
        if (Gvar.equip_disc[320] == 1) {
            Gvar.var_2851 = Adap.rnd(3);
            if (Gvar.var_2851 == 1) {
                Gvar.var_2850 = 1;
            }
        }
        if (Gvar.equip_disc[315] == 1) {
            Gvar.var_2851 = Adap.rnd(3);
            if (Gvar.var_2851 == 1) {
                Gvar.var_2850 = 1;
            }
        }
        if (Gvar.var_2850 == 1) {
            Gvar.var_240 = 0;
            Gvar.var_83[Gvar.var_673].Var7 = 0;
            if (Gvar.equip_disc[320] == 1) {
                await Func.setMessage("磁力攻撃をﾒﾀﾘｶの能力で防いだ！", "", 8, true, false, false);
            }
            if (Gvar.equip_disc[315] == 1) {
                await Func.setMessage("磁力攻撃を予知した！", "", 8, true, false, false);
            }
            Gvar.var_2849 = Adap.rnd(7);
            Gvar.var_2849 = Gvar.var_2849 + 1;
            if (Gvar.equip_disc[315] == 1) {
                Gvar.var_2849 = Adap.rnd(5);
            }
            if (Gvar.var_2849 == 0) {
                await Func.setMessage("ﾘｿﾞｯﾄ「おまえ『予知のような能力』", "        を持っているな」", 8, false, false, true);
            }
            if (Gvar.var_2849 == 1) {
                await Func.setMessage("ﾘｿﾞｯﾄ「こんな近くまで突っ込んで", "        来たのは  お前が初めてだ…」", 8, false, false, true);
            }
            if (Gvar.var_2849 == 2) {
                await Func.setMessage("ﾘｿﾞｯﾄ「なぜわかったのか？", "        興味が湧く」", 8, false, false, true);
            }
            if (Gvar.var_2849 == 3) {
                await Func.setMessage("ﾘｿﾞｯﾄ「『磁力』を使っている…", "        『当たり』だ…」", 8, false, false, true);
            }
            if (Gvar.var_2849 == 4) {
                await Func.setMessage("ﾘｿﾞｯﾄ「さてと…", "      オレはこれからどうすべきかな…」", 8, false, false, true);
            }
            if (Gvar.var_2849 == 5) {
                await Func.setMessage("ﾘｿﾞｯﾄ「勝っていた…", "        オレは勝っていたのに…」", 8, false, false, true);
            }
            if (Gvar.var_2849 == 6) {
                await Func.setMessage("ﾘｿﾞｯﾄ「  ひ    と  ……", "          はレ…    なな  」", 8, false, false, true);
            }
            if (Gvar.var_2849 == 7) {
                await Func.setMessage("ﾘｿﾞｯﾄ「最後に顔を", "          見せ  てくれ    顔を…」", 8, false, false, true);
            }
            await Func.AutoDraw(6);
            return;
        }
        Gvar.var_2849 = Adap.rnd(3);
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        if (Gvar.var_2849 == 0) {
            Gvar.var_1472 = 1;
        }
        if (Gvar.var_2849 == 1) {
            Gvar.var_1473 = 1;
        }
        if (Gvar.var_2849 == 2) {
            Gvar.var_1474 = 1;
        }
        Gvar.var_389 = 2;

        Adap.DSPLAY(111);
        for (let cnt1 = 0; cnt1 < 15; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            if (Gvar.var_2849 == 0) {
                Gvar.var_1472++;
            }
            if (Gvar.var_2849 == 1) {
                Gvar.var_1473++;
            }
            if (Gvar.var_2849 == 2) {
                Gvar.var_1474++;
            }
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1472 = 0;
        Gvar.var_1473 = 0;
        Gvar.var_1474 = 0;
        Gvar.var_83[Gvar.var_673].Var7 = 0;
        if (Gvar.var_2849 == 0) {
            Gvar.var_2852 = 10;
        }
        if (Gvar.var_2849 == 1) {
            Gvar.var_2852 = 13;
        }
        if (Gvar.var_2849 == 2) {
            Gvar.var_2852 = 16;
        }
        if (Gvar.var_83[Gvar.var_673].Var39 >= 2) {
            Gvar.var_2852 = (Gvar.var_83[Gvar.var_673].Var39 - 1) * 2 + Gvar.var_2852;
        }

        if (Gvar.var_2849 == 0) {
            await Func.setMessage("体から針が飛び出した！", "" + Gvar.var_2852 + "のダメージをうけた！", 8, false, false, false);
        }
        if (Gvar.var_2849 == 1) {
            await Func.setMessage("体からハサミが飛び出した！", "" + Gvar.var_2852 + "のダメージをうけた！", 8, false, false, false);
        }
        if (Gvar.var_2849 == 2) {
            await Func.setMessage("体からカミソリが飛び出した！", "" + Gvar.var_2852 + "のダメージをうけた！", 8, false, false, false);
        }
        if (Gvar.var_128 >= 1) {
            await Func.func023();
        }
        await Func.AutoDraw(6);
        Gvar.var_389 = 0;
        Gvar.var_211 = Gvar.var_211 - Gvar.var_2852;
        Gvar.var_208 = Gvar.var_208 + Gvar.var_2852;
        if (Gvar.var_211 <= 0) {
            Gvar.var_211 = 0;
            Gvar.var_356 = 225; // Gvar.var_356 死因要因メッセージID選択
        }
        Gvar.var_240 = 0;
        return;
}

export {func596}
