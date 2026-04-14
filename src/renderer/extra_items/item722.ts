/**
 * item722 — No = 722 アイテム「シーザーのバンダナ」を使用した時の効果
 *
 * (org原典: newDTW_item(その他))
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 722 アイテム「ｼｰｻﾞｰのﾊﾞﾝﾀﾞﾅ」を使用した時の効果
async function item722(this: any) {
        await Func.setMessage("「シーザーは今・・・  さっき」",
                               "", 7, true, false, true);
        await Func.setMessage("「ここで死んだ」",
                               "", 7, true, true, true);
        Adap.DSPLAY(134);
        Gvar.var_126 = 1;
        Gvar.var_166 = 0;
        return;
}

export {item722}
