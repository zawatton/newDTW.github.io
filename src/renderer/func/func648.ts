/**
 * func648 — func648 不明
 *
 * (org原典: newDTW_func6)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func648(this: any) {
        Adap.dbgprt(648);
        Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
        if (Gvar.var_2996 == 1) {
            if (Gvar.var_2989 == 4) {
                Gvar.var_2997 = 120;
                Gvar.var_2998 = 150;
            }
            if (Gvar.var_2989 == 6) {
                Gvar.var_2997 = 200;
                Gvar.var_2998 = 150;
            }
            if (Gvar.var_2989 == 2) {
                Gvar.var_2997 = 160;
                Gvar.var_2998 = 160;
            }
            if (Gvar.var_2989 == 8) {
                Gvar.var_2997 = 160;
                Gvar.var_2998 = 160;
            }
            if (Gvar.var_2989 == 1) {
                Gvar.var_2997 = 120;
                Gvar.var_2998 = 120;
            }
            if (Gvar.var_2989 == 3) {
                Gvar.var_2997 = 200;
                Gvar.var_2998 = 200;
            }
            if (Gvar.var_2989 == 7) {
                Gvar.var_2997 = 120;
                Gvar.var_2998 = 120;
            }
            if (Gvar.var_2989 == 9) {
                Gvar.var_2997 = 200;
                Gvar.var_2998 = 200;
            }
        }
        if (Gvar.var_2996 == 0) {
            Gvar.var_2997 = (Gvar.var_455 - Gvar.var_66 + 4) * 40;
            Gvar.var_2998 = (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10;
        }
        if (Gvar.var_2999 >= 1 && Gvar.var_2999 <= 12) {
            Gvar.var_2997 = (Gvar.var_3000 - Gvar.var_66 + 4) * 40;
            Gvar.var_2998 = (Gvar.var_3001 - Gvar.var_67 + 4) * 40 - Gvar.var_2999 * 40;
            Gvar.var_1416 = 80;
        }
        if (Gvar.var_2999 >= 13 && Gvar.var_2999 <= 24) {
            Gvar.var_2997 = (Gvar.var_3002 - Gvar.var_66 + 4) * 40;
            Gvar.var_2998 = (Gvar.var_3003 - 12 - Gvar.var_67 + 4) * 40 + (Gvar.var_2999 - 12) * 40;
            Gvar.var_1416 = 0;
        }
        if (Gvar.var_2988 >= 1) {
            if (Gvar.var_2989 == 4) {
                Gvar.var_2997 = (Gvar.var_455 - Gvar.var_66 + 4) * 40 - Gvar.var_2988 * 5;
                Gvar.var_2998 = (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10;
            }
            if (Gvar.var_2989 == 6) {
                Gvar.var_2997 = (Gvar.var_455 - Gvar.var_66 + 4) * 40 + Gvar.var_2988 * 5;
                Gvar.var_2998 = (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10;
            }
            if (Gvar.var_2989 == 2) {
                Gvar.var_2997 = (Gvar.var_455 - Gvar.var_66 + 4) * 40;
                Gvar.var_2998 = (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10 + Gvar.var_2988 * 5;
            }
            if (Gvar.var_2989 == 8) {
                Gvar.var_2997 = (Gvar.var_455 - Gvar.var_66 + 4) * 40;
                Gvar.var_2998 = (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10 - Gvar.var_2988 * 5;
            }
            if (Gvar.var_2989 == 1) {
                Gvar.var_2997 = (Gvar.var_455 - Gvar.var_66 + 4) * 40 - Gvar.var_2988 * 5;
                Gvar.var_2998 = (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10 + Gvar.var_2988 * 5;
            }
            if (Gvar.var_2989 == 3) {
                Gvar.var_2997 = (Gvar.var_455 - Gvar.var_66 + 4) * 40 + Gvar.var_2988 * 5;
                Gvar.var_2998 = (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10 + Gvar.var_2988 * 5;
            }
            if (Gvar.var_2989 == 7) {
                Gvar.var_2997 = (Gvar.var_455 - Gvar.var_66 + 4) * 40 - Gvar.var_2988 * 5;
                Gvar.var_2998 = (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10 - Gvar.var_2988 * 5;
            }
            if (Gvar.var_2989 == 9) {
                Gvar.var_2997 = (Gvar.var_455 - Gvar.var_66 + 4) * 40 + Gvar.var_2988 * 5;
                Gvar.var_2998 = (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10 - Gvar.var_2988 * 5;
            }
        }
        if (Gvar.var_1896 == 1) {
            if (Gvar.var_2989 == 4) {
                Gvar.var_2997 = (Gvar.var_455 - Gvar.var_66 + 4) * 40 + 20;
                Gvar.var_2998 = (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10;
            }
            if (Gvar.var_2989 == 6) {
                Gvar.var_2997 = (Gvar.var_455 - Gvar.var_66 + 4) * 40 - 20;
                Gvar.var_2998 = (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10;
            }
            if (Gvar.var_2989 == 2) {
                Gvar.var_2997 = (Gvar.var_455 - Gvar.var_66 + 4) * 40;
                Gvar.var_2998 = (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10 - 20;
            }
            if (Gvar.var_2989 == 8) {
                Gvar.var_2997 = (Gvar.var_455 - Gvar.var_66 + 4) * 40;
                Gvar.var_2998 = (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10 + 20;
            }
            if (Gvar.var_2989 == 1) {
                Gvar.var_2997 = (Gvar.var_455 - Gvar.var_66 + 4) * 40 + 20;
                Gvar.var_2998 = (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10 - 20;
            }
            if (Gvar.var_2989 == 3) {
                Gvar.var_2997 = (Gvar.var_455 - Gvar.var_66 + 4) * 40 - 20;
                Gvar.var_2998 = (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10 - 20;
            }
            if (Gvar.var_2989 == 7) {
                Gvar.var_2997 = (Gvar.var_455 - Gvar.var_66 + 4) * 40 + 20;
                Gvar.var_2998 = (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10 + 20;
            }
            if (Gvar.var_2989 == 9) {
                Gvar.var_2997 = (Gvar.var_455 - Gvar.var_66 + 4) * 40 - 20;
                Gvar.var_2998 = (Gvar.var_456 - Gvar.var_67 + 4) * 40 - 10 + 20;
            }
        }
        Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
        Adap.pos(Gvar.var_2997, Gvar.var_2998);
        await Func.func649();
        return;
}

export {func648}
