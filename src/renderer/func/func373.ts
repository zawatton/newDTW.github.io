/**
 * func373 — func373 不明
 *
 * (org原典: newDTW_func3)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import { tf } from '../i18n'

async function func373(this: any) {
        Adap.dbgprt(373);
        Gvar.var_1680 = 9;
        Gvar.var_1681 = 330;
        Gvar.var_1682 = 37;
        Gvar.var_1683 = 320;
        Gvar.var_1684 = 0;
        Adap.color(0, 0, 0);

        Adap.gmode(4, null, null, 100);
        Adap.pos(5, 35);
        Adap.gcopy(12, 0, 0, 332, 305);
        Adap.color(255, 255, 255);
        Adap.line(Gvar.var_1680, Gvar.var_1682 + Gvar.var_1684, Gvar.var_1681, Gvar.var_1682 + Gvar.var_1684);
        Adap.line(Gvar.var_1680, Gvar.var_1683 + Gvar.var_1684, 166, Gvar.var_1683 + Gvar.var_1684);
        Adap.line(190, Gvar.var_1683 + Gvar.var_1684, Gvar.var_1681, Gvar.var_1683 + Gvar.var_1684);
        Adap.line(Gvar.var_1680 - 1, Gvar.var_1682 + 1 + Gvar.var_1684, Gvar.var_1680 - 1, Gvar.var_1683 - 2 + Gvar.var_1684);
        Adap.line(Gvar.var_1681 + 2, Gvar.var_1682 + 1 + Gvar.var_1684, Gvar.var_1681 + 2, Gvar.var_1683 - 2 + Gvar.var_1684);
        Adap.pset(Gvar.var_1680, Gvar.var_1682 + 1 + Gvar.var_1684);
        Adap.pset(Gvar.var_1681 + 1, Gvar.var_1682 + 1 + Gvar.var_1684);
        Adap.pset(Gvar.var_1680, Gvar.var_1683 - 1 + Gvar.var_1684);
        Adap.pset(Gvar.var_1681 + 1, Gvar.var_1683 - 1 + Gvar.var_1684);
        Adap.pos(170, 310);
        if (Gvar.var_1679 <= 9) {
            Adap.pos(175, 310);
        }
        Adap.color(255, 255, 255);

        Adap.font(Gvar.font_type, Gvar.font_size = 16, Gvar.font_style = 1);
        Adap.mes(Gvar.var_1679);
        Gvar.var_1685 = 0;
        Gvar.var_1686 = 0;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            Gvar.var_1687 = (Gvar.var_1679 - 1) * 10 + Gvar.var_1686;
            Gvar.var_356 = Gvar.var_835[Gvar.var_1687];
            if (Gvar.var_835[Gvar.var_1687] == 0) {
                Gvar.var_1688 = "";
            }
            if (Gvar.var_835[Gvar.var_1687] != 0) {
                await Func.func177(); // 死因原因
                Gvar.var_1688 = Gvar.var_798;
            }
            Adap.pos(Gvar.var_1680 + 10, Gvar.var_1682 + Gvar.var_1685 + 20);
            Adap.color(255, 255, 255);
    
            Adap.font(Gvar.font_type, Gvar.font_size = 14, Gvar.font_style = 1);
            if (Gvar.var_1687 == 0) {
                Adap.color(0, 255, 0);
                Adap.mes("  死因リスト");
            }
            if (Gvar.var_1687 != 0) {
                if (Gvar.var_835[Gvar.var_1687] == 0) {
                    Adap.mes("");
                }
                if (Gvar.var_835[Gvar.var_1687] != 0) {
                    Adap.mes(tf("{0}：{1}", Gvar.var_1687, Gvar.var_1688));
                }
            }
            Gvar.var_1686 = Gvar.var_1686 + 1;
            Gvar.var_1685 = Gvar.var_1685 + 25;
        }
        return;
}

export {func373}
