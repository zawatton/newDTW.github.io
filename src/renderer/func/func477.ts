import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func477(this: any) {
        Adap.dbgprt(477);
        Gvar.var_221 = 0;
        Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
        Gvar.var_231 = 0;
        Gvar.var_234 = 0;
        await Func.setMessage1("荷物がいっぱいで持ちきれない", "", 7, false, false, false);
        await Func.AutoDraw(3);
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
}

export {func477}
