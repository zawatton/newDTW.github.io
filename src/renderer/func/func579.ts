/**
 * func579 — func579 不明
 *
 * (org原典: newDTW_func5)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Enemy from '../enemy/index'


async function func579(this: any) {
        Adap.dbgprt(579);
        Gvar.var_673 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_97; ++cnt1) {
            Gvar.var_743 = 0; //スタンド像付与フラグOFF
            if (Gvar.var_83[Gvar.var_673].Var13 == 0) {
                if (Gvar.var_83[Gvar.var_673].Var9 == 1) {
                    if (Gvar.var_83[Gvar.var_673].Var27 != 0) {
                        Gvar.var_2793 = Gvar.var_83[Gvar.var_673].Var27;
                        if (Gvar.var_83[Gvar.var_2793].Var0 == 0) {
                            Gvar.var_83[Gvar.var_673].Var27 = 0;
                            Gvar.var_83[Gvar.var_673].Var9 = 0;
                        }
                        if (Gvar.var_83[Gvar.var_673].Var0 == 0) {
                            Gvar.var_83[Gvar.var_673].Var27 = 0;
                            Gvar.var_83[Gvar.var_673].Var9 = 0;
                        }
                    }
                    Gvar.var_240 = 0;
                    if (Gvar.var_83[Gvar.var_673].Var9 == 1) {
                        Gvar.var_2794 = Gvar.var_66;
                        Gvar.var_2795 = Gvar.var_67;
                        await Func.func654(); // 敵の攻撃動作処理
                    }
                    if (Gvar.var_83[Gvar.var_673].Var9 == 1 && Gvar.var_83[Gvar.var_673].Var27 == 0) {
                        if (Gvar.var_211 != 0 && Gvar.var_83[Gvar.var_673].Var20 == 0 && Gvar.var_83[Gvar.var_673].Var0 != 0 && Gvar.var_83[Gvar.var_673].Var3 >= 1 && Gvar.var_66 == Gvar.var_2794 && Gvar.var_67 == Gvar.var_2795 && Gvar.var_83[Gvar.var_673].Var13 == 0) {
                            // No = 122 ポルナレフ、No = 129 アヌビスポルナレフ、No = 44 レッドホットチリペッパー、No = 110 カーズ、No = 162 バオー、No = 60 ザ・ニュー神父
                            if (Gvar.var_83[Gvar.var_673].Var0 == 122 || Gvar.var_83[Gvar.var_673].Var0 == 129 || Gvar.var_83[Gvar.var_673].Var0 == 44 || Gvar.var_83[Gvar.var_673].Var0 == 110 || Gvar.var_83[Gvar.var_673].Var0 == 162 || Gvar.var_83[Gvar.var_673].Var0 == 60) {
                                Gvar.var_2796 = 1;
                                Gvar.var_2794 = Gvar.var_66;
                                Gvar.var_2795 = Gvar.var_67;
                                await Func.func654(); // 敵の攻撃動作処理
                                Gvar.var_2796 = 0;
                            }
                        }
                        if (Gvar.var_211 != 0 && Gvar.var_157 == 0 && Gvar.var_66 == Gvar.var_2794 && Gvar.var_67 == Gvar.var_2795 && Gvar.var_83[Gvar.var_673].Var15 == 1 && Gvar.var_83[Gvar.var_673].Var0 != 0 && Gvar.var_83[Gvar.var_673].Var3 >= 1 && Gvar.var_83[Gvar.var_673].Var0 != 101 && Gvar.var_83[Gvar.var_673].Var0 != 102 && Gvar.var_83[Gvar.var_673].Var0 != 103 && Gvar.var_83[Gvar.var_673].Var0 != 104 && Gvar.var_83[Gvar.var_673].Var0 != 151 && Gvar.var_83[Gvar.var_673].Var13 == 0) {
                            Gvar.var_2794 = Gvar.var_66;
                            Gvar.var_2795 = Gvar.var_67;
                            await Func.func654(); // 敵の攻撃動作処理
                            if (Gvar.var_211 != 0 && Gvar.var_83[Gvar.var_673].Var20 == 0 && Gvar.var_83[Gvar.var_673].Var0 != 0 && Gvar.var_83[Gvar.var_673].Var3 >= 1 && Gvar.var_66 == Gvar.var_2794 && Gvar.var_67 == Gvar.var_2795 && Gvar.var_83[Gvar.var_673].Var13 == 0) {
                                // No = 122 ポルナレフ、No = 129 アヌビスポルナレフ、No = 44 レッドホットチリペッパー、No = 110 カーズ、No = 162 バオー、No = 60 ザ・ニュー神父
                                if (Gvar.var_83[Gvar.var_673].Var0 == 122 || Gvar.var_83[Gvar.var_673].Var0 == 129 || Gvar.var_83[Gvar.var_673].Var0 == 44 || Gvar.var_83[Gvar.var_673].Var0 == 110 || Gvar.var_83[Gvar.var_673].Var0 == 162 || Gvar.var_83[Gvar.var_673].Var0 == 60) {
                                    Gvar.var_2796 = 1;
                                    Gvar.var_2794 = Gvar.var_66;
                                    Gvar.var_2795 = Gvar.var_67;
                                    await Func.func654(); // 敵の攻撃動作処理
                                    Gvar.var_2796 = 0;
                                }
                            }
                        }
                    }
                    if (Gvar.var_83[Gvar.var_673].Var9 == 1 && Gvar.var_83[Gvar.var_673].Var27 != 0) {
                        Gvar.var_2793 = Gvar.var_83[Gvar.var_673].Var27;
                        if (Gvar.var_83[Gvar.var_2793].Var0 != 0 && Gvar.var_83[Gvar.var_2793].Var3 != 0 && Gvar.var_83[Gvar.var_673].Var20 == 0 && Gvar.var_83[Gvar.var_673].Var0 != 0 && Gvar.var_83[Gvar.var_673].Var3 >= 1 && Gvar.var_83[Gvar.var_673].Var13 == 0) {
                            // No = 122 ポルナレフ、No = 129 アヌビスポルナレフ、No = 44 レッドホットチリペッパー、No = 110 カーズ、No = 162 バオー、No = 60 ザ・ニュー神父
                            if (Gvar.var_83[Gvar.var_673].Var0 == 122 || Gvar.var_83[Gvar.var_673].Var0 == 129 || Gvar.var_83[Gvar.var_673].Var0 == 44 || Gvar.var_83[Gvar.var_673].Var0 == 110 || Gvar.var_83[Gvar.var_673].Var0 == 162 || Gvar.var_83[Gvar.var_673].Var0 == 60) {
                                Gvar.var_2796 = 1;
                                Gvar.var_2794 = Gvar.var_66;
                                Gvar.var_2795 = Gvar.var_67;
                                await Func.func654(); // 敵の攻撃動作処理
                                Gvar.var_2796 = 0;
                            }
                        }
                        if (Gvar.var_83[Gvar.var_2793].Var0 != 0 && Gvar.var_83[Gvar.var_2793].Var3 != 0 && Gvar.var_83[Gvar.var_2793].Var15 == 0 && Gvar.var_83[Gvar.var_673].Var15 == 1 && Gvar.var_83[Gvar.var_673].Var0 != 0 && Gvar.var_83[Gvar.var_673].Var3 >= 1 && Gvar.var_83[Gvar.var_673].Var0 != 101 && Gvar.var_83[Gvar.var_673].Var0 != 102 && Gvar.var_83[Gvar.var_673].Var0 != 103 && Gvar.var_83[Gvar.var_673].Var0 != 104 && Gvar.var_83[Gvar.var_673].Var0 != 151 && Gvar.var_83[Gvar.var_673].Var13 == 0) {
                            Gvar.var_2794 = Gvar.var_66;
                            Gvar.var_2795 = Gvar.var_67;
                            await Func.func654(); // 敵の攻撃動作処理
                            if (Gvar.var_83[Gvar.var_2793].Var0 != 0 && Gvar.var_83[Gvar.var_2793].Var3 != 0 && Gvar.var_83[Gvar.var_673].Var20 == 0 && Gvar.var_83[Gvar.var_673].Var0 != 0 && Gvar.var_83[Gvar.var_673].Var3 >= 1 && Gvar.var_83[Gvar.var_673].Var13 == 0) {
                                // No = 122 ポルナレフ、No = 129 アヌビスポルナレフ、No = 44 レッドホットチリペッパー、No = 110 カーズ、No = 162 バオー、No = 60 ザ・ニュー神父
                                if (Gvar.var_83[Gvar.var_673].Var0 == 122 || Gvar.var_83[Gvar.var_673].Var0 == 129 || Gvar.var_83[Gvar.var_673].Var0 == 44 || Gvar.var_83[Gvar.var_673].Var0 == 110 || Gvar.var_83[Gvar.var_673].Var0 == 162 || Gvar.var_83[Gvar.var_673].Var0 == 60) {
                                    Gvar.var_2796 = 1;
                                    Gvar.var_2794 = Gvar.var_66;
                                    Gvar.var_2795 = Gvar.var_67;
                                    await Func.func654(); // 敵の攻撃動作処理
                                    Gvar.var_2796 = 0;
                                }
                            }
                        }
                    }
                    Gvar.var_83[Gvar.var_673].Var27 = 0;
                }
                if (Gvar.var_83[Gvar.var_673].Var18 >= 1) { // 特殊能力発動フラグ?がONであれば
                    await Func.func581(); // 各敵の能力動作処理設定
                }
                if (Gvar.var_131 == 0 && Gvar.var_123 == 0 && Gvar.var_83[Gvar.var_673].Var20 == 0 && Gvar.var_144 == 0) {
                    // No = 19 アラビアファッツ
                    if (Gvar.var_83[Gvar.var_673].Var0 == 19 && Gvar.var_201 != 14 && Gvar.var_201 == Gvar.var_83[Gvar.var_673].Var10 && Gvar.var_157 != 1) {
                        await Enemy.func608();
                    }
                    // No = 61 ヨーヨーマッ
                    if (Gvar.var_83[Gvar.var_673].Var0 == 61 && Gvar.var_201 != 14 && Gvar.var_201 == Gvar.var_83[Gvar.var_673].Var10 && Gvar.var_157 != 1) {
                        await Enemy.func611();
                    }
                }
                // No = 91 ACT1さなぎ、No = 92 ACT2さなぎ
                if (Gvar.var_83[Gvar.var_673].Var0 == 91 || Gvar.var_83[Gvar.var_673].Var0 == 92) {
                    if (Gvar.var_157 != 1 && Gvar.var_83[Gvar.var_673].Var20 == 0) {
                        await Enemy.func580();
                    }
                }
            }
            Gvar.var_83[Gvar.var_673].Var18 = 0;
            Gvar.var_83[Gvar.var_673].Var9 = 0;
            if (Gvar.var_83[Gvar.var_673].Var15 >= 1) {
                Gvar.var_83[Gvar.var_673].Var15 = 1;
            }
            if (Gvar.var_212 == 1 || Gvar.var_211 <= 0) {
                break;
            }
            Gvar.var_673 = Gvar.var_673 + 1;
        }
        return;
}

export {func579}
