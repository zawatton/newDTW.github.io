/**
 * func0885 — func885 不明
 *
 * (org原典: newDTW_func8)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// レクイエムの大迷宮の入り口へ入ろうとした際のメッセージ処理
// 旧 func826
async function func0885(this: any) {
    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
    await Func.setMessage("レクイエムの大迷宮へ向かいますか？", "", 7, false, false, false);
    Gvar.var_245 = 19;
    Gvar.var_246 = 45;
    Gvar.var_546 = 1;
    Gvar.var_3199 = 1;
    Gvar.var_548 = 1; // 選択肢処理フラグON
    await Func.func0898(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
    return;
}

export {func0885}
