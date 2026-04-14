/**
 * func546 — func546 不明
 *
 * (org原典: newDTW_func5)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func546(this: any) {
        Adap.dbgprt(546);
        Gvar.var_423 = Gvar.var_81[Gvar.var_2480][1];
        Gvar.var_424 = Gvar.var_81[Gvar.var_2480][2];
        Gvar.var_2481 = Gvar.var_81[Gvar.var_2480][1];
        Gvar.var_2482 = Gvar.var_81[Gvar.var_2480][2];
        Gvar.var_81[Gvar.var_2480][6] = 0;
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
        Gvar.var_2483 = 0;
        Gvar.var_2484 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_97; ++cnt1) {
            if (Gvar.var_83[Gvar.var_2484].Var0 != 0 && Gvar.var_83[Gvar.var_2484].Var0 != 50 && Gvar.var_83[Gvar.var_2484].Var31 != 4 && Gvar.var_83[Gvar.var_2484].Var31 != 5 && Gvar.var_83[Gvar.var_2484].Var10 == Gvar.var_81[Gvar.var_2480][5]) {
                Gvar.var_2485 = Gvar.var_83[Gvar.var_2484].Var1;
                Gvar.var_774 = Gvar.var_83[Gvar.var_2484].Var2;
                Gvar.var_2483 = 1;
                break;
            }
            Gvar.var_2484++;
        }
        Gvar.var_610 = 0;
        for (let cnt1 = 0; cnt1 < 50; ++cnt1) {
            Gvar.var_2486 = Adap.rnd(8);
            if (Gvar.var_2483 == 1) {
                Gvar.var_2487 = Adap.rnd(12);
                if (Gvar.var_2487 >= 0 && Gvar.var_2487 < 6) {
                    if (Gvar.var_2485 < Gvar.var_423 && Gvar.var_774 < Gvar.var_424) {
                        Gvar.var_2486 = 5;
                    }
                    if (Gvar.var_2485 == Gvar.var_423 && Gvar.var_774 < Gvar.var_424) {
                        Gvar.var_2486 = 6;
                    }
                    if (Gvar.var_2485 > Gvar.var_423 && Gvar.var_774 < Gvar.var_424) {
                        Gvar.var_2486 = 7;
                    }
                    if (Gvar.var_2485 < Gvar.var_423 && Gvar.var_774 == Gvar.var_424) {
                        Gvar.var_2486 = 3;
                    }
                    if (Gvar.var_2485 > Gvar.var_423 && Gvar.var_774 == Gvar.var_424) {
                        Gvar.var_2486 = 4;
                    }
                    if (Gvar.var_2485 < Gvar.var_423 && Gvar.var_774 > Gvar.var_424) {
                        Gvar.var_2486 = 0;
                    }
                    if (Gvar.var_2485 == Gvar.var_423 && Gvar.var_774 > Gvar.var_424) {
                        Gvar.var_2486 = 1;
                    }
                    if (Gvar.var_2485 > Gvar.var_423 && Gvar.var_774 > Gvar.var_424) {
                        Gvar.var_2486 = 2;
                    }
                }
            }
            if (Gvar.var_2486 == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_427] != 0 && Gvar.var_71[Gvar.var_425][Gvar.var_427] != 13 && Gvar.var_80[Gvar.var_425][Gvar.var_427] == 0 && Gvar.var_77[Gvar.var_425][Gvar.var_427] == 0) {
                Gvar.var_423 = Gvar.var_423 - 1;
                Gvar.var_424 = Gvar.var_424 + 1;
                Gvar.var_610 = 1;
                Gvar.var_81[Gvar.var_2480][6] = 1;
            }
            if (Gvar.var_2486 == 1 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 13 && Gvar.var_80[Gvar.var_423][Gvar.var_427] == 0 && Gvar.var_77[Gvar.var_423][Gvar.var_427] == 0) {
                Gvar.var_424 = Gvar.var_424 + 1;
                Gvar.var_610 = 1;
                Gvar.var_81[Gvar.var_2480][6] = 2;
            }
            if (Gvar.var_2486 == 2 && Gvar.var_71[Gvar.var_426][Gvar.var_427] != 0 && Gvar.var_71[Gvar.var_426][Gvar.var_427] != 13 && Gvar.var_80[Gvar.var_426][Gvar.var_427] == 0 && Gvar.var_77[Gvar.var_426][Gvar.var_427] == 0) {
                Gvar.var_423 = Gvar.var_423 + 1;
                Gvar.var_424 = Gvar.var_424 + 1;
                Gvar.var_610 = 1;
                Gvar.var_81[Gvar.var_2480][6] = 3;
            }
            if (Gvar.var_2486 == 3 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 13 && Gvar.var_80[Gvar.var_425][Gvar.var_424] == 0 && Gvar.var_77[Gvar.var_425][Gvar.var_424] == 0) {
                Gvar.var_423 = Gvar.var_423 - 1;
                Gvar.var_610 = 1;
                Gvar.var_81[Gvar.var_2480][6] = 4;
            }
            if (Gvar.var_2486 == 4 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 13 && Gvar.var_80[Gvar.var_426][Gvar.var_424] == 0 && Gvar.var_77[Gvar.var_426][Gvar.var_424] == 0) {
                Gvar.var_423 = Gvar.var_423 + 1;
                Gvar.var_610 = 1;
                Gvar.var_81[Gvar.var_2480][6] = 6;
            }
            if (Gvar.var_2486 == 5 && Gvar.var_71[Gvar.var_425][Gvar.var_428] != 0 && Gvar.var_71[Gvar.var_425][Gvar.var_428] != 13 && Gvar.var_80[Gvar.var_425][Gvar.var_428] == 0 && Gvar.var_77[Gvar.var_425][Gvar.var_428] == 0) {
                Gvar.var_423 = Gvar.var_423 - 1;
                Gvar.var_424 = Gvar.var_424 - 1;
                Gvar.var_610 = 1;
                Gvar.var_81[Gvar.var_2480][6] = 7;
            }
            if (Gvar.var_2486 == 6 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 13 && Gvar.var_80[Gvar.var_423][Gvar.var_428] == 0 && Gvar.var_77[Gvar.var_423][Gvar.var_428] == 0) {
                Gvar.var_424 = Gvar.var_424 - 1;
                Gvar.var_610 = 1;
                Gvar.var_81[Gvar.var_2480][6] = 8;
            }
            if (Gvar.var_2486 == 7 && Gvar.var_71[Gvar.var_426][Gvar.var_428] != 0 && Gvar.var_71[Gvar.var_426][Gvar.var_428] != 13 && Gvar.var_80[Gvar.var_426][Gvar.var_428] == 0 && Gvar.var_77[Gvar.var_426][Gvar.var_428] == 0) {
                Gvar.var_423 = Gvar.var_423 + 1;
                Gvar.var_424 = Gvar.var_424 - 1;
                Gvar.var_610 = 1;
                Gvar.var_81[Gvar.var_2480][6] = 9;
            }
            if (Gvar.var_610 == 1) {
                break;
            }
        }
        if (Gvar.var_610 == 1) {
            Gvar.var_80[Gvar.var_2481][Gvar.var_2482] = 0;
            Gvar.var_81[Gvar.var_2480][1] = Gvar.var_423;
            Gvar.var_81[Gvar.var_2480][2] = Gvar.var_424;
            Gvar.var_81[Gvar.var_2480][5] = Gvar.var_71[Gvar.var_423][Gvar.var_424];
            Gvar.var_80[Gvar.var_423][Gvar.var_424] = Gvar.var_2480;
        }
        return;
}

export {func546}
