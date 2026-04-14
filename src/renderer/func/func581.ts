/**
 * func581 — func581 各敵の能力動作処理設定
 *
 * (org原典: newDTW_func5)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'
import * as Enemy from '../enemy/index'

async function func581(this: any) {
        Adap.dbgprt(581);
        // Gvar.enemy_list = 15 ペットショップ
        if (Gvar.var_83[Gvar.var_673].Var0 == 15) {
            Gvar.var_1360 = Gvar.var_83[Gvar.var_673].Var1;
            Gvar.var_1361 = Gvar.var_83[Gvar.var_673].Var2;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1363 = 1;
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1363 = Gvar.var_1363 + 1;
            }
            Gvar.var_1363 = 0;
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        }
        // Gvar.enemy_list = 21 ストレイキャット
        if (Gvar.var_83[Gvar.var_673].Var0 == 21) {
            Adap.DSPLAY(159);
            // await Func.func337(); // メッセージ表示処理(自動)
            await Func.func337(); // メッセージ表示処理(自動)
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_742 = 3;
            }
        }
        // Gvar.enemy_list = 30 禁煙中ホル・ホース
        // Gvar.enemy_list = 46 ホル・ホース と Gvar.enemy_list = 30 禁煙中ホル・ホースは共通設定。Ver0.1403にて分離
        if (Gvar.var_83[Gvar.var_673].Var0 == 46) {
            if (Gvar.var_83[Gvar.var_673].Var18 == 1) {
                await Enemy.func604();
                return;
            }
            return;
        }
        // Gvar.enemy_list = 35 仗助
        // Gvar.enemy_list = 134 ジョリーン と Gvar.enemy_list = 35 仗助は共通設定。Ver0.1403にて分離
        if (Gvar.var_83[Gvar.var_673].Var0 == 35) {
            if (Gvar.var_83[Gvar.var_673].Var18 >= 1) {
                await Enemy.func602();
                return;
            }
            return;
        }
        // Gvar.enemy_list = 46 ホル・ホース
        // Gvar.enemy_list = 46 ホル・ホース と Gvar.enemy_list = 30 禁煙中ホル・ホースは共通設定。Ver0.1403にて分離
        if (Gvar.var_83[Gvar.var_673].Var0 == 46) {
            if (Gvar.var_83[Gvar.var_673].Var18 == 1) {
                await Enemy.func604();
                return;
            }
            return;
        }
        // Gvar.enemy_list = 47 億泰
        // Gvar.enemy_list = 47 億泰 と Gvar.enemy_list = 67 ブチ切れた億泰は共通設定。Ver0.1403にて分離
        if (Gvar.var_83[Gvar.var_673].Var0 == 47) {
            Gvar.var_2799 = 0;
            Gvar.var_2782 = Gvar.var_83[Gvar.var_673].Var1;
            Gvar.var_2783 = Gvar.var_83[Gvar.var_673].Var2;
            Gvar.var_2784 = Gvar.var_83[Gvar.var_673].Var1;
            Gvar.var_2785 = Gvar.var_83[Gvar.var_673].Var1;
            Gvar.var_2786 = Gvar.var_83[Gvar.var_673].Var2;
            Gvar.var_2787 = Gvar.var_83[Gvar.var_673].Var2;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                Gvar.var_2784 = Gvar.var_2784 + 1;
                if (Gvar.var_2784 > Gvar.var_33) {
                    Gvar.var_2784 = Gvar.var_33;
                }
                Gvar.var_2785 = Gvar.var_2785 - 1;
                if (Gvar.var_2785 < 0) {
                    Gvar.var_2785 = 0;
                }
                Gvar.var_2786 = Gvar.var_2786 + 1;
                if (Gvar.var_2786 > Gvar.var_34) {
                    Gvar.var_2786 = Gvar.var_34;
                }
                Gvar.var_2787 = Gvar.var_2787 - 1;
                if (Gvar.var_2787 < 0) {
                    Gvar.var_2787 = 0;
                }
                if (Gvar.var_83[Gvar.var_673].Var5 == 6 && Gvar.var_82[Gvar.var_2784][Gvar.var_2783] != 0) {
                    Gvar.var_2799 = 1;
                    break;
                }
                if (Gvar.var_83[Gvar.var_673].Var5 == 4 && Gvar.var_82[Gvar.var_2785][Gvar.var_2783] != 0) {
                    Gvar.var_2799 = 1;
                    break;
                }
                if (Gvar.var_83[Gvar.var_673].Var5 == 2 && Gvar.var_82[Gvar.var_2782][Gvar.var_2786] != 0) {
                    Gvar.var_2799 = 1;
                    break;
                }
                if (Gvar.var_83[Gvar.var_673].Var5 == 8 && Gvar.var_82[Gvar.var_2782][Gvar.var_2787] != 0) {
                    Gvar.var_2799 = 1;
                    break;
                }
                if (Gvar.var_83[Gvar.var_673].Var5 == 1 && Gvar.var_82[Gvar.var_2785][Gvar.var_2786] != 0) {
                    Gvar.var_2799 = 1;
                    break;
                }
                if (Gvar.var_83[Gvar.var_673].Var5 == 3 && Gvar.var_82[Gvar.var_2784][Gvar.var_2786] != 0) {
                    Gvar.var_2799 = 1;
                    break;
                }
                if (Gvar.var_83[Gvar.var_673].Var5 == 7 && Gvar.var_82[Gvar.var_2785][Gvar.var_2787] != 0) {
                    Gvar.var_2799 = 1;
                    break;
                }
                if (Gvar.var_83[Gvar.var_673].Var5 == 9 && Gvar.var_82[Gvar.var_2784][Gvar.var_2787] != 0) {
                    Gvar.var_2799 = 1;
                    break;
                }
                if (Gvar.var_65[Gvar.var_2784][Gvar.var_2783] == 1) {
                    break;
                }
                if (Gvar.var_65[Gvar.var_2785][Gvar.var_2783] == 1) {
                    break;
                }
                if (Gvar.var_65[Gvar.var_2782][Gvar.var_2786] == 1) {
                    break;
                }
                if (Gvar.var_65[Gvar.var_2782][Gvar.var_2787] == 1) {
                    break;
                }
                if (Gvar.var_65[Gvar.var_2785][Gvar.var_2786] == 1) {
                    break;
                }
                if (Gvar.var_65[Gvar.var_2784][Gvar.var_2786] == 1) {
                    break;
                }
                if (Gvar.var_65[Gvar.var_2785][Gvar.var_2787] == 1) {
                    break;
                }
                if (Gvar.var_65[Gvar.var_2784][Gvar.var_2787] == 1) {
                    break;
                }
            }
            if (Gvar.var_2799 == 1) {
                return;
            }
            Gvar.var_742 = 1;
            Gvar.var_83[Gvar.var_673].Var7 = 1;
            Gvar.var_743 = 1; //スタンド像付与フラグON
            Gvar.var_748 = (Gvar.var_83[Gvar.var_673].Var1 - Gvar.var_66 + 4) * 40;
            Gvar.var_749 = (Gvar.var_83[Gvar.var_673].Var2 - Gvar.var_67 + 4) * 40;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1357 = 1;
            Adap.DSPLAY(189);
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1357++;
            }
            Gvar.var_1357 = 0;
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_83[Gvar.var_673].Var7 = 0;
            Gvar.var_743 = 0; //スタンド像付与フラグOFF
        }
        // Gvar.enemy_list = 63 プロシュート兄貴
        if (Gvar.var_83[Gvar.var_673].Var0 == 63) {
            if (Gvar.var_83[Gvar.var_673].Var18 == 1) {
                await Enemy.func613();
                return;
            }
            return;
        }
        // Gvar.enemy_list = 65 虹村形兆
        if (Gvar.var_83[Gvar.var_673].Var0 == 65) {
            if (Gvar.var_83[Gvar.var_673].Var18 == 1) {
                await Enemy.func618();
                return;
            }
            return;
        }
        // Gvar.enemy_list = 67 ブチ切れた億泰
        // Gvar.enemy_list = 47 億泰 と Gvar.enemy_list = 67 ブチ切れた億泰は共通設定。Ver0.1403にて分離
        if (Gvar.var_83[Gvar.var_673].Var0 == 67) {
            Gvar.var_2799 = 0;
            Gvar.var_2782 = Gvar.var_83[Gvar.var_673].Var1;
            Gvar.var_2783 = Gvar.var_83[Gvar.var_673].Var2;
            Gvar.var_2784 = Gvar.var_83[Gvar.var_673].Var1;
            Gvar.var_2785 = Gvar.var_83[Gvar.var_673].Var1;
            Gvar.var_2786 = Gvar.var_83[Gvar.var_673].Var2;
            Gvar.var_2787 = Gvar.var_83[Gvar.var_673].Var2;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                Gvar.var_2784 = Gvar.var_2784 + 1;
                if (Gvar.var_2784 > Gvar.var_33) {
                    Gvar.var_2784 = Gvar.var_33;
                }
                Gvar.var_2785 = Gvar.var_2785 - 1;
                if (Gvar.var_2785 < 0) {
                    Gvar.var_2785 = 0;
                }
                Gvar.var_2786 = Gvar.var_2786 + 1;
                if (Gvar.var_2786 > Gvar.var_34) {
                    Gvar.var_2786 = Gvar.var_34;
                }
                Gvar.var_2787 = Gvar.var_2787 - 1;
                if (Gvar.var_2787 < 0) {
                    Gvar.var_2787 = 0;
                }
                if (Gvar.var_83[Gvar.var_673].Var5 == 6 && Gvar.var_82[Gvar.var_2784][Gvar.var_2783] != 0) {
                    Gvar.var_2799 = 1;
                    break;
                }
                if (Gvar.var_83[Gvar.var_673].Var5 == 4 && Gvar.var_82[Gvar.var_2785][Gvar.var_2783] != 0) {
                    Gvar.var_2799 = 1;
                    break;
                }
                if (Gvar.var_83[Gvar.var_673].Var5 == 2 && Gvar.var_82[Gvar.var_2782][Gvar.var_2786] != 0) {
                    Gvar.var_2799 = 1;
                    break;
                }
                if (Gvar.var_83[Gvar.var_673].Var5 == 8 && Gvar.var_82[Gvar.var_2782][Gvar.var_2787] != 0) {
                    Gvar.var_2799 = 1;
                    break;
                }
                if (Gvar.var_83[Gvar.var_673].Var5 == 1 && Gvar.var_82[Gvar.var_2785][Gvar.var_2786] != 0) {
                    Gvar.var_2799 = 1;
                    break;
                }
                if (Gvar.var_83[Gvar.var_673].Var5 == 3 && Gvar.var_82[Gvar.var_2784][Gvar.var_2786] != 0) {
                    Gvar.var_2799 = 1;
                    break;
                }
                if (Gvar.var_83[Gvar.var_673].Var5 == 7 && Gvar.var_82[Gvar.var_2785][Gvar.var_2787] != 0) {
                    Gvar.var_2799 = 1;
                    break;
                }
                if (Gvar.var_83[Gvar.var_673].Var5 == 9 && Gvar.var_82[Gvar.var_2784][Gvar.var_2787] != 0) {
                    Gvar.var_2799 = 1;
                    break;
                }
                if (Gvar.var_65[Gvar.var_2784][Gvar.var_2783] == 1) {
                    break;
                }
                if (Gvar.var_65[Gvar.var_2785][Gvar.var_2783] == 1) {
                    break;
                }
                if (Gvar.var_65[Gvar.var_2782][Gvar.var_2786] == 1) {
                    break;
                }
                if (Gvar.var_65[Gvar.var_2782][Gvar.var_2787] == 1) {
                    break;
                }
                if (Gvar.var_65[Gvar.var_2785][Gvar.var_2786] == 1) {
                    break;
                }
                if (Gvar.var_65[Gvar.var_2784][Gvar.var_2786] == 1) {
                    break;
                }
                if (Gvar.var_65[Gvar.var_2785][Gvar.var_2787] == 1) {
                    break;
                }
                if (Gvar.var_65[Gvar.var_2784][Gvar.var_2787] == 1) {
                    break;
                }
            }
            if (Gvar.var_2799 == 1) {
                return;
            }
            Gvar.var_742 = 1;
            Gvar.var_83[Gvar.var_673].Var7 = 1;
            Gvar.var_743 = 1; //スタンド像付与フラグON
            Gvar.var_748 = (Gvar.var_83[Gvar.var_673].Var1 - Gvar.var_66 + 4) * 40;
            Gvar.var_749 = (Gvar.var_83[Gvar.var_673].Var2 - Gvar.var_67 + 4) * 40;
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1357 = 1;
            Adap.DSPLAY(189);
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1357++;
            }
            Gvar.var_1357 = 0;
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_83[Gvar.var_673].Var7 = 0;
            Gvar.var_743 = 0; //スタンド像付与フラグOFF
        }
        // Gvar.enemy_list = 72 ケンゾー
        if (Gvar.var_83[Gvar.var_673].Var0 == 72) {
            if (Gvar.var_83[Gvar.var_673].Var18 == 1) {
                await Enemy.func617();
                return;
            }
            return;
        }
        // Gvar.enemy_list = 76 エコーズACT2
        if (Gvar.var_83[Gvar.var_673].Var0 == 76) {
            Gvar.var_1304 = Adap.rnd(3);
            Gvar.var_1302 = (Gvar.var_83[Gvar.var_673].Var1 - Gvar.var_66 + 4) * 40;
            Gvar.var_1303 = (Gvar.var_83[Gvar.var_673].Var2 - Gvar.var_67 + 4) * 40 - 10;
            Gvar.var_83[Gvar.var_673].Var21 = 1;
            Gvar.var_411 = 2;
            for (let cnt2 = 0; cnt2 < 4; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_742 = 2;
            }
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1301 = 1;
            Adap.DSPLAY(123);
            for (let cnt2 = 0; cnt2 < 8; ++cnt2) {
                // await Func.func337(); // メッセージ表示処理(自動)
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_742 = 2;
                Gvar.var_1301++;
            }
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_1301 = 0;
            Gvar.var_83[Gvar.var_673].Var21 = 0;
            Gvar.var_411 = 0;
        }
        // Gvar.enemy_list = 84 チョコラータ
        if (Gvar.var_83[Gvar.var_673].Var0 == 84) {
            if (Gvar.var_83[Gvar.var_673].Var18 == 1) {
                await Enemy.func589();
                return;
            }
            return;
        }
        // Gvar.enemy_list = 85 リゾット
        if (Gvar.var_83[Gvar.var_673].Var0 == 85) {
            if (Gvar.var_83[Gvar.var_673].Var18 == 1) {
                await Enemy.func596();
                return;
            }
            return;
        }
        // Gvar.enemy_list = 98 エンポリオ(ウェザー付)
        if (Gvar.var_83[Gvar.var_673].Var0 == 98) {
            if (Gvar.var_83[Gvar.var_673].Var18 == 1) {
                await Enemy.func610();
                return;
            }
            return;
        }
        // Gvar.enemy_list = 99 マンハッタントランスファー
        if (Gvar.var_83[Gvar.var_673].Var0 == 99) {
            if (Gvar.var_83[Gvar.var_673].Var18 == 1) {
                await Enemy.func606();
                return;
            }
            return;
        }
        // Gvar.enemy_list = 106 ペッシ
        // Gvar.enemy_list = 106 ペッシ と Gvar.enemy_list = 107 成長したペッシは共通設定。Ver0.1403にて分離
        if (Gvar.var_83[Gvar.var_673].Var0 == 106) {
            if (Gvar.var_83[Gvar.var_673].Var18 == 1) {
                await Func.func616();
                return;
            }
            return;
        }
        // Gvar.enemy_list = 107 成長したペッシ
        // Gvar.enemy_list = 106 ペッシ と Gvar.enemy_list = 107 成長したペッシは共通設定。Ver0.1403にて分離
        if (Gvar.var_83[Gvar.var_673].Var0 == 107) {
            if (Gvar.var_83[Gvar.var_673].Var18 == 1) {
                await Func.func616();
                return;
            }
            return;
        }
        // Gvar.enemy_list = 113 DIO
        if (Gvar.var_83[Gvar.var_673].Var0 == 113) {
            Gvar.var_742 = 1;
            Gvar.var_83[Gvar.var_673].Var7 = 1;
            Gvar.var_743 = 1; //スタンド像付与フラグON
        }
        // No = 113 DIO
        // No = 113 DIO、No = 114 最高にハイなDIO、No = 128 承太郎(4部)は共通設定。Ver0.1403にて分離
        if (Gvar.var_83[Gvar.var_673].Var0 == 113) {
            if (Gvar.var_83[Gvar.var_673].Var18 == 1) {
                await Enemy.func614(); // 敵キャラの時止め能力処理
                return;
            }
            if (Gvar.var_83[Gvar.var_673].Var18 == 2) {
                Gvar.var_83[Gvar.var_673].Var18 = 1;
            }
        }
        // No = 114 最高にハイなDIO
        // No = 113 DIO、No = 114 最高にハイなDIO、No = 128 承太郎(4部)は共通設定。Ver0.1403にて分離
        if (Gvar.var_83[Gvar.var_673].Var0 == 114) {
            if (Gvar.var_83[Gvar.var_673].Var18 == 1) {
                await Enemy.func614(); // 敵キャラの時止め能力処理
                return;
            }
            if (Gvar.var_83[Gvar.var_673].Var18 == 2) {
                Gvar.var_83[Gvar.var_673].Var18 = 1;
            }
        }
        // Gvar.enemy_list = 118 クリーム
        if (Gvar.var_83[Gvar.var_673].Var0 == 118) {
            if (Gvar.var_83[Gvar.var_673].Var18 == 1) {
                await Func.func615();
                return;
            }
            return;
        }
        // Gvar.enemy_list = 121 花京院
        // Gvar.enemy_list = 121 花京院、Gvar.enemy_list = 126 退院した花京院、Gvar.enemy_list = 151 虫食い、Gvar.enemy_list = 172 虫食いでないは共通設定。Ver0.1403にて分離
        if (Gvar.var_83[Gvar.var_673].Var0 == 121) {
            if (Gvar.var_83[Gvar.var_673].Var0 == 151 || Gvar.var_83[Gvar.var_673].Var0 == 172) {
                Adap.DSPLAY(160);
            }
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1313 = 1;
            Gvar.var_1314 = Gvar.var_673;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1313++;
                Gvar.var_742 = 3;
            }
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_1313 = 0;
        }
        // Gvar.enemy_list = 123 ブチャラティ
        if (Gvar.var_83[Gvar.var_673].Var0 == 123) {
            if (Gvar.var_83[Gvar.var_673].Var18 == 1) {
                await Enemy.func598();
                return;
            }
            return;
        }
        // Gvar.enemy_list = 124 ミスタ
        if (Gvar.var_83[Gvar.var_673].Var0 == 124) {
            if (Gvar.var_83[Gvar.var_673].Var18 == 1) {
                await Enemy.func607();
                return;
            }
            return;
        }
        // Gvar.enemy_list = 125 フーゴ
        if (Gvar.var_83[Gvar.var_673].Var0 == 125) {
            if (Gvar.var_83[Gvar.var_673].Var18 == 1) {
                await Enemy.func609();
                return;
            }
            return;
        }
        // Gvar.enemy_list = 126 退院した花京院
        // Gvar.enemy_list = 121 花京院、Gvar.enemy_list = 126 退院した花京院、Gvar.enemy_list = 151 虫食い、Gvar.enemy_list = 172 虫食いでないは共通設定。Ver0.1403にて分離
        if (Gvar.var_83[Gvar.var_673].Var0 == 126) {
            if (Gvar.var_83[Gvar.var_673].Var0 == 151 || Gvar.var_83[Gvar.var_673].Var0 == 172) {
                Adap.DSPLAY(160);
            }
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1313 = 1;
            Gvar.var_1314 = Gvar.var_673;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1313++;
                Gvar.var_742 = 3;
            }
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_1313 = 0;
        }
        // No = 128 承太郎(4部)
        // No = 113 DIO、No = 114 最高にハイなDIO、No = 128 承太郎(4部)は共通設定。Ver0.1403にて分離
        if (Gvar.var_83[Gvar.var_673].Var0 == 128) {
            if (Gvar.var_83[Gvar.var_673].Var18 == 1) {
                await Enemy.func614(); // 敵キャラの時止め能力処理
                return;
            }
            if (Gvar.var_83[Gvar.var_673].Var18 == 2) {
                Gvar.var_83[Gvar.var_673].Var18 = 1;
            }
        }
        // Gvar.enemy_list = 134 ジョリーン
        // Gvar.enemy_list = 134 ジョリーン と Gvar.enemy_list = 35 仗助は共通設定。Ver0.1403にて分離
        if (Gvar.var_83[Gvar.var_673].Var0 == 134) {
            if (Gvar.var_83[Gvar.var_673].Var18 >= 1) {
                await Enemy.func602();
                return;
            }
            return;
        }
        // Gvar.enemy_list = 136 シーザー
        if (Gvar.var_83[Gvar.var_673].Var0 == 136) {
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                Gvar.var_1198 = 1;
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_742 = 2;
            }
        }
        // Gvar.enemy_list = 137 成長した吉良
        if (Gvar.var_83[Gvar.var_673].Var0 == 137) {
            if (Gvar.var_83[Gvar.var_673].Var18 == 1) {
                await Enemy.func590();
                return;
            }
            return;
        }
        // Gvar.enemy_list = 140 ジョナサン
        if (Gvar.var_83[Gvar.var_673].Var0 == 140) {
            if (Gvar.var_83[Gvar.var_673].Var18 == 1) {
                await Enemy.func599();
                return;
            }
            return;
        }
        // Gvar.enemy_list = 141 F・F
        if (Gvar.var_83[Gvar.var_673].Var0 == 141) {
            for (let cnt2 = 0; cnt2 < 7; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_742 = 2;
            }
        }
        // Gvar.enemy_list = 143 ウンガロ
        if (Gvar.var_83[Gvar.var_673].Var0 == 143) {
            if (Gvar.var_83[Gvar.var_673].Var18 == 1) {
                await Enemy.func595();
                return;
            }
            return;
        }
        // Gvar.enemy_list = 145 康一
        if (Gvar.var_83[Gvar.var_673].Var0 == 145) {
            if (Gvar.var_83[Gvar.var_673].Var18 == 1) {
                await Enemy.func592();
                return;
            }
            return;
        }
        // Gvar.enemy_list = 150 康一act2!!
        if (Gvar.var_83[Gvar.var_673].Var0 == 150) {
            if (Gvar.var_83[Gvar.var_673].Var18 == 1) {
                Gvar.var_1073 = Adap.rnd(10);
                if (Gvar.var_1073 < 3) {
                    await Enemy.func592();
                    return;
                }
                if (Gvar.var_1073 >= 3) {
                    await Enemy.func593();
                    return;
                }
            }
            return;
        }
        // Gvar.enemy_list = 151 虫食い
        // Gvar.enemy_list = 121 花京院、Gvar.enemy_list = 126 退院した花京院、Gvar.enemy_list = 151 虫食い、Gvar.enemy_list = 172 虫食いでないは共通設定。Ver0.1403にて分離
        if (Gvar.var_83[Gvar.var_673].Var0 == 151) {
            if (Gvar.var_83[Gvar.var_673].Var0 == 151 || Gvar.var_83[Gvar.var_673].Var0 == 172) {
                Adap.DSPLAY(160);
            }
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1313 = 1;
            Gvar.var_1314 = Gvar.var_673;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1313++;
                Gvar.var_742 = 3;
            }
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_1313 = 0;
        }
        // Gvar.enemy_list = 153 マックイィーン
        if (Gvar.var_83[Gvar.var_673].Var0 == 153) {
            if (Gvar.var_83[Gvar.var_673].Var18 == 1) {
                await Enemy.func597();
                return;
            }
            return;
        }
        // Gvar.enemy_list = 154 スポーツマックス
        if (Gvar.var_83[Gvar.var_673].Var0 == 154) {
            if (Gvar.var_83[Gvar.var_673].Var18 == 1) {
                await Enemy.func594();
                return;
            }
            return;
        }
        // Gvar.enemy_list = 157 アナスイ
        if (Gvar.var_83[Gvar.var_673].Var0 == 157) {
            if (Gvar.var_83[Gvar.var_673].Var18 == 1) {
                await Enemy.func605();
                return;
            }
            return;
        }
        // Gvar.enemy_list = 159 記憶が戻ったウェザー
        if (Gvar.var_83[Gvar.var_673].Var0 == 159) {
            if (Gvar.var_83[Gvar.var_673].Var18 == 1) {
                await Enemy.func591(); // 記憶が戻ったウェザーの発動能力「鈍足のカタツムリの召喚」動作処理
                return;
            }
            return;
        }
        // Gvar.enemy_list = 164 エシディシの脳
        // Gvar.enemy_list = 164 エシディシの脳 と Gvar.enemy_list = 165 エボニーデビルは共通設定。Ver0.1403にて分離
        if (Gvar.var_83[Gvar.var_673].Var0 == 164) {
            if (Gvar.var_83[Gvar.var_673].Var18 >= 1) {
                await Enemy.func603();
                return;
            }
            return;
        }
        // Gvar.enemy_list = 165 エボニーデビル
        // Gvar.enemy_list = 164 エシディシの脳 と Gvar.enemy_list = 165 エボニーデビルは共通設定。Ver0.1403にて分離
        if (Gvar.var_83[Gvar.var_673].Var0 == 165) {
            if (Gvar.var_83[Gvar.var_673].Var18 >= 1) {
                await Enemy.func603();
                return;
            }
            return;
        }
        // Gvar.enemy_list = 168 警備員の西戸
        if (Gvar.var_83[Gvar.var_673].Var0 == 168) {
            if (Gvar.var_83[Gvar.var_673].Var18 == 2) {
                await Enemy.func612();
                return;
            }
            if (Gvar.var_83[Gvar.var_673].Var18 == 1) {
                await Enemy.func600();
                return;
            }
            return;
        }
        // Ver0.1403にて追加。No = 171 離婚した承太郎
        if (Gvar.var_83[Gvar.var_673].Var0 == 171) {

            //var_83[Gvar.var_673].Var7 = 1;
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_742 = 1;
            }

            if (Gvar.var_83[Gvar.var_673].Var18 == 1) {
                await Enemy.func614(); // 敵キャラの時止め能力処理
                return;
            }
            if (Gvar.var_83[Gvar.var_673].Var18 == 2) {
                Gvar.var_83[Gvar.var_673].Var18 = 1;
            }
        }
        // Gvar.enemy_list = 172 虫食いでない
        // Gvar.enemy_list = 121 花京院、Gvar.enemy_list = 126 退院した花京院、Gvar.enemy_list = 151 虫食い、Gvar.enemy_list = 172 虫食いでないは共通設定。Ver0.1403にて分離
        if (Gvar.var_83[Gvar.var_673].Var0 == 172) {
            if (Gvar.var_83[Gvar.var_673].Var0 == 151 || Gvar.var_83[Gvar.var_673].Var0 == 172) {
                Adap.DSPLAY(160);
            }
            Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
            Gvar.var_1313 = 1;
            Gvar.var_1314 = Gvar.var_673;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ表示処理(自動)
                Gvar.var_1313++;
                Gvar.var_742 = 3;
            }
            Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
            Gvar.var_1313 = 0;
        }
        Gvar.var_240 = 0;

        if (Gvar.var_83[Gvar.var_673].Var5 == 4) {
            Gvar.var_1416 = 40;
        }
        if (Gvar.var_83[Gvar.var_673].Var5 == 6) {
            Gvar.var_1416 = 120;
        }
        if (Gvar.var_83[Gvar.var_673].Var5 == 8) {
            Gvar.var_1416 = 80;
        }
        if (Gvar.var_83[Gvar.var_673].Var5 == 2) {
            Gvar.var_1416 = 0;
        }
        if (Gvar.var_83[Gvar.var_673].Var5 == 1) {
            Gvar.var_1416 = 160;
        }
        if (Gvar.var_83[Gvar.var_673].Var5 == 3) {
            Gvar.var_1416 = 240;
        }
        if (Gvar.var_83[Gvar.var_673].Var5 == 7) {
            Gvar.var_1416 = 200;
        }
        if (Gvar.var_83[Gvar.var_673].Var5 == 9) {
            Gvar.var_1416 = 280;
        }

        Gvar.var_455 = Gvar.var_83[Gvar.var_673].Var1;
        Gvar.var_456 = Gvar.var_83[Gvar.var_673].Var2;
        Gvar.var_83[Gvar.var_673].Var7 = 1;
        Gvar.var_742 = 1;

        Gvar.var_1192 = 1;
        Gvar.var_1198 = 1;
        await Music.func095();
        await Func.func337(); // メッセージ表示処理(自動)
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            Gvar.var_1894 = Gvar.var_455;
            Gvar.var_1895 = Gvar.var_456;
            if (Gvar.var_83[Gvar.var_673].Var5 == 4) {
                Gvar.var_455 = Gvar.var_455 - 1;
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 6) {
                Gvar.var_455 = Gvar.var_455 + 1;
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 8) {
                Gvar.var_456 = Gvar.var_456 - 1;
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 2) {
                Gvar.var_456 = Gvar.var_456 + 1;
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 1) {
                Gvar.var_455 = Gvar.var_455 - 1;
                Gvar.var_456 = Gvar.var_456 + 1;
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 3) {
                Gvar.var_455 = Gvar.var_455 + 1;
                Gvar.var_456 = Gvar.var_456 + 1;
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 7) {
                Gvar.var_455 = Gvar.var_455 - 1;
                Gvar.var_456 = Gvar.var_456 - 1;
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 9) {
                Gvar.var_455 = Gvar.var_455 + 1;
                Gvar.var_456 = Gvar.var_456 - 1;
            }
            if (Gvar.var_455 < 0) {
                Gvar.var_455 = 0;
            }
            if (Gvar.var_456 < 0) {
                Gvar.var_456 = 0;
            }
            if (Gvar.var_455 > Gvar.var_33) {
                Gvar.var_455 = Gvar.var_33;
            }
            if (Gvar.var_456 > Gvar.var_34) {
                Gvar.var_456 = Gvar.var_34;
            }
            if (Gvar.var_82[Gvar.var_455][Gvar.var_456] > 0 && Gvar.var_82[Gvar.var_455][Gvar.var_456] != Gvar.var_124) {
                Gvar.var_2800 = 0;
                Gvar.var_2801 = Gvar.var_82[Gvar.var_455][Gvar.var_456];
                if (Gvar.var_83[Gvar.var_673].Var0 == 40 || Gvar.var_83[Gvar.var_673].Var0 == 41 || Gvar.var_83[Gvar.var_673].Var0 == 42) {
                    if (Gvar.var_83[Gvar.var_2801].Var0 == 40 || Gvar.var_83[Gvar.var_2801].Var0 == 41 || Gvar.var_83[Gvar.var_2801].Var0 == 42 || Gvar.var_83[Gvar.var_2801].Var0 == 54 || Gvar.var_83[Gvar.var_2801].Var0 == 65) {
                        Gvar.var_2800 = 1;
                    }
                }
                // Gvar.enemy_list = 175 不明(没敵チャカ?)
                if (Gvar.var_83[Gvar.var_673].Var0 == 175) {
                    Gvar.var_2800 = 1;
                }
                if (Gvar.var_2800 == 0 && Gvar.var_83[Gvar.var_673].Var0 != 80 && Gvar.var_83[Gvar.var_673].Var0 != 45 && Gvar.var_83[Gvar.var_673].Var0 != 158) {
                    await Func.func586();
                    break;
                }
                // Gvar.enemy_list = 80 ラング・ラングラー、Gvar.enemy_list = 45 レッドホットチリペッパー、Gvar.enemy_list = 158 プッツン由花子
                if (Gvar.var_83[Gvar.var_673].Var0 == 80 || Gvar.var_83[Gvar.var_673].Var0 == 45 || Gvar.var_83[Gvar.var_673].Var0 == 158) {
                    Gvar.var_83[Gvar.var_2801].Var8 = 1;
                    Gvar.var_1192 = 0;
                    Gvar.var_750 = 1;
                    Gvar.var_1212 = 1;
                    Gvar.var_747 = 1;
                    Gvar.var_748 = Gvar.var_455 - Gvar.var_66 + 4;
                    Gvar.var_749 = Gvar.var_456 - Gvar.var_67 + 4;
                    for (let cnt4 = 0; cnt4 < 5; ++cnt4) {
                        await Func.func337(); // メッセージ表示処理(自動)
                    }
                    Gvar.var_750 = 0;
                    Gvar.var_1212 = 0;
                    Gvar.var_747 = 0;
                    Gvar.var_83[Gvar.var_2801].Var8 = 0;
                    Gvar.var_83[Gvar.var_2801].Var12 = 0;
                    Gvar.var_83[Gvar.var_2801].Var13 = 0;
                    Gvar.var_83[Gvar.var_2801].Var17 = 1;
                    break;
                }
            }
            if (Gvar.var_65[Gvar.var_455][Gvar.var_456] == 1 && Gvar.var_123 == 0) {
                await Func.func585();
                break;
            }
            if (Gvar.var_71[Gvar.var_455][Gvar.var_456] == 0 && Gvar.var_83[Gvar.var_673].Var0 != 175) {
                break;
            }
            Gvar.var_2802 = 1;
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_2802 = 0;
            Gvar.var_1192 = 2;
            await Func.func337(); // メッセージ表示処理(自動)
        }
        Gvar.var_83[Gvar.var_673].Var7 = 0;
        Gvar.var_1192 = 0;
        return;
}

export {func581}
