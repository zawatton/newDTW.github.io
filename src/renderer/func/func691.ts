/**
 * func691 — func691 ヤク中の少年を倒した後にブチャラティ出現メッセージ処理
 *
 * (org原典: newDTW_func6)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func691(this: any) {
        Adap.dbgprt(691);
        await Func.func340(); // キー入力による選択処理
        Gvar.var_3096 = Gvar.var_673;
        Gvar.var_1845 = 4;
        Gvar.var_2102 = Gvar.var_347;
        Gvar.var_2103 = Gvar.var_348;
        await Func.func556();
        Gvar.var_2531 = 0;
        Gvar.var_1845 = 0;
        Gvar.var_673 = Gvar.var_3096;
        await Func.setMessage("中からﾌﾞﾁｬﾗﾃｨが現れた！", "", 8, false, false, false);
        Gvar.var_2538 = 0;
        await Func.AutoDraw(10);
        return;
}

export {func691}
