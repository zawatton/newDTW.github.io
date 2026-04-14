/**
 * func388 — func388 おそらくレアdiscの出現確率設定1 ??
 *
 * (org原典: newDTW_dungeon_main / DONE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func388(this: any) {
        Adap.dbgprt(388);
        Gvar.var_1786 = 1;
        if (Gvar.current_floor >= 1 && Gvar.current_floor <= 9) {
            Gvar.var_1786 = Adap.rnd(100);
        }
        if (Gvar.current_floor >= 10 && Gvar.current_floor <= 19) {
            Gvar.var_1786 = Adap.rnd(90);
        }
        if (Gvar.current_floor >= 20 && Gvar.current_floor <= 29) {
            Gvar.var_1786 = Adap.rnd(80);
        }
        if (Gvar.current_floor >= 30 && Gvar.current_floor <= 39) {
            Gvar.var_1786 = Adap.rnd(70);
        }
        if (Gvar.current_floor >= 40 && Gvar.current_floor <= 49) {
            Gvar.var_1786 = Adap.rnd(60);
        }
        if (Gvar.current_floor >= 50 && Gvar.current_floor <= 59) {
            Gvar.var_1786 = Adap.rnd(50);
        }
        if (Gvar.current_floor >= 60 && Gvar.current_floor <= 69) {
            Gvar.var_1786 = Adap.rnd(40);
        }
        if (Gvar.current_floor >= 70 && Gvar.current_floor <= 79) {
            Gvar.var_1786 = Adap.rnd(30);
        }
        if (Gvar.current_floor >= 80 && Gvar.current_floor <= 89) {
            Gvar.var_1786 = Adap.rnd(20);
        }
        if (Gvar.current_floor >= 90 && Gvar.current_floor <= 98) {
            Gvar.var_1786 = Adap.rnd(10);
        }
        if (Gvar.current_floor >= 99) {
            Gvar.var_1786 = Adap.rnd(100);
        }
        if (Gvar.var_1786 == 0 || Gvar.var_1766 == 1) {
            Gvar.var_78[Gvar.var_866].Var13 = Adap.rnd(3);
            Gvar.var_78[Gvar.var_866].Var13++;
            Gvar.var_1787 = Adap.rnd(10);
            if (Gvar.var_1787 == 1) {
                Gvar.var_78[Gvar.var_866].Var12 = 2;
            }
            Gvar.var_78[Gvar.var_866].Var4 = Adap.rnd(5);
            Gvar.var_78[Gvar.var_866].Var4 = Gvar.var_78[Gvar.var_866].Var4 + 1;
            Gvar.var_1788 = 0;
            if (Gvar.current_floor >= 1 && Gvar.current_floor <= 9) {
                Gvar.var_1789 = 1;
            }
            if (Gvar.current_floor >= 10 && Gvar.current_floor <= 19) {
                Gvar.var_1789 = 1;
            }
            if (Gvar.current_floor >= 20 && Gvar.current_floor <= 29) {
                Gvar.var_1789 = 1;
            }
            if (Gvar.current_floor >= 30 && Gvar.current_floor <= 39) {
                Gvar.var_1789 = 2;
            }
            if (Gvar.current_floor >= 40 && Gvar.current_floor <= 49) {
                Gvar.var_1789 = 2;
            }
            if (Gvar.current_floor >= 50 && Gvar.current_floor <= 59) {
                Gvar.var_1789 = 2;
            }
            if (Gvar.current_floor >= 60 && Gvar.current_floor <= 69) {
                Gvar.var_1789 = 3;
            }
            if (Gvar.current_floor >= 70 && Gvar.current_floor <= 79) {
                Gvar.var_1789 = 3;
            }
            if (Gvar.current_floor >= 80 && Gvar.current_floor <= 89) {
                Gvar.var_1789 = 4;
            }
            if (Gvar.current_floor >= 90 && Gvar.current_floor <= 100) {
                Gvar.var_1789 = 5;
            }
            Gvar.var_1790 = Adap.rnd(100);
            if (Gvar.var_1790 >= 0 && Gvar.var_1790 < 4) {
                Gvar.var_1788 = Gvar.var_1789 - 3;
                if (Gvar.var_1788 < Gvar.var_1789) {
                    Gvar.var_1788 = 1;
                }
            }
            if (Gvar.var_1790 >= 4 && Gvar.var_1790 < 9) {
                Gvar.var_1788 = Gvar.var_1789 - 3;
                if (Gvar.var_1788 < Gvar.var_1789) {
                    Gvar.var_1788 = 1;
                }
            }
            if (Gvar.var_1790 >= 9 && Gvar.var_1790 < 15) {
                Gvar.var_1788 = Gvar.var_1789 - 3;
                if (Gvar.var_1788 < Gvar.var_1789) {
                    Gvar.var_1788 = 1;
                }
            }
            if (Gvar.var_1790 >= 15 && Gvar.var_1790 < 23) {
                Gvar.var_1788 = Gvar.var_1789 - 2;
                if (Gvar.var_1788 < Gvar.var_1789) {
                    Gvar.var_1788 = 2;
                }
            }
            if (Gvar.var_1790 >= 23 && Gvar.var_1790 < 33) {
                Gvar.var_1788 = Gvar.var_1789 - 2;
                if (Gvar.var_1788 < Gvar.var_1789) {
                    Gvar.var_1788 = 2;
                }
            }
            if (Gvar.var_1790 >= 33 && Gvar.var_1790 < 44) {
                Gvar.var_1788 = Gvar.var_1789 - 1;
                if (Gvar.var_1788 < Gvar.var_1789) {
                    Gvar.var_1788 = 2;
                }
            }
            if (Gvar.var_1790 >= 44 && Gvar.var_1790 < 56) {
                Gvar.var_1788 = Gvar.var_1789 - 1;
                if (Gvar.var_1788 < Gvar.var_1789) {
                    Gvar.var_1788 = 2;
                }
            }
            if (Gvar.var_1790 >= 56 && Gvar.var_1790 < 70) {
                Gvar.var_1788 = Gvar.var_1789 - 1;
                if (Gvar.var_1788 < Gvar.var_1789) {
                    Gvar.var_1788 = 2;
                }
            }
            if (Gvar.var_1790 >= 70 && Gvar.var_1790 < 86) {
                Gvar.var_1788 = Gvar.var_1789;
            }
            if (Gvar.var_1790 >= 86 && Gvar.var_1790 < 90) {
                Gvar.var_1788 = Gvar.var_1789 + 1;
            }
            if (Gvar.var_1790 >= 90 && Gvar.var_1790 < 93) {
                Gvar.var_1788 = Gvar.var_1789 + 1;
            }
            if (Gvar.var_1790 >= 93 && Gvar.var_1790 < 95) {
                Gvar.var_1788 = Gvar.var_1789 + 2;
            }
            if (Gvar.var_1790 >= 95 && Gvar.var_1790 < 96) {
                Gvar.var_1788 = Gvar.var_1789 + 2;
            }
            if (Gvar.var_1790 >= 96 && Gvar.var_1790 < 97) {
                Gvar.var_1788 = Gvar.var_1789 + 2;
            }
            if (Gvar.var_1790 >= 97 && Gvar.var_1790 < 98) {
                Gvar.var_1788 = Gvar.var_1789 + 3;
            }
            if (Gvar.var_1790 >= 98 && Gvar.var_1790 < 99) {
                Gvar.var_1788 = Gvar.var_1789 + 3;
            }
            if (Gvar.var_1790 >= 99 && Gvar.var_1790 < 100) {
                Gvar.var_1788 = Gvar.var_1789 + 4;
            }
            if (Gvar.var_1788 >= 7) {
                Gvar.var_1788 = 7;
            }
            Gvar.var_78[Gvar.var_866].Var19 = Gvar.var_1788 + 1;
            Gvar.var_78[Gvar.var_866].Var5 = Gvar.var_78[Gvar.var_866].Var5 - Gvar.var_1788;
            if (Gvar.var_78[Gvar.var_866].Var5 < 0) {
                Gvar.var_78[Gvar.var_866].Var5 = 0;
            }
            Gvar.var_1791 = 21;
            Gvar.var_1792 = 0;
            for (let cnt2 = 0; cnt2 < Gvar.var_1788; ++cnt2) {
                await Func.func389();
                Gvar.var_1793 = 20;
                Gvar.var_1794 = 0;
                for (let cnt3 = 0; cnt3 < Gvar.var_1788 + 1; ++cnt3) {
                    if (Gvar.var_78[Gvar.var_866]["Var" + Gvar.var_1793] == Gvar.var_1795) {
                        Gvar.var_1794 = 1;
                        break;
                    }
                    Gvar.var_1793++;
                }
                if (Gvar.var_1794 == 1) {
                    cnt2 = Gvar.var_1792 - 1;
                    continue;
                }
                Gvar.var_78[Gvar.var_866][Gvar.var_1791] = Gvar.var_1795;
                Gvar.var_1792++;
                Gvar.var_1791++;
            }
        }
        return;
}

export {func388}
