/**
 * func0890 — 持ち込み不可ダンジョン侵入時の警告
 *
 * (org原典: newDTW_func8)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 持ち込み不可ダンジョンにアイテムを所持した状態で入ろうとした際の忠告メッセージ処理
// 旧 func831
async function func0890(this: any) {
    await Func.setMessage("アイテムを持っていくことはできません", "", 7, false, false, false);
    await Func.AutoDraw(10);
    await Func.func009(); // ディアボロ側ターン処理(ループ処理)
    return;
}

export {func0890}
