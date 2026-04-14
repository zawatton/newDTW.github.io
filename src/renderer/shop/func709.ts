/**
 * func709 — func709 トニオさんに話しかけてアイテムを購入する際のメッセージ処理
 *
 * (org原典: newDTW_func7)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 旧 func709
async function func709(this: any) {
        Adap.dbgprt(709);
        await Func.setMessage("お買い物金額の合計は",
                               "" + Gvar.payment_amount + "G になりマス", 7, false, false, true);
        await Func.AutoDraw(6);
        Gvar.var_1202 = 1;
        Gvar.var_3117 = 2;
        await Func.func710();
        return;
}

export {func709}
