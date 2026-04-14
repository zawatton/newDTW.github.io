/**
 * func048 — func048 メッセージBOX生成処理
 *
 * (org原典: newDTW_func0)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// メッセージ表示処理
// 画面下部にメッセージウィンドウ（枠 + 背景）を描画している。
// 最後に func049 を呼び出し、実際の文字列描画( Gvar.comments_row1 など )を行う。
async function func048(this: any) {
    Adap.dbgprt(48);

    // もし var_195 フラグが立っている場合はメッセージを消して抜ける
    if (Gvar.var_195 == 1) {
        Gvar.var_198 = 0; // メッセージウィンドウ閉じる
        Gvar.var_300 = 0;
        return;
    }

    // 背景・枠などを描画
    Adap.color(0, 0, 0);
    Adap.gmode(4, null, null, 100);
    Adap.pos(20, 250);
    Adap.gcopy(12, 0, 0, 40, 64);
    Adap.pos(60, 250);
    Adap.gcopy(12, 40, 0, 40, 64);
    Adap.pos(100, 250);
    Adap.gcopy(12, 80, 0, 40, 64);
    Adap.pos(140, 250);
    Adap.gcopy(12, 120, 0, 40, 64);
    Adap.pos(180, 250);
    Adap.gcopy(12, 160, 0, 40, 64);
    Adap.pos(220, 250);
    Adap.gcopy(12, 200, 0, 40, 64);
    Adap.pos(260, 250);
    Adap.gcopy(12, 240, 0, 40, 64);
    Adap.pos(300, 250);
    Adap.gcopy(12, 280, 0, 30, 64);

    // 枠線など
    Adap.color(255, 255, 255);
    Adap.line(23, 252, 325, 252);
    Adap.line(23, 312, 325, 312);
    Adap.line(22, 253, 22, 310);
    Adap.line(327, 253, 327, 310);
    Adap.pset(23, 253);
    Adap.pset(326, 253);
    Adap.pset(23, 311);
    Adap.pset(326, 311);

    // メッセージ本文の描画
    await Func.func049();

    // 半透明モードに戻す
    Adap.gmode(2, null, null, null);

    // animationStep の値によってアニメーションオフセットを決定
    if (Gvar.animationStep == 0) {
        Gvar.animationOffset = 9;
    } else if (Gvar.animationStep == 1) {
        Gvar.animationOffset = 18;
    } else if (Gvar.animationStep == 2) {
        Gvar.animationOffset = 27;
    } else if (Gvar.animationStep == 3) {
        Gvar.animationOffset = 36;
    } else if (Gvar.animationStep == 4) {
        Gvar.animationOffset = 45;
    } else if (Gvar.animationStep == 5) {
        Gvar.animationOffset = 54;
    } else if (Gvar.animationStep == 6) {
        Gvar.animationOffset = 63;
    }

    // アニメーション用の描画(下から上へスライドして消えるイメージ)
    Adap.pos(0, 252);
    Adap.gcopy(10, 0, Gvar.animationOffset, 40, 60);
    Adap.pos(40, 252);
    Adap.gcopy(10, 40, Gvar.animationOffset, 40, 60);
    Adap.pos(80, 252);
    Adap.gcopy(10, 80, Gvar.animationOffset, 40, 60);
    Adap.pos(120, 252);
    Adap.gcopy(10, 120, Gvar.animationOffset, 40, 60);
    Adap.pos(160, 252);
    Adap.gcopy(10, 160, Gvar.animationOffset, 40, 60);
    Adap.pos(200, 252);
    Adap.gcopy(10, 200, Gvar.animationOffset, 40, 60);
    Adap.pos(240, 252);
    Adap.gcopy(10, 240, Gvar.animationOffset, 40, 60);
    Adap.pos(280, 252);
    Adap.gcopy(10, 280, Gvar.animationOffset, 40, 60);
    Adap.pos(320, 252);
    Adap.gcopy(10, 320, Gvar.animationOffset, 40, 60);

    // 通常モードで終了
    Adap.gmode(2, null, null, null);

    return;
}

export {func048}
