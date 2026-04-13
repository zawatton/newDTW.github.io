import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'
import * as Music from '../music/index'

// 旧 func919
async function func0978(this: any) {
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
    await Func.setMessage("遠くから声が聞こえる。", "", 7, true, false, false);
    if (Gvar.var_3875 >= 4) {
        await Func.setMessage("しかしよく聞こえなかった…", "", 7, false, false, false);
        await Func.AutoDraw(10);
        Gvar.var_1046 = 0;
        Gvar.var_1058 = Adap.dim(30, 30);
        return;
    }
    await Func.setMessage("「ディアボロはここよッ！", "  ここにいるわよォ～～ッ！」", 7, true, false, true);
    Gvar.var_3887 = 0;
    Gvar.var_2194 = 1;
    for (let cnt1 = 0; cnt1 < Gvar.var_97; ++cnt1) {
        Gvar.var_2220 = 0;
        if (Gvar.var_2194 != Gvar.var_124) {
            if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var10 == Gvar.var_201 && Gvar.var_201 > 0 && Gvar.var_201 <= 12) {
                await Func.func0979();
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
                    await Func.func0979();
                }
                if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_66 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                    await Func.func0979();
                }
                if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_67) {
                    await Func.func0979();
                }
                if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_67) {
                    await Func.func0979();
                }
                if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                    await Func.func0979();
                }
                if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                    await Func.func0979();
                }
                if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                    await Func.func0979();
                }
                if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                    await Func.func0979();
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
                    await Func.func0979();
                }
                if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_71[Gvar.var_2224][Gvar.var_2222] == Gvar.var_201) {
                    await Func.func0979();
                }
                if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_71[Gvar.var_2221][Gvar.var_2225] == Gvar.var_201) {
                    await Func.func0979();
                }
                if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_71[Gvar.var_2221][Gvar.var_2226] == Gvar.var_201) {
                    await Func.func0979();
                }
            }
        }
        Gvar.var_2194 = Gvar.var_2194 + 1;
    }
    await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
    if (Gvar.var_3887 == 1) {
        await Func.setMessage("周囲の敵は声に誘われて", "去っていった", 7, false, false, false);
        await Func.AutoDraw(10);
    }
    if (Gvar.var_3887 == 0) {
        await Func.setMessage("しかし何も起こらなかった", "", 7, false, false, false);
        await Func.AutoDraw(10);
        Gvar.var_1046 = 0;
        Gvar.var_1058 = Adap.dim(30, 30);
    }
    return;
}

export {func0978}
