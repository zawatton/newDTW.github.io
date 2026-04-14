/**
 * item568 — No = 568 ジョンガリ・Aのdiscの効果
 *
 * (org原典: newDTW_item(記憶disc))
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 568 ジョンガリ・Aのdiscの効果
async function item568(this: any) {
        await Func.AutoDraw(12);
        Gvar.var_1264 = 0;
        Gvar.var_1073 = Adap.rnd(4);
        if (Gvar.var_1073 == 0) {
            await Func.setMessage("「【筋肉】は信用できない",
                                   "  ライフルは【骨】でささえる」", 7, false, false, true);
        }
        if (Gvar.var_1073 == 1) {
            await Func.setMessage("「風が【蝿】の動きだ」",
                                   "", 7, false, false, true);
        }
        if (Gvar.var_1073 == 2) {
            await Func.setMessage("「我が【心】のささえを奪った復讐には",
                                  "決着をつけなくてはならないッ!!」", 7, false, false, true);
        }
        if (Gvar.var_1073 == 3) {
            await Func.setMessage("「15秒以内に仕留めるッ！」",
                                  "", 7, false, false, true);
        }
        await Func.AutoDraw(12);
        Adap.DSPLAY(182);
        Gvar.var_1299 = 8;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1297 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1297++;
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1297 = 0;
        Gvar.var_138 = 1;
        return;
}

export {item568}
