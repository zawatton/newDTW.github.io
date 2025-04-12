import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func364(this: any) {
        Adap.dbgprt(364);
        Adap.color(0, 0, 0);

        Adap.gmode(4, null, null, 100);
        Adap.pos(5, 35);
        Adap.gcopy(12, 0, 0, 332, 295);
        Adap.color(255, 255, 255);
        Adap.line(9, 37, 330, 37);
        Adap.line(9, 327, 330, 327);
        Adap.line(8, 38, 8, 325);
        Adap.line(332, 38, 332, 325);
        Adap.pset(9, 38);
        Adap.pset(331, 38);
        Adap.pset(9, 326);
        Adap.pset(331, 326);
        Adap.pos(55, 150);
        Adap.color(255, 255, 255);

        Adap.font(Gvar.font_type, 14, 1);
        Adap.mes("敵の情報は、まだひとつもありません。");
        Adap.mes("「ﾍﾌﾞﾝｽﾞ･ﾄﾞｱｰのDISC」の発動能力を");
        Adap.mes("使うと、目の前にいる敵の情報が");
        Adap.mes("敵図鑑に追加されます。");
        Adap.mes("");
        return;
}

export {func364}
