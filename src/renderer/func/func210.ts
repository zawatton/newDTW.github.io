/**
 * func210 — func210 キーコンフィグ設定
 *
 * (org原典: newDTW_func2)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func210(this: any) {
        Adap.dbgprt(210);
        Adap.color(0, 0, 0);
        Adap.gmode(4, null, null, 100);
        Adap.pos(5, 35);
        Adap.gcopy(12, 0, 0, 332, 205);
        Adap.color(255, 255, 255);
        Adap.line(9, 37, 330, 37);
        Adap.line(9, 237, 330, 237);
        Adap.line(8, 38, 8, 235);
        Adap.line(332, 38, 332, 235);
        Adap.pset(9, 38);
        Adap.pset(331, 38);
        Adap.pset(9, 236);
        Adap.pset(331, 236);
        Adap.pos(5, 243);
        Adap.gcopy(12, 0, 0, 332, 92);
        Adap.line(9, 245, 330, 245);
        Adap.line(9, 332, 330, 332);
        Adap.line(8, 246, 8, 330);
        Adap.line(332, 246, 332, 330);
        Adap.pset(9, 246);
        Adap.pset(331, 246);
        Adap.pset(9, 331);
        Adap.pset(331, 331);
        Adap.font("メイリオ", 16, 1);
        Adap.color(255, 255, 255);
        if (Gvar.var_911 == 1) {
            Adap.color(0, 255, 0);
        }
        Adap.pos(40, 55);
        Adap.mes("攻撃・決定");
        Adap.pos(220, 55);
        Adap.mes(Gvar.var_913);
        Adap.color(255, 255, 255);
        if (Gvar.var_911 == 2) {
            Adap.color(0, 255, 0);
        }
        Adap.pos(40, 75);
        Adap.mes("ダッシュ・キャンセル");
        Adap.pos(220, 75);
        Adap.mes(Gvar.var_914);
        Adap.color(255, 255, 255);
        if (Gvar.var_911 == 3) {
            Adap.color(0, 255, 0);
        }
        Adap.pos(40, 95);
        Adap.mes("コマンドウィンドウ");
        Adap.pos(220, 95);
        Adap.mes(Gvar.var_915);
        Adap.color(255, 255, 255);
        if (Gvar.var_911 == 4) {
            Adap.color(0, 255, 0);
        }
        Adap.pos(40, 115);
        Adap.mes("射撃");
        Adap.pos(220, 115);
        Adap.mes(Gvar.var_916);
        Adap.color(255, 255, 255);
        if (Gvar.var_911 == 5) {
            Adap.color(0, 255, 0);
        }
        Adap.pos(40, 135);
        Adap.mes("向き変更");
        Adap.pos(220, 135);
        Adap.mes(Gvar.var_917);
        Adap.color(255, 255, 255);
        if (Gvar.var_911 == 6) {
            Adap.color(0, 255, 0);
        }
        Adap.pos(40, 155);
        Adap.mes("斜め移動");
        Adap.pos(220, 155);
        Adap.mes(Gvar.var_918);
        Adap.color(255, 255, 255);
        if (Gvar.var_911 == 7) {
            Adap.color(0, 255, 0);
        }
        Adap.pos(40, 175);
        Adap.mes("初期設定に戻す");
        Adap.color(255, 255, 255);
        if (Gvar.var_911 == 8) {
            Adap.color(0, 255, 0);
        }
        Adap.pos(40, 195);
        Adap.mes("ゲームに戻る");
        Adap.font(Gvar.font_type, 12, 1);
        Adap.color(255, 255, 255);
        Adap.pos(20, 250);
        Adap.mes("※0～9・A～Z・ENTER・SHIFT・CTRL");
        Adap.mes("  を使用することができます。");
        Adap.mes("※キーボードにより、３つボタン同時押しが");
        Adap.mes("  無効となることがあるため、斜め移動は");
        Adap.mes("  SHIFTキーのままをお勧めします。");
        Adap.color(255, 255, 255);
        Adap.font(Gvar.font_type, Gvar.font_size = 16, Gvar.font_style = 1);
        Adap.pos(15, Gvar.Y_axis_item_position);
        Adap.mes(">");
        Adap.pos(16, Gvar.Y_axis_item_position);
        Adap.mes(">");
        Adap.pos(17, Gvar.Y_axis_item_position);
        Adap.mes(">");
        return;
}

export {func210}
