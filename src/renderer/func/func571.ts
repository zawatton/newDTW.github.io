/**
 * func571 — func571 不明
 *
 * (org原典: newDTW_func5)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func571(this: any) {
        Adap.dbgprt(571);
        if (Gvar.var_83[Gvar.var_2611].Var5 == 1 && Gvar.var_610 == 0) {
            if (Gvar.var_610 == 0 && Gvar.var_604 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] == 14) {
                Gvar.var_424 = Gvar.var_424 + 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 2;
                Gvar.var_610 = 1;
            }
            if (Gvar.var_610 == 0 && Gvar.var_605 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] == 14) {
                Gvar.var_424 = Gvar.var_424 - 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 8;
                Gvar.var_610 = 1;
            }
            if (Gvar.var_610 == 0 && Gvar.var_603 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] == 14) {
                Gvar.var_423 = Gvar.var_423 + 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 6;
                Gvar.var_610 = 1;
            }
            if (Gvar.var_610 == 0 && Gvar.var_602 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] == 14) {
                Gvar.var_423 = Gvar.var_423 - 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 4;
                Gvar.var_610 = 1;
            }
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
            if (Gvar.var_610 == 0 && Gvar.var_604 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] == 14) {
                Gvar.var_424 = Gvar.var_424 + 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 2;
                Gvar.var_610 = 1;
            }
            if (Gvar.var_610 == 0 && Gvar.var_605 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] == 14) {
                Gvar.var_424 = Gvar.var_424 - 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 8;
                Gvar.var_610 = 1;
            }
            if (Gvar.var_610 == 0 && Gvar.var_603 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] == 14) {
                Gvar.var_423 = Gvar.var_423 + 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 6;
                Gvar.var_610 = 1;
            }
            if (Gvar.var_610 == 0 && Gvar.var_602 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] == 14) {
                Gvar.var_423 = Gvar.var_423 - 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 4;
                Gvar.var_610 = 1;
            }
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
            if (Gvar.var_610 == 0 && Gvar.var_604 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] == 14) {
                Gvar.var_424 = Gvar.var_424 + 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 2;
                Gvar.var_610 = 1;
            }
            if (Gvar.var_610 == 0 && Gvar.var_605 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] == 14) {
                Gvar.var_424 = Gvar.var_424 - 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 8;
                Gvar.var_610 = 1;
            }
            if (Gvar.var_610 == 0 && Gvar.var_603 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] == 14) {
                Gvar.var_423 = Gvar.var_423 + 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 6;
                Gvar.var_610 = 1;
            }
            if (Gvar.var_610 == 0 && Gvar.var_602 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] == 14) {
                Gvar.var_423 = Gvar.var_423 - 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 4;
                Gvar.var_610 = 1;
            }
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
            if (Gvar.var_610 == 0 && Gvar.var_604 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] == 14) {
                Gvar.var_424 = Gvar.var_424 + 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 2;
                Gvar.var_610 = 1;
            }
            if (Gvar.var_610 == 0 && Gvar.var_605 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] == 14) {
                Gvar.var_424 = Gvar.var_424 - 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 8;
                Gvar.var_610 = 1;
            }
            if (Gvar.var_610 == 0 && Gvar.var_603 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] == 14) {
                Gvar.var_423 = Gvar.var_423 + 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 6;
                Gvar.var_610 = 1;
            }
            if (Gvar.var_610 == 0 && Gvar.var_602 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] == 14) {
                Gvar.var_423 = Gvar.var_423 - 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 4;
                Gvar.var_610 = 1;
            }
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
            if (Gvar.var_610 == 0 && Gvar.var_604 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] == 14) {
                Gvar.var_424 = Gvar.var_424 + 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 2;
                Gvar.var_610 = 1;
            }
            if (Gvar.var_610 == 0 && Gvar.var_603 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] == 14 && Gvar.var_83[Gvar.var_2611].Var34 != 14) {
                Gvar.var_423 = Gvar.var_423 + 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 6;
                Gvar.var_610 = 1;
            }
            if (Gvar.var_610 == 0 && Gvar.var_602 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] == 14) {
                Gvar.var_423 = Gvar.var_423 - 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 4;
                Gvar.var_610 = 1;
            }
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
            if (Gvar.var_610 == 0 && Gvar.var_605 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] == 14) {
                Gvar.var_424 = Gvar.var_424 - 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 8;
                Gvar.var_610 = 1;
            }
            if (Gvar.var_610 == 0 && Gvar.var_603 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] == 14) {
                Gvar.var_423 = Gvar.var_423 + 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 6;
                Gvar.var_610 = 1;
            }
            if (Gvar.var_610 == 0 && Gvar.var_602 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] == 14 && Gvar.var_83[Gvar.var_2611].Var34 != 14) {
                Gvar.var_423 = Gvar.var_423 - 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 4;
                Gvar.var_610 = 1;
            }
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
            if (Gvar.var_610 == 0 && Gvar.var_604 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] == 14 && Gvar.var_83[Gvar.var_2611].Var34 != 14) {
                Gvar.var_424 = Gvar.var_424 + 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 2;
                Gvar.var_610 = 1;
            }
            if (Gvar.var_610 == 0 && Gvar.var_605 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] == 14) {
                Gvar.var_424 = Gvar.var_424 - 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 8;
                Gvar.var_610 = 1;
            }
            if (Gvar.var_610 == 0 && Gvar.var_602 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] == 14) {
                Gvar.var_423 = Gvar.var_423 - 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 4;
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
            if (Gvar.var_610 == 0 && Gvar.var_604 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 13) {
                Gvar.var_424 = Gvar.var_424 + 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 2;
                Gvar.var_610 = 1;
            }
        }
        if (Gvar.var_83[Gvar.var_2611].Var5 == 6 && Gvar.var_610 == 0) {
            if (Gvar.var_610 == 0 && Gvar.var_604 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] == 14) {
                Gvar.var_424 = Gvar.var_424 + 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 2;
                Gvar.var_610 = 1;
            }
            if (Gvar.var_610 == 0 && Gvar.var_605 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] == 14 && Gvar.var_83[Gvar.var_2611].Var34 != 14) {
                Gvar.var_424 = Gvar.var_424 - 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 8;
                Gvar.var_610 = 1;
            }
            if (Gvar.var_610 == 0 && Gvar.var_603 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] == 14) {
                Gvar.var_423 = Gvar.var_423 + 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 6;
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
            if (Gvar.var_610 == 0 && Gvar.var_605 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 13) {
                Gvar.var_424 = Gvar.var_424 - 1;
                Gvar.var_83[Gvar.var_2611].Var5 = 8;
                Gvar.var_610 = 1;
            }
        }
        return;
}

export {func571}
