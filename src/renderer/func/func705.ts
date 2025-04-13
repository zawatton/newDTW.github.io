import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'
import * as Enemy from '../enemy/index'

async function func705(this: any) {
        Adap.dbgprt(705);
        Gvar.var_2942 = Gvar.var_83[Gvar.var_402].Var5;
        Gvar.var_214 = 1;
        Gvar.enemy_list = Gvar.var_83[Gvar.var_402].Var0;
        await Func.func626();
        if (Gvar.var_83[Gvar.var_402].Var0 == 33 && Gvar.var_2196 != 0) {
            Gvar.var_209 = 0;
            if (Gvar.var_2307 >= 10) {
                Gvar.var_2307 = Gvar.var_2307 - 10;
            }
        }
        if (Gvar.var_83[Gvar.var_402].Var0 == 73 && Gvar.var_83[Gvar.var_402].Var13 >= 1 && Gvar.var_83[Gvar.var_402].Var13 != 99) {
            Gvar.var_209 = 999;
        }
        if (Gvar.var_83[Gvar.var_402].Var31 == 5 && Gvar.var_83[Gvar.var_402].Var0 == 17) {
            Gvar.var_209 = 1;
        }
        if (Gvar.var_2821 == 1) {
            if (Gvar.var_83[Gvar.var_402].Var31 == 4 || Gvar.var_83[Gvar.var_402].Var31 == 5) {
                Gvar.var_2821 = 0;
            }
        }
        if (Gvar.var_2821 == 0) {
            Gvar.var_83[Gvar.var_402].Var3 = Gvar.var_83[Gvar.var_402].Var3 - Gvar.var_209;
        }
        if (Gvar.var_2821 == 1) {
            Gvar.var_83[Gvar.var_402].Var3 = Gvar.var_83[Gvar.var_402].Var3 + 20;
            Gvar.var_2792 = Gvar.enemy_hp;
            if (Gvar.var_83[Gvar.var_402].Var39 >= 2) {
                Gvar.var_2792 = Math.floor(Gvar.enemy_hp * (Gvar.var_83[Gvar.var_402].Var39 + 10) / 10);
                if (Gvar.var_83[Gvar.var_402].Var3 >= 999) {
                    Gvar.var_83[Gvar.var_402].Var3 = 999;
                }
            }
            if (Gvar.var_2792 < Gvar.var_83[Gvar.var_402].Var3) {
                Gvar.var_83[Gvar.var_402].Var3 = Gvar.var_2792;
            }
        }
        Gvar.var_748 = Gvar.var_83[Gvar.var_402].Var1 - Gvar.var_66 + 4;
        Gvar.var_749 = Gvar.var_83[Gvar.var_402].Var2 - Gvar.var_67 + 4;
        if (Gvar.var_2196 == 0 && Gvar.var_83[Gvar.var_402].Var0 != 79 && Gvar.var_83[Gvar.var_402].Var23 == 0) {
            if (Gvar.var_83[Gvar.var_402].Var1 == Gvar.var_66 && Gvar.var_83[Gvar.var_402].Var2 > Gvar.var_67) {
                Gvar.var_83[Gvar.var_402].Var5 = 8;
            }
            if (Gvar.var_83[Gvar.var_402].Var1 == Gvar.var_66 && Gvar.var_83[Gvar.var_402].Var2 < Gvar.var_67) {
                Gvar.var_83[Gvar.var_402].Var5 = 2;
            }
            if (Gvar.var_83[Gvar.var_402].Var1 < Gvar.var_66 && Gvar.var_83[Gvar.var_402].Var2 == Gvar.var_67) {
                Gvar.var_83[Gvar.var_402].Var5 = 6;
            }
            if (Gvar.var_83[Gvar.var_402].Var1 > Gvar.var_66 && Gvar.var_83[Gvar.var_402].Var2 == Gvar.var_67) {
                Gvar.var_83[Gvar.var_402].Var5 = 4;
            }
            if (Gvar.var_83[Gvar.var_402].Var1 > Gvar.var_66 && Gvar.var_83[Gvar.var_402].Var2 > Gvar.var_67) {
                Gvar.var_83[Gvar.var_402].Var5 = 7;
            }
            if (Gvar.var_83[Gvar.var_402].Var1 < Gvar.var_66 && Gvar.var_83[Gvar.var_402].Var2 > Gvar.var_67) {
                Gvar.var_83[Gvar.var_402].Var5 = 9;
            }
            if (Gvar.var_83[Gvar.var_402].Var1 > Gvar.var_66 && Gvar.var_83[Gvar.var_402].Var2 < Gvar.var_67) {
                Gvar.var_83[Gvar.var_402].Var5 = 1;
            }
            if (Gvar.var_83[Gvar.var_402].Var1 < Gvar.var_66 && Gvar.var_83[Gvar.var_402].Var2 < Gvar.var_67) {
                Gvar.var_83[Gvar.var_402].Var5 = 3;
            }
            if (Gvar.var_83[Gvar.var_402].Var5 == 2) {
                Gvar.var_83[Gvar.var_402].Var33 = 4;
            }
            if (Gvar.var_83[Gvar.var_402].Var5 == 8) {
                Gvar.var_83[Gvar.var_402].Var33 = 6;
            }
            if (Gvar.var_83[Gvar.var_402].Var5 == 4) {
                Gvar.var_83[Gvar.var_402].Var33 = 8;
            }
            if (Gvar.var_83[Gvar.var_402].Var5 == 6) {
                Gvar.var_83[Gvar.var_402].Var33 = 2;
            }
        }
        if (Gvar.var_2196 == 0) {
            Gvar.var_83[Gvar.var_402].Var8 = 1;
        }
        if (Gvar.var_2196 == 1) {
            Gvar.var_83[Gvar.var_402].Var8 = 2;
        }
        if (Gvar.var_2196 == 2) {
            Gvar.var_83[Gvar.var_402].Var8 = 2;
        }
        if (Gvar.var_2196 == 3) {
            Gvar.var_83[Gvar.var_402].Var8 = 2;
        }
        if (Gvar.var_2195 == 0) {
            Gvar.var_747 = 1;
            Gvar.var_750 = 1;
            if (Gvar.var_2196 == 0) {
                await Music.func098();
            }
            if (Gvar.var_2196 == 1) {
                Gvar.var_672 = Gvar.var_83[Gvar.var_673].Var0;
                await Music.func092();
            }
            await Func.AutoDraw(3);
            Gvar.enemy_list = Gvar.var_83[Gvar.var_402].Var0;
            await Func.func626();

            await Func.AutoDraw(3);
            Gvar.enemy_list = Gvar.var_83[Gvar.var_402].Var0;
            if (Gvar.var_83[Gvar.var_402].Var0 == 97 && Gvar.var_83[Gvar.var_402].Var31 >= 11) {
                Gvar.enemy_list = Gvar.var_83[Gvar.var_402].Var31;
            }
            await Func.func626();
            if (Gvar.var_127 != 0 || Gvar.var_132 != 0) {
                Gvar.enemy_name = "何者か";
            }
            if (Gvar.var_119 == 0 && Gvar.sympathy_id != 166 && Gvar.var_83[Gvar.var_402].Var30 != 0) {
                Gvar.enemy_name = "何者か";
            }
            if (Gvar.var_2196 == 1 && Gvar.var_83[Gvar.var_2819].Var31 != 5) {
                if (Gvar.var_2821 == 0) {
                    await Func.setMessage(Gvar.var_403, "" + Gvar.enemy_name + "に" + Gvar.var_209 + "のダメージ！", 8, false, false, false);
                }
                if (Gvar.var_209 == 999) {
                    await Func.setMessage(Gvar.var_403, "" + Gvar.enemy_name + "に致命的なダメージ！", 8, false, false, false);
                }
                if (Gvar.var_2821 == 1) {
                    await Func.setMessage(Gvar.var_403, "" + Gvar.enemy_name + "の傷が埋められた", 8, false, false, false);
                }
            } 
            else {
                if (Gvar.var_2821 == 0) {
                    await Func.setMessage(Gvar.var_403, "" + Gvar.enemy_name + "に" + Gvar.var_209 + "のダメージ！", 7, false, false, false);
                }
                if (Gvar.var_209 == 999) {
                    await Func.setMessage(Gvar.var_403, "" + Gvar.enemy_name + "に致命的なダメージ！", 7, false, false, false);
                }
                if (Gvar.var_2821 == 1) {
                    await Func.setMessage(Gvar.var_403, "" + Gvar.enemy_name + "の傷が埋められた", 7, false, false, false);
                }
            }
        }
        // Gvar.enemy_list == 159 記憶が戻ったウェザー
        if (Gvar.var_83[Gvar.var_402].Var0 == 159 && Gvar.var_83[Gvar.var_402].Var20 == 0 && Gvar.var_2821 == 0) {
            Gvar.var_1550 = Gvar.var_83[Gvar.var_402].Var1;
            Gvar.var_230 = Gvar.var_83[Gvar.var_402].Var2;
            Gvar.var_768 = 1;
            Gvar.var_2434 = 1;
            Gvar.var_2413 = 1;
            await Func.func536();
            Gvar.var_2413 = 0;
            Gvar.var_768 = 0;
            Gvar.var_2434 = 0;
        }
        if (Gvar.var_340 == 698) {
            await Func.AutoDraw(5);
        }
        if (Gvar.var_83[Gvar.var_402].Var28 >= 1) {
            Gvar.var_83[Gvar.var_402].Var28 = Gvar.var_83[Gvar.var_402].Var28 - 1;
        }
        if (Gvar.var_83[Gvar.var_402].Var0 == 101 || Gvar.var_83[Gvar.var_402].Var0 == 102 || Gvar.var_83[Gvar.var_402].Var0 == 103 || Gvar.var_83[Gvar.var_402].Var0 == 104) {
            Gvar.var_2946 = Gvar.var_83[Gvar.var_402].Var0;
            Gvar.var_2947 = Gvar.var_83[Gvar.var_402].Var1;
            Gvar.var_2948 = Gvar.var_83[Gvar.var_402].Var2;
            Gvar.var_2949 = Gvar.var_83[Gvar.var_402].Var1 + 1;
            Gvar.var_2950 = Gvar.var_83[Gvar.var_402].Var2 + 1;
            Gvar.var_2951 = Gvar.var_83[Gvar.var_402].Var1 - 1;
            Gvar.var_2952 = Gvar.var_83[Gvar.var_402].Var2 - 1;
        }
        await Func.AutoDraw(2);
        if (Gvar.var_83[Gvar.var_402].Var3 <= 0) {
            // No = 1 なので、ホテルの外
            if (Gvar.dungeon_number == 1 && Gvar.var_83[Gvar.var_402].Var0 == 20) { // No = 20 エンヤ婆
                await Func.func685(); // エンヤ婆を倒した時のメッセージ処理
            }
            // No = 2 なので、レクイエムの大迷宮
            if (Gvar.dungeon_number == 2 && Gvar.var_83[Gvar.var_402].Var0 == 132) { // No = 132 レクイエムジョルノ
                await Func.func686(); // レクイエムジョルノを倒した時のメッセージ処理
            }
            // No = 3 なので、ディアボロの試練
            if (Gvar.dungeon_number == 3 && Gvar.var_83[Gvar.var_402].Var0 == 143) { // No = 143 ウンガロ
                await Func.func687(); // ウンガロを倒した時のメッセージ処理
            }
            // No = 5 なので、鉄獄(鉄の牢獄)
            if (Gvar.dungeon_number == 5 && Gvar.var_83[Gvar.var_314].Var0 == 171) { // Ver0.1403にて修正。.Var16 >= 1000 → .Var0 == 171。No = 171 離婚した承太郎
                // Gvar.var_2921 = Gvar.var_83[Gvar.var_314].Var0; // Gvar.var_83[Gvar.var_314].Var0 は enemy list, Ver 0.1403にてコメントアウト
                await Func.func633();
            }
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                Gvar.var_83[Gvar.var_402].Var11 = 1;
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_83[Gvar.var_402].Var11 = 0;
                if (Gvar.var_2196 == 0) {
                    Gvar.var_83[Gvar.var_402].Var8 = 1;
                }
                if (Gvar.var_2196 == 1) {
                    Gvar.var_83[Gvar.var_402].Var8 = 2;
                }
                await Func.func337(); // メッセージ表示処理(自動)
            }
            if (Gvar.var_83[Gvar.var_402].Var31 == 5) {
                if (Gvar.var_83[Gvar.var_402].Var0 == 105 || Gvar.var_83[Gvar.var_402].Var0 == 106 || Gvar.var_83[Gvar.var_402].Var0 == 108 || Gvar.var_83[Gvar.var_402].Var0 == 36 || Gvar.var_83[Gvar.var_402].Var0 == 107) {
                    if (Gvar.var_681 == 0) {
                        await Music.func111();
                    }
                    if (Gvar.var_681 != 0) {
                        Gvar.var_684 = 0;
                    }
                }
            }
            Gvar.var_83[Gvar.var_402].Var11 = 1;
            if (Gvar.var_83[Gvar.var_402].Var27 != 0) {
                Gvar.var_2954 = Gvar.var_83[Gvar.var_402].Var27;
                Gvar.var_83[Gvar.var_2954].Var28 = 0;
            }
            Gvar.var_442 = Gvar.var_83[Gvar.var_402].Var1;
            Gvar.var_443 = Gvar.var_83[Gvar.var_402].Var2;
            Gvar.var_347 = Gvar.var_83[Gvar.var_402].Var1;
            Gvar.var_348 = Gvar.var_83[Gvar.var_402].Var2;
            Gvar.var_83[Gvar.var_402].Var1 = 0;
            Gvar.var_83[Gvar.var_402].Var2 = 0;
            Gvar.var_83[Gvar.var_402].Var6 = 0;
            Gvar.var_83[Gvar.var_402].Var7 = 0;
            Gvar.var_83[Gvar.var_402].Var8 = 0;
            Gvar.var_83[Gvar.var_402].Var9 = 0;
            Gvar.var_83[Gvar.var_402].Var18 = 0;
            Gvar.var_83[Gvar.var_402].Var19 = 0;
            Gvar.var_83[Gvar.var_402].Var27 = 0;
            Gvar.var_83[Gvar.var_402].Var28 = 0;
            if (Gvar.var_83[Gvar.var_402].Var0 == 73 && Gvar.var_83[Gvar.var_402].Var20 == 0) {
                Gvar.var_1550 = Gvar.var_442;
                Gvar.var_230 = Gvar.var_443;
                if (Gvar.var_77[Gvar.var_1550][Gvar.var_230] == 0 && Gvar.var_73[Gvar.var_1550][Gvar.var_230] == 0) {
                    Gvar.var_768 = 1;
                    Gvar.var_2416 = 1;
                    await Func.func536();
                    Gvar.var_768 = 0;
                    Gvar.var_2416 = 0;
                }
            }
            if (Gvar.var_114 >= 1 && Gvar.var_402 == Gvar.var_114) {
                Gvar.var_114 = 0;
            }
            // No = 1 なので、ホテルの外
            if (Gvar.dungeon_number == 1 && Gvar.var_83[Gvar.var_402].Var0 == 20) { // No = 20 エンヤ婆
                await Func.func689();
            }
            // 虹村屋敷
            if (Gvar.special_floor == 1 && Gvar.var_83[Gvar.var_402].Var0 == 65) { // No = 65 虹村形兆
                await Func.func688();
            }
            // No = 3 なので、ディアボロの試練
            if (Gvar.dungeon_number == 3 && Gvar.var_83[Gvar.var_402].Var0 == 143) { // No = 143 ウンガロ
                await Func.func689();
            }
            // No = 2 なので、レクイエムの大迷宮
            if (Gvar.dungeon_number == 2 && Gvar.var_83[Gvar.var_402].Var0 == 132) { // No = 132 レクイエムジョルノ
                await Func.func689();
            }
            // Ver0.1403にて追加。No = 5 なので、鉄獄
            if (Gvar.dungeon_number == 5 && Gvar.var_83[Gvar.var_402].Var0 == 171) { // No = 171 離婚した承太郎
                await Func.func689();
            }
            if (Gvar.var_83[Gvar.var_402].Var0 == 53 && Gvar.var_2196 != 0) { // No = 53 エクスペリエンスの花
                Gvar.var_3105 = 1;
            }
            if (Gvar.var_83[Gvar.var_402].Var20 == 0) {
                if (Gvar.var_83[Gvar.var_402].Var0 == 79) { // No = 79 エコーズの卵
                    Gvar.var_2957 = 1;
                    Gvar.var_2958 = Gvar.var_83[Gvar.var_402].Var5;
                }
                if (Gvar.var_83[Gvar.var_402].Var0 == 91) { // No = 91 ACT1のさなぎ
                    Gvar.var_2957 = 2;
                }
                if (Gvar.var_83[Gvar.var_402].Var0 == 92) { // No = 92 ACT2のさなぎ
                    Gvar.var_2957 = 3;
                }
                if (Gvar.var_83[Gvar.var_402].Var0 == 77) { // No = 77 エコーズACT1
                    Gvar.var_2957 = 4;
                }
                if (Gvar.var_83[Gvar.var_402].Var0 == 76) {
                    Gvar.var_2957 = 5;
                }
                if (Gvar.var_83[Gvar.var_402].Var0 == 76 || Gvar.var_83[Gvar.var_402].Var0 == 77) {
                    if (Gvar.dungeon_number == 99) {
                        Gvar.var_2959 = 0;
                        if (Gvar.var_83[Gvar.var_402].Var16 == 1) {
                            Gvar.var_2959 = 1;
                        }
                        if (Gvar.var_83[Gvar.var_402].Var16 == 2) {
                            Gvar.var_2959 = 2;
                        }
                    }
                }
                if (Gvar.var_83[Gvar.var_402].Var0 == 163) {
                    Gvar.var_2538 = Gvar.var_83[Gvar.var_402].Var5;
                }
                if (Gvar.var_83[Gvar.var_402].Var0 == 6 && Gvar.var_83[Gvar.var_402].Var31 != 5) {
                    Gvar.var_186 = 165;
                    await Func.func692();
                }
                if (Gvar.var_83[Gvar.var_402].Var0 == 87) {
                    Gvar.var_186 = 164;
                    await Func.func692();
                }
            }
            await Func.func676();
            if (Gvar.var_2196 == 0) {
                await Func.func340(); // キー入力による選択処理
                Gvar.enemy_list = Gvar.var_83[Gvar.var_402].Var0;
                await Func.func626();
                Gvar.var_2956 = Gvar.enemy_exp_point;
                if (Gvar.var_83[Gvar.var_402].Var39 >= 2) {
                    Gvar.var_2956 = Math.floor(Gvar.var_2956 * (Gvar.var_83[Gvar.var_402].Var39 + 10) / 10);
                }
                if (Gvar.var_160 == 1) {
                    Gvar.var_2956 = Math.floor(Gvar.var_2956 * 3 / 2);
                }
                if (Gvar.var_127 != 0 || Gvar.var_132 != 0) {
                    Gvar.enemy_name = "何者か";
                }
                if (Gvar.var_119 == 0 && Gvar.sympathy_id != 166 && Gvar.var_83[Gvar.var_402].Var30 != 0) {
                    Gvar.enemy_name = "何者か";
                }
                await Func.setMessage("" + Gvar.enemy_name + "をやっつけた", "" + Gvar.var_2956 + "の経験値を手に入れた", 7, false, false, false);
                await Func.AutoDraw(8);
                Gvar.var_568 = Gvar.var_568 + Gvar.var_2956;
                await Func.func680(); // ディアボロのレベルが上がる際の処理
                if (Gvar.var_175 >= 1 || Gvar.var_176 >= 1) {
                    Gvar.var_314 = Gvar.var_402;
                    await Enemy.func703();
                }
            }
            if (Gvar.var_2196 == 1 && Gvar.var_83[Gvar.var_673].Var31 == 5 && Gvar.var_3106 == 0 && Gvar.var_3107 == 0) {
                Gvar.var_83[Gvar.var_673].Var7 = 0;
                await Func.func340(); // キー入力による選択処理
                Gvar.var_2571 = Gvar.var_83[Gvar.var_402].Var0;
                Gvar.enemy_list = Gvar.var_83[Gvar.var_673].Var0;
                await Func.func626();
                Gvar.var_3108 = Gvar.enemy_name;
                Gvar.enemy_list = Gvar.var_83[Gvar.var_402].Var0;
                await Func.func626();
                Gvar.var_2956 = Gvar.enemy_exp_point;
                if (Gvar.var_83[Gvar.var_402].Var39 >= 2) {
                    Gvar.var_2956 = Math.floor(Gvar.var_2956 * (Gvar.var_83[Gvar.var_402].Var39 + 10) / 10);
                }
                if (Gvar.var_160 == 1) {
                    Gvar.var_2956 = Math.floor(Gvar.var_2956 * 3 / 2);
                }
                Gvar.var_3109 = Math.floor(Gvar.var_2956 / 2);
                if (Gvar.var_3109 == 0) {
                    Gvar.var_3109 = 1;
                }
                if (Gvar.var_127 != 0 || Gvar.var_132 != 0) {
                    Gvar.enemy_name = "何者か";
                }
                if (Gvar.var_119 == 0 && Gvar.sympathy_id != 166 && Gvar.var_83[Gvar.var_402].Var30 != 0) {
                    Gvar.enemy_name = "何者か";
                }
                await Func.setMessage("" + Gvar.var_3108 + "は", "" + Gvar.enemy_name + "をやっつけた", 7, false, false, false);
                Gvar.var_2945 = Gvar.enemy_list;
                await Func.AutoDraw(6);
                if (Gvar.var_83[Gvar.var_673].Var0 == 36 || Gvar.var_83[Gvar.var_673].Var0 == 105 || Gvar.var_83[Gvar.var_673].Var0 == 106 || Gvar.var_83[Gvar.var_673].Var0 == 107 || Gvar.var_83[Gvar.var_673].Var0 == 108) {
                    await Func.setMessage("ディアボロ達は", "" + Gvar.var_3109 + "の経験値を手に入れた", 7, false, false, false);
                }
                else {
                    await Func.setMessage("ディアボロは", "" + Gvar.var_3109 + "の経験値を手に入れた", 7, false, false, false);
                }
                await Func.AutoDraw(8);
                Gvar.var_568 = Gvar.var_568 + Gvar.var_3109;
                await Func.func680(); // ディアボロのレベルが上がる際の処理
                Gvar.var_83[Gvar.var_673].Var16 = Gvar.var_83[Gvar.var_673].Var16 + Gvar.var_3109;
                if (Gvar.var_83[Gvar.var_673].Var0 == 36 || Gvar.var_83[Gvar.var_673].Var0 == 105 || Gvar.var_83[Gvar.var_673].Var0 == 106 || Gvar.var_83[Gvar.var_673].Var0 == 107 || Gvar.var_83[Gvar.var_673].Var0 == 108) {
                    await Func.func683();
                }
                if (Gvar.var_175 >= 1 || Gvar.var_176 >= 1) {
                    Gvar.var_314 = Gvar.var_402;
                    await Enemy.func703();
                }
            }
            if (Gvar.var_3110 != 0) {
                Gvar.var_83[Gvar.var_402].Var7 = 0;
                await Func.func340(); // キー入力による選択処理
                Gvar.enemy_list = Gvar.var_83[Gvar.var_402].Var0;
                await Func.func626();
                Gvar.var_2956 = Gvar.enemy_exp_point;
                if (Gvar.var_83[Gvar.var_402].Var39 >= 2) {
                    Gvar.var_2956 = Math.floor(Gvar.var_2956 * (Gvar.var_83[Gvar.var_402].Var39 + 10) / 10);
                }
                if (Gvar.var_160 == 1) {
                    Gvar.var_2956 = Math.floor(Gvar.var_2956 * 3 / 2);
                }
                Gvar.var_3109 = Math.floor(Gvar.var_2956 / 2);
                if (Gvar.var_3109 == 0) {
                    Gvar.var_3109 = 1;
                }
                await Func.setMessage("ディアボロは", "" + Gvar.var_3109 + "の経験値を手に入れた", 7, false, false, false);
                Gvar.var_2945 = Gvar.enemy_list;
                await Func.AutoDraw(8);
                Gvar.var_568 = Gvar.var_568 + Gvar.var_3109;
                await Func.func680(); // ディアボロのレベルが上がる際の処理
                if (Gvar.var_175 >= 1 || Gvar.var_176 >= 1) {
                    Gvar.var_314 = Gvar.var_402;
                    await Enemy.func703();
                }
            }
            if (Gvar.var_2196 == 1 && Gvar.var_83[Gvar.var_673].Var0 != 0 && Gvar.var_83[Gvar.var_673].Var31 != 5 && Gvar.var_83[Gvar.var_673].Var31 != 4 && Gvar.var_3105 == 0 && Gvar.var_3110 == 0 && Gvar.var_3106 == 0 && Gvar.var_3107 == 0) {
                Gvar.var_83[Gvar.var_673].Var7 = 0;
                Gvar.var_3111 = 0;
                if (Gvar.var_83[Gvar.var_673].Var0 == 113) {
                    if (Gvar.var_83[Gvar.var_402].Var0 != 119) {
                        Gvar.var_3111 = 0;
                    }
                    if (Gvar.var_83[Gvar.var_402].Var0 == 119) {
                        Gvar.var_3111 = 1;
                        await Func.func340(); // キー入力による選択処理
                        Gvar.var_83[Gvar.var_673].Var0 = 114;
                        Gvar.enemy_list = Gvar.var_83[Gvar.var_673].Var0;
                        await Func.func626();
                        Gvar.var_83[Gvar.var_673].Var3 = Gvar.enemy_hp;
                        await Func.setMessage("DIO「なじむ    実に！    なじむぞ", "    フハフハフハ フハフハ フハフハハ」", 8, false, false, true);
                        Gvar.var_83[Gvar.var_673].Var21 = 1;
                        for (let cnt5 = 0; cnt5 < 10; ++cnt5) {
                            Gvar.var_411 = 1;
                            await Func.func337(); // メッセージ表示処理(自動)
                            Gvar.var_411 = 2;
                            await Func.func337(); // メッセージ表示処理(自動)
                            Gvar.var_411 = 3;
                            await Func.func337(); // メッセージ表示処理(自動)
                            Gvar.var_411 = 2;
                            await Func.func337(); // メッセージ表示処理(自動)
                            Gvar.var_198 = 1; // メッセージウィンドウ開く
                            Gvar.var_300 = 0;
                        }
                        Gvar.var_411 = 0;
                        Gvar.var_83[Gvar.var_673].Var21 = 0;
                        await Func.setMessage("DIO「最高に『ハイ！』ってやつだアアアア", "      アハハハハハハハハハハハーッ」", 8, true, false, true);
                        await Func.AutoDraw(3);
                    }
                }
                if (Gvar.var_3111 == 0) {
                    await Func.func340(); // キー入力による選択処理
                    Gvar.var_83[Gvar.var_673].Var39 = Gvar.var_83[Gvar.var_673].Var39 + 1;
                    if (Gvar.var_83[Gvar.var_673].Var39 == 1) {
                        Gvar.var_83[Gvar.var_673].Var39 = 2;
                    }
                    Gvar.enemy_list = Gvar.var_83[Gvar.var_673].Var0;
                    if (Gvar.var_83[Gvar.var_673].Var0 == 97 && Gvar.var_83[Gvar.var_673].Var31 >= 11) {
                        Gvar.enemy_list = Gvar.var_83[Gvar.var_673].Var31;
                    }
                    await Func.func626();
                    Gvar.var_83[Gvar.var_673].Var3 = Math.floor(Gvar.enemy_hp * (Gvar.var_83[Gvar.var_673].Var39 + 10) / 10);
                    if (Gvar.var_83[Gvar.var_673].Var3 >= 999) {
                        Gvar.var_83[Gvar.var_673].Var3 = 999;
                    }
                    Adap.DSPLAY(142); // レベルアップした時の効果音
                    if (Gvar.var_127 != 0 || Gvar.var_132 != 0) {
                        Gvar.enemy_name = "何者か";
                    }
                    await Func.setMessage("" + Gvar.enemy_name + "は", "レベルが上がった！", 8, false, false, false);
                    await Func.AutoDraw(3);
                    if (Gvar.var_175 >= 1 || Gvar.var_176 >= 1) {
                        Gvar.var_314 = Gvar.var_402;
                        await Enemy.func703();
                    }
                }
            }
            if (Gvar.var_2196 == 1) {
                Gvar.var_83[Gvar.var_673].Var28 = 0;
            }
            Gvar.var_82[Gvar.var_347][Gvar.var_348] = 0;
            Gvar.var_83[Gvar.var_402].Var0 = 0;
            Gvar.var_83[Gvar.var_402].Var9 = 0;
            Gvar.var_83[Gvar.var_402].Var18 = 0;
            if (Gvar.var_2957 >= 1) {
                await Func.func690();
            }
            if (Gvar.var_2538 >= 1) {
                await Func.func691();
            }
            await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        }
        if (Gvar.var_83[Gvar.var_402].Var0 == 33 && Gvar.var_2196 == 0) {
            Gvar.var_83[Gvar.var_402].Var0 = 34;
            Gvar.var_83[Gvar.var_402].Var31 = 1;
        }
        // 時止め(時消し飛ばし)状態でない場合
        if (Gvar.var_83[Gvar.var_402].Var20 == 0 && Gvar.var_83[Gvar.var_402].Var12 == 0 && Gvar.var_83[Gvar.var_402].Var13 == 0 && Gvar.var_83[Gvar.var_402].Var17 == 0 && Gvar.time_paused == 0 && Gvar.var_123 == 0 && Gvar.time_paused_count == 0) {
            if (Gvar.var_83[Gvar.var_402].Var0 == 121 && Gvar.var_83[Gvar.var_402].Var29 == 1) {
                Gvar.var_314 = Gvar.var_402;
                await Func.func658(); // 敵が攻撃を受けた時の動作処理
            }
            // Gvar.enemy_list == 120 承太郎
            if (Gvar.var_83[Gvar.var_402].Var0 == 6 || Gvar.var_83[Gvar.var_402].Var0 == 44 || Gvar.var_83[Gvar.var_402].Var0 == 14 || Gvar.var_83[Gvar.var_402].Var0 == 120 || Gvar.var_83[Gvar.var_402].Var0 == 133 || Gvar.var_83[Gvar.var_402].Var0 == 118 || Gvar.var_83[Gvar.var_402].Var0 == 84) {
                Gvar.var_314 = Gvar.var_402;
                await Func.func658(); // 敵が攻撃を受けた時の動作処理
            }
            if (Gvar.var_83[Gvar.var_402].Var0 == 129 || Gvar.var_83[Gvar.var_402].Var0 == 161 || Gvar.var_83[Gvar.var_402].Var0 == 137 || Gvar.var_83[Gvar.var_402].Var0 == 143 || Gvar.var_83[Gvar.var_402].Var0 == 109) {
                Gvar.var_314 = Gvar.var_402;
                await Func.func658(); // 敵が攻撃を受けた時の動作処理
            }
            if (Gvar.var_83[Gvar.var_402].Var0 == 153) {
                if (Gvar.var_2196 == 0) {
                    Gvar.var_314 = Gvar.var_402;
                    await Func.func658(); // 敵が攻撃を受けた時の動作処理
                }
            }
            // No = 61 ヨーヨーマッ
            if (Gvar.var_2937 == 1 && Gvar.var_83[Gvar.var_402].Var0 == 61) {
                if (Gvar.var_2196 == 0) {
                    Gvar.var_314 = Gvar.var_402;
                    await Func.func658(); // 敵が攻撃を受けた時の動作処理
                }
            }
            if (Gvar.var_83[Gvar.var_402].Var0 == 116 && Gvar.var_2196 == 0) {
                Gvar.var_314 = Gvar.var_402;
                await Enemy.func657();
            }
            if (Gvar.var_83[Gvar.var_402].Var0 == 17 && Gvar.var_83[Gvar.var_402].Var3 < 2) {
                Gvar.var_2890 = Gvar.var_402;
                await Func.func698();
            }
            if (Gvar.var_83[Gvar.var_402].Var0 == 164 || Gvar.var_83[Gvar.var_402].Var0 == 165) {
                Gvar.var_1073 = Adap.rnd(3);
                if (Gvar.var_1073 == 0) {
                    Gvar.var_2965 = 1;
                    Gvar.var_314 = Gvar.var_402;
                    await Func.func669();
                }
            }
        }
        // Ver0.1403にて追加。No = 171 離婚した承太郎
        if (Gvar.var_83[Gvar.var_402].Var0 == 132 || Gvar.var_83[Gvar.var_402].Var0 == 143 || Gvar.var_83[Gvar.var_314].Var0 == 171) { // No = 132 レクイエムジョルノ、No = 143 ウンガロ、No = 171 離婚した承太郎
            Gvar.var_314 = Gvar.var_402;
            await Func.func659(); // 敵ボスキャラの状態異常回復処理(レクイエムジョルノ、ウンガロ、離婚した承太郎)
        }
        Gvar.var_83[Gvar.var_402].Var8 = 0;
        if (Gvar.var_83[Gvar.var_402].Var13 != 0) {
            Gvar.var_460 = Gvar.var_402;
            await Func.func024();
        }
        if (Gvar.var_83[Gvar.var_402].Var12 == 99) {
            Gvar.var_83[Gvar.var_402].Var12 = 0;
        }
        if (Gvar.var_2946 == 101 || Gvar.var_2946 == 102 || Gvar.var_2946 == 103 || Gvar.var_2946 == 104) {
            if (Gvar.var_83[Gvar.var_402].Var20 == 0 && Gvar.var_2217 == 0 && Gvar.var_2196 == 0) {
                if (Gvar.var_83[Gvar.var_402].Var12 != 1 && Gvar.var_83[Gvar.var_402].Var12 != 2 && Gvar.var_83[Gvar.var_402].Var12 != 3 && Gvar.var_83[Gvar.var_402].Var12 != 4 && Gvar.var_83[Gvar.var_402].Var12 != 5) {
                    await Enemy.func702(); // 吸血鬼4兄弟に攻撃した際のメッセージ表示
                }
            }
        }
        Gvar.var_750 = 0;
        if (Gvar.var_3105 == 1 && Gvar.var_2196 == 1) {
            Gvar.var_3101 = Gvar.var_402;
            Gvar.var_402 = Gvar.var_673;
            Gvar.var_3110 = Gvar.var_402;
            Gvar.var_3105 = 0;
            await Func.func696();
            Gvar.var_3110 = 0;
            Gvar.var_402 = Gvar.var_3101;
        }
        if (Gvar.var_83[Gvar.var_402].Var0 > 0 && Gvar.var_83[Gvar.var_402].Var4 == 6) {
            Gvar.var_83[Gvar.var_402].Var5 = Gvar.var_2942;
        }
        if (Gvar.var_83[Gvar.var_402].Var0 == 164 || Gvar.var_83[Gvar.var_402].Var0 == 165) {
            Gvar.var_83[Gvar.var_402].Var5 = Gvar.var_2942;
        }
        Gvar.var_2965 = 0;
        return;
}

export {func705}
