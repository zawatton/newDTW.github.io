/**
 * item576 — No = 576 破裂するdiscの効果
 *
 * (org原典: newDTW_item(記憶disc))
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 576 破裂するdiscの効果
async function item576(this: any) {
        await Func.AutoDraw(12);
        Gvar.var_1264 = 0;
        Gvar.var_177 = 1;
        return;
}

export {item576}
