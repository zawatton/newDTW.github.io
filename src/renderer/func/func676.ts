import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func676(this: any) {
        Adap.dbgprt(676);
        Gvar.var_445 = 1;
        await Func.func405();
        Gvar.var_445 = 0;
        if (Gvar.var_446 == 0) {
            return;
        }
        Gvar.var_447 = Gvar.var_448;
        Gvar.var_449 = Gvar.var_450;
        Gvar.var_314 = Gvar.var_82[Gvar.var_347][Gvar.var_348];
        Gvar.enemy_list = Gvar.var_83[Gvar.var_314].Var0; // Gvar.var_83[Gvar.var_314].Var0 は enemy list
        await Func.func626(); // 敵リスト
        if (Gvar.var_83[Gvar.var_314].Var26 >= 1) {
            if (Gvar.var_83[Gvar.var_314].Var0 == 144) {
                await Func.func678();
                return;
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 116) {
                await Func.func678();
                return;
            }
            await Func.func677();
            return;
        }
        if (Gvar.equip_disc[305] == 1) {
            Gvar.var_1654 = Math.floor(Gvar.var_1654 / 2);
            if (Gvar.var_1654 <= 1) {
                Gvar.var_1654 = 1;
            }
        }
        if (Gvar.dungeon_number == 99) {
            Gvar.var_1654 = 99999;
        }
        Gvar.var_3084 = Adap.rnd(Gvar.var_1654);
        // Gvar.enemy_list == 120 承太郎
        if (Gvar.var_83[Gvar.var_314].Var0 == 120 && Gvar.special_floor == 99) {
            Gvar.var_3084 = 0;
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 32 && Gvar.special_floor == 3) { // 吉良屋敷
            Gvar.var_3084 = 0;
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 44 && Gvar.special_floor == 2) { // 杜王町埠頭
            Gvar.var_3084 = 0;
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 65 && Gvar.special_floor == 1) { // 虹村屋敷
            Gvar.var_3084 = 0;
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 113 || Gvar.var_83[Gvar.var_673].Var0 == 114) {
            if (Gvar.var_83[Gvar.var_402].Var0 == 37) {
                Gvar.var_3084 = 0;
            }
        }
        // No = 5 なので、鉄獄(鉄の牢獄)
        if (Gvar.dungeon_number == 5 && Gvar.var_83[Gvar.var_314].Var16 >= 1000) {
            Gvar.var_1765 = 1;
        }
        if (Gvar.var_3084 == 0 || Gvar.var_2262 == 1 || Gvar.var_2263 >= 1 || Gvar.var_1761 >= 1 || Gvar.var_3085 >= 1 || Gvar.var_1765 == 1) {
            Gvar.var_451 = 1;
            Gvar.var_452 = 1;
            Gvar.var_453 = 1;
            if (Gvar.var_2262 == 1) {
                Gvar.var_1763 = 1;
            }
            if (Gvar.var_2263 >= 1) {
                Gvar.var_1762 = Gvar.var_2263;
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 1) {
                Gvar.var_1752 = 1;
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 163) {
                Gvar.var_1754 = 1;
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 31 || Gvar.var_83[Gvar.var_314].Var0 == 44) {
                Gvar.var_1737 = 1;
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 18) {
                Gvar.var_1073 = Adap.rnd(2);
                if (Gvar.var_1073 == 0) {
                    Gvar.var_1753 = 1;
                }
                if (Gvar.var_1073 == 1) {
                    Gvar.var_1737 = 1;
                }
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 83) {
                Gvar.var_1073 = Adap.rnd(2);
                if (Gvar.var_1073 == 0) {
                    Gvar.var_1743 = 1;
                }
                if (Gvar.var_1073 == 1) {
                    Gvar.var_1740 = 1;
                    Gvar.var_1778 = 1;
                }
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 49) {
                Gvar.var_454 = 1;
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 20) {
                Gvar.var_1737 = 1;
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 143) { // No = 132 
                Gvar.var_1750 = 1; // 倒された後にNo = 393 ボヘミアンラプソディを落とすフラグON
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 132) { // No = 132 レクイエムジョルノ
                Gvar.var_1746 = 1; // 倒された後にNo = 399 G・E・レクイエムを落とすフラグ
            }
            // Gvar.enemy_list == 120 承太郎
            if (Gvar.var_83[Gvar.var_314].Var0 == 120 || Gvar.var_83[Gvar.var_314].Var0 == 128) {
                Gvar.var_1742 = 1;
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 144) {
                Gvar.var_1745 = 1;
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 19) {
                Gvar.var_1739 = 1;
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 96) {
                Gvar.var_1744 = 1;
            }
            if (Gvar.var_83[Gvar.var_673].Var0 == 113 || Gvar.var_83[Gvar.var_673].Var0 == 114) {
                if (Gvar.var_83[Gvar.var_402].Var0 == 37) {
                    Gvar.var_1073 = Adap.rnd(3);
                    if (Gvar.var_1073 == 0) {
                        Gvar.var_1760 = 1;
                    }
                    if (Gvar.var_1073 == 1) {
                        Gvar.var_1760 = 2;
                    }
                    if (Gvar.var_1073 == 2) {
                        Gvar.var_1760 = 3;
                    }
                }
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 97) {
                Gvar.var_1747 = 1;
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 58) {
                Gvar.var_1749 = 1;
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 117) {
                Gvar.var_1754 = 1;
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 39) {
                Gvar.var_1755 = 1;
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 168) {
                Gvar.var_1757 = 1;
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 32 && Gvar.special_floor == 3) { // 吉良屋敷
                Gvar.var_1737 = 1;
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 44 && Gvar.special_floor == 2) { // 杜王町埠頭
                Gvar.var_1737 = 1;
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 65 && Gvar.special_floor == 1) { // 虹村屋敷
                Gvar.var_1737 = 1;
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 32 && Gvar.special_floor == 0) {
                Gvar.var_1073 = Adap.rnd(2);
                if (Gvar.var_1073 == 0) {
                    Gvar.var_1758 = 1;
                }
            }
            await Func.func384();
            Gvar.var_1765 = 0;
            Gvar.var_1763 = 0;
            Gvar.var_1752 = 0;
            Gvar.var_1737 = 0;
            Gvar.var_1753 = 0;
            Gvar.var_1743 = 0;
            Gvar.var_454 = 0;
            Gvar.var_1739 = 0;
            Gvar.var_1738 = 0;
            Gvar.var_1741 = 0;
            Gvar.var_1746 = 0; // 倒された後にNo = 399 G・E・レクイエムを落とすフラグOFF
            Gvar.var_1742 = 0;
            Gvar.var_1745 = 0;
            Gvar.var_1744 = 0;
            Gvar.var_1760 = 0;
            Gvar.var_1747 = 0;
            Gvar.var_1749 = 0;
            Gvar.var_1750 = 0; // 倒された後にNo = 393 ボヘミアンラプソディを落とすフラグOFF
            Gvar.var_1754 = 0;
            Gvar.var_1778 = 0;
            Gvar.var_1740 = 0;
            Gvar.var_1755 = 0;
            Gvar.var_1757 = 0;
            Gvar.var_1762 = 0;
            Gvar.var_2263 = 0;
            Gvar.var_1761 = 0;
            Gvar.var_3085 = 0;
            Gvar.var_1758 = 0;
            Gvar.var_451 = 0;
            Gvar.var_452 = 0;
            Gvar.var_453 = 0;
        }
        return;
}

export {func676}
