/**
 * item716 — No = 716 アイテム「恐竜の化石」を使用した時の効果
 *
 * (org原典: newDTW_item(その他))
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 716 アイテム「恐竜の化石」を使用した時の効果
async function item716(this: any) {
        if (Gvar.dungeon_number != 4) {
            await Func.setMessage("しかしここでは何も起こらなかった…",
                                  "", 7, false, false, false);
            return;
        }
        Gvar.var_70 = 99;
        await Func.setMessage("遠くから声が聞こえる…",
                               "", 7, true, false, false);
        await Func.setMessage("「ここに泥棒がいると",
                               "  電話がかかったですって…？」", 7, true, true, true);
        await Func.setMessage("「ハハハ…",
                               "  きっとイタズラ電話でしょう」", 7, false, true, true);
        await Func.AutoDraw(12);
        return;
}

export {item716}
