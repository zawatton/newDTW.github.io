/**
 * func477 — アイテム拾い時に所持数 20 個超になる場合の拒否処理
 *
 * func400 (アイテム拾い) / func464 (装備disc確定) 等で var_224 >= 20 のとき
 * 経由する。「荷物がいっぱいで持ちきれない」を出して敵ターンへ。
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func477(this: any): Promise<void> {
    Adap.dbgprt(477);
    Gvar.var_221 = 0;
    Gvar.open_item_menue = 0; // 道具画面表示フラグ off
    Gvar.var_231 = 0;
    Gvar.var_234 = 0;
    await Func.setMessage("荷物がいっぱいで持ちきれない", "", 7, false, false, false);
    await Func.AutoDraw(3);
    await Func.func009(); // ディアボロ側ターン処理
}

export { func477 }
