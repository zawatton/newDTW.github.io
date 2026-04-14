/**
 * func058 — func058 メニュー画面の設定からいける"資料"の表示
 *
 * (org原典: newDTW_func0)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

// メニュー画面の"資料"の表示 (ハイスコア、コミックス、死因リスト、敵図鑑)
// 旧 func058
async function func058(this: any) {
        Adap.dbgprt(58);
        Gvar.var_510 = 45;
        Gvar.var_517 = 60;
        Gvar.var_518 = 25;
        Adap.color(0, 0, 0);

        Adap.gmode(4, null, null, 100);
        Adap.pos(12 + Gvar.var_517, 37 + Gvar.var_518);
        Adap.gcopy(12, 0, 0, 113, 130 - Gvar.var_510);
        Adap.color(255, 255, 255);
        if (Gvar.var_512 == 1 || Gvar.var_511 >= 1) {
            Adap.color(150, 150, 150);
        }
        Adap.line(15 + Gvar.var_517, 39 + Gvar.var_518, 120 + Gvar.var_517, 39 + Gvar.var_518);
        Adap.line(15 + Gvar.var_517, 164 - Gvar.var_510 + Gvar.var_518, 120 + Gvar.var_517, 164 - Gvar.var_510 + Gvar.var_518);
        Adap.line(14 + Gvar.var_517, 40 + Gvar.var_518, 14 + Gvar.var_517, 162 - Gvar.var_510 + Gvar.var_518);
        Adap.line(122 + Gvar.var_517, 40 + Gvar.var_518, 122 + Gvar.var_517, 162 - Gvar.var_510 + Gvar.var_518);
        Adap.pset(15 + Gvar.var_517, 40 + Gvar.var_518);
        Adap.pset(121 + Gvar.var_517, 40 + Gvar.var_518);
        Adap.pset(15 + Gvar.var_517, 163 - Gvar.var_510 + Gvar.var_518);
        Adap.pset(121 + Gvar.var_517, 163 - Gvar.var_510 + Gvar.var_518);
        Adap.font(Gvar.font_type, Gvar.font_size = 16, Gvar.font_style = 1);
        Adap.pos(33 + Gvar.var_517, 47 + Gvar.var_518);
        Adap.color(255, 255, 255);
        if (Gvar.var_375 == 1 || Gvar.var_512 == 1 || Gvar.var_511 >= 1) {
            Adap.color(150, 150, 150);
        }
        Adap.mes("ハイスコア");
        Adap.color(255, 255, 255);
        if (Gvar.var_375 == 1 || Gvar.var_512 == 1 || Gvar.var_511 >= 1) {
            Adap.color(150, 150, 150);
        }
        Adap.mes("コミックス");
        Adap.color(255, 255, 255);
        if (Gvar.var_375 == 1 || Gvar.var_512 == 1 || Gvar.var_511 >= 1) {
            Adap.color(150, 150, 150);
        }
        Adap.mes("死因リスト");
        Adap.color(255, 255, 255);
        if (Gvar.var_375 == 1 || Gvar.var_512 == 1 || Gvar.var_511 >= 1) {
            Adap.color(150, 150, 150);
        }
        Adap.mes("敵図鑑");
        Adap.color(255, 255, 255);
        if (Gvar.var_512 == 1 || Gvar.var_511 >= 1) {
            Adap.color(150, 150, 150);
        }
        Adap.font(Gvar.font_type, 16, 1);
        Adap.pos(Gvar.var_506 + Gvar.var_517, Gvar.var_507 + Gvar.var_518);
        Adap.mes(">");
        Adap.pos(Gvar.var_506 + 1 + Gvar.var_517, Gvar.var_507 + Gvar.var_518);
        Adap.mes(">");
        Adap.pos(Gvar.var_506 + 2 + Gvar.var_517, Gvar.var_507 + Gvar.var_518);
        Adap.mes(">");
        if (Gvar.var_512 == 1) {
            Gvar.var_519 = 112;
            Gvar.var_520 = 43;
            Gvar.var_521 = 40;
            Gvar.var_522 = 0;
            if (Gvar.var_523 >= 1) {  // 一巡後の世界へ行けるようになった時のフラグ? 地球儀が回転
                Gvar.var_522++;
            }
            if (Gvar.var_524 >= 1) { // 鉄の牢獄へ行けるようになった時のフラグ? ロッコ・バロッコ所長との会話が終わったフラグ
                Gvar.var_522++;
            }
            Gvar.var_525 = 90;
            if (Gvar.var_404 >= 1) {
                Gvar.var_525 = 70;
            }
            if (Gvar.var_526 >= 1) {
                Gvar.var_525 = 56;
            }
            if (Gvar.var_522 == 1) {
                Gvar.var_525 = 34;
            }
            if (Gvar.var_522 == 2) {
                Gvar.var_525 = 28;
            }
            Adap.color(0, 0, 0);
            Adap.gmode(4, null, null, 100);
            Adap.pos(12 + Gvar.var_519, 37 + Gvar.var_520);
            Adap.gcopy(12, 0, 0, 213, 88 - Gvar.var_525 + Gvar.var_521);
            Adap.color(255, 255, 255);
            Adap.line(15 + Gvar.var_519, 39 + Gvar.var_520, 220 + Gvar.var_519, 39 + Gvar.var_520);
            Adap.line(15 + Gvar.var_519, 121 + Gvar.var_520 - Gvar.var_525 + Gvar.var_521, 220 + Gvar.var_519, 121 + Gvar.var_520 - Gvar.var_525 + Gvar.var_521);
            Adap.line(14 + Gvar.var_519, 40 + Gvar.var_520, 14 + Gvar.var_519, 119 + Gvar.var_520 - Gvar.var_525 + Gvar.var_521);
            Adap.line(222 + Gvar.var_519, 40 + Gvar.var_520, 222 + Gvar.var_519, 119 + Gvar.var_520 - Gvar.var_525 + Gvar.var_521);
            Adap.pset(15 + Gvar.var_519, 40 + Gvar.var_520);
            Adap.pset(221 + Gvar.var_519, 40 + Gvar.var_520);
            Adap.pset(15 + Gvar.var_519, 120 + Gvar.var_520 - Gvar.var_525 + Gvar.var_521);
            Adap.pset(221 + Gvar.var_519, 120 + Gvar.var_520 - Gvar.var_525 + Gvar.var_521);
            Adap.font(Gvar.font_type, Gvar.font_size = 16, Gvar.font_style = 1);
            Adap.color(255, 255, 255);
            Adap.pos(33 + Gvar.var_519, 47 + Gvar.var_520);
            Adap.mes("ホテルの外");
            if (Gvar.var_404 >= 1) {
                Adap.mes("レクイエムの大迷宮");
            }
            if (Gvar.var_526 >= 1) {
                Adap.mes("ディアボロの試練");
            }
            if (Gvar.var_524 >= 1) { // 鉄獄(鉄の牢獄)へ行けるようになった時のフラグ? ロッコ・バロッコ所長との会話が終わったフラグ
                Adap.mes("鉄獄"); // Ver0.1403にて修正。Adap.mes("" + Gvar.var_21) → Adap.mes("鉄獄")
            }
            if (Gvar.var_523 >= 1) {  // 一巡後の世界へ行けるようになった時のフラグ? 地球儀が回転
                Adap.mes("一巡後の世界");
            }
            Adap.color(255, 255, 255);
            Adap.font(Gvar.font_type, 16, 1);
            Adap.pos(Gvar.var_515, Gvar.var_516);
            Adap.mes(">");
            Adap.pos(Gvar.var_515 + 1, Gvar.var_516);
            Adap.mes(">");
            Adap.pos(Gvar.var_515 + 2, Gvar.var_516);
            Adap.mes(">");
        }
        Adap.gmode(2, null, null, null);
        return;
}

export {func058}