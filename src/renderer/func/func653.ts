import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

async function func653(this: any) {
        Adap.dbgprt(653);
        Gvar.var_3014 = 0;
        Gvar.var_3022 = 0;
        if (Gvar.var_201 == 14) {
            return;
        }
        await Func.func426();
        Gvar.var_570 = Gvar.var_233[Gvar.var_553].Var13;
        Gvar.var_3027 = Adap.dim(100);
        Gvar.var_3025 = 0;
        Gvar.var_3024 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_97; ++cnt1) {
            if (Gvar.var_83[Gvar.var_3024].Var10 == Gvar.var_201 && Gvar.var_83[Gvar.var_3024].Var0 != 0 && Gvar.var_83[Gvar.var_3024].Var31 != 4 && Gvar.var_83[Gvar.var_3024].Var31 != 5) {
                Gvar.var_1711 = Gvar.var_83[Gvar.var_3024].Var1;
                Gvar.var_1712 = Gvar.var_83[Gvar.var_3024].Var2;
                Gvar.var_1713 = Gvar.var_1711 - 1;
                Gvar.var_1714 = Gvar.var_1711 + 1;
                Gvar.var_1715 = Gvar.var_1712 + 1;
                Gvar.var_1716 = Gvar.var_1712 - 1;
                if (Gvar.var_1713 < 0) {
                    Gvar.var_1713 = 0;
                }
                if (Gvar.var_1716 < 0) {
                    Gvar.var_1716 = 0;
                }
                if (Gvar.var_1714 > Gvar.var_33) {
                    Gvar.var_1714 = Gvar.var_33;
                }
                if (Gvar.var_1715 > Gvar.var_34) {
                    Gvar.var_1715 = Gvar.var_34;
                }
                if (Gvar.var_71[Gvar.var_1713][Gvar.var_1712] == 0 || Gvar.var_71[Gvar.var_1714][Gvar.var_1712] == 0 || Gvar.var_71[Gvar.var_1711][Gvar.var_1716] == 0 || Gvar.var_71[Gvar.var_1711][Gvar.var_1715] == 0 || Gvar.var_71[Gvar.var_1713][Gvar.var_1716] == 0 || Gvar.var_71[Gvar.var_1714][Gvar.var_1716] == 0 || Gvar.var_71[Gvar.var_1713][Gvar.var_1715] == 0 || Gvar.var_71[Gvar.var_1714][Gvar.var_1715] == 0) {
                    Gvar.var_3025++;
                    Gvar.var_3027[Gvar.var_3025] = Gvar.var_3024;
                }
            }
            Gvar.var_3024 = Gvar.var_3024 + 1;
        }
        if (Gvar.var_3025 >= 1) {
            Gvar.var_3028 = Adap.rnd(Gvar.var_3025);
            Gvar.var_3028++;
            Gvar.var_3024 = Gvar.var_3027[Gvar.var_3028];
            Gvar.var_1711 = Gvar.var_83[Gvar.var_3024].Var1;
            Gvar.var_1712 = Gvar.var_83[Gvar.var_3024].Var2;
            Gvar.var_1713 = Gvar.var_1711 - 1;
            Gvar.var_1714 = Gvar.var_1711 + 1;
            Gvar.var_1715 = Gvar.var_1712 + 1;
            Gvar.var_1716 = Gvar.var_1712 - 1;
            if (Gvar.var_1713 < 0) {
                Gvar.var_1713 = 0;
            }
            if (Gvar.var_1716 < 0) {
                Gvar.var_1716 = 0;
            }
            if (Gvar.var_1714 > Gvar.var_33) {
                Gvar.var_1714 = Gvar.var_33;
            }
            if (Gvar.var_1715 > Gvar.var_34) {
                Gvar.var_1715 = Gvar.var_34;
            }
            Gvar.var_3029 = 0;
            if (Gvar.var_3029 == 0 && Gvar.var_71[Gvar.var_1713][Gvar.var_1712] == 0) {
                Gvar.var_3029 = 1;
                Gvar.var_1449 = 4;
                Gvar.var_1450 = Gvar.var_1713;
                Gvar.var_1451 = Gvar.var_1712;
            }
            if (Gvar.var_3029 == 0 && Gvar.var_71[Gvar.var_1714][Gvar.var_1712] == 0) {
                Gvar.var_3029 = 1;
                Gvar.var_1449 = 6;
                Gvar.var_1450 = Gvar.var_1714;
                Gvar.var_1451 = Gvar.var_1712;
            }
            if (Gvar.var_3029 == 0 && Gvar.var_71[Gvar.var_1711][Gvar.var_1716] == 0) {
                Gvar.var_3029 = 1;
                Gvar.var_1449 = 8;
                Gvar.var_1450 = Gvar.var_1711;
                Gvar.var_1451 = Gvar.var_1716;
            }
            if (Gvar.var_3029 == 0 && Gvar.var_71[Gvar.var_1711][Gvar.var_1715] == 0) {
                Gvar.var_3029 = 1;
                Gvar.var_1449 = 2;
                Gvar.var_1450 = Gvar.var_1711;
                Gvar.var_1451 = Gvar.var_1715;
            }
            if (Gvar.var_3029 == 0 && Gvar.var_71[Gvar.var_1713][Gvar.var_1716] == 0) {
                Gvar.var_3029 = 1;
                Gvar.var_1449 = 7;
                Gvar.var_1450 = Gvar.var_1713;
                Gvar.var_1451 = Gvar.var_1716;
            }
            if (Gvar.var_3029 == 0 && Gvar.var_71[Gvar.var_1714][Gvar.var_1716] == 0) {
                Gvar.var_3029 = 1;
                Gvar.var_1449 = 9;
                Gvar.var_1450 = Gvar.var_1714;
                Gvar.var_1451 = Gvar.var_1716;
            }
            if (Gvar.var_3029 == 0 && Gvar.var_71[Gvar.var_1713][Gvar.var_1715] == 0) {
                Gvar.var_3029 = 1;
                Gvar.var_1449 = 1;
                Gvar.var_1450 = Gvar.var_1713;
                Gvar.var_1451 = Gvar.var_1715;
            }
            if (Gvar.var_3029 == 0 && Gvar.var_71[Gvar.var_1714][Gvar.var_1715] == 0) {
                Gvar.var_3029 = 1;
                Gvar.var_1449 = 3;
                Gvar.var_1450 = Gvar.var_1714;
                Gvar.var_1451 = Gvar.var_1715;
            }
            Gvar.var_2985 = 1;
            await Func.AutoDraw(3);
            await Music.func089(); // 各装備discごとの攻撃音設定
            await Func.AutoDraw(6);
            Gvar.var_1450 = (Gvar.var_1450 - Gvar.var_66 + 4) * 40;
            Gvar.var_1451 = (Gvar.var_1451 - Gvar.var_67 + 4) * 40 - 10;
            Gvar.var_402 = Gvar.var_3024;
            Gvar.var_314 = Gvar.var_3024;
            Gvar.enemy_list = Gvar.var_83[Gvar.var_3024].Var0;
            Gvar.var_403 = "ダイバー・ダウン！";
            if (Gvar.var_143 >= 1) {
                Gvar.var_2267[8] = Gvar.var_2267[7];
                Gvar.var_2267[7] = Gvar.var_2267[6];
                Gvar.var_2267[6] = Gvar.var_2267[5];
                Gvar.var_2267[5] = Gvar.var_2267[4];
                Gvar.var_2267[4] = Gvar.var_2267[3];
                Gvar.var_2267[3] = Gvar.var_2267[2];
                Gvar.var_2267[2] = Gvar.var_2267[1];
                Gvar.var_2267[1] = Gvar.var_2267[0];
                Gvar.var_2267[0] = Gvar.var_83[Gvar.var_314].Var0; // Gvar.var_83[Gvar.var_314].Var0 は enemy list
                if (Gvar.var_2267[0] != 0 && Gvar.var_2267[0] == Gvar.var_2267[1]) {
                    Gvar.var_143 = 2;
                }
                if (Gvar.var_143 == 2 && Gvar.var_2267[1] == Gvar.var_2267[2]) {
                    Gvar.var_143 = 3;
                }
                if (Gvar.var_143 == 3 && Gvar.var_2267[2] == Gvar.var_2267[3]) {
                    Gvar.var_143 = 4;
                }
                if (Gvar.var_143 == 4 && Gvar.var_2267[3] == Gvar.var_2267[4]) {
                    Gvar.var_143 = 5;
                }
                if (Gvar.var_143 == 5 && Gvar.var_2267[4] == Gvar.var_2267[5]) {
                    Gvar.var_143 = 6;
                }
                if (Gvar.var_143 == 6 && Gvar.var_2267[5] == Gvar.var_2267[6]) {
                    Gvar.var_143 = 7;
                }
                if (Gvar.var_143 == 7 && Gvar.var_2267[6] == Gvar.var_2267[7]) {
                    Gvar.var_143 = 8;
                }
                if (Gvar.var_143 == 8 && Gvar.var_2267[7] == Gvar.var_2267[8]) {
                    Gvar.var_143 = 9;
                }
                if (Gvar.var_2267[0] != 0 && Gvar.var_2267[0] != Gvar.var_2267[1]) {
                    Gvar.var_143 = 1;
                }
            }
            Gvar.var_1447 = 1;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            for (let cnt2 = 0; cnt2 < 8; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1447 = Gvar.var_1447 + 1;
                if (Gvar.var_1447 == 4) {
                    Gvar.var_2867 = Adap.rnd(12);
                    // Gvar.var_111 命中率を上げるフラグがON
                    if (Gvar.var_111 == 1 || Gvar.var_83[Gvar.var_3024].Var12 != 0 || Gvar.var_83[Gvar.var_3024].Var13 != 0) {
                        Gvar.var_2867 = 1;
                    }
                    if (Gvar.var_2867 != 0) {
                        Gvar.enemy_list = Gvar.var_83[Gvar.var_3024].Var0;
                        await Func.func626(); // 敵リスト
                        await Func.func638();
                        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
                        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
                        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
                        await Func.func705();
                        Gvar.var_3014 = 1;
                    }
                    if (Gvar.var_2867 == 0) {
                        await Music.func090();
                        for (let cnt5 = 0; cnt5 < 3; ++cnt5) {
                            await Func.func337(); // メッセージ表示処理(自動)
                        }
                    }
                }
            }
            Gvar.var_1447 = 0;
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_3022 = 1;
        }
        return;
}

export {func653}
