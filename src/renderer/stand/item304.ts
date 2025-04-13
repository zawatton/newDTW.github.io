import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 304 ウェザーリポートの発動処理
async function item304(this: any) {
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (Gvar.var_172 == 1) { // Gvar.var_172 発動効果が向上するフラグがONであれば
            await Func.setMessage("発動能力がパワーアップしている！",
                                   "", 7, true, false, false);
        }
        Adap.gsel(19);
        Adap.color(1, 1, 1);
        Adap.boxf(Gvar.left = 0, Gvar.top1 = 0, Gvar.right = 680, Gvar.bottom = 680);
        Adap.gsel(0);
        Gvar.var_311 = 0;
        Adap.DSPLAY(178);
        Gvar.var_312 = 1;
        for (let cnt2 = 0; cnt2 < 15; ++cnt2) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_311 = Gvar.var_311 + 5;
        }
        Gvar.var_174 = 1;
        await Func.setMessage("雨が降ってきた。",
                               "", 7, false, false, false);
        Gvar.var_1594 = 1;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        await Func.AutoDraw(40);

        Gvar.var_403 = "雷が落ちた！";
        Gvar.var_2217 = 1;
        Gvar.var_2194 = 1;
        for (let cnt2 = 0; cnt2 < Gvar.var_97; ++cnt2) {
            Gvar.var_2218 = Gvar.var_565 * 3;
            Gvar.var_2219 = Adap.rnd(3);
            Gvar.var_2218 = Gvar.var_2218 + Gvar.var_2219;
            if (Gvar.var_172 >= 1) { // Gvar.var_172 発動効果が向上するフラグがONであれば
                Gvar.var_2218 = Gvar.var_2218 * 2;
            }
            if (Gvar.var_2194 != Gvar.var_124) {
                Gvar.var_2220 = 0;
                if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var10 == Gvar.var_201 && Gvar.var_201 > 0 && Gvar.var_201 <= 12) {
                    Gvar.var_402 = Gvar.var_2194;
                    Gvar.var_209 = Gvar.var_2218;
                    await Func.func518();
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
                        Gvar.var_209 = Gvar.var_2218;
                        await Func.func518();
                        await Func.func705();
                        await Func.AutoDraw(2);
                        Gvar.var_2220 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_66 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2218;
                        await Func.func518();
                        await Func.func705();
                        await Func.AutoDraw(2);
                        Gvar.var_2220 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_67) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2218;
                        await Func.func518();
                        await Func.func705();
                        await Func.AutoDraw(2);
                        Gvar.var_2220 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_67) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2218;
                        await Func.func518();
                        await Func.func705();
                        await Func.AutoDraw(2);
                        Gvar.var_2220 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2218;
                        await Func.func518();
                        await Func.func705();
                        await Func.AutoDraw(2);
                        Gvar.var_2220 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2218;
                        await Func.func518();
                        await Func.func705();
                        await Func.AutoDraw(2);
                        Gvar.var_2220 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2218;
                        await Func.func518();
                        await Func.func705();
                        await Func.AutoDraw(2);
                        Gvar.var_2220 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2218;
                        await Func.func518();
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
                        Gvar.var_209 = Gvar.var_2218;
                        await Func.func518();
                        await Func.func705();
                        await Func.AutoDraw(2);
                        Gvar.var_2220 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_71[Gvar.var_2224][Gvar.var_2222] == Gvar.var_201) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2218;
                        await Func.func518();
                        await Func.func705();
                        await Func.AutoDraw(2);
                        Gvar.var_2220 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_71[Gvar.var_2221][Gvar.var_2225] == Gvar.var_201) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2218;
                        await Func.func518();
                        await Func.func705();
                        await Func.AutoDraw(2);
                        Gvar.var_2220 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_71[Gvar.var_2221][Gvar.var_2226] == Gvar.var_201) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2218;
                        await Func.func518();
                        await Func.func705();
                        await Func.AutoDraw(2);
                        Gvar.var_2220 = 1;
                    }
                }
            }
            Gvar.var_2194 = Gvar.var_2194 + 1;
        }
        await Func.AutoDraw(10);
        Gvar.var_2217 = 0;
        await Func.setMessage("",
                               "  ――――  雨があがった  ――――", 7, true, false, false);
        Gvar.var_1594 = 0;
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        for (let cnt2 = 0; cnt2 < 15; ++cnt2) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_311 = Gvar.var_311 - 5;
        }
        Gvar.var_311 = 0;
        Gvar.var_312 = 0;
        await Func.setMessage("地面が洗い流され、",
                               "罠が見えるようになった。", 7, true, true, false);
        Gvar.var_121 = 1; // Gvar.var_121 罠が見えるようになるフラグON
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        Gvar.var_2303 = 0;
        Gvar.var_2304 = 0;
        Gvar.var_2305 = 0;
        Gvar.var_2205 = 1;
        for (let cnt2 = 0; cnt2 < Gvar.var_336; ++cnt2) {
            if (Gvar.var_78[Gvar.var_2205].Var0 == 651) {
                Gvar.var_78[Gvar.var_2205].Var0 = 653;
                Gvar.var_2303 = 1;
            }
            if (Gvar.var_78[Gvar.var_2205].Var0 == 650) {
                Gvar.var_78[Gvar.var_2205].Var0 = 651;
                Gvar.var_2303 = 1;
            }
            Gvar.var_2205++;
        }
        Gvar.var_2205 = 1;
        for (let cnt2 = 0; cnt2 < Gvar.var_224; ++cnt2) {
            if (Gvar.var_233[Gvar.var_2205].Var0 == 401) {
                Gvar.var_2304 = 1;
            }
            Gvar.var_2205++;
        }
        Gvar.var_2205 = 1;
        for (let cnt2 = 0; cnt2 < Gvar.var_97; ++cnt2) {
            if (Gvar.var_83[Gvar.var_2205].Var0 == 115 || Gvar.var_83[Gvar.var_2205].Var0 == 27 || Gvar.var_83[Gvar.var_2205].Var0 == 21) {
                Gvar.var_2305 = 1;
                Gvar.var_83[Gvar.var_2205].Var39 = Gvar.var_83[Gvar.var_2205].Var39 + 1;
                if (Gvar.var_83[Gvar.var_2205].Var39 == 1) {
                    Gvar.var_83[Gvar.var_2205].Var39 = 2;
                }
                Gvar.enemy_list = Gvar.var_83[Gvar.var_2205].Var0;
                await Func.func626(); // 敵リスト
                Gvar.var_83[Gvar.var_2205].Var3 = Math.floor(Gvar.enemy_hp * (Gvar.var_83[Gvar.var_2205].Var39 + 10) / 10);
                if (Gvar.var_83[Gvar.var_2205].Var3 >= 999) {
                    Gvar.var_83[Gvar.var_2205].Var3 = 999;
                }
            }
            Gvar.var_2205++;
        }
        if (Gvar.var_2304 == 1) {
            await Func.setMessage("フー・ファイターズの威力がアップした！",
                                   "", 7, true, true, false);
        }
        if (Gvar.var_2303 == 1) {
            await Func.setMessage("地面のカエルが成長したようだ。",
                                   "", 7, true, true, false);
        }
        if (Gvar.var_2305 == 1) {
            await Func.setMessage("パワーアップした敵がいるようだ…",
                                   "", 7, true, true, false);
        }
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {item304}
