/**
 * func555 — func555 不明
 *
 * (org原典: newDTW_func5)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func555(this: any) {
        Adap.dbgprt(555);
        Gvar.var_952 = Adap.rnd(3);
        if (Gvar.current_floor >= 1 && Gvar.current_floor < 6) {
            Gvar.var_952 = Gvar.var_952 + 4;
        }
        if (Gvar.current_floor >= 6 && Gvar.current_floor < 13) {
            Gvar.var_952 = Gvar.var_952 + 5;
        }
        if (Gvar.current_floor >= 13 && Gvar.current_floor < 20) {
            Gvar.var_952 = Gvar.var_952 + 6;
        }
        if (Gvar.current_floor >= 20 && Gvar.current_floor < 30) {
            Gvar.var_952 = Gvar.var_952 + 7;
        }
        if (Gvar.current_floor >= 30) {
            Gvar.var_952 = Gvar.var_952 + 7;
        }
        // No = 1 なので、ホテルの外
        if (Gvar.dungeon_number == 1 && Gvar.current_floor == 12 && Gvar.special_floor == 0 && Gvar.var_386 == 0) {
            return;
        }
        if (Gvar.special_floor == 9) { // 幽霊部屋
            return;
        }
        if (Gvar.special_floor == 7) { // 広大な砂漠
            Gvar.var_952 = Gvar.var_952 + 10;
        }
        for (let cnt1 = 0; cnt1 < Gvar.var_952; ++cnt1) {
            Gvar.var_97 = Gvar.var_97 + 1;
            Gvar.var_673 = Gvar.var_97;
            for (let cnt2 = 0; cnt2 < 500; ++cnt2) {
                Gvar.var_440 = Adap.rnd(Gvar.var_33);
                Gvar.var_441 = Adap.rnd(Gvar.var_34);
                if (Gvar.var_493[1] == 1 && Gvar.var_71[Gvar.var_440][Gvar.var_441] == 1 && Gvar.var_65[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_82[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_72[Gvar.var_440][Gvar.var_441] == 0) {
                    Gvar.var_2499 = 1;
                    break;
                }
                if (Gvar.var_493[2] == 1 && Gvar.var_71[Gvar.var_440][Gvar.var_441] == 2 && Gvar.var_65[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_82[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_72[Gvar.var_440][Gvar.var_441] == 0) {
                    Gvar.var_2499 = 2;
                    break;
                }
                if (Gvar.var_493[3] == 1 && Gvar.var_71[Gvar.var_440][Gvar.var_441] == 3 && Gvar.var_65[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_82[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_72[Gvar.var_440][Gvar.var_441] == 0) {
                    Gvar.var_2499 = 3;
                    break;
                }
                if (Gvar.var_493[4] == 1 && Gvar.var_71[Gvar.var_440][Gvar.var_441] == 4 && Gvar.var_65[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_82[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_72[Gvar.var_440][Gvar.var_441] == 0) {
                    Gvar.var_2499 = 4;
                    break;
                }
                if (Gvar.var_493[5] == 1 && Gvar.var_71[Gvar.var_440][Gvar.var_441] == 5 && Gvar.var_65[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_82[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_72[Gvar.var_440][Gvar.var_441] == 0) {
                    Gvar.var_2499 = 5;
                    break;
                }
                if (Gvar.var_493[6] == 1 && Gvar.var_71[Gvar.var_440][Gvar.var_441] == 6 && Gvar.var_65[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_82[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_72[Gvar.var_440][Gvar.var_441] == 0) {
                    Gvar.var_2499 = 6;
                    break;
                }
                if (Gvar.var_493[7] == 1 && Gvar.var_71[Gvar.var_440][Gvar.var_441] == 7 && Gvar.var_65[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_82[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_72[Gvar.var_440][Gvar.var_441] == 0) {
                    Gvar.var_2499 = 7;
                    break;
                }
                if (Gvar.var_493[8] == 1 && Gvar.var_71[Gvar.var_440][Gvar.var_441] == 8 && Gvar.var_65[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_82[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_72[Gvar.var_440][Gvar.var_441] == 0) {
                    Gvar.var_2499 = 8;
                    break;
                }
                if (Gvar.var_493[9] == 1 && Gvar.var_71[Gvar.var_440][Gvar.var_441] == 9 && Gvar.var_65[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_82[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_72[Gvar.var_440][Gvar.var_441] == 0) {
                    Gvar.var_2499 = 9;
                    break;
                }
                if (Gvar.var_493[10] == 1 && Gvar.var_71[Gvar.var_440][Gvar.var_441] == 10 && Gvar.var_65[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_82[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_72[Gvar.var_440][Gvar.var_441] == 0) {
                    Gvar.var_2499 = 10;
                    break;
                }
                if (Gvar.var_493[11] == 1 && Gvar.var_71[Gvar.var_440][Gvar.var_441] == 11 && Gvar.var_65[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_82[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_72[Gvar.var_440][Gvar.var_441] == 0) {
                    Gvar.var_2499 = 11;
                    break;
                }
                if (Gvar.var_493[12] == 1 && Gvar.var_71[Gvar.var_440][Gvar.var_441] == 12 && Gvar.var_65[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_82[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_72[Gvar.var_440][Gvar.var_441] == 0) {
                    Gvar.var_2499 = 12;
                    break;
                }
                // 幻覚の迷宮
                if (Gvar.special_floor == 8 && Gvar.var_71[Gvar.var_440][Gvar.var_441] == 14 && Gvar.var_65[Gvar.var_440][Gvar.var_441] == 0 && Gvar.var_82[Gvar.var_440][Gvar.var_441] == 0) {
                    Gvar.var_2499 = 14;
                    break;
                }
            }
            await Func.func627(); // 各ダンジョンごとの出現敵設定
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
            if (Gvar.var_953 == 19) {
                Gvar.var_1053 = 0;
            }
            if (Gvar.var_953 == 90) {
                Gvar.var_1053 = 0;
            }
            if (Gvar.var_953 == 62) {
                Gvar.var_1053 = 0;
            }
            if (Gvar.var_953 == 79) {
                Gvar.var_1053 = 0;
            }
            if (Gvar.var_953 == 40 || Gvar.var_953 == 41 || Gvar.var_953 == 42 || Gvar.var_953 == 54) {
                Gvar.var_1053 = 0;
            }
            if (Gvar.var_953 == 101) {
                Gvar.var_1053 = 99;
            }
            if (Gvar.var_953 == 102) {
                Gvar.var_1053 = 99;
            }
            if (Gvar.var_953 == 103) {
                Gvar.var_1053 = 99;
            }
            if (Gvar.var_953 == 104) {
                Gvar.var_1053 = 99;
            }
            // No = 3 なので、ディアボロの試練
            if (Gvar.dungeon_number == 3 && Gvar.current_floor == 99) {
                Gvar.var_1053 = 0;
            }
            Gvar.var_82[Gvar.var_440][Gvar.var_441] = Gvar.var_673;
            Gvar.var_83[Gvar.var_673].Var0 = Gvar.var_953;
            Gvar.enemy_list = Gvar.var_953;
            await Func.func626(); // 敵リスト
            Gvar.var_83[Gvar.var_673].Var1 = Gvar.var_440;
            Gvar.var_83[Gvar.var_673].Var2 = Gvar.var_441;
            Gvar.var_83[Gvar.var_673].Var3 = Gvar.enemy_hp;
            Gvar.var_83[Gvar.var_673].Var4 = 3;
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
            if (Gvar.var_953 == 101) {
                Gvar.var_83[Gvar.var_673].Var5 = 3;
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
            if (Gvar.var_953 == 147) {
                Gvar.var_83[Gvar.var_673].Var14 = 1;
            }
            Gvar.var_83[Gvar.var_673].Var15 = 0;
            // 倍速移動敵の選択
            if (Gvar.var_953 == 39 || Gvar.var_953 == 60 || Gvar.var_953 == 64 || Gvar.var_953 == 101 || Gvar.var_953 == 117 || Gvar.var_953 == 111 || Gvar.var_953 == 68 || Gvar.var_953 == 151 || Gvar.var_953 == 168) {
                Gvar.var_83[Gvar.var_673].Var15 = 1;
            }
            Gvar.var_83[Gvar.var_673].Var16 = 0;
            Gvar.var_83[Gvar.var_673].Var17 = 0;
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
            if (Gvar.var_953 == 121) {
                Gvar.var_2502 = Adap.rnd(20);
                if (Gvar.var_2502 == 0) {
                    Gvar.var_83[Gvar.var_673].Var29 = 1;
                }
            }
            Gvar.var_83[Gvar.var_673].Var30 = 0;
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
            Gvar.var_83[Gvar.var_673].Var32 = Adap.rnd(12);
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
            // No = 4 なので、一巡後の世界
            if (Gvar.dungeon_number == 4 && Gvar.current_floor >= 10) {
                await Func.func558();
            }
            if (Gvar.var_953 == 101) {
                Gvar.var_2505 = Gvar.var_440;
                Gvar.var_2506 = Gvar.var_441;
                Gvar.var_2507 = Gvar.var_2505 + 1;
                Gvar.var_2508 = Gvar.var_2506 + 1;
                if (Gvar.var_71[Gvar.var_2507][Gvar.var_2506] == 0 || Gvar.var_71[Gvar.var_2507][Gvar.var_2506] == 13 || Gvar.var_71[Gvar.var_2507][Gvar.var_2506] == 14 || Gvar.var_65[Gvar.var_2507][Gvar.var_2506] == 1 || Gvar.var_82[Gvar.var_2507][Gvar.var_2506] != 0) {
                    Gvar.var_83[Gvar.var_673].Var0 = 0;
                    Gvar.var_82[Gvar.var_440][Gvar.var_441] = 0;
                    Gvar.var_97 = Gvar.var_97 - 1;
                    continue;
                }
                if (Gvar.var_71[Gvar.var_2505][Gvar.var_2508] == 0 || Gvar.var_71[Gvar.var_2505][Gvar.var_2508] == 13 || Gvar.var_71[Gvar.var_2505][Gvar.var_2508] == 14 || Gvar.var_65[Gvar.var_2505][Gvar.var_2508] == 1 || Gvar.var_82[Gvar.var_2505][Gvar.var_2508] != 0) {
                    Gvar.var_83[Gvar.var_673].Var0 = 0;
                    Gvar.var_82[Gvar.var_440][Gvar.var_441] = 0;
                    Gvar.var_97 = Gvar.var_97 - 1;
                    continue;
                }
                if (Gvar.var_71[Gvar.var_2507][Gvar.var_2508] == 0 || Gvar.var_71[Gvar.var_2507][Gvar.var_2508] == 13 || Gvar.var_71[Gvar.var_2507][Gvar.var_2508] == 14 || Gvar.var_65[Gvar.var_2507][Gvar.var_2508] == 1 || Gvar.var_82[Gvar.var_2507][Gvar.var_2508] != 0) {
                    Gvar.var_83[Gvar.var_673].Var0 = 0;
                    Gvar.var_82[Gvar.var_440][Gvar.var_441] = 0;
                    Gvar.var_97 = Gvar.var_97 - 1;
                    continue;
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
        }
        return;
}

export {func555}
