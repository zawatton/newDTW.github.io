import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'

// 旧 func909
async function func0968(this: any) {
    Gvar.var_3874 = 0;
    if (Gvar.var_407 != 2) {
        Gvar.var_3875 = 0;
        Gvar.var_3876 = Adap.int(Gvar.var_1068[10]);
        if (Gvar.current_floor < Gvar.var_3876) {
            Gvar.var_3875 = Gvar.var_3876 - Gvar.current_floor;
        }
        if (Gvar.current_floor > Gvar.var_3876) {
            Gvar.var_3875 = Gvar.current_floor - Gvar.var_3876;
        }
        if (Gvar.current_floor == Gvar.var_3876) {
            Gvar.var_3875 = 0;
        }
        if (Gvar.var_407 == 0 || Gvar.var_3875 >= 3 || Gvar.var_536 == 0 || Gvar.dungeon_number == 0 || Gvar.dungeon_number != Adap.int(Gvar.var_1068[12])) {
            await Func.func0969();
            return;
        }
    }
    if (Gvar.var_407 == 2) {
        Gvar.var_3877 = 0;
        if (Gvar.var_3878 == "具０") {
            Gvar.var_3877 = 0;
        }
        if (Gvar.var_3878 == "具１") {
            Gvar.var_3877 = 1;
        }
        if (Gvar.var_3878 == "具２") {
            Gvar.var_3877 = 2;
        }
        if (Gvar.var_3878 == "具３") {
            Gvar.var_3877 = 3;
        }
        if (Gvar.var_3878 == "具４") {
            Gvar.var_3877 = 4;
        }
        if (Gvar.var_3878 == "具５") {
            Gvar.var_3877 = 5;
        }
        if (Gvar.var_3878 == "具６") {
            Gvar.var_3877 = 6;
        }
        if (Gvar.var_3878 == "具７") {
            Gvar.var_3877 = 7;
        }
        Gvar.var_3875 = 0;
        Gvar.var_3876 = Gvar.var_1069[Gvar.var_3877][10];
        if (Gvar.current_floor < Gvar.var_3876) {
            Gvar.var_3875 = Gvar.var_3876 - Gvar.current_floor;
        }
        if (Gvar.current_floor > Gvar.var_3876) {
            Gvar.var_3875 = Gvar.current_floor - Gvar.var_3876;
        }
        if (Gvar.current_floor == Gvar.var_3876) {
            Gvar.var_3875 = 0;
        }
        // No = 0 なので、拠点(ホテル、亀、)
        if (Gvar.var_407 == 0 || Gvar.var_3875 >= 5 || Gvar.dungeon_number == 0 || Gvar.dungeon_number != Gvar.var_1069[Gvar.var_3877][12]) {
            await Func.func0969();
            return;
        }
    }
    if (Gvar.var_3875 == 0) {
        Gvar.var_2164 = Gvar.var_66;
        Gvar.var_2165 = Gvar.var_67;
        Gvar.var_3874 = 1;
    }
    if (Gvar.var_3875 == 1 || Gvar.var_3874 == 0) {
        for (let cnt2 = 0; cnt2 < 500; ++cnt2) {
            Gvar.var_1550 = Adap.rnd(Gvar.var_33);
            Gvar.var_230 = Adap.rnd(Gvar.var_34);
            if (Gvar.var_71[Gvar.var_1550][Gvar.var_230] == Gvar.var_201 && Gvar.var_77[Gvar.var_1550][Gvar.var_230] == 0 && Gvar.var_73[Gvar.var_1550][Gvar.var_230] == 0 && Gvar.var_80[Gvar.var_1550][Gvar.var_230] == 0) {
                Gvar.var_2164 = Gvar.var_1550;
                Gvar.var_2165 = Gvar.var_230;
                Gvar.var_3874 = 1;
                break;
            }
            // 幻覚の迷宮
            if (Gvar.special_floor == 8 && Gvar.var_71[Gvar.var_1550][Gvar.var_230] == 14 && Gvar.var_77[Gvar.var_1550][Gvar.var_230] == 0 && Gvar.var_73[Gvar.var_1550][Gvar.var_230] == 0 && Gvar.var_80[Gvar.var_1550][Gvar.var_230] == 0) {
                Gvar.var_2164 = Gvar.var_1550;
                Gvar.var_2165 = Gvar.var_230;
                Gvar.var_3874 = 1;
                break;
            }
        }
    }
    if (Gvar.var_3875 >= 2 || Gvar.var_3874 == 0) {
        for (let cnt2 = 0; cnt2 < 500; ++cnt2) {
            Gvar.var_1550 = Adap.rnd(Gvar.var_33);
            Gvar.var_230 = Adap.rnd(Gvar.var_34);
            if (Gvar.var_71[Gvar.var_1550][Gvar.var_230] != 0 && Gvar.var_71[Gvar.var_1550][Gvar.var_230] <= 12 && Gvar.var_77[Gvar.var_1550][Gvar.var_230] == 0 && Gvar.var_73[Gvar.var_1550][Gvar.var_230] == 0 && Gvar.var_72[Gvar.var_1550][Gvar.var_230] == 0 && Gvar.var_80[Gvar.var_1550][Gvar.var_230] == 0) {
                Gvar.var_2164 = Gvar.var_1550;
                Gvar.var_2165 = Gvar.var_230;
                Gvar.var_3874 = 1;
                break;
            }
        }
    }
    if (Gvar.var_3874 == 0) {
        for (let cnt2 = 0; cnt2 < 500; ++cnt2) {
            Gvar.var_1550 = Adap.rnd(Gvar.var_33);
            Gvar.var_230 = Adap.rnd(Gvar.var_34);
            if (Gvar.var_71[Gvar.var_1550][Gvar.var_230] == 14 && Gvar.var_77[Gvar.var_1550][Gvar.var_230] == 0 && Gvar.var_73[Gvar.var_1550][Gvar.var_230] == 0 && Gvar.var_72[Gvar.var_1550][Gvar.var_230] == 0 && Gvar.var_80[Gvar.var_1550][Gvar.var_230] == 0) {
                Gvar.var_2164 = Gvar.var_1550;
                Gvar.var_2165 = Gvar.var_230;
                Gvar.var_3874 = 1;
                break;
            }
        }
    }
    if (Gvar.var_3874 == 0) {
        return;
    }
    Gvar.var_2166 = Gvar.var_2164 - 1;
    if (Gvar.var_2166 < 0) {
        Gvar.var_2166 = 0;
    }
    Gvar.var_2167 = Gvar.var_2164 + 1;
    if (Gvar.var_2167 > Gvar.var_33) {
        Gvar.var_2167 = Gvar.var_33;
    }
    Gvar.var_2168 = Gvar.var_2165 + 1;
    if (Gvar.var_2168 > Gvar.var_34) {
        Gvar.var_2168 = Gvar.var_34;
    }
    Gvar.var_2169 = Gvar.var_2165 - 1;
    if (Gvar.var_2169 < 0) {
        Gvar.var_2169 = 0;
    }
    Gvar.var_2170 = 0;
    if (Gvar.var_2170 == 0 && Gvar.var_77[Gvar.var_2164][Gvar.var_2165] == 0 && Gvar.var_80[Gvar.var_2164][Gvar.var_2165] == 0 && Gvar.var_73[Gvar.var_2164][Gvar.var_2165] == 0 && Gvar.var_71[Gvar.var_2164][Gvar.var_2165] != 0 && Gvar.var_71[Gvar.var_2164][Gvar.var_2165] != 13) {
        Gvar.var_2170 = 1;
        Gvar.var_1512 = Gvar.var_2164;
        Gvar.var_1513 = Gvar.var_2165;
    }
    if (Gvar.var_2170 == 0 && Gvar.var_77[Gvar.var_2164][Gvar.var_2168] == 0 && Gvar.var_80[Gvar.var_2164][Gvar.var_2168] == 0 && Gvar.var_73[Gvar.var_2164][Gvar.var_2168] == 0 && Gvar.var_71[Gvar.var_2164][Gvar.var_2168] != 0 && Gvar.var_71[Gvar.var_2164][Gvar.var_2168] != 13) {
        Gvar.var_2170 = 1;
        Gvar.var_1512 = Gvar.var_2164;
        Gvar.var_1513 = Gvar.var_2168;
    }
    if (Gvar.var_2170 == 0 && Gvar.var_77[Gvar.var_2166][Gvar.var_2165] == 0 && Gvar.var_80[Gvar.var_2166][Gvar.var_2165] == 0 && Gvar.var_73[Gvar.var_2166][Gvar.var_2165] == 0 && Gvar.var_71[Gvar.var_2166][Gvar.var_2165] != 0 && Gvar.var_71[Gvar.var_2166][Gvar.var_2165] != 13) {
        Gvar.var_2170 = 1;
        Gvar.var_1512 = Gvar.var_2166;
        Gvar.var_1513 = Gvar.var_2165;
    }
    if (Gvar.var_2170 == 0 && Gvar.var_77[Gvar.var_2167][Gvar.var_2165] == 0 && Gvar.var_80[Gvar.var_2167][Gvar.var_2165] == 0 && Gvar.var_73[Gvar.var_2167][Gvar.var_2165] == 0 && Gvar.var_71[Gvar.var_2167][Gvar.var_2165] != 0 && Gvar.var_71[Gvar.var_2167][Gvar.var_2165] != 13) {
        Gvar.var_2170 = 1;
        Gvar.var_1512 = Gvar.var_2167;
        Gvar.var_1513 = Gvar.var_2165;
    }
    if (Gvar.var_2170 == 0 && Gvar.var_77[Gvar.var_2164][Gvar.var_2169] == 0 && Gvar.var_80[Gvar.var_2164][Gvar.var_2169] == 0 && Gvar.var_73[Gvar.var_2164][Gvar.var_2169] == 0 && Gvar.var_71[Gvar.var_2164][Gvar.var_2169] != 0 && Gvar.var_71[Gvar.var_2164][Gvar.var_2169] != 13) {
        Gvar.var_2170 = 1;
        Gvar.var_1512 = Gvar.var_2164;
        Gvar.var_1513 = Gvar.var_2169;
    }
    if (Gvar.var_2170 == 0 && Gvar.var_77[Gvar.var_2166][Gvar.var_2168] == 0 && Gvar.var_80[Gvar.var_2166][Gvar.var_2168] == 0 && Gvar.var_73[Gvar.var_2166][Gvar.var_2168] == 0 && Gvar.var_71[Gvar.var_2166][Gvar.var_2168] != 0 && Gvar.var_71[Gvar.var_2166][Gvar.var_2168] != 13) {
        Gvar.var_2170 = 1;
        Gvar.var_1512 = Gvar.var_2166;
        Gvar.var_1513 = Gvar.var_2168;
    }
    if (Gvar.var_2170 == 0 && Gvar.var_77[Gvar.var_2167][Gvar.var_2168] == 0 && Gvar.var_80[Gvar.var_2167][Gvar.var_2168] == 0 && Gvar.var_73[Gvar.var_2167][Gvar.var_2168] == 0 && Gvar.var_71[Gvar.var_2167][Gvar.var_2168] != 0 && Gvar.var_71[Gvar.var_2167][Gvar.var_2168] != 13) {
        Gvar.var_2170 = 1;
        Gvar.var_1512 = Gvar.var_2167;
        Gvar.var_1513 = Gvar.var_2168;
    }
    if (Gvar.var_2170 == 0 && Gvar.var_77[Gvar.var_2166][Gvar.var_2169] == 0 && Gvar.var_80[Gvar.var_2166][Gvar.var_2169] == 0 && Gvar.var_73[Gvar.var_2166][Gvar.var_2169] == 0 && Gvar.var_71[Gvar.var_2166][Gvar.var_2169] != 0 && Gvar.var_71[Gvar.var_2166][Gvar.var_2169] != 13) {
        Gvar.var_2170 = 1;
        Gvar.var_1512 = Gvar.var_2166;
        Gvar.var_1513 = Gvar.var_2169;
    }
    if (Gvar.var_2170 == 0 && Gvar.var_77[Gvar.var_2167][Gvar.var_2169] == 0 && Gvar.var_80[Gvar.var_2167][Gvar.var_2169] == 0 && Gvar.var_73[Gvar.var_2167][Gvar.var_2169] == 0 && Gvar.var_71[Gvar.var_2167][Gvar.var_2169] != 0 && Gvar.var_71[Gvar.var_2167][Gvar.var_2169] != 13) {
        Gvar.var_2170 = 1;
        Gvar.var_1512 = Gvar.var_2167;
        Gvar.var_1513 = Gvar.var_2169;
    }
    if (Gvar.var_2170 == 0 && Gvar.var_77[Gvar.var_2164][Gvar.var_2165] == 0 && Gvar.var_80[Gvar.var_2164][Gvar.var_2165] == 0 && Gvar.var_73[Gvar.var_2164][Gvar.var_2165] == 0 && Gvar.var_71[Gvar.var_2164][Gvar.var_2165] != 0 && Gvar.var_71[Gvar.var_2164][Gvar.var_2165] != 13) {
        Gvar.var_2170 = 1;
        Gvar.var_1512 = Gvar.var_2164;
        Gvar.var_1513 = Gvar.var_2165;
    }
    if (Gvar.var_2170 == 1) {
        await Func.func724();
        Gvar.var_2171 = Gvar.var_854;
        Gvar.var_1385 = Gvar.var_2171;
        Gvar.var_1386 = Gvar.var_3821[1][0];
        Gvar.var_1249 = Gvar.var_3821[1][13];
        if (Gvar.var_3821[1][0] == 0) {
            Gvar.var_3821[1][0] = 641;
            Gvar.var_1386 = 641;
        }

        Adap.DSPLAY(107);
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1511 = 1;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1511++;
        }
        Gvar.var_1511 = 0;
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_77[Gvar.var_1512][Gvar.var_1513] = Gvar.var_2171;
        Gvar.var_731 = 0;
        for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
            Gvar.var_78[Gvar.var_2171][Gvar.var_731] = Gvar.var_3821[1][Gvar.var_731];
            Gvar.var_731++;
        }
        Gvar.var_78[Gvar.var_2171].Var1 = Gvar.var_1512;
        Gvar.var_78[Gvar.var_2171].Var2 = Gvar.var_1513;
        Gvar.var_78[Gvar.var_2171].Var9 = Gvar.var_71[Gvar.var_1512][Gvar.var_1513];
        Gvar.var_78[Gvar.var_2171].Var10 = 1;
        Gvar.var_78[Gvar.var_2171].Var14 = 0;
        if (Gvar.var_78[Gvar.var_2171].Var0 >= 800 && Gvar.var_78[Gvar.var_2171].Var0 < 900) {
            await Func.func395();
            Gvar.var_78[Gvar.var_2171].Var6 = Gvar.var_858;
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
    }
    await Func.func0969();
    await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
    return;
}

export {func0968}
