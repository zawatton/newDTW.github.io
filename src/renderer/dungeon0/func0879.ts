/**
 * func0879 — func879 不明
 *
 * (org原典: newDTW_func8)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// Ver0.1403にて追加。// ホテルの部屋 or ホテルの外の入り口へ入ろうとした際のメッセージ処理
// 旧 func824c
async function func0879(this: any) {
    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
    await Func.setMessage("ホテルへ戻りますか？", "", 7, false, false, false); // α版で変更 「どこへ行きますか？」→「ホテルへ戻りますか？」
    Gvar.var_245 = 19;
    Gvar.var_246 = 45;
    Gvar.var_546 = 1;
    Gvar.go_to_hotel = 1; // Ver0.1403にて追加。酒場からホテルの部屋に戻る際のメッセージフラグON
    Gvar.var_548 = 1; // 選択肢処理フラグON
    await Func.func0898(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
    return;
}

export {func0879}
