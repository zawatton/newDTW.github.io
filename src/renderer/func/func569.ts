/**
 * func569 — func569 不明
 *
 * (org原典: newDTW_func5)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func569(this: any) {
        Adap.dbgprt(569);
        if (Gvar.var_83[Gvar.var_2611].Var9 == 1) {
            return;
        }
        if (Gvar.var_83[Gvar.var_2611].Var18 >= 1) {
            return;
        }
        Gvar.var_423 = Gvar.var_83[Gvar.var_2611].Var1;
        Gvar.var_424 = Gvar.var_83[Gvar.var_2611].Var2;
        Gvar.var_2612 = Gvar.var_83[Gvar.var_2611].Var1;
        Gvar.var_2613 = Gvar.var_83[Gvar.var_2611].Var2;
        Gvar.var_2614 = Gvar.var_82[Gvar.var_423][Gvar.var_424];
        Gvar.var_2615 = Gvar.var_83[Gvar.var_2611].Var5;
        Gvar.var_610 = 0;
        Gvar.var_2616 = 0;
        Gvar.var_2617 = 0;
        Gvar.var_2618 = 0;
        if (Gvar.var_83[Gvar.var_2611].Var28 >= 1) {
            Gvar.var_2616 = 1;
            Gvar.var_83[Gvar.var_2611].Var28 = Gvar.var_83[Gvar.var_2611].Var28 - 1;
        }
        if (Gvar.var_83[Gvar.var_2611].Var9 == 1) {
            Gvar.var_2616 = 1;
        }
        if (Gvar.var_83[Gvar.var_2611].Var13 >= 1) {
            Gvar.var_2616 = 1;
        }
        if (Gvar.var_83[Gvar.var_2611].Var18 >= 1) {
            Gvar.var_2616 = 1;
        }
        if (Gvar.var_83[Gvar.var_2611].Var31 == 4 && Gvar.var_313 == Gvar.var_2611) {
            Gvar.var_313 = 0;
            Gvar.var_2616 = 1;
        }
        if (Gvar.var_83[Gvar.var_2611].Var31 == 5 && Gvar.var_313 == Gvar.var_2611) {
            Gvar.var_313 = 0;
            Gvar.var_2616 = 1;
        }
        // No = 61 ヨーヨーマッ
        if (Gvar.var_83[Gvar.var_2611].Var0 == 61 && Gvar.var_313 == Gvar.var_2611) {
            Gvar.var_313 = 0;
            Gvar.var_2616 = 1;
        }
        if (Gvar.var_83[Gvar.var_2611].Var0 == 116 && Gvar.var_313 == Gvar.var_2611) {
            Gvar.var_313 = 0;
            Gvar.var_2616 = 1;
        }
        if (Gvar.var_83[Gvar.var_2611].Var20 == 2 && Gvar.var_313 == Gvar.var_2611) {
            Gvar.var_313 = 0;
            Gvar.var_2616 = 1;
        }
        if (Gvar.var_83[Gvar.var_2611].Var14 == 1 && Gvar.var_83[Gvar.var_2611].Var15 == 0) {
            Gvar.var_2616 = 1;
        }
        if (Gvar.var_157 == 1 && Gvar.var_83[Gvar.var_2611].Var15 == 0) {
            if (Gvar.var_83[Gvar.var_2611].Var0 != 10) {
                Gvar.var_2616 = 1;
            }
            if (Gvar.var_83[Gvar.var_2611].Var0 == 10 && Gvar.var_83[Gvar.var_2611].Var20 != 0) {
                Gvar.var_2616 = 1;
            }
        }
        if (Gvar.var_82[Gvar.var_423][Gvar.var_424] == 0) {
            Gvar.var_2616 = 1;
        }
        Gvar.var_2619 = Gvar.var_423;
        Gvar.var_2620 = Gvar.var_424;
        Gvar.var_425 = Gvar.var_423 - 1;
        Gvar.var_426 = Gvar.var_423 + 1;
        Gvar.var_427 = Gvar.var_424 + 1;
        Gvar.var_428 = Gvar.var_424 - 1;
        if (Gvar.var_425 < 5) {
            Gvar.var_425 = 5;
        }
        if (Gvar.var_428 < 5) {
            Gvar.var_428 = 5;
        }
        if (Gvar.var_426 > Gvar.var_33) {
            Gvar.var_426 = Gvar.var_33;
        }
        if (Gvar.var_427 > Gvar.var_34) {
            Gvar.var_427 = Gvar.var_34;
        }
        Gvar.var_2621 = Gvar.var_66 - 5;
        Gvar.var_2622 = Gvar.var_66 + 5;
        Gvar.var_2623 = Gvar.var_67 + 5;
        Gvar.var_2624 = Gvar.var_67 - 5;
        if (Gvar.var_2621 < 5) {
            Gvar.var_2621 = 5;
        }
        if (Gvar.var_2624 < 5) {
            Gvar.var_2624 = 5;
        }
        if (Gvar.var_2622 > Gvar.var_33) {
            Gvar.var_2622 = Gvar.var_33;
        }
        if (Gvar.var_2623 > Gvar.var_34) {
            Gvar.var_2623 = Gvar.var_34;
        }
        if (Gvar.var_123 == 0 && Gvar.var_131 == 0 && Gvar.var_144 == 0) {
            if (Gvar.var_83[Gvar.var_2611].Var12 == 99 && Gvar.var_83[Gvar.var_2611].Var10 == Gvar.var_201 && Gvar.var_201 != Gvar.var_279 && Gvar.var_279 != 13 && Gvar.var_201 != 13) {
                if (Gvar.var_83[Gvar.var_2611].Var0 != 101 && Gvar.var_83[Gvar.var_2611].Var0 != 102 && Gvar.var_83[Gvar.var_2611].Var0 != 103 && Gvar.var_83[Gvar.var_2611].Var0 != 104) {
                    Gvar.var_2625 = Adap.rnd(3);
                    if (Gvar.equip_disc[350] == 1) {
                        Gvar.var_2625 = 0;
                    }
                    if (Gvar.equip_disc[107] == 1) {
                        Gvar.var_2625 = Adap.rnd(4);
                    }
                    if (Gvar.equip_disc[107] == 1 && Gvar.equip_disc[350] == 1) {
                        Gvar.var_2625 = Adap.rnd(3);
                    }
                    if (Gvar.var_96 >= 1 && Gvar.var_201 == Gvar.var_204) {
                        Gvar.var_2625 = 1;
                    }
                    // Ver0.1403にてコメントアウト。鉄獄にいるオーラ敵が起きないようにしたかった? エラーが出るのでコメントアウト
                    //if (Gvar.dungeon_number == 5 && Gvar.var_83[Gvar.var_314].Var16 >= 1000) {
                    //    Gvar.var_2625 = 1;
                    //}
                    if (Gvar.var_375 == 1) {
                        Gvar.var_2625 = 0;
                    }
                    if (Gvar.var_2625 == 0) {
                        Gvar.var_83[Gvar.var_2611].Var12 = 0;
                        Gvar.var_2616 = 1;
                        Gvar.var_83[Gvar.var_2611].Var4 = 2;
                    }
                }
            }
            if (Gvar.var_83[Gvar.var_2611].Var12 == 99 && Gvar.var_83[Gvar.var_2611].Var10 == Gvar.var_279 && Gvar.var_201 == 14 && Gvar.var_279 != 13 && Gvar.var_201 != 13) {
                if (Gvar.var_83[Gvar.var_2611].Var0 != 101 && Gvar.var_83[Gvar.var_2611].Var0 != 102 && Gvar.var_83[Gvar.var_2611].Var0 != 103 && Gvar.var_83[Gvar.var_2611].Var0 != 104) {
                    Gvar.var_2625 = Adap.rnd(3);
                    if (Gvar.equip_disc[350] == 1) {
                        Gvar.var_2625 = 0;
                    }
                    if (Gvar.equip_disc[107] == 1) {
                        Gvar.var_2625 = Adap.rnd(4);
                    }
                    if (Gvar.equip_disc[107] == 1 && Gvar.equip_disc[350] == 1) {
                        Gvar.var_2625 = Adap.rnd(3);
                    }
                    // No = 5 なので、鉄獄(鉄の牢獄)
                    if (Gvar.dungeon_number == 5 && Gvar.var_83[Gvar.var_314].Var16 >= 1000) {
                        Gvar.var_2625 = 1;
                    }
                    if (Gvar.var_2625 == 0) {
                        Gvar.var_83[Gvar.var_2611].Var12 = 0;
                        Gvar.var_2616 = 1;
                        Gvar.var_83[Gvar.var_2611].Var4 = 2;
                    }
                }
            }
            if (Gvar.var_83[Gvar.var_2611].Var12 == 99) {
                Gvar.var_2626 = 0;
                if (Gvar.var_82[Gvar.var_425][Gvar.var_424] != 0) {
                    Gvar.var_430 = Gvar.var_82[Gvar.var_425][Gvar.var_424];
                    if (Gvar.var_83[Gvar.var_430].Var31 == 5) {
                        Gvar.var_2626 = 1;
                    }
                }
                if (Gvar.var_82[Gvar.var_426][Gvar.var_424] != 0) {
                    Gvar.var_430 = Gvar.var_82[Gvar.var_426][Gvar.var_424];
                    if (Gvar.var_83[Gvar.var_430].Var31 == 5) {
                        Gvar.var_2626 = 1;
                    }
                }
                if (Gvar.var_82[Gvar.var_423][Gvar.var_427] != 0) {
                    Gvar.var_430 = Gvar.var_82[Gvar.var_423][Gvar.var_427];
                    if (Gvar.var_83[Gvar.var_430].Var31 == 5) {
                        Gvar.var_2626 = 1;
                    }
                }
                if (Gvar.var_82[Gvar.var_423][Gvar.var_428] != 0) {
                    Gvar.var_430 = Gvar.var_82[Gvar.var_423][Gvar.var_428];
                    if (Gvar.var_83[Gvar.var_430].Var31 == 5) {
                        Gvar.var_2626 = 1;
                    }
                }
                if (Gvar.var_82[Gvar.var_425][Gvar.var_427] != 0) {
                    Gvar.var_430 = Gvar.var_82[Gvar.var_425][Gvar.var_427];
                    if (Gvar.var_83[Gvar.var_430].Var31 == 5) {
                        Gvar.var_2626 = 1;
                    }
                }
                if (Gvar.var_82[Gvar.var_426][Gvar.var_427] != 0) {
                    Gvar.var_430 = Gvar.var_82[Gvar.var_426][Gvar.var_427];
                    if (Gvar.var_83[Gvar.var_430].Var31 == 5) {
                        Gvar.var_2626 = 1;
                    }
                }
                if (Gvar.var_82[Gvar.var_425][Gvar.var_428] != 0) {
                    Gvar.var_430 = Gvar.var_82[Gvar.var_425][Gvar.var_428];
                    if (Gvar.var_83[Gvar.var_430].Var31 == 5) {
                        Gvar.var_2626 = 1;
                    }
                }
                if (Gvar.var_82[Gvar.var_426][Gvar.var_428] != 0) {
                    Gvar.var_430 = Gvar.var_82[Gvar.var_426][Gvar.var_428];
                    if (Gvar.var_83[Gvar.var_430].Var31 == 5) {
                        Gvar.var_2626 = 1;
                    }
                }
                if (Gvar.var_65[Gvar.var_425][Gvar.var_424] == 1 || Gvar.var_65[Gvar.var_426][Gvar.var_424] == 1 || Gvar.var_65[Gvar.var_423][Gvar.var_427] == 1 || Gvar.var_65[Gvar.var_423][Gvar.var_428] == 1 || Gvar.var_65[Gvar.var_425][Gvar.var_427] == 1 || Gvar.var_65[Gvar.var_425][Gvar.var_428] == 1 || Gvar.var_65[Gvar.var_426][Gvar.var_427] == 1 || Gvar.var_65[Gvar.var_426][Gvar.var_428] == 1) {
                    Gvar.var_2626 = 1;
                }
                if (Gvar.var_83[Gvar.var_2611].Var0 == 101 || Gvar.var_83[Gvar.var_2611].Var0 == 102 || Gvar.var_83[Gvar.var_2611].Var0 == 103 || Gvar.var_83[Gvar.var_2611].Var0 == 104) {
                    Gvar.var_2626 = 0;
                }
                if (Gvar.var_2626 == 1) {
                    Gvar.var_2625 = Adap.rnd(2);
                    if (Gvar.equip_disc[350] == 1) {
                        Gvar.var_2625 = 0;
                    }
                    if (Gvar.equip_disc[107] == 1) {
                        Gvar.var_2625 = Adap.rnd(4);
                    }
                    if (Gvar.equip_disc[107] == 1 && Gvar.equip_disc[350] == 1) {
                        Gvar.var_2625 = Adap.rnd(2);
                    }
                    if (Gvar.var_96 >= 1 && Gvar.var_201 == Gvar.var_204) {
                        Gvar.var_2625 = 1;
                    }
                    if (Gvar.var_2625 == 0) {
                        Gvar.var_83[Gvar.var_2611].Var12 = 0;
                        Gvar.var_2616 = 1;
                        Gvar.var_83[Gvar.var_2611].Var4 = 2;
                    }
                }
                if (Gvar.var_83[Gvar.var_2611].Var0 == 101 && Gvar.var_83[Gvar.var_2611].Var12 == 99) {
                    if (Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0 || Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0 || Gvar.var_82[Gvar.var_426][Gvar.var_427] == 0) {
                        Gvar.var_83[Gvar.var_2611].Var12 = 0;
                    }
                    if (Gvar.var_82[Gvar.var_426][Gvar.var_424] != 0) {
                        Gvar.var_2627 = Gvar.var_82[Gvar.var_426][Gvar.var_424];
                        if (Gvar.var_83[Gvar.var_2627].Var0 != 102 || Gvar.var_83[Gvar.var_2627].Var12 == 0) {
                            Gvar.var_83[Gvar.var_2611].Var12 = 0;
                        }
                    }
                    if (Gvar.var_82[Gvar.var_423][Gvar.var_427] != 0) {
                        Gvar.var_2627 = Gvar.var_82[Gvar.var_423][Gvar.var_427];
                        if (Gvar.var_83[Gvar.var_2627].Var0 != 103 || Gvar.var_83[Gvar.var_2627].Var12 == 0) {
                            Gvar.var_83[Gvar.var_2611].Var12 = 0;
                        }
                    }
                    if (Gvar.var_82[Gvar.var_426][Gvar.var_427] != 0) {
                        Gvar.var_2627 = Gvar.var_82[Gvar.var_426][Gvar.var_427];
                        if (Gvar.var_83[Gvar.var_2627].Var0 != 104 || Gvar.var_83[Gvar.var_2627].Var12 == 0) {
                            Gvar.var_83[Gvar.var_2611].Var12 = 0;
                        }
                    }
                }
                if (Gvar.var_83[Gvar.var_2611].Var0 == 102 && Gvar.var_83[Gvar.var_2611].Var12 == 99) {
                    if (Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0 || Gvar.var_82[Gvar.var_425][Gvar.var_427] == 0 || Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0) {
                        Gvar.var_83[Gvar.var_2611].Var12 = 0;
                    }
                    if (Gvar.var_82[Gvar.var_425][Gvar.var_424] != 0) {
                        Gvar.var_2627 = Gvar.var_82[Gvar.var_425][Gvar.var_424];
                        if (Gvar.var_83[Gvar.var_2627].Var0 != 101 || Gvar.var_83[Gvar.var_2627].Var12 == 0) {
                            Gvar.var_83[Gvar.var_2611].Var12 = 0;
                        }
                    }
                    if (Gvar.var_82[Gvar.var_425][Gvar.var_427] != 0) {
                        Gvar.var_2627 = Gvar.var_82[Gvar.var_425][Gvar.var_427];
                        if (Gvar.var_83[Gvar.var_2627].Var0 != 103 || Gvar.var_83[Gvar.var_2627].Var12 == 0) {
                            Gvar.var_83[Gvar.var_2611].Var12 = 0;
                        }
                    }
                    if (Gvar.var_82[Gvar.var_423][Gvar.var_427] != 0) {
                        Gvar.var_2627 = Gvar.var_82[Gvar.var_423][Gvar.var_427];
                        if (Gvar.var_83[Gvar.var_2627].Var0 != 104 || Gvar.var_83[Gvar.var_2627].Var12 == 0) {
                            Gvar.var_83[Gvar.var_2611].Var12 = 0;
                        }
                    }
                }
                if (Gvar.var_83[Gvar.var_2611].Var0 == 103 && Gvar.var_83[Gvar.var_2611].Var12 == 99) {
                    if (Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0 || Gvar.var_82[Gvar.var_426][Gvar.var_428] == 0 || Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0) {
                        Gvar.var_83[Gvar.var_2611].Var12 = 0;
                    }
                    if (Gvar.var_82[Gvar.var_423][Gvar.var_428] != 0) {
                        Gvar.var_2627 = Gvar.var_82[Gvar.var_423][Gvar.var_428];
                        if (Gvar.var_83[Gvar.var_2627].Var0 != 101 || Gvar.var_83[Gvar.var_2627].Var12 == 0) {
                            Gvar.var_83[Gvar.var_2611].Var12 = 0;
                        }
                    }
                    if (Gvar.var_82[Gvar.var_426][Gvar.var_428] != 0) {
                        Gvar.var_2627 = Gvar.var_82[Gvar.var_426][Gvar.var_428];
                        if (Gvar.var_83[Gvar.var_2627].Var0 != 102 || Gvar.var_83[Gvar.var_2627].Var12 == 0) {
                            Gvar.var_83[Gvar.var_2611].Var12 = 0;
                        }
                    }
                    if (Gvar.var_82[Gvar.var_426][Gvar.var_424] != 0) {
                        Gvar.var_2627 = Gvar.var_82[Gvar.var_426][Gvar.var_424];
                        if (Gvar.var_83[Gvar.var_2627].Var0 != 104 || Gvar.var_83[Gvar.var_2627].Var12 == 0) {
                            Gvar.var_83[Gvar.var_2611].Var12 = 0;
                        }
                    }
                }
                if (Gvar.var_83[Gvar.var_2611].Var0 == 104 && Gvar.var_83[Gvar.var_2611].Var12 == 99) {
                    if (Gvar.var_82[Gvar.var_425][Gvar.var_428] == 0 || Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0 || Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0) {
                        Gvar.var_83[Gvar.var_2611].Var12 = 0;
                    }
                    if (Gvar.var_82[Gvar.var_425][Gvar.var_428] != 0) {
                        Gvar.var_2627 = Gvar.var_82[Gvar.var_425][Gvar.var_428];
                        if (Gvar.var_83[Gvar.var_2627].Var0 != 101 || Gvar.var_83[Gvar.var_2627].Var12 == 0) {
                            Gvar.var_83[Gvar.var_2611].Var12 = 0;
                        }
                    }
                    if (Gvar.var_82[Gvar.var_423][Gvar.var_428] != 0) {
                        Gvar.var_2627 = Gvar.var_82[Gvar.var_423][Gvar.var_428];
                        if (Gvar.var_83[Gvar.var_2627].Var0 != 102 || Gvar.var_83[Gvar.var_2627].Var12 == 0) {
                            Gvar.var_83[Gvar.var_2611].Var12 = 0;
                        }
                    }
                    if (Gvar.var_82[Gvar.var_425][Gvar.var_424] != 0) {
                        Gvar.var_2627 = Gvar.var_82[Gvar.var_425][Gvar.var_424];
                        if (Gvar.var_83[Gvar.var_2627].Var0 != 103 || Gvar.var_83[Gvar.var_2627].Var12 == 0) {
                            Gvar.var_83[Gvar.var_2611].Var12 = 0;
                        }
                    }
                }
            }
        }
        if (Gvar.var_83[Gvar.var_2611].Var12 >= 1) {
            Gvar.var_2616 = 1;
        }
        if (Gvar.var_83[Gvar.var_2611].Var12 == 0 && Gvar.var_83[Gvar.var_2611].Var13 == 0 && Gvar.var_83[Gvar.var_2611].Var17 == 0 && Gvar.var_83[Gvar.var_2611].Var27 == 0 && Gvar.var_83[Gvar.var_2611].Var31 != 4 && Gvar.var_83[Gvar.var_2611].Var23 == 0 && Gvar.var_123 == 0 && Gvar.var_131 == 0 && Gvar.var_144 == 0 && Gvar.var_218 == 0) {
            Gvar.var_2628 = 0;
            Gvar.var_2629 = Gvar.var_66;
            Gvar.var_2630 = Gvar.var_67;
            Gvar.var_2631 = Gvar.var_66 - 1;
            if (Gvar.var_2631 < 5) {
                Gvar.var_2631 = 5;
            }
            Gvar.var_2632 = Gvar.var_66 + 1;
            if (Gvar.var_2632 > Gvar.var_33) {
                Gvar.var_2632 = Gvar.var_33;
            }
            Gvar.var_2633 = Gvar.var_67 + 1;
            if (Gvar.var_2633 > Gvar.var_34) {
                Gvar.var_2633 = Gvar.var_34;
            }
            Gvar.var_2634 = Gvar.var_67 - 1;
            if (Gvar.var_2634 < 5) {
                Gvar.var_2634 = 5;
            }
            Gvar.var_2635 = Gvar.var_66 - 2;
            if (Gvar.var_2635 < 5) {
                Gvar.var_2631 = 5;
            }
            Gvar.var_2636 = Gvar.var_66 + 2;
            if (Gvar.var_2636 > Gvar.var_33) {
                Gvar.var_2636 = Gvar.var_33;
            }
            Gvar.var_2637 = Gvar.var_67 + 2;
            if (Gvar.var_2637 > Gvar.var_34) {
                Gvar.var_2637 = Gvar.var_34;
            }
            Gvar.var_2638 = Gvar.var_67 - 2;
            if (Gvar.var_2638 < 5) {
                Gvar.var_2634 = 5;
            }
            if (Gvar.var_83[Gvar.var_2611].Var1 >= Gvar.var_2635 && Gvar.var_83[Gvar.var_2611].Var1 <= Gvar.var_2636 && Gvar.var_83[Gvar.var_2611].Var2 >= Gvar.var_2638 && Gvar.var_83[Gvar.var_2611].Var2 <= Gvar.var_2637) {
                if (Gvar.var_83[Gvar.var_2611].Var10 == 14 && Gvar.var_201 != 14) {
                    Gvar.var_83[Gvar.var_2611].Var4 = 3;
                }
                if (Gvar.var_83[Gvar.var_2611].Var10 == 14 && Gvar.var_201 == 14 && Gvar.var_83[Gvar.var_2611].Var33 != 5) {
                    if (Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] == Gvar.var_187) {
                        Gvar.var_83[Gvar.var_2611].Var4 = 2;
                        Gvar.var_2628 = 1;
                    }
                    if (Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] == Gvar.var_187) {
                        Gvar.var_83[Gvar.var_2611].Var4 = 2;
                        Gvar.var_2628 = 1;
                    }
                    if (Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] == Gvar.var_187) {
                        Gvar.var_83[Gvar.var_2611].Var4 = 2;
                        Gvar.var_2628 = 1;
                    }
                    if (Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] == Gvar.var_187) {
                        Gvar.var_83[Gvar.var_2611].Var4 = 2;
                        Gvar.var_2628 = 1;
                    }
                }
                if (Gvar.var_83[Gvar.var_2611].Var10 != 14 && Gvar.var_201 == 14 && Gvar.var_83[Gvar.var_2611].Var33 != 5) {
                    if (Gvar.var_71[Gvar.var_426][Gvar.var_424] == 0 && Gvar.var_66 > Gvar.var_83[Gvar.var_2611].Var1) {
                        Gvar.var_83[Gvar.var_2611].Var4 = 3;
                        Gvar.var_83[Gvar.var_2611].Var33 = 2;
                        Gvar.var_2628 = 1;
                    }
                    if (Gvar.var_71[Gvar.var_425][Gvar.var_424] == 0 && Gvar.var_66 < Gvar.var_83[Gvar.var_2611].Var1) {
                        Gvar.var_83[Gvar.var_2611].Var4 = 3;
                        Gvar.var_83[Gvar.var_2611].Var33 = 8;
                        Gvar.var_2628 = 1;
                    }
                    if (Gvar.var_71[Gvar.var_423][Gvar.var_428] == 0 && Gvar.var_67 < Gvar.var_83[Gvar.var_2611].Var2) {
                        Gvar.var_83[Gvar.var_2611].Var4 = 3;
                        Gvar.var_83[Gvar.var_2611].Var33 = 6;
                        Gvar.var_2628 = 1;
                    }
                    if (Gvar.var_71[Gvar.var_423][Gvar.var_427] == 0 && Gvar.var_67 > Gvar.var_83[Gvar.var_2611].Var2) {
                        Gvar.var_83[Gvar.var_2611].Var4 = 3;
                        Gvar.var_83[Gvar.var_2611].Var33 = 4;
                        Gvar.var_2628 = 1;
                    }
                    if (Gvar.var_66 == Gvar.var_83[Gvar.var_2611].Var1 || Gvar.var_67 == Gvar.var_83[Gvar.var_2611].Var2) {
                        Gvar.var_83[Gvar.var_2611].Var4 = 2;
                        Gvar.var_2628 = 1;
                    }
                }
                if (Gvar.var_83[Gvar.var_2611].Var1 >= Gvar.var_2631 && Gvar.var_83[Gvar.var_2611].Var1 <= Gvar.var_2632 && Gvar.var_83[Gvar.var_2611].Var2 >= Gvar.var_2634 && Gvar.var_83[Gvar.var_2611].Var2 <= Gvar.var_2633) {
                    Gvar.var_83[Gvar.var_2611].Var4 = 2;
                    Gvar.var_2628 = 1;
                }
            }
            if (Gvar.var_83[Gvar.var_2611].Var10 == 14 && Gvar.var_201 != 14) {
                if (Gvar.var_71[Gvar.var_425][Gvar.var_424] == Gvar.var_201) {
                    Gvar.var_83[Gvar.var_2611].Var4 = 2;
                    Gvar.var_83[Gvar.var_2611].Var33 = 2;
                    Gvar.var_2628 = 1;
                }
                if (Gvar.var_71[Gvar.var_426][Gvar.var_424] == Gvar.var_201) {
                    Gvar.var_83[Gvar.var_2611].Var4 = 2;
                    Gvar.var_83[Gvar.var_2611].Var33 = 8;
                    Gvar.var_2628 = 1;
                }
                if (Gvar.var_71[Gvar.var_423][Gvar.var_427] == Gvar.var_201) {
                    Gvar.var_83[Gvar.var_2611].Var4 = 2;
                    Gvar.var_83[Gvar.var_2611].Var33 = 6;
                    Gvar.var_2628 = 1;
                }
                if (Gvar.var_71[Gvar.var_423][Gvar.var_428] == Gvar.var_201) {
                    Gvar.var_83[Gvar.var_2611].Var4 = 2;
                    Gvar.var_83[Gvar.var_2611].Var33 = 4;
                    Gvar.var_2628 = 1;
                }
            }
            if (Gvar.var_83[Gvar.var_2611].Var10 != 14 && Gvar.var_201 == 14 && Gvar.var_2628 == 0 && Gvar.var_83[Gvar.var_2611].Var33 != 5) {
                if (Gvar.var_71[Gvar.var_2631][Gvar.var_2630] == Gvar.var_83[Gvar.var_2611].Var10) {
                    Gvar.var_83[Gvar.var_2611].Var4 = 3;
                    Gvar.var_83[Gvar.var_2611].Var33 = 2;
                    Gvar.var_2628 = 1;
                }
                if (Gvar.var_71[Gvar.var_2632][Gvar.var_2630] == Gvar.var_83[Gvar.var_2611].Var10) {
                    Gvar.var_83[Gvar.var_2611].Var4 = 3;
                    Gvar.var_83[Gvar.var_2611].Var33 = 8;
                    Gvar.var_2628 = 1;
                }
                if (Gvar.var_71[Gvar.var_2629][Gvar.var_2633] == Gvar.var_83[Gvar.var_2611].Var10) {
                    Gvar.var_83[Gvar.var_2611].Var4 = 3;
                    Gvar.var_83[Gvar.var_2611].Var33 = 6;
                    Gvar.var_2628 = 1;
                }
                if (Gvar.var_71[Gvar.var_2629][Gvar.var_2634] == Gvar.var_83[Gvar.var_2611].Var10) {
                    Gvar.var_83[Gvar.var_2611].Var4 = 3;
                    Gvar.var_83[Gvar.var_2611].Var33 = 4;
                    Gvar.var_2628 = 1;
                }
            }
            if (Gvar.var_83[Gvar.var_2611].Var10 == Gvar.var_201 && Gvar.var_201 != 14) {
                Gvar.var_83[Gvar.var_2611].Var4 = 2;
                Gvar.var_2628 = 1;
            }
            if (Gvar.var_83[Gvar.var_2611].Var0 == 111 || Gvar.var_83[Gvar.var_2611].Var0 == 43) {
                Gvar.var_83[Gvar.var_2611].Var38 = 0;
                Gvar.var_83[Gvar.var_2611].Var4 = 2;
                Gvar.var_2628 = 1;
            }
            if (Gvar.var_2628 == 0) {
                Gvar.var_83[Gvar.var_2611].Var4 = 3;
            }
        }
        // 敵の瞬間移動能力
        if (Gvar.var_83[Gvar.var_2611].Var20 == 0 && Gvar.var_83[Gvar.var_2611].Var12 == 0 && Gvar.var_83[Gvar.var_2611].Var13 == 0) {
            // Gvar.enemy_list = 3 タワーオブグレー、44 レッド・ホット・チリ・ペッパー、115 アクア・ネックレス、27 ゲブ神、18 ブラック・サバス、86 サンタナ
            if (Gvar.var_83[Gvar.var_2611].Var0 == 3 || Gvar.var_83[Gvar.var_2611].Var0 == 44 || Gvar.var_83[Gvar.var_2611].Var0 == 115 || Gvar.var_83[Gvar.var_2611].Var0 == 27 || Gvar.var_83[Gvar.var_2611].Var0 == 18 || Gvar.var_83[Gvar.var_2611].Var0 == 86) {
                if (Gvar.var_83[Gvar.var_2611].Var0 == 27) { // Gvar.enemy_list = 27 ゲブ神
                    Gvar.var_83[Gvar.var_2611].Var4 = 5;
                }
                if (Gvar.var_201 != 14 && Gvar.var_83[Gvar.var_2611].Var10 == Gvar.var_201) { // 部屋にいる時のみ発動
                    Gvar.var_2639 = Adap.rnd(3);
                    if (Gvar.var_83[Gvar.var_2611].Var0 == 3) { // Gvar.enemy_list = 3 タワーオブグレー
                        Gvar.var_2639 = Adap.rnd(2);
                    }
                    if (Gvar.var_83[Gvar.var_2611].Var0 == 86) { // Gvar.enemy_list = 86 サンタナ
                        Gvar.var_2639 = Adap.rnd(4);
                    }
                    if (Gvar.var_2639 == 0) {
                        Gvar.var_83[Gvar.var_2611].Var4 = 4;
                    }
                }
            }
            if (Gvar.var_83[Gvar.var_2611].Var0 == 46 || Gvar.var_83[Gvar.var_2611].Var0 == 30 || Gvar.var_83[Gvar.var_2611].Var0 == 65 || Gvar.var_83[Gvar.var_2611].Var0 == 84 || Gvar.var_83[Gvar.var_2611].Var0 == 124 || Gvar.var_83[Gvar.var_2611].Var0 == 145 || Gvar.var_83[Gvar.var_2611].Var0 == 143 || Gvar.var_83[Gvar.var_2611].Var0 == 135 || Gvar.var_83[Gvar.var_2611].Var0 == 155 || Gvar.var_83[Gvar.var_2611].Var0 == 151 || Gvar.var_83[Gvar.var_2611].Var0 == 166 || Gvar.var_83[Gvar.var_2611].Var0 == 172) {
                if (Gvar.var_423 >= Gvar.var_2621 && Gvar.var_423 <= Gvar.var_2622 && Gvar.var_424 >= Gvar.var_2624 && Gvar.var_424 <= Gvar.var_2623) {
                    Gvar.var_2640 = Gvar.var_66 - 3;
                    if (Gvar.var_2640 < 0) {
                        Gvar.var_2640 = 0;
                    }
                    Gvar.var_2641 = Gvar.var_66 + 3;
                    if (Gvar.var_2641 > Gvar.var_33) {
                        Gvar.var_2641 = Gvar.var_33;
                    }
                    Gvar.var_2642 = Gvar.var_67 + 3;
                    if (Gvar.var_2642 > Gvar.var_34) {
                        Gvar.var_2642 = Gvar.var_34;
                    }
                    Gvar.var_2643 = Gvar.var_67 - 3;
                    if (Gvar.var_2643 < 0) {
                        Gvar.var_2643 = 0;
                    }
                    Gvar.var_83[Gvar.var_2611].Var4 = 6;
                    if (Gvar.var_423 < Gvar.var_2640 || Gvar.var_423 > Gvar.var_2641 || Gvar.var_424 < Gvar.var_2643 || Gvar.var_424 > Gvar.var_2642) {
                        Gvar.var_83[Gvar.var_2611].Var4 = 2;
                    }
                }
            }
            // Gvar.enemy_list == 48 エアロスミス、Gvar.enemy_list == 15 ペットショップ
            if (Gvar.var_83[Gvar.var_2611].Var0 == 48 || Gvar.var_83[Gvar.var_2611].Var0 == 15) {
                if (Gvar.var_201 != 14 && Gvar.var_83[Gvar.var_2611].Var10 != Gvar.var_201 && Gvar.var_83[Gvar.var_2611].Var20 == 0 && Gvar.var_83[Gvar.var_2611].Var12 == 0 && Gvar.var_83[Gvar.var_2611].Var13 == 0) {
                    Gvar.var_2639 = Adap.rnd(10);
                    if (Gvar.var_2639 == 0) {
                        Gvar.var_83[Gvar.var_2611].Var4 = 4;
                    }
                }
            }
            if (Gvar.var_83[Gvar.var_2611].Var0 == 118 && Gvar.dungeon_number != 0) {
                Gvar.var_83[Gvar.var_2611].Var4 = 7;
                if (Gvar.var_201 != 14 && Gvar.var_83[Gvar.var_2611].Var10 != Gvar.var_201 && Gvar.var_83[Gvar.var_2611].Var20 == 0 && Gvar.var_83[Gvar.var_2611].Var12 == 0 && Gvar.var_83[Gvar.var_2611].Var13 == 0) {
                    Gvar.var_2639 = Adap.rnd(5);
                    if (Gvar.var_2639 == 0) {
                        Gvar.var_83[Gvar.var_2611].Var4 = 4;
                    }
                }
                if (Gvar.var_83[Gvar.var_2611].Var10 == 14) {
                    if (Gvar.var_423 >= 52 || Gvar.var_423 <= 6 || Gvar.var_424 >= 35 || Gvar.var_424 <= 6) {
                        Gvar.var_83[Gvar.var_2611].Var4 = 4;
                    }
                }
            }
            if (Gvar.var_83[Gvar.var_2611].Var0 == 10 && Gvar.var_133 != 0) {
                Gvar.var_83[Gvar.var_2611].Var4 = 1;
            }
            // Gvar.enemy_list = 31 吉良の親父
            if (Gvar.var_83[Gvar.var_2611].Var0 == 31) {
                Gvar.var_83[Gvar.var_2611].Var4 = 1;
            }
            // Gvar.enemy_list = 43 セッコ
            if (Gvar.var_83[Gvar.var_2611].Var0 == 43) {
                Gvar.var_83[Gvar.var_2611].Var4 = 1;
            }
            // Gvar.enemy_list = 85 リゾット
            if (Gvar.var_83[Gvar.var_2611].Var0 == 85) {
                Gvar.var_83[Gvar.var_2611].Var4 = 1;
            }
            // Gvar.enemy_list = 153 マックイィーン
            if (Gvar.var_83[Gvar.var_2611].Var0 == 153) {
                Gvar.var_83[Gvar.var_2611].Var4 = 1;
            }
            // Gvar.enemy_list = 99 マンハッタントランスファー
            if (Gvar.var_83[Gvar.var_2611].Var0 == 99) {
                Gvar.var_83[Gvar.var_2611].Var4 = 1;
            }
            // Gvar.enemy_list = 37 猫
            if (Gvar.var_83[Gvar.var_2611].Var0 == 37) {
                Gvar.var_83[Gvar.var_2611].Var4 = 1;
            }
            // Gvar.enemy_list = 147 ジョセフ(4部)
            if (Gvar.var_83[Gvar.var_2611].Var0 == 147) {
                Gvar.var_83[Gvar.var_2611].Var4 = 1;
            }
            // Gvar.enemy_list = 149 不明
            if (Gvar.var_83[Gvar.var_2611].Var0 == 149) {
                Gvar.var_83[Gvar.var_2611].Var4 = 1;
            }
            // Gvar.enemy_list = 170 カタツムリ
            if (Gvar.var_83[Gvar.var_2611].Var0 == 170) {
                Gvar.var_83[Gvar.var_2611].Var4 = 1;
            }
            // Gvar.enemy_list = 109 ワムウ
            if (Gvar.var_83[Gvar.var_2611].Var0 == 109 && Gvar.var_83[Gvar.var_2611].Var30 == 1) {
                Gvar.var_83[Gvar.var_2611].Var4 = 1;
            }
        }
        // Gvar.enemy_list = 36 スピードワゴン
        if (Gvar.var_83[Gvar.var_2611].Var0 == 36) {
            Gvar.var_83[Gvar.var_2611].Var4 = 3;
            // No = 0 なので、拠点(ホテル、亀、)
            if (Gvar.dungeon_number == 0) {
                Gvar.var_83[Gvar.var_2611].Var4 = 0;
            }
        }
        // Gvar.enemy_list = 58 ボインゴ
        if (Gvar.var_83[Gvar.var_2611].Var0 == 58) {
            Gvar.var_83[Gvar.var_2611].Var4 = 3;
            // No = 0 なので、拠点(ホテル、亀、)
            if (Gvar.dungeon_number == 0) {
                Gvar.var_83[Gvar.var_2611].Var4 = 0;
            }
        }
        // Gvar.enemy_list = 57 SPW財団の男
        if (Gvar.var_83[Gvar.var_2611].Var0 == 57) {
            Gvar.var_83[Gvar.var_2611].Var4 = 3;
            // No = 0 なので、拠点(ホテル、亀、)
            if (Gvar.dungeon_number == 0) {
                Gvar.var_83[Gvar.var_2611].Var4 = 0;
            }
        }
        // Gvar.enemy_list = 74 サヴェジガーデン
        if (Gvar.var_83[Gvar.var_2611].Var0 == 74) {
            Gvar.var_83[Gvar.var_2611].Var4 = 3;
            // No = 0 なので、拠点(ホテル、亀、)
            if (Gvar.dungeon_number == 0) {
                Gvar.var_83[Gvar.var_2611].Var4 = 0;
            }
        }
        // Gvar.enemy_list = 81 アバッキオ
        if (Gvar.var_83[Gvar.var_2611].Var0 == 81) {
            Gvar.var_83[Gvar.var_2611].Var4 = 3;
            // No = 0 なので、拠点(ホテル、亀、)
            if (Gvar.dungeon_number == 0) {
                Gvar.var_83[Gvar.var_2611].Var4 = 0;
            }
        }
        // Gvar.enemy_list = 83 間田
        if (Gvar.var_83[Gvar.var_2611].Var0 == 83) {
            Gvar.var_83[Gvar.var_2611].Var4 = 3;
            // No = 0 なので、拠点(ホテル、亀、)
            if (Gvar.dungeon_number == 0) {
                Gvar.var_83[Gvar.var_2611].Var4 = 0;
            }
        }
        // Gvar.enemy_list = 105 ツェペリさん
        if (Gvar.var_83[Gvar.var_2611].Var0 == 105) {
            Gvar.var_83[Gvar.var_2611].Var4 = 3;
            // No = 0 なので、拠点(ホテル、亀、)
            if (Gvar.dungeon_number == 0) {
                Gvar.var_83[Gvar.var_2611].Var4 = 0;
            }
        }
        // Gvar.enemy_list = 106 ペッシ
        if (Gvar.var_83[Gvar.var_2611].Var0 == 106) {
            Gvar.var_83[Gvar.var_2611].Var4 = 3;
            // No = 0 なので、拠点(ホテル、亀、)
            if (Gvar.dungeon_number == 0) {
                Gvar.var_83[Gvar.var_2611].Var4 = 0;
            }
        }
        if (Gvar.var_83[Gvar.var_2611].Var0 == 107) {
            Gvar.var_83[Gvar.var_2611].Var4 = 3;
            // No = 0 なので、拠点(ホテル、亀、)
            if (Gvar.dungeon_number == 0) {
                Gvar.var_83[Gvar.var_2611].Var4 = 0;
            }
        }
        // Gvar.enemy_list = 108 イギー
        if (Gvar.var_83[Gvar.var_2611].Var0 == 108) {
            Gvar.var_83[Gvar.var_2611].Var4 = 3;
            // No = 0 なので、拠点(ホテル、亀、)
            if (Gvar.dungeon_number == 0) {
                Gvar.var_83[Gvar.var_2611].Var4 = 0;
            }
        }
        // Gvar.enemy_list = 163 ヤク中の少年
        if (Gvar.var_83[Gvar.var_2611].Var0 == 163) {
            Gvar.var_83[Gvar.var_2611].Var4 = 1;
        }
        // Gvar.enemy_list = 82 バーテンダー
        if (Gvar.var_83[Gvar.var_2611].Var0 == 82) {
            Gvar.var_83[Gvar.var_2611].Var4 = 0;
        }
        if (Gvar.var_83[Gvar.var_2611].Var31 == 5) {
            Gvar.var_83[Gvar.var_2611].Var4 = 2;
        }
        if (Gvar.var_83[Gvar.var_2611].Var31 == 5 && Gvar.var_71[Gvar.var_66][Gvar.var_67] == 13) {
            Gvar.var_83[Gvar.var_2611].Var4 = 1;
        }
        // Gvar.enemy_list = 49 コピー人形
        if (Gvar.var_83[Gvar.var_2611].Var0 == 49) {
            Gvar.var_83[Gvar.var_2611].Var4 = 1;
        }
        // Gvar.enemy_list = 48 エアロスミスでなければ
        if (Gvar.var_131 >= 1 && Gvar.var_83[Gvar.var_2611].Var0 != 48) {
            Gvar.var_83[Gvar.var_2611].Var4 = 3;
        }
        if (Gvar.var_123 >= 1 && Gvar.var_83[Gvar.var_124].Var10 == Gvar.var_83[Gvar.var_2611].Var10) {
            Gvar.var_2618 = 1;
            Gvar.var_2644 = Gvar.var_83[Gvar.var_124].Var1;
            Gvar.var_2645 = Gvar.var_83[Gvar.var_124].Var2;
        }
        if (Gvar.var_83[Gvar.var_2611].Var10 != 14) {
            Gvar.var_616 = 1;
            for (let cnt2 = 0; cnt2 < Gvar.var_97; ++cnt2) {
                if (Gvar.var_83[Gvar.var_616].Var0 != 0 && Gvar.var_83[Gvar.var_2611].Var31 == 5 && Gvar.var_83[Gvar.var_2611].Var0 != 49 && Gvar.var_83[Gvar.var_616].Var0 != 53 && Gvar.var_83[Gvar.var_616].Var31 != 4 && Gvar.var_83[Gvar.var_616].Var31 != 5 && Gvar.var_83[Gvar.var_616].Var30 == 0 && Gvar.var_83[Gvar.var_2611].Var10 == Gvar.var_83[Gvar.var_616].Var10 && Gvar.var_83[Gvar.var_616].Var10 != 0) {
                    Gvar.var_2618 = 1;
                    Gvar.var_2644 = Gvar.var_83[Gvar.var_616].Var1;
                    Gvar.var_2645 = Gvar.var_83[Gvar.var_616].Var2;
                    Gvar.var_83[Gvar.var_2611].Var4 = 2;
                    break;
                }
                // Gvar.enemy_list = 49 コピー人形
                if (Gvar.var_83[Gvar.var_616].Var0 == 49 && Gvar.var_83[Gvar.var_2611].Var31 != 5 && Gvar.var_83[Gvar.var_2611].Var31 != 4 && Gvar.var_83[Gvar.var_2611].Var4 == 2 && Gvar.var_83[Gvar.var_616].Var10 == Gvar.var_83[Gvar.var_2611].Var10) {
                    Gvar.var_2618 = 1;
                    Gvar.var_2644 = Gvar.var_83[Gvar.var_616].Var1;
                    Gvar.var_2645 = Gvar.var_83[Gvar.var_616].Var2;
                    break;
                }
                if (Gvar.var_83[Gvar.var_2611].Var0 != 37 && Gvar.var_83[Gvar.var_616].Var0 == 37 && Gvar.var_83[Gvar.var_2611].Var31 != 5 && Gvar.var_83[Gvar.var_2611].Var31 != 4 && Gvar.var_83[Gvar.var_2611].Var4 == 2 && Gvar.var_83[Gvar.var_616].Var10 == Gvar.var_83[Gvar.var_2611].Var10) {
                    Gvar.var_2618 = 1;
                    Gvar.var_2644 = Gvar.var_83[Gvar.var_616].Var1;
                    Gvar.var_2645 = Gvar.var_83[Gvar.var_616].Var2;
                    break;
                }
                Gvar.var_616++;
            }
        }
        if (Gvar.var_83[Gvar.var_2611].Var20 == 0 && Gvar.var_83[Gvar.var_2611].Var17 == 0 && Gvar.var_83[Gvar.var_2611].Var23 == 0) {
            // Gvar.enemy_list = 134 ジョリーン、Gvar.enemy_list = 35 仗助
            if (Gvar.var_83[Gvar.var_2611].Var0 == 134 || Gvar.var_83[Gvar.var_2611].Var0 == 35) {
                Gvar.var_616 = 1;
                for (let cnt3 = 0; cnt3 < Gvar.var_97; ++cnt3) {
                    if (Gvar.var_83[Gvar.var_616].Var0 != 0 && Gvar.var_2611 != Gvar.var_616 && Gvar.var_83[Gvar.var_616].Var31 != 4 && Gvar.var_83[Gvar.var_616].Var31 != 5 && Gvar.var_83[Gvar.var_2611].Var10 == Gvar.var_83[Gvar.var_616].Var10 && Gvar.var_83[Gvar.var_616].Var30 == 0 && Gvar.var_83[Gvar.var_2611].Var10 != 14) {
                        Gvar.var_2646 = Gvar.var_616;
                        await Func.func578();
                        if (Gvar.var_2647 >= 1) {
                            Gvar.var_83[Gvar.var_2611].Var4 = 2;
                            Gvar.var_2618 = 1;
                            Gvar.var_2644 = Gvar.var_83[Gvar.var_616].Var1;
                            Gvar.var_2645 = Gvar.var_83[Gvar.var_616].Var2;
                        }
                    }
                    Gvar.var_616++;
                }
            }
            // Gvar.enemy_list = 86 サンタナ
            if (Gvar.var_83[Gvar.var_2611].Var0 == 86) {
                Gvar.var_616 = 1;
                for (let cnt3 = 0; cnt3 < Gvar.var_97; ++cnt3) {
                    if (Gvar.var_83[Gvar.var_616].Var0 != 0 && Gvar.var_83[Gvar.var_616].Var0 != 86 && Gvar.var_2611 != Gvar.var_616 && Gvar.var_83[Gvar.var_616].Var31 != 4 && Gvar.var_83[Gvar.var_616].Var31 != 5 && Gvar.var_83[Gvar.var_2611].Var10 == Gvar.var_83[Gvar.var_616].Var10 && Gvar.var_83[Gvar.var_616].Var31 == 2 && Gvar.var_83[Gvar.var_2611].Var10 != 14) {
                        Gvar.var_83[Gvar.var_2611].Var4 = 2;
                        Gvar.var_2618 = 1;
                        Gvar.var_2644 = Gvar.var_83[Gvar.var_616].Var1;
                        Gvar.var_2645 = Gvar.var_83[Gvar.var_616].Var2;
                    }
                    Gvar.var_616++;
                }
            }
            // Gvar.enemy_list = 165 エボニーデビル、Gvar.enemy_list = 164 エシディシの脳
            if (Gvar.var_83[Gvar.var_2611].Var0 == 165 || Gvar.var_83[Gvar.var_2611].Var0 == 164) {
                Gvar.var_83[Gvar.var_2611].Var4 = 3;
                Gvar.var_616 = 1;
                for (let cnt3 = 0; cnt3 < Gvar.var_97; ++cnt3) {
                    if (Gvar.var_83[Gvar.var_616].Var0 != 0 && Gvar.var_83[Gvar.var_616].Var0 != 164 && Gvar.var_83[Gvar.var_616].Var0 != 165 && Gvar.var_2611 != Gvar.var_616 && Gvar.var_83[Gvar.var_616].Var31 != 4 && Gvar.var_83[Gvar.var_616].Var31 != 5 && Gvar.var_83[Gvar.var_2611].Var10 == Gvar.var_83[Gvar.var_616].Var10 && Gvar.var_83[Gvar.var_2611].Var10 != 14) {
                        Gvar.var_83[Gvar.var_2611].Var4 = 2;
                        Gvar.var_2618 = 1;
                        Gvar.var_2644 = Gvar.var_83[Gvar.var_616].Var1;
                        Gvar.var_2645 = Gvar.var_83[Gvar.var_616].Var2;
                    }
                    Gvar.var_616++;
                }
            }
            // Gvar.enemy_list = 113 DIOと Gvar.enemy_list = 114 最高にハイなDIOの設定
            if (Gvar.var_83[Gvar.var_2611].Var0 == 113 || Gvar.var_83[Gvar.var_2611].Var0 == 114) {
                Gvar.var_616 = 1;
                for (let cnt3 = 0; cnt3 < Gvar.var_97; ++cnt3) {
                    if (Gvar.var_83[Gvar.var_616].Var0 == 119) { // Gvar.enemy_list = 119 ジョセフ(3部)
                        if (Gvar.var_83[Gvar.var_2611].Var10 == Gvar.var_83[Gvar.var_616].Var10 && Gvar.var_83[Gvar.var_2611].Var10 != 14) {
                            Gvar.var_83[Gvar.var_2611].Var4 = 2;
                            Gvar.var_2618 = 1;
                            Gvar.var_2644 = Gvar.var_83[Gvar.var_616].Var1;
                            Gvar.var_2645 = Gvar.var_83[Gvar.var_616].Var2;
                        }
                    }
                    Gvar.var_616++;
                }
            }
            // Gvar.enemy_list = 44 レッド・ホット・チリ・ペッパー
            if (Gvar.var_83[Gvar.var_2611].Var0 == 44) {
                Gvar.var_616 = 1;
                for (let cnt3 = 0; cnt3 < Gvar.var_97; ++cnt3) {
                    if (Gvar.var_83[Gvar.var_616].Var0 == 147) {
                        if (Gvar.var_83[Gvar.var_2611].Var10 == Gvar.var_83[Gvar.var_616].Var10 && Gvar.var_83[Gvar.var_2611].Var10 != 14) {
                            Gvar.var_83[Gvar.var_2611].Var4 = 2;
                            Gvar.var_2618 = 1;
                            Gvar.var_2644 = Gvar.var_83[Gvar.var_616].Var1;
                            Gvar.var_2645 = Gvar.var_83[Gvar.var_616].Var2;
                        }
                    }
                    Gvar.var_616++;
                }
            }
            // Gvar.enemy_list == 134 ジョリーン
            if (Gvar.var_83[Gvar.var_2611].Var0 == 134 && Gvar.var_83[Gvar.var_2611].Var10 != 14) {
                Gvar.var_2648 = 1;
                for (let cnt3 = 0; cnt3 < Gvar.var_336; ++cnt3) {
                    // No = 572 承太郎のDISCが床に落ちていれば
                    if (Gvar.var_78[Gvar.var_2648].Var0 == 572 && Gvar.var_78[Gvar.var_2648].Var9 == Gvar.var_83[Gvar.var_2611].Var10) {
                        Gvar.var_83[Gvar.var_2611].Var4 = 2;
                        Gvar.var_2618 = 1;
                        Gvar.var_2644 = Gvar.var_78[Gvar.var_2648].Var1;
                        Gvar.var_2645 = Gvar.var_78[Gvar.var_2648].Var2;
                        if (Gvar.var_78[Gvar.var_2648].Var1 == Gvar.var_83[Gvar.var_2611].Var1 && Gvar.var_78[Gvar.var_2648].Var2 == Gvar.var_83[Gvar.var_2611].Var2) {
                            Gvar.var_83[Gvar.var_2611].Var4 = 0;
                        }
                        if (Gvar.var_194 == Gvar.var_2648) {
                            break;
                        }
                    }
                    Gvar.var_2648 = Gvar.var_2648 + 1;
                }
            }
            // Gvar.enemy_list == 17 シアハートアタック
            if (Gvar.var_83[Gvar.var_2611].Var0 == 17 && Gvar.var_83[Gvar.var_2611].Var10 != 14) {
                Gvar.var_2648 = 1;
                for (let cnt3 = 0; cnt3 < Gvar.var_336; ++cnt3) {
                    if (Gvar.var_78[Gvar.var_2648].Var0 == 713 && Gvar.var_78[Gvar.var_2648].Var9 == Gvar.var_83[Gvar.var_2611].Var10) {
                        Gvar.var_83[Gvar.var_2611].Var4 = 2;
                        Gvar.var_2618 = 1;
                        Gvar.var_2644 = Gvar.var_78[Gvar.var_2648].Var1;
                        Gvar.var_2645 = Gvar.var_78[Gvar.var_2648].Var2;
                        if (Gvar.var_78[Gvar.var_2648].Var1 == Gvar.var_83[Gvar.var_2611].Var1 && Gvar.var_78[Gvar.var_2648].Var2 == Gvar.var_83[Gvar.var_2611].Var2) {
                            Gvar.var_83[Gvar.var_2611].Var4 = 0;
                        }
                        if (Gvar.var_194 == Gvar.var_2648) {
                            break;
                        }
                    }
                    Gvar.var_2648 = Gvar.var_2648 + 1;
                }
            }
            // Gvar.enemy_list == 32 吉良吉影、Gvar.enemy_list == 137 成長した吉良
            if (Gvar.var_83[Gvar.var_2611].Var0 == 32 || Gvar.var_83[Gvar.var_2611].Var0 == 137) {
                if (Gvar.var_83[Gvar.var_2611].Var10 == Gvar.var_201 && Gvar.var_83[Gvar.var_2611].Var10 != 14 && Gvar.var_83[Gvar.var_2611].Var17 == 0 && Gvar.var_83[Gvar.var_2611].Var23 == 0) {
                    Gvar.var_2646 = Gvar.var_2611;
                    await Func.func578();
                    if (Gvar.var_2647 == 0) {
                        Gvar.var_2649 = 1;
                        for (let cnt5 = 0; cnt5 < Gvar.var_336; ++cnt5) {
                            Gvar.var_2650 = 0;
                            if (Gvar.var_78[Gvar.var_2649].Var0 != 0 && Gvar.var_78[Gvar.var_2649].Var11 == 0 && Gvar.var_78[Gvar.var_2649].Var0 >= 500 && Gvar.var_78[Gvar.var_2649].Var0 < 800 && Gvar.var_78[Gvar.var_2649].Var15 == 0 && Gvar.var_78[Gvar.var_2649].Var9 == Gvar.var_83[Gvar.var_2611].Var10) {
                                Gvar.var_2650 = 1;
                            }
                            if (Gvar.var_78[Gvar.var_2649].Var0 != 0 && Gvar.var_78[Gvar.var_2649].Var11 == 0 && Gvar.var_78[Gvar.var_2649].Var0 >= 900 && Gvar.var_78[Gvar.var_2649].Var15 == 0 && Gvar.var_78[Gvar.var_2649].Var9 == Gvar.var_83[Gvar.var_2611].Var10) {
                                Gvar.var_2650 = 1;
                            }
                            if (Gvar.var_2650 == 1) {
                                Gvar.var_83[Gvar.var_2611].Var4 = 2;
                                Gvar.var_2617 = 1;
                                Gvar.var_2644 = Gvar.var_78[Gvar.var_2649].Var1;
                                Gvar.var_2645 = Gvar.var_78[Gvar.var_2649].Var2;
                                if (Gvar.var_194 == Gvar.var_2649) {
                                    break;
                                }
                            }
                            Gvar.var_2649 = Gvar.var_2649 + 1;
                        }
                    }
                }
                Gvar.var_2651 = Gvar.var_83[Gvar.var_2611].Var1;
                Gvar.var_2652 = Gvar.var_83[Gvar.var_2611].Var2;
                if (Gvar.var_77[Gvar.var_2651][Gvar.var_2652] != 0 && Gvar.var_83[Gvar.var_2611].Var10 == Gvar.var_201 && Gvar.var_83[Gvar.var_2611].Var10 != 14 && Gvar.var_83[Gvar.var_2611].Var17 == 0 && Gvar.var_83[Gvar.var_2611].Var23 == 0) {
                    Gvar.var_2649 = Gvar.var_77[Gvar.var_2651][Gvar.var_2652];
                    if (Gvar.var_78[Gvar.var_2649].Var11 == 0 && Gvar.var_78[Gvar.var_2649].Var0 >= 500 && Gvar.var_78[Gvar.var_2649].Var0 < 800 && Gvar.var_78[Gvar.var_2649].Var15 == 0) {
                        Gvar.var_83[Gvar.var_2611].Var4 = 0;
                        Gvar.var_78[Gvar.var_2649].Var15 = 2;
                        Gvar.var_2617 = 0;
                    }
                    if (Gvar.var_78[Gvar.var_2649].Var11 == 0 && Gvar.var_78[Gvar.var_2649].Var0 >= 900 && Gvar.var_78[Gvar.var_2649].Var15 == 0) {
                        Gvar.var_83[Gvar.var_2611].Var4 = 0;
                        Gvar.var_78[Gvar.var_2649].Var15 = 2;
                        Gvar.var_2617 = 0;
                    }
                }
            }
            // Gvar.enemy_list == 87 エシディシ
            if (Gvar.var_83[Gvar.var_2611].Var0 == 87) {
                if (Gvar.var_83[Gvar.var_2611].Var10 == Gvar.var_201 && Gvar.var_83[Gvar.var_2611].Var10 != 14 && Gvar.var_83[Gvar.var_2611].Var17 == 0 && Gvar.var_83[Gvar.var_2611].Var23 == 0) {
                    Gvar.var_2646 = Gvar.var_2611;
                    await Func.func578();
                    if (Gvar.var_2647 == 0) {
                        Gvar.var_2650 = 0;
                        Gvar.var_2649 = 1;
                        for (let cnt5 = 0; cnt5 < Gvar.var_336; ++cnt5) {
                            if (Gvar.var_78[Gvar.var_2649].Var0 != 0 && Gvar.var_78[Gvar.var_2649].Var11 == 0 && Gvar.var_78[Gvar.var_2649].Var15 == 0 && Gvar.var_78[Gvar.var_2649].Var9 == Gvar.var_83[Gvar.var_2611].Var10 && Gvar.var_78[Gvar.var_2649].Var0 != 641) {
                                Gvar.var_83[Gvar.var_2611].Var4 = 2;
                                Gvar.var_2617 = 1;
                                Gvar.var_2644 = Gvar.var_78[Gvar.var_2649].Var1;
                                Gvar.var_2645 = Gvar.var_78[Gvar.var_2649].Var2;
                                if (Gvar.var_194 == Gvar.var_2649) {
                                    break;
                                }
                            }
                            Gvar.var_2649 = Gvar.var_2649 + 1;
                        }
                    }
                }
                Gvar.var_2651 = Gvar.var_83[Gvar.var_2611].Var1;
                Gvar.var_2652 = Gvar.var_83[Gvar.var_2611].Var2;
                if (Gvar.var_77[Gvar.var_2651][Gvar.var_2652] != 0 && Gvar.var_83[Gvar.var_2611].Var10 == Gvar.var_201 && Gvar.var_83[Gvar.var_2611].Var10 != 14 && Gvar.var_83[Gvar.var_2611].Var17 == 0 && Gvar.var_83[Gvar.var_2611].Var23 == 0) {
                    Gvar.var_2649 = Gvar.var_77[Gvar.var_2651][Gvar.var_2652];
                    if (Gvar.var_78[Gvar.var_2649].Var11 == 0 && Gvar.var_78[Gvar.var_2649].Var15 == 0 && Gvar.var_78[Gvar.var_2649].Var0 != 641) {
                        Gvar.var_83[Gvar.var_2611].Var4 = 0;
                        Gvar.var_78[Gvar.var_2649].Var0 = 641;
                        Gvar.var_2617 = 0;
                    }
                }
            }
            // Gvar.enemy_list == 26 ハーヴェスト
            if (Gvar.var_83[Gvar.var_2611].Var0 == 26) {
                if (Gvar.var_83[Gvar.var_2611].Var26 == 0 && Gvar.var_83[Gvar.var_2611].Var10 == Gvar.var_201 && Gvar.var_83[Gvar.var_2611].Var10 != 14 && Gvar.var_83[Gvar.var_2611].Var17 == 0 && Gvar.var_83[Gvar.var_2611].Var23 == 0) {
                    Gvar.var_2646 = Gvar.var_2611;
                    await Func.func578();
                    if (Gvar.var_2647 == 0) {
                        Gvar.var_2649 = 1;
                        for (let cnt5 = 0; cnt5 < Gvar.var_336; ++cnt5) {
                            if (Gvar.var_78[Gvar.var_2649].Var0 >= 1 && Gvar.var_78[Gvar.var_2649].Var9 == Gvar.var_83[Gvar.var_2611].Var10 && Gvar.var_78[Gvar.var_2649].Var11 == 0) {
                                Gvar.var_83[Gvar.var_2611].Var4 = 2;
                                Gvar.var_2617 = 1;
                                Gvar.var_2644 = Gvar.var_78[Gvar.var_2649].Var1;
                                Gvar.var_2645 = Gvar.var_78[Gvar.var_2649].Var2;
                                if (Gvar.var_194 == Gvar.var_2649) {
                                    break;
                                }
                            }
                            Gvar.var_2649 = Gvar.var_2649 + 1;
                        }
                    }
                }
                Gvar.var_2651 = Gvar.var_83[Gvar.var_2611].Var1;
                Gvar.var_2652 = Gvar.var_83[Gvar.var_2611].Var2;
                Gvar.var_2649 = Gvar.var_77[Gvar.var_2651][Gvar.var_2652];
                if (Gvar.var_77[Gvar.var_2651][Gvar.var_2652] != 0 && Gvar.var_83[Gvar.var_2611].Var10 == Gvar.var_201 && Gvar.var_83[Gvar.var_2611].Var10 != 14 && Gvar.var_83[Gvar.var_2611].Var17 == 0 && Gvar.var_83[Gvar.var_2611].Var23 == 0 && Gvar.var_83[Gvar.var_2611].Var26 == 0 && Gvar.var_78[Gvar.var_2649].Var11 == 0) {
                    Gvar.var_2617 = 0;
                    Gvar.var_83[Gvar.var_2611].Var4 = 0;
                }
            }
            // Gvar.enemy_list == 61 ヨーヨーマッ
            if (Gvar.var_83[Gvar.var_2611].Var0 == 61 && Gvar.var_83[Gvar.var_2611].Var10 != 14) {
                Gvar.var_2648 = 1;
                for (let cnt3 = 0; cnt3 < Gvar.var_336; ++cnt3) {
                    if (Gvar.var_78[Gvar.var_2648].Var0 == 650 || Gvar.var_78[Gvar.var_2648].Var0 == 651 || Gvar.var_78[Gvar.var_2648].Var0 == 652 || Gvar.var_78[Gvar.var_2648].Var0 == 653) {
                        if (Gvar.var_78[Gvar.var_2648].Var9 == Gvar.var_83[Gvar.var_2611].Var10) {
                            Gvar.var_83[Gvar.var_2611].Var4 = 2;
                            Gvar.var_2618 = 1;
                            Gvar.var_2644 = Gvar.var_78[Gvar.var_2648].Var1;
                            Gvar.var_2645 = Gvar.var_78[Gvar.var_2648].Var2;
                            if (Gvar.var_78[Gvar.var_2648].Var1 == Gvar.var_83[Gvar.var_2611].Var1 && Gvar.var_78[Gvar.var_2648].Var2 == Gvar.var_83[Gvar.var_2611].Var2) {
                                Gvar.var_83[Gvar.var_2611].Var4 = 0;
                            }
                            if (Gvar.var_194 == Gvar.var_2648) {
                                break;
                            }
                        }
                    }
                    Gvar.var_2648 = Gvar.var_2648 + 1;
                }
            }
            // Gvar.enemy_list == 48 エアロスミス
            if (Gvar.var_83[Gvar.var_2611].Var0 == 48 && Gvar.var_83[Gvar.var_2611].Var10 != 14) {
                Gvar.var_2648 = 1;
                for (let cnt3 = 0; cnt3 < Gvar.var_336; ++cnt3) {
                    // No = 713 ポルポのライター
                    if (Gvar.var_78[Gvar.var_2648].Var0 == 713 && Gvar.var_78[Gvar.var_2648].Var9 == Gvar.var_83[Gvar.var_2611].Var10) {
                        Gvar.var_83[Gvar.var_2611].Var4 = 1;
                    }
                    Gvar.var_2648 = Gvar.var_2648 + 1;
                }
            }
            // Gvar.enemy_list == 1 ヤク中のゴロツキ
            if (Gvar.var_83[Gvar.var_2611].Var0 == 1) {
                Gvar.var_83[Gvar.var_2611].Var4 = 1;
                if (Gvar.var_83[Gvar.var_2611].Var10 == Gvar.var_201 && Gvar.var_83[Gvar.var_2611].Var10 != 14) {
                    Gvar.var_2649 = 1;
                    for (let cnt4 = 0; cnt4 < Gvar.var_336; ++cnt4) {
                        if (Gvar.var_78[Gvar.var_2649].Var0 == 725 && Gvar.var_78[Gvar.var_2649].Var9 == Gvar.var_83[Gvar.var_2611].Var10) {
                            Gvar.var_83[Gvar.var_2611].Var4 = 2;
                            Gvar.var_2617 = 1;
                            Gvar.var_2644 = Gvar.var_78[Gvar.var_2649].Var1;
                            Gvar.var_2645 = Gvar.var_78[Gvar.var_2649].Var2;
                            if (Gvar.var_78[Gvar.var_2649].Var1 == Gvar.var_83[Gvar.var_2611].Var1 && Gvar.var_78[Gvar.var_2649].Var2 == Gvar.var_83[Gvar.var_2611].Var2) {
                                Gvar.var_83[Gvar.var_2611].Var4 = 0;
                            }
                            if (Gvar.var_194 == Gvar.var_2649) {
                                break;
                            }
                        }
                        Gvar.var_2649++;
                    }
                    Gvar.var_2653 = 1;
                    for (let cnt4 = 0; cnt4 < Gvar.var_224; ++cnt4) {
                        if (Gvar.var_233[Gvar.var_2653].Var0 == 725) {
                            Gvar.var_83[Gvar.var_2611].Var4 = 2;
                            Gvar.var_2617 = 0;
                            break;
                        }
                        Gvar.var_2653++;
                    }
                }
                if (Gvar.var_83[Gvar.var_2611].Var4 == 1 && Gvar.var_83[Gvar.var_2611].Var1 >= Gvar.var_2635 && Gvar.var_83[Gvar.var_2611].Var1 <= Gvar.var_2636 && Gvar.var_83[Gvar.var_2611].Var2 >= Gvar.var_2638 && Gvar.var_83[Gvar.var_2611].Var2 <= Gvar.var_2637) {
                    Gvar.var_2653 = 1;
                    for (let cnt4 = 0; cnt4 < Gvar.var_224; ++cnt4) {
                        if (Gvar.var_233[Gvar.var_2653].Var0 == 725) { // No = 725 オレッちのコートを所持している場合
                            Gvar.var_83[Gvar.var_2611].Var4 = 2;
                            Gvar.var_2617 = 0;
                            break;
                        }
                        Gvar.var_2653++;
                    }
                }
            }
            // Gvar.enemy_list == 76 エコーズACT2
            if (Gvar.var_83[Gvar.var_2611].Var0 == 76 && Gvar.var_83[Gvar.var_2611].Var10 <= 12 && Gvar.var_83[Gvar.var_2611].Var10 == Gvar.var_201 && Gvar.var_83[Gvar.var_2611].Var17 == 0 && Gvar.var_83[Gvar.var_2611].Var23 == 0 && Gvar.var_83[Gvar.var_2611].Var12 == 0 && Gvar.var_83[Gvar.var_2611].Var13 == 0) {
                if (Gvar.var_77[Gvar.var_423][Gvar.var_424] == 0 && Gvar.var_80[Gvar.var_423][Gvar.var_424] == 0 && Gvar.var_73[Gvar.var_423][Gvar.var_424] == 0) {
                    Gvar.var_2654 = Adap.rnd(4);
                    if (Gvar.var_2654 == 0) {
                        Gvar.var_768 = 1;
                        Gvar.var_1728 = 1;
                        Gvar.var_2425 = 1;
                        Gvar.var_1550 = Gvar.var_423;
                        Gvar.var_230 = Gvar.var_424;
                        Gvar.var_2412 = 1;
                        await Func.func536();
                        Gvar.var_2412 = 0;
                        Gvar.var_768 = 0;
                        Gvar.var_1728 = 0;
                        Gvar.var_2425 = 0;
                        Gvar.var_83[Gvar.var_2611].Var22 = 1;
                        Gvar.var_83[Gvar.var_2611].Var9 = 0;
                        Gvar.var_2616 = 1;
                    }
                }
            }
            // Gvar.enemy_list == 65 虹村形兆
            if (Gvar.var_83[Gvar.var_2611].Var0 == 65 && Gvar.var_83[Gvar.var_2611].Var10 <= 12 && Gvar.var_83[Gvar.var_2611].Var10 == Gvar.var_201 && Gvar.var_83[Gvar.var_2611].Var17 == 0 && Gvar.var_83[Gvar.var_2611].Var23 == 0 && Gvar.var_83[Gvar.var_2611].Var12 == 0 && Gvar.var_83[Gvar.var_2611].Var13 == 0) {
                if (Gvar.var_77[Gvar.var_423][Gvar.var_424] == 0 && Gvar.var_80[Gvar.var_423][Gvar.var_424] == 0 && Gvar.var_73[Gvar.var_423][Gvar.var_424] == 0) {
                    Gvar.var_2654 = Adap.rnd(8);
                    if (Gvar.var_2654 == 0) {
                        Gvar.var_768 = 1;
                        Gvar.var_1728 = 1;
                        Gvar.var_2425 = 1;
                        Gvar.var_2429 = 1;
                        Gvar.var_1550 = Gvar.var_423;
                        Gvar.var_230 = Gvar.var_424;
                        Gvar.var_2412 = 1;
                        await Func.func536();
                        Gvar.var_2412 = 0;
                        Gvar.var_768 = 0;
                        Gvar.var_1728 = 0;
                        Gvar.var_2425 = 0;
                        Gvar.var_2429 = 0;
                        Gvar.var_83[Gvar.var_2611].Var22 = 1;
                        Gvar.var_83[Gvar.var_2611].Var9 = 0;
                        Gvar.var_2616 = 1;
                    }
                }
            }
            // Gvar.enemy_list == 148 エルメェス
            if (Gvar.var_83[Gvar.var_2611].Var0 == 148 && Gvar.var_83[Gvar.var_2611].Var29 < 3 && Gvar.var_83[Gvar.var_2611].Var10 <= 12 && Gvar.var_83[Gvar.var_2611].Var10 == Gvar.var_201 && Gvar.var_83[Gvar.var_2611].Var17 == 0 && Gvar.var_83[Gvar.var_2611].Var23 == 0 && Gvar.var_83[Gvar.var_2611].Var12 == 0 && Gvar.var_83[Gvar.var_2611].Var13 == 0) {
                if (Gvar.var_77[Gvar.var_423][Gvar.var_424] == 0 && Gvar.var_80[Gvar.var_423][Gvar.var_424] == 0 && Gvar.var_73[Gvar.var_423][Gvar.var_424] == 0) {
                    Gvar.var_2654 = Adap.rnd(4);
                    if (Gvar.var_2654 == 0) {
                        Gvar.var_83[Gvar.var_2611].Var29 = Gvar.var_83[Gvar.var_2611].Var29 + 1;
                        Gvar.var_83[Gvar.var_2611].Var22 = 1;
                        Gvar.var_83[Gvar.var_2611].Var9 = 0;
                        Gvar.var_2616 = 1;
                    }
                }
            }
            // Gvar.enemy_list == 135 若ジョセフ
            if (Gvar.var_83[Gvar.var_2611].Var0 == 135 && Gvar.var_83[Gvar.var_2611].Var10 <= 12 && Gvar.var_83[Gvar.var_2611].Var10 == Gvar.var_201 && Gvar.var_83[Gvar.var_2611].Var17 == 0 && Gvar.var_83[Gvar.var_2611].Var23 == 0 && Gvar.var_83[Gvar.var_2611].Var12 == 0 && Gvar.var_83[Gvar.var_2611].Var13 == 0) {
                if (Gvar.var_77[Gvar.var_423][Gvar.var_424] == 0 && Gvar.var_80[Gvar.var_423][Gvar.var_424] == 0 && Gvar.var_73[Gvar.var_423][Gvar.var_424] == 0) {
                    Gvar.var_2654 = Adap.rnd(4);
                    if (Gvar.var_2654 == 0) {
                        Gvar.var_83[Gvar.var_2611].Var22 = 1;
                        Gvar.var_83[Gvar.var_2611].Var9 = 0;
                        Gvar.var_2616 = 1;
                    }
                }
            }
            // Gvar.enemy_list == 155 マライア
            if (Gvar.var_83[Gvar.var_2611].Var0 == 155 && Gvar.var_83[Gvar.var_2611].Var10 <= 12 && Gvar.var_83[Gvar.var_2611].Var10 == Gvar.var_201 && Gvar.var_83[Gvar.var_2611].Var17 == 0 && Gvar.var_83[Gvar.var_2611].Var23 == 0 && Gvar.var_83[Gvar.var_2611].Var12 == 0 && Gvar.var_83[Gvar.var_2611].Var13 == 0) {
                if (Gvar.var_77[Gvar.var_423][Gvar.var_424] == 0 && Gvar.var_80[Gvar.var_423][Gvar.var_424] == 0 && Gvar.var_73[Gvar.var_423][Gvar.var_424] == 0) {
                    Gvar.var_2654 = Adap.rnd(4);
                    if (Gvar.var_2654 == 0) {
                        Gvar.var_768 = 1;
                        Gvar.var_1728 = 1;
                        Gvar.var_2430 = 1;
                        Gvar.var_1550 = Gvar.var_423;
                        Gvar.var_230 = Gvar.var_424;
                        Gvar.var_2412 = 1;
                        await Func.func536();
                        Gvar.var_2412 = 0;
                        Gvar.var_768 = 0;
                        Gvar.var_1728 = 0;
                        Gvar.var_2430 = 0;
                        Gvar.var_83[Gvar.var_2611].Var22 = 1;
                        Gvar.var_83[Gvar.var_2611].Var9 = 0;
                        Gvar.var_2616 = 1;
                    }
                }
            }
        }
        if (Gvar.var_83[Gvar.var_2611].Var0 == 33) { // Gvar.enemy_list == 33 トニオさん
            Gvar.var_83[Gvar.var_2611].Var4 = 0;
        }
        if (Gvar.var_83[Gvar.var_2611].Var0 == 33 && Gvar.var_72[Gvar.var_66][Gvar.var_67] >= 1) { // Gvar.enemy_list == 33 トニオさん
            await Func.func721();
            if (Gvar.var_1008 > 0) {
                Gvar.var_83[Gvar.var_2611].Var4 = 2;
                Gvar.var_2617 = 1;
                Gvar.var_2644 = Gvar.var_1018;
                Gvar.var_2645 = Gvar.var_1019;
            }
            if (Gvar.var_1008 == 0) {
                Gvar.var_83[Gvar.var_2611].Var4 = 2;
                Gvar.var_2617 = 1;
                Gvar.var_2644 = Gvar.var_1016;
                Gvar.var_2645 = Gvar.var_1017;
                if (Gvar.var_82[Gvar.var_2644][Gvar.var_2645] != 0 || Gvar.var_65[Gvar.var_2644][Gvar.var_2645] != 0) {
                    Gvar.var_2644 = Gvar.var_1020;
                    Gvar.var_2645 = Gvar.var_1021;
                }
                if (Gvar.var_82[Gvar.var_2644][Gvar.var_2645] != 0 || Gvar.var_65[Gvar.var_2644][Gvar.var_2645] != 0) {
                    Gvar.var_83[Gvar.var_2611].Var4 = 0;
                }
                if (Gvar.var_83[Gvar.var_2611].Var1 == Gvar.var_1016 && Gvar.var_83[Gvar.var_2611].Var2 == Gvar.var_1017) {
                    Gvar.var_83[Gvar.var_2611].Var4 = 0;
                }
                if (Gvar.var_83[Gvar.var_2611].Var1 == Gvar.var_1020 && Gvar.var_83[Gvar.var_2611].Var2 == Gvar.var_1021) {
                    Gvar.var_83[Gvar.var_2611].Var4 = 0;
                }
            }
        }
        if (Gvar.var_83[Gvar.var_2611].Var0 == 26 && Gvar.var_83[Gvar.var_2611].Var26 >= 1 && Gvar.var_83[Gvar.var_2611].Var20 == 0) { // Gvar.enemy_list == ハーヴェスト
            Gvar.var_83[Gvar.var_2611].Var4 = 6;
        }
        if (Gvar.var_83[Gvar.var_2611].Var0 == 144 && Gvar.var_83[Gvar.var_2611].Var26 >= 1 && Gvar.var_83[Gvar.var_2611].Var20 == 0) { // Gvar.enemy_list == 144 川尻浩作
        }
        if (Gvar.var_83[Gvar.var_2611].Var0 == 116 && Gvar.var_83[Gvar.var_2611].Var26 >= 1 && Gvar.var_83[Gvar.var_2611].Var20 == 0) { // Gvar.enemy_list == 116 玉美
            Gvar.var_83[Gvar.var_2611].Var4 = 6;
        }
        if (Gvar.var_83[Gvar.var_2611].Var0 == 117 && Gvar.var_83[Gvar.var_2611].Var20 == 0) { // Gvar.enemy_list == 117 チョコラータの上半身
            Gvar.var_83[Gvar.var_2611].Var4 = 6;
        }
        if (Gvar.var_83[Gvar.var_2611].Var23 >= 1 && Gvar.var_83[Gvar.var_2611].Var0 != 118) { // Gvar.enemy_list == 118 クリームじゃなければ
            Gvar.var_83[Gvar.var_2611].Var4 = 7;
        }
        if (Gvar.var_218 >= 1 && Gvar.var_83[Gvar.var_2611].Var0 != 33) { // Gvar.enemy_list == 33 トニオさんじゃなければ
            Gvar.var_83[Gvar.var_2611].Var4 = 3;
        }
        if (Gvar.var_144 >= 1 && Gvar.var_83[Gvar.var_2611].Var0 != 33) { // Gvar.enemy_list == 33 トニオさんじゃなければ
            Gvar.var_83[Gvar.var_2611].Var4 = 3;
        }
        if (Gvar.var_83[Gvar.var_2611].Var17 >= 1) {
            Gvar.var_83[Gvar.var_2611].Var4 = 1;
        }
        if (Gvar.var_83[Gvar.var_2611].Var0 == 91) { // Gvar.enemy_list == 91 ACT1のさなぎ
            Gvar.var_83[Gvar.var_2611].Var4 = 0;
        }
        if (Gvar.var_83[Gvar.var_2611].Var0 == 92) { // Gvar.enemy_list == 92 ACT2のさなぎ
            Gvar.var_83[Gvar.var_2611].Var4 = 0;
        }
        if (Gvar.var_83[Gvar.var_2611].Var0 == 94 && Gvar.var_83[Gvar.var_2611].Var23 == 0) { // Gvar.enemy_list == 94 ブルりん
            Gvar.var_83[Gvar.var_2611].Var4 = 5;
        }
        if (Gvar.var_83[Gvar.var_2611].Var0 == 21 && Gvar.var_83[Gvar.var_2611].Var23 == 0) { // Gvar.enemy_list == 21 ストレイキャット
            Gvar.var_83[Gvar.var_2611].Var4 = 5;
        }
        if (Gvar.var_83[Gvar.var_2611].Var0 == 172 && Gvar.var_83[Gvar.var_2611].Var23 == 0) { // Gvar.enemy_list == 172 虫食いでない
            Gvar.var_83[Gvar.var_2611].Var4 = 5;
        }
        // Gvar.enemy_list == 27 ゲブ神、94 ブルりん、21 ストレイキャット、172 虫食いでない
        if (Gvar.var_83[Gvar.var_2611].Var0 == 27 || Gvar.var_83[Gvar.var_2611].Var0 == 94 || Gvar.var_83[Gvar.var_2611].Var0 == 21 || Gvar.var_83[Gvar.var_2611].Var0 == 172) {
            if (Gvar.var_83[Gvar.var_2611].Var23 >= 1 || Gvar.var_218 >= 1 || Gvar.var_144 >= 1 || Gvar.var_131 >= 1) {
                Gvar.var_83[Gvar.var_2611].Var4 = 0;
            }
        }
        if (Gvar.var_83[Gvar.var_2611].Var0 == 19) { // Gvar.enemy_list == 19 アラビアファッツ
            Gvar.var_83[Gvar.var_2611].Var4 = 0;
        }
        if (Gvar.var_83[Gvar.var_2611].Var0 == 90) { // Gvar.enemy_list == 0 岩
            Gvar.var_83[Gvar.var_2611].Var4 = 0;
        }
        if (Gvar.var_83[Gvar.var_2611].Var0 == 23) { // Gvar.enemy_list == 23 ただの死体
            Gvar.var_83[Gvar.var_2611].Var4 = 0;
        }
        if (Gvar.var_83[Gvar.var_2611].Var0 == 70) { // Gvar.enemy_list == 70 ダービー
            Gvar.var_83[Gvar.var_2611].Var4 = 0;
        }
        if (Gvar.var_83[Gvar.var_2611].Var0 == 53) { // Gvar.enemy_list == 53 エクスペリエンスの花
            Gvar.var_83[Gvar.var_2611].Var4 = 0;
        }
        if (Gvar.var_83[Gvar.var_2611].Var0 == 55) { // Gvar.enemy_list = 55 なので亀
            Gvar.var_83[Gvar.var_2611].Var4 = 1;
        }
        if (Gvar.var_83[Gvar.var_2611].Var0 == 75) { // Gvar.enemy_list == 75 鮮血のシャボン
            Gvar.var_83[Gvar.var_2611].Var4 = 0;
        }
        if (Gvar.var_83[Gvar.var_2611].Var0 == 96) { // Gvar.enemy_list == 96 感電エンポリオ
            Gvar.var_83[Gvar.var_2611].Var4 = 0;
        }
        if (Gvar.var_83[Gvar.var_2611].Var0 == 79) { // Gvar.enemy_list == 79 エコーズの卵
            Gvar.var_83[Gvar.var_2611].Var4 = 0;
        }
        // Gvar.enemy_list == 69 ブラフォード
        if (Gvar.var_83[Gvar.var_2611].Var0 == 69 && Gvar.var_114 >= 1 && Gvar.var_66 == Gvar.var_461 && Gvar.var_67 == Gvar.var_462) {
            Gvar.var_83[Gvar.var_2611].Var4 = 0;
        }
        if (Gvar.var_83[Gvar.var_2611].Var0 == 50) { // Gvar.enemy_list == 50 元いた場所
            Gvar.var_83[Gvar.var_2611].Var4 = 0;
        }
        if (Gvar.var_83[Gvar.var_2611].Var0 == 142) { // Gvar.enemy_list == 142 露伴
            Gvar.var_83[Gvar.var_2611].Var4 = 0;
        }
        if (Gvar.var_83[Gvar.var_2611].Var0 == 173) { // Gvar.enemy_list = 173 NPC ロッコ・バロッコ所長
            Gvar.var_83[Gvar.var_2611].Var4 = 0; // 0 = 行動しない
        }
        // Ver0.1403にて追加。
        if (Gvar.var_83[Gvar.var_2611].Var0 == 180) { // Gvar.enemy_list = 180 NPC デッドマンズ吉良
            Gvar.var_83[Gvar.var_2611].Var4 = 0; // 0 = 行動しない
        }
        if (Gvar.var_146 >= 1 && Gvar.var_147 == Gvar.var_83[Gvar.var_2611].Var1 && Gvar.var_148 == Gvar.var_83[Gvar.var_2611].Var2) {
            Gvar.var_83[Gvar.var_2611].Var4 = 0;
        }
        if (Gvar.var_2616 == 0) {
            Gvar.var_602 = 0;
            Gvar.var_603 = 0;
            Gvar.var_604 = 0;
            Gvar.var_605 = 0;
            Gvar.var_606 = 0;
            Gvar.var_607 = 0;
            Gvar.var_608 = 0;
            Gvar.var_609 = 0;
            if (Gvar.var_71[Gvar.var_425][Gvar.var_424] == 0 || Gvar.var_65[Gvar.var_425][Gvar.var_424] == 1) {
                Gvar.var_602 = 1;
            }
            if (Gvar.var_71[Gvar.var_426][Gvar.var_424] == 0 || Gvar.var_65[Gvar.var_426][Gvar.var_424] == 1) {
                Gvar.var_603 = 1;
            }
            if (Gvar.var_71[Gvar.var_423][Gvar.var_427] == 0 || Gvar.var_65[Gvar.var_423][Gvar.var_427] == 1) {
                Gvar.var_604 = 1;
            }
            if (Gvar.var_71[Gvar.var_423][Gvar.var_428] == 0 || Gvar.var_65[Gvar.var_423][Gvar.var_428] == 1) {
                Gvar.var_605 = 1;
            }
            if (Gvar.var_71[Gvar.var_425][Gvar.var_427] == 0 || Gvar.var_65[Gvar.var_425][Gvar.var_427] == 1) {
                Gvar.var_606 = 1;
            }
            if (Gvar.var_71[Gvar.var_425][Gvar.var_428] == 0 || Gvar.var_65[Gvar.var_425][Gvar.var_428] == 1) {
                Gvar.var_607 = 1;
            }
            if (Gvar.var_71[Gvar.var_426][Gvar.var_427] == 0 || Gvar.var_65[Gvar.var_426][Gvar.var_427] == 1) {
                Gvar.var_608 = 1;
            }
            if (Gvar.var_71[Gvar.var_426][Gvar.var_428] == 0 || Gvar.var_65[Gvar.var_426][Gvar.var_428] == 1) {
                Gvar.var_609 = 1;
            }
            if (Gvar.var_83[Gvar.var_2611].Var23 >= 1) {
                Gvar.var_602 = 0;
                Gvar.var_603 = 0;
                Gvar.var_604 = 0;
                Gvar.var_605 = 0;
                Gvar.var_606 = 0;
                Gvar.var_607 = 0;
                Gvar.var_608 = 0;
                Gvar.var_609 = 0;
                if (Gvar.var_71[Gvar.var_425][Gvar.var_424] == 0) {
                    Gvar.var_602 = 1;
                }
                if (Gvar.var_71[Gvar.var_426][Gvar.var_424] == 0) {
                    Gvar.var_603 = 1;
                }
                if (Gvar.var_71[Gvar.var_423][Gvar.var_427] == 0) {
                    Gvar.var_604 = 1;
                }
                if (Gvar.var_71[Gvar.var_423][Gvar.var_428] == 0) {
                    Gvar.var_605 = 1;
                }
                if (Gvar.var_71[Gvar.var_425][Gvar.var_427] == 0) {
                    Gvar.var_606 = 1;
                }
                if (Gvar.var_71[Gvar.var_425][Gvar.var_428] == 0) {
                    Gvar.var_607 = 1;
                }
                if (Gvar.var_71[Gvar.var_426][Gvar.var_427] == 0) {
                    Gvar.var_608 = 1;
                }
                if (Gvar.var_71[Gvar.var_426][Gvar.var_428] == 0) {
                    Gvar.var_609 = 1;
                }
            }
            // おそらく敵の壁抜け能力
            // enemy=list = 43 セッコ、enemy=list = 111 究極カーズ 
            if (Gvar.var_83[Gvar.var_2611].Var0 == 43 || Gvar.var_83[Gvar.var_2611].Var0 == 111) {
                if (Gvar.var_83[Gvar.var_2611].Var20 == 0 && Gvar.dungeon_number != 0) {
                    Gvar.var_602 = 0;
                    Gvar.var_603 = 0;
                    Gvar.var_604 = 0;
                    Gvar.var_605 = 0;
                    Gvar.var_606 = 0;
                    Gvar.var_607 = 0;
                    Gvar.var_608 = 0;
                    Gvar.var_609 = 0;
                    if (Gvar.var_65[Gvar.var_425][Gvar.var_424] == 1) {
                        Gvar.var_602 = 1;
                    }
                    if (Gvar.var_65[Gvar.var_426][Gvar.var_424] == 1) {
                        Gvar.var_603 = 1;
                    }
                    if (Gvar.var_65[Gvar.var_423][Gvar.var_427] == 1) {
                        Gvar.var_604 = 1;
                    }
                    if (Gvar.var_65[Gvar.var_423][Gvar.var_428] == 1) {
                        Gvar.var_605 = 1;
                    }
                    if (Gvar.var_65[Gvar.var_425][Gvar.var_427] == 1) {
                        Gvar.var_606 = 1;
                    }
                    if (Gvar.var_65[Gvar.var_425][Gvar.var_428] == 1) {
                        Gvar.var_607 = 1;
                    }
                    if (Gvar.var_65[Gvar.var_426][Gvar.var_427] == 1) {
                        Gvar.var_608 = 1;
                    }
                    if (Gvar.var_65[Gvar.var_426][Gvar.var_428] == 1) {
                        Gvar.var_609 = 1;
                    }
                }
            }
            // Gvar.enemy_list = 118 クリーム
            if (Gvar.var_83[Gvar.var_2611].Var0 == 118) {
                if (Gvar.var_83[Gvar.var_2611].Var20 == 0 && Gvar.dungeon_number != 0) {
                    Gvar.var_602 = 0;
                    Gvar.var_603 = 0;
                    Gvar.var_604 = 0;
                    Gvar.var_605 = 0;
                    Gvar.var_606 = 0;
                    Gvar.var_607 = 0;
                    Gvar.var_608 = 0;
                    Gvar.var_609 = 0;
                    if (Gvar.var_144 != 0 || Gvar.var_218 != 0 || Gvar.var_131 != 0) {
                        if (Gvar.var_65[Gvar.var_425][Gvar.var_424] == 1) {
                            Gvar.var_602 = 1;
                        }
                        if (Gvar.var_65[Gvar.var_426][Gvar.var_424] == 1) {
                            Gvar.var_603 = 1;
                        }
                        if (Gvar.var_65[Gvar.var_423][Gvar.var_427] == 1) {
                            Gvar.var_604 = 1;
                        }
                        if (Gvar.var_65[Gvar.var_423][Gvar.var_428] == 1) {
                            Gvar.var_605 = 1;
                        }
                        if (Gvar.var_65[Gvar.var_425][Gvar.var_427] == 1) {
                            Gvar.var_606 = 1;
                        }
                        if (Gvar.var_65[Gvar.var_425][Gvar.var_428] == 1) {
                            Gvar.var_607 = 1;
                        }
                        if (Gvar.var_65[Gvar.var_426][Gvar.var_427] == 1) {
                            Gvar.var_608 = 1;
                        }
                        if (Gvar.var_65[Gvar.var_426][Gvar.var_428] == 1) {
                            Gvar.var_609 = 1;
                        }
                    }
                }
            }
            if (Gvar.var_146 >= 1) {
                if (Gvar.var_147 == Gvar.var_425 && Gvar.var_148 == Gvar.var_424) {
                    Gvar.var_602 = 1;
                }
                if (Gvar.var_147 == Gvar.var_426 && Gvar.var_148 == Gvar.var_424) {
                    Gvar.var_603 = 1;
                }
                if (Gvar.var_147 == Gvar.var_423 && Gvar.var_148 == Gvar.var_427) {
                    Gvar.var_604 = 1;
                }
                if (Gvar.var_147 == Gvar.var_423 && Gvar.var_148 == Gvar.var_428) {
                    Gvar.var_605 = 1;
                }
                if (Gvar.var_147 == Gvar.var_425 && Gvar.var_148 == Gvar.var_427) {
                    Gvar.var_606 = 1;
                }
                if (Gvar.var_147 == Gvar.var_425 && Gvar.var_148 == Gvar.var_428) {
                    Gvar.var_607 = 1;
                }
                if (Gvar.var_147 == Gvar.var_426 && Gvar.var_148 == Gvar.var_427) {
                    Gvar.var_608 = 1;
                }
                if (Gvar.var_147 == Gvar.var_426 && Gvar.var_148 == Gvar.var_428) {
                    Gvar.var_609 = 1;
                }
            }
            if (Gvar.var_423 < 5 || Gvar.var_425 < 5) {
                Gvar.var_602 = 1;
                Gvar.var_606 = 1;
                Gvar.var_607 = 1;
            }
            if (Gvar.var_423 > Gvar.var_33 || Gvar.var_426 > Gvar.var_33) {
                Gvar.var_603 = 1;
                Gvar.var_608 = 1;
                Gvar.var_609 = 1;
            }
            if (Gvar.var_424 < 5 || Gvar.var_428 < 5) {
                Gvar.var_605 = 1;
                Gvar.var_607 = 1;
                Gvar.var_609 = 1;
            }
            if (Gvar.var_424 > Gvar.var_34 || Gvar.var_427 > Gvar.var_34) {
                Gvar.var_604 = 1;
                Gvar.var_606 = 1;
                Gvar.var_608 = 1;
            }
            if (Gvar.var_83[Gvar.var_2611].Var4 == 1) {
                Gvar.var_610 = 0;
                for (let cnt3 = 0; cnt3 < 50; ++cnt3) {
                    Gvar.var_2486 = Adap.rnd(12);
                    if (Gvar.var_2486 >= 0 && Gvar.var_2486 < 4) {
                        if (Gvar.var_66 < Gvar.var_423 && Gvar.var_67 < Gvar.var_424) {
                            Gvar.var_2486 = 9;
                        }
                        if (Gvar.var_66 == Gvar.var_423 && Gvar.var_67 < Gvar.var_424) {
                            Gvar.var_2486 = 10;
                        }
                        if (Gvar.var_66 > Gvar.var_423 && Gvar.var_67 < Gvar.var_424) {
                            Gvar.var_2486 = 11;
                        }
                        if (Gvar.var_66 < Gvar.var_423 && Gvar.var_67 == Gvar.var_424) {
                            Gvar.var_2486 = 7;
                        }
                        if (Gvar.var_66 > Gvar.var_423 && Gvar.var_67 == Gvar.var_424) {
                            Gvar.var_2486 = 8;
                        }
                        if (Gvar.var_66 < Gvar.var_423 && Gvar.var_67 > Gvar.var_424) {
                            Gvar.var_2486 = 4;
                        }
                        if (Gvar.var_66 == Gvar.var_423 && Gvar.var_67 > Gvar.var_424) {
                            Gvar.var_2486 = 5;
                        }
                        if (Gvar.var_66 > Gvar.var_423 && Gvar.var_67 > Gvar.var_424) {
                            Gvar.var_2486 = 6;
                        }
                    }
                    if (Gvar.var_2486 == 4 && Gvar.var_604 == 0 && Gvar.var_602 == 0 && Gvar.var_606 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_427] == 0) {
                        Gvar.var_423 = Gvar.var_423 - 1;
                        Gvar.var_424 = Gvar.var_424 + 1;
                        Gvar.var_83[Gvar.var_2611].Var5 = 1;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_2486 == 5 && Gvar.var_604 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0) {
                        Gvar.var_424 = Gvar.var_424 + 1;
                        Gvar.var_83[Gvar.var_2611].Var5 = 2;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_2486 == 6 && Gvar.var_604 == 0 && Gvar.var_603 == 0 && Gvar.var_608 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_427] == 0) {
                        Gvar.var_423 = Gvar.var_423 + 1;
                        Gvar.var_424 = Gvar.var_424 + 1;
                        Gvar.var_83[Gvar.var_2611].Var5 = 3;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_2486 == 7 && Gvar.var_602 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0) {
                        Gvar.var_423 = Gvar.var_423 - 1;
                        Gvar.var_83[Gvar.var_2611].Var5 = 4;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_2486 == 8 && Gvar.var_603 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0) {
                        Gvar.var_423 = Gvar.var_423 + 1;
                        Gvar.var_83[Gvar.var_2611].Var5 = 6;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_2486 == 9 && Gvar.var_602 == 0 && Gvar.var_605 == 0 && Gvar.var_607 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_428] == 0) {
                        Gvar.var_423 = Gvar.var_423 - 1;
                        Gvar.var_424 = Gvar.var_424 - 1;
                        Gvar.var_83[Gvar.var_2611].Var5 = 7;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_2486 == 10 && Gvar.var_605 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0) {
                        Gvar.var_424 = Gvar.var_424 - 1;
                        Gvar.var_83[Gvar.var_2611].Var5 = 8;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_2486 == 11 && Gvar.var_603 == 0 && Gvar.var_605 == 0 && Gvar.var_609 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_428] == 0) {
                        Gvar.var_423 = Gvar.var_423 + 1;
                        Gvar.var_424 = Gvar.var_424 - 1;
                        Gvar.var_83[Gvar.var_2611].Var5 = 9;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_423 < 5) {
                        Gvar.var_423 = 5;
                    }
                    if (Gvar.var_423 > Gvar.var_31) {
                        Gvar.var_423 = Gvar.var_31;
                    }
                    if (Gvar.var_424 < 5) {
                        Gvar.var_424 = 5;
                    }
                    if (Gvar.var_424 > Gvar.var_34) {
                        Gvar.var_424 = Gvar.var_34;
                    }
                    if (Gvar.var_71[Gvar.var_423][Gvar.var_424] == 13 || Gvar.var_65[Gvar.var_423][Gvar.var_424] == 1 || Gvar.var_82[Gvar.var_423][Gvar.var_424] > 0) {
                        Gvar.var_423 = Gvar.var_2619;
                        Gvar.var_424 = Gvar.var_2620;
                        Gvar.var_610 = 0;
                        Gvar.var_83[Gvar.var_2611].Var5 = Gvar.var_2615;
                    }
                    if (Gvar.var_610 == 1) {
                        break;
                    }
                }
            }
            if (Gvar.var_83[Gvar.var_2611].Var4 == 2) {
                Gvar.var_610 = 0;
                if (Gvar.var_2618 == 1 || Gvar.var_2617 == 1) {
                    Gvar.var_613 = Gvar.var_66;
                    Gvar.var_614 = Gvar.var_67;
                    Gvar.var_66 = Gvar.var_2644;
                    Gvar.var_67 = Gvar.var_2645;
                }
                await Func.func570();
                if (Gvar.var_610 == 1) {
                    Gvar.var_83[Gvar.var_2611].Var38 = 0;
                }
                if (Gvar.var_2618 == 1 || Gvar.var_2617 == 1) {
                    Gvar.var_2617 = 0;
                    Gvar.var_2618 = 0;
                    Gvar.var_66 = Gvar.var_613;
                    Gvar.var_67 = Gvar.var_614;
                }
            }
            if (Gvar.var_83[Gvar.var_2611].Var4 == 6) {
                Gvar.var_610 = 0;
                Gvar.var_2655 = Gvar.var_423;
                Gvar.var_2656 = Gvar.var_424;
                Gvar.var_2657 = Gvar.var_83[Gvar.var_2611].Var5;
                Gvar.var_2658 = Gvar.var_83[Gvar.var_2611].Var1;
                Gvar.var_2659 = Gvar.var_83[Gvar.var_2611].Var2;
                Gvar.var_2660 = Gvar.var_2658 - 1;
                if (Gvar.var_2660 < 5) {
                    Gvar.var_2660 = 5;
                }
                Gvar.var_2661 = Gvar.var_2658 + 1;
                if (Gvar.var_2661 > Gvar.var_33) {
                    Gvar.var_2661 = Gvar.var_33;
                }
                Gvar.var_2662 = Gvar.var_2659 + 1;
                if (Gvar.var_2662 > Gvar.var_34) {
                    Gvar.var_2662 = Gvar.var_34;
                }
                Gvar.var_2663 = Gvar.var_2659 - 1;
                if (Gvar.var_2663 < 5) {
                    Gvar.var_2663 = 5;
                }
                if (Gvar.var_83[Gvar.var_2611].Var5 == 2 && Gvar.var_610 == 0) {
                    if (Gvar.var_65[Gvar.var_2658][Gvar.var_2662] == 1 || Gvar.var_65[Gvar.var_2660][Gvar.var_2662] == 1 || Gvar.var_65[Gvar.var_2661][Gvar.var_2662] == 1) {
                        Gvar.var_83[Gvar.var_2611].Var5 = 8;
                        await Func.func571();
                        await Func.func572();
                    }
                }
                if (Gvar.var_83[Gvar.var_2611].Var5 == 8 && Gvar.var_610 == 0) {
                    if (Gvar.var_65[Gvar.var_2658][Gvar.var_2663] == 1 || Gvar.var_65[Gvar.var_2660][Gvar.var_2663] == 1 || Gvar.var_65[Gvar.var_2661][Gvar.var_2663] == 1) {
                        Gvar.var_83[Gvar.var_2611].Var5 = 2;
                        await Func.func571();
                        await Func.func572();
                    }
                }
                if (Gvar.var_83[Gvar.var_2611].Var5 == 4 && Gvar.var_610 == 0) {
                    if (Gvar.var_65[Gvar.var_2660][Gvar.var_2659] == 1 || Gvar.var_65[Gvar.var_2660][Gvar.var_2662] == 1 || Gvar.var_65[Gvar.var_2660][Gvar.var_2663] == 1) {
                        Gvar.var_83[Gvar.var_2611].Var5 = 6;
                        await Func.func571();
                        await Func.func572();
                    }
                }
                if (Gvar.var_83[Gvar.var_2611].Var5 == 6 && Gvar.var_610 == 0) {
                    if (Gvar.var_65[Gvar.var_2661][Gvar.var_2659] == 1 || Gvar.var_65[Gvar.var_2661][Gvar.var_2662] == 1 || Gvar.var_65[Gvar.var_2661][Gvar.var_2663] == 1) {
                        Gvar.var_83[Gvar.var_2611].Var5 = 4;
                        await Func.func571();
                        await Func.func572();
                    }
                }
                if (Gvar.var_83[Gvar.var_2611].Var5 == 1 && Gvar.var_610 == 0) {
                    if (Gvar.var_65[Gvar.var_2660][Gvar.var_2662] == 1 || Gvar.var_65[Gvar.var_2660][Gvar.var_2659] == 1 || Gvar.var_65[Gvar.var_2658][Gvar.var_2662] == 1) {
                        Gvar.var_83[Gvar.var_2611].Var5 = 9;
                        await Func.func571();
                        await Func.func572();
                    }
                }
                if (Gvar.var_83[Gvar.var_2611].Var5 == 3 && Gvar.var_610 == 0) {
                    if (Gvar.var_65[Gvar.var_2661][Gvar.var_2662] == 1 || Gvar.var_65[Gvar.var_2661][Gvar.var_2659] == 1 || Gvar.var_65[Gvar.var_2658][Gvar.var_2662] == 1) {
                        Gvar.var_83[Gvar.var_2611].Var5 = 7;
                        await Func.func571();
                        await Func.func572();
                    }
                }
                if (Gvar.var_83[Gvar.var_2611].Var5 == 7 && Gvar.var_610 == 0) {
                    if (Gvar.var_65[Gvar.var_2660][Gvar.var_2663] == 1 || Gvar.var_65[Gvar.var_2660][Gvar.var_2659] == 1 || Gvar.var_65[Gvar.var_2658][Gvar.var_2663] == 1) {
                        Gvar.var_83[Gvar.var_2611].Var5 = 3;
                        await Func.func571();
                        await Func.func572();
                    }
                }
                if (Gvar.var_83[Gvar.var_2611].Var5 == 9 && Gvar.var_610 == 0) {
                    if (Gvar.var_65[Gvar.var_2661][Gvar.var_2663] == 1 || Gvar.var_65[Gvar.var_2661][Gvar.var_2659] == 1 || Gvar.var_65[Gvar.var_2658][Gvar.var_2663] == 1) {
                        Gvar.var_83[Gvar.var_2611].Var5 = 1;
                        await Func.func571();
                        await Func.func572();
                    }
                }
                Gvar.var_2664 = Gvar.var_66 - 1;
                if (Gvar.var_2664 < 5) {
                    Gvar.var_2665 = 5;
                }
                Gvar.var_2666 = Gvar.var_66 + 1;
                if (Gvar.var_2666 > Gvar.var_33) {
                    Gvar.var_2666 = Gvar.var_33;
                }
                Gvar.var_2667 = Gvar.var_67 + 1;
                if (Gvar.var_2667 > Gvar.var_34) {
                    Gvar.var_2667 = Gvar.var_34;
                }
                Gvar.var_2668 = Gvar.var_67 - 1;
                if (Gvar.var_2668 < 5) {
                    Gvar.var_2668 = 5;
                }
                Gvar.var_2669 = 0;
                if (Gvar.var_201 == Gvar.var_83[Gvar.var_2611].Var10) {
                    Gvar.var_2669 = 1;
                }
                if (Gvar.var_201 == 14 && Gvar.var_71[Gvar.var_2664][Gvar.var_67] == Gvar.var_83[Gvar.var_2611].Var10) {
                    Gvar.var_2669 = 1;
                }
                if (Gvar.var_201 == 14 && Gvar.var_71[Gvar.var_2666][Gvar.var_67] == Gvar.var_83[Gvar.var_2611].Var10) {
                    Gvar.var_2669 = 1;
                }
                if (Gvar.var_201 == 14 && Gvar.var_71[Gvar.var_66][Gvar.var_2667] == Gvar.var_83[Gvar.var_2611].Var10) {
                    Gvar.var_2669 = 1;
                }
                if (Gvar.var_201 == 14 && Gvar.var_71[Gvar.var_66][Gvar.var_2668] == Gvar.var_83[Gvar.var_2611].Var10) {
                    Gvar.var_2669 = 1;
                }
                if (Gvar.var_83[Gvar.var_2611].Var10 != 14 && Gvar.var_2669 == 0 && Gvar.var_610 == 0) {
                    Gvar.var_611 = 0;
                    Gvar.var_615 = Gvar.var_83[Gvar.var_2611].Var10;
                    Gvar.var_613 = Gvar.var_66;
                    Gvar.var_614 = Gvar.var_67;
                    if (Gvar.var_83[Gvar.var_2611].Var33 == 4) {
                        if (Gvar.var_76[Gvar.var_615][4][1] != 0 && Gvar.var_611 == 0) {
                            Gvar.var_66 = Gvar.var_76[Gvar.var_615][4][1];
                            Gvar.var_67 = Gvar.var_76[Gvar.var_615][4][2];
                            if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                                Gvar.var_611 = 1;
                            }
                        }
                        if (Gvar.var_76[Gvar.var_615][2][1] != 0 && Gvar.var_611 == 0) {
                            Gvar.var_66 = Gvar.var_76[Gvar.var_615][2][1];
                            Gvar.var_67 = Gvar.var_76[Gvar.var_615][2][2];
                            if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                                Gvar.var_611 = 1;
                            }
                        }
                        if (Gvar.var_76[Gvar.var_615][1][1] != 0 && Gvar.var_611 == 0) {
                            Gvar.var_66 = Gvar.var_76[Gvar.var_615][1][1];
                            Gvar.var_67 = Gvar.var_76[Gvar.var_615][1][2];
                            if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                                Gvar.var_611 = 1;
                            }
                        }
                        if (Gvar.var_76[Gvar.var_615][3][1] != 0 && Gvar.var_611 == 0) {
                            Gvar.var_66 = Gvar.var_76[Gvar.var_615][3][1];
                            Gvar.var_67 = Gvar.var_76[Gvar.var_615][3][2];
                            if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                                Gvar.var_611 = 1;
                            }
                        }
                    }
                    if (Gvar.var_83[Gvar.var_2611].Var33 == 6) {
                        if (Gvar.var_76[Gvar.var_615][1][1] != 0 && Gvar.var_611 == 0) {
                            Gvar.var_66 = Gvar.var_76[Gvar.var_615][1][1];
                            Gvar.var_67 = Gvar.var_76[Gvar.var_615][1][2];
                            if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                                Gvar.var_611 = 1;
                            }
                        }
                        if (Gvar.var_76[Gvar.var_615][3][1] != 0 && Gvar.var_611 == 0) {
                            Gvar.var_66 = Gvar.var_76[Gvar.var_615][3][1];
                            Gvar.var_67 = Gvar.var_76[Gvar.var_615][3][2];
                            if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                                Gvar.var_611 = 1;
                            }
                        }
                        if (Gvar.var_76[Gvar.var_615][4][1] != 0 && Gvar.var_611 == 0) {
                            Gvar.var_66 = Gvar.var_76[Gvar.var_615][4][1];
                            Gvar.var_67 = Gvar.var_76[Gvar.var_615][4][2];
                            if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                                Gvar.var_611 = 1;
                            }
                        }
                        if (Gvar.var_76[Gvar.var_615][2][1] != 0 && Gvar.var_611 == 0) {
                            Gvar.var_66 = Gvar.var_76[Gvar.var_615][2][1];
                            Gvar.var_67 = Gvar.var_76[Gvar.var_615][2][2];
                            if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                                Gvar.var_611 = 1;
                            }
                        }
                    }
                    if (Gvar.var_83[Gvar.var_2611].Var33 == 8) {
                        if (Gvar.var_76[Gvar.var_615][2][1] != 0 && Gvar.var_611 == 0) {
                            Gvar.var_66 = Gvar.var_76[Gvar.var_615][2][1];
                            Gvar.var_67 = Gvar.var_76[Gvar.var_615][2][2];
                            if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                                Gvar.var_611 = 1;
                            }
                        }
                        if (Gvar.var_76[Gvar.var_615][1][1] != 0 && Gvar.var_611 == 0) {
                            Gvar.var_66 = Gvar.var_76[Gvar.var_615][1][1];
                            Gvar.var_67 = Gvar.var_76[Gvar.var_615][1][2];
                            if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                                Gvar.var_611 = 1;
                            }
                        }
                        if (Gvar.var_76[Gvar.var_615][3][1] != 0 && Gvar.var_611 == 0) {
                            Gvar.var_66 = Gvar.var_76[Gvar.var_615][3][1];
                            Gvar.var_67 = Gvar.var_76[Gvar.var_615][3][2];
                            if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                                Gvar.var_611 = 1;
                            }
                        }
                        if (Gvar.var_76[Gvar.var_615][4][1] != 0 && Gvar.var_611 == 0) {
                            Gvar.var_66 = Gvar.var_76[Gvar.var_615][4][1];
                            Gvar.var_67 = Gvar.var_76[Gvar.var_615][4][2];
                            if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                                Gvar.var_611 = 1;
                            }
                        }
                    }
                    if (Gvar.var_83[Gvar.var_2611].Var33 == 2) {
                        if (Gvar.var_76[Gvar.var_615][3][1] != 0 && Gvar.var_611 == 0) {
                            Gvar.var_66 = Gvar.var_76[Gvar.var_615][3][1];
                            Gvar.var_67 = Gvar.var_76[Gvar.var_615][3][2];
                            if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                                Gvar.var_611 = 1;
                            }
                        }
                        if (Gvar.var_76[Gvar.var_615][4][1] != 0 && Gvar.var_611 == 0) {
                            Gvar.var_66 = Gvar.var_76[Gvar.var_615][4][1];
                            Gvar.var_67 = Gvar.var_76[Gvar.var_615][4][2];
                            if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                                Gvar.var_611 = 1;
                            }
                        }
                        if (Gvar.var_76[Gvar.var_615][2][1] != 0 && Gvar.var_611 == 0) {
                            Gvar.var_66 = Gvar.var_76[Gvar.var_615][2][1];
                            Gvar.var_67 = Gvar.var_76[Gvar.var_615][2][2];
                            if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                                Gvar.var_611 = 1;
                            }
                        }
                        if (Gvar.var_76[Gvar.var_615][1][1] != 0 && Gvar.var_611 == 0) {
                            Gvar.var_66 = Gvar.var_76[Gvar.var_615][1][1];
                            Gvar.var_67 = Gvar.var_76[Gvar.var_615][1][2];
                            if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                                Gvar.var_611 = 1;
                            }
                        }
                    }
                    if (Gvar.var_83[Gvar.var_2611].Var33 == 5) {
                        if (Gvar.var_76[Gvar.var_615][3][1] != 0 && Gvar.var_611 == 0) {
                            Gvar.var_66 = Gvar.var_76[Gvar.var_615][3][1];
                            Gvar.var_67 = Gvar.var_76[Gvar.var_615][3][2];
                            if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                                Gvar.var_611 = 1;
                            }
                        }
                        if (Gvar.var_76[Gvar.var_615][4][1] != 0 && Gvar.var_611 == 0) {
                            Gvar.var_66 = Gvar.var_76[Gvar.var_615][4][1];
                            Gvar.var_67 = Gvar.var_76[Gvar.var_615][4][2];
                            if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                                Gvar.var_611 = 1;
                            }
                        }
                        if (Gvar.var_76[Gvar.var_615][2][1] != 0 && Gvar.var_611 == 0) {
                            Gvar.var_66 = Gvar.var_76[Gvar.var_615][2][1];
                            Gvar.var_67 = Gvar.var_76[Gvar.var_615][2][2];
                            if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                                Gvar.var_611 = 1;
                            }
                        }
                        if (Gvar.var_76[Gvar.var_615][1][1] != 0 && Gvar.var_611 == 0) {
                            Gvar.var_66 = Gvar.var_76[Gvar.var_615][1][1];
                            Gvar.var_67 = Gvar.var_76[Gvar.var_615][1][2];
                            if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                                Gvar.var_611 = 1;
                            }
                        }
                    }
                    if (Gvar.var_611 == 1) {
                        await Func.func570();
                    }
                    Gvar.var_66 = Gvar.var_613;
                    Gvar.var_67 = Gvar.var_614;
                }
                if (Gvar.var_83[Gvar.var_2611].Var10 != 14 && Gvar.var_2669 == 1 && Gvar.var_610 == 0) {
                    if (Gvar.var_83[Gvar.var_2611].Var34 == 14) {
                        Gvar.var_2670 = 0;
                        if (Gvar.var_83[Gvar.var_2611].Var5 == 2 && Gvar.var_2670 == 0) {
                            Gvar.var_83[Gvar.var_2611].Var5 = 6;
                            Gvar.var_2670 = 1;
                        }
                        if (Gvar.var_83[Gvar.var_2611].Var5 == 8 && Gvar.var_2670 == 0) {
                            Gvar.var_83[Gvar.var_2611].Var5 = 4;
                            Gvar.var_2670 = 1;
                        }
                        if (Gvar.var_83[Gvar.var_2611].Var5 == 4 && Gvar.var_2670 == 0) {
                            Gvar.var_83[Gvar.var_2611].Var5 = 2;
                            Gvar.var_2670 = 1;
                        }
                        if (Gvar.var_83[Gvar.var_2611].Var5 == 6 && Gvar.var_2670 == 0) {
                            Gvar.var_83[Gvar.var_2611].Var5 = 8;
                            Gvar.var_2670 = 1;
                        }
                        if (Gvar.var_83[Gvar.var_2611].Var5 == 1 && Gvar.var_2670 == 0) {
                            Gvar.var_83[Gvar.var_2611].Var5 = 2;
                            Gvar.var_2670 = 1;
                        }
                        if (Gvar.var_83[Gvar.var_2611].Var5 == 3 && Gvar.var_2670 == 0) {
                            Gvar.var_83[Gvar.var_2611].Var5 = 2;
                            Gvar.var_2670 = 1;
                        }
                        if (Gvar.var_83[Gvar.var_2611].Var5 == 7 && Gvar.var_2670 == 0) {
                            Gvar.var_83[Gvar.var_2611].Var5 = 8;
                            Gvar.var_2670 = 1;
                        }
                        if (Gvar.var_83[Gvar.var_2611].Var5 == 9 && Gvar.var_2670 == 0) {
                            Gvar.var_83[Gvar.var_2611].Var5 = 8;
                            Gvar.var_2670 = 1;
                        }
                    }
                    await Func.func571();
                }
                if (Gvar.var_83[Gvar.var_2611].Var10 != 14 && Gvar.var_610 == 1) {
                    Gvar.var_2658 = Gvar.var_423;
                    Gvar.var_2659 = Gvar.var_424;
                    Gvar.var_2660 = Gvar.var_2658 - 1;
                    if (Gvar.var_2660 < 5) {
                        Gvar.var_2660 = 5;
                    }
                    Gvar.var_2661 = Gvar.var_2658 + 1;
                    if (Gvar.var_2661 > Gvar.var_33) {
                        Gvar.var_2661 = Gvar.var_33;
                    }
                    Gvar.var_2662 = Gvar.var_2659 + 1;
                    if (Gvar.var_2662 > Gvar.var_34) {
                        Gvar.var_2662 = Gvar.var_34;
                    }
                    Gvar.var_2663 = Gvar.var_2659 - 1;
                    if (Gvar.var_2663 < 5) {
                        Gvar.var_2663 = 5;
                    }
                    if (Gvar.var_83[Gvar.var_2611].Var5 == 2) {
                        if (Gvar.var_65[Gvar.var_2658][Gvar.var_2662] == 1 || Gvar.var_65[Gvar.var_2660][Gvar.var_2662] == 1 || Gvar.var_65[Gvar.var_2661][Gvar.var_2662] == 1) {
                            Gvar.var_83[Gvar.var_2611].Var5 = 8;
                            Gvar.var_423 = Gvar.var_2655;
                            Gvar.var_424 = Gvar.var_2656;
                            Gvar.var_610 = 0;
                        }
                    }
                    if (Gvar.var_83[Gvar.var_2611].Var5 == 8) {
                        if (Gvar.var_65[Gvar.var_2658][Gvar.var_2663] == 1 || Gvar.var_65[Gvar.var_2660][Gvar.var_2663] == 1 || Gvar.var_65[Gvar.var_2661][Gvar.var_2663] == 1) {
                            Gvar.var_83[Gvar.var_2611].Var5 = 2;
                            Gvar.var_423 = Gvar.var_2655;
                            Gvar.var_424 = Gvar.var_2656;
                            Gvar.var_610 = 0;
                        }
                    }
                    if (Gvar.var_83[Gvar.var_2611].Var5 == 4) {
                        if (Gvar.var_65[Gvar.var_2660][Gvar.var_2659] == 1 || Gvar.var_65[Gvar.var_2660][Gvar.var_2662] == 1 || Gvar.var_65[Gvar.var_2660][Gvar.var_2663] == 1) {
                            Gvar.var_83[Gvar.var_2611].Var5 = 6;
                            Gvar.var_423 = Gvar.var_2655;
                            Gvar.var_424 = Gvar.var_2656;
                            Gvar.var_610 = 0;
                        }
                    }
                    if (Gvar.var_83[Gvar.var_2611].Var5 == 6) {
                        if (Gvar.var_65[Gvar.var_2661][Gvar.var_2659] == 1 || Gvar.var_65[Gvar.var_2661][Gvar.var_2662] == 1 || Gvar.var_65[Gvar.var_2661][Gvar.var_2663] == 1) {
                            Gvar.var_83[Gvar.var_2611].Var5 = 4;
                            Gvar.var_423 = Gvar.var_2655;
                            Gvar.var_424 = Gvar.var_2656;
                            Gvar.var_610 = 0;
                        }
                    }
                    if (Gvar.var_83[Gvar.var_2611].Var5 == 1) {
                        if (Gvar.var_65[Gvar.var_2660][Gvar.var_2662] == 1 || Gvar.var_65[Gvar.var_2660][Gvar.var_2659] == 1 || Gvar.var_65[Gvar.var_2658][Gvar.var_2662] == 1) {
                            Gvar.var_83[Gvar.var_2611].Var5 = 9;
                            Gvar.var_423 = Gvar.var_2655;
                            Gvar.var_424 = Gvar.var_2656;
                            Gvar.var_610 = 0;
                        }
                    }
                    if (Gvar.var_83[Gvar.var_2611].Var5 == 3) {
                        if (Gvar.var_65[Gvar.var_2661][Gvar.var_2662] == 1 || Gvar.var_65[Gvar.var_2661][Gvar.var_2659] == 1 || Gvar.var_65[Gvar.var_2658][Gvar.var_2662] == 1) {
                            Gvar.var_83[Gvar.var_2611].Var5 = 7;
                            Gvar.var_423 = Gvar.var_2655;
                            Gvar.var_424 = Gvar.var_2656;
                            Gvar.var_610 = 0;
                        }
                    }
                    if (Gvar.var_83[Gvar.var_2611].Var5 == 7) {
                        if (Gvar.var_65[Gvar.var_2660][Gvar.var_2663] == 1 || Gvar.var_65[Gvar.var_2660][Gvar.var_2659] == 1 || Gvar.var_65[Gvar.var_2658][Gvar.var_2663] == 1) {
                            Gvar.var_83[Gvar.var_2611].Var5 = 3;
                            Gvar.var_423 = Gvar.var_2655;
                            Gvar.var_424 = Gvar.var_2656;
                            Gvar.var_610 = 0;
                        }
                    }
                    if (Gvar.var_83[Gvar.var_2611].Var5 == 9) {
                        if (Gvar.var_65[Gvar.var_2661][Gvar.var_2663] == 1 || Gvar.var_65[Gvar.var_2661][Gvar.var_2659] == 1 || Gvar.var_65[Gvar.var_2658][Gvar.var_2663] == 1) {
                            Gvar.var_83[Gvar.var_2611].Var5 = 1;
                            Gvar.var_423 = Gvar.var_2655;
                            Gvar.var_424 = Gvar.var_2656;
                            Gvar.var_610 = 0;
                        }
                    }
                    if (Gvar.var_610 == 0) {
                        await Func.func571();
                        await Func.func572();
                    }
                }
                if (Gvar.var_83[Gvar.var_2611].Var10 == 14 && Gvar.var_610 == 0) {
                    if (Gvar.var_83[Gvar.var_2611].Var5 == 1 && Gvar.var_610 == 0) {
                        if (Gvar.var_610 == 0 && Gvar.var_606 == 0 && Gvar.var_602 == 0 && Gvar.var_604 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_427] != 13) {
                            Gvar.var_423 = Gvar.var_423 - 1;
                            Gvar.var_424 = Gvar.var_424 + 1;
                            Gvar.var_83[Gvar.var_2611].Var5 = 1;
                            Gvar.var_610 = 1;
                        }
                        if (Gvar.var_610 == 0 && Gvar.var_602 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 13) {
                            Gvar.var_423 = Gvar.var_423 - 1;
                            Gvar.var_83[Gvar.var_2611].Var5 = 4;
                            Gvar.var_610 = 1;
                        }
                        if (Gvar.var_610 == 0 && Gvar.var_604 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 13) {
                            Gvar.var_424 = Gvar.var_424 + 1;
                            Gvar.var_83[Gvar.var_2611].Var5 = 2;
                            Gvar.var_610 = 1;
                        }
                    }
                    if (Gvar.var_83[Gvar.var_2611].Var5 == 3 && Gvar.var_610 == 0) {
                        if (Gvar.var_610 == 0 && Gvar.var_608 == 0 && Gvar.var_603 == 0 && Gvar.var_604 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_427] != 13) {
                            Gvar.var_423 = Gvar.var_423 + 1;
                            Gvar.var_424 = Gvar.var_424 + 1;
                            Gvar.var_83[Gvar.var_2611].Var5 = 3;
                            Gvar.var_610 = 1;
                        }
                        if (Gvar.var_610 == 0 && Gvar.var_603 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 13) {
                            Gvar.var_423 = Gvar.var_423 + 1;
                            Gvar.var_83[Gvar.var_2611].Var5 = 6;
                            Gvar.var_610 = 1;
                        }
                        if (Gvar.var_610 == 0 && Gvar.var_604 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 13) {
                            Gvar.var_424 = Gvar.var_424 + 1;
                            Gvar.var_83[Gvar.var_2611].Var5 = 2;
                            Gvar.var_610 = 1;
                        }
                    }
                    if (Gvar.var_83[Gvar.var_2611].Var5 == 7 && Gvar.var_610 == 0) {
                        if (Gvar.var_610 == 0 && Gvar.var_607 == 0 && Gvar.var_602 == 0 && Gvar.var_605 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_428] != 13) {
                            Gvar.var_423 = Gvar.var_423 - 1;
                            Gvar.var_424 = Gvar.var_424 - 1;
                            Gvar.var_83[Gvar.var_2611].Var5 = 7;
                            Gvar.var_610 = 1;
                        }
                        if (Gvar.var_610 == 0 && Gvar.var_602 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 13) {
                            Gvar.var_423 = Gvar.var_423 - 1;
                            Gvar.var_83[Gvar.var_2611].Var5 = 4;
                            Gvar.var_610 = 1;
                        }
                        if (Gvar.var_610 == 0 && Gvar.var_605 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 13) {
                            Gvar.var_424 = Gvar.var_424 - 1;
                            Gvar.var_83[Gvar.var_2611].Var5 = 8;
                            Gvar.var_610 = 1;
                        }
                    }
                    if (Gvar.var_83[Gvar.var_2611].Var5 == 9 && Gvar.var_610 == 0) {
                        if (Gvar.var_610 == 0 && Gvar.var_609 == 0 && Gvar.var_603 == 0 && Gvar.var_605 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_428] != 13) {
                            Gvar.var_423 = Gvar.var_423 + 1;
                            Gvar.var_424 = Gvar.var_424 - 1;
                            Gvar.var_83[Gvar.var_2611].Var5 = 9;
                            Gvar.var_610 = 1;
                        }
                        if (Gvar.var_610 == 0 && Gvar.var_603 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 13) {
                            Gvar.var_423 = Gvar.var_423 + 1;
                            Gvar.var_83[Gvar.var_2611].Var5 = 6;
                            Gvar.var_610 = 1;
                        }
                        if (Gvar.var_610 == 0 && Gvar.var_605 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 13) {
                            Gvar.var_424 = Gvar.var_424 - 1;
                            Gvar.var_83[Gvar.var_2611].Var5 = 8;
                            Gvar.var_610 = 1;
                        }
                    }
                    if (Gvar.var_83[Gvar.var_2611].Var5 == 2 && Gvar.var_610 == 0) {
                        if (Gvar.var_610 == 0 && Gvar.var_604 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 13) {
                            Gvar.var_424 = Gvar.var_424 + 1;
                            Gvar.var_83[Gvar.var_2611].Var5 = 2;
                            Gvar.var_610 = 1;
                        }
                        if (Gvar.var_610 == 0 && Gvar.var_603 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 13) {
                            Gvar.var_423 = Gvar.var_423 + 1;
                            Gvar.var_83[Gvar.var_2611].Var5 = 6;
                            Gvar.var_610 = 1;
                        }
                        if (Gvar.var_610 == 0 && Gvar.var_602 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 13) {
                            Gvar.var_423 = Gvar.var_423 - 1;
                            Gvar.var_83[Gvar.var_2611].Var5 = 4;
                            Gvar.var_610 = 1;
                        }
                    }
                    if (Gvar.var_83[Gvar.var_2611].Var5 == 8 && Gvar.var_610 == 0) {
                        if (Gvar.var_610 == 0 && Gvar.var_605 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 13) {
                            Gvar.var_424 = Gvar.var_424 - 1;
                            Gvar.var_83[Gvar.var_2611].Var5 = 8;
                            Gvar.var_610 = 1;
                        }
                        if (Gvar.var_610 == 0 && Gvar.var_602 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 13) {
                            Gvar.var_423 = Gvar.var_423 - 1;
                            Gvar.var_83[Gvar.var_2611].Var5 = 4;
                            Gvar.var_610 = 1;
                        }
                        if (Gvar.var_610 == 0 && Gvar.var_603 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 13) {
                            Gvar.var_423 = Gvar.var_423 + 1;
                            Gvar.var_83[Gvar.var_2611].Var5 = 6;
                            Gvar.var_610 = 1;
                        }
                    }
                    if (Gvar.var_83[Gvar.var_2611].Var5 == 4 && Gvar.var_610 == 0) {
                        if (Gvar.var_610 == 0 && Gvar.var_602 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 13) {
                            Gvar.var_423 = Gvar.var_423 - 1;
                            Gvar.var_83[Gvar.var_2611].Var5 = 4;
                            Gvar.var_610 = 1;
                        }
                        if (Gvar.var_610 == 0 && Gvar.var_605 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 13) {
                            Gvar.var_424 = Gvar.var_424 - 1;
                            Gvar.var_83[Gvar.var_2611].Var5 = 8;
                            Gvar.var_610 = 1;
                        }
                        if (Gvar.var_610 == 0 && Gvar.var_604 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 13) {
                            Gvar.var_424 = Gvar.var_424 + 1;
                            Gvar.var_83[Gvar.var_2611].Var5 = 2;
                            Gvar.var_610 = 1;
                        }
                    }
                    if (Gvar.var_83[Gvar.var_2611].Var5 == 6 && Gvar.var_610 == 0) {
                        if (Gvar.var_610 == 0 && Gvar.var_603 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 13) {
                            Gvar.var_423 = Gvar.var_423 + 1;
                            Gvar.var_83[Gvar.var_2611].Var5 = 6;
                            Gvar.var_610 = 1;
                        }
                        if (Gvar.var_610 == 0 && Gvar.var_604 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 13) {
                            Gvar.var_424 = Gvar.var_424 + 1;
                            Gvar.var_83[Gvar.var_2611].Var5 = 2;
                            Gvar.var_610 = 1;
                        }
                        if (Gvar.var_610 == 0 && Gvar.var_605 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 13) {
                            Gvar.var_424 = Gvar.var_424 - 1;
                            Gvar.var_83[Gvar.var_2611].Var5 = 8;
                            Gvar.var_610 = 1;
                        }
                    }
                }
                if (Gvar.var_610 == 1) {
                    Gvar.var_83[Gvar.var_2611].Var38 = 0;
                }
                if (Gvar.var_610 == 0) {
                    Gvar.var_83[Gvar.var_2611].Var38 = 0;
                    Gvar.var_618 = 0;
                    if (Gvar.var_618 == 0 && Gvar.var_83[Gvar.var_2611].Var5 == 2) {
                        Gvar.var_83[Gvar.var_2611].Var5 = 8;
                        Gvar.var_618 = 1;
                    }
                    if (Gvar.var_618 == 0 && Gvar.var_83[Gvar.var_2611].Var5 == 8) {
                        Gvar.var_83[Gvar.var_2611].Var5 = 2;
                        Gvar.var_618 = 1;
                    }
                    if (Gvar.var_618 == 0 && Gvar.var_83[Gvar.var_2611].Var5 == 6) {
                        Gvar.var_83[Gvar.var_2611].Var5 = 4;
                        Gvar.var_618 = 1;
                    }
                    if (Gvar.var_618 == 0 && Gvar.var_83[Gvar.var_2611].Var5 == 4) {
                        Gvar.var_83[Gvar.var_2611].Var5 = 6;
                        Gvar.var_618 = 1;
                    }
                    if (Gvar.var_618 == 0 && Gvar.var_83[Gvar.var_2611].Var5 == 1) {
                        Gvar.var_83[Gvar.var_2611].Var5 = 2;
                        Gvar.var_618 = 1;
                    }
                    if (Gvar.var_618 == 0 && Gvar.var_83[Gvar.var_2611].Var5 == 3) {
                        Gvar.var_83[Gvar.var_2611].Var5 = 2;
                        Gvar.var_618 = 1;
                    }
                    if (Gvar.var_618 == 0 && Gvar.var_83[Gvar.var_2611].Var5 == 7) {
                        Gvar.var_83[Gvar.var_2611].Var5 = 8;
                        Gvar.var_618 = 1;
                    }
                    if (Gvar.var_618 == 0 && Gvar.var_83[Gvar.var_2611].Var5 == 9) {
                        Gvar.var_83[Gvar.var_2611].Var5 = 8;
                        Gvar.var_618 = 1;
                    }
                }
            }
            if (Gvar.var_83[Gvar.var_2611].Var4 == 3) {
                Gvar.var_610 = 0;
                Gvar.var_611 = 0;
                if (Gvar.var_83[Gvar.var_2611].Var10 != 14) {
                    Gvar.var_615 = Gvar.var_83[Gvar.var_2611].Var10;
                    Gvar.var_613 = Gvar.var_66;
                    Gvar.var_614 = Gvar.var_67;
                    if (Gvar.var_83[Gvar.var_2611].Var33 == 4) {
                        if (Gvar.var_76[Gvar.var_615][4][1] != 0 && Gvar.var_611 == 0) {
                            Gvar.var_66 = Gvar.var_76[Gvar.var_615][4][1];
                            Gvar.var_67 = Gvar.var_76[Gvar.var_615][4][2];
                            if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                                Gvar.var_611 = 1;
                            }
                        }
                        if (Gvar.var_76[Gvar.var_615][2][1] != 0 && Gvar.var_611 == 0) {
                            Gvar.var_66 = Gvar.var_76[Gvar.var_615][2][1];
                            Gvar.var_67 = Gvar.var_76[Gvar.var_615][2][2];
                            if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                                Gvar.var_611 = 1;
                            }
                        }
                        if (Gvar.var_76[Gvar.var_615][1][1] != 0 && Gvar.var_611 == 0) {
                            Gvar.var_66 = Gvar.var_76[Gvar.var_615][1][1];
                            Gvar.var_67 = Gvar.var_76[Gvar.var_615][1][2];
                            if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                                Gvar.var_611 = 1;
                            }
                        }
                        if (Gvar.var_76[Gvar.var_615][3][1] != 0 && Gvar.var_611 == 0) {
                            Gvar.var_66 = Gvar.var_76[Gvar.var_615][3][1];
                            Gvar.var_67 = Gvar.var_76[Gvar.var_615][3][2];
                            if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                                Gvar.var_611 = 1;
                            }
                        }
                    }
                    if (Gvar.var_83[Gvar.var_2611].Var33 == 6) {
                        if (Gvar.var_76[Gvar.var_615][1][1] != 0 && Gvar.var_611 == 0) {
                            Gvar.var_66 = Gvar.var_76[Gvar.var_615][1][1];
                            Gvar.var_67 = Gvar.var_76[Gvar.var_615][1][2];
                            if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                                Gvar.var_611 = 1;
                            }
                        }
                        if (Gvar.var_76[Gvar.var_615][3][1] != 0 && Gvar.var_611 == 0) {
                            Gvar.var_66 = Gvar.var_76[Gvar.var_615][3][1];
                            Gvar.var_67 = Gvar.var_76[Gvar.var_615][3][2];
                            if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                                Gvar.var_611 = 1;
                            }
                        }
                        if (Gvar.var_76[Gvar.var_615][4][1] != 0 && Gvar.var_611 == 0) {
                            Gvar.var_66 = Gvar.var_76[Gvar.var_615][4][1];
                            Gvar.var_67 = Gvar.var_76[Gvar.var_615][4][2];
                            if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                                Gvar.var_611 = 1;
                            }
                        }
                        if (Gvar.var_76[Gvar.var_615][2][1] != 0 && Gvar.var_611 == 0) {
                            Gvar.var_66 = Gvar.var_76[Gvar.var_615][2][1];
                            Gvar.var_67 = Gvar.var_76[Gvar.var_615][2][2];
                            if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                                Gvar.var_611 = 1;
                            }
                        }
                    }
                    if (Gvar.var_83[Gvar.var_2611].Var33 == 8) {
                        if (Gvar.var_76[Gvar.var_615][2][1] != 0 && Gvar.var_611 == 0) {
                            Gvar.var_66 = Gvar.var_76[Gvar.var_615][2][1];
                            Gvar.var_67 = Gvar.var_76[Gvar.var_615][2][2];
                            if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                                Gvar.var_611 = 1;
                            }
                        }
                        if (Gvar.var_76[Gvar.var_615][1][1] != 0 && Gvar.var_611 == 0) {
                            Gvar.var_66 = Gvar.var_76[Gvar.var_615][1][1];
                            Gvar.var_67 = Gvar.var_76[Gvar.var_615][1][2];
                            if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                                Gvar.var_611 = 1;
                            }
                        }
                        if (Gvar.var_76[Gvar.var_615][3][1] != 0 && Gvar.var_611 == 0) {
                            Gvar.var_66 = Gvar.var_76[Gvar.var_615][3][1];
                            Gvar.var_67 = Gvar.var_76[Gvar.var_615][3][2];
                            if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                                Gvar.var_611 = 1;
                            }
                        }
                        if (Gvar.var_76[Gvar.var_615][4][1] != 0 && Gvar.var_611 == 0) {
                            Gvar.var_66 = Gvar.var_76[Gvar.var_615][4][1];
                            Gvar.var_67 = Gvar.var_76[Gvar.var_615][4][2];
                            if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                                Gvar.var_611 = 1;
                            }
                        }
                    }
                    if (Gvar.var_83[Gvar.var_2611].Var33 == 2) {
                        if (Gvar.var_76[Gvar.var_615][3][1] != 0 && Gvar.var_611 == 0) {
                            Gvar.var_66 = Gvar.var_76[Gvar.var_615][3][1];
                            Gvar.var_67 = Gvar.var_76[Gvar.var_615][3][2];
                            if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                                Gvar.var_611 = 1;
                            }
                        }
                        if (Gvar.var_76[Gvar.var_615][4][1] != 0 && Gvar.var_611 == 0) {
                            Gvar.var_66 = Gvar.var_76[Gvar.var_615][4][1];
                            Gvar.var_67 = Gvar.var_76[Gvar.var_615][4][2];
                            if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                                Gvar.var_611 = 1;
                            }
                        }
                        if (Gvar.var_76[Gvar.var_615][2][1] != 0 && Gvar.var_611 == 0) {
                            Gvar.var_66 = Gvar.var_76[Gvar.var_615][2][1];
                            Gvar.var_67 = Gvar.var_76[Gvar.var_615][2][2];
                            if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                                Gvar.var_611 = 1;
                            }
                        }
                        if (Gvar.var_76[Gvar.var_615][1][1] != 0 && Gvar.var_611 == 0) {
                            Gvar.var_66 = Gvar.var_76[Gvar.var_615][1][1];
                            Gvar.var_67 = Gvar.var_76[Gvar.var_615][1][2];
                            if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                                Gvar.var_611 = 1;
                            }
                        }
                    }
                    if (Gvar.var_83[Gvar.var_2611].Var33 == 5) {
                        Gvar.var_66 = Gvar.var_188;
                        Gvar.var_67 = Gvar.var_189;
                        if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                            Gvar.var_611 = 1;
                        }
                    }
                    if (Gvar.var_611 == 1) {
                        await Func.func570();
                    }
                    if (Gvar.var_610 == 1) {
                        Gvar.var_83[Gvar.var_2611].Var38 = 0;
                    }
                    if (Gvar.var_610 == 0) {
                        Gvar.var_83[Gvar.var_2611].Var38 = Gvar.var_83[Gvar.var_2611].Var38 + 1;
                        if (Gvar.var_131 >= 1 || Gvar.var_144 >= 1 || Gvar.var_218 >= 1) {
                            Gvar.var_83[Gvar.var_2611].Var38 = 6;
                        }
                        if (Gvar.var_83[Gvar.var_2611].Var38 > 5) {
                            Gvar.var_83[Gvar.var_2611].Var38 = 0;
                            Gvar.var_617 = 0;
                            if (Gvar.var_617 == 0 && Gvar.var_83[Gvar.var_2611].Var33 == 2) {
                                Gvar.var_83[Gvar.var_2611].Var33 = 4;
                                Gvar.var_617 = 1;
                            }
                            if (Gvar.var_617 == 0 && Gvar.var_83[Gvar.var_2611].Var33 == 6) {
                                Gvar.var_83[Gvar.var_2611].Var33 = 2;
                                Gvar.var_617 = 1;
                            }
                            if (Gvar.var_617 == 0 && Gvar.var_83[Gvar.var_2611].Var33 == 8) {
                                Gvar.var_83[Gvar.var_2611].Var33 = 6;
                                Gvar.var_617 = 1;
                            }
                            if (Gvar.var_617 == 0 && Gvar.var_83[Gvar.var_2611].Var33 == 4) {
                                Gvar.var_83[Gvar.var_2611].Var33 = 8;
                                Gvar.var_617 = 1;
                            }
                            if (Gvar.var_617 == 0 && Gvar.var_83[Gvar.var_2611].Var33 == 5) {
                                Gvar.var_83[Gvar.var_2611].Var33 = 8;
                                Gvar.var_617 = 1;
                            }
                        }
                    }
                    Gvar.var_66 = Gvar.var_613;
                    Gvar.var_67 = Gvar.var_614;
                }
                if (Gvar.var_83[Gvar.var_2611].Var10 == 14 || Gvar.var_611 == 0) {
                    if (Gvar.var_83[Gvar.var_2611].Var5 == 1 && Gvar.var_610 == 0) {
                        if (Gvar.var_610 == 0 && Gvar.var_606 == 0 && Gvar.var_602 == 0 && Gvar.var_604 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_427] != 13) {
                            Gvar.var_423 = Gvar.var_423 - 1;
                            Gvar.var_424 = Gvar.var_424 + 1;
                            Gvar.var_83[Gvar.var_2611].Var5 = 1;
                            Gvar.var_610 = 1;
                        }
                        if (Gvar.var_610 == 0 && Gvar.var_602 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 13) {
                            Gvar.var_423 = Gvar.var_423 - 1;
                            Gvar.var_83[Gvar.var_2611].Var5 = 4;
                            Gvar.var_610 = 1;
                        }
                        if (Gvar.var_610 == 0 && Gvar.var_604 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 13) {
                            Gvar.var_424 = Gvar.var_424 + 1;
                            Gvar.var_83[Gvar.var_2611].Var5 = 2;
                            Gvar.var_610 = 1;
                        }
                    }
                    if (Gvar.var_83[Gvar.var_2611].Var5 == 3 && Gvar.var_610 == 0) {
                        if (Gvar.var_610 == 0 && Gvar.var_608 == 0 && Gvar.var_603 == 0 && Gvar.var_604 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_427] != 13) {
                            Gvar.var_423 = Gvar.var_423 + 1;
                            Gvar.var_424 = Gvar.var_424 + 1;
                            Gvar.var_83[Gvar.var_2611].Var5 = 3;
                            Gvar.var_610 = 1;
                        }
                        if (Gvar.var_610 == 0 && Gvar.var_603 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 13) {
                            Gvar.var_423 = Gvar.var_423 + 1;
                            Gvar.var_83[Gvar.var_2611].Var5 = 6;
                            Gvar.var_610 = 1;
                        }
                        if (Gvar.var_610 == 0 && Gvar.var_604 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 13) {
                            Gvar.var_424 = Gvar.var_424 + 1;
                            Gvar.var_83[Gvar.var_2611].Var5 = 2;
                            Gvar.var_610 = 1;
                        }
                    }
                    if (Gvar.var_83[Gvar.var_2611].Var5 == 7 && Gvar.var_610 == 0) {
                        if (Gvar.var_610 == 0 && Gvar.var_607 == 0 && Gvar.var_602 == 0 && Gvar.var_605 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_428] != 13) {
                            Gvar.var_423 = Gvar.var_423 - 1;
                            Gvar.var_424 = Gvar.var_424 - 1;
                            Gvar.var_83[Gvar.var_2611].Var5 = 7;
                            Gvar.var_610 = 1;
                        }
                        if (Gvar.var_610 == 0 && Gvar.var_602 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 13) {
                            Gvar.var_423 = Gvar.var_423 - 1;
                            Gvar.var_83[Gvar.var_2611].Var5 = 4;
                            Gvar.var_610 = 1;
                        }
                        if (Gvar.var_610 == 0 && Gvar.var_605 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 13) {
                            Gvar.var_424 = Gvar.var_424 - 1;
                            Gvar.var_83[Gvar.var_2611].Var5 = 8;
                            Gvar.var_610 = 1;
                        }
                    }
                    if (Gvar.var_83[Gvar.var_2611].Var5 == 9 && Gvar.var_610 == 0) {
                        if (Gvar.var_610 == 0 && Gvar.var_609 == 0 && Gvar.var_603 == 0 && Gvar.var_605 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_428] != 13) {
                            Gvar.var_423 = Gvar.var_423 + 1;
                            Gvar.var_424 = Gvar.var_424 - 1;
                            Gvar.var_83[Gvar.var_2611].Var5 = 9;
                            Gvar.var_610 = 1;
                        }
                        if (Gvar.var_610 == 0 && Gvar.var_603 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 13) {
                            Gvar.var_423 = Gvar.var_423 + 1;
                            Gvar.var_83[Gvar.var_2611].Var5 = 6;
                            Gvar.var_610 = 1;
                        }
                        if (Gvar.var_610 == 0 && Gvar.var_605 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 13) {
                            Gvar.var_424 = Gvar.var_424 - 1;
                            Gvar.var_83[Gvar.var_2611].Var5 = 8;
                            Gvar.var_610 = 1;
                        }
                    }
                    if (Gvar.var_83[Gvar.var_2611].Var5 == 2 && Gvar.var_610 == 0) {
                        if (Gvar.var_610 == 0 && Gvar.var_604 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 13) {
                            Gvar.var_424 = Gvar.var_424 + 1;
                            Gvar.var_83[Gvar.var_2611].Var5 = 2;
                            Gvar.var_610 = 1;
                        }
                        if (Gvar.var_610 == 0 && Gvar.var_603 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 13) {
                            Gvar.var_423 = Gvar.var_423 + 1;
                            Gvar.var_83[Gvar.var_2611].Var5 = 6;
                            Gvar.var_610 = 1;
                        }
                        if (Gvar.var_610 == 0 && Gvar.var_602 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 13) {
                            Gvar.var_423 = Gvar.var_423 - 1;
                            Gvar.var_83[Gvar.var_2611].Var5 = 4;
                            Gvar.var_610 = 1;
                        }
                    }
                    if (Gvar.var_83[Gvar.var_2611].Var5 == 8 && Gvar.var_610 == 0) {
                        if (Gvar.var_610 == 0 && Gvar.var_605 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 13) {
                            Gvar.var_424 = Gvar.var_424 - 1;
                            Gvar.var_83[Gvar.var_2611].Var5 = 8;
                            Gvar.var_610 = 1;
                        }
                        if (Gvar.var_610 == 0 && Gvar.var_602 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 13) {
                            Gvar.var_423 = Gvar.var_423 - 1;
                            Gvar.var_83[Gvar.var_2611].Var5 = 4;
                            Gvar.var_610 = 1;
                        }
                        if (Gvar.var_610 == 0 && Gvar.var_603 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 13) {
                            Gvar.var_423 = Gvar.var_423 + 1;
                            Gvar.var_83[Gvar.var_2611].Var5 = 6;
                            Gvar.var_610 = 1;
                        }
                    }
                    if (Gvar.var_83[Gvar.var_2611].Var5 == 4 && Gvar.var_610 == 0) {
                        if (Gvar.var_610 == 0 && Gvar.var_602 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 13) {
                            Gvar.var_423 = Gvar.var_423 - 1;
                            Gvar.var_83[Gvar.var_2611].Var5 = 4;
                            Gvar.var_610 = 1;
                        }
                        if (Gvar.var_610 == 0 && Gvar.var_605 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 13) {
                            Gvar.var_424 = Gvar.var_424 - 1;
                            Gvar.var_83[Gvar.var_2611].Var5 = 8;
                            Gvar.var_610 = 1;
                        }
                        if (Gvar.var_610 == 0 && Gvar.var_604 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 13) {
                            Gvar.var_424 = Gvar.var_424 + 1;
                            Gvar.var_83[Gvar.var_2611].Var5 = 2;
                            Gvar.var_610 = 1;
                        }
                    }
                    if (Gvar.var_83[Gvar.var_2611].Var5 == 6 && Gvar.var_610 == 0) {
                        if (Gvar.var_610 == 0 && Gvar.var_603 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 13) {
                            Gvar.var_423 = Gvar.var_423 + 1;
                            Gvar.var_83[Gvar.var_2611].Var5 = 6;
                            Gvar.var_610 = 1;
                        }
                        if (Gvar.var_610 == 0 && Gvar.var_604 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 13) {
                            Gvar.var_424 = Gvar.var_424 + 1;
                            Gvar.var_83[Gvar.var_2611].Var5 = 2;
                            Gvar.var_610 = 1;
                        }
                        if (Gvar.var_610 == 0 && Gvar.var_605 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 13) {
                            Gvar.var_424 = Gvar.var_424 - 1;
                            Gvar.var_83[Gvar.var_2611].Var5 = 8;
                            Gvar.var_610 = 1;
                        }
                    }
                    if (Gvar.var_610 == 1) {
                        Gvar.var_83[Gvar.var_2611].Var38 = 0;
                    }
                    if (Gvar.var_610 == 0) {
                        Gvar.var_83[Gvar.var_2611].Var38 = Gvar.var_83[Gvar.var_2611].Var38 + 1;
                        if (Gvar.var_131 >= 1 || Gvar.var_144 >= 1 || Gvar.var_218 >= 1) {
                            Gvar.var_83[Gvar.var_2611].Var38 = 6;
                        }
                        if (Gvar.var_83[Gvar.var_2611].Var38 > 5) {
                            Gvar.var_83[Gvar.var_2611].Var38 = 0;
                            Gvar.var_618 = 0;
                            if (Gvar.var_618 == 0 && Gvar.var_83[Gvar.var_2611].Var5 == 2) {
                                Gvar.var_83[Gvar.var_2611].Var5 = 8;
                                Gvar.var_618 = 1;
                            }
                            if (Gvar.var_618 == 0 && Gvar.var_83[Gvar.var_2611].Var5 == 8) {
                                Gvar.var_83[Gvar.var_2611].Var5 = 2;
                                Gvar.var_618 = 1;
                            }
                            if (Gvar.var_618 == 0 && Gvar.var_83[Gvar.var_2611].Var5 == 6) {
                                Gvar.var_83[Gvar.var_2611].Var5 = 4;
                                Gvar.var_618 = 1;
                            }
                            if (Gvar.var_618 == 0 && Gvar.var_83[Gvar.var_2611].Var5 == 4) {
                                Gvar.var_83[Gvar.var_2611].Var5 = 6;
                                Gvar.var_618 = 1;
                            }
                            if (Gvar.var_618 == 0 && Gvar.var_83[Gvar.var_2611].Var5 == 1) {
                                Gvar.var_83[Gvar.var_2611].Var5 = 2;
                                Gvar.var_618 = 1;
                            }
                            if (Gvar.var_618 == 0 && Gvar.var_83[Gvar.var_2611].Var5 == 3) {
                                Gvar.var_83[Gvar.var_2611].Var5 = 2;
                                Gvar.var_618 = 1;
                            }
                            if (Gvar.var_618 == 0 && Gvar.var_83[Gvar.var_2611].Var5 == 7) {
                                Gvar.var_83[Gvar.var_2611].Var5 = 8;
                                Gvar.var_618 = 1;
                            }
                            if (Gvar.var_618 == 0 && Gvar.var_83[Gvar.var_2611].Var5 == 9) {
                                Gvar.var_83[Gvar.var_2611].Var5 = 8;
                                Gvar.var_618 = 1;
                            }
                        }
                    }
                }
            }
            // 敵の瞬間移動能力
            if (Gvar.var_83[Gvar.var_2611].Var4 == 4) {
                // Gvar.enemy_list = 3 タワーオブグレー、44 レッド・ホット・チリ・ペッパー、115 アクア・ネックレス、27 ゲブ神、18 ブラック・サバス、118 クリーム、86 サンタナ、48 エアロスミス、15 ペットショップ
                if (Gvar.var_83[Gvar.var_2611].Var0 == 3 || Gvar.var_83[Gvar.var_2611].Var0 == 44 || Gvar.var_83[Gvar.var_2611].Var0 == 115 || Gvar.var_83[Gvar.var_2611].Var0 == 27 || Gvar.var_83[Gvar.var_2611].Var0 == 18 || Gvar.var_83[Gvar.var_2611].Var0 == 118 || Gvar.var_83[Gvar.var_2611].Var0 == 86 || Gvar.var_83[Gvar.var_2611].Var0 == 48 || Gvar.var_83[Gvar.var_2611].Var0 == 15) {
                    Gvar.var_2671 = Gvar.var_2611;
                    Gvar.var_2672 = Gvar.var_83[Gvar.var_2671].Var1;
                    Gvar.var_2673 = Gvar.var_83[Gvar.var_2671].Var2;
                    Gvar.var_1349 = 0;
                    for (let cnt4 = 0; cnt4 < 500; ++cnt4) {
                        Gvar.var_2350 = Adap.rnd(Gvar.var_33);
                        Gvar.var_2351 = Adap.rnd(Gvar.var_34);
                        // Gvar.enemy_list = 118 クリームじゃなければ
                        if (Gvar.var_83[Gvar.var_2611].Var0 != 118 && Gvar.var_71[Gvar.var_2350][Gvar.var_2351] == Gvar.var_201 && Gvar.var_65[Gvar.var_2350][Gvar.var_2351] == 0 && Gvar.var_82[Gvar.var_2350][Gvar.var_2351] == 0 && Gvar.var_71[Gvar.var_2350][Gvar.var_2351] != 13) {
                            if (Gvar.var_2350 > Gvar.var_2621 && Gvar.var_2350 < Gvar.var_2622 && Gvar.var_2351 > Gvar.var_2624 && Gvar.var_2351 < Gvar.var_2623) {
                                Gvar.var_1349 = 1;
                                break;
                            }
                        }
                        // Gvar.enemy_list = 118 クリームであれば
                        if (Gvar.var_83[Gvar.var_2611].Var0 == 118 && Gvar.var_65[Gvar.var_2350][Gvar.var_2351] == 0 && Gvar.var_82[Gvar.var_2350][Gvar.var_2351] == 0) {
                            if (Gvar.var_2350 > Gvar.var_2621 && Gvar.var_2350 < Gvar.var_2622 && Gvar.var_2351 > Gvar.var_2624 && Gvar.var_2351 < Gvar.var_2623) {
                                Gvar.var_1349 = 1;
                                break;
                            }
                        }
                    }
                    if (Gvar.var_1349 == 0) {
                        Gvar.var_2350 = Gvar.var_2672;
                        Gvar.var_2351 = Gvar.var_2673;
                    }
                    if (Gvar.var_1349 == 1) {
                        Gvar.var_83[Gvar.var_2671].Var35 = Gvar.var_2672;
                        Gvar.var_83[Gvar.var_2671].Var36 = Gvar.var_2673;
                        Gvar.var_83[Gvar.var_2671].Var1 = Gvar.var_2350;
                        Gvar.var_83[Gvar.var_2671].Var2 = Gvar.var_2351;
                        Gvar.var_82[Gvar.var_2350][Gvar.var_2351] = Gvar.var_82[Gvar.var_2672][Gvar.var_2673];
                        Gvar.var_82[Gvar.var_2672][Gvar.var_2673] = 0;
                        Gvar.var_83[Gvar.var_2671].Var10 = Gvar.var_71[Gvar.var_2350][Gvar.var_2351];
                        Gvar.var_83[Gvar.var_2671].Var11 = 2;
                        if (Gvar.var_83[Gvar.var_2611].Var0 == 118) { // Gvar.enemy_list = 118 クリームであれば
                            Gvar.var_83[Gvar.var_2671].Var11 = 1;
                        }
                        Gvar.var_83[Gvar.var_2671].Var22 = 1;
                        Gvar.var_83[Gvar.var_2671].Var6 = 0;
                        Gvar.var_83[Gvar.var_2671].Var5 = 2;
                    }
                }
            }
            if (Gvar.var_83[Gvar.var_2611].Var4 == 5) {
                if (Gvar.var_66 < Gvar.var_423 && Gvar.var_67 == Gvar.var_424) {
                    Gvar.var_83[Gvar.var_2611].Var5 = 4;
                }
                if (Gvar.var_66 > Gvar.var_423 && Gvar.var_67 == Gvar.var_424) {
                    Gvar.var_83[Gvar.var_2611].Var5 = 6;
                }
                if (Gvar.var_66 == Gvar.var_423 && Gvar.var_67 < Gvar.var_424) {
                    Gvar.var_83[Gvar.var_2611].Var5 = 8;
                }
                if (Gvar.var_66 == Gvar.var_423 && Gvar.var_67 > Gvar.var_424) {
                    Gvar.var_83[Gvar.var_2611].Var5 = 2;
                }
                if (Gvar.var_66 < Gvar.var_423 && Gvar.var_67 < Gvar.var_424) {
                    Gvar.var_83[Gvar.var_2611].Var5 = 7;
                }
                if (Gvar.var_66 < Gvar.var_423 && Gvar.var_67 > Gvar.var_424) {
                    Gvar.var_83[Gvar.var_2611].Var5 = 1;
                }
                if (Gvar.var_66 > Gvar.var_423 && Gvar.var_67 < Gvar.var_424) {
                    Gvar.var_83[Gvar.var_2611].Var5 = 9;
                }
                if (Gvar.var_66 > Gvar.var_423 && Gvar.var_67 > Gvar.var_424) {
                    Gvar.var_83[Gvar.var_2611].Var5 = 3;
                }
                if (Gvar.var_83[Gvar.var_2611].Var17 != 0) {
                    Gvar.var_2674 = Adap.rnd(8);
                    if (Gvar.var_2674 == 0) {
                        Gvar.var_83[Gvar.var_2611].Var5 = 1;
                    }
                    if (Gvar.var_2674 == 1) {
                        Gvar.var_83[Gvar.var_2611].Var5 = 2;
                    }
                    if (Gvar.var_2674 == 2) {
                        Gvar.var_83[Gvar.var_2611].Var5 = 3;
                    }
                    if (Gvar.var_2674 == 3) {
                        Gvar.var_83[Gvar.var_2611].Var5 = 4;
                    }
                    if (Gvar.var_2674 == 4) {
                        Gvar.var_83[Gvar.var_2611].Var5 = 6;
                    }
                    if (Gvar.var_2674 == 5) {
                        Gvar.var_83[Gvar.var_2611].Var5 = 7;
                    }
                    if (Gvar.var_2674 == 6) {
                        Gvar.var_83[Gvar.var_2611].Var5 = 8;
                    }
                    if (Gvar.var_2674 == 7) {
                        Gvar.var_83[Gvar.var_2611].Var5 = 9;
                    }
                }
            }
            if (Gvar.var_83[Gvar.var_2611].Var4 == 7) {
                Gvar.var_610 = 0;
                if (Gvar.var_83[Gvar.var_2611].Var0 != 118) { // Gvar.enemy_list = 118 クリームでなければ
                    if (Gvar.var_610 == 0 && Gvar.var_602 == 0 && Gvar.var_83[Gvar.var_2611].Var5 == 4 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 13 && Gvar.var_65[Gvar.var_425][Gvar.var_424] == 0) {
                        Gvar.var_423 = Gvar.var_423 - 1;
                        Gvar.var_83[Gvar.var_2611].Var5 = 4;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_610 == 0 && Gvar.var_603 == 0 && Gvar.var_83[Gvar.var_2611].Var5 == 6 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 13 && Gvar.var_65[Gvar.var_426][Gvar.var_424] == 0) {
                        Gvar.var_423 = Gvar.var_423 + 1;
                        Gvar.var_83[Gvar.var_2611].Var5 = 6;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_610 == 0 && Gvar.var_605 == 0 && Gvar.var_83[Gvar.var_2611].Var5 == 8 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 13 && Gvar.var_65[Gvar.var_423][Gvar.var_428] == 0) {
                        Gvar.var_424 = Gvar.var_424 - 1;
                        Gvar.var_83[Gvar.var_2611].Var5 = 8;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_610 == 0 && Gvar.var_604 == 0 && Gvar.var_83[Gvar.var_2611].Var5 == 2 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 13 && Gvar.var_65[Gvar.var_423][Gvar.var_427] == 0) {
                        Gvar.var_424 = Gvar.var_424 + 1;
                        Gvar.var_83[Gvar.var_2611].Var5 = 2;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_610 == 0 && Gvar.var_606 == 0 && Gvar.var_602 == 0 && Gvar.var_604 == 0 && Gvar.var_83[Gvar.var_2611].Var5 == 1 && Gvar.var_82[Gvar.var_425][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_427] != 13 && Gvar.var_65[Gvar.var_425][Gvar.var_427] == 0) {
                        Gvar.var_423 = Gvar.var_423 - 1;
                        Gvar.var_424 = Gvar.var_424 + 1;
                        Gvar.var_83[Gvar.var_2611].Var5 = 1;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_610 == 0 && Gvar.var_608 == 0 && Gvar.var_603 == 0 && Gvar.var_604 == 0 && Gvar.var_83[Gvar.var_2611].Var5 == 3 && Gvar.var_82[Gvar.var_426][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_427] != 13 && Gvar.var_65[Gvar.var_426][Gvar.var_427] == 0) {
                        Gvar.var_423 = Gvar.var_423 + 1;
                        Gvar.var_424 = Gvar.var_424 + 1;
                        Gvar.var_83[Gvar.var_2611].Var5 = 3;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_610 == 0 && Gvar.var_607 == 0 && Gvar.var_602 == 0 && Gvar.var_605 == 0 && Gvar.var_83[Gvar.var_2611].Var5 == 7 && Gvar.var_82[Gvar.var_425][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_428] != 13 && Gvar.var_65[Gvar.var_425][Gvar.var_428] == 0) {
                        Gvar.var_423 = Gvar.var_423 - 1;
                        Gvar.var_424 = Gvar.var_424 - 1;
                        Gvar.var_83[Gvar.var_2611].Var5 = 7;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_610 == 0 && Gvar.var_609 == 0 && Gvar.var_603 == 0 && Gvar.var_605 == 0 && Gvar.var_83[Gvar.var_2611].Var5 == 9 && Gvar.var_82[Gvar.var_426][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_428] != 13 && Gvar.var_65[Gvar.var_426][Gvar.var_428] == 0) {
                        Gvar.var_423 = Gvar.var_423 + 1;
                        Gvar.var_424 = Gvar.var_424 - 1;
                        Gvar.var_83[Gvar.var_2611].Var5 = 9;
                        Gvar.var_610 = 1;
                    }
                }
                if (Gvar.var_83[Gvar.var_2611].Var0 == 118) { // Gvar.enemy_list = 118 クリームであれば
                    if (Gvar.var_610 == 0 && Gvar.var_602 == 0 && Gvar.var_83[Gvar.var_2611].Var5 == 4 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0 && Gvar.var_65[Gvar.var_425][Gvar.var_424] == 0) {
                        Gvar.var_423 = Gvar.var_423 - 1;
                        Gvar.var_83[Gvar.var_2611].Var5 = 4;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_610 == 0 && Gvar.var_603 == 0 && Gvar.var_83[Gvar.var_2611].Var5 == 6 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0 && Gvar.var_65[Gvar.var_426][Gvar.var_424] == 0) {
                        Gvar.var_423 = Gvar.var_423 + 1;
                        Gvar.var_83[Gvar.var_2611].Var5 = 6;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_610 == 0 && Gvar.var_605 == 0 && Gvar.var_83[Gvar.var_2611].Var5 == 8 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0 && Gvar.var_65[Gvar.var_423][Gvar.var_428] == 0) {
                        Gvar.var_424 = Gvar.var_424 - 1;
                        Gvar.var_83[Gvar.var_2611].Var5 = 8;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_610 == 0 && Gvar.var_604 == 0 && Gvar.var_83[Gvar.var_2611].Var5 == 2 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0 && Gvar.var_65[Gvar.var_423][Gvar.var_427] == 0) {
                        Gvar.var_424 = Gvar.var_424 + 1;
                        Gvar.var_83[Gvar.var_2611].Var5 = 2;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_610 == 0 && Gvar.var_606 == 0 && Gvar.var_602 == 0 && Gvar.var_604 == 0 && Gvar.var_83[Gvar.var_2611].Var5 == 1 && Gvar.var_82[Gvar.var_425][Gvar.var_427] == 0 && Gvar.var_65[Gvar.var_425][Gvar.var_427] == 0) {
                        Gvar.var_423 = Gvar.var_423 - 1;
                        Gvar.var_424 = Gvar.var_424 + 1;
                        Gvar.var_83[Gvar.var_2611].Var5 = 1;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_610 == 0 && Gvar.var_608 == 0 && Gvar.var_603 == 0 && Gvar.var_604 == 0 && Gvar.var_83[Gvar.var_2611].Var5 == 3 && Gvar.var_82[Gvar.var_426][Gvar.var_427] == 0 && Gvar.var_65[Gvar.var_426][Gvar.var_427] == 0) {
                        Gvar.var_423 = Gvar.var_423 + 1;
                        Gvar.var_424 = Gvar.var_424 + 1;
                        Gvar.var_83[Gvar.var_2611].Var5 = 3;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_610 == 0 && Gvar.var_607 == 0 && Gvar.var_602 == 0 && Gvar.var_605 == 0 && Gvar.var_83[Gvar.var_2611].Var5 == 7 && Gvar.var_82[Gvar.var_425][Gvar.var_428] == 0 && Gvar.var_65[Gvar.var_425][Gvar.var_428] == 0) {
                        Gvar.var_423 = Gvar.var_423 - 1;
                        Gvar.var_424 = Gvar.var_424 - 1;
                        Gvar.var_83[Gvar.var_2611].Var5 = 7;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_610 == 0 && Gvar.var_609 == 0 && Gvar.var_603 == 0 && Gvar.var_605 == 0 && Gvar.var_83[Gvar.var_2611].Var5 == 9 && Gvar.var_82[Gvar.var_426][Gvar.var_428] == 0 && Gvar.var_65[Gvar.var_426][Gvar.var_428] == 0) {
                        Gvar.var_423 = Gvar.var_423 + 1;
                        Gvar.var_424 = Gvar.var_424 - 1;
                        Gvar.var_83[Gvar.var_2611].Var5 = 9;
                        Gvar.var_610 = 1;
                    }
                }
                if (Gvar.var_423 < 6) {
                    Gvar.var_423 = 6;
                    Gvar.var_610 = 0;
                }
                if (Gvar.var_423 > Gvar.var_33) {
                    Gvar.var_423 = Gvar.var_33;
                    Gvar.var_610 = 0;
                }
                if (Gvar.var_424 < 6) {
                    Gvar.var_424 = 6;
                    Gvar.var_610 = 0;
                }
                if (Gvar.var_424 > Gvar.var_34) {
                    Gvar.var_424 = Gvar.var_34;
                    Gvar.var_610 = 0;
                }
                if (Gvar.var_610 == 0) {
                    Gvar.var_2675 = Adap.rnd(8);
                    if (Gvar.var_2675 == 0) {
                        Gvar.var_83[Gvar.var_2611].Var5 = 4;
                    }
                    if (Gvar.var_2675 == 1) {
                        Gvar.var_83[Gvar.var_2611].Var5 = 6;
                    }
                    if (Gvar.var_2675 == 2) {
                        Gvar.var_83[Gvar.var_2611].Var5 = 8;
                    }
                    if (Gvar.var_2675 == 3) {
                        Gvar.var_83[Gvar.var_2611].Var5 = 2;
                    }
                    if (Gvar.var_2675 == 4) {
                        Gvar.var_83[Gvar.var_2611].Var5 = 1;
                    }
                    if (Gvar.var_2675 == 5) {
                        Gvar.var_83[Gvar.var_2611].Var5 = 3;
                    }
                    if (Gvar.var_2675 == 6) {
                        Gvar.var_83[Gvar.var_2611].Var5 = 7;
                    }
                    if (Gvar.var_2675 == 7) {
                        Gvar.var_83[Gvar.var_2611].Var5 = 9;
                    }
                }
            }
        }
        Gvar.var_83[Gvar.var_2611].Var6 = 0;
        if (Gvar.var_83[Gvar.var_2611].Var4 != 4 && Gvar.var_83[Gvar.var_2611].Var4 != 5) {
            if (Gvar.var_610 == 1) {
                Gvar.var_83[Gvar.var_2611].Var34 = Gvar.var_71[Gvar.var_2619][Gvar.var_2620];
                Gvar.var_83[Gvar.var_2611].Var6 = 1;
                Gvar.var_83[Gvar.var_2611].Var10 = Gvar.var_71[Gvar.var_423][Gvar.var_424];
                Gvar.var_83[Gvar.var_2611].Var1 = Gvar.var_423;
                Gvar.var_83[Gvar.var_2611].Var2 = Gvar.var_424;
                Gvar.var_82[Gvar.var_2619][Gvar.var_2620] = 0;
                Gvar.var_82[Gvar.var_423][Gvar.var_424] = Gvar.var_2614;
                // Gvar.enemy_list = 118 クリームであれば
                if (Gvar.var_83[Gvar.var_2611].Var0 == 118 && Gvar.var_83[Gvar.var_2611].Var20 == 0 && Gvar.var_83[Gvar.var_2611].Var10 == 0) {
                    Gvar.var_71[Gvar.var_423][Gvar.var_424] = 14;
                    Gvar.var_2676 = 14;
                    Gvar.var_2677 = Gvar.var_423;
                    Gvar.var_2678 = Gvar.var_424;
                    Gvar.var_2679 = Gvar.var_423 - 1;
                    if (Gvar.var_2679 <= 0) {
                        Gvar.var_2679 = 0;
                    }
                    Gvar.var_2680 = Gvar.var_423 + 1;
                    if (Gvar.var_2680 >= Gvar.var_33) {
                        Gvar.var_2680 = Gvar.var_33;
                    }
                    Gvar.var_2681 = Gvar.var_424 - 1;
                    if (Gvar.var_2681 <= 0) {
                        Gvar.var_2681 = 0;
                    }
                    Gvar.var_2682 = Gvar.var_424 + 1;
                    if (Gvar.var_2682 >= Gvar.var_34) {
                        Gvar.var_2682 = Gvar.var_34;
                    }
                    if (Gvar.var_71[Gvar.var_2679][Gvar.var_2678] != 0 && Gvar.var_71[Gvar.var_2679][Gvar.var_2678] <= 12 && Gvar.var_71[Gvar.var_2680][Gvar.var_2678] != 0 && Gvar.var_71[Gvar.var_2680][Gvar.var_2678] <= 12) {
                        Gvar.var_71[Gvar.var_423][Gvar.var_424] = Gvar.var_71[Gvar.var_2679][Gvar.var_2678];
                        Gvar.var_2676 = Gvar.var_71[Gvar.var_423][Gvar.var_424];
                    }
                    if (Gvar.var_71[Gvar.var_2677][Gvar.var_2682] != 0 && Gvar.var_71[Gvar.var_2677][Gvar.var_2682] <= 12 && Gvar.var_71[Gvar.var_2677][Gvar.var_2681] != 0 && Gvar.var_71[Gvar.var_2677][Gvar.var_2681] <= 12) {
                        Gvar.var_71[Gvar.var_423][Gvar.var_424] = Gvar.var_71[Gvar.var_2677][Gvar.var_2682];
                        Gvar.var_2676 = Gvar.var_71[Gvar.var_423][Gvar.var_424];
                    }
                    Gvar.var_83[Gvar.var_2611].Var10 = Gvar.var_2676;
                    if (Gvar.var_83[Gvar.var_2611].Var5 == 1 && Gvar.var_71[Gvar.var_423][Gvar.var_2681] == 0) {
                        Gvar.var_71[Gvar.var_423][Gvar.var_2681] = Gvar.var_2676;
                    }
                    if (Gvar.var_83[Gvar.var_2611].Var5 == 1 && Gvar.var_71[Gvar.var_2680][Gvar.var_424] == 0) {
                        Gvar.var_71[Gvar.var_2680][Gvar.var_424] = Gvar.var_2676;
                    }
                    if (Gvar.var_83[Gvar.var_2611].Var5 == 3 && Gvar.var_71[Gvar.var_423][Gvar.var_2681] == 0) {
                        Gvar.var_71[Gvar.var_423][Gvar.var_2681] = Gvar.var_2676;
                    }
                    if (Gvar.var_83[Gvar.var_2611].Var5 == 3 && Gvar.var_71[Gvar.var_2679][Gvar.var_424] == 0) {
                        Gvar.var_71[Gvar.var_2679][Gvar.var_424] = Gvar.var_2676;
                    }
                    if (Gvar.var_83[Gvar.var_2611].Var5 == 7 && Gvar.var_71[Gvar.var_423][Gvar.var_2682] == 0) {
                        Gvar.var_71[Gvar.var_423][Gvar.var_2682] = Gvar.var_2676;
                    }
                    if (Gvar.var_83[Gvar.var_2611].Var5 == 7 && Gvar.var_71[Gvar.var_2680][Gvar.var_424] == 0) {
                        Gvar.var_71[Gvar.var_2680][Gvar.var_424] = Gvar.var_2676;
                    }
                    if (Gvar.var_83[Gvar.var_2611].Var5 == 9 && Gvar.var_71[Gvar.var_423][Gvar.var_2682] == 0) {
                        Gvar.var_71[Gvar.var_423][Gvar.var_2682] = Gvar.var_2676;
                    }
                    if (Gvar.var_83[Gvar.var_2611].Var5 == 9 && Gvar.var_71[Gvar.var_2679][Gvar.var_424] == 0) {
                        Gvar.var_71[Gvar.var_2679][Gvar.var_424] = Gvar.var_2676;
                    }
                }
                if (Gvar.var_83[Gvar.var_2611].Var34 == 14 && Gvar.var_83[Gvar.var_2611].Var10 != 14) {
                    Gvar.var_83[Gvar.var_2611].Var33 = Gvar.var_83[Gvar.var_2611].Var5;
                    if (Gvar.var_201 == 14 && Gvar.var_71[Gvar.var_2631][Gvar.var_2630] == Gvar.var_83[Gvar.var_2611].Var10) {
                        Gvar.var_83[Gvar.var_2611].Var33 = 2;
                    }
                    if (Gvar.var_201 == 14 && Gvar.var_71[Gvar.var_2632][Gvar.var_2630] == Gvar.var_83[Gvar.var_2611].Var10) {
                        Gvar.var_83[Gvar.var_2611].Var33 = 8;
                    }
                    if (Gvar.var_201 == 14 && Gvar.var_71[Gvar.var_2629][Gvar.var_2633] == Gvar.var_83[Gvar.var_2611].Var10) {
                        Gvar.var_83[Gvar.var_2611].Var33 = 6;
                    }
                    if (Gvar.var_201 == 14 && Gvar.var_71[Gvar.var_2629][Gvar.var_2634] == Gvar.var_83[Gvar.var_2611].Var10) {
                        Gvar.var_83[Gvar.var_2611].Var33 = 4;
                    }
                    if (Gvar.var_83[Gvar.var_2611].Var33 == 1) {
                        Gvar.var_83[Gvar.var_2611].Var33 = 2;
                    }
                    if (Gvar.var_83[Gvar.var_2611].Var33 == 7) {
                        Gvar.var_83[Gvar.var_2611].Var33 = 8;
                    }
                    if (Gvar.var_83[Gvar.var_2611].Var33 == 9) {
                        Gvar.var_83[Gvar.var_2611].Var33 = 8;
                    }
                    if (Gvar.var_83[Gvar.var_2611].Var33 == 3) {
                        Gvar.var_83[Gvar.var_2611].Var33 = 2;
                    }
                    if (Gvar.var_83[Gvar.var_2611].Var33 == 5) {
                        Gvar.var_83[Gvar.var_2611].Var33 = 2;
                    }
                }
            }
        }
        if (Gvar.var_83[Gvar.var_2611].Var0 == 36 && Gvar.var_313 == 1) {
            Gvar.var_313 = 0;
            Gvar.var_83[Gvar.var_2611].Var6 = 1;
        }
        if (Gvar.var_83[Gvar.var_2611].Var4 == 4) {
            Gvar.var_83[Gvar.var_2611].Var4 = 2;
        }
        return;
}

export {func569}
