/**
 * funcLangDisplay — 言語設定サブメニュー描画
 *
 * 言語選択肢(日本語 / English)をサブメニューとして描画する。
 * パターン: func196 (ゲームスピード描画) と同じ構造。
 * HSP原本にない新規追加関数。
 *
 * 描画仕様:
 *   - 半透明黒背景 + 白枠線のサブメニューボックス
 *   - カーソルアイコン(鏃): buffer(8) の (70,50) から 25x20 で切り出し
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

async function funcLangDisplay(this: any) {
    // 半透明黒背景
    Adap.color(0, 0, 0);
    Adap.gmode(4, null, null, 100); // gmode 4: 半透明コピー, alpha=100
    Adap.pos(42, 137);
    Adap.gcopy(12, 0, 0, 113, 83); // buffer(12): 背景画像

    // 白枠線
    Adap.color(255, 255, 255);
    Adap.line(45, 139, 150, 139);   // 上辺
    Adap.line(45, 216, 150, 216);   // 下辺
    Adap.line(44, 140, 44, 214);    // 左辺
    Adap.line(152, 140, 152, 214);  // 右辺
    Adap.pset(45, 140);             // 左上角
    Adap.pset(151, 140);            // 右上角
    Adap.pset(45, 215);             // 左下角
    Adap.pset(151, 215);            // 右下角

    // メニュー項目テキスト
    Adap.font(Gvar.font_type, 16, 1);
    Adap.color(255, 255, 255);
    Adap.pos(75, 150);
    Adap.mes("日本語");
    Adap.pos(75, 170);
    Adap.mes("English");

    // カーソル位置設定
    if (Gvar.lang_cursor == 0) {
        Adap.pos(50, 147);  // 日本語の横
    }
    if (Gvar.lang_cursor == 1) {
        Adap.pos(50, 167);  // Englishの横
    }

    // カーソルアイコン描画(鏃)
    Adap.gmode(2); // gmode 2: 透明色付きコピー (RGB全0の黒は透明)
    // buffer(8)="img1.gif", (70,50)から25x20で切り出し → カーソルアイコン
    Adap.gcopy(8, 70, 50, 25, 20);
    return;
}

export { funcLangDisplay }
