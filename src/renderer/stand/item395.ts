/**
 * item395 — No = 395 バイツァ・ダストの発動処理
 *
 * 各スタンドの発動能力設定。
 *
 * (org原典: newDTW_item(スタンドdisc))
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 395 バイツァ・ダストの発動処理
async function item395(this: any) {
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        await Func.setMessage("キラークィーン【第３の爆弾】",
                               "「BITE THE DUST」（負けて死ね）！！", 7, false, false, true);
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_198 = 1; // メッセージウィンドウ開く
            Gvar.var_300 = 0;
        }
        Gvar.var_2314 = 0;
        Gvar.var_2194 = 1;
        for (let cnt2 = 0; cnt2 < Gvar.var_97; ++cnt2) {
            // No = 132 レクイエムジョルノ、No = 143 ウンガロでなければ
            // Ver0.1403にて追加。No = 171 離婚した承太郎
            if (Gvar.var_2194 != Gvar.var_124 && Gvar.var_83[Gvar.var_2194].Var0 != 132 && Gvar.var_83[Gvar.var_2194].Var0 != 143 && Gvar.var_83[Gvar.var_2231].Var0 != 171 && Gvar.var_83[Gvar.var_2194].Var0 != 34 && Gvar.var_83[Gvar.var_2194].Var31 != 4 && Gvar.var_83[Gvar.var_2194].Var31 != 5) {
                if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var10 == Gvar.var_201 && Gvar.var_201 > 0 && Gvar.var_201 <= 12) {
                    Gvar.var_83[Gvar.var_2194].Var12 = 0;
                    Gvar.var_83[Gvar.var_2194].Var13 = 0;
                    Gvar.var_83[Gvar.var_2194].Var24 = 3;
                    Gvar.var_2314 = 1;
                }
                if (Gvar.var_2220 == 0) {
                    Gvar.var_1993 = Gvar.var_66 - 1;
                    if (Gvar.var_1993 < 0) {
                        Gvar.var_1993 = 0;
                    }
                    Gvar.var_1994 = Gvar.var_66 + 1;
                    if (Gvar.var_1994 > Gvar.var_33) {
                        Gvar.var_1994 = Gvar.var_33;
                    }
                    Gvar.var_1995 = Gvar.var_67 + 1;
                    if (Gvar.var_1995 > Gvar.var_34) {
                        Gvar.var_1995 = Gvar.var_34;
                    }
                    Gvar.var_1996 = Gvar.var_67 - 1;
                    if (Gvar.var_1996 < 0) {
                        Gvar.var_1996 = 0;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_66 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                        Gvar.var_83[Gvar.var_2194].Var12 = 0;
                        Gvar.var_83[Gvar.var_2194].Var13 = 0;
                        Gvar.var_83[Gvar.var_2194].Var24 = 3;
                        Gvar.var_2314 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_66 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                        Gvar.var_83[Gvar.var_2194].Var12 = 0;
                        Gvar.var_83[Gvar.var_2194].Var13 = 0;
                        Gvar.var_83[Gvar.var_2194].Var24 = 3;
                        Gvar.var_2314 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_67) {
                        Gvar.var_83[Gvar.var_2194].Var12 = 0;
                        Gvar.var_83[Gvar.var_2194].Var13 = 0;
                        Gvar.var_83[Gvar.var_2194].Var24 = 3;
                        Gvar.var_2314 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_67) {
                        Gvar.var_83[Gvar.var_2194].Var12 = 0;
                        Gvar.var_83[Gvar.var_2194].Var13 = 0;
                        Gvar.var_83[Gvar.var_2194].Var24 = 3;
                        Gvar.var_2314 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                        Gvar.var_83[Gvar.var_2194].Var12 = 0;
                        Gvar.var_83[Gvar.var_2194].Var13 = 0;
                        Gvar.var_83[Gvar.var_2194].Var24 = 3;
                        Gvar.var_2314 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                        Gvar.var_83[Gvar.var_2194].Var12 = 0;
                        Gvar.var_83[Gvar.var_2194].Var13 = 0;
                        Gvar.var_83[Gvar.var_2194].Var24 = 3;
                        Gvar.var_2314 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                        Gvar.var_83[Gvar.var_2194].Var12 = 0;
                        Gvar.var_83[Gvar.var_2194].Var13 = 0;
                        Gvar.var_83[Gvar.var_2194].Var24 = 3;
                        Gvar.var_2314 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                        Gvar.var_83[Gvar.var_2194].Var12 = 0;
                        Gvar.var_83[Gvar.var_2194].Var13 = 0;
                        Gvar.var_83[Gvar.var_2194].Var24 = 3;
                        Gvar.var_2314 = 1;
                    }
                }
                if (Gvar.var_2220 == 0 && Gvar.var_201 <= 12 && Gvar.var_201 != 0) {
                    Gvar.var_2221 = Gvar.var_83[Gvar.var_2194].Var1;
                    Gvar.var_2222 = Gvar.var_83[Gvar.var_2194].Var2;
                    Gvar.var_2223 = Gvar.var_83[Gvar.var_2194].Var1 - 1;
                    if (Gvar.var_2223 < 0) {
                        Gvar.var_2223 = 0;
                    }
                    Gvar.var_2224 = Gvar.var_83[Gvar.var_2194].Var1 + 1;
                    if (Gvar.var_2224 > Gvar.var_33) {
                        Gvar.var_2224 = Gvar.var_33;
                    }
                    Gvar.var_2225 = Gvar.var_83[Gvar.var_2194].Var2 + 1;
                    if (Gvar.var_2225 > Gvar.var_34) {
                        Gvar.var_2225 = Gvar.var_34;
                    }
                    Gvar.var_2226 = Gvar.var_83[Gvar.var_2194].Var2 - 1;
                    if (Gvar.var_2226 < 0) {
                        Gvar.var_2226 = 0;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_71[Gvar.var_2223][Gvar.var_2222] == Gvar.var_201) {
                        Gvar.var_83[Gvar.var_2194].Var12 = 0;
                        Gvar.var_83[Gvar.var_2194].Var13 = 0;
                        Gvar.var_83[Gvar.var_2194].Var24 = 3;
                        Gvar.var_2314 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_71[Gvar.var_2224][Gvar.var_2222] == Gvar.var_201) {
                        Gvar.var_83[Gvar.var_2194].Var12 = 0;
                        Gvar.var_83[Gvar.var_2194].Var13 = 0;
                        Gvar.var_83[Gvar.var_2194].Var24 = 3;
                        Gvar.var_2314 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_71[Gvar.var_2221][Gvar.var_2225] == Gvar.var_201) {
                        Gvar.var_83[Gvar.var_2194].Var12 = 0;
                        Gvar.var_83[Gvar.var_2194].Var13 = 0;
                        Gvar.var_83[Gvar.var_2194].Var24 = 3;
                        Gvar.var_2314 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_71[Gvar.var_2221][Gvar.var_2226] == Gvar.var_201) {
                        Gvar.var_83[Gvar.var_2194].Var12 = 0;
                        Gvar.var_83[Gvar.var_2194].Var13 = 0;
                        Gvar.var_83[Gvar.var_2194].Var24 = 3;
                        Gvar.var_2314 = 1;
                    }
                }
            }
            Gvar.var_2194 = Gvar.var_2194 + 1;
        }
        if (Gvar.var_2314 == 1) {
            await Func.setMessage("すでに「瞳」の中に入っている！",
                                   "", 7, true, true, true);
            await Func.AutoDraw(10);
        }
        if (Gvar.var_2314 == 0) {
            await Func.setMessage("しかし何もおこらなかった…",
                                   "", 7, true, true, false);
            await Func.AutoDraw(10);
        }
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {item395}
