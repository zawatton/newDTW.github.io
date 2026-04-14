/**
 * func718 — func718 トニオさんの店を出る際のメッセージ処理
 *
 * (org原典: newDTW_func7)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 旧 func718
async function func718(this: any) {
        Adap.dbgprt(718);
        await Func.setMessage("ありがとうございました",
                               "", 7, false, false, true);
        Gvar.var_1202 = 0;
        await Func.AutoDraw(6);
        if (Gvar.payment_amount > 0) {
            await Func.func709(); // トニオさんに話しかけてアイテムを購入する際のメッセージ処理
            return;
        }
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {func718}
