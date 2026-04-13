import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// ヴェネチアホテルのPCへ話しかけた時のメッセージ処理
// 旧 func818
async function func0873(this: any) {
    Gvar.var_243 = 0;
    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
    if (Gvar.var_404 == 0) {
        await Func.setMessage("パソコンが置いてある。", "まだ使えないようだ…", 7, true, false, false);
        await Func.func051(); // キー入力待ち処理
        Gvar.var_198 = 0; // メッセージウィンドウ閉じる
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
    }
    await Func.setMessage("何をしますか？", "", 7, false, false, false);
    Gvar.var_245 = 19;
    Gvar.var_246 = 45;
    Gvar.var_3196 = 0;
    Gvar.var_1204 = 1;
    await Func.func051(); // キー入力待ち処理
    await Func.func0874();
}

export {func0873}
