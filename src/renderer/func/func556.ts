import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func556(this: any) {
        Adap.dbgprt(556);
        // No = 1 なので、ホテルの外
        if (Gvar.dungeon_number == 1 && Gvar.current_floor == 12 && Gvar.special_floor == 0 && Gvar.var_386 == 0) {
            return;
        }
        if (Gvar.var_97 > 150 && Gvar.var_123 == 0) {
            return;
        }
        if (Gvar.var_97 > 200) {
            return;
        }
        Gvar.var_97 = Gvar.var_97 + 1;
        Gvar.var_673 = Gvar.var_97;
        if (Gvar.var_1729 == 0) {
            if (Gvar.var_1845 == 0) {
                if (Gvar.var_1728 == 0 && Gvar.var_1371 == 0) {
                    Gvar.var_1731 = 0;
                    Gvar.var_2510 = Gvar.var_66 - 8;
                    if (Gvar.var_2510 < 0) {
                        Gvar.var_2510 = 0;
                    }
                    Gvar.var_2511 = Gvar.var_66 + 8;
                    if (Gvar.var_2511 > Gvar.var_33) {
                        Gvar.var_2511 = Gvar.var_33;
                    }
                    Gvar.var_2512 = Gvar.var_67 + 8;
                    if (Gvar.var_2512 > Gvar.var_34) {
                        Gvar.var_2512 = Gvar.var_34;
                    }
                    Gvar.var_2513 = Gvar.var_67 - 8;
                    if (Gvar.var_2513 < 0) {
                        Gvar.var_2513 = 0;
                    }
                    for (let cnt4 = 0; cnt4 < 500; ++cnt4) {
                        Gvar.var_440 = Adap.rnd(Gvar.var_33);
                        Gvar.var_441 = Adap.rnd(Gvar.var_34);
                        if (Gvar.var_440 > Gvar.var_2510 && Gvar.var_440 < Gvar.var_2511 && Gvar.var_441 > Gvar.var_2513 && Gvar.var_441 < Gvar.var_2512) {
                            continue;
                        }
                        if (Gvar.var_493[1] == 1 && Gvar.var_71[Gvar.var_440][Gvar.var_441] == 1 && Gvar.var_65[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_82[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_72[Gvar.var_440][Gvar.var_441] == 0) {
                            Gvar.var_2499 = 1;
                            Gvar.var_1731 = 1;
                            break;
                        }
                        if (Gvar.var_493[2] == 1 && Gvar.var_71[Gvar.var_440][Gvar.var_441] == 2 && Gvar.var_65[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_82[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_72[Gvar.var_440][Gvar.var_441] == 0) {
                            Gvar.var_2499 = 2;
                            Gvar.var_1731 = 1;
                            break;
                        }
                        if (Gvar.var_493[3] == 1 && Gvar.var_71[Gvar.var_440][Gvar.var_441] == 3 && Gvar.var_65[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_82[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_72[Gvar.var_440][Gvar.var_441] == 0) {
                            Gvar.var_2499 = 3;
                            Gvar.var_1731 = 1;
                            break;
                        }
                        if (Gvar.var_493[4] == 1 && Gvar.var_71[Gvar.var_440][Gvar.var_441] == 4 && Gvar.var_65[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_82[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_72[Gvar.var_440][Gvar.var_441] == 0) {
                            Gvar.var_2499 = 4;
                            Gvar.var_1731 = 1;
                            break;
                        }
                        if (Gvar.var_493[5] == 1 && Gvar.var_71[Gvar.var_440][Gvar.var_441] == 5 && Gvar.var_65[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_82[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_72[Gvar.var_440][Gvar.var_441] == 0) {
                            Gvar.var_2499 = 5;
                            Gvar.var_1731 = 1;
                            break;
                        }
                        if (Gvar.var_493[6] == 1 && Gvar.var_71[Gvar.var_440][Gvar.var_441] == 6 && Gvar.var_65[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_82[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_72[Gvar.var_440][Gvar.var_441] == 0) {
                            Gvar.var_2499 = 6;
                            Gvar.var_1731 = 1;
                            break;
                        }
                        if (Gvar.var_493[7] == 1 && Gvar.var_71[Gvar.var_440][Gvar.var_441] == 7 && Gvar.var_65[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_82[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_72[Gvar.var_440][Gvar.var_441] == 0) {
                            Gvar.var_2499 = 7;
                            Gvar.var_1731 = 1;
                            break;
                        }
                        if (Gvar.var_493[8] == 1 && Gvar.var_71[Gvar.var_440][Gvar.var_441] == 8 && Gvar.var_65[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_82[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_72[Gvar.var_440][Gvar.var_441] == 0) {
                            Gvar.var_2499 = 8;
                            Gvar.var_1731 = 1;
                            break;
                        }
                        if (Gvar.var_493[9] == 1 && Gvar.var_71[Gvar.var_440][Gvar.var_441] == 9 && Gvar.var_65[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_82[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_72[Gvar.var_440][Gvar.var_441] == 0) {
                            Gvar.var_2499 = 9;
                            Gvar.var_1731 = 1;
                            break;
                        }
                        if (Gvar.var_493[10] == 1 && Gvar.var_71[Gvar.var_440][Gvar.var_441] == 10 && Gvar.var_65[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_82[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_72[Gvar.var_440][Gvar.var_441] == 0) {
                            Gvar.var_2499 = 10;
                            Gvar.var_1731 = 1;
                            break;
                        }
                        if (Gvar.var_493[11] == 1 && Gvar.var_71[Gvar.var_440][Gvar.var_441] == 11 && Gvar.var_65[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_82[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_72[Gvar.var_440][Gvar.var_441] == 0) {
                            Gvar.var_2499 = 11;
                            Gvar.var_1731 = 1;
                            break;
                        }
                        if (Gvar.var_493[12] == 1 && Gvar.var_71[Gvar.var_440][Gvar.var_441] == 12 && Gvar.var_65[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_82[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_72[Gvar.var_440][Gvar.var_441] == 0) {
                            Gvar.var_2499 = 12;
                            Gvar.var_1731 = 1;
                            break;
                        }
                        // 幻覚の迷宮
                        if (Gvar.special_floor == 8 && Gvar.var_71[Gvar.var_440][Gvar.var_441] == 14 && Gvar.var_65[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_82[Gvar.var_440][Gvar.var_441] == 0) {
                            Gvar.var_2499 = 14;
                            Gvar.var_1731 = 1;
                            break;
                        }
                    }
                    if (Gvar.var_1731 == 0) {
                        Gvar.var_97 = Gvar.var_97 - 1;
                        return;
                    }
                }
                if (Gvar.var_1728 == 1 && Gvar.var_1371 == 0) {
                    Gvar.var_1731 = 0;
                    for (let cnt4 = 0; cnt4 < 500; ++cnt4) {
                        Gvar.var_440 = Adap.rnd(Gvar.var_33);
                        Gvar.var_441 = Adap.rnd(Gvar.var_34);
                        if (Gvar.var_71[Gvar.var_440][Gvar.var_441] == Gvar.var_204 && Gvar.var_65[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_82[Gvar.var_440][Gvar.var_441] == 0) {
                            Gvar.var_2499 = Gvar.var_204;
                            Gvar.var_1731 = 1;
                            break;
                        }
                    }
                    if (Gvar.var_1731 == 0) {
                        Gvar.var_97 = Gvar.var_97 - 1;
                        return;
                    }
                }
            }
            if (Gvar.var_1845 == 1) {
                Gvar.var_2514 = Gvar.var_66 - 1;
                Gvar.var_2515 = Gvar.var_67 + 1;
                Gvar.var_2516 = Gvar.var_66 + 1;
                Gvar.var_2517 = Gvar.var_67 - 1;
                Gvar.var_2110 = 0;
                for (let cnt3 = 0; cnt3 < 100; ++cnt3) {
                    Gvar.var_2518 = Adap.rnd(8);
                    if (Gvar.var_2518 == 0 && Gvar.var_71[Gvar.var_66][Gvar.var_2517] != 0 && Gvar.var_71[Gvar.var_66][Gvar.var_2517] != 13 && Gvar.var_82[Gvar.var_66][Gvar.var_2517] == 0 && Gvar.var_65[Gvar.var_66][Gvar.var_2517] == 0) {
                        Gvar.var_2110 = 1;
                        Gvar.var_440 = Gvar.var_66;
                        Gvar.var_441 = Gvar.var_2517;
                        Gvar.var_2499 = Gvar.var_71[Gvar.var_66][Gvar.var_2517];
                        Gvar.var_2111 = 8;
                        break;
                    }
                    if (Gvar.var_2518 == 1 && Gvar.var_71[Gvar.var_2514][Gvar.var_67] != 0 && Gvar.var_71[Gvar.var_2514][Gvar.var_67] != 13 && Gvar.var_82[Gvar.var_2514][Gvar.var_67] == 0 && Gvar.var_65[Gvar.var_2514][Gvar.var_67] == 0) {
                        Gvar.var_2110 = 1;
                        Gvar.var_440 = Gvar.var_2514;
                        Gvar.var_441 = Gvar.var_67;
                        Gvar.var_2499 = Gvar.var_71[Gvar.var_2514][Gvar.var_67];
                        Gvar.var_2111 = 4;
                        break;
                    }
                    if (Gvar.var_2518 == 2 && Gvar.var_71[Gvar.var_2516][Gvar.var_67] != 0 && Gvar.var_71[Gvar.var_2516][Gvar.var_67] != 13 && Gvar.var_82[Gvar.var_2516][Gvar.var_67] == 0 && Gvar.var_65[Gvar.var_2516][Gvar.var_67] == 0) {
                        Gvar.var_2110 = 1;
                        Gvar.var_440 = Gvar.var_2516;
                        Gvar.var_441 = Gvar.var_67;
                        Gvar.var_2499 = Gvar.var_71[Gvar.var_2516][Gvar.var_67];
                        Gvar.var_2111 = 6;
                        break;
                    }
                    if (Gvar.var_2518 == 3 && Gvar.var_71[Gvar.var_66][Gvar.var_2515] != 0 && Gvar.var_71[Gvar.var_66][Gvar.var_2515] != 13 && Gvar.var_82[Gvar.var_66][Gvar.var_2515] == 0 && Gvar.var_65[Gvar.var_66][Gvar.var_2515] == 0) {
                        Gvar.var_2110 = 1;
                        Gvar.var_440 = Gvar.var_66;
                        Gvar.var_441 = Gvar.var_2515;
                        Gvar.var_2499 = Gvar.var_71[Gvar.var_66][Gvar.var_2515];
                        Gvar.var_2111 = 2;
                        break;
                    }
                    if (Gvar.var_2518 == 4 && Gvar.var_71[Gvar.var_2514][Gvar.var_2517] != 0 && Gvar.var_71[Gvar.var_2514][Gvar.var_2517] != 13 && Gvar.var_82[Gvar.var_2514][Gvar.var_2517] == 0 && Gvar.var_65[Gvar.var_2514][Gvar.var_2517] == 0) {
                        Gvar.var_2110 = 1;
                        Gvar.var_440 = Gvar.var_2514;
                        Gvar.var_441 = Gvar.var_2517;
                        Gvar.var_2499 = Gvar.var_71[Gvar.var_2514][Gvar.var_2517];
                        Gvar.var_2111 = 7;
                        break;
                    }
                    if (Gvar.var_2518 == 5 && Gvar.var_71[Gvar.var_2516][Gvar.var_2517] != 0 && Gvar.var_71[Gvar.var_2516][Gvar.var_2517] != 13 && Gvar.var_82[Gvar.var_2516][Gvar.var_2517] == 0 && Gvar.var_65[Gvar.var_2516][Gvar.var_2517] == 0) {
                        Gvar.var_2110 = 1;
                        Gvar.var_440 = Gvar.var_2516;
                        Gvar.var_441 = Gvar.var_2517;
                        Gvar.var_2499 = Gvar.var_71[Gvar.var_2516][Gvar.var_2517];
                        Gvar.var_2111 = 9;
                        break;
                    }
                    if (Gvar.var_2518 == 6 && Gvar.var_71[Gvar.var_2514][Gvar.var_2515] != 0 && Gvar.var_71[Gvar.var_2514][Gvar.var_2515] != 13 && Gvar.var_82[Gvar.var_2514][Gvar.var_2515] == 0 && Gvar.var_65[Gvar.var_2514][Gvar.var_2515] == 0) {
                        Gvar.var_2110 = 1;
                        Gvar.var_440 = Gvar.var_2514;
                        Gvar.var_441 = Gvar.var_2515;
                        Gvar.var_2499 = Gvar.var_71[Gvar.var_2514][Gvar.var_2515];
                        Gvar.var_2111 = 1;
                        break;
                    }
                    if (Gvar.var_2518 == 7 && Gvar.var_71[Gvar.var_2516][Gvar.var_2515] != 0 && Gvar.var_71[Gvar.var_2516][Gvar.var_2515] != 13 && Gvar.var_82[Gvar.var_2516][Gvar.var_2515] == 0 && Gvar.var_65[Gvar.var_2516][Gvar.var_2515] == 0) {
                        Gvar.var_2110 = 1;
                        Gvar.var_440 = Gvar.var_2516;
                        Gvar.var_441 = Gvar.var_2515;
                        Gvar.var_2499 = Gvar.var_71[Gvar.var_2516][Gvar.var_2515];
                        Gvar.var_2111 = 3;
                        break;
                    }
                }
                if (Gvar.var_2110 == 0) {
                    Gvar.var_97 = Gvar.var_97 - 1;
                    return;
                }
            }
            if (Gvar.var_1845 == 3) {
                Gvar.var_2514 = Gvar.var_1914 - 1;
                Gvar.var_2515 = Gvar.var_1915 + 1;
                Gvar.var_2516 = Gvar.var_1914 + 1;
                Gvar.var_2517 = Gvar.var_1915 - 1;
                Gvar.var_2110 = 0;
                if (Gvar.var_2110 == 0 && Gvar.var_71[Gvar.var_1914][Gvar.var_1915] != 0 && Gvar.var_71[Gvar.var_1914][Gvar.var_1915] != 13 && Gvar.var_82[Gvar.var_1914][Gvar.var_1915] == 0 && Gvar.var_65[Gvar.var_1914][Gvar.var_1915] == 0) {
                    Gvar.var_2110 = 1;
                    Gvar.var_440 = Gvar.var_1914;
                    Gvar.var_441 = Gvar.var_1915;
                    Gvar.var_2499 = Gvar.var_71[Gvar.var_1914][Gvar.var_1915];
                }
                if (Gvar.var_2110 == 0) {
                    for (let cnt4 = 0; cnt4 < 100; ++cnt4) {
                        Gvar.var_2518 = Adap.rnd(8);
                        if (Gvar.var_2518 == 0 && Gvar.var_71[Gvar.var_1914][Gvar.var_2517] != 0 && Gvar.var_71[Gvar.var_1914][Gvar.var_2517] != 13 && Gvar.var_82[Gvar.var_1914][Gvar.var_2517] == 0 && Gvar.var_65[Gvar.var_1914][Gvar.var_2517] == 0) {
                            Gvar.var_2110 = 1;
                            Gvar.var_440 = Gvar.var_1914;
                            Gvar.var_441 = Gvar.var_2517;
                            Gvar.var_2499 = Gvar.var_71[Gvar.var_1914][Gvar.var_2517];
                            break;
                        }
                        if (Gvar.var_2518 == 1 && Gvar.var_71[Gvar.var_2514][Gvar.var_1915] != 0 && Gvar.var_71[Gvar.var_2514][Gvar.var_1915] != 13 && Gvar.var_82[Gvar.var_2514][Gvar.var_1915] == 0 && Gvar.var_65[Gvar.var_2514][Gvar.var_1915] == 0) {
                            Gvar.var_2110 = 1;
                            Gvar.var_440 = Gvar.var_2514;
                            Gvar.var_441 = Gvar.var_1915;
                            Gvar.var_2499 = Gvar.var_71[Gvar.var_2514][Gvar.var_1915];
                            break;
                        }
                        if (Gvar.var_2518 == 2 && Gvar.var_71[Gvar.var_2516][Gvar.var_1915] != 0 && Gvar.var_71[Gvar.var_2516][Gvar.var_1915] != 13 && Gvar.var_82[Gvar.var_2516][Gvar.var_1915] == 0 && Gvar.var_65[Gvar.var_2516][Gvar.var_1915] == 0) {
                            Gvar.var_2110 = 1;
                            Gvar.var_440 = Gvar.var_2516;
                            Gvar.var_441 = Gvar.var_1915;
                            Gvar.var_2499 = Gvar.var_71[Gvar.var_2516][Gvar.var_1915];
                            break;
                        }
                        if (Gvar.var_2518 == 3 && Gvar.var_71[Gvar.var_1914][Gvar.var_2515] != 0 && Gvar.var_71[Gvar.var_1914][Gvar.var_2515] != 13 && Gvar.var_82[Gvar.var_1914][Gvar.var_2515] == 0 && Gvar.var_65[Gvar.var_1914][Gvar.var_2515] == 0) {
                            Gvar.var_2110 = 1;
                            Gvar.var_440 = Gvar.var_1914;
                            Gvar.var_441 = Gvar.var_2515;
                            Gvar.var_2499 = Gvar.var_71[Gvar.var_1914][Gvar.var_2515];
                            break;
                        }
                        if (Gvar.var_2518 == 4 && Gvar.var_71[Gvar.var_2514][Gvar.var_2517] != 0 && Gvar.var_71[Gvar.var_2514][Gvar.var_2517] != 13 && Gvar.var_82[Gvar.var_2514][Gvar.var_2517] == 0 && Gvar.var_65[Gvar.var_2514][Gvar.var_2517] == 0) {
                            Gvar.var_2110 = 1;
                            Gvar.var_440 = Gvar.var_2514;
                            Gvar.var_441 = Gvar.var_2517;
                            Gvar.var_2499 = Gvar.var_71[Gvar.var_2514][Gvar.var_2517];
                            break;
                        }
                        if (Gvar.var_2518 == 5 && Gvar.var_71[Gvar.var_2516][Gvar.var_2517] != 0 && Gvar.var_71[Gvar.var_2516][Gvar.var_2517] != 13 && Gvar.var_82[Gvar.var_2516][Gvar.var_2517] == 0 && Gvar.var_65[Gvar.var_2516][Gvar.var_2517] == 0) {
                            Gvar.var_2110 = 1;
                            Gvar.var_440 = Gvar.var_2516;
                            Gvar.var_441 = Gvar.var_2517;
                            Gvar.var_2499 = Gvar.var_71[Gvar.var_2516][Gvar.var_2517];
                            break;
                        }
                        if (Gvar.var_2518 == 6 && Gvar.var_71[Gvar.var_2514][Gvar.var_2515] != 0 && Gvar.var_71[Gvar.var_2514][Gvar.var_2515] != 13 && Gvar.var_82[Gvar.var_2514][Gvar.var_2515] == 0 && Gvar.var_65[Gvar.var_2514][Gvar.var_2515] == 0) {
                            Gvar.var_2110 = 1;
                            Gvar.var_440 = Gvar.var_2514;
                            Gvar.var_441 = Gvar.var_2515;
                            Gvar.var_2499 = Gvar.var_71[Gvar.var_2514][Gvar.var_2515];
                            break;
                        }
                        if (Gvar.var_2518 == 7 && Gvar.var_71[Gvar.var_2516][Gvar.var_2515] != 0 && Gvar.var_71[Gvar.var_2516][Gvar.var_2515] != 13 && Gvar.var_82[Gvar.var_2516][Gvar.var_2515] == 0 && Gvar.var_65[Gvar.var_2516][Gvar.var_2515] == 0) {
                            Gvar.var_2110 = 1;
                            Gvar.var_440 = Gvar.var_2516;
                            Gvar.var_441 = Gvar.var_2515;
                            Gvar.var_2499 = Gvar.var_71[Gvar.var_2516][Gvar.var_2515];
                            break;
                        }
                    }
                }
                if (Gvar.var_2110 == 0) {
                    Gvar.var_97 = Gvar.var_97 - 1;
                    return;
                }
            }
            if (Gvar.var_1845 == 2) {
                Gvar.var_440 = Gvar.var_78[Gvar.var_321].Var1;
                Gvar.var_441 = Gvar.var_78[Gvar.var_321].Var2;
                Gvar.var_2499 = Gvar.var_71[Gvar.var_440][Gvar.var_441];
            }
            if (Gvar.var_1845 == 4) {
                Gvar.var_440 = Gvar.var_2102;
                Gvar.var_441 = Gvar.var_2103;
                Gvar.var_2499 = Gvar.var_71[Gvar.var_440][Gvar.var_441];
            }
            if (Gvar.var_1845 == 5) {
                Gvar.var_2110 = 0;
                for (let cnt3 = 0; cnt3 < 500; ++cnt3) {
                    Gvar.var_440 = Adap.rnd(Gvar.var_33);
                    Gvar.var_441 = Adap.rnd(Gvar.var_34);
                    if (Gvar.var_71[Gvar.var_440][Gvar.var_441] != Gvar.var_2519) {
                        continue;
                    }
                    if (Gvar.var_493[1] == 1 && Gvar.var_71[Gvar.var_440][Gvar.var_441] == 1 && Gvar.var_65[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_82[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_72[Gvar.var_440][Gvar.var_441] == 0) {
                        Gvar.var_2499 = 1;
                        Gvar.var_2110 = 1;
                        break;
                    }
                    if (Gvar.var_493[2] == 1 && Gvar.var_71[Gvar.var_440][Gvar.var_441] == 2 && Gvar.var_65[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_82[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_72[Gvar.var_440][Gvar.var_441] == 0) {
                        Gvar.var_2499 = 2;
                        Gvar.var_2110 = 1;
                        break;
                    }
                    if (Gvar.var_493[3] == 1 && Gvar.var_71[Gvar.var_440][Gvar.var_441] == 3 && Gvar.var_65[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_82[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_72[Gvar.var_440][Gvar.var_441] == 0) {
                        Gvar.var_2499 = 3;
                        Gvar.var_2110 = 1;
                        break;
                    }
                    if (Gvar.var_493[4] == 1 && Gvar.var_71[Gvar.var_440][Gvar.var_441] == 4 && Gvar.var_65[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_82[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_72[Gvar.var_440][Gvar.var_441] == 0) {
                        Gvar.var_2499 = 4;
                        Gvar.var_2110 = 1;
                        break;
                    }
                    if (Gvar.var_493[5] == 1 && Gvar.var_71[Gvar.var_440][Gvar.var_441] == 5 && Gvar.var_65[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_82[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_72[Gvar.var_440][Gvar.var_441] == 0) {
                        Gvar.var_2499 = 5;
                        Gvar.var_2110 = 1;
                        break;
                    }
                    if (Gvar.var_493[6] == 1 && Gvar.var_71[Gvar.var_440][Gvar.var_441] == 6 && Gvar.var_65[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_82[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_72[Gvar.var_440][Gvar.var_441] == 0) {
                        Gvar.var_2499 = 6;
                        Gvar.var_2110 = 1;
                        break;
                    }
                    if (Gvar.var_493[7] == 1 && Gvar.var_71[Gvar.var_440][Gvar.var_441] == 7 && Gvar.var_65[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_82[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_72[Gvar.var_440][Gvar.var_441] == 0) {
                        Gvar.var_2499 = 7;
                        Gvar.var_2110 = 1;
                        break;
                    }
                    if (Gvar.var_493[8] == 1 && Gvar.var_71[Gvar.var_440][Gvar.var_441] == 8 && Gvar.var_65[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_82[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_72[Gvar.var_440][Gvar.var_441] == 0) {
                        Gvar.var_2499 = 8;
                        Gvar.var_2110 = 1;
                        break;
                    }
                    if (Gvar.var_493[9] == 1 && Gvar.var_71[Gvar.var_440][Gvar.var_441] == 9 && Gvar.var_65[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_82[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_72[Gvar.var_440][Gvar.var_441] == 0) {
                        Gvar.var_2499 = 9;
                        Gvar.var_2110 = 1;
                        break;
                    }
                    if (Gvar.var_493[10] == 1 && Gvar.var_71[Gvar.var_440][Gvar.var_441] == 10 && Gvar.var_65[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_82[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_72[Gvar.var_440][Gvar.var_441] == 0) {
                        Gvar.var_2499 = 10;
                        Gvar.var_2110 = 1;
                        break;
                    }
                    if (Gvar.var_493[11] == 1 && Gvar.var_71[Gvar.var_440][Gvar.var_441] == 11 && Gvar.var_65[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_82[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_72[Gvar.var_440][Gvar.var_441] == 0) {
                        Gvar.var_2499 = 11;
                        Gvar.var_2110 = 1;
                        break;
                    }
                    if (Gvar.var_493[12] == 1 && Gvar.var_71[Gvar.var_440][Gvar.var_441] == 12 && Gvar.var_65[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_82[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_72[Gvar.var_440][Gvar.var_441] == 0) {
                        Gvar.var_2499 = 12;
                        Gvar.var_2110 = 1;
                        break;
                    }
                    // 幻覚の迷宮
                    if (Gvar.special_floor == 8 && Gvar.var_71[Gvar.var_440][Gvar.var_441] == 14 && Gvar.var_65[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_82[Gvar.var_440][Gvar.var_441] == 0) {
                        Gvar.var_2499 = 14;
                        Gvar.var_2110 = 1;
                        break;
                    }
                }
                if (Gvar.var_2110 == 0) {
                    Gvar.var_97 = Gvar.var_97 - 1;
                    return;
                }
            }
        }
        if (Gvar.var_1729 == 1) {
            Gvar.var_440 = Gvar.var_1076;
            Gvar.var_441 = Gvar.var_1075;
            Gvar.var_2499 = Gvar.var_71[Gvar.var_440][Gvar.var_441];
            if (Gvar.var_82[Gvar.var_440][Gvar.var_441] != 0) {
                Gvar.var_97 = Gvar.var_97 - 1;
                return;
            }
        }
        if (Gvar.var_1729 == 0) {
            await Func.func627(); // 各ダンジョンごとの出現敵設定
            if (Gvar.var_85 == 1) {
                Gvar.var_2520 = Adap.rnd(2);
                if (Gvar.var_2520 == 0) {
                    Gvar.var_953 = 68;
                }
                if (Gvar.var_2520 == 1) {
                    Gvar.var_953 = 67;
                }
                // No = 4 なので、一巡後の世界
                if (Gvar.dungeon_number == 4) {
                    Gvar.var_953 = 168;
                }
            }
            if (Gvar.var_2521 == 1) {
                Gvar.var_2522 = Adap.rnd(3);
                if (Gvar.var_2522 == 0) {
                    Gvar.var_953 = 8;
                }
                if (Gvar.var_2522 == 1) {
                    Gvar.var_953 = 24;
                }
                if (Gvar.var_2522 == 2) {
                    Gvar.var_953 = 25;
                }
            }
            if (Gvar.var_2272 == 1) {
                Gvar.var_953 = 53;
            }
            if (Gvar.var_2523 == 1) {
                Gvar.var_953 = 17;
            }
            if (Gvar.var_2524 == 1) {
                Gvar.var_953 = 22;
            }
            if (Gvar.var_2215 == 1) {
                Gvar.var_953 = 18;
            }
            if (Gvar.var_1844 == 1) {
                Gvar.var_953 = 16;
            }
            if (Gvar.var_1844 == 2) {
                Gvar.var_953 = 62;
            }
            if (Gvar.var_2525 == 1) {
                Gvar.var_953 = 43;
            }
            if (Gvar.var_2525 == 2) {
                Gvar.var_953 = 29;
            }
            if (Gvar.var_1371 == 1) {
                Gvar.var_953 = 13;
            }
            if (Gvar.var_1374 >= 1) {
                Gvar.var_953 = Gvar.var_1374;
            }
            if (Gvar.var_2526 == 1) {
                Gvar.var_953 = 13;
            }
            if (Gvar.var_2527 == 1) {
                Gvar.var_953 = 36;
            }
            if (Gvar.var_2527 == 2) {
                Gvar.var_953 = 57;
            }
            if (Gvar.var_2527 == 3) {
                Gvar.var_953 = 58;
            }
            if (Gvar.var_2527 == 4) {
                Gvar.var_953 = 74;
            }
            if (Gvar.var_2527 == 5) {
                Gvar.var_953 = 75;
            }
            if (Gvar.var_2527 == 6) {
                Gvar.var_953 = 61;
            }
            if (Gvar.var_2527 == 7) {
                Gvar.var_953 = 81;
            }
            if (Gvar.var_2527 == 8) {
                Gvar.var_953 = 83;
            }
            if (Gvar.var_2527 == 9) {
                Gvar.var_953 = 105;
            }
            if (Gvar.var_2527 == 10) {
                Gvar.var_953 = 106;
            }
            if (Gvar.var_2527 == 11) {
                Gvar.var_953 = 108;
            }
            if (Gvar.var_2527 == 12) {
                Gvar.var_953 = 163;
            }
            if (Gvar.var_2527 == 99) {
                Gvar.var_953 = 55;
            }
            if (Gvar.var_2109 == 1) {
                Gvar.var_953 = 49;
            }
            if (Gvar.var_2528 == 1) {
                Gvar.var_953 = Gvar.var_2529;
            }
            if (Gvar.var_2309 == 1) {
                Gvar.var_953 = 6;
            }
            if (Gvar.var_2310 == 1) {
                Gvar.var_953 = 17;
            }
            if (Gvar.var_2530 == 1) {
                Gvar.var_953 = 112;
            }
            if (Gvar.var_2531 == 1) {
                Gvar.var_953 = 77;
            }
            if (Gvar.var_2531 == 2) {
                Gvar.var_953 = 91;
            }
            if (Gvar.var_2531 == 3) {
                Gvar.var_953 = 92;
            }
            if (Gvar.var_2531 == 4) {
                Gvar.var_953 = 76;
            }
            if (Gvar.var_2531 == 5) {
                Gvar.var_953 = 12;
            }
            if (Gvar.var_2532 == 1) {
                Gvar.var_953 = 77;
            }
            if (Gvar.var_2532 == 2) {
                Gvar.var_953 = 76;
            }
            if (Gvar.var_2532 == 3) {
                Gvar.var_953 = 12;
            }
            if (Gvar.var_2533 >= 1) {
                Gvar.var_953 = Gvar.var_2533;
            }
            if (Gvar.var_2306 == 1) {
                Gvar.var_953 = 50;
            }
            if (Gvar.var_2534 == 1) {
                Gvar.var_953 = 54;
            }
            if (Gvar.var_2200 == 1) {
                Gvar.var_953 = 61;
            }
            if (Gvar.var_2456 == 1) {
                Gvar.var_953 = 116;
            }
            if (Gvar.var_1913 == 1) {
                Gvar.var_953 = 10;
            }
            if (Gvar.var_2355 >= 1) {
                Gvar.var_953 = Gvar.var_2355;
            }
            if (Gvar.var_2535 >= 1) {
                Gvar.var_953 = Gvar.var_2535;
            }
            if (Gvar.var_2299 >= 1) {
                Gvar.var_953 = 146;
            }
            if (Gvar.var_1920 == 1) {
                Gvar.var_953 = 21;
            }
            if (Gvar.var_1920 == 2) {
                Gvar.var_953 = 31;
            }
            if (Gvar.var_1470 >= 1) {
                Gvar.var_953 = 130;
            }
            if (Gvar.var_2536 >= 1) {
                Gvar.var_953 = 37;
            }
            if (Gvar.var_2465 == 1) {
                Gvar.var_953 = 118;
            }
            if (Gvar.var_2537 >= 1) {
                Gvar.var_953 = Gvar.var_2537;
            }
            if (Gvar.var_2538 >= 1) {
                Gvar.var_953 = 123;
            }
            if (Gvar.var_2539 >= 1) {
                Gvar.var_953 = Gvar.var_186;
            }
            if (Gvar.var_1918 >= 1) {
                Gvar.var_953 = Gvar.var_1918;
            }
            if (Gvar.var_2540 == 1) {
                Gvar.var_953 = 170;
            }
            if (Gvar.var_2214 >= 1) {
                Gvar.var_953 = Gvar.var_2214;
            }
            if (Gvar.var_2541 == 1) {
                Gvar.var_953 = 26;
            }
            if (Gvar.var_2541 == 2) {
                Gvar.var_953 = 97;
            }
            if (Gvar.var_2541 == 3) {
                Gvar.var_953 = 61;
            }
            if (Gvar.var_2542 == 1) {
                Gvar.var_953 = 33;
            }
            if (Gvar.var_2543 == 1) {
                Gvar.var_953 = 20;
            }
            if (Gvar.var_2543 == 2) {
                Gvar.var_953 = 44;
            }
            if (Gvar.var_2543 == 3) {
                Gvar.var_953 = 65;
            }
            if (Gvar.var_2543 == 4) {
                Gvar.var_953 = 32;
            }
            if (Gvar.var_2543 == 5) {
                Gvar.var_953 = 120;
            }
            if (Gvar.var_2543 == 6) { // 6 = 「dungeon_numer = 2 && Gvar.current_floor = 30」
                Gvar.var_953 = 132; // Gvar.enemy_list = 132 レクイエムジョルノ
            }
            if (Gvar.var_2543 == 7) { // 7 = 「dungeon_numer = 3 && Gvar.current_floor = 99」
                Gvar.var_953 = 143;
            }
            // Ver0.1403にて追加。鉄獄のダンジョン主指定
            if (Gvar.var_2543 == 8) { // 7 = 「dungeon_numer = 3 && Gvar.current_floor = 99」
                Gvar.var_953 = 171; // Gvar.enemy_list = 171 離婚した承太郎
            }
            if (Gvar.var_2543 == 9) {
                Gvar.var_953 = 86;
            }
            if (Gvar.var_2543 == 10) {
                Gvar.var_953 = 19;
            }
            if (Gvar.var_2543 == 11) {
                Gvar.var_953 = 144;
            }
            if (Gvar.var_2543 == 12) {
                Gvar.var_953 = 96;
            }
            if (Gvar.var_2543 == 13) {
                Gvar.var_953 = Gvar.var_23;
            }
            if (Gvar.var_2544 >= 1) { // オーラ敵フラグONであれば
                Gvar.var_953 = Gvar.var_2544;
            }
            if (Gvar.var_1998 == 1) {
                Gvar.var_2545 = Adap.rnd(10);
                if (Gvar.var_2545 != 0) {
                    Gvar.var_953 = 22;
                }
                if (Gvar.var_2545 == 0) {
                    Gvar.var_953 = 78;
                }
            }
            if (Gvar.var_2546 == 1) {
                Gvar.var_2545 = Adap.rnd(5);
                if (Gvar.var_2545 == 0 || Gvar.var_2545 == 1) {
                    Gvar.var_953 = 40;
                }
                if (Gvar.var_2545 == 2) {
                    Gvar.var_953 = 41;
                }
                if (Gvar.var_2545 == 3) {
                    Gvar.var_953 = 42;
                }
                if (Gvar.var_2545 == 4) {
                    Gvar.var_953 = 54;
                }
            }
            if (Gvar.var_1728 == 1 && Gvar.var_96 == 2) {
                Gvar.var_2545 = Adap.rnd(7);
                if (Gvar.var_2545 == 0 || Gvar.var_2545 == 1) {
                    Gvar.var_953 = 40;
                }
                if (Gvar.var_2545 == 2) {
                    Gvar.var_953 = 41;
                }
                if (Gvar.var_2545 == 3) {
                    Gvar.var_953 = 42;
                }
                if (Gvar.var_2545 == 4) {
                    Gvar.var_953 = 54;
                }
                if (Gvar.var_2545 == 5) {
                    Gvar.var_953 = 47;
                }
                if (Gvar.var_2545 == 6) {
                    Gvar.var_953 = 79;
                }
            }
            if (Gvar.var_1728 == 1 && Gvar.var_96 == 3) {
                Gvar.var_953 = 39;
            }
            if (Gvar.var_1728 == 1 && Gvar.var_96 == 4) {
                Gvar.var_2545 = Adap.rnd(8);
                if (Gvar.var_2545 == 0) {
                    Gvar.var_953 = 2;
                }
                if (Gvar.var_2545 == 1) {
                    Gvar.var_953 = 51;
                }
                if (Gvar.var_2545 == 2) {
                    Gvar.var_953 = 52;
                }
                if (Gvar.var_2545 == 3) {
                    Gvar.var_953 = 71;
                }
                if (Gvar.var_2545 == 4) {
                    Gvar.var_953 = 11;
                }
                if (Gvar.var_2545 == 5) {
                    Gvar.var_953 = 66;
                }
                if (Gvar.var_2545 == 6) {
                    Gvar.var_953 = 69;
                }
                if (Gvar.var_2545 == 7) {
                    Gvar.var_953 = 95;
                }
            }
            if (Gvar.var_1728 == 1 && Gvar.var_96 == 5) {
                Gvar.var_2545 = Adap.rnd(11);
                if (Gvar.var_2545 == 0) {
                    Gvar.var_953 = 3;
                }
                if (Gvar.var_2545 == 1) {
                    Gvar.var_953 = 13;
                }
                if (Gvar.var_2545 == 2) {
                    Gvar.var_953 = 4;
                }
                if (Gvar.var_2545 == 3) {
                    Gvar.var_953 = 12;
                }
                if (Gvar.var_2545 == 4) {
                    Gvar.var_953 = 115;
                }
                if (Gvar.var_2545 == 5) {
                    Gvar.var_953 = 28;
                }
                if (Gvar.var_2545 == 6) {
                    Gvar.var_953 = 18;
                }
                if (Gvar.var_2545 == 7) {
                    Gvar.var_953 = 10;
                }
                if (Gvar.var_2545 == 8) {
                    Gvar.var_953 = 29;
                }
                if (Gvar.var_2545 == 9) {
                    Gvar.var_953 = 17;
                }
                if (Gvar.var_2545 == 10) {
                    Gvar.var_953 = 48;
                }
            }
            if (Gvar.var_1728 == 1 && Gvar.var_96 == 6) {
                Gvar.var_2545 = Adap.rnd(16);
                if (Gvar.var_2545 == 0) {
                    Gvar.var_953 = 76;
                }
                if (Gvar.var_2545 == 1) {
                    Gvar.var_953 = 26;
                }
                if (Gvar.var_2545 == 2) {
                    Gvar.var_953 = 12;
                }
                if (Gvar.var_2545 == 3) {
                    Gvar.var_953 = 45;
                }
                if (Gvar.var_2545 == 4) {
                    Gvar.var_953 = 47;
                }
                if (Gvar.var_2545 == 5) {
                    Gvar.var_953 = 115;
                }
                if (Gvar.var_2545 == 6) {
                    Gvar.var_953 = 116;
                }
                if (Gvar.var_2545 == 7) {
                    Gvar.var_953 = 39;
                }
                if (Gvar.var_2545 == 8) {
                    Gvar.var_953 = 17;
                }
                if (Gvar.var_2545 == 9) {
                    Gvar.var_953 = 21;
                }
                if (Gvar.var_2545 == 10) {
                    Gvar.var_953 = 31;
                }
                if (Gvar.var_2545 == 11) {
                    Gvar.var_953 = 128;
                }
                if (Gvar.var_2545 == 12) {
                    Gvar.var_953 = 35;
                }
                if (Gvar.var_2545 == 13) {
                    Gvar.var_953 = 147;
                }
                if (Gvar.var_2545 == 14) {
                    Gvar.var_953 = 32;
                }
                if (Gvar.var_2545 == 15) {
                    Gvar.var_953 = 44;
                }
            }
            if (Gvar.var_1728 == 1 && Gvar.var_96 == 7) {
                Gvar.var_2545 = Adap.rnd(12);
                if (Gvar.var_2545 == 0) {
                    Gvar.var_953 = 141;
                }
                if (Gvar.var_2545 == 1) {
                    Gvar.var_953 = 134;
                }
                if (Gvar.var_2545 == 2) {
                    Gvar.var_953 = 99;
                }
                if (Gvar.var_2545 == 3) {
                    Gvar.var_953 = 59;
                }
                if (Gvar.var_2545 == 4) {
                    Gvar.var_953 = 72;
                }
                if (Gvar.var_2545 == 5) {
                    Gvar.var_953 = 80;
                }
                if (Gvar.var_2545 == 6) {
                    Gvar.var_953 = 93;
                }
                if (Gvar.var_2545 == 7) {
                    Gvar.var_953 = 148;
                }
                if (Gvar.var_2545 == 8) {
                    Gvar.var_953 = 156;
                }
                if (Gvar.var_2545 == 9) {
                    Gvar.var_953 = 157;
                }
                if (Gvar.var_2545 == 10) {
                    Gvar.var_953 = 160;
                }
                if (Gvar.var_2545 == 11) {
                    Gvar.var_953 = 153;
                }
            }
            if (Gvar.var_1728 == 1 && Gvar.var_96 == 9) {
                Gvar.var_953 = 168;
            }
        }
        if (Gvar.var_1729 == 1) {
            Gvar.var_953 = Gvar.var_2547;
        }
        Gvar.var_2500 = Adap.rnd(9);
        if (Gvar.equip_disc[357] == 1) {
            Gvar.var_2500 = Adap.rnd(18);
        }
        if (Gvar.var_2500 <= 2) {
            Gvar.var_1053 = 99;
        }
        if (Gvar.var_2500 >= 3) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_953 == 8) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_953 == 24) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_953 == 25) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_953 == 22) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_953 == 16) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_2215 == 1) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_953 == 33) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_85 == 1) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_953 == 53) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_953 == 55) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_953 == 62) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_953 == 101) {
            Gvar.var_1053 = 99;
        }
        if (Gvar.var_1371 == 1) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_2526 == 1) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_1729 == 1) {
            Gvar.var_1053 = 99;
        }
        if (Gvar.var_953 == 19) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_953 == 90) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_953 == 79) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_2527 >= 1) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_953 == 20) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_953 == 143) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_953 == 100) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_953 == 96) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_953 == 49) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_2528 == 1) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_2523 == 1) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_2525 >= 1) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_2472 == 1) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_2546 == 1) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_2531 >= 1) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_2532 >= 1) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_2533 >= 1) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_2306 == 1) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_2309 == 1) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_2310 == 1) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_2530 == 1) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_2543 >= 1) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_2534 == 1) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_2200 == 1) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_2456 == 1) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_1913 == 1) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_2355 >= 1) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_2535 >= 1) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_2299 >= 1) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_1920 >= 1) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_1470 >= 1) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_2536 >= 1) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_1998 == 1) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_2465 == 1) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_2537 >= 1) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_2538 >= 1) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_1918 >= 1) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_2539 >= 1) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_2540 == 1) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_1728 == 1) {
            Gvar.var_1053 = 99;
        }
        if (Gvar.var_2214 >= 1) {
            Gvar.var_1053 = 0;
        }
        if (Gvar.var_2544 >= 1) { // オーラ敵フラグONであれば
            Gvar.var_1053 = 99;
        }
        Gvar.var_82[Gvar.var_440][Gvar.var_441] = Gvar.var_673;
        Gvar.var_83[Gvar.var_673].Var0 = Gvar.var_953;
        Gvar.enemy_list = Gvar.var_953;
        await Func.func626(); // 敵リスト
        Gvar.var_83[Gvar.var_673].Var1 = Gvar.var_440;
        Gvar.var_83[Gvar.var_673].Var2 = Gvar.var_441;
        Gvar.var_83[Gvar.var_673].Var3 = Gvar.enemy_hp;
        if (Gvar.var_953 == 49) {
            Gvar.var_83[Gvar.var_673].Var3 = Gvar.var_211;
        }
        Gvar.var_83[Gvar.var_673].Var4 = 3;
        if (Gvar.var_2531 >= 1) {
            Gvar.var_83[Gvar.var_673].Var4 = 2;
        }
        if (Gvar.var_1371 == 1) {
            Gvar.var_83[Gvar.var_673].Var4 = 2;
        }
        if (Gvar.var_2534 == 1) {
            Gvar.var_83[Gvar.var_673].Var4 = 2;
        }
        if (Gvar.var_2200 == 1) {
            Gvar.var_83[Gvar.var_673].Var4 = 2;
        }
        if (Gvar.var_2456 == 1) {
            Gvar.var_83[Gvar.var_673].Var4 = 2;
        }
        Gvar.var_2501 = Adap.rnd(8);
        if (Gvar.var_2501 == 0) {
            Gvar.var_83[Gvar.var_673].Var5 = 2;
        }
        if (Gvar.var_2501 == 1) {
            Gvar.var_83[Gvar.var_673].Var5 = 4;
        }
        if (Gvar.var_2501 == 2) {
            Gvar.var_83[Gvar.var_673].Var5 = 6;
        }
        if (Gvar.var_2501 == 3) {
            Gvar.var_83[Gvar.var_673].Var5 = 8;
        }
        if (Gvar.var_2501 == 4) {
            Gvar.var_83[Gvar.var_673].Var5 = 1;
        }
        if (Gvar.var_2501 == 5) {
            Gvar.var_83[Gvar.var_673].Var5 = 3;
        }
        if (Gvar.var_2501 == 6) {
            Gvar.var_83[Gvar.var_673].Var5 = 7;
        }
        if (Gvar.var_2501 == 7) {
            Gvar.var_83[Gvar.var_673].Var5 = 9;
        }
        if (Gvar.dungeon_number == 99) {
            if (Gvar.var_953 == 79 && Gvar.var_2548 == 1) {
                Gvar.var_83[Gvar.var_673].Var5 = 2;
            }
            if (Gvar.var_953 == 79 && Gvar.var_2548 == 2) {
                Gvar.var_83[Gvar.var_673].Var5 = 8;
            }
        }
        if (Gvar.var_953 == 33) {
            Gvar.var_83[Gvar.var_673].Var5 = 2;
        }
        if (Gvar.var_953 == 101) {
            Gvar.var_83[Gvar.var_673].Var5 = 3;
        }
        if (Gvar.var_953 == 102) {
            Gvar.var_83[Gvar.var_673].Var5 = 1;
        }
        if (Gvar.var_953 == 103) {
            Gvar.var_83[Gvar.var_673].Var5 = 9;
        }
        if (Gvar.var_953 == 104) {
            Gvar.var_83[Gvar.var_673].Var5 = 7;
        }
        if (Gvar.var_1374 >= 1) {
            Gvar.var_83[Gvar.var_673].Var5 = Gvar.var_2489;
        }
        if (Gvar.var_2538 >= 1) {
            Gvar.var_83[Gvar.var_673].Var5 = Gvar.var_2538;
        }
        if (Gvar.var_953 == 53) {
            Gvar.var_83[Gvar.var_673].Var5 = 2;
        }
        if (Gvar.var_2539 >= 1) {
            Gvar.var_83[Gvar.var_673].Var5 = Gvar.var_199;
        }
        Gvar.var_83[Gvar.var_673].Var6 = 0;
        Gvar.var_83[Gvar.var_673].Var7 = 0;
        Gvar.var_83[Gvar.var_673].Var8 = 0;
        Gvar.var_83[Gvar.var_673].Var9 = 0;
        Gvar.var_83[Gvar.var_673].Var10 = Gvar.var_2499;
        Gvar.var_83[Gvar.var_673].Var11 = 0;
        Gvar.var_83[Gvar.var_673].Var12 = Gvar.var_1053;
        Gvar.var_83[Gvar.var_673].Var13 = 0;
        Gvar.var_83[Gvar.var_673].Var14 = 0;
        if (Gvar.var_2527 >= 1 && Gvar.var_2527 != 6) {
            Gvar.var_83[Gvar.var_673].Var14 = 1;
        }
        if (Gvar.var_953 == 55) {
            Gvar.var_83[Gvar.var_673].Var14 = 1;
        }
        if (Gvar.var_953 == 147 || Gvar.var_953 == 170) {
            Gvar.var_83[Gvar.var_673].Var14 = 1;
        }
        Gvar.var_83[Gvar.var_673].Var15 = 0;

        if (Gvar.var_953 == 20 || Gvar.var_953 == 39 || Gvar.var_953 == 60 || Gvar.var_953 == 64 || Gvar.var_953 == 101 || Gvar.var_953 == 102 || Gvar.var_953 == 103 || Gvar.var_953 == 104 || Gvar.var_953 == 117 || Gvar.var_953 == 111 || Gvar.var_953 == 96 || Gvar.var_953 == 68 || Gvar.var_953 == 151 || Gvar.var_953 == 168) {
            Gvar.var_83[Gvar.var_673].Var15 = 1;
        }
        Gvar.var_83[Gvar.var_673].Var16 = 0;
        if (Gvar.var_953 == 36) {
            Gvar.var_83[Gvar.var_673].Var16 = Gvar.var_1025;
        }
        if (Gvar.var_953 == 105) {
            Gvar.var_83[Gvar.var_673].Var16 = Gvar.var_1026;
        }
        if (Gvar.var_953 == 106) {
            Gvar.var_83[Gvar.var_673].Var16 = Gvar.var_1027;
        }
        if (Gvar.var_953 == 108) {
            Gvar.var_83[Gvar.var_673].Var16 = Gvar.var_1029;
        }
        if (Gvar.var_1729 == 1) {
            Gvar.var_83[Gvar.var_673].Var16 = Gvar.var_2548;
        }
        if (Gvar.var_2544 >= 1) { // オーラ敵フラグONであれば
            Gvar.var_83[Gvar.var_673].Var16 = 1000 + Gvar.var_2544;
        }
        Gvar.var_83[Gvar.var_673].Var17 = 0;
        if (Gvar.var_1918 >= 1) {
            Gvar.var_83[Gvar.var_673].Var17 = 1;
        }
        Gvar.var_83[Gvar.var_673].Var18 = 0;
        Gvar.var_83[Gvar.var_673].Var19 = 0;
        Gvar.var_83[Gvar.var_673].Var20 = 0;
        Gvar.var_83[Gvar.var_673].Var21 = 0;
        Gvar.var_83[Gvar.var_673].Var22 = 0;
        Gvar.var_83[Gvar.var_673].Var23 = 0;
        if (Gvar.var_953 == 118) {
            Gvar.var_83[Gvar.var_673].Var23 = 1;
        }
        Gvar.var_83[Gvar.var_673].Var24 = 0;
        Gvar.var_83[Gvar.var_673].Var25 = 0;
        Gvar.var_83[Gvar.var_673].Var26 = 0;
        Gvar.var_83[Gvar.var_673].Var27 = 0;
        Gvar.var_83[Gvar.var_673].Var28 = 0;
        Gvar.var_83[Gvar.var_673].Var29 = 0;
        if (Gvar.var_953 == 121 && Gvar.var_1729 == 0) {
            Gvar.var_2502 = Adap.rnd(20);
            if (Gvar.var_2502 == 0) {
                Gvar.var_83[Gvar.var_673].Var29 = 1;
            }
        }
        Gvar.var_83[Gvar.var_673].Var30 = 0;
        if (Gvar.var_2472 == 1) {
            Gvar.var_83[Gvar.var_673].Var30 = 1;
        }
        if (Gvar.var_953 == 85) {
            Gvar.var_83[Gvar.var_673].Var30 = 1;
        }
        if (Gvar.var_953 == 118) {
            Gvar.var_83[Gvar.var_673].Var30 = 1;
        }
        if (Gvar.var_953 == 154) {
            Gvar.var_83[Gvar.var_673].Var30 = 1;
        }
        if (Gvar.var_953 == 109) {
            Gvar.var_2502 = Adap.rnd(2);
            Gvar.var_83[Gvar.var_673].Var30 = Gvar.var_2502;
            if (Gvar.dungeon_number == 99) {
                if (Gvar.var_2548 == 1) {
                    Gvar.var_83[Gvar.var_673].Var30 = 1;
                }
                if (Gvar.var_2548 == 2) {
                    Gvar.var_83[Gvar.var_673].Var30 = 0;
                }
            }
        }
        if (Gvar.var_2537 >= 1) {
            Gvar.var_83[Gvar.var_673].Var30 = 1;
        }
        Gvar.var_83[Gvar.var_673].Var31 = 0;
        if (Gvar.var_972 == 1) {
            Gvar.var_83[Gvar.var_673].Var31 = 1;
        }
        if (Gvar.var_972 == 2) {
            Gvar.var_83[Gvar.var_673].Var31 = 2;
        }
        if (Gvar.var_972 == 3) {
            Gvar.var_83[Gvar.var_673].Var31 = 3;
        }
        if (Gvar.var_972 == 4) {
            Gvar.var_83[Gvar.var_673].Var31 = 4;
        }
        if (Gvar.var_972 == 5) {
            Gvar.var_83[Gvar.var_673].Var31 = 5;
        }
        if (Gvar.var_972 == 6) {
            Gvar.var_83[Gvar.var_673].Var31 = 6;
        }
        if (Gvar.var_972 == 7) {
            Gvar.var_83[Gvar.var_673].Var31 = 7;
        }
        if (Gvar.var_972 == 8) {
            Gvar.var_83[Gvar.var_673].Var31 = 8;
        }
        if (Gvar.var_972 == 9) {
            Gvar.var_83[Gvar.var_673].Var31 = 9;
        }
        if (Gvar.var_972 == 10) {
            Gvar.var_83[Gvar.var_673].Var31 = 10;
        }
        if (Gvar.var_953 == 97) {
            await Func.func559();
            Gvar.var_83[Gvar.var_673].Var31 = Gvar.var_2503;
        }
        if (Gvar.var_2309 == 1) {
            Gvar.var_83[Gvar.var_673].Var31 = 5;
        }
        if (Gvar.var_2310 == 1) {
            Gvar.var_83[Gvar.var_673].Var31 = 5;
        }
        if (Gvar.var_2530 == 1) {
            Gvar.var_83[Gvar.var_673].Var31 = 5;
        }
        if (Gvar.var_2109 == 1) {
            Gvar.var_83[Gvar.var_673].Var31 = 5;
        }
        if (Gvar.var_2299 >= 1) {
            Gvar.var_83[Gvar.var_673].Var31 = 5;
        }
        Gvar.var_83[Gvar.var_673].Var32 = Adap.rnd(12);
        if (Gvar.var_953 == 40 || Gvar.var_953 == 54) {
            Gvar.var_83[Gvar.var_673].Var32 = 1;
            Gvar.var_2549 = 1;
            for (let cnt2 = 0; cnt2 < Gvar.var_97; ++cnt2) {
                if (Gvar.var_83[Gvar.var_2549].Var0 == 40 || Gvar.var_83[Gvar.var_2549].Var0 == 54) {
                    Gvar.var_83[Gvar.var_673].Var32 = Gvar.var_83[Gvar.var_2549].Var32;
                    break;
                }
                Gvar.var_2549++;
            }
        }
        Gvar.var_2504 = Adap.rnd(4);
        if (Gvar.var_2504 == 0) {
            Gvar.var_83[Gvar.var_673].Var33 = 6;
        }
        if (Gvar.var_2504 == 1) {
            Gvar.var_83[Gvar.var_673].Var33 = 4;
        }
        if (Gvar.var_2504 == 2) {
            Gvar.var_83[Gvar.var_673].Var33 = 8;
        }
        if (Gvar.var_2504 == 3) {
            Gvar.var_83[Gvar.var_673].Var33 = 2;
        }
        Gvar.var_83[Gvar.var_673].Var34 = 6;
        Gvar.var_83[Gvar.var_673].Var35 = Gvar.var_440;
        Gvar.var_83[Gvar.var_673].Var36 = Gvar.var_441;
        Gvar.var_83[Gvar.var_673].Var37 = Gvar.var_83[Gvar.var_673].Var5;
        Gvar.var_83[Gvar.var_673].Var38 = 0;
        Gvar.var_83[Gvar.var_673].Var39 = 0;
        if (Gvar.equip_disc[359] == 1 && Gvar.var_83[Gvar.var_673].Var31 != 5 && Gvar.var_83[Gvar.var_673].Var31 != 4 && Gvar.var_1845 == 0 && Gvar.var_83[Gvar.var_673].Var12 == 99 && Gvar.dungeon_number != 4 && Gvar.var_2535 == 0) {
            Gvar.var_1073 = Adap.rnd(100);
            if (Gvar.var_1073 < 20) {
                Gvar.var_83[Gvar.var_673].Var39 = 2;
                Gvar.var_83[Gvar.var_673].Var3 = Math.floor(Gvar.enemy_hp * (Gvar.var_83[Gvar.var_673].Var39 + 10) / 10);
                if (Gvar.var_83[Gvar.var_673].Var3 >= 999) {
                    Gvar.var_83[Gvar.var_673].Var3 = 999;
                }
            }
        }
        if (Gvar.var_2544 >= 1) { // オーラ敵フラグONであれば
            Gvar.var_83[Gvar.var_673].Var39 = 5; // 初期レベル5
            Gvar.var_83[Gvar.var_673].Var3 = Math.floor(Gvar.enemy_hp * (Gvar.var_83[Gvar.var_673].Var39 + 10) / 10);
            if (Gvar.var_83[Gvar.var_673].Var3 >= 999) {
                Gvar.var_83[Gvar.var_673].Var3 = 999;
            }
        }
        // No = 4 なので、一巡後の世界
        if (Gvar.dungeon_number == 4 && Gvar.current_floor >= 10) {
            await Func.func558();
        }
        if (Gvar.var_2214 >= 1 && Gvar.var_1942 >= 2) {
            Gvar.var_83[Gvar.var_673].Var39 = Gvar.var_1942;
            Gvar.var_83[Gvar.var_673].Var3 = Math.floor(Gvar.enemy_hp * (Gvar.var_83[Gvar.var_673].Var39 + 10) / 10);
            if (Gvar.var_83[Gvar.var_673].Var3 >= 999) {
                Gvar.var_83[Gvar.var_673].Var3 = 999;
            }
        }
        if (Gvar.var_1918 >= 1) {
            Gvar.var_83[Gvar.var_673].Var39 = Gvar.var_1919;
            Gvar.var_83[Gvar.var_673].Var3 = Math.floor(Gvar.enemy_hp * (Gvar.var_83[Gvar.var_673].Var39 + 10) / 10);
            if (Gvar.var_83[Gvar.var_673].Var3 >= 999) {
                Gvar.var_83[Gvar.var_673].Var3 = 999;
            }
        }
        if (Gvar.var_953 == 36 || Gvar.var_953 == 105 || Gvar.var_953 == 106 || Gvar.var_953 == 108) {
            await Func.func684();
        }
        if (Gvar.var_2309 == 1) {
            Gvar.var_83[Gvar.var_673].Var39 = Math.floor(Gvar.current_level / 3);
            Gvar.var_83[Gvar.var_673].Var3 = Math.floor(Gvar.enemy_hp * (Gvar.var_83[Gvar.var_673].Var39 + 10) / 10);
            if (Gvar.var_83[Gvar.var_673].Var3 >= 999) {
                Gvar.var_83[Gvar.var_673].Var3 = 999;
            }
        }
        if (Gvar.var_953 == 75 && Gvar.var_987[0] == 0) {
            Gvar.var_987[0] = 722;
            Gvar.var_2550 = 1;
            for (let cnt2 = 0; cnt2 < 29; ++cnt2) {
                Gvar.var_987[Gvar.var_2550] = 0;
                Gvar.var_2550++;
            }
        }
        if (Gvar.var_2535 >= 1) {
            if (Gvar.var_2551 >= 2) {
                Gvar.var_83[Gvar.var_673].Var39 = Gvar.var_2551;
            }
            Gvar.var_83[Gvar.var_673].Var3 = Gvar.var_2552;
            Gvar.var_83[Gvar.var_673].Var14 = Gvar.var_2553;
            Gvar.var_83[Gvar.var_673].Var15 = Gvar.var_2554;
            Gvar.var_83[Gvar.var_673].Var17 = Gvar.var_2555;
            Gvar.var_83[Gvar.var_673].Var19 = Gvar.var_2556;
            Gvar.var_83[Gvar.var_673].Var20 = Gvar.var_2557;
            Gvar.var_83[Gvar.var_673].Var23 = Gvar.var_2558;
            Gvar.var_83[Gvar.var_673].Var24 = Gvar.var_2559;
            Gvar.var_83[Gvar.var_673].Var30 = Gvar.var_2560;
        }
        if (Gvar.var_953 == 101 && Gvar.var_2528 == 0 && Gvar.var_1374 == 0 && Gvar.var_2537 == 0 && Gvar.var_2535 == 0) {
            Gvar.var_2505 = Gvar.var_440;
            Gvar.var_2506 = Gvar.var_441;
            Gvar.var_2507 = Gvar.var_2505 + 1;
            Gvar.var_2508 = Gvar.var_2506 + 1;
            if (Gvar.var_2472 == 1) {
                return;
            }
            if (Gvar.var_2355 >= 1) {
                return;
            }
            if (Gvar.var_1729 == 1) {
                return;
            }
            if (Gvar.var_71[Gvar.var_2507][Gvar.var_2506] == 0 || Gvar.var_71[Gvar.var_2507][Gvar.var_2506] == 13 || Gvar.var_71[Gvar.var_2507][Gvar.var_2506] == 14 || Gvar.var_65[Gvar.var_2507][Gvar.var_2506] == 1 || Gvar.var_82[Gvar.var_2507][Gvar.var_2506] != 0) {
                Gvar.var_83[Gvar.var_673].Var0 = 0;
                Gvar.var_82[Gvar.var_440][Gvar.var_441] = 0;
                Gvar.var_97 = Gvar.var_97 - 1;
                return;
            }
            if (Gvar.var_71[Gvar.var_2505][Gvar.var_2508] == 0 || Gvar.var_71[Gvar.var_2505][Gvar.var_2508] == 13 || Gvar.var_71[Gvar.var_2505][Gvar.var_2508] == 14 || Gvar.var_65[Gvar.var_2505][Gvar.var_2508] == 1 || Gvar.var_82[Gvar.var_2505][Gvar.var_2508] != 0) {
                Gvar.var_83[Gvar.var_673].Var0 = 0;
                Gvar.var_82[Gvar.var_440][Gvar.var_441] = 0;
                Gvar.var_97 = Gvar.var_97 - 1;
                return;
            }
            if (Gvar.var_71[Gvar.var_2507][Gvar.var_2508] == 0 || Gvar.var_71[Gvar.var_2507][Gvar.var_2508] == 13 || Gvar.var_71[Gvar.var_2507][Gvar.var_2508] == 14 || Gvar.var_65[Gvar.var_2507][Gvar.var_2508] == 1 || Gvar.var_82[Gvar.var_2507][Gvar.var_2508] != 0) {
                Gvar.var_83[Gvar.var_673].Var0 = 0;
                Gvar.var_82[Gvar.var_440][Gvar.var_441] = 0;
                Gvar.var_97 = Gvar.var_97 - 1;
                return;
            }
            Gvar.var_2509 = 1;
            Gvar.var_2102 = Gvar.var_2507;
            Gvar.var_2103 = Gvar.var_2506;
            await Func.func557();
            Gvar.var_2509 = 0;
            Gvar.var_2509 = 2;
            Gvar.var_2102 = Gvar.var_2505;
            Gvar.var_2103 = Gvar.var_2508;
            await Func.func557();
            Gvar.var_2509 = 0;
            Gvar.var_2509 = 3;
            Gvar.var_2102 = Gvar.var_2507;
            Gvar.var_2103 = Gvar.var_2508;
            await Func.func557();
            Gvar.var_2509 = 0;
        }
        return;
}

export {func556}
