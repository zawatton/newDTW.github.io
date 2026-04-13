import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'

// 旧 func879
async function func0938(this: any) {
    Gvar.var_336++;
    Gvar.var_866 = Gvar.var_336;
    Gvar.var_77[Gvar.var_1076][Gvar.var_1075] = Gvar.var_866;
    Gvar.var_78[Gvar.var_866].Var0 = Gvar.var_1770;
    Gvar.var_78[Gvar.var_866].Var1 = Gvar.var_1076;
    Gvar.var_78[Gvar.var_866].Var2 = Gvar.var_1075;
    Gvar.var_78[Gvar.var_866].Var9 = Gvar.var_71[Gvar.var_1076][Gvar.var_1075];
    if (Gvar.var_1770 == 1) {
        Gvar.var_78[Gvar.var_866].Var13 = Gvar.var_3342;
    }
    if (Gvar.var_1770 >= 100 && Gvar.var_1770 < 400) {
        Gvar.var_78[Gvar.var_866].Var19 = 1;
        Gvar.var_78[Gvar.var_866].Var20 = Gvar.var_78[Gvar.var_866].Var0;
        Gvar.var_78[Gvar.var_866].Var5 = 8;
        Gvar.var_78[Gvar.var_866].Var4 = Gvar.var_3342;
        Gvar.var_78[Gvar.var_866].Var14 = 1;
        if (Gvar.var_3342 == 11) {
            Gvar.var_78[Gvar.var_866].Var4 = 0;
            Gvar.var_78[Gvar.var_866].Var12 = 1;
        }
    }
    if (Gvar.var_1770 >= 400 && Gvar.var_1770 < 500) {
        Gvar.var_78[Gvar.var_866].Var3 = Gvar.var_3342;
    }
    if (Gvar.var_1770 >= 800 && Gvar.var_1770 < 900) {
        await Func.func395();
        Gvar.var_78[Gvar.var_866].Var6 = Gvar.var_858;
        Gvar.var_78[Gvar.var_866].Var7 = Gvar.var_3342;
        Gvar.var_78[Gvar.var_866].Var8 = 0;
        Gvar.var_486[Gvar.var_858][1][0] = 0;
        Gvar.var_486[Gvar.var_858][2][0] = 0;
        Gvar.var_486[Gvar.var_858][3][0] = 0;
        Gvar.var_486[Gvar.var_858][4][0] = 0;
        Gvar.var_486[Gvar.var_858][5][0] = 0;
        Gvar.var_486[Gvar.var_858][6][0] = 0;
        Gvar.var_486[Gvar.var_858][7][0] = 0;
        Gvar.var_486[Gvar.var_858][8][0] = 0;
        Gvar.var_486[Gvar.var_858][9][0] = 0;
        Gvar.var_486[Gvar.var_858][10][0] = 0;
    }
    Gvar.var_1771 = Gvar.var_78[Gvar.var_866].Var0;
    Gvar.var_862[Gvar.var_1771][0] = 1;
    return;
}

export {func0938}
