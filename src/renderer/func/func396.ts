/**
 * func396 — func396 床のアイテム表示処理
 *
 * (org原典: newDTW_func3)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func396(this: any) {
        Adap.dbgprt(396);
        Gvar.var_1813 = Gvar.var_77[Gvar.var_447][Gvar.var_449];
        if (Gvar.var_103 == 0 && Gvar.var_78[Gvar.var_1813].Var10 == 0) {
            return;
        }
        Gvar.var_1814 = Gvar.var_66 - 1;
        if (Gvar.var_1814 < 0) {
            Gvar.var_1814 = 0;
        }
        Gvar.var_1815 = Gvar.var_66 + 1;
        if (Gvar.var_1815 > Gvar.var_33) {
            Gvar.var_1815 = Gvar.var_33;
        }
        Gvar.var_1816 = Gvar.var_67 + 1;
        if (Gvar.var_1816 > Gvar.var_34) {
            Gvar.var_1816 = Gvar.var_34;
        }
        Gvar.var_1817 = Gvar.var_67 - 1;
        if (Gvar.var_1817 < 0) {
            Gvar.var_1817 = 0;
        }
        Gvar.var_1818 = Gvar.var_78[Gvar.var_1813].Var1 - Gvar.var_66 + 4;
        Gvar.var_1819 = Gvar.var_78[Gvar.var_1813].Var2 - Gvar.var_67 + 4;
        Gvar.var_1820 = Gvar.var_78[Gvar.var_1813].Var1;
        Gvar.var_1821 = Gvar.var_78[Gvar.var_1813].Var2;
        Gvar.belongings_item_list = Gvar.var_78[Gvar.var_1813].Var0;
        Gvar.var_1248 = Gvar.var_78[Gvar.var_1813].Var13;
        if (Gvar.var_409 == 0) {
            Gvar.var_1822 = 0;
        }
        if (Gvar.var_409 == 1) {
            Gvar.var_1822 = 10;
        }
        if (Gvar.var_409 == 2) {
            Gvar.var_1822 = 20;
        }
        if (Gvar.var_409 == 3) {
            Gvar.var_1822 = 30;
        }
        if (Gvar.var_409 == 4) {
            Gvar.var_1822 = 40;
        }
        Gvar.var_1823 = 0;
        if (Gvar.equip_disc[368] == 1 && Gvar.var_78[Gvar.var_1813].Var15 == 1) {
            if (Gvar.var_1153 >= 0 && Gvar.var_1153 <= 8) {
                Gvar.var_1823 = 0;
            }
            if (Gvar.var_1153 == 9) {
                Gvar.var_1823 = 1;
            }
            if (Gvar.var_1153 == 10) {
                Gvar.var_1823 = 0;
            }
            if (Gvar.var_1153 == 11) {
                Gvar.var_1823 = 1;
            }
        }
        Adap.gmode(2, null, null, null);
        if (Gvar.var_1824 == 0) {
            if (Gvar.var_199 == 4) {
                Adap.pos(Gvar.var_1818 * Gvar.var_35 - Gvar.var_1822 + Gvar.var_1823, Gvar.var_1819 * Gvar.var_36);
            }
            if (Gvar.var_199 == 6) {
                Adap.pos(Gvar.var_1818 * Gvar.var_35 + Gvar.var_1822 + Gvar.var_1823, Gvar.var_1819 * Gvar.var_36);
            }
            if (Gvar.var_199 == 8) {
                Adap.pos(Gvar.var_1818 * Gvar.var_35 + Gvar.var_1823, Gvar.var_1819 * Gvar.var_36 - Gvar.var_1822);
            }
            if (Gvar.var_199 == 2) {
                Adap.pos(Gvar.var_1818 * Gvar.var_35 + Gvar.var_1823, Gvar.var_1819 * Gvar.var_36 + Gvar.var_1822);
            }
            if (Gvar.var_199 == 1) {
                Adap.pos(Gvar.var_1818 * Gvar.var_35 - Gvar.var_1822 + Gvar.var_1823, Gvar.var_1819 * Gvar.var_36 + Gvar.var_1822);
            }
            if (Gvar.var_199 == 3) {
                Adap.pos(Gvar.var_1818 * Gvar.var_35 + Gvar.var_1822 + Gvar.var_1823, Gvar.var_1819 * Gvar.var_36 + Gvar.var_1822);
            }
            if (Gvar.var_199 == 7) {
                Adap.pos(Gvar.var_1818 * Gvar.var_35 - Gvar.var_1822 + Gvar.var_1823, Gvar.var_1819 * Gvar.var_36 - Gvar.var_1822);
            }
            if (Gvar.var_199 == 9) {
                Adap.pos(Gvar.var_1818 * Gvar.var_35 + Gvar.var_1822 + Gvar.var_1823, Gvar.var_1819 * Gvar.var_36 - Gvar.var_1822);
            }
            if (Gvar.var_217 == 1) {
                Adap.pos(Gvar.var_1818 * Gvar.var_35 + Gvar.var_1823, Gvar.var_1819 * Gvar.var_36);
            }
        }
        if (Gvar.var_1824 == 1) {
            if (Gvar.var_199 == 4) {
                Adap.pos(Gvar.var_1818 * Gvar.var_35 - 20 + 20, Gvar.var_1819 * Gvar.var_36);
            }
            if (Gvar.var_199 == 6) {
                Adap.pos(Gvar.var_1818 * Gvar.var_35 + 20 - 20, Gvar.var_1819 * Gvar.var_36);
            }
            if (Gvar.var_199 == 8) {
                Adap.pos(Gvar.var_1818 * Gvar.var_35, Gvar.var_1819 * Gvar.var_36 - 20 + 20);
            }
            if (Gvar.var_199 == 2) {
                Adap.pos(Gvar.var_1818 * Gvar.var_35, Gvar.var_1819 * Gvar.var_36 + 20 - 20);
            }
            if (Gvar.var_199 == 1) {
                Adap.pos(Gvar.var_1818 * Gvar.var_35 - 20 + 20, Gvar.var_1819 * Gvar.var_36 + 20 - 20);
            }
            if (Gvar.var_199 == 3) {
                Adap.pos(Gvar.var_1818 * Gvar.var_35 + 20 - 20, Gvar.var_1819 * Gvar.var_36 + 20 - 20);
            }
            if (Gvar.var_199 == 7) {
                Adap.pos(Gvar.var_1818 * Gvar.var_35 - 20 + 20, Gvar.var_1819 * Gvar.var_36 - 20 + 20);
            }
            if (Gvar.var_199 == 9) {
                Adap.pos(Gvar.var_1818 * Gvar.var_35 + 20 - 20, Gvar.var_1819 * Gvar.var_36 - 20 + 20);
            }
        }
        await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
}

export {func396}
