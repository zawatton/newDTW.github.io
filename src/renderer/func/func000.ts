import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'

async function makepal() {
    Gvar.var_0 = 0;
    Gvar.var_1 = 0;
    for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
        Gvar.var_2 = cnt1 * 32;
        for (let cnt2 = 0; cnt2 < 120; ++cnt2) {
            Gvar.var_3 = Adap.limit(cnt2 % 5 * 64 + Gvar.var_2, 0, 255);
            Gvar.var_4 = Adap.limit(Math.floor(cnt2 / 5) % 5 * 64 + Gvar.var_2, 0, 255); // Math.floor は対象の値の小数点以下を切り捨て
            Gvar.var_5 = Adap.limit(Math.floor(cnt2 / 25) % 5 * 64 + Gvar.var_2, 0, 255); // Math.floor は対象の値の小数点以下を切り捨て
            if (Gvar.var_3 == Gvar.var_4 && Gvar.var_4 == Gvar.var_5 && Gvar.var_5 == Gvar.var_3) {
                Adap.palette(Gvar.data0 = Gvar.var_1, Gvar.data1 = Gvar.var_3, Gvar.var_4, Gvar.var_5, Gvar.data4 = null)
                Gvar.var_1++;
            }
        }
    }
    for (let cnt3 = Gvar.var_1; cnt3 < 15 + Gvar.var_1; ++cnt3) {
        Adap.palette(Gvar.data0 = cnt3, Gvar.data1 = Gvar.var_0, Gvar.var_0, Gvar.var_0, Gvar.data4 = 254);
        Gvar.var_0 += 16;
    }
    return;
}

export {makepal}

async function imeset(prm_2546: any) {

    Gvar.var_6 = Adap.ImmGetContext(Gvar.hwnd);
    Adap.ImmSetOpenStatus(Gvar.var_6, prm_2546);

    Adap.ImmReleaseContext(Gvar.hwnd, Gvar.var_6);
    return;
}

export {imeset}

async function imeget() {
    Gvar.var_6 = Adap.ImmGetContext(Gvar.hwnd);
    Gvar.var_7 = Adap.ImmGetOpenStatus(Gvar.var_6);
    Adap.ImmReleaseContext(Gvar.hwnd, Gvar.var_6);
    return Gvar.var_7;
}

export {imeget}



// ここから newDTW 独自関数
// --------------------------------------------------
// メッセージを画面に表示する関数 (func047呼び出し部分を共通化)
// --------------------------------------------------
// メッセージをセットし、必要に応じてキー待ち・アニメーション表示・効果音を行う関数
//  - doWaitKey:    trueなら func340() でキー入力待ち
//  - doAnimation:  trueなら func050()  でアニメーション(連続描画) ※フレームレートが何故か狂うので非推奨
//  - playSound:    trueなら func094()  でメッセージ送り効果音再生
async function setMessage(
    row1: string,
    row2: string = "",
    colorIndex: number = 7,
    doWaitKey: boolean = false,
    doAnimation: boolean = false,
    playSound: boolean = false
  ): Promise<void> {
    // まず各種クリア
    Gvar.comments_row1 = "";
    Gvar.comments_row2 = "";
    Gvar.var_295 = "";
    Gvar.comments_row1a = "";
    Gvar.comments_row2a = "";
    Gvar.var_298 = "";
    Gvar.animationStep = 0;
  
    // テキストセット
    Gvar.comments_row1 = row1;
    Gvar.comments_row2 = row2;
  
    // 表示に必要な変数
    Gvar.var_198 = 1; // メッセージウィンドウ開く  // メッセージウィンドウON
    Gvar.var_300 = 0;  // 何らかの制御用（元のコードに合わせる）
  
    // 色の指定 (colorIndex を使う)
    Gvar.var_25_x = Gvar.var_25[colorIndex];
    Gvar.var_26_x = Gvar.var_26[colorIndex];
    Gvar.var_27_x = Gvar.var_27[colorIndex];
  
    // メッセージ履歴追加処理
    await Func.func047();
  
    // メッセージ送りの際の効果音を鳴らす (オプション)
    if (playSound) {
      await Music.func094();
    }
  
    // 必要に応じてキー入力待ち処理
    if (doWaitKey) {
      await Func.func340();
    }
  
    // 必要に応じてアニメーション表示(連続描画)
    if (doAnimation) {
      await Func.func050();
    }
  }

export {setMessage}

/**
 * 指定された回数だけ、func337(メッセージ表示処理)をループ呼び出しする関数
 * @param count - ループする回数
 */
async function AutoDraw(count: number): Promise<void> {
    for (let i = 0; i < count; i++) {
      await Func.func337();  // メッセージ表示処理(自動)
    }
}

export {AutoDraw}