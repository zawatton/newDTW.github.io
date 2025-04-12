import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

async function func562(this: any) {
        Adap.dbgprt(562);
        if (Gvar.var_681 != 0) {
            await Music.func111();
        }
        if (Gvar.var_541 >= 1) {
            Gvar.var_2566 = 1;
            for (let cnt2 = 0; cnt2 < Gvar.var_541; ++cnt2) {
                Gvar.var_2514 = Gvar.var_66 - 1;
                Gvar.var_2515 = Gvar.var_67 + 1;
                Gvar.var_2516 = Gvar.var_66 + 1;
                Gvar.var_2517 = Gvar.var_67 - 1;
                Gvar.var_2110 = 0;
                if (Gvar.var_2110 == 0 && Gvar.var_71[Gvar.var_66][Gvar.var_2517] != 0 && Gvar.var_71[Gvar.var_66][Gvar.var_2517] != 13 && Gvar.var_82[Gvar.var_66][Gvar.var_2517] == 0) {
                    Gvar.var_2110 = 1;
                    Gvar.var_440 = Gvar.var_66;
                    Gvar.var_441 = Gvar.var_2517;
                    Gvar.var_2499 = Gvar.var_71[Gvar.var_66][Gvar.var_2517];
                }
                if (Gvar.var_2110 == 0 && Gvar.var_71[Gvar.var_2514][Gvar.var_67] != 0 && Gvar.var_71[Gvar.var_2514][Gvar.var_67] != 13 && Gvar.var_82[Gvar.var_2514][Gvar.var_67] == 0) {
                    Gvar.var_2110 = 1;
                    Gvar.var_440 = Gvar.var_2514;
                    Gvar.var_441 = Gvar.var_67;
                    Gvar.var_2499 = Gvar.var_71[Gvar.var_2514][Gvar.var_67];
                }
                if (Gvar.var_2110 == 0 && Gvar.var_71[Gvar.var_2516][Gvar.var_67] != 0 && Gvar.var_71[Gvar.var_2516][Gvar.var_67] != 13 && Gvar.var_82[Gvar.var_2516][Gvar.var_67] == 0) {
                    Gvar.var_2110 = 1;
                    Gvar.var_440 = Gvar.var_2516;
                    Gvar.var_441 = Gvar.var_67;
                    Gvar.var_2499 = Gvar.var_71[Gvar.var_2516][Gvar.var_67];
                }
                if (Gvar.var_2110 == 0 && Gvar.var_71[Gvar.var_66][Gvar.var_2515] != 0 && Gvar.var_71[Gvar.var_66][Gvar.var_2515] != 13 && Gvar.var_82[Gvar.var_66][Gvar.var_2515] == 0) {
                    Gvar.var_2110 = 1;
                    Gvar.var_440 = Gvar.var_66;
                    Gvar.var_441 = Gvar.var_2515;
                    Gvar.var_2499 = Gvar.var_71[Gvar.var_66][Gvar.var_2515];
                }
                if (Gvar.var_2110 == 0 && Gvar.var_71[Gvar.var_2514][Gvar.var_2517] != 0 && Gvar.var_71[Gvar.var_2514][Gvar.var_2517] != 13 && Gvar.var_82[Gvar.var_2514][Gvar.var_2517] == 0) {
                    Gvar.var_2110 = 1;
                    Gvar.var_440 = Gvar.var_2514;
                    Gvar.var_441 = Gvar.var_2517;
                    Gvar.var_2499 = Gvar.var_71[Gvar.var_2514][Gvar.var_2517];
                }
                if (Gvar.var_2110 == 0 && Gvar.var_71[Gvar.var_2516][Gvar.var_2517] != 0 && Gvar.var_71[Gvar.var_2516][Gvar.var_2517] != 13 && Gvar.var_82[Gvar.var_2516][Gvar.var_2517] == 0) {
                    Gvar.var_2110 = 1;
                    Gvar.var_440 = Gvar.var_2516;
                    Gvar.var_441 = Gvar.var_2517;
                    Gvar.var_2499 = Gvar.var_71[Gvar.var_2516][Gvar.var_2517];
                }
                if (Gvar.var_2110 == 0 && Gvar.var_71[Gvar.var_2514][Gvar.var_2515] != 0 && Gvar.var_71[Gvar.var_2514][Gvar.var_2515] != 13 && Gvar.var_82[Gvar.var_2514][Gvar.var_2515] == 0) {
                    Gvar.var_2110 = 1;
                    Gvar.var_440 = Gvar.var_2514;
                    Gvar.var_441 = Gvar.var_2515;
                    Gvar.var_2499 = Gvar.var_71[Gvar.var_2514][Gvar.var_2515];
                }
                if (Gvar.var_2110 == 0 && Gvar.var_71[Gvar.var_2516][Gvar.var_2515] != 0 && Gvar.var_71[Gvar.var_2516][Gvar.var_2515] != 13 && Gvar.var_82[Gvar.var_2516][Gvar.var_2515] == 0) {
                    Gvar.var_2110 = 1;
                    Gvar.var_440 = Gvar.var_2516;
                    Gvar.var_441 = Gvar.var_2515;
                    Gvar.var_2499 = Gvar.var_71[Gvar.var_2516][Gvar.var_2515];
                }
                if (Gvar.var_2110 == 1) {
                    Gvar.var_97 = Gvar.var_97 + 1;
                    Gvar.var_83[Gvar.var_97].Var0 = Gvar.var_540[Gvar.var_2566][0];
                    if (Gvar.var_83[Gvar.var_97].Var0 == 107) {
                        Gvar.var_83[Gvar.var_97].Var0 = 106;
                        if (Gvar.receive_bgm_id == 992) {
                            await Music.func126();
                        }
                    }
                    Gvar.var_83[Gvar.var_97].Var1 = Gvar.var_440;
                    Gvar.var_83[Gvar.var_97].Var2 = Gvar.var_441;
                    Gvar.var_83[Gvar.var_97].Var3 = Gvar.var_540[Gvar.var_2566][3];
                    Gvar.var_83[Gvar.var_97].Var5 = 2;
                    Gvar.var_83[Gvar.var_97].Var10 = Gvar.var_2499;
                    Gvar.var_83[Gvar.var_97].Var31 = 5;
                    Gvar.var_83[Gvar.var_97].Var32 = Adap.rnd(12);
                    Gvar.var_83[Gvar.var_97].Var39 = Gvar.var_540[Gvar.var_2566][4];
                    Gvar.var_83[Gvar.var_97].Var16 = Gvar.var_540[Gvar.var_2566][5];
                    Gvar.var_82[Gvar.var_440][Gvar.var_441] = Gvar.var_97;
                }
                if (Gvar.var_2110 == 0) {
                    break;
                }
                Gvar.var_2566++;
            }
            Gvar.var_542 = 0;
            Gvar.var_541 = 0;
            return;
        }
        Gvar.var_2567 = Adap.rnd(6);
        // No = 1 & 3 & 4 なので、ホテルの外、ディアボロの試練、一巡後の世界
        if (Gvar.dungeon_number == 1 || Gvar.dungeon_number == 3 || Gvar.dungeon_number == 4) {
            Gvar.var_2567 = 1;
        }
        // No = 2 なので、レクイエムの大迷宮
        if (Gvar.dungeon_number == 2 && Gvar.current_floor >= 26) {
            Gvar.var_2567 = 1;
        }
        if (Gvar.special_floor >= 1) {
            Gvar.var_2567 = 1;
        }
        // No = 2 なので、レクイエムの大迷宮
        if (Gvar.dungeon_number == 2 && Gvar.current_floor == 1 && Gvar.var_1040 == 1) {
            Gvar.var_2567 = 0;
            Gvar.var_1040 = 2;
        }
        // No = 2 なので、レクイエムの大迷宮
        if (Gvar.dungeon_number == 2 && Gvar.var_2567 == 0) {
            Gvar.var_2568 = Adap.rnd(12);
            if (Gvar.var_1033 == 1) {
                Gvar.var_2568 = Adap.rnd(8);
            }
            if (Gvar.var_2568 == 0) {
                Gvar.var_2527 = 8;
            }
            if (Gvar.var_2568 == 1) {
                Gvar.var_2527 = 2;
            }
            if (Gvar.var_2568 == 2) {
                Gvar.var_2527 = 3;
            }
            if (Gvar.var_2568 == 3) {
                Gvar.var_2527 = 4;
            }
            if (Gvar.var_2568 == 4) {
                Gvar.var_2527 = 5;
            }
            if (Gvar.var_2568 == 5) {
                Gvar.var_2527 = 6;
            }
            if (Gvar.var_2568 == 6) {
                Gvar.var_2527 = 7;
            }
            if (Gvar.var_2568 == 7) {
                Gvar.var_2527 = 12;
            }
            if (Gvar.var_2568 == 8) {
                Gvar.var_2527 = 1;
            }
            if (Gvar.var_2568 == 9) {
                Gvar.var_2527 = 9;
            }
            if (Gvar.var_2568 == 10) {
                Gvar.var_2527 = 10;
            }
            if (Gvar.var_2568 == 11) {
                Gvar.var_2527 = 11;
            }
            if (Gvar.var_2527 == 2) {
                Gvar.var_2569 = Adap.rnd(3);
            }
            if (Gvar.var_2527 == 8) {
                Gvar.var_1042 = Adap.rnd(7);
            }
            await Func.func556();
            Gvar.var_2570 = 0;
            Gvar.var_2527 = 0;
            Gvar.var_2571 = 0;
        }
        return;
}

export {func562}
