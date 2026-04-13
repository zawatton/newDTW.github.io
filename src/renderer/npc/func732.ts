import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 旧 func732
async function func732(this: any) {
        Adap.dbgprt(732);
        await Func.setMessage("ｽﾋﾟｰﾄﾞﾜｺﾞﾝはｸｰﾙに去るぜ",
                                "", 7, false, false, true);
        await Func.AutoDraw(5);
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {func732}
