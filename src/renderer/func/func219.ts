/**
 * func219 — func219 ジョイコン設定
 *
 * (org原典: newDTW_func2)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func219(this: any) {
        Adap.dbgprt(219);
        Adap.color(0, 0, 0);
        Adap.gmode(4, null, null, 100);
        Adap.pos(5, 35);
        Adap.gcopy(12, 0, 0, 332, 85);
        Adap.color(255, 255, 255);
        Adap.line(9, 37, 330, 37);
        Adap.line(9, 117, 330, 117);
        Adap.line(8, 38, 8, 115);
        Adap.line(332, 38, 332, 115);
        Adap.pset(9, 38);
        Adap.pset(331, 38);
        Adap.pset(9, 116);
        Adap.pset(331, 116);
        Adap.pos(5, 123);
        Adap.gcopy(12, 0, 0, 332, 212);
        Adap.line(9, 125, 330, 125);
        Adap.line(9, 332, 330, 332);
        Adap.line(8, 126, 8, 330);
        Adap.line(332, 126, 332, 330);
        Adap.pset(9, 126);
        Adap.pset(331, 126);
        Adap.pset(9, 331);
        Adap.pset(331, 331);
        Adap.pos(120, 45);
        Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
        Adap.gcopy(17, 0, 850, 110, 65);
        Adap.font("メイリオ", 16, 1);
        Adap.color(255, 255, 255);
        Adap.pos(200, Gvar.var_928);
        Adap.color(255, 255, 255);
        Adap.mes("【          】");
        Adap.pos(40, Gvar.var_928);
        Adap.color(255, 255, 255);
        Adap.mes("攻撃・決定");
        Adap.pos(170, Gvar.var_928);
        Adap.color(255, 255, 255);
        Adap.mes("…");
        Adap.pos(235, Gvar.var_928);
        Gvar.var_930 = 1;
        await Func.func220();
        Adap.pos(200, Gvar.var_928 + 20);
        Adap.color(255, 255, 255);
        Adap.mes("【          】");
        Adap.pos(40, Gvar.var_928 + 20);
        Adap.color(255, 255, 255);
        Adap.mes("ﾀﾞｯｼｭ・ｷｬﾝｾﾙ");
        Adap.pos(170, Gvar.var_928 + 20);
        Adap.color(255, 255, 255);
        Adap.mes("…");
        Adap.pos(235, Gvar.var_928 + 20);
        Gvar.var_930 = 2;
        await Func.func220();
        Adap.pos(200, Gvar.var_928 + 40);
        Adap.color(255, 255, 255);
        Adap.mes("【          】");
        Adap.pos(40, Gvar.var_928 + 40);
        Adap.color(255, 255, 255);
        Adap.mes("コマンド");
        Adap.pos(170, Gvar.var_928 + 40);
        Adap.color(255, 255, 255);
        Adap.mes("…");
        Adap.pos(235, Gvar.var_928 + 40);
        Gvar.var_930 = 3;
        await Func.func220();
        Adap.pos(200, Gvar.var_928 + 60);
        Adap.color(255, 255, 255);
        Adap.mes("【          】");
        Adap.pos(40, Gvar.var_928 + 60);
        Adap.color(255, 255, 255);
        Adap.mes("方向転換");
        Adap.pos(170, Gvar.var_928 + 60);
        Adap.color(255, 255, 255);
        Adap.mes("…");
        Adap.pos(235, Gvar.var_928 + 60);
        Gvar.var_930 = 4;
        await Func.func220();
        Adap.pos(200, Gvar.var_928 + 80);
        Adap.color(255, 255, 255);
        Adap.mes("【          】");
        Adap.pos(40, Gvar.var_928 + 80);
        Adap.color(255, 255, 255);
        Adap.mes("斜め移動");
        Adap.pos(170, Gvar.var_928 + 80);
        Adap.color(255, 255, 255);
        Adap.mes("…");
        Adap.pos(235, Gvar.var_928 + 80);
        Gvar.var_930 = 5;
        await Func.func220();
        Adap.pos(200, Gvar.var_928 + 100);
        Adap.color(255, 255, 255);
        Adap.mes("【          】");
        Adap.pos(40, Gvar.var_928 + 100);
        Adap.color(255, 255, 255);
        Adap.mes("射撃");
        Adap.pos(170, Gvar.var_928 + 100);
        Adap.color(255, 255, 255);
        Adap.mes("…");
        Adap.pos(235, Gvar.var_928 + 100);
        Gvar.var_930 = 6;
        await Func.func220();
        Adap.pos(200, Gvar.var_928 + 120);
        Adap.color(255, 255, 255);
        Adap.mes("【          】");
        Adap.pos(40, Gvar.var_928 + 120);
        Adap.color(255, 255, 255);
        Adap.mes("マップ");
        Adap.pos(170, Gvar.var_928 + 120);
        Adap.color(255, 255, 255);
        Adap.mes("…");
        Adap.pos(235, Gvar.var_928 + 120);
        Gvar.var_930 = 7;
        await Func.func220();
        Adap.pos(40, Gvar.var_928 + 140);
        Adap.color(255, 255, 255);
        Adap.mes("初期設定に戻す");
        Adap.pos(40, Gvar.var_928 + 160);
        Adap.color(255, 255, 255);
        Adap.mes("ゲームに戻る");
        Adap.color(255, 255, 255);

        Adap.font(Gvar.font_type, Gvar.font_size = 16, Gvar.font_style = 1);
        Adap.pos(25, Gvar.Y_axis_item_position);
        Adap.mes(">");
        Adap.pos(26, Gvar.Y_axis_item_position);
        Adap.mes(">");
        Adap.pos(27, Gvar.Y_axis_item_position);
        Adap.mes(">");
        return;
}

export {func219}
