/**
 * func139 — func139 データ読込み処理(00.datファル、01 ~ 03.datセーブデータ解析処理)
 *
 * newDTW のゲームの根幹となる処理
 *
 * (org原典: newDTW_mainframe)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Title from '../title/index'

// データ読込み処理(00.datファル、01 ~ 03.datセーブデータ解析処理)
// 旧 func139
async function func139(this: any) {
        Adap.dbgprt(139);
        Adap.onexit(0);
        Gvar.animationDelay = 40; // デフォルトを「速い」に (従来は 50 = 標準、30 = 超速)
        Gvar.var_25[7] = 255;
        Gvar.var_26[7] = 255;
        Gvar.var_27[7] = 255;
        Gvar.var_25[8] = 255;
        Gvar.var_26[8] = 150;
        Gvar.var_27[8] = 255;
        Gvar.var_25[9] = 255;
        Gvar.var_26[9] = 0;
        Gvar.var_27[9] = 0;
        Gvar.var_25[10] = 130;
        Gvar.var_26[10] = 255;
        Gvar.var_27[10] = 130;
        Gvar.var_25[11] = 100;
        Gvar.var_26[11] = 160;
        Gvar.var_27[11] = 190;
        Gvar.var_25[12] = 255;
        Gvar.var_26[12] = 255;
        Gvar.var_27[12] = 0;
        Gvar.var_25[13] = 0;
        Gvar.var_26[13] = 0;
        Gvar.var_27[13] = 255;
        Gvar.var_687 = 0;
        Gvar.var_688 = 0;
        Gvar.var_689 = 255;
        Gvar.var_25[14] = 60;
        Gvar.var_690 = 60;
        Gvar.var_655 = 90;
        Gvar.var_656 = 88;
        Gvar.var_657 = 65;
        Gvar.var_658 = 83;
        Gvar.var_659 = 16;
        Gvar.var_660 = 67;
        Gvar.var_653 = 35;
        Gvar.var_650 = 40;
        Gvar.var_654 = 34;
        Gvar.var_647 = 37;
        Gvar.var_648 = 39;
        Gvar.var_651 = 36;
        Gvar.var_649 = 38;
        Gvar.var_652 = 33;
        Gvar.var_691[1] = Gvar.var_655;
        Gvar.var_691[2] = Gvar.var_656;
        Gvar.var_691[3] = Gvar.var_657;
        Gvar.var_691[4] = Gvar.var_658;
        Gvar.var_691[5] = Gvar.var_659;
        Gvar.var_691[6] = Gvar.var_660;
        
        Gvar.var_692 = 8192;
        Gvar.var_693 = 2048;
        Gvar.var_694 = 4096;
        Gvar.var_695 = 16384;
        Gvar.var_696 = 65536;
        Gvar.var_697 = 32768;
        Gvar.var_698 = 131072;
        Gvar.var_699 = 262144;
        Gvar.var_700 = 524288;
        Gvar.var_701 = 1048576;
        
        Gvar.var_662 = Gvar.var_692 + Gvar.var_693 + Gvar.var_694 + Gvar.var_695 + Gvar.var_696 + Gvar.var_697 + Gvar.var_698 + Gvar.var_699 + Gvar.var_700 + Gvar.var_701;

        Gvar.var_664[1] = Gvar.var_692;
        Gvar.var_664[2] = Gvar.var_693;
        Gvar.var_664[3] = Gvar.var_694;
        Gvar.var_664[4] = Gvar.var_695;
        Gvar.var_664[5] = Gvar.var_696;
        Gvar.var_664[6] = Gvar.var_697;
        Gvar.var_664[7] = Gvar.var_698;
        Gvar.var_664[8] = Gvar.var_699;
        Gvar.var_664[9] = Gvar.var_700;
        Gvar.var_664[10] = Gvar.var_701;
        Gvar.var_494[39] = "ｽﾞﾎﾞﾝのﾁｬｯｸを開けたｵﾔｼﾞが通った。";
        Gvar.var_494[40] = "";
        Gvar.var_494[37] = "クシャミをした。";
        Gvar.var_494[38] = "ちくしょーと言った。";
        Gvar.var_494[35] = "女の人がクスクス笑った。";
        Gvar.var_494[36] = "";
        Gvar.var_494[33] = "雨が降った。";
        Gvar.var_494[34] = "";
        Gvar.var_494[31] = "雷がペプシの上に落ちた。";
        Gvar.var_494[32] = "";

        // 
        await Adap.exist("00.dat");
        if (Gvar.strsize == (-1)) {
            await Adap.bsave("00.dat", Gvar.data = Gvar.var_447, null, null);
            await Adap.bsave("00.dat", Gvar.data = Gvar.animationDelay, null, 0);
            await Adap.bsave("00.dat", Gvar.data = Gvar.var_702, null, 100);    
            await Adap.bsave("00.dat", Gvar.data = Gvar.var_25, null, 200);
            await Adap.bsave("00.dat", Gvar.data = Gvar.var_26, null, 300);
            await Adap.bsave("00.dat", Gvar.data = Gvar.var_27, null, 400);
            await Adap.bsave("00.dat", Gvar.data = Gvar.var_691, null, 1000);
            await Adap.bsave("00.dat", Gvar.data = Gvar.var_664, null, 1500);
            await Func.func139(); // データ読込み処理(00.datファル、01 ~ 03.datセーブデータ解析処理)
            return;
        }

        await Adap.exist("01.dat");
        if (Gvar.strsize == (-1)) {
            Gvar.var_703 = 0;
        }
        else {
            Gvar.var_703 = 1;
            Gvar.var_704 = await Adap.bload("01.dat");
            // Gvar.var_704[61] == 0 だと拠点    
            if (Gvar.var_704[61] == 0) {
                if (Gvar.var_704[117] == 0) {
                    Gvar.var_705 = "ヴェネチアホテル";
                }
                if (Gvar.var_704[117] == 1) {
                    Gvar.var_705 = "亀の中";
                }
                if (Gvar.var_704[117] == 2) {
                    Gvar.var_705 = "酒場";
                }
            }
            // Gvar.var_704[61] == 1 だとホテルの外 
            if (Gvar.var_704[61] == 1) {
                if (Gvar.var_704[1] <= 2) {
                    Gvar.var_705 = "水の都";
                }
                if (Gvar.var_704[1] >= 3 && Gvar.var_704[1] <= 5) {
                    Gvar.var_705 = "郊外の森林";
                }
                if (Gvar.var_704[1] >= 6 && Gvar.var_704[1] <= 8) {
                    Gvar.var_705 = "紅海の浜辺";
                }
                if (Gvar.var_704[1] >= 9 && Gvar.var_704[1] <= 11) {
                    Gvar.var_705 = "山岳地帯";
                }
                if (Gvar.var_704[1] == 12) {
                    Gvar.var_705 = "エンヤホテル";
                }
            }
            // Gvar.var_704[61] == 2 だとレクイエムの大迷宮
            if (Gvar.var_704[61] == 2) {
                Gvar.var_705 = "レクイエムの大迷宮";
                if (Gvar.var_704[1] == 30) {
                    Gvar.var_705 = "黄金の風";
                }
            }
            // Gvar.var_704[61] == 3 だとディアボロの試練
            if (Gvar.var_704[61] == 3) {
                Gvar.var_705 = "ディアボロの試練";
                if (Gvar.var_704[1] == 99) {
                    Gvar.var_705 = "自由人の狂想曲";
                }
            }
            // Gvar.var_704[61] == 4 だと一巡後の世界
            if (Gvar.var_704[61] == 4) {
                Gvar.var_705 = "一巡後の世界";
            }
            if (Gvar.var_704[61] == 5) {
                Gvar.var_705 = "" + Gvar.var_21;
                if (Gvar.var_704[1] == Gvar.var_20) {
                    Gvar.var_705 = "" + Gvar.var_22;
                }
            }
            if (Gvar.var_704[187] == 1) {
                Gvar.var_705 = "虹村屋敷";
            }
            if (Gvar.var_704[187] == 2) {
                Gvar.var_705 = "杜王町埠頭";
            }
            if (Gvar.var_704[187] == 3) {
                Gvar.var_705 = "吉良屋敷";
            }
            if (Gvar.var_704[187] == 4) {
                Gvar.var_705 = "星屑の十字軍";
            }
            if (Gvar.var_704[187] == 5) {
                Gvar.var_705 = "ビンの中";
            }
            if (Gvar.var_704[187] == 6) {
                Gvar.var_705 = "ナチス実験施設";
            }
            if (Gvar.var_704[187] == 7) {
                Gvar.var_705 = "砂漠";
            }
            if (Gvar.var_704[187] == 8) {
                Gvar.var_705 = "幻覚の迷宮";
            }
            if (Gvar.var_704[187] == 9) {
                Gvar.var_705 = "幽霊部屋";
            }
            Gvar.var_706 = Gvar.var_704[1];
            Gvar.var_707 = Gvar.var_704[108];
            Gvar.var_708 = Gvar.var_704[88]; // エンブレム(ダンジョン(ホテルの外？)クリア時)解放フラグ
            Gvar.var_709 = Gvar.var_704[93];
            Gvar.var_710 = Gvar.var_704[94];
        }
        await Adap.exist("02.dat");
        if (Gvar.strsize == (-1)) {
            Gvar.var_711 = 0;
        }
        else {
            Gvar.var_711 = 1;
            Gvar.var_704 = await Adap.bload("02.dat");
            if (Gvar.var_704[61] == 0) {
                if (Gvar.var_704[117] == 0) {
                    Gvar.var_712 = "ヴェネチアホテル";
                }
                if (Gvar.var_704[117] == 1) {
                    Gvar.var_712 = "亀の中";
                }
                if (Gvar.var_704[117] == 2) {
                    Gvar.var_712 = "酒場";
                }
            }
            if (Gvar.var_704[61] == 1) {
                if (Gvar.var_704[1] <= 2) {
                    Gvar.var_712 = "水の都";
                }
                if (Gvar.var_704[1] >= 3 && Gvar.var_704[1] <= 5) {
                    Gvar.var_712 = "郊外の森林";
                }
                if (Gvar.var_704[1] >= 6 && Gvar.var_704[1] <= 8) {
                    Gvar.var_712 = "紅海の浜辺";
                }
                if (Gvar.var_704[1] >= 9 && Gvar.var_704[1] <= 11) {
                    Gvar.var_712 = "山岳地帯";
                }
                if (Gvar.var_704[1] == 12) {
                    Gvar.var_712 = "エンヤホテル";
                }
            }
            if (Gvar.var_704[61] == 2) {
                Gvar.var_712 = "レクイエムの大迷宮";
                if (Gvar.var_704[1] == 30) {
                    Gvar.var_712 = "黄金の風";
                }
            }
            if (Gvar.var_704[61] == 3) {
                Gvar.var_712 = "ディアボロの試練";
                if (Gvar.var_704[1] == 99) {
                    Gvar.var_712 = "自由人の狂想曲";
                }
            }
            if (Gvar.var_704[61] == 4) {
                Gvar.var_712 = "一巡後の世界";
            }
            if (Gvar.var_704[61] == 5) {
                Gvar.var_712 = "" + Gvar.var_21;
                if (Gvar.var_704[1] == Gvar.var_20) {
                    Gvar.var_712 = "" + Gvar.var_22;
                }
            }
            if (Gvar.var_704[187] == 1) {
                Gvar.var_712 = "虹村屋敷";
            }
            if (Gvar.var_704[187] == 2) {
                Gvar.var_712 = "杜王町埠頭";
            }
            if (Gvar.var_704[187] == 3) {
                Gvar.var_712 = "吉良屋敷";
            }
            if (Gvar.var_704[187] == 4) {
                Gvar.var_712 = "星屑の十字軍";
            }
            if (Gvar.var_704[187] == 5) {
                Gvar.var_712 = "ビンの中";
            }
            if (Gvar.var_704[187] == 6) {
                Gvar.var_712 = "ナチス実験施設";
            }
            if (Gvar.var_704[187] == 7) {
                Gvar.var_712 = "砂漠";
            }
            if (Gvar.var_704[187] == 8) {
                Gvar.var_712 = "幻覚の迷宮";
            }
            if (Gvar.var_704[187] == 9) {
                Gvar.var_712 = "幽霊部屋";
            }
            Gvar.var_713 = Gvar.var_704[1];
            Gvar.var_714 = Gvar.var_704[108];
            Gvar.var_715 = Gvar.var_704[88]; // エンブレム(ダンジョン(ホテルの外？)クリア時)解放フラグ
            Gvar.var_716 = Gvar.var_704[93];
            Gvar.var_717 = Gvar.var_704[94];
        }


        await Adap.exist("03.dat");
        if (Gvar.strsize == (-1)) {
            Gvar.var_718 = 0;
        }
        else {
            Gvar.var_718 = 1;
            Gvar.var_704 = await Adap.bload("03.dat");
            if (Gvar.var_704[61] == 0) {
                if (Gvar.var_704[117] == 0) {
                    Gvar.var_719 = "ヴェネチアホテル";
                }
                if (Gvar.var_704[117] == 1) {
                    Gvar.var_719 = "亀の中";
                }
                if (Gvar.var_704[117] == 2) {
                    Gvar.var_719 = "酒場";
                }
            }
            if (Gvar.var_704[61] == 1) {
                if (Gvar.var_704[1] <= 2) {
                    Gvar.var_719 = "水の都";
                }
                if (Gvar.var_704[1] >= 3 && Gvar.var_704[1] <= 5) {
                    Gvar.var_719 = "郊外の森林";
                }
                if (Gvar.var_704[1] >= 6 && Gvar.var_704[1] <= 8) {
                    Gvar.var_719 = "紅海の浜辺";
                }
                if (Gvar.var_704[1] >= 9 && Gvar.var_704[1] <= 11) {
                    Gvar.var_719 = "山岳地帯";
                }
                if (Gvar.var_704[1] == 12) {
                    Gvar.var_719 = "エンヤホテル";
                }
            }
            if (Gvar.var_704[61] == 2) {
                Gvar.var_719 = "レクイエムの大迷宮";
                if (Gvar.var_704[1] == 30) {
                    Gvar.var_719 = "黄金の風";
                }
            }
            if (Gvar.var_704[61] == 3) {
                Gvar.var_719 = "ディアボロの試練";
                if (Gvar.var_704[1] == 99) {
                    Gvar.var_719 = "自由人の狂想曲";
                }
            }
            if (Gvar.var_704[61] == 4) {
                Gvar.var_719 = "一巡後の世界";
            }
            if (Gvar.var_704[61] == 5) {
                Gvar.var_719 = "" + Gvar.var_21;
                if (Gvar.var_704[1] == Gvar.var_20) {
                    Gvar.var_719 = "" + Gvar.var_22;
                }
            }
            if (Gvar.var_704[187] == 1) {
                Gvar.var_719 = "虹村屋敷";
            }
            if (Gvar.var_704[187] == 2) {
                Gvar.var_719 = "杜王町埠頭";
            }
            if (Gvar.var_704[187] == 3) {
                Gvar.var_719 = "吉良屋敷";
            }
            if (Gvar.var_704[187] == 4) {
                Gvar.var_719 = "星屑の十字軍";
            }
            if (Gvar.var_704[187] == 5) {
                Gvar.var_719 = "ビンの中";
            }
            if (Gvar.var_704[187] == 6) {
                Gvar.var_719 = "ナチス実験施設";
            }
            if (Gvar.var_704[187] == 7) {
                Gvar.var_719 = "砂漠";
            }
            if (Gvar.var_704[187] == 8) {
                Gvar.var_719 = "幻覚の迷宮";
            }
            if (Gvar.var_704[187] == 9) {
                Gvar.var_719 = "幽霊部屋";
            }
            Gvar.var_720 = Gvar.var_704[1];
            Gvar.var_721 = Gvar.var_704[108];
            Gvar.var_722 = Gvar.var_704[88]; // エンブレム(ダンジョン(ホテルの外？)クリア時)解放フラグ
            Gvar.var_723 = Gvar.var_704[93];
            Gvar.var_724 = Gvar.var_704[94];
        }
        Gvar.animationDelay = await Adap.bload("00.dat", null, 0);

        Gvar.var_702 = await Adap.bload("00.dat", null, 100);

        Gvar.var_25_x = await Adap.bload("00.dat", null, 200);
        Gvar.var_26_x = await Adap.bload("00.dat", null, 300);
        Gvar.var_27_x = await Adap.bload("00.dat", null, 400);
        if (Gvar.var_702 == 0) {
            Gvar.var_25[1] = 255;
            Gvar.var_26[1] = 255;
            Gvar.var_27[1] = 255;
            Gvar.var_25[2] = 255;
            Gvar.var_26[2] = 255;
            Gvar.var_27[2] = 255;
            Gvar.var_25[3] = 255;
            Gvar.var_26[3] = 255;
            Gvar.var_27[3] = 255;
            Gvar.var_25[4] = 255;
            Gvar.var_26[4] = 255;
            Gvar.var_27[4] = 255;
            Gvar.var_25[5] = 255;
            Gvar.var_26[5] = 255;
            Gvar.var_27[5] = 255;
            Gvar.var_25[6] = 255;
            Gvar.var_26[6] = 255;
            Gvar.var_27[6] = 255;

            // Ver0.1310にて追加。追加したことで白色へ初期化できる。
            Gvar.var_25[7] = 255;
            Gvar.var_26[7] = 255;
            Gvar.var_27[7] = 255;
            Gvar.var_25[8] = 255;
            Gvar.var_26[8] = 255;
            Gvar.var_27[8] = 255;
            Gvar.var_25[9] = 255;
            Gvar.var_26[9] = 255;
            Gvar.var_27[9] = 255;
            Gvar.var_25[10] = 255;
            Gvar.var_26[10] = 255;
            Gvar.var_27[10] = 255;
            Gvar.var_25[11] = 255;
            Gvar.var_26[11] = 255;
            Gvar.var_27[11] = 255;
            Gvar.var_25[12] = 255;
            Gvar.var_26[12] = 255;
            Gvar.var_27[12] = 255;
        }
        if (Gvar.var_702 == 1) {
            Gvar.var_25[1] = Gvar.var_25[7];
            Gvar.var_26[1] = Gvar.var_26[7];
            Gvar.var_27[1] = Gvar.var_27[7];
            Gvar.var_25[2] = Gvar.var_25[8];
            Gvar.var_26[2] = Gvar.var_26[8];
            Gvar.var_27[2] = Gvar.var_27[8];
            Gvar.var_25[3] = Gvar.var_25[9];
            Gvar.var_26[3] = Gvar.var_26[9];
            Gvar.var_27[3] = Gvar.var_27[9];
            Gvar.var_25[4] = Gvar.var_25[10];
            Gvar.var_26[4] = Gvar.var_26[10];
            Gvar.var_27[4] = Gvar.var_27[10];
            Gvar.var_25[5] = Gvar.var_25[11];
            Gvar.var_26[5] = Gvar.var_26[11];
            Gvar.var_27[5] = Gvar.var_27[11];
            Gvar.var_25[6] = Gvar.var_25[12];
            Gvar.var_26[6] = Gvar.var_26[12];
            Gvar.var_27[6] = Gvar.var_27[12];
        }
        Gvar.var_687 = Gvar.var_25[13];
        Gvar.var_688 = Gvar.var_26[13];
        Gvar.var_689 = Gvar.var_27[13];
        Gvar.var_690 = Gvar.var_25[14];
        Gvar.var_691 = await Adap.bload("00.dat", null, 1000);
        Gvar.var_655 = Gvar.var_691[1];
        Gvar.var_656 = Gvar.var_691[2];
        Gvar.var_657 = Gvar.var_691[3];
        Gvar.var_658 = Gvar.var_691[4];
        Gvar.var_659 = Gvar.var_691[5];
        Gvar.var_660 = Gvar.var_691[6];
        Gvar.var_664 = await Adap.bload("00.dat", null, 1500);
        Gvar.var_692 = Gvar.var_664[1];
        Gvar.var_693 = Gvar.var_664[2];
        Gvar.var_694 = Gvar.var_664[3];
        Gvar.var_695 = Gvar.var_664[4];
        Gvar.var_696 = Gvar.var_664[5];
        Gvar.var_697 = Gvar.var_664[6];
        Gvar.var_698 = Gvar.var_664[7];
        Gvar.var_699 = Gvar.var_664[8];
        Gvar.var_700 = Gvar.var_664[9];
        Gvar.var_701 = Gvar.var_664[10];
        Gvar.var_64 = 0;
        Gvar.var_725 = 0;
        Gvar.var_726 = 1; // 冒険の書No.変数 = 1

        await Title.func139A(); // タイトル画面生成処理
}

export {func139}
