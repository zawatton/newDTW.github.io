/**
 * func377 — func377 不明
 *
 * (org原典: newDTW_func3)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func377(this: any) {
        Adap.dbgprt(377);
        Gvar.var_1680 = 9;
        Gvar.var_1681 = 330;
        Gvar.var_1682 = 37;
        Gvar.var_1683 = 77;
        Gvar.var_1684 = 0;
        Adap.color(0, 0, 0);

        Adap.gmode(4, null, null, 100);
        Adap.pos(5, 35);
        Adap.gcopy(12, 0, 0, 332, 295);
        Gvar.var_1694 = 901;
        Gvar.var_1695 = 6;
        if (Gvar.var_1693 == 15) {
            Gvar.var_1695 = 5;
        }
        if (Gvar.var_1693 == 17) {
            Gvar.var_1695 = 4;
        }
        for (let cnt1 = 0; cnt1 < Gvar.var_1695; ++cnt1) {
            Adap.color(0, 255, 0);
            Adap.line(Gvar.var_1680, Gvar.var_1682 + Gvar.var_1684, Gvar.var_1681, Gvar.var_1682 + Gvar.var_1684);
            Adap.line(Gvar.var_1680, Gvar.var_1683 + Gvar.var_1684, Gvar.var_1681, Gvar.var_1683 + Gvar.var_1684);
            Adap.line(Gvar.var_1680 - 1, Gvar.var_1682 + 1 + Gvar.var_1684, Gvar.var_1680 - 1, Gvar.var_1683 - 2 + Gvar.var_1684);
            Adap.line(Gvar.var_1681 + 2, Gvar.var_1682 + 1 + Gvar.var_1684, Gvar.var_1681 + 2, Gvar.var_1683 - 2 + Gvar.var_1684);
            Adap.pset(Gvar.var_1680, Gvar.var_1682 + 1 + Gvar.var_1684);
            Adap.pset(Gvar.var_1681 + 1, Gvar.var_1682 + 1 + Gvar.var_1684);
            Adap.pset(Gvar.var_1680, Gvar.var_1683 - 1 + Gvar.var_1684);
            Adap.pset(Gvar.var_1681 + 1, Gvar.var_1683 - 1 + Gvar.var_1684);
            Gvar.belongings_item_list = Gvar.var_1693 * 6 + Gvar.var_1694;
            if (Gvar.belongings_item_list >= 987 && Gvar.belongings_item_list <= 995) {
                Gvar.belongings_item_list = Gvar.belongings_item_list - 237;
            }
            if (Gvar.belongings_item_list >= 996) {
                Gvar.belongings_item_list = Gvar.belongings_item_list - 10;
            }
            await Func.func492(); // アイテムリスト呼び出し
            Gvar.var_1696 = Gvar.item_name;
            Adap.pos(Gvar.var_1680 + 10, Gvar.var_1682 + Gvar.var_1684 - 3);
            Adap.gmode(2, null, null, null);
            Gvar.var_1697 = Gvar.belongings_item_list - 900;
            if (Gvar.belongings_item_list >= 750 && Gvar.belongings_item_list <= 770) {
                Gvar.var_1697 = Gvar.belongings_item_list + 250 - 900;
            }
            if (Gvar.var_988[Gvar.var_1697] >= 1) {
                await Func.func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            Adap.pos(Gvar.var_1680 + 80, Gvar.var_1682 + 13 + Gvar.var_1684);
    
            Adap.font(Gvar.font_type, Gvar.font_size = 14, Gvar.font_style = 1);
            if (Gvar.var_988[Gvar.var_1697] >= 1) {
                Adap.color(255, 255, 255);
            }
            if (Gvar.var_988[Gvar.var_1697] == 0) {
                Adap.color(150, 150, 150);
            }
            if (Gvar.var_988[Gvar.var_1697] >= 1) {
                Adap.mes(Gvar.var_1696);
            }
            if (Gvar.var_988[Gvar.var_1697] == 0) {
                if (Gvar.belongings_item_list >= 750 && Gvar.belongings_item_list <= 770) {
                    Adap.mes(Gvar.var_1696);
                }
                if (Gvar.belongings_item_list >= 900 && Gvar.belongings_item_list <= 986) {
                    Adap.mes(Gvar.var_1696);
                }
                if (Gvar.belongings_item_list >= 987 && Gvar.belongings_item_list <= 999) {
                    Adap.mes("？？？？？？");
                }
            }
            Gvar.var_1694 = Gvar.var_1694 + 1;
            Gvar.var_1684 = Gvar.var_1684 + 46;
        }
        Adap.pos(140, 315);
        Gvar.var_1698 = Gvar.var_1693 + 1;
        Adap.color(255, 255, 255);
        Adap.mes("← " + Gvar.var_1698 + " →");
        return;
}

export {func377}
