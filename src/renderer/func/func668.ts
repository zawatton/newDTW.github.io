import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func668(this: any) {
        Adap.dbgprt(668);
        Gvar.var_1389 = Gvar.var_455;
        Gvar.var_1390 = Gvar.var_456;
        Gvar.var_1993 = Gvar.var_1389 - 1;
        if (Gvar.var_1993 < 0) {
            Gvar.var_1993 = 0;
        }
        Gvar.var_1994 = Gvar.var_1389 + 1;
        Gvar.var_1995 = Gvar.var_1390 + 1;
        Gvar.var_1996 = Gvar.var_1390 - 1;
        if (Gvar.var_1996 < 0) {
            Gvar.var_1996 = 0;
        }
        if (Gvar.var_71[Gvar.var_1389][Gvar.var_1390] == 0) {
            Gvar.var_347 = Gvar.var_1389;
            Gvar.var_348 = Gvar.var_1390;
            await Func.func622();
        }
        if (Gvar.var_71[Gvar.var_1993][Gvar.var_1390] == 0) {
            Gvar.var_347 = Gvar.var_1993;
            Gvar.var_348 = Gvar.var_1390;
            await Func.func622();
        }
        if (Gvar.var_71[Gvar.var_1994][Gvar.var_1390] == 0) {
            Gvar.var_347 = Gvar.var_1994;
            Gvar.var_348 = Gvar.var_1390;
            await Func.func622();
        }
        if (Gvar.var_71[Gvar.var_1389][Gvar.var_1995] == 0) {
            Gvar.var_347 = Gvar.var_1389;
            Gvar.var_348 = Gvar.var_1995;
            await Func.func622();
        }
        if (Gvar.var_71[Gvar.var_1389][Gvar.var_1996] == 0) {
            Gvar.var_347 = Gvar.var_1389;
            Gvar.var_348 = Gvar.var_1996;
            await Func.func622();
        }
        if (Gvar.var_71[Gvar.var_1993][Gvar.var_1995] == 0) {
            Gvar.var_347 = Gvar.var_1993;
            Gvar.var_348 = Gvar.var_1995;
            await Func.func622();
        }
        if (Gvar.var_71[Gvar.var_1994][Gvar.var_1995] == 0) {
            Gvar.var_347 = Gvar.var_1994;
            Gvar.var_348 = Gvar.var_1995;
            await Func.func622();
        }
        if (Gvar.var_71[Gvar.var_1993][Gvar.var_1996] == 0) {
            Gvar.var_347 = Gvar.var_1993;
            Gvar.var_348 = Gvar.var_1996;
            await Func.func622();
        }
        if (Gvar.var_71[Gvar.var_1994][Gvar.var_1996] == 0) {
            Gvar.var_347 = Gvar.var_1994;
            Gvar.var_348 = Gvar.var_1996;
            await Func.func622();
        }
        if (Gvar.var_77[Gvar.var_1389][Gvar.var_1390] > 0) {
            Gvar.var_77[Gvar.var_1389][Gvar.var_1390] = 0;
            Gvar.var_2189 = Gvar.var_77[Gvar.var_1389][Gvar.var_1390];
            Gvar.var_78[Gvar.var_2189].Var0 = 0;
            Gvar.var_78[Gvar.var_2189].Var1 = 0;
            Gvar.var_78[Gvar.var_2189].Var2 = 0;
        }
        if (Gvar.var_77[Gvar.var_1993][Gvar.var_1390] > 0) {
            Gvar.var_77[Gvar.var_1993][Gvar.var_1390] = 0;
            Gvar.var_2189 = Gvar.var_77[Gvar.var_2190][Gvar.var_1390];
            Gvar.var_78[Gvar.var_2189].Var0 = 0;
            Gvar.var_78[Gvar.var_2189].Var1 = 0;
            Gvar.var_78[Gvar.var_2189].Var2 = 0;
        }
        if (Gvar.var_77[Gvar.var_1994][Gvar.var_1390] > 0) {
            Gvar.var_77[Gvar.var_1994][Gvar.var_1390] = 0;
            Gvar.var_2189 = Gvar.var_77[Gvar.var_2191][Gvar.var_1390];
            Gvar.var_78[Gvar.var_2189].Var0 = 0;
            Gvar.var_78[Gvar.var_2189].Var1 = 0;
            Gvar.var_78[Gvar.var_2189].Var2 = 0;
        }
        if (Gvar.var_77[Gvar.var_1389][Gvar.var_1995] > 0) {
            Gvar.var_77[Gvar.var_1389][Gvar.var_1995] = 0;
            Gvar.var_2189 = Gvar.var_77[Gvar.var_1389][Gvar.var_2192];
            Gvar.var_78[Gvar.var_2189].Var0 = 0;
            Gvar.var_78[Gvar.var_2189].Var1 = 0;
            Gvar.var_78[Gvar.var_2189].Var2 = 0;
        }
        if (Gvar.var_77[Gvar.var_1389][Gvar.var_1996] > 0) {
            Gvar.var_77[Gvar.var_1389][Gvar.var_1996] = 0;
            Gvar.var_2189 = Gvar.var_77[Gvar.var_1389][Gvar.var_2193];
            Gvar.var_78[Gvar.var_2189].Var0 = 0;
            Gvar.var_78[Gvar.var_2189].Var1 = 0;
            Gvar.var_78[Gvar.var_2189].Var2 = 0;
        }
        if (Gvar.var_77[Gvar.var_1993][Gvar.var_1995] > 0) {
            Gvar.var_77[Gvar.var_1993][Gvar.var_1995] = 0;
            Gvar.var_2189 = Gvar.var_77[Gvar.var_2190][Gvar.var_2192];
            Gvar.var_78[Gvar.var_2189].Var0 = 0;
            Gvar.var_78[Gvar.var_2189].Var1 = 0;
            Gvar.var_78[Gvar.var_2189].Var2 = 0;
        }
        if (Gvar.var_77[Gvar.var_1994][Gvar.var_1995] > 0) {
            Gvar.var_77[Gvar.var_1994][Gvar.var_1995] = 0;
            Gvar.var_2189 = Gvar.var_77[Gvar.var_2191][Gvar.var_2192];
            Gvar.var_78[Gvar.var_2189].Var0 = 0;
            Gvar.var_78[Gvar.var_2189].Var1 = 0;
            Gvar.var_78[Gvar.var_2189].Var2 = 0;
        }
        if (Gvar.var_77[Gvar.var_1993][Gvar.var_1996] > 0) {
            Gvar.var_77[Gvar.var_1993][Gvar.var_1996] = 0;
            Gvar.var_2189 = Gvar.var_77[Gvar.var_2190][Gvar.var_2193];
            Gvar.var_78[Gvar.var_2189].Var0 = 0;
            Gvar.var_78[Gvar.var_2189].Var1 = 0;
            Gvar.var_78[Gvar.var_2189].Var2 = 0;
        }
        if (Gvar.var_77[Gvar.var_1994][Gvar.var_1996] > 0) {
            Gvar.var_77[Gvar.var_1994][Gvar.var_1996] = 0;
            Gvar.var_2189 = Gvar.var_77[Gvar.var_2191][Gvar.var_2193];
            Gvar.var_78[Gvar.var_2189].Var0 = 0;
            Gvar.var_78[Gvar.var_2189].Var1 = 0;
            Gvar.var_78[Gvar.var_2189].Var2 = 0;
        }

        Adap.DSPLAY(180);
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1388 = 1;
        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
            Gvar.var_585 = 3;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_585 = 0;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1388++;
        }
        for (let cnt1 = 0; cnt1 < 14; ++cnt1) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1388++;
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1388 = 0;
        Gvar.var_403 = "";
        Gvar.var_2194 = 1;
        Gvar.var_2195 = 1;
        Gvar.var_2196 = 2;
        for (let cnt1 = 0; cnt1 < Gvar.var_97; ++cnt1) {
            if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1389 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1390) {
                await Func.func700();
            }
            if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1389 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                await Func.func700();
            }
            if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1389 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                await Func.func700();
            }
            if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1390) {
                await Func.func700();
            }
            if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1390) {
                await Func.func700();
            }
            if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                await Func.func700();
            }
            if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                await Func.func700();
            }
            if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                await Func.func700();
            }
            if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                await Func.func700();
            }
            Gvar.var_209 = 0;
            Gvar.var_2194 = Gvar.var_2194 + 1;
        }
        Gvar.var_2196 = 0;
        Gvar.var_2195 = 0;
        if (Gvar.var_65[Gvar.var_1993][Gvar.var_1390] == 1 || Gvar.var_65[Gvar.var_1994][Gvar.var_1390] == 1 || Gvar.var_65[Gvar.var_1389][Gvar.var_1995] == 1 || Gvar.var_65[Gvar.var_1389][Gvar.var_1996] == 1 || Gvar.var_65[Gvar.var_1993][Gvar.var_1995] == 1 || Gvar.var_65[Gvar.var_1994][Gvar.var_1995] == 1 || Gvar.var_65[Gvar.var_1993][Gvar.var_1996] == 1 || Gvar.var_65[Gvar.var_1994][Gvar.var_1996] == 1) {
            Gvar.var_389 = 2;
            if (Gvar.var_211 == 1) {
                Gvar.var_211 = 0;
                Gvar.var_356 = 248;
                for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                    await Func.func337(); // メッセージ表示処理(自動)
                }
                Gvar.var_389 = 0;
                return;
            }
            if (Gvar.var_211 > 1) {
                Gvar.var_2198 = Math.floor(Gvar.var_211 / 2);
                if (Gvar.equip_disc[314] == 1) {
                    Gvar.var_2198 = Math.floor(Gvar.var_2198 / 2);
                }
                Gvar.var_211 = Gvar.var_211 - Gvar.var_2198;
                if (Gvar.var_211 <= 0) {
                    Gvar.var_211 = 1;
                }
                Gvar.var_208 = Gvar.var_2198 + Gvar.var_208;
            }
            for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
            }
            Gvar.var_389 = 0;
        }
        Gvar.var_2199 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_97; ++cnt1) {
            if (Gvar.var_83[Gvar.var_2199].Var0 == 17 && Gvar.var_83[Gvar.var_2199].Var29 == 1) {
                await Func.func699();
                Gvar.var_2199 = 1;
                cnt1 = -1;
                continue;
            }
            Gvar.var_2199++;
        }
        return;
}

export {func668}
