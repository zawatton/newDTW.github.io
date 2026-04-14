/**
 * item572 — No = 572 承太郎のdiscの効果
 *
 * (org原典: newDTW_item(記憶disc))
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 572 承太郎のdiscの効果
async function item572(this: any) {
        await Func.AutoDraw(12);
        Gvar.var_1264 = 0;
        Gvar.var_1073 = Adap.rnd(4);
        if (Gvar.var_1073 == 0) {
            await Func.setMessage("「やれやれだぜ・・・」",
                                   "", 7, false, false, true);
        }
        if (Gvar.var_1073 == 1) {
            await Func.setMessage("「やれやれだぜ・・・」",
                                   "", 7, false, false, true);
        }
        if (Gvar.var_1073 == 2) {
            await Func.setMessage("「やれやれだぜ・・・」",
                                   "", 7, false, false, true);
        }
        if (Gvar.var_1073 == 3) {
            await Func.setMessage("「やれやれだぜ・・・」",
                                   "", 7, false, false, true);
        }
        await Func.AutoDraw(12);
        Adap.DSPLAY(182);
        Gvar.var_1299 = 3;
        Gvar.var_271 = 1; // エフェクト "キラキラ" 表示フラグON
        Gvar.var_1297 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            await Func.func337(); // メッセージ表示処理(自動)
            Gvar.var_1297++;
        }
        Gvar.var_271 = 0; // エフェクト "キラキラ" 表示フラグOFF
        Gvar.var_1297 = 0;
        Gvar.var_111 = 1; // 命中率を上げるフラグON
        return;
}

export {item572}
