/**
 * func397 — func397 所持、または床に落ちているアイテムのアイコン表示
 *
 * (org原典: newDTW_func3)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func397(this: any) {
        Adap.dbgprt(397);
        if (Gvar.belongings_item_list == 1) {
            // Adap.buffer(9)は"img_item.gif"。X座標0、Y座標0から切り取り長さ X方向40、Y方向40
            // 絵:お金。
            Adap.gcopy(9, 0, 0, 40, 40);
        }
        if (Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 400) {
            // Adap.buffer(9)は"img_item.gif"。X座標40、Y座標0から切り取り長さ X方向40、Y方向40
            // 絵:disc(黄色)、身識別、床に落ちている装備disc
            Adap.gcopy(9, 40, 0, 40, 40);
        }
        if (Gvar.belongings_item_list >= 400 && Gvar.belongings_item_list < 450) {
            // Adap.buffer(9)は"img_item.gif"。X座標240、Y座標0から切り取り長さ X方向40、Y方向40
            // 絵:disc(銅色))、所持または床に落ちている射撃disc
            Adap.gcopy(9, 240, 0, 40, 40);
        }
        if (Gvar.belongings_item_list >= 450 && Gvar.belongings_item_list < 500) {
            Adap.gcopy(9, 120, 0, 40, 40);
        }
        if (Gvar.belongings_item_list >= 500 && Gvar.belongings_item_list < 600) {
            Adap.gcopy(9, 280, 0, 40, 40);
        }
        if (Gvar.belongings_item_list >= 600 && Gvar.belongings_item_list < 630) {
            Adap.gcopy(9, 0, 40, 40, 40);
        }
        if (Gvar.belongings_item_list >= 650 && Gvar.belongings_item_list < 654 && Gvar.belongings_item_list != 652) {
            Adap.gcopy(9, 120, 40, 40, 40);
        }
        if (Gvar.belongings_item_list == 652) {
            Adap.gcopy(9, 80, 40, 40, 40);
        }
        if (Gvar.belongings_item_list == 654) {
            Adap.gcopy(14, 160, 0, 40, 40);
        }
        if (Gvar.belongings_item_list == 655) {
            Adap.gcopy(9, 320, 200, 40, 40);
        }
        if (Gvar.belongings_item_list == 630) {
            Adap.gcopy(9, 0, 200, 40, 40);
        }
        if (Gvar.belongings_item_list == 631) {
            Adap.gcopy(9, 40, 200, 40, 40);
        }
        if (Gvar.belongings_item_list == 632) {
            Adap.gcopy(9, 160, 200, 40, 40);
        }
        if (Gvar.belongings_item_list == 633) {
            Adap.gcopy(9, 80, 200, 40, 40);
        }
        if (Gvar.belongings_item_list == 634) {
            Adap.gcopy(9, 120, 200, 40, 40);
        }
        if (Gvar.belongings_item_list == 635) {
            Adap.gcopy(9, 200, 240, 40, 40);
        }
        if (Gvar.belongings_item_list == 636) {
            Adap.gcopy(9, 240, 240, 40, 40);
        }
        if (Gvar.belongings_item_list == 639) {
            Adap.gcopy(9, 0, 240, 40, 40);
        }
        if (Gvar.belongings_item_list == 640) {
            Adap.gcopy(9, 200, 240, 40, 40);
        }
        if (Gvar.belongings_item_list == 641) {
            Adap.gcopy(9, 120, 120, 40, 40);
        }
        if (Gvar.belongings_item_list == 644) {
            Adap.gcopy(9, 240, 160, 40, 40);
        }
        if (Gvar.belongings_item_list == 645) {
            Adap.gcopy(9, 280, 160, 40, 40);
        }
        if (Gvar.belongings_item_list == 646) {
            Adap.gcopy(9, 320, 160, 40, 40);
        }
        if (Gvar.belongings_item_list == 647) {
            Adap.gcopy(9, 360, 240, 40, 40);
        }
        if (Gvar.belongings_item_list == 648) {
            Adap.gcopy(9, 80, 240, 40, 40);
        }
        if (Gvar.belongings_item_list >= 800 && Gvar.belongings_item_list < 900) {
            if (Gvar.var_862[Gvar.belongings_item_list][0] == 0 && Gvar.dungeon_number >= 2) {
                Gvar.var_1825 = 0;
            }
            if (Gvar.var_862[Gvar.belongings_item_list][0] == 1 && Gvar.dungeon_number >= 2) {
                Gvar.var_1825 = 1;
            }
            // No = 1 なので、ホテルの外
            if (Gvar.dungeon_number == 1) {
                Gvar.var_1825 = 1;
            }
            if (Gvar.var_262 == 1) { // Gvar.var_262 == 1 なので、Gvar.dungeon_number = 0 であれば
                Gvar.var_1825 = 1;
            }
            if (Gvar.belongings_item_list >= 801 && Gvar.belongings_item_list <= 804) {
                Gvar.var_1825 = 1;
            }
            if (Gvar.var_626 == 1) {
                Gvar.var_1825 = 1;
            }
            if (Gvar.var_1825 == 0) {
                Adap.gcopy(9, 360, 280, 40, 40);
            }
            if (Gvar.var_1825 == 1) {
                if (Gvar.belongings_item_list == 800) {
                    Adap.gcopy(9, 760, 280, 40, 40);
                }
                if (Gvar.belongings_item_list == 801) {
                    Adap.gcopy(9, 520, 280, 40, 40);
                }
                if (Gvar.belongings_item_list == 802) {
                    Adap.gcopy(9, 600, 280, 40, 40);
                }
                if (Gvar.belongings_item_list == 803) {
                    Adap.gcopy(9, 640, 280, 40, 40);
                }
                if (Gvar.belongings_item_list == 804) {
                    Adap.gcopy(9, 560, 280, 40, 40);
                }
                if (Gvar.belongings_item_list == 815) {
                    Adap.gcopy(9, 40, 280, 40, 40);
                }
                if (Gvar.belongings_item_list == 808) {
                    Adap.gcopy(9, 80, 280, 40, 40);
                }
                if (Gvar.belongings_item_list == 805) {
                    Adap.gcopy(9, 120, 280, 40, 40);
                }
                if (Gvar.belongings_item_list == 807) {
                    Adap.gcopy(9, 160, 280, 40, 40);
                }
                if (Gvar.belongings_item_list == 806) {
                    Adap.gcopy(9, 200, 280, 40, 40);
                }
                if (Gvar.belongings_item_list == 809) {
                    Adap.gcopy(9, 0, 280, 40, 40);
                }
                if (Gvar.belongings_item_list == 816) {
                    Adap.gcopy(9, 240, 280, 40, 40);
                }
                if (Gvar.belongings_item_list == 850) {
                    Adap.gcopy(9, 280, 280, 40, 40);
                }
                if (Gvar.belongings_item_list == 851) {
                    Adap.gcopy(9, 320, 280, 40, 40);
                }
                if (Gvar.belongings_item_list == 817) {
                    Adap.gcopy(9, 440, 280, 40, 40);
                }
                if (Gvar.belongings_item_list == 818) {
                    Adap.gcopy(9, 480, 280, 40, 40);
                }
                if (Gvar.belongings_item_list == 852) {
                    Adap.gcopy(9, 400, 280, 40, 40);
                }
                if (Gvar.belongings_item_list == 853) {
                    Adap.gcopy(9, 680, 280, 40, 40);
                }
                if (Gvar.belongings_item_list == 854) {
                    Adap.gcopy(9, 720, 280, 40, 40);
                }
            }
        }
        // No = 700 没アイテム? マンホールのような見た目 
        if (Gvar.belongings_item_list == 700) {
            Adap.gcopy(9, 0, 80, 40, 40); // Adap.buffer(9)は"img_item.gif"
        }
        // No = 701 没アイテム「ソフト・マシーンの発動によって罠にした敵」
        if (Gvar.belongings_item_list == 701) {
            if (Gvar.var_1248 < 50) {
                Gvar.var_965 = 6; // Adap.buffer(6)は"img_enemy1a.gif"
                Gvar.var_1826 = 15;
                Gvar.var_966 = Gvar.var_1248 * 40;
            }
            if (Gvar.var_1248 >= 50 && Gvar.var_1248 < 100) {
                Gvar.var_965 = 21; // Adap.buffer(21)は"img_enemy2a.gif"
                Gvar.var_1826 = 22;
                Gvar.var_966 = (Gvar.var_1248 - 50) * 40;
            }
            if (Gvar.var_1248 >= 100 && Gvar.var_1248 < 150) {
                Gvar.var_965 = 27; // Adap.buffer(27)は"img_enemy3a.gif"
                Gvar.var_1826 = 28;
                Gvar.var_966 = (Gvar.var_1248 - 100) * 40;
            }
            if (Gvar.var_1248 >= 150 && Gvar.var_1248 < 200) {
                Gvar.var_965 = 13; // Adap.buffer(13)は"img_enemy4a.gif"
                Gvar.var_1826 = 20;
                Gvar.var_966 = (Gvar.var_1248 - 150) * 40; // ロッコ・バロッコ所長はGvar.enemy_list = 173。173 - 150 = 23。23 * 40 = 920となり、Y軸920で合致する。
            }
            Gvar.var_1827 = await Adap.ginfo(22);
            Gvar.var_1828 = await Adap.ginfo(23);
            Adap.gsel(32);
            Adap.color(0, 0, 0);
            Adap.boxf(0, 0, 50, 50);
            Adap.pos(1, 1);
            Adap.gzoom(40, 30, Gvar.var_965, 960, Gvar.var_966, 40, 40, 1);
            Adap.gsel(0);
            Adap.gmode(6, null, null, 255)
            Adap.pos(Gvar.var_1827, Gvar.var_1828 + 5 + 2);
            Adap.gcopy(32, 0, 0, 42, 42);
            Adap.pos(Gvar.var_1827, Gvar.var_1828 + 5 + 1);
            Adap.gcopy(32, 0, 0, 42, 42);
            Adap.pos(Gvar.var_1827, Gvar.var_1828 + 5 - 1);
            Adap.gcopy(32, 0, 0, 42, 42);
            Adap.pos(Gvar.var_1827 - 1, Gvar.var_1828 + 5);
            Adap.gcopy(32, 0, 0, 42, 42);
            Adap.pos(Gvar.var_1827 + 1, Gvar.var_1828 + 5);
            Adap.gcopy(32, 0, 0, 42, 42);
            Adap.gmode(2, null, null, null);
            Adap.pos(Gvar.var_1827, Gvar.var_1828 + 5);
            Adap.gcopy(32, 0, 0, 40, 40);
        }
        if (Gvar.belongings_item_list == 711) {
            Adap.gcopy(9, 360, 160, 40, 40); // Adap.buffer(9)は"img_item.gif"
        }
        // No = 712 やばいクスリ
        if (Gvar.belongings_item_list == 712) {
            Adap.gcopy(9, 40, 40, 40, 40); // Adap.buffer(9)は"img_item.gif"
        }
        // No = 713 ポルポのライター
        if (Gvar.belongings_item_list == 713) {
            Adap.gcopy(9, 200, 40, 40, 40); // Adap.buffer(9)は"img_item.gif"
        }
        // No = 714 紫外線照射装置
        if (Gvar.belongings_item_list == 714) {
            Adap.gcopy(9, 80, 120, 40, 40); // Adap.buffer(9)は"img_item.gif"
        }
        if (Gvar.belongings_item_list == 715) {
            Adap.gcopy(9, 160, 120, 40, 40); // Adap.buffer(9)は"img_item.gif"
        }
        if (Gvar.belongings_item_list == 716) {
            Adap.gcopy(9, 320, 120, 40, 40); // Adap.buffer(9)は"img_item.gif"
        }
        if (Gvar.belongings_item_list == 717) {
            Adap.gcopy(9, 120, 80, 40, 40); // Adap.buffer(9)は"img_item.gif"
        }
        if (Gvar.belongings_item_list == 718) {
            Adap.gcopy(9, 160, 80, 40, 40); // Adap.buffer(9)は"img_item.gif"
        }
        if (Gvar.belongings_item_list == 719) {
            Adap.gcopy(9, 160, 80, 40, 40); // Adap.buffer(9)は"img_item.gif"
        }
        if (Gvar.belongings_item_list == 720) {
            Adap.gcopy(9, 120, 160, 40, 40); // Adap.buffer(9)は"img_item.gif"
        }
        if (Gvar.belongings_item_list == 721) {
            Adap.gcopy(9, 240, 80, 40, 40); // Adap.buffer(9)は"img_item.gif"
        }
        if (Gvar.belongings_item_list == 722) {
            Adap.gcopy(9, 320, 40, 40, 40); // Adap.buffer(9)は"img_item.gif"
        }
        if (Gvar.belongings_item_list == 723) {
            Adap.gcopy(9, 200, 160, 40, 40); // Adap.buffer(9)は"img_item.gif"
        }
        if (Gvar.belongings_item_list == 724) {
            Adap.gcopy(9, 0, 120, 40, 40); // Adap.buffer(9)は"img_item.gif"
        }
        if (Gvar.belongings_item_list == 725) {
            Adap.gcopy(9, 160, 40, 40, 40); // Adap.buffer(9)は"img_item.gif"
        }
        if (Gvar.belongings_item_list == 726) {
            Adap.gcopy(9, 360, 80, 40, 40); // Adap.buffer(9)は"img_item.gif"
        }
        if (Gvar.belongings_item_list == 727) {
            Adap.gcopy(9, 280, 120, 40, 40); // Adap.buffer(9)は"img_item.gif"
        }
        if (Gvar.belongings_item_list == 728) {
            Adap.gcopy(9, 40, 120, 40, 40); // Adap.buffer(9)は"img_item.gif"
        }
        if (Gvar.belongings_item_list == 729) {
            Adap.gcopy(9, 360, 120, 40, 40); // Adap.buffer(9)は"img_item.gif"
        }
        if (Gvar.belongings_item_list == 730) {
            Adap.gcopy(9, 400, 120, 40, 40); // Adap.buffer(9)は"img_item.gif"
        }
        if (Gvar.belongings_item_list == 731) {
            Adap.gcopy(9, 440, 120, 40, 40); // Adap.buffer(9)は"img_item.gif"
        }
        // Ver0.14にて追加。No = 732 ベルトのバックル
        if (Gvar.belongings_item_list == 732) {
            Adap.gcopy(9, 400, 80, 40, 40); // Adap.buffer(9)は"img_item.gif"
        }
        // No = 900 コミック「GB BOY」
        if (Gvar.belongings_item_list == 900) {
            Adap.gcopy(23, 360, 360, 40, 40); // Adap.buffer(9)は"img_item.gif"
        }
        // 
        if (Gvar.belongings_item_list >= 901 && Gvar.belongings_item_list < 1000) {
            if (Gvar.belongings_item_list >= 901 && Gvar.belongings_item_list <= 910) {
                Gvar.var_1829 = (Gvar.belongings_item_list - 901) * 40;
                Gvar.var_1830 = 0;
            }
            if (Gvar.belongings_item_list >= 911 && Gvar.belongings_item_list <= 920) {
                Gvar.var_1829 = (Gvar.belongings_item_list - 911) * 40;
                Gvar.var_1830 = 1 * 40;
            }
            if (Gvar.belongings_item_list >= 921 && Gvar.belongings_item_list <= 930) {
                Gvar.var_1829 = (Gvar.belongings_item_list - 921) * 40;
                Gvar.var_1830 = 2 * 40;
            }
            if (Gvar.belongings_item_list >= 931 && Gvar.belongings_item_list <= 940) {
                Gvar.var_1829 = (Gvar.belongings_item_list - 931) * 40;
                Gvar.var_1830 = 3 * 40;
            }
            if (Gvar.belongings_item_list >= 941 && Gvar.belongings_item_list <= 950) {
                Gvar.var_1829 = (Gvar.belongings_item_list - 941) * 40;
                Gvar.var_1830 = 4 * 40;
            }
            if (Gvar.belongings_item_list >= 951 && Gvar.belongings_item_list <= 960) {
                Gvar.var_1829 = (Gvar.belongings_item_list - 951) * 40;
                Gvar.var_1830 = 5 * 40;
            }
            if (Gvar.belongings_item_list >= 961 && Gvar.belongings_item_list <= 970) {
                Gvar.var_1829 = (Gvar.belongings_item_list - 961) * 40;
                Gvar.var_1830 = 6 * 40;
            }
            if (Gvar.belongings_item_list >= 971 && Gvar.belongings_item_list <= 980) {
                Gvar.var_1829 = (Gvar.belongings_item_list - 971) * 40;
                Gvar.var_1830 = 7 * 40;
            }
            if (Gvar.belongings_item_list >= 981 && Gvar.belongings_item_list <= 990) {
                Gvar.var_1829 = (Gvar.belongings_item_list - 981) * 40;
                Gvar.var_1830 = 8 * 40;
            }
            if (Gvar.belongings_item_list >= 991 && Gvar.belongings_item_list <= 999) {
                Gvar.var_1829 = (Gvar.belongings_item_list - 991) * 40;
                Gvar.var_1830 = 9 * 40;
            }
            Adap.gcopy(23, Gvar.var_1829, Gvar.var_1830, 40, 40);
        }
        if (Gvar.belongings_item_list >= 750 && Gvar.belongings_item_list < 800) {
            if (Gvar.belongings_item_list >= 750 && Gvar.belongings_item_list <= 759) {
                Gvar.var_1829 = (Gvar.belongings_item_list - 750) * 40;
                Gvar.var_1830 = 10 * 40;
            }
            Adap.gcopy(23, Gvar.var_1829, Gvar.var_1830, 40, 40);
        }
        return;
}

export {func397}
