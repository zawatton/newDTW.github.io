/**
 * func403 — func403 装備したdiscを床に置く時(取り外す際)の動作処理
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 装備したdiscを床に置く時(取り外す際)の動作処理
async function func403(this: any) {
        Adap.dbgprt(403);
        Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
        Gvar.disc_rarity = Gvar.var_233[Gvar.var_225].Var13;
        await Func.func492(); // アイテムリスト呼び出し
        Gvar.var_1846 = Gvar.var_233[Gvar.var_225].Var0;
        Gvar.var_1837 = Gvar.var_233[Gvar.var_225].Var3;
        Gvar.var_1835 = Gvar.var_233[Gvar.var_225].Var4;
        Gvar.var_1847 = Gvar.var_233[Gvar.var_225].Var5;
        Gvar.var_1848 = Gvar.var_233[Gvar.var_225].Var6;
        Gvar.var_1838 = Gvar.var_233[Gvar.var_225].Var7;
        Gvar.var_1849 = Gvar.var_233[Gvar.var_225].Var8;
        Gvar.var_1850 = Gvar.var_233[Gvar.var_225].Var11;
        Gvar.var_1851 = Gvar.var_233[Gvar.var_225].Var12;
        Gvar.var_1833 = Gvar.var_233[Gvar.var_225].Var13;
        Gvar.var_1834 = Gvar.var_233[Gvar.var_225].Var14;
        Gvar.var_1852 = Gvar.var_233[Gvar.var_225].Var15;
        Gvar.var_1853 = Gvar.var_233[Gvar.var_225].Var16;
        Gvar.var_1854 = Gvar.var_233[Gvar.var_225].Var17;
        Gvar.var_1855 = Gvar.var_233[Gvar.var_225].Var18;
        Gvar.var_1836 = Gvar.var_233[Gvar.var_225].Var19;
        Gvar.var_1856 = Gvar.var_233[Gvar.var_225].Var20;
        Gvar.var_1857 = Gvar.var_233[Gvar.var_225].Var21;
        Gvar.var_1858 = Gvar.var_233[Gvar.var_225].Var22;
        Gvar.var_1859 = Gvar.var_233[Gvar.var_225].Var23;
        Gvar.var_1860 = Gvar.var_233[Gvar.var_225].Var24;
        Gvar.var_1861 = Gvar.var_233[Gvar.var_225].Var25;
        Gvar.var_1862 = Gvar.var_233[Gvar.var_225].Var26;
        Gvar.var_1863 = Gvar.var_233[Gvar.var_225].Var27;
        Gvar.var_1864 = Gvar.var_233[Gvar.var_225].Var28;
        Gvar.var_1865 = Gvar.var_233[Gvar.var_225].Var29;

        if (Gvar.var_233[Gvar.var_225].Var12 == 1 && Gvar.var_234 == 0) {
            await Func.func426();
            await Func.func427();
            await Func.func428();
            if (Gvar.var_225 == Gvar.var_553 || Gvar.var_225 == Gvar.var_554 || Gvar.var_225 == Gvar.var_555) {
                Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
                Gvar.var_1866 = 0;
                Gvar.var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
                await Func.setMessage("呪われていて外せない！", "", 7, false, false, false);
                await Func.AutoDraw(10);
                Gvar.var_217 = 1;
                await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
                return;
            }
        }
        await Func.func404(); // アイテムを置く時の動作処理
}

export {func403}
