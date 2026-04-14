/**
 * item575 — No = 575 マニッシュボーイのdiscの効果
 *
 * (org原典: newDTW_item(記憶disc))
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 575 マニッシュボーイのdiscの効果
async function item575(this: any) {
        await Func.AutoDraw(12);
        Gvar.var_1264 = 0;
        if (Gvar.equip_disc[351] == 1) {
            await Func.setMessage("装備DISCの効果によって",
                                   "眠くならなかった！", 7, false, false, false);
            return;
        }
        if (Gvar.var_120 == 1) {
            await Func.setMessage("10時間熟睡した気分になっていて",
                                   "眠くならなかった！", 7, false, false, false);
            return;
        }
        if (Gvar.var_120 == 0) {
            Gvar.var_219 = 1;
    
            Adap.DSPLAY(132);
            return;
        }
}

export {item575}
