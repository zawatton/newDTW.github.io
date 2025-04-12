import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func566(this: any) {
        Adap.gmode(2, null, null, null);
        Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 10);
        if (Gvar.var_83[Gvar.var_1641].Var7 == 1) {
            if (Gvar.var_742 <= 3 || Gvar.var_742 >= 10) {
                Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 10);
            }
            if (Gvar.var_742 == 4 || Gvar.var_742 == 5 || Gvar.var_742 == 9) {
                if (Gvar.var_1640 == 4) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - 10, Gvar.var_763 * Gvar.var_36 - 10);
                }
                if (Gvar.var_1640 == 6) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + 10, Gvar.var_763 * Gvar.var_36 - 10);
                }
                if (Gvar.var_1640 == 2) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 + 10 - 10);
                }
                if (Gvar.var_1640 == 8) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 10 - 10);
                }
                if (Gvar.var_1640 == 1) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - 10, Gvar.var_763 * Gvar.var_36 + 10 - 10);
                }
                if (Gvar.var_1640 == 3) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + 10, Gvar.var_763 * Gvar.var_36 + 10 - 10);
                }
                if (Gvar.var_1640 == 7) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - 10, Gvar.var_763 * Gvar.var_36 - 10 - 10);
                }
                if (Gvar.var_1640 == 9) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + 10, Gvar.var_763 * Gvar.var_36 - 10 - 10);
                }
            }
            if (Gvar.var_742 == 6 || Gvar.var_742 == 7 || Gvar.var_742 == 8) {
                if (Gvar.var_1640 == 4) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - 20, Gvar.var_763 * Gvar.var_36 - 10);
                }
                if (Gvar.var_1640 == 6) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + 20, Gvar.var_763 * Gvar.var_36 - 10);
                }
                if (Gvar.var_1640 == 2) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 + 20 - 10);
                }
                if (Gvar.var_1640 == 8) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 20 - 10);
                }
                if (Gvar.var_1640 == 1) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - 20, Gvar.var_763 * Gvar.var_36 + 20 - 10);
                }
                if (Gvar.var_1640 == 3) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + 20, Gvar.var_763 * Gvar.var_36 + 20 - 10);
                }
                if (Gvar.var_1640 == 7) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - 20, Gvar.var_763 * Gvar.var_36 - 20 - 10);
                }
                if (Gvar.var_1640 == 9) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + 20, Gvar.var_763 * Gvar.var_36 - 20 - 10);
                }
            }
            if (Gvar.var_743 == 1) { //スタンド像付与フラグがONの場合
                if (Gvar.var_1211 <= 3 || Gvar.var_1211 > 9) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 10);
                }
                if (Gvar.var_1211 == 4 || Gvar.var_1211 == 5 || Gvar.var_1211 == 9) {
                    if (Gvar.var_1640 == 4) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 5, Gvar.var_763 * Gvar.var_36 - 10);
                    }
                    if (Gvar.var_1640 == 6) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 5, Gvar.var_763 * Gvar.var_36 - 10);
                    }
                    if (Gvar.var_1640 == 2) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 + 5 - 10);
                    }
                    if (Gvar.var_1640 == 8) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 5 - 10);
                    }
                    if (Gvar.var_1640 == 1) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 5, Gvar.var_763 * Gvar.var_36 + 5 - 10);
                    }
                    if (Gvar.var_1640 == 3) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 5, Gvar.var_763 * Gvar.var_36 + 5 - 10);
                    }
                    if (Gvar.var_1640 == 7) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 5, Gvar.var_763 * Gvar.var_36 - 5 - 10);
                    }
                    if (Gvar.var_1640 == 9) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 5, Gvar.var_763 * Gvar.var_36 - 5 - 10);
                    }
                }
                if (Gvar.var_1211 == 6 || Gvar.var_1211 == 7 || Gvar.var_1211 == 8) {
                    if (Gvar.var_1640 == 4) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 10, Gvar.var_763 * Gvar.var_36 - 10);
                    }
                    if (Gvar.var_1640 == 6) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 10, Gvar.var_763 * Gvar.var_36 - 10);
                    }
                    if (Gvar.var_1640 == 2) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 + 10 - 10);
                    }
                    if (Gvar.var_1640 == 8) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 10 - 10);
                    }
                    if (Gvar.var_1640 == 1) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 10, Gvar.var_763 * Gvar.var_36 + 10 - 10);
                    }
                    if (Gvar.var_1640 == 3) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 10, Gvar.var_763 * Gvar.var_36 + 10 - 10);
                    }
                    if (Gvar.var_1640 == 7) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 10, Gvar.var_763 * Gvar.var_36 - 10 - 10);
                    }
                    if (Gvar.var_1640 == 9) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 10, Gvar.var_763 * Gvar.var_36 - 10 - 10);
                    }
                }
            }
            // Gvar.enemy_list == 140 ジョナサン
            if (Gvar.var_83[Gvar.var_1641].Var0 == 140) {
                if (Gvar.var_742 <= 3 || Gvar.var_742 >= 10) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 10);
                }
                if (Gvar.var_742 == 4 || Gvar.var_742 == 5 || Gvar.var_742 == 9) {
                    if (Gvar.var_1640 == 4) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 10, Gvar.var_763 * Gvar.var_36 - 10);
                    }
                    if (Gvar.var_1640 == 6) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 10, Gvar.var_763 * Gvar.var_36 - 10);
                    }
                    if (Gvar.var_1640 == 2) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 + 10 - 10);
                    }
                    if (Gvar.var_1640 == 8) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 10 - 10);
                    }
                    if (Gvar.var_1640 == 1) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 10, Gvar.var_763 * Gvar.var_36 + 10 - 10);
                    }
                    if (Gvar.var_1640 == 3) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 10, Gvar.var_763 * Gvar.var_36 + 10 - 10);
                    }
                    if (Gvar.var_1640 == 7) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 10, Gvar.var_763 * Gvar.var_36 - 10 - 10);
                    }
                    if (Gvar.var_1640 == 9) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 10, Gvar.var_763 * Gvar.var_36 - 10 - 10);
                    }
                }
                if (Gvar.var_742 == 6 || Gvar.var_742 == 8) {
                    if (Gvar.var_1640 == 4) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 20, Gvar.var_763 * Gvar.var_36 - 10);
                    }
                    if (Gvar.var_1640 == 6) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 20, Gvar.var_763 * Gvar.var_36 - 10);
                    }
                    if (Gvar.var_1640 == 2) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 + 20 - 10);
                    }
                    if (Gvar.var_1640 == 8) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 20 - 10);
                    }
                    if (Gvar.var_1640 == 1) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 20, Gvar.var_763 * Gvar.var_36 + 20 - 10);
                    }
                    if (Gvar.var_1640 == 3) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 20, Gvar.var_763 * Gvar.var_36 + 20 - 10);
                    }
                    if (Gvar.var_1640 == 7) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 20, Gvar.var_763 * Gvar.var_36 - 20 - 10);
                    }
                    if (Gvar.var_1640 == 9) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 20, Gvar.var_763 * Gvar.var_36 - 20 - 10);
                    }
                }
                if (Gvar.var_742 == 7) {
                    if (Gvar.var_1640 == 4) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 20, Gvar.var_763 * Gvar.var_36 - 10);
                    }
                    if (Gvar.var_1640 == 6) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 20, Gvar.var_763 * Gvar.var_36 - 10);
                    }
                    if (Gvar.var_1640 == 2) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 + 20 - 10);
                    }
                    if (Gvar.var_1640 == 8) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 20 - 10);
                    }
                    if (Gvar.var_1640 == 1) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 25, Gvar.var_763 * Gvar.var_36 + 25 - 10);
                    }
                    if (Gvar.var_1640 == 3) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 25, Gvar.var_763 * Gvar.var_36 + 25 - 10);
                    }
                    if (Gvar.var_1640 == 7) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 25, Gvar.var_763 * Gvar.var_36 - 25 - 10);
                    }
                    if (Gvar.var_1640 == 9) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 25, Gvar.var_763 * Gvar.var_36 - 25 - 10);
                    }
                }
            }
            // Gvar.enemy_list == 168 警備員の西戸
            if (Gvar.var_83[Gvar.var_1641].Var0 == 168) {
                if (Gvar.var_742 <= 3 || Gvar.var_742 >= 10) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 10);
                }
                if (Gvar.var_742 == 4 || Gvar.var_742 == 5 || Gvar.var_742 == 9) {
                    if (Gvar.var_1640 == 4) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 10, Gvar.var_763 * Gvar.var_36 - 10);
                    }
                    if (Gvar.var_1640 == 6) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 10, Gvar.var_763 * Gvar.var_36 - 10);
                    }
                    if (Gvar.var_1640 == 2) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 + 10 - 10);
                    }
                    if (Gvar.var_1640 == 8) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 10 - 10);
                    }
                    if (Gvar.var_1640 == 1) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 10, Gvar.var_763 * Gvar.var_36 + 10 - 10);
                    }
                    if (Gvar.var_1640 == 3) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 10, Gvar.var_763 * Gvar.var_36 + 10 - 10);
                    }
                    if (Gvar.var_1640 == 7) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 10, Gvar.var_763 * Gvar.var_36 - 10 - 10);
                    }
                    if (Gvar.var_1640 == 9) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 10, Gvar.var_763 * Gvar.var_36 - 10 - 10);
                    }
                }
                if (Gvar.var_742 == 6 || Gvar.var_742 == 8) {
                    if (Gvar.var_1640 == 4) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 20, Gvar.var_763 * Gvar.var_36 - 10);
                    }
                    if (Gvar.var_1640 == 6) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 20, Gvar.var_763 * Gvar.var_36 - 10);
                    }
                    if (Gvar.var_1640 == 2) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 + 20 - 10);
                    }
                    if (Gvar.var_1640 == 8) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 20 - 10);
                    }
                    if (Gvar.var_1640 == 1) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 15, Gvar.var_763 * Gvar.var_36 + 15 - 10);
                    }
                    if (Gvar.var_1640 == 3) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 15, Gvar.var_763 * Gvar.var_36 + 15 - 10);
                    }
                    if (Gvar.var_1640 == 7) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 15, Gvar.var_763 * Gvar.var_36 - 15 - 10);
                    }
                    if (Gvar.var_1640 == 9) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 15, Gvar.var_763 * Gvar.var_36 - 15 - 10);
                    }
                }
                if (Gvar.var_742 == 7) {
                    if (Gvar.var_1640 == 4) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 20, Gvar.var_763 * Gvar.var_36 - 10);
                    }
                    if (Gvar.var_1640 == 6) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 20, Gvar.var_763 * Gvar.var_36 - 10);
                    }
                    if (Gvar.var_1640 == 2) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 + 20 - 10);
                    }
                    if (Gvar.var_1640 == 8) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 20 - 10);
                    }
                    if (Gvar.var_1640 == 1) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 20, Gvar.var_763 * Gvar.var_36 + 20 - 10);
                    }
                    if (Gvar.var_1640 == 3) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 20, Gvar.var_763 * Gvar.var_36 + 20 - 10);
                    }
                    if (Gvar.var_1640 == 7) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 20, Gvar.var_763 * Gvar.var_36 - 20 - 10);
                    }
                    if (Gvar.var_1640 == 9) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 20, Gvar.var_763 * Gvar.var_36 - 20 - 10);
                    }
                }
            }
            // Gvar.enemy_list == 22 アヴドゥル人形、Gvar.enemy_list == 17 シアハートアタック、Gvar.enemy_list == 71 ドゥービー
            if (Gvar.var_83[Gvar.var_1641].Var0 == 22 || Gvar.var_83[Gvar.var_1641].Var0 == 17 || Gvar.var_83[Gvar.var_1641].Var0 == 71) {
                if (Gvar.var_742 <= 2 || Gvar.var_742 >= 16) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 10);
                }
                if (Gvar.var_742 == 3 || Gvar.var_742 == 15) {
                    if (Gvar.var_1640 == 4) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 10, Gvar.var_763 * Gvar.var_36 - 10);
                    }
                    if (Gvar.var_1640 == 6) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 10, Gvar.var_763 * Gvar.var_36 - 10);
                    }
                    if (Gvar.var_1640 == 2) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 + 10 - 10);
                    }
                    if (Gvar.var_1640 == 8) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 10 - 10);
                    }
                    if (Gvar.var_1640 == 1) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 10, Gvar.var_763 * Gvar.var_36 + 10 - 10);
                    }
                    if (Gvar.var_1640 == 3) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 10, Gvar.var_763 * Gvar.var_36 + 10 - 10);
                    }
                    if (Gvar.var_1640 == 7) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 10, Gvar.var_763 * Gvar.var_36 - 10 - 10);
                    }
                    if (Gvar.var_1640 == 9) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 10, Gvar.var_763 * Gvar.var_36 - 10 - 10);
                    }
                }
                if (Gvar.var_742 >= 4 && Gvar.var_742 < 15) {
                    if (Gvar.var_1640 == 4) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 20, Gvar.var_763 * Gvar.var_36 - 10);
                    }
                    if (Gvar.var_1640 == 6) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 20, Gvar.var_763 * Gvar.var_36 - 10);
                    }
                    if (Gvar.var_1640 == 2) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 + 20 - 10);
                    }
                    if (Gvar.var_1640 == 8) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 20 - 10);
                    }
                    if (Gvar.var_1640 == 1) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 20, Gvar.var_763 * Gvar.var_36 + 20 - 10);
                    }
                    if (Gvar.var_1640 == 3) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 20, Gvar.var_763 * Gvar.var_36 + 20 - 10);
                    }
                    if (Gvar.var_1640 == 7) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 20, Gvar.var_763 * Gvar.var_36 - 20 - 10);
                    }
                    if (Gvar.var_1640 == 9) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 20, Gvar.var_763 * Gvar.var_36 - 20 - 10);
                    }
                }
            }
            // Gvar.enemy_list == 29 グリーン・ディ、Gvar.enemy_list == 34 トニオさん(ブチ切れ)
            if (Gvar.var_83[Gvar.var_1641].Var0 == 29 || Gvar.var_83[Gvar.var_1641].Var0 == 34) {
                if (Gvar.var_742 <= 5 || Gvar.var_742 >= 16) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 10);
                }
                if (Gvar.var_742 == 6 || Gvar.var_742 == 15) {
                    if (Gvar.var_1640 == 4) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 10, Gvar.var_763 * Gvar.var_36 - 10);
                    }
                    if (Gvar.var_1640 == 6) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 10, Gvar.var_763 * Gvar.var_36 - 10);
                    }
                    if (Gvar.var_1640 == 2) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 + 10 - 10);
                    }
                    if (Gvar.var_1640 == 8) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 10 - 10);
                    }
                    if (Gvar.var_1640 == 1) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 10, Gvar.var_763 * Gvar.var_36 + 10 - 10);
                    }
                    if (Gvar.var_1640 == 3) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 10, Gvar.var_763 * Gvar.var_36 + 10 - 10);
                    }
                    if (Gvar.var_1640 == 7) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 10, Gvar.var_763 * Gvar.var_36 - 10 - 10);
                    }
                    if (Gvar.var_1640 == 9) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 10, Gvar.var_763 * Gvar.var_36 - 10 - 10);
                    }
                }
                if (Gvar.var_742 >= 7 && Gvar.var_742 < 15) {
                    if (Gvar.var_1640 == 4) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 20, Gvar.var_763 * Gvar.var_36 - 10);
                    }
                    if (Gvar.var_1640 == 6) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 20, Gvar.var_763 * Gvar.var_36 - 10);
                    }
                    if (Gvar.var_1640 == 2) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 + 20 - 10);
                    }
                    if (Gvar.var_1640 == 8) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 20 - 10);
                    }
                    if (Gvar.var_1640 == 1) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 20, Gvar.var_763 * Gvar.var_36 + 20 - 10);
                    }
                    if (Gvar.var_1640 == 3) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 20, Gvar.var_763 * Gvar.var_36 + 20 - 10);
                    }
                    if (Gvar.var_1640 == 7) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 20, Gvar.var_763 * Gvar.var_36 - 20 - 10);
                    }
                    if (Gvar.var_1640 == 9) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 20, Gvar.var_763 * Gvar.var_36 - 20 - 10);
                    }
                }
            }
            // Gvar.enemy_list == 44 レッドホットチリペッパー
            if (Gvar.var_83[Gvar.var_1641].Var0 == 44) {
                if (Gvar.var_742 == 1 || Gvar.var_742 >= 12) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 10);
                }
                if (Gvar.var_742 == 2 || Gvar.var_742 == 11) {
                    if (Gvar.var_1640 == 4) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 10, Gvar.var_763 * Gvar.var_36 - 10);
                    }
                    if (Gvar.var_1640 == 6) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 10, Gvar.var_763 * Gvar.var_36 - 10);
                    }
                    if (Gvar.var_1640 == 2) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 + 10 - 10);
                    }
                    if (Gvar.var_1640 == 8) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 10 - 10);
                    }
                    if (Gvar.var_1640 == 1) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 10, Gvar.var_763 * Gvar.var_36 + 10 - 10);
                    }
                    if (Gvar.var_1640 == 3) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 10, Gvar.var_763 * Gvar.var_36 + 10 - 10);
                    }
                    if (Gvar.var_1640 == 7) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 10, Gvar.var_763 * Gvar.var_36 - 10 - 10);
                    }
                    if (Gvar.var_1640 == 9) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 10, Gvar.var_763 * Gvar.var_36 - 10 - 10);
                    }
                }
                if (Gvar.var_742 >= 3 && Gvar.var_742 <= 10) {
                    if (Gvar.var_1640 == 4) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 20, Gvar.var_763 * Gvar.var_36 - 10);
                    }
                    if (Gvar.var_1640 == 6) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 20, Gvar.var_763 * Gvar.var_36 - 10);
                    }
                    if (Gvar.var_1640 == 2) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 + 20 - 10);
                    }
                    if (Gvar.var_1640 == 8) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 20 - 10);
                    }
                    if (Gvar.var_1640 == 1) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 20, Gvar.var_763 * Gvar.var_36 + 20 - 10);
                    }
                    if (Gvar.var_1640 == 3) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 20, Gvar.var_763 * Gvar.var_36 + 20 - 10);
                    }
                    if (Gvar.var_1640 == 7) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 20, Gvar.var_763 * Gvar.var_36 - 20 - 10);
                    }
                    if (Gvar.var_1640 == 9) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 20, Gvar.var_763 * Gvar.var_36 - 20 - 10);
                    }
                }
            }
            // Gvar.enemy_list == 164 エシディシの脳、Gvar.enemy_list == 165 エボニーデビル
            if (Gvar.var_83[Gvar.var_1641].Var0 == 164 || Gvar.var_83[Gvar.var_1641].Var0 == 165) {
                if (Gvar.var_742 <= 3) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 10);
                }
                if (Gvar.var_742 == 4 || Gvar.var_742 == 5) {
                    if (Gvar.var_1640 == 4) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 10, Gvar.var_763 * Gvar.var_36 - 10);
                    }
                    if (Gvar.var_1640 == 6) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 10, Gvar.var_763 * Gvar.var_36 - 10);
                    }
                    if (Gvar.var_1640 == 2) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 + 10 - 10);
                    }
                    if (Gvar.var_1640 == 8) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 10 - 10);
                    }
                    if (Gvar.var_1640 == 1) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 10, Gvar.var_763 * Gvar.var_36 + 10 - 10);
                    }
                    if (Gvar.var_1640 == 3) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 10, Gvar.var_763 * Gvar.var_36 + 10 - 10);
                    }
                    if (Gvar.var_1640 == 7) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 10, Gvar.var_763 * Gvar.var_36 - 10 - 10);
                    }
                    if (Gvar.var_1640 == 9) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 10, Gvar.var_763 * Gvar.var_36 - 10 - 10);
                    }
                }
                if (Gvar.var_742 == 6 || Gvar.var_742 == 7) {
                    if (Gvar.var_1640 == 4) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 20, Gvar.var_763 * Gvar.var_36 - 10);
                    }
                    if (Gvar.var_1640 == 6) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 20, Gvar.var_763 * Gvar.var_36 - 10);
                    }
                    if (Gvar.var_1640 == 2) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 + 20 - 10);
                    }
                    if (Gvar.var_1640 == 8) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 20 - 10);
                    }
                    if (Gvar.var_1640 == 1) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 20, Gvar.var_763 * Gvar.var_36 + 20 - 10);
                    }
                    if (Gvar.var_1640 == 3) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 20, Gvar.var_763 * Gvar.var_36 + 20 - 10);
                    }
                    if (Gvar.var_1640 == 7) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 20, Gvar.var_763 * Gvar.var_36 - 20 - 10);
                    }
                    if (Gvar.var_1640 == 9) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 20, Gvar.var_763 * Gvar.var_36 - 20 - 10);
                    }
                }
                if (Gvar.var_742 == 8 || Gvar.var_742 >= 9) {
                    if (Gvar.var_1640 == 4) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 30, Gvar.var_763 * Gvar.var_36 - 10);
                    }
                    if (Gvar.var_1640 == 6) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 30, Gvar.var_763 * Gvar.var_36 - 10);
                    }
                    if (Gvar.var_1640 == 2) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 + 30 - 10);
                    }
                    if (Gvar.var_1640 == 8) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 30 - 10);
                    }
                    if (Gvar.var_1640 == 1) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 30, Gvar.var_763 * Gvar.var_36 + 30 - 10);
                    }
                    if (Gvar.var_1640 == 3) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 30, Gvar.var_763 * Gvar.var_36 + 30 - 10);
                    }
                    if (Gvar.var_1640 == 7) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 - 30, Gvar.var_763 * Gvar.var_36 - 30 - 10);
                    }
                    if (Gvar.var_1640 == 9) {
                        Adap.pos(Gvar.var_764 * Gvar.var_35 + 30, Gvar.var_763 * Gvar.var_36 - 30 - 10);
                    }
                }
            }
        }
        if (Gvar.var_83[Gvar.var_1641].Var6 >= 1 && Gvar.var_83[Gvar.var_1641].Var7 == 0) {
            if (Gvar.var_1640 == 4) {
                if (Gvar.var_199 == 4) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10);
                }
                if (Gvar.var_199 == 6) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10);
                }
                if (Gvar.var_199 == 8) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577);
                }
                if (Gvar.var_199 == 2) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 1) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 3) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 7) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577);
                }
                if (Gvar.var_199 == 9) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577);
                }
                if (Gvar.var_217 == 1) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10);
                }
            }
            if (Gvar.var_1640 == 6) {
                if (Gvar.var_199 == 4) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10);
                }
                if (Gvar.var_199 == 6) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10);
                }
                if (Gvar.var_199 == 8) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577);
                }
                if (Gvar.var_199 == 2) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 1) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 3) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 7) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577);
                }
                if (Gvar.var_199 == 9) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577);
                }
                if (Gvar.var_217 == 1) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10);
                }
            }
            if (Gvar.var_1640 == 8) {
                if (Gvar.var_199 == 4) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 6) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 8) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577 - Gvar.var_2577);
                }
                if (Gvar.var_199 == 2) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 1) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 3) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 7) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577 - Gvar.var_2577);
                }
                if (Gvar.var_199 == 9) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577 - Gvar.var_2577);
                }
                if (Gvar.var_217 == 1) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577);
                }
            }
            if (Gvar.var_1640 == 2) {
                if (Gvar.var_199 == 4) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577);
                }
                if (Gvar.var_199 == 6) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577);
                }
                if (Gvar.var_199 == 8) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577 - Gvar.var_2577);
                }
                if (Gvar.var_199 == 2) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 1) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 3) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 7) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577 - Gvar.var_2577);
                }
                if (Gvar.var_199 == 9) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577 - Gvar.var_2577);
                }
                if (Gvar.var_217 == 1) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577);
                }
            }
            if (Gvar.var_1640 == 1) {
                if (Gvar.var_199 == 4) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577);
                }
                if (Gvar.var_199 == 6) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577);
                }
                if (Gvar.var_199 == 8) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577 - Gvar.var_2577);
                }
                if (Gvar.var_199 == 2) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 1) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 3) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 7) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577 - Gvar.var_2577);
                }
                if (Gvar.var_199 == 9) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577 - Gvar.var_2577);
                }
                if (Gvar.var_217 == 1) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577);
                }
            }
            if (Gvar.var_1640 == 3) {
                if (Gvar.var_199 == 4) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577);
                }
                if (Gvar.var_199 == 6) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577);
                }
                if (Gvar.var_199 == 8) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577 - Gvar.var_2577);
                }
                if (Gvar.var_199 == 2) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 1) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 3) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 7) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577 - Gvar.var_2577);
                }
                if (Gvar.var_199 == 9) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577 - Gvar.var_2577);
                }
                if (Gvar.var_217 == 1) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577);
                }
            }
            if (Gvar.var_1640 == 7) {
                if (Gvar.var_199 == 4) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 6) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 8) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577 - Gvar.var_2577);
                }
                if (Gvar.var_199 == 2) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 1) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 3) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 7) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577 - Gvar.var_2577);
                }
                if (Gvar.var_199 == 9) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577 - Gvar.var_2577);
                }
                if (Gvar.var_217 == 1) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577);
                }
            }
            if (Gvar.var_1640 == 9) {
                if (Gvar.var_199 == 4) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 6) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 8) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577 - Gvar.var_2577);
                }
                if (Gvar.var_199 == 2) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 1) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 3) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 7) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577 - Gvar.var_2577);
                }
                if (Gvar.var_199 == 9) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577 - Gvar.var_2577);
                }
                if (Gvar.var_217 == 1) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577);
                }
            }
        }
        if (Gvar.var_83[Gvar.var_1641].Var6 == 0 && Gvar.var_83[Gvar.var_1641].Var7 == 0) {
            if (Gvar.var_199 == 4) {
                Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10);
            }
            if (Gvar.var_199 == 6) {
                Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10);
            }
            if (Gvar.var_199 == 8) {
                Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - Gvar.var_2577 - 10);
            }
            if (Gvar.var_199 == 2) {
                Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 + Gvar.var_2577 - 10);
            }
            if (Gvar.var_199 == 1) {
                Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577);
            }
            if (Gvar.var_199 == 3) {
                Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577);
            }
            if (Gvar.var_199 == 7) {
                Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577);
            }
            if (Gvar.var_199 == 9) {
                Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577);
            }
            if (Gvar.var_217 == 1) {
                Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 10);
            }
        }
        if (Gvar.var_83[Gvar.var_1641].Var18 >= 1) {
            if (Gvar.var_199 == 4) {
                Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10);
            }
            if (Gvar.var_199 == 6) {
                Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10);
            }
            if (Gvar.var_199 == 8) {
                Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - Gvar.var_2577 - 10);
            }
            if (Gvar.var_199 == 2) {
                Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 + Gvar.var_2577 - 10);
            }
            if (Gvar.var_199 == 1) {
                Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577);
            }
            if (Gvar.var_199 == 3) {
                Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577);
            }
            if (Gvar.var_199 == 7) {
                Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577);
            }
            if (Gvar.var_199 == 9) {
                Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577);
            }
            if (Gvar.var_217 == 1) {
                Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 10);
            }
            // Gvar.enemy_list = 21 ストレイキャット
            if (Gvar.var_83[Gvar.var_1641].Var0 == 21 && Gvar.var_742 == 4) {
                if (Gvar.var_1640 == 4) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577 + 3, Gvar.var_763 * Gvar.var_36 - 10);
                }
                if (Gvar.var_1640 == 6) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577 - 3, Gvar.var_763 * Gvar.var_36 - 10);
                }
                if (Gvar.var_1640 == 8) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - Gvar.var_2577 - 10 + 3);
                }
                if (Gvar.var_1640 == 2) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 + Gvar.var_2577 - 10 - 3);
                }
                if (Gvar.var_1640 == 1) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577 + 3, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577 - 3);
                }
                if (Gvar.var_1640 == 3) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577 - 3, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577 - 3);
                }
                if (Gvar.var_1640 == 7) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577 + 3, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577 + 3);
                }
                if (Gvar.var_1640 == 9) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577 - 3, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577 + 3);
                }
            }
        }
        if (Gvar.var_83[Gvar.var_1641].Var15 == 4 && Gvar.var_409 != 0) {
            if (Gvar.var_409 == 1) {
                Gvar.var_764 = Gvar.var_83[Gvar.var_1641].Var35 - Gvar.var_66 + 4;
                Gvar.var_763 = Gvar.var_83[Gvar.var_1641].Var36 - Gvar.var_67 + 4;
                Gvar.var_1640 = Gvar.var_83[Gvar.var_1641].Var37;
                Gvar.var_2577 = 10;
            }
            if (Gvar.var_409 == 2) {
                Gvar.var_764 = Gvar.var_83[Gvar.var_1641].Var35 - Gvar.var_66 + 4;
                Gvar.var_763 = Gvar.var_83[Gvar.var_1641].Var36 - Gvar.var_67 + 4;
                Gvar.var_1640 = Gvar.var_83[Gvar.var_1641].Var37;
                Gvar.var_2577 = 20;
            }
            if (Gvar.var_409 == 3) {
                Gvar.var_764 = Gvar.var_83[Gvar.var_1641].Var35 - Gvar.var_66 + 4;
                Gvar.var_763 = Gvar.var_83[Gvar.var_1641].Var36 - Gvar.var_67 + 4;
                Gvar.var_1640 = Gvar.var_83[Gvar.var_1641].Var37;
                Gvar.var_2577 = 30;
            }
            if (Gvar.var_1640 == 4) {
                if (Gvar.var_199 == 4) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10);
                }
                if (Gvar.var_199 == 6) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10);
                }
                if (Gvar.var_199 == 8) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577);
                }
                if (Gvar.var_199 == 2) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 1) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 3) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 7) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577);
                }
                if (Gvar.var_199 == 9) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577);
                }
                if (Gvar.var_217 == 1) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10);
                }
            }
            if (Gvar.var_1640 == 6) {
                if (Gvar.var_199 == 4) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10);
                }
                if (Gvar.var_199 == 6) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10);
                }
                if (Gvar.var_199 == 8) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577);
                }
                if (Gvar.var_199 == 2) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 1) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 3) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 7) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577);
                }
                if (Gvar.var_199 == 9) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577);
                }
                if (Gvar.var_217 == 1) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10);
                }
            }
            if (Gvar.var_1640 == 8) {
                if (Gvar.var_199 == 4) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 6) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 8) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577 - Gvar.var_2577);
                }
                if (Gvar.var_199 == 2) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 1) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 3) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 7) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577 - Gvar.var_2577);
                }
                if (Gvar.var_199 == 9) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577 - Gvar.var_2577);
                }
                if (Gvar.var_217 == 1) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577);
                }
            }
            if (Gvar.var_1640 == 2) {
                if (Gvar.var_199 == 4) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577);
                }
                if (Gvar.var_199 == 6) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577);
                }
                if (Gvar.var_199 == 8) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577 - Gvar.var_2577);
                }
                if (Gvar.var_199 == 2) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 1) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 3) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 7) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577 - Gvar.var_2577);
                }
                if (Gvar.var_199 == 9) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577 - Gvar.var_2577);
                }
                if (Gvar.var_217 == 1) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577);
                }
            }
            if (Gvar.var_1640 == 1) {
                if (Gvar.var_199 == 4) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577);
                }
                if (Gvar.var_199 == 6) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577);
                }
                if (Gvar.var_199 == 8) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577 - Gvar.var_2577);
                }
                if (Gvar.var_199 == 2) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 1) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 3) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 7) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577 - Gvar.var_2577);
                }
                if (Gvar.var_199 == 9) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577 - Gvar.var_2577);
                }
                if (Gvar.var_217 == 1) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577);
                }
            }
            if (Gvar.var_1640 == 3) {
                if (Gvar.var_199 == 4) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577);
                }
                if (Gvar.var_199 == 6) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577);
                }
                if (Gvar.var_199 == 8) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577 - Gvar.var_2577);
                }
                if (Gvar.var_199 == 2) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 1) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 3) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 7) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577 - Gvar.var_2577);
                }
                if (Gvar.var_199 == 9) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577 - Gvar.var_2577);
                }
                if (Gvar.var_217 == 1) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577);
                }
            }
            if (Gvar.var_1640 == 7) {
                if (Gvar.var_199 == 4) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 6) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 8) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577 - Gvar.var_2577);
                }
                if (Gvar.var_199 == 2) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 1) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 3) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 7) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577 - Gvar.var_2577);
                }
                if (Gvar.var_199 == 9) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577 - Gvar.var_2577);
                }
                if (Gvar.var_217 == 1) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577);
                }
            }
            if (Gvar.var_1640 == 9) {
                if (Gvar.var_199 == 4) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 6) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 8) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577 - Gvar.var_2577);
                }
                if (Gvar.var_199 == 2) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 1) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 3) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577 + Gvar.var_2577);
                }
                if (Gvar.var_199 == 7) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577 - Gvar.var_2577);
                }
                if (Gvar.var_199 == 9) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577 - Gvar.var_2577);
                }
                if (Gvar.var_217 == 1) {
                    Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577);
                }
            }
        }
        if (Gvar.var_83[Gvar.var_1641].Var12 >= 1) {
            if (Gvar.var_199 == 4) {
                Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10);
            }
            if (Gvar.var_199 == 6) {
                Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10);
            }
            if (Gvar.var_199 == 8) {
                Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - Gvar.var_2577 - 10);
            }
            if (Gvar.var_199 == 2) {
                Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 + Gvar.var_2577 - 10);
            }
            if (Gvar.var_199 == 1) {
                Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577);
            }
            if (Gvar.var_199 == 3) {
                Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577);
            }
            if (Gvar.var_199 == 7) {
                Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577);
            }
            if (Gvar.var_199 == 9) {
                Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577);
            }
            if (Gvar.var_217 == 1) {
                Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 10);
            }
        }
        if (Gvar.var_83[Gvar.var_1641].Var21 == 1 && Gvar.var_2578 == 1) {
            if (Gvar.var_1640 == 4) {
                Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - 2);
            }
            if (Gvar.var_1640 == 6) {
                Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - 2);
            }
            if (Gvar.var_1640 == 8) {
                Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - Gvar.var_2577 - 10 - 2);
            }
            if (Gvar.var_1640 == 2) {
                Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 + Gvar.var_2577 - 10 - 2);
            }
            if (Gvar.var_1640 == 1) {
                Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577 - 2);
            }
            if (Gvar.var_1640 == 3) {
                Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577 - 2);
            }
            if (Gvar.var_1640 == 7) {
                Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577 - 2);
            }
            if (Gvar.var_1640 == 9) {
                Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577 - 2);
            }
        }
        if (Gvar.var_83[Gvar.var_1641].Var32 == 99) {
            Adap.pos(Gvar.var_764 * Gvar.var_35 - 1, Gvar.var_763 * Gvar.var_36 - 10);
        }
        if (Gvar.time_paused == 1) { // 時止め(時消し飛ばし)状態の場合
            if (Gvar.var_199 == 4) {
                Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10);
            }
            if (Gvar.var_199 == 6) {
                Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10);
            }
            if (Gvar.var_199 == 8) {
                Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - Gvar.var_2577 - 10);
            }
            if (Gvar.var_199 == 2) {
                Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 + Gvar.var_2577 - 10);
            }
            if (Gvar.var_199 == 1) {
                Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577);
            }
            if (Gvar.var_199 == 3) {
                Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 + Gvar.var_2577);
            }
            if (Gvar.var_199 == 7) {
                Adap.pos(Gvar.var_764 * Gvar.var_35 - Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577);
            }
            if (Gvar.var_199 == 9) {
                Adap.pos(Gvar.var_764 * Gvar.var_35 + Gvar.var_2577, Gvar.var_763 * Gvar.var_36 - 10 - Gvar.var_2577);
            }
            if (Gvar.var_217 == 1) {
                Adap.pos(Gvar.var_764 * Gvar.var_35, Gvar.var_763 * Gvar.var_36 - 10);
            }
        }
        Gvar.var_2579 = Gvar.var_66 - 2;
        if (Gvar.var_2579 < 0) {
            Gvar.var_2579 = 0;
        }
        Gvar.var_2580 = Gvar.var_66 + 2;
        if (Gvar.var_2580 > Gvar.var_31 + 2) {
            Gvar.var_2580 = Gvar.var_31;
        }
        Gvar.var_2581 = Gvar.var_67 + 2;
        if (Gvar.var_2581 > Gvar.var_34 + 2) {
            Gvar.var_2581 = Gvar.var_34;
        }
        Gvar.var_2582 = Gvar.var_67 - 2;
        if (Gvar.var_2582 < 0) {
            Gvar.var_2582 = 0;
        }
        Gvar.var_2583 = Gvar.var_83[Gvar.var_1641].Var1;
        Gvar.var_2584 = Gvar.var_83[Gvar.var_1641].Var2;
        Gvar.var_2585 = Gvar.var_83[Gvar.var_1641].Var1 - 1;
        if (Gvar.var_2585 < 0) {
            Gvar.var_2585 = 0;
        }
        Gvar.var_2586 = Gvar.var_83[Gvar.var_1641].Var1 + 1;
        Gvar.var_2587 = Gvar.var_83[Gvar.var_1641].Var2 + 1;
        Gvar.var_2588 = Gvar.var_83[Gvar.var_1641].Var2 - 1;
        if (Gvar.var_2588 < 0) {
            Gvar.var_2588 = 0;
        }
        Gvar.var_2589 = Gvar.var_83[Gvar.var_1641].Var1 - 2;
        if (Gvar.var_2589 < 0) {
            Gvar.var_2589 = 0;
        }
        Gvar.var_2590 = Gvar.var_83[Gvar.var_1641].Var1 + 2;
        Gvar.var_2591 = Gvar.var_83[Gvar.var_1641].Var2 + 2;
        Gvar.var_2592 = Gvar.var_83[Gvar.var_1641].Var2 - 2;
        if (Gvar.var_2592 < 0) {
            Gvar.var_2592 = 0;
        }
        Gvar.var_1642 = 1;
        await Func.func567();  // 敵キャラアイコンの指定 (各imageからドットを指定する)
}

export {func566}
