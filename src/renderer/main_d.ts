/**
 * main_d — ゲームメイン処理読み込み
 *
 * 最後に、ページが完全に読み込まれた後にfunc004関数を呼び出している。
 *
 * (org原典: newDTW_main_d)
 * // @org-injected
 */
import { Gvar } from './variable'
import * as Adap from './adapter/index'
import * as Func from './func/index'
import { initI18n, installAutoTranslate } from './i18n'
import './debug'

import { ipcRenderer } from 'electron';

/* 変数の初期化はvariable.tsにて行う為コメントアウト
for (let i = 0; i < 3600; ++i) {
    eval("var Gvar.var_" + i + " = 0;");
}
*/
Gvar.var_754 = 1;
Gvar.var_2156 = 2;
Gvar.var_25 = [];
Gvar.var_26 = [];
Gvar.var_27 = [];
Gvar.var_494 = [];
Gvar.var_664 = [];
Gvar.var_691 = [];

Adap.InitInput();

//window.onload = Func.func001;
window.addEventListener('load', async function(){
    Adap.dbgprt(1);
    await initI18n();
    // 大量の代入箇所を持つメッセージプロパティに自動翻訳フックを設定。
    // これにより `Gvar.effects_message = "[発動]..."` 等が自動で t() でラップされる。
    // 直接代入(setMessageを経由しないもの)も含めて全部対象になる。
    installAutoTranslate(Gvar, 'effects_message');
    installAutoTranslate(Gvar, 'comments_row1');
    installAutoTranslate(Gvar, 'comments_row2');
    Func.func004();
    return;
})


let shutdownInitiated = false; // shutdown 処理が開始されたかどうかのフラグ

// ウィンドウの閉じるボタンを押した際にセーブする
async function runShutdownSequence(): Promise<void> {
    if (typeof Gvar === 'undefined' || typeof Func === 'undefined' || typeof Adap === 'undefined') {
      return;
    }
    // セーブを実行すると何故かフーファイターズが実行される
    // 防ぐ為にキー入力を初期化
    Gvar.conf_keyon = 0;
    Gvar.var_254 = 0; // var_254:入力判定[←]
    Gvar.var_257 = 0; // var_257:入力判定[→]
    Gvar.var_255 = 0; // var_255:入力判定[↑]
    Gvar.var_259 = 0; // var_259:入力判定[↓]
    Gvar.var_253 = 0;
    Gvar.var_256 = 0;
    Gvar.var_258 = 0;
    Gvar.var_260 = 0;
    Gvar.key_X_on = 0;
    Gvar.key_A_on = 0; // キーA入力初期化
    Gvar.key_Z_on = 0; // キーZ入力初期化
    Gvar.key_C_on = 0;
    Gvar.key_Shift_on = 0; // キーShift入力初期化
    Gvar.key_S_on = 0; // キーS入力初期化
    Gvar.key_F_on = 0; // Ver0.1401にて追加。キーF入力初期化

    Gvar.var_205 = 1;
    try {
      await Func.func231(); // プレイデータを保存するセーブ機能
    } catch (err) {
      // console.error("【Shutdown】 Func.func231() でエラー:", err)
    }
    if (Gvar.var_407 === 1) {
      try {
        Adap.netclose(Gvar.var_1050);
      } catch (err) {
        // console.error("【Shutdown】 Adap.netclose() でエラー:", err);
      }
    }
    try {
      Adap.end();
    } catch (err) {
      // console.error("【Shutdown】 Adap.end() でエラー:", err);
    }
  }

// メインプロセスから「window-close-adap-end」イベントを受信したときの処理
ipcRenderer.on('window-close-adap-end', async () => {
  // すでに shutdown 処理が開始されている場合は何もしない
  if (shutdownInitiated) {
    return;
  }
  shutdownInitiated = true; // フラグを立てて、以降のイベントを無視するあ
  await runShutdownSequence();
  ipcRenderer.send('close-adap-end-finished');
});