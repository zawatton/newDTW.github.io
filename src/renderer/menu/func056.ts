import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// メニュー画面の"設定"の表示 (マップON、履歴、資料、システム、終了)
async function func056(this: any) {
        Adap.dbgprt(56);
        Gvar.var_510 = 25;
        Adap.color(0, 0, 0);

        Adap.gmode(4, null, null, 100);
        Adap.pos(12, 37);
        Adap.gcopy(12, 0, 0, 113, 130 - Gvar.var_510);
        Adap.color(255, 255, 255);
         // Mフラグ:資料(設定画面) Func.func058
        if (Gvar.var_508 == 1 || Gvar.var_509 == 1 || Gvar.var_511 >= 1) {
            Adap.color(150, 150, 150);
        }
        Adap.line(15, 39, 120, 39);
        Adap.line(15, 164 - Gvar.var_510, 120, 164 - Gvar.var_510);
        Adap.line(14, 40, 14, 162 - Gvar.var_510);
        Adap.line(122, 40, 122, 162 - Gvar.var_510);
        Adap.pset(15, 40);
        Adap.pset(121, 40);
        Adap.pset(15, 163 - Gvar.var_510);
        Adap.pset(121, 163 - Gvar.var_510);
        Adap.font(Gvar.font_type, Gvar.font_size = 16, Gvar.font_style = 1);
        Adap.pos(33, 47);
        Adap.color(255, 255, 255);
         // Mフラグ:資料(設定画面) Func.func058
        if (Gvar.var_508 == 1 || Gvar.var_509 == 1 || Gvar.var_511 >= 1) {
            Adap.color(150, 150, 150);
        }
        if (Gvar.var_501 == 0) {
            Adap.mes("マップ ON ");
        }
        if (Gvar.var_501 == 1) {
            Adap.mes("マップ OFF");
        }
        Adap.color(255, 255, 255);
         // Mフラグ:資料(設定画面) Func.func058
        if (Gvar.var_508 == 1 || Gvar.var_509 == 1 || Gvar.var_511 >= 1) {
            Adap.color(150, 150, 150);
        }
        Adap.mes("履歴");
        Adap.color(255, 255, 255);
         // Mフラグ:資料(設定画面) Func.func058
        if (Gvar.var_508 == 1 || Gvar.var_509 == 1 || Gvar.var_511 >= 1) {
            Adap.color(150, 150, 150);
        }
        Adap.mes("資料");
        Adap.color(255, 255, 255);
         // Mフラグ:資料(設定画面) Func.func058
        if (Gvar.var_508 == 1 || Gvar.var_509 == 1 || Gvar.var_511 >= 1) {
            Adap.color(150, 150, 150);
        }
        Adap.mes("システム");
        Adap.color(255, 255, 255);
         // Mフラグ:資料(設定画面) Func.func058
        if (Gvar.var_508 == 1 || Gvar.var_509 == 1 || Gvar.var_511 >= 1) {
            Adap.color(150, 150, 150);
        }
        if (Gvar.var_375 == 0) {
            Adap.mes("終了");
        }
        if (Gvar.var_375 == 1) {
            Adap.mes("ギブアップ");
        }
        Adap.color(255, 255, 255);
        if (Gvar.var_512 >= 1) {
            Adap.color(150, 150, 150);
        }
         // Mフラグ:資料(設定画面) Func.func058
        if (Gvar.var_508 == 1 || Gvar.var_509 == 1 || Gvar.var_511 >= 1) {
            Adap.color(150, 150, 150);
        }
        Adap.font(Gvar.font_type, 16, 1);
        Adap.pos(Gvar.var_245, Gvar.var_246);
        Adap.mes(">");
        Adap.pos(Gvar.var_245 + 1, Gvar.var_246);
        Adap.mes(">");
        Adap.pos(Gvar.var_245 + 2, Gvar.var_246);
        Adap.mes(">");
        Adap.gmode(2, null, null, null);
        return;
}

export {func056}
