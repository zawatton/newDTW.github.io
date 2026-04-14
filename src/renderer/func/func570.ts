/**
 * func570 — func570 不明
 *
 * (org原典: newDTW_func5)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func570(this: any) {
        Adap.dbgprt(570);
        Gvar.var_610 = 0;
        if (Gvar.var_66 < Gvar.var_423 && Gvar.var_67 > Gvar.var_424) {
            if (Gvar.var_610 == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0 && Gvar.var_606 != 1 && Gvar.var_71[Gvar.var_425][Gvar.var_427] != 13 && Gvar.var_82[Gvar.var_425][Gvar.var_427] == 0) {
                Gvar.var_423 = Gvar.var_423 - 1;
                Gvar.var_424 = Gvar.var_424 + 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 1;
                Gvar.var_610 = 1;
            }
            if (Gvar.var_610 == 0) {
                Gvar.var_2683 = 0;
                Gvar.var_2684 = Gvar.var_423 - 1;
                Gvar.var_2685 = Gvar.var_423 - 2;
                Gvar.var_2686 = Gvar.var_423 - 3;
                Gvar.var_2687 = Gvar.var_423 - 4;
                Gvar.var_2688 = Gvar.var_423 - 5;
                Gvar.var_2689 = Gvar.var_424 + 1;
                Gvar.var_2690 = Gvar.var_424 + 2;
                Gvar.var_2691 = Gvar.var_424 + 3;
                Gvar.var_2692 = Gvar.var_424 + 4;
                Gvar.var_2693 = Gvar.var_424 + 5;
                if (Gvar.var_66 == Gvar.var_2684 && Gvar.var_67 < Gvar.var_2689) {
                    Gvar.var_2683 = 1;
                }
                if (Gvar.var_66 == Gvar.var_2685 && Gvar.var_67 < Gvar.var_2690) {
                    Gvar.var_2683 = 1;
                }
                if (Gvar.var_66 == Gvar.var_2686 && Gvar.var_67 < Gvar.var_2691) {
                    Gvar.var_2683 = 1;
                }
                if (Gvar.var_66 == Gvar.var_2687 && Gvar.var_67 < Gvar.var_2692) {
                    Gvar.var_2683 = 1;
                }
                if (Gvar.var_66 == Gvar.var_2688 && Gvar.var_67 < Gvar.var_2693) {
                    Gvar.var_2683 = 1;
                }
            }
            if (Gvar.var_2683 == 0) {
                if (Gvar.var_610 == 0 && Gvar.var_604 != 1 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 13 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0) {
                    Gvar.var_424 = Gvar.var_424 + 1;
                    Gvar.var_83[Gvar.var_2611].Var5 = 2;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_602 != 1 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 13 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0) {
                    Gvar.var_423 = Gvar.var_423 - 1;
                    Gvar.var_83[Gvar.var_2611].Var5 = 4;
                    Gvar.var_610 = 1;
                }
            }
            if (Gvar.var_2683 == 1) {
                if (Gvar.var_610 == 0 && Gvar.var_602 != 1 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 13 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0) {
                    Gvar.var_423 = Gvar.var_423 - 1;
                    Gvar.var_83[Gvar.var_2611].Var5 = 4;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_604 != 1 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 13 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0) {
                    Gvar.var_424 = Gvar.var_424 + 1;
                    Gvar.var_83[Gvar.var_2611].Var5 = 2;
                    Gvar.var_610 = 1;
                }
            }
            if (Gvar.var_610 == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0 && Gvar.var_608 != 1 && Gvar.var_71[Gvar.var_426][Gvar.var_427] != 13 && Gvar.var_82[Gvar.var_426][Gvar.var_427] == 0 && Gvar.var_83[Gvar.var_2611].Var10 != 14) {
                Gvar.var_423 = Gvar.var_423 + 1;
                Gvar.var_424 = Gvar.var_424 + 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 3;
                Gvar.var_610 = 1;
            }
            if (Gvar.var_610 == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0 && Gvar.var_607 != 1 && Gvar.var_71[Gvar.var_425][Gvar.var_428] != 13 && Gvar.var_82[Gvar.var_425][Gvar.var_428] == 0 && Gvar.var_83[Gvar.var_2611].Var10 != 14) {
                Gvar.var_423 = Gvar.var_423 - 1;
                Gvar.var_424 = Gvar.var_424 - 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 7;
                Gvar.var_610 = 1;
            }
            if (Gvar.var_610 == 0 && Gvar.var_603 != 1 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 13 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0 && Gvar.var_83[Gvar.var_2611].Var10 != 14) {
                Gvar.var_423 = Gvar.var_423 + 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 6;
                Gvar.var_610 = 1;
            }
            if (Gvar.var_610 == 0 && Gvar.var_605 != 1 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 13 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0 && Gvar.var_83[Gvar.var_2611].Var10 != 14) {
                Gvar.var_424 = Gvar.var_424 - 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 8;
                Gvar.var_610 = 1;
            }
        }
        if (Gvar.var_66 < Gvar.var_423 && Gvar.var_67 < Gvar.var_424) {
            if (Gvar.var_610 == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0 && Gvar.var_607 != 1 && Gvar.var_71[Gvar.var_425][Gvar.var_428] != 13 && Gvar.var_82[Gvar.var_425][Gvar.var_428] == 0) {
                Gvar.var_423 = Gvar.var_423 - 1;
                Gvar.var_424 = Gvar.var_424 - 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 7;
                Gvar.var_610 = 1;
            }
            if (Gvar.var_610 == 0) {
                Gvar.var_2683 = 0;
                Gvar.var_2684 = Gvar.var_423 - 1;
                Gvar.var_2685 = Gvar.var_423 - 2;
                Gvar.var_2686 = Gvar.var_423 - 3;
                Gvar.var_2687 = Gvar.var_423 - 4;
                Gvar.var_2688 = Gvar.var_423 - 5;
                Gvar.var_2689 = Gvar.var_424 - 1;
                Gvar.var_2690 = Gvar.var_424 - 2;
                Gvar.var_2691 = Gvar.var_424 - 3;
                Gvar.var_2692 = Gvar.var_424 - 4;
                Gvar.var_2693 = Gvar.var_424 - 5;
                if (Gvar.var_66 == Gvar.var_2684 && Gvar.var_67 < Gvar.var_2689) {
                    Gvar.var_2683 = 1;
                }
                if (Gvar.var_66 == Gvar.var_2685 && Gvar.var_67 < Gvar.var_2690) {
                    Gvar.var_2683 = 1;
                }
                if (Gvar.var_66 == Gvar.var_2686 && Gvar.var_67 < Gvar.var_2691) {
                    Gvar.var_2683 = 1;
                }
                if (Gvar.var_66 == Gvar.var_2687 && Gvar.var_67 < Gvar.var_2692) {
                    Gvar.var_2683 = 1;
                }
                if (Gvar.var_66 == Gvar.var_2688 && Gvar.var_67 < Gvar.var_2693) {
                    Gvar.var_2683 = 1;
                }
            }
            if (Gvar.var_2683 == 0) {
                if (Gvar.var_610 == 0 && Gvar.var_602 != 1 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 13 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0) {
                    Gvar.var_423 = Gvar.var_423 - 1;
                    Gvar.var_83[Gvar.var_2611].Var5 = 4;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_605 != 1 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 13 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0) {
                    Gvar.var_424 = Gvar.var_424 - 1;
                    Gvar.var_83[Gvar.var_2611].Var5 = 8;
                    Gvar.var_610 = 1;
                }
            }
            if (Gvar.var_2683 == 1) {
                if (Gvar.var_610 == 0 && Gvar.var_605 != 1 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 13 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0) {
                    Gvar.var_424 = Gvar.var_424 - 1;
                    Gvar.var_83[Gvar.var_2611].Var5 = 8;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_602 != 1 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 13 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0) {
                    Gvar.var_423 = Gvar.var_423 - 1;
                    Gvar.var_83[Gvar.var_2611].Var5 = 4;
                    Gvar.var_610 = 1;
                }
            }
            if (Gvar.var_610 == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0 && Gvar.var_606 != 1 && Gvar.var_71[Gvar.var_425][Gvar.var_427] != 13 && Gvar.var_82[Gvar.var_425][Gvar.var_427] == 0) {
                Gvar.var_423 = Gvar.var_423 - 1;
                Gvar.var_424 = Gvar.var_424 + 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 1;
                Gvar.var_610 = 1;
            }
            if (Gvar.var_610 == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0 && Gvar.var_609 != 1 && Gvar.var_71[Gvar.var_426][Gvar.var_428] != 13 && Gvar.var_82[Gvar.var_426][Gvar.var_428] == 0) {
                Gvar.var_423 = Gvar.var_423 + 1;
                Gvar.var_424 = Gvar.var_424 - 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 9;
                Gvar.var_610 = 1;
            }
            if (Gvar.var_610 == 0 && Gvar.var_604 != 1 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 13 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0 && Gvar.var_83[Gvar.var_2611].Var10 != 14) {
                Gvar.var_424 = Gvar.var_424 + 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 2;
                Gvar.var_610 = 1;
            }
            if (Gvar.var_610 == 0 && Gvar.var_603 != 1 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 13 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0 && Gvar.var_83[Gvar.var_2611].Var10 != 14) {
                Gvar.var_423 = Gvar.var_423 + 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 6;
                Gvar.var_610 = 1;
            }
        }
        if (Gvar.var_66 > Gvar.var_423 && Gvar.var_67 > Gvar.var_424) {
            if (Gvar.var_610 == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0 && Gvar.var_608 != 1 && Gvar.var_71[Gvar.var_426][Gvar.var_427] != 13 && Gvar.var_82[Gvar.var_426][Gvar.var_427] == 0) {
                Gvar.var_423 = Gvar.var_423 + 1;
                Gvar.var_424 = Gvar.var_424 + 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 3;
                Gvar.var_610 = 1;
            }
            if (Gvar.var_610 == 0) {
                Gvar.var_2683 = 0;
                Gvar.var_2684 = Gvar.var_423 + 1;
                Gvar.var_2685 = Gvar.var_423 + 2;
                Gvar.var_2686 = Gvar.var_423 + 3;
                Gvar.var_2687 = Gvar.var_423 + 4;
                Gvar.var_2688 = Gvar.var_423 + 5;
                Gvar.var_2689 = Gvar.var_424 + 1;
                Gvar.var_2690 = Gvar.var_424 + 2;
                Gvar.var_2691 = Gvar.var_424 + 3;
                Gvar.var_2692 = Gvar.var_424 + 4;
                Gvar.var_2693 = Gvar.var_424 + 5;
                if (Gvar.var_66 == Gvar.var_2684 && Gvar.var_67 > Gvar.var_2689) {
                    Gvar.var_2683 = 1;
                }
                if (Gvar.var_66 == Gvar.var_2685 && Gvar.var_67 > Gvar.var_2690) {
                    Gvar.var_2683 = 1;
                }
                if (Gvar.var_66 == Gvar.var_2686 && Gvar.var_67 > Gvar.var_2691) {
                    Gvar.var_2683 = 1;
                }
                if (Gvar.var_66 == Gvar.var_2687 && Gvar.var_67 > Gvar.var_2692) {
                    Gvar.var_2683 = 1;
                }
                if (Gvar.var_66 == Gvar.var_2688 && Gvar.var_67 > Gvar.var_2693) {
                    Gvar.var_2683 = 1;
                }
            }
            if (Gvar.var_2683 == 0) {
                if (Gvar.var_610 == 0 && Gvar.var_603 != 1 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 13 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0) {
                    Gvar.var_423 = Gvar.var_423 + 1;
                    Gvar.var_83[Gvar.var_2611].Var5 = 6;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_604 != 1 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 13 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0) {
                    Gvar.var_424 = Gvar.var_424 + 1;
                    Gvar.var_83[Gvar.var_2611].Var5 = 2;
                    Gvar.var_610 = 1;
                }
            }
            if (Gvar.var_2683 == 1) {
                if (Gvar.var_610 == 0 && Gvar.var_604 != 1 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 13 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0) {
                    Gvar.var_424 = Gvar.var_424 + 1;
                    Gvar.var_83[Gvar.var_2611].Var5 = 2;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_603 != 1 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 13 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0) {
                    Gvar.var_423 = Gvar.var_423 + 1;
                    Gvar.var_83[Gvar.var_2611].Var5 = 6;
                    Gvar.var_610 = 1;
                }
            }
            if (Gvar.var_610 == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0 && Gvar.var_609 != 1 && Gvar.var_71[Gvar.var_426][Gvar.var_428] != 13 && Gvar.var_82[Gvar.var_426][Gvar.var_428] == 0 && Gvar.var_83[Gvar.var_2611].Var10 != 14) {
                Gvar.var_423 = Gvar.var_423 + 1;
                Gvar.var_424 = Gvar.var_424 - 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 9;
                Gvar.var_610 = 1;
            }
            if (Gvar.var_610 == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0 && Gvar.var_606 != 1 && Gvar.var_71[Gvar.var_425][Gvar.var_427] != 13 && Gvar.var_82[Gvar.var_425][Gvar.var_427] == 0 && Gvar.var_83[Gvar.var_2611].Var10 != 14) {
                Gvar.var_423 = Gvar.var_423 - 1;
                Gvar.var_424 = Gvar.var_424 + 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 1;
                Gvar.var_610 = 1;
            }
            if (Gvar.var_610 == 0 && Gvar.var_605 != 1 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 13 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0 && Gvar.var_83[Gvar.var_2611].Var10 != 14) {
                Gvar.var_424 = Gvar.var_424 - 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 8;
                Gvar.var_610 = 1;
            }
            if (Gvar.var_610 == 0 && Gvar.var_602 != 1 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 13 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0 && Gvar.var_83[Gvar.var_2611].Var10 != 14) {
                Gvar.var_423 = Gvar.var_423 - 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 4;
                Gvar.var_610 = 1;
            }
        }
        if (Gvar.var_66 > Gvar.var_423 && Gvar.var_67 < Gvar.var_424) {
            if (Gvar.var_610 == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0 && Gvar.var_609 != 1 && Gvar.var_71[Gvar.var_426][Gvar.var_428] != 13 && Gvar.var_82[Gvar.var_426][Gvar.var_428] == 0) {
                Gvar.var_423 = Gvar.var_423 + 1;
                Gvar.var_424 = Gvar.var_424 - 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 9;
                Gvar.var_610 = 1;
            }
            if (Gvar.var_610 == 0) {
                Gvar.var_2683 = 0;
                Gvar.var_2684 = Gvar.var_423 + 1;
                Gvar.var_2685 = Gvar.var_423 + 2;
                Gvar.var_2686 = Gvar.var_423 + 3;
                Gvar.var_2687 = Gvar.var_423 + 4;
                Gvar.var_2688 = Gvar.var_423 + 5;
                Gvar.var_2689 = Gvar.var_424 + 1;
                Gvar.var_2690 = Gvar.var_424 + 2;
                Gvar.var_2691 = Gvar.var_424 + 3;
                Gvar.var_2692 = Gvar.var_424 + 4;
                Gvar.var_2693 = Gvar.var_424 + 5;
                if (Gvar.var_66 == Gvar.var_2684 && Gvar.var_67 < Gvar.var_2689) {
                    Gvar.var_2683 = 1;
                }
                if (Gvar.var_66 == Gvar.var_2685 && Gvar.var_67 < Gvar.var_2690) {
                    Gvar.var_2683 = 1;
                }
                if (Gvar.var_66 == Gvar.var_2686 && Gvar.var_67 < Gvar.var_2691) {
                    Gvar.var_2683 = 1;
                }
                if (Gvar.var_66 == Gvar.var_2687 && Gvar.var_67 < Gvar.var_2692) {
                    Gvar.var_2683 = 1;
                }
                if (Gvar.var_66 == Gvar.var_2688 && Gvar.var_67 < Gvar.var_2693) {
                    Gvar.var_2683 = 1;
                }
            }
            if (Gvar.var_2683 == 0) {
                if (Gvar.var_610 == 0 && Gvar.var_605 != 1 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 13 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0) {
                    Gvar.var_424 = Gvar.var_424 - 1;
                    Gvar.var_83[Gvar.var_2611].Var5 = 8;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_603 != 1 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 13 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0) {
                    Gvar.var_423 = Gvar.var_423 + 1;
                    Gvar.var_83[Gvar.var_2611].Var5 = 6;
                    Gvar.var_610 = 1;
                }
            }
            if (Gvar.var_2683 == 1) {
                if (Gvar.var_610 == 0 && Gvar.var_603 != 1 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 13 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0) {
                    Gvar.var_423 = Gvar.var_423 + 1;
                    Gvar.var_83[Gvar.var_2611].Var5 = 6;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_605 != 1 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 13 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0) {
                    Gvar.var_424 = Gvar.var_424 - 1;
                    Gvar.var_83[Gvar.var_2611].Var5 = 8;
                    Gvar.var_610 = 1;
                }
            }
            if (Gvar.var_610 == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0 && Gvar.var_607 != 1 && Gvar.var_71[Gvar.var_425][Gvar.var_428] != 13 && Gvar.var_82[Gvar.var_425][Gvar.var_428] == 0 && Gvar.var_83[Gvar.var_2611].Var10 != 14) {
                Gvar.var_423 = Gvar.var_423 - 1;
                Gvar.var_424 = Gvar.var_424 - 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 7;
                Gvar.var_610 = 1;
            }
            if (Gvar.var_610 == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0 && Gvar.var_608 != 1 && Gvar.var_71[Gvar.var_426][Gvar.var_427] != 13 && Gvar.var_82[Gvar.var_426][Gvar.var_427] == 0 && Gvar.var_83[Gvar.var_2611].Var10 != 14) {
                Gvar.var_423 = Gvar.var_423 + 1;
                Gvar.var_424 = Gvar.var_424 + 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 3;
                Gvar.var_610 = 1;
            }
            if (Gvar.var_610 == 0 && Gvar.var_602 != 1 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 13 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0 && Gvar.var_83[Gvar.var_2611].Var10 != 14) {
                Gvar.var_423 = Gvar.var_423 - 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 4;
                Gvar.var_610 = 1;
            }
            if (Gvar.var_610 == 0 && Gvar.var_604 != 1 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 13 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0 && Gvar.var_83[Gvar.var_2611].Var10 != 14) {
                Gvar.var_424 = Gvar.var_424 + 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 2;
                Gvar.var_610 = 1;
            }
        }
        if (Gvar.var_66 < Gvar.var_423 && Gvar.var_67 == Gvar.var_424) {
            if (Gvar.var_610 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0 && Gvar.var_602 != 1 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 13) {
                Gvar.var_423 = Gvar.var_423 - 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 4;
                Gvar.var_610 = 1;
            }
            if (Gvar.var_610 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0 && Gvar.var_607 != 1 && Gvar.var_71[Gvar.var_425][Gvar.var_428] != 13) {
                Gvar.var_423 = Gvar.var_423 - 1;
                Gvar.var_424 = Gvar.var_424 - 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 7;
                Gvar.var_610 = 1;
            }
            if (Gvar.var_610 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0 && Gvar.var_606 != 1 && Gvar.var_71[Gvar.var_425][Gvar.var_427] != 13) {
                Gvar.var_423 = Gvar.var_423 - 1;
                Gvar.var_424 = Gvar.var_424 + 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 1;
                Gvar.var_610 = 1;
            }
            if (Gvar.var_610 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0 && Gvar.var_605 != 1 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 13 && Gvar.var_83[Gvar.var_2611].Var10 != 14) {
                Gvar.var_424 = Gvar.var_424 - 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 8;
                Gvar.var_610 = 1;
            }
            if (Gvar.var_610 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0 && Gvar.var_604 != 1 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 13 && Gvar.var_83[Gvar.var_2611].Var10 != 14) {
                Gvar.var_424 = Gvar.var_424 + 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 2;
                Gvar.var_610 = 1;
            }
        }
        if (Gvar.var_66 > Gvar.var_423 && Gvar.var_67 == Gvar.var_424) {
            if (Gvar.var_610 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0 && Gvar.var_603 != 1 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 13) {
                Gvar.var_423 = Gvar.var_423 + 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 6;
                Gvar.var_610 = 1;
            }
            if (Gvar.var_610 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0 && Gvar.var_608 != 1 && Gvar.var_71[Gvar.var_426][Gvar.var_427] != 13) {
                Gvar.var_423 = Gvar.var_423 + 1;
                Gvar.var_424 = Gvar.var_424 + 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 3;
                Gvar.var_610 = 1;
            }
            if (Gvar.var_610 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0 && Gvar.var_609 != 1 && Gvar.var_71[Gvar.var_426][Gvar.var_428] != 13) {
                Gvar.var_423 = Gvar.var_423 + 1;
                Gvar.var_424 = Gvar.var_424 - 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 9;
                Gvar.var_610 = 1;
            }
            if (Gvar.var_610 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0 && Gvar.var_604 != 1 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 13 && Gvar.var_83[Gvar.var_2611].Var10 != 14) {
                Gvar.var_424 = Gvar.var_424 + 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 2;
                Gvar.var_610 = 1;
            }
            if (Gvar.var_610 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0 && Gvar.var_605 != 1 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 13 && Gvar.var_83[Gvar.var_2611].Var10 != 14) {
                Gvar.var_424 = Gvar.var_424 - 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 8;
                Gvar.var_610 = 1;
            }
        }
        if (Gvar.var_66 == Gvar.var_423 && Gvar.var_67 < Gvar.var_424) {
            if (Gvar.var_610 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0 && Gvar.var_605 != 1 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 13) {
                Gvar.var_424 = Gvar.var_424 - 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 8;
                Gvar.var_610 = 1;
            }
            if (Gvar.var_610 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0 && Gvar.var_609 != 1 && Gvar.var_71[Gvar.var_426][Gvar.var_428] != 13) {
                Gvar.var_423 = Gvar.var_423 + 1;
                Gvar.var_424 = Gvar.var_424 - 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 9;
                Gvar.var_610 = 1;
            }
            if (Gvar.var_610 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0 && Gvar.var_607 != 1 && Gvar.var_71[Gvar.var_425][Gvar.var_428] != 13) {
                Gvar.var_423 = Gvar.var_423 - 1;
                Gvar.var_424 = Gvar.var_424 - 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 7;
                Gvar.var_610 = 1;
            }
            if (Gvar.var_610 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0 && Gvar.var_603 != 1 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 13 && Gvar.var_83[Gvar.var_2611].Var10 != 14) {
                Gvar.var_423 = Gvar.var_423 + 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 6;
                Gvar.var_610 = 1;
            }
            if (Gvar.var_610 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0 && Gvar.var_602 != 1 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 13 && Gvar.var_83[Gvar.var_2611].Var10 != 14) {
                Gvar.var_423 = Gvar.var_423 - 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 4;
                Gvar.var_610 = 1;
            }
        }
        if (Gvar.var_66 == Gvar.var_423 && Gvar.var_67 > Gvar.var_424) {
            if (Gvar.var_610 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0 && Gvar.var_604 != 1 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 13) {
                Gvar.var_424 = Gvar.var_424 + 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 2;
                Gvar.var_610 = 1;
            }
            if (Gvar.var_610 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0 && Gvar.var_606 != 1 && Gvar.var_71[Gvar.var_425][Gvar.var_427] != 13) {
                Gvar.var_423 = Gvar.var_423 - 1;
                Gvar.var_424 = Gvar.var_424 + 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 1;
                Gvar.var_610 = 1;
            }
            if (Gvar.var_610 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0 && Gvar.var_608 != 1 && Gvar.var_71[Gvar.var_426][Gvar.var_427] != 13) {
                Gvar.var_423 = Gvar.var_423 + 1;
                Gvar.var_424 = Gvar.var_424 + 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 3;
                Gvar.var_610 = 1;
            }
            if (Gvar.var_610 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0 && Gvar.var_602 != 1 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 13 && Gvar.var_83[Gvar.var_2611].Var10 != 14) {
                Gvar.var_423 = Gvar.var_423 - 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 4;
                Gvar.var_610 = 1;
            }
            if (Gvar.var_610 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0 && Gvar.var_603 != 1 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 13 && Gvar.var_83[Gvar.var_2611].Var10 != 14) {
                Gvar.var_423 = Gvar.var_423 + 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 6;
                Gvar.var_610 = 1;
            }
        }
        return;
}

export {func570}
