/**
 * func146 — func146 ログイン画面表示(冒険に出る、ボス日記を消す、魔少年の問題、配布サイトへ、終了)
 *
 * (org原典: newDTW_login / DONE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import { t } from '../i18n'

// ログイン画面表示(冒険に出る、ボス日記を消す、魔少年の問題、配布サイトへ、終了)
async function func146(this: any) {
        Adap.dbgprt(146);
        Gvar.var_738 = 0;
        Adap.gmode(2, null, null, null);
        Gvar.var_727 = 0;
        Gvar.var_728 = 400;
        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
            Gvar.var_729 = 0;
            Gvar.var_730 = 0;
            for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
                Adap.pos(Gvar.var_729, Gvar.var_727);
                Adap.gcopy(3, Gvar.var_730, Gvar.var_728, 40, 40);
                Gvar.var_729 = Gvar.var_729 + 40;
                Gvar.var_730 = Gvar.var_730 + 40;
            }
            Gvar.var_727 = Gvar.var_727 + 40;
            Gvar.var_728 = Gvar.var_728 + 40;
        }

        Adap.gmode(4, null, null, 100);
        Gvar.var_727 = 0;
        Gvar.var_728 = 0;
        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
            Gvar.var_729 = 0;
            Gvar.var_730 = 0;
            for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
                Adap.pos(Gvar.var_729, Gvar.var_727);
                Adap.gcopy(12, Gvar.var_730, Gvar.var_728, 40, 40);
                Gvar.var_729 = Gvar.var_729 + 40;
                Gvar.var_730 = Gvar.var_730 + 40;
            }
            Gvar.var_727 = Gvar.var_727 + 40;
            Gvar.var_728 = Gvar.var_728 + 40;
        }
        Adap.color(0, 0, 0);

        Adap.gmode(4, null, null, 150);
        Adap.pos(7, 20);
        Adap.gcopy(12, 0, 0, 160, 150 - Gvar.var_738);
        Adap.color(255, 255, 255);
        Adap.line(10, 21, 163, 21);
        Adap.line(10, 169 - Gvar.var_738, 163, 169 - Gvar.var_738);
        Adap.line(9, 22, 9, 167 - Gvar.var_738);
        Adap.line(165, 22, 165, 167 - Gvar.var_738);
        Adap.pset(10, 22);
        Adap.pset(164, 22);
        Adap.pset(10, 168 - Gvar.var_738);
        Adap.pset(164, 168 - Gvar.var_738);

        Adap.font(Gvar.font_type, 16, 1);
        Adap.pos(45, 40);
        Adap.color(255, 255, 255);
        Adap.mes(t("冒険に出る"));
        Adap.pos(45, 60);
        Adap.color(255, 255, 255);
        Adap.mes(t("ボス日記を消す"));
        Adap.pos(45, 80);
        Adap.color(155, 155, 155);
        Adap.mes(t("魔少年の問題"));
        Adap.pos(45, 100);
        Adap.color(155, 155, 155);
        Adap.mes(t("配布サイトへ"));
        Adap.pos(45, 120);
        Adap.color(255, 255, 255);
        Adap.mes(t("言語設定"));
        Adap.pos(45, 140);
        Adap.color(255, 255, 255);
        Adap.mes(t("終了"));
        if (Gvar.var_64 == 0) {
            Adap.pos(12, 37);
        }
        if (Gvar.var_64 == 1) {
            Adap.pos(12, 57);
        }
        if (Gvar.var_64 == 2) {
            Adap.pos(12, 77);
        }
        if (Gvar.var_64 == 3) {
            Adap.pos(12, 97);
        }
        if (Gvar.var_64 == 4) {
            Adap.pos(12, 117);
        }
        if (Gvar.var_64 == 5) {
            Adap.pos(12, 137);
        }
        Adap.gmode(2, null, null, null);
        if (Gvar.var_725 == 0 && Gvar.var_509 == 0) {
            // Adap.buffer(8)は"img1.gif"。X座標70、Y座標50から切り取り長さ X方向25、Y方向20
            // 絵:矢尻(ログイン画面での選択カーソル)           
            Adap.gcopy(8, 70, 50, 25, 20);
        }
        Adap.pos(240, 320);
        Adap.color(255, 255, 255);
        Adap.font(Gvar.font_type, 12);
        
        // ログイン画面下のバージョンNo. 
        if (Gvar.var_12 == 0) { // 通信サーバーフラグ？？
            Adap.mes("version " + Gvar.version_number);
        }
        if (Gvar.var_12 == 1) { // 通信サーバーフラグ？？
            Adap.mes("Version " + Gvar.version_number);
        }
        return;
}

export {func146}
