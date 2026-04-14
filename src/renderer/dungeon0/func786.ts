/**
 * func786 — func786 亀の倉庫の取説へ話しかけた時のメッセージ処理
 *
 * (org原典: newDTW_func7)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 亀の倉庫の取説へ話しかけた時のメッセージ処理
// 旧 func786
async function func786(this: any) {
        Adap.dbgprt(786);
        Gvar.var_243 = 0;
        Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音

        await Func.setMessage("【亀の倉庫  使い方】", "", 7, true, false, false);
        await Func.setMessage("この部屋にはアイテムを保管することが", "できます。", 7, true, true, false);
        await Func.setMessage("部屋から出たい時は、テーブルの上に", "乗ると出ることができます。", 7, true, true, false);
        await Func.setMessage("いらないアイテムは、左にあるジッパー", "から捨てることができます。", 7, true, true, false);
        await Func.setMessage("ジッパーの上で「足元」コマンドを選ぶと", "持ち物全てを捨てられます。", 7, true, true, false);
        await Func.setMessage("たぶん亀は平気でしょう。", "けっこう栄養にするかも。", 7, true, true, false);

        // 最後にキー入力待ち + 後処理
        await Func.func051();  // キー入力待ち処理
        Gvar.var_198 = 0; // メッセージウィンドウ閉じる
        await Func.func009();  // ディアボロ側ターン処理(ループ処理)

        return;
}

export {func786}
