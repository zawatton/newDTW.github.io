import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func360(this: any) {
        Adap.dbgprt(360);
        Gvar.var_1627 = 30;
        Gvar.var_1628 = 40;
        Gvar.var_1629 = 35;
        Gvar.var_1630 = 80;
        Adap.color(0, 0, 0);

        Adap.gmode(4, null, null, 100);
        Adap.pos(12 + Gvar.var_1629, 37 + Gvar.var_1630);
        Adap.gcopy(12, 0, 0, 213 + Gvar.var_1628, 103 + Gvar.var_1627);
        Adap.color(255, 255, 255);
        Adap.line(15 + Gvar.var_1629, 39 + Gvar.var_1630, 220 + Gvar.var_1628 + Gvar.var_1629, 39 + Gvar.var_1630);
        Adap.line(15 + Gvar.var_1629, 136 + Gvar.var_1627 + Gvar.var_1630, 220 + Gvar.var_1628 + Gvar.var_1629, 136 + Gvar.var_1627 + Gvar.var_1630);
        Adap.line(14 + Gvar.var_1629, 40 + Gvar.var_1630, 14 + Gvar.var_1629, 134 + Gvar.var_1627 + Gvar.var_1630);
        Adap.line(222 + Gvar.var_1628 + Gvar.var_1629, 40 + Gvar.var_1630, 222 + Gvar.var_1628 + Gvar.var_1629, 134 + Gvar.var_1627 + Gvar.var_1630);
        Adap.pset(15 + Gvar.var_1629, 40 + Gvar.var_1630);
        Adap.pset(221 + Gvar.var_1628 + Gvar.var_1629, 40 + Gvar.var_1630);
        Adap.pset(15 + Gvar.var_1629, 135 + Gvar.var_1627 + Gvar.var_1630);
        Adap.pset(221 + Gvar.var_1628 + Gvar.var_1629, 135 + Gvar.var_1627 + Gvar.var_1630);

        Adap.font(Gvar.font_type, Gvar.font_size = 16, Gvar.font_style = 1);
        Adap.color(255, 255, 255);
        Adap.pos(33 + Gvar.var_1629, 47 + Gvar.var_1630);
        Adap.mes("第一部  ﾌｧﾝﾄﾑ･ﾌﾞﾗｯﾄﾞ");
        Adap.mes("第二部  戦闘潮流");
        Adap.mes("第三部  ｽﾀｰﾀﾞｽﾄ･ｸﾙｾｲﾀﾞｰｽ");
        Adap.mes("第四部  ﾀﾞｲﾔﾓﾝﾄﾞは砕けない");
        Adap.mes("第五部  黄金の風");
        Adap.mes("第六部  ｽﾄｰﾝ･ｵｰｼｬﾝ");
        Adap.mes("その他");
        Adap.color(255, 255, 255);

        Adap.font(Gvar.font_type, 16, 1);
        Adap.pos(Gvar.var_1611 + Gvar.var_1629, Gvar.var_1612 + Gvar.var_1630);
        Adap.mes(">");
        Adap.pos(Gvar.var_1611 + 1 + Gvar.var_1629, Gvar.var_1612 + Gvar.var_1630);
        Adap.mes(">");
        Adap.pos(Gvar.var_1611 + 2 + Gvar.var_1629, Gvar.var_1612 + Gvar.var_1630);
        Adap.mes(">");
        if (Gvar.var_1615 == 1) {
            Gvar.var_1631 = 40;
            Gvar.var_1632 = 260;
            Gvar.var_1633 = 260;
            Gvar.var_1634 = 20;
            Gvar.var_1635 = 10;
            Gvar.var_1636 = 10;
            Adap.color(0, 0, 0);

            Adap.gmode(4, null, null, 100);
            Adap.pos(Gvar.var_1631 - Gvar.var_1635 - 3, Gvar.var_1632 - Gvar.var_1636 - 2);
            Adap.gcopy(12, 0, 0, Gvar.var_1633 + Gvar.var_1635 + Gvar.var_1635 + 8, Gvar.var_1634 + Gvar.var_1636 + Gvar.var_1636 + 5);
            Adap.color(255, 255, 255);
            Adap.line(Gvar.var_1631 - Gvar.var_1635, Gvar.var_1632 - Gvar.var_1636 - 1, Gvar.var_1631 + Gvar.var_1633 + Gvar.var_1635, Gvar.var_1632 - Gvar.var_1636 - 1);
            Adap.line(Gvar.var_1631 - Gvar.var_1635, Gvar.var_1632 + Gvar.var_1634 + Gvar.var_1636, Gvar.var_1631 + Gvar.var_1633 + Gvar.var_1635, Gvar.var_1632 + Gvar.var_1634 + Gvar.var_1636);
            Adap.line(Gvar.var_1631 - Gvar.var_1635 - 1, Gvar.var_1632 - Gvar.var_1636, Gvar.var_1631 - Gvar.var_1635 - 1, Gvar.var_1632 + Gvar.var_1634 + Gvar.var_1636 - 2);
            Adap.line(Gvar.var_1631 + Gvar.var_1633 + Gvar.var_1635 + 2, Gvar.var_1632 - Gvar.var_1636, Gvar.var_1631 + Gvar.var_1633 + Gvar.var_1635 + 2, Gvar.var_1632 + Gvar.var_1634 + Gvar.var_1636 - 2);
            Adap.pset(Gvar.var_1631 - Gvar.var_1635, Gvar.var_1632 - Gvar.var_1636);
            Adap.pset(Gvar.var_1631 + Gvar.var_1633 + Gvar.var_1635 + 1, Gvar.var_1632 - Gvar.var_1636);
            Adap.pset(Gvar.var_1631 - Gvar.var_1635, Gvar.var_1632 + Gvar.var_1634 + Gvar.var_1636 - 1);
            Adap.pset(Gvar.var_1631 + Gvar.var_1633 + Gvar.var_1635 + 1, Gvar.var_1632 + Gvar.var_1634 + Gvar.var_1636 - 1);
            Adap.pos(Gvar.var_1631 + 10, Gvar.var_1632 + 5);
            Adap.color(255, 0, 0);
    
            Adap.font(Gvar.font_type, 14, 1);
            Adap.mes("登録されているキャラクターがいません");
        }
        return;
}

export {func360}
