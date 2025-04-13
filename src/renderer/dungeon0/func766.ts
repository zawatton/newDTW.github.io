import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// ヴェネチアホテルのベッドの上の本に話しかけた時のメッセージ処理
async function func766(this: any) {
        Adap.dbgprt(766);
        Gvar.var_243 = 0;
        Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音

        await Func.setMessage("ベッドの上に本が置いてある。",
                               "", 7, true, false, false);

        await Func.func051(); // キー入力待ち処理
        Gvar.var_198 = 0; // メッセージウィンドウ閉じる
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
}

export {func766}
