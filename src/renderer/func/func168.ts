import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import { tf } from '../i18n'

async function func168(this: any) {
        Adap.dbgprt(168);
        Adap.gmode(2, null, null, null);
        Adap.pos(0, 0);
        if (Gvar.var_767 == 0) {
            Adap.gcopy(17, 360, 0, 340, 340);
        }
        if (Gvar.var_767 == 1) {
            if (Gvar.var_791 == 0) {
                Adap.gcopy(17, 360, 0, 340, 340);
            }
            if (Gvar.var_791 == 1) {
                Adap.gcopy(17, 360, 720, 340, 340);
            }
            if (Gvar.var_791 == 2) {
                Adap.gcopy(17, 720, 0, 340, 340);
            }
        }

        Adap.gmode(4, null, null, 100);
        Adap.pos(0, 0);
        Adap.gcopy(12, 0, 0, 340, 340);
        Adap.color(255, 255, 255);
        if (Gvar.var_794 != 0) {
            Adap.color(150, 150, 150);
        }
        Adap.line(10, 10, 90, 10);
        Adap.line(255, 10, 325, 10);
        Adap.line(10, 200, 120, 200);
        Adap.line(225, 200, 325, 200);
        Adap.line(9, 11, 9, 198);
        Adap.line(327, 11, 327, 198);
        Adap.pset(10, 11);
        Adap.pset(326, 11);
        Adap.pset(10, 199);
        Adap.pset(326, 199);
        Adap.color(255, 255, 255);

        Adap.font(Gvar.font_type, 18, 1);
        if (Gvar.var_793 == 1) {
            Adap.pos(130, 5);
            Adap.mes("ホテルの外");
        }
        if (Gvar.var_793 == 2) {
            Adap.pos(95, 5);
            Adap.mes("レクイエムの大迷宮");
        }
        if (Gvar.var_793 == 3) {
            Adap.pos(100, 5);
            Adap.mes("ディアボロの試練");
        }
        if (Gvar.var_793 == 4) {
            Adap.pos(120, 5);
            Adap.mes("一巡後の世界");
        }
        if (Gvar.var_793 == 0) {
            Adap.pos(136, 5);
            Adap.mes(tf("{0}", Gvar.var_21));
        }

        Adap.font(Gvar.font_type, 12, 1);
        Adap.pos(130, 195);
        Adap.color(255, 255, 255);
        if (Gvar.var_794 != 0) {
            Adap.color(150, 150, 150);
        }
        if (Gvar.var_767 == 0) {
            Adap.mes(tf("<<  {0}ページ  >>", Gvar.var_785));
        }
        if (Gvar.var_767 == 1) {
            Adap.color(255, 255, 255);
            Adap.line(110, 200, 230, 200);
        }
        Gvar.var_796 = 1;
        if (Gvar.var_785 == 2) {
            Gvar.var_796 = 6;
        }
        if (Gvar.var_785 == 3) {
            Gvar.var_796 = 11;
        }
        if (Gvar.var_785 == 4) {
            Gvar.var_796 = 16;
        }
        Gvar.var_797 = 1;

        Adap.font(Gvar.font_type, Gvar.font_size = 14, Gvar.font_style = 1);
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            if (Gvar.var_796 < 20) {
                Adap.color(255, 255, 255);
                if (Gvar.var_794 != 0) {
                    Adap.color(150, 150, 150);
                }
                if (Gvar.var_796 == Gvar.var_788) {
                    Adap.color(255, 0, 0);
                }
                Adap.pos(30, Gvar.var_797 * 31);
                Adap.mes(tf("{0}位", Gvar.var_796));
                if (Gvar.var_792[Gvar.var_793][Gvar.var_796][3] != 0) {
                    Adap.pos(70, Gvar.var_797 * 31);
                    Adap.mes(tf("{0} 階", Gvar.var_792[Gvar.var_793][Gvar.var_796][1]));
                    Adap.pos(120, Gvar.var_797 * 31);
                    Adap.mes(tf("スコア  {0}", Gvar.var_792[Gvar.var_793][Gvar.var_796][3]));
                    Adap.color(0, 255, 0);
                    if (Gvar.var_794 != 0) {
                        Adap.color(0, 190, 0);
                    }
                    if (Gvar.var_796 == Gvar.var_788) {
                        Adap.color(255, 0, 0);
                    }
                    Adap.pos(30, Gvar.var_797 * 31 + 16);
                    Gvar.var_356 = Gvar.var_792[Gvar.var_793][Gvar.var_796][2];
                    await Func.func177(); // 死因原因
                    Adap.mes(tf("{0}", Gvar.var_798));
                }
                if (Gvar.var_792[Gvar.var_793][Gvar.var_796][3] == 0) {
                    Adap.pos(70, Gvar.var_797 * 31);
                    Adap.mes("");
                }
            }
            if (Gvar.var_796 == 20 && Gvar.var_789 == 0) {
                Adap.color(255, 255, 255);
                if (Gvar.var_794 != 0) {
                    Adap.color(150, 150, 150);
                }
                if (Gvar.var_796 == Gvar.var_788) {
                    Adap.color(255, 0, 0);
                }
                Adap.pos(30, Gvar.var_797 * 31);
                Adap.mes(tf("{0}位", Gvar.var_796));
                if (Gvar.var_792[Gvar.var_793][Gvar.var_796][3] != 0) {
                    Adap.pos(70, Gvar.var_797 * 31);
                    Adap.mes(tf("{0} 階", Gvar.var_792[Gvar.var_793][Gvar.var_796][1]));
                    Adap.pos(120, Gvar.var_797 * 31);
                    Adap.mes(tf("スコア  {0}", Gvar.var_792[Gvar.var_793][Gvar.var_796][3]));
                    Adap.color(0, 255, 0);
                    if (Gvar.var_794 != 0) {
                        Adap.color(0, 190, 0);
                    }
                    if (Gvar.var_796 == Gvar.var_788) {
                        Adap.color(255, 0, 0);
                    }
                    Adap.pos(30, Gvar.var_797 * 31 + 16);
                    Gvar.var_356 = Gvar.var_792[Gvar.var_793][Gvar.var_796][2];
                    await Func.func177(); // 死因原因
                    Adap.mes(tf("{0}", Gvar.var_798));
                }
                if (Gvar.var_792[Gvar.var_793][Gvar.var_796][3] == 0) {
                    Adap.pos(70, Gvar.var_797 * 31);
                    Adap.mes("");
                }
            }
            if (Gvar.var_796 == 20 && Gvar.var_789 == 1) {
                Adap.color(255, 0, 0);
                Adap.pos(30, Gvar.var_797 * 31);
                Adap.mes("圏外");
                Adap.pos(70, Gvar.var_797 * 31);
                Adap.mes(tf("{0} 階", Gvar.var_792[Gvar.var_793][0][1]));
                Adap.pos(120, Gvar.var_797 * 31);
                Adap.mes(tf("スコア  {0}", Gvar.var_792[Gvar.var_793][0][3]));
                Adap.color(255, 0, 0);
                Adap.pos(30, Gvar.var_797 * 31 + 16);
                Gvar.var_356 = Gvar.var_792[Gvar.var_793][0][2];
                await Func.func177(); // 死因原因
                Adap.mes(tf("{0}", Gvar.var_798));
            }
            Gvar.var_796 = Gvar.var_796 + 1;
            Gvar.var_797 = Gvar.var_797 + 1;
        }
        if (Gvar.var_767 == 0) {
    
            Adap.font(Gvar.font_type, Gvar.font_size = 14, Gvar.font_style = 1);
            Adap.color(255, 255, 255);
            if (Gvar.var_794 != 0) {
                Adap.color(150, 150, 150);
            }
            Adap.pos(13, Gvar.var_787 * 31);
            Adap.mes(">");
            Adap.pos(14, Gvar.var_787 * 31);
            Adap.mes(">");
            Adap.pos(15, Gvar.var_787 * 31);
            Adap.mes(">");
        }
        Adap.color(255, 255, 255);
        Adap.line(10, 220, 325, 220);
        Adap.line(10, 332, 325, 332);
        Adap.line(9, 221, 9, 330);
        Adap.line(327, 221, 327, 330);
        Adap.pset(10, 221);
        Adap.pset(326, 221);
        Adap.pset(10, 331);
        Adap.pset(326, 331);

        Adap.font(Gvar.font_type, Gvar.font_size = 14, Gvar.font_style = 1);
        Adap.color(255, 255, 255);
        if (Gvar.var_792[Gvar.var_793][Gvar.var_786][3] != 0) {
            Gvar.disc_rarity = 0;
            Adap.pos(30, 225);
            Gvar.belongings_item_list = Gvar.var_792[Gvar.var_793][Gvar.var_786][4];
            Gvar.disc_rarity = 0;
            if (Gvar.belongings_item_list > 1000) {
                if (Gvar.belongings_item_list >= 1000 && Gvar.belongings_item_list < 2000) {
                    Gvar.belongings_item_list = Gvar.belongings_item_list - 1000;
                    Gvar.disc_rarity = 1;
                }
                if (Gvar.belongings_item_list >= 2000 && Gvar.belongings_item_list < 3000) {
                    Gvar.belongings_item_list = Gvar.belongings_item_list - 2000;
                    Gvar.disc_rarity = 2;
                }
                if (Gvar.belongings_item_list >= 3000 && Gvar.belongings_item_list < 4000) {
                    Gvar.belongings_item_list = Gvar.belongings_item_list - 3000;
                    Gvar.disc_rarity = 3;
                }
            }
            await Func.func492(); // アイテムリスト呼び出し
            Adap.color(255, 255, 0);
            if (Gvar.belongings_item_list != 0) {
                Gvar.var_799 = "攻撃：" + Gvar.item_name;
                if (Gvar.var_792[Gvar.var_793][Gvar.var_786][5] != 0) {
                    Gvar.var_799 = Gvar.var_799 + "＋" + Gvar.var_792[Gvar.var_793][Gvar.var_786][5];
                }
                if (Gvar.var_792[Gvar.var_793][Gvar.var_786][6] >= 2) {
                    Gvar.var_799 = Gvar.var_799 + "★" + Gvar.var_792[Gvar.var_793][Gvar.var_786][6];
                }
                Adap.mes(Gvar.var_799);
            }
            if (Gvar.belongings_item_list == 0) {
                Adap.mes("攻撃：なし");
            }
            Adap.pos(30, 242);
            Gvar.belongings_item_list = Gvar.var_792[Gvar.var_793][Gvar.var_786][7];
            Gvar.disc_rarity = 0;
            if (Gvar.belongings_item_list > 1000) {
                if (Gvar.belongings_item_list >= 1000 && Gvar.belongings_item_list < 2000) {
                    Gvar.belongings_item_list = Gvar.belongings_item_list - 1000;
                    Gvar.disc_rarity = 1;
                }
                if (Gvar.belongings_item_list >= 2000 && Gvar.belongings_item_list < 3000) {
                    Gvar.belongings_item_list = Gvar.belongings_item_list - 2000;
                    Gvar.disc_rarity = 2;
                }
                if (Gvar.belongings_item_list >= 3000 && Gvar.belongings_item_list < 4000) {
                    Gvar.belongings_item_list = Gvar.belongings_item_list - 3000;
                    Gvar.disc_rarity = 3;
                }
            }
            await Func.func492(); // アイテムリスト呼び出し
            Adap.color(255, 180, 90);
            if (Gvar.belongings_item_list != 0) {
                Gvar.var_799 = "防御：" + Gvar.item_name;
                if (Gvar.var_792[Gvar.var_793][Gvar.var_786][8] != 0) {
                    Gvar.var_799 = Gvar.var_799 + "＋" + Gvar.var_792[Gvar.var_793][Gvar.var_786][8];
                }
                if (Gvar.var_792[Gvar.var_793][Gvar.var_786][9] >= 2) {
                    Gvar.var_799 = Gvar.var_799 + "★" + Gvar.var_792[Gvar.var_793][Gvar.var_786][9];
                }
                Adap.mes(Gvar.var_799);
            }
            if (Gvar.belongings_item_list == 0) {
                Adap.mes("防御：なし");
            }
            Adap.pos(30, 259);
            Gvar.belongings_item_list = Gvar.var_792[Gvar.var_793][Gvar.var_786][10];
            Gvar.disc_rarity = 0;
            if (Gvar.belongings_item_list > 1000) {
                if (Gvar.belongings_item_list >= 1000 && Gvar.belongings_item_list < 2000) {
                    Gvar.belongings_item_list = Gvar.belongings_item_list - 1000;
                    Gvar.disc_rarity = 1;
                }
                if (Gvar.belongings_item_list >= 2000 && Gvar.belongings_item_list < 3000) {
                    Gvar.belongings_item_list = Gvar.belongings_item_list - 2000;
                    Gvar.disc_rarity = 2;
                }
                if (Gvar.belongings_item_list >= 3000 && Gvar.belongings_item_list < 4000) {
                    Gvar.belongings_item_list = Gvar.belongings_item_list - 3000;
                    Gvar.disc_rarity = 3;
                }
            }
            await Func.func492(); // アイテムリスト呼び出し
            Adap.color(240, 0, 240);
            if (Gvar.belongings_item_list != 0) {
                Gvar.var_799 = "能力：" + Gvar.item_name;
                if (Gvar.var_792[Gvar.var_793][Gvar.var_786][11] != 0) {
                    Gvar.var_799 = Gvar.var_799 + "＋" + Gvar.var_792[Gvar.var_793][Gvar.var_786][11];
                }
                if (Gvar.var_792[Gvar.var_793][Gvar.var_786][12] >= 2) {
                    Gvar.var_799 = Gvar.var_799 + "★" + Gvar.var_792[Gvar.var_793][Gvar.var_786][12];
                }
                Adap.mes(Gvar.var_799);
            }
            if (Gvar.belongings_item_list == 0) {
                Adap.mes("能力：なし");
            }
    
            Adap.font(Gvar.font_type, Gvar.font_size = 14, Gvar.font_style = 1);
            Adap.color(255, 255, 255);
            Adap.pos(40, 276);
            Adap.mes(tf("レベル：{0}", Gvar.var_792[Gvar.var_793][Gvar.var_786][14]));
            Adap.pos(180, 276);
            Adap.mes(tf("精神力：{0}/{1}", Gvar.var_792[Gvar.var_793][Gvar.var_786][17], Gvar.var_792[Gvar.var_793][Gvar.var_786][16]));
            Adap.pos(40, 293);
            Adap.mes(tf("最大HP：{0}", Gvar.var_792[Gvar.var_793][Gvar.var_786][15]));
            Adap.pos(180, 293);
            Adap.mes(tf("満腹度：{0}", Gvar.var_792[Gvar.var_793][Gvar.var_786][18]));
            Adap.pos(40, 310);
            Adap.mes(tf("ターン：{0}", Gvar.var_792[Gvar.var_793][Gvar.var_786][0]));
            if (Gvar.var_792[Gvar.var_793][Gvar.var_786][50] != 0) {
                Adap.pos(180, 310);
                Adap.mes(tf("{0}年{1}月{2}日", Gvar.var_792[Gvar.var_793][Gvar.var_786][50], Gvar.var_792[Gvar.var_793][Gvar.var_786][51], Gvar.var_792[Gvar.var_793][Gvar.var_786][52]));
            }
            if (Gvar.var_794 >= 1) {
                Adap.color(255, 255, 255);
        
                Adap.font(Gvar.font_type, 16, 1);
                Adap.pos(13, Gvar.var_795);
                Adap.mes(">");
                Adap.pos(14, Gvar.var_795);
                Adap.mes(">");
                Adap.pos(15, Gvar.var_795);
                Adap.mes(">");
            }
        }
        return;
}

export {func168}
