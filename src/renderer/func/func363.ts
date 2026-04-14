/**
 * func363 — func363 不明
 *
 * (org原典: newDTW_func3)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func363(this: any) {
        Adap.dbgprt(363);
        if (Gvar.var_1038 == 0) {
            await Func.func364();
            return;
        }
        Adap.color(0, 0, 0);

        Adap.gmode(4, null, null, 100);
        Adap.pos(5, 35);
        Adap.gcopy(12, 0, 0, 332, 295);
        Adap.color(255, 255, 255);
        Adap.line(9, 37, 330, 37);
        Adap.line(9, 327, 161, 327);
        Adap.line(195, 327, 330, 327);
        Adap.line(8, 38, 8, 325);
        Adap.line(332, 38, 332, 325);
        Adap.pset(9, 38);
        Adap.pset(331, 38);
        Adap.pset(9, 326);
        Adap.pset(331, 326);
        Adap.pos(170, 320);
        if (Gvar.var_1607 < 10) {
            Adap.pos(175, 320);
        }
        if (Gvar.var_1607 >= 100) {
            Adap.pos(165, 320);
        }
        Adap.color(255, 255, 255);

        Adap.font(Gvar.font_type, Gvar.font_size = 16, Gvar.font_style = 1);
        Adap.mes(Gvar.var_1607);
        Adap.color(255, 255, 255);
        Adap.line(19, 127, 320, 127);
        Adap.line(19, 297, 320, 297);
        Adap.line(18, 128, 18, 295);
        Adap.line(322, 128, 322, 295);
        Adap.pset(19, 128);
        Adap.pset(321, 128);
        Adap.pset(19, 296);
        Adap.pset(321, 296);
        Adap.line(118, 155, 118, 195);
        Adap.line(218, 155, 218, 175);
        Adap.line(18, 155, 320, 155);
        Adap.line(18, 175, 320, 175);
        Adap.line(18, 195, 320, 195);
        Adap.line(18, 215, 320, 215);
        if (Gvar.var_1609 == 0) {
            Adap.color(255, 255, 255);
    
            Adap.font("メイリオ", 12, 1);
            Adap.pos(20, 43);
            if (Gvar.var_1613 == 1) {
                Adap.mes("第一部  ﾌｧﾝﾄﾑ･ﾌﾞﾗｯﾄﾞ");
                Adap.mes("" + Gvar.var_1614 + "/15");
            }
            if (Gvar.var_1613 == 2) {
                Adap.mes("第二部  戦闘潮流");
                Adap.mes("" + Gvar.var_1614 + "/15");
            }
            if (Gvar.var_1613 == 3) {
                Adap.mes("第三部  ｽﾀｰﾀﾞｽﾄ･ｸﾙｾｲﾀﾞｰｽ");
                Adap.mes("" + Gvar.var_1614 + "/41");
            }
            if (Gvar.var_1613 == 4) {
                Adap.mes("第四部  ﾀﾞｲﾔﾓﾝﾄﾞは砕けない");
                Adap.mes("" + Gvar.var_1614 + "/39");
            }
            if (Gvar.var_1613 == 5) {
                Adap.mes("第五部  黄金の風");
                Adap.mes("" + Gvar.var_1614 + "/24");
            }
            if (Gvar.var_1613 == 6) {
                Adap.mes("第六部  ｽﾄｰﾝ･ｵｰｼｬﾝ");
                Adap.mes("" + Gvar.var_1614 + "/23");
            }
            if (Gvar.var_1613 == 7) {
                Adap.mes("その他");
                Adap.mes("" + Gvar.var_1614 + "/4");
            }
        }
        Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
        if (Gvar.var_1608 >= 0 && Gvar.var_1608 < 30) {
            Gvar.var_83[299].Var5 = 2;
        }
        if (Gvar.var_1608 >= 30 && Gvar.var_1608 < 60) {
            Gvar.var_83[299].Var5 = 1;
        }
        if (Gvar.var_1608 >= 60 && Gvar.var_1608 < 90) {
            Gvar.var_83[299].Var5 = 4;
        }
        if (Gvar.var_1608 >= 90 && Gvar.var_1608 < 120) {
            Gvar.var_83[299].Var5 = 7;
        }
        if (Gvar.var_1608 >= 120 && Gvar.var_1608 < 150) {
            Gvar.var_83[299].Var5 = 8;
        }
        if (Gvar.var_1608 >= 150 && Gvar.var_1608 < 180) {
            Gvar.var_83[299].Var5 = 9;
        }
        if (Gvar.var_1608 >= 180 && Gvar.var_1608 < 210) {
            Gvar.var_83[299].Var5 = 6;
        }
        if (Gvar.var_1608 >= 210 && Gvar.var_1608 < 240) {
            Gvar.var_83[299].Var5 = 3;
        }
        Gvar.var_1640 = Gvar.var_83[299].Var5;
        Gvar.var_1641 = 299;
        Gvar.var_1642 = 1;
        Gvar.var_764 = 4;
        Gvar.var_763 = 2;
        Gvar.var_1161 = 1;
        await Func.func566();
        Gvar.var_1161 = 0;
        await Func.func566();
        Adap.pos(35, 135);
        Adap.color(0, 255, 0);

        Adap.font(Gvar.font_type, 14, 1);
        Adap.mes("【 " + Gvar.var_1643 + " 】");
        Adap.color(255, 255, 255);

        Adap.font("メイリオ", 12, 1);
        Adap.pos(35, 160);
        Adap.mes("体力  ：" + Gvar.var_1644);
        Adap.pos(135, 160);
        Adap.mes("攻撃力：" + Gvar.var_1645);
        Adap.pos(235, 160);
        Adap.mes("防御力：" + Gvar.var_1646);
        Adap.pos(35, 180);
        Adap.mes("経験値：" + Gvar.var_1647);
        Adap.pos(135, 180);
        Adap.mes("アイテム所持率：" + Gvar.var_1648);
        Adap.pos(235, 180);
        Adap.mes("");
        Adap.pos(35, 200);
        Adap.mes("タイプ：" + Gvar.var_1649);
        Adap.pos(35, 223);
        Adap.mes("能力");
        Adap.pos(35, 240);
        Adap.mes("" + Gvar.var_1650);
        Adap.mes("" + Gvar.var_1651);
        Adap.mes("" + Gvar.var_1652);
        Adap.mes("" + Gvar.var_1653);
        Adap.pos(25, 305);
        if (Gvar.var_1038 <= 1 || Gvar.var_1609 != 0) {
            Adap.mes("【Ｚ：攻撃】【Ａ：やられ】");
        }
        if (Gvar.var_1038 >= 2 && Gvar.var_1609 == 0) {
            Adap.mes("【Ｚ：攻撃】【Ａ：やられ】【←・→：次の敵】");
        }
        return;
}

export {func363}
