/**
 * func482 — func482 不明
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func482(this: any) {
        Adap.dbgprt(482);
        await Func.func483();
        Gvar.var_2121 = Gvar.belongings_item_list;
        await Func.func492(); // アイテムリスト呼び出し
        Gvar.var_2122 = "" + Gvar.item_name;
        Gvar.var_2123 = 0;
        await Func.func484();
        return;
}

export {func482}
