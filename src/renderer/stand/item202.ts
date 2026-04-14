/**
 * item202 — No = 202 ホワイトアルバムの発動処理
 *
 * 各スタンドの発動能力設定。
 *
 * (org原典: newDTW_item(スタンドdisc))
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 202 ホワイトアルバムの発動処理
async function item202(this: any) {
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (Gvar.var_172 == 1) { // Gvar.var_172 発動効果が向上するフラグがONであれば
            await Func.setMessage("発動能力がパワーアップしている！",
                                   "", 7, true, false, false);
        }
        await Func.setMessage("低温世界で動ける物質はなにもなくなる",
                               "全てを止められる！", 7, false, false, false);

        Adap.gsel(19);
        Adap.color(255, 255, 255);
        Adap.boxf(Gvar.left = 0, Gvar.top1 = 0, Gvar.right = 680, Gvar.bottom = 680);
        Adap.gsel(0);
        Adap.DSPLAY(126);
        Gvar.var_529 = 1;
        await Func.AutoDraw(20);
        Gvar.var_1992 = 1;
        Gvar.var_1993 = Gvar.var_66 - 1;
        Gvar.var_1994 = Gvar.var_66 + 1;
        Gvar.var_1995 = Gvar.var_67 + 1;
        Gvar.var_1996 = Gvar.var_67 - 1;
        for (let cnt2 = 0; cnt2 < Gvar.var_97; ++cnt2) {
            if (Gvar.var_83[Gvar.var_1992].Var10 == Gvar.var_201 && Gvar.var_201 != 14) {
                Gvar.var_83[Gvar.var_1992].Var12 = 0;
                Gvar.var_83[Gvar.var_1992].Var13 = 1;
                if (Gvar.var_114 == Gvar.var_1992) {
                    Gvar.var_114 = 0;
                }
            }
            if (Gvar.var_83[Gvar.var_1992].Var1 == Gvar.var_66 && Gvar.var_83[Gvar.var_1992].Var2 == Gvar.var_1995) {
                Gvar.var_83[Gvar.var_1992].Var12 = 0;
                Gvar.var_83[Gvar.var_1992].Var13 = 1;
                if (Gvar.var_114 == Gvar.var_1992) {
                    Gvar.var_114 = 0;
                }
            }
            if (Gvar.var_83[Gvar.var_1992].Var1 == Gvar.var_66 && Gvar.var_83[Gvar.var_1992].Var2 == Gvar.var_1996) {
                Gvar.var_83[Gvar.var_1992].Var12 = 0;
                Gvar.var_83[Gvar.var_1992].Var13 = 1;
                if (Gvar.var_114 == Gvar.var_1992) {
                    Gvar.var_114 = 0;
                }
            }
            if (Gvar.var_83[Gvar.var_1992].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_1992].Var2 == Gvar.var_67) {
                Gvar.var_83[Gvar.var_1992].Var12 = 0;
                Gvar.var_83[Gvar.var_1992].Var13 = 1;
                if (Gvar.var_114 == Gvar.var_1992) {
                    Gvar.var_114 = 0;
                }
            }
            if (Gvar.var_83[Gvar.var_1992].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_1992].Var2 == Gvar.var_67) {
                Gvar.var_83[Gvar.var_1992].Var12 = 0;
                Gvar.var_83[Gvar.var_1992].Var13 = 1;
                if (Gvar.var_114 == Gvar.var_1992) {
                    Gvar.var_114 = 0;
                }
            }
            if (Gvar.var_83[Gvar.var_1992].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_1992].Var2 == Gvar.var_1995) {
                Gvar.var_83[Gvar.var_1992].Var12 = 0;
                Gvar.var_83[Gvar.var_1992].Var13 = 1;
                if (Gvar.var_114 == Gvar.var_1992) {
                    Gvar.var_114 = 0;
                }
            }
            if (Gvar.var_83[Gvar.var_1992].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_1992].Var2 == Gvar.var_1995) {
                Gvar.var_83[Gvar.var_1992].Var12 = 0;
                Gvar.var_83[Gvar.var_1992].Var13 = 1;
                if (Gvar.var_114 == Gvar.var_1992) {
                    Gvar.var_114 = 0;
                }
            }
            if (Gvar.var_83[Gvar.var_1992].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_1992].Var2 == Gvar.var_1996) {
                Gvar.var_83[Gvar.var_1992].Var12 = 0;
                Gvar.var_83[Gvar.var_1992].Var13 = 1;
                if (Gvar.var_114 == Gvar.var_1992) {
                    Gvar.var_114 = 0;
                }
            }
            if (Gvar.var_83[Gvar.var_1992].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_1992].Var2 == Gvar.var_1996) {
                Gvar.var_83[Gvar.var_1992].Var12 = 0;
                Gvar.var_83[Gvar.var_1992].Var13 = 1;
                if (Gvar.var_114 == Gvar.var_1992) {
                    Gvar.var_114 = 0;
                }
            }
            if (Gvar.var_201 <= 12 && Gvar.var_201 != 0) {
                Gvar.var_2221 = Gvar.var_83[Gvar.var_1992].Var1;
                Gvar.var_2222 = Gvar.var_83[Gvar.var_1992].Var2;
                Gvar.var_2223 = Gvar.var_83[Gvar.var_1992].Var1 - 1;
                if (Gvar.var_2223 < 0) {
                    Gvar.var_2223 = 0;
                }
                Gvar.var_2224 = Gvar.var_83[Gvar.var_1992].Var1 + 1;
                if (Gvar.var_2224 > Gvar.var_33) {
                    Gvar.var_2224 = Gvar.var_33;
                }
                Gvar.var_2225 = Gvar.var_83[Gvar.var_1992].Var2 + 1;
                if (Gvar.var_2225 > Gvar.var_34) {
                    Gvar.var_2225 = Gvar.var_34;
                }
                Gvar.var_2226 = Gvar.var_83[Gvar.var_1992].Var2 - 1;
                if (Gvar.var_2226 < 0) {
                    Gvar.var_2226 = 0;
                }
                if (Gvar.var_83[Gvar.var_1992].Var0 != 0 && Gvar.var_71[Gvar.var_2223][Gvar.var_2222] == Gvar.var_201) {
                    Gvar.var_83[Gvar.var_1992].Var12 = 0;
                    Gvar.var_83[Gvar.var_1992].Var13 = 1;
                    if (Gvar.var_114 == Gvar.var_1992) {
                        Gvar.var_114 = 0;
                    }
                }
                if (Gvar.var_83[Gvar.var_1992].Var0 != 0 && Gvar.var_71[Gvar.var_2224][Gvar.var_2222] == Gvar.var_201) {
                    Gvar.var_83[Gvar.var_1992].Var12 = 0;
                    Gvar.var_83[Gvar.var_1992].Var13 = 1;
                    if (Gvar.var_114 == Gvar.var_1992) {
                        Gvar.var_114 = 0;
                    }
                }
                if (Gvar.var_83[Gvar.var_1992].Var0 != 0 && Gvar.var_71[Gvar.var_2221][Gvar.var_2225] == Gvar.var_201) {
                    Gvar.var_83[Gvar.var_1992].Var12 = 0;
                    Gvar.var_83[Gvar.var_1992].Var13 = 1;
                    if (Gvar.var_114 == Gvar.var_1992) {
                        Gvar.var_114 = 0;
                    }
                }
                if (Gvar.var_83[Gvar.var_1992].Var0 != 0 && Gvar.var_71[Gvar.var_2221][Gvar.var_2226] == Gvar.var_201) {
                    Gvar.var_83[Gvar.var_1992].Var12 = 0;
                    Gvar.var_83[Gvar.var_1992].Var13 = 1;
                    if (Gvar.var_114 == Gvar.var_1992) {
                        Gvar.var_114 = 0;
                    }
                }
            }
            if (Gvar.var_172 >= 1) { // Gvar.var_172 発動効果が向上するフラグがONであれば
                Gvar.var_83[Gvar.var_1992].Var12 = 0;
                Gvar.var_83[Gvar.var_1992].Var13 = 1;
                Gvar.var_114 = 0;
            }
            Gvar.var_1992 = Gvar.var_1992 + 1;
        }
        Gvar.var_114 = 0;
        await Func.AutoDraw(10);
        Gvar.var_529 = 0;
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {item202}
