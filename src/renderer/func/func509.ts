import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func509(this: any) {
        Adap.dbgprt(509);
        await Func.setMessage1("残念ながらここでは発動できない。",
                                "", 7, false, false, false);
        Gvar.var_217 = 1;
        await Func.func019(); // ディアボロ側 ⇔ 敵側へターン変更する際の処理(ターン変化する際の割り込み処理)
        return;
}

export {func509}
