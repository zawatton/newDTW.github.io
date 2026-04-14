/**
 * func449 — func449 魔法のランプでジャッジメントを召喚した時のメッセージ
 *
 * (org原典: newDTW_item(その他))
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func449(this: any) {
        Adap.dbgprt(449);
        Adap.color(0, 0, 0);
        Adap.gmode(4, null, null, 100);
        Adap.pos(12, 37);
        Adap.gcopy(12, 0, 0, 223, 123);
        Adap.color(255, 255, 255);
        Adap.line(15, 39, 230, 39);
        Adap.line(15, 156, 230, 156);
        Adap.line(14, 40, 14, 154);
        Adap.line(232, 40, 232, 154);
        Adap.pset(15, 40);
        Adap.pset(231, 40);
        Adap.pset(15, 155);
        Adap.pset(231, 155);
        Adap.font(Gvar.font_type, Gvar.font_size = 16, Gvar.font_style = 1);
        Adap.color(255, 255, 255);
        Adap.pos(33, 47);
        Adap.mes("お金持ちになりたい");
        Adap.pos(33, 65);
        Adap.mes("満腹になりたい");
        Adap.pos(33, 83);
        Adap.mes("体力を回復させてくれ");
        Adap.pos(33, 99);
        Adap.mes("敵の動きを止めてくれ");
        Adap.pos(33, 117);
        Adap.mes("ｱﾌﾞﾄﾞｩﾙを生き返らせてくれ");
        Adap.pos(33, 135);
        Adap.mes("願いを増やしてくれ");
        Adap.color(255, 255, 255);
        Adap.font(Gvar.font_type, 16, 1);
        Adap.pos(Gvar.var_245, Gvar.var_246);
        Adap.mes(">");
        Adap.pos(Gvar.var_245 + 1, Gvar.var_246);
        Adap.mes(">");
        Adap.pos(Gvar.var_245 + 2, Gvar.var_246);
        Adap.mes(">");
        return;
}

export {func449}
