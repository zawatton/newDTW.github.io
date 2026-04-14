/**
 * func476 — func476 亀の倉庫へアイテムを保管する際、アイテムデータ配列を保存する処理？
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func476(this: any) {
        Adap.dbgprt(476);
        Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
        Gvar.var_1866 = 0;
        Gvar.var_683 = Gvar.var_233[Gvar.var_1876].Var8;
        Gvar.belongings_item_list = Gvar.var_486[Gvar.var_682][Gvar.var_225][0];
        Gvar.disc_rarity = Gvar.var_486[Gvar.var_682][Gvar.var_225][13];
        await Func.func492(); // アイテムリスト呼び出し
        Gvar.var_1846 = Gvar.var_486[Gvar.var_682][Gvar.var_225][0];
        Gvar.var_1837 = Gvar.var_486[Gvar.var_682][Gvar.var_225][3];
        Gvar.var_1835 = Gvar.var_486[Gvar.var_682][Gvar.var_225][4];
        Gvar.var_1847 = Gvar.var_486[Gvar.var_682][Gvar.var_225][5];
        Gvar.var_1848 = Gvar.var_486[Gvar.var_682][Gvar.var_225][6];
        Gvar.var_1838 = Gvar.var_486[Gvar.var_682][Gvar.var_225][7];
        Gvar.var_1849 = Gvar.var_486[Gvar.var_682][Gvar.var_225][8];
        Gvar.var_1889 = Gvar.var_486[Gvar.var_682][Gvar.var_225][9];
        Gvar.var_1850 = Gvar.var_486[Gvar.var_682][Gvar.var_225][11];
        Gvar.var_1851 = Gvar.var_486[Gvar.var_682][Gvar.var_225][12];
        Gvar.var_1833 = Gvar.var_486[Gvar.var_682][Gvar.var_225][13];
        Gvar.var_1834 = Gvar.var_486[Gvar.var_682][Gvar.var_225][14];
        Gvar.var_1852 = Gvar.var_486[Gvar.var_682][Gvar.var_225][15];
        Gvar.var_1853 = Gvar.var_486[Gvar.var_682][Gvar.var_225][16];
        Gvar.var_1854 = Gvar.var_486[Gvar.var_682][Gvar.var_225][17];
        Gvar.var_1855 = Gvar.var_486[Gvar.var_682][Gvar.var_225][18];
        Gvar.var_1836 = Gvar.var_486[Gvar.var_682][Gvar.var_225][19];
        Gvar.var_1856 = Gvar.var_486[Gvar.var_682][Gvar.var_225][20];
        Gvar.var_1857 = Gvar.var_486[Gvar.var_682][Gvar.var_225][21];
        Gvar.var_1858 = Gvar.var_486[Gvar.var_682][Gvar.var_225][22];
        Gvar.var_1859 = Gvar.var_486[Gvar.var_682][Gvar.var_225][23];
        Gvar.var_1860 = Gvar.var_486[Gvar.var_682][Gvar.var_225][24];
        Gvar.var_1861 = Gvar.var_486[Gvar.var_682][Gvar.var_225][25];
        Gvar.var_1862 = Gvar.var_486[Gvar.var_682][Gvar.var_225][26];
        Gvar.var_1863 = Gvar.var_486[Gvar.var_682][Gvar.var_225][27];
        Gvar.var_1864 = Gvar.var_486[Gvar.var_682][Gvar.var_225][28];
        Gvar.var_1865 = Gvar.var_486[Gvar.var_682][Gvar.var_225][29];
        await Func.func404(); // アイテムを置く時の動作処理
        return;
}

export {func476}
