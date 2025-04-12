import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func016(this: any) {
        Adap.dbgprt(16);
        Gvar.var_65[Gvar.var_236][Gvar.var_237] = 0;
        Gvar.var_65[Gvar.var_66][Gvar.var_67] = 1;
        Gvar.var_303 = Gvar.var_66;
        Gvar.var_304 = Gvar.var_67;
        Gvar.var_305 = Gvar.var_66 - 1;
        if (Gvar.var_305 < 0) {
            Gvar.var_305 = 0;
        }
        Gvar.var_306 = Gvar.var_66 + 1;
        if (Gvar.var_306 > Gvar.var_33) {
            Gvar.var_306 = Gvar.var_33;
        }
        Gvar.var_307 = Gvar.var_67 + 1;
        if (Gvar.var_307 > Gvar.var_34) {
            Gvar.var_307 = Gvar.var_34;
        }
        Gvar.var_308 = Gvar.var_67 - 1;
        if (Gvar.var_308 < 0) {
            Gvar.var_308 = 0;
        }
        Gvar.var_279 = Gvar.var_201;
        Gvar.var_201 = Gvar.var_71[Gvar.var_303][Gvar.var_304];
        if (Gvar.var_71[Gvar.var_303][Gvar.var_304] == 13) {
            Gvar.var_201 = 14;
            if (Gvar.var_71[Gvar.var_305][Gvar.var_307] != 0 && Gvar.var_71[Gvar.var_305][Gvar.var_307] <= 12) {
                Gvar.var_201 = Gvar.var_71[Gvar.var_305][Gvar.var_307];
            }
            if (Gvar.var_71[Gvar.var_305][Gvar.var_308] != 0 && Gvar.var_71[Gvar.var_305][Gvar.var_308] <= 12) {
                Gvar.var_201 = Gvar.var_71[Gvar.var_305][Gvar.var_308];
            }
            if (Gvar.var_71[Gvar.var_306][Gvar.var_307] != 0 && Gvar.var_71[Gvar.var_306][Gvar.var_307] <= 12) {
                Gvar.var_201 = Gvar.var_71[Gvar.var_306][Gvar.var_307];
            }
            if (Gvar.var_71[Gvar.var_306][Gvar.var_308] != 0 && Gvar.var_71[Gvar.var_306][Gvar.var_308] <= 12) {
                Gvar.var_201 = Gvar.var_71[Gvar.var_306][Gvar.var_308];
            }
            if (Gvar.var_71[Gvar.var_305][Gvar.var_304] != 0 && Gvar.var_71[Gvar.var_305][Gvar.var_304] <= 12) {
                Gvar.var_201 = Gvar.var_71[Gvar.var_305][Gvar.var_304];
            }
            if (Gvar.var_71[Gvar.var_306][Gvar.var_304] != 0 && Gvar.var_71[Gvar.var_306][Gvar.var_304] <= 12) {
                Gvar.var_201 = Gvar.var_71[Gvar.var_306][Gvar.var_304];
            }
            if (Gvar.var_71[Gvar.var_303][Gvar.var_307] != 0 && Gvar.var_71[Gvar.var_303][Gvar.var_307] <= 12) {
                Gvar.var_201 = Gvar.var_71[Gvar.var_303][Gvar.var_307];
            }
            if (Gvar.var_71[Gvar.var_303][Gvar.var_308] != 0 && Gvar.var_71[Gvar.var_303][Gvar.var_308] <= 12) {
                Gvar.var_201 = Gvar.var_71[Gvar.var_303][Gvar.var_308];
            }
        }
        if (Gvar.var_71[Gvar.var_303][Gvar.var_304] != 0) {
            Gvar.var_74[Gvar.var_303][Gvar.var_304] = 2;
            if (Gvar.var_74[Gvar.var_305][Gvar.var_304] == 0)
                Gvar.var_74[Gvar.var_305][Gvar.var_304] = 1;
            if (Gvar.var_74[Gvar.var_306][Gvar.var_304] == 0)
                Gvar.var_74[Gvar.var_306][Gvar.var_304] = 1;
            if (Gvar.var_74[Gvar.var_303][Gvar.var_307] == 0)
                Gvar.var_74[Gvar.var_303][Gvar.var_307] = 1;
            if (Gvar.var_74[Gvar.var_303][Gvar.var_308] == 0)
                Gvar.var_74[Gvar.var_303][Gvar.var_308] = 1;
            if (Gvar.var_74[Gvar.var_305][Gvar.var_307] == 0)
                Gvar.var_74[Gvar.var_305][Gvar.var_307] = 1;
            if (Gvar.var_74[Gvar.var_305][Gvar.var_308] == 0)
                Gvar.var_74[Gvar.var_305][Gvar.var_308] = 1;
            if (Gvar.var_74[Gvar.var_306][Gvar.var_307] == 0)
                Gvar.var_74[Gvar.var_306][Gvar.var_307] = 1;
            if (Gvar.var_74[Gvar.var_306][Gvar.var_308] == 0)
                Gvar.var_74[Gvar.var_306][Gvar.var_308] = 1;
            Gvar.var_75[Gvar.var_201] = 1;
            if (Gvar.var_201 != Gvar.var_279 && Gvar.var_201 != 14) {
                await Func.func017();
            }
            await Func.func018();
            if (Gvar.var_200 == Gvar.var_201 && Gvar.var_201 != 14) {
                Gvar.var_98 = 1;
            }
            if (Gvar.var_73[Gvar.var_66][Gvar.var_67] == 1) {
                Gvar.var_98 = 1;
            }
            if (Gvar.var_202 == Gvar.var_201 && Gvar.var_201 != 14) {
                Gvar.var_99 = 1;
            }
            if (Gvar.var_73[Gvar.var_66][Gvar.var_67] == 2) {
                Gvar.var_99 = 1;
            }
        }
        if (Gvar.var_201 != Gvar.var_279 && Gvar.var_201 != 14) {
            Gvar.var_322 = Gvar.var_199;
        }
        if (Gvar.var_201 == 14 && Gvar.var_279 != 14) {
            Gvar.var_187 = Gvar.var_279;
            Gvar.var_323 = 0;
            if (Gvar.var_66 == Gvar.var_76[Gvar.var_279][1][1] && Gvar.var_67 == Gvar.var_76[Gvar.var_279][1][2]) {
                Gvar.var_323 = 1;
            }
            if (Gvar.var_66 == Gvar.var_76[Gvar.var_279][2][1] && Gvar.var_67 == Gvar.var_76[Gvar.var_279][2][2]) {
                Gvar.var_323 = 2;
            }
            if (Gvar.var_66 == Gvar.var_76[Gvar.var_279][3][1] && Gvar.var_67 == Gvar.var_76[Gvar.var_279][3][2]) {
                Gvar.var_323 = 3;
            }
            if (Gvar.var_66 == Gvar.var_76[Gvar.var_279][4][1] && Gvar.var_67 == Gvar.var_76[Gvar.var_279][4][2]) {
                Gvar.var_323 = 4;
            }
            if (Gvar.var_323 == 0) {
                Gvar.var_188 = Gvar.var_66;
                Gvar.var_189 = Gvar.var_67;
                Gvar.var_324 = 1;
                for (let cnt3 = 0; cnt3 < Gvar.var_97; ++cnt3) {
                    if (Gvar.var_83[Gvar.var_324].Var0 != 0 && Gvar.var_83[Gvar.var_324].Var10 == Gvar.var_279) {
                        Gvar.var_83[Gvar.var_324].Var33 = 5;
                    }
                    Gvar.var_324++;
                }
            }
        }
        return;
}

export {func016}
