import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func588(this: any) {
        Adap.dbgprt(588);
        Gvar.var_2823 = Gvar.var_83[Gvar.var_673].Var1;
        Gvar.var_2824 = Gvar.var_83[Gvar.var_673].Var2;
        if (Gvar.var_83[Gvar.var_673].Var5 == 4) {
            Gvar.var_2825 = Gvar.var_2823 - 1;
            Gvar.var_2826 = Gvar.var_2824;
        }
        if (Gvar.var_83[Gvar.var_673].Var5 == 6) {
            Gvar.var_2825 = Gvar.var_2823 + 1;
            Gvar.var_2826 = Gvar.var_2824;
        }
        if (Gvar.var_83[Gvar.var_673].Var5 == 2) {
            Gvar.var_2825 = Gvar.var_2823;
            Gvar.var_2826 = Gvar.var_2824 + 1;
        }
        if (Gvar.var_83[Gvar.var_673].Var5 == 8) {
            Gvar.var_2825 = Gvar.var_2823;
            Gvar.var_2826 = Gvar.var_2824 - 1;
        }
        if (Gvar.var_83[Gvar.var_673].Var5 == 1) {
            Gvar.var_2825 = Gvar.var_2823 - 1;
            Gvar.var_2826 = Gvar.var_2824 + 1;
        }
        if (Gvar.var_83[Gvar.var_673].Var5 == 3) {
            Gvar.var_2825 = Gvar.var_2823 + 1;
            Gvar.var_2826 = Gvar.var_2824 + 1;
        }
        if (Gvar.var_83[Gvar.var_673].Var5 == 7) {
            Gvar.var_2825 = Gvar.var_2823 - 1;
            Gvar.var_2826 = Gvar.var_2824 - 1;
        }
        if (Gvar.var_83[Gvar.var_673].Var5 == 9) {
            Gvar.var_2825 = Gvar.var_2823 + 1;
            Gvar.var_2826 = Gvar.var_2824 - 1;
        }
        if (Gvar.var_71[Gvar.var_2825][Gvar.var_2826] == 13) {
            Gvar.var_2827 = Gvar.var_83[Gvar.var_673].Var5;
            Gvar.var_2823 = Gvar.var_83[Gvar.var_673].Var1;
            Gvar.var_2824 = Gvar.var_83[Gvar.var_673].Var2;
            Gvar.var_2828 = 0;
            for (let cnt2 = 0; cnt2 < 100; ++cnt2) {
                Gvar.var_2829 = Adap.rnd(8);
                if (Gvar.var_2829 == 0) {
                    Gvar.var_83[Gvar.var_673].Var5 = 4;
                    Gvar.var_2825 = Gvar.var_2823 - 1;
                    Gvar.var_2826 = Gvar.var_2824;
                    if (Gvar.var_71[Gvar.var_2825][Gvar.var_2826] != 13 && Gvar.var_71[Gvar.var_2825][Gvar.var_2826] != 0 && Gvar.var_82[Gvar.var_2825][Gvar.var_2826] == 0) {
                        Gvar.var_2828 = 1;
                        break;
                    }
                }
                if (Gvar.var_2829 == 1) {
                    Gvar.var_83[Gvar.var_673].Var5 = 6;
                    Gvar.var_2825 = Gvar.var_2823 + 1;
                    Gvar.var_2826 = Gvar.var_2824;
                    if (Gvar.var_71[Gvar.var_2825][Gvar.var_2826] != 13 && Gvar.var_71[Gvar.var_2825][Gvar.var_2826] != 0 && Gvar.var_82[Gvar.var_2825][Gvar.var_2826] == 0) {
                        Gvar.var_2828 = 1;
                        break;
                    }
                }
                if (Gvar.var_2829 == 2) {
                    Gvar.var_83[Gvar.var_673].Var5 = 2;
                    Gvar.var_2825 = Gvar.var_2823;
                    Gvar.var_2826 = Gvar.var_2824 + 1;
                    if (Gvar.var_71[Gvar.var_2825][Gvar.var_2826] != 13 && Gvar.var_71[Gvar.var_2825][Gvar.var_2826] != 0 && Gvar.var_82[Gvar.var_2825][Gvar.var_2826] == 0) {
                        Gvar.var_2828 = 1;
                        break;
                    }
                }
                if (Gvar.var_2829 == 3) {
                    Gvar.var_83[Gvar.var_673].Var5 = 8;
                    Gvar.var_2825 = Gvar.var_2823;
                    Gvar.var_2826 = Gvar.var_2824 - 1;
                    if (Gvar.var_71[Gvar.var_2825][Gvar.var_2826] != 13 && Gvar.var_71[Gvar.var_2825][Gvar.var_2826] != 0 && Gvar.var_82[Gvar.var_2825][Gvar.var_2826] == 0) {
                        Gvar.var_2828 = 1;
                        break;
                    }
                }
                if (Gvar.var_2829 == 4) {
                    Gvar.var_83[Gvar.var_673].Var5 = 1;
                    Gvar.var_2825 = Gvar.var_2823 - 1;
                    Gvar.var_2826 = Gvar.var_2824 + 1;
                    if (Gvar.var_71[Gvar.var_2825][Gvar.var_2826] != 13 && Gvar.var_71[Gvar.var_2825][Gvar.var_2826] != 0 && Gvar.var_82[Gvar.var_2825][Gvar.var_2826] == 0) {
                        Gvar.var_2828 = 1;
                        break;
                    }
                }
                if (Gvar.var_2829 == 5) {
                    Gvar.var_83[Gvar.var_673].Var5 = 3;
                    Gvar.var_2825 = Gvar.var_2823 + 1;
                    Gvar.var_2826 = Gvar.var_2824 + 1;
                    if (Gvar.var_71[Gvar.var_2825][Gvar.var_2826] != 13 && Gvar.var_71[Gvar.var_2825][Gvar.var_2826] != 0 && Gvar.var_82[Gvar.var_2825][Gvar.var_2826] == 0) {
                        Gvar.var_2828 = 1;
                        break;
                    }
                }
                if (Gvar.var_2829 == 6) {
                    Gvar.var_83[Gvar.var_673].Var5 = 7;
                    Gvar.var_2825 = Gvar.var_2823 - 1;
                    Gvar.var_2826 = Gvar.var_2824 - 1;
                    if (Gvar.var_71[Gvar.var_2825][Gvar.var_2826] != 13 && Gvar.var_71[Gvar.var_2825][Gvar.var_2826] != 0 && Gvar.var_82[Gvar.var_2825][Gvar.var_2826] == 0) {
                        Gvar.var_2828 = 1;
                        break;
                    }
                }
                if (Gvar.var_2829 == 7) {
                    Gvar.var_83[Gvar.var_673].Var5 = 9;
                    Gvar.var_2825 = Gvar.var_2823 + 1;
                    Gvar.var_2826 = Gvar.var_2824 - 1;
                    if (Gvar.var_71[Gvar.var_2825][Gvar.var_2826] != 13 && Gvar.var_71[Gvar.var_2825][Gvar.var_2826] != 0 && Gvar.var_82[Gvar.var_2825][Gvar.var_2826] == 0) {
                        Gvar.var_2828 = 1;
                        break;
                    }
                }
            }
            if (Gvar.var_2828 == 0) {
                Gvar.var_83[Gvar.var_673].Var5 = Gvar.var_2827;
                return;
            }
        }
        Gvar.var_65[Gvar.var_2825][Gvar.var_2826] = 1;
        Gvar.var_65[Gvar.var_66][Gvar.var_67] = 0;
        Gvar.var_66 = Gvar.var_2825;
        Gvar.var_67 = Gvar.var_2826;
        await Func.func016();
        if (Gvar.var_72[Gvar.var_236][Gvar.var_237] >= 1 && Gvar.var_72[Gvar.var_66][Gvar.var_67] == 0 && Gvar.var_85 == 0) {
            await Func.func722(); // アイテムを所持した状態で店から出た際の動作処理(泥棒状態認定)
        }
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        await Func.AutoDraw(10);
        await Func.setMessage("億泰に引き寄せられた！", "「【瞬間移動】ってやつさあ～～っ」", 8, false, false, false);
        Gvar.var_389 = 0;
        Gvar.var_240 = 0;
        Gvar.var_2392 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_97; ++cnt1) {
            Gvar.var_83[Gvar.var_2392].Var9 = 0;
            Gvar.var_83[Gvar.var_2392].Var18 = 0;
            Gvar.var_2392 = Gvar.var_2392 + 1;
        }
        return;
}

export {func588}
