/**
 * func405 — func405 不明
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func405(this: any) {
        Adap.dbgprt(405);
        Gvar.var_446 = 0;
        Gvar.var_448 = Gvar.var_66;
        Gvar.var_450 = Gvar.var_67;
        if (Gvar.var_1270 == 1) {
            Gvar.var_448 = Gvar.var_455;
            Gvar.var_450 = Gvar.var_456;
        }
        if (Gvar.var_445 == 1) {
            Gvar.var_448 = Gvar.var_442;
            Gvar.var_450 = Gvar.var_443;
        }
        Gvar.var_1868 = Gvar.var_448 - 1;
        if (Gvar.var_1868 < 0) {
            Gvar.var_1868 = Gvar.var_448;
        }
        Gvar.var_1869 = Gvar.var_448 + 1;
        if (Gvar.var_1869 > Gvar.var_33) {
            Gvar.var_1869 = Gvar.var_448;
        }
        Gvar.var_1870 = Gvar.var_450 + 1;
        if (Gvar.var_1870 > Gvar.var_34) {
            Gvar.var_1870 = Gvar.var_450;
        }
        Gvar.var_1871 = Gvar.var_450 - 1;
        if (Gvar.var_1871 < 0) {
            Gvar.var_1871 = Gvar.var_450;
        }
        Gvar.var_1872 = Gvar.var_448 - 2;
        if (Gvar.var_1872 < 0) {
            Gvar.var_1872 = Gvar.var_448;
        }
        Gvar.var_1873 = Gvar.var_448 + 2;
        if (Gvar.var_1873 > Gvar.var_33) {
            Gvar.var_1873 = Gvar.var_448;
        }
        Gvar.var_1874 = Gvar.var_450 + 2;
        if (Gvar.var_1874 > Gvar.var_34) {
            Gvar.var_1874 = Gvar.var_450;
        }
        Gvar.var_1875 = Gvar.var_450 - 2;
        if (Gvar.var_1875 < 0) {
            Gvar.var_1875 = Gvar.var_450;
        }
        if (Gvar.var_446 == 0 && Gvar.var_77[Gvar.var_448][Gvar.var_450] == 0 && Gvar.var_73[Gvar.var_448][Gvar.var_450] == 0 && Gvar.var_71[Gvar.var_448][Gvar.var_450] != 13 && Gvar.var_80[Gvar.var_448][Gvar.var_450] == 0 && Gvar.var_72[Gvar.var_448][Gvar.var_450] <= 1) {
            Gvar.var_448 = Gvar.var_448;
            Gvar.var_450 = Gvar.var_450;
            Gvar.var_446 = 1;
        }
        if (Gvar.var_446 == 0 && Gvar.var_77[Gvar.var_1869][Gvar.var_450] == 0 && Gvar.var_71[Gvar.var_1869][Gvar.var_450] != 0 && Gvar.var_71[Gvar.var_1869][Gvar.var_450] != 13 && Gvar.var_73[Gvar.var_1869][Gvar.var_450] == 0 && Gvar.var_80[Gvar.var_1869][Gvar.var_450] == 0 && Gvar.var_72[Gvar.var_1869][Gvar.var_450] <= 1) {
            Gvar.var_448 = Gvar.var_1869;
            Gvar.var_450 = Gvar.var_450;
            Gvar.var_446 = 1;
        }
        if (Gvar.var_446 == 0 && Gvar.var_77[Gvar.var_1868][Gvar.var_450] == 0 && Gvar.var_71[Gvar.var_1868][Gvar.var_450] != 0 && Gvar.var_71[Gvar.var_1868][Gvar.var_450] != 13 && Gvar.var_73[Gvar.var_1868][Gvar.var_450] == 0 && Gvar.var_80[Gvar.var_1868][Gvar.var_450] == 0 && Gvar.var_72[Gvar.var_1868][Gvar.var_450] <= 1) {
            Gvar.var_448 = Gvar.var_1868;
            Gvar.var_450 = Gvar.var_450;
            Gvar.var_446 = 1;
        }
        if (Gvar.var_446 == 0 && Gvar.var_77[Gvar.var_448][Gvar.var_1871] == 0 && Gvar.var_71[Gvar.var_448][Gvar.var_1871] != 0 && Gvar.var_71[Gvar.var_448][Gvar.var_1871] != 13 && Gvar.var_73[Gvar.var_448][Gvar.var_1871] == 0 && Gvar.var_80[Gvar.var_448][Gvar.var_1871] == 0 && Gvar.var_72[Gvar.var_448][Gvar.var_1871] <= 1) {
            Gvar.var_448 = Gvar.var_448;
            Gvar.var_450 = Gvar.var_1871;
            Gvar.var_446 = 1;
        }
        if (Gvar.var_446 == 0 && Gvar.var_77[Gvar.var_1869][Gvar.var_1871] == 0 && Gvar.var_71[Gvar.var_1869][Gvar.var_1871] != 0 && Gvar.var_71[Gvar.var_1869][Gvar.var_1871] != 13 && Gvar.var_73[Gvar.var_1869][Gvar.var_1871] == 0 && Gvar.var_80[Gvar.var_1869][Gvar.var_1871] == 0 && Gvar.var_72[Gvar.var_1869][Gvar.var_1871] <= 1) {
            Gvar.var_448 = Gvar.var_1869;
            Gvar.var_450 = Gvar.var_1871;
            Gvar.var_446 = 1;
        }
        if (Gvar.var_446 == 0 && Gvar.var_77[Gvar.var_1868][Gvar.var_1871] == 0 && Gvar.var_71[Gvar.var_1868][Gvar.var_1871] != 0 && Gvar.var_71[Gvar.var_1868][Gvar.var_1871] != 13 && Gvar.var_73[Gvar.var_1868][Gvar.var_1871] == 0 && Gvar.var_80[Gvar.var_1868][Gvar.var_1871] == 0 && Gvar.var_72[Gvar.var_1868][Gvar.var_1871] <= 1) {
            Gvar.var_448 = Gvar.var_1868;
            Gvar.var_450 = Gvar.var_1871;
            Gvar.var_446 = 1;
        }
        if (Gvar.var_446 == 0 && Gvar.var_77[Gvar.var_448][Gvar.var_1870] == 0 && Gvar.var_71[Gvar.var_448][Gvar.var_1870] != 0 && Gvar.var_71[Gvar.var_448][Gvar.var_1870] != 13 && Gvar.var_73[Gvar.var_448][Gvar.var_1870] == 0 && Gvar.var_80[Gvar.var_448][Gvar.var_1870] == 0 && Gvar.var_72[Gvar.var_448][Gvar.var_1870] <= 1) {
            Gvar.var_448 = Gvar.var_448;
            Gvar.var_450 = Gvar.var_1870;
            Gvar.var_446 = 1;
        }
        if (Gvar.var_446 == 0 && Gvar.var_77[Gvar.var_1869][Gvar.var_1870] == 0 && Gvar.var_71[Gvar.var_1869][Gvar.var_1870] != 0 && Gvar.var_71[Gvar.var_1869][Gvar.var_1870] != 13 && Gvar.var_73[Gvar.var_1869][Gvar.var_1870] == 0 && Gvar.var_80[Gvar.var_1869][Gvar.var_1870] == 0 && Gvar.var_72[Gvar.var_1869][Gvar.var_1870] <= 1) {
            Gvar.var_448 = Gvar.var_1869;
            Gvar.var_450 = Gvar.var_1870;
            Gvar.var_446 = 1;
        }
        if (Gvar.var_446 == 0 && Gvar.var_77[Gvar.var_1868][Gvar.var_1870] == 0 && Gvar.var_71[Gvar.var_1868][Gvar.var_1870] != 0 && Gvar.var_71[Gvar.var_1868][Gvar.var_1870] != 13 && Gvar.var_73[Gvar.var_1868][Gvar.var_1870] == 0 && Gvar.var_80[Gvar.var_1868][Gvar.var_1870] == 0 && Gvar.var_72[Gvar.var_1868][Gvar.var_1870] <= 1) {
            Gvar.var_448 = Gvar.var_1868;
            Gvar.var_450 = Gvar.var_1870;
            Gvar.var_446 = 1;
        }
        if (Gvar.var_446 == 0 && Gvar.var_77[Gvar.var_1873][Gvar.var_450] == 0 && Gvar.var_71[Gvar.var_1873][Gvar.var_450] != 0 && Gvar.var_71[Gvar.var_1873][Gvar.var_450] != 13 && Gvar.var_73[Gvar.var_1873][Gvar.var_450] == 0 && Gvar.var_80[Gvar.var_1873][Gvar.var_450] == 0 && Gvar.var_72[Gvar.var_1873][Gvar.var_450] <= 1) {
            Gvar.var_448 = Gvar.var_1873;
            Gvar.var_450 = Gvar.var_450;
            Gvar.var_446 = 1;
        }
        if (Gvar.var_446 == 0 && Gvar.var_77[Gvar.var_1872][Gvar.var_450] == 0 && Gvar.var_71[Gvar.var_1872][Gvar.var_450] != 0 && Gvar.var_71[Gvar.var_1872][Gvar.var_450] != 13 && Gvar.var_73[Gvar.var_1872][Gvar.var_450] == 0 && Gvar.var_80[Gvar.var_1872][Gvar.var_450] == 0 && Gvar.var_72[Gvar.var_1872][Gvar.var_450] <= 1) {
            Gvar.var_448 = Gvar.var_1872;
            Gvar.var_450 = Gvar.var_450;
            Gvar.var_446 = 1;
        }
        if (Gvar.var_446 == 0 && Gvar.var_77[Gvar.var_1873][Gvar.var_1871] == 0 && Gvar.var_71[Gvar.var_1873][Gvar.var_1871] != 0 && Gvar.var_71[Gvar.var_1873][Gvar.var_1871] != 13 && Gvar.var_73[Gvar.var_1873][Gvar.var_1871] == 0 && Gvar.var_80[Gvar.var_1873][Gvar.var_1871] == 0 && Gvar.var_72[Gvar.var_1873][Gvar.var_1871] <= 1) {
            Gvar.var_448 = Gvar.var_1873;
            Gvar.var_450 = Gvar.var_1871;
            Gvar.var_446 = 1;
        }
        if (Gvar.var_446 == 0 && Gvar.var_77[Gvar.var_1872][Gvar.var_1871] == 0 && Gvar.var_71[Gvar.var_1872][Gvar.var_1871] != 0 && Gvar.var_71[Gvar.var_1872][Gvar.var_1871] != 13 && Gvar.var_73[Gvar.var_1872][Gvar.var_1871] == 0 && Gvar.var_80[Gvar.var_1872][Gvar.var_1871] == 0 && Gvar.var_72[Gvar.var_1872][Gvar.var_1871] <= 1) {
            Gvar.var_448 = Gvar.var_1872;
            Gvar.var_450 = Gvar.var_1871;
            Gvar.var_446 = 1;
        }
        if (Gvar.var_446 == 0 && Gvar.var_77[Gvar.var_1873][Gvar.var_1870] == 0 && Gvar.var_71[Gvar.var_1873][Gvar.var_1870] != 0 && Gvar.var_71[Gvar.var_1873][Gvar.var_1870] != 13 && Gvar.var_73[Gvar.var_1873][Gvar.var_1870] == 0 && Gvar.var_80[Gvar.var_1873][Gvar.var_1870] == 0 && Gvar.var_72[Gvar.var_1873][Gvar.var_1870] <= 1) {
            Gvar.var_448 = Gvar.var_1873;
            Gvar.var_450 = Gvar.var_1870;
            Gvar.var_446 = 1;
        }
        if (Gvar.var_446 == 0 && Gvar.var_77[Gvar.var_1872][Gvar.var_1870] == 0 && Gvar.var_71[Gvar.var_1872][Gvar.var_1870] != 0 && Gvar.var_71[Gvar.var_1872][Gvar.var_1870] != 13 && Gvar.var_73[Gvar.var_1872][Gvar.var_1870] == 0 && Gvar.var_80[Gvar.var_1872][Gvar.var_1870] == 0 && Gvar.var_72[Gvar.var_1872][Gvar.var_1870] <= 1) {
            Gvar.var_448 = Gvar.var_1872;
            Gvar.var_450 = Gvar.var_1870;
            Gvar.var_446 = 1;
        }
        if (Gvar.var_446 == 0 && Gvar.var_77[Gvar.var_448][Gvar.var_1875] == 0 && Gvar.var_71[Gvar.var_448][Gvar.var_1875] != 0 && Gvar.var_71[Gvar.var_448][Gvar.var_1875] != 13 && Gvar.var_73[Gvar.var_448][Gvar.var_1875] == 0 && Gvar.var_80[Gvar.var_448][Gvar.var_1875] == 0 && Gvar.var_72[Gvar.var_448][Gvar.var_1875] <= 1) {
            Gvar.var_448 = Gvar.var_448;
            Gvar.var_450 = Gvar.var_1875;
            Gvar.var_446 = 1;
        }
        if (Gvar.var_446 == 0 && Gvar.var_77[Gvar.var_1869][Gvar.var_1875] == 0 && Gvar.var_71[Gvar.var_1869][Gvar.var_1875] != 0 && Gvar.var_71[Gvar.var_1869][Gvar.var_1875] != 13 && Gvar.var_73[Gvar.var_1869][Gvar.var_1875] == 0 && Gvar.var_80[Gvar.var_1869][Gvar.var_1875] == 0 && Gvar.var_72[Gvar.var_1869][Gvar.var_1875] <= 1) {
            Gvar.var_448 = Gvar.var_1869;
            Gvar.var_450 = Gvar.var_1875;
            Gvar.var_446 = 1;
        }
        if (Gvar.var_446 == 0 && Gvar.var_77[Gvar.var_1868][Gvar.var_1875] == 0 && Gvar.var_71[Gvar.var_1868][Gvar.var_1875] != 0 && Gvar.var_71[Gvar.var_1868][Gvar.var_1875] != 13 && Gvar.var_73[Gvar.var_1868][Gvar.var_1875] == 0 && Gvar.var_80[Gvar.var_1868][Gvar.var_1875] == 0 && Gvar.var_72[Gvar.var_1868][Gvar.var_1875] <= 1) {
            Gvar.var_448 = Gvar.var_1868;
            Gvar.var_450 = Gvar.var_1875;
            Gvar.var_446 = 1;
        }
        if (Gvar.var_446 == 0 && Gvar.var_77[Gvar.var_1873][Gvar.var_1875] == 0 && Gvar.var_71[Gvar.var_1873][Gvar.var_1875] != 0 && Gvar.var_71[Gvar.var_1873][Gvar.var_1875] != 13 && Gvar.var_73[Gvar.var_1873][Gvar.var_1875] == 0 && Gvar.var_80[Gvar.var_1873][Gvar.var_1875] == 0 && Gvar.var_72[Gvar.var_1873][Gvar.var_1875] <= 1) {
            Gvar.var_448 = Gvar.var_1873;
            Gvar.var_450 = Gvar.var_1875;
            Gvar.var_446 = 1;
        }
        if (Gvar.var_446 == 0 && Gvar.var_77[Gvar.var_1872][Gvar.var_1875] == 0 && Gvar.var_71[Gvar.var_1872][Gvar.var_1875] != 0 && Gvar.var_71[Gvar.var_1872][Gvar.var_1875] != 13 && Gvar.var_73[Gvar.var_1872][Gvar.var_1875] == 0 && Gvar.var_80[Gvar.var_1872][Gvar.var_1875] == 0 && Gvar.var_72[Gvar.var_1872][Gvar.var_1875] <= 1) {
            Gvar.var_448 = Gvar.var_1872;
            Gvar.var_450 = Gvar.var_1875;
            Gvar.var_446 = 1;
        }
        if (Gvar.var_446 == 0 && Gvar.var_77[Gvar.var_448][Gvar.var_1874] == 0 && Gvar.var_71[Gvar.var_448][Gvar.var_1874] != 0 && Gvar.var_71[Gvar.var_448][Gvar.var_1874] != 13 && Gvar.var_73[Gvar.var_448][Gvar.var_1874] == 0 && Gvar.var_80[Gvar.var_448][Gvar.var_1874] == 0 && Gvar.var_72[Gvar.var_448][Gvar.var_1874] <= 1) {
            Gvar.var_448 = Gvar.var_448;
            Gvar.var_450 = Gvar.var_1874;
            Gvar.var_446 = 1;
        }
        if (Gvar.var_446 == 0 && Gvar.var_77[Gvar.var_1869][Gvar.var_1874] == 0 && Gvar.var_71[Gvar.var_1869][Gvar.var_1874] != 0 && Gvar.var_71[Gvar.var_1869][Gvar.var_1874] != 13 && Gvar.var_73[Gvar.var_1869][Gvar.var_1874] == 0 && Gvar.var_80[Gvar.var_1869][Gvar.var_1874] == 0 && Gvar.var_72[Gvar.var_1869][Gvar.var_1874] <= 1) {
            Gvar.var_448 = Gvar.var_1869;
            Gvar.var_450 = Gvar.var_1874;
            Gvar.var_446 = 1;
        }
        if (Gvar.var_446 == 0 && Gvar.var_77[Gvar.var_1868][Gvar.var_1874] == 0 && Gvar.var_71[Gvar.var_1868][Gvar.var_1874] != 0 && Gvar.var_71[Gvar.var_1868][Gvar.var_1874] != 13 && Gvar.var_73[Gvar.var_1868][Gvar.var_1874] == 0 && Gvar.var_80[Gvar.var_1868][Gvar.var_1874] == 0 && Gvar.var_72[Gvar.var_1868][Gvar.var_1874] <= 1) {
            Gvar.var_448 = Gvar.var_1868;
            Gvar.var_450 = Gvar.var_1874;
            Gvar.var_446 = 1;
        }
        if (Gvar.var_446 == 0 && Gvar.var_77[Gvar.var_1873][Gvar.var_1874] == 0 && Gvar.var_71[Gvar.var_1873][Gvar.var_1874] != 0 && Gvar.var_71[Gvar.var_1873][Gvar.var_1874] != 13 && Gvar.var_73[Gvar.var_1873][Gvar.var_1874] == 0 && Gvar.var_80[Gvar.var_1873][Gvar.var_1874] == 0 && Gvar.var_72[Gvar.var_1873][Gvar.var_1874] <= 1) {
            Gvar.var_448 = Gvar.var_1873;
            Gvar.var_450 = Gvar.var_1874;
            Gvar.var_446 = 1;
        }
        if (Gvar.var_446 == 0 && Gvar.var_77[Gvar.var_1872][Gvar.var_1874] == 0 && Gvar.var_71[Gvar.var_1872][Gvar.var_1874] != 0 && Gvar.var_71[Gvar.var_1872][Gvar.var_1874] != 13 && Gvar.var_73[Gvar.var_1872][Gvar.var_1874] == 0 && Gvar.var_80[Gvar.var_1872][Gvar.var_1874] == 0 && Gvar.var_72[Gvar.var_1872][Gvar.var_1874] <= 1) {
            Gvar.var_448 = Gvar.var_1872;
            Gvar.var_450 = Gvar.var_1874;
            Gvar.var_446 = 1;
        }
        if (Gvar.var_336 >= 200) {
            Gvar.var_446 = 0;
        }
        return;
}

export {func405}
