/**
 * item713 — No = 713 アイテム「ポルポのライター」を使用した時の効果
 *
 * (org原典: newDTW_item(その他))
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 713 アイテム「ﾎﾟﾙﾎﾟのﾗｲﾀｰ」を使用した時の効果
async function item713(this: any) {
        await Func.AutoDraw(12);
        Gvar.var_2215 = 1;
        Gvar.var_1845 = 1;
        await Func.func556();
        Gvar.var_2215 = 0;
        Gvar.var_1845 = 0;
        await Func.AutoDraw(16);
        return;
}

export {item713}
