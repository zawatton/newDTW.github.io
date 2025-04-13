import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 105 チリペッパーの発動処理
async function item105(this: any) {
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        Adap.gsel(19);
        Adap.color(255, 255, 255);
        Adap.boxf(Gvar.left = 0, Gvar.top1 = 0, Gvar.right = 680, Gvar.bottom = 680);
        Adap.gsel(0);
        Gvar.var_311 = 255;
        await Func.setMessage("限界なく明るくなるッ！！", "", 7, false, false, false);
        Adap.DSPLAY(161);
        Gvar.var_312 = 1;
        for (let cnt2 = 0; cnt2 < 51; ++cnt2) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_311 = Gvar.var_311 - 5;
        }
        Gvar.var_312 = 0;
        Gvar.var_103 = 1;
        Gvar.var_121 = 1; // Gvar.var_121 罠が見えるようになるフラグON
        Gvar.var_2194 = 1;
        for (let cnt2 = 0; cnt2 < Gvar.var_336; ++cnt2) {
            if (Gvar.var_78[Gvar.var_2194].Var0 != 0) {
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
                if (Gvar.var_78[Gvar.var_2194].Var9 == Gvar.var_201 && Gvar.var_201 > 0 && Gvar.var_201 <= 12) {
                    await Func.func512();
                }
                if (Gvar.var_78[Gvar.var_2194].Var1 == Gvar.var_66 && Gvar.var_78[Gvar.var_2194].Var2 == Gvar.var_1995) {
                    await Func.func512();
                }
                if (Gvar.var_78[Gvar.var_2194].Var1 == Gvar.var_66 && Gvar.var_78[Gvar.var_2194].Var2 == Gvar.var_1996) {
                    await Func.func512();
                }
                if (Gvar.var_78[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_78[Gvar.var_2194].Var2 == Gvar.var_67) {
                    await Func.func512();
                }
                if (Gvar.var_78[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_78[Gvar.var_2194].Var2 == Gvar.var_67) {
                    await Func.func512();
                }
                if (Gvar.var_78[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_78[Gvar.var_2194].Var2 == Gvar.var_1995) {
                    await Func.func512();
                }
                if (Gvar.var_78[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_78[Gvar.var_2194].Var2 == Gvar.var_1995) {
                    await Func.func512();
                }
                if (Gvar.var_78[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_78[Gvar.var_2194].Var2 == Gvar.var_1996) {
                    await Func.func512();
                }
                if (Gvar.var_78[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_78[Gvar.var_2194].Var2 == Gvar.var_1996) {
                    await Func.func512();
                }
                if (Gvar.var_201 <= 12 && Gvar.var_201 != 0) {
                    Gvar.var_2221 = Gvar.var_78[Gvar.var_2194].Var1;
                    Gvar.var_2222 = Gvar.var_78[Gvar.var_2194].Var2;
                    Gvar.var_2223 = Gvar.var_78[Gvar.var_2194].Var1 - 1;
                    if (Gvar.var_2223 < 0) {
                        Gvar.var_2223 = 0;
                    }
                    Gvar.var_2224 = Gvar.var_78[Gvar.var_2194].Var1 + 1;
                    if (Gvar.var_2224 > Gvar.var_33) {
                        Gvar.var_2224 = Gvar.var_33;
                    }
                    Gvar.var_2225 = Gvar.var_78[Gvar.var_2194].Var2 + 1;
                    if (Gvar.var_2225 > Gvar.var_34) {
                        Gvar.var_2225 = Gvar.var_34;
                    }
                    Gvar.var_2226 = Gvar.var_78[Gvar.var_2194].Var2 - 1;
                    if (Gvar.var_2226 < 0) {
                        Gvar.var_2226 = 0;
                    }
                    if (Gvar.var_78[Gvar.var_2194].Var0 != 0 && Gvar.var_71[Gvar.var_2223][Gvar.var_2222] == Gvar.var_201) {
                        await Func.func512();
                    }
                    if (Gvar.var_78[Gvar.var_2194].Var0 != 0 && Gvar.var_71[Gvar.var_2224][Gvar.var_2222] == Gvar.var_201) {
                        await Func.func512();
                    }
                    if (Gvar.var_78[Gvar.var_2194].Var0 != 0 && Gvar.var_71[Gvar.var_2221][Gvar.var_2225] == Gvar.var_201) {
                        await Func.func512();
                    }
                    if (Gvar.var_78[Gvar.var_2194].Var0 != 0 && Gvar.var_71[Gvar.var_2221][Gvar.var_2226] == Gvar.var_201) {
                        await Func.func512();
                    }
                }
            }
            Gvar.var_2194 = Gvar.var_2194 + 1;
        }
        Gvar.var_2194 = 1;
        for (let cnt2 = 0; cnt2 < Gvar.var_97; ++cnt2) {
            if (Gvar.var_83[Gvar.var_2194].Var0 != 0) {
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
                if (Gvar.var_2194 != Gvar.var_124 && Gvar.var_83[Gvar.var_2194].Var10 == Gvar.var_201 && Gvar.var_201 > 0 && Gvar.var_201 <= 12) {
                    Gvar.var_83[Gvar.var_2194].Var23 = 1;
                    if (Gvar.var_83[Gvar.var_2194].Var0 == 97) {
                        Gvar.var_83[Gvar.var_2194].Var31 = 0;
                    }
                }
                if (Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_66 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                    Gvar.var_83[Gvar.var_2194].Var23 = 1;
                    if (Gvar.var_83[Gvar.var_2194].Var0 == 97) {
                        Gvar.var_83[Gvar.var_2194].Var31 = 0;
                    }
                }
                if (Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_66 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                    Gvar.var_83[Gvar.var_2194].Var23 = 1;
                    if (Gvar.var_83[Gvar.var_2194].Var0 == 97) {
                        Gvar.var_83[Gvar.var_2194].Var31 = 0;
                    }
                }
                if (Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_67) {
                    Gvar.var_83[Gvar.var_2194].Var23 = 1;
                    if (Gvar.var_83[Gvar.var_2194].Var0 == 97) {
                        Gvar.var_83[Gvar.var_2194].Var31 = 0;
                    }
                }
                if (Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_67) {
                    Gvar.var_83[Gvar.var_2194].Var23 = 1;
                    if (Gvar.var_83[Gvar.var_2194].Var0 == 97) {
                        Gvar.var_83[Gvar.var_2194].Var31 = 0;
                    }
                }
                if (Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                    Gvar.var_83[Gvar.var_2194].Var23 = 1;
                    if (Gvar.var_83[Gvar.var_2194].Var0 == 97) {
                        Gvar.var_83[Gvar.var_2194].Var31 = 0;
                    }
                }
                if (Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                    Gvar.var_83[Gvar.var_2194].Var23 = 1;
                    if (Gvar.var_83[Gvar.var_2194].Var0 == 97) {
                        Gvar.var_83[Gvar.var_2194].Var31 = 0;
                    }
                }
                if (Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                    Gvar.var_83[Gvar.var_2194].Var23 = 1;
                    if (Gvar.var_83[Gvar.var_2194].Var0 == 97) {
                        Gvar.var_83[Gvar.var_2194].Var31 = 0;
                    }
                }
                if (Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                    Gvar.var_83[Gvar.var_2194].Var23 = 1;
                    if (Gvar.var_83[Gvar.var_2194].Var0 == 97) {
                        Gvar.var_83[Gvar.var_2194].Var31 = 0;
                    }
                }
                if (Gvar.var_201 <= 12 && Gvar.var_201 != 0) {
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
                        Gvar.var_83[Gvar.var_2194].Var23 = 1;
                        if (Gvar.var_83[Gvar.var_2194].Var0 == 97) {
                            Gvar.var_83[Gvar.var_2194].Var31 = 0;
                        }
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_71[Gvar.var_2224][Gvar.var_2222] == Gvar.var_201) {
                        Gvar.var_83[Gvar.var_2194].Var23 = 1;
                        if (Gvar.var_83[Gvar.var_2194].Var0 == 97) {
                            Gvar.var_83[Gvar.var_2194].Var31 = 0;
                        }
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_71[Gvar.var_2221][Gvar.var_2225] == Gvar.var_201) {
                        Gvar.var_83[Gvar.var_2194].Var23 = 1;
                        if (Gvar.var_83[Gvar.var_2194].Var0 == 97) {
                            Gvar.var_83[Gvar.var_2194].Var31 = 0;
                        }
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_71[Gvar.var_2221][Gvar.var_2226] == Gvar.var_201) {
                        Gvar.var_83[Gvar.var_2194].Var23 = 1;
                        if (Gvar.var_83[Gvar.var_2194].Var0 == 97) {
                            Gvar.var_83[Gvar.var_2194].Var31 = 0;
                        }
                    }
                }
            }
            Gvar.var_2194 = Gvar.var_2194 + 1;
        }
        Gvar.var_114 = 0;
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {item105}
