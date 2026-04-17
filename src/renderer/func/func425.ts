/**
 * func425 — func425 不明
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import { tf } from '../i18n'

async function func425(this: any) {
        Adap.dbgprt(425);
        Gvar.var_225 = Gvar.var_1886;
        Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
        await Func.func492(); // アイテムリスト呼び出し
        Gvar.var_1253 = Gvar.belongings_item_list;
        Gvar.var_1254 = 1;
        await Func.setMessage(tf("こいつに{0}を", Gvar.item_name), "喰わせてやりたいんですが", 7, true, false, false);
        await Func.AutoDraw(5);
        await Func.func340(); // キー入力による選択処理
        await Func.setMessage("かまいませんねッ！",
                                "", 7, true, false, false);
        await Func.AutoDraw(5);
        Gvar.var_1254 = 0;
        Gvar.var_234 = 0;
        Gvar.var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
        Gvar.var_251 = 0;
        await Func.func410(); // 装備したdiscを投げる時(取り外す際)の動作処理
        return;
}

export {func425}
