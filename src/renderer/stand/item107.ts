import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 107 デス13の発動能力
async function item107(this: any) {
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (Gvar.var_570 == 0) {
            Gvar.bufferid_stand_disc = 11; //Adap.buffer(11)は"img_stand0.gif"
        }
        if (Gvar.var_570 == 1) {
            Gvar.bufferid_stand_disc = 1; // Adap.buffer(1)は"img_stand1.gif"
        }
        if (Gvar.var_570 == 2) {
            Gvar.bufferid_stand_disc = 16; // Adap.buffer(16)は"img_stand2.gif"
        }
        if (Gvar.var_570 == 3) {
            Gvar.bufferid_stand_disc = 29; // Adap.buffer(29)は"img_stand3.gif"
        }
        if (Gvar.var_172 == 1) { // Gvar.var_172 発動効果が向上するフラグがONであれば
            await Func.setMessage("発動能力がパワーアップしている！",
                                   "", 7, true, false, false);
        }
        Adap.DSPLAY(131);
        await Func.setMessage("「ラリホ～～～～～っ！」",
                               "", 7, false, false, false);

        Gvar.var_1940 = Gvar.var_199;
        Gvar.var_199 = 2;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1592 = 1;
        for (let cnt2 = 0; cnt2 < 34; ++cnt2) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1592++;
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1592 = 0;
        Gvar.var_2265 = 0;
        Gvar.var_2194 = 1;
        for (let cnt2 = 0; cnt2 < Gvar.var_97; ++cnt2) {
            Gvar.var_2266 = 0;
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
                if (Gvar.var_2266 == 0 && Gvar.var_2194 != Gvar.var_124 && Gvar.var_83[Gvar.var_2194].Var10 == Gvar.var_201 && Gvar.var_201 > 0 && Gvar.var_201 <= 12 && Gvar.var_172 == 1) {
                    await Func.func520();
                    Gvar.var_2266 = 1;
                }
                if (Gvar.var_2266 == 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_66 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                    await Func.func520();
                    Gvar.var_2266 = 1;
                }
                if (Gvar.var_2266 == 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_66 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                    await Func.func520();
                    Gvar.var_2266 = 1;
                }
                if (Gvar.var_2266 == 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_67) {
                    await Func.func520();
                    Gvar.var_2266 = 1;
                }
                if (Gvar.var_2266 == 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_67) {
                    await Func.func520();
                    Gvar.var_2266 = 1;
                }
                if (Gvar.var_2266 == 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                    await Func.func520();
                    Gvar.var_2266 = 1;
                }
                if (Gvar.var_2266 == 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                    await Func.func520();
                    Gvar.var_2266 = 1;
                }
                if (Gvar.var_2266 == 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                    await Func.func520();
                    Gvar.var_2266 = 1;
                }
                if (Gvar.var_2266 == 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                    await Func.func520();
                    Gvar.var_2266 = 1;
                }
                // Gvar.var_172 == 1 プロシュートの兄貴のDISCを使用して発動能力がUPしている場合
                if (Gvar.var_201 <= 12 && Gvar.var_201 != 0 && Gvar.var_172 == 1) {
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
                    if (Gvar.var_2266 == 0 && Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_71[Gvar.var_2223][Gvar.var_2222] == Gvar.var_201) {
                        await Func.func520();
                        Gvar.var_2266 = 1;
                    }
                    if (Gvar.var_2266 == 0 && Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_71[Gvar.var_2224][Gvar.var_2222] == Gvar.var_201) {
                        await Func.func520();
                        Gvar.var_2266 = 1;
                    }
                    if (Gvar.var_2266 == 0 && Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_71[Gvar.var_2221][Gvar.var_2225] == Gvar.var_201) {
                        await Func.func520();
                        Gvar.var_2266 = 1;
                    }
                    if (Gvar.var_2266 == 0 && Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_71[Gvar.var_2221][Gvar.var_2226] == Gvar.var_201) {
                        await Func.func520();
                        Gvar.var_2266 = 1;
                    }
                }
            }
            if (Gvar.var_2266 == 1) {
                Gvar.var_2265 = 1;
            }
            Gvar.var_2194 = Gvar.var_2194 + 1;
        }
        Gvar.var_114 = 0;
        if (Gvar.var_2265 == 1) {
    
            Adap.DSPLAY(132);
            await Func.AutoDraw(10);
        }
        Gvar.var_199 = Gvar.var_1940;
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {item107}
