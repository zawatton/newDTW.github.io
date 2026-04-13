import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 旧 func719
async function func719(this: any) {
        Adap.dbgprt(719);
        await Func.setMessage("お金が足りませんヨ！",
                               "", 7, false, false, true);
        await Func.AutoDraw(6);
        Gvar.var_1202 = 0;
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {func719}
