/**
 * item583 — No = 583 ディアボロのdiscの効果
 *
 * (org原典: newDTW_item(記憶disc))
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 583 ディアボロのdiscの効果
async function item583(this: any) {
    Gvar.var_1936 = 0 // アイテム毎の自動メッセージ非表示(item_message非表示)
    await Func.AutoDraw(12);
    Gvar.var_1264 = 0;
    if (Gvar.var_262 == 1) { // Gvar.var_262 == 1 なので、Gvar.dungeon_number = 0 であれば
        await Func.setMessage("しかし何も起こらなかった…", "", 7, false, false, false);
        return;
    }
    await Func.setMessage("ここは「退く」のだ……………", "", 7, true, false, true);
    await Func.setMessage("ここで一時「退く」のは", "敗北ではない……………！", 7, true, true, true);
    await Func.setMessage("オレは頂点に返り咲ける能力があるッ！", "", 7, false, false, false);
    Gvar.var_1951 = 1;
    return;
}

export {item583}
