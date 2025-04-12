import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 203 ザ・フールの発動処理
async function item203(this: any) {
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
        await Func.setMessage1("「アッフォオオ―――――ン！」",
                               "", 7, false, false, true);
        Gvar.var_374 = 1;
        Gvar.var_1575 = 1;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_774 = 160;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_774 = 150;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_774 = 140;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_774 = 130;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_774 = 120;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_774 = 110;
        await Func.func337(); // メッセージ表示処理(自動)
        Gvar.var_774 = 100;
        await Func.func337(); // メッセージ表示処理(自動)
        for (let cnt2 = 0; cnt2 < 3; ++cnt2) {
            Gvar.var_774 = 102;
            await Func.AutoDraw(2);
            Gvar.var_774 = 104;
            await Func.AutoDraw(2);
            Gvar.var_774 = 106;
            await Func.AutoDraw(2);
            Gvar.var_774 = 108;
            await Func.AutoDraw(2);
            Gvar.var_774 = 106;
            await Func.AutoDraw(2);
            Gvar.var_774 = 104;
            await Func.AutoDraw(2);
            Gvar.var_774 = 102;
            await Func.AutoDraw(2);
            Gvar.var_774 = 100;
            Gvar.var_1574 = 1;
            await Func.AutoDraw(2);
            Gvar.var_1574 = 0;
        }
        for (let cnt2 = 0; cnt2 < 16; ++cnt2) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_774 = Gvar.var_774 - 10;
        }
        Gvar.var_1575 = 0;
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
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
                if (Gvar.var_2266 == 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_66 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                    await Func.func521();
                    Gvar.var_2266 = 1;
                }
                if (Gvar.var_2266 == 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_66 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                    await Func.func521();
                    Gvar.var_2266 = 1;
                }
                if (Gvar.var_2266 == 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_67) {
                    await Func.func521();
                    Gvar.var_2266 = 1;
                }
                if (Gvar.var_2266 == 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_67) {
                    await Func.func521();
                    Gvar.var_2266 = 1;
                }
                if (Gvar.var_2266 == 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                    await Func.func521();
                    Gvar.var_2266 = 1;
                }
                if (Gvar.var_2266 == 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                    await Func.func521();
                    Gvar.var_2266 = 1;
                }
                if (Gvar.var_2266 == 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                    await Func.func521();
                    Gvar.var_2266 = 1;
                }
                if (Gvar.var_2266 == 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                    await Func.func521();
                    Gvar.var_2266 = 1;
                }
            }
            if (Gvar.var_2266 == 1) {
                Gvar.var_2265 = 1;
            }
            Gvar.var_2194 = Gvar.var_2194 + 1;
        }
        if (Gvar.var_2265 == 1) {
            Adap.DSPLAY(153);
            await Func.setMessage1("周りの敵は目に砂が入って",
                                   "盲目になってしまった！", 7, true, true, false);
        }
        Gvar.var_374 = 0;
        await Func.func499(); // ダンジョン動作処理?
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {item203}
