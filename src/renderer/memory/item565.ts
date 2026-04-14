/**
 * item565 — No = 565 プッチ神父のdiscの効果
 *
 * (org原典: newDTW_item(記憶disc))
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 565 プッチ神父のdiscの効果
async function item565(this: any) {
        Gvar.var_1936 = 0 // アイテム毎の自動メッセージ非表示(item_message非表示)
        await Func.setMessage("どのアイテムに使いますか？", "", 7, false, false, false);
        Gvar.var_1945 = 3;
        Gvar.var_1967 = Gvar.var_225;
        return;
}

export {item565}
