import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func384(this: any) {
        Adap.dbgprt(384);
        if (Gvar.var_336 >= 200) {
            return;
        }
        if (Gvar.var_452 == 1 || Gvar.var_1728 == 1) {
            await Func.func724();
            Gvar.var_866 = Gvar.var_854;
        }
        if (Gvar.var_452 == 0 && Gvar.var_1728 == 0) {
            Gvar.var_866 = 1;
        }
        let loopCount = 1;
        if (Gvar.var_452 == 0 && Gvar.var_1728 == 0) {
            loopCount = Gvar.var_336;
        }
        for (let cnt1 = 0; cnt1 < loopCount; ++cnt1) {
            if (Gvar.var_1729 == 0) {
                if (Gvar.var_453 == 0 && Gvar.var_1728 == 0) {
                    for (let cnt4 = 0; true; ++cnt4) {
                        Gvar.var_1550 = Adap.rnd(Gvar.var_33);
                        Gvar.var_230 = Adap.rnd(Gvar.var_34);
                        if (Gvar.var_71[Gvar.var_1550][Gvar.var_230] != 0 && Gvar.var_71[Gvar.var_1550][Gvar.var_230] <= 12 && Gvar.var_77[Gvar.var_1550][Gvar.var_230] == 0 && Gvar.var_73[Gvar.var_1550][Gvar.var_230] == 0 && Gvar.var_72[Gvar.var_1550][Gvar.var_230] == 0 && Gvar.var_80[Gvar.var_1550][Gvar.var_230] == 0) {
                            break;
                        }
                        if (Gvar.var_1142 == 1 && Gvar.var_71[Gvar.var_1550][Gvar.var_230] == 14 && Gvar.var_77[Gvar.var_1550][Gvar.var_230] == 0 && Gvar.var_73[Gvar.var_1550][Gvar.var_230] == 0 && Gvar.var_72[Gvar.var_1550][Gvar.var_230] == 0 && Gvar.var_80[Gvar.var_1550][Gvar.var_230] == 0) {
                            break;
                        }
                        // 幻覚の迷宮
                        if (Gvar.special_floor == 8 && Gvar.var_71[Gvar.var_1550][Gvar.var_230] == 14 && Gvar.var_77[Gvar.var_1550][Gvar.var_230] == 0 && Gvar.var_73[Gvar.var_1550][Gvar.var_230] == 0 && Gvar.var_80[Gvar.var_1550][Gvar.var_230] == 0) {
                            break;
                        }
                    }
                }
                if (Gvar.var_453 == 1 && Gvar.var_1728 == 0) {
                    Gvar.var_1550 = Gvar.var_447;
                    Gvar.var_230 = Gvar.var_449;
                    Gvar.var_80[Gvar.var_1550][Gvar.var_230] = 0;
                }
                if (Gvar.var_453 == 0 && Gvar.var_1728 == 1) {
                    Gvar.var_1730 = Adap.rnd(10);
                    Gvar.var_1731 = 0;
                    for (let cnt4 = 0; cnt4 < 500; ++cnt4) {
                        Gvar.var_1550 = Adap.rnd(Gvar.var_33);
                        Gvar.var_230 = Adap.rnd(Gvar.var_34);
                        if (Gvar.var_1730 <= 5 && Gvar.var_71[Gvar.var_1550][Gvar.var_230] == Gvar.var_204 && Gvar.var_77[Gvar.var_1550][Gvar.var_230] == 0 && Gvar.var_73[Gvar.var_1550][Gvar.var_230] == 0 && Gvar.var_80[Gvar.var_1550][Gvar.var_230] == 0) {
                            Gvar.var_1731 = 1;
                            break;
                        }
                        if (Gvar.var_1730 >= 6 && Gvar.var_71[Gvar.var_1550][Gvar.var_230] == Gvar.var_204 && Gvar.var_77[Gvar.var_1550][Gvar.var_230] == 0 && Gvar.var_73[Gvar.var_1550][Gvar.var_230] == 0 && Gvar.var_80[Gvar.var_1550][Gvar.var_230] == 0) {
                            Gvar.var_768 = 1;
                            await Func.func536();
                            Gvar.var_768 = 0;
                            break;
                        }
                    }
                    if (Gvar.var_1731 == 0) {
                        return;
                    }
                }
            }
            if (Gvar.var_1729 == 1) {
                Gvar.var_1550 = Gvar.var_1076;
                Gvar.var_230 = Gvar.var_1075;
            }
            if (Gvar.var_1732 >= 1) {
                for (let cnt3 = 0; cnt3 < 30; ++cnt3) {
                    Gvar.var_78[Gvar.var_866]["Var" + cnt3] = Gvar.var_991[1][Gvar.var_1732][cnt3];
                }
                Gvar.var_78[Gvar.var_866].Var1 = Gvar.var_1550;
                Gvar.var_78[Gvar.var_866].Var2 = Gvar.var_230;
                Gvar.var_78[Gvar.var_866].Var9 = Gvar.var_71[Gvar.var_1550][Gvar.var_230];
                Gvar.var_77[Gvar.var_1550][Gvar.var_230] = Gvar.var_866;
                Gvar.var_1733 = Gvar.var_78[Gvar.var_866].Var0;
                Gvar.var_862[Gvar.var_1733][0] = 1;
                return;
            }
            if (Gvar.var_1734 == 1) {
                if (Gvar.var_1093 == 0) {
                    Gvar.var_1735 = 1;
                }
                if (Gvar.var_1093 == 1) {
                    Gvar.var_1735 = 3;
                }
                if (Gvar.var_1093 == 2) {
                    Gvar.var_1735 = 5;
                }
                if (Gvar.var_1093 == 3) {
                    Gvar.var_1735 = 10;
                }
                // No = 1 なので、ホテルの外
                if (Gvar.dungeon_number == 1) {
                    Gvar.var_1093 = 4;
                }
                if (Gvar.var_1093 >= 4) {
                    Gvar.var_1736 = Adap.rnd(12);
                    // No = 1 なので、ホテルの外
                    if (Gvar.dungeon_number == 1) {
                        Gvar.var_1736 = Adap.rnd(11);
                    }
                    if (Gvar.var_1736 == 0) {
                        Gvar.var_1735 = 1;
                    }
                    if (Gvar.var_1736 == 1) {
                        Gvar.var_1735 = 1;
                    }
                    if (Gvar.var_1736 == 2) {
                        Gvar.var_1735 = 3;
                    }
                    if (Gvar.var_1736 == 3) {
                        Gvar.var_1735 = 3;
                    }
                    if (Gvar.var_1736 == 4) {
                        Gvar.var_1735 = 5;
                    }
                    if (Gvar.var_1736 == 5) {
                        Gvar.var_1735 = 5;
                    }
                    if (Gvar.var_1736 == 6) {
                        Gvar.var_1735 = 6;
                    }
                    if (Gvar.var_1736 == 7) {
                        Gvar.var_1735 = 6;
                    }
                    if (Gvar.var_1736 == 8) {
                        Gvar.var_1735 = 4;
                    }
                    if (Gvar.var_1736 == 9) {
                        Gvar.var_1735 = 4;
                    }
                    if (Gvar.var_1736 == 10) {
                        Gvar.var_1735 = 9;
                    }
                    if (Gvar.var_1736 == 11) {
                        Gvar.var_1735 = 10;
                    }
                }
            }
            if (Gvar.var_1734 == 0) {
                Gvar.var_1736 = Adap.rnd(100);
                if (Gvar.var_1736 >= 0 && Gvar.var_1736 < 22) {
                    Gvar.var_1735 = 0;
                }
                if (Gvar.var_1736 >= 22 && Gvar.var_1736 < 28) {
                    Gvar.var_1735 = 6;
                }
                if (Gvar.var_1736 >= 28 && Gvar.var_1736 < 41) {
                    Gvar.var_1735 = 1;
                }
                if (Gvar.var_1736 >= 41 && Gvar.var_1736 < 67) {
                    Gvar.var_1735 = 5;
                }
                if (Gvar.var_1736 >= 67 && Gvar.var_1736 < 80) {
                    Gvar.var_1735 = 3;
                }
                if (Gvar.var_1736 >= 80 && Gvar.var_1736 < 85) {
                    Gvar.var_1735 = 4;
                }
                if (Gvar.var_1736 >= 85 && Gvar.var_1736 < 94) {
                    Gvar.var_1735 = 9;
                }
                if (Gvar.var_1736 >= 94 && Gvar.var_1736 < 98) {
                    Gvar.var_1735 = 10;
                }
                if (Gvar.var_1736 >= 98 && Gvar.var_1736 < 100) {
                    Gvar.var_1735 = 0;
                }
                if (Gvar.equip_disc[393] == 1 && Gvar.var_1736 < 5) {
                    Gvar.var_1735 = 9;
                }
                if (Gvar.dungeon_number == 1 && Gvar.var_1735 == 10) {
                    Gvar.var_1736 = Adap.rnd(8);
                    if (Gvar.var_1736 == 0) {
                        Gvar.var_1735 = 0;
                    }
                    if (Gvar.var_1736 == 1) {
                        Gvar.var_1735 = 0;
                    }
                    if (Gvar.var_1736 == 2) {
                        Gvar.var_1735 = 0;
                    }
                    if (Gvar.var_1736 == 3) {
                        Gvar.var_1735 = 1;
                    }
                    if (Gvar.var_1736 == 4) {
                        Gvar.var_1735 = 3;
                    }
                    if (Gvar.var_1736 == 5) {
                        Gvar.var_1735 = 5;
                    }
                    if (Gvar.var_1736 == 6) {
                        Gvar.var_1735 = 4;
                    }
                    if (Gvar.var_1736 == 7) {
                        Gvar.var_1735 = 9;
                    }
                }
                if (Gvar.var_1737 == 1) {
                    Gvar.var_1735 = 9;
                }
                if (Gvar.var_1738 == 1) {
                    Gvar.var_1735 = 10;
                }
                if (Gvar.var_1739 == 1) {
                    Gvar.var_1735 = 10;
                }
                if (Gvar.var_1740 >= 1) {
                    Gvar.var_1735 = 9;
                }
                if (Gvar.var_1741 == 1) {
                    Gvar.var_1735 = 9;
                }
                if (Gvar.var_1742 == 1) {
                    Gvar.var_1735 = 9;
                }
                if (Gvar.var_1743 == 1) {
                    Gvar.var_1735 = 9;
                }
                if (Gvar.var_1744 == 1) {
                    Gvar.var_1735 = 10;
                }
                if (Gvar.var_1745 == 1) {
                    Gvar.var_1735 = 10;
                }
                if (Gvar.var_1746 == 1) { // 倒された後にNo = 399 G・E・レクイエムを落とすフラグがONの場合
                    Gvar.var_1735 = 1;
                }
                if (Gvar.var_1747 == 1) {
                    Gvar.var_1735 = 4;
                }
                if (Gvar.var_1748 == 1) {
                    Gvar.var_1735 = 5;
                }
                if (Gvar.var_1749 == 1) {
                    Gvar.var_1735 = 5;
                }
                if (Gvar.var_1750 == 1) { // 倒された後にNo = 393 ボヘミアンラプソディを落とすフラグがONの場合
                    Gvar.var_1735 = 1;
                }
                if (Gvar.var_1751 == 1) {
                    Gvar.var_1735 = 9;
                }
                if (Gvar.var_1752 == 1) {
                    Gvar.var_1735 = 9;
                }
                if (Gvar.var_1753 == 1) {
                    Gvar.var_1735 = 9;
                }
                if (Gvar.var_1754 == 1) {
                    Gvar.var_1735 = 9;
                }
                if (Gvar.var_1755 == 1) {
                    Gvar.var_1735 = 9;
                }
                if (Gvar.var_1756 == 1) {
                    Gvar.var_1735 = 9;
                }
                if (Gvar.var_1757 == 1) {
                    Gvar.var_1735 = 9;
                }
                if (Gvar.var_1758 == 1) {
                    Gvar.var_1735 = 9;
                }
                if (Gvar.dungeon_number == 99) {
                    Gvar.var_1735 = 9;
                }
                if (Gvar.var_1759 == 1) {
                    Gvar.var_1735 = 0;
                }
                if (Gvar.var_1760 >= 1) {
                    Gvar.var_1735 = 9;
                }
                if (Gvar.var_454 == 1) {
                    Gvar.var_1735 = 9;
                }
                if (Gvar.var_1761 >= 1) {
                    Gvar.var_1735 = 9;
                }
                if (Gvar.var_1762 >= 1) {
                    Gvar.var_1735 = 9;
                }
                if (Gvar.var_1763 == 1) {
                    Gvar.var_1764 = Adap.rnd(6);
                    if (Gvar.var_1764 == 0 || Gvar.var_1764 == 1 || Gvar.var_1764 == 2) {
                        Gvar.var_1735 = 5;
                    }
                    if (Gvar.var_1764 == 3 || Gvar.var_1764 == 4) {
                        Gvar.var_1735 = 3;
                    }
                    if (Gvar.var_1764 == 5) {
                        Gvar.var_1735 = 1;
                    }
                }
                if (Gvar.var_1765 == 1) {
                    Gvar.var_1735 = 1;
                }
                if (Gvar.var_1766 == 1) {
                    Gvar.var_1735 = 1;
                }
            }
            Gvar.var_77[Gvar.var_1550][Gvar.var_230] = Gvar.var_866;
            if (Gvar.var_1767 == 0) {
                await Func.func385(); // 各ダンジョンごとの出現アイテム&出現確率管理
            }
            Gvar.var_78[Gvar.var_866].Var1 = Gvar.var_1550;
            Gvar.var_78[Gvar.var_866].Var2 = Gvar.var_230;
            Gvar.var_78[Gvar.var_866].Var9 = Gvar.var_71[Gvar.var_1550][Gvar.var_230];
            if (Gvar.var_451 == 1) {
                Gvar.var_78[Gvar.var_866].Var10 = 1;
            }
            if (Gvar.dungeon_number != 5) {
                if (Gvar.var_452 == 0 && Gvar.current_floor >= 15 && Gvar.current_floor <= 18 && Gvar.var_1734 == 0 && Gvar.special_floor == 0) {
                    Gvar.var_1768 = Adap.rnd(5);
                    if (Gvar.var_1768 == 0) {
                        Gvar.var_78[Gvar.var_866].Var15 = 1;
                    }
                }
                if (Gvar.var_452 == 0 && Gvar.current_floor >= 25 && Gvar.current_floor <= 35 && Gvar.var_1734 == 0 && Gvar.special_floor == 0) {
                    Gvar.var_1768 = Adap.rnd(8);
                    if (Gvar.var_1768 == 0) {
                        Gvar.var_78[Gvar.var_866].Var15 = 1;
                    }
                }
            }
            // No = 5 なので、鉄獄(鉄の牢獄)
            if (Gvar.dungeon_number == 5) {
                if (Gvar.var_452 == 0 && Gvar.current_floor >= 6 && Gvar.current_floor <= 30 && Gvar.var_1734 == 0 && Gvar.special_floor == 0) {
                    Gvar.var_1768 = Adap.rnd(20);
                    if (Gvar.var_1768 == 0) {
                        Gvar.var_78[Gvar.var_866].Var15 = 1;
                    }
                }
            }
            if (Gvar.var_1734 == 1) {
                Gvar.var_78[Gvar.var_866].Var11 = 1;
                // No >= 2 なので、レクイエムの大迷宮、ディアボロの試練、一巡後の世界
                if (Gvar.dungeon_number >= 2 && Gvar.var_1727 == 0) {
                    Gvar.var_1768 = Adap.rnd(9);
                    // No = 2 なので、レクイエムの大迷宮
                    if (Gvar.dungeon_number == 2 && Gvar.current_floor < 10) {
                        Gvar.var_1768 = 1;
                    }
                    if (Gvar.var_1768 == 0) {
                        Gvar.var_78[Gvar.var_866].Var15 = 1;
                        Gvar.var_1727 = 1;
                    }
                }
            }
            if (Gvar.var_78[Gvar.var_866].Var0 >= 801 && Gvar.var_78[Gvar.var_866].Var0 <= 804 && Gvar.var_1767 == 0) {
                await Func.func390();
            }
            if (Gvar.var_1767 == 1) {
                Gvar.var_78[Gvar.var_866].Var0 = Gvar.var_1769;
                Gvar.var_78[Gvar.var_866].Var3 = 0;
                Gvar.var_78[Gvar.var_866].Var4 = 0;
                Gvar.var_78[Gvar.var_866].Var5 = 0;
                Gvar.var_78[Gvar.var_866].Var6 = 0;
                Gvar.var_78[Gvar.var_866].Var7 = 0;
                Gvar.var_78[Gvar.var_866].Var8 = 0;
                Gvar.var_78[Gvar.var_866].Var10 = 0;
                Gvar.var_78[Gvar.var_866].Var11 = 0;
                Gvar.var_78[Gvar.var_866].Var12 = 0;
                Gvar.var_78[Gvar.var_866].Var13 = 0;
                Gvar.var_78[Gvar.var_866].Var14 = 0;
                Gvar.var_78[Gvar.var_866].Var15 = 0;
                Gvar.var_78[Gvar.var_866].Var16 = 0;
                Gvar.var_78[Gvar.var_866].Var17 = 0;
                Gvar.var_78[Gvar.var_866].Var18 = 0;
                Gvar.var_78[Gvar.var_866].Var19 = 0;
                Gvar.var_78[Gvar.var_866].Var20 = 0;
                Gvar.var_78[Gvar.var_866].Var21 = 0;
                Gvar.var_78[Gvar.var_866].Var22 = 0;
                Gvar.var_78[Gvar.var_866].Var23 = 0;
                Gvar.var_78[Gvar.var_866].Var24 = 0;
                Gvar.var_78[Gvar.var_866].Var25 = 0;
                Gvar.var_78[Gvar.var_866].Var26 = 0;
                Gvar.var_78[Gvar.var_866].Var27 = 0;
                Gvar.var_78[Gvar.var_866].Var28 = 0;
                Gvar.var_78[Gvar.var_866].Var29 = 0;
                if (Gvar.var_78[Gvar.var_866].Var0 >= 100 && Gvar.var_78[Gvar.var_866].Var0 < 400) {
                    Gvar.var_78[Gvar.var_866].Var19 = 1;
                    Gvar.var_78[Gvar.var_866].Var20 = Gvar.var_78[Gvar.var_866].Var0;
                    Gvar.var_78[Gvar.var_866].Var5 = 2;
                }
                if (Gvar.var_78[Gvar.var_866].Var0 >= 400 && Gvar.var_78[Gvar.var_866].Var0 < 500) {
                    Gvar.var_78[Gvar.var_866].Var3 = 6;
                }
                if (Gvar.var_1770 >= 800 && Gvar.var_1770 < 900) {
                    await Func.func395();
                    Gvar.var_78[Gvar.var_866].Var6 = Gvar.var_858;
                    Gvar.var_78[Gvar.var_866].Var7 = 6;
                    Gvar.var_78[Gvar.var_866].Var8 = 0;
                }
                if (Gvar.var_78[Gvar.var_866].Var0 >= 400 && Gvar.var_78[Gvar.var_866].Var0 < 500) {
                    Gvar.var_1771 = Gvar.var_78[Gvar.var_866].Var0;
                    Gvar.var_862[Gvar.var_1771][0] = 1;
                }
                if (Gvar.var_78[Gvar.var_866].Var0 >= 600 && Gvar.var_78[Gvar.var_866].Var0 < 700) {
                    Gvar.var_1771 = Gvar.var_78[Gvar.var_866].Var0;
                    Gvar.var_862[Gvar.var_1771][0] = 1;
                }
                if (Gvar.var_78[Gvar.var_866].Var0 >= 750 && Gvar.var_78[Gvar.var_866].Var0 < 800) {
                    Gvar.var_1771 = Gvar.var_78[Gvar.var_866].Var0;
                    Gvar.var_862[Gvar.var_1771][0] = 1;
                }
                if (Gvar.var_78[Gvar.var_866].Var0 >= 900 && Gvar.var_78[Gvar.var_866].Var0 < 1000) {
                    Gvar.var_1771 = Gvar.var_78[Gvar.var_866].Var0;
                    Gvar.var_862[Gvar.var_1771][0] = 1;
                }
            }
            if (Gvar.var_452 == 0 && Gvar.var_1728 == 0) {
                Gvar.var_866 = Gvar.var_866 + 1;
            }
        }
        return;
}

export {func384}
