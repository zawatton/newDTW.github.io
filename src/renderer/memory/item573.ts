/**
 * item573 — No = 573 重ちーのdiscの効果
 *
 * (org原典: newDTW_item(記憶disc))
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 573 重ちーのdiscの効果
async function item573(this: any) {
        await Func.AutoDraw(12);
        Gvar.var_1264 = 0;
        if (Gvar.var_262 == 1) { // Gvar.var_262 == 1 なので、Gvar.dungeon_number = 0 であれば
            // Gvar.var_262 = 1でなければ "ｱｲﾃﾑの場所がわかった！"
            await Func.setMessage("しかし何も起こらなかった…",
                                   "", 7, false, false, false);
            return;
        }
        Adap.DSPLAY(184);
        Gvar.var_100 = 1;
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        return;
}

export {item573}
