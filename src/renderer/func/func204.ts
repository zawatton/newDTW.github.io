/**
 * func204 — func204 メッセージ色(メニュー/設定/システム)の設定表示
 *
 * (org原典: newDTW_func2)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// メッセージ色設定変更表示
async function func204(this: any) {
        Adap.dbgprt(204);
        Adap.color(0, 0, 0);
        Adap.gmode(4, null, null, 100);
        Adap.pos(42, 97);
        Adap.gcopy(12, 0, 0, 213, 203);
        Adap.color(255, 255, 255);
        Adap.line(45, 99, 250, 99);
        Adap.line(45, 296, 250, 296);
        Adap.line(44, 100, 44, 294);
        Adap.line(252, 100, 252, 294);
        Adap.pset(45, 100);
        Adap.pset(251, 100);
        Adap.pset(45, 295);
        Adap.pset(251, 295);
        Adap.font(Gvar.font_type, 16, 1);
        Adap.color(255, 255, 255);
        Adap.pos(85, 110);
        Adap.mes("色設定を使用しない");
        Adap.pos(85, 130);
        Adap.mes("以下の色設定を使用");
        Adap.pos(85, 150);
        Adap.color(Gvar.var_25[7], Gvar.var_26[7], Gvar.var_27[7]);
        Adap.mes("    【ﾃﾞｨｱﾎﾞﾛの行動】");
        Adap.pos(85, 170);
        Adap.color(Gvar.var_25[8], Gvar.var_26[8], Gvar.var_27[8]);
        Adap.mes("    【敵の行動】");
        Adap.pos(85, 190);
        Adap.color(Gvar.var_25[12], Gvar.var_26[12], Gvar.var_27[12]);
        Adap.mes("    【会心の一撃】");
        Adap.pos(85, 210);
        Adap.color(Gvar.var_25[9], Gvar.var_26[9], Gvar.var_27[9]);
        Adap.mes("    【痛恨の一撃】");
        Adap.pos(85, 230);
        Adap.color(Gvar.var_25[10], Gvar.var_26[10], Gvar.var_27[10]);
        Adap.mes("    【罠メッセージ】");
        Adap.pos(85, 250);
        Adap.color(Gvar.var_25[11], Gvar.var_26[11], Gvar.var_27[11]);
        Adap.mes("    【状態変化等】");
        Adap.pos(85, 270);
        Adap.color(255, 255, 255);
        Adap.mes("    初期設定に戻す");
        if (Gvar.var_702 == 0) {
            Adap.pos(50, 107);
        }
        if (Gvar.var_702 == 1) {
            Adap.pos(50, 127);
        }
        if (Gvar.var_702 == 2) {
            Adap.pos(75, 147);
        }
        if (Gvar.var_702 == 3) {
            Adap.pos(75, 167);
        }
        if (Gvar.var_702 == 4) {
            Adap.pos(75, 187);
        }
        if (Gvar.var_702 == 5) {
            Adap.pos(75, 207);
        }
        if (Gvar.var_702 == 6) {
            Adap.pos(75, 227);
        }
        if (Gvar.var_702 == 7) {
            Adap.pos(75, 247);
        }
        if (Gvar.var_702 == 8) {
            Adap.pos(75, 267);
        }
        Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
        // Adap.buffer(8)は"img1.gif"。X座標70、Y座標50から切り取り長さ X方向25、Y方向20
        // 絵:カーソルアイコン(鏃)
        Adap.gcopy(8, 70, 50, 25, 20);
        return;
}

export {func204}
