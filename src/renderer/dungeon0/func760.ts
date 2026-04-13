import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// マリリンマンソン関係
// 旧 func760
async function func760(this: any) {
        Adap.dbgprt(760);
        Gvar.var_243 = 0;
        await Func.setMessage("「タリナイゾ…",
                               "  残り" + Gvar.var_169 + " G！」", 7, false, false, true);
        await Func.AutoDraw(10);
        await Func.func009(); // ディアボロ側ターン処理(ループ処理)
        return;
}

export {func760}
