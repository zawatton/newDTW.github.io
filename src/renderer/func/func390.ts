/**
 * func390 — func390 不明
 *
 * (org原典: newDTW_func3)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func390(this: any) {
        Adap.dbgprt(390);
        Gvar.var_1778 = 1;
        Gvar.var_1798 = Gvar.var_866;
        Gvar.var_1799 = Gvar.var_78[Gvar.var_866].Var0;
        Gvar.var_1800 = Gvar.var_78[Gvar.var_866].Var6;
        Gvar.var_1801 = Gvar.var_78[Gvar.var_866].Var7;
        Gvar.var_1802 = Gvar.var_78[Gvar.var_866].Var8;
        Gvar.var_1803 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_1801; ++cnt1) {
            Gvar.var_866 = 0;
            if (Gvar.var_1799 == 801 || Gvar.var_1799 == 802) {
                Gvar.var_1736 = Adap.rnd(100);
                if (Gvar.var_1736 >= 0 && Gvar.var_1736 < 20) {
                    Gvar.var_1735 = 1;
                }
                if (Gvar.var_1736 >= 20 && Gvar.var_1736 < 80) {
                    Gvar.var_1735 = 5;
                }
                if (Gvar.var_1736 >= 80 && Gvar.var_1736 < 100) {
                    Gvar.var_1735 = 3;
                }
            }
            if (Gvar.var_1799 == 803) {
                Gvar.var_1736 = Adap.rnd(100);
                if (Gvar.var_1736 >= 0 && Gvar.var_1736 < 50) {
                    Gvar.var_1735 = 6;
                }
                if (Gvar.var_1736 >= 50 && Gvar.var_1736 < 100) {
                    Gvar.var_1735 = 4;
                }
            }
            if (Gvar.var_1799 == 804) {
                Gvar.var_1735 = 9;
            }
            await Func.func385(); // 各ダンジョンごとの出現アイテム&出現確率管理
            for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
                Gvar.var_486[Gvar.var_1800][Gvar.var_1803][cnt2] = Gvar.var_78[Gvar.var_866]["Var" + cnt2];
            }
            Gvar.var_1803++;
        }
        for (let cnt1 = 0; cnt1 < 30; ++cnt1) {
            Gvar.var_78[0]["Var" + cnt1] = 0;
        }
        Gvar.var_1778 = 0;
        Gvar.var_866 = Gvar.var_1798;
        Gvar.var_78[Gvar.var_866].Var7 = 0;
        Gvar.var_78[Gvar.var_866].Var8 = Gvar.var_1801;
        return;
}

export {func390}
