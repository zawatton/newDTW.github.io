/**
 * item563 — No = 563 ンドゥールのdiscの効果
 *
 * (org原典: newDTW_item(記憶disc))
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 563 ンドゥールのdiscの効果
async function item563(this: any) {
    Gvar.var_1936 = 0 // アイテム毎の自動メッセージ非表示(item_message非表示)
    await Func.setMessage("目が見えなくなってしまった！", "", 7, false, false, false);
    await Func.AutoDraw(12);
    Gvar.var_1264 = 0;
    Gvar.var_132 = 1;
    Adap.DSPLAY(153);
    return;
}

export {item563}
