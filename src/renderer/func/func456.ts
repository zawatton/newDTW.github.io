/**
 * func456 — func456 アヴドゥルを生き返らせてくれと選択した時の動作処理
 *
 * (org原典: newDTW_item(その他))
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func456(this: any) {
        Adap.dbgprt(456);
        Adap.DSPLAY(166);
        await Func.setMessage("ザグッ！  ザグッ！  ザグッ！",
                                "", 7, true, false, false);
        Gvar.var_1998 = 1;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func556();
        }
        Gvar.var_1998 = 0;
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {func456}
