/**
 * func576 — func576 敵特殊行動発動フラグ処理
 *
 * (org原典: newDTW_func5)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func576(this: any) {
        Adap.dbgprt(576);
        if (Gvar.var_83[Gvar.var_673].Var18 == 2) {
            return;
        }
        // No = 46 ホル・ホース、No = 30 禁煙中ホル・ホース、No = 99 マンハッタントランスファー、No = 84 チョコラータ、No = 85 リゾット、No = 153 マックイィーン
        if (Gvar.var_83[Gvar.var_673].Var0 == 46 || Gvar.var_83[Gvar.var_673].Var0 == 30 || Gvar.var_83[Gvar.var_673].Var0 == 99 || Gvar.var_83[Gvar.var_673].Var0 == 84 || Gvar.var_83[Gvar.var_673].Var0 == 85 || Gvar.var_83[Gvar.var_673].Var0 == 153) {
            if (Gvar.var_123 != 0 || Gvar.var_131 != 0 || Gvar.var_144 != 0 || Gvar.var_218 != 0 || Gvar.var_2712 != 0) {
                return;
            }
            Gvar.var_2740 = Gvar.var_83[Gvar.var_673].Var1;
            Gvar.var_2741 = Gvar.var_83[Gvar.var_673].Var2;
            Gvar.var_2640 = Gvar.var_66 - 2;
            if (Gvar.var_2640 < 0) {
                Gvar.var_2640 = 0;
            }
            Gvar.var_2641 = Gvar.var_66 + 2;
            if (Gvar.var_2641 > Gvar.var_33) {
                Gvar.var_2641 = Gvar.var_33;
            }
            Gvar.var_2642 = Gvar.var_67 + 2;
            if (Gvar.var_2642 > Gvar.var_34) {
                Gvar.var_2642 = Gvar.var_34;
            }
            Gvar.var_2643 = Gvar.var_67 - 2;
            if (Gvar.var_2643 < 0) {
                Gvar.var_2643 = 0;
            }
            Gvar.var_2742 = Gvar.var_66 - 3;
            if (Gvar.var_2742 < 0) {
                Gvar.var_2742 = 0;
            }
            Gvar.var_2743 = Gvar.var_66 + 3;
            if (Gvar.var_2743 > Gvar.var_33) {
                Gvar.var_2743 = Gvar.var_33;
            }
            Gvar.var_2744 = Gvar.var_67 + 3;
            if (Gvar.var_2744 > Gvar.var_34) {
                Gvar.var_2744 = Gvar.var_34;
            }
            Gvar.var_2745 = Gvar.var_67 - 3;
            if (Gvar.var_2745 < 0) {
                Gvar.var_2745 = 0;
            }
            if (Gvar.var_2740 >= Gvar.var_2742 && Gvar.var_2740 <= Gvar.var_2743 && Gvar.var_2741 >= Gvar.var_2745 && Gvar.var_2741 <= Gvar.var_2744) {
                Gvar.var_2746 = Adap.rnd(4);
                if (Gvar.var_2746 == 0) {
                    Gvar.var_83[Gvar.var_673].Var18 = 1;
                }
            }
            Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
            return;
        }
        // No = 134 ジョリーン、No = 35 仗助
        if (Gvar.var_83[Gvar.var_673].Var0 == 134 || Gvar.var_83[Gvar.var_673].Var0 == 35) {
            Gvar.var_2740 = Gvar.var_83[Gvar.var_673].Var1;
            Gvar.var_2741 = Gvar.var_83[Gvar.var_673].Var2;
            Gvar.var_2742 = Gvar.var_66 - 3;
            if (Gvar.var_2742 < 0) {
                Gvar.var_2742 = 0;
            }
            Gvar.var_2743 = Gvar.var_66 + 3;
            if (Gvar.var_2743 > Gvar.var_33) {
                Gvar.var_2743 = Gvar.var_33;
            }
            Gvar.var_2744 = Gvar.var_67 + 3;
            if (Gvar.var_2744 > Gvar.var_34) {
                Gvar.var_2744 = Gvar.var_34;
            }
            Gvar.var_2745 = Gvar.var_67 - 3;
            if (Gvar.var_2745 < 0) {
                Gvar.var_2745 = 0;
            }
            if (Gvar.var_2740 >= Gvar.var_2742 && Gvar.var_2740 <= Gvar.var_2743 && Gvar.var_2741 >= Gvar.var_2745 && Gvar.var_2741 <= Gvar.var_2744) {
                Gvar.var_2747 = Gvar.var_83[Gvar.var_673].Var1;
                Gvar.var_2748 = Gvar.var_83[Gvar.var_673].Var2;
                Gvar.var_1993 = Gvar.var_83[Gvar.var_673].Var1 - 1;
                if (Gvar.var_1993 < 0) {
                    Gvar.var_1993 = 0;
                }
                Gvar.var_1994 = Gvar.var_83[Gvar.var_673].Var1 + 1;
                if (Gvar.var_1994 > Gvar.var_33) {
                    Gvar.var_1994 = Gvar.var_33;
                }
                Gvar.var_1995 = Gvar.var_83[Gvar.var_673].Var2 + 1;
                if (Gvar.var_1995 > Gvar.var_34) {
                    Gvar.var_1995 = Gvar.var_34;
                }
                Gvar.var_1996 = Gvar.var_83[Gvar.var_673].Var2 - 1;
                if (Gvar.var_1996 < 0) {
                    Gvar.var_1996 = 0;
                }
                Gvar.var_2749 = 0;
                if (Gvar.var_82[Gvar.var_2747][Gvar.var_1995] != 0) {
                    Gvar.var_2750 = Gvar.var_82[Gvar.var_2747][Gvar.var_1995];
                    if (Gvar.var_83[Gvar.var_2750].Var0 != 0 && Gvar.var_83[Gvar.var_2750].Var31 != 4 && Gvar.var_83[Gvar.var_2750].Var31 != 5) {
                        Gvar.var_2646 = Gvar.var_2750;
                        await Func.func578();
                        if (Gvar.var_2647 >= 1) {
                            Gvar.var_2749 = Gvar.var_2750;
                        }
                    }
                }
                if (Gvar.var_82[Gvar.var_2747][Gvar.var_1996] != 0) {
                    Gvar.var_2750 = Gvar.var_82[Gvar.var_2747][Gvar.var_1996];
                    if (Gvar.var_83[Gvar.var_2750].Var0 != 0 && Gvar.var_83[Gvar.var_2750].Var31 != 4 && Gvar.var_83[Gvar.var_2750].Var31 != 5) {
                        Gvar.var_2646 = Gvar.var_2750;
                        await Func.func578();
                        if (Gvar.var_2647 >= 1) {
                            Gvar.var_2749 = Gvar.var_2750;
                        }
                    }
                }
                if (Gvar.var_82[Gvar.var_1993][Gvar.var_2748] != 0) {
                    Gvar.var_2750 = Gvar.var_82[Gvar.var_1993][Gvar.var_2748];
                    if (Gvar.var_83[Gvar.var_2750].Var0 != 0 && Gvar.var_83[Gvar.var_2750].Var31 != 4 && Gvar.var_83[Gvar.var_2750].Var31 != 5) {
                        Gvar.var_2646 = Gvar.var_2750;
                        await Func.func578();
                        if (Gvar.var_2647 >= 1) {
                            Gvar.var_2749 = Gvar.var_2750;
                        }
                    }
                }
                if (Gvar.var_82[Gvar.var_1994][Gvar.var_2748] != 0) {
                    Gvar.var_2750 = Gvar.var_82[Gvar.var_1994][Gvar.var_2748];
                    if (Gvar.var_83[Gvar.var_2750].Var0 != 0 && Gvar.var_83[Gvar.var_2750].Var31 != 4 && Gvar.var_83[Gvar.var_2750].Var31 != 5) {
                        Gvar.var_2646 = Gvar.var_2750;
                        await Func.func578();
                        if (Gvar.var_2647 >= 1) {
                            Gvar.var_2749 = Gvar.var_2750;
                        }
                    }
                }
                if (Gvar.var_82[Gvar.var_1993][Gvar.var_1995] != 0) {
                    Gvar.var_2750 = Gvar.var_82[Gvar.var_1993][Gvar.var_1995];
                    if (Gvar.var_83[Gvar.var_2750].Var0 != 0 && Gvar.var_83[Gvar.var_2750].Var31 != 4 && Gvar.var_83[Gvar.var_2750].Var31 != 5) {
                        Gvar.var_2646 = Gvar.var_2750;
                        await Func.func578();
                        if (Gvar.var_2647 >= 1) {
                            Gvar.var_2749 = Gvar.var_2750;
                        }
                    }
                }
                if (Gvar.var_82[Gvar.var_1993][Gvar.var_1996] != 0) {
                    Gvar.var_2750 = Gvar.var_82[Gvar.var_1993][Gvar.var_1996];
                    if (Gvar.var_83[Gvar.var_2750].Var0 != 0 && Gvar.var_83[Gvar.var_2750].Var31 != 4 && Gvar.var_83[Gvar.var_2750].Var31 != 5) {
                        Gvar.var_2646 = Gvar.var_2750;
                        await Func.func578();
                        if (Gvar.var_2647 >= 1) {
                            Gvar.var_2749 = Gvar.var_2750;
                        }
                    }
                }
                if (Gvar.var_82[Gvar.var_1994][Gvar.var_1995] != 0) {
                    Gvar.var_2750 = Gvar.var_82[Gvar.var_1994][Gvar.var_1995];
                    if (Gvar.var_83[Gvar.var_2750].Var0 != 0 && Gvar.var_83[Gvar.var_2750].Var31 != 4 && Gvar.var_83[Gvar.var_2750].Var31 != 5) {
                        Gvar.var_2646 = Gvar.var_2750;
                        await Func.func578();
                        if (Gvar.var_2647 >= 1) {
                            Gvar.var_2749 = Gvar.var_2750;
                        }
                    }
                }
                if (Gvar.var_82[Gvar.var_1994][Gvar.var_1996] != 0) {
                    Gvar.var_2750 = Gvar.var_82[Gvar.var_1994][Gvar.var_1996];
                    if (Gvar.var_83[Gvar.var_2750].Var0 != 0 && Gvar.var_83[Gvar.var_2750].Var31 != 4 && Gvar.var_83[Gvar.var_2750].Var31 != 5) {
                        Gvar.var_2646 = Gvar.var_2750;
                        await Func.func578();
                        if (Gvar.var_2647 >= 1) {
                            Gvar.var_2749 = Gvar.var_2750;
                        }
                    }
                }
                Gvar.var_83[Gvar.var_673].Var18 = Gvar.var_2749;
            }
            return;
        }
        // No = 164 エシディシの脳、No = 165 エボニーデビル
        if (Gvar.var_83[Gvar.var_673].Var0 == 164 || Gvar.var_83[Gvar.var_673].Var0 == 165) {
            Gvar.var_2740 = Gvar.var_83[Gvar.var_673].Var1;
            Gvar.var_2741 = Gvar.var_83[Gvar.var_673].Var2;
            Gvar.var_2747 = Gvar.var_83[Gvar.var_673].Var1;
            Gvar.var_2748 = Gvar.var_83[Gvar.var_673].Var2;
            Gvar.var_1993 = Gvar.var_83[Gvar.var_673].Var1 - 1;
            if (Gvar.var_1993 < 0) {
                Gvar.var_1993 = 0;
            }
            Gvar.var_1994 = Gvar.var_83[Gvar.var_673].Var1 + 1;
            if (Gvar.var_1994 > Gvar.var_33) {
                Gvar.var_1994 = Gvar.var_33;
            }
            Gvar.var_1995 = Gvar.var_83[Gvar.var_673].Var2 + 1;
            if (Gvar.var_1995 > Gvar.var_34) {
                Gvar.var_1995 = Gvar.var_34;
            }
            Gvar.var_1996 = Gvar.var_83[Gvar.var_673].Var2 - 1;
            if (Gvar.var_1996 < 0) {
                Gvar.var_1996 = 0;
            }
            Gvar.var_2749 = 0;
            if (Gvar.var_82[Gvar.var_2747][Gvar.var_1995] != 0) {
                Gvar.var_2750 = Gvar.var_82[Gvar.var_2747][Gvar.var_1995];
                if (Gvar.var_83[Gvar.var_2750].Var0 != 0 && Gvar.var_83[Gvar.var_2750].Var31 != 4 && Gvar.var_83[Gvar.var_2750].Var31 != 5 && Gvar.var_83[Gvar.var_2750].Var0 != 164 && Gvar.var_83[Gvar.var_2750].Var0 != 165) {
                    Gvar.var_2749 = Gvar.var_2750;
                    Gvar.var_83[Gvar.var_673].Var5 = 2;
                }
            }
            if (Gvar.var_82[Gvar.var_2747][Gvar.var_1996] != 0) {
                Gvar.var_2750 = Gvar.var_82[Gvar.var_2747][Gvar.var_1996];
                if (Gvar.var_83[Gvar.var_2750].Var0 != 0 && Gvar.var_83[Gvar.var_2750].Var31 != 4 && Gvar.var_83[Gvar.var_2750].Var31 != 5 && Gvar.var_83[Gvar.var_2750].Var0 != 164 && Gvar.var_83[Gvar.var_2750].Var0 != 165) {
                    Gvar.var_2749 = Gvar.var_2750;
                    Gvar.var_83[Gvar.var_673].Var5 = 8;
                }
            }
            if (Gvar.var_82[Gvar.var_1993][Gvar.var_2748] != 0) {
                Gvar.var_2750 = Gvar.var_82[Gvar.var_1993][Gvar.var_2748];
                if (Gvar.var_83[Gvar.var_2750].Var0 != 0 && Gvar.var_83[Gvar.var_2750].Var31 != 4 && Gvar.var_83[Gvar.var_2750].Var31 != 5 && Gvar.var_83[Gvar.var_2750].Var0 != 164 && Gvar.var_83[Gvar.var_2750].Var0 != 165) {
                    Gvar.var_2749 = Gvar.var_2750;
                    Gvar.var_83[Gvar.var_673].Var5 = 4;
                }
            }
            if (Gvar.var_82[Gvar.var_1994][Gvar.var_2748] != 0) {
                Gvar.var_2750 = Gvar.var_82[Gvar.var_1994][Gvar.var_2748];
                if (Gvar.var_83[Gvar.var_2750].Var0 != 0 && Gvar.var_83[Gvar.var_2750].Var31 != 4 && Gvar.var_83[Gvar.var_2750].Var31 != 5 && Gvar.var_83[Gvar.var_2750].Var0 != 164 && Gvar.var_83[Gvar.var_2750].Var0 != 165) {
                    Gvar.var_2749 = Gvar.var_2750;
                    Gvar.var_83[Gvar.var_673].Var5 = 6;
                }
            }
            if (Gvar.var_82[Gvar.var_1993][Gvar.var_1995] != 0) {
                Gvar.var_2750 = Gvar.var_82[Gvar.var_1993][Gvar.var_1995];
                if (Gvar.var_83[Gvar.var_2750].Var0 != 0 && Gvar.var_83[Gvar.var_2750].Var31 != 4 && Gvar.var_83[Gvar.var_2750].Var31 != 5 && Gvar.var_83[Gvar.var_2750].Var0 != 164 && Gvar.var_83[Gvar.var_2750].Var0 != 165) {
                    Gvar.var_2749 = Gvar.var_2750;
                    Gvar.var_83[Gvar.var_673].Var5 = 1;
                }
            }
            if (Gvar.var_82[Gvar.var_1993][Gvar.var_1996] != 0) {
                Gvar.var_2750 = Gvar.var_82[Gvar.var_1993][Gvar.var_1996];
                if (Gvar.var_83[Gvar.var_2750].Var0 != 0 && Gvar.var_83[Gvar.var_2750].Var31 != 4 && Gvar.var_83[Gvar.var_2750].Var31 != 5 && Gvar.var_83[Gvar.var_2750].Var0 != 164 && Gvar.var_83[Gvar.var_2750].Var0 != 165) {
                    Gvar.var_2749 = Gvar.var_2750;
                    Gvar.var_83[Gvar.var_673].Var5 = 7;
                }
            }
            if (Gvar.var_82[Gvar.var_1994][Gvar.var_1995] != 0) {
                Gvar.var_2750 = Gvar.var_82[Gvar.var_1994][Gvar.var_1995];
                if (Gvar.var_83[Gvar.var_2750].Var0 != 0 && Gvar.var_83[Gvar.var_2750].Var31 != 4 && Gvar.var_83[Gvar.var_2750].Var31 != 5 && Gvar.var_83[Gvar.var_2750].Var0 != 164 && Gvar.var_83[Gvar.var_2750].Var0 != 165) {
                    Gvar.var_2749 = Gvar.var_2750;
                    Gvar.var_83[Gvar.var_673].Var5 = 3;
                }
            }
            if (Gvar.var_82[Gvar.var_1994][Gvar.var_1996] != 0) {
                Gvar.var_2750 = Gvar.var_82[Gvar.var_1994][Gvar.var_1996];
                if (Gvar.var_83[Gvar.var_2750].Var0 != 0 && Gvar.var_83[Gvar.var_2750].Var31 != 4 && Gvar.var_83[Gvar.var_2750].Var31 != 5 && Gvar.var_83[Gvar.var_2750].Var0 != 164 && Gvar.var_83[Gvar.var_2750].Var0 != 165) {
                    Gvar.var_2749 = Gvar.var_2750;
                    Gvar.var_83[Gvar.var_673].Var5 = 9;
                }
            }
            Gvar.var_83[Gvar.var_673].Var18 = Gvar.var_2749;
            return;
        }
        // No = 124 ミスタ
        if (Gvar.var_83[Gvar.var_673].Var0 == 124) {
            if (Gvar.var_123 != 0 || Gvar.var_131 != 0 || Gvar.var_144 != 0 || Gvar.var_218 != 0 || Gvar.var_2712 != 0) {
                return;
            }
            Gvar.var_2746 = Adap.rnd(18);
            if (Gvar.var_83[Gvar.var_673].Var10 == Gvar.var_201 && Gvar.var_201 != 14) {
                Gvar.var_2746 = Adap.rnd(4);
            }
            if (Gvar.var_2746 == 0) {
                Gvar.var_83[Gvar.var_673].Var18 = 1;
            }
            Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
            return;
        }
        // ディアボロと離れていた場合に能力を発動してくるかどうか?
        // No = 63 プロシュートの兄貴、No = 125 フーゴ、No = 113 DIO、No = 114 最高にハイなDIO、No = 128 承太郎(4部)、No = 118 クリーム、No = 143 ウンガロ、No = 145 康一、No = 150 康一act2!!、No = 137 成長した吉良、No = 72 ケンゾー、No = 98 エンポリオ(ウェザー付)、No = 65 虹村形兆、No = 154 スポーツマックス、No = 159 記憶が戻ったウェザー
        // Ver0.1403にて追加。No = 171 離婚した承太郎
        if (Gvar.var_83[Gvar.var_673].Var0 == 63 || Gvar.var_83[Gvar.var_673].Var0 == 125 || Gvar.var_83[Gvar.var_673].Var0 == 113 || Gvar.var_83[Gvar.var_673].Var0 == 114 || Gvar.var_83[Gvar.var_673].Var0 == 128 || Gvar.var_83[Gvar.var_673].Var0 == 118 || Gvar.var_83[Gvar.var_673].Var0 == 143 || Gvar.var_83[Gvar.var_673].Var0 == 145 || Gvar.var_83[Gvar.var_673].Var0 == 150 || Gvar.var_83[Gvar.var_673].Var0 == 137 || Gvar.var_83[Gvar.var_673].Var0 == 72 || Gvar.var_83[Gvar.var_673].Var0 == 98 || Gvar.var_83[Gvar.var_673].Var0 == 65 || Gvar.var_83[Gvar.var_673].Var0 == 154 || Gvar.var_83[Gvar.var_673].Var0 == 159 || Gvar.var_83[Gvar.var_673].Var0 == 171) {
            if (Gvar.var_123 != 0 || Gvar.var_131 != 0 || Gvar.var_144 != 0 || Gvar.var_218 != 0 || Gvar.var_2712 != 0) {
                return;
            }
            Gvar.var_2751 = Adap.rnd(4); // 敵が特殊攻撃をしてくる確率
            if (Gvar.var_83[Gvar.var_673].Var0 == 118) { // No = 118 クリーム
                Gvar.var_2751 = Adap.rnd(8); // 敵が特殊攻撃をしてくる確率
            }
            if (Gvar.var_83[Gvar.var_673].Var0 == 143) { // No = 143 ウンガロ
                Gvar.var_2751 = Adap.rnd(5); // 敵が特殊攻撃をしてくる確率
            }
            if (Gvar.var_83[Gvar.var_673].Var0 == 65) { // No = 65 虹村形兆
                Gvar.var_2751 = Adap.rnd(6); // 敵が特殊攻撃をしてくる確率
            }
            if (Gvar.var_83[Gvar.var_673].Var0 == 159) { // No = 159 記憶が戻ったウェザー
                Gvar.var_2751 = Adap.rnd(8); // 敵が特殊攻撃をしてくる確率
            }
             // Gvar.var_2751 敵が特殊攻撃をしてくる確率
            if (Gvar.var_2751 == 0 && Gvar.var_201 != 14 && Gvar.var_201 == Gvar.var_83[Gvar.var_673].Var10) {
                Gvar.var_83[Gvar.var_673].Var18 = 1;
            }
            // No = 145 康一、No = 150 康一act2!!、No = 137 成長した吉良、No = 65 虹村形兆、No = 154 スポーツマックス、No = 159 記憶が戻ったウェザー
            if (Gvar.var_83[Gvar.var_673].Var0 == 145 || Gvar.var_83[Gvar.var_673].Var0 == 150 || Gvar.var_83[Gvar.var_673].Var0 == 137 || Gvar.var_83[Gvar.var_673].Var0 == 65 || Gvar.var_83[Gvar.var_673].Var0 == 154 || Gvar.var_83[Gvar.var_673].Var0 == 159) {
                Gvar.var_2752 = Gvar.var_83[Gvar.var_673].Var1;
                Gvar.var_2753 = Gvar.var_83[Gvar.var_673].Var2;
                Gvar.var_2754 = Gvar.var_66 - 4;
                Gvar.var_2755 = Gvar.var_66 + 4;
                Gvar.var_2756 = Gvar.var_67 + 4;
                Gvar.var_2757 = Gvar.var_67 - 4;
                if (Gvar.var_2754 < 5) {
                    Gvar.var_2754 = 5;
                }
                if (Gvar.var_2757 < 5) {
                    Gvar.var_2757 = 5;
                }
                if (Gvar.var_2755 > Gvar.var_33) {
                    Gvar.var_2755 = Gvar.var_33;
                }
                if (Gvar.var_2756 > Gvar.var_34) {
                    Gvar.var_2756 = Gvar.var_34;
                }
                if (Gvar.var_2752 < Gvar.var_2754 || Gvar.var_2752 > Gvar.var_2755 || Gvar.var_2753 < Gvar.var_2757 || Gvar.var_2753 > Gvar.var_2756) {
                    Gvar.var_83[Gvar.var_673].Var18 = 0;
                }
            }
            // No = 113 DIO、No = 114 最高にハイなDIO、No = 128 承太郎(4部)、No = 63 プロシュートの兄貴
            // Ver 0.1403にて追加。No = 171 離婚した承太郎
            if (Gvar.var_83[Gvar.var_673].Var0 == 113 || Gvar.var_83[Gvar.var_673].Var0 == 114 || Gvar.var_83[Gvar.var_673].Var0 == 128 || Gvar.var_83[Gvar.var_673].Var0 == 63 || Gvar.var_83[Gvar.var_673].Var0 == 171) {
                Gvar.var_2752 = Gvar.var_83[Gvar.var_673].Var1;
                Gvar.var_2753 = Gvar.var_83[Gvar.var_673].Var2;
                Gvar.var_2754 = Gvar.var_66 - 6;
                Gvar.var_2755 = Gvar.var_66 + 6;
                Gvar.var_2756 = Gvar.var_67 + 6;
                Gvar.var_2757 = Gvar.var_67 - 6;
                if (Gvar.var_2754 < 5) {
                    Gvar.var_2754 = 5;
                }
                if (Gvar.var_2757 < 5) {
                    Gvar.var_2757 = 5;
                }
                if (Gvar.var_2755 > Gvar.var_33) {
                    Gvar.var_2755 = Gvar.var_33;
                }
                if (Gvar.var_2756 > Gvar.var_34) {
                    Gvar.var_2756 = Gvar.var_34;
                }
                if (Gvar.var_2752 < Gvar.var_2754 || Gvar.var_2752 > Gvar.var_2755 || Gvar.var_2753 < Gvar.var_2757 || Gvar.var_2753 > Gvar.var_2756) {
                    Gvar.var_83[Gvar.var_673].Var18 = 0;
                }
            }
            // No = 63 プロシュートの兄貴、No = 125 フーゴ、No = 72 ケンゾー、No = 98 エンポリオ(ウェザー付)
            if (Gvar.var_83[Gvar.var_673].Var0 == 63 || Gvar.var_83[Gvar.var_673].Var0 == 125 || Gvar.var_83[Gvar.var_673].Var0 == 72 || Gvar.var_83[Gvar.var_673].Var0 == 98) {
                Gvar.var_2752 = Gvar.var_83[Gvar.var_673].Var1;
                Gvar.var_2753 = Gvar.var_83[Gvar.var_673].Var2;
                Gvar.var_2754 = Gvar.var_66 - 9;
                Gvar.var_2755 = Gvar.var_66 + 9;
                Gvar.var_2756 = Gvar.var_67 + 9;
                Gvar.var_2757 = Gvar.var_67 - 9;
                if (Gvar.var_2754 < 5) {
                    Gvar.var_2754 = 5;
                }
                if (Gvar.var_2757 < 5) {
                    Gvar.var_2757 = 5;
                }
                if (Gvar.var_2755 > Gvar.var_33) {
                    Gvar.var_2755 = Gvar.var_33;
                }
                if (Gvar.var_2756 > Gvar.var_34) {
                    Gvar.var_2756 = Gvar.var_34;
                }
                if (Gvar.var_2752 < Gvar.var_2754 || Gvar.var_2752 > Gvar.var_2755 || Gvar.var_2753 < Gvar.var_2757 || Gvar.var_2753 > Gvar.var_2756) {
                    Gvar.var_83[Gvar.var_673].Var18 = 0;
                }
            }
            Gvar.var_2758 = Gvar.var_83[Gvar.var_673].Var1;
            Gvar.var_2759 = Gvar.var_83[Gvar.var_673].Var2;
            Gvar.var_2760 = Gvar.var_83[Gvar.var_673].Var1 - 1;
            Gvar.var_2761 = Gvar.var_83[Gvar.var_673].Var1 + 1;
            Gvar.var_2762 = Gvar.var_83[Gvar.var_673].Var2 - 1;
            Gvar.var_2763 = Gvar.var_83[Gvar.var_673].Var2 + 1;
            if (Gvar.var_2760 < 0) {
                Gvar.var_2760 = 0;
            }
            if (Gvar.var_2761 > Gvar.var_33) {
                Gvar.var_2761 = Gvar.var_33;
            }
            if (Gvar.var_2762 < 0) {
                Gvar.var_2762 = 0;
            }
            if (Gvar.var_2763 > Gvar.var_34) {
                Gvar.var_2763 = Gvar.var_34;
            }
            if (Gvar.var_2760 == Gvar.var_66 && Gvar.var_2759 == Gvar.var_67) {
                Gvar.var_83[Gvar.var_673].Var18 = 0;
            }
            if (Gvar.var_2761 == Gvar.var_66 && Gvar.var_2759 == Gvar.var_67) {
                Gvar.var_83[Gvar.var_673].Var18 = 0;
            }
            if (Gvar.var_2758 == Gvar.var_66 && Gvar.var_2762 == Gvar.var_67) {
                Gvar.var_83[Gvar.var_673].Var18 = 0;
            }
            if (Gvar.var_2758 == Gvar.var_66 && Gvar.var_2763 == Gvar.var_67) {
                Gvar.var_83[Gvar.var_673].Var18 = 0;
            }
            if (Gvar.var_2760 == Gvar.var_66 && Gvar.var_2762 == Gvar.var_67) {
                Gvar.var_83[Gvar.var_673].Var18 = 0;
            }
            if (Gvar.var_2761 == Gvar.var_66 && Gvar.var_2762 == Gvar.var_67) {
                Gvar.var_83[Gvar.var_673].Var18 = 0;
            }
            if (Gvar.var_2760 == Gvar.var_66 && Gvar.var_2763 == Gvar.var_67) {
                Gvar.var_83[Gvar.var_673].Var18 = 0;
            }
            if (Gvar.var_2761 == Gvar.var_66 && Gvar.var_2763 == Gvar.var_67) {
                Gvar.var_83[Gvar.var_673].Var18 = 0;
            }
            // No = 63 プロシュート兄貴
            if (Gvar.var_83[Gvar.var_673].Var0 == 63 && Gvar.var_565 <= 0) {
                Gvar.var_83[Gvar.var_673].Var18 = 0;
            }
            // No = 143 ウンガロ
            if (Gvar.var_83[Gvar.var_673].Var0 == 143) {
                Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
            }
            // No = 113 DIOでない場合
            if (Gvar.var_83[Gvar.var_673].Var0 != 113) {
                return;
            }
            // No = 113 DIO
            if (Gvar.var_83[Gvar.var_673].Var0 == 113 && Gvar.var_83[Gvar.var_673].Var18 == 1) {
                return;
            }
        }
        // No = 157 アナスイ
        if (Gvar.var_83[Gvar.var_673].Var0 == 157) {
            if (Gvar.var_123 != 0 || Gvar.var_131 != 0 || Gvar.var_144 != 0 || Gvar.var_218 != 0 || Gvar.var_2712 != 0) {
                return;
            }
            Gvar.var_2751 = Adap.rnd(2); // 敵が特殊攻撃をしてくる確率
            if (Gvar.dungeon_number == 99 && Gvar.var_83[Gvar.var_673].Var16 == 1) {
                Gvar.var_2751 = 1; // 敵が特殊攻撃をしてくる確率
            }
             // Gvar.var_2751 敵が特殊攻撃をしてくる確率
            if (Gvar.var_2751 >= 1 && Gvar.var_201 != 14 && Gvar.var_201 == Gvar.var_83[Gvar.var_673].Var10) {
                Gvar.var_83[Gvar.var_673].Var18 = 1;
            }
            Gvar.var_2758 = Gvar.var_423;
            Gvar.var_2759 = Gvar.var_424;
            Gvar.var_2760 = Gvar.var_423 - 1;
            Gvar.var_2761 = Gvar.var_423 + 1;
            Gvar.var_2762 = Gvar.var_424 - 1;
            Gvar.var_2763 = Gvar.var_424 + 1;
            if (Gvar.var_2760 < 0) {
                Gvar.var_2760 = 0;
            }
            if (Gvar.var_2761 > Gvar.var_33) {
                Gvar.var_2761 = Gvar.var_33;
            }
            if (Gvar.var_2762 < 0) {
                Gvar.var_2762 = 0;
            }
            if (Gvar.var_2763 > Gvar.var_34) {
                Gvar.var_2763 = Gvar.var_34;
            }
            if (Gvar.var_71[Gvar.var_2760][Gvar.var_2759] != 0 && Gvar.var_71[Gvar.var_2761][Gvar.var_2759] != 0 && Gvar.var_71[Gvar.var_2758][Gvar.var_2762] != 0 && Gvar.var_71[Gvar.var_2758][Gvar.var_2763] != 0 && Gvar.var_71[Gvar.var_2760][Gvar.var_2763] != 0 && Gvar.var_71[Gvar.var_2760][Gvar.var_2762] != 0 && Gvar.var_71[Gvar.var_2761][Gvar.var_2763] != 0 && Gvar.var_71[Gvar.var_2761][Gvar.var_2762] != 0) {
                Gvar.var_83[Gvar.var_673].Var18 = 0;
                return;
            }
            Gvar.var_2764 = Gvar.var_66 - 1;
            Gvar.var_2765 = Gvar.var_66 + 1;
            Gvar.var_2766 = Gvar.var_67 + 1;
            Gvar.var_2767 = Gvar.var_67 - 1;
            if (Gvar.var_2764 < 5) {
                Gvar.var_2764 = 5;
            }
            if (Gvar.var_2767 < 5) {
                Gvar.var_2767 = 5;
            }
            if (Gvar.var_2765 > Gvar.var_33) {
                Gvar.var_2765 = Gvar.var_33;
            }
            if (Gvar.var_2766 > Gvar.var_34) {
                Gvar.var_2766 = Gvar.var_34;
            }
            if (Gvar.var_71[Gvar.var_2764][Gvar.var_67] != 0 && Gvar.var_71[Gvar.var_2765][Gvar.var_67] != 0 && Gvar.var_71[Gvar.var_66][Gvar.var_2766] != 0 && Gvar.var_71[Gvar.var_66][Gvar.var_2767] != 0 && Gvar.var_71[Gvar.var_2764][Gvar.var_2766] != 0 && Gvar.var_71[Gvar.var_2764][Gvar.var_2767] != 0 && Gvar.var_71[Gvar.var_2765][Gvar.var_2766] != 0 && Gvar.var_71[Gvar.var_2765][Gvar.var_2767] != 0) {
                Gvar.var_83[Gvar.var_673].Var18 = 0;
                return;
            }
            if (Gvar.var_2760 == Gvar.var_66 && Gvar.var_2759 == Gvar.var_67) {
                Gvar.var_83[Gvar.var_673].Var18 = 0;
            }
            if (Gvar.var_2761 == Gvar.var_66 && Gvar.var_2759 == Gvar.var_67) {
                Gvar.var_83[Gvar.var_673].Var18 = 0;
            }
            if (Gvar.var_2758 == Gvar.var_66 && Gvar.var_2762 == Gvar.var_67) {
                Gvar.var_83[Gvar.var_673].Var18 = 0;
            }
            if (Gvar.var_2758 == Gvar.var_66 && Gvar.var_2763 == Gvar.var_67) {
                Gvar.var_83[Gvar.var_673].Var18 = 0;
            }
            if (Gvar.var_2760 == Gvar.var_66 && Gvar.var_2762 == Gvar.var_67) {
                Gvar.var_83[Gvar.var_673].Var18 = 0;
            }
            if (Gvar.var_2761 == Gvar.var_66 && Gvar.var_2762 == Gvar.var_67) {
                Gvar.var_83[Gvar.var_673].Var18 = 0;
            }
            if (Gvar.var_2760 == Gvar.var_66 && Gvar.var_2763 == Gvar.var_67) {
                Gvar.var_83[Gvar.var_673].Var18 = 0;
            }
            if (Gvar.var_2761 == Gvar.var_66 && Gvar.var_2763 == Gvar.var_67) {
                Gvar.var_83[Gvar.var_673].Var18 = 0;
            }
            if (Gvar.var_83[Gvar.var_673].Var18 == 1) {
                if (Gvar.var_71[Gvar.var_2760][Gvar.var_2763] == 0) {
                    Gvar.var_83[Gvar.var_673].Var5 = 1;
                }
                if (Gvar.var_71[Gvar.var_2760][Gvar.var_2762] == 0) {
                    Gvar.var_83[Gvar.var_673].Var5 = 7;
                }
                if (Gvar.var_71[Gvar.var_2761][Gvar.var_2763] == 0) {
                    Gvar.var_83[Gvar.var_673].Var5 = 3;
                }
                if (Gvar.var_71[Gvar.var_2761][Gvar.var_2762] == 0) {
                    Gvar.var_83[Gvar.var_673].Var5 = 9;
                }
                if (Gvar.var_71[Gvar.var_2758][Gvar.var_2762] == 0) {
                    Gvar.var_83[Gvar.var_673].Var5 = 8;
                }
                if (Gvar.var_71[Gvar.var_2758][Gvar.var_2763] == 0) {
                    Gvar.var_83[Gvar.var_673].Var5 = 2;
                }
                if (Gvar.var_71[Gvar.var_2760][Gvar.var_2759] == 0) {
                    Gvar.var_83[Gvar.var_673].Var5 = 4;
                }
                if (Gvar.var_71[Gvar.var_2761][Gvar.var_2759] == 0) {
                    Gvar.var_83[Gvar.var_673].Var5 = 6;
                }
            }
            return;
        }
        // No = 168 警備員の西戸
        if (Gvar.var_83[Gvar.var_673].Var0 == 168 && Gvar.var_2731 == 0 && Gvar.var_83[Gvar.var_673].Var18 == 0) {
            if (Gvar.var_123 != 0 || Gvar.var_131 != 0 || Gvar.var_144 != 0 || Gvar.var_218 != 0 || Gvar.var_2712 != 0) {
                return;
            }
            Gvar.var_2751 = Adap.rnd(8); // 敵が特殊攻撃をしてくる確率
             // Gvar.var_2751 敵が特殊攻撃をしてくる確率
            if (Gvar.var_2751 == 0 && Gvar.var_201 != 14 && Gvar.var_201 == Gvar.var_83[Gvar.var_673].Var10) {
                Gvar.var_83[Gvar.var_673].Var18 = 2;
            }
            Gvar.var_2758 = Gvar.var_423;
            Gvar.var_2759 = Gvar.var_424;
            Gvar.var_2760 = Gvar.var_423 - 1;
            Gvar.var_2761 = Gvar.var_423 + 1;
            Gvar.var_2762 = Gvar.var_424 - 1;
            Gvar.var_2763 = Gvar.var_424 + 1;
            if (Gvar.var_2760 < 0) {
                Gvar.var_2760 = 0;
            }
            if (Gvar.var_2761 > Gvar.var_33) {
                Gvar.var_2761 = Gvar.var_33;
            }
            if (Gvar.var_2762 < 0) {
                Gvar.var_2762 = 0;
            }
            if (Gvar.var_2763 > Gvar.var_34) {
                Gvar.var_2763 = Gvar.var_34;
            }
            if (Gvar.var_2760 == Gvar.var_66 && Gvar.var_2759 == Gvar.var_67) {
                Gvar.var_83[Gvar.var_673].Var18 = 0;
            }
            if (Gvar.var_2761 == Gvar.var_66 && Gvar.var_2759 == Gvar.var_67) {
                Gvar.var_83[Gvar.var_673].Var18 = 0;
            }
            if (Gvar.var_2758 == Gvar.var_66 && Gvar.var_2762 == Gvar.var_67) {
                Gvar.var_83[Gvar.var_673].Var18 = 0;
            }
            if (Gvar.var_2758 == Gvar.var_66 && Gvar.var_2763 == Gvar.var_67) {
                Gvar.var_83[Gvar.var_673].Var18 = 0;
            }
            if (Gvar.var_2760 == Gvar.var_66 && Gvar.var_2762 == Gvar.var_67) {
                Gvar.var_83[Gvar.var_673].Var18 = 0;
            }
            if (Gvar.var_2761 == Gvar.var_66 && Gvar.var_2762 == Gvar.var_67) {
                Gvar.var_83[Gvar.var_673].Var18 = 0;
            }
            if (Gvar.var_2760 == Gvar.var_66 && Gvar.var_2763 == Gvar.var_67) {
                Gvar.var_83[Gvar.var_673].Var18 = 0;
            }
            if (Gvar.var_2761 == Gvar.var_66 && Gvar.var_2763 == Gvar.var_67) {
                Gvar.var_83[Gvar.var_673].Var18 = 0;
            }
            return;
        }
        if (Gvar.var_123 >= 1) {
            Gvar.var_2768 = Gvar.var_66;
            Gvar.var_2769 = Gvar.var_67;
            Gvar.var_66 = Gvar.var_83[Gvar.var_124].Var1;
            Gvar.var_67 = Gvar.var_83[Gvar.var_124].Var2;
        }
        Gvar.var_2770 = 0;
        Gvar.var_616 = 1;
        Gvar.var_2771 = 0;
        for (let cnt1 = 0; cnt1 < Gvar.var_97; ++cnt1) {
            // No = 49 コピー人形
            if (Gvar.var_83[Gvar.var_616].Var0 == 49) {
                Gvar.var_2771 = 1;
            }
            if (Gvar.var_83[Gvar.var_616].Var0 != 0 && Gvar.var_83[Gvar.var_616].Var31 == 5 && Gvar.var_83[Gvar.var_616].Var30 == 0) {
                Gvar.var_2772 = Gvar.var_83[Gvar.var_616].Var1;
                Gvar.var_2773 = Gvar.var_83[Gvar.var_616].Var2;
                Gvar.var_2774 = Gvar.var_2772 - 1;
                if (Gvar.var_2774 < 0) {
                    Gvar.var_2774 = 0;
                }
                Gvar.var_2775 = Gvar.var_2772 + 1;
                if (Gvar.var_2775 > Gvar.var_33) {
                    Gvar.var_2775 = Gvar.var_33;
                }
                Gvar.var_2776 = Gvar.var_2773 + 1;
                if (Gvar.var_2776 > Gvar.var_34) {
                    Gvar.var_2776 = Gvar.var_34;
                }
                Gvar.var_2777 = Gvar.var_2773 - 1;
                if (Gvar.var_2777 < 0) {
                    Gvar.var_2777 = 0;
                }
                if (Gvar.var_83[Gvar.var_673].Var10 == Gvar.var_83[Gvar.var_616].Var10 && Gvar.var_83[Gvar.var_673].Var10 != 14) {
                    Gvar.var_2770 = 1;
                    Gvar.var_2768 = Gvar.var_66;
                    Gvar.var_2769 = Gvar.var_67;
                    Gvar.var_66 = Gvar.var_83[Gvar.var_616].Var1;
                    Gvar.var_67 = Gvar.var_83[Gvar.var_616].Var2;
                    Gvar.var_2778 = Gvar.var_616;
                    break;
                }
                if (Gvar.var_83[Gvar.var_673].Var10 == 14 && Gvar.var_83[Gvar.var_616].Var10 != 14) {
                    Gvar.var_2779 = Gvar.var_83[Gvar.var_673].Var10;
                    if (Gvar.var_71[Gvar.var_2774][Gvar.var_2773] == Gvar.var_2779 || Gvar.var_71[Gvar.var_2775][Gvar.var_2773] == Gvar.var_2779 || Gvar.var_71[Gvar.var_2772][Gvar.var_2776] == Gvar.var_2779 || Gvar.var_71[Gvar.var_2772][Gvar.var_2777] == Gvar.var_2779 || Gvar.var_71[Gvar.var_2774][Gvar.var_2776] == Gvar.var_2779 || Gvar.var_71[Gvar.var_2774][Gvar.var_2777] == Gvar.var_2779 || Gvar.var_71[Gvar.var_2775][Gvar.var_2776] == Gvar.var_2779 || Gvar.var_71[Gvar.var_2775][Gvar.var_2777] == Gvar.var_2779) {
                        Gvar.var_2770 = 1;
                        Gvar.var_2768 = Gvar.var_66;
                        Gvar.var_2769 = Gvar.var_67;
                        Gvar.var_66 = Gvar.var_83[Gvar.var_616].Var1;
                        Gvar.var_67 = Gvar.var_83[Gvar.var_616].Var2;
                        Gvar.var_2778 = Gvar.var_616;
                        break;
                    }
                }
            }
            Gvar.var_616++;
        }
        Gvar.var_2758 = Gvar.var_423;
        Gvar.var_2759 = Gvar.var_424;
        Gvar.var_2760 = Gvar.var_423 - 1;
        Gvar.var_2761 = Gvar.var_423 + 1;
        Gvar.var_2762 = Gvar.var_424 - 1;
        Gvar.var_2763 = Gvar.var_424 + 1;
        if (Gvar.var_2760 < 0) {
            Gvar.var_2760 = 0;
        }
        if (Gvar.var_2761 > Gvar.var_33) {
            Gvar.var_2761 = Gvar.var_33;
        }
        if (Gvar.var_2762 < 0) {
            Gvar.var_2762 = 0;
        }
        if (Gvar.var_2763 > Gvar.var_34) {
            Gvar.var_2763 = Gvar.var_34;
        }
        // No = 15 ペットショップ、No = 45 由花子、No = 158 プッツン由花子、No = 47 億泰、No = 67 ブチ切れた億泰、No = 80 ラング・ラングラー、No = 132 レクイエムジョルノ、No = 136、No = 113 DIO、No = 175 不明(没敵チャカ?)
        if (Gvar.var_83[Gvar.var_673].Var0 == 15 || Gvar.var_83[Gvar.var_673].Var0 == 45 || Gvar.var_83[Gvar.var_673].Var0 == 158 || Gvar.var_83[Gvar.var_673].Var0 == 47 || Gvar.var_83[Gvar.var_673].Var0 == 67 || Gvar.var_83[Gvar.var_673].Var0 == 80 || Gvar.var_83[Gvar.var_673].Var0 == 132 || Gvar.var_83[Gvar.var_673].Var0 == 136 || Gvar.var_83[Gvar.var_673].Var0 == 113 || Gvar.var_83[Gvar.var_673].Var0 == 175) {
            if (Gvar.var_2760 == Gvar.var_66 && Gvar.var_2759 == Gvar.var_67) {
                await Func.func577();
                return;
            }
            if (Gvar.var_2761 == Gvar.var_66 && Gvar.var_2759 == Gvar.var_67) {
                await Func.func577();
                return;
            }
            if (Gvar.var_2758 == Gvar.var_66 && Gvar.var_2762 == Gvar.var_67) {
                await Func.func577();
                return;
            }
            if (Gvar.var_2758 == Gvar.var_66 && Gvar.var_2763 == Gvar.var_67) {
                await Func.func577();
                return;
            }
            if (Gvar.var_2760 == Gvar.var_66 && Gvar.var_2762 == Gvar.var_67) {
                await Func.func577();
                return;
            }
            if (Gvar.var_2761 == Gvar.var_66 && Gvar.var_2762 == Gvar.var_67) {
                await Func.func577();
                return;
            }
            if (Gvar.var_2760 == Gvar.var_66 && Gvar.var_2763 == Gvar.var_67) {
                await Func.func577();
                return;
            }
            if (Gvar.var_2761 == Gvar.var_66 && Gvar.var_2763 == Gvar.var_67) {
                await Func.func577();
                return;
            }
        }
        // No = 76 エコーズACT2
        if (Gvar.var_83[Gvar.var_673].Var0 == 76) {
            Gvar.var_2780 = Adap.rnd(2);
            if (Gvar.var_2780 != 0) {
                if (Gvar.var_2760 == Gvar.var_66 && Gvar.var_2759 == Gvar.var_67) {
                    await Func.func577();
                    return;
                }
                if (Gvar.var_2761 == Gvar.var_66 && Gvar.var_2759 == Gvar.var_67) {
                    await Func.func577();
                    return;
                }
                if (Gvar.var_2758 == Gvar.var_66 && Gvar.var_2762 == Gvar.var_67) {
                    await Func.func577();
                    return;
                }
                if (Gvar.var_2758 == Gvar.var_66 && Gvar.var_2763 == Gvar.var_67) {
                    await Func.func577();
                    return;
                }
                if (Gvar.var_2760 == Gvar.var_66 && Gvar.var_2762 == Gvar.var_67) {
                    await Func.func577();
                    return;
                }
                if (Gvar.var_2761 == Gvar.var_66 && Gvar.var_2762 == Gvar.var_67) {
                    await Func.func577();
                    return;
                }
                if (Gvar.var_2760 == Gvar.var_66 && Gvar.var_2763 == Gvar.var_67) {
                    await Func.func577();
                    return;
                }
                if (Gvar.var_2761 == Gvar.var_66 && Gvar.var_2763 == Gvar.var_67) {
                    await Func.func577();
                    return;
                }
            }
        }
        // No = 45 由花子、No = 158 プッツン由花子、No = 80 ラング・ラングラー
        if (Gvar.var_83[Gvar.var_673].Var0 == 45 || Gvar.var_83[Gvar.var_673].Var0 == 158 || Gvar.var_83[Gvar.var_673].Var0 == 80) {
            if (Gvar.var_126 != 0) {
                await Func.func577();
                return;
            }
        }
        // No = 47 億泰、No = 67 ブチ切れた億泰
        if (Gvar.var_83[Gvar.var_673].Var0 == 47 || Gvar.var_83[Gvar.var_673].Var0 == 67) {
            if (Gvar.var_146 >= 1 && Gvar.var_66 == Gvar.var_147 && Gvar.var_67 == Gvar.var_148) {
                await Func.func577();
                return;
            }
        }
        Gvar.var_2781 = Adap.rnd(4);
        // No = 123 ブチャラティ、No = 140 ジョナサン、No = 168 警備員の西戸
        if (Gvar.var_83[Gvar.var_673].Var0 == 123 || Gvar.var_83[Gvar.var_673].Var0 == 140 || Gvar.var_83[Gvar.var_673].Var0 == 168) {
            Gvar.var_2781 = 1;
        }
        // No = 155 マライア
        if (Gvar.var_83[Gvar.var_673].Var0 == 155) {
            Gvar.var_2781 = Adap.rnd(8);
        }
        // No = 136 シーザー
        if (Gvar.var_83[Gvar.var_673].Var0 == 136) {
            Gvar.var_2781 = Adap.rnd(6);
        }
        // No = 113 DIO
        if (Gvar.var_83[Gvar.var_673].Var0 == 113) {
            Gvar.var_2781 = Adap.rnd(30);
        }
        if (Gvar.var_2760 == Gvar.var_66 && Gvar.var_2759 == Gvar.var_67) {
            Gvar.var_2781 = 1;
        }
        if (Gvar.var_2761 == Gvar.var_66 && Gvar.var_2759 == Gvar.var_67) {
            Gvar.var_2781 = 1;
        }
        if (Gvar.var_2758 == Gvar.var_66 && Gvar.var_2762 == Gvar.var_67) {
            Gvar.var_2781 = 1;
        }
        if (Gvar.var_2758 == Gvar.var_66 && Gvar.var_2763 == Gvar.var_67) {
            Gvar.var_2781 = 1;
        }
        if (Gvar.var_2760 == Gvar.var_66 && Gvar.var_2762 == Gvar.var_67) {
            Gvar.var_2781 = 1;
        }
        if (Gvar.var_2761 == Gvar.var_66 && Gvar.var_2762 == Gvar.var_67) {
            Gvar.var_2781 = 1;
        }
        if (Gvar.var_2760 == Gvar.var_66 && Gvar.var_2763 == Gvar.var_67) {
            Gvar.var_2781 = 1;
        }
        if (Gvar.var_2761 == Gvar.var_66 && Gvar.var_2763 == Gvar.var_67) {
            Gvar.var_2781 = 1;
        }
        if (Gvar.dungeon_number == 99) {
            if (Gvar.var_83[Gvar.var_673].Var0 == 93 && Gvar.var_83[Gvar.var_673].Var16 == 1) {
                Gvar.var_2781 = 1;
            }
            if (Gvar.var_83[Gvar.var_673].Var0 == 7 && Gvar.var_83[Gvar.var_673].Var16 == 1) {
                Gvar.var_2781 = 1;
            }
            if (Gvar.var_83[Gvar.var_673].Var0 == 141 && Gvar.var_83[Gvar.var_673].Var16 == 1) {
                Gvar.var_2781 = 1;
            }
            if (Gvar.var_83[Gvar.var_673].Var0 == 56 && Gvar.var_83[Gvar.var_673].Var16 == 1) {
                Gvar.var_2781 = 1;
            }
            if (Gvar.var_83[Gvar.var_673].Var0 == 136 && Gvar.var_83[Gvar.var_673].Var16 == 1) {
                Gvar.var_2781 = 1;
            }
            if (Gvar.var_83[Gvar.var_673].Var0 == 48 && Gvar.var_83[Gvar.var_673].Var16 == 1) {
                Gvar.var_2781 = 1;
            }
            if (Gvar.var_83[Gvar.var_673].Var0 == 95 && Gvar.var_83[Gvar.var_673].Var16 == 1) {
                Gvar.var_2781 = 1;
            }
            if (Gvar.var_83[Gvar.var_673].Var0 == 15 && Gvar.var_83[Gvar.var_673].Var16 == 1) {
                Gvar.var_2781 = 1;
            }
            if (Gvar.var_83[Gvar.var_673].Var0 == 80 && Gvar.var_83[Gvar.var_673].Var16 == 1) {
                Gvar.var_2781 = 1;
            }
            if (Gvar.var_83[Gvar.var_673].Var0 == 21 && Gvar.var_83[Gvar.var_673].Var16 == 1) {
                Gvar.var_2781 = 1;
            }
            if (Gvar.var_83[Gvar.var_673].Var0 == 121 && Gvar.var_83[Gvar.var_673].Var16 == 1) {
                Gvar.var_2781 = 1;
            }
            if (Gvar.var_83[Gvar.var_673].Var0 == 155 && Gvar.var_83[Gvar.var_673].Var16 == 1) {
                Gvar.var_2781 = 1;
            }
            if (Gvar.var_83[Gvar.var_673].Var0 == 151 && Gvar.var_83[Gvar.var_673].Var16 == 1) {
                Gvar.var_2781 = 1;
            }
            if (Gvar.var_83[Gvar.var_673].Var0 == 126 && Gvar.var_83[Gvar.var_673].Var16 == 1) {
                Gvar.var_2781 = 1;
            }
            if (Gvar.var_83[Gvar.var_673].Var0 == 40 && Gvar.var_83[Gvar.var_673].Var16 == 1) {
                Gvar.var_2781 = 1;
            }
            if (Gvar.var_83[Gvar.var_673].Var0 == 41 && Gvar.var_83[Gvar.var_673].Var16 == 1) {
                Gvar.var_2781 = 1;
            }
            if (Gvar.var_83[Gvar.var_673].Var0 == 42 && Gvar.var_83[Gvar.var_673].Var16 == 1) {
                Gvar.var_2781 = 1;
            }
            if (Gvar.var_83[Gvar.var_673].Var0 == 47 && Gvar.var_83[Gvar.var_673].Var16 == 1) {
                Gvar.var_2781 = 1;
            }
            if (Gvar.var_83[Gvar.var_673].Var0 == 67 && Gvar.var_83[Gvar.var_673].Var16 == 1) {
                Gvar.var_2781 = 1;
            }
        }
        if (Gvar.var_2781 >= 3) {
            Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
            await Func.func577();
            return;
        }
        // No = 0 なので、拠点(ホテル、亀、)
        if (Gvar.dungeon_number == 0) {
            // No = 76 エコーズACT2
            if (Gvar.var_83[Gvar.var_673].Var0 == 76) {
                Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
                await Func.func577();
                return;
            }
        }
        Gvar.var_2782 = Gvar.var_423;
        Gvar.var_2783 = Gvar.var_424;
        Gvar.var_2784 = Gvar.var_423;
        Gvar.var_2785 = Gvar.var_423;
        Gvar.var_2786 = Gvar.var_424;
        Gvar.var_2787 = Gvar.var_424;
        Gvar.var_2788 = 10;
        // No = 172 虫食いでない
        if (Gvar.var_83[Gvar.var_673].Var0 == 172) {
            Gvar.var_2788 = 3;
        }
        // No = 175 不明(没敵チャカ?)
        if (Gvar.var_83[Gvar.var_673].Var0 == 175) {
            Gvar.var_2788 = 3;
        }
        for (let cnt1 = 0; cnt1 < Gvar.var_2788; ++cnt1) {
            if (Gvar.var_2770 == 1) {
                if (Gvar.var_82[Gvar.var_2784][Gvar.var_2783] == Gvar.var_2778) {
                    Gvar.var_83[Gvar.var_673].Var18 = 1;
                    Gvar.var_83[Gvar.var_673].Var5 = 6;
                    break;
                }
                if (Gvar.var_82[Gvar.var_2785][Gvar.var_2783] == Gvar.var_2778) {
                    Gvar.var_83[Gvar.var_673].Var18 = 1;
                    Gvar.var_83[Gvar.var_673].Var5 = 4;
                    break;
                }
                if (Gvar.var_82[Gvar.var_2782][Gvar.var_2786] == Gvar.var_2778) {
                    Gvar.var_83[Gvar.var_673].Var18 = 1;
                    Gvar.var_83[Gvar.var_673].Var5 = 2;
                    break;
                }
                if (Gvar.var_82[Gvar.var_2782][Gvar.var_2787] == Gvar.var_2778) {
                    Gvar.var_83[Gvar.var_673].Var18 = 1;
                    Gvar.var_83[Gvar.var_673].Var5 = 8;
                    break;
                }
                if (Gvar.var_82[Gvar.var_2785][Gvar.var_2786] == Gvar.var_2778) {
                    Gvar.var_83[Gvar.var_673].Var18 = 1;
                    Gvar.var_83[Gvar.var_673].Var5 = 1;
                    break;
                }
                if (Gvar.var_82[Gvar.var_2784][Gvar.var_2786] == Gvar.var_2778) {
                    Gvar.var_83[Gvar.var_673].Var18 = 1;
                    Gvar.var_83[Gvar.var_673].Var5 = 3;
                    break;
                }
                if (Gvar.var_82[Gvar.var_2785][Gvar.var_2787] == Gvar.var_2778) {
                    Gvar.var_83[Gvar.var_673].Var18 = 1;
                    Gvar.var_83[Gvar.var_673].Var5 = 7;
                    break;
                }
                if (Gvar.var_82[Gvar.var_2784][Gvar.var_2787] == Gvar.var_2778) {
                    Gvar.var_83[Gvar.var_673].Var18 = 1;
                    Gvar.var_83[Gvar.var_673].Var5 = 9;
                    break;
                }
            }
            if (Gvar.var_83[Gvar.var_673].Var18 == 0) {
                if (Gvar.var_123 == 0 && Gvar.var_131 == 0 && Gvar.var_144 == 0 && Gvar.var_218 == 0 && Gvar.var_2771 == 0) {
                    if (Gvar.var_65[Gvar.var_2784][Gvar.var_2783] == 1) {
                        Gvar.var_83[Gvar.var_673].Var18 = 1;
                        Gvar.var_83[Gvar.var_673].Var5 = 6;
                        break;
                    }
                    if (Gvar.var_65[Gvar.var_2785][Gvar.var_2783] == 1) {
                        Gvar.var_83[Gvar.var_673].Var18 = 1;
                        Gvar.var_83[Gvar.var_673].Var5 = 4;
                        break;
                    }
                    if (Gvar.var_65[Gvar.var_2782][Gvar.var_2786] == 1) {
                        Gvar.var_83[Gvar.var_673].Var18 = 1;
                        Gvar.var_83[Gvar.var_673].Var5 = 2;
                        break;
                    }
                    if (Gvar.var_65[Gvar.var_2782][Gvar.var_2787] == 1) {
                        Gvar.var_83[Gvar.var_673].Var18 = 1;
                        Gvar.var_83[Gvar.var_673].Var5 = 8;
                        break;
                    }
                    if (Gvar.var_65[Gvar.var_2785][Gvar.var_2786] == 1) {
                        Gvar.var_83[Gvar.var_673].Var18 = 1;
                        Gvar.var_83[Gvar.var_673].Var5 = 1;
                        break;
                    }
                    if (Gvar.var_65[Gvar.var_2784][Gvar.var_2786] == 1) {
                        Gvar.var_83[Gvar.var_673].Var18 = 1;
                        Gvar.var_83[Gvar.var_673].Var5 = 3;
                        break;
                    }
                    if (Gvar.var_65[Gvar.var_2785][Gvar.var_2787] == 1) {
                        Gvar.var_83[Gvar.var_673].Var18 = 1;
                        Gvar.var_83[Gvar.var_673].Var5 = 7;
                        break;
                    }
                    if (Gvar.var_65[Gvar.var_2784][Gvar.var_2787] == 1) {
                        Gvar.var_83[Gvar.var_673].Var18 = 1;
                        Gvar.var_83[Gvar.var_673].Var5 = 9;
                        break;
                    }
                }
                if (Gvar.var_123 >= 1) {
                    if (Gvar.var_82[Gvar.var_2784][Gvar.var_2783] == Gvar.var_124) {
                        Gvar.var_83[Gvar.var_673].Var18 = 1;
                        Gvar.var_83[Gvar.var_673].Var5 = 6;
                        break;
                    }
                    if (Gvar.var_82[Gvar.var_2785][Gvar.var_2783] == Gvar.var_124) {
                        Gvar.var_83[Gvar.var_673].Var18 = 1;
                        Gvar.var_83[Gvar.var_673].Var5 = 4;
                        break;
                    }
                    if (Gvar.var_82[Gvar.var_2782][Gvar.var_2786] == Gvar.var_124) {
                        Gvar.var_83[Gvar.var_673].Var18 = 1;
                        Gvar.var_83[Gvar.var_673].Var5 = 2;
                        break;
                    }
                    if (Gvar.var_82[Gvar.var_2782][Gvar.var_2787] == Gvar.var_124) {
                        Gvar.var_83[Gvar.var_673].Var18 = 1;
                        Gvar.var_83[Gvar.var_673].Var5 = 8;
                        break;
                    }
                    if (Gvar.var_82[Gvar.var_2785][Gvar.var_2786] == Gvar.var_124) {
                        Gvar.var_83[Gvar.var_673].Var18 = 1;
                        Gvar.var_83[Gvar.var_673].Var5 = 1;
                        break;
                    }
                    if (Gvar.var_82[Gvar.var_2784][Gvar.var_2786] == Gvar.var_124) {
                        Gvar.var_83[Gvar.var_673].Var18 = 1;
                        Gvar.var_83[Gvar.var_673].Var5 = 3;
                        break;
                    }
                    if (Gvar.var_82[Gvar.var_2785][Gvar.var_2787] == Gvar.var_124) {
                        Gvar.var_83[Gvar.var_673].Var18 = 1;
                        Gvar.var_83[Gvar.var_673].Var5 = 7;
                        break;
                    }
                    if (Gvar.var_82[Gvar.var_2784][Gvar.var_2787] == Gvar.var_124) {
                        Gvar.var_83[Gvar.var_673].Var18 = 1;
                        Gvar.var_83[Gvar.var_673].Var5 = 9;
                        break;
                    }
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
        if (Gvar.var_83[Gvar.var_673].Var18 == 1) {
            Gvar.var_2782 = Gvar.var_423;
            Gvar.var_2783 = Gvar.var_424;
            Gvar.var_2784 = Gvar.var_423;
            Gvar.var_2785 = Gvar.var_423;
            Gvar.var_2786 = Gvar.var_424;
            Gvar.var_2787 = Gvar.var_424;
            Gvar.var_2788 = 10;
            // No = 172 虫食いでない
            if (Gvar.var_83[Gvar.var_673].Var0 == 172) {
                Gvar.var_2788 = 3;
            }
            // No = 175 不明(没敵チャカ?)
            if (Gvar.var_83[Gvar.var_673].Var0 == 175) {
                Gvar.var_2788 = 3;
            }
            for (let cnt2 = 0; cnt2 < Gvar.var_2788; ++cnt2) {
                // No = 175 不明(没敵チャカ?)でなければ
                if (Gvar.var_83[Gvar.var_673].Var0 != 175) {
                    if (Gvar.var_83[Gvar.var_673].Var5 == 6 && Gvar.var_71[Gvar.var_2784][Gvar.var_2783] == 0) {
                        Gvar.var_83[Gvar.var_673].Var18 = 0;
                        break;
                    }
                    if (Gvar.var_83[Gvar.var_673].Var5 == 4 && Gvar.var_71[Gvar.var_2785][Gvar.var_2783] == 0) {
                        Gvar.var_83[Gvar.var_673].Var18 = 0;
                        break;
                    }
                    if (Gvar.var_83[Gvar.var_673].Var5 == 2 && Gvar.var_71[Gvar.var_2782][Gvar.var_2786] == 0) {
                        Gvar.var_83[Gvar.var_673].Var18 = 0;
                        break;
                    }
                    if (Gvar.var_83[Gvar.var_673].Var5 == 8 && Gvar.var_71[Gvar.var_2782][Gvar.var_2787] == 0) {
                        Gvar.var_83[Gvar.var_673].Var18 = 0;
                        break;
                    }
                    if (Gvar.var_83[Gvar.var_673].Var5 == 1 && Gvar.var_71[Gvar.var_2785][Gvar.var_2786] == 0) {
                        Gvar.var_83[Gvar.var_673].Var18 = 0;
                        break;
                    }
                    if (Gvar.var_83[Gvar.var_673].Var5 == 3 && Gvar.var_71[Gvar.var_2784][Gvar.var_2786] == 0) {
                        Gvar.var_83[Gvar.var_673].Var18 = 0;
                        break;
                    }
                    if (Gvar.var_83[Gvar.var_673].Var5 == 7 && Gvar.var_71[Gvar.var_2785][Gvar.var_2787] == 0) {
                        Gvar.var_83[Gvar.var_673].Var18 = 0;
                        break;
                    }
                    if (Gvar.var_83[Gvar.var_673].Var5 == 9 && Gvar.var_71[Gvar.var_2784][Gvar.var_2787] == 0) {
                        Gvar.var_83[Gvar.var_673].Var18 = 0;
                        break;
                    }
                }
                // No = 175 不明(没敵チャカ?)
                if (Gvar.var_83[Gvar.var_673].Var0 == 175 && cnt2 == 1) {
                    if (Gvar.var_83[Gvar.var_673].Var5 == 6 && Gvar.var_71[Gvar.var_2784][Gvar.var_2783] != 0) {
                        Gvar.var_83[Gvar.var_673].Var18 = 0;
                        break;
                    }
                    if (Gvar.var_83[Gvar.var_673].Var5 == 4 && Gvar.var_71[Gvar.var_2785][Gvar.var_2783] != 0) {
                        Gvar.var_83[Gvar.var_673].Var18 = 0;
                        break;
                    }
                    if (Gvar.var_83[Gvar.var_673].Var5 == 2 && Gvar.var_71[Gvar.var_2782][Gvar.var_2786] != 0) {
                        Gvar.var_83[Gvar.var_673].Var18 = 0;
                        break;
                    }
                    if (Gvar.var_83[Gvar.var_673].Var5 == 8 && Gvar.var_71[Gvar.var_2782][Gvar.var_2787] != 0) {
                        Gvar.var_83[Gvar.var_673].Var18 = 0;
                        break;
                    }
                    if (Gvar.var_83[Gvar.var_673].Var5 == 1 && Gvar.var_71[Gvar.var_2785][Gvar.var_2786] != 0) {
                        Gvar.var_83[Gvar.var_673].Var18 = 0;
                        break;
                    }
                    if (Gvar.var_83[Gvar.var_673].Var5 == 3 && Gvar.var_71[Gvar.var_2784][Gvar.var_2786] != 0) {
                        Gvar.var_83[Gvar.var_673].Var18 = 0;
                        break;
                    }
                    if (Gvar.var_83[Gvar.var_673].Var5 == 7 && Gvar.var_71[Gvar.var_2785][Gvar.var_2787] != 0) {
                        Gvar.var_83[Gvar.var_673].Var18 = 0;
                        break;
                    }
                    if (Gvar.var_83[Gvar.var_673].Var5 == 9 && Gvar.var_71[Gvar.var_2784][Gvar.var_2787] != 0) {
                        Gvar.var_83[Gvar.var_673].Var18 = 0;
                        break;
                    }
                }
                // No = 47 億泰、No = 67 ブチ切れた億泰、No = 45 由花子、No = 158 プッツン由花子、No = 21 ストレイキャット、No = 132 レクイエムジョルノ、No = 113 DIO、No = 76 エコーズACT2
                if (Gvar.var_83[Gvar.var_673].Var0 == 47 || Gvar.var_83[Gvar.var_673].Var0 == 67 || Gvar.var_83[Gvar.var_673].Var0 == 45 || Gvar.var_83[Gvar.var_673].Var0 == 158 || Gvar.var_83[Gvar.var_673].Var0 == 21 || Gvar.var_83[Gvar.var_673].Var0 == 132 || Gvar.var_83[Gvar.var_673].Var0 == 113 || Gvar.var_83[Gvar.var_673].Var0 == 76) {
                    if (cnt2 != 0) {
                        if (Gvar.var_83[Gvar.var_673].Var5 == 6 && Gvar.var_82[Gvar.var_2784][Gvar.var_2783] != 0) {
                            Gvar.var_83[Gvar.var_673].Var18 = 0;
                            break;
                        }
                        if (Gvar.var_83[Gvar.var_673].Var5 == 4 && Gvar.var_82[Gvar.var_2785][Gvar.var_2783] != 0) {
                            Gvar.var_83[Gvar.var_673].Var18 = 0;
                            break;
                        }
                        if (Gvar.var_83[Gvar.var_673].Var5 == 2 && Gvar.var_82[Gvar.var_2782][Gvar.var_2786] != 0) {
                            Gvar.var_83[Gvar.var_673].Var18 = 0;
                            break;
                        }
                        if (Gvar.var_83[Gvar.var_673].Var5 == 8 && Gvar.var_82[Gvar.var_2782][Gvar.var_2787] != 0) {
                            Gvar.var_83[Gvar.var_673].Var18 = 0;
                            break;
                        }
                        if (Gvar.var_83[Gvar.var_673].Var5 == 1 && Gvar.var_82[Gvar.var_2785][Gvar.var_2786] != 0) {
                            Gvar.var_83[Gvar.var_673].Var18 = 0;
                            break;
                        }
                        if (Gvar.var_83[Gvar.var_673].Var5 == 3 && Gvar.var_82[Gvar.var_2784][Gvar.var_2786] != 0) {
                            Gvar.var_83[Gvar.var_673].Var18 = 0;
                            break;
                        }
                        if (Gvar.var_83[Gvar.var_673].Var5 == 7 && Gvar.var_82[Gvar.var_2785][Gvar.var_2787] != 0) {
                            Gvar.var_83[Gvar.var_673].Var18 = 0;
                            break;
                        }
                        if (Gvar.var_83[Gvar.var_673].Var5 == 9 && Gvar.var_82[Gvar.var_2784][Gvar.var_2787] != 0) {
                            Gvar.var_83[Gvar.var_673].Var18 = 0;
                            break;
                        }
                    }
                }
                if (Gvar.var_123 == 0 && Gvar.var_131 == 0 && Gvar.var_144 == 0 && Gvar.var_218 == 0) {
                    if (Gvar.var_65[Gvar.var_2784][Gvar.var_2783] == 1) {
                        break;
                    }
                    if (Gvar.var_65[Gvar.var_2785][Gvar.var_2783] == 1) {
                        break;
                    }
                    if (Gvar.var_65[Gvar.var_2782][Gvar.var_2786] == 1) {
                        break;
                    }
                    if (Gvar.var_65[Gvar.var_2782][Gvar.var_2787] == 1) {
                        break;
                    }
                    if (Gvar.var_65[Gvar.var_2785][Gvar.var_2786] == 1) {
                        break;
                    }
                    if (Gvar.var_65[Gvar.var_2784][Gvar.var_2786] == 1) {
                        break;
                    }
                    if (Gvar.var_65[Gvar.var_2785][Gvar.var_2787] == 1) {
                        break;
                    }
                    if (Gvar.var_65[Gvar.var_2784][Gvar.var_2787] == 1) {
                        break;
                    }
                }
                if (Gvar.var_123 >= 1) {
                    if (Gvar.var_82[Gvar.var_2784][Gvar.var_2783] == Gvar.var_124) {
                        break;
                    }
                    if (Gvar.var_82[Gvar.var_2785][Gvar.var_2783] == Gvar.var_124) {
                        break;
                    }
                    if (Gvar.var_82[Gvar.var_2782][Gvar.var_2786] == Gvar.var_124) {
                        break;
                    }
                    if (Gvar.var_82[Gvar.var_2782][Gvar.var_2787] == Gvar.var_124) {
                        break;
                    }
                    if (Gvar.var_82[Gvar.var_2785][Gvar.var_2786] == Gvar.var_124) {
                        break;
                    }
                    if (Gvar.var_82[Gvar.var_2784][Gvar.var_2786] == Gvar.var_124) {
                        break;
                    }
                    if (Gvar.var_82[Gvar.var_2785][Gvar.var_2787] == Gvar.var_124) {
                        break;
                    }
                    if (Gvar.var_82[Gvar.var_2784][Gvar.var_2787] == Gvar.var_124) {
                        break;
                    }
                }
                if (Gvar.var_2770 >= 1) {
                    if (Gvar.var_82[Gvar.var_2784][Gvar.var_2783] == Gvar.var_2778) {
                        break;
                    }
                    if (Gvar.var_82[Gvar.var_2785][Gvar.var_2783] == Gvar.var_2778) {
                        break;
                    }
                    if (Gvar.var_82[Gvar.var_2782][Gvar.var_2786] == Gvar.var_2778) {
                        break;
                    }
                    if (Gvar.var_82[Gvar.var_2782][Gvar.var_2787] == Gvar.var_2778) {
                        break;
                    }
                    if (Gvar.var_82[Gvar.var_2785][Gvar.var_2786] == Gvar.var_2778) {
                        break;
                    }
                    if (Gvar.var_82[Gvar.var_2784][Gvar.var_2786] == Gvar.var_2778) {
                        break;
                    }
                    if (Gvar.var_82[Gvar.var_2785][Gvar.var_2787] == Gvar.var_2778) {
                        break;
                    }
                    if (Gvar.var_82[Gvar.var_2784][Gvar.var_2787] == Gvar.var_2778) {
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
        await Func.func577();
        // No = 113 DIO
        if (Gvar.var_83[Gvar.var_673].Var0 == 113 && Gvar.var_83[Gvar.var_673].Var18 == 1) {
            Gvar.var_83[Gvar.var_673].Var18 = 2;
        }
        return;
}

export {func576}
