import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func609(this: any) {
        Adap.dbgprt(609);
        if (Gvar.var_83[Gvar.var_673].Var12 >= 1 || Gvar.var_83[Gvar.var_673].Var13 == 1 || Gvar.var_83[Gvar.var_673].Var17 == 1 || Gvar.var_83[Gvar.var_673].Var23 == 1) {
            return;
        }
        Adap.gsel(19);
        Adap.color(255, 0, 255);
        Adap.boxf(0, 0, 680, 680);
        Adap.gsel(0);
        Gvar.var_529 = 1;
        await Func.setMessage1("ﾌｰｺﾞは殺人ウイルスを撒いた！", "", 8, false, false, false);
        await Func.AutoDraw(20);
        Gvar.var_403 = "ウイルスが敵の体を蝕んでいる！";
        Gvar.var_2217 = 1;
        Gvar.var_2196 = 1;
        Gvar.var_2194 = 1;
        Gvar.var_2852 = 20;
        if (Gvar.var_83[Gvar.var_673].Var39 >= 2) {
            Gvar.var_2852 = (Gvar.var_83[Gvar.var_673].Var39 - 1) * 2 + Gvar.var_2852;
        }
        Gvar.var_2876 = Gvar.var_2852;
        for (let cnt1 = 0; cnt1 < Gvar.var_97; ++cnt1) {
            if (Gvar.var_2194 != Gvar.var_124 && Gvar.var_2194 != Gvar.var_673) {
                Gvar.var_2220 = 0;
                if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var10 == Gvar.var_201 && Gvar.var_201 > 0 && Gvar.var_201 <= 12) {
                    Gvar.var_402 = Gvar.var_2194;
                    Gvar.var_209 = Gvar.var_2852;
                    await Func.func516();
                    await Func.func705();
                    await Func.AutoDraw(2);
                    Gvar.var_2220 = 1;
                }
                if (Gvar.var_2220 == 0) {
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
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_66 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2852;
                        await Func.func516();
                        await Func.func705();
                        for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                            await Func.func337(); // メッセージ表示処理(自動)
                        }
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_66 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2852;
                        await Func.func516();
                        await Func.func705();
                        for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                            await Func.func337(); // メッセージ表示処理(自動)
                        }
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_67) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2852;
                        await Func.func516();
                        await Func.func705();
                        for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                            await Func.func337(); // メッセージ表示処理(自動)
                        }
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_67) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2852;
                        await Func.func516();
                        await Func.func705();
                        for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                            await Func.func337(); // メッセージ表示処理(自動)
                        }
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2852;
                        await Func.func516();
                        await Func.func705();
                        for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                            await Func.func337(); // メッセージ表示処理(自動)
                        }
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2852;
                        await Func.func516();
                        await Func.func705();
                        for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                            await Func.func337(); // メッセージ表示処理(自動)
                        }
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2852;
                        await Func.func516();
                        await Func.func705();
                        for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                            await Func.func337(); // メッセージ表示処理(自動)
                        }
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2852;
                        await Func.func516();
                        await Func.func705();
                        for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                            await Func.func337(); // メッセージ表示処理(自動)
                        }
                    }
                }
            }
            Gvar.var_2194 = Gvar.var_2194 + 1;
        }
        await Func.AutoDraw(10);
        Gvar.var_2196 = 0;
        Gvar.var_2217 = 0;
        if (Gvar.shageki_disc_id == 408) {
            await Func.setMessage1("まだ遅くない…", "「マン・イン・ザ・ミラー！」", 7, true, false, false);
            await Func.setMessage1("ウイルスは許可しないィィィィ――ッ", "", 7, false, false, false);
            await Func.AutoDraw(10);
            Gvar.var_2876 = Math.floor(Gvar.var_2876 / 2);
            if (Gvar.var_2876 < 1) {
                Gvar.var_2876 = 1;
            }
        }
        Gvar.var_747 = 1;
        Gvar.var_389 = 2;
        Adap.DSPLAY(104);
        Gvar.var_2852 = Gvar.var_2876;
        Gvar.var_209 = Gvar.var_2852;
        await Func.setMessage1("ﾃﾞｨｱﾎﾞﾛは", "" + Gvar.var_2852 + "のダメージをうけた！", 8, false, false, false);
        if (Gvar.var_128 >= 1) {
            await Func.func023();
        }
        Gvar.var_211 = Gvar.var_211 - Gvar.var_2852;
        Gvar.var_208 = Gvar.var_208 + Gvar.var_2852;
        if (Gvar.var_211 <= 0) {
            Gvar.var_211 = 0;
            Gvar.var_356 = 241;
        }
        await Func.AutoDraw(10);
        Gvar.var_389 = 0;
        Gvar.var_529 = 0;
        Gvar.var_240 = 0;
        return;
}

export {func609}
