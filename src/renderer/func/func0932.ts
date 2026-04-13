import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'

// 旧 func873
async function func0932(this: any) {
    Gvar.var_3762 = "";
    Gvar.var_3762 = Gvar.var_3762 + "" + Gvar.var_3552 + "\n";
    Gvar.var_3763 = 0;
    for (let cnt1 = 0; cnt1 < 38; ++cnt1) {
        Gvar.var_3764 = 0;
        for (let cnt2 = 0; cnt2 < 59; ++cnt2) {
            if (cnt2 == 57) {
                Gvar.var_3762 = Gvar.var_3762 + "\n";
                break;
            }
            if (Gvar.var_71[Gvar.var_3764][Gvar.var_3763] == 0) {
                Gvar.var_3765 = "#";
            }
            if (Gvar.var_71[Gvar.var_3764][Gvar.var_3763] >= 1 && Gvar.var_71[Gvar.var_3764][Gvar.var_3763] <= 9) {
                Gvar.var_3765 = "" + Gvar.var_71[Gvar.var_3764][Gvar.var_3763];
            }
            if (Gvar.var_71[Gvar.var_3764][Gvar.var_3763] == 10) {
                Gvar.var_3765 = "x";
            }
            if (Gvar.var_71[Gvar.var_3764][Gvar.var_3763] == 11) {
                Gvar.var_3765 = "y";
            }
            if (Gvar.var_71[Gvar.var_3764][Gvar.var_3763] == 12) {
                Gvar.var_3765 = "z";
            }
            if (Gvar.var_71[Gvar.var_3764][Gvar.var_3763] == 13) {
                Gvar.var_3765 = "^";
            }
            if (Gvar.var_71[Gvar.var_3764][Gvar.var_3763] == 14) {
                Gvar.var_3765 = ".";
            }
            if (Gvar.var_71[Gvar.var_3764][Gvar.var_3763] == 21) {
                Gvar.var_3765 = "W";
            }
            if (Gvar.var_71[Gvar.var_3764][Gvar.var_3763] == 22) {
                Gvar.var_3765 = "X";
            }
            if (Gvar.var_71[Gvar.var_3764][Gvar.var_3763] == 23) {
                Gvar.var_3765 = "Y";
            }
            if (Gvar.var_71[Gvar.var_3764][Gvar.var_3763] == 24) {
                Gvar.var_3765 = "Z";
            }
            if (Gvar.var_73[Gvar.var_3764][Gvar.var_3763] == 1) {
                Gvar.var_3765 = ">";
            }
            if (Gvar.var_77[Gvar.var_3764][Gvar.var_3763] == 1) {
                Gvar.var_3765 = "a";
            }
            if (Gvar.var_77[Gvar.var_3764][Gvar.var_3763] == 2) {
                Gvar.var_3765 = "b";
            }
            if (Gvar.var_77[Gvar.var_3764][Gvar.var_3763] == 3) {
                Gvar.var_3765 = "c";
            }
            if (Gvar.var_77[Gvar.var_3764][Gvar.var_3763] == 4) {
                Gvar.var_3765 = "d";
            }
            if (Gvar.var_77[Gvar.var_3764][Gvar.var_3763] == 5) {
                Gvar.var_3765 = "e";
            }
            if (Gvar.var_77[Gvar.var_3764][Gvar.var_3763] == 6) {
                Gvar.var_3765 = "f";
            }
            if (Gvar.var_77[Gvar.var_3764][Gvar.var_3763] == 7) {
                Gvar.var_3765 = "g";
            }
            if (Gvar.var_77[Gvar.var_3764][Gvar.var_3763] == 8) {
                Gvar.var_3765 = "h";
            }
            if (Gvar.var_77[Gvar.var_3764][Gvar.var_3763] == 9) {
                Gvar.var_3765 = "i";
            }
            if (Gvar.var_77[Gvar.var_3764][Gvar.var_3763] == 10) {
                Gvar.var_3765 = "j";
            }
            if (Gvar.var_77[Gvar.var_3764][Gvar.var_3763] == 11) {
                Gvar.var_3765 = "U";
            }
            if (Gvar.var_77[Gvar.var_3764][Gvar.var_3763] == 12) {
                Gvar.var_3765 = "V";
            }
            if (Gvar.var_77[Gvar.var_3764][Gvar.var_3763] == 13) {
                Gvar.var_3765 = "u";
            }
            if (Gvar.var_77[Gvar.var_3764][Gvar.var_3763] == 14) {
                Gvar.var_3765 = "v";
            }
            if (Gvar.var_77[Gvar.var_3764][Gvar.var_3763] == 15) {
                Gvar.var_3765 = "w";
            }
            if (Gvar.var_77[Gvar.var_3764][Gvar.var_3763] == 16) {
                Gvar.var_3765 = "[";
            }
            if (Gvar.var_77[Gvar.var_3764][Gvar.var_3763] == 17) {
                Gvar.var_3765 = "]";
            }
            if (Gvar.var_77[Gvar.var_3764][Gvar.var_3763] == 18) {
                Gvar.var_3765 = "?";
            }
            if (Gvar.var_77[Gvar.var_3764][Gvar.var_3763] == 19) {
                Gvar.var_3765 = "%";
            }
            if (Gvar.var_77[Gvar.var_3764][Gvar.var_3763] == 20) {
                Gvar.var_3765 = "|";
            }
            if (Gvar.var_80[Gvar.var_3764][Gvar.var_3763] == 1) {
                Gvar.var_3765 = "k";
            }
            if (Gvar.var_80[Gvar.var_3764][Gvar.var_3763] == 2) {
                Gvar.var_3765 = "l";
            }
            if (Gvar.var_80[Gvar.var_3764][Gvar.var_3763] == 3) {
                Gvar.var_3765 = "m";
            }
            if (Gvar.var_80[Gvar.var_3764][Gvar.var_3763] == 4) {
                Gvar.var_3765 = "n";
            }
            if (Gvar.var_80[Gvar.var_3764][Gvar.var_3763] == 5) {
                Gvar.var_3765 = "o";
            }
            if (Gvar.var_80[Gvar.var_3764][Gvar.var_3763] == 6) {
                Gvar.var_3765 = "p";
            }
            if (Gvar.var_80[Gvar.var_3764][Gvar.var_3763] == 7) {
                Gvar.var_3765 = "q";
            }
            if (Gvar.var_80[Gvar.var_3764][Gvar.var_3763] == 8) {
                Gvar.var_3765 = "r";
            }
            if (Gvar.var_80[Gvar.var_3764][Gvar.var_3763] == 9) {
                Gvar.var_3765 = "s";
            }
            if (Gvar.var_80[Gvar.var_3764][Gvar.var_3763] == 10) {
                Gvar.var_3765 = "t";
            }
            Gvar.var_3762 = Gvar.var_3762 + Gvar.var_3765;
            Gvar.var_3764++;
        }
        Gvar.var_3763++;
    }
    Gvar.var_3763 = 0;
    for (let cnt1 = 0; cnt1 < 38; ++cnt1) {
        Gvar.var_3764 = 0;
        for (let cnt2 = 0; cnt2 < 59; ++cnt2) {
            if (cnt2 == 57) {
                Gvar.var_3762 = Gvar.var_3762 + "\n";
                break;
            }
            if (Gvar.var_71[Gvar.var_3764][Gvar.var_3763] == 0) {
                Gvar.var_3765 = " ";
            }
            if (Gvar.var_71[Gvar.var_3764][Gvar.var_3763] >= 1 && Gvar.var_71[Gvar.var_3764][Gvar.var_3763] <= 9) {
                Gvar.var_3765 = " ";
            }
            if (Gvar.var_71[Gvar.var_3764][Gvar.var_3763] == 10) {
                Gvar.var_3765 = " ";
            }
            if (Gvar.var_71[Gvar.var_3764][Gvar.var_3763] == 11) {
                Gvar.var_3765 = " ";
            }
            if (Gvar.var_71[Gvar.var_3764][Gvar.var_3763] == 12) {
                Gvar.var_3765 = " ";
            }
            if (Gvar.var_71[Gvar.var_3764][Gvar.var_3763] == 13) {
                Gvar.var_3765 = " ";
            }
            if (Gvar.var_71[Gvar.var_3764][Gvar.var_3763] == 14) {
                Gvar.var_3765 = " ";
            }
            if (Gvar.var_71[Gvar.var_3764][Gvar.var_3763] == 21) {
                Gvar.var_3765 = " ";
            }
            if (Gvar.var_71[Gvar.var_3764][Gvar.var_3763] == 22) {
                Gvar.var_3765 = " ";
            }
            if (Gvar.var_71[Gvar.var_3764][Gvar.var_3763] == 23) {
                Gvar.var_3765 = " ";
            }
            if (Gvar.var_71[Gvar.var_3764][Gvar.var_3763] == 24) {
                Gvar.var_3765 = " ";
            }
            if (Gvar.var_65[Gvar.var_3764][Gvar.var_3763] == 1) {
                Gvar.var_3765 = "@";
            }
            if (Gvar.var_82[Gvar.var_3764][Gvar.var_3763] == 1) {
                Gvar.var_3765 = "A";
            }
            if (Gvar.var_82[Gvar.var_3764][Gvar.var_3763] == 2) {
                Gvar.var_3765 = "B";
            }
            if (Gvar.var_82[Gvar.var_3764][Gvar.var_3763] == 3) {
                Gvar.var_3765 = "C";
            }
            if (Gvar.var_82[Gvar.var_3764][Gvar.var_3763] == 4) {
                Gvar.var_3765 = "D";
            }
            if (Gvar.var_82[Gvar.var_3764][Gvar.var_3763] == 5) {
                Gvar.var_3765 = "E";
            }
            if (Gvar.var_82[Gvar.var_3764][Gvar.var_3763] == 6) {
                Gvar.var_3765 = "F";
            }
            if (Gvar.var_82[Gvar.var_3764][Gvar.var_3763] == 7) {
                Gvar.var_3765 = "G";
            }
            if (Gvar.var_82[Gvar.var_3764][Gvar.var_3763] == 8) {
                Gvar.var_3765 = "H";
            }
            if (Gvar.var_82[Gvar.var_3764][Gvar.var_3763] == 9) {
                Gvar.var_3765 = "I";
            }
            if (Gvar.var_82[Gvar.var_3764][Gvar.var_3763] == 10) {
                Gvar.var_3765 = "J";
            }
            if (Gvar.var_82[Gvar.var_3764][Gvar.var_3763] == 11) {
                Gvar.var_3765 = "K";
            }
            if (Gvar.var_82[Gvar.var_3764][Gvar.var_3763] == 12) {
                Gvar.var_3765 = "L";
            }
            if (Gvar.var_82[Gvar.var_3764][Gvar.var_3763] == 13) {
                Gvar.var_3765 = "M";
            }
            if (Gvar.var_82[Gvar.var_3764][Gvar.var_3763] == 14) {
                Gvar.var_3765 = "N";
            }
            if (Gvar.var_82[Gvar.var_3764][Gvar.var_3763] == 15) {
                Gvar.var_3765 = "O";
            }
            if (Gvar.var_82[Gvar.var_3764][Gvar.var_3763] == 16) {
                Gvar.var_3765 = "P";
            }
            if (Gvar.var_82[Gvar.var_3764][Gvar.var_3763] == 17) {
                Gvar.var_3765 = "Q";
            }
            if (Gvar.var_82[Gvar.var_3764][Gvar.var_3763] == 18) {
                Gvar.var_3765 = "R";
            }
            if (Gvar.var_82[Gvar.var_3764][Gvar.var_3763] == 19) {
                Gvar.var_3765 = "S";
            }
            if (Gvar.var_82[Gvar.var_3764][Gvar.var_3763] == 20) {
                Gvar.var_3765 = "T";
            }
            Gvar.var_3762 = Gvar.var_3762 + Gvar.var_3765;
            Gvar.var_3764++;
        }
        Gvar.var_3763++;
    }
    Gvar.var_3766 = Gvar.var_71[Gvar.var_3329][Gvar.var_3330];
    if (Gvar.var_71[Gvar.var_3329][Gvar.var_3330] == 21) {
        Gvar.var_3766 = 14;
    }
    if (Gvar.var_71[Gvar.var_3329][Gvar.var_3330] == 22) {
        Gvar.var_3766 = 14;
    }
    if (Gvar.var_71[Gvar.var_3329][Gvar.var_3330] == 23) {
        Gvar.var_3766 = 14;
    }
    if (Gvar.var_71[Gvar.var_3329][Gvar.var_3330] == 24) {
        Gvar.var_3766 = 14;
    }
    Gvar.var_3762 = Gvar.var_3762 + "" + Gvar.var_3766 + "\n";
    Gvar.var_3766 = Gvar.var_71[Gvar.var_3327][Gvar.var_3328];
    if (Gvar.var_71[Gvar.var_3327][Gvar.var_3328] == 21) {
        Gvar.var_3766 = 14;
    }
    if (Gvar.var_71[Gvar.var_3327][Gvar.var_3328] == 22) {
        Gvar.var_3766 = 14;
    }
    if (Gvar.var_71[Gvar.var_3327][Gvar.var_3328] == 23) {
        Gvar.var_3766 = 14;
    }
    if (Gvar.var_71[Gvar.var_3327][Gvar.var_3328] == 24) {
        Gvar.var_3766 = 14;
    }
    Gvar.var_3762 = Gvar.var_3762 + "" + Gvar.var_3766 + "\n";
    Gvar.var_3767 = 1;
    for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
        Gvar.var_3762 = Gvar.var_3762 + "" + Gvar.var_83[Gvar.var_3767].Var0 + "\n";
        Gvar.var_3766 = 0;
        Gvar.var_3766 = Gvar.var_83[Gvar.var_3767].Var16;
        Gvar.var_3762 = Gvar.var_3762 + "" + Gvar.var_3766 + "\n";
        Gvar.var_3767++;
    }
    Gvar.var_3767 = 1;
    for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
        Gvar.var_3762 = Gvar.var_3762 + "" + Gvar.var_78[Gvar.var_3767].Var0 + "\n";
        Gvar.var_3768 = Gvar.var_78[Gvar.var_3767].Var1;
        Gvar.var_3769 = Gvar.var_78[Gvar.var_3767].Var2;
        await Func.func0933();
        Gvar.var_3762 = Gvar.var_3762 + "" + Gvar.var_3766 + "\n";
        Gvar.var_3471 = 0;
        if (Gvar.var_78[Gvar.var_3767].Var0 >= 100 && Gvar.var_78[Gvar.var_3767].Var0 < 400) {
            Gvar.var_3471 = Gvar.var_78[Gvar.var_3767].Var4;
            if (Gvar.var_78[Gvar.var_3767].Var12 == 1) {
                Gvar.var_3471 = 11;
            }
        }
        if (Gvar.var_78[Gvar.var_3767].Var0 >= 400 && Gvar.var_78[Gvar.var_3767].Var0 < 500) {
            Gvar.var_3471 = Gvar.var_78[Gvar.var_3767].Var3;
        }
        if (Gvar.var_78[Gvar.var_3767].Var0 >= 800 && Gvar.var_78[Gvar.var_3767].Var0 < 900) {
            Gvar.var_3471 = Gvar.var_78[Gvar.var_3767].Var7;
        }
        if (Gvar.var_78[Gvar.var_3767].Var0 == 1) {
            Gvar.var_3471 = Gvar.var_78[Gvar.var_3767].Var13;
        }
        Gvar.var_3762 = Gvar.var_3762 + "" + Gvar.var_3471 + "\n";
        Gvar.var_3767++;
    }
    Gvar.var_3767 = 1;
    for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
        Gvar.var_3762 = Gvar.var_3762 + "" + Gvar.var_81[Gvar.var_3767][0] + "\n";
        Gvar.var_3768 = Gvar.var_81[Gvar.var_3767][1];
        Gvar.var_3769 = Gvar.var_81[Gvar.var_3767][2];
        await Func.func0933();
        Gvar.var_3762 = Gvar.var_3762 + "" + Gvar.var_3766 + "\n";
        Gvar.var_3767++;
    }
    Gvar.var_3762 = Gvar.var_3762 + "" + Gvar.var_3559 + "\n";
    Adap.notesel(Gvar.var_3762);
    Gvar.var_3771 = Adap.sdim(10000);
    for (let cnt1 = 0; cnt1 < 200; ++cnt1) {
        Gvar.var_3772 = Adap.noteget(cnt1);
        Gvar.var_3771 = Gvar.var_3771 + Gvar.var_3772 + "\n";
    }
    await Func.func0946();
    await Adap.bsave(Gvar.var_3635, Gvar.data = Gvar.var_3771, null, null);
    return;
}

export {func0932}
