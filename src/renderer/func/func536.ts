/**
 * func536 — func536 不明
 *
 * (org原典: newDTW_func5)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func536(this: any) {
        if (Gvar.var_768 == 0) {
            Gvar.var_2405 = 1;
        }
        let loopCount: any = 1;
        if (Gvar.var_768 == 0) {
            loopCount = Gvar.var_337;
        }
        for (let cnt1 = 0; cnt1 < loopCount; ++cnt1) {
            if (Gvar.var_768 == 1) {
                if (Gvar.var_337 > 200) {
                    return;
                }
                if (Gvar.var_262 == 1 && Gvar.var_769 == 0) { // Gvar.var_262 == 1 なので、Gvar.dungeon_number = 0 であれば
                    return;
                }
            }
            if (Gvar.var_768 == 1) {
                Gvar.var_337 = Gvar.var_337 + 1;
            }
            if (Gvar.var_768 == 1) {
                Gvar.var_2405 = Gvar.var_337;
            }
            if (Gvar.var_1729 == 0) {
                if (Gvar.var_1728 == 0) {
                    Gvar.var_2328 = 1;
                    for (let cnt4 = 0; cnt4 < 500; ++cnt4) {
                        Gvar.var_2406 = Adap.rnd(Gvar.var_33);
                        Gvar.var_2407 = Adap.rnd(Gvar.var_34);
                        Gvar.var_2408 = Gvar.var_2406 - 1;
                        if (Gvar.var_2408 < 0) {
                            Gvar.var_2408 = 0;
                        }
                        Gvar.var_2409 = Gvar.var_2406 + 1;
                        if (Gvar.var_2409 > Gvar.var_33) {
                            Gvar.var_2409 = Gvar.var_33;
                        }
                        Gvar.var_2410 = Gvar.var_2407 - 1;
                        if (Gvar.var_2410 < 0) {
                            Gvar.var_2410 = 0;
                        }
                        Gvar.var_2411 = Gvar.var_2407 + 1;
                        if (Gvar.var_2411 > Gvar.var_34) {
                            Gvar.var_2411 = Gvar.var_34;
                        }
                        if (Gvar.var_71[Gvar.var_2406][Gvar.var_2407] != 0 && Gvar.var_71[Gvar.var_2406][Gvar.var_2407] <= 12 && Gvar.var_71[Gvar.var_2406][Gvar.var_2407] != 13 && Gvar.var_80[Gvar.var_2406][Gvar.var_2407] == 0 && Gvar.var_73[Gvar.var_2406][Gvar.var_2407] == 0 && Gvar.var_77[Gvar.var_2406][Gvar.var_2407] == 0 && Gvar.var_72[Gvar.var_2406][Gvar.var_2407] <= 1 && Gvar.var_71[Gvar.var_2408][Gvar.var_2407] != 14 && Gvar.var_71[Gvar.var_2409][Gvar.var_2407] != 14 && Gvar.var_71[Gvar.var_2406][Gvar.var_2410] != 14 && Gvar.var_71[Gvar.var_2406][Gvar.var_2411] != 14) {
                            Gvar.var_2328 = 0;
                            break;
                        }
                        // 幻覚の迷宮
                        if (Gvar.special_floor == 8 && Gvar.var_71[Gvar.var_2406][Gvar.var_2407] == 14 && Gvar.var_77[Gvar.var_2406][Gvar.var_2407] == 0 && Gvar.var_73[Gvar.var_2406][Gvar.var_2407] == 0 && Gvar.var_80[Gvar.var_2406][Gvar.var_2407] == 0 && Gvar.var_72[Gvar.var_2406][Gvar.var_2407] <= 1) {
                            Gvar.var_2328 = 0;
                            break;
                        }
                    }
                    if (Gvar.var_768 == 1 && Gvar.var_2328 == 1) {
                        Gvar.var_337 = Gvar.var_337 - 1;
                        return;
                    }
                }
                if (Gvar.var_1728 == 1 && Gvar.var_768 == 1) {
                    Gvar.var_2406 = Gvar.var_1550;
                    Gvar.var_2407 = Gvar.var_230;
                    if (Gvar.var_77[Gvar.var_2406][Gvar.var_2407] != 0 || Gvar.var_80[Gvar.var_2406][Gvar.var_2407] != 0 || Gvar.var_73[Gvar.var_2406][Gvar.var_2407] != 0) {
                        Gvar.var_337 = Gvar.var_337 - 1;
                        return;
                    }
                    Gvar.var_2408 = Gvar.var_2406 - 1;
                    if (Gvar.var_2408 < 0) {
                        Gvar.var_2408 = 0;
                    }
                    Gvar.var_2409 = Gvar.var_2406 + 1;
                    if (Gvar.var_2409 > Gvar.var_33) {
                        Gvar.var_2409 = Gvar.var_33;
                    }
                    Gvar.var_2410 = Gvar.var_2407 - 1;
                    if (Gvar.var_2410 < 0) {
                        Gvar.var_2410 = 0;
                    }
                    Gvar.var_2411 = Gvar.var_2407 + 1;
                    if (Gvar.var_2411 > Gvar.var_34) {
                        Gvar.var_2411 = Gvar.var_34;
                    }
                    if (Gvar.var_2412 == 0) {
                        if (Gvar.var_71[Gvar.var_2408][Gvar.var_2407] == 14 || Gvar.var_71[Gvar.var_2409][Gvar.var_2407] == 14 || Gvar.var_71[Gvar.var_2406][Gvar.var_2410] == 14 || Gvar.var_71[Gvar.var_2406][Gvar.var_2411] == 14) {
                            Gvar.var_337 = Gvar.var_337 - 1;
                            return;
                        }
                    }
                }
                if (Gvar.var_2413 == 1) {
                    Gvar.var_2406 = Gvar.var_1550;
                    Gvar.var_2407 = Gvar.var_230;
                    Gvar.var_2408 = Gvar.var_2406 - 1;
                    if (Gvar.var_2408 < 0) {
                        Gvar.var_2408 = 0;
                    }
                    Gvar.var_2409 = Gvar.var_2406 + 1;
                    if (Gvar.var_2409 > Gvar.var_33) {
                        Gvar.var_2409 = Gvar.var_33;
                    }
                    Gvar.var_2410 = Gvar.var_2407 - 1;
                    if (Gvar.var_2410 < 0) {
                        Gvar.var_2410 = 0;
                    }
                    Gvar.var_2411 = Gvar.var_2407 + 1;
                    if (Gvar.var_2411 > Gvar.var_34) {
                        Gvar.var_2411 = Gvar.var_34;
                    }
                    Gvar.var_2414 = 0;
                    for (let cnt4 = 0; cnt4 < 30; ++cnt4) {
                        Gvar.var_2415 = Adap.rnd(9);
                        if (Gvar.var_2415 == 0) {
                            if (Gvar.var_71[Gvar.var_2406][Gvar.var_2407] != 0 && Gvar.var_71[Gvar.var_2406][Gvar.var_2407] != 13 && Gvar.var_77[Gvar.var_2406][Gvar.var_2407] == 0 && Gvar.var_80[Gvar.var_2406][Gvar.var_2407] == 0 && Gvar.var_73[Gvar.var_2406][Gvar.var_2407] == 0) {
                                Gvar.var_2406 = Gvar.var_2406;
                                Gvar.var_2407 = Gvar.var_2407;
                                Gvar.var_2414 = 1;
                                break;
                            }
                        }
                        if (Gvar.var_2415 == 1) {
                            if (Gvar.var_71[Gvar.var_2408][Gvar.var_2407] != 0 && Gvar.var_71[Gvar.var_2408][Gvar.var_2407] != 13 && Gvar.var_77[Gvar.var_2408][Gvar.var_2407] == 0 && Gvar.var_80[Gvar.var_2408][Gvar.var_2407] == 0 && Gvar.var_73[Gvar.var_2408][Gvar.var_2407] == 0) {
                                Gvar.var_2406 = Gvar.var_2408;
                                Gvar.var_2407 = Gvar.var_2407;
                                Gvar.var_2414 = 1;
                                break;
                            }
                        }
                        if (Gvar.var_2415 == 2) {
                            if (Gvar.var_71[Gvar.var_2409][Gvar.var_2407] != 0 && Gvar.var_71[Gvar.var_2409][Gvar.var_2407] != 13 && Gvar.var_77[Gvar.var_2409][Gvar.var_2407] == 0 && Gvar.var_80[Gvar.var_2409][Gvar.var_2407] == 0 && Gvar.var_73[Gvar.var_2409][Gvar.var_2407] == 0) {
                                Gvar.var_2406 = Gvar.var_2409;
                                Gvar.var_2407 = Gvar.var_2407;
                                Gvar.var_2414 = 1;
                                break;
                            }
                        }
                        if (Gvar.var_2415 == 3) {
                            if (Gvar.var_71[Gvar.var_2406][Gvar.var_2411] != 0 && Gvar.var_71[Gvar.var_2406][Gvar.var_2411] != 13 && Gvar.var_77[Gvar.var_2406][Gvar.var_2411] == 0 && Gvar.var_80[Gvar.var_2406][Gvar.var_2411] == 0 && Gvar.var_73[Gvar.var_2406][Gvar.var_2411] == 0) {
                                Gvar.var_2406 = Gvar.var_2406;
                                Gvar.var_2407 = Gvar.var_2411;
                                Gvar.var_2414 = 1;
                                break;
                            }
                        }
                        if (Gvar.var_2415 == 4) {
                            if (Gvar.var_71[Gvar.var_2406][Gvar.var_2410] != 0 && Gvar.var_71[Gvar.var_2406][Gvar.var_2410] != 13 && Gvar.var_77[Gvar.var_2406][Gvar.var_2410] == 0 && Gvar.var_80[Gvar.var_2406][Gvar.var_2410] == 0 && Gvar.var_73[Gvar.var_2406][Gvar.var_2410] == 0) {
                                Gvar.var_2406 = Gvar.var_2406;
                                Gvar.var_2407 = Gvar.var_2410;
                                Gvar.var_2414 = 1;
                                break;
                            }
                        }
                        if (Gvar.var_2415 == 5) {
                            if (Gvar.var_71[Gvar.var_2408][Gvar.var_2411] != 0 && Gvar.var_71[Gvar.var_2408][Gvar.var_2411] != 13 && Gvar.var_77[Gvar.var_2408][Gvar.var_2411] == 0 && Gvar.var_80[Gvar.var_2408][Gvar.var_2411] == 0 && Gvar.var_73[Gvar.var_2408][Gvar.var_2411] == 0) {
                                Gvar.var_2406 = Gvar.var_2408;
                                Gvar.var_2407 = Gvar.var_2411;
                                Gvar.var_2414 = 1;
                                break;
                            }
                        }
                        if (Gvar.var_2415 == 6) {
                            if (Gvar.var_71[Gvar.var_2408][Gvar.var_2410] != 0 && Gvar.var_71[Gvar.var_2408][Gvar.var_2410] != 13 && Gvar.var_77[Gvar.var_2408][Gvar.var_2410] == 0 && Gvar.var_80[Gvar.var_2408][Gvar.var_2410] == 0 && Gvar.var_73[Gvar.var_2408][Gvar.var_2410] == 0) {
                                Gvar.var_2406 = Gvar.var_2408;
                                Gvar.var_2407 = Gvar.var_2410;
                                Gvar.var_2414 = 1;
                                break;
                            }
                        }
                        if (Gvar.var_2415 == 7) {
                            if (Gvar.var_71[Gvar.var_2409][Gvar.var_2411] != 0 && Gvar.var_71[Gvar.var_2409][Gvar.var_2411] != 13 && Gvar.var_77[Gvar.var_2409][Gvar.var_2411] == 0 && Gvar.var_80[Gvar.var_2409][Gvar.var_2411] == 0 && Gvar.var_73[Gvar.var_2409][Gvar.var_2411] == 0) {
                                Gvar.var_2406 = Gvar.var_2409;
                                Gvar.var_2407 = Gvar.var_2411;
                                Gvar.var_2414 = 1;
                                break;
                            }
                        }
                        if (Gvar.var_2415 == 8) {
                            if (Gvar.var_71[Gvar.var_2409][Gvar.var_2410] != 0 && Gvar.var_71[Gvar.var_2409][Gvar.var_2410] != 13 && Gvar.var_77[Gvar.var_2409][Gvar.var_2410] == 0 && Gvar.var_80[Gvar.var_2409][Gvar.var_2410] == 0 && Gvar.var_73[Gvar.var_2409][Gvar.var_2410] == 0) {
                                Gvar.var_2406 = Gvar.var_2409;
                                Gvar.var_2407 = Gvar.var_2410;
                                Gvar.var_2414 = 1;
                                break;
                            }
                        }
                    }
                    if (Gvar.var_2414 == 0) {
                        Gvar.var_337 = Gvar.var_337 - 1;
                        return;
                    }
                }
                if (Gvar.var_769 == 1) {
                    Gvar.var_2406 = 15;
                    Gvar.var_2407 = 21;
                }
                if (Gvar.var_769 == 2) {
                    Gvar.var_2406 = 17;
                    Gvar.var_2407 = 9;
                }
                if (Gvar.var_769 == 3) {
                    Gvar.var_2406 = 15;
                    Gvar.var_2407 = 6;
                }
                if (Gvar.var_769 == 4) {
                    Gvar.var_2406 = 11;
                    Gvar.var_2407 = 8;
                }
                if (Gvar.var_769 == 5) {
                    Gvar.var_2406 = 12;
                    Gvar.var_2407 = 9;
                }
                if (Gvar.var_2416 == 1) {
                    Gvar.var_2406 = Gvar.var_1550;
                    Gvar.var_2407 = Gvar.var_230;
                }
                if (Gvar.var_2417 == 1) {
                    Gvar.var_2406 = Gvar.var_1550;
                    Gvar.var_2407 = Gvar.var_230;
                }
                if (Gvar.var_2418 == 1) {
                    Gvar.var_2406 = Gvar.var_1550;
                    Gvar.var_2407 = Gvar.var_230;
                }
                if (Gvar.var_2274 == 1) {
                    Gvar.var_2406 = Gvar.var_1550;
                    Gvar.var_2407 = Gvar.var_230;
                }
                if (Gvar.var_2419 == 1) {
                    Gvar.var_2406 = Gvar.var_1550;
                    Gvar.var_2407 = Gvar.var_230;
                }
            }
            if (Gvar.var_1729 == 1) {
                Gvar.var_2406 = Gvar.var_1076;
                Gvar.var_2407 = Gvar.var_1075;
            }
            Gvar.var_2420 = Adap.rnd(25);
            // No = 3 & 4 なので、ディアボロの試練、一巡後の世界
            if (Gvar.dungeon_number == 3 || Gvar.dungeon_number == 4) {
                Gvar.var_2420 = Adap.rnd(27);
            }
            // No = 5 なので、鉄獄(鉄の牢獄)
            if (Gvar.dungeon_number == 5) {
                Gvar.var_2420 = Adap.rnd(26);
            }
            if (Gvar.var_2420 == 0) {
                Gvar.var_2421 = 1;
            }
            if (Gvar.var_2420 == 1) {
                Gvar.var_2421 = 2;
            }
            if (Gvar.var_2420 == 2) {
                Gvar.var_2421 = 3;
            }
            if (Gvar.var_2420 == 3) {
                Gvar.var_2421 = 4;
            }
            if (Gvar.var_2420 == 4) {
                Gvar.var_2421 = 5;
            }
            if (Gvar.var_2420 == 5) {
                Gvar.var_2421 = 6;
            }
            if (Gvar.var_2420 == 6) {
                Gvar.var_2421 = 7;
            }
            if (Gvar.var_2420 == 7) {
                Gvar.var_2421 = 8;
            }
            if (Gvar.var_2420 == 8) {
                Gvar.var_2421 = 9;
            }
            if (Gvar.var_2420 == 9) {
                Gvar.var_2421 = 10;
            }
            if (Gvar.var_2420 == 10) {
                Gvar.var_2421 = 11;
            }
            if (Gvar.var_2420 == 11) {
                Gvar.var_2421 = 12;
            }
            if (Gvar.var_2420 == 12) {
                Gvar.var_2421 = 13;
            }
            if (Gvar.var_2420 == 13) {
                Gvar.var_2421 = 14;
            }
            if (Gvar.var_2420 == 14) {
                Gvar.var_2421 = 15;
            }
            if (Gvar.var_2420 == 15) {
                Gvar.var_2421 = 16;
            }
            if (Gvar.var_2420 == 16) {
                Gvar.var_2421 = 17;
            }
            if (Gvar.var_2420 == 17) {
                Gvar.var_2421 = 18;
            }
            if (Gvar.var_2420 == 18) {
                Gvar.var_2421 = 20;
            }
            if (Gvar.var_2420 == 19) {
                Gvar.var_2421 = 21;
            }
            if (Gvar.var_2420 == 20) {
                Gvar.var_2421 = 22;
            }
            if (Gvar.var_2420 == 21) {
                Gvar.var_2421 = 23;
            }
            if (Gvar.var_2420 == 22) {
                Gvar.var_2421 = 24;
            }
            if (Gvar.var_2420 == 23) {
                Gvar.var_2421 = 25;
            }
            if (Gvar.var_2420 == 24) {
                Gvar.var_2421 = 26;
            }
            if (Gvar.var_2420 == 25) {
                Gvar.var_2421 = 28;
            }
            if (Gvar.var_2420 == 26) {
                Gvar.var_2421 = 19;
            }
            if (Gvar.var_2421 == 6 && Gvar.current_floor <= 3) {
                Gvar.var_2421 = 18;
            }
            if (Gvar.var_2421 == 19) {
                // No = 1 なので、ホテルの外
                if (Gvar.dungeon_number == 1) {
                    Gvar.var_2421 = 21;
                }
                // No = 2 なので、レクイエムの大迷宮
                if (Gvar.dungeon_number == 2) {
                    Gvar.var_2421 = 21;
                }
                // No = 3 なので、ディアボロの試練
                if (Gvar.dungeon_number == 3 && Gvar.current_floor == 99) {
                    Gvar.var_2421 = 21;
                }
                // No = 5 なので、鉄獄(鉄の牢獄)
                if (Gvar.dungeon_number == 5 && Gvar.current_floor == Gvar.var_20) {
                    Gvar.var_2421 = 21;
                }
                if (Gvar.special_floor >= 1) {
                    Gvar.var_2421 = 21;
                }
            }
            if (Gvar.var_2421 == 6) {
                // No = 1 なので、ホテルの外
                if (Gvar.dungeon_number == 1 && Gvar.current_floor == 12) {
                    Gvar.var_2421 = 15;
                }
                // No = 2 なので、レクイエムの大迷宮
                if (Gvar.dungeon_number == 2 && Gvar.current_floor == 30) {
                    Gvar.var_2421 = 15;
                }
                // No = 3 なので、ディアボロの試練
                if (Gvar.dungeon_number == 3 && Gvar.current_floor == 99) {
                    Gvar.var_2421 = 15;
                }
                // No = 5 なので、鉄獄(鉄の牢獄)
                if (Gvar.dungeon_number == 5 && Gvar.current_floor == Gvar.var_20) {
                    Gvar.var_2421 = 15;
                }
                if (Gvar.special_floor >= 1) {
                    Gvar.var_2421 = 15;
                }
            }
            if (Gvar.var_2421 == 12) {
                // No = 1 なので、ホテルの外
                if (Gvar.dungeon_number == 1 && Gvar.current_floor == 12) {
                    Gvar.var_2421 = 3;
                }
                // No = 2 なので、レクイエムの大迷宮
                if (Gvar.dungeon_number == 2 && Gvar.current_floor == 30) {
                    Gvar.var_2421 = 3;
                }
                // No = 3 なので、ディアボロの試練
                if (Gvar.dungeon_number == 3 && Gvar.current_floor == 99) {
                    Gvar.var_2421 = 3;
                }
                // No = 5 なので、鉄獄(鉄の牢獄)
                if (Gvar.dungeon_number == 5 && Gvar.current_floor == Gvar.var_20) {
                    Gvar.var_2421 = 3;
                }
                if (Gvar.special_floor >= 1) {
                    Gvar.var_2421 = 3;
                }
            }
            if (Gvar.var_2421 == 24) {
                // No = 1 なので、ホテルの外
                if (Gvar.dungeon_number == 1 && Gvar.current_floor == 12) {
                    Gvar.var_2421 = 16;
                }
                // No = 2 なので、レクイエムの大迷宮
                if (Gvar.dungeon_number == 2 && Gvar.current_floor == 30) {
                    Gvar.var_2421 = 16;
                }
                // No = 3 なので、ディアボロの試練
                if (Gvar.dungeon_number == 3 && Gvar.current_floor == 99) {
                    Gvar.var_2421 = 16;
                }
                // No = 5 なので、鉄獄(鉄の牢獄)
                if (Gvar.dungeon_number == 5 && Gvar.current_floor == Gvar.var_20) {
                    Gvar.var_2421 = 16;
                }
                if (Gvar.special_floor >= 1) {
                    Gvar.var_2421 = 16;
                }
            }
            if (Gvar.var_2421 == 5) {
                // No = 1 なので、ホテルの外
                if (Gvar.dungeon_number == 1 && Gvar.current_floor == 12) {
                    Gvar.var_2421 = 9;
                }
                // No = 2 なので、レクイエムの大迷宮
                if (Gvar.dungeon_number == 2 && Gvar.current_floor == 30) {
                    Gvar.var_2421 = 9;
                }
                // No = 3 なので、ディアボロの試練
                if (Gvar.dungeon_number == 3 && Gvar.current_floor == 99) {
                    Gvar.var_2421 = 9;
                }
                // No = 5 なので、鉄獄(鉄の牢獄)
                if (Gvar.dungeon_number == 5 && Gvar.current_floor == Gvar.var_20) {
                    Gvar.var_2421 = 9;
                }
                if (Gvar.special_floor >= 1) {
                    Gvar.var_2421 = 9;
                }
            }
            if (Gvar.var_1804 == 1) {
                Gvar.var_2421 = 17;
            }
            if (Gvar.special_floor == 1) { // 虹村屋敷
                Gvar.var_2421 = 17;
            }
            if (Gvar.var_2417 == 1) {
                Gvar.var_2421 = 83;
            }
            if (Gvar.var_1729 == 1) {
                Gvar.var_2421 = Gvar.var_2422;
            }
            if (Gvar.var_2423 == 1) {
                Gvar.var_2421 = 100;
            }
            if (Gvar.var_769 >= 1) {
                Gvar.var_2421 = 96;
            }
            if (Gvar.var_2416 == 1) {
                Gvar.var_2421 = 95;
            }
            if (Gvar.var_2424 == 1) {
                Gvar.var_2421 = 98;
            }
            if (Gvar.var_2425 == 1) {
                Gvar.var_2426 = Adap.rnd(3);
                if (Gvar.var_2426 == 0) {
                    Gvar.var_2421 = 9;
                }
                if (Gvar.var_2426 == 1) {
                    Gvar.var_2421 = 14;
                }
                if (Gvar.var_2426 == 2) {
                    Gvar.var_2421 = 20;
                }
            }
            if (Gvar.var_2427 == 1) {
                Gvar.var_2421 = 79;
            }
            if (Gvar.var_2428 == 1) {
                Gvar.var_2421 = 81;
            }
            if (Gvar.var_2429 == 1) {
                Gvar.var_2421 = 17;
            }
            if (Gvar.var_2430 == 1) {
                Gvar.var_2421 = 18;
            }
            if (Gvar.var_2431 == 1) {
                Gvar.var_2421 = 3;
            }
            if (Gvar.var_2419 == 1) {
                Gvar.var_2421 = 80;
            }
            if (Gvar.var_2327 == 1) {
                Gvar.var_2421 = 86;
            }
            if (Gvar.var_2432 == 1) {
                Gvar.var_2421 = 85;
            }
            if (Gvar.var_2433 == 1) {
                Gvar.var_2421 = 84;
            }
            if (Gvar.var_2274 == 1) {
                Gvar.var_2421 = 82;
            }
            if (Gvar.var_2434 == 1) {
                Gvar.var_2421 = 30;
            }
            for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
                Gvar.var_81[Gvar.var_2405][cnt2] = 0;
            }
            Gvar.var_80[Gvar.var_2406][Gvar.var_2407] = Gvar.var_2405;
            Gvar.var_81[Gvar.var_2405][0] = Gvar.var_2421;
            Gvar.var_81[Gvar.var_2405][1] = Gvar.var_2406;
            Gvar.var_81[Gvar.var_2405][2] = Gvar.var_2407;
            Gvar.var_81[Gvar.var_2405][3] = 0;
            Gvar.var_81[Gvar.var_2405][4] = 0;
            if (Gvar.var_2416 == 1) {
                Gvar.var_81[Gvar.var_2405][4] = 1;
            }
            if (Gvar.var_2423 == 1) {
                Gvar.var_81[Gvar.var_2405][4] = 1;
            }
            if (Gvar.var_2425 == 1) {
                Gvar.var_81[Gvar.var_2405][4] = 1;
            }
            if (Gvar.var_2429 == 1) {
                Gvar.var_81[Gvar.var_2405][4] = 0;
            }
            if (Gvar.var_2435 == 1) {
                Gvar.var_81[Gvar.var_2405][4] = 1;
            }
            if (Gvar.var_2429 == 1) {
                Gvar.var_81[Gvar.var_2405][4] = 1;
            }
            if (Gvar.var_2419 == 1) {
                Gvar.var_81[Gvar.var_2405][4] = 1;
            }
            if (Gvar.var_2434 == 1) {
                Gvar.var_81[Gvar.var_2405][4] = 1;
            }
            if (Gvar.var_2430 == 1) {
                Gvar.var_81[Gvar.var_2405][4] = 0;
            }
            if (Gvar.var_2431 == 1) {
                Gvar.var_81[Gvar.var_2405][4] = 0;
            }
            if (Gvar.var_2421 == 98) {
                Gvar.var_81[Gvar.var_2405][4] = 1;
            }
            if (Gvar.var_2421 == 97) {
                Gvar.var_81[Gvar.var_2405][4] = 1;
            }
            if (Gvar.var_2421 == 95) {
                Gvar.var_81[Gvar.var_2405][4] = 1;
            }
            if (Gvar.var_2421 == 83) {
                Gvar.var_81[Gvar.var_2405][4] = 1;
            }
            if (Gvar.var_2327 == 1) {
                Gvar.var_81[Gvar.var_2405][4] = 1;
            }
            if (Gvar.var_2432 == 1) {
                Gvar.var_81[Gvar.var_2405][4] = 1;
            }
            if (Gvar.var_2274 == 1) {
                Gvar.var_81[Gvar.var_2405][4] = 1;
            }
            Gvar.var_81[Gvar.var_2405][5] = Gvar.var_71[Gvar.var_2406][Gvar.var_2407];
            Gvar.var_81[Gvar.var_2405][6] = 0;
            if (Gvar.var_768 == 0) {
                Gvar.var_2405 = Gvar.var_2405 + 1;
            }
        }
        return;
}

export {func536}
