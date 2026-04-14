/**
 * func359 — fun359 敵図鑑の並び処理
 *
 * (org原典: newDTW_func3)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func359(this: any) {
        Adap.dbgprt(359);
        Gvar.var_1616 = Adap.dim(300);
        Gvar.var_1614 = 0;
        Gvar.var_1617 = 1;
        Gvar.var_1618 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_1038; ++cnt1) {
            Gvar.enemy_list = Gvar.var_989[Gvar.var_1618];
            await Func.func626();
            if (Gvar.var_1613 == 1 && Gvar.var_1619 >= 100 && Gvar.var_1619 < 200) {
                Gvar.var_1616[Gvar.var_1617] = Gvar.var_989[Gvar.var_1618];
                Gvar.var_1614++;
                Gvar.var_1617++;
            }
            if (Gvar.var_1613 == 2 && Gvar.var_1619 >= 200 && Gvar.var_1619 < 300) {
                Gvar.var_1616[Gvar.var_1617] = Gvar.var_989[Gvar.var_1618];
                Gvar.var_1614++;
                Gvar.var_1617++;
            }
            if (Gvar.var_1613 == 3 && Gvar.var_1619 >= 300 && Gvar.var_1619 < 400) {
                Gvar.var_1616[Gvar.var_1617] = Gvar.var_989[Gvar.var_1618];
                Gvar.var_1614++;
                Gvar.var_1617++;
            }
            if (Gvar.var_1613 == 4 && Gvar.var_1619 >= 400 && Gvar.var_1619 < 500) {
                Gvar.var_1616[Gvar.var_1617] = Gvar.var_989[Gvar.var_1618];
                Gvar.var_1614++;
                Gvar.var_1617++;
            }
            if (Gvar.var_1613 == 5 && Gvar.var_1619 >= 500 && Gvar.var_1619 < 600) {
                Gvar.var_1616[Gvar.var_1617] = Gvar.var_989[Gvar.var_1618];
                Gvar.var_1614++;
                Gvar.var_1617++;
            }
            if (Gvar.var_1613 == 6 && Gvar.var_1619 >= 600 && Gvar.var_1619 < 700) {
                Gvar.var_1616[Gvar.var_1617] = Gvar.var_989[Gvar.var_1618];
                Gvar.var_1614++;
                Gvar.var_1617++;
            }
            if (Gvar.var_1613 == 7 && Gvar.var_1619 >= 800 && Gvar.var_1619 < 900) {
                Gvar.var_1616[Gvar.var_1617] = Gvar.var_989[Gvar.var_1618];
                Gvar.var_1614++;
                Gvar.var_1617++;
            }
            Gvar.var_1618++;
        }
        if (Gvar.var_1614 == 0) {
            return;
        }
        if (Gvar.var_1614 >= 2) {
            Gvar.var_1620 = Gvar.var_1614;
            Gvar.var_1621 = Gvar.var_1614 - 1;
            Gvar.var_1622 = 0;
            for (let cnt2 = 0; cnt2 < Gvar.var_1614; ++cnt2) {
                Gvar.var_1620 = Gvar.var_1614;
                Gvar.var_1621 = Gvar.var_1614 - 1;
                for (let cnt3 = 0; cnt3 < Gvar.var_1614; ++cnt3) {
                    Gvar.var_1623 = 0;
                    Gvar.enemy_list = Gvar.var_1616[Gvar.var_1620];
                    await Func.func626();
                    Gvar.var_1624 = Gvar.var_1619;
                    Gvar.enemy_list = Gvar.var_1616[Gvar.var_1621];
                    await Func.func626();
                    Gvar.var_1625 = Gvar.var_1619;
                    if (Gvar.var_1624 < Gvar.var_1625) {
                        Gvar.var_1626 = Gvar.var_1616[Gvar.var_1620];
                        Gvar.var_1616[Gvar.var_1620] = Gvar.var_1616[Gvar.var_1621];
                        Gvar.var_1616[Gvar.var_1621] = Gvar.var_1626;
                    }
                    Gvar.var_1620 = Gvar.var_1620 - 1;
                    Gvar.var_1621 = Gvar.var_1621 - 1;
                    if (Gvar.var_1621 <= 0 || Gvar.var_1620 <= 0) {
                        break;
                    }
                }
                Gvar.var_1622++;
                if (Gvar.var_1622 > Gvar.var_1614) {
                    break;
                }
            }
        }
        Gvar.var_1607 = 1;
        Gvar.var_1608 = 1;
        await Func.func365();
        return;
}

export {func359}
