/**
 * func406 — func406 アイテムメニューからの "打つ" 選択時、射撃攻撃動作呼び出し処理
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

 // アイテムメニューからの "打つ" 選択時、射撃攻撃動作呼び出し処理
async function func406(this: any) {
        Adap.dbgprt(406);
        await Func.func647(); // 射撃攻撃動作処理
        return;
}

export {func406}
