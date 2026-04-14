/**
 * item564 — No = 564 噴上裕也のdiscの効果
 *
 * (org原典: newDTW_item(記憶disc))
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 564 噴上裕也のdiscの効果
async function item564(this: any) {
    Gvar.var_1936 = 0 // アイテム毎の自動メッセージ非表示(item_message非表示)
    await Func.AutoDraw(12);
    Gvar.var_1264 = 0;
    await Func.setMessage("「クンクンクン・・・」", "", 7, false, false, true);
    await Func.AutoDraw(32);
    if (Gvar.var_262 == 1) { // Gvar.var_262 == 1 なので、Gvar.dungeon_number = 0 であれば
        await Func.setMessage("しかし何も起こらなかった…", "", 7, false, false, false);
        return;
    }
    await Func.setMessage("この階の罠の位置がわかった！", "", 7, false, false, true);
    Gvar.var_170 = 1; // Gvar.var_170 罠が見えるようになるフラグ(あくまでMAP上に見えるだけ。噴上裕也のDISC限定)
    await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
    return;
}

export {item564}
