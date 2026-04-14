/**
 * item302 — No = 302 ハイウェイ・トゥ・ヘルの発動処理
 *
 * 各スタンドの発動能力設定。
 *
 * (org原典: newDTW_item(スタンドdisc))
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 302 ハイウェイ・トゥ・ヘルの発動処理
async function item302(this: any) {
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (Gvar.var_172 == 1) { // Gvar.var_172 発動効果が向上するフラグがONであれば
            await Func.setMessage("発動能力がパワーアップしている！",
                                   "", 7, true, false, false);
        }
        await Func.setMessage("オレって情けねえよなあ～～～。",
                               "死にたくなった･･･", 7, false, false, true);
        await Func.AutoDraw(20);

        Gvar.var_1054 = 1;
        await Func.AutoDraw(10);
        Adap.DSPLAY(136);
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
            Gvar.var_1054 = 2;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1054 = 3;
            await Func.func337(); // メッセージ表示処理(自動)
        }
        if (Gvar.var_211 == 1) {
            Gvar.var_211 = 0;
            Gvar.var_212 = 1;
            Gvar.var_356 = 247;
            Gvar.var_199 = 2;
            await Func.AutoDraw(20);
            await Func.func009(); // ディアボロ側ターン処理(ループ処理)
            return;
        }
        if (Gvar.var_211 > 1) {
            Gvar.var_211 = Math.floor(Gvar.var_211 / 2);
            Gvar.var_208 = Math.floor(Gvar.var_211 / 2) + Gvar.var_208;
        }
        await Func.AutoDraw(20);
        Gvar.var_2307 = 0;
        Gvar.var_403 = "道連れにしている！";
        Gvar.var_2217 = 1;
        Gvar.var_2194 = 1;
        for (let cnt2 = 0; cnt2 < Gvar.var_97; ++cnt2) {
            Gvar.var_2308 = Gvar.var_565 * 2;
            Gvar.var_2219 = Adap.rnd(3);
            Gvar.var_2308 = Gvar.var_2308 + Gvar.var_2219;
            if (Gvar.var_172 >= 1) { // Gvar.var_172 発動効果が向上するフラグがONであれば
                Gvar.var_2308 = Gvar.var_2308 * 2;
            }
            if (Gvar.var_2194 != Gvar.var_124) {
                Gvar.var_2220 = 0;
                if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var10 == Gvar.var_201 && Gvar.var_201 > 0 && Gvar.var_201 <= 12) {
                    Gvar.var_402 = Gvar.var_2194;
                    Gvar.var_209 = Gvar.var_2308;
                    Gvar.var_2307 = Gvar.var_2307 + Gvar.var_2308;
                    await Func.func705();
                    await Func.AutoDraw(2);
                    Gvar.var_2220 = 1;
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
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2308;
                        Gvar.var_2307 = Gvar.var_2307 + Gvar.var_2308;
                        await Func.func705();
                        await Func.AutoDraw(2);
                        Gvar.var_2220 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_66 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2308;
                        Gvar.var_2307 = Gvar.var_2307 + Gvar.var_2308;
                        await Func.func705();
                        await Func.AutoDraw(2);
                        Gvar.var_2220 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_67) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2308;
                        Gvar.var_2307 = Gvar.var_2307 + Gvar.var_2308;
                        await Func.func705();
                        await Func.AutoDraw(2);
                        Gvar.var_2220 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_67) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2308;
                        Gvar.var_2307 = Gvar.var_2307 + Gvar.var_2308;
                        await Func.func705();
                        await Func.AutoDraw(2);
                        Gvar.var_2220 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2308;
                        Gvar.var_2307 = Gvar.var_2307 + Gvar.var_2308;
                        await Func.func705();
                        await Func.AutoDraw(2);
                        Gvar.var_2220 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2308;
                        Gvar.var_2307 = Gvar.var_2307 + Gvar.var_2308;
                        await Func.func705();
                        await Func.AutoDraw(2);
                        Gvar.var_2220 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2308;
                        Gvar.var_2307 = Gvar.var_2307 + Gvar.var_2308;
                        await Func.func705();
                        await Func.AutoDraw(2);
                        Gvar.var_2220 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2308;
                        Gvar.var_2307 = Gvar.var_2307 + Gvar.var_2308;
                        await Func.func705();
                        await Func.AutoDraw(2);
                        Gvar.var_2220 = 1;
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
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2308;
                        Gvar.var_2307 = Gvar.var_2307 + Gvar.var_2308;
                        await Func.func705();
                        await Func.AutoDraw(2);
                        Gvar.var_2220 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_71[Gvar.var_2224][Gvar.var_2222] == Gvar.var_201) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2308;
                        Gvar.var_2307 = Gvar.var_2307 + Gvar.var_2308;
                        await Func.func705();
                        await Func.AutoDraw(2);
                        Gvar.var_2220 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_71[Gvar.var_2221][Gvar.var_2225] == Gvar.var_201) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2308;
                        Gvar.var_2307 = Gvar.var_2307 + Gvar.var_2308;
                        await Func.func705();
                        await Func.AutoDraw(2);
                        Gvar.var_2220 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_71[Gvar.var_2221][Gvar.var_2226] == Gvar.var_201) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2308;
                        Gvar.var_2307 = Gvar.var_2307 + Gvar.var_2308;
                        await Func.func705();
                        await Func.AutoDraw(2);
                        Gvar.var_2220 = 1;
                    }
                }
            }
            Gvar.var_2194 = Gvar.var_2194 + 1;
        }
        Gvar.var_1054 = 0;
        await Func.AutoDraw(10);
        Gvar.var_2217 = 0;
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {item302}
